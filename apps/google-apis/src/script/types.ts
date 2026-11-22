type GoogleAppsScriptTypeProcess = {
  duration?: string | undefined
  functionName?: string | undefined
  processStatus?:
    | 'PROCESS_STATUS_UNSPECIFIED'
    | 'RUNNING'
    | 'PAUSED'
    | 'COMPLETED'
    | 'CANCELED'
    | 'FAILED'
    | 'TIMED_OUT'
    | 'UNKNOWN'
    | 'DELAYED'
    | undefined
  processType?:
    | 'PROCESS_TYPE_UNSPECIFIED'
    | 'ADD_ON'
    | 'EXECUTION_API'
    | 'TIME_DRIVEN'
    | 'TRIGGER'
    | 'WEBAPP'
    | 'EDITOR'
    | 'SIMPLE_TRIGGER'
    | 'MENU'
    | 'BATCH_TASK'
    | undefined
  projectName?: string | undefined
  startTime?: string | undefined
  userAccessLevel?:
    | 'USER_ACCESS_LEVEL_UNSPECIFIED'
    | 'NONE'
    | 'READ'
    | 'WRITE'
    | 'OWNER'
    | undefined
}
type ListUserProcessesResponse = {
  nextPageToken?: string | undefined
  processes?: GoogleAppsScriptTypeProcess[] | undefined
}
type ListScriptProcessesResponse = {
  nextPageToken?: string | undefined
  processes?: GoogleAppsScriptTypeProcess[] | undefined
}
type CreateProjectRequest = { parentId?: string | undefined; title?: string | undefined }
type GoogleAppsScriptTypeUser = {
  domain?: string | undefined
  email?: string | undefined
  name?: string | undefined
  photoUrl?: string | undefined
}
type Project = {
  createTime?: string | undefined
  creator?: GoogleAppsScriptTypeUser | undefined
  lastModifyUser?: GoogleAppsScriptTypeUser | undefined
  parentId?: string | undefined
  scriptId?: string | undefined
  title?: string | undefined
  updateTime?: string | undefined
}
type GoogleAppsScriptTypeFunction = { name?: string | undefined; parameters?: string[] | undefined }
type GoogleAppsScriptTypeFunctionSet = { values?: GoogleAppsScriptTypeFunction[] | undefined }
type File2 = {
  createTime?: string | undefined
  functionSet?: GoogleAppsScriptTypeFunctionSet | undefined
  lastModifyUser?: GoogleAppsScriptTypeUser | undefined
  name?: string | undefined
  source?: string | undefined
  type?: 'ENUM_TYPE_UNSPECIFIED' | 'SERVER_JS' | 'HTML' | 'JSON' | undefined
  updateTime?: string | undefined
}
type Content = { files?: File2[] | undefined; scriptId?: string | undefined }
type DeploymentConfig = {
  description?: string | undefined
  manifestFileName?: string | undefined
  scriptId?: string | undefined
  versionNumber?: number | undefined
}
type GoogleAppsScriptTypeAddOnEntryPoint = {
  addOnType?: 'UNKNOWN_ADDON_TYPE' | 'GMAIL' | 'DATA_STUDIO' | undefined
  description?: string | undefined
  helpUrl?: string | undefined
  postInstallTipUrl?: string | undefined
  reportIssueUrl?: string | undefined
  title?: string | undefined
}
type GoogleAppsScriptTypeExecutionApiConfig = {
  access?: 'UNKNOWN_ACCESS' | 'MYSELF' | 'DOMAIN' | 'ANYONE' | 'ANYONE_ANONYMOUS' | undefined
}
type GoogleAppsScriptTypeExecutionApiEntryPoint = {
  entryPointConfig?: GoogleAppsScriptTypeExecutionApiConfig | undefined
}
type GoogleAppsScriptTypeWebAppConfig = {
  access?: 'UNKNOWN_ACCESS' | 'MYSELF' | 'DOMAIN' | 'ANYONE' | 'ANYONE_ANONYMOUS' | undefined
  executeAs?: 'UNKNOWN_EXECUTE_AS' | 'USER_ACCESSING' | 'USER_DEPLOYING' | undefined
}
type GoogleAppsScriptTypeWebAppEntryPoint = {
  entryPointConfig?: GoogleAppsScriptTypeWebAppConfig | undefined
  url?: string | undefined
}
type EntryPoint = {
  addOn?: GoogleAppsScriptTypeAddOnEntryPoint | undefined
  entryPointType?:
    | 'ENTRY_POINT_TYPE_UNSPECIFIED'
    | 'WEB_APP'
    | 'EXECUTION_API'
    | 'ADD_ON'
    | undefined
  executionApi?: GoogleAppsScriptTypeExecutionApiEntryPoint | undefined
  webApp?: GoogleAppsScriptTypeWebAppEntryPoint | undefined
}
type Deployment = {
  deploymentConfig?: DeploymentConfig | undefined
  deploymentId?: string | undefined
  entryPoints?: EntryPoint[] | undefined
  updateTime?: string | undefined
}
type ListDeploymentsResponse = {
  deployments?: Deployment[] | undefined
  nextPageToken?: string | undefined
}
type Empty = { [x: string]: unknown }
type UpdateDeploymentRequest = { deploymentConfig?: DeploymentConfig | undefined }
type MetricsValue = {
  endTime?: string | undefined
  startTime?: string | undefined
  value?: string | undefined
}
type Metrics = {
  activeUsers?: MetricsValue[] | undefined
  failedExecutions?: MetricsValue[] | undefined
  totalExecutions?: MetricsValue[] | undefined
}
type Version = {
  createTime?: string | undefined
  description?: string | undefined
  scriptId?: string | undefined
  versionNumber?: number | undefined
}
type ListVersionsResponse = { nextPageToken?: string | undefined; versions?: Version[] | undefined }
type ExecutionRequest = {
  devMode?: boolean | undefined
  function?: string | undefined
  parameters?: { [x: string]: unknown }[] | undefined
  sessionState?: string | undefined
}
type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type Operation = {
  done?: boolean | undefined
  error?: Status | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/processes': {
      $get: {
        input: {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            'userProcessFilter.deploymentId'?: string | undefined
            'userProcessFilter.endTime'?: string | undefined
            'userProcessFilter.functionName'?: string | undefined
            'userProcessFilter.projectName'?: string | undefined
            'userProcessFilter.scriptId'?: string | undefined
            'userProcessFilter.startTime'?: string | undefined
            'userProcessFilter.statuses'?:
              | (
                  | 'PROCESS_STATUS_UNSPECIFIED'
                  | 'RUNNING'
                  | 'PAUSED'
                  | 'COMPLETED'
                  | 'CANCELED'
                  | 'FAILED'
                  | 'TIMED_OUT'
                  | 'UNKNOWN'
                  | 'DELAYED'
                )[]
              | undefined
            'userProcessFilter.types'?:
              | (
                  | 'PROCESS_TYPE_UNSPECIFIED'
                  | 'ADD_ON'
                  | 'EXECUTION_API'
                  | 'TIME_DRIVEN'
                  | 'TRIGGER'
                  | 'WEBAPP'
                  | 'EDITOR'
                  | 'SIMPLE_TRIGGER'
                  | 'MENU'
                  | 'BATCH_TASK'
                )[]
              | undefined
            'userProcessFilter.userAccessLevels'?:
              | ('USER_ACCESS_LEVEL_UNSPECIFIED' | 'NONE' | 'READ' | 'WRITE' | 'OWNER')[]
              | undefined
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
        output: ListUserProcessesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/processes:listScriptProcesses': {
      $get: {
        input: {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            scriptId?: string | undefined
            'scriptProcessFilter.deploymentId'?: string | undefined
            'scriptProcessFilter.endTime'?: string | undefined
            'scriptProcessFilter.functionName'?: string | undefined
            'scriptProcessFilter.startTime'?: string | undefined
            'scriptProcessFilter.statuses'?:
              | (
                  | 'PROCESS_STATUS_UNSPECIFIED'
                  | 'RUNNING'
                  | 'PAUSED'
                  | 'COMPLETED'
                  | 'CANCELED'
                  | 'FAILED'
                  | 'TIMED_OUT'
                  | 'UNKNOWN'
                  | 'DELAYED'
                )[]
              | undefined
            'scriptProcessFilter.types'?:
              | (
                  | 'PROCESS_TYPE_UNSPECIFIED'
                  | 'ADD_ON'
                  | 'EXECUTION_API'
                  | 'TIME_DRIVEN'
                  | 'TRIGGER'
                  | 'WEBAPP'
                  | 'EDITOR'
                  | 'SIMPLE_TRIGGER'
                  | 'MENU'
                  | 'BATCH_TASK'
                )[]
              | undefined
            'scriptProcessFilter.userAccessLevels'?:
              | ('USER_ACCESS_LEVEL_UNSPECIFIED' | 'NONE' | 'READ' | 'WRITE' | 'OWNER')[]
              | undefined
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
        output: ListScriptProcessesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/projects': {
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
        } & { json: CreateProjectRequest }
        output: Project
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/projects/:scriptId': {
      $get: {
        input: { param: { scriptId: string } } & {
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
        output: Project
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/projects/:scriptId/content': {
      $get: {
        input: { param: { scriptId: string } } & {
          query: {
            versionNumber?: number | undefined
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
        output: Content
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { scriptId: string } } & {
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
        } & { json: Content }
        output: Content
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/projects/:scriptId/deployments': {
      $get: {
        input: { param: { scriptId: string } } & {
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
        output: ListDeploymentsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { scriptId: string } } & {
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
        } & { json: DeploymentConfig }
        output: Deployment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/projects/:scriptId/deployments/:deploymentId': {
      $delete: {
        input: { param: { scriptId: string; deploymentId: string } } & {
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
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { scriptId: string; deploymentId: string } } & {
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
        output: Deployment
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { scriptId: string; deploymentId: string } } & {
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
        } & { json: UpdateDeploymentRequest }
        output: Deployment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/projects/:scriptId/metrics': {
      $get: {
        input: { param: { scriptId: string } } & {
          query: {
            'metricsFilter.deploymentId'?: string | undefined
            metricsGranularity?: 'UNSPECIFIED_GRANULARITY' | 'WEEKLY' | 'DAILY' | undefined
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
        output: Metrics
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/projects/:scriptId/versions': {
      $get: {
        input: { param: { scriptId: string } } & {
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
        output: ListVersionsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { scriptId: string } } & {
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
        } & { json: Version }
        output: Version
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/projects/:scriptId/versions/:versionNumber': {
      $get: {
        input: { param: { scriptId: string; versionNumber: number } } & {
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
        output: Version
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/scripts/:scriptId:run': {
      $post: {
        input: { param: { scriptId: string } } & {
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
        } & { json: ExecutionRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
