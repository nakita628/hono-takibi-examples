type GetRoleCredentialsResponse = {
  roleCredentials?:
    | {
        accessKeyId?: {} | undefined
        secretAccessKey?: {} | undefined
        sessionToken?: {} | undefined
        expiration?: {} | undefined
      }
    | undefined
}
type InvalidRequestException = { [x: string]: unknown }
type UnauthorizedException = { [x: string]: unknown }
type TooManyRequestsException = { [x: string]: unknown }
type ResourceNotFoundException = { [x: string]: unknown }
type ListAccountRolesResponse = { nextToken?: {} | undefined; roleList?: {} | undefined }
type ListAccountsResponse = { nextToken?: {} | undefined; accountList?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/federation/credentials#role_name&account_id&x-amz-sso_bearer_token': {
      $get:
        | {
            input: { query: { role_name: string; account_id: string } } & {
              header: {
                'x-amz-sso_bearer_token': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetRoleCredentialsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { role_name: string; account_id: string } } & {
              header: {
                'x-amz-sso_bearer_token': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { role_name: string; account_id: string } } & {
              header: {
                'x-amz-sso_bearer_token': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { role_name: string; account_id: string } } & {
              header: {
                'x-amz-sso_bearer_token': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { role_name: string; account_id: string } } & {
              header: {
                'x-amz-sso_bearer_token': string
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
            status: 483
          }
    }
  } & {
    '/assignment/roles#x-amz-sso_bearer_token&account_id': {
      $get:
        | {
            input: {
              query: {
                next_token?: string | undefined
                max_result?: number | undefined
                account_id: string
                maxResults?: string | undefined
                nextToken?: string | undefined
              }
            } & {
              header: {
                'x-amz-sso_bearer_token': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListAccountRolesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                next_token?: string | undefined
                max_result?: number | undefined
                account_id: string
                maxResults?: string | undefined
                nextToken?: string | undefined
              }
            } & {
              header: {
                'x-amz-sso_bearer_token': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                next_token?: string | undefined
                max_result?: number | undefined
                account_id: string
                maxResults?: string | undefined
                nextToken?: string | undefined
              }
            } & {
              header: {
                'x-amz-sso_bearer_token': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                next_token?: string | undefined
                max_result?: number | undefined
                account_id: string
                maxResults?: string | undefined
                nextToken?: string | undefined
              }
            } & {
              header: {
                'x-amz-sso_bearer_token': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                next_token?: string | undefined
                max_result?: number | undefined
                account_id: string
                maxResults?: string | undefined
                nextToken?: string | undefined
              }
            } & {
              header: {
                'x-amz-sso_bearer_token': string
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
            status: 483
          }
    }
  } & {
    '/assignment/accounts#x-amz-sso_bearer_token': {
      $get:
        | {
            input: {
              query: {
                next_token?: string | undefined
                max_result?: number | undefined
                maxResults?: string | undefined
                nextToken?: string | undefined
              }
            } & {
              header: {
                'x-amz-sso_bearer_token': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListAccountsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                next_token?: string | undefined
                max_result?: number | undefined
                maxResults?: string | undefined
                nextToken?: string | undefined
              }
            } & {
              header: {
                'x-amz-sso_bearer_token': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                next_token?: string | undefined
                max_result?: number | undefined
                maxResults?: string | undefined
                nextToken?: string | undefined
              }
            } & {
              header: {
                'x-amz-sso_bearer_token': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                next_token?: string | undefined
                max_result?: number | undefined
                maxResults?: string | undefined
                nextToken?: string | undefined
              }
            } & {
              header: {
                'x-amz-sso_bearer_token': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                next_token?: string | undefined
                max_result?: number | undefined
                maxResults?: string | undefined
                nextToken?: string | undefined
              }
            } & {
              header: {
                'x-amz-sso_bearer_token': string
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
            status: 483
          }
    }
  } & {
    '/logout#x-amz-sso_bearer_token': {
      $post:
        | {
            input: {
              header: {
                'x-amz-sso_bearer_token': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-sso_bearer_token': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-sso_bearer_token': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-sso_bearer_token': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
    }
  },
  '/'
>
export default routes
