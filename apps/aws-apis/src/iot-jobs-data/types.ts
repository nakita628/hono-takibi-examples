type DescribeJobExecutionResponse = {
  execution?:
    | {
        jobId?: {} | undefined
        thingName?: {} | undefined
        status?: {} | undefined
        statusDetails?: {} | undefined
        queuedAt?: {} | undefined
        startedAt?: {} | undefined
        lastUpdatedAt?: {} | undefined
        approximateSecondsBeforeTimedOut?: {} | undefined
        versionNumber?: {} | undefined
        executionNumber?: {} | undefined
        jobDocument?: {} | undefined
      }
    | undefined
}
type DetailsValue = string
type UpdateJobExecutionResponse = {
  executionState?:
    | { status?: {} | undefined; statusDetails?: {} | undefined; versionNumber?: {} | undefined }
    | undefined
  jobDocument?: {} | undefined
}
type GetPendingJobExecutionsResponse = {
  inProgressJobs?: {} | undefined
  queuedJobs?: {} | undefined
}
type StartNextPendingJobExecutionResponse = {
  execution?:
    | {
        jobId?: {} | undefined
        thingName?: {} | undefined
        status?: {} | undefined
        statusDetails?: {} | undefined
        queuedAt?: {} | undefined
        startedAt?: {} | undefined
        lastUpdatedAt?: {} | undefined
        approximateSecondsBeforeTimedOut?: {} | undefined
        versionNumber?: {} | undefined
        executionNumber?: {} | undefined
        jobDocument?: {} | undefined
      }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/things/:thingName/jobs/:jobId': {
      $get: {
        input: { param: { jobId: string; thingName: string } } & {
          query: { includeJobDocument?: boolean | undefined; executionNumber?: number | undefined }
        } & {
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
        output: DescribeJobExecutionResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { jobId: string; thingName: string } } & {
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
            status:
              | 'QUEUED'
              | 'IN_PROGRESS'
              | 'SUCCEEDED'
              | 'FAILED'
              | 'TIMED_OUT'
              | 'REJECTED'
              | 'REMOVED'
              | 'CANCELED'
            statusDetails?: { [x: string]: DetailsValue } | undefined
            stepTimeoutInMinutes?: number | undefined
            expectedVersion?: number | undefined
            includeJobExecutionState?: boolean | undefined
            includeJobDocument?: boolean | undefined
            executionNumber?: number | undefined
          }
        }
        output: UpdateJobExecutionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/things/:thingName/jobs': {
      $get: {
        input: { param: { thingName: string } } & {
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
        output: GetPendingJobExecutionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/things/:thingName/jobs/$next': {
      $put: {
        input: { param: { thingName: string } } & {
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
            statusDetails?: { [x: string]: DetailsValue } | undefined
            stepTimeoutInMinutes?: number | undefined
          }
        }
        output: StartNextPendingJobExecutionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
