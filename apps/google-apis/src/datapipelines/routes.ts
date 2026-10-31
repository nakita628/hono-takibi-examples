import { createRoute, z } from '@hono/zod-openapi'

const GoogleCloudDatapipelinesV1SdkVersionSchema = z
  .object({
    sdkSupportStatus: z
      .enum(['UNKNOWN', 'SUPPORTED', 'STALE', 'DEPRECATED', 'UNSUPPORTED'])
      .exactOptional()
      .openapi({ description: 'The support status for this SDK version.' }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'The version of the SDK used to run the job.' }),
    versionDisplayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'A readable string describing the version of the SDK.' }),
  })
  .openapi({ description: 'The version of the SDK used to run the job.', required: [] })
  .openapi('GoogleCloudDatapipelinesV1SdkVersion')

const GoogleCloudDatapipelinesV1DataflowJobDetailsSchema = z
  .object({
    currentWorkers: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The current number of workers used to run the jobs. Only set to a value if the job is still running.',
        readOnly: true,
      }),
    resourceInfo: z
      .record(z.string(), z.float64())
      .exactOptional()
      .openapi({
        description:
          'Cached version of all the metrics of interest for the job. This value gets stored here when the job is terminated. As long as the job is running, this field is populated from the Dataflow API.',
      }),
    sdkVersion: GoogleCloudDatapipelinesV1SdkVersionSchema.exactOptional().openapi({
      description: 'Output only. The SDK version used to run the job.',
      readOnly: true,
    }),
  })
  .openapi({
    description:
      'Pipeline job details specific to the Dataflow API. This is encapsulated here to allow for more executors to store their specific details separately.',
    required: [],
  })
  .openapi('GoogleCloudDatapipelinesV1DataflowJobDetails')

const GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentSchema = z
  .object({
    additionalExperiments: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Additional experiment flags for the job.' }),
    additionalUserLabels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Additional user labels to be specified for the job. Keys and values must follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions). An object containing a list of key/value pairs. Example: `{ "name": "wrench", "mass": "1kg", "count": "3" }`.',
      }),
    enableStreamingEngine: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to enable Streaming Engine for the job.' }),
    flexrsGoal: z
      .enum(['FLEXRS_UNSPECIFIED', 'FLEXRS_SPEED_OPTIMIZED', 'FLEXRS_COST_OPTIMIZED'])
      .exactOptional()
      .openapi({
        description:
          'Set FlexRS goal for the job. https://cloud.google.com/dataflow/docs/guides/flexrs',
      }),
    ipConfiguration: z
      .enum(['WORKER_IP_UNSPECIFIED', 'WORKER_IP_PUBLIC', 'WORKER_IP_PRIVATE'])
      .exactOptional()
      .openapi({ description: 'Configuration for VM IPs.' }),
    kmsKeyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name for the Cloud KMS key for the job. Key format is: projects//locations//keyRings//cryptoKeys/',
      }),
    machineType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The machine type to use for the job. Defaults to the value from the template if not specified.',
      }),
    maxWorkers: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.',
      }),
    network: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default".',
      }),
    numWorkers: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The initial number of Compute Engine instances for the job.' }),
    serviceAccountEmail: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email address of the service account to run the job as.' }),
    subnetwork: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Subnetwork to which VMs will be assigned, if desired. You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL.',
      }),
    tempLocation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with `gs://`.',
      }),
    workerRegion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with worker_zone. If neither worker_region nor worker_zone is specified, defaults to the control plane region.',
      }),
    workerZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with worker_region. If neither worker_region nor worker_zone is specified, a zone in the control plane region is chosen based on available capacity. If both `worker_zone` and `zone` are set, `worker_zone` takes precedence.',
      }),
    zone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Compute Engine [availability zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones) for launching worker instances to run your pipeline. In the future, worker_zone will take precedence.',
      }),
  })
  .openapi({
    description: 'The environment values to be set at runtime for a Flex Template.',
    required: [],
  })
  .openapi('GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment')

const GoogleRpcStatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The status code, which should be an enum value of google.rpc.Code.',
      }),
    details: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details. There is a common set of message types for APIs to use.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.',
      }),
  })
  .openapi({
    description:
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('GoogleRpcStatus')

const GoogleCloudDatapipelinesV1JobSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time of job creation.', readOnly: true }),
    dataflowJobDetails: GoogleCloudDatapipelinesV1DataflowJobDetailsSchema.exactOptional().openapi({
      description: 'All the details that are specific to a Dataflow job.',
    }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time of job termination. This is absent if the job is still running.',
        readOnly: true,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The internal ID for the job.', readOnly: true }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The fully qualified resource name for the job.' }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'STATE_PENDING',
        'STATE_RUNNING',
        'STATE_DONE',
        'STATE_FAILED',
        'STATE_CANCELLED',
      ])
      .exactOptional()
      .openapi({ description: 'The current state of the job.' }),
    status: GoogleRpcStatusSchema.exactOptional().openapi({
      description:
        'Status capturing any error code or message related to job creation or execution.',
    }),
  })
  .openapi({
    description:
      'Definition of the job information maintained by the pipeline. Fields in this entity are retrieved from the executor API (e.g. Dataflow API).',
    required: [],
  })
  .openapi('GoogleCloudDatapipelinesV1Job')

const GoogleCloudDatapipelinesV1LaunchFlexTemplateParameterSchema = z
  .object({
    containerSpecGcsPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Cloud Storage path to a file with a JSON-serialized ContainerSpec as content.',
      }),
    environment:
      GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentSchema.exactOptional().openapi({
        description: 'The runtime environment for the Flex Template job.',
      }),
    jobName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The job name to use for the created job. For an update job request, the job name should be the same as the existing running job.',
      }),
    launchOptions: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Launch options for this Flex Template job. This is a common set of options across languages and templates. This should not be used to pass job parameters.',
      }),
    parameters: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'The parameters for the Flex Template. Example: `{"num_workers":"5"}`',
      }),
    transformNameMappings: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Use this to pass transform name mappings for streaming update jobs. Example: `{"oldTransformName":"newTransformName",...}`',
      }),
    update: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Set this to true if you are sending a request to update a running streaming job. When set, the job name should be the same as the running job.',
      }),
  })
  .openapi({ description: 'Launch Flex Template parameter.', required: [] })
  .openapi('GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter')

const GoogleCloudDatapipelinesV1LaunchFlexTemplateRequestSchema = z
  .object({
    launchParameter:
      GoogleCloudDatapipelinesV1LaunchFlexTemplateParameterSchema.exactOptional().openapi({
        description: 'Required. Parameter to launch a job from a Flex Template.',
      }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. For example, `us-central1`, `us-west1`.',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The ID of the Cloud Platform project that the job belongs to.',
      }),
    validateOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, the request is validated but not actually executed. Defaults to false.',
      }),
  })
  .openapi({
    description: 'A request to launch a Dataflow job from a Flex Template.',
    required: [],
  })
  .openapi('GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest')

const GoogleCloudDatapipelinesV1RuntimeEnvironmentSchema = z
  .object({
    additionalExperiments: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Additional experiment flags for the job.' }),
    additionalUserLabels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Additional user labels to be specified for the job. Keys and values should follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) page. An object containing a list of key/value pairs. Example: { "name": "wrench", "mass": "1kg", "count": "3" }.',
      }),
    bypassTempDirValidation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether to bypass the safety checks for the job's temporary directory. Use with caution.",
      }),
    enableStreamingEngine: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to enable Streaming Engine for the job.' }),
    ipConfiguration: z
      .enum(['WORKER_IP_UNSPECIFIED', 'WORKER_IP_PUBLIC', 'WORKER_IP_PRIVATE'])
      .exactOptional()
      .openapi({ description: 'Configuration for VM IPs.' }),
    kmsKeyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name for the Cloud KMS key for the job. The key format is: projects//locations//keyRings//cryptoKeys/',
      }),
    machineType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The machine type to use for the job. Defaults to the value from the template if not specified.',
      }),
    maxWorkers: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.',
      }),
    network: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default".',
      }),
    numWorkers: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The initial number of Compute Engine instances for the job.' }),
    serviceAccountEmail: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email address of the service account to run the job as.' }),
    subnetwork: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Subnetwork to which VMs will be assigned, if desired. You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL.',
      }),
    tempLocation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with `gs://`.',
      }),
    workerRegion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with worker_zone. If neither worker_region nor worker_zone is specified, default to the control plane\'s region.',
      }),
    workerZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with worker_region. If neither worker_region nor worker_zone is specified, a zone in the control plane\'s region is chosen based on available capacity. If both `worker_zone` and `zone` are set, `worker_zone` takes precedence.',
      }),
    zone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Compute Engine [availability zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones) for launching worker instances to run your pipeline. In the future, worker_zone will take precedence.',
      }),
  })
  .openapi({ description: 'The environment values to set at runtime.', required: [] })
  .openapi('GoogleCloudDatapipelinesV1RuntimeEnvironment')

const GoogleCloudDatapipelinesV1LaunchTemplateParametersSchema = z
  .object({
    environment: GoogleCloudDatapipelinesV1RuntimeEnvironmentSchema.exactOptional().openapi({
      description: 'The runtime environment for the job.',
    }),
    jobName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The job name to use for the created job.' }),
    parameters: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'The runtime parameters to pass to the job.' }),
    transformNameMapping: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job. Only applicable when updating a pipeline.',
      }),
    update: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set, replace the existing pipeline with the name specified by jobName with this pipeline, preserving state.',
      }),
  })
  .openapi({ description: 'Parameters to provide to the template being launched.', required: [] })
  .openapi('GoogleCloudDatapipelinesV1LaunchTemplateParameters')

const GoogleCloudDatapipelinesV1LaunchTemplateRequestSchema = z
  .object({
    gcsPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A Cloud Storage path to the template from which to create the job. Must be a valid Cloud Storage URL, beginning with 'gs://'.",
      }),
    launchParameters:
      GoogleCloudDatapipelinesV1LaunchTemplateParametersSchema.exactOptional().openapi({
        description:
          'The parameters of the template to launch. This should be part of the body of the POST request.',
      }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The ID of the Cloud Platform project that the job belongs to.',
      }),
    validateOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, the request is validated but not actually executed. Defaults to false.',
      }),
  })
  .openapi({ description: 'A request to launch a template.', required: [] })
  .openapi('GoogleCloudDatapipelinesV1LaunchTemplateRequest')

const GoogleCloudDatapipelinesV1ListJobsResponseSchema = z
  .object({
    jobs: z
      .array(GoogleCloudDatapipelinesV1JobSchema)
      .exactOptional()
      .openapi({
        description:
          'Results that were accessible to the caller. Results are always in descending order of job creation date.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({ description: 'Response message for ListJobs', required: [] })
  .openapi('GoogleCloudDatapipelinesV1ListJobsResponse')

const GoogleCloudDatapipelinesV1ScheduleSpecSchema = z
  .object({
    nextJobTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. When the next Scheduler job is going to run.',
        readOnly: true,
      }),
    schedule: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unix-cron format of the schedule. This information is retrieved from the linked Cloud Scheduler.',
      }),
    timeZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Timezone ID. This matches the timezone IDs used by the Cloud Scheduler API. If empty, UTC time is assumed.',
      }),
  })
  .openapi({ description: 'Details of the schedule the pipeline runs on.', required: [] })
  .openapi('GoogleCloudDatapipelinesV1ScheduleSpec')

const GoogleCloudDatapipelinesV1WorkloadSchema = z
  .object({
    dataflowFlexTemplateRequest:
      GoogleCloudDatapipelinesV1LaunchFlexTemplateRequestSchema.exactOptional().openapi({
        description:
          'Template information and additional parameters needed to launch a Dataflow job using the flex launch API.',
      }),
    dataflowLaunchTemplateRequest:
      GoogleCloudDatapipelinesV1LaunchTemplateRequestSchema.exactOptional().openapi({
        description:
          'Template information and additional parameters needed to launch a Dataflow job using the standard launch API.',
      }),
  })
  .openapi({ description: 'Workload details for creating the pipeline jobs.', required: [] })
  .openapi('GoogleCloudDatapipelinesV1Workload')

const GoogleCloudDatapipelinesV1PipelineSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Immutable. The timestamp when the pipeline was initially created. Set by the Data Pipelines service.',
        readOnly: true,
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The display name of the pipeline. It can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), and underscores (_).',
      }),
    jobCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. Number of jobs.', readOnly: true }),
    lastUpdateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Immutable. The timestamp when the pipeline was last modified. Set by the Data Pipelines service.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`. * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), and periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects). * `LOCATION_ID` is the canonical ID for the pipeline's location. The list of available locations can be obtained by calling `google.cloud.location.Locations.ListLocations`. Note that the Data Pipelines service is not available in all regions. It depends on Cloud Scheduler, an App Engine application, so it's only available in [App Engine regions](https://cloud.google.com/about/locations#region). * `PIPELINE_ID` is the ID of the pipeline. Must be unique for the selected project and location.",
      }),
    pipelineSources: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Immutable. The sources of the pipeline (for example, Dataplex). The keys and values are set by the corresponding sources during pipeline creation.',
      }),
    scheduleInfo: GoogleCloudDatapipelinesV1ScheduleSpecSchema.exactOptional().openapi({
      description:
        'Internal scheduling information for a pipeline. If this information is provided, periodic jobs will be created per the schedule. If not, users are responsible for creating jobs externally.',
    }),
    schedulerServiceAccountEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A service account email to be used with the Cloud Scheduler job. If not specified, the default compute engine service account will be used.',
      }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'STATE_RESUMING',
        'STATE_ACTIVE',
        'STATE_STOPPING',
        'STATE_ARCHIVED',
        'STATE_PAUSED',
      ])
      .exactOptional()
      .openapi({
        description:
          "Required. The state of the pipeline. When the pipeline is created, the state is set to 'PIPELINE_STATE_ACTIVE' by default. State changes can be requested by setting the state to stopping, paused, or resuming. State cannot be changed through UpdatePipeline requests.",
      }),
    type: z
      .enum(['PIPELINE_TYPE_UNSPECIFIED', 'PIPELINE_TYPE_BATCH', 'PIPELINE_TYPE_STREAMING'])
      .exactOptional()
      .openapi({
        description:
          'Required. The type of the pipeline. This field affects the scheduling of the pipeline and the type of metrics to show for the pipeline.',
      }),
    workload: GoogleCloudDatapipelinesV1WorkloadSchema.exactOptional().openapi({
      description: 'Workload information for creating new jobs.',
    }),
  })
  .openapi({
    description:
      'The main pipeline entity and all the necessary metadata for launching and managing linked jobs.',
    required: [],
  })
  .openapi('GoogleCloudDatapipelinesV1Pipeline')

const GoogleCloudDatapipelinesV1ListPipelinesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    pipelines: z
      .array(GoogleCloudDatapipelinesV1PipelineSchema)
      .exactOptional()
      .openapi({
        description:
          'Results that matched the filter criteria and were accessible to the caller. Results are always in descending order of pipeline creation date.',
      }),
  })
  .openapi({ description: 'Response message for ListPipelines.', required: [] })
  .openapi('GoogleCloudDatapipelinesV1ListPipelinesResponse')

const GoogleCloudDatapipelinesV1RunPipelineRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for RunPipeline' })
  .openapi('GoogleCloudDatapipelinesV1RunPipelineRequest')

const GoogleCloudDatapipelinesV1RunPipelineResponseSchema = z
  .object({
    job: GoogleCloudDatapipelinesV1JobSchema.exactOptional().openapi({
      description: 'Job that was created as part of RunPipeline operation.',
    }),
  })
  .openapi({ description: 'Response message for RunPipeline', required: [] })
  .openapi('GoogleCloudDatapipelinesV1RunPipelineResponse')

const GoogleCloudDatapipelinesV1StopPipelineRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for StopPipeline.' })
  .openapi('GoogleCloudDatapipelinesV1StopPipelineRequest')

const GoogleProtobufEmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('GoogleProtobufEmpty')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['projects'],
  description:
    'Looks up a single pipeline. Returns a "NOT_FOUND" error if no such pipeline exists. Returns a "FORBIDDEN" error if the caller doesn\'t have permission to access it.',
  operationId: 'datapipelines.projects.locations.pipelines.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudDatapipelinesV1PipelineSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1NameRoute = createRoute({
  method: 'delete',
  path: '/v1/{name}',
  tags: ['projects'],
  description:
    'Deletes a pipeline. If a scheduler job is attached to the pipeline, it will be deleted.',
  operationId: 'datapipelines.projects.locations.pipelines.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchV1NameRoute = createRoute({
  method: 'patch',
  path: '/v1/{name}',
  tags: ['projects'],
  description:
    "Updates a pipeline. If successful, the updated Pipeline is returned. Returns `NOT_FOUND` if the pipeline doesn't exist. If UpdatePipeline does not return successfully, you can retry the UpdatePipeline request until you receive a successful response.",
  operationId: 'datapipelines.projects.locations.pipelines.patch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The list of fields to be updated.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              "The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`. * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), and periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects). * `LOCATION_ID` is the canonical ID for the pipeline's location. The list of available locations can be obtained by calling `google.cloud.location.Locations.ListLocations`. Note that the Data Pipelines service is not available in all regions. It depends on Cloud Scheduler, an App Engine application, so it's only available in [App Engine regions](https://cloud.google.com/about/locations#region). * `PIPELINE_ID` is the ID of the pipeline. Must be unique for the selected project and location.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudDatapipelinesV1PipelineSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudDatapipelinesV1PipelineSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameRunRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:run',
  tags: ['projects'],
  description:
    'Creates a job for the specified pipeline directly. You can use this method when the internal scheduler is not configured and you want to trigger the job directly or through an external system. Returns a "NOT_FOUND" error if the pipeline doesn\'t exist. Returns a "FORBIDDEN" error if the user doesn\'t have permission to access the pipeline or run jobs for the pipeline.',
  operationId: 'datapipelines.projects.locations.pipelines.run',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudDatapipelinesV1RunPipelineRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudDatapipelinesV1RunPipelineResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameStopRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:stop',
  tags: ['projects'],
  description:
    'Freezes pipeline execution permanently. If there\'s a corresponding scheduler entry, it\'s deleted, and the pipeline state is changed to "ARCHIVED". However, pipeline metadata is retained.',
  operationId: 'datapipelines.projects.locations.pipelines.stop',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudDatapipelinesV1StopPipelineRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudDatapipelinesV1PipelineSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentJobsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/jobs',
  tags: ['projects'],
  description:
    'Lists jobs for a given pipeline. Throws a "FORBIDDEN" error if the caller doesn\'t have permission to access it.',
  operationId: 'datapipelines.projects.locations.pipelines.jobs.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
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
            description:
              'The maximum number of entities to return. The service may return fewer than this value, even if there are additional pages. If unspecified, the max limit will be determined by the backend implementation.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A page token, received from a previous `ListJobs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListJobs` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudDatapipelinesV1ListJobsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentPipelinesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/pipelines',
  tags: ['projects'],
  description:
    'Lists pipelines. Returns a "FORBIDDEN" error if the caller doesn\'t have permission to access it.',
  operationId: 'datapipelines.projects.locations.pipelines.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An expression for filtering the results of the request. If unspecified, all pipelines will be returned. Multiple filters can be applied and must be comma separated. Fields eligible for filtering are: + `type`: The type of the pipeline (streaming or batch). Allowed values are `ALL`, `BATCH`, and `STREAMING`. + `status`: The activity status of the pipeline. Allowed values are `ALL`, `ACTIVE`, `ARCHIVED`, and `PAUSED`. For example, to limit results to active batch processing pipelines: type:BATCH,status:ACTIVE',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
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
            description:
              'The maximum number of entities to return. The service may return fewer than this value, even if there are additional pages. If unspecified, the max limit is yet to be determined by the backend implementation.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A page token, received from a previous `ListPipelines` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPipelines` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The location name. For example: `projects/PROJECT_ID/locations/LOCATION_ID`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudDatapipelinesV1ListPipelinesResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentPipelinesRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/pipelines',
  tags: ['projects'],
  description:
    'Creates a pipeline. For a batch pipeline, you can pass scheduler information. Data Pipelines uses the scheduler information to create an internal scheduler that runs jobs periodically. If the internal scheduler is not configured, you can use RunPipeline to run jobs.',
  operationId: 'datapipelines.projects.locations.pipelines.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The location name. For example: `projects/PROJECT_ID/locations/LOCATION_ID`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudDatapipelinesV1PipelineSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudDatapipelinesV1PipelineSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
