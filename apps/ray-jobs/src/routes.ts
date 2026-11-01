import { createRoute, z } from '@hono/zod-openapi'

const JobTypeSchema = z
  .enum(['SUBMISSION', 'DRIVER'])
  .openapi({
    title: 'JobType',
    description: 'An enumeration for describing the different job types.',
  })
  .openapi('JobType')

const DriverInfoSchema = z
  .object({
    id: z.string().openapi({ title: 'Id', description: 'The id of the driver' }),
    node_ip_address: z
      .string()
      .openapi({
        title: 'Node Ip Address',
        description: 'The ip address of the node the driver is running on',
      }),
    pid: z
      .string()
      .openapi({ title: 'Pid', description: 'The pid of the worker process the driver is using.' }),
  })
  .nullable()
  .openapi({
    title: 'DriverInfo',
    description: 'A class for recording information about the driver related to the job.',
    required: ['id', 'node_ip_address', 'pid'],
  })
  .openapi('DriverInfo')

const JobStatusSchema = z
  .enum(['PENDING', 'RUNNING', 'STOPPED', 'SUCCEEDED', 'FAILED'])
  .openapi({
    title: 'JobStatus',
    description: 'An enumeration for describing the status of a job.',
  })
  .openapi('JobStatus')

const JobDetailsSchema = z
  .object({
    type: JobTypeSchema.openapi({ description: 'The type of job.' }),
    entrypoint: z
      .string()
      .openapi({ title: 'Entrypoint', description: 'The entrypoint command for this job.' }),
    job_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        title: 'Job Id',
        description:
          'The job id. An id that is created for every job that is launched in Ray. This id can be used to fetch data about jobs using Ray core APIs.',
      }),
    submission_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        title: 'Submission Id',
        description:
          'A submission id is an id created for every submission job. This id can be used to fetch data about jobs using the job submission APIs.',
      }),
    driver_info: DriverInfoSchema.nullable()
      .exactOptional()
      .openapi({
        title: 'Driver Info',
        description:
          'The driver related to this job. For submission jobs, it is the last driver launched by that job submission, or None if there is no driver.',
      }),
    status: JobStatusSchema.openapi({ description: 'The status of the job.' }),
    message: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        title: 'Message',
        description: 'A message describing the status in more detail.',
      }),
    error_type: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Error Type', description: 'Internal error, user script error' }),
    start_time: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        title: 'Start Time',
        description: 'The time when the job was started. A Unix timestamp in ms.',
      }),
    end_time: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        title: 'End Time',
        description: 'The time when the job moved into a terminal state. A Unix timestamp in ms.',
      }),
    metadata: z
      .record(z.string(), z.string())
      .nullable()
      .exactOptional()
      .openapi({ title: 'Metadata', description: 'Arbitrary user-provided metadata for the job.' }),
    runtime_env: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({ title: 'Runtime Env', description: 'The runtime environment for the job.' }),
    driver_agent_http_address: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Driver Agent Http Address', description: 'Driver agent http address.' }),
    driver_node_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'Driver Node Id', description: 'Driver node id.' }),
  })
  .openapi({
    description: 'Job data with extra details about its driver and its submission.',
    required: ['type', 'entrypoint', 'status'],
  })
  .openapi('JobDetails')

const JobSubmitRequestSchema = z
  .object({
    entrypoint: z
      .string()
      .openapi({ description: "Command to start execution, ex: 'python script.py'" }),
    submission_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional submission_id to specify for the job.' }),
    job_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional job_id to specify for the job.', deprecated: true }),
    runtime_env: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'The runtime environment for the job.' }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Arbitrary user-provided metadata for the job.' }),
    entrypoint_num_cpus: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Number of CPUs to allocate for the execution of the entrypoint command, separately from any Ray tasks or actors that are created by it.',
      }),
    entrypoint_num_gpus: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Number of GPUs to allocate for the execution of the entrypoint command, separately from any Ray tasks or actors that are created by it.',
      }),
    entrypoint_memory: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The quantity of memory to reserve for the execution of the entrypoint command, separately from any tasks or actors launched by it.',
      }),
    entrypoint_resources: z
      .record(z.string(), z.number())
      .exactOptional()
      .openapi({
        description:
          'The quantity of various custom resources to allocate for the execution of the entrypoint command, separately from any Ray tasks or actors that are created by it.',
      }),
  })
  .openapi({ required: ['entrypoint'] })
  .openapi('JobSubmitRequest')

const JobSubmitResponseSchema = z
  .object({
    job_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the submitted job.\n', deprecated: true }),
    submission_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the submitted job.\n' }),
  })
  .openapi({ required: [] })
  .openapi('JobSubmitResponse')

export const getApiVersionRoute = createRoute({
  method: 'get',
  path: '/api/version',
  summary: 'Get Version',
  description: 'Get the Ray Jobs API version and the Ray version running on the cluster.\n',
  responses: {
    200: {
      description: 'The Ray Jobs API version and the Ray version running on the cluster.\n',
      content: {
        'application/json': {
          schema: z
            .object({
              version: z
                .string()
                .exactOptional()
                .openapi({ description: 'The version of the Ray Jobs API running on the server.' }),
              ray_version: z
                .string()
                .exactOptional()
                .openapi({ description: 'The version of Ray running on the server.' }),
              ray_commit: z
                .string()
                .exactOptional()
                .openapi({ description: 'The commit of Ray running on the server.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getApiJobsRoute = createRoute({
  method: 'get',
  path: '/api/jobs',
  summary: 'List Jobs',
  description: 'List all submitted jobs in the cluster and their details.\n',
  responses: {
    200: {
      description: 'The details of the jobs.\n',
      content: { 'application/json': { schema: z.array(JobDetailsSchema) } },
    },
  },
})

export const postApiJobsRoute = createRoute({
  method: 'post',
  path: '/api/jobs',
  summary: 'Submit Job',
  description: 'Submit a job to the cluster.\n',
  request: {
    body: {
      description: 'The job to submit.\n',
      content: { 'application/json': { schema: JobSubmitRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The ID of the submitted job.\n',
      content: { 'application/json': { schema: JobSubmitResponseSchema } },
    },
    400: {
      description: 'A TypeError or ValueError was raised when submitting the job.\n',
      content: {
        'text/plain': { schema: z.string().openapi({ description: 'The error message.' }) },
      },
    },
    500: {
      description: 'An internal error occurred when submitting the job.\n',
      content: {
        'text/plain': { schema: z.string().openapi({ description: 'The error message.' }) },
      },
    },
  },
})

export const getApiJobsSubmissionIdRoute = createRoute({
  method: 'get',
  path: '/api/jobs/{submission_id}',
  summary: 'Get Job Details',
  description: 'Get the status and details of a job.\n',
  request: {
    params: z.object({
      submission_id: z
        .string()
        .openapi({
          param: {
            name: 'submission_id',
            in: 'path',
            description: 'The ID of the job to get the status and details of.\n',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The details of the job.\n',
      content: { 'application/json': { schema: JobDetailsSchema } },
    },
    404: {
      description: 'The job does not exist.\n',
      content: {
        'text/plain': { schema: z.string().openapi({ description: 'The error message.' }) },
      },
    },
  },
})

export const deleteApiJobsSubmissionIdRoute = createRoute({
  method: 'delete',
  path: '/api/jobs/{submission_id}',
  summary: 'Delete Job',
  description: 'Delete a job that is already in a terminal state.\n',
  request: {
    params: z.object({
      submission_id: z
        .string()
        .openapi({
          param: {
            name: 'submission_id',
            in: 'path',
            description: 'The ID of the job to cancel.\n',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Whether the job was deleted.\n',
      content: {
        'application/json': {
          schema: z
            .object({
              deleted: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether the job was deleted.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'The job was not submitted via the Ray Jobs API, so it cannot be deleted.\n',
      content: {
        'text/plain': { schema: z.string().openapi({ description: 'The error message.' }) },
      },
    },
    404: {
      description: 'The job does not exist.\n',
      content: {
        'text/plain': { schema: z.string().openapi({ description: 'The error message.' }) },
      },
    },
    500: {
      description:
        'An internal error occurred when deleting the job, or the job was not in a terminal state.\n',
      content: {
        'text/plain': { schema: z.string().openapi({ description: 'The error message.' }) },
      },
    },
  },
})

export const postApiJobsSubmissionIdStopRoute = createRoute({
  method: 'post',
  path: '/api/jobs/{submission_id}/stop',
  summary: 'Stop Job',
  description: 'Stop a job.\n',
  request: {
    params: z.object({
      submission_id: z
        .string()
        .openapi({
          param: {
            name: 'submission_id',
            in: 'path',
            description: 'The ID of the job to stop.\n',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Whether the job was stopped.\n',
      content: {
        'application/json': {
          schema: z
            .object({
              stopped: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether the job was stopped.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'The job was not submitted via the Ray Jobs API, so it cannot be stopped.\n',
      content: {
        'text/plain': { schema: z.string().openapi({ description: 'The error message.' }) },
      },
    },
    404: {
      description: 'The job does not exist.\n',
      content: {
        'text/plain': { schema: z.string().openapi({ description: 'The error message.' }) },
      },
    },
    500: {
      description: 'An internal error occurred when stopping the job.\n',
      content: {
        'text/plain': { schema: z.string().openapi({ description: 'The error message.' }) },
      },
    },
  },
})

export const getApiJobsSubmissionIdLogsRoute = createRoute({
  method: 'get',
  path: '/api/jobs/{submission_id}/logs',
  summary: 'Get Job Logs',
  description: 'Get the logs of a job.\n',
  request: {
    params: z.object({
      submission_id: z
        .string()
        .openapi({
          param: {
            name: 'submission_id',
            in: 'path',
            description: 'The ID of the job to get the logs of.\n',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The logs of the job.\n',
      content: {
        'application/json': {
          schema: z
            .object({
              logs: z.string().exactOptional().openapi({ description: 'The logs of the job.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description:
        'The job was not submitted via the Ray Jobs API, so its logs cannot be retrieved.\n',
      content: {
        'text/plain': { schema: z.string().openapi({ description: 'The error message.' }) },
      },
    },
    404: {
      description: 'The job does not exist.\n',
      content: {
        'text/plain': { schema: z.string().openapi({ description: 'The error message.' }) },
      },
    },
    500: {
      description: 'An internal error occurred when getting the logs of the job.\n',
      content: {
        'text/plain': { schema: z.string().openapi({ description: 'The error message.' }) },
      },
    },
  },
})

export const getApiJobsSubmissionIdLogsTailRoute = createRoute({
  method: 'get',
  path: '/api/jobs/{submission_id}/logs/tail',
  summary: 'Tail Job Logs',
  description:
    'WebSocket endpoint for tailing the logs of a job\n(Not documented in OpenAPI, see\nhttps://docs.ray.io/en/latest/_modules/ray/dashboard/modules/job/sdk.html#JobSubmissionClient.tail_job_logs\nfor example usage).\n',
  request: {
    params: z.object({
      submission_id: z
        .string()
        .openapi({
          param: {
            name: 'submission_id',
            in: 'path',
            description: 'The ID of the job to tail the logs of.\n',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: {
      description:
        'The job was not submitted via the Ray Jobs API, so its logs cannot be retrieved.\n',
      content: {
        'text/plain': { schema: z.string().openapi({ description: 'The error message.' }) },
      },
    },
    404: {
      description: 'The job does not exist.\n',
      content: {
        'text/plain': { schema: z.string().openapi({ description: 'The error message.' }) },
      },
    },
  },
})
