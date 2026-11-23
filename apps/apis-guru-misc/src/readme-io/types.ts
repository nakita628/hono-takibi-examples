type Changelog = {
  body: string
  hidden?: boolean | undefined
  title: string
  type?: '' | 'added' | 'fixed' | 'improved' | 'deprecated' | 'removed' | undefined
}
type CustomPage = {
  body?: string | undefined
  hidden?: boolean | undefined
  html?: string | undefined
  htmlmode?: boolean | undefined
  title: string
}
type Doc = {
  body?: string | undefined
  category: string
  hidden?: boolean | undefined
  parentDoc?: string | undefined
  title: string
  type?: 'basic' | 'error' | 'link' | undefined
}
type Version = {
  codename?: string | undefined
  from: string
  is_beta?: boolean | undefined
  is_deprecated?: boolean | undefined
  is_hidden?: boolean | undefined
  is_stable?: boolean | undefined
  version: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  { '/': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/api-specification': {
      $get: {
        input: { query: { perPage?: number | undefined; page?: number | undefined } } & {
          header: { 'x-readme-version': string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post:
        | {
            input: { header: { 'x-readme-version': string } } & {
              form: { spec?: File | undefined }
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'x-readme-version': string } } & {
              form: { spec?: File | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api-specification/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: { param: { id: string } } & { form: { spec?: File | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { form: { spec?: File | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { form: { spec?: File | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/categories/:slug': {
      $get:
        | {
            input: { param: { slug: string } } & { header: { 'x-readme-version': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { slug: string } } & { header: { 'x-readme-version': string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/categories/:slug/docs': {
      $get:
        | {
            input: { param: { slug: string } } & { header: { 'x-readme-version': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { slug: string } } & { header: { 'x-readme-version': string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/changelogs': {
      $get: {
        input: { query: { perPage?: number | undefined; page?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post:
        | { input: { json: Changelog }; output: {}; outputFormat: string; status: 201 }
        | { input: { json: Changelog }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/changelogs/:slug': {
      $delete:
        | { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: { param: { slug: string } } & { json: Changelog }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { slug: string } } & { json: Changelog }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { slug: string } } & { json: Changelog }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/custompages': {
      $get: {
        input: { query: { perPage?: number | undefined; page?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post:
        | { input: { json: CustomPage }; output: {}; outputFormat: string; status: 201 }
        | { input: { json: CustomPage }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/custompages/:slug': {
      $delete:
        | { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: { param: { slug: string } } & { json: CustomPage }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { slug: string } } & { json: CustomPage }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { slug: string } } & { json: CustomPage }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/docs': {
      $post:
        | {
            input: { header: { 'x-readme-version': string } } & { json: Doc }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'x-readme-version': string } } & { json: Doc }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/docs/search': {
      $post:
        | {
            input: { query: { search: string } } & { header: { 'x-readme-version': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { search: string } } & { header: { 'x-readme-version': string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/docs/:slug': {
      $delete:
        | {
            input: { param: { slug: string } } & { header: { 'x-readme-version': string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { slug: string } } & { header: { 'x-readme-version': string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { slug: string } } & { header: { 'x-readme-version': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { slug: string } } & { header: { 'x-readme-version': string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { slug: string } } & { header: { 'x-readme-version': string } } & {
              json: Doc
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { slug: string } } & { header: { 'x-readme-version': string } } & {
              json: Doc
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { slug: string } } & { header: { 'x-readme-version': string } } & {
              json: Doc
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & { '/errors': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/swagger': {
      $post:
        | {
            input: { form: { swagger?: File | undefined } }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { form: { swagger?: File | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/swagger/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: { param: { id: string } } & { form: { swagger?: File | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { form: { swagger?: File | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { form: { swagger?: File | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/version': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post:
        | { input: { json: Version }; output: {}; outputFormat: string; status: 200 }
        | { input: { json: Version }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: Version }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/version/:versionId': {
      $delete:
        | { input: { param: { versionId: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { versionId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { versionId: string } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | { input: { param: { versionId: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { versionId: string } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: { param: { versionId: string } } & { json: Version }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { versionId: string } } & { json: Version }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { versionId: string } } & { json: Version }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  },
  '/'
>
export default routes
