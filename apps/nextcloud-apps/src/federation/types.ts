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
    '/ocs/v2.php/apps/federation/api/v1/shared-secret': {
      $get:
        | {
            input: { query: { url: string; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { sharedSecret: string } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { url: string; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/apps/federation/api/v1/request-shared-secret': {
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { url: string; token: string }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { url: string; token: string }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/cloud/shared-secret': {
      $get:
        | {
            input: { query: { url: string; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { sharedSecret: string } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { url: string; token: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { url: string; token: string }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { url: string; token: string }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/apps/federation/trusted-servers': {
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & { json: { url: string } }
            output: { ocs: { meta: OCSMeta; data: { id: bigint; message: string; url: string } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & { json: { url: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & { json: { url: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & { json: { url: string } }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & { json: { url: string } }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { id: bigint; status: bigint; url: string }[] } }
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
    }
  } & {
    '/ocs/v2.php/apps/federation/trusted-servers/:id': {
      $delete:
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { id: bigint } } }
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
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
