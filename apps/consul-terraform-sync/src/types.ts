type Member = {
  id: string
  service_name: string
  healthy: boolean
  leader: boolean
  address?: string | undefined
}
type RequestID = string
type ClusterStatusResponse = { cluster_name: string; members: Member[]; request_id: RequestID }
type Error = { message: string }
type ErrorResponse = { error: Error; request_id: RequestID }
type HealthCheckResponse = { error?: Error | undefined }
type VariableMap = { [x: string]: string }
type BufferPeriod = {
  enabled?: boolean | undefined
  max?: string | undefined
  min?: string | undefined
}
type CatalogServicesCondition = {
  datacenter?: string | undefined
  regexp: string
  namespace?: string | undefined
  node_meta?: { [x: string]: string } | undefined
  use_as_module_input?: boolean | undefined
}
type ServicesCondition = {
  regexp?: string | undefined
  names?: string[] | undefined
  filter?: string | undefined
  datacenter?: string | undefined
  namespace?: string | undefined
  cts_user_defined_meta?: { [x: string]: string | null } | undefined
  use_as_module_input?: boolean | undefined
}
type ConsulKVCondition = {
  path: string
  recurse?: boolean | undefined
  datacenter?: string | undefined
  namespace?: string | undefined
  use_as_module_input?: boolean | undefined
}
type ScheduleCondition = { cron: string }
type Condition = {
  catalog_services?: CatalogServicesCondition | undefined
  services?: ServicesCondition | undefined
  consul_kv?: ConsulKVCondition | undefined
  schedule?: ScheduleCondition | undefined
}
type ServicesModuleInput = {
  regexp?: string | undefined
  names?: string[] | undefined
  filter?: string | undefined
  datacenter?: string | undefined
  namespace?: string | undefined
  cts_user_defined_meta?: { [x: string]: string } | undefined
}
type ConsulKVModuleInput = {
  path: string
  recurse?: boolean | undefined
  datacenter?: string | undefined
  namespace?: string | undefined
}
type ModuleInput = {
  services?: ServicesModuleInput | undefined
  consul_kv?: ConsulKVModuleInput | undefined
}
type TerraformCloudWorkspace = {
  execution_mode?: string | undefined
  agent_pool_id?: string | undefined
  agent_pool_name?: string | undefined
  terraform_version?: string | undefined
}
type Task = {
  description?: string | undefined
  enabled?: boolean | undefined
  name: string
  providers?: string[] | undefined
  module: string
  variables?: VariableMap | undefined
  version?: string | undefined
  buffer_period?: BufferPeriod | undefined
  condition: Condition
  module_input?: ModuleInput | undefined
  terraform_version?: string | undefined
  terraform_cloud_workspace?: TerraformCloudWorkspace | undefined
}
type TaskRequest = { task: Task }
type Run = {
  plan?: string | undefined
  changes_present?: boolean | undefined
  tfc_run_url?: string | undefined
}
type TaskResponse = {
  task?: Task | undefined
  request_id: RequestID
  run?: Run | undefined
  error?: Error | undefined
}
type TasksResponse = { tasks?: Task[] | undefined; request_id: RequestID }
type TaskDeleteResponse = { request_id: RequestID; error?: Error | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/status/cluster': {
      $get:
        | { input: {}; output: ClusterStatusResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/health': {
      $get:
        | { input: {}; output: HealthCheckResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: HealthCheckResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/tasks': {
      $post:
        | {
            input: { query: { run?: 'now' | 'inspect' | undefined } } & { json: TaskRequest }
            output: TaskResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { run?: 'now' | 'inspect' | undefined } } & { json: TaskRequest }
            output: TaskResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { run?: 'now' | 'inspect' | undefined } } & { json: TaskRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $get:
        | { input: {}; output: TasksResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/tasks/:name': {
      $delete:
        | {
            input: { param: { name: string } }
            output: TaskDeleteResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { name: string } }
            output: TaskResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
