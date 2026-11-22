declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/cookies': {
      $get: {
        input: {
          cookie: {
            primitive?: string | undefined
            array?: string[] | undefined
            object?: { name?: string | undefined; description?: string | undefined } | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/cookies#formNonExploded': {
      $get: {
        input: {
          cookie: {
            primitive?: string | undefined
            array?: string[] | undefined
            object?: { name?: string | undefined; description?: string | undefined } | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/cookies#formExploded': {
      $get: {
        input: {
          cookie: {
            primitive?: string | undefined
            array?: string[] | undefined
            object?: { name?: string | undefined; description?: string | undefined } | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/anything/headers': {
      $get: {
        input: {
          header: {
            primitive?: string | undefined
            array?: string[] | undefined
            object?: { name?: string | undefined; description?: string | undefined } | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/anything/headers/simple': {
      $get: {
        input: {
          header: {
            primitive?: string | undefined
            array?: string[] | undefined
            object?: { name?: string | undefined; description?: string | undefined } | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: {
          header: {
            primitive?: string | undefined
            array?: string[] | undefined
            object?: { name?: string | undefined; description?: string | undefined } | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/anything/path/:primitive/:array/:object': {
      $get: {
        input: {
          param: {
            primitive: string
            array: string[]
            object: { name?: string | undefined; description?: string | undefined }
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/anything/path/matrix/:primitive/:array/:object': {
      $get: {
        input: {
          param: {
            primitive: string
            array: string[]
            object: { name?: string | undefined; description?: string | undefined }
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: {
          param: {
            primitive: string
            array: string[]
            object: { name?: string | undefined; description?: string | undefined }
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/anything/path/label/:primitive/:array/:object': {
      $get: {
        input: {
          param: {
            primitive: string
            array: string[]
            object: { name?: string | undefined; description?: string | undefined }
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: {
          param: {
            primitive: string
            array: string[]
            object: { name?: string | undefined; description?: string | undefined }
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/anything/path/simple/:primitive/:array/:object': {
      $get: {
        input: {
          param: {
            primitive: string
            array: string[]
            object: { name?: string | undefined; description?: string | undefined }
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: {
          param: {
            primitive: string
            array: string[]
            object: { name?: string | undefined; description?: string | undefined }
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/anything/query': {
      $get: {
        input: {
          query: {
            primitive?: string | undefined
            array?: string[] | undefined
            object?: { name?: string | undefined; description?: string | undefined } | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/anything/query/form': {
      $get: {
        input: {
          query: {
            primitive?: string | undefined
            array?: string[] | undefined
            object?: { name?: string | undefined; description?: string | undefined } | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: {
          query: {
            primitive?: string | undefined
            array?: string[] | undefined
            object?: { name?: string | undefined; description?: string | undefined } | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/anything/query/spaceDelimited': {
      $get: {
        input: {
          query: {
            array?: string[] | undefined
            object?: { name?: string | undefined; description?: string | undefined } | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/anything/query/pipeDelimited': {
      $get: {
        input: {
          query: {
            array?: string[] | undefined
            object?: { name?: string | undefined; description?: string | undefined } | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/anything/query/deepObject': {
      $get: {
        input: {
          query: {
            object?: { name?: string | undefined; description?: string | undefined } | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/anything/form-data': {
      $post: {
        input: {
          form: {
            primitive?: string | undefined
            array?: string[] | undefined
            object?: { foo?: string | undefined; bar?: string | undefined } | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/anything/form-data/form': {
      $post: {
        input: {
          form: {
            primitive?: string | undefined
            array?: string[] | undefined
            object?: { foo?: string | undefined; bar?: string | undefined } | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: {
          form: {
            primitive?: string | undefined
            array?: string[] | undefined
            object?: { foo?: string | undefined; bar?: string | undefined } | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/anything/form-data/spaceDelimited': {
      $post: {
        input: {
          form: {
            array?: string[] | undefined
            object?: { foo?: string | undefined; bar?: string | undefined } | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/anything/form-data/pipeDelimited': {
      $post: {
        input: {
          form: {
            array?: string[] | undefined
            object?: { foo?: string | undefined; bar?: string | undefined } | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/anything/form-data/deepObject': {
      $post: {
        input: {
          form: {
            primitive?: string | undefined
            array?: string[] | undefined
            object?: { foo?: string | undefined; bar?: string | undefined } | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
