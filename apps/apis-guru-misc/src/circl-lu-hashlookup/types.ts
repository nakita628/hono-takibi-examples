declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/bulk/md5': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/bulk/sha1': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/children/:sha1/:count/:cursor': {
      $get:
        | {
            input: { param: { sha1: string; count: number; cursor: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { sha1: string; count: number; cursor: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { sha1: string; count: number; cursor: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & { '/info': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/lookup/md5/:md5': {
      $get:
        | { input: { param: { md5: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { md5: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { md5: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/lookup/sha1/:sha1': {
      $get:
        | { input: { param: { sha1: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { sha1: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { sha1: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/lookup/sha256/:sha256': {
      $get:
        | { input: { param: { sha256: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { sha256: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { sha256: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/parents/:sha1/:count/:cursor': {
      $get:
        | {
            input: { param: { sha1: string; count: number; cursor: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { sha1: string; count: number; cursor: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { sha1: string; count: number; cursor: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/session/create/:name': {
      $get:
        | { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { name: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { name: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/session/get/:name': {
      $get:
        | { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { name: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { name: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/stats/top': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  },
  '/'
>
export default routes
