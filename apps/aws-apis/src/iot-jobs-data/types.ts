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
type InvalidRequestException = { [x: string]: unknown }
type ResourceNotFoundException = { [x: string]: unknown }
type ThrottlingException = { [x: string]: unknown }
type ServiceUnavailableException = { [x: string]: unknown }
type CertificateValidationException = { [x: string]: unknown }
type TerminalStateException = { [x: string]: unknown }
type DetailsValue = string
type UpdateJobExecutionResponse = {
  executionState?:
    | { status?: {} | undefined; statusDetails?: {} | undefined; versionNumber?: {} | undefined }
    | undefined
  jobDocument?: {} | undefined
}
type InvalidStateTransitionException = { [x: string]: unknown }
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
      $get:
        | {
            input: { param: { jobId: string; thingName: string } } & {
              query: {
                includeJobDocument?: boolean | undefined
                executionNumber?: number | undefined
              }
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
        | {
            input: { param: { jobId: string; thingName: string } } & {
              query: {
                includeJobDocument?: boolean | undefined
                executionNumber?: number | undefined
              }
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { jobId: string; thingName: string } } & {
              query: {
                includeJobDocument?: boolean | undefined
                executionNumber?: number | undefined
              }
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { jobId: string; thingName: string } } & {
              query: {
                includeJobDocument?: boolean | undefined
                executionNumber?: number | undefined
              }
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { jobId: string; thingName: string } } & {
              query: {
                includeJobDocument?: boolean | undefined
                executionNumber?: number | undefined
              }
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { jobId: string; thingName: string } } & {
              query: {
                includeJobDocument?: boolean | undefined
                executionNumber?: number | undefined
              }
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
            output: CertificateValidationException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { jobId: string; thingName: string } } & {
              query: {
                includeJobDocument?: boolean | undefined
                executionNumber?: number | undefined
              }
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
            output: TerminalStateException
            outputFormat: 'json'
            status: 485
          }
      $post:
        | {
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
        | {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: CertificateValidationException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: InvalidStateTransitionException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/things/:thingName/jobs': {
      $get:
        | {
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
        | {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: CertificateValidationException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/things/:thingName/jobs/$next': {
      $put:
        | {
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
        | {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: CertificateValidationException
            outputFormat: 'json'
            status: 484
          }
    }
  },
  '/'
>
export default routes
