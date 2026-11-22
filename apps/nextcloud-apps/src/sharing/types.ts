type OCSMeta = {
  status: string
  statuscode: number
  message?: string | undefined
  totalitems?: string | undefined
  itemsperpage?: string | undefined
}
type IconSVG = { svg: string }
type IconURL = { light: string; dark: string }
type Icon = IconSVG | IconURL
type Permission = {
  class: string
  source_class: string | null
  display_name: string
  hint: string | null
  priority: bigint
  presets: string[]
  enabled: boolean
}
type Recipient = {
  class: string
  value: string
  instance: string | null
  display_name: string
  icon: {}
  secret: { updatable: boolean; value?: string | undefined; url?: string | undefined }
  initiator: { user_id: string; instance: string | null; display_name: string; icon: Icon }
  permissions: Permission[]
}
type User = { user_id: string; instance: string | null; display_name: string; icon: Icon }
type State = 'active' | 'draft' | 'deleted'
type Source = { class: string; value: string; display_name: string; icon: {} }
type PropertyDate = {
  class: string
  display_name: string
  hint: string | null
  priority: bigint
  required: boolean
  advanced: boolean
  value: string | null
  type: 'date'
  min_date: string | null
  max_date: string | null
}
type PropertyEnum = {
  class: string
  display_name: string
  hint: string | null
  priority: bigint
  required: boolean
  advanced: boolean
  value: string | null
  type: 'enum'
  valid_values: string[]
}
type PropertyBoolean = {
  class: string
  display_name: string
  hint: string | null
  priority: bigint
  required: boolean
  advanced: boolean
  value: string | null
  type: 'boolean'
}
type PropertyPassword = {
  class: string
  display_name: string
  hint: string | null
  priority: bigint
  required: boolean
  advanced: boolean
  value: string | null
  type: 'password'
}
type PropertyString = {
  class: string
  display_name: string
  hint: string | null
  priority: bigint
  required: boolean
  advanced: boolean
  value: string | null
  type: 'string'
  min_length: bigint | null
  max_length: bigint | null
}
type Share = {
  id: string
  owner: User
  last_updated: string
  state: State
  user_status: {}
  sources: Source[]
  recipients: Recipient[]
  properties: (PropertyDate | PropertyEnum | PropertyBoolean | PropertyPassword | PropertyString)[]
  permissions: Permission[]
  permission_preset: string | null
}
type UserStatus = 'pending' | 'accepted' | 'rejected'
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/ocs/v2.php/apps/sharing/api/v1/recipients': {
      $get:
        | {
            input: {
              query: {
                'filterRecipientTypeClasses[]'?: (string[] | null) | undefined
                query: string
                limit?: bigint | undefined
                offset?: bigint | undefined
                id?: (string | null) | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: Recipient[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filterRecipientTypeClasses[]'?: (string[] | null) | undefined
                query: string
                limit?: bigint | undefined
                offset?: bigint | undefined
                id?: (string | null) | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'filterRecipientTypeClasses[]'?: (string[] | null) | undefined
                query: string
                limit?: bigint | undefined
                offset?: bigint | undefined
                id?: (string | null) | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                'filterRecipientTypeClasses[]'?: (string[] | null) | undefined
                query: string
                limit?: bigint | undefined
                offset?: bigint | undefined
                id?: (string | null) | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/sharing/api/v1/secret': {
      $get: {
        input: { header: { 'OCS-APIRequest': boolean } }
        output: { ocs: { meta: OCSMeta; data: string } }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ocs/v2.php/apps/sharing/api/v1/share': {
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: Share } }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/sharing/api/v1/share/:id/state': {
      $put:
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { state: State }
            }
            output: { ocs: { meta: OCSMeta; data: Share } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { state: State }
            }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { state: State }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { state: State }
            }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { state: State }
            }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/sharing/api/v1/share/:id/user-status': {
      $put:
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { userStatus: UserStatus }
            }
            output: { ocs: { meta: OCSMeta; data: Share } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { userStatus: UserStatus }
            }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { userStatus: UserStatus }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { userStatus: UserStatus }
            }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/sharing/api/v1/share/:id/source': {
      $post:
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { class: string; value: string }
            }
            output: { ocs: { meta: OCSMeta; data: Share } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { class: string; value: string }
            }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { class: string; value: string }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { class: string; value: string }
            }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { class: string; value: string }
            }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { id: string } } & { query: { class: string; value: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: Share } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { class: string; value: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { class: string; value: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { class: string; value: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/sharing/api/v1/share/:id/recipient': {
      $post:
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { class: string; value: string; instance?: (string | null) | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: Share } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { class: string; value: string; instance?: (string | null) | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { class: string; value: string; instance?: (string | null) | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { class: string; value: string; instance?: (string | null) | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { class: string; value: string; instance?: (string | null) | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { id: string } } & {
              query: { class: string; value: string; instance?: (string | null) | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: Share } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { class: string; value: string; instance?: (string | null) | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { class: string; value: string; instance?: (string | null) | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { class: string; value: string; instance?: (string | null) | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/sharing/api/v1/share/:id/recipient/secret': {
      $put:
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                class: string
                value: string
                instance?: (string | null) | undefined
                secret: string
              }
            }
            output: { ocs: { meta: OCSMeta; data: Share } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                class: string
                value: string
                instance?: (string | null) | undefined
                secret: string
              }
            }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                class: string
                value: string
                instance?: (string | null) | undefined
                secret: string
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                class: string
                value: string
                instance?: (string | null) | undefined
                secret: string
              }
            }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                class: string
                value: string
                instance?: (string | null) | undefined
                secret: string
              }
            }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/sharing/api/v1/share/:id/property': {
      $put:
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { class: string; value?: (string | null) | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: Share } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { class: string; value?: (string | null) | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { class: string; value?: (string | null) | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { class: string; value?: (string | null) | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { class: string; value?: (string | null) | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/sharing/api/v1/share/:id/permission': {
      $put:
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { class: string; enabled: boolean }
            }
            output: { ocs: { meta: OCSMeta; data: Share } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { class: string; enabled: boolean }
            }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { class: string; enabled: boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { class: string; enabled: boolean }
            }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { class: string; enabled: boolean }
            }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/sharing/api/v1/share/:id/recipient/permission': {
      $put:
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                recipientClass: string
                recipientValue: string
                recipientInstance?: (string | null) | undefined
                permissionClass: string
                enabled: boolean
              }
            }
            output: { ocs: { meta: OCSMeta; data: Share } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                recipientClass: string
                recipientValue: string
                recipientInstance?: (string | null) | undefined
                permissionClass: string
                enabled: boolean
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                recipientClass: string
                recipientValue: string
                recipientInstance?: (string | null) | undefined
                permissionClass: string
                enabled: boolean
              }
            }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                recipientClass: string
                recipientValue: string
                recipientInstance?: (string | null) | undefined
                permissionClass: string
                enabled: boolean
              }
            }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/sharing/api/v1/share/:id/permission/preset': {
      $put:
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { permissionPresetClass: string }
            }
            output: { ocs: { meta: OCSMeta; data: Share } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { permissionPresetClass: string }
            }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { permissionPresetClass: string }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { permissionPresetClass: string }
            }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { permissionPresetClass: string }
            }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/sharing/api/v1/share/:id': {
      $delete:
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                secret?: (string | null) | undefined
                arguments?: { [x: string]: { [x: string]: unknown } } | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: Share } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                secret?: (string | null) | undefined
                arguments?: { [x: string]: { [x: string]: unknown } } | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/sharing/api/v1/shares': {
      $get:
        | {
            input: {
              query: {
                filterSourceTypeClass?: (string | null) | undefined
                filterSourceTypeValue?: (string | null) | undefined
                filterState?: {} | undefined
                filterUserStatus?: {} | undefined
                lastShareID?: (string | null) | undefined
                limit?: bigint | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: Share[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filterSourceTypeClass?: (string | null) | undefined
                filterSourceTypeValue?: (string | null) | undefined
                filterState?: {} | undefined
                filterUserStatus?: {} | undefined
                lastShareID?: (string | null) | undefined
                limit?: bigint | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: string } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                filterSourceTypeClass?: (string | null) | undefined
                filterSourceTypeValue?: (string | null) | undefined
                filterState?: {} | undefined
                filterUserStatus?: {} | undefined
                lastShareID?: (string | null) | undefined
                limit?: bigint | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  },
  '/'
>
export default routes
