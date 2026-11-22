type OCSMeta = {
  status: string
  statuscode: number
  message?: string | undefined
  totalitems?: string | undefined
  itemsperpage?: string | undefined
}
type DeclarativeFormField = {
  id: string
  title: string
  description?: string | undefined
  type:
    | 'text'
    | 'password'
    | 'email'
    | 'tel'
    | 'url'
    | 'number'
    | 'checkbox'
    | 'multi-checkbox'
    | 'radio'
    | 'select'
    | 'multi-select'
  placeholder?: string | undefined
  label?: string | undefined
  default: { [x: string]: unknown }
  options?: (string | { name: string; value: { [x: string]: unknown } })[] | undefined
  value: string | bigint | number | boolean | string[]
  sensitive?: boolean | undefined
}
type DeclarativeForm = {
  id: string
  priority: bigint
  section_type: 'admin' | 'personal'
  section_id: string
  storage_type: 'internal' | 'external'
  title: string
  description?: string | undefined
  doc_url?: string | undefined
  app: string
  fields: DeclarativeFormField[]
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/index.php/settings/admin/log/download': {
      $get:
        | { input: {}; output: File; outputFormat: 'text'; status: 200 }
        | { input: {}; output: { message: string }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { message: string }; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/ocs/v2.php/settings/api/declarative/value': {
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                app: string
                formId: string
                fieldId: string
                value: { [x: string]: unknown }
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                app: string
                formId: string
                fieldId: string
                value: { [x: string]: unknown }
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                app: string
                formId: string
                fieldId: string
                value: { [x: string]: unknown }
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                app: string
                formId: string
                fieldId: string
                value: { [x: string]: unknown }
              }
            }
            output: string
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/settings/api/declarative/value-sensitive': {
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                app: string
                formId: string
                fieldId: string
                value: { [x: string]: unknown }
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                app: string
                formId: string
                fieldId: string
                value: { [x: string]: unknown }
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                app: string
                formId: string
                fieldId: string
                value: { [x: string]: unknown }
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                app: string
                formId: string
                fieldId: string
                value: { [x: string]: unknown }
              }
            }
            output: string
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/settings/api/declarative/forms': {
      $get:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: DeclarativeForm[] } }
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
            output: string
            outputFormat: 'text'
            status: 500
          }
    }
  },
  '/'
>
export default routes
