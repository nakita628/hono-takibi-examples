import { createRoute, z } from '@hono/zod-openapi'

const InputPropertyValueSchema = z.string().openapi('InputPropertyValue')

const ComparisonOperatorSchema = z
  .enum(['GREATER', 'GREATER_OR_EQUAL', 'LESS', 'LESS_OR_EQUAL', 'EQUAL', 'NOT_EQUAL'])
  .openapi('ComparisonOperator')

const ThresholdValueSchema = z.string().openapi('ThresholdValue')

const SimpleRuleEvaluationSchema = z
  .object({
    inputPropertyValue: InputPropertyValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the input property, on the left side of the comparison operator.',
        }),
    ).exactOptional(),
    operator: ComparisonOperatorSchema.and(
      z.any().openapi({ description: 'The comparison operator.' }),
    ).exactOptional(),
    thresholdValue: ThresholdValueSchema.and(
      z
        .any()
        .openapi({
          description: 'The threshold value, on the right side of the comparison operator.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information needed to compare two values with a comparison operator.',
    required: [],
  })
  .openapi('SimpleRuleEvaluation')

type RuleEvaluationType = {
  simpleRuleEvaluation?: z.infer<typeof SimpleRuleEvaluationSchema> & { [key: string]: unknown }
}

const RequestIdSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_-]+$/)
  .min(1)
  .max(64)
  .openapi('RequestId')

const ErrorCodeSchema = z
  .enum([
    'ResourceNotFoundException',
    'InvalidRequestException',
    'InternalFailureException',
    'ServiceUnavailableException',
    'ThrottlingException',
  ])
  .openapi('ErrorCode')

const ErrorMessageSchema = z.string().openapi('ErrorMessage')

const BatchAlarmActionErrorEntrySchema = z
  .object({
    requestId: RequestIdSchema.and(
      z.any().openapi({ description: 'The request ID. Each ID must be unique within each batch.' }),
    ).exactOptional(),
    errorCode: ErrorCodeSchema.and(
      z.any().openapi({ description: 'The error code.' }),
    ).exactOptional(),
    errorMessage: ErrorMessageSchema.and(
      z.any().openapi({ description: 'A message that describes the error.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Contains error messages associated with one of the following requests:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchAcknowledgeAlarm.html">BatchAcknowledgeAlarm</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchDisableAlarm.html">BatchDisableAlarm</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchEnableAlarm.html">BatchEnableAlarm</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchResetAlarm.html">BatchResetAlarm</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchSnoozeAlarm.html">BatchSnoozeAlarm</a> </p> </li> </ul>',
    required: [],
  })
  .openapi('BatchAlarmActionErrorEntry')

const BatchAlarmActionErrorEntriesSchema = z
  .array(BatchAlarmActionErrorEntrySchema)
  .openapi('BatchAlarmActionErrorEntries')

const BatchAcknowledgeAlarmResponseSchema = z
  .object({
    errorEntries: BatchAlarmActionErrorEntriesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of errors associated with the request, or <code>null</code> if there are no errors. Each error entry contains an entry ID that helps you identify the entry that failed.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchAcknowledgeAlarmResponse')

const AlarmModelNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_-]+$/)
  .min(1)
  .max(128)
  .openapi('AlarmModelName')

const KeyValueSchema = z
  .string()
  .regex(/^[a-zA-Z0-9\-_:]+$/)
  .min(1)
  .max(128)
  .openapi('KeyValue')

const NoteSchema = z.string().max(256).openapi('Note')

const AcknowledgeAlarmActionRequestSchema = z
  .object({
    requestId: RequestIdSchema.and(
      z.any().openapi({ description: 'The request ID. Each ID must be unique within each batch.' }),
    ),
    alarmModelName: AlarmModelNameSchema.and(
      z.any().openapi({ description: 'The name of the alarm model.' }),
    ),
    keyValue: KeyValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the key used as a filter to select only the alarms associated with the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateAlarmModel.html#iotevents-CreateAlarmModel-request-key">key</a>.',
        }),
    ).exactOptional(),
    note: NoteSchema.and(
      z
        .any()
        .openapi({ description: 'The note that you can leave when you acknowledge the alarm.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['requestId', 'alarmModelName'],
    description: 'Information needed to acknowledge the alarm.',
  })
  .openapi('AcknowledgeAlarmActionRequest')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const InternalFailureExceptionSchema = z.any().openapi('InternalFailureException')

const ServiceUnavailableExceptionSchema = z.any().openapi('ServiceUnavailableException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const MessageIdSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_-]+$/)
  .min(1)
  .max(64)
  .openapi('MessageId')

const BatchDeleteDetectorErrorEntrySchema = z
  .object({
    messageId: MessageIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the message that caused the error. (See the value of the <code>"messageId"</code> in the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchDeleteDetector.html#iotevents-iotevents-data_BatchDeleteDetector-request-detectors">detectors</a> object of the <code>DeleteDetectorRequest</code>.)',
        }),
    ).exactOptional(),
    errorCode: ErrorCodeSchema.and(
      z.any().openapi({ description: 'The error code.' }),
    ).exactOptional(),
    errorMessage: ErrorMessageSchema.and(
      z.any().openapi({ description: 'A message that describes the error.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains error messages associated with the deletion request.',
    required: [],
  })
  .openapi('BatchDeleteDetectorErrorEntry')

const BatchDeleteDetectorErrorEntriesSchema = z
  .array(BatchDeleteDetectorErrorEntrySchema)
  .openapi('BatchDeleteDetectorErrorEntries')

const BatchDeleteDetectorResponseSchema = z
  .object({
    batchDeleteDetectorErrorEntries: BatchDeleteDetectorErrorEntriesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of errors associated with the request, or an empty array (<code>[]</code>) if there are no errors. Each error entry contains a <code>messageId</code> that helps you identify the entry that failed.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchDeleteDetectorResponse')

const DetectorModelNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_-]+$/)
  .min(1)
  .max(128)
  .openapi('DetectorModelName')

const DeleteDetectorRequestSchema = z
  .object({
    messageId: MessageIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID to assign to the <code>DeleteDetectorRequest</code>. Each <code>"messageId"</code> must be unique within each batch sent.',
        }),
    ),
    detectorModelName: DetectorModelNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the detector model that was used to create the detector instance.',
        }),
    ),
    keyValue: KeyValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateDetectorModel.html#iotevents-CreateDetectorModel-request-key">key</a> used to identify the detector. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['messageId', 'detectorModelName'],
    description: 'Information used to delete the detector model.',
  })
  .openapi('DeleteDetectorRequest')

const BatchDisableAlarmResponseSchema = z
  .object({
    errorEntries: BatchAlarmActionErrorEntriesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of errors associated with the request, or <code>null</code> if there are no errors. Each error entry contains an entry ID that helps you identify the entry that failed.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchDisableAlarmResponse')

const DisableAlarmActionRequestSchema = z
  .object({
    requestId: RequestIdSchema.and(
      z.any().openapi({ description: 'The request ID. Each ID must be unique within each batch.' }),
    ),
    alarmModelName: AlarmModelNameSchema.and(
      z.any().openapi({ description: 'The name of the alarm model.' }),
    ),
    keyValue: KeyValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the key used as a filter to select only the alarms associated with the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateAlarmModel.html#iotevents-CreateAlarmModel-request-key">key</a>.',
        }),
    ).exactOptional(),
    note: NoteSchema.and(
      z.any().openapi({ description: 'The note that you can leave when you disable the alarm.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['requestId', 'alarmModelName'],
    description: 'Information used to disable the alarm.',
  })
  .openapi('DisableAlarmActionRequest')

const BatchEnableAlarmResponseSchema = z
  .object({
    errorEntries: BatchAlarmActionErrorEntriesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of errors associated with the request, or <code>null</code> if there are no errors. Each error entry contains an entry ID that helps you identify the entry that failed.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchEnableAlarmResponse')

const EnableAlarmActionRequestSchema = z
  .object({
    requestId: RequestIdSchema.and(
      z.any().openapi({ description: 'The request ID. Each ID must be unique within each batch.' }),
    ),
    alarmModelName: AlarmModelNameSchema.and(
      z.any().openapi({ description: 'The name of the alarm model.' }),
    ),
    keyValue: KeyValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the key used as a filter to select only the alarms associated with the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateAlarmModel.html#iotevents-CreateAlarmModel-request-key">key</a>.',
        }),
    ).exactOptional(),
    note: NoteSchema.and(
      z.any().openapi({ description: 'The note that you can leave when you enable the alarm.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['requestId', 'alarmModelName'],
    description: 'Information needed to enable the alarm.',
  })
  .openapi('EnableAlarmActionRequest')

const BatchPutMessageErrorEntrySchema = z
  .object({
    messageId: MessageIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the message that caused the error. (See the value corresponding to the <code>"messageId"</code> key in the <code>"message"</code> object.)',
        }),
    ).exactOptional(),
    errorCode: ErrorCodeSchema.and(
      z.any().openapi({ description: 'The error code.' }),
    ).exactOptional(),
    errorMessage: ErrorMessageSchema.and(
      z.any().openapi({ description: 'A message that describes the error.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains information about the errors encountered.', required: [] })
  .openapi('BatchPutMessageErrorEntry')

const BatchPutMessageErrorEntriesSchema = z
  .array(BatchPutMessageErrorEntrySchema)
  .openapi('BatchPutMessageErrorEntries')

const BatchPutMessageResponseSchema = z
  .object({
    BatchPutMessageErrorEntries: BatchPutMessageErrorEntriesSchema.and(
      z
        .any()
        .openapi({ description: 'A list of any errors encountered when sending the messages.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchPutMessageResponse')

const EphemeralInputNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9][a-zA-Z0-9_.-]*$/)
  .min(1)
  .max(128)
  .openapi('EphemeralInputName')

const PayloadSchema = z.string().openapi('Payload')

const EpochMilliTimestampSchema = z
  .int()
  .min(1)
  .max(9223372036854776000)
  .openapi('EpochMilliTimestamp')

const TimestampValueSchema = z
  .object({
    timeInMillis: EpochMilliTimestampSchema.and(
      z.any().openapi({ description: 'The value of the timestamp, in the Unix epoch format.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains information about a timestamp.', required: [] })
  .openapi('TimestampValue')

const MessageSchema = z
  .object({
    messageId: MessageIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID to assign to the message. Within each batch sent, each <code>"messageId"</code> must be unique.',
        }),
    ),
    inputName: EphemeralInputNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the input into which the message payload is transformed.',
        }),
    ),
    payload: PayloadSchema.and(
      z
        .any()
        .openapi({
          description:
            'The payload of the message. This can be a JSON string or a Base-64-encoded string representing binary data (in which case you must decode it).',
        }),
    ),
    timestamp: TimestampValueSchema.and(
      z.any().openapi({ description: 'The timestamp associated with the message.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['messageId', 'inputName', 'payload'],
    description: 'Information about a message.',
  })
  .openapi('Message')

const BatchResetAlarmResponseSchema = z
  .object({
    errorEntries: BatchAlarmActionErrorEntriesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of errors associated with the request, or <code>null</code> if there are no errors. Each error entry contains an entry ID that helps you identify the entry that failed.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchResetAlarmResponse')

const ResetAlarmActionRequestSchema = z
  .object({
    requestId: RequestIdSchema.and(
      z.any().openapi({ description: 'The request ID. Each ID must be unique within each batch.' }),
    ),
    alarmModelName: AlarmModelNameSchema.and(
      z.any().openapi({ description: 'The name of the alarm model.' }),
    ),
    keyValue: KeyValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the key used as a filter to select only the alarms associated with the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateAlarmModel.html#iotevents-CreateAlarmModel-request-key">key</a>.',
        }),
    ).exactOptional(),
    note: NoteSchema.and(
      z.any().openapi({ description: 'The note that you can leave when you reset the alarm.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['requestId', 'alarmModelName'],
    description: 'Information needed to reset the alarm.',
  })
  .openapi('ResetAlarmActionRequest')

const BatchSnoozeAlarmResponseSchema = z
  .object({
    errorEntries: BatchAlarmActionErrorEntriesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of errors associated with the request, or <code>null</code> if there are no errors. Each error entry contains an entry ID that helps you identify the entry that failed.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchSnoozeAlarmResponse')

const SnoozeDurationSchema = z.int().openapi('SnoozeDuration')

const SnoozeAlarmActionRequestSchema = z
  .object({
    requestId: RequestIdSchema.and(
      z.any().openapi({ description: 'The request ID. Each ID must be unique within each batch.' }),
    ),
    alarmModelName: AlarmModelNameSchema.and(
      z.any().openapi({ description: 'The name of the alarm model.' }),
    ),
    keyValue: KeyValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the key used as a filter to select only the alarms associated with the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateAlarmModel.html#iotevents-CreateAlarmModel-request-key">key</a>.',
        }),
    ).exactOptional(),
    note: NoteSchema.and(
      z.any().openapi({ description: 'The note that you can leave when you snooze the alarm.' }),
    ).exactOptional(),
    snoozeDuration: SnoozeDurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The snooze time in seconds. The alarm automatically changes to the <code>NORMAL</code> state after this duration.',
        }),
    ),
  })
  .openapi({
    required: ['requestId', 'alarmModelName', 'snoozeDuration'],
    description: 'Information needed to snooze the alarm.',
  })
  .openapi('SnoozeAlarmActionRequest')

const BatchUpdateDetectorErrorEntrySchema = z
  .object({
    messageId: MessageIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>"messageId"</code> of the update request that caused the error. (The value of the <code>"messageId"</code> in the update request <code>"Detector"</code> object.)',
        }),
    ).exactOptional(),
    errorCode: ErrorCodeSchema.and(
      z.any().openapi({ description: 'The error code.' }),
    ).exactOptional(),
    errorMessage: ErrorMessageSchema.and(
      z.any().openapi({ description: 'A message that describes the error.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about the error that occurred when attempting to update a detector.',
    required: [],
  })
  .openapi('BatchUpdateDetectorErrorEntry')

const BatchUpdateDetectorErrorEntriesSchema = z
  .array(BatchUpdateDetectorErrorEntrySchema)
  .openapi('BatchUpdateDetectorErrorEntries')

const BatchUpdateDetectorResponseSchema = z
  .object({
    batchUpdateDetectorErrorEntries: BatchUpdateDetectorErrorEntriesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of those detector updates that resulted in errors. (If an error is listed here, the specific update did not occur.)',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchUpdateDetectorResponse')

const StateNameSchema = z.string().min(1).max(128).openapi('StateName')

const VariableNameSchema = z
  .string()
  .regex(/^[a-zA-Z][a-zA-Z0-9_]*$/)
  .min(1)
  .max(128)
  .openapi('VariableName')

const VariableValueSchema = z.string().min(1).max(1024).openapi('VariableValue')

const VariableDefinitionSchema = z
  .object({
    name: VariableNameSchema.and(z.any().openapi({ description: 'The name of the variable.' })),
    value: VariableValueSchema.and(
      z.any().openapi({ description: 'The new value of the variable.' }),
    ),
  })
  .openapi({ required: ['name', 'value'], description: 'The new value of the variable.' })
  .openapi('VariableDefinition')

const VariableDefinitionsSchema = z.array(VariableDefinitionSchema).openapi('VariableDefinitions')

const TimerNameSchema = z.string().min(1).max(128).openapi('TimerName')

const SecondsSchema = z.int().openapi('Seconds')

const TimerDefinitionSchema = z
  .object({
    name: TimerNameSchema.and(z.any().openapi({ description: 'The name of the timer.' })),
    seconds: SecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new setting of the timer (the number of seconds before the timer elapses).',
        }),
    ),
  })
  .openapi({ required: ['name', 'seconds'], description: 'The new setting of a timer.' })
  .openapi('TimerDefinition')

const TimerDefinitionsSchema = z.array(TimerDefinitionSchema).openapi('TimerDefinitions')

const DetectorStateDefinitionSchema = z
  .object({
    stateName: StateNameSchema.and(
      z.any().openapi({ description: 'The name of the new state of the detector (instance).' }),
    ),
    variables: VariableDefinitionsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The new values of the detector's variables. Any variable whose value isn't specified is cleared.",
        }),
    ),
    timers: TimerDefinitionsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The new values of the detector's timers. Any timer whose value isn't specified is cleared, and its timeout event won't occur.",
        }),
    ),
  })
  .openapi({
    required: ['stateName', 'variables', 'timers'],
    description: 'The new state, variable values, and timer settings of the detector (instance).',
  })
  .openapi('DetectorStateDefinition')

const UpdateDetectorRequestSchema = z
  .object({
    messageId: MessageIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID to assign to the detector update <code>"message"</code>. Each <code>"messageId"</code> must be unique within each batch sent.',
        }),
    ),
    detectorModelName: DetectorModelNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the detector model that created the detectors (instances).',
        }),
    ),
    keyValue: KeyValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the input key attribute (identifying the device or system) that caused the creation of this detector (instance).',
        }),
    ).exactOptional(),
    state: DetectorStateDefinitionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new state, variable values, and timer settings of the detector (instance).',
        }),
    ),
  })
  .openapi({
    required: ['messageId', 'detectorModelName', 'state'],
    description: 'Information used to update the detector (instance).',
  })
  .openapi('UpdateDetectorRequest')

const AlarmModelVersionSchema = z.string().min(1).max(128).openapi('AlarmModelVersion')

const AlarmStateNameSchema = z
  .enum(['DISABLED', 'NORMAL', 'ACTIVE', 'ACKNOWLEDGED', 'SNOOZE_DISABLED', 'LATCHED'])
  .openapi('AlarmStateName')

const RuleEvaluationSchema: z.ZodType<RuleEvaluationType> = z
  .lazy(() =>
    z
      .object({
        simpleRuleEvaluation: SimpleRuleEvaluationSchema.and(
          z
            .any()
            .openapi({
              description: 'Information needed to compare two values with a comparison operator.',
            }),
        ).exactOptional(),
      })
      .openapi({ description: 'Information needed to evaluate data.', required: [] }),
  )
  .openapi('RuleEvaluation')

const CustomerActionNameSchema = z
  .enum(['SNOOZE', 'ENABLE', 'DISABLE', 'ACKNOWLEDGE', 'RESET'])
  .openapi('CustomerActionName')

const SnoozeActionConfigurationSchema = z
  .object({
    snoozeDuration: SnoozeDurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The snooze time in seconds. The alarm automatically changes to the <code>NORMAL</code> state after this duration.',
        }),
    ).exactOptional(),
    note: NoteSchema.and(
      z.any().openapi({ description: 'The note that you can leave when you snooze the alarm.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the configuration information of a snooze action.',
    required: [],
  })
  .openapi('SnoozeActionConfiguration')

const EnableActionConfigurationSchema = z
  .object({
    note: NoteSchema.and(
      z.any().openapi({ description: 'The note that you can leave when you enable the alarm.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the configuration information of an enable action.',
    required: [],
  })
  .openapi('EnableActionConfiguration')

const DisableActionConfigurationSchema = z
  .object({
    note: NoteSchema.and(
      z.any().openapi({ description: 'The note that you can leave when you disable the alarm.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the configuration information of a disable action.',
    required: [],
  })
  .openapi('DisableActionConfiguration')

const AcknowledgeActionConfigurationSchema = z
  .object({
    note: NoteSchema.and(
      z
        .any()
        .openapi({ description: 'The note that you can leave when you acknowledge the alarm.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the configuration information of an acknowledge action.',
    required: [],
  })
  .openapi('AcknowledgeActionConfiguration')

const ResetActionConfigurationSchema = z
  .object({
    note: NoteSchema.and(
      z.any().openapi({ description: 'The note that you can leave when you reset the alarm.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the configuration information of a reset action.',
    required: [],
  })
  .openapi('ResetActionConfiguration')

const CustomerActionSchema = z
  .object({
    actionName: CustomerActionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the action. The action name can be one of the following values:</p> <ul> <li> <p> <code>SNOOZE</code> - When you snooze the alarm, the alarm state changes to <code>SNOOZE_DISABLED</code>.</p> </li> <li> <p> <code>ENABLE</code> - When you enable the alarm, the alarm state changes to <code>NORMAL</code>.</p> </li> <li> <p> <code>DISABLE</code> - When you disable the alarm, the alarm state changes to <code>DISABLED</code>.</p> </li> <li> <p> <code>ACKNOWLEDGE</code> - When you acknowledge the alarm, the alarm state changes to <code>ACKNOWLEDGED</code>.</p> </li> <li> <p> <code>RESET</code> - When you reset the alarm, the alarm state changes to <code>NORMAL</code>.</p> </li> </ul> <p>For more information, see the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_AlarmState.html">AlarmState</a> API.</p>',
        }),
    ).exactOptional(),
    snoozeActionConfiguration: SnoozeActionConfigurationSchema.and(
      z
        .any()
        .openapi({ description: 'Contains the configuration information of a snooze action.' }),
    ).exactOptional(),
    enableActionConfiguration: EnableActionConfigurationSchema.and(
      z
        .any()
        .openapi({ description: 'Contains the configuration information of an enable action.' }),
    ).exactOptional(),
    disableActionConfiguration: DisableActionConfigurationSchema.and(
      z
        .any()
        .openapi({ description: 'Contains the configuration information of a disable action.' }),
    ).exactOptional(),
    acknowledgeActionConfiguration: AcknowledgeActionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains the configuration information of an acknowledge action.',
        }),
    ).exactOptional(),
    resetActionConfiguration: ResetActionConfigurationSchema.and(
      z.any().openapi({ description: 'Contains the configuration information of a reset action.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains information about the action that you can take to respond to the alarm.',
    required: [],
  })
  .openapi('CustomerAction')

const EventTypeSchema = z.literal('STATE_CHANGE').openapi('EventType')

const TriggerTypeSchema = z.literal('SNOOZE_TIMEOUT').openapi('TriggerType')

const StateChangeConfigurationSchema = z
  .object({
    triggerType: TriggerTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The trigger type. If the value is <code>SNOOZE_TIMEOUT</code>, the snooze duration ends and the alarm automatically changes to the <code>NORMAL</code> state.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the configuration information of alarm state changes.',
    required: [],
  })
  .openapi('StateChangeConfiguration')

const SystemEventSchema = z
  .object({
    eventType: EventTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The event type. If the value is <code>STATE_CHANGE</code>, the event contains information about alarm state changes.',
        }),
    ).exactOptional(),
    stateChangeConfiguration: StateChangeConfigurationSchema.and(
      z
        .any()
        .openapi({ description: 'Contains the configuration information of alarm state changes.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains information about alarm state changes.', required: [] })
  .openapi('SystemEvent')

const AlarmStateSchema = z
  .object({
    stateName: AlarmStateNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the alarm state. The state name can be one of the following values:</p> <ul> <li> <p> <code>DISABLED</code> - When the alarm is in the <code>DISABLED</code> state, it isn't ready to evaluate data. To enable the alarm, you must change the alarm to the <code>NORMAL</code> state.</p> </li> <li> <p> <code>NORMAL</code> - When the alarm is in the <code>NORMAL</code> state, it's ready to evaluate data.</p> </li> <li> <p> <code>ACTIVE</code> - If the alarm is in the <code>ACTIVE</code> state, the alarm is invoked.</p> </li> <li> <p> <code>ACKNOWLEDGED</code> - When the alarm is in the <code>ACKNOWLEDGED</code> state, the alarm was invoked and you acknowledged the alarm.</p> </li> <li> <p> <code>SNOOZE_DISABLED</code> - When the alarm is in the <code>SNOOZE_DISABLED</code> state, the alarm is disabled for a specified period of time. After the snooze time, the alarm automatically changes to the <code>NORMAL</code> state. </p> </li> <li> <p> <code>LATCHED</code> - When the alarm is in the <code>LATCHED</code> state, the alarm was invoked. However, the data that the alarm is currently evaluating is within the specified range. To change the alarm to the <code>NORMAL</code> state, you must acknowledge the alarm.</p> </li> </ul>",
        }),
    ).exactOptional(),
    ruleEvaluation: RuleEvaluationSchema.and(
      z.any().openapi({ description: 'Information needed to evaluate data.' }),
    ).exactOptional(),
    customerAction: CustomerActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains information about the action that you can take to respond to the alarm.',
        }),
    ).exactOptional(),
    systemEvent: SystemEventSchema.and(
      z.any().openapi({ description: 'Contains information about alarm state changes.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains information about the current state of the alarm.',
    required: [],
  })
  .openapi('AlarmState')

const SeveritySchema = z.int().min(0).max(2147483647).openapi('Severity')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const AlarmSchema = z
  .object({
    alarmModelName: AlarmModelNameSchema.and(
      z.any().openapi({ description: 'The name of the alarm model.' }),
    ).exactOptional(),
    alarmModelVersion: AlarmModelVersionSchema.and(
      z.any().openapi({ description: 'The version of the alarm model.' }),
    ).exactOptional(),
    keyValue: KeyValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the key used as a filter to select only the alarms associated with the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateAlarmModel.html#iotevents-CreateAlarmModel-request-key">key</a>.',
        }),
    ).exactOptional(),
    alarmState: AlarmStateSchema.and(
      z
        .any()
        .openapi({ description: 'Contains information about the current state of the alarm.' }),
    ).exactOptional(),
    severity: SeveritySchema.and(
      z
        .any()
        .openapi({
          description: 'A non-negative integer that reflects the severity level of the alarm.',
        }),
    ).exactOptional(),
    creationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time the alarm was created, in the Unix epoch format.' }),
    ).exactOptional(),
    lastUpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The time the alarm was last updated, in the Unix epoch format.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains information about an alarm.', required: [] })
  .openapi('Alarm')

const DescribeAlarmResponseSchema = z
  .object({
    alarm: AlarmSchema.and(
      z.any().openapi({ description: 'Contains information about an alarm.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAlarmResponse')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const DetectorModelVersionSchema = z.string().min(1).max(128).openapi('DetectorModelVersion')

const VariableSchema = z
  .object({
    name: VariableNameSchema.and(z.any().openapi({ description: 'The name of the variable.' })),
    value: VariableValueSchema.and(
      z.any().openapi({ description: 'The current value of the variable.' }),
    ),
  })
  .openapi({ required: ['name', 'value'], description: 'The current state of the variable.' })
  .openapi('Variable')

const VariablesSchema = z.array(VariableSchema).openapi('Variables')

const TimerSchema = z
  .object({
    name: TimerNameSchema.and(z.any().openapi({ description: 'The name of the timer.' })),
    timestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The expiration time for the timer.' }),
    ),
  })
  .openapi({ required: ['name', 'timestamp'], description: 'The current state of a timer.' })
  .openapi('Timer')

const TimersSchema = z.array(TimerSchema).openapi('Timers')

const DetectorStateSchema = z
  .object({
    stateName: StateNameSchema.and(z.any().openapi({ description: 'The name of the state.' })),
    variables: VariablesSchema.and(
      z.any().openapi({ description: "The current values of the detector's variables." }),
    ),
    timers: TimersSchema.and(
      z.any().openapi({ description: "The current state of the detector's timers." }),
    ),
  })
  .openapi({
    required: ['stateName', 'variables', 'timers'],
    description: 'Information about the current state of the detector instance.',
  })
  .openapi('DetectorState')

const DetectorSchema = z
  .object({
    detectorModelName: DetectorModelNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the detector model that created this detector (instance).',
        }),
    ).exactOptional(),
    keyValue: KeyValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the key (identifying the device or system) that caused the creation of this detector (instance).',
        }),
    ).exactOptional(),
    detectorModelVersion: DetectorModelVersionSchema.and(
      z
        .any()
        .openapi({
          description: 'The version of the detector model that created this detector (instance).',
        }),
    ).exactOptional(),
    state: DetectorStateSchema.and(
      z.any().openapi({ description: 'The current state of the detector (instance).' }),
    ).exactOptional(),
    creationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time the detector (instance) was created.' }),
    ).exactOptional(),
    lastUpdateTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time the detector (instance) was last updated.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the detector (instance).', required: [] })
  .openapi('Detector')

const DescribeDetectorResponseSchema = z
  .object({
    detector: DetectorSchema.and(
      z.any().openapi({ description: 'Information about the detector (instance).' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeDetectorResponse')

const AlarmSummarySchema = z
  .object({
    alarmModelName: AlarmModelNameSchema.and(
      z.any().openapi({ description: 'The name of the alarm model.' }),
    ).exactOptional(),
    alarmModelVersion: AlarmModelVersionSchema.and(
      z.any().openapi({ description: 'The version of the alarm model.' }),
    ).exactOptional(),
    keyValue: KeyValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the key used as a filter to select only the alarms associated with the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateAlarmModel.html#iotevents-CreateAlarmModel-request-key">key</a>.',
        }),
    ).exactOptional(),
    stateName: AlarmStateNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the alarm state. The state name can be one of the following values:</p> <ul> <li> <p> <code>DISABLED</code> - When the alarm is in the <code>DISABLED</code> state, it isn't ready to evaluate data. To enable the alarm, you must change the alarm to the <code>NORMAL</code> state.</p> </li> <li> <p> <code>NORMAL</code> - When the alarm is in the <code>NORMAL</code> state, it's ready to evaluate data.</p> </li> <li> <p> <code>ACTIVE</code> - If the alarm is in the <code>ACTIVE</code> state, the alarm is invoked.</p> </li> <li> <p> <code>ACKNOWLEDGED</code> - When the alarm is in the <code>ACKNOWLEDGED</code> state, the alarm was invoked and you acknowledged the alarm.</p> </li> <li> <p> <code>SNOOZE_DISABLED</code> - When the alarm is in the <code>SNOOZE_DISABLED</code> state, the alarm is disabled for a specified period of time. After the snooze time, the alarm automatically changes to the <code>NORMAL</code> state. </p> </li> <li> <p> <code>LATCHED</code> - When the alarm is in the <code>LATCHED</code> state, the alarm was invoked. However, the data that the alarm is currently evaluating is within the specified range. To change the alarm to the <code>NORMAL</code> state, you must acknowledge the alarm.</p> </li> </ul>",
        }),
    ).exactOptional(),
    creationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time the alarm was created, in the Unix epoch format.' }),
    ).exactOptional(),
    lastUpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The time the alarm was last updated, in the Unix epoch format.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains a summary of an alarm.', required: [] })
  .openapi('AlarmSummary')

const AlarmSummariesSchema = z.array(AlarmSummarySchema).openapi('AlarmSummaries')

const NextTokenSchema = z.string().openapi('NextToken')

const ListAlarmsResponseSchema = z
  .object({
    alarmSummaries: AlarmSummariesSchema.and(
      z.any().openapi({ description: 'A list that summarizes each alarm.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token that you can use to return the next set of results, or <code>null</code> if there are no more results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAlarmsResponse')

const DetectorStateSummarySchema = z
  .object({
    stateName: StateNameSchema.and(
      z.any().openapi({ description: 'The name of the state.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the detector state.', required: [] })
  .openapi('DetectorStateSummary')

const DetectorSummarySchema = z
  .object({
    detectorModelName: DetectorModelNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the detector model that created this detector (instance).',
        }),
    ).exactOptional(),
    keyValue: KeyValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the key (identifying the device or system) that caused the creation of this detector (instance).',
        }),
    ).exactOptional(),
    detectorModelVersion: DetectorModelVersionSchema.and(
      z
        .any()
        .openapi({
          description: 'The version of the detector model that created this detector (instance).',
        }),
    ).exactOptional(),
    state: DetectorStateSummarySchema.and(
      z.any().openapi({ description: 'The current state of the detector (instance).' }),
    ).exactOptional(),
    creationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time the detector (instance) was created.' }),
    ).exactOptional(),
    lastUpdateTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time the detector (instance) was last updated.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the detector (instance).', required: [] })
  .openapi('DetectorSummary')

const DetectorSummariesSchema = z.array(DetectorSummarySchema).openapi('DetectorSummaries')

const ListDetectorsResponseSchema = z
  .object({
    detectorSummaries: DetectorSummariesSchema.and(
      z
        .any()
        .openapi({ description: 'A list of summary information about the detectors (instances).' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token that you can use to return the next set of results, or <code>null</code> if there are no more results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDetectorsResponse')

const AcknowledgeAlarmActionRequestsSchema = z
  .array(AcknowledgeAlarmActionRequestSchema)
  .min(1)
  .openapi('AcknowledgeAlarmActionRequests')

const BatchAcknowledgeAlarmRequestSchema = z
  .object({
    acknowledgeActionRequests: AcknowledgeAlarmActionRequestsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of acknowledge action requests. You can specify up to 10 requests per operation.',
        }),
    ),
  })
  .openapi({ required: ['acknowledgeActionRequests'], title: 'BatchAcknowledgeAlarmRequest' })
  .openapi('BatchAcknowledgeAlarmRequest')

const DeleteDetectorRequestsSchema = z
  .array(DeleteDetectorRequestSchema)
  .min(1)
  .openapi('DeleteDetectorRequests')

const BatchDeleteDetectorRequestSchema = z
  .object({
    detectors: DeleteDetectorRequestsSchema.and(
      z.any().openapi({ description: 'The list of one or more detectors to be deleted.' }),
    ),
  })
  .openapi({ required: ['detectors'], title: 'BatchDeleteDetectorRequest' })
  .openapi('BatchDeleteDetectorRequest')

const DisableAlarmActionRequestsSchema = z
  .array(DisableAlarmActionRequestSchema)
  .min(1)
  .openapi('DisableAlarmActionRequests')

const BatchDisableAlarmRequestSchema = z
  .object({
    disableActionRequests: DisableAlarmActionRequestsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of disable action requests. You can specify up to 10 requests per operation.',
        }),
    ),
  })
  .openapi({ required: ['disableActionRequests'], title: 'BatchDisableAlarmRequest' })
  .openapi('BatchDisableAlarmRequest')

const EnableAlarmActionRequestsSchema = z
  .array(EnableAlarmActionRequestSchema)
  .min(1)
  .openapi('EnableAlarmActionRequests')

const BatchEnableAlarmRequestSchema = z
  .object({
    enableActionRequests: EnableAlarmActionRequestsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of enable action requests. You can specify up to 10 requests per operation.',
        }),
    ),
  })
  .openapi({ required: ['enableActionRequests'], title: 'BatchEnableAlarmRequest' })
  .openapi('BatchEnableAlarmRequest')

const MessagesSchema = z.array(MessageSchema).min(1).openapi('Messages')

const BatchPutMessageRequestSchema = z
  .object({
    messages: MessagesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of messages to send. Each message has the following format: <code>\'{ "messageId": "string", "inputName": "string", "payload": "string"}\'</code> ',
        }),
    ),
  })
  .openapi({ required: ['messages'], title: 'BatchPutMessageRequest' })
  .openapi('BatchPutMessageRequest')

const ResetAlarmActionRequestsSchema = z
  .array(ResetAlarmActionRequestSchema)
  .min(1)
  .openapi('ResetAlarmActionRequests')

const BatchResetAlarmRequestSchema = z
  .object({
    resetActionRequests: ResetAlarmActionRequestsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of reset action requests. You can specify up to 10 requests per operation.',
        }),
    ),
  })
  .openapi({ required: ['resetActionRequests'], title: 'BatchResetAlarmRequest' })
  .openapi('BatchResetAlarmRequest')

const SnoozeAlarmActionRequestsSchema = z
  .array(SnoozeAlarmActionRequestSchema)
  .min(1)
  .openapi('SnoozeAlarmActionRequests')

const BatchSnoozeAlarmRequestSchema = z
  .object({
    snoozeActionRequests: SnoozeAlarmActionRequestsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of snooze action requests. You can specify up to 10 requests per operation.',
        }),
    ),
  })
  .openapi({ required: ['snoozeActionRequests'], title: 'BatchSnoozeAlarmRequest' })
  .openapi('BatchSnoozeAlarmRequest')

const UpdateDetectorRequestsSchema = z
  .array(UpdateDetectorRequestSchema)
  .min(1)
  .openapi('UpdateDetectorRequests')

const BatchUpdateDetectorRequestSchema = z
  .object({
    detectors: UpdateDetectorRequestsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of detectors (instances) to update, along with the values to update.',
        }),
    ),
  })
  .openapi({ required: ['detectors'], title: 'BatchUpdateDetectorRequest' })
  .openapi('BatchUpdateDetectorRequest')

const DescribeAlarmRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeAlarmRequest' })
  .openapi('DescribeAlarmRequest')

const DescribeDetectorRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeDetectorRequest' })
  .openapi('DescribeDetectorRequest')

const MaxResultsSchema = z.int().min(1).max(250).openapi('MaxResults')

const ListAlarmsRequestSchema = z
  .object({})
  .openapi({ title: 'ListAlarmsRequest' })
  .openapi('ListAlarmsRequest')

const ListDetectorsRequestSchema = z
  .object({})
  .openapi({ title: 'ListDetectorsRequest' })
  .openapi('ListDetectorsRequest')

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

export const postAlarmsAcknowledgeRoute = createRoute({
  method: 'post',
  path: '/alarms/acknowledge',
  description:
    'Acknowledges one or more alarms. The alarms change to the <code>ACKNOWLEDGED</code> state after you acknowledge them.',
  operationId: 'BatchAcknowledgeAlarm',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              acknowledgeActionRequests: z
                .array(AcknowledgeAlarmActionRequestSchema)
                .min(1)
                .openapi({
                  description:
                    'The list of acknowledge action requests. You can specify up to 10 requests per operation.',
                }),
            })
            .openapi({ required: ['acknowledgeActionRequests'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: BatchAcknowledgeAlarmResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postDetectorsDeleteRoute = createRoute({
  method: 'post',
  path: '/detectors/delete',
  description:
    'Deletes one or more detectors that were created. When a detector is deleted, its state will be cleared and the detector will be removed from the list of detectors. The deleted detector will no longer appear if referenced in the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_ListDetectors.html">ListDetectors</a> API call.',
  operationId: 'BatchDeleteDetector',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              detectors: z
                .array(DeleteDetectorRequestSchema)
                .min(1)
                .openapi({ description: 'The list of one or more detectors to be deleted.' }),
            })
            .openapi({ required: ['detectors'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchDeleteDetectorResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postAlarmsDisableRoute = createRoute({
  method: 'post',
  path: '/alarms/disable',
  description:
    'Disables one or more alarms. The alarms change to the <code>DISABLED</code> state after you disable them.',
  operationId: 'BatchDisableAlarm',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              disableActionRequests: z
                .array(DisableAlarmActionRequestSchema)
                .min(1)
                .openapi({
                  description:
                    'The list of disable action requests. You can specify up to 10 requests per operation.',
                }),
            })
            .openapi({ required: ['disableActionRequests'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: BatchDisableAlarmResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postAlarmsEnableRoute = createRoute({
  method: 'post',
  path: '/alarms/enable',
  description:
    'Enables one or more alarms. The alarms change to the <code>NORMAL</code> state after you enable them.',
  operationId: 'BatchEnableAlarm',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              enableActionRequests: z
                .array(EnableAlarmActionRequestSchema)
                .min(1)
                .openapi({
                  description:
                    'The list of enable action requests. You can specify up to 10 requests per operation.',
                }),
            })
            .openapi({ required: ['enableActionRequests'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: BatchEnableAlarmResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postInputsMessagesRoute = createRoute({
  method: 'post',
  path: '/inputs/messages',
  description:
    'Sends a set of messages to the IoT Events system. Each message payload is transformed into the input you specify (<code>"inputName"</code>) and ingested into any detectors that monitor that input. If multiple messages are sent, the order in which the messages are processed isn\'t guaranteed. To guarantee ordering, you must send messages one at a time and wait for a successful response.',
  operationId: 'BatchPutMessage',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              messages: z
                .array(MessageSchema)
                .min(1)
                .openapi({
                  description:
                    'The list of messages to send. Each message has the following format: <code>\'{ "messageId": "string", "inputName": "string", "payload": "string"}\'</code> ',
                }),
            })
            .openapi({ required: ['messages'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchPutMessageResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postAlarmsResetRoute = createRoute({
  method: 'post',
  path: '/alarms/reset',
  description:
    'Resets one or more alarms. The alarms return to the <code>NORMAL</code> state after you reset them.',
  operationId: 'BatchResetAlarm',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              resetActionRequests: z
                .array(ResetAlarmActionRequestSchema)
                .min(1)
                .openapi({
                  description:
                    'The list of reset action requests. You can specify up to 10 requests per operation.',
                }),
            })
            .openapi({ required: ['resetActionRequests'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: BatchResetAlarmResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postAlarmsSnoozeRoute = createRoute({
  method: 'post',
  path: '/alarms/snooze',
  description:
    'Changes one or more alarms to the snooze mode. The alarms change to the <code>SNOOZE_DISABLED</code> state after you set them to the snooze mode.',
  operationId: 'BatchSnoozeAlarm',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              snoozeActionRequests: z
                .array(SnoozeAlarmActionRequestSchema)
                .min(1)
                .openapi({
                  description:
                    'The list of snooze action requests. You can specify up to 10 requests per operation.',
                }),
            })
            .openapi({ required: ['snoozeActionRequests'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: BatchSnoozeAlarmResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postDetectorsRoute = createRoute({
  method: 'post',
  path: '/detectors',
  description:
    'Updates the state, variable values, and timer settings of one or more detectors (instances) of a specified detector model.',
  operationId: 'BatchUpdateDetector',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              detectors: z
                .array(UpdateDetectorRequestSchema)
                .min(1)
                .openapi({
                  description:
                    'The list of detectors (instances) to update, along with the values to update.',
                }),
            })
            .openapi({ required: ['detectors'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchUpdateDetectorResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getAlarmsAlarmModelNameKeyValuesIndexRoute = createRoute({
  method: 'get',
  path: '/alarms/{alarmModelName}/keyValues/',
  description: 'Retrieves information about an alarm.',
  operationId: 'DescribeAlarm',
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
      alarmModelName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'alarmModelName',
            in: 'path',
            required: true,
            description: 'The name of the alarm model.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    query: z.object({
      keyValue: z
        .string()
        .regex(/^[a-zA-Z0-9\-_:]+$/)
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'keyValue',
            in: 'query',
            required: false,
            description:
              'The value of the key used as a filter to select only the alarms associated with the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateAlarmModel.html#iotevents-CreateAlarmModel-request-key">key</a>.',
            schema: {
              type: 'string',
              pattern: '^[a-zA-Z0-9\\-_:]+$',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAlarmResponseSchema } },
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
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getDetectorsDetectorModelNameKeyValuesIndexRoute = createRoute({
  method: 'get',
  path: '/detectors/{detectorModelName}/keyValues/',
  description: 'Returns information about the specified detector (instance).',
  operationId: 'DescribeDetector',
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
      detectorModelName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'detectorModelName',
            in: 'path',
            required: true,
            description:
              'The name of the detector model whose detectors (instances) you want information about.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    query: z.object({
      keyValue: z
        .string()
        .regex(/^[a-zA-Z0-9\-_:]+$/)
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'keyValue',
            in: 'query',
            required: false,
            description:
              'A filter used to limit results to detectors (instances) created because of the given key ID.',
            schema: {
              type: 'string',
              pattern: '^[a-zA-Z0-9\\-_:]+$',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDetectorResponseSchema } },
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
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getAlarmsAlarmModelNameRoute = createRoute({
  method: 'get',
  path: '/alarms/{alarmModelName}',
  description:
    'Lists one or more alarms. The operation returns only the metadata associated with each alarm.',
  operationId: 'ListAlarms',
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
      alarmModelName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'alarmModelName',
            in: 'path',
            required: true,
            description: 'The name of the alarm model.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token that you can use to return the next set of results.',
            schema: { type: 'string' },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to be returned per request.',
            schema: { type: 'integer', minimum: 1, maximum: 250 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAlarmsResponseSchema } },
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
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getDetectorsDetectorModelNameRoute = createRoute({
  method: 'get',
  path: '/detectors/{detectorModelName}',
  description: 'Lists detectors (the instances of a detector model).',
  operationId: 'ListDetectors',
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
      detectorModelName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'detectorModelName',
            in: 'path',
            required: true,
            description: 'The name of the detector model whose detectors (instances) are listed.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    query: z.object({
      stateName: z
        .string()
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'stateName',
            in: 'query',
            required: false,
            description:
              'A filter that limits results to those detectors (instances) in the given state.',
            schema: { type: 'string', minLength: 1, maxLength: 128 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token that you can use to return the next set of results.',
            schema: { type: 'string' },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to be returned per request.',
            schema: { type: 'integer', minimum: 1, maximum: 250 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDetectorsResponseSchema } },
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
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})
