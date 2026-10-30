import { createRoute, z } from '@hono/zod-openapi'

const PayloadSchema = z
  .any()
  .openapi({
    description:
      'Represents some binary (byte array) data (ex: activity input parameters or workflow result) with\n metadata which describes this binary data (format, encoding, encryption, etc). Serialization\n of the data may be user-defined.',
  })
  .openapi('Payload')

const PayloadsSchema = z
  .object({ payloads: z.array(PayloadSchema).exactOptional() })
  .openapi({ description: 'See `Payload`', required: [] })
  .openapi('Payloads')

const ApplicationFailureInfoSchema = z
  .object({
    type: z.string().exactOptional(),
    nonRetryable: z.boolean().exactOptional(),
    details: PayloadsSchema.exactOptional(),
    nextRetryDelay: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'next_retry_delay can be used by the client to override the activity\n retry interval calculated by the retry policy. Retry attempts will\n still be subject to the maximum retries limit and total time limit\n defined by the policy.',
      }),
    category: z
      .enum(['APPLICATION_ERROR_CATEGORY_UNSPECIFIED', 'APPLICATION_ERROR_CATEGORY_BENIGN'])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApplicationFailureInfo')

const TimeoutFailureInfoSchema = z
  .object({
    timeoutType: z
      .enum([
        'TIMEOUT_TYPE_UNSPECIFIED',
        'TIMEOUT_TYPE_START_TO_CLOSE',
        'TIMEOUT_TYPE_SCHEDULE_TO_START',
        'TIMEOUT_TYPE_SCHEDULE_TO_CLOSE',
        'TIMEOUT_TYPE_HEARTBEAT',
      ])
      .exactOptional(),
    lastHeartbeatDetails: PayloadsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TimeoutFailureInfo')

const CanceledFailureInfoSchema = z
  .object({
    details: PayloadsSchema.exactOptional(),
    identity: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The identity of the worker or client that requested the cancellation.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CanceledFailureInfo')

const TerminatedFailureInfoSchema = z
  .object({
    identity: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The identity of the worker or client that requested the termination.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TerminatedFailureInfo')

const ServerFailureInfoSchema = z
  .object({ nonRetryable: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('ServerFailureInfo')

const ResetWorkflowFailureInfoSchema = z
  .object({ lastHeartbeatDetails: PayloadsSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ResetWorkflowFailureInfo')

const ActivityTypeSchema = z
  .object({ name: z.string().exactOptional() })
  .openapi({
    description:
      'Represents the identifier used by a activity author to define the activity. Typically, the\n name of a function. This is sometimes referred to as the activity\'s "name"',
    required: [],
  })
  .openapi('ActivityType')

const ActivityFailureInfoSchema = z
  .object({
    scheduledEventId: z.string().exactOptional(),
    startedEventId: z.string().exactOptional(),
    identity: z.string().exactOptional(),
    activityType: ActivityTypeSchema.exactOptional(),
    activityId: z.string().exactOptional(),
    retryState: z
      .enum([
        'RETRY_STATE_UNSPECIFIED',
        'RETRY_STATE_IN_PROGRESS',
        'RETRY_STATE_NON_RETRYABLE_FAILURE',
        'RETRY_STATE_TIMEOUT',
        'RETRY_STATE_MAXIMUM_ATTEMPTS_REACHED',
        'RETRY_STATE_RETRY_POLICY_NOT_SET',
        'RETRY_STATE_INTERNAL_SERVER_ERROR',
        'RETRY_STATE_CANCEL_REQUESTED',
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ActivityFailureInfo')

const WorkflowExecutionSchema = z
  .object({ workflowId: z.string().exactOptional(), runId: z.string().exactOptional() })
  .openapi({
    description:
      'Identifies a specific workflow within a namespace. Practically speaking, because run_id is a\n uuid, a workflow execution is globally unique. Note that many commands allow specifying an empty\n run id as a way of saying "target the latest run of the workflow".',
    required: [],
  })
  .openapi('WorkflowExecution')

const WorkflowTypeSchema = z
  .object({ name: z.string().exactOptional() })
  .openapi({
    description:
      'Represents the identifier used by a workflow author to define the workflow. Typically, the\n name of a function. This is sometimes referred to as the workflow\'s "name"',
    required: [],
  })
  .openapi('WorkflowType')

const ChildWorkflowExecutionFailureInfoSchema = z
  .object({
    namespace: z.string().exactOptional(),
    workflowExecution: WorkflowExecutionSchema.exactOptional(),
    workflowType: WorkflowTypeSchema.exactOptional(),
    initiatedEventId: z.string().exactOptional(),
    startedEventId: z.string().exactOptional(),
    retryState: z
      .enum([
        'RETRY_STATE_UNSPECIFIED',
        'RETRY_STATE_IN_PROGRESS',
        'RETRY_STATE_NON_RETRYABLE_FAILURE',
        'RETRY_STATE_TIMEOUT',
        'RETRY_STATE_MAXIMUM_ATTEMPTS_REACHED',
        'RETRY_STATE_RETRY_POLICY_NOT_SET',
        'RETRY_STATE_INTERNAL_SERVER_ERROR',
        'RETRY_STATE_CANCEL_REQUESTED',
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChildWorkflowExecutionFailureInfo')

const NexusOperationFailureInfoSchema = z
  .object({
    scheduledEventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The NexusOperationScheduled event ID.' }),
    endpoint: z.string().exactOptional().openapi({ description: 'Endpoint name.' }),
    service: z.string().exactOptional().openapi({ description: 'Service name.' }),
    operation: z.string().exactOptional().openapi({ description: 'Operation name.' }),
    operationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Operation ID - may be empty if the operation completed synchronously.\n\n Deprecated. Renamed to operation_token.',
      }),
    operationToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Operation token - may be empty if the operation completed synchronously.',
      }),
  })
  .openapi({
    description:
      'Representation of the Temporal SDK NexusOperationError object that is returned to workflow callers.',
    required: [],
  })
  .openapi('NexusOperationFailureInfo')

const NexusHandlerFailureInfoSchema = z
  .object({
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Nexus error type as defined in the spec:\n https://github.com/nexus-rpc/api/blob/main/SPEC.md#predefined-handler-errors.',
      }),
    retryBehavior: z
      .enum([
        'NEXUS_HANDLER_ERROR_RETRY_BEHAVIOR_UNSPECIFIED',
        'NEXUS_HANDLER_ERROR_RETRY_BEHAVIOR_RETRYABLE',
        'NEXUS_HANDLER_ERROR_RETRY_BEHAVIOR_NON_RETRYABLE',
      ])
      .exactOptional()
      .openapi({
        description:
          'Retry behavior, defaults to the retry behavior of the error type as defined in the spec.',
      }),
  })
  .openapi({ required: [] })
  .openapi('NexusHandlerFailureInfo')

type FailureType = {
  message?: string
  source?: string
  stackTrace?: string
  encodedAttributes?: z.infer<typeof PayloadSchema>
  cause?: FailureType
  applicationFailureInfo?: z.infer<typeof ApplicationFailureInfoSchema>
  timeoutFailureInfo?: z.infer<typeof TimeoutFailureInfoSchema>
  canceledFailureInfo?: z.infer<typeof CanceledFailureInfoSchema>
  terminatedFailureInfo?: z.infer<typeof TerminatedFailureInfoSchema>
  serverFailureInfo?: z.infer<typeof ServerFailureInfoSchema>
  resetWorkflowFailureInfo?: z.infer<typeof ResetWorkflowFailureInfoSchema>
  activityFailureInfo?: z.infer<typeof ActivityFailureInfoSchema>
  childWorkflowExecutionFailureInfo?: z.infer<typeof ChildWorkflowExecutionFailureInfoSchema>
  nexusOperationExecutionFailureInfo?: z.infer<typeof NexusOperationFailureInfoSchema>
  nexusHandlerFailureInfo?: z.infer<typeof NexusHandlerFailureInfoSchema>
}

const RetryPolicySchema = z
  .object({
    initialInterval: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'Interval of the first retry. If retryBackoffCoefficient is 1.0 then it is used for all retries.',
      }),
    backoffCoefficient: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Coefficient used to calculate the next retry interval.\n The next retry interval is previous interval multiplied by the coefficient.\n Must be 1 or larger.',
      }),
    maximumInterval: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'Maximum interval between retries. Exponential backoff leads to interval increase.\n This value is the cap of the increase. Default is 100x of the initial interval.',
      }),
    maximumAttempts: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Maximum number of attempts. When exceeded the retries stop even if not expired yet.\n 1 disables retries. 0 means unlimited (up to the timeouts)',
      }),
    nonRetryableErrorTypes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Non-Retryable errors types. Will stop retrying if the error type matches this list. Note that\n this is not a substring match, the error *type* (not message) must match exactly.',
      }),
  })
  .openapi({
    description: 'How retries ought to be handled, usable by both workflows and activities',
    required: [],
  })
  .openapi('RetryPolicy')

const FailureSchema: z.ZodType<FailureType> = z
  .lazy(() =>
    z
      .object({
        message: z.string().exactOptional(),
        source: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The source this Failure originated in, e.g. TypeScriptSDK / JavaSDK\n In some SDKs this is used to rehydrate the stack trace into an exception object.',
          }),
        stackTrace: z.string().exactOptional(),
        encodedAttributes: PayloadSchema.exactOptional().openapi({
          description:
            'Alternative way to supply `message` and `stack_trace` and possibly other attributes, used for encryption of\n errors originating in user code which might contain sensitive information.\n The `encoded_attributes` Payload could represent any serializable object, e.g. JSON object or a `Failure` proto\n message.\n\n SDK authors:\n - The SDK should provide a default `encodeFailureAttributes` and `decodeFailureAttributes` implementation that:\n   - Uses a JSON object to represent `{ message, stack_trace }`.\n   - Overwrites the original message with "Encoded failure" to indicate that more information could be extracted.\n   - Overwrites the original stack_trace with an empty string.\n   - The resulting JSON object is converted to Payload using the default PayloadConverter and should be processed\n     by the user-provided PayloadCodec\n\n - If there\'s demand, we could allow overriding the default SDK implementation to encode other opaque Failure attributes.',
        }),
        cause: FailureSchema.exactOptional(),
        applicationFailureInfo: ApplicationFailureInfoSchema.exactOptional(),
        timeoutFailureInfo: TimeoutFailureInfoSchema.exactOptional(),
        canceledFailureInfo: CanceledFailureInfoSchema.exactOptional(),
        terminatedFailureInfo: TerminatedFailureInfoSchema.exactOptional(),
        serverFailureInfo: ServerFailureInfoSchema.exactOptional(),
        resetWorkflowFailureInfo: ResetWorkflowFailureInfoSchema.exactOptional(),
        activityFailureInfo: ActivityFailureInfoSchema.exactOptional(),
        childWorkflowExecutionFailureInfo: ChildWorkflowExecutionFailureInfoSchema.exactOptional(),
        nexusOperationExecutionFailureInfo: NexusOperationFailureInfoSchema.exactOptional(),
        nexusHandlerFailureInfo: NexusHandlerFailureInfoSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('Failure')

const WorkerDeploymentVersionSchema = z
  .object({
    buildId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier for this Version within the Deployment it is a part of.\n Not necessarily unique within the namespace.\n The combination of `deployment_name` and `build_id` uniquely identifies this\n Version within the namespace, because Deployment names are unique within a namespace.',
      }),
    deploymentName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifies the Worker Deployment this Version is part of.' }),
  })
  .openapi({
    description:
      'A Worker Deployment Version (Version, for short) represents a\n version of workers within a Worker Deployment. (see documentation of WorkerDeploymentVersionInfo)\n Version records are created in Temporal server automatically when their\n first poller arrives to the server.\n Experimental. Worker Deployment Versions are experimental and might significantly change in the future.',
    required: [],
  })
  .openapi('WorkerDeploymentVersion')

const PrioritySchema = z
  .object({
    priorityKey: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Priority key is a positive integer from 1 to n, where smaller integers\n correspond to higher priorities (tasks run sooner). In general, tasks in\n a queue should be processed in close to priority order, although small\n deviations are possible.\n\n The maximum priority value (minimum priority) is determined by server\n configuration, and defaults to 5.\n\n If priority is not present (or zero), then the effective priority will be\n the default priority, which is calculated by (min+max)/2. With the\n default max of 5, and min of 1, that comes out to 3.',
      }),
    fairnessKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Fairness key is a short string that\'s used as a key for a fairness\n balancing mechanism. It may correspond to a tenant id, or to a fixed\n string like "high" or "low". The default is the empty string.\n\n The fairness mechanism attempts to dispatch tasks for a given key in\n proportion to its weight. For example, using a thousand distinct tenant\n ids, each with a weight of 1.0 (the default) will result in each tenant\n getting a roughly equal share of task dispatch throughput.\n\n (Note: this does not imply equal share of worker capacity! Fairness\n decisions are made based on queue statistics, not\n current worker load.)\n\n As another example, using keys "high" and "low" with weight 9.0 and 1.0\n respectively will prefer dispatching "high" tasks over "low" tasks at a\n 9:1 ratio, while allowing either key to use all worker capacity if the\n other is not present.\n\n All fairness mechanisms, including rate limits, are best-effort and\n probabilistic. The results may not match what a "perfect" algorithm with\n infinite resources would produce. The more unique keys are used, the less\n accurate the results will be.\n\n Fairness keys are limited to 64 bytes.',
      }),
    fairnessWeight: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Fairness weight for a task can come from multiple sources for\n flexibility. From highest to lowest precedence:\n 1. Weights for a small set of keys can be overridden in task queue\n    configuration with an API.\n 2. It can be attached to the workflow/activity in this field.\n 3. The default weight of 1.0 will be used.\n\n Weight values are clamped to the range [0.001, 1000].',
      }),
  })
  .openapi({
    description:
      'Priority contains metadata that controls relative ordering of task processing\n when tasks are backed up in a queue. Initially, Priority will be used in\n matching (workflow and activity) task queues. Later it may be used in history\n task queues and in rate limiting decisions.\n\n Priority is attached to workflows and activities. By default, activities\n inherit Priority from the workflow that created them, but may override fields\n when an activity is started or modified.\n\n Despite being named "Priority", this message also contains fields that\n control "fairness" mechanisms.\n\n For all fields, the field not present or equal to zero/empty string means to\n inherit the value from the calling workflow, or if there is no calling\n workflow, then use the default value.\n\n For all fields other than fairness_key, the zero value isn\'t meaningful so\n there\'s no confusion between inherit/default and a meaningful value. For\n fairness_key, the empty string will be interpreted as "inherit". This means\n that if a workflow has a non-empty fairness key, you can\'t override the\n fairness key of its activity to the empty string.\n\n The overall semantics of Priority are:\n 1. First, consider "priority": higher priority (lower number) goes first.\n 2. Then, consider fairness: try to dispatch tasks for different fairness keys\n    in proportion to their weight.\n\n Applications may use any subset of mechanisms that are useful to them and\n leave the other fields to use default values.\n\n Not all queues in the system may support the "full" semantics of all priority\n fields. (Currently only support in matching task queues is planned.)',
    required: [],
  })
  .openapi('Priority')

const SearchAttributesSchema = z
  .object({ indexedFields: z.record(z.string(), PayloadSchema).exactOptional() })
  .openapi({
    description:
      'A user-defined set of *indexed* fields that are used/exposed when listing/searching workflows.\n The payload is not serialized in a user-defined way.',
    required: [],
  })
  .openapi('SearchAttributes')

const HeaderSchema = z
  .object({ fields: z.record(z.string(), PayloadSchema).exactOptional() })
  .openapi({
    description:
      'Contains metadata that can be attached to a variety of requests, like starting a workflow, and\n can be propagated between, for example, workflows and activities.',
    required: [],
  })
  .openapi('Header')

const UserMetadataSchema = z
  .object({
    summary: PayloadSchema.exactOptional().openapi({
      description:
        'Short-form text that provides a summary. This payload should be a "json/plain"-encoded payload\n that is a single JSON string for use in user interfaces. User interface formatting may not\n apply to this text when used in "title" situations. The payload data section is limited to 400\n bytes by default.',
    }),
    details: PayloadSchema.exactOptional().openapi({
      description:
        'Long-form text that provides details. This payload should be a "json/plain"-encoded payload\n that is a single JSON string for use in user interfaces. User interface formatting may apply to\n this text in common use. The payload data section is limited to 20000 bytes by default.',
    }),
  })
  .openapi({
    description: 'Information a user can set, often for use by user interfaces.',
    required: [],
  })
  .openapi('UserMetadata')

const WorkflowEventEventReferenceSchema = z
  .object({
    eventId: z.string().exactOptional(),
    eventType: z
      .enum([
        'EVENT_TYPE_UNSPECIFIED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_STARTED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_COMPLETED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_FAILED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_TIMED_OUT',
        'EVENT_TYPE_WORKFLOW_TASK_SCHEDULED',
        'EVENT_TYPE_WORKFLOW_TASK_STARTED',
        'EVENT_TYPE_WORKFLOW_TASK_COMPLETED',
        'EVENT_TYPE_WORKFLOW_TASK_TIMED_OUT',
        'EVENT_TYPE_WORKFLOW_TASK_FAILED',
        'EVENT_TYPE_ACTIVITY_TASK_SCHEDULED',
        'EVENT_TYPE_ACTIVITY_TASK_STARTED',
        'EVENT_TYPE_ACTIVITY_TASK_COMPLETED',
        'EVENT_TYPE_ACTIVITY_TASK_FAILED',
        'EVENT_TYPE_ACTIVITY_TASK_TIMED_OUT',
        'EVENT_TYPE_ACTIVITY_TASK_CANCEL_REQUESTED',
        'EVENT_TYPE_ACTIVITY_TASK_CANCELED',
        'EVENT_TYPE_TIMER_STARTED',
        'EVENT_TYPE_TIMER_FIRED',
        'EVENT_TYPE_TIMER_CANCELED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_CANCEL_REQUESTED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_CANCELED',
        'EVENT_TYPE_REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_INITIATED',
        'EVENT_TYPE_REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_FAILED',
        'EVENT_TYPE_EXTERNAL_WORKFLOW_EXECUTION_CANCEL_REQUESTED',
        'EVENT_TYPE_MARKER_RECORDED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_SIGNALED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_TERMINATED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_CONTINUED_AS_NEW',
        'EVENT_TYPE_START_CHILD_WORKFLOW_EXECUTION_INITIATED',
        'EVENT_TYPE_START_CHILD_WORKFLOW_EXECUTION_FAILED',
        'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_STARTED',
        'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_COMPLETED',
        'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_FAILED',
        'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_CANCELED',
        'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_TIMED_OUT',
        'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_TERMINATED',
        'EVENT_TYPE_SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_INITIATED',
        'EVENT_TYPE_SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED',
        'EVENT_TYPE_EXTERNAL_WORKFLOW_EXECUTION_SIGNALED',
        'EVENT_TYPE_UPSERT_WORKFLOW_SEARCH_ATTRIBUTES',
        'EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_ADMITTED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_ACCEPTED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_REJECTED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_COMPLETED',
        'EVENT_TYPE_WORKFLOW_PROPERTIES_MODIFIED_EXTERNALLY',
        'EVENT_TYPE_ACTIVITY_PROPERTIES_MODIFIED_EXTERNALLY',
        'EVENT_TYPE_WORKFLOW_PROPERTIES_MODIFIED',
        'EVENT_TYPE_NEXUS_OPERATION_SCHEDULED',
        'EVENT_TYPE_NEXUS_OPERATION_STARTED',
        'EVENT_TYPE_NEXUS_OPERATION_COMPLETED',
        'EVENT_TYPE_NEXUS_OPERATION_FAILED',
        'EVENT_TYPE_NEXUS_OPERATION_CANCELED',
        'EVENT_TYPE_NEXUS_OPERATION_TIMED_OUT',
        'EVENT_TYPE_NEXUS_OPERATION_CANCEL_REQUESTED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_OPTIONS_UPDATED',
        'EVENT_TYPE_NEXUS_OPERATION_CANCEL_REQUEST_COMPLETED',
        'EVENT_TYPE_NEXUS_OPERATION_CANCEL_REQUEST_FAILED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_PAUSED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_UNPAUSED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_TIME_SKIPPING_TRANSITIONED',
      ])
      .exactOptional(),
  })
  .openapi({
    description: 'EventReference is a direct reference to a history event through the event ID.',
    required: [],
  })
  .openapi('WorkflowEventEventReference')

const WorkflowEventRequestIdReferenceSchema = z
  .object({
    requestId: z.string().exactOptional(),
    eventType: z
      .enum([
        'EVENT_TYPE_UNSPECIFIED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_STARTED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_COMPLETED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_FAILED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_TIMED_OUT',
        'EVENT_TYPE_WORKFLOW_TASK_SCHEDULED',
        'EVENT_TYPE_WORKFLOW_TASK_STARTED',
        'EVENT_TYPE_WORKFLOW_TASK_COMPLETED',
        'EVENT_TYPE_WORKFLOW_TASK_TIMED_OUT',
        'EVENT_TYPE_WORKFLOW_TASK_FAILED',
        'EVENT_TYPE_ACTIVITY_TASK_SCHEDULED',
        'EVENT_TYPE_ACTIVITY_TASK_STARTED',
        'EVENT_TYPE_ACTIVITY_TASK_COMPLETED',
        'EVENT_TYPE_ACTIVITY_TASK_FAILED',
        'EVENT_TYPE_ACTIVITY_TASK_TIMED_OUT',
        'EVENT_TYPE_ACTIVITY_TASK_CANCEL_REQUESTED',
        'EVENT_TYPE_ACTIVITY_TASK_CANCELED',
        'EVENT_TYPE_TIMER_STARTED',
        'EVENT_TYPE_TIMER_FIRED',
        'EVENT_TYPE_TIMER_CANCELED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_CANCEL_REQUESTED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_CANCELED',
        'EVENT_TYPE_REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_INITIATED',
        'EVENT_TYPE_REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_FAILED',
        'EVENT_TYPE_EXTERNAL_WORKFLOW_EXECUTION_CANCEL_REQUESTED',
        'EVENT_TYPE_MARKER_RECORDED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_SIGNALED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_TERMINATED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_CONTINUED_AS_NEW',
        'EVENT_TYPE_START_CHILD_WORKFLOW_EXECUTION_INITIATED',
        'EVENT_TYPE_START_CHILD_WORKFLOW_EXECUTION_FAILED',
        'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_STARTED',
        'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_COMPLETED',
        'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_FAILED',
        'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_CANCELED',
        'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_TIMED_OUT',
        'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_TERMINATED',
        'EVENT_TYPE_SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_INITIATED',
        'EVENT_TYPE_SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED',
        'EVENT_TYPE_EXTERNAL_WORKFLOW_EXECUTION_SIGNALED',
        'EVENT_TYPE_UPSERT_WORKFLOW_SEARCH_ATTRIBUTES',
        'EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_ADMITTED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_ACCEPTED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_REJECTED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_COMPLETED',
        'EVENT_TYPE_WORKFLOW_PROPERTIES_MODIFIED_EXTERNALLY',
        'EVENT_TYPE_ACTIVITY_PROPERTIES_MODIFIED_EXTERNALLY',
        'EVENT_TYPE_WORKFLOW_PROPERTIES_MODIFIED',
        'EVENT_TYPE_NEXUS_OPERATION_SCHEDULED',
        'EVENT_TYPE_NEXUS_OPERATION_STARTED',
        'EVENT_TYPE_NEXUS_OPERATION_COMPLETED',
        'EVENT_TYPE_NEXUS_OPERATION_FAILED',
        'EVENT_TYPE_NEXUS_OPERATION_CANCELED',
        'EVENT_TYPE_NEXUS_OPERATION_TIMED_OUT',
        'EVENT_TYPE_NEXUS_OPERATION_CANCEL_REQUESTED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_OPTIONS_UPDATED',
        'EVENT_TYPE_NEXUS_OPERATION_CANCEL_REQUEST_COMPLETED',
        'EVENT_TYPE_NEXUS_OPERATION_CANCEL_REQUEST_FAILED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_PAUSED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_UNPAUSED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_TIME_SKIPPING_TRANSITIONED',
      ])
      .exactOptional(),
  })
  .openapi({
    description:
      'RequestIdReference is a indirect reference to a history event through the request ID.',
    required: [],
  })
  .openapi('WorkflowEventRequestIdReference')

const LinkWorkflowEventSchema = z
  .object({
    namespace: z.string().exactOptional(),
    workflowId: z.string().exactOptional(),
    runId: z.string().exactOptional(),
    eventRef: WorkflowEventEventReferenceSchema.exactOptional(),
    requestIdRef: WorkflowEventRequestIdReferenceSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LinkWorkflowEvent')

const LinkBatchJobSchema = z
  .object({ jobId: z.string().exactOptional() })
  .openapi({
    description:
      'A link to a built-in batch job.\n Batch jobs can be used to perform operations on a set of workflows (e.g. terminate, signal, cancel, etc).\n This link can be put on workflow history events generated by actions taken by a batch job.',
    required: [],
  })
  .openapi('LinkBatchJob')

const LinkActivitySchema = z
  .object({
    namespace: z.string().exactOptional(),
    activityId: z.string().exactOptional(),
    runId: z.string().exactOptional(),
  })
  .openapi({ description: 'A link to an activity.', required: [] })
  .openapi('LinkActivity')

const LinkNexusOperationSchema = z
  .object({
    namespace: z.string().exactOptional(),
    operationId: z.string().exactOptional(),
    runId: z.string().exactOptional(),
  })
  .openapi({ description: 'A link to a standalone Nexus operation.', required: [] })
  .openapi('LinkNexusOperation')

const LinkSchema = z
  .object({
    workflowEvent: LinkWorkflowEventSchema.exactOptional(),
    batchJob: LinkBatchJobSchema.exactOptional(),
    activity: LinkActivitySchema.exactOptional(),
    nexusOperation: LinkNexusOperationSchema.exactOptional(),
  })
  .openapi({
    description:
      'Link can be associated with history events. It might contain information about an external entity\n related to the history event. For example, workflow A makes a Nexus call that starts workflow B:\n in this case, a history event in workflow A could contain a Link to the workflow started event in\n workflow B, and vice-versa.',
    required: [],
  })
  .openapi('Link')

const ActivityExecutionInfoSchema = z
  .object({
    activityId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier of this activity within its namespace along with run ID (below).',
      }),
    runId: z.string().exactOptional(),
    activityType: ActivityTypeSchema.exactOptional().openapi({
      description:
        'The type of the activity, a string that maps to a registered activity on a worker.',
    }),
    status: z
      .enum([
        'ACTIVITY_EXECUTION_STATUS_UNSPECIFIED',
        'ACTIVITY_EXECUTION_STATUS_RUNNING',
        'ACTIVITY_EXECUTION_STATUS_COMPLETED',
        'ACTIVITY_EXECUTION_STATUS_FAILED',
        'ACTIVITY_EXECUTION_STATUS_CANCELED',
        'ACTIVITY_EXECUTION_STATUS_TERMINATED',
        'ACTIVITY_EXECUTION_STATUS_TIMED_OUT',
      ])
      .exactOptional()
      .openapi({
        description:
          'A general status for this activity, indicates whether it is currently running or in one of the terminal statuses.',
      }),
    runState: z
      .enum([
        'PENDING_ACTIVITY_STATE_UNSPECIFIED',
        'PENDING_ACTIVITY_STATE_SCHEDULED',
        'PENDING_ACTIVITY_STATE_STARTED',
        'PENDING_ACTIVITY_STATE_CANCEL_REQUESTED',
        'PENDING_ACTIVITY_STATE_PAUSED',
        'PENDING_ACTIVITY_STATE_PAUSE_REQUESTED',
      ])
      .exactOptional()
      .openapi({ description: 'More detailed breakdown of ACTIVITY_EXECUTION_STATUS_RUNNING.' }),
    taskQueue: z.string().exactOptional(),
    scheduleToCloseTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'Indicates how long the caller is willing to wait for an activity completion. Limits how long\n retries will be attempted.\n\n (-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: "to" is used to indicate interval. --)',
      }),
    scheduleToStartTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'Limits time an activity task can stay in a task queue before a worker picks it up. This\n timeout is always non retryable, as all a retry would achieve is to put it back into the same\n queue. Defaults to `schedule_to_close_timeout`.\n\n (-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: "to" is used to indicate interval. --)',
      }),
    startToCloseTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'Maximum time a single activity attempt is allowed to execute after being picked up by a worker. This\n timeout is always retryable.\n\n (-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: "to" is used to indicate interval. --)',
      }),
    heartbeatTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({ description: 'Maximum permitted time between successful worker heartbeats.' }),
    retryPolicy: RetryPolicySchema.exactOptional().openapi({
      description:
        'The retry policy for the activity. Will never exceed `schedule_to_close_timeout`.',
    }),
    heartbeatDetails: PayloadsSchema.exactOptional().openapi({
      description: 'Details provided in the last recorded activity heartbeat.',
    }),
    lastHeartbeatTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time the last heartbeat was recorded.' }),
    lastStartedTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time the last attempt was started.' }),
    attempt: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The attempt this activity is currently on. Incremented each time a new attempt is scheduled.',
      }),
    executionDuration: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'How long this activity has been running for, including all attempts and backoff between attempts.',
      }),
    scheduleTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Time the activity was originally scheduled via a StartActivityExecution request.',
      }),
    expirationTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Scheduled time + schedule to close timeout.' }),
    closeTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time when the activity transitioned to a closed state.' }),
    lastFailure: FailureSchema.exactOptional().openapi({
      description: 'Failure details from the last failed attempt.',
    }),
    lastWorkerIdentity: z.string().exactOptional(),
    currentRetryInterval: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'Time from the last attempt failure to the next activity retry.\n If the activity is currently running, this represents the next retry interval in case the attempt fails.\n If activity is currently backing off between attempt, this represents the current retry interval.\n If there is no next retry allowed, this field will be null.\n This interval is typically calculated from the specified retry policy, but may be modified if an activity fails\n with a retryable application failure specifying a retry delay.',
      }),
    lastAttemptCompleteTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The time when the last activity attempt completed. If activity has not been completed yet, it will be null.',
      }),
    nextAttemptScheduleTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The time when the next activity attempt will be scheduled.\n If activity is currently scheduled or started, this field will be null.',
      }),
    lastDeploymentVersion: WorkerDeploymentVersionSchema.exactOptional().openapi({
      description:
        'The Worker Deployment Version this activity was dispatched to most recently.\n If nil, the activity has not yet been dispatched or was last dispatched to an unversioned worker.',
    }),
    priority: PrioritySchema.exactOptional().openapi({ description: 'Priority metadata.' }),
    stateTransitionCount: z
      .string()
      .exactOptional()
      .openapi({
        description: "Incremented each time the activity's state is mutated in persistence.",
      }),
    stateSizeBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Updated once on scheduled and once on terminal status.' }),
    searchAttributes: SearchAttributesSchema.exactOptional(),
    header: HeaderSchema.exactOptional(),
    userMetadata: UserMetadataSchema.exactOptional().openapi({
      description:
        'Metadata for use by user interfaces to display the fixed as-of-start summary and details of the activity.',
    }),
    canceledReason: z
      .string()
      .exactOptional()
      .openapi({ description: 'Set if activity cancelation was requested.' }),
    links: z
      .array(LinkSchema)
      .exactOptional()
      .openapi({
        description: 'Links to related entities, such as the entity that started this activity.',
      }),
    totalHeartbeatCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Total number of heartbeats recorded across all attempts of this activity, including retries.',
      }),
  })
  .openapi({ description: 'Information about a standalone activity.', required: [] })
  .openapi('ActivityExecutionInfo')

const ActivityExecutionListInfoSchema = z
  .object({
    activityId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier of this activity within its namespace along with run ID (below).',
      }),
    runId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The run ID of the standalone activity.' }),
    activityType: ActivityTypeSchema.exactOptional().openapi({
      description:
        'The type of the activity, a string that maps to a registered activity on a worker.',
    }),
    scheduleTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Time the activity was originally scheduled via a StartActivityExecution request.',
      }),
    closeTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'If the activity is in a terminal status, this field represents the time the activity transitioned to that status.',
      }),
    status: z
      .enum([
        'ACTIVITY_EXECUTION_STATUS_UNSPECIFIED',
        'ACTIVITY_EXECUTION_STATUS_RUNNING',
        'ACTIVITY_EXECUTION_STATUS_COMPLETED',
        'ACTIVITY_EXECUTION_STATUS_FAILED',
        'ACTIVITY_EXECUTION_STATUS_CANCELED',
        'ACTIVITY_EXECUTION_STATUS_TERMINATED',
        'ACTIVITY_EXECUTION_STATUS_TIMED_OUT',
      ])
      .exactOptional()
      .openapi({
        description:
          'Only scheduled and terminal statuses appear here. More detailed information in PendingActivityInfo but not\n available in the list response.',
      }),
    searchAttributes: SearchAttributesSchema.exactOptional().openapi({
      description: 'Search attributes from the start request.',
    }),
    taskQueue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The task queue this activity was scheduled on when it was originally started, updated on activity options update.',
      }),
    stateTransitionCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Updated on terminal status.' }),
    stateSizeBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Updated once on scheduled and once on terminal status.' }),
    executionDuration: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'The difference between close time and scheduled time.\n This field is only populated if the activity is closed.',
      }),
  })
  .openapi({
    description:
      'Limited activity information returned in the list response.\n When adding fields here, ensure that it is also present in ActivityExecutionInfo (note that it\n may already be present in ActivityExecutionInfo but not at the top-level).',
    required: [],
  })
  .openapi('ActivityExecutionListInfo')

const ActivityExecutionOutcomeSchema = z
  .object({
    result: PayloadsSchema.exactOptional().openapi({
      description: 'The result if the activity completed successfully.',
    }),
    failure: FailureSchema.exactOptional().openapi({
      description: 'The failure if the activity completed unsuccessfully.',
    }),
  })
  .openapi({
    description:
      'The outcome of a completed activity execution: either a successful result or a failure.',
    required: [],
  })
  .openapi('ActivityExecutionOutcome')

const TaskQueueSchema = z
  .object({
    name: z.string().exactOptional(),
    kind: z
      .enum([
        'TASK_QUEUE_KIND_UNSPECIFIED',
        'TASK_QUEUE_KIND_NORMAL',
        'TASK_QUEUE_KIND_STICKY',
        'TASK_QUEUE_KIND_WORKER_COMMANDS',
      ])
      .exactOptional()
      .openapi({ description: 'Default: TASK_QUEUE_KIND_NORMAL.' }),
    normalName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Iff kind == TASK_QUEUE_KIND_STICKY, then this field contains the name of\n the normal task queue that the sticky worker is running on.',
      }),
  })
  .openapi({ description: 'See https://docs.temporal.io/docs/concepts/task-queues/', required: [] })
  .openapi('TaskQueue')

const ActivityOptionsSchema = z
  .object({
    taskQueue: TaskQueueSchema.exactOptional(),
    scheduleToCloseTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'Indicates how long the caller is willing to wait for an activity completion. Limits how long\n retries will be attempted. Either this or `start_to_close_timeout` must be specified.\n\n (-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: "to" is used to indicate interval. --)',
      }),
    scheduleToStartTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'Limits time an activity task can stay in a task queue before a worker picks it up. This\n timeout is always non retryable, as all a retry would achieve is to put it back into the same\n queue. Defaults to `schedule_to_close_timeout` or workflow execution timeout if not\n specified.\n\n (-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: "to" is used to indicate interval. --)',
      }),
    startToCloseTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'Maximum time an activity is allowed to execute after being picked up by a worker. This\n timeout is always retryable. Either this or `schedule_to_close_timeout` must be\n specified.\n\n (-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: "to" is used to indicate interval. --)',
      }),
    heartbeatTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({ description: 'Maximum permitted time between successful worker heartbeats.' }),
    retryPolicy: RetryPolicySchema.exactOptional().openapi({
      description:
        'The retry policy for the activity. Will never exceed `schedule_to_close_timeout`.',
    }),
    priority: PrioritySchema.exactOptional().openapi({
      description:
        'Priority metadata. If this message is not present, or any fields are not\n present, they inherit the values from the workflow.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ActivityOptions')

const ActivityPropertiesModifiedExternallyEventAttributesSchema = z
  .object({
    scheduledEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of the `ACTIVITY_TASK_SCHEDULED` event this modification corresponds to.',
      }),
    newRetryPolicy: RetryPolicySchema.exactOptional().openapi({
      description:
        'If set, update the retry policy of the activity, replacing it with the specified one.\n The number of attempts at the activity is preserved.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ActivityPropertiesModifiedExternallyEventAttributes')

const ActivityTaskCancelRequestedEventAttributesSchema = z
  .object({
    scheduledEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of the `ACTIVITY_TASK_SCHEDULED` event this cancel request corresponds to',
      }),
    workflowTaskCompletedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The `WORKFLOW_TASK_COMPLETED` event which this command was reported with',
      }),
  })
  .openapi({ required: [] })
  .openapi('ActivityTaskCancelRequestedEventAttributes')

const WorkerVersionStampSchema = z
  .object({
    buildId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An opaque whole-worker identifier. Replaces the deprecated `binary_checksum` field when this\n message is included in requests which previously used that.',
      }),
    useVersioning: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set, the worker is opting in to worker versioning. Otherwise, this is used only as a\n marker for workflow reset points and the BuildIDs search attribute.',
      }),
  })
  .openapi({
    description:
      'Deprecated. This message is replaced with `Deployment` and `VersioningBehavior`.\n Identifies the version(s) of a worker that processed a task',
    required: [],
  })
  .openapi('WorkerVersionStamp')

const ActivityTaskCanceledEventAttributesSchema = z
  .object({
    details: PayloadsSchema.exactOptional().openapi({
      description: 'Additional information that the activity reported upon confirming cancellation',
    }),
    latestCancelRequestedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'id of the most recent `ACTIVITY_TASK_CANCEL_REQUESTED` event which refers to the same\n activity',
      }),
    scheduledEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of the `ACTIVITY_TASK_SCHEDULED` event this cancel confirmation corresponds to',
      }),
    startedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of the `ACTIVITY_TASK_STARTED` event this cancel confirmation corresponds to',
      }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'id of the worker who canceled this activity' }),
    workerVersion: WorkerVersionStampSchema.exactOptional().openapi({
      description:
        'Version info of the worker who processed this workflow task.\n Deprecated. This field should be cleaned up when versioning-2 API is removed. [cleanup-experimental-wv]',
    }),
  })
  .openapi({ required: [] })
  .openapi('ActivityTaskCanceledEventAttributes')

const ActivityTaskCompletedEventAttributesSchema = z
  .object({
    result: PayloadsSchema.exactOptional().openapi({
      description:
        'Serialized results of the activity. IE: The return value of the activity function',
    }),
    scheduledEventId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The id of the `ACTIVITY_TASK_SCHEDULED` event this completion corresponds to',
      }),
    startedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The id of the `ACTIVITY_TASK_STARTED` event this completion corresponds to',
      }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'id of the worker that completed this task' }),
    workerVersion: WorkerVersionStampSchema.exactOptional().openapi({
      description:
        'Version info of the worker who processed this workflow task.\n Deprecated. This field should be cleaned up when versioning-2 API is removed. [cleanup-experimental-wv]',
    }),
  })
  .openapi({ required: [] })
  .openapi('ActivityTaskCompletedEventAttributes')

const ActivityTaskFailedEventAttributesSchema = z
  .object({
    failure: FailureSchema.exactOptional().openapi({ description: 'Failure details' }),
    scheduledEventId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The id of the `ACTIVITY_TASK_SCHEDULED` event this failure corresponds to',
      }),
    startedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The id of the `ACTIVITY_TASK_STARTED` event this failure corresponds to',
      }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'id of the worker that failed this task' }),
    retryState: z
      .enum([
        'RETRY_STATE_UNSPECIFIED',
        'RETRY_STATE_IN_PROGRESS',
        'RETRY_STATE_NON_RETRYABLE_FAILURE',
        'RETRY_STATE_TIMEOUT',
        'RETRY_STATE_MAXIMUM_ATTEMPTS_REACHED',
        'RETRY_STATE_RETRY_POLICY_NOT_SET',
        'RETRY_STATE_INTERNAL_SERVER_ERROR',
        'RETRY_STATE_CANCEL_REQUESTED',
      ])
      .exactOptional(),
    workerVersion: WorkerVersionStampSchema.exactOptional().openapi({
      description:
        'Version info of the worker who processed this workflow task.\n Deprecated. This field should be cleaned up when versioning-2 API is removed. [cleanup-experimental-wv]',
    }),
  })
  .openapi({ required: [] })
  .openapi('ActivityTaskFailedEventAttributes')

const ActivityTaskScheduledEventAttributesSchema = z
  .object({
    activityId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The worker/user assigned identifier for the activity' }),
    activityType: ActivityTypeSchema.exactOptional(),
    taskQueue: TaskQueueSchema.exactOptional(),
    header: HeaderSchema.exactOptional(),
    input: PayloadsSchema.exactOptional(),
    scheduleToCloseTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'Indicates how long the caller is willing to wait for an activity completion. Limits how long\n retries will be attempted. Either this or `start_to_close_timeout` must be specified.\n\n (-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: "to" is used to indicate interval. --)',
      }),
    scheduleToStartTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'Limits time an activity task can stay in a task queue before a worker picks it up. This\n timeout is always non retryable, as all a retry would achieve is to put it back into the same\n queue. Defaults to `schedule_to_close_timeout` or workflow execution timeout if not\n specified.\n\n (-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: "to" is used to indicate interval. --)',
      }),
    startToCloseTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'Maximum time an activity is allowed to execute after being picked up by a worker. This\n timeout is always retryable. Either this or `schedule_to_close_timeout` must be\n specified.\n\n (-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: "to" is used to indicate interval. --)',
      }),
    heartbeatTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({ description: 'Maximum permitted time between successful worker heartbeats.' }),
    workflowTaskCompletedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The `WORKFLOW_TASK_COMPLETED` event which this command was reported with',
      }),
    retryPolicy: RetryPolicySchema.exactOptional().openapi({
      description:
        "Activities are assigned a default retry policy controlled by the service's dynamic\n configuration. Retries will happen up to `schedule_to_close_timeout`. To disable retries set\n retry_policy.maximum_attempts to 1.",
    }),
    useWorkflowBuildId: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If this is set, the activity would be assigned to the Build ID of the workflow. Otherwise,\n Assignment rules of the activity's Task Queue will be used to determine the Build ID.\n Deprecated. This field should be cleaned up when versioning-2 API is removed. [cleanup-experimental-wv]",
      }),
    priority: PrioritySchema.exactOptional().openapi({
      description:
        'Priority metadata. If this message is not present, or any fields are not\n present, they inherit the values from the workflow.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ActivityTaskScheduledEventAttributes')

const ActivityTaskStartedEventAttributesSchema = z
  .object({
    scheduledEventId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The id of the `ACTIVITY_TASK_SCHEDULED` event this task corresponds to',
      }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'id of the worker that picked up this task' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "This field is populated from the RecordActivityTaskStartedRequest. Matching service would\n set the request_id on the RecordActivityTaskStartedRequest to a new UUID. This is useful\n in case a RecordActivityTaskStarted call succeed but matching doesn't get that response,\n so matching could retry and history service would return success if the request_id matches.\n In that case, matching will continue to deliver the task to worker. Without this field, history\n service would return AlreadyStarted error, and matching would drop the task.",
      }),
    attempt: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Starting at 1, the number of times this task has been attempted' }),
    lastFailure: FailureSchema.exactOptional().openapi({
      description:
        'Will be set to the most recent failure details, if this task has previously failed and then\n been retried.',
    }),
    workerVersion: WorkerVersionStampSchema.exactOptional().openapi({
      description:
        'Version info of the worker to whom this task was dispatched.\n Deprecated. This field should be cleaned up when versioning-2 API is removed. [cleanup-experimental-wv]',
    }),
    buildIdRedirectCounter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Used by server internally to properly reapply build ID redirects to an execution\n when rebuilding it from events.\n Deprecated. This field should be cleaned up when versioning-2 API is removed. [cleanup-experimental-wv]',
      }),
  })
  .openapi({ required: [] })
  .openapi('ActivityTaskStartedEventAttributes')

const ActivityTaskTimedOutEventAttributesSchema = z
  .object({
    failure: FailureSchema.exactOptional().openapi({
      description:
        'If this activity had failed, was retried, and then timed out, that failure is stored as the\n `cause` in here.',
    }),
    scheduledEventId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The id of the `ACTIVITY_TASK_SCHEDULED` event this timeout corresponds to',
      }),
    startedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The id of the `ACTIVITY_TASK_STARTED` event this timeout corresponds to',
      }),
    retryState: z
      .enum([
        'RETRY_STATE_UNSPECIFIED',
        'RETRY_STATE_IN_PROGRESS',
        'RETRY_STATE_NON_RETRYABLE_FAILURE',
        'RETRY_STATE_TIMEOUT',
        'RETRY_STATE_MAXIMUM_ATTEMPTS_REACHED',
        'RETRY_STATE_RETRY_POLICY_NOT_SET',
        'RETRY_STATE_INTERNAL_SERVER_ERROR',
        'RETRY_STATE_CANCEL_REQUESTED',
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ActivityTaskTimedOutEventAttributes')

const AlertSchema = z
  .object({
    message: z.string().exactOptional(),
    severity: z
      .enum(['SEVERITY_UNSPECIFIED', 'SEVERITY_HIGH', 'SEVERITY_MEDIUM', 'SEVERITY_LOW'])
      .exactOptional(),
  })
  .openapi({ description: 'Alert contains notification and severity.', required: [] })
  .openapi('Alert')

const BackfillRequestSchema = z
  .object({
    startTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Time range to evaluate schedule in. Currently, this time range is\n exclusive on start_time and inclusive on end_time. (This is admittedly\n counterintuitive and it may change in the future, so to be safe, use a\n start time strictly before a scheduled time.) Also note that an action\n nominally scheduled in the interval but with jitter that pushes it after\n end_time will not be included.',
      }),
    endTime: z.iso.datetime({ offset: true }).exactOptional(),
    overlapPolicy: z
      .enum([
        'SCHEDULE_OVERLAP_POLICY_UNSPECIFIED',
        'SCHEDULE_OVERLAP_POLICY_SKIP',
        'SCHEDULE_OVERLAP_POLICY_BUFFER_ONE',
        'SCHEDULE_OVERLAP_POLICY_BUFFER_ALL',
        'SCHEDULE_OVERLAP_POLICY_CANCEL_OTHER',
        'SCHEDULE_OVERLAP_POLICY_TERMINATE_OTHER',
        'SCHEDULE_OVERLAP_POLICY_ALLOW_ALL',
      ])
      .exactOptional()
      .openapi({ description: 'If set, override overlap policy for this request.' }),
  })
  .openapi({ required: [] })
  .openapi('BackfillRequest')

const BadBinaryInfoSchema = z
  .object({
    reason: z.string().exactOptional(),
    operator: z.string().exactOptional(),
    createTime: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BadBinaryInfo')

const BadBinariesSchema = z
  .object({ binaries: z.record(z.string(), BadBinaryInfoSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('BadBinaries')

const BatchOperationCancellationSchema = z
  .object({
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the worker/client' }),
  })
  .openapi({
    description:
      'BatchOperationCancellation sends cancel requests to batch workflows.\n Keep the parameter in sync with temporal.api.workflowservice.v1.RequestCancelWorkflowExecutionRequest.\n Ignore first_execution_run_id because this is used for single workflow operation.',
    required: [],
  })
  .openapi('BatchOperationCancellation')

const BatchOperationDeletionSchema = z
  .object({
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the worker/client' }),
  })
  .openapi({
    description:
      'BatchOperationDeletion sends deletion requests to batch workflows.\n Keep the parameter in sync with temporal.api.workflowservice.v1.DeleteWorkflowExecutionRequest.',
    required: [],
  })
  .openapi('BatchOperationDeletion')

const BatchOperationInfoSchema = z
  .object({
    jobId: z.string().exactOptional().openapi({ description: 'Batch job ID' }),
    state: z
      .enum([
        'BATCH_OPERATION_STATE_UNSPECIFIED',
        'BATCH_OPERATION_STATE_RUNNING',
        'BATCH_OPERATION_STATE_COMPLETED',
        'BATCH_OPERATION_STATE_FAILED',
      ])
      .exactOptional()
      .openapi({ description: 'Batch operation state' }),
    startTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Batch operation start time' }),
    closeTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Batch operation close time' }),
  })
  .openapi({ required: [] })
  .openapi('BatchOperationInfo')

const ResetOptionsSchema = z
  .object({
    workflowTaskId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The id of a specific `WORKFLOW_TASK_COMPLETED`,`WORKFLOW_TASK_TIMED_OUT`, `WORKFLOW_TASK_FAILED`, or\n `WORKFLOW_TASK_STARTED` event to reset to.\n Note that this option doesn't make sense when used as part of a batch request.",
      }),
    buildId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Resets to the first workflow task processed by this build id.\n If the workflow was not processed by the build id, or the workflow task can't be\n determined, no reset will be performed.\n Note that by default, this reset is allowed to be to a prior run in a chain of\n continue-as-new.",
      }),
    resetReapplyType: z
      .enum([
        'RESET_REAPPLY_TYPE_UNSPECIFIED',
        'RESET_REAPPLY_TYPE_SIGNAL',
        'RESET_REAPPLY_TYPE_NONE',
        'RESET_REAPPLY_TYPE_ALL_ELIGIBLE',
      ])
      .exactOptional()
      .openapi({ description: 'Deprecated. Use `options`.\n Default: RESET_REAPPLY_TYPE_SIGNAL' }),
    currentRunOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, limit the reset to only within the current run. (Applies to build_id targets and\n possibly others in the future.)',
      }),
    resetReapplyExcludeTypes: z
      .array(
        z.enum([
          'RESET_REAPPLY_EXCLUDE_TYPE_UNSPECIFIED',
          'RESET_REAPPLY_EXCLUDE_TYPE_SIGNAL',
          'RESET_REAPPLY_EXCLUDE_TYPE_UPDATE',
          'RESET_REAPPLY_EXCLUDE_TYPE_NEXUS',
          'RESET_REAPPLY_EXCLUDE_TYPE_CANCEL_REQUEST',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'Event types not to be reapplied' }),
  })
  .openapi({
    description:
      'Describes where and how to reset a workflow, used for batch reset currently\n and may be used for single-workflow reset later.',
    required: [],
  })
  .openapi('ResetOptions')

const PostResetOperationSignalWorkflowSchema = z
  .object({
    signalName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The workflow author-defined name of the signal to send to the workflow.',
      }),
    input: PayloadsSchema.exactOptional().openapi({
      description: 'Serialized value(s) to provide with the signal.',
    }),
    header: HeaderSchema.exactOptional().openapi({
      description: 'Headers that are passed with the signal to the processing workflow.',
    }),
    links: z
      .array(LinkSchema)
      .exactOptional()
      .openapi({ description: 'Links to be associated with the WorkflowExecutionSignaled event.' }),
  })
  .openapi({
    description:
      'SignalWorkflow represents sending a signal after a workflow reset.\n Keep the parameter in sync with temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest.',
    required: [],
  })
  .openapi('PostResetOperationSignalWorkflow')

const VersioningOverridePinnedOverrideSchema = z
  .object({
    behavior: z
      .enum(['PINNED_OVERRIDE_BEHAVIOR_UNSPECIFIED', 'PINNED_OVERRIDE_BEHAVIOR_PINNED'])
      .exactOptional()
      .openapi({
        description:
          'Defaults to PINNED_OVERRIDE_BEHAVIOR_UNSPECIFIED.\n See `PinnedOverrideBehavior` for details.',
      }),
    version: WorkerDeploymentVersionSchema.exactOptional().openapi({
      description:
        'Specifies the Worker Deployment Version to pin this workflow to.\n Required if the target workflow is not already pinned to a version.\n\n If omitted and the target workflow is already pinned, the effective\n pinned version will be the existing pinned version.\n\n If omitted and the target workflow is not pinned, the override request\n will be rejected with a PreconditionFailed error.',
    }),
  })
  .openapi({ required: [] })
  .openapi('VersioningOverridePinnedOverride')

const DeploymentSchema = z
  .object({
    seriesName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Different versions of the same worker service/application are related together by having a\n shared series name.\n Out of all deployments of a series, one can be designated as the current deployment, which\n receives new workflow executions and new tasks of workflows with\n `VERSIONING_BEHAVIOR_AUTO_UPGRADE` versioning behavior.',
      }),
    buildId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Build ID changes with each version of the worker when the worker program code and/or config\n changes.',
      }),
  })
  .openapi({
    description:
      '`Deployment` identifies a deployment of Temporal workers. The combination of deployment series\n name + build ID serves as the identifier. User can use `WorkerDeploymentOptions` in their worker\n programs to specify these values.\n Deprecated.',
    required: [],
  })
  .openapi('Deployment')

const VersioningOverrideSchema = z
  .object({
    pinned: VersioningOverridePinnedOverrideSchema.exactOptional().openapi({
      description: 'Override the workflow to have Pinned behavior.',
    }),
    autoUpgrade: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Override the workflow to have AutoUpgrade behavior.' }),
    behavior: z
      .enum([
        'VERSIONING_BEHAVIOR_UNSPECIFIED',
        'VERSIONING_BEHAVIOR_PINNED',
        'VERSIONING_BEHAVIOR_AUTO_UPGRADE',
      ])
      .exactOptional()
      .openapi({ description: 'Required.\n Deprecated. Use `override`.' }),
    deployment: DeploymentSchema.exactOptional().openapi({
      description:
        'Required if behavior is `PINNED`. Must be null if behavior is `AUTO_UPGRADE`.\n Identifies the worker deployment to pin the workflow to.\n Deprecated. Use `override.pinned.version`.',
    }),
    pinnedVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required if behavior is `PINNED`. Must be absent if behavior is not `PINNED`.\n Identifies the worker deployment version to pin the workflow to, in the format\n "<deployment_name>.<build_id>".\n Deprecated. Use `override.pinned.version`.',
      }),
  })
  .openapi({
    description:
      'Used to override the versioning behavior (and pinned deployment version, if applicable) of a\n specific workflow execution. If set, this override takes precedence over worker-sent values.\n See `WorkflowExecutionInfo.VersioningInfo` for more information.\n\n To remove the override, call `UpdateWorkflowExecutionOptions` with a null\n `VersioningOverride`, and use the `update_mask` to indicate that it should be mutated.\n\n Pinned behavior overrides are automatically inherited by child workflows, workflow retries, continue-as-new\n workflows, and cron workflows.',
    required: [],
  })
  .openapi('VersioningOverride')

const TimeSkippingConfigSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enables or disables time skipping for this workflow execution.' }),
    maxSkippedDuration: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({ description: 'Maximum total virtual time that can be skipped.' }),
    maxElapsedDuration: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'Maximum elapsed time since time skipping was enabled.\n This includes both skipped time and real time elapsing.',
      }),
  })
  .openapi({
    description:
      'Configuration for time skipping during a workflow execution.\n When enabled, virtual time advances automatically whenever there is no in-flight work.\n In-flight work includes activities, child workflows, Nexus operations, signal/cancel external workflow operations,\n and possibly other features added in the future.\n User timers are not classified as in-flight work and will be skipped over.\n When time advances, it skips to the earlier of the next user timer or the configured bound, if either exists.\n \n Propagation behavior of time skipping:\n The enabled flag, bound fields, and accumulated skipped duration are propagated to related executions as follows:\n (1) Child workflows and continue-as-new: both the configuration and the accumulated skipped duration are\n     inherited from the current execution. The configured bound is shared between the inherited skipped\n     duration and any additional duration skipped by the new run.\n (2) Retry and cron: the configuration and accumulated skipped duration are inherited as recorded when the\n     current workflow started; the accumulated skipped duration of the current run is not propagated.\n (3) Reset: the new run retains the time-skipping configuration of the current execution. Because reset replays\n     all events up to the reset point and re-applies any UpdateWorkflowExecutionOptions changes made after that\n     point, the resulting run ends up with the same final time-skipping configuration as the previous run.',
    required: [],
  })
  .openapi('TimeSkippingConfig')

const WorkflowExecutionOptionsSchema = z
  .object({
    versioningOverride: VersioningOverrideSchema.exactOptional().openapi({
      description:
        'If set, takes precedence over the Versioning Behavior sent by the SDK on Workflow Task completion.',
    }),
    priority: PrioritySchema.exactOptional().openapi({
      description: "If set, overrides the workflow's priority sent by the SDK.",
    }),
    timeSkippingConfig: TimeSkippingConfigSchema.exactOptional().openapi({
      description:
        'Time-skipping configuration for this workflow execution.\n If not set, the time-skipping configuration is not updated by this request;\n the existing configuration is preserved.',
    }),
  })
  .openapi({ required: [] })
  .openapi('WorkflowExecutionOptions')

const PostResetOperationUpdateWorkflowOptionsSchema = z
  .object({
    workflowExecutionOptions: WorkflowExecutionOptionsSchema.exactOptional().openapi({
      description:
        'Update Workflow options that were originally specified via StartWorkflowExecution. Partial updates are accepted and controlled by update_mask.',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Controls which fields from `workflow_execution_options` will be applied.\n To unset a field, set it to null and use the update mask to indicate that it should be mutated.',
      }),
  })
  .openapi({
    description:
      'UpdateWorkflowOptions represents updating workflow execution options after a workflow reset.\n Keep the parameters in sync with temporal.api.workflowservice.v1.UpdateWorkflowExecutionOptionsRequest.',
    required: [],
  })
  .openapi('PostResetOperationUpdateWorkflowOptions')

const PostResetOperationSchema = z
  .object({
    signalWorkflow: PostResetOperationSignalWorkflowSchema.exactOptional(),
    updateWorkflowOptions: PostResetOperationUpdateWorkflowOptionsSchema.exactOptional(),
  })
  .openapi({
    description:
      'PostResetOperation represents an operation to be performed on the new workflow execution after a workflow reset.',
    required: [],
  })
  .openapi('PostResetOperation')

const BatchOperationResetSchema = z
  .object({
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the worker/client.' }),
    options: ResetOptionsSchema.exactOptional().openapi({
      description:
        'Describes what to reset to and how. If set, `reset_type` and `reset_reapply_type` are ignored.',
    }),
    resetType: z
      .enum([
        'RESET_TYPE_UNSPECIFIED',
        'RESET_TYPE_FIRST_WORKFLOW_TASK',
        'RESET_TYPE_LAST_WORKFLOW_TASK',
      ])
      .exactOptional()
      .openapi({ description: 'Deprecated. Use `options`.' }),
    resetReapplyType: z
      .enum([
        'RESET_REAPPLY_TYPE_UNSPECIFIED',
        'RESET_REAPPLY_TYPE_SIGNAL',
        'RESET_REAPPLY_TYPE_NONE',
        'RESET_REAPPLY_TYPE_ALL_ELIGIBLE',
      ])
      .exactOptional()
      .openapi({ description: 'Deprecated. Use `options`.' }),
    postResetOperations: z
      .array(PostResetOperationSchema)
      .exactOptional()
      .openapi({
        description:
          'Operations to perform after the workflow has been reset. These operations will be applied\n to the *new* run of the workflow execution in the order they are provided.\n All operations are applied to the workflow before the first new workflow task is generated',
      }),
  })
  .openapi({
    description:
      'BatchOperationReset sends reset requests to batch workflows.\n Keep the parameter in sync with temporal.api.workflowservice.v1.ResetWorkflowExecutionRequest.',
    required: [],
  })
  .openapi('BatchOperationReset')

const BatchOperationResetActivitiesSchema = z
  .object({
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the worker/client.' }),
    type: z.string().exactOptional(),
    matchAll: z.boolean().exactOptional(),
    resetAttempts: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Setting this flag will also reset the number of attempts.' }),
    resetHeartbeat: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Setting this flag will also reset the heartbeat details.' }),
    keepPaused: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If activity is paused, it will remain paused after reset' }),
    jitter: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'If set, the activity will start at a random time within the specified jitter\n duration, introducing variability to the start time.',
      }),
    restoreOriginalOptions: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set, the activity options will be restored to the defaults.\n Default options are then options activity was created with.\n They are part of the first ActivityTaskScheduled event.',
      }),
  })
  .openapi({
    description:
      'BatchOperationResetActivities sends activity reset requests in a batch.\n NOTE: keep in sync with temporal.api.workflowservice.v1.ResetActivityRequest',
    required: [],
  })
  .openapi('BatchOperationResetActivities')

const BatchOperationSignalSchema = z
  .object({
    signal: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The workflow author-defined name of the signal to send to the workflow',
      }),
    input: PayloadsSchema.exactOptional().openapi({
      description: 'Serialized value(s) to provide with the signal',
    }),
    header: HeaderSchema.exactOptional().openapi({
      description:
        'Headers that are passed with the signal to the processing workflow.\n These can include things like auth or tracing tokens.',
    }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the worker/client' }),
  })
  .openapi({
    description:
      'BatchOperationSignal sends signals to batch workflows.\n Keep the parameter in sync with temporal.api.workflowservice.v1.SignalWorkflowExecutionRequest.',
    required: [],
  })
  .openapi('BatchOperationSignal')

const BatchOperationTerminationSchema = z
  .object({
    details: PayloadsSchema.exactOptional().openapi({
      description: 'Serialized value(s) to provide to the termination event',
    }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the worker/client' }),
  })
  .openapi({
    description:
      'BatchOperationTermination sends terminate requests to batch workflows.\n Keep the parameter in sync with temporal.api.workflowservice.v1.TerminateWorkflowExecutionRequest.\n Ignore first_execution_run_id because this is used for single workflow operation.',
    required: [],
  })
  .openapi('BatchOperationTermination')

const BatchOperationUnpauseActivitiesSchema = z
  .object({
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the worker/client.' }),
    type: z.string().exactOptional(),
    matchAll: z.boolean().exactOptional(),
    resetAttempts: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Setting this flag will also reset the number of attempts.' }),
    resetHeartbeat: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Setting this flag will also reset the heartbeat details.' }),
    jitter: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'If set, the activity will start at a random time within the specified jitter\n duration, introducing variability to the start time.',
      }),
  })
  .openapi({
    description: 'BatchOperationUnpauseActivities sends unpause requests to batch workflows.',
    required: [],
  })
  .openapi('BatchOperationUnpauseActivities')

const BatchOperationUpdateActivityOptionsSchema = z
  .object({
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the worker/client.' }),
    type: z.string().exactOptional(),
    matchAll: z.boolean().exactOptional(),
    activityOptions: ActivityOptionsSchema.exactOptional().openapi({
      description:
        'Update Activity options. Partial updates are accepted and controlled by update_mask.',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({ description: 'Controls which fields from `activity_options` will be applied' }),
    restoreOriginal: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set, the activity options will be restored to the default.\n Default options are then options activity was created with.\n They are part of the first ActivityTaskScheduled event.\n This flag cannot be combined with any other option; if you supply\n restore_original together with other options, the request will be rejected.',
      }),
  })
  .openapi({
    description:
      'BatchOperationUpdateActivityOptions sends an update-activity-options requests in a batch.\n NOTE: keep in sync with temporal.api.workflowservice.v1.UpdateActivityRequest',
    required: [],
  })
  .openapi('BatchOperationUpdateActivityOptions')

const BatchOperationUpdateWorkflowExecutionOptionsSchema = z
  .object({
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the worker/client.' }),
    workflowExecutionOptions: WorkflowExecutionOptionsSchema.exactOptional().openapi({
      description:
        'Update Workflow options that were originally specified via StartWorkflowExecution. Partial updates are accepted and controlled by update_mask.',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Controls which fields from `workflow_execution_options` will be applied.\n To unset a field, set it to null and use the update mask to indicate that it should be mutated.',
      }),
  })
  .openapi({
    description:
      'BatchOperationUpdateWorkflowExecutionOptions sends UpdateWorkflowExecutionOptions requests to batch workflows.\n Keep the parameters in sync with temporal.api.workflowservice.v1.UpdateWorkflowExecutionOptionsRequest.',
    required: [],
  })
  .openapi('BatchOperationUpdateWorkflowExecutionOptions')

const RampByPercentageSchema = z
  .object({
    rampPercentage: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Acceptable range is [0,100).' }),
  })
  .openapi({ required: [] })
  .openapi('RampByPercentage')

const BuildIdAssignmentRuleSchema = z
  .object({
    targetBuildId: z.string().exactOptional(),
    percentageRamp: RampByPercentageSchema.exactOptional().openapi({
      description:
        'This ramp is useful for gradual Blue/Green deployments (and similar)\n where you want to send a certain portion of the traffic to the target\n Build ID.',
    }),
  })
  .openapi({
    description:
      'Assignment rules are applied to *new* Workflow and Activity executions at\n schedule time to assign them to a Build ID.\n\n Assignment rules will not be used in the following cases:\n    - Child Workflows or Continue-As-New Executions who inherit their\n      parent/previous Workflow\'s assigned Build ID (by setting the\n      `inherit_build_id` flag - default behavior in SDKs when the same Task Queue\n      is used.)\n    - An Activity that inherits the assigned Build ID of its Workflow (by\n      setting the `use_workflow_build_id` flag - default behavior in SDKs\n      when the same Task Queue is used.)\n\n In absence of (applicable) redirect rules (`CompatibleBuildIdRedirectRule`s)\n the task will be dispatched to Workers of the Build ID determined by the\n assignment rules (or inherited). Otherwise, the final Build ID will be\n determined by the redirect rules.\n\n Once a Workflow completes its first Workflow Task in a particular Build ID it\n stays in that Build ID regardless of changes to assignment rules. Redirect\n rules can be used to move the workflow to another compatible Build ID.\n\n When using Worker Versioning on a Task Queue, in the steady state,\n there should typically be a single assignment rule to send all new executions\n to the latest Build ID. Existence of at least one such "unconditional"\n rule at all times is enforces by the system, unless the `force` flag is used\n by the user when replacing/deleting these rules (for exceptional cases).\n\n During a deployment, one or more additional rules can be added to assign a\n subset of the tasks to a new Build ID based on a "ramp percentage".\n\n When there are multiple assignment rules for a Task Queue, the rules are\n evaluated in order, starting from index 0. The first applicable rule will be\n applied and the rest will be ignored.\n\n In the event that no assignment rule is applicable on a task (or the Task\n Queue is simply not versioned), the tasks will be dispatched to an\n unversioned Worker.',
    required: [],
  })
  .openapi('BuildIdAssignmentRule')

const TaskQueueReachabilitySchema = z
  .object({
    taskQueue: z.string().exactOptional(),
    reachability: z
      .array(
        z.enum([
          'TASK_REACHABILITY_UNSPECIFIED',
          'TASK_REACHABILITY_NEW_WORKFLOWS',
          'TASK_REACHABILITY_EXISTING_WORKFLOWS',
          'TASK_REACHABILITY_OPEN_WORKFLOWS',
          'TASK_REACHABILITY_CLOSED_WORKFLOWS',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Task reachability for a worker in a single task queue.\n See the TaskReachability docstring for information about each enum variant.\n If reachability is empty, this worker is considered unreachable in this task queue.',
      }),
  })
  .openapi({
    description: 'Reachability of tasks for a worker on a single task queue.',
    required: [],
  })
  .openapi('TaskQueueReachability')

const BuildIdReachabilitySchema = z
  .object({
    buildId: z
      .string()
      .exactOptional()
      .openapi({ description: 'A build id or empty if unversioned.' }),
    taskQueueReachability: z
      .array(TaskQueueReachabilitySchema)
      .exactOptional()
      .openapi({ description: 'Reachability per task queue.' }),
  })
  .openapi({
    description: 'Reachability of tasks for a worker by build id, in one or more task queues.',
    required: [],
  })
  .openapi('BuildIdReachability')

const CalendarSpecSchema = z
  .object({
    second: z
      .string()
      .exactOptional()
      .openapi({ description: 'Expression to match seconds. Default: 0' }),
    minute: z
      .string()
      .exactOptional()
      .openapi({ description: 'Expression to match minutes. Default: 0' }),
    hour: z
      .string()
      .exactOptional()
      .openapi({ description: 'Expression to match hours. Default: 0' }),
    dayOfMonth: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Expression to match days of the month. Default: *\n (-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: standard name of field --)',
      }),
    month: z
      .string()
      .exactOptional()
      .openapi({ description: 'Expression to match months. Default: *' }),
    year: z
      .string()
      .exactOptional()
      .openapi({ description: 'Expression to match years. Default: *' }),
    dayOfWeek: z
      .string()
      .exactOptional()
      .openapi({ description: 'Expression to match days of the week. Default: *' }),
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'Free-form comment describing the intention of this spec.' }),
  })
  .openapi({
    description:
      'CalendarSpec describes an event specification relative to the calendar,\n similar to a traditional cron specification, but with labeled fields. Each\n field can be one of:\n   *: matches always\n   x: matches when the field equals x\n   x/y : matches when the field equals x+n*y where n is an integer\n   x-z: matches when the field is between x and z inclusive\n   w,x,y,...: matches when the field is one of the listed values\n Each x, y, z, ... is either a decimal integer, or a month or day of week name\n or abbreviation (in the appropriate fields).\n A timestamp matches if all fields match.\n Note that fields have different default values, for convenience.\n Note that the special case that some cron implementations have for treating\n day_of_month and day_of_week as "or" instead of "and" when both are set is\n not implemented.\n day_of_week can accept 0 or 7 as Sunday\n CalendarSpec gets compiled into StructuredCalendarSpec, which is what will be\n returned if you describe the schedule.',
    required: [],
  })
  .openapi('CalendarSpec')

const CallbackNexusSchema = z
  .object({
    url: z.string().exactOptional().openapi({ description: 'Callback URL.' }),
    header: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Header to attach to callback request.' }),
  })
  .openapi({ required: [] })
  .openapi('CallbackNexus')

const CallbackInternalSchema = z
  .object({ data: z.string().exactOptional().openapi({ description: 'Opaque internal data.' }) })
  .openapi({
    description:
      'Callbacks to be delivered internally within the system.\n This variant is not settable in the API and will be rejected by the service with an INVALID_ARGUMENT error.\n The only reason that this is exposed is because callbacks are replicated across clusters via the\n WorkflowExecutionStarted event, which is defined in the public API.',
    required: [],
  })
  .openapi('CallbackInternal')

const CallbackSchema = z
  .object({
    nexus: CallbackNexusSchema.exactOptional(),
    internal: CallbackInternalSchema.exactOptional(),
    links: z
      .array(LinkSchema)
      .exactOptional()
      .openapi({
        description:
          'Links associated with the callback. It can be used to link to underlying resources of the\n callback.',
      }),
  })
  .openapi({
    description:
      'Callback to attach to various events in the system, e.g. workflow run completion.',
    required: [],
  })
  .openapi('Callback')

const CallbackInfoSchema = z
  .object({
    callback: CallbackSchema.exactOptional().openapi({
      description: 'Information on how this callback should be invoked (e.g. its URL and type).',
    }),
    registrationTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time when the callback was registered.' }),
    state: z
      .enum([
        'CALLBACK_STATE_UNSPECIFIED',
        'CALLBACK_STATE_STANDBY',
        'CALLBACK_STATE_SCHEDULED',
        'CALLBACK_STATE_BACKING_OFF',
        'CALLBACK_STATE_FAILED',
        'CALLBACK_STATE_SUCCEEDED',
        'CALLBACK_STATE_BLOCKED',
      ])
      .exactOptional()
      .openapi({ description: 'The current state of the callback.' }),
    attempt: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of attempts made to deliver the callback.\n This number represents a minimum bound since the attempt is incremented after the callback request completes.',
      }),
    lastAttemptCompleteTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time when the last attempt completed.' }),
    lastAttemptFailure: FailureSchema.exactOptional().openapi({
      description: "The last attempt's failure, if any.",
    }),
    nextAttemptScheduleTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time when the next attempt is scheduled.' }),
    blockedReason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If the state is BLOCKED, blocked reason provides additional information.',
      }),
  })
  .openapi({
    description:
      'Common callback information. Specific CallbackInfo messages should embed this and may include additional fields.',
    required: [],
  })
  .openapi('CallbackInfo')

const ChildWorkflowExecutionCanceledEventAttributesSchema = z
  .object({
    details: PayloadsSchema.exactOptional(),
    namespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Namespace of the child workflow.\n SDKs and UI tools should use `namespace` field but server must use `namespace_id` only.',
      }),
    namespaceId: z.string().exactOptional(),
    workflowExecution: WorkflowExecutionSchema.exactOptional(),
    workflowType: WorkflowTypeSchema.exactOptional(),
    initiatedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the `START_CHILD_WORKFLOW_EXECUTION_INITIATED` event which this event corresponds to',
      }),
    startedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the `CHILD_WORKFLOW_EXECUTION_STARTED` event which this event corresponds to',
      }),
  })
  .openapi({ required: [] })
  .openapi('ChildWorkflowExecutionCanceledEventAttributes')

const ChildWorkflowExecutionCompletedEventAttributesSchema = z
  .object({
    result: PayloadsSchema.exactOptional(),
    namespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Namespace of the child workflow.\n SDKs and UI tools should use `namespace` field but server must use `namespace_id` only.',
      }),
    namespaceId: z.string().exactOptional(),
    workflowExecution: WorkflowExecutionSchema.exactOptional(),
    workflowType: WorkflowTypeSchema.exactOptional(),
    initiatedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the `START_CHILD_WORKFLOW_EXECUTION_INITIATED` event which this event corresponds to',
      }),
    startedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the `CHILD_WORKFLOW_EXECUTION_STARTED` event which this event corresponds to',
      }),
  })
  .openapi({ required: [] })
  .openapi('ChildWorkflowExecutionCompletedEventAttributes')

const ChildWorkflowExecutionFailedEventAttributesSchema = z
  .object({
    failure: FailureSchema.exactOptional(),
    namespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Namespace of the child workflow.\n SDKs and UI tools should use `namespace` field but server must use `namespace_id` only.',
      }),
    namespaceId: z.string().exactOptional(),
    workflowExecution: WorkflowExecutionSchema.exactOptional(),
    workflowType: WorkflowTypeSchema.exactOptional(),
    initiatedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the `START_CHILD_WORKFLOW_EXECUTION_INITIATED` event which this event corresponds to',
      }),
    startedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the `CHILD_WORKFLOW_EXECUTION_STARTED` event which this event corresponds to',
      }),
    retryState: z
      .enum([
        'RETRY_STATE_UNSPECIFIED',
        'RETRY_STATE_IN_PROGRESS',
        'RETRY_STATE_NON_RETRYABLE_FAILURE',
        'RETRY_STATE_TIMEOUT',
        'RETRY_STATE_MAXIMUM_ATTEMPTS_REACHED',
        'RETRY_STATE_RETRY_POLICY_NOT_SET',
        'RETRY_STATE_INTERNAL_SERVER_ERROR',
        'RETRY_STATE_CANCEL_REQUESTED',
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChildWorkflowExecutionFailedEventAttributes')

const ChildWorkflowExecutionStartedEventAttributesSchema = z
  .object({
    namespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Namespace of the child workflow.\n SDKs and UI tools should use `namespace` field but server must use `namespace_id` only.',
      }),
    namespaceId: z.string().exactOptional(),
    initiatedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the `START_CHILD_WORKFLOW_EXECUTION_INITIATED` event which this event corresponds to',
      }),
    workflowExecution: WorkflowExecutionSchema.exactOptional(),
    workflowType: WorkflowTypeSchema.exactOptional(),
    header: HeaderSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChildWorkflowExecutionStartedEventAttributes')

const ChildWorkflowExecutionTerminatedEventAttributesSchema = z
  .object({
    namespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Namespace of the child workflow.\n SDKs and UI tools should use `namespace` field but server must use `namespace_id` only.',
      }),
    namespaceId: z.string().exactOptional(),
    workflowExecution: WorkflowExecutionSchema.exactOptional(),
    workflowType: WorkflowTypeSchema.exactOptional(),
    initiatedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the `START_CHILD_WORKFLOW_EXECUTION_INITIATED` event which this event corresponds to',
      }),
    startedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the `CHILD_WORKFLOW_EXECUTION_STARTED` event which this event corresponds to',
      }),
  })
  .openapi({ required: [] })
  .openapi('ChildWorkflowExecutionTerminatedEventAttributes')

const ChildWorkflowExecutionTimedOutEventAttributesSchema = z
  .object({
    namespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Namespace of the child workflow.\n SDKs and UI tools should use `namespace` field but server must use `namespace_id` only.',
      }),
    namespaceId: z.string().exactOptional(),
    workflowExecution: WorkflowExecutionSchema.exactOptional(),
    workflowType: WorkflowTypeSchema.exactOptional(),
    initiatedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the `START_CHILD_WORKFLOW_EXECUTION_INITIATED` event which this event corresponds to',
      }),
    startedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the `CHILD_WORKFLOW_EXECUTION_STARTED` event which this event corresponds to',
      }),
    retryState: z
      .enum([
        'RETRY_STATE_UNSPECIFIED',
        'RETRY_STATE_IN_PROGRESS',
        'RETRY_STATE_NON_RETRYABLE_FAILURE',
        'RETRY_STATE_TIMEOUT',
        'RETRY_STATE_MAXIMUM_ATTEMPTS_REACHED',
        'RETRY_STATE_RETRY_POLICY_NOT_SET',
        'RETRY_STATE_INTERNAL_SERVER_ERROR',
        'RETRY_STATE_CANCEL_REQUESTED',
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChildWorkflowExecutionTimedOutEventAttributes')

const ClusterReplicationConfigSchema = z
  .object({ clusterName: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ClusterReplicationConfig')

const CompatibleBuildIdRedirectRuleSchema = z
  .object({
    sourceBuildId: z.string().exactOptional(),
    targetBuildId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Target Build ID must be compatible with the Source Build ID; that is it\n must be able to process event histories made by the Source Build ID by\n using [Patching](https://docs.temporal.io/workflows#patching) or other\n means.',
      }),
  })
  .openapi({
    description:
      "These rules apply to tasks assigned to a particular Build ID\n (`source_build_id`) to redirect them to another *compatible* Build ID\n (`target_build_id`).\n\n It is user's responsibility to ensure that the target Build ID is compatible\n with the source Build ID (e.g. by using the Patching API).\n\n Most deployments are not expected to need these rules, however following\n situations can greatly benefit from redirects:\n  - Need to move long-running Workflow Executions from an old Build ID to a\n    newer one.\n  - Need to hotfix some broken or stuck Workflow Executions.\n\n In steady state, redirect rules are beneficial when dealing with old\n Executions ran on now-decommissioned Build IDs:\n  - To redirecting the Workflow Queries to the current (compatible) Build ID.\n  - To be able to Reset an old Execution so it can run on the current\n    (compatible) Build ID.\n\n Redirect rules can be chained.",
    required: [],
  })
  .openapi('CompatibleBuildIdRedirectRule')

const CompatibleVersionSetSchema = z
  .object({
    buildIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'All the compatible versions, unordered, except for the last element, which is considered the set "default".',
      }),
  })
  .openapi({
    description:
      'Used by the worker versioning APIs, represents an unordered set of one or more versions which are\n considered to be compatible with each other. Currently the versions are always worker build IDs.',
    required: [],
  })
  .openapi('CompatibleVersionSet')

const ComputeProviderSchema = z
  .object({
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Type of the compute provider. This string is implementation-specific and\n can be used by implementations to understand how to interpret the\n contents of the provider_details field.',
      }),
    details: PayloadSchema.exactOptional().openapi({
      description:
        "Contains provider-specific instructions and configuration.\n For server-implemented providers, use the SDK's default content\n converter to ensure the server can understand it.\n For remote-implemented providers, you might use your own content\n converters according to what the remote endpoints understand.",
    }),
    nexusEndpoint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. If the compute provider is a Nexus service, this should point\n there.',
      }),
  })
  .openapi({
    description:
      "ComputeProvider stores information used by a worker control plane controller\n to respond to worker lifecycle events. For example, when a Task is received\n on a TaskQueue that has no active pollers, a serverless worker lifecycle\n controller might need to invoke an AWS Lambda Function that itself ends up\n calling the SDK's worker.New() function.",
    required: [],
  })
  .openapi('ComputeProvider')

const ComputeScalerSchema = z
  .object({
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Type of the compute scaler. this string is implementation-specific and\n can be used by implementations to understand how to interpret the\n contents of the scaler_details field.',
      }),
    details: PayloadSchema.exactOptional().openapi({
      description:
        "Contains scaler-specific instructions and configuration.\n For server-implemented scalers, use the SDK's default data\n converter to ensure the server can understand it.\n For remote-implemented scalers, you might use your own data\n converters according to what the remote endpoints understand.",
    }),
  })
  .openapi({
    description:
      'ComputeScaler instructs the Temporal Service when to scale up or down the number of\n Workers that comprise a WorkerDeployment.',
    required: [],
  })
  .openapi('ComputeScaler')

const ComputeConfigScalingGroupSchema = z
  .object({
    taskQueueTypes: z
      .array(
        z.enum([
          'TASK_QUEUE_TYPE_UNSPECIFIED',
          'TASK_QUEUE_TYPE_WORKFLOW',
          'TASK_QUEUE_TYPE_ACTIVITY',
          'TASK_QUEUE_TYPE_NEXUS',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Optional. The set of task queue types this scaling group serves.\n If not provided, this scaling group serves all not otherwise defined\n task types.',
      }),
    provider: ComputeProviderSchema.exactOptional().openapi({
      description:
        'Stores instructions for a worker control plane controller how to respond\n to worker lifeycle events.',
    }),
    scaler: ComputeScalerSchema.exactOptional().openapi({
      description:
        'Informs a worker lifecycle controller *when* and *how often* to perform\n certain worker lifecycle actions like starting a serverless worker.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ComputeConfigScalingGroup')

const ComputeConfigSchema = z
  .object({
    scalingGroups: z
      .record(z.string(), ComputeConfigScalingGroupSchema)
      .exactOptional()
      .openapi({
        description:
          'Each scaling group describes a compute config for a specific subset of the worker\n deployment version: covering a specific set of task types and/or regions.\n Having different configurations for different task types, allows independent\n tuning of activity and workflow task processing (for example).\n\n The key of the map is the ID of the scaling group used to reference it in subsequent\n update calls.',
      }),
  })
  .openapi({
    description:
      'ComputeConfig stores configuration that helps a worker control plane\n controller understand *when* and *how* to respond to worker lifecycle\n events.',
    required: [],
  })
  .openapi('ComputeConfig')

const ComputeConfigScalingGroupSummarySchema = z
  .object({
    taskQueueTypes: z
      .array(
        z.enum([
          'TASK_QUEUE_TYPE_UNSPECIFIED',
          'TASK_QUEUE_TYPE_WORKFLOW',
          'TASK_QUEUE_TYPE_ACTIVITY',
          'TASK_QUEUE_TYPE_NEXUS',
        ]),
      )
      .exactOptional(),
    providerType: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ComputeConfigScalingGroupSummary')

const ComputeConfigScalingGroupUpdateSchema = z
  .object({
    scalingGroup: ComputeConfigScalingGroupSchema.exactOptional(),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Controls which fields from `scaling_group` will be applied. Semantics:\n - Mask is ignored for new scaling groups (only applicable when scaling group already exists).\n - Empty mask for an existing scaling group is no-op: no change.\n - Non-empty mask for an existing scaling group will update/unset only to the fields\n   mentioned in the mask.\n - Accepted paths: "task_queue_types", "provider", "provider.type", "provider.details",\n   "provider.nexus_endpoint", "scaler", "scaler.type", "scaler.details"',
      }),
  })
  .openapi({ required: [] })
  .openapi('ComputeConfigScalingGroupUpdate')

const ComputeConfigSummarySchema = z
  .object({
    scalingGroups: z.record(z.string(), ComputeConfigScalingGroupSummarySchema).exactOptional(),
  })
  .openapi({
    description: 'A subset of information in ComputeConfig optimized for list views.',
    required: [],
  })
  .openapi('ComputeConfigSummary')

const ConfigMetadataSchema = z
  .object({
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'Reason for why the config was set.' }),
    updateIdentity: z
      .string()
      .exactOptional()
      .openapi({
        description: "Identity of the last updater.\n Set by the request's identity field.",
      }),
    updateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time of the last update.' }),
  })
  .openapi({ required: [] })
  .openapi('ConfigMetadata')

const CountActivityExecutionsResponseAggregationGroupSchema = z
  .object({
    groupValues: z.array(PayloadSchema).exactOptional(),
    count: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CountActivityExecutionsResponseAggregationGroup')

const CountActivityExecutionsResponseSchema = z
  .object({
    count: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `query` is not grouping by any field, the count is an approximate number\n of activities that match the query.\n If `query` is grouping by a field, the count is simply the sum of the counts\n of the groups returned in the response. This number can be smaller than the\n total number of activities matching the query.',
      }),
    groups: z
      .array(CountActivityExecutionsResponseAggregationGroupSchema)
      .exactOptional()
      .openapi({
        description:
          'Contains the groups if the request is grouping by a field.\n The list might not be complete, and the counts of each group is approximate.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CountActivityExecutionsResponse')

const CountNexusOperationExecutionsResponseAggregationGroupSchema = z
  .object({
    groupValues: z.array(PayloadSchema).exactOptional(),
    count: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CountNexusOperationExecutionsResponseAggregationGroup')

const CountNexusOperationExecutionsResponseSchema = z
  .object({
    count: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `query` is not grouping by any field, the count is an approximate number\n of operations that match the query.\n If `query` is grouping by a field, the count is simply the sum of the counts\n of the groups returned in the response. This number can be smaller than the\n total number of operations matching the query.',
      }),
    groups: z
      .array(CountNexusOperationExecutionsResponseAggregationGroupSchema)
      .exactOptional()
      .openapi({
        description:
          'Contains the groups if the request is grouping by a field.\n The list might not be complete, and the counts of each group is approximate.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CountNexusOperationExecutionsResponse')

const CountSchedulesResponseAggregationGroupSchema = z
  .object({
    groupValues: z.array(PayloadSchema).exactOptional(),
    count: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CountSchedulesResponseAggregationGroup')

const CountSchedulesResponseSchema = z
  .object({
    count: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `query` is not grouping by any field, the count is an approximate number\n of schedules that match the query.\n If `query` is grouping by a field, the count is simply the sum of the counts\n of the groups returned in the response. This number can be smaller than the\n total number of schedules matching the query.',
      }),
    groups: z
      .array(CountSchedulesResponseAggregationGroupSchema)
      .exactOptional()
      .openapi({
        description:
          'Contains the groups if the request is grouping by a field.\n The list might not be complete, and the counts of each group is approximate.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CountSchedulesResponse')

const CountWorkflowExecutionsResponseAggregationGroupSchema = z
  .object({
    groupValues: z.array(PayloadSchema).exactOptional(),
    count: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CountWorkflowExecutionsResponseAggregationGroup')

const CountWorkflowExecutionsResponseSchema = z
  .object({
    count: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If `query` is not grouping by any field, the count is an approximate number\n of workflows that matches the query.\n If `query` is grouping by a field, the count is simply the sum of the counts\n of the groups returned in the response. This number can be smaller than the\n total number of workflows matching the query.',
      }),
    groups: z
      .array(CountWorkflowExecutionsResponseAggregationGroupSchema)
      .exactOptional()
      .openapi({
        description:
          '`groups` contains the groups if the request is grouping by a field.\n The list might not be complete, and the counts of each group is approximate.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CountWorkflowExecutionsResponse')

const EndpointTargetWorkerSchema = z
  .object({
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'Namespace to route requests to.' }),
    taskQueue: z
      .string()
      .exactOptional()
      .openapi({ description: 'Nexus task queue to route requests to.' }),
  })
  .openapi({
    description: 'Target a worker polling on a Nexus task queue in a specific namespace.',
    required: [],
  })
  .openapi('EndpointTargetWorker')

const EndpointTargetExternalSchema = z
  .object({ url: z.string().exactOptional().openapi({ description: 'URL to call.' }) })
  .openapi({
    description:
      'Target an external server by URL.\n At a later point, this will support providing credentials, in the meantime, an http.RoundTripper can be injected\n into the server to modify the request.',
    required: [],
  })
  .openapi('EndpointTargetExternal')

const EndpointTargetSchema = z
  .object({
    worker: EndpointTargetWorkerSchema.exactOptional(),
    external: EndpointTargetExternalSchema.exactOptional(),
  })
  .openapi({ description: 'Target to route requests to.', required: [] })
  .openapi('EndpointTarget')

const EndpointSpecSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Endpoint name, unique for this cluster. Must match `[a-zA-Z_][a-zA-Z0-9_]*`.\n Renaming an endpoint breaks all workflow callers that reference this endpoint, causing operations to fail.',
      }),
    description: PayloadSchema.exactOptional().openapi({
      description:
        'Markdown description serialized as a single JSON string.\n If the Payload is encrypted, the UI and CLI may decrypt with the configured codec server endpoint.\n By default, the server enforces a limit of 20,000 bytes for this entire payload.',
    }),
    target: EndpointTargetSchema.exactOptional().openapi({
      description: 'Target to route requests to.',
    }),
  })
  .openapi({ description: 'Contains mutable fields for an Endpoint.', required: [] })
  .openapi('EndpointSpec')

const CreateNexusEndpointRequestSchema = z
  .object({
    spec: EndpointSpecSchema.exactOptional().openapi({
      description: 'Endpoint definition to create.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateNexusEndpointRequest')

const EndpointSchema = z
  .object({
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Data version for this endpoint, incremented for every update issued via the UpdateNexusEndpoint API.',
      }),
    id: z.string().exactOptional().openapi({ description: 'Unique server-generated endpoint ID.' }),
    spec: EndpointSpecSchema.exactOptional().openapi({ description: 'Spec for the endpoint.' }),
    createdTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the endpoint was created.\n (-- api-linter: core::0142::time-field-names=disabled\n     aip.dev/not-precedent: Not following linter rules. --)',
      }),
    lastModifiedTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the endpoint was last modified.\n Will not be set if the endpoint has never been modified.\n (-- api-linter: core::0142::time-field-names=disabled\n     aip.dev/not-precedent: Not following linter rules. --)',
      }),
    urlPrefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Server exposed URL prefix for invocation of operations on this endpoint.\n This doesn't include the protocol, hostname or port as the server does not know how it should be accessed\n publicly. The URL is stable in the face of endpoint renames.",
      }),
  })
  .openapi({
    description:
      'A cluster-global binding from an endpoint ID to a target for dispatching incoming Nexus requests.',
    required: [],
  })
  .openapi('Endpoint')

const CreateNexusEndpointResponseSchema = z
  .object({
    endpoint: EndpointSchema.exactOptional().openapi({
      description: 'Data post acceptance. Can be used to issue additional updates to this record.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateNexusEndpointResponse')

const RangeSchema = z
  .object({
    start: z.int32().exactOptional().openapi({ description: 'Start of range (inclusive).' }),
    end: z.int32().exactOptional().openapi({ description: 'End of range (inclusive).' }),
    step: z.int32().exactOptional().openapi({ description: 'Step (optional, default 1).' }),
  })
  .openapi({
    description:
      'Range represents a set of integer values, used to match fields of a calendar\n time in StructuredCalendarSpec. If end < start, then end is interpreted as\n equal to start. This means you can use a Range with start set to a value, and\n end and step unset (defaulting to 0) to represent a single value.',
    required: [],
  })
  .openapi('Range')

const StructuredCalendarSpecSchema = z
  .object({
    second: z.array(RangeSchema).exactOptional().openapi({ description: 'Match seconds (0-59)' }),
    minute: z.array(RangeSchema).exactOptional().openapi({ description: 'Match minutes (0-59)' }),
    hour: z.array(RangeSchema).exactOptional().openapi({ description: 'Match hours (0-23)' }),
    dayOfMonth: z
      .array(RangeSchema)
      .exactOptional()
      .openapi({
        description:
          'Match days of the month (1-31)\n (-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: standard name of field --)',
      }),
    month: z.array(RangeSchema).exactOptional().openapi({ description: 'Match months (1-12)' }),
    year: z.array(RangeSchema).exactOptional().openapi({ description: 'Match years.' }),
    dayOfWeek: z
      .array(RangeSchema)
      .exactOptional()
      .openapi({ description: 'Match days of the week (0-6; 0 is Sunday).' }),
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'Free-form comment describing the intention of this spec.' }),
  })
  .openapi({
    description:
      'StructuredCalendarSpec describes an event specification relative to the\n calendar, in a form that\'s easy to work with programmatically. Each field can\n be one or more ranges.\n A timestamp matches if at least one range of each field matches the\n corresponding fields of the timestamp, except for year: if year is missing,\n that means all years match. For all fields besides year, at least one Range\n must be present to match anything.\n Relative expressions such as "last day of the month" or "third Monday" are not currently\n representable; callers must enumerate the concrete days they require.',
    required: [],
  })
  .openapi('StructuredCalendarSpec')

const IntervalSpecSchema = z
  .object({
    interval: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional(),
    phase: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional(),
  })
  .openapi({
    description:
      'IntervalSpec matches times that can be expressed as:\n epoch + n * interval + phase\n where n is an integer.\n phase defaults to zero if missing. interval is required.\n Both interval and phase must be non-negative and are truncated to the nearest\n second before any calculations.\n For example, an interval of 1 hour with phase of zero would match every hour,\n on the hour. The same interval but a phase of 19 minutes would match every\n xx:19:00. An interval of 28 days with phase zero would match\n 2022-02-17T00:00:00Z (among other times). The same interval with a phase of 3\n days, 5 hours, and 23 minutes would match 2022-02-20T05:23:00Z instead.',
    required: [],
  })
  .openapi('IntervalSpec')

const ScheduleSpecSchema = z
  .object({
    structuredCalendar: z
      .array(StructuredCalendarSpecSchema)
      .exactOptional()
      .openapi({ description: 'Calendar-based specifications of times.' }),
    cronString: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'cron_string holds a traditional cron specification as a string. It\n accepts 5, 6, or 7 fields, separated by spaces, and interprets them the\n same way as CalendarSpec.\n 5 fields:         minute, hour, day_of_month, month, day_of_week\n 6 fields:         minute, hour, day_of_month, month, day_of_week, year\n 7 fields: second, minute, hour, day_of_month, month, day_of_week, year\n If year is not given, it defaults to *. If second is not given, it\n defaults to 0.\n Shorthands @yearly, @monthly, @weekly, @daily, and @hourly are also\n accepted instead of the 5-7 time fields.\n Optionally, the string can be preceded by CRON_TZ=<timezone name> or\n TZ=<timezone name>, which will get copied to timezone_name. (There must\n not also be a timezone_name present.)\n Optionally "#" followed by a comment can appear at the end of the string.\n Note that the special case that some cron implementations have for\n treating day_of_month and day_of_week as "or" instead of "and" when both\n are set is not implemented.\n @every <interval>[/<phase>] is accepted and gets compiled into an\n IntervalSpec instead. <interval> and <phase> should be a decimal integer\n with a unit suffix s, m, h, or d.',
      }),
    calendar: z
      .array(CalendarSpecSchema)
      .exactOptional()
      .openapi({ description: 'Calendar-based specifications of times.' }),
    interval: z
      .array(IntervalSpecSchema)
      .exactOptional()
      .openapi({ description: 'Interval-based specifications of times.' }),
    excludeCalendar: z
      .array(CalendarSpecSchema)
      .exactOptional()
      .openapi({
        description:
          'Any timestamps matching any of exclude_* will be skipped.\n Deprecated. Use exclude_structured_calendar.',
      }),
    excludeStructuredCalendar: z.array(StructuredCalendarSpecSchema).exactOptional(),
    startTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'If start_time is set, any timestamps before start_time will be skipped.\n (Together, start_time and end_time make an inclusive interval.)',
      }),
    endTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'If end_time is set, any timestamps after end_time will be skipped.',
      }),
    jitter: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'All timestamps will be incremented by a random value from 0 to this\n amount of jitter. Default: 0',
      }),
    timezoneName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time zone to interpret all calendar-based specs in.\n\n If unset, defaults to UTC. We recommend using UTC for your application if\n at all possible, to avoid various surprising properties of time zones.\n\n Time zones may be provided by name, corresponding to names in the IANA\n time zone database (see https://www.iana.org/time-zones). The definition\n will be loaded by the Temporal server from the environment it runs in.\n\n If your application requires more control over the time zone definition\n used, it may pass in a complete definition in the form of a TZif file\n from the time zone database. If present, this will be used instead of\n loading anything from the environment. You are then responsible for\n updating timezone_data when the definition changes.\n\n Calendar spec matching is based on literal matching of the clock time\n with no special handling of DST: if you write a calendar spec that fires\n at 2:30am and specify a time zone that follows DST, that action will not\n be triggered on the day that has no 2:30am. Similarly, an action that\n fires at 1:30am will be triggered twice on the day that has two 1:30s.\n\n Also note that no actions are taken on leap-seconds (e.g. 23:59:60 UTC).',
      }),
    timezoneData: z.string().exactOptional(),
  })
  .openapi({
    description:
      "ScheduleSpec is a complete description of a set of absolute timestamps\n (possibly infinite) that an action should occur at. The meaning of a\n ScheduleSpec depends only on its contents and never changes, except that the\n definition of a time zone can change over time (most commonly, when daylight\n saving time policy changes for an area). To create a totally self-contained\n ScheduleSpec, use UTC or include timezone_data.\n\n For input, you can provide zero or more of: structured_calendar, calendar,\n cron_string, interval, and exclude_structured_calendar, and all of them will\n be used (the schedule will take action at the union of all of their times,\n minus the ones that match exclude_structured_calendar).\n\n On input, calendar and cron_string fields will be compiled into\n structured_calendar (and maybe interval and timezone_name), so if you\n Describe a schedule, you'll see only structured_calendar, interval, etc.\n\n If a spec has no matching times after the current time, then the schedule\n will be subject to automatic deletion (after several days).",
    required: [],
  })
  .openapi('ScheduleSpec')

const MemoSchema = z
  .object({ fields: z.record(z.string(), PayloadSchema).exactOptional() })
  .openapi({
    description:
      'A user-defined set of *unindexed* fields that are exposed when listing/searching workflows',
    required: [],
  })
  .openapi('Memo')

const NewWorkflowExecutionInfoSchema = z
  .object({
    workflowId: z.string().exactOptional(),
    workflowType: WorkflowTypeSchema.exactOptional(),
    taskQueue: TaskQueueSchema.exactOptional(),
    input: PayloadsSchema.exactOptional().openapi({
      description: 'Serialized arguments to the workflow.',
    }),
    workflowExecutionTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description: 'Total workflow execution timeout including retries and continue as new.',
      }),
    workflowRunTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({ description: 'Timeout of a single workflow run.' }),
    workflowTaskTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({ description: 'Timeout of a single workflow task.' }),
    workflowIdReusePolicy: z
      .enum([
        'WORKFLOW_ID_REUSE_POLICY_UNSPECIFIED',
        'WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE',
        'WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE_FAILED_ONLY',
        'WORKFLOW_ID_REUSE_POLICY_REJECT_DUPLICATE',
        'WORKFLOW_ID_REUSE_POLICY_TERMINATE_IF_RUNNING',
      ])
      .exactOptional()
      .openapi({ description: 'Default: WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE.' }),
    retryPolicy: RetryPolicySchema.exactOptional().openapi({
      description:
        'The retry policy for the workflow. Will never exceed `workflow_execution_timeout`.',
    }),
    cronSchedule: z
      .string()
      .exactOptional()
      .openapi({
        description: 'See https://docs.temporal.io/docs/content/what-is-a-temporal-cron-job/',
      }),
    memo: MemoSchema.exactOptional(),
    searchAttributes: SearchAttributesSchema.exactOptional(),
    header: HeaderSchema.exactOptional(),
    userMetadata: UserMetadataSchema.exactOptional().openapi({
      description:
        'Metadata on the workflow if it is started. This is carried over to the WorkflowExecutionConfig\n for use by user interfaces to display the fixed as-of-start summary and details of the\n workflow.',
    }),
    versioningOverride: VersioningOverrideSchema.exactOptional().openapi({
      description:
        'If set, takes precedence over the Versioning Behavior sent by the SDK on Workflow Task completion.\n To unset the override after the workflow is running, use UpdateWorkflowExecutionOptions.',
    }),
    priority: PrioritySchema.exactOptional().openapi({ description: 'Priority metadata' }),
  })
  .openapi({
    description:
      'NewWorkflowExecutionInfo is a shared message that encapsulates all the\n required arguments to starting a workflow in different contexts.',
    required: [],
  })
  .openapi('NewWorkflowExecutionInfo')

const ScheduleActionSchema = z
  .object({
    startWorkflow: NewWorkflowExecutionInfoSchema.exactOptional().openapi({
      description:
        'All fields of NewWorkflowExecutionInfo are valid except for:\n - workflow_id_reuse_policy\n - cron_schedule\n The workflow id of the started workflow may not match this exactly,\n it may have a timestamp appended for uniqueness.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ScheduleAction')

const SchedulePoliciesSchema = z
  .object({
    overlapPolicy: z
      .enum([
        'SCHEDULE_OVERLAP_POLICY_UNSPECIFIED',
        'SCHEDULE_OVERLAP_POLICY_SKIP',
        'SCHEDULE_OVERLAP_POLICY_BUFFER_ONE',
        'SCHEDULE_OVERLAP_POLICY_BUFFER_ALL',
        'SCHEDULE_OVERLAP_POLICY_CANCEL_OTHER',
        'SCHEDULE_OVERLAP_POLICY_TERMINATE_OTHER',
        'SCHEDULE_OVERLAP_POLICY_ALLOW_ALL',
      ])
      .exactOptional()
      .openapi({
        description:
          'Policy for overlaps.\n Note that this can be changed after a schedule has taken some actions,\n and some changes might produce unintuitive results. In general, the later\n policy overrides the earlier policy.',
      }),
    catchupWindow: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          "Policy for catchups:\n If the Temporal server misses an action due to one or more components\n being down, and comes back up, the action will be run if the scheduled\n time is within this window from the current time.\n This value defaults to one year, and can't be less than 10 seconds.",
      }),
    pauseOnFailure: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, and a workflow run fails or times out, turn on "paused".\n This applies after retry policies: the full chain of retries must fail to\n trigger a pause here.',
      }),
    keepOriginalWorkflowId: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, and the action would start a workflow, a timestamp will not be\n appended to the scheduled workflow id.',
      }),
  })
  .openapi({ required: [] })
  .openapi('SchedulePolicies')

const ScheduleStateSchema = z
  .object({
    notes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Informative human-readable message with contextual notes, e.g. the reason\n a schedule is paused. The system may overwrite this message on certain\n conditions, e.g. when pause-on-failure happens.',
      }),
    paused: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, do not take any actions based on the schedule spec.' }),
    limitedActions: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If limited_actions is true, decrement remaining_actions after each\n action, and do not take any more scheduled actions if remaining_actions\n is zero. Actions may still be taken by explicit request (i.e. trigger\n immediately or backfill). Skipped actions (due to overlap policy) do not\n count against remaining actions.\n If a schedule has no more remaining actions, then the schedule will be\n subject to automatic deletion (after several days).',
      }),
    remainingActions: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScheduleState')

const ScheduleSchema = z
  .object({
    spec: ScheduleSpecSchema.exactOptional(),
    action: ScheduleActionSchema.exactOptional(),
    policies: SchedulePoliciesSchema.exactOptional(),
    state: ScheduleStateSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Schedule')

const TriggerImmediatelyRequestSchema = z
  .object({
    overlapPolicy: z
      .enum([
        'SCHEDULE_OVERLAP_POLICY_UNSPECIFIED',
        'SCHEDULE_OVERLAP_POLICY_SKIP',
        'SCHEDULE_OVERLAP_POLICY_BUFFER_ONE',
        'SCHEDULE_OVERLAP_POLICY_BUFFER_ALL',
        'SCHEDULE_OVERLAP_POLICY_CANCEL_OTHER',
        'SCHEDULE_OVERLAP_POLICY_TERMINATE_OTHER',
        'SCHEDULE_OVERLAP_POLICY_ALLOW_ALL',
      ])
      .exactOptional()
      .openapi({ description: 'If set, override overlap policy for this one request.' }),
    scheduledTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Timestamp used for the identity of the target workflow.\n If not set the default value is the current time.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TriggerImmediatelyRequest')

const SchedulePatchSchema = z
  .object({
    triggerImmediately: TriggerImmediatelyRequestSchema.exactOptional().openapi({
      description: 'If set, trigger one action immediately.',
    }),
    backfillRequest: z
      .array(BackfillRequestSchema)
      .exactOptional()
      .openapi({
        description:
          'If set, runs though the specified time period(s) and takes actions as if that time\n passed by right now, all at once. The overlap policy can be overridden for the\n scope of the backfill.',
      }),
    pause: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If set, change the state to paused or unpaused (respectively) and set the\n notes field to the value of the string.',
      }),
    unpause: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SchedulePatch')

const CreateScheduleRequestSchema = z
  .object({
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'The namespace the schedule should be created in.' }),
    scheduleId: z.string().exactOptional().openapi({ description: 'The id of the new schedule.' }),
    schedule: ScheduleSchema.exactOptional().openapi({
      description: 'The schedule spec, policies, action, and initial state.',
    }),
    initialPatch: SchedulePatchSchema.exactOptional().openapi({
      description: 'Optional initial patch (e.g. to run the action once immediately).',
    }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the client who initiated this request.' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier for this create request for idempotence. Typically UUIDv4.',
      }),
    memo: MemoSchema.exactOptional().openapi({
      description: 'Memo and search attributes to attach to the schedule itself.',
    }),
    searchAttributes: SearchAttributesSchema.exactOptional(),
  })
  .openapi({
    description:
      '(-- api-linter: core::0203::optional=disabled\n     aip.dev/not-precedent: field_behavior annotation not available in our gogo fork --)',
    required: [],
  })
  .openapi('CreateScheduleRequest')

const CreateScheduleResponseSchema = z
  .object({ conflictToken: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateScheduleResponse')

const CreateWorkerDeploymentRequestSchema = z
  .object({
    namespace: z.string().exactOptional(),
    deploymentName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the Worker Deployment to create. If a Worker Deployment with\n this name already exists, an error will be returned.',
      }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The identity of the client who initiated this request.' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier for this create request for idempotence. Typically UUIDv4.',
      }),
  })
  .openapi({ description: 'Creates a new WorkerDeployment.', required: [] })
  .openapi('CreateWorkerDeploymentRequest')

const CreateWorkerDeploymentResponseSchema = z
  .object({
    conflictToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This value is returned so that it can be optionally passed to APIs that\n write to the WorkerDeployment state to ensure that the state did not\n change between this API call and a future write.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CreateWorkerDeploymentResponse')

const CreateWorkerDeploymentVersionRequestSchema = z
  .object({
    namespace: z.string().exactOptional(),
    deploymentVersion: WorkerDeploymentVersionSchema.exactOptional().openapi({
      description: 'Required.',
    }),
    computeConfig: ComputeConfigSchema.exactOptional().openapi({
      description:
        'Optional. Contains the new worker compute configuration for the Worker\n Deployment. Used for worker scale management.',
    }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The identity of the client who initiated this request.' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier for this create request for idempotence. Typically UUIDv4.\n If a second request with the same ID is recieved, it is considered a successful no-op.\n Retrying with a different request ID for the same deployment name + build ID is an error.',
      }),
  })
  .openapi({ description: 'Creates a new WorkerDeploymentVersion.', required: [] })
  .openapi('CreateWorkerDeploymentVersionRequest')

const CreateWorkerDeploymentVersionResponseSchema = z
  .object({})
  .openapi('CreateWorkerDeploymentVersionResponse')

const WorkflowRuleSpecActivityStartingTriggerSchema = z
  .object({
    predicate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Activity predicate is a SQL-like string filter parameter.\n It is used to match against workflow data.\n The following activity attributes are supported as part of the predicate:\n - ActivityType: An Activity Type is the mapping of a name to an Activity Definition..\n - ActivityId: The ID of the activity.\n - ActivityAttempt: The number attempts of the activity.\n - BackoffInterval: The current amount of time between scheduled attempts of the activity.\n - ActivityStatus: The status of the activity. Can be one of "Scheduled", "Started", "Paused".\n - TaskQueue: The name of the task queue the workflow specified that the activity should run on.\n Activity predicate support the following operators:\n  * =, !=, >, >=, <, <=\n  * AND, OR, ()\n  * BETWEEN ... AND\n    STARTS_WITH',
      }),
  })
  .openapi({
    description: 'Activity trigger will be triggered when an activity is about to start.',
    required: [],
  })
  .openapi('WorkflowRuleSpecActivityStartingTrigger')

const WorkflowRuleActionActionActivityPauseSchema = z
  .object({})
  .openapi('WorkflowRuleActionActionActivityPause')

const WorkflowRuleActionSchema = z
  .object({ activityPause: WorkflowRuleActionActionActivityPauseSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('WorkflowRuleAction')

const WorkflowRuleSpecSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of the new workflow rule. Must be unique within the namespace.\n Can be set by the user, and can have business meaning.',
      }),
    activityStart: WorkflowRuleSpecActivityStartingTriggerSchema.exactOptional(),
    visibilityQuery: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Restricted Visibility query.\n This query is used to filter workflows in this namespace to which this rule should apply.\n It is applied to any running workflow each time a triggering event occurs, before the trigger predicate is evaluated.\n The following workflow attributes are supported:\n - WorkflowType\n - WorkflowId\n - StartTime\n - ExecutionStatus',
      }),
    actions: z
      .array(WorkflowRuleActionSchema)
      .exactOptional()
      .openapi({
        description:
          'WorkflowRuleAction to be taken when the rule is triggered and predicate is matched.',
      }),
    expirationTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Expiration time of the rule. After this time, the rule will be deleted.\n Can be empty if the rule should never expire.',
      }),
  })
  .openapi({ required: [] })
  .openapi('WorkflowRuleSpec')

const CreateWorkflowRuleRequestSchema = z
  .object({
    namespace: z.string().exactOptional(),
    spec: WorkflowRuleSpecSchema.exactOptional().openapi({
      description: 'The rule specification .',
    }),
    forceScan: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, the rule will be applied to the currently running workflows via batch job.\n If not set , the rule will only be applied when triggering condition is satisfied.\n visibility_query in the rule will be used to select the workflows to apply the rule to.',
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Used to de-dupe requests. Typically should be UUID.' }),
    identity: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Identity of the actor who created the rule. Will be stored with the rule.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Rule description.Will be stored with the rule.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateWorkflowRuleRequest')

const WorkflowRuleSchema = z
  .object({
    createTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Rule creation time.' }),
    spec: WorkflowRuleSpecSchema.exactOptional().openapi({ description: 'Rule specification' }),
    createdByIdentity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identity of the actor that created the rule\n (-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: It is better reflect the intent this way, we will also have updated_by. --)\n (-- api-linter: core::0142::time-field-names=disabled\n     aip.dev/not-precedent: Same as above. All other options sounds clumsy --)',
      }),
    description: z.string().exactOptional().openapi({ description: 'Rule description.' }),
  })
  .openapi({
    description:
      'WorkflowRule describes a rule that can be applied to any workflow in this namespace.',
    required: [],
  })
  .openapi('WorkflowRule')

const CreateWorkflowRuleResponseSchema = z
  .object({
    rule: WorkflowRuleSchema.exactOptional().openapi({ description: 'Created rule.' }),
    jobId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Batch Job ID if force-scan flag was provided. Otherwise empty.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateWorkflowRuleResponse')

const DataBlobSchema = z
  .object({
    encodingType: z
      .enum(['ENCODING_TYPE_UNSPECIFIED', 'ENCODING_TYPE_PROTO3', 'ENCODING_TYPE_JSON'])
      .exactOptional(),
    data: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DataBlob')

const DeclinedTargetVersionUpgradeSchema = z
  .object({
    deploymentVersion: WorkerDeploymentVersionSchema.exactOptional(),
    revisionNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Revision number of the task queue routing config at the time the target\n was declined. If an incoming target's revision is <= this value, it is\n not newer and is not used for deciding whether or not to suppress the\n upgrade signal.",
      }),
  })
  .openapi({
    description:
      'Wrapper for a target deployment version that the SDK declined to upgrade to.\n See declined_target_version_upgrade on WorkflowExecutionStartedEventAttributes.',
    required: [],
  })
  .openapi('DeclinedTargetVersionUpgrade')

const DeleteNexusEndpointResponseSchema = z.object({}).openapi('DeleteNexusEndpointResponse')

const DeleteScheduleResponseSchema = z.object({}).openapi('DeleteScheduleResponse')

const DeleteWorkerDeploymentResponseSchema = z.object({}).openapi('DeleteWorkerDeploymentResponse')

const DeleteWorkerDeploymentVersionResponseSchema = z
  .object({})
  .openapi('DeleteWorkerDeploymentVersionResponse')

const DeleteWorkflowRuleResponseSchema = z.object({}).openapi('DeleteWorkflowRuleResponse')

const DeploymentInfoTaskQueueInfoSchema = z
  .object({
    name: z.string().exactOptional(),
    type: z
      .enum([
        'TASK_QUEUE_TYPE_UNSPECIFIED',
        'TASK_QUEUE_TYPE_WORKFLOW',
        'TASK_QUEUE_TYPE_ACTIVITY',
        'TASK_QUEUE_TYPE_NEXUS',
      ])
      .exactOptional(),
    firstPollerTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When server saw the first poller for this task queue in this deployment.',
      }),
  })
  .openapi({ required: [] })
  .openapi('DeploymentInfoTaskQueueInfo')

const DeploymentInfoSchema = z
  .object({
    deployment: DeploymentSchema.exactOptional(),
    createTime: z.iso.datetime({ offset: true }).exactOptional(),
    taskQueueInfos: z.array(DeploymentInfoTaskQueueInfoSchema).exactOptional(),
    metadata: z
      .record(z.string(), PayloadSchema)
      .exactOptional()
      .openapi({
        description:
          'A user-defined set of key-values. Can be updated as part of write operations to the\n deployment, such as `SetCurrentDeployment`.',
      }),
    isCurrent: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If this deployment is the current deployment of its deployment series.',
      }),
  })
  .openapi({
    description:
      '`DeploymentInfo` holds information about a deployment. Deployment information is tracked\n automatically by server as soon as the first poll from that deployment reaches the server. There\n can be multiple task queue workers in a single deployment which are listed in this message.\n Deprecated.',
    required: [],
  })
  .openapi('DeploymentInfo')

const DeploymentListInfoSchema = z
  .object({
    deployment: DeploymentSchema.exactOptional(),
    createTime: z.iso.datetime({ offset: true }).exactOptional(),
    isCurrent: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If this deployment is the current deployment of its deployment series.',
      }),
  })
  .openapi({
    description:
      "DeploymentListInfo is an abbreviated set of fields from DeploymentInfo that's returned in\n ListDeployments.\n Deprecated.",
    required: [],
  })
  .openapi('DeploymentListInfo')

const DeploymentTransitionSchema = z
  .object({
    deployment: DeploymentSchema.exactOptional().openapi({
      description:
        'The target deployment of the transition. Null means a so-far-versioned workflow is\n transitioning to unversioned workers.',
    }),
  })
  .openapi({
    description:
      'Holds information about ongoing transition of a workflow execution from one deployment to another.\n Deprecated. Use DeploymentVersionTransition.',
    required: [],
  })
  .openapi('DeploymentTransition')

const DeploymentVersionTransitionSchema = z
  .object({
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'Deprecated. Use `deployment_version`.' }),
    deploymentVersion: WorkerDeploymentVersionSchema.exactOptional().openapi({
      description:
        'The target Version of the transition.\n If nil, a so-far-versioned workflow is transitioning to unversioned workers.',
    }),
  })
  .openapi({
    description:
      'Holds information about ongoing transition of a workflow execution from one worker\n deployment version to another.\n Experimental. Might change in the future.',
    required: [],
  })
  .openapi('DeploymentVersionTransition')

const DescribeActivityExecutionResponseSchema = z
  .object({
    runId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The run ID of the activity, useful when run_id was not specified in the request.',
      }),
    info: ActivityExecutionInfoSchema.exactOptional().openapi({
      description: 'Information about the activity execution.',
    }),
    input: PayloadsSchema.exactOptional().openapi({
      description:
        'Serialized activity input, passed as arguments to the activity function.\n Only set if include_input was true in the request.',
    }),
    outcome: ActivityExecutionOutcomeSchema.exactOptional().openapi({
      description:
        'Only set if the activity is completed and include_outcome was true in the request.',
    }),
    longPollToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token for follow-on long-poll requests. Absent only if the activity is complete.',
      }),
    callbacks: z
      .array(CallbackInfoSchema)
      .exactOptional()
      .openapi({
        description: 'Callbacks attached to this activity execution and their current state.',
      }),
  })
  .openapi({ required: [] })
  .openapi('DescribeActivityExecutionResponse')

const DescribeBatchOperationResponseSchema = z
  .object({
    operationType: z
      .enum([
        'BATCH_OPERATION_TYPE_UNSPECIFIED',
        'BATCH_OPERATION_TYPE_TERMINATE',
        'BATCH_OPERATION_TYPE_CANCEL',
        'BATCH_OPERATION_TYPE_SIGNAL',
        'BATCH_OPERATION_TYPE_DELETE',
        'BATCH_OPERATION_TYPE_RESET',
        'BATCH_OPERATION_TYPE_UPDATE_EXECUTION_OPTIONS',
        'BATCH_OPERATION_TYPE_UNPAUSE_ACTIVITY',
        'BATCH_OPERATION_TYPE_UPDATE_ACTIVITY_OPTIONS',
        'BATCH_OPERATION_TYPE_RESET_ACTIVITY',
      ])
      .exactOptional()
      .openapi({ description: 'Batch operation type' }),
    jobId: z.string().exactOptional().openapi({ description: 'Batch job ID' }),
    state: z
      .enum([
        'BATCH_OPERATION_STATE_UNSPECIFIED',
        'BATCH_OPERATION_STATE_RUNNING',
        'BATCH_OPERATION_STATE_COMPLETED',
        'BATCH_OPERATION_STATE_FAILED',
      ])
      .exactOptional()
      .openapi({ description: 'Batch operation state' }),
    startTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Batch operation start time' }),
    closeTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Batch operation close time' }),
    totalOperationCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total operation count' }),
    completeOperationCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Complete operation count' }),
    failureOperationCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Failure operation count' }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identity indicates the operator identity' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'Reason indicates the reason to stop a operation' }),
  })
  .openapi({ required: [] })
  .openapi('DescribeBatchOperationResponse')

const DescribeDeploymentResponseSchema = z
  .object({ deploymentInfo: DeploymentInfoSchema.exactOptional() })
  .openapi({
    description: '[cleanup-wv-pre-release] Pre-release deployment APIs, clean up later',
    required: [],
  })
  .openapi('DescribeDeploymentResponse')

const NamespaceInfoCapabilitiesSchema = z
  .object({
    eagerWorkflowStart: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if the namespace supports eager workflow start.' }),
    syncUpdate: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if the namespace supports sync update' }),
    asyncUpdate: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if the namespace supports async update' }),
    workerHeartbeats: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if the namespace supports worker heartbeats' }),
    reportedProblemsSearchAttribute: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'True if the namespace supports reported problems search attribute',
      }),
    workflowPause: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if the namespace supports pausing workflows' }),
    standaloneActivities: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if the namespace supports standalone activities' }),
    workerPollCompleteOnShutdown: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if the namespace supports server-side completion of outstanding worker polls on shutdown.\n When enabled, the server will complete polls for workers that send WorkerInstanceKey in their\n poll requests and call ShutdownWorker with the same WorkerInstanceKey. The poll will return\n an empty response. When this flag is true, workers should allow polls to return gracefully\n rather than terminating any open polls on shutdown.',
      }),
    pollerAutoscaling: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if the namespace supports poller autoscaling' }),
    workerCommands: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if the namespace supports worker commands (server-to-worker communication via control queues).',
      }),
  })
  .openapi({
    description:
      'Namespace capability details. Should contain what features are enabled in a namespace.',
    required: [],
  })
  .openapi('NamespaceInfoCapabilities')

const NamespaceInfoLimitsSchema = z
  .object({
    blobSizeLimitError: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Maximum size in bytes for payload fields in workflow history events\n (e.g., workflow/activity inputs and results, failure details, signal payloads).\n When exceeded, the server will reject the operation with an error.',
      }),
    memoSizeLimitError: z
      .string()
      .exactOptional()
      .openapi({ description: 'Maximum total memo size in bytes per workflow execution.' }),
  })
  .openapi({ required: [] })
  .openapi('NamespaceInfoLimits')

const NamespaceInfoSchema = z
  .object({
    name: z.string().exactOptional(),
    state: z
      .enum([
        'NAMESPACE_STATE_UNSPECIFIED',
        'NAMESPACE_STATE_REGISTERED',
        'NAMESPACE_STATE_DEPRECATED',
        'NAMESPACE_STATE_DELETED',
      ])
      .exactOptional(),
    description: z.string().exactOptional(),
    ownerEmail: z.string().exactOptional(),
    data: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'A key-value map for any customized purpose.' }),
    id: z.string().exactOptional(),
    capabilities: NamespaceInfoCapabilitiesSchema.exactOptional().openapi({
      description: 'All capabilities the namespace supports.',
    }),
    limits: NamespaceInfoLimitsSchema.exactOptional().openapi({
      description: 'Namespace configured limits',
    }),
    supportsSchedules: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether scheduled workflows are supported on this namespace. This is only needed\n temporarily while the feature is experimental, so we can give it a high tag.',
      }),
  })
  .openapi({ required: [] })
  .openapi('NamespaceInfo')

const NamespaceConfigSchema = z
  .object({
    workflowExecutionRetentionTtl: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional(),
    badBinaries: BadBinariesSchema.exactOptional(),
    historyArchivalState: z
      .enum(['ARCHIVAL_STATE_UNSPECIFIED', 'ARCHIVAL_STATE_DISABLED', 'ARCHIVAL_STATE_ENABLED'])
      .exactOptional()
      .openapi({
        description:
          'If unspecified (ARCHIVAL_STATE_UNSPECIFIED) then default server configuration is used.',
      }),
    historyArchivalUri: z.string().exactOptional(),
    visibilityArchivalState: z
      .enum(['ARCHIVAL_STATE_UNSPECIFIED', 'ARCHIVAL_STATE_DISABLED', 'ARCHIVAL_STATE_ENABLED'])
      .exactOptional()
      .openapi({
        description:
          'If unspecified (ARCHIVAL_STATE_UNSPECIFIED) then default server configuration is used.',
      }),
    visibilityArchivalUri: z.string().exactOptional(),
    customSearchAttributeAliases: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Map from field name to alias.' }),
  })
  .openapi({ required: [] })
  .openapi('NamespaceConfig')

const NamespaceReplicationConfigSchema = z
  .object({
    activeClusterName: z.string().exactOptional(),
    clusters: z.array(ClusterReplicationConfigSchema).exactOptional(),
    state: z
      .enum([
        'REPLICATION_STATE_UNSPECIFIED',
        'REPLICATION_STATE_NORMAL',
        'REPLICATION_STATE_HANDOVER',
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NamespaceReplicationConfig')

const FailoverStatusSchema = z
  .object({
    failoverTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Timestamp when the Cluster switched to the following failover_version',
      }),
    failoverVersion: z.string().exactOptional(),
  })
  .openapi({
    description: 'Represents a historical replication status of a Namespace',
    required: [],
  })
  .openapi('FailoverStatus')

const DescribeNamespaceResponseSchema = z
  .object({
    namespaceInfo: NamespaceInfoSchema.exactOptional(),
    config: NamespaceConfigSchema.exactOptional(),
    replicationConfig: NamespaceReplicationConfigSchema.exactOptional(),
    failoverVersion: z.string().exactOptional(),
    isGlobalNamespace: z.boolean().exactOptional(),
    failoverHistory: z
      .array(FailoverStatusSchema)
      .exactOptional()
      .openapi({
        description:
          'Contains the historical state of failover_versions for the cluster, truncated to contain only the last N\n states to ensure that the list does not grow unbounded.',
      }),
  })
  .openapi({ required: [] })
  .openapi('DescribeNamespaceResponse')

const NexusOperationExecutionCancellationInfoSchema = z
  .object({
    requestedTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time when cancellation was requested.' }),
    state: z
      .enum([
        'NEXUS_OPERATION_CANCELLATION_STATE_UNSPECIFIED',
        'NEXUS_OPERATION_CANCELLATION_STATE_SCHEDULED',
        'NEXUS_OPERATION_CANCELLATION_STATE_BACKING_OFF',
        'NEXUS_OPERATION_CANCELLATION_STATE_SUCCEEDED',
        'NEXUS_OPERATION_CANCELLATION_STATE_FAILED',
        'NEXUS_OPERATION_CANCELLATION_STATE_TIMED_OUT',
        'NEXUS_OPERATION_CANCELLATION_STATE_BLOCKED',
      ])
      .exactOptional(),
    attempt: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of attempts made to deliver the cancel operation request.\n This number represents a minimum bound since the attempt is incremented after the request completes.',
      }),
    lastAttemptCompleteTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time when the last attempt completed.' }),
    lastAttemptFailure: FailureSchema.exactOptional().openapi({
      description: "The last attempt's failure, if any.",
    }),
    nextAttemptScheduleTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time when the next attempt is scheduled.' }),
    blockedReason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If the state is BLOCKED, blocked reason provides additional information.',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A reason that may be specified in the CancelNexusOperationRequest.',
      }),
  })
  .openapi({
    description:
      'NexusOperationExecutionCancellationInfo contains the state of a Nexus operation cancellation.',
    required: [],
  })
  .openapi('NexusOperationExecutionCancellationInfo')

const NexusOperationExecutionInfoSchema = z
  .object({
    operationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier of this Nexus operation within its namespace along with run ID (below).',
      }),
    runId: z.string().exactOptional(),
    endpoint: z
      .string()
      .exactOptional()
      .openapi({
        description: "Endpoint name, resolved to a URL via the cluster's endpoint registry.",
      }),
    service: z.string().exactOptional().openapi({ description: 'Service name.' }),
    operation: z.string().exactOptional().openapi({ description: 'Operation name.' }),
    status: z
      .enum([
        'NEXUS_OPERATION_EXECUTION_STATUS_UNSPECIFIED',
        'NEXUS_OPERATION_EXECUTION_STATUS_RUNNING',
        'NEXUS_OPERATION_EXECUTION_STATUS_COMPLETED',
        'NEXUS_OPERATION_EXECUTION_STATUS_FAILED',
        'NEXUS_OPERATION_EXECUTION_STATUS_CANCELED',
        'NEXUS_OPERATION_EXECUTION_STATUS_TERMINATED',
        'NEXUS_OPERATION_EXECUTION_STATUS_TIMED_OUT',
      ])
      .exactOptional()
      .openapi({
        description:
          'A general status for this operation, indicates whether it is currently running or in one of the terminal statuses.\n Updated once when the operation is originally scheduled, and again when it reaches a terminal status.',
      }),
    state: z
      .enum([
        'PENDING_NEXUS_OPERATION_STATE_UNSPECIFIED',
        'PENDING_NEXUS_OPERATION_STATE_SCHEDULED',
        'PENDING_NEXUS_OPERATION_STATE_BACKING_OFF',
        'PENDING_NEXUS_OPERATION_STATE_STARTED',
        'PENDING_NEXUS_OPERATION_STATE_BLOCKED',
      ])
      .exactOptional()
      .openapi({
        description: 'More detailed breakdown of NEXUS_OPERATION_EXECUTION_STATUS_RUNNING.',
      }),
    scheduleToCloseTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'Schedule-to-close timeout for this operation.\n (-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: "to" is used to indicate interval. --)',
      }),
    scheduleToStartTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'Schedule-to-start timeout for this operation.\n (-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: "to" is used to indicate interval. --)',
      }),
    startToCloseTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'Start-to-close timeout for this operation.\n (-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: "to" is used to indicate interval. --)',
      }),
    attempt: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of attempts made to deliver the start operation request.\n This number is approximate, it is incremented when a task is added to the history queue.\n In practice, there could be more attempts if a task is executed but fails to commit, or less attempts if a task\n was never executed.',
      }),
    scheduleTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Time the operation was originally scheduled via a StartNexusOperation request.',
      }),
    expirationTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Scheduled time + schedule to close timeout.' }),
    closeTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time when the operation transitioned to a closed state.' }),
    lastAttemptCompleteTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time when the last attempt completed.' }),
    lastAttemptFailure: FailureSchema.exactOptional().openapi({
      description: "The last attempt's failure, if any.",
    }),
    nextAttemptScheduleTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time when the next attempt is scheduled.' }),
    executionDuration: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'Elapsed time from schedule_time to now for running operations or to close_time for closed\n operations, including all attempts and backoff between attempts.',
      }),
    cancellationInfo: NexusOperationExecutionCancellationInfoSchema.exactOptional(),
    blockedReason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If the state is BLOCKED, blocked reason provides additional information.',
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Server-generated request ID used as an idempotency token when submitting start requests to\n the handler. Distinct from the request_id in StartNexusOperationRequest, which is the\n caller-side idempotency key for the StartNexusOperation RPC itself.',
      }),
    operationToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Operation token. Only set for asynchronous operations after a successful StartOperation call.',
      }),
    stateTransitionCount: z
      .string()
      .exactOptional()
      .openapi({
        description: "Incremented each time the operation's state is mutated in persistence.",
      }),
    searchAttributes: SearchAttributesSchema.exactOptional(),
    nexusHeader: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Header for context propagation and tracing purposes.' }),
    userMetadata: UserMetadataSchema.exactOptional().openapi({
      description:
        'Metadata for use by user interfaces to display the fixed as-of-start summary and details of the operation.',
    }),
    links: z
      .array(LinkSchema)
      .exactOptional()
      .openapi({
        description: 'Links attached by the handler of this operation on start or completion.',
      }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the client who started this operation.' }),
  })
  .openapi({
    description:
      'Full current state of a standalone Nexus operation, as of the time of the request.',
    required: [],
  })
  .openapi('NexusOperationExecutionInfo')

const DescribeNexusOperationExecutionResponseSchema = z
  .object({
    runId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The run ID of the operation, useful when run_id was not specified in the request.',
      }),
    info: NexusOperationExecutionInfoSchema.exactOptional().openapi({
      description: 'Information about the operation.',
    }),
    input: PayloadSchema.exactOptional().openapi({
      description:
        'Serialized operation input, passed as the request payload.\n Only set if include_input was true in the request.',
    }),
    result: PayloadSchema.exactOptional().openapi({
      description: 'The result if the operation completed successfully.',
    }),
    failure: FailureSchema.exactOptional().openapi({
      description: 'The failure if the operation completed unsuccessfully.',
    }),
    longPollToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token for follow-on long-poll requests. Absent only if the operation is complete.',
      }),
  })
  .openapi({ required: [] })
  .openapi('DescribeNexusOperationExecutionResponse')

const ScheduleActionResultSchema = z
  .object({
    scheduleTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Time that the action was taken (according to the schedule, including jitter).',
      }),
    actualTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time that the action was taken (real time).' }),
    startWorkflowResult: WorkflowExecutionSchema.exactOptional().openapi({
      description: 'If action was start_workflow:',
    }),
    startWorkflowStatus: z
      .enum([
        'WORKFLOW_EXECUTION_STATUS_UNSPECIFIED',
        'WORKFLOW_EXECUTION_STATUS_RUNNING',
        'WORKFLOW_EXECUTION_STATUS_COMPLETED',
        'WORKFLOW_EXECUTION_STATUS_FAILED',
        'WORKFLOW_EXECUTION_STATUS_CANCELED',
        'WORKFLOW_EXECUTION_STATUS_TERMINATED',
        'WORKFLOW_EXECUTION_STATUS_CONTINUED_AS_NEW',
        'WORKFLOW_EXECUTION_STATUS_TIMED_OUT',
        'WORKFLOW_EXECUTION_STATUS_PAUSED',
      ])
      .exactOptional()
      .openapi({
        description:
          "If the action was start_workflow, this field will reflect an\n eventually-consistent view of the started workflow's status.",
      }),
  })
  .openapi({ required: [] })
  .openapi('ScheduleActionResult')

const ScheduleInfoSchema = z
  .object({
    actionCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of actions taken so far.' }),
    missedCatchupWindow: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Number of times a scheduled action was skipped due to missing the catchup window.',
      }),
    overlapSkipped: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of skipped actions due to overlap.' }),
    bufferDropped: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of dropped actions due to buffer limit.' }),
    bufferSize: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Number of actions in the buffer. The buffer holds the actions that cannot\n be immediately triggered (due to the overlap policy). These actions can be a result of\n the normal schedule or a backfill.',
      }),
    runningWorkflows: z
      .array(WorkflowExecutionSchema)
      .exactOptional()
      .openapi({
        description:
          'Currently-running workflows started by this schedule. (There might be\n more than one if the overlap policy allows overlaps.)\n Note that the run_ids in here are the original execution run ids as\n started by the schedule. If the workflows retried, did continue-as-new,\n or were reset, they might still be running but with a different run_id.',
      }),
    recentActions: z
      .array(ScheduleActionResultSchema)
      .exactOptional()
      .openapi({ description: 'Most recent ten actual action times (including manual triggers).' }),
    futureActionTimes: z
      .array(z.iso.datetime({ offset: true }))
      .exactOptional()
      .openapi({ description: 'Next ten scheduled action times.' }),
    createTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Timestamps of schedule creation and last update.' }),
    updateTime: z.iso.datetime({ offset: true }).exactOptional(),
    invalidScheduleError: z.string().exactOptional().openapi({ description: 'Deprecated.' }),
  })
  .openapi({ required: [] })
  .openapi('ScheduleInfo')

const DescribeScheduleResponseSchema = z
  .object({
    schedule: ScheduleSchema.exactOptional().openapi({
      description:
        'The complete current schedule details. This may not match the schedule as\n created because:\n - some types of schedule specs may get compiled into others (e.g.\n   CronString into StructuredCalendarSpec)\n - some unspecified fields may be replaced by defaults\n - some fields in the state are modified automatically\n - the schedule may have been modified by UpdateSchedule or PatchSchedule',
    }),
    info: ScheduleInfoSchema.exactOptional().openapi({ description: 'Extra schedule state info.' }),
    memo: MemoSchema.exactOptional().openapi({
      description: 'The memo and search attributes that the schedule was created with.',
    }),
    searchAttributes: SearchAttributesSchema.exactOptional(),
    conflictToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This value can be passed back to UpdateSchedule to ensure that the\n schedule was not modified between a Describe and an Update, which could\n lead to lost updates and other confusion.',
      }),
  })
  .openapi({ required: [] })
  .openapi('DescribeScheduleResponse')

const WorkerVersionCapabilitiesSchema = z
  .object({
    buildId: z
      .string()
      .exactOptional()
      .openapi({ description: 'An opaque whole-worker identifier' }),
    useVersioning: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set, the worker is opting in to worker versioning, and wishes to only receive appropriate\n tasks.',
      }),
    deploymentSeriesName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Must be sent if user has set a deployment series name (versioning-3).',
      }),
  })
  .openapi({
    description:
      'Identifies the version that a worker is compatible with when polling or identifying itself,\n and whether or not this worker is opting into the build-id based versioning feature. This is\n used by matching to determine which workers ought to receive what tasks.\n Deprecated. Use WorkerDeploymentOptions instead.',
    required: [],
  })
  .openapi('WorkerVersionCapabilities')

const WorkerDeploymentOptionsSchema = z
  .object({
    deploymentName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required when `worker_versioning_mode==VERSIONED`.' }),
    buildId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Build ID of the worker. Required when `worker_versioning_mode==VERSIONED`, in which case,\n the worker will be part of a Deployment Version.',
      }),
    workerVersioningMode: z
      .enum([
        'WORKER_VERSIONING_MODE_UNSPECIFIED',
        'WORKER_VERSIONING_MODE_UNVERSIONED',
        'WORKER_VERSIONING_MODE_VERSIONED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. Versioning Mode for this worker. Must be the same for all workers with the\n same `deployment_name` and `build_id` combination, across all Task Queues.\n When `worker_versioning_mode==VERSIONED`, the worker will be part of a Deployment Version.',
      }),
  })
  .openapi({
    description:
      'Worker Deployment options set in SDK that need to be sent to server in every poll.',
    required: [],
  })
  .openapi('WorkerDeploymentOptions')

const PollerInfoSchema = z
  .object({
    lastAccessTime: z.iso.datetime({ offset: true }).exactOptional(),
    identity: z.string().exactOptional(),
    ratePerSecond: z.float64().exactOptional(),
    workerVersionCapabilities: WorkerVersionCapabilitiesSchema.exactOptional().openapi({
      description:
        'If a worker has opted into the worker versioning feature while polling, its capabilities will\n appear here.\n Deprecated. Replaced by deployment_options.',
    }),
    deploymentOptions: WorkerDeploymentOptionsSchema.exactOptional().openapi({
      description: 'Worker deployment options that SDK sent to server.',
    }),
  })
  .openapi({ required: [] })
  .openapi('PollerInfo')

const TaskQueueStatsSchema = z
  .object({
    approximateBacklogCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The approximate number of tasks backlogged in this task queue. May count expired tasks but eventually\n converges to the right value. Can be relied upon for scaling decisions.\n\n Special note for workflow task queue type: this metric does not count sticky queue tasks. However, because\n those tasks only remain valid for a few seconds, the inaccuracy becomes less significant as the backlog size\n grows.',
      }),
    approximateBacklogAge: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'Approximate age of the oldest task in the backlog based on the creation time of the task at the head of\n the queue. Can be relied upon for scaling decisions.\n\n Special note for workflow task queue type: this metric does not count sticky queue tasks. However, because\n those tasks only remain valid for a few seconds, they should not affect the result when backlog is older than\n few seconds.',
      }),
    tasksAddRate: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The approximate tasks per second added to the task queue, averaging the last 30 seconds. These includes tasks\n whether or not they were added to/dispatched from the backlog or they were dispatched immediately without going\n to the backlog (sync-matched).\n\n The difference between `tasks_add_rate` and `tasks_dispatch_rate` is a reliable metric for the rate at which\n backlog grows/shrinks.\n\n Note: the actual tasks delivered to the workers may significantly be higher than the numbers reported by\n tasks_add_rate, because:\n - Tasks can be sent to workers without going to the task queue. This is called Eager dispatch. Eager dispatch is\n   enable for activities by default in the latest SDKs.\n - Tasks going to Sticky queue are not accounted for. Note that, typically, only the first workflow task of each\n   workflow goes to a normal queue, and the rest workflow tasks go to the Sticky queue associated with a specific\n   worker instance.',
      }),
    tasksDispatchRate: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The approximate tasks per second dispatched from the task queue, averaging the last 30 seconds. These includes\n tasks whether or not they were added to/dispatched from the backlog or they were dispatched immediately without\n going to the backlog (sync-matched).\n\n The difference between `tasks_add_rate` and `tasks_dispatch_rate` is a reliable metric for the rate at which\n backlog grows/shrinks.\n\n Note: the actual tasks delivered to the workers may significantly be higher than the numbers reported by\n tasks_dispatch_rate, because:\n - Tasks can be sent to workers without going to the task queue. This is called Eager dispatch. Eager dispatch is\n   enable for activities by default in the latest SDKs.\n - Tasks going to Sticky queue are not accounted for. Note that, typically, only the first workflow task of each\n   workflow goes to a normal queue, and the rest workflow tasks go to the Sticky queue associated with a specific\n   worker instance.',
      }),
  })
  .openapi({
    description:
      'TaskQueueStats contains statistics about task queue backlog and activity.\n\n For workflow task queue type, this result is partial because tasks sent to sticky queues are not included. Read\n comments above each metric to understand the impact of sticky queue exclusion on that metric accuracy.',
    required: [],
  })
  .openapi('TaskQueueStats')

const TaskQueueVersioningInfoSchema = z
  .object({
    currentDeploymentVersion: WorkerDeploymentVersionSchema.exactOptional().openapi({
      description:
        'Specifies which Deployment Version should receive new workflow executions and tasks of\n existing unversioned or AutoUpgrade workflows.\n Nil value represents all the unversioned workers (those with `UNVERSIONED` (or unspecified) `WorkerVersioningMode`.)\n Note: Current Version is overridden by the Ramping Version for a portion of traffic when ramp percentage\n is non-zero (see `ramping_deployment_version` and `ramping_version_percentage`).',
    }),
    currentVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Deprecated. Use `current_deployment_version`.' }),
    rampingDeploymentVersion: WorkerDeploymentVersionSchema.exactOptional().openapi({
      description:
        'When ramp percentage is non-zero, that portion of traffic is shifted from the Current Version to the Ramping Version.\n Must always be different from `current_deployment_version` unless both are nil.\n Nil value represents all the unversioned workers (those with `UNVERSIONED` (or unspecified) `WorkerVersioningMode`.)\n Note that it is possible to ramp from one Version to another Version, or from unversioned\n workers to a particular Version, or from a particular Version to unversioned workers.',
    }),
    rampingVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Deprecated. Use `ramping_deployment_version`.' }),
    rampingVersionPercentage: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Percentage of tasks that are routed to the Ramping Version instead of the Current Version.\n Valid range: [0, 100]. A 100% value means the Ramping Version is receiving full traffic but\n not yet "promoted" to be the Current Version, likely due to pending validations.\n A 0% value means the Ramping Version is receiving no traffic.',
      }),
    updateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Last time versioning information of this Task Queue changed.' }),
  })
  .openapi({ required: [] })
  .openapi('TaskQueueVersioningInfo')

const RateLimitSchema = z
  .object({
    requestsPerSecond: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Zero is a valid rate limit.' }),
  })
  .openapi({ required: [] })
  .openapi('RateLimit')

const RateLimitConfigSchema = z
  .object({
    rateLimit: RateLimitSchema.exactOptional(),
    metadata: ConfigMetadataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RateLimitConfig')

const TaskQueueConfigSchema = z
  .object({
    queueRateLimit: RateLimitConfigSchema.exactOptional().openapi({
      description: 'Unless modified, this is the system-defined rate limit.',
    }),
    fairnessKeysRateLimitDefault: RateLimitConfigSchema.exactOptional().openapi({
      description:
        'If set, each individual fairness key will be limited to this rate, scaled by the weight of the fairness key.',
    }),
    fairnessWeightOverrides: z
      .record(z.string(), z.float32())
      .exactOptional()
      .openapi({
        description: 'If set, overrides the fairness weights for the corresponding fairness keys.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TaskQueueConfig')

const DescribeTaskQueueResponseEffectiveRateLimitSchema = z
  .object({
    requestsPerSecond: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The effective rate limit for the task queue.' }),
    rateLimitSource: z
      .enum([
        'RATE_LIMIT_SOURCE_UNSPECIFIED',
        'RATE_LIMIT_SOURCE_API',
        'RATE_LIMIT_SOURCE_WORKER',
        'RATE_LIMIT_SOURCE_SYSTEM',
      ])
      .exactOptional()
      .openapi({
        description:
          'Source of the RateLimit Configuration,which can be one of the following values:\n - SOURCE_API: The rate limit that is set via the TaskQueueConfig api.\n - SOURCE_WORKER: The rate limit is the value set using the workerOptions in TaskQueueActivitiesPerSecond.\n - SOURCE_SYSTEM: The rate limit is the default value set by the system',
      }),
  })
  .openapi({ required: [] })
  .openapi('DescribeTaskQueueResponseEffectiveRateLimit')

const TaskIdBlockSchema = z
  .object({ startId: z.string().exactOptional(), endId: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('TaskIdBlock')

const TaskQueueStatusSchema = z
  .object({
    backlogCountHint: z.string().exactOptional(),
    readLevel: z.string().exactOptional(),
    ackLevel: z.string().exactOptional(),
    ratePerSecond: z.float64().exactOptional(),
    taskIdBlock: TaskIdBlockSchema.exactOptional(),
  })
  .openapi({
    description:
      'Deprecated. Use `InternalTaskQueueStatus`. This is kept until `DescribeTaskQueue` supports legacy behavior.',
    required: [],
  })
  .openapi('TaskQueueStatus')

const TaskQueueTypeInfoSchema = z
  .object({
    pollers: z
      .array(PollerInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'Unversioned workers (with `useVersioning=false`) are reported in unversioned result even if they set a Build ID.',
      }),
    stats: TaskQueueStatsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TaskQueueTypeInfo')

const TaskQueueVersionInfoSchema = z
  .object({
    typesInfo: z
      .record(z.string(), TaskQueueTypeInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'Task Queue info per Task Type. Key is the numerical value of the temporal.api.enums.v1.TaskQueueType enum.',
      }),
    taskReachability: z
      .enum([
        'BUILD_ID_TASK_REACHABILITY_UNSPECIFIED',
        'BUILD_ID_TASK_REACHABILITY_REACHABLE',
        'BUILD_ID_TASK_REACHABILITY_CLOSED_WORKFLOWS_ONLY',
        'BUILD_ID_TASK_REACHABILITY_UNREACHABLE',
      ])
      .exactOptional()
      .openapi({
        description:
          "Task Reachability is eventually consistent; there may be a delay until it converges to the most\n accurate value but it is designed in a way to take the more conservative side until it converges.\n For example REACHABLE is more conservative than CLOSED_WORKFLOWS_ONLY.\n\n Note: future activities who inherit their workflow's Build ID but not its Task Queue will not be\n accounted for reachability as server cannot know if they'll happen as they do not use\n assignment rules of their Task Queue. Same goes for Child Workflows or Continue-As-New Workflows\n who inherit the parent/previous workflow's Build ID but not its Task Queue. In those cases, make\n sure to query reachability for the parent/previous workflow's Task Queue as well.",
      }),
  })
  .openapi({ required: [] })
  .openapi('TaskQueueVersionInfo')

const DescribeTaskQueueResponseSchema = z
  .object({
    pollers: z.array(PollerInfoSchema).exactOptional(),
    stats: TaskQueueStatsSchema.exactOptional().openapi({
      description:
        'Statistics for the task queue.\n Only set if `report_stats` is set on the request.',
    }),
    statsByPriorityKey: z
      .record(z.string(), TaskQueueStatsSchema)
      .exactOptional()
      .openapi({
        description:
          'Task queue stats breakdown by priority key. Only contains actively used priority keys.\n Only set if `report_stats` is set on the request.\n (-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: "by" is used to clarify the keys and values. --)',
      }),
    versioningInfo: TaskQueueVersioningInfoSchema.exactOptional().openapi({
      description:
        "Specifies which Worker Deployment Version(s) Server routes this Task Queue's tasks to.\n When not present, it means the tasks are routed to Unversioned workers (workers with\n UNVERSIONED or unspecified WorkerVersioningMode.)\n Task Queue Versioning info is updated indirectly by calling SetWorkerDeploymentCurrentVersion\n and SetWorkerDeploymentRampingVersion on Worker Deployments.\n Note: This information is not relevant to Pinned workflow executions and their activities as\n they are always routed to their Pinned Deployment Version. However, new workflow executions\n are typically not Pinned until they complete their first task (unless they are started with\n a Pinned VersioningOverride or are Child Workflows of a Pinned parent).",
    }),
    config: TaskQueueConfigSchema.exactOptional().openapi({
      description: 'Only populated if report_task_queue_config is set to true.',
    }),
    effectiveRateLimit: DescribeTaskQueueResponseEffectiveRateLimitSchema.exactOptional(),
    taskQueueStatus: TaskQueueStatusSchema.exactOptional().openapi({
      description:
        'Deprecated.\n Status of the task queue. Only populated when `include_task_queue_status` is set to true in the request.',
    }),
    versionsInfo: z
      .record(z.string(), TaskQueueVersionInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'Deprecated.\n Only returned in ENHANCED mode.\n This map contains Task Queue information for each Build ID. Empty string as key value means unversioned.',
      }),
  })
  .openapi({ required: [] })
  .openapi('DescribeTaskQueueResponse')

const VersionDrainageInfoSchema = z
  .object({
    status: z
      .enum([
        'VERSION_DRAINAGE_STATUS_UNSPECIFIED',
        'VERSION_DRAINAGE_STATUS_DRAINING',
        'VERSION_DRAINAGE_STATUS_DRAINED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Set to DRAINING when the version first stops accepting new executions (is no longer current or ramping).\n Set to DRAINED when no more open pinned workflows exist on this version.',
      }),
    lastChangedTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Last time the drainage status changed.' }),
    lastCheckedTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Last time the system checked for drainage of this version.' }),
  })
  .openapi({
    description:
      'Information about workflow drainage to help the user determine when it is safe\n to decommission a Version. Not present while version is current or ramping.',
    required: [],
  })
  .openapi('VersionDrainageInfo')

const WorkerDeploymentInfoWorkerDeploymentVersionSummarySchema = z
  .object({
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'Deprecated. Use `deployment_version`.' }),
    status: z
      .enum([
        'WORKER_DEPLOYMENT_VERSION_STATUS_UNSPECIFIED',
        'WORKER_DEPLOYMENT_VERSION_STATUS_INACTIVE',
        'WORKER_DEPLOYMENT_VERSION_STATUS_CURRENT',
        'WORKER_DEPLOYMENT_VERSION_STATUS_RAMPING',
        'WORKER_DEPLOYMENT_VERSION_STATUS_DRAINING',
        'WORKER_DEPLOYMENT_VERSION_STATUS_DRAINED',
        'WORKER_DEPLOYMENT_VERSION_STATUS_CREATED',
      ])
      .exactOptional()
      .openapi({ description: 'The status of the Worker Deployment Version.' }),
    deploymentVersion: WorkerDeploymentVersionSchema.exactOptional().openapi({
      description: 'Required.',
    }),
    createTime: z.iso.datetime({ offset: true }).exactOptional(),
    drainageStatus: z
      .enum([
        'VERSION_DRAINAGE_STATUS_UNSPECIFIED',
        'VERSION_DRAINAGE_STATUS_DRAINING',
        'VERSION_DRAINAGE_STATUS_DRAINED',
      ])
      .exactOptional()
      .openapi({ description: 'Deprecated. Use `drainage_info` instead.' }),
    drainageInfo: VersionDrainageInfoSchema.exactOptional().openapi({
      description:
        'Information about workflow drainage to help the user determine when it is safe\n to decommission a Version. Not present while version is current or ramping',
    }),
    currentSinceTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "Unset if not current.\n (-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: 'Since' captures the field semantics despite being a preposition. --)",
      }),
    rampingSinceTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "Unset if not ramping. Updated when the version first starts ramping, not on each ramp change.\n (-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: 'Since' captures the field semantics despite being a preposition. --)",
      }),
    routingUpdateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Last time `current_since_time`, `ramping_since_time, or `ramp_percentage` of this version changed.',
      }),
    firstActivationTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Timestamp when this version first became current or ramping.' }),
    lastCurrentTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Timestamp when this version last became current.\n Can be used to determine whether a version has ever been Current.',
      }),
    lastDeactivationTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Timestamp when this version last stopped being current or ramping.\n Cleared if the version becomes current or ramping again.',
      }),
    computeConfig: ComputeConfigSummarySchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WorkerDeploymentInfoWorkerDeploymentVersionSummary')

const RoutingConfigSchema = z
  .object({
    currentDeploymentVersion: WorkerDeploymentVersionSchema.exactOptional().openapi({
      description:
        'Specifies which Deployment Version should receive new workflow executions and tasks of\n existing unversioned or AutoUpgrade workflows.\n Nil value means no Version in this Deployment (except Ramping Version, if present) receives traffic other than tasks of previously Pinned workflows. In absence of a Current Version, remaining traffic after any ramp (if set)  goes to unversioned workers (those with `UNVERSIONED` (or unspecified) `WorkerVersioningMode`.).\n Note: Current Version is overridden by the Ramping Version for a portion of traffic when ramp percentage\n is non-zero (see `ramping_deployment_version` and `ramping_version_percentage`).',
    }),
    currentVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Deprecated. Use `current_deployment_version`.' }),
    rampingDeploymentVersion: WorkerDeploymentVersionSchema.exactOptional().openapi({
      description:
        'When ramp percentage is non-zero, that portion of traffic is shifted from the Current Version to the Ramping Version.\n Must always be different from `current_deployment_version` unless both are nil.\n Nil value represents all the unversioned workers (those with `UNVERSIONED` (or unspecified) `WorkerVersioningMode`.)\n Note that it is possible to ramp from one Version to another Version, or from unversioned\n workers to a particular Version, or from a particular Version to unversioned workers.',
    }),
    rampingVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Deprecated. Use `ramping_deployment_version`.' }),
    rampingVersionPercentage: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Percentage of tasks that are routed to the Ramping Version instead of the Current Version.\n Valid range: [0, 100]. A 100% value means the Ramping Version is receiving full traffic but\n not yet "promoted" to be the Current Version, likely due to pending validations.\n A 0% value means the Ramping Version is receiving no traffic.',
      }),
    currentVersionChangedTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Last time current version was changed.' }),
    rampingVersionChangedTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Last time ramping version was changed. Not updated if only the ramp percentage changes.',
      }),
    rampingVersionPercentageChangedTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Last time ramping version percentage was changed.\n If ramping version is changed, this is also updated, even if the percentage stays the same.',
      }),
    revisionNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Monotonically increasing value which is incremented on every mutation\n to any field of this message to achieve eventual consistency between task queues and their partitions.',
      }),
  })
  .openapi({ required: [] })
  .openapi('RoutingConfig')

const WorkerDeploymentInfoSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Identifies a Worker Deployment. Must be unique within the namespace.',
      }),
    versionSummaries: z
      .array(WorkerDeploymentInfoWorkerDeploymentVersionSummarySchema)
      .exactOptional()
      .openapi({
        description:
          'Deployment Versions that are currently tracked in this Deployment. A DeploymentVersion will be\n cleaned up automatically if all the following conditions meet:\n - It does not receive new executions (is not current or ramping)\n - It has no active pollers (see WorkerDeploymentVersionInfo.pollers_status)\n - It is drained (see WorkerDeploymentVersionInfo.drainage_status)',
      }),
    createTime: z.iso.datetime({ offset: true }).exactOptional(),
    routingConfig: RoutingConfigSchema.exactOptional(),
    lastModifierIdentity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identity of the last client who modified the configuration of this Deployment. Set to the\n `identity` value sent by APIs such as `SetWorkerDeploymentCurrentVersion` and\n `SetWorkerDeploymentRampingVersion`.',
      }),
    managerIdentity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identity of the client that has the exclusive right to make changes to this Worker Deployment.\n Empty by default.\n If this is set, clients whose identity does not match `manager_identity` will not be able to make changes\n to this Worker Deployment. They can either set their own identity as the manager or unset the field to proceed.',
      }),
    routingConfigUpdateState: z
      .enum([
        'ROUTING_CONFIG_UPDATE_STATE_UNSPECIFIED',
        'ROUTING_CONFIG_UPDATE_STATE_IN_PROGRESS',
        'ROUTING_CONFIG_UPDATE_STATE_COMPLETED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the routing_config has been fully propagated to all\n relevant task queues and their partitions.',
      }),
  })
  .openapi({
    description:
      'A Worker Deployment (Deployment, for short) represents all workers serving\n a shared set of Task Queues. Typically, a Deployment represents one service or\n application.\n A Deployment contains multiple Deployment Versions, each representing a different\n version of workers. (see documentation of WorkerDeploymentVersionInfo)\n Deployment records are created in Temporal server automatically when their\n first poller arrives to the server.',
    required: [],
  })
  .openapi('WorkerDeploymentInfo')

const DescribeWorkerDeploymentResponseSchema = z
  .object({
    conflictToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This value is returned so that it can be optionally passed to APIs\n that write to the Worker Deployment state to ensure that the state\n did not change between this read and a future write.',
      }),
    workerDeploymentInfo: WorkerDeploymentInfoSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeWorkerDeploymentResponse')

const WorkerDeploymentVersionInfoVersionTaskQueueInfoSchema = z
  .object({
    name: z.string().exactOptional(),
    type: z
      .enum([
        'TASK_QUEUE_TYPE_UNSPECIFIED',
        'TASK_QUEUE_TYPE_WORKFLOW',
        'TASK_QUEUE_TYPE_ACTIVITY',
        'TASK_QUEUE_TYPE_NEXUS',
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WorkerDeploymentVersionInfoVersionTaskQueueInfo')

const VersionMetadataSchema = z
  .object({
    entries: z
      .record(z.string(), PayloadSchema)
      .exactOptional()
      .openapi({ description: 'Arbitrary key-values.' }),
  })
  .openapi({ required: [] })
  .openapi('VersionMetadata')

const WorkerDeploymentVersionInfoSchema = z
  .object({
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'Deprecated. Use `deployment_version`.' }),
    status: z
      .enum([
        'WORKER_DEPLOYMENT_VERSION_STATUS_UNSPECIFIED',
        'WORKER_DEPLOYMENT_VERSION_STATUS_INACTIVE',
        'WORKER_DEPLOYMENT_VERSION_STATUS_CURRENT',
        'WORKER_DEPLOYMENT_VERSION_STATUS_RAMPING',
        'WORKER_DEPLOYMENT_VERSION_STATUS_DRAINING',
        'WORKER_DEPLOYMENT_VERSION_STATUS_DRAINED',
        'WORKER_DEPLOYMENT_VERSION_STATUS_CREATED',
      ])
      .exactOptional()
      .openapi({ description: 'The status of the Worker Deployment Version.' }),
    deploymentVersion: WorkerDeploymentVersionSchema.exactOptional().openapi({
      description: 'Required.',
    }),
    deploymentName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Deprecated. User deployment_version.deployment_name.' }),
    createTime: z.iso.datetime({ offset: true }).exactOptional(),
    routingChangedTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Last time `current_since_time`, `ramping_since_time, or `ramp_percentage` of this version changed.',
      }),
    currentSinceTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "(-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: 'Since' captures the field semantics despite being a preposition. --)\n Unset if not current.",
      }),
    rampingSinceTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "(-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: 'Since' captures the field semantics despite being a preposition. --)\n Unset if not ramping. Updated when the version first starts ramping, not on each ramp change.",
      }),
    firstActivationTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Timestamp when this version first became current or ramping.' }),
    lastCurrentTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Timestamp when this version last became current.\n Can be used to determine whether a version has ever been Current.',
      }),
    lastDeactivationTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Timestamp when this version last stopped being current or ramping.\n Cleared if the version becomes current or ramping again.',
      }),
    rampPercentage: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Range: [0, 100]. Must be zero if the version is not ramping (i.e. `ramping_since_time` is nil).\n Can be in the range [0, 100] if the version is ramping.',
      }),
    taskQueueInfos: z
      .array(WorkerDeploymentVersionInfoVersionTaskQueueInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'All the Task Queues that have ever polled from this Deployment version.\n Deprecated. Use `version_task_queues` in DescribeWorkerDeploymentVersionResponse instead.',
      }),
    drainageInfo: VersionDrainageInfoSchema.exactOptional().openapi({
      description:
        'Helps user determine when it is safe to decommission the workers of this\n Version. Not present when version is current or ramping.\n Current limitations:\n - Not supported for Unversioned mode.\n - Periodically refreshed, may have delays up to few minutes (consult the\n   last_checked_time value).\n - Refreshed only when version is not current or ramping AND the status is not\n   "drained" yet.\n - Once the status is changed to "drained", it is not changed until the Version\n   becomes Current or Ramping again, at which time the drainage info is cleared.\n   This means if the Version is "drained" but new workflows are sent to it via\n   Pinned Versioning Override, the status does not account for those Pinned-override\n   executions and remains "drained".',
    }),
    metadata: VersionMetadataSchema.exactOptional().openapi({
      description: 'Arbitrary user-provided metadata attached to this version.',
    }),
    computeConfig: ComputeConfigSchema.exactOptional().openapi({
      description:
        'Optional. Contains the new worker compute configuration for the Worker\n Deployment. Used for worker scale management.',
    }),
    lastModifierIdentity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identity of the last client who modified the configuration of this Version.\n As of now, this field only covers changes through the following APIs:\n - `CreateWorkerDeploymentVersion`\n - `UpdateWorkerDeploymentVersionComputeConfig`\n - `UpdateWorkerDeploymentVersionMetadata`',
      }),
  })
  .openapi({
    description:
      'A Worker Deployment Version (Version, for short) represents all workers of the same\n code and config within a Deployment. Workers of the same Version are expected to\n behave exactly the same so when executions move between them there are no\n non-determinism issues.\n Worker Deployment Versions are created in Temporal server automatically when\n their first poller arrives to the server.',
    required: [],
  })
  .openapi('WorkerDeploymentVersionInfo')

const DescribeWorkerDeploymentVersionResponseVersionTaskQueueSchema = z
  .object({
    name: z.string().exactOptional(),
    type: z
      .enum([
        'TASK_QUEUE_TYPE_UNSPECIFIED',
        'TASK_QUEUE_TYPE_WORKFLOW',
        'TASK_QUEUE_TYPE_ACTIVITY',
        'TASK_QUEUE_TYPE_NEXUS',
      ])
      .exactOptional(),
    stats: TaskQueueStatsSchema.exactOptional().openapi({
      description: 'Only set if `report_task_queue_stats` is set on the request.',
    }),
    statsByPriorityKey: z
      .record(z.string(), TaskQueueStatsSchema)
      .exactOptional()
      .openapi({
        description:
          'Task queue stats breakdown by priority key. Only contains actively used priority keys.\n Only set if `report_task_queue_stats` is set to true in the request.\n (-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: "by" is used to clarify the key. --)',
      }),
  })
  .openapi({ required: [] })
  .openapi('DescribeWorkerDeploymentVersionResponseVersionTaskQueue')

const DescribeWorkerDeploymentVersionResponseSchema = z
  .object({
    workerDeploymentVersionInfo: WorkerDeploymentVersionInfoSchema.exactOptional(),
    versionTaskQueues: z
      .array(DescribeWorkerDeploymentVersionResponseVersionTaskQueueSchema)
      .exactOptional()
      .openapi({
        description: 'All the Task Queues that have ever polled from this Deployment version.',
      }),
  })
  .openapi({ required: [] })
  .openapi('DescribeWorkerDeploymentVersionResponse')

const WorkerHostInfoSchema = z
  .object({
    hostName: z.string().exactOptional().openapi({ description: 'Worker host identifier.' }),
    workerGroupingKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Worker grouping identifier. A key to group workers that share the same client+namespace+process.\n This will be used to build the worker command nexus task queue name:\n "temporal-sys/worker-commands/{worker_grouping_key}"',
      }),
    processId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Worker process identifier. This id only needs to be unique\n within one host (so using e.g. a unix pid would be appropriate).',
      }),
    currentHostCpuUsage: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'System used CPU as a float in the range [0.0, 1.0] where 1.0 is defined as all\n cores on the host pegged.',
      }),
    currentHostMemUsage: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'System used memory as a float in the range [0.0, 1.0] where 1.0 is defined as\n all available memory on the host is used.',
      }),
  })
  .openapi({
    description: 'Holds everything needed to identify the worker host/process context',
    required: [],
  })
  .openapi('WorkerHostInfo')

const WorkerSlotsInfoSchema = z
  .object({
    currentAvailableSlots: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of slots available for the worker to specific tasks.\n May be -1 if the upper bound is not known.',
      }),
    currentUsedSlots: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of slots used by the worker for specific tasks.' }),
    slotSupplierKind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Kind of the slot supplier, which is used to determine how the slots are allocated.\n Possible values: "Fixed | ResourceBased | Custom String"',
      }),
    totalProcessedTasks: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Total number of tasks processed (completed both successfully and unsuccesfully, or any other way)\n by the worker since the worker started. This is a cumulative counter.',
      }),
    totalFailedTasks: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Total number of failed tasks processed by the worker so far.' }),
    lastIntervalProcessedTasks: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of tasks processed in since the last heartbeat from the worker.\n This is a cumulative counter, and it is reset to 0 each time the worker sends a heartbeat.\n Contains both successful and failed tasks.',
      }),
    lastIntervalFailureTasks: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Number of failed tasks processed since the last heartbeat from the worker.',
      }),
  })
  .openapi({ required: [] })
  .openapi('WorkerSlotsInfo')

const WorkerPollerInfoSchema = z
  .object({
    currentPollers: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of polling RPCs that are currently in flight.' }),
    lastSuccessfulPollTime: z.iso.datetime({ offset: true }).exactOptional(),
    isAutoscaling: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Set true if the number of concurrent pollers is auto-scaled' }),
  })
  .openapi({ required: [] })
  .openapi('WorkerPollerInfo')

const PluginInfoSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'The name of the plugin, required.' }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'The version of the plugin, may be empty.' }),
  })
  .openapi({ required: [] })
  .openapi('PluginInfo')

const StorageDriverInfoSchema = z
  .object({
    type: z.string().exactOptional().openapi({ description: 'The type of the driver, required.' }),
  })
  .openapi({ required: [] })
  .openapi('StorageDriverInfo')

const WorkerHeartbeatSchema = z
  .object({
    workerInstanceKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Worker identifier, should be unique for the namespace.\n It is distinct from worker identity, which is not necessarily namespace-unique.',
      }),
    workerIdentity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Worker identity, set by the client, may not be unique.\n Usually host_name+(user group name)+process_id, but can be overwritten by the user.',
      }),
    hostInfo: WorkerHostInfoSchema.exactOptional().openapi({
      description: 'Worker host information.',
    }),
    taskQueue: z
      .string()
      .exactOptional()
      .openapi({ description: 'Task queue this worker is polling for tasks.' }),
    deploymentVersion: WorkerDeploymentVersionSchema.exactOptional(),
    sdkName: z.string().exactOptional(),
    sdkVersion: z.string().exactOptional(),
    status: z
      .enum([
        'WORKER_STATUS_UNSPECIFIED',
        'WORKER_STATUS_RUNNING',
        'WORKER_STATUS_SHUTTING_DOWN',
        'WORKER_STATUS_SHUTDOWN',
      ])
      .exactOptional()
      .openapi({ description: 'Worker status. Defined by SDK.' }),
    startTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Worker start time.\n It can be used to determine worker uptime. (current time - start time)',
      }),
    heartbeatTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Timestamp of this heartbeat, coming from the worker. Worker should set it to "now".\n Note that this timestamp comes directly from the worker and is subject to workers\' clock skew.',
      }),
    elapsedSinceLastHeartbeat: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({ description: 'Elapsed time since the last heartbeat from the worker.' }),
    workflowTaskSlotsInfo: WorkerSlotsInfoSchema.exactOptional(),
    activityTaskSlotsInfo: WorkerSlotsInfoSchema.exactOptional(),
    nexusTaskSlotsInfo: WorkerSlotsInfoSchema.exactOptional(),
    localActivitySlotsInfo: WorkerSlotsInfoSchema.exactOptional(),
    workflowPollerInfo: WorkerPollerInfoSchema.exactOptional(),
    workflowStickyPollerInfo: WorkerPollerInfoSchema.exactOptional(),
    activityPollerInfo: WorkerPollerInfoSchema.exactOptional(),
    nexusPollerInfo: WorkerPollerInfoSchema.exactOptional(),
    totalStickyCacheHit: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'A Workflow Task found a cached Workflow Execution to run against.',
      }),
    totalStickyCacheMiss: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'A Workflow Task did not find a cached Workflow execution to run against.',
      }),
    currentStickyCacheSize: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Current cache size, expressed in number of Workflow Executions.' }),
    plugins: z
      .array(PluginInfoSchema)
      .exactOptional()
      .openapi({ description: 'Plugins currently in use by this SDK.' }),
    drivers: z
      .array(StorageDriverInfoSchema)
      .exactOptional()
      .openapi({ description: 'Storage drivers in use by this SDK.' }),
  })
  .openapi({
    description:
      'Worker info message, contains information about the worker and its current state.\n All information is provided by the worker itself.\n (-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: Removing those words make names less clear. --)',
    required: [],
  })
  .openapi('WorkerHeartbeat')

const WorkerInfoSchema = z
  .object({ workerHeartbeat: WorkerHeartbeatSchema.exactOptional() })
  .openapi({ description: 'Detailed worker information.', required: [] })
  .openapi('WorkerInfo')

const DescribeWorkerResponseSchema = z
  .object({ workerInfo: WorkerInfoSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DescribeWorkerResponse')

const WorkflowExecutionConfigSchema = z
  .object({
    taskQueue: TaskQueueSchema.exactOptional(),
    workflowExecutionTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional(),
    workflowRunTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional(),
    defaultWorkflowTaskTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional(),
    userMetadata: UserMetadataSchema.exactOptional().openapi({
      description: 'User metadata provided on start workflow.',
    }),
  })
  .openapi({ required: [] })
  .openapi('WorkflowExecutionConfig')

const ResetPointInfoSchema = z
  .object({
    buildId: z.string().exactOptional().openapi({ description: 'Worker build id.' }),
    binaryChecksum: z
      .string()
      .exactOptional()
      .openapi({ description: 'Deprecated. A worker binary version identifier.' }),
    runId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The first run ID in the execution chain that was touched by this worker build.',
      }),
    firstWorkflowTaskCompletedId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Event ID of the first WorkflowTaskCompleted event processed by this worker build.',
      }),
    createTime: z.iso.datetime({ offset: true }).exactOptional(),
    expireTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          '(-- api-linter: core::0214::resource-expiry=disabled\n     aip.dev/not-precedent: TTL is not defined for ResetPointInfo. --)\n The time that the run is deleted due to retention.',
      }),
    resettable: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'false if the reset point has pending childWFs/reqCancels/signalExternals.',
      }),
  })
  .openapi({
    description:
      'ResetPointInfo records the workflow event id that is the first one processed by a given\n build id or binary checksum. A new reset point will be created if either build id or binary\n checksum changes (although in general only one or the other will be used at a time).',
    required: [],
  })
  .openapi('ResetPointInfo')

const ResetPointsSchema = z
  .object({ points: z.array(ResetPointInfoSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('ResetPoints')

const WorkflowExecutionVersioningInfoSchema = z
  .object({
    behavior: z
      .enum([
        'VERSIONING_BEHAVIOR_UNSPECIFIED',
        'VERSIONING_BEHAVIOR_PINNED',
        'VERSIONING_BEHAVIOR_AUTO_UPGRADE',
      ])
      .exactOptional()
      .openapi({
        description:
          "Versioning behavior determines how the server should treat this execution when workers are\n upgraded. When present it means this workflow execution is versioned; UNSPECIFIED means\n unversioned. See the comments in `VersioningBehavior` enum for more info about different\n behaviors.\n\n Child workflows or CaN executions **inherit** their parent/previous run's effective Versioning \n Behavior and Version (except when the new execution runs on a task queue not belonging to the \n same deployment version as the parent/previous run's task queue). The first workflow task will\n be dispatched according to the inherited behavior (or to the current version of the task-queue's \n deployment in the case of AutoUpgrade.) After completion of their first workflow task the \n Deployment Version and Behavior of the execution will update according to configuration on the worker.\n \n Note that `behavior` is overridden by `versioning_override` if the latter is present.",
      }),
    deployment: DeploymentSchema.exactOptional().openapi({
      description:
        'The worker deployment that completed the last workflow task of this workflow execution. Must\n be present if `behavior` is set. Absent value means no workflow task is completed, or the\n last workflow task was completed by an unversioned worker. Unversioned workers may still send\n a deployment value which will be stored here, so the right way to check if an execution is\n versioned if an execution is versioned or not is via the `behavior` field.\n Note that `deployment` is overridden by `versioning_override` if the latter is present.\n Deprecated. Use `deployment_version`.',
    }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'Deprecated. Use `deployment_version`.' }),
    deploymentVersion: WorkerDeploymentVersionSchema.exactOptional().openapi({
      description:
        "The Worker Deployment Version that completed the last workflow task of this workflow execution.\n An absent value means no workflow task is completed, or the workflow is unversioned.\n If present, and `behavior` is UNSPECIFIED, the last task of this workflow execution was completed\n by a worker that is not using versioning but _is_ passing Deployment Name and Build ID.\n\n Child workflows or CaN executions **inherit** their parent/previous run's effective Versioning \n Behavior and Version (except when the new execution runs on a task queue not belonging to the \n same deployment version as the parent/previous run's task queue). The first workflow task will\n be dispatched according to the inherited behavior (or to the current version of the task-queue's \n deployment in the case of AutoUpgrade.) After completion of their first workflow task the \n Deployment Version and Behavior of the execution will update according to configuration on the worker.\n\n Note that if `versioning_override.behavior` is PINNED then `versioning_override.pinned_version`\n will override this value.",
    }),
    versioningOverride: VersioningOverrideSchema.exactOptional().openapi({
      description:
        'Present if user has set an execution-specific versioning override. This override takes\n precedence over SDK-sent `behavior` (and `version` when override is PINNED). An\n override can be set when starting a new execution, as well as afterwards by calling the\n `UpdateWorkflowExecutionOptions` API.\n Pinned overrides are automatically inherited by child workflows, continue-as-new workflows,\n workflow retries, and cron workflows.',
    }),
    deploymentTransition: DeploymentTransitionSchema.exactOptional().openapi({
      description:
        "When present, indicates the workflow is transitioning to a different deployment. Can\n indicate one of the following transitions: unversioned -> versioned, versioned -> versioned\n on a different deployment, or versioned -> unversioned.\n Not applicable to workflows with PINNED behavior.\n When a workflow with AUTO_UPGRADE behavior creates a new workflow task, it will automatically\n start a transition to the task queue's current deployment if the task queue's current\n deployment is different from the workflow's deployment.\n If the AUTO_UPGRADE workflow is stuck due to backlogged activity or workflow tasks, those\n tasks will be redirected to the task queue's current deployment. As soon as a poller from\n that deployment is available to receive the task, the workflow will automatically start a\n transition to that deployment and continue execution there.\n A deployment transition can only exist while there is a pending or started workflow task.\n Once the pending workflow task completes on the transition's target deployment, the\n transition completes and the workflow's `deployment` and `behavior` fields are updated per\n the worker's task completion response.\n Pending activities will not start new attempts during a transition. Once the transition is\n completed, pending activities will start their next attempt on the new deployment.\n Deprecated. Use version_transition.",
    }),
    versionTransition: DeploymentVersionTransitionSchema.exactOptional().openapi({
      description:
        "When present, indicates the workflow is transitioning to a different deployment version\n (which may belong to the same deployment name or another). Can indicate one of the following\n transitions: unversioned -> versioned, versioned -> versioned\n on a different deployment version, or versioned -> unversioned.\n Not applicable to workflows with PINNED behavior.\n When a workflow with AUTO_UPGRADE behavior creates a new workflow task, it will automatically\n start a transition to the task queue's current version if the task queue's current version is\n different from the workflow's current deployment version.\n If the AUTO_UPGRADE workflow is stuck due to backlogged activity or workflow tasks, those\n tasks will be redirected to the task queue's current version. As soon as a poller from\n that deployment version is available to receive the task, the workflow will automatically\n start a transition to that version and continue execution there.\n A version transition can only exist while there is a pending or started workflow task.\n Once the pending workflow task completes on the transition's target version, the\n transition completes and the workflow's `behavior`, and `deployment_version` fields are updated per the\n worker's task completion response.\n Pending activities will not start new attempts during a transition. Once the transition is\n completed, pending activities will start their next attempt on the new version.",
    }),
    revisionNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Monotonic counter reflecting the latest routing decision for this workflow execution.\n Used for staleness detection between history and matching when dispatching tasks to workers.\n Incremented when a workflow execution routes to a new deployment version, which happens\n when a worker of the new deployment version completes a workflow task.\n Note: Pinned tasks and sticky tasks send a value of 0 for this field since these tasks do not\n face the problem of inconsistent dispatching that arises from eventual consistency between\n task queues and their partitions.',
      }),
    continueAsNewInitialVersioningBehavior: z
      .enum([
        'CONTINUE_AS_NEW_VERSIONING_BEHAVIOR_UNSPECIFIED',
        'CONTINUE_AS_NEW_VERSIONING_BEHAVIOR_AUTO_UPGRADE',
        'CONTINUE_AS_NEW_VERSIONING_BEHAVIOR_USE_RAMPING_VERSION',
      ])
      .exactOptional()
      .openapi({
        description:
          'Experimental.\n If this workflow is the result of a continue-as-new, this field is set to the initial_versioning_behavior\n specified in that command.\n Only used for the initial task of this run and the initial task of any retries of this run.\n Not passed to children or to future continue-as-new.\n\n Note: In the first release of Upgrade-on-CaN, when the only ContinueAsNewVersioningBehavior was AutoUpgrade,\n a non-empty InheritedAutoUpgradeInfo meant that the workflow should start as AutoUpgrade. So for compatibility\n with ContinueAsNew history commands generated during that time, know that an UNSPECIFIED value here is equivalent\n to ContinueAsNewVersioningBehaviorAutoUpgrade if the behavior of the workflow is AutoUpgrade.',
      }),
  })
  .openapi({
    description:
      'Holds all the information about worker versioning for a particular workflow execution.\n Experimental. Versioning info is experimental and might change in the future.',
    required: [],
  })
  .openapi('WorkflowExecutionVersioningInfo')

const WorkflowExecutionInfoSchema = z
  .object({
    execution: WorkflowExecutionSchema.exactOptional(),
    type: WorkflowTypeSchema.exactOptional(),
    startTime: z.iso.datetime({ offset: true }).exactOptional(),
    closeTime: z.iso.datetime({ offset: true }).exactOptional(),
    status: z
      .enum([
        'WORKFLOW_EXECUTION_STATUS_UNSPECIFIED',
        'WORKFLOW_EXECUTION_STATUS_RUNNING',
        'WORKFLOW_EXECUTION_STATUS_COMPLETED',
        'WORKFLOW_EXECUTION_STATUS_FAILED',
        'WORKFLOW_EXECUTION_STATUS_CANCELED',
        'WORKFLOW_EXECUTION_STATUS_TERMINATED',
        'WORKFLOW_EXECUTION_STATUS_CONTINUED_AS_NEW',
        'WORKFLOW_EXECUTION_STATUS_TIMED_OUT',
        'WORKFLOW_EXECUTION_STATUS_PAUSED',
      ])
      .exactOptional(),
    historyLength: z.string().exactOptional(),
    parentNamespaceId: z.string().exactOptional(),
    parentExecution: WorkflowExecutionSchema.exactOptional(),
    executionTime: z.iso.datetime({ offset: true }).exactOptional(),
    memo: MemoSchema.exactOptional(),
    searchAttributes: SearchAttributesSchema.exactOptional(),
    autoResetPoints: ResetPointsSchema.exactOptional(),
    taskQueue: z.string().exactOptional(),
    stateTransitionCount: z.string().exactOptional(),
    historySizeBytes: z.string().exactOptional(),
    mostRecentWorkerVersionStamp: WorkerVersionStampSchema.exactOptional().openapi({
      description:
        'If set, the most recent worker version stamp that appeared in a workflow task completion\n Deprecated. This field should be cleaned up when versioning-2 API is removed. [cleanup-experimental-wv]',
    }),
    executionDuration: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'Workflow execution duration is defined as difference between close time and execution time.\n This field is only populated if the workflow is closed.',
      }),
    rootExecution: WorkflowExecutionSchema.exactOptional().openapi({
      description:
        'Contains information about the root workflow execution.\n The root workflow execution is defined as follows:\n 1. A workflow without parent workflow is its own root workflow.\n 2. A workflow that has a parent workflow has the same root workflow as its parent workflow.\n Note: workflows continued as new or reseted may or may not have parents, check examples below.\n\n Examples:\n   Scenario 1: Workflow W1 starts child workflow W2, and W2 starts child workflow W3.\n     - The root workflow of all three workflows is W1.\n   Scenario 2: Workflow W1 starts child workflow W2, and W2 continued as new W3.\n     - The root workflow of all three workflows is W1.\n   Scenario 3: Workflow W1 continued as new W2.\n     - The root workflow of W1 is W1 and the root workflow of W2 is W2.\n   Scenario 4: Workflow W1 starts child workflow W2, and W2 is reseted, creating W3\n     - The root workflow of all three workflows is W1.\n   Scenario 5: Workflow W1 is reseted, creating W2.\n     - The root workflow of W1 is W1 and the root workflow of W2 is W2.',
    }),
    assignedBuildId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The currently assigned build ID for this execution. Presence of this value means worker versioning is used\n for this execution. Assigned build ID is selected based on Worker Versioning Assignment Rules\n when the first workflow task of the execution is scheduled. If the first workflow task fails and is scheduled\n again, the assigned build ID may change according to the latest versioning rules.\n Assigned build ID can also change in the middle of a execution if Compatible Redirect Rules are applied to\n this execution.\n Deprecated. This field should be cleaned up when versioning-2 API is removed. [cleanup-experimental-wv]',
      }),
    inheritedBuildId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Build ID inherited from a previous/parent execution. If present, assigned_build_id will be set to this, instead\n of using the assignment rules.\n Deprecated. This field should be cleaned up when versioning-2 API is removed. [cleanup-experimental-wv]',
      }),
    firstRunId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The first run ID in the execution chain.\n Executions created via the following operations are considered to be in the same chain\n - ContinueAsNew\n - Workflow Retry\n - Workflow Reset\n - Cron Schedule',
      }),
    versioningInfo: WorkflowExecutionVersioningInfoSchema.exactOptional().openapi({
      description:
        'Absent value means the workflow execution is not versioned. When present, the execution might\n be versioned or unversioned, depending on `versioning_info.behavior` and `versioning_info.versioning_override`.\n Experimental. Versioning info is experimental and might change in the future.',
    }),
    workerDeploymentName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of Worker Deployment that completed the most recent workflow task.',
      }),
    priority: PrioritySchema.exactOptional().openapi({ description: 'Priority metadata' }),
    externalPayloadSizeBytes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Total size in bytes of all external payloads referenced in workflow history.',
      }),
    externalPayloadCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Count of external payloads referenced in workflow history.' }),
  })
  .openapi({
    description:
      'Hold basic information about a workflow execution.\n This structure is a part of visibility, and thus contain a limited subset of information.',
    required: [],
  })
  .openapi('WorkflowExecutionInfo')

const PauseInfoManualSchema = z
  .object({
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the actor that paused the activity.' }),
    reason: z.string().exactOptional().openapi({ description: 'Reason for pausing the activity.' }),
  })
  .openapi({ required: [] })
  .openapi('PauseInfoManual')

const PauseInfoRuleSchema = z
  .object({
    ruleId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The rule that paused the activity.' }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the actor that created the rule.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'Reason why rule was created. Populated from rule description.' }),
  })
  .openapi({ required: [] })
  .openapi('PauseInfoRule')

const PendingActivityInfoPauseInfoSchema = z
  .object({
    pauseTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time when the activity was paused.' }),
    manual: PauseInfoManualSchema.exactOptional().openapi({
      description: 'activity was paused by the manual intervention',
    }),
    rule: PauseInfoRuleSchema.exactOptional().openapi({
      description: 'activity was paused by the rule',
    }),
  })
  .openapi({ required: [] })
  .openapi('PendingActivityInfoPauseInfo')

const PendingActivityInfoSchema = z
  .object({
    activityId: z.string().exactOptional(),
    activityType: ActivityTypeSchema.exactOptional(),
    state: z
      .enum([
        'PENDING_ACTIVITY_STATE_UNSPECIFIED',
        'PENDING_ACTIVITY_STATE_SCHEDULED',
        'PENDING_ACTIVITY_STATE_STARTED',
        'PENDING_ACTIVITY_STATE_CANCEL_REQUESTED',
        'PENDING_ACTIVITY_STATE_PAUSED',
        'PENDING_ACTIVITY_STATE_PAUSE_REQUESTED',
      ])
      .exactOptional(),
    heartbeatDetails: PayloadsSchema.exactOptional(),
    lastHeartbeatTime: z.iso.datetime({ offset: true }).exactOptional(),
    lastStartedTime: z.iso.datetime({ offset: true }).exactOptional(),
    attempt: z.int32().exactOptional(),
    maximumAttempts: z.int32().exactOptional(),
    scheduledTime: z.iso.datetime({ offset: true }).exactOptional(),
    expirationTime: z.iso.datetime({ offset: true }).exactOptional(),
    lastFailure: FailureSchema.exactOptional(),
    lastWorkerIdentity: z.string().exactOptional(),
    lastIndependentlyAssignedBuildId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Deprecated. This means the activity is independently versioned and not bound to the build ID of its workflow.\n The activity will use the build id in this field instead.\n If the task fails and is scheduled again, the assigned build ID may change according to the latest versioning\n rules.',
      }),
    lastWorkerVersionStamp: WorkerVersionStampSchema.exactOptional().openapi({
      description:
        'Deprecated. The version stamp of the worker to whom this activity was most recently dispatched\n This field should be cleaned up when versioning-2 API is removed. [cleanup-experimental-wv]',
    }),
    currentRetryInterval: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'The time activity will wait until the next retry.\n If activity is currently running it will be next retry interval if activity failed.\n If activity is currently waiting it will be current retry interval.\n If there will be no retry it will be null.',
      }),
    lastAttemptCompleteTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The time when the last activity attempt was completed. If activity has not been completed yet then it will be null.',
      }),
    nextAttemptScheduleTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Next time when activity will be scheduled.\n If activity is currently scheduled or started it will be null.',
      }),
    paused: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if activity is paused.' }),
    lastDeployment: DeploymentSchema.exactOptional().openapi({
      description:
        'The deployment this activity was dispatched to most recently. Present only if the activity\n was dispatched to a versioned worker.\n Deprecated. Use `last_deployment_version`.',
    }),
    lastWorkerDeploymentVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Worker Deployment Version this activity was dispatched to most recently.\n Deprecated. Use `last_deployment_version`.',
      }),
    lastDeploymentVersion: WorkerDeploymentVersionSchema.exactOptional().openapi({
      description:
        'The Worker Deployment Version this activity was dispatched to most recently.\n If nil, the activity has not yet been dispatched or was last dispatched to an unversioned worker.',
    }),
    priority: PrioritySchema.exactOptional().openapi({
      description:
        'Priority metadata. If this message is not present, or any fields are not\n present, they inherit the values from the workflow.',
    }),
    pauseInfo: PendingActivityInfoPauseInfoSchema.exactOptional(),
    activityOptions: ActivityOptionsSchema.exactOptional().openapi({
      description:
        'Current activity options. May be different from the one used to start the activity.',
    }),
  })
  .openapi({ required: [] })
  .openapi('PendingActivityInfo')

const PendingChildExecutionInfoSchema = z
  .object({
    workflowId: z.string().exactOptional(),
    runId: z.string().exactOptional(),
    workflowTypeName: z.string().exactOptional(),
    initiatedId: z.string().exactOptional(),
    parentClosePolicy: z
      .enum([
        'PARENT_CLOSE_POLICY_UNSPECIFIED',
        'PARENT_CLOSE_POLICY_TERMINATE',
        'PARENT_CLOSE_POLICY_ABANDON',
        'PARENT_CLOSE_POLICY_REQUEST_CANCEL',
      ])
      .exactOptional()
      .openapi({ description: 'Default: PARENT_CLOSE_POLICY_TERMINATE.' }),
  })
  .openapi({ required: [] })
  .openapi('PendingChildExecutionInfo')

const PendingWorkflowTaskInfoSchema = z
  .object({
    state: z
      .enum([
        'PENDING_WORKFLOW_TASK_STATE_UNSPECIFIED',
        'PENDING_WORKFLOW_TASK_STATE_SCHEDULED',
        'PENDING_WORKFLOW_TASK_STATE_STARTED',
      ])
      .exactOptional(),
    scheduledTime: z.iso.datetime({ offset: true }).exactOptional(),
    originalScheduledTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "original_scheduled_time is the scheduled time of the first workflow task during workflow task heartbeat.\n Heartbeat workflow task is done by RespondWorkflowTaskComplete with ForceCreateNewWorkflowTask == true and no command\n In this case, OriginalScheduledTime won't change. Then when current time - original_scheduled_time exceeds\n some threshold, the workflow task will be forced timeout.",
      }),
    startedTime: z.iso.datetime({ offset: true }).exactOptional(),
    attempt: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PendingWorkflowTaskInfo')

const NexusOperationCancellationInfoSchema = z
  .object({
    requestedTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time when cancellation was requested.' }),
    state: z
      .enum([
        'NEXUS_OPERATION_CANCELLATION_STATE_UNSPECIFIED',
        'NEXUS_OPERATION_CANCELLATION_STATE_SCHEDULED',
        'NEXUS_OPERATION_CANCELLATION_STATE_BACKING_OFF',
        'NEXUS_OPERATION_CANCELLATION_STATE_SUCCEEDED',
        'NEXUS_OPERATION_CANCELLATION_STATE_FAILED',
        'NEXUS_OPERATION_CANCELLATION_STATE_TIMED_OUT',
        'NEXUS_OPERATION_CANCELLATION_STATE_BLOCKED',
      ])
      .exactOptional(),
    attempt: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of attempts made to deliver the cancel operation request.\n This number represents a minimum bound since the attempt is incremented after the request completes.',
      }),
    lastAttemptCompleteTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time when the last attempt completed.' }),
    lastAttemptFailure: FailureSchema.exactOptional().openapi({
      description: "The last attempt's failure, if any.",
    }),
    nextAttemptScheduleTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time when the next attempt is scheduled.' }),
    blockedReason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If the state is BLOCKED, blocked reason provides additional information.',
      }),
  })
  .openapi({
    description:
      'NexusOperationCancellationInfo contains the state of a nexus operation cancellation.',
    required: [],
  })
  .openapi('NexusOperationCancellationInfo')

const PendingNexusOperationInfoSchema = z
  .object({
    endpoint: z
      .string()
      .exactOptional()
      .openapi({
        description: "Endpoint name.\n Resolved to a URL via the cluster's endpoint registry.",
      }),
    service: z.string().exactOptional().openapi({ description: 'Service name.' }),
    operation: z.string().exactOptional().openapi({ description: 'Operation name.' }),
    operationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Operation ID. Only set for asynchronous operations after a successful StartOperation call.\n\n Deprecated. Renamed to operation_token.',
      }),
    scheduleToCloseTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'Schedule-to-close timeout for this operation.\n This is the only timeout settable by a workflow.\n (-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: "to" is used to indicate interval. --)',
      }),
    scheduledTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time when the operation was scheduled.' }),
    state: z
      .enum([
        'PENDING_NEXUS_OPERATION_STATE_UNSPECIFIED',
        'PENDING_NEXUS_OPERATION_STATE_SCHEDULED',
        'PENDING_NEXUS_OPERATION_STATE_BACKING_OFF',
        'PENDING_NEXUS_OPERATION_STATE_STARTED',
        'PENDING_NEXUS_OPERATION_STATE_BLOCKED',
      ])
      .exactOptional(),
    attempt: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of attempts made to deliver the start operation request.\n This number is approximate, it is incremented when a task is added to the history queue.\n In practice, there could be more attempts if a task is executed but fails to commit, or less attempts if a task\n was never executed.',
      }),
    lastAttemptCompleteTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time when the last attempt completed.' }),
    lastAttemptFailure: FailureSchema.exactOptional().openapi({
      description: "The last attempt's failure, if any.",
    }),
    nextAttemptScheduleTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time when the next attempt is scheduled.' }),
    cancellationInfo: NexusOperationCancellationInfoSchema.exactOptional(),
    scheduledEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The event ID of the NexusOperationScheduled event. Can be used to correlate an operation in the\n DescribeWorkflowExecution response with workflow history.',
      }),
    blockedReason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If the state is BLOCKED, blocked reason provides additional information.',
      }),
    operationToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Operation token. Only set for asynchronous operations after a successful StartOperation call.',
      }),
    scheduleToStartTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'Schedule-to-start timeout for this operation.\n (-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: "to" is used to indicate interval. --)',
      }),
    startToCloseTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'Start-to-close timeout for this operation.\n (-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: "to" is used to indicate interval. --)',
      }),
  })
  .openapi({
    description: 'PendingNexusOperationInfo contains the state of a pending Nexus operation.',
    required: [],
  })
  .openapi('PendingNexusOperationInfo')

const RequestIdInfoSchema = z
  .object({
    eventType: z
      .enum([
        'EVENT_TYPE_UNSPECIFIED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_STARTED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_COMPLETED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_FAILED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_TIMED_OUT',
        'EVENT_TYPE_WORKFLOW_TASK_SCHEDULED',
        'EVENT_TYPE_WORKFLOW_TASK_STARTED',
        'EVENT_TYPE_WORKFLOW_TASK_COMPLETED',
        'EVENT_TYPE_WORKFLOW_TASK_TIMED_OUT',
        'EVENT_TYPE_WORKFLOW_TASK_FAILED',
        'EVENT_TYPE_ACTIVITY_TASK_SCHEDULED',
        'EVENT_TYPE_ACTIVITY_TASK_STARTED',
        'EVENT_TYPE_ACTIVITY_TASK_COMPLETED',
        'EVENT_TYPE_ACTIVITY_TASK_FAILED',
        'EVENT_TYPE_ACTIVITY_TASK_TIMED_OUT',
        'EVENT_TYPE_ACTIVITY_TASK_CANCEL_REQUESTED',
        'EVENT_TYPE_ACTIVITY_TASK_CANCELED',
        'EVENT_TYPE_TIMER_STARTED',
        'EVENT_TYPE_TIMER_FIRED',
        'EVENT_TYPE_TIMER_CANCELED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_CANCEL_REQUESTED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_CANCELED',
        'EVENT_TYPE_REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_INITIATED',
        'EVENT_TYPE_REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_FAILED',
        'EVENT_TYPE_EXTERNAL_WORKFLOW_EXECUTION_CANCEL_REQUESTED',
        'EVENT_TYPE_MARKER_RECORDED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_SIGNALED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_TERMINATED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_CONTINUED_AS_NEW',
        'EVENT_TYPE_START_CHILD_WORKFLOW_EXECUTION_INITIATED',
        'EVENT_TYPE_START_CHILD_WORKFLOW_EXECUTION_FAILED',
        'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_STARTED',
        'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_COMPLETED',
        'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_FAILED',
        'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_CANCELED',
        'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_TIMED_OUT',
        'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_TERMINATED',
        'EVENT_TYPE_SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_INITIATED',
        'EVENT_TYPE_SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED',
        'EVENT_TYPE_EXTERNAL_WORKFLOW_EXECUTION_SIGNALED',
        'EVENT_TYPE_UPSERT_WORKFLOW_SEARCH_ATTRIBUTES',
        'EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_ADMITTED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_ACCEPTED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_REJECTED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_COMPLETED',
        'EVENT_TYPE_WORKFLOW_PROPERTIES_MODIFIED_EXTERNALLY',
        'EVENT_TYPE_ACTIVITY_PROPERTIES_MODIFIED_EXTERNALLY',
        'EVENT_TYPE_WORKFLOW_PROPERTIES_MODIFIED',
        'EVENT_TYPE_NEXUS_OPERATION_SCHEDULED',
        'EVENT_TYPE_NEXUS_OPERATION_STARTED',
        'EVENT_TYPE_NEXUS_OPERATION_COMPLETED',
        'EVENT_TYPE_NEXUS_OPERATION_FAILED',
        'EVENT_TYPE_NEXUS_OPERATION_CANCELED',
        'EVENT_TYPE_NEXUS_OPERATION_TIMED_OUT',
        'EVENT_TYPE_NEXUS_OPERATION_CANCEL_REQUESTED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_OPTIONS_UPDATED',
        'EVENT_TYPE_NEXUS_OPERATION_CANCEL_REQUEST_COMPLETED',
        'EVENT_TYPE_NEXUS_OPERATION_CANCEL_REQUEST_FAILED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_PAUSED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_UNPAUSED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_TIME_SKIPPING_TRANSITIONED',
      ])
      .exactOptional()
      .openapi({ description: 'The event type of the history event generated by the request.' }),
    eventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The event id of the history event generated by the request. It's possible the event ID is not\n known (unflushed buffered event). In this case, the value will be zero or a negative value,\n representing an invalid ID.",
      }),
    buffered: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicate if the request is still buffered. If so, the event ID is not known and its value\n will be an invalid event ID.',
      }),
  })
  .openapi({ description: 'RequestIdInfo contains details of a request ID.', required: [] })
  .openapi('RequestIdInfo')

const WorkflowExecutionPauseInfoSchema = z
  .object({
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the client who paused the workflow execution.' }),
    pausedTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time when the workflow execution was paused.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reason for pausing the workflow execution.' }),
  })
  .openapi({
    description:
      'WorkflowExecutionPauseInfo contains the information about a workflow execution pause.',
    required: [],
  })
  .openapi('WorkflowExecutionPauseInfo')

const WorkflowExecutionExtendedInfoSchema = z
  .object({
    executionExpirationTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Workflow execution expiration time is defined as workflow start time plus expiration timeout.\n Workflow start time may change after workflow reset.',
      }),
    runExpirationTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Workflow run expiration time is defined as current workflow run start time plus workflow run timeout.',
      }),
    cancelRequested: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'indicates if the workflow received a cancel request' }),
    lastResetTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Last workflow reset time. Nil if the workflow was never reset.' }),
    originalStartTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Original workflow start time.' }),
    resetRunId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Reset Run ID points to the new run when this execution is reset. If the execution is reset multiple times, it points to the latest run.',
      }),
    requestIdInfos: z
      .record(z.string(), RequestIdInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'Request ID information (eg: history event information associated with the request ID).\n Note: It only contains request IDs from StartWorkflowExecution requests, including indirect\n calls (eg: if SignalWithStartWorkflowExecution starts a new workflow, then the request ID is\n used in the StartWorkflowExecution request).',
      }),
    pauseInfo: WorkflowExecutionPauseInfoSchema.exactOptional().openapi({
      description: 'Information about the workflow execution pause operation.',
    }),
  })
  .openapi({
    description:
      'Holds all the extra information about workflow execution that is not part of Visibility.',
    required: [],
  })
  .openapi('WorkflowExecutionExtendedInfo')

const DescribeWorkflowExecutionResponseSchema = z
  .object({
    executionConfig: WorkflowExecutionConfigSchema.exactOptional(),
    workflowExecutionInfo: WorkflowExecutionInfoSchema.exactOptional(),
    pendingActivities: z.array(PendingActivityInfoSchema).exactOptional(),
    pendingChildren: z.array(PendingChildExecutionInfoSchema).exactOptional(),
    pendingWorkflowTask: PendingWorkflowTaskInfoSchema.exactOptional(),
    callbacks: z.array(CallbackInfoSchema).exactOptional(),
    pendingNexusOperations: z.array(PendingNexusOperationInfoSchema).exactOptional(),
    workflowExtendedInfo: WorkflowExecutionExtendedInfoSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeWorkflowExecutionResponse')

const DescribeWorkflowRuleResponseSchema = z
  .object({
    rule: WorkflowRuleSchema.exactOptional().openapi({ description: 'The rule that was read.' }),
  })
  .openapi({ required: [] })
  .openapi('DescribeWorkflowRuleResponse')

const ExternalWorkflowExecutionCancelRequestedEventAttributesSchema = z
  .object({
    initiatedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'id of the `REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_INITIATED` event this event corresponds\n to',
      }),
    namespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Namespace of the to-be-cancelled workflow.\n SDKs and UI tools should use `namespace` field but server must use `namespace_id` only.',
      }),
    namespaceId: z.string().exactOptional(),
    workflowExecution: WorkflowExecutionSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExternalWorkflowExecutionCancelRequestedEventAttributes')

const ExternalWorkflowExecutionSignaledEventAttributesSchema = z
  .object({
    initiatedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'id of the `SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_INITIATED` event this event corresponds to',
      }),
    namespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Namespace of the workflow which was signaled.\n SDKs and UI tools should use `namespace` field but server must use `namespace_id` only.',
      }),
    namespaceId: z.string().exactOptional(),
    workflowExecution: WorkflowExecutionSchema.exactOptional(),
    control: z.string().exactOptional().openapi({ description: 'Deprecated.' }),
  })
  .openapi({ required: [] })
  .openapi('ExternalWorkflowExecutionSignaledEventAttributes')

const WorkerSelectorSchema = z
  .object({
    workerInstanceKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'Worker instance key to which the command should be sent.' }),
  })
  .openapi({
    description:
      'This is used to send commands to a specific worker or a group of workers.\n Right now, it is used to send commands to a specific worker instance.\n Will be extended to be able to send command to multiple workers.',
    required: [],
  })
  .openapi('WorkerSelector')

const FetchWorkerConfigRequestSchema = z
  .object({
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'Namespace this worker belongs to.' }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the client who initiated this request.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Reason for sending worker command, can be used for audit purpose.',
      }),
    selector: WorkerSelectorSchema.exactOptional().openapi({
      description:
        'Defines which workers should receive this command.\n only single worker is supported at this time.',
    }),
    resourceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Resource ID for routing. Contains the worker grouping key.' }),
  })
  .openapi({ required: [] })
  .openapi('FetchWorkerConfigRequest')

const WorkerConfigSimplePollerBehaviorSchema = z
  .object({ maxPollers: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('WorkerConfigSimplePollerBehavior')

const WorkerConfigAutoscalingPollerBehaviorSchema = z
  .object({
    minPollers: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'At least this many poll calls will always be attempted (assuming slots are available).\n Cannot be zero.',
      }),
    maxPollers: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'At most this many poll calls will ever be open at once. Must be >= `minimum`.',
      }),
    initialPollers: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'This many polls will be attempted initially before scaling kicks in. Must be between\n  `minimum` and `maximum`.',
      }),
  })
  .openapi({ required: [] })
  .openapi('WorkerConfigAutoscalingPollerBehavior')

const WorkerConfigSchema = z
  .object({
    workflowCacheSize: z.int32().exactOptional(),
    simplePollerBehavior: WorkerConfigSimplePollerBehaviorSchema.exactOptional(),
    autoscalingPollerBehavior: WorkerConfigAutoscalingPollerBehaviorSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WorkerConfig')

const FetchWorkerConfigResponseSchema = z
  .object({
    workerConfig: WorkerConfigSchema.exactOptional().openapi({
      description: 'The worker configuration.',
    }),
  })
  .openapi({ required: [] })
  .openapi('FetchWorkerConfigResponse')

const ReleaseInfoSchema = z
  .object({
    version: z.string().exactOptional(),
    releaseTime: z.iso.datetime({ offset: true }).exactOptional(),
    notes: z.string().exactOptional(),
  })
  .openapi({
    description: 'ReleaseInfo contains information about specific version of temporal.',
    required: [],
  })
  .openapi('ReleaseInfo')

const VersionInfoSchema = z
  .object({
    current: ReleaseInfoSchema.exactOptional(),
    recommended: ReleaseInfoSchema.exactOptional(),
    instructions: z.string().exactOptional(),
    alerts: z.array(AlertSchema).exactOptional(),
    lastUpdateTime: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({
    description:
      'VersionInfo contains details about current and recommended release versions as well as alerts and upgrade instructions.',
    required: [],
  })
  .openapi('VersionInfo')

const GetClusterInfoResponseSchema = z
  .object({
    supportedClients: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Key is client name i.e "temporal-go", "temporal-java", or "temporal-cli".\n Value is ranges of supported versions of this client i.e ">1.1.1 <=1.4.0 || ^5.0.0".',
      }),
    serverVersion: z.string().exactOptional(),
    clusterId: z.string().exactOptional(),
    versionInfo: VersionInfoSchema.exactOptional(),
    clusterName: z.string().exactOptional(),
    historyShardCount: z.int32().exactOptional(),
    persistenceStore: z.string().exactOptional(),
    visibilityStore: z.string().exactOptional(),
    initialFailoverVersion: z.string().exactOptional(),
    failoverVersionIncrement: z.string().exactOptional(),
  })
  .openapi({
    description: 'GetClusterInfoResponse contains information about Temporal cluster.',
    required: [],
  })
  .openapi('GetClusterInfoResponse')

const GetCurrentDeploymentResponseSchema = z
  .object({ currentDeploymentInfo: DeploymentInfoSchema.exactOptional() })
  .openapi({
    description: '[cleanup-wv-pre-release] Pre-release deployment APIs, clean up later',
    required: [],
  })
  .openapi('GetCurrentDeploymentResponse')

const GetDeploymentReachabilityResponseSchema = z
  .object({
    deploymentInfo: DeploymentInfoSchema.exactOptional(),
    reachability: z
      .enum([
        'DEPLOYMENT_REACHABILITY_UNSPECIFIED',
        'DEPLOYMENT_REACHABILITY_REACHABLE',
        'DEPLOYMENT_REACHABILITY_CLOSED_WORKFLOWS_ONLY',
        'DEPLOYMENT_REACHABILITY_UNREACHABLE',
      ])
      .exactOptional(),
    lastUpdateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Reachability level might come from server cache. This timestamp specifies when the value\n was actually calculated.',
      }),
  })
  .openapi({
    description: '[cleanup-wv-pre-release] Pre-release deployment APIs, clean up later',
    required: [],
  })
  .openapi('GetDeploymentReachabilityResponse')

const GetNexusEndpointResponseSchema = z
  .object({ endpoint: EndpointSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('GetNexusEndpointResponse')

const GetSystemInfoResponseCapabilitiesSchema = z
  .object({
    signalAndQueryHeader: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if signal and query headers are supported.' }),
    internalErrorDifferentiation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if internal errors are differentiated from other types of errors for purposes of\n retrying non-internal errors.\n\n When unset/false, clients retry all failures. When true, clients should only retry\n non-internal errors.',
      }),
    activityFailureIncludeHeartbeat: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'True if RespondActivityTaskFailed API supports including heartbeat details',
      }),
    supportsSchedules: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Supports scheduled workflow features.' }),
    encodedFailureAttributes: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if server uses protos that include temporal.api.failure.v1.Failure.encoded_attributes',
      }),
    buildIdBasedVersioning: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "True if server supports dispatching Workflow and Activity tasks based on a worker's build_id\n (see:\n https://github.com/temporalio/proposals/blob/a123af3b559f43db16ea6dd31870bfb754c4dc5e/versioning/worker-versions.md)",
      }),
    upsertMemo: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if server supports upserting workflow memo' }),
    eagerWorkflowStart: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if server supports eager workflow task dispatching for the StartWorkflowExecution API',
      }),
    sdkMetadata: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if the server knows about the sdk metadata field on WFT completions and will record\n it in history',
      }),
    countGroupByExecutionStatus: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if the server supports count group by execution status' }),
    nexus: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if the server supports Nexus operations.\n This flag is dependent both on server version and for Nexus to be enabled via server configuration.',
      }),
    serverScaledDeployments: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if the server supports server-scaled deployments.\n This flag is dependent both on server version and for server-scaled deployments\n to be enabled via server configuration.',
      }),
  })
  .openapi({ description: 'System capability details.', required: [] })
  .openapi('GetSystemInfoResponseCapabilities')

const GetSystemInfoResponseSchema = z
  .object({
    serverVersion: z.string().exactOptional().openapi({ description: 'Version of the server.' }),
    capabilities: GetSystemInfoResponseCapabilitiesSchema.exactOptional().openapi({
      description: 'All capabilities the system supports.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetSystemInfoResponse')

const GetWorkerBuildIdCompatibilityResponseSchema = z
  .object({
    majorVersionSets: z
      .array(CompatibleVersionSetSchema)
      .exactOptional()
      .openapi({
        description:
          'Major version sets, in order from oldest to newest. The last element of the list will always\n be the current default major version. IE: New workflows will target the most recent version\n in that version set.\n\n There may be fewer sets returned than exist, if the request chose to limit this response.',
      }),
  })
  .openapi({ description: '[cleanup-wv-pre-release]', required: [] })
  .openapi('GetWorkerBuildIdCompatibilityResponse')

const GetWorkerTaskReachabilityResponseSchema = z
  .object({
    buildIdReachability: z
      .array(BuildIdReachabilitySchema)
      .exactOptional()
      .openapi({
        description:
          "Task reachability, broken down by build id and then task queue.\n When requesting a large number of task queues or all task queues associated with the given build ids in a\n namespace, all task queues will be listed in the response but some of them may not contain reachability\n information due to a server enforced limit. When reaching the limit, task queues that reachability information\n could not be retrieved for will be marked with a single TASK_REACHABILITY_UNSPECIFIED entry. The caller may issue\n another call to get the reachability for those task queues.\n\n Open source users can adjust this limit by setting the server's dynamic config value for\n `limit.reachabilityTaskQueueScan` with the caveat that this call can strain the visibility store.",
      }),
  })
  .openapi({
    description: '[cleanup-wv-pre-release]\n Deprecated. Use `DescribeTaskQueue`.',
    required: [],
  })
  .openapi('GetWorkerTaskReachabilityResponse')

const TimestampedBuildIdAssignmentRuleSchema = z
  .object({
    rule: BuildIdAssignmentRuleSchema.exactOptional(),
    createTime: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TimestampedBuildIdAssignmentRule')

const TimestampedCompatibleBuildIdRedirectRuleSchema = z
  .object({
    rule: CompatibleBuildIdRedirectRuleSchema.exactOptional(),
    createTime: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TimestampedCompatibleBuildIdRedirectRule')

const GetWorkerVersioningRulesResponseSchema = z
  .object({
    assignmentRules: z.array(TimestampedBuildIdAssignmentRuleSchema).exactOptional(),
    compatibleRedirectRules: z
      .array(TimestampedCompatibleBuildIdRedirectRuleSchema)
      .exactOptional(),
    conflictToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This value can be passed back to UpdateWorkerVersioningRulesRequest to\n ensure that the rules were not modified between this List and the Update,\n which could lead to lost updates and other confusion.',
      }),
  })
  .openapi({ description: '[cleanup-wv-pre-release]', required: [] })
  .openapi('GetWorkerVersioningRulesResponse')

const PrincipalSchema = z
  .object({
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Low-cardinality category of the principal (e.g., "jwt", "users").',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Identifier within that category (e.g., sub JWT claim, email address).',
      }),
  })
  .openapi({
    description:
      'Principal is an authenticated caller identity computed by the server from trusted\n authentication context.',
    required: [],
  })
  .openapi('Principal')

const InheritedAutoUpgradeInfoSchema = z
  .object({
    sourceDeploymentVersion: WorkerDeploymentVersionSchema.exactOptional().openapi({
      description: 'The source deployment version of the parent/previous workflow.',
    }),
    sourceDeploymentRevisionNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The revision number of the source deployment version of the parent/previous workflow.',
      }),
    continueAsNewInitialVersioningBehavior: z
      .enum([
        'CONTINUE_AS_NEW_VERSIONING_BEHAVIOR_UNSPECIFIED',
        'CONTINUE_AS_NEW_VERSIONING_BEHAVIOR_AUTO_UPGRADE',
        'CONTINUE_AS_NEW_VERSIONING_BEHAVIOR_USE_RAMPING_VERSION',
      ])
      .exactOptional()
      .openapi({
        description:
          'Experimental.\n If this workflow is the result of a continue-as-new, this field is set to the initial_versioning_behavior\n specified in that command.\n Only used for the initial task of this run and the initial task of any retries of this run.\n Not passed to children or to future continue-as-new.\n\n Note: In the first release of Upgrade-on-CaN, when the only ContinueAsNewVersioningBehavior was AutoUpgrade,\n a non-empty InheritedAutoUpgradeInfo meant that the workflow should start as AutoUpgrade. So for compatibility\n with history events generated during that time, know that an UNSPECIFIED value here is equivalent to AutoUpgrade\n value if the InheritedAutoUpgradeInfo is non-empty.',
      }),
  })
  .openapi({
    description:
      'Used as part of WorkflowExecutionStartedEventAttributes to pass down the AutoUpgrade behavior and source deployment version\n to a workflow execution whose parent/previous workflow has an AutoUpgrade behavior.\n Also used for Upgrade-on-CaN behaviors AutoUpgrade and UseRampingVersion.',
    required: [],
  })
  .openapi('InheritedAutoUpgradeInfo')

const WorkflowExecutionStartedEventAttributesSchema = z
  .object({
    workflowType: WorkflowTypeSchema.exactOptional(),
    parentWorkflowNamespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If this workflow is a child, the namespace our parent lives in.\n SDKs and UI tools should use `parent_workflow_namespace` field but server must use `parent_workflow_namespace_id` only.',
      }),
    parentWorkflowNamespaceId: z.string().exactOptional(),
    parentWorkflowExecution: WorkflowExecutionSchema.exactOptional().openapi({
      description:
        'Contains information about parent workflow execution that initiated the child workflow these attributes belong to.\n If the workflow these attributes belong to is not a child workflow of any other execution, this field will not be populated.',
    }),
    parentInitiatedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'EventID of the child execution initiated event in parent workflow',
      }),
    taskQueue: TaskQueueSchema.exactOptional(),
    input: PayloadsSchema.exactOptional().openapi({
      description: 'SDK will deserialize this and provide it as arguments to the workflow function',
    }),
    workflowExecutionTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description: 'Total workflow execution timeout including retries and continue as new.',
      }),
    workflowRunTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({ description: 'Timeout of a single workflow run.' }),
    workflowTaskTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({ description: 'Timeout of a single workflow task.' }),
    continuedExecutionRunId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Run id of the previous workflow which continued-as-new or retried or cron executed into this\n workflow.',
      }),
    initiator: z
      .enum([
        'CONTINUE_AS_NEW_INITIATOR_UNSPECIFIED',
        'CONTINUE_AS_NEW_INITIATOR_WORKFLOW',
        'CONTINUE_AS_NEW_INITIATOR_RETRY',
        'CONTINUE_AS_NEW_INITIATOR_CRON_SCHEDULE',
      ])
      .exactOptional(),
    continuedFailure: FailureSchema.exactOptional(),
    lastCompletionResult: PayloadsSchema.exactOptional(),
    originalExecutionRunId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This is the run id when the WorkflowExecutionStarted event was written.\n A workflow reset changes the execution run_id, but preserves this field.',
      }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identity of the client who requested this execution' }),
    firstExecutionRunId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This is the very first runId along the chain of ContinueAsNew, Retry, Cron and Reset.\n Used to identify a chain.',
      }),
    retryPolicy: RetryPolicySchema.exactOptional(),
    attempt: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Starting at 1, the number of times we have tried to execute this workflow',
      }),
    workflowExecutionExpirationTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The absolute time at which the workflow will be timed out.\n This is passed without change to the next run/retry of a workflow.',
      }),
    cronSchedule: z
      .string()
      .exactOptional()
      .openapi({ description: 'If this workflow runs on a cron schedule, it will appear here' }),
    firstWorkflowTaskBackoff: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'For a cron workflow, this contains the amount of time between when this iteration of\n the cron workflow was scheduled and when it should run next per its cron_schedule.',
      }),
    memo: MemoSchema.exactOptional(),
    searchAttributes: SearchAttributesSchema.exactOptional(),
    prevAutoResetPoints: ResetPointsSchema.exactOptional(),
    header: HeaderSchema.exactOptional(),
    parentInitiatedEventVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Version of the child execution initiated event in parent workflow\n It should be used together with parent_initiated_event_id to identify\n a child initiated event for global namespace',
      }),
    workflowId: z.string().exactOptional().openapi({ description: 'This field is new in 1.21.' }),
    sourceVersionStamp: WorkerVersionStampSchema.exactOptional().openapi({
      description:
        'If this workflow intends to use anything other than the current overall default version for\n the queue, then we include it here.\n Deprecated. [cleanup-experimental-wv]',
    }),
    completionCallbacks: z
      .array(CallbackSchema)
      .exactOptional()
      .openapi({ description: 'Completion callbacks attached when this workflow was started.' }),
    rootWorkflowExecution: WorkflowExecutionSchema.exactOptional().openapi({
      description:
        'Contains information about the root workflow execution.\n The root workflow execution is defined as follows:\n   1. A workflow without parent workflow is its own root workflow.\n   2. A workflow that has a parent workflow has the same root workflow as its parent workflow.\n When the workflow is its own root workflow, then root_workflow_execution is nil.\n Note: workflows continued as new or reseted may or may not have parents, check examples below.\n\n Examples:\n   Scenario 1: Workflow W1 starts child workflow W2, and W2 starts child workflow W3.\n     - The root workflow of all three workflows is W1.\n     - W1 has root_workflow_execution set to nil.\n     - W2 and W3 have root_workflow_execution set to W1.\n   Scenario 2: Workflow W1 starts child workflow W2, and W2 continued as new W3.\n     - The root workflow of all three workflows is W1.\n     - W1 has root_workflow_execution set to nil.\n     - W2 and W3 have root_workflow_execution set to W1.\n   Scenario 3: Workflow W1 continued as new W2.\n     - The root workflow of W1 is W1 and the root workflow of W2 is W2.\n     - W1 and W2 have root_workflow_execution set to nil.\n   Scenario 4: Workflow W1 starts child workflow W2, and W2 is reseted, creating W3\n     - The root workflow of all three workflows is W1.\n     - W1 has root_workflow_execution set to nil.\n     - W2 and W3 have root_workflow_execution set to W1.\n   Scenario 5: Workflow W1 is reseted, creating W2.\n     - The root workflow of W1 is W1 and the root workflow of W2 is W2.\n     - W1 and W2 have root_workflow_execution set to nil.',
    }),
    inheritedBuildId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'When present, this execution is assigned to the build ID of its parent or previous execution.\n Deprecated. This field should be cleaned up when versioning-2 API is removed. [cleanup-experimental-wv]',
      }),
    versioningOverride: VersioningOverrideSchema.exactOptional().openapi({
      description:
        "Versioning override applied to this workflow when it was started.\n Children, crons, retries, and continue-as-new will inherit source run's override if pinned\n and if the new workflow's Task Queue belongs to the override version.",
    }),
    parentPinnedWorkerDeploymentVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'When present, it means this is a child workflow of a parent that is Pinned to this Worker\n Deployment Version. In this case, child workflow will start as Pinned to this Version instead\n of starting on the Current Version of its Task Queue.\n This is set only if the child workflow is starting on a Task Queue belonging to the same\n Worker Deployment Version.\n Deprecated. Use `parent_versioning_info`.',
      }),
    priority: PrioritySchema.exactOptional().openapi({ description: 'Priority metadata' }),
    inheritedPinnedVersion: WorkerDeploymentVersionSchema.exactOptional().openapi({
      description:
        "If present, the new workflow should start on this version with pinned base behavior.\n Child of pinned parent will inherit the parent's version if the Child's Task Queue belongs to that version.\n\n A new run initiated by workflow ContinueAsNew of pinned run, will inherit the previous run's version if the\n new run's Task Queue belongs to that version.\n\n A new run initiated by workflow Cron will never inherit.\n\n A new run initiated by workflow Retry will only inherit if the retried run is effectively pinned at the time\n of retry, and the retried run inherited a pinned version when it started (ie. it is a child of a pinned\n parent, or a CaN of a pinned run, and is running on a Task Queue in the inherited version).\n\n Pinned override is inherited if Task Queue of new run is compatible with the override version.\n Override is inherited separately and takes precedence over inherited base version.\n\n Note: This field is mutually exclusive with inherited_auto_upgrade_info.\n Additionaly, versioning_override, if present, overrides this field during routing decisions.",
    }),
    inheritedAutoUpgradeInfo: InheritedAutoUpgradeInfoSchema.exactOptional().openapi({
      description:
        "If present, the new workflow begins with AutoUpgrade behavior. Before dispatching the\n first workflow task, this field is set to the deployment version on which the parent/\n previous run was operating. This inheritance only happens when the task queues belong to\n the same deployment version. The first workflow task will then be dispatched to either\n this inherited deployment version, or the current deployment version of the task queue's\n Deployment. After the first workflow task, the effective behavior depends on worker-sent\n values in subsequent workflow tasks.\n\n Inheritance rules:\n   - ContinueAsNew and child workflows: inherit AutoUpgrade behavior and deployment version\n   - Cron: never inherits\n   - Retry: inherits only if the retried run is effectively AutoUpgrade at the time of\n     retry, and inherited AutoUpgrade behavior when it started (i.e. it is a child of an\n     AutoUpgrade parent or ContinueAsNew of an AutoUpgrade run, running on the same\n     deployment as the parent/previous run)\n\n Additional notes:\n - This field is mutually exclusive with `inherited_pinned_version`.\n - `versioning_override`, if present, overrides this field during routing decisions.\n - SDK implementations do not interact with this field and is only used internally by\n   the server to ensure task routing correctness.",
    }),
    eagerExecutionAccepted: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A boolean indicating whether the SDK has asked to eagerly execute the first workflow task for this workflow and\n eager execution was accepted by the server.\n Only populated by server with version >= 1.29.0.',
      }),
    declinedTargetVersionUpgrade: DeclinedTargetVersionUpgradeSchema.exactOptional().openapi({
      description:
        'During a previous run of this workflow, the server may have notified the SDK\n that the Target Worker Deployment Version changed, but the SDK declined to\n upgrade (e.g., by continuing-as-new with PINNED behavior). This field records\n the target version that was declined.\n\n This is a wrapper message to distinguish "never declined" (nil wrapper) from\n "declined an unversioned target" (non-nil wrapper with nil deployment_version).\n\n Used internally by the server during continue-as-new and retry.\n Should not be read or interpreted by SDKs.',
    }),
    timeSkippingConfig: TimeSkippingConfigSchema.exactOptional().openapi({
      description:
        'Initial time-skipping configuration for this workflow execution, recorded at start time.\n This may have been set explicitly via the start workflow request, or propagated from a\n parent/previous execution.\n\n The configuration may be updated after start via UpdateWorkflowExecutionOptions, which\n will be reflected in the WorkflowExecutionOptionsUpdatedEvent.',
    }),
    initialSkippedDuration: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'The time skipped by the previous execution that started this workflow.\n It can happen in cases of child workflows and continue-as-new workflows.',
      }),
  })
  .openapi({ description: 'Always the first event in workflow history', required: [] })
  .openapi('WorkflowExecutionStartedEventAttributes')

const WorkflowExecutionCompletedEventAttributesSchema = z
  .object({
    result: PayloadsSchema.exactOptional().openapi({
      description:
        'Serialized result of workflow completion (ie: The return value of the workflow function)',
    }),
    workflowTaskCompletedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The `WORKFLOW_TASK_COMPLETED` event which this command was reported with',
      }),
    newExecutionRunId: z
      .string()
      .exactOptional()
      .openapi({ description: 'If another run is started by cron, this contains the new run id.' }),
  })
  .openapi({ required: [] })
  .openapi('WorkflowExecutionCompletedEventAttributes')

const WorkflowExecutionFailedEventAttributesSchema = z
  .object({
    failure: FailureSchema.exactOptional().openapi({
      description:
        'Serialized result of workflow failure (ex: An exception thrown, or error returned)',
    }),
    retryState: z
      .enum([
        'RETRY_STATE_UNSPECIFIED',
        'RETRY_STATE_IN_PROGRESS',
        'RETRY_STATE_NON_RETRYABLE_FAILURE',
        'RETRY_STATE_TIMEOUT',
        'RETRY_STATE_MAXIMUM_ATTEMPTS_REACHED',
        'RETRY_STATE_RETRY_POLICY_NOT_SET',
        'RETRY_STATE_INTERNAL_SERVER_ERROR',
        'RETRY_STATE_CANCEL_REQUESTED',
      ])
      .exactOptional(),
    workflowTaskCompletedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The `WORKFLOW_TASK_COMPLETED` event which this command was reported with',
      }),
    newExecutionRunId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If another run is started by cron or retry, this contains the new run id.',
      }),
  })
  .openapi({ required: [] })
  .openapi('WorkflowExecutionFailedEventAttributes')

const WorkflowExecutionTimedOutEventAttributesSchema = z
  .object({
    retryState: z
      .enum([
        'RETRY_STATE_UNSPECIFIED',
        'RETRY_STATE_IN_PROGRESS',
        'RETRY_STATE_NON_RETRYABLE_FAILURE',
        'RETRY_STATE_TIMEOUT',
        'RETRY_STATE_MAXIMUM_ATTEMPTS_REACHED',
        'RETRY_STATE_RETRY_POLICY_NOT_SET',
        'RETRY_STATE_INTERNAL_SERVER_ERROR',
        'RETRY_STATE_CANCEL_REQUESTED',
      ])
      .exactOptional(),
    newExecutionRunId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If another run is started by cron or retry, this contains the new run id.',
      }),
  })
  .openapi({ required: [] })
  .openapi('WorkflowExecutionTimedOutEventAttributes')

const WorkflowTaskScheduledEventAttributesSchema = z
  .object({
    taskQueue: TaskQueueSchema.exactOptional().openapi({
      description:
        'The task queue this workflow task was enqueued in, which could be a normal or sticky queue',
    }),
    startToCloseTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'How long the worker has to process this task once receiving it before it times out\n\n (-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: "to" is used to indicate interval. --)',
      }),
    attempt: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Starting at 1, how many attempts there have been to complete this task',
      }),
  })
  .openapi({ required: [] })
  .openapi('WorkflowTaskScheduledEventAttributes')

const WorkflowTaskStartedEventAttributesSchema = z
  .object({
    scheduledEventId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The id of the `WORKFLOW_TASK_SCHEDULED` event this task corresponds to',
      }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identity of the worker who picked up this task' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "This field is populated from the RecordWorkflowTaskStartedRequest. Matching service would\n set the request_id on the RecordWorkflowTaskStartedRequest to a new UUID. This is useful\n in case a RecordWorkflowTaskStarted call succeed but matching doesn't get that response,\n so matching could retry and history service would return success if the request_id matches.\n In that case, matching will continue to deliver the task to worker. Without this field, history\n service would return AlreadyStarted error, and matching would drop the task.",
      }),
    suggestContinueAsNew: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if this workflow should continue-as-new soon. See `suggest_continue_as_new_reasons` for why.',
      }),
    suggestContinueAsNewReasons: z
      .array(
        z.enum([
          'SUGGEST_CONTINUE_AS_NEW_REASON_UNSPECIFIED',
          'SUGGEST_CONTINUE_AS_NEW_REASON_HISTORY_SIZE_TOO_LARGE',
          'SUGGEST_CONTINUE_AS_NEW_REASON_TOO_MANY_HISTORY_EVENTS',
          'SUGGEST_CONTINUE_AS_NEW_REASON_TOO_MANY_UPDATES',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'The reason(s) that suggest_continue_as_new is true, if it is.\n Unset if suggest_continue_as_new is false.',
      }),
    targetWorkerDeploymentVersionChanged: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "True if Workflow's Target Worker Deployment Version is different from its Pinned Version and\n the workflow is Pinned.\n Experimental.",
      }),
    historySizeBytes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Total history size in bytes, which the workflow might use to decide when to\n continue-as-new regardless of the suggestion. Note that history event count is\n just the event id of this event, so we don't include it explicitly here.",
      }),
    workerVersion: WorkerVersionStampSchema.exactOptional().openapi({
      description:
        'Version info of the worker to whom this task was dispatched.\n Deprecated. This field should be cleaned up when versioning-2 API is removed. [cleanup-experimental-wv]',
    }),
    buildIdRedirectCounter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Used by server internally to properly reapply build ID redirects to an execution\n when rebuilding it from events.\n Deprecated. This field should be cleaned up when versioning-2 API is removed. [cleanup-experimental-wv]',
      }),
  })
  .openapi({ required: [] })
  .openapi('WorkflowTaskStartedEventAttributes')

const WorkflowTaskCompletedMetadataSchema = z
  .object({
    coreUsedFlags: z
      .array(z.uint32())
      .exactOptional()
      .openapi({
        description:
          "Internal flags used by the core SDK. SDKs using flags must comply with the following behavior:\n\n During replay:\n * If a flag is not recognized (value is too high or not defined), it must fail the workflow\n   task.\n * If a flag is recognized, it is stored in a set of used flags for the run. Code checks for\n   that flag during and after this WFT are allowed to assume that the flag is present.\n * If a code check for a flag does not find the flag in the set of used flags, it must take\n   the branch corresponding to the absence of that flag.\n\n During non-replay execution of new WFTs:\n * The SDK is free to use all flags it knows about. It must record any newly-used (IE: not\n   previously recorded) flags when completing the WFT.\n\n SDKs which are too old to even know about this field at all are considered to produce\n undefined behavior if they replay workflows which used this mechanism.\n\n (-- api-linter: core::0141::forbidden-types=disabled\n     aip.dev/not-precedent: These really shouldn't have negative values. --)",
      }),
    langUsedFlags: z
      .array(z.uint32())
      .exactOptional()
      .openapi({
        description:
          "Flags used by the SDK lang. No attempt is made to distinguish between different SDK languages\n here as processing a workflow with a different language than the one which authored it is\n already undefined behavior. See `core_used_patches` for more.\n\n (-- api-linter: core::0141::forbidden-types=disabled\n     aip.dev/not-precedent: These really shouldn't have negative values. --)",
      }),
    sdkName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the SDK that processed the task. This is usually something like "temporal-go" and is\n usually the same as client-name gRPC header. This should only be set if its value changed\n since the last time recorded on the workflow (or be set on the first task).\n\n (-- api-linter: core::0122::name-suffix=disabled\n     aip.dev/not-precedent: We\'re ok with a name suffix here. --)',
      }),
    sdkVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Version of the SDK that processed the task. This is usually something like "1.20.0" and is\n usually the same as client-version gRPC header. This should only be set if its value changed\n since the last time recorded on the workflow (or be set on the first task).',
      }),
  })
  .openapi({ required: [] })
  .openapi('WorkflowTaskCompletedMetadata')

const MeteringMetadataSchema = z
  .object({
    nonfirstLocalActivityExecutionAttempts: z
      .uint32()
      .exactOptional()
      .openapi({
        description:
          'Count of local activities which have begun an execution attempt during this workflow task,\n and whose first attempt occurred in some previous task. This is used for metering\n purposes, and does not affect workflow state.\n\n (-- api-linter: core::0141::forbidden-types=disabled\n     aip.dev/not-precedent: Negative values make no sense to represent. --)',
      }),
  })
  .openapi({ description: 'Metadata relevant for metering purposes', required: [] })
  .openapi('MeteringMetadata')

const WorkflowTaskCompletedEventAttributesSchema = z
  .object({
    scheduledEventId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The id of the `WORKFLOW_TASK_SCHEDULED` event this task corresponds to',
      }),
    startedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The id of the `WORKFLOW_TASK_STARTED` event this task corresponds to',
      }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identity of the worker who completed this task' }),
    binaryChecksum: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Binary ID of the worker who completed this task\n Deprecated. Replaced with `deployment_version`.',
      }),
    workerVersion: WorkerVersionStampSchema.exactOptional().openapi({
      description:
        'Version info of the worker who processed this workflow task. If present, the `build_id` field\n within is also used as `binary_checksum`, which may be omitted in that case (it may also be\n populated to preserve compatibility).\n Deprecated. Use `deployment_version` and `versioning_behavior` instead.',
    }),
    sdkMetadata: WorkflowTaskCompletedMetadataSchema.exactOptional().openapi({
      description:
        'Data the SDK wishes to record for itself, but server need not interpret, and does not\n directly impact workflow state.',
    }),
    meteringMetadata: MeteringMetadataSchema.exactOptional().openapi({
      description:
        'Local usage data sent during workflow task completion and recorded here for posterity',
    }),
    deployment: DeploymentSchema.exactOptional().openapi({
      description:
        "The deployment that completed this task. May or may not be set for unversioned workers,\n depending on whether a value is sent by the SDK. This value updates workflow execution's\n `versioning_info.deployment`.\n Deprecated. Replaced with `deployment_version`.",
    }),
    versioningBehavior: z
      .enum([
        'VERSIONING_BEHAVIOR_UNSPECIFIED',
        'VERSIONING_BEHAVIOR_PINNED',
        'VERSIONING_BEHAVIOR_AUTO_UPGRADE',
      ])
      .exactOptional()
      .openapi({
        description:
          "Versioning behavior sent by the worker that completed this task for this particular workflow\n execution. UNSPECIFIED means the task was completed by an unversioned worker. This value\n updates workflow execution's `versioning_info.behavior`.",
      }),
    workerDeploymentVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The Worker Deployment Version that completed this task. Must be set if `versioning_behavior`\n is set. This value updates workflow execution's `versioning_info.version`.\n Deprecated. Replaced with `deployment_version`.",
      }),
    workerDeploymentName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The name of Worker Deployment that completed this task. Must be set if `versioning_behavior`\n is set. This value updates workflow execution's `worker_deployment_name`.",
      }),
    deploymentVersion: WorkerDeploymentVersionSchema.exactOptional().openapi({
      description:
        "The Worker Deployment Version that completed this task. Must be set if `versioning_behavior`\n is set. This value updates workflow execution's `versioning_info.deployment_version`.",
    }),
  })
  .openapi({ required: [] })
  .openapi('WorkflowTaskCompletedEventAttributes')

const WorkflowTaskTimedOutEventAttributesSchema = z
  .object({
    scheduledEventId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The id of the `WORKFLOW_TASK_SCHEDULED` event this task corresponds to',
      }),
    startedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The id of the `WORKFLOW_TASK_STARTED` event this task corresponds to',
      }),
    timeoutType: z
      .enum([
        'TIMEOUT_TYPE_UNSPECIFIED',
        'TIMEOUT_TYPE_START_TO_CLOSE',
        'TIMEOUT_TYPE_SCHEDULE_TO_START',
        'TIMEOUT_TYPE_SCHEDULE_TO_CLOSE',
        'TIMEOUT_TYPE_HEARTBEAT',
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WorkflowTaskTimedOutEventAttributes')

const WorkflowTaskFailedEventAttributesSchema = z
  .object({
    scheduledEventId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The id of the `WORKFLOW_TASK_SCHEDULED` event this task corresponds to',
      }),
    startedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The id of the `WORKFLOW_TASK_STARTED` event this task corresponds to',
      }),
    cause: z
      .enum([
        'WORKFLOW_TASK_FAILED_CAUSE_UNSPECIFIED',
        'WORKFLOW_TASK_FAILED_CAUSE_UNHANDLED_COMMAND',
        'WORKFLOW_TASK_FAILED_CAUSE_BAD_SCHEDULE_ACTIVITY_ATTRIBUTES',
        'WORKFLOW_TASK_FAILED_CAUSE_BAD_REQUEST_CANCEL_ACTIVITY_ATTRIBUTES',
        'WORKFLOW_TASK_FAILED_CAUSE_BAD_START_TIMER_ATTRIBUTES',
        'WORKFLOW_TASK_FAILED_CAUSE_BAD_CANCEL_TIMER_ATTRIBUTES',
        'WORKFLOW_TASK_FAILED_CAUSE_BAD_RECORD_MARKER_ATTRIBUTES',
        'WORKFLOW_TASK_FAILED_CAUSE_BAD_COMPLETE_WORKFLOW_EXECUTION_ATTRIBUTES',
        'WORKFLOW_TASK_FAILED_CAUSE_BAD_FAIL_WORKFLOW_EXECUTION_ATTRIBUTES',
        'WORKFLOW_TASK_FAILED_CAUSE_BAD_CANCEL_WORKFLOW_EXECUTION_ATTRIBUTES',
        'WORKFLOW_TASK_FAILED_CAUSE_BAD_REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_ATTRIBUTES',
        'WORKFLOW_TASK_FAILED_CAUSE_BAD_CONTINUE_AS_NEW_ATTRIBUTES',
        'WORKFLOW_TASK_FAILED_CAUSE_START_TIMER_DUPLICATE_ID',
        'WORKFLOW_TASK_FAILED_CAUSE_RESET_STICKY_TASK_QUEUE',
        'WORKFLOW_TASK_FAILED_CAUSE_WORKFLOW_WORKER_UNHANDLED_FAILURE',
        'WORKFLOW_TASK_FAILED_CAUSE_BAD_SIGNAL_WORKFLOW_EXECUTION_ATTRIBUTES',
        'WORKFLOW_TASK_FAILED_CAUSE_BAD_START_CHILD_EXECUTION_ATTRIBUTES',
        'WORKFLOW_TASK_FAILED_CAUSE_FORCE_CLOSE_COMMAND',
        'WORKFLOW_TASK_FAILED_CAUSE_FAILOVER_CLOSE_COMMAND',
        'WORKFLOW_TASK_FAILED_CAUSE_BAD_SIGNAL_INPUT_SIZE',
        'WORKFLOW_TASK_FAILED_CAUSE_RESET_WORKFLOW',
        'WORKFLOW_TASK_FAILED_CAUSE_BAD_BINARY',
        'WORKFLOW_TASK_FAILED_CAUSE_SCHEDULE_ACTIVITY_DUPLICATE_ID',
        'WORKFLOW_TASK_FAILED_CAUSE_BAD_SEARCH_ATTRIBUTES',
        'WORKFLOW_TASK_FAILED_CAUSE_NON_DETERMINISTIC_ERROR',
        'WORKFLOW_TASK_FAILED_CAUSE_BAD_MODIFY_WORKFLOW_PROPERTIES_ATTRIBUTES',
        'WORKFLOW_TASK_FAILED_CAUSE_PENDING_CHILD_WORKFLOWS_LIMIT_EXCEEDED',
        'WORKFLOW_TASK_FAILED_CAUSE_PENDING_ACTIVITIES_LIMIT_EXCEEDED',
        'WORKFLOW_TASK_FAILED_CAUSE_PENDING_SIGNALS_LIMIT_EXCEEDED',
        'WORKFLOW_TASK_FAILED_CAUSE_PENDING_REQUEST_CANCEL_LIMIT_EXCEEDED',
        'WORKFLOW_TASK_FAILED_CAUSE_BAD_UPDATE_WORKFLOW_EXECUTION_MESSAGE',
        'WORKFLOW_TASK_FAILED_CAUSE_UNHANDLED_UPDATE',
        'WORKFLOW_TASK_FAILED_CAUSE_BAD_SCHEDULE_NEXUS_OPERATION_ATTRIBUTES',
        'WORKFLOW_TASK_FAILED_CAUSE_PENDING_NEXUS_OPERATIONS_LIMIT_EXCEEDED',
        'WORKFLOW_TASK_FAILED_CAUSE_BAD_REQUEST_CANCEL_NEXUS_OPERATION_ATTRIBUTES',
        'WORKFLOW_TASK_FAILED_CAUSE_FEATURE_DISABLED',
        'WORKFLOW_TASK_FAILED_CAUSE_GRPC_MESSAGE_TOO_LARGE',
        'WORKFLOW_TASK_FAILED_CAUSE_PAYLOADS_TOO_LARGE',
      ])
      .exactOptional(),
    failure: FailureSchema.exactOptional().openapi({ description: 'The failure details' }),
    identity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "If a worker explicitly failed this task, this field contains the worker's identity.\n When the server generates the failure internally this field is set as 'history-service'.",
      }),
    baseRunId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The original run id of the workflow. For reset workflow.' }),
    newRunId: z
      .string()
      .exactOptional()
      .openapi({ description: 'If the workflow is being reset, the new run id.' }),
    forkEventVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Version of the event where the history branch was forked. Used by multi-cluster replication\n during resets to identify the correct history branch.',
      }),
    binaryChecksum: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Deprecated. This field should be cleaned up when versioning-2 API is removed. [cleanup-experimental-wv]\n If a worker explicitly failed this task, its binary id',
      }),
    workerVersion: WorkerVersionStampSchema.exactOptional().openapi({
      description:
        'Version info of the worker who processed this workflow task. If present, the `build_id` field\n within is also used as `binary_checksum`, which may be omitted in that case (it may also be\n populated to preserve compatibility).\n Deprecated. This field should be cleaned up when versioning-2 API is removed. [cleanup-experimental-wv]',
    }),
  })
  .openapi({ required: [] })
  .openapi('WorkflowTaskFailedEventAttributes')

const TimerStartedEventAttributesSchema = z
  .object({
    timerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The worker/user assigned id for this timer' }),
    startToFireTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'How long until this timer fires\n\n (-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: "to" is used to indicate interval. --)',
      }),
    workflowTaskCompletedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The `WORKFLOW_TASK_COMPLETED` event which this command was reported with',
      }),
  })
  .openapi({ required: [] })
  .openapi('TimerStartedEventAttributes')

const TimerFiredEventAttributesSchema = z
  .object({
    timerId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Will match the `timer_id` from `TIMER_STARTED` event for this timer',
      }),
    startedEventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the `TIMER_STARTED` event itself' }),
  })
  .openapi({ required: [] })
  .openapi('TimerFiredEventAttributes')

const TimerCanceledEventAttributesSchema = z
  .object({
    timerId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Will match the `timer_id` from `TIMER_STARTED` event for this timer',
      }),
    startedEventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the `TIMER_STARTED` event itself' }),
    workflowTaskCompletedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The `WORKFLOW_TASK_COMPLETED` event which this command was reported with',
      }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the worker who requested this cancel' }),
  })
  .openapi({ required: [] })
  .openapi('TimerCanceledEventAttributes')

const MarkerRecordedEventAttributesSchema = z
  .object({
    markerName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Workers use this to identify the "types" of various markers. Ex: Local activity, side effect.',
      }),
    details: z
      .record(z.string(), PayloadsSchema)
      .exactOptional()
      .openapi({ description: 'Serialized information recorded in the marker' }),
    workflowTaskCompletedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The `WORKFLOW_TASK_COMPLETED` event which this command was reported with',
      }),
    header: HeaderSchema.exactOptional(),
    failure: FailureSchema.exactOptional().openapi({
      description:
        'Some uses of markers, like a local activity, could "fail". If they did that is recorded here.',
    }),
  })
  .openapi({ required: [] })
  .openapi('MarkerRecordedEventAttributes')

const WorkflowExecutionSignaledEventAttributesSchema = z
  .object({
    signalName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name/type of the signal to fire' }),
    input: PayloadsSchema.exactOptional().openapi({
      description: 'Will be deserialized and provided as argument(s) to the signal handler',
    }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'id of the worker/client who sent this signal' }),
    header: HeaderSchema.exactOptional().openapi({
      description:
        'Headers that were passed by the sender of the signal and copied by temporal\n server into the workflow task.',
    }),
    skipGenerateWorkflowTask: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Deprecated. This field is never respected and should always be set to false.',
      }),
    externalWorkflowExecution: WorkflowExecutionSchema.exactOptional().openapi({
      description: 'When signal origin is a workflow execution, this field is set.',
    }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The request ID of the Signal request, used by the server to attach this to\n the correct Event ID when generating link.',
      }),
  })
  .openapi({ required: [] })
  .openapi('WorkflowExecutionSignaledEventAttributes')

const WorkflowExecutionTerminatedEventAttributesSchema = z
  .object({
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'User/client provided reason for termination' }),
    details: PayloadsSchema.exactOptional(),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'id of the client who requested termination' }),
  })
  .openapi({ required: [] })
  .openapi('WorkflowExecutionTerminatedEventAttributes')

const WorkflowExecutionCancelRequestedEventAttributesSchema = z
  .object({
    cause: z
      .string()
      .exactOptional()
      .openapi({ description: 'User provided reason for requesting cancellation' }),
    externalInitiatedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the `REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_INITIATED` event in the external\n workflow history when the cancellation was requested by another workflow.',
      }),
    externalWorkflowExecution: WorkflowExecutionSchema.exactOptional(),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'id of the worker or client who requested this cancel' }),
  })
  .openapi({ required: [] })
  .openapi('WorkflowExecutionCancelRequestedEventAttributes')

const WorkflowExecutionCanceledEventAttributesSchema = z
  .object({
    workflowTaskCompletedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The `WORKFLOW_TASK_COMPLETED` event which this command was reported with',
      }),
    details: PayloadsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WorkflowExecutionCanceledEventAttributes')

const RequestCancelExternalWorkflowExecutionInitiatedEventAttributesSchema = z
  .object({
    workflowTaskCompletedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The `WORKFLOW_TASK_COMPLETED` event which this command was reported with',
      }),
    namespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The namespace the workflow to be cancelled lives in.\n SDKs and UI tools should use `namespace` field but server must use `namespace_id` only.',
      }),
    namespaceId: z.string().exactOptional(),
    workflowExecution: WorkflowExecutionSchema.exactOptional(),
    control: z.string().exactOptional().openapi({ description: 'Deprecated.' }),
    childWorkflowOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Workers are expected to set this to true if the workflow they are requesting to cancel is\n a child of the workflow which issued the request',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'Reason for requesting the cancellation' }),
  })
  .openapi({ required: [] })
  .openapi('RequestCancelExternalWorkflowExecutionInitiatedEventAttributes')

const RequestCancelExternalWorkflowExecutionFailedEventAttributesSchema = z
  .object({
    cause: z
      .enum([
        'CANCEL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_UNSPECIFIED',
        'CANCEL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_EXTERNAL_WORKFLOW_EXECUTION_NOT_FOUND',
        'CANCEL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_NAMESPACE_NOT_FOUND',
      ])
      .exactOptional(),
    workflowTaskCompletedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The `WORKFLOW_TASK_COMPLETED` event which this command was reported with',
      }),
    namespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Namespace of the workflow which failed to cancel.\n SDKs and UI tools should use `namespace` field but server must use `namespace_id` only.',
      }),
    namespaceId: z.string().exactOptional(),
    workflowExecution: WorkflowExecutionSchema.exactOptional(),
    initiatedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'id of the `REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_INITIATED` event this failure\n corresponds to',
      }),
    control: z.string().exactOptional().openapi({ description: 'Deprecated.' }),
  })
  .openapi({ required: [] })
  .openapi('RequestCancelExternalWorkflowExecutionFailedEventAttributes')

const WorkflowExecutionContinuedAsNewEventAttributesSchema = z
  .object({
    newExecutionRunId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The run ID of the new workflow started by this continue-as-new' }),
    workflowType: WorkflowTypeSchema.exactOptional(),
    taskQueue: TaskQueueSchema.exactOptional(),
    input: PayloadsSchema.exactOptional(),
    workflowRunTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({ description: 'Timeout of a single workflow run.' }),
    workflowTaskTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({ description: 'Timeout of a single workflow task.' }),
    workflowTaskCompletedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The `WORKFLOW_TASK_COMPLETED` event which this command was reported with',
      }),
    backoffStartInterval: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'How long the server will wait before scheduling the first workflow task for the new run.\n Used for cron, retry, and other continue-as-new cases that server may enforce some minimal\n delay between new runs for system protection purpose.',
      }),
    initiator: z
      .enum([
        'CONTINUE_AS_NEW_INITIATOR_UNSPECIFIED',
        'CONTINUE_AS_NEW_INITIATOR_WORKFLOW',
        'CONTINUE_AS_NEW_INITIATOR_RETRY',
        'CONTINUE_AS_NEW_INITIATOR_CRON_SCHEDULE',
      ])
      .exactOptional(),
    failure: FailureSchema.exactOptional().openapi({
      description:
        "Deprecated. If a workflow's retry policy would cause a new run to start when the current one\n has failed, this field would be populated with that failure. Now (when supported by server\n and sdk) the final event will be `WORKFLOW_EXECUTION_FAILED` with `new_execution_run_id` set.",
    }),
    lastCompletionResult: PayloadsSchema.exactOptional().openapi({
      description:
        'The result from the most recent completed run of this workflow. The SDK surfaces this to the\n new run via APIs such as `GetLastCompletionResult`.',
    }),
    header: HeaderSchema.exactOptional(),
    memo: MemoSchema.exactOptional(),
    searchAttributes: SearchAttributesSchema.exactOptional(),
    inheritBuildId: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If this is set, the new execution inherits the Build ID of the current execution. Otherwise,\n the assignment rules will be used to independently assign a Build ID to the new execution.\n Deprecated. Only considered for versioning v0.2.',
      }),
    initialVersioningBehavior: z
      .enum([
        'CONTINUE_AS_NEW_VERSIONING_BEHAVIOR_UNSPECIFIED',
        'CONTINUE_AS_NEW_VERSIONING_BEHAVIOR_AUTO_UPGRADE',
        'CONTINUE_AS_NEW_VERSIONING_BEHAVIOR_USE_RAMPING_VERSION',
      ])
      .exactOptional()
      .openapi({
        description:
          'Experimental. Optionally decide the versioning behavior that the first task of the new run should use.\n For example, choose to AutoUpgrade on continue-as-new instead of inheriting the pinned version\n of the previous run.',
      }),
  })
  .openapi({ required: [] })
  .openapi('WorkflowExecutionContinuedAsNewEventAttributes')

const StartChildWorkflowExecutionInitiatedEventAttributesSchema = z
  .object({
    namespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Namespace of the child workflow.\n SDKs and UI tools should use `namespace` field but server must use `namespace_id` only.',
      }),
    namespaceId: z.string().exactOptional(),
    workflowId: z.string().exactOptional(),
    workflowType: WorkflowTypeSchema.exactOptional(),
    taskQueue: TaskQueueSchema.exactOptional(),
    input: PayloadsSchema.exactOptional(),
    workflowExecutionTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description: 'Total workflow execution timeout including retries and continue as new.',
      }),
    workflowRunTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({ description: 'Timeout of a single workflow run.' }),
    workflowTaskTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({ description: 'Timeout of a single workflow task.' }),
    parentClosePolicy: z
      .enum([
        'PARENT_CLOSE_POLICY_UNSPECIFIED',
        'PARENT_CLOSE_POLICY_TERMINATE',
        'PARENT_CLOSE_POLICY_ABANDON',
        'PARENT_CLOSE_POLICY_REQUEST_CANCEL',
      ])
      .exactOptional()
      .openapi({ description: 'Default: PARENT_CLOSE_POLICY_TERMINATE.' }),
    control: z.string().exactOptional().openapi({ description: 'Deprecated.' }),
    workflowTaskCompletedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The `WORKFLOW_TASK_COMPLETED` event which this command was reported with',
      }),
    workflowIdReusePolicy: z
      .enum([
        'WORKFLOW_ID_REUSE_POLICY_UNSPECIFIED',
        'WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE',
        'WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE_FAILED_ONLY',
        'WORKFLOW_ID_REUSE_POLICY_REJECT_DUPLICATE',
        'WORKFLOW_ID_REUSE_POLICY_TERMINATE_IF_RUNNING',
      ])
      .exactOptional()
      .openapi({ description: 'Default: WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE.' }),
    retryPolicy: RetryPolicySchema.exactOptional(),
    cronSchedule: z
      .string()
      .exactOptional()
      .openapi({ description: 'If this child runs on a cron schedule, it will appear here' }),
    header: HeaderSchema.exactOptional(),
    memo: MemoSchema.exactOptional(),
    searchAttributes: SearchAttributesSchema.exactOptional(),
    inheritBuildId: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If this is set, the child workflow inherits the Build ID of the parent. Otherwise, the assignment\n rules of the child's Task Queue will be used to independently assign a Build ID to it.\n Deprecated. Only considered for versioning v0.2.",
      }),
    priority: PrioritySchema.exactOptional().openapi({ description: 'Priority metadata' }),
    timeSkippingConfig: TimeSkippingConfigSchema.exactOptional().openapi({
      description: 'The propagated time-skipping configuration for the child workflow.',
    }),
    initialSkippedDuration: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({ description: 'Propagate the duration skipped to the child workflow.' }),
  })
  .openapi({ required: [] })
  .openapi('StartChildWorkflowExecutionInitiatedEventAttributes')

const StartChildWorkflowExecutionFailedEventAttributesSchema = z
  .object({
    namespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Namespace of the child workflow.\n SDKs and UI tools should use `namespace` field but server must use `namespace_id` only.',
      }),
    namespaceId: z.string().exactOptional(),
    workflowId: z.string().exactOptional(),
    workflowType: WorkflowTypeSchema.exactOptional(),
    cause: z
      .enum([
        'START_CHILD_WORKFLOW_EXECUTION_FAILED_CAUSE_UNSPECIFIED',
        'START_CHILD_WORKFLOW_EXECUTION_FAILED_CAUSE_WORKFLOW_ALREADY_EXISTS',
        'START_CHILD_WORKFLOW_EXECUTION_FAILED_CAUSE_NAMESPACE_NOT_FOUND',
      ])
      .exactOptional(),
    control: z.string().exactOptional().openapi({ description: 'Deprecated.' }),
    initiatedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the `START_CHILD_WORKFLOW_EXECUTION_INITIATED` event which this event corresponds to',
      }),
    workflowTaskCompletedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The `WORKFLOW_TASK_COMPLETED` event which this command was reported with',
      }),
  })
  .openapi({ required: [] })
  .openapi('StartChildWorkflowExecutionFailedEventAttributes')

const SignalExternalWorkflowExecutionInitiatedEventAttributesSchema = z
  .object({
    workflowTaskCompletedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The `WORKFLOW_TASK_COMPLETED` event which this command was reported with',
      }),
    namespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Namespace of the to-be-signalled workflow.\n SDKs and UI tools should use `namespace` field but server must use `namespace_id` only.',
      }),
    namespaceId: z.string().exactOptional(),
    workflowExecution: WorkflowExecutionSchema.exactOptional(),
    signalName: z
      .string()
      .exactOptional()
      .openapi({ description: 'name/type of the signal to fire in the external workflow' }),
    input: PayloadsSchema.exactOptional().openapi({
      description: 'Serialized arguments to provide to the signal handler',
    }),
    control: z.string().exactOptional().openapi({ description: 'Deprecated.' }),
    childWorkflowOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Workers are expected to set this to true if the workflow they are requesting to cancel is\n a child of the workflow which issued the request',
      }),
    header: HeaderSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SignalExternalWorkflowExecutionInitiatedEventAttributes')

const SignalExternalWorkflowExecutionFailedEventAttributesSchema = z
  .object({
    cause: z
      .enum([
        'SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_UNSPECIFIED',
        'SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_EXTERNAL_WORKFLOW_EXECUTION_NOT_FOUND',
        'SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_NAMESPACE_NOT_FOUND',
        'SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_SIGNAL_COUNT_LIMIT_EXCEEDED',
      ])
      .exactOptional(),
    workflowTaskCompletedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The `WORKFLOW_TASK_COMPLETED` event which this command was reported with',
      }),
    namespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Namespace of the workflow which failed the signal.\n SDKs and UI tools should use `namespace` field but server must use `namespace_id` only.',
      }),
    namespaceId: z.string().exactOptional(),
    workflowExecution: WorkflowExecutionSchema.exactOptional(),
    initiatedEventId: z.string().exactOptional(),
    control: z.string().exactOptional().openapi({ description: 'Deprecated.' }),
  })
  .openapi({ required: [] })
  .openapi('SignalExternalWorkflowExecutionFailedEventAttributes')

const UpsertWorkflowSearchAttributesEventAttributesSchema = z
  .object({
    workflowTaskCompletedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The `WORKFLOW_TASK_COMPLETED` event which this command was reported with',
      }),
    searchAttributes: SearchAttributesSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpsertWorkflowSearchAttributesEventAttributes')

const MetaSchema = z
  .object({
    updateId: z
      .string()
      .exactOptional()
      .openapi({ description: 'An ID with workflow-scoped uniqueness for this Update.' }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'A string identifying the agent that requested this Update.' }),
  })
  .openapi({ description: 'Metadata about a Workflow Update.', required: [] })
  .openapi('Meta')

const InputSchema = z
  .object({
    header: HeaderSchema.exactOptional().openapi({
      description:
        'Headers that are passed with the Update from the requesting entity.\n These can include things like auth or tracing tokens.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the Update handler to invoke on the target Workflow.' }),
    args: PayloadsSchema.exactOptional().openapi({
      description: 'The arguments to pass to the named Update handler.',
    }),
  })
  .openapi({ required: [] })
  .openapi('Input')

const RequestSchema = z
  .object({ meta: MetaSchema.exactOptional(), input: InputSchema.exactOptional() })
  .openapi({ description: 'The client request that triggers a Workflow Update.', required: [] })
  .openapi('Request')

const WorkflowExecutionUpdateAcceptedEventAttributesSchema = z
  .object({
    protocolInstanceId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The instance ID of the update protocol that generated this event.',
      }),
    acceptedRequestMessageId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The message ID of the original request message that initiated this\n update. Needed so that the worker can recreate and deliver that same\n message as part of replay.',
      }),
    acceptedRequestSequencingEventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The event ID used to sequence the original request message.' }),
    acceptedRequest: RequestSchema.exactOptional().openapi({
      description:
        'The message payload of the original request message that initiated this\n update.',
    }),
  })
  .openapi({ required: [] })
  .openapi('WorkflowExecutionUpdateAcceptedEventAttributes')

const WorkflowExecutionUpdateRejectedEventAttributesSchema = z
  .object({
    protocolInstanceId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The instance ID of the update protocol that generated this event.',
      }),
    rejectedRequestMessageId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The message ID of the original request message that initiated this\n update. Needed so that the worker can recreate and deliver that same\n message as part of replay.',
      }),
    rejectedRequestSequencingEventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The event ID used to sequence the original request message.' }),
    rejectedRequest: RequestSchema.exactOptional().openapi({
      description:
        'The message payload of the original request message that initiated this\n update.',
    }),
    failure: FailureSchema.exactOptional().openapi({ description: 'The cause of rejection.' }),
  })
  .openapi({ required: [] })
  .openapi('WorkflowExecutionUpdateRejectedEventAttributes')

const OutcomeSchema = z
  .object({ success: PayloadsSchema.exactOptional(), failure: FailureSchema.exactOptional() })
  .openapi({ description: 'The outcome of a Workflow Update: success or failure.', required: [] })
  .openapi('Outcome')

const WorkflowExecutionUpdateCompletedEventAttributesSchema = z
  .object({
    meta: MetaSchema.exactOptional().openapi({ description: 'The metadata about this update.' }),
    acceptedEventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The event ID indicating the acceptance of this update.' }),
    outcome: OutcomeSchema.exactOptional().openapi({
      description: 'The outcome of executing the workflow update function.',
    }),
  })
  .openapi({ required: [] })
  .openapi('WorkflowExecutionUpdateCompletedEventAttributes')

const WorkflowPropertiesModifiedExternallyEventAttributesSchema = z
  .object({
    newTaskQueue: z.string().exactOptional().openapi({ description: 'Not used.' }),
    newWorkflowTaskTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({ description: 'Not used.' }),
    newWorkflowRunTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({ description: 'Not used.' }),
    newWorkflowExecutionTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({ description: 'Not used.' }),
    upsertedMemo: MemoSchema.exactOptional().openapi({ description: 'Not used.' }),
  })
  .openapi({
    description:
      'Not used anywhere. Use case is replaced by WorkflowExecutionOptionsUpdatedEventAttributes',
    required: [],
  })
  .openapi('WorkflowPropertiesModifiedExternallyEventAttributes')

const WorkflowPropertiesModifiedEventAttributesSchema = z
  .object({
    workflowTaskCompletedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The `WORKFLOW_TASK_COMPLETED` event which this command was reported with',
      }),
    upsertedMemo: MemoSchema.exactOptional().openapi({
      description:
        'If set, update the workflow memo with the provided values. The values will be merged with\n the existing memo. If the user wants to delete values, a default/empty Payload should be\n used as the value for the key being deleted.',
    }),
  })
  .openapi({ required: [] })
  .openapi('WorkflowPropertiesModifiedEventAttributes')

const WorkflowExecutionUpdateAdmittedEventAttributesSchema = z
  .object({
    request: RequestSchema.exactOptional().openapi({
      description: 'The update request associated with this event.',
    }),
    origin: z
      .enum(['UPDATE_ADMITTED_EVENT_ORIGIN_UNSPECIFIED', 'UPDATE_ADMITTED_EVENT_ORIGIN_REAPPLY'])
      .exactOptional()
      .openapi({ description: 'An explanation of why this event was written to history.' }),
  })
  .openapi({ required: [] })
  .openapi('WorkflowExecutionUpdateAdmittedEventAttributes')

const NexusOperationScheduledEventAttributesSchema = z
  .object({
    endpoint: z
      .string()
      .exactOptional()
      .openapi({ description: 'Endpoint name, must exist in the endpoint registry.' }),
    service: z.string().exactOptional().openapi({ description: 'Service name.' }),
    operation: z.string().exactOptional().openapi({ description: 'Operation name.' }),
    input: PayloadSchema.exactOptional().openapi({
      description:
        'Input for the operation. The server converts this into Nexus request content and the appropriate content headers\n internally when sending the StartOperation request. On the handler side, if it is also backed by Temporal, the\n content is transformed back to the original Payload stored in this event.',
    }),
    scheduleToCloseTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'Schedule-to-close timeout for this operation.\n Indicates how long the caller is willing to wait for operation completion.\n Calls are retried internally by the server.\n (-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: "to" is used to indicate interval. --)\n (-- api-linter: core::0142::time-field-names=disabled\n     aip.dev/not-precedent: "timeout" is an acceptable suffix for duration fields in this API. --)',
      }),
    nexusHeader: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Header to attach to the Nexus request. Note these headers are not the same as Temporal headers on internal\n activities and child workflows, these are transmitted to Nexus operations that may be external and are not\n traditional payloads.',
      }),
    workflowTaskCompletedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `WORKFLOW_TASK_COMPLETED` event that the corresponding ScheduleNexusOperation command was reported with.',
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique ID generated by the history service upon creation of this event.\n The ID will be transmitted with all nexus StartOperation requests and is used as an idempotentency key.',
      }),
    endpointId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Endpoint ID as resolved in the endpoint registry at the time this event was generated.\n This is stored on the event and used internally by the server in case the endpoint is renamed from the time the\n event was originally scheduled.',
      }),
    scheduleToStartTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'Schedule-to-start timeout for this operation.\n See ScheduleNexusOperationCommandAttributes.schedule_to_start_timeout for details.\n (-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: "to" is used to indicate interval. --)',
      }),
    startToCloseTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'Start-to-close timeout for this operation.\n See ScheduleNexusOperationCommandAttributes.start_to_close_timeout for details.\n (-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: "to" is used to indicate interval. --)',
      }),
  })
  .openapi({
    description:
      'Event marking that an operation was scheduled by a workflow via the ScheduleNexusOperation command.',
    required: [],
  })
  .openapi('NexusOperationScheduledEventAttributes')

const NexusOperationStartedEventAttributesSchema = z
  .object({
    scheduledEventId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the `NEXUS_OPERATION_SCHEDULED` event this task corresponds to.',
      }),
    operationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The operation ID returned by the Nexus handler in the response to the StartOperation request.\n This ID is used when canceling the operation.\n\n Deprecated: Renamed to operation_token.',
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The request ID allocated at schedule time.' }),
    operationToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The operation token returned by the Nexus handler in the response to the StartOperation request.\n This token is used when canceling the operation.',
      }),
  })
  .openapi({
    description:
      'Event marking an asynchronous operation was started by the responding Nexus handler.\n If the operation completes synchronously, this event is not generated.\n In rare situations, such as request timeouts, the service may fail to record the actual start time and will fabricate\n this event upon receiving the operation completion via callback.',
    required: [],
  })
  .openapi('NexusOperationStartedEventAttributes')

const NexusOperationCompletedEventAttributesSchema = z
  .object({
    scheduledEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the `NEXUS_OPERATION_SCHEDULED` event. Uniquely identifies this operation.',
      }),
    result: PayloadSchema.exactOptional().openapi({
      description:
        'Serialized result of the Nexus operation. The response of the Nexus handler.\n Delivered either via a completion callback or as a response to a synchronous operation.',
    }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The request ID allocated at schedule time.' }),
  })
  .openapi({ description: 'Nexus operation completed successfully.', required: [] })
  .openapi('NexusOperationCompletedEventAttributes')

const NexusOperationFailedEventAttributesSchema = z
  .object({
    scheduledEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the `NEXUS_OPERATION_SCHEDULED` event. Uniquely identifies this operation.',
      }),
    failure: FailureSchema.exactOptional().openapi({
      description:
        'Failure details. A NexusOperationFailureInfo wrapping an ApplicationFailureInfo.',
    }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The request ID allocated at schedule time.' }),
  })
  .openapi({ description: 'Nexus operation failed.', required: [] })
  .openapi('NexusOperationFailedEventAttributes')

const NexusOperationCanceledEventAttributesSchema = z
  .object({
    scheduledEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the `NEXUS_OPERATION_SCHEDULED` event. Uniquely identifies this operation.',
      }),
    failure: FailureSchema.exactOptional().openapi({ description: 'Cancellation details.' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The request ID allocated at schedule time.' }),
  })
  .openapi({
    description:
      'Nexus operation completed as canceled. May or may not have been due to a cancellation request by the workflow.',
    required: [],
  })
  .openapi('NexusOperationCanceledEventAttributes')

const NexusOperationTimedOutEventAttributesSchema = z
  .object({
    scheduledEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the `NEXUS_OPERATION_SCHEDULED` event. Uniquely identifies this operation.',
      }),
    failure: FailureSchema.exactOptional().openapi({
      description: 'Failure details. A NexusOperationFailureInfo wrapping a CanceledFailureInfo.',
    }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The request ID allocated at schedule time.' }),
  })
  .openapi({ description: 'Nexus operation timed out.', required: [] })
  .openapi('NexusOperationTimedOutEventAttributes')

const NexusOperationCancelRequestedEventAttributesSchema = z
  .object({
    scheduledEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of the `NEXUS_OPERATION_SCHEDULED` event this cancel request corresponds to.',
      }),
    workflowTaskCompletedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `WORKFLOW_TASK_COMPLETED` event that the corresponding RequestCancelNexusOperation command was reported\n with.',
      }),
  })
  .openapi({ required: [] })
  .openapi('NexusOperationCancelRequestedEventAttributes')

const WorkflowExecutionOptionsUpdatedEventAttributesSchema = z
  .object({
    versioningOverride: VersioningOverrideSchema.exactOptional().openapi({
      description:
        'Versioning override upserted in this event.\n Ignored if nil or if unset_versioning_override is true.',
    }),
    unsetVersioningOverride: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Versioning override removed in this event.' }),
    attachedRequestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Request ID attached to the running workflow execution so that subsequent requests with same\n request ID will be deduped.',
      }),
    attachedCompletionCallbacks: z
      .array(CallbackSchema)
      .exactOptional()
      .openapi({ description: 'Completion callbacks attached to the running workflow execution.' }),
    identity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The identity of the client who initiated the request that created this event.',
      }),
    priority: PrioritySchema.exactOptional().openapi({
      description:
        'Priority override upserted in this event. Represents the full priority; not just partial fields.\n Ignored if nil.',
    }),
    timeSkippingConfig: TimeSkippingConfigSchema.exactOptional().openapi({
      description:
        'If set, the time-skipping configuration was changed. Contains the full updated configuration.',
    }),
  })
  .openapi({ required: [] })
  .openapi('WorkflowExecutionOptionsUpdatedEventAttributes')

const NexusOperationCancelRequestCompletedEventAttributesSchema = z
  .object({
    requestedEventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the `NEXUS_OPERATION_CANCEL_REQUESTED` event.' }),
    workflowTaskCompletedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `WORKFLOW_TASK_COMPLETED` event that the corresponding RequestCancelNexusOperation command was reported\n with.',
      }),
    scheduledEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of the `NEXUS_OPERATION_SCHEDULED` event this cancel request corresponds to.',
      }),
  })
  .openapi({ required: [] })
  .openapi('NexusOperationCancelRequestCompletedEventAttributes')

const NexusOperationCancelRequestFailedEventAttributesSchema = z
  .object({
    requestedEventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the `NEXUS_OPERATION_CANCEL_REQUESTED` event.' }),
    workflowTaskCompletedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `WORKFLOW_TASK_COMPLETED` event that the corresponding RequestCancelNexusOperation command was reported\n with.',
      }),
    failure: FailureSchema.exactOptional().openapi({
      description: 'Failure details. A NexusOperationFailureInfo wrapping a CanceledFailureInfo.',
    }),
    scheduledEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of the `NEXUS_OPERATION_SCHEDULED` event this cancel request corresponds to.',
      }),
  })
  .openapi({ required: [] })
  .openapi('NexusOperationCancelRequestFailedEventAttributes')

const WorkflowExecutionPausedEventAttributesSchema = z
  .object({
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the client who paused the workflow execution.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reason for pausing the workflow execution.' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The request ID of the request that paused the workflow execution.',
      }),
  })
  .openapi({
    description: 'Attributes for an event marking that a workflow execution was paused.',
    required: [],
  })
  .openapi('WorkflowExecutionPausedEventAttributes')

const WorkflowExecutionUnpausedEventAttributesSchema = z
  .object({
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the client who unpaused the workflow execution.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reason for unpausing the workflow execution.' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The request ID of the request that unpaused the workflow execution.',
      }),
  })
  .openapi({
    description: 'Attributes for an event marking that a workflow execution was unpaused.',
    required: [],
  })
  .openapi('WorkflowExecutionUnpausedEventAttributes')

const WorkflowExecutionTimeSkippingTransitionedEventAttributesSchema = z
  .object({
    targetTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The virtual time after time skipping was applied.' }),
    disabledAfterBound: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'when true, time skipping was disabled automatically due to a bound being reached.\n (-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: "after" is used to indicate temporal ordering. --)',
      }),
    wallClockTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The wall-clock time when the time-skipping state changed event was generated.',
      }),
  })
  .openapi({
    description:
      'Attributes for an event indicating that time skipping state changed for a workflow execution,\n either time was advanced or time skipping was disabled automatically due to a bound being reached.\n The worker_may_ignore field in HistoryEvent should always be set true for this event.',
    required: [],
  })
  .openapi('WorkflowExecutionTimeSkippingTransitionedEventAttributes')

const HistoryEventSchema = z
  .object({
    eventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Monotonically increasing event number, starts at 1.' }),
    eventTime: z.iso.datetime({ offset: true }).exactOptional(),
    eventType: z
      .enum([
        'EVENT_TYPE_UNSPECIFIED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_STARTED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_COMPLETED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_FAILED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_TIMED_OUT',
        'EVENT_TYPE_WORKFLOW_TASK_SCHEDULED',
        'EVENT_TYPE_WORKFLOW_TASK_STARTED',
        'EVENT_TYPE_WORKFLOW_TASK_COMPLETED',
        'EVENT_TYPE_WORKFLOW_TASK_TIMED_OUT',
        'EVENT_TYPE_WORKFLOW_TASK_FAILED',
        'EVENT_TYPE_ACTIVITY_TASK_SCHEDULED',
        'EVENT_TYPE_ACTIVITY_TASK_STARTED',
        'EVENT_TYPE_ACTIVITY_TASK_COMPLETED',
        'EVENT_TYPE_ACTIVITY_TASK_FAILED',
        'EVENT_TYPE_ACTIVITY_TASK_TIMED_OUT',
        'EVENT_TYPE_ACTIVITY_TASK_CANCEL_REQUESTED',
        'EVENT_TYPE_ACTIVITY_TASK_CANCELED',
        'EVENT_TYPE_TIMER_STARTED',
        'EVENT_TYPE_TIMER_FIRED',
        'EVENT_TYPE_TIMER_CANCELED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_CANCEL_REQUESTED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_CANCELED',
        'EVENT_TYPE_REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_INITIATED',
        'EVENT_TYPE_REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_FAILED',
        'EVENT_TYPE_EXTERNAL_WORKFLOW_EXECUTION_CANCEL_REQUESTED',
        'EVENT_TYPE_MARKER_RECORDED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_SIGNALED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_TERMINATED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_CONTINUED_AS_NEW',
        'EVENT_TYPE_START_CHILD_WORKFLOW_EXECUTION_INITIATED',
        'EVENT_TYPE_START_CHILD_WORKFLOW_EXECUTION_FAILED',
        'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_STARTED',
        'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_COMPLETED',
        'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_FAILED',
        'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_CANCELED',
        'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_TIMED_OUT',
        'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_TERMINATED',
        'EVENT_TYPE_SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_INITIATED',
        'EVENT_TYPE_SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED',
        'EVENT_TYPE_EXTERNAL_WORKFLOW_EXECUTION_SIGNALED',
        'EVENT_TYPE_UPSERT_WORKFLOW_SEARCH_ATTRIBUTES',
        'EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_ADMITTED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_ACCEPTED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_REJECTED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_COMPLETED',
        'EVENT_TYPE_WORKFLOW_PROPERTIES_MODIFIED_EXTERNALLY',
        'EVENT_TYPE_ACTIVITY_PROPERTIES_MODIFIED_EXTERNALLY',
        'EVENT_TYPE_WORKFLOW_PROPERTIES_MODIFIED',
        'EVENT_TYPE_NEXUS_OPERATION_SCHEDULED',
        'EVENT_TYPE_NEXUS_OPERATION_STARTED',
        'EVENT_TYPE_NEXUS_OPERATION_COMPLETED',
        'EVENT_TYPE_NEXUS_OPERATION_FAILED',
        'EVENT_TYPE_NEXUS_OPERATION_CANCELED',
        'EVENT_TYPE_NEXUS_OPERATION_TIMED_OUT',
        'EVENT_TYPE_NEXUS_OPERATION_CANCEL_REQUESTED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_OPTIONS_UPDATED',
        'EVENT_TYPE_NEXUS_OPERATION_CANCEL_REQUEST_COMPLETED',
        'EVENT_TYPE_NEXUS_OPERATION_CANCEL_REQUEST_FAILED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_PAUSED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_UNPAUSED',
        'EVENT_TYPE_WORKFLOW_EXECUTION_TIME_SKIPPING_TRANSITIONED',
      ])
      .exactOptional(),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Failover version of the event, used by the server for multi-cluster replication and history\n versioning. SDKs generally ignore this field.',
      }),
    taskId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier used by the service to order replication and transfer tasks associated with this\n event. SDKs generally ignore this field.',
      }),
    workerMayIgnore: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Set to true when the SDK may ignore the event as it does not impact workflow state or\n information in any way that the SDK need be concerned with. If an SDK encounters an event\n type which it does not understand, it must error unless this is true. If it is true, it's\n acceptable for the event type and/or attributes to be uninterpretable.",
      }),
    userMetadata: UserMetadataSchema.exactOptional().openapi({
      description:
        "Metadata on the event. This is often carried over from commands and client calls. Most events\n won't have this information, and how this information is used is dependent upon the interface\n that reads it.\n\n Current well-known uses:\n  * workflow_execution_started_event_attributes - summary and details from start workflow.\n  * timer_started_event_attributes - summary represents an identifier for the timer for use by\n    user interfaces.",
    }),
    links: z
      .array(LinkSchema)
      .exactOptional()
      .openapi({
        description:
          "Links to related entities, such as the entity that started this event's workflow.",
      }),
    principal: PrincipalSchema.exactOptional().openapi({
      description: 'Server-computed authenticated caller identity associated with this event.',
    }),
    workflowExecutionStartedEventAttributes:
      WorkflowExecutionStartedEventAttributesSchema.exactOptional(),
    workflowExecutionCompletedEventAttributes:
      WorkflowExecutionCompletedEventAttributesSchema.exactOptional(),
    workflowExecutionFailedEventAttributes:
      WorkflowExecutionFailedEventAttributesSchema.exactOptional(),
    workflowExecutionTimedOutEventAttributes:
      WorkflowExecutionTimedOutEventAttributesSchema.exactOptional(),
    workflowTaskScheduledEventAttributes:
      WorkflowTaskScheduledEventAttributesSchema.exactOptional(),
    workflowTaskStartedEventAttributes: WorkflowTaskStartedEventAttributesSchema.exactOptional(),
    workflowTaskCompletedEventAttributes:
      WorkflowTaskCompletedEventAttributesSchema.exactOptional(),
    workflowTaskTimedOutEventAttributes: WorkflowTaskTimedOutEventAttributesSchema.exactOptional(),
    workflowTaskFailedEventAttributes: WorkflowTaskFailedEventAttributesSchema.exactOptional(),
    activityTaskScheduledEventAttributes:
      ActivityTaskScheduledEventAttributesSchema.exactOptional(),
    activityTaskStartedEventAttributes: ActivityTaskStartedEventAttributesSchema.exactOptional(),
    activityTaskCompletedEventAttributes:
      ActivityTaskCompletedEventAttributesSchema.exactOptional(),
    activityTaskFailedEventAttributes: ActivityTaskFailedEventAttributesSchema.exactOptional(),
    activityTaskTimedOutEventAttributes: ActivityTaskTimedOutEventAttributesSchema.exactOptional(),
    timerStartedEventAttributes: TimerStartedEventAttributesSchema.exactOptional(),
    timerFiredEventAttributes: TimerFiredEventAttributesSchema.exactOptional(),
    activityTaskCancelRequestedEventAttributes:
      ActivityTaskCancelRequestedEventAttributesSchema.exactOptional(),
    activityTaskCanceledEventAttributes: ActivityTaskCanceledEventAttributesSchema.exactOptional(),
    timerCanceledEventAttributes: TimerCanceledEventAttributesSchema.exactOptional(),
    markerRecordedEventAttributes: MarkerRecordedEventAttributesSchema.exactOptional(),
    workflowExecutionSignaledEventAttributes:
      WorkflowExecutionSignaledEventAttributesSchema.exactOptional(),
    workflowExecutionTerminatedEventAttributes:
      WorkflowExecutionTerminatedEventAttributesSchema.exactOptional(),
    workflowExecutionCancelRequestedEventAttributes:
      WorkflowExecutionCancelRequestedEventAttributesSchema.exactOptional(),
    workflowExecutionCanceledEventAttributes:
      WorkflowExecutionCanceledEventAttributesSchema.exactOptional(),
    requestCancelExternalWorkflowExecutionInitiatedEventAttributes:
      RequestCancelExternalWorkflowExecutionInitiatedEventAttributesSchema.exactOptional(),
    requestCancelExternalWorkflowExecutionFailedEventAttributes:
      RequestCancelExternalWorkflowExecutionFailedEventAttributesSchema.exactOptional(),
    externalWorkflowExecutionCancelRequestedEventAttributes:
      ExternalWorkflowExecutionCancelRequestedEventAttributesSchema.exactOptional(),
    workflowExecutionContinuedAsNewEventAttributes:
      WorkflowExecutionContinuedAsNewEventAttributesSchema.exactOptional(),
    startChildWorkflowExecutionInitiatedEventAttributes:
      StartChildWorkflowExecutionInitiatedEventAttributesSchema.exactOptional(),
    startChildWorkflowExecutionFailedEventAttributes:
      StartChildWorkflowExecutionFailedEventAttributesSchema.exactOptional(),
    childWorkflowExecutionStartedEventAttributes:
      ChildWorkflowExecutionStartedEventAttributesSchema.exactOptional(),
    childWorkflowExecutionCompletedEventAttributes:
      ChildWorkflowExecutionCompletedEventAttributesSchema.exactOptional(),
    childWorkflowExecutionFailedEventAttributes:
      ChildWorkflowExecutionFailedEventAttributesSchema.exactOptional(),
    childWorkflowExecutionCanceledEventAttributes:
      ChildWorkflowExecutionCanceledEventAttributesSchema.exactOptional(),
    childWorkflowExecutionTimedOutEventAttributes:
      ChildWorkflowExecutionTimedOutEventAttributesSchema.exactOptional(),
    childWorkflowExecutionTerminatedEventAttributes:
      ChildWorkflowExecutionTerminatedEventAttributesSchema.exactOptional(),
    signalExternalWorkflowExecutionInitiatedEventAttributes:
      SignalExternalWorkflowExecutionInitiatedEventAttributesSchema.exactOptional(),
    signalExternalWorkflowExecutionFailedEventAttributes:
      SignalExternalWorkflowExecutionFailedEventAttributesSchema.exactOptional(),
    externalWorkflowExecutionSignaledEventAttributes:
      ExternalWorkflowExecutionSignaledEventAttributesSchema.exactOptional(),
    upsertWorkflowSearchAttributesEventAttributes:
      UpsertWorkflowSearchAttributesEventAttributesSchema.exactOptional(),
    workflowExecutionUpdateAcceptedEventAttributes:
      WorkflowExecutionUpdateAcceptedEventAttributesSchema.exactOptional(),
    workflowExecutionUpdateRejectedEventAttributes:
      WorkflowExecutionUpdateRejectedEventAttributesSchema.exactOptional(),
    workflowExecutionUpdateCompletedEventAttributes:
      WorkflowExecutionUpdateCompletedEventAttributesSchema.exactOptional(),
    workflowPropertiesModifiedExternallyEventAttributes:
      WorkflowPropertiesModifiedExternallyEventAttributesSchema.exactOptional(),
    activityPropertiesModifiedExternallyEventAttributes:
      ActivityPropertiesModifiedExternallyEventAttributesSchema.exactOptional(),
    workflowPropertiesModifiedEventAttributes:
      WorkflowPropertiesModifiedEventAttributesSchema.exactOptional(),
    workflowExecutionUpdateAdmittedEventAttributes:
      WorkflowExecutionUpdateAdmittedEventAttributesSchema.exactOptional(),
    nexusOperationScheduledEventAttributes:
      NexusOperationScheduledEventAttributesSchema.exactOptional(),
    nexusOperationStartedEventAttributes:
      NexusOperationStartedEventAttributesSchema.exactOptional(),
    nexusOperationCompletedEventAttributes:
      NexusOperationCompletedEventAttributesSchema.exactOptional(),
    nexusOperationFailedEventAttributes: NexusOperationFailedEventAttributesSchema.exactOptional(),
    nexusOperationCanceledEventAttributes:
      NexusOperationCanceledEventAttributesSchema.exactOptional(),
    nexusOperationTimedOutEventAttributes:
      NexusOperationTimedOutEventAttributesSchema.exactOptional(),
    nexusOperationCancelRequestedEventAttributes:
      NexusOperationCancelRequestedEventAttributesSchema.exactOptional(),
    workflowExecutionOptionsUpdatedEventAttributes:
      WorkflowExecutionOptionsUpdatedEventAttributesSchema.exactOptional(),
    nexusOperationCancelRequestCompletedEventAttributes:
      NexusOperationCancelRequestCompletedEventAttributesSchema.exactOptional(),
    nexusOperationCancelRequestFailedEventAttributes:
      NexusOperationCancelRequestFailedEventAttributesSchema.exactOptional(),
    workflowExecutionPausedEventAttributes:
      WorkflowExecutionPausedEventAttributesSchema.exactOptional(),
    workflowExecutionUnpausedEventAttributes:
      WorkflowExecutionUnpausedEventAttributesSchema.exactOptional(),
    workflowExecutionTimeSkippingTransitionedEventAttributes:
      WorkflowExecutionTimeSkippingTransitionedEventAttributesSchema.exactOptional(),
  })
  .openapi({
    description:
      'History events are the method by which Temporal SDKs advance (or recreate) workflow state.\n See the `EventType` enum for more info about what each event is for.',
    required: [],
  })
  .openapi('HistoryEvent')

const HistorySchema = z
  .object({ events: z.array(HistoryEventSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('History')

const GetWorkflowExecutionHistoryResponseSchema = z
  .object({
    history: HistorySchema.exactOptional(),
    rawHistory: z
      .array(DataBlobSchema)
      .exactOptional()
      .openapi({
        description:
          'Raw history is an alternate representation of history that may be returned if configured on\n the frontend. This is not supported by all SDKs. Either this or `history` will be set.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Will be set if there are more history events than were included in this response',
      }),
    archived: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetWorkflowExecutionHistoryResponse')

const GetWorkflowExecutionHistoryReverseResponseSchema = z
  .object({
    history: HistorySchema.exactOptional(),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Will be set if there are more history events than were included in this response',
      }),
  })
  .openapi({ required: [] })
  .openapi('GetWorkflowExecutionHistoryReverseResponse')

const GoogleProtobufAnySchema = z
  .looseObject({
    '@type': z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of the serialized message.' }),
  })
  .openapi({
    description:
      'Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.',
    required: [],
  })
  .openapi('GoogleProtobufAny')

const ListActivityExecutionsResponseSchema = z
  .object({
    executions: z.array(ActivityExecutionListInfoSchema).exactOptional(),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Token to use to fetch the next page. If empty, there is no next page.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListActivityExecutionsResponse')

const ListArchivedWorkflowExecutionsResponseSchema = z
  .object({
    executions: z.array(WorkflowExecutionInfoSchema).exactOptional(),
    nextPageToken: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListArchivedWorkflowExecutionsResponse')

const ListBatchOperationsResponseSchema = z
  .object({
    operationInfo: z
      .array(BatchOperationInfoSchema)
      .exactOptional()
      .openapi({ description: 'BatchOperationInfo contains the basic info about batch operation' }),
    nextPageToken: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListBatchOperationsResponse')

const ListDeploymentsResponseSchema = z
  .object({
    nextPageToken: z.string().exactOptional(),
    deployments: z.array(DeploymentListInfoSchema).exactOptional(),
  })
  .openapi({
    description: '[cleanup-wv-pre-release] Pre-release deployment APIs, clean up later',
    required: [],
  })
  .openapi('ListDeploymentsResponse')

const ListNamespacesResponseSchema = z
  .object({
    namespaces: z.array(DescribeNamespaceResponseSchema).exactOptional(),
    nextPageToken: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListNamespacesResponse')

const ListNexusEndpointsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Token for getting the next page.' }),
    endpoints: z.array(EndpointSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListNexusEndpointsResponse')

const NexusOperationExecutionListInfoSchema = z
  .object({
    operationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier of this operation within its namespace along with run ID (below).',
      }),
    runId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The run ID of the standalone Nexus operation.' }),
    endpoint: z.string().exactOptional().openapi({ description: 'Endpoint name.' }),
    service: z.string().exactOptional().openapi({ description: 'Service name.' }),
    operation: z.string().exactOptional().openapi({ description: 'Operation name.' }),
    scheduleTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Time the operation was originally scheduled via a StartNexusOperation request.',
      }),
    closeTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'If the operation is in a terminal status, this field represents the time the operation transitioned to that status.',
      }),
    status: z
      .enum([
        'NEXUS_OPERATION_EXECUTION_STATUS_UNSPECIFIED',
        'NEXUS_OPERATION_EXECUTION_STATUS_RUNNING',
        'NEXUS_OPERATION_EXECUTION_STATUS_COMPLETED',
        'NEXUS_OPERATION_EXECUTION_STATUS_FAILED',
        'NEXUS_OPERATION_EXECUTION_STATUS_CANCELED',
        'NEXUS_OPERATION_EXECUTION_STATUS_TERMINATED',
        'NEXUS_OPERATION_EXECUTION_STATUS_TIMED_OUT',
      ])
      .exactOptional()
      .openapi({
        description:
          'The status is updated once, when the operation is originally scheduled, and again when the operation reaches a terminal status.',
      }),
    searchAttributes: SearchAttributesSchema.exactOptional().openapi({
      description: 'Search attributes from the start request.',
    }),
    stateTransitionCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Updated on terminal status.' }),
    executionDuration: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'The difference between close time and scheduled time.\n This field is only populated if the operation is closed.',
      }),
  })
  .openapi({
    description:
      'Limited Nexus operation information returned in the list response.\n When adding fields here, ensure that it is also present in NexusOperationExecutionInfo (note that it may already be present in\n NexusOperationExecutionInfo but not at the top-level).',
    required: [],
  })
  .openapi('NexusOperationExecutionListInfo')

const ListNexusOperationExecutionsResponseSchema = z
  .object({
    operations: z.array(NexusOperationExecutionListInfoSchema).exactOptional(),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Token to use to fetch the next page. If empty, there is no next page.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListNexusOperationExecutionsResponse')

const ListScheduleMatchingTimesResponseSchema = z
  .object({ startTime: z.array(z.iso.datetime({ offset: true })).exactOptional() })
  .openapi({ required: [] })
  .openapi('ListScheduleMatchingTimesResponse')

const ScheduleListInfoSchema = z
  .object({
    spec: ScheduleSpecSchema.exactOptional().openapi({
      description: 'From spec:\n Some fields are dropped from this copy of spec: timezone_data',
    }),
    workflowType: WorkflowTypeSchema.exactOptional().openapi({
      description:
        "From action:\n Action is a oneof field, but we need to encode this in JSON and oneof fields don't work\n well with JSON. If action is start_workflow, this is set:",
    }),
    notes: z.string().exactOptional().openapi({ description: 'From state:' }),
    paused: z.boolean().exactOptional(),
    recentActions: z
      .array(ScheduleActionResultSchema)
      .exactOptional()
      .openapi({ description: 'From info (maybe fewer entries):' }),
    futureActionTimes: z.array(z.iso.datetime({ offset: true })).exactOptional(),
  })
  .openapi({
    description:
      "ScheduleListInfo is an abbreviated set of values from Schedule and ScheduleInfo\n that's returned in ListSchedules.",
    required: [],
  })
  .openapi('ScheduleListInfo')

const ScheduleListEntrySchema = z
  .object({
    scheduleId: z.string().exactOptional(),
    memo: MemoSchema.exactOptional(),
    searchAttributes: SearchAttributesSchema.exactOptional(),
    info: ScheduleListInfoSchema.exactOptional(),
  })
  .openapi({ description: 'ScheduleListEntry is returned by ListSchedules.', required: [] })
  .openapi('ScheduleListEntry')

const ListSchedulesResponseSchema = z
  .object({
    schedules: z.array(ScheduleListEntrySchema).exactOptional(),
    nextPageToken: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListSchedulesResponse')

const ListSearchAttributesResponseSchema = z
  .object({
    customAttributes: z
      .record(
        z.string(),
        z.enum([
          'INDEXED_VALUE_TYPE_UNSPECIFIED',
          'INDEXED_VALUE_TYPE_TEXT',
          'INDEXED_VALUE_TYPE_KEYWORD',
          'INDEXED_VALUE_TYPE_INT',
          'INDEXED_VALUE_TYPE_DOUBLE',
          'INDEXED_VALUE_TYPE_BOOL',
          'INDEXED_VALUE_TYPE_DATETIME',
          'INDEXED_VALUE_TYPE_KEYWORD_LIST',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Mapping between custom (user-registered) search attribute name to its IndexedValueType.',
      }),
    systemAttributes: z
      .record(
        z.string(),
        z.enum([
          'INDEXED_VALUE_TYPE_UNSPECIFIED',
          'INDEXED_VALUE_TYPE_TEXT',
          'INDEXED_VALUE_TYPE_KEYWORD',
          'INDEXED_VALUE_TYPE_INT',
          'INDEXED_VALUE_TYPE_DOUBLE',
          'INDEXED_VALUE_TYPE_BOOL',
          'INDEXED_VALUE_TYPE_DATETIME',
          'INDEXED_VALUE_TYPE_KEYWORD_LIST',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Mapping between system (predefined) search attribute name to its IndexedValueType.',
      }),
    storageSchema: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Mapping from the attribute name to the visibility storage native type.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListSearchAttributesResponse')

const ListWorkerDeploymentsResponseWorkerDeploymentSummarySchema = z
  .object({
    name: z.string().exactOptional(),
    createTime: z.iso.datetime({ offset: true }).exactOptional(),
    routingConfig: RoutingConfigSchema.exactOptional(),
    latestVersionSummary:
      WorkerDeploymentInfoWorkerDeploymentVersionSummarySchema.exactOptional().openapi({
        description:
          'Summary of the version that was added most recently in the Worker Deployment.',
      }),
    currentVersionSummary:
      WorkerDeploymentInfoWorkerDeploymentVersionSummarySchema.exactOptional().openapi({
        description: 'Summary of the current version of the Worker Deployment.',
      }),
    rampingVersionSummary:
      WorkerDeploymentInfoWorkerDeploymentVersionSummarySchema.exactOptional().openapi({
        description: 'Summary of the ramping version of the Worker Deployment.',
      }),
  })
  .openapi({ description: 'A subset of WorkerDeploymentInfo', required: [] })
  .openapi('ListWorkerDeploymentsResponseWorkerDeploymentSummary')

const ListWorkerDeploymentsResponseSchema = z
  .object({
    nextPageToken: z.string().exactOptional(),
    workerDeployments: z
      .array(ListWorkerDeploymentsResponseWorkerDeploymentSummarySchema)
      .exactOptional()
      .openapi({ description: 'The list of worker deployments.' }),
  })
  .openapi({ required: [] })
  .openapi('ListWorkerDeploymentsResponse')

const WorkerListInfoSchema = z
  .object({
    workerInstanceKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Worker identifier, should be unique for the namespace.\n It is distinct from worker identity, which is not necessarily namespace-unique.',
      }),
    workerIdentity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Worker identity, set by the client, may not be unique.\n Usually host_name+(user group name)+process_id, but can be overwritten by the user.',
      }),
    taskQueue: z
      .string()
      .exactOptional()
      .openapi({ description: 'Task queue this worker is polling for tasks.' }),
    deploymentVersion: WorkerDeploymentVersionSchema.exactOptional(),
    sdkName: z.string().exactOptional(),
    sdkVersion: z.string().exactOptional(),
    status: z
      .enum([
        'WORKER_STATUS_UNSPECIFIED',
        'WORKER_STATUS_RUNNING',
        'WORKER_STATUS_SHUTTING_DOWN',
        'WORKER_STATUS_SHUTDOWN',
      ])
      .exactOptional()
      .openapi({ description: 'Worker status. Defined by SDK.' }),
    startTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Worker start time.\n It can be used to determine worker uptime. (current time - start time)',
      }),
    hostName: z.string().exactOptional().openapi({ description: 'Worker host identifier.' }),
    workerGroupingKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Worker grouping identifier. A key to group workers that share the same client+namespace+process.\n This will be used to build the worker command nexus task queue name:\n "temporal-sys/worker-commands/{worker_grouping_key}"',
      }),
    processId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Worker process identifier. This id only needs to be unique\n within one host (so using e.g. a unix pid would be appropriate).',
      }),
    plugins: z
      .array(PluginInfoSchema)
      .exactOptional()
      .openapi({ description: 'Plugins currently in use by this SDK.' }),
    drivers: z
      .array(StorageDriverInfoSchema)
      .exactOptional()
      .openapi({ description: 'Storage drivers in use by this SDK.' }),
  })
  .openapi({
    description:
      'Limited worker information returned in the list response.\n When adding fields here, ensure that it is also added to WorkerInfo (as it carries the full worker information).',
    required: [],
  })
  .openapi('WorkerListInfo')

const ListWorkersResponseSchema = z
  .object({
    workersInfo: z
      .array(WorkerInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'Deprecated: Use workers instead. This field returns full WorkerInfo which\n includes expensive runtime metrics. We will stop populating this field in the future.',
      }),
    workers: z
      .array(WorkerListInfoSchema)
      .exactOptional()
      .openapi({ description: 'Limited worker information.' }),
    nextPageToken: z.string().exactOptional().openapi({ description: 'Next page token' }),
  })
  .openapi({ required: [] })
  .openapi('ListWorkersResponse')

const ListWorkflowExecutionsResponseSchema = z
  .object({
    executions: z.array(WorkflowExecutionInfoSchema).exactOptional(),
    nextPageToken: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListWorkflowExecutionsResponse')

const ListWorkflowRulesResponseSchema = z
  .object({
    rules: z.array(WorkflowRuleSchema).exactOptional(),
    nextPageToken: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListWorkflowRulesResponse')

const MessageSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'An ID for this specific message.' }),
    protocolInstanceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies the specific instance of a protocol to which this message\n belongs.',
      }),
    eventId: z.string().exactOptional(),
    commandIndex: z.string().exactOptional(),
    body: GoogleProtobufAnySchema.exactOptional().openapi({
      description:
        'The opaque data carried by this message. The protocol type can be\n extracted from the package name of the message carried inside the Any.',
    }),
  })
  .openapi({
    description:
      '(-- api-linter: core::0146::any=disabled\n     aip.dev/not-precedent: We want runtime extensibility for the body field --)',
    required: [],
  })
  .openapi('Message')

const OnConflictOptionsSchema = z
  .object({
    attachRequestId: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Attaches the request ID to the running execution.' }),
    attachCompletionCallbacks: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Attaches the completion callbacks to the running execution.' }),
    attachLinks: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Attaches the links to the running execution.' }),
  })
  .openapi({
    description:
      'When starting an execution with a conflict policy that uses an existing execution and there is already an existing\n running execution, OnConflictOptions defines actions to be taken on the existing running execution.',
    required: [],
  })
  .openapi('OnConflictOptions')

const PatchScheduleRequestSchema = z
  .object({
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'The namespace of the schedule to patch.' }),
    scheduleId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the schedule to patch.' }),
    patch: SchedulePatchSchema.exactOptional(),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the client who initiated this request.' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier for this update request for idempotence. Typically UUIDv4.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PatchScheduleRequest')

const PatchScheduleResponseSchema = z.object({}).openapi('PatchScheduleResponse')

const PauseActivityExecutionRequestSchema = z
  .object({
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'Namespace of the workflow which scheduled this activity.' }),
    workflowId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If provided, pause a workflow activity (or activities) for the given workflow ID.\n If empty, targets a standalone activity.',
      }),
    activityId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the activity to target.' }),
    runId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Run ID of the workflow or standalone activity.' }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the client who initiated this request.' }),
    reason: z.string().exactOptional().openapi({ description: 'Reason to pause the activity.' }),
    resourceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource ID for routing. Contains "workflow:{workflow_id}" for workflow activities or "activity:{activity_id}" for standalone activities.',
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Used to de-dupe pause requests.' }),
  })
  .openapi({ required: [] })
  .openapi('PauseActivityExecutionRequest')

const PauseActivityExecutionResponseSchema = z.object({}).openapi('PauseActivityExecutionResponse')

const PauseActivityRequestSchema = z
  .object({
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'Namespace of the workflow which scheduled this activity.' }),
    execution: WorkflowExecutionSchema.exactOptional().openapi({
      description: 'Execution info of the workflow which scheduled this activity',
    }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the client who initiated this request.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Only the activity with this ID will be paused.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Pause all running activities of this type.\n Note: Experimental - the behavior of pause by activity type might change in a future release.',
      }),
    reason: z.string().exactOptional().openapi({ description: 'Reason to pause the activity.' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Used to de-dupe pause requests.' }),
  })
  .openapi({ description: 'Deprecated. Use `PauseActivityExecutionRequest`.', required: [] })
  .openapi('PauseActivityRequest')

const PauseActivityResponseSchema = z
  .object({})
  .openapi({ description: 'Deprecated. Use `PauseActivityExecutionResponse`.' })
  .openapi('PauseActivityResponse')

const PauseWorkflowExecutionRequestSchema = z
  .object({
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'Namespace of the workflow to pause.' }),
    workflowId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the workflow execution to be paused. Required.' }),
    runId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Run ID of the workflow execution to be paused. Optional. If not provided, the current run of the workflow will be paused.',
      }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the client who initiated this request.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'Reason to pause the workflow execution.' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier for this pause request for idempotence. Typically UUIDv4.',
      }),
  })
  .openapi({ description: 'Request to pause a workflow execution.', required: [] })
  .openapi('PauseWorkflowExecutionRequest')

const PauseWorkflowExecutionResponseSchema = z
  .object({})
  .openapi({ description: 'Response to a successful PauseWorkflowExecution request.' })
  .openapi('PauseWorkflowExecutionResponse')

const PayloadExternalPayloadDetailsSchema = z
  .object({
    sizeBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Size in bytes of the externally stored payload' }),
  })
  .openapi({
    description: 'Describes an externally stored object referenced by this payload.',
    required: [],
  })
  .openapi('PayloadExternalPayloadDetails')

const PollActivityExecutionResponseSchema = z
  .object({
    runId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The run ID of the activity, useful when run_id was not specified in the request.',
      }),
    outcome: ActivityExecutionOutcomeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PollActivityExecutionResponse')

const PollNexusOperationExecutionResponseSchema = z
  .object({
    runId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The run ID of the operation, useful when run_id was not specified in the request.',
      }),
    waitStage: z
      .enum([
        'NEXUS_OPERATION_WAIT_STAGE_UNSPECIFIED',
        'NEXUS_OPERATION_WAIT_STAGE_STARTED',
        'NEXUS_OPERATION_WAIT_STAGE_CLOSED',
      ])
      .exactOptional()
      .openapi({
        description:
          'The current stage of the operation. May be more advanced than the stage requested in the poll.',
      }),
    operationToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Operation token. Only populated for asynchronous operations after a successful StartOperation call.',
      }),
    result: PayloadSchema.exactOptional().openapi({
      description: 'The result if the operation completed successfully.',
    }),
    failure: FailureSchema.exactOptional().openapi({
      description: 'The failure if the operation completed unsuccessfully.',
    }),
  })
  .openapi({ required: [] })
  .openapi('PollNexusOperationExecutionResponse')

const WorkflowQuerySchema = z
  .object({
    queryType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The workflow-author-defined identifier of the query. Typically a function name.',
      }),
    queryArgs: PayloadsSchema.exactOptional().openapi({
      description: 'Serialized arguments that will be provided to the query handler.',
    }),
    header: HeaderSchema.exactOptional().openapi({
      description:
        'Headers that were passed by the caller of the query and copied by temporal\n server into the workflow task.',
    }),
  })
  .openapi({ description: 'See https://docs.temporal.io/docs/concepts/queries/', required: [] })
  .openapi('WorkflowQuery')

const PollerScalingDecisionSchema = z
  .object({
    pollRequestDeltaSuggestion: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'How many poll requests to suggest should be added or removed, if any. As of now, server only\n scales up or down by 1. However, SDKs should allow for other values (while staying within\n defined min/max).\n\n The SDK is free to ignore this suggestion, EX: making more polls would not make sense because\n all slots are already occupied.',
      }),
  })
  .openapi({
    description:
      'Attached to task responses to give hints to the SDK about how it may adjust its number of\n pollers.',
    required: [],
  })
  .openapi('PollerScalingDecision')

const PollerGroupInfoSchema = z
  .object({ id: z.string().exactOptional(), weight: z.float32().exactOptional() })
  .openapi({ required: [] })
  .openapi('PollerGroupInfo')

const PollWorkflowTaskQueueResponseSchema = z
  .object({
    taskToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique identifier for this task' }),
    workflowExecution: WorkflowExecutionSchema.exactOptional(),
    workflowType: WorkflowTypeSchema.exactOptional(),
    previousStartedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The last workflow task started event which was processed by some worker for this execution.\n Will be zero if no task has ever started.',
      }),
    startedEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of the most recent workflow task started event, which will have been generated as a\n result of this poll request being served. Will be zero if the task\n does not contain any events which would advance history (no new WFT started).\n Currently this can happen for queries.',
      }),
    attempt: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Starting at 1, the number of attempts to complete this task by any worker.',
      }),
    backlogCountHint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A hint that there are more tasks already present in this task queue\n partition. Can be used to prioritize draining a sticky queue.\n\n Specifically, the returned number is the number of tasks remaining in\n the in-memory buffer for this partition, which is currently capped at\n 1000. Because sticky queues only have one partition, this number is\n more useful when draining them. Normal queues, typically having more than one\n partition, will return a number representing only some portion of the\n overall backlog. Subsequent RPCs may not hit the same partition as\n this call.',
      }),
    history: HistorySchema.exactOptional().openapi({
      description:
        'The history for this workflow, which will either be complete or partial. Partial histories\n are sent to workers who have signaled that they are using a sticky queue when completing\n a workflow task.',
    }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Will be set if there are more history events than were included in this response. Such events\n should be fetched via `GetWorkflowExecutionHistory`.',
      }),
    query: WorkflowQuerySchema.exactOptional().openapi({
      description:
        'Legacy queries appear in this field. The query must be responded to via\n `RespondQueryTaskCompleted`. If the workflow is already closed (queries are permitted on\n closed workflows) then the `history` field will be populated with the entire history. It\n may also be populated if this task originates on a non-sticky queue.',
    }),
    workflowExecutionTaskQueue: TaskQueueSchema.exactOptional().openapi({
      description:
        'The task queue this task originated from, which will always be the original non-sticky name\n for the queue, even if this response came from polling a sticky queue.',
    }),
    scheduledTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When this task was scheduled by the server' }),
    startedTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'When the current workflow task started event was generated, meaning the current attempt.',
      }),
    queries: z
      .record(z.string(), WorkflowQuerySchema)
      .exactOptional()
      .openapi({
        description:
          'Queries that should be executed after applying the history in this task. Responses should be\n attached to `RespondWorkflowTaskCompletedRequest::query_results`',
      }),
    messages: z
      .array(MessageSchema)
      .exactOptional()
      .openapi({ description: 'Protocol messages piggybacking on a WFT as a transport' }),
    pollerScalingDecision: PollerScalingDecisionSchema.exactOptional().openapi({
      description: 'Server-advised information the SDK may use to adjust its poller count.',
    }),
    pollerGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This poller group ID identifies the owner of the workflow task awaiting for query response.\n Corresponding RespondQueryTaskCompleted should pass this value for proper routing.',
      }),
    pollerGroupInfos: z
      .array(PollerGroupInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'The weighted list of poller groups IDs that client should use for future polls to this task\n queue. Client is expected to:\n   1. Maintain minimum number of pollers no less than the number of groups.\n   2. Try to assign the next poll to a group without any pending polls,\n   3. If every group has some pending polls, assign the next poll to a group randomly\n     according to the weights.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PollWorkflowTaskQueueResponse')

const QueryRejectedSchema = z
  .object({
    status: z
      .enum([
        'WORKFLOW_EXECUTION_STATUS_UNSPECIFIED',
        'WORKFLOW_EXECUTION_STATUS_RUNNING',
        'WORKFLOW_EXECUTION_STATUS_COMPLETED',
        'WORKFLOW_EXECUTION_STATUS_FAILED',
        'WORKFLOW_EXECUTION_STATUS_CANCELED',
        'WORKFLOW_EXECUTION_STATUS_TERMINATED',
        'WORKFLOW_EXECUTION_STATUS_CONTINUED_AS_NEW',
        'WORKFLOW_EXECUTION_STATUS_TIMED_OUT',
        'WORKFLOW_EXECUTION_STATUS_PAUSED',
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('QueryRejected')

const QueryWorkflowRequestSchema = z
  .object({
    namespace: z.string().exactOptional(),
    execution: WorkflowExecutionSchema.exactOptional(),
    query: WorkflowQuerySchema.exactOptional(),
    queryRejectCondition: z
      .enum([
        'QUERY_REJECT_CONDITION_UNSPECIFIED',
        'QUERY_REJECT_CONDITION_NONE',
        'QUERY_REJECT_CONDITION_NOT_OPEN',
        'QUERY_REJECT_CONDITION_NOT_COMPLETED_CLEANLY',
      ])
      .exactOptional()
      .openapi({
        description:
          'QueryRejectCondition can used to reject the query if workflow state does not satisfy condition.\n Default: QUERY_REJECT_CONDITION_NONE.',
      }),
  })
  .openapi({ required: [] })
  .openapi('QueryWorkflowRequest')

const QueryWorkflowResponseSchema = z
  .object({
    queryResult: PayloadsSchema.exactOptional(),
    queryRejected: QueryRejectedSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('QueryWorkflowResponse')

const RecordActivityTaskHeartbeatByIdRequestSchema = z
  .object({
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'Namespace of the workflow which scheduled this activity' }),
    workflowId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the workflow which scheduled this activity, leave empty to target a standalone activity',
      }),
    runId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For a workflow activity - the run ID of the workflow which scheduled this activity.\n For a standalone activity - the run ID of the activity.',
      }),
    activityId: z
      .string()
      .exactOptional()
      .openapi({ description: "Id of the activity we're heartbeating" }),
    details: PayloadsSchema.exactOptional().openapi({
      description:
        'Arbitrary data, of which the most recent call is kept, to store for this activity',
    }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the worker/client' }),
    resourceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource ID for routing. Contains "workflow:workflow_id" or "activity:activity_id" for standalone activities.',
      }),
  })
  .openapi({ required: [] })
  .openapi('RecordActivityTaskHeartbeatByIdRequest')

const RecordActivityTaskHeartbeatByIdResponseSchema = z
  .object({
    cancelRequested: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Will be set to true if the activity has been asked to cancel itself. The SDK should then\n notify the activity of cancellation if it is still running.',
      }),
    activityPaused: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Will be set to true if the activity is paused.' }),
    activityReset: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Will be set to true if the activity was reset.\n Applies only to the current run.',
      }),
  })
  .openapi({ required: [] })
  .openapi('RecordActivityTaskHeartbeatByIdResponse')

const RecordActivityTaskHeartbeatRequestSchema = z
  .object({
    taskToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The task token as received in `PollActivityTaskQueueResponse`' }),
    details: PayloadsSchema.exactOptional().openapi({
      description:
        'Arbitrary data, of which the most recent call is kept, to store for this activity',
    }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the worker/client' }),
    namespace: z.string().exactOptional(),
    resourceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource ID for routing. Contains the workflow ID or activity ID for standalone activities.',
      }),
  })
  .openapi({ required: [] })
  .openapi('RecordActivityTaskHeartbeatRequest')

const RecordActivityTaskHeartbeatResponseSchema = z
  .object({
    cancelRequested: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Will be set to true if the activity has been asked to cancel itself. The SDK should then\n notify the activity of cancellation if it is still running.',
      }),
    activityPaused: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Will be set to true if the activity is paused.' }),
    activityReset: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Will be set to true if the activity was reset.\n Applies only to the current run.',
      }),
  })
  .openapi({ required: [] })
  .openapi('RecordActivityTaskHeartbeatResponse')

const RecordWorkerHeartbeatRequestSchema = z
  .object({
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'Namespace this worker belongs to.' }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the client who initiated this request.' }),
    workerHeartbeat: z.array(WorkerHeartbeatSchema).exactOptional(),
    resourceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Resource ID for routing. Contains the worker grouping key.' }),
  })
  .openapi({ required: [] })
  .openapi('RecordWorkerHeartbeatRequest')

const RecordWorkerHeartbeatResponseSchema = z.object({}).openapi('RecordWorkerHeartbeatResponse')

const RegisterNamespaceRequestSchema = z
  .object({
    namespace: z.string().exactOptional(),
    description: z.string().exactOptional(),
    ownerEmail: z.string().exactOptional(),
    workflowExecutionRetentionPeriod: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional(),
    clusters: z.array(ClusterReplicationConfigSchema).exactOptional(),
    activeClusterName: z.string().exactOptional(),
    data: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'A key-value map for any customized purpose.' }),
    securityToken: z.string().exactOptional(),
    isGlobalNamespace: z.boolean().exactOptional(),
    historyArchivalState: z
      .enum(['ARCHIVAL_STATE_UNSPECIFIED', 'ARCHIVAL_STATE_DISABLED', 'ARCHIVAL_STATE_ENABLED'])
      .exactOptional()
      .openapi({
        description:
          'If unspecified (ARCHIVAL_STATE_UNSPECIFIED) then default server configuration is used.',
      }),
    historyArchivalUri: z.string().exactOptional(),
    visibilityArchivalState: z
      .enum(['ARCHIVAL_STATE_UNSPECIFIED', 'ARCHIVAL_STATE_DISABLED', 'ARCHIVAL_STATE_ENABLED'])
      .exactOptional()
      .openapi({
        description:
          'If unspecified (ARCHIVAL_STATE_UNSPECIFIED) then default server configuration is used.',
      }),
    visibilityArchivalUri: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RegisterNamespaceRequest')

const RegisterNamespaceResponseSchema = z.object({}).openapi('RegisterNamespaceResponse')

const RequestCancelActivityExecutionRequestSchema = z
  .object({
    namespace: z.string().exactOptional(),
    activityId: z.string().exactOptional(),
    runId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Activity run ID, targets the latest run if run_id is empty.' }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the worker/client.' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Used to de-dupe cancellation requests.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Reason for requesting the cancellation, recorded and available via the PollActivityExecution API.\n Not propagated to a worker if an activity attempt is currently running.',
      }),
  })
  .openapi({ required: [] })
  .openapi('RequestCancelActivityExecutionRequest')

const RequestCancelActivityExecutionResponseSchema = z
  .object({})
  .openapi('RequestCancelActivityExecutionResponse')

const RequestCancelNexusOperationExecutionRequestSchema = z
  .object({
    namespace: z.string().exactOptional(),
    operationId: z.string().exactOptional(),
    runId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Operation run ID, targets the latest run if empty.' }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the client who initiated this request.' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Used to de-dupe cancellation requests.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Reason for requesting the cancellation, recorded and available via the DescribeNexusOperationExecution API.',
      }),
  })
  .openapi({ required: [] })
  .openapi('RequestCancelNexusOperationExecutionRequest')

const RequestCancelNexusOperationExecutionResponseSchema = z
  .object({})
  .openapi('RequestCancelNexusOperationExecutionResponse')

const RequestCancelWorkflowExecutionRequestSchema = z
  .object({
    namespace: z.string().exactOptional(),
    workflowExecution: WorkflowExecutionSchema.exactOptional(),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the worker/client' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Used to de-dupe cancellation requests' }),
    firstExecutionRunId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If set, this call will error if the most recent (if no run id is set on\n `workflow_execution`), or specified (if it is) workflow execution is not part of the same\n execution chain as this id.',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'Reason for requesting the cancellation' }),
    links: z
      .array(LinkSchema)
      .exactOptional()
      .openapi({ description: 'Links to be associated with the WorkflowExecutionCanceled event.' }),
  })
  .openapi({ required: [] })
  .openapi('RequestCancelWorkflowExecutionRequest')

const RequestCancelWorkflowExecutionResponseSchema = z
  .object({})
  .openapi('RequestCancelWorkflowExecutionResponse')

const ResetActivityExecutionRequestSchema = z
  .object({
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'Namespace of the workflow which scheduled this activity.' }),
    workflowId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If provided, targets a workflow activity for the given workflow ID.\n If empty, targets a standalone activity.',
      }),
    activityId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the activity to target.' }),
    runId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Run ID of the workflow or standalone activity.' }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the client who initiated this request.' }),
    resetHeartbeat: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates that activity should reset heartbeat details.\n This flag will be applied only to the new instance of the activity.',
      }),
    keepPaused: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If activity is paused, it will remain paused after reset' }),
    jitter: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'If set, and activity is in backoff, the activity will start at a random time within the specified jitter duration.\n (unless it is paused and keep_paused is set)',
      }),
    restoreOriginalOptions: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set, the activity options will be restored to the defaults.\n Default options are then options activity was created with.\n They are part of the first schedule event.',
      }),
    resourceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource ID for routing. Contains "workflow:{workflow_id}" for workflow activities or "activity:{activity_id}" for standalone activities.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ResetActivityExecutionRequest')

const ResetActivityExecutionResponseSchema = z.object({}).openapi('ResetActivityExecutionResponse')

const ResetActivityRequestSchema = z
  .object({
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'Namespace of the workflow which scheduled this activity.' }),
    execution: WorkflowExecutionSchema.exactOptional().openapi({
      description: 'Execution info of the workflow which scheduled this activity',
    }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the client who initiated this request.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Only activity with this ID will be reset.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Reset all running activities with of this type.' }),
    matchAll: z.boolean().exactOptional().openapi({ description: 'Reset all running activities.' }),
    resetHeartbeat: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates that activity should reset heartbeat details.\n This flag will be applied only to the new instance of the activity.',
      }),
    keepPaused: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If activity is paused, it will remain paused after reset' }),
    jitter: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'If set, and activity is in backoff, the activity will start at a random time within the specified jitter duration.\n (unless it is paused and keep_paused is set)',
      }),
    restoreOriginalOptions: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set, the activity options will be restored to the defaults.\n Default options are then options activity was created with.\n They are part of the first schedule event.',
      }),
  })
  .openapi({
    description:
      'NOTE: keep in sync with temporal.api.batch.v1.BatchOperationResetActivities\n Deprecated. Use `ResetActivityExecutionRequest`.',
    required: [],
  })
  .openapi('ResetActivityRequest')

const ResetActivityResponseSchema = z
  .object({})
  .openapi({ description: 'Deprecated. Use `ResetActivityExecutionRequest`.' })
  .openapi('ResetActivityResponse')

const ResetWorkflowExecutionRequestSchema = z
  .object({
    namespace: z.string().exactOptional(),
    workflowExecution: WorkflowExecutionSchema.exactOptional().openapi({
      description:
        'The workflow to reset. If this contains a run ID then the workflow will be reset back to the\n provided event ID in that run. Otherwise it will be reset to the provided event ID in the\n current run. In all cases the current run will be terminated and a new run started.',
    }),
    reason: z.string().exactOptional(),
    workflowTaskFinishEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of a `WORKFLOW_TASK_COMPLETED`,`WORKFLOW_TASK_TIMED_OUT`, `WORKFLOW_TASK_FAILED`, or\n `WORKFLOW_TASK_STARTED` event to reset to.',
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Used to de-dupe reset requests' }),
    resetReapplyType: z
      .enum([
        'RESET_REAPPLY_TYPE_UNSPECIFIED',
        'RESET_REAPPLY_TYPE_SIGNAL',
        'RESET_REAPPLY_TYPE_NONE',
        'RESET_REAPPLY_TYPE_ALL_ELIGIBLE',
      ])
      .exactOptional()
      .openapi({ description: 'Deprecated. Use `options`.\n Default: RESET_REAPPLY_TYPE_SIGNAL' }),
    resetReapplyExcludeTypes: z
      .array(
        z.enum([
          'RESET_REAPPLY_EXCLUDE_TYPE_UNSPECIFIED',
          'RESET_REAPPLY_EXCLUDE_TYPE_SIGNAL',
          'RESET_REAPPLY_EXCLUDE_TYPE_UPDATE',
          'RESET_REAPPLY_EXCLUDE_TYPE_NEXUS',
          'RESET_REAPPLY_EXCLUDE_TYPE_CANCEL_REQUEST',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'Event types not to be reapplied' }),
    postResetOperations: z
      .array(PostResetOperationSchema)
      .exactOptional()
      .openapi({
        description:
          'Operations to perform after the workflow has been reset. These operations will be applied\n to the *new* run of the workflow execution in the order they are provided.\n All operations are applied to the workflow before the first new workflow task is generated',
      }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the worker/client' }),
  })
  .openapi({ required: [] })
  .openapi('ResetWorkflowExecutionRequest')

const ResetWorkflowExecutionResponseSchema = z
  .object({ runId: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ResetWorkflowExecutionResponse')

const RespondActivityTaskCanceledByIdRequestSchema = z
  .object({
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'Namespace of the workflow which scheduled this activity' }),
    workflowId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the workflow which scheduled this activity, leave empty to target a standalone activity',
      }),
    runId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For a workflow activity - the run ID of the workflow which scheduled this activity.\n For a standalone activity - the run ID of the activity.',
      }),
    activityId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Id of the activity to confirm is cancelled' }),
    details: PayloadsSchema.exactOptional().openapi({
      description: 'Serialized additional information to attach to the cancellation',
    }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the worker/client' }),
    deploymentOptions: WorkerDeploymentOptionsSchema.exactOptional().openapi({
      description: 'Worker deployment options that user has set in the worker.',
    }),
    resourceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource ID for routing. Contains "workflow:workflow_id" or "activity:activity_id" for standalone activities.',
      }),
  })
  .openapi({ required: [] })
  .openapi('RespondActivityTaskCanceledByIdRequest')

const RespondActivityTaskCanceledByIdResponseSchema = z
  .object({})
  .openapi('RespondActivityTaskCanceledByIdResponse')

const RespondActivityTaskCanceledRequestSchema = z
  .object({
    taskToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The task token as received in `PollActivityTaskQueueResponse`' }),
    details: PayloadsSchema.exactOptional().openapi({
      description: 'Serialized additional information to attach to the cancellation',
    }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the worker/client' }),
    namespace: z.string().exactOptional(),
    resourceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource ID for routing. Contains the workflow ID or activity ID for standalone activities.',
      }),
    workerVersion: WorkerVersionStampSchema.exactOptional().openapi({
      description:
        "Version info of the worker who processed this task. This message's `build_id` field should\n always be set by SDKs. Workers opting into versioning will also set the `use_versioning`\n field to true. See message docstrings for more.\n Deprecated. Use `deployment_options` instead.",
    }),
    deployment: DeploymentSchema.exactOptional().openapi({
      description:
        'Deployment info of the worker that completed this task. Must be present if user has set\n `WorkerDeploymentOptions` regardless of versioning being enabled or not.\n Deprecated. Replaced with `deployment_options`.',
    }),
    deploymentOptions: WorkerDeploymentOptionsSchema.exactOptional().openapi({
      description: 'Worker deployment options that user has set in the worker.',
    }),
  })
  .openapi({ required: [] })
  .openapi('RespondActivityTaskCanceledRequest')

const RespondActivityTaskCanceledResponseSchema = z
  .object({})
  .openapi('RespondActivityTaskCanceledResponse')

const RespondActivityTaskCompletedByIdRequestSchema = z
  .object({
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'Namespace of the workflow which scheduled this activity' }),
    workflowId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the workflow which scheduled this activity, leave empty to target a standalone activity',
      }),
    runId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For a workflow activity - the run ID of the workflow which scheduled this activity.\n For a standalone activity - the run ID of the activity.',
      }),
    activityId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Id of the activity to complete' }),
    result: PayloadsSchema.exactOptional().openapi({
      description: 'The serialized result of activity execution',
    }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the worker/client' }),
    resourceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource ID for routing. Contains "workflow:workflow_id" or "activity:activity_id" for standalone activities.',
      }),
  })
  .openapi({ required: [] })
  .openapi('RespondActivityTaskCompletedByIdRequest')

const RespondActivityTaskCompletedByIdResponseSchema = z
  .object({})
  .openapi('RespondActivityTaskCompletedByIdResponse')

const RespondActivityTaskCompletedRequestSchema = z
  .object({
    taskToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The task token as received in `PollActivityTaskQueueResponse`' }),
    result: PayloadsSchema.exactOptional().openapi({
      description: 'The result of successfully executing the activity',
    }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the worker/client' }),
    namespace: z.string().exactOptional(),
    resourceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource ID for routing. Contains the workflow ID or activity ID for standalone activities.',
      }),
    workerVersion: WorkerVersionStampSchema.exactOptional().openapi({
      description:
        "Version info of the worker who processed this task. This message's `build_id` field should\n always be set by SDKs. Workers opting into versioning will also set the `use_versioning`\n field to true. See message docstrings for more.\n Deprecated. Use `deployment_options` instead.",
    }),
    deployment: DeploymentSchema.exactOptional().openapi({
      description:
        'Deployment info of the worker that completed this task. Must be present if user has set\n `WorkerDeploymentOptions` regardless of versioning being enabled or not.\n Deprecated. Replaced with `deployment_options`.',
    }),
    deploymentOptions: WorkerDeploymentOptionsSchema.exactOptional().openapi({
      description: 'Worker deployment options that user has set in the worker.',
    }),
  })
  .openapi({ required: [] })
  .openapi('RespondActivityTaskCompletedRequest')

const RespondActivityTaskCompletedResponseSchema = z
  .object({})
  .openapi('RespondActivityTaskCompletedResponse')

const RespondActivityTaskFailedByIdRequestSchema = z
  .object({
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'Namespace of the workflow which scheduled this activity' }),
    workflowId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the workflow which scheduled this activity, leave empty to target a standalone activity',
      }),
    runId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For a workflow activity - the run ID of the workflow which scheduled this activity.\n For a standalone activity - the run ID of the activity.',
      }),
    activityId: z.string().exactOptional().openapi({ description: 'Id of the activity to fail' }),
    failure: FailureSchema.exactOptional().openapi({ description: 'Detailed failure information' }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the worker/client' }),
    lastHeartbeatDetails: PayloadsSchema.exactOptional().openapi({
      description: 'Additional details to be stored as last activity heartbeat',
    }),
    resourceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource ID for routing. Contains "workflow:workflow_id" or "activity:activity_id" for standalone activities.',
      }),
  })
  .openapi({ required: [] })
  .openapi('RespondActivityTaskFailedByIdRequest')

const RespondActivityTaskFailedByIdResponseSchema = z
  .object({
    failures: z
      .array(FailureSchema)
      .exactOptional()
      .openapi({
        description:
          'Server validation failures could include\n last_heartbeat_details payload is too large, request failure is too large',
      }),
  })
  .openapi({ required: [] })
  .openapi('RespondActivityTaskFailedByIdResponse')

const RespondActivityTaskFailedRequestSchema = z
  .object({
    taskToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The task token as received in `PollActivityTaskQueueResponse`' }),
    failure: FailureSchema.exactOptional().openapi({ description: 'Detailed failure information' }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the worker/client' }),
    namespace: z.string().exactOptional(),
    resourceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource ID for routing. Contains the workflow ID or activity ID for standalone activities.',
      }),
    lastHeartbeatDetails: PayloadsSchema.exactOptional().openapi({
      description: 'Additional details to be stored as last activity heartbeat',
    }),
    workerVersion: WorkerVersionStampSchema.exactOptional().openapi({
      description:
        "Version info of the worker who processed this task. This message's `build_id` field should\n always be set by SDKs. Workers opting into versioning will also set the `use_versioning`\n field to true. See message docstrings for more.\n Deprecated. Use `deployment_options` instead.",
    }),
    deployment: DeploymentSchema.exactOptional().openapi({
      description:
        'Deployment info of the worker that completed this task. Must be present if user has set\n `WorkerDeploymentOptions` regardless of versioning being enabled or not.\n Deprecated. Replaced with `deployment_options`.',
    }),
    deploymentOptions: WorkerDeploymentOptionsSchema.exactOptional().openapi({
      description: 'Worker deployment options that user has set in the worker.',
    }),
  })
  .openapi({ required: [] })
  .openapi('RespondActivityTaskFailedRequest')

const RespondActivityTaskFailedResponseSchema = z
  .object({
    failures: z
      .array(FailureSchema)
      .exactOptional()
      .openapi({
        description:
          'Server validation failures could include\n last_heartbeat_details payload is too large, request failure is too large',
      }),
  })
  .openapi({ required: [] })
  .openapi('RespondActivityTaskFailedResponse')

const UpdateDeploymentMetadataSchema = z
  .object({
    upsertEntries: z.record(z.string(), PayloadSchema).exactOptional(),
    removeEntries: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of keys to remove from the metadata.' }),
  })
  .openapi({
    description:
      'Used as part of Deployment write APIs to update metadata attached to a deployment.\n Deprecated.',
    required: [],
  })
  .openapi('UpdateDeploymentMetadata')

const SetCurrentDeploymentRequestSchema = z
  .object({
    namespace: z.string().exactOptional(),
    deployment: DeploymentSchema.exactOptional(),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The identity of the client who initiated this request.' }),
    updateMetadata: UpdateDeploymentMetadataSchema.exactOptional().openapi({
      description:
        'Optional. Use to add or remove user-defined metadata entries. Metadata entries are exposed\n when describing a deployment. It is a good place for information such as operator name,\n links to internal deployment pipelines, etc.',
    }),
  })
  .openapi({
    description: '[cleanup-wv-pre-release] Pre-release deployment APIs, clean up later',
    required: [],
  })
  .openapi('SetCurrentDeploymentRequest')

const SetCurrentDeploymentResponseSchema = z
  .object({
    currentDeploymentInfo: DeploymentInfoSchema.exactOptional(),
    previousDeploymentInfo: DeploymentInfoSchema.exactOptional().openapi({
      description: 'Info of the deployment that was current before executing this operation.',
    }),
  })
  .openapi({
    description: '[cleanup-wv-pre-release] Pre-release deployment APIs, clean up later',
    required: [],
  })
  .openapi('SetCurrentDeploymentResponse')

const SetWorkerDeploymentCurrentVersionRequestSchema = z
  .object({
    namespace: z.string().exactOptional(),
    deploymentName: z.string().exactOptional(),
    version: z.string().exactOptional().openapi({ description: 'Deprecated. Use `build_id`.' }),
    buildId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The build id of the Version that you want to set as Current.\n Pass an empty value to set the Current Version to nil.\n A nil Current Version represents all the unversioned workers (those with `UNVERSIONED` (or unspecified) `WorkerVersioningMode`.)',
      }),
    conflictToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. This can be the value of conflict_token from a Describe, or another Worker\n Deployment API. Passing a non-nil conflict token will cause this request to fail if the\n Deployment's configuration has been modified between the API call that generated the\n token and this one.",
      }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The identity of the client who initiated this request.' }),
    ignoreMissingTaskQueues: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. By default this request would be rejected if not all the expected Task Queues are\n being polled by the new Version, to protect against accidental removal of Task Queues, or\n worker health issues. Pass `true` here to bypass this protection.\n The set of expected Task Queues is the set of all the Task Queues that were ever poller by\n the existing Current Version of the Deployment, with the following exclusions:\n   - Task Queues that are not used anymore (inferred by having empty backlog and a task\n     add_rate of 0.)\n   - Task Queues that are moved to another Worker Deployment (inferred by the Task Queue\n     having a different Current Version than the Current Version of this deployment.)\n WARNING: Do not set this flag unless you are sure that the missing task queue pollers are not\n needed. If the request is unexpectedly rejected due to missing pollers, then that means the\n pollers have not reached to the server yet. Only set this if you expect those pollers to\n never arrive.',
      }),
    allowNoPollers: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. By default this request will be rejected if no pollers have been seen for the proposed\n Current Version, in order to protect users from routing tasks to pollers that do not exist, leading\n to possible timeouts. Pass `true` here to bypass this protection.',
      }),
  })
  .openapi({ description: 'Set/unset the Current Version of a Worker Deployment.', required: [] })
  .openapi('SetWorkerDeploymentCurrentVersionRequest')

const SetWorkerDeploymentCurrentVersionResponseSchema = z
  .object({
    conflictToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This value is returned so that it can be optionally passed to APIs\n that write to the Worker Deployment state to ensure that the state\n did not change between this API call and a future write.',
      }),
    previousVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Deprecated. Use `previous_deployment_version`.' }),
    previousDeploymentVersion: WorkerDeploymentVersionSchema.exactOptional().openapi({
      description:
        'The version that was current before executing this operation.\n Deprecated in favor of idempotency of the API. Use `DescribeWorkerDeployment` to get the\n Current version info before calling this API. By passing the `conflict_token` got from the\n `DescribeWorkerDeployment` call to this API you can ensure there is no interfering changes\n between the two calls.',
    }),
  })
  .openapi({ required: [] })
  .openapi('SetWorkerDeploymentCurrentVersionResponse')

const SetWorkerDeploymentManagerRequestSchema = z
  .object({
    namespace: z.string().exactOptional(),
    deploymentName: z.string().exactOptional(),
    managerIdentity: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Arbitrary value for `manager_identity`.\n Empty will unset the field.',
      }),
    self: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True will set `manager_identity` to `identity`.' }),
    conflictToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. This can be the value of conflict_token from a Describe, or another Worker\n Deployment API. Passing a non-nil conflict token will cause this request to fail if the\n Deployment's configuration has been modified between the API call that generated the\n token and this one.",
      }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The identity of the client who initiated this request.' }),
  })
  .openapi({ description: 'Update the ManagerIdentity of a Worker Deployment.', required: [] })
  .openapi('SetWorkerDeploymentManagerRequest')

const SetWorkerDeploymentManagerResponseSchema = z
  .object({
    conflictToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This value is returned so that it can be optionally passed to APIs\n that write to the Worker Deployment state to ensure that the state\n did not change between this API call and a future write.',
      }),
    previousManagerIdentity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'What the `manager_identity` field was before this change.\n Deprecated in favor of idempotency of the API. Use `DescribeWorkerDeployment` to get the\n manager identity before calling this API. By passing the `conflict_token` got from the\n `DescribeWorkerDeployment` call to this API you can ensure there is no interfering changes\n between the two calls.',
      }),
  })
  .openapi({ required: [] })
  .openapi('SetWorkerDeploymentManagerResponse')

const SetWorkerDeploymentRampingVersionRequestSchema = z
  .object({
    namespace: z.string().exactOptional(),
    deploymentName: z.string().exactOptional(),
    version: z.string().exactOptional().openapi({ description: 'Deprecated. Use `build_id`.' }),
    buildId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The build id of the Version that you want to ramp traffic to.\n Pass an empty value to set the Ramping Version to nil.\n A nil Ramping Version represents all the unversioned workers (those with `UNVERSIONED` (or unspecified) `WorkerVersioningMode`.)',
      }),
    percentage: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Ramp percentage to set. Valid range: [0,100].' }),
    conflictToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. This can be the value of conflict_token from a Describe, or another Worker\n Deployment API. Passing a non-nil conflict token will cause this request to fail if the\n Deployment's configuration has been modified between the API call that generated the\n token and this one.",
      }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The identity of the client who initiated this request.' }),
    ignoreMissingTaskQueues: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Optional. By default this request would be rejected if not all the expected Task Queues are\n being polled by the new Version, to protect against accidental removal of Task Queues, or\n worker health issues. Pass `true` here to bypass this protection.\n The set of expected Task Queues equals to all the Task Queues ever polled from the existing\n Current Version of the Deployment, with the following exclusions:\n   - Task Queues that are not used anymore (inferred by having empty backlog and a task\n     add_rate of 0.)\n   - Task Queues that are moved to another Worker Deployment (inferred by the Task Queue\n     having a different Current Version than the Current Version of this deployment.)\n WARNING: Do not set this flag unless you are sure that the missing task queue poller are not\n needed. If the request is unexpectedly rejected due to missing pollers, then that means the\n pollers have not reached to the server yet. Only set this if you expect those pollers to\n never arrive.\n Note: this check only happens when the ramping version is about to change, not every time\n that the percentage changes. Also note that the check is against the deployment's Current\n Version, not the previous Ramping Version.",
      }),
    allowNoPollers: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. By default this request will be rejected if no pollers have been seen for the proposed\n Current Version, in order to protect users from routing tasks to pollers that do not exist, leading\n to possible timeouts. Pass `true` here to bypass this protection.',
      }),
  })
  .openapi({
    description: 'Set/unset the Ramping Version of a Worker Deployment and its ramp percentage.',
    required: [],
  })
  .openapi('SetWorkerDeploymentRampingVersionRequest')

const SetWorkerDeploymentRampingVersionResponseSchema = z
  .object({
    conflictToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This value is returned so that it can be optionally passed to APIs\n that write to the Worker Deployment state to ensure that the state\n did not change between this API call and a future write.',
      }),
    previousVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Deprecated. Use `previous_deployment_version`.' }),
    previousDeploymentVersion: WorkerDeploymentVersionSchema.exactOptional().openapi({
      description:
        'The version that was ramping before executing this operation.\n Deprecated in favor of idempotency of the API. Use `DescribeWorkerDeployment` to get the\n Ramping version info before calling this API. By passing the `conflict_token` got from the\n `DescribeWorkerDeployment` call to this API you can ensure there is no interfering changes\n between the two calls.',
    }),
    previousPercentage: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The ramping version percentage before executing this operation.\n Deprecated in favor of idempotency of the API. Use `DescribeWorkerDeployment` to get the\n Ramping version info before calling this API. By passing the `conflict_token` got from the\n `DescribeWorkerDeployment` call to this API you can ensure there is no interfering changes\n between the two calls.',
      }),
  })
  .openapi({ required: [] })
  .openapi('SetWorkerDeploymentRampingVersionResponse')

const SignalWithStartWorkflowExecutionRequestSchema = z
  .object({
    namespace: z.string().exactOptional(),
    workflowId: z.string().exactOptional(),
    workflowType: WorkflowTypeSchema.exactOptional(),
    taskQueue: TaskQueueSchema.exactOptional().openapi({
      description: 'The task queue to start this workflow on, if it will be started',
    }),
    input: PayloadsSchema.exactOptional().openapi({
      description:
        'Serialized arguments to the workflow. These are passed as arguments to the workflow function.',
    }),
    workflowExecutionTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description: 'Total workflow execution timeout including retries and continue as new',
      }),
    workflowRunTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({ description: 'Timeout of a single workflow run' }),
    workflowTaskTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({ description: 'Timeout of a single workflow task' }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the worker/client' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Used to de-dupe signal w/ start requests' }),
    workflowIdReusePolicy: z
      .enum([
        'WORKFLOW_ID_REUSE_POLICY_UNSPECIFIED',
        'WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE',
        'WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE_FAILED_ONLY',
        'WORKFLOW_ID_REUSE_POLICY_REJECT_DUPLICATE',
        'WORKFLOW_ID_REUSE_POLICY_TERMINATE_IF_RUNNING',
      ])
      .exactOptional()
      .openapi({
        description:
          'Defines whether to allow re-using the workflow id from a previously *closed* workflow.\n The default policy is WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE.\n\n See `workflow_id_reuse_policy` for handling a workflow id duplication with a *running* workflow.',
      }),
    workflowIdConflictPolicy: z
      .enum([
        'WORKFLOW_ID_CONFLICT_POLICY_UNSPECIFIED',
        'WORKFLOW_ID_CONFLICT_POLICY_FAIL',
        'WORKFLOW_ID_CONFLICT_POLICY_USE_EXISTING',
        'WORKFLOW_ID_CONFLICT_POLICY_TERMINATE_EXISTING',
      ])
      .exactOptional()
      .openapi({
        description:
          'Defines how to resolve a workflow id conflict with a *running* workflow.\n The default policy is WORKFLOW_ID_CONFLICT_POLICY_USE_EXISTING.\n Note that WORKFLOW_ID_CONFLICT_POLICY_FAIL is an invalid option.\n\n See `workflow_id_reuse_policy` for handling a workflow id duplication with a *closed* workflow.',
      }),
    signalName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The workflow author-defined name of the signal to send to the workflow',
      }),
    signalInput: PayloadsSchema.exactOptional().openapi({
      description: 'Serialized value(s) to provide with the signal',
    }),
    control: z.string().exactOptional().openapi({ description: 'Deprecated.' }),
    retryPolicy: RetryPolicySchema.exactOptional().openapi({
      description: 'Retry policy for the workflow',
    }),
    cronSchedule: z
      .string()
      .exactOptional()
      .openapi({
        description: 'See https://docs.temporal.io/docs/content/what-is-a-temporal-cron-job/',
      }),
    memo: MemoSchema.exactOptional(),
    searchAttributes: SearchAttributesSchema.exactOptional(),
    header: HeaderSchema.exactOptional(),
    workflowStartDelay: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'Time to wait before dispatching the first workflow task. Cannot be used with `cron_schedule`.\n Note that the signal will be delivered with the first workflow task. If the workflow gets\n another SignalWithStartWorkflow before the delay a workflow task will be dispatched immediately\n and the rest of the delay period will be ignored, even if that request also had a delay.\n Signal via SignalWorkflowExecution will not unblock the workflow.',
      }),
    userMetadata: UserMetadataSchema.exactOptional().openapi({
      description:
        'Metadata on the workflow if it is started. This is carried over to the WorkflowExecutionInfo\n for use by user interfaces to display the fixed as-of-start summary and details of the\n workflow.',
    }),
    links: z
      .array(LinkSchema)
      .exactOptional()
      .openapi({
        description:
          'Links to be associated with the WorkflowExecutionStarted and WorkflowExecutionSignaled events.',
      }),
    versioningOverride: VersioningOverrideSchema.exactOptional().openapi({
      description:
        'If set, takes precedence over the Versioning Behavior sent by the SDK on Workflow Task completion.\n To unset the override after the workflow is running, use UpdateWorkflowExecutionOptions.',
    }),
    priority: PrioritySchema.exactOptional().openapi({ description: 'Priority metadata' }),
    timeSkippingConfig: TimeSkippingConfigSchema.exactOptional().openapi({
      description: 'Time-skipping configuration. If not set, time skipping is disabled.',
    }),
  })
  .openapi({ required: [] })
  .openapi('SignalWithStartWorkflowExecutionRequest')

const SignalWithStartWorkflowExecutionResponseSchema = z
  .object({
    runId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The run id of the workflow that was started - or just signaled, if it was already running.',
      }),
    started: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, a new workflow was started.' }),
    signalLink: LinkSchema.exactOptional().openapi({
      description:
        'Link to be associated with the WorkflowExecutionSignaled event.\n Added on the response to propagate the backlink.\n Available from Temporal server 1.31 and up.',
    }),
  })
  .openapi({ required: [] })
  .openapi('SignalWithStartWorkflowExecutionResponse')

const SignalWorkflowExecutionRequestSchema = z
  .object({
    namespace: z.string().exactOptional(),
    workflowExecution: WorkflowExecutionSchema.exactOptional(),
    signalName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The workflow author-defined name of the signal to send to the workflow',
      }),
    input: PayloadsSchema.exactOptional().openapi({
      description: 'Serialized value(s) to provide with the signal',
    }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the worker/client' }),
    requestId: z.string().exactOptional().openapi({ description: 'Used to de-dupe sent signals' }),
    control: z.string().exactOptional().openapi({ description: 'Deprecated.' }),
    header: HeaderSchema.exactOptional().openapi({
      description:
        'Headers that are passed with the signal to the processing workflow.\n These can include things like auth or tracing tokens.',
    }),
    links: z
      .array(LinkSchema)
      .exactOptional()
      .openapi({ description: 'Links to be associated with the WorkflowExecutionSignaled event.' }),
  })
  .openapi({
    description:
      'Keep the parameters in sync with:\n   - temporal.api.batch.v1.BatchOperationSignal.\n   - temporal.api.workflow.v1.PostResetOperation.SignalWorkflow.',
    required: [],
  })
  .openapi('SignalWorkflowExecutionRequest')

const SignalWorkflowExecutionResponseSchema = z
  .object({
    link: LinkSchema.exactOptional().openapi({
      description:
        'Link to be associated with the WorkflowExecutionSignaled event.\n Added on the response to propagate the backlink.\n Available from Temporal server 1.31 and up.',
    }),
  })
  .openapi({ required: [] })
  .openapi('SignalWorkflowExecutionResponse')

const StartActivityExecutionRequestSchema = z
  .object({
    namespace: z.string().exactOptional(),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the client who initiated this request' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique identifier for this start request. Typically UUIDv4.' }),
    activityId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Identifier for this activity. Required. This identifier should be meaningful in the user's\n own system. It must be unique among activities in the same namespace, subject to the rules\n imposed by id_reuse_policy and id_conflict_policy.",
      }),
    activityType: ActivityTypeSchema.exactOptional().openapi({
      description:
        'The type of the activity, a string that corresponds to a registered activity on a worker.',
    }),
    taskQueue: TaskQueueSchema.exactOptional().openapi({
      description: 'Task queue to schedule this activity on.',
    }),
    scheduleToCloseTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'Indicates how long the caller is willing to wait for an activity completion. Limits how long\n retries will be attempted. Either this or `start_to_close_timeout` must be specified.\n\n (-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: "to" is used to indicate interval. --)',
      }),
    scheduleToStartTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'Limits time an activity task can stay in a task queue before a worker picks it up. This\n timeout is always non retryable, as all a retry would achieve is to put it back into the same\n queue. Defaults to `schedule_to_close_timeout` if not specified.\n\n (-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: "to" is used to indicate interval. --)',
      }),
    startToCloseTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'Maximum time an activity is allowed to execute after being picked up by a worker. This\n timeout is always retryable. Either this or `schedule_to_close_timeout` must be\n specified.\n\n (-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: "to" is used to indicate interval. --)',
      }),
    heartbeatTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({ description: 'Maximum permitted time between successful worker heartbeats.' }),
    retryPolicy: RetryPolicySchema.exactOptional().openapi({
      description:
        'The retry policy for the activity. Will never exceed `schedule_to_close_timeout`.',
    }),
    input: PayloadsSchema.exactOptional().openapi({
      description:
        'Serialized arguments to the activity. These are passed as arguments to the activity function.',
    }),
    idReusePolicy: z
      .enum([
        'ACTIVITY_ID_REUSE_POLICY_UNSPECIFIED',
        'ACTIVITY_ID_REUSE_POLICY_ALLOW_DUPLICATE',
        'ACTIVITY_ID_REUSE_POLICY_ALLOW_DUPLICATE_FAILED_ONLY',
        'ACTIVITY_ID_REUSE_POLICY_REJECT_DUPLICATE',
      ])
      .exactOptional()
      .openapi({
        description:
          'Defines whether to allow re-using the activity id from a previously *closed* activity.\n The default policy is ACTIVITY_ID_REUSE_POLICY_ALLOW_DUPLICATE.',
      }),
    idConflictPolicy: z
      .enum([
        'ACTIVITY_ID_CONFLICT_POLICY_UNSPECIFIED',
        'ACTIVITY_ID_CONFLICT_POLICY_FAIL',
        'ACTIVITY_ID_CONFLICT_POLICY_USE_EXISTING',
      ])
      .exactOptional()
      .openapi({
        description:
          'Defines how to resolve an activity id conflict with a *running* activity.\n The default policy is ACTIVITY_ID_CONFLICT_POLICY_FAIL.',
      }),
    searchAttributes: SearchAttributesSchema.exactOptional().openapi({
      description: 'Search attributes for indexing.',
    }),
    header: HeaderSchema.exactOptional().openapi({
      description: 'Header for context propagation and tracing purposes.',
    }),
    userMetadata: UserMetadataSchema.exactOptional().openapi({
      description:
        'Metadata for use by user interfaces to display the fixed as-of-start summary and details of the activity.',
    }),
    priority: PrioritySchema.exactOptional().openapi({ description: 'Priority metadata.' }),
    completionCallbacks: z
      .array(CallbackSchema)
      .exactOptional()
      .openapi({
        description:
          "Callbacks to be called by the server when this activity reaches a terminal state.\n Callback addresses must be whitelisted in the server's dynamic configuration.",
      }),
    links: z
      .array(LinkSchema)
      .exactOptional()
      .openapi({
        description:
          'Links to be associated with the activity. Callbacks may also have associated links;\n links already included with a callback should not be duplicated here.',
      }),
    onConflictOptions: OnConflictOptionsSchema.exactOptional().openapi({
      description:
        'Options for handling conflicts when using ACTIVITY_ID_CONFLICT_POLICY_USE_EXISTING.',
    }),
    startDelay: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'Time to wait before dispatching the first activity task. This delay is not applied to retry attempts.',
      }),
  })
  .openapi({ required: [] })
  .openapi('StartActivityExecutionRequest')

const StartActivityExecutionResponseSchema = z
  .object({
    runId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The run ID of the activity that was started - or used (via ACTIVITY_ID_CONFLICT_POLICY_USE_EXISTING).',
      }),
    started: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, a new activity was started.' }),
    link: LinkSchema.exactOptional().openapi({ description: 'Link to the started activity.' }),
  })
  .openapi({ required: [] })
  .openapi('StartActivityExecutionResponse')

const StartBatchOperationRequestSchema = z
  .object({
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'Namespace that contains the batch operation' }),
    visibilityQuery: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Visibility query defines the the group of workflow to apply the batch operation\n This field and `executions` are mutually exclusive',
      }),
    jobId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Job ID defines the unique ID for the batch job' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'Reason to perform the batch operation' }),
    executions: z
      .array(WorkflowExecutionSchema)
      .exactOptional()
      .openapi({
        description:
          'Executions to apply the batch operation\n This field and `visibility_query` are mutually exclusive',
      }),
    maxOperationsPerSecond: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          "Limit for the number of operations processed per second within this batch.\n Its purpose is to reduce the stress on the system caused by batch operations, which helps to prevent system\n overload and minimize potential delays in executing ongoing tasks for user workers.\n Note that when no explicit limit is provided, the server will operate according to its limit defined by the\n dynamic configuration key `worker.batcherRPS`. This also applies if the value in this field exceeds the\n server's configured limit.",
      }),
    terminationOperation: BatchOperationTerminationSchema.exactOptional(),
    signalOperation: BatchOperationSignalSchema.exactOptional(),
    cancellationOperation: BatchOperationCancellationSchema.exactOptional(),
    deletionOperation: BatchOperationDeletionSchema.exactOptional(),
    resetOperation: BatchOperationResetSchema.exactOptional(),
    updateWorkflowOptionsOperation:
      BatchOperationUpdateWorkflowExecutionOptionsSchema.exactOptional(),
    unpauseActivitiesOperation: BatchOperationUnpauseActivitiesSchema.exactOptional(),
    resetActivitiesOperation: BatchOperationResetActivitiesSchema.exactOptional(),
    updateActivityOptionsOperation: BatchOperationUpdateActivityOptionsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartBatchOperationRequest')

const StartBatchOperationResponseSchema = z.object({}).openapi('StartBatchOperationResponse')

const StartNexusOperationExecutionRequestSchema = z
  .object({
    namespace: z.string().exactOptional(),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the client who initiated this request.' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier for this caller-side start request. Typically UUIDv4.\n StartOperation requests sent to the handler will use a server-generated request ID.',
      }),
    operationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier for this operation. This is a caller-side ID, distinct from any internal\n operation identifiers generated by the handler. Must be unique among operations in the\n same namespace, subject to the rules imposed by id_reuse_policy and id_conflict_policy.',
      }),
    endpoint: z
      .string()
      .exactOptional()
      .openapi({
        description: "Endpoint name, resolved to a URL via the cluster's endpoint registry.",
      }),
    service: z.string().exactOptional().openapi({ description: 'Service name.' }),
    operation: z.string().exactOptional().openapi({ description: 'Operation name.' }),
    scheduleToCloseTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'Schedule-to-close timeout for this operation.\n Indicates how long the caller is willing to wait for operation completion.\n Calls are retried internally by the server.\n (-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: "to" is used to indicate interval. --)',
      }),
    scheduleToStartTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'Schedule-to-start timeout for this operation.\n Indicates how long the caller is willing to wait for the operation to be started (or completed if synchronous)\n by the handler.\n If not set or zero, no schedule-to-start timeout is enforced.\n (-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: "to" is used to indicate interval. --)',
      }),
    startToCloseTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'Start-to-close timeout for this operation.\n Indicates how long the caller is willing to wait for an asynchronous operation to complete after it has been\n started. Synchronous operations ignore this timeout.\n If not set or zero, no start-to-close timeout is enforced.\n (-- api-linter: core::0140::prepositions=disabled\n     aip.dev/not-precedent: "to" is used to indicate interval. --)',
      }),
    input: PayloadSchema.exactOptional().openapi({
      description: 'Serialized input to the operation. Passed as the request payload.',
    }),
    idReusePolicy: z
      .enum([
        'NEXUS_OPERATION_ID_REUSE_POLICY_UNSPECIFIED',
        'NEXUS_OPERATION_ID_REUSE_POLICY_ALLOW_DUPLICATE',
        'NEXUS_OPERATION_ID_REUSE_POLICY_ALLOW_DUPLICATE_FAILED_ONLY',
        'NEXUS_OPERATION_ID_REUSE_POLICY_REJECT_DUPLICATE',
      ])
      .exactOptional()
      .openapi({
        description:
          'Defines whether to allow re-using the operation id from a previously *closed* operation.\n The default policy is NEXUS_OPERATION_ID_REUSE_POLICY_ALLOW_DUPLICATE.',
      }),
    idConflictPolicy: z
      .enum([
        'NEXUS_OPERATION_ID_CONFLICT_POLICY_UNSPECIFIED',
        'NEXUS_OPERATION_ID_CONFLICT_POLICY_FAIL',
        'NEXUS_OPERATION_ID_CONFLICT_POLICY_USE_EXISTING',
      ])
      .exactOptional()
      .openapi({
        description:
          'Defines how to resolve an operation id conflict with a *running* operation.\n The default policy is NEXUS_OPERATION_ID_CONFLICT_POLICY_FAIL.',
      }),
    searchAttributes: SearchAttributesSchema.exactOptional().openapi({
      description: 'Search attributes for indexing.',
    }),
    nexusHeader: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Header to attach to the Nexus request.\n Users are responsible for encrypting sensitive data in this header as it is stored in workflow history and\n transmitted to external services as-is.\n This is useful for propagating tracing information.\n Note these headers are not the same as Temporal headers on internal activities and child workflows, these are\n transmitted to Nexus operations that may be external and are not traditional payloads.',
      }),
    userMetadata: UserMetadataSchema.exactOptional().openapi({
      description:
        'Metadata for use by user interfaces to display the fixed as-of-start summary and details of the operation.',
    }),
  })
  .openapi({ required: [] })
  .openapi('StartNexusOperationExecutionRequest')

const StartNexusOperationExecutionResponseSchema = z
  .object({
    runId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The run ID of the operation that was started - or used (via NEXUS_OPERATION_ID_CONFLICT_POLICY_USE_EXISTING).',
      }),
    started: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, a new operation was started.' }),
  })
  .openapi({ required: [] })
  .openapi('StartNexusOperationExecutionResponse')

const StartWorkflowExecutionRequestSchema = z
  .object({
    namespace: z.string().exactOptional(),
    workflowId: z.string().exactOptional(),
    workflowType: WorkflowTypeSchema.exactOptional(),
    taskQueue: TaskQueueSchema.exactOptional(),
    input: PayloadsSchema.exactOptional().openapi({
      description:
        'Serialized arguments to the workflow. These are passed as arguments to the workflow function.',
    }),
    workflowExecutionTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description: 'Total workflow execution timeout including retries and continue as new.',
      }),
    workflowRunTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({ description: 'Timeout of a single workflow run.' }),
    workflowTaskTimeout: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({ description: 'Timeout of a single workflow task.' }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the client who initiated this request' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique identifier for this start request. Typically UUIDv4.' }),
    workflowIdReusePolicy: z
      .enum([
        'WORKFLOW_ID_REUSE_POLICY_UNSPECIFIED',
        'WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE',
        'WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE_FAILED_ONLY',
        'WORKFLOW_ID_REUSE_POLICY_REJECT_DUPLICATE',
        'WORKFLOW_ID_REUSE_POLICY_TERMINATE_IF_RUNNING',
      ])
      .exactOptional()
      .openapi({
        description:
          'Defines whether to allow re-using the workflow id from a previously *closed* workflow.\n The default policy is WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE.\n\n See `workflow_id_conflict_policy` for handling a workflow id duplication with a *running* workflow.',
      }),
    workflowIdConflictPolicy: z
      .enum([
        'WORKFLOW_ID_CONFLICT_POLICY_UNSPECIFIED',
        'WORKFLOW_ID_CONFLICT_POLICY_FAIL',
        'WORKFLOW_ID_CONFLICT_POLICY_USE_EXISTING',
        'WORKFLOW_ID_CONFLICT_POLICY_TERMINATE_EXISTING',
      ])
      .exactOptional()
      .openapi({
        description:
          'Defines how to resolve a workflow id conflict with a *running* workflow.\n The default policy is WORKFLOW_ID_CONFLICT_POLICY_FAIL.\n\n See `workflow_id_reuse_policy` for handling a workflow id duplication with a *closed* workflow.',
      }),
    retryPolicy: RetryPolicySchema.exactOptional().openapi({
      description:
        'The retry policy for the workflow. Will never exceed `workflow_execution_timeout`.',
    }),
    cronSchedule: z
      .string()
      .exactOptional()
      .openapi({
        description: 'See https://docs.temporal.io/docs/content/what-is-a-temporal-cron-job/',
      }),
    memo: MemoSchema.exactOptional(),
    searchAttributes: SearchAttributesSchema.exactOptional(),
    header: HeaderSchema.exactOptional(),
    requestEagerExecution: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Request to get the first workflow task inline in the response bypassing matching service and worker polling.\n If set to `true` the caller is expected to have a worker available and capable of processing the task.\n The returned task will be marked as started and is expected to be completed by the specified\n `workflow_task_timeout`.',
      }),
    continuedFailure: FailureSchema.exactOptional().openapi({
      description:
        'These values will be available as ContinuedFailure and LastCompletionResult in the\n WorkflowExecutionStarted event and through SDKs. The are currently only used by the\n server itself (for the schedules feature) and are not intended to be exposed in\n StartWorkflowExecution.',
    }),
    lastCompletionResult: PayloadsSchema.exactOptional(),
    workflowStartDelay: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'Time to wait before dispatching the first workflow task. Cannot be used with `cron_schedule`.\n If the workflow gets a signal before the delay, a workflow task will be dispatched and the rest\n of the delay will be ignored.',
      }),
    completionCallbacks: z
      .array(CallbackSchema)
      .exactOptional()
      .openapi({
        description:
          "Callbacks to be called by the server when this workflow reaches a terminal state.\n If the workflow continues-as-new, these callbacks will be carried over to the new execution.\n Callback addresses must be whitelisted in the server's dynamic configuration.",
      }),
    userMetadata: UserMetadataSchema.exactOptional().openapi({
      description:
        'Metadata on the workflow if it is started. This is carried over to the WorkflowExecutionInfo\n for use by user interfaces to display the fixed as-of-start summary and details of the\n workflow.',
    }),
    links: z
      .array(LinkSchema)
      .exactOptional()
      .openapi({ description: 'Links to be associated with the workflow.' }),
    versioningOverride: VersioningOverrideSchema.exactOptional().openapi({
      description:
        'If set, takes precedence over the Versioning Behavior sent by the SDK on Workflow Task completion.\n To unset the override after the workflow is running, use UpdateWorkflowExecutionOptions.',
    }),
    onConflictOptions: OnConflictOptionsSchema.exactOptional().openapi({
      description:
        "Defines actions to be done to the existing running workflow when the conflict policy\n WORKFLOW_ID_CONFLICT_POLICY_USE_EXISTING is used. If not set (ie., nil value) or set to a\n empty object (ie., all options with default value), it won't do anything to the existing\n running workflow. If set, it will add a history event to the running workflow.",
    }),
    priority: PrioritySchema.exactOptional().openapi({ description: 'Priority metadata' }),
    eagerWorkerDeploymentOptions: WorkerDeploymentOptionsSchema.exactOptional().openapi({
      description:
        'Deployment Options of the worker who will process the eager task. Passed when `request_eager_execution=true`.',
    }),
    timeSkippingConfig: TimeSkippingConfigSchema.exactOptional().openapi({
      description: 'Time-skipping configuration. If not set, time skipping is disabled.',
    }),
  })
  .openapi({ required: [] })
  .openapi('StartWorkflowExecutionRequest')

const StartWorkflowExecutionResponseSchema = z
  .object({
    runId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The run id of the workflow that was started - or used (via WorkflowIdConflictPolicy USE_EXISTING).',
      }),
    started: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, a new workflow was started.' }),
    status: z
      .enum([
        'WORKFLOW_EXECUTION_STATUS_UNSPECIFIED',
        'WORKFLOW_EXECUTION_STATUS_RUNNING',
        'WORKFLOW_EXECUTION_STATUS_COMPLETED',
        'WORKFLOW_EXECUTION_STATUS_FAILED',
        'WORKFLOW_EXECUTION_STATUS_CANCELED',
        'WORKFLOW_EXECUTION_STATUS_TERMINATED',
        'WORKFLOW_EXECUTION_STATUS_CONTINUED_AS_NEW',
        'WORKFLOW_EXECUTION_STATUS_TIMED_OUT',
        'WORKFLOW_EXECUTION_STATUS_PAUSED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Current execution status of the workflow. Typically remains WORKFLOW_EXECUTION_STATUS_RUNNING\n unless a de-dupe occurs or in specific scenarios handled within the ExecuteMultiOperation (refer to its docs).',
      }),
    eagerWorkflowTask: PollWorkflowTaskQueueResponseSchema.exactOptional().openapi({
      description:
        'When `request_eager_execution` is set on the `StartWorkflowExecutionRequest`, the server - if supported - will\n return the first workflow task to be eagerly executed.\n The caller is expected to have a worker available to process the task.',
    }),
    link: LinkSchema.exactOptional().openapi({ description: 'Link to the workflow event.' }),
  })
  .openapi({ required: [] })
  .openapi('StartWorkflowExecutionResponse')

const StatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The status code, which should be an enum value of [google.rpc.Code][google.rpc.Code].',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the [google.rpc.Status.details][google.rpc.Status.details] field, or localized by the client.',
      }),
    details: z
      .array(GoogleProtobufAnySchema)
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details.  There is a common set of message types for APIs to use.',
      }),
  })
  .openapi({
    description:
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('Status')

const StopBatchOperationRequestSchema = z
  .object({
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'Namespace that contains the batch operation' }),
    jobId: z.string().exactOptional().openapi({ description: 'Batch job id' }),
    reason: z.string().exactOptional().openapi({ description: 'Reason to stop a batch operation' }),
    identity: z.string().exactOptional().openapi({ description: 'Identity of the operator' }),
  })
  .openapi({ required: [] })
  .openapi('StopBatchOperationRequest')

const StopBatchOperationResponseSchema = z.object({}).openapi('StopBatchOperationResponse')

const TerminateActivityExecutionRequestSchema = z
  .object({
    namespace: z.string().exactOptional(),
    activityId: z.string().exactOptional(),
    runId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Activity run ID, targets the latest run if run_id is empty.' }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the worker/client.' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Used to de-dupe termination requests.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Reason for requesting the termination, recorded in in the activity's result failure outcome.",
      }),
  })
  .openapi({ required: [] })
  .openapi('TerminateActivityExecutionRequest')

const TerminateActivityExecutionResponseSchema = z
  .object({})
  .openapi('TerminateActivityExecutionResponse')

const TerminateNexusOperationExecutionRequestSchema = z
  .object({
    namespace: z.string().exactOptional(),
    operationId: z.string().exactOptional(),
    runId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Operation run ID, targets the latest run if empty.' }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the client who initiated this request.' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Used to de-dupe termination requests.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Reason for requesting the termination, recorded in the operation's result failure outcome.",
      }),
  })
  .openapi({ required: [] })
  .openapi('TerminateNexusOperationExecutionRequest')

const TerminateNexusOperationExecutionResponseSchema = z
  .object({})
  .openapi('TerminateNexusOperationExecutionResponse')

const TerminateWorkflowExecutionRequestSchema = z
  .object({
    namespace: z.string().exactOptional(),
    workflowExecution: WorkflowExecutionSchema.exactOptional(),
    reason: z.string().exactOptional(),
    details: PayloadsSchema.exactOptional().openapi({
      description: 'Serialized additional information to attach to the termination event',
    }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the worker/client' }),
    firstExecutionRunId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If set, this call will error if the most recent (if no run id is set on\n `workflow_execution`), or specified (if it is) workflow execution is not part of the same\n execution chain as this id.',
      }),
    links: z
      .array(LinkSchema)
      .exactOptional()
      .openapi({
        description: 'Links to be associated with the WorkflowExecutionTerminated event.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TerminateWorkflowExecutionRequest')

const TerminateWorkflowExecutionResponseSchema = z
  .object({})
  .openapi('TerminateWorkflowExecutionResponse')

const TriggerWorkflowRuleRequestSchema = z
  .object({
    namespace: z.string().exactOptional(),
    execution: WorkflowExecutionSchema.exactOptional().openapi({
      description: 'Execution info of the workflow which scheduled this activity',
    }),
    id: z.string().exactOptional(),
    spec: WorkflowRuleSpecSchema.exactOptional().openapi({
      description: 'Note: Rule ID and expiration date are not used in the trigger request.',
    }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the client who initiated this request' }),
  })
  .openapi({ required: [] })
  .openapi('TriggerWorkflowRuleRequest')

const TriggerWorkflowRuleResponseSchema = z
  .object({
    applied: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True is the rule was applied, based on the rule conditions (predicate/visibility_query).',
      }),
  })
  .openapi({ required: [] })
  .openapi('TriggerWorkflowRuleResponse')

const UnpauseActivityExecutionRequestSchema = z
  .object({
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'Namespace of the workflow which scheduled this activity.' }),
    workflowId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If provided, targets a workflow activity for the given workflow ID.\n If empty, targets a standalone activity.',
      }),
    activityId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the activity to target.' }),
    runId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Run ID of the workflow or standalone activity.' }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the client who initiated this request.' }),
    resetAttempts: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Providing this flag will also reset the number of attempts.' }),
    resetHeartbeat: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Providing this flag will also reset the heartbeat details.' }),
    reason: z.string().exactOptional().openapi({ description: 'Reason to unpause the activity.' }),
    jitter: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'If set, the activity will start at a random time within the specified jitter duration.',
      }),
    resourceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource ID for routing. Contains "workflow:{workflow_id}" for workflow activities or "activity:{activity_id}" for standalone activities.',
      }),
  })
  .openapi({ required: [] })
  .openapi('UnpauseActivityExecutionRequest')

const UnpauseActivityExecutionResponseSchema = z
  .object({})
  .openapi('UnpauseActivityExecutionResponse')

const UnpauseActivityRequestSchema = z
  .object({
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'Namespace of the workflow which scheduled this activity.' }),
    execution: WorkflowExecutionSchema.exactOptional().openapi({
      description: 'Execution info of the workflow which scheduled this activity',
    }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the client who initiated this request.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Only the activity with this ID will be unpaused.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unpause all running activities with of this type.' }),
    unpauseAll: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Unpause all running activities.' }),
    resetAttempts: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Providing this flag will also reset the number of attempts.' }),
    resetHeartbeat: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Providing this flag will also reset the heartbeat details.' }),
    jitter: z
      .string()
      .regex(/^-?(?:0|[1-9][0-9]{0,11})(?:\.[0-9]{1,9})?s$/)
      .exactOptional()
      .openapi({
        description:
          'If set, the activity will start at a random time within the specified jitter duration.',
      }),
  })
  .openapi({ description: 'Deprecated. Use `UnpauseActivityExecutionRequest`.', required: [] })
  .openapi('UnpauseActivityRequest')

const UnpauseActivityResponseSchema = z
  .object({})
  .openapi({ description: 'Deprecated. Use `UnpauseActivityExecutionResponse`.' })
  .openapi('UnpauseActivityResponse')

const UnpauseWorkflowExecutionRequestSchema = z
  .object({
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'Namespace of the workflow to unpause.' }),
    workflowId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the workflow execution to be paused. Required.' }),
    runId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Run ID of the workflow execution to be paused. Optional. If not provided, the current run of the workflow will be paused.',
      }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the client who initiated this request.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'Reason to unpause the workflow execution.' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier for this unpause request for idempotence. Typically UUIDv4.',
      }),
  })
  .openapi({ required: [] })
  .openapi('UnpauseWorkflowExecutionRequest')

const UnpauseWorkflowExecutionResponseSchema = z
  .object({})
  .openapi({ description: 'Response to a successful UnpauseWorkflowExecution request.' })
  .openapi('UnpauseWorkflowExecutionResponse')

const UpdateActivityExecutionOptionsRequestSchema = z
  .object({
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'Namespace of the workflow which scheduled this activity' }),
    workflowId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If provided, targets a workflow activity for the given workflow ID.\n If empty, targets a standalone activity.',
      }),
    activityId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the activity to target.' }),
    runId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Run ID of the workflow or standalone activity.' }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the client who initiated this request' }),
    activityOptions: ActivityOptionsSchema.exactOptional().openapi({
      description: 'Activity options. Partial updates are accepted and controlled by update_mask',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({ description: 'Controls which fields from `activity_options` will be applied' }),
    restoreOriginal: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set, the activity options will be restored to the default.\n Default options are then options activity was created with.\n They are part of the first schedule event.\n This flag cannot be combined with any other option; if you supply\n restore_original together with other options, the request will be rejected.',
      }),
    resourceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource ID for routing. Contains "workflow:{workflow_id}" for workflow activities or "activity:{activity_id}" for standalone activities.',
      }),
  })
  .openapi({ required: [] })
  .openapi('UpdateActivityExecutionOptionsRequest')

const UpdateActivityExecutionOptionsResponseSchema = z
  .object({
    activityOptions: ActivityOptionsSchema.exactOptional().openapi({
      description: 'Activity options after an update',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateActivityExecutionOptionsResponse')

const UpdateActivityOptionsRequestSchema = z
  .object({
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'Namespace of the workflow which scheduled this activity' }),
    execution: WorkflowExecutionSchema.exactOptional().openapi({
      description: 'Execution info of the workflow which scheduled this activity',
    }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the client who initiated this request' }),
    activityOptions: ActivityOptionsSchema.exactOptional().openapi({
      description: 'Activity options. Partial updates are accepted and controlled by update_mask',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({ description: 'Controls which fields from `activity_options` will be applied' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Only activity with this ID will be updated.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Update all running activities of this type.' }),
    matchAll: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Update all running activities.' }),
    restoreOriginal: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set, the activity options will be restored to the default.\n Default options are then options activity was created with.\n They are part of the first schedule event.\n This flag cannot be combined with any other option; if you supply\n restore_original together with other options, the request will be rejected.',
      }),
  })
  .openapi({
    description:
      'NOTE: keep in sync with temporal.api.batch.v1.BatchOperationUpdateActivityOptions\n Deprecated. Use `UpdateActivityExecutionOptionsRequest`.',
    required: [],
  })
  .openapi('UpdateActivityOptionsRequest')

const UpdateActivityOptionsResponseSchema = z
  .object({
    activityOptions: ActivityOptionsSchema.exactOptional().openapi({
      description: 'Activity options after an update',
    }),
  })
  .openapi({
    description: 'Deprecated. Use `UpdateActivityExecutionOptionsResponse`.',
    required: [],
  })
  .openapi('UpdateActivityOptionsResponse')

const UpdateNamespaceInfoSchema = z
  .object({
    description: z.string().exactOptional(),
    ownerEmail: z.string().exactOptional(),
    data: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'A key-value map for any customized purpose.\n If data already exists on the namespace,\n this will merge with the existing key values.',
      }),
    state: z
      .enum([
        'NAMESPACE_STATE_UNSPECIFIED',
        'NAMESPACE_STATE_REGISTERED',
        'NAMESPACE_STATE_DEPRECATED',
        'NAMESPACE_STATE_DELETED',
      ])
      .exactOptional()
      .openapi({
        description:
          'New namespace state, server will reject if transition is not allowed.\n Allowed transitions are:\n  Registered -> [ Deleted | Deprecated | Handover ]\n  Handover -> [ Registered ]\n Default is NAMESPACE_STATE_UNSPECIFIED which is do not change state.',
      }),
  })
  .openapi({ required: [] })
  .openapi('UpdateNamespaceInfo')

const UpdateNamespaceRequestSchema = z
  .object({
    namespace: z.string().exactOptional(),
    updateInfo: UpdateNamespaceInfoSchema.exactOptional(),
    config: NamespaceConfigSchema.exactOptional(),
    replicationConfig: NamespaceReplicationConfigSchema.exactOptional(),
    securityToken: z.string().exactOptional(),
    deleteBadBinary: z.string().exactOptional(),
    promoteNamespace: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'promote local namespace to global namespace. Ignored if namespace is already global namespace.',
      }),
  })
  .openapi({ required: [] })
  .openapi('UpdateNamespaceRequest')

const UpdateNamespaceResponseSchema = z
  .object({
    namespaceInfo: NamespaceInfoSchema.exactOptional(),
    config: NamespaceConfigSchema.exactOptional(),
    replicationConfig: NamespaceReplicationConfigSchema.exactOptional(),
    failoverVersion: z.string().exactOptional(),
    isGlobalNamespace: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateNamespaceResponse')

const UpdateNexusEndpointRequestSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'Server-generated unique endpoint ID.' }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'Data version for this endpoint. Must match current version.' }),
    spec: EndpointSpecSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateNexusEndpointRequest')

const UpdateNexusEndpointResponseSchema = z
  .object({
    endpoint: EndpointSchema.exactOptional().openapi({
      description: 'Data post acceptance. Can be used to issue additional updates to this record.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateNexusEndpointResponse')

const UpdateRefSchema = z
  .object({
    workflowExecution: WorkflowExecutionSchema.exactOptional(),
    updateId: z.string().exactOptional(),
  })
  .openapi({
    description: 'The data needed by a client to refer to a previously invoked Workflow Update.',
    required: [],
  })
  .openapi('UpdateRef')

const UpdateScheduleRequestSchema = z
  .object({
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'The namespace of the schedule to update.' }),
    scheduleId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the schedule to update.' }),
    schedule: ScheduleSchema.exactOptional().openapi({
      description:
        'The new schedule. The four main fields of the schedule (spec, action,\n policies, state) are replaced completely by the values in this message.',
    }),
    conflictToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This can be the value of conflict_token from a DescribeScheduleResponse,\n which will cause this request to fail if the schedule has been modified\n between the Describe and this Update.\n If missing, the schedule will be updated unconditionally.',
      }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the client who initiated this request.' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier for this update request for idempotence. Typically UUIDv4.',
      }),
    searchAttributes: SearchAttributesSchema.exactOptional().openapi({
      description:
        'Schedule search attributes to be updated.\n Do not set this field if you do not want to update the search attributes.\n A non-null empty object will set the search attributes to an empty map.\n Note: you cannot only update the search attributes with `UpdateScheduleRequest`,\n you must also set the `schedule` field; otherwise, it will unset the schedule.',
    }),
    memo: MemoSchema.exactOptional().openapi({
      description:
        'Schedule memo to replace. If set, replaces the entire memo.\n Do not set this field if you do not want to update the memo.\n A non-null empty object will clear the memo.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateScheduleRequest')

const UpdateScheduleResponseSchema = z.object({}).openapi('UpdateScheduleResponse')

const UpdateTaskQueueConfigRequestRateLimitUpdateSchema = z
  .object({
    rateLimit: RateLimitSchema.exactOptional().openapi({ description: 'Rate Limit to be updated' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'Reason for why the rate limit was set.' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateTaskQueueConfigRequestRateLimitUpdate')

const UpdateTaskQueueConfigRequestSchema = z
  .object({
    namespace: z.string().exactOptional(),
    identity: z.string().exactOptional(),
    taskQueue: z
      .string()
      .exactOptional()
      .openapi({ description: 'Selects the task queue to update.' }),
    taskQueueType: z
      .enum([
        'TASK_QUEUE_TYPE_UNSPECIFIED',
        'TASK_QUEUE_TYPE_WORKFLOW',
        'TASK_QUEUE_TYPE_ACTIVITY',
        'TASK_QUEUE_TYPE_NEXUS',
      ])
      .exactOptional(),
    updateQueueRateLimit: UpdateTaskQueueConfigRequestRateLimitUpdateSchema.exactOptional().openapi(
      {
        description:
          'Update to queue-wide rate limit.\n If not set, this configuration is unchanged.\n NOTE: A limit set by the worker is overriden; and restored again when reset.\n If the `rate_limit` field in the `RateLimitUpdate` is missing, remove the existing rate limit.',
      },
    ),
    updateFairnessKeyRateLimitDefault:
      UpdateTaskQueueConfigRequestRateLimitUpdateSchema.exactOptional().openapi({
        description:
          'Update to the default fairness key rate limit.\n If not set, this configuration is unchanged.\n If the `rate_limit` field in the `RateLimitUpdate` is missing, remove the existing rate limit.',
      }),
    setFairnessWeightOverrides: z
      .record(z.string(), z.float32())
      .exactOptional()
      .openapi({
        description:
          'If set, overrides the fairness weight for each specified fairness key.\n Fairness keys not listed in this map will keep their existing overrides (if any).',
      }),
    unsetFairnessWeightOverrides: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'If set, removes any existing fairness weight overrides for each specified fairness key.\n Fairness weights for corresponding keys fall back to the values set during task creation (if any),\n or to the default weight of 1.0.',
      }),
  })
  .openapi({ required: [] })
  .openapi('UpdateTaskQueueConfigRequest')

const UpdateTaskQueueConfigResponseSchema = z
  .object({ config: TaskQueueConfigSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateTaskQueueConfigResponse')

const UpdateWorkerConfigRequestSchema = z
  .object({
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'Namespace this worker belongs to.' }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identity of the client who initiated this request.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Reason for sending worker command, can be used for audit purpose.',
      }),
    workerConfig: WorkerConfigSchema.exactOptional().openapi({
      description:
        'Partial updates are accepted and controlled by update_mask.\n The worker configuration to set.',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({ description: 'Controls which fields from `worker_config` will be applied' }),
    selector: WorkerSelectorSchema.exactOptional().openapi({
      description: 'Defines which workers should receive this command.',
    }),
    resourceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Resource ID for routing. Contains the worker grouping key.' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateWorkerConfigRequest')

const UpdateWorkerConfigResponseSchema = z
  .object({
    workerConfig: WorkerConfigSchema.exactOptional().openapi({
      description:
        'The worker configuration. Will be returned if the command was sent to a single worker.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateWorkerConfigResponse')

const UpdateWorkerDeploymentVersionComputeConfigRequestSchema = z
  .object({
    namespace: z.string().exactOptional(),
    deploymentVersion: WorkerDeploymentVersionSchema.exactOptional().openapi({
      description: 'Required.',
    }),
    computeConfigScalingGroups: z
      .record(z.string(), ComputeConfigScalingGroupUpdateSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. Contains the compute config scaling groups to add or update for the Worker\n Deployment.',
      }),
    removeComputeConfigScalingGroups: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Contains the compute config scaling groups to remove from the Worker Deployment.',
      }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The identity of the client who initiated this request.' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier for this create request for idempotence. Typically UUIDv4.\n If a second request with the same ID is recieved, it is considered a successful no-op.\n Retrying with a different request ID for the same deployment name + build ID is an error.',
      }),
  })
  .openapi({
    description: 'Used to update the compute config of a Worker Deployment Version.',
    required: [],
  })
  .openapi('UpdateWorkerDeploymentVersionComputeConfigRequest')

const UpdateWorkerDeploymentVersionComputeConfigResponseSchema = z
  .object({})
  .openapi('UpdateWorkerDeploymentVersionComputeConfigResponse')

const UpdateWorkerDeploymentVersionMetadataRequestSchema = z
  .object({
    namespace: z.string().exactOptional(),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'Deprecated. Use `deployment_version`.' }),
    deploymentVersion: WorkerDeploymentVersionSchema.exactOptional().openapi({
      description: 'Required.',
    }),
    upsertEntries: z.record(z.string(), PayloadSchema).exactOptional(),
    removeEntries: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of keys to remove from the metadata.' }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The identity of the client who initiated this request.' }),
  })
  .openapi({
    description: 'Used to update the user-defined metadata of a Worker Deployment Version.',
    required: [],
  })
  .openapi('UpdateWorkerDeploymentVersionMetadataRequest')

const UpdateWorkerDeploymentVersionMetadataResponseSchema = z
  .object({
    metadata: VersionMetadataSchema.exactOptional().openapi({
      description: 'Full metadata after performing the update.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateWorkerDeploymentVersionMetadataResponse')

const UpdateWorkflowExecutionOptionsRequestSchema = z
  .object({
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'The namespace name of the target Workflow.' }),
    workflowExecution: WorkflowExecutionSchema.exactOptional().openapi({
      description:
        'The target Workflow Id and (optionally) a specific Run Id thereof.\n (-- api-linter: core::0203::optional=disabled\n     aip.dev/not-precedent: false positive triggered by the word "optional" --)',
    }),
    workflowExecutionOptions: WorkflowExecutionOptionsSchema.exactOptional().openapi({
      description:
        'Workflow Execution options. Partial updates are accepted and controlled by update_mask.',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Controls which fields from `workflow_execution_options` will be applied.\n To unset a field, set it to null and use the update mask to indicate that it should be mutated.',
      }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The identity of the client who initiated this request.' }),
  })
  .openapi({
    description:
      'Keep the parameters in sync with:\n   - temporal.api.batch.v1.BatchOperationUpdateWorkflowExecutionOptions.\n   - temporal.api.workflow.v1.PostResetOperation.UpdateWorkflowOptions.',
    required: [],
  })
  .openapi('UpdateWorkflowExecutionOptionsRequest')

const UpdateWorkflowExecutionOptionsResponseSchema = z
  .object({
    workflowExecutionOptions: WorkflowExecutionOptionsSchema.exactOptional().openapi({
      description: 'Workflow Execution options after update.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateWorkflowExecutionOptionsResponse')

const WaitPolicySchema = z
  .object({
    lifecycleStage: z
      .enum([
        'UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_UNSPECIFIED',
        'UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_ADMITTED',
        'UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_ACCEPTED',
        'UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_COMPLETED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Indicates the Update lifecycle stage that the Update must reach before\n API call is returned.\n NOTE: This field works together with API call timeout which is limited by\n server timeout (maximum wait time). If server timeout is expired before\n user specified timeout, API call returns even if specified stage is not reached.',
      }),
  })
  .openapi({ description: "Specifies client's intent to wait for Update results.", required: [] })
  .openapi('WaitPolicy')

const UpdateWorkflowExecutionRequestSchema = z
  .object({
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'The namespace name of the target Workflow.' }),
    workflowExecution: WorkflowExecutionSchema.exactOptional().openapi({
      description:
        'The target Workflow Id and (optionally) a specific Run Id thereof.\n (-- api-linter: core::0203::optional=disabled\n     aip.dev/not-precedent: false positive triggered by the word "optional" --)',
    }),
    firstExecutionRunId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If set, this call will error if the most recent (if no Run Id is set on\n `workflow_execution`), or specified (if it is) Workflow Execution is not\n part of the same execution chain as this Id.',
      }),
    waitPolicy: WaitPolicySchema.exactOptional().openapi({
      description:
        "Specifies client's intent to wait for Update results.\n NOTE: This field works together with API call timeout which is limited by\n server timeout (maximum wait time). If server timeout is expired before\n user specified timeout, API call returns even if specified stage is not reached.\n Actual reached stage will be included in the response.",
    }),
    request: RequestSchema.exactOptional().openapi({
      description:
        'The request information that will be delivered all the way down to the\n Workflow Execution.',
    }),
  })
  .openapi({
    description:
      "(-- api-linter: core::0134=disabled\n     aip.dev/not-precedent: Update RPCs don't follow Google API format. --)",
    required: [],
  })
  .openapi('UpdateWorkflowExecutionRequest')

const UpdateWorkflowExecutionResponseSchema = z
  .object({
    updateRef: UpdateRefSchema.exactOptional().openapi({
      description: 'Enough information for subsequent poll calls if needed. Never null.',
    }),
    outcome: OutcomeSchema.exactOptional().openapi({
      description:
        'The outcome of the Update if and only if the Workflow Update\n has completed. If this response is being returned before the Update has\n completed then this field will not be set.',
    }),
    stage: z
      .enum([
        'UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_UNSPECIFIED',
        'UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_ADMITTED',
        'UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_ACCEPTED',
        'UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_COMPLETED',
      ])
      .exactOptional()
      .openapi({
        description:
          "The most advanced lifecycle stage that the Update is known to have\n reached, where lifecycle stages are ordered\n UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_UNSPECIFIED <\n UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_ADMITTED <\n UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_ACCEPTED <\n UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_COMPLETED.\n UNSPECIFIED will be returned if and only if the server's maximum wait\n time was reached before the Update reached the stage specified in the\n request WaitPolicy, and before the context deadline expired; clients may\n may then retry the call as needed.",
      }),
  })
  .openapi({ required: [] })
  .openapi('UpdateWorkflowExecutionResponse')

const ValidateWorkerDeploymentVersionComputeConfigRequestSchema = z
  .object({
    namespace: z.string().exactOptional(),
    deploymentVersion: WorkerDeploymentVersionSchema.exactOptional().openapi({
      description: 'Required.',
    }),
    computeConfigScalingGroups: z
      .record(z.string(), ComputeConfigScalingGroupUpdateSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. Contains the compute config scaling groups to add or update for the Worker\n Deployment.',
      }),
    removeComputeConfigScalingGroups: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Contains the compute config scaling groups to remove from the Worker Deployment.',
      }),
    identity: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The identity of the client who initiated this request.' }),
  })
  .openapi({
    description:
      'Used to validate the compute config without attaching it to a Worker Deployment Version.',
    required: [],
  })
  .openapi('ValidateWorkerDeploymentVersionComputeConfigRequest')

const ValidateWorkerDeploymentVersionComputeConfigResponseSchema = z
  .object({})
  .openapi('ValidateWorkerDeploymentVersionComputeConfigResponse')

export const getApiV1ClusterInfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/cluster-info',
  tags: ['WorkflowService'],
  description: 'GetClusterInfo returns information about temporal cluster',
  operationId: 'GetClusterInfo',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetClusterInfoResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiV1NamespacesRoute = createRoute({
  method: 'get',
  path: '/api/v1/namespaces',
  tags: ['WorkflowService'],
  description: 'ListNamespaces returns the information and configuration for all namespaces.',
  operationId: 'ListNamespaces',
  request: {
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      nextPageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextPageToken',
            in: 'query',
            schema: { type: 'string', format: 'bytes' },
            required: false,
          },
        }),
      'namespaceFilter.includeDeleted': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'namespaceFilter.includeDeleted',
            in: 'query',
            description:
              'By default namespaces in NAMESPACE_STATE_DELETED state are not included.\n Setting include_deleted to true will include deleted namespaces.\n Note: Namespace is in NAMESPACE_STATE_DELETED state when it was deleted from the system but associated data is not deleted yet.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListNamespacesResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces',
  tags: ['WorkflowService'],
  description:
    'RegisterNamespace creates a new namespace which can be used as a container for all resources.\n\n A Namespace is a top level entity within Temporal, and is used as a container for resources\n like workflow executions, task queues, etc. A Namespace acts as a sandbox and provides\n isolation for all resources within the namespace. All resources belongs to exactly one\n namespace.',
  operationId: 'RegisterNamespace',
  request: {
    body: {
      content: { 'application/json': { schema: RegisterNamespaceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RegisterNamespaceResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiV1NamespacesNamespaceRoute = createRoute({
  method: 'get',
  path: '/api/v1/namespaces/{namespace}',
  tags: ['WorkflowService'],
  description:
    'DescribeNamespace returns the information and configuration for a registered namespace.',
  operationId: 'DescribeNamespace',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'id', in: 'query', schema: { type: 'string' }, required: false },
        }),
      weakConsistency: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'weakConsistency',
            in: 'query',
            description:
              'If true, the server may serve the response from an eventually-consistent\n source instead of reading through to persistence. Defaults to false,\n which preserves read-after-write consistency. SDKs should set this when\n fetching namespace capabilities on worker/client startup.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DescribeNamespaceResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiV1NamespacesNamespaceActivitiesRoute = createRoute({
  method: 'get',
  path: '/api/v1/namespaces/{namespace}/activities',
  tags: ['WorkflowService'],
  description:
    'ListActivityExecutions is a visibility API to list activity executions in a specific namespace.',
  operationId: 'ListActivityExecutions',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Max number of executions to return per page.',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      nextPageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextPageToken',
            in: 'query',
            description: 'Token returned in ListActivityExecutionsResponse.',
            schema: { type: 'string', format: 'bytes' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description:
              'Visibility query, see https://docs.temporal.io/list-filter for the syntax.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListActivityExecutionsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceActivitiesDeprecatedPauseRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/activities-deprecated/pause',
  tags: ['WorkflowService'],
  description:
    "PauseActivity pauses the execution of an activity specified by its ID or type.\n If there are multiple pending activities of the provided type - all of them will be paused\n\n Pausing an activity means:\n - If the activity is currently waiting for a retry or is running and subsequently fails,\n   it will not be rescheduled until it is unpaused.\n - If the activity is already paused, calling this method will have no effect.\n - If the activity is running and finishes successfully, the activity will be completed.\n - If the activity is running and finishes with failure:\n   * if there is no retry left - the activity will be completed.\n   * if there are more retries left - the activity will be paused.\n For long-running activities:\n - activities in paused state will send a cancellation with \"activity_paused\" set to 'true' in response to 'RecordActivityTaskHeartbeat'.\n - The activity should respond to the cancellation accordingly.\n\n Returns a `NotFound` error if there is no pending activity with the provided ID or type\n This API will be deprecated soon and replaced with a newer PauseActivityExecution that is better named and\n structured to work well for standalone activities.",
  operationId: 'PauseActivity',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace of the workflow which scheduled this activity.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PauseActivityRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PauseActivityResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceActivitiesDeprecatedResetRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/activities-deprecated/reset',
  tags: ['WorkflowService'],
  description:
    "ResetActivity resets the execution of an activity specified by its ID or type.\n If there are multiple pending activities of the provided type - all of them will be reset.\n\n Resetting an activity means:\n * number of attempts will be reset to 0.\n * activity timeouts will be reset.\n * if the activity is waiting for retry, and it is not paused or 'keep_paused' is not provided:\n    it will be scheduled immediately (* see 'jitter' flag),\n\n Flags:\n\n 'jitter': the activity will be scheduled at a random time within the jitter duration.\n If the activity currently paused it will be unpaused, unless 'keep_paused' flag is provided.\n 'reset_heartbeats': the activity heartbeat timer and heartbeats will be reset.\n 'keep_paused': if the activity is paused, it will remain paused.\n\n Returns a `NotFound` error if there is no pending activity with the provided ID or type.\n This API will be deprecated soon and replaced with a newer ResetActivityExecution that is better named and\n structured to work well for standalone activities.",
  operationId: 'ResetActivity',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace of the workflow which scheduled this activity.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ResetActivityRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ResetActivityResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceActivitiesDeprecatedUnpauseRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/activities-deprecated/unpause',
  tags: ['WorkflowService'],
  description:
    "UnpauseActivity unpauses the execution of an activity specified by its ID or type.\n If there are multiple pending activities of the provided type - all of them will be unpaused.\n\n If activity is not paused, this call will have no effect.\n If the activity was paused while waiting for retry, it will be scheduled immediately (* see 'jitter' flag).\n Once the activity is unpaused, all timeout timers will be regenerated.\n\n Flags:\n 'jitter': the activity will be scheduled at a random time within the jitter duration.\n 'reset_attempts': the number of attempts will be reset.\n 'reset_heartbeat': the activity heartbeat timer and heartbeats will be reset.\n\n Returns a `NotFound` error if there is no pending activity with the provided ID or type\n This API will be deprecated soon and replaced with a newer UnpauseActivityExecution that is better named and\n structured to work well for standalone activities.",
  operationId: 'UnpauseActivity',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace of the workflow which scheduled this activity.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UnpauseActivityRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UnpauseActivityResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceActivitiesDeprecatedUpdateOptionsRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/activities-deprecated/update-options',
  tags: ['WorkflowService'],
  description:
    'UpdateActivityOptions is called by the client to update the options of an activity by its ID or type.\n If there are multiple pending activities of the provided type - all of them will be updated.\n This API will be deprecated soon and replaced with a newer UpdateActivityExecutionOptions that is better named and\n structured to work well for standalone activities.',
  operationId: 'UpdateActivityOptions',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace of the workflow which scheduled this activity',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateActivityOptionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UpdateActivityOptionsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiV1NamespacesNamespaceActivitiesActivityIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/namespaces/{namespace}/activities/{activityId}',
  tags: ['WorkflowService'],
  description:
    'DescribeActivityExecution returns information about an activity execution.\n It can be used to:\n - Get current activity info without waiting\n - Long-poll for next state change and return new activity info\n Response can optionally include activity input or outcome (if the activity has completed).',
  operationId: 'DescribeActivityExecution',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      activityId: z
        .string()
        .openapi({
          param: { name: 'activityId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      runId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'runId',
            in: 'query',
            description: 'Activity run ID. If empty the request targets the latest run.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includeInput: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeInput',
            in: 'query',
            description: 'Include the input field in the response.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      includeOutcome: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeOutcome',
            in: 'query',
            description:
              'Include the outcome (result/failure) in the response if the activity has completed.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      longPollToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'longPollToken',
            in: 'query',
            description:
              'Token from a previous DescribeActivityExecutionResponse. If present, long-poll until activity\n state changes from the state encoded in this token. If absent, return current state immediately.\n If present, run_id must also be present.\n Note that activity state may change multiple times between requests, therefore it is not\n guaranteed that a client making a sequence of long-poll requests will see a complete\n sequence of state changes.',
            schema: { type: 'string', format: 'bytes' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DescribeActivityExecutionResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceActivitiesActivityIdRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/activities/{activityId}',
  tags: ['WorkflowService'],
  description:
    'StartActivityExecution starts a new activity execution.\n\n Returns an `ActivityExecutionAlreadyStarted` error if an instance already exists with same activity ID in this namespace\n unless permitted by the specified ID conflict policy.',
  operationId: 'StartActivityExecution',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      activityId: z
        .string()
        .openapi({
          param: {
            name: 'activityId',
            in: 'path',
            description:
              "Identifier for this activity. Required. This identifier should be meaningful in the user's\n own system. It must be unique among activities in the same namespace, subject to the rules\n imposed by id_reuse_policy and id_conflict_policy.",
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartActivityExecutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: StartActivityExecutionResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceActivitiesActivityIdCancelRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/activities/{activityId}/cancel',
  tags: ['WorkflowService'],
  description:
    'RequestCancelActivityExecution requests cancellation of an activity execution.\n\n Cancellation is cooperative: this call records the request, but the activity must detect and\n acknowledge it for the activity to reach CANCELED status. The cancellation signal is\n delivered via `cancel_requested` in the heartbeat response; SDKs surface this via\n language-idiomatic mechanisms (context cancellation, exceptions, abort signals).',
  operationId: 'RequestCancelActivityExecution',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      activityId: z
        .string()
        .openapi({
          param: { name: 'activityId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RequestCancelActivityExecutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RequestCancelActivityExecutionResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceActivitiesActivityIdCompleteRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/activities/{activityId}/complete',
  tags: ['WorkflowService'],
  description:
    'See `RespondActivityTaskCompleted`. This version allows clients to record completions by\n namespace/workflow id/activity id instead of task token.\n\n (-- api-linter: core::0136::prepositions=disabled\n     aip.dev/not-precedent: "By" is used to indicate request type. --)',
  operationId: 'RespondActivityTaskCompletedById',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace of the workflow which scheduled this activity',
            required: true,
            schema: { type: 'string' },
          },
        }),
      activityId: z
        .string()
        .openapi({
          param: {
            name: 'activityId',
            in: 'path',
            description: 'Id of the activity to complete',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RespondActivityTaskCompletedByIdRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RespondActivityTaskCompletedByIdResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceActivitiesActivityIdFailRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/activities/{activityId}/fail',
  tags: ['WorkflowService'],
  description:
    'See `RecordActivityTaskFailed`. This version allows clients to record failures by\n namespace/workflow id/activity id instead of task token.\n\n (-- api-linter: core::0136::prepositions=disabled\n     aip.dev/not-precedent: "By" is used to indicate request type. --)',
  operationId: 'RespondActivityTaskFailedById',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace of the workflow which scheduled this activity',
            required: true,
            schema: { type: 'string' },
          },
        }),
      activityId: z
        .string()
        .openapi({
          param: {
            name: 'activityId',
            in: 'path',
            description: 'Id of the activity to fail',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RespondActivityTaskFailedByIdRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RespondActivityTaskFailedByIdResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceActivitiesActivityIdHeartbeatRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/activities/{activityId}/heartbeat',
  tags: ['WorkflowService'],
  description:
    'See `RecordActivityTaskHeartbeat`. This version allows clients to record heartbeats by\n namespace/workflow id/activity id instead of task token.\n\n (-- api-linter: core::0136::prepositions=disabled\n     aip.dev/not-precedent: "By" is used to indicate request type. --)',
  operationId: 'RecordActivityTaskHeartbeatById',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace of the workflow which scheduled this activity',
            required: true,
            schema: { type: 'string' },
          },
        }),
      activityId: z
        .string()
        .openapi({
          param: {
            name: 'activityId',
            in: 'path',
            description: "Id of the activity we're heartbeating",
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RecordActivityTaskHeartbeatByIdRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RecordActivityTaskHeartbeatByIdResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiV1NamespacesNamespaceActivitiesActivityIdOutcomeRoute = createRoute({
  method: 'get',
  path: '/api/v1/namespaces/{namespace}/activities/{activityId}/outcome',
  tags: ['WorkflowService'],
  description:
    'PollActivityExecution long-polls for an activity execution to complete and returns the\n outcome (result or failure).',
  operationId: 'PollActivityExecution',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      activityId: z
        .string()
        .openapi({
          param: { name: 'activityId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      runId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'runId',
            in: 'query',
            description: 'Activity run ID. If empty the request targets the latest run.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PollActivityExecutionResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceActivitiesActivityIdPauseRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/activities/{activityId}/pause',
  tags: ['WorkflowService'],
  description:
    "PauseActivityExecution pauses the execution of an activity specified by its ID.\n This API can be used to target a workflow activity or a standalone activity\n\n Pausing an activity means:\n - If the activity is currently waiting for a retry or is running and subsequently fails,\n   it will not be rescheduled until it is unpaused.\n - If the activity is already paused, calling this method will have no effect.\n - If the activity is running and finishes successfully, the activity will be completed.\n - If the activity is running and finishes with failure:\n   * if there is no retry left - the activity will be completed.\n   * if there are more retries left - the activity will be paused.\n For long-running activities:\n - activities in paused state will send a cancellation with \"activity_paused\" set to 'true' in response to 'RecordActivityTaskHeartbeat'.\n\n Returns a `NotFound` error if there is no pending activity with the provided ID",
  operationId: 'PauseActivityExecution',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace of the workflow which scheduled this activity.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      activityId: z
        .string()
        .openapi({
          param: {
            name: 'activityId',
            in: 'path',
            description: 'The ID of the activity to target.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PauseActivityExecutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PauseActivityExecutionResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceActivitiesActivityIdResetRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/activities/{activityId}/reset',
  tags: ['WorkflowService'],
  description:
    "ResetActivityExecution resets the execution of an activity specified by its ID.\n This API can be used to target a workflow activity or a standalone activity.\n\n Resetting an activity means:\n * number of attempts will be reset to 0.\n * activity timeouts will be reset.\n * if the activity is waiting for retry, and it is not paused or 'keep_paused' is not provided:\n    it will be scheduled immediately (* see 'jitter' flag)\n\n Returns a `NotFound` error if there is no pending activity with the provided ID or type.",
  operationId: 'ResetActivityExecution',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace of the workflow which scheduled this activity.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      activityId: z
        .string()
        .openapi({
          param: {
            name: 'activityId',
            in: 'path',
            description: 'The ID of the activity to target.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ResetActivityExecutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ResetActivityExecutionResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceActivitiesActivityIdResolveAsCanceledRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/activities/{activityId}/resolve-as-canceled',
  tags: ['WorkflowService'],
  description:
    'See `RespondActivityTaskCanceled`. This version allows clients to record failures by\n namespace/workflow id/activity id instead of task token.\n\n (-- api-linter: core::0136::prepositions=disabled\n     aip.dev/not-precedent: "By" is used to indicate request type. --)',
  operationId: 'RespondActivityTaskCanceledById',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace of the workflow which scheduled this activity',
            required: true,
            schema: { type: 'string' },
          },
        }),
      activityId: z
        .string()
        .openapi({
          param: {
            name: 'activityId',
            in: 'path',
            description: 'Id of the activity to confirm is cancelled',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RespondActivityTaskCanceledByIdRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RespondActivityTaskCanceledByIdResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceActivitiesActivityIdTerminateRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/activities/{activityId}/terminate',
  tags: ['WorkflowService'],
  description:
    'TerminateActivityExecution terminates an existing activity execution immediately.\n\n Termination does not reach the worker and the activity code cannot react to it. A terminated activity may have a\n running attempt.',
  operationId: 'TerminateActivityExecution',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      activityId: z
        .string()
        .openapi({
          param: { name: 'activityId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: TerminateActivityExecutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: TerminateActivityExecutionResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceActivitiesActivityIdUnpauseRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/activities/{activityId}/unpause',
  tags: ['WorkflowService'],
  description:
    "UnpauseActivityExecution unpauses the execution of an activity specified by its ID.\n This API can be used to target a workflow activity or a standalone activity.\n\n If activity is not paused, this call will have no effect.\n If the activity was paused while waiting for retry, it will be scheduled immediately (* see 'jitter' flag).\n Once the activity is unpaused, all timeout timers will be regenerated.\n\n Returns a `NotFound` error if there is no pending activity with the provided ID",
  operationId: 'UnpauseActivityExecution',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace of the workflow which scheduled this activity.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      activityId: z
        .string()
        .openapi({
          param: {
            name: 'activityId',
            in: 'path',
            description: 'The ID of the activity to target.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UnpauseActivityExecutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UnpauseActivityExecutionResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceActivitiesActivityIdUpdateOptionsRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/activities/{activityId}/update-options',
  tags: ['WorkflowService'],
  description:
    'UpdateActivityExecutionOptions is called by the client to update the options of an activity by its ID.\n This API can be used to target a workflow activity or a standalone activity.',
  operationId: 'UpdateActivityExecutionOptions',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace of the workflow which scheduled this activity',
            required: true,
            schema: { type: 'string' },
          },
        }),
      activityId: z
        .string()
        .openapi({
          param: {
            name: 'activityId',
            in: 'path',
            description: 'The ID of the activity to target.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateActivityExecutionOptionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UpdateActivityExecutionOptionsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceActivityCompleteRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/activity-complete',
  tags: ['WorkflowService'],
  description:
    'RespondActivityTaskCompleted is called by workers when they successfully complete an activity\n task.\n\n For workflow activities, this results in a new `ACTIVITY_TASK_COMPLETED` event being written to the workflow history\n and a new workflow task created for the workflow. Fails with `NotFound` if the task token is\n no longer valid due to activity timeout, already being completed, or never having existed.',
  operationId: 'RespondActivityTaskCompleted',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RespondActivityTaskCompletedRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RespondActivityTaskCompletedResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiV1NamespacesNamespaceActivityCountRoute = createRoute({
  method: 'get',
  path: '/api/v1/namespaces/{namespace}/activity-count',
  tags: ['WorkflowService'],
  description:
    'CountActivityExecutions is a visibility API to count activity executions in a specific namespace.',
  operationId: 'CountActivityExecutions',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description:
              'Visibility query, see https://docs.temporal.io/list-filter for the syntax.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CountActivityExecutionsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceActivityFailRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/activity-fail',
  tags: ['WorkflowService'],
  description:
    'RespondActivityTaskFailed is called by workers when processing an activity task fails.\n\n This results in a new `ACTIVITY_TASK_FAILED` event being written to the workflow history and\n a new workflow task created for the workflow. Fails with `NotFound` if the task token is no\n longer valid due to activity timeout, already being completed, or never having existed.',
  operationId: 'RespondActivityTaskFailed',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RespondActivityTaskFailedRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RespondActivityTaskFailedResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceActivityHeartbeatRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/activity-heartbeat',
  tags: ['WorkflowService'],
  description:
    'RecordActivityTaskHeartbeat is optionally called by workers while they execute activities.\n\n If a worker fails to heartbeat within the `heartbeat_timeout` interval for the activity task,\n then the current attempt times out. Depending on RetryPolicy, this may trigger a retry or\n time out the activity.\n\n For workflow activities, an `ACTIVITY_TASK_TIMED_OUT` event will be written to the workflow\n history. Calling `RecordActivityTaskHeartbeat` will fail with `NotFound` in such situations,\n in that event, the SDK should request cancellation of the activity.\n\n The request may contain response `details` which will be persisted by the server and may be\n used by the activity to checkpoint progress. The `cancel_requested` field in the response\n indicates whether cancellation has been requested for the activity.',
  operationId: 'RecordActivityTaskHeartbeat',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RecordActivityTaskHeartbeatRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RecordActivityTaskHeartbeatResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceActivityResolveAsCanceledRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/activity-resolve-as-canceled',
  tags: ['WorkflowService'],
  description:
    'RespondActivityTaskFailed is called by workers when processing an activity task fails.\n\n For workflow activities, this results in a new `ACTIVITY_TASK_CANCELED` event being written to the workflow history\n and a new workflow task created for the workflow. Fails with `NotFound` if the task token is\n no longer valid due to activity timeout, already being completed, or never having existed.',
  operationId: 'RespondActivityTaskCanceled',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RespondActivityTaskCanceledRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RespondActivityTaskCanceledResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiV1NamespacesNamespaceArchivedWorkflowsRoute = createRoute({
  method: 'get',
  path: '/api/v1/namespaces/{namespace}/archived-workflows',
  tags: ['WorkflowService'],
  description:
    'ListArchivedWorkflowExecutions is a visibility API to list archived workflow executions in a specific namespace.',
  operationId: 'ListArchivedWorkflowExecutions',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      nextPageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextPageToken',
            in: 'query',
            schema: { type: 'string', format: 'bytes' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'query', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListArchivedWorkflowExecutionsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiV1NamespacesNamespaceBatchOperationsRoute = createRoute({
  method: 'get',
  path: '/api/v1/namespaces/{namespace}/batch-operations',
  tags: ['WorkflowService'],
  description: 'ListBatchOperations returns a list of batch operations',
  operationId: 'ListBatchOperations',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace that contains the batch operation',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'List page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      nextPageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextPageToken',
            in: 'query',
            description: 'Next page token',
            schema: { type: 'string', format: 'bytes' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListBatchOperationsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiV1NamespacesNamespaceBatchOperationsJobIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/namespaces/{namespace}/batch-operations/{jobId}',
  tags: ['WorkflowService'],
  description: 'DescribeBatchOperation returns the information about a batch operation',
  operationId: 'DescribeBatchOperation',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace that contains the batch operation',
            required: true,
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            description: 'Batch job id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DescribeBatchOperationResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceBatchOperationsJobIdRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/batch-operations/{jobId}',
  tags: ['WorkflowService'],
  description: 'StartBatchOperation starts a new batch operation',
  operationId: 'StartBatchOperation',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace that contains the batch operation',
            required: true,
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            description: 'Job ID defines the unique ID for the batch job',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartBatchOperationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: StartBatchOperationResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceBatchOperationsJobIdStopRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/batch-operations/{jobId}/stop',
  tags: ['WorkflowService'],
  description: 'StopBatchOperation stops a batch operation',
  operationId: 'StopBatchOperation',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace that contains the batch operation',
            required: true,
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            description: 'Batch job id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopBatchOperationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: StopBatchOperationResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceCurrentDeploymentDeploymentSeriesNameRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/current-deployment/{deployment.series_name}',
  tags: ['WorkflowService'],
  description:
    'Sets a deployment as the current deployment for its deployment series. Can optionally update\n the metadata of the deployment as well.\n Experimental. This API might significantly change or be removed in a future release.\n Deprecated. Replaced by `SetWorkerDeploymentCurrentVersion`.',
  operationId: 'SetCurrentDeployment',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      'deployment.series_name': z
        .string()
        .openapi({
          param: {
            name: 'deployment.series_name',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SetCurrentDeploymentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SetCurrentDeploymentResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiV1NamespacesNamespaceCurrentDeploymentSeriesNameRoute = createRoute({
  method: 'get',
  path: '/api/v1/namespaces/{namespace}/current-deployment/{seriesName}',
  tags: ['WorkflowService'],
  description:
    'Returns the current deployment (and its info) for a given deployment series.\n Experimental. This API might significantly change or be removed in a future release.\n Deprecated. Replaced by `current_version` returned by `DescribeWorkerDeployment`.',
  operationId: 'GetCurrentDeployment',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      seriesName: z
        .string()
        .openapi({
          param: { name: 'seriesName', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetCurrentDeploymentResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiV1NamespacesNamespaceDeploymentsRoute = createRoute({
  method: 'get',
  path: '/api/v1/namespaces/{namespace}/deployments',
  tags: ['WorkflowService'],
  description:
    'Lists worker deployments in the namespace. Optionally can filter based on deployment series\n name.\n Experimental. This API might significantly change or be removed in a future release.\n Deprecated. Replaced with `ListWorkerDeployments`.',
  operationId: 'ListDeployments',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      nextPageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextPageToken',
            in: 'query',
            schema: { type: 'string', format: 'bytes' },
            required: false,
          },
        }),
      seriesName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesName',
            in: 'query',
            description: 'Optional. Use to filter based on exact series name match.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListDeploymentsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiV1NamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdRoute =
  createRoute({
    method: 'get',
    path: '/api/v1/namespaces/{namespace}/deployments/{deployment.series_name}/{deployment.build_id}',
    tags: ['WorkflowService'],
    description:
      'Describes a worker deployment.\n Experimental. This API might significantly change or be removed in a future release.\n Deprecated. Replaced with `DescribeWorkerDeploymentVersion`.',
    operationId: 'DescribeDeployment',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'deployment.series_name': z
          .string()
          .openapi({
            param: {
              name: 'deployment.series_name',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'deployment.build_id': z
          .string()
          .openapi({
            param: {
              name: 'deployment.build_id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        'deployment.seriesName': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'deployment.seriesName',
              in: 'query',
              description:
                'Different versions of the same worker service/application are related together by having a\n shared series name.\n Out of all deployments of a series, one can be designated as the current deployment, which\n receives new workflow executions and new tasks of workflows with\n `VERSIONING_BEHAVIOR_AUTO_UPGRADE` versioning behavior.',
              schema: { type: 'string' },
              required: false,
            },
          }),
        'deployment.buildId': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'deployment.buildId',
              in: 'query',
              description:
                'Build ID changes with each version of the worker when the worker program code and/or config\n changes.',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: DescribeDeploymentResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const getApiV1NamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdReachabilityRoute =
  createRoute({
    method: 'get',
    path: '/api/v1/namespaces/{namespace}/deployments/{deployment.series_name}/{deployment.build_id}/reachability',
    tags: ['WorkflowService'],
    description:
      "Returns the reachability level of a worker deployment to help users decide when it is time\n to decommission a deployment. Reachability level is calculated based on the deployment's\n `status` and existing workflows that depend on the given deployment for their execution.\n Calculating reachability is relatively expensive. Therefore, server might return a recently\n cached value. In such a case, the `last_update_time` will inform you about the actual\n reachability calculation time.\n Experimental. This API might significantly change or be removed in a future release.\n Deprecated. Replaced with `DrainageInfo` returned by `DescribeWorkerDeploymentVersion`.",
    operationId: 'GetDeploymentReachability',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'deployment.series_name': z
          .string()
          .openapi({
            param: {
              name: 'deployment.series_name',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'deployment.build_id': z
          .string()
          .openapi({
            param: {
              name: 'deployment.build_id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        'deployment.seriesName': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'deployment.seriesName',
              in: 'query',
              description:
                'Different versions of the same worker service/application are related together by having a\n shared series name.\n Out of all deployments of a series, one can be designated as the current deployment, which\n receives new workflow executions and new tasks of workflows with\n `VERSIONING_BEHAVIOR_AUTO_UPGRADE` versioning behavior.',
              schema: { type: 'string' },
              required: false,
            },
          }),
        'deployment.buildId': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'deployment.buildId',
              in: 'query',
              description:
                'Build ID changes with each version of the worker when the worker program code and/or config\n changes.',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: GetDeploymentReachabilityResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const getApiV1NamespacesNamespaceNexusOperationCountRoute = createRoute({
  method: 'get',
  path: '/api/v1/namespaces/{namespace}/nexus-operation-count',
  tags: ['WorkflowService'],
  description:
    'CountNexusOperationExecutions is a visibility API to count Nexus operations in a specific namespace.',
  operationId: 'CountNexusOperationExecutions',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description:
              'Visibility query, see https://docs.temporal.io/list-filter for the syntax.\n See also ListNexusOperationExecutionsRequest for search attributes available for Nexus operations.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CountNexusOperationExecutionsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiV1NamespacesNamespaceNexusOperationsRoute = createRoute({
  method: 'get',
  path: '/api/v1/namespaces/{namespace}/nexus-operations',
  tags: ['WorkflowService'],
  description:
    'ListNexusOperationExecutions is a visibility API to list Nexus operations in a specific namespace.',
  operationId: 'ListNexusOperationExecutions',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Max number of operations to return per page.',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      nextPageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextPageToken',
            in: 'query',
            description: 'Token returned in ListNexusOperationExecutionsResponse.',
            schema: { type: 'string', format: 'bytes' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description:
              'Visibility query, see https://docs.temporal.io/list-filter for the syntax.\n Search attributes that are avaialble for Nexus operations include:\n - OperationId\n - RunId\n - Endpoint\n - Service\n - Operation\n - RequestId\n - StartTime\n - ExecutionTime\n - CloseTime\n - ExecutionStatus\n - ExecutionDuration\n - StateTransitionCount',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListNexusOperationExecutionsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiV1NamespacesNamespaceNexusOperationsOperationIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/namespaces/{namespace}/nexus-operations/{operationId}',
  tags: ['WorkflowService'],
  description:
    'DescribeNexusOperationExecution returns information about a Nexus operation.\n Supported use cases include:\n - Get current operation info without waiting\n - Long-poll for next state change and return new operation info\n Response can optionally include operation input or outcome (if the operation has completed).',
  operationId: 'DescribeNexusOperationExecution',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      operationId: z
        .string()
        .openapi({
          param: { name: 'operationId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      runId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'runId',
            in: 'query',
            description: 'Operation run ID. If empty the request targets the latest run.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includeInput: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeInput',
            in: 'query',
            description: 'Include the input field in the response.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      includeOutcome: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeOutcome',
            in: 'query',
            description:
              'Include the outcome (result/failure) in the response if the operation has completed.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      longPollToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'longPollToken',
            in: 'query',
            description:
              'Token from a previous DescribeNexusOperationExecutionResponse. If present, this RPC will long-poll until operation\n state changes from the state encoded in this token. If absent, return current state immediately.\n If present, run_id must also be present.\n Note that operation state may change multiple times between requests, therefore it is not\n guaranteed that a client making a sequence of long-poll requests will see a complete\n sequence of state changes.',
            schema: { type: 'string', format: 'bytes' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DescribeNexusOperationExecutionResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceNexusOperationsOperationIdRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/nexus-operations/{operationId}',
  tags: ['WorkflowService'],
  description:
    'StartNexusOperationExecution starts a new Nexus operation.\n\n Returns a `NexusOperationExecutionAlreadyStarted` error if an instance already exists with same operation ID in this\n namespace unless permitted by the specified ID conflict policy.',
  operationId: 'StartNexusOperationExecution',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      operationId: z
        .string()
        .openapi({
          param: {
            name: 'operationId',
            in: 'path',
            description:
              'Identifier for this operation. This is a caller-side ID, distinct from any internal\n operation identifiers generated by the handler. Must be unique among operations in the\n same namespace, subject to the rules imposed by id_reuse_policy and id_conflict_policy.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartNexusOperationExecutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: StartNexusOperationExecutionResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceNexusOperationsOperationIdCancelRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/nexus-operations/{operationId}/cancel',
  tags: ['WorkflowService'],
  description:
    'RequestCancelNexusOperationExecution requests cancellation of a Nexus operation.\n\n Requesting to cancel an operation does not automatically transition the operation to canceled status.\n The operation will only transition to canceled status if it supports cancellation and the handler\n processes the cancellation request.',
  operationId: 'RequestCancelNexusOperationExecution',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      operationId: z
        .string()
        .openapi({
          param: { name: 'operationId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: RequestCancelNexusOperationExecutionRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: RequestCancelNexusOperationExecutionResponseSchema },
      },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiV1NamespacesNamespaceNexusOperationsOperationIdPollRoute = createRoute({
  method: 'get',
  path: '/api/v1/namespaces/{namespace}/nexus-operations/{operationId}/poll',
  tags: ['WorkflowService'],
  description:
    'PollNexusOperationExecution long-polls for a Nexus operation for a given wait stage to complete and returns\n the outcome (result or failure).',
  operationId: 'PollNexusOperationExecution',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      operationId: z
        .string()
        .openapi({
          param: { name: 'operationId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      runId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'runId',
            in: 'query',
            description: 'Operation run ID. If empty the request targets the latest run.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      waitStage: z
        .enum([
          'NEXUS_OPERATION_WAIT_STAGE_UNSPECIFIED',
          'NEXUS_OPERATION_WAIT_STAGE_STARTED',
          'NEXUS_OPERATION_WAIT_STAGE_CLOSED',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'waitStage',
            in: 'query',
            description:
              'Stage to wait for. The operation may be in a more advanced stage when the poll is unblocked.',
            schema: {
              enum: [
                'NEXUS_OPERATION_WAIT_STAGE_UNSPECIFIED',
                'NEXUS_OPERATION_WAIT_STAGE_STARTED',
                'NEXUS_OPERATION_WAIT_STAGE_CLOSED',
              ],
              type: 'string',
              format: 'enum',
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PollNexusOperationExecutionResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceNexusOperationsOperationIdTerminateRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/nexus-operations/{operationId}/terminate',
  tags: ['WorkflowService'],
  description:
    'TerminateNexusOperationExecution terminates an existing Nexus operation immediately.\n\n Termination happens immediately and the operation handler cannot react to it. A terminated operation will have\n its outcome set to a failure with a termination reason.',
  operationId: 'TerminateNexusOperationExecution',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      operationId: z
        .string()
        .openapi({
          param: { name: 'operationId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: TerminateNexusOperationExecutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: TerminateNexusOperationExecutionResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiV1NamespacesNamespaceScheduleCountRoute = createRoute({
  method: 'get',
  path: '/api/v1/namespaces/{namespace}/schedule-count',
  tags: ['WorkflowService'],
  description: 'CountSchedules is a visibility API to count schedules in a specific namespace.',
  operationId: 'CountSchedules',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description:
              'Visibility query, see https://docs.temporal.io/list-filter for the syntax.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CountSchedulesResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiV1NamespacesNamespaceSchedulesRoute = createRoute({
  method: 'get',
  path: '/api/v1/namespaces/{namespace}/schedules',
  tags: ['WorkflowService'],
  description: 'List all schedules in a namespace.',
  operationId: 'ListSchedules',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'The namespace to list schedules in.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      maximumPageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maximumPageSize',
            in: 'query',
            description: 'How many to return at once.',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      nextPageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextPageToken',
            in: 'query',
            description: 'Token to get the next page of results.',
            schema: { type: 'string', format: 'bytes' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description: 'Query to filter schedules.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListSchedulesResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiV1NamespacesNamespaceSchedulesScheduleIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/namespaces/{namespace}/schedules/{scheduleId}',
  tags: ['WorkflowService'],
  description: 'Returns the schedule description and current state of an existing schedule.',
  operationId: 'DescribeSchedule',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'The namespace of the schedule to describe.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      scheduleId: z
        .string()
        .openapi({
          param: {
            name: 'scheduleId',
            in: 'path',
            description: 'The id of the schedule to describe.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DescribeScheduleResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceSchedulesScheduleIdRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/schedules/{scheduleId}',
  tags: ['WorkflowService'],
  description: 'Creates a new schedule.',
  operationId: 'CreateSchedule',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'The namespace the schedule should be created in.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      scheduleId: z
        .string()
        .openapi({
          param: {
            name: 'scheduleId',
            in: 'path',
            description: 'The id of the new schedule.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateScheduleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CreateScheduleResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const deleteApiV1NamespacesNamespaceSchedulesScheduleIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/namespaces/{namespace}/schedules/{scheduleId}',
  tags: ['WorkflowService'],
  description: 'Deletes a schedule, removing it from the system.',
  operationId: 'DeleteSchedule',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'The namespace of the schedule to delete.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      scheduleId: z
        .string()
        .openapi({
          param: {
            name: 'scheduleId',
            in: 'path',
            description: 'The id of the schedule to delete.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      identity: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'identity',
            in: 'query',
            description: 'The identity of the client who initiated this request.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DeleteScheduleResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiV1NamespacesNamespaceSchedulesScheduleIdMatchingTimesRoute = createRoute({
  method: 'get',
  path: '/api/v1/namespaces/{namespace}/schedules/{scheduleId}/matching-times',
  tags: ['WorkflowService'],
  description: 'Lists matching times within a range.',
  operationId: 'ListScheduleMatchingTimes',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'The namespace of the schedule to query.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      scheduleId: z
        .string()
        .openapi({
          param: {
            name: 'scheduleId',
            in: 'path',
            description: 'The id of the schedule to query.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      startTime: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'startTime',
            in: 'query',
            description: 'Time range to query.',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      endTime: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'endTime',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListScheduleMatchingTimesResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceSchedulesScheduleIdPatchRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/schedules/{scheduleId}/patch',
  tags: ['WorkflowService'],
  description: 'Makes a specific change to a schedule or triggers an immediate action.',
  operationId: 'PatchSchedule',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'The namespace of the schedule to patch.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      scheduleId: z
        .string()
        .openapi({
          param: {
            name: 'scheduleId',
            in: 'path',
            description: 'The id of the schedule to patch.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PatchScheduleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PatchScheduleResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceSchedulesScheduleIdUpdateRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/schedules/{scheduleId}/update',
  tags: ['WorkflowService'],
  description: 'Changes the configuration or state of an existing schedule.',
  operationId: 'UpdateSchedule',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'The namespace of the schedule to update.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      scheduleId: z
        .string()
        .openapi({
          param: {
            name: 'scheduleId',
            in: 'path',
            description: 'The id of the schedule to update.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateScheduleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UpdateScheduleResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiV1NamespacesNamespaceSearchAttributesRoute = createRoute({
  method: 'get',
  path: '/api/v1/namespaces/{namespace}/search-attributes',
  tags: ['OperatorService'],
  description: 'ListSearchAttributes returns comprehensive information about search attributes.',
  operationId: 'ListSearchAttributes',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListSearchAttributesResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceTaskQueuesTaskQueueUpdateConfigRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/task-queues/{taskQueue}/update-config',
  tags: ['WorkflowService'],
  description:
    'Updates task queue configuration.\n For the overall queue rate limit: the rate limit set by this api overrides the worker-set rate limit,\n which uncouples the rate limit from the worker lifecycle.\n If the overall queue rate limit is unset, the worker-set rate limit takes effect.',
  operationId: 'UpdateTaskQueueConfig',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      taskQueue: z
        .string()
        .openapi({
          param: {
            name: 'taskQueue',
            in: 'path',
            description: 'Selects the task queue to update.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateTaskQueueConfigRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UpdateTaskQueueConfigResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiV1NamespacesNamespaceTaskQueuesTaskQueueWorkerBuildIdCompatibilityRoute =
  createRoute({
    method: 'get',
    path: '/api/v1/namespaces/{namespace}/task-queues/{taskQueue}/worker-build-id-compatibility',
    tags: ['WorkflowService'],
    description:
      'Deprecated. Use `GetWorkerVersioningRules`.\n Fetches the worker build id versioning sets for a task queue.',
    operationId: 'GetWorkerBuildIdCompatibility',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
          }),
        taskQueue: z
          .string()
          .openapi({
            param: {
              name: 'taskQueue',
              in: 'path',
              description:
                'Must be set, the task queue to interrogate about worker id compatibility.',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        maxSets: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .exactOptional()
          .openapi({
            param: {
              name: 'maxSets',
              in: 'query',
              description:
                'Limits how many compatible sets will be returned. Specify 1 to only return the current\n default major version set. 0 returns all sets.',
              schema: { type: 'integer', format: 'int32' },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: GetWorkerBuildIdCompatibilityResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const getApiV1NamespacesNamespaceTaskQueuesTaskQueueWorkerVersioningRulesRoute = createRoute(
  {
    method: 'get',
    path: '/api/v1/namespaces/{namespace}/task-queues/{taskQueue}/worker-versioning-rules',
    tags: ['WorkflowService'],
    description:
      'Fetches the Build ID assignment and redirect rules for a Task Queue.\n WARNING: Worker Versioning is not yet stable and the API and behavior may change incompatibly.',
    operationId: 'GetWorkerVersioningRules',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
          }),
        taskQueue: z
          .string()
          .openapi({
            param: { name: 'taskQueue', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: GetWorkerVersioningRulesResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  },
)

export const getApiV1NamespacesNamespaceTaskQueuesTaskQueueNameRoute = createRoute({
  method: 'get',
  path: '/api/v1/namespaces/{namespace}/task-queues/{task_queue.name}',
  tags: ['WorkflowService'],
  description:
    'DescribeTaskQueue returns the following information about the target task queue, broken down by Build ID:\n   - List of pollers\n   - Workflow Reachability status\n   - Backlog info for Workflow and/or Activity tasks',
  operationId: 'DescribeTaskQueue',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      'task_queue.name': z
        .string()
        .openapi({
          param: {
            name: 'task_queue.name',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'taskQueue.name': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'taskQueue.name',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'taskQueue.kind': z
        .enum([
          'TASK_QUEUE_KIND_UNSPECIFIED',
          'TASK_QUEUE_KIND_NORMAL',
          'TASK_QUEUE_KIND_STICKY',
          'TASK_QUEUE_KIND_WORKER_COMMANDS',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'taskQueue.kind',
            in: 'query',
            description: 'Default: TASK_QUEUE_KIND_NORMAL.',
            schema: {
              enum: [
                'TASK_QUEUE_KIND_UNSPECIFIED',
                'TASK_QUEUE_KIND_NORMAL',
                'TASK_QUEUE_KIND_STICKY',
                'TASK_QUEUE_KIND_WORKER_COMMANDS',
              ],
              type: 'string',
              format: 'enum',
            },
            required: false,
          },
        }),
      'taskQueue.normalName': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'taskQueue.normalName',
            in: 'query',
            description:
              'Iff kind == TASK_QUEUE_KIND_STICKY, then this field contains the name of\n the normal task queue that the sticky worker is running on.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      taskQueueType: z
        .enum([
          'TASK_QUEUE_TYPE_UNSPECIFIED',
          'TASK_QUEUE_TYPE_WORKFLOW',
          'TASK_QUEUE_TYPE_ACTIVITY',
          'TASK_QUEUE_TYPE_NEXUS',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'taskQueueType',
            in: 'query',
            description:
              'If unspecified (TASK_QUEUE_TYPE_UNSPECIFIED), then default value (TASK_QUEUE_TYPE_WORKFLOW) will be used.\n Only supported in default mode (use `task_queue_types` in ENHANCED mode instead).',
            schema: {
              enum: [
                'TASK_QUEUE_TYPE_UNSPECIFIED',
                'TASK_QUEUE_TYPE_WORKFLOW',
                'TASK_QUEUE_TYPE_ACTIVITY',
                'TASK_QUEUE_TYPE_NEXUS',
              ],
              type: 'string',
              format: 'enum',
            },
            required: false,
          },
        }),
      reportStats: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'reportStats',
            in: 'query',
            description: 'Report stats for the requested task queue type(s).',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      reportConfig: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'reportConfig',
            in: 'query',
            description: 'Report Task Queue Config',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      includeTaskQueueStatus: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeTaskQueueStatus',
            in: 'query',
            description:
              'Deprecated, use `report_stats` instead.\n If true, the task queue status will be included in the response.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      apiMode: z
        .enum(['DESCRIBE_TASK_QUEUE_MODE_UNSPECIFIED', 'DESCRIBE_TASK_QUEUE_MODE_ENHANCED'])
        .exactOptional()
        .openapi({
          param: {
            name: 'apiMode',
            in: 'query',
            description:
              'Deprecated. ENHANCED mode is also being deprecated.\n Select the API mode to use for this request: DEFAULT mode (if unset) or ENHANCED mode.\n Consult the documentation for each field to understand which mode it is supported in.',
            schema: {
              enum: ['DESCRIBE_TASK_QUEUE_MODE_UNSPECIFIED', 'DESCRIBE_TASK_QUEUE_MODE_ENHANCED'],
              type: 'string',
              format: 'enum',
            },
            required: false,
          },
        }),
      'versions.buildIds': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'versions.buildIds',
            in: 'query',
            description: 'Include specific Build IDs.',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      'versions.unversioned': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'versions.unversioned',
            in: 'query',
            description: 'Include the unversioned queue.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      'versions.allActive': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'versions.allActive',
            in: 'query',
            description:
              'Include all active versions. A version is considered active if, in the last few minutes,\n it has had new tasks or polls, or it has been the subject of certain task queue API calls.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      taskQueueTypes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'TASK_QUEUE_TYPE_UNSPECIFIED',
              'TASK_QUEUE_TYPE_WORKFLOW',
              'TASK_QUEUE_TYPE_ACTIVITY',
              'TASK_QUEUE_TYPE_NEXUS',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'taskQueueTypes',
            in: 'query',
            description:
              'Deprecated (as part of the ENHANCED mode deprecation).\n Task queue types to report info about. If not specified, all types are considered.',
            schema: {
              type: 'array',
              items: {
                enum: [
                  'TASK_QUEUE_TYPE_UNSPECIFIED',
                  'TASK_QUEUE_TYPE_WORKFLOW',
                  'TASK_QUEUE_TYPE_ACTIVITY',
                  'TASK_QUEUE_TYPE_NEXUS',
                ],
                type: 'string',
                format: 'enum',
              },
            },
            required: false,
          },
        }),
      reportPollers: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'reportPollers',
            in: 'query',
            description:
              'Deprecated (as part of the ENHANCED mode deprecation).\n Report list of pollers for requested task queue types and versions.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      reportTaskReachability: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'reportTaskReachability',
            in: 'query',
            description:
              'Deprecated (as part of the ENHANCED mode deprecation).\n Report task reachability for the requested versions and all task types (task reachability is not reported\n per task type).',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DescribeTaskQueueResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceUpdateRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/update',
  tags: ['WorkflowService'],
  description:
    'UpdateNamespace is used to update the information and configuration of a registered\n namespace.',
  operationId: 'UpdateNamespace',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateNamespaceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UpdateNamespaceResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/namespaces/{namespace}/worker-deployment-versions/{deployment_version.deployment_name}',
    tags: ['WorkflowService'],
    description:
      'Creates a new Worker Deployment Version.\n\n Experimental. This API might significantly change or be removed in a\n future release.',
    operationId: 'CreateWorkerDeploymentVersion',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'deployment_version.deployment_name': z
          .string()
          .openapi({
            param: {
              name: 'deployment_version.deployment_name',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: CreateWorkerDeploymentVersionRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: CreateWorkerDeploymentVersionResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const getApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdRoute =
  createRoute({
    method: 'get',
    path: '/api/v1/namespaces/{namespace}/worker-deployment-versions/{deployment_version.deployment_name}/{deployment_version.build_id}',
    tags: ['WorkflowService'],
    description:
      'Describes a worker deployment version.\n Experimental. This API might significantly change or be removed in a future release.',
    operationId: 'DescribeWorkerDeploymentVersion',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'deployment_version.deployment_name': z
          .string()
          .openapi({
            param: {
              name: 'deployment_version.deployment_name',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'deployment_version.build_id': z
          .string()
          .openapi({
            param: {
              name: 'deployment_version.build_id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        version: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'version',
              in: 'query',
              description: 'Deprecated. Use `deployment_version`.',
              schema: { type: 'string' },
              required: false,
            },
          }),
        'deploymentVersion.buildId': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'deploymentVersion.buildId',
              in: 'query',
              description:
                'A unique identifier for this Version within the Deployment it is a part of.\n Not necessarily unique within the namespace.\n The combination of `deployment_name` and `build_id` uniquely identifies this\n Version within the namespace, because Deployment names are unique within a namespace.',
              schema: { type: 'string' },
              required: false,
            },
          }),
        'deploymentVersion.deploymentName': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'deploymentVersion.deploymentName',
              in: 'query',
              description: 'Identifies the Worker Deployment this Version is part of.',
              schema: { type: 'string' },
              required: false,
            },
          }),
        reportTaskQueueStats: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              name: 'reportTaskQueueStats',
              in: 'query',
              description: 'Report stats for task queues which have been polled by this version.',
              schema: { type: 'boolean' },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: DescribeWorkerDeploymentVersionResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const deleteApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdRoute =
  createRoute({
    method: 'delete',
    path: '/api/v1/namespaces/{namespace}/worker-deployment-versions/{deployment_version.deployment_name}/{deployment_version.build_id}',
    tags: ['WorkflowService'],
    description:
      'Used for manual deletion of Versions. User can delete a Version only when all the\n following conditions are met:\n  - It is not the Current or Ramping Version of its Deployment.\n  - It has no active pollers (none of the task queues in the Version have pollers)\n  - It is not draining (see WorkerDeploymentVersionInfo.drainage_info). This condition\n    can be skipped by passing `skip-drainage=true`.\n Experimental. This API might significantly change or be removed in a future release.',
    operationId: 'DeleteWorkerDeploymentVersion',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'deployment_version.deployment_name': z
          .string()
          .openapi({
            param: {
              name: 'deployment_version.deployment_name',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'deployment_version.build_id': z
          .string()
          .openapi({
            param: {
              name: 'deployment_version.build_id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        version: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'version',
              in: 'query',
              description: 'Deprecated. Use `deployment_version`.',
              schema: { type: 'string' },
              required: false,
            },
          }),
        'deploymentVersion.buildId': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'deploymentVersion.buildId',
              in: 'query',
              description:
                'A unique identifier for this Version within the Deployment it is a part of.\n Not necessarily unique within the namespace.\n The combination of `deployment_name` and `build_id` uniquely identifies this\n Version within the namespace, because Deployment names are unique within a namespace.',
              schema: { type: 'string' },
              required: false,
            },
          }),
        'deploymentVersion.deploymentName': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'deploymentVersion.deploymentName',
              in: 'query',
              description: 'Identifies the Worker Deployment this Version is part of.',
              schema: { type: 'string' },
              required: false,
            },
          }),
        skipDrainage: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              name: 'skipDrainage',
              in: 'query',
              description:
                'Pass to force deletion even if the Version is draining. In this case the open pinned\n workflows will be stuck until manually moved to another version by UpdateWorkflowExecutionOptions.',
              schema: { type: 'boolean' },
              required: false,
            },
          }),
        identity: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'identity',
              in: 'query',
              description: 'Optional. The identity of the client who initiated this request.',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: DeleteWorkerDeploymentVersionResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateComputeConfigRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/namespaces/{namespace}/worker-deployment-versions/{deployment_version.deployment_name}/{deployment_version.build_id}/update-compute-config',
    tags: ['WorkflowService'],
    description:
      'Updates the compute config attached to a Worker Deployment Version.\n Experimental. This API might significantly change or be removed in a future release.',
    operationId: 'UpdateWorkerDeploymentVersionComputeConfig',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'deployment_version.deployment_name': z
          .string()
          .openapi({
            param: {
              name: 'deployment_version.deployment_name',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'deployment_version.build_id': z
          .string()
          .openapi({
            param: {
              name: 'deployment_version.build_id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: UpdateWorkerDeploymentVersionComputeConfigRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': { schema: UpdateWorkerDeploymentVersionComputeConfigResponseSchema },
        },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateMetadataRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/namespaces/{namespace}/worker-deployment-versions/{deployment_version.deployment_name}/{deployment_version.build_id}/update-metadata',
    tags: ['WorkflowService'],
    description:
      'Updates the user-given metadata attached to a Worker Deployment Version.\n Experimental. This API might significantly change or be removed in a future release.',
    operationId: 'UpdateWorkerDeploymentVersionMetadata',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'deployment_version.deployment_name': z
          .string()
          .openapi({
            param: {
              name: 'deployment_version.deployment_name',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'deployment_version.build_id': z
          .string()
          .openapi({
            param: {
              name: 'deployment_version.build_id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: UpdateWorkerDeploymentVersionMetadataRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': { schema: UpdateWorkerDeploymentVersionMetadataResponseSchema },
        },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdValidateComputeConfigRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/namespaces/{namespace}/worker-deployment-versions/{deployment_version.deployment_name}/{deployment_version.build_id}/validate-compute-config',
    tags: ['WorkflowService'],
    description:
      'Validates the compute config without attaching it to a Worker Deployment Version.\n Experimental. This API might significantly change or be removed in a future release.',
    operationId: 'ValidateWorkerDeploymentVersionComputeConfig',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'deployment_version.deployment_name': z
          .string()
          .openapi({
            param: {
              name: 'deployment_version.deployment_name',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'deployment_version.build_id': z
          .string()
          .openapi({
            param: {
              name: 'deployment_version.build_id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: ValidateWorkerDeploymentVersionComputeConfigRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: ValidateWorkerDeploymentVersionComputeConfigResponseSchema,
          },
        },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const getApiV1NamespacesNamespaceWorkerDeploymentsRoute = createRoute({
  method: 'get',
  path: '/api/v1/namespaces/{namespace}/worker-deployments',
  tags: ['WorkflowService'],
  description:
    'Lists all Worker Deployments that are tracked in the Namespace.\n Experimental. This API might significantly change or be removed in a future release.',
  operationId: 'ListWorkerDeployments',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      nextPageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextPageToken',
            in: 'query',
            schema: { type: 'string', format: 'bytes' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListWorkerDeploymentsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameRoute = createRoute({
  method: 'get',
  path: '/api/v1/namespaces/{namespace}/worker-deployments/{deploymentName}',
  tags: ['WorkflowService'],
  description:
    'Describes a Worker Deployment.\n Experimental. This API might significantly change or be removed in a future release.',
  operationId: 'DescribeWorkerDeployment',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      deploymentName: z
        .string()
        .openapi({
          param: { name: 'deploymentName', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DescribeWorkerDeploymentResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/worker-deployments/{deploymentName}',
  tags: ['WorkflowService'],
  description:
    'Creates a new Worker Deployment.\n\n Experimental. This API might significantly change or be removed in a\n future release.',
  operationId: 'CreateWorkerDeployment',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      deploymentName: z
        .string()
        .openapi({
          param: {
            name: 'deploymentName',
            in: 'path',
            description:
              'The name of the Worker Deployment to create. If a Worker Deployment with\n this name already exists, an error will be returned.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateWorkerDeploymentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CreateWorkerDeploymentResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const deleteApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameRoute = createRoute({
  method: 'delete',
  path: '/api/v1/namespaces/{namespace}/worker-deployments/{deploymentName}',
  tags: ['WorkflowService'],
  description:
    'Deletes records of (an old) Deployment. A deployment can only be deleted if\n it has no Version in it.\n Experimental. This API might significantly change or be removed in a future release.',
  operationId: 'DeleteWorkerDeployment',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      deploymentName: z
        .string()
        .openapi({
          param: { name: 'deploymentName', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      identity: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'identity',
            in: 'query',
            description: 'Optional. The identity of the client who initiated this request.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DeleteWorkerDeploymentResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetCurrentVersionRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/namespaces/{namespace}/worker-deployments/{deploymentName}/set-current-version',
    tags: ['WorkflowService'],
    description:
      'Set/unset the Current Version of a Worker Deployment. Automatically unsets the Ramping\n Version if it is the Version being set as Current.\n Experimental. This API might significantly change or be removed in a future release.',
    operationId: 'SetWorkerDeploymentCurrentVersion',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
          }),
        deploymentName: z
          .string()
          .openapi({
            param: {
              name: 'deploymentName',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: SetWorkerDeploymentCurrentVersionRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': { schema: SetWorkerDeploymentCurrentVersionResponseSchema },
        },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetManagerRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/namespaces/{namespace}/worker-deployments/{deploymentName}/set-manager',
    tags: ['WorkflowService'],
    description:
      'Set/unset the ManagerIdentity of a Worker Deployment.\n Experimental. This API might significantly change or be removed in a future release.',
    operationId: 'SetWorkerDeploymentManager',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
          }),
        deploymentName: z
          .string()
          .openapi({
            param: {
              name: 'deploymentName',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: SetWorkerDeploymentManagerRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: SetWorkerDeploymentManagerResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetRampingVersionRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/namespaces/{namespace}/worker-deployments/{deploymentName}/set-ramping-version',
    tags: ['WorkflowService'],
    description:
      'Set/unset the Ramping Version of a Worker Deployment and its ramp percentage. Can be used for\n gradual ramp to unversioned workers too.\n Experimental. This API might significantly change or be removed in a future release.',
    operationId: 'SetWorkerDeploymentRampingVersion',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
          }),
        deploymentName: z
          .string()
          .openapi({
            param: {
              name: 'deploymentName',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: SetWorkerDeploymentRampingVersionRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': { schema: SetWorkerDeploymentRampingVersionResponseSchema },
        },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const getApiV1NamespacesNamespaceWorkerTaskReachabilityRoute = createRoute({
  method: 'get',
  path: '/api/v1/namespaces/{namespace}/worker-task-reachability',
  tags: ['WorkflowService'],
  description:
    "Deprecated. Use `DescribeTaskQueue`.\n\n Fetches task reachability to determine whether a worker may be retired.\n The request may specify task queues to query for or let the server fetch all task queues mapped to the given\n build IDs.\n\n When requesting a large number of task queues or all task queues associated with the given build ids in a\n namespace, all task queues will be listed in the response but some of them may not contain reachability\n information due to a server enforced limit. When reaching the limit, task queues that reachability information\n could not be retrieved for will be marked with a single TASK_REACHABILITY_UNSPECIFIED entry. The caller may issue\n another call to get the reachability for those task queues.\n\n Open source users can adjust this limit by setting the server's dynamic config value for\n `limit.reachabilityTaskQueueScan` with the caveat that this call can strain the visibility store.",
  operationId: 'GetWorkerTaskReachability',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      buildIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'buildIds',
            in: 'query',
            description:
              "Build ids to retrieve reachability for. An empty string will be interpreted as an unversioned worker.\n The number of build ids that can be queried in a single API call is limited.\n Open source users can adjust this limit by setting the server's dynamic config value for\n `limit.reachabilityQueryBuildIds` with the caveat that this call can strain the visibility store.",
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      taskQueues: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'taskQueues',
            in: 'query',
            description:
              'Task queues to retrieve reachability for. Leave this empty to query for all task queues associated with given\n build ids in the namespace.\n Must specify at least one task queue if querying for an unversioned worker.\n The number of task queues that the server will fetch reachability information for is limited.\n See the `GetWorkerTaskReachabilityResponse` documentation for more information.',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      reachability: z
        .enum([
          'TASK_REACHABILITY_UNSPECIFIED',
          'TASK_REACHABILITY_NEW_WORKFLOWS',
          'TASK_REACHABILITY_EXISTING_WORKFLOWS',
          'TASK_REACHABILITY_OPEN_WORKFLOWS',
          'TASK_REACHABILITY_CLOSED_WORKFLOWS',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'reachability',
            in: 'query',
            description:
              'Type of reachability to query for.\n `TASK_REACHABILITY_NEW_WORKFLOWS` is always returned in the response.\n Use `TASK_REACHABILITY_EXISTING_WORKFLOWS` if your application needs to respond to queries on closed workflows.\n Otherwise, use `TASK_REACHABILITY_OPEN_WORKFLOWS`. Default is `TASK_REACHABILITY_EXISTING_WORKFLOWS` if left\n unspecified.\n See the TaskReachability docstring for information about each enum variant.',
            schema: {
              enum: [
                'TASK_REACHABILITY_UNSPECIFIED',
                'TASK_REACHABILITY_NEW_WORKFLOWS',
                'TASK_REACHABILITY_EXISTING_WORKFLOWS',
                'TASK_REACHABILITY_OPEN_WORKFLOWS',
                'TASK_REACHABILITY_CLOSED_WORKFLOWS',
              ],
              type: 'string',
              format: 'enum',
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetWorkerTaskReachabilityResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiV1NamespacesNamespaceWorkersRoute = createRoute({
  method: 'get',
  path: '/api/v1/namespaces/{namespace}/workers',
  tags: ['WorkflowService'],
  description:
    'ListWorkers is a visibility API to list worker status information in a specific namespace.',
  operationId: 'ListWorkers',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      nextPageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextPageToken',
            in: 'query',
            schema: { type: 'string', format: 'bytes' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description:
              '`query` in ListWorkers is used to filter workers based on worker attributes.\n Supported attributes:\n* WorkerInstanceKey\n* WorkerIdentity\n* HostName\n* TaskQueue\n* DeploymentName\n* BuildId\n* SdkName\n* SdkVersion\n* StartTime\n* Status',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includeSystemWorkers: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeSystemWorkers',
            in: 'query',
            description:
              'When true, the response will include system workers that are created implicitly\n by the server and not by the user. By default, system workers are excluded.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListWorkersResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiV1NamespacesNamespaceWorkersDescribeWorkerInstanceKeyRoute = createRoute({
  method: 'get',
  path: '/api/v1/namespaces/{namespace}/workers/describe/{workerInstanceKey}',
  tags: ['WorkflowService'],
  description: 'DescribeWorker returns information about the specified worker.',
  operationId: 'DescribeWorker',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace this worker belongs to.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      workerInstanceKey: z
        .string()
        .openapi({
          param: {
            name: 'workerInstanceKey',
            in: 'path',
            description: 'Worker instance key to describe.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DescribeWorkerResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceWorkersFetchConfigRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/workers/fetch-config',
  tags: ['WorkflowService'],
  description: 'FetchWorkerConfig returns the worker configuration for a specific worker.',
  operationId: 'FetchWorkerConfig',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace this worker belongs to.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: FetchWorkerConfigRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: FetchWorkerConfigResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceWorkersHeartbeatRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/workers/heartbeat',
  tags: ['WorkflowService'],
  description: 'WorkerHeartbeat receive heartbeat request from the worker.',
  operationId: 'RecordWorkerHeartbeat',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace this worker belongs to.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RecordWorkerHeartbeatRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RecordWorkerHeartbeatResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceWorkersUpdateConfigRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/workers/update-config',
  tags: ['WorkflowService'],
  description:
    'UpdateWorkerConfig updates the worker configuration of one or more workers.\n Can be used to partially update the worker configuration.\n Can be used to update the configuration of multiple workers.',
  operationId: 'UpdateWorkerConfig',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace this worker belongs to.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateWorkerConfigRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UpdateWorkerConfigResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiV1NamespacesNamespaceWorkflowCountRoute = createRoute({
  method: 'get',
  path: '/api/v1/namespaces/{namespace}/workflow-count',
  tags: ['WorkflowService'],
  description:
    'CountWorkflowExecutions is a visibility API to count of workflow executions in a specific namespace.',
  operationId: 'CountWorkflowExecutions',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'query', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CountWorkflowExecutionsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiV1NamespacesNamespaceWorkflowRulesRoute = createRoute({
  method: 'get',
  path: '/api/v1/namespaces/{namespace}/workflow-rules',
  tags: ['WorkflowService'],
  description: 'Return all namespace workflow rules',
  operationId: 'ListWorkflowRules',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      nextPageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextPageToken',
            in: 'query',
            schema: { type: 'string', format: 'bytes' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListWorkflowRulesResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceWorkflowRulesRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/workflow-rules',
  tags: ['WorkflowService'],
  description:
    'Create a new workflow rule. The rules are used to control the workflow execution.\n The rule will be applied to all running and new workflows in the namespace.\n If the rule with such ID already exist this call will fail\n Note: the rules are part of namespace configuration and will be stored in the namespace config.\n Namespace config is eventually consistent.',
  operationId: 'CreateWorkflowRule',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateWorkflowRuleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CreateWorkflowRuleResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiV1NamespacesNamespaceWorkflowRulesRuleIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/namespaces/{namespace}/workflow-rules/{ruleId}',
  tags: ['WorkflowService'],
  description:
    'DescribeWorkflowRule return the rule specification for existing rule id.\n If there is no rule with such id - NOT FOUND error will be returned.',
  operationId: 'DescribeWorkflowRule',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      ruleId: z
        .string()
        .openapi({
          param: {
            name: 'ruleId',
            in: 'path',
            description: 'User-specified ID of the rule to read. Unique within the namespace.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DescribeWorkflowRuleResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const deleteApiV1NamespacesNamespaceWorkflowRulesRuleIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/namespaces/{namespace}/workflow-rules/{ruleId}',
  tags: ['WorkflowService'],
  description: 'Delete rule by rule id',
  operationId: 'DeleteWorkflowRule',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      ruleId: z
        .string()
        .openapi({
          param: {
            name: 'ruleId',
            in: 'path',
            description: 'ID of the rule to delete. Unique within the namespace.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DeleteWorkflowRuleResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiV1NamespacesNamespaceWorkflowsRoute = createRoute({
  method: 'get',
  path: '/api/v1/namespaces/{namespace}/workflows',
  tags: ['WorkflowService'],
  description:
    'ListWorkflowExecutions is a visibility API to list workflow executions in a specific namespace.',
  operationId: 'ListWorkflowExecutions',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      nextPageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextPageToken',
            in: 'query',
            schema: { type: 'string', format: 'bytes' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'query', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListWorkflowExecutionsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/namespaces/{namespace}/workflows/{execution.workflow_id}',
  tags: ['WorkflowService'],
  description:
    'DescribeWorkflowExecution returns information about the specified workflow execution.',
  operationId: 'DescribeWorkflowExecution',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      'execution.workflow_id': z
        .string()
        .openapi({
          param: {
            name: 'execution.workflow_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'execution.workflowId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'execution.workflowId',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'execution.runId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'execution.runId',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DescribeWorkflowExecutionResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryRoute = createRoute({
  method: 'get',
  path: '/api/v1/namespaces/{namespace}/workflows/{execution.workflow_id}/history',
  tags: ['WorkflowService'],
  description:
    'GetWorkflowExecutionHistory returns the history of specified workflow execution. Fails with\n `NotFound` if the specified workflow execution is unknown to the service.',
  operationId: 'GetWorkflowExecutionHistory',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      'execution.workflow_id': z
        .string()
        .openapi({
          param: {
            name: 'execution.workflow_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'execution.workflowId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'execution.workflowId',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'execution.runId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'execution.runId',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maximumPageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maximumPageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      nextPageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextPageToken',
            in: 'query',
            description:
              'If a `GetWorkflowExecutionHistoryResponse` or a `PollWorkflowTaskQueueResponse` had one of\n these, it should be passed here to fetch the next page.',
            schema: { type: 'string', format: 'bytes' },
            required: false,
          },
        }),
      waitNewEvent: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'waitNewEvent',
            in: 'query',
            description:
              'If set to true, the RPC call will not resolve until there is a new event which matches\n the `history_event_filter_type`, or a timeout is hit.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      historyEventFilterType: z
        .enum([
          'HISTORY_EVENT_FILTER_TYPE_UNSPECIFIED',
          'HISTORY_EVENT_FILTER_TYPE_ALL_EVENT',
          'HISTORY_EVENT_FILTER_TYPE_CLOSE_EVENT',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'historyEventFilterType',
            in: 'query',
            description:
              'Filter returned events such that they match the specified filter type.\n Default: HISTORY_EVENT_FILTER_TYPE_ALL_EVENT.',
            schema: {
              enum: [
                'HISTORY_EVENT_FILTER_TYPE_UNSPECIFIED',
                'HISTORY_EVENT_FILTER_TYPE_ALL_EVENT',
                'HISTORY_EVENT_FILTER_TYPE_CLOSE_EVENT',
              ],
              type: 'string',
              format: 'enum',
            },
            required: false,
          },
        }),
      skipArchival: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'skipArchival',
            in: 'query',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetWorkflowExecutionHistoryResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryReverseRoute =
  createRoute({
    method: 'get',
    path: '/api/v1/namespaces/{namespace}/workflows/{execution.workflow_id}/history-reverse',
    tags: ['WorkflowService'],
    description:
      'GetWorkflowExecutionHistoryReverse returns the history of specified workflow execution in reverse\n order (starting from last event). Fails with`NotFound` if the specified workflow execution is\n unknown to the service.',
    operationId: 'GetWorkflowExecutionHistoryReverse',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'execution.workflow_id': z
          .string()
          .openapi({
            param: {
              name: 'execution.workflow_id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        'execution.workflowId': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'execution.workflowId',
              in: 'query',
              schema: { type: 'string' },
              required: false,
            },
          }),
        'execution.runId': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'execution.runId',
              in: 'query',
              schema: { type: 'string' },
              required: false,
            },
          }),
        maximumPageSize: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .exactOptional()
          .openapi({
            param: {
              name: 'maximumPageSize',
              in: 'query',
              schema: { type: 'integer', format: 'int32' },
              required: false,
            },
          }),
        nextPageToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'nextPageToken',
              in: 'query',
              schema: { type: 'string', format: 'bytes' },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': { schema: GetWorkflowExecutionHistoryReverseResponseSchema },
        },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdQueryQueryQueryTypeRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/namespaces/{namespace}/workflows/{execution.workflow_id}/query/{query.query_type}',
    tags: ['WorkflowService'],
    description: 'QueryWorkflow requests a query be executed for a specified workflow execution.',
    operationId: 'QueryWorkflow',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'execution.workflow_id': z
          .string()
          .openapi({
            param: {
              name: 'execution.workflow_id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'query.query_type': z
          .string()
          .openapi({
            param: {
              name: 'query.query_type',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: QueryWorkflowRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: QueryWorkflowResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdTriggerRuleRoute = createRoute(
  {
    method: 'post',
    path: '/api/v1/namespaces/{namespace}/workflows/{execution.workflow_id}/trigger-rule',
    tags: ['WorkflowService'],
    description:
      'TriggerWorkflowRule allows to:\n  * trigger existing rule for a specific workflow execution;\n  * trigger rule for a specific workflow execution without creating a rule;\n This is useful for one-off operations.',
    operationId: 'TriggerWorkflowRule',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'execution.workflow_id': z
          .string()
          .openapi({
            param: {
              name: 'execution.workflow_id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: TriggerWorkflowRuleRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: TriggerWorkflowRuleResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  },
)

export const postApiV1NamespacesNamespaceWorkflowsWorkflowIdRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/workflows/{workflowId}',
  tags: ['WorkflowService'],
  description:
    'StartWorkflowExecution starts a new workflow execution.\n\n It will create the execution with a `WORKFLOW_EXECUTION_STARTED` event in its history and\n also schedule the first workflow task. Returns `WorkflowExecutionAlreadyStarted`, if an\n instance already exists with same workflow id.',
  operationId: 'StartWorkflowExecution',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      workflowId: z
        .string()
        .openapi({
          param: { name: 'workflowId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartWorkflowExecutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: StartWorkflowExecutionResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdCompleteRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/namespaces/{namespace}/workflows/{workflowId}/activities/{activityId}/complete',
    tags: ['WorkflowService'],
    description:
      'See `RespondActivityTaskCompleted`. This version allows clients to record completions by\n namespace/workflow id/activity id instead of task token.\n\n (-- api-linter: core::0136::prepositions=disabled\n     aip.dev/not-precedent: "By" is used to indicate request type. --)',
    operationId: 'RespondActivityTaskCompletedById',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: {
              name: 'namespace',
              in: 'path',
              description: 'Namespace of the workflow which scheduled this activity',
              required: true,
              schema: { type: 'string' },
            },
          }),
        workflowId: z
          .string()
          .openapi({
            param: {
              name: 'workflowId',
              in: 'path',
              description:
                'Id of the workflow which scheduled this activity, leave empty to target a standalone activity',
              required: true,
              schema: { type: 'string' },
            },
          }),
        activityId: z
          .string()
          .openapi({
            param: {
              name: 'activityId',
              in: 'path',
              description: 'Id of the activity to complete',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: RespondActivityTaskCompletedByIdRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: RespondActivityTaskCompletedByIdResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdFailRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/namespaces/{namespace}/workflows/{workflowId}/activities/{activityId}/fail',
    tags: ['WorkflowService'],
    description:
      'See `RecordActivityTaskFailed`. This version allows clients to record failures by\n namespace/workflow id/activity id instead of task token.\n\n (-- api-linter: core::0136::prepositions=disabled\n     aip.dev/not-precedent: "By" is used to indicate request type. --)',
    operationId: 'RespondActivityTaskFailedById',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: {
              name: 'namespace',
              in: 'path',
              description: 'Namespace of the workflow which scheduled this activity',
              required: true,
              schema: { type: 'string' },
            },
          }),
        workflowId: z
          .string()
          .openapi({
            param: {
              name: 'workflowId',
              in: 'path',
              description:
                'Id of the workflow which scheduled this activity, leave empty to target a standalone activity',
              required: true,
              schema: { type: 'string' },
            },
          }),
        activityId: z
          .string()
          .openapi({
            param: {
              name: 'activityId',
              in: 'path',
              description: 'Id of the activity to fail',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: RespondActivityTaskFailedByIdRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: RespondActivityTaskFailedByIdResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdHeartbeatRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/namespaces/{namespace}/workflows/{workflowId}/activities/{activityId}/heartbeat',
    tags: ['WorkflowService'],
    description:
      'See `RecordActivityTaskHeartbeat`. This version allows clients to record heartbeats by\n namespace/workflow id/activity id instead of task token.\n\n (-- api-linter: core::0136::prepositions=disabled\n     aip.dev/not-precedent: "By" is used to indicate request type. --)',
    operationId: 'RecordActivityTaskHeartbeatById',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: {
              name: 'namespace',
              in: 'path',
              description: 'Namespace of the workflow which scheduled this activity',
              required: true,
              schema: { type: 'string' },
            },
          }),
        workflowId: z
          .string()
          .openapi({
            param: {
              name: 'workflowId',
              in: 'path',
              description:
                'Id of the workflow which scheduled this activity, leave empty to target a standalone activity',
              required: true,
              schema: { type: 'string' },
            },
          }),
        activityId: z
          .string()
          .openapi({
            param: {
              name: 'activityId',
              in: 'path',
              description: "Id of the activity we're heartbeating",
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: RecordActivityTaskHeartbeatByIdRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: RecordActivityTaskHeartbeatByIdResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdPauseRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/namespaces/{namespace}/workflows/{workflowId}/activities/{activityId}/pause',
    tags: ['WorkflowService'],
    description:
      "PauseActivityExecution pauses the execution of an activity specified by its ID.\n This API can be used to target a workflow activity or a standalone activity\n\n Pausing an activity means:\n - If the activity is currently waiting for a retry or is running and subsequently fails,\n   it will not be rescheduled until it is unpaused.\n - If the activity is already paused, calling this method will have no effect.\n - If the activity is running and finishes successfully, the activity will be completed.\n - If the activity is running and finishes with failure:\n   * if there is no retry left - the activity will be completed.\n   * if there are more retries left - the activity will be paused.\n For long-running activities:\n - activities in paused state will send a cancellation with \"activity_paused\" set to 'true' in response to 'RecordActivityTaskHeartbeat'.\n\n Returns a `NotFound` error if there is no pending activity with the provided ID",
    operationId: 'PauseActivityExecution',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: {
              name: 'namespace',
              in: 'path',
              description: 'Namespace of the workflow which scheduled this activity.',
              required: true,
              schema: { type: 'string' },
            },
          }),
        workflowId: z
          .string()
          .openapi({
            param: {
              name: 'workflowId',
              in: 'path',
              description:
                'If provided, pause a workflow activity (or activities) for the given workflow ID.\n If empty, targets a standalone activity.',
              required: true,
              schema: { type: 'string' },
            },
          }),
        activityId: z
          .string()
          .openapi({
            param: {
              name: 'activityId',
              in: 'path',
              description: 'The ID of the activity to target.',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: PauseActivityExecutionRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: PauseActivityExecutionResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResetRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/namespaces/{namespace}/workflows/{workflowId}/activities/{activityId}/reset',
    tags: ['WorkflowService'],
    description:
      "ResetActivityExecution resets the execution of an activity specified by its ID.\n This API can be used to target a workflow activity or a standalone activity.\n\n Resetting an activity means:\n * number of attempts will be reset to 0.\n * activity timeouts will be reset.\n * if the activity is waiting for retry, and it is not paused or 'keep_paused' is not provided:\n    it will be scheduled immediately (* see 'jitter' flag)\n\n Returns a `NotFound` error if there is no pending activity with the provided ID or type.",
    operationId: 'ResetActivityExecution',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: {
              name: 'namespace',
              in: 'path',
              description: 'Namespace of the workflow which scheduled this activity.',
              required: true,
              schema: { type: 'string' },
            },
          }),
        workflowId: z
          .string()
          .openapi({
            param: {
              name: 'workflowId',
              in: 'path',
              description:
                'If provided, targets a workflow activity for the given workflow ID.\n If empty, targets a standalone activity.',
              required: true,
              schema: { type: 'string' },
            },
          }),
        activityId: z
          .string()
          .openapi({
            param: {
              name: 'activityId',
              in: 'path',
              description: 'The ID of the activity to target.',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: ResetActivityExecutionRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: ResetActivityExecutionResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResolveAsCanceledRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/namespaces/{namespace}/workflows/{workflowId}/activities/{activityId}/resolve-as-canceled',
    tags: ['WorkflowService'],
    description:
      'See `RespondActivityTaskCanceled`. This version allows clients to record failures by\n namespace/workflow id/activity id instead of task token.\n\n (-- api-linter: core::0136::prepositions=disabled\n     aip.dev/not-precedent: "By" is used to indicate request type. --)',
    operationId: 'RespondActivityTaskCanceledById',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: {
              name: 'namespace',
              in: 'path',
              description: 'Namespace of the workflow which scheduled this activity',
              required: true,
              schema: { type: 'string' },
            },
          }),
        workflowId: z
          .string()
          .openapi({
            param: {
              name: 'workflowId',
              in: 'path',
              description:
                'Id of the workflow which scheduled this activity, leave empty to target a standalone activity',
              required: true,
              schema: { type: 'string' },
            },
          }),
        activityId: z
          .string()
          .openapi({
            param: {
              name: 'activityId',
              in: 'path',
              description: 'Id of the activity to confirm is cancelled',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: RespondActivityTaskCanceledByIdRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: RespondActivityTaskCanceledByIdResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUnpauseRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/namespaces/{namespace}/workflows/{workflowId}/activities/{activityId}/unpause',
    tags: ['WorkflowService'],
    description:
      "UnpauseActivityExecution unpauses the execution of an activity specified by its ID.\n This API can be used to target a workflow activity or a standalone activity.\n\n If activity is not paused, this call will have no effect.\n If the activity was paused while waiting for retry, it will be scheduled immediately (* see 'jitter' flag).\n Once the activity is unpaused, all timeout timers will be regenerated.\n\n Returns a `NotFound` error if there is no pending activity with the provided ID",
    operationId: 'UnpauseActivityExecution',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: {
              name: 'namespace',
              in: 'path',
              description: 'Namespace of the workflow which scheduled this activity.',
              required: true,
              schema: { type: 'string' },
            },
          }),
        workflowId: z
          .string()
          .openapi({
            param: {
              name: 'workflowId',
              in: 'path',
              description:
                'If provided, targets a workflow activity for the given workflow ID.\n If empty, targets a standalone activity.',
              required: true,
              schema: { type: 'string' },
            },
          }),
        activityId: z
          .string()
          .openapi({
            param: {
              name: 'activityId',
              in: 'path',
              description: 'The ID of the activity to target.',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UnpauseActivityExecutionRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: UnpauseActivityExecutionResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUpdateOptionsRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/namespaces/{namespace}/workflows/{workflowId}/activities/{activityId}/update-options',
    tags: ['WorkflowService'],
    description:
      'UpdateActivityExecutionOptions is called by the client to update the options of an activity by its ID.\n This API can be used to target a workflow activity or a standalone activity.',
    operationId: 'UpdateActivityExecutionOptions',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: {
              name: 'namespace',
              in: 'path',
              description: 'Namespace of the workflow which scheduled this activity',
              required: true,
              schema: { type: 'string' },
            },
          }),
        workflowId: z
          .string()
          .openapi({
            param: {
              name: 'workflowId',
              in: 'path',
              description:
                'If provided, targets a workflow activity for the given workflow ID.\n If empty, targets a standalone activity.',
              required: true,
              schema: { type: 'string' },
            },
          }),
        activityId: z
          .string()
          .openapi({
            param: {
              name: 'activityId',
              in: 'path',
              description: 'The ID of the activity to target.',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateActivityExecutionOptionsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: UpdateActivityExecutionOptionsResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postApiV1NamespacesNamespaceWorkflowsWorkflowIdPauseRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/workflows/{workflowId}/pause',
  tags: ['WorkflowService'],
  description:
    'Note: This is an experimental API and the behavior may change in a future release.\n PauseWorkflowExecution pauses the workflow execution specified in the request. Pausing a workflow execution results in\n - The workflow execution status changes to `PAUSED` and a new WORKFLOW_EXECUTION_PAUSED event is added to the history\n - No new workflow tasks or activity tasks are dispatched.\n   - Any workflow task currently executing on the worker will be allowed to complete.\n   - Any activity task currently executing will be paused.\n - All server-side events will continue to be processed by the server.\n - Queries & Updates on a paused workflow will be rejected.',
  operationId: 'PauseWorkflowExecution',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace of the workflow to pause.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      workflowId: z
        .string()
        .openapi({
          param: {
            name: 'workflowId',
            in: 'path',
            description: 'ID of the workflow execution to be paused. Required.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PauseWorkflowExecutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PauseWorkflowExecutionResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceWorkflowsWorkflowIdSignalWithStartSignalNameRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/namespaces/{namespace}/workflows/{workflowId}/signal-with-start/{signalName}',
    tags: ['WorkflowService'],
    description:
      'SignalWithStartWorkflowExecution is used to ensure a signal is sent to a workflow, even if\n it isn\'t yet started.\n\n If the workflow is running, a `WORKFLOW_EXECUTION_SIGNALED` event is recorded in the history\n and a workflow task is generated.\n\n If the workflow is not running or not found, then the workflow is created with\n `WORKFLOW_EXECUTION_STARTED` and `WORKFLOW_EXECUTION_SIGNALED` events in its history, and a\n workflow task is generated.\n\n (-- api-linter: core::0136::prepositions=disabled\n     aip.dev/not-precedent: "With" is used to indicate combined operation. --)',
    operationId: 'SignalWithStartWorkflowExecution',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
          }),
        workflowId: z
          .string()
          .openapi({
            param: { name: 'workflowId', in: 'path', required: true, schema: { type: 'string' } },
          }),
        signalName: z
          .string()
          .openapi({
            param: {
              name: 'signalName',
              in: 'path',
              description: 'The workflow author-defined name of the signal to send to the workflow',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: SignalWithStartWorkflowExecutionRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: SignalWithStartWorkflowExecutionResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postApiV1NamespacesNamespaceWorkflowsWorkflowIdUnpauseRoute = createRoute({
  method: 'post',
  path: '/api/v1/namespaces/{namespace}/workflows/{workflowId}/unpause',
  tags: ['WorkflowService'],
  description:
    'Note: This is an experimental API and the behavior may change in a future release.\n UnpauseWorkflowExecution unpauses a previously paused workflow execution specified in the request.\n Unpausing a workflow execution results in\n - The workflow execution status changes to `RUNNING` and a new WORKFLOW_EXECUTION_UNPAUSED event is added to the history\n - Workflow tasks and activity tasks are resumed.',
  operationId: 'UnpauseWorkflowExecution',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace of the workflow to unpause.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      workflowId: z
        .string()
        .openapi({
          param: {
            name: 'workflowId',
            in: 'path',
            description: 'ID of the workflow execution to be paused. Required.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UnpauseWorkflowExecutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UnpauseWorkflowExecutionResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdCancelRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/namespaces/{namespace}/workflows/{workflow_execution.workflow_id}/cancel',
    tags: ['WorkflowService'],
    description:
      "RequestCancelWorkflowExecution is called by workers when they want to request cancellation of\n a workflow execution.\n\n This results in a new `WORKFLOW_EXECUTION_CANCEL_REQUESTED` event being written to the\n workflow history and a new workflow task created for the workflow. It returns success if the requested\n workflow is already closed. It fails with 'NotFound' if the requested workflow doesn't exist.",
    operationId: 'RequestCancelWorkflowExecution',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'workflow_execution.workflow_id': z
          .string()
          .openapi({
            param: {
              name: 'workflow_execution.workflow_id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: RequestCancelWorkflowExecutionRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: RequestCancelWorkflowExecutionResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdResetRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/namespaces/{namespace}/workflows/{workflow_execution.workflow_id}/reset',
    tags: ['WorkflowService'],
    description:
      'ResetWorkflowExecution will reset an existing workflow execution to a specified\n `WORKFLOW_TASK_COMPLETED` event (exclusive). It will immediately terminate the current\n execution instance. "Exclusive" means the identified completed event itself is not replayed\n in the reset history; the preceding `WORKFLOW_TASK_STARTED` event remains and will be marked as failed\n immediately, and a new workflow task will be scheduled to retry it.',
    operationId: 'ResetWorkflowExecution',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'workflow_execution.workflow_id': z
          .string()
          .openapi({
            param: {
              name: 'workflow_execution.workflow_id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: ResetWorkflowExecutionRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: ResetWorkflowExecutionResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdSignalSignalNameRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/namespaces/{namespace}/workflows/{workflow_execution.workflow_id}/signal/{signalName}',
    tags: ['WorkflowService'],
    description:
      'SignalWorkflowExecution is used to send a signal to a running workflow execution.\n\n This results in a `WORKFLOW_EXECUTION_SIGNALED` event recorded in the history and a workflow\n task being created for the execution.',
    operationId: 'SignalWorkflowExecution',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'workflow_execution.workflow_id': z
          .string()
          .openapi({
            param: {
              name: 'workflow_execution.workflow_id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        signalName: z
          .string()
          .openapi({
            param: {
              name: 'signalName',
              in: 'path',
              description: 'The workflow author-defined name of the signal to send to the workflow',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: SignalWorkflowExecutionRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: SignalWorkflowExecutionResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdTerminateRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/namespaces/{namespace}/workflows/{workflow_execution.workflow_id}/terminate',
    tags: ['WorkflowService'],
    description:
      'TerminateWorkflowExecution terminates an existing workflow execution by recording a\n `WORKFLOW_EXECUTION_TERMINATED` event in the history and immediately terminating the\n execution instance.',
    operationId: 'TerminateWorkflowExecution',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'workflow_execution.workflow_id': z
          .string()
          .openapi({
            param: {
              name: 'workflow_execution.workflow_id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: TerminateWorkflowExecutionRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: TerminateWorkflowExecutionResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateOptionsRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/namespaces/{namespace}/workflows/{workflow_execution.workflow_id}/update-options',
    tags: ['WorkflowService'],
    description:
      'UpdateWorkflowExecutionOptions partially updates the WorkflowExecutionOptions of an existing workflow execution.',
    operationId: 'UpdateWorkflowExecutionOptions',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: {
              name: 'namespace',
              in: 'path',
              description: 'The namespace name of the target Workflow.',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'workflow_execution.workflow_id': z
          .string()
          .openapi({
            param: {
              name: 'workflow_execution.workflow_id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateWorkflowExecutionOptionsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: UpdateWorkflowExecutionOptionsResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateRequestInputNameRoute =
  createRoute({
    method: 'post',
    path: '/api/v1/namespaces/{namespace}/workflows/{workflow_execution.workflow_id}/update/{request.input.name}',
    tags: ['WorkflowService'],
    description: 'Invokes the specified Update function on user Workflow code.',
    operationId: 'UpdateWorkflowExecution',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: {
              name: 'namespace',
              in: 'path',
              description: 'The namespace name of the target Workflow.',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'workflow_execution.workflow_id': z
          .string()
          .openapi({
            param: {
              name: 'workflow_execution.workflow_id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'request.input.name': z
          .string()
          .openapi({
            param: {
              name: 'request.input.name',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateWorkflowExecutionRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: UpdateWorkflowExecutionResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const getApiV1NexusEndpointsRoute = createRoute({
  method: 'get',
  path: '/api/v1/nexus/endpoints',
  tags: ['OperatorService'],
  description:
    "List all Nexus endpoints for the cluster, sorted by ID in ascending order. Set page_token in the request to the\n next_page_token field of the previous response to get the next page of results. An empty next_page_token\n indicates that there are no more results. During pagination, a newly added service with an ID lexicographically\n earlier than the previous page's last endpoint's ID may be missed.",
  operationId: 'ListNexusEndpoints',
  request: {
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      nextPageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextPageToken',
            in: 'query',
            description:
              "To get the next page, pass in `ListNexusEndpointsResponse.next_page_token` from the previous page's\n response, the token will be empty if there's no other page.\n Note: the last page may be empty if the total number of endpoints registered is a multiple of the page size.",
            schema: { type: 'string', format: 'bytes' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description:
              'Name of the incoming endpoint to filter on - optional. Specifying this will result in zero or one results.\n (-- api-linter: core::203::field-behavior-required=disabled\n     aip.dev/not-precedent: Not following linter rules. --)',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListNexusEndpointsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NexusEndpointsRoute = createRoute({
  method: 'post',
  path: '/api/v1/nexus/endpoints',
  tags: ['OperatorService'],
  description:
    'Create a Nexus endpoint. This will fail if an endpoint with the same name is already registered with a status of\n ALREADY_EXISTS.\n Returns the created endpoint with its initial version. You may use this version for subsequent updates.',
  operationId: 'CreateNexusEndpoint',
  request: {
    body: {
      content: { 'application/json': { schema: CreateNexusEndpointRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CreateNexusEndpointResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiV1NexusEndpointsIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/nexus/endpoints/{id}',
  tags: ['OperatorService'],
  description:
    'Get a registered Nexus endpoint by ID. The returned version can be used for optimistic updates.',
  operationId: 'GetNexusEndpoint',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'Server-generated unique endpoint ID.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetNexusEndpointResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const deleteApiV1NexusEndpointsIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/nexus/endpoints/{id}',
  tags: ['OperatorService'],
  description: 'Delete an incoming Nexus service by ID.',
  operationId: 'DeleteNexusEndpoint',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'Server-generated unique endpoint ID.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            description: 'Data version for this endpoint. Must match current version.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DeleteNexusEndpointResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiV1NexusEndpointsIdUpdateRoute = createRoute({
  method: 'post',
  path: '/api/v1/nexus/endpoints/{id}/update',
  tags: ['OperatorService'],
  description:
    "Optimistically update a Nexus endpoint based on provided version as obtained via the `GetNexusEndpoint` or\n `ListNexusEndpointResponse` APIs. This will fail with a status of FAILED_PRECONDITION if the version does not\n match.\n Returns the updated endpoint with its updated version. You may use this version for subsequent updates. You don't\n need to increment the version yourself. The server will increment the version for you after each update.",
  operationId: 'UpdateNexusEndpoint',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'Server-generated unique endpoint ID.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateNexusEndpointRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UpdateNexusEndpointResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiV1SystemInfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/system-info',
  tags: ['WorkflowService'],
  description: 'GetSystemInfo returns information about the system.',
  operationId: 'GetSystemInfo',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetSystemInfoResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getClusterRoute = createRoute({
  method: 'get',
  path: '/cluster',
  tags: ['WorkflowService'],
  description: 'GetClusterInfo returns information about temporal cluster',
  operationId: 'GetClusterInfo',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetClusterInfoResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getClusterNamespacesRoute = createRoute({
  method: 'get',
  path: '/cluster/namespaces',
  tags: ['WorkflowService'],
  description: 'ListNamespaces returns the information and configuration for all namespaces.',
  operationId: 'ListNamespaces',
  request: {
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      nextPageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextPageToken',
            in: 'query',
            schema: { type: 'string', format: 'bytes' },
            required: false,
          },
        }),
      'namespaceFilter.includeDeleted': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'namespaceFilter.includeDeleted',
            in: 'query',
            description:
              'By default namespaces in NAMESPACE_STATE_DELETED state are not included.\n Setting include_deleted to true will include deleted namespaces.\n Note: Namespace is in NAMESPACE_STATE_DELETED state when it was deleted from the system but associated data is not deleted yet.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListNamespacesResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postClusterNamespacesRoute = createRoute({
  method: 'post',
  path: '/cluster/namespaces',
  tags: ['WorkflowService'],
  description:
    'RegisterNamespace creates a new namespace which can be used as a container for all resources.\n\n A Namespace is a top level entity within Temporal, and is used as a container for resources\n like workflow executions, task queues, etc. A Namespace acts as a sandbox and provides\n isolation for all resources within the namespace. All resources belongs to exactly one\n namespace.',
  operationId: 'RegisterNamespace',
  request: {
    body: {
      content: { 'application/json': { schema: RegisterNamespaceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RegisterNamespaceResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getClusterNamespacesNamespaceRoute = createRoute({
  method: 'get',
  path: '/cluster/namespaces/{namespace}',
  tags: ['WorkflowService'],
  description:
    'DescribeNamespace returns the information and configuration for a registered namespace.',
  operationId: 'DescribeNamespace',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'id', in: 'query', schema: { type: 'string' }, required: false },
        }),
      weakConsistency: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'weakConsistency',
            in: 'query',
            description:
              'If true, the server may serve the response from an eventually-consistent\n source instead of reading through to persistence. Defaults to false,\n which preserves read-after-write consistency. SDKs should set this when\n fetching namespace capabilities on worker/client startup.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DescribeNamespaceResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getClusterNamespacesNamespaceSearchAttributesRoute = createRoute({
  method: 'get',
  path: '/cluster/namespaces/{namespace}/search-attributes',
  tags: ['OperatorService'],
  description: 'ListSearchAttributes returns comprehensive information about search attributes.',
  operationId: 'ListSearchAttributes',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListSearchAttributesResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postClusterNamespacesNamespaceUpdateRoute = createRoute({
  method: 'post',
  path: '/cluster/namespaces/{namespace}/update',
  tags: ['WorkflowService'],
  description:
    'UpdateNamespace is used to update the information and configuration of a registered\n namespace.',
  operationId: 'UpdateNamespace',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateNamespaceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UpdateNamespaceResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getClusterNexusEndpointsRoute = createRoute({
  method: 'get',
  path: '/cluster/nexus/endpoints',
  tags: ['OperatorService'],
  description:
    "List all Nexus endpoints for the cluster, sorted by ID in ascending order. Set page_token in the request to the\n next_page_token field of the previous response to get the next page of results. An empty next_page_token\n indicates that there are no more results. During pagination, a newly added service with an ID lexicographically\n earlier than the previous page's last endpoint's ID may be missed.",
  operationId: 'ListNexusEndpoints',
  request: {
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      nextPageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextPageToken',
            in: 'query',
            description:
              "To get the next page, pass in `ListNexusEndpointsResponse.next_page_token` from the previous page's\n response, the token will be empty if there's no other page.\n Note: the last page may be empty if the total number of endpoints registered is a multiple of the page size.",
            schema: { type: 'string', format: 'bytes' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description:
              'Name of the incoming endpoint to filter on - optional. Specifying this will result in zero or one results.\n (-- api-linter: core::203::field-behavior-required=disabled\n     aip.dev/not-precedent: Not following linter rules. --)',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListNexusEndpointsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postClusterNexusEndpointsRoute = createRoute({
  method: 'post',
  path: '/cluster/nexus/endpoints',
  tags: ['OperatorService'],
  description:
    'Create a Nexus endpoint. This will fail if an endpoint with the same name is already registered with a status of\n ALREADY_EXISTS.\n Returns the created endpoint with its initial version. You may use this version for subsequent updates.',
  operationId: 'CreateNexusEndpoint',
  request: {
    body: {
      content: { 'application/json': { schema: CreateNexusEndpointRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CreateNexusEndpointResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getClusterNexusEndpointsIdRoute = createRoute({
  method: 'get',
  path: '/cluster/nexus/endpoints/{id}',
  tags: ['OperatorService'],
  description:
    'Get a registered Nexus endpoint by ID. The returned version can be used for optimistic updates.',
  operationId: 'GetNexusEndpoint',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'Server-generated unique endpoint ID.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetNexusEndpointResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const deleteClusterNexusEndpointsIdRoute = createRoute({
  method: 'delete',
  path: '/cluster/nexus/endpoints/{id}',
  tags: ['OperatorService'],
  description: 'Delete an incoming Nexus service by ID.',
  operationId: 'DeleteNexusEndpoint',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'Server-generated unique endpoint ID.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            description: 'Data version for this endpoint. Must match current version.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DeleteNexusEndpointResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postClusterNexusEndpointsIdUpdateRoute = createRoute({
  method: 'post',
  path: '/cluster/nexus/endpoints/{id}/update',
  tags: ['OperatorService'],
  description:
    "Optimistically update a Nexus endpoint based on provided version as obtained via the `GetNexusEndpoint` or\n `ListNexusEndpointResponse` APIs. This will fail with a status of FAILED_PRECONDITION if the version does not\n match.\n Returns the updated endpoint with its updated version. You may use this version for subsequent updates. You don't\n need to increment the version yourself. The server will increment the version for you after each update.",
  operationId: 'UpdateNexusEndpoint',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'Server-generated unique endpoint ID.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateNexusEndpointRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UpdateNexusEndpointResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getNamespacesNamespaceActivitiesRoute = createRoute({
  method: 'get',
  path: '/namespaces/{namespace}/activities',
  tags: ['WorkflowService'],
  description:
    'ListActivityExecutions is a visibility API to list activity executions in a specific namespace.',
  operationId: 'ListActivityExecutions',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Max number of executions to return per page.',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      nextPageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextPageToken',
            in: 'query',
            description: 'Token returned in ListActivityExecutionsResponse.',
            schema: { type: 'string', format: 'bytes' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description:
              'Visibility query, see https://docs.temporal.io/list-filter for the syntax.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListActivityExecutionsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceActivitiesDeprecatedPauseRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/activities-deprecated/pause',
  tags: ['WorkflowService'],
  description:
    "PauseActivity pauses the execution of an activity specified by its ID or type.\n If there are multiple pending activities of the provided type - all of them will be paused\n\n Pausing an activity means:\n - If the activity is currently waiting for a retry or is running and subsequently fails,\n   it will not be rescheduled until it is unpaused.\n - If the activity is already paused, calling this method will have no effect.\n - If the activity is running and finishes successfully, the activity will be completed.\n - If the activity is running and finishes with failure:\n   * if there is no retry left - the activity will be completed.\n   * if there are more retries left - the activity will be paused.\n For long-running activities:\n - activities in paused state will send a cancellation with \"activity_paused\" set to 'true' in response to 'RecordActivityTaskHeartbeat'.\n - The activity should respond to the cancellation accordingly.\n\n Returns a `NotFound` error if there is no pending activity with the provided ID or type\n This API will be deprecated soon and replaced with a newer PauseActivityExecution that is better named and\n structured to work well for standalone activities.",
  operationId: 'PauseActivity',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace of the workflow which scheduled this activity.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PauseActivityRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PauseActivityResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceActivitiesDeprecatedResetRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/activities-deprecated/reset',
  tags: ['WorkflowService'],
  description:
    "ResetActivity resets the execution of an activity specified by its ID or type.\n If there are multiple pending activities of the provided type - all of them will be reset.\n\n Resetting an activity means:\n * number of attempts will be reset to 0.\n * activity timeouts will be reset.\n * if the activity is waiting for retry, and it is not paused or 'keep_paused' is not provided:\n    it will be scheduled immediately (* see 'jitter' flag),\n\n Flags:\n\n 'jitter': the activity will be scheduled at a random time within the jitter duration.\n If the activity currently paused it will be unpaused, unless 'keep_paused' flag is provided.\n 'reset_heartbeats': the activity heartbeat timer and heartbeats will be reset.\n 'keep_paused': if the activity is paused, it will remain paused.\n\n Returns a `NotFound` error if there is no pending activity with the provided ID or type.\n This API will be deprecated soon and replaced with a newer ResetActivityExecution that is better named and\n structured to work well for standalone activities.",
  operationId: 'ResetActivity',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace of the workflow which scheduled this activity.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ResetActivityRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ResetActivityResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceActivitiesDeprecatedUnpauseRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/activities-deprecated/unpause',
  tags: ['WorkflowService'],
  description:
    "UnpauseActivity unpauses the execution of an activity specified by its ID or type.\n If there are multiple pending activities of the provided type - all of them will be unpaused.\n\n If activity is not paused, this call will have no effect.\n If the activity was paused while waiting for retry, it will be scheduled immediately (* see 'jitter' flag).\n Once the activity is unpaused, all timeout timers will be regenerated.\n\n Flags:\n 'jitter': the activity will be scheduled at a random time within the jitter duration.\n 'reset_attempts': the number of attempts will be reset.\n 'reset_heartbeat': the activity heartbeat timer and heartbeats will be reset.\n\n Returns a `NotFound` error if there is no pending activity with the provided ID or type\n This API will be deprecated soon and replaced with a newer UnpauseActivityExecution that is better named and\n structured to work well for standalone activities.",
  operationId: 'UnpauseActivity',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace of the workflow which scheduled this activity.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UnpauseActivityRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UnpauseActivityResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceActivitiesDeprecatedUpdateOptionsRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/activities-deprecated/update-options',
  tags: ['WorkflowService'],
  description:
    'UpdateActivityOptions is called by the client to update the options of an activity by its ID or type.\n If there are multiple pending activities of the provided type - all of them will be updated.\n This API will be deprecated soon and replaced with a newer UpdateActivityExecutionOptions that is better named and\n structured to work well for standalone activities.',
  operationId: 'UpdateActivityOptions',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace of the workflow which scheduled this activity',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateActivityOptionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UpdateActivityOptionsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getNamespacesNamespaceActivitiesActivityIdRoute = createRoute({
  method: 'get',
  path: '/namespaces/{namespace}/activities/{activityId}',
  tags: ['WorkflowService'],
  description:
    'DescribeActivityExecution returns information about an activity execution.\n It can be used to:\n - Get current activity info without waiting\n - Long-poll for next state change and return new activity info\n Response can optionally include activity input or outcome (if the activity has completed).',
  operationId: 'DescribeActivityExecution',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      activityId: z
        .string()
        .openapi({
          param: { name: 'activityId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      runId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'runId',
            in: 'query',
            description: 'Activity run ID. If empty the request targets the latest run.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includeInput: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeInput',
            in: 'query',
            description: 'Include the input field in the response.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      includeOutcome: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeOutcome',
            in: 'query',
            description:
              'Include the outcome (result/failure) in the response if the activity has completed.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      longPollToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'longPollToken',
            in: 'query',
            description:
              'Token from a previous DescribeActivityExecutionResponse. If present, long-poll until activity\n state changes from the state encoded in this token. If absent, return current state immediately.\n If present, run_id must also be present.\n Note that activity state may change multiple times between requests, therefore it is not\n guaranteed that a client making a sequence of long-poll requests will see a complete\n sequence of state changes.',
            schema: { type: 'string', format: 'bytes' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DescribeActivityExecutionResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceActivitiesActivityIdRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/activities/{activityId}',
  tags: ['WorkflowService'],
  description:
    'StartActivityExecution starts a new activity execution.\n\n Returns an `ActivityExecutionAlreadyStarted` error if an instance already exists with same activity ID in this namespace\n unless permitted by the specified ID conflict policy.',
  operationId: 'StartActivityExecution',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      activityId: z
        .string()
        .openapi({
          param: {
            name: 'activityId',
            in: 'path',
            description:
              "Identifier for this activity. Required. This identifier should be meaningful in the user's\n own system. It must be unique among activities in the same namespace, subject to the rules\n imposed by id_reuse_policy and id_conflict_policy.",
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartActivityExecutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: StartActivityExecutionResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceActivitiesActivityIdCancelRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/activities/{activityId}/cancel',
  tags: ['WorkflowService'],
  description:
    'RequestCancelActivityExecution requests cancellation of an activity execution.\n\n Cancellation is cooperative: this call records the request, but the activity must detect and\n acknowledge it for the activity to reach CANCELED status. The cancellation signal is\n delivered via `cancel_requested` in the heartbeat response; SDKs surface this via\n language-idiomatic mechanisms (context cancellation, exceptions, abort signals).',
  operationId: 'RequestCancelActivityExecution',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      activityId: z
        .string()
        .openapi({
          param: { name: 'activityId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RequestCancelActivityExecutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RequestCancelActivityExecutionResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceActivitiesActivityIdCompleteRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/activities/{activityId}/complete',
  tags: ['WorkflowService'],
  description:
    'See `RespondActivityTaskCompleted`. This version allows clients to record completions by\n namespace/workflow id/activity id instead of task token.\n\n (-- api-linter: core::0136::prepositions=disabled\n     aip.dev/not-precedent: "By" is used to indicate request type. --)',
  operationId: 'RespondActivityTaskCompletedById',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace of the workflow which scheduled this activity',
            required: true,
            schema: { type: 'string' },
          },
        }),
      activityId: z
        .string()
        .openapi({
          param: {
            name: 'activityId',
            in: 'path',
            description: 'Id of the activity to complete',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RespondActivityTaskCompletedByIdRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RespondActivityTaskCompletedByIdResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceActivitiesActivityIdFailRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/activities/{activityId}/fail',
  tags: ['WorkflowService'],
  description:
    'See `RecordActivityTaskFailed`. This version allows clients to record failures by\n namespace/workflow id/activity id instead of task token.\n\n (-- api-linter: core::0136::prepositions=disabled\n     aip.dev/not-precedent: "By" is used to indicate request type. --)',
  operationId: 'RespondActivityTaskFailedById',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace of the workflow which scheduled this activity',
            required: true,
            schema: { type: 'string' },
          },
        }),
      activityId: z
        .string()
        .openapi({
          param: {
            name: 'activityId',
            in: 'path',
            description: 'Id of the activity to fail',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RespondActivityTaskFailedByIdRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RespondActivityTaskFailedByIdResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceActivitiesActivityIdHeartbeatRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/activities/{activityId}/heartbeat',
  tags: ['WorkflowService'],
  description:
    'See `RecordActivityTaskHeartbeat`. This version allows clients to record heartbeats by\n namespace/workflow id/activity id instead of task token.\n\n (-- api-linter: core::0136::prepositions=disabled\n     aip.dev/not-precedent: "By" is used to indicate request type. --)',
  operationId: 'RecordActivityTaskHeartbeatById',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace of the workflow which scheduled this activity',
            required: true,
            schema: { type: 'string' },
          },
        }),
      activityId: z
        .string()
        .openapi({
          param: {
            name: 'activityId',
            in: 'path',
            description: "Id of the activity we're heartbeating",
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RecordActivityTaskHeartbeatByIdRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RecordActivityTaskHeartbeatByIdResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getNamespacesNamespaceActivitiesActivityIdOutcomeRoute = createRoute({
  method: 'get',
  path: '/namespaces/{namespace}/activities/{activityId}/outcome',
  tags: ['WorkflowService'],
  description:
    'PollActivityExecution long-polls for an activity execution to complete and returns the\n outcome (result or failure).',
  operationId: 'PollActivityExecution',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      activityId: z
        .string()
        .openapi({
          param: { name: 'activityId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      runId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'runId',
            in: 'query',
            description: 'Activity run ID. If empty the request targets the latest run.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PollActivityExecutionResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceActivitiesActivityIdPauseRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/activities/{activityId}/pause',
  tags: ['WorkflowService'],
  description:
    "PauseActivityExecution pauses the execution of an activity specified by its ID.\n This API can be used to target a workflow activity or a standalone activity\n\n Pausing an activity means:\n - If the activity is currently waiting for a retry or is running and subsequently fails,\n   it will not be rescheduled until it is unpaused.\n - If the activity is already paused, calling this method will have no effect.\n - If the activity is running and finishes successfully, the activity will be completed.\n - If the activity is running and finishes with failure:\n   * if there is no retry left - the activity will be completed.\n   * if there are more retries left - the activity will be paused.\n For long-running activities:\n - activities in paused state will send a cancellation with \"activity_paused\" set to 'true' in response to 'RecordActivityTaskHeartbeat'.\n\n Returns a `NotFound` error if there is no pending activity with the provided ID",
  operationId: 'PauseActivityExecution',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace of the workflow which scheduled this activity.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      activityId: z
        .string()
        .openapi({
          param: {
            name: 'activityId',
            in: 'path',
            description: 'The ID of the activity to target.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PauseActivityExecutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PauseActivityExecutionResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceActivitiesActivityIdResetRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/activities/{activityId}/reset',
  tags: ['WorkflowService'],
  description:
    "ResetActivityExecution resets the execution of an activity specified by its ID.\n This API can be used to target a workflow activity or a standalone activity.\n\n Resetting an activity means:\n * number of attempts will be reset to 0.\n * activity timeouts will be reset.\n * if the activity is waiting for retry, and it is not paused or 'keep_paused' is not provided:\n    it will be scheduled immediately (* see 'jitter' flag)\n\n Returns a `NotFound` error if there is no pending activity with the provided ID or type.",
  operationId: 'ResetActivityExecution',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace of the workflow which scheduled this activity.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      activityId: z
        .string()
        .openapi({
          param: {
            name: 'activityId',
            in: 'path',
            description: 'The ID of the activity to target.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ResetActivityExecutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ResetActivityExecutionResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceActivitiesActivityIdResolveAsCanceledRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/activities/{activityId}/resolve-as-canceled',
  tags: ['WorkflowService'],
  description:
    'See `RespondActivityTaskCanceled`. This version allows clients to record failures by\n namespace/workflow id/activity id instead of task token.\n\n (-- api-linter: core::0136::prepositions=disabled\n     aip.dev/not-precedent: "By" is used to indicate request type. --)',
  operationId: 'RespondActivityTaskCanceledById',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace of the workflow which scheduled this activity',
            required: true,
            schema: { type: 'string' },
          },
        }),
      activityId: z
        .string()
        .openapi({
          param: {
            name: 'activityId',
            in: 'path',
            description: 'Id of the activity to confirm is cancelled',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RespondActivityTaskCanceledByIdRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RespondActivityTaskCanceledByIdResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceActivitiesActivityIdTerminateRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/activities/{activityId}/terminate',
  tags: ['WorkflowService'],
  description:
    'TerminateActivityExecution terminates an existing activity execution immediately.\n\n Termination does not reach the worker and the activity code cannot react to it. A terminated activity may have a\n running attempt.',
  operationId: 'TerminateActivityExecution',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      activityId: z
        .string()
        .openapi({
          param: { name: 'activityId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: TerminateActivityExecutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: TerminateActivityExecutionResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceActivitiesActivityIdUnpauseRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/activities/{activityId}/unpause',
  tags: ['WorkflowService'],
  description:
    "UnpauseActivityExecution unpauses the execution of an activity specified by its ID.\n This API can be used to target a workflow activity or a standalone activity.\n\n If activity is not paused, this call will have no effect.\n If the activity was paused while waiting for retry, it will be scheduled immediately (* see 'jitter' flag).\n Once the activity is unpaused, all timeout timers will be regenerated.\n\n Returns a `NotFound` error if there is no pending activity with the provided ID",
  operationId: 'UnpauseActivityExecution',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace of the workflow which scheduled this activity.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      activityId: z
        .string()
        .openapi({
          param: {
            name: 'activityId',
            in: 'path',
            description: 'The ID of the activity to target.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UnpauseActivityExecutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UnpauseActivityExecutionResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceActivitiesActivityIdUpdateOptionsRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/activities/{activityId}/update-options',
  tags: ['WorkflowService'],
  description:
    'UpdateActivityExecutionOptions is called by the client to update the options of an activity by its ID.\n This API can be used to target a workflow activity or a standalone activity.',
  operationId: 'UpdateActivityExecutionOptions',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace of the workflow which scheduled this activity',
            required: true,
            schema: { type: 'string' },
          },
        }),
      activityId: z
        .string()
        .openapi({
          param: {
            name: 'activityId',
            in: 'path',
            description: 'The ID of the activity to target.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateActivityExecutionOptionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UpdateActivityExecutionOptionsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceActivityCompleteRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/activity-complete',
  tags: ['WorkflowService'],
  description:
    'RespondActivityTaskCompleted is called by workers when they successfully complete an activity\n task.\n\n For workflow activities, this results in a new `ACTIVITY_TASK_COMPLETED` event being written to the workflow history\n and a new workflow task created for the workflow. Fails with `NotFound` if the task token is\n no longer valid due to activity timeout, already being completed, or never having existed.',
  operationId: 'RespondActivityTaskCompleted',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RespondActivityTaskCompletedRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RespondActivityTaskCompletedResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getNamespacesNamespaceActivityCountRoute = createRoute({
  method: 'get',
  path: '/namespaces/{namespace}/activity-count',
  tags: ['WorkflowService'],
  description:
    'CountActivityExecutions is a visibility API to count activity executions in a specific namespace.',
  operationId: 'CountActivityExecutions',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description:
              'Visibility query, see https://docs.temporal.io/list-filter for the syntax.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CountActivityExecutionsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceActivityFailRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/activity-fail',
  tags: ['WorkflowService'],
  description:
    'RespondActivityTaskFailed is called by workers when processing an activity task fails.\n\n This results in a new `ACTIVITY_TASK_FAILED` event being written to the workflow history and\n a new workflow task created for the workflow. Fails with `NotFound` if the task token is no\n longer valid due to activity timeout, already being completed, or never having existed.',
  operationId: 'RespondActivityTaskFailed',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RespondActivityTaskFailedRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RespondActivityTaskFailedResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceActivityHeartbeatRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/activity-heartbeat',
  tags: ['WorkflowService'],
  description:
    'RecordActivityTaskHeartbeat is optionally called by workers while they execute activities.\n\n If a worker fails to heartbeat within the `heartbeat_timeout` interval for the activity task,\n then the current attempt times out. Depending on RetryPolicy, this may trigger a retry or\n time out the activity.\n\n For workflow activities, an `ACTIVITY_TASK_TIMED_OUT` event will be written to the workflow\n history. Calling `RecordActivityTaskHeartbeat` will fail with `NotFound` in such situations,\n in that event, the SDK should request cancellation of the activity.\n\n The request may contain response `details` which will be persisted by the server and may be\n used by the activity to checkpoint progress. The `cancel_requested` field in the response\n indicates whether cancellation has been requested for the activity.',
  operationId: 'RecordActivityTaskHeartbeat',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RecordActivityTaskHeartbeatRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RecordActivityTaskHeartbeatResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceActivityResolveAsCanceledRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/activity-resolve-as-canceled',
  tags: ['WorkflowService'],
  description:
    'RespondActivityTaskFailed is called by workers when processing an activity task fails.\n\n For workflow activities, this results in a new `ACTIVITY_TASK_CANCELED` event being written to the workflow history\n and a new workflow task created for the workflow. Fails with `NotFound` if the task token is\n no longer valid due to activity timeout, already being completed, or never having existed.',
  operationId: 'RespondActivityTaskCanceled',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RespondActivityTaskCanceledRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RespondActivityTaskCanceledResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getNamespacesNamespaceArchivedWorkflowsRoute = createRoute({
  method: 'get',
  path: '/namespaces/{namespace}/archived-workflows',
  tags: ['WorkflowService'],
  description:
    'ListArchivedWorkflowExecutions is a visibility API to list archived workflow executions in a specific namespace.',
  operationId: 'ListArchivedWorkflowExecutions',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      nextPageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextPageToken',
            in: 'query',
            schema: { type: 'string', format: 'bytes' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'query', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListArchivedWorkflowExecutionsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getNamespacesNamespaceBatchOperationsRoute = createRoute({
  method: 'get',
  path: '/namespaces/{namespace}/batch-operations',
  tags: ['WorkflowService'],
  description: 'ListBatchOperations returns a list of batch operations',
  operationId: 'ListBatchOperations',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace that contains the batch operation',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'List page size',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      nextPageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextPageToken',
            in: 'query',
            description: 'Next page token',
            schema: { type: 'string', format: 'bytes' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListBatchOperationsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getNamespacesNamespaceBatchOperationsJobIdRoute = createRoute({
  method: 'get',
  path: '/namespaces/{namespace}/batch-operations/{jobId}',
  tags: ['WorkflowService'],
  description: 'DescribeBatchOperation returns the information about a batch operation',
  operationId: 'DescribeBatchOperation',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace that contains the batch operation',
            required: true,
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            description: 'Batch job id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DescribeBatchOperationResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceBatchOperationsJobIdRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/batch-operations/{jobId}',
  tags: ['WorkflowService'],
  description: 'StartBatchOperation starts a new batch operation',
  operationId: 'StartBatchOperation',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace that contains the batch operation',
            required: true,
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            description: 'Job ID defines the unique ID for the batch job',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartBatchOperationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: StartBatchOperationResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceBatchOperationsJobIdStopRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/batch-operations/{jobId}/stop',
  tags: ['WorkflowService'],
  description: 'StopBatchOperation stops a batch operation',
  operationId: 'StopBatchOperation',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace that contains the batch operation',
            required: true,
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            description: 'Batch job id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopBatchOperationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: StopBatchOperationResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceCurrentDeploymentDeploymentSeriesNameRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/current-deployment/{deployment.series_name}',
  tags: ['WorkflowService'],
  description:
    'Sets a deployment as the current deployment for its deployment series. Can optionally update\n the metadata of the deployment as well.\n Experimental. This API might significantly change or be removed in a future release.\n Deprecated. Replaced by `SetWorkerDeploymentCurrentVersion`.',
  operationId: 'SetCurrentDeployment',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      'deployment.series_name': z
        .string()
        .openapi({
          param: {
            name: 'deployment.series_name',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SetCurrentDeploymentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SetCurrentDeploymentResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getNamespacesNamespaceCurrentDeploymentSeriesNameRoute = createRoute({
  method: 'get',
  path: '/namespaces/{namespace}/current-deployment/{seriesName}',
  tags: ['WorkflowService'],
  description:
    'Returns the current deployment (and its info) for a given deployment series.\n Experimental. This API might significantly change or be removed in a future release.\n Deprecated. Replaced by `current_version` returned by `DescribeWorkerDeployment`.',
  operationId: 'GetCurrentDeployment',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      seriesName: z
        .string()
        .openapi({
          param: { name: 'seriesName', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetCurrentDeploymentResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getNamespacesNamespaceDeploymentsRoute = createRoute({
  method: 'get',
  path: '/namespaces/{namespace}/deployments',
  tags: ['WorkflowService'],
  description:
    'Lists worker deployments in the namespace. Optionally can filter based on deployment series\n name.\n Experimental. This API might significantly change or be removed in a future release.\n Deprecated. Replaced with `ListWorkerDeployments`.',
  operationId: 'ListDeployments',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      nextPageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextPageToken',
            in: 'query',
            schema: { type: 'string', format: 'bytes' },
            required: false,
          },
        }),
      seriesName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'seriesName',
            in: 'query',
            description: 'Optional. Use to filter based on exact series name match.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListDeploymentsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getNamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdRoute =
  createRoute({
    method: 'get',
    path: '/namespaces/{namespace}/deployments/{deployment.series_name}/{deployment.build_id}',
    tags: ['WorkflowService'],
    description:
      'Describes a worker deployment.\n Experimental. This API might significantly change or be removed in a future release.\n Deprecated. Replaced with `DescribeWorkerDeploymentVersion`.',
    operationId: 'DescribeDeployment',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'deployment.series_name': z
          .string()
          .openapi({
            param: {
              name: 'deployment.series_name',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'deployment.build_id': z
          .string()
          .openapi({
            param: {
              name: 'deployment.build_id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        'deployment.seriesName': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'deployment.seriesName',
              in: 'query',
              description:
                'Different versions of the same worker service/application are related together by having a\n shared series name.\n Out of all deployments of a series, one can be designated as the current deployment, which\n receives new workflow executions and new tasks of workflows with\n `VERSIONING_BEHAVIOR_AUTO_UPGRADE` versioning behavior.',
              schema: { type: 'string' },
              required: false,
            },
          }),
        'deployment.buildId': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'deployment.buildId',
              in: 'query',
              description:
                'Build ID changes with each version of the worker when the worker program code and/or config\n changes.',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: DescribeDeploymentResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const getNamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdReachabilityRoute =
  createRoute({
    method: 'get',
    path: '/namespaces/{namespace}/deployments/{deployment.series_name}/{deployment.build_id}/reachability',
    tags: ['WorkflowService'],
    description:
      "Returns the reachability level of a worker deployment to help users decide when it is time\n to decommission a deployment. Reachability level is calculated based on the deployment's\n `status` and existing workflows that depend on the given deployment for their execution.\n Calculating reachability is relatively expensive. Therefore, server might return a recently\n cached value. In such a case, the `last_update_time` will inform you about the actual\n reachability calculation time.\n Experimental. This API might significantly change or be removed in a future release.\n Deprecated. Replaced with `DrainageInfo` returned by `DescribeWorkerDeploymentVersion`.",
    operationId: 'GetDeploymentReachability',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'deployment.series_name': z
          .string()
          .openapi({
            param: {
              name: 'deployment.series_name',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'deployment.build_id': z
          .string()
          .openapi({
            param: {
              name: 'deployment.build_id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        'deployment.seriesName': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'deployment.seriesName',
              in: 'query',
              description:
                'Different versions of the same worker service/application are related together by having a\n shared series name.\n Out of all deployments of a series, one can be designated as the current deployment, which\n receives new workflow executions and new tasks of workflows with\n `VERSIONING_BEHAVIOR_AUTO_UPGRADE` versioning behavior.',
              schema: { type: 'string' },
              required: false,
            },
          }),
        'deployment.buildId': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'deployment.buildId',
              in: 'query',
              description:
                'Build ID changes with each version of the worker when the worker program code and/or config\n changes.',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: GetDeploymentReachabilityResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const getNamespacesNamespaceNexusOperationCountRoute = createRoute({
  method: 'get',
  path: '/namespaces/{namespace}/nexus-operation-count',
  tags: ['WorkflowService'],
  description:
    'CountNexusOperationExecutions is a visibility API to count Nexus operations in a specific namespace.',
  operationId: 'CountNexusOperationExecutions',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description:
              'Visibility query, see https://docs.temporal.io/list-filter for the syntax.\n See also ListNexusOperationExecutionsRequest for search attributes available for Nexus operations.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CountNexusOperationExecutionsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getNamespacesNamespaceNexusOperationsRoute = createRoute({
  method: 'get',
  path: '/namespaces/{namespace}/nexus-operations',
  tags: ['WorkflowService'],
  description:
    'ListNexusOperationExecutions is a visibility API to list Nexus operations in a specific namespace.',
  operationId: 'ListNexusOperationExecutions',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'Max number of operations to return per page.',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      nextPageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextPageToken',
            in: 'query',
            description: 'Token returned in ListNexusOperationExecutionsResponse.',
            schema: { type: 'string', format: 'bytes' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description:
              'Visibility query, see https://docs.temporal.io/list-filter for the syntax.\n Search attributes that are avaialble for Nexus operations include:\n - OperationId\n - RunId\n - Endpoint\n - Service\n - Operation\n - RequestId\n - StartTime\n - ExecutionTime\n - CloseTime\n - ExecutionStatus\n - ExecutionDuration\n - StateTransitionCount',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListNexusOperationExecutionsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getNamespacesNamespaceNexusOperationsOperationIdRoute = createRoute({
  method: 'get',
  path: '/namespaces/{namespace}/nexus-operations/{operationId}',
  tags: ['WorkflowService'],
  description:
    'DescribeNexusOperationExecution returns information about a Nexus operation.\n Supported use cases include:\n - Get current operation info without waiting\n - Long-poll for next state change and return new operation info\n Response can optionally include operation input or outcome (if the operation has completed).',
  operationId: 'DescribeNexusOperationExecution',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      operationId: z
        .string()
        .openapi({
          param: { name: 'operationId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      runId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'runId',
            in: 'query',
            description: 'Operation run ID. If empty the request targets the latest run.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includeInput: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeInput',
            in: 'query',
            description: 'Include the input field in the response.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      includeOutcome: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeOutcome',
            in: 'query',
            description:
              'Include the outcome (result/failure) in the response if the operation has completed.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      longPollToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'longPollToken',
            in: 'query',
            description:
              'Token from a previous DescribeNexusOperationExecutionResponse. If present, this RPC will long-poll until operation\n state changes from the state encoded in this token. If absent, return current state immediately.\n If present, run_id must also be present.\n Note that operation state may change multiple times between requests, therefore it is not\n guaranteed that a client making a sequence of long-poll requests will see a complete\n sequence of state changes.',
            schema: { type: 'string', format: 'bytes' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DescribeNexusOperationExecutionResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceNexusOperationsOperationIdRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/nexus-operations/{operationId}',
  tags: ['WorkflowService'],
  description:
    'StartNexusOperationExecution starts a new Nexus operation.\n\n Returns a `NexusOperationExecutionAlreadyStarted` error if an instance already exists with same operation ID in this\n namespace unless permitted by the specified ID conflict policy.',
  operationId: 'StartNexusOperationExecution',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      operationId: z
        .string()
        .openapi({
          param: {
            name: 'operationId',
            in: 'path',
            description:
              'Identifier for this operation. This is a caller-side ID, distinct from any internal\n operation identifiers generated by the handler. Must be unique among operations in the\n same namespace, subject to the rules imposed by id_reuse_policy and id_conflict_policy.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartNexusOperationExecutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: StartNexusOperationExecutionResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceNexusOperationsOperationIdCancelRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/nexus-operations/{operationId}/cancel',
  tags: ['WorkflowService'],
  description:
    'RequestCancelNexusOperationExecution requests cancellation of a Nexus operation.\n\n Requesting to cancel an operation does not automatically transition the operation to canceled status.\n The operation will only transition to canceled status if it supports cancellation and the handler\n processes the cancellation request.',
  operationId: 'RequestCancelNexusOperationExecution',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      operationId: z
        .string()
        .openapi({
          param: { name: 'operationId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: RequestCancelNexusOperationExecutionRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: RequestCancelNexusOperationExecutionResponseSchema },
      },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getNamespacesNamespaceNexusOperationsOperationIdPollRoute = createRoute({
  method: 'get',
  path: '/namespaces/{namespace}/nexus-operations/{operationId}/poll',
  tags: ['WorkflowService'],
  description:
    'PollNexusOperationExecution long-polls for a Nexus operation for a given wait stage to complete and returns\n the outcome (result or failure).',
  operationId: 'PollNexusOperationExecution',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      operationId: z
        .string()
        .openapi({
          param: { name: 'operationId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      runId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'runId',
            in: 'query',
            description: 'Operation run ID. If empty the request targets the latest run.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      waitStage: z
        .enum([
          'NEXUS_OPERATION_WAIT_STAGE_UNSPECIFIED',
          'NEXUS_OPERATION_WAIT_STAGE_STARTED',
          'NEXUS_OPERATION_WAIT_STAGE_CLOSED',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'waitStage',
            in: 'query',
            description:
              'Stage to wait for. The operation may be in a more advanced stage when the poll is unblocked.',
            schema: {
              enum: [
                'NEXUS_OPERATION_WAIT_STAGE_UNSPECIFIED',
                'NEXUS_OPERATION_WAIT_STAGE_STARTED',
                'NEXUS_OPERATION_WAIT_STAGE_CLOSED',
              ],
              type: 'string',
              format: 'enum',
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PollNexusOperationExecutionResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceNexusOperationsOperationIdTerminateRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/nexus-operations/{operationId}/terminate',
  tags: ['WorkflowService'],
  description:
    'TerminateNexusOperationExecution terminates an existing Nexus operation immediately.\n\n Termination happens immediately and the operation handler cannot react to it. A terminated operation will have\n its outcome set to a failure with a termination reason.',
  operationId: 'TerminateNexusOperationExecution',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      operationId: z
        .string()
        .openapi({
          param: { name: 'operationId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: TerminateNexusOperationExecutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: TerminateNexusOperationExecutionResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getNamespacesNamespaceScheduleCountRoute = createRoute({
  method: 'get',
  path: '/namespaces/{namespace}/schedule-count',
  tags: ['WorkflowService'],
  description: 'CountSchedules is a visibility API to count schedules in a specific namespace.',
  operationId: 'CountSchedules',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description:
              'Visibility query, see https://docs.temporal.io/list-filter for the syntax.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CountSchedulesResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getNamespacesNamespaceSchedulesRoute = createRoute({
  method: 'get',
  path: '/namespaces/{namespace}/schedules',
  tags: ['WorkflowService'],
  description: 'List all schedules in a namespace.',
  operationId: 'ListSchedules',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'The namespace to list schedules in.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      maximumPageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maximumPageSize',
            in: 'query',
            description: 'How many to return at once.',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      nextPageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextPageToken',
            in: 'query',
            description: 'Token to get the next page of results.',
            schema: { type: 'string', format: 'bytes' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description: 'Query to filter schedules.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListSchedulesResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getNamespacesNamespaceSchedulesScheduleIdRoute = createRoute({
  method: 'get',
  path: '/namespaces/{namespace}/schedules/{scheduleId}',
  tags: ['WorkflowService'],
  description: 'Returns the schedule description and current state of an existing schedule.',
  operationId: 'DescribeSchedule',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'The namespace of the schedule to describe.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      scheduleId: z
        .string()
        .openapi({
          param: {
            name: 'scheduleId',
            in: 'path',
            description: 'The id of the schedule to describe.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DescribeScheduleResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceSchedulesScheduleIdRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/schedules/{scheduleId}',
  tags: ['WorkflowService'],
  description: 'Creates a new schedule.',
  operationId: 'CreateSchedule',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'The namespace the schedule should be created in.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      scheduleId: z
        .string()
        .openapi({
          param: {
            name: 'scheduleId',
            in: 'path',
            description: 'The id of the new schedule.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateScheduleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CreateScheduleResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const deleteNamespacesNamespaceSchedulesScheduleIdRoute = createRoute({
  method: 'delete',
  path: '/namespaces/{namespace}/schedules/{scheduleId}',
  tags: ['WorkflowService'],
  description: 'Deletes a schedule, removing it from the system.',
  operationId: 'DeleteSchedule',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'The namespace of the schedule to delete.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      scheduleId: z
        .string()
        .openapi({
          param: {
            name: 'scheduleId',
            in: 'path',
            description: 'The id of the schedule to delete.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      identity: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'identity',
            in: 'query',
            description: 'The identity of the client who initiated this request.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DeleteScheduleResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getNamespacesNamespaceSchedulesScheduleIdMatchingTimesRoute = createRoute({
  method: 'get',
  path: '/namespaces/{namespace}/schedules/{scheduleId}/matching-times',
  tags: ['WorkflowService'],
  description: 'Lists matching times within a range.',
  operationId: 'ListScheduleMatchingTimes',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'The namespace of the schedule to query.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      scheduleId: z
        .string()
        .openapi({
          param: {
            name: 'scheduleId',
            in: 'path',
            description: 'The id of the schedule to query.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      startTime: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'startTime',
            in: 'query',
            description: 'Time range to query.',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      endTime: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'endTime',
            in: 'query',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListScheduleMatchingTimesResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceSchedulesScheduleIdPatchRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/schedules/{scheduleId}/patch',
  tags: ['WorkflowService'],
  description: 'Makes a specific change to a schedule or triggers an immediate action.',
  operationId: 'PatchSchedule',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'The namespace of the schedule to patch.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      scheduleId: z
        .string()
        .openapi({
          param: {
            name: 'scheduleId',
            in: 'path',
            description: 'The id of the schedule to patch.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PatchScheduleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PatchScheduleResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceSchedulesScheduleIdUpdateRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/schedules/{scheduleId}/update',
  tags: ['WorkflowService'],
  description: 'Changes the configuration or state of an existing schedule.',
  operationId: 'UpdateSchedule',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'The namespace of the schedule to update.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      scheduleId: z
        .string()
        .openapi({
          param: {
            name: 'scheduleId',
            in: 'path',
            description: 'The id of the schedule to update.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateScheduleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UpdateScheduleResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceTaskQueuesTaskQueueUpdateConfigRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/task-queues/{taskQueue}/update-config',
  tags: ['WorkflowService'],
  description:
    'Updates task queue configuration.\n For the overall queue rate limit: the rate limit set by this api overrides the worker-set rate limit,\n which uncouples the rate limit from the worker lifecycle.\n If the overall queue rate limit is unset, the worker-set rate limit takes effect.',
  operationId: 'UpdateTaskQueueConfig',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      taskQueue: z
        .string()
        .openapi({
          param: {
            name: 'taskQueue',
            in: 'path',
            description: 'Selects the task queue to update.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateTaskQueueConfigRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UpdateTaskQueueConfigResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getNamespacesNamespaceTaskQueuesTaskQueueWorkerBuildIdCompatibilityRoute = createRoute(
  {
    method: 'get',
    path: '/namespaces/{namespace}/task-queues/{taskQueue}/worker-build-id-compatibility',
    tags: ['WorkflowService'],
    description:
      'Deprecated. Use `GetWorkerVersioningRules`.\n Fetches the worker build id versioning sets for a task queue.',
    operationId: 'GetWorkerBuildIdCompatibility',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
          }),
        taskQueue: z
          .string()
          .openapi({
            param: {
              name: 'taskQueue',
              in: 'path',
              description:
                'Must be set, the task queue to interrogate about worker id compatibility.',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        maxSets: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .exactOptional()
          .openapi({
            param: {
              name: 'maxSets',
              in: 'query',
              description:
                'Limits how many compatible sets will be returned. Specify 1 to only return the current\n default major version set. 0 returns all sets.',
              schema: { type: 'integer', format: 'int32' },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: GetWorkerBuildIdCompatibilityResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  },
)

export const getNamespacesNamespaceTaskQueuesTaskQueueWorkerVersioningRulesRoute = createRoute({
  method: 'get',
  path: '/namespaces/{namespace}/task-queues/{taskQueue}/worker-versioning-rules',
  tags: ['WorkflowService'],
  description:
    'Fetches the Build ID assignment and redirect rules for a Task Queue.\n WARNING: Worker Versioning is not yet stable and the API and behavior may change incompatibly.',
  operationId: 'GetWorkerVersioningRules',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      taskQueue: z
        .string()
        .openapi({
          param: { name: 'taskQueue', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetWorkerVersioningRulesResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getNamespacesNamespaceTaskQueuesTaskQueueNameRoute = createRoute({
  method: 'get',
  path: '/namespaces/{namespace}/task-queues/{task_queue.name}',
  tags: ['WorkflowService'],
  description:
    'DescribeTaskQueue returns the following information about the target task queue, broken down by Build ID:\n   - List of pollers\n   - Workflow Reachability status\n   - Backlog info for Workflow and/or Activity tasks',
  operationId: 'DescribeTaskQueue',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      'task_queue.name': z
        .string()
        .openapi({
          param: {
            name: 'task_queue.name',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'taskQueue.name': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'taskQueue.name',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'taskQueue.kind': z
        .enum([
          'TASK_QUEUE_KIND_UNSPECIFIED',
          'TASK_QUEUE_KIND_NORMAL',
          'TASK_QUEUE_KIND_STICKY',
          'TASK_QUEUE_KIND_WORKER_COMMANDS',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'taskQueue.kind',
            in: 'query',
            description: 'Default: TASK_QUEUE_KIND_NORMAL.',
            schema: {
              enum: [
                'TASK_QUEUE_KIND_UNSPECIFIED',
                'TASK_QUEUE_KIND_NORMAL',
                'TASK_QUEUE_KIND_STICKY',
                'TASK_QUEUE_KIND_WORKER_COMMANDS',
              ],
              type: 'string',
              format: 'enum',
            },
            required: false,
          },
        }),
      'taskQueue.normalName': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'taskQueue.normalName',
            in: 'query',
            description:
              'Iff kind == TASK_QUEUE_KIND_STICKY, then this field contains the name of\n the normal task queue that the sticky worker is running on.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      taskQueueType: z
        .enum([
          'TASK_QUEUE_TYPE_UNSPECIFIED',
          'TASK_QUEUE_TYPE_WORKFLOW',
          'TASK_QUEUE_TYPE_ACTIVITY',
          'TASK_QUEUE_TYPE_NEXUS',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'taskQueueType',
            in: 'query',
            description:
              'If unspecified (TASK_QUEUE_TYPE_UNSPECIFIED), then default value (TASK_QUEUE_TYPE_WORKFLOW) will be used.\n Only supported in default mode (use `task_queue_types` in ENHANCED mode instead).',
            schema: {
              enum: [
                'TASK_QUEUE_TYPE_UNSPECIFIED',
                'TASK_QUEUE_TYPE_WORKFLOW',
                'TASK_QUEUE_TYPE_ACTIVITY',
                'TASK_QUEUE_TYPE_NEXUS',
              ],
              type: 'string',
              format: 'enum',
            },
            required: false,
          },
        }),
      reportStats: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'reportStats',
            in: 'query',
            description: 'Report stats for the requested task queue type(s).',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      reportConfig: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'reportConfig',
            in: 'query',
            description: 'Report Task Queue Config',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      includeTaskQueueStatus: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeTaskQueueStatus',
            in: 'query',
            description:
              'Deprecated, use `report_stats` instead.\n If true, the task queue status will be included in the response.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      apiMode: z
        .enum(['DESCRIBE_TASK_QUEUE_MODE_UNSPECIFIED', 'DESCRIBE_TASK_QUEUE_MODE_ENHANCED'])
        .exactOptional()
        .openapi({
          param: {
            name: 'apiMode',
            in: 'query',
            description:
              'Deprecated. ENHANCED mode is also being deprecated.\n Select the API mode to use for this request: DEFAULT mode (if unset) or ENHANCED mode.\n Consult the documentation for each field to understand which mode it is supported in.',
            schema: {
              enum: ['DESCRIBE_TASK_QUEUE_MODE_UNSPECIFIED', 'DESCRIBE_TASK_QUEUE_MODE_ENHANCED'],
              type: 'string',
              format: 'enum',
            },
            required: false,
          },
        }),
      'versions.buildIds': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'versions.buildIds',
            in: 'query',
            description: 'Include specific Build IDs.',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      'versions.unversioned': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'versions.unversioned',
            in: 'query',
            description: 'Include the unversioned queue.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      'versions.allActive': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'versions.allActive',
            in: 'query',
            description:
              'Include all active versions. A version is considered active if, in the last few minutes,\n it has had new tasks or polls, or it has been the subject of certain task queue API calls.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      taskQueueTypes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'TASK_QUEUE_TYPE_UNSPECIFIED',
              'TASK_QUEUE_TYPE_WORKFLOW',
              'TASK_QUEUE_TYPE_ACTIVITY',
              'TASK_QUEUE_TYPE_NEXUS',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'taskQueueTypes',
            in: 'query',
            description:
              'Deprecated (as part of the ENHANCED mode deprecation).\n Task queue types to report info about. If not specified, all types are considered.',
            schema: {
              type: 'array',
              items: {
                enum: [
                  'TASK_QUEUE_TYPE_UNSPECIFIED',
                  'TASK_QUEUE_TYPE_WORKFLOW',
                  'TASK_QUEUE_TYPE_ACTIVITY',
                  'TASK_QUEUE_TYPE_NEXUS',
                ],
                type: 'string',
                format: 'enum',
              },
            },
            required: false,
          },
        }),
      reportPollers: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'reportPollers',
            in: 'query',
            description:
              'Deprecated (as part of the ENHANCED mode deprecation).\n Report list of pollers for requested task queue types and versions.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      reportTaskReachability: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'reportTaskReachability',
            in: 'query',
            description:
              'Deprecated (as part of the ENHANCED mode deprecation).\n Report task reachability for the requested versions and all task types (task reachability is not reported\n per task type).',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DescribeTaskQueueResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameRoute =
  createRoute({
    method: 'post',
    path: '/namespaces/{namespace}/worker-deployment-versions/{deployment_version.deployment_name}',
    tags: ['WorkflowService'],
    description:
      'Creates a new Worker Deployment Version.\n\n Experimental. This API might significantly change or be removed in a\n future release.',
    operationId: 'CreateWorkerDeploymentVersion',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'deployment_version.deployment_name': z
          .string()
          .openapi({
            param: {
              name: 'deployment_version.deployment_name',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: CreateWorkerDeploymentVersionRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: CreateWorkerDeploymentVersionResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const getNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdRoute =
  createRoute({
    method: 'get',
    path: '/namespaces/{namespace}/worker-deployment-versions/{deployment_version.deployment_name}/{deployment_version.build_id}',
    tags: ['WorkflowService'],
    description:
      'Describes a worker deployment version.\n Experimental. This API might significantly change or be removed in a future release.',
    operationId: 'DescribeWorkerDeploymentVersion',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'deployment_version.deployment_name': z
          .string()
          .openapi({
            param: {
              name: 'deployment_version.deployment_name',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'deployment_version.build_id': z
          .string()
          .openapi({
            param: {
              name: 'deployment_version.build_id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        version: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'version',
              in: 'query',
              description: 'Deprecated. Use `deployment_version`.',
              schema: { type: 'string' },
              required: false,
            },
          }),
        'deploymentVersion.buildId': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'deploymentVersion.buildId',
              in: 'query',
              description:
                'A unique identifier for this Version within the Deployment it is a part of.\n Not necessarily unique within the namespace.\n The combination of `deployment_name` and `build_id` uniquely identifies this\n Version within the namespace, because Deployment names are unique within a namespace.',
              schema: { type: 'string' },
              required: false,
            },
          }),
        'deploymentVersion.deploymentName': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'deploymentVersion.deploymentName',
              in: 'query',
              description: 'Identifies the Worker Deployment this Version is part of.',
              schema: { type: 'string' },
              required: false,
            },
          }),
        reportTaskQueueStats: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              name: 'reportTaskQueueStats',
              in: 'query',
              description: 'Report stats for task queues which have been polled by this version.',
              schema: { type: 'boolean' },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: DescribeWorkerDeploymentVersionResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const deleteNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdRoute =
  createRoute({
    method: 'delete',
    path: '/namespaces/{namespace}/worker-deployment-versions/{deployment_version.deployment_name}/{deployment_version.build_id}',
    tags: ['WorkflowService'],
    description:
      'Used for manual deletion of Versions. User can delete a Version only when all the\n following conditions are met:\n  - It is not the Current or Ramping Version of its Deployment.\n  - It has no active pollers (none of the task queues in the Version have pollers)\n  - It is not draining (see WorkerDeploymentVersionInfo.drainage_info). This condition\n    can be skipped by passing `skip-drainage=true`.\n Experimental. This API might significantly change or be removed in a future release.',
    operationId: 'DeleteWorkerDeploymentVersion',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'deployment_version.deployment_name': z
          .string()
          .openapi({
            param: {
              name: 'deployment_version.deployment_name',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'deployment_version.build_id': z
          .string()
          .openapi({
            param: {
              name: 'deployment_version.build_id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        version: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'version',
              in: 'query',
              description: 'Deprecated. Use `deployment_version`.',
              schema: { type: 'string' },
              required: false,
            },
          }),
        'deploymentVersion.buildId': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'deploymentVersion.buildId',
              in: 'query',
              description:
                'A unique identifier for this Version within the Deployment it is a part of.\n Not necessarily unique within the namespace.\n The combination of `deployment_name` and `build_id` uniquely identifies this\n Version within the namespace, because Deployment names are unique within a namespace.',
              schema: { type: 'string' },
              required: false,
            },
          }),
        'deploymentVersion.deploymentName': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'deploymentVersion.deploymentName',
              in: 'query',
              description: 'Identifies the Worker Deployment this Version is part of.',
              schema: { type: 'string' },
              required: false,
            },
          }),
        skipDrainage: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              name: 'skipDrainage',
              in: 'query',
              description:
                'Pass to force deletion even if the Version is draining. In this case the open pinned\n workflows will be stuck until manually moved to another version by UpdateWorkflowExecutionOptions.',
              schema: { type: 'boolean' },
              required: false,
            },
          }),
        identity: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'identity',
              in: 'query',
              description: 'Optional. The identity of the client who initiated this request.',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: DeleteWorkerDeploymentVersionResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateComputeConfigRoute =
  createRoute({
    method: 'post',
    path: '/namespaces/{namespace}/worker-deployment-versions/{deployment_version.deployment_name}/{deployment_version.build_id}/update-compute-config',
    tags: ['WorkflowService'],
    description:
      'Updates the compute config attached to a Worker Deployment Version.\n Experimental. This API might significantly change or be removed in a future release.',
    operationId: 'UpdateWorkerDeploymentVersionComputeConfig',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'deployment_version.deployment_name': z
          .string()
          .openapi({
            param: {
              name: 'deployment_version.deployment_name',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'deployment_version.build_id': z
          .string()
          .openapi({
            param: {
              name: 'deployment_version.build_id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: UpdateWorkerDeploymentVersionComputeConfigRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': { schema: UpdateWorkerDeploymentVersionComputeConfigResponseSchema },
        },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateMetadataRoute =
  createRoute({
    method: 'post',
    path: '/namespaces/{namespace}/worker-deployment-versions/{deployment_version.deployment_name}/{deployment_version.build_id}/update-metadata',
    tags: ['WorkflowService'],
    description:
      'Updates the user-given metadata attached to a Worker Deployment Version.\n Experimental. This API might significantly change or be removed in a future release.',
    operationId: 'UpdateWorkerDeploymentVersionMetadata',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'deployment_version.deployment_name': z
          .string()
          .openapi({
            param: {
              name: 'deployment_version.deployment_name',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'deployment_version.build_id': z
          .string()
          .openapi({
            param: {
              name: 'deployment_version.build_id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: UpdateWorkerDeploymentVersionMetadataRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': { schema: UpdateWorkerDeploymentVersionMetadataResponseSchema },
        },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdValidateComputeConfigRoute =
  createRoute({
    method: 'post',
    path: '/namespaces/{namespace}/worker-deployment-versions/{deployment_version.deployment_name}/{deployment_version.build_id}/validate-compute-config',
    tags: ['WorkflowService'],
    description:
      'Validates the compute config without attaching it to a Worker Deployment Version.\n Experimental. This API might significantly change or be removed in a future release.',
    operationId: 'ValidateWorkerDeploymentVersionComputeConfig',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'deployment_version.deployment_name': z
          .string()
          .openapi({
            param: {
              name: 'deployment_version.deployment_name',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'deployment_version.build_id': z
          .string()
          .openapi({
            param: {
              name: 'deployment_version.build_id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: ValidateWorkerDeploymentVersionComputeConfigRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: ValidateWorkerDeploymentVersionComputeConfigResponseSchema,
          },
        },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const getNamespacesNamespaceWorkerDeploymentsRoute = createRoute({
  method: 'get',
  path: '/namespaces/{namespace}/worker-deployments',
  tags: ['WorkflowService'],
  description:
    'Lists all Worker Deployments that are tracked in the Namespace.\n Experimental. This API might significantly change or be removed in a future release.',
  operationId: 'ListWorkerDeployments',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      nextPageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextPageToken',
            in: 'query',
            schema: { type: 'string', format: 'bytes' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListWorkerDeploymentsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getNamespacesNamespaceWorkerDeploymentsDeploymentNameRoute = createRoute({
  method: 'get',
  path: '/namespaces/{namespace}/worker-deployments/{deploymentName}',
  tags: ['WorkflowService'],
  description:
    'Describes a Worker Deployment.\n Experimental. This API might significantly change or be removed in a future release.',
  operationId: 'DescribeWorkerDeployment',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      deploymentName: z
        .string()
        .openapi({
          param: { name: 'deploymentName', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DescribeWorkerDeploymentResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceWorkerDeploymentsDeploymentNameRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/worker-deployments/{deploymentName}',
  tags: ['WorkflowService'],
  description:
    'Creates a new Worker Deployment.\n\n Experimental. This API might significantly change or be removed in a\n future release.',
  operationId: 'CreateWorkerDeployment',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      deploymentName: z
        .string()
        .openapi({
          param: {
            name: 'deploymentName',
            in: 'path',
            description:
              'The name of the Worker Deployment to create. If a Worker Deployment with\n this name already exists, an error will be returned.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateWorkerDeploymentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CreateWorkerDeploymentResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const deleteNamespacesNamespaceWorkerDeploymentsDeploymentNameRoute = createRoute({
  method: 'delete',
  path: '/namespaces/{namespace}/worker-deployments/{deploymentName}',
  tags: ['WorkflowService'],
  description:
    'Deletes records of (an old) Deployment. A deployment can only be deleted if\n it has no Version in it.\n Experimental. This API might significantly change or be removed in a future release.',
  operationId: 'DeleteWorkerDeployment',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      deploymentName: z
        .string()
        .openapi({
          param: { name: 'deploymentName', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      identity: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'identity',
            in: 'query',
            description: 'Optional. The identity of the client who initiated this request.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DeleteWorkerDeploymentResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceWorkerDeploymentsDeploymentNameSetCurrentVersionRoute =
  createRoute({
    method: 'post',
    path: '/namespaces/{namespace}/worker-deployments/{deploymentName}/set-current-version',
    tags: ['WorkflowService'],
    description:
      'Set/unset the Current Version of a Worker Deployment. Automatically unsets the Ramping\n Version if it is the Version being set as Current.\n Experimental. This API might significantly change or be removed in a future release.',
    operationId: 'SetWorkerDeploymentCurrentVersion',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
          }),
        deploymentName: z
          .string()
          .openapi({
            param: {
              name: 'deploymentName',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: SetWorkerDeploymentCurrentVersionRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': { schema: SetWorkerDeploymentCurrentVersionResponseSchema },
        },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postNamespacesNamespaceWorkerDeploymentsDeploymentNameSetManagerRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/worker-deployments/{deploymentName}/set-manager',
  tags: ['WorkflowService'],
  description:
    'Set/unset the ManagerIdentity of a Worker Deployment.\n Experimental. This API might significantly change or be removed in a future release.',
  operationId: 'SetWorkerDeploymentManager',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      deploymentName: z
        .string()
        .openapi({
          param: { name: 'deploymentName', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SetWorkerDeploymentManagerRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SetWorkerDeploymentManagerResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceWorkerDeploymentsDeploymentNameSetRampingVersionRoute =
  createRoute({
    method: 'post',
    path: '/namespaces/{namespace}/worker-deployments/{deploymentName}/set-ramping-version',
    tags: ['WorkflowService'],
    description:
      'Set/unset the Ramping Version of a Worker Deployment and its ramp percentage. Can be used for\n gradual ramp to unversioned workers too.\n Experimental. This API might significantly change or be removed in a future release.',
    operationId: 'SetWorkerDeploymentRampingVersion',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
          }),
        deploymentName: z
          .string()
          .openapi({
            param: {
              name: 'deploymentName',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: SetWorkerDeploymentRampingVersionRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': { schema: SetWorkerDeploymentRampingVersionResponseSchema },
        },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const getNamespacesNamespaceWorkerTaskReachabilityRoute = createRoute({
  method: 'get',
  path: '/namespaces/{namespace}/worker-task-reachability',
  tags: ['WorkflowService'],
  description:
    "Deprecated. Use `DescribeTaskQueue`.\n\n Fetches task reachability to determine whether a worker may be retired.\n The request may specify task queues to query for or let the server fetch all task queues mapped to the given\n build IDs.\n\n When requesting a large number of task queues or all task queues associated with the given build ids in a\n namespace, all task queues will be listed in the response but some of them may not contain reachability\n information due to a server enforced limit. When reaching the limit, task queues that reachability information\n could not be retrieved for will be marked with a single TASK_REACHABILITY_UNSPECIFIED entry. The caller may issue\n another call to get the reachability for those task queues.\n\n Open source users can adjust this limit by setting the server's dynamic config value for\n `limit.reachabilityTaskQueueScan` with the caveat that this call can strain the visibility store.",
  operationId: 'GetWorkerTaskReachability',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      buildIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'buildIds',
            in: 'query',
            description:
              "Build ids to retrieve reachability for. An empty string will be interpreted as an unversioned worker.\n The number of build ids that can be queried in a single API call is limited.\n Open source users can adjust this limit by setting the server's dynamic config value for\n `limit.reachabilityQueryBuildIds` with the caveat that this call can strain the visibility store.",
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      taskQueues: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'taskQueues',
            in: 'query',
            description:
              'Task queues to retrieve reachability for. Leave this empty to query for all task queues associated with given\n build ids in the namespace.\n Must specify at least one task queue if querying for an unversioned worker.\n The number of task queues that the server will fetch reachability information for is limited.\n See the `GetWorkerTaskReachabilityResponse` documentation for more information.',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      reachability: z
        .enum([
          'TASK_REACHABILITY_UNSPECIFIED',
          'TASK_REACHABILITY_NEW_WORKFLOWS',
          'TASK_REACHABILITY_EXISTING_WORKFLOWS',
          'TASK_REACHABILITY_OPEN_WORKFLOWS',
          'TASK_REACHABILITY_CLOSED_WORKFLOWS',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'reachability',
            in: 'query',
            description:
              'Type of reachability to query for.\n `TASK_REACHABILITY_NEW_WORKFLOWS` is always returned in the response.\n Use `TASK_REACHABILITY_EXISTING_WORKFLOWS` if your application needs to respond to queries on closed workflows.\n Otherwise, use `TASK_REACHABILITY_OPEN_WORKFLOWS`. Default is `TASK_REACHABILITY_EXISTING_WORKFLOWS` if left\n unspecified.\n See the TaskReachability docstring for information about each enum variant.',
            schema: {
              enum: [
                'TASK_REACHABILITY_UNSPECIFIED',
                'TASK_REACHABILITY_NEW_WORKFLOWS',
                'TASK_REACHABILITY_EXISTING_WORKFLOWS',
                'TASK_REACHABILITY_OPEN_WORKFLOWS',
                'TASK_REACHABILITY_CLOSED_WORKFLOWS',
              ],
              type: 'string',
              format: 'enum',
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetWorkerTaskReachabilityResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getNamespacesNamespaceWorkersRoute = createRoute({
  method: 'get',
  path: '/namespaces/{namespace}/workers',
  tags: ['WorkflowService'],
  description:
    'ListWorkers is a visibility API to list worker status information in a specific namespace.',
  operationId: 'ListWorkers',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      nextPageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextPageToken',
            in: 'query',
            schema: { type: 'string', format: 'bytes' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description:
              '`query` in ListWorkers is used to filter workers based on worker attributes.\n Supported attributes:\n* WorkerInstanceKey\n* WorkerIdentity\n* HostName\n* TaskQueue\n* DeploymentName\n* BuildId\n* SdkName\n* SdkVersion\n* StartTime\n* Status',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includeSystemWorkers: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeSystemWorkers',
            in: 'query',
            description:
              'When true, the response will include system workers that are created implicitly\n by the server and not by the user. By default, system workers are excluded.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListWorkersResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getNamespacesNamespaceWorkersDescribeWorkerInstanceKeyRoute = createRoute({
  method: 'get',
  path: '/namespaces/{namespace}/workers/describe/{workerInstanceKey}',
  tags: ['WorkflowService'],
  description: 'DescribeWorker returns information about the specified worker.',
  operationId: 'DescribeWorker',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace this worker belongs to.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      workerInstanceKey: z
        .string()
        .openapi({
          param: {
            name: 'workerInstanceKey',
            in: 'path',
            description: 'Worker instance key to describe.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DescribeWorkerResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceWorkersFetchConfigRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/workers/fetch-config',
  tags: ['WorkflowService'],
  description: 'FetchWorkerConfig returns the worker configuration for a specific worker.',
  operationId: 'FetchWorkerConfig',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace this worker belongs to.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: FetchWorkerConfigRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: FetchWorkerConfigResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceWorkersHeartbeatRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/workers/heartbeat',
  tags: ['WorkflowService'],
  description: 'WorkerHeartbeat receive heartbeat request from the worker.',
  operationId: 'RecordWorkerHeartbeat',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace this worker belongs to.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RecordWorkerHeartbeatRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RecordWorkerHeartbeatResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceWorkersUpdateConfigRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/workers/update-config',
  tags: ['WorkflowService'],
  description:
    'UpdateWorkerConfig updates the worker configuration of one or more workers.\n Can be used to partially update the worker configuration.\n Can be used to update the configuration of multiple workers.',
  operationId: 'UpdateWorkerConfig',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace this worker belongs to.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateWorkerConfigRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UpdateWorkerConfigResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getNamespacesNamespaceWorkflowCountRoute = createRoute({
  method: 'get',
  path: '/namespaces/{namespace}/workflow-count',
  tags: ['WorkflowService'],
  description:
    'CountWorkflowExecutions is a visibility API to count of workflow executions in a specific namespace.',
  operationId: 'CountWorkflowExecutions',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'query', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CountWorkflowExecutionsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getNamespacesNamespaceWorkflowRulesRoute = createRoute({
  method: 'get',
  path: '/namespaces/{namespace}/workflow-rules',
  tags: ['WorkflowService'],
  description: 'Return all namespace workflow rules',
  operationId: 'ListWorkflowRules',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      nextPageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextPageToken',
            in: 'query',
            schema: { type: 'string', format: 'bytes' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListWorkflowRulesResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceWorkflowRulesRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/workflow-rules',
  tags: ['WorkflowService'],
  description:
    'Create a new workflow rule. The rules are used to control the workflow execution.\n The rule will be applied to all running and new workflows in the namespace.\n If the rule with such ID already exist this call will fail\n Note: the rules are part of namespace configuration and will be stored in the namespace config.\n Namespace config is eventually consistent.',
  operationId: 'CreateWorkflowRule',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateWorkflowRuleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CreateWorkflowRuleResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getNamespacesNamespaceWorkflowRulesRuleIdRoute = createRoute({
  method: 'get',
  path: '/namespaces/{namespace}/workflow-rules/{ruleId}',
  tags: ['WorkflowService'],
  description:
    'DescribeWorkflowRule return the rule specification for existing rule id.\n If there is no rule with such id - NOT FOUND error will be returned.',
  operationId: 'DescribeWorkflowRule',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      ruleId: z
        .string()
        .openapi({
          param: {
            name: 'ruleId',
            in: 'path',
            description: 'User-specified ID of the rule to read. Unique within the namespace.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DescribeWorkflowRuleResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const deleteNamespacesNamespaceWorkflowRulesRuleIdRoute = createRoute({
  method: 'delete',
  path: '/namespaces/{namespace}/workflow-rules/{ruleId}',
  tags: ['WorkflowService'],
  description: 'Delete rule by rule id',
  operationId: 'DeleteWorkflowRule',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      ruleId: z
        .string()
        .openapi({
          param: {
            name: 'ruleId',
            in: 'path',
            description: 'ID of the rule to delete. Unique within the namespace.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DeleteWorkflowRuleResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getNamespacesNamespaceWorkflowsRoute = createRoute({
  method: 'get',
  path: '/namespaces/{namespace}/workflows',
  tags: ['WorkflowService'],
  description:
    'ListWorkflowExecutions is a visibility API to list workflow executions in a specific namespace.',
  operationId: 'ListWorkflowExecutions',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      nextPageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextPageToken',
            in: 'query',
            schema: { type: 'string', format: 'bytes' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'query', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListWorkflowExecutionsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getNamespacesNamespaceWorkflowsExecutionWorkflowIdRoute = createRoute({
  method: 'get',
  path: '/namespaces/{namespace}/workflows/{execution.workflow_id}',
  tags: ['WorkflowService'],
  description:
    'DescribeWorkflowExecution returns information about the specified workflow execution.',
  operationId: 'DescribeWorkflowExecution',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      'execution.workflow_id': z
        .string()
        .openapi({
          param: {
            name: 'execution.workflow_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'execution.workflowId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'execution.workflowId',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'execution.runId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'execution.runId',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DescribeWorkflowExecutionResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getNamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryRoute = createRoute({
  method: 'get',
  path: '/namespaces/{namespace}/workflows/{execution.workflow_id}/history',
  tags: ['WorkflowService'],
  description:
    'GetWorkflowExecutionHistory returns the history of specified workflow execution. Fails with\n `NotFound` if the specified workflow execution is unknown to the service.',
  operationId: 'GetWorkflowExecutionHistory',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      'execution.workflow_id': z
        .string()
        .openapi({
          param: {
            name: 'execution.workflow_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'execution.workflowId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'execution.workflowId',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'execution.runId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'execution.runId',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maximumPageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maximumPageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      nextPageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextPageToken',
            in: 'query',
            description:
              'If a `GetWorkflowExecutionHistoryResponse` or a `PollWorkflowTaskQueueResponse` had one of\n these, it should be passed here to fetch the next page.',
            schema: { type: 'string', format: 'bytes' },
            required: false,
          },
        }),
      waitNewEvent: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'waitNewEvent',
            in: 'query',
            description:
              'If set to true, the RPC call will not resolve until there is a new event which matches\n the `history_event_filter_type`, or a timeout is hit.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      historyEventFilterType: z
        .enum([
          'HISTORY_EVENT_FILTER_TYPE_UNSPECIFIED',
          'HISTORY_EVENT_FILTER_TYPE_ALL_EVENT',
          'HISTORY_EVENT_FILTER_TYPE_CLOSE_EVENT',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'historyEventFilterType',
            in: 'query',
            description:
              'Filter returned events such that they match the specified filter type.\n Default: HISTORY_EVENT_FILTER_TYPE_ALL_EVENT.',
            schema: {
              enum: [
                'HISTORY_EVENT_FILTER_TYPE_UNSPECIFIED',
                'HISTORY_EVENT_FILTER_TYPE_ALL_EVENT',
                'HISTORY_EVENT_FILTER_TYPE_CLOSE_EVENT',
              ],
              type: 'string',
              format: 'enum',
            },
            required: false,
          },
        }),
      skipArchival: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'skipArchival',
            in: 'query',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetWorkflowExecutionHistoryResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getNamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryReverseRoute = createRoute({
  method: 'get',
  path: '/namespaces/{namespace}/workflows/{execution.workflow_id}/history-reverse',
  tags: ['WorkflowService'],
  description:
    'GetWorkflowExecutionHistoryReverse returns the history of specified workflow execution in reverse\n order (starting from last event). Fails with`NotFound` if the specified workflow execution is\n unknown to the service.',
  operationId: 'GetWorkflowExecutionHistoryReverse',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      'execution.workflow_id': z
        .string()
        .openapi({
          param: {
            name: 'execution.workflow_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'execution.workflowId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'execution.workflowId',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'execution.runId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'execution.runId',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maximumPageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maximumPageSize',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      nextPageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextPageToken',
            in: 'query',
            schema: { type: 'string', format: 'bytes' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetWorkflowExecutionHistoryReverseResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceWorkflowsExecutionWorkflowIdQueryQueryQueryTypeRoute =
  createRoute({
    method: 'post',
    path: '/namespaces/{namespace}/workflows/{execution.workflow_id}/query/{query.query_type}',
    tags: ['WorkflowService'],
    description: 'QueryWorkflow requests a query be executed for a specified workflow execution.',
    operationId: 'QueryWorkflow',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'execution.workflow_id': z
          .string()
          .openapi({
            param: {
              name: 'execution.workflow_id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'query.query_type': z
          .string()
          .openapi({
            param: {
              name: 'query.query_type',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: QueryWorkflowRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: QueryWorkflowResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postNamespacesNamespaceWorkflowsExecutionWorkflowIdTriggerRuleRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/workflows/{execution.workflow_id}/trigger-rule',
  tags: ['WorkflowService'],
  description:
    'TriggerWorkflowRule allows to:\n  * trigger existing rule for a specific workflow execution;\n  * trigger rule for a specific workflow execution without creating a rule;\n This is useful for one-off operations.',
  operationId: 'TriggerWorkflowRule',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      'execution.workflow_id': z
        .string()
        .openapi({
          param: {
            name: 'execution.workflow_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: TriggerWorkflowRuleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: TriggerWorkflowRuleResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceWorkflowsWorkflowIdRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/workflows/{workflowId}',
  tags: ['WorkflowService'],
  description:
    'StartWorkflowExecution starts a new workflow execution.\n\n It will create the execution with a `WORKFLOW_EXECUTION_STARTED` event in its history and\n also schedule the first workflow task. Returns `WorkflowExecutionAlreadyStarted`, if an\n instance already exists with same workflow id.',
  operationId: 'StartWorkflowExecution',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      workflowId: z
        .string()
        .openapi({
          param: { name: 'workflowId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartWorkflowExecutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: StartWorkflowExecutionResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdCompleteRoute =
  createRoute({
    method: 'post',
    path: '/namespaces/{namespace}/workflows/{workflowId}/activities/{activityId}/complete',
    tags: ['WorkflowService'],
    description:
      'See `RespondActivityTaskCompleted`. This version allows clients to record completions by\n namespace/workflow id/activity id instead of task token.\n\n (-- api-linter: core::0136::prepositions=disabled\n     aip.dev/not-precedent: "By" is used to indicate request type. --)',
    operationId: 'RespondActivityTaskCompletedById',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: {
              name: 'namespace',
              in: 'path',
              description: 'Namespace of the workflow which scheduled this activity',
              required: true,
              schema: { type: 'string' },
            },
          }),
        workflowId: z
          .string()
          .openapi({
            param: {
              name: 'workflowId',
              in: 'path',
              description:
                'Id of the workflow which scheduled this activity, leave empty to target a standalone activity',
              required: true,
              schema: { type: 'string' },
            },
          }),
        activityId: z
          .string()
          .openapi({
            param: {
              name: 'activityId',
              in: 'path',
              description: 'Id of the activity to complete',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: RespondActivityTaskCompletedByIdRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: RespondActivityTaskCompletedByIdResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdFailRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/workflows/{workflowId}/activities/{activityId}/fail',
  tags: ['WorkflowService'],
  description:
    'See `RecordActivityTaskFailed`. This version allows clients to record failures by\n namespace/workflow id/activity id instead of task token.\n\n (-- api-linter: core::0136::prepositions=disabled\n     aip.dev/not-precedent: "By" is used to indicate request type. --)',
  operationId: 'RespondActivityTaskFailedById',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace of the workflow which scheduled this activity',
            required: true,
            schema: { type: 'string' },
          },
        }),
      workflowId: z
        .string()
        .openapi({
          param: {
            name: 'workflowId',
            in: 'path',
            description:
              'Id of the workflow which scheduled this activity, leave empty to target a standalone activity',
            required: true,
            schema: { type: 'string' },
          },
        }),
      activityId: z
        .string()
        .openapi({
          param: {
            name: 'activityId',
            in: 'path',
            description: 'Id of the activity to fail',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RespondActivityTaskFailedByIdRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RespondActivityTaskFailedByIdResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdHeartbeatRoute =
  createRoute({
    method: 'post',
    path: '/namespaces/{namespace}/workflows/{workflowId}/activities/{activityId}/heartbeat',
    tags: ['WorkflowService'],
    description:
      'See `RecordActivityTaskHeartbeat`. This version allows clients to record heartbeats by\n namespace/workflow id/activity id instead of task token.\n\n (-- api-linter: core::0136::prepositions=disabled\n     aip.dev/not-precedent: "By" is used to indicate request type. --)',
    operationId: 'RecordActivityTaskHeartbeatById',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: {
              name: 'namespace',
              in: 'path',
              description: 'Namespace of the workflow which scheduled this activity',
              required: true,
              schema: { type: 'string' },
            },
          }),
        workflowId: z
          .string()
          .openapi({
            param: {
              name: 'workflowId',
              in: 'path',
              description:
                'Id of the workflow which scheduled this activity, leave empty to target a standalone activity',
              required: true,
              schema: { type: 'string' },
            },
          }),
        activityId: z
          .string()
          .openapi({
            param: {
              name: 'activityId',
              in: 'path',
              description: "Id of the activity we're heartbeating",
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: RecordActivityTaskHeartbeatByIdRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: RecordActivityTaskHeartbeatByIdResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdPauseRoute = createRoute(
  {
    method: 'post',
    path: '/namespaces/{namespace}/workflows/{workflowId}/activities/{activityId}/pause',
    tags: ['WorkflowService'],
    description:
      "PauseActivityExecution pauses the execution of an activity specified by its ID.\n This API can be used to target a workflow activity or a standalone activity\n\n Pausing an activity means:\n - If the activity is currently waiting for a retry or is running and subsequently fails,\n   it will not be rescheduled until it is unpaused.\n - If the activity is already paused, calling this method will have no effect.\n - If the activity is running and finishes successfully, the activity will be completed.\n - If the activity is running and finishes with failure:\n   * if there is no retry left - the activity will be completed.\n   * if there are more retries left - the activity will be paused.\n For long-running activities:\n - activities in paused state will send a cancellation with \"activity_paused\" set to 'true' in response to 'RecordActivityTaskHeartbeat'.\n\n Returns a `NotFound` error if there is no pending activity with the provided ID",
    operationId: 'PauseActivityExecution',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: {
              name: 'namespace',
              in: 'path',
              description: 'Namespace of the workflow which scheduled this activity.',
              required: true,
              schema: { type: 'string' },
            },
          }),
        workflowId: z
          .string()
          .openapi({
            param: {
              name: 'workflowId',
              in: 'path',
              description:
                'If provided, pause a workflow activity (or activities) for the given workflow ID.\n If empty, targets a standalone activity.',
              required: true,
              schema: { type: 'string' },
            },
          }),
        activityId: z
          .string()
          .openapi({
            param: {
              name: 'activityId',
              in: 'path',
              description: 'The ID of the activity to target.',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: PauseActivityExecutionRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: PauseActivityExecutionResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  },
)

export const postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResetRoute = createRoute(
  {
    method: 'post',
    path: '/namespaces/{namespace}/workflows/{workflowId}/activities/{activityId}/reset',
    tags: ['WorkflowService'],
    description:
      "ResetActivityExecution resets the execution of an activity specified by its ID.\n This API can be used to target a workflow activity or a standalone activity.\n\n Resetting an activity means:\n * number of attempts will be reset to 0.\n * activity timeouts will be reset.\n * if the activity is waiting for retry, and it is not paused or 'keep_paused' is not provided:\n    it will be scheduled immediately (* see 'jitter' flag)\n\n Returns a `NotFound` error if there is no pending activity with the provided ID or type.",
    operationId: 'ResetActivityExecution',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: {
              name: 'namespace',
              in: 'path',
              description: 'Namespace of the workflow which scheduled this activity.',
              required: true,
              schema: { type: 'string' },
            },
          }),
        workflowId: z
          .string()
          .openapi({
            param: {
              name: 'workflowId',
              in: 'path',
              description:
                'If provided, targets a workflow activity for the given workflow ID.\n If empty, targets a standalone activity.',
              required: true,
              schema: { type: 'string' },
            },
          }),
        activityId: z
          .string()
          .openapi({
            param: {
              name: 'activityId',
              in: 'path',
              description: 'The ID of the activity to target.',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: ResetActivityExecutionRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: ResetActivityExecutionResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  },
)

export const postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResolveAsCanceledRoute =
  createRoute({
    method: 'post',
    path: '/namespaces/{namespace}/workflows/{workflowId}/activities/{activityId}/resolve-as-canceled',
    tags: ['WorkflowService'],
    description:
      'See `RespondActivityTaskCanceled`. This version allows clients to record failures by\n namespace/workflow id/activity id instead of task token.\n\n (-- api-linter: core::0136::prepositions=disabled\n     aip.dev/not-precedent: "By" is used to indicate request type. --)',
    operationId: 'RespondActivityTaskCanceledById',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: {
              name: 'namespace',
              in: 'path',
              description: 'Namespace of the workflow which scheduled this activity',
              required: true,
              schema: { type: 'string' },
            },
          }),
        workflowId: z
          .string()
          .openapi({
            param: {
              name: 'workflowId',
              in: 'path',
              description:
                'Id of the workflow which scheduled this activity, leave empty to target a standalone activity',
              required: true,
              schema: { type: 'string' },
            },
          }),
        activityId: z
          .string()
          .openapi({
            param: {
              name: 'activityId',
              in: 'path',
              description: 'Id of the activity to confirm is cancelled',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: RespondActivityTaskCanceledByIdRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: RespondActivityTaskCanceledByIdResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUnpauseRoute =
  createRoute({
    method: 'post',
    path: '/namespaces/{namespace}/workflows/{workflowId}/activities/{activityId}/unpause',
    tags: ['WorkflowService'],
    description:
      "UnpauseActivityExecution unpauses the execution of an activity specified by its ID.\n This API can be used to target a workflow activity or a standalone activity.\n\n If activity is not paused, this call will have no effect.\n If the activity was paused while waiting for retry, it will be scheduled immediately (* see 'jitter' flag).\n Once the activity is unpaused, all timeout timers will be regenerated.\n\n Returns a `NotFound` error if there is no pending activity with the provided ID",
    operationId: 'UnpauseActivityExecution',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: {
              name: 'namespace',
              in: 'path',
              description: 'Namespace of the workflow which scheduled this activity.',
              required: true,
              schema: { type: 'string' },
            },
          }),
        workflowId: z
          .string()
          .openapi({
            param: {
              name: 'workflowId',
              in: 'path',
              description:
                'If provided, targets a workflow activity for the given workflow ID.\n If empty, targets a standalone activity.',
              required: true,
              schema: { type: 'string' },
            },
          }),
        activityId: z
          .string()
          .openapi({
            param: {
              name: 'activityId',
              in: 'path',
              description: 'The ID of the activity to target.',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UnpauseActivityExecutionRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: UnpauseActivityExecutionResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUpdateOptionsRoute =
  createRoute({
    method: 'post',
    path: '/namespaces/{namespace}/workflows/{workflowId}/activities/{activityId}/update-options',
    tags: ['WorkflowService'],
    description:
      'UpdateActivityExecutionOptions is called by the client to update the options of an activity by its ID.\n This API can be used to target a workflow activity or a standalone activity.',
    operationId: 'UpdateActivityExecutionOptions',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: {
              name: 'namespace',
              in: 'path',
              description: 'Namespace of the workflow which scheduled this activity',
              required: true,
              schema: { type: 'string' },
            },
          }),
        workflowId: z
          .string()
          .openapi({
            param: {
              name: 'workflowId',
              in: 'path',
              description:
                'If provided, targets a workflow activity for the given workflow ID.\n If empty, targets a standalone activity.',
              required: true,
              schema: { type: 'string' },
            },
          }),
        activityId: z
          .string()
          .openapi({
            param: {
              name: 'activityId',
              in: 'path',
              description: 'The ID of the activity to target.',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateActivityExecutionOptionsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: UpdateActivityExecutionOptionsResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postNamespacesNamespaceWorkflowsWorkflowIdPauseRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/workflows/{workflowId}/pause',
  tags: ['WorkflowService'],
  description:
    'Note: This is an experimental API and the behavior may change in a future release.\n PauseWorkflowExecution pauses the workflow execution specified in the request. Pausing a workflow execution results in\n - The workflow execution status changes to `PAUSED` and a new WORKFLOW_EXECUTION_PAUSED event is added to the history\n - No new workflow tasks or activity tasks are dispatched.\n   - Any workflow task currently executing on the worker will be allowed to complete.\n   - Any activity task currently executing will be paused.\n - All server-side events will continue to be processed by the server.\n - Queries & Updates on a paused workflow will be rejected.',
  operationId: 'PauseWorkflowExecution',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace of the workflow to pause.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      workflowId: z
        .string()
        .openapi({
          param: {
            name: 'workflowId',
            in: 'path',
            description: 'ID of the workflow execution to be paused. Required.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PauseWorkflowExecutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PauseWorkflowExecutionResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceWorkflowsWorkflowIdSignalWithStartSignalNameRoute = createRoute(
  {
    method: 'post',
    path: '/namespaces/{namespace}/workflows/{workflowId}/signal-with-start/{signalName}',
    tags: ['WorkflowService'],
    description:
      'SignalWithStartWorkflowExecution is used to ensure a signal is sent to a workflow, even if\n it isn\'t yet started.\n\n If the workflow is running, a `WORKFLOW_EXECUTION_SIGNALED` event is recorded in the history\n and a workflow task is generated.\n\n If the workflow is not running or not found, then the workflow is created with\n `WORKFLOW_EXECUTION_STARTED` and `WORKFLOW_EXECUTION_SIGNALED` events in its history, and a\n workflow task is generated.\n\n (-- api-linter: core::0136::prepositions=disabled\n     aip.dev/not-precedent: "With" is used to indicate combined operation. --)',
    operationId: 'SignalWithStartWorkflowExecution',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
          }),
        workflowId: z
          .string()
          .openapi({
            param: { name: 'workflowId', in: 'path', required: true, schema: { type: 'string' } },
          }),
        signalName: z
          .string()
          .openapi({
            param: {
              name: 'signalName',
              in: 'path',
              description: 'The workflow author-defined name of the signal to send to the workflow',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: SignalWithStartWorkflowExecutionRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: SignalWithStartWorkflowExecutionResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  },
)

export const postNamespacesNamespaceWorkflowsWorkflowIdUnpauseRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/workflows/{workflowId}/unpause',
  tags: ['WorkflowService'],
  description:
    'Note: This is an experimental API and the behavior may change in a future release.\n UnpauseWorkflowExecution unpauses a previously paused workflow execution specified in the request.\n Unpausing a workflow execution results in\n - The workflow execution status changes to `RUNNING` and a new WORKFLOW_EXECUTION_UNPAUSED event is added to the history\n - Workflow tasks and activity tasks are resumed.',
  operationId: 'UnpauseWorkflowExecution',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            name: 'namespace',
            in: 'path',
            description: 'Namespace of the workflow to unpause.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      workflowId: z
        .string()
        .openapi({
          param: {
            name: 'workflowId',
            in: 'path',
            description: 'ID of the workflow execution to be paused. Required.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UnpauseWorkflowExecutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UnpauseWorkflowExecutionResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdCancelRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/workflows/{workflow_execution.workflow_id}/cancel',
  tags: ['WorkflowService'],
  description:
    "RequestCancelWorkflowExecution is called by workers when they want to request cancellation of\n a workflow execution.\n\n This results in a new `WORKFLOW_EXECUTION_CANCEL_REQUESTED` event being written to the\n workflow history and a new workflow task created for the workflow. It returns success if the requested\n workflow is already closed. It fails with 'NotFound' if the requested workflow doesn't exist.",
  operationId: 'RequestCancelWorkflowExecution',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      'workflow_execution.workflow_id': z
        .string()
        .openapi({
          param: {
            name: 'workflow_execution.workflow_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RequestCancelWorkflowExecutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RequestCancelWorkflowExecutionResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdResetRoute = createRoute({
  method: 'post',
  path: '/namespaces/{namespace}/workflows/{workflow_execution.workflow_id}/reset',
  tags: ['WorkflowService'],
  description:
    'ResetWorkflowExecution will reset an existing workflow execution to a specified\n `WORKFLOW_TASK_COMPLETED` event (exclusive). It will immediately terminate the current\n execution instance. "Exclusive" means the identified completed event itself is not replayed\n in the reset history; the preceding `WORKFLOW_TASK_STARTED` event remains and will be marked as failed\n immediately, and a new workflow task will be scheduled to retry it.',
  operationId: 'ResetWorkflowExecution',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
        }),
      'workflow_execution.workflow_id': z
        .string()
        .openapi({
          param: {
            name: 'workflow_execution.workflow_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ResetWorkflowExecutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ResetWorkflowExecutionResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdSignalSignalNameRoute =
  createRoute({
    method: 'post',
    path: '/namespaces/{namespace}/workflows/{workflow_execution.workflow_id}/signal/{signalName}',
    tags: ['WorkflowService'],
    description:
      'SignalWorkflowExecution is used to send a signal to a running workflow execution.\n\n This results in a `WORKFLOW_EXECUTION_SIGNALED` event recorded in the history and a workflow\n task being created for the execution.',
    operationId: 'SignalWorkflowExecution',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'workflow_execution.workflow_id': z
          .string()
          .openapi({
            param: {
              name: 'workflow_execution.workflow_id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        signalName: z
          .string()
          .openapi({
            param: {
              name: 'signalName',
              in: 'path',
              description: 'The workflow author-defined name of the signal to send to the workflow',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: SignalWorkflowExecutionRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: SignalWorkflowExecutionResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdTerminateRoute =
  createRoute({
    method: 'post',
    path: '/namespaces/{namespace}/workflows/{workflow_execution.workflow_id}/terminate',
    tags: ['WorkflowService'],
    description:
      'TerminateWorkflowExecution terminates an existing workflow execution by recording a\n `WORKFLOW_EXECUTION_TERMINATED` event in the history and immediately terminating the\n execution instance.',
    operationId: 'TerminateWorkflowExecution',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'workflow_execution.workflow_id': z
          .string()
          .openapi({
            param: {
              name: 'workflow_execution.workflow_id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: TerminateWorkflowExecutionRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: TerminateWorkflowExecutionResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateOptionsRoute =
  createRoute({
    method: 'post',
    path: '/namespaces/{namespace}/workflows/{workflow_execution.workflow_id}/update-options',
    tags: ['WorkflowService'],
    description:
      'UpdateWorkflowExecutionOptions partially updates the WorkflowExecutionOptions of an existing workflow execution.',
    operationId: 'UpdateWorkflowExecutionOptions',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: {
              name: 'namespace',
              in: 'path',
              description: 'The namespace name of the target Workflow.',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'workflow_execution.workflow_id': z
          .string()
          .openapi({
            param: {
              name: 'workflow_execution.workflow_id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateWorkflowExecutionOptionsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: UpdateWorkflowExecutionOptionsResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateRequestInputNameRoute =
  createRoute({
    method: 'post',
    path: '/namespaces/{namespace}/workflows/{workflow_execution.workflow_id}/update/{request.input.name}',
    tags: ['WorkflowService'],
    description: 'Invokes the specified Update function on user Workflow code.',
    operationId: 'UpdateWorkflowExecution',
    request: {
      params: z.object({
        namespace: z
          .string()
          .openapi({
            param: {
              name: 'namespace',
              in: 'path',
              description: 'The namespace name of the target Workflow.',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'workflow_execution.workflow_id': z
          .string()
          .openapi({
            param: {
              name: 'workflow_execution.workflow_id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'request.input.name': z
          .string()
          .openapi({
            param: {
              name: 'request.input.name',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateWorkflowExecutionRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: UpdateWorkflowExecutionResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const getSystemInfoRoute = createRoute({
  method: 'get',
  path: '/system-info',
  tags: ['WorkflowService'],
  description: 'GetSystemInfo returns information about the system.',
  operationId: 'GetSystemInfo',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetSystemInfoResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})
