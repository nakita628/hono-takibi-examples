type CancelJobResponse = { cancellationStatus: {}; jobArn: {} }
type CancelQuantumTaskResponse = { cancellationStatus: {}; quantumTaskArn: {} }
type HyperParametersValueString = string
type InputFileConfig = {
  channelName: {}
  contentType?: {} | undefined
  dataSource: { s3DataSource: { s3Uri: {} } }
}
type String = string
type CreateJobResponse = { jobArn: {} }
type CreateQuantumTaskResponse = { quantumTaskArn: {} }
type GetDeviceResponse = {
  deviceArn: {}
  deviceCapabilities: {}
  deviceName: {}
  deviceStatus: {}
  deviceType: {}
  providerName: {}
}
type GetJobResponse = {
  algorithmSpecification: {
    containerImage?: { uri: {} } | undefined
    scriptModeConfig?: { compressionType?: {} | undefined; entryPoint: {}; s3Uri: {} } | undefined
  }
  billableDuration?: {} | undefined
  checkpointConfig?: { localPath?: {} | undefined; s3Uri: {} } | undefined
  createdAt: {}
  deviceConfig?: { device: {} } | undefined
  endedAt?: {} | undefined
  events?: {} | undefined
  failureReason?: {} | undefined
  hyperParameters?: {} | undefined
  inputDataConfig?: {} | undefined
  instanceConfig: { instanceCount?: {} | undefined; instanceType: {}; volumeSizeInGb: {} }
  jobArn: {}
  jobName: {}
  outputDataConfig: { kmsKeyId?: {} | undefined; s3Path: {} }
  roleArn: {}
  startedAt?: {} | undefined
  status: {}
  stoppingCondition?: { maxRuntimeInSeconds?: {} | undefined } | undefined
  tags?: {} | undefined
}
type GetQuantumTaskResponse = {
  createdAt: {}
  deviceArn: {}
  deviceParameters: {}
  endedAt?: {} | undefined
  failureReason?: {} | undefined
  jobArn?: {} | undefined
  outputS3Bucket: {}
  outputS3Directory: {}
  quantumTaskArn: {}
  shots: {}
  status: {}
  tags?: {} | undefined
}
type ListTagsForResourceResponse = { tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type SearchDevicesFilter = { name: {}; values: {} }
type SearchDevicesResponse = { devices: {}; nextToken?: {} | undefined }
type SearchJobsFilter = { name: {}; operator: {}; values: {} }
type SearchJobsResponse = { jobs: {}; nextToken?: {} | undefined }
type SearchQuantumTasksFilter = { name: {}; operator: {}; values: {} }
type SearchQuantumTasksResponse = { nextToken?: {} | undefined; quantumTasks: {} }
type UntagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/job/:jobArn/cancel': {
      $put: {
        input: { param: { jobArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CancelJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/quantum-task/:quantumTaskArn/cancel': {
      $put: {
        input: { param: { quantumTaskArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { clientToken: string } }
        output: CancelQuantumTaskResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/job': {
      $post: {
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
            algorithmSpecification: {
              containerImage?: { uri: {} } | undefined
              scriptModeConfig?:
                | { compressionType?: {} | undefined; entryPoint: {}; s3Uri: {} }
                | undefined
            }
            checkpointConfig?: { localPath?: {} | undefined; s3Uri?: {} | undefined } | undefined
            clientToken: string
            deviceConfig: { device?: {} | undefined }
            hyperParameters?: { [x: string]: HyperParametersValueString } | undefined
            inputDataConfig?: InputFileConfig[] | undefined
            instanceConfig: {
              instanceCount?: {} | undefined
              instanceType?: {} | undefined
              volumeSizeInGb?: {} | undefined
            }
            jobName: string
            outputDataConfig: { kmsKeyId?: {} | undefined; s3Path?: {} | undefined }
            roleArn: string
            stoppingCondition?: { maxRuntimeInSeconds?: {} | undefined } | undefined
            tags?: { [x: string]: String } | undefined
          }
        }
        output: CreateJobResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/quantum-task': {
      $post: {
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
            action: string
            clientToken: string
            deviceArn: string
            deviceParameters?: string | undefined
            jobToken?: string | undefined
            outputS3Bucket: string
            outputS3KeyPrefix: string
            shots: number
            tags?: { [x: string]: String } | undefined
          }
        }
        output: CreateQuantumTaskResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/device/:deviceArn': {
      $get: {
        input: { param: { deviceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetDeviceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/job/:jobArn': {
      $get: {
        input: { param: { jobArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/quantum-task/:quantumTaskArn': {
      $get: {
        input: { param: { quantumTaskArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetQuantumTaskResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resourceArn': {
      $get: {
        input: { param: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListTagsForResourceResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { tags: { [x: string]: String } } }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/devices': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
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
            filters: SearchDevicesFilter[]
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        }
        output: SearchDevicesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/jobs': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
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
            filters: SearchJobsFilter[]
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        }
        output: SearchJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/quantum-tasks': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
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
            filters: SearchQuantumTasksFilter[]
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        }
        output: SearchQuantumTasksResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resourceArn#tagKeys': {
      $delete: {
        input: { param: { resourceArn: string } } & { query: { tagKeys: String[] } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: UntagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
