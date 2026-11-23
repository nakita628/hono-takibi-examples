type OCSMeta = {
  status: string
  statuscode: number
  message?: string | undefined
  totalitems?: string | undefined
  itemsperpage?: string | undefined
}
type PendingFederatedCalendar = {
  id: bigint
  displayName: string
  color: string | null
  sharedBy: string
  sharedByDisplayName: string
  remoteUrl: string
  permissions: bigint
  components: string
}
type UpcomingEvent = {
  uri: string
  calendarUri: string
  start: bigint | null
  summary: string | null
  location: string | null
}
type CurrentOutOfOfficeData = {
  userId: string
  message: string
  replacementUserId: string | null
  replacementUserDisplayName: string | null
  id: string
  startDate: bigint
  endDate: bigint
  shortMessage: string
}
type OutOfOfficeData = {
  userId: string
  message: string
  replacementUserId: string | null
  replacementUserDisplayName: string | null
  id: bigint
  firstDay: string
  lastDay: string
  status: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/ocs/v2.php/apps/dav/api/v1/direct': {
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { fileId: bigint; expirationTime?: bigint | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { url: string } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { fileId: bigint; expirationTime?: bigint | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { fileId: bigint; expirationTime?: bigint | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { fileId: bigint; expirationTime?: bigint | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { fileId: bigint; expirationTime?: bigint | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/dav/api/v1/federated_calendars/pending': {
      $get:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: PendingFederatedCalendar[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output:
              | { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
              | { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/dav/api/v1/federated_calendars/pending/:id': {
      $post:
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
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
            status: 404
          }
      $delete:
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
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
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/dav/api/v1/events/upcoming': {
      $get:
        | {
            input: { query: { location?: (string | null) | undefined } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { events: UpcomingEvent[] } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { location?: (string | null) | undefined } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output:
              | { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
              | { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/dav/api/v1/outOfOffice/:userId/now': {
      $get:
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: CurrentOutOfOfficeData } }
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
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/dav/api/v1/outOfOffice/:userId': {
      $get:
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: OutOfOfficeData } }
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
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                firstDay: string
                lastDay: string
                status: string
                message: string
                replacementUserId?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: OutOfOfficeData } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                firstDay: string
                lastDay: string
                status: string
                message: string
                replacementUserId?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { error: 'firstDay' | 'statusLength' } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                firstDay: string
                lastDay: string
                status: string
                message: string
                replacementUserId?: (string | null) | undefined
              }
            }
            output:
              | { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
              | { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                firstDay: string
                lastDay: string
                status: string
                message: string
                replacementUserId?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output:
              | { ocs: { meta: OCSMeta; data: { [x: string]: unknown } | null } }
              | { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/calendar/export': {
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                target: string
                type?: (string | null) | undefined
                options?: { rangeStart: string; rangeCount: bigint } | undefined
                user?: (string | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                target: string
                type?: (string | null) | undefined
                options?: { rangeStart: string; rangeCount: bigint } | undefined
                user?: (string | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                target: string
                type?: (string | null) | undefined
                options?: { rangeStart: string; rangeCount: bigint } | undefined
                user?: (string | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                target: string
                type?: (string | null) | undefined
                options?: { rangeStart: string; rangeCount: bigint } | undefined
                user?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { error?: string | undefined } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                target: string
                type?: (string | null) | undefined
                options?: { rangeStart: string; rangeCount: bigint } | undefined
                user?: (string | null) | undefined
              }
            }
            output:
              | { ocs: { meta: OCSMeta; data: { error?: string | undefined } } }
              | { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/calendar/import': {
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                transaction: string
                target: string
                options: {
                  format?: string | undefined
                  validation?: 0n | 1n | 2n | undefined
                  errors?: 0n | 1n | undefined
                  supersede?: boolean | undefined
                  showCreated?: boolean | undefined
                  showUpdated?: boolean | undefined
                  showSkipped?: boolean | undefined
                  showErrors?: boolean | undefined
                }
                data: string
                user?: (string | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                transaction: string
                target: string
                options: {
                  format?: string | undefined
                  validation?: 0n | 1n | 2n | undefined
                  errors?: 0n | 1n | undefined
                  supersede?: boolean | undefined
                  showCreated?: boolean | undefined
                  showUpdated?: boolean | undefined
                  showSkipped?: boolean | undefined
                  showErrors?: boolean | undefined
                }
                data: string
                user?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { error?: string | undefined } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                transaction: string
                target: string
                options: {
                  format?: string | undefined
                  validation?: 0n | 1n | 2n | undefined
                  errors?: 0n | 1n | undefined
                  supersede?: boolean | undefined
                  showCreated?: boolean | undefined
                  showUpdated?: boolean | undefined
                  showSkipped?: boolean | undefined
                  showErrors?: boolean | undefined
                }
                data: string
                user?: (string | null) | undefined
              }
            }
            output:
              | { ocs: { meta: OCSMeta; data: { error?: string | undefined } } }
              | { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/contacts/import': {
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                transaction: string
                target: string
                options: {
                  format?: string | undefined
                  validation?: 0n | 1n | 2n | undefined
                  errors?: 0n | 1n | undefined
                  supersede?: boolean | undefined
                }
                data: string
                user?: (string | null) | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                transaction: string
                target: string
                options: {
                  format?: string | undefined
                  validation?: 0n | 1n | 2n | undefined
                  errors?: 0n | 1n | undefined
                  supersede?: boolean | undefined
                }
                data: string
                user?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { error?: string | undefined } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                transaction: string
                target: string
                options: {
                  format?: string | undefined
                  validation?: 0n | 1n | 2n | undefined
                  errors?: 0n | 1n | undefined
                  supersede?: boolean | undefined
                }
                data: string
                user?: (string | null) | undefined
              }
            }
            output:
              | { ocs: { meta: OCSMeta; data: { error?: string | undefined } } }
              | { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  },
  '/'
>
export default routes
