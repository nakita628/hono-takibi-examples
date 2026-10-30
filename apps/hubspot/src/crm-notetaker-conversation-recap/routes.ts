import { createRoute, z } from '@hono/zod-openapi'

const ActionItemSchema = z
  .object({
    assignee: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string indicating the individual assigned to the action item. This property is optional.',
        example: null,
      }),
    assigneeObjectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of the HubSpot user or contact assigned to this action item, if found. This property is optional.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the action item, represented as a string.',
        example: null,
      }),
    title: z
      .string()
      .openapi({
        description:
          'A string representing the title or main description of the action item. This property is required.',
        example: null,
      }),
  })
  .openapi({ required: ['id', 'title'], example: null })
  .openapi('ActionItem')

const ErrorDetailSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status code associated with the error detail. This helps identify the type of error that occurred.',
        example: null,
      }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An object providing context about the error condition. It contains additional properties that offer more details, such as missing scopes or other relevant information.',
        example: '{missingScopes=[scope1, scope2]}',
      }),
    in: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the field or parameter in which the error was found. It provides context about the location of the error.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human-readable message describing the error along with remediation steps where appropriate. This is a required field.',
        example: null,
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A specific category that contains more specific detail about the error. It offers further classification of the error.',
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

const StandardErrorSchema = z
  .object({
    category: z
      .string()
      .openapi({ description: 'A string representing the category of the error.', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .openapi({
        description:
          'An object containing additional context about the error condition, where each key maps to an array of strings.',
        example: null,
      }),
    errors: z
      .array(ErrorDetailSchema)
      .openapi({
        description:
          'An array of ErrorDetail objects providing further information about the error.',
        example: null,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string that serves as a unique identifier for the error instance.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'An object mapping link names to associated URIs that contain documentation or recommended remediation steps related to the error.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description: 'A string containing a human-readable message describing the error.',
        example: null,
      }),
    status: z
      .string()
      .openapi({ description: 'A string representing the status of the error.', example: null }),
    subCategory: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'An object providing more specific details about the error category.',
        example: null,
      }),
  })
  .openapi({
    required: ['category', 'context', 'errors', 'links', 'message', 'status'],
    description: 'Ye olde error',
    example: null,
  })
  .openapi('StandardError')

const ConversationRecapActionItemsResultSchema = z
  .object({
    error: StandardErrorSchema.exactOptional(),
    items: z
      .array(ActionItemSchema)
      .openapi({
        description:
          'The list of action items extracted from the conversation. Populated when status is SUCCEEDED; empty otherwise.',
        example: null,
      }),
    status: z
      .enum(['FAILED', 'IN_PROGRESS', 'NOT_FOUND', 'NOT_SUPPORTED', 'SUCCEEDED'])
      .openapi({
        description:
          'The current state of action item generation. SUCCEEDED — action items are available. NOT_FOUND — no action items have been generated for this engagement. IN_PROGRESS — generation is currently underway. FAILED — an error occurred while retrieving action items.',
        example: null,
      }),
  })
  .openapi({ required: ['items', 'status'], example: null })
  .openapi('ConversationRecapActionItemsResult')

const ConversationRecapCallStatsResultSchema = z
  .object({
    durationMs: z
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
        description: 'The length of the recorded conversation in milliseconds.',
        example: null,
      }),
    error: StandardErrorSchema.exactOptional(),
    hasTranscript: z
      .boolean()
      .openapi({ description: 'Whether a transcript for a conversation is found.', example: null }),
    ownerTalkTimePercentage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The percentage of talk-time attributed to the owner participant.',
        example: null,
      }),
    status: z
      .enum(['FAILED', 'IN_PROGRESS', 'NOT_FOUND', 'NOT_SUPPORTED', 'SUCCEEDED'])
      .openapi({
        description: 'The status of fetching call stats. Either SUCCEEDED, NOT_FOUND, or FAILED.',
        example: null,
      }),
  })
  .openapi({ required: ['hasTranscript', 'status'], example: null })
  .openapi('ConversationRecapCallStatsResult')

const ConversationRecapNotesResultSchema = z
  .object({
    error: StandardErrorSchema.exactOptional(),
    status: z
      .enum(['FAILED', 'IN_PROGRESS', 'NOT_FOUND', 'NOT_SUPPORTED', 'SUCCEEDED'])
      .openapi({
        description: 'The status of fetching the notes. Either SUCCEEDED, NOT_FOUND, or FAILED.',
        example: null,
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string containing the notes from the conversation recap.',
        example: null,
      }),
  })
  .openapi({ required: ['status'], example: null })
  .openapi('ConversationRecapNotesResult')

const ParticipantInfoSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The email address of the participant. Only present when the participant is a HubSpot Contact.',
        example: null,
      }),
    isHost: z
      .boolean()
      .openapi({
        description: 'Whether this participant was the host of the conversation.',
        example: null,
      }),
    name: z.string().openapi({ description: 'The name of the participant. ', example: null }),
    phoneNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The phone number of the participant. Only present when the participant is a HubSpot Contact.',
        example: null,
      }),
  })
  .openapi({ required: ['isHost', 'name'], example: null })
  .openapi('ParticipantInfo')

const ConversationRecapParticipantsResultSchema = z
  .object({
    error: StandardErrorSchema.exactOptional(),
    items: z
      .array(ParticipantInfoSchema)
      .openapi({
        description:
          'An array of participant information objects, each containing details about a participant in the conversation.',
        example: null,
      }),
    status: z
      .enum(['FAILED', 'IN_PROGRESS', 'NOT_FOUND', 'NOT_SUPPORTED', 'SUCCEEDED'])
      .openapi({
        description: 'The status of fetching participants. Either SUCCEEDED or FAILED.',
        example: null,
      }),
  })
  .openapi({ required: ['items', 'status'], example: null })
  .openapi('ConversationRecapParticipantsResult')

const SpeakerStatementSchema = z
  .object({
    speakerName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The speaker attributed to this statement.', example: null }),
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time at which this statement occurred.', example: null }),
    timestampSeconds: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The time in a recorded conversation at which this statement occurred.',
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('SpeakerStatement')

const QuestionAndAnswerSchema = z
  .object({ answer: SpeakerStatementSchema.exactOptional(), question: SpeakerStatementSchema })
  .openapi({ required: ['question'], example: null })
  .openapi('QuestionAndAnswer')

const ConversationRecapQuestionsAskedResultSchema = z
  .object({
    error: StandardErrorSchema.exactOptional(),
    questionsAndAnswers: z
      .array(QuestionAndAnswerSchema)
      .openapi({ description: 'A list of question and answer pairs. ', example: null }),
    status: z
      .enum(['FAILED', 'IN_PROGRESS', 'NOT_FOUND', 'NOT_SUPPORTED', 'SUCCEEDED'])
      .openapi({
        description:
          'The status of fetching questions and answers. Either FAILED, NOT_FOUND, or SUCCEEDED.',
        example: null,
      }),
  })
  .openapi({ required: ['questionsAndAnswers', 'status'], example: null })
  .openapi('ConversationRecapQuestionsAskedResult')

const ConversationRecapRecordingUrlResultSchema = z
  .object({
    error: StandardErrorSchema.exactOptional(),
    status: z
      .enum(['FAILED', 'IN_PROGRESS', 'NOT_FOUND', 'NOT_SUPPORTED', 'SUCCEEDED'])
      .openapi({
        description: 'The status of creating a URL. Either FAILED, NOT_FOUND, or SUCCEEDED.',
        example: null,
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL of the recording as a string.', example: null }),
  })
  .openapi({ required: ['status'], example: null })
  .openapi('ConversationRecapRecordingUrlResult')

const ConversationRecapSummaryResultSchema = z
  .object({
    error: StandardErrorSchema.exactOptional(),
    status: z
      .enum(['FAILED', 'IN_PROGRESS', 'NOT_FOUND', 'NOT_SUPPORTED', 'SUCCEEDED'])
      .openapi({
        description:
          'The current state of summary generation. SUCCEEDED — summary is available. NOT_FOUND — no summary has been generated for this engagement. FAILED — an error occurred while retrieving the summary.',
        example: null,
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The AI-generated summary text for the conversation. Present when status is SUCCEEDED; absent otherwise.',
        example: null,
      }),
  })
  .openapi({ required: ['status'], example: null })
  .openapi('ConversationRecapSummaryResult')

const ConversationRecapResponseSchema = z
  .object({
    actionItems: ConversationRecapActionItemsResultSchema,
    callStats: ConversationRecapCallStatsResultSchema,
    notes: ConversationRecapNotesResultSchema,
    participants: ConversationRecapParticipantsResultSchema,
    questionsAsked: ConversationRecapQuestionsAskedResultSchema,
    recordingUrl: ConversationRecapRecordingUrlResultSchema,
    summary: ConversationRecapSummaryResultSchema.exactOptional(),
  })
  .openapi({
    required: [
      'actionItems',
      'callStats',
      'notes',
      'participants',
      'questionsAsked',
      'recordingUrl',
    ],
    example: null,
  })
  .openapi('ConversationRecapResponse')

const ErrorSchema = z
  .object({
    category: z
      .string()
      .openapi({ description: 'The error category, represented as a string.', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An object providing context about the error condition, where each property is an array of strings.',
        example: '{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}',
      }),
    correlationId: z
      .uuid()
      .openapi({
        description:
          'A unique identifier for the request, used for tracking and support purposes. It is a string in UUID format.',
        example: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      }),
    errors: z
      .array(ErrorDetailSchema)
      .exactOptional()
      .openapi({
        description:
          'An array containing further information about the error, with each item being an ErrorDetail object.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs containing documentation about the error or recommended remediation steps. Each link is represented as a string.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate. It is a string.',
        example: 'An error occurred',
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A specific category providing more detailed information about the error. It is a string.',
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
        'crm.objects.contacts.highly_sensitive.read.v2': '',
        'crm.objects.contacts.read': '',
        'crm.objects.contacts.sensitive.read.v2': '',
        'crm.schemas.contacts.read': '',
      },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const getNotetaker202609ConversationRecapObjectTypeIdObjectIdRoute = createRoute({
  method: 'get',
  path: '/notetaker/2026-09/conversation/recap/{objectTypeId}/{objectId}',
  tags: ['Basic'],
  summary: 'Retrieve conversation recap data',
  description:
    'Retrieve a recap of a conversation based on the specified object type and object ID. This endpoint provides a variety of insights related to the conversation, including summary, action items, questions asked, call stats, participants, and recording URL.',
  operationId: 'get-/notetaker/2026-09/conversation/recap/{objectTypeId}/{objectId}',
  request: {
    params: z.object({
      objectId: z
        .string()
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description:
              'The unique identifier of the object for which the conversation recap is being retrieved. This is a required integer parameter.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      objectTypeId: z
        .string()
        .openapi({
          param: {
            name: 'objectTypeId',
            in: 'path',
            description:
              'The type of the object for which the conversation recap is being retrieved. This is a required string parameter.',
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
      content: { 'application/json': { schema: ConversationRecapResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { oauth2: ['crm.schemas.contacts.read'] },
    { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.read'] },
  ],
})
