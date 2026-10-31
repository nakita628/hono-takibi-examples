import { createRoute, z } from '@hono/zod-openapi'

const NonEmptyStringSchema = z.string().min(1).openapi('NonEmptyString')

type ElicitSubSlotType = {
  name: z.infer<typeof NonEmptyStringSchema> & { [key: string]: unknown }
  subSlotToElicit?: ElicitSubSlotType & { [key: string]: unknown }
}

const SlotSchema: z.ZodType<SlotType> = z
  .lazy(() =>
    z
      .object({
        value: ValueSchema.and(
          z.any().openapi({ description: 'The current value of the slot.' }),
        ).exactOptional(),
        values: ValuesSchema.and(
          z
            .any()
            .openapi({
              description:
                'A list of one or more values that the user provided for the slot. For example, if a for a slot that elicits pizza toppings, the values might be "pepperoni" and "pineapple." ',
            }),
        ).exactOptional(),
        subSlots: SlotsSchema.and(
          z.any().openapi({ description: 'The constituent sub slots of a composite slot.' }),
        ).exactOptional(),
      })
      .openapi({
        description: 'A value that Amazon Lex V2 uses to fulfill an intent. ',
        required: [],
      }),
  )
  .openapi('Slot')

type SlotsType = { [key: string]: z.infer<typeof SlotSchema> }

const RuntimeHintPhraseSchema = z.string().min(1).max(140).openapi('RuntimeHintPhrase')

const RuntimeHintValueSchema = z
  .object({
    phrase: RuntimeHintPhraseSchema.and(
      z
        .any()
        .openapi({
          description:
            "The phrase that Amazon Lex V2 should look for in the user's input to the bot.",
        }),
    ),
  })
  .openapi({
    required: ['phrase'],
    description:
      "Provides the phrase that Amazon Lex V2 should look for in the user's input to the bot.",
  })
  .openapi('RuntimeHintValue')

type RuntimeHintValuesListType = z.infer<typeof RuntimeHintValueSchema>[]

const RuntimeHintDetailsSchema: z.ZodType<RuntimeHintDetailsType> = z
  .lazy(() =>
    z
      .object({
        runtimeHintValues: RuntimeHintValuesListSchema.and(
          z
            .any()
            .openapi({
              description:
                'One or more strings that Amazon Lex V2 should look for in the input to the bot. Each phrase is given preference when deciding on slot values.',
            }),
        ).exactOptional(),
        subSlotHints: SlotHintsSlotMapSchema.and(
          z
            .any()
            .openapi({
              description:
                'A map of constituent sub slot names inside a composite slot in the intent and the phrases that should be added for each sub slot. Inside each composite slot hints, this structure provides a mechanism to add granular sub slot phrases. Only sub slot hints are supported for composite slots. The intent name, composite slot name and the constituent sub slot names must exist.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'Provides an array of phrases that should be given preference when resolving values for a slot.',
        required: [],
      }),
  )
  .openapi('RuntimeHintDetails')

type SlotHintsSlotMapType = { [key: string]: z.infer<typeof RuntimeHintDetailsSchema> }

const RuntimeHintValuesListSchema: z.ZodType<RuntimeHintValuesListType> = z
  .array(RuntimeHintValueSchema)
  .min(1)
  .max(100)
  .openapi('RuntimeHintValuesList')

const SlotHintsSlotMapSchema: z.ZodType<SlotHintsSlotMapType> = z
  .lazy(() => z.record(z.string(), RuntimeHintDetailsSchema))
  .openapi('SlotHintsSlotMap')

type RuntimeHintDetailsType = {
  runtimeHintValues?: z.infer<typeof RuntimeHintValuesListSchema> & { [key: string]: unknown }
  subSlotHints?: z.infer<typeof SlotHintsSlotMapSchema> & { [key: string]: unknown }
}

const StringListSchema = z.array(NonEmptyStringSchema).openapi('StringList')

type ValueType = {
  originalValue?: z.infer<typeof NonEmptyStringSchema> & { [key: string]: unknown }
  interpretedValue: z.infer<typeof NonEmptyStringSchema> & { [key: string]: unknown }
  resolvedValues?: z.infer<typeof StringListSchema> & { [key: string]: unknown }
}

type ValuesType = z.infer<typeof SlotSchema>[]

const ValueSchema: z.ZodType<ValueType> = z
  .object({
    originalValue: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The text of the utterance from the user that was entered for the slot.',
        }),
    ).exactOptional(),
    interpretedValue: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value that Amazon Lex V2 determines for the slot. The actual value depends on the setting of the value selection strategy for the bot. You can choose to use the value entered by the user, or you can have Amazon Lex V2 choose the first value in the <code>resolvedValues</code> list.',
        }),
    ),
    resolvedValues: StringListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of additional values that have been recognized for the slot.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['interpretedValue'], description: 'The value of a slot.' })
  .openapi('Value')

const ValuesSchema: z.ZodType<ValuesType> = z.lazy(() => z.array(SlotSchema)).openapi('Values')

const SlotsSchema: z.ZodType<SlotsType> = z
  .lazy(() => z.record(z.string(), SlotSchema))
  .openapi('Slots')

type SlotType = {
  value?: z.infer<typeof ValueSchema> & { [key: string]: unknown }
  values?: z.infer<typeof ValuesSchema> & { [key: string]: unknown }
  subSlots?: z.infer<typeof SlotsSchema> & { [key: string]: unknown }
}

const BotIdentifierSchema = z
  .string()
  .regex(/^[0-9a-zA-Z]+$/)
  .length(10)
  .openapi('BotIdentifier')

const BotAliasIdentifierSchema = z.string().openapi('BotAliasIdentifier')

const LocaleIdSchema = z.string().min(1).openapi('LocaleId')

const SessionIdSchema = z
  .string()
  .regex(/[0-9a-zA-Z._:-]+/)
  .min(2)
  .max(100)
  .openapi('SessionId')

const DeleteSessionResponseSchema = z
  .object({
    botId: BotIdentifierSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the bot that contained the session data.' }),
    ).exactOptional(),
    botAliasId: BotAliasIdentifierSchema.and(
      z
        .any()
        .openapi({
          description: 'The alias identifier in use for the bot that contained the session data.',
        }),
    ).exactOptional(),
    localeId: LocaleIdSchema.and(
      z.any().openapi({ description: 'The locale where the session was used.' }),
    ).exactOptional(),
    sessionId: SessionIdSchema.and(
      z.any().openapi({ description: 'The identifier of the deleted session.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteSessionResponse')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const TextSchema = z.string().min(1).max(1024).openapi('Text')

const MessageContentTypeSchema = z
  .enum(['CustomPayload', 'ImageResponseCard', 'PlainText', 'SSML'])
  .openapi('MessageContentType')

const AttachmentTitleSchema = z.string().min(1).max(250).openapi('AttachmentTitle')

const AttachmentUrlSchema = z.string().min(1).max(250).openapi('AttachmentUrl')

const ButtonTextSchema = z.string().min(1).max(50).openapi('ButtonText')

const ButtonValueSchema = z.string().min(1).max(50).openapi('ButtonValue')

const ButtonSchema = z
  .object({
    text: ButtonTextSchema.and(
      z.any().openapi({ description: 'The text that is displayed on the button.' }),
    ),
    value: ButtonValueSchema.and(
      z
        .any()
        .openapi({
          description: 'The value returned to Amazon Lex V2 when a user chooses the button.',
        }),
    ),
  })
  .openapi({
    required: ['text', 'value'],
    description: 'A button that appears on a response card show to the user.',
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

const MessageSchema = z
  .object({
    content: TextSchema.and(
      z.any().openapi({ description: 'The text of the message.' }),
    ).exactOptional(),
    contentType: MessageContentTypeSchema.and(
      z.any().openapi({ description: 'Indicates the type of response.' }),
    ),
    imageResponseCard: ImageResponseCardSchema.exactOptional(),
  })
  .openapi({
    required: ['contentType'],
    description: 'Container for text that is returned to the customer..',
  })
  .openapi('Message')

const MessagesSchema = z.array(MessageSchema).max(10).openapi('Messages')

const DoubleSchema = z.float64().openapi('Double')

const ConfidenceScoreSchema = z
  .object({
    score: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            "A score that indicates how confident Amazon Lex V2 is that an intent satisfies the user's intent. Ranges between 0.00 and 1.00. Higher scores indicate higher confidence.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Provides a score that indicates the confidence that Amazon Lex V2 has that an intent is the one that satisfies the user's intent.",
    required: [],
  })
  .openapi('ConfidenceScore')

const SentimentTypeSchema = z
  .enum(['MIXED', 'NEGATIVE', 'NEUTRAL', 'POSITIVE'])
  .openapi('SentimentType')

const SentimentScoreSchema = z
  .object({
    positive: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of confidence that Amazon Comprehend has in the accuracy of its detection of the <code>POSITIVE</code> sentiment.',
        }),
    ).exactOptional(),
    negative: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of confidence that Amazon Comprehend has in the accuracy of its detection of the <code>NEGATIVE</code> sentiment.',
        }),
    ).exactOptional(),
    neutral: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of confidence that Amazon Comprehend has in the accuracy of its detection of the <code>NEUTRAL</code> sentiment.',
        }),
    ).exactOptional(),
    mixed: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of confidence that Amazon Comprehend has in the accuracy of its detection of the <code>MIXED</code> sentiment.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The individual sentiment responses for the utterance.', required: [] })
  .openapi('SentimentScore')

const SentimentResponseSchema = z
  .object({
    sentiment: SentimentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The overall sentiment expressed in the user's response. This is the sentiment most likely expressed by the user based on the analysis by Amazon Comprehend.",
        }),
    ).exactOptional(),
    sentimentScore: SentimentScoreSchema.exactOptional(),
  })
  .openapi({
    description:
      '<p>Provides information about the sentiment expressed in a user\'s response in a conversation. Sentiments are determined using Amazon Comprehend. Sentiments are only returned if they are enabled for the bot.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-sentiment.html"> Determine Sentiment </a> in the <i>Amazon Comprehend developer guide</i>.</p>',
    required: [],
  })
  .openapi('SentimentResponse')

const IntentStateSchema = z
  .enum([
    'Failed',
    'Fulfilled',
    'InProgress',
    'ReadyForFulfillment',
    'Waiting',
    'FulfillmentInProgress',
  ])
  .openapi('IntentState')

const ConfirmationStateSchema = z.enum(['Confirmed', 'Denied', 'None']).openapi('ConfirmationState')

const IntentSchema = z
  .object({
    name: NonEmptyStringSchema.and(z.any().openapi({ description: 'The name of the intent.' })),
    slots: SlotsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map of all of the slots for the intent. The name of the slot maps to the value of the slot. If a slot has not been filled, the value is null.',
        }),
    ).exactOptional(),
    state: IntentStateSchema.and(
      z.any().openapi({ description: 'Contains fulfillment information for the intent. ' }),
    ).exactOptional(),
    confirmationState: ConfirmationStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains information about whether fulfillment of the intent has been confirmed.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name'],
    description: 'The current intent that Amazon Lex V2 is attempting to fulfill.',
  })
  .openapi('Intent')

const InterpretationSchema = z
  .object({
    nluConfidence: ConfidenceScoreSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines the threshold where Amazon Lex V2 will insert the <code>AMAZON.FallbackIntent</code>, <code>AMAZON.KendraSearchIntent</code>, or both when returning alternative intents in a response. <code>AMAZON.FallbackIntent</code> and <code>AMAZON.KendraSearchIntent</code> are only inserted if they are configured for the bot.',
        }),
    ).exactOptional(),
    sentimentResponse: SentimentResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The sentiment expressed in an utterance. </p> <p>When the bot is configured to send utterances to Amazon Comprehend for sentiment analysis, this field contains the result of the analysis.</p>',
        }),
    ).exactOptional(),
    intent: IntentSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of intents that might satisfy the user's utterance. The intents are ordered by the confidence score.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "An intent that Amazon Lex V2 determined might satisfy the user's utterance. The intents are ordered by the confidence score. ",
    required: [],
  })
  .openapi('Interpretation')

const InterpretationsSchema = z.array(InterpretationSchema).max(5).openapi('Interpretations')

const DialogActionTypeSchema = z
  .enum(['Close', 'ConfirmIntent', 'Delegate', 'ElicitIntent', 'ElicitSlot', 'None'])
  .openapi('DialogActionType')

const StyleTypeSchema = z.enum(['Default', 'SpellByLetter', 'SpellByWord']).openapi('StyleType')

const ElicitSubSlotSchema: z.ZodType<ElicitSubSlotType> = z
  .lazy(() =>
    z
      .object({
        name: NonEmptyStringSchema.and(
          z
            .any()
            .openapi({
              description: 'The name of the slot that should be elicited from the user.',
            }),
        ),
        subSlotToElicit: ElicitSubSlotSchema.and(
          z.any().openapi({ description: 'The field is not supported.' }),
        ).exactOptional(),
      })
      .openapi({
        required: ['name'],
        description:
          'The specific constituent sub slot of the composite slot to elicit in dialog action.',
      }),
  )
  .openapi('ElicitSubSlot')

const DialogActionSchema = z
  .object({
    type: DialogActionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The next action that the bot should take in its interaction with the user. The possible values are:</p> <ul> <li> <p> <code>Close</code> - Indicates that there will not be a response from the user. For example, the statement "Your order has been placed" does not require a response.</p> </li> <li> <p> <code>ConfirmIntent</code> - The next action is asking the user if the intent is complete and ready to be fulfilled. This is a yes/no question such as "Place the order?"</p> </li> <li> <p> <code>Delegate</code> - The next action is determined by Amazon Lex V2.</p> </li> <li> <p> <code>ElicitIntent</code> - The next action is to elicit an intent from the user.</p> </li> <li> <p> <code>ElicitSlot</code> - The next action is to elicit a slot value from the user.</p> </li> </ul>',
        }),
    ),
    slotToElicit: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the slot that should be elicited from the user.' }),
    ).exactOptional(),
    slotElicitationStyle: StyleTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Configures the slot to use spell-by-letter or spell-by-word style. When you use a style on a slot, users can spell out their input to make it clear to your bot.</p> <ul> <li> <p>Spell by letter - "b" "o" "b"</p> </li> <li> <p>Spell by word - "b as in boy" "o as in oscar" "b as in boy"</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/using-spelling.html"> Using spelling to enter slot values </a>.</p>',
        }),
    ).exactOptional(),
    subSlotToElicit: ElicitSubSlotSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the constituent sub slot of the composite slot specified in slotToElicit that should be elicited from the user.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['type'], description: 'The next action that Amazon Lex V2 should take.' })
  .openapi('DialogAction')

const ActiveContextNameSchema = z
  .string()
  .regex(/^([A-Za-z]_?)+$/)
  .min(1)
  .max(100)
  .openapi('ActiveContextName')

const ActiveContextTimeToLiveInSecondsSchema = z
  .int()
  .min(5)
  .max(86400)
  .openapi('ActiveContextTimeToLiveInSeconds')

const ActiveContextTurnsToLiveSchema = z.int().min(1).max(20).openapi('ActiveContextTurnsToLive')

const ActiveContextTimeToLiveSchema = z
  .object({
    timeToLiveInSeconds: ActiveContextTimeToLiveInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of seconds that the context is active. You can specify between 5 and 86400 seconds (24 hours).',
        }),
    ),
    turnsToLive: ActiveContextTurnsToLiveSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of turns that the context is active. You can specify up to 20 turns. Each request and response from the bot is a turn.',
        }),
    ),
  })
  .openapi({
    required: ['timeToLiveInSeconds', 'turnsToLive'],
    description:
      'The time that a context is active. You can specify the time to live in seconds or in conversation turns.',
  })
  .openapi('ActiveContextTimeToLive')

const ActiveContextParametersMapSchema = z
  .record(z.string(), TextSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 10)
  .openapi('ActiveContextParametersMap')

const ActiveContextSchema = z
  .object({
    name: ActiveContextNameSchema.and(z.any().openapi({ description: 'The name of the context.' })),
    timeToLive: ActiveContextTimeToLiveSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates the number of turns or seconds that the context is active. Once the time to live expires, the context is no longer returned in a response.',
        }),
    ),
    contextAttributes: ActiveContextParametersMapSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of contexts active for the request. A context can be activated when a previous intent is fulfilled, or by including the context in the request.</p> <p>If you don't specify a list of contexts, Amazon Lex V2 will use the current list of contexts for the session. If you specify an empty list, all contexts for the session are cleared. </p>",
        }),
    ),
  })
  .openapi({
    required: ['name', 'timeToLive', 'contextAttributes'],
    description:
      '<p>Contains information about the contexts that a user is using in a session. You can configure Amazon Lex V2 to set a context when an intent is fulfilled, or you can set a context using the , , or operations.</p> <p>Use a context to indicate to Amazon Lex V2 intents that should be used as follow-up intents. For example, if the active context is <code>order-fulfilled</code>, only intents that have <code>order-fulfilled</code> configured as a trigger are considered for follow up.</p>',
  })
  .openapi('ActiveContext')

const ActiveContextsListSchema = z
  .array(ActiveContextSchema)
  .min(0)
  .max(20)
  .openapi('ActiveContextsList')

const StringSchema = z.string().openapi('String')

const StringMapSchema = z.record(z.string(), StringSchema).openapi('StringMap')

const SlotHintsIntentMapSchema = z
  .record(z.string(), SlotHintsSlotMapSchema)
  .openapi('SlotHintsIntentMap')

const RuntimeHintsSchema = z
  .object({
    slotHints: SlotHintsIntentMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of the slots in the intent that should have runtime hints added, and the phrases that should be added for each slot.</p> <p>The first level of the <code>slotHints</code> map is the name of the intent. The second level is the name of the slot within the intent. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/using-hints.html">Using hints to improve accuracy</a>.</p> <p>The intent name and slot name must exist.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>You can provide Amazon Lex V2 with hints to the phrases that a customer is likely to use for a slot. When a slot with hints is resolved, the phrases in the runtime hints are preferred in the resolution. You can provide hints for a maximum of 100 intents. You can provide a maximum of 100 slots.</p> <p>Before you can use runtime hints with an existing bot, you must first rebuild the bot.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/using-hints.html">Using runtime hints to improve recognition of slot values</a>.</p>',
    required: [],
  })
  .openapi('RuntimeHints')

const SessionStateSchema = z
  .object({
    dialogAction: DialogActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The next step that Amazon Lex V2 should take in the conversation with a user.',
        }),
    ).exactOptional(),
    intent: IntentSchema.and(
      z.any().openapi({ description: 'The active intent that Amazon Lex V2 is processing.' }),
    ).exactOptional(),
    activeContexts: ActiveContextsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more contexts that indicate to Amazon Lex V2 the context of a request. When a context is active, Amazon Lex V2 considers intents with the matching context as a trigger as the next intent in a session.',
        }),
    ).exactOptional(),
    sessionAttributes: StringMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Map of key/value pairs representing session-specific context information. It contains application information passed between Amazon Lex V2 and a client application.',
        }),
    ).exactOptional(),
    originatingRequestId: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'A unique identifier for a specific request.' }),
    ).exactOptional(),
    runtimeHints: RuntimeHintsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Hints for phrases that a customer is likely to use for a slot. Amazon Lex V2 uses the hints to help determine the correct value of a slot.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: "The state of the user's session with Amazon Lex V2.", required: [] })
  .openapi('SessionState')

const GetSessionResponseSchema = z
  .object({
    sessionId: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The identifier of the returned session.' }),
    ).exactOptional(),
    messages: MessagesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of messages that were last sent to the user. The messages are ordered based on the order that your returned the messages from your Lambda function or the order that messages are defined in the bot. ',
        }),
    ).exactOptional(),
    interpretations: InterpretationsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of intents that Amazon Lex V2 determined might satisfy the user's utterance. </p> <p>Each interpretation includes the intent, a score that indicates how confident Amazon Lex V2 is that the interpretation is the correct one, and an optional sentiment response that indicates the sentiment expressed in the utterance.</p>",
        }),
    ).exactOptional(),
    sessionState: SessionStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Represents the current state of the dialog between the user and the bot.</p> <p>You can use this to determine the progress of the conversation and what the next action might be.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetSessionResponse')

const BlobStreamSchema = z.string().openapi('BlobStream')

const PutSessionResponseSchema = z
  .object({
    audioStream: BlobStreamSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the requested content type was audio, the audio version of the message to convey to the user.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutSessionResponse')

const DependencyFailedExceptionSchema = z.any().openapi('DependencyFailedException')

const BadGatewayExceptionSchema = z.any().openapi('BadGatewayException')

const NameSchema = z
  .string()
  .regex(/^([0-9a-zA-Z][_-]?)+$/)
  .min(1)
  .max(100)
  .openapi('Name')

const RecognizedBotMemberSchema = z
  .object({
    botId: BotIdentifierSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the bot member that processes the request.' }),
    ),
    botName: NameSchema.and(
      z.any().openapi({ description: 'The name of the bot member that processes the request.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['botId'], description: 'The bot member that processes the request.' })
  .openapi('RecognizedBotMember')

const RecognizeTextResponseSchema = z
  .object({
    messages: MessagesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of messages last sent to the user. The messages are ordered based on the order that you returned the messages from your Lambda function or the order that the messages are defined in the bot.',
        }),
    ).exactOptional(),
    sessionState: SessionStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Represents the current state of the dialog between the user and the bot. </p> <p>Use this to determine the progress of the conversation and what the next action may be.</p>',
        }),
    ).exactOptional(),
    interpretations: InterpretationsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of intents that Amazon Lex V2 determined might satisfy the user's utterance. </p> <p>Each interpretation includes the intent, a score that indicates now confident Amazon Lex V2 is that the interpretation is the correct one, and an optional sentiment response that indicates the sentiment expressed in the utterance.</p>",
        }),
    ).exactOptional(),
    requestAttributes: StringMapSchema.and(
      z.any().openapi({ description: 'The attributes sent in the request.' }),
    ).exactOptional(),
    sessionId: SessionIdSchema.and(
      z.any().openapi({ description: 'The identifier of the session in use.' }),
    ).exactOptional(),
    recognizedBotMember: RecognizedBotMemberSchema.and(
      z.any().openapi({ description: 'The bot member that recognized the text.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RecognizeTextResponse')

const RecognizeUtteranceResponseSchema = z
  .object({
    audioStream: BlobStreamSchema.and(
      z
        .any()
        .openapi({
          description:
            'The prompt or statement to send to the user. This is based on the bot configuration and context. For example, if Amazon Lex V2 did not understand the user intent, it sends the <code>clarificationPrompt</code> configured for the bot. If the intent requires confirmation before taking the fulfillment action, it sends the <code>confirmationPrompt</code>. Another example: Suppose that the Lambda function successfully fulfilled the intent, and sent a message to convey to the user. Then Amazon Lex V2 sends that message in the response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RecognizeUtteranceResponse')

const DeleteSessionRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteSessionRequest' })
  .openapi('DeleteSessionRequest')

const GetSessionRequestSchema = z
  .object({})
  .openapi({ title: 'GetSessionRequest' })
  .openapi('GetSessionRequest')

const ParameterNameSchema = z.string().min(1).max(100).openapi('ParameterName')

const PutSessionRequestSchema = z
  .object({
    messages: MessagesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of messages to send to the user. Messages are sent in the order that they are defined in the list.',
        }),
    ).exactOptional(),
    sessionState: SessionStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Sets the state of the session with the user. You can use this to set the current intent, attributes, context, and dialog action. Use the dialog action to determine the next step that Amazon Lex V2 should use in the conversation with the user.',
        }),
    ),
    requestAttributes: StringMapSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Request-specific information passed between Amazon Lex V2 and the client application.</p> <p>The namespace <code>x-amz-lex:</code> is reserved for special attributes. Don't create any request attributes with the prefix <code>x-amz-lex:</code>.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['sessionState'], title: 'PutSessionRequest' })
  .openapi('PutSessionRequest')

const RecognizeTextRequestSchema = z
  .object({
    text: TextSchema.and(
      z
        .any()
        .openapi({
          description: 'The text that the user entered. Amazon Lex V2 interprets this text.',
        }),
    ),
    sessionState: SessionStateSchema.and(
      z
        .any()
        .openapi({ description: 'The current state of the dialog between the user and the bot.' }),
    ).exactOptional(),
    requestAttributes: StringMapSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Request-specific information passed between the client application and Amazon Lex V2 </p> <p>The namespace <code>x-amz-lex:</code> is reserved for special attributes. Don't create any request attributes with the prefix <code>x-amz-lex:</code>.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['text'], title: 'RecognizeTextRequest' })
  .openapi('RecognizeTextRequest')

const SensitiveNonEmptyStringSchema = z.string().openapi('SensitiveNonEmptyString')

const RecognizeUtteranceRequestSchema = z
  .object({
    inputStream: BlobStreamSchema.and(
      z
        .any()
        .openapi({
          description:
            'User input in PCM or Opus audio format or text format as described in the <code>requestContentType</code> parameter.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'RecognizeUtteranceRequest', required: [] })
  .openapi('RecognizeUtteranceRequest')

const ShapeSchema = z.enum(['Scalar', 'List', 'Composite']).openapi('Shape')

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

export const getBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdRoute = createRoute(
  {
    method: 'get',
    path: '/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}',
    description:
      "<p>Returns session information for a specified bot, alias, and user.</p> <p>For example, you can use this operation to retrieve session information for a user that has left a long-running session in use.</p> <p>If the bot, alias, or session identifier doesn't exist, Amazon Lex V2 returns a <code>BadRequestException</code>. If the locale doesn't exist or is not enabled for the alias, you receive a <code>BadRequestException</code>.</p>",
    operationId: 'GetSession',
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
              description: 'The identifier of the bot that contains the session data.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botAliasId: z
          .string()
          .openapi({
            param: {
              name: 'botAliasId',
              in: 'path',
              required: true,
              description:
                'The alias identifier in use for the bot that contains the session data.',
              schema: { type: 'string' },
            },
          }),
        localeId: z
          .string()
          .min(1)
          .openapi({
            param: {
              name: 'localeId',
              in: 'path',
              required: true,
              description: 'The locale where the session is in use.',
              schema: { type: 'string', minLength: 1 },
            },
          }),
        sessionId: z
          .string()
          .regex(/[0-9a-zA-Z._:-]+/)
          .min(2)
          .max(100)
          .openapi({
            param: {
              name: 'sessionId',
              in: 'path',
              required: true,
              description: 'The identifier of the session to return.',
              schema: { type: 'string', pattern: '[0-9a-zA-Z._:-]+', minLength: 2, maxLength: 100 },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetSessionResponseSchema } },
      },
      480: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      483: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      484: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  },
)

export const postBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdRoute =
  createRoute({
    method: 'post',
    path: '/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}',
    description:
      'Creates a new session or modifies an existing session with an Amazon Lex V2 bot. Use this operation to enable your application to set the state of the bot.',
    operationId: 'PutSession',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        ResponseContentType: z
          .string()
          .min(1)
          .exactOptional()
          .openapi({
            param: {
              name: 'ResponseContentType',
              in: 'header',
              required: false,
              description:
                '<p>The message that Amazon Lex V2 returns in the response can be either text or speech depending on the value of this parameter. </p> <ul> <li> <p>If the value is <code>text/plain; charset=utf-8</code>, Amazon Lex V2 returns text in the response.</p> </li> </ul>',
              schema: { type: 'string', minLength: 1 },
            },
          }),
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
              description: 'The identifier of the bot that receives the session data.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botAliasId: z
          .string()
          .openapi({
            param: {
              name: 'botAliasId',
              in: 'path',
              required: true,
              description: 'The alias identifier of the bot that receives the session data.',
              schema: { type: 'string' },
            },
          }),
        localeId: z
          .string()
          .min(1)
          .openapi({
            param: {
              name: 'localeId',
              in: 'path',
              required: true,
              description: 'The locale where the session is in use.',
              schema: { type: 'string', minLength: 1 },
            },
          }),
        sessionId: z
          .string()
          .regex(/[0-9a-zA-Z._:-]+/)
          .min(2)
          .max(100)
          .openapi({
            param: {
              name: 'sessionId',
              in: 'path',
              required: true,
              description: 'The identifier of the session that receives the session data.',
              schema: { type: 'string', pattern: '[0-9a-zA-Z._:-]+', minLength: 2, maxLength: 100 },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                messages: z
                  .array(MessageSchema)
                  .max(10)
                  .exactOptional()
                  .openapi({
                    description:
                      'A list of messages to send to the user. Messages are sent in the order that they are defined in the list.',
                  }),
                sessionState: z
                  .object({
                    dialogAction: DialogActionSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The next step that Amazon Lex V2 should take in the conversation with a user.',
                        }),
                    ).exactOptional(),
                    intent: IntentSchema.and(
                      z
                        .any()
                        .openapi({
                          description: 'The active intent that Amazon Lex V2 is processing.',
                        }),
                    ).exactOptional(),
                    activeContexts: ActiveContextsListSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'One or more contexts that indicate to Amazon Lex V2 the context of a request. When a context is active, Amazon Lex V2 considers intents with the matching context as a trigger as the next intent in a session.',
                        }),
                    ).exactOptional(),
                    sessionAttributes: StringMapSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Map of key/value pairs representing session-specific context information. It contains application information passed between Amazon Lex V2 and a client application.',
                        }),
                    ).exactOptional(),
                    originatingRequestId: NonEmptyStringSchema.and(
                      z
                        .any()
                        .openapi({ description: 'A unique identifier for a specific request.' }),
                    ).exactOptional(),
                    runtimeHints: RuntimeHintsSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Hints for phrases that a customer is likely to use for a slot. Amazon Lex V2 uses the hints to help determine the correct value of a slot.',
                        }),
                    ).exactOptional(),
                  })
                  .openapi({
                    description: "The state of the user's session with Amazon Lex V2.",
                    required: [],
                  }),
                requestAttributes: z
                  .record(z.string(), StringSchema)
                  .exactOptional()
                  .openapi({
                    description:
                      "<p>Request-specific information passed between Amazon Lex V2 and the client application.</p> <p>The namespace <code>x-amz-lex:</code> is reserved for special attributes. Don't create any request attributes with the prefix <code>x-amz-lex:</code>.</p>",
                  }),
              })
              .openapi({ required: ['sessionState'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: PutSessionResponseSchema } },
      },
      480: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      483: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      484: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      485: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      486: {
        description: 'DependencyFailedException',
        content: { 'application/json': { schema: DependencyFailedExceptionSchema } },
      },
      487: {
        description: 'BadGatewayException',
        content: { 'application/json': { schema: BadGatewayExceptionSchema } },
      },
    },
  })

export const deleteBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdRoute =
  createRoute({
    method: 'delete',
    path: '/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}',
    description:
      "<p>Removes session information for a specified bot, alias, and user ID. </p> <p>You can use this operation to restart a conversation with a bot. When you remove a session, the entire history of the session is removed so that you can start again.</p> <p>You don't need to delete a session. Sessions have a time limit and will expire. Set the session time limit when you create the bot. The default is 5 minutes, but you can specify anything between 1 minute and 24 hours.</p> <p>If you specify a bot or alias ID that doesn't exist, you receive a <code>BadRequestException.</code> </p> <p>If the locale doesn't exist in the bot, or if the locale hasn't been enables for the alias, you receive a <code>BadRequestException</code>.</p>",
    operationId: 'DeleteSession',
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
              description: 'The identifier of the bot that contains the session data.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botAliasId: z
          .string()
          .openapi({
            param: {
              name: 'botAliasId',
              in: 'path',
              required: true,
              description:
                'The alias identifier in use for the bot that contains the session data.',
              schema: { type: 'string' },
            },
          }),
        localeId: z
          .string()
          .min(1)
          .openapi({
            param: {
              name: 'localeId',
              in: 'path',
              required: true,
              description: 'The locale where the session is in use.',
              schema: { type: 'string', minLength: 1 },
            },
          }),
        sessionId: z
          .string()
          .regex(/[0-9a-zA-Z._:-]+/)
          .min(2)
          .max(100)
          .openapi({
            param: {
              name: 'sessionId',
              in: 'path',
              required: true,
              description: 'The identifier of the session to delete.',
              schema: { type: 'string', pattern: '[0-9a-zA-Z._:-]+', minLength: 2, maxLength: 100 },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeleteSessionResponseSchema } },
      },
      480: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      483: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      484: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      485: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
    },
  })

export const postBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdTextRoute =
  createRoute({
    method: 'post',
    path: '/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/text',
    description:
      '<p>Sends user input to Amazon Lex V2. Client applications use this API to send requests to Amazon Lex V2 at runtime. Amazon Lex V2 then interprets the user input using the machine learning model that it build for the bot.</p> <p>In response, Amazon Lex V2 returns the next message to convey to the user and an optional response card to display.</p> <p>If the optional post-fulfillment response is specified, the messages are returned as follows. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_PostFulfillmentStatusSpecification.html">PostFulfillmentStatusSpecification</a>.</p> <ul> <li> <p> <b>Success message</b> - Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if the message is present.</p> </li> <li> <p> <b>Failed message</b> - The failed message is returned if the Lambda function throws an exception or if the Lambda function returns a failed intent state without a message.</p> </li> <li> <p> <b>Timeout message</b> - If you don\'t configure a timeout message and a timeout, and the Lambda function doesn\'t return within 30 seconds, the timeout message is returned. If you configure a timeout, the timeout message is returned when the period times out. </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete.html">Completion message</a>.</p>',
    operationId: 'RecognizeText',
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
              description: 'The identifier of the bot that processes the request.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botAliasId: z
          .string()
          .openapi({
            param: {
              name: 'botAliasId',
              in: 'path',
              required: true,
              description: 'The alias identifier in use for the bot that processes the request.',
              schema: { type: 'string' },
            },
          }),
        localeId: z
          .string()
          .min(1)
          .openapi({
            param: {
              name: 'localeId',
              in: 'path',
              required: true,
              description: 'The locale where the session is in use.',
              schema: { type: 'string', minLength: 1 },
            },
          }),
        sessionId: z
          .string()
          .regex(/[0-9a-zA-Z._:-]+/)
          .min(2)
          .max(100)
          .openapi({
            param: {
              name: 'sessionId',
              in: 'path',
              required: true,
              description: 'The identifier of the user session that is having the conversation.',
              schema: { type: 'string', pattern: '[0-9a-zA-Z._:-]+', minLength: 2, maxLength: 100 },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                text: z
                  .string()
                  .min(1)
                  .max(1024)
                  .openapi({
                    description:
                      'The text that the user entered. Amazon Lex V2 interprets this text.',
                  }),
                sessionState: z
                  .object({
                    dialogAction: DialogActionSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The next step that Amazon Lex V2 should take in the conversation with a user.',
                        }),
                    ).exactOptional(),
                    intent: IntentSchema.and(
                      z
                        .any()
                        .openapi({
                          description: 'The active intent that Amazon Lex V2 is processing.',
                        }),
                    ).exactOptional(),
                    activeContexts: ActiveContextsListSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'One or more contexts that indicate to Amazon Lex V2 the context of a request. When a context is active, Amazon Lex V2 considers intents with the matching context as a trigger as the next intent in a session.',
                        }),
                    ).exactOptional(),
                    sessionAttributes: StringMapSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Map of key/value pairs representing session-specific context information. It contains application information passed between Amazon Lex V2 and a client application.',
                        }),
                    ).exactOptional(),
                    originatingRequestId: NonEmptyStringSchema.and(
                      z
                        .any()
                        .openapi({ description: 'A unique identifier for a specific request.' }),
                    ).exactOptional(),
                    runtimeHints: RuntimeHintsSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Hints for phrases that a customer is likely to use for a slot. Amazon Lex V2 uses the hints to help determine the correct value of a slot.',
                        }),
                    ).exactOptional(),
                  })
                  .exactOptional()
                  .openapi({
                    description: "The state of the user's session with Amazon Lex V2.",
                    required: [],
                  }),
                requestAttributes: z
                  .record(z.string(), StringSchema)
                  .exactOptional()
                  .openapi({
                    description:
                      "<p>Request-specific information passed between the client application and Amazon Lex V2 </p> <p>The namespace <code>x-amz-lex:</code> is reserved for special attributes. Don't create any request attributes with the prefix <code>x-amz-lex:</code>.</p>",
                  }),
              })
              .openapi({ required: ['text'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: RecognizeTextResponseSchema } },
      },
      480: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      483: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      484: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      485: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      486: {
        description: 'DependencyFailedException',
        content: { 'application/json': { schema: DependencyFailedExceptionSchema } },
      },
      487: {
        description: 'BadGatewayException',
        content: { 'application/json': { schema: BadGatewayExceptionSchema } },
      },
    },
  })

export const postBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdUtteranceContentTypeRoute =
  createRoute({
    method: 'post',
    path: '/bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/utterance#Content-Type',
    description:
      '<p>Sends user input to Amazon Lex V2. You can send text or speech. Clients use this API to send text and audio requests to Amazon Lex V2 at runtime. Amazon Lex V2 interprets the user input using the machine learning model built for the bot.</p> <p>The following request fields must be compressed with gzip and then base64 encoded before you send them to Amazon Lex V2. </p> <ul> <li> <p>requestAttributes</p> </li> <li> <p>sessionState</p> </li> </ul> <p>The following response fields are compressed using gzip and then base64 encoded by Amazon Lex V2. Before you can use these fields, you must decode and decompress them. </p> <ul> <li> <p>inputTranscript</p> </li> <li> <p>interpretations</p> </li> <li> <p>messages</p> </li> <li> <p>requestAttributes</p> </li> <li> <p>sessionState</p> </li> </ul> <p>The example contains a Java application that compresses and encodes a Java object to send to Amazon Lex V2, and a second that decodes and decompresses a response from Amazon Lex V2.</p> <p>If the optional post-fulfillment response is specified, the messages are returned as follows. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_PostFulfillmentStatusSpecification.html">PostFulfillmentStatusSpecification</a>.</p> <ul> <li> <p> <b>Success message</b> - Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if the message is present.</p> </li> <li> <p> <b>Failed message</b> - The failed message is returned if the Lambda function throws an exception or if the Lambda function returns a failed intent state without a message.</p> </li> <li> <p> <b>Timeout message</b> - If you don\'t configure a timeout message and a timeout, and the Lambda function doesn\'t return within 30 seconds, the timeout message is returned. If you configure a timeout, the timeout message is returned when the period times out. </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete.html">Completion message</a>.</p>',
    operationId: 'RecognizeUtterance',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'x-amz-lex-session-state': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'x-amz-lex-session-state',
              in: 'header',
              required: false,
              description:
                '<p>Sets the state of the session with the user. You can use this to set the current intent, attributes, context, and dialog action. Use the dialog action to determine the next step that Amazon Lex V2 should use in the conversation with the user.</p> <p>The <code>sessionState</code> field must be compressed using gzip and then base64 encoded before sending to Amazon Lex V2.</p>',
              schema: { type: 'string', format: 'password' },
            },
          }),
        'x-amz-lex-request-attributes': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'x-amz-lex-request-attributes',
              in: 'header',
              required: false,
              description:
                "<p>Request-specific information passed between the client application and Amazon Lex V2 </p> <p>The namespace <code>x-amz-lex:</code> is reserved for special attributes. Don't create any request attributes for prefix <code>x-amz-lex:</code>.</p> <p>The <code>requestAttributes</code> field must be compressed using gzip and then base64 encoded before sending to Amazon Lex V2.</p>",
              schema: { type: 'string', format: 'password' },
            },
          }),
        'Content-Type': z
          .string()
          .min(1)
          .openapi({
            param: {
              name: 'Content-Type',
              in: 'header',
              required: true,
              description:
                '<p>Indicates the format for audio input or that the content is text. The header must start with one of the following prefixes:</p> <ul> <li> <p>PCM format, audio data must be in little-endian byte order.</p> <ul> <li> <p>audio/l16; rate=16000; channels=1</p> </li> <li> <p>audio/x-l16; sample-rate=16000; channel-count=1</p> </li> <li> <p>audio/lpcm; sample-rate=8000; sample-size-bits=16; channel-count=1; is-big-endian=false</p> </li> </ul> </li> <li> <p>Opus format</p> <ul> <li> <p>audio/x-cbr-opus-with-preamble;preamble-size=0;bit-rate=256000;frame-size-milliseconds=4</p> </li> </ul> </li> <li> <p>Text format</p> <ul> <li> <p>text/plain; charset=utf-8</p> </li> </ul> </li> </ul>',
              schema: { type: 'string', minLength: 1 },
            },
          }),
        'Response-Content-Type': z
          .string()
          .min(1)
          .exactOptional()
          .openapi({
            param: {
              name: 'Response-Content-Type',
              in: 'header',
              required: false,
              description:
                '<p>The message that Amazon Lex V2 returns in the response can be either text or speech based on the <code>responseContentType</code> value.</p> <ul> <li> <p>If the value is <code>text/plain;charset=utf-8</code>, Amazon Lex V2 returns text in the response.</p> </li> <li> <p>If the value begins with <code>audio/</code>, Amazon Lex V2 returns speech in the response. Amazon Lex V2 uses Amazon Polly to generate the speech using the configuration that you specified in the <code>responseContentType</code> parameter. For example, if you specify <code>audio/mpeg</code> as the value, Amazon Lex V2 returns speech in the MPEG format.</p> </li> <li> <p>If the value is <code>audio/pcm</code>, the speech returned is <code>audio/pcm</code> at 16 KHz in 16-bit, little-endian format.</p> </li> <li> <p>The following are the accepted values:</p> <ul> <li> <p>audio/mpeg</p> </li> <li> <p>audio/ogg</p> </li> <li> <p>audio/pcm (16 KHz)</p> </li> <li> <p>audio/* (defaults to mpeg)</p> </li> <li> <p>text/plain; charset=utf-8</p> </li> </ul> </li> </ul>',
              schema: { type: 'string', minLength: 1 },
            },
          }),
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
              description: 'The identifier of the bot that should receive the request.',
              schema: { type: 'string', pattern: '^[0-9a-zA-Z]+$', minLength: 10, maxLength: 10 },
            },
          }),
        botAliasId: z
          .string()
          .openapi({
            param: {
              name: 'botAliasId',
              in: 'path',
              required: true,
              description:
                'The alias identifier in use for the bot that should receive the request.',
              schema: { type: 'string' },
            },
          }),
        localeId: z
          .string()
          .min(1)
          .openapi({
            param: {
              name: 'localeId',
              in: 'path',
              required: true,
              description: 'The locale where the session is in use.',
              schema: { type: 'string', minLength: 1 },
            },
          }),
        sessionId: z
          .string()
          .regex(/[0-9a-zA-Z._:-]+/)
          .min(2)
          .max(100)
          .openapi({
            param: {
              name: 'sessionId',
              in: 'path',
              required: true,
              description: 'The identifier of the session in use.',
              schema: { type: 'string', pattern: '[0-9a-zA-Z._:-]+', minLength: 2, maxLength: 100 },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                inputStream: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'User input in PCM or Opus audio format or text format as described in the <code>requestContentType</code> parameter.',
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
        content: { 'application/json': { schema: RecognizeUtteranceResponseSchema } },
      },
      480: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      483: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      484: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
      485: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      486: {
        description: 'DependencyFailedException',
        content: { 'application/json': { schema: DependencyFailedExceptionSchema } },
      },
      487: {
        description: 'BadGatewayException',
        content: { 'application/json': { schema: BadGatewayExceptionSchema } },
      },
    },
  })
