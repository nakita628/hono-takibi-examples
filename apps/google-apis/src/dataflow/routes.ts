import { createRoute, z } from '@hono/zod-openapi'

const PositionSchema: z.ZodType<PositionType> = z
  .lazy(() =>
    z
      .object({
        byteOffset: z
          .string()
          .exactOptional()
          .openapi({ description: 'Position is a byte offset.' }),
        concatPosition: ConcatPositionSchema.exactOptional().openapi({
          description: 'CloudPosition is a concat position.',
        }),
        end: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Position is past all other positions. Also useful for the end position of an unbounded range.',
          }),
        key: z
          .string()
          .exactOptional()
          .openapi({ description: 'Position is a string key, ordered lexicographically.' }),
        recordIndex: z
          .string()
          .exactOptional()
          .openapi({ description: 'Position is a record index.' }),
        shufflePosition: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'CloudPosition is a base64 encoded BatchShufflePosition (with FIXED sharding).',
          }),
      })
      .openapi({
        description:
          'Position defines a position within a collection of data. The value can be either the end position, a key (used with ordered collections), a byte offset, or a record index.',
        required: [],
      }),
  )
  .openapi('Position')

type ConcatPositionType = { index?: number; position?: z.infer<typeof PositionSchema> }

const ConcatPositionSchema: z.ZodType<ConcatPositionType> = z
  .lazy(() =>
    z
      .object({
        index: z.int32().exactOptional().openapi({ description: 'Index of the inner source.' }),
        position: PositionSchema.exactOptional().openapi({
          description: 'Position within the inner source.',
        }),
      })
      .openapi({
        description:
          'A position that encapsulates an inner position and an index for the inner position. A ConcatPosition can be used by a reader of a source that encapsulates a set of other sources.',
        required: [],
      }),
  )
  .openapi('ConcatPosition')

type PositionType = {
  byteOffset?: string
  concatPosition?: z.infer<typeof ConcatPositionSchema>
  end?: boolean
  key?: string
  recordIndex?: string
  shufflePosition?: string
}

const CPUTimeSchema = z
  .object({
    rate: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Average CPU utilization rate (% non-idle cpu / second) since previous sample.',
      }),
    timestamp: z.string().exactOptional().openapi({ description: 'Timestamp of the measurement.' }),
    totalMs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Total active CPU time across all cores (ie., non-idle) in milliseconds since start-up.',
      }),
  })
  .openapi({ description: 'Modeled after information exposed by /proc/stat.', required: [] })
  .openapi('CPUTime')

const MemInfoSchema = z
  .object({
    currentLimitBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Instantenous memory limit in bytes.' }),
    currentOoms: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Number of Out of Memory (OOM) events recorded since the previous measurement.',
      }),
    currentRssBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Instantenous memory (RSS) size in bytes.' }),
    timestamp: z.string().exactOptional().openapi({ description: 'Timestamp of the measurement.' }),
    totalGbMs: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total memory (RSS) usage since start up in GB * ms.' }),
  })
  .openapi({
    description: 'Information about the memory usage of a worker or a container within a worker.',
    required: [],
  })
  .openapi('MemInfo')

type ResourceUtilizationReportType = {
  containers?: { [key: string]: ResourceUtilizationReportType }
  cpuTime?: z.infer<typeof CPUTimeSchema>[]
  memoryInfo?: z.infer<typeof MemInfoSchema>[]
}

const ApproximateProgressSchema = z
  .object({
    percentComplete: z.float32().exactOptional().openapi({ description: 'Obsolete.' }),
    position: PositionSchema.exactOptional().openapi({ description: 'Obsolete.' }),
    remainingTime: z.string().exactOptional().openapi({ description: 'Obsolete.' }),
  })
  .openapi({
    description: 'Obsolete in favor of ApproximateReportedProgress and ApproximateSplitRequest.',
    required: [],
  })
  .openapi('ApproximateProgress')

const ReportedParallelismSchema = z
  .object({
    isInfinite: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Specifies whether the parallelism is infinite. If true, "value" is ignored. Infinite parallelism means the service will assume that the work item can always be split into more non-empty work items by dynamic splitting. This is a work-around for lack of support for infinity by the current JSON-based Java RPC stack.',
      }),
    value: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Specifies the level of parallelism in case it is finite.' }),
  })
  .openapi({
    description:
      "Represents the level of parallelism in a WorkItem's input, reported by the worker.",
    required: [],
  })
  .openapi('ReportedParallelism')

const ApproximateReportedProgressSchema = z
  .object({
    consumedParallelism: ReportedParallelismSchema.exactOptional().openapi({
      description:
        'Total amount of parallelism in the portion of input of this task that has already been consumed and is no longer active. In the first two examples above (see remaining_parallelism), the value should be 29 or 2 respectively. The sum of remaining_parallelism and consumed_parallelism should equal the total amount of parallelism in this work item. If specified, must be finite.',
    }),
    fractionConsumed: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Completion as fraction of the input consumed, from 0.0 (beginning, nothing consumed), to 1.0 (end of the input, entire input consumed).',
      }),
    position: PositionSchema.exactOptional().openapi({
      description: 'A Position within the work to represent a progress.',
    }),
    remainingParallelism: ReportedParallelismSchema.exactOptional().openapi({
      description:
        'Total amount of parallelism in the input of this task that remains, (i.e. can be delegated to this task and any new tasks via dynamic splitting). Always at least 1 for non-finished work items and 0 for finished. "Amount of parallelism" refers to how many non-empty parts of the input can be read in parallel. This does not necessarily equal number of records. An input that can be read in parallel down to the individual records is called "perfectly splittable". An example of non-perfectly parallelizable input is a block-compressed file format where a block of records has to be read as a whole, but different blocks can be read in parallel. Examples: * If we are processing record #30 (starting at 1) out of 50 in a perfectly splittable 50-record input, this value should be 21 (20 remaining + 1 current). * If we are reading through block 3 in a block-compressed file consisting of 5 blocks, this value should be 3 (since blocks 4 and 5 can be processed in parallel by new tasks via dynamic splitting and the current task remains processing block 3). * If we are reading through the last block in a block-compressed file, or reading or processing the last record in a perfectly splittable input, this value should be 1, because apart from the current task, no additional remainder can be split off.',
    }),
  })
  .openapi({ description: 'A progress measurement of a WorkItem by a worker.', required: [] })
  .openapi('ApproximateReportedProgress')

const ApproximateSplitRequestSchema = z
  .object({
    fractionConsumed: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'A fraction at which to split the work item, from 0.0 (beginning of the input) to 1.0 (end of the input).',
      }),
    fractionOfRemainder: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The fraction of the remainder of work to split the work item at, from 0.0 (split at the current position) to 1.0 (end of the input).',
      }),
    position: PositionSchema.exactOptional().openapi({
      description: 'A Position at which to split the work item.',
    }),
  })
  .openapi({
    description: 'A suggestion by the service to the worker to dynamically split the WorkItem.',
    required: [],
  })
  .openapi('ApproximateSplitRequest')

const ParameterSchema = z
  .object({
    key: z.string().exactOptional().openapi({ description: 'Key or name for this parameter.' }),
    value: z.any().exactOptional().openapi({ description: 'Value for this parameter.' }),
  })
  .openapi({ description: 'Structured data associated with this message.', required: [] })
  .openapi('Parameter')

const StructuredMessageSchema = z
  .object({
    messageKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier for this message type. Used by external systems to internationalize or personalize message.',
      }),
    messageText: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable version of message.' }),
    parameters: z
      .array(ParameterSchema)
      .exactOptional()
      .openapi({ description: 'The structured data associated with this message.' }),
  })
  .openapi({
    description:
      'A rich message format, including a human readable string, a key for identifying the message, and structured data associated with the message for programmatic consumption.',
    required: [],
  })
  .openapi('StructuredMessage')

const AutoscalingEventSchema = z
  .object({
    currentNumWorkers: z
      .string()
      .exactOptional()
      .openapi({ description: 'The current number of workers the job has.' }),
    description: StructuredMessageSchema.exactOptional().openapi({
      description:
        'A message describing why the system decided to adjust the current number of workers, why it failed, or why the system decided to not make any changes to the number of workers.',
    }),
    eventType: z
      .enum([
        'TYPE_UNKNOWN',
        'TARGET_NUM_WORKERS_CHANGED',
        'CURRENT_NUM_WORKERS_CHANGED',
        'ACTUATION_FAILURE',
        'NO_CHANGE',
      ])
      .exactOptional()
      .openapi({ description: 'The type of autoscaling event to report.' }),
    targetNumWorkers: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The target number of workers the worker pool wants to resize to use.',
      }),
    time: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time this event was emitted to indicate a new target or current num_workers value.',
      }),
    workerPool: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A short and friendly name for the worker pool this event refers to.',
      }),
  })
  .openapi({
    description:
      'A structured message reporting an autoscaling decision made by the Dataflow service.',
    required: [],
  })
  .openapi('AutoscalingEvent')

const AutoscalingSettingsSchema = z
  .object({
    algorithm: z
      .enum([
        'AUTOSCALING_ALGORITHM_UNKNOWN',
        'AUTOSCALING_ALGORITHM_NONE',
        'AUTOSCALING_ALGORITHM_BASIC',
      ])
      .exactOptional()
      .openapi({ description: 'The algorithm to use for autoscaling.' }),
    maxNumWorkers: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The maximum number of workers to cap scaling at.' }),
  })
  .openapi({ description: 'Settings for WorkerPool autoscaling.', required: [] })
  .openapi('AutoscalingSettings')

const BigQueryIODetailsSchema = z
  .object({
    dataset: z
      .string()
      .exactOptional()
      .openapi({ description: 'Dataset accessed in the connection.' }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Project accessed in the connection.' }),
    query: z
      .string()
      .exactOptional()
      .openapi({ description: 'Query used to access data in the connection.' }),
    table: z.string().exactOptional().openapi({ description: 'Table accessed in the connection.' }),
  })
  .openapi({ description: 'Metadata for a BigQuery connector used by the job.', required: [] })
  .openapi('BigQueryIODetails')

const BigTableIODetailsSchema = z
  .object({
    instanceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'InstanceId accessed in the connection.' }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ProjectId accessed in the connection.' }),
    tableId: z
      .string()
      .exactOptional()
      .openapi({ description: 'TableId accessed in the connection.' }),
  })
  .openapi({
    description: 'Metadata for a Cloud Bigtable connector used by the job.',
    required: [],
  })
  .openapi('BigTableIODetails')

const ComponentSourceSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Dataflow service generated name for this source.' }),
    originalTransformOrCollection: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User name for the original user transform or collection with which this source is most closely associated.',
      }),
    userName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Human-readable name for this transform; may be user or system generated.',
      }),
  })
  .openapi({
    description: 'Description of an interstitial value between transforms in an execution stage.',
    required: [],
  })
  .openapi('ComponentSource')

const ComponentTransformSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Dataflow service generated name for this source.' }),
    originalTransform: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User name for the original user transform with which this transform is most closely associated.',
      }),
    userName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Human-readable name for this transform; may be user or system generated.',
      }),
  })
  .openapi({
    description: 'Description of a transform executed as part of an execution stage.',
    required: [],
  })
  .openapi('ComponentTransform')

const CustomSourceLocationSchema = z
  .object({
    stateful: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this source is stateful.' }),
  })
  .openapi({ description: 'Identifies the location of a custom souce.', required: [] })
  .openapi('CustomSourceLocation')

const PubsubLocationSchema = z
  .object({
    dropLateData: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the pipeline allows late-arriving data.' }),
    idLabel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If set, contains a pubsub label from which to extract record ids. If left empty, record deduplication will be strictly best effort.',
      }),
    subscription: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A pubsub subscription, in the form of "pubsub.googleapis.com/subscriptions//"',
      }),
    timestampLabel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If set, contains a pubsub label from which to extract record timestamps. If left empty, record timestamps will be generated upon arrival.',
      }),
    topic: z
      .string()
      .exactOptional()
      .openapi({ description: 'A pubsub topic, in the form of "pubsub.googleapis.com/topics//"' }),
    trackingSubscription: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If set, specifies the pubsub subscription that will be used for tracking custom time timestamps for watermark estimation.',
      }),
    withAttributes: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, then the client has requested to get pubsub attributes.' }),
  })
  .openapi({
    description:
      'Identifies a pubsub location to use for transferring data into or out of a streaming Dataflow job.',
    required: [],
  })
  .openapi('PubsubLocation')

const StreamingSideInputLocationSchema = z
  .object({
    stateFamily: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifies the state family where this side input is stored.' }),
    tag: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Identifies the particular side input within the streaming Dataflow job.',
      }),
  })
  .openapi({ description: 'Identifies the location of a streaming side input.', required: [] })
  .openapi('StreamingSideInputLocation')

const StreamingStageLocationSchema = z
  .object({
    streamId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Identifies the particular stream within the streaming Dataflow job.',
      }),
  })
  .openapi({
    description:
      'Identifies the location of a streaming computation stage, for stage-to-stage communication.',
    required: [],
  })
  .openapi('StreamingStageLocation')

const StreamLocationSchema = z
  .object({
    customSourceLocation: CustomSourceLocationSchema.exactOptional().openapi({
      description: 'The stream is a custom source.',
    }),
    pubsubLocation: PubsubLocationSchema.exactOptional().openapi({
      description: 'The stream is a pubsub stream.',
    }),
    sideInputLocation: StreamingSideInputLocationSchema.exactOptional().openapi({
      description: 'The stream is a streaming side input.',
    }),
    streamingStageLocation: StreamingStageLocationSchema.exactOptional().openapi({
      description:
        'The stream is part of another computation within the current streaming Dataflow job.',
    }),
  })
  .openapi({
    description:
      'Describes a stream of data, either as input to be processed or as output of a streaming Dataflow job.',
    required: [],
  })
  .openapi('StreamLocation')

const KeyRangeLocationSchema = z
  .object({
    dataDisk: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the data disk where data for this range is stored. This name is local to the Google Cloud Platform project and uniquely identifies the disk within that project, for example "myproject-1014-104817-4c2-harness-0-disk-1".',
      }),
    deliveryEndpoint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The physical location of this range assignment to be used for streaming computation cross-worker message delivery.',
      }),
    deprecatedPersistentDirectory: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'DEPRECATED. The location of the persistent state for this range, as a persistent directory in the worker local filesystem.',
      }),
    end: z
      .string()
      .exactOptional()
      .openapi({ description: 'The end (exclusive) of the key range.' }),
    start: z
      .string()
      .exactOptional()
      .openapi({ description: 'The start (inclusive) of the key range.' }),
  })
  .openapi({
    description:
      'Location information for a specific key-range of a sharded computation. Currently we only support UTF-8 character splits to simplify encoding into JSON.',
    required: [],
  })
  .openapi('KeyRangeLocation')

const StateFamilyConfigSchema = z
  .object({
    isRead: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, this family corresponds to a read operation.' }),
    stateFamily: z.string().exactOptional().openapi({ description: 'The state family value.' }),
  })
  .openapi({ description: 'State family configuration.', required: [] })
  .openapi('StateFamilyConfig')

const ComputationTopologySchema = z
  .object({
    computationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the computation.' }),
    inputs: z
      .array(StreamLocationSchema)
      .exactOptional()
      .openapi({ description: 'The inputs to the computation.' }),
    keyRanges: z
      .array(KeyRangeLocationSchema)
      .exactOptional()
      .openapi({ description: 'The key ranges processed by the computation.' }),
    outputs: z
      .array(StreamLocationSchema)
      .exactOptional()
      .openapi({ description: 'The outputs from the computation.' }),
    stateFamilies: z
      .array(StateFamilyConfigSchema)
      .exactOptional()
      .openapi({ description: 'The state family values.' }),
    systemStageName: z.string().exactOptional().openapi({ description: 'The system stage name.' }),
  })
  .openapi({ description: 'All configuration data for a particular Computation.', required: [] })
  .openapi('ComputationTopology')

const FlexTemplateRuntimeEnvironmentSchema = z
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
          'Additional user labels to be specified for the job. Keys and values must follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) page. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1kg", "count": "3" }.',
      }),
    autoscalingAlgorithm: z
      .enum([
        'AUTOSCALING_ALGORITHM_UNKNOWN',
        'AUTOSCALING_ALGORITHM_NONE',
        'AUTOSCALING_ALGORITHM_BASIC',
      ])
      .exactOptional()
      .openapi({ description: 'The algorithm to use for autoscaling' }),
    diskSizeGb: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Worker disk size, in gigabytes.' }),
    dumpHeapOnOom: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, when processing time is spent almost entirely on garbage collection (GC), saves a heap dump before ending the thread or process. If false, ends the thread or process without saving a heap dump. Does not save a heap dump when the Java Virtual Machine (JVM) has an out of memory error during processing. The location of the heap file is either echoed back to the user, or the user is given the opportunity to download the heap file.',
      }),
    enableLauncherVmSerialPortLogging: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true serial port logging will be enabled for the launcher VM.' }),
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
    launcherMachineType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The machine type to use for launching the job. The default is n1-standard-1.',
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
          'The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.',
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
      .openapi({
        description: 'The initial number of Google Compute Engine instances for the job.',
      }),
    saveHeapDumpsToGcsPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Cloud Storage bucket (directory) to upload heap dumps to. Enabling this field implies that `dump_heap_on_oom` is set to true.',
      }),
    sdkContainerImage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Docker registry location of container image to use for the 'worker harness. Default is the container for the version of the SDK. Note this field is only valid for portable pipelines.",
      }),
    serviceAccountEmail: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email address of the service account to run the job as.' }),
    stagingLocation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Cloud Storage path for staging local files. Must be a valid Cloud Storage URL, beginning with `gs://`.',
      }),
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
  .openapi({
    description: 'The environment values to be set at runtime for flex template.',
    required: [],
  })
  .openapi('FlexTemplateRuntimeEnvironment')

const ParameterMetadataSchema = z
  .object({
    customMetadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Optional. Additional metadata for describing this parameter.' }),
    groupName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Specifies a group name for this parameter to be rendered under. Group header text will be rendered exactly as specified in this field. Only considered when parent_name is NOT provided.',
      }),
    helpText: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The help text to display for the parameter.' }),
    isOptional: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Optional. Whether the parameter is optional. Defaults to false.' }),
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The label to display for the parameter.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The name of the parameter.' }),
    paramType: z
      .enum([
        'DEFAULT',
        'TEXT',
        'GCS_READ_BUCKET',
        'GCS_WRITE_BUCKET',
        'GCS_READ_FILE',
        'GCS_WRITE_FILE',
        'GCS_READ_FOLDER',
        'GCS_WRITE_FOLDER',
        'PUBSUB_TOPIC',
        'PUBSUB_SUBSCRIPTION',
        'BIGQUERY_TABLE',
        'JAVASCRIPT_UDF_FILE',
      ])
      .exactOptional()
      .openapi({
        description: 'Optional. The type of the parameter. Used for selecting input picker.',
      }),
    parentName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. Specifies the name of the parent parameter. Used in conjunction with 'parent_trigger_values' to make this parameter conditional (will only be rendered conditionally). Should be mappable to a ParameterMetadata.name field.",
      }),
    parentTriggerValues: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Optional. The value(s) of the 'parent_name' parameter which will trigger this parameter to be shown. If left empty, ANY non-empty value in parent_name will trigger this parameter to be shown. Only considered when this parameter is conditional (when 'parent_name' has been provided).",
      }),
    regexes: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Optional. Regexes that the parameter must match.' }),
  })
  .openapi({ description: 'Metadata for a specific parameter.', required: [] })
  .openapi('ParameterMetadata')

const TemplateMetadataSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. A description of the template.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The name of the template.' }),
    parameters: z
      .array(ParameterMetadataSchema)
      .exactOptional()
      .openapi({ description: 'The parameters for the template.' }),
  })
  .openapi({ description: 'Metadata describing a template.', required: [] })
  .openapi('TemplateMetadata')

const SDKInfoSchema = z
  .object({
    language: z
      .enum(['UNKNOWN', 'JAVA', 'PYTHON', 'GO'])
      .exactOptional()
      .openapi({ description: 'Required. The SDK Language.' }),
    version: z.string().exactOptional().openapi({ description: 'Optional. The SDK version.' }),
  })
  .openapi({ description: 'SDK Information.', required: [] })
  .openapi('SDKInfo')

const ContainerSpecSchema = z
  .object({
    defaultEnvironment: FlexTemplateRuntimeEnvironmentSchema.exactOptional().openapi({
      description: 'Default runtime environment for the job.',
    }),
    image: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of the docker container image. E.g., gcr.io/project/some-image',
      }),
    imageRepositoryCertPath: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Cloud Storage path to self-signed certificate of private registry.',
      }),
    imageRepositoryPasswordSecretId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Secret Manager secret id for password to authenticate to private registry.',
      }),
    imageRepositoryUsernameSecretId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Secret Manager secret id for username to authenticate to private registry.',
      }),
    metadata: TemplateMetadataSchema.exactOptional().openapi({
      description: 'Metadata describing a template including description and validation rules.',
    }),
    sdkInfo: SDKInfoSchema.exactOptional().openapi({
      description: 'Required. SDK info of the Flex Template.',
    }),
  })
  .openapi({ description: 'Container Spec.', required: [] })
  .openapi('ContainerSpec')

const CounterMetadataSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable description of the counter semantics.' }),
    kind: z
      .enum([
        'INVALID',
        'SUM',
        'MAX',
        'MIN',
        'MEAN',
        'OR',
        'AND',
        'SET',
        'DISTRIBUTION',
        'LATEST_VALUE',
      ])
      .exactOptional()
      .openapi({ description: 'Counter aggregation kind.' }),
    otherUnits: z
      .string()
      .exactOptional()
      .openapi({ description: 'A string referring to the unit type.' }),
    standardUnits: z
      .enum([
        'BYTES',
        'BYTES_PER_SEC',
        'MILLISECONDS',
        'MICROSECONDS',
        'NANOSECONDS',
        'TIMESTAMP_MSEC',
        'TIMESTAMP_USEC',
        'TIMESTAMP_NSEC',
      ])
      .exactOptional()
      .openapi({ description: 'System defined Units, see above enum.' }),
  })
  .openapi({
    description: 'CounterMetadata includes all static non-name non-value counter attributes.',
    required: [],
  })
  .openapi('CounterMetadata')

const CounterStructuredNameSchema = z
  .object({
    componentStepName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the optimized step being executed by the workers.' }),
    executionStepName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of the stage. An execution step contains multiple component steps.',
      }),
    inputIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Index of an input collection that's being read from/written to as a side input. The index identifies a step's side inputs starting by 1 (e.g. the first side input has input_index 1, the third has input_index 3). Side inputs are identified by a pair of (original_step_name, input_index). This field helps uniquely identify them.",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Counter name. Not necessarily globally-unique, but unique within the context of the other fields. Required.',
      }),
    origin: z
      .enum(['SYSTEM', 'USER'])
      .exactOptional()
      .openapi({ description: 'One of the standard Origins defined above.' }),
    originNamespace: z
      .string()
      .exactOptional()
      .openapi({
        description: "A string containing a more specific namespace of the counter's origin.",
      }),
    originalRequestingStepName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The step name requesting an operation, such as GBK. I.e. the ParDo causing a read/write from shuffle to occur, or a read from side inputs.',
      }),
    originalStepName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "System generated name of the original step in the user's graph, before optimization.",
      }),
    portion: z
      .enum(['ALL', 'KEY', 'VALUE'])
      .exactOptional()
      .openapi({ description: 'Portion of this counter, either key or value.' }),
    workerId: z.string().exactOptional().openapi({ description: 'ID of a particular worker.' }),
  })
  .openapi({
    description:
      'Identifies a counter within a per-job namespace. Counters whose structured names are the same get merged into a single value for the job.',
    required: [],
  })
  .openapi('CounterStructuredName')

const CounterStructuredNameAndMetadataSchema = z
  .object({
    metadata: CounterMetadataSchema.exactOptional().openapi({
      description: 'Metadata associated with a counter',
    }),
    name: CounterStructuredNameSchema.exactOptional().openapi({
      description: 'Structured name of the counter.',
    }),
  })
  .openapi({
    description:
      'A single message which encapsulates structured name and metadata for a given counter.',
    required: [],
  })
  .openapi('CounterStructuredNameAndMetadata')

const SplitInt64Schema = z
  .object({
    highBits: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The high order bits, including the sign: n >> 32.' }),
    lowBits: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'The low order bits: n & 0xffffffff.' }),
  })
  .openapi({
    description:
      'A representation of an int64, n, that is immune to precision loss when encoded in JSON.',
    required: [],
  })
  .openapi('SplitInt64')

const HistogramSchema = z
  .object({
    bucketCounts: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Counts of values in each bucket. For efficiency, prefix and trailing buckets with count = 0 are elided. Buckets can store the full range of values of an unsigned long, with ULLONG_MAX falling into the 59th bucket with range [1e19, 2e19).',
      }),
    firstBucketOffset: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Starting index of first stored bucket. The non-inclusive upper-bound of the ith bucket is given by: pow(10,(i-first_bucket_offset)/3) * (1,2,5)[(i-first_bucket_offset)%3]',
      }),
  })
  .openapi({
    description:
      'Histogram of value counts for a distribution. Buckets have an inclusive lower bound and exclusive upper bound and use "1,2,5 bucketing": The first bucket range is from [0,1) and all subsequent bucket boundaries are powers of ten multiplied by 1, 2, or 5. Thus, bucket boundaries are 0, 1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, ... Negative values are not supported.',
    required: [],
  })
  .openapi('Histogram')

const DistributionUpdateSchema = z
  .object({
    count: SplitInt64Schema.exactOptional().openapi({
      description: 'The count of the number of elements present in the distribution.',
    }),
    histogram: HistogramSchema.exactOptional().openapi({
      description: '(Optional) Histogram of value counts for the distribution.',
    }),
    max: SplitInt64Schema.exactOptional().openapi({
      description: 'The maximum value present in the distribution.',
    }),
    min: SplitInt64Schema.exactOptional().openapi({
      description: 'The minimum value present in the distribution.',
    }),
    sum: SplitInt64Schema.exactOptional().openapi({
      description:
        "Use an int64 since we'd prefer the added precision. If overflow is a common problem we can detect it and use an additional int64 or a double.",
    }),
    sumOfSquares: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Use a double since the sum of squares is likely to overflow int64.',
      }),
  })
  .openapi({ description: 'A metric value representing a distribution.', required: [] })
  .openapi('DistributionUpdate')

const FloatingPointListSchema = z
  .object({
    elements: z
      .array(z.float64())
      .exactOptional()
      .openapi({ description: 'Elements of the list.' }),
  })
  .openapi({
    description: 'A metric value representing a list of floating point numbers.',
    required: [],
  })
  .openapi('FloatingPointList')

const FloatingPointMeanSchema = z
  .object({
    count: SplitInt64Schema.exactOptional().openapi({
      description: 'The number of values being aggregated.',
    }),
    sum: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The sum of all values being aggregated.' }),
  })
  .openapi({
    description: 'A representation of a floating point mean metric contribution.',
    required: [],
  })
  .openapi('FloatingPointMean')

const IntegerGaugeSchema = z
  .object({
    timestamp: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The time at which this value was measured. Measured as msecs from epoch.',
      }),
    value: SplitInt64Schema.exactOptional().openapi({
      description: 'The value of the variable represented by this gauge.',
    }),
  })
  .openapi({
    description: 'A metric value representing temporal values of a variable.',
    required: [],
  })
  .openapi('IntegerGauge')

const IntegerListSchema = z
  .object({
    elements: z
      .array(SplitInt64Schema)
      .exactOptional()
      .openapi({ description: 'Elements of the list.' }),
  })
  .openapi({ description: 'A metric value representing a list of integers.', required: [] })
  .openapi('IntegerList')

const IntegerMeanSchema = z
  .object({
    count: SplitInt64Schema.exactOptional().openapi({
      description: 'The number of values being aggregated.',
    }),
    sum: SplitInt64Schema.exactOptional().openapi({
      description: 'The sum of all values being aggregated.',
    }),
  })
  .openapi({
    description: 'A representation of an integer mean metric contribution.',
    required: [],
  })
  .openapi('IntegerMean')

const NameAndKindSchema = z
  .object({
    kind: z
      .enum([
        'INVALID',
        'SUM',
        'MAX',
        'MIN',
        'MEAN',
        'OR',
        'AND',
        'SET',
        'DISTRIBUTION',
        'LATEST_VALUE',
      ])
      .exactOptional()
      .openapi({ description: 'Counter aggregation kind.' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the counter.' }),
  })
  .openapi({ description: 'Basic metadata about a counter.', required: [] })
  .openapi('NameAndKind')

const StringListSchema = z
  .object({
    elements: z.array(z.string()).exactOptional().openapi({ description: 'Elements of the list.' }),
  })
  .openapi({ description: 'A metric value representing a list of strings.', required: [] })
  .openapi('StringList')

const CounterUpdateSchema = z
  .object({
    boolean: z.boolean().exactOptional().openapi({ description: 'Boolean value for And, Or.' }),
    cumulative: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if this counter is reported as the total cumulative aggregate value accumulated since the worker started working on this WorkItem. By default this is false, indicating that this counter is reported as a delta.',
      }),
    distribution: DistributionUpdateSchema.exactOptional().openapi({
      description: 'Distribution data',
    }),
    floatingPoint: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Floating point value for Sum, Max, Min.' }),
    floatingPointList: FloatingPointListSchema.exactOptional().openapi({
      description: 'List of floating point numbers, for Set.',
    }),
    floatingPointMean: FloatingPointMeanSchema.exactOptional().openapi({
      description: 'Floating point mean aggregation value for Mean.',
    }),
    integer: SplitInt64Schema.exactOptional().openapi({
      description: 'Integer value for Sum, Max, Min.',
    }),
    integerGauge: IntegerGaugeSchema.exactOptional().openapi({ description: 'Gauge data' }),
    integerList: IntegerListSchema.exactOptional().openapi({
      description: 'List of integers, for Set.',
    }),
    integerMean: IntegerMeanSchema.exactOptional().openapi({
      description: 'Integer mean aggregation value for Mean.',
    }),
    internal: z
      .any()
      .exactOptional()
      .openapi({
        description: 'Value for internally-defined counters used by the Dataflow service.',
      }),
    nameAndKind: NameAndKindSchema.exactOptional().openapi({
      description: 'Counter name and aggregation type.',
    }),
    shortId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The service-generated short identifier for this counter. The short_id -> (name, metadata) mapping is constant for the lifetime of a job.',
      }),
    stringList: StringListSchema.exactOptional().openapi({
      description: 'List of strings, for Set.',
    }),
    structuredNameAndMetadata: CounterStructuredNameAndMetadataSchema.exactOptional().openapi({
      description: 'Counter structured name and metadata.',
    }),
  })
  .openapi({ description: 'An update to a Counter sent from a worker.', required: [] })
  .openapi('CounterUpdate')

const RuntimeEnvironmentSchema = z
  .object({
    additionalExperiments: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Additional experiment flags for the job, specified with the `--experiments` option.',
      }),
    additionalUserLabels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Additional user labels to be specified for the job. Keys and values should follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) page. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1kg", "count": "3" }.',
      }),
    bypassTempDirValidation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Optional. Whether to bypass the safety checks for the job's temporary directory. Use with caution.",
      }),
    enableStreamingEngine: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Optional. Whether to enable Streaming Engine for the job.' }),
    ipConfiguration: z
      .enum(['WORKER_IP_UNSPECIFIED', 'WORKER_IP_PUBLIC', 'WORKER_IP_PRIVATE'])
      .exactOptional()
      .openapi({ description: 'Optional. Configuration for VM IPs.' }),
    kmsKeyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Name for the Cloud KMS key for the job. Key format is: projects//locations//keyRings//cryptoKeys/',
      }),
    machineType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The machine type to use for the job. Defaults to the value from the template if not specified.',
      }),
    maxWorkers: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. The default value is 1.',
      }),
    network: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default".',
      }),
    numWorkers: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. The initial number of Google Compute Engine instances for the job. The default value is 11.',
      }),
    serviceAccountEmail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional. The email address of the service account to run the job as.',
      }),
    subnetwork: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Subnetwork to which VMs will be assigned, if desired. You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL.',
      }),
    tempLocation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with `gs://`.',
      }),
    workerRegion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with worker_zone. If neither worker_region nor worker_zone is specified, default to the control plane\'s region.',
      }),
    workerZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with worker_region. If neither worker_region nor worker_zone is specified, a zone in the control plane\'s region is chosen based on available capacity. If both `worker_zone` and `zone` are set, `worker_zone` takes precedence.',
      }),
    zone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The Compute Engine [availability zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones) for launching worker instances to run your pipeline. In the future, worker_zone will take precedence.',
      }),
  })
  .openapi({ description: 'The environment values to set at runtime.', required: [] })
  .openapi('RuntimeEnvironment')

const CreateJobFromTemplateRequestSchema = z
  .object({
    environment: RuntimeEnvironmentSchema.exactOptional().openapi({
      description: 'The runtime environment for the job.',
    }),
    gcsPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A Cloud Storage path to the template from which to create the job. Must be a valid Cloud Storage URL, beginning with `gs://`.',
      }),
    jobName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The job name to use for the created job.' }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.',
      }),
    parameters: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'The runtime parameters to pass to the job.' }),
  })
  .openapi({
    description: 'A request to create a Cloud Dataflow job from a template.',
    required: [],
  })
  .openapi('CreateJobFromTemplateRequest')

const DataDiskAssignmentSchema = z
  .object({
    dataDisks: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Mounted data disks. The order is important a data disk\'s 0-based index in this list defines which persistent directory the disk is mounted to, for example the list of { "myproject-1014-104817-4c2-harness-0-disk-0" }, { "myproject-1014-104817-4c2-harness-0-disk-1" }.',
      }),
    vmInstance: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'VM instance name the data disks mounted to, for example "myproject-1014-104817-4c2-harness-0".',
      }),
  })
  .openapi({ description: 'Data disk assignment for a given VM instance.', required: [] })
  .openapi('DataDiskAssignment')

const DatastoreIODetailsSchema = z
  .object({
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'Namespace used in the connection.' }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ProjectId accessed in the connection.' }),
  })
  .openapi({ description: 'Metadata for a Datastore connector used by the job.', required: [] })
  .openapi('DatastoreIODetails')

const DebugOptionsSchema = z
  .object({
    enableHotKeyLogging: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "When true, enables the logging of the literal hot key to the user's Cloud Logging.",
      }),
  })
  .openapi({
    description: 'Describes any options that have an effect on the debugging of pipelines.',
    required: [],
  })
  .openapi('DebugOptions')

const DeleteSnapshotResponseSchema = z
  .object({})
  .openapi({ description: 'Response from deleting a snapshot.' })
  .openapi('DeleteSnapshotResponse')

const SourceMetadataSchema = z
  .object({
    estimatedSizeBytes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An estimate of the total size (in bytes) of the data that would be read from this source. This estimate is in terms of external storage size, before any decompression or other processing done by the reader.',
      }),
    infinite: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Specifies that the size of this source is known to be infinite (this is a streaming source).',
      }),
    producesSortedKeys: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this source is known to produce key/value pairs with the (encoded) keys in lexicographically sorted order.',
      }),
  })
  .openapi({
    description:
      'Metadata about a Source useful for automatically optimizing and tuning the pipeline, etc.',
    required: [],
  })
  .openapi('SourceMetadata')

const SourceSchema = z
  .object({
    baseSpecs: z
      .array(z.record(z.string(), z.any().openapi({ description: 'Properties of the object.' })))
      .exactOptional()
      .openapi({
        description:
          'While splitting, sources may specify the produced bundles as differences against another source, in order to save backend-side memory and allow bigger jobs. For details, see SourceSplitRequest. To support this use case, the full set of parameters of the source is logically obtained by taking the latest explicitly specified value of each parameter in the order: base_specs (later items win), spec (overrides anything in base_specs).',
      }),
    codec: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({ description: 'The codec to use to decode data read from the source.' }),
    doesNotNeedSplitting: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Setting this value to true hints to the framework that the source doesn't need splitting, and using SourceSplitRequest on it would yield SOURCE_SPLIT_OUTCOME_USE_CURRENT. E.g. a file splitter may set this to true when splitting a single file into a set of byte ranges of appropriate size, and set this to false when splitting a filepattern into individual files. However, for efficiency, a file splitter may decide to produce file subranges directly from the filepattern to avoid a splitting round-trip. See SourceSplitRequest for an overview of the splitting process. This field is meaningful only in the Source objects populated by the user (e.g. when filling in a DerivedSource). Source objects supplied by the framework to the user don't have this field populated.",
      }),
    metadata: SourceMetadataSchema.exactOptional().openapi({
      description:
        "Optionally, metadata for this source can be supplied right away, avoiding a SourceGetMetadataOperation roundtrip (see SourceOperationRequest). This field is meaningful only in the Source objects populated by the user (e.g. when filling in a DerivedSource). Source objects supplied by the framework to the user don't have this field populated.",
    }),
    spec: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({ description: 'The source to read from, plus its parameters.' }),
  })
  .openapi({ description: 'A source that records can be read and decoded from.', required: [] })
  .openapi('Source')

const DerivedSourceSchema = z
  .object({
    derivationMode: z
      .enum([
        'SOURCE_DERIVATION_MODE_UNKNOWN',
        'SOURCE_DERIVATION_MODE_INDEPENDENT',
        'SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT',
        'SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT',
      ])
      .exactOptional()
      .openapi({ description: 'What source to base the produced source on (if any).' }),
    source: SourceSchema.exactOptional().openapi({ description: 'Specification of the source.' }),
  })
  .openapi({
    description:
      'Specification of one of the bundles produced as a result of splitting a Source (e.g. when executing a SourceSplitRequest, or when splitting an active task using WorkItemStatus.dynamic_source_split), relative to the source being split.',
    required: [],
  })
  .openapi('DerivedSource')

const DiskSchema = z
  .object({
    diskType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Disk storage type, as defined by Google Compute Engine. This must be a disk type appropriate to the project and zone in which the workers will run. If unknown or unspecified, the service will attempt to choose a reasonable default. For example, the standard persistent disk type is a resource name typically ending in "pd-standard". If SSD persistent disks are available, the resource name typically ends with "pd-ssd". The actual valid values are defined the Google Compute Engine API, not by the Cloud Dataflow API; consult the Google Compute Engine documentation for more information about determining the set of available disk types for a particular project and zone. Google Compute Engine Disk types are local to a particular project in a particular zone, and so the resource name will typically look something like this: compute.googleapis.com/projects/project-id/zones/zone/diskTypes/pd-standard',
      }),
    mountPoint: z
      .string()
      .exactOptional()
      .openapi({ description: 'Directory in a VM where disk is mounted.' }),
    sizeGb: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Size of disk in GB. If zero or unspecified, the service will attempt to choose a reasonable default.',
      }),
  })
  .openapi({ description: 'Describes the data disk used by a workflow job.', required: [] })
  .openapi('Disk')

const DisplayDataSchema = z
  .object({
    boolValue: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Contains value if the data is of a boolean type.' }),
    durationValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'Contains value if the data is of duration type.' }),
    floatValue: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Contains value if the data is of float type.' }),
    int64Value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Contains value if the data is of int64 type.' }),
    javaClassValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'Contains value if the data is of java class type.' }),
    key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The key identifying the display data. This is intended to be used as a label for the display data when viewed in a dax monitoring system.',
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'An optional label to display in a dax UI for the element.' }),
    namespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The namespace for the key. This is usually a class name or programming language namespace (i.e. python module) which defines the display data. This allows a dax monitoring system to specially handle the data and perform custom rendering.',
      }),
    shortStrValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A possible additional shorter value to display. For example a java_class_name_value of com.mypackage.MyDoFn will be stored with MyDoFn as the short_str_value and com.mypackage.MyDoFn as the java_class_name value. short_str_value can be displayed and java_class_name_value will be displayed as a tooltip.',
      }),
    strValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'Contains value if the data is of string type.' }),
    timestampValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'Contains value if the data is of timestamp type.' }),
    url: z.string().exactOptional().openapi({ description: 'An optional full URL.' }),
  })
  .openapi({
    description: 'Data provided with a pipeline or transform to provide descriptive info.',
    required: [],
  })
  .openapi('DisplayData')

const DynamicSourceSplitSchema = z
  .object({
    primary: DerivedSourceSchema.exactOptional().openapi({
      description:
        'Primary part (continued to be processed by worker). Specified relative to the previously-current source. Becomes current.',
    }),
    residual: DerivedSourceSchema.exactOptional().openapi({
      description:
        'Residual part (returned to the pool of work). Specified relative to the previously-current source.',
    }),
  })
  .openapi({
    description:
      "When a task splits using WorkItemStatus.dynamic_source_split, this message describes the two parts of the split relative to the description of the current task's input.",
    required: [],
  })
  .openapi('DynamicSourceSplit')

const PackageSchema = z
  .object({
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource to read the package from. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket} bucket.storage.googleapis.com/',
      }),
    name: z.string().exactOptional().openapi({ description: 'The name of the package.' }),
  })
  .openapi({
    description:
      "The packages that must be installed in order for a worker to run the steps of the Cloud Dataflow job that will be assigned to its worker pool. This is the mechanism by which the Cloud Dataflow SDK causes code to be loaded onto the workers. For example, the Cloud Dataflow Java SDK might use this to install jars containing the user's code and all of the various dependencies (libraries, data files, etc.) required in order for that code to run.",
    required: [],
  })
  .openapi('Package')

const SdkHarnessContainerImageSchema = z
  .object({
    capabilities: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The set of capabilities enumerated in the above Environment proto. See also [beam_runner_api.proto](https://github.com/apache/beam/blob/master/model/pipeline/src/main/proto/org/apache/beam/model/pipeline/v1/beam_runner_api.proto)',
      }),
    containerImage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A docker container image that resides in Google Container Registry.',
      }),
    environmentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Environment ID for the Beam runner API proto Environment that corresponds to the current SDK Harness.',
      }),
    useSingleCorePerContainer: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, recommends the Dataflow service to use only one core per SDK container instance with this image. If false (or unset) recommends using more than one core per SDK container instance with this image for efficiency. Note that Dataflow service may choose to override this property if needed.',
      }),
  })
  .openapi({
    description: 'Defines an SDK harness container for executing Dataflow pipelines.',
    required: [],
  })
  .openapi('SdkHarnessContainerImage')

const WorkerSettingsSchema = z
  .object({
    baseUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The base URL for accessing Google Cloud APIs. When workers access Google Cloud APIs, they logically do so via relative URLs. If this field is specified, it supplies the base URL to use for resolving these relative URLs. The normative algorithm used is defined by RFC 1808, "Relative Uniform Resource Locators". If not specified, the default value is "http://www.googleapis.com/"',
      }),
    reportingEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to send work progress updates to the service.' }),
    servicePath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Cloud Dataflow service path relative to the root URL, for example, "dataflow/v1b3/projects".',
      }),
    shuffleServicePath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Shuffle service path relative to the root URL, for example, "shuffle/v1beta1".',
      }),
    tempStoragePrefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The prefix of the resources the system should use for temporary storage. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object}',
      }),
    workerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the worker running this pipeline.' }),
  })
  .openapi({ description: 'Provides data to pass through to the worker harness.', required: [] })
  .openapi('WorkerSettings')

const TaskRunnerSettingsSchema = z
  .object({
    alsologtostderr: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to also send taskrunner log info to stderr.' }),
    baseTaskDir: z
      .string()
      .exactOptional()
      .openapi({ description: 'The location on the worker for task-specific subdirectories.' }),
    baseUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The base URL for the taskrunner to use when accessing Google Cloud APIs. When workers access Google Cloud APIs, they logically do so via relative URLs. If this field is specified, it supplies the base URL to use for resolving these relative URLs. The normative algorithm used is defined by RFC 1808, "Relative Uniform Resource Locators". If not specified, the default value is "http://www.googleapis.com/"',
      }),
    commandlinesFileName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The file to store preprocessing commands in.' }),
    continueOnException: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to continue taskrunner if an exception is hit.' }),
    dataflowApiVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The API version of endpoint, e.g. "v1b3"' }),
    harnessCommand: z
      .string()
      .exactOptional()
      .openapi({ description: 'The command to launch the worker harness.' }),
    languageHint: z
      .string()
      .exactOptional()
      .openapi({ description: 'The suggested backend language.' }),
    logDir: z
      .string()
      .exactOptional()
      .openapi({ description: 'The directory on the VM to store logs.' }),
    logToSerialconsole: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to send taskrunner log info to Google Compute Engine VM serial console.',
      }),
    logUploadLocation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates where to put logs. If this is not specified, the logs will not be uploaded. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object}',
      }),
    oauthScopes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The OAuth2 scopes to be requested by the taskrunner in order to access the Cloud Dataflow API.',
      }),
    parallelWorkerSettings: WorkerSettingsSchema.exactOptional().openapi({
      description: 'The settings to pass to the parallel worker harness.',
    }),
    streamingWorkerMainClass: z
      .string()
      .exactOptional()
      .openapi({ description: 'The streaming worker main class name.' }),
    taskGroup: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The UNIX group ID on the worker VM to use for tasks launched by taskrunner; e.g. "wheel".',
      }),
    taskUser: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The UNIX user ID on the worker VM to use for tasks launched by taskrunner; e.g. "root".',
      }),
    tempStoragePrefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The prefix of the resources the taskrunner should use for temporary storage. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object}',
      }),
    vmId: z.string().exactOptional().openapi({ description: 'The ID string of the VM.' }),
    workflowFileName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The file to store the workflow in.' }),
  })
  .openapi({ description: 'Taskrunner configuration settings.', required: [] })
  .openapi('TaskRunnerSettings')

const WorkerPoolSchema = z
  .object({
    autoscalingSettings: AutoscalingSettingsSchema.exactOptional().openapi({
      description: 'Settings for autoscaling of this WorkerPool.',
    }),
    dataDisks: z
      .array(DiskSchema)
      .exactOptional()
      .openapi({ description: 'Data disks that are used by a VM in this workflow.' }),
    defaultPackageSet: z
      .enum([
        'DEFAULT_PACKAGE_SET_UNKNOWN',
        'DEFAULT_PACKAGE_SET_NONE',
        'DEFAULT_PACKAGE_SET_JAVA',
        'DEFAULT_PACKAGE_SET_PYTHON',
      ])
      .exactOptional()
      .openapi({
        description:
          'The default package set to install. This allows the service to select a default set of packages which are useful to worker harnesses written in a particular language.',
      }),
    diskSizeGb: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Size of root disk for VMs, in GB. If zero or unspecified, the service will attempt to choose a reasonable default.',
      }),
    diskSourceImage: z
      .string()
      .exactOptional()
      .openapi({ description: 'Fully qualified source image for disks.' }),
    diskType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Type of root disk for VMs. If empty or unspecified, the service will attempt to choose a reasonable default.',
      }),
    ipConfiguration: z
      .enum(['WORKER_IP_UNSPECIFIED', 'WORKER_IP_PUBLIC', 'WORKER_IP_PRIVATE'])
      .exactOptional()
      .openapi({ description: 'Configuration for VM IPs.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The kind of the worker pool; currently only `harness` and `shuffle` are supported.',
      }),
    machineType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Machine type (e.g. "n1-standard-1"). If empty or unspecified, the service will attempt to choose a reasonable default.',
      }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Metadata to set on the Google Compute Engine VMs.' }),
    network: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default".',
      }),
    numThreadsPerWorker: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of threads per worker harness. If empty or unspecified, the service will choose a number of threads (according to the number of cores on the selected machine type for batch, or 1 by convention for streaming).',
      }),
    numWorkers: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of Google Compute Engine workers in this pool needed to execute the job. If zero or unspecified, the service will attempt to choose a reasonable default.',
      }),
    onHostMaintenance: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The action to take on host maintenance, as defined by the Google Compute Engine API.',
      }),
    packages: z
      .array(PackageSchema)
      .exactOptional()
      .openapi({ description: 'Packages to be installed on workers.' }),
    poolArgs: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({ description: 'Extra arguments for this worker pool.' }),
    sdkHarnessContainerImages: z
      .array(SdkHarnessContainerImageSchema)
      .exactOptional()
      .openapi({
        description:
          'Set of SDK harness containers needed to execute this pipeline. This will only be set in the Fn API path. For non-cross-language pipelines this should have only one entry. Cross-language pipelines will have two or more entries.',
      }),
    subnetwork: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Subnetwork to which VMs will be assigned, if desired. Expected to be of the form "regions/REGION/subnetworks/SUBNETWORK".',
      }),
    taskrunnerSettings: TaskRunnerSettingsSchema.exactOptional().openapi({
      description:
        'Settings passed through to Google Compute Engine workers when using the standard Dataflow task runner. Users should ignore this field.',
    }),
    teardownPolicy: z
      .enum(['TEARDOWN_POLICY_UNKNOWN', 'TEARDOWN_ALWAYS', 'TEARDOWN_ON_SUCCESS', 'TEARDOWN_NEVER'])
      .exactOptional()
      .openapi({
        description:
          "Sets the policy for determining when to turndown worker pool. Allowed values are: `TEARDOWN_ALWAYS`, `TEARDOWN_ON_SUCCESS`, and `TEARDOWN_NEVER`. `TEARDOWN_ALWAYS` means workers are always torn down regardless of whether the job succeeds. `TEARDOWN_ON_SUCCESS` means workers are torn down if the job succeeds. `TEARDOWN_NEVER` means the workers are never torn down. If the workers are not torn down by the service, they will continue to run and use Google Compute Engine VM resources in the user's project until they are explicitly terminated by the user. Because of this, Google recommends using the `TEARDOWN_ALWAYS` policy except for small, manually supervised test jobs. If unknown or unspecified, the service will attempt to choose a reasonable default.",
      }),
    workerHarnessContainerImage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Docker container image that executes the Cloud Dataflow worker harness, residing in Google Container Registry. Deprecated for the Fn API path. Use sdk_harness_container_images instead.',
      }),
    zone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Zone to run the worker pools in. If empty or unspecified, the service will attempt to choose a reasonable default.',
      }),
  })
  .openapi({
    description:
      'Describes one particular pool of Cloud Dataflow workers to be instantiated by the Cloud Dataflow service in order to perform the computations required by a job. Note that a workflow job may use multiple pools, in order to match the various computational requirements of the various stages of the job.',
    required: [],
  })
  .openapi('WorkerPool')

const EnvironmentSchema = z
  .object({
    clusterManagerApiService: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of cluster manager API to use. If unknown or unspecified, the service will attempt to choose a reasonable default. This should be in the form of the API service name, e.g. "compute.googleapis.com".',
      }),
    dataset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The dataset for the current project where various workflow related tables are stored. The supported resource type is: Google BigQuery: bigquery.googleapis.com/{dataset}',
      }),
    debugOptions: DebugOptionsSchema.exactOptional().openapi({
      description: 'Any debugging options to be supplied to the job.',
    }),
    experiments: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of experiments to enable. This field should be used for SDK related experiments and not for service related experiments. The proper field for service related experiments is service_options.',
      }),
    flexResourceSchedulingGoal: z
      .enum(['FLEXRS_UNSPECIFIED', 'FLEXRS_SPEED_OPTIMIZED', 'FLEXRS_COST_OPTIMIZED'])
      .exactOptional()
      .openapi({ description: 'Which Flexible Resource Scheduling mode to run in.' }),
    internalExperiments: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({ description: 'Experimental settings.' }),
    sdkPipelineOptions: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({
        description:
          'The Cloud Dataflow SDK pipeline options specified by the user. These options are passed through the service and are used to recreate the SDK pipeline options on the worker in a language agnostic and platform independent way.',
      }),
    serviceAccountEmail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Identity to run virtual machines as. Defaults to the default account.',
      }),
    serviceKmsKeyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If set, contains the Cloud KMS key identifier used to encrypt data at rest, AKA a Customer Managed Encryption Key (CMEK). Format: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY',
      }),
    serviceOptions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of service options to enable. This field should be used for service related experiments only. These experiments, when graduating to GA, should be replaced by dedicated fields or become default (i.e. always on).',
      }),
    shuffleMode: z
      .enum(['SHUFFLE_MODE_UNSPECIFIED', 'VM_BASED', 'SERVICE_BASED'])
      .exactOptional()
      .openapi({ description: 'Output only. The shuffle mode used for the job.', readOnly: true }),
    tempStoragePrefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The prefix of the resources the system should use for temporary storage. The system will append the suffix "/temp-{JOBNAME} to this resource prefix, where {JOBNAME} is the value of the job_name field. The resulting bucket and object prefix is used as the prefix of the resources used to store temporary data needed during the job execution. NOTE: This will override the value in taskrunner_settings. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object}',
      }),
    userAgent: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({ description: 'A description of the process that generated the request.' }),
    version: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({
        description:
          'A structure describing which components and their versions of the service are required in order to run the job.',
      }),
    workerPools: z
      .array(WorkerPoolSchema)
      .exactOptional()
      .openapi({
        description:
          'The worker pools. At least one "harness" worker pool must be specified in order for the job to have workers.',
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
          'The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with worker_region. If neither worker_region nor worker_zone is specified, a zone in the control plane\'s region is chosen based on available capacity.',
      }),
  })
  .openapi({ description: 'Describes the environment in which a Dataflow Job runs.', required: [] })
  .openapi('Environment')

const ExecutionStageStateSchema = z
  .object({
    currentStateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time at which the stage transitioned to this state.' }),
    executionStageName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the execution stage.' }),
    executionStageState: z
      .enum([
        'JOB_STATE_UNKNOWN',
        'JOB_STATE_STOPPED',
        'JOB_STATE_RUNNING',
        'JOB_STATE_DONE',
        'JOB_STATE_FAILED',
        'JOB_STATE_CANCELLED',
        'JOB_STATE_UPDATED',
        'JOB_STATE_DRAINING',
        'JOB_STATE_DRAINED',
        'JOB_STATE_PENDING',
        'JOB_STATE_CANCELLING',
        'JOB_STATE_QUEUED',
        'JOB_STATE_RESOURCE_CLEANING_UP',
      ])
      .exactOptional()
      .openapi({
        description: 'Executions stage states allow the same set of values as JobState.',
      }),
  })
  .openapi({
    description: 'A message describing the state of a particular execution stage.',
    required: [],
  })
  .openapi('ExecutionStageState')

const StageSourceSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Dataflow service generated name for this source.' }),
    originalTransformOrCollection: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User name for the original user transform or collection with which this source is most closely associated.',
      }),
    sizeBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Size of the source, if measurable.' }),
    userName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Human-readable name for this source; may be user or system generated.',
      }),
  })
  .openapi({
    description: 'Description of an input or output of an execution stage.',
    required: [],
  })
  .openapi('StageSource')

const ExecutionStageSummarySchema = z
  .object({
    componentSource: z
      .array(ComponentSourceSchema)
      .exactOptional()
      .openapi({
        description: 'Collections produced and consumed by component transforms of this stage.',
      }),
    componentTransform: z
      .array(ComponentTransformSchema)
      .exactOptional()
      .openapi({ description: 'Transforms that comprise this execution stage.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Dataflow service generated id for this stage.' }),
    inputSource: z
      .array(StageSourceSchema)
      .exactOptional()
      .openapi({ description: 'Input sources for this stage.' }),
    kind: z
      .enum([
        'UNKNOWN_KIND',
        'PAR_DO_KIND',
        'GROUP_BY_KEY_KIND',
        'FLATTEN_KIND',
        'READ_KIND',
        'WRITE_KIND',
        'CONSTANT_KIND',
        'SINGLETON_KIND',
        'SHUFFLE_KIND',
      ])
      .exactOptional()
      .openapi({ description: 'Type of transform this stage is executing.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Dataflow service generated name for this stage.' }),
    outputSource: z
      .array(StageSourceSchema)
      .exactOptional()
      .openapi({ description: 'Output sources for this stage.' }),
    prerequisiteStage: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Other stages that must complete before this stage can run.' }),
  })
  .openapi({
    description:
      'Description of the composing transforms, names/ids, and input/outputs of a stage of execution. Some composing transforms and sources may have been generated by the Dataflow service during execution planning.',
    required: [],
  })
  .openapi('ExecutionStageSummary')

const FailedLocationSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that failed to respond.',
      }),
  })
  .openapi({
    description:
      'Indicates which [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) failed to respond to a request for data.',
    required: [],
  })
  .openapi('FailedLocation')

const FileIODetailsSchema = z
  .object({
    filePattern: z
      .string()
      .exactOptional()
      .openapi({ description: 'File Pattern used to access files by the connector.' }),
  })
  .openapi({ description: 'Metadata for a File connector used by the job.', required: [] })
  .openapi('FileIODetails')

const InstructionInputSchema = z
  .object({
    outputNum: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The output index (origin zero) within the producer.' }),
    producerInstructionIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "The index (origin zero) of the parallel instruction that produces the output to be consumed by this input. This index is relative to the list of instructions in this input's instruction's containing MapTask.",
      }),
  })
  .openapi({
    description:
      'An input of an instruction, as a reference to an output of a producer instruction.',
    required: [],
  })
  .openapi('InstructionInput')

const FlattenInstructionSchema = z
  .object({
    inputs: z
      .array(InstructionInputSchema)
      .exactOptional()
      .openapi({ description: 'Describes the inputs to the flatten instruction.' }),
  })
  .openapi({
    description: 'An instruction that copies its inputs (zero or more) to its (single) output.',
    required: [],
  })
  .openapi('FlattenInstruction')

const GetDebugConfigRequestSchema = z
  .object({
    componentId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The internal component id for which debug configuration is requested.',
      }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.',
      }),
    workerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The worker id, i.e., VM hostname.' }),
  })
  .openapi({
    description: 'Request to get updated debug configuration for component.',
    required: [],
  })
  .openapi('GetDebugConfigRequest')

const GetDebugConfigResponseSchema = z
  .object({
    config: z
      .string()
      .exactOptional()
      .openapi({ description: 'The encoded debug configuration for the requested component.' }),
  })
  .openapi({ description: 'Response to a get debug configuration request.', required: [] })
  .openapi('GetDebugConfigResponse')

const RuntimeMetadataSchema = z
  .object({
    parameters: z
      .array(ParameterMetadataSchema)
      .exactOptional()
      .openapi({ description: 'The parameters for the template.' }),
    sdkInfo: SDKInfoSchema.exactOptional().openapi({ description: 'SDK Info for the template.' }),
  })
  .openapi({ description: 'RuntimeMetadata describing a runtime environment.', required: [] })
  .openapi('RuntimeMetadata')

const StatusSchema = z
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
  .openapi('Status')

const GetTemplateResponseSchema = z
  .object({
    metadata: TemplateMetadataSchema.exactOptional().openapi({
      description: 'The template metadata describing the template name, available parameters, etc.',
    }),
    runtimeMetadata: RuntimeMetadataSchema.exactOptional().openapi({
      description: 'Describes the runtime metadata with SDKInfo and available parameters.',
    }),
    status: StatusSchema.exactOptional().openapi({
      description:
        'The status of the get template request. Any problems with the request will be indicated in the error_details.',
    }),
    templateType: z
      .enum(['UNKNOWN', 'LEGACY', 'FLEX'])
      .exactOptional()
      .openapi({ description: 'Template Type.' }),
  })
  .openapi({ description: 'The response to a GetTemplate request.', required: [] })
  .openapi('GetTemplateResponse')

const HotKeyInfoSchema = z
  .object({
    hotKeyAge: z
      .string()
      .exactOptional()
      .openapi({ description: 'The age of the hot key measured from when it was first detected.' }),
    key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A detected hot key that is causing limited parallelism. This field will be populated only if the following flag is set to true: "--enable_hot_key_logging".',
      }),
    keyTruncated: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, then the above key is truncated and cannot be deserialized. This occurs if the key above is populated and the key size is >5MB.',
      }),
  })
  .openapi({ description: 'Information about a hot key.', required: [] })
  .openapi('HotKeyInfo')

const HotKeyDebuggingInfoSchema = z
  .object({
    detectedHotKeys: z
      .record(z.string(), HotKeyInfoSchema)
      .exactOptional()
      .openapi({
        description: 'Debugging information for each detected hot key. Keyed by a hash of the key.',
      }),
  })
  .openapi({ description: 'Information useful for debugging a hot key detection.', required: [] })
  .openapi('HotKeyDebuggingInfo')

const HotKeyDetectionSchema = z
  .object({
    hotKeyAge: z
      .string()
      .exactOptional()
      .openapi({ description: 'The age of the hot key measured from when it was first detected.' }),
    systemName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'System-defined name of the step containing this hot key. Unique across the workflow.',
      }),
    userStepName: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-provided name of the step that contains this hot key.' }),
  })
  .openapi({
    description: 'Proto describing a hot key detected on a given WorkItem.',
    required: [],
  })
  .openapi('HotKeyDetection')

const InstructionOutputSchema = z
  .object({
    codec: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({ description: 'The codec to use to encode data being written via this output.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user-provided name of this output.' }),
    onlyCountKeyBytes: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'For system-generated byte and mean byte metrics, certain instructions should only report the key size.',
      }),
    onlyCountValueBytes: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'For system-generated byte and mean byte metrics, certain instructions should only report the value size.',
      }),
    originalName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'System-defined name for this output in the original workflow graph. Outputs that do not contribute to an original instruction do not set this.',
      }),
    systemName: z
      .string()
      .exactOptional()
      .openapi({ description: 'System-defined name of this output. Unique across the workflow.' }),
  })
  .openapi({ description: 'An output of an instruction.', required: [] })
  .openapi('InstructionOutput')

const JobExecutionStageInfoSchema = z
  .object({
    stepName: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The steps associated with the execution stage. Note that stages may have several steps, and that a given step might be run by more than one stage.',
      }),
  })
  .openapi({
    description:
      'Contains information about how a particular google.dataflow.v1beta3.Step will be executed.',
    required: [],
  })
  .openapi('JobExecutionStageInfo')

const JobExecutionInfoSchema = z
  .object({
    stages: z
      .record(z.string(), JobExecutionStageInfoSchema)
      .exactOptional()
      .openapi({ description: 'A mapping from each stage to the information about that stage.' }),
  })
  .openapi({
    description:
      "Additional information about how a Cloud Dataflow job will be executed that isn't contained in the submitted job.",
    required: [],
  })
  .openapi('JobExecutionInfo')

const PubSubIODetailsSchema = z
  .object({
    subscription: z
      .string()
      .exactOptional()
      .openapi({ description: 'Subscription used in the connection.' }),
    topic: z.string().exactOptional().openapi({ description: 'Topic accessed in the connection.' }),
  })
  .openapi({ description: 'Metadata for a Pub/Sub connector used by the job.', required: [] })
  .openapi('PubSubIODetails')

const SdkVersionSchema = z
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
  .openapi('SdkVersion')

const SpannerIODetailsSchema = z
  .object({
    databaseId: z
      .string()
      .exactOptional()
      .openapi({ description: 'DatabaseId accessed in the connection.' }),
    instanceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'InstanceId accessed in the connection.' }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ProjectId accessed in the connection.' }),
  })
  .openapi({ description: 'Metadata for a Spanner connector used by the job.', required: [] })
  .openapi('SpannerIODetails')

const JobMetadataSchema = z
  .object({
    bigTableDetails: z
      .array(BigTableIODetailsSchema)
      .exactOptional()
      .openapi({
        description: 'Identification of a Cloud Bigtable source used in the Dataflow job.',
      }),
    bigqueryDetails: z
      .array(BigQueryIODetailsSchema)
      .exactOptional()
      .openapi({ description: 'Identification of a BigQuery source used in the Dataflow job.' }),
    datastoreDetails: z
      .array(DatastoreIODetailsSchema)
      .exactOptional()
      .openapi({ description: 'Identification of a Datastore source used in the Dataflow job.' }),
    fileDetails: z
      .array(FileIODetailsSchema)
      .exactOptional()
      .openapi({ description: 'Identification of a File source used in the Dataflow job.' }),
    pubsubDetails: z
      .array(PubSubIODetailsSchema)
      .exactOptional()
      .openapi({ description: 'Identification of a Pub/Sub source used in the Dataflow job.' }),
    sdkVersion: SdkVersionSchema.exactOptional().openapi({
      description: 'The SDK version used to run the job.',
    }),
    spannerDetails: z
      .array(SpannerIODetailsSchema)
      .exactOptional()
      .openapi({ description: 'Identification of a Spanner source used in the Dataflow job.' }),
    userDisplayProperties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'List of display properties to help UI filter jobs.' }),
  })
  .openapi({
    description:
      'Metadata available primarily for filtering jobs. Will be included in the ListJob response and Job SUMMARY view.',
    required: [],
  })
  .openapi('JobMetadata')

const TransformSummarySchema = z
  .object({
    displayData: z
      .array(DisplayDataSchema)
      .exactOptional()
      .openapi({ description: 'Transform-specific display data.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'SDK generated id of this transform instance.' }),
    inputCollectionName: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'User names for all collection inputs to this transform.' }),
    kind: z
      .enum([
        'UNKNOWN_KIND',
        'PAR_DO_KIND',
        'GROUP_BY_KEY_KIND',
        'FLATTEN_KIND',
        'READ_KIND',
        'WRITE_KIND',
        'CONSTANT_KIND',
        'SINGLETON_KIND',
        'SHUFFLE_KIND',
      ])
      .exactOptional()
      .openapi({ description: 'Type of transform.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'User provided name for this transform instance.' }),
    outputCollectionName: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'User names for all collection outputs to this transform.' }),
  })
  .openapi({
    description: 'Description of the type, names/ids, and input/outputs for a transform.',
    required: [],
  })
  .openapi('TransformSummary')

const PipelineDescriptionSchema = z
  .object({
    displayData: z
      .array(DisplayDataSchema)
      .exactOptional()
      .openapi({ description: 'Pipeline level display data.' }),
    executionPipelineStage: z
      .array(ExecutionStageSummarySchema)
      .exactOptional()
      .openapi({ description: 'Description of each stage of execution of the pipeline.' }),
    originalPipelineTransform: z
      .array(TransformSummarySchema)
      .exactOptional()
      .openapi({
        description: 'Description of each transform in the pipeline and collections between them.',
      }),
    stepNamesHash: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A hash value of the submitted pipeline portable graph step names if exists.',
      }),
  })
  .openapi({
    description:
      'A descriptive representation of submitted pipeline as well as the executed form. This data is provided by the Dataflow service for ease of visualizing the pipeline and interpreting Dataflow provided metrics.',
    required: [],
  })
  .openapi('PipelineDescription')

const StepSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'The kind of step in the Cloud Dataflow job.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name that identifies the step. This must be unique for each step with respect to all other steps in the Cloud Dataflow job.',
      }),
    properties: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({
        description:
          'Named properties associated with the step. Each kind of predefined step has its own required set of properties. Must be provided on Create. Only retrieved with JOB_VIEW_ALL.',
      }),
  })
  .openapi({
    description:
      "Defines a particular step within a Cloud Dataflow job. A job consists of multiple steps, each of which performs some specific operation as part of the overall job. Data is typically passed from one step to another as part of the job. **Note:** The properties of this object are not stable and might change. Here's an example of a sequence of steps which together implement a Map-Reduce job: * Read a collection of data from some source, parsing the collection's elements. * Validate the elements. * Apply a user-defined function to map each element to some value and extract an element-specific key value. * Group elements with the same key into a single element with that key, transforming a multiply-keyed collection into a uniquely-keyed collection. * Write the elements out to some data sink. Note that the Cloud Dataflow service may be used to run many different types of jobs, not just Map-Reduce.",
    required: [],
  })
  .openapi('Step')

const JobSchema = z
  .object({
    clientRequestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The client's unique identifier of the job, re-used across retried attempts. If this field is set, the service will ensure its uniqueness. The request to create a job will fail if the service has knowledge of a previously submitted job with the same client's ID and job name. The caller may use this field to ensure idempotence of job creation across retried attempts to create a job. By default, the field is empty and, in that case, the service ignores it.",
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The timestamp when the job was initially created. Immutable and set by the Cloud Dataflow service.',
      }),
    createdFromSnapshotId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "If this is specified, the job's initial state is populated from the given snapshot.",
      }),
    currentState: z
      .enum([
        'JOB_STATE_UNKNOWN',
        'JOB_STATE_STOPPED',
        'JOB_STATE_RUNNING',
        'JOB_STATE_DONE',
        'JOB_STATE_FAILED',
        'JOB_STATE_CANCELLED',
        'JOB_STATE_UPDATED',
        'JOB_STATE_DRAINING',
        'JOB_STATE_DRAINED',
        'JOB_STATE_PENDING',
        'JOB_STATE_CANCELLING',
        'JOB_STATE_QUEUED',
        'JOB_STATE_RESOURCE_CLEANING_UP',
      ])
      .exactOptional()
      .openapi({
        description:
          'The current state of the job. Jobs are created in the `JOB_STATE_STOPPED` state unless otherwise specified. A job in the `JOB_STATE_RUNNING` state may asynchronously enter a terminal state. After a job has reached a terminal state, no further state updates may be made. This field may be mutated by the Cloud Dataflow service; callers cannot mutate it.',
      }),
    currentStateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timestamp associated with the current state.' }),
    environment: EnvironmentSchema.exactOptional().openapi({
      description: 'The environment for the job.',
    }),
    executionInfo: JobExecutionInfoSchema.exactOptional().openapi({ description: 'Deprecated.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique ID of this job. This field is set by the Cloud Dataflow service when the Job is created, and is immutable for the life of the job.',
      }),
    jobMetadata: JobMetadataSchema.exactOptional().openapi({
      description:
        'This field is populated by the Dataflow service to support filtering jobs by the metadata values provided here. Populated for ListJobs and all GetJob views SUMMARY and higher.',
    }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'User-defined labels for this job. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: * Keys must conform to regexp: \\p{Ll}\\p{Lo}{0,62} * Values must conform to regexp: [\\p{Ll}\\p{Lo}\\p{N}_-]{0,63} * Both keys and values are additionally constrained to be <= 128 bytes in size.',
      }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The user-specified Cloud Dataflow job name. Only one Job with a given name can exist in a project within one region at any given time. Jobs in different regions can have the same name. If a caller attempts to create a Job with the same name as an already-existing Job, the attempt returns the existing Job. The name must match the regular expression `[a-z]([-a-z0-9]{0,1022}[a-z0-9])?`',
      }),
    pipelineDescription: PipelineDescriptionSchema.exactOptional().openapi({
      description:
        'Preliminary field: The format of this data may change at any time. A description of the user pipeline and stages through which it is executed. Created by Cloud Dataflow service. Only retrieved with JOB_VIEW_DESCRIPTION or JOB_VIEW_ALL.',
    }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the Cloud Platform project that the job belongs to.' }),
    replaceJobId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If this job is an update of an existing job, this field is the job ID of the job it replaced. When sending a `CreateJobRequest`, you can update a job by specifying it here. The job named here is stopped, and its intermediate state is transferred to this job.',
      }),
    replacedByJobId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If another job is an update of this job (and thus, this job is in `JOB_STATE_UPDATED`), this field contains the ID of that job.',
      }),
    requestedState: z
      .enum([
        'JOB_STATE_UNKNOWN',
        'JOB_STATE_STOPPED',
        'JOB_STATE_RUNNING',
        'JOB_STATE_DONE',
        'JOB_STATE_FAILED',
        'JOB_STATE_CANCELLED',
        'JOB_STATE_UPDATED',
        'JOB_STATE_DRAINING',
        'JOB_STATE_DRAINED',
        'JOB_STATE_PENDING',
        'JOB_STATE_CANCELLING',
        'JOB_STATE_QUEUED',
        'JOB_STATE_RESOURCE_CLEANING_UP',
      ])
      .exactOptional()
      .openapi({
        description:
          "The job's requested state. `UpdateJob` may be used to switch between the `JOB_STATE_STOPPED` and `JOB_STATE_RUNNING` states, by setting requested_state. `UpdateJob` may also be used to directly set a job's requested state to `JOB_STATE_CANCELLED` or `JOB_STATE_DONE`, irrevocably terminating the job if it has not already reached a terminal state.",
      }),
    satisfiesPzs: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Reserved for future use. This field is set only in responses from the server; it is ignored if it is set in any requests.',
      }),
    stageStates: z
      .array(ExecutionStageStateSchema)
      .exactOptional()
      .openapi({
        description:
          'This field may be mutated by the Cloud Dataflow service; callers cannot mutate it.',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The timestamp when the job was started (transitioned to JOB_STATE_PENDING). Flexible resource scheduling jobs are started with some delay after job creation, so start_time is unset before start and is updated when the job is started by the Cloud Dataflow service. For other jobs, start_time always equals to create_time and is immutable and set by the Cloud Dataflow service.',
      }),
    steps: z
      .array(StepSchema)
      .exactOptional()
      .openapi({
        description:
          'Exactly one of step or steps_location should be specified. The top-level steps that constitute the entire job. Only retrieved with JOB_VIEW_ALL.',
      }),
    stepsLocation: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Cloud Storage location where the steps are stored.' }),
    tempFiles: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of files the system should be aware of that are used for temporary storage. These temporary files will be removed on job completion. No duplicates are allowed. No file patterns are supported. The supported files are: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object}',
      }),
    transformNameMapping: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'The map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job.',
      }),
    type: z
      .enum(['JOB_TYPE_UNKNOWN', 'JOB_TYPE_BATCH', 'JOB_TYPE_STREAMING'])
      .exactOptional()
      .openapi({ description: 'The type of Cloud Dataflow job.' }),
  })
  .openapi({
    description:
      'Defines a job to be run by the Cloud Dataflow service. Do not enter confidential information when you supply string values using the API.',
    required: [],
  })
  .openapi('Job')

const MetricStructuredNameSchema = z
  .object({
    context: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "Zero or more labeled fields which identify the part of the job this metric is associated with, such as the name of a step or collection. For example, built-in counters associated with steps will have context['step'] = . Counters associated with PCollections in the SDK will have context['pcollection'] = .",
      }),
    name: z.string().exactOptional().openapi({ description: 'Worker-defined metric name.' }),
    origin: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Origin (namespace) of metric name. May be blank for user-define metrics; will be "dataflow" for metrics defined by the Dataflow service or SDK.',
      }),
  })
  .openapi({
    description: 'Identifies a metric, by describing the source which generated the metric.',
    required: [],
  })
  .openapi('MetricStructuredName')

const MetricUpdateSchema = z
  .object({
    cumulative: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if this metric is reported as the total cumulative aggregate value accumulated since the worker started working on this WorkItem. By default this is false, indicating that this metric is reported as a delta that is not associated with any WorkItem.',
      }),
    distribution: z
      .any()
      .exactOptional()
      .openapi({
        description: 'A struct value describing properties of a distribution of numeric values.',
      }),
    gauge: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'A struct value describing properties of a Gauge. Metrics of gauge type show the value of a metric across time, and is aggregated based on the newest value.',
      }),
    internal: z
      .any()
      .exactOptional()
      .openapi({
        description: 'Worker-computed aggregate value for internal use by the Dataflow service.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Metric aggregation kind. The possible metric aggregation kinds are "Sum", "Max", "Min", "Mean", "Set", "And", "Or", and "Distribution". The specified aggregation kind is case-insensitive. If omitted, this is not an aggregated value but instead a single metric sample value.',
      }),
    meanCount: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Worker-computed aggregate value for the "Mean" aggregation kind. This holds the count of the aggregated values and is used in combination with mean_sum above to obtain the actual mean aggregate value. The only possible value type is Long.',
      }),
    meanSum: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Worker-computed aggregate value for the "Mean" aggregation kind. This holds the sum of the aggregated values and is used in combination with mean_count below to obtain the actual mean aggregate value. The only possible value types are Long and Double.',
      }),
    name: MetricStructuredNameSchema.exactOptional().openapi({
      description: 'Name of the metric.',
    }),
    scalar: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Worker-computed aggregate value for aggregation kinds "Sum", "Max", "Min", "And", and "Or". The possible value types are Long, Double, and Boolean.',
      }),
    set: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Worker-computed aggregate value for the "Set" aggregation kind. The only possible value type is a list of Values whose type can be Long, Double, or String, according to the metric\'s type. All Values in the list must be of the same type.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Timestamp associated with the metric value. Optional when workers are reporting work progress; it will be filled in responses from the metrics API.',
      }),
  })
  .openapi({ description: 'Describes the state of a metric.', required: [] })
  .openapi('MetricUpdate')

const PointSchema = z
  .object({
    time: z.string().exactOptional().openapi({ description: 'The timestamp of the point.' }),
    value: z.float64().exactOptional().openapi({ description: 'The value of the point.' }),
  })
  .openapi({ description: 'A point in the timeseries.', required: [] })
  .openapi('Point')

const ProgressTimeseriesSchema = z
  .object({
    currentProgress: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The current progress of the component, in the range [0,1].' }),
    dataPoints: z
      .array(PointSchema)
      .exactOptional()
      .openapi({
        description: 'History of progress for the component. Points are sorted by time.',
      }),
  })
  .openapi({
    description: 'Information about the progress of some component of job execution.',
    required: [],
  })
  .openapi('ProgressTimeseries')

const StragglerDebuggingInfoSchema = z
  .object({
    hotKey: HotKeyDebuggingInfoSchema.exactOptional().openapi({
      description: 'Hot key debugging details.',
    }),
  })
  .openapi({
    description:
      'Information useful for debugging a straggler. Each type will provide specialized debugging information relevant for a particular cause. The StragglerDebuggingInfo will be 1:1 mapping to the StragglerCause enum.',
    required: [],
  })
  .openapi('StragglerDebuggingInfo')

const StragglerInfoSchema = z
  .object({
    causes: z
      .record(z.string(), StragglerDebuggingInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'The straggler causes, keyed by the string representation of the StragglerCause enum and contains specialized debugging information for each straggler cause.',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when the work item attempt became a straggler.' }),
  })
  .openapi({
    description: 'Information useful for straggler identification and debugging.',
    required: [],
  })
  .openapi('StragglerInfo')

const StreamingStragglerInfoSchema = z
  .object({
    dataWatermarkLag: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The event-time watermark lag at the time of the straggler detection.',
      }),
    endTime: z.string().exactOptional().openapi({ description: 'End time of this straggler.' }),
    startTime: z.string().exactOptional().openapi({ description: 'Start time of this straggler.' }),
    systemWatermarkLag: z
      .string()
      .exactOptional()
      .openapi({ description: 'The system watermark lag at the time of the straggler detection.' }),
    workerName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the worker where the straggler was detected.' }),
  })
  .openapi({
    description: 'Information useful for streaming straggler identification and debugging.',
    required: [],
  })
  .openapi('StreamingStragglerInfo')

const StragglerSchema = z
  .object({
    batchStraggler: StragglerInfoSchema.exactOptional().openapi({
      description: 'Batch straggler identification and debugging information.',
    }),
    streamingStraggler: StreamingStragglerInfoSchema.exactOptional().openapi({
      description: 'Streaming straggler identification and debugging information.',
    }),
  })
  .openapi({ description: 'Information for a straggler.', required: [] })
  .openapi('Straggler')

const StragglerSummarySchema = z
  .object({
    recentStragglers: z
      .array(StragglerSchema)
      .exactOptional()
      .openapi({ description: 'The most recent stragglers.' }),
    stragglerCauseCount: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Aggregated counts of straggler causes, keyed by the string representation of the StragglerCause enum.',
      }),
    totalStragglerCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The total count of stragglers.' }),
  })
  .openapi({ description: 'Summarized straggler identification details.', required: [] })
  .openapi('StragglerSummary')

const StageSummarySchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'End time of this stage. If the work item is completed, this is the actual end time of the stage. Otherwise, it is the predicted end time.',
      }),
    metrics: z
      .array(MetricUpdateSchema)
      .exactOptional()
      .openapi({ description: 'Metrics for this stage.' }),
    progress: ProgressTimeseriesSchema.exactOptional().openapi({
      description: 'Progress for this stage. Only applicable to Batch jobs.',
    }),
    stageId: z.string().exactOptional().openapi({ description: 'ID of this stage' }),
    startTime: z.string().exactOptional().openapi({ description: 'Start time of this stage.' }),
    state: z
      .enum([
        'EXECUTION_STATE_UNKNOWN',
        'EXECUTION_STATE_NOT_STARTED',
        'EXECUTION_STATE_RUNNING',
        'EXECUTION_STATE_SUCCEEDED',
        'EXECUTION_STATE_FAILED',
        'EXECUTION_STATE_CANCELLED',
      ])
      .exactOptional()
      .openapi({ description: 'State of this stage.' }),
    stragglerSummary: StragglerSummarySchema.exactOptional().openapi({
      description: 'Straggler summary for this stage.',
    }),
  })
  .openapi({
    description: 'Information about a particular execution stage of a job.',
    required: [],
  })
  .openapi('StageSummary')

const JobExecutionDetailsSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If present, this response does not contain all requested tasks. To obtain the next page of results, repeat the request with page_token set to this value.',
      }),
    stages: z
      .array(StageSummarySchema)
      .exactOptional()
      .openapi({ description: 'The stages of the job execution.' }),
  })
  .openapi({ description: 'Information about the execution of a job.', required: [] })
  .openapi('JobExecutionDetails')

const JobMessageSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'Deprecated.' }),
    messageImportance: z
      .enum([
        'JOB_MESSAGE_IMPORTANCE_UNKNOWN',
        'JOB_MESSAGE_DEBUG',
        'JOB_MESSAGE_DETAILED',
        'JOB_MESSAGE_BASIC',
        'JOB_MESSAGE_WARNING',
        'JOB_MESSAGE_ERROR',
      ])
      .exactOptional()
      .openapi({ description: 'Importance level of the message.' }),
    messageText: z.string().exactOptional().openapi({ description: 'The text of the message.' }),
    time: z.string().exactOptional().openapi({ description: 'The timestamp of the message.' }),
  })
  .openapi({ description: 'A particular message pertaining to a Dataflow job.', required: [] })
  .openapi('JobMessage')

const JobMetricsSchema = z
  .object({
    metricTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp as of which metric values are current.' }),
    metrics: z
      .array(MetricUpdateSchema)
      .exactOptional()
      .openapi({ description: 'All metrics for this job.' }),
  })
  .openapi({
    description:
      'JobMetrics contains a collection of metrics describing the detailed progress of a Dataflow job. Metrics correspond to user-defined and system-defined metrics in the job. For more information, see [Dataflow job metrics] (https://cloud.google.com/dataflow/docs/guides/using-monitoring-intf). This resource captures only the most recent values of each metric; time-series data can be queried for them (under the same metric names) from Cloud Monitoring.',
    required: [],
  })
  .openapi('JobMetrics')

const KeyRangeDataDiskAssignmentSchema = z
  .object({
    dataDisk: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the data disk where data for this range is stored. This name is local to the Google Cloud Platform project and uniquely identifies the disk within that project, for example "myproject-1014-104817-4c2-harness-0-disk-1".',
      }),
    end: z
      .string()
      .exactOptional()
      .openapi({ description: 'The end (exclusive) of the key range.' }),
    start: z
      .string()
      .exactOptional()
      .openapi({ description: 'The start (inclusive) of the key range.' }),
  })
  .openapi({
    description:
      'Data disk assignment information for a specific key-range of a sharded computation. Currently we only support UTF-8 character splits to simplify encoding into JSON.',
    required: [],
  })
  .openapi('KeyRangeDataDiskAssignment')

const LaunchFlexTemplateParameterSchema = z
  .object({
    containerSpec: ContainerSpecSchema.exactOptional().openapi({
      description: 'Spec about the container image to launch.',
    }),
    containerSpecGcsPath: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Cloud Storage path to a file with json serialized ContainerSpec as content.',
      }),
    environment: FlexTemplateRuntimeEnvironmentSchema.exactOptional().openapi({
      description: 'The runtime environment for the FlexTemplate job',
    }),
    jobName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The job name to use for the created job. For update job request, job name should be same as the existing running job.',
      }),
    launchOptions: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Launch options for this flex template job. This is a common set of options across languages and templates. This should not be used to pass job parameters.',
      }),
    parameters: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'The parameters for FlexTemplate. Ex. {"num_workers":"5"}' }),
    transformNameMappings: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Use this to pass transform_name_mappings for streaming update jobs. Ex:{"oldTransformName":"newTransformName",...}\'',
      }),
    update: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Set this to true if you are sending a request to update a running streaming job. When set, the job name should be the same as the running job.',
      }),
  })
  .openapi({ description: 'Launch FlexTemplate Parameter.', required: [] })
  .openapi('LaunchFlexTemplateParameter')

const LaunchFlexTemplateRequestSchema = z
  .object({
    launchParameter: LaunchFlexTemplateParameterSchema.exactOptional().openapi({
      description: 'Required. Parameter to launch a job form Flex Template.',
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
    description: 'A request to launch a Cloud Dataflow job from a FlexTemplate.',
    required: [],
  })
  .openapi('LaunchFlexTemplateRequest')

const LaunchFlexTemplateResponseSchema = z
  .object({
    job: JobSchema.exactOptional().openapi({
      description:
        'The job that was launched, if the request was not a dry run and the job was successfully launched.',
    }),
  })
  .openapi({
    description: 'Response to the request to launch a job from Flex Template.',
    required: [],
  })
  .openapi('LaunchFlexTemplateResponse')

const LaunchTemplateParametersSchema = z
  .object({
    environment: RuntimeEnvironmentSchema.exactOptional().openapi({
      description: 'The runtime environment for the job.',
    }),
    jobName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The job name to use for the created job. The name must match the regular expression `[a-z]([-a-z0-9]{0,1022}[a-z0-9])?`',
      }),
    parameters: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'The runtime parameters to pass to the job.' }),
    transformNameMapping: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Only applicable when updating a pipeline. Map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job.',
      }),
    update: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set, replace the existing pipeline with the name specified by jobName with this pipeline, preserving state.',
      }),
  })
  .openapi({
    description:
      'Parameters to provide to the template being launched. Note that the [metadata in the pipeline code] (https://cloud.google.com/dataflow/docs/guides/templates/creating-templates#metadata) determines which runtime parameters are valid.',
    required: [],
  })
  .openapi('LaunchTemplateParameters')

const LaunchTemplateResponseSchema = z
  .object({
    job: JobSchema.exactOptional().openapi({
      description:
        'The job that was launched, if the request was not a dry run and the job was successfully launched.',
    }),
  })
  .openapi({ description: 'Response to the request to launch a template.', required: [] })
  .openapi('LaunchTemplateResponse')

const LeaseWorkItemRequestSchema = z
  .object({
    currentWorkerTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The current timestamp at the worker.' }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job.",
      }),
    requestedLeaseDuration: z
      .string()
      .exactOptional()
      .openapi({ description: 'The initial lease period.' }),
    unifiedWorkerRequest: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({ description: 'Untranslated bag-of-bytes WorkRequest from UnifiedWorker.' }),
    workItemTypes: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Filter for WorkItem type.' }),
    workerCapabilities: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Worker capabilities. WorkItems might be limited to workers with specific capabilities.',
      }),
    workerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies the worker leasing work -- typically the ID of the virtual machine running the worker.',
      }),
  })
  .openapi({ description: 'Request to lease WorkItems.', required: [] })
  .openapi('LeaseWorkItemRequest')

const MultiOutputInfoSchema = z
  .object({
    tag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of the tag the user code will emit to this output by; this should correspond to the tag of some SideInputInfo.',
      }),
  })
  .openapi({ description: 'Information about an output of a multi-output DoFn.', required: [] })
  .openapi('MultiOutputInfo')

const SideInputInfoSchema = z
  .object({
    kind: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({ description: 'How to interpret the source element(s) as a side input value.' }),
    sources: z
      .array(SourceSchema)
      .exactOptional()
      .openapi({
        description:
          'The source(s) to read element(s) from to get the value of this side input. If more than one source, then the elements are taken from the sources, in the specified order if order matters. At least one source is required.',
      }),
    tag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of the tag the user code will access this side input by; this should correspond to the tag of some MultiOutputInfo.',
      }),
  })
  .openapi({
    description: 'Information about a side input of a DoFn or an input of a SeqDoFn.',
    required: [],
  })
  .openapi('SideInputInfo')

const ParDoInstructionSchema = z
  .object({
    input: InstructionInputSchema.exactOptional().openapi({ description: 'The input.' }),
    multiOutputInfos: z
      .array(MultiOutputInfoSchema)
      .exactOptional()
      .openapi({
        description: 'Information about each of the outputs, if user_fn is a MultiDoFn.',
      }),
    numOutputs: z.int32().exactOptional().openapi({ description: 'The number of outputs.' }),
    sideInputs: z
      .array(SideInputInfoSchema)
      .exactOptional()
      .openapi({ description: 'Zero or more side inputs.' }),
    userFn: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({ description: 'The user function to invoke.' }),
  })
  .openapi({
    description:
      'An instruction that does a ParDo operation. Takes one main input and zero or more side inputs, and produces zero or more outputs. Runs user code.',
    required: [],
  })
  .openapi('ParDoInstruction')

const PartialGroupByKeyInstructionSchema = z
  .object({
    input: InstructionInputSchema.exactOptional().openapi({
      description: 'Describes the input to the partial group-by-key instruction.',
    }),
    inputElementCodec: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({
        description: 'The codec to use for interpreting an element in the input PTable.',
      }),
    originalCombineValuesInputStoreName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If this instruction includes a combining function this is the name of the intermediate store between the GBK and the CombineValues.',
      }),
    originalCombineValuesStepName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If this instruction includes a combining function, this is the name of the CombineValues instruction lifted into this instruction.',
      }),
    sideInputs: z
      .array(SideInputInfoSchema)
      .exactOptional()
      .openapi({ description: 'Zero or more side inputs.' }),
    valueCombiningFn: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({ description: 'The value combining function to invoke.' }),
  })
  .openapi({
    description: 'An instruction that does a partial group-by-key. One input and one output.',
    required: [],
  })
  .openapi('PartialGroupByKeyInstruction')

const ReadInstructionSchema = z
  .object({
    source: SourceSchema.exactOptional().openapi({ description: 'The source to read from.' }),
  })
  .openapi({
    description: 'An instruction that reads records. Takes no inputs, produces one output.',
    required: [],
  })
  .openapi('ReadInstruction')

const SinkSchema = z
  .object({
    codec: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({ description: 'The codec to use to encode data written to the sink.' }),
    spec: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({ description: 'The sink to write to, plus its parameters.' }),
  })
  .openapi({ description: 'A sink that records can be encoded and written to.', required: [] })
  .openapi('Sink')

const WriteInstructionSchema = z
  .object({
    input: InstructionInputSchema.exactOptional().openapi({ description: 'The input.' }),
    sink: SinkSchema.exactOptional().openapi({ description: 'The sink to write to.' }),
  })
  .openapi({
    description: 'An instruction that writes records. Takes one input, produces no outputs.',
    required: [],
  })
  .openapi('WriteInstruction')

const ParallelInstructionSchema = z
  .object({
    flatten: FlattenInstructionSchema.exactOptional().openapi({
      description: 'Additional information for Flatten instructions.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-provided name of this operation.' }),
    originalName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'System-defined name for the operation in the original workflow graph.',
      }),
    outputs: z
      .array(InstructionOutputSchema)
      .exactOptional()
      .openapi({ description: 'Describes the outputs of the instruction.' }),
    parDo: ParDoInstructionSchema.exactOptional().openapi({
      description: 'Additional information for ParDo instructions.',
    }),
    partialGroupByKey: PartialGroupByKeyInstructionSchema.exactOptional().openapi({
      description: 'Additional information for PartialGroupByKey instructions.',
    }),
    read: ReadInstructionSchema.exactOptional().openapi({
      description: 'Additional information for Read instructions.',
    }),
    systemName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'System-defined name of this operation. Unique across the workflow.',
      }),
    write: WriteInstructionSchema.exactOptional().openapi({
      description: 'Additional information for Write instructions.',
    }),
  })
  .openapi({ description: 'Describes a particular operation comprising a MapTask.', required: [] })
  .openapi('ParallelInstruction')

const MapTaskSchema = z
  .object({
    counterPrefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Counter prefix that can be used to prefix counters. Not currently used in Dataflow.',
      }),
    instructions: z
      .array(ParallelInstructionSchema)
      .exactOptional()
      .openapi({ description: 'The instructions in the MapTask.' }),
    stageName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'System-defined name of the stage containing this MapTask. Unique across the workflow.',
      }),
    systemName: z
      .string()
      .exactOptional()
      .openapi({ description: 'System-defined name of this MapTask. Unique across the workflow.' }),
  })
  .openapi({
    description:
      "MapTask consists of an ordered set of instructions, each of which describes one particular low-level operation for the worker to perform in order to accomplish the MapTask's WorkItem. Each instruction must appear in the list before any instructions which depends on its output.",
    required: [],
  })
  .openapi('MapTask')

const SeqMapTaskOutputInfoSchema = z
  .object({
    sink: SinkSchema.exactOptional().openapi({
      description: 'The sink to write the output value to.',
    }),
    tag: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The id of the TupleTag the user code will tag the output value by.',
      }),
  })
  .openapi({ description: 'Information about an output of a SeqMapTask.', required: [] })
  .openapi('SeqMapTaskOutputInfo')

const SeqMapTaskSchema = z
  .object({
    inputs: z
      .array(SideInputInfoSchema)
      .exactOptional()
      .openapi({ description: 'Information about each of the inputs.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user-provided name of the SeqDo operation.' }),
    outputInfos: z
      .array(SeqMapTaskOutputInfoSchema)
      .exactOptional()
      .openapi({ description: 'Information about each of the outputs.' }),
    stageName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'System-defined name of the stage containing the SeqDo operation. Unique across the workflow.',
      }),
    systemName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'System-defined name of the SeqDo operation. Unique across the workflow.',
      }),
    userFn: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({ description: 'The user function to invoke.' }),
  })
  .openapi({ description: 'Describes a particular function to invoke.', required: [] })
  .openapi('SeqMapTask')

const ShellTaskSchema = z
  .object({
    command: z.string().exactOptional().openapi({ description: 'The shell command to run.' }),
    exitCode: z.int32().exactOptional().openapi({ description: 'Exit code for the task.' }),
  })
  .openapi({
    description: 'A task which consists of a shell command for the worker to execute.',
    required: [],
  })
  .openapi('ShellTask')

const SourceGetMetadataRequestSchema = z
  .object({
    source: SourceSchema.exactOptional().openapi({
      description: 'Specification of the source whose metadata should be computed.',
    }),
  })
  .openapi({ description: 'A request to compute the SourceMetadata of a Source.', required: [] })
  .openapi('SourceGetMetadataRequest')

const SourceSplitOptionsSchema = z
  .object({
    desiredBundleSizeBytes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The source should be split into a set of bundles where the estimated size of each is approximately this many bytes.',
      }),
    desiredShardSizeBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'DEPRECATED in favor of desired_bundle_size_bytes.' }),
  })
  .openapi({
    description:
      'Hints for splitting a Source into bundles (parts for parallel processing) using SourceSplitRequest.',
    required: [],
  })
  .openapi('SourceSplitOptions')

const SourceSplitRequestSchema = z
  .object({
    options: SourceSplitOptionsSchema.exactOptional().openapi({
      description: 'Hints for tuning the splitting process.',
    }),
    source: SourceSchema.exactOptional().openapi({
      description: 'Specification of the source to be split.',
    }),
  })
  .openapi({
    description:
      'Represents the operation to split a high-level Source specification into bundles (parts for parallel processing). At a high level, splitting of a source into bundles happens as follows: SourceSplitRequest is applied to the source. If it returns SOURCE_SPLIT_OUTCOME_USE_CURRENT, no further splitting happens and the source is used "as is". Otherwise, splitting is applied recursively to each produced DerivedSource. As an optimization, for any Source, if its does_not_need_splitting is true, the framework assumes that splitting this source would return SOURCE_SPLIT_OUTCOME_USE_CURRENT, and doesn\'t initiate a SourceSplitRequest. This applies both to the initial source being split and to bundles produced from it.',
    required: [],
  })
  .openapi('SourceSplitRequest')

const SourceOperationRequestSchema = z
  .object({
    getMetadata: SourceGetMetadataRequestSchema.exactOptional().openapi({
      description: 'Information about a request to get metadata about a source.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-provided name of the Read instruction for this source.' }),
    originalName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'System-defined name for the Read instruction for this source in the original workflow graph.',
      }),
    split: SourceSplitRequestSchema.exactOptional().openapi({
      description: 'Information about a request to split a source.',
    }),
    stageName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'System-defined name of the stage containing the source operation. Unique across the workflow.',
      }),
    systemName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'System-defined name of the Read instruction for this source. Unique across the workflow.',
      }),
  })
  .openapi({
    description:
      'A work item that represents the different operations that can be performed on a user-defined Source specification.',
    required: [],
  })
  .openapi('SourceOperationRequest')

const StreamingComputationRangesSchema = z
  .object({
    computationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the computation.' }),
    rangeAssignments: z
      .array(KeyRangeDataDiskAssignmentSchema)
      .exactOptional()
      .openapi({ description: 'Data disk assignments for ranges from this computation.' }),
  })
  .openapi({
    description:
      'Describes full or partial data disk assignment information of the computation ranges.',
    required: [],
  })
  .openapi('StreamingComputationRanges')

const MountedDataDiskSchema = z
  .object({
    dataDisk: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the data disk. This name is local to the Google Cloud Platform project and uniquely identifies the disk within that project, for example "myproject-1014-104817-4c2-harness-0-disk-1".',
      }),
  })
  .openapi({ description: 'Describes mounted data disk.', required: [] })
  .openapi('MountedDataDisk')

const StreamingComputationTaskSchema = z
  .object({
    computationRanges: z
      .array(StreamingComputationRangesSchema)
      .exactOptional()
      .openapi({
        description: 'Contains ranges of a streaming computation this task should apply to.',
      }),
    dataDisks: z
      .array(MountedDataDiskSchema)
      .exactOptional()
      .openapi({ description: 'Describes the set of data disks this task should apply to.' }),
    taskType: z
      .enum([
        'STREAMING_COMPUTATION_TASK_UNKNOWN',
        'STREAMING_COMPUTATION_TASK_STOP',
        'STREAMING_COMPUTATION_TASK_START',
      ])
      .exactOptional()
      .openapi({ description: 'A type of streaming computation task.' }),
  })
  .openapi({
    description:
      'A task which describes what action should be performed for the specified streaming computation ranges.',
    required: [],
  })
  .openapi('StreamingComputationTask')

const StreamingComputationConfigSchema = z
  .object({
    computationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for this computation.' }),
    instructions: z
      .array(ParallelInstructionSchema)
      .exactOptional()
      .openapi({ description: 'Instructions that comprise the computation.' }),
    stageName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Stage name of this computation.' }),
    systemName: z
      .string()
      .exactOptional()
      .openapi({ description: 'System defined name for this computation.' }),
    transformUserNameToStateFamily: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Map from user name of stateful transforms in this stage to their state family.',
      }),
  })
  .openapi({
    description: 'Configuration information for a single streaming computation.',
    required: [],
  })
  .openapi('StreamingComputationConfig')

const StreamingConfigTaskSchema = z
  .object({
    commitStreamChunkSizeBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Chunk size for commit streams from the harness to windmill.' }),
    getDataStreamChunkSizeBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Chunk size for get data streams from the harness to windmill.' }),
    maxWorkItemCommitBytes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Maximum size for work item commit supported windmill storage layer.',
      }),
    streamingComputationConfigs: z
      .array(StreamingComputationConfigSchema)
      .exactOptional()
      .openapi({ description: 'Set of computation configuration information.' }),
    userStepToStateFamilyNameMap: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Map from user step names to state families.' }),
    windmillServiceEndpoint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If present, the worker must use this endpoint to communicate with Windmill Service dispatchers, otherwise the worker must continue to use whatever endpoint it had been using.',
      }),
    windmillServicePort: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If present, the worker must use this port to communicate with Windmill Service dispatchers. Only applicable when windmill_service_endpoint is specified.',
      }),
  })
  .openapi({
    description: 'A task that carries configuration information for streaming computations.',
    required: [],
  })
  .openapi('StreamingConfigTask')

const StreamingApplianceSnapshotConfigSchema = z
  .object({
    importStateEndpoint: z
      .string()
      .exactOptional()
      .openapi({ description: 'Indicates which endpoint is used to import appliance state.' }),
    snapshotId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If set, indicates the snapshot id for the snapshot being performed.',
      }),
  })
  .openapi({ description: 'Streaming appliance snapshot configuration.', required: [] })
  .openapi('StreamingApplianceSnapshotConfig')

const TopologyConfigSchema = z
  .object({
    computations: z
      .array(ComputationTopologySchema)
      .exactOptional()
      .openapi({ description: 'The computations associated with a streaming Dataflow job.' }),
    dataDiskAssignments: z
      .array(DataDiskAssignmentSchema)
      .exactOptional()
      .openapi({ description: 'The disks assigned to a streaming Dataflow job.' }),
    forwardingKeyBits: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The size (in bits) of keys that will be assigned to source messages.',
      }),
    persistentStateVersion: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Version number for persistent state.' }),
    userStageToComputationNameMap: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Maps user stage names to stable computation names.' }),
  })
  .openapi({
    description:
      'Global topology of the streaming Dataflow job, including all computations and their sharded locations.',
    required: [],
  })
  .openapi('TopologyConfig')

const StreamingSetupTaskSchema = z
  .object({
    drain: z.boolean().exactOptional().openapi({ description: 'The user has requested drain.' }),
    receiveWorkPort: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The TCP port on which the worker should listen for messages from other streaming computation workers.',
      }),
    snapshotConfig: StreamingApplianceSnapshotConfigSchema.exactOptional().openapi({
      description: 'Configures streaming appliance snapshot.',
    }),
    streamingComputationTopology: TopologyConfigSchema.exactOptional().openapi({
      description: 'The global topology of the streaming Dataflow job.',
    }),
    workerHarnessPort: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The TCP port used by the worker to communicate with the Dataflow worker harness.',
      }),
  })
  .openapi({
    description: 'A task which initializes part of a streaming Dataflow job.',
    required: [],
  })
  .openapi('StreamingSetupTask')

const WorkItemSchema = z
  .object({
    configuration: z
      .string()
      .exactOptional()
      .openapi({ description: 'Work item-specific configuration as an opaque blob.' }),
    id: z.string().exactOptional().openapi({ description: 'Identifies this WorkItem.' }),
    initialReportIndex: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The initial index to use when reporting the status of the WorkItem.',
      }),
    jobId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifies the workflow job this WorkItem belongs to.' }),
    leaseExpireTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time when the lease on this Work will expire.' }),
    mapTask: MapTaskSchema.exactOptional().openapi({
      description: 'Additional information for MapTask WorkItems.',
    }),
    packages: z
      .array(PackageSchema)
      .exactOptional()
      .openapi({
        description:
          'Any required packages that need to be fetched in order to execute this WorkItem.',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifies the cloud project this WorkItem belongs to.' }),
    reportStatusInterval: z
      .string()
      .exactOptional()
      .openapi({ description: 'Recommended reporting interval.' }),
    seqMapTask: SeqMapTaskSchema.exactOptional().openapi({
      description: 'Additional information for SeqMapTask WorkItems.',
    }),
    shellTask: ShellTaskSchema.exactOptional().openapi({
      description: 'Additional information for ShellTask WorkItems.',
    }),
    sourceOperationTask: SourceOperationRequestSchema.exactOptional().openapi({
      description: 'Additional information for source operation WorkItems.',
    }),
    streamingComputationTask: StreamingComputationTaskSchema.exactOptional().openapi({
      description: 'Additional information for StreamingComputationTask WorkItems.',
    }),
    streamingConfigTask: StreamingConfigTaskSchema.exactOptional().openapi({
      description: 'Additional information for StreamingConfigTask WorkItems.',
    }),
    streamingSetupTask: StreamingSetupTaskSchema.exactOptional().openapi({
      description: 'Additional information for StreamingSetupTask WorkItems.',
    }),
  })
  .openapi({
    description:
      'WorkItem represents basic information about a WorkItem to be executed in the cloud.',
    required: [],
  })
  .openapi('WorkItem')

const LeaseWorkItemResponseSchema = z
  .object({
    unifiedWorkerResponse: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({ description: 'Untranslated bag-of-bytes WorkResponse for UnifiedWorker.' }),
    workItems: z
      .array(WorkItemSchema)
      .exactOptional()
      .openapi({ description: 'A list of the leased WorkItems.' }),
  })
  .openapi({ description: 'Response to a request to lease WorkItems.', required: [] })
  .openapi('LeaseWorkItemResponse')

const ListJobMessagesResponseSchema = z
  .object({
    autoscalingEvents: z
      .array(AutoscalingEventSchema)
      .exactOptional()
      .openapi({ description: 'Autoscaling events in ascending timestamp order.' }),
    jobMessages: z
      .array(JobMessageSchema)
      .exactOptional()
      .openapi({ description: 'Messages in ascending timestamp order.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The token to obtain the next page of results if there are more.' }),
  })
  .openapi({ description: 'Response to a request to list job messages.', required: [] })
  .openapi('ListJobMessagesResponse')

const ListJobsResponseSchema = z
  .object({
    failedLocation: z
      .array(FailedLocationSchema)
      .exactOptional()
      .openapi({
        description:
          'Zero or more messages describing the [regional endpoints] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that failed to respond.',
      }),
    jobs: z
      .array(JobSchema)
      .exactOptional()
      .openapi({ description: 'A subset of the requested job information.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Set if there may be more results than fit in this response.' }),
  })
  .openapi({
    description:
      "Response to a request to list Cloud Dataflow jobs in a project. This might be a partial response, depending on the page size in the ListJobsRequest. However, if the project does not have any jobs, an instance of ListJobsResponse is not returned and the requests's response body is empty {}.",
    required: [],
  })
  .openapi('ListJobsResponse')

const PubsubSnapshotMetadataSchema = z
  .object({
    expireTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The expire time of the Pubsub snapshot.' }),
    snapshotName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the Pubsub snapshot.' }),
    topicName: z.string().exactOptional().openapi({ description: 'The name of the Pubsub topic.' }),
  })
  .openapi({ description: 'Represents a Pubsub snapshot.', required: [] })
  .openapi('PubsubSnapshotMetadata')

const SnapshotSchema = z
  .object({
    creationTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time this snapshot was created.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'User specified description of the snapshot. Maybe empty.' }),
    diskSizeBytes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The disk byte size of the snapshot. Only available for snapshots in READY state.',
      }),
    id: z.string().exactOptional().openapi({ description: 'The unique ID of this snapshot.' }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The project this snapshot belongs to.' }),
    pubsubMetadata: z
      .array(PubsubSnapshotMetadataSchema)
      .exactOptional()
      .openapi({ description: 'Pub/Sub snapshot metadata.' }),
    region: z
      .string()
      .exactOptional()
      .openapi({ description: 'Cloud region where this snapshot lives in, e.g., "us-central1".' }),
    sourceJobId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The job this snapshot was created from.' }),
    state: z
      .enum(['UNKNOWN_SNAPSHOT_STATE', 'PENDING', 'RUNNING', 'READY', 'FAILED', 'DELETED'])
      .exactOptional()
      .openapi({ description: 'State of the snapshot.' }),
    ttl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The time after which this snapshot will be automatically deleted.',
      }),
  })
  .openapi({ description: 'Represents a snapshot of a job.', required: [] })
  .openapi('Snapshot')

const ListSnapshotsResponseSchema = z
  .object({
    snapshots: z
      .array(SnapshotSchema)
      .exactOptional()
      .openapi({ description: 'Returned snapshots.' }),
  })
  .openapi({ description: 'List of snapshots.', required: [] })
  .openapi('ListSnapshotsResponse')

const MetricShortIdSchema = z
  .object({
    metricIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The index of the corresponding metric in the ReportWorkItemStatusRequest. Required.',
      }),
    shortId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The service-generated short identifier for the metric.' }),
  })
  .openapi({
    description:
      'The metric short id is returned to the user alongside an offset into ReportWorkItemStatusRequest',
    required: [],
  })
  .openapi('MetricShortId')

const SourceSplitShardSchema = z
  .object({
    derivationMode: z
      .enum([
        'SOURCE_DERIVATION_MODE_UNKNOWN',
        'SOURCE_DERIVATION_MODE_INDEPENDENT',
        'SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT',
        'SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT',
      ])
      .exactOptional()
      .openapi({ description: 'DEPRECATED' }),
    source: SourceSchema.exactOptional().openapi({ description: 'DEPRECATED' }),
  })
  .openapi({ description: 'DEPRECATED in favor of DerivedSource.', required: [] })
  .openapi('SourceSplitShard')

const SourceForkSchema = z
  .object({
    primary: SourceSplitShardSchema.exactOptional().openapi({ description: 'DEPRECATED' }),
    primarySource: DerivedSourceSchema.exactOptional().openapi({ description: 'DEPRECATED' }),
    residual: SourceSplitShardSchema.exactOptional().openapi({ description: 'DEPRECATED' }),
    residualSource: DerivedSourceSchema.exactOptional().openapi({ description: 'DEPRECATED' }),
  })
  .openapi({ description: 'DEPRECATED in favor of DynamicSourceSplit.', required: [] })
  .openapi('SourceFork')

const SourceGetMetadataResponseSchema = z
  .object({
    metadata: SourceMetadataSchema.exactOptional().openapi({
      description: 'The computed metadata.',
    }),
  })
  .openapi({ description: 'The result of a SourceGetMetadataOperation.', required: [] })
  .openapi('SourceGetMetadataResponse')

const SourceSplitResponseSchema = z
  .object({
    bundles: z
      .array(DerivedSourceSchema)
      .exactOptional()
      .openapi({
        description:
          'If outcome is SPLITTING_HAPPENED, then this is a list of bundles into which the source was split. Otherwise this field is ignored. This list can be empty, which means the source represents an empty input.',
      }),
    outcome: z
      .enum([
        'SOURCE_SPLIT_OUTCOME_UNKNOWN',
        'SOURCE_SPLIT_OUTCOME_USE_CURRENT',
        'SOURCE_SPLIT_OUTCOME_SPLITTING_HAPPENED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Indicates whether splitting happened and produced a list of bundles. If this is USE_CURRENT_SOURCE_AS_IS, the current source should be processed "as is" without splitting. "bundles" is ignored in this case. If this is SPLITTING_HAPPENED, then "bundles" contains a list of bundles into which the source was split.',
      }),
    shards: z
      .array(SourceSplitShardSchema)
      .exactOptional()
      .openapi({ description: 'DEPRECATED in favor of bundles.' }),
  })
  .openapi({ description: 'The response to a SourceSplitRequest.', required: [] })
  .openapi('SourceSplitResponse')

const SourceOperationResponseSchema = z
  .object({
    getMetadata: SourceGetMetadataResponseSchema.exactOptional().openapi({
      description: 'A response to a request to get metadata about a source.',
    }),
    split: SourceSplitResponseSchema.exactOptional().openapi({
      description: 'A response to a request to split a source.',
    }),
  })
  .openapi({
    description:
      'The result of a SourceOperationRequest, specified in ReportWorkItemStatusRequest.source_operation when the work item is completed.',
    required: [],
  })
  .openapi('SourceOperationResponse')

const WorkItemStatusSchema = z
  .object({
    completed: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'True if the WorkItem was completed (successfully or unsuccessfully).',
      }),
    counterUpdates: z
      .array(CounterUpdateSchema)
      .exactOptional()
      .openapi({ description: 'Worker output counters for this WorkItem.' }),
    dynamicSourceSplit: DynamicSourceSplitSchema.exactOptional().openapi({
      description: 'See documentation of stop_position.',
    }),
    errors: z
      .array(StatusSchema)
      .exactOptional()
      .openapi({
        description:
          'Specifies errors which occurred during processing. If errors are provided, and completed = true, then the WorkItem is considered to have failed.',
      }),
    metricUpdates: z
      .array(MetricUpdateSchema)
      .exactOptional()
      .openapi({ description: 'DEPRECATED in favor of counter_updates.' }),
    progress: ApproximateProgressSchema.exactOptional().openapi({
      description: 'DEPRECATED in favor of reported_progress.',
    }),
    reportIndex: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The report index. When a WorkItem is leased, the lease will contain an initial report index. When a WorkItem's status is reported to the system, the report should be sent with that report index, and the response will contain the index the worker should use for the next report. Reports received with unexpected index values will be rejected by the service. In order to preserve idempotency, the worker should not alter the contents of a report, even if the worker must submit the same report multiple times before getting back a response. The worker should not submit a subsequent report until the response for the previous report had been received from the service.",
      }),
    reportedProgress: ApproximateReportedProgressSchema.exactOptional().openapi({
      description: "The worker's progress through this WorkItem.",
    }),
    requestedLeaseDuration: z
      .string()
      .exactOptional()
      .openapi({ description: 'Amount of time the worker requests for its lease.' }),
    sourceFork: SourceForkSchema.exactOptional().openapi({
      description: 'DEPRECATED in favor of dynamic_source_split.',
    }),
    sourceOperationResponse: SourceOperationResponseSchema.exactOptional().openapi({
      description:
        'If the work item represented a SourceOperationRequest, and the work is completed, contains the result of the operation.',
    }),
    stopPosition: PositionSchema.exactOptional().openapi({
      description:
        'A worker may split an active map task in two parts, "primary" and "residual", continuing to process the primary part and returning the residual part into the pool of available work. This event is called a "dynamic split" and is critical to the dynamic work rebalancing feature. The two obtained sub-tasks are called "parts" of the split. The parts, if concatenated, must represent the same input as would be read by the current task if the split did not happen. The exact way in which the original task is decomposed into the two parts is specified either as a position demarcating them (stop_position), or explicitly as two DerivedSources, if this task consumes a user-defined source type (dynamic_source_split). The "current" task is adjusted as a result of the split: after a task with range [A, B) sends a stop_position update at C, its range is considered to be [A, C), e.g.: * Progress should be interpreted relative to the new range, e.g. "75% completed" means "75% of [A, C) completed" * The worker should interpret proposed_stop_position relative to the new range, e.g. "split at 68%" should be interpreted as "split at 68% of [A, C)". * If the worker chooses to split again using stop_position, only stop_positions in [A, C) will be accepted. * Etc. dynamic_source_split has similar semantics: e.g., if a task with source S splits using dynamic_source_split into {P, R} (where P and R must be together equivalent to S), then subsequent progress and proposed_stop_position should be interpreted relative to P, and in a potential subsequent dynamic_source_split into {P\', R\'}, P\' and R\' must be together equivalent to P, etc.',
    }),
    totalThrottlerWaitTimeSeconds: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total time the worker spent being throttled by external systems.' }),
    workItemId: z.string().exactOptional().openapi({ description: 'Identifies the WorkItem.' }),
  })
  .openapi({
    description: "Conveys a worker's progress through the work described by a WorkItem.",
    required: [],
  })
  .openapi('WorkItemStatus')

const ReportWorkItemStatusRequestSchema = z
  .object({
    currentWorkerTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The current timestamp at the worker.' }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job.",
      }),
    unifiedWorkerRequest: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description: 'Untranslated bag-of-bytes WorkProgressUpdateRequest from UnifiedWorker.',
      }),
    workItemStatuses: z
      .array(WorkItemStatusSchema)
      .exactOptional()
      .openapi({
        description:
          'The order is unimportant, except that the order of the WorkItemServiceState messages in the ReportWorkItemStatusResponse corresponds to the order of WorkItemStatus messages here.',
      }),
    workerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the worker reporting the WorkItem status. If this does not match the ID of the worker which the Dataflow service believes currently has the lease on the WorkItem, the report will be dropped (with an error response).',
      }),
  })
  .openapi({ description: 'Request to report the status of WorkItems.', required: [] })
  .openapi('ReportWorkItemStatusRequest')

const WorkItemServiceStateSchema = z
  .object({
    completeWorkStatus: StatusSchema.exactOptional().openapi({
      description:
        'If set, a request to complete the work item with the given status. This will not be set to OK, unless supported by the specific kind of WorkItem. It can be used for the backend to indicate a WorkItem must terminate, e.g., for aborting work.',
    }),
    harnessData: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({
        description:
          'Other data returned by the service, specific to the particular worker harness.',
      }),
    hotKeyDetection: HotKeyDetectionSchema.exactOptional().openapi({
      description:
        'A hot key is a symptom of poor data distribution in which there are enough elements mapped to a single key to impact pipeline performance. When present, this field includes metadata associated with any hot key.',
    }),
    leaseExpireTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time at which the current lease will expire.' }),
    metricShortId: z
      .array(MetricShortIdSchema)
      .exactOptional()
      .openapi({
        description:
          'The short ids that workers should use in subsequent metric updates. Workers should strive to use short ids whenever possible, but it is ok to request the short_id again if a worker lost track of it (e.g. if the worker is recovering from a crash). NOTE: it is possible that the response may have short ids for a subset of the metrics.',
      }),
    nextReportIndex: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The index value to use for the next report sent by the worker. Note: If the report call fails for whatever reason, the worker should reuse this index for subsequent report attempts.',
      }),
    reportStatusInterval: z
      .string()
      .exactOptional()
      .openapi({ description: 'New recommended reporting interval.' }),
    splitRequest: ApproximateSplitRequestSchema.exactOptional().openapi({
      description:
        'The progress point in the WorkItem where the Dataflow service suggests that the worker truncate the task.',
    }),
    suggestedStopPoint: ApproximateProgressSchema.exactOptional().openapi({
      description: 'DEPRECATED in favor of split_request.',
    }),
    suggestedStopPosition: PositionSchema.exactOptional().openapi({
      description: 'Obsolete, always empty.',
    }),
  })
  .openapi({
    description:
      "The Dataflow service's idea of the current state of a WorkItem being processed by a worker.",
    required: [],
  })
  .openapi('WorkItemServiceState')

const ReportWorkItemStatusResponseSchema = z
  .object({
    unifiedWorkerResponse: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description: 'Untranslated bag-of-bytes WorkProgressUpdateResponse for UnifiedWorker.',
      }),
    workItemServiceStates: z
      .array(WorkItemServiceStateSchema)
      .exactOptional()
      .openapi({
        description:
          'A set of messages indicating the service-side state for each WorkItem whose status was reported, in the same order as the WorkItemStatus messages in the ReportWorkItemStatusRequest which resulting in this response.',
      }),
  })
  .openapi({
    description: 'Response from a request to report the status of WorkItems.',
    required: [],
  })
  .openapi('ReportWorkItemStatusResponse')

const ResourceUtilizationReportSchema: z.ZodType<ResourceUtilizationReportType> = z
  .lazy(() =>
    z
      .object({
        containers: z
          .record(z.string(), ResourceUtilizationReportSchema)
          .exactOptional()
          .openapi({ description: 'Per container information. Key: container name.' }),
        cpuTime: z
          .array(CPUTimeSchema)
          .exactOptional()
          .openapi({ description: 'CPU utilization samples.' }),
        memoryInfo: z
          .array(MemInfoSchema)
          .exactOptional()
          .openapi({ description: 'Memory utilization samples.' }),
      })
      .openapi({
        description:
          'Worker metrics exported from workers. This contains resource utilization metrics accumulated from a variety of sources. For more information, see go/df-resource-signals.',
        required: [],
      }),
  )
  .openapi('ResourceUtilizationReport')

const ResourceUtilizationReportResponseSchema = z
  .object({})
  .openapi({
    description: 'Service-side response to WorkerMessage reporting resource utilization.',
  })
  .openapi('ResourceUtilizationReportResponse')

const SendDebugCaptureRequestSchema = z
  .object({
    componentId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The internal component id for which debug information is sent.' }),
    data: z.string().exactOptional().openapi({ description: 'The encoded debug information.' }),
    dataFormat: z
      .enum(['DATA_FORMAT_UNSPECIFIED', 'RAW', 'JSON', 'ZLIB', 'BROTLI'])
      .exactOptional()
      .openapi({ description: 'Format for the data field above (id=5).' }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.',
      }),
    workerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The worker id, i.e., VM hostname.' }),
  })
  .openapi({ description: 'Request to send encoded debug information. Next ID: 8', required: [] })
  .openapi('SendDebugCaptureRequest')

const SendDebugCaptureResponseSchema = z
  .object({})
  .openapi({ description: 'Response to a send capture request. nothing' })
  .openapi('SendDebugCaptureResponse')

const WorkerHealthReportSchema = z
  .object({
    msg: z
      .string()
      .exactOptional()
      .openapi({ description: 'Message describing any unusual health reports.' }),
    pods: z
      .array(z.record(z.string(), z.any().openapi({ description: 'Properties of the object.' })))
      .exactOptional()
      .openapi({
        description:
          'The pods running on the worker. See: http://kubernetes.io/v1.1/docs/api-reference/v1/definitions.html#_v1_pod This field is used by the worker to send the status of the indvidual containers running on each worker.',
      }),
    reportInterval: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The interval at which the worker is sending health reports. The default value of 0 should be interpreted as the field is not being explicitly set by the worker.',
      }),
    vmBrokenCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Code to describe a specific reason, if known, that a VM has reported broken state.',
      }),
    vmIsBroken: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the VM is in a permanently broken state. Broken VMs should be abandoned or deleted ASAP to avoid assigning or completing any work.',
      }),
    vmIsHealthy: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the VM is currently healthy.' }),
    vmStartupTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the VM was booted.' }),
  })
  .openapi({
    description:
      'WorkerHealthReport contains information about the health of a worker. The VM should be identified by the labels attached to the WorkerMessage that this health ping belongs to.',
    required: [],
  })
  .openapi('WorkerHealthReport')

const WorkerLifecycleEventSchema = z
  .object({
    containerStartTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The start time of this container. All events will report this so that events can be grouped together across container/VM restarts.',
      }),
    event: z
      .enum([
        'UNKNOWN_EVENT',
        'OS_START',
        'CONTAINER_START',
        'NETWORK_UP',
        'STAGING_FILES_DOWNLOAD_START',
        'STAGING_FILES_DOWNLOAD_FINISH',
        'SDK_INSTALL_START',
        'SDK_INSTALL_FINISH',
      ])
      .exactOptional()
      .openapi({ description: 'The event being reported.' }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Other stats that can accompany an event. E.g. { "downloaded_bytes" : "123456" }',
      }),
  })
  .openapi({
    description:
      "A report of an event in a worker's lifecycle. The proto contains one event, because the worker is expected to asynchronously send each message immediately after the event. Due to this asynchrony, messages may arrive out of order (or missing), and it is up to the consumer to interpret. The timestamp of the event is in the enclosing WorkerMessage proto.",
    required: [],
  })
  .openapi('WorkerLifecycleEvent')

const WorkerMessageCodeSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The code is a string intended for consumption by a machine that identifies the type of message being sent. Examples: 1. "HARNESS_STARTED" might be used to indicate the worker harness has started. 2. "GCS_DOWNLOAD_ERROR" might be used to indicate an error downloading a Cloud Storage file as part of the boot process of one of the worker containers. This is a string and not an enum to make it easy to add new codes without waiting for an API change.',
      }),
    parameters: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({
        description:
          'Parameters contains specific information about the code. This is a struct to allow parameters of different types. Examples: 1. For a "HARNESS_STARTED" message parameters might provide the name of the worker and additional data like timing information. 2. For a "GCS_DOWNLOAD_ERROR" parameters might contain fields listing the Cloud Storage objects being downloaded and fields containing errors. In general complex data structures should be avoided. If a worker needs to send a specific and complicated data structure then please consider defining a new proto and adding it to the data oneof in WorkerMessageResponse. Conventions: Parameters should only be used for information that isn\'t typically passed as a label. hostname and other worker identifiers should almost always be passed as labels since they will be included on most messages.',
      }),
  })
  .openapi({
    description:
      'A message code is used to report status and error messages to the service. The message codes are intended to be machine readable. The service will take care of translating these into user understandable messages if necessary. Example use cases: 1. Worker processes reporting successful startup. 2. Worker processes reporting specific errors (e.g. package staging failure).',
    required: [],
  })
  .openapi('WorkerMessageCode')

const WorkerShutdownNoticeSchema = z
  .object({
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reason for the worker shutdown. Current possible values are: "UNKNOWN": shutdown reason is unknown. "PREEMPTION": shutdown reason is preemption. Other possible reasons may be added in the future.',
      }),
  })
  .openapi({
    description:
      'Shutdown notification from workers. This is to be sent by the shutdown script of the worker VM so that the backend knows that the VM is being shut down.',
    required: [],
  })
  .openapi('WorkerShutdownNotice')

const WorkerThreadScalingReportSchema = z
  .object({
    currentThreadCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Current number of active threads in a worker.' }),
  })
  .openapi({
    description: 'Contains information about the thread scaling information of a worker.',
    required: [],
  })
  .openapi('WorkerThreadScalingReport')

const WorkerMessageSchema = z
  .object({
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Labels are used to group WorkerMessages. For example, a worker_message about a particular container might have the labels: { "JOB_ID": "2015-04-22", "WORKER_ID": "wordcount-vm-2015…" "CONTAINER_TYPE": "worker", "CONTAINER_ID": "ac1234def"} Label tags typically correspond to Label enum values. However, for ease of development other strings can be used as tags. LABEL_UNSPECIFIED should not be used here.',
      }),
    time: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timestamp of the worker_message.' }),
    workerHealthReport: WorkerHealthReportSchema.exactOptional().openapi({
      description: 'The health of a worker.',
    }),
    workerLifecycleEvent: WorkerLifecycleEventSchema.exactOptional().openapi({
      description: 'Record of worker lifecycle events.',
    }),
    workerMessageCode: WorkerMessageCodeSchema.exactOptional().openapi({
      description: 'A worker message code.',
    }),
    workerMetrics: ResourceUtilizationReportSchema.exactOptional().openapi({
      description: 'Resource metrics reported by workers.',
    }),
    workerShutdownNotice: WorkerShutdownNoticeSchema.exactOptional().openapi({
      description: 'Shutdown notice by workers.',
    }),
    workerThreadScalingReport: WorkerThreadScalingReportSchema.exactOptional().openapi({
      description: 'Thread scaling information reported by workers.',
    }),
  })
  .openapi({
    description: 'WorkerMessage provides information to the backend about a worker.',
    required: [],
  })
  .openapi('WorkerMessage')

const SendWorkerMessagesRequestSchema = z
  .object({
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job.',
      }),
    workerMessages: z
      .array(WorkerMessageSchema)
      .exactOptional()
      .openapi({ description: 'The WorkerMessages to send.' }),
  })
  .openapi({ description: 'A request for sending worker messages to the service.', required: [] })
  .openapi('SendWorkerMessagesRequest')

const WorkerHealthReportResponseSchema = z
  .object({
    reportInterval: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A positive value indicates the worker should change its reporting interval to the specified value. The default value of zero means no change in report rate is requested by the server.',
      }),
  })
  .openapi({
    description:
      'WorkerHealthReportResponse contains information returned to the worker in response to a health ping.',
    required: [],
  })
  .openapi('WorkerHealthReportResponse')

const WorkerShutdownNoticeResponseSchema = z
  .object({})
  .openapi({ description: 'Service-side response to WorkerMessage issuing shutdown notice.' })
  .openapi('WorkerShutdownNoticeResponse')

const WorkerThreadScalingReportResponseSchema = z
  .object({
    recommendedThreadCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Recommended number of threads for a worker.' }),
  })
  .openapi({
    description: 'Contains the thread scaling recommendation for a worker from the backend.',
    required: [],
  })
  .openapi('WorkerThreadScalingReportResponse')

const WorkerMessageResponseSchema = z
  .object({
    workerHealthReportResponse: WorkerHealthReportResponseSchema.exactOptional().openapi({
      description: "The service's response to a worker's health report.",
    }),
    workerMetricsResponse: ResourceUtilizationReportResponseSchema.exactOptional().openapi({
      description: "Service's response to reporting worker metrics (currently empty).",
    }),
    workerShutdownNoticeResponse: WorkerShutdownNoticeResponseSchema.exactOptional().openapi({
      description: "Service's response to shutdown notice (currently empty).",
    }),
    workerThreadScalingReportResponse:
      WorkerThreadScalingReportResponseSchema.exactOptional().openapi({
        description: "Service's thread scaling recommendation for workers.",
      }),
  })
  .openapi({
    description: 'A worker_message response allows the server to pass information to the sender.',
    required: [],
  })
  .openapi('WorkerMessageResponse')

const SendWorkerMessagesResponseSchema = z
  .object({
    workerMessageResponses: z
      .array(WorkerMessageResponseSchema)
      .exactOptional()
      .openapi({ description: 'The servers response to the worker messages.' }),
  })
  .openapi({ description: 'The response to the worker messages.', required: [] })
  .openapi('SendWorkerMessagesResponse')

const SnapshotJobRequestSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'User specified description of the snapshot. Maybe empty.' }),
    location: z
      .string()
      .exactOptional()
      .openapi({ description: 'The location that contains this job.' }),
    snapshotSources: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, perform snapshots for sources which support this.' }),
    ttl: z.string().exactOptional().openapi({ description: 'TTL for the snapshot.' }),
  })
  .openapi({ description: 'Request to create a snapshot of a job.', required: [] })
  .openapi('SnapshotJobRequest')

const WorkItemDetailsSchema = z
  .object({
    attemptId: z.string().exactOptional().openapi({ description: 'Attempt ID of this work item' }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'End time of this work item attempt. If the work item is completed, this is the actual end time of the work item. Otherwise, it is the predicted end time.',
      }),
    metrics: z
      .array(MetricUpdateSchema)
      .exactOptional()
      .openapi({ description: 'Metrics for this work item.' }),
    progress: ProgressTimeseriesSchema.exactOptional().openapi({
      description: 'Progress of this work item.',
    }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Start time of this work item attempt.' }),
    state: z
      .enum([
        'EXECUTION_STATE_UNKNOWN',
        'EXECUTION_STATE_NOT_STARTED',
        'EXECUTION_STATE_RUNNING',
        'EXECUTION_STATE_SUCCEEDED',
        'EXECUTION_STATE_FAILED',
        'EXECUTION_STATE_CANCELLED',
      ])
      .exactOptional()
      .openapi({ description: 'State of this work item.' }),
    stragglerInfo: StragglerInfoSchema.exactOptional().openapi({
      description: 'Information about straggler detections for this work item.',
    }),
    taskId: z.string().exactOptional().openapi({ description: 'Name of this work item.' }),
  })
  .openapi({ description: 'Information about an individual work item execution.', required: [] })
  .openapi('WorkItemDetails')

const WorkerDetailsSchema = z
  .object({
    workItems: z
      .array(WorkItemDetailsSchema)
      .exactOptional()
      .openapi({ description: 'Work items processed by this worker, sorted by time.' }),
    workerName: z.string().exactOptional().openapi({ description: 'Name of this worker' }),
  })
  .openapi({ description: 'Information about a worker', required: [] })
  .openapi('WorkerDetails')

const StageExecutionDetailsSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If present, this response does not contain all requested tasks. To obtain the next page of results, repeat the request with page_token set to this value.',
      }),
    workers: z
      .array(WorkerDetailsSchema)
      .exactOptional()
      .openapi({ description: 'Workers that have done work on the stage.' }),
  })
  .openapi({
    description: 'Information about the workers and work items within a stage.',
    required: [],
  })
  .openapi('StageExecutionDetails')

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
        'https://www.googleapis.com/auth/compute':
          'View and manage your Google Compute Engine resources',
        'https://www.googleapis.com/auth/compute.readonly':
          'View your Google Compute Engine resources',
        'https://www.googleapis.com/auth/userinfo.email':
          'See your primary Google Account email address',
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
        'https://www.googleapis.com/auth/compute':
          'View and manage your Google Compute Engine resources',
        'https://www.googleapis.com/auth/compute.readonly':
          'View your Google Compute Engine resources',
        'https://www.googleapis.com/auth/userinfo.email':
          'See your primary Google Account email address',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postV1b3ProjectsProjectIdWorkerMessagesRoute = createRoute({
  method: 'post',
  path: '/v1b3/projects/{projectId}/WorkerMessages',
  tags: ['projects'],
  description: 'Send a worker_message to the service.',
  operationId: 'dataflow.projects.workerMessages',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The project to send the WorkerMessages to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SendWorkerMessagesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SendWorkerMessagesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const getV1b3ProjectsProjectIdJobsRoute = createRoute({
  method: 'get',
  path: '/v1b3/projects/{projectId}/jobs',
  tags: ['projects'],
  description:
    'List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, as you can only get the list of jobs that are running in `us-central1`.',
  operationId: 'dataflow.projects.jobs.list',
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
        .enum(['UNKNOWN', 'ALL', 'TERMINATED', 'ACTIVE'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The kind of filter to use.',
            in: 'query',
            name: 'filter',
            schema: { enum: ['UNKNOWN', 'ALL', 'TERMINATED', 'ACTIVE'], type: 'string' },
            required: false,
          },
        }),
      location: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.',
            in: 'query',
            name: 'location',
            schema: { type: 'string' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The job name. Optional.',
            in: 'query',
            name: 'name',
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
              'If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit.',
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
              "Set this to the 'next_page_token' field of a previous response to request additional results in a long list.",
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum(['JOB_VIEW_UNKNOWN', 'JOB_VIEW_SUMMARY', 'JOB_VIEW_ALL', 'JOB_VIEW_DESCRIPTION'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Deprecated. ListJobs always returns summaries now. Use GetJob for other JobViews.',
            in: 'query',
            name: 'view',
            schema: {
              enum: [
                'JOB_VIEW_UNKNOWN',
                'JOB_VIEW_SUMMARY',
                'JOB_VIEW_ALL',
                'JOB_VIEW_DESCRIPTION',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The project which owns the jobs.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListJobsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const postV1b3ProjectsProjectIdJobsRoute = createRoute({
  method: 'post',
  path: '/v1b3/projects/{projectId}/jobs',
  tags: ['projects'],
  description:
    'Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.',
  operationId: 'dataflow.projects.jobs.create',
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
      location: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.',
            in: 'query',
            name: 'location',
            schema: { type: 'string' },
            required: false,
          },
        }),
      replaceJobId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deprecated. This field is now in the Job message.',
            in: 'query',
            name: 'replaceJobId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum(['JOB_VIEW_UNKNOWN', 'JOB_VIEW_SUMMARY', 'JOB_VIEW_ALL', 'JOB_VIEW_DESCRIPTION'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The level of information requested in response.',
            in: 'query',
            name: 'view',
            schema: {
              enum: [
                'JOB_VIEW_UNKNOWN',
                'JOB_VIEW_SUMMARY',
                'JOB_VIEW_ALL',
                'JOB_VIEW_DESCRIPTION',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the Cloud Platform project that the job belongs to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: JobSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: JobSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const getV1b3ProjectsProjectIdJobsJobIdRoute = createRoute({
  method: 'get',
  path: '/v1b3/projects/{projectId}/jobs/{jobId}',
  tags: ['projects'],
  description:
    'Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.',
  operationId: 'dataflow.projects.jobs.get',
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
      location: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.',
            in: 'query',
            name: 'location',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum(['JOB_VIEW_UNKNOWN', 'JOB_VIEW_SUMMARY', 'JOB_VIEW_ALL', 'JOB_VIEW_DESCRIPTION'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The level of information requested in response.',
            in: 'query',
            name: 'view',
            schema: {
              enum: [
                'JOB_VIEW_UNKNOWN',
                'JOB_VIEW_SUMMARY',
                'JOB_VIEW_ALL',
                'JOB_VIEW_DESCRIPTION',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the Cloud Platform project that the job belongs to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            description: 'The job ID.',
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: JobSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const putV1b3ProjectsProjectIdJobsJobIdRoute = createRoute({
  method: 'put',
  path: '/v1b3/projects/{projectId}/jobs/{jobId}',
  tags: ['projects'],
  description:
    'Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.',
  operationId: 'dataflow.projects.jobs.update',
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
      location: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.',
            in: 'query',
            name: 'location',
            schema: { type: 'string' },
            required: false,
          },
        }),
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The list of fields to update relative to Job. If empty, only RequestedJobState will be considered for update. If the FieldMask is not empty and RequestedJobState is none/empty, The fields specified in the update mask will be the only ones considered for update. If both RequestedJobState and update_mask are specified, we will first handle RequestedJobState and then the update_mask fields.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the Cloud Platform project that the job belongs to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            description: 'The job ID.',
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: JobSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: JobSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const postV1b3ProjectsProjectIdJobsJobIdDebugGetConfigRoute = createRoute({
  method: 'post',
  path: '/v1b3/projects/{projectId}/jobs/{jobId}/debug/getConfig',
  tags: ['projects'],
  description: 'Get encoded debug configuration for component. Not cacheable.',
  operationId: 'dataflow.projects.jobs.debug.getConfig',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The project id.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            description: 'The job id.',
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetDebugConfigRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetDebugConfigResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const postV1b3ProjectsProjectIdJobsJobIdDebugSendCaptureRoute = createRoute({
  method: 'post',
  path: '/v1b3/projects/{projectId}/jobs/{jobId}/debug/sendCapture',
  tags: ['projects'],
  description: 'Send encoded debug capture data for component.',
  operationId: 'dataflow.projects.jobs.debug.sendCapture',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The project id.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            description: 'The job id.',
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SendDebugCaptureRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SendDebugCaptureResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const getV1b3ProjectsProjectIdJobsJobIdMessagesRoute = createRoute({
  method: 'get',
  path: '/v1b3/projects/{projectId}/jobs/{jobId}/messages',
  tags: ['projects'],
  description:
    'Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.',
  operationId: 'dataflow.projects.jobs.messages.list',
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
      endTime: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Return only messages with timestamps < end_time. The default is now (i.e. return up to the latest messages available).',
            in: 'query',
            name: 'endTime',
            schema: { type: 'string' },
            required: false,
          },
        }),
      location: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.',
            in: 'query',
            name: 'location',
            schema: { type: 'string' },
            required: false,
          },
        }),
      minimumImportance: z
        .enum([
          'JOB_MESSAGE_IMPORTANCE_UNKNOWN',
          'JOB_MESSAGE_DEBUG',
          'JOB_MESSAGE_DETAILED',
          'JOB_MESSAGE_BASIC',
          'JOB_MESSAGE_WARNING',
          'JOB_MESSAGE_ERROR',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to only get messages with importance >= level',
            in: 'query',
            name: 'minimumImportance',
            schema: {
              enum: [
                'JOB_MESSAGE_IMPORTANCE_UNKNOWN',
                'JOB_MESSAGE_DEBUG',
                'JOB_MESSAGE_DETAILED',
                'JOB_MESSAGE_BASIC',
                'JOB_MESSAGE_WARNING',
                'JOB_MESSAGE_ERROR',
              ],
              type: 'string',
            },
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
              'If specified, determines the maximum number of messages to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results.',
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
              'If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      startTime: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If specified, return only messages with timestamps >= start_time. The default is the job creation time (i.e. beginning of messages).',
            in: 'query',
            name: 'startTime',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'A project id.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            description: 'The job to get messages about.',
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListJobMessagesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const getV1b3ProjectsProjectIdJobsJobIdMetricsRoute = createRoute({
  method: 'get',
  path: '/v1b3/projects/{projectId}/jobs/{jobId}/metrics',
  tags: ['projects'],
  description:
    'Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.',
  operationId: 'dataflow.projects.jobs.getMetrics',
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
      location: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.',
            in: 'query',
            name: 'location',
            schema: { type: 'string' },
            required: false,
          },
        }),
      startTime: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Return only metric data that has changed since this time. Default is to return all information about all metrics for the job.',
            in: 'query',
            name: 'startTime',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'A project id.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            description: 'The job to get metrics for.',
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: JobMetricsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const postV1b3ProjectsProjectIdJobsJobIdWorkItemsLeaseRoute = createRoute({
  method: 'post',
  path: '/v1b3/projects/{projectId}/jobs/{jobId}/workItems:lease',
  tags: ['projects'],
  description: 'Leases a dataflow WorkItem to run.',
  operationId: 'dataflow.projects.jobs.workItems.lease',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Identifies the project this worker belongs to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            description: 'Identifies the workflow job this worker belongs to.',
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LeaseWorkItemRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LeaseWorkItemResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const postV1b3ProjectsProjectIdJobsJobIdWorkItemsReportStatusRoute = createRoute({
  method: 'post',
  path: '/v1b3/projects/{projectId}/jobs/{jobId}/workItems:reportStatus',
  tags: ['projects'],
  description: 'Reports the status of dataflow WorkItems leased by a worker.',
  operationId: 'dataflow.projects.jobs.workItems.reportStatus',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: "The project which owns the WorkItem's job.",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            description: 'The job which the WorkItem is part of.',
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReportWorkItemStatusRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReportWorkItemStatusResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const postV1b3ProjectsProjectIdJobsJobIdSnapshotRoute = createRoute({
  method: 'post',
  path: '/v1b3/projects/{projectId}/jobs/{jobId}:snapshot',
  tags: ['projects'],
  description: 'Snapshot the state of a streaming job.',
  operationId: 'dataflow.projects.jobs.snapshot',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The project which owns the job to be snapshotted.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            description: 'The job to be snapshotted.',
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SnapshotJobRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SnapshotSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const getV1b3ProjectsProjectIdJobsAggregatedRoute = createRoute({
  method: 'get',
  path: '/v1b3/projects/{projectId}/jobs:aggregated',
  tags: ['projects'],
  description: 'List the jobs of a project across all regions.',
  operationId: 'dataflow.projects.jobs.aggregated',
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
        .enum(['UNKNOWN', 'ALL', 'TERMINATED', 'ACTIVE'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The kind of filter to use.',
            in: 'query',
            name: 'filter',
            schema: { enum: ['UNKNOWN', 'ALL', 'TERMINATED', 'ACTIVE'], type: 'string' },
            required: false,
          },
        }),
      location: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.',
            in: 'query',
            name: 'location',
            schema: { type: 'string' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The job name. Optional.',
            in: 'query',
            name: 'name',
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
              'If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit.',
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
              "Set this to the 'next_page_token' field of a previous response to request additional results in a long list.",
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum(['JOB_VIEW_UNKNOWN', 'JOB_VIEW_SUMMARY', 'JOB_VIEW_ALL', 'JOB_VIEW_DESCRIPTION'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Deprecated. ListJobs always returns summaries now. Use GetJob for other JobViews.',
            in: 'query',
            name: 'view',
            schema: {
              enum: [
                'JOB_VIEW_UNKNOWN',
                'JOB_VIEW_SUMMARY',
                'JOB_VIEW_ALL',
                'JOB_VIEW_DESCRIPTION',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The project which owns the jobs.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListJobsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const postV1b3ProjectsProjectIdLocationsLocationWorkerMessagesRoute = createRoute({
  method: 'post',
  path: '/v1b3/projects/{projectId}/locations/{location}/WorkerMessages',
  tags: ['projects'],
  description: 'Send a worker_message to the service.',
  operationId: 'dataflow.projects.locations.workerMessages',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The project to send the WorkerMessages to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description:
              'The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SendWorkerMessagesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SendWorkerMessagesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const postV1b3ProjectsProjectIdLocationsLocationFlexTemplatesLaunchRoute = createRoute({
  method: 'post',
  path: '/v1b3/projects/{projectId}/locations/{location}/flexTemplates:launch',
  tags: ['projects'],
  description: 'Launch a job with a FlexTemplate.',
  operationId: 'dataflow.projects.locations.flexTemplates.launch',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the Cloud Platform project that the job belongs to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. E.g., us-central1, us-west1.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LaunchFlexTemplateRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LaunchFlexTemplateResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const getV1b3ProjectsProjectIdLocationsLocationJobsRoute = createRoute({
  method: 'get',
  path: '/v1b3/projects/{projectId}/locations/{location}/jobs',
  tags: ['projects'],
  description:
    'List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, as you can only get the list of jobs that are running in `us-central1`.',
  operationId: 'dataflow.projects.locations.jobs.list',
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
        .enum(['UNKNOWN', 'ALL', 'TERMINATED', 'ACTIVE'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The kind of filter to use.',
            in: 'query',
            name: 'filter',
            schema: { enum: ['UNKNOWN', 'ALL', 'TERMINATED', 'ACTIVE'], type: 'string' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The job name. Optional.',
            in: 'query',
            name: 'name',
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
              'If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit.',
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
              "Set this to the 'next_page_token' field of a previous response to request additional results in a long list.",
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum(['JOB_VIEW_UNKNOWN', 'JOB_VIEW_SUMMARY', 'JOB_VIEW_ALL', 'JOB_VIEW_DESCRIPTION'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Deprecated. ListJobs always returns summaries now. Use GetJob for other JobViews.',
            in: 'query',
            name: 'view',
            schema: {
              enum: [
                'JOB_VIEW_UNKNOWN',
                'JOB_VIEW_SUMMARY',
                'JOB_VIEW_ALL',
                'JOB_VIEW_DESCRIPTION',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The project which owns the jobs.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description:
              'The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListJobsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const postV1b3ProjectsProjectIdLocationsLocationJobsRoute = createRoute({
  method: 'post',
  path: '/v1b3/projects/{projectId}/locations/{location}/jobs',
  tags: ['projects'],
  description:
    'Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.',
  operationId: 'dataflow.projects.locations.jobs.create',
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
      replaceJobId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deprecated. This field is now in the Job message.',
            in: 'query',
            name: 'replaceJobId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum(['JOB_VIEW_UNKNOWN', 'JOB_VIEW_SUMMARY', 'JOB_VIEW_ALL', 'JOB_VIEW_DESCRIPTION'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The level of information requested in response.',
            in: 'query',
            name: 'view',
            schema: {
              enum: [
                'JOB_VIEW_UNKNOWN',
                'JOB_VIEW_SUMMARY',
                'JOB_VIEW_ALL',
                'JOB_VIEW_DESCRIPTION',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the Cloud Platform project that the job belongs to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description:
              'The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: JobSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: JobSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const getV1b3ProjectsProjectIdLocationsLocationJobsJobIdRoute = createRoute({
  method: 'get',
  path: '/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}',
  tags: ['projects'],
  description:
    'Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.',
  operationId: 'dataflow.projects.locations.jobs.get',
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
      view: z
        .enum(['JOB_VIEW_UNKNOWN', 'JOB_VIEW_SUMMARY', 'JOB_VIEW_ALL', 'JOB_VIEW_DESCRIPTION'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The level of information requested in response.',
            in: 'query',
            name: 'view',
            schema: {
              enum: [
                'JOB_VIEW_UNKNOWN',
                'JOB_VIEW_SUMMARY',
                'JOB_VIEW_ALL',
                'JOB_VIEW_DESCRIPTION',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the Cloud Platform project that the job belongs to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description:
              'The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            description: 'The job ID.',
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: JobSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const putV1b3ProjectsProjectIdLocationsLocationJobsJobIdRoute = createRoute({
  method: 'put',
  path: '/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}',
  tags: ['projects'],
  description:
    'Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.',
  operationId: 'dataflow.projects.locations.jobs.update',
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
            description:
              'The list of fields to update relative to Job. If empty, only RequestedJobState will be considered for update. If the FieldMask is not empty and RequestedJobState is none/empty, The fields specified in the update mask will be the only ones considered for update. If both RequestedJobState and update_mask are specified, we will first handle RequestedJobState and then the update_mask fields.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the Cloud Platform project that the job belongs to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description:
              'The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            description: 'The job ID.',
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: JobSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: JobSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const postV1b3ProjectsProjectIdLocationsLocationJobsJobIdDebugGetConfigRoute = createRoute({
  method: 'post',
  path: '/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/debug/getConfig',
  tags: ['projects'],
  description: 'Get encoded debug configuration for component. Not cacheable.',
  operationId: 'dataflow.projects.locations.jobs.debug.getConfig',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The project id.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description:
              'The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            description: 'The job id.',
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetDebugConfigRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetDebugConfigResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const postV1b3ProjectsProjectIdLocationsLocationJobsJobIdDebugSendCaptureRoute = createRoute(
  {
    method: 'post',
    path: '/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/debug/sendCapture',
    tags: ['projects'],
    description: 'Send encoded debug capture data for component.',
    operationId: 'dataflow.projects.locations.jobs.debug.sendCapture',
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
        projectId: z
          .string()
          .openapi({
            param: {
              description: 'The project id.',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: {
              description:
                'The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.',
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        jobId: z
          .string()
          .openapi({
            param: {
              description: 'The job id.',
              in: 'path',
              name: 'jobId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: SendDebugCaptureRequestSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: SendDebugCaptureResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/compute'],
        Oauth2c: ['https://www.googleapis.com/auth/compute'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
        Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
      },
    ],
  },
)

export const getV1b3ProjectsProjectIdLocationsLocationJobsJobIdExecutionDetailsRoute = createRoute({
  method: 'get',
  path: '/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/executionDetails',
  tags: ['projects'],
  description:
    'Request detailed information about the execution status of the job. EXPERIMENTAL. This API is subject to change or removal without notice.',
  operationId: 'dataflow.projects.locations.jobs.getExecutionDetails',
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
              'If specified, determines the maximum number of stages to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results.',
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
              'If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'A project id.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description:
              'The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            description: 'The job to get execution details for.',
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: JobExecutionDetailsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const getV1b3ProjectsProjectIdLocationsLocationJobsJobIdMessagesRoute = createRoute({
  method: 'get',
  path: '/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/messages',
  tags: ['projects'],
  description:
    'Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.',
  operationId: 'dataflow.projects.locations.jobs.messages.list',
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
      endTime: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Return only messages with timestamps < end_time. The default is now (i.e. return up to the latest messages available).',
            in: 'query',
            name: 'endTime',
            schema: { type: 'string' },
            required: false,
          },
        }),
      minimumImportance: z
        .enum([
          'JOB_MESSAGE_IMPORTANCE_UNKNOWN',
          'JOB_MESSAGE_DEBUG',
          'JOB_MESSAGE_DETAILED',
          'JOB_MESSAGE_BASIC',
          'JOB_MESSAGE_WARNING',
          'JOB_MESSAGE_ERROR',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter to only get messages with importance >= level',
            in: 'query',
            name: 'minimumImportance',
            schema: {
              enum: [
                'JOB_MESSAGE_IMPORTANCE_UNKNOWN',
                'JOB_MESSAGE_DEBUG',
                'JOB_MESSAGE_DETAILED',
                'JOB_MESSAGE_BASIC',
                'JOB_MESSAGE_WARNING',
                'JOB_MESSAGE_ERROR',
              ],
              type: 'string',
            },
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
              'If specified, determines the maximum number of messages to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results.',
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
              'If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      startTime: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If specified, return only messages with timestamps >= start_time. The default is the job creation time (i.e. beginning of messages).',
            in: 'query',
            name: 'startTime',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'A project id.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description:
              'The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            description: 'The job to get messages about.',
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListJobMessagesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const getV1b3ProjectsProjectIdLocationsLocationJobsJobIdMetricsRoute = createRoute({
  method: 'get',
  path: '/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/metrics',
  tags: ['projects'],
  description:
    'Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.',
  operationId: 'dataflow.projects.locations.jobs.getMetrics',
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
      startTime: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Return only metric data that has changed since this time. Default is to return all information about all metrics for the job.',
            in: 'query',
            name: 'startTime',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'A project id.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description:
              'The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            description: 'The job to get metrics for.',
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: JobMetricsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const getV1b3ProjectsProjectIdLocationsLocationJobsJobIdSnapshotsRoute = createRoute({
  method: 'get',
  path: '/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/snapshots',
  tags: ['projects'],
  description: 'Lists snapshots.',
  operationId: 'dataflow.projects.locations.jobs.snapshots.list',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The project ID to list snapshots for.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description: 'The location to list snapshots in.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            description: 'If specified, list snapshots created from this job.',
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListSnapshotsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const getV1b3ProjectsProjectIdLocationsLocationJobsJobIdStagesStageIdExecutionDetailsRoute =
  createRoute({
    method: 'get',
    path: '/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/stages/{stageId}/executionDetails',
    tags: ['projects'],
    description:
      'Request detailed information about the execution status of a stage of the job. EXPERIMENTAL. This API is subject to change or removal without notice.',
    operationId: 'dataflow.projects.locations.jobs.stages.getExecutionDetails',
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
        endTime: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description: 'Upper time bound of work items to include, by start time.',
              in: 'query',
              name: 'endTime',
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
                'If specified, determines the maximum number of work items to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results.',
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
                'If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned.',
              in: 'query',
              name: 'pageToken',
              schema: { type: 'string' },
              required: false,
            },
          }),
        startTime: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description: 'Lower time bound of work items to include, by start time.',
              in: 'query',
              name: 'startTime',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        projectId: z
          .string()
          .openapi({
            param: {
              description: 'A project id.',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: {
              description:
                'The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.',
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        jobId: z
          .string()
          .openapi({
            param: {
              description: 'The job to get execution details for.',
              in: 'path',
              name: 'jobId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        stageId: z
          .string()
          .openapi({
            param: {
              description: 'The stage for which to fetch information.',
              in: 'path',
              name: 'stageId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: StageExecutionDetailsSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/compute'],
        Oauth2c: ['https://www.googleapis.com/auth/compute'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
        Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
      },
    ],
  })

export const postV1b3ProjectsProjectIdLocationsLocationJobsJobIdWorkItemsLeaseRoute = createRoute({
  method: 'post',
  path: '/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/workItems:lease',
  tags: ['projects'],
  description: 'Leases a dataflow WorkItem to run.',
  operationId: 'dataflow.projects.locations.jobs.workItems.lease',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Identifies the project this worker belongs to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description:
              "The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job.",
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            description: 'Identifies the workflow job this worker belongs to.',
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LeaseWorkItemRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LeaseWorkItemResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const postV1b3ProjectsProjectIdLocationsLocationJobsJobIdWorkItemsReportStatusRoute =
  createRoute({
    method: 'post',
    path: '/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/workItems:reportStatus',
    tags: ['projects'],
    description: 'Reports the status of dataflow WorkItems leased by a worker.',
    operationId: 'dataflow.projects.locations.jobs.workItems.reportStatus',
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
        projectId: z
          .string()
          .openapi({
            param: {
              description: "The project which owns the WorkItem's job.",
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: {
              description:
                "The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job.",
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        jobId: z
          .string()
          .openapi({
            param: {
              description: 'The job which the WorkItem is part of.',
              in: 'path',
              name: 'jobId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ReportWorkItemStatusRequestSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ReportWorkItemStatusResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/compute'],
        Oauth2c: ['https://www.googleapis.com/auth/compute'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
        Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
      },
    ],
  })

export const postV1b3ProjectsProjectIdLocationsLocationJobsJobIdSnapshotRoute = createRoute({
  method: 'post',
  path: '/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}:snapshot',
  tags: ['projects'],
  description: 'Snapshot the state of a streaming job.',
  operationId: 'dataflow.projects.locations.jobs.snapshot',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The project which owns the job to be snapshotted.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description: 'The location that contains this job.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            description: 'The job to be snapshotted.',
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SnapshotJobRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SnapshotSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const getV1b3ProjectsProjectIdLocationsLocationSnapshotsRoute = createRoute({
  method: 'get',
  path: '/v1b3/projects/{projectId}/locations/{location}/snapshots',
  tags: ['projects'],
  description: 'Lists snapshots.',
  operationId: 'dataflow.projects.locations.snapshots.list',
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
      jobId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If specified, list snapshots created from this job.',
            in: 'query',
            name: 'jobId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The project ID to list snapshots for.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description: 'The location to list snapshots in.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListSnapshotsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const getV1b3ProjectsProjectIdLocationsLocationSnapshotsSnapshotIdRoute = createRoute({
  method: 'get',
  path: '/v1b3/projects/{projectId}/locations/{location}/snapshots/{snapshotId}',
  tags: ['projects'],
  description: 'Gets information about a snapshot.',
  operationId: 'dataflow.projects.locations.snapshots.get',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the Cloud Platform project that the snapshot belongs to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description: 'The location that contains this snapshot.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      snapshotId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the snapshot.',
            in: 'path',
            name: 'snapshotId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SnapshotSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const deleteV1b3ProjectsProjectIdLocationsLocationSnapshotsSnapshotIdRoute = createRoute({
  method: 'delete',
  path: '/v1b3/projects/{projectId}/locations/{location}/snapshots/{snapshotId}',
  tags: ['projects'],
  description: 'Deletes a snapshot.',
  operationId: 'dataflow.projects.locations.snapshots.delete',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the Cloud Platform project that the snapshot belongs to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description: 'The location that contains this snapshot.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      snapshotId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the snapshot.',
            in: 'path',
            name: 'snapshotId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DeleteSnapshotResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const postV1b3ProjectsProjectIdLocationsLocationTemplatesRoute = createRoute({
  method: 'post',
  path: '/v1b3/projects/{projectId}/locations/{location}/templates',
  tags: ['projects'],
  description:
    'Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API.',
  operationId: 'dataflow.projects.locations.templates.create',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the Cloud Platform project that the job belongs to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description:
              'The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateJobFromTemplateRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: JobSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const getV1b3ProjectsProjectIdLocationsLocationTemplatesGetRoute = createRoute({
  method: 'get',
  path: '/v1b3/projects/{projectId}/locations/{location}/templates:get',
  tags: ['projects'],
  description: 'Get the template associated with a template.',
  operationId: 'dataflow.projects.locations.templates.get',
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
      gcsPath: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Required. A Cloud Storage path to the template from which to create the job. Must be valid Cloud Storage URL, beginning with 'gs://'.",
            in: 'query',
            name: 'gcsPath',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .literal('METADATA_ONLY')
        .exactOptional()
        .openapi({
          param: {
            description: 'The view to retrieve. Defaults to METADATA_ONLY.',
            in: 'query',
            name: 'view',
            schema: { enum: ['METADATA_ONLY'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the Cloud Platform project that the job belongs to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description:
              'The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetTemplateResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const postV1b3ProjectsProjectIdLocationsLocationTemplatesLaunchRoute = createRoute({
  method: 'post',
  path: '/v1b3/projects/{projectId}/locations/{location}/templates:launch',
  tags: ['projects'],
  description: 'Launch a template.',
  operationId: 'dataflow.projects.locations.templates.launch',
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
      'dynamicTemplate.gcsPath': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Path to dynamic template spec file on Cloud Storage. The file must be a Json serialized DynamicTemplateFieSpec object.',
            in: 'query',
            name: 'dynamicTemplate.gcsPath',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'dynamicTemplate.stagingLocation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Cloud Storage path for staging dependencies. Must be a valid Cloud Storage URL, beginning with `gs://`.',
            in: 'query',
            name: 'dynamicTemplate.stagingLocation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      gcsPath: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A Cloud Storage path to the template from which to create the job. Must be valid Cloud Storage URL, beginning with 'gs://'.",
            in: 'query',
            name: 'gcsPath',
            schema: { type: 'string' },
            required: false,
          },
        }),
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, the request is validated but not actually executed. Defaults to false.',
            in: 'query',
            name: 'validateOnly',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the Cloud Platform project that the job belongs to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description:
              'The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LaunchTemplateParametersSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LaunchTemplateResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const getV1b3ProjectsProjectIdSnapshotsRoute = createRoute({
  method: 'get',
  path: '/v1b3/projects/{projectId}/snapshots',
  tags: ['projects'],
  description: 'Lists snapshots.',
  operationId: 'dataflow.projects.snapshots.list',
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
      jobId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If specified, list snapshots created from this job.',
            in: 'query',
            name: 'jobId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      location: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The location to list snapshots in.',
            in: 'query',
            name: 'location',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The project ID to list snapshots for.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListSnapshotsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const deleteV1b3ProjectsProjectIdSnapshotsRoute = createRoute({
  method: 'delete',
  path: '/v1b3/projects/{projectId}/snapshots',
  tags: ['projects'],
  description: 'Deletes a snapshot.',
  operationId: 'dataflow.projects.deleteSnapshots',
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
      location: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The location that contains this snapshot.',
            in: 'query',
            name: 'location',
            schema: { type: 'string' },
            required: false,
          },
        }),
      snapshotId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the snapshot.',
            in: 'query',
            name: 'snapshotId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the Cloud Platform project that the snapshot belongs to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DeleteSnapshotResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const getV1b3ProjectsProjectIdSnapshotsSnapshotIdRoute = createRoute({
  method: 'get',
  path: '/v1b3/projects/{projectId}/snapshots/{snapshotId}',
  tags: ['projects'],
  description: 'Gets information about a snapshot.',
  operationId: 'dataflow.projects.snapshots.get',
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
      location: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The location that contains this snapshot.',
            in: 'query',
            name: 'location',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the Cloud Platform project that the snapshot belongs to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      snapshotId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the snapshot.',
            in: 'path',
            name: 'snapshotId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SnapshotSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const postV1b3ProjectsProjectIdTemplatesRoute = createRoute({
  method: 'post',
  path: '/v1b3/projects/{projectId}/templates',
  tags: ['projects'],
  description:
    'Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API.',
  operationId: 'dataflow.projects.templates.create',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the Cloud Platform project that the job belongs to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateJobFromTemplateRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: JobSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const getV1b3ProjectsProjectIdTemplatesGetRoute = createRoute({
  method: 'get',
  path: '/v1b3/projects/{projectId}/templates:get',
  tags: ['projects'],
  description: 'Get the template associated with a template.',
  operationId: 'dataflow.projects.templates.get',
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
      gcsPath: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Required. A Cloud Storage path to the template from which to create the job. Must be valid Cloud Storage URL, beginning with 'gs://'.",
            in: 'query',
            name: 'gcsPath',
            schema: { type: 'string' },
            required: false,
          },
        }),
      location: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.',
            in: 'query',
            name: 'location',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .literal('METADATA_ONLY')
        .exactOptional()
        .openapi({
          param: {
            description: 'The view to retrieve. Defaults to METADATA_ONLY.',
            in: 'query',
            name: 'view',
            schema: { enum: ['METADATA_ONLY'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the Cloud Platform project that the job belongs to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetTemplateResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})

export const postV1b3ProjectsProjectIdTemplatesLaunchRoute = createRoute({
  method: 'post',
  path: '/v1b3/projects/{projectId}/templates:launch',
  tags: ['projects'],
  description: 'Launch a template.',
  operationId: 'dataflow.projects.templates.launch',
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
      'dynamicTemplate.gcsPath': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Path to dynamic template spec file on Cloud Storage. The file must be a Json serialized DynamicTemplateFieSpec object.',
            in: 'query',
            name: 'dynamicTemplate.gcsPath',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'dynamicTemplate.stagingLocation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Cloud Storage path for staging dependencies. Must be a valid Cloud Storage URL, beginning with `gs://`.',
            in: 'query',
            name: 'dynamicTemplate.stagingLocation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      gcsPath: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A Cloud Storage path to the template from which to create the job. Must be valid Cloud Storage URL, beginning with 'gs://'.",
            in: 'query',
            name: 'gcsPath',
            schema: { type: 'string' },
            required: false,
          },
        }),
      location: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.',
            in: 'query',
            name: 'location',
            schema: { type: 'string' },
            required: false,
          },
        }),
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, the request is validated but not actually executed. Defaults to false.',
            in: 'query',
            name: 'validateOnly',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the Cloud Platform project that the job belongs to.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LaunchTemplateParametersSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LaunchTemplateResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute'],
      Oauth2c: ['https://www.googleapis.com/auth/compute'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/compute.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/compute.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})
