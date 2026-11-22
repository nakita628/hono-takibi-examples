type OCSMeta = {
  status: string
  statuscode: number
  message?: string | undefined
  totalitems?: string | undefined
  itemsperpage?: string | undefined
}
type WebhookInfo = {
  id: string
  userId: string
  httpMethod: string
  uri: string
  event?: string | undefined
  eventFilter?: { [x: string]: { [x: string]: unknown } } | undefined
  userIdFilter?: string | undefined
  headers?: { [x: string]: string } | undefined
  authMethod: string
  authData?: { [x: string]: { [x: string]: unknown } } | undefined
  tokenNeeded?:
    | ({
        user_ids?: { [x: string]: string } | undefined
        user_roles?: { [x: string]: string } | undefined
      } | null)
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/ocs/v2.php/apps/webhook_listeners/api/v1/webhooks': {
      $get:
        | {
            input: { query: { uri?: (string | null) | undefined } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: WebhookInfo[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uri?: (string | null) | undefined } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { uri?: (string | null) | undefined } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } } & {
              json: {
                httpMethod: string
                uri: string
                event: string
                eventFilter?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
                userIdFilter?: (string | null) | undefined
                headers?: ({ [x: string]: string } | null) | undefined
                authMethod?: 'none' | 'header' | undefined
                authData?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
                tokenNeeded?:
                  | ({ user_ids?: string[] | undefined; user_roles?: string[] | undefined } | null)
                  | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: WebhookInfo } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } } & {
              json: {
                httpMethod: string
                uri: string
                event: string
                eventFilter?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
                userIdFilter?: (string | null) | undefined
                headers?: ({ [x: string]: string } | null) | undefined
                authMethod?: 'none' | 'header' | undefined
                authData?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
                tokenNeeded?:
                  | ({ user_ids?: string[] | undefined; user_roles?: string[] | undefined } | null)
                  | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } } & {
              json: {
                httpMethod: string
                uri: string
                event: string
                eventFilter?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
                userIdFilter?: (string | null) | undefined
                headers?: ({ [x: string]: string } | null) | undefined
                authMethod?: 'none' | 'header' | undefined
                authData?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
                tokenNeeded?:
                  | ({ user_ids?: string[] | undefined; user_roles?: string[] | undefined } | null)
                  | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } } & {
              json: {
                httpMethod: string
                uri: string
                event: string
                eventFilter?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
                userIdFilter?: (string | null) | undefined
                headers?: ({ [x: string]: string } | null) | undefined
                authMethod?: 'none' | 'header' | undefined
                authData?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
                tokenNeeded?:
                  | ({ user_ids?: string[] | undefined; user_roles?: string[] | undefined } | null)
                  | undefined
              }
            }
            output:
              | { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
              | { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/apps/webhook_listeners/api/v1/webhooks/:id': {
      $get:
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: WebhookInfo } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { id: bigint } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            } & {
              json: {
                httpMethod: string
                uri: string
                event: string
                eventFilter?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
                userIdFilter?: (string | null) | undefined
                headers?: ({ [x: string]: string } | null) | undefined
                authMethod?: 'none' | 'header' | undefined
                authData?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
                tokenNeeded?:
                  | ({ user_ids?: string[] | undefined; user_roles?: string[] | undefined } | null)
                  | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: WebhookInfo } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            } & {
              json: {
                httpMethod: string
                uri: string
                event: string
                eventFilter?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
                userIdFilter?: (string | null) | undefined
                headers?: ({ [x: string]: string } | null) | undefined
                authMethod?: 'none' | 'header' | undefined
                authData?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
                tokenNeeded?:
                  | ({ user_ids?: string[] | undefined; user_roles?: string[] | undefined } | null)
                  | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            } & {
              json: {
                httpMethod: string
                uri: string
                event: string
                eventFilter?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
                userIdFilter?: (string | null) | undefined
                headers?: ({ [x: string]: string } | null) | undefined
                authMethod?: 'none' | 'header' | undefined
                authData?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
                tokenNeeded?:
                  | ({ user_ids?: string[] | undefined; user_roles?: string[] | undefined } | null)
                  | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            } & {
              json: {
                httpMethod: string
                uri: string
                event: string
                eventFilter?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
                userIdFilter?: (string | null) | undefined
                headers?: ({ [x: string]: string } | null) | undefined
                authMethod?: 'none' | 'header' | undefined
                authData?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
                tokenNeeded?:
                  | ({ user_ids?: string[] | undefined; user_roles?: string[] | undefined } | null)
                  | undefined
              }
            }
            output:
              | { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
              | { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
      $delete:
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: boolean } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output:
              | { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
              | { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/apps/webhook_listeners/api/v1/webhooks/byappid/:appid': {
      $delete:
        | {
            input: { param: { appid: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: bigint } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appid: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { appid: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { appid: string } } & { header: { 'OCS-APIRequest': boolean } }
            output:
              | { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
              | { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
    }
  },
  '/'
>
export default routes
