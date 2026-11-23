type OCSMeta = {
  status: string
  statuscode: number
  message?: string | undefined
  totalitems?: string | undefined
  itemsperpage?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/ocs/v2.php/apps/files_reminders/api/v{version}/:fileId': {
      $get:
        | {
            input: { param: { version: string; fileId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { dueDate: string | null } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { version: string; fileId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output:
              | { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
              | { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { param: { version: string; fileId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { dueDate: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { version: string; fileId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { dueDate: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { version: string; fileId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { dueDate: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { version: string; fileId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { dueDate: string } }
            output:
              | { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
              | { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { version: string; fileId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { dueDate: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { version: string; fileId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { version: string; fileId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output:
              | { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
              | { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { version: string; fileId: bigint } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
