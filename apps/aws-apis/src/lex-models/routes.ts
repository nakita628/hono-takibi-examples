import { createRoute, z } from '@hono/zod-openapi'

const BotNameSchema = z
  .string()
  .regex(/^([A-Za-z]_?)+$/)
  .min(2)
  .max(50)
  .openapi('BotName')

const DescriptionSchema = z.string().min(0).max(200).openapi('Description')

const IntentNameSchema = z
  .string()
  .regex(/^([A-Za-z]_?)+$/)
  .min(1)
  .max(100)
  .openapi('IntentName')

const VersionSchema = z
  .string()
  .regex(/\$LATEST|[0-9]+/)
  .min(1)
  .max(64)
  .openapi('Version')

const IntentSchema = z
  .object({
    intentName: IntentNameSchema.and(z.any().openapi({ description: 'The name of the intent.' })),
    intentVersion: VersionSchema.and(
      z.any().openapi({ description: 'The version of the intent.' }),
    ),
  })
  .openapi({
    required: ['intentName', 'intentVersion'],
    description: 'Identifies the specific version of an intent.',
  })
  .openapi('Intent')

const IntentListSchema = z.array(IntentSchema).openapi('IntentList')

const ContentTypeSchema = z.enum(['PlainText', 'SSML', 'CustomPayload']).openapi('ContentType')

const ContentStringSchema = z.string().min(1).max(1000).openapi('ContentString')

const GroupNumberSchema = z.int().min(1).max(5).openapi('GroupNumber')

const MessageSchema = z
  .object({
    contentType: ContentTypeSchema.and(
      z.any().openapi({ description: 'The content type of the message string.' }),
    ),
    content: ContentStringSchema.and(z.any().openapi({ description: 'The text of the message.' })),
    groupNumber: GroupNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifies the message group that the message belongs to. When a group is assigned to a message, Amazon Lex returns one message from each group in the response.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['contentType', 'content'],
    description: 'The message object that provides the message text and its type.',
  })
  .openapi('Message')

const MessageListSchema = z.array(MessageSchema).min(1).max(15).openapi('MessageList')

const PromptMaxAttemptsSchema = z.int().min(1).max(5).openapi('PromptMaxAttempts')

const ResponseCardSchema = z.string().min(1).max(50000).openapi('ResponseCard')

const PromptSchema = z
  .object({
    messages: MessageListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects, each of which provides a message string and its type. You can specify the message string in plain text or in Speech Synthesis Markup Language (SSML).',
        }),
    ),
    maxAttempts: PromptMaxAttemptsSchema.and(
      z.any().openapi({ description: 'The number of times to prompt the user for information.' }),
    ),
    responseCard: ResponseCardSchema.and(
      z
        .any()
        .openapi({
          description:
            'A response card. Amazon Lex uses this prompt at runtime, in the <code>PostText</code> API response. It substitutes session attributes and slot values for placeholders in the response card. For more information, see <a>ex-resp-card</a>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['messages', 'maxAttempts'],
    description:
      'Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>.',
  })
  .openapi('Prompt')

const StatementSchema = z
  .object({
    messages: MessageListSchema.and(
      z.any().openapi({ description: 'A collection of message objects.' }),
    ),
    responseCard: ResponseCardSchema.and(
      z
        .any()
        .openapi({
          description:
            ' At runtime, if the client is using the <a href="http://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html">PostText</a> API, Amazon Lex includes the response card in the response. It substitutes all of the session attributes and slot values for placeholders in the response card. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['messages'],
    description:
      'A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. ',
  })
  .openapi('Statement')

const StatusSchema = z
  .enum(['BUILDING', 'READY', 'READY_BASIC_TESTING', 'FAILED', 'NOT_BUILT'])
  .openapi('Status')

const StringSchema = z.string().openapi('String')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const SessionTTLSchema = z.int().min(60).max(86400).openapi('SessionTTL')

const LocaleSchema = z
  .enum([
    'de-DE',
    'en-AU',
    'en-GB',
    'en-IN',
    'en-US',
    'es-419',
    'es-ES',
    'es-US',
    'fr-FR',
    'fr-CA',
    'it-IT',
    'ja-JP',
    'ko-KR',
  ])
  .openapi('Locale')

const BooleanSchema = z.boolean().openapi('Boolean')

const CreateBotVersionResponseSchema = z
  .object({
    name: BotNameSchema.and(
      z.any().openapi({ description: 'The name of the bot.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the bot.' }),
    ).exactOptional(),
    intents: IntentListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>Intent</code> objects. For more information, see <a>PutBot</a>.',
        }),
    ).exactOptional(),
    clarificationPrompt: PromptSchema.and(
      z
        .any()
        .openapi({
          description:
            "The message that Amazon Lex uses when it doesn't understand the user's request. For more information, see <a>PutBot</a>. ",
        }),
    ).exactOptional(),
    abortStatement: StatementSchema.and(
      z
        .any()
        .openapi({
          description:
            'The message that Amazon Lex uses to cancel a conversation. For more information, see <a>PutBot</a>.',
        }),
    ).exactOptional(),
    status: StatusSchema.and(
      z
        .any()
        .openapi({
          description:
            " When you send a request to create or update a bot, Amazon Lex sets the <code>status</code> response element to <code>BUILDING</code>. After Amazon Lex builds the bot, it sets <code>status</code> to <code>READY</code>. If Amazon Lex can't build the bot, it sets <code>status</code> to <code>FAILED</code>. Amazon Lex returns the reason for the failure in the <code>failureReason</code> response element. ",
        }),
    ).exactOptional(),
    failureReason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>status</code> is <code>FAILED</code>, Amazon Lex provides the reason that it failed to build the bot.',
        }),
    ).exactOptional(),
    lastUpdatedDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date when the <code>$LATEST</code> version of this bot was updated. ',
        }),
    ).exactOptional(),
    createdDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date when the bot version was created.' }),
    ).exactOptional(),
    idleSessionTTLInSeconds: SessionTTLSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum time in seconds that Amazon Lex retains the data gathered in a conversation. For more information, see <a>PutBot</a>.',
        }),
    ).exactOptional(),
    voiceId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Polly voice ID that Amazon Lex uses for voice interactions with the user.',
        }),
    ).exactOptional(),
    checksum: StringSchema.and(
      z
        .any()
        .openapi({ description: 'Checksum identifying the version of the bot that was created.' }),
    ).exactOptional(),
    version: VersionSchema.and(
      z.any().openapi({ description: 'The version of the bot. ' }),
    ).exactOptional(),
    locale: LocaleSchema.and(
      z.any().openapi({ description: ' Specifies the target locale for the bot. ' }),
    ).exactOptional(),
    childDirected: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For each Amazon Lex bot created with the Amazon Lex Model Building Service, you must specify whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to the Children\'s Online Privacy Protection Act (COPPA) by specifying <code>true</code> or <code>false</code> in the <code>childDirected</code> field. By specifying <code>true</code> in the <code>childDirected</code> field, you confirm that your use of Amazon Lex <b>is</b> related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. By specifying <code>false</code> in the <code>childDirected</code> field, you confirm that your use of Amazon Lex <b>is not</b> related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. You may not specify a default value for the <code>childDirected</code> field that does not accurately reflect whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA.</p> <p>If your use of Amazon Lex relates to a website, program, or other application that is directed in whole or in part, to children under age 13, you must obtain any required verifiable parental consent under COPPA. For information regarding the use of Amazon Lex in connection with websites, programs, or other applications that are directed or targeted, in whole or in part, to children under age 13, see the <a href="https://aws.amazon.com/lex/faqs#data-security">Amazon Lex FAQ.</a> </p>',
        }),
    ).exactOptional(),
    enableModelImprovements: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the bot uses accuracy improvements. <code>true</code> indicates that the bot is using the improvements, otherwise, <code>false</code>.',
        }),
    ).exactOptional(),
    detectSentiment: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether utterances entered by the user should be sent to Amazon Comprehend for sentiment analysis.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateBotVersionResponse')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const InternalFailureExceptionSchema = z.any().openapi('InternalFailureException')

const BadRequestExceptionSchema = z.any().openapi('BadRequestException')

const PreconditionFailedExceptionSchema = z.any().openapi('PreconditionFailedException')

const SlotNameSchema = z
  .string()
  .regex(/^([A-Za-z](-|_|.)?)+$/)
  .min(1)
  .max(100)
  .openapi('SlotName')

const SlotConstraintSchema = z.enum(['Required', 'Optional']).openapi('SlotConstraint')

const CustomOrBuiltinSlotTypeNameSchema = z
  .string()
  .regex(/^((AMAZON\.)_?|[A-Za-z]_?)+/)
  .min(1)
  .max(100)
  .openapi('CustomOrBuiltinSlotTypeName')

const PrioritySchema = z.int().min(0).max(100).openapi('Priority')

const UtteranceSchema = z.string().min(1).max(200).openapi('Utterance')

const SlotUtteranceListSchema = z.array(UtteranceSchema).min(0).max(10).openapi('SlotUtteranceList')

const ObfuscationSettingSchema = z
  .enum(['NONE', 'DEFAULT_OBFUSCATION'])
  .openapi('ObfuscationSetting')

const SlotDefaultValueStringSchema = z.string().min(1).max(202).openapi('SlotDefaultValueString')

const SlotDefaultValueSchema = z
  .object({
    defaultValue: SlotDefaultValueStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The default value for the slot. You can specify one of the following:</p> <ul> <li> <p> <code>#context-name.slot-name</code> - The slot value "slot-name" in the context "context-name."</p> </li> <li> <p> <code>{attribute}</code> - The slot value of the session attribute "attribute."</p> </li> <li> <p> <code>\'value\'</code> - The discrete value "value."</p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['defaultValue'], description: 'A default value for a slot.' })
  .openapi('SlotDefaultValue')

const SlotDefaultValueListSchema = z
  .array(SlotDefaultValueSchema)
  .min(0)
  .max(10)
  .openapi('SlotDefaultValueList')

const SlotDefaultValueSpecSchema = z
  .object({
    defaultValueList: SlotDefaultValueListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The default values for a slot. You can specify more than one default. For example, you can specify a default value to use from a matching context variable, a session attribute, or a fixed value.</p> <p>The default value chosen is selected based on the order that you specify them in the list. For example, if you specify a context variable and a fixed value in that order, Amazon Lex uses the context variable if it is available, else it uses the fixed value.</p>',
        }),
    ),
  })
  .openapi({
    required: ['defaultValueList'],
    description:
      "Contains the default values for a slot. Default values are used when Amazon Lex hasn't determined a value for a slot.",
  })
  .openapi('SlotDefaultValueSpec')

const SlotSchema = z
  .object({
    name: SlotNameSchema.and(z.any().openapi({ description: 'The name of the slot.' })),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the slot.' }),
    ).exactOptional(),
    slotConstraint: SlotConstraintSchema.and(
      z.any().openapi({ description: 'Specifies whether the slot is required or optional. ' }),
    ),
    slotType: CustomOrBuiltinSlotTypeNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of the slot, either a custom slot type that you defined or one of the built-in slot types.',
        }),
    ).exactOptional(),
    slotTypeVersion: VersionSchema.and(
      z.any().openapi({ description: 'The version of the slot type.' }),
    ).exactOptional(),
    valueElicitationPrompt: PromptSchema.and(
      z
        .any()
        .openapi({
          description: 'The prompt that Amazon Lex uses to elicit the slot value from the user.',
        }),
    ).exactOptional(),
    priority: PrioritySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Directs Amazon Lex the order in which to elicit this slot value from the user. For example, if the intent has two slots with priorities 1 and 2, AWS Amazon Lex first elicits a value for the slot with priority 1.</p> <p>If multiple slots share the same priority, the order in which Amazon Lex elicits values is arbitrary.</p>',
        }),
    ).exactOptional(),
    sampleUtterances: SlotUtteranceListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If you know a specific pattern with which users might respond to an Amazon Lex request for a slot value, you can provide those utterances to improve accuracy. This is optional. In most cases, Amazon Lex is capable of understanding user utterances. ',
        }),
    ).exactOptional(),
    responseCard: ResponseCardSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A set of possible responses for the slot type used by text-based clients. A user chooses an option from the response card, instead of using text to reply. ',
        }),
    ).exactOptional(),
    obfuscationSetting: ObfuscationSettingSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines whether a slot is obfuscated in conversation logs and stored utterances. When you obfuscate a slot, the value is replaced by the slot name in curly braces ({}). For example, if the slot name is "full_name", obfuscated values are replaced with "{full_name}". For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/how-obfuscate.html"> Slot Obfuscation </a>. ',
        }),
    ).exactOptional(),
    defaultValueSpec: SlotDefaultValueSpecSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of default values for the slot. Default values are used when Amazon Lex hasn't determined a value for a slot. You can specify default values from context variables, session attributes, and defined values.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name', 'slotConstraint'],
    description: 'Identifies the version of a specific slot.',
  })
  .openapi('Slot')

const SlotListSchema = z.array(SlotSchema).min(0).max(100).openapi('SlotList')

const IntentUtteranceListSchema = z
  .array(UtteranceSchema)
  .min(0)
  .max(1500)
  .openapi('IntentUtteranceList')

const FollowUpPromptSchema = z
  .object({
    prompt: PromptSchema.and(
      z.any().openapi({ description: 'Prompts for information from the user. ' }),
    ),
    rejectionStatement: StatementSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the user answers "no" to the question defined in the <code>prompt</code> field, Amazon Lex responds with this statement to acknowledge that the intent was canceled. ',
        }),
    ),
  })
  .openapi({
    required: ['prompt', 'rejectionStatement'],
    description:
      'A prompt for additional activity after an intent is fulfilled. For example, after the <code>OrderPizza</code> intent is fulfilled, you might prompt the user to find out whether the user wants to order drinks.',
  })
  .openapi('FollowUpPrompt')

const LambdaARNSchema = z
  .string()
  .regex(
    /arn:aws[a-zA-Z-]*:lambda:[a-z]+-[a-z]+(-[a-z]+)*-[0-9]:[0-9]{12}:function:[a-zA-Z0-9-_]+(\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})?(:[a-zA-Z0-9-_]+)?/,
  )
  .min(20)
  .max(2048)
  .openapi('LambdaARN')

const MessageVersionSchema = z.string().min(1).max(5).openapi('MessageVersion')

const CodeHookSchema = z
  .object({
    uri: LambdaARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the Lambda function.' }),
    ),
    messageVersion: MessageVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the request-response that you want Amazon Lex to use to invoke your Lambda function. For more information, see <a>using-lambda</a>.',
        }),
    ),
  })
  .openapi({
    required: ['uri', 'messageVersion'],
    description:
      "Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot..",
  })
  .openapi('CodeHook')

const FulfillmentActivityTypeSchema = z
  .enum(['ReturnIntent', 'CodeHook'])
  .openapi('FulfillmentActivityType')

const FulfillmentActivitySchema = z
  .object({
    type: FulfillmentActivityTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' How the intent should be fulfilled, either by running a Lambda function or by returning the slot data to the client application. ',
        }),
    ),
    codeHook: CodeHookSchema.and(
      z
        .any()
        .openapi({
          description: ' A description of the Lambda function that is run to fulfill the intent. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['type'],
    description:
      '<p> Describes how the intent is fulfilled after the user provides all of the information required for the intent. You can provide a Lambda function to process the intent, or you can return the intent information to the client application. We recommend that you use a Lambda function so that the relevant logic lives in the Cloud and limit the client-side code primarily to presentation. If you need to update the logic, you only update the Lambda function; you don\'t need to upgrade your client application. </p> <p>Consider the following examples:</p> <ul> <li> <p>In a pizza ordering application, after the user provides all of the information for placing an order, you use a Lambda function to place an order with a pizzeria. </p> </li> <li> <p>In a gaming application, when a user says "pick up a rock," this information must go back to the client application so that it can perform the operation and update the graphics. In this case, you want Amazon Lex to return the intent data to the client. </p> </li> </ul>',
  })
  .openapi('FulfillmentActivity')

const BuiltinIntentSignatureSchema = z.string().openapi('BuiltinIntentSignature')

const KendraIndexArnSchema = z
  .string()
  .regex(/arn:aws:kendra:[a-z]+-[a-z]+-[0-9]:[0-9]{12}:index\/[a-zA-Z0-9][a-zA-Z0-9_-]*/)
  .min(20)
  .max(2048)
  .openapi('KendraIndexArn')

const QueryFilterStringSchema = z.string().min(0).openapi('QueryFilterString')

const RoleArnSchema = z
  .string()
  .regex(/arn:aws:iam::[0-9]{12}:role\/.*/)
  .min(20)
  .max(2048)
  .openapi('RoleArn')

const KendraConfigurationSchema = z
  .object({
    kendraIndex: KendraIndexArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Amazon Kendra index that you want the AMAZON.KendraSearchIntent intent to search. The index must be in the same account and Region as the Amazon Lex bot. If the Amazon Kendra index does not exist, you get an exception when you call the <code>PutIntent</code> operation.',
        }),
    ),
    queryFilterString: QueryFilterStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A query filter that Amazon Lex sends to Amazon Kendra to filter the response from the query. The filter is in the format defined by Amazon Kendra. For more information, see <a href="http://docs.aws.amazon.com/kendra/latest/dg/filtering.html">Filtering queries</a>.</p> <p>You can override this filter string with a new filter string at runtime.</p>',
        }),
    ).exactOptional(),
    role: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an IAM role that has permission to search the Amazon Kendra index. The role must be in the same account and Region as the Amazon Lex bot. If the role does not exist, you get an exception when you call the <code>PutIntent</code> operation.',
        }),
    ),
  })
  .openapi({
    required: ['kendraIndex', 'role'],
    description:
      'Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user\'s utterance. For more information, see <a href="http://docs.aws.amazon.com/lex/latest/dg/built-in-intent-kendra-search.html"> AMAZON.KendraSearchIntent</a>.',
  })
  .openapi('KendraConfiguration')

const InputContextNameSchema = z
  .string()
  .regex(/^([A-Za-z]_?)+$/)
  .min(1)
  .max(100)
  .openapi('InputContextName')

const InputContextSchema = z
  .object({
    name: InputContextNameSchema.and(z.any().openapi({ description: 'The name of the context.' })),
  })
  .openapi({
    required: ['name'],
    description:
      'The name of a context that must be active for an intent to be selected by Amazon Lex.',
  })
  .openapi('InputContext')

const InputContextListSchema = z.array(InputContextSchema).min(0).max(5).openapi('InputContextList')

const OutputContextNameSchema = z
  .string()
  .regex(/^([A-Za-z]_?)+$/)
  .min(1)
  .max(100)
  .openapi('OutputContextName')

const ContextTimeToLiveInSecondsSchema = z
  .int()
  .min(5)
  .max(86400)
  .openapi('ContextTimeToLiveInSeconds')

const ContextTurnsToLiveSchema = z.int().min(1).max(20).openapi('ContextTurnsToLive')

const OutputContextSchema = z
  .object({
    name: OutputContextNameSchema.and(z.any().openapi({ description: 'The name of the context.' })),
    timeToLiveInSeconds: ContextTimeToLiveInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of seconds that the context should be active after it is first sent in a <code>PostContent</code> or <code>PostText</code> response. You can set the value between 5 and 86,400 seconds (24 hours).',
        }),
    ),
    turnsToLive: ContextTurnsToLiveSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of conversation turns that the context should be active. A conversation turn is one <code>PostContent</code> or <code>PostText</code> request and the corresponding response from Amazon Lex.',
        }),
    ),
  })
  .openapi({
    required: ['name', 'timeToLiveInSeconds', 'turnsToLive'],
    description: 'The specification of an output context that is set when an intent is fulfilled.',
  })
  .openapi('OutputContext')

const OutputContextListSchema = z
  .array(OutputContextSchema)
  .min(0)
  .max(10)
  .openapi('OutputContextList')

const CreateIntentVersionResponseSchema = z
  .object({
    name: IntentNameSchema.and(
      z.any().openapi({ description: 'The name of the intent.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the intent.' }),
    ).exactOptional(),
    slots: SlotListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of slot types that defines the information required to fulfill the intent.',
        }),
    ).exactOptional(),
    sampleUtterances: IntentUtteranceListSchema.and(
      z.any().openapi({ description: 'An array of sample utterances configured for the intent. ' }),
    ).exactOptional(),
    confirmationPrompt: PromptSchema.and(
      z
        .any()
        .openapi({
          description:
            "If defined, the prompt that Amazon Lex uses to confirm the user's intent before fulfilling it. ",
        }),
    ).exactOptional(),
    rejectionStatement: StatementSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the user answers "no" to the question defined in <code>confirmationPrompt</code>, Amazon Lex responds with this statement to acknowledge that the intent was canceled. ',
        }),
    ).exactOptional(),
    followUpPrompt: FollowUpPromptSchema.and(
      z
        .any()
        .openapi({
          description:
            'If defined, Amazon Lex uses this prompt to solicit additional user activity after the intent is fulfilled. ',
        }),
    ).exactOptional(),
    conclusionStatement: StatementSchema.and(
      z
        .any()
        .openapi({
          description:
            'After the Lambda function specified in the <code>fulfillmentActivity</code> field fulfills the intent, Amazon Lex conveys this statement to the user. ',
        }),
    ).exactOptional(),
    dialogCodeHook: CodeHookSchema.and(
      z
        .any()
        .openapi({
          description: 'If defined, Amazon Lex invokes this Lambda function for each user input.',
        }),
    ).exactOptional(),
    fulfillmentActivity: FulfillmentActivitySchema.and(
      z.any().openapi({ description: ' Describes how the intent is fulfilled. ' }),
    ).exactOptional(),
    parentIntentSignature: BuiltinIntentSignatureSchema.and(
      z.any().openapi({ description: 'A unique identifier for a built-in intent.' }),
    ).exactOptional(),
    lastUpdatedDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date that the intent was updated. ' }),
    ).exactOptional(),
    createdDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date that the intent was created.' }),
    ).exactOptional(),
    version: VersionSchema.and(
      z
        .any()
        .openapi({ description: 'The version number assigned to the new version of the intent.' }),
    ).exactOptional(),
    checksum: StringSchema.and(
      z.any().openapi({ description: 'Checksum of the intent version created.' }),
    ).exactOptional(),
    kendraConfiguration: KendraConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information, if any, for connecting an Amazon Kendra index with the <code>AMAZON.KendraSearchIntent</code> intent.',
        }),
    ).exactOptional(),
    inputContexts: InputContextListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>InputContext</code> objects that lists the contexts that must be active for Amazon Lex to choose the intent in a conversation with the user.',
        }),
    ).exactOptional(),
    outputContexts: OutputContextListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>OutputContext</code> objects that lists the contexts that the intent activates when the intent is fulfilled.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateIntentVersionResponse')

const SlotTypeNameSchema = z
  .string()
  .regex(/^([A-Za-z]_?)+$/)
  .min(1)
  .max(100)
  .openapi('SlotTypeName')

const ValueSchema = z.string().min(1).max(140).openapi('Value')

const SynonymListSchema = z.array(ValueSchema).openapi('SynonymList')

const EnumerationValueSchema = z
  .object({
    value: ValueSchema.and(z.any().openapi({ description: 'The value of the slot type.' })),
    synonyms: SynonymListSchema.and(
      z.any().openapi({ description: 'Additional values related to the slot type value.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['value'],
    description:
      '<p>Each slot type can have a set of values. Each enumeration value represents a value the slot type can take. </p> <p>For example, a pizza ordering bot could have a slot type that specifies the type of crust that the pizza should have. The slot type could include the values </p> <ul> <li> <p>thick</p> </li> <li> <p>thin</p> </li> <li> <p>stuffed</p> </li> </ul>',
  })
  .openapi('EnumerationValue')

const EnumerationValuesSchema = z
  .array(EnumerationValueSchema)
  .min(0)
  .max(10000)
  .openapi('EnumerationValues')

const SlotValueSelectionStrategySchema = z
  .enum(['ORIGINAL_VALUE', 'TOP_RESOLUTION'])
  .openapi('SlotValueSelectionStrategy')

const RegexPatternSchema = z.string().min(1).max(100).openapi('RegexPattern')

const SlotTypeRegexConfigurationSchema = z
  .object({
    pattern: RegexPatternSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A regular expression used to validate the value of a slot. </p> <p>Use a standard regular expression. Amazon Lex supports the following characters in the regular expression:</p> <ul> <li> <p>A-Z, a-z</p> </li> <li> <p>0-9</p> </li> <li> <p>Unicode characters ("\\ u&lt;Unicode&gt;")</p> </li> </ul> <p>Represent Unicode characters with four digits, for example "\\u0041" or "\\u005A".</p> <p>The following regular expression operators are not supported:</p> <ul> <li> <p>Infinite repeaters: *, +, or {x,} with no upper bound.</p> </li> <li> <p>Wild card (.)</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['pattern'],
    description: 'Provides a regular expression used to validate the value of a slot.',
  })
  .openapi('SlotTypeRegexConfiguration')

const SlotTypeConfigurationSchema = z
  .object({
    regexConfiguration: SlotTypeRegexConfigurationSchema.and(
      z
        .any()
        .openapi({ description: 'A regular expression used to validate the value of a slot.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides configuration information for a slot type.', required: [] })
  .openapi('SlotTypeConfiguration')

const SlotTypeConfigurationsSchema = z
  .array(SlotTypeConfigurationSchema)
  .min(0)
  .max(10)
  .openapi('SlotTypeConfigurations')

const CreateSlotTypeVersionResponseSchema = z
  .object({
    name: SlotTypeNameSchema.and(
      z.any().openapi({ description: 'The name of the slot type.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the slot type.' }),
    ).exactOptional(),
    enumerationValues: EnumerationValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>EnumerationValue</code> objects that defines the values that the slot type can take.',
        }),
    ).exactOptional(),
    lastUpdatedDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date that the slot type was updated. When you create a resource, the creation date and last update date are the same.',
        }),
    ).exactOptional(),
    createdDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date that the slot type was created.' }),
    ).exactOptional(),
    version: VersionSchema.and(
      z.any().openapi({ description: 'The version assigned to the new slot type version. ' }),
    ).exactOptional(),
    checksum: StringSchema.and(
      z
        .any()
        .openapi({ description: 'Checksum of the <code>$LATEST</code> version of the slot type.' }),
    ).exactOptional(),
    valueSelectionStrategy: SlotValueSelectionStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            'The strategy that Amazon Lex uses to determine the value of the slot. For more information, see <a>PutSlotType</a>.',
        }),
    ).exactOptional(),
    parentSlotTypeSignature: CustomOrBuiltinSlotTypeNameSchema.and(
      z
        .any()
        .openapi({ description: 'The built-in slot type used a the parent of the slot type.' }),
    ).exactOptional(),
    slotTypeConfigurations: SlotTypeConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description: 'Configuration information that extends the parent built-in slot type.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateSlotTypeVersionResponse')

const ResourceInUseExceptionSchema = z.any().openapi('ResourceInUseException')

const ConfidenceThresholdSchema = z.float64().min(0).max(1).openapi('ConfidenceThreshold')

const GetBotResponseSchema = z
  .object({
    name: BotNameSchema.and(
      z.any().openapi({ description: 'The name of the bot.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the bot.' }),
    ).exactOptional(),
    intents: IntentListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>intent</code> objects. For more information, see <a>PutBot</a>.',
        }),
    ).exactOptional(),
    enableModelImprovements: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the bot uses accuracy improvements. <code>true</code> indicates that the bot is using the improvements, otherwise, <code>false</code>.',
        }),
    ).exactOptional(),
    nluIntentConfidenceThreshold: ConfidenceThresholdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The score that determines where Amazon Lex inserts the <code>AMAZON.FallbackIntent</code>, <code>AMAZON.KendraSearchIntent</code>, or both when returning alternative intents in a <a href="https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostContent.html">PostContent</a> or <a href="https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html">PostText</a> response. <code>AMAZON.FallbackIntent</code> is inserted if the confidence score for all intents is below this value. <code>AMAZON.KendraSearchIntent</code> is only inserted if it is configured for the bot.',
        }),
    ).exactOptional(),
    clarificationPrompt: PromptSchema.and(
      z
        .any()
        .openapi({
          description:
            "The message Amazon Lex uses when it doesn't understand the user's request. For more information, see <a>PutBot</a>. ",
        }),
    ).exactOptional(),
    abortStatement: StatementSchema.and(
      z
        .any()
        .openapi({
          description:
            'The message that Amazon Lex returns when the user elects to end the conversation without completing it. For more information, see <a>PutBot</a>.',
        }),
    ).exactOptional(),
    status: StatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The status of the bot. </p> <p>When the status is <code>BUILDING</code> Amazon Lex is building the bot for testing and use.</p> <p>If the status of the bot is <code>READY_BASIC_TESTING</code>, you can test the bot using the exact utterances specified in the bot's intents. When the bot is ready for full testing or to run, the status is <code>READY</code>.</p> <p>If there was a problem with building the bot, the status is <code>FAILED</code> and the <code>failureReason</code> field explains why the bot did not build.</p> <p>If the bot was saved but not built, the status is <code>NOT_BUILT</code>.</p>",
        }),
    ).exactOptional(),
    failureReason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>status</code> is <code>FAILED</code>, Amazon Lex explains why it failed to build the bot.',
        }),
    ).exactOptional(),
    lastUpdatedDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date that the bot was updated. When you create a resource, the creation date and last updated date are the same. ',
        }),
    ).exactOptional(),
    createdDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date that the bot was created.' }),
    ).exactOptional(),
    idleSessionTTLInSeconds: SessionTTLSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum time in seconds that Amazon Lex retains the data gathered in a conversation. For more information, see <a>PutBot</a>.',
        }),
    ).exactOptional(),
    voiceId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Polly voice ID that Amazon Lex uses for voice interaction with the user. For more information, see <a>PutBot</a>.',
        }),
    ).exactOptional(),
    checksum: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Checksum of the bot used to identify a specific revision of the bot's <code>$LATEST</code> version.",
        }),
    ).exactOptional(),
    version: VersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the bot. For a new bot, the version is always <code>$LATEST</code>.',
        }),
    ).exactOptional(),
    locale: LocaleSchema.and(
      z.any().openapi({ description: ' The target locale for the bot. ' }),
    ).exactOptional(),
    childDirected: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For each Amazon Lex bot created with the Amazon Lex Model Building Service, you must specify whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to the Children\'s Online Privacy Protection Act (COPPA) by specifying <code>true</code> or <code>false</code> in the <code>childDirected</code> field. By specifying <code>true</code> in the <code>childDirected</code> field, you confirm that your use of Amazon Lex <b>is</b> related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. By specifying <code>false</code> in the <code>childDirected</code> field, you confirm that your use of Amazon Lex <b>is not</b> related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. You may not specify a default value for the <code>childDirected</code> field that does not accurately reflect whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA.</p> <p>If your use of Amazon Lex relates to a website, program, or other application that is directed in whole or in part, to children under age 13, you must obtain any required verifiable parental consent under COPPA. For information regarding the use of Amazon Lex in connection with websites, programs, or other applications that are directed or targeted, in whole or in part, to children under age 13, see the <a href="https://aws.amazon.com/lex/faqs#data-security">Amazon Lex FAQ.</a> </p>',
        }),
    ).exactOptional(),
    detectSentiment: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether user utterances should be sent to Amazon Comprehend for sentiment analysis.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      version: '$LATEST',
      name: 'DocOrderPizzaBot',
      abortStatement: {
        messages: [
          { content: "I don't understand. Can you try again?", contentType: 'PlainText' },
          { content: "I'm sorry, I don't understand.", contentType: 'PlainText' },
        ],
      },
      checksum: '20172ee3-fa06-49b2-bbc5-667c090303e9',
      childDirected: true,
      clarificationPrompt: {
        maxAttempts: 1,
        messages: [
          {
            content: "I'm sorry, I didn't hear that. Can you repeate what you just said?",
            contentType: 'PlainText',
          },
          { content: 'Can you say that again?', contentType: 'PlainText' },
        ],
      },
      createdDate: 1494360160.133,
      description: 'Orders a pizza from a local pizzeria.',
      idleSessionTTLInSeconds: 300,
      intents: [{ intentName: 'DocOrderPizza', intentVersion: '$LATEST' }],
      lastUpdatedDate: 1494360160.133,
      locale: 'en-US',
      status: 'NOT_BUILT',
    },
    required: [],
  })
  .openapi('GetBotResponse')

const AliasNameSchema = z
  .string()
  .regex(/^([A-Za-z]_?)+$/)
  .min(1)
  .max(100)
  .openapi('AliasName')

const LogTypeSchema = z.enum(['AUDIO', 'TEXT']).openapi('LogType')

const DestinationSchema = z.enum(['CLOUDWATCH_LOGS', 'S3']).openapi('Destination')

const KmsKeyArnSchema = z
  .string()
  .regex(/^arn:[\w\-]+:kms:[\w\-]+:[\d]{12}:(?:key\/[\w\-]+|alias\/[a-zA-Z0-9:\/_\-]{1,256})$/)
  .min(20)
  .max(2048)
  .openapi('KmsKeyArn')

const ResourceArnSchema = z
  .string()
  .regex(
    /^arn:[\w\-]+:(?:logs:[\w\-]+:[\d]{12}:log-group:[\.\-_\/#A-Za-z0-9]{1,512}(?::\*)?|s3:::[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9])$/,
  )
  .min(1)
  .max(2048)
  .openapi('ResourceArn')

const ResourcePrefixSchema = z.string().max(1024).openapi('ResourcePrefix')

const LogSettingsResponseSchema = z
  .object({
    logType: LogTypeSchema.and(
      z.any().openapi({ description: 'The type of logging that is enabled.' }),
    ).exactOptional(),
    destination: DestinationSchema.and(
      z.any().openapi({ description: 'The destination where logs are delivered.' }),
    ).exactOptional(),
    kmsKeyArn: KmsKeyArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the key used to encrypt audio logs in an S3 bucket.',
        }),
    ).exactOptional(),
    resourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the CloudWatch Logs log group or S3 bucket where the logs are delivered.',
        }),
    ).exactOptional(),
    resourcePrefix: ResourcePrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            'The resource prefix is the first part of the S3 object key within the S3 bucket that you specified to contain audio logs. For CloudWatch Logs it is the prefix of the log stream name within the log group that you specified. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The settings for conversation logs.', required: [] })
  .openapi('LogSettingsResponse')

const LogSettingsResponseListSchema = z
  .array(LogSettingsResponseSchema)
  .openapi('LogSettingsResponseList')

const IamRoleArnSchema = z
  .string()
  .regex(/^arn:[\w\-]+:iam::[\d]{12}:role\/.+$/)
  .min(20)
  .max(2048)
  .openapi('IamRoleArn')

const ConversationLogsResponseSchema = z
  .object({
    logSettings: LogSettingsResponseListSchema.and(
      z
        .any()
        .openapi({
          description: 'The settings for your conversation logs. You can log text, audio, or both.',
        }),
    ).exactOptional(),
    iamRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the IAM role used to write your logs to CloudWatch Logs or an S3 bucket.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains information about conversation log settings.', required: [] })
  .openapi('ConversationLogsResponse')

const GetBotAliasResponseSchema = z
  .object({
    name: AliasNameSchema.and(
      z.any().openapi({ description: 'The name of the bot alias.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the bot alias.' }),
    ).exactOptional(),
    botVersion: VersionSchema.and(
      z.any().openapi({ description: 'The version of the bot that the alias points to.' }),
    ).exactOptional(),
    botName: BotNameSchema.and(
      z.any().openapi({ description: 'The name of the bot that the alias points to.' }),
    ).exactOptional(),
    lastUpdatedDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date that the bot alias was updated. When you create a resource, the creation date and the last updated date are the same.',
        }),
    ).exactOptional(),
    createdDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date that the bot alias was created.' }),
    ).exactOptional(),
    checksum: StringSchema.and(
      z.any().openapi({ description: 'Checksum of the bot alias.' }),
    ).exactOptional(),
    conversationLogs: ConversationLogsResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            'The settings that determine how Amazon Lex uses conversation logs for the alias.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetBotAliasResponse')

const BotAliasMetadataSchema = z
  .object({
    name: AliasNameSchema.and(
      z.any().openapi({ description: 'The name of the bot alias.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the bot alias.' }),
    ).exactOptional(),
    botVersion: VersionSchema.and(
      z
        .any()
        .openapi({ description: 'The version of the Amazon Lex bot to which the alias points.' }),
    ).exactOptional(),
    botName: BotNameSchema.and(
      z.any().openapi({ description: 'The name of the bot to which the alias points.' }),
    ).exactOptional(),
    lastUpdatedDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date that the bot alias was updated. When you create a resource, the creation date and last updated date are the same.',
        }),
    ).exactOptional(),
    createdDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date that the bot alias was created.' }),
    ).exactOptional(),
    checksum: StringSchema.and(
      z.any().openapi({ description: 'Checksum of the bot alias.' }),
    ).exactOptional(),
    conversationLogs: ConversationLogsResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            'Settings that determine how Amazon Lex uses conversation logs for the alias.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides information about a bot alias.', required: [] })
  .openapi('BotAliasMetadata')

const BotAliasMetadataListSchema = z.array(BotAliasMetadataSchema).openapi('BotAliasMetadataList')

const NextTokenSchema = z.string().openapi('NextToken')

const GetBotAliasesResponseSchema = z
  .object({
    BotAliases: BotAliasMetadataListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>BotAliasMetadata</code> objects, each describing a bot alias.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A pagination token for fetching next page of aliases. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of aliases, specify the pagination token in the next request. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetBotAliasesResponse')

const BotChannelNameSchema = z
  .string()
  .regex(/^([A-Za-z]_?)+$/)
  .min(1)
  .max(100)
  .openapi('BotChannelName')

const ChannelTypeSchema = z.enum(['Facebook', 'Slack', 'Twilio-Sms', 'Kik']).openapi('ChannelType')

const ChannelConfigurationMapSchema = z
  .record(z.string(), StringSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 10)
  .openapi('ChannelConfigurationMap')

const ChannelStatusSchema = z.enum(['IN_PROGRESS', 'CREATED', 'FAILED']).openapi('ChannelStatus')

const GetBotChannelAssociationResponseSchema = z
  .object({
    name: BotChannelNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the association between the bot and the channel.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description: 'A description of the association between the bot and the channel.',
        }),
    ).exactOptional(),
    botAlias: AliasNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'An alias pointing to the specific version of the Amazon Lex bot to which this association is being made.',
        }),
    ).exactOptional(),
    botName: BotNameSchema.and(
      z.any().openapi({ description: 'The name of the Amazon Lex bot.' }),
    ).exactOptional(),
    createdDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date that the association between the bot and the channel was created.',
        }),
    ).exactOptional(),
    type: ChannelTypeSchema.and(
      z.any().openapi({ description: 'The type of the messaging platform.' }),
    ).exactOptional(),
    botConfiguration: ChannelConfigurationMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides information that the messaging platform needs to communicate with the Amazon Lex bot.',
        }),
    ).exactOptional(),
    status: ChannelStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the bot channel. </p> <ul> <li> <p> <code>CREATED</code> - The channel has been created and is ready for use.</p> </li> <li> <p> <code>IN_PROGRESS</code> - Channel creation is in progress.</p> </li> <li> <p> <code>FAILED</code> - There was an error creating the channel. For information about the reason for the failure, see the <code>failureReason</code> field.</p> </li> </ul>',
        }),
    ).exactOptional(),
    failureReason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>status</code> is <code>FAILED</code>, Amazon Lex provides the reason that it failed to create the association.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetBotChannelAssociationResponse')

const BotChannelAssociationSchema = z
  .object({
    name: BotChannelNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the association between the bot and the channel. ' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A text description of the association you are creating. ' }),
    ).exactOptional(),
    botAlias: AliasNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'An alias pointing to the specific version of the Amazon Lex bot to which this association is being made. ',
        }),
    ).exactOptional(),
    botName: BotNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the Amazon Lex bot to which this association is being made. </p> <note> <p>Currently, Amazon Lex supports associations with Facebook and Slack, and Twilio.</p> </note>',
        }),
    ).exactOptional(),
    createdDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date that the association between the Amazon Lex bot and the channel was created. ',
        }),
    ).exactOptional(),
    type: ChannelTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the type of association by indicating the type of channel being established between the Amazon Lex bot and the external messaging platform.',
        }),
    ).exactOptional(),
    botConfiguration: ChannelConfigurationMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides information necessary to communicate with the messaging platform. ',
        }),
    ).exactOptional(),
    status: ChannelStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the bot channel. </p> <ul> <li> <p> <code>CREATED</code> - The channel has been created and is ready for use.</p> </li> <li> <p> <code>IN_PROGRESS</code> - Channel creation is in progress.</p> </li> <li> <p> <code>FAILED</code> - There was an error creating the channel. For information about the reason for the failure, see the <code>failureReason</code> field.</p> </li> </ul>',
        }),
    ).exactOptional(),
    failureReason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>status</code> is <code>FAILED</code>, Amazon Lex provides the reason that it failed to create the association.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents an association between an Amazon Lex bot and an external messaging platform.',
    required: [],
  })
  .openapi('BotChannelAssociation')

const BotChannelAssociationListSchema = z
  .array(BotChannelAssociationSchema)
  .openapi('BotChannelAssociationList')

const GetBotChannelAssociationsResponseSchema = z
  .object({
    botChannelAssociations: BotChannelAssociationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects, one for each association, that provides information about the Amazon Lex bot and its association with the channel. ',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A pagination token that fetches the next page of associations. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of associations, specify the pagination token in the next request. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetBotChannelAssociationsResponse')

const BotMetadataSchema = z
  .object({
    name: BotNameSchema.and(
      z.any().openapi({ description: 'The name of the bot. ' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the bot.' }),
    ).exactOptional(),
    status: StatusSchema.and(
      z.any().openapi({ description: 'The status of the bot.' }),
    ).exactOptional(),
    lastUpdatedDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date that the bot was updated. When you create a bot, the creation date and last updated date are the same. ',
        }),
    ).exactOptional(),
    createdDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date that the bot was created.' }),
    ).exactOptional(),
    version: VersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the bot. For a new bot, the version is always <code>$LATEST</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides information about a bot. .', required: [] })
  .openapi('BotMetadata')

const BotMetadataListSchema = z.array(BotMetadataSchema).openapi('BotMetadataList')

const GetBotVersionsResponseSchema = z
  .object({
    bots: BotMetadataListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>BotMetadata</code> objects, one for each numbered version of the bot plus one for the <code>$LATEST</code> version.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A pagination token for fetching the next page of bot versions. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of versions, specify the pagination token in the next request. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetBotVersionsResponse')

const GetBotsResponseSchema = z
  .object({
    bots: BotMetadataListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>botMetadata</code> objects, with one entry for each bot. ',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, it includes a pagination token that you can specify in your next request to fetch the next page of bots. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      bots: [
        {
          version: '$LATEST',
          name: 'DocOrderPizzaBot',
          createdDate: 1494360160.133,
          description: 'Orders a pizza from a local pizzeria.',
          lastUpdatedDate: 1494360160.133,
          status: 'NOT_BUILT',
        },
      ],
    },
    required: [],
  })
  .openapi('GetBotsResponse')

const LocaleListSchema = z.array(LocaleSchema).openapi('LocaleList')

const BuiltinIntentSlotSchema = z
  .object({
    name: StringSchema.and(
      z.any().openapi({ description: 'A list of the slots defined for the intent.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information about a slot used in a built-in intent.',
    required: [],
  })
  .openapi('BuiltinIntentSlot')

const BuiltinIntentSlotListSchema = z
  .array(BuiltinIntentSlotSchema)
  .openapi('BuiltinIntentSlotList')

const GetBuiltinIntentResponseSchema = z
  .object({
    signature: BuiltinIntentSignatureSchema.and(
      z.any().openapi({ description: 'The unique identifier for a built-in intent.' }),
    ).exactOptional(),
    supportedLocales: LocaleListSchema.and(
      z.any().openapi({ description: 'A list of locales that the intent supports.' }),
    ).exactOptional(),
    slots: BuiltinIntentSlotListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>BuiltinIntentSlot</code> objects, one entry for each slot type in the intent.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetBuiltinIntentResponse')

const BuiltinIntentMetadataSchema = z
  .object({
    signature: BuiltinIntentSignatureSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the built-in intent. To find the signature for an intent, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents">Standard Built-in Intents</a> in the <i>Alexa Skills Kit</i>.',
        }),
    ).exactOptional(),
    supportedLocales: LocaleListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of identifiers for the locales that the intent supports.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides metadata for a built-in intent.', required: [] })
  .openapi('BuiltinIntentMetadata')

const BuiltinIntentMetadataListSchema = z
  .array(BuiltinIntentMetadataSchema)
  .openapi('BuiltinIntentMetadataList')

const GetBuiltinIntentsResponseSchema = z
  .object({
    intents: BuiltinIntentMetadataListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>builtinIntentMetadata</code> objects, one for each intent in the response.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A pagination token that fetches the next page of intents. If the response to this API call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of intents, specify the pagination token in the next request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetBuiltinIntentsResponse')

const BuiltinSlotTypeSignatureSchema = z.string().openapi('BuiltinSlotTypeSignature')

const BuiltinSlotTypeMetadataSchema = z
  .object({
    signature: BuiltinSlotTypeSignatureSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the built-in slot type. To find the signature for a slot type, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/slot-type-reference">Slot Type Reference</a> in the <i>Alexa Skills Kit</i>.',
        }),
    ).exactOptional(),
    supportedLocales: LocaleListSchema.and(
      z.any().openapi({ description: 'A list of target locales for the slot. ' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides information about a built in slot type.', required: [] })
  .openapi('BuiltinSlotTypeMetadata')

const BuiltinSlotTypeMetadataListSchema = z
  .array(BuiltinSlotTypeMetadataSchema)
  .openapi('BuiltinSlotTypeMetadataList')

const GetBuiltinSlotTypesResponseSchema = z
  .object({
    slotTypes: BuiltinSlotTypeMetadataListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>BuiltInSlotTypeMetadata</code> objects, one entry for each slot type returned.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, the response includes a pagination token that you can use in your next request to fetch the next page of slot types.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetBuiltinSlotTypesResponse')

const NameSchema = z
  .string()
  .regex(/[a-zA-Z_]+/)
  .min(1)
  .max(100)
  .openapi('Name')

const NumericalVersionSchema = z
  .string()
  .regex(/[0-9]+/)
  .min(1)
  .max(64)
  .openapi('NumericalVersion')

const ResourceTypeSchema = z.enum(['BOT', 'INTENT', 'SLOT_TYPE']).openapi('ResourceType')

const ExportTypeSchema = z.enum(['ALEXA_SKILLS_KIT', 'LEX']).openapi('ExportType')

const ExportStatusSchema = z.enum(['IN_PROGRESS', 'READY', 'FAILED']).openapi('ExportStatus')

const GetExportResponseSchema = z
  .object({
    name: NameSchema.and(
      z.any().openapi({ description: 'The name of the bot being exported.' }),
    ).exactOptional(),
    version: NumericalVersionSchema.and(
      z.any().openapi({ description: 'The version of the bot being exported.' }),
    ).exactOptional(),
    resourceType: ResourceTypeSchema.and(
      z.any().openapi({ description: 'The type of the exported resource.' }),
    ).exactOptional(),
    exportType: ExportTypeSchema.and(
      z.any().openapi({ description: 'The format of the exported data.' }),
    ).exactOptional(),
    exportStatus: ExportStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the export. </p> <ul> <li> <p> <code>IN_PROGRESS</code> - The export is in progress.</p> </li> <li> <p> <code>READY</code> - The export is complete.</p> </li> <li> <p> <code>FAILED</code> - The export could not be completed.</p> </li> </ul>',
        }),
    ).exactOptional(),
    failureReason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>status</code> is <code>FAILED</code>, Amazon Lex provides the reason that it failed to export the resource.',
        }),
    ).exactOptional(),
    url: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An S3 pre-signed URL that provides the location of the exported resource. The exported resource is a ZIP archive that contains the exported resource in JSON format. The structure of the archive may change. Your code should not rely on the archive structure.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetExportResponse')

const MergeStrategySchema = z
  .enum(['OVERWRITE_LATEST', 'FAIL_ON_CONFLICT'])
  .openapi('MergeStrategy')

const ImportStatusSchema = z.enum(['IN_PROGRESS', 'COMPLETE', 'FAILED']).openapi('ImportStatus')

const StringListSchema = z.array(StringSchema).openapi('StringList')

const GetImportResponseSchema = z
  .object({
    name: NameSchema.and(
      z.any().openapi({ description: 'The name given to the import job.' }),
    ).exactOptional(),
    resourceType: ResourceTypeSchema.and(
      z.any().openapi({ description: 'The type of resource imported.' }),
    ).exactOptional(),
    mergeStrategy: MergeStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            'The action taken when there was a conflict between an existing resource and a resource in the import file.',
        }),
    ).exactOptional(),
    importId: StringSchema.and(
      z.any().openapi({ description: 'The identifier for the specific import job.' }),
    ).exactOptional(),
    importStatus: ImportStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the import job. If the status is <code>FAILED</code>, you can get the reason for the failure from the <code>failureReason</code> field.',
        }),
    ).exactOptional(),
    failureReason: StringListSchema.and(
      z
        .any()
        .openapi({ description: 'A string that describes why an import job failed to complete.' }),
    ).exactOptional(),
    createdDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A timestamp for the date and time that the import job was created.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetImportResponse')

const GetIntentResponseSchema = z
  .object({
    name: IntentNameSchema.and(
      z.any().openapi({ description: 'The name of the intent.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the intent.' }),
    ).exactOptional(),
    slots: SlotListSchema.and(
      z.any().openapi({ description: 'An array of intent slots configured for the intent.' }),
    ).exactOptional(),
    sampleUtterances: IntentUtteranceListSchema.and(
      z.any().openapi({ description: 'An array of sample utterances configured for the intent.' }),
    ).exactOptional(),
    confirmationPrompt: PromptSchema.and(
      z
        .any()
        .openapi({
          description:
            "If defined in the bot, Amazon Lex uses prompt to confirm the intent before fulfilling the user's request. For more information, see <a>PutIntent</a>. ",
        }),
    ).exactOptional(),
    rejectionStatement: StatementSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the user answers "no" to the question defined in <code>confirmationPrompt</code>, Amazon Lex responds with this statement to acknowledge that the intent was canceled. ',
        }),
    ).exactOptional(),
    followUpPrompt: FollowUpPromptSchema.and(
      z
        .any()
        .openapi({
          description:
            'If defined in the bot, Amazon Lex uses this prompt to solicit additional user activity after the intent is fulfilled. For more information, see <a>PutIntent</a>.',
        }),
    ).exactOptional(),
    conclusionStatement: StatementSchema.and(
      z
        .any()
        .openapi({
          description:
            'After the Lambda function specified in the <code>fulfillmentActivity</code> element fulfills the intent, Amazon Lex conveys this statement to the user.',
        }),
    ).exactOptional(),
    dialogCodeHook: CodeHookSchema.and(
      z
        .any()
        .openapi({
          description:
            'If defined in the bot, Amazon Amazon Lex invokes this Lambda function for each user input. For more information, see <a>PutIntent</a>. ',
        }),
    ).exactOptional(),
    fulfillmentActivity: FulfillmentActivitySchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes how the intent is fulfilled. For more information, see <a>PutIntent</a>. ',
        }),
    ).exactOptional(),
    parentIntentSignature: BuiltinIntentSignatureSchema.and(
      z.any().openapi({ description: 'A unique identifier for a built-in intent.' }),
    ).exactOptional(),
    lastUpdatedDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date that the intent was updated. When you create a resource, the creation date and the last updated date are the same. ',
        }),
    ).exactOptional(),
    createdDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date that the intent was created.' }),
    ).exactOptional(),
    version: VersionSchema.and(
      z.any().openapi({ description: 'The version of the intent.' }),
    ).exactOptional(),
    checksum: StringSchema.and(
      z.any().openapi({ description: 'Checksum of the intent.' }),
    ).exactOptional(),
    kendraConfiguration: KendraConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information, if any, to connect to an Amazon Kendra index with the <code>AMAZON.KendraSearchIntent</code> intent.',
        }),
    ).exactOptional(),
    inputContexts: InputContextListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>InputContext</code> objects that lists the contexts that must be active for Amazon Lex to choose the intent in a conversation with the user.',
        }),
    ).exactOptional(),
    outputContexts: OutputContextListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>OutputContext</code> objects that lists the contexts that the intent activates when the intent is fulfilled.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      version: '$LATEST',
      name: 'DocOrderPizza',
      checksum: 'ca9bc13d-afc8-4706-bbaf-091f7a5935d6',
      conclusionStatement: {
        messages: [
          {
            content: 'All right, I ordered  you a {Crust} crust {Type} pizza with {Sauce} sauce.',
            contentType: 'PlainText',
          },
          {
            content: 'OK, your {Crust} crust {Type} pizza with {Sauce} sauce is on the way.',
            contentType: 'PlainText',
          },
        ],
        responseCard: 'foo',
      },
      confirmationPrompt: {
        maxAttempts: 1,
        messages: [
          {
            content: 'Should I order  your {Crust} crust {Type} pizza with {Sauce} sauce?',
            contentType: 'PlainText',
          },
        ],
      },
      createdDate: 1494359783.453,
      description: 'Order a pizza from a local pizzeria.',
      fulfillmentActivity: { type: 'ReturnIntent' },
      lastUpdatedDate: 1494359783.453,
      rejectionStatement: {
        messages: [
          { content: "Ok, I'll cancel your order.", contentType: 'PlainText' },
          { content: 'I cancelled your order.', contentType: 'PlainText' },
        ],
      },
      sampleUtterances: [
        'Order me a pizza.',
        'Order me a {Type} pizza.',
        'I want a {Crust} crust {Type} pizza',
        'I want a {Crust} crust {Type} pizza with {Sauce} sauce.',
      ],
      slots: [
        {
          name: 'Type',
          description: 'The type of pizza to order.',
          priority: 1,
          sampleUtterances: [
            'Get me a {Type} pizza.',
            'A {Type} pizza please.',
            "I'd like a {Type} pizza.",
          ],
          slotConstraint: 'Required',
          slotType: 'DocPizzaType',
          slotTypeVersion: '$LATEST',
          valueElicitationPrompt: {
            maxAttempts: 1,
            messages: [
              { content: 'What type of pizza would you like?', contentType: 'PlainText' },
              { content: 'Vegie or cheese pizza?', contentType: 'PlainText' },
              { content: 'I can get you a vegie or a cheese pizza.', contentType: 'PlainText' },
            ],
          },
        },
        {
          name: 'Crust',
          description: 'The type of pizza crust to order.',
          priority: 2,
          sampleUtterances: ['Make it a {Crust} crust.', "I'd like a {Crust} crust."],
          slotConstraint: 'Required',
          slotType: 'DocPizzaCrustType',
          slotTypeVersion: '$LATEST',
          valueElicitationPrompt: {
            maxAttempts: 1,
            messages: [
              { content: 'What type of crust would you like?', contentType: 'PlainText' },
              { content: 'Thick or thin crust?', contentType: 'PlainText' },
            ],
          },
        },
        {
          name: 'Sauce',
          description: 'The type of sauce to use on the pizza.',
          priority: 3,
          sampleUtterances: ['Make it {Sauce} sauce.', "I'd like {Sauce} sauce."],
          slotConstraint: 'Required',
          slotType: 'DocPizzaSauceType',
          slotTypeVersion: '$LATEST',
          valueElicitationPrompt: {
            maxAttempts: 1,
            messages: [
              { content: 'White or red sauce?', contentType: 'PlainText' },
              { content: 'Garlic or tomato sauce?', contentType: 'PlainText' },
            ],
          },
        },
      ],
    },
    required: [],
  })
  .openapi('GetIntentResponse')

const IntentMetadataSchema = z
  .object({
    name: IntentNameSchema.and(
      z.any().openapi({ description: 'The name of the intent.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the intent.' }),
    ).exactOptional(),
    lastUpdatedDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date that the intent was updated. When you create an intent, the creation date and last updated date are the same.',
        }),
    ).exactOptional(),
    createdDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date that the intent was created.' }),
    ).exactOptional(),
    version: VersionSchema.and(
      z.any().openapi({ description: 'The version of the intent.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides information about an intent.', required: [] })
  .openapi('IntentMetadata')

const IntentMetadataListSchema = z.array(IntentMetadataSchema).openapi('IntentMetadataList')

const GetIntentVersionsResponseSchema = z
  .object({
    intents: IntentMetadataListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>IntentMetadata</code> objects, one for each numbered version of the intent plus one for the <code>$LATEST</code> version.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A pagination token for fetching the next page of intent versions. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of versions, specify the pagination token in the next request. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetIntentVersionsResponse')

const GetIntentsResponseSchema = z
  .object({
    intents: IntentMetadataListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>Intent</code> objects. For more information, see <a>PutBot</a>.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, the response includes a pagination token that you can specify in your next request to fetch the next page of intents. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      intents: [
        {
          version: '$LATEST',
          name: 'DocOrderPizza',
          createdDate: 1494359783.453,
          description: 'Order a pizza from a local pizzeria.',
          lastUpdatedDate: 1494359783.453,
        },
      ],
    },
    required: [],
  })
  .openapi('GetIntentsResponse')

const MigrationIdSchema = z
  .string()
  .regex(/^[0-9a-zA-Z]+$/)
  .length(10)
  .openapi('MigrationId')

const V2BotIdSchema = z
  .string()
  .regex(/^[0-9a-zA-Z]+$/)
  .length(10)
  .openapi('V2BotId')

const MigrationStatusSchema = z
  .enum(['IN_PROGRESS', 'COMPLETED', 'FAILED'])
  .openapi('MigrationStatus')

const MigrationStrategySchema = z
  .enum(['CREATE_NEW', 'UPDATE_EXISTING'])
  .openapi('MigrationStrategy')

const MigrationAlertTypeSchema = z.enum(['ERROR', 'WARN']).openapi('MigrationAlertType')

const MigrationAlertMessageSchema = z.string().openapi('MigrationAlertMessage')

const MigrationAlertDetailSchema = z.string().openapi('MigrationAlertDetail')

const MigrationAlertDetailsSchema = z
  .array(MigrationAlertDetailSchema)
  .openapi('MigrationAlertDetails')

const MigrationAlertReferenceURLSchema = z.string().openapi('MigrationAlertReferenceURL')

const MigrationAlertReferenceURLsSchema = z
  .array(MigrationAlertReferenceURLSchema)
  .openapi('MigrationAlertReferenceURLs')

const MigrationAlertSchema = z
  .object({
    type: MigrationAlertTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The type of alert. There are two kinds of alerts:</p> <ul> <li> <p> <code>ERROR</code> - There was an issue with the migration that can't be resolved. The migration stops.</p> </li> <li> <p> <code>WARN</code> - There was an issue with the migration that requires manual changes to the new Amazon Lex V2 bot. The migration continues.</p> </li> </ul>",
        }),
    ).exactOptional(),
    message: MigrationAlertMessageSchema.and(
      z.any().openapi({ description: 'A message that describes why the alert was issued.' }),
    ).exactOptional(),
    details: MigrationAlertDetailsSchema.and(
      z.any().openapi({ description: 'Additional details about the alert.' }),
    ).exactOptional(),
    referenceURLs: MigrationAlertReferenceURLsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A link to the Amazon Lex documentation that describes how to resolve the alert.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about alerts and warnings that Amazon Lex sends during a migration. The alerts include information about how to resolve the issue.',
    required: [],
  })
  .openapi('MigrationAlert')

const MigrationAlertsSchema = z.array(MigrationAlertSchema).openapi('MigrationAlerts')

const GetMigrationResponseSchema = z
  .object({
    migrationId: MigrationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier of the migration. This is the same as the identifier used when calling the <code>GetMigration</code> operation.',
        }),
    ).exactOptional(),
    v1BotName: BotNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the Amazon Lex V1 bot migrated to Amazon Lex V2.' }),
    ).exactOptional(),
    v1BotVersion: VersionSchema.and(
      z
        .any()
        .openapi({
          description: 'The version of the Amazon Lex V1 bot migrated to Amazon Lex V2.',
        }),
    ).exactOptional(),
    v1BotLocale: LocaleSchema.and(
      z
        .any()
        .openapi({ description: 'The locale of the Amazon Lex V1 bot migrated to Amazon Lex V2.' }),
    ).exactOptional(),
    v2BotId: V2BotIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier of the Amazon Lex V2 bot that the Amazon Lex V1 is being migrated to.',
        }),
    ).exactOptional(),
    v2BotRole: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The IAM role that Amazon Lex uses to run the Amazon Lex V2 bot.',
        }),
    ).exactOptional(),
    migrationStatus: MigrationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates the status of the migration. When the status is <code>COMPLETE</code> the migration is finished and the bot is available in Amazon Lex V2. There may be alerts and warnings that need to be resolved to complete the migration.',
        }),
    ).exactOptional(),
    migrationStrategy: MigrationStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The strategy used to conduct the migration.</p> <ul> <li> <p> <code>CREATE_NEW</code> - Creates a new Amazon Lex V2 bot and migrates the Amazon Lex V1 bot to the new bot.</p> </li> <li> <p> <code>UPDATE_EXISTING</code> - Overwrites the existing Amazon Lex V2 bot metadata and the locale being migrated. It doesn't change any other locales in the Amazon Lex V2 bot. If the locale doesn't exist, a new locale is created in the Amazon Lex V2 bot.</p> </li> </ul>",
        }),
    ).exactOptional(),
    migrationTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the migration started.' }),
    ).exactOptional(),
    alerts: MigrationAlertsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of alerts and warnings that indicate issues with the migration for the Amazon Lex V1 bot to Amazon Lex V2. You receive a warning when an Amazon Lex V1 feature has a different implementation if Amazon Lex V2.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/migrate.html">Migrating a bot</a> in the <i>Amazon Lex V2 developer guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetMigrationResponse')

const MigrationSummarySchema = z
  .object({
    migrationId: MigrationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier that Amazon Lex assigned to the migration.',
        }),
    ).exactOptional(),
    v1BotName: BotNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the Amazon Lex V1 bot that is the source of the migration.',
        }),
    ).exactOptional(),
    v1BotVersion: VersionSchema.and(
      z
        .any()
        .openapi({
          description: 'The version of the Amazon Lex V1 bot that is the source of the migration.',
        }),
    ).exactOptional(),
    v1BotLocale: LocaleSchema.and(
      z
        .any()
        .openapi({
          description: 'The locale of the Amazon Lex V1 bot that is the source of the migration.',
        }),
    ).exactOptional(),
    v2BotId: V2BotIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier of the Amazon Lex V2 that is the destination of the migration.',
        }),
    ).exactOptional(),
    v2BotRole: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The IAM role that Amazon Lex uses to run the Amazon Lex V2 bot.',
        }),
    ).exactOptional(),
    migrationStatus: MigrationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the operation. When the status is <code>COMPLETE</code> the bot is available in Amazon Lex V2. There may be alerts and warnings that need to be resolved to complete the migration.',
        }),
    ).exactOptional(),
    migrationStrategy: MigrationStrategySchema.and(
      z.any().openapi({ description: 'The strategy used to conduct the migration.' }),
    ).exactOptional(),
    migrationTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the migration started.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information about migrating a bot from Amazon Lex V1 to Amazon Lex V2.',
    required: [],
  })
  .openapi('MigrationSummary')

const MigrationSummaryListSchema = z.array(MigrationSummarySchema).openapi('MigrationSummaryList')

const GetMigrationsResponseSchema = z
  .object({
    migrationSummaries: MigrationSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of summaries for migrations from Amazon Lex V1 to Amazon Lex V2. To see details of the migration, use the <code>migrationId</code> from the summary in a call to the operation.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, it includes a pagination token that you can specify in your next request to fetch the next page of migrations.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetMigrationsResponse')

const GetSlotTypeResponseSchema = z
  .object({
    name: SlotTypeNameSchema.and(
      z.any().openapi({ description: 'The name of the slot type.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the slot type.' }),
    ).exactOptional(),
    enumerationValues: EnumerationValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>EnumerationValue</code> objects that defines the values that the slot type can take.',
        }),
    ).exactOptional(),
    lastUpdatedDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date that the slot type was updated. When you create a resource, the creation date and last update date are the same.',
        }),
    ).exactOptional(),
    createdDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date that the slot type was created.' }),
    ).exactOptional(),
    version: VersionSchema.and(
      z.any().openapi({ description: 'The version of the slot type.' }),
    ).exactOptional(),
    checksum: StringSchema.and(
      z
        .any()
        .openapi({ description: 'Checksum of the <code>$LATEST</code> version of the slot type.' }),
    ).exactOptional(),
    valueSelectionStrategy: SlotValueSelectionStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            'The strategy that Amazon Lex uses to determine the value of the slot. For more information, see <a>PutSlotType</a>.',
        }),
    ).exactOptional(),
    parentSlotTypeSignature: CustomOrBuiltinSlotTypeNameSchema.and(
      z
        .any()
        .openapi({ description: 'The built-in slot type used as a parent for the slot type.' }),
    ).exactOptional(),
    slotTypeConfigurations: SlotTypeConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description: 'Configuration information that extends the parent built-in slot type.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      version: '$LATEST',
      name: 'DocPizzaCrustType',
      checksum: '210b3d5a-90a3-4b22-ac7e-f50c2c71095f',
      createdDate: 1494359274.403,
      description: 'Available crust types',
      enumerationValues: [{ value: 'thick' }, { value: 'thin' }],
      lastUpdatedDate: 1494359274.403,
    },
    required: [],
  })
  .openapi('GetSlotTypeResponse')

const SlotTypeMetadataSchema = z
  .object({
    name: SlotTypeNameSchema.and(
      z.any().openapi({ description: 'The name of the slot type.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the slot type.' }),
    ).exactOptional(),
    lastUpdatedDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date that the slot type was updated. When you create a resource, the creation date and last updated date are the same. ',
        }),
    ).exactOptional(),
    createdDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date that the slot type was created.' }),
    ).exactOptional(),
    version: VersionSchema.and(
      z.any().openapi({ description: 'The version of the slot type.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides information about a slot type..', required: [] })
  .openapi('SlotTypeMetadata')

const SlotTypeMetadataListSchema = z.array(SlotTypeMetadataSchema).openapi('SlotTypeMetadataList')

const GetSlotTypeVersionsResponseSchema = z
  .object({
    slotTypes: SlotTypeMetadataListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>SlotTypeMetadata</code> objects, one for each numbered version of the slot type plus one for the <code>$LATEST</code> version.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A pagination token for fetching the next page of slot type versions. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of versions, specify the pagination token in the next request. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetSlotTypeVersionsResponse')

const GetSlotTypesResponseSchema = z
  .object({
    slotTypes: SlotTypeMetadataListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects, one for each slot type, that provides information such as the name of the slot type, the version, and a description.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the response is truncated, it includes a pagination token that you can specify in your next request to fetch the next page of slot types.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      slotTypes: [
        {
          version: '$LATEST',
          name: 'DocPizzaCrustType',
          createdDate: 1494359274.403,
          description: 'Available crust types',
          lastUpdatedDate: 1494359274.403,
        },
        {
          version: '$LATEST',
          name: 'DocPizzaSauceType',
          createdDate: 1494356442.23,
          description: 'Available pizza sauces',
          lastUpdatedDate: 1494356442.23,
        },
        {
          version: '$LATEST',
          name: 'DocPizzaType',
          createdDate: 1494359198.656,
          description: 'Available pizzas',
          lastUpdatedDate: 1494359198.656,
        },
      ],
    },
    required: [],
  })
  .openapi('GetSlotTypesResponse')

const UtteranceStringSchema = z.string().min(1).max(2000).openapi('UtteranceString')

const CountSchema = z.int().openapi('Count')

const UtteranceDataSchema = z
  .object({
    utteranceString: UtteranceStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The text that was entered by the user or the text representation of an audio clip.',
        }),
    ).exactOptional(),
    count: CountSchema.and(
      z.any().openapi({ description: 'The number of times that the utterance was processed.' }),
    ).exactOptional(),
    distinctUsers: CountSchema.and(
      z.any().openapi({ description: 'The total number of individuals that used the utterance.' }),
    ).exactOptional(),
    firstUtteredDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date that the utterance was first recorded.' }),
    ).exactOptional(),
    lastUtteredDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date that the utterance was last recorded.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information about a single utterance that was made to your bot. ',
    required: [],
  })
  .openapi('UtteranceData')

const ListOfUtteranceSchema = z.array(UtteranceDataSchema).openapi('ListOfUtterance')

const UtteranceListSchema = z
  .object({
    botVersion: VersionSchema.and(
      z.any().openapi({ description: 'The version of the bot that processed the list.' }),
    ).exactOptional(),
    utterances: ListOfUtteranceSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more <a>UtteranceData</a> objects that contain information about the utterances that have been made to a bot. The maximum number of object is 100.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides a list of utterances that have been made to a specific version of your bot. The list contains a maximum of 100 utterances.',
    required: [],
  })
  .openapi('UtteranceList')

const ListsOfUtterancesSchema = z.array(UtteranceListSchema).openapi('ListsOfUtterances')

const GetUtterancesViewResponseSchema = z
  .object({
    botName: BotNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the bot for which utterance information was returned.',
        }),
    ).exactOptional(),
    utterances: ListsOfUtterancesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <a>UtteranceList</a> objects, each containing a list of <a>UtteranceData</a> objects describing the utterances that were processed by your bot. The response contains a maximum of 100 <code>UtteranceData</code> objects for each version. Amazon Lex returns the most frequent utterances received by the bot in the last 15 days.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetUtterancesViewResponse')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description: 'The key for the tag. Keys are not case-sensitive and must be unique.',
        }),
    ),
    value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            "The value associated with a key. The value may be an empty string but it can't be null.",
        }),
    ),
  })
  .openapi({
    required: ['key', 'value'],
    description:
      'A list of key/value pairs that identify a bot, bot alias, or bot channel. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @. ',
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).min(0).max(200).openapi('TagList')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags associated with a resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const PutBotResponseSchema = z
  .object({
    name: BotNameSchema.and(
      z.any().openapi({ description: 'The name of the bot.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the bot.' }),
    ).exactOptional(),
    intents: IntentListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>Intent</code> objects. For more information, see <a>PutBot</a>.',
        }),
    ).exactOptional(),
    enableModelImprovements: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the bot uses accuracy improvements. <code>true</code> indicates that the bot is using the improvements, otherwise, <code>false</code>.',
        }),
    ).exactOptional(),
    nluIntentConfidenceThreshold: ConfidenceThresholdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The score that determines where Amazon Lex inserts the <code>AMAZON.FallbackIntent</code>, <code>AMAZON.KendraSearchIntent</code>, or both when returning alternative intents in a <a href="https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostContent.html">PostContent</a> or <a href="https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html">PostText</a> response. <code>AMAZON.FallbackIntent</code> is inserted if the confidence score for all intents is below this value. <code>AMAZON.KendraSearchIntent</code> is only inserted if it is configured for the bot.',
        }),
    ).exactOptional(),
    clarificationPrompt: PromptSchema.and(
      z
        .any()
        .openapi({
          description:
            " The prompts that Amazon Lex uses when it doesn't understand the user's intent. For more information, see <a>PutBot</a>. ",
        }),
    ).exactOptional(),
    abortStatement: StatementSchema.and(
      z
        .any()
        .openapi({
          description:
            'The message that Amazon Lex uses to cancel a conversation. For more information, see <a>PutBot</a>.',
        }),
    ).exactOptional(),
    status: StatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> When you send a request to create a bot with <code>processBehavior</code> set to <code>BUILD</code>, Amazon Lex sets the <code>status</code> response element to <code>BUILDING</code>.</p> <p>In the <code>READY_BASIC_TESTING</code> state you can test the bot with user inputs that exactly match the utterances configured for the bot's intents and values in the slot types.</p> <p>If Amazon Lex can't build the bot, Amazon Lex sets <code>status</code> to <code>FAILED</code>. Amazon Lex returns the reason for the failure in the <code>failureReason</code> response element. </p> <p>When you set <code>processBehavior</code> to <code>SAVE</code>, Amazon Lex sets the status code to <code>NOT BUILT</code>.</p> <p>When the bot is in the <code>READY</code> state you can test and publish the bot.</p>",
        }),
    ).exactOptional(),
    failureReason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If <code>status</code> is <code>FAILED</code>, Amazon Lex provides the reason that it failed to build the bot.',
        }),
    ).exactOptional(),
    lastUpdatedDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date that the bot was updated. When you create a resource, the creation date and last updated date are the same.',
        }),
    ).exactOptional(),
    createdDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date that the bot was created.' }),
    ).exactOptional(),
    idleSessionTTLInSeconds: SessionTTLSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum length of time that Amazon Lex retains the data gathered in a conversation. For more information, see <a>PutBot</a>.',
        }),
    ).exactOptional(),
    voiceId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Polly voice ID that Amazon Lex uses for voice interaction with the user. For more information, see <a>PutBot</a>.',
        }),
    ).exactOptional(),
    checksum: StringSchema.and(
      z.any().openapi({ description: 'Checksum of the bot that you created.' }),
    ).exactOptional(),
    version: VersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the bot. For a new bot, the version is always <code>$LATEST</code>.',
        }),
    ).exactOptional(),
    locale: LocaleSchema.and(
      z.any().openapi({ description: ' The target locale for the bot. ' }),
    ).exactOptional(),
    childDirected: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For each Amazon Lex bot created with the Amazon Lex Model Building Service, you must specify whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to the Children\'s Online Privacy Protection Act (COPPA) by specifying <code>true</code> or <code>false</code> in the <code>childDirected</code> field. By specifying <code>true</code> in the <code>childDirected</code> field, you confirm that your use of Amazon Lex <b>is</b> related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. By specifying <code>false</code> in the <code>childDirected</code> field, you confirm that your use of Amazon Lex <b>is not</b> related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. You may not specify a default value for the <code>childDirected</code> field that does not accurately reflect whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA.</p> <p>If your use of Amazon Lex relates to a website, program, or other application that is directed in whole or in part, to children under age 13, you must obtain any required verifiable parental consent under COPPA. For information regarding the use of Amazon Lex in connection with websites, programs, or other applications that are directed or targeted, in whole or in part, to children under age 13, see the <a href="https://aws.amazon.com/lex/faqs#data-security">Amazon Lex FAQ.</a> </p>',
        }),
    ).exactOptional(),
    createVersion: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <code>True</code> if a new version of the bot was created. If the <code>createVersion</code> field was not specified in the request, the <code>createVersion</code> field is set to false in the response.',
        }),
    ).exactOptional(),
    detectSentiment: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <code>true</code> if the bot is configured to send user utterances to Amazon Comprehend for sentiment analysis. If the <code>detectSentiment</code> field was not specified in the request, the <code>detectSentiment</code> field is <code>false</code> in the response.',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'A list of tags associated with the bot.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      version: '$LATEST',
      name: 'DocOrderPizzaBot',
      abortStatement: {
        messages: [
          { content: "I don't understand. Can you try again?", contentType: 'PlainText' },
          { content: "I'm sorry, I don't understand.", contentType: 'PlainText' },
        ],
      },
      checksum: '20172ee3-fa06-49b2-bbc5-667c090303e9',
      childDirected: true,
      clarificationPrompt: {
        maxAttempts: 1,
        messages: [
          {
            content: "I'm sorry, I didn't hear that. Can you repeate what you just said?",
            contentType: 'PlainText',
          },
          { content: 'Can you say that again?', contentType: 'PlainText' },
        ],
      },
      createdDate: 1494360160.133,
      description: 'Orders a pizza from a local pizzeria.',
      idleSessionTTLInSeconds: 300,
      intents: [{ intentName: 'DocOrderPizza', intentVersion: '$LATEST' }],
      lastUpdatedDate: 1494360160.133,
      locale: 'en-US',
      status: 'NOT_BUILT',
    },
    required: [],
  })
  .openapi('PutBotResponse')

const PutBotAliasResponseSchema = z
  .object({
    name: AliasNameSchema.and(
      z.any().openapi({ description: 'The name of the alias.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the alias.' }),
    ).exactOptional(),
    botVersion: VersionSchema.and(
      z.any().openapi({ description: 'The version of the bot that the alias points to.' }),
    ).exactOptional(),
    botName: BotNameSchema.and(
      z.any().openapi({ description: 'The name of the bot that the alias points to.' }),
    ).exactOptional(),
    lastUpdatedDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date that the bot alias was updated. When you create a resource, the creation date and the last updated date are the same.',
        }),
    ).exactOptional(),
    createdDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date that the bot alias was created.' }),
    ).exactOptional(),
    checksum: StringSchema.and(
      z.any().openapi({ description: 'The checksum for the current version of the alias.' }),
    ).exactOptional(),
    conversationLogs: ConversationLogsResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            'The settings that determine how Amazon Lex uses conversation logs for the alias.',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'A list of tags associated with a bot.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutBotAliasResponse')

const LogSettingsRequestSchema = z
  .object({
    logType: LogTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of logging to enable. Text logs are delivered to a CloudWatch Logs log group. Audio logs are delivered to an S3 bucket.',
        }),
    ),
    destination: DestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Where the logs will be delivered. Text logs are delivered to a CloudWatch Logs log group. Audio logs are delivered to an S3 bucket.',
        }),
    ),
    kmsKeyArn: KmsKeyArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the AWS KMS customer managed key for encrypting audio logs delivered to an S3 bucket. The key does not apply to CloudWatch Logs and is optional for S3 buckets.',
        }),
    ).exactOptional(),
    resourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the CloudWatch Logs log group or S3 bucket where the logs should be delivered.',
        }),
    ),
  })
  .openapi({
    required: ['logType', 'destination', 'resourceArn'],
    description: 'Settings used to configure delivery mode and destination for conversation logs.',
  })
  .openapi('LogSettingsRequest')

const LogSettingsRequestListSchema = z
  .array(LogSettingsRequestSchema)
  .openapi('LogSettingsRequestList')

const PutIntentResponseSchema = z
  .object({
    name: IntentNameSchema.and(
      z.any().openapi({ description: 'The name of the intent.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the intent.' }),
    ).exactOptional(),
    slots: SlotListSchema.and(
      z
        .any()
        .openapi({ description: 'An array of intent slots that are configured for the intent.' }),
    ).exactOptional(),
    sampleUtterances: IntentUtteranceListSchema.and(
      z
        .any()
        .openapi({
          description: ' An array of sample utterances that are configured for the intent. ',
        }),
    ).exactOptional(),
    confirmationPrompt: PromptSchema.and(
      z
        .any()
        .openapi({
          description:
            'If defined in the intent, Amazon Lex prompts the user to confirm the intent before fulfilling it.',
        }),
    ).exactOptional(),
    rejectionStatement: StatementSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the user answers "no" to the question defined in <code>confirmationPrompt</code> Amazon Lex responds with this statement to acknowledge that the intent was canceled. ',
        }),
    ).exactOptional(),
    followUpPrompt: FollowUpPromptSchema.and(
      z
        .any()
        .openapi({
          description:
            'If defined in the intent, Amazon Lex uses this prompt to solicit additional user activity after the intent is fulfilled.',
        }),
    ).exactOptional(),
    conclusionStatement: StatementSchema.and(
      z
        .any()
        .openapi({
          description:
            'After the Lambda function specified in the<code>fulfillmentActivity</code>intent fulfills the intent, Amazon Lex conveys this statement to the user.',
        }),
    ).exactOptional(),
    dialogCodeHook: CodeHookSchema.and(
      z
        .any()
        .openapi({
          description:
            'If defined in the intent, Amazon Lex invokes this Lambda function for each user input.',
        }),
    ).exactOptional(),
    fulfillmentActivity: FulfillmentActivitySchema.and(
      z
        .any()
        .openapi({
          description:
            'If defined in the intent, Amazon Lex invokes this Lambda function to fulfill the intent after the user provides all of the information required by the intent.',
        }),
    ).exactOptional(),
    parentIntentSignature: BuiltinIntentSignatureSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique identifier for the built-in intent that this intent is based on.',
        }),
    ).exactOptional(),
    lastUpdatedDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date that the intent was updated. When you create a resource, the creation date and last update dates are the same.',
        }),
    ).exactOptional(),
    createdDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date that the intent was created.' }),
    ).exactOptional(),
    version: VersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the intent. For a new intent, the version is always <code>$LATEST</code>.',
        }),
    ).exactOptional(),
    checksum: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Checksum of the <code>$LATEST</code>version of the intent created or updated.',
        }),
    ).exactOptional(),
    createVersion: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <code>True</code> if a new version of the intent was created. If the <code>createVersion</code> field was not specified in the request, the <code>createVersion</code> field is set to false in the response.',
        }),
    ).exactOptional(),
    kendraConfiguration: KendraConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information, if any, required to connect to an Amazon Kendra index and use the <code>AMAZON.KendraSearchIntent</code> intent.',
        }),
    ).exactOptional(),
    inputContexts: InputContextListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>InputContext</code> objects that lists the contexts that must be active for Amazon Lex to choose the intent in a conversation with the user.',
        }),
    ).exactOptional(),
    outputContexts: OutputContextListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>OutputContext</code> objects that lists the contexts that the intent activates when the intent is fulfilled.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      version: '$LATEST',
      name: 'DocOrderPizza',
      checksum: 'ca9bc13d-afc8-4706-bbaf-091f7a5935d6',
      conclusionStatement: {
        messages: [
          {
            content: 'All right, I ordered  you a {Crust} crust {Type} pizza with {Sauce} sauce.',
            contentType: 'PlainText',
          },
          {
            content: 'OK, your {Crust} crust {Type} pizza with {Sauce} sauce is on the way.',
            contentType: 'PlainText',
          },
        ],
        responseCard: 'foo',
      },
      confirmationPrompt: {
        maxAttempts: 1,
        messages: [
          {
            content: 'Should I order  your {Crust} crust {Type} pizza with {Sauce} sauce?',
            contentType: 'PlainText',
          },
        ],
      },
      createdDate: 1494359783.453,
      description: 'Order a pizza from a local pizzeria.',
      fulfillmentActivity: { type: 'ReturnIntent' },
      lastUpdatedDate: 1494359783.453,
      rejectionStatement: {
        messages: [
          { content: "Ok, I'll cancel your order.", contentType: 'PlainText' },
          { content: 'I cancelled your order.', contentType: 'PlainText' },
        ],
      },
      sampleUtterances: [
        'Order me a pizza.',
        'Order me a {Type} pizza.',
        'I want a {Crust} crust {Type} pizza',
        'I want a {Crust} crust {Type} pizza with {Sauce} sauce.',
      ],
      slots: [
        {
          name: 'Sauce',
          description: 'The type of sauce to use on the pizza.',
          priority: 3,
          sampleUtterances: ['Make it {Sauce} sauce.', "I'd like {Sauce} sauce."],
          slotConstraint: 'Required',
          slotType: 'DocPizzaSauceType',
          slotTypeVersion: '$LATEST',
          valueElicitationPrompt: {
            maxAttempts: 1,
            messages: [
              { content: 'White or red sauce?', contentType: 'PlainText' },
              { content: 'Garlic or tomato sauce?', contentType: 'PlainText' },
            ],
          },
        },
        {
          name: 'Type',
          description: 'The type of pizza to order.',
          priority: 1,
          sampleUtterances: [
            'Get me a {Type} pizza.',
            'A {Type} pizza please.',
            "I'd like a {Type} pizza.",
          ],
          slotConstraint: 'Required',
          slotType: 'DocPizzaType',
          slotTypeVersion: '$LATEST',
          valueElicitationPrompt: {
            maxAttempts: 1,
            messages: [
              { content: 'What type of pizza would you like?', contentType: 'PlainText' },
              { content: 'Vegie or cheese pizza?', contentType: 'PlainText' },
              { content: 'I can get you a vegie or a cheese pizza.', contentType: 'PlainText' },
            ],
          },
        },
        {
          name: 'Crust',
          description: 'The type of pizza crust to order.',
          priority: 2,
          sampleUtterances: ['Make it a {Crust} crust.', "I'd like a {Crust} crust."],
          slotConstraint: 'Required',
          slotType: 'DocPizzaCrustType',
          slotTypeVersion: '$LATEST',
          valueElicitationPrompt: {
            maxAttempts: 1,
            messages: [
              { content: 'What type of crust would you like?', contentType: 'PlainText' },
              { content: 'Thick or thin crust?', contentType: 'PlainText' },
            ],
          },
        },
      ],
    },
    required: [],
  })
  .openapi('PutIntentResponse')

const PutSlotTypeResponseSchema = z
  .object({
    name: SlotTypeNameSchema.and(
      z.any().openapi({ description: 'The name of the slot type.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the slot type.' }),
    ).exactOptional(),
    enumerationValues: EnumerationValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>EnumerationValue</code> objects that defines the values that the slot type can take.',
        }),
    ).exactOptional(),
    lastUpdatedDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date that the slot type was updated. When you create a slot type, the creation date and last update date are the same.',
        }),
    ).exactOptional(),
    createdDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date that the slot type was created.' }),
    ).exactOptional(),
    version: VersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the slot type. For a new slot type, the version is always <code>$LATEST</code>. ',
        }),
    ).exactOptional(),
    checksum: StringSchema.and(
      z
        .any()
        .openapi({ description: 'Checksum of the <code>$LATEST</code> version of the slot type.' }),
    ).exactOptional(),
    valueSelectionStrategy: SlotValueSelectionStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            'The slot resolution strategy that Amazon Lex uses to determine the value of the slot. For more information, see <a>PutSlotType</a>.',
        }),
    ).exactOptional(),
    createVersion: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <code>True</code> if a new version of the slot type was created. If the <code>createVersion</code> field was not specified in the request, the <code>createVersion</code> field is set to false in the response.',
        }),
    ).exactOptional(),
    parentSlotTypeSignature: CustomOrBuiltinSlotTypeNameSchema.and(
      z
        .any()
        .openapi({ description: 'The built-in slot type used as the parent of the slot type.' }),
    ).exactOptional(),
    slotTypeConfigurations: SlotTypeConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description: 'Configuration information that extends the parent built-in slot type.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      version: '$LATEST',
      name: 'DocPizzaSauceType',
      checksum: 'cfd00ed1-775d-4357-947c-aca7e73b44ba',
      createdDate: 1494356442.23,
      description: 'Available pizza sauces',
      enumerationValues: [{ value: 'red' }, { value: 'white' }],
      lastUpdatedDate: 1494356442.23,
    },
    required: [],
  })
  .openapi('PutSlotTypeResponse')

const StartImportResponseSchema = z
  .object({
    name: NameSchema.and(
      z.any().openapi({ description: 'The name given to the import job.' }),
    ).exactOptional(),
    resourceType: ResourceTypeSchema.and(
      z.any().openapi({ description: 'The type of resource to import.' }),
    ).exactOptional(),
    mergeStrategy: MergeStrategySchema.and(
      z.any().openapi({ description: 'The action to take when there is a merge conflict.' }),
    ).exactOptional(),
    importId: StringSchema.and(
      z.any().openapi({ description: 'The identifier for the specific import job.' }),
    ).exactOptional(),
    importStatus: ImportStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the import job. If the status is <code>FAILED</code>, you can get the reason for the failure using the <code>GetImport</code> operation.',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z.any().openapi({ description: 'A list of tags added to the imported bot.' }),
    ).exactOptional(),
    createdDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'A timestamp for the date and time that the import job was requested.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartImportResponse')

const StartMigrationResponseSchema = z
  .object({
    v1BotName: BotNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the Amazon Lex V1 bot that you are migrating to Amazon Lex V2.',
        }),
    ).exactOptional(),
    v1BotVersion: VersionSchema.and(
      z.any().openapi({ description: 'The version of the bot to migrate to Amazon Lex V2. ' }),
    ).exactOptional(),
    v1BotLocale: LocaleSchema.and(
      z.any().openapi({ description: 'The locale used for the Amazon Lex V1 bot. ' }),
    ).exactOptional(),
    v2BotId: V2BotIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the Amazon Lex V2 bot. ' }),
    ).exactOptional(),
    v2BotRole: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The IAM role that Amazon Lex uses to run the Amazon Lex V2 bot.',
        }),
    ).exactOptional(),
    migrationId: MigrationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier that Amazon Lex assigned to the migration.',
        }),
    ).exactOptional(),
    migrationStrategy: MigrationStrategySchema.and(
      z.any().openapi({ description: 'The strategy used to conduct the migration.' }),
    ).exactOptional(),
    migrationTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the migration started.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartMigrationResponse')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const AliasNameOrListAllSchema = z
  .string()
  .regex(/^(-|^([A-Za-z]_?)+$)$/)
  .min(1)
  .max(100)
  .openapi('AliasNameOrListAll')

const AmazonResourceNameSchema = z.string().min(1).max(1011).openapi('AmazonResourceName')

const BlobSchema = z.string().openapi('Blob')

const BotVersionsSchema = z.array(VersionSchema).min(1).max(5).openapi('BotVersions')

const ConversationLogsRequestSchema = z
  .object({
    logSettings: LogSettingsRequestListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The settings for your conversation logs. You can log the conversation text, conversation audio, or both.',
        }),
    ),
    iamRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an IAM role with permission to write to your CloudWatch Logs for text logs and your S3 bucket for audio logs. If audio encryption is enabled, this role also provides access permission for the AWS KMS key used for encrypting audio logs. For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/conversation-logs-role-and-policy.html">Creating an IAM Role and Policy for Conversation Logs</a>.',
        }),
    ),
  })
  .openapi({
    required: ['logSettings', 'iamRoleArn'],
    description: 'Provides the settings needed for conversation logs.',
  })
  .openapi('ConversationLogsRequest')

const CreateBotVersionRequestSchema = z
  .object({
    checksum: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Identifies a specific revision of the <code>$LATEST</code> version of the bot. If you specify a checksum and the <code>$LATEST</code> version of the bot has a different checksum, a <code>PreconditionFailedException</code> exception is returned and Amazon Lex doesn't publish a new version. If you don't specify a checksum, Amazon Lex publishes the <code>$LATEST</code> version.",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'CreateBotVersionRequest', required: [] })
  .openapi('CreateBotVersionRequest')

const CreateIntentVersionRequestSchema = z
  .object({
    checksum: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Checksum of the <code>$LATEST</code> version of the intent that should be used to create the new version. If you specify a checksum and the <code>$LATEST</code> version of the intent has a different checksum, Amazon Lex returns a <code>PreconditionFailedException</code> exception and doesn't publish a new version. If you don't specify a checksum, Amazon Lex publishes the <code>$LATEST</code> version.",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'CreateIntentVersionRequest', required: [] })
  .openapi('CreateIntentVersionRequest')

const CreateSlotTypeVersionRequestSchema = z
  .object({
    checksum: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Checksum for the <code>$LATEST</code> version of the slot type that you want to publish. If you specify a checksum and the <code>$LATEST</code> version of the slot type has a different checksum, Amazon Lex returns a <code>PreconditionFailedException</code> exception and doesn't publish the new version. If you don't specify a checksum, Amazon Lex publishes the <code>$LATEST</code> version.",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'CreateSlotTypeVersionRequest', required: [] })
  .openapi('CreateSlotTypeVersionRequest')

const DeleteBotAliasRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteBotAliasRequest' })
  .openapi('DeleteBotAliasRequest')

const DeleteBotChannelAssociationRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteBotChannelAssociationRequest' })
  .openapi('DeleteBotChannelAssociationRequest')

const DeleteBotRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteBotRequest' })
  .openapi('DeleteBotRequest')

const DeleteBotVersionRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteBotVersionRequest' })
  .openapi('DeleteBotVersionRequest')

const DeleteIntentRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteIntentRequest' })
  .openapi('DeleteIntentRequest')

const DeleteIntentVersionRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteIntentVersionRequest' })
  .openapi('DeleteIntentVersionRequest')

const DeleteSlotTypeRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteSlotTypeRequest' })
  .openapi('DeleteSlotTypeRequest')

const DeleteSlotTypeVersionRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteSlotTypeVersionRequest' })
  .openapi('DeleteSlotTypeVersionRequest')

const UserIdSchema = z.string().min(2).max(100).openapi('UserId')

const DeleteUtterancesRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteUtterancesRequest' })
  .openapi('DeleteUtterancesRequest')

const GetBotAliasRequestSchema = z
  .object({})
  .openapi({ title: 'GetBotAliasRequest' })
  .openapi('GetBotAliasRequest')

const MaxResultsSchema = z.int().min(1).max(50).openapi('MaxResults')

const GetBotAliasesRequestSchema = z
  .object({})
  .openapi({ title: 'GetBotAliasesRequest' })
  .openapi('GetBotAliasesRequest')

const GetBotChannelAssociationRequestSchema = z
  .object({})
  .openapi({ title: 'GetBotChannelAssociationRequest' })
  .openapi('GetBotChannelAssociationRequest')

const GetBotChannelAssociationsRequestSchema = z
  .object({})
  .openapi({ title: 'GetBotChannelAssociationsRequest' })
  .openapi('GetBotChannelAssociationsRequest')

const GetBotRequestSchema = z
  .object({})
  .openapi({ title: 'GetBotRequest' })
  .openapi('GetBotRequest')

const GetBotVersionsRequestSchema = z
  .object({})
  .openapi({ title: 'GetBotVersionsRequest' })
  .openapi('GetBotVersionsRequest')

const GetBotsRequestSchema = z
  .object({})
  .openapi({ title: 'GetBotsRequest' })
  .openapi('GetBotsRequest')

const GetBuiltinIntentRequestSchema = z
  .object({})
  .openapi({ title: 'GetBuiltinIntentRequest' })
  .openapi('GetBuiltinIntentRequest')

const GetBuiltinIntentsRequestSchema = z
  .object({})
  .openapi({ title: 'GetBuiltinIntentsRequest' })
  .openapi('GetBuiltinIntentsRequest')

const GetBuiltinSlotTypesRequestSchema = z
  .object({})
  .openapi({ title: 'GetBuiltinSlotTypesRequest' })
  .openapi('GetBuiltinSlotTypesRequest')

const GetExportRequestSchema = z
  .object({})
  .openapi({ title: 'GetExportRequest' })
  .openapi('GetExportRequest')

const GetImportRequestSchema = z
  .object({})
  .openapi({ title: 'GetImportRequest' })
  .openapi('GetImportRequest')

const GetIntentRequestSchema = z
  .object({})
  .openapi({ title: 'GetIntentRequest' })
  .openapi('GetIntentRequest')

const GetIntentVersionsRequestSchema = z
  .object({})
  .openapi({ title: 'GetIntentVersionsRequest' })
  .openapi('GetIntentVersionsRequest')

const GetIntentsRequestSchema = z
  .object({})
  .openapi({ title: 'GetIntentsRequest' })
  .openapi('GetIntentsRequest')

const GetMigrationRequestSchema = z
  .object({})
  .openapi({ title: 'GetMigrationRequest' })
  .openapi('GetMigrationRequest')

const MigrationSortAttributeSchema = z
  .enum(['V1_BOT_NAME', 'MIGRATION_DATE_TIME'])
  .openapi('MigrationSortAttribute')

const SortOrderSchema = z.enum(['ASCENDING', 'DESCENDING']).openapi('SortOrder')

const GetMigrationsRequestSchema = z
  .object({})
  .openapi({ title: 'GetMigrationsRequest' })
  .openapi('GetMigrationsRequest')

const GetSlotTypeRequestSchema = z
  .object({})
  .openapi({ title: 'GetSlotTypeRequest' })
  .openapi('GetSlotTypeRequest')

const GetSlotTypeVersionsRequestSchema = z
  .object({})
  .openapi({ title: 'GetSlotTypeVersionsRequest' })
  .openapi('GetSlotTypeVersionsRequest')

const GetSlotTypesRequestSchema = z
  .object({})
  .openapi({ title: 'GetSlotTypesRequest' })
  .openapi('GetSlotTypesRequest')

const StatusTypeSchema = z.enum(['Detected', 'Missed']).openapi('StatusType')

const GetUtterancesViewRequestSchema = z
  .object({})
  .openapi({ title: 'GetUtterancesViewRequest' })
  .openapi('GetUtterancesViewRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const ProcessBehaviorSchema = z.enum(['SAVE', 'BUILD']).openapi('ProcessBehavior')

const PutBotAliasRequestSchema = z
  .object({
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the alias.' }),
    ).exactOptional(),
    botVersion: VersionSchema.and(z.any().openapi({ description: 'The version of the bot.' })),
    checksum: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Identifies a specific revision of the <code>$LATEST</code> version.</p> <p>When you create a new bot alias, leave the <code>checksum</code> field blank. If you specify a checksum you get a <code>BadRequestException</code> exception.</p> <p>When you want to update a bot alias, set the <code>checksum</code> field to the checksum of the most recent revision of the <code>$LATEST</code> version. If you don't specify the <code> checksum</code> field, or if the checksum does not match the <code>$LATEST</code> version, you get a <code>PreconditionFailedException</code> exception.</p>",
        }),
    ).exactOptional(),
    conversationLogs: ConversationLogsRequestSchema.and(
      z.any().openapi({ description: 'Settings for conversation logs for the alias.' }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of tags to add to the bot alias. You can only add tags when you create an alias, you can't use the <code>PutBotAlias</code> operation to update the tags on a bot alias. To update tags, use the <code>TagResource</code> operation.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['botVersion'], title: 'PutBotAliasRequest' })
  .openapi('PutBotAliasRequest')

const PutBotRequestSchema = z
  .object({
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the bot.' }),
    ).exactOptional(),
    intents: IntentListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>Intent</code> objects. Each intent represents a command that a user can express. For example, a pizza ordering bot might support an OrderPizza intent. For more information, see <a>how-it-works</a>.',
        }),
    ).exactOptional(),
    enableModelImprovements: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Set to <code>true</code> to enable access to natural language understanding improvements. </p> <p>When you set the <code>enableModelImprovements</code> parameter to <code>true</code> you can use the <code>nluIntentConfidenceThreshold</code> parameter to configure confidence scores. For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/confidence-scores.html">Confidence Scores</a>.</p> <p>You can only set the <code>enableModelImprovements</code> parameter in certain Regions. If you set the parameter to <code>true</code>, your bot has access to accuracy improvements.</p> <p>The Regions where you can set the <code>enableModelImprovements</code> parameter to <code>true</code> are:</p> <ul> <li> <p>US East (N. Virginia) (us-east-1)</p> </li> <li> <p>US West (Oregon) (us-west-2)</p> </li> <li> <p>Asia Pacific (Sydney) (ap-southeast-2)</p> </li> <li> <p>EU (Ireland) (eu-west-1)</p> </li> </ul> <p>In other Regions, the <code>enableModelImprovements</code> parameter is set to <code>true</code> by default. In these Regions setting the parameter to <code>false</code> throws a <code>ValidationException</code> exception.</p>',
        }),
    ).exactOptional(),
    nluIntentConfidenceThreshold: ConfidenceThresholdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Determines the threshold where Amazon Lex will insert the <code>AMAZON.FallbackIntent</code>, <code>AMAZON.KendraSearchIntent</code>, or both when returning alternative intents in a <a href="https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostContent.html">PostContent</a> or <a href="https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html">PostText</a> response. <code>AMAZON.FallbackIntent</code> and <code>AMAZON.KendraSearchIntent</code> are only inserted if they are configured for the bot.</p> <p>You must set the <code>enableModelImprovements</code> parameter to <code>true</code> to use confidence scores in the following regions.</p> <ul> <li> <p>US East (N. Virginia) (us-east-1)</p> </li> <li> <p>US West (Oregon) (us-west-2)</p> </li> <li> <p>Asia Pacific (Sydney) (ap-southeast-2)</p> </li> <li> <p>EU (Ireland) (eu-west-1)</p> </li> </ul> <p>In other Regions, the <code>enableModelImprovements</code> parameter is set to <code>true</code> by default.</p> <p>For example, suppose a bot is configured with the confidence threshold of 0.80 and the <code>AMAZON.FallbackIntent</code>. Amazon Lex returns three alternative intents with the following confidence scores: IntentA (0.70), IntentB (0.60), IntentC (0.50). The response from the <code>PostText</code> operation would be:</p> <ul> <li> <p>AMAZON.FallbackIntent</p> </li> <li> <p>IntentA</p> </li> <li> <p>IntentB</p> </li> <li> <p>IntentC</p> </li> </ul>',
        }),
    ).exactOptional(),
    clarificationPrompt: PromptSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When Amazon Lex doesn\'t understand the user\'s intent, it uses this message to get clarification. To specify how many times Amazon Lex should repeat the clarification prompt, use the <code>maxAttempts</code> field. If Amazon Lex still doesn\'t understand, it sends the message in the <code>abortStatement</code> field. </p> <p>When you create a clarification prompt, make sure that it suggests the correct response from the user. for example, for a bot that orders pizza and drinks, you might create this clarification prompt: "What would you like to do? You can say \'Order a pizza\' or \'Order a drink.\'"</p> <p>If you have defined a fallback intent, it will be invoked if the clarification prompt is repeated the number of times defined in the <code>maxAttempts</code> field. For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/built-in-intent-fallback.html"> AMAZON.FallbackIntent</a>.</p> <p>If you don\'t define a clarification prompt, at runtime Amazon Lex will return a 400 Bad Request exception in three cases: </p> <ul> <li> <p>Follow-up prompt - When the user responds to a follow-up prompt but does not provide an intent. For example, in response to a follow-up prompt that says "Would you like anything else today?" the user says "Yes." Amazon Lex will return a 400 Bad Request exception because it does not have a clarification prompt to send to the user to get an intent.</p> </li> <li> <p>Lambda function - When using a Lambda function, you return an <code>ElicitIntent</code> dialog type. Since Amazon Lex does not have a clarification prompt to get an intent from the user, it returns a 400 Bad Request exception.</p> </li> <li> <p>PutSession operation - When using the <code>PutSession</code> operation, you send an <code>ElicitIntent</code> dialog type. Since Amazon Lex does not have a clarification prompt to get an intent from the user, it returns a 400 Bad Request exception.</p> </li> </ul>',
        }),
    ).exactOptional(),
    abortStatement: StatementSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When Amazon Lex can\'t understand the user\'s input in context, it tries to elicit the information a few times. After that, Amazon Lex sends the message defined in <code>abortStatement</code> to the user, and then cancels the conversation. To set the number of retries, use the <code>valueElicitationPrompt</code> field for the slot type. </p> <p>For example, in a pizza ordering bot, Amazon Lex might ask a user "What type of crust would you like?" If the user\'s response is not one of the expected responses (for example, "thin crust, "deep dish," etc.), Amazon Lex tries to elicit a correct response a few more times. </p> <p>For example, in a pizza ordering application, <code>OrderPizza</code> might be one of the intents. This intent might require the <code>CrustType</code> slot. You specify the <code>valueElicitationPrompt</code> field when you create the <code>CrustType</code> slot.</p> <p>If you have defined a fallback intent the cancel statement will not be sent to the user, the fallback intent is used instead. For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/built-in-intent-fallback.html"> AMAZON.FallbackIntent</a>.</p>',
        }),
    ).exactOptional(),
    idleSessionTTLInSeconds: SessionTTLSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The maximum time in seconds that Amazon Lex retains the data gathered in a conversation.</p> <p>A user interaction session remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Lex deletes any data provided before the timeout.</p> <p>For example, suppose that a user chooses the OrderPizza intent, but gets sidetracked halfway through placing an order. If the user doesn't complete the order within the specified time, Amazon Lex discards the slot information that it gathered, and the user must start over.</p> <p>If you don't include the <code>idleSessionTTLInSeconds</code> element in a <code>PutBot</code> operation request, Amazon Lex uses the default value. This is also true if the request replaces an existing bot.</p> <p>The default is 300 seconds (5 minutes).</p>",
        }),
    ).exactOptional(),
    voiceId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Polly voice ID that you want Amazon Lex to use for voice interactions with the user. The locale configured for the voice must match the locale of the bot. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/voicelist.html">Voices in Amazon Polly</a> in the <i>Amazon Polly Developer Guide</i>.',
        }),
    ).exactOptional(),
    checksum: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Identifies a specific revision of the <code>$LATEST</code> version.</p> <p>When you create a new bot, leave the <code>checksum</code> field blank. If you specify a checksum you get a <code>BadRequestException</code> exception.</p> <p>When you want to update a bot, set the <code>checksum</code> field to the checksum of the most recent revision of the <code>$LATEST</code> version. If you don't specify the <code> checksum</code> field, or if the checksum does not match the <code>$LATEST</code> version, you get a <code>PreconditionFailedException</code> exception.</p>",
        }),
    ).exactOptional(),
    processBehavior: ProcessBehaviorSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>If you set the <code>processBehavior</code> element to <code>BUILD</code>, Amazon Lex builds the bot so that it can be run. If you set the element to <code>SAVE</code> Amazon Lex saves the bot, but doesn't build it. </p> <p>If you don't specify this value, the default value is <code>BUILD</code>.</p>",
        }),
    ).exactOptional(),
    locale: LocaleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Specifies the target locale for the bot. Any intent used in the bot must be compatible with the locale of the bot. </p> <p>The default is <code>en-US</code>.</p>',
        }),
    ),
    childDirected: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For each Amazon Lex bot created with the Amazon Lex Model Building Service, you must specify whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to the Children\'s Online Privacy Protection Act (COPPA) by specifying <code>true</code> or <code>false</code> in the <code>childDirected</code> field. By specifying <code>true</code> in the <code>childDirected</code> field, you confirm that your use of Amazon Lex <b>is</b> related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. By specifying <code>false</code> in the <code>childDirected</code> field, you confirm that your use of Amazon Lex <b>is not</b> related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. You may not specify a default value for the <code>childDirected</code> field that does not accurately reflect whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA.</p> <p>If your use of Amazon Lex relates to a website, program, or other application that is directed in whole or in part, to children under age 13, you must obtain any required verifiable parental consent under COPPA. For information regarding the use of Amazon Lex in connection with websites, programs, or other applications that are directed or targeted, in whole or in part, to children under age 13, see the <a href="https://aws.amazon.com/lex/faqs#data-security">Amazon Lex FAQ.</a> </p>',
        }),
    ),
    detectSentiment: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "When set to <code>true</code> user utterances are sent to Amazon Comprehend for sentiment analysis. If you don't specify <code>detectSentiment</code>, the default is <code>false</code>.",
        }),
    ).exactOptional(),
    createVersion: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "When set to <code>true</code> a new numbered version of the bot is created. This is the same as calling the <code>CreateBotVersion</code> operation. If you don't specify <code>createVersion</code>, the default is <code>false</code>.",
        }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of tags to add to the bot. You can only add tags when you create a bot, you can't use the <code>PutBot</code> operation to update the tags on a bot. To update tags, use the <code>TagResource</code> operation.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['locale', 'childDirected'], title: 'PutBotRequest' })
  .openapi('PutBotRequest')

const PutIntentRequestSchema = z
  .object({
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the intent.' }),
    ).exactOptional(),
    slots: SlotListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of intent slots. At runtime, Amazon Lex elicits required slot values from the user using prompts defined in the slots. For more information, see <a>how-it-works</a>. ',
        }),
    ).exactOptional(),
    sampleUtterances: IntentUtteranceListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of utterances (strings) that a user might say to signal the intent. For example, "I want {PizzaSize} pizza", "Order {Quantity} {PizzaSize} pizzas". </p> <p>In each utterance, a slot name is enclosed in curly braces. </p>',
        }),
    ).exactOptional(),
    confirmationPrompt: PromptSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Prompts the user to confirm the intent. This question should have a yes or no answer.</p> <p>Amazon Lex uses this prompt to ensure that the user acknowledges that the intent is ready for fulfillment. For example, with the <code>OrderPizza</code> intent, you might want to confirm that the order is correct before placing it. For other intents, such as intents that simply respond to user questions, you might not need to ask the user for confirmation before providing the information. </p> <note> <p>You you must provide both the <code>rejectionStatement</code> and the <code>confirmationPrompt</code>, or neither.</p> </note>',
        }),
    ).exactOptional(),
    rejectionStatement: StatementSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>When the user answers "no" to the question defined in <code>confirmationPrompt</code>, Amazon Lex responds with this statement to acknowledge that the intent was canceled. </p> <note> <p>You must provide both the <code>rejectionStatement</code> and the <code>confirmationPrompt</code>, or neither.</p> </note>',
        }),
    ).exactOptional(),
    followUpPrompt: FollowUpPromptSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Amazon Lex uses this prompt to solicit additional activity after fulfilling an intent. For example, after the <code>OrderPizza</code> intent is fulfilled, you might prompt the user to order a drink.</p> <p>The action that Amazon Lex takes depends on the user\'s response, as follows:</p> <ul> <li> <p>If the user says "Yes" it responds with the clarification prompt that is configured for the bot.</p> </li> <li> <p>if the user says "Yes" and continues with an utterance that triggers an intent it starts a conversation for the intent.</p> </li> <li> <p>If the user says "No" it responds with the rejection statement configured for the the follow-up prompt.</p> </li> <li> <p>If it doesn\'t recognize the utterance it repeats the follow-up prompt again.</p> </li> </ul> <p>The <code>followUpPrompt</code> field and the <code>conclusionStatement</code> field are mutually exclusive. You can specify only one. </p>',
        }),
    ).exactOptional(),
    conclusionStatement: StatementSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> The statement that you want Amazon Lex to convey to the user after the intent is successfully fulfilled by the Lambda function. </p> <p>This element is relevant only if you provide a Lambda function in the <code>fulfillmentActivity</code>. If you return the intent to the client application, you can't specify this element.</p> <note> <p>The <code>followUpPrompt</code> and <code>conclusionStatement</code> are mutually exclusive. You can specify only one.</p> </note>",
        }),
    ).exactOptional(),
    dialogCodeHook: CodeHookSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> Specifies a Lambda function to invoke for each user input. You can invoke this Lambda function to personalize user interaction. </p> <p>For example, suppose your bot determines that the user is John. Your Lambda function might retrieve John's information from a backend database and prepopulate some of the values. For example, if you find that John is gluten intolerant, you might set the corresponding intent slot, <code>GlutenIntolerant</code>, to true. You might find John's phone number and set the corresponding session attribute. </p>",
        }),
    ).exactOptional(),
    fulfillmentActivity: FulfillmentActivitySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Required. Describes how the intent is fulfilled. For example, after a user provides all of the information for a pizza order, <code>fulfillmentActivity</code> defines how the bot places an order with a local pizza store. </p> <p> You might configure Amazon Lex to return all of the intent information to the client application, or direct it to invoke a Lambda function that can process the intent (for example, place an order with a pizzeria). </p>',
        }),
    ).exactOptional(),
    parentIntentSignature: BuiltinIntentSignatureSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the built-in intent to base this intent on. To find the signature for an intent, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents">Standard Built-in Intents</a> in the <i>Alexa Skills Kit</i>.',
        }),
    ).exactOptional(),
    checksum: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Identifies a specific revision of the <code>$LATEST</code> version.</p> <p>When you create a new intent, leave the <code>checksum</code> field blank. If you specify a checksum you get a <code>BadRequestException</code> exception.</p> <p>When you want to update a intent, set the <code>checksum</code> field to the checksum of the most recent revision of the <code>$LATEST</code> version. If you don't specify the <code> checksum</code> field, or if the checksum does not match the <code>$LATEST</code> version, you get a <code>PreconditionFailedException</code> exception.</p>",
        }),
    ).exactOptional(),
    createVersion: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'When set to <code>true</code> a new numbered version of the intent is created. This is the same as calling the <code>CreateIntentVersion</code> operation. If you do not specify <code>createVersion</code>, the default is <code>false</code>.',
        }),
    ).exactOptional(),
    kendraConfiguration: KendraConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information required to use the <code>AMAZON.KendraSearchIntent</code> intent to connect to an Amazon Kendra index. For more information, see <a href="http://docs.aws.amazon.com/lex/latest/dg/built-in-intent-kendra-search.html"> AMAZON.KendraSearchIntent</a>.',
        }),
    ).exactOptional(),
    inputContexts: InputContextListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>InputContext</code> objects that lists the contexts that must be active for Amazon Lex to choose the intent in a conversation with the user.',
        }),
    ).exactOptional(),
    outputContexts: OutputContextListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of <code>OutputContext</code> objects that lists the contexts that the intent activates when the intent is fulfilled.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'PutIntentRequest', required: [] })
  .openapi('PutIntentRequest')

const PutSlotTypeRequestSchema = z
  .object({
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the slot type.' }),
    ).exactOptional(),
    enumerationValues: EnumerationValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of <code>EnumerationValue</code> objects that defines the values that the slot type can take. Each value can have a list of <code>synonyms</code>, which are additional values that help train the machine learning model about the values that it resolves for a slot. </p> <p>A regular expression slot type doesn't require enumeration values. All other slot types require a list of enumeration values.</p> <p>When Amazon Lex resolves a slot value, it generates a resolution list that contains up to five possible values for the slot. If you are using a Lambda function, this resolution list is passed to the function. If you are not using a Lambda function you can choose to return the value that the user entered or the first value in the resolution list as the slot value. The <code>valueSelectionStrategy</code> field indicates the option to use. </p>",
        }),
    ).exactOptional(),
    checksum: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Identifies a specific revision of the <code>$LATEST</code> version.</p> <p>When you create a new slot type, leave the <code>checksum</code> field blank. If you specify a checksum you get a <code>BadRequestException</code> exception.</p> <p>When you want to update a slot type, set the <code>checksum</code> field to the checksum of the most recent revision of the <code>$LATEST</code> version. If you don't specify the <code> checksum</code> field, or if the checksum does not match the <code>$LATEST</code> version, you get a <code>PreconditionFailedException</code> exception.</p>",
        }),
    ).exactOptional(),
    valueSelectionStrategy: SlotValueSelectionStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Determines the slot resolution strategy that Amazon Lex uses to return slot type values. The field can be set to one of the following values:</p> <ul> <li> <p> <code>ORIGINAL_VALUE</code> - Returns the value entered by the user, if the user value is similar to the slot value.</p> </li> <li> <p> <code>TOP_RESOLUTION</code> - If there is a resolution list for the slot, return the first value in the resolution list as the slot type value. If there is no resolution list, null is returned.</p> </li> </ul> <p>If you don't specify the <code>valueSelectionStrategy</code>, the default is <code>ORIGINAL_VALUE</code>.</p>",
        }),
    ).exactOptional(),
    createVersion: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'When set to <code>true</code> a new numbered version of the slot type is created. This is the same as calling the <code>CreateSlotTypeVersion</code> operation. If you do not specify <code>createVersion</code>, the default is <code>false</code>.',
        }),
    ).exactOptional(),
    parentSlotTypeSignature: CustomOrBuiltinSlotTypeNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The built-in slot type used as the parent of the slot type. When you define a parent slot type, the new slot type has all of the same configuration as the parent.</p> <p>Only <code>AMAZON.AlphaNumeric</code> is supported.</p>',
        }),
    ).exactOptional(),
    slotTypeConfigurations: SlotTypeConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration information that extends the parent built-in slot type. The configuration is added to the settings for the parent slot type.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'PutSlotTypeRequest', required: [] })
  .openapi('PutSlotTypeRequest')

const StartImportRequestSchema = z
  .object({
    payload: BlobSchema.and(
      z
        .any()
        .openapi({
          description:
            'A zip archive in binary format. The archive should contain one file, a JSON file containing the resource to import. The resource should match the type specified in the <code>resourceType</code> field.',
        }),
    ),
    resourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the type of resource to export. Each resource also exports any resources that it depends on. </p> <ul> <li> <p>A bot exports dependent intents.</p> </li> <li> <p>An intent exports dependent slot types.</p> </li> </ul>',
        }),
    ),
    mergeStrategy: MergeStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the action that the <code>StartImport</code> operation should take when there is an existing resource with the same name.</p> <ul> <li> <p>FAIL_ON_CONFLICT - The import operation is stopped on the first conflict between a resource in the import file and an existing resource. The name of the resource causing the conflict is in the <code>failureReason</code> field of the response to the <code>GetImport</code> operation.</p> <p>OVERWRITE_LATEST - The import operation proceeds even if there is a conflict with an existing resource. The $LASTEST version of the existing resource is overwritten with the data from the import file.</p> </li> </ul>',
        }),
    ),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of tags to add to the imported bot. You can only add tags when you import a bot, you can't add tags to an intent or slot type.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['payload', 'resourceType', 'mergeStrategy'], title: 'StartImportRequest' })
  .openapi('StartImportRequest')

const V2BotNameSchema = z
  .string()
  .regex(/^([0-9a-zA-Z][_-]?)+$/)
  .min(1)
  .max(100)
  .openapi('V2BotName')

const StartMigrationRequestSchema = z
  .object({
    v1BotName: BotNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the Amazon Lex V1 bot that you are migrating to Amazon Lex V2.',
        }),
    ),
    v1BotVersion: VersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the bot to migrate to Amazon Lex V2. You can migrate the <code>$LATEST</code> version as well as any numbered version.',
        }),
    ),
    v2BotName: V2BotNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the Amazon Lex V2 bot that you are migrating the Amazon Lex V1 bot to. </p> <ul> <li> <p>If the Amazon Lex V2 bot doesn't exist, you must use the <code>CREATE_NEW</code> migration strategy.</p> </li> <li> <p>If the Amazon Lex V2 bot exists, you must use the <code>UPDATE_EXISTING</code> migration strategy to change the contents of the Amazon Lex V2 bot.</p> </li> </ul>",
        }),
    ),
    v2BotRole: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The IAM role that Amazon Lex uses to run the Amazon Lex V2 bot.',
        }),
    ),
    migrationStrategy: MigrationStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The strategy used to conduct the migration.</p> <ul> <li> <p> <code>CREATE_NEW</code> - Creates a new Amazon Lex V2 bot and migrates the Amazon Lex V1 bot to the new bot.</p> </li> <li> <p> <code>UPDATE_EXISTING</code> - Overwrites the existing Amazon Lex V2 bot metadata and the locale being migrated. It doesn't change any other locales in the Amazon Lex V2 bot. If the locale doesn't exist, a new locale is created in the Amazon Lex V2 bot.</p> </li> </ul>",
        }),
    ),
  })
  .openapi({
    required: ['v1BotName', 'v1BotVersion', 'v2BotName', 'v2BotRole', 'migrationStrategy'],
    title: 'StartMigrationRequest',
  })
  .openapi('StartMigrationRequest')

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(200).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    tags: TagListSchema.and(
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

export const postBotsNameVersionsRoute = createRoute({
  method: 'post',
  path: '/bots/{name}/versions',
  description:
    "<p>Creates a new version of the bot based on the <code>$LATEST</code> version. If the <code>$LATEST</code> version of this resource hasn't changed since you created the last version, Amazon Lex doesn't create a new version. It returns the last created version.</p> <note> <p>You can update only the <code>$LATEST</code> version of the bot. You can't update the numbered versions that you create with the <code>CreateBotVersion</code> operation.</p> </note> <p> When you create the first version of a bot, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see <a>versioning-intro</a>. </p> <p> This operation requires permission for the <code>lex:CreateBotVersion</code> action. </p>",
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
      name: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              'The name of the bot that you want to create a new version of. The name is case sensitive. ',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 2, maxLength: 50 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              checksum: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Identifies a specific revision of the <code>$LATEST</code> version of the bot. If you specify a checksum and the <code>$LATEST</code> version of the bot has a different checksum, a <code>PreconditionFailedException</code> exception is returned and Amazon Lex doesn't publish a new version. If you don't specify a checksum, Amazon Lex publishes the <code>$LATEST</code> version.",
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateBotVersionResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    485: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
  },
})

export const postIntentsNameVersionsRoute = createRoute({
  method: 'post',
  path: '/intents/{name}/versions',
  description:
    "<p>Creates a new version of an intent based on the <code>$LATEST</code> version of the intent. If the <code>$LATEST</code> version of this intent hasn't changed since you last updated it, Amazon Lex doesn't create a new version. It returns the last version you created.</p> <note> <p>You can update only the <code>$LATEST</code> version of the intent. You can't update the numbered versions that you create with the <code>CreateIntentVersion</code> operation.</p> </note> <p> When you create a version of an intent, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see <a>versioning-intro</a>. </p> <p>This operation requires permissions to perform the <code>lex:CreateIntentVersion</code> action. </p>",
  operationId: 'CreateIntentVersion',
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
      name: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              'The name of the intent that you want to create a new version of. The name is case sensitive. ',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              checksum: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Checksum of the <code>$LATEST</code> version of the intent that should be used to create the new version. If you specify a checksum and the <code>$LATEST</code> version of the intent has a different checksum, Amazon Lex returns a <code>PreconditionFailedException</code> exception and doesn't publish a new version. If you don't specify a checksum, Amazon Lex publishes the <code>$LATEST</code> version.",
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateIntentVersionResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    485: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
  },
})

export const postSlottypesNameVersionsRoute = createRoute({
  method: 'post',
  path: '/slottypes/{name}/versions',
  description:
    "<p>Creates a new version of a slot type based on the <code>$LATEST</code> version of the specified slot type. If the <code>$LATEST</code> version of this resource has not changed since the last version that you created, Amazon Lex doesn't create a new version. It returns the last version that you created. </p> <note> <p>You can update only the <code>$LATEST</code> version of a slot type. You can't update the numbered versions that you create with the <code>CreateSlotTypeVersion</code> operation.</p> </note> <p>When you create a version of a slot type, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see <a>versioning-intro</a>. </p> <p>This operation requires permissions for the <code>lex:CreateSlotTypeVersion</code> action.</p>",
  operationId: 'CreateSlotTypeVersion',
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
      name: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              'The name of the slot type that you want to create a new version for. The name is case sensitive. ',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              checksum: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Checksum for the <code>$LATEST</code> version of the slot type that you want to publish. If you specify a checksum and the <code>$LATEST</code> version of the slot type has a different checksum, Amazon Lex returns a <code>PreconditionFailedException</code> exception and doesn't publish the new version. If you don't specify a checksum, Amazon Lex publishes the <code>$LATEST</code> version.",
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSlotTypeVersionResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    485: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
  },
})

export const deleteBotsNameRoute = createRoute({
  method: 'delete',
  path: '/bots/{name}',
  description:
    "<p>Deletes all versions of the bot, including the <code>$LATEST</code> version. To delete a specific version of the bot, use the <a>DeleteBotVersion</a> operation. The <code>DeleteBot</code> operation doesn't immediately remove the bot schema. Instead, it is marked for deletion and removed later.</p> <p>Amazon Lex stores utterances indefinitely for improving the ability of your bot to respond to user inputs. These utterances are not removed when the bot is deleted. To remove the utterances, use the <a>DeleteUtterances</a> operation.</p> <p>If a bot has an alias, you can't delete it. Instead, the <code>DeleteBot</code> operation returns a <code>ResourceInUseException</code> exception that includes a reference to the alias that refers to the bot. To remove the reference to the bot, delete the alias. If you get the same exception again, delete the referring alias until the <code>DeleteBot</code> operation is successful.</p> <p>This operation requires permissions for the <code>lex:DeleteBot</code> action.</p>",
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
      name: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the bot. The name is case sensitive. ',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 2, maxLength: 50 },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    485: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const getBotsBotNameAliasesNameRoute = createRoute({
  method: 'get',
  path: '/bots/{botName}/aliases/{name}',
  description:
    '<p>Returns information about an Amazon Lex bot alias. For more information about aliases, see <a>versioning-aliases</a>.</p> <p>This operation requires permissions for the <code>lex:GetBotAlias</code> action.</p>',
  operationId: 'GetBotAlias',
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
      name: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the bot alias. The name is case sensitive.',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 1, maxLength: 100 },
          },
        }),
      botName: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'botName',
            in: 'path',
            required: true,
            description: 'The name of the bot.',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 2, maxLength: 50 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBotAliasResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const putBotsBotNameAliasesNameRoute = createRoute({
  method: 'put',
  path: '/bots/{botName}/aliases/{name}',
  description:
    '<p>Creates an alias for the specified version of the bot or replaces an alias for the specified bot. To change the version of the bot that the alias points to, replace the alias. For more information about aliases, see <a>versioning-aliases</a>.</p> <p>This operation requires permissions for the <code>lex:PutBotAlias</code> action. </p>',
  operationId: 'PutBotAlias',
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
      name: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the alias. The name is <i>not</i> case sensitive.',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 1, maxLength: 100 },
          },
        }),
      botName: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'botName',
            in: 'path',
            required: true,
            description: 'The name of the bot.',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 2, maxLength: 50 },
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
                .openapi({ description: 'A description of the alias.' }),
              botVersion: z
                .string()
                .regex(/\$LATEST|[0-9]+/)
                .min(1)
                .max(64)
                .openapi({ description: 'The version of the bot.' }),
              checksum: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "<p>Identifies a specific revision of the <code>$LATEST</code> version.</p> <p>When you create a new bot alias, leave the <code>checksum</code> field blank. If you specify a checksum you get a <code>BadRequestException</code> exception.</p> <p>When you want to update a bot alias, set the <code>checksum</code> field to the checksum of the most recent revision of the <code>$LATEST</code> version. If you don't specify the <code> checksum</code> field, or if the checksum does not match the <code>$LATEST</code> version, you get a <code>PreconditionFailedException</code> exception.</p>",
                }),
              conversationLogs: z
                .object({
                  logSettings: LogSettingsRequestListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The settings for your conversation logs. You can log the conversation text, conversation audio, or both.',
                      }),
                  ).exactOptional(),
                  iamRoleArn: IamRoleArnSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon Resource Name (ARN) of an IAM role with permission to write to your CloudWatch Logs for text logs and your S3 bucket for audio logs. If audio encryption is enabled, this role also provides access permission for the AWS KMS key used for encrypting audio logs. For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/conversation-logs-role-and-policy.html">Creating an IAM Role and Policy for Conversation Logs</a>.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Provides the settings needed for conversation logs.',
                  required: [],
                }),
              tags: z
                .array(TagSchema)
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    "A list of tags to add to the bot alias. You can only add tags when you create an alias, you can't use the <code>PutBotAlias</code> operation to update the tags on a bot alias. To update tags, use the <code>TagResource</code> operation.",
                }),
            })
            .openapi({ required: ['botVersion'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutBotAliasResponseSchema } },
    },
    480: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
  },
})

export const deleteBotsBotNameAliasesNameRoute = createRoute({
  method: 'delete',
  path: '/bots/{botName}/aliases/{name}',
  description:
    "<p>Deletes an alias for the specified bot. </p> <p>You can't delete an alias that is used in the association between a bot and a messaging channel. If an alias is used in a channel association, the <code>DeleteBot</code> operation returns a <code>ResourceInUseException</code> exception that includes a reference to the channel association that refers to the bot. You can remove the reference to the alias by deleting the channel association. If you get the same exception again, delete the referring association until the <code>DeleteBotAlias</code> operation is successful.</p>",
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
      name: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the alias to delete. The name is case sensitive. ',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 1, maxLength: 100 },
          },
        }),
      botName: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'botName',
            in: 'path',
            required: true,
            description: 'The name of the bot that the alias points to.',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 2, maxLength: 50 },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    485: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const getBotsBotNameAliasesAliasNameChannelsNameRoute = createRoute({
  method: 'get',
  path: '/bots/{botName}/aliases/{aliasName}/channels/{name}',
  description:
    '<p>Returns information about the association between an Amazon Lex bot and a messaging platform.</p> <p>This operation requires permissions for the <code>lex:GetBotChannelAssociation</code> action.</p>',
  operationId: 'GetBotChannelAssociation',
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
      name: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              'The name of the association between the bot and the channel. The name is case sensitive. ',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 1, maxLength: 100 },
          },
        }),
      botName: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'botName',
            in: 'path',
            required: true,
            description: 'The name of the Amazon Lex bot.',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 2, maxLength: 50 },
          },
        }),
      aliasName: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'aliasName',
            in: 'path',
            required: true,
            description:
              'An alias pointing to the specific version of the Amazon Lex bot to which this association is being made.',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBotChannelAssociationResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const deleteBotsBotNameAliasesAliasNameChannelsNameRoute = createRoute({
  method: 'delete',
  path: '/bots/{botName}/aliases/{aliasName}/channels/{name}',
  description:
    '<p>Deletes the association between an Amazon Lex bot and a messaging platform.</p> <p>This operation requires permission for the <code>lex:DeleteBotChannelAssociation</code> action.</p>',
  operationId: 'DeleteBotChannelAssociation',
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
      name: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the association. The name is case sensitive. ',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 1, maxLength: 100 },
          },
        }),
      botName: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'botName',
            in: 'path',
            required: true,
            description: 'The name of the Amazon Lex bot.',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 2, maxLength: 50 },
          },
        }),
      aliasName: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'aliasName',
            in: 'path',
            required: true,
            description:
              'An alias that points to the specific version of the Amazon Lex bot to which this association is being made.',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const deleteBotsNameVersionsVersionRoute = createRoute({
  method: 'delete',
  path: '/bots/{name}/versions/{version}',
  description:
    '<p>Deletes a specific version of a bot. To delete all versions of a bot, use the <a>DeleteBot</a> operation. </p> <p>This operation requires permissions for the <code>lex:DeleteBotVersion</code> action.</p>',
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
      name: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the bot.',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 2, maxLength: 50 },
          },
        }),
      version: z
        .string()
        .regex(/[0-9]+/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'version',
            in: 'path',
            required: true,
            description:
              'The version of the bot to delete. You cannot delete the <code>$LATEST</code> version of the bot. To delete the <code>$LATEST</code> version, use the <a>DeleteBot</a> operation.',
            schema: { type: 'string', pattern: '[0-9]+', minLength: 1, maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    485: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const deleteIntentsNameRoute = createRoute({
  method: 'delete',
  path: '/intents/{name}',
  description:
    '<p>Deletes all versions of the intent, including the <code>$LATEST</code> version. To delete a specific version of the intent, use the <a>DeleteIntentVersion</a> operation.</p> <p> You can delete a version of an intent only if it is not referenced. To delete an intent that is referred to in one or more bots (see <a>how-it-works</a>), you must remove those references first. </p> <note> <p> If you get the <code>ResourceInUseException</code> exception, it provides an example reference that shows where the intent is referenced. To remove the reference to the intent, either update the bot or delete it. If you get the same exception when you attempt to delete the intent again, repeat until the intent has no references and the call to <code>DeleteIntent</code> is successful. </p> </note> <p> This operation requires permission for the <code>lex:DeleteIntent</code> action. </p>',
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
      name: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the intent. The name is case sensitive. ',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    485: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const getIntentsNameVersionsVersionRoute = createRoute({
  method: 'get',
  path: '/intents/{name}/versions/{version}',
  description:
    '<p> Returns information about an intent. In addition to the intent name, you must specify the intent version. </p> <p> This operation requires permissions to perform the <code>lex:GetIntent</code> action. </p>',
  operationId: 'GetIntent',
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
      name: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the intent. The name is case sensitive. ',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 1, maxLength: 100 },
          },
        }),
      version: z
        .string()
        .regex(/\$LATEST|[0-9]+/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'version',
            in: 'path',
            required: true,
            description: 'The version of the intent.',
            schema: { type: 'string', pattern: '\\$LATEST|[0-9]+', minLength: 1, maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetIntentResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const deleteIntentsNameVersionsVersionRoute = createRoute({
  method: 'delete',
  path: '/intents/{name}/versions/{version}',
  description:
    '<p>Deletes a specific version of an intent. To delete all versions of a intent, use the <a>DeleteIntent</a> operation. </p> <p>This operation requires permissions for the <code>lex:DeleteIntentVersion</code> action.</p>',
  operationId: 'DeleteIntentVersion',
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
      name: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the intent.',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 1, maxLength: 100 },
          },
        }),
      version: z
        .string()
        .regex(/[0-9]+/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'version',
            in: 'path',
            required: true,
            description:
              'The version of the intent to delete. You cannot delete the <code>$LATEST</code> version of the intent. To delete the <code>$LATEST</code> version, use the <a>DeleteIntent</a> operation.',
            schema: { type: 'string', pattern: '[0-9]+', minLength: 1, maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    485: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const deleteSlottypesNameRoute = createRoute({
  method: 'delete',
  path: '/slottypes/{name}',
  description:
    '<p>Deletes all versions of the slot type, including the <code>$LATEST</code> version. To delete a specific version of the slot type, use the <a>DeleteSlotTypeVersion</a> operation.</p> <p> You can delete a version of a slot type only if it is not referenced. To delete a slot type that is referred to in one or more intents, you must remove those references first. </p> <note> <p> If you get the <code>ResourceInUseException</code> exception, the exception provides an example reference that shows the intent where the slot type is referenced. To remove the reference to the slot type, either update the intent or delete it. If you get the same exception when you attempt to delete the slot type again, repeat until the slot type has no references and the <code>DeleteSlotType</code> call is successful. </p> </note> <p>This operation requires permission for the <code>lex:DeleteSlotType</code> action.</p>',
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
      name: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the slot type. The name is case sensitive. ',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    485: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const deleteSlottypesNameVersionVersionRoute = createRoute({
  method: 'delete',
  path: '/slottypes/{name}/version/{version}',
  description:
    '<p>Deletes a specific version of a slot type. To delete all versions of a slot type, use the <a>DeleteSlotType</a> operation. </p> <p>This operation requires permissions for the <code>lex:DeleteSlotTypeVersion</code> action.</p>',
  operationId: 'DeleteSlotTypeVersion',
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
      name: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the slot type.',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 1, maxLength: 100 },
          },
        }),
      version: z
        .string()
        .regex(/[0-9]+/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'version',
            in: 'path',
            required: true,
            description:
              'The version of the slot type to delete. You cannot delete the <code>$LATEST</code> version of the slot type. To delete the <code>$LATEST</code> version, use the <a>DeleteSlotType</a> operation.',
            schema: { type: 'string', pattern: '[0-9]+', minLength: 1, maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    485: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const deleteBotsBotNameUtterancesUserIdRoute = createRoute({
  method: 'delete',
  path: '/bots/{botName}/utterances/{userId}',
  description:
    "<p>Deletes stored utterances.</p> <p>Amazon Lex stores the utterances that users send to your bot. Utterances are stored for 15 days for use with the <a>GetUtterancesView</a> operation, and then stored indefinitely for use in improving the ability of your bot to respond to user input.</p> <p>Use the <code>DeleteUtterances</code> operation to manually delete stored utterances for a specific user. When you use the <code>DeleteUtterances</code> operation, utterances stored for improving your bot's ability to respond to user input are deleted immediately. Utterances stored for use with the <code>GetUtterancesView</code> operation are deleted after 15 days.</p> <p>This operation requires permissions for the <code>lex:DeleteUtterances</code> action.</p>",
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
      botName: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'botName',
            in: 'path',
            required: true,
            description: 'The name of the bot that stored the utterances.',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 2, maxLength: 50 },
          },
        }),
      userId: z
        .string()
        .min(2)
        .max(100)
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            required: true,
            description:
              ' The unique identifier for the user that made the utterances. This is the user ID that was sent in the <a href="http://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostContent.html">PostContent</a> or <a href="http://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html">PostText</a> operation request that contained the utterance.',
            schema: { type: 'string', minLength: 2, maxLength: 100 },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getBotsNameVersionsVersionoraliasRoute = createRoute({
  method: 'get',
  path: '/bots/{name}/versions/{versionoralias}',
  description:
    '<p>Returns metadata information for a specific bot. You must provide the bot name and the bot version or alias. </p> <p> This operation requires permissions for the <code>lex:GetBot</code> action. </p>',
  operationId: 'GetBot',
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
      name: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the bot. The name is case sensitive. ',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 2, maxLength: 50 },
          },
        }),
      versionoralias: z
        .string()
        .openapi({
          param: {
            name: 'versionoralias',
            in: 'path',
            required: true,
            description: 'The version or alias of the bot.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBotResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getBotsBotNameAliasesIndexRoute = createRoute({
  method: 'get',
  path: '/bots/{botName}/aliases/',
  description:
    '<p>Returns a list of aliases for a specified Amazon Lex bot.</p> <p>This operation requires permissions for the <code>lex:GetBotAliases</code> action.</p>',
  operationId: 'GetBotAliases',
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
      botName: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'botName',
            in: 'path',
            required: true,
            description: 'The name of the bot.',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 2, maxLength: 50 },
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
            description:
              'A pagination token for fetching the next page of aliases. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of aliases, specify the pagination token in the next request. ',
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
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of aliases to return in the response. The default is 50. . ',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
      nameContains: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(1)
        .max(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'nameContains',
            in: 'query',
            required: false,
            description:
              'Substring to match in bot alias names. An alias will be returned if any part of its name matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz."',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBotAliasesResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getBotsBotNameAliasesAliasNameChannelsIndexRoute = createRoute({
  method: 'get',
  path: '/bots/{botName}/aliases/{aliasName}/channels/',
  description:
    '<p> Returns a list of all of the channels associated with the specified bot. </p> <p>The <code>GetBotChannelAssociations</code> operation requires permissions for the <code>lex:GetBotChannelAssociations</code> action.</p>',
  operationId: 'GetBotChannelAssociations',
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
      botName: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'botName',
            in: 'path',
            required: true,
            description: 'The name of the Amazon Lex bot in the association.',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 2, maxLength: 50 },
          },
        }),
      aliasName: z
        .string()
        .regex(/^(-|^([A-Za-z]_?)+$)$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'aliasName',
            in: 'path',
            required: true,
            description:
              'An alias pointing to the specific version of the Amazon Lex bot to which this association is being made.',
            schema: {
              type: 'string',
              pattern: '^(-|^([A-Za-z]_?)+$)$',
              minLength: 1,
              maxLength: 100,
            },
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
            description:
              'A pagination token for fetching the next page of associations. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of associations, specify the pagination token in the next request. ',
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
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of associations to return in the response. The default is 50. ',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
      nameContains: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(1)
        .max(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'nameContains',
            in: 'query',
            required: false,
            description:
              'Substring to match in channel association names. An association will be returned if any part of its name matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz." To return all bot channel associations, use a hyphen ("-") as the <code>nameContains</code> parameter.',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBotChannelAssociationsResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getBotsNameVersionsIndexRoute = createRoute({
  method: 'get',
  path: '/bots/{name}/versions/',
  description:
    '<p>Gets information about all of the versions of a bot.</p> <p>The <code>GetBotVersions</code> operation returns a <code>BotMetadata</code> object for each version of a bot. For example, if a bot has three numbered versions, the <code>GetBotVersions</code> operation returns four <code>BotMetadata</code> objects in the response, one for each numbered version and one for the <code>$LATEST</code> version. </p> <p>The <code>GetBotVersions</code> operation always returns at least one version, the <code>$LATEST</code> version.</p> <p>This operation requires permissions for the <code>lex:GetBotVersions</code> action.</p>',
  operationId: 'GetBotVersions',
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
      name: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the bot for which versions should be returned.',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 2, maxLength: 50 },
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
            description:
              'A pagination token for fetching the next page of bot versions. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of versions, specify the pagination token in the next request. ',
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
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of bot versions to return in the response. The default is 10.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBotVersionsResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getBotsIndexRoute = createRoute({
  method: 'get',
  path: '/bots/',
  description:
    "<p>Returns bot information as follows: </p> <ul> <li> <p>If you provide the <code>nameContains</code> field, the response includes information for the <code>$LATEST</code> version of all bots whose name contains the specified string.</p> </li> <li> <p>If you don't specify the <code>nameContains</code> field, the operation returns information about the <code>$LATEST</code> version of all of your bots.</p> </li> </ul> <p>This operation requires permission for the <code>lex:GetBots</code> action.</p>",
  operationId: 'GetBots',
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
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'A pagination token that fetches the next page of bots. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of bots, specify the pagination token in the next request. ',
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
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of bots to return in the response that the request will return. The default is 10.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
      nameContains: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(2)
        .max(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'nameContains',
            in: 'query',
            required: false,
            description:
              'Substring to match in bot names. A bot will be returned if any part of its name matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz."',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 2, maxLength: 50 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBotsResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getBuiltinsIntentsSignatureRoute = createRoute({
  method: 'get',
  path: '/builtins/intents/{signature}',
  description:
    '<p>Returns information about a built-in intent.</p> <p>This operation requires permission for the <code>lex:GetBuiltinIntent</code> action.</p>',
  operationId: 'GetBuiltinIntent',
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
      signature: z
        .string()
        .openapi({
          param: {
            name: 'signature',
            in: 'path',
            required: true,
            description:
              'The unique identifier for a built-in intent. To find the signature for an intent, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents">Standard Built-in Intents</a> in the <i>Alexa Skills Kit</i>.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBuiltinIntentResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getBuiltinsIntentsIndexRoute = createRoute({
  method: 'get',
  path: '/builtins/intents/',
  description:
    '<p>Gets a list of built-in intents that meet the specified criteria.</p> <p>This operation requires permission for the <code>lex:GetBuiltinIntents</code> action.</p>',
  operationId: 'GetBuiltinIntents',
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
      locale: z
        .enum([
          'de-DE',
          'en-AU',
          'en-GB',
          'en-IN',
          'en-US',
          'es-419',
          'es-ES',
          'es-US',
          'fr-FR',
          'fr-CA',
          'it-IT',
          'ja-JP',
          'ko-KR',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'locale',
            in: 'query',
            required: false,
            description: 'A list of locales that the intent supports.',
            schema: {
              type: 'string',
              enum: [
                'de-DE',
                'en-AU',
                'en-GB',
                'en-IN',
                'en-US',
                'es-419',
                'es-ES',
                'es-US',
                'fr-FR',
                'fr-CA',
                'it-IT',
                'ja-JP',
                'ko-KR',
              ],
            },
          },
        }),
      signatureContains: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'signatureContains',
            in: 'query',
            required: false,
            description:
              'Substring to match in built-in intent signatures. An intent will be returned if any part of its signature matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz." To find the signature for an intent, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents">Standard Built-in Intents</a> in the <i>Alexa Skills Kit</i>.',
            schema: { type: 'string' },
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
            description:
              'A pagination token that fetches the next page of intents. If this API call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of intents, use the pagination token in the next request.',
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
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of intents to return in the response. The default is 10.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBuiltinIntentsResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getBuiltinsSlottypesIndexRoute = createRoute({
  method: 'get',
  path: '/builtins/slottypes/',
  description:
    '<p>Gets a list of built-in slot types that meet the specified criteria.</p> <p>For a list of built-in slot types, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/slot-type-reference">Slot Type Reference</a> in the <i>Alexa Skills Kit</i>.</p> <p>This operation requires permission for the <code>lex:GetBuiltInSlotTypes</code> action.</p>',
  operationId: 'GetBuiltinSlotTypes',
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
      locale: z
        .enum([
          'de-DE',
          'en-AU',
          'en-GB',
          'en-IN',
          'en-US',
          'es-419',
          'es-ES',
          'es-US',
          'fr-FR',
          'fr-CA',
          'it-IT',
          'ja-JP',
          'ko-KR',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'locale',
            in: 'query',
            required: false,
            description: 'A list of locales that the slot type supports.',
            schema: {
              type: 'string',
              enum: [
                'de-DE',
                'en-AU',
                'en-GB',
                'en-IN',
                'en-US',
                'es-419',
                'es-ES',
                'es-US',
                'fr-FR',
                'fr-CA',
                'it-IT',
                'ja-JP',
                'ko-KR',
              ],
            },
          },
        }),
      signatureContains: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'signatureContains',
            in: 'query',
            required: false,
            description:
              'Substring to match in built-in slot type signatures. A slot type will be returned if any part of its signature matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz."',
            schema: { type: 'string' },
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
            description:
              'A pagination token that fetches the next page of slot types. If the response to this API call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of slot types, specify the pagination token in the next request.',
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
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of slot types to return in the response. The default is 10.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBuiltinSlotTypesResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getExportsNameVersionResourceTypeExportTypeRoute = createRoute({
  method: 'get',
  path: '/exports/#name&version&resourceType&exportType',
  description: 'Exports the contents of a Amazon Lex resource in a specified format. ',
  operationId: 'GetExport',
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
      name: z
        .string()
        .regex(/[a-zA-Z_]+/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            required: true,
            description: 'The name of the bot to export.',
            schema: { type: 'string', pattern: '[a-zA-Z_]+', minLength: 1, maxLength: 100 },
          },
        }),
      version: z
        .string()
        .regex(/[0-9]+/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            required: true,
            description: 'The version of the bot to export.',
            schema: { type: 'string', pattern: '[0-9]+', minLength: 1, maxLength: 64 },
          },
        }),
      resourceType: z
        .enum(['BOT', 'INTENT', 'SLOT_TYPE'])
        .openapi({
          param: {
            name: 'resourceType',
            in: 'query',
            required: true,
            description: 'The type of resource to export. ',
            schema: { type: 'string', enum: ['BOT', 'INTENT', 'SLOT_TYPE'] },
          },
        }),
      exportType: z
        .enum(['ALEXA_SKILLS_KIT', 'LEX'])
        .openapi({
          param: {
            name: 'exportType',
            in: 'query',
            required: true,
            description: 'The format of the exported data.',
            schema: { type: 'string', enum: ['ALEXA_SKILLS_KIT', 'LEX'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetExportResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getImportsImportIdRoute = createRoute({
  method: 'get',
  path: '/imports/{importId}',
  description:
    'Gets information about an import job started with the <code>StartImport</code> operation.',
  operationId: 'GetImport',
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
        .openapi({
          param: {
            name: 'importId',
            in: 'path',
            required: true,
            description: 'The identifier of the import job information to return.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetImportResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getIntentsNameVersionsIndexRoute = createRoute({
  method: 'get',
  path: '/intents/{name}/versions/',
  description:
    '<p>Gets information about all of the versions of an intent.</p> <p>The <code>GetIntentVersions</code> operation returns an <code>IntentMetadata</code> object for each version of an intent. For example, if an intent has three numbered versions, the <code>GetIntentVersions</code> operation returns four <code>IntentMetadata</code> objects in the response, one for each numbered version and one for the <code>$LATEST</code> version. </p> <p>The <code>GetIntentVersions</code> operation always returns at least one version, the <code>$LATEST</code> version.</p> <p>This operation requires permissions for the <code>lex:GetIntentVersions</code> action.</p>',
  operationId: 'GetIntentVersions',
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
      name: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the intent for which versions should be returned.',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 1, maxLength: 100 },
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
            description:
              'A pagination token for fetching the next page of intent versions. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of versions, specify the pagination token in the next request. ',
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
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of intent versions to return in the response. The default is 10.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetIntentVersionsResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getIntentsIndexRoute = createRoute({
  method: 'get',
  path: '/intents/',
  description:
    "<p>Returns intent information as follows: </p> <ul> <li> <p>If you specify the <code>nameContains</code> field, returns the <code>$LATEST</code> version of all intents that contain the specified string.</p> </li> <li> <p> If you don't specify the <code>nameContains</code> field, returns information about the <code>$LATEST</code> version of all intents. </p> </li> </ul> <p> The operation requires permission for the <code>lex:GetIntents</code> action. </p>",
  operationId: 'GetIntents',
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
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'A pagination token that fetches the next page of intents. If the response to this API call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of intents, specify the pagination token in the next request. ',
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
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of intents to return in the response. The default is 10.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
      nameContains: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(1)
        .max(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'nameContains',
            in: 'query',
            required: false,
            description:
              'Substring to match in intent names. An intent will be returned if any part of its name matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz."',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetIntentsResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getMigrationsMigrationIdRoute = createRoute({
  method: 'get',
  path: '/migrations/{migrationId}',
  description:
    'Provides details about an ongoing or complete migration from an Amazon Lex V1 bot to an Amazon Lex V2 bot. Use this operation to view the migration alerts and warnings related to the migration.',
  operationId: 'GetMigration',
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
      migrationId: z
        .string()
        .regex(/^[0-9a-zA-Z]+$/)
        .length(10)
        .openapi({
          param: {
            name: 'migrationId',
            in: 'path',
            required: true,
            description:
              'The unique identifier of the migration to view. The <code>migrationID</code> is returned by the operation.',
            schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetMigrationResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const getMigrationsRoute = createRoute({
  method: 'get',
  path: '/migrations',
  description: 'Gets a list of migrations between Amazon Lex V1 and Amazon Lex V2.',
  operationId: 'GetMigrations',
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
      sortByAttribute: z
        .enum(['V1_BOT_NAME', 'MIGRATION_DATE_TIME'])
        .exactOptional()
        .openapi({
          param: {
            name: 'sortByAttribute',
            in: 'query',
            required: false,
            description:
              'The field to sort the list of migrations by. You can sort by the Amazon Lex V1 bot name or the date and time that the migration was started.',
            schema: { type: 'string', enum: ['V1_BOT_NAME', 'MIGRATION_DATE_TIME'] },
          },
        }),
      sortByOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            name: 'sortByOrder',
            in: 'query',
            required: false,
            description: 'The order so sort the list.',
            schema: { type: 'string', enum: ['ASCENDING', 'DESCENDING'] },
          },
        }),
      v1BotNameContains: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(2)
        .max(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'v1BotNameContains',
            in: 'query',
            required: false,
            description:
              'Filters the list to contain only bots whose name contains the specified string. The string is matched anywhere in bot name.',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 2, maxLength: 50 },
          },
        }),
      migrationStatusEquals: z
        .enum(['IN_PROGRESS', 'COMPLETED', 'FAILED'])
        .exactOptional()
        .openapi({
          param: {
            name: 'migrationStatusEquals',
            in: 'query',
            required: false,
            description: 'Filters the list to contain only migrations in the specified state.',
            schema: { type: 'string', enum: ['IN_PROGRESS', 'COMPLETED', 'FAILED'] },
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
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of migrations to return in the response. The default is 10.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
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
            description:
              'A pagination token that fetches the next page of migrations. If the response to this operation is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of migrations, specify the pagination token in the request.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetMigrationsResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postMigrationsRoute = createRoute({
  method: 'post',
  path: '/migrations',
  description:
    '<p>Starts migrating a bot from Amazon Lex V1 to Amazon Lex V2. Migrate your bot when you want to take advantage of the new features of Amazon Lex V2.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/migrate.html">Migrating a bot</a> in the <i>Amazon Lex developer guide</i>.</p>',
  operationId: 'StartMigration',
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
              v1BotName: z
                .string()
                .regex(/^([A-Za-z]_?)+$/)
                .min(2)
                .max(50)
                .openapi({
                  description:
                    'The name of the Amazon Lex V1 bot that you are migrating to Amazon Lex V2.',
                }),
              v1BotVersion: z
                .string()
                .regex(/\$LATEST|[0-9]+/)
                .min(1)
                .max(64)
                .openapi({
                  description:
                    'The version of the bot to migrate to Amazon Lex V2. You can migrate the <code>$LATEST</code> version as well as any numbered version.',
                }),
              v2BotName: z
                .string()
                .regex(/^([0-9a-zA-Z][_-]?)+$/)
                .min(1)
                .max(100)
                .openapi({
                  description:
                    "<p>The name of the Amazon Lex V2 bot that you are migrating the Amazon Lex V1 bot to. </p> <ul> <li> <p>If the Amazon Lex V2 bot doesn't exist, you must use the <code>CREATE_NEW</code> migration strategy.</p> </li> <li> <p>If the Amazon Lex V2 bot exists, you must use the <code>UPDATE_EXISTING</code> migration strategy to change the contents of the Amazon Lex V2 bot.</p> </li> </ul>",
                }),
              v2BotRole: z
                .string()
                .regex(/^arn:[\w\-]+:iam::[\d]{12}:role\/.+$/)
                .min(20)
                .max(2048)
                .openapi({
                  description: 'The IAM role that Amazon Lex uses to run the Amazon Lex V2 bot.',
                }),
              migrationStrategy: z
                .enum(['CREATE_NEW', 'UPDATE_EXISTING'])
                .openapi({
                  description:
                    "<p>The strategy used to conduct the migration.</p> <ul> <li> <p> <code>CREATE_NEW</code> - Creates a new Amazon Lex V2 bot and migrates the Amazon Lex V1 bot to the new bot.</p> </li> <li> <p> <code>UPDATE_EXISTING</code> - Overwrites the existing Amazon Lex V2 bot metadata and the locale being migrated. It doesn't change any other locales in the Amazon Lex V2 bot. If the locale doesn't exist, a new locale is created in the Amazon Lex V2 bot.</p> </li> </ul>",
                }),
            })
            .openapi({
              required: [
                'v1BotName',
                'v1BotVersion',
                'v2BotName',
                'v2BotRole',
                'migrationStrategy',
              ],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: StartMigrationResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const getSlottypesNameVersionsVersionRoute = createRoute({
  method: 'get',
  path: '/slottypes/{name}/versions/{version}',
  description:
    '<p>Returns information about a specific version of a slot type. In addition to specifying the slot type name, you must specify the slot type version.</p> <p>This operation requires permissions for the <code>lex:GetSlotType</code> action.</p>',
  operationId: 'GetSlotType',
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
      name: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the slot type. The name is case sensitive. ',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 1, maxLength: 100 },
          },
        }),
      version: z
        .string()
        .regex(/\$LATEST|[0-9]+/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'version',
            in: 'path',
            required: true,
            description: 'The version of the slot type. ',
            schema: { type: 'string', pattern: '\\$LATEST|[0-9]+', minLength: 1, maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSlotTypeResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getSlottypesNameVersionsIndexRoute = createRoute({
  method: 'get',
  path: '/slottypes/{name}/versions/',
  description:
    '<p>Gets information about all versions of a slot type.</p> <p>The <code>GetSlotTypeVersions</code> operation returns a <code>SlotTypeMetadata</code> object for each version of a slot type. For example, if a slot type has three numbered versions, the <code>GetSlotTypeVersions</code> operation returns four <code>SlotTypeMetadata</code> objects in the response, one for each numbered version and one for the <code>$LATEST</code> version. </p> <p>The <code>GetSlotTypeVersions</code> operation always returns at least one version, the <code>$LATEST</code> version.</p> <p>This operation requires permissions for the <code>lex:GetSlotTypeVersions</code> action.</p>',
  operationId: 'GetSlotTypeVersions',
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
      name: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the slot type for which versions should be returned.',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 1, maxLength: 100 },
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
            description:
              'A pagination token for fetching the next page of slot type versions. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of versions, specify the pagination token in the next request. ',
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
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of slot type versions to return in the response. The default is 10.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSlotTypeVersionsResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getSlottypesIndexRoute = createRoute({
  method: 'get',
  path: '/slottypes/',
  description:
    "<p>Returns slot type information as follows: </p> <ul> <li> <p>If you specify the <code>nameContains</code> field, returns the <code>$LATEST</code> version of all slot types that contain the specified string.</p> </li> <li> <p> If you don't specify the <code>nameContains</code> field, returns information about the <code>$LATEST</code> version of all slot types. </p> </li> </ul> <p> The operation requires permission for the <code>lex:GetSlotTypes</code> action. </p>",
  operationId: 'GetSlotTypes',
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
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'A pagination token that fetches the next page of slot types. If the response to this API call is truncated, Amazon Lex returns a pagination token in the response. To fetch next page of slot types, specify the pagination token in the next request.',
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
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of slot types to return in the response. The default is 10.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
      nameContains: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(1)
        .max(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'nameContains',
            in: 'query',
            required: false,
            description:
              'Substring to match in slot type names. A slot type will be returned if any part of its name matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz."',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSlotTypesResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getBotsBotnameUtterancesViewAggregationBotVersionsStatusTypeRoute = createRoute({
  method: 'get',
  path: '/bots/{botname}/utterances#view=aggregation&bot_versions&status_type',
  description:
    '<p>Use the <code>GetUtterancesView</code> operation to get information about the utterances that your users have made to your bot. You can use this list to tune the utterances that your bot responds to.</p> <p>For example, say that you have created a bot to order flowers. After your users have used your bot for a while, use the <code>GetUtterancesView</code> operation to see the requests that they have made and whether they have been successful. You might find that the utterance "I want flowers" is not being recognized. You could add this utterance to the <code>OrderFlowers</code> intent so that your bot recognizes that utterance.</p> <p>After you publish a new version of a bot, you can get information about the old version and the new so that you can compare the performance across the two versions. </p> <p>Utterance statistics are generated once a day. Data is available for the last 15 days. You can request information for up to 5 versions of your bot in each request. Amazon Lex returns the most frequent utterances received by the bot in the last 15 days. The response contains information about a maximum of 100 utterances for each version.</p> <p>If you set <code>childDirected</code> field to true when you created your bot, if you are using slot obfuscation with one or more slots, or if you opted out of participating in improving Amazon Lex, utterances are not available.</p> <p>This operation requires permissions for the <code>lex:GetUtterancesView</code> action.</p>',
  operationId: 'GetUtterancesView',
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
      botname: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'botname',
            in: 'path',
            required: true,
            description: 'The name of the bot for which utterance information should be returned.',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 2, maxLength: 50 },
          },
        }),
    }),
    query: z.object({
      bot_versions: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(VersionSchema).min(1).max(5),
        )
        .openapi({
          param: {
            name: 'bot_versions',
            in: 'query',
            required: true,
            description:
              'An array of bot versions for which utterance information should be returned. The limit is 5 versions per request.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/Version' },
              minItems: 1,
              maxItems: 5,
            },
          },
        }),
      status_type: z
        .enum(['Detected', 'Missed'])
        .openapi({
          param: {
            name: 'status_type',
            in: 'query',
            required: true,
            description:
              'To return utterances that were recognized and handled, use <code>Detected</code>. To return utterances that were not recognized, use <code>Missed</code>.',
            schema: { type: 'string', enum: ['Detected', 'Missed'] },
          },
        }),
      view: z
        .literal('aggregation')
        .openapi({
          param: {
            name: 'view',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['aggregation'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetUtterancesViewResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description:
    'Gets a list of tags associated with the specified resource. Only bots, bot aliases, and bot channels can have tags associated with them.',
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
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resourceArn}',
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
                .array(TagSchema)
                .min(0)
                .max(200)
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
    204: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const putBotsNameVersionsLATESTRoute = createRoute({
  method: 'put',
  path: '/bots/{name}/versions/$LATEST',
  description:
    "<p>Creates an Amazon Lex conversational bot or replaces an existing bot. When you create or update a bot you are only required to specify a name, a locale, and whether the bot is directed toward children under age 13. You can use this to add intents later, or to remove intents from an existing bot. When you create a bot with the minimum information, the bot is created or updated but Amazon Lex returns the <code/> response <code>FAILED</code>. You can build the bot after you add one or more intents. For more information about Amazon Lex bots, see <a>how-it-works</a>. </p> <p>If you specify the name of an existing bot, the fields in the request replace the existing values in the <code>$LATEST</code> version of the bot. Amazon Lex removes any fields that you don't provide values for in the request, except for the <code>idleTTLInSeconds</code> and <code>privacySettings</code> fields, which are set to their default values. If you don't specify values for required fields, Amazon Lex throws an exception.</p> <p>This operation requires permissions for the <code>lex:PutBot</code> action. For more information, see <a>security-iam</a>.</p>",
  operationId: 'PutBot',
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
      name: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(2)
        .max(50)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the bot. The name is <i>not</i> case sensitive. ',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 2, maxLength: 50 },
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
                .openapi({ description: 'A description of the bot.' }),
              intents: z
                .array(IntentSchema)
                .exactOptional()
                .openapi({
                  description:
                    'An array of <code>Intent</code> objects. Each intent represents a command that a user can express. For example, a pizza ordering bot might support an OrderPizza intent. For more information, see <a>how-it-works</a>.',
                }),
              enableModelImprovements: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    '<p>Set to <code>true</code> to enable access to natural language understanding improvements. </p> <p>When you set the <code>enableModelImprovements</code> parameter to <code>true</code> you can use the <code>nluIntentConfidenceThreshold</code> parameter to configure confidence scores. For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/confidence-scores.html">Confidence Scores</a>.</p> <p>You can only set the <code>enableModelImprovements</code> parameter in certain Regions. If you set the parameter to <code>true</code>, your bot has access to accuracy improvements.</p> <p>The Regions where you can set the <code>enableModelImprovements</code> parameter to <code>true</code> are:</p> <ul> <li> <p>US East (N. Virginia) (us-east-1)</p> </li> <li> <p>US West (Oregon) (us-west-2)</p> </li> <li> <p>Asia Pacific (Sydney) (ap-southeast-2)</p> </li> <li> <p>EU (Ireland) (eu-west-1)</p> </li> </ul> <p>In other Regions, the <code>enableModelImprovements</code> parameter is set to <code>true</code> by default. In these Regions setting the parameter to <code>false</code> throws a <code>ValidationException</code> exception.</p>',
                }),
              nluIntentConfidenceThreshold: z
                .float64()
                .min(0)
                .max(1)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Determines the threshold where Amazon Lex will insert the <code>AMAZON.FallbackIntent</code>, <code>AMAZON.KendraSearchIntent</code>, or both when returning alternative intents in a <a href="https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostContent.html">PostContent</a> or <a href="https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html">PostText</a> response. <code>AMAZON.FallbackIntent</code> and <code>AMAZON.KendraSearchIntent</code> are only inserted if they are configured for the bot.</p> <p>You must set the <code>enableModelImprovements</code> parameter to <code>true</code> to use confidence scores in the following regions.</p> <ul> <li> <p>US East (N. Virginia) (us-east-1)</p> </li> <li> <p>US West (Oregon) (us-west-2)</p> </li> <li> <p>Asia Pacific (Sydney) (ap-southeast-2)</p> </li> <li> <p>EU (Ireland) (eu-west-1)</p> </li> </ul> <p>In other Regions, the <code>enableModelImprovements</code> parameter is set to <code>true</code> by default.</p> <p>For example, suppose a bot is configured with the confidence threshold of 0.80 and the <code>AMAZON.FallbackIntent</code>. Amazon Lex returns three alternative intents with the following confidence scores: IntentA (0.70), IntentB (0.60), IntentC (0.50). The response from the <code>PostText</code> operation would be:</p> <ul> <li> <p>AMAZON.FallbackIntent</p> </li> <li> <p>IntentA</p> </li> <li> <p>IntentB</p> </li> <li> <p>IntentC</p> </li> </ul>',
                }),
              clarificationPrompt: z
                .object({
                  messages: MessageListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An array of objects, each of which provides a message string and its type. You can specify the message string in plain text or in Speech Synthesis Markup Language (SSML).',
                      }),
                  ).exactOptional(),
                  maxAttempts: PromptMaxAttemptsSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The number of times to prompt the user for information.',
                      }),
                  ).exactOptional(),
                  responseCard: ResponseCardSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A response card. Amazon Lex uses this prompt at runtime, in the <code>PostText</code> API response. It substitutes session attributes and slot values for placeholders in the response card. For more information, see <a>ex-resp-card</a>. ',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>.',
                  required: [],
                }),
              abortStatement: z
                .object({
                  messages: MessageListSchema.and(
                    z.any().openapi({ description: 'A collection of message objects.' }),
                  ).exactOptional(),
                  responseCard: ResponseCardSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' At runtime, if the client is using the <a href="http://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html">PostText</a> API, Amazon Lex includes the response card in the response. It substitutes all of the session attributes and slot values for placeholders in the response card. ',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. ',
                  required: [],
                }),
              idleSessionTTLInSeconds: z
                .int()
                .min(60)
                .max(86400)
                .exactOptional()
                .openapi({
                  description:
                    "<p>The maximum time in seconds that Amazon Lex retains the data gathered in a conversation.</p> <p>A user interaction session remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Lex deletes any data provided before the timeout.</p> <p>For example, suppose that a user chooses the OrderPizza intent, but gets sidetracked halfway through placing an order. If the user doesn't complete the order within the specified time, Amazon Lex discards the slot information that it gathered, and the user must start over.</p> <p>If you don't include the <code>idleSessionTTLInSeconds</code> element in a <code>PutBot</code> operation request, Amazon Lex uses the default value. This is also true if the request replaces an existing bot.</p> <p>The default is 300 seconds (5 minutes).</p>",
                }),
              voiceId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Polly voice ID that you want Amazon Lex to use for voice interactions with the user. The locale configured for the voice must match the locale of the bot. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/voicelist.html">Voices in Amazon Polly</a> in the <i>Amazon Polly Developer Guide</i>.',
                }),
              checksum: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "<p>Identifies a specific revision of the <code>$LATEST</code> version.</p> <p>When you create a new bot, leave the <code>checksum</code> field blank. If you specify a checksum you get a <code>BadRequestException</code> exception.</p> <p>When you want to update a bot, set the <code>checksum</code> field to the checksum of the most recent revision of the <code>$LATEST</code> version. If you don't specify the <code> checksum</code> field, or if the checksum does not match the <code>$LATEST</code> version, you get a <code>PreconditionFailedException</code> exception.</p>",
                }),
              processBehavior: z
                .enum(['SAVE', 'BUILD'])
                .exactOptional()
                .openapi({
                  description:
                    "<p>If you set the <code>processBehavior</code> element to <code>BUILD</code>, Amazon Lex builds the bot so that it can be run. If you set the element to <code>SAVE</code> Amazon Lex saves the bot, but doesn't build it. </p> <p>If you don't specify this value, the default value is <code>BUILD</code>.</p>",
                }),
              locale: z
                .enum([
                  'de-DE',
                  'en-AU',
                  'en-GB',
                  'en-IN',
                  'en-US',
                  'es-419',
                  'es-ES',
                  'es-US',
                  'fr-FR',
                  'fr-CA',
                  'it-IT',
                  'ja-JP',
                  'ko-KR',
                ])
                .openapi({
                  description:
                    '<p> Specifies the target locale for the bot. Any intent used in the bot must be compatible with the locale of the bot. </p> <p>The default is <code>en-US</code>.</p>',
                }),
              childDirected: z
                .boolean()
                .openapi({
                  description:
                    '<p>For each Amazon Lex bot created with the Amazon Lex Model Building Service, you must specify whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to the Children\'s Online Privacy Protection Act (COPPA) by specifying <code>true</code> or <code>false</code> in the <code>childDirected</code> field. By specifying <code>true</code> in the <code>childDirected</code> field, you confirm that your use of Amazon Lex <b>is</b> related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. By specifying <code>false</code> in the <code>childDirected</code> field, you confirm that your use of Amazon Lex <b>is not</b> related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. You may not specify a default value for the <code>childDirected</code> field that does not accurately reflect whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA.</p> <p>If your use of Amazon Lex relates to a website, program, or other application that is directed in whole or in part, to children under age 13, you must obtain any required verifiable parental consent under COPPA. For information regarding the use of Amazon Lex in connection with websites, programs, or other applications that are directed or targeted, in whole or in part, to children under age 13, see the <a href="https://aws.amazon.com/lex/faqs#data-security">Amazon Lex FAQ.</a> </p>',
                }),
              detectSentiment: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "When set to <code>true</code> user utterances are sent to Amazon Comprehend for sentiment analysis. If you don't specify <code>detectSentiment</code>, the default is <code>false</code>.",
                }),
              createVersion: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "When set to <code>true</code> a new numbered version of the bot is created. This is the same as calling the <code>CreateBotVersion</code> operation. If you don't specify <code>createVersion</code>, the default is <code>false</code>.",
                }),
              tags: z
                .array(TagSchema)
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    "A list of tags to add to the bot. You can only add tags when you create a bot, you can't use the <code>PutBot</code> operation to update the tags on a bot. To update tags, use the <code>TagResource</code> operation.",
                }),
            })
            .openapi({ required: ['locale', 'childDirected'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutBotResponseSchema } },
    },
    480: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
  },
})

export const putIntentsNameVersionsLATESTRoute = createRoute({
  method: 'put',
  path: '/intents/{name}/versions/$LATEST',
  description:
    '<p>Creates an intent or replaces an existing intent.</p> <p>To define the interaction between the user and your bot, you use one or more intents. For a pizza ordering bot, for example, you would create an <code>OrderPizza</code> intent. </p> <p>To create an intent or replace an existing intent, you must provide the following:</p> <ul> <li> <p>Intent name. For example, <code>OrderPizza</code>.</p> </li> <li> <p>Sample utterances. For example, "Can I order a pizza, please." and "I want to order a pizza."</p> </li> <li> <p>Information to be gathered. You specify slot types for the information that your bot will request from the user. You can specify standard slot types, such as a date or a time, or custom slot types such as the size and crust of a pizza.</p> </li> <li> <p>How the intent will be fulfilled. You can provide a Lambda function or configure the intent to return the intent information to the client application. If you use a Lambda function, when all of the intent information is available, Amazon Lex invokes your Lambda function. If you configure your intent to return the intent information to the client application. </p> </li> </ul> <p>You can specify other optional information in the request, such as:</p> <ul> <li> <p>A confirmation prompt to ask the user to confirm an intent. For example, "Shall I order your pizza?"</p> </li> <li> <p>A conclusion statement to send to the user after the intent has been fulfilled. For example, "I placed your pizza order."</p> </li> <li> <p>A follow-up prompt that asks the user for additional activity. For example, asking "Do you want to order a drink with your pizza?"</p> </li> </ul> <p>If you specify an existing intent name to update the intent, Amazon Lex replaces the values in the <code>$LATEST</code> version of the intent with the values in the request. Amazon Lex removes fields that you don\'t provide in the request. If you don\'t specify the required fields, Amazon Lex throws an exception. When you update the <code>$LATEST</code> version of an intent, the <code>status</code> field of any bot that uses the <code>$LATEST</code> version of the intent is set to <code>NOT_BUILT</code>.</p> <p>For more information, see <a>how-it-works</a>.</p> <p>This operation requires permissions for the <code>lex:PutIntent</code> action.</p>',
  operationId: 'PutIntent',
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
      name: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              '<p>The name of the intent. The name is <i>not</i> case sensitive. </p> <p>The name can\'t match a built-in intent name, or a built-in intent name with "AMAZON." removed. For example, because there is a built-in intent called <code>AMAZON.HelpIntent</code>, you can\'t create a custom intent called <code>HelpIntent</code>.</p> <p>For a list of built-in intents, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents">Standard Built-in Intents</a> in the <i>Alexa Skills Kit</i>.</p>',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 1, maxLength: 100 },
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
                .openapi({ description: 'A description of the intent.' }),
              slots: z
                .array(SlotSchema)
                .min(0)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'An array of intent slots. At runtime, Amazon Lex elicits required slot values from the user using prompts defined in the slots. For more information, see <a>how-it-works</a>. ',
                }),
              sampleUtterances: z
                .array(UtteranceSchema)
                .min(0)
                .max(1500)
                .exactOptional()
                .openapi({
                  description:
                    '<p>An array of utterances (strings) that a user might say to signal the intent. For example, "I want {PizzaSize} pizza", "Order {Quantity} {PizzaSize} pizzas". </p> <p>In each utterance, a slot name is enclosed in curly braces. </p>',
                }),
              confirmationPrompt: z
                .object({
                  messages: MessageListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An array of objects, each of which provides a message string and its type. You can specify the message string in plain text or in Speech Synthesis Markup Language (SSML).',
                      }),
                  ).exactOptional(),
                  maxAttempts: PromptMaxAttemptsSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The number of times to prompt the user for information.',
                      }),
                  ).exactOptional(),
                  responseCard: ResponseCardSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A response card. Amazon Lex uses this prompt at runtime, in the <code>PostText</code> API response. It substitutes session attributes and slot values for placeholders in the response card. For more information, see <a>ex-resp-card</a>. ',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>.',
                  required: [],
                }),
              rejectionStatement: z
                .object({
                  messages: MessageListSchema.and(
                    z.any().openapi({ description: 'A collection of message objects.' }),
                  ).exactOptional(),
                  responseCard: ResponseCardSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' At runtime, if the client is using the <a href="http://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html">PostText</a> API, Amazon Lex includes the response card in the response. It substitutes all of the session attributes and slot values for placeholders in the response card. ',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. ',
                  required: [],
                }),
              followUpPrompt: z
                .object({
                  prompt: PromptSchema.and(
                    z.any().openapi({ description: 'Prompts for information from the user. ' }),
                  ).exactOptional(),
                  rejectionStatement: StatementSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'If the user answers "no" to the question defined in the <code>prompt</code> field, Amazon Lex responds with this statement to acknowledge that the intent was canceled. ',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A prompt for additional activity after an intent is fulfilled. For example, after the <code>OrderPizza</code> intent is fulfilled, you might prompt the user to find out whether the user wants to order drinks.',
                  required: [],
                }),
              conclusionStatement: z
                .object({
                  messages: MessageListSchema.and(
                    z.any().openapi({ description: 'A collection of message objects.' }),
                  ).exactOptional(),
                  responseCard: ResponseCardSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' At runtime, if the client is using the <a href="http://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html">PostText</a> API, Amazon Lex includes the response card in the response. It substitutes all of the session attributes and slot values for placeholders in the response card. ',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. ',
                  required: [],
                }),
              dialogCodeHook: z
                .object({
                  uri: LambdaARNSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The Amazon Resource Name (ARN) of the Lambda function.',
                      }),
                  ).exactOptional(),
                  messageVersion: MessageVersionSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The version of the request-response that you want Amazon Lex to use to invoke your Lambda function. For more information, see <a>using-lambda</a>.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    "Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot..",
                  required: [],
                }),
              fulfillmentActivity: z
                .object({
                  type: FulfillmentActivityTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' How the intent should be fulfilled, either by running a Lambda function or by returning the slot data to the client application. ',
                      }),
                  ).exactOptional(),
                  codeHook: CodeHookSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' A description of the Lambda function that is run to fulfill the intent. ',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    '<p> Describes how the intent is fulfilled after the user provides all of the information required for the intent. You can provide a Lambda function to process the intent, or you can return the intent information to the client application. We recommend that you use a Lambda function so that the relevant logic lives in the Cloud and limit the client-side code primarily to presentation. If you need to update the logic, you only update the Lambda function; you don\'t need to upgrade your client application. </p> <p>Consider the following examples:</p> <ul> <li> <p>In a pizza ordering application, after the user provides all of the information for placing an order, you use a Lambda function to place an order with a pizzeria. </p> </li> <li> <p>In a gaming application, when a user says "pick up a rock," this information must go back to the client application so that it can perform the operation and update the graphics. In this case, you want Amazon Lex to return the intent data to the client. </p> </li> </ul>',
                  required: [],
                }),
              parentIntentSignature: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A unique identifier for the built-in intent to base this intent on. To find the signature for an intent, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents">Standard Built-in Intents</a> in the <i>Alexa Skills Kit</i>.',
                }),
              checksum: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "<p>Identifies a specific revision of the <code>$LATEST</code> version.</p> <p>When you create a new intent, leave the <code>checksum</code> field blank. If you specify a checksum you get a <code>BadRequestException</code> exception.</p> <p>When you want to update a intent, set the <code>checksum</code> field to the checksum of the most recent revision of the <code>$LATEST</code> version. If you don't specify the <code> checksum</code> field, or if the checksum does not match the <code>$LATEST</code> version, you get a <code>PreconditionFailedException</code> exception.</p>",
                }),
              createVersion: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'When set to <code>true</code> a new numbered version of the intent is created. This is the same as calling the <code>CreateIntentVersion</code> operation. If you do not specify <code>createVersion</code>, the default is <code>false</code>.',
                }),
              kendraConfiguration: z
                .object({
                  kendraIndex: KendraIndexArnSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon Resource Name (ARN) of the Amazon Kendra index that you want the AMAZON.KendraSearchIntent intent to search. The index must be in the same account and Region as the Amazon Lex bot. If the Amazon Kendra index does not exist, you get an exception when you call the <code>PutIntent</code> operation.',
                      }),
                  ).exactOptional(),
                  queryFilterString: QueryFilterStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A query filter that Amazon Lex sends to Amazon Kendra to filter the response from the query. The filter is in the format defined by Amazon Kendra. For more information, see <a href="http://docs.aws.amazon.com/kendra/latest/dg/filtering.html">Filtering queries</a>.</p> <p>You can override this filter string with a new filter string at runtime.</p>',
                      }),
                  ).exactOptional(),
                  role: RoleArnSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon Resource Name (ARN) of an IAM role that has permission to search the Amazon Kendra index. The role must be in the same account and Region as the Amazon Lex bot. If the role does not exist, you get an exception when you call the <code>PutIntent</code> operation.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user\'s utterance. For more information, see <a href="http://docs.aws.amazon.com/lex/latest/dg/built-in-intent-kendra-search.html"> AMAZON.KendraSearchIntent</a>.',
                  required: [],
                }),
              inputContexts: z
                .array(InputContextSchema)
                .min(0)
                .max(5)
                .exactOptional()
                .openapi({
                  description:
                    'An array of <code>InputContext</code> objects that lists the contexts that must be active for Amazon Lex to choose the intent in a conversation with the user.',
                }),
              outputContexts: z
                .array(OutputContextSchema)
                .min(0)
                .max(10)
                .exactOptional()
                .openapi({
                  description:
                    'An array of <code>OutputContext</code> objects that lists the contexts that the intent activates when the intent is fulfilled.',
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
      content: { 'application/json': { schema: PutIntentResponseSchema } },
    },
    480: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
  },
})

export const putSlottypesNameVersionsLATESTRoute = createRoute({
  method: 'put',
  path: '/slottypes/{name}/versions/$LATEST',
  description:
    "<p>Creates a custom slot type or replaces an existing custom slot type.</p> <p>To create a custom slot type, specify a name for the slot type and a set of enumeration values, which are the values that a slot of this type can assume. For more information, see <a>how-it-works</a>.</p> <p>If you specify the name of an existing slot type, the fields in the request replace the existing values in the <code>$LATEST</code> version of the slot type. Amazon Lex removes the fields that you don't provide in the request. If you don't specify required fields, Amazon Lex throws an exception. When you update the <code>$LATEST</code> version of a slot type, if a bot uses the <code>$LATEST</code> version of an intent that contains the slot type, the bot's <code>status</code> field is set to <code>NOT_BUILT</code>.</p> <p>This operation requires permissions for the <code>lex:PutSlotType</code> action.</p>",
  operationId: 'PutSlotType',
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
      name: z
        .string()
        .regex(/^([A-Za-z]_?)+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description:
              '<p>The name of the slot type. The name is <i>not</i> case sensitive. </p> <p>The name can\'t match a built-in slot type name, or a built-in slot type name with "AMAZON." removed. For example, because there is a built-in slot type called <code>AMAZON.DATE</code>, you can\'t create a custom slot type called <code>DATE</code>.</p> <p>For a list of built-in slot types, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/slot-type-reference">Slot Type Reference</a> in the <i>Alexa Skills Kit</i>.</p>',
            schema: { type: 'string', pattern: '^([A-Za-z]_?)+$', minLength: 1, maxLength: 100 },
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
                .openapi({ description: 'A description of the slot type.' }),
              enumerationValues: z
                .array(EnumerationValueSchema)
                .min(0)
                .max(10000)
                .exactOptional()
                .openapi({
                  description:
                    "<p>A list of <code>EnumerationValue</code> objects that defines the values that the slot type can take. Each value can have a list of <code>synonyms</code>, which are additional values that help train the machine learning model about the values that it resolves for a slot. </p> <p>A regular expression slot type doesn't require enumeration values. All other slot types require a list of enumeration values.</p> <p>When Amazon Lex resolves a slot value, it generates a resolution list that contains up to five possible values for the slot. If you are using a Lambda function, this resolution list is passed to the function. If you are not using a Lambda function you can choose to return the value that the user entered or the first value in the resolution list as the slot value. The <code>valueSelectionStrategy</code> field indicates the option to use. </p>",
                }),
              checksum: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "<p>Identifies a specific revision of the <code>$LATEST</code> version.</p> <p>When you create a new slot type, leave the <code>checksum</code> field blank. If you specify a checksum you get a <code>BadRequestException</code> exception.</p> <p>When you want to update a slot type, set the <code>checksum</code> field to the checksum of the most recent revision of the <code>$LATEST</code> version. If you don't specify the <code> checksum</code> field, or if the checksum does not match the <code>$LATEST</code> version, you get a <code>PreconditionFailedException</code> exception.</p>",
                }),
              valueSelectionStrategy: z
                .enum(['ORIGINAL_VALUE', 'TOP_RESOLUTION'])
                .exactOptional()
                .openapi({
                  description:
                    "<p>Determines the slot resolution strategy that Amazon Lex uses to return slot type values. The field can be set to one of the following values:</p> <ul> <li> <p> <code>ORIGINAL_VALUE</code> - Returns the value entered by the user, if the user value is similar to the slot value.</p> </li> <li> <p> <code>TOP_RESOLUTION</code> - If there is a resolution list for the slot, return the first value in the resolution list as the slot type value. If there is no resolution list, null is returned.</p> </li> </ul> <p>If you don't specify the <code>valueSelectionStrategy</code>, the default is <code>ORIGINAL_VALUE</code>.</p>",
                }),
              createVersion: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'When set to <code>true</code> a new numbered version of the slot type is created. This is the same as calling the <code>CreateSlotTypeVersion</code> operation. If you do not specify <code>createVersion</code>, the default is <code>false</code>.',
                }),
              parentSlotTypeSignature: z
                .string()
                .regex(/^((AMAZON\.)_?|[A-Za-z]_?)+/)
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The built-in slot type used as the parent of the slot type. When you define a parent slot type, the new slot type has all of the same configuration as the parent.</p> <p>Only <code>AMAZON.AlphaNumeric</code> is supported.</p>',
                }),
              slotTypeConfigurations: z
                .array(SlotTypeConfigurationSchema)
                .min(0)
                .max(10)
                .exactOptional()
                .openapi({
                  description:
                    'Configuration information that extends the parent built-in slot type. The configuration is added to the settings for the parent slot type.',
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
      content: { 'application/json': { schema: PutSlotTypeResponseSchema } },
    },
    480: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
  },
})

export const postImportsIndexRoute = createRoute({
  method: 'post',
  path: '/imports/',
  description: 'Starts a job to import a resource to Amazon Lex.',
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
              payload: z
                .string()
                .openapi({
                  description:
                    'A zip archive in binary format. The archive should contain one file, a JSON file containing the resource to import. The resource should match the type specified in the <code>resourceType</code> field.',
                }),
              resourceType: z
                .enum(['BOT', 'INTENT', 'SLOT_TYPE'])
                .openapi({
                  description:
                    '<p>Specifies the type of resource to export. Each resource also exports any resources that it depends on. </p> <ul> <li> <p>A bot exports dependent intents.</p> </li> <li> <p>An intent exports dependent slot types.</p> </li> </ul>',
                }),
              mergeStrategy: z
                .enum(['OVERWRITE_LATEST', 'FAIL_ON_CONFLICT'])
                .openapi({
                  description:
                    '<p>Specifies the action that the <code>StartImport</code> operation should take when there is an existing resource with the same name.</p> <ul> <li> <p>FAIL_ON_CONFLICT - The import operation is stopped on the first conflict between a resource in the import file and an existing resource. The name of the resource causing the conflict is in the <code>failureReason</code> field of the response to the <code>GetImport</code> operation.</p> <p>OVERWRITE_LATEST - The import operation proceeds even if there is a conflict with an existing resource. The $LASTEST version of the existing resource is overwritten with the data from the import file.</p> </li> </ul>',
                }),
              tags: z
                .array(TagSchema)
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    "A list of tags to add to the imported bot. You can only add tags when you import a bot, you can't add tags to an intent or slot type.",
                }),
            })
            .openapi({ required: ['payload', 'resourceType', 'mergeStrategy'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: StartImportResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resourceArn}#tagKeys',
  description: 'Removes tags from a bot, bot alias or bot channel.',
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
      resourceArn: z
        .string()
        .min(1)
        .max(1011)
        .openapi({
          param: {
            name: 'resourceArn',
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
    204: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})
