type ReleaseInfo = {
  version?: string | undefined
  releaseTime?: string | undefined
  notes?: string | undefined
}
type Alert = {
  message?: string | undefined
  severity?:
    | 'SEVERITY_UNSPECIFIED'
    | 'SEVERITY_HIGH'
    | 'SEVERITY_MEDIUM'
    | 'SEVERITY_LOW'
    | undefined
}
type VersionInfo = {
  current?: ReleaseInfo | undefined
  recommended?: ReleaseInfo | undefined
  instructions?: string | undefined
  alerts?: Alert[] | undefined
  lastUpdateTime?: string | undefined
}
type GetClusterInfoResponse = {
  supportedClients?: { [x: string]: string } | undefined
  serverVersion?: string | undefined
  clusterId?: string | undefined
  versionInfo?: VersionInfo | undefined
  clusterName?: string | undefined
  historyShardCount?: number | undefined
  persistenceStore?: string | undefined
  visibilityStore?: string | undefined
  initialFailoverVersion?: string | undefined
  failoverVersionIncrement?: string | undefined
}
type GoogleProtobufAny = { '@type'?: string | undefined }
type Status = {
  code?: number | undefined
  message?: string | undefined
  details?: GoogleProtobufAny[] | undefined
}
type NamespaceInfo = {
  name?: string | undefined
  state?:
    | 'NAMESPACE_STATE_UNSPECIFIED'
    | 'NAMESPACE_STATE_REGISTERED'
    | 'NAMESPACE_STATE_DEPRECATED'
    | 'NAMESPACE_STATE_DELETED'
    | undefined
  description?: string | undefined
  ownerEmail?: string | undefined
  data?: { [x: string]: string } | undefined
  id?: string | undefined
  capabilities?:
    | {
        eagerWorkflowStart?: boolean | undefined
        syncUpdate?: boolean | undefined
        asyncUpdate?: boolean | undefined
        workerHeartbeats?: boolean | undefined
        reportedProblemsSearchAttribute?: boolean | undefined
        workflowPause?: boolean | undefined
        standaloneActivities?: boolean | undefined
        workerPollCompleteOnShutdown?: boolean | undefined
        pollerAutoscaling?: boolean | undefined
        workerCommands?: boolean | undefined
      }
    | undefined
  limits?:
    | { blobSizeLimitError?: string | undefined; memoSizeLimitError?: string | undefined }
    | undefined
  supportsSchedules?: boolean | undefined
}
type BadBinaryInfo = {
  reason?: string | undefined
  operator?: string | undefined
  createTime?: string | undefined
}
type BadBinaries = { binaries?: { [x: string]: BadBinaryInfo } | undefined }
type NamespaceConfig = {
  workflowExecutionRetentionTtl?: string | undefined
  badBinaries?: BadBinaries | undefined
  historyArchivalState?:
    | 'ARCHIVAL_STATE_UNSPECIFIED'
    | 'ARCHIVAL_STATE_DISABLED'
    | 'ARCHIVAL_STATE_ENABLED'
    | undefined
  historyArchivalUri?: string | undefined
  visibilityArchivalState?:
    | 'ARCHIVAL_STATE_UNSPECIFIED'
    | 'ARCHIVAL_STATE_DISABLED'
    | 'ARCHIVAL_STATE_ENABLED'
    | undefined
  visibilityArchivalUri?: string | undefined
  customSearchAttributeAliases?: { [x: string]: string } | undefined
}
type ClusterReplicationConfig = { clusterName?: string | undefined }
type NamespaceReplicationConfig = {
  activeClusterName?: string | undefined
  clusters?: ClusterReplicationConfig[] | undefined
  state?:
    | 'REPLICATION_STATE_UNSPECIFIED'
    | 'REPLICATION_STATE_NORMAL'
    | 'REPLICATION_STATE_HANDOVER'
    | undefined
}
type FailoverStatus = { failoverTime?: string | undefined; failoverVersion?: string | undefined }
type DescribeNamespaceResponse = {
  namespaceInfo?: NamespaceInfo | undefined
  config?: NamespaceConfig | undefined
  replicationConfig?: NamespaceReplicationConfig | undefined
  failoverVersion?: string | undefined
  isGlobalNamespace?: boolean | undefined
  failoverHistory?: FailoverStatus[] | undefined
}
type ListNamespacesResponse = {
  namespaces?: DescribeNamespaceResponse[] | undefined
  nextPageToken?: string | undefined
}
type RegisterNamespaceRequest = {
  namespace?: string | undefined
  description?: string | undefined
  ownerEmail?: string | undefined
  workflowExecutionRetentionPeriod?: string | undefined
  clusters?: ClusterReplicationConfig[] | undefined
  activeClusterName?: string | undefined
  data?: { [x: string]: string } | undefined
  securityToken?: string | undefined
  isGlobalNamespace?: boolean | undefined
  historyArchivalState?:
    | 'ARCHIVAL_STATE_UNSPECIFIED'
    | 'ARCHIVAL_STATE_DISABLED'
    | 'ARCHIVAL_STATE_ENABLED'
    | undefined
  historyArchivalUri?: string | undefined
  visibilityArchivalState?:
    | 'ARCHIVAL_STATE_UNSPECIFIED'
    | 'ARCHIVAL_STATE_DISABLED'
    | 'ARCHIVAL_STATE_ENABLED'
    | undefined
  visibilityArchivalUri?: string | undefined
}
type RegisterNamespaceResponse = { [x: string]: unknown }
type Payload = { [x: string]: unknown }
type ActivityExecutionListInfo = {
  activityId?: string | undefined
  runId?: string | undefined
  activityType?: { name?: string | undefined } | undefined
  scheduleTime?: string | undefined
  closeTime?: string | undefined
  status?:
    | 'ACTIVITY_EXECUTION_STATUS_UNSPECIFIED'
    | 'ACTIVITY_EXECUTION_STATUS_RUNNING'
    | 'ACTIVITY_EXECUTION_STATUS_COMPLETED'
    | 'ACTIVITY_EXECUTION_STATUS_FAILED'
    | 'ACTIVITY_EXECUTION_STATUS_CANCELED'
    | 'ACTIVITY_EXECUTION_STATUS_TERMINATED'
    | 'ACTIVITY_EXECUTION_STATUS_TIMED_OUT'
    | undefined
  searchAttributes?: { indexedFields?: { [x: string]: Payload } | undefined } | undefined
  taskQueue?: string | undefined
  stateTransitionCount?: string | undefined
  stateSizeBytes?: string | undefined
  executionDuration?: string | undefined
}
type ListActivityExecutionsResponse = {
  executions?: ActivityExecutionListInfo[] | undefined
  nextPageToken?: string | undefined
}
type PauseActivityRequest = {
  namespace?: string | undefined
  execution?: { workflowId?: string | undefined; runId?: string | undefined } | undefined
  identity?: string | undefined
  id?: string | undefined
  type?: string | undefined
  reason?: string | undefined
  requestId?: string | undefined
}
type PauseActivityResponse = { [x: string]: unknown }
type ResetActivityRequest = {
  namespace?: string | undefined
  execution?: { workflowId?: string | undefined; runId?: string | undefined } | undefined
  identity?: string | undefined
  id?: string | undefined
  type?: string | undefined
  matchAll?: boolean | undefined
  resetHeartbeat?: boolean | undefined
  keepPaused?: boolean | undefined
  jitter?: string | undefined
  restoreOriginalOptions?: boolean | undefined
}
type ResetActivityResponse = { [x: string]: unknown }
type UnpauseActivityRequest = {
  namespace?: string | undefined
  execution?: { workflowId?: string | undefined; runId?: string | undefined } | undefined
  identity?: string | undefined
  id?: string | undefined
  type?: string | undefined
  unpauseAll?: boolean | undefined
  resetAttempts?: boolean | undefined
  resetHeartbeat?: boolean | undefined
  jitter?: string | undefined
}
type UnpauseActivityResponse = { [x: string]: unknown }
type TaskQueue = {
  name?: string | undefined
  kind?:
    | 'TASK_QUEUE_KIND_UNSPECIFIED'
    | 'TASK_QUEUE_KIND_NORMAL'
    | 'TASK_QUEUE_KIND_STICKY'
    | 'TASK_QUEUE_KIND_WORKER_COMMANDS'
    | undefined
  normalName?: string | undefined
}
type UpdateActivityOptionsRequest = {
  namespace?: string | undefined
  execution?: { workflowId?: string | undefined; runId?: string | undefined } | undefined
  identity?: string | undefined
  activityOptions?:
    | {
        taskQueue?: TaskQueue | undefined
        scheduleToCloseTimeout?: string | undefined
        scheduleToStartTimeout?: string | undefined
        startToCloseTimeout?: string | undefined
        heartbeatTimeout?: string | undefined
        retryPolicy?:
          | {
              initialInterval?: string | undefined
              backoffCoefficient?: number | undefined
              maximumInterval?: string | undefined
              maximumAttempts?: number | undefined
              nonRetryableErrorTypes?: string[] | undefined
            }
          | undefined
        priority?:
          | {
              priorityKey?: number | undefined
              fairnessKey?: string | undefined
              fairnessWeight?: number | undefined
            }
          | undefined
      }
    | undefined
  updateMask?: string | undefined
  id?: string | undefined
  type?: string | undefined
  matchAll?: boolean | undefined
  restoreOriginal?: boolean | undefined
}
type UpdateActivityOptionsResponse = {
  activityOptions?:
    | {
        taskQueue?: TaskQueue | undefined
        scheduleToCloseTimeout?: string | undefined
        scheduleToStartTimeout?: string | undefined
        startToCloseTimeout?: string | undefined
        heartbeatTimeout?: string | undefined
        retryPolicy?:
          | {
              initialInterval?: string | undefined
              backoffCoefficient?: number | undefined
              maximumInterval?: string | undefined
              maximumAttempts?: number | undefined
              nonRetryableErrorTypes?: string[] | undefined
            }
          | undefined
        priority?:
          | {
              priorityKey?: number | undefined
              fairnessKey?: string | undefined
              fairnessWeight?: number | undefined
            }
          | undefined
      }
    | undefined
}
type Payloads = { payloads?: Payload[] | undefined }
type ApplicationFailureInfo = {
  type?: string | undefined
  nonRetryable?: boolean | undefined
  details?: Payloads | undefined
  nextRetryDelay?: string | undefined
  category?:
    | 'APPLICATION_ERROR_CATEGORY_UNSPECIFIED'
    | 'APPLICATION_ERROR_CATEGORY_BENIGN'
    | undefined
}
type TimeoutFailureInfo = {
  timeoutType?:
    | 'TIMEOUT_TYPE_UNSPECIFIED'
    | 'TIMEOUT_TYPE_START_TO_CLOSE'
    | 'TIMEOUT_TYPE_SCHEDULE_TO_START'
    | 'TIMEOUT_TYPE_SCHEDULE_TO_CLOSE'
    | 'TIMEOUT_TYPE_HEARTBEAT'
    | undefined
  lastHeartbeatDetails?: Payloads | undefined
}
type CanceledFailureInfo = { details?: Payloads | undefined; identity?: string | undefined }
type TerminatedFailureInfo = { identity?: string | undefined }
type ServerFailureInfo = { nonRetryable?: boolean | undefined }
type ResetWorkflowFailureInfo = { lastHeartbeatDetails?: Payloads | undefined }
type ActivityType = { name?: string | undefined }
type ActivityFailureInfo = {
  scheduledEventId?: string | undefined
  startedEventId?: string | undefined
  identity?: string | undefined
  activityType?: ActivityType | undefined
  activityId?: string | undefined
  retryState?:
    | 'RETRY_STATE_UNSPECIFIED'
    | 'RETRY_STATE_IN_PROGRESS'
    | 'RETRY_STATE_NON_RETRYABLE_FAILURE'
    | 'RETRY_STATE_TIMEOUT'
    | 'RETRY_STATE_MAXIMUM_ATTEMPTS_REACHED'
    | 'RETRY_STATE_RETRY_POLICY_NOT_SET'
    | 'RETRY_STATE_INTERNAL_SERVER_ERROR'
    | 'RETRY_STATE_CANCEL_REQUESTED'
    | undefined
}
type WorkflowExecution = { workflowId?: string | undefined; runId?: string | undefined }
type WorkflowType = { name?: string | undefined }
type ChildWorkflowExecutionFailureInfo = {
  namespace?: string | undefined
  workflowExecution?: WorkflowExecution | undefined
  workflowType?: WorkflowType | undefined
  initiatedEventId?: string | undefined
  startedEventId?: string | undefined
  retryState?:
    | 'RETRY_STATE_UNSPECIFIED'
    | 'RETRY_STATE_IN_PROGRESS'
    | 'RETRY_STATE_NON_RETRYABLE_FAILURE'
    | 'RETRY_STATE_TIMEOUT'
    | 'RETRY_STATE_MAXIMUM_ATTEMPTS_REACHED'
    | 'RETRY_STATE_RETRY_POLICY_NOT_SET'
    | 'RETRY_STATE_INTERNAL_SERVER_ERROR'
    | 'RETRY_STATE_CANCEL_REQUESTED'
    | undefined
}
type NexusOperationFailureInfo = {
  scheduledEventId?: string | undefined
  endpoint?: string | undefined
  service?: string | undefined
  operation?: string | undefined
  operationId?: string | undefined
  operationToken?: string | undefined
}
type NexusHandlerFailureInfo = {
  type?: string | undefined
  retryBehavior?:
    | 'NEXUS_HANDLER_ERROR_RETRY_BEHAVIOR_UNSPECIFIED'
    | 'NEXUS_HANDLER_ERROR_RETRY_BEHAVIOR_RETRYABLE'
    | 'NEXUS_HANDLER_ERROR_RETRY_BEHAVIOR_NON_RETRYABLE'
    | undefined
}
type Failure = {
  message?: string | undefined
  source?: string | undefined
  stackTrace?: string | undefined
  encodedAttributes?: {} | undefined
  cause?: Failure | undefined
  applicationFailureInfo?: ApplicationFailureInfo | undefined
  timeoutFailureInfo?: TimeoutFailureInfo | undefined
  canceledFailureInfo?: CanceledFailureInfo | undefined
  terminatedFailureInfo?: TerminatedFailureInfo | undefined
  serverFailureInfo?: ServerFailureInfo | undefined
  resetWorkflowFailureInfo?: ResetWorkflowFailureInfo | undefined
  activityFailureInfo?: ActivityFailureInfo | undefined
  childWorkflowExecutionFailureInfo?: ChildWorkflowExecutionFailureInfo | undefined
  nexusOperationExecutionFailureInfo?: NexusOperationFailureInfo | undefined
  nexusHandlerFailureInfo?: NexusHandlerFailureInfo | undefined
}
type SearchAttributes = { indexedFields?: { [x: string]: Payload } | undefined }
type Header = { fields?: { [x: string]: Payload } | undefined }
type WorkflowEventEventReference = {
  eventId?: string | undefined
  eventType?:
    | 'EVENT_TYPE_UNSPECIFIED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_STARTED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_COMPLETED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_FAILED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_TIMED_OUT'
    | 'EVENT_TYPE_WORKFLOW_TASK_SCHEDULED'
    | 'EVENT_TYPE_WORKFLOW_TASK_STARTED'
    | 'EVENT_TYPE_WORKFLOW_TASK_COMPLETED'
    | 'EVENT_TYPE_WORKFLOW_TASK_TIMED_OUT'
    | 'EVENT_TYPE_WORKFLOW_TASK_FAILED'
    | 'EVENT_TYPE_ACTIVITY_TASK_SCHEDULED'
    | 'EVENT_TYPE_ACTIVITY_TASK_STARTED'
    | 'EVENT_TYPE_ACTIVITY_TASK_COMPLETED'
    | 'EVENT_TYPE_ACTIVITY_TASK_FAILED'
    | 'EVENT_TYPE_ACTIVITY_TASK_TIMED_OUT'
    | 'EVENT_TYPE_ACTIVITY_TASK_CANCEL_REQUESTED'
    | 'EVENT_TYPE_ACTIVITY_TASK_CANCELED'
    | 'EVENT_TYPE_TIMER_STARTED'
    | 'EVENT_TYPE_TIMER_FIRED'
    | 'EVENT_TYPE_TIMER_CANCELED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_CANCEL_REQUESTED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_CANCELED'
    | 'EVENT_TYPE_REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_INITIATED'
    | 'EVENT_TYPE_REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_FAILED'
    | 'EVENT_TYPE_EXTERNAL_WORKFLOW_EXECUTION_CANCEL_REQUESTED'
    | 'EVENT_TYPE_MARKER_RECORDED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_SIGNALED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_TERMINATED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_CONTINUED_AS_NEW'
    | 'EVENT_TYPE_START_CHILD_WORKFLOW_EXECUTION_INITIATED'
    | 'EVENT_TYPE_START_CHILD_WORKFLOW_EXECUTION_FAILED'
    | 'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_STARTED'
    | 'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_COMPLETED'
    | 'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_FAILED'
    | 'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_CANCELED'
    | 'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_TIMED_OUT'
    | 'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_TERMINATED'
    | 'EVENT_TYPE_SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_INITIATED'
    | 'EVENT_TYPE_SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED'
    | 'EVENT_TYPE_EXTERNAL_WORKFLOW_EXECUTION_SIGNALED'
    | 'EVENT_TYPE_UPSERT_WORKFLOW_SEARCH_ATTRIBUTES'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_ADMITTED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_ACCEPTED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_REJECTED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_COMPLETED'
    | 'EVENT_TYPE_WORKFLOW_PROPERTIES_MODIFIED_EXTERNALLY'
    | 'EVENT_TYPE_ACTIVITY_PROPERTIES_MODIFIED_EXTERNALLY'
    | 'EVENT_TYPE_WORKFLOW_PROPERTIES_MODIFIED'
    | 'EVENT_TYPE_NEXUS_OPERATION_SCHEDULED'
    | 'EVENT_TYPE_NEXUS_OPERATION_STARTED'
    | 'EVENT_TYPE_NEXUS_OPERATION_COMPLETED'
    | 'EVENT_TYPE_NEXUS_OPERATION_FAILED'
    | 'EVENT_TYPE_NEXUS_OPERATION_CANCELED'
    | 'EVENT_TYPE_NEXUS_OPERATION_TIMED_OUT'
    | 'EVENT_TYPE_NEXUS_OPERATION_CANCEL_REQUESTED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_OPTIONS_UPDATED'
    | 'EVENT_TYPE_NEXUS_OPERATION_CANCEL_REQUEST_COMPLETED'
    | 'EVENT_TYPE_NEXUS_OPERATION_CANCEL_REQUEST_FAILED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_PAUSED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_UNPAUSED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_TIME_SKIPPING_TRANSITIONED'
    | undefined
}
type WorkflowEventRequestIdReference = {
  requestId?: string | undefined
  eventType?:
    | 'EVENT_TYPE_UNSPECIFIED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_STARTED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_COMPLETED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_FAILED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_TIMED_OUT'
    | 'EVENT_TYPE_WORKFLOW_TASK_SCHEDULED'
    | 'EVENT_TYPE_WORKFLOW_TASK_STARTED'
    | 'EVENT_TYPE_WORKFLOW_TASK_COMPLETED'
    | 'EVENT_TYPE_WORKFLOW_TASK_TIMED_OUT'
    | 'EVENT_TYPE_WORKFLOW_TASK_FAILED'
    | 'EVENT_TYPE_ACTIVITY_TASK_SCHEDULED'
    | 'EVENT_TYPE_ACTIVITY_TASK_STARTED'
    | 'EVENT_TYPE_ACTIVITY_TASK_COMPLETED'
    | 'EVENT_TYPE_ACTIVITY_TASK_FAILED'
    | 'EVENT_TYPE_ACTIVITY_TASK_TIMED_OUT'
    | 'EVENT_TYPE_ACTIVITY_TASK_CANCEL_REQUESTED'
    | 'EVENT_TYPE_ACTIVITY_TASK_CANCELED'
    | 'EVENT_TYPE_TIMER_STARTED'
    | 'EVENT_TYPE_TIMER_FIRED'
    | 'EVENT_TYPE_TIMER_CANCELED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_CANCEL_REQUESTED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_CANCELED'
    | 'EVENT_TYPE_REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_INITIATED'
    | 'EVENT_TYPE_REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_FAILED'
    | 'EVENT_TYPE_EXTERNAL_WORKFLOW_EXECUTION_CANCEL_REQUESTED'
    | 'EVENT_TYPE_MARKER_RECORDED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_SIGNALED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_TERMINATED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_CONTINUED_AS_NEW'
    | 'EVENT_TYPE_START_CHILD_WORKFLOW_EXECUTION_INITIATED'
    | 'EVENT_TYPE_START_CHILD_WORKFLOW_EXECUTION_FAILED'
    | 'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_STARTED'
    | 'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_COMPLETED'
    | 'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_FAILED'
    | 'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_CANCELED'
    | 'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_TIMED_OUT'
    | 'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_TERMINATED'
    | 'EVENT_TYPE_SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_INITIATED'
    | 'EVENT_TYPE_SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED'
    | 'EVENT_TYPE_EXTERNAL_WORKFLOW_EXECUTION_SIGNALED'
    | 'EVENT_TYPE_UPSERT_WORKFLOW_SEARCH_ATTRIBUTES'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_ADMITTED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_ACCEPTED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_REJECTED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_COMPLETED'
    | 'EVENT_TYPE_WORKFLOW_PROPERTIES_MODIFIED_EXTERNALLY'
    | 'EVENT_TYPE_ACTIVITY_PROPERTIES_MODIFIED_EXTERNALLY'
    | 'EVENT_TYPE_WORKFLOW_PROPERTIES_MODIFIED'
    | 'EVENT_TYPE_NEXUS_OPERATION_SCHEDULED'
    | 'EVENT_TYPE_NEXUS_OPERATION_STARTED'
    | 'EVENT_TYPE_NEXUS_OPERATION_COMPLETED'
    | 'EVENT_TYPE_NEXUS_OPERATION_FAILED'
    | 'EVENT_TYPE_NEXUS_OPERATION_CANCELED'
    | 'EVENT_TYPE_NEXUS_OPERATION_TIMED_OUT'
    | 'EVENT_TYPE_NEXUS_OPERATION_CANCEL_REQUESTED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_OPTIONS_UPDATED'
    | 'EVENT_TYPE_NEXUS_OPERATION_CANCEL_REQUEST_COMPLETED'
    | 'EVENT_TYPE_NEXUS_OPERATION_CANCEL_REQUEST_FAILED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_PAUSED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_UNPAUSED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_TIME_SKIPPING_TRANSITIONED'
    | undefined
}
type LinkWorkflowEvent = {
  namespace?: string | undefined
  workflowId?: string | undefined
  runId?: string | undefined
  eventRef?: WorkflowEventEventReference | undefined
  requestIdRef?: WorkflowEventRequestIdReference | undefined
}
type LinkBatchJob = { jobId?: string | undefined }
type LinkActivity = {
  namespace?: string | undefined
  activityId?: string | undefined
  runId?: string | undefined
}
type LinkNexusOperation = {
  namespace?: string | undefined
  operationId?: string | undefined
  runId?: string | undefined
}
type Link = {
  workflowEvent?: LinkWorkflowEvent | undefined
  batchJob?: LinkBatchJob | undefined
  activity?: LinkActivity | undefined
  nexusOperation?: LinkNexusOperation | undefined
}
type CallbackNexus = { url?: string | undefined; header?: { [x: string]: string } | undefined }
type CallbackInternal = { data?: string | undefined }
type CallbackInfo = {
  callback?:
    | {
        nexus?: CallbackNexus | undefined
        internal?: CallbackInternal | undefined
        links?: Link[] | undefined
      }
    | undefined
  registrationTime?: string | undefined
  state?:
    | 'CALLBACK_STATE_UNSPECIFIED'
    | 'CALLBACK_STATE_STANDBY'
    | 'CALLBACK_STATE_SCHEDULED'
    | 'CALLBACK_STATE_BACKING_OFF'
    | 'CALLBACK_STATE_FAILED'
    | 'CALLBACK_STATE_SUCCEEDED'
    | 'CALLBACK_STATE_BLOCKED'
    | undefined
  attempt?: number | undefined
  lastAttemptCompleteTime?: string | undefined
  lastAttemptFailure?:
    | {
        message?: string | undefined
        source?: string | undefined
        stackTrace?: string | undefined
        encodedAttributes?: {} | undefined
        cause?: Failure | undefined
        applicationFailureInfo?: ApplicationFailureInfo | undefined
        timeoutFailureInfo?: TimeoutFailureInfo | undefined
        canceledFailureInfo?: CanceledFailureInfo | undefined
        terminatedFailureInfo?: TerminatedFailureInfo | undefined
        serverFailureInfo?: ServerFailureInfo | undefined
        resetWorkflowFailureInfo?: ResetWorkflowFailureInfo | undefined
        activityFailureInfo?: ActivityFailureInfo | undefined
        childWorkflowExecutionFailureInfo?: ChildWorkflowExecutionFailureInfo | undefined
        nexusOperationExecutionFailureInfo?: NexusOperationFailureInfo | undefined
        nexusHandlerFailureInfo?: NexusHandlerFailureInfo | undefined
      }
    | undefined
  nextAttemptScheduleTime?: string | undefined
  blockedReason?: string | undefined
}
type DescribeActivityExecutionResponse = {
  runId?: string | undefined
  info?:
    | {
        activityId?: string | undefined
        runId?: string | undefined
        activityType?: { name?: string | undefined } | undefined
        status?:
          | 'ACTIVITY_EXECUTION_STATUS_UNSPECIFIED'
          | 'ACTIVITY_EXECUTION_STATUS_RUNNING'
          | 'ACTIVITY_EXECUTION_STATUS_COMPLETED'
          | 'ACTIVITY_EXECUTION_STATUS_FAILED'
          | 'ACTIVITY_EXECUTION_STATUS_CANCELED'
          | 'ACTIVITY_EXECUTION_STATUS_TERMINATED'
          | 'ACTIVITY_EXECUTION_STATUS_TIMED_OUT'
          | undefined
        runState?:
          | 'PENDING_ACTIVITY_STATE_UNSPECIFIED'
          | 'PENDING_ACTIVITY_STATE_SCHEDULED'
          | 'PENDING_ACTIVITY_STATE_STARTED'
          | 'PENDING_ACTIVITY_STATE_CANCEL_REQUESTED'
          | 'PENDING_ACTIVITY_STATE_PAUSED'
          | 'PENDING_ACTIVITY_STATE_PAUSE_REQUESTED'
          | undefined
        taskQueue?: string | undefined
        scheduleToCloseTimeout?: string | undefined
        scheduleToStartTimeout?: string | undefined
        startToCloseTimeout?: string | undefined
        heartbeatTimeout?: string | undefined
        retryPolicy?:
          | {
              initialInterval?: string | undefined
              backoffCoefficient?: number | undefined
              maximumInterval?: string | undefined
              maximumAttempts?: number | undefined
              nonRetryableErrorTypes?: string[] | undefined
            }
          | undefined
        heartbeatDetails?: { payloads?: Payload[] | undefined } | undefined
        lastHeartbeatTime?: string | undefined
        lastStartedTime?: string | undefined
        attempt?: number | undefined
        executionDuration?: string | undefined
        scheduleTime?: string | undefined
        expirationTime?: string | undefined
        closeTime?: string | undefined
        lastFailure?:
          | {
              message?: string | undefined
              source?: string | undefined
              stackTrace?: string | undefined
              encodedAttributes?: {} | undefined
              cause?: Failure | undefined
              applicationFailureInfo?: ApplicationFailureInfo | undefined
              timeoutFailureInfo?: TimeoutFailureInfo | undefined
              canceledFailureInfo?: CanceledFailureInfo | undefined
              terminatedFailureInfo?: TerminatedFailureInfo | undefined
              serverFailureInfo?: ServerFailureInfo | undefined
              resetWorkflowFailureInfo?: ResetWorkflowFailureInfo | undefined
              activityFailureInfo?: ActivityFailureInfo | undefined
              childWorkflowExecutionFailureInfo?: ChildWorkflowExecutionFailureInfo | undefined
              nexusOperationExecutionFailureInfo?: NexusOperationFailureInfo | undefined
              nexusHandlerFailureInfo?: NexusHandlerFailureInfo | undefined
            }
          | undefined
        lastWorkerIdentity?: string | undefined
        currentRetryInterval?: string | undefined
        lastAttemptCompleteTime?: string | undefined
        nextAttemptScheduleTime?: string | undefined
        lastDeploymentVersion?:
          | { buildId?: string | undefined; deploymentName?: string | undefined }
          | undefined
        priority?:
          | {
              priorityKey?: number | undefined
              fairnessKey?: string | undefined
              fairnessWeight?: number | undefined
            }
          | undefined
        stateTransitionCount?: string | undefined
        stateSizeBytes?: string | undefined
        searchAttributes?: SearchAttributes | undefined
        header?: Header | undefined
        userMetadata?: { summary?: {} | undefined; details?: {} | undefined } | undefined
        canceledReason?: string | undefined
        links?: Link[] | undefined
        totalHeartbeatCount?: string | undefined
      }
    | undefined
  input?: { payloads?: Payload[] | undefined } | undefined
  outcome?:
    | {
        result?: { payloads?: Payload[] | undefined } | undefined
        failure?:
          | {
              message?: string | undefined
              source?: string | undefined
              stackTrace?: string | undefined
              encodedAttributes?: {} | undefined
              cause?: Failure | undefined
              applicationFailureInfo?: ApplicationFailureInfo | undefined
              timeoutFailureInfo?: TimeoutFailureInfo | undefined
              canceledFailureInfo?: CanceledFailureInfo | undefined
              terminatedFailureInfo?: TerminatedFailureInfo | undefined
              serverFailureInfo?: ServerFailureInfo | undefined
              resetWorkflowFailureInfo?: ResetWorkflowFailureInfo | undefined
              activityFailureInfo?: ActivityFailureInfo | undefined
              childWorkflowExecutionFailureInfo?: ChildWorkflowExecutionFailureInfo | undefined
              nexusOperationExecutionFailureInfo?: NexusOperationFailureInfo | undefined
              nexusHandlerFailureInfo?: NexusHandlerFailureInfo | undefined
            }
          | undefined
      }
    | undefined
  longPollToken?: string | undefined
  callbacks?: CallbackInfo[] | undefined
}
type Callback = {
  nexus?: CallbackNexus | undefined
  internal?: CallbackInternal | undefined
  links?: Link[] | undefined
}
type StartActivityExecutionRequest = {
  namespace?: string | undefined
  identity?: string | undefined
  requestId?: string | undefined
  activityId?: string | undefined
  activityType?: { name?: string | undefined } | undefined
  taskQueue?:
    | {
        name?: string | undefined
        kind?:
          | 'TASK_QUEUE_KIND_UNSPECIFIED'
          | 'TASK_QUEUE_KIND_NORMAL'
          | 'TASK_QUEUE_KIND_STICKY'
          | 'TASK_QUEUE_KIND_WORKER_COMMANDS'
          | undefined
        normalName?: string | undefined
      }
    | undefined
  scheduleToCloseTimeout?: string | undefined
  scheduleToStartTimeout?: string | undefined
  startToCloseTimeout?: string | undefined
  heartbeatTimeout?: string | undefined
  retryPolicy?:
    | {
        initialInterval?: string | undefined
        backoffCoefficient?: number | undefined
        maximumInterval?: string | undefined
        maximumAttempts?: number | undefined
        nonRetryableErrorTypes?: string[] | undefined
      }
    | undefined
  input?: { payloads?: Payload[] | undefined } | undefined
  idReusePolicy?:
    | 'ACTIVITY_ID_REUSE_POLICY_UNSPECIFIED'
    | 'ACTIVITY_ID_REUSE_POLICY_ALLOW_DUPLICATE'
    | 'ACTIVITY_ID_REUSE_POLICY_ALLOW_DUPLICATE_FAILED_ONLY'
    | 'ACTIVITY_ID_REUSE_POLICY_REJECT_DUPLICATE'
    | undefined
  idConflictPolicy?:
    | 'ACTIVITY_ID_CONFLICT_POLICY_UNSPECIFIED'
    | 'ACTIVITY_ID_CONFLICT_POLICY_FAIL'
    | 'ACTIVITY_ID_CONFLICT_POLICY_USE_EXISTING'
    | undefined
  searchAttributes?: { indexedFields?: { [x: string]: Payload } | undefined } | undefined
  header?: { fields?: { [x: string]: Payload } | undefined } | undefined
  userMetadata?: { summary?: {} | undefined; details?: {} | undefined } | undefined
  priority?:
    | {
        priorityKey?: number | undefined
        fairnessKey?: string | undefined
        fairnessWeight?: number | undefined
      }
    | undefined
  completionCallbacks?: Callback[] | undefined
  links?: Link[] | undefined
  onConflictOptions?:
    | {
        attachRequestId?: boolean | undefined
        attachCompletionCallbacks?: boolean | undefined
        attachLinks?: boolean | undefined
      }
    | undefined
  startDelay?: string | undefined
}
type StartActivityExecutionResponse = {
  runId?: string | undefined
  started?: boolean | undefined
  link?:
    | {
        workflowEvent?: LinkWorkflowEvent | undefined
        batchJob?: LinkBatchJob | undefined
        activity?: LinkActivity | undefined
        nexusOperation?: LinkNexusOperation | undefined
      }
    | undefined
}
type RequestCancelActivityExecutionRequest = {
  namespace?: string | undefined
  activityId?: string | undefined
  runId?: string | undefined
  identity?: string | undefined
  requestId?: string | undefined
  reason?: string | undefined
}
type RequestCancelActivityExecutionResponse = { [x: string]: unknown }
type RespondActivityTaskCompletedByIdRequest = {
  namespace?: string | undefined
  workflowId?: string | undefined
  runId?: string | undefined
  activityId?: string | undefined
  result?: { payloads?: Payload[] | undefined } | undefined
  identity?: string | undefined
  resourceId?: string | undefined
}
type RespondActivityTaskCompletedByIdResponse = { [x: string]: unknown }
type RespondActivityTaskFailedByIdRequest = {
  namespace?: string | undefined
  workflowId?: string | undefined
  runId?: string | undefined
  activityId?: string | undefined
  failure?:
    | {
        message?: string | undefined
        source?: string | undefined
        stackTrace?: string | undefined
        encodedAttributes?: {} | undefined
        cause?: Failure | undefined
        applicationFailureInfo?: ApplicationFailureInfo | undefined
        timeoutFailureInfo?: TimeoutFailureInfo | undefined
        canceledFailureInfo?: CanceledFailureInfo | undefined
        terminatedFailureInfo?: TerminatedFailureInfo | undefined
        serverFailureInfo?: ServerFailureInfo | undefined
        resetWorkflowFailureInfo?: ResetWorkflowFailureInfo | undefined
        activityFailureInfo?: ActivityFailureInfo | undefined
        childWorkflowExecutionFailureInfo?: ChildWorkflowExecutionFailureInfo | undefined
        nexusOperationExecutionFailureInfo?: NexusOperationFailureInfo | undefined
        nexusHandlerFailureInfo?: NexusHandlerFailureInfo | undefined
      }
    | undefined
  identity?: string | undefined
  lastHeartbeatDetails?: { payloads?: Payload[] | undefined } | undefined
  resourceId?: string | undefined
}
type RespondActivityTaskFailedByIdResponse = { failures?: Failure[] | undefined }
type RecordActivityTaskHeartbeatByIdRequest = {
  namespace?: string | undefined
  workflowId?: string | undefined
  runId?: string | undefined
  activityId?: string | undefined
  details?: { payloads?: Payload[] | undefined } | undefined
  identity?: string | undefined
  resourceId?: string | undefined
}
type RecordActivityTaskHeartbeatByIdResponse = {
  cancelRequested?: boolean | undefined
  activityPaused?: boolean | undefined
  activityReset?: boolean | undefined
}
type ActivityExecutionOutcome = {
  result?: { payloads?: Payload[] | undefined } | undefined
  failure?:
    | {
        message?: string | undefined
        source?: string | undefined
        stackTrace?: string | undefined
        encodedAttributes?: {} | undefined
        cause?: Failure | undefined
        applicationFailureInfo?: ApplicationFailureInfo | undefined
        timeoutFailureInfo?: TimeoutFailureInfo | undefined
        canceledFailureInfo?: CanceledFailureInfo | undefined
        terminatedFailureInfo?: TerminatedFailureInfo | undefined
        serverFailureInfo?: ServerFailureInfo | undefined
        resetWorkflowFailureInfo?: ResetWorkflowFailureInfo | undefined
        activityFailureInfo?: ActivityFailureInfo | undefined
        childWorkflowExecutionFailureInfo?: ChildWorkflowExecutionFailureInfo | undefined
        nexusOperationExecutionFailureInfo?: NexusOperationFailureInfo | undefined
        nexusHandlerFailureInfo?: NexusHandlerFailureInfo | undefined
      }
    | undefined
}
type PollActivityExecutionResponse = {
  runId?: string | undefined
  outcome?: ActivityExecutionOutcome | undefined
}
type PauseActivityExecutionRequest = {
  namespace?: string | undefined
  workflowId?: string | undefined
  activityId?: string | undefined
  runId?: string | undefined
  identity?: string | undefined
  reason?: string | undefined
  resourceId?: string | undefined
  requestId?: string | undefined
}
type PauseActivityExecutionResponse = { [x: string]: unknown }
type ResetActivityExecutionRequest = {
  namespace?: string | undefined
  workflowId?: string | undefined
  activityId?: string | undefined
  runId?: string | undefined
  identity?: string | undefined
  resetHeartbeat?: boolean | undefined
  keepPaused?: boolean | undefined
  jitter?: string | undefined
  restoreOriginalOptions?: boolean | undefined
  resourceId?: string | undefined
}
type ResetActivityExecutionResponse = { [x: string]: unknown }
type RespondActivityTaskCanceledByIdRequest = {
  namespace?: string | undefined
  workflowId?: string | undefined
  runId?: string | undefined
  activityId?: string | undefined
  details?: { payloads?: Payload[] | undefined } | undefined
  identity?: string | undefined
  deploymentOptions?:
    | {
        deploymentName?: string | undefined
        buildId?: string | undefined
        workerVersioningMode?:
          | 'WORKER_VERSIONING_MODE_UNSPECIFIED'
          | 'WORKER_VERSIONING_MODE_UNVERSIONED'
          | 'WORKER_VERSIONING_MODE_VERSIONED'
          | undefined
      }
    | undefined
  resourceId?: string | undefined
}
type RespondActivityTaskCanceledByIdResponse = { [x: string]: unknown }
type TerminateActivityExecutionRequest = {
  namespace?: string | undefined
  activityId?: string | undefined
  runId?: string | undefined
  identity?: string | undefined
  requestId?: string | undefined
  reason?: string | undefined
}
type TerminateActivityExecutionResponse = { [x: string]: unknown }
type UnpauseActivityExecutionRequest = {
  namespace?: string | undefined
  workflowId?: string | undefined
  activityId?: string | undefined
  runId?: string | undefined
  identity?: string | undefined
  resetAttempts?: boolean | undefined
  resetHeartbeat?: boolean | undefined
  reason?: string | undefined
  jitter?: string | undefined
  resourceId?: string | undefined
}
type UnpauseActivityExecutionResponse = { [x: string]: unknown }
type UpdateActivityExecutionOptionsRequest = {
  namespace?: string | undefined
  workflowId?: string | undefined
  activityId?: string | undefined
  runId?: string | undefined
  identity?: string | undefined
  activityOptions?:
    | {
        taskQueue?: TaskQueue | undefined
        scheduleToCloseTimeout?: string | undefined
        scheduleToStartTimeout?: string | undefined
        startToCloseTimeout?: string | undefined
        heartbeatTimeout?: string | undefined
        retryPolicy?:
          | {
              initialInterval?: string | undefined
              backoffCoefficient?: number | undefined
              maximumInterval?: string | undefined
              maximumAttempts?: number | undefined
              nonRetryableErrorTypes?: string[] | undefined
            }
          | undefined
        priority?:
          | {
              priorityKey?: number | undefined
              fairnessKey?: string | undefined
              fairnessWeight?: number | undefined
            }
          | undefined
      }
    | undefined
  updateMask?: string | undefined
  restoreOriginal?: boolean | undefined
  resourceId?: string | undefined
}
type UpdateActivityExecutionOptionsResponse = {
  activityOptions?:
    | {
        taskQueue?: TaskQueue | undefined
        scheduleToCloseTimeout?: string | undefined
        scheduleToStartTimeout?: string | undefined
        startToCloseTimeout?: string | undefined
        heartbeatTimeout?: string | undefined
        retryPolicy?:
          | {
              initialInterval?: string | undefined
              backoffCoefficient?: number | undefined
              maximumInterval?: string | undefined
              maximumAttempts?: number | undefined
              nonRetryableErrorTypes?: string[] | undefined
            }
          | undefined
        priority?:
          | {
              priorityKey?: number | undefined
              fairnessKey?: string | undefined
              fairnessWeight?: number | undefined
            }
          | undefined
      }
    | undefined
}
type RespondActivityTaskCompletedRequest = {
  taskToken?: string | undefined
  result?: { payloads?: Payload[] | undefined } | undefined
  identity?: string | undefined
  namespace?: string | undefined
  resourceId?: string | undefined
  workerVersion?: { buildId?: string | undefined; useVersioning?: boolean | undefined } | undefined
  deployment?: { seriesName?: string | undefined; buildId?: string | undefined } | undefined
  deploymentOptions?:
    | {
        deploymentName?: string | undefined
        buildId?: string | undefined
        workerVersioningMode?:
          | 'WORKER_VERSIONING_MODE_UNSPECIFIED'
          | 'WORKER_VERSIONING_MODE_UNVERSIONED'
          | 'WORKER_VERSIONING_MODE_VERSIONED'
          | undefined
      }
    | undefined
}
type RespondActivityTaskCompletedResponse = { [x: string]: unknown }
type CountActivityExecutionsResponseAggregationGroup = {
  groupValues?: Payload[] | undefined
  count?: string | undefined
}
type CountActivityExecutionsResponse = {
  count?: string | undefined
  groups?: CountActivityExecutionsResponseAggregationGroup[] | undefined
}
type RespondActivityTaskFailedRequest = {
  taskToken?: string | undefined
  failure?:
    | {
        message?: string | undefined
        source?: string | undefined
        stackTrace?: string | undefined
        encodedAttributes?: {} | undefined
        cause?: Failure | undefined
        applicationFailureInfo?: ApplicationFailureInfo | undefined
        timeoutFailureInfo?: TimeoutFailureInfo | undefined
        canceledFailureInfo?: CanceledFailureInfo | undefined
        terminatedFailureInfo?: TerminatedFailureInfo | undefined
        serverFailureInfo?: ServerFailureInfo | undefined
        resetWorkflowFailureInfo?: ResetWorkflowFailureInfo | undefined
        activityFailureInfo?: ActivityFailureInfo | undefined
        childWorkflowExecutionFailureInfo?: ChildWorkflowExecutionFailureInfo | undefined
        nexusOperationExecutionFailureInfo?: NexusOperationFailureInfo | undefined
        nexusHandlerFailureInfo?: NexusHandlerFailureInfo | undefined
      }
    | undefined
  identity?: string | undefined
  namespace?: string | undefined
  resourceId?: string | undefined
  lastHeartbeatDetails?: { payloads?: Payload[] | undefined } | undefined
  workerVersion?: { buildId?: string | undefined; useVersioning?: boolean | undefined } | undefined
  deployment?: { seriesName?: string | undefined; buildId?: string | undefined } | undefined
  deploymentOptions?:
    | {
        deploymentName?: string | undefined
        buildId?: string | undefined
        workerVersioningMode?:
          | 'WORKER_VERSIONING_MODE_UNSPECIFIED'
          | 'WORKER_VERSIONING_MODE_UNVERSIONED'
          | 'WORKER_VERSIONING_MODE_VERSIONED'
          | undefined
      }
    | undefined
}
type RespondActivityTaskFailedResponse = { failures?: Failure[] | undefined }
type RecordActivityTaskHeartbeatRequest = {
  taskToken?: string | undefined
  details?: { payloads?: Payload[] | undefined } | undefined
  identity?: string | undefined
  namespace?: string | undefined
  resourceId?: string | undefined
}
type RecordActivityTaskHeartbeatResponse = {
  cancelRequested?: boolean | undefined
  activityPaused?: boolean | undefined
  activityReset?: boolean | undefined
}
type RespondActivityTaskCanceledRequest = {
  taskToken?: string | undefined
  details?: { payloads?: Payload[] | undefined } | undefined
  identity?: string | undefined
  namespace?: string | undefined
  resourceId?: string | undefined
  workerVersion?: { buildId?: string | undefined; useVersioning?: boolean | undefined } | undefined
  deployment?: { seriesName?: string | undefined; buildId?: string | undefined } | undefined
  deploymentOptions?:
    | {
        deploymentName?: string | undefined
        buildId?: string | undefined
        workerVersioningMode?:
          | 'WORKER_VERSIONING_MODE_UNSPECIFIED'
          | 'WORKER_VERSIONING_MODE_UNVERSIONED'
          | 'WORKER_VERSIONING_MODE_VERSIONED'
          | undefined
      }
    | undefined
}
type RespondActivityTaskCanceledResponse = { [x: string]: unknown }
type Memo = { fields?: { [x: string]: Payload } | undefined }
type ResetPointInfo = {
  buildId?: string | undefined
  binaryChecksum?: string | undefined
  runId?: string | undefined
  firstWorkflowTaskCompletedId?: string | undefined
  createTime?: string | undefined
  expireTime?: string | undefined
  resettable?: boolean | undefined
}
type ResetPoints = { points?: ResetPointInfo[] | undefined }
type WorkflowExecutionInfo = {
  execution?: WorkflowExecution | undefined
  type?: WorkflowType | undefined
  startTime?: string | undefined
  closeTime?: string | undefined
  status?:
    | 'WORKFLOW_EXECUTION_STATUS_UNSPECIFIED'
    | 'WORKFLOW_EXECUTION_STATUS_RUNNING'
    | 'WORKFLOW_EXECUTION_STATUS_COMPLETED'
    | 'WORKFLOW_EXECUTION_STATUS_FAILED'
    | 'WORKFLOW_EXECUTION_STATUS_CANCELED'
    | 'WORKFLOW_EXECUTION_STATUS_TERMINATED'
    | 'WORKFLOW_EXECUTION_STATUS_CONTINUED_AS_NEW'
    | 'WORKFLOW_EXECUTION_STATUS_TIMED_OUT'
    | 'WORKFLOW_EXECUTION_STATUS_PAUSED'
    | undefined
  historyLength?: string | undefined
  parentNamespaceId?: string | undefined
  parentExecution?: WorkflowExecution | undefined
  executionTime?: string | undefined
  memo?: Memo | undefined
  searchAttributes?: SearchAttributes | undefined
  autoResetPoints?: ResetPoints | undefined
  taskQueue?: string | undefined
  stateTransitionCount?: string | undefined
  historySizeBytes?: string | undefined
  mostRecentWorkerVersionStamp?:
    | { buildId?: string | undefined; useVersioning?: boolean | undefined }
    | undefined
  executionDuration?: string | undefined
  rootExecution?: { workflowId?: string | undefined; runId?: string | undefined } | undefined
  assignedBuildId?: string | undefined
  inheritedBuildId?: string | undefined
  firstRunId?: string | undefined
  versioningInfo?:
    | {
        behavior?:
          | 'VERSIONING_BEHAVIOR_UNSPECIFIED'
          | 'VERSIONING_BEHAVIOR_PINNED'
          | 'VERSIONING_BEHAVIOR_AUTO_UPGRADE'
          | undefined
        deployment?: { seriesName?: string | undefined; buildId?: string | undefined } | undefined
        version?: string | undefined
        deploymentVersion?:
          | { buildId?: string | undefined; deploymentName?: string | undefined }
          | undefined
        versioningOverride?:
          | {
              pinned?:
                | {
                    behavior?:
                      | 'PINNED_OVERRIDE_BEHAVIOR_UNSPECIFIED'
                      | 'PINNED_OVERRIDE_BEHAVIOR_PINNED'
                      | undefined
                    version?:
                      | { buildId?: string | undefined; deploymentName?: string | undefined }
                      | undefined
                  }
                | undefined
              autoUpgrade?: boolean | undefined
              behavior?:
                | 'VERSIONING_BEHAVIOR_UNSPECIFIED'
                | 'VERSIONING_BEHAVIOR_PINNED'
                | 'VERSIONING_BEHAVIOR_AUTO_UPGRADE'
                | undefined
              deployment?:
                | { seriesName?: string | undefined; buildId?: string | undefined }
                | undefined
              pinnedVersion?: string | undefined
            }
          | undefined
        deploymentTransition?:
          | {
              deployment?:
                | { seriesName?: string | undefined; buildId?: string | undefined }
                | undefined
            }
          | undefined
        versionTransition?:
          | {
              version?: string | undefined
              deploymentVersion?:
                | { buildId?: string | undefined; deploymentName?: string | undefined }
                | undefined
            }
          | undefined
        revisionNumber?: string | undefined
        continueAsNewInitialVersioningBehavior?:
          | 'CONTINUE_AS_NEW_VERSIONING_BEHAVIOR_UNSPECIFIED'
          | 'CONTINUE_AS_NEW_VERSIONING_BEHAVIOR_AUTO_UPGRADE'
          | 'CONTINUE_AS_NEW_VERSIONING_BEHAVIOR_USE_RAMPING_VERSION'
          | undefined
      }
    | undefined
  workerDeploymentName?: string | undefined
  priority?:
    | {
        priorityKey?: number | undefined
        fairnessKey?: string | undefined
        fairnessWeight?: number | undefined
      }
    | undefined
  externalPayloadSizeBytes?: string | undefined
  externalPayloadCount?: string | undefined
}
type ListArchivedWorkflowExecutionsResponse = {
  executions?: WorkflowExecutionInfo[] | undefined
  nextPageToken?: string | undefined
}
type BatchOperationInfo = {
  jobId?: string | undefined
  state?:
    | 'BATCH_OPERATION_STATE_UNSPECIFIED'
    | 'BATCH_OPERATION_STATE_RUNNING'
    | 'BATCH_OPERATION_STATE_COMPLETED'
    | 'BATCH_OPERATION_STATE_FAILED'
    | undefined
  startTime?: string | undefined
  closeTime?: string | undefined
}
type ListBatchOperationsResponse = {
  operationInfo?: BatchOperationInfo[] | undefined
  nextPageToken?: string | undefined
}
type DescribeBatchOperationResponse = {
  operationType?:
    | 'BATCH_OPERATION_TYPE_UNSPECIFIED'
    | 'BATCH_OPERATION_TYPE_TERMINATE'
    | 'BATCH_OPERATION_TYPE_CANCEL'
    | 'BATCH_OPERATION_TYPE_SIGNAL'
    | 'BATCH_OPERATION_TYPE_DELETE'
    | 'BATCH_OPERATION_TYPE_RESET'
    | 'BATCH_OPERATION_TYPE_UPDATE_EXECUTION_OPTIONS'
    | 'BATCH_OPERATION_TYPE_UNPAUSE_ACTIVITY'
    | 'BATCH_OPERATION_TYPE_UPDATE_ACTIVITY_OPTIONS'
    | 'BATCH_OPERATION_TYPE_RESET_ACTIVITY'
    | undefined
  jobId?: string | undefined
  state?:
    | 'BATCH_OPERATION_STATE_UNSPECIFIED'
    | 'BATCH_OPERATION_STATE_RUNNING'
    | 'BATCH_OPERATION_STATE_COMPLETED'
    | 'BATCH_OPERATION_STATE_FAILED'
    | undefined
  startTime?: string | undefined
  closeTime?: string | undefined
  totalOperationCount?: string | undefined
  completeOperationCount?: string | undefined
  failureOperationCount?: string | undefined
  identity?: string | undefined
  reason?: string | undefined
}
type BatchOperationTermination = {
  details?: { payloads?: Payload[] | undefined } | undefined
  identity?: string | undefined
}
type BatchOperationSignal = {
  signal?: string | undefined
  input?: { payloads?: Payload[] | undefined } | undefined
  header?: { fields?: { [x: string]: Payload } | undefined } | undefined
  identity?: string | undefined
}
type BatchOperationCancellation = { identity?: string | undefined }
type BatchOperationDeletion = { identity?: string | undefined }
type PostResetOperationSignalWorkflow = {
  signalName?: string | undefined
  input?: { payloads?: Payload[] | undefined } | undefined
  header?: { fields?: { [x: string]: Payload } | undefined } | undefined
  links?: Link[] | undefined
}
type PostResetOperationUpdateWorkflowOptions = {
  workflowExecutionOptions?:
    | {
        versioningOverride?:
          | {
              pinned?:
                | {
                    behavior?:
                      | 'PINNED_OVERRIDE_BEHAVIOR_UNSPECIFIED'
                      | 'PINNED_OVERRIDE_BEHAVIOR_PINNED'
                      | undefined
                    version?:
                      | { buildId?: string | undefined; deploymentName?: string | undefined }
                      | undefined
                  }
                | undefined
              autoUpgrade?: boolean | undefined
              behavior?:
                | 'VERSIONING_BEHAVIOR_UNSPECIFIED'
                | 'VERSIONING_BEHAVIOR_PINNED'
                | 'VERSIONING_BEHAVIOR_AUTO_UPGRADE'
                | undefined
              deployment?:
                | { seriesName?: string | undefined; buildId?: string | undefined }
                | undefined
              pinnedVersion?: string | undefined
            }
          | undefined
        priority?:
          | {
              priorityKey?: number | undefined
              fairnessKey?: string | undefined
              fairnessWeight?: number | undefined
            }
          | undefined
        timeSkippingConfig?:
          | {
              enabled?: boolean | undefined
              maxSkippedDuration?: string | undefined
              maxElapsedDuration?: string | undefined
            }
          | undefined
      }
    | undefined
  updateMask?: string | undefined
}
type PostResetOperation = {
  signalWorkflow?: PostResetOperationSignalWorkflow | undefined
  updateWorkflowOptions?: PostResetOperationUpdateWorkflowOptions | undefined
}
type BatchOperationReset = {
  identity?: string | undefined
  options?:
    | {
        workflowTaskId?: string | undefined
        buildId?: string | undefined
        resetReapplyType?:
          | 'RESET_REAPPLY_TYPE_UNSPECIFIED'
          | 'RESET_REAPPLY_TYPE_SIGNAL'
          | 'RESET_REAPPLY_TYPE_NONE'
          | 'RESET_REAPPLY_TYPE_ALL_ELIGIBLE'
          | undefined
        currentRunOnly?: boolean | undefined
        resetReapplyExcludeTypes?:
          | (
              | 'RESET_REAPPLY_EXCLUDE_TYPE_UNSPECIFIED'
              | 'RESET_REAPPLY_EXCLUDE_TYPE_SIGNAL'
              | 'RESET_REAPPLY_EXCLUDE_TYPE_UPDATE'
              | 'RESET_REAPPLY_EXCLUDE_TYPE_NEXUS'
              | 'RESET_REAPPLY_EXCLUDE_TYPE_CANCEL_REQUEST'
            )[]
          | undefined
      }
    | undefined
  resetType?:
    | 'RESET_TYPE_UNSPECIFIED'
    | 'RESET_TYPE_FIRST_WORKFLOW_TASK'
    | 'RESET_TYPE_LAST_WORKFLOW_TASK'
    | undefined
  resetReapplyType?:
    | 'RESET_REAPPLY_TYPE_UNSPECIFIED'
    | 'RESET_REAPPLY_TYPE_SIGNAL'
    | 'RESET_REAPPLY_TYPE_NONE'
    | 'RESET_REAPPLY_TYPE_ALL_ELIGIBLE'
    | undefined
  postResetOperations?: PostResetOperation[] | undefined
}
type BatchOperationUpdateWorkflowExecutionOptions = {
  identity?: string | undefined
  workflowExecutionOptions?:
    | {
        versioningOverride?:
          | {
              pinned?:
                | {
                    behavior?:
                      | 'PINNED_OVERRIDE_BEHAVIOR_UNSPECIFIED'
                      | 'PINNED_OVERRIDE_BEHAVIOR_PINNED'
                      | undefined
                    version?:
                      | { buildId?: string | undefined; deploymentName?: string | undefined }
                      | undefined
                  }
                | undefined
              autoUpgrade?: boolean | undefined
              behavior?:
                | 'VERSIONING_BEHAVIOR_UNSPECIFIED'
                | 'VERSIONING_BEHAVIOR_PINNED'
                | 'VERSIONING_BEHAVIOR_AUTO_UPGRADE'
                | undefined
              deployment?:
                | { seriesName?: string | undefined; buildId?: string | undefined }
                | undefined
              pinnedVersion?: string | undefined
            }
          | undefined
        priority?:
          | {
              priorityKey?: number | undefined
              fairnessKey?: string | undefined
              fairnessWeight?: number | undefined
            }
          | undefined
        timeSkippingConfig?:
          | {
              enabled?: boolean | undefined
              maxSkippedDuration?: string | undefined
              maxElapsedDuration?: string | undefined
            }
          | undefined
      }
    | undefined
  updateMask?: string | undefined
}
type BatchOperationUnpauseActivities = {
  identity?: string | undefined
  type?: string | undefined
  matchAll?: boolean | undefined
  resetAttempts?: boolean | undefined
  resetHeartbeat?: boolean | undefined
  jitter?: string | undefined
}
type BatchOperationResetActivities = {
  identity?: string | undefined
  type?: string | undefined
  matchAll?: boolean | undefined
  resetAttempts?: boolean | undefined
  resetHeartbeat?: boolean | undefined
  keepPaused?: boolean | undefined
  jitter?: string | undefined
  restoreOriginalOptions?: boolean | undefined
}
type BatchOperationUpdateActivityOptions = {
  identity?: string | undefined
  type?: string | undefined
  matchAll?: boolean | undefined
  activityOptions?:
    | {
        taskQueue?: TaskQueue | undefined
        scheduleToCloseTimeout?: string | undefined
        scheduleToStartTimeout?: string | undefined
        startToCloseTimeout?: string | undefined
        heartbeatTimeout?: string | undefined
        retryPolicy?:
          | {
              initialInterval?: string | undefined
              backoffCoefficient?: number | undefined
              maximumInterval?: string | undefined
              maximumAttempts?: number | undefined
              nonRetryableErrorTypes?: string[] | undefined
            }
          | undefined
        priority?:
          | {
              priorityKey?: number | undefined
              fairnessKey?: string | undefined
              fairnessWeight?: number | undefined
            }
          | undefined
      }
    | undefined
  updateMask?: string | undefined
  restoreOriginal?: boolean | undefined
}
type StartBatchOperationRequest = {
  namespace?: string | undefined
  visibilityQuery?: string | undefined
  jobId?: string | undefined
  reason?: string | undefined
  executions?: WorkflowExecution[] | undefined
  maxOperationsPerSecond?: number | undefined
  terminationOperation?: BatchOperationTermination | undefined
  signalOperation?: BatchOperationSignal | undefined
  cancellationOperation?: BatchOperationCancellation | undefined
  deletionOperation?: BatchOperationDeletion | undefined
  resetOperation?: BatchOperationReset | undefined
  updateWorkflowOptionsOperation?: BatchOperationUpdateWorkflowExecutionOptions | undefined
  unpauseActivitiesOperation?: BatchOperationUnpauseActivities | undefined
  resetActivitiesOperation?: BatchOperationResetActivities | undefined
  updateActivityOptionsOperation?: BatchOperationUpdateActivityOptions | undefined
}
type StartBatchOperationResponse = { [x: string]: unknown }
type StopBatchOperationRequest = {
  namespace?: string | undefined
  jobId?: string | undefined
  reason?: string | undefined
  identity?: string | undefined
}
type StopBatchOperationResponse = { [x: string]: unknown }
type Deployment = { seriesName?: string | undefined; buildId?: string | undefined }
type SetCurrentDeploymentRequest = {
  namespace?: string | undefined
  deployment?: Deployment | undefined
  identity?: string | undefined
  updateMetadata?:
    | { upsertEntries?: { [x: string]: Payload } | undefined; removeEntries?: string[] | undefined }
    | undefined
}
type DeploymentInfoTaskQueueInfo = {
  name?: string | undefined
  type?:
    | 'TASK_QUEUE_TYPE_UNSPECIFIED'
    | 'TASK_QUEUE_TYPE_WORKFLOW'
    | 'TASK_QUEUE_TYPE_ACTIVITY'
    | 'TASK_QUEUE_TYPE_NEXUS'
    | undefined
  firstPollerTime?: string | undefined
}
type DeploymentInfo = {
  deployment?: Deployment | undefined
  createTime?: string | undefined
  taskQueueInfos?: DeploymentInfoTaskQueueInfo[] | undefined
  metadata?: { [x: string]: Payload } | undefined
  isCurrent?: boolean | undefined
}
type SetCurrentDeploymentResponse = {
  currentDeploymentInfo?: DeploymentInfo | undefined
  previousDeploymentInfo?:
    | {
        deployment?: Deployment | undefined
        createTime?: string | undefined
        taskQueueInfos?: DeploymentInfoTaskQueueInfo[] | undefined
        metadata?: { [x: string]: Payload } | undefined
        isCurrent?: boolean | undefined
      }
    | undefined
}
type GetCurrentDeploymentResponse = { currentDeploymentInfo?: DeploymentInfo | undefined }
type DeploymentListInfo = {
  deployment?: Deployment | undefined
  createTime?: string | undefined
  isCurrent?: boolean | undefined
}
type ListDeploymentsResponse = {
  nextPageToken?: string | undefined
  deployments?: DeploymentListInfo[] | undefined
}
type DescribeDeploymentResponse = { deploymentInfo?: DeploymentInfo | undefined }
type GetDeploymentReachabilityResponse = {
  deploymentInfo?: DeploymentInfo | undefined
  reachability?:
    | 'DEPLOYMENT_REACHABILITY_UNSPECIFIED'
    | 'DEPLOYMENT_REACHABILITY_REACHABLE'
    | 'DEPLOYMENT_REACHABILITY_CLOSED_WORKFLOWS_ONLY'
    | 'DEPLOYMENT_REACHABILITY_UNREACHABLE'
    | undefined
  lastUpdateTime?: string | undefined
}
type CountNexusOperationExecutionsResponseAggregationGroup = {
  groupValues?: Payload[] | undefined
  count?: string | undefined
}
type CountNexusOperationExecutionsResponse = {
  count?: string | undefined
  groups?: CountNexusOperationExecutionsResponseAggregationGroup[] | undefined
}
type NexusOperationExecutionListInfo = {
  operationId?: string | undefined
  runId?: string | undefined
  endpoint?: string | undefined
  service?: string | undefined
  operation?: string | undefined
  scheduleTime?: string | undefined
  closeTime?: string | undefined
  status?:
    | 'NEXUS_OPERATION_EXECUTION_STATUS_UNSPECIFIED'
    | 'NEXUS_OPERATION_EXECUTION_STATUS_RUNNING'
    | 'NEXUS_OPERATION_EXECUTION_STATUS_COMPLETED'
    | 'NEXUS_OPERATION_EXECUTION_STATUS_FAILED'
    | 'NEXUS_OPERATION_EXECUTION_STATUS_CANCELED'
    | 'NEXUS_OPERATION_EXECUTION_STATUS_TERMINATED'
    | 'NEXUS_OPERATION_EXECUTION_STATUS_TIMED_OUT'
    | undefined
  searchAttributes?: { indexedFields?: { [x: string]: Payload } | undefined } | undefined
  stateTransitionCount?: string | undefined
  executionDuration?: string | undefined
}
type ListNexusOperationExecutionsResponse = {
  operations?: NexusOperationExecutionListInfo[] | undefined
  nextPageToken?: string | undefined
}
type NexusOperationExecutionCancellationInfo = {
  requestedTime?: string | undefined
  state?:
    | 'NEXUS_OPERATION_CANCELLATION_STATE_UNSPECIFIED'
    | 'NEXUS_OPERATION_CANCELLATION_STATE_SCHEDULED'
    | 'NEXUS_OPERATION_CANCELLATION_STATE_BACKING_OFF'
    | 'NEXUS_OPERATION_CANCELLATION_STATE_SUCCEEDED'
    | 'NEXUS_OPERATION_CANCELLATION_STATE_FAILED'
    | 'NEXUS_OPERATION_CANCELLATION_STATE_TIMED_OUT'
    | 'NEXUS_OPERATION_CANCELLATION_STATE_BLOCKED'
    | undefined
  attempt?: number | undefined
  lastAttemptCompleteTime?: string | undefined
  lastAttemptFailure?:
    | {
        message?: string | undefined
        source?: string | undefined
        stackTrace?: string | undefined
        encodedAttributes?: {} | undefined
        cause?: Failure | undefined
        applicationFailureInfo?: ApplicationFailureInfo | undefined
        timeoutFailureInfo?: TimeoutFailureInfo | undefined
        canceledFailureInfo?: CanceledFailureInfo | undefined
        terminatedFailureInfo?: TerminatedFailureInfo | undefined
        serverFailureInfo?: ServerFailureInfo | undefined
        resetWorkflowFailureInfo?: ResetWorkflowFailureInfo | undefined
        activityFailureInfo?: ActivityFailureInfo | undefined
        childWorkflowExecutionFailureInfo?: ChildWorkflowExecutionFailureInfo | undefined
        nexusOperationExecutionFailureInfo?: NexusOperationFailureInfo | undefined
        nexusHandlerFailureInfo?: NexusHandlerFailureInfo | undefined
      }
    | undefined
  nextAttemptScheduleTime?: string | undefined
  blockedReason?: string | undefined
  reason?: string | undefined
}
type DescribeNexusOperationExecutionResponse = {
  runId?: string | undefined
  info?:
    | {
        operationId?: string | undefined
        runId?: string | undefined
        endpoint?: string | undefined
        service?: string | undefined
        operation?: string | undefined
        status?:
          | 'NEXUS_OPERATION_EXECUTION_STATUS_UNSPECIFIED'
          | 'NEXUS_OPERATION_EXECUTION_STATUS_RUNNING'
          | 'NEXUS_OPERATION_EXECUTION_STATUS_COMPLETED'
          | 'NEXUS_OPERATION_EXECUTION_STATUS_FAILED'
          | 'NEXUS_OPERATION_EXECUTION_STATUS_CANCELED'
          | 'NEXUS_OPERATION_EXECUTION_STATUS_TERMINATED'
          | 'NEXUS_OPERATION_EXECUTION_STATUS_TIMED_OUT'
          | undefined
        state?:
          | 'PENDING_NEXUS_OPERATION_STATE_UNSPECIFIED'
          | 'PENDING_NEXUS_OPERATION_STATE_SCHEDULED'
          | 'PENDING_NEXUS_OPERATION_STATE_BACKING_OFF'
          | 'PENDING_NEXUS_OPERATION_STATE_STARTED'
          | 'PENDING_NEXUS_OPERATION_STATE_BLOCKED'
          | undefined
        scheduleToCloseTimeout?: string | undefined
        scheduleToStartTimeout?: string | undefined
        startToCloseTimeout?: string | undefined
        attempt?: number | undefined
        scheduleTime?: string | undefined
        expirationTime?: string | undefined
        closeTime?: string | undefined
        lastAttemptCompleteTime?: string | undefined
        lastAttemptFailure?:
          | {
              message?: string | undefined
              source?: string | undefined
              stackTrace?: string | undefined
              encodedAttributes?: {} | undefined
              cause?: Failure | undefined
              applicationFailureInfo?: ApplicationFailureInfo | undefined
              timeoutFailureInfo?: TimeoutFailureInfo | undefined
              canceledFailureInfo?: CanceledFailureInfo | undefined
              terminatedFailureInfo?: TerminatedFailureInfo | undefined
              serverFailureInfo?: ServerFailureInfo | undefined
              resetWorkflowFailureInfo?: ResetWorkflowFailureInfo | undefined
              activityFailureInfo?: ActivityFailureInfo | undefined
              childWorkflowExecutionFailureInfo?: ChildWorkflowExecutionFailureInfo | undefined
              nexusOperationExecutionFailureInfo?: NexusOperationFailureInfo | undefined
              nexusHandlerFailureInfo?: NexusHandlerFailureInfo | undefined
            }
          | undefined
        nextAttemptScheduleTime?: string | undefined
        executionDuration?: string | undefined
        cancellationInfo?: NexusOperationExecutionCancellationInfo | undefined
        blockedReason?: string | undefined
        requestId?: string | undefined
        operationToken?: string | undefined
        stateTransitionCount?: string | undefined
        searchAttributes?: SearchAttributes | undefined
        nexusHeader?: { [x: string]: string } | undefined
        userMetadata?: { summary?: {} | undefined; details?: {} | undefined } | undefined
        links?: Link[] | undefined
        identity?: string | undefined
      }
    | undefined
  input?: {} | undefined
  result?: {} | undefined
  failure?:
    | {
        message?: string | undefined
        source?: string | undefined
        stackTrace?: string | undefined
        encodedAttributes?: {} | undefined
        cause?: Failure | undefined
        applicationFailureInfo?: ApplicationFailureInfo | undefined
        timeoutFailureInfo?: TimeoutFailureInfo | undefined
        canceledFailureInfo?: CanceledFailureInfo | undefined
        terminatedFailureInfo?: TerminatedFailureInfo | undefined
        serverFailureInfo?: ServerFailureInfo | undefined
        resetWorkflowFailureInfo?: ResetWorkflowFailureInfo | undefined
        activityFailureInfo?: ActivityFailureInfo | undefined
        childWorkflowExecutionFailureInfo?: ChildWorkflowExecutionFailureInfo | undefined
        nexusOperationExecutionFailureInfo?: NexusOperationFailureInfo | undefined
        nexusHandlerFailureInfo?: NexusHandlerFailureInfo | undefined
      }
    | undefined
  longPollToken?: string | undefined
}
type StartNexusOperationExecutionRequest = {
  namespace?: string | undefined
  identity?: string | undefined
  requestId?: string | undefined
  operationId?: string | undefined
  endpoint?: string | undefined
  service?: string | undefined
  operation?: string | undefined
  scheduleToCloseTimeout?: string | undefined
  scheduleToStartTimeout?: string | undefined
  startToCloseTimeout?: string | undefined
  input?: {} | undefined
  idReusePolicy?:
    | 'NEXUS_OPERATION_ID_REUSE_POLICY_UNSPECIFIED'
    | 'NEXUS_OPERATION_ID_REUSE_POLICY_ALLOW_DUPLICATE'
    | 'NEXUS_OPERATION_ID_REUSE_POLICY_ALLOW_DUPLICATE_FAILED_ONLY'
    | 'NEXUS_OPERATION_ID_REUSE_POLICY_REJECT_DUPLICATE'
    | undefined
  idConflictPolicy?:
    | 'NEXUS_OPERATION_ID_CONFLICT_POLICY_UNSPECIFIED'
    | 'NEXUS_OPERATION_ID_CONFLICT_POLICY_FAIL'
    | 'NEXUS_OPERATION_ID_CONFLICT_POLICY_USE_EXISTING'
    | undefined
  searchAttributes?: { indexedFields?: { [x: string]: Payload } | undefined } | undefined
  nexusHeader?: { [x: string]: string } | undefined
  userMetadata?: { summary?: {} | undefined; details?: {} | undefined } | undefined
}
type StartNexusOperationExecutionResponse = {
  runId?: string | undefined
  started?: boolean | undefined
}
type RequestCancelNexusOperationExecutionRequest = {
  namespace?: string | undefined
  operationId?: string | undefined
  runId?: string | undefined
  identity?: string | undefined
  requestId?: string | undefined
  reason?: string | undefined
}
type RequestCancelNexusOperationExecutionResponse = { [x: string]: unknown }
type PollNexusOperationExecutionResponse = {
  runId?: string | undefined
  waitStage?:
    | 'NEXUS_OPERATION_WAIT_STAGE_UNSPECIFIED'
    | 'NEXUS_OPERATION_WAIT_STAGE_STARTED'
    | 'NEXUS_OPERATION_WAIT_STAGE_CLOSED'
    | undefined
  operationToken?: string | undefined
  result?: {} | undefined
  failure?:
    | {
        message?: string | undefined
        source?: string | undefined
        stackTrace?: string | undefined
        encodedAttributes?: {} | undefined
        cause?: Failure | undefined
        applicationFailureInfo?: ApplicationFailureInfo | undefined
        timeoutFailureInfo?: TimeoutFailureInfo | undefined
        canceledFailureInfo?: CanceledFailureInfo | undefined
        terminatedFailureInfo?: TerminatedFailureInfo | undefined
        serverFailureInfo?: ServerFailureInfo | undefined
        resetWorkflowFailureInfo?: ResetWorkflowFailureInfo | undefined
        activityFailureInfo?: ActivityFailureInfo | undefined
        childWorkflowExecutionFailureInfo?: ChildWorkflowExecutionFailureInfo | undefined
        nexusOperationExecutionFailureInfo?: NexusOperationFailureInfo | undefined
        nexusHandlerFailureInfo?: NexusHandlerFailureInfo | undefined
      }
    | undefined
}
type TerminateNexusOperationExecutionRequest = {
  namespace?: string | undefined
  operationId?: string | undefined
  runId?: string | undefined
  identity?: string | undefined
  requestId?: string | undefined
  reason?: string | undefined
}
type TerminateNexusOperationExecutionResponse = { [x: string]: unknown }
type CountSchedulesResponseAggregationGroup = {
  groupValues?: Payload[] | undefined
  count?: string | undefined
}
type CountSchedulesResponse = {
  count?: string | undefined
  groups?: CountSchedulesResponseAggregationGroup[] | undefined
}
type Range = { start?: number | undefined; end?: number | undefined; step?: number | undefined }
type StructuredCalendarSpec = {
  second?: Range[] | undefined
  minute?: Range[] | undefined
  hour?: Range[] | undefined
  dayOfMonth?: Range[] | undefined
  month?: Range[] | undefined
  year?: Range[] | undefined
  dayOfWeek?: Range[] | undefined
  comment?: string | undefined
}
type CalendarSpec = {
  second?: string | undefined
  minute?: string | undefined
  hour?: string | undefined
  dayOfMonth?: string | undefined
  month?: string | undefined
  year?: string | undefined
  dayOfWeek?: string | undefined
  comment?: string | undefined
}
type IntervalSpec = { interval?: string | undefined; phase?: string | undefined }
type ScheduleActionResult = {
  scheduleTime?: string | undefined
  actualTime?: string | undefined
  startWorkflowResult?: { workflowId?: string | undefined; runId?: string | undefined } | undefined
  startWorkflowStatus?:
    | 'WORKFLOW_EXECUTION_STATUS_UNSPECIFIED'
    | 'WORKFLOW_EXECUTION_STATUS_RUNNING'
    | 'WORKFLOW_EXECUTION_STATUS_COMPLETED'
    | 'WORKFLOW_EXECUTION_STATUS_FAILED'
    | 'WORKFLOW_EXECUTION_STATUS_CANCELED'
    | 'WORKFLOW_EXECUTION_STATUS_TERMINATED'
    | 'WORKFLOW_EXECUTION_STATUS_CONTINUED_AS_NEW'
    | 'WORKFLOW_EXECUTION_STATUS_TIMED_OUT'
    | 'WORKFLOW_EXECUTION_STATUS_PAUSED'
    | undefined
}
type ScheduleListInfo = {
  spec?:
    | {
        structuredCalendar?: StructuredCalendarSpec[] | undefined
        cronString?: string[] | undefined
        calendar?: CalendarSpec[] | undefined
        interval?: IntervalSpec[] | undefined
        excludeCalendar?: CalendarSpec[] | undefined
        excludeStructuredCalendar?: StructuredCalendarSpec[] | undefined
        startTime?: string | undefined
        endTime?: string | undefined
        jitter?: string | undefined
        timezoneName?: string | undefined
        timezoneData?: string | undefined
      }
    | undefined
  workflowType?: { name?: string | undefined } | undefined
  notes?: string | undefined
  paused?: boolean | undefined
  recentActions?: ScheduleActionResult[] | undefined
  futureActionTimes?: string[] | undefined
}
type ScheduleListEntry = {
  scheduleId?: string | undefined
  memo?: Memo | undefined
  searchAttributes?: SearchAttributes | undefined
  info?: ScheduleListInfo | undefined
}
type ListSchedulesResponse = {
  schedules?: ScheduleListEntry[] | undefined
  nextPageToken?: string | undefined
}
type ScheduleSpec = {
  structuredCalendar?: StructuredCalendarSpec[] | undefined
  cronString?: string[] | undefined
  calendar?: CalendarSpec[] | undefined
  interval?: IntervalSpec[] | undefined
  excludeCalendar?: CalendarSpec[] | undefined
  excludeStructuredCalendar?: StructuredCalendarSpec[] | undefined
  startTime?: string | undefined
  endTime?: string | undefined
  jitter?: string | undefined
  timezoneName?: string | undefined
  timezoneData?: string | undefined
}
type ScheduleAction = {
  startWorkflow?:
    | {
        workflowId?: string | undefined
        workflowType?: WorkflowType | undefined
        taskQueue?: TaskQueue | undefined
        input?: { payloads?: Payload[] | undefined } | undefined
        workflowExecutionTimeout?: string | undefined
        workflowRunTimeout?: string | undefined
        workflowTaskTimeout?: string | undefined
        workflowIdReusePolicy?:
          | 'WORKFLOW_ID_REUSE_POLICY_UNSPECIFIED'
          | 'WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE'
          | 'WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE_FAILED_ONLY'
          | 'WORKFLOW_ID_REUSE_POLICY_REJECT_DUPLICATE'
          | 'WORKFLOW_ID_REUSE_POLICY_TERMINATE_IF_RUNNING'
          | undefined
        retryPolicy?:
          | {
              initialInterval?: string | undefined
              backoffCoefficient?: number | undefined
              maximumInterval?: string | undefined
              maximumAttempts?: number | undefined
              nonRetryableErrorTypes?: string[] | undefined
            }
          | undefined
        cronSchedule?: string | undefined
        memo?: Memo | undefined
        searchAttributes?: SearchAttributes | undefined
        header?: Header | undefined
        userMetadata?: { summary?: {} | undefined; details?: {} | undefined } | undefined
        versioningOverride?:
          | {
              pinned?:
                | {
                    behavior?:
                      | 'PINNED_OVERRIDE_BEHAVIOR_UNSPECIFIED'
                      | 'PINNED_OVERRIDE_BEHAVIOR_PINNED'
                      | undefined
                    version?:
                      | { buildId?: string | undefined; deploymentName?: string | undefined }
                      | undefined
                  }
                | undefined
              autoUpgrade?: boolean | undefined
              behavior?:
                | 'VERSIONING_BEHAVIOR_UNSPECIFIED'
                | 'VERSIONING_BEHAVIOR_PINNED'
                | 'VERSIONING_BEHAVIOR_AUTO_UPGRADE'
                | undefined
              deployment?:
                | { seriesName?: string | undefined; buildId?: string | undefined }
                | undefined
              pinnedVersion?: string | undefined
            }
          | undefined
        priority?:
          | {
              priorityKey?: number | undefined
              fairnessKey?: string | undefined
              fairnessWeight?: number | undefined
            }
          | undefined
      }
    | undefined
}
type SchedulePolicies = {
  overlapPolicy?:
    | 'SCHEDULE_OVERLAP_POLICY_UNSPECIFIED'
    | 'SCHEDULE_OVERLAP_POLICY_SKIP'
    | 'SCHEDULE_OVERLAP_POLICY_BUFFER_ONE'
    | 'SCHEDULE_OVERLAP_POLICY_BUFFER_ALL'
    | 'SCHEDULE_OVERLAP_POLICY_CANCEL_OTHER'
    | 'SCHEDULE_OVERLAP_POLICY_TERMINATE_OTHER'
    | 'SCHEDULE_OVERLAP_POLICY_ALLOW_ALL'
    | undefined
  catchupWindow?: string | undefined
  pauseOnFailure?: boolean | undefined
  keepOriginalWorkflowId?: boolean | undefined
}
type ScheduleState = {
  notes?: string | undefined
  paused?: boolean | undefined
  limitedActions?: boolean | undefined
  remainingActions?: string | undefined
}
type DescribeScheduleResponse = {
  schedule?:
    | {
        spec?: ScheduleSpec | undefined
        action?: ScheduleAction | undefined
        policies?: SchedulePolicies | undefined
        state?: ScheduleState | undefined
      }
    | undefined
  info?:
    | {
        actionCount?: string | undefined
        missedCatchupWindow?: string | undefined
        overlapSkipped?: string | undefined
        bufferDropped?: string | undefined
        bufferSize?: string | undefined
        runningWorkflows?: WorkflowExecution[] | undefined
        recentActions?: ScheduleActionResult[] | undefined
        futureActionTimes?: string[] | undefined
        createTime?: string | undefined
        updateTime?: string | undefined
        invalidScheduleError?: string | undefined
      }
    | undefined
  memo?: { fields?: { [x: string]: Payload } | undefined } | undefined
  searchAttributes?: SearchAttributes | undefined
  conflictToken?: string | undefined
}
type BackfillRequest = {
  startTime?: string | undefined
  endTime?: string | undefined
  overlapPolicy?:
    | 'SCHEDULE_OVERLAP_POLICY_UNSPECIFIED'
    | 'SCHEDULE_OVERLAP_POLICY_SKIP'
    | 'SCHEDULE_OVERLAP_POLICY_BUFFER_ONE'
    | 'SCHEDULE_OVERLAP_POLICY_BUFFER_ALL'
    | 'SCHEDULE_OVERLAP_POLICY_CANCEL_OTHER'
    | 'SCHEDULE_OVERLAP_POLICY_TERMINATE_OTHER'
    | 'SCHEDULE_OVERLAP_POLICY_ALLOW_ALL'
    | undefined
}
type CreateScheduleRequest = {
  namespace?: string | undefined
  scheduleId?: string | undefined
  schedule?:
    | {
        spec?: ScheduleSpec | undefined
        action?: ScheduleAction | undefined
        policies?: SchedulePolicies | undefined
        state?: ScheduleState | undefined
      }
    | undefined
  initialPatch?:
    | {
        triggerImmediately?:
          | {
              overlapPolicy?:
                | 'SCHEDULE_OVERLAP_POLICY_UNSPECIFIED'
                | 'SCHEDULE_OVERLAP_POLICY_SKIP'
                | 'SCHEDULE_OVERLAP_POLICY_BUFFER_ONE'
                | 'SCHEDULE_OVERLAP_POLICY_BUFFER_ALL'
                | 'SCHEDULE_OVERLAP_POLICY_CANCEL_OTHER'
                | 'SCHEDULE_OVERLAP_POLICY_TERMINATE_OTHER'
                | 'SCHEDULE_OVERLAP_POLICY_ALLOW_ALL'
                | undefined
              scheduledTime?: string | undefined
            }
          | undefined
        backfillRequest?: BackfillRequest[] | undefined
        pause?: string | undefined
        unpause?: string | undefined
      }
    | undefined
  identity?: string | undefined
  requestId?: string | undefined
  memo?: { fields?: { [x: string]: Payload } | undefined } | undefined
  searchAttributes?: SearchAttributes | undefined
}
type CreateScheduleResponse = { conflictToken?: string | undefined }
type DeleteScheduleResponse = { [x: string]: unknown }
type ListScheduleMatchingTimesResponse = { startTime?: string[] | undefined }
type SchedulePatch = {
  triggerImmediately?:
    | {
        overlapPolicy?:
          | 'SCHEDULE_OVERLAP_POLICY_UNSPECIFIED'
          | 'SCHEDULE_OVERLAP_POLICY_SKIP'
          | 'SCHEDULE_OVERLAP_POLICY_BUFFER_ONE'
          | 'SCHEDULE_OVERLAP_POLICY_BUFFER_ALL'
          | 'SCHEDULE_OVERLAP_POLICY_CANCEL_OTHER'
          | 'SCHEDULE_OVERLAP_POLICY_TERMINATE_OTHER'
          | 'SCHEDULE_OVERLAP_POLICY_ALLOW_ALL'
          | undefined
        scheduledTime?: string | undefined
      }
    | undefined
  backfillRequest?: BackfillRequest[] | undefined
  pause?: string | undefined
  unpause?: string | undefined
}
type PatchScheduleRequest = {
  namespace?: string | undefined
  scheduleId?: string | undefined
  patch?: SchedulePatch | undefined
  identity?: string | undefined
  requestId?: string | undefined
}
type PatchScheduleResponse = { [x: string]: unknown }
type UpdateScheduleRequest = {
  namespace?: string | undefined
  scheduleId?: string | undefined
  schedule?:
    | {
        spec?: ScheduleSpec | undefined
        action?: ScheduleAction | undefined
        policies?: SchedulePolicies | undefined
        state?: ScheduleState | undefined
      }
    | undefined
  conflictToken?: string | undefined
  identity?: string | undefined
  requestId?: string | undefined
  searchAttributes?: { indexedFields?: { [x: string]: Payload } | undefined } | undefined
  memo?: { fields?: { [x: string]: Payload } | undefined } | undefined
}
type UpdateScheduleResponse = { [x: string]: unknown }
type ListSearchAttributesResponse = {
  customAttributes?:
    | {
        [x: string]:
          | 'INDEXED_VALUE_TYPE_UNSPECIFIED'
          | 'INDEXED_VALUE_TYPE_TEXT'
          | 'INDEXED_VALUE_TYPE_KEYWORD'
          | 'INDEXED_VALUE_TYPE_INT'
          | 'INDEXED_VALUE_TYPE_DOUBLE'
          | 'INDEXED_VALUE_TYPE_BOOL'
          | 'INDEXED_VALUE_TYPE_DATETIME'
          | 'INDEXED_VALUE_TYPE_KEYWORD_LIST'
      }
    | undefined
  systemAttributes?:
    | {
        [x: string]:
          | 'INDEXED_VALUE_TYPE_UNSPECIFIED'
          | 'INDEXED_VALUE_TYPE_TEXT'
          | 'INDEXED_VALUE_TYPE_KEYWORD'
          | 'INDEXED_VALUE_TYPE_INT'
          | 'INDEXED_VALUE_TYPE_DOUBLE'
          | 'INDEXED_VALUE_TYPE_BOOL'
          | 'INDEXED_VALUE_TYPE_DATETIME'
          | 'INDEXED_VALUE_TYPE_KEYWORD_LIST'
      }
    | undefined
  storageSchema?: { [x: string]: string } | undefined
}
type UpdateTaskQueueConfigRequest = {
  namespace?: string | undefined
  identity?: string | undefined
  taskQueue?: string | undefined
  taskQueueType?:
    | 'TASK_QUEUE_TYPE_UNSPECIFIED'
    | 'TASK_QUEUE_TYPE_WORKFLOW'
    | 'TASK_QUEUE_TYPE_ACTIVITY'
    | 'TASK_QUEUE_TYPE_NEXUS'
    | undefined
  updateQueueRateLimit?:
    | {
        rateLimit?: { requestsPerSecond?: number | undefined } | undefined
        reason?: string | undefined
      }
    | undefined
  updateFairnessKeyRateLimitDefault?:
    | {
        rateLimit?: { requestsPerSecond?: number | undefined } | undefined
        reason?: string | undefined
      }
    | undefined
  setFairnessWeightOverrides?: { [x: string]: number } | undefined
  unsetFairnessWeightOverrides?: string[] | undefined
}
type RateLimit = { requestsPerSecond?: number | undefined }
type ConfigMetadata = {
  reason?: string | undefined
  updateIdentity?: string | undefined
  updateTime?: string | undefined
}
type TaskQueueConfig = {
  queueRateLimit?:
    | { rateLimit?: RateLimit | undefined; metadata?: ConfigMetadata | undefined }
    | undefined
  fairnessKeysRateLimitDefault?:
    | { rateLimit?: RateLimit | undefined; metadata?: ConfigMetadata | undefined }
    | undefined
  fairnessWeightOverrides?: { [x: string]: number } | undefined
}
type UpdateTaskQueueConfigResponse = { config?: TaskQueueConfig | undefined }
type CompatibleVersionSet = { buildIds?: string[] | undefined }
type GetWorkerBuildIdCompatibilityResponse = {
  majorVersionSets?: CompatibleVersionSet[] | undefined
}
type BuildIdAssignmentRule = {
  targetBuildId?: string | undefined
  percentageRamp?: { rampPercentage?: number | undefined } | undefined
}
type TimestampedBuildIdAssignmentRule = {
  rule?: BuildIdAssignmentRule | undefined
  createTime?: string | undefined
}
type CompatibleBuildIdRedirectRule = {
  sourceBuildId?: string | undefined
  targetBuildId?: string | undefined
}
type TimestampedCompatibleBuildIdRedirectRule = {
  rule?: CompatibleBuildIdRedirectRule | undefined
  createTime?: string | undefined
}
type GetWorkerVersioningRulesResponse = {
  assignmentRules?: TimestampedBuildIdAssignmentRule[] | undefined
  compatibleRedirectRules?: TimestampedCompatibleBuildIdRedirectRule[] | undefined
  conflictToken?: string | undefined
}
type PollerInfo = {
  lastAccessTime?: string | undefined
  identity?: string | undefined
  ratePerSecond?: number | undefined
  workerVersionCapabilities?:
    | {
        buildId?: string | undefined
        useVersioning?: boolean | undefined
        deploymentSeriesName?: string | undefined
      }
    | undefined
  deploymentOptions?:
    | {
        deploymentName?: string | undefined
        buildId?: string | undefined
        workerVersioningMode?:
          | 'WORKER_VERSIONING_MODE_UNSPECIFIED'
          | 'WORKER_VERSIONING_MODE_UNVERSIONED'
          | 'WORKER_VERSIONING_MODE_VERSIONED'
          | undefined
      }
    | undefined
}
type TaskQueueStats = {
  approximateBacklogCount?: string | undefined
  approximateBacklogAge?: string | undefined
  tasksAddRate?: number | undefined
  tasksDispatchRate?: number | undefined
}
type DescribeTaskQueueResponseEffectiveRateLimit = {
  requestsPerSecond?: number | undefined
  rateLimitSource?:
    | 'RATE_LIMIT_SOURCE_UNSPECIFIED'
    | 'RATE_LIMIT_SOURCE_API'
    | 'RATE_LIMIT_SOURCE_WORKER'
    | 'RATE_LIMIT_SOURCE_SYSTEM'
    | undefined
}
type TaskIdBlock = { startId?: string | undefined; endId?: string | undefined }
type TaskQueueTypeInfo = { pollers?: PollerInfo[] | undefined; stats?: TaskQueueStats | undefined }
type TaskQueueVersionInfo = {
  typesInfo?: { [x: string]: TaskQueueTypeInfo } | undefined
  taskReachability?:
    | 'BUILD_ID_TASK_REACHABILITY_UNSPECIFIED'
    | 'BUILD_ID_TASK_REACHABILITY_REACHABLE'
    | 'BUILD_ID_TASK_REACHABILITY_CLOSED_WORKFLOWS_ONLY'
    | 'BUILD_ID_TASK_REACHABILITY_UNREACHABLE'
    | undefined
}
type DescribeTaskQueueResponse = {
  pollers?: PollerInfo[] | undefined
  stats?:
    | {
        approximateBacklogCount?: string | undefined
        approximateBacklogAge?: string | undefined
        tasksAddRate?: number | undefined
        tasksDispatchRate?: number | undefined
      }
    | undefined
  statsByPriorityKey?: { [x: string]: TaskQueueStats } | undefined
  versioningInfo?:
    | {
        currentDeploymentVersion?:
          | { buildId?: string | undefined; deploymentName?: string | undefined }
          | undefined
        currentVersion?: string | undefined
        rampingDeploymentVersion?:
          | { buildId?: string | undefined; deploymentName?: string | undefined }
          | undefined
        rampingVersion?: string | undefined
        rampingVersionPercentage?: number | undefined
        updateTime?: string | undefined
      }
    | undefined
  config?:
    | {
        queueRateLimit?:
          | { rateLimit?: RateLimit | undefined; metadata?: ConfigMetadata | undefined }
          | undefined
        fairnessKeysRateLimitDefault?:
          | { rateLimit?: RateLimit | undefined; metadata?: ConfigMetadata | undefined }
          | undefined
        fairnessWeightOverrides?: { [x: string]: number } | undefined
      }
    | undefined
  effectiveRateLimit?: DescribeTaskQueueResponseEffectiveRateLimit | undefined
  taskQueueStatus?:
    | {
        backlogCountHint?: string | undefined
        readLevel?: string | undefined
        ackLevel?: string | undefined
        ratePerSecond?: number | undefined
        taskIdBlock?: TaskIdBlock | undefined
      }
    | undefined
  versionsInfo?: { [x: string]: TaskQueueVersionInfo } | undefined
}
type UpdateNamespaceInfo = {
  description?: string | undefined
  ownerEmail?: string | undefined
  data?: { [x: string]: string } | undefined
  state?:
    | 'NAMESPACE_STATE_UNSPECIFIED'
    | 'NAMESPACE_STATE_REGISTERED'
    | 'NAMESPACE_STATE_DEPRECATED'
    | 'NAMESPACE_STATE_DELETED'
    | undefined
}
type UpdateNamespaceRequest = {
  namespace?: string | undefined
  updateInfo?: UpdateNamespaceInfo | undefined
  config?: NamespaceConfig | undefined
  replicationConfig?: NamespaceReplicationConfig | undefined
  securityToken?: string | undefined
  deleteBadBinary?: string | undefined
  promoteNamespace?: boolean | undefined
}
type UpdateNamespaceResponse = {
  namespaceInfo?: NamespaceInfo | undefined
  config?: NamespaceConfig | undefined
  replicationConfig?: NamespaceReplicationConfig | undefined
  failoverVersion?: string | undefined
  isGlobalNamespace?: boolean | undefined
}
type ComputeConfigScalingGroup = {
  taskQueueTypes?:
    | (
        | 'TASK_QUEUE_TYPE_UNSPECIFIED'
        | 'TASK_QUEUE_TYPE_WORKFLOW'
        | 'TASK_QUEUE_TYPE_ACTIVITY'
        | 'TASK_QUEUE_TYPE_NEXUS'
      )[]
    | undefined
  provider?:
    | { type?: string | undefined; details?: {} | undefined; nexusEndpoint?: string | undefined }
    | undefined
  scaler?: { type?: string | undefined; details?: {} | undefined } | undefined
}
type CreateWorkerDeploymentVersionRequest = {
  namespace?: string | undefined
  deploymentVersion?:
    | { buildId?: string | undefined; deploymentName?: string | undefined }
    | undefined
  computeConfig?:
    | { scalingGroups?: { [x: string]: ComputeConfigScalingGroup } | undefined }
    | undefined
  identity?: string | undefined
  requestId?: string | undefined
}
type CreateWorkerDeploymentVersionResponse = { [x: string]: unknown }
type WorkerDeploymentVersionInfoVersionTaskQueueInfo = {
  name?: string | undefined
  type?:
    | 'TASK_QUEUE_TYPE_UNSPECIFIED'
    | 'TASK_QUEUE_TYPE_WORKFLOW'
    | 'TASK_QUEUE_TYPE_ACTIVITY'
    | 'TASK_QUEUE_TYPE_NEXUS'
    | undefined
}
type WorkerDeploymentVersionInfo = {
  version?: string | undefined
  status?:
    | 'WORKER_DEPLOYMENT_VERSION_STATUS_UNSPECIFIED'
    | 'WORKER_DEPLOYMENT_VERSION_STATUS_INACTIVE'
    | 'WORKER_DEPLOYMENT_VERSION_STATUS_CURRENT'
    | 'WORKER_DEPLOYMENT_VERSION_STATUS_RAMPING'
    | 'WORKER_DEPLOYMENT_VERSION_STATUS_DRAINING'
    | 'WORKER_DEPLOYMENT_VERSION_STATUS_DRAINED'
    | 'WORKER_DEPLOYMENT_VERSION_STATUS_CREATED'
    | undefined
  deploymentVersion?:
    | { buildId?: string | undefined; deploymentName?: string | undefined }
    | undefined
  deploymentName?: string | undefined
  createTime?: string | undefined
  routingChangedTime?: string | undefined
  currentSinceTime?: string | undefined
  rampingSinceTime?: string | undefined
  firstActivationTime?: string | undefined
  lastCurrentTime?: string | undefined
  lastDeactivationTime?: string | undefined
  rampPercentage?: number | undefined
  taskQueueInfos?: WorkerDeploymentVersionInfoVersionTaskQueueInfo[] | undefined
  drainageInfo?:
    | {
        status?:
          | 'VERSION_DRAINAGE_STATUS_UNSPECIFIED'
          | 'VERSION_DRAINAGE_STATUS_DRAINING'
          | 'VERSION_DRAINAGE_STATUS_DRAINED'
          | undefined
        lastChangedTime?: string | undefined
        lastCheckedTime?: string | undefined
      }
    | undefined
  metadata?: { entries?: { [x: string]: Payload } | undefined } | undefined
  computeConfig?:
    | { scalingGroups?: { [x: string]: ComputeConfigScalingGroup } | undefined }
    | undefined
  lastModifierIdentity?: string | undefined
}
type DescribeWorkerDeploymentVersionResponseVersionTaskQueue = {
  name?: string | undefined
  type?:
    | 'TASK_QUEUE_TYPE_UNSPECIFIED'
    | 'TASK_QUEUE_TYPE_WORKFLOW'
    | 'TASK_QUEUE_TYPE_ACTIVITY'
    | 'TASK_QUEUE_TYPE_NEXUS'
    | undefined
  stats?:
    | {
        approximateBacklogCount?: string | undefined
        approximateBacklogAge?: string | undefined
        tasksAddRate?: number | undefined
        tasksDispatchRate?: number | undefined
      }
    | undefined
  statsByPriorityKey?: { [x: string]: TaskQueueStats } | undefined
}
type DescribeWorkerDeploymentVersionResponse = {
  workerDeploymentVersionInfo?: WorkerDeploymentVersionInfo | undefined
  versionTaskQueues?: DescribeWorkerDeploymentVersionResponseVersionTaskQueue[] | undefined
}
type DeleteWorkerDeploymentVersionResponse = { [x: string]: unknown }
type ComputeConfigScalingGroupUpdate = {
  scalingGroup?: ComputeConfigScalingGroup | undefined
  updateMask?: string | undefined
}
type UpdateWorkerDeploymentVersionComputeConfigRequest = {
  namespace?: string | undefined
  deploymentVersion?:
    | { buildId?: string | undefined; deploymentName?: string | undefined }
    | undefined
  computeConfigScalingGroups?: { [x: string]: ComputeConfigScalingGroupUpdate } | undefined
  removeComputeConfigScalingGroups?: string[] | undefined
  identity?: string | undefined
  requestId?: string | undefined
}
type UpdateWorkerDeploymentVersionComputeConfigResponse = { [x: string]: unknown }
type UpdateWorkerDeploymentVersionMetadataRequest = {
  namespace?: string | undefined
  version?: string | undefined
  deploymentVersion?:
    | { buildId?: string | undefined; deploymentName?: string | undefined }
    | undefined
  upsertEntries?: { [x: string]: Payload } | undefined
  removeEntries?: string[] | undefined
  identity?: string | undefined
}
type UpdateWorkerDeploymentVersionMetadataResponse = {
  metadata?: { entries?: { [x: string]: Payload } | undefined } | undefined
}
type ValidateWorkerDeploymentVersionComputeConfigRequest = {
  namespace?: string | undefined
  deploymentVersion?:
    | { buildId?: string | undefined; deploymentName?: string | undefined }
    | undefined
  computeConfigScalingGroups?: { [x: string]: ComputeConfigScalingGroupUpdate } | undefined
  removeComputeConfigScalingGroups?: string[] | undefined
  identity?: string | undefined
}
type ValidateWorkerDeploymentVersionComputeConfigResponse = { [x: string]: unknown }
type RoutingConfig = {
  currentDeploymentVersion?:
    | { buildId?: string | undefined; deploymentName?: string | undefined }
    | undefined
  currentVersion?: string | undefined
  rampingDeploymentVersion?:
    | { buildId?: string | undefined; deploymentName?: string | undefined }
    | undefined
  rampingVersion?: string | undefined
  rampingVersionPercentage?: number | undefined
  currentVersionChangedTime?: string | undefined
  rampingVersionChangedTime?: string | undefined
  rampingVersionPercentageChangedTime?: string | undefined
  revisionNumber?: string | undefined
}
type ComputeConfigScalingGroupSummary = {
  taskQueueTypes?:
    | (
        | 'TASK_QUEUE_TYPE_UNSPECIFIED'
        | 'TASK_QUEUE_TYPE_WORKFLOW'
        | 'TASK_QUEUE_TYPE_ACTIVITY'
        | 'TASK_QUEUE_TYPE_NEXUS'
      )[]
    | undefined
  providerType?: string | undefined
}
type ComputeConfigSummary = {
  scalingGroups?: { [x: string]: ComputeConfigScalingGroupSummary } | undefined
}
type ListWorkerDeploymentsResponseWorkerDeploymentSummary = {
  name?: string | undefined
  createTime?: string | undefined
  routingConfig?: RoutingConfig | undefined
  latestVersionSummary?:
    | {
        version?: string | undefined
        status?:
          | 'WORKER_DEPLOYMENT_VERSION_STATUS_UNSPECIFIED'
          | 'WORKER_DEPLOYMENT_VERSION_STATUS_INACTIVE'
          | 'WORKER_DEPLOYMENT_VERSION_STATUS_CURRENT'
          | 'WORKER_DEPLOYMENT_VERSION_STATUS_RAMPING'
          | 'WORKER_DEPLOYMENT_VERSION_STATUS_DRAINING'
          | 'WORKER_DEPLOYMENT_VERSION_STATUS_DRAINED'
          | 'WORKER_DEPLOYMENT_VERSION_STATUS_CREATED'
          | undefined
        deploymentVersion?:
          | { buildId?: string | undefined; deploymentName?: string | undefined }
          | undefined
        createTime?: string | undefined
        drainageStatus?:
          | 'VERSION_DRAINAGE_STATUS_UNSPECIFIED'
          | 'VERSION_DRAINAGE_STATUS_DRAINING'
          | 'VERSION_DRAINAGE_STATUS_DRAINED'
          | undefined
        drainageInfo?:
          | {
              status?:
                | 'VERSION_DRAINAGE_STATUS_UNSPECIFIED'
                | 'VERSION_DRAINAGE_STATUS_DRAINING'
                | 'VERSION_DRAINAGE_STATUS_DRAINED'
                | undefined
              lastChangedTime?: string | undefined
              lastCheckedTime?: string | undefined
            }
          | undefined
        currentSinceTime?: string | undefined
        rampingSinceTime?: string | undefined
        routingUpdateTime?: string | undefined
        firstActivationTime?: string | undefined
        lastCurrentTime?: string | undefined
        lastDeactivationTime?: string | undefined
        computeConfig?: ComputeConfigSummary | undefined
      }
    | undefined
  currentVersionSummary?:
    | {
        version?: string | undefined
        status?:
          | 'WORKER_DEPLOYMENT_VERSION_STATUS_UNSPECIFIED'
          | 'WORKER_DEPLOYMENT_VERSION_STATUS_INACTIVE'
          | 'WORKER_DEPLOYMENT_VERSION_STATUS_CURRENT'
          | 'WORKER_DEPLOYMENT_VERSION_STATUS_RAMPING'
          | 'WORKER_DEPLOYMENT_VERSION_STATUS_DRAINING'
          | 'WORKER_DEPLOYMENT_VERSION_STATUS_DRAINED'
          | 'WORKER_DEPLOYMENT_VERSION_STATUS_CREATED'
          | undefined
        deploymentVersion?:
          | { buildId?: string | undefined; deploymentName?: string | undefined }
          | undefined
        createTime?: string | undefined
        drainageStatus?:
          | 'VERSION_DRAINAGE_STATUS_UNSPECIFIED'
          | 'VERSION_DRAINAGE_STATUS_DRAINING'
          | 'VERSION_DRAINAGE_STATUS_DRAINED'
          | undefined
        drainageInfo?:
          | {
              status?:
                | 'VERSION_DRAINAGE_STATUS_UNSPECIFIED'
                | 'VERSION_DRAINAGE_STATUS_DRAINING'
                | 'VERSION_DRAINAGE_STATUS_DRAINED'
                | undefined
              lastChangedTime?: string | undefined
              lastCheckedTime?: string | undefined
            }
          | undefined
        currentSinceTime?: string | undefined
        rampingSinceTime?: string | undefined
        routingUpdateTime?: string | undefined
        firstActivationTime?: string | undefined
        lastCurrentTime?: string | undefined
        lastDeactivationTime?: string | undefined
        computeConfig?: ComputeConfigSummary | undefined
      }
    | undefined
  rampingVersionSummary?:
    | {
        version?: string | undefined
        status?:
          | 'WORKER_DEPLOYMENT_VERSION_STATUS_UNSPECIFIED'
          | 'WORKER_DEPLOYMENT_VERSION_STATUS_INACTIVE'
          | 'WORKER_DEPLOYMENT_VERSION_STATUS_CURRENT'
          | 'WORKER_DEPLOYMENT_VERSION_STATUS_RAMPING'
          | 'WORKER_DEPLOYMENT_VERSION_STATUS_DRAINING'
          | 'WORKER_DEPLOYMENT_VERSION_STATUS_DRAINED'
          | 'WORKER_DEPLOYMENT_VERSION_STATUS_CREATED'
          | undefined
        deploymentVersion?:
          | { buildId?: string | undefined; deploymentName?: string | undefined }
          | undefined
        createTime?: string | undefined
        drainageStatus?:
          | 'VERSION_DRAINAGE_STATUS_UNSPECIFIED'
          | 'VERSION_DRAINAGE_STATUS_DRAINING'
          | 'VERSION_DRAINAGE_STATUS_DRAINED'
          | undefined
        drainageInfo?:
          | {
              status?:
                | 'VERSION_DRAINAGE_STATUS_UNSPECIFIED'
                | 'VERSION_DRAINAGE_STATUS_DRAINING'
                | 'VERSION_DRAINAGE_STATUS_DRAINED'
                | undefined
              lastChangedTime?: string | undefined
              lastCheckedTime?: string | undefined
            }
          | undefined
        currentSinceTime?: string | undefined
        rampingSinceTime?: string | undefined
        routingUpdateTime?: string | undefined
        firstActivationTime?: string | undefined
        lastCurrentTime?: string | undefined
        lastDeactivationTime?: string | undefined
        computeConfig?: ComputeConfigSummary | undefined
      }
    | undefined
}
type ListWorkerDeploymentsResponse = {
  nextPageToken?: string | undefined
  workerDeployments?: ListWorkerDeploymentsResponseWorkerDeploymentSummary[] | undefined
}
type WorkerDeploymentInfoWorkerDeploymentVersionSummary = {
  version?: string | undefined
  status?:
    | 'WORKER_DEPLOYMENT_VERSION_STATUS_UNSPECIFIED'
    | 'WORKER_DEPLOYMENT_VERSION_STATUS_INACTIVE'
    | 'WORKER_DEPLOYMENT_VERSION_STATUS_CURRENT'
    | 'WORKER_DEPLOYMENT_VERSION_STATUS_RAMPING'
    | 'WORKER_DEPLOYMENT_VERSION_STATUS_DRAINING'
    | 'WORKER_DEPLOYMENT_VERSION_STATUS_DRAINED'
    | 'WORKER_DEPLOYMENT_VERSION_STATUS_CREATED'
    | undefined
  deploymentVersion?:
    | { buildId?: string | undefined; deploymentName?: string | undefined }
    | undefined
  createTime?: string | undefined
  drainageStatus?:
    | 'VERSION_DRAINAGE_STATUS_UNSPECIFIED'
    | 'VERSION_DRAINAGE_STATUS_DRAINING'
    | 'VERSION_DRAINAGE_STATUS_DRAINED'
    | undefined
  drainageInfo?:
    | {
        status?:
          | 'VERSION_DRAINAGE_STATUS_UNSPECIFIED'
          | 'VERSION_DRAINAGE_STATUS_DRAINING'
          | 'VERSION_DRAINAGE_STATUS_DRAINED'
          | undefined
        lastChangedTime?: string | undefined
        lastCheckedTime?: string | undefined
      }
    | undefined
  currentSinceTime?: string | undefined
  rampingSinceTime?: string | undefined
  routingUpdateTime?: string | undefined
  firstActivationTime?: string | undefined
  lastCurrentTime?: string | undefined
  lastDeactivationTime?: string | undefined
  computeConfig?: ComputeConfigSummary | undefined
}
type WorkerDeploymentInfo = {
  name?: string | undefined
  versionSummaries?: WorkerDeploymentInfoWorkerDeploymentVersionSummary[] | undefined
  createTime?: string | undefined
  routingConfig?: RoutingConfig | undefined
  lastModifierIdentity?: string | undefined
  managerIdentity?: string | undefined
  routingConfigUpdateState?:
    | 'ROUTING_CONFIG_UPDATE_STATE_UNSPECIFIED'
    | 'ROUTING_CONFIG_UPDATE_STATE_IN_PROGRESS'
    | 'ROUTING_CONFIG_UPDATE_STATE_COMPLETED'
    | undefined
}
type DescribeWorkerDeploymentResponse = {
  conflictToken?: string | undefined
  workerDeploymentInfo?: WorkerDeploymentInfo | undefined
}
type CreateWorkerDeploymentRequest = {
  namespace?: string | undefined
  deploymentName?: string | undefined
  identity?: string | undefined
  requestId?: string | undefined
}
type CreateWorkerDeploymentResponse = { conflictToken?: string | undefined }
type DeleteWorkerDeploymentResponse = { [x: string]: unknown }
type SetWorkerDeploymentCurrentVersionRequest = {
  namespace?: string | undefined
  deploymentName?: string | undefined
  version?: string | undefined
  buildId?: string | undefined
  conflictToken?: string | undefined
  identity?: string | undefined
  ignoreMissingTaskQueues?: boolean | undefined
  allowNoPollers?: boolean | undefined
}
type SetWorkerDeploymentCurrentVersionResponse = {
  conflictToken?: string | undefined
  previousVersion?: string | undefined
  previousDeploymentVersion?:
    | { buildId?: string | undefined; deploymentName?: string | undefined }
    | undefined
}
type SetWorkerDeploymentManagerRequest = {
  namespace?: string | undefined
  deploymentName?: string | undefined
  managerIdentity?: string | undefined
  self?: boolean | undefined
  conflictToken?: string | undefined
  identity?: string | undefined
}
type SetWorkerDeploymentManagerResponse = {
  conflictToken?: string | undefined
  previousManagerIdentity?: string | undefined
}
type SetWorkerDeploymentRampingVersionRequest = {
  namespace?: string | undefined
  deploymentName?: string | undefined
  version?: string | undefined
  buildId?: string | undefined
  percentage?: number | undefined
  conflictToken?: string | undefined
  identity?: string | undefined
  ignoreMissingTaskQueues?: boolean | undefined
  allowNoPollers?: boolean | undefined
}
type SetWorkerDeploymentRampingVersionResponse = {
  conflictToken?: string | undefined
  previousVersion?: string | undefined
  previousDeploymentVersion?:
    | { buildId?: string | undefined; deploymentName?: string | undefined }
    | undefined
  previousPercentage?: number | undefined
}
type TaskQueueReachability = {
  taskQueue?: string | undefined
  reachability?:
    | (
        | 'TASK_REACHABILITY_UNSPECIFIED'
        | 'TASK_REACHABILITY_NEW_WORKFLOWS'
        | 'TASK_REACHABILITY_EXISTING_WORKFLOWS'
        | 'TASK_REACHABILITY_OPEN_WORKFLOWS'
        | 'TASK_REACHABILITY_CLOSED_WORKFLOWS'
      )[]
    | undefined
}
type BuildIdReachability = {
  buildId?: string | undefined
  taskQueueReachability?: TaskQueueReachability[] | undefined
}
type GetWorkerTaskReachabilityResponse = { buildIdReachability?: BuildIdReachability[] | undefined }
type WorkerDeploymentVersion = { buildId?: string | undefined; deploymentName?: string | undefined }
type WorkerSlotsInfo = {
  currentAvailableSlots?: number | undefined
  currentUsedSlots?: number | undefined
  slotSupplierKind?: string | undefined
  totalProcessedTasks?: number | undefined
  totalFailedTasks?: number | undefined
  lastIntervalProcessedTasks?: number | undefined
  lastIntervalFailureTasks?: number | undefined
}
type WorkerPollerInfo = {
  currentPollers?: number | undefined
  lastSuccessfulPollTime?: string | undefined
  isAutoscaling?: boolean | undefined
}
type PluginInfo = { name?: string | undefined; version?: string | undefined }
type StorageDriverInfo = { type?: string | undefined }
type WorkerHeartbeat = {
  workerInstanceKey?: string | undefined
  workerIdentity?: string | undefined
  hostInfo?:
    | {
        hostName?: string | undefined
        workerGroupingKey?: string | undefined
        processId?: string | undefined
        currentHostCpuUsage?: number | undefined
        currentHostMemUsage?: number | undefined
      }
    | undefined
  taskQueue?: string | undefined
  deploymentVersion?: WorkerDeploymentVersion | undefined
  sdkName?: string | undefined
  sdkVersion?: string | undefined
  status?:
    | 'WORKER_STATUS_UNSPECIFIED'
    | 'WORKER_STATUS_RUNNING'
    | 'WORKER_STATUS_SHUTTING_DOWN'
    | 'WORKER_STATUS_SHUTDOWN'
    | undefined
  startTime?: string | undefined
  heartbeatTime?: string | undefined
  elapsedSinceLastHeartbeat?: string | undefined
  workflowTaskSlotsInfo?: WorkerSlotsInfo | undefined
  activityTaskSlotsInfo?: WorkerSlotsInfo | undefined
  nexusTaskSlotsInfo?: WorkerSlotsInfo | undefined
  localActivitySlotsInfo?: WorkerSlotsInfo | undefined
  workflowPollerInfo?: WorkerPollerInfo | undefined
  workflowStickyPollerInfo?: WorkerPollerInfo | undefined
  activityPollerInfo?: WorkerPollerInfo | undefined
  nexusPollerInfo?: WorkerPollerInfo | undefined
  totalStickyCacheHit?: number | undefined
  totalStickyCacheMiss?: number | undefined
  currentStickyCacheSize?: number | undefined
  plugins?: PluginInfo[] | undefined
  drivers?: StorageDriverInfo[] | undefined
}
type WorkerInfo = { workerHeartbeat?: WorkerHeartbeat | undefined }
type WorkerListInfo = {
  workerInstanceKey?: string | undefined
  workerIdentity?: string | undefined
  taskQueue?: string | undefined
  deploymentVersion?: WorkerDeploymentVersion | undefined
  sdkName?: string | undefined
  sdkVersion?: string | undefined
  status?:
    | 'WORKER_STATUS_UNSPECIFIED'
    | 'WORKER_STATUS_RUNNING'
    | 'WORKER_STATUS_SHUTTING_DOWN'
    | 'WORKER_STATUS_SHUTDOWN'
    | undefined
  startTime?: string | undefined
  hostName?: string | undefined
  workerGroupingKey?: string | undefined
  processId?: string | undefined
  plugins?: PluginInfo[] | undefined
  drivers?: StorageDriverInfo[] | undefined
}
type ListWorkersResponse = {
  workersInfo?: WorkerInfo[] | undefined
  workers?: WorkerListInfo[] | undefined
  nextPageToken?: string | undefined
}
type DescribeWorkerResponse = { workerInfo?: WorkerInfo | undefined }
type FetchWorkerConfigRequest = {
  namespace?: string | undefined
  identity?: string | undefined
  reason?: string | undefined
  selector?: { workerInstanceKey?: string | undefined } | undefined
  resourceId?: string | undefined
}
type WorkerConfigSimplePollerBehavior = { maxPollers?: number | undefined }
type WorkerConfigAutoscalingPollerBehavior = {
  minPollers?: number | undefined
  maxPollers?: number | undefined
  initialPollers?: number | undefined
}
type FetchWorkerConfigResponse = {
  workerConfig?:
    | {
        workflowCacheSize?: number | undefined
        simplePollerBehavior?: WorkerConfigSimplePollerBehavior | undefined
        autoscalingPollerBehavior?: WorkerConfigAutoscalingPollerBehavior | undefined
      }
    | undefined
}
type RecordWorkerHeartbeatRequest = {
  namespace?: string | undefined
  identity?: string | undefined
  workerHeartbeat?: WorkerHeartbeat[] | undefined
  resourceId?: string | undefined
}
type RecordWorkerHeartbeatResponse = { [x: string]: unknown }
type UpdateWorkerConfigRequest = {
  namespace?: string | undefined
  identity?: string | undefined
  reason?: string | undefined
  workerConfig?:
    | {
        workflowCacheSize?: number | undefined
        simplePollerBehavior?: WorkerConfigSimplePollerBehavior | undefined
        autoscalingPollerBehavior?: WorkerConfigAutoscalingPollerBehavior | undefined
      }
    | undefined
  updateMask?: string | undefined
  selector?: { workerInstanceKey?: string | undefined } | undefined
  resourceId?: string | undefined
}
type UpdateWorkerConfigResponse = {
  workerConfig?:
    | {
        workflowCacheSize?: number | undefined
        simplePollerBehavior?: WorkerConfigSimplePollerBehavior | undefined
        autoscalingPollerBehavior?: WorkerConfigAutoscalingPollerBehavior | undefined
      }
    | undefined
}
type CountWorkflowExecutionsResponseAggregationGroup = {
  groupValues?: Payload[] | undefined
  count?: string | undefined
}
type CountWorkflowExecutionsResponse = {
  count?: string | undefined
  groups?: CountWorkflowExecutionsResponseAggregationGroup[] | undefined
}
type WorkflowRuleSpecActivityStartingTrigger = { predicate?: string | undefined }
type WorkflowRuleActionActionActivityPause = { [x: string]: unknown }
type WorkflowRuleAction = { activityPause?: WorkflowRuleActionActionActivityPause | undefined }
type WorkflowRule = {
  createTime?: string | undefined
  spec?:
    | {
        id?: string | undefined
        activityStart?: WorkflowRuleSpecActivityStartingTrigger | undefined
        visibilityQuery?: string | undefined
        actions?: WorkflowRuleAction[] | undefined
        expirationTime?: string | undefined
      }
    | undefined
  createdByIdentity?: string | undefined
  description?: string | undefined
}
type ListWorkflowRulesResponse = {
  rules?: WorkflowRule[] | undefined
  nextPageToken?: string | undefined
}
type CreateWorkflowRuleRequest = {
  namespace?: string | undefined
  spec?:
    | {
        id?: string | undefined
        activityStart?: WorkflowRuleSpecActivityStartingTrigger | undefined
        visibilityQuery?: string | undefined
        actions?: WorkflowRuleAction[] | undefined
        expirationTime?: string | undefined
      }
    | undefined
  forceScan?: boolean | undefined
  requestId?: string | undefined
  identity?: string | undefined
  description?: string | undefined
}
type CreateWorkflowRuleResponse = {
  rule?:
    | {
        createTime?: string | undefined
        spec?:
          | {
              id?: string | undefined
              activityStart?: WorkflowRuleSpecActivityStartingTrigger | undefined
              visibilityQuery?: string | undefined
              actions?: WorkflowRuleAction[] | undefined
              expirationTime?: string | undefined
            }
          | undefined
        createdByIdentity?: string | undefined
        description?: string | undefined
      }
    | undefined
  jobId?: string | undefined
}
type DescribeWorkflowRuleResponse = {
  rule?:
    | {
        createTime?: string | undefined
        spec?:
          | {
              id?: string | undefined
              activityStart?: WorkflowRuleSpecActivityStartingTrigger | undefined
              visibilityQuery?: string | undefined
              actions?: WorkflowRuleAction[] | undefined
              expirationTime?: string | undefined
            }
          | undefined
        createdByIdentity?: string | undefined
        description?: string | undefined
      }
    | undefined
}
type DeleteWorkflowRuleResponse = { [x: string]: unknown }
type ListWorkflowExecutionsResponse = {
  executions?: WorkflowExecutionInfo[] | undefined
  nextPageToken?: string | undefined
}
type WorkflowExecutionConfig = {
  taskQueue?: TaskQueue | undefined
  workflowExecutionTimeout?: string | undefined
  workflowRunTimeout?: string | undefined
  defaultWorkflowTaskTimeout?: string | undefined
  userMetadata?: { summary?: {} | undefined; details?: {} | undefined } | undefined
}
type PendingActivityInfoPauseInfo = {
  pauseTime?: string | undefined
  manual?: { identity?: string | undefined; reason?: string | undefined } | undefined
  rule?:
    | { ruleId?: string | undefined; identity?: string | undefined; reason?: string | undefined }
    | undefined
}
type PendingActivityInfo = {
  activityId?: string | undefined
  activityType?: ActivityType | undefined
  state?:
    | 'PENDING_ACTIVITY_STATE_UNSPECIFIED'
    | 'PENDING_ACTIVITY_STATE_SCHEDULED'
    | 'PENDING_ACTIVITY_STATE_STARTED'
    | 'PENDING_ACTIVITY_STATE_CANCEL_REQUESTED'
    | 'PENDING_ACTIVITY_STATE_PAUSED'
    | 'PENDING_ACTIVITY_STATE_PAUSE_REQUESTED'
    | undefined
  heartbeatDetails?: Payloads | undefined
  lastHeartbeatTime?: string | undefined
  lastStartedTime?: string | undefined
  attempt?: number | undefined
  maximumAttempts?: number | undefined
  scheduledTime?: string | undefined
  expirationTime?: string | undefined
  lastFailure?: Failure | undefined
  lastWorkerIdentity?: string | undefined
  lastIndependentlyAssignedBuildId?: string | undefined
  lastWorkerVersionStamp?:
    | { buildId?: string | undefined; useVersioning?: boolean | undefined }
    | undefined
  currentRetryInterval?: string | undefined
  lastAttemptCompleteTime?: string | undefined
  nextAttemptScheduleTime?: string | undefined
  paused?: boolean | undefined
  lastDeployment?: { seriesName?: string | undefined; buildId?: string | undefined } | undefined
  lastWorkerDeploymentVersion?: string | undefined
  lastDeploymentVersion?:
    | { buildId?: string | undefined; deploymentName?: string | undefined }
    | undefined
  priority?:
    | {
        priorityKey?: number | undefined
        fairnessKey?: string | undefined
        fairnessWeight?: number | undefined
      }
    | undefined
  pauseInfo?: PendingActivityInfoPauseInfo | undefined
  activityOptions?:
    | {
        taskQueue?: TaskQueue | undefined
        scheduleToCloseTimeout?: string | undefined
        scheduleToStartTimeout?: string | undefined
        startToCloseTimeout?: string | undefined
        heartbeatTimeout?: string | undefined
        retryPolicy?:
          | {
              initialInterval?: string | undefined
              backoffCoefficient?: number | undefined
              maximumInterval?: string | undefined
              maximumAttempts?: number | undefined
              nonRetryableErrorTypes?: string[] | undefined
            }
          | undefined
        priority?:
          | {
              priorityKey?: number | undefined
              fairnessKey?: string | undefined
              fairnessWeight?: number | undefined
            }
          | undefined
      }
    | undefined
}
type PendingChildExecutionInfo = {
  workflowId?: string | undefined
  runId?: string | undefined
  workflowTypeName?: string | undefined
  initiatedId?: string | undefined
  parentClosePolicy?:
    | 'PARENT_CLOSE_POLICY_UNSPECIFIED'
    | 'PARENT_CLOSE_POLICY_TERMINATE'
    | 'PARENT_CLOSE_POLICY_ABANDON'
    | 'PARENT_CLOSE_POLICY_REQUEST_CANCEL'
    | undefined
}
type PendingWorkflowTaskInfo = {
  state?:
    | 'PENDING_WORKFLOW_TASK_STATE_UNSPECIFIED'
    | 'PENDING_WORKFLOW_TASK_STATE_SCHEDULED'
    | 'PENDING_WORKFLOW_TASK_STATE_STARTED'
    | undefined
  scheduledTime?: string | undefined
  originalScheduledTime?: string | undefined
  startedTime?: string | undefined
  attempt?: number | undefined
}
type NexusOperationCancellationInfo = {
  requestedTime?: string | undefined
  state?:
    | 'NEXUS_OPERATION_CANCELLATION_STATE_UNSPECIFIED'
    | 'NEXUS_OPERATION_CANCELLATION_STATE_SCHEDULED'
    | 'NEXUS_OPERATION_CANCELLATION_STATE_BACKING_OFF'
    | 'NEXUS_OPERATION_CANCELLATION_STATE_SUCCEEDED'
    | 'NEXUS_OPERATION_CANCELLATION_STATE_FAILED'
    | 'NEXUS_OPERATION_CANCELLATION_STATE_TIMED_OUT'
    | 'NEXUS_OPERATION_CANCELLATION_STATE_BLOCKED'
    | undefined
  attempt?: number | undefined
  lastAttemptCompleteTime?: string | undefined
  lastAttemptFailure?:
    | {
        message?: string | undefined
        source?: string | undefined
        stackTrace?: string | undefined
        encodedAttributes?: {} | undefined
        cause?: Failure | undefined
        applicationFailureInfo?: ApplicationFailureInfo | undefined
        timeoutFailureInfo?: TimeoutFailureInfo | undefined
        canceledFailureInfo?: CanceledFailureInfo | undefined
        terminatedFailureInfo?: TerminatedFailureInfo | undefined
        serverFailureInfo?: ServerFailureInfo | undefined
        resetWorkflowFailureInfo?: ResetWorkflowFailureInfo | undefined
        activityFailureInfo?: ActivityFailureInfo | undefined
        childWorkflowExecutionFailureInfo?: ChildWorkflowExecutionFailureInfo | undefined
        nexusOperationExecutionFailureInfo?: NexusOperationFailureInfo | undefined
        nexusHandlerFailureInfo?: NexusHandlerFailureInfo | undefined
      }
    | undefined
  nextAttemptScheduleTime?: string | undefined
  blockedReason?: string | undefined
}
type PendingNexusOperationInfo = {
  endpoint?: string | undefined
  service?: string | undefined
  operation?: string | undefined
  operationId?: string | undefined
  scheduleToCloseTimeout?: string | undefined
  scheduledTime?: string | undefined
  state?:
    | 'PENDING_NEXUS_OPERATION_STATE_UNSPECIFIED'
    | 'PENDING_NEXUS_OPERATION_STATE_SCHEDULED'
    | 'PENDING_NEXUS_OPERATION_STATE_BACKING_OFF'
    | 'PENDING_NEXUS_OPERATION_STATE_STARTED'
    | 'PENDING_NEXUS_OPERATION_STATE_BLOCKED'
    | undefined
  attempt?: number | undefined
  lastAttemptCompleteTime?: string | undefined
  lastAttemptFailure?:
    | {
        message?: string | undefined
        source?: string | undefined
        stackTrace?: string | undefined
        encodedAttributes?: {} | undefined
        cause?: Failure | undefined
        applicationFailureInfo?: ApplicationFailureInfo | undefined
        timeoutFailureInfo?: TimeoutFailureInfo | undefined
        canceledFailureInfo?: CanceledFailureInfo | undefined
        terminatedFailureInfo?: TerminatedFailureInfo | undefined
        serverFailureInfo?: ServerFailureInfo | undefined
        resetWorkflowFailureInfo?: ResetWorkflowFailureInfo | undefined
        activityFailureInfo?: ActivityFailureInfo | undefined
        childWorkflowExecutionFailureInfo?: ChildWorkflowExecutionFailureInfo | undefined
        nexusOperationExecutionFailureInfo?: NexusOperationFailureInfo | undefined
        nexusHandlerFailureInfo?: NexusHandlerFailureInfo | undefined
      }
    | undefined
  nextAttemptScheduleTime?: string | undefined
  cancellationInfo?: NexusOperationCancellationInfo | undefined
  scheduledEventId?: string | undefined
  blockedReason?: string | undefined
  operationToken?: string | undefined
  scheduleToStartTimeout?: string | undefined
  startToCloseTimeout?: string | undefined
}
type RequestIdInfo = {
  eventType?:
    | 'EVENT_TYPE_UNSPECIFIED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_STARTED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_COMPLETED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_FAILED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_TIMED_OUT'
    | 'EVENT_TYPE_WORKFLOW_TASK_SCHEDULED'
    | 'EVENT_TYPE_WORKFLOW_TASK_STARTED'
    | 'EVENT_TYPE_WORKFLOW_TASK_COMPLETED'
    | 'EVENT_TYPE_WORKFLOW_TASK_TIMED_OUT'
    | 'EVENT_TYPE_WORKFLOW_TASK_FAILED'
    | 'EVENT_TYPE_ACTIVITY_TASK_SCHEDULED'
    | 'EVENT_TYPE_ACTIVITY_TASK_STARTED'
    | 'EVENT_TYPE_ACTIVITY_TASK_COMPLETED'
    | 'EVENT_TYPE_ACTIVITY_TASK_FAILED'
    | 'EVENT_TYPE_ACTIVITY_TASK_TIMED_OUT'
    | 'EVENT_TYPE_ACTIVITY_TASK_CANCEL_REQUESTED'
    | 'EVENT_TYPE_ACTIVITY_TASK_CANCELED'
    | 'EVENT_TYPE_TIMER_STARTED'
    | 'EVENT_TYPE_TIMER_FIRED'
    | 'EVENT_TYPE_TIMER_CANCELED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_CANCEL_REQUESTED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_CANCELED'
    | 'EVENT_TYPE_REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_INITIATED'
    | 'EVENT_TYPE_REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_FAILED'
    | 'EVENT_TYPE_EXTERNAL_WORKFLOW_EXECUTION_CANCEL_REQUESTED'
    | 'EVENT_TYPE_MARKER_RECORDED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_SIGNALED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_TERMINATED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_CONTINUED_AS_NEW'
    | 'EVENT_TYPE_START_CHILD_WORKFLOW_EXECUTION_INITIATED'
    | 'EVENT_TYPE_START_CHILD_WORKFLOW_EXECUTION_FAILED'
    | 'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_STARTED'
    | 'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_COMPLETED'
    | 'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_FAILED'
    | 'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_CANCELED'
    | 'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_TIMED_OUT'
    | 'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_TERMINATED'
    | 'EVENT_TYPE_SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_INITIATED'
    | 'EVENT_TYPE_SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED'
    | 'EVENT_TYPE_EXTERNAL_WORKFLOW_EXECUTION_SIGNALED'
    | 'EVENT_TYPE_UPSERT_WORKFLOW_SEARCH_ATTRIBUTES'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_ADMITTED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_ACCEPTED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_REJECTED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_COMPLETED'
    | 'EVENT_TYPE_WORKFLOW_PROPERTIES_MODIFIED_EXTERNALLY'
    | 'EVENT_TYPE_ACTIVITY_PROPERTIES_MODIFIED_EXTERNALLY'
    | 'EVENT_TYPE_WORKFLOW_PROPERTIES_MODIFIED'
    | 'EVENT_TYPE_NEXUS_OPERATION_SCHEDULED'
    | 'EVENT_TYPE_NEXUS_OPERATION_STARTED'
    | 'EVENT_TYPE_NEXUS_OPERATION_COMPLETED'
    | 'EVENT_TYPE_NEXUS_OPERATION_FAILED'
    | 'EVENT_TYPE_NEXUS_OPERATION_CANCELED'
    | 'EVENT_TYPE_NEXUS_OPERATION_TIMED_OUT'
    | 'EVENT_TYPE_NEXUS_OPERATION_CANCEL_REQUESTED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_OPTIONS_UPDATED'
    | 'EVENT_TYPE_NEXUS_OPERATION_CANCEL_REQUEST_COMPLETED'
    | 'EVENT_TYPE_NEXUS_OPERATION_CANCEL_REQUEST_FAILED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_PAUSED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_UNPAUSED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_TIME_SKIPPING_TRANSITIONED'
    | undefined
  eventId?: string | undefined
  buffered?: boolean | undefined
}
type WorkflowExecutionExtendedInfo = {
  executionExpirationTime?: string | undefined
  runExpirationTime?: string | undefined
  cancelRequested?: boolean | undefined
  lastResetTime?: string | undefined
  originalStartTime?: string | undefined
  resetRunId?: string | undefined
  requestIdInfos?: { [x: string]: RequestIdInfo } | undefined
  pauseInfo?:
    | {
        identity?: string | undefined
        pausedTime?: string | undefined
        reason?: string | undefined
      }
    | undefined
}
type DescribeWorkflowExecutionResponse = {
  executionConfig?: WorkflowExecutionConfig | undefined
  workflowExecutionInfo?: WorkflowExecutionInfo | undefined
  pendingActivities?: PendingActivityInfo[] | undefined
  pendingChildren?: PendingChildExecutionInfo[] | undefined
  pendingWorkflowTask?: PendingWorkflowTaskInfo | undefined
  callbacks?: CallbackInfo[] | undefined
  pendingNexusOperations?: PendingNexusOperationInfo[] | undefined
  workflowExtendedInfo?: WorkflowExecutionExtendedInfo | undefined
}
type RetryPolicy = {
  initialInterval?: string | undefined
  backoffCoefficient?: number | undefined
  maximumInterval?: string | undefined
  maximumAttempts?: number | undefined
  nonRetryableErrorTypes?: string[] | undefined
}
type WorkflowExecutionStartedEventAttributes = {
  workflowType?: WorkflowType | undefined
  parentWorkflowNamespace?: string | undefined
  parentWorkflowNamespaceId?: string | undefined
  parentWorkflowExecution?:
    | { workflowId?: string | undefined; runId?: string | undefined }
    | undefined
  parentInitiatedEventId?: string | undefined
  taskQueue?: TaskQueue | undefined
  input?: { payloads?: Payload[] | undefined } | undefined
  workflowExecutionTimeout?: string | undefined
  workflowRunTimeout?: string | undefined
  workflowTaskTimeout?: string | undefined
  continuedExecutionRunId?: string | undefined
  initiator?:
    | 'CONTINUE_AS_NEW_INITIATOR_UNSPECIFIED'
    | 'CONTINUE_AS_NEW_INITIATOR_WORKFLOW'
    | 'CONTINUE_AS_NEW_INITIATOR_RETRY'
    | 'CONTINUE_AS_NEW_INITIATOR_CRON_SCHEDULE'
    | undefined
  continuedFailure?: Failure | undefined
  lastCompletionResult?: Payloads | undefined
  originalExecutionRunId?: string | undefined
  identity?: string | undefined
  firstExecutionRunId?: string | undefined
  retryPolicy?: RetryPolicy | undefined
  attempt?: number | undefined
  workflowExecutionExpirationTime?: string | undefined
  cronSchedule?: string | undefined
  firstWorkflowTaskBackoff?: string | undefined
  memo?: Memo | undefined
  searchAttributes?: SearchAttributes | undefined
  prevAutoResetPoints?: ResetPoints | undefined
  header?: Header | undefined
  parentInitiatedEventVersion?: string | undefined
  workflowId?: string | undefined
  sourceVersionStamp?:
    | { buildId?: string | undefined; useVersioning?: boolean | undefined }
    | undefined
  completionCallbacks?: Callback[] | undefined
  rootWorkflowExecution?:
    | { workflowId?: string | undefined; runId?: string | undefined }
    | undefined
  inheritedBuildId?: string | undefined
  versioningOverride?:
    | {
        pinned?:
          | {
              behavior?:
                | 'PINNED_OVERRIDE_BEHAVIOR_UNSPECIFIED'
                | 'PINNED_OVERRIDE_BEHAVIOR_PINNED'
                | undefined
              version?:
                | { buildId?: string | undefined; deploymentName?: string | undefined }
                | undefined
            }
          | undefined
        autoUpgrade?: boolean | undefined
        behavior?:
          | 'VERSIONING_BEHAVIOR_UNSPECIFIED'
          | 'VERSIONING_BEHAVIOR_PINNED'
          | 'VERSIONING_BEHAVIOR_AUTO_UPGRADE'
          | undefined
        deployment?: { seriesName?: string | undefined; buildId?: string | undefined } | undefined
        pinnedVersion?: string | undefined
      }
    | undefined
  parentPinnedWorkerDeploymentVersion?: string | undefined
  priority?:
    | {
        priorityKey?: number | undefined
        fairnessKey?: string | undefined
        fairnessWeight?: number | undefined
      }
    | undefined
  inheritedPinnedVersion?:
    | { buildId?: string | undefined; deploymentName?: string | undefined }
    | undefined
  inheritedAutoUpgradeInfo?:
    | {
        sourceDeploymentVersion?:
          | { buildId?: string | undefined; deploymentName?: string | undefined }
          | undefined
        sourceDeploymentRevisionNumber?: string | undefined
        continueAsNewInitialVersioningBehavior?:
          | 'CONTINUE_AS_NEW_VERSIONING_BEHAVIOR_UNSPECIFIED'
          | 'CONTINUE_AS_NEW_VERSIONING_BEHAVIOR_AUTO_UPGRADE'
          | 'CONTINUE_AS_NEW_VERSIONING_BEHAVIOR_USE_RAMPING_VERSION'
          | undefined
      }
    | undefined
  eagerExecutionAccepted?: boolean | undefined
  declinedTargetVersionUpgrade?:
    | {
        deploymentVersion?: WorkerDeploymentVersion | undefined
        revisionNumber?: string | undefined
      }
    | undefined
  timeSkippingConfig?:
    | {
        enabled?: boolean | undefined
        maxSkippedDuration?: string | undefined
        maxElapsedDuration?: string | undefined
      }
    | undefined
  initialSkippedDuration?: string | undefined
}
type WorkflowExecutionCompletedEventAttributes = {
  result?: { payloads?: Payload[] | undefined } | undefined
  workflowTaskCompletedEventId?: string | undefined
  newExecutionRunId?: string | undefined
}
type WorkflowExecutionFailedEventAttributes = {
  failure?:
    | {
        message?: string | undefined
        source?: string | undefined
        stackTrace?: string | undefined
        encodedAttributes?: {} | undefined
        cause?: Failure | undefined
        applicationFailureInfo?: ApplicationFailureInfo | undefined
        timeoutFailureInfo?: TimeoutFailureInfo | undefined
        canceledFailureInfo?: CanceledFailureInfo | undefined
        terminatedFailureInfo?: TerminatedFailureInfo | undefined
        serverFailureInfo?: ServerFailureInfo | undefined
        resetWorkflowFailureInfo?: ResetWorkflowFailureInfo | undefined
        activityFailureInfo?: ActivityFailureInfo | undefined
        childWorkflowExecutionFailureInfo?: ChildWorkflowExecutionFailureInfo | undefined
        nexusOperationExecutionFailureInfo?: NexusOperationFailureInfo | undefined
        nexusHandlerFailureInfo?: NexusHandlerFailureInfo | undefined
      }
    | undefined
  retryState?:
    | 'RETRY_STATE_UNSPECIFIED'
    | 'RETRY_STATE_IN_PROGRESS'
    | 'RETRY_STATE_NON_RETRYABLE_FAILURE'
    | 'RETRY_STATE_TIMEOUT'
    | 'RETRY_STATE_MAXIMUM_ATTEMPTS_REACHED'
    | 'RETRY_STATE_RETRY_POLICY_NOT_SET'
    | 'RETRY_STATE_INTERNAL_SERVER_ERROR'
    | 'RETRY_STATE_CANCEL_REQUESTED'
    | undefined
  workflowTaskCompletedEventId?: string | undefined
  newExecutionRunId?: string | undefined
}
type WorkflowExecutionTimedOutEventAttributes = {
  retryState?:
    | 'RETRY_STATE_UNSPECIFIED'
    | 'RETRY_STATE_IN_PROGRESS'
    | 'RETRY_STATE_NON_RETRYABLE_FAILURE'
    | 'RETRY_STATE_TIMEOUT'
    | 'RETRY_STATE_MAXIMUM_ATTEMPTS_REACHED'
    | 'RETRY_STATE_RETRY_POLICY_NOT_SET'
    | 'RETRY_STATE_INTERNAL_SERVER_ERROR'
    | 'RETRY_STATE_CANCEL_REQUESTED'
    | undefined
  newExecutionRunId?: string | undefined
}
type WorkflowTaskScheduledEventAttributes = {
  taskQueue?:
    | {
        name?: string | undefined
        kind?:
          | 'TASK_QUEUE_KIND_UNSPECIFIED'
          | 'TASK_QUEUE_KIND_NORMAL'
          | 'TASK_QUEUE_KIND_STICKY'
          | 'TASK_QUEUE_KIND_WORKER_COMMANDS'
          | undefined
        normalName?: string | undefined
      }
    | undefined
  startToCloseTimeout?: string | undefined
  attempt?: number | undefined
}
type WorkflowTaskStartedEventAttributes = {
  scheduledEventId?: string | undefined
  identity?: string | undefined
  requestId?: string | undefined
  suggestContinueAsNew?: boolean | undefined
  suggestContinueAsNewReasons?:
    | (
        | 'SUGGEST_CONTINUE_AS_NEW_REASON_UNSPECIFIED'
        | 'SUGGEST_CONTINUE_AS_NEW_REASON_HISTORY_SIZE_TOO_LARGE'
        | 'SUGGEST_CONTINUE_AS_NEW_REASON_TOO_MANY_HISTORY_EVENTS'
        | 'SUGGEST_CONTINUE_AS_NEW_REASON_TOO_MANY_UPDATES'
      )[]
    | undefined
  targetWorkerDeploymentVersionChanged?: boolean | undefined
  historySizeBytes?: string | undefined
  workerVersion?: { buildId?: string | undefined; useVersioning?: boolean | undefined } | undefined
  buildIdRedirectCounter?: string | undefined
}
type WorkflowTaskCompletedEventAttributes = {
  scheduledEventId?: string | undefined
  startedEventId?: string | undefined
  identity?: string | undefined
  binaryChecksum?: string | undefined
  workerVersion?: { buildId?: string | undefined; useVersioning?: boolean | undefined } | undefined
  sdkMetadata?:
    | {
        coreUsedFlags?: number[] | undefined
        langUsedFlags?: number[] | undefined
        sdkName?: string | undefined
        sdkVersion?: string | undefined
      }
    | undefined
  meteringMetadata?: { nonfirstLocalActivityExecutionAttempts?: number | undefined } | undefined
  deployment?: { seriesName?: string | undefined; buildId?: string | undefined } | undefined
  versioningBehavior?:
    | 'VERSIONING_BEHAVIOR_UNSPECIFIED'
    | 'VERSIONING_BEHAVIOR_PINNED'
    | 'VERSIONING_BEHAVIOR_AUTO_UPGRADE'
    | undefined
  workerDeploymentVersion?: string | undefined
  workerDeploymentName?: string | undefined
  deploymentVersion?:
    | { buildId?: string | undefined; deploymentName?: string | undefined }
    | undefined
}
type WorkflowTaskTimedOutEventAttributes = {
  scheduledEventId?: string | undefined
  startedEventId?: string | undefined
  timeoutType?:
    | 'TIMEOUT_TYPE_UNSPECIFIED'
    | 'TIMEOUT_TYPE_START_TO_CLOSE'
    | 'TIMEOUT_TYPE_SCHEDULE_TO_START'
    | 'TIMEOUT_TYPE_SCHEDULE_TO_CLOSE'
    | 'TIMEOUT_TYPE_HEARTBEAT'
    | undefined
}
type WorkflowTaskFailedEventAttributes = {
  scheduledEventId?: string | undefined
  startedEventId?: string | undefined
  cause?:
    | 'WORKFLOW_TASK_FAILED_CAUSE_UNSPECIFIED'
    | 'WORKFLOW_TASK_FAILED_CAUSE_UNHANDLED_COMMAND'
    | 'WORKFLOW_TASK_FAILED_CAUSE_BAD_SCHEDULE_ACTIVITY_ATTRIBUTES'
    | 'WORKFLOW_TASK_FAILED_CAUSE_BAD_REQUEST_CANCEL_ACTIVITY_ATTRIBUTES'
    | 'WORKFLOW_TASK_FAILED_CAUSE_BAD_START_TIMER_ATTRIBUTES'
    | 'WORKFLOW_TASK_FAILED_CAUSE_BAD_CANCEL_TIMER_ATTRIBUTES'
    | 'WORKFLOW_TASK_FAILED_CAUSE_BAD_RECORD_MARKER_ATTRIBUTES'
    | 'WORKFLOW_TASK_FAILED_CAUSE_BAD_COMPLETE_WORKFLOW_EXECUTION_ATTRIBUTES'
    | 'WORKFLOW_TASK_FAILED_CAUSE_BAD_FAIL_WORKFLOW_EXECUTION_ATTRIBUTES'
    | 'WORKFLOW_TASK_FAILED_CAUSE_BAD_CANCEL_WORKFLOW_EXECUTION_ATTRIBUTES'
    | 'WORKFLOW_TASK_FAILED_CAUSE_BAD_REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_ATTRIBUTES'
    | 'WORKFLOW_TASK_FAILED_CAUSE_BAD_CONTINUE_AS_NEW_ATTRIBUTES'
    | 'WORKFLOW_TASK_FAILED_CAUSE_START_TIMER_DUPLICATE_ID'
    | 'WORKFLOW_TASK_FAILED_CAUSE_RESET_STICKY_TASK_QUEUE'
    | 'WORKFLOW_TASK_FAILED_CAUSE_WORKFLOW_WORKER_UNHANDLED_FAILURE'
    | 'WORKFLOW_TASK_FAILED_CAUSE_BAD_SIGNAL_WORKFLOW_EXECUTION_ATTRIBUTES'
    | 'WORKFLOW_TASK_FAILED_CAUSE_BAD_START_CHILD_EXECUTION_ATTRIBUTES'
    | 'WORKFLOW_TASK_FAILED_CAUSE_FORCE_CLOSE_COMMAND'
    | 'WORKFLOW_TASK_FAILED_CAUSE_FAILOVER_CLOSE_COMMAND'
    | 'WORKFLOW_TASK_FAILED_CAUSE_BAD_SIGNAL_INPUT_SIZE'
    | 'WORKFLOW_TASK_FAILED_CAUSE_RESET_WORKFLOW'
    | 'WORKFLOW_TASK_FAILED_CAUSE_BAD_BINARY'
    | 'WORKFLOW_TASK_FAILED_CAUSE_SCHEDULE_ACTIVITY_DUPLICATE_ID'
    | 'WORKFLOW_TASK_FAILED_CAUSE_BAD_SEARCH_ATTRIBUTES'
    | 'WORKFLOW_TASK_FAILED_CAUSE_NON_DETERMINISTIC_ERROR'
    | 'WORKFLOW_TASK_FAILED_CAUSE_BAD_MODIFY_WORKFLOW_PROPERTIES_ATTRIBUTES'
    | 'WORKFLOW_TASK_FAILED_CAUSE_PENDING_CHILD_WORKFLOWS_LIMIT_EXCEEDED'
    | 'WORKFLOW_TASK_FAILED_CAUSE_PENDING_ACTIVITIES_LIMIT_EXCEEDED'
    | 'WORKFLOW_TASK_FAILED_CAUSE_PENDING_SIGNALS_LIMIT_EXCEEDED'
    | 'WORKFLOW_TASK_FAILED_CAUSE_PENDING_REQUEST_CANCEL_LIMIT_EXCEEDED'
    | 'WORKFLOW_TASK_FAILED_CAUSE_BAD_UPDATE_WORKFLOW_EXECUTION_MESSAGE'
    | 'WORKFLOW_TASK_FAILED_CAUSE_UNHANDLED_UPDATE'
    | 'WORKFLOW_TASK_FAILED_CAUSE_BAD_SCHEDULE_NEXUS_OPERATION_ATTRIBUTES'
    | 'WORKFLOW_TASK_FAILED_CAUSE_PENDING_NEXUS_OPERATIONS_LIMIT_EXCEEDED'
    | 'WORKFLOW_TASK_FAILED_CAUSE_BAD_REQUEST_CANCEL_NEXUS_OPERATION_ATTRIBUTES'
    | 'WORKFLOW_TASK_FAILED_CAUSE_FEATURE_DISABLED'
    | 'WORKFLOW_TASK_FAILED_CAUSE_GRPC_MESSAGE_TOO_LARGE'
    | 'WORKFLOW_TASK_FAILED_CAUSE_PAYLOADS_TOO_LARGE'
    | undefined
  failure?:
    | {
        message?: string | undefined
        source?: string | undefined
        stackTrace?: string | undefined
        encodedAttributes?: {} | undefined
        cause?: Failure | undefined
        applicationFailureInfo?: ApplicationFailureInfo | undefined
        timeoutFailureInfo?: TimeoutFailureInfo | undefined
        canceledFailureInfo?: CanceledFailureInfo | undefined
        terminatedFailureInfo?: TerminatedFailureInfo | undefined
        serverFailureInfo?: ServerFailureInfo | undefined
        resetWorkflowFailureInfo?: ResetWorkflowFailureInfo | undefined
        activityFailureInfo?: ActivityFailureInfo | undefined
        childWorkflowExecutionFailureInfo?: ChildWorkflowExecutionFailureInfo | undefined
        nexusOperationExecutionFailureInfo?: NexusOperationFailureInfo | undefined
        nexusHandlerFailureInfo?: NexusHandlerFailureInfo | undefined
      }
    | undefined
  identity?: string | undefined
  baseRunId?: string | undefined
  newRunId?: string | undefined
  forkEventVersion?: string | undefined
  binaryChecksum?: string | undefined
  workerVersion?: { buildId?: string | undefined; useVersioning?: boolean | undefined } | undefined
}
type ActivityTaskScheduledEventAttributes = {
  activityId?: string | undefined
  activityType?: ActivityType | undefined
  taskQueue?: TaskQueue | undefined
  header?: Header | undefined
  input?: Payloads | undefined
  scheduleToCloseTimeout?: string | undefined
  scheduleToStartTimeout?: string | undefined
  startToCloseTimeout?: string | undefined
  heartbeatTimeout?: string | undefined
  workflowTaskCompletedEventId?: string | undefined
  retryPolicy?:
    | {
        initialInterval?: string | undefined
        backoffCoefficient?: number | undefined
        maximumInterval?: string | undefined
        maximumAttempts?: number | undefined
        nonRetryableErrorTypes?: string[] | undefined
      }
    | undefined
  useWorkflowBuildId?: boolean | undefined
  priority?:
    | {
        priorityKey?: number | undefined
        fairnessKey?: string | undefined
        fairnessWeight?: number | undefined
      }
    | undefined
}
type ActivityTaskStartedEventAttributes = {
  scheduledEventId?: string | undefined
  identity?: string | undefined
  requestId?: string | undefined
  attempt?: number | undefined
  lastFailure?:
    | {
        message?: string | undefined
        source?: string | undefined
        stackTrace?: string | undefined
        encodedAttributes?: {} | undefined
        cause?: Failure | undefined
        applicationFailureInfo?: ApplicationFailureInfo | undefined
        timeoutFailureInfo?: TimeoutFailureInfo | undefined
        canceledFailureInfo?: CanceledFailureInfo | undefined
        terminatedFailureInfo?: TerminatedFailureInfo | undefined
        serverFailureInfo?: ServerFailureInfo | undefined
        resetWorkflowFailureInfo?: ResetWorkflowFailureInfo | undefined
        activityFailureInfo?: ActivityFailureInfo | undefined
        childWorkflowExecutionFailureInfo?: ChildWorkflowExecutionFailureInfo | undefined
        nexusOperationExecutionFailureInfo?: NexusOperationFailureInfo | undefined
        nexusHandlerFailureInfo?: NexusHandlerFailureInfo | undefined
      }
    | undefined
  workerVersion?: { buildId?: string | undefined; useVersioning?: boolean | undefined } | undefined
  buildIdRedirectCounter?: string | undefined
}
type ActivityTaskCompletedEventAttributes = {
  result?: { payloads?: Payload[] | undefined } | undefined
  scheduledEventId?: string | undefined
  startedEventId?: string | undefined
  identity?: string | undefined
  workerVersion?: { buildId?: string | undefined; useVersioning?: boolean | undefined } | undefined
}
type ActivityTaskFailedEventAttributes = {
  failure?:
    | {
        message?: string | undefined
        source?: string | undefined
        stackTrace?: string | undefined
        encodedAttributes?: {} | undefined
        cause?: Failure | undefined
        applicationFailureInfo?: ApplicationFailureInfo | undefined
        timeoutFailureInfo?: TimeoutFailureInfo | undefined
        canceledFailureInfo?: CanceledFailureInfo | undefined
        terminatedFailureInfo?: TerminatedFailureInfo | undefined
        serverFailureInfo?: ServerFailureInfo | undefined
        resetWorkflowFailureInfo?: ResetWorkflowFailureInfo | undefined
        activityFailureInfo?: ActivityFailureInfo | undefined
        childWorkflowExecutionFailureInfo?: ChildWorkflowExecutionFailureInfo | undefined
        nexusOperationExecutionFailureInfo?: NexusOperationFailureInfo | undefined
        nexusHandlerFailureInfo?: NexusHandlerFailureInfo | undefined
      }
    | undefined
  scheduledEventId?: string | undefined
  startedEventId?: string | undefined
  identity?: string | undefined
  retryState?:
    | 'RETRY_STATE_UNSPECIFIED'
    | 'RETRY_STATE_IN_PROGRESS'
    | 'RETRY_STATE_NON_RETRYABLE_FAILURE'
    | 'RETRY_STATE_TIMEOUT'
    | 'RETRY_STATE_MAXIMUM_ATTEMPTS_REACHED'
    | 'RETRY_STATE_RETRY_POLICY_NOT_SET'
    | 'RETRY_STATE_INTERNAL_SERVER_ERROR'
    | 'RETRY_STATE_CANCEL_REQUESTED'
    | undefined
  workerVersion?: { buildId?: string | undefined; useVersioning?: boolean | undefined } | undefined
}
type ActivityTaskTimedOutEventAttributes = {
  failure?:
    | {
        message?: string | undefined
        source?: string | undefined
        stackTrace?: string | undefined
        encodedAttributes?: {} | undefined
        cause?: Failure | undefined
        applicationFailureInfo?: ApplicationFailureInfo | undefined
        timeoutFailureInfo?: TimeoutFailureInfo | undefined
        canceledFailureInfo?: CanceledFailureInfo | undefined
        terminatedFailureInfo?: TerminatedFailureInfo | undefined
        serverFailureInfo?: ServerFailureInfo | undefined
        resetWorkflowFailureInfo?: ResetWorkflowFailureInfo | undefined
        activityFailureInfo?: ActivityFailureInfo | undefined
        childWorkflowExecutionFailureInfo?: ChildWorkflowExecutionFailureInfo | undefined
        nexusOperationExecutionFailureInfo?: NexusOperationFailureInfo | undefined
        nexusHandlerFailureInfo?: NexusHandlerFailureInfo | undefined
      }
    | undefined
  scheduledEventId?: string | undefined
  startedEventId?: string | undefined
  retryState?:
    | 'RETRY_STATE_UNSPECIFIED'
    | 'RETRY_STATE_IN_PROGRESS'
    | 'RETRY_STATE_NON_RETRYABLE_FAILURE'
    | 'RETRY_STATE_TIMEOUT'
    | 'RETRY_STATE_MAXIMUM_ATTEMPTS_REACHED'
    | 'RETRY_STATE_RETRY_POLICY_NOT_SET'
    | 'RETRY_STATE_INTERNAL_SERVER_ERROR'
    | 'RETRY_STATE_CANCEL_REQUESTED'
    | undefined
}
type TimerStartedEventAttributes = {
  timerId?: string | undefined
  startToFireTimeout?: string | undefined
  workflowTaskCompletedEventId?: string | undefined
}
type TimerFiredEventAttributes = {
  timerId?: string | undefined
  startedEventId?: string | undefined
}
type ActivityTaskCancelRequestedEventAttributes = {
  scheduledEventId?: string | undefined
  workflowTaskCompletedEventId?: string | undefined
}
type ActivityTaskCanceledEventAttributes = {
  details?: { payloads?: Payload[] | undefined } | undefined
  latestCancelRequestedEventId?: string | undefined
  scheduledEventId?: string | undefined
  startedEventId?: string | undefined
  identity?: string | undefined
  workerVersion?: { buildId?: string | undefined; useVersioning?: boolean | undefined } | undefined
}
type TimerCanceledEventAttributes = {
  timerId?: string | undefined
  startedEventId?: string | undefined
  workflowTaskCompletedEventId?: string | undefined
  identity?: string | undefined
}
type MarkerRecordedEventAttributes = {
  markerName?: string | undefined
  details?: { [x: string]: Payloads } | undefined
  workflowTaskCompletedEventId?: string | undefined
  header?: Header | undefined
  failure?:
    | {
        message?: string | undefined
        source?: string | undefined
        stackTrace?: string | undefined
        encodedAttributes?: {} | undefined
        cause?: Failure | undefined
        applicationFailureInfo?: ApplicationFailureInfo | undefined
        timeoutFailureInfo?: TimeoutFailureInfo | undefined
        canceledFailureInfo?: CanceledFailureInfo | undefined
        terminatedFailureInfo?: TerminatedFailureInfo | undefined
        serverFailureInfo?: ServerFailureInfo | undefined
        resetWorkflowFailureInfo?: ResetWorkflowFailureInfo | undefined
        activityFailureInfo?: ActivityFailureInfo | undefined
        childWorkflowExecutionFailureInfo?: ChildWorkflowExecutionFailureInfo | undefined
        nexusOperationExecutionFailureInfo?: NexusOperationFailureInfo | undefined
        nexusHandlerFailureInfo?: NexusHandlerFailureInfo | undefined
      }
    | undefined
}
type WorkflowExecutionSignaledEventAttributes = {
  signalName?: string | undefined
  input?: { payloads?: Payload[] | undefined } | undefined
  identity?: string | undefined
  header?: { fields?: { [x: string]: Payload } | undefined } | undefined
  skipGenerateWorkflowTask?: boolean | undefined
  externalWorkflowExecution?:
    | { workflowId?: string | undefined; runId?: string | undefined }
    | undefined
  requestId?: string | undefined
}
type WorkflowExecutionTerminatedEventAttributes = {
  reason?: string | undefined
  details?: Payloads | undefined
  identity?: string | undefined
}
type WorkflowExecutionCancelRequestedEventAttributes = {
  cause?: string | undefined
  externalInitiatedEventId?: string | undefined
  externalWorkflowExecution?: WorkflowExecution | undefined
  identity?: string | undefined
}
type WorkflowExecutionCanceledEventAttributes = {
  workflowTaskCompletedEventId?: string | undefined
  details?: Payloads | undefined
}
type RequestCancelExternalWorkflowExecutionInitiatedEventAttributes = {
  workflowTaskCompletedEventId?: string | undefined
  namespace?: string | undefined
  namespaceId?: string | undefined
  workflowExecution?: WorkflowExecution | undefined
  control?: string | undefined
  childWorkflowOnly?: boolean | undefined
  reason?: string | undefined
}
type RequestCancelExternalWorkflowExecutionFailedEventAttributes = {
  cause?:
    | 'CANCEL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_UNSPECIFIED'
    | 'CANCEL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_EXTERNAL_WORKFLOW_EXECUTION_NOT_FOUND'
    | 'CANCEL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_NAMESPACE_NOT_FOUND'
    | undefined
  workflowTaskCompletedEventId?: string | undefined
  namespace?: string | undefined
  namespaceId?: string | undefined
  workflowExecution?: WorkflowExecution | undefined
  initiatedEventId?: string | undefined
  control?: string | undefined
}
type ExternalWorkflowExecutionCancelRequestedEventAttributes = {
  initiatedEventId?: string | undefined
  namespace?: string | undefined
  namespaceId?: string | undefined
  workflowExecution?: WorkflowExecution | undefined
}
type WorkflowExecutionContinuedAsNewEventAttributes = {
  newExecutionRunId?: string | undefined
  workflowType?: WorkflowType | undefined
  taskQueue?: TaskQueue | undefined
  input?: Payloads | undefined
  workflowRunTimeout?: string | undefined
  workflowTaskTimeout?: string | undefined
  workflowTaskCompletedEventId?: string | undefined
  backoffStartInterval?: string | undefined
  initiator?:
    | 'CONTINUE_AS_NEW_INITIATOR_UNSPECIFIED'
    | 'CONTINUE_AS_NEW_INITIATOR_WORKFLOW'
    | 'CONTINUE_AS_NEW_INITIATOR_RETRY'
    | 'CONTINUE_AS_NEW_INITIATOR_CRON_SCHEDULE'
    | undefined
  failure?:
    | {
        message?: string | undefined
        source?: string | undefined
        stackTrace?: string | undefined
        encodedAttributes?: {} | undefined
        cause?: Failure | undefined
        applicationFailureInfo?: ApplicationFailureInfo | undefined
        timeoutFailureInfo?: TimeoutFailureInfo | undefined
        canceledFailureInfo?: CanceledFailureInfo | undefined
        terminatedFailureInfo?: TerminatedFailureInfo | undefined
        serverFailureInfo?: ServerFailureInfo | undefined
        resetWorkflowFailureInfo?: ResetWorkflowFailureInfo | undefined
        activityFailureInfo?: ActivityFailureInfo | undefined
        childWorkflowExecutionFailureInfo?: ChildWorkflowExecutionFailureInfo | undefined
        nexusOperationExecutionFailureInfo?: NexusOperationFailureInfo | undefined
        nexusHandlerFailureInfo?: NexusHandlerFailureInfo | undefined
      }
    | undefined
  lastCompletionResult?: { payloads?: Payload[] | undefined } | undefined
  header?: Header | undefined
  memo?: Memo | undefined
  searchAttributes?: SearchAttributes | undefined
  inheritBuildId?: boolean | undefined
  initialVersioningBehavior?:
    | 'CONTINUE_AS_NEW_VERSIONING_BEHAVIOR_UNSPECIFIED'
    | 'CONTINUE_AS_NEW_VERSIONING_BEHAVIOR_AUTO_UPGRADE'
    | 'CONTINUE_AS_NEW_VERSIONING_BEHAVIOR_USE_RAMPING_VERSION'
    | undefined
}
type StartChildWorkflowExecutionInitiatedEventAttributes = {
  namespace?: string | undefined
  namespaceId?: string | undefined
  workflowId?: string | undefined
  workflowType?: WorkflowType | undefined
  taskQueue?: TaskQueue | undefined
  input?: Payloads | undefined
  workflowExecutionTimeout?: string | undefined
  workflowRunTimeout?: string | undefined
  workflowTaskTimeout?: string | undefined
  parentClosePolicy?:
    | 'PARENT_CLOSE_POLICY_UNSPECIFIED'
    | 'PARENT_CLOSE_POLICY_TERMINATE'
    | 'PARENT_CLOSE_POLICY_ABANDON'
    | 'PARENT_CLOSE_POLICY_REQUEST_CANCEL'
    | undefined
  control?: string | undefined
  workflowTaskCompletedEventId?: string | undefined
  workflowIdReusePolicy?:
    | 'WORKFLOW_ID_REUSE_POLICY_UNSPECIFIED'
    | 'WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE'
    | 'WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE_FAILED_ONLY'
    | 'WORKFLOW_ID_REUSE_POLICY_REJECT_DUPLICATE'
    | 'WORKFLOW_ID_REUSE_POLICY_TERMINATE_IF_RUNNING'
    | undefined
  retryPolicy?: RetryPolicy | undefined
  cronSchedule?: string | undefined
  header?: Header | undefined
  memo?: Memo | undefined
  searchAttributes?: SearchAttributes | undefined
  inheritBuildId?: boolean | undefined
  priority?:
    | {
        priorityKey?: number | undefined
        fairnessKey?: string | undefined
        fairnessWeight?: number | undefined
      }
    | undefined
  timeSkippingConfig?:
    | {
        enabled?: boolean | undefined
        maxSkippedDuration?: string | undefined
        maxElapsedDuration?: string | undefined
      }
    | undefined
  initialSkippedDuration?: string | undefined
}
type StartChildWorkflowExecutionFailedEventAttributes = {
  namespace?: string | undefined
  namespaceId?: string | undefined
  workflowId?: string | undefined
  workflowType?: WorkflowType | undefined
  cause?:
    | 'START_CHILD_WORKFLOW_EXECUTION_FAILED_CAUSE_UNSPECIFIED'
    | 'START_CHILD_WORKFLOW_EXECUTION_FAILED_CAUSE_WORKFLOW_ALREADY_EXISTS'
    | 'START_CHILD_WORKFLOW_EXECUTION_FAILED_CAUSE_NAMESPACE_NOT_FOUND'
    | undefined
  control?: string | undefined
  initiatedEventId?: string | undefined
  workflowTaskCompletedEventId?: string | undefined
}
type ChildWorkflowExecutionStartedEventAttributes = {
  namespace?: string | undefined
  namespaceId?: string | undefined
  initiatedEventId?: string | undefined
  workflowExecution?: WorkflowExecution | undefined
  workflowType?: WorkflowType | undefined
  header?: Header | undefined
}
type ChildWorkflowExecutionCompletedEventAttributes = {
  result?: Payloads | undefined
  namespace?: string | undefined
  namespaceId?: string | undefined
  workflowExecution?: WorkflowExecution | undefined
  workflowType?: WorkflowType | undefined
  initiatedEventId?: string | undefined
  startedEventId?: string | undefined
}
type ChildWorkflowExecutionFailedEventAttributes = {
  failure?: Failure | undefined
  namespace?: string | undefined
  namespaceId?: string | undefined
  workflowExecution?: WorkflowExecution | undefined
  workflowType?: WorkflowType | undefined
  initiatedEventId?: string | undefined
  startedEventId?: string | undefined
  retryState?:
    | 'RETRY_STATE_UNSPECIFIED'
    | 'RETRY_STATE_IN_PROGRESS'
    | 'RETRY_STATE_NON_RETRYABLE_FAILURE'
    | 'RETRY_STATE_TIMEOUT'
    | 'RETRY_STATE_MAXIMUM_ATTEMPTS_REACHED'
    | 'RETRY_STATE_RETRY_POLICY_NOT_SET'
    | 'RETRY_STATE_INTERNAL_SERVER_ERROR'
    | 'RETRY_STATE_CANCEL_REQUESTED'
    | undefined
}
type ChildWorkflowExecutionCanceledEventAttributes = {
  details?: Payloads | undefined
  namespace?: string | undefined
  namespaceId?: string | undefined
  workflowExecution?: WorkflowExecution | undefined
  workflowType?: WorkflowType | undefined
  initiatedEventId?: string | undefined
  startedEventId?: string | undefined
}
type ChildWorkflowExecutionTimedOutEventAttributes = {
  namespace?: string | undefined
  namespaceId?: string | undefined
  workflowExecution?: WorkflowExecution | undefined
  workflowType?: WorkflowType | undefined
  initiatedEventId?: string | undefined
  startedEventId?: string | undefined
  retryState?:
    | 'RETRY_STATE_UNSPECIFIED'
    | 'RETRY_STATE_IN_PROGRESS'
    | 'RETRY_STATE_NON_RETRYABLE_FAILURE'
    | 'RETRY_STATE_TIMEOUT'
    | 'RETRY_STATE_MAXIMUM_ATTEMPTS_REACHED'
    | 'RETRY_STATE_RETRY_POLICY_NOT_SET'
    | 'RETRY_STATE_INTERNAL_SERVER_ERROR'
    | 'RETRY_STATE_CANCEL_REQUESTED'
    | undefined
}
type ChildWorkflowExecutionTerminatedEventAttributes = {
  namespace?: string | undefined
  namespaceId?: string | undefined
  workflowExecution?: WorkflowExecution | undefined
  workflowType?: WorkflowType | undefined
  initiatedEventId?: string | undefined
  startedEventId?: string | undefined
}
type SignalExternalWorkflowExecutionInitiatedEventAttributes = {
  workflowTaskCompletedEventId?: string | undefined
  namespace?: string | undefined
  namespaceId?: string | undefined
  workflowExecution?: WorkflowExecution | undefined
  signalName?: string | undefined
  input?: { payloads?: Payload[] | undefined } | undefined
  control?: string | undefined
  childWorkflowOnly?: boolean | undefined
  header?: Header | undefined
}
type SignalExternalWorkflowExecutionFailedEventAttributes = {
  cause?:
    | 'SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_UNSPECIFIED'
    | 'SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_EXTERNAL_WORKFLOW_EXECUTION_NOT_FOUND'
    | 'SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_NAMESPACE_NOT_FOUND'
    | 'SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_SIGNAL_COUNT_LIMIT_EXCEEDED'
    | undefined
  workflowTaskCompletedEventId?: string | undefined
  namespace?: string | undefined
  namespaceId?: string | undefined
  workflowExecution?: WorkflowExecution | undefined
  initiatedEventId?: string | undefined
  control?: string | undefined
}
type ExternalWorkflowExecutionSignaledEventAttributes = {
  initiatedEventId?: string | undefined
  namespace?: string | undefined
  namespaceId?: string | undefined
  workflowExecution?: WorkflowExecution | undefined
  control?: string | undefined
}
type UpsertWorkflowSearchAttributesEventAttributes = {
  workflowTaskCompletedEventId?: string | undefined
  searchAttributes?: SearchAttributes | undefined
}
type Meta = { updateId?: string | undefined; identity?: string | undefined }
type Input = {
  header?: { fields?: { [x: string]: Payload } | undefined } | undefined
  name?: string | undefined
  args?: { payloads?: Payload[] | undefined } | undefined
}
type WorkflowExecutionUpdateAcceptedEventAttributes = {
  protocolInstanceId?: string | undefined
  acceptedRequestMessageId?: string | undefined
  acceptedRequestSequencingEventId?: string | undefined
  acceptedRequest?: { meta?: Meta | undefined; input?: Input | undefined } | undefined
}
type WorkflowExecutionUpdateRejectedEventAttributes = {
  protocolInstanceId?: string | undefined
  rejectedRequestMessageId?: string | undefined
  rejectedRequestSequencingEventId?: string | undefined
  rejectedRequest?: { meta?: Meta | undefined; input?: Input | undefined } | undefined
  failure?:
    | {
        message?: string | undefined
        source?: string | undefined
        stackTrace?: string | undefined
        encodedAttributes?: {} | undefined
        cause?: Failure | undefined
        applicationFailureInfo?: ApplicationFailureInfo | undefined
        timeoutFailureInfo?: TimeoutFailureInfo | undefined
        canceledFailureInfo?: CanceledFailureInfo | undefined
        terminatedFailureInfo?: TerminatedFailureInfo | undefined
        serverFailureInfo?: ServerFailureInfo | undefined
        resetWorkflowFailureInfo?: ResetWorkflowFailureInfo | undefined
        activityFailureInfo?: ActivityFailureInfo | undefined
        childWorkflowExecutionFailureInfo?: ChildWorkflowExecutionFailureInfo | undefined
        nexusOperationExecutionFailureInfo?: NexusOperationFailureInfo | undefined
        nexusHandlerFailureInfo?: NexusHandlerFailureInfo | undefined
      }
    | undefined
}
type WorkflowExecutionUpdateCompletedEventAttributes = {
  meta?: { updateId?: string | undefined; identity?: string | undefined } | undefined
  acceptedEventId?: string | undefined
  outcome?: { success?: Payloads | undefined; failure?: Failure | undefined } | undefined
}
type WorkflowPropertiesModifiedExternallyEventAttributes = {
  newTaskQueue?: string | undefined
  newWorkflowTaskTimeout?: string | undefined
  newWorkflowRunTimeout?: string | undefined
  newWorkflowExecutionTimeout?: string | undefined
  upsertedMemo?: { fields?: { [x: string]: Payload } | undefined } | undefined
}
type ActivityPropertiesModifiedExternallyEventAttributes = {
  scheduledEventId?: string | undefined
  newRetryPolicy?:
    | {
        initialInterval?: string | undefined
        backoffCoefficient?: number | undefined
        maximumInterval?: string | undefined
        maximumAttempts?: number | undefined
        nonRetryableErrorTypes?: string[] | undefined
      }
    | undefined
}
type WorkflowPropertiesModifiedEventAttributes = {
  workflowTaskCompletedEventId?: string | undefined
  upsertedMemo?: { fields?: { [x: string]: Payload } | undefined } | undefined
}
type WorkflowExecutionUpdateAdmittedEventAttributes = {
  request?: { meta?: Meta | undefined; input?: Input | undefined } | undefined
  origin?:
    | 'UPDATE_ADMITTED_EVENT_ORIGIN_UNSPECIFIED'
    | 'UPDATE_ADMITTED_EVENT_ORIGIN_REAPPLY'
    | undefined
}
type NexusOperationScheduledEventAttributes = {
  endpoint?: string | undefined
  service?: string | undefined
  operation?: string | undefined
  input?: {} | undefined
  scheduleToCloseTimeout?: string | undefined
  nexusHeader?: { [x: string]: string } | undefined
  workflowTaskCompletedEventId?: string | undefined
  requestId?: string | undefined
  endpointId?: string | undefined
  scheduleToStartTimeout?: string | undefined
  startToCloseTimeout?: string | undefined
}
type NexusOperationStartedEventAttributes = {
  scheduledEventId?: string | undefined
  operationId?: string | undefined
  requestId?: string | undefined
  operationToken?: string | undefined
}
type NexusOperationCompletedEventAttributes = {
  scheduledEventId?: string | undefined
  result?: {} | undefined
  requestId?: string | undefined
}
type NexusOperationFailedEventAttributes = {
  scheduledEventId?: string | undefined
  failure?:
    | {
        message?: string | undefined
        source?: string | undefined
        stackTrace?: string | undefined
        encodedAttributes?: {} | undefined
        cause?: Failure | undefined
        applicationFailureInfo?: ApplicationFailureInfo | undefined
        timeoutFailureInfo?: TimeoutFailureInfo | undefined
        canceledFailureInfo?: CanceledFailureInfo | undefined
        terminatedFailureInfo?: TerminatedFailureInfo | undefined
        serverFailureInfo?: ServerFailureInfo | undefined
        resetWorkflowFailureInfo?: ResetWorkflowFailureInfo | undefined
        activityFailureInfo?: ActivityFailureInfo | undefined
        childWorkflowExecutionFailureInfo?: ChildWorkflowExecutionFailureInfo | undefined
        nexusOperationExecutionFailureInfo?: NexusOperationFailureInfo | undefined
        nexusHandlerFailureInfo?: NexusHandlerFailureInfo | undefined
      }
    | undefined
  requestId?: string | undefined
}
type NexusOperationCanceledEventAttributes = {
  scheduledEventId?: string | undefined
  failure?:
    | {
        message?: string | undefined
        source?: string | undefined
        stackTrace?: string | undefined
        encodedAttributes?: {} | undefined
        cause?: Failure | undefined
        applicationFailureInfo?: ApplicationFailureInfo | undefined
        timeoutFailureInfo?: TimeoutFailureInfo | undefined
        canceledFailureInfo?: CanceledFailureInfo | undefined
        terminatedFailureInfo?: TerminatedFailureInfo | undefined
        serverFailureInfo?: ServerFailureInfo | undefined
        resetWorkflowFailureInfo?: ResetWorkflowFailureInfo | undefined
        activityFailureInfo?: ActivityFailureInfo | undefined
        childWorkflowExecutionFailureInfo?: ChildWorkflowExecutionFailureInfo | undefined
        nexusOperationExecutionFailureInfo?: NexusOperationFailureInfo | undefined
        nexusHandlerFailureInfo?: NexusHandlerFailureInfo | undefined
      }
    | undefined
  requestId?: string | undefined
}
type NexusOperationTimedOutEventAttributes = {
  scheduledEventId?: string | undefined
  failure?:
    | {
        message?: string | undefined
        source?: string | undefined
        stackTrace?: string | undefined
        encodedAttributes?: {} | undefined
        cause?: Failure | undefined
        applicationFailureInfo?: ApplicationFailureInfo | undefined
        timeoutFailureInfo?: TimeoutFailureInfo | undefined
        canceledFailureInfo?: CanceledFailureInfo | undefined
        terminatedFailureInfo?: TerminatedFailureInfo | undefined
        serverFailureInfo?: ServerFailureInfo | undefined
        resetWorkflowFailureInfo?: ResetWorkflowFailureInfo | undefined
        activityFailureInfo?: ActivityFailureInfo | undefined
        childWorkflowExecutionFailureInfo?: ChildWorkflowExecutionFailureInfo | undefined
        nexusOperationExecutionFailureInfo?: NexusOperationFailureInfo | undefined
        nexusHandlerFailureInfo?: NexusHandlerFailureInfo | undefined
      }
    | undefined
  requestId?: string | undefined
}
type NexusOperationCancelRequestedEventAttributes = {
  scheduledEventId?: string | undefined
  workflowTaskCompletedEventId?: string | undefined
}
type WorkflowExecutionOptionsUpdatedEventAttributes = {
  versioningOverride?:
    | {
        pinned?:
          | {
              behavior?:
                | 'PINNED_OVERRIDE_BEHAVIOR_UNSPECIFIED'
                | 'PINNED_OVERRIDE_BEHAVIOR_PINNED'
                | undefined
              version?:
                | { buildId?: string | undefined; deploymentName?: string | undefined }
                | undefined
            }
          | undefined
        autoUpgrade?: boolean | undefined
        behavior?:
          | 'VERSIONING_BEHAVIOR_UNSPECIFIED'
          | 'VERSIONING_BEHAVIOR_PINNED'
          | 'VERSIONING_BEHAVIOR_AUTO_UPGRADE'
          | undefined
        deployment?: { seriesName?: string | undefined; buildId?: string | undefined } | undefined
        pinnedVersion?: string | undefined
      }
    | undefined
  unsetVersioningOverride?: boolean | undefined
  attachedRequestId?: string | undefined
  attachedCompletionCallbacks?: Callback[] | undefined
  identity?: string | undefined
  priority?:
    | {
        priorityKey?: number | undefined
        fairnessKey?: string | undefined
        fairnessWeight?: number | undefined
      }
    | undefined
  timeSkippingConfig?:
    | {
        enabled?: boolean | undefined
        maxSkippedDuration?: string | undefined
        maxElapsedDuration?: string | undefined
      }
    | undefined
}
type NexusOperationCancelRequestCompletedEventAttributes = {
  requestedEventId?: string | undefined
  workflowTaskCompletedEventId?: string | undefined
  scheduledEventId?: string | undefined
}
type NexusOperationCancelRequestFailedEventAttributes = {
  requestedEventId?: string | undefined
  workflowTaskCompletedEventId?: string | undefined
  failure?:
    | {
        message?: string | undefined
        source?: string | undefined
        stackTrace?: string | undefined
        encodedAttributes?: {} | undefined
        cause?: Failure | undefined
        applicationFailureInfo?: ApplicationFailureInfo | undefined
        timeoutFailureInfo?: TimeoutFailureInfo | undefined
        canceledFailureInfo?: CanceledFailureInfo | undefined
        terminatedFailureInfo?: TerminatedFailureInfo | undefined
        serverFailureInfo?: ServerFailureInfo | undefined
        resetWorkflowFailureInfo?: ResetWorkflowFailureInfo | undefined
        activityFailureInfo?: ActivityFailureInfo | undefined
        childWorkflowExecutionFailureInfo?: ChildWorkflowExecutionFailureInfo | undefined
        nexusOperationExecutionFailureInfo?: NexusOperationFailureInfo | undefined
        nexusHandlerFailureInfo?: NexusHandlerFailureInfo | undefined
      }
    | undefined
  scheduledEventId?: string | undefined
}
type WorkflowExecutionPausedEventAttributes = {
  identity?: string | undefined
  reason?: string | undefined
  requestId?: string | undefined
}
type WorkflowExecutionUnpausedEventAttributes = {
  identity?: string | undefined
  reason?: string | undefined
  requestId?: string | undefined
}
type WorkflowExecutionTimeSkippingTransitionedEventAttributes = {
  targetTime?: string | undefined
  disabledAfterBound?: boolean | undefined
  wallClockTime?: string | undefined
}
type HistoryEvent = {
  eventId?: string | undefined
  eventTime?: string | undefined
  eventType?:
    | 'EVENT_TYPE_UNSPECIFIED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_STARTED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_COMPLETED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_FAILED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_TIMED_OUT'
    | 'EVENT_TYPE_WORKFLOW_TASK_SCHEDULED'
    | 'EVENT_TYPE_WORKFLOW_TASK_STARTED'
    | 'EVENT_TYPE_WORKFLOW_TASK_COMPLETED'
    | 'EVENT_TYPE_WORKFLOW_TASK_TIMED_OUT'
    | 'EVENT_TYPE_WORKFLOW_TASK_FAILED'
    | 'EVENT_TYPE_ACTIVITY_TASK_SCHEDULED'
    | 'EVENT_TYPE_ACTIVITY_TASK_STARTED'
    | 'EVENT_TYPE_ACTIVITY_TASK_COMPLETED'
    | 'EVENT_TYPE_ACTIVITY_TASK_FAILED'
    | 'EVENT_TYPE_ACTIVITY_TASK_TIMED_OUT'
    | 'EVENT_TYPE_ACTIVITY_TASK_CANCEL_REQUESTED'
    | 'EVENT_TYPE_ACTIVITY_TASK_CANCELED'
    | 'EVENT_TYPE_TIMER_STARTED'
    | 'EVENT_TYPE_TIMER_FIRED'
    | 'EVENT_TYPE_TIMER_CANCELED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_CANCEL_REQUESTED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_CANCELED'
    | 'EVENT_TYPE_REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_INITIATED'
    | 'EVENT_TYPE_REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_FAILED'
    | 'EVENT_TYPE_EXTERNAL_WORKFLOW_EXECUTION_CANCEL_REQUESTED'
    | 'EVENT_TYPE_MARKER_RECORDED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_SIGNALED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_TERMINATED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_CONTINUED_AS_NEW'
    | 'EVENT_TYPE_START_CHILD_WORKFLOW_EXECUTION_INITIATED'
    | 'EVENT_TYPE_START_CHILD_WORKFLOW_EXECUTION_FAILED'
    | 'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_STARTED'
    | 'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_COMPLETED'
    | 'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_FAILED'
    | 'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_CANCELED'
    | 'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_TIMED_OUT'
    | 'EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_TERMINATED'
    | 'EVENT_TYPE_SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_INITIATED'
    | 'EVENT_TYPE_SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED'
    | 'EVENT_TYPE_EXTERNAL_WORKFLOW_EXECUTION_SIGNALED'
    | 'EVENT_TYPE_UPSERT_WORKFLOW_SEARCH_ATTRIBUTES'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_ADMITTED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_ACCEPTED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_REJECTED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_UPDATE_COMPLETED'
    | 'EVENT_TYPE_WORKFLOW_PROPERTIES_MODIFIED_EXTERNALLY'
    | 'EVENT_TYPE_ACTIVITY_PROPERTIES_MODIFIED_EXTERNALLY'
    | 'EVENT_TYPE_WORKFLOW_PROPERTIES_MODIFIED'
    | 'EVENT_TYPE_NEXUS_OPERATION_SCHEDULED'
    | 'EVENT_TYPE_NEXUS_OPERATION_STARTED'
    | 'EVENT_TYPE_NEXUS_OPERATION_COMPLETED'
    | 'EVENT_TYPE_NEXUS_OPERATION_FAILED'
    | 'EVENT_TYPE_NEXUS_OPERATION_CANCELED'
    | 'EVENT_TYPE_NEXUS_OPERATION_TIMED_OUT'
    | 'EVENT_TYPE_NEXUS_OPERATION_CANCEL_REQUESTED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_OPTIONS_UPDATED'
    | 'EVENT_TYPE_NEXUS_OPERATION_CANCEL_REQUEST_COMPLETED'
    | 'EVENT_TYPE_NEXUS_OPERATION_CANCEL_REQUEST_FAILED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_PAUSED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_UNPAUSED'
    | 'EVENT_TYPE_WORKFLOW_EXECUTION_TIME_SKIPPING_TRANSITIONED'
    | undefined
  version?: string | undefined
  taskId?: string | undefined
  workerMayIgnore?: boolean | undefined
  userMetadata?: { summary?: {} | undefined; details?: {} | undefined } | undefined
  links?: Link[] | undefined
  principal?: { type?: string | undefined; name?: string | undefined } | undefined
  workflowExecutionStartedEventAttributes?: WorkflowExecutionStartedEventAttributes | undefined
  workflowExecutionCompletedEventAttributes?: WorkflowExecutionCompletedEventAttributes | undefined
  workflowExecutionFailedEventAttributes?: WorkflowExecutionFailedEventAttributes | undefined
  workflowExecutionTimedOutEventAttributes?: WorkflowExecutionTimedOutEventAttributes | undefined
  workflowTaskScheduledEventAttributes?: WorkflowTaskScheduledEventAttributes | undefined
  workflowTaskStartedEventAttributes?: WorkflowTaskStartedEventAttributes | undefined
  workflowTaskCompletedEventAttributes?: WorkflowTaskCompletedEventAttributes | undefined
  workflowTaskTimedOutEventAttributes?: WorkflowTaskTimedOutEventAttributes | undefined
  workflowTaskFailedEventAttributes?: WorkflowTaskFailedEventAttributes | undefined
  activityTaskScheduledEventAttributes?: ActivityTaskScheduledEventAttributes | undefined
  activityTaskStartedEventAttributes?: ActivityTaskStartedEventAttributes | undefined
  activityTaskCompletedEventAttributes?: ActivityTaskCompletedEventAttributes | undefined
  activityTaskFailedEventAttributes?: ActivityTaskFailedEventAttributes | undefined
  activityTaskTimedOutEventAttributes?: ActivityTaskTimedOutEventAttributes | undefined
  timerStartedEventAttributes?: TimerStartedEventAttributes | undefined
  timerFiredEventAttributes?: TimerFiredEventAttributes | undefined
  activityTaskCancelRequestedEventAttributes?:
    | ActivityTaskCancelRequestedEventAttributes
    | undefined
  activityTaskCanceledEventAttributes?: ActivityTaskCanceledEventAttributes | undefined
  timerCanceledEventAttributes?: TimerCanceledEventAttributes | undefined
  markerRecordedEventAttributes?: MarkerRecordedEventAttributes | undefined
  workflowExecutionSignaledEventAttributes?: WorkflowExecutionSignaledEventAttributes | undefined
  workflowExecutionTerminatedEventAttributes?:
    | WorkflowExecutionTerminatedEventAttributes
    | undefined
  workflowExecutionCancelRequestedEventAttributes?:
    | WorkflowExecutionCancelRequestedEventAttributes
    | undefined
  workflowExecutionCanceledEventAttributes?: WorkflowExecutionCanceledEventAttributes | undefined
  requestCancelExternalWorkflowExecutionInitiatedEventAttributes?:
    | RequestCancelExternalWorkflowExecutionInitiatedEventAttributes
    | undefined
  requestCancelExternalWorkflowExecutionFailedEventAttributes?:
    | RequestCancelExternalWorkflowExecutionFailedEventAttributes
    | undefined
  externalWorkflowExecutionCancelRequestedEventAttributes?:
    | ExternalWorkflowExecutionCancelRequestedEventAttributes
    | undefined
  workflowExecutionContinuedAsNewEventAttributes?:
    | WorkflowExecutionContinuedAsNewEventAttributes
    | undefined
  startChildWorkflowExecutionInitiatedEventAttributes?:
    | StartChildWorkflowExecutionInitiatedEventAttributes
    | undefined
  startChildWorkflowExecutionFailedEventAttributes?:
    | StartChildWorkflowExecutionFailedEventAttributes
    | undefined
  childWorkflowExecutionStartedEventAttributes?:
    | ChildWorkflowExecutionStartedEventAttributes
    | undefined
  childWorkflowExecutionCompletedEventAttributes?:
    | ChildWorkflowExecutionCompletedEventAttributes
    | undefined
  childWorkflowExecutionFailedEventAttributes?:
    | ChildWorkflowExecutionFailedEventAttributes
    | undefined
  childWorkflowExecutionCanceledEventAttributes?:
    | ChildWorkflowExecutionCanceledEventAttributes
    | undefined
  childWorkflowExecutionTimedOutEventAttributes?:
    | ChildWorkflowExecutionTimedOutEventAttributes
    | undefined
  childWorkflowExecutionTerminatedEventAttributes?:
    | ChildWorkflowExecutionTerminatedEventAttributes
    | undefined
  signalExternalWorkflowExecutionInitiatedEventAttributes?:
    | SignalExternalWorkflowExecutionInitiatedEventAttributes
    | undefined
  signalExternalWorkflowExecutionFailedEventAttributes?:
    | SignalExternalWorkflowExecutionFailedEventAttributes
    | undefined
  externalWorkflowExecutionSignaledEventAttributes?:
    | ExternalWorkflowExecutionSignaledEventAttributes
    | undefined
  upsertWorkflowSearchAttributesEventAttributes?:
    | UpsertWorkflowSearchAttributesEventAttributes
    | undefined
  workflowExecutionUpdateAcceptedEventAttributes?:
    | WorkflowExecutionUpdateAcceptedEventAttributes
    | undefined
  workflowExecutionUpdateRejectedEventAttributes?:
    | WorkflowExecutionUpdateRejectedEventAttributes
    | undefined
  workflowExecutionUpdateCompletedEventAttributes?:
    | WorkflowExecutionUpdateCompletedEventAttributes
    | undefined
  workflowPropertiesModifiedExternallyEventAttributes?:
    | WorkflowPropertiesModifiedExternallyEventAttributes
    | undefined
  activityPropertiesModifiedExternallyEventAttributes?:
    | ActivityPropertiesModifiedExternallyEventAttributes
    | undefined
  workflowPropertiesModifiedEventAttributes?: WorkflowPropertiesModifiedEventAttributes | undefined
  workflowExecutionUpdateAdmittedEventAttributes?:
    | WorkflowExecutionUpdateAdmittedEventAttributes
    | undefined
  nexusOperationScheduledEventAttributes?: NexusOperationScheduledEventAttributes | undefined
  nexusOperationStartedEventAttributes?: NexusOperationStartedEventAttributes | undefined
  nexusOperationCompletedEventAttributes?: NexusOperationCompletedEventAttributes | undefined
  nexusOperationFailedEventAttributes?: NexusOperationFailedEventAttributes | undefined
  nexusOperationCanceledEventAttributes?: NexusOperationCanceledEventAttributes | undefined
  nexusOperationTimedOutEventAttributes?: NexusOperationTimedOutEventAttributes | undefined
  nexusOperationCancelRequestedEventAttributes?:
    | NexusOperationCancelRequestedEventAttributes
    | undefined
  workflowExecutionOptionsUpdatedEventAttributes?:
    | WorkflowExecutionOptionsUpdatedEventAttributes
    | undefined
  nexusOperationCancelRequestCompletedEventAttributes?:
    | NexusOperationCancelRequestCompletedEventAttributes
    | undefined
  nexusOperationCancelRequestFailedEventAttributes?:
    | NexusOperationCancelRequestFailedEventAttributes
    | undefined
  workflowExecutionPausedEventAttributes?: WorkflowExecutionPausedEventAttributes | undefined
  workflowExecutionUnpausedEventAttributes?: WorkflowExecutionUnpausedEventAttributes | undefined
  workflowExecutionTimeSkippingTransitionedEventAttributes?:
    | WorkflowExecutionTimeSkippingTransitionedEventAttributes
    | undefined
}
type History = { events?: HistoryEvent[] | undefined }
type DataBlob = {
  encodingType?:
    | 'ENCODING_TYPE_UNSPECIFIED'
    | 'ENCODING_TYPE_PROTO3'
    | 'ENCODING_TYPE_JSON'
    | undefined
  data?: string | undefined
}
type GetWorkflowExecutionHistoryResponse = {
  history?: History | undefined
  rawHistory?: DataBlob[] | undefined
  nextPageToken?: string | undefined
  archived?: boolean | undefined
}
type GetWorkflowExecutionHistoryReverseResponse = {
  history?: History | undefined
  nextPageToken?: string | undefined
}
type WorkflowQuery = {
  queryType?: string | undefined
  queryArgs?: { payloads?: Payload[] | undefined } | undefined
  header?: { fields?: { [x: string]: Payload } | undefined } | undefined
}
type QueryWorkflowRequest = {
  namespace?: string | undefined
  execution?: WorkflowExecution | undefined
  query?: WorkflowQuery | undefined
  queryRejectCondition?:
    | 'QUERY_REJECT_CONDITION_UNSPECIFIED'
    | 'QUERY_REJECT_CONDITION_NONE'
    | 'QUERY_REJECT_CONDITION_NOT_OPEN'
    | 'QUERY_REJECT_CONDITION_NOT_COMPLETED_CLEANLY'
    | undefined
}
type QueryRejected = {
  status?:
    | 'WORKFLOW_EXECUTION_STATUS_UNSPECIFIED'
    | 'WORKFLOW_EXECUTION_STATUS_RUNNING'
    | 'WORKFLOW_EXECUTION_STATUS_COMPLETED'
    | 'WORKFLOW_EXECUTION_STATUS_FAILED'
    | 'WORKFLOW_EXECUTION_STATUS_CANCELED'
    | 'WORKFLOW_EXECUTION_STATUS_TERMINATED'
    | 'WORKFLOW_EXECUTION_STATUS_CONTINUED_AS_NEW'
    | 'WORKFLOW_EXECUTION_STATUS_TIMED_OUT'
    | 'WORKFLOW_EXECUTION_STATUS_PAUSED'
    | undefined
}
type QueryWorkflowResponse = {
  queryResult?: Payloads | undefined
  queryRejected?: QueryRejected | undefined
}
type TriggerWorkflowRuleRequest = {
  namespace?: string | undefined
  execution?: { workflowId?: string | undefined; runId?: string | undefined } | undefined
  id?: string | undefined
  spec?:
    | {
        id?: string | undefined
        activityStart?: WorkflowRuleSpecActivityStartingTrigger | undefined
        visibilityQuery?: string | undefined
        actions?: WorkflowRuleAction[] | undefined
        expirationTime?: string | undefined
      }
    | undefined
  identity?: string | undefined
}
type TriggerWorkflowRuleResponse = { applied?: boolean | undefined }
type StartWorkflowExecutionRequest = {
  namespace?: string | undefined
  workflowId?: string | undefined
  workflowType?: WorkflowType | undefined
  taskQueue?: TaskQueue | undefined
  input?: { payloads?: Payload[] | undefined } | undefined
  workflowExecutionTimeout?: string | undefined
  workflowRunTimeout?: string | undefined
  workflowTaskTimeout?: string | undefined
  identity?: string | undefined
  requestId?: string | undefined
  workflowIdReusePolicy?:
    | 'WORKFLOW_ID_REUSE_POLICY_UNSPECIFIED'
    | 'WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE'
    | 'WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE_FAILED_ONLY'
    | 'WORKFLOW_ID_REUSE_POLICY_REJECT_DUPLICATE'
    | 'WORKFLOW_ID_REUSE_POLICY_TERMINATE_IF_RUNNING'
    | undefined
  workflowIdConflictPolicy?:
    | 'WORKFLOW_ID_CONFLICT_POLICY_UNSPECIFIED'
    | 'WORKFLOW_ID_CONFLICT_POLICY_FAIL'
    | 'WORKFLOW_ID_CONFLICT_POLICY_USE_EXISTING'
    | 'WORKFLOW_ID_CONFLICT_POLICY_TERMINATE_EXISTING'
    | undefined
  retryPolicy?:
    | {
        initialInterval?: string | undefined
        backoffCoefficient?: number | undefined
        maximumInterval?: string | undefined
        maximumAttempts?: number | undefined
        nonRetryableErrorTypes?: string[] | undefined
      }
    | undefined
  cronSchedule?: string | undefined
  memo?: Memo | undefined
  searchAttributes?: SearchAttributes | undefined
  header?: Header | undefined
  requestEagerExecution?: boolean | undefined
  continuedFailure?:
    | {
        message?: string | undefined
        source?: string | undefined
        stackTrace?: string | undefined
        encodedAttributes?: {} | undefined
        cause?: Failure | undefined
        applicationFailureInfo?: ApplicationFailureInfo | undefined
        timeoutFailureInfo?: TimeoutFailureInfo | undefined
        canceledFailureInfo?: CanceledFailureInfo | undefined
        terminatedFailureInfo?: TerminatedFailureInfo | undefined
        serverFailureInfo?: ServerFailureInfo | undefined
        resetWorkflowFailureInfo?: ResetWorkflowFailureInfo | undefined
        activityFailureInfo?: ActivityFailureInfo | undefined
        childWorkflowExecutionFailureInfo?: ChildWorkflowExecutionFailureInfo | undefined
        nexusOperationExecutionFailureInfo?: NexusOperationFailureInfo | undefined
        nexusHandlerFailureInfo?: NexusHandlerFailureInfo | undefined
      }
    | undefined
  lastCompletionResult?: Payloads | undefined
  workflowStartDelay?: string | undefined
  completionCallbacks?: Callback[] | undefined
  userMetadata?: { summary?: {} | undefined; details?: {} | undefined } | undefined
  links?: Link[] | undefined
  versioningOverride?:
    | {
        pinned?:
          | {
              behavior?:
                | 'PINNED_OVERRIDE_BEHAVIOR_UNSPECIFIED'
                | 'PINNED_OVERRIDE_BEHAVIOR_PINNED'
                | undefined
              version?:
                | { buildId?: string | undefined; deploymentName?: string | undefined }
                | undefined
            }
          | undefined
        autoUpgrade?: boolean | undefined
        behavior?:
          | 'VERSIONING_BEHAVIOR_UNSPECIFIED'
          | 'VERSIONING_BEHAVIOR_PINNED'
          | 'VERSIONING_BEHAVIOR_AUTO_UPGRADE'
          | undefined
        deployment?: { seriesName?: string | undefined; buildId?: string | undefined } | undefined
        pinnedVersion?: string | undefined
      }
    | undefined
  onConflictOptions?:
    | {
        attachRequestId?: boolean | undefined
        attachCompletionCallbacks?: boolean | undefined
        attachLinks?: boolean | undefined
      }
    | undefined
  priority?:
    | {
        priorityKey?: number | undefined
        fairnessKey?: string | undefined
        fairnessWeight?: number | undefined
      }
    | undefined
  eagerWorkerDeploymentOptions?:
    | {
        deploymentName?: string | undefined
        buildId?: string | undefined
        workerVersioningMode?:
          | 'WORKER_VERSIONING_MODE_UNSPECIFIED'
          | 'WORKER_VERSIONING_MODE_UNVERSIONED'
          | 'WORKER_VERSIONING_MODE_VERSIONED'
          | undefined
      }
    | undefined
  timeSkippingConfig?:
    | {
        enabled?: boolean | undefined
        maxSkippedDuration?: string | undefined
        maxElapsedDuration?: string | undefined
      }
    | undefined
}
type Message = {
  id?: string | undefined
  protocolInstanceId?: string | undefined
  eventId?: string | undefined
  commandIndex?: string | undefined
  body?: { '@type'?: string | undefined } | undefined
}
type PollerGroupInfo = { id?: string | undefined; weight?: number | undefined }
type StartWorkflowExecutionResponse = {
  runId?: string | undefined
  started?: boolean | undefined
  status?:
    | 'WORKFLOW_EXECUTION_STATUS_UNSPECIFIED'
    | 'WORKFLOW_EXECUTION_STATUS_RUNNING'
    | 'WORKFLOW_EXECUTION_STATUS_COMPLETED'
    | 'WORKFLOW_EXECUTION_STATUS_FAILED'
    | 'WORKFLOW_EXECUTION_STATUS_CANCELED'
    | 'WORKFLOW_EXECUTION_STATUS_TERMINATED'
    | 'WORKFLOW_EXECUTION_STATUS_CONTINUED_AS_NEW'
    | 'WORKFLOW_EXECUTION_STATUS_TIMED_OUT'
    | 'WORKFLOW_EXECUTION_STATUS_PAUSED'
    | undefined
  eagerWorkflowTask?:
    | {
        taskToken?: string | undefined
        workflowExecution?: WorkflowExecution | undefined
        workflowType?: WorkflowType | undefined
        previousStartedEventId?: string | undefined
        startedEventId?: string | undefined
        attempt?: number | undefined
        backlogCountHint?: string | undefined
        history?: { events?: HistoryEvent[] | undefined } | undefined
        nextPageToken?: string | undefined
        query?:
          | {
              queryType?: string | undefined
              queryArgs?: { payloads?: Payload[] | undefined } | undefined
              header?: { fields?: { [x: string]: Payload } | undefined } | undefined
            }
          | undefined
        workflowExecutionTaskQueue?:
          | {
              name?: string | undefined
              kind?:
                | 'TASK_QUEUE_KIND_UNSPECIFIED'
                | 'TASK_QUEUE_KIND_NORMAL'
                | 'TASK_QUEUE_KIND_STICKY'
                | 'TASK_QUEUE_KIND_WORKER_COMMANDS'
                | undefined
              normalName?: string | undefined
            }
          | undefined
        scheduledTime?: string | undefined
        startedTime?: string | undefined
        queries?: { [x: string]: WorkflowQuery } | undefined
        messages?: Message[] | undefined
        pollerScalingDecision?: { pollRequestDeltaSuggestion?: number | undefined } | undefined
        pollerGroupId?: string | undefined
        pollerGroupInfos?: PollerGroupInfo[] | undefined
      }
    | undefined
  link?:
    | {
        workflowEvent?: LinkWorkflowEvent | undefined
        batchJob?: LinkBatchJob | undefined
        activity?: LinkActivity | undefined
        nexusOperation?: LinkNexusOperation | undefined
      }
    | undefined
}
type PauseWorkflowExecutionRequest = {
  namespace?: string | undefined
  workflowId?: string | undefined
  runId?: string | undefined
  identity?: string | undefined
  reason?: string | undefined
  requestId?: string | undefined
}
type PauseWorkflowExecutionResponse = { [x: string]: unknown }
type SignalWithStartWorkflowExecutionRequest = {
  namespace?: string | undefined
  workflowId?: string | undefined
  workflowType?: WorkflowType | undefined
  taskQueue?:
    | {
        name?: string | undefined
        kind?:
          | 'TASK_QUEUE_KIND_UNSPECIFIED'
          | 'TASK_QUEUE_KIND_NORMAL'
          | 'TASK_QUEUE_KIND_STICKY'
          | 'TASK_QUEUE_KIND_WORKER_COMMANDS'
          | undefined
        normalName?: string | undefined
      }
    | undefined
  input?: { payloads?: Payload[] | undefined } | undefined
  workflowExecutionTimeout?: string | undefined
  workflowRunTimeout?: string | undefined
  workflowTaskTimeout?: string | undefined
  identity?: string | undefined
  requestId?: string | undefined
  workflowIdReusePolicy?:
    | 'WORKFLOW_ID_REUSE_POLICY_UNSPECIFIED'
    | 'WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE'
    | 'WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE_FAILED_ONLY'
    | 'WORKFLOW_ID_REUSE_POLICY_REJECT_DUPLICATE'
    | 'WORKFLOW_ID_REUSE_POLICY_TERMINATE_IF_RUNNING'
    | undefined
  workflowIdConflictPolicy?:
    | 'WORKFLOW_ID_CONFLICT_POLICY_UNSPECIFIED'
    | 'WORKFLOW_ID_CONFLICT_POLICY_FAIL'
    | 'WORKFLOW_ID_CONFLICT_POLICY_USE_EXISTING'
    | 'WORKFLOW_ID_CONFLICT_POLICY_TERMINATE_EXISTING'
    | undefined
  signalName?: string | undefined
  signalInput?: { payloads?: Payload[] | undefined } | undefined
  control?: string | undefined
  retryPolicy?:
    | {
        initialInterval?: string | undefined
        backoffCoefficient?: number | undefined
        maximumInterval?: string | undefined
        maximumAttempts?: number | undefined
        nonRetryableErrorTypes?: string[] | undefined
      }
    | undefined
  cronSchedule?: string | undefined
  memo?: Memo | undefined
  searchAttributes?: SearchAttributes | undefined
  header?: Header | undefined
  workflowStartDelay?: string | undefined
  userMetadata?: { summary?: {} | undefined; details?: {} | undefined } | undefined
  links?: Link[] | undefined
  versioningOverride?:
    | {
        pinned?:
          | {
              behavior?:
                | 'PINNED_OVERRIDE_BEHAVIOR_UNSPECIFIED'
                | 'PINNED_OVERRIDE_BEHAVIOR_PINNED'
                | undefined
              version?:
                | { buildId?: string | undefined; deploymentName?: string | undefined }
                | undefined
            }
          | undefined
        autoUpgrade?: boolean | undefined
        behavior?:
          | 'VERSIONING_BEHAVIOR_UNSPECIFIED'
          | 'VERSIONING_BEHAVIOR_PINNED'
          | 'VERSIONING_BEHAVIOR_AUTO_UPGRADE'
          | undefined
        deployment?: { seriesName?: string | undefined; buildId?: string | undefined } | undefined
        pinnedVersion?: string | undefined
      }
    | undefined
  priority?:
    | {
        priorityKey?: number | undefined
        fairnessKey?: string | undefined
        fairnessWeight?: number | undefined
      }
    | undefined
  timeSkippingConfig?:
    | {
        enabled?: boolean | undefined
        maxSkippedDuration?: string | undefined
        maxElapsedDuration?: string | undefined
      }
    | undefined
}
type SignalWithStartWorkflowExecutionResponse = {
  runId?: string | undefined
  started?: boolean | undefined
  signalLink?:
    | {
        workflowEvent?: LinkWorkflowEvent | undefined
        batchJob?: LinkBatchJob | undefined
        activity?: LinkActivity | undefined
        nexusOperation?: LinkNexusOperation | undefined
      }
    | undefined
}
type UnpauseWorkflowExecutionRequest = {
  namespace?: string | undefined
  workflowId?: string | undefined
  runId?: string | undefined
  identity?: string | undefined
  reason?: string | undefined
  requestId?: string | undefined
}
type UnpauseWorkflowExecutionResponse = { [x: string]: unknown }
type RequestCancelWorkflowExecutionRequest = {
  namespace?: string | undefined
  workflowExecution?: WorkflowExecution | undefined
  identity?: string | undefined
  requestId?: string | undefined
  firstExecutionRunId?: string | undefined
  reason?: string | undefined
  links?: Link[] | undefined
}
type RequestCancelWorkflowExecutionResponse = { [x: string]: unknown }
type ResetWorkflowExecutionRequest = {
  namespace?: string | undefined
  workflowExecution?: { workflowId?: string | undefined; runId?: string | undefined } | undefined
  reason?: string | undefined
  workflowTaskFinishEventId?: string | undefined
  requestId?: string | undefined
  resetReapplyType?:
    | 'RESET_REAPPLY_TYPE_UNSPECIFIED'
    | 'RESET_REAPPLY_TYPE_SIGNAL'
    | 'RESET_REAPPLY_TYPE_NONE'
    | 'RESET_REAPPLY_TYPE_ALL_ELIGIBLE'
    | undefined
  resetReapplyExcludeTypes?:
    | (
        | 'RESET_REAPPLY_EXCLUDE_TYPE_UNSPECIFIED'
        | 'RESET_REAPPLY_EXCLUDE_TYPE_SIGNAL'
        | 'RESET_REAPPLY_EXCLUDE_TYPE_UPDATE'
        | 'RESET_REAPPLY_EXCLUDE_TYPE_NEXUS'
        | 'RESET_REAPPLY_EXCLUDE_TYPE_CANCEL_REQUEST'
      )[]
    | undefined
  postResetOperations?: PostResetOperation[] | undefined
  identity?: string | undefined
}
type ResetWorkflowExecutionResponse = { runId?: string | undefined }
type SignalWorkflowExecutionRequest = {
  namespace?: string | undefined
  workflowExecution?: WorkflowExecution | undefined
  signalName?: string | undefined
  input?: { payloads?: Payload[] | undefined } | undefined
  identity?: string | undefined
  requestId?: string | undefined
  control?: string | undefined
  header?: { fields?: { [x: string]: Payload } | undefined } | undefined
  links?: Link[] | undefined
}
type SignalWorkflowExecutionResponse = {
  link?:
    | {
        workflowEvent?: LinkWorkflowEvent | undefined
        batchJob?: LinkBatchJob | undefined
        activity?: LinkActivity | undefined
        nexusOperation?: LinkNexusOperation | undefined
      }
    | undefined
}
type TerminateWorkflowExecutionRequest = {
  namespace?: string | undefined
  workflowExecution?: WorkflowExecution | undefined
  reason?: string | undefined
  details?: { payloads?: Payload[] | undefined } | undefined
  identity?: string | undefined
  firstExecutionRunId?: string | undefined
  links?: Link[] | undefined
}
type TerminateWorkflowExecutionResponse = { [x: string]: unknown }
type UpdateWorkflowExecutionOptionsRequest = {
  namespace?: string | undefined
  workflowExecution?: { workflowId?: string | undefined; runId?: string | undefined } | undefined
  workflowExecutionOptions?:
    | {
        versioningOverride?:
          | {
              pinned?:
                | {
                    behavior?:
                      | 'PINNED_OVERRIDE_BEHAVIOR_UNSPECIFIED'
                      | 'PINNED_OVERRIDE_BEHAVIOR_PINNED'
                      | undefined
                    version?:
                      | { buildId?: string | undefined; deploymentName?: string | undefined }
                      | undefined
                  }
                | undefined
              autoUpgrade?: boolean | undefined
              behavior?:
                | 'VERSIONING_BEHAVIOR_UNSPECIFIED'
                | 'VERSIONING_BEHAVIOR_PINNED'
                | 'VERSIONING_BEHAVIOR_AUTO_UPGRADE'
                | undefined
              deployment?:
                | { seriesName?: string | undefined; buildId?: string | undefined }
                | undefined
              pinnedVersion?: string | undefined
            }
          | undefined
        priority?:
          | {
              priorityKey?: number | undefined
              fairnessKey?: string | undefined
              fairnessWeight?: number | undefined
            }
          | undefined
        timeSkippingConfig?:
          | {
              enabled?: boolean | undefined
              maxSkippedDuration?: string | undefined
              maxElapsedDuration?: string | undefined
            }
          | undefined
      }
    | undefined
  updateMask?: string | undefined
  identity?: string | undefined
}
type UpdateWorkflowExecutionOptionsResponse = {
  workflowExecutionOptions?:
    | {
        versioningOverride?:
          | {
              pinned?:
                | {
                    behavior?:
                      | 'PINNED_OVERRIDE_BEHAVIOR_UNSPECIFIED'
                      | 'PINNED_OVERRIDE_BEHAVIOR_PINNED'
                      | undefined
                    version?:
                      | { buildId?: string | undefined; deploymentName?: string | undefined }
                      | undefined
                  }
                | undefined
              autoUpgrade?: boolean | undefined
              behavior?:
                | 'VERSIONING_BEHAVIOR_UNSPECIFIED'
                | 'VERSIONING_BEHAVIOR_PINNED'
                | 'VERSIONING_BEHAVIOR_AUTO_UPGRADE'
                | undefined
              deployment?:
                | { seriesName?: string | undefined; buildId?: string | undefined }
                | undefined
              pinnedVersion?: string | undefined
            }
          | undefined
        priority?:
          | {
              priorityKey?: number | undefined
              fairnessKey?: string | undefined
              fairnessWeight?: number | undefined
            }
          | undefined
        timeSkippingConfig?:
          | {
              enabled?: boolean | undefined
              maxSkippedDuration?: string | undefined
              maxElapsedDuration?: string | undefined
            }
          | undefined
      }
    | undefined
}
type UpdateWorkflowExecutionRequest = {
  namespace?: string | undefined
  workflowExecution?: { workflowId?: string | undefined; runId?: string | undefined } | undefined
  firstExecutionRunId?: string | undefined
  waitPolicy?:
    | {
        lifecycleStage?:
          | 'UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_UNSPECIFIED'
          | 'UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_ADMITTED'
          | 'UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_ACCEPTED'
          | 'UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_COMPLETED'
          | undefined
      }
    | undefined
  request?: { meta?: Meta | undefined; input?: Input | undefined } | undefined
}
type UpdateWorkflowExecutionResponse = {
  updateRef?:
    | { workflowExecution?: WorkflowExecution | undefined; updateId?: string | undefined }
    | undefined
  outcome?: { success?: Payloads | undefined; failure?: Failure | undefined } | undefined
  stage?:
    | 'UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_UNSPECIFIED'
    | 'UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_ADMITTED'
    | 'UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_ACCEPTED'
    | 'UPDATE_WORKFLOW_EXECUTION_LIFECYCLE_STAGE_COMPLETED'
    | undefined
}
type EndpointTargetWorker = { namespace?: string | undefined; taskQueue?: string | undefined }
type EndpointTargetExternal = { url?: string | undefined }
type Endpoint = {
  version?: string | undefined
  id?: string | undefined
  spec?:
    | {
        name?: string | undefined
        description?: {} | undefined
        target?:
          | {
              worker?: EndpointTargetWorker | undefined
              external?: EndpointTargetExternal | undefined
            }
          | undefined
      }
    | undefined
  createdTime?: string | undefined
  lastModifiedTime?: string | undefined
  urlPrefix?: string | undefined
}
type ListNexusEndpointsResponse = {
  nextPageToken?: string | undefined
  endpoints?: Endpoint[] | undefined
}
type CreateNexusEndpointRequest = {
  spec?:
    | {
        name?: string | undefined
        description?: {} | undefined
        target?:
          | {
              worker?: EndpointTargetWorker | undefined
              external?: EndpointTargetExternal | undefined
            }
          | undefined
      }
    | undefined
}
type CreateNexusEndpointResponse = {
  endpoint?:
    | {
        version?: string | undefined
        id?: string | undefined
        spec?:
          | {
              name?: string | undefined
              description?: {} | undefined
              target?:
                | {
                    worker?: EndpointTargetWorker | undefined
                    external?: EndpointTargetExternal | undefined
                  }
                | undefined
            }
          | undefined
        createdTime?: string | undefined
        lastModifiedTime?: string | undefined
        urlPrefix?: string | undefined
      }
    | undefined
}
type GetNexusEndpointResponse = { endpoint?: Endpoint | undefined }
type DeleteNexusEndpointResponse = { [x: string]: unknown }
type EndpointSpec = {
  name?: string | undefined
  description?: {} | undefined
  target?:
    | { worker?: EndpointTargetWorker | undefined; external?: EndpointTargetExternal | undefined }
    | undefined
}
type UpdateNexusEndpointRequest = {
  id?: string | undefined
  version?: string | undefined
  spec?: EndpointSpec | undefined
}
type UpdateNexusEndpointResponse = {
  endpoint?:
    | {
        version?: string | undefined
        id?: string | undefined
        spec?:
          | {
              name?: string | undefined
              description?: {} | undefined
              target?:
                | {
                    worker?: EndpointTargetWorker | undefined
                    external?: EndpointTargetExternal | undefined
                  }
                | undefined
            }
          | undefined
        createdTime?: string | undefined
        lastModifiedTime?: string | undefined
        urlPrefix?: string | undefined
      }
    | undefined
}
type GetSystemInfoResponse = {
  serverVersion?: string | undefined
  capabilities?:
    | {
        signalAndQueryHeader?: boolean | undefined
        internalErrorDifferentiation?: boolean | undefined
        activityFailureIncludeHeartbeat?: boolean | undefined
        supportsSchedules?: boolean | undefined
        encodedFailureAttributes?: boolean | undefined
        buildIdBasedVersioning?: boolean | undefined
        upsertMemo?: boolean | undefined
        eagerWorkflowStart?: boolean | undefined
        sdkMetadata?: boolean | undefined
        countGroupByExecutionStatus?: boolean | undefined
        nexus?: boolean | undefined
        serverScaledDeployments?: boolean | undefined
      }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/cluster-info': {
      $get:
        | { input: {}; output: GetClusterInfoResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Status; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/namespaces': {
      $get:
        | {
            input: {
              query: {
                pageSize?: number | undefined
                nextPageToken?: string | undefined
                'namespaceFilter.includeDeleted'?: boolean | undefined
              }
            }
            output: ListNamespacesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageSize?: number | undefined
                nextPageToken?: string | undefined
                'namespaceFilter.includeDeleted'?: boolean | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: RegisterNamespaceRequest }
            output: RegisterNamespaceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RegisterNamespaceRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace': {
      $get:
        | {
            input: { param: { namespace: string } } & {
              query: { id?: string | undefined; weakConsistency?: boolean | undefined }
            }
            output: DescribeNamespaceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: { id?: string | undefined; weakConsistency?: boolean | undefined }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/activities': {
      $get:
        | {
            input: { param: { namespace: string } } & {
              query: {
                pageSize?: number | undefined
                nextPageToken?: string | undefined
                query?: string | undefined
              }
            }
            output: ListActivityExecutionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                pageSize?: number | undefined
                nextPageToken?: string | undefined
                query?: string | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/activities-deprecated/pause': {
      $post:
        | {
            input: { param: { namespace: string } } & { json: PauseActivityRequest }
            output: PauseActivityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & { json: PauseActivityRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/activities-deprecated/reset': {
      $post:
        | {
            input: { param: { namespace: string } } & { json: ResetActivityRequest }
            output: ResetActivityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & { json: ResetActivityRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/activities-deprecated/unpause': {
      $post:
        | {
            input: { param: { namespace: string } } & { json: UnpauseActivityRequest }
            output: UnpauseActivityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & { json: UnpauseActivityRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/activities-deprecated/update-options': {
      $post:
        | {
            input: { param: { namespace: string } } & { json: UpdateActivityOptionsRequest }
            output: UpdateActivityOptionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & { json: UpdateActivityOptionsRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/activities/:activityId': {
      $get:
        | {
            input: { param: { namespace: string; activityId: string } } & {
              query: {
                runId?: string | undefined
                includeInput?: boolean | undefined
                includeOutcome?: boolean | undefined
                longPollToken?: string | undefined
              }
            }
            output: DescribeActivityExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; activityId: string } } & {
              query: {
                runId?: string | undefined
                includeInput?: boolean | undefined
                includeOutcome?: boolean | undefined
                longPollToken?: string | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: StartActivityExecutionRequest
            }
            output: StartActivityExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: StartActivityExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/activities/:activityId/cancel': {
      $post:
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: RequestCancelActivityExecutionRequest
            }
            output: RequestCancelActivityExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: RequestCancelActivityExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/activities/:activityId/complete': {
      $post:
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: RespondActivityTaskCompletedByIdRequest
            }
            output: RespondActivityTaskCompletedByIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: RespondActivityTaskCompletedByIdRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/activities/:activityId/fail': {
      $post:
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: RespondActivityTaskFailedByIdRequest
            }
            output: RespondActivityTaskFailedByIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: RespondActivityTaskFailedByIdRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/activities/:activityId/heartbeat': {
      $post:
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: RecordActivityTaskHeartbeatByIdRequest
            }
            output: RecordActivityTaskHeartbeatByIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: RecordActivityTaskHeartbeatByIdRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/activities/:activityId/outcome': {
      $get:
        | {
            input: { param: { namespace: string; activityId: string } } & {
              query: { runId?: string | undefined }
            }
            output: PollActivityExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; activityId: string } } & {
              query: { runId?: string | undefined }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/activities/:activityId/pause': {
      $post:
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: PauseActivityExecutionRequest
            }
            output: PauseActivityExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: PauseActivityExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/activities/:activityId/reset': {
      $post:
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: ResetActivityExecutionRequest
            }
            output: ResetActivityExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: ResetActivityExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/activities/:activityId/resolve-as-canceled': {
      $post:
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: RespondActivityTaskCanceledByIdRequest
            }
            output: RespondActivityTaskCanceledByIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: RespondActivityTaskCanceledByIdRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/activities/:activityId/terminate': {
      $post:
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: TerminateActivityExecutionRequest
            }
            output: TerminateActivityExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: TerminateActivityExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/activities/:activityId/unpause': {
      $post:
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: UnpauseActivityExecutionRequest
            }
            output: UnpauseActivityExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: UnpauseActivityExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/activities/:activityId/update-options': {
      $post:
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: UpdateActivityExecutionOptionsRequest
            }
            output: UpdateActivityExecutionOptionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: UpdateActivityExecutionOptionsRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/activity-complete': {
      $post:
        | {
            input: { param: { namespace: string } } & { json: RespondActivityTaskCompletedRequest }
            output: RespondActivityTaskCompletedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & { json: RespondActivityTaskCompletedRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/activity-count': {
      $get:
        | {
            input: { param: { namespace: string } } & { query: { query?: string | undefined } }
            output: CountActivityExecutionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & { query: { query?: string | undefined } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/activity-fail': {
      $post:
        | {
            input: { param: { namespace: string } } & { json: RespondActivityTaskFailedRequest }
            output: RespondActivityTaskFailedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & { json: RespondActivityTaskFailedRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/activity-heartbeat': {
      $post:
        | {
            input: { param: { namespace: string } } & { json: RecordActivityTaskHeartbeatRequest }
            output: RecordActivityTaskHeartbeatResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & { json: RecordActivityTaskHeartbeatRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/activity-resolve-as-canceled': {
      $post:
        | {
            input: { param: { namespace: string } } & { json: RespondActivityTaskCanceledRequest }
            output: RespondActivityTaskCanceledResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & { json: RespondActivityTaskCanceledRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/archived-workflows': {
      $get:
        | {
            input: { param: { namespace: string } } & {
              query: {
                pageSize?: number | undefined
                nextPageToken?: string | undefined
                query?: string | undefined
              }
            }
            output: ListArchivedWorkflowExecutionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                pageSize?: number | undefined
                nextPageToken?: string | undefined
                query?: string | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/batch-operations': {
      $get:
        | {
            input: { param: { namespace: string } } & {
              query: { pageSize?: number | undefined; nextPageToken?: string | undefined }
            }
            output: ListBatchOperationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: { pageSize?: number | undefined; nextPageToken?: string | undefined }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/batch-operations/:jobId': {
      $get:
        | {
            input: { param: { namespace: string; jobId: string } }
            output: DescribeBatchOperationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; jobId: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { namespace: string; jobId: string } } & {
              json: StartBatchOperationRequest
            }
            output: StartBatchOperationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; jobId: string } } & {
              json: StartBatchOperationRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/batch-operations/:jobId/stop': {
      $post:
        | {
            input: { param: { namespace: string; jobId: string } } & {
              json: StopBatchOperationRequest
            }
            output: StopBatchOperationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; jobId: string } } & {
              json: StopBatchOperationRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/current-deployment/:deployment.series_name': {
      $post:
        | {
            input: { param: { namespace: string; 'deployment.series_name': string } } & {
              json: SetCurrentDeploymentRequest
            }
            output: SetCurrentDeploymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; 'deployment.series_name': string } } & {
              json: SetCurrentDeploymentRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/current-deployment/:seriesName': {
      $get:
        | {
            input: { param: { namespace: string; seriesName: string } }
            output: GetCurrentDeploymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; seriesName: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/deployments': {
      $get:
        | {
            input: { param: { namespace: string } } & {
              query: {
                pageSize?: number | undefined
                nextPageToken?: string | undefined
                seriesName?: string | undefined
              }
            }
            output: ListDeploymentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                pageSize?: number | undefined
                nextPageToken?: string | undefined
                seriesName?: string | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/deployments/:deployment.series_name/:deployment.build_id': {
      $get:
        | {
            input: {
              param: {
                namespace: string
                'deployment.series_name': string
                'deployment.build_id': string
              }
            } & {
              query: {
                'deployment.seriesName'?: string | undefined
                'deployment.buildId'?: string | undefined
              }
            }
            output: DescribeDeploymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                namespace: string
                'deployment.series_name': string
                'deployment.build_id': string
              }
            } & {
              query: {
                'deployment.seriesName'?: string | undefined
                'deployment.buildId'?: string | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/deployments/:deployment.series_name/:deployment.build_id/reachability': {
      $get:
        | {
            input: {
              param: {
                namespace: string
                'deployment.series_name': string
                'deployment.build_id': string
              }
            } & {
              query: {
                'deployment.seriesName'?: string | undefined
                'deployment.buildId'?: string | undefined
              }
            }
            output: GetDeploymentReachabilityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                namespace: string
                'deployment.series_name': string
                'deployment.build_id': string
              }
            } & {
              query: {
                'deployment.seriesName'?: string | undefined
                'deployment.buildId'?: string | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/nexus-operation-count': {
      $get:
        | {
            input: { param: { namespace: string } } & { query: { query?: string | undefined } }
            output: CountNexusOperationExecutionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & { query: { query?: string | undefined } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/nexus-operations': {
      $get:
        | {
            input: { param: { namespace: string } } & {
              query: {
                pageSize?: number | undefined
                nextPageToken?: string | undefined
                query?: string | undefined
              }
            }
            output: ListNexusOperationExecutionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                pageSize?: number | undefined
                nextPageToken?: string | undefined
                query?: string | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/nexus-operations/:operationId': {
      $get:
        | {
            input: { param: { namespace: string; operationId: string } } & {
              query: {
                runId?: string | undefined
                includeInput?: boolean | undefined
                includeOutcome?: boolean | undefined
                longPollToken?: string | undefined
              }
            }
            output: DescribeNexusOperationExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; operationId: string } } & {
              query: {
                runId?: string | undefined
                includeInput?: boolean | undefined
                includeOutcome?: boolean | undefined
                longPollToken?: string | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { namespace: string; operationId: string } } & {
              json: StartNexusOperationExecutionRequest
            }
            output: StartNexusOperationExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; operationId: string } } & {
              json: StartNexusOperationExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/nexus-operations/:operationId/cancel': {
      $post:
        | {
            input: { param: { namespace: string; operationId: string } } & {
              json: RequestCancelNexusOperationExecutionRequest
            }
            output: RequestCancelNexusOperationExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; operationId: string } } & {
              json: RequestCancelNexusOperationExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/nexus-operations/:operationId/poll': {
      $get:
        | {
            input: { param: { namespace: string; operationId: string } } & {
              query: {
                runId?: string | undefined
                waitStage?:
                  | 'NEXUS_OPERATION_WAIT_STAGE_UNSPECIFIED'
                  | 'NEXUS_OPERATION_WAIT_STAGE_STARTED'
                  | 'NEXUS_OPERATION_WAIT_STAGE_CLOSED'
                  | undefined
              }
            }
            output: PollNexusOperationExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; operationId: string } } & {
              query: {
                runId?: string | undefined
                waitStage?:
                  | 'NEXUS_OPERATION_WAIT_STAGE_UNSPECIFIED'
                  | 'NEXUS_OPERATION_WAIT_STAGE_STARTED'
                  | 'NEXUS_OPERATION_WAIT_STAGE_CLOSED'
                  | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/nexus-operations/:operationId/terminate': {
      $post:
        | {
            input: { param: { namespace: string; operationId: string } } & {
              json: TerminateNexusOperationExecutionRequest
            }
            output: TerminateNexusOperationExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; operationId: string } } & {
              json: TerminateNexusOperationExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/schedule-count': {
      $get:
        | {
            input: { param: { namespace: string } } & { query: { query?: string | undefined } }
            output: CountSchedulesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & { query: { query?: string | undefined } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/schedules': {
      $get:
        | {
            input: { param: { namespace: string } } & {
              query: {
                maximumPageSize?: number | undefined
                nextPageToken?: string | undefined
                query?: string | undefined
              }
            }
            output: ListSchedulesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                maximumPageSize?: number | undefined
                nextPageToken?: string | undefined
                query?: string | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/schedules/:scheduleId': {
      $get:
        | {
            input: { param: { namespace: string; scheduleId: string } }
            output: DescribeScheduleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; scheduleId: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { namespace: string; scheduleId: string } } & {
              json: CreateScheduleRequest
            }
            output: CreateScheduleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; scheduleId: string } } & {
              json: CreateScheduleRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { namespace: string; scheduleId: string } } & {
              query: { identity?: string | undefined }
            }
            output: DeleteScheduleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; scheduleId: string } } & {
              query: { identity?: string | undefined }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/schedules/:scheduleId/matching-times': {
      $get:
        | {
            input: { param: { namespace: string; scheduleId: string } } & {
              query: { startTime?: string | undefined; endTime?: string | undefined }
            }
            output: ListScheduleMatchingTimesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; scheduleId: string } } & {
              query: { startTime?: string | undefined; endTime?: string | undefined }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/schedules/:scheduleId/patch': {
      $post:
        | {
            input: { param: { namespace: string; scheduleId: string } } & {
              json: PatchScheduleRequest
            }
            output: PatchScheduleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; scheduleId: string } } & {
              json: PatchScheduleRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/schedules/:scheduleId/update': {
      $post:
        | {
            input: { param: { namespace: string; scheduleId: string } } & {
              json: UpdateScheduleRequest
            }
            output: UpdateScheduleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; scheduleId: string } } & {
              json: UpdateScheduleRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/search-attributes': {
      $get:
        | {
            input: { param: { namespace: string } }
            output: ListSearchAttributesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/task-queues/:taskQueue/update-config': {
      $post:
        | {
            input: { param: { namespace: string; taskQueue: string } } & {
              json: UpdateTaskQueueConfigRequest
            }
            output: UpdateTaskQueueConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; taskQueue: string } } & {
              json: UpdateTaskQueueConfigRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/task-queues/:taskQueue/worker-build-id-compatibility': {
      $get:
        | {
            input: { param: { namespace: string; taskQueue: string } } & {
              query: { maxSets?: number | undefined }
            }
            output: GetWorkerBuildIdCompatibilityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; taskQueue: string } } & {
              query: { maxSets?: number | undefined }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/task-queues/:taskQueue/worker-versioning-rules': {
      $get:
        | {
            input: { param: { namespace: string; taskQueue: string } }
            output: GetWorkerVersioningRulesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; taskQueue: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/task-queues/:task_queue.name': {
      $get:
        | {
            input: { param: { namespace: string; 'task_queue.name': string } } & {
              query: {
                'taskQueue.name'?: string | undefined
                'taskQueue.kind'?:
                  | 'TASK_QUEUE_KIND_UNSPECIFIED'
                  | 'TASK_QUEUE_KIND_NORMAL'
                  | 'TASK_QUEUE_KIND_STICKY'
                  | 'TASK_QUEUE_KIND_WORKER_COMMANDS'
                  | undefined
                'taskQueue.normalName'?: string | undefined
                taskQueueType?:
                  | 'TASK_QUEUE_TYPE_UNSPECIFIED'
                  | 'TASK_QUEUE_TYPE_WORKFLOW'
                  | 'TASK_QUEUE_TYPE_ACTIVITY'
                  | 'TASK_QUEUE_TYPE_NEXUS'
                  | undefined
                reportStats?: boolean | undefined
                reportConfig?: boolean | undefined
                includeTaskQueueStatus?: boolean | undefined
                apiMode?:
                  | 'DESCRIBE_TASK_QUEUE_MODE_UNSPECIFIED'
                  | 'DESCRIBE_TASK_QUEUE_MODE_ENHANCED'
                  | undefined
                'versions.buildIds'?: string[] | undefined
                'versions.unversioned'?: boolean | undefined
                'versions.allActive'?: boolean | undefined
                taskQueueTypes?:
                  | (
                      | 'TASK_QUEUE_TYPE_UNSPECIFIED'
                      | 'TASK_QUEUE_TYPE_WORKFLOW'
                      | 'TASK_QUEUE_TYPE_ACTIVITY'
                      | 'TASK_QUEUE_TYPE_NEXUS'
                    )[]
                  | undefined
                reportPollers?: boolean | undefined
                reportTaskReachability?: boolean | undefined
              }
            }
            output: DescribeTaskQueueResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; 'task_queue.name': string } } & {
              query: {
                'taskQueue.name'?: string | undefined
                'taskQueue.kind'?:
                  | 'TASK_QUEUE_KIND_UNSPECIFIED'
                  | 'TASK_QUEUE_KIND_NORMAL'
                  | 'TASK_QUEUE_KIND_STICKY'
                  | 'TASK_QUEUE_KIND_WORKER_COMMANDS'
                  | undefined
                'taskQueue.normalName'?: string | undefined
                taskQueueType?:
                  | 'TASK_QUEUE_TYPE_UNSPECIFIED'
                  | 'TASK_QUEUE_TYPE_WORKFLOW'
                  | 'TASK_QUEUE_TYPE_ACTIVITY'
                  | 'TASK_QUEUE_TYPE_NEXUS'
                  | undefined
                reportStats?: boolean | undefined
                reportConfig?: boolean | undefined
                includeTaskQueueStatus?: boolean | undefined
                apiMode?:
                  | 'DESCRIBE_TASK_QUEUE_MODE_UNSPECIFIED'
                  | 'DESCRIBE_TASK_QUEUE_MODE_ENHANCED'
                  | undefined
                'versions.buildIds'?: string[] | undefined
                'versions.unversioned'?: boolean | undefined
                'versions.allActive'?: boolean | undefined
                taskQueueTypes?:
                  | (
                      | 'TASK_QUEUE_TYPE_UNSPECIFIED'
                      | 'TASK_QUEUE_TYPE_WORKFLOW'
                      | 'TASK_QUEUE_TYPE_ACTIVITY'
                      | 'TASK_QUEUE_TYPE_NEXUS'
                    )[]
                  | undefined
                reportPollers?: boolean | undefined
                reportTaskReachability?: boolean | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/update': {
      $post:
        | {
            input: { param: { namespace: string } } & { json: UpdateNamespaceRequest }
            output: UpdateNamespaceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & { json: UpdateNamespaceRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/worker-deployment-versions/:deployment_version.deployment_name': {
      $post:
        | {
            input: {
              param: { namespace: string; 'deployment_version.deployment_name': string }
            } & { json: CreateWorkerDeploymentVersionRequest }
            output: CreateWorkerDeploymentVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { namespace: string; 'deployment_version.deployment_name': string }
            } & { json: CreateWorkerDeploymentVersionRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/worker-deployment-versions/:deployment_version.deployment_name/:deployment_version.build_id': {
      $get:
        | {
            input: {
              param: {
                namespace: string
                'deployment_version.deployment_name': string
                'deployment_version.build_id': string
              }
            } & {
              query: {
                version?: string | undefined
                'deploymentVersion.buildId'?: string | undefined
                'deploymentVersion.deploymentName'?: string | undefined
                reportTaskQueueStats?: boolean | undefined
              }
            }
            output: DescribeWorkerDeploymentVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                namespace: string
                'deployment_version.deployment_name': string
                'deployment_version.build_id': string
              }
            } & {
              query: {
                version?: string | undefined
                'deploymentVersion.buildId'?: string | undefined
                'deploymentVersion.deploymentName'?: string | undefined
                reportTaskQueueStats?: boolean | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: {
              param: {
                namespace: string
                'deployment_version.deployment_name': string
                'deployment_version.build_id': string
              }
            } & {
              query: {
                version?: string | undefined
                'deploymentVersion.buildId'?: string | undefined
                'deploymentVersion.deploymentName'?: string | undefined
                skipDrainage?: boolean | undefined
                identity?: string | undefined
              }
            }
            output: DeleteWorkerDeploymentVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                namespace: string
                'deployment_version.deployment_name': string
                'deployment_version.build_id': string
              }
            } & {
              query: {
                version?: string | undefined
                'deploymentVersion.buildId'?: string | undefined
                'deploymentVersion.deploymentName'?: string | undefined
                skipDrainage?: boolean | undefined
                identity?: string | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/worker-deployment-versions/:deployment_version.deployment_name/:deployment_version.build_id/update-compute-config': {
      $post:
        | {
            input: {
              param: {
                namespace: string
                'deployment_version.deployment_name': string
                'deployment_version.build_id': string
              }
            } & { json: UpdateWorkerDeploymentVersionComputeConfigRequest }
            output: UpdateWorkerDeploymentVersionComputeConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                namespace: string
                'deployment_version.deployment_name': string
                'deployment_version.build_id': string
              }
            } & { json: UpdateWorkerDeploymentVersionComputeConfigRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/worker-deployment-versions/:deployment_version.deployment_name/:deployment_version.build_id/update-metadata': {
      $post:
        | {
            input: {
              param: {
                namespace: string
                'deployment_version.deployment_name': string
                'deployment_version.build_id': string
              }
            } & { json: UpdateWorkerDeploymentVersionMetadataRequest }
            output: UpdateWorkerDeploymentVersionMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                namespace: string
                'deployment_version.deployment_name': string
                'deployment_version.build_id': string
              }
            } & { json: UpdateWorkerDeploymentVersionMetadataRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/worker-deployment-versions/:deployment_version.deployment_name/:deployment_version.build_id/validate-compute-config': {
      $post:
        | {
            input: {
              param: {
                namespace: string
                'deployment_version.deployment_name': string
                'deployment_version.build_id': string
              }
            } & { json: ValidateWorkerDeploymentVersionComputeConfigRequest }
            output: ValidateWorkerDeploymentVersionComputeConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                namespace: string
                'deployment_version.deployment_name': string
                'deployment_version.build_id': string
              }
            } & { json: ValidateWorkerDeploymentVersionComputeConfigRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/worker-deployments': {
      $get:
        | {
            input: { param: { namespace: string } } & {
              query: { pageSize?: number | undefined; nextPageToken?: string | undefined }
            }
            output: ListWorkerDeploymentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: { pageSize?: number | undefined; nextPageToken?: string | undefined }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/worker-deployments/:deploymentName': {
      $get:
        | {
            input: { param: { namespace: string; deploymentName: string } }
            output: DescribeWorkerDeploymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; deploymentName: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { namespace: string; deploymentName: string } } & {
              json: CreateWorkerDeploymentRequest
            }
            output: CreateWorkerDeploymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; deploymentName: string } } & {
              json: CreateWorkerDeploymentRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { namespace: string; deploymentName: string } } & {
              query: { identity?: string | undefined }
            }
            output: DeleteWorkerDeploymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; deploymentName: string } } & {
              query: { identity?: string | undefined }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/worker-deployments/:deploymentName/set-current-version': {
      $post:
        | {
            input: { param: { namespace: string; deploymentName: string } } & {
              json: SetWorkerDeploymentCurrentVersionRequest
            }
            output: SetWorkerDeploymentCurrentVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; deploymentName: string } } & {
              json: SetWorkerDeploymentCurrentVersionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/worker-deployments/:deploymentName/set-manager': {
      $post:
        | {
            input: { param: { namespace: string; deploymentName: string } } & {
              json: SetWorkerDeploymentManagerRequest
            }
            output: SetWorkerDeploymentManagerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; deploymentName: string } } & {
              json: SetWorkerDeploymentManagerRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/worker-deployments/:deploymentName/set-ramping-version': {
      $post:
        | {
            input: { param: { namespace: string; deploymentName: string } } & {
              json: SetWorkerDeploymentRampingVersionRequest
            }
            output: SetWorkerDeploymentRampingVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; deploymentName: string } } & {
              json: SetWorkerDeploymentRampingVersionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/worker-task-reachability': {
      $get:
        | {
            input: { param: { namespace: string } } & {
              query: {
                buildIds?: string[] | undefined
                taskQueues?: string[] | undefined
                reachability?:
                  | 'TASK_REACHABILITY_UNSPECIFIED'
                  | 'TASK_REACHABILITY_NEW_WORKFLOWS'
                  | 'TASK_REACHABILITY_EXISTING_WORKFLOWS'
                  | 'TASK_REACHABILITY_OPEN_WORKFLOWS'
                  | 'TASK_REACHABILITY_CLOSED_WORKFLOWS'
                  | undefined
              }
            }
            output: GetWorkerTaskReachabilityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                buildIds?: string[] | undefined
                taskQueues?: string[] | undefined
                reachability?:
                  | 'TASK_REACHABILITY_UNSPECIFIED'
                  | 'TASK_REACHABILITY_NEW_WORKFLOWS'
                  | 'TASK_REACHABILITY_EXISTING_WORKFLOWS'
                  | 'TASK_REACHABILITY_OPEN_WORKFLOWS'
                  | 'TASK_REACHABILITY_CLOSED_WORKFLOWS'
                  | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/workers': {
      $get:
        | {
            input: { param: { namespace: string } } & {
              query: {
                pageSize?: number | undefined
                nextPageToken?: string | undefined
                query?: string | undefined
                includeSystemWorkers?: boolean | undefined
              }
            }
            output: ListWorkersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                pageSize?: number | undefined
                nextPageToken?: string | undefined
                query?: string | undefined
                includeSystemWorkers?: boolean | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/workers/describe/:workerInstanceKey': {
      $get:
        | {
            input: { param: { namespace: string; workerInstanceKey: string } }
            output: DescribeWorkerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; workerInstanceKey: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/workers/fetch-config': {
      $post:
        | {
            input: { param: { namespace: string } } & { json: FetchWorkerConfigRequest }
            output: FetchWorkerConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & { json: FetchWorkerConfigRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/workers/heartbeat': {
      $post:
        | {
            input: { param: { namespace: string } } & { json: RecordWorkerHeartbeatRequest }
            output: RecordWorkerHeartbeatResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & { json: RecordWorkerHeartbeatRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/workers/update-config': {
      $post:
        | {
            input: { param: { namespace: string } } & { json: UpdateWorkerConfigRequest }
            output: UpdateWorkerConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & { json: UpdateWorkerConfigRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/workflow-count': {
      $get:
        | {
            input: { param: { namespace: string } } & { query: { query?: string | undefined } }
            output: CountWorkflowExecutionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & { query: { query?: string | undefined } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/workflow-rules': {
      $get:
        | {
            input: { param: { namespace: string } } & {
              query: { nextPageToken?: string | undefined }
            }
            output: ListWorkflowRulesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: { nextPageToken?: string | undefined }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { namespace: string } } & { json: CreateWorkflowRuleRequest }
            output: CreateWorkflowRuleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & { json: CreateWorkflowRuleRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/workflow-rules/:ruleId': {
      $get:
        | {
            input: { param: { namespace: string; ruleId: string } }
            output: DescribeWorkflowRuleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; ruleId: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { namespace: string; ruleId: string } }
            output: DeleteWorkflowRuleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; ruleId: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/workflows': {
      $get:
        | {
            input: { param: { namespace: string } } & {
              query: {
                pageSize?: number | undefined
                nextPageToken?: string | undefined
                query?: string | undefined
              }
            }
            output: ListWorkflowExecutionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                pageSize?: number | undefined
                nextPageToken?: string | undefined
                query?: string | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/workflows/:execution.workflow_id': {
      $get:
        | {
            input: { param: { namespace: string; 'execution.workflow_id': string } } & {
              query: {
                'execution.workflowId'?: string | undefined
                'execution.runId'?: string | undefined
              }
            }
            output: DescribeWorkflowExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; 'execution.workflow_id': string } } & {
              query: {
                'execution.workflowId'?: string | undefined
                'execution.runId'?: string | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/workflows/:execution.workflow_id/history': {
      $get:
        | {
            input: { param: { namespace: string; 'execution.workflow_id': string } } & {
              query: {
                'execution.workflowId'?: string | undefined
                'execution.runId'?: string | undefined
                maximumPageSize?: number | undefined
                nextPageToken?: string | undefined
                waitNewEvent?: boolean | undefined
                historyEventFilterType?:
                  | 'HISTORY_EVENT_FILTER_TYPE_UNSPECIFIED'
                  | 'HISTORY_EVENT_FILTER_TYPE_ALL_EVENT'
                  | 'HISTORY_EVENT_FILTER_TYPE_CLOSE_EVENT'
                  | undefined
                skipArchival?: boolean | undefined
              }
            }
            output: GetWorkflowExecutionHistoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; 'execution.workflow_id': string } } & {
              query: {
                'execution.workflowId'?: string | undefined
                'execution.runId'?: string | undefined
                maximumPageSize?: number | undefined
                nextPageToken?: string | undefined
                waitNewEvent?: boolean | undefined
                historyEventFilterType?:
                  | 'HISTORY_EVENT_FILTER_TYPE_UNSPECIFIED'
                  | 'HISTORY_EVENT_FILTER_TYPE_ALL_EVENT'
                  | 'HISTORY_EVENT_FILTER_TYPE_CLOSE_EVENT'
                  | undefined
                skipArchival?: boolean | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/workflows/:execution.workflow_id/history-reverse': {
      $get:
        | {
            input: { param: { namespace: string; 'execution.workflow_id': string } } & {
              query: {
                'execution.workflowId'?: string | undefined
                'execution.runId'?: string | undefined
                maximumPageSize?: number | undefined
                nextPageToken?: string | undefined
              }
            }
            output: GetWorkflowExecutionHistoryReverseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; 'execution.workflow_id': string } } & {
              query: {
                'execution.workflowId'?: string | undefined
                'execution.runId'?: string | undefined
                maximumPageSize?: number | undefined
                nextPageToken?: string | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/workflows/:execution.workflow_id/query/:query.query_type': {
      $post:
        | {
            input: {
              param: {
                namespace: string
                'execution.workflow_id': string
                'query.query_type': string
              }
            } & { json: QueryWorkflowRequest }
            output: QueryWorkflowResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                namespace: string
                'execution.workflow_id': string
                'query.query_type': string
              }
            } & { json: QueryWorkflowRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/workflows/:execution.workflow_id/trigger-rule': {
      $post:
        | {
            input: { param: { namespace: string; 'execution.workflow_id': string } } & {
              json: TriggerWorkflowRuleRequest
            }
            output: TriggerWorkflowRuleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; 'execution.workflow_id': string } } & {
              json: TriggerWorkflowRuleRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/workflows/:workflowId': {
      $post:
        | {
            input: { param: { namespace: string; workflowId: string } } & {
              json: StartWorkflowExecutionRequest
            }
            output: StartWorkflowExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; workflowId: string } } & {
              json: StartWorkflowExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/workflows/:workflowId/activities/:activityId/complete': {
      $post:
        | {
            input: { param: { namespace: string; workflowId: string; activityId: string } } & {
              json: RespondActivityTaskCompletedByIdRequest
            }
            output: RespondActivityTaskCompletedByIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; workflowId: string; activityId: string } } & {
              json: RespondActivityTaskCompletedByIdRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/workflows/:workflowId/activities/:activityId/fail': {
      $post:
        | {
            input: { param: { namespace: string; workflowId: string; activityId: string } } & {
              json: RespondActivityTaskFailedByIdRequest
            }
            output: RespondActivityTaskFailedByIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; workflowId: string; activityId: string } } & {
              json: RespondActivityTaskFailedByIdRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/workflows/:workflowId/activities/:activityId/heartbeat': {
      $post:
        | {
            input: { param: { namespace: string; workflowId: string; activityId: string } } & {
              json: RecordActivityTaskHeartbeatByIdRequest
            }
            output: RecordActivityTaskHeartbeatByIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; workflowId: string; activityId: string } } & {
              json: RecordActivityTaskHeartbeatByIdRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/workflows/:workflowId/activities/:activityId/pause': {
      $post:
        | {
            input: { param: { namespace: string; workflowId: string; activityId: string } } & {
              json: PauseActivityExecutionRequest
            }
            output: PauseActivityExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; workflowId: string; activityId: string } } & {
              json: PauseActivityExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/workflows/:workflowId/activities/:activityId/reset': {
      $post:
        | {
            input: { param: { namespace: string; workflowId: string; activityId: string } } & {
              json: ResetActivityExecutionRequest
            }
            output: ResetActivityExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; workflowId: string; activityId: string } } & {
              json: ResetActivityExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/workflows/:workflowId/activities/:activityId/resolve-as-canceled': {
      $post:
        | {
            input: { param: { namespace: string; workflowId: string; activityId: string } } & {
              json: RespondActivityTaskCanceledByIdRequest
            }
            output: RespondActivityTaskCanceledByIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; workflowId: string; activityId: string } } & {
              json: RespondActivityTaskCanceledByIdRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/workflows/:workflowId/activities/:activityId/unpause': {
      $post:
        | {
            input: { param: { namespace: string; workflowId: string; activityId: string } } & {
              json: UnpauseActivityExecutionRequest
            }
            output: UnpauseActivityExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; workflowId: string; activityId: string } } & {
              json: UnpauseActivityExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/workflows/:workflowId/activities/:activityId/update-options': {
      $post:
        | {
            input: { param: { namespace: string; workflowId: string; activityId: string } } & {
              json: UpdateActivityExecutionOptionsRequest
            }
            output: UpdateActivityExecutionOptionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; workflowId: string; activityId: string } } & {
              json: UpdateActivityExecutionOptionsRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/workflows/:workflowId/pause': {
      $post:
        | {
            input: { param: { namespace: string; workflowId: string } } & {
              json: PauseWorkflowExecutionRequest
            }
            output: PauseWorkflowExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; workflowId: string } } & {
              json: PauseWorkflowExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/workflows/:workflowId/signal-with-start/:signalName': {
      $post:
        | {
            input: { param: { namespace: string; workflowId: string; signalName: string } } & {
              json: SignalWithStartWorkflowExecutionRequest
            }
            output: SignalWithStartWorkflowExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; workflowId: string; signalName: string } } & {
              json: SignalWithStartWorkflowExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/workflows/:workflowId/unpause': {
      $post:
        | {
            input: { param: { namespace: string; workflowId: string } } & {
              json: UnpauseWorkflowExecutionRequest
            }
            output: UnpauseWorkflowExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; workflowId: string } } & {
              json: UnpauseWorkflowExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/workflows/:workflow_execution.workflow_id/cancel': {
      $post:
        | {
            input: { param: { namespace: string; 'workflow_execution.workflow_id': string } } & {
              json: RequestCancelWorkflowExecutionRequest
            }
            output: RequestCancelWorkflowExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; 'workflow_execution.workflow_id': string } } & {
              json: RequestCancelWorkflowExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/workflows/:workflow_execution.workflow_id/reset': {
      $post:
        | {
            input: { param: { namespace: string; 'workflow_execution.workflow_id': string } } & {
              json: ResetWorkflowExecutionRequest
            }
            output: ResetWorkflowExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; 'workflow_execution.workflow_id': string } } & {
              json: ResetWorkflowExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/workflows/:workflow_execution.workflow_id/signal/:signalName': {
      $post:
        | {
            input: {
              param: {
                namespace: string
                'workflow_execution.workflow_id': string
                signalName: string
              }
            } & { json: SignalWorkflowExecutionRequest }
            output: SignalWorkflowExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                namespace: string
                'workflow_execution.workflow_id': string
                signalName: string
              }
            } & { json: SignalWorkflowExecutionRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/workflows/:workflow_execution.workflow_id/terminate': {
      $post:
        | {
            input: { param: { namespace: string; 'workflow_execution.workflow_id': string } } & {
              json: TerminateWorkflowExecutionRequest
            }
            output: TerminateWorkflowExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; 'workflow_execution.workflow_id': string } } & {
              json: TerminateWorkflowExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/workflows/:workflow_execution.workflow_id/update-options': {
      $post:
        | {
            input: { param: { namespace: string; 'workflow_execution.workflow_id': string } } & {
              json: UpdateWorkflowExecutionOptionsRequest
            }
            output: UpdateWorkflowExecutionOptionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; 'workflow_execution.workflow_id': string } } & {
              json: UpdateWorkflowExecutionOptionsRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/namespaces/:namespace/workflows/:workflow_execution.workflow_id/update/:request.input.name': {
      $post:
        | {
            input: {
              param: {
                namespace: string
                'workflow_execution.workflow_id': string
                'request.input.name': string
              }
            } & { json: UpdateWorkflowExecutionRequest }
            output: UpdateWorkflowExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                namespace: string
                'workflow_execution.workflow_id': string
                'request.input.name': string
              }
            } & { json: UpdateWorkflowExecutionRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/nexus/endpoints': {
      $get:
        | {
            input: {
              query: {
                pageSize?: number | undefined
                nextPageToken?: string | undefined
                name?: string | undefined
              }
            }
            output: ListNexusEndpointsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageSize?: number | undefined
                nextPageToken?: string | undefined
                name?: string | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: CreateNexusEndpointRequest }
            output: CreateNexusEndpointResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateNexusEndpointRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/nexus/endpoints/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: GetNexusEndpointResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Status; outputFormat: 'json'; status: 200 }
      $delete:
        | {
            input: { param: { id: string } } & { query: { version?: string | undefined } }
            output: DeleteNexusEndpointResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { version?: string | undefined } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/nexus/endpoints/:id/update': {
      $post:
        | {
            input: { param: { id: string } } & { json: UpdateNexusEndpointRequest }
            output: UpdateNexusEndpointResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateNexusEndpointRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/system-info': {
      $get:
        | { input: {}; output: GetSystemInfoResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Status; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/cluster': {
      $get:
        | { input: {}; output: GetClusterInfoResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Status; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/cluster/namespaces': {
      $get:
        | {
            input: {
              query: {
                pageSize?: number | undefined
                nextPageToken?: string | undefined
                'namespaceFilter.includeDeleted'?: boolean | undefined
              }
            }
            output: ListNamespacesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageSize?: number | undefined
                nextPageToken?: string | undefined
                'namespaceFilter.includeDeleted'?: boolean | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: RegisterNamespaceRequest }
            output: RegisterNamespaceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RegisterNamespaceRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cluster/namespaces/:namespace': {
      $get:
        | {
            input: { param: { namespace: string } } & {
              query: { id?: string | undefined; weakConsistency?: boolean | undefined }
            }
            output: DescribeNamespaceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: { id?: string | undefined; weakConsistency?: boolean | undefined }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cluster/namespaces/:namespace/search-attributes': {
      $get:
        | {
            input: { param: { namespace: string } }
            output: ListSearchAttributesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cluster/namespaces/:namespace/update': {
      $post:
        | {
            input: { param: { namespace: string } } & { json: UpdateNamespaceRequest }
            output: UpdateNamespaceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & { json: UpdateNamespaceRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cluster/nexus/endpoints': {
      $get:
        | {
            input: {
              query: {
                pageSize?: number | undefined
                nextPageToken?: string | undefined
                name?: string | undefined
              }
            }
            output: ListNexusEndpointsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageSize?: number | undefined
                nextPageToken?: string | undefined
                name?: string | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: CreateNexusEndpointRequest }
            output: CreateNexusEndpointResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateNexusEndpointRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cluster/nexus/endpoints/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: GetNexusEndpointResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Status; outputFormat: 'json'; status: 200 }
      $delete:
        | {
            input: { param: { id: string } } & { query: { version?: string | undefined } }
            output: DeleteNexusEndpointResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { version?: string | undefined } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cluster/nexus/endpoints/:id/update': {
      $post:
        | {
            input: { param: { id: string } } & { json: UpdateNexusEndpointRequest }
            output: UpdateNexusEndpointResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateNexusEndpointRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/activities': {
      $get:
        | {
            input: { param: { namespace: string } } & {
              query: {
                pageSize?: number | undefined
                nextPageToken?: string | undefined
                query?: string | undefined
              }
            }
            output: ListActivityExecutionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                pageSize?: number | undefined
                nextPageToken?: string | undefined
                query?: string | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/activities-deprecated/pause': {
      $post:
        | {
            input: { param: { namespace: string } } & { json: PauseActivityRequest }
            output: PauseActivityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & { json: PauseActivityRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/activities-deprecated/reset': {
      $post:
        | {
            input: { param: { namespace: string } } & { json: ResetActivityRequest }
            output: ResetActivityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & { json: ResetActivityRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/activities-deprecated/unpause': {
      $post:
        | {
            input: { param: { namespace: string } } & { json: UnpauseActivityRequest }
            output: UnpauseActivityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & { json: UnpauseActivityRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/activities-deprecated/update-options': {
      $post:
        | {
            input: { param: { namespace: string } } & { json: UpdateActivityOptionsRequest }
            output: UpdateActivityOptionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & { json: UpdateActivityOptionsRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/activities/:activityId': {
      $get:
        | {
            input: { param: { namespace: string; activityId: string } } & {
              query: {
                runId?: string | undefined
                includeInput?: boolean | undefined
                includeOutcome?: boolean | undefined
                longPollToken?: string | undefined
              }
            }
            output: DescribeActivityExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; activityId: string } } & {
              query: {
                runId?: string | undefined
                includeInput?: boolean | undefined
                includeOutcome?: boolean | undefined
                longPollToken?: string | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: StartActivityExecutionRequest
            }
            output: StartActivityExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: StartActivityExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/activities/:activityId/cancel': {
      $post:
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: RequestCancelActivityExecutionRequest
            }
            output: RequestCancelActivityExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: RequestCancelActivityExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/activities/:activityId/complete': {
      $post:
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: RespondActivityTaskCompletedByIdRequest
            }
            output: RespondActivityTaskCompletedByIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: RespondActivityTaskCompletedByIdRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/activities/:activityId/fail': {
      $post:
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: RespondActivityTaskFailedByIdRequest
            }
            output: RespondActivityTaskFailedByIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: RespondActivityTaskFailedByIdRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/activities/:activityId/heartbeat': {
      $post:
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: RecordActivityTaskHeartbeatByIdRequest
            }
            output: RecordActivityTaskHeartbeatByIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: RecordActivityTaskHeartbeatByIdRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/activities/:activityId/outcome': {
      $get:
        | {
            input: { param: { namespace: string; activityId: string } } & {
              query: { runId?: string | undefined }
            }
            output: PollActivityExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; activityId: string } } & {
              query: { runId?: string | undefined }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/activities/:activityId/pause': {
      $post:
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: PauseActivityExecutionRequest
            }
            output: PauseActivityExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: PauseActivityExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/activities/:activityId/reset': {
      $post:
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: ResetActivityExecutionRequest
            }
            output: ResetActivityExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: ResetActivityExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/activities/:activityId/resolve-as-canceled': {
      $post:
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: RespondActivityTaskCanceledByIdRequest
            }
            output: RespondActivityTaskCanceledByIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: RespondActivityTaskCanceledByIdRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/activities/:activityId/terminate': {
      $post:
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: TerminateActivityExecutionRequest
            }
            output: TerminateActivityExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: TerminateActivityExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/activities/:activityId/unpause': {
      $post:
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: UnpauseActivityExecutionRequest
            }
            output: UnpauseActivityExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: UnpauseActivityExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/activities/:activityId/update-options': {
      $post:
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: UpdateActivityExecutionOptionsRequest
            }
            output: UpdateActivityExecutionOptionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; activityId: string } } & {
              json: UpdateActivityExecutionOptionsRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/activity-complete': {
      $post:
        | {
            input: { param: { namespace: string } } & { json: RespondActivityTaskCompletedRequest }
            output: RespondActivityTaskCompletedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & { json: RespondActivityTaskCompletedRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/activity-count': {
      $get:
        | {
            input: { param: { namespace: string } } & { query: { query?: string | undefined } }
            output: CountActivityExecutionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & { query: { query?: string | undefined } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/activity-fail': {
      $post:
        | {
            input: { param: { namespace: string } } & { json: RespondActivityTaskFailedRequest }
            output: RespondActivityTaskFailedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & { json: RespondActivityTaskFailedRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/activity-heartbeat': {
      $post:
        | {
            input: { param: { namespace: string } } & { json: RecordActivityTaskHeartbeatRequest }
            output: RecordActivityTaskHeartbeatResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & { json: RecordActivityTaskHeartbeatRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/activity-resolve-as-canceled': {
      $post:
        | {
            input: { param: { namespace: string } } & { json: RespondActivityTaskCanceledRequest }
            output: RespondActivityTaskCanceledResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & { json: RespondActivityTaskCanceledRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/archived-workflows': {
      $get:
        | {
            input: { param: { namespace: string } } & {
              query: {
                pageSize?: number | undefined
                nextPageToken?: string | undefined
                query?: string | undefined
              }
            }
            output: ListArchivedWorkflowExecutionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                pageSize?: number | undefined
                nextPageToken?: string | undefined
                query?: string | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/batch-operations': {
      $get:
        | {
            input: { param: { namespace: string } } & {
              query: { pageSize?: number | undefined; nextPageToken?: string | undefined }
            }
            output: ListBatchOperationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: { pageSize?: number | undefined; nextPageToken?: string | undefined }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/batch-operations/:jobId': {
      $get:
        | {
            input: { param: { namespace: string; jobId: string } }
            output: DescribeBatchOperationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; jobId: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { namespace: string; jobId: string } } & {
              json: StartBatchOperationRequest
            }
            output: StartBatchOperationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; jobId: string } } & {
              json: StartBatchOperationRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/batch-operations/:jobId/stop': {
      $post:
        | {
            input: { param: { namespace: string; jobId: string } } & {
              json: StopBatchOperationRequest
            }
            output: StopBatchOperationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; jobId: string } } & {
              json: StopBatchOperationRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/current-deployment/:deployment.series_name': {
      $post:
        | {
            input: { param: { namespace: string; 'deployment.series_name': string } } & {
              json: SetCurrentDeploymentRequest
            }
            output: SetCurrentDeploymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; 'deployment.series_name': string } } & {
              json: SetCurrentDeploymentRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/current-deployment/:seriesName': {
      $get:
        | {
            input: { param: { namespace: string; seriesName: string } }
            output: GetCurrentDeploymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; seriesName: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/deployments': {
      $get:
        | {
            input: { param: { namespace: string } } & {
              query: {
                pageSize?: number | undefined
                nextPageToken?: string | undefined
                seriesName?: string | undefined
              }
            }
            output: ListDeploymentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                pageSize?: number | undefined
                nextPageToken?: string | undefined
                seriesName?: string | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/deployments/:deployment.series_name/:deployment.build_id': {
      $get:
        | {
            input: {
              param: {
                namespace: string
                'deployment.series_name': string
                'deployment.build_id': string
              }
            } & {
              query: {
                'deployment.seriesName'?: string | undefined
                'deployment.buildId'?: string | undefined
              }
            }
            output: DescribeDeploymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                namespace: string
                'deployment.series_name': string
                'deployment.build_id': string
              }
            } & {
              query: {
                'deployment.seriesName'?: string | undefined
                'deployment.buildId'?: string | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/deployments/:deployment.series_name/:deployment.build_id/reachability': {
      $get:
        | {
            input: {
              param: {
                namespace: string
                'deployment.series_name': string
                'deployment.build_id': string
              }
            } & {
              query: {
                'deployment.seriesName'?: string | undefined
                'deployment.buildId'?: string | undefined
              }
            }
            output: GetDeploymentReachabilityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                namespace: string
                'deployment.series_name': string
                'deployment.build_id': string
              }
            } & {
              query: {
                'deployment.seriesName'?: string | undefined
                'deployment.buildId'?: string | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/nexus-operation-count': {
      $get:
        | {
            input: { param: { namespace: string } } & { query: { query?: string | undefined } }
            output: CountNexusOperationExecutionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & { query: { query?: string | undefined } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/nexus-operations': {
      $get:
        | {
            input: { param: { namespace: string } } & {
              query: {
                pageSize?: number | undefined
                nextPageToken?: string | undefined
                query?: string | undefined
              }
            }
            output: ListNexusOperationExecutionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                pageSize?: number | undefined
                nextPageToken?: string | undefined
                query?: string | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/nexus-operations/:operationId': {
      $get:
        | {
            input: { param: { namespace: string; operationId: string } } & {
              query: {
                runId?: string | undefined
                includeInput?: boolean | undefined
                includeOutcome?: boolean | undefined
                longPollToken?: string | undefined
              }
            }
            output: DescribeNexusOperationExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; operationId: string } } & {
              query: {
                runId?: string | undefined
                includeInput?: boolean | undefined
                includeOutcome?: boolean | undefined
                longPollToken?: string | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { namespace: string; operationId: string } } & {
              json: StartNexusOperationExecutionRequest
            }
            output: StartNexusOperationExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; operationId: string } } & {
              json: StartNexusOperationExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/nexus-operations/:operationId/cancel': {
      $post:
        | {
            input: { param: { namespace: string; operationId: string } } & {
              json: RequestCancelNexusOperationExecutionRequest
            }
            output: RequestCancelNexusOperationExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; operationId: string } } & {
              json: RequestCancelNexusOperationExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/nexus-operations/:operationId/poll': {
      $get:
        | {
            input: { param: { namespace: string; operationId: string } } & {
              query: {
                runId?: string | undefined
                waitStage?:
                  | 'NEXUS_OPERATION_WAIT_STAGE_UNSPECIFIED'
                  | 'NEXUS_OPERATION_WAIT_STAGE_STARTED'
                  | 'NEXUS_OPERATION_WAIT_STAGE_CLOSED'
                  | undefined
              }
            }
            output: PollNexusOperationExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; operationId: string } } & {
              query: {
                runId?: string | undefined
                waitStage?:
                  | 'NEXUS_OPERATION_WAIT_STAGE_UNSPECIFIED'
                  | 'NEXUS_OPERATION_WAIT_STAGE_STARTED'
                  | 'NEXUS_OPERATION_WAIT_STAGE_CLOSED'
                  | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/nexus-operations/:operationId/terminate': {
      $post:
        | {
            input: { param: { namespace: string; operationId: string } } & {
              json: TerminateNexusOperationExecutionRequest
            }
            output: TerminateNexusOperationExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; operationId: string } } & {
              json: TerminateNexusOperationExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/schedule-count': {
      $get:
        | {
            input: { param: { namespace: string } } & { query: { query?: string | undefined } }
            output: CountSchedulesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & { query: { query?: string | undefined } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/schedules': {
      $get:
        | {
            input: { param: { namespace: string } } & {
              query: {
                maximumPageSize?: number | undefined
                nextPageToken?: string | undefined
                query?: string | undefined
              }
            }
            output: ListSchedulesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                maximumPageSize?: number | undefined
                nextPageToken?: string | undefined
                query?: string | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/schedules/:scheduleId': {
      $get:
        | {
            input: { param: { namespace: string; scheduleId: string } }
            output: DescribeScheduleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; scheduleId: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { namespace: string; scheduleId: string } } & {
              json: CreateScheduleRequest
            }
            output: CreateScheduleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; scheduleId: string } } & {
              json: CreateScheduleRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { namespace: string; scheduleId: string } } & {
              query: { identity?: string | undefined }
            }
            output: DeleteScheduleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; scheduleId: string } } & {
              query: { identity?: string | undefined }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/schedules/:scheduleId/matching-times': {
      $get:
        | {
            input: { param: { namespace: string; scheduleId: string } } & {
              query: { startTime?: string | undefined; endTime?: string | undefined }
            }
            output: ListScheduleMatchingTimesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; scheduleId: string } } & {
              query: { startTime?: string | undefined; endTime?: string | undefined }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/schedules/:scheduleId/patch': {
      $post:
        | {
            input: { param: { namespace: string; scheduleId: string } } & {
              json: PatchScheduleRequest
            }
            output: PatchScheduleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; scheduleId: string } } & {
              json: PatchScheduleRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/schedules/:scheduleId/update': {
      $post:
        | {
            input: { param: { namespace: string; scheduleId: string } } & {
              json: UpdateScheduleRequest
            }
            output: UpdateScheduleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; scheduleId: string } } & {
              json: UpdateScheduleRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/task-queues/:taskQueue/update-config': {
      $post:
        | {
            input: { param: { namespace: string; taskQueue: string } } & {
              json: UpdateTaskQueueConfigRequest
            }
            output: UpdateTaskQueueConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; taskQueue: string } } & {
              json: UpdateTaskQueueConfigRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/task-queues/:taskQueue/worker-build-id-compatibility': {
      $get:
        | {
            input: { param: { namespace: string; taskQueue: string } } & {
              query: { maxSets?: number | undefined }
            }
            output: GetWorkerBuildIdCompatibilityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; taskQueue: string } } & {
              query: { maxSets?: number | undefined }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/task-queues/:taskQueue/worker-versioning-rules': {
      $get:
        | {
            input: { param: { namespace: string; taskQueue: string } }
            output: GetWorkerVersioningRulesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; taskQueue: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/task-queues/:task_queue.name': {
      $get:
        | {
            input: { param: { namespace: string; 'task_queue.name': string } } & {
              query: {
                'taskQueue.name'?: string | undefined
                'taskQueue.kind'?:
                  | 'TASK_QUEUE_KIND_UNSPECIFIED'
                  | 'TASK_QUEUE_KIND_NORMAL'
                  | 'TASK_QUEUE_KIND_STICKY'
                  | 'TASK_QUEUE_KIND_WORKER_COMMANDS'
                  | undefined
                'taskQueue.normalName'?: string | undefined
                taskQueueType?:
                  | 'TASK_QUEUE_TYPE_UNSPECIFIED'
                  | 'TASK_QUEUE_TYPE_WORKFLOW'
                  | 'TASK_QUEUE_TYPE_ACTIVITY'
                  | 'TASK_QUEUE_TYPE_NEXUS'
                  | undefined
                reportStats?: boolean | undefined
                reportConfig?: boolean | undefined
                includeTaskQueueStatus?: boolean | undefined
                apiMode?:
                  | 'DESCRIBE_TASK_QUEUE_MODE_UNSPECIFIED'
                  | 'DESCRIBE_TASK_QUEUE_MODE_ENHANCED'
                  | undefined
                'versions.buildIds'?: string[] | undefined
                'versions.unversioned'?: boolean | undefined
                'versions.allActive'?: boolean | undefined
                taskQueueTypes?:
                  | (
                      | 'TASK_QUEUE_TYPE_UNSPECIFIED'
                      | 'TASK_QUEUE_TYPE_WORKFLOW'
                      | 'TASK_QUEUE_TYPE_ACTIVITY'
                      | 'TASK_QUEUE_TYPE_NEXUS'
                    )[]
                  | undefined
                reportPollers?: boolean | undefined
                reportTaskReachability?: boolean | undefined
              }
            }
            output: DescribeTaskQueueResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; 'task_queue.name': string } } & {
              query: {
                'taskQueue.name'?: string | undefined
                'taskQueue.kind'?:
                  | 'TASK_QUEUE_KIND_UNSPECIFIED'
                  | 'TASK_QUEUE_KIND_NORMAL'
                  | 'TASK_QUEUE_KIND_STICKY'
                  | 'TASK_QUEUE_KIND_WORKER_COMMANDS'
                  | undefined
                'taskQueue.normalName'?: string | undefined
                taskQueueType?:
                  | 'TASK_QUEUE_TYPE_UNSPECIFIED'
                  | 'TASK_QUEUE_TYPE_WORKFLOW'
                  | 'TASK_QUEUE_TYPE_ACTIVITY'
                  | 'TASK_QUEUE_TYPE_NEXUS'
                  | undefined
                reportStats?: boolean | undefined
                reportConfig?: boolean | undefined
                includeTaskQueueStatus?: boolean | undefined
                apiMode?:
                  | 'DESCRIBE_TASK_QUEUE_MODE_UNSPECIFIED'
                  | 'DESCRIBE_TASK_QUEUE_MODE_ENHANCED'
                  | undefined
                'versions.buildIds'?: string[] | undefined
                'versions.unversioned'?: boolean | undefined
                'versions.allActive'?: boolean | undefined
                taskQueueTypes?:
                  | (
                      | 'TASK_QUEUE_TYPE_UNSPECIFIED'
                      | 'TASK_QUEUE_TYPE_WORKFLOW'
                      | 'TASK_QUEUE_TYPE_ACTIVITY'
                      | 'TASK_QUEUE_TYPE_NEXUS'
                    )[]
                  | undefined
                reportPollers?: boolean | undefined
                reportTaskReachability?: boolean | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/worker-deployment-versions/:deployment_version.deployment_name': {
      $post:
        | {
            input: {
              param: { namespace: string; 'deployment_version.deployment_name': string }
            } & { json: CreateWorkerDeploymentVersionRequest }
            output: CreateWorkerDeploymentVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { namespace: string; 'deployment_version.deployment_name': string }
            } & { json: CreateWorkerDeploymentVersionRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/worker-deployment-versions/:deployment_version.deployment_name/:deployment_version.build_id': {
      $get:
        | {
            input: {
              param: {
                namespace: string
                'deployment_version.deployment_name': string
                'deployment_version.build_id': string
              }
            } & {
              query: {
                version?: string | undefined
                'deploymentVersion.buildId'?: string | undefined
                'deploymentVersion.deploymentName'?: string | undefined
                reportTaskQueueStats?: boolean | undefined
              }
            }
            output: DescribeWorkerDeploymentVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                namespace: string
                'deployment_version.deployment_name': string
                'deployment_version.build_id': string
              }
            } & {
              query: {
                version?: string | undefined
                'deploymentVersion.buildId'?: string | undefined
                'deploymentVersion.deploymentName'?: string | undefined
                reportTaskQueueStats?: boolean | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: {
              param: {
                namespace: string
                'deployment_version.deployment_name': string
                'deployment_version.build_id': string
              }
            } & {
              query: {
                version?: string | undefined
                'deploymentVersion.buildId'?: string | undefined
                'deploymentVersion.deploymentName'?: string | undefined
                skipDrainage?: boolean | undefined
                identity?: string | undefined
              }
            }
            output: DeleteWorkerDeploymentVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                namespace: string
                'deployment_version.deployment_name': string
                'deployment_version.build_id': string
              }
            } & {
              query: {
                version?: string | undefined
                'deploymentVersion.buildId'?: string | undefined
                'deploymentVersion.deploymentName'?: string | undefined
                skipDrainage?: boolean | undefined
                identity?: string | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/worker-deployment-versions/:deployment_version.deployment_name/:deployment_version.build_id/update-compute-config': {
      $post:
        | {
            input: {
              param: {
                namespace: string
                'deployment_version.deployment_name': string
                'deployment_version.build_id': string
              }
            } & { json: UpdateWorkerDeploymentVersionComputeConfigRequest }
            output: UpdateWorkerDeploymentVersionComputeConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                namespace: string
                'deployment_version.deployment_name': string
                'deployment_version.build_id': string
              }
            } & { json: UpdateWorkerDeploymentVersionComputeConfigRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/worker-deployment-versions/:deployment_version.deployment_name/:deployment_version.build_id/update-metadata': {
      $post:
        | {
            input: {
              param: {
                namespace: string
                'deployment_version.deployment_name': string
                'deployment_version.build_id': string
              }
            } & { json: UpdateWorkerDeploymentVersionMetadataRequest }
            output: UpdateWorkerDeploymentVersionMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                namespace: string
                'deployment_version.deployment_name': string
                'deployment_version.build_id': string
              }
            } & { json: UpdateWorkerDeploymentVersionMetadataRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/worker-deployment-versions/:deployment_version.deployment_name/:deployment_version.build_id/validate-compute-config': {
      $post:
        | {
            input: {
              param: {
                namespace: string
                'deployment_version.deployment_name': string
                'deployment_version.build_id': string
              }
            } & { json: ValidateWorkerDeploymentVersionComputeConfigRequest }
            output: ValidateWorkerDeploymentVersionComputeConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                namespace: string
                'deployment_version.deployment_name': string
                'deployment_version.build_id': string
              }
            } & { json: ValidateWorkerDeploymentVersionComputeConfigRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/worker-deployments': {
      $get:
        | {
            input: { param: { namespace: string } } & {
              query: { pageSize?: number | undefined; nextPageToken?: string | undefined }
            }
            output: ListWorkerDeploymentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: { pageSize?: number | undefined; nextPageToken?: string | undefined }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/worker-deployments/:deploymentName': {
      $get:
        | {
            input: { param: { namespace: string; deploymentName: string } }
            output: DescribeWorkerDeploymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; deploymentName: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { namespace: string; deploymentName: string } } & {
              json: CreateWorkerDeploymentRequest
            }
            output: CreateWorkerDeploymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; deploymentName: string } } & {
              json: CreateWorkerDeploymentRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { namespace: string; deploymentName: string } } & {
              query: { identity?: string | undefined }
            }
            output: DeleteWorkerDeploymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; deploymentName: string } } & {
              query: { identity?: string | undefined }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/worker-deployments/:deploymentName/set-current-version': {
      $post:
        | {
            input: { param: { namespace: string; deploymentName: string } } & {
              json: SetWorkerDeploymentCurrentVersionRequest
            }
            output: SetWorkerDeploymentCurrentVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; deploymentName: string } } & {
              json: SetWorkerDeploymentCurrentVersionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/worker-deployments/:deploymentName/set-manager': {
      $post:
        | {
            input: { param: { namespace: string; deploymentName: string } } & {
              json: SetWorkerDeploymentManagerRequest
            }
            output: SetWorkerDeploymentManagerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; deploymentName: string } } & {
              json: SetWorkerDeploymentManagerRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/worker-deployments/:deploymentName/set-ramping-version': {
      $post:
        | {
            input: { param: { namespace: string; deploymentName: string } } & {
              json: SetWorkerDeploymentRampingVersionRequest
            }
            output: SetWorkerDeploymentRampingVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; deploymentName: string } } & {
              json: SetWorkerDeploymentRampingVersionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/worker-task-reachability': {
      $get:
        | {
            input: { param: { namespace: string } } & {
              query: {
                buildIds?: string[] | undefined
                taskQueues?: string[] | undefined
                reachability?:
                  | 'TASK_REACHABILITY_UNSPECIFIED'
                  | 'TASK_REACHABILITY_NEW_WORKFLOWS'
                  | 'TASK_REACHABILITY_EXISTING_WORKFLOWS'
                  | 'TASK_REACHABILITY_OPEN_WORKFLOWS'
                  | 'TASK_REACHABILITY_CLOSED_WORKFLOWS'
                  | undefined
              }
            }
            output: GetWorkerTaskReachabilityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                buildIds?: string[] | undefined
                taskQueues?: string[] | undefined
                reachability?:
                  | 'TASK_REACHABILITY_UNSPECIFIED'
                  | 'TASK_REACHABILITY_NEW_WORKFLOWS'
                  | 'TASK_REACHABILITY_EXISTING_WORKFLOWS'
                  | 'TASK_REACHABILITY_OPEN_WORKFLOWS'
                  | 'TASK_REACHABILITY_CLOSED_WORKFLOWS'
                  | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/workers': {
      $get:
        | {
            input: { param: { namespace: string } } & {
              query: {
                pageSize?: number | undefined
                nextPageToken?: string | undefined
                query?: string | undefined
                includeSystemWorkers?: boolean | undefined
              }
            }
            output: ListWorkersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                pageSize?: number | undefined
                nextPageToken?: string | undefined
                query?: string | undefined
                includeSystemWorkers?: boolean | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/workers/describe/:workerInstanceKey': {
      $get:
        | {
            input: { param: { namespace: string; workerInstanceKey: string } }
            output: DescribeWorkerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; workerInstanceKey: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/workers/fetch-config': {
      $post:
        | {
            input: { param: { namespace: string } } & { json: FetchWorkerConfigRequest }
            output: FetchWorkerConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & { json: FetchWorkerConfigRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/workers/heartbeat': {
      $post:
        | {
            input: { param: { namespace: string } } & { json: RecordWorkerHeartbeatRequest }
            output: RecordWorkerHeartbeatResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & { json: RecordWorkerHeartbeatRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/workers/update-config': {
      $post:
        | {
            input: { param: { namespace: string } } & { json: UpdateWorkerConfigRequest }
            output: UpdateWorkerConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & { json: UpdateWorkerConfigRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/workflow-count': {
      $get:
        | {
            input: { param: { namespace: string } } & { query: { query?: string | undefined } }
            output: CountWorkflowExecutionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & { query: { query?: string | undefined } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/workflow-rules': {
      $get:
        | {
            input: { param: { namespace: string } } & {
              query: { nextPageToken?: string | undefined }
            }
            output: ListWorkflowRulesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: { nextPageToken?: string | undefined }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { namespace: string } } & { json: CreateWorkflowRuleRequest }
            output: CreateWorkflowRuleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & { json: CreateWorkflowRuleRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/workflow-rules/:ruleId': {
      $get:
        | {
            input: { param: { namespace: string; ruleId: string } }
            output: DescribeWorkflowRuleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; ruleId: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { namespace: string; ruleId: string } }
            output: DeleteWorkflowRuleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; ruleId: string } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/workflows': {
      $get:
        | {
            input: { param: { namespace: string } } & {
              query: {
                pageSize?: number | undefined
                nextPageToken?: string | undefined
                query?: string | undefined
              }
            }
            output: ListWorkflowExecutionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string } } & {
              query: {
                pageSize?: number | undefined
                nextPageToken?: string | undefined
                query?: string | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/workflows/:execution.workflow_id': {
      $get:
        | {
            input: { param: { namespace: string; 'execution.workflow_id': string } } & {
              query: {
                'execution.workflowId'?: string | undefined
                'execution.runId'?: string | undefined
              }
            }
            output: DescribeWorkflowExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; 'execution.workflow_id': string } } & {
              query: {
                'execution.workflowId'?: string | undefined
                'execution.runId'?: string | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/workflows/:execution.workflow_id/history': {
      $get:
        | {
            input: { param: { namespace: string; 'execution.workflow_id': string } } & {
              query: {
                'execution.workflowId'?: string | undefined
                'execution.runId'?: string | undefined
                maximumPageSize?: number | undefined
                nextPageToken?: string | undefined
                waitNewEvent?: boolean | undefined
                historyEventFilterType?:
                  | 'HISTORY_EVENT_FILTER_TYPE_UNSPECIFIED'
                  | 'HISTORY_EVENT_FILTER_TYPE_ALL_EVENT'
                  | 'HISTORY_EVENT_FILTER_TYPE_CLOSE_EVENT'
                  | undefined
                skipArchival?: boolean | undefined
              }
            }
            output: GetWorkflowExecutionHistoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; 'execution.workflow_id': string } } & {
              query: {
                'execution.workflowId'?: string | undefined
                'execution.runId'?: string | undefined
                maximumPageSize?: number | undefined
                nextPageToken?: string | undefined
                waitNewEvent?: boolean | undefined
                historyEventFilterType?:
                  | 'HISTORY_EVENT_FILTER_TYPE_UNSPECIFIED'
                  | 'HISTORY_EVENT_FILTER_TYPE_ALL_EVENT'
                  | 'HISTORY_EVENT_FILTER_TYPE_CLOSE_EVENT'
                  | undefined
                skipArchival?: boolean | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/workflows/:execution.workflow_id/history-reverse': {
      $get:
        | {
            input: { param: { namespace: string; 'execution.workflow_id': string } } & {
              query: {
                'execution.workflowId'?: string | undefined
                'execution.runId'?: string | undefined
                maximumPageSize?: number | undefined
                nextPageToken?: string | undefined
              }
            }
            output: GetWorkflowExecutionHistoryReverseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; 'execution.workflow_id': string } } & {
              query: {
                'execution.workflowId'?: string | undefined
                'execution.runId'?: string | undefined
                maximumPageSize?: number | undefined
                nextPageToken?: string | undefined
              }
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/workflows/:execution.workflow_id/query/:query.query_type': {
      $post:
        | {
            input: {
              param: {
                namespace: string
                'execution.workflow_id': string
                'query.query_type': string
              }
            } & { json: QueryWorkflowRequest }
            output: QueryWorkflowResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                namespace: string
                'execution.workflow_id': string
                'query.query_type': string
              }
            } & { json: QueryWorkflowRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/workflows/:execution.workflow_id/trigger-rule': {
      $post:
        | {
            input: { param: { namespace: string; 'execution.workflow_id': string } } & {
              json: TriggerWorkflowRuleRequest
            }
            output: TriggerWorkflowRuleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; 'execution.workflow_id': string } } & {
              json: TriggerWorkflowRuleRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/workflows/:workflowId': {
      $post:
        | {
            input: { param: { namespace: string; workflowId: string } } & {
              json: StartWorkflowExecutionRequest
            }
            output: StartWorkflowExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; workflowId: string } } & {
              json: StartWorkflowExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/workflows/:workflowId/activities/:activityId/complete': {
      $post:
        | {
            input: { param: { namespace: string; workflowId: string; activityId: string } } & {
              json: RespondActivityTaskCompletedByIdRequest
            }
            output: RespondActivityTaskCompletedByIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; workflowId: string; activityId: string } } & {
              json: RespondActivityTaskCompletedByIdRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/workflows/:workflowId/activities/:activityId/fail': {
      $post:
        | {
            input: { param: { namespace: string; workflowId: string; activityId: string } } & {
              json: RespondActivityTaskFailedByIdRequest
            }
            output: RespondActivityTaskFailedByIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; workflowId: string; activityId: string } } & {
              json: RespondActivityTaskFailedByIdRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/workflows/:workflowId/activities/:activityId/heartbeat': {
      $post:
        | {
            input: { param: { namespace: string; workflowId: string; activityId: string } } & {
              json: RecordActivityTaskHeartbeatByIdRequest
            }
            output: RecordActivityTaskHeartbeatByIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; workflowId: string; activityId: string } } & {
              json: RecordActivityTaskHeartbeatByIdRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/workflows/:workflowId/activities/:activityId/pause': {
      $post:
        | {
            input: { param: { namespace: string; workflowId: string; activityId: string } } & {
              json: PauseActivityExecutionRequest
            }
            output: PauseActivityExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; workflowId: string; activityId: string } } & {
              json: PauseActivityExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/workflows/:workflowId/activities/:activityId/reset': {
      $post:
        | {
            input: { param: { namespace: string; workflowId: string; activityId: string } } & {
              json: ResetActivityExecutionRequest
            }
            output: ResetActivityExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; workflowId: string; activityId: string } } & {
              json: ResetActivityExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/workflows/:workflowId/activities/:activityId/resolve-as-canceled': {
      $post:
        | {
            input: { param: { namespace: string; workflowId: string; activityId: string } } & {
              json: RespondActivityTaskCanceledByIdRequest
            }
            output: RespondActivityTaskCanceledByIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; workflowId: string; activityId: string } } & {
              json: RespondActivityTaskCanceledByIdRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/workflows/:workflowId/activities/:activityId/unpause': {
      $post:
        | {
            input: { param: { namespace: string; workflowId: string; activityId: string } } & {
              json: UnpauseActivityExecutionRequest
            }
            output: UnpauseActivityExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; workflowId: string; activityId: string } } & {
              json: UnpauseActivityExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/workflows/:workflowId/activities/:activityId/update-options': {
      $post:
        | {
            input: { param: { namespace: string; workflowId: string; activityId: string } } & {
              json: UpdateActivityExecutionOptionsRequest
            }
            output: UpdateActivityExecutionOptionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; workflowId: string; activityId: string } } & {
              json: UpdateActivityExecutionOptionsRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/workflows/:workflowId/pause': {
      $post:
        | {
            input: { param: { namespace: string; workflowId: string } } & {
              json: PauseWorkflowExecutionRequest
            }
            output: PauseWorkflowExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; workflowId: string } } & {
              json: PauseWorkflowExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/workflows/:workflowId/signal-with-start/:signalName': {
      $post:
        | {
            input: { param: { namespace: string; workflowId: string; signalName: string } } & {
              json: SignalWithStartWorkflowExecutionRequest
            }
            output: SignalWithStartWorkflowExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; workflowId: string; signalName: string } } & {
              json: SignalWithStartWorkflowExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/workflows/:workflowId/unpause': {
      $post:
        | {
            input: { param: { namespace: string; workflowId: string } } & {
              json: UnpauseWorkflowExecutionRequest
            }
            output: UnpauseWorkflowExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; workflowId: string } } & {
              json: UnpauseWorkflowExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/workflows/:workflow_execution.workflow_id/cancel': {
      $post:
        | {
            input: { param: { namespace: string; 'workflow_execution.workflow_id': string } } & {
              json: RequestCancelWorkflowExecutionRequest
            }
            output: RequestCancelWorkflowExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; 'workflow_execution.workflow_id': string } } & {
              json: RequestCancelWorkflowExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/workflows/:workflow_execution.workflow_id/reset': {
      $post:
        | {
            input: { param: { namespace: string; 'workflow_execution.workflow_id': string } } & {
              json: ResetWorkflowExecutionRequest
            }
            output: ResetWorkflowExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; 'workflow_execution.workflow_id': string } } & {
              json: ResetWorkflowExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/workflows/:workflow_execution.workflow_id/signal/:signalName': {
      $post:
        | {
            input: {
              param: {
                namespace: string
                'workflow_execution.workflow_id': string
                signalName: string
              }
            } & { json: SignalWorkflowExecutionRequest }
            output: SignalWorkflowExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                namespace: string
                'workflow_execution.workflow_id': string
                signalName: string
              }
            } & { json: SignalWorkflowExecutionRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/workflows/:workflow_execution.workflow_id/terminate': {
      $post:
        | {
            input: { param: { namespace: string; 'workflow_execution.workflow_id': string } } & {
              json: TerminateWorkflowExecutionRequest
            }
            output: TerminateWorkflowExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; 'workflow_execution.workflow_id': string } } & {
              json: TerminateWorkflowExecutionRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/workflows/:workflow_execution.workflow_id/update-options': {
      $post:
        | {
            input: { param: { namespace: string; 'workflow_execution.workflow_id': string } } & {
              json: UpdateWorkflowExecutionOptionsRequest
            }
            output: UpdateWorkflowExecutionOptionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; 'workflow_execution.workflow_id': string } } & {
              json: UpdateWorkflowExecutionOptionsRequest
            }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/namespaces/:namespace/workflows/:workflow_execution.workflow_id/update/:request.input.name': {
      $post:
        | {
            input: {
              param: {
                namespace: string
                'workflow_execution.workflow_id': string
                'request.input.name': string
              }
            } & { json: UpdateWorkflowExecutionRequest }
            output: UpdateWorkflowExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                namespace: string
                'workflow_execution.workflow_id': string
                'request.input.name': string
              }
            } & { json: UpdateWorkflowExecutionRequest }
            output: Status
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/system-info': {
      $get:
        | { input: {}; output: GetSystemInfoResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Status; outputFormat: 'json'; status: 200 }
    }
  },
  '/'
>
export default routes
