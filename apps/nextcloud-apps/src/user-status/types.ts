type OCSMeta = {
  status: string
  statuscode: number
  message?: string | undefined
  totalitems?: string | undefined
  itemsperpage?: string | undefined
}
type Type = 'online' | 'away' | 'dnd' | 'busy' | 'offline' | 'invisible'
type Private = {
  userId: string
  message: string | null
  icon: string | null
  clearAt: bigint | null
  status: Type
  messageId: string | null
  messageIsPredefined: boolean
  statusIsUserDefined: boolean
}
type ClearAtTimeType = 'day' | 'week'
type Predefined = {
  id: string
  icon: string
  message: string
  clearAt: { type: 'period' | 'end-of'; time: bigint | ClearAtTimeType }
}
type Public = {
  userId: string
  message: string | null
  icon: string | null
  clearAt: bigint | null
  status: Type
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/ocs/v2.php/apps/user_status/api/v1/heartbeat': {
      $put:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & { json: { status: string } }
            output: { ocs: { meta: OCSMeta; data: Private } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & { json: { status: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & { json: { status: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & { json: { status: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & { json: { status: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/apps/user_status/api/v1/predefined_statuses': {
      $get:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: Predefined[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/user_status/api/v1/statuses': {
      $get:
        | {
            input: {
              query: {
                limit?: (bigint | null) | undefined
                offset?: (bigint | null) | undefined
                lastId?: (bigint | null) | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: Public[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: (bigint | null) | undefined
                offset?: (bigint | null) | undefined
                lastId?: (bigint | null) | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/user_status/api/v1/statuses/:userId': {
      $get:
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: Public } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/user_status/api/v1/user_status': {
      $get:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: Private } }
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
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/user_status/api/v1/user_status/status': {
      $put:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & { json: { statusType: string } }
            output: { ocs: { meta: OCSMeta; data: Private } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & { json: { statusType: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & { json: { statusType: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/user_status/api/v1/user_status/message/predefined': {
      $put:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { messageId: string; clearAt?: (bigint | null) | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: Private } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { messageId: string; clearAt?: (bigint | null) | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { messageId: string; clearAt?: (bigint | null) | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/user_status/api/v1/user_status/message/custom': {
      $put:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                statusIcon?: (string | null) | undefined
                message?: (string | null) | undefined
                clearAt?: (bigint | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: Private } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                statusIcon?: (string | null) | undefined
                message?: (string | null) | undefined
                clearAt?: (bigint | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                statusIcon?: (string | null) | undefined
                message?: (string | null) | undefined
                clearAt?: (bigint | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                statusIcon?: (string | null) | undefined
                message?: (string | null) | undefined
                clearAt?: (bigint | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/user_status/api/v1/user_status/message': {
      $delete:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/user_status/api/v1/user_status/revert/:messageId': {
      $delete:
        | {
            input: { param: { messageId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: Private | unknown[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { messageId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  },
  '/'
>
export default routes
