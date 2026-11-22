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
    '/ocs/v2.php/apps/user_ldap/api/v1/config': {
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { configID: string } } }
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
    '/ocs/v2.php/apps/user_ldap/api/v1/config/:configID': {
      $delete:
        | {
            input: { param: { configID: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { configID: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { configID: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { configID: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { configID: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { configData: { [x: string]: { [x: string]: unknown } } }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: { [x: string]: unknown } } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { configID: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { configData: { [x: string]: { [x: string]: unknown } } }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { configID: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { configData: { [x: string]: { [x: string]: unknown } } }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { configID: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { configData: { [x: string]: { [x: string]: unknown } } }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { configID: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { configData: { [x: string]: { [x: string]: unknown } } }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { configID: string } } & {
              query: { showPassword?: boolean | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: { [x: string]: unknown } } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { configID: string } } & {
              query: { showPassword?: boolean | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { configID: string } } & {
              query: { showPassword?: boolean | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { configID: string } } & {
              query: { showPassword?: boolean | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/user_ldap/api/v1/config/:configID/test': {
      $post:
        | {
            input: { param: { configID: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { success: boolean; message: string } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { configID: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { configID: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { configID: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/user_ldap/api/v1/config/:configID/copy': {
      $post:
        | {
            input: { param: { configID: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { configID: string } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { configID: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { configID: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { configID: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/user_ldap/api/v1/wizard/:configID/:wizardAction': {
      $post:
        | {
            input: { param: { configID: string; wizardAction: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { loginName?: (string | null) | undefined } }
            output: {
              ocs: {
                meta: OCSMeta
                data: {
                  changes: { [x: string]: bigint | string | bigint[] | string[] }
                  options?: { [x: string]: string[] } | undefined
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { configID: string; wizardAction: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { loginName?: (string | null) | undefined } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { configID: string; wizardAction: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { loginName?: (string | null) | undefined } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/apps/user_ldap/api/v1/wizard/clearMappings': {
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { subject: 'user' | 'group' }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { subject: 'user' | 'group' }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { subject: 'user' | 'group' }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
    }
  },
  '/'
>
export default routes
