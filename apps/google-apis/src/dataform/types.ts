type Empty = { [x: string]: unknown }
type Workspace = { name?: string | undefined }
type Target = {
  database?: string | undefined
  name?: string | undefined
  schema?: string | undefined
}
type InvocationConfig = {
  fullyRefreshIncrementalTablesEnabled?: boolean | undefined
  includedTags?: string[] | undefined
  includedTargets?: Target[] | undefined
  transitiveDependenciesIncluded?: boolean | undefined
  transitiveDependentsIncluded?: boolean | undefined
}
type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type ScheduledExecutionRecord = {
  errorStatus?: Status | undefined
  executionTime?: string | undefined
  workflowInvocation?: string | undefined
}
type WorkflowConfig = {
  cronSchedule?: string | undefined
  invocationConfig?: InvocationConfig | undefined
  name?: string | undefined
  recentScheduledExecutionRecords?: ScheduledExecutionRecord[] | undefined
  releaseConfig?: string | undefined
  timeZone?: string | undefined
}
type Location = {
  displayName?: string | undefined
  labels?: { [x: string]: string } | undefined
  locationId?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
}
type ListLocationsResponse = {
  locations?: Location[] | undefined
  nextPageToken?: string | undefined
}
type CancelWorkflowInvocationRequest = { [x: string]: unknown }
type CommitAuthor = { emailAddress?: string | undefined; name?: string | undefined }
type CommitWorkspaceChangesRequest = {
  author?: CommitAuthor | undefined
  commitMessage?: string | undefined
  paths?: string[] | undefined
}
type UncommittedFileChange = {
  path?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'ADDED' | 'DELETED' | 'MODIFIED' | 'HAS_CONFLICTS' | undefined
}
type FetchFileGitStatusesResponse = { uncommittedFileChanges?: UncommittedFileChange[] | undefined }
type FetchGitAheadBehindResponse = {
  commitsAhead?: number | undefined
  commitsBehind?: number | undefined
}
type FetchRemoteBranchesResponse = { branches?: string[] | undefined }
type PullGitCommitsRequest = {
  author?: CommitAuthor | undefined
  remoteBranch?: string | undefined
}
type PushGitCommitsRequest = { remoteBranch?: string | undefined }
type BigQueryAction = { sqlScript?: string | undefined }
type Interval = { endTime?: string | undefined; startTime?: string | undefined }
type WorkflowInvocationAction = {
  bigqueryAction?: BigQueryAction | undefined
  canonicalTarget?: Target | undefined
  failureReason?: string | undefined
  invocationTiming?: Interval | undefined
  state?:
    | 'PENDING'
    | 'RUNNING'
    | 'SKIPPED'
    | 'DISABLED'
    | 'SUCCEEDED'
    | 'CANCELLED'
    | 'FAILED'
    | undefined
  target?: Target | undefined
}
type QueryWorkflowInvocationActionsResponse = {
  nextPageToken?: string | undefined
  workflowInvocationActions?: WorkflowInvocationAction[] | undefined
}
type ResetWorkspaceChangesRequest = { clean?: boolean | undefined; paths?: string[] | undefined }
type CodeCompilationConfig = {
  assertionSchema?: string | undefined
  databaseSuffix?: string | undefined
  defaultDatabase?: string | undefined
  defaultLocation?: string | undefined
  defaultSchema?: string | undefined
  schemaSuffix?: string | undefined
  tablePrefix?: string | undefined
  vars?: { [x: string]: string } | undefined
}
type CompilationError = {
  actionTarget?: Target | undefined
  message?: string | undefined
  path?: string | undefined
  stack?: string | undefined
}
type CompilationResult = {
  codeCompilationConfig?: CodeCompilationConfig | undefined
  compilationErrors?: CompilationError[] | undefined
  dataformCoreVersion?: string | undefined
  gitCommitish?: string | undefined
  name?: string | undefined
  releaseConfig?: string | undefined
  resolvedGitCommitSha?: string | undefined
  workspace?: string | undefined
}
type ListCompilationResultsResponse = {
  compilationResults?: CompilationResult[] | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type ScheduledReleaseRecord = {
  compilationResult?: string | undefined
  errorStatus?: Status | undefined
  releaseTime?: string | undefined
}
type ReleaseConfig = {
  codeCompilationConfig?: CodeCompilationConfig | undefined
  cronSchedule?: string | undefined
  gitCommitish?: string | undefined
  name?: string | undefined
  recentScheduledReleaseRecords?: ScheduledReleaseRecord[] | undefined
  releaseCompilationResult?: string | undefined
  timeZone?: string | undefined
}
type ListReleaseConfigsResponse = {
  nextPageToken?: string | undefined
  releaseConfigs?: ReleaseConfig[] | undefined
  unreachable?: string[] | undefined
}
type GitRemoteSettings = {
  authenticationTokenSecretVersion?: string | undefined
  defaultBranch?: string | undefined
  tokenStatus?: 'TOKEN_STATUS_UNSPECIFIED' | 'NOT_FOUND' | 'INVALID' | 'VALID' | undefined
  url?: string | undefined
}
type WorkspaceCompilationOverrides = {
  defaultDatabase?: string | undefined
  schemaSuffix?: string | undefined
  tablePrefix?: string | undefined
}
type Repository = {
  gitRemoteSettings?: GitRemoteSettings | undefined
  name?: string | undefined
  npmrcEnvironmentVariablesSecretVersion?: string | undefined
  workspaceCompilationOverrides?: WorkspaceCompilationOverrides | undefined
}
type ListRepositoriesResponse = {
  nextPageToken?: string | undefined
  repositories?: Repository[] | undefined
  unreachable?: string[] | undefined
}
type ListWorkflowConfigsResponse = {
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
  workflowConfigs?: WorkflowConfig[] | undefined
}
type WorkflowInvocation = {
  compilationResult?: string | undefined
  invocationConfig?: InvocationConfig | undefined
  invocationTiming?: Interval | undefined
  name?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'RUNNING'
    | 'SUCCEEDED'
    | 'CANCELLED'
    | 'FAILED'
    | 'CANCELING'
    | undefined
  workflowConfig?: string | undefined
}
type ListWorkflowInvocationsResponse = {
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
  workflowInvocations?: WorkflowInvocation[] | undefined
}
type ListWorkspacesResponse = {
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
  workspaces?: Workspace[] | undefined
}
type Expr = {
  description?: string | undefined
  expression?: string | undefined
  location?: string | undefined
  title?: string | undefined
}
type Binding = {
  condition?: Expr | undefined
  members?: string[] | undefined
  role?: string | undefined
}
type Policy = {
  bindings?: Binding[] | undefined
  etag?: string | undefined
  version?: number | undefined
}
type SetIamPolicyRequest = { policy?: Policy | undefined }
type TestIamPermissionsRequest = { permissions?: string[] | undefined }
type TestIamPermissionsResponse = { permissions?: string[] | undefined }
type FetchFileDiffResponse = { formattedDiff?: string | undefined }
type InstallNpmPackagesRequest = { [x: string]: unknown }
type InstallNpmPackagesResponse = { [x: string]: unknown }
type MakeDirectoryRequest = { path?: string | undefined }
type MakeDirectoryResponse = { [x: string]: unknown }
type MoveDirectoryRequest = { newPath?: string | undefined; path?: string | undefined }
type MoveDirectoryResponse = { [x: string]: unknown }
type MoveFileRequest = { newPath?: string | undefined; path?: string | undefined }
type MoveFileResponse = { [x: string]: unknown }
type DirectoryEntry = { directory?: string | undefined; file?: string | undefined }
type QueryDirectoryContentsResponse = {
  directoryEntries?: DirectoryEntry[] | undefined
  nextPageToken?: string | undefined
}
type ReadFileResponse = { fileContents?: string | undefined }
type RemoveDirectoryRequest = { path?: string | undefined }
type RemoveFileRequest = { path?: string | undefined }
type WriteFileRequest = { contents?: string | undefined; path?: string | undefined }
type WriteFileResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta1/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            force?: boolean | undefined
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
        input: { param: { name: string } } & {
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
        }
        output: Workspace
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            updateMask?: string | undefined
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
        } & { json: WorkflowConfig }
        output: WorkflowConfig
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name/locations': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
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
        output: ListLocationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:cancel': {
      $post: {
        input: { param: { name: string } } & {
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
        } & { json: CancelWorkflowInvocationRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:commit': {
      $post: {
        input: { param: { name: string } } & {
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
        } & { json: CommitWorkspaceChangesRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:fetchFileGitStatuses': {
      $get: {
        input: { param: { name: string } } & {
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
        }
        output: FetchFileGitStatusesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:fetchGitAheadBehind': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            remoteBranch?: string | undefined
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
        output: FetchGitAheadBehindResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:fetchRemoteBranches': {
      $get: {
        input: { param: { name: string } } & {
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
        }
        output: FetchRemoteBranchesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:pull': {
      $post: {
        input: { param: { name: string } } & {
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
        } & { json: PullGitCommitsRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:push': {
      $post: {
        input: { param: { name: string } } & {
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
        } & { json: PushGitCommitsRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:query': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
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
        output: QueryWorkflowInvocationActionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:reset': {
      $post: {
        input: { param: { name: string } } & {
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
        } & { json: ResetWorkspaceChangesRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/compilationResults': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
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
        output: ListCompilationResultsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: CompilationResult }
        output: CompilationResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/releaseConfigs': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
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
        output: ListReleaseConfigsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            releaseConfigId?: string | undefined
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
        } & { json: ReleaseConfig }
        output: ReleaseConfig
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/repositories': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
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
        output: ListRepositoriesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            repositoryId?: string | undefined
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
        } & { json: Repository }
        output: Repository
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/workflowConfigs': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
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
        output: ListWorkflowConfigsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            workflowConfigId?: string | undefined
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
        } & { json: WorkflowConfig }
        output: WorkflowConfig
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/workflowInvocations': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
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
        output: ListWorkflowInvocationsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: WorkflowInvocation }
        output: WorkflowInvocation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/workspaces': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
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
        output: ListWorkspacesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            workspaceId?: string | undefined
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
        } & { json: Workspace }
        output: Workspace
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:resource:getIamPolicy': {
      $get: {
        input: { param: { resource: string } } & {
          query: {
            'options.requestedPolicyVersion'?: number | undefined
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
        output: Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:resource:setIamPolicy': {
      $post: {
        input: { param: { resource: string } } & {
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
        } & { json: SetIamPolicyRequest }
        output: Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:resource:testIamPermissions': {
      $post: {
        input: { param: { resource: string } } & {
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
        } & { json: TestIamPermissionsRequest }
        output: TestIamPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:workspace:fetchFileDiff': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            path?: string | undefined
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
        output: FetchFileDiffResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:workspace:installNpmPackages': {
      $post: {
        input: { param: { workspace: string } } & {
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
        } & { json: InstallNpmPackagesRequest }
        output: InstallNpmPackagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:workspace:makeDirectory': {
      $post: {
        input: { param: { workspace: string } } & {
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
        } & { json: MakeDirectoryRequest }
        output: MakeDirectoryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:workspace:moveDirectory': {
      $post: {
        input: { param: { workspace: string } } & {
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
        } & { json: MoveDirectoryRequest }
        output: MoveDirectoryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:workspace:moveFile': {
      $post: {
        input: { param: { workspace: string } } & {
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
        } & { json: MoveFileRequest }
        output: MoveFileResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:workspace:queryDirectoryContents': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            path?: string | undefined
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
        output: QueryDirectoryContentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:workspace:readFile': {
      $get: {
        input: { param: { workspace: string } } & {
          query: {
            path?: string | undefined
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
        output: ReadFileResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:workspace:removeDirectory': {
      $post: {
        input: { param: { workspace: string } } & {
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
        } & { json: RemoveDirectoryRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:workspace:removeFile': {
      $post: {
        input: { param: { workspace: string } } & {
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
        } & { json: RemoveFileRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:workspace:writeFile': {
      $post: {
        input: { param: { workspace: string } } & {
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
        } & { json: WriteFileRequest }
        output: WriteFileResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
