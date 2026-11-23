type AddShare = { recipientDisplayName: string; recipientUserId?: string | undefined }
type ValidationError = {
  message: string
  validationErrors: { name: string; message: string | null }[]
}
type Error = { message: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/index.php/ocm/shares': {
      $post:
        | {
            input: {
              json: {
                shareWith: string
                name: string
                description?: (string | null) | undefined
                providerId: string
                owner: string
                ownerDisplayName?: (string | null) | undefined
                sharedBy?: (string | null) | undefined
                sharedByDisplayName?: (string | null) | undefined
                protocol: {
                  name: string
                  options?: { [x: string]: { [x: string]: unknown } } | undefined
                  webdav?: { [x: string]: { [x: string]: unknown } } | undefined
                }
                shareType: string
                resourceType: string
              }
            }
            output: AddShare
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                shareWith: string
                name: string
                description?: (string | null) | undefined
                providerId: string
                owner: string
                ownerDisplayName?: (string | null) | undefined
                sharedBy?: (string | null) | undefined
                sharedByDisplayName?: (string | null) | undefined
                protocol: {
                  name: string
                  options?: { [x: string]: { [x: string]: unknown } } | undefined
                  webdav?: { [x: string]: { [x: string]: unknown } } | undefined
                }
                shareType: string
                resourceType: string
              }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                shareWith: string
                name: string
                description?: (string | null) | undefined
                providerId: string
                owner: string
                ownerDisplayName?: (string | null) | undefined
                sharedBy?: (string | null) | undefined
                sharedByDisplayName?: (string | null) | undefined
                protocol: {
                  name: string
                  options?: { [x: string]: { [x: string]: unknown } } | undefined
                  webdav?: { [x: string]: { [x: string]: unknown } } | undefined
                }
                shareType: string
                resourceType: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 501
          }
    }
  } & {
    '/index.php/ocm/notifications': {
      $post:
        | {
            input: {
              json: {
                notificationType: string
                resourceType: string
                providerId?: (string | null) | undefined
                notification?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
              }
            }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                notificationType: string
                resourceType: string
                providerId?: (string | null) | undefined
                notification?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
              }
            }
            output: ValidationError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                notificationType: string
                resourceType: string
                providerId?: (string | null) | undefined
                notification?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                notificationType: string
                resourceType: string
                providerId?: (string | null) | undefined
                notification?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 501
          }
    }
  },
  '/'
>
export default routes
