import { createRoute, z } from '@hono/zod-openapi'

const BotNameSchema = z.string().openapi('BotName')

const BotAliasSchema = z.string().openapi('BotAlias')

const UserIdSchema = z
  .string()
  .regex(/[0-9a-zA-Z._:-]+/)
  .min(2)
  .max(100)
  .openapi('UserId')

const StringSchema = z.string().openapi('String')

const DeleteSessionResponseSchema = z
  .object({
    botName: BotNameSchema.and(
      z.any().openapi({ description: 'The name of the bot associated with the session data.' }),
    ).exactOptional(),
    botAlias: BotAliasSchema.and(
      z
        .any()
        .openapi({ description: 'The alias in use for the bot associated with the session data.' }),
    ).exactOptional(),
    userId: UserIdSchema.and(
      z.any().openapi({ description: 'The ID of the client application user.' }),
    ).exactOptional(),
    sessionId: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the session.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteSessionResponse')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const BadRequestExceptionSchema = z.any().openapi('BadRequestException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const InternalFailureExceptionSchema = z.any().openapi('InternalFailureException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const IntentNameSchema = z.string().openapi('IntentName')

const IntentSummaryCheckpointLabelSchema = z
  .string()
  .regex(/[a-zA-Z0-9-]+/)
  .min(1)
  .max(255)
  .openapi('IntentSummaryCheckpointLabel')

const StringMapSchema = z.record(z.string(), StringSchema).openapi('StringMap')

const ConfirmationStatusSchema = z
  .enum(['None', 'Confirmed', 'Denied'])
  .openapi('ConfirmationStatus')

const DialogActionTypeSchema = z
  .enum(['ElicitIntent', 'ConfirmIntent', 'ElicitSlot', 'Close', 'Delegate'])
  .openapi('DialogActionType')

const FulfillmentStateSchema = z
  .enum(['Fulfilled', 'Failed', 'ReadyForFulfillment'])
  .openapi('FulfillmentState')

const IntentSummarySchema = z
  .object({
    intentName: IntentNameSchema.and(
      z.any().openapi({ description: 'The name of the intent.' }),
    ).exactOptional(),
    checkpointLabel: IntentSummaryCheckpointLabelSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A user-defined label that identifies a particular intent. You can use this label to return to a previous intent. </p> <p>Use the <code>checkpointLabelFilter</code> parameter of the <code>GetSessionRequest</code> operation to filter the intents returned by the operation to those with only the specified label.</p>',
        }),
    ).exactOptional(),
    slots: StringMapSchema.and(
      z
        .any()
        .openapi({ description: 'Map of the slots that have been gathered and their values. ' }),
    ).exactOptional(),
    confirmationStatus: ConfirmationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the intent after the user responds to the confirmation prompt. If the user confirms the intent, Amazon Lex sets this field to <code>Confirmed</code>. If the user denies the intent, Amazon Lex sets this value to <code>Denied</code>. The possible values are:</p> <ul> <li> <p> <code>Confirmed</code> - The user has responded "Yes" to the confirmation prompt, confirming that the intent is complete and that it is ready to be fulfilled.</p> </li> <li> <p> <code>Denied</code> - The user has responded "No" to the confirmation prompt.</p> </li> <li> <p> <code>None</code> - The user has never been prompted for confirmation; or, the user was prompted but did not confirm or deny the prompt.</p> </li> </ul>',
        }),
    ).exactOptional(),
    dialogActionType: DialogActionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The next action that the bot should take in its interaction with the user. The possible values are:</p> <ul> <li> <p> <code>ConfirmIntent</code> - The next action is asking the user if the intent is complete and ready to be fulfilled. This is a yes/no question such as "Place the order?"</p> </li> <li> <p> <code>Close</code> - Indicates that the there will not be a response from the user. For example, the statement "Your order has been placed" does not require a response.</p> </li> <li> <p> <code>ElicitIntent</code> - The next action is to determine the intent that the user wants to fulfill.</p> </li> <li> <p> <code>ElicitSlot</code> - The next action is to elicit a slot value from the user.</p> </li> </ul>',
        }),
    ),
    fulfillmentState: FulfillmentStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The fulfillment state of the intent. The possible values are:</p> <ul> <li> <p> <code>Failed</code> - The Lambda function associated with the intent failed to fulfill the intent.</p> </li> <li> <p> <code>Fulfilled</code> - The intent has fulfilled by the Lambda function associated with the intent. </p> </li> <li> <p> <code>ReadyForFulfillment</code> - All of the information necessary for the intent is present and the intent ready to be fulfilled by the client application.</p> </li> </ul>',
        }),
    ).exactOptional(),
    slotToElicit: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The next slot to elicit from the user. If there is not slot to elicit, the field is blank.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['dialogActionType'],
    description:
      'Provides information about the state of an intent. You can use this information to get the current state of an intent so that you can process the intent, or so that you can return the intent to its previous state.',
  })
  .openapi('IntentSummary')

const IntentSummaryListSchema = z
  .array(IntentSummarySchema)
  .min(0)
  .max(3)
  .openapi('IntentSummaryList')

const TextSchema = z.string().min(1).max(1024).openapi('Text')

const MessageFormatTypeSchema = z
  .enum(['PlainText', 'CustomPayload', 'SSML', 'Composite'])
  .openapi('MessageFormatType')

const DialogActionSchema = z
  .object({
    type: DialogActionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The next action that the bot should take in its interaction with the user. The possible values are:</p> <ul> <li> <p> <code>ConfirmIntent</code> - The next action is asking the user if the intent is complete and ready to be fulfilled. This is a yes/no question such as "Place the order?"</p> </li> <li> <p> <code>Close</code> - Indicates that the there will not be a response from the user. For example, the statement "Your order has been placed" does not require a response.</p> </li> <li> <p> <code>Delegate</code> - The next action is determined by Amazon Lex.</p> </li> <li> <p> <code>ElicitIntent</code> - The next action is to determine the intent that the user wants to fulfill.</p> </li> <li> <p> <code>ElicitSlot</code> - The next action is to elicit a slot value from the user.</p> </li> </ul>',
        }),
    ),
    intentName: IntentNameSchema.and(
      z.any().openapi({ description: 'The name of the intent.' }),
    ).exactOptional(),
    slots: StringMapSchema.and(
      z
        .any()
        .openapi({ description: 'Map of the slots that have been gathered and their values. ' }),
    ).exactOptional(),
    slotToElicit: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the slot that should be elicited from the user.' }),
    ).exactOptional(),
    fulfillmentState: FulfillmentStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The fulfillment state of the intent. The possible values are:</p> <ul> <li> <p> <code>Failed</code> - The Lambda function associated with the intent failed to fulfill the intent.</p> </li> <li> <p> <code>Fulfilled</code> - The intent has fulfilled by the Lambda function associated with the intent. </p> </li> <li> <p> <code>ReadyForFulfillment</code> - All of the information necessary for the intent is present and the intent ready to be fulfilled by the client application.</p> </li> </ul>',
        }),
    ).exactOptional(),
    message: TextSchema.and(
      z
        .any()
        .openapi({
          description:
            "The message that should be shown to the user. If you don't specify a message, Amazon Lex will use the message configured for the intent.",
        }),
    ).exactOptional(),
    messageFormat: MessageFormatTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<ul> <li> <p> <code>PlainText</code> - The message contains plain UTF-8 text.</p> </li> <li> <p> <code>CustomPayload</code> - The message is a custom format for the client.</p> </li> <li> <p> <code>SSML</code> - The message contains text formatted for voice output.</p> </li> <li> <p> <code>Composite</code> - The message contains an escaped JSON object containing one or more messages. For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/howitworks-manage-prompts.html">Message Groups</a>. </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['type'],
    description:
      'Describes the next action that the bot should take in its interaction with the user and provides information about the context in which the action takes place. Use the <code>DialogAction</code> data type to set the interaction to a specific state, or to return the interaction to a previous state.',
  })
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
            'The number of seconds that the context should be active after it is first sent in a <code>PostContent</code> or <code>PostText</code> response. You can set the value between 5 and 86,400 seconds (24 hours).',
        }),
    ).exactOptional(),
    turnsToLive: ActiveContextTurnsToLiveSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of conversation turns that the context should be active. A conversation turn is one <code>PostContent</code> or <code>PostText</code> request and the corresponding response from Amazon Lex.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The length of time or number of turns that a context remains active.',
    required: [],
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
          description: 'The length of time or number of turns that a context remains active.',
        }),
    ),
    parameters: ActiveContextParametersMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'State variables for the current context. You can use these values as default values for slots in subsequent events.',
        }),
    ),
  })
  .openapi({
    required: ['name', 'timeToLive', 'parameters'],
    description:
      'A context is a variable that contains information about the current state of the conversation between a user and Amazon Lex. Context can be set automatically by Amazon Lex when an intent is fulfilled, or it can be set at runtime using the <code>PutContent</code>, <code>PutText</code>, or <code>PutSession</code> operation.',
  })
  .openapi('ActiveContext')

const ActiveContextsListSchema = z
  .array(ActiveContextSchema)
  .min(0)
  .max(20)
  .openapi('ActiveContextsList')

const GetSessionResponseSchema = z
  .object({
    recentIntentSummaryView: IntentSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of information about the intents used in the session. The array can contain a maximum of three summaries. If more than three intents are used in the session, the <code>recentIntentSummaryView</code> operation contains information about the last three intents used.</p> <p>If you set the <code>checkpointLabelFilter</code> parameter in the request, the array contains only the intents with the specified label.</p>',
        }),
    ).exactOptional(),
    sessionAttributes: StringMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Map of key/value pairs representing the session-specific context information. It contains application information passed between Amazon Lex and a client application.',
        }),
    ).exactOptional(),
    sessionId: StringSchema.and(
      z.any().openapi({ description: 'A unique identifier for the session.' }),
    ).exactOptional(),
    dialogAction: DialogActionSchema.and(
      z.any().openapi({ description: 'Describes the current state of the bot.' }),
    ).exactOptional(),
    activeContexts: ActiveContextsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of active contexts for the session. A context can be set when an intent is fulfilled or by calling the <code>PostContent</code>, <code>PostText</code>, or <code>PutSession</code> operation.</p> <p>You can use a context to control the intents that can follow up an intent, or to modify the operation of your application.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetSessionResponse')

const BlobStreamSchema = z.string().openapi('BlobStream')

const PostContentResponseSchema = z
  .object({
    audioStream: BlobStreamSchema.and(
      z
        .any()
        .openapi({
          description:
            'The prompt (or statement) to convey to the user. This is based on the bot configuration and context. For example, if Amazon Lex did not understand the user intent, it sends the <code>clarificationPrompt</code> configured for the bot. If the intent requires confirmation before taking the fulfillment action, it sends the <code>confirmationPrompt</code>. Another example: Suppose that the Lambda function successfully fulfilled the intent, and sent a message to convey to the user. Then Amazon Lex sends that message in the response. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PostContentResponse')

const UnsupportedMediaTypeExceptionSchema = z.any().openapi('UnsupportedMediaTypeException')

const NotAcceptableExceptionSchema = z.any().openapi('NotAcceptableException')

const RequestTimeoutExceptionSchema = z.any().openapi('RequestTimeoutException')

const DependencyFailedExceptionSchema = z.any().openapi('DependencyFailedException')

const BadGatewayExceptionSchema = z.any().openapi('BadGatewayException')

const LoopDetectedExceptionSchema = z.any().openapi('LoopDetectedException')

const DoubleSchema = z.float64().openapi('Double')

const IntentConfidenceSchema = z
  .object({
    score: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            "A score that indicates how confident Amazon Lex is that an intent satisfies the user's intent. Ranges between 0.00 and 1.00. Higher scores indicate higher confidence.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Provides a score that indicates the confidence that Amazon Lex has that an intent is the one that satisfies the user's intent.",
    required: [],
  })
  .openapi('IntentConfidence')

const PredictedIntentSchema = z
  .object({
    intentName: IntentNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the intent that Amazon Lex suggests satisfies the user's intent.",
        }),
    ).exactOptional(),
    nluIntentConfidence: IntentConfidenceSchema.and(
      z
        .any()
        .openapi({
          description:
            "Indicates how confident Amazon Lex is that an intent satisfies the user's intent.",
        }),
    ).exactOptional(),
    slots: StringMapSchema.and(
      z
        .any()
        .openapi({ description: 'The slot and slot values associated with the predicted intent.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "An intent that Amazon Lex suggests satisfies the user's intent. Includes the name of the intent, the confidence that Amazon Lex has that the user's intent is satisfied, and the slots defined for the intent.",
    required: [],
  })
  .openapi('PredictedIntent')

const IntentListSchema = z.array(PredictedIntentSchema).max(4).openapi('IntentList')

const SentimentLabelSchema = z.string().openapi('SentimentLabel')

const SentimentScoreSchema = z.string().openapi('SentimentScore')

const SentimentResponseSchema = z
  .object({
    sentimentLabel: SentimentLabelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The inferred sentiment that Amazon Comprehend has the highest confidence in.',
        }),
    ).exactOptional(),
    sentimentScore: SentimentScoreSchema.and(
      z.any().openapi({ description: 'The likelihood that the sentiment was correctly inferred.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The sentiment expressed in an utterance.</p> <p>When the bot is configured to send utterances to Amazon Comprehend for sentiment analysis, this field structure contains the result of the analysis.</p>',
    required: [],
  })
  .openapi('SentimentResponse')

const DialogStateSchema = z
  .enum([
    'ElicitIntent',
    'ConfirmIntent',
    'ElicitSlot',
    'Fulfilled',
    'ReadyForFulfillment',
    'Failed',
  ])
  .openapi('DialogState')

const ContentTypeSchema = z.literal('application/vnd.amazonaws.card.generic').openapi('ContentType')

const StringWithLengthSchema = z.string().min(1).max(80).openapi('StringWithLength')

const StringUrlWithLengthSchema = z.string().min(1).max(2048).openapi('StringUrlWithLength')

const ButtonTextStringWithLengthSchema = z
  .string()
  .min(1)
  .max(15)
  .openapi('ButtonTextStringWithLength')

const ButtonValueStringWithLengthSchema = z
  .string()
  .min(1)
  .max(1000)
  .openapi('ButtonValueStringWithLength')

const ButtonSchema = z
  .object({
    text: ButtonTextStringWithLengthSchema.and(
      z.any().openapi({ description: 'Text that is visible to the user on the button.' }),
    ),
    value: ButtonValueStringWithLengthSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value sent to Amazon Lex when a user chooses the button. For example, consider button text "NYC." When the user chooses the button, the value sent can be "New York City."',
        }),
    ),
  })
  .openapi({
    required: ['text', 'value'],
    description: 'Represents an option to be shown on the client platform (Facebook, Slack, etc.)',
  })
  .openapi('Button')

const ListOfButtonsSchema = z.array(ButtonSchema).min(0).max(5).openapi('ListOfButtons')

const GenericAttachmentSchema = z
  .object({
    title: StringWithLengthSchema.and(
      z.any().openapi({ description: 'The title of the option.' }),
    ).exactOptional(),
    subTitle: StringWithLengthSchema.and(
      z.any().openapi({ description: 'The subtitle shown below the title.' }),
    ).exactOptional(),
    attachmentLinkUrl: StringUrlWithLengthSchema.and(
      z.any().openapi({ description: 'The URL of an attachment to the response card.' }),
    ).exactOptional(),
    imageUrl: StringUrlWithLengthSchema.and(
      z.any().openapi({ description: 'The URL of an image that is displayed to the user.' }),
    ).exactOptional(),
    buttons: ListOfButtonsSchema.and(
      z.any().openapi({ description: 'The list of options to show to the user.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents an option rendered to the user when a prompt is shown. It could be an image, a button, a link, or text. ',
    required: [],
  })
  .openapi('GenericAttachment')

const GenericAttachmentListSchema = z
  .array(GenericAttachmentSchema)
  .min(0)
  .max(10)
  .openapi('GenericAttachmentList')

const ResponseCardSchema = z
  .object({
    version: StringSchema.and(
      z.any().openapi({ description: 'The version of the response card format.' }),
    ).exactOptional(),
    contentType: ContentTypeSchema.and(
      z.any().openapi({ description: 'The content type of the response.' }),
    ).exactOptional(),
    genericAttachments: GenericAttachmentListSchema.and(
      z.any().openapi({ description: 'An array of attachment objects representing options.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'If you configure a response card when creating your bots, Amazon Lex substitutes the session attributes and slot values that are available, and then returns it. The response card can also come from a Lambda function ( <code>dialogCodeHook</code> and <code>fulfillmentActivity</code> on an intent).',
    required: [],
  })
  .openapi('ResponseCard')

const BotVersionSchema = z
  .string()
  .regex(/[0-9]+|\$LATEST/)
  .min(1)
  .max(64)
  .openapi('BotVersion')

const PostTextResponseSchema = z
  .object({
    intentName: IntentNameSchema.and(
      z.any().openapi({ description: 'The current user intent that Amazon Lex is aware of.' }),
    ).exactOptional(),
    nluIntentConfidence: IntentConfidenceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Provides a score that indicates how confident Amazon Lex is that the returned intent is the one that matches the user\'s intent. The score is between 0.0 and 1.0. For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/confidence-scores.html">Confidence Scores</a>.</p> <p>The score is a relative score, not an absolute score. The score may change based on improvements to Amazon Lex.</p>',
        }),
    ).exactOptional(),
    alternativeIntents: IntentListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>One to four alternative intents that may be applicable to the user's intent.</p> <p>Each alternative includes a score that indicates how confident Amazon Lex is that the intent matches the user's intent. The intents are sorted by the confidence score.</p>",
        }),
    ).exactOptional(),
    slots: StringMapSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> The intent slots that Amazon Lex detected from the user input in the conversation. </p> <p>Amazon Lex creates a resolution list containing likely values for a slot. The value that it returns is determined by the <code>valueSelectionStrategy</code> selected when the slot type was created or updated. If <code>valueSelectionStrategy</code> is set to <code>ORIGINAL_VALUE</code>, the value provided by the user is returned, if the user value is similar to the slot values. If <code>valueSelectionStrategy</code> is set to <code>TOP_RESOLUTION</code> Amazon Lex returns the first value in the resolution list or, if there is no resolution list, null. If you don't specify a <code>valueSelectionStrategy</code>, the default is <code>ORIGINAL_VALUE</code>.</p>",
        }),
    ).exactOptional(),
    sessionAttributes: StringMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map of key-value pairs representing the session-specific context information.',
        }),
    ).exactOptional(),
    message: TextSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The message to convey to the user. The message can come from the bot's configuration or from a Lambda function.</p> <p>If the intent is not configured with a Lambda function, or if the Lambda function returned <code>Delegate</code> as the <code>dialogAction.type</code> its response, Amazon Lex decides on the next course of action and selects an appropriate message from the bot's configuration based on the current interaction context. For example, if Amazon Lex isn't able to understand user input, it uses a clarification prompt message.</p> <p>When you create an intent you can assign messages to groups. When messages are assigned to groups Amazon Lex returns one message from each group in the response. The message field is an escaped JSON string containing the messages. For more information about the structure of the JSON string returned, see <a>msg-prompts-formats</a>.</p> <p>If the Lambda function returns a message, Amazon Lex passes it to the client in its response.</p>",
        }),
    ).exactOptional(),
    sentimentResponse: SentimentResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The sentiment expressed in and utterance.</p> <p>When the bot is configured to send utterances to Amazon Comprehend for sentiment analysis, this field contains the result of the analysis.</p>',
        }),
    ).exactOptional(),
    messageFormat: MessageFormatTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The format of the response message. One of the following values:</p> <ul> <li> <p> <code>PlainText</code> - The message contains plain UTF-8 text.</p> </li> <li> <p> <code>CustomPayload</code> - The message is a custom format defined by the Lambda function.</p> </li> <li> <p> <code>SSML</code> - The message contains text formatted for voice output.</p> </li> <li> <p> <code>Composite</code> - The message contains an escaped JSON object containing one or more messages from the groups that messages were assigned to when the intent was created.</p> </li> </ul>',
        }),
    ).exactOptional(),
    dialogState: DialogStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Identifies the current state of the user interaction. Amazon Lex returns one of the following values as <code>dialogState</code>. The client can optionally use this information to customize the user interface. </p> <ul> <li> <p> <code>ElicitIntent</code> - Amazon Lex wants to elicit user intent. </p> <p>For example, a user might utter an intent ("I want to order a pizza"). If Amazon Lex cannot infer the user intent from this utterance, it will return this dialogState.</p> </li> <li> <p> <code>ConfirmIntent</code> - Amazon Lex is expecting a "yes" or "no" response. </p> <p> For example, Amazon Lex wants user confirmation before fulfilling an intent. </p> <p>Instead of a simple "yes" or "no," a user might respond with additional information. For example, "yes, but make it thick crust pizza" or "no, I want to order a drink". Amazon Lex can process such additional information (in these examples, update the crust type slot value, or change intent from OrderPizza to OrderDrink).</p> </li> <li> <p> <code>ElicitSlot</code> - Amazon Lex is expecting a slot value for the current intent. </p> <p>For example, suppose that in the response Amazon Lex sends this message: "What size pizza would you like?". A user might reply with the slot value (e.g., "medium"). The user might also provide additional information in the response (e.g., "medium thick crust pizza"). Amazon Lex can process such additional information appropriately. </p> </li> <li> <p> <code>Fulfilled</code> - Conveys that the Lambda function configured for the intent has successfully fulfilled the intent. </p> </li> <li> <p> <code>ReadyForFulfillment</code> - Conveys that the client has to fulfill the intent. </p> </li> <li> <p> <code>Failed</code> - Conveys that the conversation with the user failed. </p> <p> This can happen for various reasons including that the user did not provide an appropriate response to prompts from the service (you can configure how many times Amazon Lex can prompt a user for specific information), or the Lambda function failed to fulfill the intent. </p> </li> </ul>',
        }),
    ).exactOptional(),
    slotToElicit: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the <code>dialogState</code> value is <code>ElicitSlot</code>, returns the name of the slot for which Amazon Lex is eliciting a value. ',
        }),
    ).exactOptional(),
    responseCard: ResponseCardSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the options that the user has to respond to the current prompt. Response Card can come from the bot configuration (in the Amazon Lex console, choose the settings button next to a slot) or from a code hook (Lambda function). ',
        }),
    ).exactOptional(),
    sessionId: StringSchema.and(
      z.any().openapi({ description: 'A unique identifier for the session.' }),
    ).exactOptional(),
    botVersion: BotVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the bot that responded to the conversation. You can use this information to help determine if one version of a bot is performing better than another version.',
        }),
    ).exactOptional(),
    activeContexts: ActiveContextsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of active contexts for the session. A context can be set when an intent is fulfilled or by calling the <code>PostContent</code>, <code>PostText</code>, or <code>PutSession</code> operation.</p> <p>You can use a context to control the intents that can follow up an intent, or to modify the operation of your application.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PostTextResponse')

const PutSessionResponseSchema = z
  .object({
    audioStream: BlobStreamSchema.and(
      z.any().openapi({ description: 'The audio version of the message to convey to the user.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutSessionResponse')

const AcceptSchema = z.string().openapi('Accept')

const ActiveContextsStringSchema = z.string().openapi('ActiveContextsString')

const AttributesStringSchema = z.string().openapi('AttributesString')

const DeleteSessionRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteSessionRequest' })
  .openapi('DeleteSessionRequest')

const GetSessionRequestSchema = z
  .object({})
  .openapi({ title: 'GetSessionRequest' })
  .openapi('GetSessionRequest')

const HttpContentTypeSchema = z.string().openapi('HttpContentType')

const ParameterNameSchema = z.string().min(1).max(100).openapi('ParameterName')

const PostContentRequestSchema = z
  .object({
    inputStream: BlobStreamSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> User input in PCM or Opus audio format or text format as described in the <code>Content-Type</code> HTTP header. </p> <p>You can stream audio data to Amazon Lex or you can create a local buffer that captures all of the audio data before sending. In general, you get better performance if you stream audio data rather than buffering the data locally.</p>',
        }),
    ),
  })
  .openapi({ required: ['inputStream'], title: 'PostContentRequest' })
  .openapi('PostContentRequest')

const SensitiveStringSchema = z.string().min(1).max(1366).openapi('SensitiveString')

const SensitiveStringUnboundedSchema = z.string().openapi('SensitiveStringUnbounded')

const PostTextRequestSchema = z
  .object({
    sessionAttributes: StringMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Application-specific information passed between Amazon Lex and a client application.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html#context-mgmt-session-attribs">Setting Session Attributes</a>.</p>',
        }),
    ).exactOptional(),
    requestAttributes: StringMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Request-specific information passed between Amazon Lex and a client application.</p> <p>The namespace <code>x-amz-lex:</code> is reserved for special attributes. Don\'t create any request attributes with the prefix <code>x-amz-lex:</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html#context-mgmt-request-attribs">Setting Request Attributes</a>.</p>',
        }),
    ).exactOptional(),
    inputText: TextSchema.and(
      z
        .any()
        .openapi({
          description: 'The text that the user entered (Amazon Lex interprets this text).',
        }),
    ),
    activeContexts: ActiveContextsListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of contexts active for the request. A context can be activated when a previous intent is fulfilled, or by including the context in the request,</p> <p>If you don't specify a list of contexts, Amazon Lex will use the current list of contexts for the session. If you specify an empty list, all contexts for the session are cleared.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['inputText'], title: 'PostTextRequest' })
  .openapi('PostTextRequest')

const PutSessionRequestSchema = z
  .object({
    sessionAttributes: StringMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Map of key/value pairs representing the session-specific context information. It contains application information passed between Amazon Lex and a client application.',
        }),
    ).exactOptional(),
    dialogAction: DialogActionSchema.and(
      z
        .any()
        .openapi({
          description: 'Sets the next action that the bot should take to fulfill the conversation.',
        }),
    ).exactOptional(),
    recentIntentSummaryView: IntentSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A summary of the recent intents for the bot. You can use the intent summary view to set a checkpoint label on an intent and modify attributes of intents. You can also use it to remove or add intent summary objects to the list.</p> <p>An intent that you modify or add to the list must make sense for the bot. For example, the intent name must be valid for the bot. You must provide valid values for:</p> <ul> <li> <p> <code>intentName</code> </p> </li> <li> <p>slot names</p> </li> <li> <p> <code>slotToElict</code> </p> </li> </ul> <p>If you send the <code>recentIntentSummaryView</code> parameter in a <code>PutSession</code> request, the contents of the new summary view replaces the old summary view. For example, if a <code>GetSession</code> request returns three intents in the summary view and you call <code>PutSession</code> with one intent in the summary view, the next call to <code>GetSession</code> will only return one intent.</p>',
        }),
    ).exactOptional(),
    activeContexts: ActiveContextsListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of contexts active for the request. A context can be activated when a previous intent is fulfilled, or by including the context in the request,</p> <p>If you don't specify a list of contexts, Amazon Lex will use the current list of contexts for the session. If you specify an empty list, all contexts for the session are cleared.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'PutSessionRequest', required: [] })
  .openapi('PutSessionRequest')

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

export const postBotBotNameAliasBotAliasUserUserIdSessionRoute = createRoute({
  method: 'post',
  path: '/bot/{botName}/alias/{botAlias}/user/{userId}/session',
  description:
    '<p>Creates a new session or modifies an existing session with an Amazon Lex bot. Use this operation to enable your application to set the state of the bot.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/how-session-api.html">Managing Sessions</a>.</p>',
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
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Accept',
            in: 'header',
            required: false,
            description:
              '<p>The message that Amazon Lex returns in the response can be either text or speech based depending on the value of this field.</p> <ul> <li> <p>If the value is <code>text/plain; charset=utf-8</code>, Amazon Lex returns text in the response.</p> </li> <li> <p>If the value begins with <code>audio/</code>, Amazon Lex returns speech in the response. Amazon Lex uses Amazon Polly to generate the speech in the configuration that you specify. For example, if you specify <code>audio/mpeg</code> as the value, Amazon Lex returns speech in the MPEG format.</p> </li> <li> <p>If the value is <code>audio/pcm</code>, the speech is returned as <code>audio/pcm</code> in 16-bit, little endian format.</p> </li> <li> <p>The following are the accepted values:</p> <ul> <li> <p> <code>audio/mpeg</code> </p> </li> <li> <p> <code>audio/ogg</code> </p> </li> <li> <p> <code>audio/pcm</code> </p> </li> <li> <p> <code>audio/*</code> (defaults to mpeg)</p> </li> <li> <p> <code>text/plain; charset=utf-8</code> </p> </li> </ul> </li> </ul>',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      botName: z
        .string()
        .openapi({
          param: {
            name: 'botName',
            in: 'path',
            required: true,
            description: 'The name of the bot that contains the session data.',
            schema: { type: 'string' },
          },
        }),
      botAlias: z
        .string()
        .openapi({
          param: {
            name: 'botAlias',
            in: 'path',
            required: true,
            description: 'The alias in use for the bot that contains the session data.',
            schema: { type: 'string' },
          },
        }),
      userId: z
        .string()
        .regex(/[0-9a-zA-Z._:-]+/)
        .min(2)
        .max(100)
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            required: true,
            description:
              "The ID of the client application user. Amazon Lex uses this to identify a user's conversation with your bot. ",
            schema: { type: 'string', pattern: '[0-9a-zA-Z._:-]+', minLength: 2, maxLength: 100 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              sessionAttributes: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Map of key/value pairs representing the session-specific context information. It contains application information passed between Amazon Lex and a client application.',
                }),
              dialogAction: z
                .object({
                  type: DialogActionTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The next action that the bot should take in its interaction with the user. The possible values are:</p> <ul> <li> <p> <code>ConfirmIntent</code> - The next action is asking the user if the intent is complete and ready to be fulfilled. This is a yes/no question such as "Place the order?"</p> </li> <li> <p> <code>Close</code> - Indicates that the there will not be a response from the user. For example, the statement "Your order has been placed" does not require a response.</p> </li> <li> <p> <code>Delegate</code> - The next action is determined by Amazon Lex.</p> </li> <li> <p> <code>ElicitIntent</code> - The next action is to determine the intent that the user wants to fulfill.</p> </li> <li> <p> <code>ElicitSlot</code> - The next action is to elicit a slot value from the user.</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                  intentName: IntentNameSchema.and(
                    z.any().openapi({ description: 'The name of the intent.' }),
                  ).exactOptional(),
                  slots: StringMapSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Map of the slots that have been gathered and their values. ',
                      }),
                  ).exactOptional(),
                  slotToElicit: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The name of the slot that should be elicited from the user.',
                      }),
                  ).exactOptional(),
                  fulfillmentState: FulfillmentStateSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The fulfillment state of the intent. The possible values are:</p> <ul> <li> <p> <code>Failed</code> - The Lambda function associated with the intent failed to fulfill the intent.</p> </li> <li> <p> <code>Fulfilled</code> - The intent has fulfilled by the Lambda function associated with the intent. </p> </li> <li> <p> <code>ReadyForFulfillment</code> - All of the information necessary for the intent is present and the intent ready to be fulfilled by the client application.</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                  message: TextSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The message that should be shown to the user. If you don't specify a message, Amazon Lex will use the message configured for the intent.",
                      }),
                  ).exactOptional(),
                  messageFormat: MessageFormatTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<ul> <li> <p> <code>PlainText</code> - The message contains plain UTF-8 text.</p> </li> <li> <p> <code>CustomPayload</code> - The message is a custom format for the client.</p> </li> <li> <p> <code>SSML</code> - The message contains text formatted for voice output.</p> </li> <li> <p> <code>Composite</code> - The message contains an escaped JSON object containing one or more messages. For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/howitworks-manage-prompts.html">Message Groups</a>. </p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Describes the next action that the bot should take in its interaction with the user and provides information about the context in which the action takes place. Use the <code>DialogAction</code> data type to set the interaction to a specific state, or to return the interaction to a previous state.',
                  required: [],
                }),
              recentIntentSummaryView: z
                .array(IntentSummarySchema)
                .min(0)
                .max(3)
                .exactOptional()
                .openapi({
                  description:
                    '<p>A summary of the recent intents for the bot. You can use the intent summary view to set a checkpoint label on an intent and modify attributes of intents. You can also use it to remove or add intent summary objects to the list.</p> <p>An intent that you modify or add to the list must make sense for the bot. For example, the intent name must be valid for the bot. You must provide valid values for:</p> <ul> <li> <p> <code>intentName</code> </p> </li> <li> <p>slot names</p> </li> <li> <p> <code>slotToElict</code> </p> </li> </ul> <p>If you send the <code>recentIntentSummaryView</code> parameter in a <code>PutSession</code> request, the contents of the new summary view replaces the old summary view. For example, if a <code>GetSession</code> request returns three intents in the summary view and you call <code>PutSession</code> with one intent in the summary view, the next call to <code>GetSession</code> will only return one intent.</p>',
                }),
              activeContexts: z
                .array(ActiveContextSchema)
                .min(0)
                .max(20)
                .exactOptional()
                .openapi({
                  description:
                    "<p>A list of contexts active for the request. A context can be activated when a previous intent is fulfilled, or by including the context in the request,</p> <p>If you don't specify a list of contexts, Amazon Lex will use the current list of contexts for the session. If you specify an empty list, all contexts for the session are cleared.</p>",
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
      content: { 'application/json': { schema: PutSessionResponseSchema } },
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
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'NotAcceptableException',
      content: { 'application/json': { schema: NotAcceptableExceptionSchema } },
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

export const deleteBotBotNameAliasBotAliasUserUserIdSessionRoute = createRoute({
  method: 'delete',
  path: '/bot/{botName}/alias/{botAlias}/user/{userId}/session',
  description: 'Removes session information for a specified bot, alias, and user ID. ',
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
      botName: z
        .string()
        .openapi({
          param: {
            name: 'botName',
            in: 'path',
            required: true,
            description: 'The name of the bot that contains the session data.',
            schema: { type: 'string' },
          },
        }),
      botAlias: z
        .string()
        .openapi({
          param: {
            name: 'botAlias',
            in: 'path',
            required: true,
            description: 'The alias in use for the bot that contains the session data.',
            schema: { type: 'string' },
          },
        }),
      userId: z
        .string()
        .regex(/[0-9a-zA-Z._:-]+/)
        .min(2)
        .max(100)
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            required: true,
            description: 'The identifier of the user associated with the session data.',
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
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
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
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getBotBotNameAliasBotAliasUserUserIdSessionIndexRoute = createRoute({
  method: 'get',
  path: '/bot/{botName}/alias/{botAlias}/user/{userId}/session/',
  description: 'Returns session information for a specified bot, alias, and user ID.',
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
      botName: z
        .string()
        .openapi({
          param: {
            name: 'botName',
            in: 'path',
            required: true,
            description: 'The name of the bot that contains the session data.',
            schema: { type: 'string' },
          },
        }),
      botAlias: z
        .string()
        .openapi({
          param: {
            name: 'botAlias',
            in: 'path',
            required: true,
            description: 'The alias in use for the bot that contains the session data.',
            schema: { type: 'string' },
          },
        }),
      userId: z
        .string()
        .regex(/[0-9a-zA-Z._:-]+/)
        .min(2)
        .max(100)
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            required: true,
            description:
              "The ID of the client application user. Amazon Lex uses this to identify a user's conversation with your bot. ",
            schema: { type: 'string', pattern: '[0-9a-zA-Z._:-]+', minLength: 2, maxLength: 100 },
          },
        }),
    }),
    query: z.object({
      checkpointLabelFilter: z
        .string()
        .regex(/[a-zA-Z0-9-]+/)
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'checkpointLabelFilter',
            in: 'query',
            required: false,
            description:
              '<p>A string used to filter the intents returned in the <code>recentIntentSummaryView</code> structure. </p> <p>When you specify a filter, only intents with their <code>checkpointLabel</code> field set to that string are returned.</p>',
            schema: { type: 'string', pattern: '[a-zA-Z0-9-]+', minLength: 1, maxLength: 255 },
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
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
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
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
})

export const postBotBotNameAliasBotAliasUserUserIdContentContentTypeRoute = createRoute({
  method: 'post',
  path: '/bot/{botName}/alias/{botAlias}/user/{userId}/content#Content-Type',
  description:
    '<p> Sends user input (text or speech) to Amazon Lex. Clients use this API to send text and audio requests to Amazon Lex at runtime. Amazon Lex interprets the user input using the machine learning model that it built for the bot. </p> <p>The <code>PostContent</code> operation supports audio input at 8kHz and 16kHz. You can use 8kHz audio to achieve higher speech recognition accuracy in telephone audio applications. </p> <p> In response, Amazon Lex returns the next message to convey to the user. Consider the following example messages: </p> <ul> <li> <p> For a user input "I would like a pizza," Amazon Lex might return a response with a message eliciting slot data (for example, <code>PizzaSize</code>): "What size pizza would you like?". </p> </li> <li> <p> After the user provides all of the pizza order information, Amazon Lex might return a response with a message to get user confirmation: "Order the pizza?". </p> </li> <li> <p> After the user replies "Yes" to the confirmation prompt, Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.". </p> </li> </ul> <p> Not all Amazon Lex messages require a response from the user. For example, conclusion statements do not require a response. Some messages require only a yes or no response. In addition to the <code>message</code>, Amazon Lex provides additional context about the message in the response that you can use to enhance client behavior, such as displaying the appropriate client user interface. Consider the following examples: </p> <ul> <li> <p> If the message is to elicit slot data, Amazon Lex returns the following context information: </p> <ul> <li> <p> <code>x-amz-lex-dialog-state</code> header set to <code>ElicitSlot</code> </p> </li> <li> <p> <code>x-amz-lex-intent-name</code> header set to the intent name in the current context </p> </li> <li> <p> <code>x-amz-lex-slot-to-elicit</code> header set to the slot name for which the <code>message</code> is eliciting information </p> </li> <li> <p> <code>x-amz-lex-slots</code> header set to a map of slots configured for the intent with their current values </p> </li> </ul> </li> <li> <p> If the message is a confirmation prompt, the <code>x-amz-lex-dialog-state</code> header is set to <code>Confirmation</code> and the <code>x-amz-lex-slot-to-elicit</code> header is omitted. </p> </li> <li> <p> If the message is a clarification prompt configured for the intent, indicating that the user intent is not understood, the <code>x-amz-dialog-state</code> header is set to <code>ElicitIntent</code> and the <code>x-amz-slot-to-elicit</code> header is omitted. </p> </li> </ul> <p> In addition, Amazon Lex also returns your application-specific <code>sessionAttributes</code>. For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html">Managing Conversation Context</a>. </p>',
  operationId: 'PostContent',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-lex-session-attributes': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-lex-session-attributes',
            in: 'header',
            required: false,
            description:
              '<p>You pass this value as the <code>x-amz-lex-session-attributes</code> HTTP header.</p> <p>Application-specific information passed between Amazon Lex and a client application. The value must be a JSON serialized and base64 encoded map with string keys and values. The total size of the <code>sessionAttributes</code> and <code>requestAttributes</code> headers is limited to 12 KB.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html#context-mgmt-session-attribs">Setting Session Attributes</a>.</p>',
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
              '<p>You pass this value as the <code>x-amz-lex-request-attributes</code> HTTP header.</p> <p>Request-specific information passed between Amazon Lex and a client application. The value must be a JSON serialized and base64 encoded map with string keys and values. The total size of the <code>requestAttributes</code> and <code>sessionAttributes</code> headers is limited to 12 KB.</p> <p>The namespace <code>x-amz-lex:</code> is reserved for special attributes. Don\'t create any request attributes with the prefix <code>x-amz-lex:</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html#context-mgmt-request-attribs">Setting Request Attributes</a>.</p>',
            schema: { type: 'string', format: 'password' },
          },
        }),
      'Content-Type': z
        .string()
        .openapi({
          param: {
            name: 'Content-Type',
            in: 'header',
            required: true,
            description:
              '<p> You pass this value as the <code>Content-Type</code> HTTP header. </p> <p> Indicates the audio format or text. The header value must start with one of the following prefixes: </p> <ul> <li> <p>PCM format, audio data must be in little-endian byte order.</p> <ul> <li> <p>audio/l16; rate=16000; channels=1</p> </li> <li> <p>audio/x-l16; sample-rate=16000; channel-count=1</p> </li> <li> <p>audio/lpcm; sample-rate=8000; sample-size-bits=16; channel-count=1; is-big-endian=false </p> </li> </ul> </li> <li> <p>Opus format</p> <ul> <li> <p>audio/x-cbr-opus-with-preamble; preamble-size=0; bit-rate=256000; frame-size-milliseconds=4</p> </li> </ul> </li> <li> <p>Text format</p> <ul> <li> <p>text/plain; charset=utf-8</p> </li> </ul> </li> </ul>',
            schema: { type: 'string' },
          },
        }),
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Accept',
            in: 'header',
            required: false,
            description:
              '<p> You pass this value as the <code>Accept</code> HTTP header. </p> <p> The message Amazon Lex returns in the response can be either text or speech based on the <code>Accept</code> HTTP header value in the request. </p> <ul> <li> <p> If the value is <code>text/plain; charset=utf-8</code>, Amazon Lex returns text in the response. </p> </li> <li> <p> If the value begins with <code>audio/</code>, Amazon Lex returns speech in the response. Amazon Lex uses Amazon Polly to generate the speech (using the configuration you specified in the <code>Accept</code> header). For example, if you specify <code>audio/mpeg</code> as the value, Amazon Lex returns speech in the MPEG format.</p> </li> <li> <p>If the value is <code>audio/pcm</code>, the speech returned is <code>audio/pcm</code> in 16-bit, little endian format. </p> </li> <li> <p>The following are the accepted values:</p> <ul> <li> <p>audio/mpeg</p> </li> <li> <p>audio/ogg</p> </li> <li> <p>audio/pcm</p> </li> <li> <p>text/plain; charset=utf-8</p> </li> <li> <p>audio/* (defaults to mpeg)</p> </li> </ul> </li> </ul>',
            schema: { type: 'string' },
          },
        }),
      'x-amz-lex-active-contexts': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-lex-active-contexts',
            in: 'header',
            required: false,
            description:
              "<p>A list of contexts active for the request. A context can be activated when a previous intent is fulfilled, or by including the context in the request,</p> <p>If you don't specify a list of contexts, Amazon Lex will use the current list of contexts for the session. If you specify an empty list, all contexts for the session are cleared.</p>",
            schema: { type: 'string', format: 'password' },
          },
        }),
    }),
    params: z.object({
      botName: z
        .string()
        .openapi({
          param: {
            name: 'botName',
            in: 'path',
            required: true,
            description: 'Name of the Amazon Lex bot.',
            schema: { type: 'string' },
          },
        }),
      botAlias: z
        .string()
        .openapi({
          param: {
            name: 'botAlias',
            in: 'path',
            required: true,
            description: 'Alias of the Amazon Lex bot.',
            schema: { type: 'string' },
          },
        }),
      userId: z
        .string()
        .regex(/[0-9a-zA-Z._:-]+/)
        .min(2)
        .max(100)
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            required: true,
            description:
              "<p>The ID of the client application user. Amazon Lex uses this to identify a user's conversation with your bot. At runtime, each request must contain the <code>userID</code> field.</p> <p>To decide the user ID to use for your application, consider the following factors.</p> <ul> <li> <p>The <code>userID</code> field must not contain any personally identifiable information of the user, for example, name, personal identification numbers, or other end user personal information.</p> </li> <li> <p>If you want a user to start a conversation on one device and continue on another device, use a user-specific identifier.</p> </li> <li> <p>If you want the same user to be able to have two independent conversations on two different devices, choose a device-specific identifier.</p> </li> <li> <p>A user can't have two independent conversations with two different versions of the same bot. For example, a user can't have a conversation with the PROD and BETA versions of the same bot. If you anticipate that a user will need to have conversation with two different versions, for example, while testing, include the bot alias in the user ID to separate the two conversations.</p> </li> </ul>",
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
                .openapi({
                  description:
                    '<p> User input in PCM or Opus audio format or text format as described in the <code>Content-Type</code> HTTP header. </p> <p>You can stream audio data to Amazon Lex or you can create a local buffer that captures all of the audio data before sending. In general, you get better performance if you stream audio data rather than buffering the data locally.</p>',
                }),
            })
            .openapi({ required: ['inputStream'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PostContentResponseSchema } },
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
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'UnsupportedMediaTypeException',
      content: { 'application/json': { schema: UnsupportedMediaTypeExceptionSchema } },
    },
    486: {
      description: 'NotAcceptableException',
      content: { 'application/json': { schema: NotAcceptableExceptionSchema } },
    },
    487: {
      description: 'RequestTimeoutException',
      content: { 'application/json': { schema: RequestTimeoutExceptionSchema } },
    },
    488: {
      description: 'DependencyFailedException',
      content: { 'application/json': { schema: DependencyFailedExceptionSchema } },
    },
    489: {
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    490: {
      description: 'LoopDetectedException',
      content: { 'application/json': { schema: LoopDetectedExceptionSchema } },
    },
  },
})

export const postBotBotNameAliasBotAliasUserUserIdTextRoute = createRoute({
  method: 'post',
  path: '/bot/{botName}/alias/{botAlias}/user/{userId}/text',
  description:
    '<p>Sends user input to Amazon Lex. Client applications can use this API to send requests to Amazon Lex at runtime. Amazon Lex then interprets the user input using the machine learning model it built for the bot. </p> <p> In response, Amazon Lex returns the next <code>message</code> to convey to the user an optional <code>responseCard</code> to display. Consider the following example messages: </p> <ul> <li> <p> For a user input "I would like a pizza", Amazon Lex might return a response with a message eliciting slot data (for example, PizzaSize): "What size pizza would you like?" </p> </li> <li> <p> After the user provides all of the pizza order information, Amazon Lex might return a response with a message to obtain user confirmation "Proceed with the pizza order?". </p> </li> <li> <p> After the user replies to a confirmation prompt with a "yes", Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.". </p> </li> </ul> <p> Not all Amazon Lex messages require a user response. For example, a conclusion statement does not require a response. Some messages require only a "yes" or "no" user response. In addition to the <code>message</code>, Amazon Lex provides additional context about the message in the response that you might use to enhance client behavior, for example, to display the appropriate client user interface. These are the <code>slotToElicit</code>, <code>dialogState</code>, <code>intentName</code>, and <code>slots</code> fields in the response. Consider the following examples: </p> <ul> <li> <p>If the message is to elicit slot data, Amazon Lex returns the following context information:</p> <ul> <li> <p> <code>dialogState</code> set to ElicitSlot </p> </li> <li> <p> <code>intentName</code> set to the intent name in the current context </p> </li> <li> <p> <code>slotToElicit</code> set to the slot name for which the <code>message</code> is eliciting information </p> </li> <li> <p> <code>slots</code> set to a map of slots, configured for the intent, with currently known values </p> </li> </ul> </li> <li> <p> If the message is a confirmation prompt, the <code>dialogState</code> is set to ConfirmIntent and <code>SlotToElicit</code> is set to null. </p> </li> <li> <p>If the message is a clarification prompt (configured for the intent) that indicates that user intent is not understood, the <code>dialogState</code> is set to ElicitIntent and <code>slotToElicit</code> is set to null. </p> </li> </ul> <p> In addition, Amazon Lex also returns your application-specific <code>sessionAttributes</code>. For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html">Managing Conversation Context</a>. </p>',
  operationId: 'PostText',
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
        .openapi({
          param: {
            name: 'botName',
            in: 'path',
            required: true,
            description: 'The name of the Amazon Lex bot.',
            schema: { type: 'string' },
          },
        }),
      botAlias: z
        .string()
        .openapi({
          param: {
            name: 'botAlias',
            in: 'path',
            required: true,
            description: 'The alias of the Amazon Lex bot.',
            schema: { type: 'string' },
          },
        }),
      userId: z
        .string()
        .regex(/[0-9a-zA-Z._:-]+/)
        .min(2)
        .max(100)
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            required: true,
            description:
              "<p>The ID of the client application user. Amazon Lex uses this to identify a user's conversation with your bot. At runtime, each request must contain the <code>userID</code> field.</p> <p>To decide the user ID to use for your application, consider the following factors.</p> <ul> <li> <p>The <code>userID</code> field must not contain any personally identifiable information of the user, for example, name, personal identification numbers, or other end user personal information.</p> </li> <li> <p>If you want a user to start a conversation on one device and continue on another device, use a user-specific identifier.</p> </li> <li> <p>If you want the same user to be able to have two independent conversations on two different devices, choose a device-specific identifier.</p> </li> <li> <p>A user can't have two independent conversations with two different versions of the same bot. For example, a user can't have a conversation with the PROD and BETA versions of the same bot. If you anticipate that a user will need to have conversation with two different versions, for example, while testing, include the bot alias in the user ID to separate the two conversations.</p> </li> </ul>",
            schema: { type: 'string', pattern: '[0-9a-zA-Z._:-]+', minLength: 2, maxLength: 100 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              sessionAttributes: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Application-specific information passed between Amazon Lex and a client application.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html#context-mgmt-session-attribs">Setting Session Attributes</a>.</p>',
                }),
              requestAttributes: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Request-specific information passed between Amazon Lex and a client application.</p> <p>The namespace <code>x-amz-lex:</code> is reserved for special attributes. Don\'t create any request attributes with the prefix <code>x-amz-lex:</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html#context-mgmt-request-attribs">Setting Request Attributes</a>.</p>',
                }),
              inputText: z
                .string()
                .min(1)
                .max(1024)
                .openapi({
                  description: 'The text that the user entered (Amazon Lex interprets this text).',
                }),
              activeContexts: z
                .array(ActiveContextSchema)
                .min(0)
                .max(20)
                .exactOptional()
                .openapi({
                  description:
                    "<p>A list of contexts active for the request. A context can be activated when a previous intent is fulfilled, or by including the context in the request,</p> <p>If you don't specify a list of contexts, Amazon Lex will use the current list of contexts for the session. If you specify an empty list, all contexts for the session are cleared.</p>",
                }),
            })
            .openapi({ required: ['inputText'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PostTextResponseSchema } },
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
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'DependencyFailedException',
      content: { 'application/json': { schema: DependencyFailedExceptionSchema } },
    },
    486: {
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    487: {
      description: 'LoopDetectedException',
      content: { 'application/json': { schema: LoopDetectedExceptionSchema } },
    },
  },
})
