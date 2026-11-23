type OCSMeta = {
  status: string
  statuscode: number
  message?: string | undefined
  totalitems?: string | undefined
  itemsperpage?: string | undefined
}
type Operator =
  | 'is'
  | 'in'
  | 'match'
  | 'less'
  | 'greater'
  | 'matchesIPv4'
  | 'matchesIPv6'
  | '!is'
  | '!in'
  | '!match'
  | '!less'
  | '!greater'
  | '!matchesIPv4'
  | '!matchesIPv6'
type Check = { class: string; value: string; operator: Operator }
type Rule = {
  id: bigint
  class: string
  name: string
  checks: Check[]
  operation: string
  entity: string
  events: string[]
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/ocs/v2.php/apps/workflowengine/api/v1/workflows/global': {
      $get:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: Rule[] } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                class: string
                name: string
                checks: Check[]
                operation: string
                entity: string
                events: string[]
              }
            }
            output: { ocs: { meta: OCSMeta; data: Rule } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                class: string
                name: string
                checks: Check[]
                operation: string
                entity: string
                events: string[]
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                class: string
                name: string
                checks: Check[]
                operation: string
                entity: string
                events: string[]
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                class: string
                name: string
                checks: Check[]
                operation: string
                entity: string
                events: string[]
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/apps/workflowengine/api/v1/workflows/global/:id': {
      $get:
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: Rule | unknown[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
      $put:
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                name: string
                checks: Check[]
                operation: string
                entity: string
                events: string[]
              }
            }
            output: { ocs: { meta: OCSMeta; data: Rule } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                name: string
                checks: Check[]
                operation: string
                entity: string
                events: string[]
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                name: string
                checks: Check[]
                operation: string
                entity: string
                events: string[]
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                name: string
                checks: Check[]
                operation: string
                entity: string
                events: string[]
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
    '/ocs/v2.php/apps/workflowengine/api/v1/workflows/user': {
      $get:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: Rule[] } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                class: string
                name: string
                checks: Check[]
                operation: string
                entity: string
                events: string[]
              }
            }
            output: { ocs: { meta: OCSMeta; data: Rule } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                class: string
                name: string
                checks: Check[]
                operation: string
                entity: string
                events: string[]
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                class: string
                name: string
                checks: Check[]
                operation: string
                entity: string
                events: string[]
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/workflowengine/api/v1/workflows/user/:id': {
      $get:
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: Rule | unknown[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                name: string
                checks: Check[]
                operation: string
                entity: string
                events: string[]
              }
            }
            output: { ocs: { meta: OCSMeta; data: Rule } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                name: string
                checks: Check[]
                operation: string
                entity: string
                events: string[]
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                name: string
                checks: Check[]
                operation: string
                entity: string
                events: string[]
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                name: string
                checks: Check[]
                operation: string
                entity: string
                events: string[]
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
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
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
    }
  },
  '/'
>
export default routes
