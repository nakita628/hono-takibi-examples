type Ref = number
type RefWithRef = {
  code?: number | undefined
  text?: string | undefined
  array?: Ref[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/post': {
      $post: {
        input: {
          json: {
            'object with `additionalProperties: true`'?: { [x: string]: unknown } | undefined
            'object with `additionalProperties: false` and no other properties'?: {} | undefined
            'object with `additionalProperties: { type: integer }`'?:
              | { [x: string]: number }
              | undefined
            'object with `additionalProperties: { type: object, properties: ... }`'?:
              | { [x: string]: { code?: number | undefined; text?: string | undefined } }
              | undefined
            'object with `additionalProperties: { type: object, properties: ... }` and custom title'?:
              | { [x: string]: { code?: number | undefined; text?: string | undefined } }
              | undefined
            'object with `additionalProperties: { type: array, items: { type: integer } }`'?:
              | { [x: string]: number[] }
              | undefined
            'object with `additionalProperties: $ref, simple`'?: { [x: string]: Ref } | undefined
            'object with `additionalProperties: $ref, with $ref`'?:
              | { [x: string]: RefWithRef }
              | undefined
            'object with `additionalPropeties` within an allOf'?:
              | {
                  primitiveProperty?: string | undefined
                  alt_primitiveProperty?: string | undefined
                }
              | undefined
          }
        }
        output: {
          'object with `additionalProperties: true`'?: { [x: string]: unknown } | undefined
          'object with `additionalProperties: { type: integer }`'?:
            | { [x: string]: number }
            | undefined
          'object with `additionalProperties: { type: object, properties: ... }`'?:
            | { [x: string]: { code?: number | undefined; text?: string | undefined } }
            | undefined
          'object with `additionalProperties: { type: object, properties: ... }` and custom title'?:
            | { [x: string]: { code?: number | undefined; text?: string | undefined } }
            | undefined
          'object with `additionalProperties: { type: array, items: { type: integer } }`'?:
            | { [x: string]: number[] }
            | undefined
          'object with `additionalProperties: $ref, simple`'?: { [x: string]: Ref } | undefined
          'object with `additionalProperties: $ref, with $ref`'?:
            | { [x: string]: RefWithRef }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
