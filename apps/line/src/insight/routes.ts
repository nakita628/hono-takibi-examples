import { createRoute, z } from '@hono/zod-openapi'

const GenderTileSchema = z
  .object({
    gender: z
      .enum(['male', 'female', 'unknown'])
      .exactOptional()
      .openapi({ description: "users' gender" }),
    percentage: z.float64().exactOptional().openapi({ description: 'Percentage' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-demographic',
    },
    required: [],
  })
  .openapi('GenderTile')

const AgeTileSchema = z
  .object({
    age: z
      .enum([
        'from0to14',
        'from15to19',
        'from20to24',
        'from25to29',
        'from30to34',
        'from35to39',
        'from40to44',
        'from45to49',
        'from50',
        'from50to54',
        'from55to59',
        'from60to64',
        'from65to69',
        'from70',
        'unknown',
      ])
      .exactOptional()
      .openapi({ description: "users' age" }),
    percentage: z.float64().exactOptional().openapi({ description: 'Percentage' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-demographic',
    },
    required: [],
  })
  .openapi('AgeTile')

const AreaTileSchema = z
  .object({
    area: z.string().exactOptional().openapi({ description: "users' country and region" }),
    percentage: z.float64().exactOptional().openapi({ description: 'Percentage' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-demographic',
    },
    required: [],
  })
  .openapi('AreaTile')

const AppTypeTileSchema = z
  .object({
    appType: z
      .enum(['ios', 'android', 'others'])
      .exactOptional()
      .openapi({ description: "users' OS" }),
    percentage: z.float64().exactOptional().openapi({ description: 'Percentage' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-demographic',
    },
    required: [],
  })
  .openapi('AppTypeTile')

const SubscriptionPeriodTileSchema = z
  .object({
    subscriptionPeriod: z
      .enum([
        'within7days',
        'within30days',
        'within90days',
        'within180days',
        'within365days',
        'over365days',
        'unknown',
      ])
      .exactOptional()
      .openapi({
        description:
          'Subscription period. Possible values: `within7days`, `within90days`, `unknown` etc.',
      }),
    percentage: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Percentage. Possible values: [0.0,100.0] e.g. 0, 2.9, 37.6.' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-demographic',
    },
    required: [],
  })
  .openapi('SubscriptionPeriodTile')

const GetFriendsDemographicsResponseSchema = z
  .object({
    available: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'true if friend demographic information is available.' }),
    genders: z
      .array(GenderTileSchema)
      .exactOptional()
      .openapi({ description: 'Percentage per gender.' }),
    ages: z
      .array(AgeTileSchema)
      .exactOptional()
      .openapi({ description: 'Percentage per age group.' }),
    areas: z.array(AreaTileSchema).exactOptional().openapi({ description: 'Percentage per area.' }),
    appTypes: z
      .array(AppTypeTileSchema)
      .exactOptional()
      .openapi({ description: 'Percentage by OS.' }),
    subscriptionPeriods: z
      .array(SubscriptionPeriodTileSchema)
      .exactOptional()
      .openapi({ description: 'Percentage per friendship duration.' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-demographic',
    },
    description: 'Get friend demographics',
    required: [],
  })
  .openapi('GetFriendsDemographicsResponse')

const GetNumberOfMessageDeliveriesResponseSchema = z
  .object({
    status: z
      .enum(['ready', 'unready', 'out_of_service'])
      .exactOptional()
      .openapi({ description: 'Status of the counting process.' }),
    broadcast: z
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
          "Number of messages sent to all of this LINE Official Account's friends (broadcast messages).",
      }),
    targeting: z
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
          "Number of messages sent to some of this LINE Official Account's friends, based on specific attributes (targeted messages).",
      }),
    autoResponse: z
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
        description: 'Number of auto-response messages sent.',
      }),
    welcomeResponse: z
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
        description: 'Number of greeting messages sent.',
      }),
    chat: z
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
          'Number of messages sent from LINE Official Account Manager [Chat screen](https://www.linebiz.com/jp/manual/OfficialAccountManager/chats/) (only available in Japanese).',
      }),
    apiBroadcast: z
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
          'Number of broadcast messages sent with the `Send broadcast message` Messaging API operation.',
      }),
    apiPush: z
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
          'Number of push messages sent with the `Send push message` Messaging API operation.',
      }),
    apiMulticast: z
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
          'Number of multicast messages sent with the `Send multicast message` Messaging API operation.',
      }),
    apiNarrowcast: z
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
          'Number of narrowcast messages sent with the `Send narrowcast message` Messaging API operation.',
      }),
    apiReply: z
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
          'Number of replies sent with the `Send reply message` Messaging API operation.',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-number-of-delivery-messages',
    },
    description: 'Get number of message deliveries',
    required: [],
  })
  .openapi('GetNumberOfMessageDeliveriesResponse')

const GetNumberOfFollowersResponseSchema = z
  .object({
    status: z
      .enum(['ready', 'unready', 'out_of_service'])
      .exactOptional()
      .openapi({ description: 'Calculation status.' }),
    followers: z
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
          "The number of times, as of the specified date, that a user added this LINE Official Account as a friend for the first time.\nThe number doesn't decrease even if a user later blocks the account or when they delete their LINE account.\n",
      }),
    targetedReaches: z
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
          'The number of users, as of the specified date, that the LINE Official Account can reach through targeted messages based on gender, age, and/or region.\nThis number only includes users who are active on LINE or LINE services and whose demographics have a high level of certainty.\n',
      }),
    blocks: z
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
          'The number of users blocking the account as of the specified date.\nThe number decreases when a user unblocks the account.\n\n\n',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-number-of-followers',
    },
    description: 'Get number of followers',
    required: [],
  })
  .openapi('GetNumberOfFollowersResponse')

const GetMessageEventResponseOverviewSchema = z
  .object({
    requestId: z.string().exactOptional().openapi({ description: 'Request ID.' }),
    timestamp: z
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
        description: 'UNIX timestamp for message delivery time in seconds.',
      }),
    delivered: z
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
          'Number of messages delivered.\nThis property shows values of less than 20.\nHowever, if all messages have not been sent, it will be null.\n',
      }),
    uniqueImpression: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          'Number of users who opened the message, meaning they displayed at least 1 bubble.',
      }),
    uniqueClick: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Number of users who opened any URL in the message.',
      }),
    uniqueMediaPlayed: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Number of users who started playing any video or audio in the message.',
      }),
    uniqueMediaPlayed100Percent: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          'Number of users who played the entirety of any video or audio in the message.',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-insight-message-event-response',
    },
    description: 'Summary of message statistics.',
    required: [],
  })
  .openapi('GetMessageEventResponseOverview')

const GetMessageEventResponseMessageSchema = z
  .object({
    seq: z.int32().exactOptional().openapi({ description: "Bubble's serial number." }),
    impression: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Number of times the bubble was displayed.',
      }),
    mediaPlayed: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Number of times audio or video in the bubble started playing.',
      }),
    mediaPlayed25Percent: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          'Number of times audio or video in the bubble started playing and was played 25% of the total time.',
      }),
    mediaPlayed50Percent: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          'Number of times audio or video in the bubble started playing and was played 50% of the total time.',
      }),
    mediaPlayed75Percent: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          'Number of times audio or video in the bubble started playing and was played 75% of the total time.',
      }),
    mediaPlayed100Percent: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          'Number of times audio or video in the bubble started playing and was played 100% of the total time.',
      }),
    uniqueMediaPlayed: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Number of users that started playing audio or video in the bubble.',
      }),
    uniqueMediaPlayed25Percent: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          'Number of users that started playing audio or video in the bubble and played 25% of the total time.',
      }),
    uniqueMediaPlayed50Percent: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          'Number of users that started playing audio or video in the bubble and played 50% of the total time.',
      }),
    uniqueMediaPlayed75Percent: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          'Number of users that started playing audio or video in the bubble and played 75% of the total time.',
      }),
    uniqueMediaPlayed100Percent: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          'Number of users that started playing audio or video in the bubble and played 100% of the total time.',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-insight-message-event-response',
    },
    required: [],
  })
  .openapi('GetMessageEventResponseMessage')

const GetMessageEventResponseClickSchema = z
  .object({
    seq: z.int32().exactOptional().openapi({ description: "The URL's serial number." }),
    url: z.string().exactOptional().openapi({ description: 'URL.' }),
    click: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Number of times the URL was opened.',
      }),
    uniqueClick: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Number of users that opened the URL.',
      }),
    uniqueClickOfRequest: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          "Number of users who opened this url through any link in the message. If a message contains two links to the same URL and a user opens both links, they're counted only once.",
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-insight-message-event-response',
    },
    required: [],
  })
  .openapi('GetMessageEventResponseClick')

const GetMessageEventResponseSchema = z
  .object({
    overview: GetMessageEventResponseOverviewSchema.exactOptional(),
    messages: z
      .array(GetMessageEventResponseMessageSchema)
      .exactOptional()
      .openapi({ description: 'Array of information about individual message bubbles.' }),
    clicks: z
      .array(GetMessageEventResponseClickSchema)
      .exactOptional()
      .openapi({ description: 'Array of information about opened URLs in the message.' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-insight-message-event-response',
    },
    description:
      'Statistics about how users interact with narrowcast messages or broadcast messages sent from your LINE Official Account.',
    required: [],
  })
  .openapi('GetMessageEventResponse')

const GetStatisticsPerUnitResponseOverviewSchema = z
  .object({
    uniqueImpression: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          'Number of users who opened the message, meaning they displayed at least 1 bubble.',
      }),
    uniqueClick: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Number of users who opened any URL in the message.',
      }),
    uniqueMediaPlayed: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Number of users who started playing any video or audio in the message.',
      }),
    uniqueMediaPlayed100Percent: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          'Number of users who played the entirety of any video or audio in the message.',
      }),
  })
  .openapi({
    description: 'Statistics related to messages.',
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-statistics-per-unit-response',
    },
    required: [],
  })
  .openapi('GetStatisticsPerUnitResponseOverview')

const GetStatisticsPerUnitResponseMessageSchema = z
  .object({
    seq: z.int32().openapi({ description: "Bubble's serial number." }),
    impression: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Number of times the bubble was displayed.',
      }),
    mediaPlayed: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Number of times audio or video in the bubble started playing.',
      }),
    mediaPlayed25Percent: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          'Number of times audio or video in the bubble started playing and was played 25% of the total time.',
      }),
    mediaPlayed50Percent: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          'Number of times audio or video in the bubble started playing and was played 50% of the total time.',
      }),
    mediaPlayed75Percent: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          'Number of times audio or video in the bubble started playing and was played 75% of the total time.',
      }),
    mediaPlayed100Percent: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          'Number of times audio or video in the bubble started playing and was played 100% of the total time.',
      }),
    uniqueImpression: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Number of users the bubble was displayed.',
      }),
    uniqueMediaPlayed: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Number of users that started playing audio or video in the bubble.',
      }),
    uniqueMediaPlayed25Percent: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          'Number of users that started playing audio or video in the bubble and played 25% of the total time.',
      }),
    uniqueMediaPlayed50Percent: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          'Number of users that started playing audio or video in the bubble and played 50% of the total time.',
      }),
    uniqueMediaPlayed75Percent: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          'Number of users that started playing audio or video in the bubble and played 75% of the total time.',
      }),
    uniqueMediaPlayed100Percent: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          'Number of users that started playing audio or video in the bubble and played 100% of the total time.',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-statistics-per-unit-response',
    },
    required: ['seq'],
  })
  .openapi('GetStatisticsPerUnitResponseMessage')

const GetStatisticsPerUnitResponseClickSchema = z
  .object({
    seq: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: "The URL's serial number." }),
    url: z.string().openapi({ description: 'URL.' }),
    click: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Number of times the URL in the bubble was opened.',
      }),
    uniqueClick: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Number of users that opened the URL in the bubble.',
      }),
    uniqueClickOfRequest: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          "Number of users who opened this url through any link in the message.\nIf another message bubble contains the same URL and a user opens both links, it's counted only once.\n",
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-statistics-per-unit-response',
    },
    required: ['seq', 'url'],
  })
  .openapi('GetStatisticsPerUnitResponseClick')

const GetStatisticsPerUnitResponseSchema = z
  .object({
    overview: GetStatisticsPerUnitResponseOverviewSchema,
    messages: z
      .array(GetStatisticsPerUnitResponseMessageSchema)
      .openapi({ description: 'Array of information about individual message bubbles.' }),
    clicks: z
      .array(GetStatisticsPerUnitResponseClickSchema)
      .openapi({ description: 'Array of information about opened URLs in the message.' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-statistics-per-unit-response',
    },
    description: 'Response object for `get statistics per unit`',
    required: ['clicks', 'messages', 'overview'],
  })
  .openapi('GetStatisticsPerUnitResponse')

const GetRichMenuInsightSummaryResponseMetricsSchema = z
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
        description: 'Number of impressions or clicks.',
      }),
    uniqueUsers: z
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
        description: 'Approximate number of unique users who triggered an impression or click.',
      }),
  })
  .openapi({
    description: 'Aggregated number of events and unique users over the whole period.',
    required: ['count', 'uniqueUsers'],
  })
  .openapi('GetRichMenuInsightSummaryResponseMetrics')

const GetRichMenuInsightSummaryResponseImpressionSchema = z
  .object({ metrics: GetRichMenuInsightSummaryResponseMetricsSchema })
  .openapi({ description: 'Impression metrics for the whole rich menu.', required: ['metrics'] })
  .openapi('GetRichMenuInsightSummaryResponseImpression')

const GetRichMenuInsightSummaryResponseBoundsSchema = z
  .object({
    x: z
      .int32()
      .openapi({ description: 'The x coordinate of the top-left corner of the target area.' }),
    y: z
      .int32()
      .openapi({ description: 'The y coordinate of the top-left corner of the target area.' }),
    width: z.int32().openapi({ description: 'The width of the target area.' }),
    height: z.int32().openapi({ description: 'The height of the target area.' }),
  })
  .openapi({
    description:
      'Target area of the metrics, represented by the top-left coordinate, width, and height.',
    required: ['x', 'y', 'width', 'height'],
  })
  .openapi('GetRichMenuInsightSummaryResponseBounds')

const GetRichMenuInsightSummaryResponseClickSchema = z
  .object({
    bounds: GetRichMenuInsightSummaryResponseBoundsSchema,
    metrics: GetRichMenuInsightSummaryResponseMetricsSchema,
  })
  .openapi({
    description: 'Click metrics for a single tappable area of the rich menu.',
    required: ['bounds', 'metrics'],
  })
  .openapi('GetRichMenuInsightSummaryResponseClick')

const GetRichMenuInsightSummaryResponseSchema = z
  .object({
    richMenuId: z.string().openapi({ description: 'Rich menu ID.' }),
    metricsFrom: z
      .string()
      .regex(/^[0-9]{8}$/)
      .nullable()
      .exactOptional()
      .openapi({
        example: '20260213',
        description:
          'Start date (JST) of the period actually covered by the returned metrics. Format: yyyyMMdd (e.g. 20260213).',
      }),
    metricsTo: z
      .string()
      .regex(/^[0-9]{8}$/)
      .nullable()
      .exactOptional()
      .openapi({
        example: '20260215',
        description:
          'End date (JST) of the period actually covered by the returned metrics. Format: yyyyMMdd (e.g. 20260215).',
      }),
    impression: GetRichMenuInsightSummaryResponseImpressionSchema.exactOptional(),
    clicks: z
      .array(GetRichMenuInsightSummaryResponseClickSchema)
      .exactOptional()
      .openapi({ description: 'Click metrics for each tappable area of the rich menu.' }),
  })
  .openapi({
    description:
      'Summary of impression and click statistics for a rich menu created via the Messaging API.',
    required: ['richMenuId'],
  })
  .openapi('GetRichMenuInsightSummaryResponse')

const GetRichMenuInsightDailyResponseDailyMetricsSchema = z
  .object({
    date: z
      .string()
      .regex(/^[0-9]{8}$/)
      .openapi({
        example: '20260213',
        description: 'The date (JST) of these metrics. Format: yyyyMMdd (e.g. 20260213).',
      }),
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
        description: 'Number of impressions or clicks on this day.',
      }),
    uniqueUsers: z
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
          'Approximate number of unique users who triggered an impression or click on this day.',
      }),
  })
  .openapi({
    description: 'Aggregated number of events and unique users for a single day.',
    required: ['date', 'count', 'uniqueUsers'],
  })
  .openapi('GetRichMenuInsightDailyResponseDailyMetrics')

const GetRichMenuInsightDailyResponseImpressionSchema = z
  .object({
    metrics: z
      .array(GetRichMenuInsightDailyResponseDailyMetricsSchema)
      .openapi({ description: 'Per-day impression metrics.' }),
  })
  .openapi({
    description: 'Daily impression metrics for the whole rich menu.',
    required: ['metrics'],
  })
  .openapi('GetRichMenuInsightDailyResponseImpression')

const GetRichMenuInsightDailyResponseBoundsSchema = z
  .object({
    x: z
      .int32()
      .openapi({ description: 'The x coordinate of the top-left corner of the target area.' }),
    y: z
      .int32()
      .openapi({ description: 'The y coordinate of the top-left corner of the target area.' }),
    width: z.int32().openapi({ description: 'The width of the target area.' }),
    height: z.int32().openapi({ description: 'The height of the target area.' }),
  })
  .openapi({
    description:
      'Target area of the metrics, represented by the top-left coordinate, width, and height.',
    required: ['x', 'y', 'width', 'height'],
  })
  .openapi('GetRichMenuInsightDailyResponseBounds')

const GetRichMenuInsightDailyResponseClickSchema = z
  .object({
    bounds: GetRichMenuInsightDailyResponseBoundsSchema,
    metrics: z
      .array(GetRichMenuInsightDailyResponseDailyMetricsSchema)
      .openapi({ description: 'Per-day click metrics for the target area.' }),
  })
  .openapi({
    description: 'Daily click metrics for a single tappable area of the rich menu.',
    required: ['bounds', 'metrics'],
  })
  .openapi('GetRichMenuInsightDailyResponseClick')

const GetRichMenuInsightDailyResponseSchema = z
  .object({
    richMenuId: z.string().openapi({ description: 'Rich menu ID.' }),
    metricsFrom: z
      .string()
      .regex(/^[0-9]{8}$/)
      .nullable()
      .exactOptional()
      .openapi({
        example: '20260213',
        description:
          'Start date (JST) of the period actually covered by the returned metrics. Format: yyyyMMdd (e.g. 20260213).',
      }),
    metricsTo: z
      .string()
      .regex(/^[0-9]{8}$/)
      .nullable()
      .exactOptional()
      .openapi({
        example: '20260215',
        description:
          'End date (JST) of the period actually covered by the returned metrics. Format: yyyyMMdd (e.g. 20260215).',
      }),
    impression: GetRichMenuInsightDailyResponseImpressionSchema.exactOptional(),
    clicks: z
      .array(GetRichMenuInsightDailyResponseClickSchema)
      .exactOptional()
      .openapi({ description: 'Daily click metrics for each tappable area of the rich menu.' }),
  })
  .openapi({
    description:
      'Daily impression and click statistics for a rich menu created via the Messaging API.',
    required: ['richMenuId'],
  })
  .openapi('GetRichMenuInsightDailyResponse')

const ErrorDetailSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Details of the error. Not included in the response under certain situations.',
      }),
    property: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Location of where the error occurred. Returns the JSON field name or query parameter name of the request. Not included in the response under certain situations.',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#error-responses',
    },
    required: [],
  })
  .openapi('ErrorDetail')

const ErrorResponseSchema = z
  .object({
    message: z.string().openapi({ description: 'Message containing information about the error.' }),
    details: z
      .array(ErrorDetailSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of error details. If the array is empty, this property will not be included in the response.',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#error-responses',
    },
    required: ['message'],
  })
  .openapi('ErrorResponse')

const BearerSecurityScheme = { type: 'http', scheme: 'bearer', description: 'Channel access token' }

export const getV2BotInsightDemographicRoute = createRoute({
  method: 'get',
  path: '/v2/bot/insight/demographic',
  tags: ['insight'],
  description:
    "Retrieves the demographic attributes for a LINE Official Account's\nfriends.You can only retrieve information about friends for LINE Official\nAccounts created by users in Japan (JP), Thailand (TH), Taiwan (TW) and Indonesia\n(ID).\n",
  externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#get-demographic' },
  operationId: 'getFriendsDemographics',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GetFriendsDemographicsResponseSchema,
          example: {
            available: true,
            genders: [
              { gender: 'unknown', percentage: 37.6 },
              { gender: 'male', percentage: 31.8 },
              { gender: 'female', percentage: 30.6 },
            ],
            ages: [
              { age: 'unknown', percentage: 37.6 },
              { age: 'from50', percentage: 17.3 },
            ],
            areas: [
              { area: 'unknown', percentage: 42.9 },
              { area: '徳島', percentage: 2.9 },
            ],
            appTypes: [
              { appType: 'ios', percentage: 62.4 },
              { appType: 'android', percentage: 27.7 },
              { appType: 'others', percentage: 9.9 },
            ],
            subscriptionPeriods: [
              { subscriptionPeriod: 'over365days', percentage: 96.4 },
              { subscriptionPeriod: 'within365days', percentage: 1.9 },
              { subscriptionPeriod: 'within180days', percentage: 1.2 },
              { subscriptionPeriod: 'within90days', percentage: 0.5 },
              { subscriptionPeriod: 'within30days', percentage: 0.1 },
              { subscriptionPeriod: 'within7days', percentage: 0 },
            ],
          },
        },
      },
    },
  },
})

export const getV2BotInsightMessageDeliveryRoute = createRoute({
  method: 'get',
  path: '/v2/bot/insight/message/delivery',
  tags: ['insight'],
  summary: 'Get number of message deliveries',
  description:
    'Returns the number of messages sent from LINE Official Account\non a specified day.\n',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#get-number-of-delivery-messages',
  },
  operationId: 'getNumberOfMessageDeliveries',
  request: {
    query: z.object({
      date: z
        .string()
        .regex(/^[0-9]{8}$/)
        .length(8)
        .openapi({
          param: {
            in: 'query',
            name: 'date',
            description:
              'Date for which to retrieve number of sent messages.\n- Format: yyyyMMdd (e.g. 20191231)\n- Timezone: UTC+9\n',
            required: true,
            schema: { type: 'string', pattern: '^[0-9]{8}$', minLength: 8, maxLength: 8 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GetNumberOfMessageDeliveriesResponseSchema,
          example: { status: 'ready', broadcast: 5385, targeting: 522 },
        },
      },
    },
  },
})

export const getV2BotInsightFollowersRoute = createRoute({
  method: 'get',
  path: '/v2/bot/insight/followers',
  tags: ['insight'],
  summary: 'Get number of followers',
  description:
    'Returns the number of users who have added the LINE Official Account\non or before a specified date.\n',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#get-number-of-followers',
  },
  operationId: 'getNumberOfFollowers',
  request: {
    query: z.object({
      date: z
        .string()
        .regex(/^[0-9]{8}$/)
        .length(8)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'date',
            required: false,
            description:
              'Date for which to retrieve the number of followers.\n\nFormat: yyyyMMdd (e.g. 20191231)\nTimezone: UTC+9\n',
            schema: { type: 'string', pattern: '^[0-9]{8}$', maxLength: 8, minLength: 8 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GetNumberOfFollowersResponseSchema,
          example: { status: 'ready', followers: 7620, targetedReaches: 5848, blocks: 237 },
        },
      },
    },
  },
})

export const getV2BotInsightMessageEventRoute = createRoute({
  method: 'get',
  path: '/v2/bot/insight/message/event',
  tags: ['insight'],
  summary: 'Get user interaction statistics',
  description:
    'Returns statistics about how users interact with narrowcast messages\nor broadcast messages sent from your LINE Official Account.\n',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#get-message-event',
  },
  operationId: 'getMessageEvent',
  request: {
    query: z.object({
      requestId: z
        .string()
        .min(1)
        .openapi({
          param: {
            in: 'query',
            name: 'requestId',
            required: true,
            description:
              'Request ID of a narrowcast message or broadcast message.\nEach Messaging API request has a request ID.\n',
            schema: { type: 'string', minLength: 1 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GetMessageEventResponseSchema,
          example: {
            overview: {
              requestId: 'f70dd685-499a-4231-a441-f24b8d4fba21',
              timestamp: 1568214000,
              delivered: 320,
              uniqueImpression: 82,
              uniqueClick: 51,
              uniqueMediaPlayed: null,
              uniqueMediaPlayed100Percent: null,
            },
            messages: [
              {
                seq: 1,
                impression: 136,
                mediaPlayed: null,
                mediaPlayed25Percent: null,
                mediaPlayed50Percent: null,
                mediaPlayed75Percent: null,
                mediaPlayed100Percent: null,
                uniqueMediaPlayed: null,
                uniqueMediaPlayed25Percent: null,
                uniqueMediaPlayed50Percent: null,
                uniqueMediaPlayed75Percent: null,
                uniqueMediaPlayed100Percent: null,
              },
            ],
            clicks: [
              {
                seq: 1,
                url: 'https://line.me/',
                click: 41,
                uniqueClick: 30,
                uniqueClickOfRequest: 30,
              },
              {
                seq: 1,
                url: 'https://www.linebiz.com/',
                click: 59,
                uniqueClick: 38,
                uniqueClickOfRequest: 38,
              },
            ],
          },
        },
      },
    },
  },
})

export const getV2BotInsightMessageEventAggregationRoute = createRoute({
  method: 'get',
  path: '/v2/bot/insight/message/event/aggregation',
  tags: ['insight'],
  description:
    'You can check the per-unit statistics of how users interact with\npush messages and multicast messages sent from your LINE Official Account.\n',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#get-statistics-per-unit',
  },
  operationId: 'getStatisticsPerUnit',
  request: {
    query: z.object({
      customAggregationUnit: z
        .string()
        .regex(/^[a-zA-Z0-9_]{1,30}$/)
        .min(1)
        .max(30)
        .openapi({
          param: {
            in: 'query',
            name: 'customAggregationUnit',
            required: true,
            description:
              'Name of aggregation unit specified when sending the message. Case-sensitive.\nFor example, `Promotion_a` and `Promotion_A` are regarded as different unit names.\n',
            schema: {
              type: 'string',
              pattern: '^[a-zA-Z0-9_]{1,30}$',
              minLength: 1,
              maxLength: 30,
            },
          },
        }),
      from: z
        .string()
        .regex(/^[0-9]{8}$/)
        .length(8)
        .openapi({
          param: {
            in: 'query',
            name: 'from',
            required: true,
            description:
              'Start date of aggregation period.\n\nFormat: yyyyMMdd (e.g. 20210301)\nTime zone: UTC+9\n',
            schema: {
              type: 'string',
              pattern: '^[0-9]{8}$',
              example: '20210301',
              minLength: 8,
              maxLength: 8,
            },
          },
          example: '20210301',
        }),
      to: z
        .string()
        .regex(/^[0-9]{8}$/)
        .length(8)
        .openapi({
          param: {
            in: 'query',
            name: 'to',
            required: true,
            description:
              'End date of aggregation period. The end date can be specified for up to 30 days later. For example, if the start date is 20210301, the latest end date is 20210331.\n\nFormat: yyyyMMdd (e.g. 20210301)\nTime zone: UTC+9\n',
            schema: {
              type: 'string',
              pattern: '^[0-9]{8}$',
              example: '20210301',
              minLength: 8,
              maxLength: 8,
            },
          },
          example: '20210301',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GetStatisticsPerUnitResponseSchema,
          example: {
            overview: {
              uniqueImpression: 40,
              uniqueClick: 30,
              uniqueMediaPlayed: 25,
              uniqueMediaPlayed100Percent: null,
            },
            messages: [
              {
                seq: 1,
                impression: 42,
                mediaPlayed: 30,
                mediaPlayed25Percent: null,
                mediaPlayed50Percent: null,
                mediaPlayed75Percent: null,
                mediaPlayed100Percent: null,
                uniqueMediaPlayed: 25,
                uniqueMediaPlayed25Percent: null,
                uniqueMediaPlayed50Percent: null,
                uniqueMediaPlayed75Percent: null,
                uniqueMediaPlayed100Percent: null,
              },
            ],
            clicks: [
              {
                seq: 1,
                url: 'https://developers.line.biz/',
                click: 35,
                uniqueClick: 25,
                uniqueClickOfRequest: null,
              },
              {
                seq: 1,
                url: 'https://developers.line.biz/',
                click: 29,
                uniqueClick: null,
                uniqueClickOfRequest: null,
              },
            ],
          },
        },
      },
    },
  },
})

export const getV2BotInsightRichmenuRichMenuIdSummaryRoute = createRoute({
  method: 'get',
  path: '/v2/bot/insight/richmenu/{richMenuId}/summary',
  tags: ['insight'],
  summary: 'Get rich menu insight summary',
  description:
    'Gets a summary of rich menu statistics for the specified period, for a rich\nmenu created via the Messaging API. Returns the total impression count for\nthe whole rich menu and the click count for each tappable area, aggregated\nover the entire period as a single result.\nWhen the total number of unique clicks during the period is below the\nprivacy threshold, only `richMenuId` is returned and the other fields are\nomitted.\n',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#get-rich-menu-insight-summary',
  },
  operationId: 'getRichMenuInsightSummary',
  request: {
    params: z.object({
      richMenuId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'richMenuId',
            required: true,
            description: 'ID of the rich menu created via the Messaging API.',
            schema: { type: 'string', example: 'richmenu-0123456789abcdef0123456789abcdef' },
          },
          example: 'richmenu-0123456789abcdef0123456789abcdef',
        }),
    }),
    query: z.object({
      from: z
        .string()
        .regex(/^[0-9]{8}$/)
        .length(8)
        .openapi({
          param: {
            in: 'query',
            name: 'from',
            required: true,
            description:
              'Start date of the aggregation period (inclusive).\nMust be within the most recent 3 years.\n\nFormat: yyyyMMdd (e.g. 20260213)\nTime zone: UTC+9\n',
            schema: {
              type: 'string',
              pattern: '^[0-9]{8}$',
              example: '20260213',
              minLength: 8,
              maxLength: 8,
            },
          },
          example: '20260213',
        }),
      to: z
        .string()
        .regex(/^[0-9]{8}$/)
        .length(8)
        .openapi({
          param: {
            in: 'query',
            name: 'to',
            required: true,
            description:
              'End date of the aggregation period (inclusive).\nThe end date can be specified for up to 396 days after the start date.\n\nFormat: yyyyMMdd (e.g. 20260215)\nTime zone: UTC+9\n',
            schema: {
              type: 'string',
              pattern: '^[0-9]{8}$',
              example: '20260215',
              minLength: 8,
              maxLength: 8,
            },
          },
          example: '20260215',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GetRichMenuInsightSummaryResponseSchema,
          examples: {
            default: {
              summary: 'Statistics are available',
              value: {
                richMenuId: 'richmenu-0123456789abcdef0123456789abcdef',
                metricsFrom: '20260213',
                metricsTo: '20260215',
                impression: { metrics: { count: 567, uniqueUsers: 300 } },
                clicks: [
                  {
                    bounds: { x: 0, y: 0, width: 400, height: 250 },
                    metrics: { count: 123, uniqueUsers: 45 },
                  },
                  {
                    bounds: { x: 400, y: 0, width: 400, height: 250 },
                    metrics: { count: 45, uniqueUsers: 24 },
                  },
                ],
              },
            },
            belowThreshold: {
              summary:
                'Returned when the total number of unique clicks is below the privacy threshold',
              value: { richMenuId: 'richmenu-0123456789abcdef0123456789abcdef' },
            },
          },
        },
      },
    },
    400: {
      description:
        'Bad request. The `from` or `to` parameter is missing or invalid, or the aggregation period exceeds the allowed maximum.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Not found. The specified rich menu does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getV2BotInsightRichmenuRichMenuIdDailyRoute = createRoute({
  method: 'get',
  path: '/v2/bot/insight/richmenu/{richMenuId}/daily',
  tags: ['insight'],
  summary: 'Get rich menu insight daily',
  description:
    'Gets rich menu statistics broken down by day for the specified period, for a\nrich menu created via the Messaging API. Returns the daily impression count\nfor the whole rich menu and the daily click count for each tappable area.\nWhen the total number of unique clicks during the period is below the\nprivacy threshold, only `richMenuId` is returned and the other fields are\nomitted.\n',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#get-rich-menu-insight-daily',
  },
  operationId: 'getRichMenuInsightDaily',
  request: {
    params: z.object({
      richMenuId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'richMenuId',
            required: true,
            description: 'ID of the rich menu created via the Messaging API.',
            schema: { type: 'string', example: 'richmenu-0123456789abcdef0123456789abcdef' },
          },
          example: 'richmenu-0123456789abcdef0123456789abcdef',
        }),
    }),
    query: z.object({
      from: z
        .string()
        .regex(/^[0-9]{8}$/)
        .length(8)
        .openapi({
          param: {
            in: 'query',
            name: 'from',
            required: true,
            description:
              'Start date of the aggregation period (inclusive).\nMust be within the most recent 3 years.\n\nFormat: yyyyMMdd (e.g. 20260213)\nTime zone: UTC+9\n',
            schema: {
              type: 'string',
              pattern: '^[0-9]{8}$',
              example: '20260213',
              minLength: 8,
              maxLength: 8,
            },
          },
          example: '20260213',
        }),
      to: z
        .string()
        .regex(/^[0-9]{8}$/)
        .length(8)
        .openapi({
          param: {
            in: 'query',
            name: 'to',
            required: true,
            description:
              'End date of the aggregation period (inclusive).\nThe end date can be specified for up to 99 days after the start date.\n\nFormat: yyyyMMdd (e.g. 20260215)\nTime zone: UTC+9\n',
            schema: {
              type: 'string',
              pattern: '^[0-9]{8}$',
              example: '20260215',
              minLength: 8,
              maxLength: 8,
            },
          },
          example: '20260215',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GetRichMenuInsightDailyResponseSchema,
          examples: {
            default: {
              summary: 'Statistics are available',
              value: {
                richMenuId: 'richmenu-0123456789abcdef0123456789abcdef',
                metricsFrom: '20260213',
                metricsTo: '20260215',
                impression: {
                  metrics: [
                    { date: '20260213', count: 300, uniqueUsers: 191 },
                    { date: '20260214', count: 267, uniqueUsers: 222 },
                  ],
                },
                clicks: [
                  {
                    bounds: { x: 0, y: 0, width: 400, height: 250 },
                    metrics: [
                      { date: '20260213', count: 45, uniqueUsers: 22 },
                      { date: '20260214', count: 78, uniqueUsers: 35 },
                    ],
                  },
                  {
                    bounds: { x: 400, y: 0, width: 400, height: 250 },
                    metrics: [
                      { date: '20260213', count: 22, uniqueUsers: 21 },
                      { date: '20260214', count: 23, uniqueUsers: 22 },
                    ],
                  },
                ],
              },
            },
            belowThreshold: {
              summary:
                'Returned when the total number of unique clicks is below the privacy threshold',
              value: { richMenuId: 'richmenu-0123456789abcdef0123456789abcdef' },
            },
          },
        },
      },
    },
    400: {
      description:
        'Bad request. The `from` or `to` parameter is missing or invalid, or the aggregation period exceeds the allowed maximum.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Not found. The specified rich menu does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})
