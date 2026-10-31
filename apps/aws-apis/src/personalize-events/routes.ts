import { createRoute, z } from '@hono/zod-openapi'

const StringTypeSchema = z.string().min(1).max(256).openapi('StringType')

const FloatTypeSchema = z.float32().openapi('FloatType')

const ItemIdSchema = z.string().min(1).max(256).openapi('ItemId')

const DateSchema = z.iso.datetime({ offset: true }).openapi('Date')

const RecommendationIdSchema = z.string().min(1).max(40).openapi('RecommendationId')

const ImpressionSchema = z.array(ItemIdSchema).min(1).max(25).openapi('Impression')

const EventAttributionSourceSchema = z
  .string()
  .regex(/^[\x20-\x7E]*[\x21-\x7E]+[\x20-\x7E]*$/)
  .max(1024)
  .openapi('EventAttributionSource')

const MetricAttributionSchema = z
  .object({
    eventAttributionSource: EventAttributionSourceSchema.and(
      z.any().openapi({ description: 'The source of the event, such as a third party.' }),
    ),
  })
  .openapi({
    required: ['eventAttributionSource'],
    description:
      'Contains information about a metric attribution associated with an event. For more information about metric attributions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>.',
  })
  .openapi('MetricAttribution')

const EventSchema = z
  .object({
    eventId: StringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'An ID associated with the event. If an event ID is not provided, Amazon Personalize generates a unique ID for the event. An event ID is not used as an input to the model. Amazon Personalize uses the event ID to distinquish unique events. Any subsequent events after the first with the same event ID are not used in model training.',
        }),
    ).exactOptional(),
    eventType: StringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of event, such as click or download. This property corresponds to the <code>EVENT_TYPE</code> field of your Interactions schema and depends on the types of events you are tracking.',
        }),
    ),
    eventValue: FloatTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The event value that corresponds to the <code>EVENT_VALUE</code> field of the Interactions schema.',
        }),
    ).exactOptional(),
    itemId: ItemIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The item ID key that corresponds to the <code>ITEM_ID</code> field of the Interactions schema.',
        }),
    ).exactOptional(),
    properties: z
      .any()
      .exactOptional()
      .openapi({
        description:
          '<p>A string map of event-specific data that you might choose to record. For example, if a user rates a movie on your site, other than movie ID (<code>itemId</code>) and rating (<code>eventValue</code>) , you might also send the number of movie ratings made by the user.</p> <p>Each item in the map consists of a key-value pair. For example,</p> <p> <code>{"numberOfRatings": "12"}</code> </p> <p>The keys use camel case names that match the fields in the Interactions schema. In the above example, the <code>numberOfRatings</code> would match the \'NUMBER_OF_RATINGS\' field defined in the Interactions schema.</p>',
      }),
    sentAt: DateSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp (in Unix time) on the client side when the event occurred.',
        }),
    ),
    recommendationId: RecommendationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the list of recommendations that contains the item the user interacted with. Provide a <code>recommendationId</code> to have Amazon Personalize implicitly record the recommendations you show your user as impressions data. Or provide a <code>recommendationId</code> if you use a metric attribution to measure the impact of recommendations. </p> <p> For more information on recording impressions data, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recording-events.html#putevents-including-impressions-data">Recording impressions data</a>. For more information on creating a metric attribution see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>. </p>',
        }),
    ).exactOptional(),
    impression: ImpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of item IDs that represents the sequence of items you have shown the user. For example, <code>["itemId1", "itemId2", "itemId3"]</code>. Provide a list of items to manually record impressions data for an event. For more information on recording impressions data, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recording-events.html#putevents-including-impressions-data">Recording impressions data</a>. ',
        }),
    ).exactOptional(),
    metricAttribution: MetricAttributionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains information about the metric attribution associated with an event. For more information about metric attributions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['eventType', 'sentAt'],
    description:
      'Represents user interaction event information sent using the <code>PutEvents</code> API.',
  })
  .openapi('Event')

const InvalidInputExceptionSchema = z.any().openapi('InvalidInputException')

const ItemSchema = z
  .object({
    itemId: StringTypeSchema.and(
      z.any().openapi({ description: 'The ID associated with the item.' }),
    ),
    properties: z
      .any()
      .exactOptional()
      .openapi({
        description:
          '<p>A string map of item-specific metadata. Each element in the map consists of a key-value pair. For example, <code>{"numberOfRatings": "12"}</code>.</p> <p>The keys use camel case names that match the fields in the schema for the Items dataset. In the previous example, the <code>numberOfRatings</code> matches the \'NUMBER_OF_RATINGS\' field defined in the Items schema. For categorical string data, to include multiple categories for a single item, separate each category with a pipe separator (<code>|</code>). For example, <code>\\"Horror|Action\\"</code>.</p>',
      }),
  })
  .openapi({
    required: ['itemId'],
    description:
      'Represents item metadata added to an Items dataset using the <code>PutItems</code> API. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-items.html">Importing Items Incrementally</a>. ',
  })
  .openapi('Item')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ResourceInUseExceptionSchema = z.any().openapi('ResourceInUseException')

const UserSchema = z
  .object({
    userId: StringTypeSchema.and(
      z.any().openapi({ description: 'The ID associated with the user.' }),
    ),
    properties: z
      .any()
      .exactOptional()
      .openapi({
        description:
          '<p>A string map of user-specific metadata. Each element in the map consists of a key-value pair. For example, <code>{"numberOfVideosWatched": "45"}</code>.</p> <p>The keys use camel case names that match the fields in the schema for the Users dataset. In the previous example, the <code>numberOfVideosWatched</code> matches the \'NUMBER_OF_VIDEOS_WATCHED\' field defined in the Users schema. For categorical string data, to include multiple categories for a single user, separate each category with a pipe separator (<code>|</code>). For example, <code>\\"Member|Frequent shopper\\"</code>.</p>',
      }),
  })
  .openapi({
    required: ['userId'],
    description:
      'Represents user metadata added to a Users dataset using the <code>PutUsers</code> API. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-users.html">Importing Users Incrementally</a>.',
  })
  .openapi('User')

const ArnSchema = z
  .string()
  .regex(/arn:([a-z\d-]+):personalize:.*:.*:.+/)
  .max(256)
  .openapi('Arn')

const EventListSchema = z.array(EventSchema).min(1).max(10).openapi('EventList')

const EventPropertiesJSONSchema = z.string().min(1).max(1024).openapi('EventPropertiesJSON')

const ItemListSchema = z.array(ItemSchema).min(1).max(10).openapi('ItemList')

const ItemPropertiesSchema = z.string().min(1).max(24262).openapi('ItemProperties')

const UserIdSchema = z.string().min(1).max(256).openapi('UserId')

const PutEventsRequestSchema = z
  .object({
    trackingId: StringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tracking ID for the event. The ID is generated by a call to the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a> API.',
        }),
    ),
    userId: UserIdSchema.and(
      z.any().openapi({ description: 'The user associated with the event.' }),
    ).exactOptional(),
    sessionId: StringTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The session ID associated with the user\'s visit. Your application generates the sessionId when a user first visits your website or uses your application. Amazon Personalize uses the sessionId to associate events with the user before they log in. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recording-events.html">Recording Events</a>.',
        }),
    ),
    eventList: EventListSchema.and(
      z.any().openapi({ description: 'A list of event data from the session.' }),
    ),
  })
  .openapi({ required: ['trackingId', 'sessionId', 'eventList'], title: 'PutEventsRequest' })
  .openapi('PutEventsRequest')

const PutItemsRequestSchema = z
  .object({
    datasetArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Items dataset you are adding the item or items to.',
        }),
    ),
    items: ItemListSchema.and(z.any().openapi({ description: 'A list of item data.' })),
  })
  .openapi({ required: ['datasetArn', 'items'], title: 'PutItemsRequest' })
  .openapi('PutItemsRequest')

const UserListSchema = z.array(UserSchema).min(1).max(10).openapi('UserList')

const PutUsersRequestSchema = z
  .object({
    datasetArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Users dataset you are adding the user or users to.',
        }),
    ),
    users: UserListSchema.and(z.any().openapi({ description: 'A list of user data.' })),
  })
  .openapi({ required: ['datasetArn', 'users'], title: 'PutUsersRequest' })
  .openapi('PutUsersRequest')

const UserPropertiesSchema = z.string().min(1).max(4096).openapi('UserProperties')

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

export const postEventsRoute = createRoute({
  method: 'post',
  path: '/events',
  description:
    'Records user interaction event data. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recording-events.html">Recording Events</a>.',
  operationId: 'PutEvents',
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
              trackingId: z
                .string()
                .min(1)
                .max(256)
                .openapi({
                  description:
                    'The tracking ID for the event. The ID is generated by a call to the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a> API.',
                }),
              userId: z
                .string()
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({ description: 'The user associated with the event.' }),
              sessionId: z
                .string()
                .min(1)
                .max(256)
                .openapi({
                  description:
                    'The session ID associated with the user\'s visit. Your application generates the sessionId when a user first visits your website or uses your application. Amazon Personalize uses the sessionId to associate events with the user before they log in. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recording-events.html">Recording Events</a>.',
                }),
              eventList: z
                .array(EventSchema)
                .min(1)
                .max(10)
                .openapi({ description: 'A list of event data from the session.' }),
            })
            .openapi({ required: ['trackingId', 'sessionId', 'eventList'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postItemsRoute = createRoute({
  method: 'post',
  path: '/items',
  description:
    'Adds one or more items to an Items dataset. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-items.html">Importing Items Incrementally</a>. ',
  operationId: 'PutItems',
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
              datasetArn: z
                .string()
                .regex(/arn:([a-z\d-]+):personalize:.*:.*:.+/)
                .max(256)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the Items dataset you are adding the item or items to.',
                }),
              items: z
                .array(ItemSchema)
                .min(1)
                .max(10)
                .openapi({ description: 'A list of item data.' }),
            })
            .openapi({ required: ['datasetArn', 'items'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const postUsersRoute = createRoute({
  method: 'post',
  path: '/users',
  description:
    'Adds one or more users to a Users dataset. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-users.html">Importing Users Incrementally</a>.',
  operationId: 'PutUsers',
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
              datasetArn: z
                .string()
                .regex(/arn:([a-z\d-]+):personalize:.*:.*:.+/)
                .max(256)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the Users dataset you are adding the user or users to.',
                }),
              users: z
                .array(UserSchema)
                .min(1)
                .max(10)
                .openapi({ description: 'A list of user data.' }),
            })
            .openapi({ required: ['datasetArn', 'users'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})
