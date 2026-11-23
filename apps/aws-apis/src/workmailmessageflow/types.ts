type GetRawMessageContentResponse = { messageContent: {} }
type ResourceNotFoundException = { [x: string]: unknown }
type PutRawMessageContentResponse = { [x: string]: unknown }
type InvalidContentLocation = { [x: string]: unknown }
type MessageRejected = { [x: string]: unknown }
type MessageFrozen = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/messages/:messageId': {
      $get:
        | {
            input: { param: { messageId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetRawMessageContentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { messageId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
      $post:
        | {
            input: { param: { messageId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                content: {
                  s3Reference?: { bucket: {}; key: {}; objectVersion?: {} | undefined } | undefined
                }
              }
            }
            output: PutRawMessageContentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { messageId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                content: {
                  s3Reference?: { bucket: {}; key: {}; objectVersion?: {} | undefined } | undefined
                }
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { messageId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                content: {
                  s3Reference?: { bucket: {}; key: {}; objectVersion?: {} | undefined } | undefined
                }
              }
            }
            output: InvalidContentLocation
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { messageId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                content: {
                  s3Reference?: { bucket: {}; key: {}; objectVersion?: {} | undefined } | undefined
                }
              }
            }
            output: MessageRejected
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { messageId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                content: {
                  s3Reference?: { bucket: {}; key: {}; objectVersion?: {} | undefined } | undefined
                }
              }
            }
            output: MessageFrozen
            outputFormat: 'json'
            status: 483
          }
    }
  },
  '/'
>
export default routes
