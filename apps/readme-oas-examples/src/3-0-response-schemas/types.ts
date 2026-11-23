type Pet = {
  id?: bigint | undefined
  name: string
  name2?: string | undefined
  name3?: string | undefined
  name4?: string | undefined
  name5?: string | undefined
  name6?: string | undefined
  name7?: string | undefined
  name8?: string | undefined
  name9?: string | undefined
  name10?: string | undefined
  name11?: string | undefined
  name12?: string | undefined
  name13?: string | undefined
  name14?: string | undefined
  name15?: string | undefined
  name16?: string | undefined
  name17?: string | undefined
  name18?: string | undefined
  name19?: string | undefined
  photoUrls: string[]
  status?: 'available' | 'pending' | 'sold' | undefined
}
type Object = {
  primitive?: string | undefined
  'read-only'?: string | undefined
  'write-only'?: string | undefined
  object?: { primitive?: boolean | undefined } | undefined
  array?: { primitive?: boolean | undefined }[] | undefined
  pets?: Pet[] | undefined
}
type Node = { children?: Node[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/anything/array-of-primitives': {
      $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/anything/object': {
      $get: { input: { json: Object }; output: Object; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/anything/markdown': {
      $get:
        | { input: {}; output: Object; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Object; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/anything/array-of-objects': {
      $get: { input: {}; output: Object[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/anything/polymorphism': {
      $get: { input: {}; output: string | Pet | string; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/anything/recursive': {
      $get: { input: {}; output: Node[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/anything/returns-as-json-but-is-actually-string': {
      $get: { input: {}; output: string; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/multiple-responses/object': {
      $get:
        | {
            input: {}
            output: { hello?: string | undefined; there?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { obi?: string | undefined; wan?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  },
  '/'
>
export default routes
