type Label = { name: string; value: string }
type SecretWithMetadata = {
  name: string
  description: string
  labels: Label[]
  uuid: string
  org_id: bigint
  stack_id: bigint
  created_by: string
  created_at: bigint
  modified_at: bigint
}
type Secret = { name: string; description: string; labels: Label[]; plaintext?: string | undefined }
type ApiResponse = {
  message: string
  code: 'ok' | 'invalid_name' | 'invalid_label_name' | 'invalid_label_value'
}
type DecryptedSecret = {
  name: string
  description: string
  labels: Label[]
  uuid: string
  org_id: bigint
  stack_id: bigint
  created_by: string
  created_at: bigint
  modified_at: bigint
  plaintext?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/secrets': {
      $get:
        | {
            input: {}
            output: { secrets: SecretWithMetadata[] }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
      $post:
        | { input: { json: Secret }; output: SecretWithMetadata; outputFormat: 'json'; status: 201 }
        | { input: { json: Secret }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: Secret }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: Secret }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: Secret }; output: {}; outputFormat: string; status: 422 }
    }
  } & {
    '/secrets/find_by_labels': {
      $get:
        | {
            input: {}
            output: { secrets: SecretWithMetadata[] }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/secrets/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SecretWithMetadata
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: { param: { id: string } } & { json: Secret }
            output: SecretWithMetadata
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: Secret }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: Secret }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: Secret }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: Secret }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: Secret }
            output: {}
            outputFormat: string
            status: 422
          }
      $delete:
        | {
            input: { param: { id: string } }
            output: ApiResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/secrets/:id/decrypt': {
      $get:
        | {
            input: { param: { id: string } }
            output: DecryptedSecret
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  },
  '/'
>
export default routes
