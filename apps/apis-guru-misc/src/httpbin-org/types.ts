declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/absolute-redirect/:n': {
      $get: { input: { param: { n: number } }; output: {}; outputFormat: string; status: 302 }
    }
  } & {
    '/anything': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $patch: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
      $put: { input: {}; output: {}; outputFormat: string; status: 200 }
      $trace: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/anything/:anything': {
      $delete: {
        input: { param: { anything: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { anything: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $patch: {
        input: { param: { anything: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { anything: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { anything: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $trace: {
        input: { param: { anything: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/base64/:value': {
      $get: { input: { param: { value: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/basic-auth/:user/:passwd': {
      $get:
        | {
            input: { param: { user: string; passwd: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { user: string; passwd: string } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/bearer': {
      $get:
        | {
            input: { header: { Authorization?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { Authorization?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & { '/brotli': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/bytes/:n': {
      $get: { input: { param: { n: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/cache': {
      $get:
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'If-Modified-Since'?: string | undefined
                'If-None-Match'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 304
          }
    }
  } & {
    '/cache/:value': {
      $get: { input: { param: { value: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & { '/cookies': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/cookies/delete': {
      $get: {
        input: { query: { freeform?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/cookies/set': {
      $get: {
        input: { query: { freeform?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/cookies/set/:name/:value': {
      $get: {
        input: { param: { name: string; value: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & { '/deflate': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/delay/:delay': {
      $delete: {
        input: { param: { delay: number } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: { input: { param: { delay: number } }; output: {}; outputFormat: string; status: 200 }
      $patch: { input: { param: { delay: number } }; output: {}; outputFormat: string; status: 200 }
      $post: { input: { param: { delay: number } }; output: {}; outputFormat: string; status: 200 }
      $put: { input: { param: { delay: number } }; output: {}; outputFormat: string; status: 200 }
      $trace: { input: { param: { delay: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & { '/delete': { $delete: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/deny': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/digest-auth/:qop/:user/:passwd': {
      $get:
        | {
            input: { param: { qop: string; user: string; passwd: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { qop: string; user: string; passwd: string } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/digest-auth/:qop/:user/:passwd/:algorithm': {
      $get:
        | {
            input: { param: { qop: string; user: string; passwd: string; algorithm: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { qop: string; user: string; passwd: string; algorithm: string } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/digest-auth/:qop/:user/:passwd/:algorithm/:stale_after': {
      $get:
        | {
            input: {
              param: {
                qop: string
                user: string
                passwd: string
                algorithm: string
                stale_after: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              param: {
                qop: string
                user: string
                passwd: string
                algorithm: string
                stale_after: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/drip': {
      $get: {
        input: {
          query: {
            duration?: number | undefined
            numbytes?: number | undefined
            code?: number | undefined
            delay?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/encoding/utf8': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/etag/:etag': {
      $get:
        | {
            input: { param: { etag: string } } & {
              header: { 'If-None-Match'?: string | undefined; 'If-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { etag: string } } & {
              header: { 'If-None-Match'?: string | undefined; 'If-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 412
          }
    }
  } & { '/get': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/gzip': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & { '/headers': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/hidden-basic-auth/:user/:passwd': {
      $get:
        | {
            input: { param: { user: string; passwd: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { user: string; passwd: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & { '/html': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/image': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & { '/image/jpeg': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/image/png': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & { '/image/svg': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/image/webp': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & { '/ip': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/json': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/links/:n/:offset': {
      $get: {
        input: { param: { n: number; offset: number } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & { '/patch': { $patch: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/post': { $post: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & { '/put': { $put: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/range/:numbytes': {
      $get: {
        input: { param: { numbytes: number } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/redirect-to': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 302 }
      $get: {
        input: { query: { url: string; status_code?: number | undefined } }
        output: {}
        outputFormat: string
        status: 302
      }
      $patch: { input: {}; output: {}; outputFormat: string; status: 302 }
      $post: {
        input: { json: { status_code?: number | undefined; url: string } } & {
          form: { status_code?: number | undefined; url: string }
        }
        output: {}
        outputFormat: string
        status: 302
      }
      $put: {
        input: { json: { status_code?: number | undefined; url: string } } & {
          form: { status_code?: number | undefined; url: string }
        }
        output: {}
        outputFormat: string
        status: 302
      }
      $trace: { input: {}; output: {}; outputFormat: string; status: 302 }
    }
  } & {
    '/redirect/:n': {
      $get: { input: { param: { n: number } }; output: {}; outputFormat: string; status: 302 }
    }
  } & {
    '/relative-redirect/:n': {
      $get: { input: { param: { n: number } }; output: {}; outputFormat: string; status: 302 }
    }
  } & {
    '/response-headers': {
      $get: {
        input: { query: { freeform?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { freeform?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & { '/robots.txt': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/status/:codes': {
      $delete:
        | { input: { param: { codes: string } }; output: {}; outputFormat: string; status: 100 }
        | { input: { param: { codes: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { codes: string } }; output: {}; outputFormat: string; status: 300 }
        | { input: { param: { codes: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { codes: string } }; output: {}; outputFormat: string; status: 500 }
      $get:
        | { input: { param: { codes: string } }; output: {}; outputFormat: string; status: 100 }
        | { input: { param: { codes: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { codes: string } }; output: {}; outputFormat: string; status: 300 }
        | { input: { param: { codes: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { codes: string } }; output: {}; outputFormat: string; status: 500 }
      $patch:
        | { input: { param: { codes: string } }; output: {}; outputFormat: string; status: 100 }
        | { input: { param: { codes: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { codes: string } }; output: {}; outputFormat: string; status: 300 }
        | { input: { param: { codes: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { codes: string } }; output: {}; outputFormat: string; status: 500 }
      $post:
        | { input: { param: { codes: string } }; output: {}; outputFormat: string; status: 100 }
        | { input: { param: { codes: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { codes: string } }; output: {}; outputFormat: string; status: 300 }
        | { input: { param: { codes: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { codes: string } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | { input: { param: { codes: string } }; output: {}; outputFormat: string; status: 100 }
        | { input: { param: { codes: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { codes: string } }; output: {}; outputFormat: string; status: 300 }
        | { input: { param: { codes: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { codes: string } }; output: {}; outputFormat: string; status: 500 }
      $trace:
        | { input: { param: { codes: string } }; output: {}; outputFormat: string; status: 100 }
        | { input: { param: { codes: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { codes: string } }; output: {}; outputFormat: string; status: 300 }
        | { input: { param: { codes: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { codes: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/stream-bytes/:n': {
      $get: { input: { param: { n: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/stream/:n': {
      $get: { input: { param: { n: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & { '/user-agent': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/uuid': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & { '/xml': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } },
  '/'
>
export default routes
