type AccountBalance = { autoReload?: true | false | undefined; value?: number | undefined }
type ErrorAuthenticationFailedAccountBalance = {
  'error-code'?: { [x: string]: unknown } | undefined
  'error-code-label'?: { [x: string]: unknown } | undefined
}
type RegisterEmailRequest = {
  application_ids?: { [x: string]: unknown } | undefined
  name?: string | undefined
  provider: 'email'
  value: string
}
type RegisterEmailResponse = {
  application_ids?: string[] | undefined
  name?: string | undefined
  provider?: 'email' | undefined
  value?: string | undefined
}
type AccountSettingsRequest = {
  drCallBackUrl?: string | undefined
  moCallBackUrl?: string | undefined
}
type AccountSettings = {
  'dr-callback-url'?: string | undefined
  'max-calls-per-second'?: number | undefined
  'max-inbound-request'?: number | undefined
  'max-outbound-request'?: number | undefined
  'mo-callback-url'?: string | undefined
}
type TopupRequest = { trx: string }
type Success = {
  'error-code'?: { [x: string]: unknown } | undefined
  'error-code-label'?: { [x: string]: unknown } | undefined
}
type ErrorAuthenticationFailed = {
  'error-code'?: { [x: string]: unknown } | undefined
  'error-code-label'?: { [x: string]: unknown } | undefined
}
type ErrorAutoReloadNotEnabled = {
  'error-code'?: { [x: string]: unknown } | undefined
  'error-code-label'?: { [x: string]: unknown } | undefined
}
type SecretMgmtLinks = { self?: { href?: string | undefined } | undefined }
type SecretInfo = {
  _links?: SecretMgmtLinks | undefined
  created_at?: string | undefined
  id?: string | undefined
}
type ErrorAPIKeyNotFound = { detail: string; instance: string; title: string; type: string }
type CreateSecretRequest = { secret: string }
type ErrorSecretIDNotFound = { detail: string; instance: string; title: string; type: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/account/get-balance': {
      $get:
        | {
            input: { query: { api_key: string; api_secret: string } }
            output: AccountBalance
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { api_key: string; api_secret: string } }
            output: AccountBalance
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { api_key: string; api_secret: string } }
            output: ErrorAuthenticationFailedAccountBalance
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { api_key: string; api_secret: string } }
            output: ErrorAuthenticationFailedAccountBalance
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/account/register-sender': {
      $post: {
        input: { query: { api_key: string; api_secret: string } } & { json: RegisterEmailRequest }
        output: RegisterEmailResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account/settings': {
      $post:
        | {
            input: { query: { api_key: string; api_secret: string } } & {
              json: AccountSettingsRequest
            } & { form: AccountSettingsRequest }
            output: AccountSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { api_key: string; api_secret: string } } & {
              json: AccountSettingsRequest
            } & { form: AccountSettingsRequest }
            output: AccountSettings
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { api_key: string; api_secret: string } } & {
              json: AccountSettingsRequest
            } & { form: AccountSettingsRequest }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/account/top-up': {
      $post:
        | {
            input: { query: { api_key: string; api_secret: string } } & { json: TopupRequest } & {
              form: TopupRequest
            }
            output: Success
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { api_key: string; api_secret: string } } & { json: TopupRequest } & {
              form: TopupRequest
            }
            output: Success
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { api_key: string; api_secret: string } } & { json: TopupRequest } & {
              form: TopupRequest
            }
            output: ErrorAuthenticationFailed | ErrorAutoReloadNotEnabled
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { api_key: string; api_secret: string } } & { json: TopupRequest } & {
              form: TopupRequest
            }
            output: ErrorAuthenticationFailed | ErrorAutoReloadNotEnabled
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/accounts/:api_key/secrets': {
      $get:
        | {
            input: { param: { api_key: string } }
            output: {
              _embedded?: { secrets?: SecretInfo[] | undefined } | undefined
              _links?: SecretMgmtLinks | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { api_key: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { api_key: string } }
            output: ErrorAPIKeyNotFound
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { api_key: string } } & { json: CreateSecretRequest }
            output: SecretInfo
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { api_key: string } } & { json: CreateSecretRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              invalid_parameters?:
                | { name?: string | undefined; reason?: string | undefined }[]
                | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { api_key: string } } & { json: CreateSecretRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { api_key: string } } & { json: CreateSecretRequest }
            output: ErrorAPIKeyNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/accounts/:api_key/secrets/:secret_id': {
      $delete:
        | {
            input: { param: { api_key: string; secret_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { api_key: string; secret_id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { api_key: string; secret_id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { api_key: string; secret_id: string } }
            output: ErrorAPIKeyNotFound | ErrorSecretIDNotFound
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { api_key: string; secret_id: string } }
            output: SecretInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { api_key: string; secret_id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { api_key: string; secret_id: string } }
            output: ErrorAPIKeyNotFound | ErrorSecretIDNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
