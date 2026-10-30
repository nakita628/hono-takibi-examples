import { createRoute, z } from '@hono/zod-openapi'

const NextPageSchema = z
  .object({
    after: z
      .string()
      .openapi({
        description: 'A string token used as a cursor to fetch the next page of results.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string URL that provides a direct link to the next page of results.',
        example: null,
      }),
  })
  .openapi({
    required: ['after'],
    description:
      'Specifies the paging information needed to retrieve the next set of results in a paginated API response',
    example: null,
  })
  .openapi('NextPage')

const PreviousPageSchema = z
  .object({
    before: z
      .string()
      .openapi({
        description: 'A string token used to retrieve the previous page of results.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string URL that points to the previous page of results.',
        example: null,
      }),
  })
  .openapi({
    required: ['before'],
    description:
      'specifies the paging information needed to retrieve the previous set of results in a paginated API response',
    example: null,
  })
  .openapi('PreviousPage')

const PagingSchema = z
  .object({ next: NextPageSchema.exactOptional(), prev: PreviousPageSchema.exactOptional() })
  .openapi({
    description:
      'Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.',
    example: null,
    required: [],
  })
  .openapi('Paging')

const PublicSequenceLiteResponseSchema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the sequence was created, in ISO 8601 format.',
        example: null,
      }),
    folderId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identifier of the folder containing the sequence, represented as a string.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the sequence, represented as a string.',
        example: null,
      }),
    name: z
      .string()
      .openapi({
        description: 'The name of the sequence, represented as a string.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the sequence was last updated, in ISO 8601 format.',
        example: null,
      }),
    userId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the user associated with the sequence, represented as a string.',
        example: null,
      }),
  })
  .openapi({ required: ['createdAt', 'id', 'name', 'updatedAt', 'userId'], example: null })
  .openapi('PublicSequenceLiteResponse')

const CollectionResponseWithTotalPublicSequenceLiteResponseSchema = z
  .object({
    paging: PagingSchema.exactOptional(),
    results: z
      .array(PublicSequenceLiteResponseSchema)
      .openapi({
        description:
          'An array of sequence objects, each represented by a PublicSequenceLiteResponse.',
        example: null,
      }),
    total: z
      .int32()
      .openapi({
        description: 'The total number of sequences available. It is an integer value.',
        example: null,
      }),
  })
  .openapi({ required: ['results', 'total'], example: null })
  .openapi('CollectionResponseWithTotalPublicSequenceLiteResponse')

const EmailSettingsResponseSchema = z
  .object({
    criteria: z
      .enum(['ALL', 'NONE'])
      .openapi({
        description:
          "A string representing the criteria for email settings. Valid values include 'ALL' and 'NONE'.",
        example: null,
      }),
    sellingStrategy: z
      .enum(['ACCOUNT_BASED', 'LEAD_BASED'])
      .openapi({
        description:
          "A string indicating the selling strategy for email settings. Valid values are 'LEAD_BASED' and 'ACCOUNT_BASED'.",
        example: null,
      }),
  })
  .openapi({ required: ['criteria', 'sellingStrategy'], example: null })
  .openapi('EmailSettingsResponse')

const ErrorDetailSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status code associated with the error detail, indicating the type of error encountered.',
        example: null,
      }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'Context about the error condition, provided as an object with additional properties. This can include specific details such as missing scopes.',
        example: '{missingScopes=[scope1, scope2]}',
      }),
    in: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the field or parameter in which the error was found. This provides context about where the error occurred.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate. This is a required field.',
        example: null,
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A specific category that contains more specific detail about the error, helping to further classify the error.',
        example: null,
      }),
  })
  .openapi({
    required: ['message'],
    description:
      'Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.',
    example: null,
  })
  .openapi('ErrorDetail')

const ErrorSchema = z
  .object({
    category: z
      .string()
      .openapi({
        description: 'The error category, indicating the general type of error that occurred.',
        example: null,
      }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'Context about the error condition, represented as an object with additional properties that are arrays of strings.',
        example: '{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}',
      }),
    correlationId: z
      .uuid()
      .openapi({
        description:
          'A unique identifier for the request. Include this value with any error reports or support tickets. It is formatted as a UUID.',
        example: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      }),
    errors: z
      .array(ErrorDetailSchema)
      .exactOptional()
      .openapi({
        description:
          'Further information about the error, represented as an array of ErrorDetail objects.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs containing documentation about the error or recommended remediation steps.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate.',
        example: 'An error occurred',
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error.',
        example: null,
      }),
  })
  .openapi({
    required: ['category', 'correlationId', 'message'],
    description:
      'Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.',
    example: {
      message: 'Invalid input (details will vary based on the error)',
      correlationId: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      category: 'VALIDATION_ERROR',
      links: { 'knowledge-base': 'https://www.hubspot.com/products/service/knowledge-base' },
    },
  })
  .openapi('Error')

const MeetingSettingsResponseSchema = z
  .object({
    criteria: z
      .enum(['ALL', 'NONE'])
      .openapi({
        description:
          "Specifies the criteria for meetings, with valid values being 'ALL' or 'NONE'.",
        example: null,
      }),
    sellingStrategy: z
      .enum(['ACCOUNT_BASED', 'LEAD_BASED'])
      .openapi({
        description:
          "Indicates the selling strategy employed, which can be either 'LEAD_BASED' or 'ACCOUNT_BASED'.",
        example: null,
      }),
  })
  .openapi({ required: ['criteria', 'sellingStrategy'], example: null })
  .openapi('MeetingSettingsResponse')

const PublicSequenceStepDependencyResponseSchema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when this dependency was created, in ISO 8601 format.',
        example: null,
      }),
    dependencyType: z
      .enum(['ADAPTIVE_COMPLETION', 'MANUAL_PAUSE', 'TASK_COMPLETION'])
      .openapi({
        description:
          "The type of dependency, which can be either 'TASK_COMPLETION' or 'MANUAL_PAUSE'.",
        example: null,
      }),
    id: z
      .string()
      .openapi({ description: 'The unique identifier for this dependency.', example: null }),
    reliesOnSequenceStepId: z
      .string()
      .openapi({
        description: 'The unique identifier of the sequence step that this dependency relies on.',
        example: null,
      }),
    reliesOnStepOrder: z
      .int32()
      .openapi({
        description: 'The order number of the step that this dependency relies on.',
        example: null,
      }),
    requiredBySequenceStepId: z
      .string()
      .openapi({
        description: 'The unique identifier of the sequence step that requires this dependency.',
        example: null,
      }),
    requiredByStepOrder: z
      .int32()
      .openapi({
        description: 'The order number of the step that requires this dependency.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when this dependency was last updated, in ISO 8601 format.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'createdAt',
      'dependencyType',
      'id',
      'reliesOnSequenceStepId',
      'reliesOnStepOrder',
      'requiredBySequenceStepId',
      'requiredByStepOrder',
      'updatedAt',
    ],
    example: null,
  })
  .openapi('PublicSequenceStepDependencyResponse')

const PublicSequenceSettingsResponseSchema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time when the sequence settings were created, in ISO 8601 format.',
        example: null,
      }),
    eligibleFollowUpDays: z
      .enum(['BUSINESS_DAYS', 'EVERYDAY', 'WEEKDAYS_ONLY'])
      .openapi({
        description:
          "Specifies the days eligible for follow-ups. Valid values include 'EVERYDAY', 'BUSINESS_DAYS', and 'WEEKDAYS_ONLY'.",
        example: null,
      }),
    id: z
      .string()
      .openapi({ description: 'The unique identifier for the sequence settings.', example: null }),
    individualTaskRemindersEnabled: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether individual task reminders are enabled.',
        example: null,
      }),
    sellingStrategy: z
      .enum(['ACCOUNT_BASED', 'LEAD_BASED'])
      .openapi({
        description:
          "The strategy used for selling, which can be either 'LEAD_BASED' or 'ACCOUNT_BASED'.",
        example: null,
      }),
    sendWindowEndMinute: z
      .int32()
      .openapi({
        description:
          'The ending minute of the window during which emails can be sent, represented as an integer.',
        example: null,
      }),
    sendWindowStartMinute: z
      .int32()
      .openapi({
        description:
          'The starting minute of the window during which emails can be sent, represented as an integer.',
        example: null,
      }),
    taskReminderMinute: z
      .int32()
      .openapi({
        description: 'The minute at which task reminders are sent, represented as an integer.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time when the sequence settings were last updated, in ISO 8601 format.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'createdAt',
      'eligibleFollowUpDays',
      'id',
      'individualTaskRemindersEnabled',
      'sellingStrategy',
      'sendWindowEndMinute',
      'sendWindowStartMinute',
      'taskReminderMinute',
      'updatedAt',
    ],
    example: null,
  })
  .openapi('PublicSequenceSettingsResponse')

const PublicEmailPatternResponseSchema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when this email pattern was created, in ISO 8601 format.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for this email pattern. It is a string.',
        example: null,
      }),
    templateId: z
      .string()
      .openapi({
        description:
          'The identifier of the email template associated with this pattern. It is a string.',
        example: null,
      }),
    threadEmailToStepOrder: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'An integer representing the order of the step to which this email pattern is threaded.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time when this email pattern was last updated, in ISO 8601 format.',
        example: null,
      }),
  })
  .openapi({ required: ['createdAt', 'id', 'templateId', 'updatedAt'], example: null })
  .openapi('PublicEmailPatternResponse')

const PublicTaskPatternResponseV2Schema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when this task pattern was created, in ISO 8601 format.',
        example: null,
      }),
    id: z
      .string()
      .openapi({ description: 'The unique identifier for this task pattern.', example: null }),
    notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Additional notes or description associated with the task.',
        example: null,
      }),
    queueId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The identifier for the queue to which this task belongs.',
        example: null,
      }),
    subject: z
      .string()
      .exactOptional()
      .openapi({ description: 'The subject or title of the task.', example: null }),
    taskPriority: z
      .enum(['HIGH', 'LOW', 'MEDIUM', 'NONE'])
      .openapi({
        description:
          "The priority level of the task, with valid values being 'NONE', 'HIGH', 'MEDIUM', or 'LOW'.",
        example: null,
      }),
    taskType: z
      .enum(['CALL', 'EMAIL', 'LINKED_IN_CONNECT', 'LINKED_IN_MESSAGE', 'MEETING', 'TODO'])
      .openapi({
        description:
          "The type of task, which can be one of the following: 'CALL', 'MEETING', 'EMAIL', 'TODO', 'LINKED_IN_CONNECT', or 'LINKED_IN_MESSAGE'.",
        example: null,
      }),
    templateId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The identifier for the template used in this task.',
        example: null,
      }),
    threadEmailToStepOrder: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'An integer representing the order of the step to which this email thread relates.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time when this task pattern was last updated, in ISO 8601 format.',
        example: null,
      }),
  })
  .openapi({
    required: ['createdAt', 'id', 'taskPriority', 'taskType', 'updatedAt'],
    example: null,
  })
  .openapi('PublicTaskPatternResponseV2')

const PublicSequenceStepResponseV2Schema = z
  .object({
    actionType: z
      .enum(['ADAPTIVE_CONTAINER', 'EMAIL', 'FINISH_ENROLLMENT', 'TASK'])
      .openapi({
        description:
          "The type of action to be performed in this step. Valid values include 'EMAIL', 'TASK', and 'FINISH_ENROLLMENT'.",
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when this step was created, in ISO 8601 format.',
        example: null,
      }),
    delayMillis: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The delay before this step is executed, specified in milliseconds.',
        example: null,
      }),
    emailPattern: PublicEmailPatternResponseSchema.exactOptional(),
    id: z
      .string()
      .openapi({ description: 'The unique identifier for this sequence step.', example: null }),
    stepOrder: z
      .int32()
      .openapi({
        description: 'An integer indicating the order of this step within the sequence.',
        example: null,
      }),
    taskPattern: PublicTaskPatternResponseV2Schema.exactOptional(),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when this step was last updated, in ISO 8601 format.',
        example: null,
      }),
  })
  .openapi({
    required: ['actionType', 'createdAt', 'delayMillis', 'id', 'stepOrder', 'updatedAt'],
    example: null,
  })
  .openapi('PublicSequenceStepResponseV2')

const PublicSequenceResponseV2Schema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the sequence was created, in ISO 8601 format.',
        example: null,
      }),
    dependencies: z
      .array(PublicSequenceStepDependencyResponseSchema)
      .openapi({
        description:
          'An array of dependencies between steps in the sequence, each represented by a PublicSequenceStepDependencyResponse object.',
        example: null,
      }),
    folderId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The identifier for the folder containing the sequence.',
        example: null,
      }),
    id: z
      .string()
      .openapi({ description: 'The unique identifier for the sequence.', example: null }),
    name: z.string().openapi({ description: 'The name of the sequence.', example: null }),
    settings: PublicSequenceSettingsResponseSchema.exactOptional(),
    steps: z
      .array(PublicSequenceStepResponseV2Schema)
      .openapi({
        description:
          'An array of steps included in the sequence, each represented by a PublicSequenceStepResponseV2 object.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the sequence was last updated, in ISO 8601 format.',
        example: null,
      }),
    userId: z
      .string()
      .openapi({
        description: 'The unique identifier of the user who owns the sequence.',
        example: null,
      }),
  })
  .openapi({
    required: ['createdAt', 'dependencies', 'id', 'name', 'steps', 'updatedAt', 'userId'],
    example: null,
  })
  .openapi('PublicSequenceResponseV2')

const PublicCreateSequenceUserViewResponseSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email address of the user. It is a string.', example: null }),
    firstName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The first name of the user. It is a string.', example: null }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last name of the user. It is a string.', example: null }),
  })
  .openapi({ example: null, required: [] })
  .openapi('PublicCreateSequenceUserViewResponse')

const PublicCreateSequenceResponseSchema = z
  .object({
    sequence: PublicSequenceResponseV2Schema,
    userView: PublicCreateSequenceUserViewResponseSchema.exactOptional(),
  })
  .openapi({ required: ['sequence'], example: null })
  .openapi('PublicCreateSequenceResponse')

const PublicSequenceCompanyMetricsResponseSchema = z
  .object({
    companiesEngaged: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The number of companies that have engaged with the sequence. An integer in int64 format.',
        example: null,
      }),
    companiesEnrolled: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The number of companies that have been enrolled in the sequence. An integer in int64 format.',
        example: null,
      }),
    companiesScheduledMeeting: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The number of companies that have scheduled a meeting as a result of the sequence. An integer in int64 format.',
        example: null,
      }),
    contactsEnrolledWithCompanyId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The number of contacts enrolled in the sequence that are associated with a company ID. An integer in int64 format.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'companiesEngaged',
      'companiesEnrolled',
      'companiesScheduledMeeting',
      'contactsEnrolledWithCompanyId',
    ],
    example: null,
  })
  .openapi('PublicSequenceCompanyMetricsResponse')

const PublicSequenceEmailPatternRequestSchema = z
  .object({
    templateId: z
      .string()
      .openapi({
        description:
          'The unique identifier for the email template to be used. It is a string and is required.',
        example: null,
      }),
    threadEmailToStepOrder: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'An integer indicating the step order to which the email should be threaded. This property is optional.',
        example: null,
      }),
  })
  .openapi({ required: ['templateId'], example: null })
  .openapi('PublicSequenceEmailPatternRequest')

const PublicSequenceEngagementTriggersRequestSchema = z
  .object({
    numberOfClicks: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'An integer representing the number of times links within an email must be clicked to trigger an engagement action.',
        example: null,
      }),
    numberOfOpens: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'An integer representing the number of times an email must be opened to trigger an engagement action.',
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('PublicSequenceEngagementTriggersRequest')

const PublicSequenceEnrollmentLiteResponseSchema = z
  .object({
    enrolledAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time when the contact was enrolled in the sequence, in ISO 8601 format.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the sequence enrollment.',
        example: null,
      }),
    toEmail: z
      .string()
      .openapi({
        description: 'The email address of the contact who is enrolled in the sequence.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time when the sequence enrollment was last updated, in ISO 8601 format.',
        example: null,
      }),
  })
  .openapi({ required: ['enrolledAt', 'id', 'toEmail', 'updatedAt'], example: null })
  .openapi('PublicSequenceEnrollmentLiteResponse')

const PublicSequenceEnrollmentRequestSchema = z
  .object({
    contactId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the contact to be enrolled in the sequence. It is a string.',
        example: null,
      }),
    senderAliasAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "An optional alias email address that can be used as the sender's address. It is a string.",
        example: null,
      }),
    senderEmail: z
      .string()
      .openapi({
        description:
          'The email address of the sender responsible for the sequence enrollment. It is a string.',
        example: null,
      }),
    sequenceId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the sequence in which the contact is to be enrolled. It is a string.',
        example: null,
      }),
  })
  .openapi({ required: ['contactId', 'senderEmail', 'sequenceId'], example: null })
  .openapi('PublicSequenceEnrollmentRequest')

const PublicSequenceEnrollmentResponseSchema = z
  .object({
    enrolledAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time when the contact was enrolled in the sequence, in ISO 8601 format.',
        example: null,
      }),
    enrolledBy: z
      .string()
      .openapi({
        description: 'The unique identifier of the user who enrolled the contact in the sequence.',
        example: null,
      }),
    enrolledByEmail: z
      .string()
      .openapi({
        description: 'The email address of the user who enrolled the contact in the sequence.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the sequence enrollment.',
        example: null,
      }),
    sequenceId: z
      .string()
      .openapi({
        description: 'The unique identifier of the sequence in which the contact is enrolled.',
        example: null,
      }),
    sequenceName: z
      .string()
      .openapi({
        description: 'The name of the sequence in which the contact is enrolled.',
        example: null,
      }),
    toEmail: z
      .string()
      .openapi({
        description: 'The email address of the contact enrolled in the sequence.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time when the sequence enrollment was last updated, in ISO 8601 format.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'enrolledAt',
      'enrolledBy',
      'enrolledByEmail',
      'id',
      'sequenceId',
      'sequenceName',
      'toEmail',
      'updatedAt',
    ],
    example: null,
  })
  .openapi('PublicSequenceEnrollmentResponse')

const PublicSequenceEnrollmentStatusByStepResponseSchema = z
  .object({
    count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'An integer in int64 format representing the number of enrollments at the current step.',
        example: null,
      }),
    currentStepOrder: z
      .int32()
      .openapi({
        description: 'An integer indicating the order of the current step in the sequence.',
        example: null,
      }),
    enrollmentStatus: z
      .string()
      .openapi({
        description: 'A string representing the status of the enrollment at the current step.',
        example: null,
      }),
  })
  .openapi({ required: ['count', 'currentStepOrder', 'enrollmentStatus'], example: null })
  .openapi('PublicSequenceEnrollmentStatusByStepResponse')

const PublicSequenceStepPerformanceResponseSchema = z
  .object({
    calls: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'An integer (int64) representing the number of calls made in this step.',
        example: null,
      }),
    callsConnected: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'An integer (int64) indicating the number of calls that were successfully connected in this step.',
        example: null,
      }),
    clicked: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'An integer (int64) showing the number of times links in emails from this step have been clicked.',
        example: null,
      }),
    executionCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'An integer (int64) indicating the number of times this step has been executed.',
        example: null,
      }),
    meetingsBooked: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'An integer (int64) representing the number of meetings booked as a result of this step.',
        example: null,
      }),
    onTimeTaskCompletionCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'An integer (int64) representing the number of tasks completed on time in this step.',
        example: null,
      }),
    onTimeTaskCompletionSum: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'An integer (int64) indicating the sum of on-time task completions for this step.',
        example: null,
      }),
    opened: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'An integer (int64) indicating how many times emails from this step have been opened.',
        example: null,
      }),
    personalizationRateAvg: z
      .number()
      .exactOptional()
      .openapi({
        description: 'A number representing the average personalization rate for this step.',
        example: null,
      }),
    personalizationRateCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'An integer (int64) indicating the count of personalized actions in this step.',
        example: null,
      }),
    replied: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'An integer (int64) representing the number of replies received from emails sent in this step.',
        example: null,
      }),
    stepKey: z
      .string()
      .openapi({ description: 'A string that uniquely identifies the step.', example: null }),
    stepOrder: z
      .int32()
      .openapi({
        description: 'An integer representing the order of the step within the sequence.',
        example: null,
      }),
    tasksCompleted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'An integer (int64) indicating the number of tasks completed in this step.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'calls',
      'callsConnected',
      'clicked',
      'executionCount',
      'meetingsBooked',
      'onTimeTaskCompletionCount',
      'onTimeTaskCompletionSum',
      'opened',
      'personalizationRateCount',
      'replied',
      'stepKey',
      'stepOrder',
      'tasksCompleted',
    ],
    example: null,
  })
  .openapi('PublicSequenceStepPerformanceResponse')

const PublicSequencePerformanceSummaryResponseSchema = z
  .object({
    associatedDeals: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The number of deals associated with the sequence. Represented as an integer in int64 format.',
        example: null,
      }),
    bounced: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The number of emails in the sequence that bounced. Represented as an integer in int64 format.',
        example: null,
      }),
    clicked: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The number of times links in the sequence emails have been clicked. Represented as an integer in int64 format.',
        example: null,
      }),
    contacts: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The total number of contacts associated with the sequence. Represented as an integer in int64 format.',
        example: null,
      }),
    dealsClosed: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The number of deals closed as a result of the sequence. Represented as an integer in int64 format.',
        example: null,
      }),
    engaged: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The number of contacts who engaged with the sequence. Represented as an integer in int64 format.',
        example: null,
      }),
    enrolled: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The number of contacts enrolled in the sequence. Represented as an integer in int64 format.',
        example: null,
      }),
    meetingsBooked: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The number of meetings booked as a result of the sequence. Represented as an integer in int64 format.',
        example: null,
      }),
    noResponse: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The number of contacts who did not respond to the sequence. Represented as an integer in int64 format.',
        example: null,
      }),
    opened: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The number of times emails in the sequence have been opened. Represented as an integer in int64 format.',
        example: null,
      }),
    replied: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The number of replies received from emails in the sequence. Represented as an integer in int64 format.',
        example: null,
      }),
    totalRevenue: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The total revenue generated from the sequence. Represented as a number.',
        example: null,
      }),
    unsubscribed: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The number of contacts who unsubscribed from the sequence. Represented as an integer in int64 format.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'bounced',
      'clicked',
      'contacts',
      'engaged',
      'enrolled',
      'meetingsBooked',
      'noResponse',
      'opened',
      'replied',
      'unsubscribed',
    ],
    example: null,
  })
  .openapi('PublicSequencePerformanceSummaryResponse')

const PublicSequenceTimelinePointResponseSchema = z
  .object({
    enrolledAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The time at which the enrollment occurred, represented as a Unix timestamp in milliseconds.',
        example: null,
      }),
    enrollments: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The total number of enrollments recorded at this point in the sequence timeline. Represented as an integer.',
        example: null,
      }),
    meetingsBooked: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The number of meetings booked at this point in the sequence timeline. Represented as an integer.',
        example: null,
      }),
  })
  .openapi({ required: ['enrolledAt', 'enrollments', 'meetingsBooked'], example: null })
  .openapi('PublicSequenceTimelinePointResponse')

const PublicSequencePerformanceResponseSchema = z
  .object({
    companyMetrics: PublicSequenceCompanyMetricsResponseSchema.exactOptional(),
    sequenceId: z
      .string()
      .openapi({
        description: 'The unique identifier for the sequence, represented as a string.',
        example: null,
      }),
    statusByStep: z
      .array(PublicSequenceEnrollmentStatusByStepResponseSchema)
      .openapi({
        description:
          'An array of objects detailing the enrollment status for each step in the sequence, including the count and current step order.',
        example: null,
      }),
    steps: z
      .array(PublicSequenceStepPerformanceResponseSchema)
      .openapi({
        description:
          'An array of objects, each representing the performance metrics for individual steps within the sequence.',
        example: null,
      }),
    summary: PublicSequencePerformanceSummaryResponseSchema,
    timeline: z
      .array(PublicSequenceTimelinePointResponseSchema)
      .openapi({
        description:
          'An array of objects representing points in time with specific performance metrics, such as enrollments and meetings booked.',
        example: null,
      }),
  })
  .openapi({
    required: ['sequenceId', 'statusByStep', 'steps', 'summary', 'timeline'],
    example: null,
  })
  .openapi('PublicSequencePerformanceResponse')

const PublicSequenceStepDependencyRequestSchema = z
  .object({
    branchNumber: z
      .int32()
      .openapi({
        description: 'An integer indicating the branch number associated with the dependency.',
        example: null,
      }),
    dependencyType: z
      .enum(['ADAPTIVE_COMPLETION', 'MANUAL_PAUSE', 'TASK_COMPLETION'])
      .openapi({
        description:
          "A string indicating the type of dependency. Valid values include 'TASK_COMPLETION' and 'MANUAL_PAUSE'.",
        example: null,
      }),
    reliesOnStepOrder: z
      .int32()
      .openapi({
        description:
          'An integer representing the order of the step that is relied upon by another step.',
        example: null,
      }),
    requiredByStepOrder: z
      .int32()
      .openapi({
        description: 'An integer representing the order of the step that requires the dependency.',
        example: null,
      }),
  })
  .openapi({
    required: ['branchNumber', 'dependencyType', 'reliesOnStepOrder', 'requiredByStepOrder'],
    example: null,
  })
  .openapi('PublicSequenceStepDependencyRequest')

const UnenrollmentSettingsResponseSchema = z
  .object({
    emailSettings: EmailSettingsResponseSchema,
    meetingSettings: MeetingSettingsResponseSchema,
  })
  .openapi({ required: ['emailSettings', 'meetingSettings'], example: null })
  .openapi('UnenrollmentSettingsResponse')

const PublicSequenceSettingsRequestSchema = z
  .object({
    eligibleFollowUpDays: z
      .enum(['BUSINESS_DAYS', 'EVERYDAY', 'WEEKDAYS_ONLY'])
      .openapi({
        description:
          "Specifies the days on which follow-ups are eligible to be sent. Valid values include 'EVERYDAY', 'BUSINESS_DAYS', and 'WEEKDAYS_ONLY'.",
        example: null,
      }),
    individualTaskRemindersEnabled: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether individual task reminders are enabled.',
        example: null,
      }),
    sellingStrategy: z
      .enum(['ACCOUNT_BASED', 'LEAD_BASED'])
      .openapi({
        description:
          "Defines the selling strategy to be used. Valid values include 'LEAD_BASED' and 'ACCOUNT_BASED'.",
        example: null,
      }),
    sendWindowEndMinute: z
      .int32()
      .openapi({
        description:
          'An integer representing the end minute of the window during which emails can be sent.',
        example: null,
      }),
    sendWindowStartMinute: z
      .int32()
      .openapi({
        description:
          'An integer representing the start minute of the window during which emails can be sent.',
        example: null,
      }),
    taskCreationMinute: z
      .int32()
      .openapi({
        description: 'An integer indicating the minute at which tasks should be created.',
        example: null,
      }),
    taskReminderMinute: z
      .int32()
      .openapi({
        description: 'An integer indicating the minute at which task reminders should be sent.',
        example: null,
      }),
    unenrollmentSettings: UnenrollmentSettingsResponseSchema,
    useThreadedFollowUps: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether follow-ups should be threaded.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'eligibleFollowUpDays',
      'individualTaskRemindersEnabled',
      'sellingStrategy',
      'sendWindowEndMinute',
      'sendWindowStartMinute',
      'taskCreationMinute',
      'taskReminderMinute',
      'unenrollmentSettings',
      'useThreadedFollowUps',
    ],
    example: null,
  })
  .openapi('PublicSequenceSettingsRequest')

const PublicSequenceTaskPatternRequestSchema = z
  .object({
    notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string containing additional notes or details about the task.',
        example: null,
      }),
    queueId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string identifier for the queue to which the task belongs.',
        example: null,
      }),
    subject: z
      .string()
      .exactOptional()
      .openapi({ description: 'A string representing the subject of the task.', example: null }),
    taskPriority: z
      .enum(['HIGH', 'LOW', 'MEDIUM', 'NONE'])
      .openapi({
        description:
          "The priority level of the task. Valid values include 'NONE', 'HIGH', 'MEDIUM', and 'LOW'.",
        example: null,
      }),
    taskType: z
      .enum(['CALL', 'EMAIL', 'LINKED_IN_CONNECT', 'LINKED_IN_MESSAGE', 'MEETING', 'TODO'])
      .openapi({
        description:
          "The type of task to be performed. Valid values include 'CALL', 'MEETING', 'EMAIL', 'TODO', 'LINKED_IN_CONNECT', and 'LINKED_IN_MESSAGE'.",
        example: null,
      }),
    templateId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string identifier for the template associated with the task.',
        example: null,
      }),
    threadEmailToStepOrder: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'An integer representing the order of the step to which the email should be threaded.',
        example: null,
      }),
  })
  .openapi({ required: ['taskPriority', 'taskType'], example: null })
  .openapi('PublicSequenceTaskPatternRequest')

const PublicSequenceStepVariantRequestSchema = z
  .object({
    activated: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether this variant is active.',
        example: null,
      }),
    emailPattern: PublicSequenceEmailPatternRequestSchema.exactOptional(),
    taskPattern: PublicSequenceTaskPatternRequestSchema.exactOptional(),
    variantOrdinal: z
      .int32()
      .openapi({
        description:
          'An integer indicating the order of this variant among other variants of the same step.',
        example: null,
      }),
  })
  .openapi({ required: ['activated', 'variantOrdinal'], example: null })
  .openapi('PublicSequenceStepVariantRequest')

const PublicSequenceStepRequestSchema = z
  .object({
    actionType: z
      .enum(['ADAPTIVE_CONTAINER', 'EMAIL', 'FINISH_ENROLLMENT', 'TASK'])
      .openapi({
        description:
          "A string indicating the type of action to be performed in this step. Valid values include 'EMAIL', 'TASK', and 'FINISH_ENROLLMENT'.",
        example: null,
      }),
    branchNumber: z
      .int32()
      .openapi({
        description:
          'An integer representing the branch number of this step, used for branching logic in sequences.',
        example: null,
      }),
    delayMillis: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'An integer representing the delay in milliseconds before this step is executed.',
        example: null,
      }),
    delayMillisMax: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'An integer specifying the maximum delay in milliseconds for this step.',
        example: null,
      }),
    delayMillisMin: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'An integer specifying the minimum delay in milliseconds for this step.',
        example: null,
      }),
    dynamic: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether the step is dynamic, allowing for conditional execution based on certain criteria.',
        example: null,
      }),
    emailPattern: PublicSequenceEmailPatternRequestSchema.exactOptional(),
    stepOrder: z
      .int32()
      .openapi({
        description: 'An integer indicating the order of the step within the sequence.',
        example: null,
      }),
    taskPattern: PublicSequenceTaskPatternRequestSchema.exactOptional(),
    variants: z
      .array(PublicSequenceStepVariantRequestSchema)
      .openapi({
        description:
          'An array of PublicSequenceStepVariantRequest objects, each representing a variant of this step.',
        example: null,
      }),
  })
  .openapi({
    required: ['actionType', 'branchNumber', 'delayMillis', 'dynamic', 'stepOrder', 'variants'],
    example: null,
  })
  .openapi('PublicSequenceStepRequest')

const PublicSequenceRequestSchema = z
  .object({
    dependencies: z
      .array(PublicSequenceStepDependencyRequestSchema)
      .openapi({
        description:
          'An array of dependencies between sequence steps, each defined by the PublicSequenceStepDependencyRequest schema.',
        example: null,
      }),
    dynamic: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the sequence is dynamic.',
        example: null,
      }),
    engagementTriggers: PublicSequenceEngagementTriggersRequestSchema.exactOptional(),
    folderId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The identifier of the folder where the sequence is stored. It is a string.',
        example: null,
      }),
    name: z
      .string()
      .openapi({ description: 'The name of the sequence. It is a string.', example: null }),
    settings: PublicSequenceSettingsRequestSchema,
    steps: z
      .array(PublicSequenceStepRequestSchema)
      .openapi({
        description:
          'An array of steps in the sequence, each defined by the PublicSequenceStepRequest schema.',
        example: null,
      }),
  })
  .openapi({ required: ['dependencies', 'dynamic', 'name', 'settings', 'steps'], example: null })
  .openapi('PublicSequenceRequest')

const PublicTaskPatternResponseSchema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when this task pattern was created, in ISO 8601 format.',
        example: null,
      }),
    id: z
      .string()
      .openapi({ description: 'The unique identifier for this task pattern.', example: null }),
    notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Additional notes related to the task, represented as a string.',
        example: null,
      }),
    queueId: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the ID of the queue to which this task belongs.',
        example: null,
      }),
    subject: z
      .string()
      .exactOptional()
      .openapi({ description: 'The subject of the task, represented as a string.', example: null }),
    taskPriority: z
      .enum(['HIGH', 'LOW', 'MEDIUM', 'NONE'])
      .openapi({
        description:
          "The priority level of the task, with valid values including 'NONE', 'HIGH', 'MEDIUM', and 'LOW'.",
        example: null,
      }),
    taskType: z
      .enum(['CALL', 'EMAIL', 'LINKED_IN_CONNECT', 'LINKED_IN_MESSAGE', 'MEETING', 'TODO'])
      .openapi({
        description:
          "The type of task, with valid values including 'CALL', 'MEETING', 'EMAIL', 'TODO', 'LINKED_IN_CONNECT', and 'LINKED_IN_MESSAGE'.",
        example: null,
      }),
    templateId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'An integer representing the ID of the template associated with this task.',
        example: null,
      }),
    threadEmailToStepOrder: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer indicating the step order to which this email task is threaded.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time when this task pattern was last updated, in ISO 8601 format.',
        example: null,
      }),
  })
  .openapi({
    required: ['createdAt', 'id', 'taskPriority', 'taskType', 'updatedAt'],
    example: null,
  })
  .openapi('PublicTaskPatternResponse')

const PublicSequenceStepResponseSchema = z
  .object({
    actionType: z
      .enum(['ADAPTIVE_CONTAINER', 'EMAIL', 'FINISH_ENROLLMENT', 'TASK'])
      .openapi({
        description:
          "The type of action to be performed in this step. Valid values include 'EMAIL', 'TASK', and 'FINISH_ENROLLMENT'.",
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when this step was created, in ISO 8601 format.',
        example: null,
      }),
    delayMillis: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The delay before executing this step, specified in milliseconds as a 64-bit integer.',
        example: null,
      }),
    emailPattern: PublicEmailPatternResponseSchema.exactOptional(),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for this sequence step, represented as a string.',
        example: null,
      }),
    stepOrder: z
      .int32()
      .openapi({
        description: 'An integer indicating the order of this step within the sequence.',
        example: null,
      }),
    taskPattern: PublicTaskPatternResponseSchema.exactOptional(),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when this step was last updated, in ISO 8601 format.',
        example: null,
      }),
  })
  .openapi({
    required: ['actionType', 'createdAt', 'delayMillis', 'id', 'stepOrder', 'updatedAt'],
    example: null,
  })
  .openapi('PublicSequenceStepResponse')

const PublicSequenceResponseSchema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the sequence was created, in ISO 8601 format.',
        example: null,
      }),
    dependencies: z
      .array(PublicSequenceStepDependencyResponseSchema)
      .openapi({
        description:
          'An array of dependencies between sequence steps, each represented by a PublicSequenceStepDependencyResponse object.',
        example: null,
      }),
    folderId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier for the folder containing the sequence.',
        example: null,
      }),
    id: z
      .string()
      .openapi({ description: 'The unique identifier for the sequence.', example: null }),
    name: z.string().openapi({ description: 'The name of the sequence.', example: null }),
    settings: PublicSequenceSettingsResponseSchema.exactOptional(),
    steps: z
      .array(PublicSequenceStepResponseSchema)
      .openapi({
        description:
          'An array of steps included in the sequence, each represented by a PublicSequenceStepResponse object.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the sequence was last updated, in ISO 8601 format.',
        example: null,
      }),
    userId: z
      .string()
      .openapi({
        description: 'The unique identifier of the user who owns the sequence.',
        example: null,
      }),
  })
  .openapi({
    required: ['createdAt', 'dependencies', 'id', 'name', 'steps', 'updatedAt', 'userId'],
    example: null,
  })
  .openapi('PublicSequenceResponse')

const ErrorResponse = {
  description: 'An error occurred.',
  content: { '*/*': { schema: ErrorSchema, example: null } },
}

const DeveloperHapikeySecurityScheme = { type: 'apiKey', name: 'hapikey', in: 'query' }

const Oauth2SecurityScheme = {
  type: 'oauth2',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://app.hubspot.com/oauth/authorize',
      tokenUrl: 'https://api.hubapi.com/oauth/v1/token',
      scopes: {
        'automation.sequences.enrollments.write': '',
        'automation.sequences.read': '',
        'automation.sequences.write': '',
      },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const getAutomationSequences202609Route = createRoute({
  method: 'get',
  path: '/automation/sequences/2026-09',
  tags: ['Basic'],
  summary: 'List sequences',
  description:
    'Retrieve a list of sequences for a specified user in your HubSpot account. This endpoint allows you to filter sequences by user ID and optionally paginate through results using a cursor. It is useful for managing and reviewing sequences associated with a particular user. ',
  operationId: 'get-/automation/sequences/2026-09',
  request: {
    query: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'query',
            description:
              'The unique identifier of the user whose sequences are to be retrieved. This parameter is required.',
            required: true,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description:
              "The paging cursor token for pagination. Use the value from the previous response's paging.next.after field to get the next set of results.",
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      limit: z
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
            name: 'limit',
            in: 'query',
            description: 'The maximum number of results to display per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Filter sequences by their name.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: CollectionResponseWithTotalPublicSequenceLiteResponseSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const postAutomationSequences202609EnrollmentsRoute = createRoute({
  method: 'post',
  path: '/automation/sequences/2026-09/enrollments',
  tags: ['Enrollment'],
  summary: 'Enroll a contact',
  description:
    'Enroll a contact into a sequence using the specified sequence ID. This operation requires the user ID to be provided as a query parameter. The request body must include the contact ID, sender email, and sequence ID. This endpoint is useful for automating the enrollment of contacts into predefined sequences for streamlined communication and follow-up processes.',
  operationId: 'post-/automation/sequences/2026-09/enrollments',
  request: {
    query: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'query',
            description:
              'The unique identifier of the user performing the enrollment. This parameter is required.',
            required: true,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: {
        'application/json': { schema: PublicSequenceEnrollmentRequestSchema, example: null },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: PublicSequenceEnrollmentLiteResponseSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const getAutomationSequences202609EnrollmentsContactContactIdRoute = createRoute({
  method: 'get',
  path: '/automation/sequences/2026-09/enrollments/contact/{contactId}',
  tags: ['Enrollment'],
  summary: 'Retrieve enrollment details',
  description:
    "Retrieve the sequence enrollment details for a specific contact in your HubSpot account. This endpoint provides information about the sequence a contact is enrolled in, including enrollment dates and the sequence's name and ID.",
  operationId: 'get-/automation/sequences/2026-09/enrollments/contact/{contactId}',
  request: {
    params: z.object({
      contactId: z
        .string()
        .openapi({
          param: {
            name: 'contactId',
            in: 'path',
            description:
              'The unique identifier of the contact whose sequence enrollment details are being retrieved.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: PublicSequenceEnrollmentResponseSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const postAutomationSequences202609ServiceaccountsEnrollmentsRoute = createRoute({
  method: 'post',
  path: '/automation/sequences/2026-09/serviceaccounts/enrollments',
  tags: ['Enrollment'],
  summary: 'Enroll Service Account',
  description:
    'Enroll a service account into a sequence using the specified enrollment details. This endpoint is useful for automating the process of adding service accounts to sequences, which can help streamline workflows and ensure consistent engagement strategies. Please note: the scopes for this endpoint requires user-level access and will not work for existing apps with portal-level access.',
  operationId: 'post-/automation/sequences/2026-09/serviceaccounts/enrollments',
  request: {
    body: {
      content: {
        'application/json': { schema: PublicSequenceEnrollmentRequestSchema, example: null },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: PublicSequenceEnrollmentLiteResponseSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const getAutomationSequences202609ServiceaccountsSequencesRoute = createRoute({
  method: 'get',
  path: '/automation/sequences/2026-09/serviceaccounts/sequences',
  tags: ['Basic'],
  summary: 'List sequences',
  description:
    'Retrieve a list of sequences available in the service account. This endpoint supports pagination and allows filtering by sequence name. It is useful for obtaining an overview of sequences for management or reporting purposes. Please note: the scopes for this endpoint requires user-level access and will not work for existing apps with portal-level access.',
  operationId: 'get-/automation/sequences/2026-09/serviceaccounts/sequences',
  request: {
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description:
              'The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      limit: z
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
            name: 'limit',
            in: 'query',
            description: 'The maximum number of results to display per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Filter sequences by their name.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: CollectionResponseWithTotalPublicSequenceLiteResponseSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const postAutomationSequences202609ServiceaccountsSequencesRoute = createRoute({
  method: 'post',
  path: '/automation/sequences/2026-09/serviceaccounts/sequences',
  tags: ['Basic'],
  summary: 'Create sequence',
  description:
    "Create a new sequence in your HubSpot account using the specified settings and steps. This endpoint allows you to define the sequence's properties, such as its name, settings, steps, and dependencies, to automate processes effectively. Please note: the scopes for this endpoint requires user-level access and will not work for existing apps with portal-level access.",
  operationId: 'post-/automation/sequences/2026-09/serviceaccounts/sequences',
  request: {
    body: {
      content: { 'application/json': { schema: PublicSequenceRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: PublicCreateSequenceResponseSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const getAutomationSequences202609ServiceaccountsSequencesSequenceIdRoute = createRoute({
  method: 'get',
  path: '/automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}',
  tags: ['Basic'],
  summary: 'Retrieve sequence',
  description:
    "Retrieve details of a specific sequence in your HubSpot account using the sequence ID. This endpoint provides comprehensive information about the sequence, including its settings, steps, and dependencies. It is useful for obtaining sequence configurations and understanding the sequence's structure and components. Please note: the scopes for this endpoint requires user-level access and will not work for existing apps with portal-level access.",
  operationId: 'get-/automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}',
  request: {
    params: z.object({
      sequenceId: z
        .string()
        .openapi({
          param: {
            name: 'sequenceId',
            in: 'path',
            description: 'The unique identifier of the sequence to retrieve.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicSequenceResponseV2Schema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const putAutomationSequences202609ServiceaccountsSequencesSequenceIdRoute = createRoute({
  method: 'put',
  path: '/automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}',
  tags: ['Basic'],
  summary: 'Update sequence',
  description:
    'Update an existing sequence in your HubSpot account using its unique identifier. This endpoint allows you to modify the sequence settings, steps, and dependencies. Ensure that the sequenceId provided in the path is valid and corresponds to the sequence you wish to update. Please note: the scopes for this endpoint requires user-level access and will not work for existing apps with portal-level access.',
  operationId: 'put-/automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}',
  request: {
    params: z.object({
      sequenceId: z
        .string()
        .openapi({
          param: {
            name: 'sequenceId',
            in: 'path',
            description: 'The unique identifier of the sequence to update.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: PublicSequenceRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicSequenceResponseV2Schema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const deleteAutomationSequences202609ServiceaccountsSequencesSequenceIdRoute = createRoute({
  method: 'delete',
  path: '/automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}',
  tags: ['Basic'],
  summary: 'Delete sequence',
  description:
    'Delete a specific sequence in your HubSpot account using its unique identifier. This operation will remove the sequence and can optionally override active enrollments if specified. Please note: the scopes for this endpoint requires user-level access and will not work for existing apps with portal-level access.',
  operationId: 'delete-/automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}',
  request: {
    params: z.object({
      sequenceId: z
        .string()
        .openapi({
          param: {
            name: 'sequenceId',
            in: 'path',
            description: 'The unique identifier of the sequence to delete.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      overrideActiveEnrollment: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'overrideActiveEnrollment',
            in: 'query',
            description:
              'A boolean indicating whether to override active enrollments when deleting the sequence.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [],
})

export const getAutomationSequences202609ServiceaccountsSequencesSequenceIdPerformanceRoute =
  createRoute({
    method: 'get',
    path: '/automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}/performance',
    tags: ['Basic'],
    summary: 'Retrieve performance',
    description:
      "Retrieve the performance metrics of a specific sequence in your HubSpot account. This endpoint provides detailed insights into the sequence's effectiveness, including metrics such as opened, clicked, and replied rates. It is useful for analyzing the success of your sequences over time. Please note: the scopes for this endpoint requires user-level access and will not work for existing apps with portal-level access.",
    operationId:
      'get-/automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}/performance',
    request: {
      params: z.object({
        sequenceId: z
          .string()
          .openapi({
            param: {
              name: 'sequenceId',
              in: 'path',
              description:
                'The unique identifier of the sequence to retrieve performance metrics for.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
      }),
      query: z.object({
        timelineInterval: z
          .string()
          .default('WEEK')
          .exactOptional()
          .openapi({
            param: {
              name: 'timelineInterval',
              in: 'query',
              description: "The interval for the timeline data. Defaults to 'WEEK'.",
              required: false,
              style: 'form',
              explode: true,
              schema: { type: 'string', example: null, default: 'WEEK' },
            },
            example: null,
          }),
      }),
    },
    responses: {
      200: {
        description: 'successful operation',
        content: {
          'application/json': { schema: PublicSequencePerformanceResponseSchema, example: null },
        },
      },
      default: ErrorResponse,
    },
    security: [],
  })

export const getAutomationSequences202609SequenceIdRoute = createRoute({
  method: 'get',
  path: '/automation/sequences/2026-09/{sequenceId}',
  tags: ['Basic'],
  summary: 'Retrieve sequence',
  description:
    "Retrieve details of a specific sequence in your HubSpot account using its unique identifier. This endpoint requires specifying the sequence ID and the user ID associated with the sequence. It is useful for accessing detailed information about a sequence's configuration and status. Please note: the scopes for this endpoint requires user-level access and will not work for existing apps with portal-level access.",
  operationId: 'get-/automation/sequences/2026-09/{sequenceId}',
  request: {
    params: z.object({
      sequenceId: z
        .string()
        .openapi({
          param: {
            name: 'sequenceId',
            in: 'path',
            description: 'The unique identifier of the sequence to retrieve.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'query',
            description:
              'The unique identifier of the user associated with the sequence. This parameter is required.',
            required: true,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicSequenceResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [],
})
