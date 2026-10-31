import { createRoute, z } from '@hono/zod-openapi'

const JobIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9_-]+/)
  .min(1)
  .max(64)
  .openapi('JobId')

const ThingNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9:_-]+/)
  .min(1)
  .max(128)
  .openapi('ThingName')

const JobExecutionStatusSchema = z
  .enum([
    'QUEUED',
    'IN_PROGRESS',
    'SUCCEEDED',
    'FAILED',
    'TIMED_OUT',
    'REJECTED',
    'REMOVED',
    'CANCELED',
  ])
  .openapi('JobExecutionStatus')

const DetailsValueSchema = z
  .string()
  .regex(/[^\p\{C\}]*\+/)
  .min(1)
  .max(1024)
  .openapi('DetailsValue')

const DetailsMapSchema = z.record(z.string(), DetailsValueSchema).openapi('DetailsMap')

const QueuedAtSchema = z.int().openapi('QueuedAt')

const StartedAtSchema = z.int().openapi('StartedAt')

const LastUpdatedAtSchema = z.int().openapi('LastUpdatedAt')

const ApproximateSecondsBeforeTimedOutSchema = z.int().openapi('ApproximateSecondsBeforeTimedOut')

const VersionNumberSchema = z.int().openapi('VersionNumber')

const ExecutionNumberSchema = z.int().openapi('ExecutionNumber')

const JobDocumentSchema = z.string().max(32768).openapi('JobDocument')

const JobExecutionSchema = z
  .object({
    jobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier you assigned to this job when it was created.',
        }),
    ).exactOptional(),
    thingName: ThingNameSchema.and(
      z.any().openapi({ description: 'The name of the thing that is executing the job.' }),
    ).exactOptional(),
    status: JobExecutionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the job execution. Can be one of: "QUEUED", "IN_PROGRESS", "FAILED", "SUCCESS", "CANCELED", "REJECTED", or "REMOVED".',
        }),
    ).exactOptional(),
    statusDetails: DetailsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of name/value pairs that describe the status of the job execution.',
        }),
    ).exactOptional(),
    queuedAt: QueuedAtSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time, in milliseconds since the epoch, when the job execution was enqueued.',
        }),
    ).exactOptional(),
    startedAt: StartedAtSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time, in milliseconds since the epoch, when the job execution was started.',
        }),
    ).exactOptional(),
    lastUpdatedAt: LastUpdatedAtSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time, in milliseconds since the epoch, when the job execution was last updated. ',
        }),
    ).exactOptional(),
    approximateSecondsBeforeTimedOut: ApproximateSecondsBeforeTimedOutSchema.and(
      z
        .any()
        .openapi({
          description:
            'The estimated number of seconds that remain before the job execution status will be changed to <code>TIMED_OUT</code>.',
        }),
    ).exactOptional(),
    versionNumber: VersionNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the job execution. Job execution versions are incremented each time they are updated by a device.',
        }),
    ).exactOptional(),
    executionNumber: ExecutionNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'A number that identifies a particular job execution on a particular device. It can be used later in commands that return or update job execution information.',
        }),
    ).exactOptional(),
    jobDocument: JobDocumentSchema.and(
      z.any().openapi({ description: 'The content of the job document.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains data about a job execution.', required: [] })
  .openapi('JobExecution')

const DescribeJobExecutionResponseSchema = z
  .object({
    execution: JobExecutionSchema.and(
      z.any().openapi({ description: 'Contains data about a job execution.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeJobExecutionResponse')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const ServiceUnavailableExceptionSchema = z.any().openapi('ServiceUnavailableException')

const CertificateValidationExceptionSchema = z.any().openapi('CertificateValidationException')

const TerminalStateExceptionSchema = z.any().openapi('TerminalStateException')

const JobExecutionSummarySchema = z
  .object({
    jobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier you assigned to this job when it was created.',
        }),
    ).exactOptional(),
    queuedAt: QueuedAtSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time, in milliseconds since the epoch, when the job execution was enqueued.',
        }),
    ).exactOptional(),
    startedAt: StartedAtSchema.and(
      z
        .any()
        .openapi({
          description: 'The time, in milliseconds since the epoch, when the job execution started.',
        }),
    ).exactOptional(),
    lastUpdatedAt: LastUpdatedAtSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time, in milliseconds since the epoch, when the job execution was last updated.',
        }),
    ).exactOptional(),
    versionNumber: VersionNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the job execution. Job execution versions are incremented each time AWS IoT Jobs receives an update from a device.',
        }),
    ).exactOptional(),
    executionNumber: ExecutionNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'A number that identifies a particular job execution on a particular device.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains a subset of information about a job execution.', required: [] })
  .openapi('JobExecutionSummary')

const JobExecutionSummaryListSchema = z
  .array(JobExecutionSummarySchema)
  .openapi('JobExecutionSummaryList')

const GetPendingJobExecutionsResponseSchema = z
  .object({
    inProgressJobs: JobExecutionSummaryListSchema.and(
      z
        .any()
        .openapi({ description: 'A list of JobExecutionSummary objects with status IN_PROGRESS.' }),
    ).exactOptional(),
    queuedJobs: JobExecutionSummaryListSchema.and(
      z.any().openapi({ description: 'A list of JobExecutionSummary objects with status QUEUED.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetPendingJobExecutionsResponse')

const StartNextPendingJobExecutionResponseSchema = z
  .object({
    execution: JobExecutionSchema.and(
      z.any().openapi({ description: 'A JobExecution object.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartNextPendingJobExecutionResponse')

const JobExecutionStateSchema = z
  .object({
    status: JobExecutionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the job execution. Can be one of: "QUEUED", "IN_PROGRESS", "FAILED", "SUCCESS", "CANCELED", "REJECTED", or "REMOVED".',
        }),
    ).exactOptional(),
    statusDetails: DetailsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of name/value pairs that describe the status of the job execution.',
        }),
    ).exactOptional(),
    versionNumber: VersionNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the job execution. Job execution versions are incremented each time they are updated by a device.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains data about the state of a job execution.', required: [] })
  .openapi('JobExecutionState')

const UpdateJobExecutionResponseSchema = z
  .object({
    executionState: JobExecutionStateSchema.and(
      z.any().openapi({ description: 'A JobExecutionState object.' }),
    ).exactOptional(),
    jobDocument: JobDocumentSchema.and(
      z.any().openapi({ description: 'The contents of the Job Documents.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateJobExecutionResponse')

const InvalidStateTransitionExceptionSchema = z.any().openapi('InvalidStateTransitionException')

const DescribeJobExecutionJobIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9_-]+|^\$next/)
  .openapi('DescribeJobExecutionJobId')

const IncludeJobDocumentSchema = z.boolean().openapi('IncludeJobDocument')

const DescribeJobExecutionRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeJobExecutionRequest' })
  .openapi('DescribeJobExecutionRequest')

const DetailsKeySchema = z
  .string()
  .regex(/[a-zA-Z0-9:_-]+/)
  .min(1)
  .max(128)
  .openapi('DetailsKey')

const ExpectedVersionSchema = z.int().openapi('ExpectedVersion')

const GetPendingJobExecutionsRequestSchema = z
  .object({})
  .openapi({ title: 'GetPendingJobExecutionsRequest' })
  .openapi('GetPendingJobExecutionsRequest')

const IncludeExecutionStateSchema = z.boolean().openapi('IncludeExecutionState')

const StepTimeoutInMinutesSchema = z.int().openapi('StepTimeoutInMinutes')

const StartNextPendingJobExecutionRequestSchema = z
  .object({
    statusDetails: DetailsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of name/value pairs that describe the status of the job execution. If not specified, the statusDetails are unchanged.',
        }),
    ).exactOptional(),
    stepTimeoutInMinutes: StepTimeoutInMinutesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the amount of time this device has to finish execution of this job. If the job execution status is not set to a terminal state before this timer expires, or before the timer is reset (by calling <code>UpdateJobExecution</code>, setting the status to <code>IN_PROGRESS</code> and specifying a new timeout value in field <code>stepTimeoutInMinutes</code>) the job execution status will be automatically set to <code>TIMED_OUT</code>. Note that setting this timeout has no effect on that job execution timeout which may have been specified when the job was created (<code>CreateJob</code> using field <code>timeoutConfig</code>).',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'StartNextPendingJobExecutionRequest', required: [] })
  .openapi('StartNextPendingJobExecutionRequest')

const UpdateJobExecutionRequestSchema = z
  .object({
    status: JobExecutionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new status for the job execution (IN_PROGRESS, FAILED, SUCCESS, or REJECTED). This must be specified on every update.',
        }),
    ),
    statusDetails: DetailsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Optional. A collection of name/value pairs that describe the status of the job execution. If not specified, the statusDetails are unchanged.',
        }),
    ).exactOptional(),
    stepTimeoutInMinutes: StepTimeoutInMinutesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the amount of time this device has to finish execution of this job. If the job execution status is not set to a terminal state before this timer expires, or before the timer is reset (by again calling <code>UpdateJobExecution</code>, setting the status to <code>IN_PROGRESS</code> and specifying a new timeout value in this field) the job execution status will be automatically set to <code>TIMED_OUT</code>. Note that setting or resetting this timeout has no effect on that job execution timeout which may have been specified when the job was created (<code>CreateJob</code> using field <code>timeoutConfig</code>).',
        }),
    ).exactOptional(),
    expectedVersion: ExpectedVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional. The expected current version of the job execution. Each time you update the job execution, its version is incremented. If the version of the job execution stored in Jobs does not match, the update is rejected with a VersionMismatch error, and an ErrorResponse that contains the current job execution status data is returned. (This makes it unnecessary to perform a separate DescribeJobExecution request in order to obtain the job execution status data.)',
        }),
    ).exactOptional(),
    includeJobExecutionState: IncludeExecutionStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional. When included and set to true, the response contains the JobExecutionState data. The default is false.',
        }),
    ).exactOptional(),
    includeJobDocument: IncludeJobDocumentSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional. When set to true, the response contains the job document. The default is false.',
        }),
    ).exactOptional(),
    executionNumber: ExecutionNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional. A number that identifies a particular job execution on a particular device.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['status'], title: 'UpdateJobExecutionRequest' })
  .openapi('UpdateJobExecutionRequest')

const XAmzContentSha256ParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Content-Sha256',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzDateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Date', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzAlgorithmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Algorithm', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzCredentialParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Credential', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSecurityTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Security-Token',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzSignatureParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Signature', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSignedHeadersParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-SignedHeaders',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const HmacSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: 'Amazon Signature authorization v4',
  'x-amazon-apigateway-authtype': 'awsSigv4',
}

export const getThingsThingNameJobsJobIdRoute = createRoute({
  method: 'get',
  path: '/things/{thingName}/jobs/{jobId}',
  description: 'Gets details of a job execution.',
  operationId: 'DescribeJobExecution',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      jobId: z
        .string()
        .regex(/[a-zA-Z0-9_-]+|^\$next/)
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            required: true,
            description: 'The unique identifier assigned to this job when it was created.',
            schema: { type: 'string', pattern: '[a-zA-Z0-9_-]+|^\\$next' },
          },
        }),
      thingName: z
        .string()
        .regex(/[a-zA-Z0-9:_-]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'thingName',
            in: 'path',
            required: true,
            description:
              'The thing name associated with the device the job execution is running on.',
            schema: { type: 'string', pattern: '[a-zA-Z0-9:_-]+', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    query: z.object({
      includeJobDocument: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeJobDocument',
            in: 'query',
            required: false,
            description:
              'Optional. When set to true, the response contains the job document. The default is false.',
            schema: { type: 'boolean' },
          },
        }),
      executionNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'executionNumber',
            in: 'query',
            required: false,
            description:
              'Optional. A number that identifies a particular job execution on a particular device. If not specified, the latest job execution is returned.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeJobExecutionResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'CertificateValidationException',
      content: { 'application/json': { schema: CertificateValidationExceptionSchema } },
    },
    485: {
      description: 'TerminalStateException',
      content: { 'application/json': { schema: TerminalStateExceptionSchema } },
    },
  },
})

export const postThingsThingNameJobsJobIdRoute = createRoute({
  method: 'post',
  path: '/things/{thingName}/jobs/{jobId}',
  description: 'Updates the status of a job execution.',
  operationId: 'UpdateJobExecution',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      jobId: z
        .string()
        .regex(/[a-zA-Z0-9_-]+/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            required: true,
            description: 'The unique identifier assigned to this job when it was created.',
            schema: { type: 'string', pattern: '[a-zA-Z0-9_-]+', minLength: 1, maxLength: 64 },
          },
        }),
      thingName: z
        .string()
        .regex(/[a-zA-Z0-9:_-]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'thingName',
            in: 'path',
            required: true,
            description: 'The name of the thing associated with the device.',
            schema: { type: 'string', pattern: '[a-zA-Z0-9:_-]+', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              status: z
                .enum([
                  'QUEUED',
                  'IN_PROGRESS',
                  'SUCCEEDED',
                  'FAILED',
                  'TIMED_OUT',
                  'REJECTED',
                  'REMOVED',
                  'CANCELED',
                ])
                .openapi({
                  description:
                    'The new status for the job execution (IN_PROGRESS, FAILED, SUCCESS, or REJECTED). This must be specified on every update.',
                }),
              statusDetails: z
                .record(z.string(), DetailsValueSchema)
                .exactOptional()
                .openapi({
                  description:
                    ' Optional. A collection of name/value pairs that describe the status of the job execution. If not specified, the statusDetails are unchanged.',
                }),
              stepTimeoutInMinutes: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the amount of time this device has to finish execution of this job. If the job execution status is not set to a terminal state before this timer expires, or before the timer is reset (by again calling <code>UpdateJobExecution</code>, setting the status to <code>IN_PROGRESS</code> and specifying a new timeout value in this field) the job execution status will be automatically set to <code>TIMED_OUT</code>. Note that setting or resetting this timeout has no effect on that job execution timeout which may have been specified when the job was created (<code>CreateJob</code> using field <code>timeoutConfig</code>).',
                }),
              expectedVersion: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Optional. The expected current version of the job execution. Each time you update the job execution, its version is incremented. If the version of the job execution stored in Jobs does not match, the update is rejected with a VersionMismatch error, and an ErrorResponse that contains the current job execution status data is returned. (This makes it unnecessary to perform a separate DescribeJobExecution request in order to obtain the job execution status data.)',
                }),
              includeJobExecutionState: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Optional. When included and set to true, the response contains the JobExecutionState data. The default is false.',
                }),
              includeJobDocument: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Optional. When set to true, the response contains the job document. The default is false.',
                }),
              executionNumber: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Optional. A number that identifies a particular job execution on a particular device.',
                }),
            })
            .openapi({ required: ['status'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateJobExecutionResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'CertificateValidationException',
      content: { 'application/json': { schema: CertificateValidationExceptionSchema } },
    },
    485: {
      description: 'InvalidStateTransitionException',
      content: { 'application/json': { schema: InvalidStateTransitionExceptionSchema } },
    },
  },
})

export const getThingsThingNameJobsRoute = createRoute({
  method: 'get',
  path: '/things/{thingName}/jobs',
  description: 'Gets the list of all jobs for a thing that are not in a terminal status.',
  operationId: 'GetPendingJobExecutions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      thingName: z
        .string()
        .regex(/[a-zA-Z0-9:_-]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'thingName',
            in: 'path',
            required: true,
            description: 'The name of the thing that is executing the job.',
            schema: { type: 'string', pattern: '[a-zA-Z0-9:_-]+', minLength: 1, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetPendingJobExecutionsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'CertificateValidationException',
      content: { 'application/json': { schema: CertificateValidationExceptionSchema } },
    },
  },
})

export const putThingsThingNameJobsNextRoute = createRoute({
  method: 'put',
  path: '/things/{thingName}/jobs/$next',
  description:
    'Gets and starts the next pending (status IN_PROGRESS or QUEUED) job execution for a thing.',
  operationId: 'StartNextPendingJobExecution',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      thingName: z
        .string()
        .regex(/[a-zA-Z0-9:_-]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'thingName',
            in: 'path',
            required: true,
            description: 'The name of the thing associated with the device.',
            schema: { type: 'string', pattern: '[a-zA-Z0-9:_-]+', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              statusDetails: z
                .record(z.string(), DetailsValueSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A collection of name/value pairs that describe the status of the job execution. If not specified, the statusDetails are unchanged.',
                }),
              stepTimeoutInMinutes: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the amount of time this device has to finish execution of this job. If the job execution status is not set to a terminal state before this timer expires, or before the timer is reset (by calling <code>UpdateJobExecution</code>, setting the status to <code>IN_PROGRESS</code> and specifying a new timeout value in field <code>stepTimeoutInMinutes</code>) the job execution status will be automatically set to <code>TIMED_OUT</code>. Note that setting this timeout has no effect on that job execution timeout which may have been specified when the job was created (<code>CreateJob</code> using field <code>timeoutConfig</code>).',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartNextPendingJobExecutionResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'CertificateValidationException',
      content: { 'application/json': { schema: CertificateValidationExceptionSchema } },
    },
  },
})
