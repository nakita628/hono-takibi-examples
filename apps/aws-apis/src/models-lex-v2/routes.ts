import { createRoute, z } from '@hono/zod-openapi'

const ServicePrincipalSchema = z
  .string()
  .regex(/^[0-9a-zA-Z_.]+$/)
  .min(15)
  .max(1024)
  .openapi('ServicePrincipal')

const PrincipalArnSchema = z
  .string()
  .regex(/^arn:aws:iam::[0-9]{12}:(root|(user|role)\/.*)$/)
  .min(30)
  .max(1024)
  .openapi('PrincipalArn')

type PrincipalType = {
  service?: z.infer<typeof ServicePrincipalSchema> & { [key: string]: unknown }
  arn?: z.infer<typeof PrincipalArnSchema> & { [key: string]: unknown }
}

const PlainTextMessageValueSchema = z.string().min(1).max(1000).openapi('PlainTextMessageValue')

const PlainTextMessageSchema = z
  .object({
    value: PlainTextMessageValueSchema.and(
      z.any().openapi({ description: 'The message to send to the user.' }),
    ),
  })
  .openapi({
    required: ['value'],
    description: 'Defines an ASCII text message to send to the user.',
  })
  .openapi('PlainTextMessage')

const CustomPayloadValueSchema = z.string().min(1).max(1000).openapi('CustomPayloadValue')

const CustomPayloadSchema = z
  .object({
    value: CustomPayloadValueSchema.and(
      z.any().openapi({ description: 'The string that is sent to your application.' }),
    ),
  })
  .openapi({
    required: ['value'],
    description:
      'A custom response string that Amazon Lex sends to your application. You define the content and structure the string.',
  })
  .openapi('CustomPayload')

const SSMLMessageValueSchema = z.string().min(1).max(1000).openapi('SSMLMessageValue')

const SSMLMessageSchema = z
  .object({
    value: SSMLMessageValueSchema.and(
      z.any().openapi({ description: 'The SSML text that defines the prompt.' }),
    ),
  })
  .openapi({
    required: ['value'],
    description: 'Defines a Speech Synthesis Markup Language (SSML) prompt.',
  })
  .openapi('SSMLMessage')

const AttachmentTitleSchema = z.string().min(1).max(250).openapi('AttachmentTitle')

const AttachmentUrlSchema = z.string().min(1).max(250).openapi('AttachmentUrl')

const ButtonTextSchema = z.string().min(1).max(50).openapi('ButtonText')

const ButtonValueSchema = z.string().min(1).max(50).openapi('ButtonValue')

const ButtonSchema = z
  .object({
    text: ButtonTextSchema.and(
      z
        .any()
        .openapi({
          description:
            'The text that appears on the button. Use this to tell the user what value is returned when they choose this button.',
        }),
    ),
    value: ButtonValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value returned to Amazon Lex when the user chooses this button. This must be one of the slot values configured for the slot.',
        }),
    ),
  })
  .openapi({
    required: ['text', 'value'],
    description:
      'Describes a button to use on a response card used to gather slot values from a user.',
  })
  .openapi('Button')

const ButtonsListSchema = z.array(ButtonSchema).min(0).max(5).openapi('ButtonsList')

const ImageResponseCardSchema = z
  .object({
    title: AttachmentTitleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The title to display on the response card. The format of the title is determined by the platform displaying the response card.',
        }),
    ),
    subtitle: AttachmentTitleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The subtitle to display on the response card. The format of the subtitle is determined by the platform displaying the response card.',
        }),
    ).exactOptional(),
    imageUrl: AttachmentUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL of an image to display on the response card. The image URL must be publicly available so that the platform displaying the response card has access to the image.',
        }),
    ).exactOptional(),
    buttons: ButtonsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of buttons that should be displayed on the response card. The arrangement of the buttons is determined by the platform that displays the button.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['title'],
    description:
      '<p>A card that is shown to the user by a messaging platform. You define the contents of the card, the card is displayed by the platform. </p> <p>When you use a response card, the response from the user is constrained to the text associated with a button on the card.</p>',
  })
  .openapi('ImageResponseCard')

type MessageType = {
  plainTextMessage?: z.infer<typeof PlainTextMessageSchema> & { [key: string]: unknown }
  customPayload?: z.infer<typeof CustomPayloadSchema> & { [key: string]: unknown }
  ssmlMessage?: z.infer<typeof SSMLMessageSchema> & { [key: string]: unknown }
  imageResponseCard?: z.infer<typeof ImageResponseCardSchema> & { [key: string]: unknown }
}

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const DateRangeFilterSchema = z
  .object({
    startDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A timestamp indicating the start date for the date range filter.',
        }),
    ),
    endDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'A timestamp indicating the end date for the date range filter.' }),
    ),
  })
  .openapi({
    required: ['startDateTime', 'endDateTime'],
    description:
      'The object used for specifying the data range that the customer wants Amazon Lex to read through in the input transcripts.',
  })
  .openapi('DateRangeFilter')

const LexTranscriptFilterSchema = z
  .object({
    dateRangeFilter: DateRangeFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'The object that contains a date range filter that will be applied to the transcript. Specify this object if you want Amazon Lex to only read the files that are within the date range.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The object that contains transcript filter details that are associated with a bot recommendation.',
    required: [],
  })
  .openapi('LexTranscriptFilter')

type TranscriptFilterType = {
  lexTranscriptFilter?: z.infer<typeof LexTranscriptFilterSchema> & { [key: string]: unknown }
}

const NonEmptyStringSchema = z.string().min(1).openapi('NonEmptyString')

type SlotValueType = {
  interpretedValue?: z.infer<typeof NonEmptyStringSchema> & { [key: string]: unknown }
}

const SlotValueOverrideSchema: z.ZodType<SlotValueOverrideType> = z
  .lazy(() =>
    z
      .object({
        value: SlotValueSchema.and(
          z.any().openapi({ description: 'The current value of the slot.' }),
        ).exactOptional(),
        values: SlotValuesSchema.and(
          z
            .any()
            .openapi({
              description:
                'A list of one or more values that the user provided for the slot. For example, for a slot that elicits pizza toppings, the values might be "pepperoni" and "pineapple."',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'The slot values that Amazon Lex uses when it sets slot values in a dialog step.',
        required: [],
      }),
  )
  .openapi('SlotValueOverride')

type SlotValuesType = z.infer<typeof SlotValueOverrideSchema>[]

const SlotValueSchema: z.ZodType<SlotValueType> = z
  .object({
    interpretedValue: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value that Amazon Lex determines for the slot. The actual value depends on the setting of the value selection strategy for the bot. You can choose to use the value entered by the user, or you can have Amazon Lex choose the first value in the <code>resolvedValues</code> list.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The value to set in a slot.', required: [] })
  .openapi('SlotValue')

const SlotValuesSchema: z.ZodType<SlotValuesType> = z
  .lazy(() => z.array(SlotValueOverrideSchema))
  .openapi('SlotValues')

type SlotValueOverrideType = {
  value?: z.infer<typeof SlotValueSchema> & { [key: string]: unknown }
  values?: z.infer<typeof SlotValuesSchema> & { [key: string]: unknown }
}

const IdSchema = z
  .string()
  .regex(/^[0-9a-zA-Z]+$/)
  .length(10)
  .openapi('Id')

const BotVersionSchema = z
  .string()
  .regex(/^(DRAFT|[0-9]+)$/)
  .min(1)
  .max(5)
  .openapi('BotVersion')

const LocaleIdSchema = z.string().openapi('LocaleId')

const ItemIdSchema = z.string().min(1).max(32).openapi('ItemId')

const ErrorMessageSchema = z.string().openapi('ErrorMessage')

const ErrorCodeSchema = z
  .enum([
    'DUPLICATE_INPUT',
    'RESOURCE_DOES_NOT_EXIST',
    'RESOURCE_ALREADY_EXISTS',
    'INTERNAL_SERVER_FAILURE',
  ])
  .openapi('ErrorCode')

const FailedCustomVocabularyItemSchema = z
  .object({
    itemId: ItemIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique item identifer for the failed custom vocabulary item from the custom vocabulary list.',
        }),
    ).exactOptional(),
    errorMessage: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The error message for the failed custom vocabulary item from the custom vocabulary list.',
        }),
    ).exactOptional(),
    errorCode: ErrorCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique error code for the failed custom vocabulary item from the custom vocabulary list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The unique failed custom vocabulary item from the custom vocabulary list.',
    required: [],
  })
  .openapi('FailedCustomVocabularyItem')

const FailedCustomVocabularyItemsSchema = z
  .array(FailedCustomVocabularyItemSchema)
  .openapi('FailedCustomVocabularyItems')

const PhraseSchema = z.string().min(1).max(100).openapi('Phrase')

const WeightSchema = z.int().min(1).max(3).openapi('Weight')

const CustomVocabularyItemSchema = z
  .object({
    itemId: ItemIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique item identifer for the custom vocabulary item from the custom vocabulary list.',
        }),
    ),
    phrase: PhraseSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique phrase for the custom vocabulary item from the custom vocabulary list.',
        }),
    ),
    weight: WeightSchema.and(
      z
        .any()
        .openapi({
          description:
            'The weight assigned for the custom vocabulary item from the custom vocabulary list.',
        }),
    ).exactOptional(),
    displayAs: PhraseSchema.and(
      z
        .any()
        .openapi({
          description:
            'The DisplayAs value for the custom vocabulary item from the custom vocabulary list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['itemId', 'phrase'],
    description: 'The unique custom vocabulary item from the custom vocabulary list.',
  })
  .openapi('CustomVocabularyItem')

const CustomVocabularyItemsSchema = z
  .array(CustomVocabularyItemSchema)
  .openapi('CustomVocabularyItems')

const BatchCreateCustomVocabularyItemResponseSchema = z
  .object({
    botId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the bot associated with this custom vocabulary.',
        }),
    ).exactOptional(),
    botVersion: BotVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the version of the bot associated with this custom vocabulary.',
        }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the language and locale where this custom vocabulary is used. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html"> Supported Languages </a>.',
        }),
    ).exactOptional(),
    errors: FailedCustomVocabularyItemsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of custom vocabulary items that failed to create during the operation. The reason for the error is contained within each error object.',
        }),
    ).exactOptional(),
    resources: CustomVocabularyItemsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of custom vocabulary items that were successfully created during the operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchCreateCustomVocabularyItemResponse')

const NewCustomVocabularyItemSchema = z
  .object({
    phrase: PhraseSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique phrase for the new custom vocabulary item from the custom vocabulary list.',
        }),
    ),
    weight: WeightSchema.and(
      z
        .any()
        .openapi({
          description:
            'The weight assigned to the new custom vocabulary item from the custom vocabulary list.',
        }),
    ).exactOptional(),
    displayAs: PhraseSchema.and(
      z
        .any()
        .openapi({
          description:
            'The display as value assigned to the new custom vocabulary item from the custom vocabulary list.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['phrase'],
    description: 'The new custom vocabulary item from the custom vocabulary list.',
  })
  .openapi('NewCustomVocabularyItem')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const BatchDeleteCustomVocabularyItemResponseSchema = z
  .object({
    botId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the bot associated with this custom vocabulary.',
        }),
    ).exactOptional(),
    botVersion: BotVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the version of the bot associated with this custom vocabulary.',
        }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the language and locale where this custom vocabulary is used. The string must match one of the supported locales. For more information, see Supported languages (https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).',
        }),
    ).exactOptional(),
    errors: FailedCustomVocabularyItemsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of custom vocabulary items that failed to delete during the operation. The reason for the error is contained within each error object.',
        }),
    ).exactOptional(),
    resources: CustomVocabularyItemsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of custom vocabulary items that were successfully deleted during the operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchDeleteCustomVocabularyItemResponse')

const CustomVocabularyEntryIdSchema = z
  .object({
    itemId: ItemIdSchema.and(
      z
        .any()
        .openapi({ description: 'The unique item identifier for the custom vocabulary items.' }),
    ),
  })
  .openapi({
    required: ['itemId'],
    description: 'The unique entry identifier for the custom vocabulary items.',
  })
  .openapi('CustomVocabularyEntryId')

const BatchUpdateCustomVocabularyItemResponseSchema = z
  .object({
    botId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the bot associated with this custom vocabulary.',
        }),
    ).exactOptional(),
    botVersion: BotVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the version of the bot associated with this custom vocabulary.',
        }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the language and locale where this custom vocabulary is used. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html"> Supported Languages </a>.',
        }),
    ).exactOptional(),
    errors: FailedCustomVocabularyItemsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of custom vocabulary items that failed to update during the operation. The reason for the error is contained within each error object.',
        }),
    ).exactOptional(),
    resources: CustomVocabularyItemsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of custom vocabulary items that were successfully updated during the operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchUpdateCustomVocabularyItemResponse')

const DraftBotVersionSchema = z
  .string()
  .regex(/^DRAFT$/)
  .length(5)
  .openapi('DraftBotVersion')

const BotLocaleStatusSchema = z
  .enum([
    'Creating',
    'Building',
    'Built',
    'ReadyExpressTesting',
    'Failed',
    'Deleting',
    'NotBuilt',
    'Importing',
    'Processing',
  ])
  .openapi('BotLocaleStatus')

const BuildBotLocaleResponseSchema = z
  .object({
    botId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the specified bot.' }),
    ).exactOptional(),
    botVersion: DraftBotVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the bot that was built. This is only the draft version of the bot.',
        }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The language and locale specified of where the bot can be used.',
        }),
    ).exactOptional(),
    botLocaleStatus: BotLocaleStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "The bot's build status. When the status is <code>ReadyExpressTesting</code> you can test the bot using the utterances defined for the intents and slot types. When the status is <code>Built</code>, the bot is ready for use and can be tested using any utterance.",
        }),
    ).exactOptional(),
    lastBuildSubmittedDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'A timestamp indicating the date and time that the bot was last built for this locale.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BuildBotLocaleResponse')

const PreconditionFailedExceptionSchema = z.any().openapi('PreconditionFailedException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const NameSchema = z
  .string()
  .regex(/^([0-9a-zA-Z][_-]?)+$/)
  .min(1)
  .max(100)
  .openapi('Name')

const DescriptionSchema = z.string().min(0).max(200).openapi('Description')

const RoleArnSchema = z
  .string()
  .regex(/^arn:aws:iam::[0-9]{12}:role\/.*$/)
  .min(32)
  .max(2048)
  .openapi('RoleArn')

const ChildDirectedSchema = z.boolean().openapi('ChildDirected')

const DataPrivacySchema = z
  .object({
    childDirected: ChildDirectedSchema.and(
      z
        .any()
        .openapi({
          description:
            'For each Amazon Lex bot created with the Amazon Lex Model Building Service, you must specify whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to the Children\'s Online Privacy Protection Act (COPPA) by specifying <code>true</code> or <code>false</code> in the <code>childDirected</code> field. By specifying <code>true</code> in the <code>childDirected</code> field, you confirm that your use of Amazon Lex <b>is</b> related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. By specifying <code>false</code> in the <code>childDirected</code> field, you confirm that your use of Amazon Lex <b>is not</b> related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. You may not specify a default value for the <code>childDirected</code> field that does not accurately reflect whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. If your use of Amazon Lex relates to a website, program, or other application that is directed in whole or in part, to children under age 13, you must obtain any required verifiable parental consent under COPPA. For information regarding the use of Amazon Lex in connection with websites, programs, or other applications that are directed or targeted, in whole or in part, to children under age 13, see the <a href="https://aws.amazon.com/lex/faqs#data-security">Amazon Lex FAQ</a>.',
        }),
    ),
  })
  .openapi({
    required: ['childDirected'],
    description:
      'By default, data stored by Amazon Lex is encrypted. The <code>DataPrivacy</code> structure provides settings that determine how Amazon Lex handles special cases of securing the data for your bot. ',
  })
  .openapi('DataPrivacy')

const SessionTTLSchema = z.int().min(60).max(86400).openapi('SessionTTL')

const BotStatusSchema = z
  .enum([
    'Creating',
    'Available',
    'Inactive',
    'Deleting',
    'Failed',
    'Versioning',
    'Importing',
    'Updating',
  ])
  .openapi('BotStatus')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 200)
  .openapi('TagMap')

const BotTypeSchema = z.enum(['Bot', 'BotNetwork']).openapi('BotType')

const BotAliasIdSchema = z
  .string()
  .regex(/^(\bTSTALIASID\b|[0-9a-zA-Z]+)$/)
  .length(10)
  .openapi('BotAliasId')

const BotAliasNameSchema = z
  .string()
  .regex(/^(\bAmazonLexTestAlias\b|[0-9a-zA-Z][_-]?)+$/)
  .min(1)
  .max(100)
  .openapi('BotAliasName')

const BotMemberSchema = z
  .object({
    botMemberId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique ID of a bot that is a member of this network of bots.',
        }),
    ),
    botMemberName: NameSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique name of a bot that is a member of this network of bots.',
        }),
    ),
    botMemberAliasId: BotAliasIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The alias ID of a bot that is a member of this network of bots.',
        }),
    ),
    botMemberAliasName: BotAliasNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The alias name of a bot that is a member of this network of bots.',
        }),
    ),
    botMemberVersion: BotVersionSchema.and(
      z
        .any()
        .openapi({ description: 'The version of a bot that is a member of this network of bots.' }),
    ),
  })
  .openapi({
    required: [
      'botMemberId',
      'botMemberName',
      'botMemberAliasId',
      'botMemberAliasName',
      'botMemberVersion',
    ],
    description: 'A bot that is a member of a network of bots.',
  })
  .openapi('BotMember')

const BotMembersSchema = z.array(BotMemberSchema).min(0).max(10).openapi('BotMembers')

const CreateBotResponseSchema = z
  .object({
    botId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for a particular bot. You use this to identify the bot when you call other Amazon Lex API operations.',
        }),
    ).exactOptional(),
    botName: NameSchema.and(
      z.any().openapi({ description: 'The name specified for the bot.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description specified for the bot.' }),
    ).exactOptional(),
    roleArn: RoleArnSchema.and(
      z.any().openapi({ description: 'The IAM role specified for the bot.' }),
    ).exactOptional(),
    dataPrivacy: DataPrivacySchema.and(
      z.any().openapi({ description: 'The data privacy settings specified for the bot.' }),
    ).exactOptional(),
    idleSessionTTLInSeconds: SessionTTLSchema.and(
      z.any().openapi({ description: 'The session idle time specified for the bot.' }),
    ).exactOptional(),
    botStatus: BotStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Shows the current status of the bot. The bot is first in the <code>Creating</code> status. Once the bot is read for use, it changes to the <code>Available</code> status. After the bot is created, you can use the <code>DRAFT</code> version of the bot.',
        }),
    ).exactOptional(),
    creationDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A timestamp indicating the date and time that the bot was created.',
        }),
    ).exactOptional(),
    botTags: TagMapSchema.and(
      z.any().openapi({ description: 'A list of tags associated with the bot.' }),
    ).exactOptional(),
    testBotAliasTags: TagMapSchema.and(
      z
        .any()
        .openapi({ description: 'A list of tags associated with the test alias for the bot.' }),
    ).exactOptional(),
    botType: BotTypeSchema.and(
      z.any().openapi({ description: 'The type of a bot that was created.' }),
    ).exactOptional(),
    botMembers: BotMembersSchema.and(
      z.any().openapi({ description: 'The list of bots in a network that was created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateBotResponse')

const NumericalBotVersionSchema = z
  .string()
  .regex(/^[0-9]+$/)
  .min(1)
  .max(5)
  .openapi('NumericalBotVersion')

const BooleanSchema = z.boolean().openapi('Boolean')

const LambdaARNSchema = z
  .string()
  .regex(
    /arn:aws:lambda:[a-z]+-[a-z]+-[0-9]:[0-9]{12}:function:[a-zA-Z0-9-_]+(\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})?(:[a-zA-Z0-9-_]+)?/,
  )
  .min(20)
  .max(2048)
  .openapi('LambdaARN')

const CodeHookInterfaceVersionSchema = z.string().min(1).max(5).openapi('CodeHookInterfaceVersion')

const LambdaCodeHookSchema = z
  .object({
    lambdaARN: LambdaARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the Lambda function.' }),
    ),
    codeHookInterfaceVersion: CodeHookInterfaceVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the request-response that you want Amazon Lex to use to invoke your Lambda function.',
        }),
    ),
  })
  .openapi({
    required: ['lambdaARN', 'codeHookInterfaceVersion'],
    description:
      "Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot.",
  })
  .openapi('LambdaCodeHook')

const CodeHookSpecificationSchema = z
  .object({ lambdaCodeHook: LambdaCodeHookSchema })
  .openapi({
    required: ['lambdaCodeHook'],
    description:
      'Contains information about code hooks that Amazon Lex calls during a conversation.',
  })
  .openapi('CodeHookSpecification')

const BotAliasLocaleSettingsSchema = z
  .object({
    enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Determines whether the locale is enabled for the bot. If the value is <code>false</code>, the locale isn't available for use.",
        }),
    ),
    codeHookSpecification: CodeHookSpecificationSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the Lambda function that should be used in the locale.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['enabled'],
    description:
      "Specifies settings that are unique to a locale. For example, you can use different Lambda function depending on the bot's locale.",
  })
  .openapi('BotAliasLocaleSettings')

const BotAliasLocaleSettingsMapSchema = z
  .record(z.string(), BotAliasLocaleSettingsSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .openapi('BotAliasLocaleSettingsMap')

const CloudWatchLogGroupArnSchema = z
  .string()
  .regex(/^arn:[\w\-]+:logs:[\w\-]+:[\d]{12}:log-group:[\.\-_\/#A-Za-z0-9]{1,512}(?::\*)?$/)
  .min(1)
  .max(2048)
  .openapi('CloudWatchLogGroupArn')

const LogPrefixSchema = z.string().max(1024).openapi('LogPrefix')

const CloudWatchLogGroupLogDestinationSchema = z
  .object({
    cloudWatchLogGroupArn: CloudWatchLogGroupArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the log group where text and metadata logs are delivered.',
        }),
    ),
    logPrefix: LogPrefixSchema.and(
      z
        .any()
        .openapi({
          description: 'The prefix of the log stream name within the log group that you specified ',
        }),
    ),
  })
  .openapi({
    required: ['cloudWatchLogGroupArn', 'logPrefix'],
    description:
      'The Amazon CloudWatch Logs log group where the text and metadata logs are delivered. The log group must exist before you enable logging.',
  })
  .openapi('CloudWatchLogGroupLogDestination')

const TextLogDestinationSchema = z
  .object({
    cloudWatch: CloudWatchLogGroupLogDestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Defines the Amazon CloudWatch Logs log group where text and metadata logs are delivered.',
        }),
    ),
  })
  .openapi({
    required: ['cloudWatch'],
    description:
      'Defines the Amazon CloudWatch Logs destination log group for conversation text logs.',
  })
  .openapi('TextLogDestination')

const TextLogSettingSchema = z
  .object({
    enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Determines whether conversation logs should be stored for an alias.',
        }),
    ),
    destination: TextLogDestinationSchema,
  })
  .openapi({
    required: ['enabled', 'destination'],
    description: 'Defines settings to enable text conversation logs.',
  })
  .openapi('TextLogSetting')

const TextLogSettingsListSchema = z
  .array(TextLogSettingSchema)
  .length(1)
  .openapi('TextLogSettingsList')

const KmsKeyArnSchema = z
  .string()
  .regex(/^arn:[\w\-]+:kms:[\w\-]+:[\d]{12}:(?:key\/[\w\-]+|alias\/[a-zA-Z0-9:\/_\-]{1,256})$/)
  .min(20)
  .max(2048)
  .openapi('KmsKeyArn')

const S3BucketArnSchema = z
  .string()
  .regex(/^arn:[\w\-]+:s3:::[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$/)
  .min(1)
  .max(2048)
  .openapi('S3BucketArn')

const S3BucketLogDestinationSchema = z
  .object({
    kmsKeyArn: KmsKeyArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an AWS Key Management Service (KMS) key for encrypting audio log files stored in an S3 bucket.',
        }),
    ).exactOptional(),
    s3BucketArn: S3BucketArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an Amazon S3 bucket where audio log files are stored.',
        }),
    ),
    logPrefix: LogPrefixSchema.and(
      z.any().openapi({ description: 'The S3 prefix to assign to audio log files.' }),
    ),
  })
  .openapi({
    required: ['s3BucketArn', 'logPrefix'],
    description: 'Specifies an Amazon S3 bucket for logging audio conversations',
  })
  .openapi('S3BucketLogDestination')

const AudioLogDestinationSchema = z
  .object({
    s3Bucket: S3BucketLogDestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 bucket where the audio log files are stored. The IAM role specified in the <code>roleArn</code> parameter of the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateBot.html">CreateBot</a> operation must have permission to write to this bucket.',
        }),
    ),
  })
  .openapi({
    required: ['s3Bucket'],
    description:
      'The location of audio log files collected when conversation logging is enabled for a bot.',
  })
  .openapi('AudioLogDestination')

const AudioLogSettingSchema = z
  .object({
    enabled: BooleanSchema.and(
      z.any().openapi({ description: 'Determines whether audio logging in enabled for the bot.' }),
    ),
    destination: AudioLogDestinationSchema,
  })
  .openapi({
    required: ['enabled', 'destination'],
    description:
      'Settings for logging audio of conversations between Amazon Lex and a user. You specify whether to log audio and the Amazon S3 bucket where the audio file is stored.',
  })
  .openapi('AudioLogSetting')

const AudioLogSettingsListSchema = z
  .array(AudioLogSettingSchema)
  .length(1)
  .openapi('AudioLogSettingsList')

const ConversationLogSettingsSchema = z
  .object({
    textLogSettings: TextLogSettingsListSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon CloudWatch Logs settings for logging text and metadata.',
        }),
    ).exactOptional(),
    audioLogSettings: AudioLogSettingsListSchema.and(
      z.any().openapi({ description: 'The Amazon S3 settings for logging audio to an S3 bucket.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Configures conversation logging that saves audio, text, and metadata for the conversations with your users.',
    required: [],
  })
  .openapi('ConversationLogSettings')

const SentimentAnalysisSettingsSchema = z
  .object({
    detectSentiment: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Sets whether Amazon Lex uses Amazon Comprehend to detect the sentiment of user utterances.',
        }),
    ),
  })
  .openapi({
    required: ['detectSentiment'],
    description:
      'Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.',
  })
  .openapi('SentimentAnalysisSettings')

const BotAliasStatusSchema = z
  .enum(['Creating', 'Available', 'Deleting', 'Failed'])
  .openapi('BotAliasStatus')

const CreateBotAliasResponseSchema = z
  .object({
    botAliasId: BotAliasIdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the bot alias.' }),
    ).exactOptional(),
    botAliasName: NameSchema.and(
      z.any().openapi({ description: 'The name specified for the bot alias.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description specified for the bot alias.' }),
    ).exactOptional(),
    botVersion: NumericalBotVersionSchema.and(
      z.any().openapi({ description: 'The version of the bot associated with this alias.' }),
    ).exactOptional(),
    botAliasLocaleSettings: BotAliasLocaleSettingsMapSchema.and(
      z.any().openapi({ description: 'Configuration information for a specific locale.' }),
    ).exactOptional(),
    conversationLogSettings: ConversationLogSettingsSchema.and(
      z.any().openapi({ description: 'The conversation log settings specified for the alias.' }),
    ).exactOptional(),
    sentimentAnalysisSettings: SentimentAnalysisSettingsSchema.exactOptional(),
    botAliasStatus: BotAliasStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the alias. The alias is first put into the <code>Creating</code> state. When the alias is ready to be used, it is put into the <code>Available</code> state. You can use the <code>DescribeBotAlias</code> operation to get the current state of an alias.',
        }),
    ).exactOptional(),
    botId: IdSchema.and(
      z
        .any()
        .openapi({ description: 'The unique identifier of the bot that this alias applies to.' }),
    ).exactOptional(),
    creationDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Unix timestamp indicating the date and time that the bot alias was created.',
        }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z.any().openapi({ description: 'A list of tags associated with the bot alias.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateBotAliasResponse')

const LocaleNameSchema = z.string().openapi('LocaleName')

const ConfidenceThresholdSchema = z.float64().min(0).max(1).openapi('ConfidenceThreshold')

const VoiceIdSchema = z.string().openapi('VoiceId')

const VoiceEngineSchema = z.enum(['standard', 'neural']).openapi('VoiceEngine')

const VoiceSettingsSchema = z
  .object({
    voiceId: VoiceIdSchema.and(
      z.any().openapi({ description: 'The identifier of the Amazon Polly voice to use.' }),
    ),
    engine: VoiceEngineSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates the type of Amazon Polly voice that Amazon Lex should use for voice interaction with the user. For more information, see the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_SynthesizeSpeech.html#polly-SynthesizeSpeech-request-Engine"> <code>engine</code> parameter of the <code>SynthesizeSpeech</code> operation</a> in the <i>Amazon Polly developer guide</i>.</p> <p>If you do not specify a value, the default is <code>standard</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['voiceId'],
    description: 'Defines settings for using an Amazon Polly voice to communicate with a user.',
  })
  .openapi('VoiceSettings')

const CreateBotLocaleResponseSchema = z
  .object({
    botId: IdSchema.and(
      z.any().openapi({ description: 'The specified bot identifier.' }),
    ).exactOptional(),
    botVersion: DraftBotVersionSchema.and(
      z.any().openapi({ description: 'The specified bot version.' }),
    ).exactOptional(),
    localeName: LocaleNameSchema.and(
      z.any().openapi({ description: 'The specified locale name.' }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z.any().openapi({ description: 'The specified locale identifier.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The specified description of the bot locale.' }),
    ).exactOptional(),
    nluIntentConfidenceThreshold: ConfidenceThresholdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The specified confidence threshold for inserting the <code>AMAZON.FallbackIntent</code> and <code>AMAZON.KendraSearchIntent</code> intents.',
        }),
    ).exactOptional(),
    voiceSettings: VoiceSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Polly voice ID that Amazon Lex uses for voice interaction with the user.',
        }),
    ).exactOptional(),
    botLocaleStatus: BotLocaleStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The status of the bot.</p> <p>When the status is <code>Creating</code> the bot locale is being configured. When the status is <code>Building</code> Amazon Lex is building the bot for testing and use.</p> <p>If the status of the bot is <code>ReadyExpressTesting</code>, you can test the bot using the exact utterances specified in the bots' intents. When the bot is ready for full testing or to run, the status is <code>Built</code>.</p> <p>If there was a problem with building the bot, the status is <code>Failed</code>. If the bot was saved but not built, the status is <code>NotBuilt</code>.</p>",
        }),
    ).exactOptional(),
    creationDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A timestamp specifying the date and time that the bot locale was created.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateBotLocaleResponse')

const BotVersionLocaleDetailsSchema = z
  .object({
    sourceBotVersion: BotVersionSchema.and(
      z.any().openapi({ description: 'The version of a bot used for a bot locale.' }),
    ),
  })
  .openapi({
    required: ['sourceBotVersion'],
    description: 'The version of a bot used for a bot locale.',
  })
  .openapi('BotVersionLocaleDetails')

const BotVersionLocaleSpecificationSchema = z
  .record(z.string(), BotVersionLocaleDetailsSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .openapi('BotVersionLocaleSpecification')

const CreateBotVersionResponseSchema = z
  .object({
    botId: IdSchema.and(
      z.any().openapi({ description: 'The bot identifier specified in the request.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the version specified in the request.' }),
    ).exactOptional(),
    botVersion: NumericalBotVersionSchema.and(
      z.any().openapi({ description: 'The version number assigned to the version.' }),
    ).exactOptional(),
    botVersionLocaleSpecification: BotVersionLocaleSpecificationSchema.and(
      z
        .any()
        .openapi({ description: 'The source versions used for each locale in the new version.' }),
    ).exactOptional(),
    botStatus: BotStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "When you send a request to create or update a bot, Amazon Lex sets the status response element to <code>Creating</code>. After Amazon Lex builds the bot, it sets status to <code>Available</code>. If Amazon Lex can't build the bot, it sets status to <code>Failed</code>.",
        }),
    ).exactOptional(),
    creationDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'A timestamp of the date and time that the version was created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateBotVersionResponse')

const BotExportSpecificationSchema = z
  .object({
    botId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the bot assigned by Amazon Lex.' }),
    ),
    botVersion: BotVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the bot that was exported. This will be either <code>DRAFT</code> or the version number.',
        }),
    ),
  })
  .openapi({
    required: ['botId', 'botVersion'],
    description: 'Provides the identity of a the bot that was exported.',
  })
  .openapi('BotExportSpecification')

const BotLocaleExportSpecificationSchema = z
  .object({
    botId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the bot to create the locale for.' }),
    ),
    botVersion: BotVersionSchema.and(
      z.any().openapi({ description: 'The version of the bot to export.' }),
    ),
    localeId: LocaleIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the language and locale to export. The string must match one of the locales in the bot.',
        }),
    ),
  })
  .openapi({
    required: ['botId', 'botVersion', 'localeId'],
    description: 'Provides the bot locale parameters required for exporting a bot locale.',
  })
  .openapi('BotLocaleExportSpecification')

const CustomVocabularyExportSpecificationSchema = z
  .object({
    botId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the bot that contains the custom vocabulary to export.',
        }),
    ),
    botVersion: BotVersionSchema.and(
      z
        .any()
        .openapi({
          description: 'The version of the bot that contains the custom vocabulary to export.',
        }),
    ),
    localeId: LocaleIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The locale of the bot that contains the custom vocabulary to export.',
        }),
    ),
  })
  .openapi({
    required: ['botId', 'botVersion', 'localeId'],
    description: 'Provides the parameters required for exporting a custom vocabulary.',
  })
  .openapi('CustomVocabularyExportSpecification')

const ExportResourceSpecificationSchema = z
  .object({
    botExportSpecification: BotExportSpecificationSchema.and(
      z.any().openapi({ description: 'Parameters for exporting a bot.' }),
    ).exactOptional(),
    botLocaleExportSpecification: BotLocaleExportSpecificationSchema.and(
      z.any().openapi({ description: 'Parameters for exporting a bot locale.' }),
    ).exactOptional(),
    customVocabularyExportSpecification: CustomVocabularyExportSpecificationSchema.and(
      z.any().openapi({ description: 'The parameters required to export a custom vocabulary.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about the bot or bot locale that you want to export. You can specify the <code>botExportSpecification</code> or the <code>botLocaleExportSpecification</code>, but not both.',
    required: [],
  })
  .openapi('ExportResourceSpecification')

const ImportExportFileFormatSchema = z.enum(['LexJson', 'TSV']).openapi('ImportExportFileFormat')

const ExportStatusSchema = z
  .enum(['InProgress', 'Completed', 'Failed', 'Deleting'])
  .openapi('ExportStatus')

const CreateExportResponseSchema = z
  .object({
    exportId: IdSchema.and(
      z.any().openapi({ description: 'An identifier for a specific request to create an export.' }),
    ).exactOptional(),
    resourceSpecification: ExportResourceSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of the type of resource that was exported, either a bot or a bot locale.',
        }),
    ).exactOptional(),
    fileFormat: ImportExportFileFormatSchema.and(
      z
        .any()
        .openapi({
          description: 'The file format used for the bot or bot locale definition files.',
        }),
    ).exactOptional(),
    exportStatus: ExportStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the export. When the status is <code>Completed</code>, you can use the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeExport.html">DescribeExport</a> operation to get the pre-signed S3 URL link to your exported bot or bot locale.',
        }),
    ).exactOptional(),
    creationDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the request to export a bot was created.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateExportResponse')

const IntentSignatureSchema = z.string().openapi('IntentSignature')

const UtteranceSchema = z.string().openapi('Utterance')

const SampleUtteranceSchema = z
  .object({
    utterance: UtteranceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The sample utterance that Amazon Lex uses to build its machine-learning model to recognize intents.',
        }),
    ),
  })
  .openapi({
    required: ['utterance'],
    description:
      'A sample utterance that invokes an intent or respond to a slot elicitation prompt.',
  })
  .openapi('SampleUtterance')

const SampleUtterancesListSchema = z.array(SampleUtteranceSchema).openapi('SampleUtterancesList')

const DialogCodeHookSettingsSchema = z
  .object({
    enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Enables the dialog code hook so that it processes user requests.',
        }),
    ),
  })
  .openapi({
    required: ['enabled'],
    description:
      'Settings that determine the Lambda function that Amazon Lex uses for processing user responses.',
  })
  .openapi('DialogCodeHookSettings')

const MessageSchema: z.ZodType<MessageType> = z
  .lazy(() =>
    z
      .object({
        plainTextMessage: PlainTextMessageSchema.and(
          z.any().openapi({ description: 'A message in plain text format.' }),
        ).exactOptional(),
        customPayload: CustomPayloadSchema.and(
          z
            .any()
            .openapi({
              description: 'A message in a custom format defined by the client application.',
            }),
        ).exactOptional(),
        ssmlMessage: SSMLMessageSchema.and(
          z.any().openapi({ description: 'A message in Speech Synthesis Markup Language (SSML).' }),
        ).exactOptional(),
        imageResponseCard: ImageResponseCardSchema.and(
          z
            .any()
            .openapi({
              description:
                'A message that defines a response card that the client application can show to the user.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description: "The object that provides message text and it's type.",
        required: [],
      }),
  )
  .openapi('Message')

const MessageVariationsListSchema = z
  .array(MessageSchema)
  .min(0)
  .max(2)
  .openapi('MessageVariationsList')

const MessageGroupSchema = z
  .object({
    message: MessageSchema.and(
      z
        .any()
        .openapi({ description: 'The primary message that Amazon Lex should send to the user.' }),
    ),
    variations: MessageVariationsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Message variations to send to the user. When variations are defined, Amazon Lex chooses the primary message or one of the variations to send to the user.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['message'],
    description: 'Provides one or more messages that Amazon Lex should send to the user.',
  })
  .openapi('MessageGroup')

const MessageGroupsListSchema = z
  .array(MessageGroupSchema)
  .min(1)
  .max(5)
  .openapi('MessageGroupsList')

const BoxedBooleanSchema = z.boolean().openapi('BoxedBoolean')

const ResponseSpecificationSchema = z
  .object({
    messageGroups: MessageGroupsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of responses that Amazon Lex can send to the user. Amazon Lex chooses the actual response to send at runtime.',
        }),
    ),
    allowInterrupt: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the user can interrupt a speech response from Amazon Lex.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['messageGroups'],
    description:
      'Specifies a list of message groups that Amazon Lex uses to respond the user input.',
  })
  .openapi('ResponseSpecification')

const DialogActionTypeSchema = z
  .enum([
    'ElicitIntent',
    'StartIntent',
    'ElicitSlot',
    'EvaluateConditional',
    'InvokeDialogCodeHook',
    'ConfirmIntent',
    'FulfillIntent',
    'CloseIntent',
    'EndConversation',
  ])
  .openapi('DialogActionType')

const DialogActionSchema = z
  .object({
    type: DialogActionTypeSchema.and(
      z.any().openapi({ description: 'The action that the bot should execute. ' }),
    ),
    slotToElicit: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the dialog action is <code>ElicitSlot</code>, defines the slot to elicit from the user.',
        }),
    ).exactOptional(),
    suppressNextMessage: BoxedBooleanSchema.and(
      z.any().openapi({ description: 'When true the next message for the intent is not used.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['type'],
    description:
      ' Defines the action that the bot executes at runtime when the conversation reaches this step.',
  })
  .openapi('DialogAction')

const SlotValueOverrideMapSchema = z
  .record(z.string(), SlotValueOverrideSchema)
  .openapi('SlotValueOverrideMap')

const IntentOverrideSchema = z
  .object({
    name: NameSchema.and(
      z
        .any()
        .openapi({
          description: "The name of the intent. Only required when you're switching intents.",
        }),
    ).exactOptional(),
    slots: SlotValueOverrideMapSchema.and(
      z
        .any()
        .openapi({
          description:
            "A map of all of the slot value overrides for the intent. The name of the slot maps to the value of the slot. Slots that are not included in the map aren't overridden.,",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Override settings to configure the intent state.', required: [] })
  .openapi('IntentOverride')

const StringSchema = z.string().openapi('String')

const StringMapSchema = z.record(z.string(), StringSchema).openapi('StringMap')

const DialogStateSchema = z
  .object({
    dialogAction: DialogActionSchema.exactOptional(),
    intent: IntentOverrideSchema.exactOptional(),
    sessionAttributes: StringMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Map of key/value pairs representing session-specific context information. It contains application information passed between Amazon Lex and a client application.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The current state of the conversation with the user.', required: [] })
  .openapi('DialogState')

const ConditionExpressionSchema = z.string().min(1).max(1024).openapi('ConditionExpression')

const ConditionSchema = z
  .object({
    expressionString: ConditionExpressionSchema.and(
      z.any().openapi({ description: 'The expression string that is evaluated. ' }),
    ),
  })
  .openapi({
    required: ['expressionString'],
    description: 'Provides an expression that evaluates to true or false. ',
  })
  .openapi('Condition')

const ConditionalBranchSchema = z
  .object({
    name: NameSchema.and(z.any().openapi({ description: 'The name of the branch. ' })),
    condition: ConditionSchema.and(
      z
        .any()
        .openapi({
          description:
            "Contains the expression to evaluate. If the condition is true, the branch's actions are taken.",
        }),
    ),
    nextStep: DialogStateSchema.and(
      z.any().openapi({ description: 'The next step in the conversation.' }),
    ),
    response: ResponseSpecificationSchema.exactOptional(),
  })
  .openapi({
    required: ['name', 'condition', 'nextStep'],
    description: 'A set of actions that Amazon Lex should run if the condition is matched.',
  })
  .openapi('ConditionalBranch')

const ConditionalBranchesSchema = z
  .array(ConditionalBranchSchema)
  .min(1)
  .max(4)
  .openapi('ConditionalBranches')

const DefaultConditionalBranchSchema = z
  .object({
    nextStep: DialogStateSchema.and(
      z.any().openapi({ description: 'The next step in the conversation.' }),
    ).exactOptional(),
    response: ResponseSpecificationSchema.exactOptional(),
  })
  .openapi({
    description:
      'A set of actions that Amazon Lex should run if none of the other conditions are met.',
    required: [],
  })
  .openapi('DefaultConditionalBranch')

const ConditionalSpecificationSchema = z
  .object({
    active: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines whether a conditional branch is active. When <code>active</code> is false, the conditions are not evaluated.',
        }),
    ),
    conditionalBranches: ConditionalBranchesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of conditional branches. A conditional branch is made up of a condition, a response and a next step. The response and next step are executed when the condition is true.',
        }),
    ),
    defaultBranch: DefaultConditionalBranchSchema.and(
      z
        .any()
        .openapi({
          description:
            'The conditional branch that should be followed when the conditions for other branches are not satisfied. A conditional branch is made up of a condition, a response and a next step.',
        }),
    ),
  })
  .openapi({
    required: ['active', 'conditionalBranches', 'defaultBranch'],
    description:
      'Provides a list of conditional branches. Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition.',
  })
  .openapi('ConditionalSpecification')

const PostFulfillmentStatusSpecificationSchema = z
  .object({
    successResponse: ResponseSpecificationSchema.exactOptional(),
    failureResponse: ResponseSpecificationSchema.exactOptional(),
    timeoutResponse: ResponseSpecificationSchema.exactOptional(),
    successNextStep: DialogStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the next step in the conversation that Amazon Lex invokes when the fulfillment code hook completes successfully.',
        }),
    ).exactOptional(),
    successConditional: ConditionalSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of conditional branches to evaluate after the fulfillment code hook finishes successfully.',
        }),
    ).exactOptional(),
    failureNextStep: DialogStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the next step the bot runs after the fulfillment code hook throws an exception or returns with the <code>State</code> field of the <code>Intent</code> object set to <code>Failed</code>.',
        }),
    ).exactOptional(),
    failureConditional: ConditionalSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of conditional branches to evaluate after the fulfillment code hook throws an exception or returns with the <code>State</code> field of the <code>Intent</code> object set to <code>Failed</code>.',
        }),
    ).exactOptional(),
    timeoutNextStep: DialogStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the next step that the bot runs when the fulfillment code hook times out.',
        }),
    ).exactOptional(),
    timeoutConditional: ConditionalSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of conditional branches to evaluate if the fulfillment code hook times out.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides a setting that determines whether the post-fulfillment response is sent to the user. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete">https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete</a> ',
    required: [],
  })
  .openapi('PostFulfillmentStatusSpecification')

const FulfillmentStartResponseDelaySchema = z
  .int()
  .min(1)
  .max(900)
  .openapi('FulfillmentStartResponseDelay')

const FulfillmentStartResponseSpecificationSchema = z
  .object({
    delayInSeconds: FulfillmentStartResponseDelaySchema.and(
      z
        .any()
        .openapi({
          description:
            "The delay between when the Lambda fulfillment function starts running and the start message is played. If the Lambda function returns before the delay is over, the start message isn't played.",
        }),
    ),
    messageGroups: MessageGroupsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'One to 5 message groups that contain start messages. Amazon Lex chooses one of the messages to play to the user.',
        }),
    ),
    allowInterrupt: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines whether the user can interrupt the start message while it is playing.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['delayInSeconds', 'messageGroups'],
    description:
      'Provides settings for a message that is sent to the user when a fulfillment Lambda function starts running.',
  })
  .openapi('FulfillmentStartResponseSpecification')

const FulfillmentUpdateResponseFrequencySchema = z
  .int()
  .min(1)
  .max(900)
  .openapi('FulfillmentUpdateResponseFrequency')

const FulfillmentUpdateResponseSpecificationSchema = z
  .object({
    frequencyInSeconds: FulfillmentUpdateResponseFrequencySchema.and(
      z
        .any()
        .openapi({
          description:
            'The frequency that a message is sent to the user. When the period ends, Amazon Lex chooses a message from the message groups and plays it to the user. If the fulfillment Lambda returns before the first period ends, an update message is not played to the user.',
        }),
    ),
    messageGroups: MessageGroupsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'One to 5 message groups that contain update messages. Amazon Lex chooses one of the messages to play to the user.',
        }),
    ),
    allowInterrupt: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines whether the user can interrupt an update message while it is playing.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['frequencyInSeconds', 'messageGroups'],
    description:
      'Provides settings for a message that is sent periodically to the user while a fulfillment Lambda function is running.',
  })
  .openapi('FulfillmentUpdateResponseSpecification')

const FulfillmentTimeoutSchema = z.int().min(1).max(900).openapi('FulfillmentTimeout')

const FulfillmentUpdatesSpecificationSchema = z
  .object({
    active: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Determines whether fulfillment updates are sent to the user. When this field is true, updates are sent.</p> <p>If the <code>active</code> field is set to true, the <code>startResponse</code>, <code>updateResponse</code>, and <code>timeoutInSeconds</code> fields are required.</p>',
        }),
    ),
    startResponse: FulfillmentStartResponseSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides configuration information for the message sent to users when the fulfillment Lambda functions starts running.',
        }),
    ).exactOptional(),
    updateResponse: FulfillmentUpdateResponseSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides configuration information for messages sent periodically to the user while the fulfillment Lambda function is running.',
        }),
    ).exactOptional(),
    timeoutInSeconds: FulfillmentTimeoutSchema.and(
      z
        .any()
        .openapi({
          description:
            'The length of time that the fulfillment Lambda function should run before it times out.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['active'],
    description:
      'Provides information for updating the user on the progress of fulfilling an intent.',
  })
  .openapi('FulfillmentUpdatesSpecification')

const FulfillmentCodeHookSettingsSchema = z
  .object({
    enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether a Lambda function should be invoked to fulfill a specific intent.',
        }),
    ),
    postFulfillmentStatusSpecification: PostFulfillmentStatusSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides settings for messages sent to the user for after the Lambda fulfillment function completes. Post-fulfillment messages can be sent for both streaming and non-streaming conversations.',
        }),
    ).exactOptional(),
    fulfillmentUpdatesSpecification: FulfillmentUpdatesSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides settings for update messages sent to the user for long-running Lambda fulfillment functions. Fulfillment updates can be used only with streaming conversations.',
        }),
    ).exactOptional(),
    active: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Determines whether the fulfillment code hook is used. When <code>active</code> is false, the code hook doesn't run.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['enabled'],
    description: 'Determines if a Lambda function should be invoked for a specific intent.',
  })
  .openapi('FulfillmentCodeHookSettings')

const PromptMaxRetriesSchema = z.int().min(0).max(5).openapi('PromptMaxRetries')

const MessageSelectionStrategySchema = z
  .enum(['Random', 'Ordered'])
  .openapi('MessageSelectionStrategy')

const AllowedInputTypesSchema = z
  .object({
    allowAudioInput: BoxedBooleanSchema.and(
      z.any().openapi({ description: 'Indicates whether audio input is allowed.' }),
    ),
    allowDTMFInput: BoxedBooleanSchema.and(
      z.any().openapi({ description: 'Indicates whether DTMF input is allowed.' }),
    ),
  })
  .openapi({
    required: ['allowAudioInput', 'allowDTMFInput'],
    description: 'Specifies the allowed input types.',
  })
  .openapi('AllowedInputTypes')

const TimeInMilliSecondsSchema = z.int().min(1).openapi('TimeInMilliSeconds')

const AudioSpecificationSchema = z
  .object({
    maxLengthMs: TimeInMilliSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Time for how long Amazon Lex waits before speech input is truncated and the speech is returned to application.',
        }),
    ),
    endTimeoutMs: TimeInMilliSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Time for which a bot waits after the customer stops speaking to assume the utterance is finished.',
        }),
    ),
  })
  .openapi({
    required: ['maxLengthMs', 'endTimeoutMs'],
    description: 'Specifies the audio input specifications.',
  })
  .openapi('AudioSpecification')

const MaxUtteranceDigitsSchema = z.int().min(1).max(1024).openapi('MaxUtteranceDigits')

const DTMFCharacterSchema = z
  .string()
  .regex(/^[A-D0-9#*]{1}$/)
  .openapi('DTMFCharacter')

const DTMFSpecificationSchema = z
  .object({
    maxLength: MaxUtteranceDigitsSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of DTMF digits allowed in an utterance.' }),
    ),
    endTimeoutMs: TimeInMilliSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'How long the bot should wait after the last DTMF character input before assuming that the input has concluded.',
        }),
    ),
    deletionCharacter: DTMFCharacterSchema.and(
      z
        .any()
        .openapi({
          description:
            'The DTMF character that clears the accumulated DTMF digits and immediately ends the input.',
        }),
    ),
    endCharacter: DTMFCharacterSchema.and(
      z
        .any()
        .openapi({
          description:
            'The DTMF character that immediately ends input. If the user does not press this character, the input ends after the end timeout.',
        }),
    ),
  })
  .openapi({
    required: ['maxLength', 'endTimeoutMs', 'deletionCharacter', 'endCharacter'],
    description: 'Specifies the DTMF input specifications.',
  })
  .openapi('DTMFSpecification')

const AudioAndDTMFInputSpecificationSchema = z
  .object({
    startTimeoutMs: TimeInMilliSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            "Time for which a bot waits before assuming that the customer isn't going to speak or press a key. This timeout is shared between Audio and DTMF inputs.",
        }),
    ),
    audioSpecification: AudioSpecificationSchema.and(
      z.any().openapi({ description: 'Specifies the settings on audio input.' }),
    ).exactOptional(),
    dtmfSpecification: DTMFSpecificationSchema.and(
      z.any().openapi({ description: 'Specifies the settings on DTMF input.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['startTimeoutMs'],
    description: 'Specifies the audio and DTMF input specification.',
  })
  .openapi('AudioAndDTMFInputSpecification')

const TextInputSpecificationSchema = z
  .object({
    startTimeoutMs: TimeInMilliSecondsSchema.and(
      z
        .any()
        .openapi({
          description: 'Time for which a bot waits before re-prompting a customer for text input.',
        }),
    ),
  })
  .openapi({
    required: ['startTimeoutMs'],
    description: 'Specifies the text input specifications.',
  })
  .openapi('TextInputSpecification')

const PromptAttemptSpecificationSchema = z
  .object({
    allowInterrupt: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the user can interrupt a speech prompt attempt from the bot.',
        }),
    ).exactOptional(),
    allowedInputTypes: AllowedInputTypesSchema.and(
      z.any().openapi({ description: 'Indicates the allowed input types of the prompt attempt.' }),
    ),
    audioAndDTMFInputSpecification: AudioAndDTMFInputSpecificationSchema.and(
      z.any().openapi({ description: 'Specifies the settings on audio and DTMF input.' }),
    ).exactOptional(),
    textInputSpecification: TextInputSpecificationSchema.and(
      z.any().openapi({ description: 'Specifies the settings on text input.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['allowedInputTypes'],
    description: 'Specifies the settings on a prompt attempt.',
  })
  .openapi('PromptAttemptSpecification')

const PromptAttemptsSpecificationMapSchema = z
  .record(z.string(), PromptAttemptSpecificationSchema)
  .openapi('PromptAttemptsSpecificationMap')

const PromptSpecificationSchema = z
  .object({
    messageGroups: MessageGroupsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of messages that Amazon Lex can send to the user. Amazon Lex chooses the actual message to send at runtime.',
        }),
    ),
    maxRetries: PromptMaxRetriesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of times the bot tries to elicit a response from the user using this prompt.',
        }),
    ),
    allowInterrupt: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether the user can interrupt a speech prompt from the bot.',
        }),
    ).exactOptional(),
    messageSelectionStrategy: MessageSelectionStrategySchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates how a message is selected from a message group among retries.',
        }),
    ).exactOptional(),
    promptAttemptsSpecification: PromptAttemptsSpecificationMapSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies the advanced settings on each attempt of the prompt.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['messageGroups', 'maxRetries'],
    description:
      'Specifies a list of message groups that Amazon Lex sends to a user to elicit a response.',
  })
  .openapi('PromptSpecification')

const PostDialogCodeHookInvocationSpecificationSchema = z
  .object({
    successResponse: ResponseSpecificationSchema.exactOptional(),
    successNextStep: DialogStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifics the next step the bot runs after the dialog code hook finishes successfully. ',
        }),
    ).exactOptional(),
    successConditional: ConditionalSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of conditional branches to evaluate after the dialog code hook finishes successfully.',
        }),
    ).exactOptional(),
    failureResponse: ResponseSpecificationSchema.exactOptional(),
    failureNextStep: DialogStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the next step the bot runs after the dialog code hook throws an exception or returns with the <code>State</code> field of the <code>Intent</code> object set to <code>Failed</code>.',
        }),
    ).exactOptional(),
    failureConditional: ConditionalSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of conditional branches to evaluate after the dialog code hook throws an exception or returns with the <code>State</code> field of the <code>Intent</code> object set to <code>Failed</code>.',
        }),
    ).exactOptional(),
    timeoutResponse: ResponseSpecificationSchema.exactOptional(),
    timeoutNextStep: DialogStateSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the next step that the bot runs when the code hook times out.',
        }),
    ).exactOptional(),
    timeoutConditional: ConditionalSpecificationSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of conditional branches to evaluate if the code hook times out.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Specifies next steps to run after the dialog code hook finishes.',
    required: [],
  })
  .openapi('PostDialogCodeHookInvocationSpecification')

const DialogCodeHookInvocationSettingSchema = z
  .object({
    enableCodeHookInvocation: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether a Lambda function should be invoked for the dialog.',
        }),
    ),
    active: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines whether a dialog code hook is used when the intent is activated.',
        }),
    ),
    invocationLabel: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A label that indicates the dialog step from which the dialog code hook is happening.',
        }),
    ).exactOptional(),
    postCodeHookSpecification: PostDialogCodeHookInvocationSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the responses and actions that Amazon Lex takes after the Lambda function is complete.',
        }),
    ),
  })
  .openapi({
    required: ['enableCodeHookInvocation', 'active', 'postCodeHookSpecification'],
    description:
      ' Settings that specify the dialog code hook that is called by Amazon Lex at a step of the conversation. ',
  })
  .openapi('DialogCodeHookInvocationSetting')

const ElicitationCodeHookInvocationSettingSchema = z
  .object({
    enableCodeHookInvocation: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether a Lambda function should be invoked for the dialog.',
        }),
    ),
    invocationLabel: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A label that indicates the dialog step from which the dialog code hook is happening.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['enableCodeHookInvocation'],
    description:
      'Settings that specify the dialog code hook that is called by Amazon Lex between eliciting slot values.',
  })
  .openapi('ElicitationCodeHookInvocationSetting')

const IntentConfirmationSettingSchema = z
  .object({
    promptSpecification: PromptSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Prompts the user to confirm the intent. This question should have a yes or no answer.</p> <p>Amazon Lex uses this prompt to ensure that the user acknowledges that the intent is ready for fulfillment. For example, with the <code>OrderPizza</code> intent, you might want to confirm that the order is correct before placing it. For other intents, such as intents that simply respond to user questions, you might not need to ask the user for confirmation before providing the information. </p>',
        }),
    ),
    declinationResponse: ResponseSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'When the user answers "no" to the question defined in <code>promptSpecification</code>, Amazon Lex responds with this response to acknowledge that the intent was canceled. ',
        }),
    ).exactOptional(),
    active: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether the intent's confirmation is sent to the user. When this field is false, confirmation and declination responses aren't sent. If the <code>active</code> field isn't specified, the default is true.",
        }),
    ).exactOptional(),
    confirmationResponse: ResponseSpecificationSchema.exactOptional(),
    confirmationNextStep: DialogStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the next step that the bot executes when the customer confirms the intent.',
        }),
    ).exactOptional(),
    confirmationConditional: ConditionalSpecificationSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of conditional branches to evaluate after the intent is closed.',
        }),
    ).exactOptional(),
    declinationNextStep: DialogStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the next step that the bot executes when the customer declines the intent.',
        }),
    ).exactOptional(),
    declinationConditional: ConditionalSpecificationSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of conditional branches to evaluate after the intent is declined.',
        }),
    ).exactOptional(),
    failureResponse: ResponseSpecificationSchema.exactOptional(),
    failureNextStep: DialogStateSchema.and(
      z
        .any()
        .openapi({
          description: 'The next step to take in the conversation if the confirmation step fails.',
        }),
    ).exactOptional(),
    failureConditional: ConditionalSpecificationSchema.exactOptional(),
    codeHook: DialogCodeHookInvocationSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            "The <code>DialogCodeHookInvocationSetting</code> object associated with intent's confirmation step. The dialog code hook is triggered based on these invocation settings when the confirmation next step or declination next step or failure next step is <code>InvokeDialogCodeHook</code>. ",
        }),
    ).exactOptional(),
    elicitationCodeHook: ElicitationCodeHookInvocationSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>DialogCodeHookInvocationSetting</code> used when the code hook is invoked during confirmation prompt retries.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['promptSpecification'],
    description:
      'Provides a prompt for making sure that the user is ready for the intent to be fulfilled.',
  })
  .openapi('IntentConfirmationSetting')

const IntentClosingSettingSchema = z
  .object({
    closingResponse: ResponseSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The response that Amazon Lex sends to the user when the intent is complete.',
        }),
    ).exactOptional(),
    active: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether an intent's closing response is used. When this field is false, the closing response isn't sent to the user. If the <code>active</code> field isn't specified, the default is true.",
        }),
    ).exactOptional(),
    nextStep: DialogStateSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the next step that the bot executes after playing the intent's closing response.",
        }),
    ).exactOptional(),
    conditional: ConditionalSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of conditional branches associated with the intent's closing response. These branches are executed when the <code>nextStep</code> attribute is set to <code>EvalutateConditional</code>.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.',
    required: [],
  })
  .openapi('IntentClosingSetting')

const InputContextSchema = z
  .object({ name: NameSchema.and(z.any().openapi({ description: 'The name of the context.' })) })
  .openapi({
    required: ['name'],
    description:
      'The name of a context that must be active for an intent to be selected by Amazon Lex.',
  })
  .openapi('InputContext')

const InputContextsListSchema = z
  .array(InputContextSchema)
  .min(0)
  .max(5)
  .openapi('InputContextsList')

const ContextTimeToLiveInSecondsSchema = z
  .int()
  .min(5)
  .max(86400)
  .openapi('ContextTimeToLiveInSeconds')

const ContextTurnsToLiveSchema = z.int().min(1).max(20).openapi('ContextTurnsToLive')

const OutputContextSchema = z
  .object({
    name: NameSchema.and(z.any().openapi({ description: 'The name of the output context.' })),
    timeToLiveInSeconds: ContextTimeToLiveInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time, in seconds, that the output context should remain active. The time is figured from the first time the context is sent to the user.',
        }),
    ),
    turnsToLive: ContextTurnsToLiveSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of conversation turns that the output context should remain active. The number of turns is counted from the first time that the context is sent to the user.',
        }),
    ),
  })
  .openapi({
    required: ['name', 'timeToLiveInSeconds', 'turnsToLive'],
    description: 'Describes a session context that is activated when an intent is fulfilled.',
  })
  .openapi('OutputContext')

const OutputContextsListSchema = z
  .array(OutputContextSchema)
  .min(0)
  .max(10)
  .openapi('OutputContextsList')

const KendraIndexArnSchema = z
  .string()
  .regex(/^arn:aws:kendra:[a-z]+-[a-z]+-[0-9]:[0-9]{12}:index\/[a-zA-Z0-9][a-zA-Z0-9_-]*$/)
  .min(32)
  .max(2048)
  .openapi('KendraIndexArn')

const QueryFilterStringSchema = z.string().min(1).max(5000).openapi('QueryFilterString')

const KendraConfigurationSchema = z
  .object({
    kendraIndex: KendraIndexArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon Kendra index that you want the AMAZON.KendraSearchIntent intent to search. The index must be in the same account and Region as the Amazon Lex bot.',
        }),
    ),
    queryFilterStringEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines whether the AMAZON.KendraSearchIntent intent uses a custom query string to query the Amazon Kendra index.',
        }),
    ).exactOptional(),
    queryFilterString: QueryFilterStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A query filter that Amazon Lex sends to Amazon Kendra to filter the response from a query. The filter is in the format defined by Amazon Kendra. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/filtering.html">Filtering queries</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['kendraIndex'],
    description:
      "Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance.",
  })
  .openapi('KendraConfiguration')

const InitialResponseSettingSchema = z
  .object({
    initialResponse: ResponseSpecificationSchema.exactOptional(),
    nextStep: DialogStateSchema.and(
      z.any().openapi({ description: 'The next step in the conversation.' }),
    ).exactOptional(),
    conditional: ConditionalSpecificationSchema.exactOptional(),
    codeHook: DialogCodeHookInvocationSettingSchema.exactOptional(),
  })
  .openapi({
    description:
      'Configuration setting for a response sent to the user before Amazon Lex starts eliciting slots.',
    required: [],
  })
  .openapi('InitialResponseSetting')

const CreateIntentResponseSchema = z
  .object({
    intentId: IdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the intent.' }),
    ).exactOptional(),
    intentName: NameSchema.and(
      z.any().openapi({ description: 'The name specified for the intent.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description specified for the intent.' }),
    ).exactOptional(),
    parentIntentSignature: IntentSignatureSchema.and(
      z
        .any()
        .openapi({ description: 'The signature of the parent intent specified for the intent.' }),
    ).exactOptional(),
    sampleUtterances: SampleUtterancesListSchema.and(
      z.any().openapi({ description: 'The sample utterances specified for the intent.' }),
    ).exactOptional(),
    dialogCodeHook: DialogCodeHookSettingsSchema.and(
      z.any().openapi({ description: 'The dialog Lambda function specified for the intent.' }),
    ).exactOptional(),
    fulfillmentCodeHook: FulfillmentCodeHookSettingsSchema.and(
      z.any().openapi({ description: 'The fulfillment Lambda function specified for the intent.' }),
    ).exactOptional(),
    intentConfirmationSetting: IntentConfirmationSettingSchema.and(
      z.any().openapi({ description: 'The confirmation setting specified for the intent.' }),
    ).exactOptional(),
    intentClosingSetting: IntentClosingSettingSchema.and(
      z.any().openapi({ description: 'The closing setting specified for the intent.' }),
    ).exactOptional(),
    inputContexts: InputContextsListSchema.and(
      z.any().openapi({ description: 'The list of input contexts specified for the intent.' }),
    ).exactOptional(),
    outputContexts: OutputContextsListSchema.and(
      z.any().openapi({ description: 'The list of output contexts specified for the intent.' }),
    ).exactOptional(),
    kendraConfiguration: KendraConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration for searching a Amazon Kendra index specified for the intent.',
        }),
    ).exactOptional(),
    botId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the bot associated with the intent.' }),
    ).exactOptional(),
    botVersion: DraftBotVersionSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the version of the bot associated with the intent.',
        }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z.any().openapi({ description: 'The locale that the intent is specified to use.' }),
    ).exactOptional(),
    creationDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'A timestamp of the date and time that the intent was created.' }),
    ).exactOptional(),
    initialResponseSetting: InitialResponseSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration settings for the response that is sent to the user at the beginning of a conversation, before eliciting slot values.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateIntentResponse')

const AmazonResourceNameSchema = z.string().min(1).max(1011).openapi('AmazonResourceName')

const RevisionIdSchema = z
  .string()
  .regex(/^[0-9]+$/)
  .min(1)
  .max(5)
  .openapi('RevisionId')

const CreateResourcePolicyResponseSchema = z
  .object({
    resourceArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy was attached to.',
        }),
    ).exactOptional(),
    revisionId: RevisionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current revision of the resource policy. Use the revision ID to make sure that you are updating the most current version of a resource policy when you add a policy statement to a resource, delete a resource, or update a resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateResourcePolicyResponse')

const CreateResourcePolicyStatementResponseSchema = z
  .object({
    resourceArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to.',
        }),
    ).exactOptional(),
    revisionId: RevisionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current revision of the resource policy. Use the revision ID to make sure that you are updating the most current version of a resource policy when you add a policy statement to a resource, delete a resource, or update a resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateResourcePolicyStatementResponse')

const PrincipalSchema: z.ZodType<PrincipalType> = z
  .lazy(() =>
    z
      .object({
        service: ServicePrincipalSchema.and(
          z
            .any()
            .openapi({
              description:
                'The name of the AWS service that should allowed or denied access to an Amazon Lex action.',
            }),
        ).exactOptional(),
        arn: PrincipalArnSchema.and(
          z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the principal.' }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'The IAM principal that you allowing or denying access to an Amazon Lex action. You must provide a <code>service</code> or an <code>arn</code>, but not both in the same statement. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html"> AWS JSON policy elements: Principal </a>.',
        required: [],
      }),
  )
  .openapi('Principal')

const OperationSchema = z
  .string()
  .regex(/lex:[a-zA-Z*]+$/)
  .min(5)
  .max(50)
  .openapi('Operation')

const ConditionValueSchema = z.string().min(1).max(1024).openapi('ConditionValue')

const ConditionKeyValueMapSchema = z
  .record(z.string(), ConditionValueSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 10)
  .openapi('ConditionKeyValueMap')

const BuiltInOrCustomSlotTypeIdSchema = z
  .string()
  .regex(/^((AMAZON\.)[a-zA-Z_]+?|[0-9a-zA-Z]+)$/)
  .min(1)
  .max(25)
  .openapi('BuiltInOrCustomSlotTypeId')

const SlotDefaultValueStringSchema = z.string().min(1).max(202).openapi('SlotDefaultValueString')

const SlotDefaultValueSchema = z
  .object({
    defaultValue: SlotDefaultValueStringSchema.and(
      z
        .any()
        .openapi({
          description: "The default value to use when a user doesn't provide a value for a slot.",
        }),
    ),
  })
  .openapi({
    required: ['defaultValue'],
    description:
      "Specifies the default value to use when a user doesn't provide a value for a slot.",
  })
  .openapi('SlotDefaultValue')

const SlotDefaultValueListSchema = z
  .array(SlotDefaultValueSchema)
  .min(0)
  .max(10)
  .openapi('SlotDefaultValueList')

const SlotDefaultValueSpecificationSchema = z
  .object({
    defaultValueList: SlotDefaultValueListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of default values. Amazon Lex chooses the default value to use in the order that they are presented in the list.',
        }),
    ),
  })
  .openapi({
    required: ['defaultValueList'],
    description:
      'Defines a list of values that Amazon Lex should use as the default value for a slot.',
  })
  .openapi('SlotDefaultValueSpecification')

const SlotConstraintSchema = z.enum(['Required', 'Optional']).openapi('SlotConstraint')

const StillWaitingResponseFrequencySchema = z
  .int()
  .min(1)
  .max(300)
  .openapi('StillWaitingResponseFrequency')

const StillWaitingResponseTimeoutSchema = z
  .int()
  .min(1)
  .max(900)
  .openapi('StillWaitingResponseTimeout')

const StillWaitingResponseSpecificationSchema = z
  .object({
    messageGroups: MessageGroupsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more message groups, each containing one or more messages, that define the prompts that Amazon Lex sends to the user.',
        }),
    ),
    frequencyInSeconds: StillWaitingResponseFrequencySchema.and(
      z
        .any()
        .openapi({
          description:
            'How often a message should be sent to the user. Minimum of 1 second, maximum of 5 minutes.',
        }),
    ),
    timeoutInSeconds: StillWaitingResponseTimeoutSchema.and(
      z
        .any()
        .openapi({
          description:
            'If Amazon Lex waits longer than this length of time for a response, it will stop sending messages.',
        }),
    ),
    allowInterrupt: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates that the user can interrupt the response by speaking while the message is being played.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['messageGroups', 'frequencyInSeconds', 'timeoutInSeconds'],
    description:
      'Defines the messages that Amazon Lex sends to a user to remind them that the bot is waiting for a response.',
  })
  .openapi('StillWaitingResponseSpecification')

const WaitAndContinueSpecificationSchema = z
  .object({
    waitingResponse: ResponseSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The response that Amazon Lex sends to indicate that the bot is waiting for the conversation to continue.',
        }),
    ),
    continueResponse: ResponseSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The response that Amazon Lex sends to indicate that the bot is ready to continue the conversation.',
        }),
    ),
    stillWaitingResponse: StillWaitingResponseSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A response that Amazon Lex sends periodically to the user to indicate that the bot is still waiting for input from the user.',
        }),
    ).exactOptional(),
    active: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether the bot will wait for a user to respond. When this field is false, wait and continue responses for a slot aren't used. If the <code>active</code> field isn't specified, the default is true.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['waitingResponse', 'continueResponse'],
    description:
      'Specifies the prompts that Amazon Lex uses while a bot is waiting for customer input. ',
  })
  .openapi('WaitAndContinueSpecification')

const SlotCaptureSettingSchema = z
  .object({
    captureResponse: ResponseSpecificationSchema.exactOptional(),
    captureNextStep: DialogStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the next step that the bot runs when the slot value is captured before the code hook times out.',
        }),
    ).exactOptional(),
    captureConditional: ConditionalSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of conditional branches to evaluate after the slot value is captured.',
        }),
    ).exactOptional(),
    failureResponse: ResponseSpecificationSchema.exactOptional(),
    failureNextStep: DialogStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the next step that the bot runs when the slot value code is not recognized.',
        }),
    ).exactOptional(),
    failureConditional: ConditionalSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of conditional branches to evaluate when the slot value isn't captured.",
        }),
    ).exactOptional(),
    codeHook: DialogCodeHookInvocationSettingSchema.and(
      z
        .any()
        .openapi({
          description: 'Code hook called after Amazon Lex successfully captures a slot value.',
        }),
    ).exactOptional(),
    elicitationCodeHook: ElicitationCodeHookInvocationSettingSchema.and(
      z
        .any()
        .openapi({ description: "Code hook called when Amazon Lex doesn't capture a slot value." }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Settings used when Amazon Lex successfully captures a slot value from a user.',
    required: [],
  })
  .openapi('SlotCaptureSetting')

const SlotValueElicitationSettingSchema = z
  .object({
    defaultValueSpecification: SlotDefaultValueSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of default values for a slot. Default values are used when Amazon Lex hasn't determined a value for a slot. You can specify default values from context variables, session attributes, and defined values.",
        }),
    ).exactOptional(),
    slotConstraint: SlotConstraintSchema.and(
      z.any().openapi({ description: 'Specifies whether the slot is required or optional.' }),
    ),
    promptSpecification: PromptSpecificationSchema.and(
      z
        .any()
        .openapi({
          description: 'The prompt that Amazon Lex uses to elicit the slot value from the user.',
        }),
    ).exactOptional(),
    sampleUtterances: SampleUtterancesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you know a specific pattern that users might respond to an Amazon Lex request for a slot value, you can provide those utterances to improve accuracy. This is optional. In most cases, Amazon Lex is capable of understanding user utterances.',
        }),
    ).exactOptional(),
    waitAndContinueSpecification: WaitAndContinueSpecificationSchema.exactOptional(),
    slotCaptureSetting: SlotCaptureSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the settings that Amazon Lex uses when a slot value is successfully entered by a user.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['slotConstraint'],
    description:
      'Specifies the elicitation setting details for constituent sub slots of a composite slot.',
  })
  .openapi('SlotValueElicitationSetting')

const ObfuscationSettingTypeSchema = z
  .enum(['None', 'DefaultObfuscation'])
  .openapi('ObfuscationSettingType')

const ObfuscationSettingSchema = z
  .object({
    obfuscationSettingType: ObfuscationSettingTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Value that determines whether Amazon Lex obscures slot values in conversation logs. The default is to obscure the values.',
        }),
    ),
  })
  .openapi({
    required: ['obfuscationSettingType'],
    description: 'Determines whether Amazon Lex obscures slot values in conversation logs. ',
  })
  .openapi('ObfuscationSetting')

const MultipleValuesSettingSchema = z
  .object({
    allowMultipleValues: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether a slot can return multiple values. When <code>true</code>, the slot may return more than one value in a response. When <code>false</code>, the slot returns only a single value.</p> <p>Multi-value slots are only available in the en-US locale. If you set this value to <code>true</code> in any other locale, Amazon Lex throws a <code>ValidationException</code>.</p> <p>If the <code>allowMutlipleValues</code> is not set, the default value is <code>false</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Indicates whether a slot can return multiple values.', required: [] })
  .openapi('MultipleValuesSetting')

const SubSlotExpressionSchema = z
  .string()
  .regex(/[0-9A-Za-z_\-\s\(\)]+/)
  .min(0)
  .max(640)
  .openapi('SubSlotExpression')

const SubSlotValueElicitationSettingSchema = z
  .object({
    defaultValueSpecification: SlotDefaultValueSpecificationSchema.exactOptional(),
    promptSpecification: PromptSpecificationSchema,
    sampleUtterances: SampleUtterancesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you know a specific pattern that users might respond to an Amazon Lex request for a sub slot value, you can provide those utterances to improve accuracy. This is optional. In most cases Amazon Lex is capable of understanding user utterances. This is similar to <code>SampleUtterances</code> for slots.',
        }),
    ).exactOptional(),
    waitAndContinueSpecification: WaitAndContinueSpecificationSchema.exactOptional(),
  })
  .openapi({
    required: ['promptSpecification'],
    description:
      "<p>Subslot elicitation settings.</p> <p> <code>DefaultValueSpecification</code> is a list of default values for a constituent sub slot in a composite slot. Default values are used when Amazon Lex hasn't determined a value for a slot. You can specify default values from context variables, session attributes, and defined values. This is similar to <code>DefaultValueSpecification</code> for slots.</p> <p> <code>PromptSpecification</code> is the prompt that Amazon Lex uses to elicit the sub slot value from the user. This is similar to <code>PromptSpecification</code> for slots.</p>",
  })
  .openapi('SubSlotValueElicitationSetting')

const SpecificationsSchema = z
  .object({
    slotTypeId: BuiltInOrCustomSlotTypeIdSchema.and(
      z.any().openapi({ description: 'The unique identifier assigned to the slot type.' }),
    ),
    valueElicitationSetting: SubSlotValueElicitationSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the elicitation setting details for constituent sub slots of a composite slot.',
        }),
    ),
  })
  .openapi({
    required: ['slotTypeId', 'valueElicitationSetting'],
    description: 'Subslot specifications.',
  })
  .openapi('Specifications')

const SubSlotSpecificationMapSchema = z
  .record(z.string(), SpecificationsSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 6)
  .openapi('SubSlotSpecificationMap')

const SubSlotSettingSchema = z
  .object({
    expression: SubSlotExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The expression text for defining the constituent sub slots in the composite slot using logical AND and OR operators.',
        }),
    ).exactOptional(),
    slotSpecifications: SubSlotSpecificationMapSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifications for the constituent sub slots of a composite slot.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifications for the constituent sub slots and the expression for the composite slot.',
    required: [],
  })
  .openapi('SubSlotSetting')

const CreateSlotResponseSchema = z
  .object({
    slotId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier associated with the slot. Use this to identify the slot when you update or delete it.',
        }),
    ).exactOptional(),
    slotName: NameSchema.and(
      z.any().openapi({ description: 'The name specified for the slot.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description associated with the slot.' }),
    ).exactOptional(),
    slotTypeId: BuiltInOrCustomSlotTypeIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier of the slot type associated with this slot.',
        }),
    ).exactOptional(),
    valueElicitationSetting: SlotValueElicitationSettingSchema.and(
      z.any().openapi({ description: 'The value elicitation settings specified for the slot.' }),
    ).exactOptional(),
    obfuscationSetting: ObfuscationSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the slot is configured to obfuscate values in Amazon CloudWatch logs.',
        }),
    ).exactOptional(),
    botId: IdSchema.and(
      z
        .any()
        .openapi({ description: 'The unique identifier of the bot associated with the slot.' }),
    ).exactOptional(),
    botVersion: DraftBotVersionSchema.and(
      z.any().openapi({ description: 'The version of the bot associated with the slot.' }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z.any().openapi({ description: 'The language and local specified for the slot.' }),
    ).exactOptional(),
    intentId: IdSchema.and(
      z
        .any()
        .openapi({ description: 'The unique identifier of the intent associated with the slot.' }),
    ).exactOptional(),
    creationDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The timestamp of the date and time that the slot was created.' }),
    ).exactOptional(),
    multipleValuesSetting: MultipleValuesSettingSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether the slot returns multiple values in one response.',
        }),
    ).exactOptional(),
    subSlotSetting: SubSlotSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifications for the constituent sub slots and the expression for the composite slot.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateSlotResponse')

const ValueSchema = z.string().min(1).max(140).openapi('Value')

const SampleValueSchema = z
  .object({
    value: ValueSchema.and(
      z.any().openapi({ description: 'The value that can be used for a slot type.' }),
    ),
  })
  .openapi({ required: ['value'], description: 'Defines one of the values for a slot type.' })
  .openapi('SampleValue')

const SynonymListSchema = z.array(SampleValueSchema).min(1).max(10000).openapi('SynonymList')

const SlotTypeValueSchema = z
  .object({
    sampleValue: SampleValueSchema.and(
      z.any().openapi({ description: 'The value of the slot type entry.' }),
    ).exactOptional(),
    synonyms: SynonymListSchema.and(
      z.any().openapi({ description: 'Additional values related to the slot type entry.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Each slot type can have a set of values. Each <code>SlotTypeValue</code> represents a value that the slot type can take.',
    required: [],
  })
  .openapi('SlotTypeValue')

const SlotTypeValuesSchema = z
  .array(SlotTypeValueSchema)
  .min(1)
  .max(10000)
  .openapi('SlotTypeValues')

const SlotValueResolutionStrategySchema = z
  .enum(['OriginalValue', 'TopResolution', 'Concatenation'])
  .openapi('SlotValueResolutionStrategy')

const RegexPatternSchema = z.string().min(1).max(300).openapi('RegexPattern')

const SlotValueRegexFilterSchema = z
  .object({
    pattern: RegexPatternSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A regular expression used to validate the value of a slot.</p> <p> Use a standard regular expression. Amazon Lex supports the following characters in the regular expression: </p> <ul> <li> <p>A-Z, a-z</p> </li> <li> <p>0-9</p> </li> <li> <p>Unicode characters ("\\ u&lt;Unicode&gt;")</p> </li> </ul> <p> Represent Unicode characters with four digits, for example "\\u0041" or "\\u005A". </p> <p> The following regular expression operators are not supported: </p> <ul> <li> <p>Infinite repeaters: *, +, or {x,} with no upper bound.</p> </li> <li> <p>Wild card (.)</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['pattern'],
    description: 'Provides a regular expression used to validate the value of a slot.',
  })
  .openapi('SlotValueRegexFilter')

const AudioRecognitionStrategySchema = z
  .literal('UseSlotValuesAsCustomVocabulary')
  .openapi('AudioRecognitionStrategy')

const AdvancedRecognitionSettingSchema = z
  .object({
    audioRecognitionStrategy: AudioRecognitionStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            'Enables using the slot values as a custom vocabulary for recognizing user utterances.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides settings that enable advanced recognition settings for slot values.',
    required: [],
  })
  .openapi('AdvancedRecognitionSetting')

const SlotValueSelectionSettingSchema = z
  .object({
    resolutionStrategy: SlotValueResolutionStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Determines the slot resolution strategy that Amazon Lex uses to return slot type values. The field can be set to one of the following values:</p> <ul> <li> <p>OriginalValue - Returns the value entered by the user, if the user value is similar to the slot value.</p> </li> <li> <p>TopResolution - If there is a resolution list for the slot, return the first value in the resolution list as the slot type value. If there is no resolution list, null is returned.</p> </li> </ul> <p>If you don't specify the valueSelectionStrategy, the default is OriginalValue. </p>",
        }),
    ),
    regexFilter: SlotValueRegexFilterSchema.and(
      z
        .any()
        .openapi({ description: 'A regular expression used to validate the value of a slot.' }),
    ).exactOptional(),
    advancedRecognitionSetting: AdvancedRecognitionSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides settings that enable advanced recognition settings for slot values.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['resolutionStrategy'],
    description: 'Contains settings used by Amazon Lex to select a slot value.',
  })
  .openapi('SlotValueSelectionSetting')

const SlotTypeSignatureSchema = z.string().openapi('SlotTypeSignature')

const S3BucketNameSchema = z
  .string()
  .regex(/^[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$/)
  .min(3)
  .max(63)
  .openapi('S3BucketName')

const S3ObjectPathSchema = z
  .string()
  .regex(/[\.\-\!\*\_\'\(\)a-zA-Z0-9][\.\-\!\*\_\'\(\)\/a-zA-Z0-9]*$/)
  .min(1)
  .max(1024)
  .openapi('S3ObjectPath')

const GrammarSlotTypeSourceSchema = z
  .object({
    s3BucketName: S3BucketNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the S3 bucket that contains the grammar source.' }),
    ),
    s3ObjectKey: S3ObjectPathSchema.and(
      z.any().openapi({ description: 'The path to the grammar in the S3 bucket.' }),
    ),
    kmsKeyArn: KmsKeyArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon KMS key required to decrypt the contents of the grammar, if any.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['s3BucketName', 's3ObjectKey'],
    description:
      'Describes the Amazon S3 bucket name and location for the grammar that is the source for the slot type.',
  })
  .openapi('GrammarSlotTypeSource')

const GrammarSlotTypeSettingSchema = z
  .object({
    source: GrammarSlotTypeSourceSchema.and(
      z.any().openapi({ description: 'The source of the grammar used to create the slot type.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Settings requried for a slot type based on a grammar that you provide.',
    required: [],
  })
  .openapi('GrammarSlotTypeSetting')

const ExternalSourceSettingSchema = z
  .object({
    grammarSlotTypeSetting: GrammarSlotTypeSettingSchema.and(
      z
        .any()
        .openapi({
          description: 'Settings required for a slot type based on a grammar that you provide.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: "Provides information about the external source of the slot type's definition.",
    required: [],
  })
  .openapi('ExternalSourceSetting')

const SubSlotTypeCompositionSchema = z
  .object({
    name: NameSchema.and(
      z.any().openapi({ description: 'Name of a constituent sub slot inside a composite slot.' }),
    ),
    slotTypeId: BuiltInOrCustomSlotTypeIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier assigned to a slot type. This refers to either a built-in slot type or the unique slotTypeId of a custom slot type.',
        }),
    ),
  })
  .openapi({ required: ['name', 'slotTypeId'], description: 'Subslot type composition.' })
  .openapi('SubSlotTypeComposition')

const SubSlotTypeListSchema = z
  .array(SubSlotTypeCompositionSchema)
  .min(0)
  .max(6)
  .openapi('SubSlotTypeList')

const CompositeSlotTypeSettingSchema = z
  .object({
    subSlots: SubSlotTypeListSchema.and(
      z.any().openapi({ description: 'Subslots in the composite slot.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A composite slot is a combination of two or more slots that capture multiple pieces of information in a single user input.',
    required: [],
  })
  .openapi('CompositeSlotTypeSetting')

const CreateSlotTypeResponseSchema = z
  .object({
    slotTypeId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier assigned to the slot type. Use this to identify the slot type in the <code>UpdateSlotType</code> and <code>DeleteSlotType</code> operations.',
        }),
    ).exactOptional(),
    slotTypeName: NameSchema.and(
      z.any().openapi({ description: 'The name specified for the slot type.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description specified for the slot type.' }),
    ).exactOptional(),
    slotTypeValues: SlotTypeValuesSchema.and(
      z.any().openapi({ description: 'The list of values that the slot type can assume.' }),
    ).exactOptional(),
    valueSelectionSetting: SlotValueSelectionSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'The strategy that Amazon Lex uses to select a value from the list of possible values.',
        }),
    ).exactOptional(),
    parentSlotTypeSignature: SlotTypeSignatureSchema.and(
      z
        .any()
        .openapi({
          description: 'The signature of the base slot type specified for the slot type.',
        }),
    ).exactOptional(),
    botId: IdSchema.and(
      z.any().openapi({ description: 'The identifier for the bot associated with the slot type.' }),
    ).exactOptional(),
    botVersion: DraftBotVersionSchema.and(
      z.any().openapi({ description: 'The version of the bot associated with the slot type.' }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z
        .any()
        .openapi({ description: 'The specified language and local specified for the slot type.' }),
    ).exactOptional(),
    creationDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A timestamp of the date and time that the slot type was created.',
        }),
    ).exactOptional(),
    externalSourceSetting: ExternalSourceSettingSchema.and(
      z
        .any()
        .openapi({ description: 'The type of external information used to create the slot type.' }),
    ).exactOptional(),
    compositeSlotTypeSetting: CompositeSlotTypeSettingSchema.and(
      z.any().openapi({ description: 'Specifications for a composite slot type.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateSlotTypeResponse')

const PresignedS3UrlSchema = z.string().min(1).max(1024).openapi('PresignedS3Url')

const CreateUploadUrlResponseSchema = z
  .object({
    importId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier for a unique import job. Use it when you call the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_StartImport.html">StartImport</a> operation.',
        }),
    ).exactOptional(),
    uploadUrl: PresignedS3UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'A pre-signed S3 write URL. Upload the zip archive file that contains the definition of your bot or bot locale.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateUploadUrlResponse')

const DeleteBotResponseSchema = z
  .object({
    botId: IdSchema.and(
      z
        .any()
        .openapi({ description: 'The unique identifier of the bot that Amazon Lex is deleting.' }),
    ).exactOptional(),
    botStatus: BotStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the bot. The status is <code>Deleting</code> while the bot and its associated resources are being deleted.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteBotResponse')

const DeleteBotAliasResponseSchema = z
  .object({
    botAliasId: BotAliasIdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the bot alias to delete.' }),
    ).exactOptional(),
    botId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier of the bot that contains the alias to delete.',
        }),
    ).exactOptional(),
    botAliasStatus: BotAliasStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the alias. The status is <code>Deleting</code> while the alias is in the process of being deleted. Once the alias is deleted, it will no longer appear in the list of aliases returned by the <code>ListBotAliases</code> operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteBotAliasResponse')

const DeleteBotLocaleResponseSchema = z
  .object({
    botId: IdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the bot that contained the deleted locale.' }),
    ).exactOptional(),
    botVersion: DraftBotVersionSchema.and(
      z.any().openapi({ description: 'The version of the bot that contained the deleted locale.' }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z.any().openapi({ description: 'The language and locale of the deleted locale.' }),
    ).exactOptional(),
    botLocaleStatus: BotLocaleStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of deleting the bot locale. The locale first enters the <code>Deleting</code> status. Once the locale is deleted it no longer appears in the list of locales for the bot.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteBotLocaleResponse')

const DeleteBotVersionResponseSchema = z
  .object({
    botId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the bot that is being deleted.' }),
    ).exactOptional(),
    botVersion: NumericalBotVersionSchema.and(
      z.any().openapi({ description: 'The version of the bot that is being deleted.' }),
    ).exactOptional(),
    botStatus: BotStatusSchema.and(
      z.any().openapi({ description: 'The current status of the bot. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteBotVersionResponse')

const CustomVocabularyStatusSchema = z
  .enum(['Ready', 'Deleting', 'Exporting', 'Importing', 'Creating'])
  .openapi('CustomVocabularyStatus')

const DeleteCustomVocabularyResponseSchema = z
  .object({
    botId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the bot that the custom vocabulary was removed from.',
        }),
    ).exactOptional(),
    botVersion: DraftBotVersionSchema.and(
      z
        .any()
        .openapi({
          description: 'The version of the bot that the custom vocabulary was removed from.',
        }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The locale identifier for the locale that the custom vocabulary was removed from.',
        }),
    ).exactOptional(),
    customVocabularyStatus: CustomVocabularyStatusSchema.and(
      z.any().openapi({ description: 'The status of removing the custom vocabulary.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteCustomVocabularyResponse')

const DeleteExportResponseSchema = z
  .object({
    exportId: IdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the deleted export.' }),
    ).exactOptional(),
    exportStatus: ExportStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the deletion. When the deletion is complete, the export will no longer be returned by the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListExports.html">ListExports</a> operation and calls to the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeExport.html"> DescribeExport</a> operation with the export identifier will fail.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteExportResponse')

const ImportStatusSchema = z
  .enum(['InProgress', 'Completed', 'Failed', 'Deleting'])
  .openapi('ImportStatus')

const DeleteImportResponseSchema = z
  .object({
    importId: IdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the deleted import.' }),
    ).exactOptional(),
    importStatus: ImportStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the deletion. When the deletion is complete, the import will no longer be returned by the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListImports.html">ListImports</a> operation and calls to the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeImport.html">DescribeImport</a> operation with the import identifier will fail.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteImportResponse')

const DeleteResourcePolicyResponseSchema = z
  .object({
    resourceArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy was deleted from.',
        }),
    ).exactOptional(),
    revisionId: RevisionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current revision of the resource policy. Use the revision ID to make sure that you are updating the most current version of a resource policy when you add a policy statement to a resource, delete a resource, or update a resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteResourcePolicyResponse')

const DeleteResourcePolicyStatementResponseSchema = z
  .object({
    resourceArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy statement was removed from.',
        }),
    ).exactOptional(),
    revisionId: RevisionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current revision of the resource policy. Use the revision ID to make sure that you are updating the most current version of a resource policy when you add a policy statement to a resource, delete a resource, or update a resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteResourcePolicyStatementResponse')

const DeleteUtterancesResponseSchema = z.object({}).openapi('DeleteUtterancesResponse')

const FailureReasonSchema = z.string().openapi('FailureReason')

const FailureReasonsSchema = z.array(FailureReasonSchema).openapi('FailureReasons')

const DescribeBotResponseSchema = z
  .object({
    botId: IdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the bot.' }),
    ).exactOptional(),
    botName: NameSchema.and(
      z.any().openapi({ description: 'The name of the bot.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the bot. ' }),
    ).exactOptional(),
    roleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an IAM role that has permission to access the bot.',
        }),
    ).exactOptional(),
    dataPrivacy: DataPrivacySchema.and(
      z
        .any()
        .openapi({
          description:
            'Settings for managing data privacy of the bot and its conversations with users.',
        }),
    ).exactOptional(),
    idleSessionTTLInSeconds: SessionTTLSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum time in seconds that Amazon Lex retains the data gathered in a conversation.',
        }),
    ).exactOptional(),
    botStatus: BotStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the bot. When the status is <code>Available</code> the bot is ready to be used in conversations with users.',
        }),
    ).exactOptional(),
    creationDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'A timestamp of the date and time that the bot was created.' }),
    ).exactOptional(),
    lastUpdatedDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A timestamp of the date and time that the bot was last updated.',
        }),
    ).exactOptional(),
    botType: BotTypeSchema.and(
      z.any().openapi({ description: 'The type of the bot that was described.' }),
    ).exactOptional(),
    botMembers: BotMembersSchema.and(
      z.any().openapi({ description: 'The list of bots in the network that was described.' }),
    ).exactOptional(),
    failureReasons: FailureReasonsSchema.and(
      z
        .any()
        .openapi({
          description:
            "If the <code>botStatus</code> is <code>Failed</code>, this contains a list of reasons that the bot couldn't be built.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeBotResponse')

const BotAliasHistoryEventSchema = z
  .object({
    botVersion: BotVersionSchema.and(
      z.any().openapi({ description: 'The version of the bot that was used in the event. ' }),
    ).exactOptional(),
    startDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the event started.' }),
    ).exactOptional(),
    endDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the event ended.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides a record of an event that affects a bot alias. For example, when the version of a bot that the alias points to changes.',
    required: [],
  })
  .openapi('BotAliasHistoryEvent')

const BotAliasHistoryEventsListSchema = z
  .array(BotAliasHistoryEventSchema)
  .openapi('BotAliasHistoryEventsList')

const ParentBotNetworkSchema = z
  .object({
    botId: IdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the network of bots assigned by Amazon Lex.' }),
    ),
    botVersion: BotVersionSchema.and(
      z.any().openapi({ description: 'The version of the network of bots.' }),
    ),
  })
  .openapi({ required: ['botId', 'botVersion'], description: 'A network of bots.' })
  .openapi('ParentBotNetwork')

const ParentBotNetworksSchema = z
  .array(ParentBotNetworkSchema)
  .min(0)
  .max(30)
  .openapi('ParentBotNetworks')

const DescribeBotAliasResponseSchema = z
  .object({
    botAliasId: BotAliasIdSchema.and(
      z.any().openapi({ description: 'The identifier of the bot alias.' }),
    ).exactOptional(),
    botAliasName: NameSchema.and(
      z.any().openapi({ description: 'The name of the bot alias.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the bot alias.' }),
    ).exactOptional(),
    botVersion: BotVersionSchema.and(
      z.any().openapi({ description: 'The version of the bot associated with the bot alias.' }),
    ).exactOptional(),
    botAliasLocaleSettings: BotAliasLocaleSettingsMapSchema.and(
      z.any().openapi({ description: 'The locale settings that are unique to the alias.' }),
    ).exactOptional(),
    conversationLogSettings: ConversationLogSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifics of how Amazon Lex logs text and audio conversations with the bot associated with the alias.',
        }),
    ).exactOptional(),
    sentimentAnalysisSettings: SentimentAnalysisSettingsSchema.exactOptional(),
    botAliasHistoryEvents: BotAliasHistoryEventsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of events that affect a bot alias. For example, an event is recorded when the version that the alias points to changes.',
        }),
    ).exactOptional(),
    botAliasStatus: BotAliasStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the alias. When the alias is <code>Available</code>, the alias is ready for use with your bot.',
        }),
    ).exactOptional(),
    botId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the bot associated with the bot alias.' }),
    ).exactOptional(),
    creationDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'A timestamp of the date and time that the alias was created.' }),
    ).exactOptional(),
    lastUpdatedDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A timestamp of the date and time that the alias was last updated.',
        }),
    ).exactOptional(),
    parentBotNetworks: ParentBotNetworksSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of the networks to which the bot alias you described belongs.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeBotAliasResponse')

const ResourceCountSchema = z.int().openapi('ResourceCount')

const BotLocaleHistoryEventDescriptionSchema = z
  .string()
  .openapi('BotLocaleHistoryEventDescription')

const BotLocaleHistoryEventSchema = z
  .object({
    event: BotLocaleHistoryEventDescriptionSchema.and(
      z.any().openapi({ description: 'A description of the event that occurred.' }),
    ),
    eventDate: TimestampSchema.and(
      z.any().openapi({ description: 'A timestamp of the date and time that the event occurred.' }),
    ),
  })
  .openapi({
    required: ['event', 'eventDate'],
    description: 'Provides information about an event that occurred affecting the bot locale.',
  })
  .openapi('BotLocaleHistoryEvent')

const BotLocaleHistoryEventsListSchema = z
  .array(BotLocaleHistoryEventSchema)
  .openapi('BotLocaleHistoryEventsList')

const RecommendedActionSchema = z.string().openapi('RecommendedAction')

const RecommendedActionsSchema = z.array(RecommendedActionSchema).openapi('RecommendedActions')

const DescribeBotLocaleResponseSchema = z
  .object({
    botId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the bot associated with the locale.' }),
    ).exactOptional(),
    botVersion: BotVersionSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the version of the bot associated with the locale.',
        }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the described locale.' }),
    ).exactOptional(),
    localeName: LocaleNameSchema.and(
      z.any().openapi({ description: 'The name of the locale.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the locale.' }),
    ).exactOptional(),
    nluIntentConfidenceThreshold: ConfidenceThresholdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The confidence threshold where Amazon Lex inserts the <code>AMAZON.FallbackIntent</code> and <code>AMAZON.KendraSearchIntent</code> intents in the list of possible intents for an utterance.',
        }),
    ).exactOptional(),
    voiceSettings: VoiceSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Polly voice Amazon Lex uses for voice interaction with the user.',
        }),
    ).exactOptional(),
    intentsCount: ResourceCountSchema.and(
      z.any().openapi({ description: 'The number of intents defined for the locale.' }),
    ).exactOptional(),
    slotTypesCount: ResourceCountSchema.and(
      z.any().openapi({ description: 'The number of slot types defined for the locale.' }),
    ).exactOptional(),
    botLocaleStatus: BotLocaleStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the bot. If the status is <code>Failed</code>, the reasons for the failure are listed in the <code>failureReasons</code> field.',
        }),
    ).exactOptional(),
    failureReasons: FailureReasonsSchema.and(
      z
        .any()
        .openapi({
          description:
            'if <code>botLocaleStatus</code> is <code>Failed</code>, Amazon Lex explains why it failed to build the bot.',
        }),
    ).exactOptional(),
    creationDateTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the locale was created.' }),
    ).exactOptional(),
    lastUpdatedDateTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the locale was last updated.' }),
    ).exactOptional(),
    lastBuildSubmittedDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the locale was last submitted for building.',
        }),
    ).exactOptional(),
    botLocaleHistoryEvents: BotLocaleHistoryEventsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'History of changes, such as when a locale is used in an alias, that have taken place for the locale.',
        }),
    ).exactOptional(),
    recommendedActions: RecommendedActionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Recommended actions to take to resolve an error in the <code>failureReasons</code> field.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeBotLocaleResponse')

const BotRecommendationStatusSchema = z
  .enum([
    'Processing',
    'Deleting',
    'Deleted',
    'Downloading',
    'Updating',
    'Available',
    'Failed',
    'Stopping',
    'Stopped',
  ])
  .openapi('BotRecommendationStatus')

const ObjectPrefixSchema = z
  .string()
  .regex(/^[\/]\?\+[a-zA-Z0-9!_.*'\(\)-]\+\(\/[a-zA-Z0-9!_.*'\(\)-]\+\)*$/)
  .min(1)
  .openapi('ObjectPrefix')

const ObjectPrefixesSchema = z.array(ObjectPrefixSchema).min(1).max(2).openapi('ObjectPrefixes')

const PathFormatSchema = z
  .object({
    objectPrefixes: ObjectPrefixesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of Amazon S3 prefixes that points to sub-folders in the Amazon S3 bucket. Specify this list if you only want Lex to read the files under this set of sub-folders.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The object that contains a path format that will be applied when Amazon Lex reads the transcript file in the bucket you provide. Specify this object if you only want Lex to read a subset of files in your Amazon S3 bucket.',
    required: [],
  })
  .openapi('PathFormat')

const TranscriptFormatSchema = z.literal('Lex').openapi('TranscriptFormat')

const TranscriptFilterSchema: z.ZodType<TranscriptFilterType> = z
  .lazy(() =>
    z
      .object({
        lexTranscriptFilter: LexTranscriptFilterSchema.and(
          z
            .any()
            .openapi({
              description:
                'The object representing the filter that Amazon Lex will use to select the appropriate transcript when the transcript format is the Amazon Lex format.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'The object representing the filter that Amazon Lex will use to select the appropriate transcript.',
        required: [],
      }),
  )
  .openapi('TranscriptFilter')

const S3BucketTranscriptSourceSchema = z
  .object({
    s3BucketName: S3BucketNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the bucket containing the transcript and the associated metadata.',
        }),
    ),
    pathFormat: PathFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The object that contains a path format that will be applied when Amazon Lex reads the transcript file in the bucket you provide. Specify this object if you only want Lex to read a subset of files in your Amazon S3 bucket.',
        }),
    ).exactOptional(),
    transcriptFormat: TranscriptFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The format of the transcript content. Currently, Genie only supports the Amazon Lex transcript format.',
        }),
    ),
    transcriptFilter: TranscriptFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'The object that contains the filter which will be applied when Amazon Lex reads through the Amazon S3 bucket. Specify this object if you want Amazon Lex to read only a subset of the Amazon S3 bucket based on the filter you provide.',
        }),
    ).exactOptional(),
    kmsKeyArn: KmsKeyArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the KMS key that customer use to encrypt their Amazon S3 bucket. Only use this field if your bucket is encrypted using a customer managed KMS key.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['s3BucketName', 'transcriptFormat'],
    description:
      'The object representing the Amazon S3 bucket containing the transcript, as well as the associated metadata.',
  })
  .openapi('S3BucketTranscriptSource')

const TranscriptSourceSettingSchema = z
  .object({
    s3BucketTranscriptSource: S3BucketTranscriptSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates the setting of the Amazon S3 bucket where the transcript is stored.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Indicates the setting of the location where the transcript is stored.',
    required: [],
  })
  .openapi('TranscriptSourceSetting')

const FilePasswordSchema = z.string().min(0).max(1024).openapi('FilePassword')

const EncryptionSettingSchema = z
  .object({
    kmsKeyArn: KmsKeyArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The KMS key ARN used to encrypt the metadata associated with the bot recommendation.',
        }),
    ).exactOptional(),
    botLocaleExportPassword: FilePasswordSchema.and(
      z
        .any()
        .openapi({
          description: 'The password used to encrypt the recommended bot recommendation file.',
        }),
    ).exactOptional(),
    associatedTranscriptsPassword: FilePasswordSchema.and(
      z
        .any()
        .openapi({ description: 'The password used to encrypt the associated transcript file.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The object representing the passwords that were used to encrypt the data related to the bot recommendation, as well as the KMS key ARN used to encrypt the associated metadata.',
    required: [],
  })
  .openapi('EncryptionSetting')

const CountSchema = z.int().openapi('Count')

const IntentStatisticsSchema = z
  .object({
    discoveredIntentCount: CountSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of recommended intents associated with the bot recommendation.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The object that contains the statistical summary of recommended intents associated with the bot recommendation.',
    required: [],
  })
  .openapi('IntentStatistics')

const SlotTypeStatisticsSchema = z
  .object({
    discoveredSlotTypeCount: CountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of recommended slot types associated with the bot recommendation.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The object that contains the statistical summary of the recommended slot type associated with the bot recommendation.',
    required: [],
  })
  .openapi('SlotTypeStatistics')

const BotRecommendationResultStatisticsSchema = z
  .object({
    intents: IntentStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Statistical information about about the intents associated with the bot recommendation results.',
        }),
    ).exactOptional(),
    slotTypes: SlotTypeStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Statistical information about the slot types associated with the bot recommendation results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A statistical summary of the bot recommendation results.',
    required: [],
  })
  .openapi('BotRecommendationResultStatistics')

const BotRecommendationResultsSchema = z
  .object({
    botLocaleExportUrl: PresignedS3UrlSchema.and(
      z.any().openapi({ description: 'The presigned URL link of the recommended bot definition.' }),
    ).exactOptional(),
    associatedTranscriptsUrl: PresignedS3UrlSchema.and(
      z.any().openapi({ description: 'The presigned url link of the associated transcript.' }),
    ).exactOptional(),
    statistics: BotRecommendationResultStatisticsSchema.and(
      z
        .any()
        .openapi({ description: 'The statistical summary of the bot recommendation results.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The object representing the URL of the bot definition, the URL of the associated transcript, and a statistical summary of the bot recommendation results.',
    required: [],
  })
  .openapi('BotRecommendationResults')

const DescribeBotRecommendationResponseSchema = z
  .object({
    botId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the bot associated with the bot recommendation.',
        }),
    ).exactOptional(),
    botVersion: DraftBotVersionSchema.and(
      z
        .any()
        .openapi({ description: 'The version of the bot associated with the bot recommendation.' }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the language and locale of the bot recommendation to describe.',
        }),
    ).exactOptional(),
    botRecommendationStatus: BotRecommendationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the bot recommendation. If the status is Failed, then the reasons for the failure are listed in the failureReasons field. ',
        }),
    ).exactOptional(),
    botRecommendationId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the bot recommendation being described.' }),
    ).exactOptional(),
    failureReasons: FailureReasonsSchema.and(
      z
        .any()
        .openapi({ description: 'If botRecommendationStatus is Failed, Amazon Lex explains why.' }),
    ).exactOptional(),
    creationDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time that the bot recommendation was created.' }),
    ).exactOptional(),
    lastUpdatedDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the bot recommendation was last updated.',
        }),
    ).exactOptional(),
    transcriptSourceSetting: TranscriptSourceSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'The object representing the Amazon S3 bucket containing the transcript, as well as the associated metadata.',
        }),
    ).exactOptional(),
    encryptionSetting: EncryptionSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'The object representing the passwords that were used to encrypt the data related to the bot recommendation results, as well as the KMS key ARN used to encrypt the associated metadata.',
        }),
    ).exactOptional(),
    botRecommendationResults: BotRecommendationResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The object representing the URL of the bot definition, the URL of the associated transcript and a statistical summary of the bot recommendation results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeBotRecommendationResponse')

const DescribeBotVersionResponseSchema = z
  .object({
    botId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the bot that contains the version.' }),
    ).exactOptional(),
    botName: NameSchema.and(
      z.any().openapi({ description: 'The name of the bot that contains the version.' }),
    ).exactOptional(),
    botVersion: NumericalBotVersionSchema.and(
      z.any().openapi({ description: 'The version of the bot that was described.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description specified for the bot.' }),
    ).exactOptional(),
    roleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an IAM role that has permission to access the bot version.',
        }),
    ).exactOptional(),
    dataPrivacy: DataPrivacySchema.and(
      z.any().openapi({ description: 'Data privacy settings for the bot version.' }),
    ).exactOptional(),
    idleSessionTTLInSeconds: SessionTTLSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of seconds that a session with the bot remains active before it is discarded by Amazon Lex.',
        }),
    ).exactOptional(),
    botStatus: BotStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the bot. When the status is <code>Available</code>, the bot version is ready for use.',
        }),
    ).exactOptional(),
    failureReasons: FailureReasonsSchema.and(
      z
        .any()
        .openapi({
          description:
            "If the <code>botStatus</code> is <code>Failed</code>, this contains a list of reasons that the version couldn't be built.",
        }),
    ).exactOptional(),
    creationDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A timestamp of the date and time that the bot version was created.',
        }),
    ).exactOptional(),
    parentBotNetworks: ParentBotNetworksSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of the networks to which the bot version you described belongs.',
        }),
    ).exactOptional(),
    botType: BotTypeSchema.and(
      z.any().openapi({ description: 'The type of the bot in the version that was described.' }),
    ).exactOptional(),
    botMembers: BotMembersSchema.and(
      z
        .any()
        .openapi({ description: 'The members of bot network in the version that was described.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeBotVersionResponse')

const DescribeCustomVocabularyMetadataResponseSchema = z
  .object({
    botId: IdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the bot that contains the custom vocabulary.' }),
    ).exactOptional(),
    botVersion: BotVersionSchema.and(
      z
        .any()
        .openapi({
          description: 'The version of the bot that contains the custom vocabulary to describe.',
        }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z
        .any()
        .openapi({ description: 'The locale that contains the custom vocabulary to describe.' }),
    ).exactOptional(),
    customVocabularyStatus: CustomVocabularyStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the custom vocabulary. If the status is <code>Ready</code> the custom vocabulary is ready to use.',
        }),
    ).exactOptional(),
    creationDateTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the custom vocabulary was created.' }),
    ).exactOptional(),
    lastUpdatedDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time that the custom vocabulary was last updated.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeCustomVocabularyMetadataResponse')

const DescribeExportResponseSchema = z
  .object({
    exportId: IdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the described export.' }),
    ).exactOptional(),
    resourceSpecification: ExportResourceSpecificationSchema.and(
      z
        .any()
        .openapi({
          description: 'The bot, bot ID, and optional locale ID of the exported bot or bot locale.',
        }),
    ).exactOptional(),
    fileFormat: ImportExportFileFormatSchema.and(
      z
        .any()
        .openapi({ description: 'The file format used in the files that describe the resource. ' }),
    ).exactOptional(),
    exportStatus: ExportStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the export. When the status is <code>Complete</code> the export archive file is available for download.',
        }),
    ).exactOptional(),
    failureReasons: FailureReasonsSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the <code>exportStatus</code> is failed, contains one or more reasons why the export could not be completed.',
        }),
    ).exactOptional(),
    downloadUrl: PresignedS3UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'A pre-signed S3 URL that points to the bot or bot locale archive. The URL is only available for 5 minutes after calling the <code>DescribeExport</code> operation.',
        }),
    ).exactOptional(),
    creationDateTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the export was created.' }),
    ).exactOptional(),
    lastUpdatedDateTime: TimestampSchema.and(
      z.any().openapi({ description: 'The last date and time that the export was updated.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeExportResponse')

const BotImportSpecificationSchema = z
  .object({
    botName: NameSchema.and(
      z.any().openapi({ description: 'The name that Amazon Lex should use for the bot.' }),
    ),
    roleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role used to build and run the bot.',
        }),
    ),
    dataPrivacy: DataPrivacySchema,
    idleSessionTTLInSeconds: SessionTTLSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The time, in seconds, that Amazon Lex should keep information about a user's conversation with the bot. </p> <p>A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Lex deletes any data provided before the timeout.</p> <p>You can specify between 60 (1 minute) and 86,400 (24 hours) seconds.</p>",
        }),
    ).exactOptional(),
    botTags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of tags to add to the bot. You can only add tags when you import a bot. You can't use the <code>UpdateBot</code> operation to update tags. To update tags, use the <code>TagResource</code> operation.",
        }),
    ).exactOptional(),
    testBotAliasTags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of tags to add to the test alias for a bot. You can only add tags when you import a bot. You can't use the <code>UpdateAlias</code> operation to update tags. To update tags on the test alias, use the <code>TagResource</code> operation.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['botName', 'roleArn', 'dataPrivacy'],
    description: 'Provides the bot parameters required for importing a bot.',
  })
  .openapi('BotImportSpecification')

const BotLocaleImportSpecificationSchema = z
  .object({
    botId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the bot to import the locale to.' }),
    ),
    botVersion: DraftBotVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the bot to import the locale to. This can only be the <code>DRAFT</code> version of the bot.',
        }),
    ),
    localeId: LocaleIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the language and locale that the bot will be used in. The string must match one of the supported locales. All of the intents, slot types, and slots used in the bot must have the same locale. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.',
        }),
    ),
    nluIntentConfidenceThreshold: ConfidenceThresholdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Determines the threshold where Amazon Lex will insert the <code>AMAZON.FallbackIntent</code>, <code>AMAZON.KendraSearchIntent</code>, or both when returning alternative intents. <code>AMAZON.FallbackIntent</code> and <code>AMAZON.KendraSearchIntent</code> are only inserted if they are configured for the bot. </p> <p>For example, suppose a bot is configured with the confidence threshold of 0.80 and the <code>AMAZON.FallbackIntent</code>. Amazon Lex returns three alternative intents with the following confidence scores: IntentA (0.70), IntentB (0.60), IntentC (0.50). The response from the <code>PostText</code> operation would be:</p> <ul> <li> <p> <code>AMAZON.FallbackIntent</code> </p> </li> <li> <p> <code>IntentA</code> </p> </li> <li> <p> <code>IntentB</code> </p> </li> <li> <p> <code>IntentC</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    voiceSettings: VoiceSettingsSchema.exactOptional(),
  })
  .openapi({
    required: ['botId', 'botVersion', 'localeId'],
    description: 'Provides the bot locale parameters required for importing a bot locale.',
  })
  .openapi('BotLocaleImportSpecification')

const CustomVocabularyImportSpecificationSchema = z
  .object({
    botId: IdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the bot to import the custom vocabulary to.' }),
    ),
    botVersion: DraftBotVersionSchema.and(
      z
        .any()
        .openapi({ description: 'The version of the bot to import the custom vocabulary to.' }),
    ),
    localeId: LocaleIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the local to import the custom vocabulary to. The value must be <code>en_GB</code>.',
        }),
    ),
  })
  .openapi({
    required: ['botId', 'botVersion', 'localeId'],
    description: 'Provides the parameters required for importing a custom vocabulary.',
  })
  .openapi('CustomVocabularyImportSpecification')

const ImportResourceSpecificationSchema = z
  .object({
    botImportSpecification: BotImportSpecificationSchema.and(
      z.any().openapi({ description: 'Parameters for importing a bot.' }),
    ).exactOptional(),
    botLocaleImportSpecification: BotLocaleImportSpecificationSchema.and(
      z.any().openapi({ description: 'Parameters for importing a bot locale.' }),
    ).exactOptional(),
    customVocabularyImportSpecification: CustomVocabularyImportSpecificationSchema.exactOptional(),
  })
  .openapi({
    description:
      'Provides information about the bot or bot locale that you want to import. You can specify the <code>botImportSpecification</code> or the <code>botLocaleImportSpecification</code>, but not both.',
    required: [],
  })
  .openapi('ImportResourceSpecification')

const ImportedResourceIdSchema = z
  .string()
  .regex(/^([0-9a-zA-Z_])+$/)
  .min(5)
  .max(10)
  .openapi('ImportedResourceId')

const MergeStrategySchema = z
  .enum(['Overwrite', 'FailOnConflict', 'Append'])
  .openapi('MergeStrategy')

const DescribeImportResponseSchema = z
  .object({
    importId: IdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the described import.' }),
    ).exactOptional(),
    resourceSpecification: ImportResourceSpecificationSchema.and(
      z
        .any()
        .openapi({
          description: 'The specifications of the imported bot, bot locale, or custom vocabulary.',
        }),
    ).exactOptional(),
    importedResourceId: ImportedResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier that Amazon Lex assigned to the resource created by the import.',
        }),
    ).exactOptional(),
    importedResourceName: NameSchema.and(
      z.any().openapi({ description: 'The name of the imported resource.' }),
    ).exactOptional(),
    mergeStrategy: MergeStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            'The strategy used when there was a name conflict between the imported resource and an existing resource. When the merge strategy is <code>FailOnConflict</code> existing resources are not overwritten and the import fails.',
        }),
    ).exactOptional(),
    importStatus: ImportStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the import process. When the status is <code>Completed</code> the resource is imported and ready for use.',
        }),
    ).exactOptional(),
    failureReasons: FailureReasonsSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the <code>importStatus</code> field is <code>Failed</code>, this provides one or more reasons for the failure.',
        }),
    ).exactOptional(),
    creationDateTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the import was created.' }),
    ).exactOptional(),
    lastUpdatedDateTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the import was last updated.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeImportResponse')

const PriorityValueSchema = z.int().min(0).max(100).openapi('PriorityValue')

const SlotPrioritySchema = z
  .object({
    priority: PriorityValueSchema.and(
      z.any().openapi({ description: 'The priority that a slot should be elicited.' }),
    ),
    slotId: IdSchema.and(z.any().openapi({ description: 'The unique identifier of the slot.' })),
  })
  .openapi({
    required: ['priority', 'slotId'],
    description:
      'Sets the priority that Amazon Lex should use when eliciting slot values from a user.',
  })
  .openapi('SlotPriority')

const SlotPrioritiesListSchema = z.array(SlotPrioritySchema).openapi('SlotPrioritiesList')

const DescribeIntentResponseSchema = z
  .object({
    intentId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier assigned to the intent when it was created.',
        }),
    ).exactOptional(),
    intentName: NameSchema.and(
      z.any().openapi({ description: 'The name specified for the intent.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the intent.' }),
    ).exactOptional(),
    parentIntentSignature: IntentSignatureSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the built-in intent that this intent is derived from, if any.',
        }),
    ).exactOptional(),
    sampleUtterances: SampleUtterancesListSchema.and(
      z.any().openapi({ description: 'User utterances that trigger this intent.' }),
    ).exactOptional(),
    dialogCodeHook: DialogCodeHookSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Lambda function called during each turn of a conversation with the intent.',
        }),
    ).exactOptional(),
    fulfillmentCodeHook: FulfillmentCodeHookSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Lambda function called when the intent is complete and ready for fulfillment.',
        }),
    ).exactOptional(),
    slotPriorities: SlotPrioritiesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list that determines the priority that slots should be elicited from the user.',
        }),
    ).exactOptional(),
    intentConfirmationSetting: IntentConfirmationSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'Prompts that Amazon Lex sends to the user to confirm completion of an intent.',
        }),
    ).exactOptional(),
    intentClosingSetting: IntentClosingSettingSchema.and(
      z
        .any()
        .openapi({
          description: 'The response that Amazon Lex sends to when the intent is closed.',
        }),
    ).exactOptional(),
    inputContexts: InputContextsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of contexts that must be active for the intent to be considered for sending to the user.',
        }),
    ).exactOptional(),
    outputContexts: OutputContextsListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of contexts that are activated when the intent is fulfilled.',
        }),
    ).exactOptional(),
    kendraConfiguration: KendraConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information required to use the <code>AMAZON.KendraSearchIntent</code> intent.',
        }),
    ).exactOptional(),
    botId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the bot associated with the intent.' }),
    ).exactOptional(),
    botVersion: DraftBotVersionSchema.and(
      z.any().openapi({ description: 'The version of the bot associated with the intent.' }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z.any().openapi({ description: 'The language and locale specified for the intent.' }),
    ).exactOptional(),
    creationDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'A timestamp of the date and time that the intent was created.' }),
    ).exactOptional(),
    lastUpdatedDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A timestamp of the date and time that the intent was last updated.',
        }),
    ).exactOptional(),
    initialResponseSetting: InitialResponseSettingSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeIntentResponse')

const PolicySchema = z.string().min(2).openapi('Policy')

const DescribeResourcePolicyResponseSchema = z
  .object({
    resourceArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to.',
        }),
    ).exactOptional(),
    policy: PolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'The JSON structure that contains the resource policy. For more information about the contents of a JSON policy document, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html"> IAM JSON policy reference </a>.',
        }),
    ).exactOptional(),
    revisionId: RevisionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current revision of the resource policy. Use the revision ID to make sure that you are updating the most current version of a resource policy when you add a policy statement to a resource, delete a resource, or update a resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeResourcePolicyResponse')

const DescribeSlotResponseSchema = z
  .object({
    slotId: IdSchema.and(
      z.any().openapi({ description: 'The unique identifier generated for the slot.' }),
    ).exactOptional(),
    slotName: NameSchema.and(
      z.any().openapi({ description: 'The name specified for the slot.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description specified for the slot.' }),
    ).exactOptional(),
    slotTypeId: BuiltInOrCustomSlotTypeIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the slot type that determines the values entered into the slot.',
        }),
    ).exactOptional(),
    valueElicitationSetting: SlotValueElicitationSettingSchema.and(
      z
        .any()
        .openapi({ description: 'Prompts that Amazon Lex uses to elicit a value for the slot.' }),
    ).exactOptional(),
    obfuscationSetting: ObfuscationSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether slot values are shown in Amazon CloudWatch logs. If the value is <code>None</code>, the actual value of the slot is shown in logs.',
        }),
    ).exactOptional(),
    botId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the bot associated with the slot.' }),
    ).exactOptional(),
    botVersion: BotVersionSchema.and(
      z.any().openapi({ description: 'The version of the bot associated with the slot.' }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z.any().openapi({ description: 'The language and locale specified for the slot.' }),
    ).exactOptional(),
    intentId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the intent associated with the slot.' }),
    ).exactOptional(),
    creationDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'A timestamp of the date and time that the slot was created.' }),
    ).exactOptional(),
    lastUpdatedDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A timestamp of the date and time that the slot was last updated.',
        }),
    ).exactOptional(),
    multipleValuesSetting: MultipleValuesSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether the slot accepts multiple values in a single utterance.</p> <p>If the <code>multipleValuesSetting</code> is not set, the default value is <code>false</code>.</p>',
        }),
    ).exactOptional(),
    subSlotSetting: SubSlotSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifications for the constituent sub slots and the expression for the composite slot.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeSlotResponse')

const DescribeSlotTypeResponseSchema = z
  .object({
    slotTypeId: IdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the slot type.' }),
    ).exactOptional(),
    slotTypeName: NameSchema.and(
      z.any().openapi({ description: 'The name specified for the slot type.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description specified for the slot type.' }),
    ).exactOptional(),
    slotTypeValues: SlotTypeValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The values that the slot type can take. Includes any synonyms for the slot type values.',
        }),
    ).exactOptional(),
    valueSelectionSetting: SlotValueSelectionSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'The strategy that Amazon Lex uses to choose a value from a list of possible values.',
        }),
    ).exactOptional(),
    parentSlotTypeSignature: SlotTypeSignatureSchema.and(
      z
        .any()
        .openapi({ description: 'The built in slot type used as a parent to this slot type.' }),
    ).exactOptional(),
    botId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the bot associated with the slot type.' }),
    ).exactOptional(),
    botVersion: BotVersionSchema.and(
      z.any().openapi({ description: 'The version of the bot associated with the slot type.' }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z.any().openapi({ description: 'The language and locale specified for the slot type.' }),
    ).exactOptional(),
    creationDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A timestamp of the date and time that the slot type was created.',
        }),
    ).exactOptional(),
    lastUpdatedDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A timestamp of the date and time that the slot type was last updated.',
        }),
    ).exactOptional(),
    externalSourceSetting: ExternalSourceSettingSchema.exactOptional(),
    compositeSlotTypeSetting: CompositeSlotTypeSettingSchema.and(
      z.any().openapi({ description: 'Specifications for a composite slot type.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeSlotTypeResponse')

const TimeDimensionSchema = z.enum(['Hours', 'Days', 'Weeks']).openapi('TimeDimension')

const TimeValueSchema = z.int().min(1).max(24).openapi('TimeValue')

const RelativeAggregationDurationSchema = z
  .object({
    timeDimension: TimeDimensionSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of time period that the <code>timeValue</code> field represents. ',
        }),
    ),
    timeValue: TimeValueSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The period of the time window to gather statistics for. The valid value depends on the setting of the <code>timeDimension</code> field.</p> <ul> <li> <p> <code>Hours</code> - 1/3/6/12/24</p> </li> <li> <p> <code>Days</code> - 3</p> </li> <li> <p> <code>Weeks</code> - 1/2</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['timeDimension', 'timeValue'],
    description:
      '<p>Specifies the time window that utterance statistics are returned for. The time window is always relative to the last time that the that utterances were aggregated. For example, if the <code>ListAggregatedUtterances</code> operation is called at 1600, the time window is set to 1 hour, and the last refresh time was 1530, only utterances made between 1430 and 1530 are returned.</p> <p>You can choose the time window that statistics should be returned for.</p> <ul> <li> <p> <b>Hours</b> - You can request utterance statistics for 1, 3, 6, 12, or 24 hour time windows. Statistics are refreshed every half hour for 1 hour time windows, and hourly for the other time windows.</p> </li> <li> <p> <b>Days</b> - You can request utterance statistics for 3 days. Statistics are refreshed every 6 hours.</p> </li> <li> <p> <b>Weeks</b> - You can see statistics for one or two weeks. Statistics are refreshed every 12 hours for one week time windows, and once per day for two week time windows.</p> </li> </ul>',
  })
  .openapi('RelativeAggregationDuration')

const UtteranceAggregationDurationSchema = z
  .object({
    relativeAggregationDuration: RelativeAggregationDurationSchema.and(
      z.any().openapi({ description: 'The desired time window for aggregating utterances. ' }),
    ),
  })
  .openapi({
    required: ['relativeAggregationDuration'],
    description:
      'Provides parameters for setting the time window and duration for aggregating utterance data.',
  })
  .openapi('UtteranceAggregationDuration')

const HitCountSchema = z.int().openapi('HitCount')

const MissedCountSchema = z.int().openapi('MissedCount')

const AggregatedUtterancesSummarySchema = z
  .object({
    utterance: UtteranceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The text of the utterance. If the utterance was used with the <code>RecognizeUtterance</code> operation, the text is the transcription of the audio utterance.',
        }),
    ).exactOptional(),
    hitCount: HitCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of times that the utterance was detected by Amazon Lex during the time period. When an utterance is detected, it activates an intent or a slot.',
        }),
    ).exactOptional(),
    missedCount: MissedCountSchema.and(
      z
        .any()
        .openapi({
          description:
            "The number of times that the utterance was missed by Amazon Lex An utterance is missed when it doesn't activate an intent or slot.",
        }),
    ).exactOptional(),
    utteranceFirstRecordedInAggregationDuration: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the utterance was first recorded in the time window for aggregation. An utterance may have been sent to Amazon Lex before that time, but only utterances within the time window are counted.',
        }),
    ).exactOptional(),
    utteranceLastRecordedInAggregationDuration: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The last date and time that an utterance was recorded in the time window for aggregation. An utterance may be sent to Amazon Lex after that time, but only utterances within the time window are counted.',
        }),
    ).exactOptional(),
    containsDataFromDeletedResources: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Aggregated utterance data may contain utterances from versions of your bot that have since been deleted. When the aggregated contains this kind of data, this field is set to true.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides summary information for aggregated utterances. The <code>ListAggregatedUtterances</code> operations combines all instances of the same utterance into a single aggregated summary.',
    required: [],
  })
  .openapi('AggregatedUtterancesSummary')

const AggregatedUtterancesSummaryListSchema = z
  .array(AggregatedUtterancesSummarySchema)
  .openapi('AggregatedUtterancesSummaryList')

const NextTokenSchema = z.string().openapi('NextToken')

const ListAggregatedUtterancesResponseSchema = z
  .object({
    botId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the bot that contains the utterances.' }),
    ).exactOptional(),
    botAliasId: BotAliasIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The identifier of the bot alias that contains the utterances. If you specified the bot version, the bot alias ID isn't returned.",
        }),
    ).exactOptional(),
    botVersion: BotVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            "The identifier of the bot version that contains the utterances. If you specified the bot alias, the bot version isn't returned.",
        }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the language and locale that the utterances are in.',
        }),
    ).exactOptional(),
    aggregationDuration: UtteranceAggregationDurationSchema.and(
      z.any().openapi({ description: 'The time period used to aggregate the utterance data.' }),
    ).exactOptional(),
    aggregationWindowStartTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the aggregation window begins. Only data collected after this time is returned in the results.',
        }),
    ).exactOptional(),
    aggregationWindowEndTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the aggregation window ends. Only data collected between the start time and the end time are returned in the results. ',
        }),
    ).exactOptional(),
    aggregationLastRefreshedDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The last date and time that the aggregated data was collected. The time period depends on the length of the aggregation window.</p> <ul> <li> <p> <b>Hours</b> - for 1 hour time window, every half hour; otherwise every hour.</p> </li> <li> <p> <b>Days</b> - every 6 hours</p> </li> <li> <p> <b>Weeks</b> - for a one week time window, every 12 hours; otherwise, every day</p> </li> </ul>',
        }),
    ).exactOptional(),
    aggregatedUtterancesSummaries: AggregatedUtterancesSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Summaries of the aggregated utterance data. Each response contains information about the number of times that the utterance was seen during the time period, whether it was detected or missed, and when it was seen during the time period.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates whether there are more results to return in a response to the <code>ListAggregatedUtterances</code> operation. If the <code>nextToken</code> field is present, you send the contents as the <code>nextToken</code> parameter of a <code>ListAggregatedUtterances</code> operation request to get the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAggregatedUtterancesResponse')

const AggregatedUtterancesSortAttributeSchema = z
  .enum(['HitCount', 'MissedCount'])
  .openapi('AggregatedUtterancesSortAttribute')

const SortOrderSchema = z.enum(['Ascending', 'Descending']).openapi('SortOrder')

const AggregatedUtterancesFilterNameSchema = z
  .literal('Utterance')
  .openapi('AggregatedUtterancesFilterName')

const FilterValueSchema = z
  .string()
  .regex(/^[0-9a-zA-Z_()\s-]+$/)
  .min(1)
  .max(100)
  .openapi('FilterValue')

const FilterValuesSchema = z.array(FilterValueSchema).length(1).openapi('FilterValues')

const AggregatedUtterancesFilterOperatorSchema = z
  .enum(['CO', 'EQ'])
  .openapi('AggregatedUtterancesFilterOperator')

const AggregatedUtterancesFilterSchema = z
  .object({
    name: AggregatedUtterancesFilterNameSchema.and(
      z.any().openapi({ description: 'The name of the field to filter the utterance list.' }),
    ),
    values: FilterValuesSchema.and(
      z.any().openapi({ description: 'The value to use for filtering the list of bots.' }),
    ),
    operator: AggregatedUtterancesFilterOperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The operator to use for the filter. Specify <code>EQ</code> when the <code>ListAggregatedUtterances</code> operation should return only utterances that equal the specified value. Specify <code>CO</code> when the <code>ListAggregatedUtterances</code> operation should return utterances that contain the specified value.',
        }),
    ),
  })
  .openapi({
    required: ['name', 'values', 'operator'],
    description:
      'Filters responses returned by the <code>ListAggregatedUtterances</code> operation.',
  })
  .openapi('AggregatedUtterancesFilter')

const BotAliasSummarySchema = z
  .object({
    botAliasId: BotAliasIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier assigned to the bot alias. You can use this ID to get detailed information about the alias using the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeBotAlias.html">DescribeBotAlias</a> operation.',
        }),
    ).exactOptional(),
    botAliasName: NameSchema.and(
      z.any().openapi({ description: 'The name of the bot alias.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the bot alias.' }),
    ).exactOptional(),
    botVersion: BotVersionSchema.and(
      z.any().openapi({ description: 'The version of the bot that the bot alias references.' }),
    ).exactOptional(),
    botAliasStatus: BotAliasStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current state of the bot alias. If the status is <code>Available</code>, the alias is ready for use.',
        }),
    ).exactOptional(),
    creationDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A timestamp of the date and time that the bot alias was created.',
        }),
    ).exactOptional(),
    lastUpdatedDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A timestamp of the date and time that the bot alias was last updated.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Summary information about bot aliases returned from the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBotAliases.html">ListBotAliases</a> operation.',
    required: [],
  })
  .openapi('BotAliasSummary')

const BotAliasSummaryListSchema = z.array(BotAliasSummarySchema).openapi('BotAliasSummaryList')

const ListBotAliasesResponseSchema = z
  .object({
    botAliasSummaries: BotAliasSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Summary information for the bot aliases that meet the filter criteria specified in the request. The length of the list is specified in the <code>maxResults</code> parameter of the request. If there are more aliases available, the <code>nextToken</code> field contains a token to get the next page of results.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates whether there are more results to return in a response to the <code>ListBotAliases</code> operation. If the <code>nextToken</code> field is present, you send the contents as the <code>nextToken</code> parameter of a <code>ListBotAliases</code> operation request to get the next page of results.',
        }),
    ).exactOptional(),
    botId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the bot associated with the aliases.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListBotAliasesResponse')

const BotLocaleSummarySchema = z
  .object({
    localeId: LocaleIdSchema.and(
      z.any().openapi({ description: 'The language and locale of the bot locale.' }),
    ).exactOptional(),
    localeName: LocaleNameSchema.and(
      z.any().openapi({ description: 'The name of the bot locale.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the bot locale.' }),
    ).exactOptional(),
    botLocaleStatus: BotLocaleStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the bot locale. When the status is <code>Built</code> the locale is ready for use.',
        }),
    ).exactOptional(),
    lastUpdatedDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A timestamp of the date and time that the bot locale was last updated.',
        }),
    ).exactOptional(),
    lastBuildSubmittedDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A timestamp of the date and time that the bot locale was last built.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Summary information about bot locales returned by the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBotLocales.html">ListBotLocales</a> operation.',
    required: [],
  })
  .openapi('BotLocaleSummary')

const BotLocaleSummaryListSchema = z.array(BotLocaleSummarySchema).openapi('BotLocaleSummaryList')

const ListBotLocalesResponseSchema = z
  .object({
    botId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the bot to list locales for.' }),
    ).exactOptional(),
    botVersion: BotVersionSchema.and(
      z.any().openapi({ description: 'The version of the bot.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates whether there are more results to return in a response to the <code>ListBotLocales</code> operation. If the <code>nextToken</code> field is present, you send the contents as the <code>nextToken</code> parameter of a <code>ListBotLocales</code> operation request to get the next page of results.',
        }),
    ).exactOptional(),
    botLocaleSummaries: BotLocaleSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Summary information for the locales that meet the filter criteria specified in the request. The length of the list is specified in the <code>maxResults</code> parameter of the request. If there are more locales available, the <code>nextToken</code> field contains a token to get the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListBotLocalesResponse')

const BotLocaleSortAttributeSchema = z.literal('BotLocaleName').openapi('BotLocaleSortAttribute')

const BotLocaleFilterNameSchema = z.literal('BotLocaleName').openapi('BotLocaleFilterName')

const BotLocaleFilterOperatorSchema = z.enum(['CO', 'EQ']).openapi('BotLocaleFilterOperator')

const BotLocaleFilterSchema = z
  .object({
    name: BotLocaleFilterNameSchema.and(
      z.any().openapi({ description: 'The name of the field to filter the list of bots.' }),
    ),
    values: FilterValuesSchema.and(
      z.any().openapi({ description: 'The value to use for filtering the list of bots.' }),
    ),
    operator: BotLocaleFilterOperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The operator to use for the filter. Specify <code>EQ</code> when the <code>ListBotLocales</code> operation should return only aliases that equal the specified value. Specify <code>CO</code> when the <code>ListBotLocales</code> operation should return aliases that contain the specified value.',
        }),
    ),
  })
  .openapi({
    required: ['name', 'values', 'operator'],
    description: 'Filters responses returned by the <code>ListBotLocales</code> operation.',
  })
  .openapi('BotLocaleFilter')

const BotRecommendationSummarySchema = z
  .object({
    botRecommendationStatus: BotRecommendationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the bot recommendation.</p> <p>If the status is Failed, then the reasons for the failure are listed in the failureReasons field. </p>',
        }),
    ),
    botRecommendationId: IdSchema.and(
      z
        .any()
        .openapi({ description: 'The unique identifier of the bot recommendation to be updated.' }),
    ),
    creationDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A timestamp of the date and time that the bot recommendation was created.',
        }),
    ).exactOptional(),
    lastUpdatedDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'A timestamp of the date and time that the bot recommendation was last updated.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['botRecommendationStatus', 'botRecommendationId'],
    description: 'A summary of the bot recommendation.',
  })
  .openapi('BotRecommendationSummary')

const BotRecommendationSummaryListSchema = z
  .array(BotRecommendationSummarySchema)
  .openapi('BotRecommendationSummaryList')

const ListBotRecommendationsResponseSchema = z
  .object({
    botId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier of the bot that contains the bot recommendation list.',
        }),
    ).exactOptional(),
    botVersion: DraftBotVersionSchema.and(
      z
        .any()
        .openapi({
          description: 'The version of the bot that contains the bot recommendation list.',
        }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the language and locale of the bot recommendation list.',
        }),
    ).exactOptional(),
    botRecommendationSummaries: BotRecommendationSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Summary information for the bot recommendations that meet the filter specified in this request. The length of the list is specified in the maxResults parameter of the request. If there are more bot recommendations available, the nextToken field contains a token to get the next page of results.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates whether there are more results to return in a response to the ListBotRecommendations operation. If the nextToken field is present, you send the contents as the nextToken parameter of a ListBotRecommendations operation request to get the next page of results. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListBotRecommendationsResponse')

const BotVersionSummarySchema = z
  .object({
    botName: NameSchema.and(
      z.any().openapi({ description: 'The name of the bot associated with the version.' }),
    ).exactOptional(),
    botVersion: BotVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The numeric version of the bot, or <code>DRAFT</code> to indicate that this is the version of the bot that can be updated..',
        }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the version.' }),
    ).exactOptional(),
    botStatus: BotStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the bot. When the status is available, the version of the bot is ready for use.',
        }),
    ).exactOptional(),
    creationDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'A timestamp of the date and time that the version was created.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Summary information about a bot version returned by the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBotVersions.html">ListBotVersions</a> operation.',
    required: [],
  })
  .openapi('BotVersionSummary')

const BotVersionSummaryListSchema = z
  .array(BotVersionSummarySchema)
  .openapi('BotVersionSummaryList')

const ListBotVersionsResponseSchema = z
  .object({
    botId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the bot to list versions for.' }),
    ).exactOptional(),
    botVersionSummaries: BotVersionSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Summary information for the bot versions that meet the filter criteria specified in the request. The length of the list is specified in the <code>maxResults</code> parameter of the request. If there are more versions available, the <code>nextToken</code> field contains a token to get the next page of results.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates whether there are more results to return in a response to the <code>ListBotVersions</code> operation. If the <code>nextToken</code> field is present, you send the contents as the <code>nextToken</code> parameter of a <code>ListBotAliases</code> operation request to get the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListBotVersionsResponse')

const BotVersionSortAttributeSchema = z.literal('BotVersion').openapi('BotVersionSortAttribute')

const BotSummarySchema = z
  .object({
    botId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier assigned to the bot. Use this ID to get detailed information about the bot with the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeBot.html">DescribeBot</a> operation.',
        }),
    ).exactOptional(),
    botName: NameSchema.and(
      z.any().openapi({ description: 'The name of the bot.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the bot.' }),
    ).exactOptional(),
    botStatus: BotStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the bot. When the status is <code>Available</code> the bot is ready for use.',
        }),
    ).exactOptional(),
    latestBotVersion: NumericalBotVersionSchema.and(
      z.any().openapi({ description: 'The latest numerical version in use for the bot.' }),
    ).exactOptional(),
    lastUpdatedDateTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the bot was last updated.' }),
    ).exactOptional(),
    botType: BotTypeSchema.and(
      z.any().openapi({ description: 'The type of the bot.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Summary information about a bot returned by the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBots.html">ListBots</a> operation.',
    required: [],
  })
  .openapi('BotSummary')

const BotSummaryListSchema = z.array(BotSummarySchema).openapi('BotSummaryList')

const ListBotsResponseSchema = z
  .object({
    botSummaries: BotSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Summary information for the bots that meet the filter criteria specified in the request. The length of the list is specified in the <code>maxResults</code> parameter of the request. If there are more bots available, the <code>nextToken</code> field contains a token to the next page of results.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates whether there are more results to return in a response to the <code>ListBots</code> operation. If the <code>nextToken</code> field is present, you send the contents as the <code>nextToken</code> parameter of a <code>ListBots</code> operation request to get the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListBotsResponse')

const BotSortAttributeSchema = z.literal('BotName').openapi('BotSortAttribute')

const BotFilterNameSchema = z.enum(['BotName', 'BotType']).openapi('BotFilterName')

const BotFilterOperatorSchema = z.enum(['CO', 'EQ', 'NE']).openapi('BotFilterOperator')

const BotFilterSchema = z
  .object({
    name: BotFilterNameSchema.and(
      z.any().openapi({ description: 'The name of the field to filter the list of bots.' }),
    ),
    values: FilterValuesSchema.and(
      z.any().openapi({ description: 'The value to use for filtering the list of bots.' }),
    ),
    operator: BotFilterOperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The operator to use for the filter. Specify <code>EQ</code> when the <code>ListBots</code> operation should return only aliases that equal the specified value. Specify <code>CO</code> when the <code>ListBots</code> operation should return aliases that contain the specified value.',
        }),
    ),
  })
  .openapi({
    required: ['name', 'values', 'operator'],
    description: 'Filters the responses returned by the <code>ListBots</code> operation.',
  })
  .openapi('BotFilter')

const BuiltInIntentSummarySchema = z
  .object({
    intentSignature: IntentSignatureSchema.and(
      z
        .any()
        .openapi({
          description:
            'The signature of the built-in intent. Use this to specify the parent intent of a derived intent.',
        }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the intent.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides summary information about a built-in intent for the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBuiltInIntents.html"> ListBuiltInIntents </a> operation.',
    required: [],
  })
  .openapi('BuiltInIntentSummary')

const BuiltInIntentSummaryListSchema = z
  .array(BuiltInIntentSummarySchema)
  .openapi('BuiltInIntentSummaryList')

const ListBuiltInIntentsResponseSchema = z
  .object({
    builtInIntentSummaries: BuiltInIntentSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Summary information for the built-in intents that meet the filter criteria specified in the request. The length of the list is specified in the <code>maxResults</code> parameter of the request. If there are more intents available, the <code>nextToken</code> field contains a token to get the next page of results.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates whether there are more results to return in a response to the <code>ListBuiltInIntents</code> operation. If the <code>nextToken</code> field is present, you send the contents as the <code>nextToken</code> parameter of a <code>ListBotAliases</code> operation request to get the next page of results.',
        }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z.any().openapi({ description: 'The language and locale of the intents in the list.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListBuiltInIntentsResponse')

const BuiltInIntentSortAttributeSchema = z
  .literal('IntentSignature')
  .openapi('BuiltInIntentSortAttribute')

const BuiltInSlotTypeSummarySchema = z
  .object({
    slotTypeSignature: SlotTypeSignatureSchema.and(
      z
        .any()
        .openapi({
          description:
            'The signature of the built-in slot type. Use this to specify the parent slot type of a derived slot type.',
        }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the built-in slot type.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides summary information about a built-in slot type for the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBuiltInSlotTypes.html"> ListBuiltInSlotTypes </a> operation.',
    required: [],
  })
  .openapi('BuiltInSlotTypeSummary')

const BuiltInSlotTypeSummaryListSchema = z
  .array(BuiltInSlotTypeSummarySchema)
  .openapi('BuiltInSlotTypeSummaryList')

const ListBuiltInSlotTypesResponseSchema = z
  .object({
    builtInSlotTypeSummaries: BuiltInSlotTypeSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Summary information for the built-in slot types that meet the filter criteria specified in the request. The length of the list is specified in the <code>maxResults</code> parameter of the request. If there are more slot types available, the <code>nextToken</code> field contains a token to get the next page of results.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates whether there are more results to return in a response to the <code>ListBuiltInSlotTypes</code> operation. If the <code>nextToken</code> field is present, you send the contents as the <code>nextToken</code> parameter of a <code>LIstBuiltInSlotTypes</code> operation request to get the next page of results.',
        }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z.any().openapi({ description: 'The language and locale of the slot types in the list.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListBuiltInSlotTypesResponse')

const BuiltInSlotTypeSortAttributeSchema = z
  .literal('SlotTypeSignature')
  .openapi('BuiltInSlotTypeSortAttribute')

const ListCustomVocabularyItemsResponseSchema = z
  .object({
    botId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the bot associated with this custom vocabulary.',
        }),
    ).exactOptional(),
    botVersion: BotVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the version of the bot associated with this custom vocabulary.',
        }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the language and locale where this custom vocabulary is used. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html"> Supported Languages </a>.',
        }),
    ).exactOptional(),
    customVocabularyItems: CustomVocabularyItemsSchema.and(
      z
        .any()
        .openapi({
          description: 'The custom vocabulary items from the list custom vocabulary response.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The nextToken identifier to the list custom vocabulary response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListCustomVocabularyItemsResponse')

const ExportSummarySchema = z
  .object({
    exportId: IdSchema.and(
      z
        .any()
        .openapi({ description: 'The unique identifier that Amazon Lex assigned to the export.' }),
    ).exactOptional(),
    resourceSpecification: ExportResourceSpecificationSchema.and(
      z
        .any()
        .openapi({ description: 'Information about the bot or bot locale that was exported.' }),
    ).exactOptional(),
    fileFormat: ImportExportFileFormatSchema.and(
      z.any().openapi({ description: 'The file format used in the export files.' }),
    ).exactOptional(),
    exportStatus: ExportStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the export. When the status is <code>Completed</code> the export is ready to download.',
        }),
    ).exactOptional(),
    creationDateTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the export was created.' }),
    ).exactOptional(),
    lastUpdatedDateTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the export was last updated.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides summary information about an export in an export list. ',
    required: [],
  })
  .openapi('ExportSummary')

const ExportSummaryListSchema = z.array(ExportSummarySchema).openapi('ExportSummaryList')

const ListExportsResponseSchema = z
  .object({
    botId: IdSchema.and(
      z.any().openapi({ description: 'The unique identifier assigned to the bot by Amazon Lex.' }),
    ).exactOptional(),
    botVersion: BotVersionSchema.and(
      z.any().openapi({ description: 'The version of the bot that was exported.' }),
    ).exactOptional(),
    exportSummaries: ExportSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Summary information for the exports that meet the filter criteria specified in the request. The length of the list is specified in the <code>maxResults</code> parameter. If there are more exports available, the <code>nextToken</code> field contains a token to get the next page of results.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates whether there are more results to return in a response to the <code>ListExports</code> operation. If the <code>nextToken</code> field is present, you send the contents as the <code>nextToken</code> parameter of a <code>ListExports</code> operation request to get the next page of results.',
        }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z.any().openapi({ description: 'The locale specified in the request.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListExportsResponse')

const ExportSortAttributeSchema = z.literal('LastUpdatedDateTime').openapi('ExportSortAttribute')

const ExportFilterNameSchema = z.literal('ExportResourceType').openapi('ExportFilterName')

const ExportFilterOperatorSchema = z.enum(['CO', 'EQ']).openapi('ExportFilterOperator')

const ExportFilterSchema = z
  .object({
    name: ExportFilterNameSchema.and(
      z.any().openapi({ description: 'The name of the field to use for filtering.' }),
    ),
    values: FilterValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The values to use to filter the response. The values must be <code>Bot</code>, <code>BotLocale</code>, or <code>CustomVocabulary</code>.',
        }),
    ),
    operator: ExportFilterOperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The operator to use for the filter. Specify EQ when the <code>ListExports</code> operation should return only resource types that equal the specified value. Specify CO when the <code>ListExports</code> operation should return resource types that contain the specified value.',
        }),
    ),
  })
  .openapi({
    required: ['name', 'values', 'operator'],
    description:
      'Filters the response form the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListExports.html">ListExports</a> operation',
  })
  .openapi('ExportFilter')

const ImportResourceTypeSchema = z
  .enum(['Bot', 'BotLocale', 'CustomVocabulary'])
  .openapi('ImportResourceType')

const ImportSummarySchema = z
  .object({
    importId: IdSchema.and(
      z
        .any()
        .openapi({ description: 'The unique identifier that Amazon Lex assigned to the import.' }),
    ).exactOptional(),
    importedResourceId: ImportedResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier that Amazon Lex assigned to the imported resource.',
        }),
    ).exactOptional(),
    importedResourceName: NameSchema.and(
      z.any().openapi({ description: 'The name that you gave the imported resource.' }),
    ).exactOptional(),
    importStatus: ImportStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the resource. When the status is <code>Completed</code> the resource is ready to build.',
        }),
    ).exactOptional(),
    mergeStrategy: MergeStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            'The strategy used to merge existing bot or bot locale definitions with the imported definition.',
        }),
    ).exactOptional(),
    creationDateTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the import was created.' }),
    ).exactOptional(),
    lastUpdatedDateTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the import was last updated.' }),
    ).exactOptional(),
    importedResourceType: ImportResourceTypeSchema.and(
      z.any().openapi({ description: 'The type of resource that was imported.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides summary information about an import in an import list.',
    required: [],
  })
  .openapi('ImportSummary')

const ImportSummaryListSchema = z.array(ImportSummarySchema).openapi('ImportSummaryList')

const ListImportsResponseSchema = z
  .object({
    botId: IdSchema.and(
      z.any().openapi({ description: 'The unique identifier assigned by Amazon Lex to the bot.' }),
    ).exactOptional(),
    botVersion: DraftBotVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the bot that was imported. It will always be <code>DRAFT</code>.',
        }),
    ).exactOptional(),
    importSummaries: ImportSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Summary information for the imports that meet the filter criteria specified in the request. The length of the list is specified in the <code>maxResults</code> parameter. If there are more imports available, the <code>nextToken</code> field contains a token to get the next page of results.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates whether there are more results to return in a response to the <code>ListImports</code> operation. If the <code>nextToken</code> field is present, you send the contents as the <code>nextToken</code> parameter of a <code>ListImports</code> operation request to get the next page of results.',
        }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z.any().openapi({ description: 'The locale specified in the request.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListImportsResponse')

const ImportSortAttributeSchema = z.literal('LastUpdatedDateTime').openapi('ImportSortAttribute')

const ImportFilterNameSchema = z.literal('ImportResourceType').openapi('ImportFilterName')

const ImportFilterOperatorSchema = z.enum(['CO', 'EQ']).openapi('ImportFilterOperator')

const ImportFilterSchema = z
  .object({
    name: ImportFilterNameSchema.and(
      z.any().openapi({ description: 'The name of the field to use for filtering.' }),
    ),
    values: FilterValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The values to use to filter the response. The values must be <code>Bot</code>, <code>BotLocale</code>, or <code>CustomVocabulary</code>.',
        }),
    ),
    operator: ImportFilterOperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The operator to use for the filter. Specify EQ when the <code>ListImports</code> operation should return only resource types that equal the specified value. Specify CO when the <code>ListImports</code> operation should return resource types that contain the specified value.',
        }),
    ),
  })
  .openapi({
    required: ['name', 'values', 'operator'],
    description:
      'Filters the response from the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListImports.html">ListImports</a> operation.',
  })
  .openapi('ImportFilter')

const IntentSummarySchema = z
  .object({
    intentId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier assigned to the intent. Use this ID to get detailed information about the intent with the <code>DescribeIntent</code> operation.',
        }),
    ).exactOptional(),
    intentName: NameSchema.and(
      z.any().openapi({ description: 'The name of the intent.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the intent.' }),
    ).exactOptional(),
    parentIntentSignature: IntentSignatureSchema.and(
      z
        .any()
        .openapi({
          description:
            'If this intent is derived from a built-in intent, the name of the parent intent.',
        }),
    ).exactOptional(),
    inputContexts: InputContextsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The input contexts that must be active for this intent to be considered for recognition.',
        }),
    ).exactOptional(),
    outputContexts: OutputContextsListSchema.and(
      z
        .any()
        .openapi({
          description: 'The output contexts that are activated when this intent is fulfilled.',
        }),
    ).exactOptional(),
    lastUpdatedDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp of the date and time that the intent was last updated.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Summary information about an intent returned by the <code>ListIntents</code> operation.',
    required: [],
  })
  .openapi('IntentSummary')

const IntentSummaryListSchema = z.array(IntentSummarySchema).openapi('IntentSummaryList')

const ListIntentsResponseSchema = z
  .object({
    botId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the bot that contains the intent.' }),
    ).exactOptional(),
    botVersion: BotVersionSchema.and(
      z.any().openapi({ description: 'The version of the bot that contains the intent.' }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z.any().openapi({ description: 'The language and locale of the intents in the list.' }),
    ).exactOptional(),
    intentSummaries: IntentSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Summary information for the intents that meet the filter criteria specified in the request. The length of the list is specified in the <code>maxResults</code> parameter of the request. If there are more intents available, the <code>nextToken</code> field contains a token to get the next page of results.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates whether there are more results to return in a response to the <code>ListIntents</code> operation. If the <code>nextToken</code> field is present, you send the contents as the <code>nextToken</code> parameter of a <code>ListIntents</code> operation request to get the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListIntentsResponse')

const IntentSortAttributeSchema = z
  .enum(['IntentName', 'LastUpdatedDateTime'])
  .openapi('IntentSortAttribute')

const IntentFilterNameSchema = z.literal('IntentName').openapi('IntentFilterName')

const IntentFilterOperatorSchema = z.enum(['CO', 'EQ']).openapi('IntentFilterOperator')

const IntentFilterSchema = z
  .object({
    name: IntentFilterNameSchema.and(
      z.any().openapi({ description: 'The name of the field to use for the filter.' }),
    ),
    values: FilterValuesSchema.and(
      z.any().openapi({ description: 'The value to use for the filter.' }),
    ),
    operator: IntentFilterOperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The operator to use for the filter. Specify <code>EQ</code> when the <code>ListIntents</code> operation should return only aliases that equal the specified value. Specify <code>CO</code> when the <code>ListIntents</code> operation should return aliases that contain the specified value.',
        }),
    ),
  })
  .openapi({
    required: ['name', 'values', 'operator'],
    description: 'Filters the response from the <code>ListIntents</code> operation.',
  })
  .openapi('IntentFilter')

const SampleUtterancesCountSchema = z.int().openapi('SampleUtterancesCount')

const RecommendedIntentSummarySchema = z
  .object({
    intentId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier of a recommended intent associated with the bot recommendation.',
        }),
    ).exactOptional(),
    intentName: NameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of a recommended intent associated with the bot recommendation.',
        }),
    ).exactOptional(),
    sampleUtterancesCount: SampleUtterancesCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The count of sample utterances of a recommended intent that is associated with a bot recommendation.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that contains a summary of a recommended intent.',
    required: [],
  })
  .openapi('RecommendedIntentSummary')

const RecommendedIntentSummaryListSchema = z
  .array(RecommendedIntentSummarySchema)
  .openapi('RecommendedIntentSummaryList')

const ListRecommendedIntentsResponseSchema = z
  .object({
    botId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier of the bot associated with the recommended intent.',
        }),
    ).exactOptional(),
    botVersion: DraftBotVersionSchema.and(
      z.any().openapi({ description: 'The version of the bot that contains the intent.' }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the language and locale of the intents to list. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.',
        }),
    ).exactOptional(),
    botRecommendationId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the bot recommendation that contains the recommended intent.',
        }),
    ).exactOptional(),
    summaryList: RecommendedIntentSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Summary information for the intents that meet the filter criteria specified in the request. The length of the list is specified in the maxResults parameter of the request. If there are more intents available, the nextToken field contains a token to get the next page of results.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates whether there are more results to return in a response to the ListRecommendedIntents operation. If the nextToken field is present, you send the contents as the nextToken parameter of a ListRecommendedIntents operation request to get the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListRecommendedIntentsResponse')

const SlotTypeCategorySchema = z
  .enum(['Custom', 'Extended', 'ExternalGrammar', 'Composite'])
  .openapi('SlotTypeCategory')

const SlotTypeSummarySchema = z
  .object({
    slotTypeId: IdSchema.and(
      z.any().openapi({ description: 'The unique identifier assigned to the slot type.' }),
    ).exactOptional(),
    slotTypeName: NameSchema.and(
      z.any().openapi({ description: 'The name of the slot type.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the slot type.' }),
    ).exactOptional(),
    parentSlotTypeSignature: SlotTypeSignatureSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the slot type is derived from a built-on slot type, the name of the parent slot type.',
        }),
    ).exactOptional(),
    lastUpdatedDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A timestamp of the date and time that the slot type was last updated.',
        }),
    ).exactOptional(),
    slotTypeCategory: SlotTypeCategorySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates the type of the slot type.</p> <ul> <li> <p> <code>Custom</code> - A slot type that you created using custom values. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/custom-slot-types.html">Creating custom slot types</a>.</p> </li> <li> <p> <code>Extended</code> - A slot type created by extending the AMAZON.AlphaNumeric built-in slot type. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/built-in-slot-alphanumerice.html">AMAZON.AlphaNumeric</a>.</p> </li> <li> <p> <code>ExternalGrammar</code> - A slot type using a custom GRXML grammar to define values. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/building-grxml.html">Using a custom grammar slot type</a>.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides summary information about a slot type.', required: [] })
  .openapi('SlotTypeSummary')

const SlotTypeSummaryListSchema = z.array(SlotTypeSummarySchema).openapi('SlotTypeSummaryList')

const ListSlotTypesResponseSchema = z
  .object({
    botId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the bot that contains the slot types.' }),
    ).exactOptional(),
    botVersion: BotVersionSchema.and(
      z.any().openapi({ description: 'The version of the bot that contains the slot types.' }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z.any().openapi({ description: 'The language and local of the slot types in the list.' }),
    ).exactOptional(),
    slotTypeSummaries: SlotTypeSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Summary information for the slot types that meet the filter criteria specified in the request. The length of the list is specified in the <code>maxResults</code> parameter of the request. If there are more slot types available, the <code>nextToken</code> field contains a token to get the next page of results.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates whether there are more results to return in a response to the <code>ListSlotTypes</code> operation. If the <code>nextToken</code> field is present, you send the contents as the <code>nextToken</code> parameter of a <code>ListSlotTypes</code> operation request to get the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListSlotTypesResponse')

const SlotTypeSortAttributeSchema = z
  .enum(['SlotTypeName', 'LastUpdatedDateTime'])
  .openapi('SlotTypeSortAttribute')

const SlotTypeFilterNameSchema = z
  .enum(['SlotTypeName', 'ExternalSourceType'])
  .openapi('SlotTypeFilterName')

const SlotTypeFilterOperatorSchema = z.enum(['CO', 'EQ']).openapi('SlotTypeFilterOperator')

const SlotTypeFilterSchema = z
  .object({
    name: SlotTypeFilterNameSchema.and(
      z.any().openapi({ description: 'The name of the field to use for filtering.' }),
    ),
    values: FilterValuesSchema.and(
      z.any().openapi({ description: 'The value to use to filter the response.' }),
    ),
    operator: SlotTypeFilterOperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The operator to use for the filter. Specify <code>EQ</code> when the <code>ListSlotTypes</code> operation should return only aliases that equal the specified value. Specify <code>CO</code> when the <code>ListSlotTypes</code> operation should return aliases that contain the specified value.',
        }),
    ),
  })
  .openapi({
    required: ['name', 'values', 'operator'],
    description: 'Filters the response from the <code>ListSlotTypes</code> operation.',
  })
  .openapi('SlotTypeFilter')

const SlotSummarySchema = z
  .object({
    slotId: IdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the slot.' }),
    ).exactOptional(),
    slotName: NameSchema.and(
      z.any().openapi({ description: 'The name given to the slot.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the slot.' }),
    ).exactOptional(),
    slotConstraint: SlotConstraintSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether the slot is required or optional. An intent is complete when all required slots are filled.',
        }),
    ).exactOptional(),
    slotTypeId: BuiltInOrCustomSlotTypeIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the slot type that defines the values for the slot.',
        }),
    ).exactOptional(),
    valueElicitationPromptSpecification: PromptSpecificationSchema.and(
      z
        .any()
        .openapi({
          description: 'Prompts that are sent to the user to elicit a value for the slot.',
        }),
    ).exactOptional(),
    lastUpdatedDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp of the last date and time that the slot was updated.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Summary information about a slot, a value that the bot elicits from the user.',
    required: [],
  })
  .openapi('SlotSummary')

const SlotSummaryListSchema = z.array(SlotSummarySchema).openapi('SlotSummaryList')

const ListSlotsResponseSchema = z
  .object({
    botId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the bot that contains the slots.' }),
    ).exactOptional(),
    botVersion: BotVersionSchema.and(
      z.any().openapi({ description: 'The version of the bot that contains the slots.' }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z.any().openapi({ description: 'The language and locale of the slots in the list.' }),
    ).exactOptional(),
    intentId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the intent that contains the slots.' }),
    ).exactOptional(),
    slotSummaries: SlotSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Summary information for the slots that meet the filter criteria specified in the request. The length of the list is specified in the <code>maxResults</code> parameter of the request. If there are more slots available, the <code>nextToken</code> field contains a token to get the next page of results.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that indicates whether there are more results to return in a response to the <code>ListSlots</code> operation. If the <code>nextToken</code> field is present, you send the contents as the <code>nextToken</code> parameter of a <code>ListSlots</code> operation request to get the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListSlotsResponse')

const SlotSortAttributeSchema = z
  .enum(['SlotName', 'LastUpdatedDateTime'])
  .openapi('SlotSortAttribute')

const SlotFilterNameSchema = z.literal('SlotName').openapi('SlotFilterName')

const SlotFilterOperatorSchema = z.enum(['CO', 'EQ']).openapi('SlotFilterOperator')

const SlotFilterSchema = z
  .object({
    name: SlotFilterNameSchema.and(
      z.any().openapi({ description: 'The name of the field to use for filtering.' }),
    ),
    values: FilterValuesSchema.and(
      z.any().openapi({ description: 'The value to use to filter the response.' }),
    ),
    operator: SlotFilterOperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The operator to use for the filter. Specify <code>EQ</code> when the <code>ListSlots</code> operation should return only aliases that equal the specified value. Specify <code>CO</code> when the <code>ListSlots</code> operation should return aliases that contain the specified value.',
        }),
    ),
  })
  .openapi({
    required: ['name', 'values', 'operator'],
    description: 'Filters the response from the <code>ListSlots</code> operation.',
  })
  .openapi('SlotFilter')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagMapSchema.and(
      z.any().openapi({ description: 'The tags associated with a resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const NextIndexSchema = z.int().min(0).max(10000000).openapi('NextIndex')

const TranscriptSchema = z.string().regex(/.*/).min(1).max(6000000).openapi('Transcript')

const AssociatedTranscriptSchema = z
  .object({
    transcript: TranscriptSchema.and(
      z
        .any()
        .openapi({
          description:
            'The content of the transcript that meets the search filter criteria. For the JSON format of the transcript, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/designing-output-format.html">Output transcript format</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The object containing information that associates the recommended intent/slot type with a conversation.',
    required: [],
  })
  .openapi('AssociatedTranscript')

const AssociatedTranscriptListSchema = z
  .array(AssociatedTranscriptSchema)
  .openapi('AssociatedTranscriptList')

const MaxResultsSchema = z.int().min(1).max(1000).openapi('MaxResults')

const SearchAssociatedTranscriptsResponseSchema = z
  .object({
    botId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier of the bot associated with the transcripts that you are searching.',
        }),
    ).exactOptional(),
    botVersion: BotVersionSchema.and(
      z
        .any()
        .openapi({
          description: 'The version of the bot containing the transcripts that you are searching.',
        }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the language and locale of the transcripts to search. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a> ',
        }),
    ).exactOptional(),
    botRecommendationId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The unique identifier of the bot recommendation associated with the transcripts to search.',
        }),
    ).exactOptional(),
    nextIndex: NextIndexSchema.and(
      z
        .any()
        .openapi({
          description:
            'A index that indicates whether there are more results to return in a response to the SearchAssociatedTranscripts operation. If the nextIndex field is present, you send the contents as the nextIndex parameter of a SearchAssociatedTranscriptsRequest operation to get the next page of results.',
        }),
    ).exactOptional(),
    associatedTranscripts: AssociatedTranscriptListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The object that contains the associated transcript that meet the criteria you specified.',
        }),
    ).exactOptional(),
    totalResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The total number of transcripts returned by the search.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchAssociatedTranscriptsResponse')

const AssociatedTranscriptFilterNameSchema = z
  .enum(['IntentId', 'SlotTypeId'])
  .openapi('AssociatedTranscriptFilterName')

const AssociatedTranscriptFilterSchema = z
  .object({
    name: AssociatedTranscriptFilterNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the field to use for filtering. The allowed names are IntentId and SlotTypeId.',
        }),
    ),
    values: FilterValuesSchema.and(
      z.any().openapi({ description: 'The values to use to filter the transcript.' }),
    ),
  })
  .openapi({
    required: ['name', 'values'],
    description: 'Filters to search for the associated transcript.',
  })
  .openapi('AssociatedTranscriptFilter')

const StartBotRecommendationResponseSchema = z
  .object({
    botId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier of the bot containing the bot recommendation.',
        }),
    ).exactOptional(),
    botVersion: DraftBotVersionSchema.and(
      z.any().openapi({ description: 'The version of the bot containing the bot recommendation.' }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the language and locale of the bot recommendation to start. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a> ',
        }),
    ).exactOptional(),
    botRecommendationStatus: BotRecommendationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the bot recommendation.</p> <p>If the status is Failed, then the reasons for the failure are listed in the failureReasons field. </p>',
        }),
    ).exactOptional(),
    botRecommendationId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the bot recommendation that you have created.',
        }),
    ).exactOptional(),
    creationDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A timestamp of the date and time that the bot recommendation was created.',
        }),
    ).exactOptional(),
    transcriptSourceSetting: TranscriptSourceSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'The object representing the Amazon S3 bucket containing the transcript, as well as the associated metadata.',
        }),
    ).exactOptional(),
    encryptionSetting: EncryptionSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'The object representing the passwords that were used to encrypt the data related to the bot recommendation results, as well as the KMS key ARN used to encrypt the associated metadata.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartBotRecommendationResponse')

const StartImportResponseSchema = z
  .object({
    importId: IdSchema.and(
      z.any().openapi({ description: 'A unique identifier for the import.' }),
    ).exactOptional(),
    resourceSpecification: ImportResourceSpecificationSchema.and(
      z.any().openapi({ description: 'The parameters used when importing the resource.' }),
    ).exactOptional(),
    mergeStrategy: MergeStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            'The strategy used when there was a name conflict between the imported resource and an existing resource. When the merge strategy is <code>FailOnConflict</code> existing resources are not overwritten and the import fails.',
        }),
    ).exactOptional(),
    importStatus: ImportStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the import. When the status is <code>Complete</code> the bot, bot alias, or custom vocabulary is ready to use.',
        }),
    ).exactOptional(),
    creationDateTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the import request was created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartImportResponse')

const StopBotRecommendationResponseSchema = z
  .object({
    botId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier of the bot containing the bot recommendation that is being stopped.',
        }),
    ).exactOptional(),
    botVersion: DraftBotVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the bot containing the recommendation that is being stopped.',
        }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the language and locale of the bot response to stop. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a> ',
        }),
    ).exactOptional(),
    botRecommendationStatus: BotRecommendationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the bot recommendation. If the status is Failed, then the reasons for the failure are listed in the failureReasons field.',
        }),
    ).exactOptional(),
    botRecommendationId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier of the bot recommendation that is being stopped.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopBotRecommendationResponse')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const UpdateBotResponseSchema = z
  .object({
    botId: IdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the bot that was updated.' }),
    ).exactOptional(),
    botName: NameSchema.and(
      z.any().openapi({ description: 'The name of the bot after the update.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the bot after the update.' }),
    ).exactOptional(),
    roleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role used by the bot after the update.',
        }),
    ).exactOptional(),
    dataPrivacy: DataPrivacySchema.and(
      z.any().openapi({ description: 'The data privacy settings for the bot after the update.' }),
    ).exactOptional(),
    idleSessionTTLInSeconds: SessionTTLSchema.and(
      z
        .any()
        .openapi({ description: 'The session timeout, in seconds, for the bot after the update.' }),
    ).exactOptional(),
    botStatus: BotStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Shows the current status of the bot. The bot is first in the <code>Creating</code> status. Once the bot is read for use, it changes to the <code>Available</code> status. After the bot is created, you can use the <code>DRAFT</code> version of the bot.',
        }),
    ).exactOptional(),
    creationDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'A timestamp of the date and time that the bot was created.' }),
    ).exactOptional(),
    lastUpdatedDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A timestamp of the date and time that the bot was last updated.',
        }),
    ).exactOptional(),
    botType: BotTypeSchema.and(
      z.any().openapi({ description: 'The type of the bot that was updated.' }),
    ).exactOptional(),
    botMembers: BotMembersSchema.and(
      z.any().openapi({ description: 'The list of bot members in the network that was updated.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateBotResponse')

const UpdateBotAliasResponseSchema = z
  .object({
    botAliasId: BotAliasIdSchema.and(
      z.any().openapi({ description: 'The identifier of the updated bot alias.' }),
    ).exactOptional(),
    botAliasName: NameSchema.and(
      z.any().openapi({ description: 'The updated name of the bot alias.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The updated description of the bot alias.' }),
    ).exactOptional(),
    botVersion: BotVersionSchema.and(
      z.any().openapi({ description: 'The updated version of the bot that the alias points to.' }),
    ).exactOptional(),
    botAliasLocaleSettings: BotAliasLocaleSettingsMapSchema.and(
      z
        .any()
        .openapi({
          description: 'The updated Lambda functions to use in each locale for the bot alias.',
        }),
    ).exactOptional(),
    conversationLogSettings: ConversationLogSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The updated settings for storing conversation logs in Amazon CloudWatch Logs and Amazon S3 buckets.',
        }),
    ).exactOptional(),
    sentimentAnalysisSettings: SentimentAnalysisSettingsSchema.exactOptional(),
    botAliasStatus: BotAliasStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the bot alias. When the status is <code>Available</code> the alias is ready for use.',
        }),
    ).exactOptional(),
    botId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the bot with the updated alias.' }),
    ).exactOptional(),
    creationDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'A timestamp of the date and time that the bot was created.' }),
    ).exactOptional(),
    lastUpdatedDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A timestamp of the date and time that the bot was last updated.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateBotAliasResponse')

const UpdateBotLocaleResponseSchema = z
  .object({
    botId: IdSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the bot that contains the updated locale.' }),
    ).exactOptional(),
    botVersion: DraftBotVersionSchema.and(
      z.any().openapi({ description: 'The version of the bot that contains the updated locale.' }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z.any().openapi({ description: 'The language and locale of the updated bot locale.' }),
    ).exactOptional(),
    localeName: LocaleNameSchema.and(
      z.any().openapi({ description: 'The updated locale name for the locale.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The updated description of the locale.' }),
    ).exactOptional(),
    nluIntentConfidenceThreshold: ConfidenceThresholdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The updated confidence threshold for inserting the <code>AMAZON.FallbackIntent</code> and <code>AMAZON.KendraSearchIntent</code> intents in the list of possible intents for an utterance.',
        }),
    ).exactOptional(),
    voiceSettings: VoiceSettingsSchema.and(
      z
        .any()
        .openapi({
          description: 'The updated Amazon Polly voice to use for voice interaction with the user.',
        }),
    ).exactOptional(),
    botLocaleStatus: BotLocaleStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the locale. When the bot status is <code>Built</code> the locale is ready for use.',
        }),
    ).exactOptional(),
    failureReasons: FailureReasonsSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the <code>botLocaleStatus</code> is <code>Failed</code>, the <code>failureReasons</code> field lists the errors that occurred while building the bot.',
        }),
    ).exactOptional(),
    creationDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'A timestamp of the date and time that the locale was created.' }),
    ).exactOptional(),
    lastUpdatedDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A timestamp of the date and time that the locale was last updated.',
        }),
    ).exactOptional(),
    recommendedActions: RecommendedActionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Recommended actions to take to resolve an error in the <code>failureReasons</code> field.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateBotLocaleResponse')

const UpdateBotRecommendationResponseSchema = z
  .object({
    botId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier of the bot containing the bot recommendation that has been updated.',
        }),
    ).exactOptional(),
    botVersion: DraftBotVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the bot containing the bot recommendation that has been updated.',
        }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the language and locale of the bot recommendation to update. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a> ',
        }),
    ).exactOptional(),
    botRecommendationStatus: BotRecommendationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the bot recommendation.</p> <p>If the status is Failed, then the reasons for the failure are listed in the failureReasons field. </p>',
        }),
    ).exactOptional(),
    botRecommendationId: IdSchema.and(
      z
        .any()
        .openapi({ description: 'The unique identifier of the bot recommendation to be updated.' }),
    ).exactOptional(),
    creationDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A timestamp of the date and time that the bot recommendation was created.',
        }),
    ).exactOptional(),
    lastUpdatedDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'A timestamp of the date and time that the bot recommendation was last updated.',
        }),
    ).exactOptional(),
    transcriptSourceSetting: TranscriptSourceSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'The object representing the Amazon S3 bucket containing the transcript, as well as the associated metadata.',
        }),
    ).exactOptional(),
    encryptionSetting: EncryptionSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'The object representing the passwords that were used to encrypt the data related to the bot recommendation results, as well as the KMS key ARN used to encrypt the associated metadata.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateBotRecommendationResponse')

const UpdateExportResponseSchema = z
  .object({
    exportId: IdSchema.and(
      z.any().openapi({ description: 'The unique identifier Amazon Lex assigned to the export.' }),
    ).exactOptional(),
    resourceSpecification: ExportResourceSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of the type of resource that was exported, either a bot or a bot locale.',
        }),
    ).exactOptional(),
    fileFormat: ImportExportFileFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The file format used for the files that define the resource. The <code>TSV</code> format is required to export a custom vocabulary only; otherwise use <code>LexJson</code> format.',
        }),
    ).exactOptional(),
    exportStatus: ExportStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the export. When the status is <code>Completed</code> the export archive is available for download.',
        }),
    ).exactOptional(),
    creationDateTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the export was created.' }),
    ).exactOptional(),
    lastUpdatedDateTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the export was last updated.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateExportResponse')

const UpdateIntentResponseSchema = z
  .object({
    intentId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the intent that was updated.' }),
    ).exactOptional(),
    intentName: NameSchema.and(
      z.any().openapi({ description: 'The updated name of the intent.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The updated description of the intent.' }),
    ).exactOptional(),
    parentIntentSignature: IntentSignatureSchema.and(
      z
        .any()
        .openapi({ description: 'The updated built-in intent that is the parent of this intent.' }),
    ).exactOptional(),
    sampleUtterances: SampleUtterancesListSchema.and(
      z.any().openapi({ description: 'The updated list of sample utterances for the intent.' }),
    ).exactOptional(),
    dialogCodeHook: DialogCodeHookSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The updated Lambda function called during each turn of the conversation with the user.',
        }),
    ).exactOptional(),
    fulfillmentCodeHook: FulfillmentCodeHookSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The updated Lambda function called when the intent is ready for fulfillment.',
        }),
    ).exactOptional(),
    slotPriorities: SlotPrioritiesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The updated list of slots and their priorities that are elicited from the user for the intent.',
        }),
    ).exactOptional(),
    intentConfirmationSetting: IntentConfirmationSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'The updated prompts that Amazon Lex sends to the user to confirm the completion of an intent.',
        }),
    ).exactOptional(),
    intentClosingSetting: IntentClosingSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'The updated response that Amazon Lex sends the user when the intent is closed.',
        }),
    ).exactOptional(),
    inputContexts: InputContextsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The updated list of contexts that must be active for the intent to be considered by Amazon Lex.',
        }),
    ).exactOptional(),
    outputContexts: OutputContextsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The updated list of contexts that Amazon Lex activates when the intent is fulfilled.',
        }),
    ).exactOptional(),
    kendraConfiguration: KendraConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The updated configuration for connecting to an Amazon Kendra index with the <code>AMAZON.KendraSearchIntent</code> intent.',
        }),
    ).exactOptional(),
    botId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the bot that contains the intent.' }),
    ).exactOptional(),
    botVersion: DraftBotVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the bot that contains the intent. Will always be <code>DRAFT</code>.',
        }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z.any().openapi({ description: 'The updated language and locale of the intent.' }),
    ).exactOptional(),
    creationDateTime: TimestampSchema.and(
      z.any().openapi({ description: 'A timestamp of when the intent was created.' }),
    ).exactOptional(),
    lastUpdatedDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'A timestamp of the last time that the intent was modified.' }),
    ).exactOptional(),
    initialResponseSetting: InitialResponseSettingSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateIntentResponse')

const UpdateResourcePolicyResponseSchema = z
  .object({
    resourceArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to.',
        }),
    ).exactOptional(),
    revisionId: RevisionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current revision of the resource policy. Use the revision ID to make sure that you are updating the most current version of a resource policy when you add a policy statement to a resource, delete a resource, or update a resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateResourcePolicyResponse')

const UpdateSlotResponseSchema = z
  .object({
    slotId: IdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the slot that was updated.' }),
    ).exactOptional(),
    slotName: NameSchema.and(
      z.any().openapi({ description: 'The updated name of the slot.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The updated description of the bot.' }),
    ).exactOptional(),
    slotTypeId: BuiltInOrCustomSlotTypeIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The updated identifier of the slot type that provides values for the slot.',
        }),
    ).exactOptional(),
    valueElicitationSetting: SlotValueElicitationSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'The updated prompts that Amazon Lex sends to the user to elicit a response that provides a value for the slot.',
        }),
    ).exactOptional(),
    obfuscationSetting: ObfuscationSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'The updated setting that determines whether the slot value is obfuscated in the Amazon CloudWatch logs.',
        }),
    ).exactOptional(),
    botId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the bot that contains the slot.' }),
    ).exactOptional(),
    botVersion: DraftBotVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the slot version that contains the slot. Will always be <code>DRAFT</code>.',
        }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z.any().openapi({ description: 'The locale that contains the slot.' }),
    ).exactOptional(),
    intentId: IdSchema.and(
      z.any().openapi({ description: 'The intent that contains the slot.' }),
    ).exactOptional(),
    creationDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The timestamp of the date and time that the slot was created.' }),
    ).exactOptional(),
    lastUpdatedDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp of the date and time that the slot was last updated.',
        }),
    ).exactOptional(),
    multipleValuesSetting: MultipleValuesSettingSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether the slot accepts multiple values in one response.',
        }),
    ).exactOptional(),
    subSlotSetting: SubSlotSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifications for the constituent sub slots and the expression for the composite slot.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateSlotResponse')

const UpdateSlotTypeResponseSchema = z
  .object({
    slotTypeId: IdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the updated slot type.' }),
    ).exactOptional(),
    slotTypeName: NameSchema.and(
      z.any().openapi({ description: 'The updated name of the slot type.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The updated description of the slot type.' }),
    ).exactOptional(),
    slotTypeValues: SlotTypeValuesSchema.and(
      z.any().openapi({ description: 'The updated values that the slot type provides.' }),
    ).exactOptional(),
    valueSelectionSetting: SlotValueSelectionSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'The updated strategy that Amazon Lex uses to determine which value to select from the slot type.',
        }),
    ).exactOptional(),
    parentSlotTypeSignature: SlotTypeSignatureSchema.and(
      z
        .any()
        .openapi({
          description:
            'The updated signature of the built-in slot type that is the parent of this slot type.',
        }),
    ).exactOptional(),
    botId: IdSchema.and(
      z.any().openapi({ description: 'The identifier of the bot that contains the slot type.' }),
    ).exactOptional(),
    botVersion: DraftBotVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the bot that contains the slot type. This is always <code>DRAFT</code>.',
        }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z.any().openapi({ description: 'The language and locale of the updated slot type.' }),
    ).exactOptional(),
    creationDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp of the date and time that the slot type was created.',
        }),
    ).exactOptional(),
    lastUpdatedDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A timestamp of the date and time that the slot type was last updated.',
        }),
    ).exactOptional(),
    externalSourceSetting: ExternalSourceSettingSchema.exactOptional(),
    compositeSlotTypeSetting: CompositeSlotTypeSettingSchema.and(
      z.any().openapi({ description: 'Specifications for a composite slot type.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateSlotTypeResponse')

const AggregatedUtterancesFiltersSchema = z
  .array(AggregatedUtterancesFilterSchema)
  .length(1)
  .openapi('AggregatedUtterancesFilters')

const AggregatedUtterancesSortBySchema = z
  .object({
    attribute: AggregatedUtterancesSortAttributeSchema.and(
      z.any().openapi({ description: 'The utterance attribute to sort by.' }),
    ),
    order: SortOrderSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether to sort the aggregated utterances in ascending or descending order.',
        }),
    ),
  })
  .openapi({
    required: ['attribute', 'order'],
    description: 'Specifies attributes for sorting a list of utterances.',
  })
  .openapi('AggregatedUtterancesSortBy')

const AssociatedTranscriptFiltersSchema = z
  .array(AssociatedTranscriptFilterSchema)
  .length(1)
  .openapi('AssociatedTranscriptFilters')

const CreateCustomVocabularyItemsListSchema = z
  .array(NewCustomVocabularyItemSchema)
  .min(1)
  .max(10)
  .openapi('CreateCustomVocabularyItemsList')

const BatchCreateCustomVocabularyItemRequestSchema = z
  .object({
    customVocabularyItemList: CreateCustomVocabularyItemsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of new custom vocabulary items. Each entry must contain a phrase and can optionally contain a displayAs and/or a weight.',
        }),
    ),
  })
  .openapi({
    required: ['customVocabularyItemList'],
    title: 'BatchCreateCustomVocabularyItemRequest',
  })
  .openapi('BatchCreateCustomVocabularyItemRequest')

const DeleteCustomVocabularyItemsListSchema = z
  .array(CustomVocabularyEntryIdSchema)
  .min(1)
  .max(10)
  .openapi('DeleteCustomVocabularyItemsList')

const BatchDeleteCustomVocabularyItemRequestSchema = z
  .object({
    customVocabularyItemList: DeleteCustomVocabularyItemsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of custom vocabulary items requested to be deleted. Each entry must contain the unique custom vocabulary entry identifier.',
        }),
    ),
  })
  .openapi({
    required: ['customVocabularyItemList'],
    title: 'BatchDeleteCustomVocabularyItemRequest',
  })
  .openapi('BatchDeleteCustomVocabularyItemRequest')

const UpdateCustomVocabularyItemsListSchema = z
  .array(CustomVocabularyItemSchema)
  .min(1)
  .max(10)
  .openapi('UpdateCustomVocabularyItemsList')

const BatchUpdateCustomVocabularyItemRequestSchema = z
  .object({
    customVocabularyItemList: UpdateCustomVocabularyItemsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of custom vocabulary items with updated fields. Each entry must contain a phrase and can optionally contain a displayAs and/or a weight.',
        }),
    ),
  })
  .openapi({
    required: ['customVocabularyItemList'],
    title: 'BatchUpdateCustomVocabularyItemRequest',
  })
  .openapi('BatchUpdateCustomVocabularyItemRequest')

const BotFiltersSchema = z.array(BotFilterSchema).min(1).max(2).openapi('BotFilters')

const BotLocaleFiltersSchema = z.array(BotLocaleFilterSchema).length(1).openapi('BotLocaleFilters')

const BotLocaleSortBySchema = z
  .object({
    attribute: BotLocaleSortAttributeSchema.and(
      z.any().openapi({ description: 'The bot locale attribute to sort by.' }),
    ),
    order: SortOrderSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether to sort the bot locales in ascending or descending order.',
        }),
    ),
  })
  .openapi({
    required: ['attribute', 'order'],
    description: 'Specifies attributes for sorting a list of bot locales.',
  })
  .openapi('BotLocaleSortBy')

const BotSortBySchema = z
  .object({
    attribute: BotSortAttributeSchema.and(
      z.any().openapi({ description: 'The attribute to use to sort the list of bots.' }),
    ),
    order: SortOrderSchema.and(
      z
        .any()
        .openapi({
          description: 'The order to sort the list. You can choose ascending or descending.',
        }),
    ),
  })
  .openapi({
    required: ['attribute', 'order'],
    description: 'Specifies attributes for sorting a list of bots.',
  })
  .openapi('BotSortBy')

const BotVersionSortBySchema = z
  .object({
    attribute: BotVersionSortAttributeSchema.and(
      z.any().openapi({ description: 'The attribute to use to sort the list of versions.' }),
    ),
    order: SortOrderSchema.and(
      z
        .any()
        .openapi({
          description: 'The order to sort the list. You can specify ascending or descending order.',
        }),
    ),
  })
  .openapi({
    required: ['attribute', 'order'],
    description: 'Specifies attributes for sorting a list of bot versions.',
  })
  .openapi('BotVersionSortBy')

const BuildBotLocaleRequestSchema = z
  .object({})
  .openapi({ title: 'BuildBotLocaleRequest' })
  .openapi('BuildBotLocaleRequest')

const BuiltInIntentSortBySchema = z
  .object({
    attribute: BuiltInIntentSortAttributeSchema.and(
      z
        .any()
        .openapi({ description: 'The attribute to use to sort the list of built-in intents.' }),
    ),
    order: SortOrderSchema.and(
      z
        .any()
        .openapi({
          description: 'The order to sort the list. You can specify ascending or descending order.',
        }),
    ),
  })
  .openapi({
    required: ['attribute', 'order'],
    description: 'Specifies attributes for sorting a list of built-in intents.',
  })
  .openapi('BuiltInIntentSortBy')

const BuiltInSlotTypeSortBySchema = z
  .object({
    attribute: BuiltInSlotTypeSortAttributeSchema.and(
      z
        .any()
        .openapi({ description: 'The attribute to use to sort the list of built-in intents.' }),
    ),
    order: SortOrderSchema.and(
      z
        .any()
        .openapi({
          description: 'The order to sort the list. You can choose ascending or descending.',
        }),
    ),
  })
  .openapi({
    required: ['attribute', 'order'],
    description: 'Specifies attributes for sorting a list of built-in slot types.',
  })
  .openapi('BuiltInSlotTypeSortBy')

const BuiltInsMaxResultsSchema = z.int().min(20).max(20).openapi('BuiltInsMaxResults')

const ConditionKeySchema = z.string().min(1).max(1024).openapi('ConditionKey')

const ConditionMapSchema = z
  .record(z.string(), ConditionKeyValueMapSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 10)
  .openapi('ConditionMap')

const ConditionOperatorSchema = z.string().min(1).openapi('ConditionOperator')

const CreateBotAliasRequestSchema = z
  .object({
    botAliasName: NameSchema.and(
      z.any().openapi({ description: 'The alias to create. The name must be unique for the bot.' }),
    ),
    description: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of the alias. Use this description to help identify the alias.',
        }),
    ).exactOptional(),
    botVersion: NumericalBotVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the bot that this alias points to. You can use the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_UpdateBotAlias.html">UpdateBotAlias</a> operation to change the bot version associated with the alias.',
        }),
    ).exactOptional(),
    botAliasLocaleSettings: BotAliasLocaleSettingsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maps configuration information to a specific locale. You can use this parameter to specify a specific Lambda function to run different functions in different locales.',
        }),
    ).exactOptional(),
    conversationLogSettings: ConversationLogSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether Amazon Lex logs text and audio for a conversation with the bot. When you enable conversation logs, text logs store text input, transcripts of audio input, and associated metadata in Amazon CloudWatch Logs. Audio logs store audio input in Amazon S3.',
        }),
    ).exactOptional(),
    sentimentAnalysisSettings: SentimentAnalysisSettingsSchema.exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of tags to add to the bot alias. You can only add tags when you create an alias, you can't use the <code>UpdateBotAlias</code> operation to update the tags on a bot alias. To update tags, use the <code>TagResource</code> operation.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['botAliasName'], title: 'CreateBotAliasRequest' })
  .openapi('CreateBotAliasRequest')

const CreateBotLocaleRequestSchema = z
  .object({
    localeId: LocaleIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the language and locale that the bot will be used in. The string must match one of the supported locales. All of the intents, slot types, and slots used in the bot must have the same locale. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.',
        }),
    ),
    description: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of the bot locale. Use this to help identify the bot locale in lists.',
        }),
    ).exactOptional(),
    nluIntentConfidenceThreshold: ConfidenceThresholdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Determines the threshold where Amazon Lex will insert the <code>AMAZON.FallbackIntent</code>, <code>AMAZON.KendraSearchIntent</code>, or both when returning alternative intents. <code>AMAZON.FallbackIntent</code> and <code>AMAZON.KendraSearchIntent</code> are only inserted if they are configured for the bot.</p> <p>For example, suppose a bot is configured with the confidence threshold of 0.80 and the <code>AMAZON.FallbackIntent</code>. Amazon Lex returns three alternative intents with the following confidence scores: IntentA (0.70), IntentB (0.60), IntentC (0.50). The response from the <code>RecognizeText</code> operation would be:</p> <ul> <li> <p>AMAZON.FallbackIntent</p> </li> <li> <p>IntentA</p> </li> <li> <p>IntentB</p> </li> <li> <p>IntentC</p> </li> </ul>',
        }),
    ),
    voiceSettings: VoiceSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Polly voice ID that Amazon Lex uses for voice interaction with the user.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['localeId', 'nluIntentConfidenceThreshold'],
    title: 'CreateBotLocaleRequest',
  })
  .openapi('CreateBotLocaleRequest')

const CreateBotRequestSchema = z
  .object({
    botName: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the bot. The bot name must be unique in the account that creates the bot.',
        }),
    ),
    description: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of the bot. It appears in lists to help you identify a particular bot.',
        }),
    ).exactOptional(),
    roleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an IAM role that has permission to access the bot.',
        }),
    ),
    dataPrivacy: DataPrivacySchema.and(
      z
        .any()
        .openapi({
          description:
            "Provides information on additional privacy protections Amazon Lex should use with the bot's data.",
        }),
    ),
    idleSessionTTLInSeconds: SessionTTLSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The time, in seconds, that Amazon Lex should keep information about a user's conversation with the bot. </p> <p>A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Lex deletes any data provided before the timeout.</p> <p>You can specify between 60 (1 minute) and 86,400 (24 hours) seconds.</p>",
        }),
    ),
    botTags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of tags to add to the bot. You can only add tags when you create a bot. You can't use the <code>UpdateBot</code> operation to update tags. To update tags, use the <code>TagResource</code> operation.",
        }),
    ).exactOptional(),
    testBotAliasTags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of tags to add to the test alias for a bot. You can only add tags when you create a bot. You can't use the <code>UpdateAlias</code> operation to update tags. To update tags on the test alias, use the <code>TagResource</code> operation.",
        }),
    ).exactOptional(),
    botType: BotTypeSchema.and(
      z.any().openapi({ description: 'The type of a bot to create.' }),
    ).exactOptional(),
    botMembers: BotMembersSchema.and(
      z.any().openapi({ description: 'The list of bot members in a network to be created.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['botName', 'roleArn', 'dataPrivacy', 'idleSessionTTLInSeconds'],
    title: 'CreateBotRequest',
  })
  .openapi('CreateBotRequest')

const CreateBotVersionRequestSchema = z
  .object({
    description: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of the version. Use the description to help identify the version in lists.',
        }),
    ).exactOptional(),
    botVersionLocaleSpecification: BotVersionLocaleSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the locales that Amazon Lex adds to this version. You can choose the <code>Draft</code> version or any other previously published version for each locale. When you specify a source version, the locale data is copied from the source version to the new version.',
        }),
    ),
  })
  .openapi({ required: ['botVersionLocaleSpecification'], title: 'CreateBotVersionRequest' })
  .openapi('CreateBotVersionRequest')

const ImportExportFilePasswordSchema = z
  .string()
  .min(1)
  .max(1024)
  .openapi('ImportExportFilePassword')

const CreateExportRequestSchema = z
  .object({
    resourceSpecification: ExportResourceSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the type of resource to export, either a bot or a bot locale. You can only specify one type of resource to export.',
        }),
    ),
    fileFormat: ImportExportFileFormatSchema.and(
      z
        .any()
        .openapi({ description: 'The file format of the bot or bot locale definition files.' }),
    ),
    filePassword: ImportExportFilePasswordSchema.and(
      z
        .any()
        .openapi({
          description:
            'An password to use to encrypt the exported archive. Using a password is optional, but you should encrypt the archive to protect the data in transit between Amazon Lex and your local computer.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['resourceSpecification', 'fileFormat'], title: 'CreateExportRequest' })
  .openapi('CreateExportRequest')

const CreateIntentRequestSchema = z
  .object({
    intentName: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the intent. Intent names must be unique in the locale that contains the intent and cannot match the name of any built-in intent.',
        }),
    ),
    description: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of the intent. Use the description to help identify the intent in lists.',
        }),
    ).exactOptional(),
    parentIntentSignature: IntentSignatureSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique identifier for the built-in intent to base this intent on.',
        }),
    ).exactOptional(),
    sampleUtterances: SampleUtterancesListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of strings that a user might say to signal the intent. For example, "I want a pizza", or "I want a {PizzaSize} pizza". </p> <p>In an utterance, slot names are enclosed in curly braces ("{", "}") to indicate where they should be displayed in the utterance shown to the user.. </p>',
        }),
    ).exactOptional(),
    dialogCodeHook: DialogCodeHookSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies that Amazon Lex invokes the alias Lambda function for each user input. You can invoke this Lambda function to personalize user interaction.</p> <p>For example, suppose that your bot determines that the user's name is John. You Lambda function might retrieve John's information from a backend database and prepopulate some of the values. For example, if you find that John is gluten intolerant, you might set the corresponding intent slot, <code>glutenIntolerant</code> to <code>true</code>. You might find John's phone number and set the corresponding session attribute.</p>",
        }),
    ).exactOptional(),
    fulfillmentCodeHook: FulfillmentCodeHookSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies that Amazon Lex invokes the alias Lambda function when the intent is ready for fulfillment. You can invoke this function to complete the bot's transaction with the user.</p> <p>For example, in a pizza ordering bot, the Lambda function can look up the closest pizza restaurant to the customer's location and then place an order on the customer's behalf.</p>",
        }),
    ).exactOptional(),
    intentConfirmationSetting: IntentConfirmationSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides prompts that Amazon Lex sends to the user to confirm the completion of an intent. If the user answers "no," the settings contain a statement that is sent to the user to end the intent.',
        }),
    ).exactOptional(),
    intentClosingSetting: IntentClosingSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'Sets the response that Amazon Lex sends to the user when the intent is closed.',
        }),
    ).exactOptional(),
    inputContexts: InputContextsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of contexts that must be active for this intent to be considered by Amazon Lex.</p> <p>When an intent has an input context list, Amazon Lex only considers using the intent in an interaction with the user when the specified contexts are included in the active context list for the session. If the contexts are not active, then Amazon Lex will not use the intent.</p> <p>A context can be automatically activated using the <code>outputContexts</code> property or it can be set at runtime.</p> <p> For example, if there are two intents with different input contexts that respond to the same utterances, only the intent with the active context will respond.</p> <p>An intent may have up to 5 input contexts. If an intent has multiple input contexts, all of the contexts must be active to consider the intent.</p>',
        }),
    ).exactOptional(),
    outputContexts: OutputContextsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A lists of contexts that the intent activates when it is fulfilled.</p> <p>You can use an output context to indicate the intents that Amazon Lex should consider for the next turn of the conversation with a customer. </p> <p>When you use the <code>outputContextsList</code> property, all of the contexts specified in the list are activated when the intent is fulfilled. You can set up to 10 output contexts. You can also set the number of conversation turns that the context should be active, or the length of time that the context should be active.</p>',
        }),
    ).exactOptional(),
    kendraConfiguration: KendraConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            "Configuration information required to use the <code>AMAZON.KendraSearchIntent</code> intent to connect to an Amazon Kendra index. The <code>AMAZON.KendraSearchIntent</code> intent is called when Amazon Lex can't determine another intent to invoke.",
        }),
    ).exactOptional(),
    initialResponseSetting: InitialResponseSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration settings for the response that is sent to the user at the beginning of a conversation, before eliciting slot values.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['intentName'], title: 'CreateIntentRequest' })
  .openapi('CreateIntentRequest')

const CreateResourcePolicyRequestSchema = z
  .object({
    policy: PolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A resource policy to add to the resource. The policy is a JSON structure that contains one or more statements that define the policy. The policy must follow the IAM syntax. For more information about the contents of a JSON policy document, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html"> IAM JSON policy reference </a>. </p> <p>If the policy isn\'t valid, Amazon Lex returns a validation exception.</p>',
        }),
    ),
  })
  .openapi({ required: ['policy'], title: 'CreateResourcePolicyRequest' })
  .openapi('CreateResourcePolicyRequest')

const EffectSchema = z.enum(['Allow', 'Deny']).openapi('Effect')

const PrincipalListSchema = z.array(PrincipalSchema).openapi('PrincipalList')

const OperationListSchema = z.array(OperationSchema).openapi('OperationList')

const CreateResourcePolicyStatementRequestSchema = z
  .object({
    statementId: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the statement. The ID is the same as the <code>Sid</code> IAM property. The statement name must be unique within the policy. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html">IAM JSON policy elements: Sid</a>. ',
        }),
    ),
    effect: EffectSchema.and(
      z
        .any()
        .openapi({
          description: 'Determines whether the statement allows or denies access to the resource.',
        }),
    ),
    principal: PrincipalListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An IAM principal, such as an IAM users, IAM roles, or AWS services that is allowed or denied access to a resource. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html">AWS JSON policy elements: Principal</a>.',
        }),
    ),
    action: OperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Lex action that this policy either allows or denies. The action must apply to the resource type of the specified ARN. For more information, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlexv2.html"> Actions, resources, and condition keys for Amazon Lex V2</a>.',
        }),
    ),
    condition: ConditionMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies a condition when the policy is in effect. If the principal of the policy is a service principal, you must provide two condition blocks, one with a SourceAccount global condition key and one with a SourceArn global condition key.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html">IAM JSON policy elements: Condition </a>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['statementId', 'effect', 'principal', 'action'],
    title: 'CreateResourcePolicyStatementRequest',
  })
  .openapi('CreateResourcePolicyStatementRequest')

const CreateSlotRequestSchema = z
  .object({
    slotName: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the slot. Slot names must be unique within the bot that contains the slot.',
        }),
    ),
    description: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description: 'A description of the slot. Use this to help identify the slot in lists.',
        }),
    ).exactOptional(),
    slotTypeId: BuiltInOrCustomSlotTypeIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the slot type associated with this slot. The slot type determines the values that can be entered into the slot.',
        }),
    ).exactOptional(),
    valueElicitationSetting: SlotValueElicitationSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies prompts that Amazon Lex sends to the user to elicit a response that provides the value for the slot. ',
        }),
    ),
    obfuscationSetting: ObfuscationSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Determines how slot values are used in Amazon CloudWatch logs. If the value of the <code>obfuscationSetting</code> parameter is <code>DefaultObfuscation</code>, slot values are obfuscated in the log output. If the value is <code>None</code>, the actual value is present in the log output.</p> <p>The default is to obfuscate values in the CloudWatch logs.</p>',
        }),
    ).exactOptional(),
    multipleValuesSetting: MultipleValuesSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether the slot returns multiple values in one response. Multi-value slots are only available in the en-US locale. If you set this value to <code>true</code> in any other locale, Amazon Lex throws a <code>ValidationException</code>. </p> <p>If the <code>multipleValuesSetting</code> is not set, the default value is <code>false</code>.</p>',
        }),
    ).exactOptional(),
    subSlotSetting: SubSlotSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifications for the constituent sub slots and the expression for the composite slot.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['slotName', 'valueElicitationSetting'], title: 'CreateSlotRequest' })
  .openapi('CreateSlotRequest')

const CreateSlotTypeRequestSchema = z
  .object({
    slotTypeName: NameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name for the slot. A slot type name must be unique within the account.',
        }),
    ),
    description: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of the slot type. Use the description to help identify the slot type in lists.',
        }),
    ).exactOptional(),
    slotTypeValues: SlotTypeValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>SlotTypeValue</code> objects that defines the values that the slot type can take. Each value can have a list of synonyms, additional values that help train the machine learning model about the values that it resolves for a slot.',
        }),
    ).exactOptional(),
    valueSelectionSetting: SlotValueSelectionSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Determines the strategy that Amazon Lex uses to select a value from the list of possible values. The field can be set to one of the following values:</p> <ul> <li> <p> <code>OriginalValue</code> - Returns the value entered by the user, if the user value is similar to the slot value.</p> </li> <li> <p> <code>TopResolution</code> - If there is a resolution list for the slot, return the first value in the resolution list. If there is no resolution list, return null.</p> </li> </ul> <p>If you don't specify the <code>valueSelectionSetting</code> parameter, the default is <code>OriginalValue</code>.</p>",
        }),
    ).exactOptional(),
    parentSlotTypeSignature: SlotTypeSignatureSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The built-in slot type used as a parent of this slot type. When you define a parent slot type, the new slot type has the configuration of the parent slot type.</p> <p>Only <code>AMAZON.AlphaNumeric</code> is supported.</p>',
        }),
    ).exactOptional(),
    externalSourceSetting: ExternalSourceSettingSchema.and(
      z
        .any()
        .openapi({
          description: 'Sets the type of external information used to create the slot type.',
        }),
    ).exactOptional(),
    compositeSlotTypeSetting: CompositeSlotTypeSettingSchema.and(
      z.any().openapi({ description: 'Specifications for a composite slot type.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['slotTypeName'], title: 'CreateSlotTypeRequest' })
  .openapi('CreateSlotTypeRequest')

const CreateUploadUrlRequestSchema = z
  .object({})
  .openapi({ title: 'CreateUploadUrlRequest' })
  .openapi('CreateUploadUrlRequest')

const SkipResourceInUseCheckSchema = z.boolean().openapi('SkipResourceInUseCheck')

const DeleteBotAliasRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteBotAliasRequest' })
  .openapi('DeleteBotAliasRequest')

const DeleteBotLocaleRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteBotLocaleRequest' })
  .openapi('DeleteBotLocaleRequest')

const DeleteBotRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteBotRequest' })
  .openapi('DeleteBotRequest')

const DeleteBotVersionRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteBotVersionRequest' })
  .openapi('DeleteBotVersionRequest')

const DeleteCustomVocabularyRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteCustomVocabularyRequest' })
  .openapi('DeleteCustomVocabularyRequest')

const DeleteExportRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteExportRequest' })
  .openapi('DeleteExportRequest')

const DeleteImportRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteImportRequest' })
  .openapi('DeleteImportRequest')

const DeleteIntentRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteIntentRequest' })
  .openapi('DeleteIntentRequest')

const DeleteResourcePolicyRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteResourcePolicyRequest' })
  .openapi('DeleteResourcePolicyRequest')

const DeleteResourcePolicyStatementRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteResourcePolicyStatementRequest' })
  .openapi('DeleteResourcePolicyStatementRequest')

const DeleteSlotRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteSlotRequest' })
  .openapi('DeleteSlotRequest')

const DeleteSlotTypeRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteSlotTypeRequest' })
  .openapi('DeleteSlotTypeRequest')

const SessionIdSchema = z
  .string()
  .regex(/[0-9a-zA-Z._:-]+/)
  .min(2)
  .max(100)
  .openapi('SessionId')

const DeleteUtterancesRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteUtterancesRequest' })
  .openapi('DeleteUtterancesRequest')

const DescribeBotAliasRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeBotAliasRequest' })
  .openapi('DescribeBotAliasRequest')

const DescribeBotLocaleRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeBotLocaleRequest' })
  .openapi('DescribeBotLocaleRequest')

const DescribeBotRecommendationRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeBotRecommendationRequest' })
  .openapi('DescribeBotRecommendationRequest')

const DescribeBotRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeBotRequest' })
  .openapi('DescribeBotRequest')

const DescribeBotVersionRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeBotVersionRequest' })
  .openapi('DescribeBotVersionRequest')

const DescribeCustomVocabularyMetadataRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeCustomVocabularyMetadataRequest' })
  .openapi('DescribeCustomVocabularyMetadataRequest')

const DescribeExportRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeExportRequest' })
  .openapi('DescribeExportRequest')

const DescribeImportRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeImportRequest' })
  .openapi('DescribeImportRequest')

const DescribeIntentRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeIntentRequest' })
  .openapi('DescribeIntentRequest')

const DescribeResourcePolicyRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeResourcePolicyRequest' })
  .openapi('DescribeResourcePolicyRequest')

const DescribeSlotRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeSlotRequest' })
  .openapi('DescribeSlotRequest')

const DescribeSlotTypeRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeSlotTypeRequest' })
  .openapi('DescribeSlotTypeRequest')

const ExportFiltersSchema = z.array(ExportFilterSchema).length(1).openapi('ExportFilters')

const ExportSortBySchema = z
  .object({
    attribute: ExportSortAttributeSchema.and(
      z.any().openapi({ description: 'The export field to use for sorting.' }),
    ),
    order: SortOrderSchema.and(z.any().openapi({ description: 'The order to sort the list.' })),
  })
  .openapi({
    required: ['attribute', 'order'],
    description: 'Provides information about sorting a list of exports.',
  })
  .openapi('ExportSortBy')

const ImportFiltersSchema = z.array(ImportFilterSchema).length(1).openapi('ImportFilters')

const ImportSortBySchema = z
  .object({
    attribute: ImportSortAttributeSchema.and(
      z.any().openapi({ description: 'The export field to use for sorting.' }),
    ),
    order: SortOrderSchema.and(z.any().openapi({ description: 'The order to sort the list.' })),
  })
  .openapi({
    required: ['attribute', 'order'],
    description: 'Provides information for sorting a list of imports.',
  })
  .openapi('ImportSortBy')

const IntentFiltersSchema = z.array(IntentFilterSchema).length(1).openapi('IntentFilters')

const IntentSortBySchema = z
  .object({
    attribute: IntentSortAttributeSchema.and(
      z.any().openapi({ description: 'The attribute to use to sort the list of intents.' }),
    ),
    order: SortOrderSchema.and(
      z
        .any()
        .openapi({
          description: 'The order to sort the list. You can choose ascending or descending.',
        }),
    ),
  })
  .openapi({
    required: ['attribute', 'order'],
    description: 'Specifies attributes for sorting a list of intents.',
  })
  .openapi('IntentSortBy')

const ListAggregatedUtterancesRequestSchema = z
  .object({
    botAliasId: BotAliasIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The identifier of the bot alias associated with this request. If you specify the bot alias, you can't specify the bot version.",
        }),
    ).exactOptional(),
    botVersion: BotVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            "The identifier of the bot version associated with this request. If you specify the bot version, you can't specify the bot alias.",
        }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the language and locale where the utterances were collected. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.',
        }),
    ),
    aggregationDuration: UtteranceAggregationDurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time window for aggregating the utterance information. You can specify a time between one hour and two weeks.',
        }),
    ),
    sortBy: AggregatedUtterancesSortBySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies sorting parameters for the list of utterances. You can sort by the hit count, the missed count, or the number of distinct sessions the utterance appeared in.',
        }),
    ).exactOptional(),
    filters: AggregatedUtterancesFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides the specification of a filter used to limit the utterances in the response to only those that match the filter specification. You can only specify one filter and one string to filter on.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The maximum number of utterances to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned. If you don't specify the <code>maxResults</code> parameter, 1,000 results are returned.",
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response from the <code>ListAggregatedUtterances</code> operation contains more results that specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token in the <code>nextToken</code> parameter to return the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['localeId', 'aggregationDuration'],
    title: 'ListAggregatedUtterancesRequest',
  })
  .openapi('ListAggregatedUtterancesRequest')

const ListBotAliasesRequestSchema = z
  .object({
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of aliases to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response from the <code>ListBotAliases</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token in the <code>nextToken</code> parameter to return the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListBotAliasesRequest', required: [] })
  .openapi('ListBotAliasesRequest')

const ListBotLocalesRequestSchema = z
  .object({
    sortBy: BotLocaleSortBySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies sorting parameters for the list of locales. You can sort by locale name in ascending or descending order.',
        }),
    ).exactOptional(),
    filters: BotLocaleFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides the specification for a filter used to limit the response to only those locales that match the filter specification. You can only specify one filter and one value to filter on.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of aliases to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response from the <code>ListBotLocales</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token as the <code>nextToken</code> parameter to return the next page of results. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListBotLocalesRequest', required: [] })
  .openapi('ListBotLocalesRequest')

const ListBotRecommendationsRequestSchema = z
  .object({
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of bot recommendations to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response from the ListBotRecommendation operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListBotRecommendationsRequest', required: [] })
  .openapi('ListBotRecommendationsRequest')

const ListBotVersionsRequestSchema = z
  .object({
    sortBy: BotVersionSortBySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies sorting parameters for the list of versions. You can specify that the list be sorted by version name in either ascending or descending order.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of versions to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response to the <code>ListBotVersion</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token in the <code>nextToken</code> parameter to return the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListBotVersionsRequest', required: [] })
  .openapi('ListBotVersionsRequest')

const ListBotsRequestSchema = z
  .object({
    sortBy: BotSortBySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies sorting parameters for the list of bots. You can specify that the list be sorted by bot name in ascending or descending order.',
        }),
    ).exactOptional(),
    filters: BotFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides the specification of a filter used to limit the bots in the response to only those that match the filter specification. You can only specify one filter and one string to filter on.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of bots to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If the response from the <code>ListBots</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. </p> <p>Use the returned token in the <code>nextToken</code> parameter of a <code>ListBots</code> request to return the next page of results. For a complete set of results, call the <code>ListBots</code> operation until the <code>nextToken</code> returned in the response is null.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListBotsRequest', required: [] })
  .openapi('ListBotsRequest')

const ListBuiltInIntentsRequestSchema = z
  .object({
    sortBy: BuiltInIntentSortBySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies sorting parameters for the list of built-in intents. You can specify that the list be sorted by the built-in intent signature in either ascending or descending order.',
        }),
    ).exactOptional(),
    maxResults: BuiltInsMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of built-in intents to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response from the <code>ListBuiltInIntents</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token in the <code>nextToken</code> parameter to return the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListBuiltInIntentsRequest', required: [] })
  .openapi('ListBuiltInIntentsRequest')

const ListBuiltInSlotTypesRequestSchema = z
  .object({
    sortBy: BuiltInSlotTypeSortBySchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines the sort order for the response from the <code>ListBuiltInSlotTypes</code> operation. You can choose to sort by the slot type signature in either ascending or descending order.',
        }),
    ).exactOptional(),
    maxResults: BuiltInsMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of built-in slot types to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response from the <code>ListBuiltInSlotTypes</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token in the <code>nextToken</code> parameter to return the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListBuiltInSlotTypesRequest', required: [] })
  .openapi('ListBuiltInSlotTypesRequest')

const ListCustomVocabularyItemsRequestSchema = z
  .object({
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of items returned by the list operation.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The nextToken identifier to the list custom vocabulary request.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListCustomVocabularyItemsRequest', required: [] })
  .openapi('ListCustomVocabularyItemsRequest')

const ListExportsRequestSchema = z
  .object({
    botId: IdSchema.and(
      z
        .any()
        .openapi({ description: 'The unique identifier that Amazon Lex assigned to the bot.' }),
    ).exactOptional(),
    botVersion: BotVersionSchema.and(
      z.any().openapi({ description: 'The version of the bot to list exports for. ' }),
    ).exactOptional(),
    sortBy: ExportSortBySchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines the field that the list of exports is sorted by. You can sort by the <code>LastUpdatedDateTime</code> field in ascending or descending order.',
        }),
    ).exactOptional(),
    filters: ExportFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides the specification of a filter used to limit the exports in the response to only those that match the filter specification. You can only specify one filter and one string to filter on.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of exports to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If the response from the <code>ListExports</code> operation contains more results that specified in the <code>maxResults</code> parameter, a token is returned in the response. </p> <p>Use the returned token in the <code>nextToken</code> parameter of a <code>ListExports</code> request to return the next page of results. For a complete set of results, call the <code>ListExports</code> operation until the <code>nextToken</code> returned in the response is null.</p>',
        }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the resources that should be exported. If you don't specify a resource type in the <code>filters</code> parameter, both bot locales and custom vocabularies are exported.",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListExportsRequest', required: [] })
  .openapi('ListExportsRequest')

const ListImportsRequestSchema = z
  .object({
    botId: IdSchema.and(
      z
        .any()
        .openapi({ description: 'The unique identifier that Amazon Lex assigned to the bot.' }),
    ).exactOptional(),
    botVersion: DraftBotVersionSchema.and(
      z.any().openapi({ description: 'The version of the bot to list imports for.' }),
    ).exactOptional(),
    sortBy: ImportSortBySchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines the field that the list of imports is sorted by. You can sort by the <code>LastUpdatedDateTime</code> field in ascending or descending order.',
        }),
    ).exactOptional(),
    filters: ImportFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides the specification of a filter used to limit the bots in the response to only those that match the filter specification. You can only specify one filter and one string to filter on.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of imports to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If the response from the <code>ListImports</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response.</p> <p>Use the returned token in the <code>nextToken</code> parameter of a <code>ListImports</code> request to return the next page of results. For a complete set of results, call the <code>ListImports</code> operation until the <code>nextToken</code> returned in the response is null.</p>',
        }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the locale that should be present in the list. If you don't specify a resource type in the <code>filters</code> parameter, the list contains both bot locales and custom vocabularies.",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListImportsRequest', required: [] })
  .openapi('ListImportsRequest')

const ListIntentsRequestSchema = z
  .object({
    sortBy: IntentSortBySchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines the sort order for the response from the <code>ListIntents</code> operation. You can choose to sort by the intent name or last updated date in either ascending or descending order.',
        }),
    ).exactOptional(),
    filters: IntentFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides the specification of a filter used to limit the intents in the response to only those that match the filter specification. You can only specify one filter and only one string to filter on.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of intents to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If the response from the <code>ListIntents</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response.</p> <p>Use the returned token in the <code>nextToken</code> parameter of a <code>ListIntents</code> request to return the next page of results. For a complete set of results, call the <code>ListIntents</code> operation until the <code>nextToken</code> returned in the response is null.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListIntentsRequest', required: [] })
  .openapi('ListIntentsRequest')

const ListRecommendedIntentsRequestSchema = z
  .object({
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response from the ListRecommendedIntents operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of bot recommendations to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListRecommendedIntentsRequest', required: [] })
  .openapi('ListRecommendedIntentsRequest')

const SlotTypeSortBySchema = z
  .object({
    attribute: SlotTypeSortAttributeSchema.and(
      z.any().openapi({ description: 'The attribute to use to sort the list of slot types.' }),
    ),
    order: SortOrderSchema.and(
      z
        .any()
        .openapi({
          description: 'The order to sort the list. You can say ascending or descending.',
        }),
    ),
  })
  .openapi({
    required: ['attribute', 'order'],
    description: 'Specifies attributes for sorting a list of slot types.',
  })
  .openapi('SlotTypeSortBy')

const SlotTypeFiltersSchema = z.array(SlotTypeFilterSchema).length(1).openapi('SlotTypeFilters')

const ListSlotTypesRequestSchema = z
  .object({
    sortBy: SlotTypeSortBySchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines the sort order for the response from the <code>ListSlotTypes</code> operation. You can choose to sort by the slot type name or last updated date in either ascending or descending order.',
        }),
    ).exactOptional(),
    filters: SlotTypeFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides the specification of a filter used to limit the slot types in the response to only those that match the filter specification. You can only specify one filter and only one string to filter on.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of slot types to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response from the <code>ListSlotTypes</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token in the <code>nextToken</code> parameter to return the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListSlotTypesRequest', required: [] })
  .openapi('ListSlotTypesRequest')

const SlotSortBySchema = z
  .object({
    attribute: SlotSortAttributeSchema.and(
      z.any().openapi({ description: 'The attribute to use to sort the list.' }),
    ),
    order: SortOrderSchema.and(
      z
        .any()
        .openapi({
          description: 'The order to sort the list. You can choose ascending or descending.',
        }),
    ),
  })
  .openapi({
    required: ['attribute', 'order'],
    description: 'Specifies attributes for sorting a list of bots.',
  })
  .openapi('SlotSortBy')

const SlotFiltersSchema = z.array(SlotFilterSchema).length(1).openapi('SlotFilters')

const ListSlotsRequestSchema = z
  .object({
    sortBy: SlotSortBySchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines the sort order for the response from the <code>ListSlots</code> operation. You can choose to sort by the slot name or last updated date in either ascending or descending order.',
        }),
    ).exactOptional(),
    filters: SlotFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides the specification of a filter used to limit the slots in the response to only those that match the filter specification. You can only specify one filter and only one string to filter on.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of slots to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response from the <code>ListSlots</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token in the <code>nextToken</code> parameter to return the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListSlotsRequest', required: [] })
  .openapi('ListSlotsRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const PromptAttemptSchema = z
  .enum(['Initial', 'Retry1', 'Retry2', 'Retry3', 'Retry4', 'Retry5'])
  .openapi({ description: 'The attempt name of attempts of a prompt.' })
  .openapi('PromptAttempt')

const SearchOrderSchema = z.enum(['Ascending', 'Descending']).openapi('SearchOrder')

const SearchAssociatedTranscriptsRequestSchema = z
  .object({
    searchOrder: SearchOrderSchema.and(
      z
        .any()
        .openapi({
          description:
            'How SearchResults are ordered. Valid values are Ascending or Descending. The default is Descending.',
        }),
    ).exactOptional(),
    filters: AssociatedTranscriptFiltersSchema.and(
      z.any().openapi({ description: 'A list of filter objects.' }),
    ),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of bot recommendations to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.',
        }),
    ).exactOptional(),
    nextIndex: NextIndexSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response from the SearchAssociatedTranscriptsRequest operation contains more results than specified in the maxResults parameter, an index is returned in the response. Use that index in the nextIndex parameter to return the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['filters'], title: 'SearchAssociatedTranscriptsRequest' })
  .openapi('SearchAssociatedTranscriptsRequest')

const SlotShapeSchema = z.enum(['Scalar', 'List']).openapi('SlotShape')

const StartBotRecommendationRequestSchema = z
  .object({
    transcriptSourceSetting: TranscriptSourceSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'The object representing the Amazon S3 bucket containing the transcript, as well as the associated metadata.',
        }),
    ),
    encryptionSetting: EncryptionSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'The object representing the passwords that will be used to encrypt the data related to the bot recommendation results, as well as the KMS key ARN used to encrypt the associated metadata.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['transcriptSourceSetting'], title: 'StartBotRecommendationRequest' })
  .openapi('StartBotRecommendationRequest')

const StartImportRequestSchema = z
  .object({
    importId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the import. It is included in the response from the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateUploadUrl.html">CreateUploadUrl</a> operation.',
        }),
    ),
    resourceSpecification: ImportResourceSpecificationSchema.and(
      z
        .any()
        .openapi({
          description: 'Parameters for creating the bot, bot locale or custom vocabulary.',
        }),
    ),
    mergeStrategy: MergeStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            'The strategy to use when there is a name conflict between the imported resource and an existing resource. When the merge strategy is <code>FailOnConflict</code> existing resources are not overwritten and the import fails.',
        }),
    ),
    filePassword: ImportExportFilePasswordSchema.and(
      z
        .any()
        .openapi({
          description:
            'The password used to encrypt the zip archive that contains the resource definition. You should always encrypt the zip archive to protect it during transit between your site and Amazon Lex.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['importId', 'resourceSpecification', 'mergeStrategy'],
    title: 'StartImportRequest',
  })
  .openapi('StartImportRequest')

const StopBotRecommendationRequestSchema = z
  .object({})
  .openapi({ title: 'StopBotRecommendationRequest' })
  .openapi('StopBotRecommendationRequest')

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(200).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tag keys to add to the resource. If a tag key already exists, the existing value is replaced with the new value.',
        }),
    ),
  })
  .openapi({ required: ['tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateBotAliasRequestSchema = z
  .object({
    botAliasName: NameSchema.and(
      z.any().openapi({ description: 'The new name to assign to the bot alias.' }),
    ),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The new description to assign to the bot alias.' }),
    ).exactOptional(),
    botVersion: BotVersionSchema.and(
      z.any().openapi({ description: 'The new bot version to assign to the bot alias.' }),
    ).exactOptional(),
    botAliasLocaleSettings: BotAliasLocaleSettingsMapSchema.and(
      z
        .any()
        .openapi({
          description: 'The new Lambda functions to use in each locale for the bot alias.',
        }),
    ).exactOptional(),
    conversationLogSettings: ConversationLogSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new settings for storing conversation logs in Amazon CloudWatch Logs and Amazon S3 buckets.',
        }),
    ).exactOptional(),
    sentimentAnalysisSettings: SentimentAnalysisSettingsSchema.exactOptional(),
  })
  .openapi({ required: ['botAliasName'], title: 'UpdateBotAliasRequest' })
  .openapi('UpdateBotAliasRequest')

const UpdateBotLocaleRequestSchema = z
  .object({
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The new description of the locale.' }),
    ).exactOptional(),
    nluIntentConfidenceThreshold: ConfidenceThresholdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new confidence threshold where Amazon Lex inserts the <code>AMAZON.FallbackIntent</code> and <code>AMAZON.KendraSearchIntent</code> intents in the list of possible intents for an utterance.',
        }),
    ),
    voiceSettings: VoiceSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new Amazon Polly voice Amazon Lex should use for voice interaction with the user.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['nluIntentConfidenceThreshold'], title: 'UpdateBotLocaleRequest' })
  .openapi('UpdateBotLocaleRequest')

const UpdateBotRecommendationRequestSchema = z
  .object({
    encryptionSetting: EncryptionSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'The object representing the passwords that will be used to encrypt the data related to the bot recommendation results, as well as the KMS key ARN used to encrypt the associated metadata.',
        }),
    ),
  })
  .openapi({ required: ['encryptionSetting'], title: 'UpdateBotRecommendationRequest' })
  .openapi('UpdateBotRecommendationRequest')

const UpdateBotRequestSchema = z
  .object({
    botName: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new name of the bot. The name must be unique in the account that creates the bot.',
        }),
    ),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the bot.' }),
    ).exactOptional(),
    roleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an IAM role that has permissions to access the bot.',
        }),
    ),
    dataPrivacy: DataPrivacySchema.and(
      z
        .any()
        .openapi({
          description:
            "Provides information on additional privacy protections Amazon Lex should use with the bot's data.",
        }),
    ),
    idleSessionTTLInSeconds: SessionTTLSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The time, in seconds, that Amazon Lex should keep information about a user's conversation with the bot.</p> <p>A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Lex deletes any data provided before the timeout.</p> <p>You can specify between 60 (1 minute) and 86,400 (24 hours) seconds.</p>",
        }),
    ),
    botType: BotTypeSchema.and(
      z.any().openapi({ description: 'The type of the bot to be updated.' }),
    ).exactOptional(),
    botMembers: BotMembersSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of bot members in the network associated with the update action.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['botName', 'roleArn', 'dataPrivacy', 'idleSessionTTLInSeconds'],
    title: 'UpdateBotRequest',
  })
  .openapi('UpdateBotRequest')

const UpdateExportRequestSchema = z
  .object({
    filePassword: ImportExportFilePasswordSchema.and(
      z
        .any()
        .openapi({ description: 'The new password to use to encrypt the export zip archive.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateExportRequest', required: [] })
  .openapi('UpdateExportRequest')

const UpdateIntentRequestSchema = z
  .object({
    intentName: NameSchema.and(z.any().openapi({ description: 'The new name for the intent.' })),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The new description of the intent.' }),
    ).exactOptional(),
    parentIntentSignature: IntentSignatureSchema.and(
      z
        .any()
        .openapi({
          description:
            'The signature of the new built-in intent to use as the parent of this intent.',
        }),
    ).exactOptional(),
    sampleUtterances: SampleUtterancesListSchema.and(
      z.any().openapi({ description: 'New utterances used to invoke the intent.' }),
    ).exactOptional(),
    dialogCodeHook: DialogCodeHookSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new Lambda function to use between each turn of the conversation with the bot.',
        }),
    ).exactOptional(),
    fulfillmentCodeHook: FulfillmentCodeHookSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new Lambda function to call when all of the intents required slots are provided and the intent is ready for fulfillment.',
        }),
    ).exactOptional(),
    slotPriorities: SlotPrioritiesListSchema.and(
      z
        .any()
        .openapi({
          description: 'A new list of slots and their priorities that are contained by the intent.',
        }),
    ).exactOptional(),
    intentConfirmationSetting: IntentConfirmationSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'New prompts that Amazon Lex sends to the user to confirm the completion of an intent.',
        }),
    ).exactOptional(),
    intentClosingSetting: IntentClosingSettingSchema.and(
      z
        .any()
        .openapi({
          description: 'The new response that Amazon Lex sends the user when the intent is closed.',
        }),
    ).exactOptional(),
    inputContexts: InputContextsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A new list of contexts that must be active in order for Amazon Lex to consider the intent.',
        }),
    ).exactOptional(),
    outputContexts: OutputContextsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A new list of contexts that Amazon Lex activates when the intent is fulfilled.',
        }),
    ).exactOptional(),
    kendraConfiguration: KendraConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'New configuration settings for connecting to an Amazon Kendra index.',
        }),
    ).exactOptional(),
    initialResponseSetting: InitialResponseSettingSchema.and(
      z.any().openapi({ description: '<p/>' }),
    ).exactOptional(),
  })
  .openapi({ required: ['intentName'], title: 'UpdateIntentRequest' })
  .openapi('UpdateIntentRequest')

const UpdateResourcePolicyRequestSchema = z
  .object({
    policy: PolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A resource policy to add to the resource. The policy is a JSON structure that contains one or more statements that define the policy. The policy must follow the IAM syntax. For more information about the contents of a JSON policy document, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html"> IAM JSON policy reference </a>. </p> <p>If the policy isn\'t valid, Amazon Lex returns a validation exception.</p>',
        }),
    ),
  })
  .openapi({ required: ['policy'], title: 'UpdateResourcePolicyRequest' })
  .openapi('UpdateResourcePolicyRequest')

const UpdateSlotRequestSchema = z
  .object({
    slotName: NameSchema.and(z.any().openapi({ description: 'The new name for the slot.' })),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The new description for the slot.' }),
    ).exactOptional(),
    slotTypeId: BuiltInOrCustomSlotTypeIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier of the new slot type to associate with this slot. ',
        }),
    ).exactOptional(),
    valueElicitationSetting: SlotValueElicitationSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'A new set of prompts that Amazon Lex sends to the user to elicit a response the provides a value for the slot.',
        }),
    ),
    obfuscationSetting: ObfuscationSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'New settings that determine how slot values are formatted in Amazon CloudWatch logs. ',
        }),
    ).exactOptional(),
    multipleValuesSetting: MultipleValuesSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Determines whether the slot accepts multiple values in one response. Multiple value slots are only available in the en-US locale. If you set this value to <code>true</code> in any other locale, Amazon Lex throws a <code>ValidationException</code>.</p> <p>If the <code>multipleValuesSetting</code> is not set, the default value is <code>false</code>.</p>',
        }),
    ).exactOptional(),
    subSlotSetting: SubSlotSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifications for the constituent sub slots and the expression for the composite slot.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['slotName', 'valueElicitationSetting'], title: 'UpdateSlotRequest' })
  .openapi('UpdateSlotRequest')

const UpdateSlotTypeRequestSchema = z
  .object({
    slotTypeName: NameSchema.and(
      z.any().openapi({ description: 'The new name of the slot type.' }),
    ),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The new description of the slot type.' }),
    ).exactOptional(),
    slotTypeValues: SlotTypeValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A new list of values and their optional synonyms that define the values that the slot type can take.',
        }),
    ).exactOptional(),
    valueSelectionSetting: SlotValueSelectionSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'The strategy that Amazon Lex should use when deciding on a value from the list of slot type values.',
        }),
    ).exactOptional(),
    parentSlotTypeSignature: SlotTypeSignatureSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new built-in slot type that should be used as the parent of this slot type.',
        }),
    ).exactOptional(),
    externalSourceSetting: ExternalSourceSettingSchema.exactOptional(),
    compositeSlotTypeSetting: CompositeSlotTypeSettingSchema.and(
      z.any().openapi({ description: 'Specifications for a composite slot type.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['slotTypeName'], title: 'UpdateSlotTypeRequest' })
  .openapi('UpdateSlotTypeRequest')

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

export const putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTBatchcreateRoute =
  createRoute({
    method: 'put',
    path: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchcreate',
    description:
      "Create a batch of custom vocabulary items for a given bot locale's custom vocabulary.",
    operationId: 'BatchCreateCustomVocabularyItem',
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
        botId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'botId',
              in: 'path',
              required: true,
              description: 'The identifier of the bot associated with this custom vocabulary.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botVersion: z
          .string()
          .regex(/^(DRAFT|[0-9]+)$/)
          .min(1)
          .max(5)
          .openapi({
            param: {
              name: 'botVersion',
              in: 'path',
              required: true,
              description:
                'The identifier of the version of the bot associated with this custom vocabulary.',
              schema: { type: 'string', pattern: '^(DRAFT|[0-9]+)$', minLength: 1, maxLength: 5 },
            },
          }),
        localeId: z
          .string()
          .openapi({
            param: {
              name: 'localeId',
              in: 'path',
              required: true,
              description:
                'The identifier of the language and locale where this custom vocabulary is used. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html"> Supported Languages </a>.',
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                customVocabularyItemList: z
                  .array(NewCustomVocabularyItemSchema)
                  .min(1)
                  .max(10)
                  .openapi({
                    description:
                      'A list of new custom vocabulary items. Each entry must contain a phrase and can optionally contain a displayAs and/or a weight.',
                  }),
              })
              .openapi({ required: ['customVocabularyItemList'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: BatchCreateCustomVocabularyItemResponseSchema } },
      },
      480: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      481: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
      482: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      483: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      484: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const postBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTBatchdeleteRoute =
  createRoute({
    method: 'post',
    path: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchdelete',
    description:
      "Delete a batch of custom vocabulary items for a given bot locale's custom vocabulary.",
    operationId: 'BatchDeleteCustomVocabularyItem',
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
        botId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'botId',
              in: 'path',
              required: true,
              description: 'The identifier of the bot associated with this custom vocabulary.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botVersion: z
          .string()
          .regex(/^(DRAFT|[0-9]+)$/)
          .min(1)
          .max(5)
          .openapi({
            param: {
              name: 'botVersion',
              in: 'path',
              required: true,
              description:
                'The identifier of the version of the bot associated with this custom vocabulary.',
              schema: { type: 'string', pattern: '^(DRAFT|[0-9]+)$', minLength: 1, maxLength: 5 },
            },
          }),
        localeId: z
          .string()
          .openapi({
            param: {
              name: 'localeId',
              in: 'path',
              required: true,
              description:
                'The identifier of the language and locale where this custom vocabulary is used. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html"> Supported Languages </a>.',
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                customVocabularyItemList: z
                  .array(CustomVocabularyEntryIdSchema)
                  .min(1)
                  .max(10)
                  .openapi({
                    description:
                      'A list of custom vocabulary items requested to be deleted. Each entry must contain the unique custom vocabulary entry identifier.',
                  }),
              })
              .openapi({ required: ['customVocabularyItemList'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: BatchDeleteCustomVocabularyItemResponseSchema } },
      },
      480: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      481: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
      482: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      483: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      484: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTBatchupdateRoute =
  createRoute({
    method: 'put',
    path: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchupdate',
    description:
      "Update a batch of custom vocabulary items for a given bot locale's custom vocabulary.",
    operationId: 'BatchUpdateCustomVocabularyItem',
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
        botId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'botId',
              in: 'path',
              required: true,
              description: 'The identifier of the bot associated with this custom vocabulary',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botVersion: z
          .string()
          .regex(/^(DRAFT|[0-9]+)$/)
          .min(1)
          .max(5)
          .openapi({
            param: {
              name: 'botVersion',
              in: 'path',
              required: true,
              description:
                'The identifier of the version of the bot associated with this custom vocabulary.',
              schema: { type: 'string', pattern: '^(DRAFT|[0-9]+)$', minLength: 1, maxLength: 5 },
            },
          }),
        localeId: z
          .string()
          .openapi({
            param: {
              name: 'localeId',
              in: 'path',
              required: true,
              description:
                'The identifier of the language and locale where this custom vocabulary is used. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html"> Supported Languages </a>.',
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                customVocabularyItemList: z
                  .array(CustomVocabularyItemSchema)
                  .min(1)
                  .max(10)
                  .openapi({
                    description:
                      'A list of custom vocabulary items with updated fields. Each entry must contain a phrase and can optionally contain a displayAs and/or a weight.',
                  }),
              })
              .openapi({ required: ['customVocabularyItemList'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: BatchUpdateCustomVocabularyItemResponseSchema } },
      },
      480: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      481: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
      482: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      483: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      484: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexRoute = createRoute({
  method: 'get',
  path: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/',
  description: 'Describes the settings that a bot has for a specific locale. ',
  operationId: 'DescribeBotLocale',
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
      botId: z
        .string()
        .regex(/^[0-9a-zA-Z]+$/)
        .length(10)
        .openapi({
          param: {
            name: 'botId',
            in: 'path',
            required: true,
            description: 'The identifier of the bot associated with the locale.',
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
          },
        }),
      botVersion: z
        .string()
        .regex(/^(DRAFT|[0-9]+)$/)
        .min(1)
        .max(5)
        .openapi({
          param: {
            name: 'botVersion',
            in: 'path',
            required: true,
            description: 'The identifier of the version of the bot associated with the locale.',
            schema: { type: 'string', pattern: '^(DRAFT|[0-9]+)$', minLength: 1, maxLength: 5 },
          },
        }),
      localeId: z
        .string()
        .openapi({
          param: {
            name: 'localeId',
            in: 'path',
            required: true,
            description:
              'The unique identifier of the locale to describe. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>. ',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeBotLocaleResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexRoute = createRoute({
  method: 'put',
  path: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/',
  description: 'Updates the settings that a bot has for a specific locale.',
  operationId: 'UpdateBotLocale',
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
      botId: z
        .string()
        .regex(/^[0-9a-zA-Z]+$/)
        .length(10)
        .openapi({
          param: {
            name: 'botId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the bot that contains the locale.',
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
          },
        }),
      botVersion: z
        .string()
        .regex(/^DRAFT$/)
        .length(5)
        .openapi({
          param: {
            name: 'botVersion',
            in: 'path',
            required: true,
            description:
              'The version of the bot that contains the locale to be updated. The version can only be the <code>DRAFT</code> version.',
            schema: { type: 'string', pattern: '^DRAFT$', minLength: 5, maxLength: 5 },
          },
        }),
      localeId: z
        .string()
        .openapi({
          param: {
            name: 'localeId',
            in: 'path',
            required: true,
            description:
              'The identifier of the language and locale to update. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({ description: 'The new description of the locale.' }),
              nluIntentConfidenceThreshold: z
                .float64()
                .min(0)
                .max(1)
                .openapi({
                  description:
                    'The new confidence threshold where Amazon Lex inserts the <code>AMAZON.FallbackIntent</code> and <code>AMAZON.KendraSearchIntent</code> intents in the list of possible intents for an utterance.',
                }),
              voiceSettings: z
                .object({
                  voiceId: VoiceIdSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The identifier of the Amazon Polly voice to use.' }),
                  ).exactOptional(),
                  engine: VoiceEngineSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Indicates the type of Amazon Polly voice that Amazon Lex should use for voice interaction with the user. For more information, see the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_SynthesizeSpeech.html#polly-SynthesizeSpeech-request-Engine"> <code>engine</code> parameter of the <code>SynthesizeSpeech</code> operation</a> in the <i>Amazon Polly developer guide</i>.</p> <p>If you do not specify a value, the default is <code>standard</code>.</p>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Defines settings for using an Amazon Polly voice to communicate with a user.',
                  required: [],
                }),
            })
            .openapi({ required: ['nluIntentConfidenceThreshold'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateBotLocaleResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexRoute = createRoute({
  method: 'post',
  path: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/',
  description:
    'Builds a bot, its intents, and its slot types into a specific locale. A bot can be built into multiple locales. At runtime the locale is used to choose a specific build of the bot.',
  operationId: 'BuildBotLocale',
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
      botId: z
        .string()
        .regex(/^[0-9a-zA-Z]+$/)
        .length(10)
        .openapi({
          param: {
            name: 'botId',
            in: 'path',
            required: true,
            description:
              'The identifier of the bot to build. The identifier is returned in the response from the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateBot.html">CreateBot</a> operation.',
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
          },
        }),
      botVersion: z
        .string()
        .regex(/^DRAFT$/)
        .length(5)
        .openapi({
          param: {
            name: 'botVersion',
            in: 'path',
            required: true,
            description:
              'The version of the bot to build. This can only be the draft version of the bot.',
            schema: { type: 'string', pattern: '^DRAFT$', minLength: 5, maxLength: 5 },
          },
        }),
      localeId: z
        .string()
        .openapi({
          param: {
            name: 'localeId',
            in: 'path',
            required: true,
            description:
              'The identifier of the language and locale that the bot will be used in. The string must match one of the supported locales. All of the intents, slot types, and slots used in the bot must have the same locale. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: BuildBotLocaleResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexRoute = createRoute({
  method: 'delete',
  path: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/',
  description:
    '<p>Removes a locale from a bot.</p> <p>When you delete a locale, all intents, slots, and slot types defined for the locale are also deleted.</p>',
  operationId: 'DeleteBotLocale',
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
      botId: z
        .string()
        .regex(/^[0-9a-zA-Z]+$/)
        .length(10)
        .openapi({
          param: {
            name: 'botId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the bot that contains the locale.',
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
          },
        }),
      botVersion: z
        .string()
        .regex(/^DRAFT$/)
        .length(5)
        .openapi({
          param: {
            name: 'botVersion',
            in: 'path',
            required: true,
            description: 'The version of the bot that contains the locale. ',
            schema: { type: 'string', pattern: '^DRAFT$', minLength: 5, maxLength: 5 },
          },
        }),
      localeId: z
        .string()
        .openapi({
          param: {
            name: 'localeId',
            in: 'path',
            required: true,
            description:
              'The identifier of the language and locale that will be deleted. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteBotLocaleResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const putBotsIndexRoute = createRoute({
  method: 'put',
  path: '/bots/',
  description: 'Creates an Amazon Lex conversational bot. ',
  operationId: 'CreateBot',
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
              botName: z
                .string()
                .regex(/^([0-9a-zA-Z][_-]?)+$/)
                .min(1)
                .max(100)
                .openapi({
                  description:
                    'The name of the bot. The bot name must be unique in the account that creates the bot.',
                }),
              description: z
                .string()
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    'A description of the bot. It appears in lists to help you identify a particular bot.',
                }),
              roleArn: z
                .string()
                .regex(/^arn:aws:iam::[0-9]{12}:role\/.*$/)
                .min(32)
                .max(2048)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of an IAM role that has permission to access the bot.',
                }),
              dataPrivacy: z
                .object({
                  childDirected: ChildDirectedSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'For each Amazon Lex bot created with the Amazon Lex Model Building Service, you must specify whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to the Children\'s Online Privacy Protection Act (COPPA) by specifying <code>true</code> or <code>false</code> in the <code>childDirected</code> field. By specifying <code>true</code> in the <code>childDirected</code> field, you confirm that your use of Amazon Lex <b>is</b> related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. By specifying <code>false</code> in the <code>childDirected</code> field, you confirm that your use of Amazon Lex <b>is not</b> related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. You may not specify a default value for the <code>childDirected</code> field that does not accurately reflect whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. If your use of Amazon Lex relates to a website, program, or other application that is directed in whole or in part, to children under age 13, you must obtain any required verifiable parental consent under COPPA. For information regarding the use of Amazon Lex in connection with websites, programs, or other applications that are directed or targeted, in whole or in part, to children under age 13, see the <a href="https://aws.amazon.com/lex/faqs#data-security">Amazon Lex FAQ</a>.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'By default, data stored by Amazon Lex is encrypted. The <code>DataPrivacy</code> structure provides settings that determine how Amazon Lex handles special cases of securing the data for your bot. ',
                  required: [],
                }),
              idleSessionTTLInSeconds: z
                .int()
                .min(60)
                .max(86400)
                .openapi({
                  description:
                    "<p>The time, in seconds, that Amazon Lex should keep information about a user's conversation with the bot. </p> <p>A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Lex deletes any data provided before the timeout.</p> <p>You can specify between 60 (1 minute) and 86,400 (24 hours) seconds.</p>",
                }),
              botTags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 200)
                .exactOptional()
                .openapi({
                  description:
                    "A list of tags to add to the bot. You can only add tags when you create a bot. You can't use the <code>UpdateBot</code> operation to update tags. To update tags, use the <code>TagResource</code> operation.",
                }),
              testBotAliasTags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 200)
                .exactOptional()
                .openapi({
                  description:
                    "A list of tags to add to the test alias for a bot. You can only add tags when you create a bot. You can't use the <code>UpdateAlias</code> operation to update tags. To update tags on the test alias, use the <code>TagResource</code> operation.",
                }),
              botType: z
                .enum(['Bot', 'BotNetwork'])
                .exactOptional()
                .openapi({ description: 'The type of a bot to create.' }),
              botMembers: z
                .array(BotMemberSchema)
                .min(0)
                .max(10)
                .exactOptional()
                .openapi({ description: 'The list of bot members in a network to be created.' }),
            })
            .openapi({
              required: ['botName', 'roleArn', 'dataPrivacy', 'idleSessionTTLInSeconds'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: CreateBotResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postBotsIndexRoute = createRoute({
  method: 'post',
  path: '/bots/',
  description: 'Gets a list of available bots.',
  operationId: 'ListBots',
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
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              sortBy: z
                .object({
                  attribute: BotSortAttributeSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The attribute to use to sort the list of bots.' }),
                  ).exactOptional(),
                  order: SortOrderSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The order to sort the list. You can choose ascending or descending.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Specifies attributes for sorting a list of bots.',
                  required: [],
                }),
              filters: z
                .array(BotFilterSchema)
                .min(1)
                .max(2)
                .exactOptional()
                .openapi({
                  description:
                    'Provides the specification of a filter used to limit the bots in the response to only those that match the filter specification. You can only specify one filter and one string to filter on.',
                }),
              maxResults: z
                .int()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of bots to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned.',
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>If the response from the <code>ListBots</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. </p> <p>Use the returned token in the <code>nextToken</code> parameter of a <code>ListBots</code> request to return the next page of results. For a complete set of results, call the <code>ListBots</code> operation until the <code>nextToken</code> returned in the response is null.</p>',
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
      content: { 'application/json': { schema: ListBotsResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const putBotsBotIdBotaliasesIndexRoute = createRoute({
  method: 'put',
  path: '/bots/{botId}/botaliases/',
  description:
    '<p>Creates an alias for the specified version of a bot. Use an alias to enable you to change the version of a bot without updating applications that use the bot.</p> <p>For example, you can create an alias called "PROD" that your applications use to call the Amazon Lex bot. </p>',
  operationId: 'CreateBotAlias',
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
      botId: z
        .string()
        .regex(/^[0-9a-zA-Z]+$/)
        .length(10)
        .openapi({
          param: {
            name: 'botId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the bot that the alias applies to.',
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              botAliasName: z
                .string()
                .regex(/^([0-9a-zA-Z][_-]?)+$/)
                .min(1)
                .max(100)
                .openapi({
                  description: 'The alias to create. The name must be unique for the bot.',
                }),
              description: z
                .string()
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    'A description of the alias. Use this description to help identify the alias.',
                }),
              botVersion: z
                .string()
                .regex(/^[0-9]+$/)
                .min(1)
                .max(5)
                .exactOptional()
                .openapi({
                  description:
                    'The version of the bot that this alias points to. You can use the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_UpdateBotAlias.html">UpdateBotAlias</a> operation to change the bot version associated with the alias.',
                }),
              botAliasLocaleSettings: z
                .record(z.string(), BotAliasLocaleSettingsSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .exactOptional()
                .openapi({
                  description:
                    'Maps configuration information to a specific locale. You can use this parameter to specify a specific Lambda function to run different functions in different locales.',
                }),
              conversationLogSettings: z
                .object({
                  textLogSettings: TextLogSettingsListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon CloudWatch Logs settings for logging text and metadata.',
                      }),
                  ).exactOptional(),
                  audioLogSettings: AudioLogSettingsListSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The Amazon S3 settings for logging audio to an S3 bucket.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Configures conversation logging that saves audio, text, and metadata for the conversations with your users.',
                  required: [],
                }),
              sentimentAnalysisSettings: z
                .object({
                  detectSentiment: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Sets whether Amazon Lex uses Amazon Comprehend to detect the sentiment of user utterances.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.',
                  required: [],
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 200)
                .exactOptional()
                .openapi({
                  description:
                    "A list of tags to add to the bot alias. You can only add tags when you create an alias, you can't use the <code>UpdateBotAlias</code> operation to update the tags on a bot alias. To update tags, use the <code>TagResource</code> operation.",
                }),
            })
            .openapi({ required: ['botAliasName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: CreateBotAliasResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postBotsBotIdBotaliasesIndexRoute = createRoute({
  method: 'post',
  path: '/bots/{botId}/botaliases/',
  description: 'Gets a list of aliases for the specified bot.',
  operationId: 'ListBotAliases',
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
      botId: z
        .string()
        .regex(/^[0-9a-zA-Z]+$/)
        .length(10)
        .openapi({
          param: {
            name: 'botId',
            in: 'path',
            required: true,
            description: 'The identifier of the bot to list aliases for.',
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              maxResults: z
                .int()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of aliases to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.',
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If the response from the <code>ListBotAliases</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token in the <code>nextToken</code> parameter to return the next page of results.',
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
      content: { 'application/json': { schema: ListBotAliasesResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const putBotsBotIdBotversionsBotVersionBotlocalesIndexRoute = createRoute({
  method: 'put',
  path: '/bots/{botId}/botversions/{botVersion}/botlocales/',
  description:
    'Creates a locale in the bot. The locale contains the intents and slot types that the bot uses in conversations with users in the specified language and locale. You must add a locale to a bot before you can add intents and slot types to the bot.',
  operationId: 'CreateBotLocale',
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
      botId: z
        .string()
        .regex(/^[0-9a-zA-Z]+$/)
        .length(10)
        .openapi({
          param: {
            name: 'botId',
            in: 'path',
            required: true,
            description: 'The identifier of the bot to create the locale for.',
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
          },
        }),
      botVersion: z
        .string()
        .regex(/^DRAFT$/)
        .length(5)
        .openapi({
          param: {
            name: 'botVersion',
            in: 'path',
            required: true,
            description:
              'The version of the bot to create the locale for. This can only be the draft version of the bot.',
            schema: { type: 'string', pattern: '^DRAFT$', minLength: 5, maxLength: 5 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              localeId: z
                .string()
                .openapi({
                  description:
                    'The identifier of the language and locale that the bot will be used in. The string must match one of the supported locales. All of the intents, slot types, and slots used in the bot must have the same locale. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.',
                }),
              description: z
                .string()
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    'A description of the bot locale. Use this to help identify the bot locale in lists.',
                }),
              nluIntentConfidenceThreshold: z
                .float64()
                .min(0)
                .max(1)
                .openapi({
                  description:
                    '<p>Determines the threshold where Amazon Lex will insert the <code>AMAZON.FallbackIntent</code>, <code>AMAZON.KendraSearchIntent</code>, or both when returning alternative intents. <code>AMAZON.FallbackIntent</code> and <code>AMAZON.KendraSearchIntent</code> are only inserted if they are configured for the bot.</p> <p>For example, suppose a bot is configured with the confidence threshold of 0.80 and the <code>AMAZON.FallbackIntent</code>. Amazon Lex returns three alternative intents with the following confidence scores: IntentA (0.70), IntentB (0.60), IntentC (0.50). The response from the <code>RecognizeText</code> operation would be:</p> <ul> <li> <p>AMAZON.FallbackIntent</p> </li> <li> <p>IntentA</p> </li> <li> <p>IntentB</p> </li> <li> <p>IntentC</p> </li> </ul>',
                }),
              voiceSettings: z
                .object({
                  voiceId: VoiceIdSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The identifier of the Amazon Polly voice to use.' }),
                  ).exactOptional(),
                  engine: VoiceEngineSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Indicates the type of Amazon Polly voice that Amazon Lex should use for voice interaction with the user. For more information, see the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_SynthesizeSpeech.html#polly-SynthesizeSpeech-request-Engine"> <code>engine</code> parameter of the <code>SynthesizeSpeech</code> operation</a> in the <i>Amazon Polly developer guide</i>.</p> <p>If you do not specify a value, the default is <code>standard</code>.</p>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Defines settings for using an Amazon Polly voice to communicate with a user.',
                  required: [],
                }),
            })
            .openapi({ required: ['localeId', 'nluIntentConfidenceThreshold'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: CreateBotLocaleResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postBotsBotIdBotversionsBotVersionBotlocalesIndexRoute = createRoute({
  method: 'post',
  path: '/bots/{botId}/botversions/{botVersion}/botlocales/',
  description: 'Gets a list of locales for the specified bot.',
  operationId: 'ListBotLocales',
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
      botId: z
        .string()
        .regex(/^[0-9a-zA-Z]+$/)
        .length(10)
        .openapi({
          param: {
            name: 'botId',
            in: 'path',
            required: true,
            description: 'The identifier of the bot to list locales for.',
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
          },
        }),
      botVersion: z
        .string()
        .regex(/^(DRAFT|[0-9]+)$/)
        .min(1)
        .max(5)
        .openapi({
          param: {
            name: 'botVersion',
            in: 'path',
            required: true,
            description: 'The version of the bot to list locales for.',
            schema: { type: 'string', pattern: '^(DRAFT|[0-9]+)$', minLength: 1, maxLength: 5 },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              sortBy: z
                .object({
                  attribute: BotLocaleSortAttributeSchema.and(
                    z.any().openapi({ description: 'The bot locale attribute to sort by.' }),
                  ).exactOptional(),
                  order: SortOrderSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies whether to sort the bot locales in ascending or descending order.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Specifies attributes for sorting a list of bot locales.',
                  required: [],
                }),
              filters: z
                .array(BotLocaleFilterSchema)
                .length(1)
                .exactOptional()
                .openapi({
                  description:
                    'Provides the specification for a filter used to limit the response to only those locales that match the filter specification. You can only specify one filter and one value to filter on.',
                }),
              maxResults: z
                .int()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of aliases to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.',
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If the response from the <code>ListBotLocales</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token as the <code>nextToken</code> parameter to return the next page of results. ',
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
      content: { 'application/json': { schema: ListBotLocalesResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const putBotsBotIdBotversionsIndexRoute = createRoute({
  method: 'put',
  path: '/bots/{botId}/botversions/',
  description:
    "<p>Creates a new version of the bot based on the <code>DRAFT</code> version. If the <code>DRAFT</code> version of this resource hasn't changed since you created the last version, Amazon Lex doesn't create a new version, it returns the last created version.</p> <p>When you create the first version of a bot, Amazon Lex sets the version to 1. Subsequent versions increment by 1.</p>",
  operationId: 'CreateBotVersion',
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
      botId: z
        .string()
        .regex(/^[0-9a-zA-Z]+$/)
        .length(10)
        .openapi({
          param: {
            name: 'botId',
            in: 'path',
            required: true,
            description: 'The identifier of the bot to create the version for.',
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    'A description of the version. Use the description to help identify the version in lists.',
                }),
              botVersionLocaleSpecification: z
                .record(z.string(), BotVersionLocaleDetailsSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .openapi({
                  description:
                    'Specifies the locales that Amazon Lex adds to this version. You can choose the <code>Draft</code> version or any other previously published version for each locale. When you specify a source version, the locale data is copied from the source version to the new version.',
                }),
            })
            .openapi({ required: ['botVersionLocaleSpecification'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: CreateBotVersionResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postBotsBotIdBotversionsIndexRoute = createRoute({
  method: 'post',
  path: '/bots/{botId}/botversions/',
  description:
    '<p>Gets information about all of the versions of a bot.</p> <p>The <code>ListBotVersions</code> operation returns a summary of each version of a bot. For example, if a bot has three numbered versions, the <code>ListBotVersions</code> operation returns for summaries, one for each numbered version and one for the <code>DRAFT</code> version.</p> <p>The <code>ListBotVersions</code> operation always returns at least one version, the <code>DRAFT</code> version.</p>',
  operationId: 'ListBotVersions',
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
      botId: z
        .string()
        .regex(/^[0-9a-zA-Z]+$/)
        .length(10)
        .openapi({
          param: {
            name: 'botId',
            in: 'path',
            required: true,
            description: 'The identifier of the bot to list versions for.',
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              sortBy: z
                .object({
                  attribute: BotVersionSortAttributeSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The attribute to use to sort the list of versions.',
                      }),
                  ).exactOptional(),
                  order: SortOrderSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The order to sort the list. You can specify ascending or descending order.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Specifies attributes for sorting a list of bot versions.',
                  required: [],
                }),
              maxResults: z
                .int()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of versions to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.',
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If the response to the <code>ListBotVersion</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token in the <code>nextToken</code> parameter to return the next page of results.',
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
      content: { 'application/json': { schema: ListBotVersionsResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const putExportsIndexRoute = createRoute({
  method: 'put',
  path: '/exports/',
  description:
    '<p>Creates a zip archive containing the contents of a bot or a bot locale. The archive contains a directory structure that contains JSON files that define the bot.</p> <p>You can create an archive that contains the complete definition of a bot, or you can specify that the archive contain only the definition of a single bot locale.</p> <p>For more information about exporting bots, and about the structure of the export archive, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/importing-exporting.html"> Importing and exporting bots </a> </p>',
  operationId: 'CreateExport',
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
              resourceSpecification: z
                .object({
                  botExportSpecification: BotExportSpecificationSchema.and(
                    z.any().openapi({ description: 'Parameters for exporting a bot.' }),
                  ).exactOptional(),
                  botLocaleExportSpecification: BotLocaleExportSpecificationSchema.and(
                    z.any().openapi({ description: 'Parameters for exporting a bot locale.' }),
                  ).exactOptional(),
                  customVocabularyExportSpecification:
                    CustomVocabularyExportSpecificationSchema.and(
                      z
                        .any()
                        .openapi({
                          description: 'The parameters required to export a custom vocabulary.',
                        }),
                    ).exactOptional(),
                })
                .openapi({
                  description:
                    'Provides information about the bot or bot locale that you want to export. You can specify the <code>botExportSpecification</code> or the <code>botLocaleExportSpecification</code>, but not both.',
                  required: [],
                }),
              fileFormat: z
                .enum(['LexJson', 'TSV'])
                .openapi({
                  description: 'The file format of the bot or bot locale definition files.',
                }),
              filePassword: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'An password to use to encrypt the exported archive. Using a password is optional, but you should encrypt the archive to protect the data in transit between Amazon Lex and your local computer.',
                }),
            })
            .openapi({ required: ['resourceSpecification', 'fileFormat'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: CreateExportResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postExportsIndexRoute = createRoute({
  method: 'post',
  path: '/exports/',
  description:
    'Lists the exports for a bot, bot locale, or custom vocabulary. Exports are kept in the list for 7 days.',
  operationId: 'ListExports',
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
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              botId: z
                .string()
                .regex(/^[0-9a-zA-Z]+$/)
                .length(10)
                .exactOptional()
                .openapi({
                  description: 'The unique identifier that Amazon Lex assigned to the bot.',
                }),
              botVersion: z
                .string()
                .regex(/^(DRAFT|[0-9]+)$/)
                .min(1)
                .max(5)
                .exactOptional()
                .openapi({ description: 'The version of the bot to list exports for. ' }),
              sortBy: z
                .object({
                  attribute: ExportSortAttributeSchema.and(
                    z.any().openapi({ description: 'The export field to use for sorting.' }),
                  ).exactOptional(),
                  order: SortOrderSchema.and(
                    z.any().openapi({ description: 'The order to sort the list.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Provides information about sorting a list of exports.',
                  required: [],
                }),
              filters: z
                .array(ExportFilterSchema)
                .length(1)
                .exactOptional()
                .openapi({
                  description:
                    'Provides the specification of a filter used to limit the exports in the response to only those that match the filter specification. You can only specify one filter and one string to filter on.',
                }),
              maxResults: z
                .int()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of exports to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.',
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>If the response from the <code>ListExports</code> operation contains more results that specified in the <code>maxResults</code> parameter, a token is returned in the response. </p> <p>Use the returned token in the <code>nextToken</code> parameter of a <code>ListExports</code> request to return the next page of results. For a complete set of results, call the <code>ListExports</code> operation until the <code>nextToken</code> returned in the response is null.</p>',
                }),
              localeId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Specifies the resources that should be exported. If you don't specify a resource type in the <code>filters</code> parameter, both bot locales and custom vocabularies are exported.",
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
      content: { 'application/json': { schema: ListExportsResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIndexRoute = createRoute({
  method: 'put',
  path: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/',
  description:
    '<p>Creates an intent.</p> <p>To define the interaction between the user and your bot, you define one or more intents. For example, for a pizza ordering bot you would create an <code>OrderPizza</code> intent.</p> <p>When you create an intent, you must provide a name. You can optionally provide the following:</p> <ul> <li> <p>Sample utterances. For example, "I want to order a pizza" and "Can I order a pizza." You can\'t provide utterances for built-in intents.</p> </li> <li> <p>Information to be gathered. You specify slots for the information that you bot requests from the user. You can specify standard slot types, such as date and time, or custom slot types for your application.</p> </li> <li> <p>How the intent is fulfilled. You can provide a Lambda function or configure the intent to return the intent information to your client application. If you use a Lambda function, Amazon Lex invokes the function when all of the intent information is available.</p> </li> <li> <p>A confirmation prompt to send to the user to confirm an intent. For example, "Shall I order your pizza?"</p> </li> <li> <p>A conclusion statement to send to the user after the intent is fulfilled. For example, "I ordered your pizza."</p> </li> <li> <p>A follow-up prompt that asks the user for additional activity. For example, "Do you want a drink with your pizza?"</p> </li> </ul>',
  operationId: 'CreateIntent',
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
      botId: z
        .string()
        .regex(/^[0-9a-zA-Z]+$/)
        .length(10)
        .openapi({
          param: {
            name: 'botId',
            in: 'path',
            required: true,
            description: 'The identifier of the bot associated with this intent.',
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
          },
        }),
      botVersion: z
        .string()
        .regex(/^DRAFT$/)
        .length(5)
        .openapi({
          param: {
            name: 'botVersion',
            in: 'path',
            required: true,
            description: 'The identifier of the version of the bot associated with this intent.',
            schema: { type: 'string', pattern: '^DRAFT$', minLength: 5, maxLength: 5 },
          },
        }),
      localeId: z
        .string()
        .openapi({
          param: {
            name: 'localeId',
            in: 'path',
            required: true,
            description:
              'The identifier of the language and locale where this intent is used. All of the bots, slot types, and slots used by the intent must have the same locale. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              intentName: z
                .string()
                .regex(/^([0-9a-zA-Z][_-]?)+$/)
                .min(1)
                .max(100)
                .openapi({
                  description:
                    'The name of the intent. Intent names must be unique in the locale that contains the intent and cannot match the name of any built-in intent.',
                }),
              description: z
                .string()
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    'A description of the intent. Use the description to help identify the intent in lists.',
                }),
              parentIntentSignature: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A unique identifier for the built-in intent to base this intent on.',
                }),
              sampleUtterances: z
                .array(SampleUtteranceSchema)
                .exactOptional()
                .openapi({
                  description:
                    '<p>An array of strings that a user might say to signal the intent. For example, "I want a pizza", or "I want a {PizzaSize} pizza". </p> <p>In an utterance, slot names are enclosed in curly braces ("{", "}") to indicate where they should be displayed in the utterance shown to the user.. </p>',
                }),
              dialogCodeHook: z
                .object({
                  enabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Enables the dialog code hook so that it processes user requests.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Settings that determine the Lambda function that Amazon Lex uses for processing user responses.',
                  required: [],
                }),
              fulfillmentCodeHook: z
                .object({
                  enabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Indicates whether a Lambda function should be invoked to fulfill a specific intent.',
                      }),
                  ).exactOptional(),
                  postFulfillmentStatusSpecification: PostFulfillmentStatusSpecificationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Provides settings for messages sent to the user for after the Lambda fulfillment function completes. Post-fulfillment messages can be sent for both streaming and non-streaming conversations.',
                      }),
                  ).exactOptional(),
                  fulfillmentUpdatesSpecification: FulfillmentUpdatesSpecificationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Provides settings for update messages sent to the user for long-running Lambda fulfillment functions. Fulfillment updates can be used only with streaming conversations.',
                      }),
                  ).exactOptional(),
                  active: BoxedBooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "Determines whether the fulfillment code hook is used. When <code>active</code> is false, the code hook doesn't run.",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Determines if a Lambda function should be invoked for a specific intent.',
                  required: [],
                }),
              intentConfirmationSetting: z
                .object({
                  promptSpecification: PromptSpecificationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Prompts the user to confirm the intent. This question should have a yes or no answer.</p> <p>Amazon Lex uses this prompt to ensure that the user acknowledges that the intent is ready for fulfillment. For example, with the <code>OrderPizza</code> intent, you might want to confirm that the order is correct before placing it. For other intents, such as intents that simply respond to user questions, you might not need to ask the user for confirmation before providing the information. </p>',
                      }),
                  ).exactOptional(),
                  declinationResponse: ResponseSpecificationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'When the user answers "no" to the question defined in <code>promptSpecification</code>, Amazon Lex responds with this response to acknowledge that the intent was canceled. ',
                      }),
                  ).exactOptional(),
                  active: BoxedBooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "Specifies whether the intent's confirmation is sent to the user. When this field is false, confirmation and declination responses aren't sent. If the <code>active</code> field isn't specified, the default is true.",
                      }),
                  ).exactOptional(),
                  confirmationResponse: ResponseSpecificationSchema.exactOptional(),
                  confirmationNextStep: DialogStateSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the next step that the bot executes when the customer confirms the intent.',
                      }),
                  ).exactOptional(),
                  confirmationConditional: ConditionalSpecificationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A list of conditional branches to evaluate after the intent is closed.',
                      }),
                  ).exactOptional(),
                  declinationNextStep: DialogStateSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the next step that the bot executes when the customer declines the intent.',
                      }),
                  ).exactOptional(),
                  declinationConditional: ConditionalSpecificationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A list of conditional branches to evaluate after the intent is declined.',
                      }),
                  ).exactOptional(),
                  failureResponse: ResponseSpecificationSchema.exactOptional(),
                  failureNextStep: DialogStateSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The next step to take in the conversation if the confirmation step fails.',
                      }),
                  ).exactOptional(),
                  failureConditional: ConditionalSpecificationSchema.exactOptional(),
                  codeHook: DialogCodeHookInvocationSettingSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The <code>DialogCodeHookInvocationSetting</code> object associated with intent's confirmation step. The dialog code hook is triggered based on these invocation settings when the confirmation next step or declination next step or failure next step is <code>InvokeDialogCodeHook</code>. ",
                      }),
                  ).exactOptional(),
                  elicitationCodeHook: ElicitationCodeHookInvocationSettingSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The <code>DialogCodeHookInvocationSetting</code> used when the code hook is invoked during confirmation prompt retries.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Provides a prompt for making sure that the user is ready for the intent to be fulfilled.',
                  required: [],
                }),
              intentClosingSetting: z
                .object({
                  closingResponse: ResponseSpecificationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The response that Amazon Lex sends to the user when the intent is complete.',
                      }),
                  ).exactOptional(),
                  active: BoxedBooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "Specifies whether an intent's closing response is used. When this field is false, the closing response isn't sent to the user. If the <code>active</code> field isn't specified, the default is true.",
                      }),
                  ).exactOptional(),
                  nextStep: DialogStateSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "Specifies the next step that the bot executes after playing the intent's closing response.",
                      }),
                  ).exactOptional(),
                  conditional: ConditionalSpecificationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "A list of conditional branches associated with the intent's closing response. These branches are executed when the <code>nextStep</code> attribute is set to <code>EvalutateConditional</code>.",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.',
                  required: [],
                }),
              inputContexts: z
                .array(InputContextSchema)
                .min(0)
                .max(5)
                .exactOptional()
                .openapi({
                  description:
                    '<p>A list of contexts that must be active for this intent to be considered by Amazon Lex.</p> <p>When an intent has an input context list, Amazon Lex only considers using the intent in an interaction with the user when the specified contexts are included in the active context list for the session. If the contexts are not active, then Amazon Lex will not use the intent.</p> <p>A context can be automatically activated using the <code>outputContexts</code> property or it can be set at runtime.</p> <p> For example, if there are two intents with different input contexts that respond to the same utterances, only the intent with the active context will respond.</p> <p>An intent may have up to 5 input contexts. If an intent has multiple input contexts, all of the contexts must be active to consider the intent.</p>',
                }),
              outputContexts: z
                .array(OutputContextSchema)
                .min(0)
                .max(10)
                .exactOptional()
                .openapi({
                  description:
                    '<p>A lists of contexts that the intent activates when it is fulfilled.</p> <p>You can use an output context to indicate the intents that Amazon Lex should consider for the next turn of the conversation with a customer. </p> <p>When you use the <code>outputContextsList</code> property, all of the contexts specified in the list are activated when the intent is fulfilled. You can set up to 10 output contexts. You can also set the number of conversation turns that the context should be active, or the length of time that the context should be active.</p>',
                }),
              kendraConfiguration: z
                .object({
                  kendraIndex: KendraIndexArnSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon Resource Name (ARN) of the Amazon Kendra index that you want the AMAZON.KendraSearchIntent intent to search. The index must be in the same account and Region as the Amazon Lex bot.',
                      }),
                  ).exactOptional(),
                  queryFilterStringEnabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Determines whether the AMAZON.KendraSearchIntent intent uses a custom query string to query the Amazon Kendra index.',
                      }),
                  ).exactOptional(),
                  queryFilterString: QueryFilterStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A query filter that Amazon Lex sends to Amazon Kendra to filter the response from a query. The filter is in the format defined by Amazon Kendra. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/filtering.html">Filtering queries</a>.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    "Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance.",
                  required: [],
                }),
              initialResponseSetting: z
                .object({
                  initialResponse: ResponseSpecificationSchema.exactOptional(),
                  nextStep: DialogStateSchema.and(
                    z.any().openapi({ description: 'The next step in the conversation.' }),
                  ).exactOptional(),
                  conditional: ConditionalSpecificationSchema.exactOptional(),
                  codeHook: DialogCodeHookInvocationSettingSchema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Configuration setting for a response sent to the user before Amazon Lex starts eliciting slots.',
                  required: [],
                }),
            })
            .openapi({ required: ['intentName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateIntentResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIndexRoute = createRoute({
  method: 'post',
  path: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/',
  description: 'Get a list of intents that meet the specified criteria.',
  operationId: 'ListIntents',
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
      botId: z
        .string()
        .regex(/^[0-9a-zA-Z]+$/)
        .length(10)
        .openapi({
          param: {
            name: 'botId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the bot that contains the intent.',
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
          },
        }),
      botVersion: z
        .string()
        .regex(/^(DRAFT|[0-9]+)$/)
        .min(1)
        .max(5)
        .openapi({
          param: {
            name: 'botVersion',
            in: 'path',
            required: true,
            description: 'The version of the bot that contains the intent.',
            schema: { type: 'string', pattern: '^(DRAFT|[0-9]+)$', minLength: 1, maxLength: 5 },
          },
        }),
      localeId: z
        .string()
        .openapi({
          param: {
            name: 'localeId',
            in: 'path',
            required: true,
            description:
              'The identifier of the language and locale of the intents to list. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              sortBy: z
                .object({
                  attribute: IntentSortAttributeSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The attribute to use to sort the list of intents.',
                      }),
                  ).exactOptional(),
                  order: SortOrderSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The order to sort the list. You can choose ascending or descending.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Specifies attributes for sorting a list of intents.',
                  required: [],
                }),
              filters: z
                .array(IntentFilterSchema)
                .length(1)
                .exactOptional()
                .openapi({
                  description:
                    'Provides the specification of a filter used to limit the intents in the response to only those that match the filter specification. You can only specify one filter and only one string to filter on.',
                }),
              maxResults: z
                .int()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of intents to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.',
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>If the response from the <code>ListIntents</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response.</p> <p>Use the returned token in the <code>nextToken</code> parameter of a <code>ListIntents</code> request to return the next page of results. For a complete set of results, call the <code>ListIntents</code> operation until the <code>nextToken</code> returned in the response is null.</p>',
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
      content: { 'application/json': { schema: ListIntentsResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getPolicyResourceArnIndexRoute = createRoute({
  method: 'get',
  path: '/policy/{resourceArn}/',
  description: 'Gets the resource policy and policy revision for a bot or bot alias.',
  operationId: 'DescribeResourcePolicy',
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
      resourceArn: z
        .string()
        .min(1)
        .max(1011)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to.',
            schema: { type: 'string', minLength: 1, maxLength: 1011 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeResourcePolicyResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const putPolicyResourceArnIndexRoute = createRoute({
  method: 'put',
  path: '/policy/{resourceArn}/',
  description:
    "Replaces the existing resource policy for a bot or bot alias with a new one. If the policy doesn't exist, Amazon Lex returns an exception.",
  operationId: 'UpdateResourcePolicy',
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
      resourceArn: z
        .string()
        .min(1)
        .max(1011)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to.',
            schema: { type: 'string', minLength: 1, maxLength: 1011 },
          },
        }),
    }),
    query: z.object({
      expectedRevisionId: z
        .string()
        .regex(/^[0-9]+$/)
        .min(1)
        .max(5)
        .exactOptional()
        .openapi({
          param: {
            name: 'expectedRevisionId',
            in: 'query',
            required: false,
            description:
              "<p>The identifier of the revision of the policy to update. If this revision ID doesn't match the current revision ID, Amazon Lex throws an exception.</p> <p>If you don't specify a revision, Amazon Lex overwrites the contents of the policy with the new values.</p>",
            schema: { type: 'string', pattern: '^[0-9]+$', minLength: 1, maxLength: 5 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              policy: z
                .string()
                .min(2)
                .openapi({
                  description:
                    '<p>A resource policy to add to the resource. The policy is a JSON structure that contains one or more statements that define the policy. The policy must follow the IAM syntax. For more information about the contents of a JSON policy document, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html"> IAM JSON policy reference </a>. </p> <p>If the policy isn\'t valid, Amazon Lex returns a validation exception.</p>',
                }),
            })
            .openapi({ required: ['policy'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateResourcePolicyResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postPolicyResourceArnIndexRoute = createRoute({
  method: 'post',
  path: '/policy/{resourceArn}/',
  description: 'Creates a new resource policy with the specified policy statements.',
  operationId: 'CreateResourcePolicy',
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
      resourceArn: z
        .string()
        .min(1)
        .max(1011)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to.',
            schema: { type: 'string', minLength: 1, maxLength: 1011 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              policy: z
                .string()
                .min(2)
                .openapi({
                  description:
                    '<p>A resource policy to add to the resource. The policy is a JSON structure that contains one or more statements that define the policy. The policy must follow the IAM syntax. For more information about the contents of a JSON policy document, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html"> IAM JSON policy reference </a>. </p> <p>If the policy isn\'t valid, Amazon Lex returns a validation exception.</p>',
                }),
            })
            .openapi({ required: ['policy'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateResourcePolicyResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deletePolicyResourceArnIndexRoute = createRoute({
  method: 'delete',
  path: '/policy/{resourceArn}/',
  description:
    "Removes an existing policy from a bot or bot alias. If the resource doesn't have a policy attached, Amazon Lex returns an exception.",
  operationId: 'DeleteResourcePolicy',
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
      resourceArn: z
        .string()
        .min(1)
        .max(1011)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the bot or bot alias that has the resource policy attached.',
            schema: { type: 'string', minLength: 1, maxLength: 1011 },
          },
        }),
    }),
    query: z.object({
      expectedRevisionId: z
        .string()
        .regex(/^[0-9]+$/)
        .min(1)
        .max(5)
        .exactOptional()
        .openapi({
          param: {
            name: 'expectedRevisionId',
            in: 'query',
            required: false,
            description:
              "<p>The identifier of the revision to edit. If this ID doesn't match the current revision number, Amazon Lex returns an exception</p> <p>If you don't specify a revision ID, Amazon Lex will delete the current policy.</p>",
            schema: { type: 'string', pattern: '^[0-9]+$', minLength: 1, maxLength: 5 },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteResourcePolicyResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postPolicyResourceArnStatementsIndexRoute = createRoute({
  method: 'post',
  path: '/policy/{resourceArn}/statements/',
  description:
    "<p>Adds a new resource policy statement to a bot or bot alias. If a resource policy exists, the statement is added to the current resource policy. If a policy doesn't exist, a new policy is created.</p> <p>You can't create a resource policy statement that allows cross-account access.</p>",
  operationId: 'CreateResourcePolicyStatement',
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
      resourceArn: z
        .string()
        .min(1)
        .max(1011)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to.',
            schema: { type: 'string', minLength: 1, maxLength: 1011 },
          },
        }),
    }),
    query: z.object({
      expectedRevisionId: z
        .string()
        .regex(/^[0-9]+$/)
        .min(1)
        .max(5)
        .exactOptional()
        .openapi({
          param: {
            name: 'expectedRevisionId',
            in: 'query',
            required: false,
            description:
              "<p>The identifier of the revision of the policy to edit. If this revision ID doesn't match the current revision ID, Amazon Lex throws an exception.</p> <p>If you don't specify a revision, Amazon Lex overwrites the contents of the policy with the new values.</p>",
            schema: { type: 'string', pattern: '^[0-9]+$', minLength: 1, maxLength: 5 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              statementId: z
                .string()
                .regex(/^([0-9a-zA-Z][_-]?)+$/)
                .min(1)
                .max(100)
                .openapi({
                  description:
                    'The name of the statement. The ID is the same as the <code>Sid</code> IAM property. The statement name must be unique within the policy. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html">IAM JSON policy elements: Sid</a>. ',
                }),
              effect: z
                .enum(['Allow', 'Deny'])
                .openapi({
                  description:
                    'Determines whether the statement allows or denies access to the resource.',
                }),
              principal: z
                .array(PrincipalSchema)
                .openapi({
                  description:
                    'An IAM principal, such as an IAM users, IAM roles, or AWS services that is allowed or denied access to a resource. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html">AWS JSON policy elements: Principal</a>.',
                }),
              action: z
                .array(OperationSchema)
                .openapi({
                  description:
                    'The Amazon Lex action that this policy either allows or denies. The action must apply to the resource type of the specified ARN. For more information, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlexv2.html"> Actions, resources, and condition keys for Amazon Lex V2</a>.',
                }),
              condition: z
                .record(z.string(), ConditionKeyValueMapSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 10)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies a condition when the policy is in effect. If the principal of the policy is a service principal, you must provide two condition blocks, one with a SourceAccount global condition key and one with a SourceArn global condition key.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html">IAM JSON policy elements: Condition </a>.</p>',
                }),
            })
            .openapi({ required: ['statementId', 'effect', 'principal', 'action'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateResourcePolicyStatementResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsIndexRoute =
  createRoute({
    method: 'put',
    path: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/',
    description:
      'Creates a slot in an intent. A slot is a variable needed to fulfill an intent. For example, an <code>OrderPizza</code> intent might need slots for size, crust, and number of pizzas. For each slot, you define one or more utterances that Amazon Lex uses to elicit a response from the user. ',
    operationId: 'CreateSlot',
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
        botId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'botId',
              in: 'path',
              required: true,
              description: 'The identifier of the bot associated with the slot.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botVersion: z
          .string()
          .regex(/^DRAFT$/)
          .length(5)
          .openapi({
            param: {
              name: 'botVersion',
              in: 'path',
              required: true,
              description: 'The version of the bot associated with the slot.',
              schema: { type: 'string', pattern: '^DRAFT$', minLength: 5, maxLength: 5 },
            },
          }),
        localeId: z
          .string()
          .openapi({
            param: {
              name: 'localeId',
              in: 'path',
              required: true,
              description:
                'The identifier of the language and locale that the slot will be used in. The string must match one of the supported locales. All of the bots, intents, slot types used by the slot must have the same locale. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.',
              schema: { type: 'string' },
            },
          }),
        intentId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'intentId',
              in: 'path',
              required: true,
              description: 'The identifier of the intent that contains the slot.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                slotName: z
                  .string()
                  .regex(/^([0-9a-zA-Z][_-]?)+$/)
                  .min(1)
                  .max(100)
                  .openapi({
                    description:
                      'The name of the slot. Slot names must be unique within the bot that contains the slot.',
                  }),
                description: z
                  .string()
                  .min(0)
                  .max(200)
                  .exactOptional()
                  .openapi({
                    description:
                      'A description of the slot. Use this to help identify the slot in lists.',
                  }),
                slotTypeId: z
                  .string()
                  .regex(/^((AMAZON\.)[a-zA-Z_]+?|[0-9a-zA-Z]+)$/)
                  .min(1)
                  .max(25)
                  .exactOptional()
                  .openapi({
                    description:
                      'The unique identifier for the slot type associated with this slot. The slot type determines the values that can be entered into the slot.',
                  }),
                valueElicitationSetting: z
                  .object({
                    defaultValueSpecification: SlotDefaultValueSpecificationSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            "A list of default values for a slot. Default values are used when Amazon Lex hasn't determined a value for a slot. You can specify default values from context variables, session attributes, and defined values.",
                        }),
                    ).exactOptional(),
                    slotConstraint: SlotConstraintSchema.and(
                      z
                        .any()
                        .openapi({
                          description: 'Specifies whether the slot is required or optional.',
                        }),
                    ).exactOptional(),
                    promptSpecification: PromptSpecificationSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The prompt that Amazon Lex uses to elicit the slot value from the user.',
                        }),
                    ).exactOptional(),
                    sampleUtterances: SampleUtterancesListSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'If you know a specific pattern that users might respond to an Amazon Lex request for a slot value, you can provide those utterances to improve accuracy. This is optional. In most cases, Amazon Lex is capable of understanding user utterances.',
                        }),
                    ).exactOptional(),
                    waitAndContinueSpecification:
                      WaitAndContinueSpecificationSchema.exactOptional(),
                    slotCaptureSetting: SlotCaptureSettingSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Specifies the settings that Amazon Lex uses when a slot value is successfully entered by a user.',
                        }),
                    ).exactOptional(),
                  })
                  .openapi({
                    description:
                      'Specifies the elicitation setting details for constituent sub slots of a composite slot.',
                    required: [],
                  }),
                obfuscationSetting: z
                  .object({
                    obfuscationSettingType: ObfuscationSettingTypeSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Value that determines whether Amazon Lex obscures slot values in conversation logs. The default is to obscure the values.',
                        }),
                    ).exactOptional(),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      'Determines whether Amazon Lex obscures slot values in conversation logs. ',
                    required: [],
                  }),
                multipleValuesSetting: z
                  .object({
                    allowMultipleValues: BooleanSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            '<p>Indicates whether a slot can return multiple values. When <code>true</code>, the slot may return more than one value in a response. When <code>false</code>, the slot returns only a single value.</p> <p>Multi-value slots are only available in the en-US locale. If you set this value to <code>true</code> in any other locale, Amazon Lex throws a <code>ValidationException</code>.</p> <p>If the <code>allowMutlipleValues</code> is not set, the default value is <code>false</code>.</p>',
                        }),
                    ).exactOptional(),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'Indicates whether a slot can return multiple values.',
                    required: [],
                  }),
                subSlotSetting: z
                  .object({
                    expression: SubSlotExpressionSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The expression text for defining the constituent sub slots in the composite slot using logical AND and OR operators.',
                        }),
                    ).exactOptional(),
                    slotSpecifications: SubSlotSpecificationMapSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Specifications for the constituent sub slots of a composite slot.',
                        }),
                    ).exactOptional(),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      'Specifications for the constituent sub slots and the expression for the composite slot.',
                    required: [],
                  }),
              })
              .openapi({ required: ['slotName', 'valueElicitationSetting'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CreateSlotResponseSchema } },
      },
      480: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      481: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
      482: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      483: {
        description: 'PreconditionFailedException',
        content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
      },
      484: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      485: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const postBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsIndexRoute =
  createRoute({
    method: 'post',
    path: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/',
    description: 'Gets a list of slots that match the specified criteria.',
    operationId: 'ListSlots',
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
        botId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'botId',
              in: 'path',
              required: true,
              description: 'The identifier of the bot that contains the slot.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botVersion: z
          .string()
          .regex(/^(DRAFT|[0-9]+)$/)
          .min(1)
          .max(5)
          .openapi({
            param: {
              name: 'botVersion',
              in: 'path',
              required: true,
              description: 'The version of the bot that contains the slot.',
              schema: { type: 'string', pattern: '^(DRAFT|[0-9]+)$', minLength: 1, maxLength: 5 },
            },
          }),
        localeId: z
          .string()
          .openapi({
            param: {
              name: 'localeId',
              in: 'path',
              required: true,
              description:
                'The identifier of the language and locale of the slots to list. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.',
              schema: { type: 'string' },
            },
          }),
        intentId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'intentId',
              in: 'path',
              required: true,
              description: 'The unique identifier of the intent that contains the slot.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
      }),
      query: z.object({
        maxResults: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'maxResults',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        nextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'nextToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                sortBy: z
                  .object({
                    attribute: SlotSortAttributeSchema.and(
                      z.any().openapi({ description: 'The attribute to use to sort the list.' }),
                    ).exactOptional(),
                    order: SortOrderSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The order to sort the list. You can choose ascending or descending.',
                        }),
                    ).exactOptional(),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'Specifies attributes for sorting a list of bots.',
                    required: [],
                  }),
                filters: z
                  .array(SlotFilterSchema)
                  .length(1)
                  .exactOptional()
                  .openapi({
                    description:
                      'Provides the specification of a filter used to limit the slots in the response to only those that match the filter specification. You can only specify one filter and only one string to filter on.',
                  }),
                maxResults: z
                  .int()
                  .min(1)
                  .max(1000)
                  .exactOptional()
                  .openapi({
                    description:
                      'The maximum number of slots to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.',
                  }),
                nextToken: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'If the response from the <code>ListSlots</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token in the <code>nextToken</code> parameter to return the next page of results.',
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
        content: { 'application/json': { schema: ListSlotsResponseSchema } },
      },
      480: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      481: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
      482: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      483: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesIndexRoute = createRoute({
  method: 'put',
  path: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/',
  description:
    '<p>Creates a custom slot type</p> <p> To create a custom slot type, specify a name for the slot type and a set of enumeration values, the values that a slot of this type can assume. </p>',
  operationId: 'CreateSlotType',
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
      botId: z
        .string()
        .regex(/^[0-9a-zA-Z]+$/)
        .length(10)
        .openapi({
          param: {
            name: 'botId',
            in: 'path',
            required: true,
            description: 'The identifier of the bot associated with this slot type.',
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
          },
        }),
      botVersion: z
        .string()
        .regex(/^DRAFT$/)
        .length(5)
        .openapi({
          param: {
            name: 'botVersion',
            in: 'path',
            required: true,
            description: 'The identifier of the bot version associated with this slot type.',
            schema: { type: 'string', pattern: '^DRAFT$', minLength: 5, maxLength: 5 },
          },
        }),
      localeId: z
        .string()
        .openapi({
          param: {
            name: 'localeId',
            in: 'path',
            required: true,
            description:
              'The identifier of the language and locale that the slot type will be used in. The string must match one of the supported locales. All of the bots, intents, and slots used by the slot type must have the same locale. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              slotTypeName: z
                .string()
                .regex(/^([0-9a-zA-Z][_-]?)+$/)
                .min(1)
                .max(100)
                .openapi({
                  description:
                    'The name for the slot. A slot type name must be unique within the account.',
                }),
              description: z
                .string()
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    'A description of the slot type. Use the description to help identify the slot type in lists.',
                }),
              slotTypeValues: z
                .array(SlotTypeValueSchema)
                .min(1)
                .max(10000)
                .exactOptional()
                .openapi({
                  description:
                    'A list of <code>SlotTypeValue</code> objects that defines the values that the slot type can take. Each value can have a list of synonyms, additional values that help train the machine learning model about the values that it resolves for a slot.',
                }),
              valueSelectionSetting: z
                .object({
                  resolutionStrategy: SlotValueResolutionStrategySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>Determines the slot resolution strategy that Amazon Lex uses to return slot type values. The field can be set to one of the following values:</p> <ul> <li> <p>OriginalValue - Returns the value entered by the user, if the user value is similar to the slot value.</p> </li> <li> <p>TopResolution - If there is a resolution list for the slot, return the first value in the resolution list as the slot type value. If there is no resolution list, null is returned.</p> </li> </ul> <p>If you don't specify the valueSelectionStrategy, the default is OriginalValue. </p>",
                      }),
                  ).exactOptional(),
                  regexFilter: SlotValueRegexFilterSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'A regular expression used to validate the value of a slot.',
                      }),
                  ).exactOptional(),
                  advancedRecognitionSetting: AdvancedRecognitionSettingSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Provides settings that enable advanced recognition settings for slot values.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Contains settings used by Amazon Lex to select a slot value.',
                  required: [],
                }),
              parentSlotTypeSignature: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>The built-in slot type used as a parent of this slot type. When you define a parent slot type, the new slot type has the configuration of the parent slot type.</p> <p>Only <code>AMAZON.AlphaNumeric</code> is supported.</p>',
                }),
              externalSourceSetting: z
                .object({
                  grammarSlotTypeSetting: GrammarSlotTypeSettingSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Settings required for a slot type based on a grammar that you provide.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    "Provides information about the external source of the slot type's definition.",
                  required: [],
                }),
              compositeSlotTypeSetting: z
                .object({
                  subSlots: SubSlotTypeListSchema.and(
                    z.any().openapi({ description: 'Subslots in the composite slot.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A composite slot is a combination of two or more slots that capture multiple pieces of information in a single user input.',
                  required: [],
                }),
            })
            .openapi({ required: ['slotTypeName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSlotTypeResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesIndexRoute = createRoute({
  method: 'post',
  path: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/',
  description: 'Gets a list of slot types that match the specified criteria.',
  operationId: 'ListSlotTypes',
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
      botId: z
        .string()
        .regex(/^[0-9a-zA-Z]+$/)
        .length(10)
        .openapi({
          param: {
            name: 'botId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the bot that contains the slot types.',
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
          },
        }),
      botVersion: z
        .string()
        .regex(/^(DRAFT|[0-9]+)$/)
        .min(1)
        .max(5)
        .openapi({
          param: {
            name: 'botVersion',
            in: 'path',
            required: true,
            description: 'The version of the bot that contains the slot type.',
            schema: { type: 'string', pattern: '^(DRAFT|[0-9]+)$', minLength: 1, maxLength: 5 },
          },
        }),
      localeId: z
        .string()
        .openapi({
          param: {
            name: 'localeId',
            in: 'path',
            required: true,
            description:
              'The identifier of the language and locale of the slot types to list. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              sortBy: z
                .object({
                  attribute: SlotTypeSortAttributeSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The attribute to use to sort the list of slot types.',
                      }),
                  ).exactOptional(),
                  order: SortOrderSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The order to sort the list. You can say ascending or descending.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Specifies attributes for sorting a list of slot types.',
                  required: [],
                }),
              filters: z
                .array(SlotTypeFilterSchema)
                .length(1)
                .exactOptional()
                .openapi({
                  description:
                    'Provides the specification of a filter used to limit the slot types in the response to only those that match the filter specification. You can only specify one filter and only one string to filter on.',
                }),
              maxResults: z
                .int()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of slot types to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.',
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If the response from the <code>ListSlotTypes</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token in the <code>nextToken</code> parameter to return the next page of results.',
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
      content: { 'application/json': { schema: ListSlotTypesResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postCreateuploadurlIndexRoute = createRoute({
  method: 'post',
  path: '/createuploadurl/',
  description:
    'Gets a pre-signed S3 write URL that you use to upload the zip archive when importing a bot or a bot locale. ',
  operationId: 'CreateUploadUrl',
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateUploadUrlResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getBotsBotIdIndexRoute = createRoute({
  method: 'get',
  path: '/bots/{botId}/',
  description: 'Provides metadata information about a bot. ',
  operationId: 'DescribeBot',
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
      botId: z
        .string()
        .regex(/^[0-9a-zA-Z]+$/)
        .length(10)
        .openapi({
          param: {
            name: 'botId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the bot to describe.',
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeBotResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const putBotsBotIdIndexRoute = createRoute({
  method: 'put',
  path: '/bots/{botId}/',
  description: 'Updates the configuration of an existing bot. ',
  operationId: 'UpdateBot',
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
      botId: z
        .string()
        .regex(/^[0-9a-zA-Z]+$/)
        .length(10)
        .openapi({
          param: {
            name: 'botId',
            in: 'path',
            required: true,
            description:
              'The unique identifier of the bot to update. This identifier is returned by the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateBot.html">CreateBot</a> operation.',
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              botName: z
                .string()
                .regex(/^([0-9a-zA-Z][_-]?)+$/)
                .min(1)
                .max(100)
                .openapi({
                  description:
                    'The new name of the bot. The name must be unique in the account that creates the bot.',
                }),
              description: z
                .string()
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({ description: 'A description of the bot.' }),
              roleArn: z
                .string()
                .regex(/^arn:aws:iam::[0-9]{12}:role\/.*$/)
                .min(32)
                .max(2048)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of an IAM role that has permissions to access the bot.',
                }),
              dataPrivacy: z
                .object({
                  childDirected: ChildDirectedSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'For each Amazon Lex bot created with the Amazon Lex Model Building Service, you must specify whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to the Children\'s Online Privacy Protection Act (COPPA) by specifying <code>true</code> or <code>false</code> in the <code>childDirected</code> field. By specifying <code>true</code> in the <code>childDirected</code> field, you confirm that your use of Amazon Lex <b>is</b> related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. By specifying <code>false</code> in the <code>childDirected</code> field, you confirm that your use of Amazon Lex <b>is not</b> related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. You may not specify a default value for the <code>childDirected</code> field that does not accurately reflect whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. If your use of Amazon Lex relates to a website, program, or other application that is directed in whole or in part, to children under age 13, you must obtain any required verifiable parental consent under COPPA. For information regarding the use of Amazon Lex in connection with websites, programs, or other applications that are directed or targeted, in whole or in part, to children under age 13, see the <a href="https://aws.amazon.com/lex/faqs#data-security">Amazon Lex FAQ</a>.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'By default, data stored by Amazon Lex is encrypted. The <code>DataPrivacy</code> structure provides settings that determine how Amazon Lex handles special cases of securing the data for your bot. ',
                  required: [],
                }),
              idleSessionTTLInSeconds: z
                .int()
                .min(60)
                .max(86400)
                .openapi({
                  description:
                    "<p>The time, in seconds, that Amazon Lex should keep information about a user's conversation with the bot.</p> <p>A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Lex deletes any data provided before the timeout.</p> <p>You can specify between 60 (1 minute) and 86,400 (24 hours) seconds.</p>",
                }),
              botType: z
                .enum(['Bot', 'BotNetwork'])
                .exactOptional()
                .openapi({ description: 'The type of the bot to be updated.' }),
              botMembers: z
                .array(BotMemberSchema)
                .min(0)
                .max(10)
                .exactOptional()
                .openapi({
                  description:
                    'The list of bot members in the network associated with the update action.',
                }),
            })
            .openapi({
              required: ['botName', 'roleArn', 'dataPrivacy', 'idleSessionTTLInSeconds'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateBotResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteBotsBotIdIndexRoute = createRoute({
  method: 'delete',
  path: '/bots/{botId}/',
  description:
    '<p>Deletes all versions of a bot, including the <code>Draft</code> version. To delete a specific version, use the <code>DeleteBotVersion</code> operation.</p> <p>When you delete a bot, all of the resources contained in the bot are also deleted. Deleting a bot removes all locales, intents, slot, and slot types defined for the bot.</p> <p>If a bot has an alias, the <code>DeleteBot</code> operation returns a <code>ResourceInUseException</code> exception. If you want to delete the bot and the alias, set the <code>skipResourceInUseCheck</code> parameter to <code>true</code>.</p>',
  operationId: 'DeleteBot',
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
      botId: z
        .string()
        .regex(/^[0-9a-zA-Z]+$/)
        .length(10)
        .openapi({
          param: {
            name: 'botId',
            in: 'path',
            required: true,
            description: 'The identifier of the bot to delete. ',
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
          },
        }),
    }),
    query: z.object({
      skipResourceInUseCheck: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'skipResourceInUseCheck',
            in: 'query',
            required: false,
            description:
              'By default, Amazon Lex checks if any other resource, such as an alias or bot network, is using the bot version before it is deleted and throws a <code>ResourceInUseException</code> exception if the bot is being used by another resource. Set this parameter to <code>true</code> to skip this check and remove the bot even if it is being used by another resource.',
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteBotResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getBotsBotIdBotaliasesBotAliasIdIndexRoute = createRoute({
  method: 'get',
  path: '/bots/{botId}/botaliases/{botAliasId}/',
  description: 'Get information about a specific bot alias.',
  operationId: 'DescribeBotAlias',
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
      botAliasId: z
        .string()
        .regex(/^(\bTSTALIASID\b|[0-9a-zA-Z]+)$/)
        .length(10)
        .openapi({
          param: {
            name: 'botAliasId',
            in: 'path',
            required: true,
            description: 'The identifier of the bot alias to describe.',
            schema: {
              type: 'string',
              pattern: '^(\\bTSTALIASID\\b|[0-9a-zA-Z]+)$',
              minLength: 10,
              maxLength: 10,
            },
          },
        }),
      botId: z
        .string()
        .regex(/^[0-9a-zA-Z]+$/)
        .length(10)
        .openapi({
          param: {
            name: 'botId',
            in: 'path',
            required: true,
            description: 'The identifier of the bot associated with the bot alias to describe.',
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeBotAliasResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const putBotsBotIdBotaliasesBotAliasIdIndexRoute = createRoute({
  method: 'put',
  path: '/bots/{botId}/botaliases/{botAliasId}/',
  description: 'Updates the configuration of an existing bot alias.',
  operationId: 'UpdateBotAlias',
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
      botAliasId: z
        .string()
        .regex(/^(\bTSTALIASID\b|[0-9a-zA-Z]+)$/)
        .length(10)
        .openapi({
          param: {
            name: 'botAliasId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the bot alias.',
            schema: {
              type: 'string',
              pattern: '^(\\bTSTALIASID\\b|[0-9a-zA-Z]+)$',
              minLength: 10,
              maxLength: 10,
            },
          },
        }),
      botId: z
        .string()
        .regex(/^[0-9a-zA-Z]+$/)
        .length(10)
        .openapi({
          param: {
            name: 'botId',
            in: 'path',
            required: true,
            description: 'The identifier of the bot with the updated alias.',
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              botAliasName: z
                .string()
                .regex(/^([0-9a-zA-Z][_-]?)+$/)
                .min(1)
                .max(100)
                .openapi({ description: 'The new name to assign to the bot alias.' }),
              description: z
                .string()
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({ description: 'The new description to assign to the bot alias.' }),
              botVersion: z
                .string()
                .regex(/^(DRAFT|[0-9]+)$/)
                .min(1)
                .max(5)
                .exactOptional()
                .openapi({ description: 'The new bot version to assign to the bot alias.' }),
              botAliasLocaleSettings: z
                .record(z.string(), BotAliasLocaleSettingsSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .exactOptional()
                .openapi({
                  description: 'The new Lambda functions to use in each locale for the bot alias.',
                }),
              conversationLogSettings: z
                .object({
                  textLogSettings: TextLogSettingsListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon CloudWatch Logs settings for logging text and metadata.',
                      }),
                  ).exactOptional(),
                  audioLogSettings: AudioLogSettingsListSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The Amazon S3 settings for logging audio to an S3 bucket.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Configures conversation logging that saves audio, text, and metadata for the conversations with your users.',
                  required: [],
                }),
              sentimentAnalysisSettings: z
                .object({
                  detectSentiment: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Sets whether Amazon Lex uses Amazon Comprehend to detect the sentiment of user utterances.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.',
                  required: [],
                }),
            })
            .openapi({ required: ['botAliasName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateBotAliasResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteBotsBotIdBotaliasesBotAliasIdIndexRoute = createRoute({
  method: 'delete',
  path: '/bots/{botId}/botaliases/{botAliasId}/',
  description: 'Deletes the specified bot alias.',
  operationId: 'DeleteBotAlias',
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
      botAliasId: z
        .string()
        .regex(/^(\bTSTALIASID\b|[0-9a-zA-Z]+)$/)
        .length(10)
        .openapi({
          param: {
            name: 'botAliasId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the bot alias to delete.',
            schema: {
              type: 'string',
              pattern: '^(\\bTSTALIASID\\b|[0-9a-zA-Z]+)$',
              minLength: 10,
              maxLength: 10,
            },
          },
        }),
      botId: z
        .string()
        .regex(/^[0-9a-zA-Z]+$/)
        .length(10)
        .openapi({
          param: {
            name: 'botId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the bot associated with the alias to delete.',
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
          },
        }),
    }),
    query: z.object({
      skipResourceInUseCheck: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'skipResourceInUseCheck',
            in: 'query',
            required: false,
            description:
              'By default, Amazon Lex checks if any other resource, such as a bot network, is using the bot alias before it is deleted and throws a <code>ResourceInUseException</code> exception if the alias is being used by another resource. Set this parameter to <code>true</code> to skip this check and remove the alias even if it is being used by another resource.',
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteBotAliasResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getBotsBotIdBotversionsBotVersionIndexRoute = createRoute({
  method: 'get',
  path: '/bots/{botId}/botversions/{botVersion}/',
  description: 'Provides metadata about a version of a bot.',
  operationId: 'DescribeBotVersion',
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
      botId: z
        .string()
        .regex(/^[0-9a-zA-Z]+$/)
        .length(10)
        .openapi({
          param: {
            name: 'botId',
            in: 'path',
            required: true,
            description: 'The identifier of the bot containing the version to return metadata for.',
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
          },
        }),
      botVersion: z
        .string()
        .regex(/^[0-9]+$/)
        .min(1)
        .max(5)
        .openapi({
          param: {
            name: 'botVersion',
            in: 'path',
            required: true,
            description: 'The version of the bot to return metadata for.',
            schema: { type: 'string', pattern: '^[0-9]+$', minLength: 1, maxLength: 5 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeBotVersionResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteBotsBotIdBotversionsBotVersionIndexRoute = createRoute({
  method: 'delete',
  path: '/bots/{botId}/botversions/{botVersion}/',
  description:
    'Deletes a specific version of a bot. To delete all versions of a bot, use the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DeleteBot.html">DeleteBot</a> operation.',
  operationId: 'DeleteBotVersion',
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
      botId: z
        .string()
        .regex(/^[0-9a-zA-Z]+$/)
        .length(10)
        .openapi({
          param: {
            name: 'botId',
            in: 'path',
            required: true,
            description: 'The identifier of the bot that contains the version.',
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
          },
        }),
      botVersion: z
        .string()
        .regex(/^[0-9]+$/)
        .min(1)
        .max(5)
        .openapi({
          param: {
            name: 'botVersion',
            in: 'path',
            required: true,
            description: 'The version of the bot to delete.',
            schema: { type: 'string', pattern: '^[0-9]+$', minLength: 1, maxLength: 5 },
          },
        }),
    }),
    query: z.object({
      skipResourceInUseCheck: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'skipResourceInUseCheck',
            in: 'query',
            required: false,
            description:
              'By default, Amazon Lex checks if any other resource, such as an alias or bot network, is using the bot version before it is deleted and throws a <code>ResourceInUseException</code> exception if the version is being used by another resource. Set this parameter to <code>true</code> to skip this check and remove the version even if it is being used by another resource.',
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteBotVersionResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyRoute =
  createRoute({
    method: 'delete',
    path: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary',
    description: 'Removes a custom vocabulary from the specified locale in the specified bot.',
    operationId: 'DeleteCustomVocabulary',
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
        botId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'botId',
              in: 'path',
              required: true,
              description: 'The unique identifier of the bot to remove the custom vocabulary from.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botVersion: z
          .string()
          .regex(/^DRAFT$/)
          .length(5)
          .openapi({
            param: {
              name: 'botVersion',
              in: 'path',
              required: true,
              description: 'The version of the bot to remove the custom vocabulary from.',
              schema: { type: 'string', pattern: '^DRAFT$', minLength: 5, maxLength: 5 },
            },
          }),
        localeId: z
          .string()
          .openapi({
            param: {
              name: 'localeId',
              in: 'path',
              required: true,
              description:
                'The locale identifier for the locale that contains the custom vocabulary to remove.',
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      202: {
        description: 'Success',
        content: { 'application/json': { schema: DeleteCustomVocabularyResponseSchema } },
      },
      480: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      481: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
      482: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      483: {
        description: 'PreconditionFailedException',
        content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
      },
      484: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      485: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const getExportsExportIdIndexRoute = createRoute({
  method: 'get',
  path: '/exports/{exportId}/',
  description: 'Gets information about a specific export.',
  operationId: 'DescribeExport',
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
      exportId: z
        .string()
        .regex(/^[0-9a-zA-Z]+$/)
        .length(10)
        .openapi({
          param: {
            name: 'exportId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the export to describe.',
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeExportResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const putExportsExportIdIndexRoute = createRoute({
  method: 'put',
  path: '/exports/{exportId}/',
  description:
    '<p>Updates the password used to protect an export zip archive.</p> <p>The password is not required. If you don\'t supply a password, Amazon Lex generates a zip file that is not protected by a password. This is the archive that is available at the pre-signed S3 URL provided by the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeExport.html">DescribeExport</a> operation.</p>',
  operationId: 'UpdateExport',
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
      exportId: z
        .string()
        .regex(/^[0-9a-zA-Z]+$/)
        .length(10)
        .openapi({
          param: {
            name: 'exportId',
            in: 'path',
            required: true,
            description: 'The unique identifier Amazon Lex assigned to the export.',
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              filePassword: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description: 'The new password to use to encrypt the export zip archive.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateExportResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteExportsExportIdIndexRoute = createRoute({
  method: 'delete',
  path: '/exports/{exportId}/',
  description: 'Removes a previous export and the associated files stored in an S3 bucket.',
  operationId: 'DeleteExport',
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
      exportId: z
        .string()
        .regex(/^[0-9a-zA-Z]+$/)
        .length(10)
        .openapi({
          param: {
            name: 'exportId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the export to delete.',
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteExportResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getImportsImportIdIndexRoute = createRoute({
  method: 'get',
  path: '/imports/{importId}/',
  description: 'Gets information about a specific import.',
  operationId: 'DescribeImport',
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
      importId: z
        .string()
        .regex(/^[0-9a-zA-Z]+$/)
        .length(10)
        .openapi({
          param: {
            name: 'importId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the import to describe.',
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeImportResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteImportsImportIdIndexRoute = createRoute({
  method: 'delete',
  path: '/imports/{importId}/',
  description: 'Removes a previous import and the associated file stored in an S3 bucket.',
  operationId: 'DeleteImport',
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
      importId: z
        .string()
        .regex(/^[0-9a-zA-Z]+$/)
        .length(10)
        .openapi({
          param: {
            name: 'importId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the import to delete.',
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteImportResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndexRoute =
  createRoute({
    method: 'get',
    path: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/',
    description: 'Returns metadata about an intent.',
    operationId: 'DescribeIntent',
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
        intentId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'intentId',
              in: 'path',
              required: true,
              description: 'The identifier of the intent to describe.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'botId',
              in: 'path',
              required: true,
              description: 'The identifier of the bot associated with the intent.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botVersion: z
          .string()
          .regex(/^(DRAFT|[0-9]+)$/)
          .min(1)
          .max(5)
          .openapi({
            param: {
              name: 'botVersion',
              in: 'path',
              required: true,
              description: 'The version of the bot associated with the intent.',
              schema: { type: 'string', pattern: '^(DRAFT|[0-9]+)$', minLength: 1, maxLength: 5 },
            },
          }),
        localeId: z
          .string()
          .openapi({
            param: {
              name: 'localeId',
              in: 'path',
              required: true,
              description:
                'The identifier of the language and locale of the intent to describe. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.',
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeIntentResponseSchema } },
      },
      480: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      481: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
      482: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      483: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      484: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndexRoute =
  createRoute({
    method: 'put',
    path: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/',
    description: 'Updates the settings for an intent.',
    operationId: 'UpdateIntent',
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
        intentId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'intentId',
              in: 'path',
              required: true,
              description: 'The unique identifier of the intent to update.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'botId',
              in: 'path',
              required: true,
              description: 'The identifier of the bot that contains the intent.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botVersion: z
          .string()
          .regex(/^DRAFT$/)
          .length(5)
          .openapi({
            param: {
              name: 'botVersion',
              in: 'path',
              required: true,
              description:
                'The version of the bot that contains the intent. Must be <code>DRAFT</code>.',
              schema: { type: 'string', pattern: '^DRAFT$', minLength: 5, maxLength: 5 },
            },
          }),
        localeId: z
          .string()
          .openapi({
            param: {
              name: 'localeId',
              in: 'path',
              required: true,
              description:
                'The identifier of the language and locale where this intent is used. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.',
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                intentName: z
                  .string()
                  .regex(/^([0-9a-zA-Z][_-]?)+$/)
                  .min(1)
                  .max(100)
                  .openapi({ description: 'The new name for the intent.' }),
                description: z
                  .string()
                  .min(0)
                  .max(200)
                  .exactOptional()
                  .openapi({ description: 'The new description of the intent.' }),
                parentIntentSignature: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The signature of the new built-in intent to use as the parent of this intent.',
                  }),
                sampleUtterances: z
                  .array(SampleUtteranceSchema)
                  .exactOptional()
                  .openapi({ description: 'New utterances used to invoke the intent.' }),
                dialogCodeHook: z
                  .object({
                    enabled: BooleanSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Enables the dialog code hook so that it processes user requests.',
                        }),
                    ).exactOptional(),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      'Settings that determine the Lambda function that Amazon Lex uses for processing user responses.',
                    required: [],
                  }),
                fulfillmentCodeHook: z
                  .object({
                    enabled: BooleanSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Indicates whether a Lambda function should be invoked to fulfill a specific intent.',
                        }),
                    ).exactOptional(),
                    postFulfillmentStatusSpecification:
                      PostFulfillmentStatusSpecificationSchema.and(
                        z
                          .any()
                          .openapi({
                            description:
                              'Provides settings for messages sent to the user for after the Lambda fulfillment function completes. Post-fulfillment messages can be sent for both streaming and non-streaming conversations.',
                          }),
                      ).exactOptional(),
                    fulfillmentUpdatesSpecification: FulfillmentUpdatesSpecificationSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Provides settings for update messages sent to the user for long-running Lambda fulfillment functions. Fulfillment updates can be used only with streaming conversations.',
                        }),
                    ).exactOptional(),
                    active: BoxedBooleanSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            "Determines whether the fulfillment code hook is used. When <code>active</code> is false, the code hook doesn't run.",
                        }),
                    ).exactOptional(),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      'Determines if a Lambda function should be invoked for a specific intent.',
                    required: [],
                  }),
                slotPriorities: z
                  .array(SlotPrioritySchema)
                  .exactOptional()
                  .openapi({
                    description:
                      'A new list of slots and their priorities that are contained by the intent.',
                  }),
                intentConfirmationSetting: z
                  .object({
                    promptSpecification: PromptSpecificationSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            '<p>Prompts the user to confirm the intent. This question should have a yes or no answer.</p> <p>Amazon Lex uses this prompt to ensure that the user acknowledges that the intent is ready for fulfillment. For example, with the <code>OrderPizza</code> intent, you might want to confirm that the order is correct before placing it. For other intents, such as intents that simply respond to user questions, you might not need to ask the user for confirmation before providing the information. </p>',
                        }),
                    ).exactOptional(),
                    declinationResponse: ResponseSpecificationSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'When the user answers "no" to the question defined in <code>promptSpecification</code>, Amazon Lex responds with this response to acknowledge that the intent was canceled. ',
                        }),
                    ).exactOptional(),
                    active: BoxedBooleanSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            "Specifies whether the intent's confirmation is sent to the user. When this field is false, confirmation and declination responses aren't sent. If the <code>active</code> field isn't specified, the default is true.",
                        }),
                    ).exactOptional(),
                    confirmationResponse: ResponseSpecificationSchema.exactOptional(),
                    confirmationNextStep: DialogStateSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Specifies the next step that the bot executes when the customer confirms the intent.',
                        }),
                    ).exactOptional(),
                    confirmationConditional: ConditionalSpecificationSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'A list of conditional branches to evaluate after the intent is closed.',
                        }),
                    ).exactOptional(),
                    declinationNextStep: DialogStateSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Specifies the next step that the bot executes when the customer declines the intent.',
                        }),
                    ).exactOptional(),
                    declinationConditional: ConditionalSpecificationSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'A list of conditional branches to evaluate after the intent is declined.',
                        }),
                    ).exactOptional(),
                    failureResponse: ResponseSpecificationSchema.exactOptional(),
                    failureNextStep: DialogStateSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The next step to take in the conversation if the confirmation step fails.',
                        }),
                    ).exactOptional(),
                    failureConditional: ConditionalSpecificationSchema.exactOptional(),
                    codeHook: DialogCodeHookInvocationSettingSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            "The <code>DialogCodeHookInvocationSetting</code> object associated with intent's confirmation step. The dialog code hook is triggered based on these invocation settings when the confirmation next step or declination next step or failure next step is <code>InvokeDialogCodeHook</code>. ",
                        }),
                    ).exactOptional(),
                    elicitationCodeHook: ElicitationCodeHookInvocationSettingSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The <code>DialogCodeHookInvocationSetting</code> used when the code hook is invoked during confirmation prompt retries.',
                        }),
                    ).exactOptional(),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      'Provides a prompt for making sure that the user is ready for the intent to be fulfilled.',
                    required: [],
                  }),
                intentClosingSetting: z
                  .object({
                    closingResponse: ResponseSpecificationSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The response that Amazon Lex sends to the user when the intent is complete.',
                        }),
                    ).exactOptional(),
                    active: BoxedBooleanSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            "Specifies whether an intent's closing response is used. When this field is false, the closing response isn't sent to the user. If the <code>active</code> field isn't specified, the default is true.",
                        }),
                    ).exactOptional(),
                    nextStep: DialogStateSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            "Specifies the next step that the bot executes after playing the intent's closing response.",
                        }),
                    ).exactOptional(),
                    conditional: ConditionalSpecificationSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            "A list of conditional branches associated with the intent's closing response. These branches are executed when the <code>nextStep</code> attribute is set to <code>EvalutateConditional</code>.",
                        }),
                    ).exactOptional(),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      'Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.',
                    required: [],
                  }),
                inputContexts: z
                  .array(InputContextSchema)
                  .min(0)
                  .max(5)
                  .exactOptional()
                  .openapi({
                    description:
                      'A new list of contexts that must be active in order for Amazon Lex to consider the intent.',
                  }),
                outputContexts: z
                  .array(OutputContextSchema)
                  .min(0)
                  .max(10)
                  .exactOptional()
                  .openapi({
                    description:
                      'A new list of contexts that Amazon Lex activates when the intent is fulfilled.',
                  }),
                kendraConfiguration: z
                  .object({
                    kendraIndex: KendraIndexArnSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The Amazon Resource Name (ARN) of the Amazon Kendra index that you want the AMAZON.KendraSearchIntent intent to search. The index must be in the same account and Region as the Amazon Lex bot.',
                        }),
                    ).exactOptional(),
                    queryFilterStringEnabled: BooleanSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Determines whether the AMAZON.KendraSearchIntent intent uses a custom query string to query the Amazon Kendra index.',
                        }),
                    ).exactOptional(),
                    queryFilterString: QueryFilterStringSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'A query filter that Amazon Lex sends to Amazon Kendra to filter the response from a query. The filter is in the format defined by Amazon Kendra. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/filtering.html">Filtering queries</a>.',
                        }),
                    ).exactOptional(),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      "Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance.",
                    required: [],
                  }),
                initialResponseSetting: z
                  .object({
                    initialResponse: ResponseSpecificationSchema.exactOptional(),
                    nextStep: DialogStateSchema.and(
                      z.any().openapi({ description: 'The next step in the conversation.' }),
                    ).exactOptional(),
                    conditional: ConditionalSpecificationSchema.exactOptional(),
                    codeHook: DialogCodeHookInvocationSettingSchema.exactOptional(),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      'Configuration setting for a response sent to the user before Amazon Lex starts eliciting slots.',
                    required: [],
                  }),
              })
              .openapi({ required: ['intentName'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateIntentResponseSchema } },
      },
      480: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      481: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
      482: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      483: {
        description: 'PreconditionFailedException',
        content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
      },
      484: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      485: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const deleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndexRoute =
  createRoute({
    method: 'delete',
    path: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/',
    description:
      '<p>Removes the specified intent.</p> <p>Deleting an intent also deletes the slots associated with the intent.</p>',
    operationId: 'DeleteIntent',
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
        intentId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'intentId',
              in: 'path',
              required: true,
              description: 'The unique identifier of the intent to delete.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'botId',
              in: 'path',
              required: true,
              description: 'The identifier of the bot associated with the intent.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botVersion: z
          .string()
          .regex(/^DRAFT$/)
          .length(5)
          .openapi({
            param: {
              name: 'botVersion',
              in: 'path',
              required: true,
              description: 'The version of the bot associated with the intent.',
              schema: { type: 'string', pattern: '^DRAFT$', minLength: 5, maxLength: 5 },
            },
          }),
        localeId: z
          .string()
          .openapi({
            param: {
              name: 'localeId',
              in: 'path',
              required: true,
              description:
                'The identifier of the language and locale where the bot will be deleted. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.',
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      204: { description: 'Success' },
      480: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      481: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
      482: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      483: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      484: {
        description: 'PreconditionFailedException',
        content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
      },
      485: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const deletePolicyResourceArnStatementsStatementIdIndexRoute = createRoute({
  method: 'delete',
  path: '/policy/{resourceArn}/statements/{statementId}/',
  description:
    "Deletes a policy statement from a resource policy. If you delete the last statement from a policy, the policy is deleted. If you specify a statement ID that doesn't exist in the policy, or if the bot or bot alias doesn't have a policy attached, Amazon Lex returns an exception.",
  operationId: 'DeleteResourcePolicyStatement',
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
      resourceArn: z
        .string()
        .min(1)
        .max(1011)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to.',
            schema: { type: 'string', minLength: 1, maxLength: 1011 },
          },
        }),
      statementId: z
        .string()
        .regex(/^([0-9a-zA-Z][_-]?)+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'statementId',
            in: 'path',
            required: true,
            description: 'The name of the statement (SID) to delete from the policy.',
            schema: {
              type: 'string',
              pattern: '^([0-9a-zA-Z][_-]?)+$',
              minLength: 1,
              maxLength: 100,
            },
          },
        }),
    }),
    query: z.object({
      expectedRevisionId: z
        .string()
        .regex(/^[0-9]+$/)
        .min(1)
        .max(5)
        .exactOptional()
        .openapi({
          param: {
            name: 'expectedRevisionId',
            in: 'query',
            required: false,
            description:
              "<p>The identifier of the revision of the policy to delete the statement from. If this revision ID doesn't match the current revision ID, Amazon Lex throws an exception.</p> <p>If you don't specify a revision, Amazon Lex removes the current contents of the statement. </p>",
            schema: { type: 'string', pattern: '^[0-9]+$', minLength: 1, maxLength: 5 },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteResourcePolicyStatementResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndexRoute =
  createRoute({
    method: 'get',
    path: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}/',
    description: 'Gets metadata information about a slot.',
    operationId: 'DescribeSlot',
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
        slotId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'slotId',
              in: 'path',
              required: true,
              description: 'The unique identifier for the slot.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'botId',
              in: 'path',
              required: true,
              description: 'The identifier of the bot associated with the slot.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botVersion: z
          .string()
          .regex(/^(DRAFT|[0-9]+)$/)
          .min(1)
          .max(5)
          .openapi({
            param: {
              name: 'botVersion',
              in: 'path',
              required: true,
              description: 'The version of the bot associated with the slot.',
              schema: { type: 'string', pattern: '^(DRAFT|[0-9]+)$', minLength: 1, maxLength: 5 },
            },
          }),
        localeId: z
          .string()
          .openapi({
            param: {
              name: 'localeId',
              in: 'path',
              required: true,
              description:
                'The identifier of the language and locale of the slot to describe. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.',
              schema: { type: 'string' },
            },
          }),
        intentId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'intentId',
              in: 'path',
              required: true,
              description: 'The identifier of the intent that contains the slot.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeSlotResponseSchema } },
      },
      480: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      481: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
      482: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      483: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      484: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndexRoute =
  createRoute({
    method: 'put',
    path: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}/',
    description: 'Updates the settings for a slot.',
    operationId: 'UpdateSlot',
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
        slotId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'slotId',
              in: 'path',
              required: true,
              description: 'The unique identifier for the slot to update.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'botId',
              in: 'path',
              required: true,
              description: 'The unique identifier of the bot that contains the slot.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botVersion: z
          .string()
          .regex(/^DRAFT$/)
          .length(5)
          .openapi({
            param: {
              name: 'botVersion',
              in: 'path',
              required: true,
              description:
                'The version of the bot that contains the slot. Must always be <code>DRAFT</code>.',
              schema: { type: 'string', pattern: '^DRAFT$', minLength: 5, maxLength: 5 },
            },
          }),
        localeId: z
          .string()
          .openapi({
            param: {
              name: 'localeId',
              in: 'path',
              required: true,
              description:
                'The identifier of the language and locale that contains the slot. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.',
              schema: { type: 'string' },
            },
          }),
        intentId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'intentId',
              in: 'path',
              required: true,
              description: 'The identifier of the intent that contains the slot.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                slotName: z
                  .string()
                  .regex(/^([0-9a-zA-Z][_-]?)+$/)
                  .min(1)
                  .max(100)
                  .openapi({ description: 'The new name for the slot.' }),
                description: z
                  .string()
                  .min(0)
                  .max(200)
                  .exactOptional()
                  .openapi({ description: 'The new description for the slot.' }),
                slotTypeId: z
                  .string()
                  .regex(/^((AMAZON\.)[a-zA-Z_]+?|[0-9a-zA-Z]+)$/)
                  .min(1)
                  .max(25)
                  .exactOptional()
                  .openapi({
                    description:
                      'The unique identifier of the new slot type to associate with this slot. ',
                  }),
                valueElicitationSetting: z
                  .object({
                    defaultValueSpecification: SlotDefaultValueSpecificationSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            "A list of default values for a slot. Default values are used when Amazon Lex hasn't determined a value for a slot. You can specify default values from context variables, session attributes, and defined values.",
                        }),
                    ).exactOptional(),
                    slotConstraint: SlotConstraintSchema.and(
                      z
                        .any()
                        .openapi({
                          description: 'Specifies whether the slot is required or optional.',
                        }),
                    ).exactOptional(),
                    promptSpecification: PromptSpecificationSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The prompt that Amazon Lex uses to elicit the slot value from the user.',
                        }),
                    ).exactOptional(),
                    sampleUtterances: SampleUtterancesListSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'If you know a specific pattern that users might respond to an Amazon Lex request for a slot value, you can provide those utterances to improve accuracy. This is optional. In most cases, Amazon Lex is capable of understanding user utterances.',
                        }),
                    ).exactOptional(),
                    waitAndContinueSpecification:
                      WaitAndContinueSpecificationSchema.exactOptional(),
                    slotCaptureSetting: SlotCaptureSettingSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Specifies the settings that Amazon Lex uses when a slot value is successfully entered by a user.',
                        }),
                    ).exactOptional(),
                  })
                  .openapi({
                    description:
                      'Specifies the elicitation setting details for constituent sub slots of a composite slot.',
                    required: [],
                  }),
                obfuscationSetting: z
                  .object({
                    obfuscationSettingType: ObfuscationSettingTypeSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Value that determines whether Amazon Lex obscures slot values in conversation logs. The default is to obscure the values.',
                        }),
                    ).exactOptional(),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      'Determines whether Amazon Lex obscures slot values in conversation logs. ',
                    required: [],
                  }),
                multipleValuesSetting: z
                  .object({
                    allowMultipleValues: BooleanSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            '<p>Indicates whether a slot can return multiple values. When <code>true</code>, the slot may return more than one value in a response. When <code>false</code>, the slot returns only a single value.</p> <p>Multi-value slots are only available in the en-US locale. If you set this value to <code>true</code> in any other locale, Amazon Lex throws a <code>ValidationException</code>.</p> <p>If the <code>allowMutlipleValues</code> is not set, the default value is <code>false</code>.</p>',
                        }),
                    ).exactOptional(),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'Indicates whether a slot can return multiple values.',
                    required: [],
                  }),
                subSlotSetting: z
                  .object({
                    expression: SubSlotExpressionSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The expression text for defining the constituent sub slots in the composite slot using logical AND and OR operators.',
                        }),
                    ).exactOptional(),
                    slotSpecifications: SubSlotSpecificationMapSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Specifications for the constituent sub slots of a composite slot.',
                        }),
                    ).exactOptional(),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      'Specifications for the constituent sub slots and the expression for the composite slot.',
                    required: [],
                  }),
              })
              .openapi({ required: ['slotName', 'valueElicitationSetting'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateSlotResponseSchema } },
      },
      480: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      481: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
      482: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      483: {
        description: 'PreconditionFailedException',
        content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
      },
      484: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      485: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const deleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndexRoute =
  createRoute({
    method: 'delete',
    path: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}/',
    description: 'Deletes the specified slot from an intent.',
    operationId: 'DeleteSlot',
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
        slotId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'slotId',
              in: 'path',
              required: true,
              description: 'The identifier of the slot to delete. ',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'botId',
              in: 'path',
              required: true,
              description: 'The identifier of the bot associated with the slot to delete.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botVersion: z
          .string()
          .regex(/^DRAFT$/)
          .length(5)
          .openapi({
            param: {
              name: 'botVersion',
              in: 'path',
              required: true,
              description: 'The version of the bot associated with the slot to delete.',
              schema: { type: 'string', pattern: '^DRAFT$', minLength: 5, maxLength: 5 },
            },
          }),
        localeId: z
          .string()
          .openapi({
            param: {
              name: 'localeId',
              in: 'path',
              required: true,
              description:
                'The identifier of the language and locale that the slot will be deleted from. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.',
              schema: { type: 'string' },
            },
          }),
        intentId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'intentId',
              in: 'path',
              required: true,
              description: 'The identifier of the intent associated with the slot.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
      }),
    },
    responses: {
      204: { description: 'Success' },
      480: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      481: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
      482: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      483: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      484: {
        description: 'PreconditionFailedException',
        content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
      },
      485: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndexRoute =
  createRoute({
    method: 'get',
    path: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}/',
    description: 'Gets metadata information about a slot type.',
    operationId: 'DescribeSlotType',
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
        slotTypeId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'slotTypeId',
              in: 'path',
              required: true,
              description: 'The identifier of the slot type.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'botId',
              in: 'path',
              required: true,
              description: 'The identifier of the bot associated with the slot type.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botVersion: z
          .string()
          .regex(/^(DRAFT|[0-9]+)$/)
          .min(1)
          .max(5)
          .openapi({
            param: {
              name: 'botVersion',
              in: 'path',
              required: true,
              description: 'The version of the bot associated with the slot type.',
              schema: { type: 'string', pattern: '^(DRAFT|[0-9]+)$', minLength: 1, maxLength: 5 },
            },
          }),
        localeId: z
          .string()
          .openapi({
            param: {
              name: 'localeId',
              in: 'path',
              required: true,
              description:
                'The identifier of the language and locale of the slot type to describe. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.',
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeSlotTypeResponseSchema } },
      },
      480: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      481: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
      482: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      483: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      484: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndexRoute =
  createRoute({
    method: 'put',
    path: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}/',
    description: 'Updates the configuration of an existing slot type.',
    operationId: 'UpdateSlotType',
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
        slotTypeId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'slotTypeId',
              in: 'path',
              required: true,
              description: 'The unique identifier of the slot type to update.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'botId',
              in: 'path',
              required: true,
              description: 'The identifier of the bot that contains the slot type.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botVersion: z
          .string()
          .regex(/^DRAFT$/)
          .length(5)
          .openapi({
            param: {
              name: 'botVersion',
              in: 'path',
              required: true,
              description:
                'The version of the bot that contains the slot type. Must be <code>DRAFT</code>.',
              schema: { type: 'string', pattern: '^DRAFT$', minLength: 5, maxLength: 5 },
            },
          }),
        localeId: z
          .string()
          .openapi({
            param: {
              name: 'localeId',
              in: 'path',
              required: true,
              description:
                'The identifier of the language and locale that contains the slot type. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.',
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                slotTypeName: z
                  .string()
                  .regex(/^([0-9a-zA-Z][_-]?)+$/)
                  .min(1)
                  .max(100)
                  .openapi({ description: 'The new name of the slot type.' }),
                description: z
                  .string()
                  .min(0)
                  .max(200)
                  .exactOptional()
                  .openapi({ description: 'The new description of the slot type.' }),
                slotTypeValues: z
                  .array(SlotTypeValueSchema)
                  .min(1)
                  .max(10000)
                  .exactOptional()
                  .openapi({
                    description:
                      'A new list of values and their optional synonyms that define the values that the slot type can take.',
                  }),
                valueSelectionSetting: z
                  .object({
                    resolutionStrategy: SlotValueResolutionStrategySchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            "<p>Determines the slot resolution strategy that Amazon Lex uses to return slot type values. The field can be set to one of the following values:</p> <ul> <li> <p>OriginalValue - Returns the value entered by the user, if the user value is similar to the slot value.</p> </li> <li> <p>TopResolution - If there is a resolution list for the slot, return the first value in the resolution list as the slot type value. If there is no resolution list, null is returned.</p> </li> </ul> <p>If you don't specify the valueSelectionStrategy, the default is OriginalValue. </p>",
                        }),
                    ).exactOptional(),
                    regexFilter: SlotValueRegexFilterSchema.and(
                      z
                        .any()
                        .openapi({
                          description: 'A regular expression used to validate the value of a slot.',
                        }),
                    ).exactOptional(),
                    advancedRecognitionSetting: AdvancedRecognitionSettingSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Provides settings that enable advanced recognition settings for slot values.',
                        }),
                    ).exactOptional(),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'Contains settings used by Amazon Lex to select a slot value.',
                    required: [],
                  }),
                parentSlotTypeSignature: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The new built-in slot type that should be used as the parent of this slot type.',
                  }),
                externalSourceSetting: z
                  .object({
                    grammarSlotTypeSetting: GrammarSlotTypeSettingSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Settings required for a slot type based on a grammar that you provide.',
                        }),
                    ).exactOptional(),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      "Provides information about the external source of the slot type's definition.",
                    required: [],
                  }),
                compositeSlotTypeSetting: z
                  .object({
                    subSlots: SubSlotTypeListSchema.and(
                      z.any().openapi({ description: 'Subslots in the composite slot.' }),
                    ).exactOptional(),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      'A composite slot is a combination of two or more slots that capture multiple pieces of information in a single user input.',
                    required: [],
                  }),
              })
              .openapi({ required: ['slotTypeName'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      202: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateSlotTypeResponseSchema } },
      },
      480: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      481: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
      482: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      483: {
        description: 'PreconditionFailedException',
        content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
      },
      484: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      485: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const deleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndexRoute =
  createRoute({
    method: 'delete',
    path: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}/',
    description:
      '<p>Deletes a slot type from a bot locale.</p> <p>If a slot is using the slot type, Amazon Lex throws a <code>ResourceInUseException</code> exception. To avoid the exception, set the <code>skipResourceInUseCheck</code> parameter to <code>true</code>.</p>',
    operationId: 'DeleteSlotType',
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
        slotTypeId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'slotTypeId',
              in: 'path',
              required: true,
              description: 'The identifier of the slot type to delete.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'botId',
              in: 'path',
              required: true,
              description: 'The identifier of the bot associated with the slot type.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botVersion: z
          .string()
          .regex(/^DRAFT$/)
          .length(5)
          .openapi({
            param: {
              name: 'botVersion',
              in: 'path',
              required: true,
              description: 'The version of the bot associated with the slot type.',
              schema: { type: 'string', pattern: '^DRAFT$', minLength: 5, maxLength: 5 },
            },
          }),
        localeId: z
          .string()
          .openapi({
            param: {
              name: 'localeId',
              in: 'path',
              required: true,
              description:
                'The identifier of the language and locale that the slot type will be deleted from. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.',
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        skipResourceInUseCheck: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              name: 'skipResourceInUseCheck',
              in: 'query',
              required: false,
              description:
                'By default, the <code>DeleteSlotType</code> operations throws a <code>ResourceInUseException</code> exception if you try to delete a slot type used by a slot. Set the <code>skipResourceInUseCheck</code> parameter to <code>true</code> to skip this check and remove the slot type even if a slot uses it.',
              schema: { type: 'boolean' },
            },
          }),
      }),
    },
    responses: {
      204: { description: 'Success' },
      480: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      481: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
      482: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      483: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      484: {
        description: 'PreconditionFailedException',
        content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
      },
      485: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const deleteBotsBotIdUtterancesIndexRoute = createRoute({
  method: 'delete',
  path: '/bots/{botId}/utterances/',
  description:
    '<p>Deletes stored utterances.</p> <p>Amazon Lex stores the utterances that users send to your bot. Utterances are stored for 15 days for use with the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListAggregatedUtterances.html">ListAggregatedUtterances</a> operation, and then stored indefinitely for use in improving the ability of your bot to respond to user input..</p> <p>Use the <code>DeleteUtterances</code> operation to manually delete utterances for a specific session. When you use the <code>DeleteUtterances</code> operation, utterances stored for improving your bot\'s ability to respond to user input are deleted immediately. Utterances stored for use with the <code>ListAggregatedUtterances</code> operation are deleted after 15 days.</p>',
  operationId: 'DeleteUtterances',
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
      botId: z
        .string()
        .regex(/^[0-9a-zA-Z]+$/)
        .length(10)
        .openapi({
          param: {
            name: 'botId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the bot that contains the utterances.',
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
          },
        }),
    }),
    query: z.object({
      localeId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'localeId',
            in: 'query',
            required: false,
            description:
              'The identifier of the language and locale where the utterances were collected. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.',
            schema: { type: 'string' },
          },
        }),
      sessionId: z
        .string()
        .regex(/[0-9a-zA-Z._:-]+/)
        .min(2)
        .max(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'sessionId',
            in: 'query',
            required: false,
            description:
              'The unique identifier of the session with the user. The ID is returned in the response from the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_runtime_RecognizeText.html">RecognizeText</a> and <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_runtime_RecognizeUtterance.html">RecognizeUtterance</a> operations.',
            schema: { type: 'string', pattern: '[0-9a-zA-Z._:-]+', minLength: 2, maxLength: 100 },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteUtterancesResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIndexRoute =
  createRoute({
    method: 'get',
    path: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/',
    description:
      'Provides metadata information about a bot recommendation. This information will enable you to get a description on the request inputs, to download associated transcripts after processing is complete, and to download intents and slot-types generated by the bot recommendation.',
    operationId: 'DescribeBotRecommendation',
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
        botId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'botId',
              in: 'path',
              required: true,
              description:
                'The unique identifier of the bot associated with the bot recommendation.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botVersion: z
          .string()
          .regex(/^DRAFT$/)
          .length(5)
          .openapi({
            param: {
              name: 'botVersion',
              in: 'path',
              required: true,
              description: 'The version of the bot associated with the bot recommendation.',
              schema: { type: 'string', pattern: '^DRAFT$', minLength: 5, maxLength: 5 },
            },
          }),
        localeId: z
          .string()
          .openapi({
            param: {
              name: 'localeId',
              in: 'path',
              required: true,
              description:
                'The identifier of the language and locale of the bot recommendation to describe. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.',
              schema: { type: 'string' },
            },
          }),
        botRecommendationId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'botRecommendationId',
              in: 'path',
              required: true,
              description: 'The identifier of the bot recommendation to describe.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeBotRecommendationResponseSchema } },
      },
      480: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      481: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIndexRoute =
  createRoute({
    method: 'put',
    path: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/',
    description: 'Updates an existing bot recommendation request.',
    operationId: 'UpdateBotRecommendation',
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
        botId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'botId',
              in: 'path',
              required: true,
              description:
                'The unique identifier of the bot containing the bot recommendation to be updated.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botVersion: z
          .string()
          .regex(/^DRAFT$/)
          .length(5)
          .openapi({
            param: {
              name: 'botVersion',
              in: 'path',
              required: true,
              description:
                'The version of the bot containing the bot recommendation to be updated.',
              schema: { type: 'string', pattern: '^DRAFT$', minLength: 5, maxLength: 5 },
            },
          }),
        localeId: z
          .string()
          .openapi({
            param: {
              name: 'localeId',
              in: 'path',
              required: true,
              description:
                'The identifier of the language and locale of the bot recommendation to update. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a> ',
              schema: { type: 'string' },
            },
          }),
        botRecommendationId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'botRecommendationId',
              in: 'path',
              required: true,
              description: 'The unique identifier of the bot recommendation to be updated.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                encryptionSetting: z
                  .object({
                    kmsKeyArn: KmsKeyArnSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The KMS key ARN used to encrypt the metadata associated with the bot recommendation.',
                        }),
                    ).exactOptional(),
                    botLocaleExportPassword: FilePasswordSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The password used to encrypt the recommended bot recommendation file.',
                        }),
                    ).exactOptional(),
                    associatedTranscriptsPassword: FilePasswordSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The password used to encrypt the associated transcript file.',
                        }),
                    ).exactOptional(),
                  })
                  .openapi({
                    description:
                      'The object representing the passwords that were used to encrypt the data related to the bot recommendation, as well as the KMS key ARN used to encrypt the associated metadata.',
                    required: [],
                  }),
              })
              .openapi({ required: ['encryptionSetting'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      202: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateBotRecommendationResponseSchema } },
      },
      480: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      481: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
      482: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      483: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      484: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      485: {
        description: 'PreconditionFailedException',
        content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
      },
      486: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      487: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTMetadataRoute =
  createRoute({
    method: 'get',
    path: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/metadata',
    description: 'Provides metadata information about a custom vocabulary.',
    operationId: 'DescribeCustomVocabularyMetadata',
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
        botId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'botId',
              in: 'path',
              required: true,
              description: 'The unique identifier of the bot that contains the custom vocabulary.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botVersion: z
          .string()
          .regex(/^(DRAFT|[0-9]+)$/)
          .min(1)
          .max(5)
          .openapi({
            param: {
              name: 'botVersion',
              in: 'path',
              required: true,
              description: 'The bot version of the bot to return metadata for.',
              schema: { type: 'string', pattern: '^(DRAFT|[0-9]+)$', minLength: 1, maxLength: 5 },
            },
          }),
        localeId: z
          .string()
          .openapi({
            param: {
              name: 'localeId',
              in: 'path',
              required: true,
              description:
                'The locale to return the custom vocabulary information for. The locale must be <code>en_GB</code>.',
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeCustomVocabularyMetadataResponseSchema } },
      },
      480: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      481: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
      482: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      483: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      484: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const postBotsBotIdAggregatedutterancesIndexRoute = createRoute({
  method: 'post',
  path: '/bots/{botId}/aggregatedutterances/',
  description:
    '<p>Provides a list of utterances that users have sent to the bot.</p> <p>Utterances are aggregated by the text of the utterance. For example, all instances where customers used the phrase "I want to order pizza" are aggregated into the same line in the response.</p> <p>You can see both detected utterances and missed utterances. A detected utterance is where the bot properly recognized the utterance and activated the associated intent. A missed utterance was not recognized by the bot and didn\'t activate an intent.</p> <p>Utterances can be aggregated for a bot alias or for a bot version, but not both at the same time.</p> <p>Utterances statistics are not generated under the following conditions:</p> <ul> <li> <p>The <code>childDirected</code> field was set to true when the bot was created.</p> </li> <li> <p>You are using slot obfuscation with one or more slots.</p> </li> <li> <p>You opted out of participating in improving Amazon Lex.</p> </li> </ul>',
  operationId: 'ListAggregatedUtterances',
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
      botId: z
        .string()
        .regex(/^[0-9a-zA-Z]+$/)
        .length(10)
        .openapi({
          param: {
            name: 'botId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the bot associated with this request.',
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              botAliasId: z
                .string()
                .regex(/^(\bTSTALIASID\b|[0-9a-zA-Z]+)$/)
                .length(10)
                .exactOptional()
                .openapi({
                  description:
                    "The identifier of the bot alias associated with this request. If you specify the bot alias, you can't specify the bot version.",
                }),
              botVersion: z
                .string()
                .regex(/^(DRAFT|[0-9]+)$/)
                .min(1)
                .max(5)
                .exactOptional()
                .openapi({
                  description:
                    "The identifier of the bot version associated with this request. If you specify the bot version, you can't specify the bot alias.",
                }),
              localeId: z
                .string()
                .openapi({
                  description:
                    'The identifier of the language and locale where the utterances were collected. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.',
                }),
              aggregationDuration: z
                .object({
                  relativeAggregationDuration: RelativeAggregationDurationSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The desired time window for aggregating utterances. ',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Provides parameters for setting the time window and duration for aggregating utterance data.',
                  required: [],
                }),
              sortBy: z
                .object({
                  attribute: AggregatedUtterancesSortAttributeSchema.and(
                    z.any().openapi({ description: 'The utterance attribute to sort by.' }),
                  ).exactOptional(),
                  order: SortOrderSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies whether to sort the aggregated utterances in ascending or descending order.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Specifies attributes for sorting a list of utterances.',
                  required: [],
                }),
              filters: z
                .array(AggregatedUtterancesFilterSchema)
                .length(1)
                .exactOptional()
                .openapi({
                  description:
                    'Provides the specification of a filter used to limit the utterances in the response to only those that match the filter specification. You can only specify one filter and one string to filter on.',
                }),
              maxResults: z
                .int()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({
                  description:
                    "The maximum number of utterances to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned. If you don't specify the <code>maxResults</code> parameter, 1,000 results are returned.",
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If the response from the <code>ListAggregatedUtterances</code> operation contains more results that specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token in the <code>nextToken</code> parameter to return the next page of results.',
                }),
            })
            .openapi({ required: ['localeId', 'aggregationDuration'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAggregatedUtterancesResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsIndexRoute =
  createRoute({
    method: 'put',
    path: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/',
    description:
      'Use this to provide your transcript data, and to start the bot recommendation process.',
    operationId: 'StartBotRecommendation',
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
        botId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'botId',
              in: 'path',
              required: true,
              description: 'The unique identifier of the bot containing the bot recommendation.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botVersion: z
          .string()
          .regex(/^DRAFT$/)
          .length(5)
          .openapi({
            param: {
              name: 'botVersion',
              in: 'path',
              required: true,
              description: 'The version of the bot containing the bot recommendation.',
              schema: { type: 'string', pattern: '^DRAFT$', minLength: 5, maxLength: 5 },
            },
          }),
        localeId: z
          .string()
          .openapi({
            param: {
              name: 'localeId',
              in: 'path',
              required: true,
              description:
                'The identifier of the language and locale of the bot recommendation to start. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a> ',
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                transcriptSourceSetting: z
                  .object({
                    s3BucketTranscriptSource: S3BucketTranscriptSourceSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Indicates the setting of the Amazon S3 bucket where the transcript is stored.',
                        }),
                    ).exactOptional(),
                  })
                  .openapi({
                    description:
                      'Indicates the setting of the location where the transcript is stored.',
                    required: [],
                  }),
                encryptionSetting: z
                  .object({
                    kmsKeyArn: KmsKeyArnSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The KMS key ARN used to encrypt the metadata associated with the bot recommendation.',
                        }),
                    ).exactOptional(),
                    botLocaleExportPassword: FilePasswordSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The password used to encrypt the recommended bot recommendation file.',
                        }),
                    ).exactOptional(),
                    associatedTranscriptsPassword: FilePasswordSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The password used to encrypt the associated transcript file.',
                        }),
                    ).exactOptional(),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      'The object representing the passwords that were used to encrypt the data related to the bot recommendation, as well as the KMS key ARN used to encrypt the associated metadata.',
                    required: [],
                  }),
              })
              .openapi({ required: ['transcriptSourceSetting'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      202: {
        description: 'Success',
        content: { 'application/json': { schema: StartBotRecommendationResponseSchema } },
      },
      480: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      481: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
      482: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      483: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      484: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      485: {
        description: 'PreconditionFailedException',
        content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
      },
      486: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      487: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const postBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsIndexRoute =
  createRoute({
    method: 'post',
    path: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/',
    description: 'Get a list of bot recommendations that meet the specified criteria.',
    operationId: 'ListBotRecommendations',
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
        botId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'botId',
              in: 'path',
              required: true,
              description:
                'The unique identifier of the bot that contains the bot recommendation list.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botVersion: z
          .string()
          .regex(/^DRAFT$/)
          .length(5)
          .openapi({
            param: {
              name: 'botVersion',
              in: 'path',
              required: true,
              description: 'The version of the bot that contains the bot recommendation list.',
              schema: { type: 'string', pattern: '^DRAFT$', minLength: 5, maxLength: 5 },
            },
          }),
        localeId: z
          .string()
          .openapi({
            param: {
              name: 'localeId',
              in: 'path',
              required: true,
              description:
                'The identifier of the language and locale of the bot recommendation list.',
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        maxResults: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'maxResults',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        nextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'nextToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                maxResults: z
                  .int()
                  .min(1)
                  .max(1000)
                  .exactOptional()
                  .openapi({
                    description:
                      'The maximum number of bot recommendations to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.',
                  }),
                nextToken: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'If the response from the ListBotRecommendation operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results.',
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
        content: { 'application/json': { schema: ListBotRecommendationsResponseSchema } },
      },
      480: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      481: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      482: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      483: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
    },
  })

export const postBuiltinsLocalesLocaleIdIntentsIndexRoute = createRoute({
  method: 'post',
  path: '/builtins/locales/{localeId}/intents/',
  description:
    '<p>Gets a list of built-in intents provided by Amazon Lex that you can use in your bot. </p> <p>To use a built-in intent as a the base for your own intent, include the built-in intent signature in the <code>parentIntentSignature</code> parameter when you call the <code>CreateIntent</code> operation. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateIntent.html">CreateIntent</a>.</p>',
  operationId: 'ListBuiltInIntents',
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
      localeId: z
        .string()
        .openapi({
          param: {
            name: 'localeId',
            in: 'path',
            required: true,
            description:
              'The identifier of the language and locale of the intents to list. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              sortBy: z
                .object({
                  attribute: BuiltInIntentSortAttributeSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The attribute to use to sort the list of built-in intents.',
                      }),
                  ).exactOptional(),
                  order: SortOrderSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The order to sort the list. You can specify ascending or descending order.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Specifies attributes for sorting a list of built-in intents.',
                  required: [],
                }),
              maxResults: z
                .int()
                .min(20)
                .max(20)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of built-in intents to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.',
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If the response from the <code>ListBuiltInIntents</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token in the <code>nextToken</code> parameter to return the next page of results.',
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
      content: { 'application/json': { schema: ListBuiltInIntentsResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postBuiltinsLocalesLocaleIdSlottypesIndexRoute = createRoute({
  method: 'post',
  path: '/builtins/locales/{localeId}/slottypes/',
  description: 'Gets a list of built-in slot types that meet the specified criteria.',
  operationId: 'ListBuiltInSlotTypes',
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
      localeId: z
        .string()
        .openapi({
          param: {
            name: 'localeId',
            in: 'path',
            required: true,
            description:
              'The identifier of the language and locale of the slot types to list. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              sortBy: z
                .object({
                  attribute: BuiltInSlotTypeSortAttributeSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The attribute to use to sort the list of built-in intents.',
                      }),
                  ).exactOptional(),
                  order: SortOrderSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The order to sort the list. You can choose ascending or descending.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Specifies attributes for sorting a list of built-in slot types.',
                  required: [],
                }),
              maxResults: z
                .int()
                .min(20)
                .max(20)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of built-in slot types to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.',
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If the response from the <code>ListBuiltInSlotTypes</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token in the <code>nextToken</code> parameter to return the next page of results.',
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
      content: { 'application/json': { schema: ListBuiltInSlotTypesResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTListRoute =
  createRoute({
    method: 'post',
    path: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/list',
    description:
      "Paginated list of custom vocabulary items for a given bot locale's custom vocabulary.",
    operationId: 'ListCustomVocabularyItems',
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
        botId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'botId',
              in: 'path',
              required: true,
              description:
                'The identifier of the version of the bot associated with this custom vocabulary.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botVersion: z
          .string()
          .regex(/^(DRAFT|[0-9]+)$/)
          .min(1)
          .max(5)
          .openapi({
            param: {
              name: 'botVersion',
              in: 'path',
              required: true,
              description: 'The bot version of the bot to the list custom vocabulary request.',
              schema: { type: 'string', pattern: '^(DRAFT|[0-9]+)$', minLength: 1, maxLength: 5 },
            },
          }),
        localeId: z
          .string()
          .openapi({
            param: {
              name: 'localeId',
              in: 'path',
              required: true,
              description:
                'The identifier of the language and locale where this custom vocabulary is used. The string must match one of the supported locales. For more information, see Supported languages (https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).',
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        maxResults: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'maxResults',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        nextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'nextToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                maxResults: z
                  .int()
                  .min(1)
                  .max(1000)
                  .exactOptional()
                  .openapi({
                    description: 'The maximum number of items returned by the list operation.',
                  }),
                nextToken: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The nextToken identifier to the list custom vocabulary request.',
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
        content: { 'application/json': { schema: ListCustomVocabularyItemsResponseSchema } },
      },
      480: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      481: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
      482: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      483: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      484: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const putImportsIndexRoute = createRoute({
  method: 'put',
  path: '/imports/',
  description:
    'Starts importing a bot, bot locale, or custom vocabulary from a zip archive that you uploaded to an S3 bucket.',
  operationId: 'StartImport',
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
              importId: z
                .string()
                .regex(/^[0-9a-zA-Z]+$/)
                .length(10)
                .openapi({
                  description:
                    'The unique identifier for the import. It is included in the response from the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateUploadUrl.html">CreateUploadUrl</a> operation.',
                }),
              resourceSpecification: z
                .object({
                  botImportSpecification: BotImportSpecificationSchema.and(
                    z.any().openapi({ description: 'Parameters for importing a bot.' }),
                  ).exactOptional(),
                  botLocaleImportSpecification: BotLocaleImportSpecificationSchema.and(
                    z.any().openapi({ description: 'Parameters for importing a bot locale.' }),
                  ).exactOptional(),
                  customVocabularyImportSpecification:
                    CustomVocabularyImportSpecificationSchema.exactOptional(),
                })
                .openapi({
                  description:
                    'Provides information about the bot or bot locale that you want to import. You can specify the <code>botImportSpecification</code> or the <code>botLocaleImportSpecification</code>, but not both.',
                  required: [],
                }),
              mergeStrategy: z
                .enum(['Overwrite', 'FailOnConflict', 'Append'])
                .openapi({
                  description:
                    'The strategy to use when there is a name conflict between the imported resource and an existing resource. When the merge strategy is <code>FailOnConflict</code> existing resources are not overwritten and the import fails.',
                }),
              filePassword: z
                .string()
                .min(1)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The password used to encrypt the zip archive that contains the resource definition. You should always encrypt the zip archive to protect it during transit between your site and Amazon Lex.',
                }),
            })
            .openapi({ required: ['importId', 'resourceSpecification', 'mergeStrategy'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: StartImportResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postImportsIndexRoute = createRoute({
  method: 'post',
  path: '/imports/',
  description:
    'Lists the imports for a bot, bot locale, or custom vocabulary. Imports are kept in the list for 7 days.',
  operationId: 'ListImports',
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
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              botId: z
                .string()
                .regex(/^[0-9a-zA-Z]+$/)
                .length(10)
                .exactOptional()
                .openapi({
                  description: 'The unique identifier that Amazon Lex assigned to the bot.',
                }),
              botVersion: z
                .string()
                .regex(/^DRAFT$/)
                .length(5)
                .exactOptional()
                .openapi({ description: 'The version of the bot to list imports for.' }),
              sortBy: z
                .object({
                  attribute: ImportSortAttributeSchema.and(
                    z.any().openapi({ description: 'The export field to use for sorting.' }),
                  ).exactOptional(),
                  order: SortOrderSchema.and(
                    z.any().openapi({ description: 'The order to sort the list.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Provides information for sorting a list of imports.',
                  required: [],
                }),
              filters: z
                .array(ImportFilterSchema)
                .length(1)
                .exactOptional()
                .openapi({
                  description:
                    'Provides the specification of a filter used to limit the bots in the response to only those that match the filter specification. You can only specify one filter and one string to filter on.',
                }),
              maxResults: z
                .int()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of imports to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.',
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>If the response from the <code>ListImports</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response.</p> <p>Use the returned token in the <code>nextToken</code> parameter of a <code>ListImports</code> request to return the next page of results. For a complete set of results, call the <code>ListImports</code> operation until the <code>nextToken</code> returned in the response is null.</p>',
                }),
              localeId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Specifies the locale that should be present in the list. If you don't specify a resource type in the <code>filters</code> parameter, the list contains both bot locales and custom vocabularies.",
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
      content: { 'application/json': { schema: ListImportsResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIntentsRoute =
  createRoute({
    method: 'post',
    path: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/intents',
    description:
      'Gets a list of recommended intents provided by the bot recommendation that you can use in your bot. Intents in the response are ordered by relevance.',
    operationId: 'ListRecommendedIntents',
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
        botId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'botId',
              in: 'path',
              required: true,
              description:
                'The unique identifier of the bot associated with the recommended intents.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botVersion: z
          .string()
          .regex(/^DRAFT$/)
          .length(5)
          .openapi({
            param: {
              name: 'botVersion',
              in: 'path',
              required: true,
              description: 'The version of the bot that contains the recommended intents.',
              schema: { type: 'string', pattern: '^DRAFT$', minLength: 5, maxLength: 5 },
            },
          }),
        localeId: z
          .string()
          .openapi({
            param: {
              name: 'localeId',
              in: 'path',
              required: true,
              description: 'The identifier of the language and locale of the recommended intents.',
              schema: { type: 'string' },
            },
          }),
        botRecommendationId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'botRecommendationId',
              in: 'path',
              required: true,
              description:
                'The identifier of the bot recommendation that contains the recommended intents.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
      }),
      query: z.object({
        maxResults: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'maxResults',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        nextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'nextToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                nextToken: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'If the response from the ListRecommendedIntents operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results.',
                  }),
                maxResults: z
                  .int()
                  .min(1)
                  .max(1000)
                  .exactOptional()
                  .openapi({
                    description:
                      'The maximum number of bot recommendations to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.',
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
        content: { 'application/json': { schema: ListRecommendedIntentsResponseSchema } },
      },
      480: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      481: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
      482: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      483: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      484: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
    },
  })

export const getTagsResourceARNRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceARN}',
  description:
    'Gets a list of tags associated with a resource. Only bots, bot aliases, and bot channels can have tags associated with them.',
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
    }),
    params: z.object({
      resourceARN: z
        .string()
        .min(1)
        .max(1011)
        .openapi({
          param: {
            name: 'resourceARN',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the resource to get a list of tags for.',
            schema: { type: 'string', minLength: 1, maxLength: 1011 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postTagsResourceARNRoute = createRoute({
  method: 'post',
  path: '/tags/{resourceARN}',
  description:
    'Adds the specified tags to the specified resource. If a tag key already exists, the existing value is replaced with the new value.',
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
    }),
    params: z.object({
      resourceARN: z
        .string()
        .min(1)
        .max(1011)
        .openapi({
          param: {
            name: 'resourceARN',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the bot, bot alias, or bot channel to tag.',
            schema: { type: 'string', minLength: 1, maxLength: 1011 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 200)
                .openapi({
                  description:
                    'A list of tag keys to add to the resource. If a tag key already exists, the existing value is replaced with the new value.',
                }),
            })
            .openapi({ required: ['tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdAssociatedtranscriptsRoute =
  createRoute({
    method: 'post',
    path: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/associatedtranscripts',
    description: 'Search for associated transcripts that meet the specified criteria.',
    operationId: 'SearchAssociatedTranscripts',
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
        botId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'botId',
              in: 'path',
              required: true,
              description:
                'The unique identifier of the bot associated with the transcripts that you are searching.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botVersion: z
          .string()
          .regex(/^(DRAFT|[0-9]+)$/)
          .min(1)
          .max(5)
          .openapi({
            param: {
              name: 'botVersion',
              in: 'path',
              required: true,
              description:
                'The version of the bot containing the transcripts that you are searching.',
              schema: { type: 'string', pattern: '^(DRAFT|[0-9]+)$', minLength: 1, maxLength: 5 },
            },
          }),
        localeId: z
          .string()
          .openapi({
            param: {
              name: 'localeId',
              in: 'path',
              required: true,
              description:
                'The identifier of the language and locale of the transcripts to search. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a> ',
              schema: { type: 'string' },
            },
          }),
        botRecommendationId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'botRecommendationId',
              in: 'path',
              required: true,
              description:
                'The unique identifier of the bot recommendation associated with the transcripts to search.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                searchOrder: z
                  .enum(['Ascending', 'Descending'])
                  .exactOptional()
                  .openapi({
                    description:
                      'How SearchResults are ordered. Valid values are Ascending or Descending. The default is Descending.',
                  }),
                filters: z
                  .array(AssociatedTranscriptFilterSchema)
                  .length(1)
                  .openapi({ description: 'A list of filter objects.' }),
                maxResults: z
                  .int()
                  .min(1)
                  .max(1000)
                  .exactOptional()
                  .openapi({
                    description:
                      'The maximum number of bot recommendations to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.',
                  }),
                nextIndex: z
                  .int()
                  .min(0)
                  .max(10000000)
                  .exactOptional()
                  .openapi({
                    description:
                      'If the response from the SearchAssociatedTranscriptsRequest operation contains more results than specified in the maxResults parameter, an index is returned in the response. Use that index in the nextIndex parameter to return the next page of results.',
                  }),
              })
              .openapi({ required: ['filters'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: SearchAssociatedTranscriptsResponseSchema } },
      },
      480: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      481: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
      482: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      483: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      484: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
    },
  })

export const putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdStopbotrecommendationRoute =
  createRoute({
    method: 'put',
    path: '/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/stopbotrecommendation',
    description: 'Stop an already running Bot Recommendation request.',
    operationId: 'StopBotRecommendation',
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
        botId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'botId',
              in: 'path',
              required: true,
              description:
                'The unique identifier of the bot containing the bot recommendation to be stopped.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botVersion: z
          .string()
          .regex(/^DRAFT$/)
          .length(5)
          .openapi({
            param: {
              name: 'botVersion',
              in: 'path',
              required: true,
              description: 'The version of the bot containing the bot recommendation.',
              schema: { type: 'string', pattern: '^DRAFT$', minLength: 5, maxLength: 5 },
            },
          }),
        localeId: z
          .string()
          .openapi({
            param: {
              name: 'localeId',
              in: 'path',
              required: true,
              description:
                'The identifier of the language and locale of the bot recommendation to stop. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a> ',
              schema: { type: 'string' },
            },
          }),
        botRecommendationId: z
          .string()
          .regex(/^[0-9a-zA-Z]+$/)
          .length(10)
          .openapi({
            param: {
              name: 'botRecommendationId',
              in: 'path',
              required: true,
              description: 'The unique identifier of the bot recommendation to be stopped.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
      }),
    },
    responses: {
      202: {
        description: 'Success',
        content: { 'application/json': { schema: StopBotRecommendationResponseSchema } },
      },
      480: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      481: {
        description: 'ServiceQuotaExceededException',
        content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
      },
      482: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      483: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      484: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      485: {
        description: 'PreconditionFailedException',
        content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
      },
      486: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      487: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const deleteTagsResourceARNTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resourceARN}#tagKeys',
  description: 'Removes tags from a bot, bot alias, or bot channel.',
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
    }),
    params: z.object({
      resourceARN: z
        .string()
        .min(1)
        .max(1011)
        .openapi({
          param: {
            name: 'resourceARN',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource to remove the tags from.',
            schema: { type: 'string', minLength: 1, maxLength: 1011 },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema).min(0).max(200),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description:
              'A list of tag keys to remove from the resource. If a tag key does not exist on the resource, it is ignored.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/TagKey' },
              minItems: 0,
              maxItems: 200,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})
