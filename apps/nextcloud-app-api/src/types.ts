type OCSMeta = {
  status: string
  statuscode: number
  message?: string | undefined
  totalitems?: string | undefined
  itemsperpage?: string | undefined
}
type ExAppConfig = {
  id: bigint
  appid: string
  configkey: string
  configvalue: string
  sensitive: bigint
}
type ExAppConfigValue = { configkey: string; configvalue: string }
type ExAppPreference = {
  id: bigint
  user_id: string
  appid: string
  configkey: string
  configvalue: string
  sensitive: bigint
}
type Notification = {
  app: string
  user: string
  datetime: string
  object_type: string
  object_id: string
  subject: string
  message: string
  link: string
  icon: string
}
type OccCommand = {
  id: bigint
  appid: string
  name: string
  description: string
  hidden: bigint
  arguments: { [x: string]: unknown }[]
  options: { [x: string]: unknown }[]
  usages: { [x: string]: unknown }[]
  execute_handler: string
}
type TalkBot = { id: string; secret: string }
type FileAction = {
  id: bigint
  appid: string
  name: string
  display_name: string
  mime: string
  permissions: string
  order: bigint
  icon: string
  action_handler: string
  version: string
  default_action: string | null
}
type TopMenu = {
  id: bigint
  appid: string
  name: string
  display_name: string
  icon: string
  admin_required: bigint
}
type InitialState = {
  id: bigint
  appid: string
  type: string
  name: string
  key: string
  value: { [x: string]: unknown }
}
type Script = {
  id: bigint
  appid: string
  type: string
  name: string
  path: string
  after_app_id: string
}
type Style = { id: bigint; appid: string; type: string; name: string; path: string }
type TaskProcessingProvider = {
  id: bigint | null
  app_id: string | null
  name: string | null
  display_name: string | null
  task_type: string | null
  provider: string | null
  custom_task_type: string | null
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/ocs/v2.php/apps/app_api/api/v1/log': {
      $post:
        | {
            input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } } & {
              json: { level: bigint; message: string }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } } & {
              json: { level: bigint; message: string }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ocs/v2.php/apps/app_api/api/v1/users': {
      $get: {
        input: { header: { 'OCS-APIRequest': boolean } }
        output: { ocs: { meta: OCSMeta; data: string[] } }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ocs/v2.php/apps/app_api/apps/status/:appId': {
      $put:
        | {
            input: { param: { appId: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { progress: bigint; error?: string | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { progress: bigint; error?: string | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/app_api/ex-app/status': {
      $put:
        | {
            input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } } & {
              json: { progress: bigint; error?: string | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } } & {
              json: { progress: bigint; error?: string | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/app_api/ex-app/state': {
      $get:
        | {
            input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: bigint } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/app_api/api/v1/info/nextcloud_url/absolute': {
      $get: {
        input: { query: { url: string } } & { header: { 'OCS-APIRequest': boolean } }
        output: { ocs: { meta: OCSMeta; data: { absolute_url: string } } }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ocs/v2.php/apps/app_api/api/v1/ex-app/config': {
      $post:
        | {
            input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } } & {
              json: {
                configKey: string
                configValue: { [x: string]: unknown }
                sensitive?: (bigint | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: ExAppConfig } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } } & {
              json: {
                configKey: string
                configValue: { [x: string]: unknown }
                sensitive?: (bigint | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { query: { 'configKeys[]': string[] } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: bigint } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { 'configKeys[]': string[] } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { 'configKeys[]': string[] } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/app_api/api/v1/ex-app/config/get-values': {
      $post: {
        input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } } & {
          json: { configKeys: string[] }
        }
        output: { ocs: { meta: OCSMeta; data: ExAppConfigValue[] } }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ocs/v2.php/apps/app_api/api/v1/ex-app/preference': {
      $post:
        | {
            input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } } & {
              json: {
                configKey: string
                configValue: { [x: string]: unknown }
                sensitive?: (bigint | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: ExAppPreference } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } } & {
              json: {
                configKey: string
                configValue: { [x: string]: unknown }
                sensitive?: (bigint | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { query: { 'configKeys[]': string[] } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: bigint } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { 'configKeys[]': string[] } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { 'configKeys[]': string[] } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/app_api/api/v1/ex-app/preference/get-values': {
      $post: {
        input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } } & {
          json: { configKeys: string[] }
        }
        output: { ocs: { meta: OCSMeta; data: ExAppConfigValue[] } }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ocs/v2.php/apps/app_api/api/v1/notification': {
      $post:
        | {
            input: {
              header: {
                'ex-app-id'?: string | undefined
                'authorization-app-api'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & { json: { params: { [x: string]: { [x: string]: unknown } } } }
            output: { ocs: { meta: OCSMeta; data: Notification } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'ex-app-id'?: string | undefined
                'authorization-app-api'?: string | undefined
                'OCS-APIRequest': boolean
              }
            } & { json: { params: { [x: string]: { [x: string]: unknown } } } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/app_api/api/v1/occ_command': {
      $post:
        | {
            input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } } & {
              json: {
                name: string
                description: string
                execute_handler: string
                hidden?: bigint | undefined
                arguments?: { [x: string]: unknown }[] | undefined
                options?: { [x: string]: unknown }[] | undefined
                usages?: { [x: string]: unknown }[] | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } } & {
              json: {
                name: string
                description: string
                execute_handler: string
                hidden?: bigint | undefined
                arguments?: { [x: string]: unknown }[] | undefined
                options?: { [x: string]: unknown }[] | undefined
                usages?: { [x: string]: unknown }[] | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { query: { name: string } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { name: string } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { query: { name: string } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: OccCommand } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { name: string } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/app_api/api/v1/talk_bot': {
      $post:
        | {
            input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } } & {
              json: { name: string; route: string; description: string }
            }
            output: { ocs: { meta: OCSMeta; data: TalkBot } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } } & {
              json: { name: string; route: string; description: string }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { query: { route: string } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: boolean } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { route: string } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/app_api/api/v1/talk_proxy/:appId/:route': {
      $post:
        | {
            input: { param: { appId: string; route: string } } & {
              header: {
                'x-nextcloud-talk-random'?: string | undefined
                'x-nextcloud-talk-signature'?: string | undefined
                'OCS-APIRequest': boolean
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; route: string } } & {
              header: {
                'x-nextcloud-talk-random'?: string | undefined
                'x-nextcloud-talk-signature'?: string | undefined
                'OCS-APIRequest': boolean
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { appId: string; route: string } } & {
              header: {
                'x-nextcloud-talk-random'?: string | undefined
                'x-nextcloud-talk-signature'?: string | undefined
                'OCS-APIRequest': boolean
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/apps/app_api/api/v1/ui/files-actions-menu': {
      $post:
        | {
            input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } } & {
              json: {
                name: string
                displayName: string
                actionHandler: string
                icon?: string | undefined
                mime?: string | undefined
                permissions?: bigint | undefined
                order?: bigint | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } } & {
              json: {
                name: string
                displayName: string
                actionHandler: string
                icon?: string | undefined
                mime?: string | undefined
                permissions?: bigint | undefined
                order?: bigint | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { query: { name: string } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { name: string } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { query: { name: string } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: FileAction } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { name: string } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/app_api/api/v2/ui/files-actions-menu': {
      $post:
        | {
            input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } } & {
              json: {
                name: string
                displayName: string
                actionHandler: string
                icon?: string | undefined
                mime?: string | undefined
                permissions?: bigint | undefined
                order?: bigint | undefined
                defaultAction?: string | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } } & {
              json: {
                name: string
                displayName: string
                actionHandler: string
                icon?: string | undefined
                mime?: string | undefined
                permissions?: bigint | undefined
                order?: bigint | undefined
                defaultAction?: string | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ocs/v2.php/apps/app_api/api/v1/ui/top-menu': {
      $post:
        | {
            input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } } & {
              json: {
                name: string
                displayName: string
                icon?: string | undefined
                adminRequired?: bigint | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } } & {
              json: {
                name: string
                displayName: string
                icon?: string | undefined
                adminRequired?: bigint | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { query: { name: string } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { name: string } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { query: { name: string } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: TopMenu } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { name: string } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/app_api/api/v1/ui/initial-state': {
      $post:
        | {
            input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } } & {
              json: {
                type: string
                name: string
                key: string
                value: { [x: string]: { [x: string]: unknown } }
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } } & {
              json: {
                type: string
                name: string
                key: string
                value: { [x: string]: { [x: string]: unknown } }
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { query: { type: string; name: string; key: string } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { type: string; name: string; key: string } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { query: { type: string; name: string; key: string } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: InitialState } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { type: string; name: string; key: string } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/app_api/api/v1/ui/script': {
      $post:
        | {
            input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } } & {
              json: { type: string; name: string; path: string; afterAppId?: string | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } } & {
              json: { type: string; name: string; path: string; afterAppId?: string | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { query: { type: string; name: string; path: string } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { type: string; name: string; path: string } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { query: { type: string; name: string; path: string } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: Script } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { type: string; name: string; path: string } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/app_api/api/v1/ui/style': {
      $post:
        | {
            input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } } & {
              json: { type: string; name: string; path: string }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } } & {
              json: { type: string; name: string; path: string }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { query: { type: string; name: string; path: string } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { type: string; name: string; path: string } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { query: { type: string; name: string; path: string } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: Style } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { type: string; name: string; path: string } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/app_api/api/v1/ui/settings': {
      $post:
        | {
            input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } } & {
              json: { formScheme: { [x: string]: { [x: string]: unknown } } }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } } & {
              json: { formScheme: { [x: string]: { [x: string]: unknown } } }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { query: { formId: string } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { formId: string } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { query: { formId: string } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: { [x: string]: unknown } } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { formId: string } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/app_api/api/v1/ai_provider/task_processing': {
      $post:
        | {
            input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } } & {
              json: {
                provider: { [x: string]: { [x: string]: unknown } }
                customTaskType?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } } & {
              json: {
                provider: { [x: string]: { [x: string]: unknown } }
                customTaskType?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { query: { name: string } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { name: string } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { query: { name: string } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: TaskProcessingProvider } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { name: string } } & {
              header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/app_api/api/v1/setup_check': {
      $post: {
        input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } }
        output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { header: { 'ex-app-id'?: string | undefined; 'OCS-APIRequest': boolean } }
        output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
