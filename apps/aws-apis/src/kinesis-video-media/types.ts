type GetMediaOutput = { Payload?: {} | undefined }
type ResourceNotFoundException = { [x: string]: unknown }
type NotAuthorizedException = { [x: string]: unknown }
type InvalidEndpointException = { [x: string]: unknown }
type ClientLimitExceededException = { [x: string]: unknown }
type ConnectionLimitExceededException = { [x: string]: unknown }
type InvalidArgumentException = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/getMedia': {
      $post:
        | {
            input: {
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                StartSelector: {
                  StartSelectorType?: {} | undefined
                  AfterFragmentNumber?: {} | undefined
                  StartTimestamp?: {} | undefined
                  ContinuationToken?: {} | undefined
                }
              }
            }
            output: GetMediaOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                StartSelector: {
                  StartSelectorType?: {} | undefined
                  AfterFragmentNumber?: {} | undefined
                  StartTimestamp?: {} | undefined
                  ContinuationToken?: {} | undefined
                }
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                StartSelector: {
                  StartSelectorType?: {} | undefined
                  AfterFragmentNumber?: {} | undefined
                  StartTimestamp?: {} | undefined
                  ContinuationToken?: {} | undefined
                }
              }
            }
            output: NotAuthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                StartSelector: {
                  StartSelectorType?: {} | undefined
                  AfterFragmentNumber?: {} | undefined
                  StartTimestamp?: {} | undefined
                  ContinuationToken?: {} | undefined
                }
              }
            }
            output: InvalidEndpointException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                StartSelector: {
                  StartSelectorType?: {} | undefined
                  AfterFragmentNumber?: {} | undefined
                  StartTimestamp?: {} | undefined
                  ContinuationToken?: {} | undefined
                }
              }
            }
            output: ClientLimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                StartSelector: {
                  StartSelectorType?: {} | undefined
                  AfterFragmentNumber?: {} | undefined
                  StartTimestamp?: {} | undefined
                  ContinuationToken?: {} | undefined
                }
              }
            }
            output: ConnectionLimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                StartSelector: {
                  StartSelectorType?: {} | undefined
                  AfterFragmentNumber?: {} | undefined
                  StartTimestamp?: {} | undefined
                  ContinuationToken?: {} | undefined
                }
              }
            }
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 485
          }
    }
  },
  '/'
>
export default routes
