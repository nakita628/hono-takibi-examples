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
    '/ocs/v2.php/apps/viewer/api/v1/config/:key': {
      $put:
        | {
            input: { param: { key: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { value: bigint | boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { key: string; value: bigint | boolean } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { value: bigint | boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { key: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { value: bigint | boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  },
  '/'
>
export default routes
