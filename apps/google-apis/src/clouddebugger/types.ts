type AliasContext = {
  kind?: 'ANY' | 'FIXED' | 'MOVABLE' | 'OTHER' | undefined
  name?: string | undefined
}
type ProjectRepoId = { projectId?: string | undefined; repoName?: string | undefined }
type RepoId = { projectRepoId?: ProjectRepoId | undefined; uid?: string | undefined }
type CloudRepoSourceContext = {
  aliasContext?: AliasContext | undefined
  aliasName?: string | undefined
  repoId?: RepoId | undefined
  revisionId?: string | undefined
}
type CloudWorkspaceId = { name?: string | undefined; repoId?: RepoId | undefined }
type CloudWorkspaceSourceContext = {
  snapshotId?: string | undefined
  workspaceId?: CloudWorkspaceId | undefined
}
type GerritSourceContext = {
  aliasContext?: AliasContext | undefined
  aliasName?: string | undefined
  gerritProject?: string | undefined
  hostUri?: string | undefined
  revisionId?: string | undefined
}
type GitSourceContext = { revisionId?: string | undefined; url?: string | undefined }
type SourceContext = {
  cloudRepo?: CloudRepoSourceContext | undefined
  cloudWorkspace?: CloudWorkspaceSourceContext | undefined
  gerrit?: GerritSourceContext | undefined
  git?: GitSourceContext | undefined
}
type ExtendedSourceContext = {
  context?: SourceContext | undefined
  labels?: { [x: string]: string } | undefined
}
type FormatMessage = { format?: string | undefined; parameters?: string[] | undefined }
type StatusMessage = {
  description?: FormatMessage | undefined
  isError?: boolean | undefined
  refersTo?:
    | 'UNSPECIFIED'
    | 'BREAKPOINT_SOURCE_LOCATION'
    | 'BREAKPOINT_CONDITION'
    | 'BREAKPOINT_EXPRESSION'
    | 'BREAKPOINT_AGE'
    | 'BREAKPOINT_CANARY_FAILED'
    | 'VARIABLE_NAME'
    | 'VARIABLE_VALUE'
    | undefined
}
type Debuggee = {
  agentVersion?: string | undefined
  canaryMode?:
    | 'CANARY_MODE_UNSPECIFIED'
    | 'CANARY_MODE_ALWAYS_ENABLED'
    | 'CANARY_MODE_ALWAYS_DISABLED'
    | 'CANARY_MODE_DEFAULT_ENABLED'
    | 'CANARY_MODE_DEFAULT_DISABLED'
    | undefined
  description?: string | undefined
  extSourceContexts?: ExtendedSourceContext[] | undefined
  id?: string | undefined
  isDisabled?: boolean | undefined
  isInactive?: boolean | undefined
  labels?: { [x: string]: string } | undefined
  project?: string | undefined
  sourceContexts?: SourceContext[] | undefined
  status?: StatusMessage | undefined
  uniquifier?: string | undefined
}
type RegisterDebuggeeRequest = { debuggee?: Debuggee | undefined }
type RegisterDebuggeeResponse = { agentId?: string | undefined; debuggee?: Debuggee | undefined }
type Variable = {
  members?: Variable[] | undefined
  name?: string | undefined
  status?: StatusMessage | undefined
  type?: string | undefined
  value?: string | undefined
  varTableIndex?: number | undefined
}
type SourceLocation = {
  column?: number | undefined
  line?: number | undefined
  path?: string | undefined
}
type StackFrame = {
  arguments?: Variable[] | undefined
  function?: string | undefined
  locals?: Variable[] | undefined
  location?: SourceLocation | undefined
}
type Breakpoint = {
  action?: 'CAPTURE' | 'LOG' | undefined
  canaryExpireTime?: string | undefined
  condition?: string | undefined
  createTime?: string | undefined
  evaluatedExpressions?: Variable[] | undefined
  expressions?: string[] | undefined
  finalTime?: string | undefined
  id?: string | undefined
  isFinalState?: boolean | undefined
  labels?: { [x: string]: string } | undefined
  location?: SourceLocation | undefined
  logLevel?: 'INFO' | 'WARNING' | 'ERROR' | undefined
  logMessageFormat?: string | undefined
  stackFrames?: StackFrame[] | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'STATE_CANARY_PENDING_AGENTS'
    | 'STATE_CANARY_ACTIVE'
    | 'STATE_ROLLING_TO_ALL'
    | 'STATE_IS_FINAL'
    | undefined
  status?: StatusMessage | undefined
  userEmail?: string | undefined
  variableTable?: Variable[] | undefined
}
type ListActiveBreakpointsResponse = {
  breakpoints?: Breakpoint[] | undefined
  nextWaitToken?: string | undefined
  waitExpired?: boolean | undefined
}
type UpdateActiveBreakpointRequest = { breakpoint?: Breakpoint | undefined }
type UpdateActiveBreakpointResponse = { [x: string]: unknown }
type ListDebuggeesResponse = { debuggees?: Debuggee[] | undefined }
type ListBreakpointsResponse = {
  breakpoints?: Breakpoint[] | undefined
  nextWaitToken?: string | undefined
}
type SetBreakpointResponse = { breakpoint?: Breakpoint | undefined }
type Empty = { [x: string]: unknown }
type GetBreakpointResponse = { breakpoint?: Breakpoint | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/controller/debuggees/register': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: RegisterDebuggeeRequest }
        output: RegisterDebuggeeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/controller/debuggees/:debuggeeId/breakpoints': {
      $get: {
        input: { param: { debuggeeId: string } } & {
          query: {
            agentId?: string | undefined
            successOnTimeout?: boolean | undefined
            waitToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListActiveBreakpointsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/controller/debuggees/:debuggeeId/breakpoints/:id': {
      $put: {
        input: { param: { debuggeeId: string; id: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: UpdateActiveBreakpointRequest }
        output: UpdateActiveBreakpointResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/debugger/debuggees': {
      $get: {
        input: {
          query: {
            clientVersion?: string | undefined
            includeInactive?: boolean | undefined
            project?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListDebuggeesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/debugger/debuggees/:debuggeeId/breakpoints': {
      $get: {
        input: { param: { debuggeeId: string } } & {
          query: {
            'action.value'?: 'CAPTURE' | 'LOG' | undefined
            clientVersion?: string | undefined
            includeAllUsers?: boolean | undefined
            includeInactive?: boolean | undefined
            stripResults?: boolean | undefined
            waitToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListBreakpointsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/debugger/debuggees/:debuggeeId/breakpoints/set': {
      $post: {
        input: { param: { debuggeeId: string } } & {
          query: {
            canaryOption?:
              | 'CANARY_OPTION_UNSPECIFIED'
              | 'CANARY_OPTION_TRY_ENABLE'
              | 'CANARY_OPTION_TRY_DISABLE'
              | undefined
            clientVersion?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Breakpoint }
        output: SetBreakpointResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/debugger/debuggees/:debuggeeId/breakpoints/:breakpointId': {
      $delete: {
        input: { param: { debuggeeId: string; breakpointId: string } } & {
          query: {
            clientVersion?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { debuggeeId: string; breakpointId: string } } & {
          query: {
            clientVersion?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GetBreakpointResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
