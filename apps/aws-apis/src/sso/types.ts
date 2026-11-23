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
type ListAccountRolesResponse = { nextToken?: {} | undefined; roleList?: {} | undefined }
type ListAccountsResponse = { nextToken?: {} | undefined; accountList?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/federation/credentials#role_name&account_id&x-amz-sso_bearer_token': {
      $get: {
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
    }
  } & {
    '/assignment/roles#x-amz-sso_bearer_token&account_id': {
      $get: {
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
    }
  } & {
    '/assignment/accounts#x-amz-sso_bearer_token': {
      $get: {
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
    }
  } & {
    '/logout#x-amz-sso_bearer_token': {
      $post: {
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
    }
  },
  '/'
>
export default routes
