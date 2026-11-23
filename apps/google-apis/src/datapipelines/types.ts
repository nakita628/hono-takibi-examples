type GoogleProtobufEmpty = { [x: string]: unknown }
type GoogleCloudDatapipelinesV1ScheduleSpec = {
  nextJobTime?: string | undefined
  schedule?: string | undefined
  timeZone?: string | undefined
}
type GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment = {
  additionalExperiments?: string[] | undefined
  additionalUserLabels?: { [x: string]: string } | undefined
  enableStreamingEngine?: boolean | undefined
  flexrsGoal?: 'FLEXRS_UNSPECIFIED' | 'FLEXRS_SPEED_OPTIMIZED' | 'FLEXRS_COST_OPTIMIZED' | undefined
  ipConfiguration?: 'WORKER_IP_UNSPECIFIED' | 'WORKER_IP_PUBLIC' | 'WORKER_IP_PRIVATE' | undefined
  kmsKeyName?: string | undefined
  machineType?: string | undefined
  maxWorkers?: number | undefined
  network?: string | undefined
  numWorkers?: number | undefined
  serviceAccountEmail?: string | undefined
  subnetwork?: string | undefined
  tempLocation?: string | undefined
  workerRegion?: string | undefined
  workerZone?: string | undefined
  zone?: string | undefined
}
type GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter = {
  containerSpecGcsPath?: string | undefined
  environment?: GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment | undefined
  jobName?: string | undefined
  launchOptions?: { [x: string]: string } | undefined
  parameters?: { [x: string]: string } | undefined
  transformNameMappings?: { [x: string]: string } | undefined
  update?: boolean | undefined
}
type GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest = {
  launchParameter?: GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter | undefined
  location?: string | undefined
  projectId?: string | undefined
  validateOnly?: boolean | undefined
}
type GoogleCloudDatapipelinesV1RuntimeEnvironment = {
  additionalExperiments?: string[] | undefined
  additionalUserLabels?: { [x: string]: string } | undefined
  bypassTempDirValidation?: boolean | undefined
  enableStreamingEngine?: boolean | undefined
  ipConfiguration?: 'WORKER_IP_UNSPECIFIED' | 'WORKER_IP_PUBLIC' | 'WORKER_IP_PRIVATE' | undefined
  kmsKeyName?: string | undefined
  machineType?: string | undefined
  maxWorkers?: number | undefined
  network?: string | undefined
  numWorkers?: number | undefined
  serviceAccountEmail?: string | undefined
  subnetwork?: string | undefined
  tempLocation?: string | undefined
  workerRegion?: string | undefined
  workerZone?: string | undefined
  zone?: string | undefined
}
type GoogleCloudDatapipelinesV1LaunchTemplateParameters = {
  environment?: GoogleCloudDatapipelinesV1RuntimeEnvironment | undefined
  jobName?: string | undefined
  parameters?: { [x: string]: string } | undefined
  transformNameMapping?: { [x: string]: string } | undefined
  update?: boolean | undefined
}
type GoogleCloudDatapipelinesV1LaunchTemplateRequest = {
  gcsPath?: string | undefined
  launchParameters?: GoogleCloudDatapipelinesV1LaunchTemplateParameters | undefined
  location?: string | undefined
  projectId?: string | undefined
  validateOnly?: boolean | undefined
}
type GoogleCloudDatapipelinesV1Workload = {
  dataflowFlexTemplateRequest?: GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest | undefined
  dataflowLaunchTemplateRequest?: GoogleCloudDatapipelinesV1LaunchTemplateRequest | undefined
}
type GoogleCloudDatapipelinesV1Pipeline = {
  createTime?: string | undefined
  displayName?: string | undefined
  jobCount?: number | undefined
  lastUpdateTime?: string | undefined
  name?: string | undefined
  pipelineSources?: { [x: string]: string } | undefined
  scheduleInfo?: GoogleCloudDatapipelinesV1ScheduleSpec | undefined
  schedulerServiceAccountEmail?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'STATE_RESUMING'
    | 'STATE_ACTIVE'
    | 'STATE_STOPPING'
    | 'STATE_ARCHIVED'
    | 'STATE_PAUSED'
    | undefined
  type?: 'PIPELINE_TYPE_UNSPECIFIED' | 'PIPELINE_TYPE_BATCH' | 'PIPELINE_TYPE_STREAMING' | undefined
  workload?: GoogleCloudDatapipelinesV1Workload | undefined
}
type GoogleCloudDatapipelinesV1RunPipelineRequest = { [x: string]: unknown }
type GoogleCloudDatapipelinesV1SdkVersion = {
  sdkSupportStatus?: 'UNKNOWN' | 'SUPPORTED' | 'STALE' | 'DEPRECATED' | 'UNSUPPORTED' | undefined
  version?: string | undefined
  versionDisplayName?: string | undefined
}
type GoogleCloudDatapipelinesV1DataflowJobDetails = {
  currentWorkers?: number | undefined
  resourceInfo?: { [x: string]: number } | undefined
  sdkVersion?: GoogleCloudDatapipelinesV1SdkVersion | undefined
}
type GoogleRpcStatus = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type GoogleCloudDatapipelinesV1Job = {
  createTime?: string | undefined
  dataflowJobDetails?: GoogleCloudDatapipelinesV1DataflowJobDetails | undefined
  endTime?: string | undefined
  id?: string | undefined
  name?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'STATE_PENDING'
    | 'STATE_RUNNING'
    | 'STATE_DONE'
    | 'STATE_FAILED'
    | 'STATE_CANCELLED'
    | undefined
  status?: GoogleRpcStatus | undefined
}
type GoogleCloudDatapipelinesV1RunPipelineResponse = {
  job?: GoogleCloudDatapipelinesV1Job | undefined
}
type GoogleCloudDatapipelinesV1StopPipelineRequest = { [x: string]: unknown }
type GoogleCloudDatapipelinesV1ListJobsResponse = {
  jobs?: GoogleCloudDatapipelinesV1Job[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudDatapipelinesV1ListPipelinesResponse = {
  nextPageToken?: string | undefined
  pipelines?: GoogleCloudDatapipelinesV1Pipeline[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:name': {
      $delete: {
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
        output: GoogleProtobufEmpty
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
        output: GoogleCloudDatapipelinesV1Pipeline
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
        } & { json: GoogleCloudDatapipelinesV1Pipeline }
        output: GoogleCloudDatapipelinesV1Pipeline
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:run': {
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
        } & { json: GoogleCloudDatapipelinesV1RunPipelineRequest }
        output: GoogleCloudDatapipelinesV1RunPipelineResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:stop': {
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
        } & { json: GoogleCloudDatapipelinesV1StopPipelineRequest }
        output: GoogleCloudDatapipelinesV1Pipeline
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/jobs': {
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
        output: GoogleCloudDatapipelinesV1ListJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/pipelines': {
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
        output: GoogleCloudDatapipelinesV1ListPipelinesResponse
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
        } & { json: GoogleCloudDatapipelinesV1Pipeline }
        output: GoogleCloudDatapipelinesV1Pipeline
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
