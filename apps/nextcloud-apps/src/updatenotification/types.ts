type OCSMeta = {
  status: string
  statuscode: number
  message?: string | undefined
  totalitems?: string | undefined
  itemsperpage?: string | undefined
}
type App = { appId: string; appName: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/ocs/v2.php/apps/updatenotification/api/:apiVersion/applist/:newVersion': {
      $get:
        | {
            input: { param: { apiVersion: 'v1'; newVersion: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { missing: App[]; available: App[] } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; newVersion: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1'; newVersion: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v1'; newVersion: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: { appstore_disabled: boolean; already_on_latest?: boolean | undefined }
              }
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/updatenotification/api/:apiVersion/changelog/:appId': {
      $get:
        | {
            input: { param: { apiVersion: 'v1'; appId: string } } & {
              query: { version?: (string | null) | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: {
              ocs: { meta: OCSMeta; data: { appName: string; content: string; version: string } }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v1'; appId: string } } & {
              query: { version?: (string | null) | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v1'; appId: string } } & {
              query: { version?: (string | null) | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiVersion: 'v1'; appId: string } } & {
              query: { version?: (string | null) | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiVersion: 'v1'; appId: string } } & {
              query: { version?: (string | null) | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
