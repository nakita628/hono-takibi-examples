import { createRoute, z } from '@hono/zod-openapi'

const CountSchema = z.int().min(0).openapi('Count')

const TruncatedSchema = z.boolean().openapi('Truncated')

const WorkflowExecutionCountSchema = z
  .object({
    count: CountSchema.openapi({ description: 'The number of workflow executions.' }),
    truncated: TruncatedSchema.exactOptional().openapi({
      description:
        'If set to true, indicates that the actual count was more than the maximum supported by this API and the count returned is the truncated value.',
    }),
  })
  .openapi({
    required: ['count'],
    description:
      'Contains the count of workflow executions returned from <a>CountOpenWorkflowExecutions</a> or <a>CountClosedWorkflowExecutions</a> ',
  })
  .openapi('WorkflowExecutionCount')

const DomainNameSchema = z.string().min(1).max(256).openapi('DomainName')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const ExecutionTimeFilterSchema = z
  .object({
    oldestDate: TimestampSchema.openapi({
      description: 'Specifies the oldest start or close date and time to return.',
    }),
    latestDate: TimestampSchema.exactOptional().openapi({
      description: 'Specifies the latest start or close date and time to return.',
    }),
  })
  .openapi({
    required: ['oldestDate'],
    description:
      'Used to filter the workflow executions in visibility APIs by various time-based rules. Each parameter, if specified, defines a rule that must be satisfied by each returned query result. The parameter values are in the <a href="https://en.wikipedia.org/wiki/Unix_time">Unix Time format</a>. For example: <code>"oldestDate": 1325376070.</code> ',
  })
  .openapi('ExecutionTimeFilter')

const WorkflowIdSchema = z.string().min(1).max(256).openapi('WorkflowId')

const WorkflowExecutionFilterSchema = z
  .object({
    workflowId: WorkflowIdSchema.openapi({
      description: 'The workflowId to pass of match the criteria of this filter.',
    }),
  })
  .openapi({
    required: ['workflowId'],
    description:
      'Used to filter the workflow executions in visibility APIs by their <code>workflowId</code>.',
  })
  .openapi('WorkflowExecutionFilter')

const NameSchema = z.string().min(1).max(256).openapi('Name')

const VersionOptionalSchema = z.string().max(64).openapi('VersionOptional')

const WorkflowTypeFilterSchema = z
  .object({
    name: NameSchema.openapi({ description: ' Name of the workflow type.' }),
    version: VersionOptionalSchema.exactOptional().openapi({
      description: 'Version of the workflow type.',
    }),
  })
  .openapi({
    required: ['name'],
    description:
      'Used to filter workflow execution query results by type. Each parameter, if specified, defines a rule that must be satisfied by each returned result.',
  })
  .openapi('WorkflowTypeFilter')

const TagSchema = z.string().min(0).max(256).openapi('Tag')

const TagFilterSchema = z
  .object({
    tag: TagSchema.openapi({
      description:
        '<p> Specifies the tag that must be associated with the execution for it to meet the filter criteria.</p> <p>Tags may only contain unicode letters, digits, whitespace, or these symbols: <code>_ . : / = + - @</code>.</p>',
    }),
  })
  .openapi({
    required: ['tag'],
    description: 'Used to filter the workflow executions in visibility APIs based on a tag.',
  })
  .openapi('TagFilter')

const CloseStatusSchema = z
  .enum(['COMPLETED', 'FAILED', 'CANCELED', 'TERMINATED', 'CONTINUED_AS_NEW', 'TIMED_OUT'])
  .openapi('CloseStatus')

const CloseStatusFilterSchema = z
  .object({
    status: CloseStatusSchema.openapi({
      description:
        ' The close status that must match the close status of an execution for it to meet the criteria of this filter.',
    }),
  })
  .openapi({
    required: ['status'],
    description:
      'Used to filter the closed workflow executions in visibility APIs by their close status.',
  })
  .openapi('CloseStatusFilter')

const CountClosedWorkflowExecutionsInputSchema = z
  .object({
    domain: DomainNameSchema.openapi({
      description: 'The name of the domain containing the workflow executions to count.',
    }),
    startTimeFilter: ExecutionTimeFilterSchema.exactOptional().openapi({
      description:
        '<p>If specified, only workflow executions that meet the start time criteria of the filter are counted.</p> <note> <p> <code>startTimeFilter</code> and <code>closeTimeFilter</code> are mutually exclusive. You must specify one of these in a request but not both.</p> </note>',
    }),
    closeTimeFilter: ExecutionTimeFilterSchema.exactOptional().openapi({
      description:
        '<p>If specified, only workflow executions that meet the close time criteria of the filter are counted.</p> <note> <p> <code>startTimeFilter</code> and <code>closeTimeFilter</code> are mutually exclusive. You must specify one of these in a request but not both.</p> </note>',
    }),
    executionFilter: WorkflowExecutionFilterSchema.exactOptional().openapi({
      description:
        '<p>If specified, only workflow executions matching the <code>WorkflowId</code> in the filter are counted.</p> <note> <p> <code>closeStatusFilter</code>, <code>executionFilter</code>, <code>typeFilter</code> and <code>tagFilter</code> are mutually exclusive. You can specify at most one of these in a request.</p> </note>',
    }),
    typeFilter: WorkflowTypeFilterSchema.exactOptional().openapi({
      description:
        '<p>If specified, indicates the type of the workflow executions to be counted.</p> <note> <p> <code>closeStatusFilter</code>, <code>executionFilter</code>, <code>typeFilter</code> and <code>tagFilter</code> are mutually exclusive. You can specify at most one of these in a request.</p> </note>',
    }),
    tagFilter: TagFilterSchema.exactOptional().openapi({
      description:
        '<p>If specified, only executions that have a tag that matches the filter are counted.</p> <note> <p> <code>closeStatusFilter</code>, <code>executionFilter</code>, <code>typeFilter</code> and <code>tagFilter</code> are mutually exclusive. You can specify at most one of these in a request.</p> </note>',
    }),
    closeStatusFilter: CloseStatusFilterSchema.exactOptional().openapi({
      description:
        '<p>If specified, only workflow executions that match this close status are counted. This filter has an affect only if <code>executionStatus</code> is specified as <code>CLOSED</code>.</p> <note> <p> <code>closeStatusFilter</code>, <code>executionFilter</code>, <code>typeFilter</code> and <code>tagFilter</code> are mutually exclusive. You can specify at most one of these in a request.</p> </note>',
    }),
  })
  .openapi({ required: ['domain'], title: 'CountClosedWorkflowExecutionsInput' })
  .openapi('CountClosedWorkflowExecutionsInput')

const UnknownResourceFaultSchema = z.any().openapi('UnknownResourceFault')

const OperationNotPermittedFaultSchema = z.any().openapi('OperationNotPermittedFault')

const CountOpenWorkflowExecutionsInputSchema = z
  .object({
    domain: DomainNameSchema.openapi({
      description: 'The name of the domain containing the workflow executions to count.',
    }),
    startTimeFilter: ExecutionTimeFilterSchema.openapi({
      description:
        'Specifies the start time criteria that workflow executions must meet in order to be counted.',
    }),
    typeFilter: WorkflowTypeFilterSchema.exactOptional().openapi({
      description:
        '<p>Specifies the type of the workflow executions to be counted.</p> <note> <p> <code>executionFilter</code>, <code>typeFilter</code> and <code>tagFilter</code> are mutually exclusive. You can specify at most one of these in a request.</p> </note>',
    }),
    tagFilter: TagFilterSchema.exactOptional().openapi({
      description:
        '<p>If specified, only executions that have a tag that matches the filter are counted.</p> <note> <p> <code>executionFilter</code>, <code>typeFilter</code> and <code>tagFilter</code> are mutually exclusive. You can specify at most one of these in a request.</p> </note>',
    }),
    executionFilter: WorkflowExecutionFilterSchema.exactOptional().openapi({
      description:
        '<p>If specified, only workflow executions matching the <code>WorkflowId</code> in the filter are counted.</p> <note> <p> <code>executionFilter</code>, <code>typeFilter</code> and <code>tagFilter</code> are mutually exclusive. You can specify at most one of these in a request.</p> </note>',
    }),
  })
  .openapi({ required: ['domain', 'startTimeFilter'], title: 'CountOpenWorkflowExecutionsInput' })
  .openapi('CountOpenWorkflowExecutionsInput')

const PendingTaskCountSchema = z
  .object({
    count: CountSchema.openapi({ description: 'The number of tasks in the task list.' }),
    truncated: TruncatedSchema.exactOptional().openapi({
      description:
        'If set to true, indicates that the actual count was more than the maximum supported by this API and the count returned is the truncated value.',
    }),
  })
  .openapi({ required: ['count'], description: 'Contains the count of tasks in a task list.' })
  .openapi('PendingTaskCount')

const TaskListSchema = z
  .object({ name: NameSchema.openapi({ description: 'The name of the task list.' }) })
  .openapi({ required: ['name'], description: 'Represents a task list.' })
  .openapi('TaskList')

const CountPendingActivityTasksInputSchema = z
  .object({
    domain: DomainNameSchema.openapi({
      description: 'The name of the domain that contains the task list.',
    }),
    taskList: TaskListSchema.openapi({ description: 'The name of the task list.' }),
  })
  .openapi({ required: ['domain', 'taskList'], title: 'CountPendingActivityTasksInput' })
  .openapi('CountPendingActivityTasksInput')

const CountPendingDecisionTasksInputSchema = z
  .object({
    domain: DomainNameSchema.openapi({
      description: 'The name of the domain that contains the task list.',
    }),
    taskList: TaskListSchema.openapi({ description: 'The name of the task list.' }),
  })
  .openapi({ required: ['domain', 'taskList'], title: 'CountPendingDecisionTasksInput' })
  .openapi('CountPendingDecisionTasksInput')

const VersionSchema = z.string().min(1).max(64).openapi('Version')

const ActivityTypeSchema = z
  .object({
    name: NameSchema.openapi({
      description:
        '<p>The name of this activity.</p> <note> <p>The combination of activity type name and version must be unique within a domain.</p> </note>',
    }),
    version: VersionSchema.openapi({
      description:
        '<p>The version of this activity.</p> <note> <p>The combination of activity type name and version must be unique with in a domain.</p> </note>',
    }),
  })
  .openapi({ required: ['name', 'version'], description: 'Represents an activity type.' })
  .openapi('ActivityType')

const DeprecateActivityTypeInputSchema = z
  .object({
    domain: DomainNameSchema.openapi({
      description: 'The name of the domain in which the activity type is registered.',
    }),
    activityType: ActivityTypeSchema.openapi({ description: 'The activity type to deprecate.' }),
  })
  .openapi({ required: ['domain', 'activityType'], title: 'DeprecateActivityTypeInput' })
  .openapi('DeprecateActivityTypeInput')

const TypeDeprecatedFaultSchema = z.any().openapi('TypeDeprecatedFault')

const DeprecateDomainInputSchema = z
  .object({
    name: DomainNameSchema.openapi({ description: 'The name of the domain to deprecate.' }),
  })
  .openapi({ required: ['name'], title: 'DeprecateDomainInput' })
  .openapi('DeprecateDomainInput')

const DomainDeprecatedFaultSchema = z.any().openapi('DomainDeprecatedFault')

const WorkflowTypeSchema = z
  .object({
    name: NameSchema.openapi({
      description:
        '<p> The name of the workflow type.</p> <note> <p>The combination of workflow type name and version must be unique with in a domain.</p> </note>',
    }),
    version: VersionSchema.openapi({
      description:
        '<p> The version of the workflow type.</p> <note> <p>The combination of workflow type name and version must be unique with in a domain.</p> </note>',
    }),
  })
  .openapi({ required: ['name', 'version'], description: 'Represents a workflow type.' })
  .openapi('WorkflowType')

const DeprecateWorkflowTypeInputSchema = z
  .object({
    domain: DomainNameSchema.openapi({
      description: 'The name of the domain in which the workflow type is registered.',
    }),
    workflowType: WorkflowTypeSchema.openapi({ description: 'The workflow type to deprecate.' }),
  })
  .openapi({ required: ['domain', 'workflowType'], title: 'DeprecateWorkflowTypeInput' })
  .openapi('DeprecateWorkflowTypeInput')

const RegistrationStatusSchema = z.enum(['REGISTERED', 'DEPRECATED']).openapi('RegistrationStatus')

const DescriptionSchema = z.string().max(1024).openapi('Description')

const ActivityTypeInfoSchema = z
  .object({
    activityType: ActivityTypeSchema.openapi({
      description: 'The <a>ActivityType</a> type structure representing the activity type.',
    }),
    status: RegistrationStatusSchema.openapi({
      description: 'The current status of the activity type.',
    }),
    description: DescriptionSchema.exactOptional().openapi({
      description: 'The description of the activity type provided in <a>RegisterActivityType</a>.',
    }),
    creationDate: TimestampSchema.openapi({
      description:
        'The date and time this activity type was created through <a>RegisterActivityType</a>.',
    }),
    deprecationDate: TimestampSchema.exactOptional().openapi({
      description: 'If DEPRECATED, the date and time <a>DeprecateActivityType</a> was called.',
    }),
  })
  .openapi({
    required: ['activityType', 'status', 'creationDate'],
    description: 'Detailed information about an activity type.',
  })
  .openapi('ActivityTypeInfo')

const DurationInSecondsOptionalSchema = z.string().max(8).openapi('DurationInSecondsOptional')

const TaskPrioritySchema = z.string().openapi('TaskPriority')

const ActivityTypeConfigurationSchema = z
  .object({
    defaultTaskStartToCloseTimeout: DurationInSecondsOptionalSchema.exactOptional().openapi({
      description:
        '<p> The default maximum duration for tasks of an activity type specified when registering the activity type. You can override this default when scheduling a task through the <code>ScheduleActivityTask</code> <a>Decision</a>.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>',
    }),
    defaultTaskHeartbeatTimeout: DurationInSecondsOptionalSchema.exactOptional().openapi({
      description:
        '<p> The default maximum time, in seconds, before which a worker processing a task must report progress by calling <a>RecordActivityTaskHeartbeat</a>.</p> <p>You can specify this value only when <i>registering</i> an activity type. The registered default value can be overridden when you schedule a task through the <code>ScheduleActivityTask</code> <a>Decision</a>. If the activity worker subsequently attempts to record a heartbeat or returns a result, the activity worker receives an <code>UnknownResource</code> fault. In this case, Amazon SWF no longer considers the activity task to be valid; the activity worker should clean up the activity task.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>',
    }),
    defaultTaskList: TaskListSchema.exactOptional().openapi({
      description:
        " The default task list specified for this activity type at registration. This default is used if a task list isn't provided when a task is scheduled through the <code>ScheduleActivityTask</code> <a>Decision</a>. You can override the default registered task list when scheduling a task through the <code>ScheduleActivityTask</code> <a>Decision</a>.",
    }),
    defaultTaskPriority: TaskPrioritySchema.exactOptional().openapi({
      description:
        '<p> The default task priority for tasks of this activity type, specified at registration. If not set, then <code>0</code> is used as the default priority. This default can be overridden when scheduling an activity task.</p> <p>Valid values are integers that range from Java\'s <code>Integer.MIN_VALUE</code> (-2147483648) to <code>Integer.MAX_VALUE</code> (2147483647). Higher numbers indicate higher priority.</p> <p>For more information about setting task priority, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html">Setting Task Priority</a> in the <i>Amazon SWF Developer Guide</i>.</p>',
    }),
    defaultTaskScheduleToStartTimeout: DurationInSecondsOptionalSchema.exactOptional().openapi({
      description:
        '<p> The default maximum duration, specified when registering the activity type, that a task of an activity type can wait before being assigned to a worker. You can override this default when scheduling a task through the <code>ScheduleActivityTask</code> <a>Decision</a>.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>',
    }),
    defaultTaskScheduleToCloseTimeout: DurationInSecondsOptionalSchema.exactOptional().openapi({
      description:
        '<p> The default maximum duration, specified when registering the activity type, for tasks of this activity type. You can override this default when scheduling a task through the <code>ScheduleActivityTask</code> <a>Decision</a>.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>',
    }),
  })
  .openapi({
    description: 'Configuration settings registered with the activity type.',
    required: [],
  })
  .openapi('ActivityTypeConfiguration')

const ActivityTypeDetailSchema = z
  .object({
    typeInfo: ActivityTypeInfoSchema.openapi({
      description:
        '<p>General information about the activity type.</p> <p>The status of activity type (returned in the ActivityTypeInfo structure) can be one of the following.</p> <ul> <li> <p> <code>REGISTERED</code> – The type is registered and available. Workers supporting this type should be running. </p> </li> <li> <p> <code>DEPRECATED</code> – The type was deprecated using <a>DeprecateActivityType</a>, but is still in use. You should keep workers supporting this type running. You cannot create new tasks of this type. </p> </li> </ul>',
    }),
    configuration: ActivityTypeConfigurationSchema.openapi({
      description: 'The configuration settings registered with the activity type.',
    }),
  })
  .openapi({
    required: ['typeInfo', 'configuration'],
    description: 'Detailed information about an activity type.',
  })
  .openapi('ActivityTypeDetail')

const DescribeActivityTypeInputSchema = z
  .object({
    domain: DomainNameSchema.openapi({
      description: 'The name of the domain in which the activity type is registered.',
    }),
    activityType: ActivityTypeSchema.openapi({
      description:
        'The activity type to get information about. Activity types are identified by the <code>name</code> and <code>version</code> that were supplied when the activity was registered.',
    }),
  })
  .openapi({ required: ['domain', 'activityType'], title: 'DescribeActivityTypeInput' })
  .openapi('DescribeActivityTypeInput')

const ArnSchema = z.string().min(1).max(1600).openapi('Arn')

const DomainInfoSchema = z
  .object({
    name: DomainNameSchema.openapi({
      description: 'The name of the domain. This name is unique within the account.',
    }),
    status: RegistrationStatusSchema.openapi({
      description:
        '<p>The status of the domain:</p> <ul> <li> <p> <code>REGISTERED</code> – The domain is properly registered and available. You can use this domain for registering types and creating new workflow executions. </p> </li> <li> <p> <code>DEPRECATED</code> – The domain was deprecated using <a>DeprecateDomain</a>, but is still in use. You should not create new workflow executions in this domain. </p> </li> </ul>',
    }),
    description: DescriptionSchema.exactOptional().openapi({
      description: 'The description of the domain provided through <a>RegisterDomain</a>.',
    }),
    arn: ArnSchema.exactOptional().openapi({ description: 'The ARN of the domain.' }),
  })
  .openapi({
    required: ['name', 'status'],
    description: 'Contains general information about a domain.',
  })
  .openapi('DomainInfo')

const DurationInDaysSchema = z.string().min(1).max(8).openapi('DurationInDays')

const DomainConfigurationSchema = z
  .object({
    workflowExecutionRetentionPeriodInDays: DurationInDaysSchema.openapi({
      description: 'The retention period for workflow executions in this domain.',
    }),
  })
  .openapi({
    required: ['workflowExecutionRetentionPeriodInDays'],
    description: 'Contains the configuration settings of a domain.',
  })
  .openapi('DomainConfiguration')

const DomainDetailSchema = z
  .object({
    domainInfo: DomainInfoSchema.openapi({
      description:
        'The basic information about a domain, such as its name, status, and description.',
    }),
    configuration: DomainConfigurationSchema.openapi({
      description:
        "The domain configuration. Currently, this includes only the domain's retention period.",
    }),
  })
  .openapi({
    required: ['domainInfo', 'configuration'],
    description: 'Contains details of a domain.',
  })
  .openapi('DomainDetail')

const DescribeDomainInputSchema = z
  .object({
    name: DomainNameSchema.openapi({ description: 'The name of the domain to describe.' }),
  })
  .openapi({ required: ['name'], title: 'DescribeDomainInput' })
  .openapi('DescribeDomainInput')

const WorkflowRunIdSchema = z.string().min(1).max(64).openapi('WorkflowRunId')

const WorkflowExecutionSchema = z
  .object({
    workflowId: WorkflowIdSchema.openapi({
      description: 'The user defined identifier associated with the workflow execution.',
    }),
    runId: WorkflowRunIdSchema.openapi({
      description: 'A system-generated unique identifier for the workflow execution.',
    }),
  })
  .openapi({ required: ['workflowId', 'runId'], description: 'Represents a workflow execution.' })
  .openapi('WorkflowExecution')

const ExecutionStatusSchema = z.enum(['OPEN', 'CLOSED']).openapi('ExecutionStatus')

const TagListSchema = z.array(TagSchema).max(5).openapi('TagList')

const CanceledSchema = z.boolean().openapi('Canceled')

const WorkflowExecutionInfoSchema = z
  .object({
    execution: WorkflowExecutionSchema.openapi({
      description: 'The workflow execution this information is about.',
    }),
    workflowType: WorkflowTypeSchema.openapi({
      description: 'The type of the workflow execution.',
    }),
    startTimestamp: TimestampSchema.openapi({
      description: 'The time when the execution was started.',
    }),
    closeTimestamp: TimestampSchema.exactOptional().openapi({
      description:
        'The time when the workflow execution was closed. Set only if the execution status is CLOSED.',
    }),
    executionStatus: ExecutionStatusSchema.openapi({
      description: 'The current status of the execution.',
    }),
    closeStatus: CloseStatusSchema.exactOptional().openapi({
      description:
        '<p>If the execution status is closed then this specifies how the execution was closed:</p> <ul> <li> <p> <code>COMPLETED</code> – the execution was successfully completed.</p> </li> <li> <p> <code>CANCELED</code> – the execution was canceled.Cancellation allows the implementation to gracefully clean up before the execution is closed.</p> </li> <li> <p> <code>TERMINATED</code> – the execution was force terminated.</p> </li> <li> <p> <code>FAILED</code> – the execution failed to complete.</p> </li> <li> <p> <code>TIMED_OUT</code> – the execution did not complete in the alloted time and was automatically timed out.</p> </li> <li> <p> <code>CONTINUED_AS_NEW</code> – the execution is logically continued. This means the current execution was completed and a new execution was started to carry on the workflow.</p> </li> </ul>',
    }),
    parent: WorkflowExecutionSchema.exactOptional().openapi({
      description:
        'If this workflow execution is a child of another execution then contains the workflow execution that started this execution.',
    }),
    tagList: TagListSchema.exactOptional().openapi({
      description:
        'The list of tags associated with the workflow execution. Tags can be used to identify and list workflow executions of interest through the visibility APIs. A workflow execution can have a maximum of 5 tags.',
    }),
    cancelRequested: CanceledSchema.exactOptional().openapi({
      description: 'Set to true if a cancellation is requested for this workflow execution.',
    }),
  })
  .openapi({
    required: ['execution', 'workflowType', 'startTimestamp', 'executionStatus'],
    description: 'Contains information about a workflow execution.',
  })
  .openapi('WorkflowExecutionInfo')

const DurationInSecondsSchema = z.string().min(1).max(8).openapi('DurationInSeconds')

const ChildPolicySchema = z.enum(['TERMINATE', 'REQUEST_CANCEL', 'ABANDON']).openapi('ChildPolicy')

const WorkflowExecutionConfigurationSchema = z
  .object({
    taskStartToCloseTimeout: DurationInSecondsSchema.openapi({
      description:
        '<p>The maximum duration allowed for decision tasks for this workflow execution.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>',
    }),
    executionStartToCloseTimeout: DurationInSecondsSchema.openapi({
      description:
        '<p>The total duration for this workflow execution.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>',
    }),
    taskList: TaskListSchema.openapi({
      description:
        'The task list used for the decision tasks generated for this workflow execution.',
    }),
    taskPriority: TaskPrioritySchema.exactOptional().openapi({
      description:
        '<p>The priority assigned to decision tasks for this workflow execution. Valid values are integers that range from Java\'s <code>Integer.MIN_VALUE</code> (-2147483648) to <code>Integer.MAX_VALUE</code> (2147483647). Higher numbers indicate higher priority.</p> <p>For more information about setting task priority, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html">Setting Task Priority</a> in the <i>Amazon SWF Developer Guide</i>.</p>',
    }),
    childPolicy: ChildPolicySchema.openapi({
      description:
        '<p>The policy to use for the child workflow executions if this workflow execution is terminated, by calling the <a>TerminateWorkflowExecution</a> action explicitly or due to an expired timeout.</p> <p>The supported child policies are:</p> <ul> <li> <p> <code>TERMINATE</code> – The child executions are terminated.</p> </li> <li> <p> <code>REQUEST_CANCEL</code> – A request to cancel is attempted for each child execution by recording a <code>WorkflowExecutionCancelRequested</code> event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event.</p> </li> <li> <p> <code>ABANDON</code> – No action is taken. The child executions continue to run.</p> </li> </ul>',
    }),
    lambdaRole: ArnSchema.exactOptional().openapi({
      description: 'The IAM role attached to the child workflow execution.',
    }),
  })
  .openapi({
    required: [
      'taskStartToCloseTimeout',
      'executionStartToCloseTimeout',
      'taskList',
      'childPolicy',
    ],
    description:
      'The configuration settings for a workflow execution including timeout values, tasklist etc. These configuration settings are determined from the defaults specified when registering the workflow type and those specified when starting the workflow execution.',
  })
  .openapi('WorkflowExecutionConfiguration')

const OpenDecisionTasksCountSchema = z.int().min(0).max(1).openapi('OpenDecisionTasksCount')

const WorkflowExecutionOpenCountsSchema = z
  .object({
    openActivityTasks: CountSchema.openapi({
      description: 'The count of activity tasks whose status is <code>OPEN</code>.',
    }),
    openDecisionTasks: OpenDecisionTasksCountSchema.openapi({
      description:
        'The count of decision tasks whose status is OPEN. A workflow execution can have at most one open decision task.',
    }),
    openTimers: CountSchema.openapi({
      description:
        'The count of timers started by this workflow execution that have not fired yet.',
    }),
    openChildWorkflowExecutions: CountSchema.openapi({
      description: 'The count of child workflow executions whose status is <code>OPEN</code>.',
    }),
    openLambdaFunctions: CountSchema.exactOptional().openapi({
      description: 'The count of Lambda tasks whose status is <code>OPEN</code>.',
    }),
  })
  .openapi({
    required: [
      'openActivityTasks',
      'openDecisionTasks',
      'openTimers',
      'openChildWorkflowExecutions',
    ],
    description:
      'Contains the counts of open tasks, child workflow executions and timers for a workflow execution.',
  })
  .openapi('WorkflowExecutionOpenCounts')

const DataSchema = z.string().max(32768).openapi('Data')

const WorkflowExecutionDetailSchema = z
  .object({
    executionInfo: WorkflowExecutionInfoSchema.openapi({
      description: 'Information about the workflow execution.',
    }),
    executionConfiguration: WorkflowExecutionConfigurationSchema.openapi({
      description:
        'The configuration settings for this workflow execution including timeout values, tasklist etc.',
    }),
    openCounts: WorkflowExecutionOpenCountsSchema.openapi({
      description:
        'The number of tasks for this workflow execution. This includes open and closed tasks of all types.',
    }),
    latestActivityTaskTimestamp: TimestampSchema.exactOptional().openapi({
      description:
        'The time when the last activity task was scheduled for this workflow execution. You can use this information to determine if the workflow has not made progress for an unusually long period of time and might require a corrective action.',
    }),
    latestExecutionContext: DataSchema.exactOptional().openapi({
      description:
        'The latest executionContext provided by the decider for this workflow execution. A decider can provide an executionContext (a free-form string) when closing a decision task using <a>RespondDecisionTaskCompleted</a>.',
    }),
  })
  .openapi({
    required: ['executionInfo', 'executionConfiguration', 'openCounts'],
    description: 'Contains details about a workflow execution.',
  })
  .openapi('WorkflowExecutionDetail')

const DescribeWorkflowExecutionInputSchema = z
  .object({
    domain: DomainNameSchema.openapi({
      description: 'The name of the domain containing the workflow execution.',
    }),
    execution: WorkflowExecutionSchema.openapi({
      description: 'The workflow execution to describe.',
    }),
  })
  .openapi({ required: ['domain', 'execution'], title: 'DescribeWorkflowExecutionInput' })
  .openapi('DescribeWorkflowExecutionInput')

const WorkflowTypeInfoSchema = z
  .object({
    workflowType: WorkflowTypeSchema.openapi({
      description: 'The workflow type this information is about.',
    }),
    status: RegistrationStatusSchema.openapi({
      description: 'The current status of the workflow type.',
    }),
    description: DescriptionSchema.exactOptional().openapi({
      description: 'The description of the type registered through <a>RegisterWorkflowType</a>.',
    }),
    creationDate: TimestampSchema.openapi({
      description: 'The date when this type was registered.',
    }),
    deprecationDate: TimestampSchema.exactOptional().openapi({
      description:
        'If the type is in deprecated state, then it is set to the date when the type was deprecated.',
    }),
  })
  .openapi({
    required: ['workflowType', 'status', 'creationDate'],
    description: 'Contains information about a workflow type.',
  })
  .openapi('WorkflowTypeInfo')

const WorkflowTypeConfigurationSchema = z
  .object({
    defaultTaskStartToCloseTimeout: DurationInSecondsOptionalSchema.exactOptional().openapi({
      description:
        "<p> The default maximum duration, specified when registering the workflow type, that a decision task for executions of this workflow type might take before returning completion or failure. If the task doesn'tdo close in the specified time then the task is automatically timed out and rescheduled. If the decider eventually reports a completion or failure, it is ignored. This default can be overridden when starting a workflow execution using the <a>StartWorkflowExecution</a> action or the <code>StartChildWorkflowExecution</code> <a>Decision</a>.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>",
    }),
    defaultExecutionStartToCloseTimeout: DurationInSecondsOptionalSchema.exactOptional().openapi({
      description:
        '<p> The default maximum duration, specified when registering the workflow type, for executions of this workflow type. This default can be overridden when starting a workflow execution using the <a>StartWorkflowExecution</a> action or the <code>StartChildWorkflowExecution</code> <a>Decision</a>.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>',
    }),
    defaultTaskList: TaskListSchema.exactOptional().openapi({
      description:
        ' The default task list, specified when registering the workflow type, for decisions tasks scheduled for workflow executions of this type. This default can be overridden when starting a workflow execution using the <a>StartWorkflowExecution</a> action or the <code>StartChildWorkflowExecution</code> <a>Decision</a>.',
    }),
    defaultTaskPriority: TaskPrioritySchema.exactOptional().openapi({
      description:
        '<p> The default task priority, specified when registering the workflow type, for all decision tasks of this workflow type. This default can be overridden when starting a workflow execution using the <a>StartWorkflowExecution</a> action or the <code>StartChildWorkflowExecution</code> decision.</p> <p>Valid values are integers that range from Java\'s <code>Integer.MIN_VALUE</code> (-2147483648) to <code>Integer.MAX_VALUE</code> (2147483647). Higher numbers indicate higher priority.</p> <p>For more information about setting task priority, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html">Setting Task Priority</a> in the <i>Amazon SWF Developer Guide</i>.</p>',
    }),
    defaultChildPolicy: ChildPolicySchema.exactOptional().openapi({
      description:
        '<p> The default policy to use for the child workflow executions when a workflow execution of this type is terminated, by calling the <a>TerminateWorkflowExecution</a> action explicitly or due to an expired timeout. This default can be overridden when starting a workflow execution using the <a>StartWorkflowExecution</a> action or the <code>StartChildWorkflowExecution</code> <a>Decision</a>.</p> <p>The supported child policies are:</p> <ul> <li> <p> <code>TERMINATE</code> – The child executions are terminated.</p> </li> <li> <p> <code>REQUEST_CANCEL</code> – A request to cancel is attempted for each child execution by recording a <code>WorkflowExecutionCancelRequested</code> event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event.</p> </li> <li> <p> <code>ABANDON</code> – No action is taken. The child executions continue to run.</p> </li> </ul>',
    }),
    defaultLambdaRole: ArnSchema.exactOptional().openapi({
      description:
        '<p>The default IAM role attached to this workflow type.</p> <note> <p>Executions of this workflow type need IAM roles to invoke Lambda functions. If you don\'t specify an IAM role when starting this workflow type, the default Lambda role is attached to the execution. For more information, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html">https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html</a> in the <i>Amazon SWF Developer Guide</i>.</p> </note>',
    }),
  })
  .openapi({ description: 'The configuration settings of a workflow type.', required: [] })
  .openapi('WorkflowTypeConfiguration')

const WorkflowTypeDetailSchema = z
  .object({
    typeInfo: WorkflowTypeInfoSchema.openapi({
      description:
        '<p>General information about the workflow type.</p> <p>The status of the workflow type (returned in the WorkflowTypeInfo structure) can be one of the following.</p> <ul> <li> <p> <code>REGISTERED</code> – The type is registered and available. Workers supporting this type should be running.</p> </li> <li> <p> <code>DEPRECATED</code> – The type was deprecated using <a>DeprecateWorkflowType</a>, but is still in use. You should keep workers supporting this type running. You cannot create new workflow executions of this type.</p> </li> </ul>',
    }),
    configuration: WorkflowTypeConfigurationSchema.openapi({
      description:
        'Configuration settings of the workflow type registered through <a>RegisterWorkflowType</a> ',
    }),
  })
  .openapi({
    required: ['typeInfo', 'configuration'],
    description: 'Contains details about a workflow type.',
  })
  .openapi('WorkflowTypeDetail')

const DescribeWorkflowTypeInputSchema = z
  .object({
    domain: DomainNameSchema.openapi({
      description: 'The name of the domain in which this workflow type is registered.',
    }),
    workflowType: WorkflowTypeSchema.openapi({ description: 'The workflow type to describe.' }),
  })
  .openapi({ required: ['domain', 'workflowType'], title: 'DescribeWorkflowTypeInput' })
  .openapi('DescribeWorkflowTypeInput')

const EventTypeSchema = z
  .enum([
    'WorkflowExecutionStarted',
    'WorkflowExecutionCancelRequested',
    'WorkflowExecutionCompleted',
    'CompleteWorkflowExecutionFailed',
    'WorkflowExecutionFailed',
    'FailWorkflowExecutionFailed',
    'WorkflowExecutionTimedOut',
    'WorkflowExecutionCanceled',
    'CancelWorkflowExecutionFailed',
    'WorkflowExecutionContinuedAsNew',
    'ContinueAsNewWorkflowExecutionFailed',
    'WorkflowExecutionTerminated',
    'DecisionTaskScheduled',
    'DecisionTaskStarted',
    'DecisionTaskCompleted',
    'DecisionTaskTimedOut',
    'ActivityTaskScheduled',
    'ScheduleActivityTaskFailed',
    'ActivityTaskStarted',
    'ActivityTaskCompleted',
    'ActivityTaskFailed',
    'ActivityTaskTimedOut',
    'ActivityTaskCanceled',
    'ActivityTaskCancelRequested',
    'RequestCancelActivityTaskFailed',
    'WorkflowExecutionSignaled',
    'MarkerRecorded',
    'RecordMarkerFailed',
    'TimerStarted',
    'StartTimerFailed',
    'TimerFired',
    'TimerCanceled',
    'CancelTimerFailed',
    'StartChildWorkflowExecutionInitiated',
    'StartChildWorkflowExecutionFailed',
    'ChildWorkflowExecutionStarted',
    'ChildWorkflowExecutionCompleted',
    'ChildWorkflowExecutionFailed',
    'ChildWorkflowExecutionTimedOut',
    'ChildWorkflowExecutionCanceled',
    'ChildWorkflowExecutionTerminated',
    'SignalExternalWorkflowExecutionInitiated',
    'SignalExternalWorkflowExecutionFailed',
    'ExternalWorkflowExecutionSignaled',
    'RequestCancelExternalWorkflowExecutionInitiated',
    'RequestCancelExternalWorkflowExecutionFailed',
    'ExternalWorkflowExecutionCancelRequested',
    'LambdaFunctionScheduled',
    'LambdaFunctionStarted',
    'LambdaFunctionCompleted',
    'LambdaFunctionFailed',
    'LambdaFunctionTimedOut',
    'ScheduleLambdaFunctionFailed',
    'StartLambdaFunctionFailed',
  ])
  .openapi('EventType')

const EventIdSchema = z.int().openapi('EventId')

const WorkflowRunIdOptionalSchema = z.string().max(64).openapi('WorkflowRunIdOptional')

const WorkflowExecutionStartedEventAttributesSchema = z
  .object({
    input: DataSchema.exactOptional().openapi({
      description: 'The input provided to the workflow execution.',
    }),
    executionStartToCloseTimeout: DurationInSecondsOptionalSchema.exactOptional().openapi({
      description:
        '<p>The maximum duration for this workflow execution.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>',
    }),
    taskStartToCloseTimeout: DurationInSecondsOptionalSchema.exactOptional().openapi({
      description:
        '<p>The maximum duration of decision tasks for this workflow type.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>',
    }),
    childPolicy: ChildPolicySchema.openapi({
      description:
        '<p>The policy to use for the child workflow executions if this workflow execution is terminated, by calling the <a>TerminateWorkflowExecution</a> action explicitly or due to an expired timeout.</p> <p>The supported child policies are:</p> <ul> <li> <p> <code>TERMINATE</code> – The child executions are terminated.</p> </li> <li> <p> <code>REQUEST_CANCEL</code> – A request to cancel is attempted for each child execution by recording a <code>WorkflowExecutionCancelRequested</code> event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event.</p> </li> <li> <p> <code>ABANDON</code> – No action is taken. The child executions continue to run.</p> </li> </ul>',
    }),
    taskList: TaskListSchema.openapi({
      description:
        'The name of the task list for scheduling the decision tasks for this workflow execution.',
    }),
    taskPriority: TaskPrioritySchema.exactOptional().openapi({
      description: 'The priority of the decision tasks in the workflow execution.',
    }),
    workflowType: WorkflowTypeSchema.openapi({
      description: 'The workflow type of this execution.',
    }),
    tagList: TagListSchema.exactOptional().openapi({
      description:
        'The list of tags associated with this workflow execution. An execution can have up to 5 tags.',
    }),
    continuedExecutionRunId: WorkflowRunIdOptionalSchema.exactOptional().openapi({
      description:
        'If this workflow execution was started due to a <code>ContinueAsNewWorkflowExecution</code> decision, then it contains the <code>runId</code> of the previous workflow execution that was closed and continued as this execution.',
    }),
    parentWorkflowExecution: WorkflowExecutionSchema.exactOptional().openapi({
      description:
        "The source workflow execution that started this workflow execution. The member isn't set if the workflow execution was not started by a workflow.",
    }),
    parentInitiatedEventId: EventIdSchema.exactOptional().openapi({
      description:
        'The ID of the <code>StartChildWorkflowExecutionInitiated</code> event corresponding to the <code>StartChildWorkflowExecution</code> <a>Decision</a> to start this workflow execution. The source event with this ID can be found in the history of the source workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
    lambdaRole: ArnSchema.exactOptional().openapi({
      description: 'The IAM role attached to the workflow execution.',
    }),
  })
  .openapi({
    required: ['childPolicy', 'taskList', 'workflowType'],
    description: 'Provides details of <code>WorkflowExecutionStarted</code> event.',
  })
  .openapi('WorkflowExecutionStartedEventAttributes')

const WorkflowExecutionCompletedEventAttributesSchema = z
  .object({
    result: DataSchema.exactOptional().openapi({
      description: 'The result produced by the workflow execution upon successful completion.',
    }),
    decisionTaskCompletedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>CompleteWorkflowExecution</code> decision to complete this execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
  })
  .openapi({
    required: ['decisionTaskCompletedEventId'],
    description: 'Provides the details of the <code>WorkflowExecutionCompleted</code> event.',
  })
  .openapi('WorkflowExecutionCompletedEventAttributes')

const CompleteWorkflowExecutionFailedCauseSchema = z
  .enum(['UNHANDLED_DECISION', 'OPERATION_NOT_PERMITTED'])
  .openapi('CompleteWorkflowExecutionFailedCause')

const CompleteWorkflowExecutionFailedEventAttributesSchema = z
  .object({
    cause: CompleteWorkflowExecutionFailedCauseSchema.openapi({
      description:
        '<p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p> <note> <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> </note>',
    }),
    decisionTaskCompletedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>CompleteWorkflowExecution</code> decision to complete this execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
  })
  .openapi({
    required: ['cause', 'decisionTaskCompletedEventId'],
    description: 'Provides the details of the <code>CompleteWorkflowExecutionFailed</code> event.',
  })
  .openapi('CompleteWorkflowExecutionFailedEventAttributes')

const FailureReasonSchema = z.string().max(256).openapi('FailureReason')

const WorkflowExecutionFailedEventAttributesSchema = z
  .object({
    reason: FailureReasonSchema.exactOptional().openapi({
      description: 'The descriptive reason provided for the failure.',
    }),
    details: DataSchema.exactOptional().openapi({ description: 'The details of the failure.' }),
    decisionTaskCompletedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>FailWorkflowExecution</code> decision to fail this execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
  })
  .openapi({
    required: ['decisionTaskCompletedEventId'],
    description: 'Provides the details of the <code>WorkflowExecutionFailed</code> event.',
  })
  .openapi('WorkflowExecutionFailedEventAttributes')

const FailWorkflowExecutionFailedCauseSchema = z
  .enum(['UNHANDLED_DECISION', 'OPERATION_NOT_PERMITTED'])
  .openapi('FailWorkflowExecutionFailedCause')

const FailWorkflowExecutionFailedEventAttributesSchema = z
  .object({
    cause: FailWorkflowExecutionFailedCauseSchema.openapi({
      description:
        '<p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p> <note> <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> </note>',
    }),
    decisionTaskCompletedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>FailWorkflowExecution</code> decision to fail this execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
  })
  .openapi({
    required: ['cause', 'decisionTaskCompletedEventId'],
    description: 'Provides the details of the <code>FailWorkflowExecutionFailed</code> event.',
  })
  .openapi('FailWorkflowExecutionFailedEventAttributes')

const WorkflowExecutionTimeoutTypeSchema = z
  .literal('START_TO_CLOSE')
  .openapi('WorkflowExecutionTimeoutType')

const WorkflowExecutionTimedOutEventAttributesSchema = z
  .object({
    timeoutType: WorkflowExecutionTimeoutTypeSchema.openapi({
      description: 'The type of timeout that caused this event.',
    }),
    childPolicy: ChildPolicySchema.openapi({
      description:
        '<p>The policy used for the child workflow executions of this workflow execution.</p> <p>The supported child policies are:</p> <ul> <li> <p> <code>TERMINATE</code> – The child executions are terminated.</p> </li> <li> <p> <code>REQUEST_CANCEL</code> – A request to cancel is attempted for each child execution by recording a <code>WorkflowExecutionCancelRequested</code> event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event.</p> </li> <li> <p> <code>ABANDON</code> – No action is taken. The child executions continue to run.</p> </li> </ul>',
    }),
  })
  .openapi({
    required: ['timeoutType', 'childPolicy'],
    description: 'Provides the details of the <code>WorkflowExecutionTimedOut</code> event.',
  })
  .openapi('WorkflowExecutionTimedOutEventAttributes')

const WorkflowExecutionCanceledEventAttributesSchema = z
  .object({
    details: DataSchema.exactOptional().openapi({
      description: 'The details of the cancellation.',
    }),
    decisionTaskCompletedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>CancelWorkflowExecution</code> decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
  })
  .openapi({
    required: ['decisionTaskCompletedEventId'],
    description: 'Provides the details of the <code>WorkflowExecutionCanceled</code> event.',
  })
  .openapi('WorkflowExecutionCanceledEventAttributes')

const CancelWorkflowExecutionFailedCauseSchema = z
  .enum(['UNHANDLED_DECISION', 'OPERATION_NOT_PERMITTED'])
  .openapi('CancelWorkflowExecutionFailedCause')

const CancelWorkflowExecutionFailedEventAttributesSchema = z
  .object({
    cause: CancelWorkflowExecutionFailedCauseSchema.openapi({
      description:
        '<p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p> <note> <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> </note>',
    }),
    decisionTaskCompletedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>CancelWorkflowExecution</code> decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
  })
  .openapi({
    required: ['cause', 'decisionTaskCompletedEventId'],
    description: 'Provides the details of the <code>CancelWorkflowExecutionFailed</code> event.',
  })
  .openapi('CancelWorkflowExecutionFailedEventAttributes')

const WorkflowExecutionContinuedAsNewEventAttributesSchema = z
  .object({
    input: DataSchema.exactOptional().openapi({
      description: 'The input provided to the new workflow execution.',
    }),
    decisionTaskCompletedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>ContinueAsNewWorkflowExecution</code> decision that started this execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
    newExecutionRunId: WorkflowRunIdSchema.openapi({
      description: 'The <code>runId</code> of the new workflow execution.',
    }),
    executionStartToCloseTimeout: DurationInSecondsOptionalSchema.exactOptional().openapi({
      description:
        '<p>The total duration allowed for the new workflow execution.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>',
    }),
    taskList: TaskListSchema.openapi({
      description:
        'The task list to use for the decisions of the new (continued) workflow execution.',
    }),
    taskPriority: TaskPrioritySchema.exactOptional().openapi({
      description:
        'The priority of the task to use for the decisions of the new (continued) workflow execution.',
    }),
    taskStartToCloseTimeout: DurationInSecondsOptionalSchema.exactOptional().openapi({
      description:
        '<p>The maximum duration of decision tasks for the new workflow execution.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>',
    }),
    childPolicy: ChildPolicySchema.openapi({
      description:
        '<p>The policy to use for the child workflow executions of the new execution if it is terminated by calling the <a>TerminateWorkflowExecution</a> action explicitly or due to an expired timeout.</p> <p>The supported child policies are:</p> <ul> <li> <p> <code>TERMINATE</code> – The child executions are terminated.</p> </li> <li> <p> <code>REQUEST_CANCEL</code> – A request to cancel is attempted for each child execution by recording a <code>WorkflowExecutionCancelRequested</code> event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event.</p> </li> <li> <p> <code>ABANDON</code> – No action is taken. The child executions continue to run.</p> </li> </ul>',
    }),
    tagList: TagListSchema.exactOptional().openapi({
      description: 'The list of tags associated with the new workflow execution.',
    }),
    workflowType: WorkflowTypeSchema.openapi({
      description: 'The workflow type of this execution.',
    }),
    lambdaRole: ArnSchema.exactOptional().openapi({
      description: 'The IAM role to attach to the new (continued) workflow execution.',
    }),
  })
  .openapi({
    required: [
      'decisionTaskCompletedEventId',
      'newExecutionRunId',
      'taskList',
      'childPolicy',
      'workflowType',
    ],
    description: 'Provides the details of the <code>WorkflowExecutionContinuedAsNew</code> event.',
  })
  .openapi('WorkflowExecutionContinuedAsNewEventAttributes')

const ContinueAsNewWorkflowExecutionFailedCauseSchema = z
  .enum([
    'UNHANDLED_DECISION',
    'WORKFLOW_TYPE_DEPRECATED',
    'WORKFLOW_TYPE_DOES_NOT_EXIST',
    'DEFAULT_EXECUTION_START_TO_CLOSE_TIMEOUT_UNDEFINED',
    'DEFAULT_TASK_START_TO_CLOSE_TIMEOUT_UNDEFINED',
    'DEFAULT_TASK_LIST_UNDEFINED',
    'DEFAULT_CHILD_POLICY_UNDEFINED',
    'CONTINUE_AS_NEW_WORKFLOW_EXECUTION_RATE_EXCEEDED',
    'OPERATION_NOT_PERMITTED',
  ])
  .openapi('ContinueAsNewWorkflowExecutionFailedCause')

const ContinueAsNewWorkflowExecutionFailedEventAttributesSchema = z
  .object({
    cause: ContinueAsNewWorkflowExecutionFailedCauseSchema.openapi({
      description:
        '<p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p> <note> <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> </note>',
    }),
    decisionTaskCompletedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>ContinueAsNewWorkflowExecution</code> decision that started this execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
  })
  .openapi({
    required: ['cause', 'decisionTaskCompletedEventId'],
    description:
      'Provides the details of the <code>ContinueAsNewWorkflowExecutionFailed</code> event.',
  })
  .openapi('ContinueAsNewWorkflowExecutionFailedEventAttributes')

const TerminateReasonSchema = z.string().max(256).openapi('TerminateReason')

const WorkflowExecutionTerminatedCauseSchema = z
  .enum(['CHILD_POLICY_APPLIED', 'EVENT_LIMIT_EXCEEDED', 'OPERATOR_INITIATED'])
  .openapi('WorkflowExecutionTerminatedCause')

const WorkflowExecutionTerminatedEventAttributesSchema = z
  .object({
    reason: TerminateReasonSchema.exactOptional().openapi({
      description: 'The reason provided for the termination.',
    }),
    details: DataSchema.exactOptional().openapi({
      description: 'The details provided for the termination.',
    }),
    childPolicy: ChildPolicySchema.openapi({
      description:
        '<p>The policy used for the child workflow executions of this workflow execution.</p> <p>The supported child policies are:</p> <ul> <li> <p> <code>TERMINATE</code> – The child executions are terminated.</p> </li> <li> <p> <code>REQUEST_CANCEL</code> – A request to cancel is attempted for each child execution by recording a <code>WorkflowExecutionCancelRequested</code> event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event.</p> </li> <li> <p> <code>ABANDON</code> – No action is taken. The child executions continue to run.</p> </li> </ul>',
    }),
    cause: WorkflowExecutionTerminatedCauseSchema.exactOptional().openapi({
      description:
        'If set, indicates that the workflow execution was automatically terminated, and specifies the cause. This happens if the parent workflow execution times out or is terminated and the child policy is set to terminate child executions.',
    }),
  })
  .openapi({
    required: ['childPolicy'],
    description: 'Provides the details of the <code>WorkflowExecutionTerminated</code> event.',
  })
  .openapi('WorkflowExecutionTerminatedEventAttributes')

const WorkflowExecutionCancelRequestedCauseSchema = z
  .literal('CHILD_POLICY_APPLIED')
  .openapi('WorkflowExecutionCancelRequestedCause')

const WorkflowExecutionCancelRequestedEventAttributesSchema = z
  .object({
    externalWorkflowExecution: WorkflowExecutionSchema.exactOptional().openapi({
      description: 'The external workflow execution for which the cancellation was requested.',
    }),
    externalInitiatedEventId: EventIdSchema.exactOptional().openapi({
      description:
        'The ID of the <code>RequestCancelExternalWorkflowExecutionInitiated</code> event corresponding to the <code>RequestCancelExternalWorkflowExecution</code> decision to cancel this workflow execution.The source event with this ID can be found in the history of the source workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
    cause: WorkflowExecutionCancelRequestedCauseSchema.exactOptional().openapi({
      description:
        'If set, indicates that the request to cancel the workflow execution was automatically generated, and specifies the cause. This happens if the parent workflow execution times out or is terminated, and the child policy is set to cancel child executions.',
    }),
  })
  .openapi({
    description: 'Provides the details of the <code>WorkflowExecutionCancelRequested</code> event.',
    required: [],
  })
  .openapi('WorkflowExecutionCancelRequestedEventAttributes')

const DecisionTaskScheduledEventAttributesSchema = z
  .object({
    taskList: TaskListSchema.openapi({
      description: 'The name of the task list in which the decision task was scheduled.',
    }),
    taskPriority: TaskPrioritySchema.exactOptional().openapi({
      description:
        '<p> A task priority that, if set, specifies the priority for this decision task. Valid values are integers that range from Java\'s <code>Integer.MIN_VALUE</code> (-2147483648) to <code>Integer.MAX_VALUE</code> (2147483647). Higher numbers indicate higher priority.</p> <p>For more information about setting task priority, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html">Setting Task Priority</a> in the <i>Amazon SWF Developer Guide</i>.</p>',
    }),
    startToCloseTimeout: DurationInSecondsOptionalSchema.exactOptional().openapi({
      description:
        "<p>The maximum duration for this decision task. The task is considered timed out if it doesn't completed within this duration.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>",
    }),
  })
  .openapi({
    required: ['taskList'],
    description: 'Provides details about the <code>DecisionTaskScheduled</code> event.',
  })
  .openapi('DecisionTaskScheduledEventAttributes')

const IdentitySchema = z.string().max(256).openapi('Identity')

const DecisionTaskStartedEventAttributesSchema = z
  .object({
    identity: IdentitySchema.exactOptional().openapi({
      description:
        'Identity of the decider making the request. This enables diagnostic tracing when problems arise. The form of this identity is user defined.',
    }),
    scheduledEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>DecisionTaskScheduled</code> event that was recorded when this decision task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
  })
  .openapi({
    required: ['scheduledEventId'],
    description: 'Provides the details of the <code>DecisionTaskStarted</code> event.',
  })
  .openapi('DecisionTaskStartedEventAttributes')

const DecisionTaskCompletedEventAttributesSchema = z
  .object({
    executionContext: DataSchema.exactOptional().openapi({
      description: 'User defined context for the workflow execution.',
    }),
    scheduledEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>DecisionTaskScheduled</code> event that was recorded when this decision task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
    startedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>DecisionTaskStarted</code> event recorded when this decision task was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
  })
  .openapi({
    required: ['scheduledEventId', 'startedEventId'],
    description: 'Provides the details of the <code>DecisionTaskCompleted</code> event.',
  })
  .openapi('DecisionTaskCompletedEventAttributes')

const DecisionTaskTimeoutTypeSchema = z.literal('START_TO_CLOSE').openapi('DecisionTaskTimeoutType')

const DecisionTaskTimedOutEventAttributesSchema = z
  .object({
    timeoutType: DecisionTaskTimeoutTypeSchema.openapi({
      description: 'The type of timeout that expired before the decision task could be completed.',
    }),
    scheduledEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>DecisionTaskScheduled</code> event that was recorded when this decision task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
    startedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>DecisionTaskStarted</code> event recorded when this decision task was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
  })
  .openapi({
    required: ['timeoutType', 'scheduledEventId', 'startedEventId'],
    description: 'Provides the details of the <code>DecisionTaskTimedOut</code> event.',
  })
  .openapi('DecisionTaskTimedOutEventAttributes')

const ActivityIdSchema = z.string().min(1).max(256).openapi('ActivityId')

const ActivityTaskScheduledEventAttributesSchema = z
  .object({
    activityType: ActivityTypeSchema.openapi({ description: 'The type of the activity task.' }),
    activityId: ActivityIdSchema.openapi({ description: 'The unique ID of the activity task.' }),
    input: DataSchema.exactOptional().openapi({
      description: 'The input provided to the activity task.',
    }),
    control: DataSchema.exactOptional().openapi({
      description:
        "Data attached to the event that can be used by the decider in subsequent workflow tasks. This data isn't sent to the activity.",
    }),
    scheduleToStartTimeout: DurationInSecondsOptionalSchema.exactOptional().openapi({
      description:
        'The maximum amount of time the activity task can wait to be assigned to a worker.',
    }),
    scheduleToCloseTimeout: DurationInSecondsOptionalSchema.exactOptional().openapi({
      description: 'The maximum amount of time for this activity task.',
    }),
    startToCloseTimeout: DurationInSecondsOptionalSchema.exactOptional().openapi({
      description: 'The maximum amount of time a worker may take to process the activity task.',
    }),
    taskList: TaskListSchema.openapi({
      description: 'The task list in which the activity task has been scheduled.',
    }),
    taskPriority: TaskPrioritySchema.exactOptional().openapi({
      description:
        '<p> The priority to assign to the scheduled activity task. If set, this overrides any default priority value that was assigned when the activity type was registered.</p> <p>Valid values are integers that range from Java\'s <code>Integer.MIN_VALUE</code> (-2147483648) to <code>Integer.MAX_VALUE</code> (2147483647). Higher numbers indicate higher priority.</p> <p>For more information about setting task priority, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html">Setting Task Priority</a> in the <i>Amazon SWF Developer Guide</i>.</p>',
    }),
    decisionTaskCompletedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision that resulted in the scheduling of this activity task. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
    heartbeatTimeout: DurationInSecondsOptionalSchema.exactOptional().openapi({
      description:
        'The maximum time before which the worker processing this task must report progress by calling <a>RecordActivityTaskHeartbeat</a>. If the timeout is exceeded, the activity task is automatically timed out. If the worker subsequently attempts to record a heartbeat or return a result, it is ignored.',
    }),
  })
  .openapi({
    required: ['activityType', 'activityId', 'taskList', 'decisionTaskCompletedEventId'],
    description: 'Provides the details of the <code>ActivityTaskScheduled</code> event.',
  })
  .openapi('ActivityTaskScheduledEventAttributes')

const ActivityTaskStartedEventAttributesSchema = z
  .object({
    identity: IdentitySchema.exactOptional().openapi({
      description:
        'Identity of the worker that was assigned this task. This aids diagnostics when problems arise. The form of this identity is user defined.',
    }),
    scheduledEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>ActivityTaskScheduled</code> event that was recorded when this activity task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
  })
  .openapi({
    required: ['scheduledEventId'],
    description: 'Provides the details of the <code>ActivityTaskStarted</code> event.',
  })
  .openapi('ActivityTaskStartedEventAttributes')

const ActivityTaskCompletedEventAttributesSchema = z
  .object({
    result: DataSchema.exactOptional().openapi({
      description: 'The results of the activity task.',
    }),
    scheduledEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>ActivityTaskScheduled</code> event that was recorded when this activity task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
    startedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>ActivityTaskStarted</code> event recorded when this activity task was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
  })
  .openapi({
    required: ['scheduledEventId', 'startedEventId'],
    description: 'Provides the details of the <code>ActivityTaskCompleted</code> event.',
  })
  .openapi('ActivityTaskCompletedEventAttributes')

const ActivityTaskFailedEventAttributesSchema = z
  .object({
    reason: FailureReasonSchema.exactOptional().openapi({
      description: 'The reason provided for the failure.',
    }),
    details: DataSchema.exactOptional().openapi({ description: 'The details of the failure.' }),
    scheduledEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>ActivityTaskScheduled</code> event that was recorded when this activity task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
    startedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>ActivityTaskStarted</code> event recorded when this activity task was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
  })
  .openapi({
    required: ['scheduledEventId', 'startedEventId'],
    description: 'Provides the details of the <code>ActivityTaskFailed</code> event.',
  })
  .openapi('ActivityTaskFailedEventAttributes')

const ActivityTaskTimeoutTypeSchema = z
  .enum(['START_TO_CLOSE', 'SCHEDULE_TO_START', 'SCHEDULE_TO_CLOSE', 'HEARTBEAT'])
  .openapi('ActivityTaskTimeoutType')

const LimitedDataSchema = z.string().max(2048).openapi('LimitedData')

const ActivityTaskTimedOutEventAttributesSchema = z
  .object({
    timeoutType: ActivityTaskTimeoutTypeSchema.openapi({
      description: 'The type of the timeout that caused this event.',
    }),
    scheduledEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>ActivityTaskScheduled</code> event that was recorded when this activity task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
    startedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>ActivityTaskStarted</code> event recorded when this activity task was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
    details: LimitedDataSchema.exactOptional().openapi({
      description:
        'Contains the content of the <code>details</code> parameter for the last call made by the activity to <code>RecordActivityTaskHeartbeat</code>.',
    }),
  })
  .openapi({
    required: ['timeoutType', 'scheduledEventId', 'startedEventId'],
    description: 'Provides the details of the <code>ActivityTaskTimedOut</code> event.',
  })
  .openapi('ActivityTaskTimedOutEventAttributes')

const ActivityTaskCanceledEventAttributesSchema = z
  .object({
    details: DataSchema.exactOptional().openapi({ description: 'Details of the cancellation.' }),
    scheduledEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>ActivityTaskScheduled</code> event that was recorded when this activity task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
    startedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>ActivityTaskStarted</code> event recorded when this activity task was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
    latestCancelRequestedEventId: EventIdSchema.exactOptional().openapi({
      description:
        'If set, contains the ID of the last <code>ActivityTaskCancelRequested</code> event recorded for this activity task. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
  })
  .openapi({
    required: ['scheduledEventId', 'startedEventId'],
    description: 'Provides the details of the <code>ActivityTaskCanceled</code> event.',
  })
  .openapi('ActivityTaskCanceledEventAttributes')

const ActivityTaskCancelRequestedEventAttributesSchema = z
  .object({
    decisionTaskCompletedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>RequestCancelActivityTask</code> decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
    activityId: ActivityIdSchema.openapi({ description: 'The unique ID of the task.' }),
  })
  .openapi({
    required: ['decisionTaskCompletedEventId', 'activityId'],
    description: 'Provides the details of the <code>ActivityTaskCancelRequested</code> event.',
  })
  .openapi('ActivityTaskCancelRequestedEventAttributes')

const SignalNameSchema = z.string().min(1).max(256).openapi('SignalName')

const WorkflowExecutionSignaledEventAttributesSchema = z
  .object({
    signalName: SignalNameSchema.openapi({
      description:
        'The name of the signal received. The decider can use the signal name and inputs to determine how to the process the signal.',
    }),
    input: DataSchema.exactOptional().openapi({
      description:
        'The inputs provided with the signal. The decider can use the signal name and inputs to determine how to process the signal.',
    }),
    externalWorkflowExecution: WorkflowExecutionSchema.exactOptional().openapi({
      description:
        'The workflow execution that sent the signal. This is set only of the signal was sent by another workflow execution.',
    }),
    externalInitiatedEventId: EventIdSchema.exactOptional().openapi({
      description:
        'The ID of the <code>SignalExternalWorkflowExecutionInitiated</code> event corresponding to the <code>SignalExternalWorkflow</code> decision to signal this workflow execution.The source event with this ID can be found in the history of the source workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event. This field is set only if the signal was initiated by another workflow execution.',
    }),
  })
  .openapi({
    required: ['signalName'],
    description: 'Provides the details of the <code>WorkflowExecutionSignaled</code> event.',
  })
  .openapi('WorkflowExecutionSignaledEventAttributes')

const MarkerNameSchema = z.string().min(1).max(256).openapi('MarkerName')

const MarkerRecordedEventAttributesSchema = z
  .object({
    markerName: MarkerNameSchema.openapi({ description: 'The name of the marker.' }),
    details: DataSchema.exactOptional().openapi({ description: 'The details of the marker.' }),
    decisionTaskCompletedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>RecordMarker</code> decision that requested this marker. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
  })
  .openapi({
    required: ['markerName', 'decisionTaskCompletedEventId'],
    description: 'Provides the details of the <code>MarkerRecorded</code> event.',
  })
  .openapi('MarkerRecordedEventAttributes')

const RecordMarkerFailedCauseSchema = z
  .literal('OPERATION_NOT_PERMITTED')
  .openapi('RecordMarkerFailedCause')

const RecordMarkerFailedEventAttributesSchema = z
  .object({
    markerName: MarkerNameSchema.openapi({ description: "The marker's name." }),
    cause: RecordMarkerFailedCauseSchema.openapi({
      description:
        '<p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p> <note> <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> </note>',
    }),
    decisionTaskCompletedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>RecordMarkerFailed</code> decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
  })
  .openapi({
    required: ['markerName', 'cause', 'decisionTaskCompletedEventId'],
    description: 'Provides the details of the <code>RecordMarkerFailed</code> event.',
  })
  .openapi('RecordMarkerFailedEventAttributes')

const TimerIdSchema = z.string().min(1).max(256).openapi('TimerId')

const TimerStartedEventAttributesSchema = z
  .object({
    timerId: TimerIdSchema.openapi({ description: 'The unique ID of the timer that was started.' }),
    control: DataSchema.exactOptional().openapi({
      description:
        'Data attached to the event that can be used by the decider in subsequent workflow tasks.',
    }),
    startToFireTimeout: DurationInSecondsSchema.openapi({
      description:
        '<p>The duration of time after which the timer fires.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>.</p>',
    }),
    decisionTaskCompletedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>StartTimer</code> decision for this activity task. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
  })
  .openapi({
    required: ['timerId', 'startToFireTimeout', 'decisionTaskCompletedEventId'],
    description: 'Provides the details of the <code>TimerStarted</code> event.',
  })
  .openapi('TimerStartedEventAttributes')

const TimerFiredEventAttributesSchema = z
  .object({
    timerId: TimerIdSchema.openapi({ description: 'The unique ID of the timer that fired.' }),
    startedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>TimerStarted</code> event that was recorded when this timer was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
  })
  .openapi({
    required: ['timerId', 'startedEventId'],
    description: 'Provides the details of the <code>TimerFired</code> event.',
  })
  .openapi('TimerFiredEventAttributes')

const TimerCanceledEventAttributesSchema = z
  .object({
    timerId: TimerIdSchema.openapi({
      description: 'The unique ID of the timer that was canceled.',
    }),
    startedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>TimerStarted</code> event that was recorded when this timer was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
    decisionTaskCompletedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>CancelTimer</code> decision to cancel this timer. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
  })
  .openapi({
    required: ['timerId', 'startedEventId', 'decisionTaskCompletedEventId'],
    description: ' Provides the details of the <code>TimerCanceled</code> event. ',
  })
  .openapi('TimerCanceledEventAttributes')

const StartChildWorkflowExecutionInitiatedEventAttributesSchema = z
  .object({
    workflowId: WorkflowIdSchema.openapi({
      description: 'The <code>workflowId</code> of the child workflow execution.',
    }),
    workflowType: WorkflowTypeSchema.openapi({
      description: 'The type of the child workflow execution.',
    }),
    control: DataSchema.exactOptional().openapi({
      description:
        "Data attached to the event that can be used by the decider in subsequent decision tasks. This data isn't sent to the activity.",
    }),
    input: DataSchema.exactOptional().openapi({
      description: 'The inputs provided to the child workflow execution.',
    }),
    executionStartToCloseTimeout: DurationInSecondsOptionalSchema.exactOptional().openapi({
      description:
        "<p>The maximum duration for the child workflow execution. If the workflow execution isn't closed within this duration, it is timed out and force-terminated.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>",
    }),
    taskList: TaskListSchema.openapi({
      description:
        'The name of the task list used for the decision tasks of the child workflow execution.',
    }),
    taskPriority: TaskPrioritySchema.exactOptional().openapi({
      description:
        '<p> The priority assigned for the decision tasks for this workflow execution. Valid values are integers that range from Java\'s <code>Integer.MIN_VALUE</code> (-2147483648) to <code>Integer.MAX_VALUE</code> (2147483647). Higher numbers indicate higher priority.</p> <p>For more information about setting task priority, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html">Setting Task Priority</a> in the <i>Amazon SWF Developer Guide</i>.</p>',
    }),
    decisionTaskCompletedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>StartChildWorkflowExecution</code> <a>Decision</a> to request this child workflow execution. This information can be useful for diagnosing problems by tracing back the cause of events.',
    }),
    childPolicy: ChildPolicySchema.openapi({
      description:
        '<p>The policy to use for the child workflow executions if this execution gets terminated by explicitly calling the <a>TerminateWorkflowExecution</a> action or due to an expired timeout.</p> <p>The supported child policies are:</p> <ul> <li> <p> <code>TERMINATE</code> – The child executions are terminated.</p> </li> <li> <p> <code>REQUEST_CANCEL</code> – A request to cancel is attempted for each child execution by recording a <code>WorkflowExecutionCancelRequested</code> event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event.</p> </li> <li> <p> <code>ABANDON</code> – No action is taken. The child executions continue to run.</p> </li> </ul>',
    }),
    taskStartToCloseTimeout: DurationInSecondsOptionalSchema.exactOptional().openapi({
      description:
        '<p>The maximum duration allowed for the decision tasks for this workflow execution.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>',
    }),
    tagList: TagListSchema.exactOptional().openapi({
      description: 'The list of tags to associated with the child workflow execution.',
    }),
    lambdaRole: ArnSchema.exactOptional().openapi({
      description: 'The IAM role to attach to the child workflow execution.',
    }),
  })
  .openapi({
    required: [
      'workflowId',
      'workflowType',
      'taskList',
      'decisionTaskCompletedEventId',
      'childPolicy',
    ],
    description:
      'Provides the details of the <code>StartChildWorkflowExecutionInitiated</code> event.',
  })
  .openapi('StartChildWorkflowExecutionInitiatedEventAttributes')

const ChildWorkflowExecutionStartedEventAttributesSchema = z
  .object({
    workflowExecution: WorkflowExecutionSchema.openapi({
      description: 'The child workflow execution that was started.',
    }),
    workflowType: WorkflowTypeSchema.openapi({
      description: 'The type of the child workflow execution.',
    }),
    initiatedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>StartChildWorkflowExecutionInitiated</code> event corresponding to the <code>StartChildWorkflowExecution</code> <a>Decision</a> to start this child workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
  })
  .openapi({
    required: ['workflowExecution', 'workflowType', 'initiatedEventId'],
    description: 'Provides the details of the <code>ChildWorkflowExecutionStarted</code> event.',
  })
  .openapi('ChildWorkflowExecutionStartedEventAttributes')

const ChildWorkflowExecutionCompletedEventAttributesSchema = z
  .object({
    workflowExecution: WorkflowExecutionSchema.openapi({
      description: 'The child workflow execution that was completed.',
    }),
    workflowType: WorkflowTypeSchema.openapi({
      description: 'The type of the child workflow execution.',
    }),
    result: DataSchema.exactOptional().openapi({
      description: 'The result of the child workflow execution.',
    }),
    initiatedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>StartChildWorkflowExecutionInitiated</code> event corresponding to the <code>StartChildWorkflowExecution</code> <a>Decision</a> to start this child workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
    startedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>ChildWorkflowExecutionStarted</code> event recorded when this child workflow execution was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
  })
  .openapi({
    required: ['workflowExecution', 'workflowType', 'initiatedEventId', 'startedEventId'],
    description: 'Provides the details of the <code>ChildWorkflowExecutionCompleted</code> event.',
  })
  .openapi('ChildWorkflowExecutionCompletedEventAttributes')

const ChildWorkflowExecutionFailedEventAttributesSchema = z
  .object({
    workflowExecution: WorkflowExecutionSchema.openapi({
      description: 'The child workflow execution that failed.',
    }),
    workflowType: WorkflowTypeSchema.openapi({
      description: 'The type of the child workflow execution.',
    }),
    reason: FailureReasonSchema.exactOptional().openapi({
      description: 'The reason for the failure (if provided).',
    }),
    details: DataSchema.exactOptional().openapi({
      description: 'The details of the failure (if provided).',
    }),
    initiatedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>StartChildWorkflowExecutionInitiated</code> event corresponding to the <code>StartChildWorkflowExecution</code> <a>Decision</a> to start this child workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
    startedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>ChildWorkflowExecutionStarted</code> event recorded when this child workflow execution was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
  })
  .openapi({
    required: ['workflowExecution', 'workflowType', 'initiatedEventId', 'startedEventId'],
    description: 'Provides the details of the <code>ChildWorkflowExecutionFailed</code> event.',
  })
  .openapi('ChildWorkflowExecutionFailedEventAttributes')

const ChildWorkflowExecutionTimedOutEventAttributesSchema = z
  .object({
    workflowExecution: WorkflowExecutionSchema.openapi({
      description: 'The child workflow execution that timed out.',
    }),
    workflowType: WorkflowTypeSchema.openapi({
      description: 'The type of the child workflow execution.',
    }),
    timeoutType: WorkflowExecutionTimeoutTypeSchema.openapi({
      description: 'The type of the timeout that caused the child workflow execution to time out.',
    }),
    initiatedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>StartChildWorkflowExecutionInitiated</code> event corresponding to the <code>StartChildWorkflowExecution</code> <a>Decision</a> to start this child workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
    startedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>ChildWorkflowExecutionStarted</code> event recorded when this child workflow execution was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
  })
  .openapi({
    required: [
      'workflowExecution',
      'workflowType',
      'timeoutType',
      'initiatedEventId',
      'startedEventId',
    ],
    description: 'Provides the details of the <code>ChildWorkflowExecutionTimedOut</code> event.',
  })
  .openapi('ChildWorkflowExecutionTimedOutEventAttributes')

const ChildWorkflowExecutionCanceledEventAttributesSchema = z
  .object({
    workflowExecution: WorkflowExecutionSchema.openapi({
      description: 'The child workflow execution that was canceled.',
    }),
    workflowType: WorkflowTypeSchema.openapi({
      description: 'The type of the child workflow execution.',
    }),
    details: DataSchema.exactOptional().openapi({
      description: 'Details of the cancellation (if provided).',
    }),
    initiatedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>StartChildWorkflowExecutionInitiated</code> event corresponding to the <code>StartChildWorkflowExecution</code> <a>Decision</a> to start this child workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
    startedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>ChildWorkflowExecutionStarted</code> event recorded when this child workflow execution was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
  })
  .openapi({
    required: ['workflowExecution', 'workflowType', 'initiatedEventId', 'startedEventId'],
    description: 'Provide details of the <code>ChildWorkflowExecutionCanceled</code> event.',
  })
  .openapi('ChildWorkflowExecutionCanceledEventAttributes')

const ChildWorkflowExecutionTerminatedEventAttributesSchema = z
  .object({
    workflowExecution: WorkflowExecutionSchema.openapi({
      description: 'The child workflow execution that was terminated.',
    }),
    workflowType: WorkflowTypeSchema.openapi({
      description: 'The type of the child workflow execution.',
    }),
    initiatedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>StartChildWorkflowExecutionInitiated</code> event corresponding to the <code>StartChildWorkflowExecution</code> <a>Decision</a> to start this child workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
    startedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>ChildWorkflowExecutionStarted</code> event recorded when this child workflow execution was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
  })
  .openapi({
    required: ['workflowExecution', 'workflowType', 'initiatedEventId', 'startedEventId'],
    description: 'Provides the details of the <code>ChildWorkflowExecutionTerminated</code> event.',
  })
  .openapi('ChildWorkflowExecutionTerminatedEventAttributes')

const SignalExternalWorkflowExecutionInitiatedEventAttributesSchema = z
  .object({
    workflowId: WorkflowIdSchema.openapi({
      description: 'The <code>workflowId</code> of the external workflow execution.',
    }),
    runId: WorkflowRunIdOptionalSchema.exactOptional().openapi({
      description:
        'The <code>runId</code> of the external workflow execution to send the signal to.',
    }),
    signalName: SignalNameSchema.openapi({ description: 'The name of the signal.' }),
    input: DataSchema.exactOptional().openapi({ description: 'The input provided to the signal.' }),
    decisionTaskCompletedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>SignalExternalWorkflowExecution</code> decision for this signal. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
    control: DataSchema.exactOptional().openapi({
      description:
        'Data attached to the event that can be used by the decider in subsequent decision tasks.',
    }),
  })
  .openapi({
    required: ['workflowId', 'signalName', 'decisionTaskCompletedEventId'],
    description:
      'Provides the details of the <code>SignalExternalWorkflowExecutionInitiated</code> event.',
  })
  .openapi('SignalExternalWorkflowExecutionInitiatedEventAttributes')

const ExternalWorkflowExecutionSignaledEventAttributesSchema = z
  .object({
    workflowExecution: WorkflowExecutionSchema.openapi({
      description: 'The external workflow execution that the signal was delivered to.',
    }),
    initiatedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>SignalExternalWorkflowExecutionInitiated</code> event corresponding to the <code>SignalExternalWorkflowExecution</code> decision to request this signal. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
  })
  .openapi({
    required: ['workflowExecution', 'initiatedEventId'],
    description:
      'Provides the details of the <code>ExternalWorkflowExecutionSignaled</code> event.',
  })
  .openapi('ExternalWorkflowExecutionSignaledEventAttributes')

const SignalExternalWorkflowExecutionFailedCauseSchema = z
  .enum([
    'UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION',
    'SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_RATE_EXCEEDED',
    'OPERATION_NOT_PERMITTED',
  ])
  .openapi('SignalExternalWorkflowExecutionFailedCause')

const SignalExternalWorkflowExecutionFailedEventAttributesSchema = z
  .object({
    workflowId: WorkflowIdSchema.openapi({
      description:
        'The <code>workflowId</code> of the external workflow execution that the signal was being delivered to.',
    }),
    runId: WorkflowRunIdOptionalSchema.exactOptional().openapi({
      description:
        'The <code>runId</code> of the external workflow execution that the signal was being delivered to.',
    }),
    cause: SignalExternalWorkflowExecutionFailedCauseSchema.openapi({
      description:
        '<p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p> <note> <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> </note>',
    }),
    initiatedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>SignalExternalWorkflowExecutionInitiated</code> event corresponding to the <code>SignalExternalWorkflowExecution</code> decision to request this signal. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
    decisionTaskCompletedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>SignalExternalWorkflowExecution</code> decision for this signal. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
    control: DataSchema.exactOptional().openapi({
      description:
        "The data attached to the event that the decider can use in subsequent workflow tasks. This data isn't sent to the workflow execution.",
    }),
  })
  .openapi({
    required: ['workflowId', 'cause', 'initiatedEventId', 'decisionTaskCompletedEventId'],
    description:
      'Provides the details of the <code>SignalExternalWorkflowExecutionFailed</code> event.',
  })
  .openapi('SignalExternalWorkflowExecutionFailedEventAttributes')

const ExternalWorkflowExecutionCancelRequestedEventAttributesSchema = z
  .object({
    workflowExecution: WorkflowExecutionSchema.openapi({
      description:
        'The external workflow execution to which the cancellation request was delivered.',
    }),
    initiatedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>RequestCancelExternalWorkflowExecutionInitiated</code> event corresponding to the <code>RequestCancelExternalWorkflowExecution</code> decision to cancel this external workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
  })
  .openapi({
    required: ['workflowExecution', 'initiatedEventId'],
    description:
      'Provides the details of the <code>ExternalWorkflowExecutionCancelRequested</code> event.',
  })
  .openapi('ExternalWorkflowExecutionCancelRequestedEventAttributes')

const RequestCancelExternalWorkflowExecutionInitiatedEventAttributesSchema = z
  .object({
    workflowId: WorkflowIdSchema.openapi({
      description: 'The <code>workflowId</code> of the external workflow execution to be canceled.',
    }),
    runId: WorkflowRunIdOptionalSchema.exactOptional().openapi({
      description: 'The <code>runId</code> of the external workflow execution to be canceled.',
    }),
    decisionTaskCompletedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>RequestCancelExternalWorkflowExecution</code> decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
    control: DataSchema.exactOptional().openapi({
      description:
        'Data attached to the event that can be used by the decider in subsequent workflow tasks.',
    }),
  })
  .openapi({
    required: ['workflowId', 'decisionTaskCompletedEventId'],
    description:
      'Provides the details of the <code>RequestCancelExternalWorkflowExecutionInitiated</code> event.',
  })
  .openapi('RequestCancelExternalWorkflowExecutionInitiatedEventAttributes')

const RequestCancelExternalWorkflowExecutionFailedCauseSchema = z
  .enum([
    'UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION',
    'REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_RATE_EXCEEDED',
    'OPERATION_NOT_PERMITTED',
  ])
  .openapi('RequestCancelExternalWorkflowExecutionFailedCause')

const RequestCancelExternalWorkflowExecutionFailedEventAttributesSchema = z
  .object({
    workflowId: WorkflowIdSchema.openapi({
      description:
        'The <code>workflowId</code> of the external workflow to which the cancel request was to be delivered.',
    }),
    runId: WorkflowRunIdOptionalSchema.exactOptional().openapi({
      description: 'The <code>runId</code> of the external workflow execution.',
    }),
    cause: RequestCancelExternalWorkflowExecutionFailedCauseSchema.openapi({
      description:
        '<p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p> <note> <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> </note>',
    }),
    initiatedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>RequestCancelExternalWorkflowExecutionInitiated</code> event corresponding to the <code>RequestCancelExternalWorkflowExecution</code> decision to cancel this external workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
    decisionTaskCompletedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>RequestCancelExternalWorkflowExecution</code> decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
    control: DataSchema.exactOptional().openapi({
      description:
        "The data attached to the event that the decider can use in subsequent workflow tasks. This data isn't sent to the workflow execution.",
    }),
  })
  .openapi({
    required: ['workflowId', 'cause', 'initiatedEventId', 'decisionTaskCompletedEventId'],
    description:
      'Provides the details of the <code>RequestCancelExternalWorkflowExecutionFailed</code> event.',
  })
  .openapi('RequestCancelExternalWorkflowExecutionFailedEventAttributes')

const ScheduleActivityTaskFailedCauseSchema = z
  .enum([
    'ACTIVITY_TYPE_DEPRECATED',
    'ACTIVITY_TYPE_DOES_NOT_EXIST',
    'ACTIVITY_ID_ALREADY_IN_USE',
    'OPEN_ACTIVITIES_LIMIT_EXCEEDED',
    'ACTIVITY_CREATION_RATE_EXCEEDED',
    'DEFAULT_SCHEDULE_TO_CLOSE_TIMEOUT_UNDEFINED',
    'DEFAULT_TASK_LIST_UNDEFINED',
    'DEFAULT_SCHEDULE_TO_START_TIMEOUT_UNDEFINED',
    'DEFAULT_START_TO_CLOSE_TIMEOUT_UNDEFINED',
    'DEFAULT_HEARTBEAT_TIMEOUT_UNDEFINED',
    'OPERATION_NOT_PERMITTED',
  ])
  .openapi('ScheduleActivityTaskFailedCause')

const ScheduleActivityTaskFailedEventAttributesSchema = z
  .object({
    activityType: ActivityTypeSchema.openapi({
      description:
        'The activity type provided in the <code>ScheduleActivityTask</code> decision that failed.',
    }),
    activityId: ActivityIdSchema.openapi({
      description:
        'The activityId provided in the <code>ScheduleActivityTask</code> decision that failed.',
    }),
    cause: ScheduleActivityTaskFailedCauseSchema.openapi({
      description:
        '<p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p> <note> <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> </note>',
    }),
    decisionTaskCompletedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision that resulted in the scheduling of this activity task. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
  })
  .openapi({
    required: ['activityType', 'activityId', 'cause', 'decisionTaskCompletedEventId'],
    description: 'Provides the details of the <code>ScheduleActivityTaskFailed</code> event.',
  })
  .openapi('ScheduleActivityTaskFailedEventAttributes')

const RequestCancelActivityTaskFailedCauseSchema = z
  .enum(['ACTIVITY_ID_UNKNOWN', 'OPERATION_NOT_PERMITTED'])
  .openapi('RequestCancelActivityTaskFailedCause')

const RequestCancelActivityTaskFailedEventAttributesSchema = z
  .object({
    activityId: ActivityIdSchema.openapi({
      description:
        'The activityId provided in the <code>RequestCancelActivityTask</code> decision that failed.',
    }),
    cause: RequestCancelActivityTaskFailedCauseSchema.openapi({
      description:
        '<p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p> <note> <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> </note>',
    }),
    decisionTaskCompletedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>RequestCancelActivityTask</code> decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
  })
  .openapi({
    required: ['activityId', 'cause', 'decisionTaskCompletedEventId'],
    description: 'Provides the details of the <code>RequestCancelActivityTaskFailed</code> event.',
  })
  .openapi('RequestCancelActivityTaskFailedEventAttributes')

const StartTimerFailedCauseSchema = z
  .enum([
    'TIMER_ID_ALREADY_IN_USE',
    'OPEN_TIMERS_LIMIT_EXCEEDED',
    'TIMER_CREATION_RATE_EXCEEDED',
    'OPERATION_NOT_PERMITTED',
  ])
  .openapi('StartTimerFailedCause')

const StartTimerFailedEventAttributesSchema = z
  .object({
    timerId: TimerIdSchema.openapi({
      description: 'The timerId provided in the <code>StartTimer</code> decision that failed.',
    }),
    cause: StartTimerFailedCauseSchema.openapi({
      description:
        '<p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p> <note> <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> </note>',
    }),
    decisionTaskCompletedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>StartTimer</code> decision for this activity task. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
  })
  .openapi({
    required: ['timerId', 'cause', 'decisionTaskCompletedEventId'],
    description: 'Provides the details of the <code>StartTimerFailed</code> event.',
  })
  .openapi('StartTimerFailedEventAttributes')

const CancelTimerFailedCauseSchema = z
  .enum(['TIMER_ID_UNKNOWN', 'OPERATION_NOT_PERMITTED'])
  .openapi('CancelTimerFailedCause')

const CancelTimerFailedEventAttributesSchema = z
  .object({
    timerId: TimerIdSchema.openapi({
      description: 'The timerId provided in the <code>CancelTimer</code> decision that failed.',
    }),
    cause: CancelTimerFailedCauseSchema.openapi({
      description:
        '<p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p> <note> <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> </note>',
    }),
    decisionTaskCompletedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>CancelTimer</code> decision to cancel this timer. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.',
    }),
  })
  .openapi({
    required: ['timerId', 'cause', 'decisionTaskCompletedEventId'],
    description: 'Provides the details of the <code>CancelTimerFailed</code> event.',
  })
  .openapi('CancelTimerFailedEventAttributes')

const StartChildWorkflowExecutionFailedCauseSchema = z
  .enum([
    'WORKFLOW_TYPE_DOES_NOT_EXIST',
    'WORKFLOW_TYPE_DEPRECATED',
    'OPEN_CHILDREN_LIMIT_EXCEEDED',
    'OPEN_WORKFLOWS_LIMIT_EXCEEDED',
    'CHILD_CREATION_RATE_EXCEEDED',
    'WORKFLOW_ALREADY_RUNNING',
    'DEFAULT_EXECUTION_START_TO_CLOSE_TIMEOUT_UNDEFINED',
    'DEFAULT_TASK_LIST_UNDEFINED',
    'DEFAULT_TASK_START_TO_CLOSE_TIMEOUT_UNDEFINED',
    'DEFAULT_CHILD_POLICY_UNDEFINED',
    'OPERATION_NOT_PERMITTED',
  ])
  .openapi('StartChildWorkflowExecutionFailedCause')

const StartChildWorkflowExecutionFailedEventAttributesSchema = z
  .object({
    workflowType: WorkflowTypeSchema.openapi({
      description:
        'The workflow type provided in the <code>StartChildWorkflowExecution</code> <a>Decision</a> that failed.',
    }),
    cause: StartChildWorkflowExecutionFailedCauseSchema.openapi({
      description:
        '<p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p> <note> <p>When <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision fails because it lacks sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html"> Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> </note>',
    }),
    workflowId: WorkflowIdSchema.openapi({
      description: 'The <code>workflowId</code> of the child workflow execution.',
    }),
    initiatedEventId: EventIdSchema.openapi({
      description:
        "<p>When the <code>cause</code> is <code>WORKFLOW_ALREADY_RUNNING</code>, <code>initiatedEventId</code> is the ID of the <code>StartChildWorkflowExecutionInitiated</code> event that corresponds to the <code>StartChildWorkflowExecution</code> <a>Decision</a> to start the workflow execution. You can use this information to diagnose problems by tracing back the chain of events leading up to this event.</p> <p>When the <code>cause</code> isn't <code>WORKFLOW_ALREADY_RUNNING</code>, <code>initiatedEventId</code> is set to <code>0</code> because the <code>StartChildWorkflowExecutionInitiated</code> event doesn't exist.</p>",
    }),
    decisionTaskCompletedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>StartChildWorkflowExecution</code> <a>Decision</a> to request this child workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events.',
    }),
    control: DataSchema.exactOptional().openapi({
      description:
        "The data attached to the event that the decider can use in subsequent workflow tasks. This data isn't sent to the child workflow execution.",
    }),
  })
  .openapi({
    required: [
      'workflowType',
      'cause',
      'workflowId',
      'initiatedEventId',
      'decisionTaskCompletedEventId',
    ],
    description:
      'Provides the details of the <code>StartChildWorkflowExecutionFailed</code> event.',
  })
  .openapi('StartChildWorkflowExecutionFailedEventAttributes')

const FunctionIdSchema = z.string().min(1).max(256).openapi('FunctionId')

const FunctionNameSchema = z.string().min(1).max(64).openapi('FunctionName')

const FunctionInputSchema = z.string().min(0).max(32768).openapi('FunctionInput')

const LambdaFunctionScheduledEventAttributesSchema = z
  .object({
    id: FunctionIdSchema.openapi({ description: 'The unique ID of the Lambda task.' }),
    name: FunctionNameSchema.openapi({ description: 'The name of the Lambda function.' }),
    control: DataSchema.exactOptional().openapi({
      description:
        "Data attached to the event that the decider can use in subsequent workflow tasks. This data isn't sent to the Lambda task.",
    }),
    input: FunctionInputSchema.exactOptional().openapi({
      description: 'The input provided to the Lambda task.',
    }),
    startToCloseTimeout: DurationInSecondsOptionalSchema.exactOptional().openapi({
      description: 'The maximum amount of time a worker can take to process the Lambda task.',
    }),
    decisionTaskCompletedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>LambdaFunctionCompleted</code> event corresponding to the decision that resulted in scheduling this activity task. To help diagnose issues, use this information to trace back the chain of events leading up to this event.',
    }),
  })
  .openapi({
    required: ['id', 'name', 'decisionTaskCompletedEventId'],
    description:
      "Provides the details of the <code>LambdaFunctionScheduled</code> event. It isn't set for other event types.",
  })
  .openapi('LambdaFunctionScheduledEventAttributes')

const LambdaFunctionStartedEventAttributesSchema = z
  .object({
    scheduledEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>LambdaFunctionScheduled</code> event that was recorded when this activity task was scheduled. To help diagnose issues, use this information to trace back the chain of events leading up to this event.',
    }),
  })
  .openapi({
    required: ['scheduledEventId'],
    description:
      "Provides the details of the <code>LambdaFunctionStarted</code> event. It isn't set for other event types.",
  })
  .openapi('LambdaFunctionStartedEventAttributes')

const LambdaFunctionCompletedEventAttributesSchema = z
  .object({
    scheduledEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>LambdaFunctionScheduled</code> event that was recorded when this Lambda task was scheduled. To help diagnose issues, use this information to trace back the chain of events leading up to this event.',
    }),
    startedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>LambdaFunctionStarted</code> event recorded when this activity task started. To help diagnose issues, use this information to trace back the chain of events leading up to this event.',
    }),
    result: DataSchema.exactOptional().openapi({ description: 'The results of the Lambda task.' }),
  })
  .openapi({
    required: ['scheduledEventId', 'startedEventId'],
    description:
      "Provides the details of the <code>LambdaFunctionCompleted</code> event. It isn't set for other event types.",
  })
  .openapi('LambdaFunctionCompletedEventAttributes')

const LambdaFunctionFailedEventAttributesSchema = z
  .object({
    scheduledEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>LambdaFunctionScheduled</code> event that was recorded when this activity task was scheduled. To help diagnose issues, use this information to trace back the chain of events leading up to this event.',
    }),
    startedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>LambdaFunctionStarted</code> event recorded when this activity task started. To help diagnose issues, use this information to trace back the chain of events leading up to this event.',
    }),
    reason: FailureReasonSchema.exactOptional().openapi({
      description: 'The reason provided for the failure.',
    }),
    details: DataSchema.exactOptional().openapi({ description: 'The details of the failure.' }),
  })
  .openapi({
    required: ['scheduledEventId', 'startedEventId'],
    description:
      "Provides the details of the <code>LambdaFunctionFailed</code> event. It isn't set for other event types.",
  })
  .openapi('LambdaFunctionFailedEventAttributes')

const LambdaFunctionTimeoutTypeSchema = z
  .literal('START_TO_CLOSE')
  .openapi('LambdaFunctionTimeoutType')

const LambdaFunctionTimedOutEventAttributesSchema = z
  .object({
    scheduledEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>LambdaFunctionScheduled</code> event that was recorded when this activity task was scheduled. To help diagnose issues, use this information to trace back the chain of events leading up to this event.',
    }),
    startedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>ActivityTaskStarted</code> event that was recorded when this activity task started. To help diagnose issues, use this information to trace back the chain of events leading up to this event.',
    }),
    timeoutType: LambdaFunctionTimeoutTypeSchema.exactOptional().openapi({
      description: 'The type of the timeout that caused this event.',
    }),
  })
  .openapi({
    required: ['scheduledEventId', 'startedEventId'],
    description: 'Provides details of the <code>LambdaFunctionTimedOut</code> event.',
  })
  .openapi('LambdaFunctionTimedOutEventAttributes')

const ScheduleLambdaFunctionFailedCauseSchema = z
  .enum([
    'ID_ALREADY_IN_USE',
    'OPEN_LAMBDA_FUNCTIONS_LIMIT_EXCEEDED',
    'LAMBDA_FUNCTION_CREATION_RATE_EXCEEDED',
    'LAMBDA_SERVICE_NOT_AVAILABLE_IN_REGION',
  ])
  .openapi('ScheduleLambdaFunctionFailedCause')

const ScheduleLambdaFunctionFailedEventAttributesSchema = z
  .object({
    id: FunctionIdSchema.openapi({
      description:
        'The ID provided in the <code>ScheduleLambdaFunction</code> decision that failed. ',
    }),
    name: FunctionNameSchema.openapi({ description: 'The name of the Lambda function.' }),
    cause: ScheduleLambdaFunctionFailedCauseSchema.openapi({
      description:
        '<p>The cause of the failure. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p> <note> <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> </note>',
    }),
    decisionTaskCompletedEventId: EventIdSchema.openapi({
      description:
        'The ID of the <code>LambdaFunctionCompleted</code> event corresponding to the decision that resulted in scheduling this Lambda task. To help diagnose issues, use this information to trace back the chain of events leading up to this event.',
    }),
  })
  .openapi({
    required: ['id', 'name', 'cause', 'decisionTaskCompletedEventId'],
    description:
      "Provides the details of the <code>ScheduleLambdaFunctionFailed</code> event. It isn't set for other event types.",
  })
  .openapi('ScheduleLambdaFunctionFailedEventAttributes')

const StartLambdaFunctionFailedCauseSchema = z
  .literal('ASSUME_ROLE_FAILED')
  .openapi('StartLambdaFunctionFailedCause')

const CauseMessageSchema = z.string().max(1728).openapi('CauseMessage')

const StartLambdaFunctionFailedEventAttributesSchema = z
  .object({
    scheduledEventId: EventIdSchema.exactOptional().openapi({
      description:
        'The ID of the <code>ActivityTaskScheduled</code> event that was recorded when this activity task was scheduled. To help diagnose issues, use this information to trace back the chain of events leading up to this event.',
    }),
    cause: StartLambdaFunctionFailedCauseSchema.exactOptional().openapi({
      description:
        '<p>The cause of the failure. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p> <note> <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed because the IAM role attached to the execution lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html">Lambda Tasks</a> in the <i>Amazon SWF Developer Guide</i>.</p> </note>',
    }),
    message: CauseMessageSchema.exactOptional().openapi({
      description: 'A description that can help diagnose the cause of the fault.',
    }),
  })
  .openapi({
    description:
      "Provides the details of the <code>StartLambdaFunctionFailed</code> event. It isn't set for other event types.",
    required: [],
  })
  .openapi('StartLambdaFunctionFailedEventAttributes')

const HistoryEventSchema = z
  .object({
    eventTimestamp: TimestampSchema.openapi({
      description: 'The date and time when the event occurred.',
    }),
    eventType: EventTypeSchema.openapi({ description: 'The type of the history event.' }),
    eventId: EventIdSchema.openapi({
      description:
        'The system generated ID of the event. This ID uniquely identifies the event with in the workflow execution history.',
    }),
    workflowExecutionStartedEventAttributes:
      WorkflowExecutionStartedEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>WorkflowExecutionStarted</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    workflowExecutionCompletedEventAttributes:
      WorkflowExecutionCompletedEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>WorkflowExecutionCompleted</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    completeWorkflowExecutionFailedEventAttributes:
      CompleteWorkflowExecutionFailedEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>CompleteWorkflowExecutionFailed</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    workflowExecutionFailedEventAttributes:
      WorkflowExecutionFailedEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>WorkflowExecutionFailed</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    failWorkflowExecutionFailedEventAttributes:
      FailWorkflowExecutionFailedEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>FailWorkflowExecutionFailed</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    workflowExecutionTimedOutEventAttributes:
      WorkflowExecutionTimedOutEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>WorkflowExecutionTimedOut</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    workflowExecutionCanceledEventAttributes:
      WorkflowExecutionCanceledEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>WorkflowExecutionCanceled</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    cancelWorkflowExecutionFailedEventAttributes:
      CancelWorkflowExecutionFailedEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>CancelWorkflowExecutionFailed</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    workflowExecutionContinuedAsNewEventAttributes:
      WorkflowExecutionContinuedAsNewEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>WorkflowExecutionContinuedAsNew</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    continueAsNewWorkflowExecutionFailedEventAttributes:
      ContinueAsNewWorkflowExecutionFailedEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>ContinueAsNewWorkflowExecutionFailed</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    workflowExecutionTerminatedEventAttributes:
      WorkflowExecutionTerminatedEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>WorkflowExecutionTerminated</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    workflowExecutionCancelRequestedEventAttributes:
      WorkflowExecutionCancelRequestedEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>WorkflowExecutionCancelRequested</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    decisionTaskScheduledEventAttributes:
      DecisionTaskScheduledEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>DecisionTaskScheduled</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    decisionTaskStartedEventAttributes:
      DecisionTaskStartedEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>DecisionTaskStarted</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    decisionTaskCompletedEventAttributes:
      DecisionTaskCompletedEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>DecisionTaskCompleted</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    decisionTaskTimedOutEventAttributes:
      DecisionTaskTimedOutEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>DecisionTaskTimedOut</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    activityTaskScheduledEventAttributes:
      ActivityTaskScheduledEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>ActivityTaskScheduled</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    activityTaskStartedEventAttributes:
      ActivityTaskStartedEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>ActivityTaskStarted</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    activityTaskCompletedEventAttributes:
      ActivityTaskCompletedEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>ActivityTaskCompleted</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    activityTaskFailedEventAttributes:
      ActivityTaskFailedEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>ActivityTaskFailed</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    activityTaskTimedOutEventAttributes:
      ActivityTaskTimedOutEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>ActivityTaskTimedOut</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    activityTaskCanceledEventAttributes:
      ActivityTaskCanceledEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>ActivityTaskCanceled</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    activityTaskCancelRequestedEventAttributes:
      ActivityTaskCancelRequestedEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>ActivityTaskcancelRequested</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    workflowExecutionSignaledEventAttributes:
      WorkflowExecutionSignaledEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>WorkflowExecutionSignaled</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    markerRecordedEventAttributes: MarkerRecordedEventAttributesSchema.exactOptional().openapi({
      description:
        "If the event is of type <code>MarkerRecorded</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
    }),
    recordMarkerFailedEventAttributes:
      RecordMarkerFailedEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>DecisionTaskFailed</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    timerStartedEventAttributes: TimerStartedEventAttributesSchema.exactOptional().openapi({
      description:
        "If the event is of type <code>TimerStarted</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
    }),
    timerFiredEventAttributes: TimerFiredEventAttributesSchema.exactOptional().openapi({
      description:
        "If the event is of type <code>TimerFired</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
    }),
    timerCanceledEventAttributes: TimerCanceledEventAttributesSchema.exactOptional().openapi({
      description:
        "If the event is of type <code>TimerCanceled</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
    }),
    startChildWorkflowExecutionInitiatedEventAttributes:
      StartChildWorkflowExecutionInitiatedEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>StartChildWorkflowExecutionInitiated</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    childWorkflowExecutionStartedEventAttributes:
      ChildWorkflowExecutionStartedEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>ChildWorkflowExecutionStarted</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    childWorkflowExecutionCompletedEventAttributes:
      ChildWorkflowExecutionCompletedEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>ChildWorkflowExecutionCompleted</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    childWorkflowExecutionFailedEventAttributes:
      ChildWorkflowExecutionFailedEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>ChildWorkflowExecutionFailed</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    childWorkflowExecutionTimedOutEventAttributes:
      ChildWorkflowExecutionTimedOutEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>ChildWorkflowExecutionTimedOut</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    childWorkflowExecutionCanceledEventAttributes:
      ChildWorkflowExecutionCanceledEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>ChildWorkflowExecutionCanceled</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    childWorkflowExecutionTerminatedEventAttributes:
      ChildWorkflowExecutionTerminatedEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>ChildWorkflowExecutionTerminated</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    signalExternalWorkflowExecutionInitiatedEventAttributes:
      SignalExternalWorkflowExecutionInitiatedEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>SignalExternalWorkflowExecutionInitiated</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    externalWorkflowExecutionSignaledEventAttributes:
      ExternalWorkflowExecutionSignaledEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>ExternalWorkflowExecutionSignaled</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    signalExternalWorkflowExecutionFailedEventAttributes:
      SignalExternalWorkflowExecutionFailedEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>SignalExternalWorkflowExecutionFailed</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    externalWorkflowExecutionCancelRequestedEventAttributes:
      ExternalWorkflowExecutionCancelRequestedEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>ExternalWorkflowExecutionCancelRequested</code> then this member is set and provides detailed information about the event. It isn't set for other event types. ",
      }),
    requestCancelExternalWorkflowExecutionInitiatedEventAttributes:
      RequestCancelExternalWorkflowExecutionInitiatedEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>RequestCancelExternalWorkflowExecutionInitiated</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    requestCancelExternalWorkflowExecutionFailedEventAttributes:
      RequestCancelExternalWorkflowExecutionFailedEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>RequestCancelExternalWorkflowExecutionFailed</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    scheduleActivityTaskFailedEventAttributes:
      ScheduleActivityTaskFailedEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>ScheduleActivityTaskFailed</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    requestCancelActivityTaskFailedEventAttributes:
      RequestCancelActivityTaskFailedEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>RequestCancelActivityTaskFailed</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    startTimerFailedEventAttributes: StartTimerFailedEventAttributesSchema.exactOptional().openapi({
      description:
        "If the event is of type <code>StartTimerFailed</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
    }),
    cancelTimerFailedEventAttributes:
      CancelTimerFailedEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>CancelTimerFailed</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    startChildWorkflowExecutionFailedEventAttributes:
      StartChildWorkflowExecutionFailedEventAttributesSchema.exactOptional().openapi({
        description:
          "If the event is of type <code>StartChildWorkflowExecutionFailed</code> then this member is set and provides detailed information about the event. It isn't set for other event types.",
      }),
    lambdaFunctionScheduledEventAttributes:
      LambdaFunctionScheduledEventAttributesSchema.exactOptional().openapi({
        description:
          "Provides the details of the <code>LambdaFunctionScheduled</code> event. It isn't set for other event types.",
      }),
    lambdaFunctionStartedEventAttributes:
      LambdaFunctionStartedEventAttributesSchema.exactOptional().openapi({
        description:
          "Provides the details of the <code>LambdaFunctionStarted</code> event. It isn't set for other event types.",
      }),
    lambdaFunctionCompletedEventAttributes:
      LambdaFunctionCompletedEventAttributesSchema.exactOptional().openapi({
        description:
          "Provides the details of the <code>LambdaFunctionCompleted</code> event. It isn't set for other event types.",
      }),
    lambdaFunctionFailedEventAttributes:
      LambdaFunctionFailedEventAttributesSchema.exactOptional().openapi({
        description:
          "Provides the details of the <code>LambdaFunctionFailed</code> event. It isn't set for other event types.",
      }),
    lambdaFunctionTimedOutEventAttributes:
      LambdaFunctionTimedOutEventAttributesSchema.exactOptional().openapi({
        description:
          "Provides the details of the <code>LambdaFunctionTimedOut</code> event. It isn't set for other event types.",
      }),
    scheduleLambdaFunctionFailedEventAttributes:
      ScheduleLambdaFunctionFailedEventAttributesSchema.exactOptional().openapi({
        description:
          "Provides the details of the <code>ScheduleLambdaFunctionFailed</code> event. It isn't set for other event types.",
      }),
    startLambdaFunctionFailedEventAttributes:
      StartLambdaFunctionFailedEventAttributesSchema.exactOptional().openapi({
        description:
          "Provides the details of the <code>StartLambdaFunctionFailed</code> event. It isn't set for other event types.",
      }),
  })
  .openapi({
    required: ['eventTimestamp', 'eventType', 'eventId'],
    description:
      "<p>Event within a workflow execution. A history event can be one of these types:</p> <ul> <li> <p> <code>ActivityTaskCancelRequested</code> – A <code>RequestCancelActivityTask</code> decision was received by the system.</p> </li> <li> <p> <code>ActivityTaskCanceled</code> – The activity task was successfully canceled.</p> </li> <li> <p> <code>ActivityTaskCompleted</code> – An activity worker successfully completed an activity task by calling <a>RespondActivityTaskCompleted</a>.</p> </li> <li> <p> <code>ActivityTaskFailed</code> – An activity worker failed an activity task by calling <a>RespondActivityTaskFailed</a>.</p> </li> <li> <p> <code>ActivityTaskScheduled</code> – An activity task was scheduled for execution.</p> </li> <li> <p> <code>ActivityTaskStarted</code> – The scheduled activity task was dispatched to a worker.</p> </li> <li> <p> <code>ActivityTaskTimedOut</code> – The activity task timed out.</p> </li> <li> <p> <code>CancelTimerFailed</code> – Failed to process CancelTimer decision. This happens when the decision isn't configured properly, for example no timer exists with the specified timer Id.</p> </li> <li> <p> <code>CancelWorkflowExecutionFailed</code> – A request to cancel a workflow execution failed.</p> </li> <li> <p> <code>ChildWorkflowExecutionCanceled</code> – A child workflow execution, started by this workflow execution, was canceled and closed.</p> </li> <li> <p> <code>ChildWorkflowExecutionCompleted</code> – A child workflow execution, started by this workflow execution, completed successfully and was closed.</p> </li> <li> <p> <code>ChildWorkflowExecutionFailed</code> – A child workflow execution, started by this workflow execution, failed to complete successfully and was closed.</p> </li> <li> <p> <code>ChildWorkflowExecutionStarted</code> – A child workflow execution was successfully started.</p> </li> <li> <p> <code>ChildWorkflowExecutionTerminated</code> – A child workflow execution, started by this workflow execution, was terminated.</p> </li> <li> <p> <code>ChildWorkflowExecutionTimedOut</code> – A child workflow execution, started by this workflow execution, timed out and was closed.</p> </li> <li> <p> <code>CompleteWorkflowExecutionFailed</code> – The workflow execution failed to complete.</p> </li> <li> <p> <code>ContinueAsNewWorkflowExecutionFailed</code> – The workflow execution failed to complete after being continued as a new workflow execution.</p> </li> <li> <p> <code>DecisionTaskCompleted</code> – The decider successfully completed a decision task by calling <a>RespondDecisionTaskCompleted</a>.</p> </li> <li> <p> <code>DecisionTaskScheduled</code> – A decision task was scheduled for the workflow execution.</p> </li> <li> <p> <code>DecisionTaskStarted</code> – The decision task was dispatched to a decider.</p> </li> <li> <p> <code>DecisionTaskTimedOut</code> – The decision task timed out.</p> </li> <li> <p> <code>ExternalWorkflowExecutionCancelRequested</code> – Request to cancel an external workflow execution was successfully delivered to the target execution.</p> </li> <li> <p> <code>ExternalWorkflowExecutionSignaled</code> – A signal, requested by this workflow execution, was successfully delivered to the target external workflow execution.</p> </li> <li> <p> <code>FailWorkflowExecutionFailed</code> – A request to mark a workflow execution as failed, itself failed.</p> </li> <li> <p> <code>MarkerRecorded</code> – A marker was recorded in the workflow history as the result of a <code>RecordMarker</code> decision.</p> </li> <li> <p> <code>RecordMarkerFailed</code> – A <code>RecordMarker</code> decision was returned as failed.</p> </li> <li> <p> <code>RequestCancelActivityTaskFailed</code> – Failed to process RequestCancelActivityTask decision. This happens when the decision isn't configured properly.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecutionFailed</code> – Request to cancel an external workflow execution failed.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecutionInitiated</code> – A request was made to request the cancellation of an external workflow execution.</p> </li> <li> <p> <code>ScheduleActivityTaskFailed</code> – Failed to process ScheduleActivityTask decision. This happens when the decision isn't configured properly, for example the activity type specified isn't registered.</p> </li> <li> <p> <code>SignalExternalWorkflowExecutionFailed</code> – The request to signal an external workflow execution failed.</p> </li> <li> <p> <code>SignalExternalWorkflowExecutionInitiated</code> – A request to signal an external workflow was made.</p> </li> <li> <p> <code>StartActivityTaskFailed</code> – A scheduled activity task failed to start.</p> </li> <li> <p> <code>StartChildWorkflowExecutionFailed</code> – Failed to process StartChildWorkflowExecution decision. This happens when the decision isn't configured properly, for example the workflow type specified isn't registered.</p> </li> <li> <p> <code>StartChildWorkflowExecutionInitiated</code> – A request was made to start a child workflow execution.</p> </li> <li> <p> <code>StartTimerFailed</code> – Failed to process StartTimer decision. This happens when the decision isn't configured properly, for example a timer already exists with the specified timer Id.</p> </li> <li> <p> <code>TimerCanceled</code> – A timer, previously started for this workflow execution, was successfully canceled.</p> </li> <li> <p> <code>TimerFired</code> – A timer, previously started for this workflow execution, fired.</p> </li> <li> <p> <code>TimerStarted</code> – A timer was started for the workflow execution due to a <code>StartTimer</code> decision.</p> </li> <li> <p> <code>WorkflowExecutionCancelRequested</code> – A request to cancel this workflow execution was made.</p> </li> <li> <p> <code>WorkflowExecutionCanceled</code> – The workflow execution was successfully canceled and closed.</p> </li> <li> <p> <code>WorkflowExecutionCompleted</code> – The workflow execution was closed due to successful completion.</p> </li> <li> <p> <code>WorkflowExecutionContinuedAsNew</code> – The workflow execution was closed and a new execution of the same type was created with the same workflowId.</p> </li> <li> <p> <code>WorkflowExecutionFailed</code> – The workflow execution closed due to a failure.</p> </li> <li> <p> <code>WorkflowExecutionSignaled</code> – An external signal was received for the workflow execution.</p> </li> <li> <p> <code>WorkflowExecutionStarted</code> – The workflow execution was started.</p> </li> <li> <p> <code>WorkflowExecutionTerminated</code> – The workflow execution was terminated.</p> </li> <li> <p> <code>WorkflowExecutionTimedOut</code> – The workflow execution was closed because a time out was exceeded.</p> </li> </ul>",
  })
  .openapi('HistoryEvent')

const HistoryEventListSchema = z.array(HistoryEventSchema).openapi('HistoryEventList')

const PageTokenSchema = z.string().max(2048).openapi('PageToken')

const HistorySchema = z
  .object({
    events: HistoryEventListSchema.openapi({ description: 'The list of history events.' }),
    nextPageToken: PageTokenSchema.exactOptional().openapi({
      description:
        '<p>If a <code>NextPageToken</code> was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in <code>nextPageToken</code>. Keep all other arguments unchanged.</p> <p>The configured <code>maximumPageSize</code> determines how many results can be returned in a single call.</p>',
    }),
  })
  .openapi({
    required: ['events'],
    description:
      'Paginated representation of a workflow history for a workflow execution. This is the up to date, complete and authoritative record of the events related to all tasks and events in the life of the workflow execution.',
  })
  .openapi('History')

const PageSizeSchema = z.int().min(0).max(1000).openapi('PageSize')

const ReverseOrderSchema = z.boolean().openapi('ReverseOrder')

const GetWorkflowExecutionHistoryInputSchema = z
  .object({
    domain: DomainNameSchema.openapi({
      description: 'The name of the domain containing the workflow execution.',
    }),
    execution: WorkflowExecutionSchema.openapi({
      description: 'Specifies the workflow execution for which to return the history.',
    }),
    nextPageToken: PageTokenSchema.exactOptional().openapi({
      description:
        '<p>If <code>NextPageToken</code> is returned there are more results available. The value of <code>NextPageToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 60 seconds. Using an expired pagination token will return a <code>400</code> error: "<code>Specified token has exceeded its maximum lifetime</code>". </p> <p>The configured <code>maximumPageSize</code> determines how many results can be returned in a single call. </p>',
    }),
    maximumPageSize: PageSizeSchema.exactOptional().openapi({
      description:
        'The maximum number of results that are returned per call. Use <code>nextPageToken</code> to obtain further pages of results. ',
    }),
    reverseOrder: ReverseOrderSchema.exactOptional().openapi({
      description:
        'When set to <code>true</code>, returns the events in reverse order. By default the results are returned in ascending order of the <code>eventTimeStamp</code> of the events.',
    }),
  })
  .openapi({ required: ['domain', 'execution'], title: 'GetWorkflowExecutionHistoryInput' })
  .openapi('GetWorkflowExecutionHistoryInput')

const ActivityTypeInfoListSchema = z.array(ActivityTypeInfoSchema).openapi('ActivityTypeInfoList')

const ActivityTypeInfosSchema = z
  .object({
    typeInfos: ActivityTypeInfoListSchema.openapi({
      description: 'List of activity type information.',
    }),
    nextPageToken: PageTokenSchema.exactOptional().openapi({
      description:
        '<p>If a <code>NextPageToken</code> was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in <code>nextPageToken</code>. Keep all other arguments unchanged.</p> <p>The configured <code>maximumPageSize</code> determines how many results can be returned in a single call.</p>',
    }),
  })
  .openapi({
    required: ['typeInfos'],
    description: 'Contains a paginated list of activity type information structures.',
  })
  .openapi('ActivityTypeInfos')

const ListActivityTypesInputSchema = z
  .object({
    domain: DomainNameSchema.openapi({
      description: 'The name of the domain in which the activity types have been registered.',
    }),
    name: NameSchema.exactOptional().openapi({
      description: 'If specified, only lists the activity types that have this name.',
    }),
    registrationStatus: RegistrationStatusSchema.openapi({
      description: 'Specifies the registration status of the activity types to list.',
    }),
    nextPageToken: PageTokenSchema.exactOptional().openapi({
      description:
        '<p>If <code>NextPageToken</code> is returned there are more results available. The value of <code>NextPageToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 60 seconds. Using an expired pagination token will return a <code>400</code> error: "<code>Specified token has exceeded its maximum lifetime</code>". </p> <p>The configured <code>maximumPageSize</code> determines how many results can be returned in a single call. </p>',
    }),
    maximumPageSize: PageSizeSchema.exactOptional().openapi({
      description:
        'The maximum number of results that are returned per call. Use <code>nextPageToken</code> to obtain further pages of results. ',
    }),
    reverseOrder: ReverseOrderSchema.exactOptional().openapi({
      description:
        'When set to <code>true</code>, returns the results in reverse order. By default, the results are returned in ascending alphabetical order by <code>name</code> of the activity types.',
    }),
  })
  .openapi({ required: ['domain', 'registrationStatus'], title: 'ListActivityTypesInput' })
  .openapi('ListActivityTypesInput')

const WorkflowExecutionInfoListSchema = z
  .array(WorkflowExecutionInfoSchema)
  .openapi('WorkflowExecutionInfoList')

const WorkflowExecutionInfosSchema = z
  .object({
    executionInfos: WorkflowExecutionInfoListSchema.openapi({
      description: 'The list of workflow information structures.',
    }),
    nextPageToken: PageTokenSchema.exactOptional().openapi({
      description:
        '<p>If a <code>NextPageToken</code> was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in <code>nextPageToken</code>. Keep all other arguments unchanged.</p> <p>The configured <code>maximumPageSize</code> determines how many results can be returned in a single call.</p>',
    }),
  })
  .openapi({
    required: ['executionInfos'],
    description: 'Contains a paginated list of information about workflow executions.',
  })
  .openapi('WorkflowExecutionInfos')

const ListClosedWorkflowExecutionsInputSchema = z
  .object({
    domain: DomainNameSchema.openapi({
      description: 'The name of the domain that contains the workflow executions to list.',
    }),
    startTimeFilter: ExecutionTimeFilterSchema.exactOptional().openapi({
      description:
        '<p>If specified, the workflow executions are included in the returned results based on whether their start times are within the range specified by this filter. Also, if this parameter is specified, the returned results are ordered by their start times.</p> <note> <p> <code>startTimeFilter</code> and <code>closeTimeFilter</code> are mutually exclusive. You must specify one of these in a request but not both.</p> </note>',
    }),
    closeTimeFilter: ExecutionTimeFilterSchema.exactOptional().openapi({
      description:
        '<p>If specified, the workflow executions are included in the returned results based on whether their close times are within the range specified by this filter. Also, if this parameter is specified, the returned results are ordered by their close times.</p> <note> <p> <code>startTimeFilter</code> and <code>closeTimeFilter</code> are mutually exclusive. You must specify one of these in a request but not both.</p> </note>',
    }),
    executionFilter: WorkflowExecutionFilterSchema.exactOptional().openapi({
      description:
        '<p>If specified, only workflow executions matching the workflow ID specified in the filter are returned.</p> <note> <p> <code>closeStatusFilter</code>, <code>executionFilter</code>, <code>typeFilter</code> and <code>tagFilter</code> are mutually exclusive. You can specify at most one of these in a request.</p> </note>',
    }),
    closeStatusFilter: CloseStatusFilterSchema.exactOptional().openapi({
      description:
        '<p>If specified, only workflow executions that match this <i>close status</i> are listed. For example, if TERMINATED is specified, then only TERMINATED workflow executions are listed.</p> <note> <p> <code>closeStatusFilter</code>, <code>executionFilter</code>, <code>typeFilter</code> and <code>tagFilter</code> are mutually exclusive. You can specify at most one of these in a request.</p> </note>',
    }),
    typeFilter: WorkflowTypeFilterSchema.exactOptional().openapi({
      description:
        '<p>If specified, only executions of the type specified in the filter are returned.</p> <note> <p> <code>closeStatusFilter</code>, <code>executionFilter</code>, <code>typeFilter</code> and <code>tagFilter</code> are mutually exclusive. You can specify at most one of these in a request.</p> </note>',
    }),
    tagFilter: TagFilterSchema.exactOptional().openapi({
      description:
        '<p>If specified, only executions that have the matching tag are listed.</p> <note> <p> <code>closeStatusFilter</code>, <code>executionFilter</code>, <code>typeFilter</code> and <code>tagFilter</code> are mutually exclusive. You can specify at most one of these in a request.</p> </note>',
    }),
    nextPageToken: PageTokenSchema.exactOptional().openapi({
      description:
        '<p>If <code>NextPageToken</code> is returned there are more results available. The value of <code>NextPageToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 60 seconds. Using an expired pagination token will return a <code>400</code> error: "<code>Specified token has exceeded its maximum lifetime</code>". </p> <p>The configured <code>maximumPageSize</code> determines how many results can be returned in a single call. </p>',
    }),
    maximumPageSize: PageSizeSchema.exactOptional().openapi({
      description:
        'The maximum number of results that are returned per call. Use <code>nextPageToken</code> to obtain further pages of results. ',
    }),
    reverseOrder: ReverseOrderSchema.exactOptional().openapi({
      description:
        'When set to <code>true</code>, returns the results in reverse order. By default the results are returned in descending order of the start or the close time of the executions.',
    }),
  })
  .openapi({ required: ['domain'], title: 'ListClosedWorkflowExecutionsInput' })
  .openapi('ListClosedWorkflowExecutionsInput')

const DomainInfoListSchema = z.array(DomainInfoSchema).openapi('DomainInfoList')

const DomainInfosSchema = z
  .object({
    domainInfos: DomainInfoListSchema.openapi({ description: 'A list of DomainInfo structures.' }),
    nextPageToken: PageTokenSchema.exactOptional().openapi({
      description:
        '<p>If a <code>NextPageToken</code> was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in <code>nextPageToken</code>. Keep all other arguments unchanged.</p> <p>The configured <code>maximumPageSize</code> determines how many results can be returned in a single call.</p>',
    }),
  })
  .openapi({
    required: ['domainInfos'],
    description: 'Contains a paginated collection of DomainInfo structures.',
  })
  .openapi('DomainInfos')

const ListDomainsInputSchema = z
  .object({
    nextPageToken: PageTokenSchema.exactOptional().openapi({
      description:
        '<p>If <code>NextPageToken</code> is returned there are more results available. The value of <code>NextPageToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 60 seconds. Using an expired pagination token will return a <code>400</code> error: "<code>Specified token has exceeded its maximum lifetime</code>". </p> <p>The configured <code>maximumPageSize</code> determines how many results can be returned in a single call. </p>',
    }),
    registrationStatus: RegistrationStatusSchema.openapi({
      description: 'Specifies the registration status of the domains to list.',
    }),
    maximumPageSize: PageSizeSchema.exactOptional().openapi({
      description:
        'The maximum number of results that are returned per call. Use <code>nextPageToken</code> to obtain further pages of results. ',
    }),
    reverseOrder: ReverseOrderSchema.exactOptional().openapi({
      description:
        'When set to <code>true</code>, returns the results in reverse order. By default, the results are returned in ascending alphabetical order by <code>name</code> of the domains.',
    }),
  })
  .openapi({ required: ['registrationStatus'], title: 'ListDomainsInput' })
  .openapi('ListDomainsInput')

const ListOpenWorkflowExecutionsInputSchema = z
  .object({
    domain: DomainNameSchema.openapi({
      description: 'The name of the domain that contains the workflow executions to list.',
    }),
    startTimeFilter: ExecutionTimeFilterSchema.openapi({
      description:
        'Workflow executions are included in the returned results based on whether their start times are within the range specified by this filter.',
    }),
    typeFilter: WorkflowTypeFilterSchema.exactOptional().openapi({
      description:
        '<p>If specified, only executions of the type specified in the filter are returned.</p> <note> <p> <code>executionFilter</code>, <code>typeFilter</code> and <code>tagFilter</code> are mutually exclusive. You can specify at most one of these in a request.</p> </note>',
    }),
    tagFilter: TagFilterSchema.exactOptional().openapi({
      description:
        '<p>If specified, only executions that have the matching tag are listed.</p> <note> <p> <code>executionFilter</code>, <code>typeFilter</code> and <code>tagFilter</code> are mutually exclusive. You can specify at most one of these in a request.</p> </note>',
    }),
    nextPageToken: PageTokenSchema.exactOptional().openapi({
      description:
        '<p>If <code>NextPageToken</code> is returned there are more results available. The value of <code>NextPageToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 60 seconds. Using an expired pagination token will return a <code>400</code> error: "<code>Specified token has exceeded its maximum lifetime</code>". </p> <p>The configured <code>maximumPageSize</code> determines how many results can be returned in a single call. </p>',
    }),
    maximumPageSize: PageSizeSchema.exactOptional().openapi({
      description:
        'The maximum number of results that are returned per call. Use <code>nextPageToken</code> to obtain further pages of results. ',
    }),
    reverseOrder: ReverseOrderSchema.exactOptional().openapi({
      description:
        'When set to <code>true</code>, returns the results in reverse order. By default the results are returned in descending order of the start time of the executions.',
    }),
    executionFilter: WorkflowExecutionFilterSchema.exactOptional().openapi({
      description:
        '<p>If specified, only workflow executions matching the workflow ID specified in the filter are returned.</p> <note> <p> <code>executionFilter</code>, <code>typeFilter</code> and <code>tagFilter</code> are mutually exclusive. You can specify at most one of these in a request.</p> </note>',
    }),
  })
  .openapi({ required: ['domain', 'startTimeFilter'], title: 'ListOpenWorkflowExecutionsInput' })
  .openapi('ListOpenWorkflowExecutionsInput')

const ResourceTagKeySchema = z.string().min(1).max(128).openapi('ResourceTagKey')

const ResourceTagValueSchema = z.string().max(256).openapi('ResourceTagValue')

const ResourceTagSchema = z
  .object({
    key: ResourceTagKeySchema.openapi({ description: 'The key of a tag.' }),
    value: ResourceTagValueSchema.exactOptional().openapi({ description: 'The value of a tag.' }),
  })
  .openapi({
    required: ['key'],
    description:
      '<p>Tags are key-value pairs that can be associated with Amazon SWF state machines and activities.</p> <p>Tags may only contain unicode letters, digits, whitespace, or these symbols: <code>_ . : / = + - @</code>.</p>',
  })
  .openapi('ResourceTag')

const ResourceTagListSchema = z.array(ResourceTagSchema).openapi('ResourceTagList')

const ListTagsForResourceOutputSchema = z
  .object({
    tags: ResourceTagListSchema.exactOptional().openapi({
      description: 'An array of tags associated with the domain.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceOutput')

const ListTagsForResourceInputSchema = z
  .object({
    resourceArn: ArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) for the Amazon SWF domain.',
    }),
  })
  .openapi({ required: ['resourceArn'], title: 'ListTagsForResourceInput' })
  .openapi('ListTagsForResourceInput')

const LimitExceededFaultSchema = z.any().openapi('LimitExceededFault')

const WorkflowTypeInfoListSchema = z.array(WorkflowTypeInfoSchema).openapi('WorkflowTypeInfoList')

const WorkflowTypeInfosSchema = z
  .object({
    typeInfos: WorkflowTypeInfoListSchema.openapi({
      description: 'The list of workflow type information.',
    }),
    nextPageToken: PageTokenSchema.exactOptional().openapi({
      description:
        '<p>If a <code>NextPageToken</code> was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in <code>nextPageToken</code>. Keep all other arguments unchanged.</p> <p>The configured <code>maximumPageSize</code> determines how many results can be returned in a single call.</p>',
    }),
  })
  .openapi({
    required: ['typeInfos'],
    description: 'Contains a paginated list of information structures about workflow types.',
  })
  .openapi('WorkflowTypeInfos')

const ListWorkflowTypesInputSchema = z
  .object({
    domain: DomainNameSchema.openapi({
      description: 'The name of the domain in which the workflow types have been registered.',
    }),
    name: NameSchema.exactOptional().openapi({
      description: 'If specified, lists the workflow type with this name.',
    }),
    registrationStatus: RegistrationStatusSchema.openapi({
      description: 'Specifies the registration status of the workflow types to list.',
    }),
    nextPageToken: PageTokenSchema.exactOptional().openapi({
      description:
        '<p>If <code>NextPageToken</code> is returned there are more results available. The value of <code>NextPageToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 60 seconds. Using an expired pagination token will return a <code>400</code> error: "<code>Specified token has exceeded its maximum lifetime</code>". </p> <p>The configured <code>maximumPageSize</code> determines how many results can be returned in a single call. </p>',
    }),
    maximumPageSize: PageSizeSchema.exactOptional().openapi({
      description:
        'The maximum number of results that are returned per call. Use <code>nextPageToken</code> to obtain further pages of results. ',
    }),
    reverseOrder: ReverseOrderSchema.exactOptional().openapi({
      description:
        'When set to <code>true</code>, returns the results in reverse order. By default the results are returned in ascending alphabetical order of the <code>name</code> of the workflow types.',
    }),
  })
  .openapi({ required: ['domain', 'registrationStatus'], title: 'ListWorkflowTypesInput' })
  .openapi('ListWorkflowTypesInput')

const TaskTokenSchema = z.string().min(1).max(1024).openapi('TaskToken')

const ActivityTaskSchema = z
  .object({
    taskToken: TaskTokenSchema.openapi({
      description:
        'The opaque string used as a handle on the task. This token is used by workers to communicate progress and response information back to the system about the task.',
    }),
    activityId: ActivityIdSchema.openapi({ description: 'The unique ID of the task.' }),
    startedEventId: EventIdSchema.openapi({
      description: 'The ID of the <code>ActivityTaskStarted</code> event recorded in the history.',
    }),
    workflowExecution: WorkflowExecutionSchema.openapi({
      description: 'The workflow execution that started this activity task.',
    }),
    activityType: ActivityTypeSchema.openapi({ description: 'The type of this activity task.' }),
    input: DataSchema.exactOptional().openapi({
      description:
        'The inputs provided when the activity task was scheduled. The form of the input is user defined and should be meaningful to the activity implementation.',
    }),
  })
  .openapi({
    required: ['taskToken', 'activityId', 'startedEventId', 'workflowExecution', 'activityType'],
    description: 'Unit of work sent to an activity worker.',
  })
  .openapi('ActivityTask')

const PollForActivityTaskInputSchema = z
  .object({
    domain: DomainNameSchema.openapi({
      description: 'The name of the domain that contains the task lists being polled.',
    }),
    taskList: TaskListSchema.openapi({
      description:
        '<p>Specifies the task list to poll for activity tasks.</p> <p>The specified string must not start or end with whitespace. It must not contain a <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any control characters (<code>\\u0000-\\u001f</code> | <code>\\u007f-\\u009f</code>). Also, it must not <i>be</i> the literal string <code>arn</code>.</p>',
    }),
    identity: IdentitySchema.exactOptional().openapi({
      description:
        'Identity of the worker making the request, recorded in the <code>ActivityTaskStarted</code> event in the workflow history. This enables diagnostic tracing when problems arise. The form of this identity is user defined.',
    }),
  })
  .openapi({ required: ['domain', 'taskList'], title: 'PollForActivityTaskInput' })
  .openapi('PollForActivityTaskInput')

const DecisionTaskSchema = z
  .object({
    taskToken: TaskTokenSchema.openapi({
      description:
        'The opaque string used as a handle on the task. This token is used by workers to communicate progress and response information back to the system about the task.',
    }),
    startedEventId: EventIdSchema.openapi({
      description: 'The ID of the <code>DecisionTaskStarted</code> event recorded in the history.',
    }),
    workflowExecution: WorkflowExecutionSchema.openapi({
      description: 'The workflow execution for which this decision task was created.',
    }),
    workflowType: WorkflowTypeSchema.openapi({
      description: 'The type of the workflow execution for which this decision task was created.',
    }),
    events: HistoryEventListSchema.openapi({
      description:
        'A paginated list of history events of the workflow execution. The decider uses this during the processing of the decision task.',
    }),
    nextPageToken: PageTokenSchema.exactOptional().openapi({
      description:
        '<p>If a <code>NextPageToken</code> was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in <code>nextPageToken</code>. Keep all other arguments unchanged.</p> <p>The configured <code>maximumPageSize</code> determines how many results can be returned in a single call.</p>',
    }),
    previousStartedEventId: EventIdSchema.exactOptional().openapi({
      description:
        'The ID of the DecisionTaskStarted event of the previous decision task of this workflow execution that was processed by the decider. This can be used to determine the events in the history new since the last decision task received by the decider.',
    }),
  })
  .openapi({
    required: ['taskToken', 'startedEventId', 'workflowExecution', 'workflowType', 'events'],
    description:
      'A structure that represents a decision task. Decision tasks are sent to deciders in order for them to make decisions.',
  })
  .openapi('DecisionTask')

const PollForDecisionTaskInputSchema = z
  .object({
    domain: DomainNameSchema.openapi({
      description: 'The name of the domain containing the task lists to poll.',
    }),
    taskList: TaskListSchema.openapi({
      description:
        '<p>Specifies the task list to poll for decision tasks.</p> <p>The specified string must not start or end with whitespace. It must not contain a <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any control characters (<code>\\u0000-\\u001f</code> | <code>\\u007f-\\u009f</code>). Also, it must not <i>be</i> the literal string <code>arn</code>.</p>',
    }),
    identity: IdentitySchema.exactOptional().openapi({
      description:
        'Identity of the decider making the request, which is recorded in the DecisionTaskStarted event in the workflow history. This enables diagnostic tracing when problems arise. The form of this identity is user defined.',
    }),
    nextPageToken: PageTokenSchema.exactOptional().openapi({
      description:
        '<p>If <code>NextPageToken</code> is returned there are more results available. The value of <code>NextPageToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 60 seconds. Using an expired pagination token will return a <code>400</code> error: "<code>Specified token has exceeded its maximum lifetime</code>". </p> <p>The configured <code>maximumPageSize</code> determines how many results can be returned in a single call. </p> <note> <p>The <code>nextPageToken</code> returned by this action cannot be used with <a>GetWorkflowExecutionHistory</a> to get the next page. You must call <a>PollForDecisionTask</a> again (with the <code>nextPageToken</code>) to retrieve the next page of history records. Calling <a>PollForDecisionTask</a> with a <code>nextPageToken</code> doesn\'t return a new decision task.</p> </note>',
    }),
    maximumPageSize: PageSizeSchema.exactOptional().openapi({
      description:
        '<p>The maximum number of results that are returned per call. Use <code>nextPageToken</code> to obtain further pages of results. </p> <p>This is an upper limit only; the actual number of results returned per call may be fewer than the specified maximum.</p>',
    }),
    reverseOrder: ReverseOrderSchema.exactOptional().openapi({
      description:
        'When set to <code>true</code>, returns the events in reverse order. By default the results are returned in ascending order of the <code>eventTimestamp</code> of the events.',
    }),
  })
  .openapi({ required: ['domain', 'taskList'], title: 'PollForDecisionTaskInput' })
  .openapi('PollForDecisionTaskInput')

const ActivityTaskStatusSchema = z
  .object({
    cancelRequested: CanceledSchema.openapi({
      description: 'Set to <code>true</code> if cancellation of the task is requested.',
    }),
  })
  .openapi({
    required: ['cancelRequested'],
    description: 'Status information about an activity task.',
  })
  .openapi('ActivityTaskStatus')

const RecordActivityTaskHeartbeatInputSchema = z
  .object({
    taskToken: TaskTokenSchema.openapi({
      description:
        '<p>The <code>taskToken</code> of the <a>ActivityTask</a>.</p> <important> <p> <code>taskToken</code> is generated by the service and should be treated as an opaque value. If the task is passed to another process, its <code>taskToken</code> must also be passed. This enables it to provide its progress and respond with results. </p> </important>',
    }),
    details: LimitedDataSchema.exactOptional().openapi({
      description: 'If specified, contains details about the progress of the task.',
    }),
  })
  .openapi({ required: ['taskToken'], title: 'RecordActivityTaskHeartbeatInput' })
  .openapi('RecordActivityTaskHeartbeatInput')

const RegisterActivityTypeInputSchema = z
  .object({
    domain: DomainNameSchema.openapi({
      description: 'The name of the domain in which this activity is to be registered.',
    }),
    name: NameSchema.openapi({
      description:
        '<p>The name of the activity type within the domain.</p> <p>The specified string must not start or end with whitespace. It must not contain a <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any control characters (<code>\\u0000-\\u001f</code> | <code>\\u007f-\\u009f</code>). Also, it must not <i>be</i> the literal string <code>arn</code>.</p>',
    }),
    version: VersionSchema.openapi({
      description:
        '<p>The version of the activity type.</p> <note> <p>The activity type consists of the name and version, the combination of which must be unique within the domain.</p> </note> <p>The specified string must not start or end with whitespace. It must not contain a <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any control characters (<code>\\u0000-\\u001f</code> | <code>\\u007f-\\u009f</code>). Also, it must not <i>be</i> the literal string <code>arn</code>.</p>',
    }),
    description: DescriptionSchema.exactOptional().openapi({
      description: 'A textual description of the activity type.',
    }),
    defaultTaskStartToCloseTimeout: DurationInSecondsOptionalSchema.exactOptional().openapi({
      description:
        '<p>If set, specifies the default maximum duration that a worker can take to process tasks of this activity type. This default can be overridden when scheduling an activity task using the <code>ScheduleActivityTask</code> <a>Decision</a>.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>',
    }),
    defaultTaskHeartbeatTimeout: DurationInSecondsOptionalSchema.exactOptional().openapi({
      description:
        '<p>If set, specifies the default maximum time before which a worker processing a task of this type must report progress by calling <a>RecordActivityTaskHeartbeat</a>. If the timeout is exceeded, the activity task is automatically timed out. This default can be overridden when scheduling an activity task using the <code>ScheduleActivityTask</code> <a>Decision</a>. If the activity worker subsequently attempts to record a heartbeat or returns a result, the activity worker receives an <code>UnknownResource</code> fault. In this case, Amazon SWF no longer considers the activity task to be valid; the activity worker should clean up the activity task.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>',
    }),
    defaultTaskList: TaskListSchema.exactOptional().openapi({
      description:
        "If set, specifies the default task list to use for scheduling tasks of this activity type. This default task list is used if a task list isn't provided when a task is scheduled through the <code>ScheduleActivityTask</code> <a>Decision</a>.",
    }),
    defaultTaskPriority: TaskPrioritySchema.exactOptional().openapi({
      description:
        '<p>The default task priority to assign to the activity type. If not assigned, then <code>0</code> is used. Valid values are integers that range from Java\'s <code>Integer.MIN_VALUE</code> (-2147483648) to <code>Integer.MAX_VALUE</code> (2147483647). Higher numbers indicate higher priority.</p> <p>For more information about setting task priority, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html">Setting Task Priority</a> in the <i>in the <i>Amazon SWF Developer Guide</i>.</i>.</p>',
    }),
    defaultTaskScheduleToStartTimeout: DurationInSecondsOptionalSchema.exactOptional().openapi({
      description:
        '<p>If set, specifies the default maximum duration that a task of this activity type can wait before being assigned to a worker. This default can be overridden when scheduling an activity task using the <code>ScheduleActivityTask</code> <a>Decision</a>.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>',
    }),
    defaultTaskScheduleToCloseTimeout: DurationInSecondsOptionalSchema.exactOptional().openapi({
      description:
        '<p>If set, specifies the default maximum duration for a task of this activity type. This default can be overridden when scheduling an activity task using the <code>ScheduleActivityTask</code> <a>Decision</a>.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>',
    }),
  })
  .openapi({ required: ['domain', 'name', 'version'], title: 'RegisterActivityTypeInput' })
  .openapi('RegisterActivityTypeInput')

const TypeAlreadyExistsFaultSchema = z.any().openapi('TypeAlreadyExistsFault')

const RegisterDomainInputSchema = z
  .object({
    name: DomainNameSchema.openapi({
      description:
        '<p>Name of the domain to register. The name must be unique in the region that the domain is registered in.</p> <p>The specified string must not start or end with whitespace. It must not contain a <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any control characters (<code>\\u0000-\\u001f</code> | <code>\\u007f-\\u009f</code>). Also, it must not <i>be</i> the literal string <code>arn</code>.</p>',
    }),
    description: DescriptionSchema.exactOptional().openapi({
      description: 'A text description of the domain.',
    }),
    workflowExecutionRetentionPeriodInDays: DurationInDaysSchema.openapi({
      description:
        '<p>The duration (in days) that records and histories of workflow executions on the domain should be kept by the service. After the retention period, the workflow execution isn\'t available in the results of visibility calls.</p> <p>If you pass the value <code>NONE</code> or <code>0</code> (zero), then the workflow execution history isn\'t retained. As soon as the workflow execution completes, the execution record and its history are deleted.</p> <p>The maximum workflow execution retention period is 90 days. For more information about Amazon SWF service limits, see: <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dg-limits.html">Amazon SWF Service Limits</a> in the <i>Amazon SWF Developer Guide</i>.</p>',
    }),
    tags: ResourceTagListSchema.exactOptional().openapi({
      description:
        '<p>Tags to be added when registering a domain.</p> <p>Tags may only contain unicode letters, digits, whitespace, or these symbols: <code>_ . : / = + - @</code>.</p>',
    }),
  })
  .openapi({
    required: ['name', 'workflowExecutionRetentionPeriodInDays'],
    title: 'RegisterDomainInput',
  })
  .openapi('RegisterDomainInput')

const DomainAlreadyExistsFaultSchema = z.any().openapi('DomainAlreadyExistsFault')

const TooManyTagsFaultSchema = z.any().openapi('TooManyTagsFault')

const RegisterWorkflowTypeInputSchema = z
  .object({
    domain: DomainNameSchema.openapi({
      description: 'The name of the domain in which to register the workflow type.',
    }),
    name: NameSchema.openapi({
      description:
        '<p>The name of the workflow type.</p> <p>The specified string must not start or end with whitespace. It must not contain a <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any control characters (<code>\\u0000-\\u001f</code> | <code>\\u007f-\\u009f</code>). Also, it must not <i>be</i> the literal string <code>arn</code>.</p>',
    }),
    version: VersionSchema.openapi({
      description:
        '<p>The version of the workflow type.</p> <note> <p>The workflow type consists of the name and version, the combination of which must be unique within the domain. To get a list of all currently registered workflow types, use the <a>ListWorkflowTypes</a> action.</p> </note> <p>The specified string must not start or end with whitespace. It must not contain a <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any control characters (<code>\\u0000-\\u001f</code> | <code>\\u007f-\\u009f</code>). Also, it must not <i>be</i> the literal string <code>arn</code>.</p>',
    }),
    description: DescriptionSchema.exactOptional().openapi({
      description: 'Textual description of the workflow type.',
    }),
    defaultTaskStartToCloseTimeout: DurationInSecondsOptionalSchema.exactOptional().openapi({
      description:
        '<p>If set, specifies the default maximum duration of decision tasks for this workflow type. This default can be overridden when starting a workflow execution using the <a>StartWorkflowExecution</a> action or the <code>StartChildWorkflowExecution</code> <a>Decision</a>.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>',
    }),
    defaultExecutionStartToCloseTimeout: DurationInSecondsOptionalSchema.exactOptional().openapi({
      description:
        '<p>If set, specifies the default maximum duration for executions of this workflow type. You can override this default when starting an execution through the <a>StartWorkflowExecution</a> Action or <code>StartChildWorkflowExecution</code> <a>Decision</a>.</p> <p>The duration is specified in seconds; an integer greater than or equal to 0. Unlike some of the other timeout parameters in Amazon SWF, you cannot specify a value of "NONE" for <code>defaultExecutionStartToCloseTimeout</code>; there is a one-year max limit on the time that a workflow execution can run. Exceeding this limit always causes the workflow execution to time out.</p>',
    }),
    defaultTaskList: TaskListSchema.exactOptional().openapi({
      description:
        "If set, specifies the default task list to use for scheduling decision tasks for executions of this workflow type. This default is used only if a task list isn't provided when starting the execution through the <a>StartWorkflowExecution</a> Action or <code>StartChildWorkflowExecution</code> <a>Decision</a>.",
    }),
    defaultTaskPriority: TaskPrioritySchema.exactOptional().openapi({
      description:
        '<p>The default task priority to assign to the workflow type. If not assigned, then <code>0</code> is used. Valid values are integers that range from Java\'s <code>Integer.MIN_VALUE</code> (-2147483648) to <code>Integer.MAX_VALUE</code> (2147483647). Higher numbers indicate higher priority.</p> <p>For more information about setting task priority, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html">Setting Task Priority</a> in the <i>Amazon SWF Developer Guide</i>.</p>',
    }),
    defaultChildPolicy: ChildPolicySchema.exactOptional().openapi({
      description:
        '<p>If set, specifies the default policy to use for the child workflow executions when a workflow execution of this type is terminated, by calling the <a>TerminateWorkflowExecution</a> action explicitly or due to an expired timeout. This default can be overridden when starting a workflow execution using the <a>StartWorkflowExecution</a> action or the <code>StartChildWorkflowExecution</code> <a>Decision</a>.</p> <p>The supported child policies are:</p> <ul> <li> <p> <code>TERMINATE</code> – The child executions are terminated.</p> </li> <li> <p> <code>REQUEST_CANCEL</code> – A request to cancel is attempted for each child execution by recording a <code>WorkflowExecutionCancelRequested</code> event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event.</p> </li> <li> <p> <code>ABANDON</code> – No action is taken. The child executions continue to run.</p> </li> </ul>',
    }),
    defaultLambdaRole: ArnSchema.exactOptional().openapi({
      description:
        '<p>The default IAM role attached to this workflow type.</p> <note> <p>Executions of this workflow type need IAM roles to invoke Lambda functions. If you don\'t specify an IAM role when you start this workflow type, the default Lambda role is attached to the execution. For more information, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html">https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html</a> in the <i>Amazon SWF Developer Guide</i>.</p> </note>',
    }),
  })
  .openapi({ required: ['domain', 'name', 'version'], title: 'RegisterWorkflowTypeInput' })
  .openapi('RegisterWorkflowTypeInput')

const RequestCancelWorkflowExecutionInputSchema = z
  .object({
    domain: DomainNameSchema.openapi({
      description: 'The name of the domain containing the workflow execution to cancel.',
    }),
    workflowId: WorkflowIdSchema.openapi({
      description: 'The workflowId of the workflow execution to cancel.',
    }),
    runId: WorkflowRunIdOptionalSchema.exactOptional().openapi({
      description: 'The runId of the workflow execution to cancel.',
    }),
  })
  .openapi({ required: ['domain', 'workflowId'], title: 'RequestCancelWorkflowExecutionInput' })
  .openapi('RequestCancelWorkflowExecutionInput')

const RespondActivityTaskCanceledInputSchema = z
  .object({
    taskToken: TaskTokenSchema.openapi({
      description:
        '<p>The <code>taskToken</code> of the <a>ActivityTask</a>.</p> <important> <p> <code>taskToken</code> is generated by the service and should be treated as an opaque value. If the task is passed to another process, its <code>taskToken</code> must also be passed. This enables it to provide its progress and respond with results.</p> </important>',
    }),
    details: DataSchema.exactOptional().openapi({
      description: ' Information about the cancellation.',
    }),
  })
  .openapi({ required: ['taskToken'], title: 'RespondActivityTaskCanceledInput' })
  .openapi('RespondActivityTaskCanceledInput')

const RespondActivityTaskCompletedInputSchema = z
  .object({
    taskToken: TaskTokenSchema.openapi({
      description:
        '<p>The <code>taskToken</code> of the <a>ActivityTask</a>.</p> <important> <p> <code>taskToken</code> is generated by the service and should be treated as an opaque value. If the task is passed to another process, its <code>taskToken</code> must also be passed. This enables it to provide its progress and respond with results.</p> </important>',
    }),
    result: DataSchema.exactOptional().openapi({
      description:
        'The result of the activity task. It is a free form string that is implementation specific.',
    }),
  })
  .openapi({ required: ['taskToken'], title: 'RespondActivityTaskCompletedInput' })
  .openapi('RespondActivityTaskCompletedInput')

const RespondActivityTaskFailedInputSchema = z
  .object({
    taskToken: TaskTokenSchema.openapi({
      description:
        '<p>The <code>taskToken</code> of the <a>ActivityTask</a>.</p> <important> <p> <code>taskToken</code> is generated by the service and should be treated as an opaque value. If the task is passed to another process, its <code>taskToken</code> must also be passed. This enables it to provide its progress and respond with results.</p> </important>',
    }),
    reason: FailureReasonSchema.exactOptional().openapi({
      description: 'Description of the error that may assist in diagnostics.',
    }),
    details: DataSchema.exactOptional().openapi({
      description: ' Detailed information about the failure.',
    }),
  })
  .openapi({ required: ['taskToken'], title: 'RespondActivityTaskFailedInput' })
  .openapi('RespondActivityTaskFailedInput')

const DecisionTypeSchema = z
  .enum([
    'ScheduleActivityTask',
    'RequestCancelActivityTask',
    'CompleteWorkflowExecution',
    'FailWorkflowExecution',
    'CancelWorkflowExecution',
    'ContinueAsNewWorkflowExecution',
    'RecordMarker',
    'StartTimer',
    'CancelTimer',
    'SignalExternalWorkflowExecution',
    'RequestCancelExternalWorkflowExecution',
    'StartChildWorkflowExecution',
    'ScheduleLambdaFunction',
  ])
  .openapi('DecisionType')

const ScheduleActivityTaskDecisionAttributesSchema = z
  .object({
    activityType: ActivityTypeSchema.openapi({
      description: ' The type of the activity task to schedule.',
    }),
    activityId: ActivityIdSchema.openapi({
      description:
        '<p> The <code>activityId</code> of the activity task.</p> <p>The specified string must not start or end with whitespace. It must not contain a <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any control characters (<code>\\u0000-\\u001f</code> | <code>\\u007f-\\u009f</code>). Also, it must not contain the literal string <code>arn</code>.</p>',
    }),
    control: DataSchema.exactOptional().openapi({
      description:
        "Data attached to the event that can be used by the decider in subsequent workflow tasks. This data isn't sent to the activity.",
    }),
    input: DataSchema.exactOptional().openapi({
      description: 'The input provided to the activity task.',
    }),
    scheduleToCloseTimeout: DurationInSecondsOptionalSchema.exactOptional().openapi({
      description:
        '<p>The maximum duration for this activity task.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p> <note> <p>A schedule-to-close timeout for this activity task must be specified either as a default for the activity type or through this field. If neither this field is set nor a default schedule-to-close timeout was specified at registration time then a fault is returned.</p> </note>',
    }),
    taskList: TaskListSchema.exactOptional().openapi({
      description:
        '<p>If set, specifies the name of the task list in which to schedule the activity task. If not specified, the <code>defaultTaskList</code> registered with the activity type is used.</p> <note> <p>A task list for this activity task must be specified either as a default for the activity type or through this field. If neither this field is set nor a default task list was specified at registration time then a fault is returned.</p> </note> <p>The specified string must not start or end with whitespace. It must not contain a <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any control characters (<code>\\u0000-\\u001f</code> | <code>\\u007f-\\u009f</code>). Also, it must not contain the literal string <code>arn</code>.</p>',
    }),
    taskPriority: TaskPrioritySchema.exactOptional().openapi({
      description:
        '<p> If set, specifies the priority with which the activity task is to be assigned to a worker. This overrides the defaultTaskPriority specified when registering the activity type using <a>RegisterActivityType</a>. Valid values are integers that range from Java\'s <code>Integer.MIN_VALUE</code> (-2147483648) to <code>Integer.MAX_VALUE</code> (2147483647). Higher numbers indicate higher priority.</p> <p>For more information about setting task priority, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html">Setting Task Priority</a> in the <i>Amazon SWF Developer Guide</i>.</p>',
    }),
    scheduleToStartTimeout: DurationInSecondsOptionalSchema.exactOptional().openapi({
      description:
        '<p> If set, specifies the maximum duration the activity task can wait to be assigned to a worker. This overrides the default schedule-to-start timeout specified when registering the activity type using <a>RegisterActivityType</a>.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p> <note> <p>A schedule-to-start timeout for this activity task must be specified either as a default for the activity type or through this field. If neither this field is set nor a default schedule-to-start timeout was specified at registration time then a fault is returned.</p> </note>',
    }),
    startToCloseTimeout: DurationInSecondsOptionalSchema.exactOptional().openapi({
      description:
        '<p>If set, specifies the maximum duration a worker may take to process this activity task. This overrides the default start-to-close timeout specified when registering the activity type using <a>RegisterActivityType</a>.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p> <note> <p>A start-to-close timeout for this activity task must be specified either as a default for the activity type or through this field. If neither this field is set nor a default start-to-close timeout was specified at registration time then a fault is returned.</p> </note>',
    }),
    heartbeatTimeout: DurationInSecondsOptionalSchema.exactOptional().openapi({
      description:
        '<p>If set, specifies the maximum time before which a worker processing a task of this type must report progress by calling <a>RecordActivityTaskHeartbeat</a>. If the timeout is exceeded, the activity task is automatically timed out. If the worker subsequently attempts to record a heartbeat or returns a result, it is ignored. This overrides the default heartbeat timeout specified when registering the activity type using <a>RegisterActivityType</a>.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>',
    }),
  })
  .openapi({
    required: ['activityType', 'activityId'],
    description:
      "<p>Provides the details of the <code>ScheduleActivityTask</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>activityType.name</code> – String constraint. The key is <code>swf:activityType.name</code>.</p> </li> <li> <p> <code>activityType.version</code> – String constraint. The key is <code>swf:activityType.version</code>.</p> </li> <li> <p> <code>taskList</code> – String constraint. The key is <code>swf:taskList.name</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  })
  .openapi('ScheduleActivityTaskDecisionAttributes')

const RequestCancelActivityTaskDecisionAttributesSchema = z
  .object({
    activityId: ActivityIdSchema.openapi({
      description: 'The <code>activityId</code> of the activity task to be canceled.',
    }),
  })
  .openapi({
    required: ['activityId'],
    description:
      "<p>Provides the details of the <code>RequestCancelActivityTask</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  })
  .openapi('RequestCancelActivityTaskDecisionAttributes')

const CompleteWorkflowExecutionDecisionAttributesSchema = z
  .object({
    result: DataSchema.exactOptional().openapi({
      description:
        'The result of the workflow execution. The form of the result is implementation defined.',
    }),
  })
  .openapi({
    description:
      "<p>Provides the details of the <code>CompleteWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
    required: [],
  })
  .openapi('CompleteWorkflowExecutionDecisionAttributes')

const FailWorkflowExecutionDecisionAttributesSchema = z
  .object({
    reason: FailureReasonSchema.exactOptional().openapi({
      description: 'A descriptive reason for the failure that may help in diagnostics.',
    }),
    details: DataSchema.exactOptional().openapi({ description: ' Details of the failure.' }),
  })
  .openapi({
    description:
      "<p>Provides the details of the <code>FailWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
    required: [],
  })
  .openapi('FailWorkflowExecutionDecisionAttributes')

const CancelWorkflowExecutionDecisionAttributesSchema = z
  .object({
    details: DataSchema.exactOptional().openapi({ description: ' Details of the cancellation.' }),
  })
  .openapi({
    description:
      "<p>Provides the details of the <code>CancelWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
    required: [],
  })
  .openapi('CancelWorkflowExecutionDecisionAttributes')

const ContinueAsNewWorkflowExecutionDecisionAttributesSchema = z
  .object({
    input: DataSchema.exactOptional().openapi({
      description: 'The input provided to the new workflow execution.',
    }),
    executionStartToCloseTimeout: DurationInSecondsOptionalSchema.exactOptional().openapi({
      description:
        '<p>If set, specifies the total duration for this workflow execution. This overrides the <code>defaultExecutionStartToCloseTimeout</code> specified when registering the workflow type.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p> <note> <p>An execution start-to-close timeout for this workflow execution must be specified either as a default for the workflow type or through this field. If neither this field is set nor a default execution start-to-close timeout was specified at registration time then a fault is returned.</p> </note>',
    }),
    taskList: TaskListSchema.exactOptional().openapi({
      description:
        'The task list to use for the decisions of the new (continued) workflow execution.',
    }),
    taskPriority: TaskPrioritySchema.exactOptional().openapi({
      description:
        '<p> The task priority that, if set, specifies the priority for the decision tasks for this workflow execution. This overrides the defaultTaskPriority specified when registering the workflow type. Valid values are integers that range from Java\'s <code>Integer.MIN_VALUE</code> (-2147483648) to <code>Integer.MAX_VALUE</code> (2147483647). Higher numbers indicate higher priority.</p> <p>For more information about setting task priority, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html">Setting Task Priority</a> in the <i>Amazon SWF Developer Guide</i>.</p>',
    }),
    taskStartToCloseTimeout: DurationInSecondsOptionalSchema.exactOptional().openapi({
      description:
        '<p>Specifies the maximum duration of decision tasks for the new workflow execution. This parameter overrides the <code>defaultTaskStartToCloseTimout</code> specified when registering the workflow type using <a>RegisterWorkflowType</a>.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p> <note> <p>A task start-to-close timeout for the new workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default task start-to-close timeout was specified at registration time then a fault is returned.</p> </note>',
    }),
    childPolicy: ChildPolicySchema.exactOptional().openapi({
      description:
        '<p>If set, specifies the policy to use for the child workflow executions of the new execution if it is terminated by calling the <a>TerminateWorkflowExecution</a> action explicitly or due to an expired timeout. This policy overrides the default child policy specified when registering the workflow type using <a>RegisterWorkflowType</a>.</p> <p>The supported child policies are:</p> <ul> <li> <p> <code>TERMINATE</code> – The child executions are terminated.</p> </li> <li> <p> <code>REQUEST_CANCEL</code> – A request to cancel is attempted for each child execution by recording a <code>WorkflowExecutionCancelRequested</code> event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event.</p> </li> <li> <p> <code>ABANDON</code> – No action is taken. The child executions continue to run.</p> </li> </ul> <note> <p>A child policy for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default child policy was specified at registration time then a fault is returned.</p> </note>',
    }),
    tagList: TagListSchema.exactOptional().openapi({
      description:
        'The list of tags to associate with the new workflow execution. A maximum of 5 tags can be specified. You can list workflow executions with a specific tag by calling <a>ListOpenWorkflowExecutions</a> or <a>ListClosedWorkflowExecutions</a> and specifying a <a>TagFilter</a>.',
    }),
    workflowTypeVersion: VersionSchema.exactOptional().openapi({
      description: 'The version of the workflow to start.',
    }),
    lambdaRole: ArnSchema.exactOptional().openapi({
      description: 'The IAM role to attach to the new (continued) execution.',
    }),
  })
  .openapi({
    description:
      "<p>Provides the details of the <code>ContinueAsNewWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tag</code> – A tag used to identify the workflow execution</p> </li> <li> <p> <code>taskList</code> – String constraint. The key is <code>swf:taskList.name</code>.</p> </li> <li> <p> <code>workflowType.version</code> – String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
    required: [],
  })
  .openapi('ContinueAsNewWorkflowExecutionDecisionAttributes')

const RecordMarkerDecisionAttributesSchema = z
  .object({
    markerName: MarkerNameSchema.openapi({ description: ' The name of the marker.' }),
    details: DataSchema.exactOptional().openapi({ description: ' The details of the marker.' }),
  })
  .openapi({
    required: ['markerName'],
    description:
      "<p>Provides the details of the <code>RecordMarker</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  })
  .openapi('RecordMarkerDecisionAttributes')

const StartTimerDecisionAttributesSchema = z
  .object({
    timerId: TimerIdSchema.openapi({
      description:
        '<p> The unique ID of the timer.</p> <p>The specified string must not start or end with whitespace. It must not contain a <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any control characters (<code>\\u0000-\\u001f</code> | <code>\\u007f-\\u009f</code>). Also, it must not contain the literal string <code>arn</code>.</p>',
    }),
    control: DataSchema.exactOptional().openapi({
      description:
        'The data attached to the event that can be used by the decider in subsequent workflow tasks.',
    }),
    startToFireTimeout: DurationInSecondsSchema.openapi({
      description:
        '<p> The duration to wait before firing the timer.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>.</p>',
    }),
  })
  .openapi({
    required: ['timerId', 'startToFireTimeout'],
    description:
      "<p>Provides the details of the <code>StartTimer</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  })
  .openapi('StartTimerDecisionAttributes')

const CancelTimerDecisionAttributesSchema = z
  .object({
    timerId: TimerIdSchema.openapi({ description: ' The unique ID of the timer to cancel.' }),
  })
  .openapi({
    required: ['timerId'],
    description:
      "<p>Provides the details of the <code>CancelTimer</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  })
  .openapi('CancelTimerDecisionAttributes')

const SignalExternalWorkflowExecutionDecisionAttributesSchema = z
  .object({
    workflowId: WorkflowIdSchema.openapi({
      description: ' The <code>workflowId</code> of the workflow execution to be signaled.',
    }),
    runId: WorkflowRunIdOptionalSchema.exactOptional().openapi({
      description: 'The <code>runId</code> of the workflow execution to be signaled.',
    }),
    signalName: SignalNameSchema.openapi({
      description:
        ' The name of the signal.The target workflow execution uses the signal name and input to process the signal.',
    }),
    input: DataSchema.exactOptional().openapi({
      description:
        ' The input data to be provided with the signal. The target workflow execution uses the signal name and input data to process the signal.',
    }),
    control: DataSchema.exactOptional().openapi({
      description:
        'The data attached to the event that can be used by the decider in subsequent decision tasks.',
    }),
  })
  .openapi({
    required: ['workflowId', 'signalName'],
    description:
      "<p>Provides the details of the <code>SignalExternalWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  })
  .openapi('SignalExternalWorkflowExecutionDecisionAttributes')

const RequestCancelExternalWorkflowExecutionDecisionAttributesSchema = z
  .object({
    workflowId: WorkflowIdSchema.openapi({
      description: ' The <code>workflowId</code> of the external workflow execution to cancel.',
    }),
    runId: WorkflowRunIdOptionalSchema.exactOptional().openapi({
      description: 'The <code>runId</code> of the external workflow execution to cancel.',
    }),
    control: DataSchema.exactOptional().openapi({
      description:
        'The data attached to the event that can be used by the decider in subsequent workflow tasks.',
    }),
  })
  .openapi({
    required: ['workflowId'],
    description:
      "<p>Provides the details of the <code>RequestCancelExternalWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  })
  .openapi('RequestCancelExternalWorkflowExecutionDecisionAttributes')

const StartChildWorkflowExecutionDecisionAttributesSchema = z
  .object({
    workflowType: WorkflowTypeSchema.openapi({
      description: ' The type of the workflow execution to be started.',
    }),
    workflowId: WorkflowIdSchema.openapi({
      description:
        '<p> The <code>workflowId</code> of the workflow execution.</p> <p>The specified string must not start or end with whitespace. It must not contain a <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any control characters (<code>\\u0000-\\u001f</code> | <code>\\u007f-\\u009f</code>). Also, it must not contain the literal string <code>arn</code>.</p>',
    }),
    control: DataSchema.exactOptional().openapi({
      description:
        "The data attached to the event that can be used by the decider in subsequent workflow tasks. This data isn't sent to the child workflow execution.",
    }),
    input: DataSchema.exactOptional().openapi({
      description: 'The input to be provided to the workflow execution.',
    }),
    executionStartToCloseTimeout: DurationInSecondsOptionalSchema.exactOptional().openapi({
      description:
        '<p>The total duration for this workflow execution. This overrides the defaultExecutionStartToCloseTimeout specified when registering the workflow type.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p> <note> <p>An execution start-to-close timeout for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default execution start-to-close timeout was specified at registration time then a fault is returned.</p> </note>',
    }),
    taskList: TaskListSchema.exactOptional().openapi({
      description:
        '<p>The name of the task list to be used for decision tasks of the child workflow execution.</p> <note> <p>A task list for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default task list was specified at registration time then a fault is returned.</p> </note> <p>The specified string must not start or end with whitespace. It must not contain a <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any control characters (<code>\\u0000-\\u001f</code> | <code>\\u007f-\\u009f</code>). Also, it must not contain the literal string <code>arn</code>.</p>',
    }),
    taskPriority: TaskPrioritySchema.exactOptional().openapi({
      description:
        '<p> A task priority that, if set, specifies the priority for a decision task of this workflow execution. This overrides the defaultTaskPriority specified when registering the workflow type. Valid values are integers that range from Java\'s <code>Integer.MIN_VALUE</code> (-2147483648) to <code>Integer.MAX_VALUE</code> (2147483647). Higher numbers indicate higher priority.</p> <p>For more information about setting task priority, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html">Setting Task Priority</a> in the <i>Amazon SWF Developer Guide</i>.</p>',
    }),
    taskStartToCloseTimeout: DurationInSecondsOptionalSchema.exactOptional().openapi({
      description:
        '<p>Specifies the maximum duration of decision tasks for this workflow execution. This parameter overrides the <code>defaultTaskStartToCloseTimout</code> specified when registering the workflow type using <a>RegisterWorkflowType</a>.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p> <note> <p>A task start-to-close timeout for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default task start-to-close timeout was specified at registration time then a fault is returned.</p> </note>',
    }),
    childPolicy: ChildPolicySchema.exactOptional().openapi({
      description:
        '<p> If set, specifies the policy to use for the child workflow executions if the workflow execution being started is terminated by calling the <a>TerminateWorkflowExecution</a> action explicitly or due to an expired timeout. This policy overrides the default child policy specified when registering the workflow type using <a>RegisterWorkflowType</a>.</p> <p>The supported child policies are:</p> <ul> <li> <p> <code>TERMINATE</code> – The child executions are terminated.</p> </li> <li> <p> <code>REQUEST_CANCEL</code> – A request to cancel is attempted for each child execution by recording a <code>WorkflowExecutionCancelRequested</code> event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event.</p> </li> <li> <p> <code>ABANDON</code> – No action is taken. The child executions continue to run.</p> </li> </ul> <note> <p>A child policy for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default child policy was specified at registration time then a fault is returned.</p> </note>',
    }),
    tagList: TagListSchema.exactOptional().openapi({
      description:
        'The list of tags to associate with the child workflow execution. A maximum of 5 tags can be specified. You can list workflow executions with a specific tag by calling <a>ListOpenWorkflowExecutions</a> or <a>ListClosedWorkflowExecutions</a> and specifying a <a>TagFilter</a>.',
    }),
    lambdaRole: ArnSchema.exactOptional().openapi({
      description: 'The IAM role attached to the child workflow execution.',
    }),
  })
  .openapi({
    required: ['workflowType', 'workflowId'],
    description:
      '<p>Provides the details of the <code>StartChildWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision\'s access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagList.member.N</code> – The key is "swf:tagList.N" where N is the tag number from 0 to 4, inclusive.</p> </li> <li> <p> <code>taskList</code> – String constraint. The key is <code>swf:taskList.name</code>.</p> </li> <li> <p> <code>workflowType.name</code> – String constraint. The key is <code>swf:workflowType.name</code>.</p> </li> <li> <p> <code>workflowType.version</code> – String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn\'t have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute\'s <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>',
  })
  .openapi('StartChildWorkflowExecutionDecisionAttributes')

const ScheduleLambdaFunctionDecisionAttributesSchema = z
  .object({
    id: FunctionIdSchema.openapi({
      description: 'A string that identifies the Lambda function execution in the event history.',
    }),
    name: FunctionNameSchema.openapi({
      description: 'The name, or ARN, of the Lambda function to schedule.',
    }),
    control: DataSchema.exactOptional().openapi({
      description:
        "The data attached to the event that the decider can use in subsequent workflow tasks. This data isn't sent to the Lambda task.",
    }),
    input: FunctionInputSchema.exactOptional().openapi({
      description: 'The optional input data to be supplied to the Lambda function.',
    }),
    startToCloseTimeout: DurationInSecondsOptionalSchema.exactOptional().openapi({
      description:
        'The timeout value, in seconds, after which the Lambda function is considered to be failed once it has started. This can be any integer from 1-300 (1s-5m). If no value is supplied, than a default value of 300s is assumed.',
    }),
  })
  .openapi({
    required: ['id', 'name'],
    description:
      'Decision attributes specified in <code>scheduleLambdaFunctionDecisionAttributes</code> within the list of decisions <code>decisions</code> passed to <a>RespondDecisionTaskCompleted</a>.',
  })
  .openapi('ScheduleLambdaFunctionDecisionAttributes')

const DecisionSchema = z
  .object({
    decisionType: DecisionTypeSchema.openapi({
      description: 'Specifies the type of the decision.',
    }),
    scheduleActivityTaskDecisionAttributes:
      ScheduleActivityTaskDecisionAttributesSchema.exactOptional().openapi({
        description:
          "Provides the details of the <code>ScheduleActivityTask</code> decision. It isn't set for other decision types.",
      }),
    requestCancelActivityTaskDecisionAttributes:
      RequestCancelActivityTaskDecisionAttributesSchema.exactOptional().openapi({
        description:
          "Provides the details of the <code>RequestCancelActivityTask</code> decision. It isn't set for other decision types.",
      }),
    completeWorkflowExecutionDecisionAttributes:
      CompleteWorkflowExecutionDecisionAttributesSchema.exactOptional().openapi({
        description:
          "Provides the details of the <code>CompleteWorkflowExecution</code> decision. It isn't set for other decision types.",
      }),
    failWorkflowExecutionDecisionAttributes:
      FailWorkflowExecutionDecisionAttributesSchema.exactOptional().openapi({
        description:
          "Provides the details of the <code>FailWorkflowExecution</code> decision. It isn't set for other decision types.",
      }),
    cancelWorkflowExecutionDecisionAttributes:
      CancelWorkflowExecutionDecisionAttributesSchema.exactOptional().openapi({
        description:
          "Provides the details of the <code>CancelWorkflowExecution</code> decision. It isn't set for other decision types.",
      }),
    continueAsNewWorkflowExecutionDecisionAttributes:
      ContinueAsNewWorkflowExecutionDecisionAttributesSchema.exactOptional().openapi({
        description:
          "Provides the details of the <code>ContinueAsNewWorkflowExecution</code> decision. It isn't set for other decision types.",
      }),
    recordMarkerDecisionAttributes: RecordMarkerDecisionAttributesSchema.exactOptional().openapi({
      description:
        "Provides the details of the <code>RecordMarker</code> decision. It isn't set for other decision types.",
    }),
    startTimerDecisionAttributes: StartTimerDecisionAttributesSchema.exactOptional().openapi({
      description:
        "Provides the details of the <code>StartTimer</code> decision. It isn't set for other decision types.",
    }),
    cancelTimerDecisionAttributes: CancelTimerDecisionAttributesSchema.exactOptional().openapi({
      description:
        "Provides the details of the <code>CancelTimer</code> decision. It isn't set for other decision types.",
    }),
    signalExternalWorkflowExecutionDecisionAttributes:
      SignalExternalWorkflowExecutionDecisionAttributesSchema.exactOptional().openapi({
        description:
          "Provides the details of the <code>SignalExternalWorkflowExecution</code> decision. It isn't set for other decision types.",
      }),
    requestCancelExternalWorkflowExecutionDecisionAttributes:
      RequestCancelExternalWorkflowExecutionDecisionAttributesSchema.exactOptional().openapi({
        description:
          "Provides the details of the <code>RequestCancelExternalWorkflowExecution</code> decision. It isn't set for other decision types.",
      }),
    startChildWorkflowExecutionDecisionAttributes:
      StartChildWorkflowExecutionDecisionAttributesSchema.exactOptional().openapi({
        description:
          "Provides the details of the <code>StartChildWorkflowExecution</code> decision. It isn't set for other decision types.",
      }),
    scheduleLambdaFunctionDecisionAttributes:
      ScheduleLambdaFunctionDecisionAttributesSchema.exactOptional().openapi({
        description:
          "Provides the details of the <code>ScheduleLambdaFunction</code> decision. It isn't set for other decision types.",
      }),
  })
  .openapi({
    required: ['decisionType'],
    description:
      "<p>Specifies a decision made by the decider. A decision can be one of these types:</p> <ul> <li> <p> <code>CancelTimer</code> – Cancels a previously started timer and records a <code>TimerCanceled</code> event in the history.</p> </li> <li> <p> <code>CancelWorkflowExecution</code> – Closes the workflow execution and records a <code>WorkflowExecutionCanceled</code> event in the history.</p> </li> <li> <p> <code>CompleteWorkflowExecution</code> – Closes the workflow execution and records a <code>WorkflowExecutionCompleted</code> event in the history .</p> </li> <li> <p> <code>ContinueAsNewWorkflowExecution</code> – Closes the workflow execution and starts a new workflow execution of the same type using the same workflow ID and a unique run Id. A <code>WorkflowExecutionContinuedAsNew</code> event is recorded in the history.</p> </li> <li> <p> <code>FailWorkflowExecution</code> – Closes the workflow execution and records a <code>WorkflowExecutionFailed</code> event in the history.</p> </li> <li> <p> <code>RecordMarker</code> – Records a <code>MarkerRecorded</code> event in the history. Markers can be used for adding custom information in the history for instance to let deciders know that they don't need to look at the history beyond the marker event.</p> </li> <li> <p> <code>RequestCancelActivityTask</code> – Attempts to cancel a previously scheduled activity task. If the activity task was scheduled but has not been assigned to a worker, then it is canceled. If the activity task was already assigned to a worker, then the worker is informed that cancellation has been requested in the response to <a>RecordActivityTaskHeartbeat</a>.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecution</code> – Requests that a request be made to cancel the specified external workflow execution and records a <code>RequestCancelExternalWorkflowExecutionInitiated</code> event in the history.</p> </li> <li> <p> <code>ScheduleActivityTask</code> – Schedules an activity task.</p> </li> <li> <p> <code>SignalExternalWorkflowExecution</code> – Requests a signal to be delivered to the specified external workflow execution and records a <code>SignalExternalWorkflowExecutionInitiated</code> event in the history.</p> </li> <li> <p> <code>StartChildWorkflowExecution</code> – Requests that a child workflow execution be started and records a <code>StartChildWorkflowExecutionInitiated</code> event in the history. The child workflow execution is a separate workflow execution with its own history.</p> </li> <li> <p> <code>StartTimer</code> – Starts a timer for this workflow execution and records a <code>TimerStarted</code> event in the history. This timer fires after the specified delay and record a <code>TimerFired</code> event.</p> </li> </ul> <p> <b>Access Control</b> </p> <p>If you grant permission to use <code>RespondDecisionTaskCompleted</code>, you can use IAM policies to express permissions for the list of decisions returned by this action as if they were members of the API. Treating decisions as a pseudo API maintains a uniform conceptual model and helps keep policies readable. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> <p> <b>Decision Failure</b> </p> <p>Decisions can fail for several reasons</p> <ul> <li> <p>The ordering of decisions should follow a logical flow. Some decisions might not make sense in the current context of the workflow execution and therefore fails.</p> </li> <li> <p>A limit on your account was reached.</p> </li> <li> <p>The decision lacks sufficient permissions.</p> </li> </ul> <p>One of the following events might be added to the history to indicate an error. The event attribute's <code>cause</code> parameter indicates the cause. If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> <ul> <li> <p> <code>ScheduleActivityTaskFailed</code> – A <code>ScheduleActivityTask</code> decision failed. This could happen if the activity type specified in the decision isn't registered, is in a deprecated state, or the decision isn't properly configured.</p> </li> <li> <p> <code>RequestCancelActivityTaskFailed</code> – A <code>RequestCancelActivityTask</code> decision failed. This could happen if there is no open activity task with the specified activityId.</p> </li> <li> <p> <code>StartTimerFailed</code> – A <code>StartTimer</code> decision failed. This could happen if there is another open timer with the same timerId.</p> </li> <li> <p> <code>CancelTimerFailed</code> – A <code>CancelTimer</code> decision failed. This could happen if there is no open timer with the specified timerId.</p> </li> <li> <p> <code>StartChildWorkflowExecutionFailed</code> – A <code>StartChildWorkflowExecution</code> decision failed. This could happen if the workflow type specified isn't registered, is deprecated, or the decision isn't properly configured.</p> </li> <li> <p> <code>SignalExternalWorkflowExecutionFailed</code> – A <code>SignalExternalWorkflowExecution</code> decision failed. This could happen if the <code>workflowID</code> specified in the decision was incorrect.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecutionFailed</code> – A <code>RequestCancelExternalWorkflowExecution</code> decision failed. This could happen if the <code>workflowID</code> specified in the decision was incorrect.</p> </li> <li> <p> <code>CancelWorkflowExecutionFailed</code> – A <code>CancelWorkflowExecution</code> decision failed. This could happen if there is an unhandled decision task pending in the workflow execution.</p> </li> <li> <p> <code>CompleteWorkflowExecutionFailed</code> – A <code>CompleteWorkflowExecution</code> decision failed. This could happen if there is an unhandled decision task pending in the workflow execution.</p> </li> <li> <p> <code>ContinueAsNewWorkflowExecutionFailed</code> – A <code>ContinueAsNewWorkflowExecution</code> decision failed. This could happen if there is an unhandled decision task pending in the workflow execution or the ContinueAsNewWorkflowExecution decision was not configured correctly.</p> </li> <li> <p> <code>FailWorkflowExecutionFailed</code> – A <code>FailWorkflowExecution</code> decision failed. This could happen if there is an unhandled decision task pending in the workflow execution.</p> </li> </ul> <p>The preceding error events might occur due to an error in the decider logic, which might put the workflow execution in an unstable state The cause field in the event structure for the error event indicates the cause of the error.</p> <note> <p>A workflow execution may be closed by the decider by returning one of the following decisions when completing a decision task: <code>CompleteWorkflowExecution</code>, <code>FailWorkflowExecution</code>, <code>CancelWorkflowExecution</code> and <code>ContinueAsNewWorkflowExecution</code>. An <code>UnhandledDecision</code> fault is returned if a workflow closing decision is specified and a signal or activity event had been added to the history while the decision task was being performed by the decider. Unlike the above situations which are logic issues, this fault is always possible because of race conditions in a distributed system. The right action here is to call <a>RespondDecisionTaskCompleted</a> without any decisions. This would result in another decision task with these new events included in the history. The decider should handle the new events and may decide to close the workflow execution.</p> </note> <p> <b>How to Code a Decision</b> </p> <p>You code a decision by first setting the decision type field to one of the above decision values, and then set the corresponding attributes field shown below:</p> <ul> <li> <p> <code> <a>ScheduleActivityTaskDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>RequestCancelActivityTaskDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>CompleteWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>FailWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>CancelWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>ContinueAsNewWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>RecordMarkerDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>StartTimerDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>CancelTimerDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>SignalExternalWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>RequestCancelExternalWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>StartChildWorkflowExecutionDecisionAttributes</a> </code> </p> </li> </ul>",
  })
  .openapi('Decision')

const DecisionListSchema = z.array(DecisionSchema).openapi('DecisionList')

const RespondDecisionTaskCompletedInputSchema = z
  .object({
    taskToken: TaskTokenSchema.openapi({
      description:
        '<p>The <code>taskToken</code> from the <a>DecisionTask</a>.</p> <important> <p> <code>taskToken</code> is generated by the service and should be treated as an opaque value. If the task is passed to another process, its <code>taskToken</code> must also be passed. This enables it to provide its progress and respond with results.</p> </important>',
    }),
    decisions: DecisionListSchema.exactOptional().openapi({
      description:
        'The list of decisions (possibly empty) made by the decider while processing this decision task. See the docs for the <a>Decision</a> structure for details.',
    }),
    executionContext: DataSchema.exactOptional().openapi({
      description: 'User defined context to add to workflow execution.',
    }),
  })
  .openapi({
    required: ['taskToken'],
    title: 'RespondDecisionTaskCompletedInput',
    description: 'Input data for a TaskCompleted response to a decision task.',
  })
  .openapi('RespondDecisionTaskCompletedInput')

const SignalWorkflowExecutionInputSchema = z
  .object({
    domain: DomainNameSchema.openapi({
      description: 'The name of the domain containing the workflow execution to signal.',
    }),
    workflowId: WorkflowIdSchema.openapi({
      description: 'The workflowId of the workflow execution to signal.',
    }),
    runId: WorkflowRunIdOptionalSchema.exactOptional().openapi({
      description: 'The runId of the workflow execution to signal.',
    }),
    signalName: SignalNameSchema.openapi({
      description: 'The name of the signal. This name must be meaningful to the target workflow.',
    }),
    input: DataSchema.exactOptional().openapi({
      description:
        "Data to attach to the <code>WorkflowExecutionSignaled</code> event in the target workflow execution's history.",
    }),
  })
  .openapi({
    required: ['domain', 'workflowId', 'signalName'],
    title: 'SignalWorkflowExecutionInput',
  })
  .openapi('SignalWorkflowExecutionInput')

const RunSchema = z
  .object({
    runId: WorkflowRunIdSchema.exactOptional().openapi({
      description:
        'The <code>runId</code> of a workflow execution. This ID is generated by the service and can be used to uniquely identify the workflow execution within a domain.',
    }),
  })
  .openapi({
    description: 'Specifies the <code>runId</code> of a workflow execution.',
    required: [],
  })
  .openapi('Run')

const StartWorkflowExecutionInputSchema = z
  .object({
    domain: DomainNameSchema.openapi({
      description: 'The name of the domain in which the workflow execution is created.',
    }),
    workflowId: WorkflowIdSchema.openapi({
      description:
        '<p>The user defined identifier associated with the workflow execution. You can use this to associate a custom identifier with the workflow execution. You may specify the same identifier if a workflow execution is logically a <i>restart</i> of a previous execution. You cannot have two open workflow executions with the same <code>workflowId</code> at the same time within the same domain.</p> <p>The specified string must not start or end with whitespace. It must not contain a <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any control characters (<code>\\u0000-\\u001f</code> | <code>\\u007f-\\u009f</code>). Also, it must not <i>be</i> the literal string <code>arn</code>.</p>',
    }),
    workflowType: WorkflowTypeSchema.openapi({ description: 'The type of the workflow to start.' }),
    taskList: TaskListSchema.exactOptional().openapi({
      description:
        '<p>The task list to use for the decision tasks generated for this workflow execution. This overrides the <code>defaultTaskList</code> specified when registering the workflow type.</p> <note> <p>A task list for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default task list was specified at registration time then a fault is returned.</p> </note> <p>The specified string must not start or end with whitespace. It must not contain a <code>:</code> (colon), <code>/</code> (slash), <code>|</code> (vertical bar), or any control characters (<code>\\u0000-\\u001f</code> | <code>\\u007f-\\u009f</code>). Also, it must not <i>be</i> the literal string <code>arn</code>.</p>',
    }),
    taskPriority: TaskPrioritySchema.exactOptional().openapi({
      description:
        '<p>The task priority to use for this workflow execution. This overrides any default priority that was assigned when the workflow type was registered. If not set, then the default task priority for the workflow type is used. Valid values are integers that range from Java\'s <code>Integer.MIN_VALUE</code> (-2147483648) to <code>Integer.MAX_VALUE</code> (2147483647). Higher numbers indicate higher priority.</p> <p>For more information about setting task priority, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html">Setting Task Priority</a> in the <i>Amazon SWF Developer Guide</i>.</p>',
    }),
    input: DataSchema.exactOptional().openapi({
      description:
        'The input for the workflow execution. This is a free form string which should be meaningful to the workflow you are starting. This <code>input</code> is made available to the new workflow execution in the <code>WorkflowExecutionStarted</code> history event.',
    }),
    executionStartToCloseTimeout: DurationInSecondsOptionalSchema.exactOptional().openapi({
      description:
        '<p>The total duration for this workflow execution. This overrides the defaultExecutionStartToCloseTimeout specified when registering the workflow type.</p> <p>The duration is specified in seconds; an integer greater than or equal to <code>0</code>. Exceeding this limit causes the workflow execution to time out. Unlike some of the other timeout parameters in Amazon SWF, you cannot specify a value of "NONE" for this timeout; there is a one-year max limit on the time that a workflow execution can run.</p> <note> <p>An execution start-to-close timeout must be specified either through this parameter or as a default when the workflow type is registered. If neither this parameter nor a default execution start-to-close timeout is specified, a fault is returned.</p> </note>',
    }),
    tagList: TagListSchema.exactOptional().openapi({
      description:
        'The list of tags to associate with the workflow execution. You can specify a maximum of 5 tags. You can list workflow executions with a specific tag by calling <a>ListOpenWorkflowExecutions</a> or <a>ListClosedWorkflowExecutions</a> and specifying a <a>TagFilter</a>.',
    }),
    taskStartToCloseTimeout: DurationInSecondsOptionalSchema.exactOptional().openapi({
      description:
        '<p>Specifies the maximum duration of decision tasks for this workflow execution. This parameter overrides the <code>defaultTaskStartToCloseTimout</code> specified when registering the workflow type using <a>RegisterWorkflowType</a>.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p> <note> <p>A task start-to-close timeout for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default task start-to-close timeout was specified at registration time then a fault is returned.</p> </note>',
    }),
    childPolicy: ChildPolicySchema.exactOptional().openapi({
      description:
        '<p>If set, specifies the policy to use for the child workflow executions of this workflow execution if it is terminated, by calling the <a>TerminateWorkflowExecution</a> action explicitly or due to an expired timeout. This policy overrides the default child policy specified when registering the workflow type using <a>RegisterWorkflowType</a>.</p> <p>The supported child policies are:</p> <ul> <li> <p> <code>TERMINATE</code> – The child executions are terminated.</p> </li> <li> <p> <code>REQUEST_CANCEL</code> – A request to cancel is attempted for each child execution by recording a <code>WorkflowExecutionCancelRequested</code> event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event.</p> </li> <li> <p> <code>ABANDON</code> – No action is taken. The child executions continue to run.</p> </li> </ul> <note> <p>A child policy for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default child policy was specified at registration time then a fault is returned.</p> </note>',
    }),
    lambdaRole: ArnSchema.exactOptional().openapi({
      description:
        '<p>The IAM role to attach to this workflow execution.</p> <note> <p>Executions of this workflow type need IAM roles to invoke Lambda functions. If you don\'t attach an IAM role, any attempt to schedule a Lambda task fails. This results in a <code>ScheduleLambdaFunctionFailed</code> history event. For more information, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html">https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html</a> in the <i>Amazon SWF Developer Guide</i>.</p> </note>',
    }),
  })
  .openapi({
    required: ['domain', 'workflowId', 'workflowType'],
    title: 'StartWorkflowExecutionInput',
  })
  .openapi('StartWorkflowExecutionInput')

const WorkflowExecutionAlreadyStartedFaultSchema = z
  .any()
  .openapi('WorkflowExecutionAlreadyStartedFault')

const DefaultUndefinedFaultSchema = z.any().openapi('DefaultUndefinedFault')

const TagResourceInputSchema = z
  .object({
    resourceArn: ArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) for the Amazon SWF domain.',
    }),
    tags: ResourceTagListSchema.openapi({
      description:
        '<p>The list of tags to add to a domain. </p> <p>Tags may only contain unicode letters, digits, whitespace, or these symbols: <code>_ . : / = + - @</code>.</p>',
    }),
  })
  .openapi({ required: ['resourceArn', 'tags'], title: 'TagResourceInput' })
  .openapi('TagResourceInput')

const TerminateWorkflowExecutionInputSchema = z
  .object({
    domain: DomainNameSchema.openapi({
      description: 'The domain of the workflow execution to terminate.',
    }),
    workflowId: WorkflowIdSchema.openapi({
      description: 'The workflowId of the workflow execution to terminate.',
    }),
    runId: WorkflowRunIdOptionalSchema.exactOptional().openapi({
      description: 'The runId of the workflow execution to terminate.',
    }),
    reason: TerminateReasonSchema.exactOptional().openapi({
      description: ' A descriptive reason for terminating the workflow execution.',
    }),
    details: DataSchema.exactOptional().openapi({
      description: ' Details for terminating the workflow execution.',
    }),
    childPolicy: ChildPolicySchema.exactOptional().openapi({
      description:
        '<p>If set, specifies the policy to use for the child workflow executions of the workflow execution being terminated. This policy overrides the child policy specified for the workflow execution at registration time or when starting the execution.</p> <p>The supported child policies are:</p> <ul> <li> <p> <code>TERMINATE</code> – The child executions are terminated.</p> </li> <li> <p> <code>REQUEST_CANCEL</code> – A request to cancel is attempted for each child execution by recording a <code>WorkflowExecutionCancelRequested</code> event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event.</p> </li> <li> <p> <code>ABANDON</code> – No action is taken. The child executions continue to run.</p> </li> </ul> <note> <p>A child policy for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default child policy was specified at registration time then a fault is returned.</p> </note>',
    }),
  })
  .openapi({ required: ['domain', 'workflowId'], title: 'TerminateWorkflowExecutionInput' })
  .openapi('TerminateWorkflowExecutionInput')

const UndeprecateActivityTypeInputSchema = z
  .object({
    domain: DomainNameSchema.openapi({
      description: 'The name of the domain of the deprecated activity type.',
    }),
    activityType: ActivityTypeSchema.openapi({ description: 'The activity type to undeprecate.' }),
  })
  .openapi({ required: ['domain', 'activityType'], title: 'UndeprecateActivityTypeInput' })
  .openapi('UndeprecateActivityTypeInput')

const UndeprecateDomainInputSchema = z
  .object({
    name: DomainNameSchema.openapi({
      description: 'The name of the domain of the deprecated workflow type.',
    }),
  })
  .openapi({ required: ['name'], title: 'UndeprecateDomainInput' })
  .openapi('UndeprecateDomainInput')

const UndeprecateWorkflowTypeInputSchema = z
  .object({
    domain: DomainNameSchema.openapi({
      description: 'The name of the domain of the deprecated workflow type.',
    }),
    workflowType: WorkflowTypeSchema.openapi({
      description: 'The name of the domain of the deprecated workflow type.',
    }),
  })
  .openapi({ required: ['domain', 'workflowType'], title: 'UndeprecateWorkflowTypeInput' })
  .openapi('UndeprecateWorkflowTypeInput')

const ResourceTagKeyListSchema = z.array(ResourceTagKeySchema).openapi('ResourceTagKeyList')

const UntagResourceInputSchema = z
  .object({
    resourceArn: ArnSchema.openapi({
      description: 'The Amazon Resource Name (ARN) for the Amazon SWF domain.',
    }),
    tagKeys: ResourceTagKeyListSchema.openapi({
      description: 'The list of tags to remove from the Amazon SWF domain.',
    }),
  })
  .openapi({ required: ['resourceArn', 'tagKeys'], title: 'UntagResourceInput' })
  .openapi('UntagResourceInput')

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

export const postXAmzTargetSimpleWorkflowServiceCountClosedWorkflowExecutionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.CountClosedWorkflowExecutions',
  description:
    "<p>Returns the number of closed workflow executions within the given domain that meet the specified filtering criteria.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagFilter.tag</code>: String constraint. The key is <code>swf:tagFilter.tag</code>.</p> </li> <li> <p> <code>typeFilter.name</code>: String constraint. The key is <code>swf:typeFilter.name</code>.</p> </li> <li> <p> <code>typeFilter.version</code>: String constraint. The key is <code>swf:typeFilter.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  operationId: 'CountClosedWorkflowExecutions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.CountClosedWorkflowExecutions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['SimpleWorkflowService.CountClosedWorkflowExecutions'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CountClosedWorkflowExecutionsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: WorkflowExecutionCountSchema } },
    },
    480: {
      description: 'UnknownResourceFault',
      content: { 'application/json': { schema: UnknownResourceFaultSchema } },
    },
    481: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
  },
})

export const postXAmzTargetSimpleWorkflowServiceCountOpenWorkflowExecutionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.CountOpenWorkflowExecutions',
  description:
    "<p>Returns the number of open workflow executions within the given domain that meet the specified filtering criteria.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagFilter.tag</code>: String constraint. The key is <code>swf:tagFilter.tag</code>.</p> </li> <li> <p> <code>typeFilter.name</code>: String constraint. The key is <code>swf:typeFilter.name</code>.</p> </li> <li> <p> <code>typeFilter.version</code>: String constraint. The key is <code>swf:typeFilter.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  operationId: 'CountOpenWorkflowExecutions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.CountOpenWorkflowExecutions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SimpleWorkflowService.CountOpenWorkflowExecutions'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CountOpenWorkflowExecutionsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: WorkflowExecutionCountSchema } },
    },
    480: {
      description: 'UnknownResourceFault',
      content: { 'application/json': { schema: UnknownResourceFaultSchema } },
    },
    481: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
  },
})

export const postXAmzTargetSimpleWorkflowServiceCountPendingActivityTasksRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.CountPendingActivityTasks',
  description:
    "<p>Returns the estimated number of activity tasks in the specified task list. The count returned is an approximation and isn't guaranteed to be exact. If you specify a task list that no activity task was ever scheduled in then <code>0</code> is returned.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the <code>taskList.name</code> parameter by using a <code>Condition</code> element with the <code>swf:taskList.name</code> key to allow the action to access only certain task lists.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  operationId: 'CountPendingActivityTasks',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.CountPendingActivityTasks')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SimpleWorkflowService.CountPendingActivityTasks'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CountPendingActivityTasksInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PendingTaskCountSchema } },
    },
    480: {
      description: 'UnknownResourceFault',
      content: { 'application/json': { schema: UnknownResourceFaultSchema } },
    },
    481: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
  },
})

export const postXAmzTargetSimpleWorkflowServiceCountPendingDecisionTasksRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.CountPendingDecisionTasks',
  description:
    "<p>Returns the estimated number of decision tasks in the specified task list. The count returned is an approximation and isn't guaranteed to be exact. If you specify a task list that no decision task was ever scheduled in then <code>0</code> is returned.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the <code>taskList.name</code> parameter by using a <code>Condition</code> element with the <code>swf:taskList.name</code> key to allow the action to access only certain task lists.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  operationId: 'CountPendingDecisionTasks',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.CountPendingDecisionTasks')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SimpleWorkflowService.CountPendingDecisionTasks'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CountPendingDecisionTasksInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PendingTaskCountSchema } },
    },
    480: {
      description: 'UnknownResourceFault',
      content: { 'application/json': { schema: UnknownResourceFaultSchema } },
    },
    481: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
  },
})

export const postXAmzTargetSimpleWorkflowServiceDeprecateActivityTypeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.DeprecateActivityType',
  description:
    "<p>Deprecates the specified <i>activity type</i>. After an activity type has been deprecated, you cannot create new tasks of that activity type. Tasks of this type that were scheduled before the type was deprecated continue to run.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>activityType.name</code>: String constraint. The key is <code>swf:activityType.name</code>.</p> </li> <li> <p> <code>activityType.version</code>: String constraint. The key is <code>swf:activityType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  operationId: 'DeprecateActivityType',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.DeprecateActivityType')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SimpleWorkflowService.DeprecateActivityType'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeprecateActivityTypeInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'UnknownResourceFault',
      content: { 'application/json': { schema: UnknownResourceFaultSchema } },
    },
    481: {
      description: 'TypeDeprecatedFault',
      content: { 'application/json': { schema: TypeDeprecatedFaultSchema } },
    },
    482: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
  },
})

export const postXAmzTargetSimpleWorkflowServiceDeprecateDomainRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.DeprecateDomain',
  description:
    "<p>Deprecates the specified domain. After a domain has been deprecated it cannot be used to create new workflow executions or register new types. However, you can still use visibility actions on this domain. Deprecating a domain also deprecates all activity and workflow types registered in the domain. Executions that were started before the domain was deprecated continues to run.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  operationId: 'DeprecateDomain',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.DeprecateDomain')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SimpleWorkflowService.DeprecateDomain'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeprecateDomainInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'UnknownResourceFault',
      content: { 'application/json': { schema: UnknownResourceFaultSchema } },
    },
    481: {
      description: 'DomainDeprecatedFault',
      content: { 'application/json': { schema: DomainDeprecatedFaultSchema } },
    },
    482: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
  },
})

export const postXAmzTargetSimpleWorkflowServiceDeprecateWorkflowTypeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.DeprecateWorkflowType',
  description:
    "<p>Deprecates the specified <i>workflow type</i>. After a workflow type has been deprecated, you cannot create new executions of that type. Executions that were started before the type was deprecated continues to run. A deprecated workflow type may still be used when calling visibility actions.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>workflowType.name</code>: String constraint. The key is <code>swf:workflowType.name</code>.</p> </li> <li> <p> <code>workflowType.version</code>: String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  operationId: 'DeprecateWorkflowType',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.DeprecateWorkflowType')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SimpleWorkflowService.DeprecateWorkflowType'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeprecateWorkflowTypeInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'UnknownResourceFault',
      content: { 'application/json': { schema: UnknownResourceFaultSchema } },
    },
    481: {
      description: 'TypeDeprecatedFault',
      content: { 'application/json': { schema: TypeDeprecatedFaultSchema } },
    },
    482: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
  },
})

export const postXAmzTargetSimpleWorkflowServiceDescribeActivityTypeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.DescribeActivityType',
  description:
    "<p>Returns information about the specified activity type. This includes configuration settings provided when the type was registered and other general information about the type.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>activityType.name</code>: String constraint. The key is <code>swf:activityType.name</code>.</p> </li> <li> <p> <code>activityType.version</code>: String constraint. The key is <code>swf:activityType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  operationId: 'DescribeActivityType',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.DescribeActivityType')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SimpleWorkflowService.DescribeActivityType'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeActivityTypeInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ActivityTypeDetailSchema } },
    },
    480: {
      description: 'UnknownResourceFault',
      content: { 'application/json': { schema: UnknownResourceFaultSchema } },
    },
    481: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
  },
})

export const postXAmzTargetSimpleWorkflowServiceDescribeDomainRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.DescribeDomain',
  description:
    "<p>Returns information about the specified domain, including description and status.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  operationId: 'DescribeDomain',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.DescribeDomain')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SimpleWorkflowService.DescribeDomain'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeDomainInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DomainDetailSchema } },
    },
    480: {
      description: 'UnknownResourceFault',
      content: { 'application/json': { schema: UnknownResourceFaultSchema } },
    },
    481: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
  },
})

export const postXAmzTargetSimpleWorkflowServiceDescribeWorkflowExecutionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowExecution',
  description:
    "<p>Returns information about the specified workflow execution including its type and some statistics.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  operationId: 'DescribeWorkflowExecution',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.DescribeWorkflowExecution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SimpleWorkflowService.DescribeWorkflowExecution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeWorkflowExecutionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: WorkflowExecutionDetailSchema } },
    },
    480: {
      description: 'UnknownResourceFault',
      content: { 'application/json': { schema: UnknownResourceFaultSchema } },
    },
    481: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
  },
})

export const postXAmzTargetSimpleWorkflowServiceDescribeWorkflowTypeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowType',
  description:
    "<p>Returns information about the specified <i>workflow type</i>. This includes configuration settings specified when the type was registered and other information such as creation date, current status, etc.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>workflowType.name</code>: String constraint. The key is <code>swf:workflowType.name</code>.</p> </li> <li> <p> <code>workflowType.version</code>: String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  operationId: 'DescribeWorkflowType',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.DescribeWorkflowType')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SimpleWorkflowService.DescribeWorkflowType'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeWorkflowTypeInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: WorkflowTypeDetailSchema } },
    },
    480: {
      description: 'UnknownResourceFault',
      content: { 'application/json': { schema: UnknownResourceFaultSchema } },
    },
    481: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
  },
})

export const postXAmzTargetSimpleWorkflowServiceGetWorkflowExecutionHistoryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.GetWorkflowExecutionHistory',
  description:
    "<p>Returns the history of the specified workflow execution. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the <code>nextPageToken</code> returned by the initial call.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  operationId: 'GetWorkflowExecutionHistory',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.GetWorkflowExecutionHistory')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SimpleWorkflowService.GetWorkflowExecutionHistory'] },
          },
        }),
    }),
    query: z.object({
      maximumPageSize: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maximumPageSize',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
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
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetWorkflowExecutionHistoryInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: HistorySchema } } },
    480: {
      description: 'UnknownResourceFault',
      content: { 'application/json': { schema: UnknownResourceFaultSchema } },
    },
    481: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
  },
})

export const postXAmzTargetSimpleWorkflowServiceListActivityTypesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.ListActivityTypes',
  description:
    "<p>Returns information about all activities registered in the specified domain that match the specified name and registration status. The result includes information like creation date, current status of the activity, etc. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the <code>nextPageToken</code> returned by the initial call.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  operationId: 'ListActivityTypes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.ListActivityTypes')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SimpleWorkflowService.ListActivityTypes'] },
          },
        }),
    }),
    query: z.object({
      maximumPageSize: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maximumPageSize',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
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
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListActivityTypesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ActivityTypeInfosSchema } },
    },
    480: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
    481: {
      description: 'UnknownResourceFault',
      content: { 'application/json': { schema: UnknownResourceFaultSchema } },
    },
  },
})

export const postXAmzTargetSimpleWorkflowServiceListClosedWorkflowExecutionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.ListClosedWorkflowExecutions',
  description:
    "<p>Returns a list of closed workflow executions in the specified domain that meet the filtering criteria. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagFilter.tag</code>: String constraint. The key is <code>swf:tagFilter.tag</code>.</p> </li> <li> <p> <code>typeFilter.name</code>: String constraint. The key is <code>swf:typeFilter.name</code>.</p> </li> <li> <p> <code>typeFilter.version</code>: String constraint. The key is <code>swf:typeFilter.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  operationId: 'ListClosedWorkflowExecutions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.ListClosedWorkflowExecutions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['SimpleWorkflowService.ListClosedWorkflowExecutions'],
            },
          },
        }),
    }),
    query: z.object({
      maximumPageSize: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maximumPageSize',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
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
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListClosedWorkflowExecutionsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: WorkflowExecutionInfosSchema } },
    },
    480: {
      description: 'UnknownResourceFault',
      content: { 'application/json': { schema: UnknownResourceFaultSchema } },
    },
    481: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
  },
})

export const postXAmzTargetSimpleWorkflowServiceListDomainsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.ListDomains',
  description:
    "<p>Returns the list of domains registered in the account. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains. The element must be set to <code>arn:aws:swf::AccountID:domain/*</code>, where <i>AccountID</i> is the account ID, with no dashes.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  operationId: 'ListDomains',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.ListDomains')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SimpleWorkflowService.ListDomains'] },
          },
        }),
    }),
    query: z.object({
      maximumPageSize: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maximumPageSize',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
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
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListDomainsInputSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: DomainInfosSchema } } },
    480: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
  },
})

export const postXAmzTargetSimpleWorkflowServiceListOpenWorkflowExecutionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.ListOpenWorkflowExecutions',
  description:
    "<p>Returns a list of open workflow executions in the specified domain that meet the filtering criteria. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagFilter.tag</code>: String constraint. The key is <code>swf:tagFilter.tag</code>.</p> </li> <li> <p> <code>typeFilter.name</code>: String constraint. The key is <code>swf:typeFilter.name</code>.</p> </li> <li> <p> <code>typeFilter.version</code>: String constraint. The key is <code>swf:typeFilter.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  operationId: 'ListOpenWorkflowExecutions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.ListOpenWorkflowExecutions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SimpleWorkflowService.ListOpenWorkflowExecutions'] },
          },
        }),
    }),
    query: z.object({
      maximumPageSize: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maximumPageSize',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
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
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListOpenWorkflowExecutionsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: WorkflowExecutionInfosSchema } },
    },
    480: {
      description: 'UnknownResourceFault',
      content: { 'application/json': { schema: UnknownResourceFaultSchema } },
    },
    481: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
  },
})

export const postXAmzTargetSimpleWorkflowServiceListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.ListTagsForResource',
  description: 'List tags for a given domain.',
  operationId: 'ListTagsForResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SimpleWorkflowService.ListTagsForResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListTagsForResourceInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceOutputSchema } },
    },
    480: {
      description: 'UnknownResourceFault',
      content: { 'application/json': { schema: UnknownResourceFaultSchema } },
    },
    481: {
      description: 'LimitExceededFault',
      content: { 'application/json': { schema: LimitExceededFaultSchema } },
    },
    482: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
  },
})

export const postXAmzTargetSimpleWorkflowServiceListWorkflowTypesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.ListWorkflowTypes',
  description:
    "<p>Returns information about workflow types in the specified domain. The results may be split into multiple pages that can be retrieved by making the call repeatedly.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  operationId: 'ListWorkflowTypes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.ListWorkflowTypes')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SimpleWorkflowService.ListWorkflowTypes'] },
          },
        }),
    }),
    query: z.object({
      maximumPageSize: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maximumPageSize',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
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
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListWorkflowTypesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: WorkflowTypeInfosSchema } },
    },
    480: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
    481: {
      description: 'UnknownResourceFault',
      content: { 'application/json': { schema: UnknownResourceFaultSchema } },
    },
  },
})

export const postXAmzTargetSimpleWorkflowServicePollForActivityTaskRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.PollForActivityTask',
  description:
    "<p>Used by workers to get an <a>ActivityTask</a> from the specified activity <code>taskList</code>. This initiates a long poll, where the service holds the HTTP connection open and responds as soon as a task becomes available. The maximum time the service holds on to the request before responding is 60 seconds. If no task is available within 60 seconds, the poll returns an empty result. An empty result, in this context, means that an ActivityTask is returned, but that the value of taskToken is an empty string. If a task is returned, the worker should use its type to identify and process it correctly.</p> <important> <p>Workers should set their client side socket timeout to at least 70 seconds (10 seconds higher than the maximum time service may hold the poll request).</p> </important> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the <code>taskList.name</code> parameter by using a <code>Condition</code> element with the <code>swf:taskList.name</code> key to allow the action to access only certain task lists.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  operationId: 'PollForActivityTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.PollForActivityTask')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SimpleWorkflowService.PollForActivityTask'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PollForActivityTaskInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ActivityTaskSchema } },
    },
    480: {
      description: 'UnknownResourceFault',
      content: { 'application/json': { schema: UnknownResourceFaultSchema } },
    },
    481: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
    482: {
      description: 'LimitExceededFault',
      content: { 'application/json': { schema: LimitExceededFaultSchema } },
    },
  },
})

export const postXAmzTargetSimpleWorkflowServicePollForDecisionTaskRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.PollForDecisionTask',
  description:
    "<p>Used by deciders to get a <a>DecisionTask</a> from the specified decision <code>taskList</code>. A decision task may be returned for any open workflow execution that is using the specified task list. The task includes a paginated view of the history of the workflow execution. The decider should use the workflow type and the history to determine how to properly handle the task.</p> <p>This action initiates a long poll, where the service holds the HTTP connection open and responds as soon a task becomes available. If no decision task is available in the specified task list before the timeout of 60 seconds expires, an empty result is returned. An empty result, in this context, means that a DecisionTask is returned, but that the value of taskToken is an empty string.</p> <important> <p>Deciders should set their client side socket timeout to at least 70 seconds (10 seconds higher than the timeout).</p> </important> <important> <p>Because the number of workflow history events for a single workflow execution might be very large, the result returned might be split up across a number of pages. To retrieve subsequent pages, make additional calls to <code>PollForDecisionTask</code> using the <code>nextPageToken</code> returned by the initial call. Note that you do <i>not</i> call <code>GetWorkflowExecutionHistory</code> with this <code>nextPageToken</code>. Instead, call <code>PollForDecisionTask</code> again.</p> </important> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the <code>taskList.name</code> parameter by using a <code>Condition</code> element with the <code>swf:taskList.name</code> key to allow the action to access only certain task lists.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  operationId: 'PollForDecisionTask',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.PollForDecisionTask')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SimpleWorkflowService.PollForDecisionTask'] },
          },
        }),
    }),
    query: z.object({
      maximumPageSize: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maximumPageSize',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
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
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PollForDecisionTaskInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DecisionTaskSchema } },
    },
    480: {
      description: 'UnknownResourceFault',
      content: { 'application/json': { schema: UnknownResourceFaultSchema } },
    },
    481: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
    482: {
      description: 'LimitExceededFault',
      content: { 'application/json': { schema: LimitExceededFaultSchema } },
    },
  },
})

export const postXAmzTargetSimpleWorkflowServiceRecordActivityTaskHeartbeatRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.RecordActivityTaskHeartbeat',
  description:
    "<p>Used by activity workers to report to the service that the <a>ActivityTask</a> represented by the specified <code>taskToken</code> is still making progress. The worker can also specify details of the progress, for example percent complete, using the <code>details</code> parameter. This action can also be used by the worker as a mechanism to check if cancellation is being requested for the activity task. If a cancellation is being attempted for the specified task, then the boolean <code>cancelRequested</code> flag returned by the service is set to <code>true</code>.</p> <p>This action resets the <code>taskHeartbeatTimeout</code> clock. The <code>taskHeartbeatTimeout</code> is specified in <a>RegisterActivityType</a>.</p> <p>This action doesn't in itself create an event in the workflow execution history. However, if the task times out, the workflow execution history contains a <code>ActivityTaskTimedOut</code> event that contains the information from the last heartbeat generated by the activity worker.</p> <note> <p>The <code>taskStartToCloseTimeout</code> of an activity type is the maximum duration of an activity task, regardless of the number of <a>RecordActivityTaskHeartbeat</a> requests received. The <code>taskStartToCloseTimeout</code> is also specified in <a>RegisterActivityType</a>.</p> </note> <note> <p>This operation is only useful for long-lived activities to report liveliness of the task and to determine if a cancellation is being attempted.</p> </note> <important> <p>If the <code>cancelRequested</code> flag returns <code>true</code>, a cancellation is being attempted. If the worker can cancel the activity, it should respond with <a>RespondActivityTaskCanceled</a>. Otherwise, it should ignore the cancellation request.</p> </important> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  operationId: 'RecordActivityTaskHeartbeat',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.RecordActivityTaskHeartbeat')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SimpleWorkflowService.RecordActivityTaskHeartbeat'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RecordActivityTaskHeartbeatInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ActivityTaskStatusSchema } },
    },
    480: {
      description: 'UnknownResourceFault',
      content: { 'application/json': { schema: UnknownResourceFaultSchema } },
    },
    481: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
  },
})

export const postXAmzTargetSimpleWorkflowServiceRegisterActivityTypeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.RegisterActivityType',
  description:
    "<p>Registers a new <i>activity type</i> along with its configuration settings in the specified domain.</p> <important> <p>A <code>TypeAlreadyExists</code> fault is returned if the type already exists in the domain. You cannot change any configuration settings of the type after its registration, and it must be registered as a new version.</p> </important> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>defaultTaskList.name</code>: String constraint. The key is <code>swf:defaultTaskList.name</code>.</p> </li> <li> <p> <code>name</code>: String constraint. The key is <code>swf:name</code>.</p> </li> <li> <p> <code>version</code>: String constraint. The key is <code>swf:version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  operationId: 'RegisterActivityType',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.RegisterActivityType')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SimpleWorkflowService.RegisterActivityType'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RegisterActivityTypeInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'TypeAlreadyExistsFault',
      content: { 'application/json': { schema: TypeAlreadyExistsFaultSchema } },
    },
    481: {
      description: 'LimitExceededFault',
      content: { 'application/json': { schema: LimitExceededFaultSchema } },
    },
    482: {
      description: 'UnknownResourceFault',
      content: { 'application/json': { schema: UnknownResourceFaultSchema } },
    },
    483: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
  },
})

export const postXAmzTargetSimpleWorkflowServiceRegisterDomainRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.RegisterDomain',
  description:
    "<p>Registers a new domain.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>You cannot use an IAM policy to control domain access for this action. The name of the domain being registered is available as the resource of this action.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  operationId: 'RegisterDomain',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.RegisterDomain')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SimpleWorkflowService.RegisterDomain'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RegisterDomainInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'DomainAlreadyExistsFault',
      content: { 'application/json': { schema: DomainAlreadyExistsFaultSchema } },
    },
    481: {
      description: 'LimitExceededFault',
      content: { 'application/json': { schema: LimitExceededFaultSchema } },
    },
    482: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
    483: {
      description: 'TooManyTagsFault',
      content: { 'application/json': { schema: TooManyTagsFaultSchema } },
    },
  },
})

export const postXAmzTargetSimpleWorkflowServiceRegisterWorkflowTypeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.RegisterWorkflowType',
  description:
    "<p>Registers a new <i>workflow type</i> and its configuration settings in the specified domain.</p> <p>The retention period for the workflow history is set by the <a>RegisterDomain</a> action.</p> <important> <p>If the type already exists, then a <code>TypeAlreadyExists</code> fault is returned. You cannot change the configuration settings of a workflow type once it is registered and it must be registered as a new version.</p> </important> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>defaultTaskList.name</code>: String constraint. The key is <code>swf:defaultTaskList.name</code>.</p> </li> <li> <p> <code>name</code>: String constraint. The key is <code>swf:name</code>.</p> </li> <li> <p> <code>version</code>: String constraint. The key is <code>swf:version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  operationId: 'RegisterWorkflowType',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.RegisterWorkflowType')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SimpleWorkflowService.RegisterWorkflowType'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RegisterWorkflowTypeInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'TypeAlreadyExistsFault',
      content: { 'application/json': { schema: TypeAlreadyExistsFaultSchema } },
    },
    481: {
      description: 'LimitExceededFault',
      content: { 'application/json': { schema: LimitExceededFaultSchema } },
    },
    482: {
      description: 'UnknownResourceFault',
      content: { 'application/json': { schema: UnknownResourceFaultSchema } },
    },
    483: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
  },
})

export const postXAmzTargetSimpleWorkflowServiceRequestCancelWorkflowExecutionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.RequestCancelWorkflowExecution',
  description:
    "<p>Records a <code>WorkflowExecutionCancelRequested</code> event in the currently running workflow execution identified by the given domain, workflowId, and runId. This logically requests the cancellation of the workflow execution as a whole. It is up to the decider to take appropriate actions when it receives an execution history with this event.</p> <note> <p>If the runId isn't specified, the <code>WorkflowExecutionCancelRequested</code> event is recorded in the history of the current open workflow execution with the specified workflowId in the domain.</p> </note> <note> <p>Because this action allows the workflow to properly clean up and gracefully close, it should be used instead of <a>TerminateWorkflowExecution</a> when possible.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  operationId: 'RequestCancelWorkflowExecution',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.RequestCancelWorkflowExecution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['SimpleWorkflowService.RequestCancelWorkflowExecution'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RequestCancelWorkflowExecutionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'UnknownResourceFault',
      content: { 'application/json': { schema: UnknownResourceFaultSchema } },
    },
    481: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
  },
})

export const postXAmzTargetSimpleWorkflowServiceRespondActivityTaskCanceledRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCanceled',
  description:
    '<p>Used by workers to tell the service that the <a>ActivityTask</a> identified by the <code>taskToken</code> was successfully canceled. Additional <code>details</code> can be provided using the <code>details</code> argument.</p> <p>These <code>details</code> (if provided) appear in the <code>ActivityTaskCanceled</code> event added to the workflow history.</p> <important> <p>Only use this operation if the <code>canceled</code> flag of a <a>RecordActivityTaskHeartbeat</a> request returns <code>true</code> and if the activity can be safely undone or abandoned.</p> </important> <p>A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to <a>RespondActivityTaskCompleted</a>, RespondActivityTaskCanceled, <a>RespondActivityTaskFailed</a>, or the task has <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dg-basic.html#swf-dev-timeout-types">timed out</a>.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action\'s access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action\'s parameters.</p> </li> </ul> <p>If the caller doesn\'t have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute\'s <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>',
  operationId: 'RespondActivityTaskCanceled',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.RespondActivityTaskCanceled')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SimpleWorkflowService.RespondActivityTaskCanceled'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RespondActivityTaskCanceledInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'UnknownResourceFault',
      content: { 'application/json': { schema: UnknownResourceFaultSchema } },
    },
    481: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
  },
})

export const postXAmzTargetSimpleWorkflowServiceRespondActivityTaskCompletedRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCompleted',
  description:
    "<p>Used by workers to tell the service that the <a>ActivityTask</a> identified by the <code>taskToken</code> completed successfully with a <code>result</code> (if provided). The <code>result</code> appears in the <code>ActivityTaskCompleted</code> event in the workflow history.</p> <important> <p>If the requested task doesn't complete successfully, use <a>RespondActivityTaskFailed</a> instead. If the worker finds that the task is canceled through the <code>canceled</code> flag returned by <a>RecordActivityTaskHeartbeat</a>, it should cancel the task, clean up and then call <a>RespondActivityTaskCanceled</a>.</p> </important> <p>A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to RespondActivityTaskCompleted, <a>RespondActivityTaskCanceled</a>, <a>RespondActivityTaskFailed</a>, or the task has <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dg-basic.html#swf-dev-timeout-types\">timed out</a>.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  operationId: 'RespondActivityTaskCompleted',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.RespondActivityTaskCompleted')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['SimpleWorkflowService.RespondActivityTaskCompleted'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RespondActivityTaskCompletedInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'UnknownResourceFault',
      content: { 'application/json': { schema: UnknownResourceFaultSchema } },
    },
    481: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
  },
})

export const postXAmzTargetSimpleWorkflowServiceRespondActivityTaskFailedRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskFailed',
  description:
    '<p>Used by workers to tell the service that the <a>ActivityTask</a> identified by the <code>taskToken</code> has failed with <code>reason</code> (if specified). The <code>reason</code> and <code>details</code> appear in the <code>ActivityTaskFailed</code> event added to the workflow history.</p> <p>A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to <a>RespondActivityTaskCompleted</a>, <a>RespondActivityTaskCanceled</a>, RespondActivityTaskFailed, or the task has <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dg-basic.html#swf-dev-timeout-types">timed out</a>.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action\'s access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action\'s parameters.</p> </li> </ul> <p>If the caller doesn\'t have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute\'s <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>',
  operationId: 'RespondActivityTaskFailed',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.RespondActivityTaskFailed')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SimpleWorkflowService.RespondActivityTaskFailed'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RespondActivityTaskFailedInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'UnknownResourceFault',
      content: { 'application/json': { schema: UnknownResourceFaultSchema } },
    },
    481: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
  },
})

export const postXAmzTargetSimpleWorkflowServiceRespondDecisionTaskCompletedRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.RespondDecisionTaskCompleted',
  description:
    '<p>Used by deciders to tell the service that the <a>DecisionTask</a> identified by the <code>taskToken</code> has successfully completed. The <code>decisions</code> argument specifies the list of decisions made while processing the task.</p> <p>A <code>DecisionTaskCompleted</code> event is added to the workflow history. The <code>executionContext</code> specified is attached to the event in the workflow execution history.</p> <p> <b>Access Control</b> </p> <p>If an IAM policy grants permission to use <code>RespondDecisionTaskCompleted</code>, it can express permissions for the list of decisions in the <code>decisions</code> parameter. Each of the decisions has one or more parameters, much like a regular API call. To allow for policies to be as readable as possible, you can express permissions on decisions as if they were actual API calls, including applying conditions to some parameters. For more information, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>',
  operationId: 'RespondDecisionTaskCompleted',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.RespondDecisionTaskCompleted')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['SimpleWorkflowService.RespondDecisionTaskCompleted'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RespondDecisionTaskCompletedInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'UnknownResourceFault',
      content: { 'application/json': { schema: UnknownResourceFaultSchema } },
    },
    481: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
  },
})

export const postXAmzTargetSimpleWorkflowServiceSignalWorkflowExecutionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.SignalWorkflowExecution',
  description:
    "<p>Records a <code>WorkflowExecutionSignaled</code> event in the workflow execution history and creates a decision task for the workflow execution identified by the given domain, workflowId and runId. The event is recorded with the specified user defined signalName and input (if provided).</p> <note> <p>If a runId isn't specified, then the <code>WorkflowExecutionSignaled</code> event is recorded in the history of the current open workflow with the matching workflowId in the domain.</p> </note> <note> <p>If the specified workflow execution isn't open, this method fails with <code>UnknownResource</code>.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  operationId: 'SignalWorkflowExecution',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.SignalWorkflowExecution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SimpleWorkflowService.SignalWorkflowExecution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SignalWorkflowExecutionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'UnknownResourceFault',
      content: { 'application/json': { schema: UnknownResourceFaultSchema } },
    },
    481: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
  },
})

export const postXAmzTargetSimpleWorkflowServiceStartWorkflowExecutionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.StartWorkflowExecution',
  description:
    "<p>Starts an execution of the workflow type in the specified domain using the provided <code>workflowId</code> and input data.</p> <p>This action returns the newly started workflow execution.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagList.member.0</code>: The key is <code>swf:tagList.member.0</code>.</p> </li> <li> <p> <code>tagList.member.1</code>: The key is <code>swf:tagList.member.1</code>.</p> </li> <li> <p> <code>tagList.member.2</code>: The key is <code>swf:tagList.member.2</code>.</p> </li> <li> <p> <code>tagList.member.3</code>: The key is <code>swf:tagList.member.3</code>.</p> </li> <li> <p> <code>tagList.member.4</code>: The key is <code>swf:tagList.member.4</code>.</p> </li> <li> <p> <code>taskList</code>: String constraint. The key is <code>swf:taskList.name</code>.</p> </li> <li> <p> <code>workflowType.name</code>: String constraint. The key is <code>swf:workflowType.name</code>.</p> </li> <li> <p> <code>workflowType.version</code>: String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  operationId: 'StartWorkflowExecution',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.StartWorkflowExecution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SimpleWorkflowService.StartWorkflowExecution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartWorkflowExecutionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: RunSchema } } },
    480: {
      description: 'UnknownResourceFault',
      content: { 'application/json': { schema: UnknownResourceFaultSchema } },
    },
    481: {
      description: 'TypeDeprecatedFault',
      content: { 'application/json': { schema: TypeDeprecatedFaultSchema } },
    },
    482: {
      description: 'WorkflowExecutionAlreadyStartedFault',
      content: { 'application/json': { schema: WorkflowExecutionAlreadyStartedFaultSchema } },
    },
    483: {
      description: 'LimitExceededFault',
      content: { 'application/json': { schema: LimitExceededFaultSchema } },
    },
    484: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
    485: {
      description: 'DefaultUndefinedFault',
      content: { 'application/json': { schema: DefaultUndefinedFaultSchema } },
    },
  },
})

export const postXAmzTargetSimpleWorkflowServiceTagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.TagResource',
  description:
    '<p>Add a tag to a Amazon SWF domain.</p> <note> <p>Amazon SWF supports a maximum of 50 tags per resource.</p> </note>',
  operationId: 'TagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SimpleWorkflowService.TagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagResourceInputSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'UnknownResourceFault',
      content: { 'application/json': { schema: UnknownResourceFaultSchema } },
    },
    481: {
      description: 'TooManyTagsFault',
      content: { 'application/json': { schema: TooManyTagsFaultSchema } },
    },
    482: {
      description: 'LimitExceededFault',
      content: { 'application/json': { schema: LimitExceededFaultSchema } },
    },
    483: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
  },
})

export const postXAmzTargetSimpleWorkflowServiceTerminateWorkflowExecutionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.TerminateWorkflowExecution',
  description:
    "<p>Records a <code>WorkflowExecutionTerminated</code> event and forces closure of the workflow execution identified by the given domain, runId, and workflowId. The child policy, registered with the workflow type or specified when starting this execution, is applied to any open child workflow executions of this workflow execution.</p> <important> <p>If the identified workflow execution was in progress, it is terminated immediately.</p> </important> <note> <p>If a runId isn't specified, then the <code>WorkflowExecutionTerminated</code> event is recorded in the history of the current open workflow with the matching workflowId in the domain.</p> </note> <note> <p>You should consider using <a>RequestCancelWorkflowExecution</a> action instead because it allows the workflow to gracefully close while <a>TerminateWorkflowExecution</a> doesn't.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  operationId: 'TerminateWorkflowExecution',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.TerminateWorkflowExecution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SimpleWorkflowService.TerminateWorkflowExecution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: TerminateWorkflowExecutionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'UnknownResourceFault',
      content: { 'application/json': { schema: UnknownResourceFaultSchema } },
    },
    481: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
  },
})

export const postXAmzTargetSimpleWorkflowServiceUndeprecateActivityTypeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.UndeprecateActivityType',
  description:
    "<p>Undeprecates a previously deprecated <i>activity type</i>. After an activity type has been undeprecated, you can create new tasks of that activity type.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>activityType.name</code>: String constraint. The key is <code>swf:activityType.name</code>.</p> </li> <li> <p> <code>activityType.version</code>: String constraint. The key is <code>swf:activityType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  operationId: 'UndeprecateActivityType',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.UndeprecateActivityType')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SimpleWorkflowService.UndeprecateActivityType'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UndeprecateActivityTypeInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'UnknownResourceFault',
      content: { 'application/json': { schema: UnknownResourceFaultSchema } },
    },
    481: {
      description: 'TypeAlreadyExistsFault',
      content: { 'application/json': { schema: TypeAlreadyExistsFaultSchema } },
    },
    482: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
  },
})

export const postXAmzTargetSimpleWorkflowServiceUndeprecateDomainRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.UndeprecateDomain',
  description:
    "<p>Undeprecates a previously deprecated domain. After a domain has been undeprecated it can be used to create new workflow executions or register new types.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  operationId: 'UndeprecateDomain',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.UndeprecateDomain')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SimpleWorkflowService.UndeprecateDomain'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UndeprecateDomainInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'UnknownResourceFault',
      content: { 'application/json': { schema: UnknownResourceFaultSchema } },
    },
    481: {
      description: 'DomainAlreadyExistsFault',
      content: { 'application/json': { schema: DomainAlreadyExistsFaultSchema } },
    },
    482: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
  },
})

export const postXAmzTargetSimpleWorkflowServiceUndeprecateWorkflowTypeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.UndeprecateWorkflowType',
  description:
    "<p>Undeprecates a previously deprecated <i>workflow type</i>. After a workflow type has been undeprecated, you can create new executions of that type. </p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>workflowType.name</code>: String constraint. The key is <code>swf:workflowType.name</code>.</p> </li> <li> <p> <code>workflowType.version</code>: String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href=\"https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html\">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>",
  operationId: 'UndeprecateWorkflowType',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.UndeprecateWorkflowType')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SimpleWorkflowService.UndeprecateWorkflowType'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UndeprecateWorkflowTypeInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'UnknownResourceFault',
      content: { 'application/json': { schema: UnknownResourceFaultSchema } },
    },
    481: {
      description: 'TypeAlreadyExistsFault',
      content: { 'application/json': { schema: TypeAlreadyExistsFaultSchema } },
    },
    482: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
  },
})

export const postXAmzTargetSimpleWorkflowServiceUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=SimpleWorkflowService.UntagResource',
  description: 'Remove a tag from a Amazon SWF domain.',
  operationId: 'UntagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('SimpleWorkflowService.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['SimpleWorkflowService.UntagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UntagResourceInputSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'UnknownResourceFault',
      content: { 'application/json': { schema: UnknownResourceFaultSchema } },
    },
    481: {
      description: 'LimitExceededFault',
      content: { 'application/json': { schema: LimitExceededFaultSchema } },
    },
    482: {
      description: 'OperationNotPermittedFault',
      content: { 'application/json': { schema: OperationNotPermittedFaultSchema } },
    },
  },
})
