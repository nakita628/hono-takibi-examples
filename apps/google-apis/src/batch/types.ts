type Empty = { [x: string]: unknown }
type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type Operation = {
  done?: boolean | undefined
  error?: Status | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
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
type ListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: Operation[] | undefined
}
type CancelOperationRequest = { [x: string]: unknown }
type Accelerator = {
  count?: string | undefined
  installGpuDrivers?: boolean | undefined
  type?: string | undefined
}
type Disk = {
  diskInterface?: string | undefined
  image?: string | undefined
  sizeGb?: string | undefined
  snapshot?: string | undefined
  type?: string | undefined
}
type AttachedDisk = {
  deviceName?: string | undefined
  existingDisk?: string | undefined
  newDisk?: Disk | undefined
}
type InstancePolicy = {
  accelerators?: Accelerator[] | undefined
  bootDisk?: Disk | undefined
  disks?: AttachedDisk[] | undefined
  machineType?: string | undefined
  minCpuPlatform?: string | undefined
  provisioningModel?:
    | 'PROVISIONING_MODEL_UNSPECIFIED'
    | 'STANDARD'
    | 'SPOT'
    | 'PREEMPTIBLE'
    | undefined
}
type InstancePolicyOrTemplate = {
  installGpuDrivers?: boolean | undefined
  instanceTemplate?: string | undefined
  policy?: InstancePolicy | undefined
}
type LocationPolicy = { allowedLocations?: string[] | undefined }
type NetworkInterface = {
  network?: string | undefined
  noExternalIpAddress?: boolean | undefined
  subnetwork?: string | undefined
}
type NetworkPolicy = { networkInterfaces?: NetworkInterface[] | undefined }
type PlacementPolicy = { collocation?: string | undefined; maxDistance?: string | undefined }
type ServiceAccount = { email?: string | undefined; scopes?: string[] | undefined }
type AllocationPolicy = {
  instances?: InstancePolicyOrTemplate[] | undefined
  labels?: { [x: string]: string } | undefined
  location?: LocationPolicy | undefined
  network?: NetworkPolicy | undefined
  placement?: PlacementPolicy | undefined
  serviceAccount?: ServiceAccount | undefined
}
type LogsPolicy = {
  destination?: 'DESTINATION_UNSPECIFIED' | 'CLOUD_LOGGING' | 'PATH' | undefined
  logsPath?: string | undefined
}
type Message = {
  newJobState?:
    | 'STATE_UNSPECIFIED'
    | 'QUEUED'
    | 'SCHEDULED'
    | 'RUNNING'
    | 'SUCCEEDED'
    | 'FAILED'
    | 'DELETION_IN_PROGRESS'
    | undefined
  newTaskState?:
    | 'STATE_UNSPECIFIED'
    | 'PENDING'
    | 'ASSIGNED'
    | 'RUNNING'
    | 'FAILED'
    | 'SUCCEEDED'
    | 'UNEXECUTED'
    | undefined
  type?: 'TYPE_UNSPECIFIED' | 'JOB_STATE_CHANGED' | 'TASK_STATE_CHANGED' | undefined
}
type JobNotification = { message?: Message | undefined; pubsubTopic?: string | undefined }
type TaskExecution = { exitCode?: number | undefined }
type StatusEvent = {
  description?: string | undefined
  eventTime?: string | undefined
  taskExecution?: TaskExecution | undefined
  taskState?:
    | 'STATE_UNSPECIFIED'
    | 'PENDING'
    | 'ASSIGNED'
    | 'RUNNING'
    | 'FAILED'
    | 'SUCCEEDED'
    | 'UNEXECUTED'
    | undefined
  type?: string | undefined
}
type InstanceStatus = {
  bootDisk?: Disk | undefined
  machineType?: string | undefined
  provisioningModel?:
    | 'PROVISIONING_MODEL_UNSPECIFIED'
    | 'STANDARD'
    | 'SPOT'
    | 'PREEMPTIBLE'
    | undefined
  taskPack?: string | undefined
}
type TaskGroupStatus = {
  counts?: { [x: string]: string } | undefined
  instances?: InstanceStatus[] | undefined
}
type JobStatus = {
  runDuration?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'QUEUED'
    | 'SCHEDULED'
    | 'RUNNING'
    | 'SUCCEEDED'
    | 'FAILED'
    | 'DELETION_IN_PROGRESS'
    | undefined
  statusEvents?: StatusEvent[] | undefined
  taskGroups?: { [x: string]: TaskGroupStatus } | undefined
}
type KMSEnvMap = { cipherText?: string | undefined; keyName?: string | undefined }
type Environment = {
  encryptedVariables?: KMSEnvMap | undefined
  secretVariables?: { [x: string]: string } | undefined
  variables?: { [x: string]: string } | undefined
}
type ComputeResource = {
  bootDiskMib?: string | undefined
  cpuMilli?: string | undefined
  memoryMib?: string | undefined
}
type ActionCondition = { exitCodes?: number[] | undefined }
type LifecyclePolicy = {
  action?: 'ACTION_UNSPECIFIED' | 'RETRY_TASK' | 'FAIL_TASK' | undefined
  actionCondition?: ActionCondition | undefined
}
type Barrier = { name?: string | undefined }
type Container = {
  blockExternalNetwork?: boolean | undefined
  commands?: string[] | undefined
  entrypoint?: string | undefined
  imageUri?: string | undefined
  options?: string | undefined
  password?: string | undefined
  username?: string | undefined
  volumes?: string[] | undefined
}
type Script = { path?: string | undefined; text?: string | undefined }
type Runnable = {
  alwaysRun?: boolean | undefined
  background?: boolean | undefined
  barrier?: Barrier | undefined
  container?: Container | undefined
  environment?: Environment | undefined
  ignoreExitStatus?: boolean | undefined
  labels?: { [x: string]: string } | undefined
  script?: Script | undefined
  timeout?: string | undefined
}
type GCS = { remotePath?: string | undefined }
type NFS = { remotePath?: string | undefined; server?: string | undefined }
type Volume = {
  deviceName?: string | undefined
  gcs?: GCS | undefined
  mountOptions?: string[] | undefined
  mountPath?: string | undefined
  nfs?: NFS | undefined
}
type TaskSpec = {
  computeResource?: ComputeResource | undefined
  environment?: Environment | undefined
  environments?: { [x: string]: string } | undefined
  lifecyclePolicies?: LifecyclePolicy[] | undefined
  maxRetryCount?: number | undefined
  maxRunDuration?: string | undefined
  runnables?: Runnable[] | undefined
  volumes?: Volume[] | undefined
}
type TaskGroup = {
  name?: string | undefined
  parallelism?: string | undefined
  permissiveSsh?: boolean | undefined
  requireHostsFile?: boolean | undefined
  taskCount?: string | undefined
  taskCountPerNode?: string | undefined
  taskEnvironments?: Environment[] | undefined
  taskSpec?: TaskSpec | undefined
}
type Job = {
  allocationPolicy?: AllocationPolicy | undefined
  createTime?: string | undefined
  labels?: { [x: string]: string } | undefined
  logsPolicy?: LogsPolicy | undefined
  name?: string | undefined
  notifications?: JobNotification[] | undefined
  priority?: string | undefined
  status?: JobStatus | undefined
  taskGroups?: TaskGroup[] | undefined
  uid?: string | undefined
  updateTime?: string | undefined
}
type ListJobsResponse = {
  jobs?: Job[] | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type TaskStatus = {
  state?:
    | 'STATE_UNSPECIFIED'
    | 'PENDING'
    | 'ASSIGNED'
    | 'RUNNING'
    | 'FAILED'
    | 'SUCCEEDED'
    | 'UNEXECUTED'
    | undefined
  statusEvents?: StatusEvent[] | undefined
}
type AgentTaskInfo = {
  runnable?: string | undefined
  taskId?: string | undefined
  taskStatus?: TaskStatus | undefined
}
type AgentInfo = {
  jobId?: string | undefined
  reportTime?: string | undefined
  state?:
    | 'AGENT_STATE_UNSPECIFIED'
    | 'AGENT_STARTING'
    | 'AGENT_RUNNING'
    | 'AGENT_STOPPED'
    | undefined
  taskGroupId?: string | undefined
  tasks?: AgentTaskInfo[] | undefined
}
type AgentTimingInfo = {
  agentStartupTime?: string | undefined
  bootTime?: string | undefined
  scriptStartupTime?: string | undefined
}
type AgentMetadata = {
  creationTime?: string | undefined
  creator?: string | undefined
  imageVersion?: string | undefined
  instance?: string | undefined
  instanceId?: string | undefined
  instancePreemptionNoticeReceived?: boolean | undefined
  osRelease?: { [x: string]: string } | undefined
  version?: string | undefined
  zone?: string | undefined
}
type ReportAgentStateRequest = {
  agentInfo?: AgentInfo | undefined
  agentTimingInfo?: AgentTimingInfo | undefined
  metadata?: AgentMetadata | undefined
}
type AgentTask = {
  intendedState?: 'INTENDED_STATE_UNSPECIFIED' | 'ASSIGNED' | 'CANCELLED' | 'DELETED' | undefined
  reachedBarrier?: string | undefined
  spec?: TaskSpec | undefined
  status?: TaskStatus | undefined
  task?: string | undefined
  taskSource?: 'TASK_SOURCE_UNSPECIFIED' | 'BATCH_INTERNAL' | 'USER' | undefined
}
type ReportAgentStateResponse = {
  defaultReportInterval?: string | undefined
  minReportInterval?: string | undefined
  tasks?: AgentTask[] | undefined
}
type Task = { name?: string | undefined; status?: TaskStatus | undefined }
type ListTasksResponse = {
  nextPageToken?: string | undefined
  tasks?: Task[] | undefined
  unreachable?: string[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            reason?: string | undefined
            requestId?: string | undefined
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
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/locations': {
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
    '/v1/:name/operations': {
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
        output: ListOperationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:cancel': {
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
        } & { json: CancelOperationRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/jobs': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: ListJobsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            jobId?: string | undefined
            requestId?: string | undefined
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
        } & { json: Job }
        output: Job
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/state:report': {
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
        } & { json: ReportAgentStateRequest }
        output: ReportAgentStateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/tasks': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: ListTasksResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
