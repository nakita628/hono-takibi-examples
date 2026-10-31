import { createRoute, z } from '@hono/zod-openapi'

const CreateConfigurationSetResponseSchema = z
  .object({})
  .openapi({
    description:
      'An empty object that indicates that the configuration set was successfully created.',
  })
  .openapi('CreateConfigurationSetResponse')

const TooManyRequestsExceptionSchema = z.any().openapi('TooManyRequestsException')

const BadRequestExceptionSchema = z.any().openapi('BadRequestException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const InternalServiceErrorExceptionSchema = z.any().openapi('InternalServiceErrorException')

const AlreadyExistsExceptionSchema = z.any().openapi('AlreadyExistsException')

const CreateConfigurationSetEventDestinationResponseSchema = z
  .object({})
  .openapi({
    description:
      'An empty object that indicates that the event destination was created successfully.',
  })
  .openapi('CreateConfigurationSetEventDestinationResponse')

const StringSchema = z.string().openapi('String')

const CloudWatchLogsDestinationSchema = z
  .object({
    IamRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an Amazon Identity and Access Management (IAM) role that is able to write event data to an Amazon CloudWatch destination.',
        }),
    ).exactOptional(),
    LogGroupArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Amazon CloudWatch Log Group that you want to record events in.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that contains information about an event destination that sends data to Amazon CloudWatch Logs.',
    required: [],
  })
  .openapi('CloudWatchLogsDestination')

const BooleanSchema = z.boolean().openapi('Boolean')

const KinesisFirehoseDestinationSchema = z
  .object({
    DeliveryStreamArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an IAM role that can write data to an Amazon Kinesis Data Firehose stream.',
        }),
    ).exactOptional(),
    IamRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon Kinesis Data Firehose destination that you want to use in the event destination.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose.',
    required: [],
  })
  .openapi('KinesisFirehoseDestination')

const EventTypeSchema = z
  .enum(['INITIATED_CALL', 'RINGING', 'ANSWERED', 'COMPLETED_CALL', 'BUSY', 'FAILED', 'NO_ANSWER'])
  .openapi({ description: 'The types of events that are sent to the event destination.' })
  .openapi('EventType')

const EventTypesSchema = z
  .array(EventTypeSchema)
  .openapi({
    description:
      'An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination.',
  })
  .openapi('EventTypes')

const SnsDestinationSchema = z
  .object({
    TopicArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon SNS topic that you want to publish events to.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that contains information about an event destination that sends data to Amazon SNS.',
    required: [],
  })
  .openapi('SnsDestination')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const DeleteConfigurationSetResponseSchema = z
  .object({})
  .openapi({
    description:
      'An empty object that indicates that the configuration set was deleted successfully.',
  })
  .openapi('DeleteConfigurationSetResponse')

const DeleteConfigurationSetEventDestinationResponseSchema = z
  .object({})
  .openapi({
    description:
      'An empty object that indicates that the event destination was deleted successfully.',
  })
  .openapi('DeleteConfigurationSetEventDestinationResponse')

const EventDestinationSchema = z
  .object({
    CloudWatchLogsDestination: CloudWatchLogsDestinationSchema.exactOptional(),
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether or not the event destination is enabled. If the event destination is enabled, then Amazon Pinpoint sends response data to the specified event destination.',
        }),
    ).exactOptional(),
    KinesisFirehoseDestination: KinesisFirehoseDestinationSchema.exactOptional(),
    MatchingEventTypes: EventTypesSchema.exactOptional(),
    Name: StringSchema.and(
      z
        .any()
        .openapi({ description: 'A name that identifies the event destination configuration.' }),
    ).exactOptional(),
    SnsDestination: SnsDestinationSchema.exactOptional(),
  })
  .openapi({ description: 'An object that defines an event destination.', required: [] })
  .openapi('EventDestination')

const EventDestinationsSchema = z
  .array(EventDestinationSchema)
  .openapi({
    description:
      'An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination.',
  })
  .openapi('EventDestinations')

const GetConfigurationSetEventDestinationsResponseSchema = z
  .object({ EventDestinations: EventDestinationsSchema.exactOptional() })
  .openapi({
    description: 'An object that contains information about an event destination.',
    required: [],
  })
  .openapi('GetConfigurationSetEventDestinationsResponse')

const WordCharactersWithDelimitersSchema = z.string().openapi('WordCharactersWithDelimiters')

const ConfigurationSetsSchema = z
  .array(WordCharactersWithDelimitersSchema)
  .openapi({
    description:
      'An array that contains all of the configuration sets in your Amazon Pinpoint account in the current AWS Region.',
  })
  .openapi('ConfigurationSets')

const NextTokenStringSchema = z.string().openapi('NextTokenString')

const ListConfigurationSetsResponseSchema = z
  .object({
    ConfigurationSets: ConfigurationSetsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains a list of configuration sets for your account in the current region.',
        }),
    ).exactOptional(),
    NextToken: NextTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token returned from a previous call to ListConfigurationSets to indicate the position in the list of configuration sets.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that contains information about the configuration sets for your account in the current region.',
    required: [],
  })
  .openapi('ListConfigurationSetsResponse')

const SendVoiceMessageResponseSchema = z
  .object({
    MessageId: StringSchema.and(
      z.any().openapi({ description: 'A unique identifier for the voice message.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that that contains the Message ID of a Voice message that was sent successfully.',
    required: [],
  })
  .openapi('SendVoiceMessageResponse')

const NonEmptyStringSchema = z.string().openapi('NonEmptyString')

const CallInstructionsMessageTypeSchema = z
  .object({
    Text: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language to use when delivering the message. For a complete list of supported languages, see the Amazon Polly Developer Guide.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that defines a message that contains text formatted using Amazon Pinpoint Voice Instructions markup.',
    required: [],
  })
  .openapi('CallInstructionsMessageType')

const PlainTextMessageTypeSchema = z
  .object({
    LanguageCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language to use when delivering the message. For a complete list of supported languages, see the Amazon Polly Developer Guide.',
        }),
    ).exactOptional(),
    Text: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The plain (not SSML-formatted) text to deliver to the recipient.',
        }),
    ).exactOptional(),
    VoiceId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the voice that you want to use to deliver the message. For a complete list of supported voices, see the Amazon Polly Developer Guide.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that defines a message that contains unformatted text.',
    required: [],
  })
  .openapi('PlainTextMessageType')

const SSMLMessageTypeSchema = z
  .object({
    LanguageCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language to use when delivering the message. For a complete list of supported languages, see the Amazon Polly Developer Guide.',
        }),
    ).exactOptional(),
    Text: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The SSML-formatted text to deliver to the recipient.' }),
    ).exactOptional(),
    VoiceId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the voice that you want to use to deliver the message. For a complete list of supported voices, see the Amazon Polly Developer Guide.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that defines a message that contains SSML-formatted text.',
    required: [],
  })
  .openapi('SSMLMessageType')

const UpdateConfigurationSetEventDestinationResponseSchema = z
  .object({})
  .openapi({
    description:
      'An empty object that indicates that the event destination was updated successfully.',
  })
  .openapi('UpdateConfigurationSetEventDestinationResponse')

const String2Schema = z.string().openapi('String2')

const EventDestinationDefinitionSchema = z
  .object({
    CloudWatchLogsDestination: CloudWatchLogsDestinationSchema.exactOptional(),
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether or not the event destination is enabled. If the event destination is enabled, then Amazon Pinpoint sends response data to the specified event destination.',
        }),
    ).exactOptional(),
    KinesisFirehoseDestination: KinesisFirehoseDestinationSchema.exactOptional(),
    MatchingEventTypes: EventTypesSchema.exactOptional(),
    SnsDestination: SnsDestinationSchema.exactOptional(),
  })
  .openapi({ description: 'An object that defines a single event destination.', required: [] })
  .openapi('EventDestinationDefinition')

const CreateConfigurationSetEventDestinationRequestSchema = z
  .object({
    EventDestination: EventDestinationDefinitionSchema.exactOptional(),
    EventDestinationName: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'A name that identifies the event destination.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'CreateConfigurationSetEventDestinationRequest',
    description: 'Create a new event destination in a configuration set.',
    required: [],
  })
  .openapi('CreateConfigurationSetEventDestinationRequest')

const CreateConfigurationSetRequestSchema = z
  .object({
    ConfigurationSetName: WordCharactersWithDelimitersSchema.and(
      z.any().openapi({ description: 'The name that you want to give the configuration set.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'CreateConfigurationSetRequest',
    description: 'A request to create a new configuration set.',
    required: [],
  })
  .openapi('CreateConfigurationSetRequest')

const DeleteConfigurationSetEventDestinationRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteConfigurationSetEventDestinationRequest' })
  .openapi('DeleteConfigurationSetEventDestinationRequest')

const DeleteConfigurationSetRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteConfigurationSetRequest' })
  .openapi('DeleteConfigurationSetRequest')

const GetConfigurationSetEventDestinationsRequestSchema = z
  .object({})
  .openapi({ title: 'GetConfigurationSetEventDestinationsRequest' })
  .openapi('GetConfigurationSetEventDestinationsRequest')

const ListConfigurationSetsRequestSchema = z
  .object({})
  .openapi({ title: 'ListConfigurationSetsRequest' })
  .openapi('ListConfigurationSetsRequest')

const VoiceMessageContentSchema = z
  .object({
    CallInstructionsMessage: CallInstructionsMessageTypeSchema.exactOptional(),
    PlainTextMessage: PlainTextMessageTypeSchema.exactOptional(),
    SSMLMessage: SSMLMessageTypeSchema.exactOptional(),
  })
  .openapi({
    description:
      'An object that contains a voice message and information about the recipient that you want to send it to.',
    required: [],
  })
  .openapi('VoiceMessageContent')

const SendVoiceMessageRequestSchema = z
  .object({
    CallerId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The phone number that appears on recipients' devices when they receive the message.",
        }),
    ).exactOptional(),
    ConfigurationSetName: WordCharactersWithDelimitersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the configuration set that you want to use to send the message.',
        }),
    ).exactOptional(),
    Content: VoiceMessageContentSchema.exactOptional(),
    DestinationPhoneNumber: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({ description: 'The phone number that you want to send the voice message to.' }),
    ).exactOptional(),
    OriginationPhoneNumber: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The phone number that Amazon Pinpoint should use to send the voice message. This isn't necessarily the phone number that appears on recipients' devices when they receive the message, because you can specify a CallerId parameter in the request.",
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'SendVoiceMessageRequest',
    description: 'SendVoiceMessageRequest',
    required: [],
  })
  .openapi('SendVoiceMessageRequest')

const UpdateConfigurationSetEventDestinationRequestSchema = z
  .object({ EventDestination: EventDestinationDefinitionSchema.exactOptional() })
  .openapi({
    title: 'UpdateConfigurationSetEventDestinationRequest',
    description: 'UpdateConfigurationSetEventDestinationRequest',
    required: [],
  })
  .openapi('UpdateConfigurationSetEventDestinationRequest')

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

export const getV1SmsVoiceConfigurationSetsRoute = createRoute({
  method: 'get',
  path: '/v1/sms-voice/configuration-sets',
  description:
    'List all of the configuration sets associated with your Amazon Pinpoint account in the current region.',
  operationId: 'ListConfigurationSets',
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
    query: z.object({
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              'A token returned from a previous call to the API that indicates the position in the list of results.',
            schema: { type: 'string' },
          },
        }),
      PageSize: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PageSize',
            in: 'query',
            required: false,
            description:
              'Used to specify the number of items that should be returned in the response.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListConfigurationSetsResponseSchema } },
    },
    480: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const postV1SmsVoiceConfigurationSetsRoute = createRoute({
  method: 'post',
  path: '/v1/sms-voice/configuration-sets',
  description:
    'Create a new configuration set. After you create the configuration set, you can add one or more event destinations to it.',
  operationId: 'CreateConfigurationSet',
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
              ConfigurationSetName: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name that you want to give the configuration set.' }),
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
      content: { 'application/json': { schema: CreateConfigurationSetResponseSchema } },
    },
    480: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    484: {
      description: 'AlreadyExistsException',
      content: { 'application/json': { schema: AlreadyExistsExceptionSchema } },
    },
  },
})

export const getV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsRoute = createRoute(
  {
    method: 'get',
    path: '/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations',
    description:
      'Obtain information about an event destination, including the types of events it reports, the Amazon Resource Name (ARN) of the destination, and the name of the event destination.',
    operationId: 'GetConfigurationSetEventDestinations',
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
        ConfigurationSetName: z
          .string()
          .openapi({
            param: {
              name: 'ConfigurationSetName',
              in: 'path',
              required: true,
              description: 'ConfigurationSetName',
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: GetConfigurationSetEventDestinationsResponseSchema },
        },
      },
      480: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      481: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      482: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      483: {
        description: 'InternalServiceErrorException',
        content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
      },
    },
  },
)

export const postV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsRoute =
  createRoute({
    method: 'post',
    path: '/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations',
    description: 'Create a new event destination in a configuration set.',
    operationId: 'CreateConfigurationSetEventDestination',
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
        ConfigurationSetName: z
          .string()
          .openapi({
            param: {
              name: 'ConfigurationSetName',
              in: 'path',
              required: true,
              description: 'ConfigurationSetName',
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                EventDestination: z
                  .object({
                    CloudWatchLogsDestination: CloudWatchLogsDestinationSchema.exactOptional(),
                    Enabled: BooleanSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Indicates whether or not the event destination is enabled. If the event destination is enabled, then Amazon Pinpoint sends response data to the specified event destination.',
                        }),
                    ).exactOptional(),
                    KinesisFirehoseDestination: KinesisFirehoseDestinationSchema.exactOptional(),
                    MatchingEventTypes: EventTypesSchema.exactOptional(),
                    SnsDestination: SnsDestinationSchema.exactOptional(),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'An object that defines a single event destination.',
                    required: [],
                  }),
                EventDestinationName: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'A name that identifies the event destination.' }),
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
        content: {
          'application/json': { schema: CreateConfigurationSetEventDestinationResponseSchema },
        },
      },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      481: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      482: {
        description: 'InternalServiceErrorException',
        content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
      },
      483: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      484: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      485: {
        description: 'AlreadyExistsException',
        content: { 'application/json': { schema: AlreadyExistsExceptionSchema } },
      },
    },
  })

export const deleteV1SmsVoiceConfigurationSetsConfigurationSetNameRoute = createRoute({
  method: 'delete',
  path: '/v1/sms-voice/configuration-sets/{ConfigurationSetName}',
  description: 'Deletes an existing configuration set.',
  operationId: 'DeleteConfigurationSet',
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
      ConfigurationSetName: z
        .string()
        .openapi({
          param: {
            name: 'ConfigurationSetName',
            in: 'path',
            required: true,
            description: 'ConfigurationSetName',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteConfigurationSetResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const putV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameRoute =
  createRoute({
    method: 'put',
    path: '/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}',
    description:
      'Update an event destination in a configuration set. An event destination is a location that you publish information about your voice calls to. For example, you can log an event to an Amazon CloudWatch destination when a call fails.',
    operationId: 'UpdateConfigurationSetEventDestination',
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
        ConfigurationSetName: z
          .string()
          .openapi({
            param: {
              name: 'ConfigurationSetName',
              in: 'path',
              required: true,
              description: 'ConfigurationSetName',
              schema: { type: 'string' },
            },
          }),
        EventDestinationName: z
          .string()
          .openapi({
            param: {
              name: 'EventDestinationName',
              in: 'path',
              required: true,
              description: 'EventDestinationName',
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                EventDestination: z
                  .object({
                    CloudWatchLogsDestination: CloudWatchLogsDestinationSchema.exactOptional(),
                    Enabled: BooleanSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Indicates whether or not the event destination is enabled. If the event destination is enabled, then Amazon Pinpoint sends response data to the specified event destination.',
                        }),
                    ).exactOptional(),
                    KinesisFirehoseDestination: KinesisFirehoseDestinationSchema.exactOptional(),
                    MatchingEventTypes: EventTypesSchema.exactOptional(),
                    SnsDestination: SnsDestinationSchema.exactOptional(),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'An object that defines a single event destination.',
                    required: [],
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
        content: {
          'application/json': { schema: UpdateConfigurationSetEventDestinationResponseSchema },
        },
      },
      480: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      481: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      482: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      483: {
        description: 'InternalServiceErrorException',
        content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
      },
    },
  })

export const deleteV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameRoute =
  createRoute({
    method: 'delete',
    path: '/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}',
    description: 'Deletes an event destination in a configuration set.',
    operationId: 'DeleteConfigurationSetEventDestination',
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
        ConfigurationSetName: z
          .string()
          .openapi({
            param: {
              name: 'ConfigurationSetName',
              in: 'path',
              required: true,
              description: 'ConfigurationSetName',
              schema: { type: 'string' },
            },
          }),
        EventDestinationName: z
          .string()
          .openapi({
            param: {
              name: 'EventDestinationName',
              in: 'path',
              required: true,
              description: 'EventDestinationName',
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DeleteConfigurationSetEventDestinationResponseSchema },
        },
      },
      480: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      481: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      482: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      483: {
        description: 'InternalServiceErrorException',
        content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
      },
    },
  })

export const postV1SmsVoiceVoiceMessageRoute = createRoute({
  method: 'post',
  path: '/v1/sms-voice/voice/message',
  description: "Create a new voice message and send it to a recipient's phone number.",
  operationId: 'SendVoiceMessage',
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
              CallerId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The phone number that appears on recipients' devices when they receive the message.",
                }),
              ConfigurationSetName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The name of the configuration set that you want to use to send the message.',
                }),
              Content: z
                .object({
                  CallInstructionsMessage: CallInstructionsMessageTypeSchema.exactOptional(),
                  PlainTextMessage: PlainTextMessageTypeSchema.exactOptional(),
                  SSMLMessage: SSMLMessageTypeSchema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'An object that contains a voice message and information about the recipient that you want to send it to.',
                  required: [],
                }),
              DestinationPhoneNumber: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The phone number that you want to send the voice message to.',
                }),
              OriginationPhoneNumber: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The phone number that Amazon Pinpoint should use to send the voice message. This isn't necessarily the phone number that appears on recipients' devices when they receive the message, because you can specify a CallerId parameter in the request.",
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
      content: { 'application/json': { schema: SendVoiceMessageResponseSchema } },
    },
    480: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})
