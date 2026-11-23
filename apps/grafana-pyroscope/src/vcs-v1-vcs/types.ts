type ConnectProtocolVersion = 1
type ConnectTimeoutHeader = number
type VcsV1GetCommitRequest = { repositoryURL?: string | undefined; ref?: string | undefined }
type VcsV1CommitAuthor = { login?: string | undefined; avatarURL?: string | undefined }
type VcsV1GetCommitResponse = {
  message?: string | undefined
  author?: VcsV1CommitAuthor | undefined
  date?: string | undefined
  sha?: string | undefined
  URL?: string | undefined
}
type ConnectErrorDetailsAny = {
  type?: string | undefined
  value?: File | undefined
  debug?: { [x: string]: unknown } | undefined
}
type ConnectError = {
  code?:
    | 'canceled'
    | 'unknown'
    | 'invalid_argument'
    | 'deadline_exceeded'
    | 'not_found'
    | 'already_exists'
    | 'permission_denied'
    | 'resource_exhausted'
    | 'failed_precondition'
    | 'aborted'
    | 'out_of_range'
    | 'unimplemented'
    | 'internal'
    | 'unavailable'
    | 'data_loss'
    | 'unauthenticated'
    | undefined
  message?: string | undefined
  details?: ConnectErrorDetailsAny[] | undefined
}
type VcsV1GetCommitsRequest = { repositoryUrl?: string | undefined; refs?: string[] | undefined }
type VcsV1CommitInfo = {
  message?: string | undefined
  author?: VcsV1CommitAuthor | undefined
  date?: string | undefined
  sha?: string | undefined
  URL?: string | undefined
}
type VcsV1GetCommitsResponse = { commits?: VcsV1CommitInfo[] | undefined }
type VcsV1GetFileRequest = {
  repositoryURL?: string | undefined
  ref?: string | undefined
  localPath?: string | undefined
  rootPath?: string | undefined
  functionName?: string | undefined
}
type VcsV1GetFileResponse = { content?: string | undefined; URL?: string | undefined }
type VcsV1GithubAppRequest = {}
type VcsV1GithubAppResponse = { clientID?: string | undefined; callbackURL?: string | undefined }
type VcsV1GithubLoginRequest = { authorizationCode?: string | undefined }
type VcsV1GithubLoginResponse = {
  cookie?: string | undefined
  token?: string | undefined
  tokenExpiresAt?: bigint | string | undefined
  refreshTokenExpiresAt?: bigint | string | undefined
}
type VcsV1GithubRefreshRequest = {}
type VcsV1GithubRefreshResponse = {
  cookie?: string | undefined
  token?: string | undefined
  tokenExpiresAt?: bigint | string | undefined
  refreshTokenExpiresAt?: bigint | string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/vcs.v1.VCSService/GetCommit': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: VcsV1GetCommitRequest }
            output: VcsV1GetCommitResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: VcsV1GetCommitRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/vcs.v1.VCSService/GetCommits': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: VcsV1GetCommitsRequest }
            output: VcsV1GetCommitsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: VcsV1GetCommitsRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/vcs.v1.VCSService/GetFile': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: VcsV1GetFileRequest }
            output: VcsV1GetFileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: VcsV1GetFileRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/vcs.v1.VCSService/GithubApp': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: VcsV1GithubAppRequest }
            output: VcsV1GithubAppResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: VcsV1GithubAppRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/vcs.v1.VCSService/GithubLogin': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: VcsV1GithubLoginRequest }
            output: VcsV1GithubLoginResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: VcsV1GithubLoginRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/vcs.v1.VCSService/GithubRefresh': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: VcsV1GithubRefreshRequest }
            output: VcsV1GithubRefreshResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: VcsV1GithubRefreshRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
