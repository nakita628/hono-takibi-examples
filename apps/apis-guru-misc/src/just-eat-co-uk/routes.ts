import { createRoute, z } from '@hono/zod-openapi'

const ConsumerOrderMealAccessorySchema = z
  .object({
    accessoryId: z.string().exactOptional().openapi({ description: 'The accessory Id.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the accessory.' }),
    quantity: z.int32().exactOptional().openapi({ description: 'The quantity of the accessory.' }),
    unitPrice: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The unit price of the accessory.' }),
  })
  .openapi({
    description: 'An accessory for a meal.',
    'x-api-version-from': '2017-10',
    required: [],
  })
  .openapi('ConsumerOrderMealAccessory')

type ConsumerOrderBasketSummaryItemType = {
  accessories?: z.infer<typeof ConsumerOrderMealAccessorySchema>[]
  id?: string
  items?: ConsumerOrderBasketSummaryItemType[]
  name?: string
  price?: number
  quantity?: number
  synonym?: string
  unitPrice?: number
}

const VariationModifierResponseSchema = z
  .object({
    AdditionalPrice: z.float64().exactOptional().openapi({ description: 'The additional price' }),
    ModifierGroupId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Id of the modifier group' }),
    Selected: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this modifier is permitted on this variation' }),
    VariationId: z.string().exactOptional().openapi({ description: 'Id of the variation' }),
    VariationName: z.string().exactOptional().openapi({ description: 'Name of the variation' }),
  })
  .openapi({
    example: {
      AdditionPrice: 12.34,
      ModifierGroupId: '2',
      Selected: true,
      VariationId: '3',
      VariationName: 'Large',
    },
    required: [],
  })
  .openapi('VariationModifierResponse')

type ModifierResponseType = {
  AdditionPrice?: number
  DefaultChoices?: number
  Id?: string
  MaxChoices?: number
  MinChoices?: number
  Name?: string
  RemovePrice?: number
  Variations?: z.infer<typeof VariationModifierResponseSchema>[]
}

const OrderItemAccessorySchema = z
  .strictObject({
    accessoryName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Name of the accessory' }),
    groupId: z.int32().exactOptional().openapi({ description: 'Group id of the accessory' }),
    id: z.string().nullable().exactOptional().openapi({ description: 'Id of the accessory' }),
    itemReference: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Item reference uniquely identifying a product on the menu but not basket instance of a product',
      }),
    name: z.string().nullable().exactOptional().openapi({ description: 'Name of the accessory' }),
    quantity: z.int32().exactOptional().openapi({ description: 'Quantity of accessories' }),
    totalPrice: z.number().exactOptional().openapi({ description: 'Total price of the accessory' }),
  })
  .openapi({ required: [] })
  .openapi('OrderItemAccessory')

type OrderItemType = {
  basketIds?: string[] | null
  comment?: string | null
  id?: string | null
  itemReference?: string | null
  menuIdentifier?: string | null
  menuNumber?: string | null
  name?: string | null
  orderItemAccessories?: z.infer<typeof OrderItemAccessorySchema>[] | null
  orderItems?: OrderItemType[] | null
  productCategory?: string | null
  productTypeId?: number
  quantity?: number
  totalPrice?: number
}

type RestaurantOrderItemType = {
  description?: string
  itemId?: string
  itemType?: 'Product' | 'MealPart' | 'Accessory'
  name?: string
  quantity?: number
  subItems?: RestaurantOrderItemType[]
  synonym?: string
  unitPrice?: number
}

type SupportRequestTypeType = { name?: string; subTypes?: SupportRequestTypeType[]; value?: string }

const OrderNumberValiditySchema = z
  .strictObject({
    ComparisonOperator: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The comparison operator (e.g. >, <, ==)' }),
    NumberOfOrders: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of orders for the comparison' }),
  })
  .openapi({ required: [] })
  .openapi('OrderNumberValidity')

const ConsumerStatusSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2)])
  .openapi({ description: '', 'x-enumNames': ['Undefined', 'NewConsumer', 'ReturnConsumer'] })
  .openapi('ConsumerStatus')

const ServiceTypeSchema = z
  .union([z.literal(1), z.literal(2)])
  .openapi({ description: '', 'x-enumNames': ['Collection', 'Delivery'] })
  .openapi('ServiceType')

const DayOfWeekSchema = z
  .union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
  ])
  .openapi({
    description: '',
    'x-enumNames': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  })
  .openapi('DayOfWeek')

type ValidityType = {
  CuisineIds?: string[] | null
  EndDate?: string | null
  MinimumSpend?: number | null
  OrderNumberValidity?: z.infer<typeof OrderNumberValiditySchema> | null
  PaymentOptionTypes?: string[] | null
  Platform?: string | null
  PostCode?: string | null
  RestaurantIds?: string | null
  RestrictedToConsumerStatus?: z.infer<typeof ConsumerStatusSchema> | null
  ServiceType?: z.infer<typeof ServiceTypeSchema> | null
  StartDate?: string | null
  ValidFromHour?: string | null
  ValidOnDays?: z.infer<typeof DayOfWeekSchema>[] | null
  ValidToHour?: string | null
}

type Item2Type = {
  Description?: string
  Items?: Item2Type[]
  OptionReference?: string
  Quantity?: number
  Reference?: string
}

type ItemV2Type = {
  Items?: ItemV2Type[]
  Name?: string
  Quantity?: number
  Reference?: string
  UnitPrice?: number
}

type OrderItem2Type = {
  Items?: OrderItem2Type
  Name?: string
  Quantity?: number
  Reference?: string
  TotalPrice?: number
  UnitPrice?: number
}[]

const _400ConnectTokenResponseSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the error that occurred.' }),
  })
  .openapi({ required: [] })
  .openapi('_400ConnectTokenResponse')

const _400CourierSyncErrorResponseSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error Title', example: 'Invalid Request' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error Message Text', example: 'Invalid Request' }),
  })
  .openapi({ description: 'The error object returned when an operation fails', required: [] })
  .openapi('_400CourierSyncErrorResponse')

const _400LiveMetricsErrorResponseSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error Title', example: 'Invalid Request' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error Message Text', example: 'Invalid Request' }),
  })
  .openapi({ description: 'The error object returned when an operation fails', required: [] })
  .openapi('_400LiveMetricsErrorResponse')

const _400MarketplaceRankingErrorResponseSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error Title', example: 'Invalid Request' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error Message Text', example: 'Invalid Request' }),
  })
  .openapi({ description: 'The error object returned when an operation fails', required: [] })
  .openapi('_400MarketplaceRankingErrorResponse')

const _400ZoneProfileErrorResponseSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error Title', example: 'Invalid Request' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error Message Text', example: 'Invalid Request' }),
  })
  .openapi({ description: 'The error object returned when an operation fails', required: [] })
  .openapi('_400ZoneProfileErrorResponse')

const _401CourierSyncErrorResponseSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error Title', example: 'Unauthorized Request' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error Message Text', example: 'Unauthorized Request' }),
  })
  .openapi({ description: 'The error object returned when an operation fails', required: [] })
  .openapi('_401CourierSyncErrorResponse')

const _401LiveMetricsErrorResponseSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error Title', example: 'Unauthorized Request' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error Message Text', example: 'Unauthorized Request' }),
  })
  .openapi({ description: 'The error object returned when an operation fails', required: [] })
  .openapi('_401LiveMetricsErrorResponse')

const _401MarketplaceRankingErrorResponseSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error Title', example: 'Unauthorized Request' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error Message Text', example: 'Unauthorized Request' }),
  })
  .openapi({ description: 'The error object returned when an operation fails', required: [] })
  .openapi('_401MarketplaceRankingErrorResponse')

const _401ZoneProfileErrorResponseSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error Title', example: 'Unauthorized Request' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error Message Text', example: 'Unauthorized Request' }),
  })
  .openapi({ description: 'The error object returned when an operation fails', required: [] })
  .openapi('_401ZoneProfileErrorResponse')

const _404CourierSyncErrorResponseSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error Title', example: 'Courier Sync not found' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error Message Text', example: 'Courier Sync not found' }),
  })
  .openapi({ description: 'The error object returned when an operation fails', required: [] })
  .openapi('_404CourierSyncErrorResponse')

const _404LiveMetricsErrorResponseSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error Title', example: 'Live Metrics not found for delivery zone' }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Error Message Text',
        example: 'Live Metrics not found for delivery zone',
      }),
  })
  .openapi({ description: 'The error object returned when an operation fails', required: [] })
  .openapi('_404LiveMetricsErrorResponse')

const _404MarketplaceRankingErrorResponseSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error Title', example: 'Marketplace Ranking Settings not found' }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Error Message Text',
        example: 'Marketplace Ranking Settings not found',
      }),
  })
  .openapi({ description: 'The error object returned when an operation fails', required: [] })
  .openapi('_404MarketplaceRankingErrorResponse')

const _404ZoneProfileErrorResponseSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error Title', example: 'Zone Profile Settings not found' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error Message Text', example: 'Zone Profile Settings not found' }),
  })
  .openapi({ description: 'The error object returned when an operation fails', required: [] })
  .openapi('_404ZoneProfileErrorResponse')

const _4XXErrorSchemaSchema = z
  .object({
    fault: z
      .object({
        errors: z
          .array(
            z
              .object({
                description: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Specific details about the error that may assist you in resolving the issue',
                  }),
                errorCode: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'A code that identifies the problem type. It will be supported by human-readable documentation that identifies how to resolve the error',
                  }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        faultId: z
          .string()
          .openapi({
            description:
              'A value that helps identify this response back to logs, so we can easily find this specific fault',
          }),
        traceId: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'A value that helps identify the trace back to logs, so that we can easily find what was happening on our system when the fault was generated',
          }),
      })
      .exactOptional()
      .openapi({ required: ['faultId'] }),
  })
  .openapi({ description: 'A HTTP 4xx error response', required: [] })
  .openapi('_4XXErrorSchema')

const _500CourierSyncErrorResponseSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error Title', example: 'Internal Server Error' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error Message Text', example: 'Internal Server Error' }),
  })
  .openapi({ description: 'The error object returned when an operation fails', required: [] })
  .openapi('_500CourierSyncErrorResponse')

const _500ErrorSchemaSchema = z
  .object({
    fault: z
      .object({
        errors: z
          .array(
            z
              .object({
                description: z
                  .literal('Internal Server Error')
                  .exactOptional()
                  .openapi({
                    description:
                      'If returned, the only value returned will be Internal Server Error"',
                  }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        faultId: z
          .string()
          .openapi({
            description:
              'A value that helps identify this response back to logs, so we can easily find this specific fault',
          }),
        traceId: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'A value that helps identify the trace back to logs, so that we can easily find what was happening on our system when the fault was generated',
          }),
      })
      .exactOptional()
      .openapi({ required: ['faultId'] }),
  })
  .openapi({ description: 'A HTTP 500 error response', required: [] })
  .openapi('_500ErrorSchema')

const _500LiveMetricsErrorResponseSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error Title', example: 'Internal Server Error' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error Message Text', example: 'Internal Server Error' }),
  })
  .openapi({ description: 'The error object returned when an operation fails', required: [] })
  .openapi('_500LiveMetricsErrorResponse')

const _500MarketplaceRankingErrorResponseSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error Title', example: 'Internal Server Error' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error Message Text', example: 'Internal Server Error' }),
  })
  .openapi({ description: 'The error object returned when an operation fails', required: [] })
  .openapi('_500MarketplaceRankingErrorResponse')

const _500ZoneProfileErrorResponseSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error Title', example: 'Internal Server Error' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error Message Text', example: 'Internal Server Error' }),
  })
  .openapi({ description: 'The error object returned when an operation fails', required: [] })
  .openapi('_500ZoneProfileErrorResponse')

const _5XXErrorSchemaSchema = z
  .object({
    fault: z
      .object({
        errors: z
          .array(
            z
              .object({
                description: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Specific details about the error that may assist you in resolving the issue',
                  }),
                errorCode: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'A code that identifies the problem type. It will be supported by human-readable documentation that identifies how to resolve the error',
                  }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({ description: 'The list of errors.' }),
        faultId: z
          .string()
          .openapi({
            description:
              'A value that helps identify this response back to logs, so we can easily find this specific fault',
          }),
        traceId: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'A value that helps identify the trace back to logs, so that we can easily find what was happening on our system when the fault was generated',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'An object representing the nature of the failure.',
        required: ['faultId'],
      }),
  })
  .openapi({ description: 'A HTTP 5xx error response', required: [] })
  .openapi('_5XXErrorSchema')

const AccountBalanceResponseSchema = z
  .object({ value: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('AccountBalanceResponse')

const ActiveConsumerOfferSchema = z
  .strictObject({
    Type: z.string().openapi({ description: 'Contains the offer data type name' }),
    offerId: z.string().openapi({ description: 'Unique Identifier for Offer' }),
  })
  .openapi({ required: ['Type', 'offerId'] })
  .openapi('ActiveConsumerOffer')

const PercentSchema = ActiveConsumerOfferSchema.and(
  z
    .strictObject({
      amount: z.number().exactOptional().openapi({ description: 'The percentage value discount' }),
      maxQualifyingValue: z
        .number()
        .exactOptional()
        .openapi({ description: 'The maximum order value required to be eligible for the offer' }),
      qualifyingValue: z
        .number()
        .exactOptional()
        .openapi({ description: 'The minimum order value required to be eligible for the Offer' }),
    })
    .openapi({ required: [] }),
).openapi('Percent')

const ActiveConsumerOffersByRestaurantSchema = z
  .strictObject({
    offers: z
      .array(
        z
          .xor([ActiveConsumerOfferSchema, PercentSchema])
          .openapi({
            discriminator: {
              mapping: { Percent: '#/components/schemas/Percent' },
              propertyName: 'Type',
            },
          }),
      )
      .nullable()
      .exactOptional()
      .openapi({ description: 'A Collection of Active Offers for `RestaurantId`' }),
    restaurantId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The `RestaurantId` applicable to the Offer', example: '1234567ds' }),
  })
  .openapi({
    example: {
      offers: [
        {
          Type: 'Percent',
          amount: 20,
          maxQualifyingValue: 45000,
          offerId: '12345sd',
          qualifyingValue: 15000,
        },
        {
          Type: 'Percent',
          amount: 15,
          maxQualifyingValue: 70000,
          offerId: '45sd345',
          qualifyingValue: 35000,
        },
      ],
      restaurantId: '1234sd',
    },
    required: [],
  })
  .openapi('ActiveConsumerOffersByRestaurant')

const ActiveConsumerOffersRequestSchema = z
  .strictObject({
    applicableDateTimeUtc: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'This is to support the basket use case, where\nan Offer may be active and displayed in Search or Menu\nbut could become inactive by the time the consumer\ncompletes the order.',
      }),
    consumerId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Global Consumer Id' }),
    restaurantIds: z
      .array(z.string())
      .min(1)
      .openapi({
        description:
          'The identifiers of the restaurants. Allows offers to be returned for many restaurants.',
      }),
  })
  .openapi({
    example: {
      applicableDateTimeUtc: '2021-01-20T19:35:13.643Z',
      consumerId: '1050450174',
      restaurantIds: ['12879', '450174'],
    },
    required: ['restaurantIds'],
  })
  .openapi('ActiveConsumerOffersRequest')

const ActiveConsumerOffersResponseSchema = z
  .strictObject({
    activeConsumerOffersByRestaurants: z
      .array(ActiveConsumerOffersByRestaurantSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'A Collection of Active Offers by Restaurant' }),
  })
  .openapi({ required: [] })
  .openapi('ActiveConsumerOffersResponse')

const AddCommentToTicketModelSchema = z
  .object({
    description: z
      .string()
      .openapi({ description: 'Comment to add to the ticket.', example: 'Happy to help!' }),
    externalId: z
      .string()
      .openapi({
        description:
          'Scoober job reference, or similar ID used by Scoober to identify this ticket.',
        example: 'slack:1',
      }),
    requesterEmail: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'E-Mail address of the ticket requester.',
        example: 'requester@scoober.com',
      }),
    responseUrl: z
      .string()
      .openapi({
        description: 'Where should we respond to with progress on this request?',
        example: 'https://zenbox-api.bob.external.tkwy-staging.io/ticket/reply/response',
      }),
    status: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'What status should we set the ticket to: Open, pending or solved.',
        example: 'pending',
      }),
    ticketId: z
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
        description: 'The ticket ID to add the comment to.',
        example: 1234,
      }),
  })
  .openapi({
    description:
      'Used when Scoober sends a reply about a support incident, to add to a Just Eat Zendesk ticket',
    required: ['description', 'externalId', 'responseUrl', 'ticketId'],
  })
  .openapi('AddCommentToTicketModel')

const AddMenuViewSchema = z
  .object({
    anonymousUserId: z.string().exactOptional(),
    app: z.string().exactOptional(),
    gaUserId: z.string().exactOptional(),
    globalUserId: z.string().exactOptional(),
    isSponsored: z.boolean().exactOptional(),
    latitude: z.float64().nullable().exactOptional(),
    longitude: z.float64().nullable().exactOptional(),
    menuDisplayedTimestampUtc: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    outcode: z.string().exactOptional(),
    searchDisplayedTimestampUtc: z.iso.datetime({ offset: true }).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddMenuView')

const AddReplyMessageModelSchema = z
  .object({
    city: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'City this order is located in.',
        example: 'london',
      }),
    countryCode: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '2 letter ISO code this ticket is about.', example: 'gb' }),
    description: z
      .string()
      .openapi({
        description: 'Description, i.e.: main body, of the message.',
        example: 'Happy to help!',
      }),
    externalId: z
      .string()
      .openapi({
        description: 'External ID for this ticket, e.g. Scoober job ID (assigned by them).',
        example: 'slack:1',
      }),
    reason: z
      .string()
      .openapi({
        description: 'Scoober contact reason for this ticket.',
        example: 'front_line_reason_food_quality_cold_crushed_spilled',
      }),
    restaurantId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Restaurant Id of the order.', example: '1234567' }),
    scooberJobId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Scoober job ID for this order.', example: '1234' }),
    status: z
      .string()
      .openapi({
        description: 'Status of the ticket. Can be: New, pending, solved.',
        example: 'pending',
      }),
    subject: z
      .string()
      .openapi({ description: 'Subject of the message.', example: 'Scoober Test' }),
    ticketId: z
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
        description: 'Zendesk ticket ID this message is about.',
        example: 1234,
      }),
  })
  .openapi({
    description:
      'Information sent when a Just Eat agent sends a follow up message about a Scoober support ticket to Scoober',
    required: ['description', 'externalId', 'reason', 'status', 'subject', 'ticketId'],
  })
  .openapi('AddReplyMessageModel')

const AdditiveSchema = z
  .strictObject({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'Additive code of Takeaway Standard from TMS' }),
  })
  .openapi({ description: 'List of Additives', example: { code: '10.2' }, required: [] })
  .openapi('Additive')

const AddressSchema = z
  .object({
    address1: z
      .string()
      .exactOptional()
      .openapi({ description: "Site's complete street address", example: '121 17 Ave SW #405' }),
    city: z.string().exactOptional().openapi({ description: "City's name", example: 'Calgary' }),
    latitude: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The address latitude coordinate.', example: 51.048615 }),
    longitude: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The address longitude coordinate.', example: -114.070847 }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: "Site's institution name or commercial name.",
        example: 'Clinic Hospital',
      }),
    phone: z
      .string()
      .exactOptional()
      .openapi({ description: "Customer's phone number", example: '+1 (222) 2222-2222' }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Postal code.', example: 'T0R 0X1' }),
    province: z
      .string()
      .exactOptional()
      .openapi({ description: "Province's name", example: 'Alberta' }),
    specialInstructions: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Special instructions for delivery',
        example: 'Contactless Delivery Please',
      }),
    useLatLongAddress: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'When enabled use latitude and longitude address.' }),
  })
  .openapi({ description: 'Address information.', required: [] })
  .openapi('Address')

const AddressGeocodingRequestSchema = z
  .object({
    addressLines: z
      .array(z.string())
      .min(1)
      .openapi({
        description:
          'Lines of the consumers address, a minimum of 3 is preferred but only 1 is required.',
      }),
  })
  .openapi({
    example: { addressLines: ['2 Fleet Place', 'Fleet Place', 'London', 'EC4M 7RF'] },
    required: ['addressLines'],
  })
  .openapi('AddressGeocodingRequest')

const AllergenSchema = z
  .strictObject({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'Allergen code of Takeaway Standard from TMS' }),
  })
  .openapi({ description: 'List of  Allergens', example: { code: 'A' }, required: [] })
  .openapi('Allergen')

const AppTypeSchema = z
  .enum([
    'Orderpad',
    'OrdertrackerDroid',
    'OrdertrackerTouch',
    'Orderbox',
    'OrderDeliveryService',
    'OrderpadDroid',
    'OrderpadTouch',
    'None',
  ])
  .openapi({ description: 'Application type' })
  .openapi('AppType')

const ApproveCancellationQuerySchema = z
  .strictObject({
    fee: z.number().nullable().exactOptional().openapi({ description: 'Approved fee' }),
    notes: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Notes about this cancellation' }),
  })
  .openapi({ required: [] })
  .openapi('ApproveCancellationQuery')

const AttemptedDeliveryResolutionSchema = z
  .strictObject({
    cancellationReason: z
      .enum([
        'new_address_not_within_area',
        'unable_to_reprepare',
        'driver_not_available',
        'area_unsafe',
        'customer_doesnt_want_anymore',
      ])
      .nullable()
      .exactOptional()
      .openapi({ description: 'Reason for cancelling order' }),
    hasBeenMarkedAsOnItsWay: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Flag to indicate whether redelivery is on it's way" }),
    redeliveryStatus: z
      .enum(['driver_at_address', 'repreparing'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'Status of the redelivery request' }),
    redeliveryTime: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Estimated redelivery time in ISO 8601 format' }),
  })
  .openapi({ required: [] })
  .openapi('AttemptedDeliveryResolution')

const AttemptedDeliveryResponseSchema = z
  .strictObject({
    isViewed: z.boolean().exactOptional().openapi({ description: 'Has the response been viewed' }),
    message: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Response message from customer' }),
    responseType: z
      .enum(['response', 'already_delivered'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'Response code from the customer for attempted delivery' }),
  })
  .openapi({ required: [] })
  .openapi('AttemptedDeliveryResponse')

const AttemptedDeliveryQuerySchema = z
  .strictObject({
    requestType: z
      .enum(['problem_with_address', 'no_answer'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'Type of attempted delivery request' }),
    resolution: AttemptedDeliveryResolutionSchema.nullable()
      .exactOptional()
      .openapi({ description: 'The restaurants resolution to the query' }),
    response: AttemptedDeliveryResponseSchema.nullable()
      .exactOptional()
      .openapi({ description: 'The customers reponse to the query' }),
    timeStamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'DateTime that the query was created in ISO 8601 format' }),
  })
  .openapi({ required: [] })
  .openapi('AttemptedDeliveryQuery')

const AttemptedDeliveryRequestSchema = z
  .strictObject({
    reasonCode: z
      .enum(['problem_with_address', 'no_answer'])
      .exactOptional()
      .openapi({ description: 'Reason for requesting attempted delivery' }),
  })
  .openapi({ required: [] })
  .openapi('AttemptedDeliveryRequest')

const AttemptedDeliveryResolutionCancellationRequestSchema = z
  .strictObject({
    reasonCode: z
      .enum([
        'new_address_not_within_area',
        'unable_to_reprepare',
        'driver_not_available',
        'area_unsafe',
        'customer_doesnt_want_anymore',
      ])
      .exactOptional()
      .openapi({ description: 'The reason the order has been cancelled' }),
  })
  .openapi({ required: [] })
  .openapi('AttemptedDeliveryResolutionCancellationRequest')

const AttemptedDeliveryResolutionRedeliveryRequestSchema = z
  .strictObject({
    newDueDate: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'New date and time in ISO 8601 format the order is due to be delivered',
      }),
    status: z
      .enum(['driver_at_address', 'repreparing'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'New status of attempted delivery' }),
  })
  .openapi({ required: [] })
  .openapi('AttemptedDeliveryResolutionRedeliveryRequest')

const AuthorizeResponseSchema = z
  .object({})
  .openapi({ description: 'The response object for the `authorize` endpoint.' })
  .openapi('AuthorizeResponse')

const AutoCompleteSearchResponseItemSchema = z
  .object({
    classification: z
      .enum(['Restaurant', 'Cuisine', 'Dish'])
      .exactOptional()
      .openapi({ description: 'Grouping to which term belongs' }),
    term: z.string().exactOptional().openapi({ description: 'Auto-completed search term' }),
  })
  .openapi({ example: { classification: 'Restaurant', term: 'Pizza Palace' }, required: [] })
  .openapi('AutoCompleteSearchResponseItem')

const AutoCompleteSearchResponseSchema = z
  .object({
    terms: z
      .array(AutoCompleteSearchResponseItemSchema)
      .max(10)
      .exactOptional()
      .openapi({ description: 'Ordered list of suggested term completions' }),
  })
  .openapi({
    example: {
      terms: [
        { classification: 'Restaurant', term: 'Pizza Palace' },
        { classification: 'Cuisine', term: 'Pizza' },
        { classification: 'Dish', term: 'Large Hawaiian' },
      ],
    },
    required: [],
  })
  .openapi('AutoCompleteSearchResponse')

const TimeSchema = z
  .object({
    daysOfTheWeek: z
      .array(z.enum(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']))
      .exactOptional()
      .openapi({ description: 'The days of the week.' }),
    fromDateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time of day the availability begins, in local time, format is ISO 8601 hh:mm:ss',
      }),
    toDateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time of day the availability begins, in local time, format is ISO 8601 hh:mm:ss',
      }),
  })
  .openapi({
    example: {
      daysOfTheWeek: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
      fromDateTime: '11:30:00',
      toDateTime: '14:30:00',
    },
    required: [],
  })
  .openapi('Time')

const AvailabilitySchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the availability.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique identifier at menu level for a given availability.' }),
    name: z.string().exactOptional().openapi({ description: 'The name for the availability.' }),
    serviceTypes: z
      .array(z.enum(['collection', 'delivery']))
      .exactOptional()
      .openapi({
        description:
          'Values can be "collection" or "delivery" and are used to denote what types of service apply to the availability.',
      }),
    times: z
      .array(TimeSchema)
      .exactOptional()
      .openapi({ description: 'An array of times when the availability is active.' }),
  })
  .openapi({
    example: {
      description: 'Menu items available for delivery during weekdays for lunch.',
      id: '1-lunch-delivery',
      name: 'Delivery Lunch',
      serviceTypes: ['delivery'],
      times: [
        {
          daysOfTheWeek: [
            'monday',
            'tuesday',
            'wednesday',
            'thursday',
            'friday',
            'saturday',
            'sunday',
          ],
          fromDateTime: '11:30:00',
          toDateTime: '14:30:00',
        },
      ],
    },
    required: [],
  })
  .openapi('Availability')

const AvailableFulfilmentTimes409ErrorSchema = z
  .object({
    fault: z
      .strictObject({
        errors: z
          .array(
            z
              .strictObject({
                description: z
                  .string()
                  .openapi({
                    description:
                      'Specific details about the error that may assist you in resolving the issue.',
                  }),
                errorCode: z
                  .enum(['FULFILMENT_TIME_BANDS_INVALID', 'FULFILMENT_TIME_BANDS_NOT_FOUND'])
                  .openapi({
                    description:
                      'A code that identifies the problem type. It will be supported by human-readable documentation that identifies how to resolve the error.',
                  }),
              })
              .openapi({
                description: 'Details about the error that may assist you in resolving the issue.',
                required: ['description', 'errorCode'],
              }),
          )
          .openapi({ description: 'List of errors that may assist you in resolving the issues.' }),
        faultId: z
          .string()
          .openapi({
            description:
              'A value that helps identify this response back to logs, so we can easily find this specific fault.',
          }),
        traceId: z
          .string()
          .openapi({
            description:
              'A value that helps identify the trace back to logs, so that we can easily find what was happening on our system when the fault was generated.',
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A list of values that helps identify this response back to logs, so we can easily find faults.',
        required: ['faultId', 'traceId', 'errors'],
      }),
  })
  .openapi({ description: 'An HTTP 409 error response', required: [] })
  .openapi('AvailableFulfilmentTimes409Error')

const AvailableTimeSlotsResponseSchema = z
  .strictObject({
    available: z
      .array(
        z
          .object({
            from: z
              .string()
              .regex(
                /^(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|[+-](?:[01]\d|2[0-3]):[0-5]\d)?$/,
              )
              .exactOptional()
              .openapi({ format: 'time', description: 'The available offer start time' }),
            to: z
              .string()
              .regex(
                /^(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|[+-](?:[01]\d|2[0-3]):[0-5]\d)?$/,
              )
              .exactOptional()
              .openapi({ format: 'time', description: 'The available offer end time' }),
          })
          .openapi({
            description: 'Pair of start and end time of available period to create offer',
            required: [],
          }),
      )
      .exactOptional()
      .openapi({ description: 'The collection of available time slots in restaurant local time' }),
    overlappingOfferIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The collection of overlapped offer ids for same date' }),
  })
  .openapi({
    example: {
      available: [
        { from: '12:00:00', to: '12:30:00' },
        { from: '12:30:00', to: '13:00:00' },
      ],
      overlappingOfferIds: ['1', '2'],
    },
    required: [],
  })
  .openapi('AvailableTimeSlotsResponse')

const BadItemSchema = z
  .strictObject({
    name: z.string().nullable().exactOptional().openapi({ description: 'Name of the item' }),
    quantity: z.int32().exactOptional().openapi({ description: 'Quantity of bad items' }),
    totalCost: z.number().exactOptional().openapi({ description: 'Total cost of all bad items' }),
    unitPrice: z
      .number()
      .exactOptional()
      .openapi({ description: 'Price of a single item in local currency' }),
  })
  .openapi({ required: [] })
  .openapi('BadItem')

const BadItemsGroupedByIssueSchema = z
  .strictObject({
    issue: z
      .enum(['Missing', 'Cold', 'Damaged'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'Bad item issue type' }),
    items: z
      .array(BadItemSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Group of items which have the same issue type' }),
  })
  .openapi({ required: [] })
  .openapi('BadItemsGroupedByIssue')

const BadItemClaimStatusSchema = z
  .enum(['Pending', 'Viewed', 'RefundAccepted', 'RefundRefused'])
  .openapi({ description: 'Current status of a bad item claim' })
  .openapi('BadItemClaimStatus')

const BadItemClaimSchema = z
  .strictObject({
    id: z.string().nullable().exactOptional().openapi({ description: 'Id of the claim' }),
    issues: z
      .array(BadItemsGroupedByIssueSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Bad item issues' }),
    refundRefusedReasonCode: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'If claim is refused, the reason for refusal' }),
    status: BadItemClaimStatusSchema.exactOptional().openapi({
      description: 'Current status of the claim',
    }),
    totalCost: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total cost of the claim in local currency' }),
  })
  .openapi({ required: [] })
  .openapi('BadItemClaim')

const BadItemClaimUpdateSchema = z
  .strictObject({
    comment: z.string().nullable().exactOptional().openapi({ description: 'Additional comment' }),
    newStatus: BadItemClaimStatusSchema.exactOptional().openapi({
      description: 'New status of claim',
    }),
    refundRejectedReasonCode: z
      .enum([
        'AlreadyRefunded',
        'ItemReplaced',
        'PartialRefundRequired',
        'WasNotMissing',
        'WillRedeliver',
        'OrderWasHot',
        'OrderWasOnTime',
        'OrderWasPacked',
        'FoodWasIntact',
        'AddExtraItem',
        'Other',
      ])
      .exactOptional()
      .openapi({ description: 'If claim is refused, the reason for refusal' }),
  })
  .openapi({ required: [] })
  .openapi('BadItemClaimUpdate')

const HelpActionSchema = z
  .object({
    action: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The specific action a button tap invokes.  Content depends on type.',
      }),
    buttonEvent: z
      .object({
        action: z.string().exactOptional().openapi({ description: 'Google Analytics action' }),
        category: z.string().exactOptional().openapi({ description: 'Google Analytics category' }),
        label: z
          .string()
          .exactOptional()
          .openapi({ description: 'Google Analytics label (if any)' }),
        value: z
          .number()
          .exactOptional()
          .openapi({ description: 'Google Analytics value (if any)' }),
      })
      .exactOptional()
      .openapi({ description: 'The analytics event to send on tap', required: [] }),
    buttonType: z
      .enum([
        'Primary',
        'Secondary',
        'TextOnly',
        'CloseButton',
        'Option',
        'OptionExtra',
        'FoodSafety',
      ])
      .exactOptional()
      .openapi({ description: 'Display type of button' }),
    data: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Data to post back (for use with type: ChapiPost).' }),
    department: z
      .string()
      .exactOptional()
      .openapi({ description: 'LiveChat department (for use with type: LiveChat)' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique but meaningful id for the action' }),
    notes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Notes to pass to LiveChat (for use with type: LiveChat)' }),
    postText: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Paragraphs to display after button' }),
    preText: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Paragraphs to display before button' }),
    title: z.string().exactOptional().openapi({ description: 'Caption for the button' }),
    type: z
      .enum([
        'LogIn',
        'Call',
        'Chatbot',
        'LiveChat',
        'ChapiGet',
        'ChapiPost',
        'Link',
        'HelpArticleLink',
        'EndFlow',
        'Email',
        'Deferred',
        'OpenModal',
        'CloseModal',
        'NoAction',
      ])
      .exactOptional()
      .openapi({ description: 'The type of action a button tap invokes' }),
  })
  .openapi({
    description:
      'Represents a possible action (i.e. button) on personalised help home page or as part of a flow',
    required: [],
  })
  .openapi('HelpAction')

const ExperimentEventSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique but meaningful id for the experiment' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'A name that describes the experiment' }),
    parentId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The parent experiment id of the current experiment' }),
    platform: z
      .string()
      .exactOptional()
      .openapi({ description: 'The platform where the experiment comes from' }),
    variantName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the variant the user is bucketed into' }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'The version of the running experiment' }),
  })
  .openapi({
    description:
      'Represents a possible experiment event on personalised help attached to customisation or to a Help Action. This will be sent from the client as an ExperimentV2 Google Analytics event',
    required: [],
  })
  .openapi('ExperimentEvent')

const FlowStepBaseSchema = z
  .object({
    closeButton: HelpActionSchema.exactOptional(),
    experimentEvents: z
      .array(ExperimentEventSchema)
      .exactOptional()
      .openapi({ description: 'list of experiments running for this client' }),
    screenEvent: z
      .object({
        dataLayer: z
          .looseObject({ screenName: z.string().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    title: z.string().exactOptional(),
  })
  .openapi({ description: 'Abstract base schema for flow steps.', required: [] })
  .openapi('FlowStepBase')

const BadItemIssueSelectionStepSchema = FlowStepBaseSchema.and(
  z
    .object({
      actions: z
        .array(HelpActionSchema)
        .exactOptional()
        .openapi({ description: 'Array of actions (i.e. buttons)' }),
      body: z
        .array(z.string())
        .exactOptional()
        .openapi({ description: 'Array of paragraphs for body text' }),
      foodSafetyAction: HelpActionSchema.exactOptional().openapi({
        description: 'Action that opens Food Safety info',
      }),
      header: z.string().exactOptional().openapi({ description: 'Display header' }),
      issueOptionActions: z
        .array(HelpActionSchema)
        .exactOptional()
        .openapi({ description: 'Array of actions that select the issue' }),
      leaveReviewAction: HelpActionSchema.exactOptional().openapi({
        description: 'Action to leave a review',
      }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description:
      'Flow step used for selecting the issue (e.g. missing / cold) when complaining about order items',
  })
  .openapi('BadItemIssueSelectionStep')

const BadRequestMarketingResponseSchema = z
  .any()
  .openapi({
    description: '400 Bad Request Returned',
    example: {
      errors: [{ description: 'Bad Request', errorCode: '400' }],
      faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
      message: 'Unable to process the request.',
    },
  })
  .openapi('BadRequestMarketingResponse')

const BasketErrorTypeSchema = z
  .enum([
    'Unknown',
    'MenuNotFound',
    'BasketNotRetrieved',
    'BasketNotMapped',
    'BasketNotDeserialised',
    'BasketErrorsNotDeserialised',
    'InvalidBasketItems',
    'BasketNotCreated',
    'InvalidBasketUpdateRequest',
    'ProductNotFound',
    'ProductNotUpdated',
    'ZipcodeNotUpdated',
    'ServiceTypeNotUpdated',
    'ProductNotAdded',
    'ProductsNotAdded',
    'MaximumBasketSizeReached',
    'MinimumBasketSizeReached',
    'OrderItemNotRemoved',
    'NoAvailableMenu',
    'RestaurantDoesNotDeliverToLocation',
    'InvalidLocation',
    'OrderItemNotFound',
    'PartialProductsUpdate',
    'AllProductsUpdateFailed',
    'ProductsNotRemoved',
    'InvalidCreateBasketRequest',
    'BasketNotFound',
  ])
  .openapi('BasketErrorType')

const BasketErrorResponseSchema = z
  .object({
    ErrorType: BasketErrorTypeSchema.exactOptional(),
    InnerErrors: z
      .array(
        z
          .object({
            ErrorType: BasketErrorTypeSchema.exactOptional(),
            Message: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    Message: z.string().exactOptional(),
  })
  .openapi({ description: 'The error object returned when an operation fails', required: [] })
  .openapi('BasketErrorResponse')

const BasketGeoLocationSchema = z
  .object({ Latitude: z.number().exactOptional(), Longitude: z.number().exactOptional() })
  .openapi({ required: [] })
  .openapi('BasketGeoLocation')

const BasketLocationSchema = z
  .object({
    GeoLocation: BasketGeoLocationSchema.nullable()
      .exactOptional()
      .openapi({
        description: 'Not available across platform yet, but applied for future proofing.',
      }),
    ZipCode: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BasketLocation')

const ExperimentValueSchema = z
  .object({
    name: z.string().openapi({ description: 'The name of the experiment.' }),
    variant: z
      .string()
      .openapi({
        description:
          'The value that the user has been bucketed into, also known as the variant. For\r\nexample in an A/B test, this would be "A" or "B".',
      }),
  })
  .openapi({ description: 'Defines data related to an experiment.', required: ['name', 'variant'] })
  .openapi('ExperimentValue')

const BasketProductsRequestSchema = z
  .object({
    productIds: z
      .array(z.string())
      .openapi({ description: "An array of product ids that are in the user's basket." }),
    restaurantId: z
      .string()
      .openapi({ description: 'The id of the restaurant that the recommendations are for.' }),
    userExperimentValues: z
      .array(ExperimentValueSchema)
      .openapi({
        description:
          'An array of experiment name/variant values that the user is part of.\r\nIf none of these match the experiment names that the Cross Sell API\r\nknows about, an error will be thrown.',
      }),
  })
  .openapi({
    description:
      "Describes a request for product recommendations based on products in a user's basket.",
    required: ['productIds', 'restaurantId', 'userExperimentValues'],
  })
  .openapi('BasketProductsRequest')

const CategoryOfferSchema = z
  .object({
    CategoryId: z.string().exactOptional(),
    DiscountType: z.string().exactOptional().openapi({ description: 'The type of discount' }),
    DiscountValue: z.number().exactOptional(),
    OfferId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of underlying consumer offers, if applicable',
      }),
    ProductId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of product qualified for discount' }),
  })
  .openapi({ required: [] })
  .openapi('CategoryOffer')

const ModifierSchema = z
  .object({
    MaximumAdditionalModifiers: z.number(),
    ModifierId: z.string().exactOptional(),
    Name: z.string().exactOptional(),
    Quantity: z.number().exactOptional(),
    TotalPrice: z.number().exactOptional(),
  })
  .openapi({ required: ['MaximumAdditionalModifiers'] })
  .openapi('Modifier')

const ModifierGroupSchema = z
  .object({
    MinimumChoices: z.number(),
    ModifierGroupId: z.string().exactOptional(),
    Modifiers: z.array(ModifierSchema).exactOptional(),
  })
  .openapi({ required: ['MinimumChoices'] })
  .openapi('ModifierGroup')

const RemovedIngredientSchema = z
  .object({ Details: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('RemovedIngredient')

const DealProductSchema = z
  .object({
    ModifierGroups: z.array(ModifierGroupSchema).nullable().exactOptional(),
    Name: z.string().exactOptional(),
    ProductId: z.string().exactOptional(),
    Quantity: z.number().exactOptional(),
    RemovedIngredients: z.array(RemovedIngredientSchema).nullable().exactOptional(),
    TotalPrice: z.number().exactOptional(),
    Variation: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DealProduct')

const DealGroupSchema = z
  .object({
    DealGroupId: z.string().exactOptional(),
    Products: z.array(DealProductSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DealGroup')

const DealSchema = z
  .object({
    BasketProductIds: z.array(z.string()).exactOptional(),
    CategoryId: z.string().exactOptional(),
    DealGroups: z.array(DealGroupSchema).exactOptional(),
    Name: z.string().exactOptional(),
    ProductId: z.string().exactOptional(),
    Quantity: z.number().exactOptional(),
    TotalPrice: z.number().exactOptional(),
    Variation: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Deal')

const PaymentDirectivesSchema = z
  .object({
    DisableCashPayment: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if cash payment option should be disabled' }),
  })
  .openapi({ description: 'The directives for payment component', required: [] })
  .openapi('PaymentDirectives')

const ProductSchema = z
  .object({
    BasketProductIds: z.array(z.string()).exactOptional(),
    CategoryId: z.string().exactOptional(),
    ModifierGroups: z.array(ModifierGroupSchema).nullable().exactOptional(),
    Name: z.string().exactOptional(),
    ProductId: z.string().exactOptional(),
    Quantity: z.number().exactOptional(),
    RemovedIngredients: z.array(RemovedIngredientSchema).nullable().exactOptional(),
    TotalPrice: z.number().exactOptional(),
    Variation: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Product')

const InvalidProductSchema = z
  .object({ Name: z.string().exactOptional(), ProductId: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('InvalidProduct')

const ItemDiscountSchema = z
  .strictObject({
    discountPercentage: z
      .number()
      .exactOptional()
      .openapi({ description: 'The discount percentage applied.' }),
    modifierGroups: z
      .array(ModifierGroupSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The collection of preselected modifier groups for the item.' }),
    productId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the discounted product item.' }),
  })
  .openapi({
    example: {
      discountPercentage: 100,
      modifierGroups: [
        {
          MinimumChoices: 1,
          ModifierGroupId: 'modifier111',
          Modifiers: [
            { MaximumAdditionalModifiers: 0, ModifierId: 'NoSugar11', Quantity: 1, TotalPrice: 0 },
          ],
        },
      ],
      productId: 'Lemonade1234',
    },
    title: 'ItemDiscount',
    required: [],
  })
  .openapi('ItemDiscount')

const ItemDiscountPromptSchema = z
  .strictObject({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of offer to show in prompt for customer' }),
    header: z
      .string()
      .exactOptional()
      .openapi({ description: 'The header to show in prompt for customer' }),
    itemDiscounts: z
      .array(ItemDiscountSchema)
      .exactOptional()
      .openapi({ description: 'The array of items with discounts' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The title to show in prompt for customer' }),
  })
  .openapi({
    example: {
      description: 'Get free lemonade with Super Burger',
      header: 'Free item!',
      itemDiscounts: [
        {
          discountPercentage: 100,
          modifierGroups: [
            {
              MinimumChoices: 1,
              ModifierGroupId: 'modifier111',
              Modifiers: [
                {
                  MaximumAdditionalModifiers: 0,
                  ModifierId: 'NoSugar11',
                  Quantity: 1,
                  TotalPrice: 0,
                },
              ],
            },
          ],
          productId: 'Lemonade1234',
        },
      ],
      title: 'Get free lemonade',
    },
    title: 'ItemDiscountPrompt',
    required: [],
  })
  .openapi('ItemDiscountPrompt')

const OfflineProductSchema = z
  .object({ Name: z.string().exactOptional(), ProductId: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('OfflineProduct')

const PromptsSchema = z
  .object({
    DiscountApplied: z
      .object({ Amount: z.number().exactOptional() })
      .nullable()
      .exactOptional()
      .openapi({ required: [] }),
    InvalidProducts: z.array(InvalidProductSchema).exactOptional(),
    ItemDiscounts: z
      .array(ItemDiscountPromptSchema)
      .exactOptional()
      .openapi({ description: 'Collection of item discount prompts to be shown customer' }),
    Offers: z
      .array(
        z
          .object({
            DiscountValue: z.number().exactOptional(),
            OfferType: z.string().exactOptional(),
            QualifyingValue: z.number().exactOptional(),
            ToSpendValue: z.number().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    OfflineProducts: z.array(OfflineProductSchema).exactOptional(),
    RequiresOther: z.boolean().exactOptional(),
    SpendMore: z
      .object({
        MinimumOrderAmount: z.number().exactOptional(),
        ToSpend: z.number().exactOptional(),
      })
      .nullable()
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Prompts')

const RestaurantOfferSchema = z
  .object({
    ConsumerSegment: z
      .string()
      .openapi({
        description: 'Consumer Segment to which offer applies',
        example: 'NewToRestaurant',
      }),
    DiscountApplied: z.number().openapi({ description: 'The money value discount' }),
    DiscountCode: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The unique code of the discount, acts as a lock object at payment stage',
      }),
    DiscountValue: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The percentage value discount. Returned 0 when offer is not of Percent type',
      }),
    OfferId: z.string().openapi({ description: 'The unique identifier of the offer' }),
    OfferType: z.string().openapi({ description: 'The type of the offer' }),
  })
  .openapi({ required: ['OfferId', 'OfferType', 'ConsumerSegment', 'DiscountApplied'] })
  .openapi('RestaurantOffer')

const BasketSummarySchema = z
  .object({
    BasketTotals: z.object({}).exactOptional(),
    CategoryOffers: z.array(CategoryOfferSchema).exactOptional(),
    Deals: z.array(DealSchema).exactOptional(),
    DeliveryCharge: z.number().exactOptional(),
    MaximumAdditionalOrderItems: z.number(),
    PaymentDirectives: PaymentDirectivesSchema.exactOptional().openapi({
      description: 'The directives to payment component',
      example: { DisableCashPayment: true },
    }),
    Products: z.array(ProductSchema).exactOptional(),
    Prompts: PromptsSchema.nullable().exactOptional(),
    RestaurantOffers: z
      .array(RestaurantOfferSchema)
      .exactOptional()
      .openapi({
        description: 'The list of restaurant offers',
        example: [
          {
            ConsumerSegment: 'NewToRestaurant',
            DiscountApplied: 8.37,
            DiscountValue: 20,
            OfferId: 'ftcOfferId75',
            OfferType: 'Percent',
          },
          {
            ConsumerSegment: 'All',
            DiscountApplied: 28.37,
            DiscountCode: 'mgt36rtp8VoucherCode',
            DiscountValue: 0,
            OfferId: 'stampCardLoyaltyCampaignOfferId287',
            OfferType: 'StampCard',
          },
        ],
      }),
  })
  .openapi({ required: ['MaximumAdditionalOrderItems'] })
  .openapi('BasketSummary')

const BasketResponseSchema = z
  .object({
    BasketId: z.string().exactOptional(),
    BasketSummary: BasketSummarySchema.exactOptional().openapi({
      description: 'Information for displaying the basket to the user.',
    }),
    CreateDate: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '`YYYY-MM-DDThh:mm:ssZ (UTC)`' }),
    IsOrderable: z.boolean().exactOptional(),
    MenuGroupId: z.string().exactOptional(),
    RestaurantSeoName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A unique per tenant identifier for a restaurant used for external operations.',
      }),
    ServiceType: z.string().exactOptional(),
  })
  .openapi({ description: 'The response object for all basket endpoints.', required: [] })
  .openapi('BasketResponse')

const BasketTotalsSchema = z
  .object({ SubTotal: z.number().exactOptional(), Total: z.number().exactOptional() })
  .openapi({ required: [] })
  .openapi('BasketTotals')

const BenderErrorResponseSchema = z
  .object({
    error: z.string().exactOptional().openapi({ description: 'Error Title' }),
    message: z.string().exactOptional().openapi({ description: 'Error Message Text' }),
  })
  .openapi({ description: 'The error object returned when an operation fails', required: [] })
  .openapi('BenderErrorResponse')

const BenderFlexStateTypeSchema = z
  .enum(['CODE_RED', 'OPEN', 'SEEKING', 'CLOSED', 'Off'])
  .openapi({
    description:
      '<p>The flex state type changes according to the exponential moving average and is used as a reference to bring more couriers to suffice the demand in a given delivery zone.</p> <p>If the flex state type is "Off", it means no shifts will be offered for the delivery zone.</p> <p>If the state is "CLOSED", only scheduled shifts will be allowed for the delivery zone.</p> <p>If the state is "SEEKING", the shift offers are going to be made across the courier network in order to suffice the current demand.</p> <p>If the state is "OPEN", it means demand is high and couriers from all over the courier network are allowed to create shifts for themselves to suffice the current demand.</p> <p>If the state is "CODE_RED", it means not only can everyone create shifts for themselves for the delivery zone but also couriers from other delivery zones might reallocate to help suffice the demand of that particular delivery zone.</p>',
  })
  .openapi('BenderFlexStateType')

const FlexStateTypeSchema = z.enum(['CODE_RED', 'OPEN', 'SEEKING']).openapi('FlexStateType')

const SettingsFlexStatesSchema = z
  .object({
    averageAssignableJobLoad: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Average assignable Job load for given state type' }),
    flexStateType: FlexStateTypeSchema.exactOptional().openapi({
      description: 'Flex State Type Options',
    }),
    triggerUsage: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Usage percentage for given state type' }),
  })
  .openapi({ required: [] })
  .openapi('SettingsFlexStates')

const BenderSettingsSchema = z
  .object({
    benderStatus: z.boolean().exactOptional().openapi({ description: 'Bender On/Off Status' }),
    deliveryZoneId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Bender Settings Delivery Zone Id' }),
    protectionThreshold: z
      .number()
      .exactOptional()
      .openapi({ description: 'Number of hours of Threshold protection' }),
    settingsFlexStates: SettingsFlexStatesSchema.exactOptional().openapi({
      description: 'Flex states information for given Delivery Zone Id',
    }),
    targetUsage: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Minimum target Usage Percentage' }),
  })
  .openapi({ description: 'The bender settings object for all endpoints.', required: [] })
  .openapi('BenderSettings')

const BenderSettingsListSchema = z
  .object({
    benderSettingsList: z
      .array(BenderSettingsSchema)
      .exactOptional()
      .openapi({ description: 'List of Bender Settings' }),
  })
  .openapi({ description: 'Bender Settings List', required: [] })
  .openapi('BenderSettingsList')

const BonusTypeSchema = z
  .literal('TOP_UP_PROMOTION')
  .openapi({
    description:
      "Types of bonuses that may be granted to the courier. <p>TOP_UP_PROMOTION - In order to calculate top up promotion skip has a database table containing required acceptance rate and top up value for each existing delivery zone, when the courier's order acceptance rate is greater than the required acceptance rate and the total value is lower than top up value for that given delivery zone, the courier will be granted the difference between the top up value and total order value, know as top up promotion.</p>",
  })
  .openapi('BonusType')

const BonusSummarySchema = z
  .object({
    type: BonusTypeSchema.exactOptional().openapi({
      description: 'Types of bonuses that may be granted to the courier.',
    }),
    value: z.number().exactOptional().openapi({ description: 'Bonus value' }),
  })
  .openapi({ description: 'The zone profile object for a given delivery zone.', required: [] })
  .openapi('BonusSummary')

const BringOnlineRequestSchema = z
  .strictObject({
    comment: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Any additional information' }),
  })
  .openapi({ required: [] })
  .openapi('BringOnlineRequest')

const CallReceivedOrUpdatedModelSchema = z
  .object({
    callSid: z
      .string()
      .exactOptional()
      .openapi({ description: 'UID used by Twilio, identifying a phone call' }),
    callStep: z.string().exactOptional().openapi({ description: 'CallStep' }),
    callerId: z.string().exactOptional().openapi({ description: "Caller's phone number" }),
    orderId: z.string().exactOptional().openapi({ description: 'Legacy/friendly Order ID' }),
    queryType: z.string().exactOptional().openapi({ description: 'QueryType' }),
    resolution: z.string().exactOptional().openapi({ description: 'Resolution' }),
    status: z
      .string()
      .exactOptional()
      .openapi({ description: 'Contains the status of the order, if known' }),
    tags: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Open-ended tag collection, for on-the-fly adjustment of data slicing; comma separated.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CallReceivedOrUpdatedModel')

const CallerInformationCallRequestSchema = z
  .object({
    accountSid: z
      .string()
      .exactOptional()
      .openapi({ description: 'The SID of the Twilio Account that created the Call resource' }),
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Twilio API version used to start a new TwiML session' }),
    callSid: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique identifier for the call, generated by Twilio' }),
    callStatus: z
      .string()
      .exactOptional()
      .openapi({ description: 'A descriptive status for the call' }),
    called: z.string().exactOptional().openapi({ description: 'The caller identifier' }),
    calledCountry: z
      .string()
      .exactOptional()
      .openapi({ description: 'The country of the called sender' }),
    calledState: z
      .string()
      .exactOptional()
      .openapi({ description: 'The state of the called sender' }),
    caller: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name or phone number of the caller' }),
    callerCountry: z
      .string()
      .exactOptional()
      .openapi({ description: 'The country of the called sender' }),
    digits: z
      .string()
      .exactOptional()
      .openapi({ description: 'The digits that caller entered on their keypad' }),
    direction: z
      .string()
      .exactOptional()
      .openapi({ description: 'A string describing the direction of the call' }),
    finishedOnKey: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Gets or sets a value that caller pressed to submit their digits input',
      }),
    from: z
      .string()
      .exactOptional()
      .openapi({ description: 'The phone number or client identifier to use as the caller id' }),
    fromCountry: z
      .string()
      .exactOptional()
      .openapi({ description: 'The country of the called sender' }),
    to: z
      .string()
      .exactOptional()
      .openapi({ description: 'The phone number, SIP address, or client identifier to call' }),
    toCountry: z.string().exactOptional().openapi({ description: 'The country of the recipient' }),
  })
  .openapi({ required: [] })
  .openapi('CallerInformationCallRequest')

const CancelOrderResolutionSchema = z
  .object({
    ReasonCode: z
      .enum([
        'NewAddressNotWithinDeliveryArea',
        'UnableToReprepare',
        'DriverNoLongerAvailable',
        'AreaIsUnsafe',
        'CustomerDoesnotWantOrderAnymore',
      ])
      .exactOptional()
      .openapi({ description: 'The reason the order has been cancelled' }),
  })
  .openapi({ required: [] })
  .openapi('CancelOrderResolution')

const CancellationInitiatedBySchema = z
  .enum(['Unknown', 'Restaurant', 'Customer', 'System'])
  .openapi({ description: 'Who initiated the cancellation' })
  .openapi('CancellationInitiatedBy')

const CancellationReasonSchema = z
  .strictObject({
    code: z
      .enum([
        'rest_cancelled_out_of_stock',
        'rest_cancelled_drivers_unavailable',
        'rest_cancelled_customer_requested',
        'rest_cancelled_customer_absent',
        'rest_cancelled_fake_order',
        'rest_cancelled_other',
        'cust_cancelled_delivery_too_long',
        'cust_cancelled_made_mistake',
        'cust_cancelled_other',
        'cust_cancelled_changed_mind',
        'deleted_system_error',
        'deleted_test_order',
        'deleted_rejected_by_restaurant',
      ])
      .nullable()
      .exactOptional()
      .openapi({ description: 'Reason for order cancellation' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Any additional comments' }),
  })
  .openapi({ required: [] })
  .openapi('CancellationReason')

const CancellationRestaurantTransactionTypeSchema = z
  .enum(['Unknown', 'Compensation', 'Fee'])
  .openapi({ description: 'The transaction type' })
  .openapi('CancellationRestaurantTransactionType')

const CancellationRestaurantTransactionSchema = z
  .strictObject({
    amount: z
      .number()
      .exactOptional()
      .openapi({ description: 'The total amount of the transaction' }),
    percentage: z
      .number()
      .exactOptional()
      .openapi({ description: 'The percentage of the order value of the transaction' }),
    type: CancellationRestaurantTransactionTypeSchema.exactOptional().openapi({
      description: 'The type of cancellation transaction',
    }),
  })
  .openapi({ required: [] })
  .openapi('CancellationRestaurantTransaction')

const CancellationInfoSchema = z
  .strictObject({
    canRequestCompensation: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Can the restaurant claim compensation for this cancellation' }),
    hasRequestedCompensation: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Has the restaurant claimed compensation for this cancellation' }),
    initiatedBy: CancellationInitiatedBySchema.exactOptional().openapi({
      description: 'Whether cancellation has been initiated by restaurant or consumer',
    }),
    reason: CancellationReasonSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Reason for cancellation' }),
    restaurantAware: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Is restaurant already aware of the cancellation' }),
    restaurantTransaction: CancellationRestaurantTransactionSchema.nullable()
      .exactOptional()
      .openapi({
        description: 'Potential compensation or fee applied to the restaurant for the cancellation',
      }),
  })
  .openapi({ required: [] })
  .openapi('CancellationInfo')

const PolicyEligibilitySchema = z
  .strictObject({
    code: z
      .enum([
        'BlockBlacklistedRestaurants',
        'BlockCashCancellationBlacklistedRestaurants',
        'BlockCashOrders',
        'CashCancellationsAreWithinAllowedThreshold',
        'CashOrderInTheWindowAfterAcceptance',
        'MaxCancellationsPerCustomer',
        'MaxCancellationsPerRestaurant',
        'EvaluateMaxOrderValue',
        'NotInTheWindowAfterAcceptance',
        'OrderCancelledStatePolicy',
        'IsRestaurantCancellationCapable',
      ])
      .nullable()
      .exactOptional()
      .openapi({ description: 'Policy rule name' }),
    passed: z.boolean().exactOptional().openapi({ description: 'Passed or not' }),
  })
  .openapi({ required: [] })
  .openapi('PolicyEligibility')

const PolicyFeeSchema = z
  .strictObject({
    amount: z
      .number()
      .exactOptional()
      .openapi({ description: 'Amount to be returned in local currency' }),
    justificationCode: z
      .enum([
        'CancellationOutsideWindow',
        'UnChargeableReason',
        'EmptyAcceptedAt',
        'CancellationInsideWindow',
      ])
      .nullable()
      .exactOptional()
      .openapi({ description: 'Justification code' }),
    percentage: z.number().exactOptional().openapi({ description: 'Percentage to be returned' }),
  })
  .openapi({ required: [] })
  .openapi('PolicyFee')

const PolicyOutcomeSchema = z
  .strictObject({
    decision: z
      .enum(['Offered', 'Declined'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'Decision after policy run' }),
    fee: PolicyFeeSchema.exactOptional().openapi({
      description: 'Fee details after the policy run',
    }),
  })
  .openapi({ required: [] })
  .openapi('PolicyOutcome')

const PolicyResultSchema = z
  .strictObject({
    eligibility: z
      .array(PolicyEligibilitySchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Eligibility details' }),
    outcome: PolicyOutcomeSchema.exactOptional().openapi({
      description: 'Result of the policy run',
    }),
  })
  .openapi({ required: [] })
  .openapi('PolicyResult')

const CancellationResolutionSchema = z
  .strictObject({
    at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Creation date and time of the cancellation in ISO 8601 format' }),
    by: z
      .enum(['Agent', 'Restaurant', 'System'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'Role of cancellation requester' }),
    feeApplied: z.number().exactOptional().openapi({ description: 'Approved amount' }),
    notes: z.string().nullable().exactOptional().openapi({ description: 'Additional notes' }),
    state: z
      .literal('Approved')
      .nullable()
      .exactOptional()
      .openapi({ description: 'State of the cancellation resolution' }),
    userName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'User name who created this cancellation' }),
  })
  .openapi({ required: [] })
  .openapi('CancellationResolution')

const CancellationQueryResponseSchema = z
  .strictObject({
    comments: z.string().nullable().exactOptional().openapi({ description: 'Additional comments' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Cancellation query creation date and time in ISO 8601 format' }),
    orderId: z.string().nullable().exactOptional().openapi({ description: 'The id of the order' }),
    policyResult: PolicyResultSchema.exactOptional().openapi({
      description: 'Result of the policy run',
    }),
    reasonCode: z
      .enum([
        'rest_cancelled_customer_requested',
        'rest_cancelled_customer_absent',
        'rest_cancelled_out_of_stock',
        'rest_cancelled_drivers_unavailable',
        'rest_cancelled_fake_order',
        'rest_cancelled_too_busy',
        'rest_cancelled_other',
      ])
      .nullable()
      .exactOptional()
      .openapi({ description: 'Reason for order cancellation' }),
    resolution: CancellationResolutionSchema.exactOptional().openapi({
      description: 'Resolution of this cancellation querry',
    }),
    state: z
      .enum(['New', 'Offered', 'Declined', 'Approved'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'Cancellation query outcome' }),
  })
  .openapi({ required: [] })
  .openapi('CancellationQueryResponse')

const CategoriesResponseSchema = z
  .array(
    z
      .object({
        Description: z.string().exactOptional().openapi({ description: 'Category description.' }),
        Id: z.string().exactOptional().openapi({ description: 'Category identifier.' }),
        Name: z.string().exactOptional().openapi({ description: 'Category name.' }),
      })
      .openapi({ required: [] }),
  )
  .openapi({ description: 'Categories of products for given restaurant.' })
  .openapi('CategoriesResponse')

const CategoryBaseSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the category.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique identifier at menu level for a given category.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the category.' }),
  })
  .openapi({ example: { description: '', id: '3', name: 'Starters' }, required: [] })
  .openapi('CategoryBase')

const CategorySchema = CategoryBaseSchema.and(
  z
    .object({
      itemIds: z
        .array(z.string())
        .exactOptional()
        .openapi({
          description:
            'The ids of the menu items that are within the category. Each id must be unique within the category.',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    example: {
      description: '',
      id: '3',
      itemIds: ['65143901', '65143902', '65143903', '65143904', '65143905'],
      name: 'Starters',
    },
  })
  .openapi('Category')

const CategoryRequestSchema = z
  .object({
    Id: z.string().exactOptional().openapi({ description: 'Id of the Category' }),
    Name: z.string().exactOptional().openapi({ description: 'Name of the Category' }),
  })
  .openapi({ example: { Id: '21', Name: 'Pizzas' }, required: [] })
  .openapi('CategoryRequest')

const CategoryResponseSchema = z
  .object({
    Id: z.string().exactOptional().openapi({ description: 'Id of the Category' }),
    Name: z.string().exactOptional().openapi({ description: 'Name of the Category' }),
  })
  .openapi({ example: { Id: '21', Name: 'Pizzas' }, required: [] })
  .openapi('CategoryResponse')

const ChangeRestaurantContactsRequestSchema = z
  .object({
    ownerMobileNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Restaurant owner mobile phone number in E.164 format.' }),
    restaurantEmailAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'Restaurant email address' }),
    restaurantPhoneNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Restaurant phone number in E.164 format.' }),
  })
  .openapi({
    description: 'Request containing new restaurant and owner contact details',
    example: {
      ownerMobileNumber: '+14151231234',
      restaurantEmailAddress: 'super-kebab@gmail.com',
      restaurantPhoneNumber: '+14151231234',
    },
    required: [],
  })
  .openapi('ChangeRestaurantContactsRequest')

const ChangeRestaurantLogoRequestSchema = z
  .object({
    fileKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'Path to the file that was uploaded to the AWS S3 bucket' }),
  })
  .openapi({
    description: 'Request containing path to new logo file that was  uploaded to AWS S3 bucket',
    example: { fileKey: 'ASIASJNB7IVSWQWRLQEQ_logo.jpeg' },
    required: [],
  })
  .openapi('ChangeRestaurantLogoRequest')

const ChangeRestaurantMenuItemsRequestSchema = z
  .object({
    containsAllergensInfomation: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'The value indicating whether request has changes of allergen information',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The message with the details of what needs to be changed in the menu (item/section/category)',
      }),
  })
  .openapi({
    description:
      'Request containing information about what to change in the restaurant menu (item/section/category)',
    example: {
      containsAllergensInfomation: true,
      message: 'Change name from "Meat burger" to "Vegan burger"',
    },
    required: [],
  })
  .openapi('ChangeRestaurantMenuItemsRequest')

const ChangeRestaurantMenuPricesRequestSchema = z
  .object({
    fileKeys: z
      .array(
        z
          .string()
          .openapi({
            description: 'Path to the file that was uploaded to the certain AWS S3 bucket',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Array of paths to the updated menu files that Were uploaded to the AWS S3 bucket',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'The message with the details of what prices need to be changed' }),
  })
  .openapi({
    description: 'Request containing information about restaurant menu price changes',
    example: {
      fileKeys: ['3c81dq0k9bhj1bn_menu_1.pdf', '1rhj7qhr6fhjgbm_menu_2.pdf'],
      message: 'Change the price of "Meat burger" from 5$ to 7$',
    },
    required: [],
  })
  .openapi('ChangeRestaurantMenuPricesRequest')

const CommunicationChannelsSchema = z
  .enum(['email', 'sms', 'push'])
  .openapi('CommunicationChannels')

const ChannelSubscriptionsSchema = z
  .object({
    subscribedChannels: z
      .array(CommunicationChannelsSchema)
      .exactOptional()
      .openapi({
        description: 'The list of channels that the consumer should only be subscribed to.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ChannelSubscriptions')

const ChannelSubscriptionsWithDerivedFieldSchema = z
  .object({
    isDefault: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Are these channel subscriptions the default or have they been set elsewhere. This is a read-only derived field.',
      }),
    subscribedChannels: z
      .array(CommunicationChannelsSchema)
      .exactOptional()
      .openapi({ description: 'The list of channels that are subscribed' }),
  })
  .openapi({ required: [] })
  .openapi('ChannelSubscriptionsWithDerivedField')

const CheckedInStateSchema = z
  .enum(['CHECKED_IN', 'NOT_CHECKED_IN'])
  .openapi({
    description: 'The state of a courier on a shift. A courier might be checked in or not.',
  })
  .openapi('CheckedInState')

const Checkout404ErrorSchema = z
  .object({
    fault: z
      .strictObject({
        errors: z
          .array(
            z
              .strictObject({
                description: z
                  .string()
                  .openapi({
                    description:
                      'Specific details about the error that may assist you in resolving the issue.',
                  }),
                errorCode: z
                  .enum(['TENANT_NOT_SUPPORTED', 'CHECKOUT_NOT_FOUND'])
                  .openapi({
                    description:
                      'A code that identifies the problem type. It will be supported by human-readable documentation that identifies how to resolve the error.',
                  }),
              })
              .openapi({
                description: 'Details about the error that may assist you in resolving the issue.',
                required: ['description', 'errorCode'],
              }),
          )
          .openapi({ description: 'List of errors that may assist you in resolving the issues.' }),
        faultId: z
          .string()
          .openapi({
            description:
              'A value that helps identify this response back to logs, so we can easily find this specific fault.',
          }),
        traceId: z
          .string()
          .openapi({
            description:
              'A value that helps identify the trace back to logs, so that we can easily find what was happening on our system when the fault was generated.',
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A list of values that helps identify this response back to logs, so we can easily find faults.',
        required: ['faultId', 'traceId', 'errors'],
      }),
  })
  .openapi({ description: 'An HTTP 404 error response', required: [] })
  .openapi('Checkout404Error')

const Checkout409ErrorSchema = z
  .object({
    fault: z
      .strictObject({
        errors: z
          .array(
            z
              .strictObject({
                description: z
                  .string()
                  .openapi({
                    description:
                      'Specific details about the error that may assist you in resolving the issue.',
                  }),
                errorCode: z
                  .literal('CHECKOUT_INVALID')
                  .openapi({
                    description:
                      'A code that identifies the problem type. It will be supported by human-readable documentation that identifies how to resolve the error.',
                  }),
              })
              .openapi({
                description: 'Details about the error that may assist you in resolving the issue.',
                required: ['description', 'errorCode'],
              }),
          )
          .openapi({ description: 'List of errors that may assist you in resolving the issues.' }),
        faultId: z
          .string()
          .openapi({
            description:
              'A value that helps identify this response back to logs, so we can easily find this specific fault.',
          }),
        traceId: z
          .string()
          .openapi({
            description:
              'A value that helps identify the trace back to logs, so that we can easily find what was happening on our system when the fault was generated.',
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A list of values that helps identify this response back to logs, so we can easily find faults .',
        required: ['faultId', 'traceId', 'errors'],
      }),
  })
  .openapi({ description: 'An HTTP 409 error response', required: [] })
  .openapi('Checkout409Error')

const CheckoutActionSchema = z
  .object({
    data: z
      .record(z.string(), z.string())
      .openapi({
        description: 'Action data dictionary. Key value pairs required to make payment.',
        example: {
          braintreeDeviceData: 'someescapedjson',
          deviceId: 'somedeviceid',
          nonce: 'acbd2334',
          payerEmail: 'someemail@paypal.com',
          payerId: 'somepaypalpayerid12345',
        },
      }),
    type: z
      .string()
      .openapi({
        description:
          'Identifier for the type of action data for the payment method dependant on paymentOptionType.',
      }),
  })
  .openapi({
    description:
      'Action data needed to make payment for payment method in use. This data is dependant on the Payment Service Provider and payment method. When used for checkout where fraud-check is required, device-id, payer email and payer identifier should be provided.',
    required: ['type', 'data'],
  })
  .openapi('CheckoutAction')

const CheckoutDefaultErrorSchema = z
  .object({
    fault: z
      .strictObject({
        errors: z
          .array(
            z
              .strictObject({
                description: z
                  .string()
                  .openapi({
                    description:
                      'Specific details about the error that may assist you in resolving the issue.',
                  }),
              })
              .openapi({ required: ['description'] }),
          )
          .openapi({ description: 'List of errors that may assist you in resolving the issues.' }),
        faultId: z
          .string()
          .openapi({
            description:
              'A value that helps identify this response back to logs, so we can easily find this specific fault.',
          }),
        traceId: z
          .string()
          .openapi({
            description:
              'A value that helps identify the trace back to logs, so that we can easily find what was happening on our system when the fault was generated.',
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A list of values that helps identify this response back to logs, so we can easily find faults.',
        required: ['faultId', 'traceId', 'errors'],
      }),
  })
  .openapi({ description: 'A default HTTP error response', required: [] })
  .openapi('CheckoutDefaultError')

const CheckoutGet400ErrorSchema = z
  .object({
    fault: z
      .strictObject({
        errors: z
          .array(
            z
              .strictObject({
                description: z
                  .string()
                  .openapi({
                    description:
                      'Specific details about the error that may assist you in resolving the issue.',
                  }),
                errorCode: z
                  .enum(['TENANT_INVALID', 'CHECKOUT_ID_INVALID'])
                  .openapi({
                    description:
                      'A code that identifies the problem type. It will be supported by human-readable documentation that identifies how to resolve the error.',
                  }),
              })
              .openapi({
                description: 'Details about the error that may assist you in resolving the issue.',
                required: ['description', 'errorCode'],
              }),
          )
          .openapi({ description: 'List of errors that may assist you in resolving the issues.' }),
        faultId: z
          .string()
          .openapi({
            description:
              'A value that helps identify this response back to logs, so we can easily find this specific fault.',
          }),
        traceId: z
          .string()
          .openapi({
            description:
              'A value that helps identify the trace back to logs, so that we can easily find what was happening on our system when the fault was generated.',
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A list of values that helps identify this response back to logs, so we can easily find faults.',
        required: ['faultId', 'traceId', 'errors'],
      }),
  })
  .openapi({ description: 'An HTTP 400 error response', required: [] })
  .openapi('CheckoutGet400Error')

const CheckoutIssueSchema = z
  .object({
    code: z
      .enum([
        'RESTAURANT_NOT_TAKING_ORDERS',
        'SERVICE_TYPE_UNAVAILABLE',
        'ITEMS_UNORDERABLE',
        'ADDITIONAL_ITEMS_REQUIRED',
        'MINIMUM_ORDER_VALUE_NOT_MET',
        'FULFILMENT_TIME_UNAVAILABLE',
        'LOCATION_UNDELIVERABLE',
        'AGE_VERIFICATION_FAILED',
        'FIRST_NAME_REQUIRED',
        'PHONE_NUMBER_REQUIRED',
        'DATE_OF_BIRTH_REQUIRED',
        'FULFILMENT_TIME_REQUIRED',
        'ADDRESS_LINES_REQUIRED',
        'LOCALITY_REQUIRED',
        'ADMINISTRATIVE_AREA_REQUIRED',
        'POSTAL_CODE_REQUIRED',
        'GEOLOCATION_REQUIRED',
      ])
      .openapi({ description: 'The issue code' }),
  })
  .openapi({
    discriminator: {
      mapping: {
        ADDITIONAL_ITEMS_REQUIRED: '#/components/schemas/CheckoutIssue_AdditionalItemsRequired',
        ADDRESS_LINES_REQUIRED: '#/components/schemas/CheckoutIssue_AddressLinesRequired',
        ADMINISTRATIVE_AREA_REQUIRED:
          '#/components/schemas/CheckoutIssue_AdministrativeAreaRequired',
        AGE_VERIFICATION_FAILED: '#/components/schemas/CheckoutIssue_AgeVerificationFailed',
        DATE_OF_BIRTH_REQUIRED: '#/components/schemas/CheckoutIssue_DateOfBirthRequired',
        FIRST_NAME_REQUIRED: '#/components/schemas/CheckoutIssue_FirstNameRequired',
        FULFILMENT_TIME_REQUIRED: '#/components/schemas/CheckoutIssue_FulfilmentTimeRequired',
        FULFILMENT_TIME_UNAVAILABLE: '#/components/schemas/CheckoutIssue_FulfilmentTimeUnavailable',
        GEOLOCATION_REQUIRED: '#/components/schemas/CheckoutIssue_GeolocationRequired',
        ITEMS_UNORDERABLE: '#/components/schemas/CheckoutIssue_ItemsUnorderable',
        LOCALITY_REQUIRED: '#/components/schemas/CheckoutIssue_LocalityRequired',
        LOCATION_UNDELIVERABLE: '#/components/schemas/CheckoutIssue_LocationUndeliverable',
        MINIMUM_ORDER_VALUE_NOT_MET: '#/components/schemas/CheckoutIssue_MinimumOrderValueNotMet',
        PHONE_NUMBER_REQUIRED: '#/components/schemas/CheckoutIssue_PhoneNumberRequired',
        POSTAL_CODE_REQUIRED: '#/components/schemas/CheckoutIssue_PostalCodeRequired',
        RESTAURANT_NOT_TAKING_ORDERS:
          '#/components/schemas/CheckoutIssue_RestaurantNotTakingOrders',
        SERVICE_TYPE_UNAVAILABLE: '#/components/schemas/CheckoutIssue_ServiceTypeUnavailable',
      },
      propertyName: 'code',
    },
    required: ['code'],
  })
  .openapi('CheckoutIssue')

const CheckoutGetResponseSchema = z
  .object({
    customer: z
      .object({
        firstName: z
          .string()
          .min(1)
          .max(100)
          .nullable()
          .exactOptional()
          .openapi({ description: "Customer's first name. \n\nAlso known as Given Name(s).\n" }),
        lastName: z
          .string()
          .min(0)
          .max(100)
          .nullable()
          .exactOptional()
          .openapi({
            description: "Customer's last name (Optional).\n\nAlso known as Family Name.\n",
          }),
        phoneNumber: z
          .string()
          .min(3)
          .max(16)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "Customer's phone number.\n\nA phone number can be represented in:\n  - E.164 format e.g. +447777111111 or;\n  - Local format of submitted tenant e.g. 07777111111.\n\nE.164 formatted phone numbers are preferred.\n",
          }),
      })
      .openapi({
        description:
          'Details of the customer making the purchase.\n\nDetails of the customer will need to be submitted to the service. No default values will be set.\n',
        required: [],
      }),
    fulfilment: z
      .object({
        location: z
          .object({
            address: z
              .object({
                administrativeArea: z
                  .string()
                  .min(1)
                  .max(50)
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Geographical region of this address. \n\nAlso known as County or State.\n\nRequired in Australia (AU) only for an order to be fulfilled.\n',
                  }),
                lines: z
                  .array(
                    z
                      .string()
                      .min(1)
                      .max(100)
                      .openapi({ description: 'Represents part of a street address.' }),
                  )
                  .min(0)
                  .max(4)
                  .exactOptional()
                  .openapi({ description: 'One or more lines representing the street address.' }),
                locality: z
                  .string()
                  .min(1)
                  .max(50)
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'The locality of this address.\n\nAlso known as Town or City.\n',
                  }),
                postalCode: z
                  .string()
                  .min(1)
                  .max(50)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Postal code of this address.' }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description: 'The postal address where the customer wants to receive the order.',
                required: [],
              }),
            geolocation: z
              .object({
                latitude: z
                  .number()
                  .openapi({ description: 'The latitude of the geographical location.' }),
                longitude: z
                  .number()
                  .openapi({ description: 'The longitude of the geographical location.' }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The coordinates of a geographical location where the customer wants to receive the order.\n\nRequired in Australia (AU) and New Zealand (NZ) only for an order to be fulfilled.\n',
                required: ['latitude', 'longitude'],
              }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The destination the customer wants to receive the order.\n\nThis only applies to purchases with a delivery service type.\n',
            required: [],
          }),
        time: z
          .object({
            asap: z
              .boolean()
              .openapi({
                description:
                  'If the order should be fulfilled as soon as possible (ASAP).\n\nASAP may not be fulfillable.\n\nDefault is false.\n',
              }),
            scheduled: z
              .object({
                from: z
                  .string()
                  .openapi({
                    description:
                      'Earliest time the customer wants the order to be fulfilled represented in ISO 8601 UTC (Zulu Time).',
                  }),
                to: z
                  .string()
                  .openapi({
                    description:
                      'Latest time the customer wants the order to be fulfilled represented in ISO 8601 UTC (Zulu Time). \n\nThis time must be greater than or equal to the from time.\n',
                  }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Scheduled time the customer wants the order to be fulfilled.\n\nIf ASAP is selected and fulfillable, this will be set to the next available fulfilment time.\n',
                required: ['from', 'to'],
              }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Time the customer wants to receive the order i.e. when order is fulfilled.',
            required: ['asap'],
          }),
      })
      .openapi({
        description: 'How and when the items will be received by the customer.',
        required: [],
      }),
    isFulfillable: z
      .boolean()
      .openapi({ description: 'Whether the proposed order can be placed.' }),
    issues: z
      .array(CheckoutIssueSchema)
      .min(0)
      .max(18)
      .openapi({
        description:
          'One or more issues associated the proposed order, that may impact whether it can be placed.',
      }),
    restaurant: z
      .object({
        availabilityId: z
          .string()
          .openapi({
            deprecated: true,
            description: 'Unique identifier to identify when item(s) are available for ordering.\n',
          }),
        id: z.string().openapi({ description: 'Unique identifier for the restaurant.' }),
      })
      .openapi({
        description: 'The restaurant selling the items to be purchased.',
        required: ['id', 'availabilityId'],
      }),
    serviceType: z
      .enum(['delivery', 'collection'])
      .openapi({ description: 'How the order will be dispatched.' }),
  })
  .openapi({
    description: 'Properties apply to all supported country codes, except where specified.',
    required: ['restaurant', 'serviceType', 'customer', 'fulfilment', 'isFulfillable', 'issues'],
  })
  .openapi('CheckoutGetResponse')

const CheckoutIssueAdditionalItemsRequiredSchema = CheckoutIssueSchema.and(z.strictObject({}))
  .and(
    z
      .object({
        code: z
          .any()
          .exactOptional()
          .openapi({
            description:
              'The collection of items are not orderable in their current state. Items need to be added.',
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi('CheckoutIssueAdditionalItemsRequired')

const CheckoutIssueAddressLinesRequiredSchema = CheckoutIssueSchema.and(z.strictObject({}))
  .and(
    z
      .object({
        code: z
          .any()
          .exactOptional()
          .openapi({
            description:
              'Indicates that the fulfilment address lines is required to fulfil an order.',
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi('CheckoutIssueAddressLinesRequired')

const CheckoutIssueAdministrativeAreaRequiredSchema = CheckoutIssueSchema.and(z.strictObject({}))
  .and(
    z
      .object({
        code: z
          .any()
          .exactOptional()
          .openapi({
            description:
              'Indicates that the fulfilment address administrative area is required to fulfil an order.\n\nOccurs in Australia (AU) only.\n',
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi('CheckoutIssueAdministrativeAreaRequired')

const CheckoutIssueAgeVerificationFailedSchema = CheckoutIssueSchema.and(z.strictObject({}))
  .and(
    z
      .object({
        code: z
          .any()
          .exactOptional()
          .openapi({
            description:
              'The order cannot proceed because the customer has failed the required age verification check.\n\nOccurs in Australia (AU) and New Zealand (NZ) only.\n',
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi('CheckoutIssueAgeVerificationFailed')

const CheckoutIssueDateOfBirthRequiredSchema = CheckoutIssueSchema.and(z.strictObject({}))
  .and(
    z
      .object({
        code: z
          .any()
          .exactOptional()
          .openapi({
            description:
              "Indicates that the customer's date of birth is required to fulfil an order.\n\nOccurs in Australia (AU) and New Zealand (NZ) only.\n",
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi('CheckoutIssueDateOfBirthRequired')

const CheckoutIssueFirstNameRequiredSchema = CheckoutIssueSchema.and(z.strictObject({}))
  .and(
    z
      .object({
        code: z
          .any()
          .exactOptional()
          .openapi({
            description: "Indicates that the customer's first name is required to fulfil an order.",
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi('CheckoutIssueFirstNameRequired')

const CheckoutIssueFulfilmentTimeRequiredSchema = CheckoutIssueSchema.and(z.strictObject({}))
  .and(
    z
      .object({
        code: z
          .any()
          .exactOptional()
          .openapi({
            description: 'Indicates that a fulfilment time is required to fulfil an order.',
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi('CheckoutIssueFulfilmentTimeRequired')

const CheckoutIssueFulfilmentTimeUnavailableSchema = CheckoutIssueSchema.and(z.strictObject({}))
  .and(
    z
      .object({
        code: z
          .any()
          .exactOptional()
          .openapi({
            description:
              'The selected fulfilment time is no longer available. A new fulfilment time may be available for selection.',
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi('CheckoutIssueFulfilmentTimeUnavailable')

const CheckoutIssueGeolocationRequiredSchema = CheckoutIssueSchema.and(z.strictObject({}))
  .and(
    z
      .object({
        code: z
          .any()
          .exactOptional()
          .openapi({
            description:
              'Indicates that the fulfilment geolocation is required to fulfil an order.\n\nOccurs in Australia (AU) and New Zealand (NZ) only.\n',
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi('CheckoutIssueGeolocationRequired')

const CheckoutIssueItemsUnorderableSchema = CheckoutIssueSchema.and(z.strictObject({}))
  .and(
    z
      .object({
        code: z
          .any()
          .exactOptional()
          .openapi({ description: 'The collection of items are not orderable.' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('CheckoutIssueItemsUnorderable')

const CheckoutIssueLocalityRequiredSchema = CheckoutIssueSchema.and(z.strictObject({}))
  .and(
    z
      .object({
        code: z
          .any()
          .exactOptional()
          .openapi({
            description:
              'Indicates that the fulfilment address locality is required to fulfil an order.',
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi('CheckoutIssueLocalityRequired')

const CheckoutIssueLocationUndeliverableSchema = CheckoutIssueSchema.and(z.strictObject({}))
  .and(
    z
      .object({
        code: z
          .any()
          .exactOptional()
          .openapi({ description: 'The restaurant is unable to deliver to this location.' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('CheckoutIssueLocationUndeliverable')

const CheckoutIssueMinimumOrderValueNotMetSchema = CheckoutIssueSchema.and(
  z
    .strictObject({
      additionalSpendRequired: z
        .number()
        .openapi({
          description:
            'The amount the customer needs to spend to meet minimum order value. This is in the smallest unit of local currency e.g. pence.',
        }),
      currency: z
        .string()
        .openapi({
          description:
            'The currency in which the value amounts are returned represented in ISO 4217 format.',
        }),
      minimumOrderValue: z
        .number()
        .openapi({
          description:
            'The minimum order value required to complete an order. This is in the smallest unit of local currency e.g. pence.',
        }),
    })
    .openapi({ required: ['currency', 'minimumOrderValue', 'additionalSpendRequired'] }),
)
  .and(
    z
      .object({
        code: z
          .any()
          .exactOptional()
          .openapi({ description: 'The checkout does not meet the minimum order value.' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('CheckoutIssueMinimumOrderValueNotMet')

const CheckoutIssuePhoneNumberRequiredSchema = CheckoutIssueSchema.and(z.strictObject({}))
  .and(
    z
      .object({
        code: z
          .any()
          .exactOptional()
          .openapi({
            description:
              "Indicates that the customer's phone number is required to fulfil an order.",
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi('CheckoutIssuePhoneNumberRequired')

const CheckoutIssuePostalCodeRequiredSchema = CheckoutIssueSchema.and(z.strictObject({}))
  .and(
    z
      .object({
        code: z
          .any()
          .exactOptional()
          .openapi({
            description:
              'Indicates that the fulfilment postal code is required to fulfil an order.',
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi('CheckoutIssuePostalCodeRequired')

const CheckoutIssueRestaurantNotTakingOrdersSchema = CheckoutIssueSchema.and(z.strictObject({}))
  .and(
    z
      .object({
        code: z
          .any()
          .exactOptional()
          .openapi({
            description:
              'The restaurant being ordered from is no longer taking orders. Either the restaurant is not offline or is no longer available on the platform.',
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi('CheckoutIssueRestaurantNotTakingOrders')

const CheckoutIssueServiceTypeUnavailableSchema = CheckoutIssueSchema.and(z.strictObject({}))
  .and(
    z
      .object({
        code: z
          .any()
          .exactOptional()
          .openapi({
            description:
              'The selected service type is not available. The restaurant may still be available to order from with a different service type.',
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi('CheckoutIssueServiceTypeUnavailable')

const CheckoutRequestSchema = z
  .object({
    action: CheckoutActionSchema.exactOptional().openapi({
      description:
        'Action data needed to make payment for payment method in use. This data is dependant on the Payment Service Provider and payment method. When used for checkout where fraud-check is required, device-id, payer email and payer identifier should be provided.',
    }),
    paymentOptionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to use for saved card payment. Tokens retrieved from order payment options or basket payment options calls on Public API.',
      }),
    paymentOptionType: z
      .enum([
        'AccountCredit',
        'AndroidPay',
        'ApplePay',
        'Card',
        'Cash',
        'GooglePay',
        'PayPal',
        'SavedCard',
        'VCO',
      ])
      .openapi({ description: 'Identifier used to determine method of payment.' }),
    voucherCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Voucher code to apply to order.' }),
  })
  .openapi({ description: 'Details needed to make a payment.', required: ['paymentOptionType'] })
  .openapi('CheckoutRequest')

const CheckoutResponseSchema = z
  .object({
    orderId: z.string().exactOptional().openapi({ description: 'The Id of the order.' }),
    result: z
      .enum(['20000', '40000', '50000'])
      .exactOptional()
      .openapi({
        description:
          'The result of payment attempt. 2xxxx = successful payment. 4xxxxx = validation error, 5xxxx = server error',
      }),
    tenant: z
      .string()
      .exactOptional()
      .openapi({ description: 'The tenant associated with the consumer.' }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The UTC timestamp of the date and time that the response was generated at.',
        'x-api-version-from': '2019-04',
      }),
  })
  .openapi({ description: 'The result of a payment attempt.', required: [] })
  .openapi('CheckoutResponse')

const CheckoutUpdate400ErrorSchema = z
  .object({
    fault: z
      .strictObject({
        errors: z
          .array(
            z
              .strictObject({
                description: z
                  .string()
                  .openapi({
                    description:
                      'Specific details about the error that may assist you in resolving the issue.',
                  }),
                errorCode: z
                  .enum([
                    'TENANT_INVALID',
                    'CHECKOUT_ID_INVALID',
                    'INVALID_REQUEST',
                    'FIRST_NAME_INVALID',
                    'LAST_NAME_INVALID',
                    'PHONE_NUMBER_INVALID',
                    'DATE_OF_BIRTH_INVALID',
                    'FULFILMENT_TIME_INVALID',
                    'ADDRESS_LINES_INVALID',
                    'LOCALITY_INVALID',
                    'ADMINISTRATIVE_AREA_INVALID',
                    'POSTAL_CODE_INVALID',
                    'GEOLOCATION_INVALID',
                    'DELIVERY_NOTE_INVALID',
                  ])
                  .openapi({
                    description:
                      'A code that identifies the problem type. It will be supported by human-readable documentation that identifies how to resolve the error.',
                  }),
              })
              .openapi({
                description: 'Details about the error that may assist you in resolving the issue.',
                required: ['description', 'errorCode'],
              }),
          )
          .openapi({ description: 'List of errors that may assist you in resolving the issues.' }),
        faultId: z
          .string()
          .openapi({
            description:
              'A value that helps identify this response back to logs, so we can easily find this specific fault.',
          }),
        traceId: z
          .string()
          .openapi({
            description:
              'A value that helps identify the trace back to logs, so that we can easily find what was happening on our system when the fault was generated.',
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A list of values that helps identify this response back to logs, so we can easily find faults.',
        required: ['faultId', 'traceId', 'errors'],
      }),
  })
  .openapi({ description: 'An HTTP 400 error response', required: [] })
  .openapi('CheckoutUpdate400Error')

const CheckoutUpdateRequestSchema = z
  .object({
    customer: z
      .object({
        dateOfBirth: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "Customer's date of birth represented in ISO 8601 format. If a time is submitted, it will be ignored.\n\nRequired in Australia (AU) and New Zealand (NZ) only for fulfilling an order that contain items being purchased that require age verification.\n",
          }),
        firstName: z
          .string()
          .min(1)
          .max(100)
          .nullable()
          .exactOptional()
          .openapi({ description: "Customer's first name. \n\nAlso known as Given Name(s).\n" }),
        lastName: z
          .string()
          .min(0)
          .max(100)
          .nullable()
          .exactOptional()
          .openapi({
            description: "Customer's last name (Optional). \n\nAlso known as Family Name.\n",
          }),
        phoneNumber: z
          .string()
          .min(3)
          .max(16)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "Customer's phone number.\n\nA phone number can be represented in:\n  - E.164 format e.g. +447777111111 or;\n  - Local format of submitted tenant e.g. 07777111111.\n\nE.164 formatted phone numbers are preferred.\n",
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Details of the customer making the purchase.', required: [] }),
    fulfilment: z
      .object({
        location: z
          .object({
            address: z
              .object({
                administrativeArea: z
                  .string()
                  .min(1)
                  .max(50)
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Geographical region of this address. \n\nAlso known as County or State.\n\nRequired in Australia (AU) only for an order to be fulfilled.\n',
                  }),
                lines: z
                  .array(
                    z
                      .string()
                      .min(1)
                      .max(100)
                      .openapi({ description: 'Represents part of a street address.' }),
                  )
                  .min(1)
                  .max(4)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'One or more lines representing the street address.' }),
                locality: z
                  .string()
                  .min(1)
                  .max(50)
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'The locality of this address.\n\nAlso known as Town or City.\n',
                  }),
                postalCode: z
                  .string()
                  .min(1)
                  .max(50)
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Postal code of this address.' }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description: 'The postal address where the customer wants to receive the order.',
                required: [],
              }),
            geolocation: z
              .object({
                latitude: z
                  .number()
                  .openapi({ description: 'The latitude of the geographical location.' }),
                longitude: z
                  .number()
                  .openapi({ description: 'The longitude of the geographical location.' }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The coordinates of a geographical location where the customer wants to receive the order.\n\nRequired in Australia (AU) and New Zealand (NZ) only for an order to be fulfilled.\n',
                required: ['latitude', 'longitude'],
              }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The destination the customer wants to receive the order.\n\nThis only applies to purchases with a delivery service type.\n',
            required: [],
          }),
        time: z
          .object({
            asap: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'If the order should be fulfilled as soon as possible (ASAP).\n\nASAP may not be fulfillable.\n\nDefault is false.\n',
              }),
            scheduled: z
              .object({
                from: z
                  .string()
                  .openapi({
                    description:
                      'Earliest time the customer wants the order to be fulfilled represented in ISO 8601 UTC (Zulu Time).',
                  }),
                to: z
                  .string()
                  .openapi({
                    description:
                      'Latest time the customer wants the order to be fulfilled represented in ISO 8601 UTC (Zulu Time). \n\nThis time must be greater than or equal to the from time.\n',
                  }),
              })
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Scheduled time the customer wants the order to be fulfilled.\n\nThe scheduled time will be ignored if ASAP is selected.\n',
                required: ['from', 'to'],
              }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Time the customer wants to receive the order i.e. when order is fulfilled.',
            required: [],
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'How and when the items will be received by the customer.',
        required: [],
      }),
    notes: z
      .array(
        z
          .object({
            note: z.string().min(0).max(250).openapi({ description: 'The contents of the note.' }),
            type: z.literal('delivery').openapi({ description: 'The type of note.' }),
          })
          .openapi({
            description: 'Instructions about the order that the customer wants to submit.',
            required: ['type', 'note'],
          }),
      )
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Instructions about the order that the customer wants to submit.' }),
  })
  .openapi({
    description:
      'Properties apply to all supported country codes, except where specified.\n\nWe do not support a PATCH request on the root path and a 400 status code will be returned.\n',
    required: [],
  })
  .openapi('CheckoutUpdateRequest')

const CheckoutUpdateResponseSchema = z
  .object({
    isFulfillable: z
      .boolean()
      .openapi({ description: 'Whether the proposed order can be placed.' }),
    issues: z
      .array(CheckoutIssueSchema)
      .min(0)
      .max(18)
      .openapi({
        description:
          'One or more issues associated the proposed order, that may impact whether it can be placed.',
      }),
  })
  .openapi({ required: ['isFulfillable', 'issues'] })
  .openapi('CheckoutUpdateResponse')

const ClaimResolutionSchema = z
  .object({
    decision: z
      .enum(['Accepted', 'PartiallyAccepted', 'Rejected'])
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the claim is accepted, partially accepted or rejected - claim is partially accepted if at least one of the claimed items is accepted',
      }),
    resolvedChannel: z
      .string()
      .exactOptional()
      .openapi({ description: 'Channel which was used to resolved the claim' }),
    resolvedDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date when decision on the claim was submitted' }),
    totalClaimedAccepted: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Total claimed money accepted by the restaurant in smallest unit of relevant currency',
      }),
  })
  .nullable()
  .openapi({
    description: 'Representation of the decision made about a claim',
    example: {
      decision: 'Accepted',
      resolvedChannel: 'PartnerCentre',
      resolvedDate: '2020-05-28T06:40:48.1053368+00:00',
      totalClaimedAccepted: 1900,
    },
    required: [],
  })
  .openapi('ClaimResolution')

const ItemSchema = z
  .object({
    additionalContext: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Comment giving additional context' }),
    decision: z
      .enum(['NotDecided', 'Accepted', 'Rejected'])
      .exactOptional()
      .openapi({
        description:
          'Indicates whether decision on the claimed item was made and what was that decision',
      }),
    id: z.string().exactOptional().openapi({ description: 'Item identifier' }),
    name: z.string().exactOptional().openapi({ description: 'Item name' }),
    quantity: z.number().exactOptional().openapi({ description: 'Quantity of items' }),
    totalClaimed: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total claimed money in smallest unit of relevant currency' }),
    unitPrice: z
      .number()
      .exactOptional()
      .openapi({ description: 'Price of a single unit in smallest unit of relevant currency' }),
  })
  .openapi({
    description: 'Information about an item in the claim',
    example: {
      additionalContext: 'Potato skin was damaged',
      decision: 'Rejected',
      id: 'NJ7iYXNrZXRJdGVtLTM2NTc0GTk2LTMwNDY2LXMzOWJxb3hkb2V1cGR4OXc4ZXZvcnc1',
      name: 'Potato skin',
      quantity: 1,
      totalClaimed: 1900,
      unitPrice: 2000,
    },
    required: [],
  })
  .openapi('Item')

const ItemDecisionSchema = z
  .object({
    decision: z
      .enum(['Accepted', 'Rejected'])
      .exactOptional()
      .openapi({ description: 'Decision made about the item' }),
    id: z.string().exactOptional().openapi({ description: 'Item identifier' }),
  })
  .openapi({
    description: 'Decision on the item',
    example: {
      decision: 'Accepted',
      id: 'NJ7iYXNrZXRJdGVtLTM2NTc0GTk2LTMwNDY2LXMzOWJxb3hkb2V1cGR4OXc4ZXZvcnc1',
    },
    required: [],
  })
  .openapi('ItemDecision')

const JustificationSchema = z
  .object({
    comments: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Comment from the restaurant owner in case they rejected at least one of the items and want to type their own rejection reason',
      }),
    reason: z
      .enum([
        'AlreadyRefunded',
        'ItemReplaced',
        'PartialRefundRequired',
        'WasNotMissing',
        'WillRedeliver',
        'OrderWasHot',
        'OrderWasOnTime',
        'OrderWasPacked',
        'FoodWasIntact',
        'AddExtraItem',
        'Other',
      ])
      .exactOptional()
      .openapi({ description: 'One of the predefined reasons' }),
  })
  .nullable()
  .openapi({
    description: 'The reason of the claim rejection and optional comments from the restaurant',
    example: { comments: 'The food was packed properly', reason: 'Other' },
    required: [],
  })
  .openapi('Justification')

const OrderClaimRestaurantResponseSchema = z
  .object({
    decision: z
      .enum(['Accepted', 'Rejected', 'PartiallyAccepted'])
      .exactOptional()
      .openapi({ description: 'Decision on the claim' }),
    items: z
      .array(ItemDecisionSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Decisions on the items of a claim' }),
    justification: JustificationSchema.exactOptional().openapi({
      description: 'Reasons why of the decision for the claim',
    }),
  })
  .nullable()
  .openapi({
    description: 'Restaurant response for the claim',
    example: {
      decision: 'PartiallyAccepted',
      justification: { comments: 'The food was packed properly', reason: 'Other' },
    },
    required: [],
  })
  .openapi('OrderClaimRestaurantResponse')

const OrderClaimSchema = z
  .object({
    affectedItems: z
      .array(ItemSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Information about the claimed items' }),
    currency: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of currency in ISO 4217 format' }),
    expirationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Date when the claim will be accepted automatically in case the owner of the restaurant ignores it',
      }),
    friendlyOrderReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'Just Eat friendly order reference' }),
    id: z.string().exactOptional().openapi({ description: 'Claim identifier' }),
    issueType: z
      .enum(['Missing', 'Damaged', 'Cold', 'LateOrder', 'FoodNotArrived'])
      .exactOptional()
      .openapi({ description: 'Type of claim' }),
    orderId: z.string().exactOptional().openapi({ description: 'Just Eat order identifier' }),
    resolution: ClaimResolutionSchema.exactOptional().openapi({
      description: 'Representation of the claim resolution',
    }),
    restaurantResponse: OrderClaimRestaurantResponseSchema.exactOptional().openapi({
      description: 'Restaurant response on the claim',
    }),
    state: z
      .enum(['Open', 'Closed'])
      .exactOptional()
      .openapi({ description: 'Indicates whether a decision about the claim was made' }),
    submittedDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date when the claim was submitted' }),
    totalClaimed: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total claimed money in smallest unit of relevant currency' }),
  })
  .openapi({
    description: 'Claim information',
    example: {
      affectedItems: [
        {
          additionalContext: 'Potato skin was damaged',
          decision: 'Rejected',
          id: 'NJ7iYXNrZXRJdGVtLTM2NTc0GTk2LTMwNDY2LXMzOWJxb3hkb2V1cGR4OXc4ZXZvcnc1',
          name: 'Potato skin',
          quantity: 1,
          reference: 'productid%4t56574596',
          totalClaimed: 1900,
          unitPrice: 2000,
        },
        {
          additionalContext: 'Pizza was damaged too',
          decision: 'Accepted',
          id: '123iYXNrZXRJdGVtLTM2NTc0GTk2LTMwNDY2LXMzOWJxb3hkb2V1cGR4OXc4ZXZvcnc1',
          name: 'Pizza',
          quantity: 1,
          reference: 'productid%t5y6574596',
          totalClaimed: 1900,
          unitPrice: 2000,
        },
      ],
      currency: 'GBP',
      expirationDate: '2020-05-22T14:22:11.1053368+00:00',
      friendlyOrderReference: '451226580',
      id: '2f749442-a62a-abcd-8623-04202878e034',
      issueType: 'Damaged',
      orderId: 'r23tqoxdoeupdx9w8evorw',
      resolution: {
        decision: 'PartiallyAccepted',
        resolvedChannel: 'PartnerCentre',
        resolvedDate: '2020-05-28T06:40:48.1053368+00:00',
        totalClaimedAccepted: 1900,
      },
      restaurantResponse: {
        decision: 'PartiallyAccepted',
        justification: { comments: 'The food was packed properly', reason: 'Other' },
      },
      state: 'Closed',
      submittedDate: '2020-05-20T14:22:11.1053368+00:00',
      totalClaimed: 3800,
    },
    required: [],
  })
  .openapi('OrderClaim')

const ClaimResponseSchema = OrderClaimSchema.openapi({
  description: 'Response containing a single claim',
  example: {
    affectedItems: [
      {
        additionalContext: 'Potato skin was damaged',
        decision: 'Rejected',
        id: 'NJ7iYXNrZXRJdGVtLTM2NTc0GTk2LTMwNDY2LXMzOWJxb3hkb2V1cGR4OXc4ZXZvcnc1',
        name: 'Potato skin',
        quantity: 1,
        reference: 'productid%4t56574596',
        totalClaimed: 1900,
        unitPrice: 2000,
      },
      {
        additionalContext: 'Pizza was damaged too',
        decision: 'Accepted',
        id: '123iYXNrZXRJdGVtLTM2NTc0GTk2LTMwNDY2LXMzOWJxb3hkb2V1cGR4OXc4ZXZvcnc1',
        name: 'Pizza',
        quantity: 1,
        reference: 'productid%t5y6574596',
        totalClaimed: 1900,
        unitPrice: 2000,
      },
    ],
    currency: 'GBP',
    expirationDate: '2020-05-22T14:22:11.1053368+00:00',
    friendlyOrderReference: '451226580',
    id: '2f749442-a62a-abcd-8623-04202878e034',
    issueType: 'Damaged',
    orderId: 'r23tqoxdoeupdx9w8evorw',
    resolution: {
      decision: 'PartiallyAccepted',
      resolvedChannel: 'PartnerCentre',
      resolvedDate: '2020-05-28T06:40:48.1053368+00:00',
      totalClaimedAccepted: 1900,
    },
    restaurantResponse: { justification: { comments: 'Not our fault at all', reason: 'Other' } },
    state: 'Closed',
    submittedDate: '2020-05-20T14:22:11.1053368+00:00',
    totalClaimed: 3800,
  },
}).openapi('ClaimResponse')

const ClaimsResponseSchema = z
  .object({
    claims: z.array(OrderClaimSchema).exactOptional().openapi({ description: 'Array with claims' }),
  })
  .openapi({
    description: 'Response containing claims for a restaurant which match the given filter',
    example: {
      claims: [
        {
          currency: 'GBP',
          expirationDate: '2020-05-22T14:22:11.1053368+00:00',
          friendlyOrderReference: '954226580',
          id: 'z2749442-a62a-abcd-8623-04202878e034',
          issueType: 'LateOrder',
          orderId: 'z27tqoxdoeupdx9w8evorw',
          resolution: {
            decision: 'Accepted',
            resolvedChannel: 'OrderPad',
            resolvedDate: '2020-05-28T06:40:48.1053368+00:00',
            totalClaimedAccepted: 4000,
          },
          restaurantResponse: { decision: 'Accepted', justification: null },
          state: 'Closed',
          submittedDate: '2020-05-20T14:22:11.1053368+00:00',
          totalClaimed: 4000,
        },
        {
          affectedItems: [
            {
              additionalContext: null,
              decision: 'NotDecided',
              id: 'NJ7iYXNrZXRJdGVtLTM2NTc0GTk2LTMwNDY2LXMzOWJxb3hkb2V1cGR4OXc4ZXZvcnc1',
              name: 'Potato skin',
              quantity: 1,
              reference: 'productid%4t56574596',
              totalClaimed: 1900,
              unitPrice: 2000,
            },
            {
              additionalContext: null,
              decision: 'NotDecided',
              id: '123iYXNrZXRJdGVtLTM2NTc0GTk2LTMwNDY2LXMzOWJxb3hkb2V1cGR4OXc4ZXZvcnc1',
              name: 'Pizza',
              quantity: 1,
              reference: 'productid%t5y6574596',
              totalClaimed: 1900,
              unitPrice: 2000,
            },
          ],
          currency: 'GBP',
          expirationDate: '2020-05-22T14:22:11.1053368+00:00',
          friendlyOrderReference: '451226580',
          id: '2f749442-a62a-abcd-8623-04202878e034',
          issueType: 'Damaged',
          orderId: 'r23tqoxdoeupdx9w8evorw',
          resolution: null,
          restaurantResponse: null,
          state: 'Open',
          submittedDate: '2020-05-20T14:22:11.1053368+00:00',
          totalClaimed: 3800,
        },
        {
          affectedItems: [
            {
              additionalContext: 'Potato skin was cold',
              decision: 'Rejected',
              id: 'NJ7iYXNrZXRJdGVtLTM2NTc0GTk2LTMwNDY2LXMzOWJxb3hkb2V1cGR4OXc4ZXZvcnc1',
              name: 'Potato skin',
              quantity: 1,
              reference: 'productid%4t56574596',
              totalClaimed: 1900,
              unitPrice: 2000,
            },
          ],
          currency: 'GBP',
          expirationDate: '2020-05-22T14:22:11.1053368+00:00',
          friendlyOrderReference: '151226580',
          id: '1f749442-a62a-abcd-8623-04202878e034',
          issueType: 'Cold',
          orderId: 'a23tqoxdoeupdx9w8evorw',
          resolution: {
            decision: 'Rejected',
            resolvedChannel: 'PartnerCentre',
            resolvedDate: '2020-05-28T06:40:48.1053368+00:00',
            totalClaimedAccepted: 0,
          },
          restaurantResponse: { justification: { comments: null, reason: 'OrderWasHot' } },
          state: 'Closed',
          submittedDate: '2020-05-20T14:22:11.1053368+00:00',
          totalClaimed: 1900,
        },
        {
          affectedItems: [
            {
              additionalContext: 'Potato skin was cold',
              decision: 'Accepted',
              id: 'NJ7iYXNrZXRJdGVtLTM2NTc0GTk2LTMwNDY2LXMzOWJxb3hkb2V1cGR4OXc4ZXZvcnc1',
              name: 'Potato skin',
              quantity: 1,
              reference: 'productid%4t56574596',
              totalClaimed: 1900,
              unitPrice: 2000,
            },
          ],
          currency: 'GBP',
          expirationDate: '2020-05-22T14:22:11.1053368+00:00',
          friendlyOrderReference: '951226580',
          id: 'zf749442-a62a-abcd-8623-04202878e034',
          issueType: 'Cold',
          orderId: 'z23tqoxdoeupdx9w8evorw',
          resolution: {
            decision: 'Accepted',
            resolvedChannel: 'OrderPad',
            resolvedDate: '2020-05-28T06:40:48.1053368+00:00',
            totalClaimedAccepted: 1900,
          },
          restaurantResponse: { justification: null },
          state: 'Closed',
          submittedDate: '2020-05-20T14:22:11.1053368+00:00',
          totalClaimed: 1900,
        },
        {
          affectedItems: [
            {
              additionalContext: 'Potato skin was cold',
              decision: 'Accepted',
              id: 'NJ7iYXNrZXRJdGVtLTM2NTc0GTk2LTMwNDY2LXMzOWJxb3hkb2V1cGR4OXc4ZXZvcnc1',
              name: 'Potato skin',
              quantity: 1,
              reference: 'productid%4t56574596',
              totalClaimed: 1900,
              unitPrice: 2000,
            },
            {
              additionalContext: 'Meat was terribly cold',
              decision: 'Rejected',
              id: 'NJ7iYXNrZXRJdGVtLTM2NTc0GTk2LTMwNDY2LXMzOWJxb3hkb2V1cGR4OXc4ZXZvcnc3',
              name: 'Meat',
              quantity: 1,
              reference: 'productid%4t56574593',
              totalClaimed: 2900,
              unitPrice: 3000,
            },
          ],
          currency: 'GBP',
          expirationDate: '2020-05-22T14:22:11.1053368+00:00',
          friendlyOrderReference: '951226588',
          id: 'zf749442-a62a-abcd-8623-04202878e038',
          issueType: 'Cold',
          orderId: 'z23tqoxdoeupdx9w8evorz',
          resolution: {
            decision: 'PartiallyAccepted',
            resolvedChannel: 'OrderPad',
            resolvedDate: '2020-05-28T06:40:48.1053368+00:00',
            totalClaimedAccepted: 1900,
          },
          restaurantResponse: { justification: null },
          state: 'Closed',
          submittedDate: '2020-05-20T14:22:11.1053368+00:00',
          totalClaimed: 1900,
        },
      ],
    },
    required: [],
  })
  .openapi('ClaimsResponse')

const ClientOrderStateSchema = z
  .enum([
    'AtCounter',
    'InKitchen',
    'Ready',
    'Collected',
    'WithDriver',
    'Delivered',
    'RejectedTooBusy',
    'RejectedTooFar',
    'Cancelled',
    'Received',
    'RejectedNoDriverAvailable',
    'RejectedMenuItemsOutOfStock',
    'RejectedOther',
    'TestOrderDelete',
    'CancelledAcknowledged',
    'CancelledUnacknowledged',
    'CancelledDismissed',
    'Complete',
  ])
  .openapi({ description: 'The state of the client order' })
  .openapi('ClientOrderState')

const CodeTypeSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2)])
  .openapi({ description: '', 'x-enumNames': ['Unknown', 'DynamicSingleUse', 'StaticMultipleUse'] })
  .openapi('CodeType')

const CollectionActionTypeSchema = z
  .enum(['REPLACE', 'APPEND', 'PREPEND', 'REMOVE'])
  .openapi('CollectionActionType')

const CommunicationPreferencesSchema = z
  .object({
    marketing: ChannelSubscriptionsWithDerivedFieldSchema.exactOptional().openapi({
      description: 'The marketing communication preferences.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CommunicationPreferences')

const CommunicationTypesSchema = z.literal('marketing').openapi('CommunicationTypes')

const CompensationReasonCodeSchema = z
  .enum(['Unknown', 'NotSet', 'BeingPrepared', 'OnItsWay', 'Delivered'])
  .openapi({ description: 'Compensation reason code' })
  .openapi('CompensationReasonCode')

const CompensationReasonSchema = z
  .strictObject({
    code: CompensationReasonCodeSchema.exactOptional().openapi({
      description: 'Compensation reason code',
    }),
    comments: z.string().nullable().exactOptional().openapi({ description: 'Additional comments' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Additional description' }),
  })
  .openapi({ required: [] })
  .openapi('CompensationReason')

const MarketingErrorSchema = z
  .strictObject({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specific details about the error that may assist the you in resolving the issue',
      }),
    errorCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A value that helps identify this response back to logs, so we can easily find this specific fault',
      }),
  })
  .openapi({ required: [] })
  .openapi('MarketingError')

const MarketingErrorResponseSchema = z
  .strictObject({
    errors: z
      .array(MarketingErrorSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Underlying errors associated with the error' }),
    faultId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A value that helps identify this response back to logs, so we can easily find this specific fault',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specific details about the error that may assist the you in resolving the issue',
      }),
  })
  .openapi({ 'x-abstract': true, required: [] })
  .openapi('MarketingErrorResponse')

const ConflictMarketingResponseSchema = MarketingErrorResponseSchema.openapi({
  description: '409 Conflict Returned',
  example: {
    faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
    message: 'A marketing campaign already exists with this configuration',
  },
}).openapi('ConflictMarketingResponse')

const ConnectTokenRequestSchema = z
  .object({
    acr_values: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Allows passing in additional authentication related information for the `password` grant type - the following  are special proprietary `acr_values`:\n- `idp:name_of_idp` bypasses the login/home realm screen and forwards the user directly to the selected identity provider (if allowed per client configuration)\n- `tenant:name_of_tenant` can be used to pass a tenant name to the token endpoint',
      }),
    client_id: z.string().openapi({ description: 'client identifier' }),
    client_secret: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The client secret - either in the post body, or as a basic authentication header.',
      }),
    code: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The authorization code (required for `authorization_code` grant type)',
      }),
    code_verifier: z.string().exactOptional().openapi({ description: 'PKCE proof key' }),
    device_code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The device code (required for `urn:ietf:params:oauth:grant-type:device_code` grant type)',
      }),
    grant_type: z
      .enum([
        'authorization_code',
        'client_credentials',
        'password',
        'refresh_token',
        'urn:ietf:params:oauth:grant-type:device_code',
      ])
      .openapi({
        description:
          'The grant type which determines the type of flow. A custom value is also allowed.',
      }),
    password: z
      .string()
      .exactOptional()
      .openapi({ description: 'Resource owner password (required for `password` grant type)' }),
    redirect_uri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required for the `authorization_code` grant type' }),
    refresh_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'The refresh token (required for `refresh_token` grant type)' }),
    scope: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'One or more registered scopes. If not specified, a token for all explicitly  allowed scopes will be issued.',
      }),
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'Resource owner username (required for `password` grant type)' }),
  })
  .openapi({ required: ['client_id', 'grant_type'] })
  .openapi('ConnectTokenRequest')

const ConnectTokenResponseSchema = z
  .object({
    access_token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The access token. This is a JSON web token (JWT) encoded as Base64 URL-encoding. This is returned if the `response_type` included `token`.',
      }),
    expires_in: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of seconds until the access token expires.' }),
    id_token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An ID token. This is a JSON web token (JWT) encoded as Base64 URL-encoding. \nThis is returned if the `response_type` included `id_token`.',
      }),
    scope: z.string().exactOptional().openapi({ description: 'The original scopes you provided.' }),
    token_type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This is always `bearer`, and is returned only  when `token` is specified as a `response_type`.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ConnectTokenResponse')

const ConsumerMarketingPreferenceSchema = z
  .array(
    z
      .object({
        channelName: z
          .enum(['Email', 'Push', 'Sms'])
          .exactOptional()
          .openapi({ description: 'The channel name.' }),
        dateUpdated: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ description: 'The date of the marketing preference change' }),
        isSubscribed: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Should the channel be subscribed to?' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('ConsumerMarketingPreference')

const ConsumerCreateSchema = z
  .object({
    emailAddress: z.email().max(160).openapi({ description: "The consumer's email address" }),
    firstName: z.string().max(160).openapi({ description: "The consumer's first name" }),
    lastName: z.string().max(160).openapi({ description: "The consumer's last name" }),
    marketingPreferences: ConsumerMarketingPreferenceSchema.exactOptional().openapi({
      description: 'The selected marketing preferences for the consumer',
    }),
    password: z
      .string()
      .min(4)
      .max(160)
      .exactOptional()
      .openapi({ description: "The consumer's password" }),
    registrationSource: z
      .enum(['Native', 'Guest'])
      .default('Native')
      .exactOptional()
      .openapi({
        description:
          'The registration source of the consumer. Australia and New Zealand only support Guest',
      }),
  })
  .openapi({
    example: {
      emailAddress: 'consumer@just-eat.com',
      firstName: 'Bob',
      lastName: 'Smith',
      password: 'Pa55word',
      registrationSource: 'Native',
    },
    required: ['emailAddress', 'firstName', 'lastName'],
  })
  .openapi('ConsumerCreate')

const ConsumerCreateResponseSchema = z
  .object({
    token: z.string().openapi({ description: 'The One Time Access Code (OTAC)' }),
    type: z
      .literal('otac')
      .openapi({
        description:
          'The type of token. At the moment, this will only ever be a One Time Access Code (OTAC)\n',
      }),
  })
  .openapi({
    example: { token: 'SKgaDl0wZxnwjNgLxBnU646PDTquWLHOyPuyzidIZIg=', type: 'otac' },
    required: ['type', 'token'],
  })
  .openapi('ConsumerCreateResponse')

const ConsumerErrorResponseSchema = z
  .object({ code: z.int32().exactOptional(), codeText: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ConsumerErrorResponse')

const ConsumerSegmentSchema = z.enum(['All', 'NewToRestaurant']).openapi('ConsumerSegment')

const ConsumerOfferTypeSchema = z
  .enum(['Percent', 'FreeItem', 'Bogof', 'StampCard'])
  .openapi('ConsumerOfferType')

const ConsumerOffersPrioritySchema = z
  .strictObject({
    type: z
      .enum(['Exclusive', 'Stackable', 'Universal'])
      .openapi({
        description:
          'All offers are evaluated based on type and priority value in descending order.\nUniversal offers are always executed. Exclusive offers are evaluated after Universal offers, the first Exclusive offer triggered will return effects\nIf an Exclusive offer is triggered, the Stackable offers will be skipped.',
      }),
    value: z
      .number()
      .openapi({
        description:
          'The offers are evaluated based on priority in descending order. The first triggered will return effects',
      }),
  })
  .openapi({
    example: { type: 'Stackable', value: 1 },
    required: ['value', 'type'],
    title: 'ConsumerOffersPriority',
  })
  .openapi('ConsumerOffersPriority')

const ConsumerOffersProductCategorySchema = z
  .strictObject({
    categoryId: z
      .string()
      .openapi({ description: 'The unique identifier of the product category.' }),
    categoryName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the product category.' }),
    preferableModifierIds: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The collection of preselected modifiers for the items in category.',
      }),
  })
  .openapi({
    example: { categoryId: 'Pizza1234', categoryName: 'Pizza' },
    required: ['categoryId'],
    title: 'ConsumerOffersProductCategory',
  })
  .openapi('ConsumerOffersProductCategory')

const ConsumerOffersProductSchema = z
  .strictObject({
    id: z.string().openapi({ description: 'The unique identifier of the product.' }),
    preferableModifierIds: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'The collection of preselected modifiers for the item.' }),
    showModifiersSelectionDialog: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determinate if modifiers selection dialogue will be shown to customer.',
      }),
  })
  .openapi({
    example: { id: '6 Chicken Nuggets', preferableModifierIds: ['ketchupModifierId'] },
    required: ['id'],
    title: 'ConsumerOffersProduct',
  })
  .openapi('ConsumerOffersProduct')

const ConsumerOfferQualifyingConditionsSchema = z
  .strictObject({
    minimumOrderValue: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The minimum order value required to be eligible for the Offer in smallest unit of relevant currency.',
      }),
    qualifyingProductCategories: z
      .array(ConsumerOffersProductCategorySchema)
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'One of the products from category needed to be included in the basket to make offer applicable',
      }),
    qualifyingProducts: z
      .array(ConsumerOffersProductSchema)
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'One of those products needed to be included in the basket to make offer applicable',
      }),
  })
  .openapi({
    example: {
      minimumOrderValue: 1000,
      qualifyingProductCategories: [{ categoryId: 'Sides111' }],
      qualifyingProducts: [{ id: 'FrenchFriesBig1' }],
    },
    title: 'ConsumerOfferQualifyingConditions',
    required: [],
  })
  .openapi('ConsumerOfferQualifyingConditions')

const ConsumerOfferSchema = z
  .strictObject({
    campaignId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the offer campaign.' }),
    consumerSegment: ConsumerSegmentSchema.openapi({
      description: 'Consumer Segment to which offer applies',
    }),
    offerId: z.string().openapi({ description: 'The unique identifier of the offer.' }),
    offerType: ConsumerOfferTypeSchema.openapi({ description: 'The type of the offer.' }),
    priority: ConsumerOffersPrioritySchema.openapi({
      description:
        'The offers priority dictates the order and combination approach when multiple offers are executed together.',
    }),
    qualifyingConditions: ConsumerOfferQualifyingConditionsSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Conditions that must be met in order to get the offer.' }),
    restaurantId: z
      .string()
      .openapi({ description: 'The unique identifier of the restaurant providing the offers.' }),
  })
  .openapi({
    required: ['offerId', 'restaurantId', 'offerType', 'consumerSegment', 'priority'],
    title: 'ConsumerOffer',
  })
  .openapi('ConsumerOffer')

const ConsumerOfferNotificationSchema = z
  .object({
    campaignId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the offer campaign.' }),
    consumerSegment: ConsumerSegmentSchema.openapi({
      description: 'Consumer Segment to which offer applies',
    }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The description of the offer.' }),
    offerId: z.string().openapi({ description: 'The unique identifier of the offer.' }),
    offerType: ConsumerOfferTypeSchema.openapi({ description: 'The type of the offer.' }),
    restaurantId: z
      .string()
      .openapi({ description: 'The unique identifier of the restaurant providing the offers.' }),
  })
  .openapi({
    example: {
      campaignId: 'CheekyTuesday',
      consumerSegment: 'All',
      description: 'Get one free',
      offerId: '12345c',
      offerType: 'Percent',
      restaurantId: '1234567ds',
    },
    required: ['offerId', 'restaurantId', 'offerType', 'consumerSegment'],
    title: 'ConsumerOfferNotification',
  })
  .openapi('ConsumerOfferNotification')

const ConsumerOfferPromptSchema = z
  .strictObject({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of offer to show in prompt for customer' }),
    header: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The header to show in prompt for customer' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The title to show in prompt for customer' }),
  })
  .openapi({ required: [] })
  .openapi({
    example: {
      description: 'We�ll apply the discount at checkout',
      header: 'Free item',
      title: 'Nice! You get this free with your order',
    },
  })
  .openapi('ConsumerOfferPrompt')

const ConsumerOfferStampCardDiscountSchema = z
  .strictObject({
    discountCode: z
      .string()
      .openapi({
        description: 'The unique code of the discount, acts as a lock object at payment stage',
      }),
    discountValue: z
      .number()
      .openapi({ description: 'The discount value in smallest unit of relevant currency.' }),
  })
  .openapi({ required: ['discountValue', 'discountCode'] })
  .openapi('ConsumerOfferStampCardDiscount')

const ConsumerOfferBogofSchema = ConsumerOfferSchema.and(
  z
    .strictObject({
      productCategories: z
        .array(ConsumerOffersProductCategorySchema)
        .min(1)
        .nullable()
        .exactOptional()
        .openapi({
          description:
            'One of the products from category needed to be included in the basket to make offer applicable.\nThe second occurrence of such product gets 100% discount',
        }),
      products: z
        .array(ConsumerOffersProductSchema)
        .min(1)
        .openapi({
          description:
            'One of those products needed to be included in the basket to make offer applicable.\nThe second occurrence of such product gets 100% discount',
        }),
      prompt: ConsumerOfferPromptSchema.openapi({ description: 'A prompt displayed to consumer' }),
    })
    .openapi({ required: ['products', 'prompt'] }),
)
  .openapi({
    example: {
      campaignId: 'freeIceCream',
      consumerSegment: 'All',
      offerId: '12345sd',
      offerType: 'Bogof',
      products: [{ id: 'iceCreamA' }, { id: 'iceCreamB' }, { id: 'iceCreamC' }],
      prompt: {
        description: 'Ice Cream for free when you order Ice Cream',
        title: 'Nice! You get this free with your order',
      },
      restaurantId: '1234sd',
    },
  })
  .openapi('ConsumerOfferBogof')

const ConsumerOfferFreeItemSchema = ConsumerOfferSchema.and(
  z
    .strictObject({
      freeProduct: ConsumerOffersProductSchema.openapi({
        deprecated: true,
        description:
          'The product that gets 100% discount applied [Deprecated - use freeProducts instead]',
      }),
      freeProducts: z
        .array(ConsumerOffersProductSchema)
        .min(1)
        .exactOptional()
        .openapi({ description: 'One or more of those products gets 100% discount applied' }),
      maximumRedemptions: z
        .number()
        .min(1)
        .exactOptional()
        .openapi({ description: 'The maximum number of discounted items for this offer' }),
      prompt: ConsumerOfferPromptSchema.openapi({ description: 'A prompt displayed to consumer' }),
      qualifyingProducts: z
        .array(ConsumerOffersProductSchema)
        .min(1)
        .openapi({
          deprecated: true,
          description:
            'One of those products needed to be included in the collection of products to make offer applicable [Deprecated - use `qualifyingConditions` instead]',
        }),
    })
    .openapi({ required: ['qualifyingProducts', 'freeProduct', 'prompt'] }),
)
  .openapi({
    example: {
      campaignId: 'freePotato',
      consumerSegment: 'All',
      freeProducts: [{ id: 'PotatoId', preferableModifierIds: ['ketchupModifierId'] }],
      maximumRedemptions: 1,
      offerId: '12345sd',
      offerType: 'FreeItem',
      prompt: {
        description: 'Potato for free when you order Ice Cream',
        title: 'Nice! You get this free with your order',
      },
      qualifyingConditions: {
        qualifyingProducts: [{ id: 'BigMacId' }, { id: 'DoubleBigMacId' }, { id: 'BigMacMenuId' }],
      },
      restaurantId: '1234sd',
    },
  })
  .openapi('ConsumerOfferFreeItem')

const ConsumerOfferPercentSchema = ConsumerOfferSchema.and(
  z
    .strictObject({
      amount: z.number().openapi({ description: 'The percentage value discount' }),
      qualifyingValue: z
        .number()
        .nullable()
        .exactOptional()
        .openapi({
          deprecated: true,
          description:
            'The minimum order value required to be eligible for the Offer in smallest unit of relevant currency. [Deprecated - use `qualifyingConditions` instead]',
        }),
    })
    .openapi({ required: ['amount'] }),
)
  .openapi({ example: { amount: 10, qualifyingConditions: { minimumOrderValue: 1500 } } })
  .openapi('ConsumerOfferPercent')

const ConsumerOfferStampCardSchema = ConsumerOfferSchema.and(
  z
    .strictObject({
      discounts: z
        .array(ConsumerOfferStampCardDiscountSchema)
        .openapi({ description: 'The list of completed stamp card discounts' }),
    })
    .openapi({ required: ['discounts'] }),
).openapi('ConsumerOfferStampCard')

const ConsumerOffersBasketItemSchema = z
  .strictObject({
    productId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The `ProductId` of basket item.' }),
    quantity: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The quantity of basket item.' }),
  })
  .openapi({
    example: { productId: 'BRGR123', quantity: 1 },
    title: 'ConsumerOffersBasketItem',
    required: [],
  })
  .openapi('ConsumerOffersBasketItem')

const ConsumerOffersBasketSchema = z
  .strictObject({
    basketItems: z
      .array(ConsumerOffersBasketItemSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The collection of the basket items.' }),
  })
  .openapi({ title: 'ConsumerOffersBasket', required: [] })
  .openapi('ConsumerOffersBasket')

const ConsumerOffersNotificationsRequestSchema = z
  .strictObject({
    applicableDateTimeUtc: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Overrides the current time for determining whether offers are active.\nEnables offers to be returned that have become\ninactive after the order was added to a consumer's basket.",
        example: '2021-01-20T19:35:13.643Z',
      }),
    restaurantIds: z
      .array(z.string())
      .min(11)
      .max(150)
      .openapi({
        description:
          'The identifiers of the restaurants. Allows offers to be returned for many restaurants.',
      }),
  })
  .openapi({
    example: {
      applicableDateTimeUtc: '2020-04-20T16:20:00.000Z',
      restaurantIds: [
        '123456cc',
        '123456aa',
        '12335bb',
        '12335dd',
        '12335ee',
        '12335ff',
        '12335gg',
        '12335hh',
        '12335ii',
        '12335jj',
        '12335kk',
      ],
    },
    required: ['restaurantIds'],
    title: 'ConsumerOffersNotificationsRequest',
  })
  .openapi('ConsumerOffersNotificationsRequest')

const ConsumerOffersNotificationsResponseSchema = z
  .object({
    offerNotifications: z
      .array(ConsumerOfferNotificationSchema)
      .exactOptional()
      .openapi({
        description:
          'Provide consumer offer notifications for given restaurants, containing offer description but not exact details like discount etc.',
      }),
  })
  .openapi({
    description: 'Holder of Consumer Offer Notifications',
    title: 'ConsumerOffersNotificationsResponse',
    required: [],
  })
  .openapi('ConsumerOffersNotificationsResponse')

const ConsumerOffersRequestSchema = z
  .strictObject({
    applicableDateTimeUtc: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Overrides the current time for determining whether offers are active.\nEnables offers to be returned that for the time in future (e.g. Pre-order)',
        example: '2021-01-20T19:35:13.643Z',
      }),
    consumerId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Global Consumer Id' }),
    consumerOffersBasket: ConsumerOffersBasketSchema.openapi({
      description: 'The consumer basket content',
    }),
    restaurantId: z.string().min(1).openapi({ description: 'The identifier of the restaurant.' }),
  })
  .openapi({
    example: {
      applicableDateTimeUtc: '2020-04-20T16:20:00.000Z',
      consumerOffersBasket: { basketItems: [{ productId: 'BRGR123', quantity: 1 }] },
      restaurantId: 'asd12345',
    },
    required: ['restaurantId', 'consumerOffersBasket'],
    title: 'ConsumerOffersRequest',
  })
  .openapi('ConsumerOffersRequest')

const ConsumerOffersResponseSchema = z
  .object({
    offers: z
      .array(
        z
          .xor([
            ConsumerOfferFreeItemSchema,
            ConsumerOfferPercentSchema,
            ConsumerOfferStampCardSchema,
            ConsumerOfferBogofSchema,
          ])
          .openapi({
            discriminator: {
              mapping: {
                Bogof: '#/components/schemas/ConsumerOffer_Bogof',
                FreeItem: '#/components/schemas/ConsumerOffer_FreeItem',
                Percent: '#/components/schemas/ConsumerOffer_Percent',
                StampCard: '#/components/schemas/ConsumerOffer_StampCard',
              },
              propertyName: 'offerType',
            },
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Provide applicable consumer offers based on provided `restaurantId` and basket content.',
      }),
  })
  .openapi({
    description: 'Holder of consumer offers',
    example: {
      offers: [
        {
          campaignId: 'CheekyTuesday',
          consumerSegment: 'All',
          offerId: '12345sd',
          offerType: 'Percent',
          priority: { type: 'Stackable', value: 1 },
          qualifyingConditions: { minimumOrderValue: 15000 },
          restaurantId: '1234sd',
        },
        {
          consumerSegment: 'All',
          freeProducts: [{ id: '6 Chicken Nuggets', preferableModifierIds: ['ketchupModifierId'] }],
          offerId: '345sd',
          offerType: 'FreeItem',
          priority: { type: 'Stackable', value: 1 },
          prompt: {
            description: '6 Nuggets for free when you order Big Mac',
            title: 'Nice! You get this free with your order',
          },
          qualifyingConditions: {
            qualifyingProducts: [
              { id: 'BigMacId' },
              { id: 'DoubleBigMacId' },
              { id: 'BigMacMenuId' },
            ],
          },
          restaurantId: '1234sd',
        },
        {
          campaignId: 'freeIceCream',
          consumerSegment: 'All',
          offerId: '345345sd',
          offerType: 'Bogof',
          priority: { type: 'Stackable', value: 1 },
          products: [{ id: 'CookieDoughId' }, { id: 'FishFoodId' }, { id: 'ChocFudgeBrownieId' }],
          prompt: {
            description: "Get 2 for 1 on Any Ice Cream Company's 465ml",
            title: 'Nice! You get this free with your order',
          },
          restaurantId: '1234sd',
        },
      ],
    },
    title: 'ConsumerOffersResponse',
    required: [],
  })
  .openapi('ConsumerOffersResponse')

const ConsumerOrderGeopositionSchema = z
  .object({
    latitude: z.float64().exactOptional().openapi({ description: 'The latitude.' }),
    longitude: z.float64().exactOptional().openapi({ description: 'The longitude.' }),
  })
  .openapi({ description: 'A geoposition.', 'x-api-version-from': '2017-10', required: [] })
  .openapi('ConsumerOrderGeoposition')

const ConsumerOrderAddressSchema = z
  .object({
    addressLines: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The lines of the address.' }),
    city: z.string().exactOptional().openapi({ description: 'The city or town.' }),
    countryCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ISO 3166-1 alpha-2 country code.' }),
    locality: z
      .string()
      .exactOptional()
      .openapi({ description: 'The locality, such as a district or suburb, if any.' }),
    location: ConsumerOrderGeopositionSchema.exactOptional(),
    postalCode: z.string().exactOptional().openapi({ description: 'The postal code.' }),
    region: z
      .string()
      .exactOptional()
      .openapi({ description: 'The region, such as a county, province or state.' }),
  })
  .openapi({ description: 'A postal address.', 'x-api-version-from': '2017-10', required: [] })
  .openapi('ConsumerOrderAddress')

const ConsumerOrderApplicationInfoSchema = z
  .object({
    clientIdentifier: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The client identifier associated with the order, if any, such as a device Id or IP address.',
      }),
    feature: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the Just Eat feature that placed the order.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the application that placed the order.' }),
    userAgent: z
      .string()
      .exactOptional()
      .openapi({ description: 'The User Agent of the client that placed the order.' }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'The version of the application that placed the order.' }),
  })
  .openapi({
    description: 'Information about an application used to place an order.',
    'x-api-version-from': '2017-10',
    required: [],
  })
  .openapi('ConsumerOrderApplicationInfo')

const ConsumerOrderBulkDiscountSchema = z
  .object({
    amount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The amount of the bulk discount.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the bulk discount.' }),
    productTypeId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Id of the product type the discount applies to.' }),
  })
  .openapi({ description: 'A bulk discount.', 'x-api-version-from': '2017-10', required: [] })
  .openapi('ConsumerOrderBulkDiscount')

const ConsumerOrderDiscountSchema = z
  .object({
    amount: z.float64().exactOptional().openapi({ description: 'The amount of the discount.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the discount.' }),
  })
  .openapi({ description: 'A discount.', 'x-api-version-from': '2017-10', required: [] })
  .openapi('ConsumerOrderDiscount')

const ConsumerOrderMealPartSchema = z
  .object({
    groupId: z.string().exactOptional().openapi({ description: 'The group Id.' }),
    mealPartId: z.string().exactOptional().openapi({ description: 'The meal part Id.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the meal part.' }),
    optionalAccessories: z
      .array(ConsumerOrderMealAccessorySchema)
      .exactOptional()
      .openapi({ description: 'The optional meal part accessories, if any.' }),
    requiredAccessories: z
      .array(ConsumerOrderMealAccessorySchema)
      .exactOptional()
      .openapi({ description: 'The required meal part accessories, if any.' }),
    synonym: z.string().exactOptional().openapi({ description: 'The synonym of the meal part.' }),
  })
  .openapi({ description: 'A part of a meal.', 'x-api-version-from': '2017-10', required: [] })
  .openapi('ConsumerOrderMealPart')

const ConsumerOrderBasketItemSchema = z
  .object({
    bulkDiscounts: z
      .array(ConsumerOrderBulkDiscountSchema)
      .exactOptional()
      .openapi({ description: 'The bulk discounts, if any.' }),
    combinedPrice: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The combined price for the item, including any accessories and/or discounts.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description for the item.' }),
    discounts: z
      .array(ConsumerOrderDiscountSchema)
      .exactOptional()
      .openapi({ description: 'The discounts, if any.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the item.' }),
    optionalAccessories: z
      .array(ConsumerOrderMealAccessorySchema)
      .exactOptional()
      .openapi({ description: 'The optional meal part accessories, if any.' }),
    parts: z
      .array(ConsumerOrderMealPartSchema)
      .exactOptional()
      .openapi({ description: 'The parts of the meal, if any.' }),
    productId: z.string().exactOptional().openapi({ description: 'The product Id.' }),
    requiredAccessories: z
      .array(ConsumerOrderMealAccessorySchema)
      .exactOptional()
      .openapi({ description: 'The required meal part accessories, if any.' }),
    synonym: z.string().exactOptional().openapi({ description: 'The synonym of the item.' }),
    unitPrice: z.float64().exactOptional().openapi({ description: 'The unit price for the item.' }),
  })
  .openapi({ description: 'An item in a basket.', 'x-api-version-from': '2017-10', required: [] })
  .openapi('ConsumerOrderBasketItem')

const ConsumerOrderOfferSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'The offer Id.' }),
    offerAmount: z.float64().exactOptional().openapi({ description: 'The value of the offer.' }),
    offerType: z.string().exactOptional().openapi({ description: 'The type of the offer.' }),
    qualifyingValue: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The qualifying value for the offer.' }),
  })
  .openapi({
    description: 'An offer applied to a basket.',
    'x-api-version-from': '2017-10',
    required: [],
  })
  .openapi('ConsumerOrderOffer')

const ConsumerOrderBasketSummaryItemSchema: z.ZodType<ConsumerOrderBasketSummaryItemType> = z
  .lazy(() =>
    z
      .object({
        accessories: z
          .array(ConsumerOrderMealAccessorySchema)
          .exactOptional()
          .openapi({ description: 'The accessories in the basket summary item.' }),
        id: z
          .string()
          .exactOptional()
          .openapi({ description: 'The Id of the item, such as a product Id or meal part Id.' }),
        items: z
          .array(ConsumerOrderBasketSummaryItemSchema)
          .exactOptional()
          .openapi({ description: 'The items in the basket summary item.' }),
        name: z.string().exactOptional().openapi({ description: 'The name of the item.' }),
        price: z
          .float64()
          .exactOptional()
          .openapi({ description: 'The price of the item for the associated quantity.' }),
        quantity: z.int32().exactOptional().openapi({ description: 'The quantity of the item.' }),
        synonym: z.string().exactOptional().openapi({ description: 'The synonym of the item.' }),
        unitPrice: z
          .float64()
          .exactOptional()
          .openapi({ description: 'The unit price of the item.' }),
      })
      .openapi({
        description: 'A summarised item in a basket.',
        'x-api-version-from': '2017-10',
        required: [],
      }),
  )
  .openapi('ConsumerOrderBasketSummaryItem')

const ConsumerOrderBasketSummarySchema = z
  .object({
    items: z
      .array(ConsumerOrderBasketSummaryItemSchema)
      .exactOptional()
      .openapi({ description: 'The items in the basket summary.' }),
  })
  .openapi({
    description: 'A summary of the items in the basket for an order.',
    'x-api-version-from': '2017-10',
    required: [],
  })
  .openapi('ConsumerOrderBasketSummary')

const ConsumerOrderTipItemSchema = z
  .object({
    amount: z.float64().exactOptional().openapi({ description: 'The cash value of the tip.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the type of the tip.' }),
    value: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The value of the tip relative to its type, such as the percentage.',
      }),
  })
  .openapi({ description: 'A tip.', 'x-api-version-from': '2017-10', required: [] })
  .openapi('ConsumerOrderTipItem')

const ConsumerOrderBasketInfoSchema = z
  .object({
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ISO-4217 currency code associated with the basket.' }),
    discounts: z
      .record(z.string(), z.float64())
      .exactOptional()
      .openapi({ description: 'The discounts applied to the basket, if any.' }),
    fees: z
      .record(z.string(), z.float64())
      .exactOptional()
      .openapi({ description: 'The fees applied to the basket, if any.' }),
    items: z
      .array(ConsumerOrderBasketItemSchema)
      .exactOptional()
      .openapi({ description: 'The items in the basket.' }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Arbitrary metadata about the basket.' }),
    offers: z
      .array(ConsumerOrderOfferSchema)
      .exactOptional()
      .openapi({ description: 'The offer discounts applied to the basket.' }),
    subtotal: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The subtotal for the basket before any discounts or fees.' }),
    summary: ConsumerOrderBasketSummarySchema.exactOptional(),
    tips: z
      .record(z.string(), ConsumerOrderTipItemSchema)
      .exactOptional()
      .openapi({ description: 'The tips associated with the basket.' }),
    total: z.float64().exactOptional().openapi({ description: 'The total value of the basket.' }),
  })
  .openapi({
    description: 'Information about the items in the basket for an order.',
    'x-api-version-from': '2017-10',
    required: [],
  })
  .openapi('ConsumerOrderBasketInfo')

const ConsumerOrderConsumerInfoSchema = z
  .object({
    contactNumber: z
      .string()
      .exactOptional()
      .openapi({ description: "The consumer's contact number." }),
    deliveryAddress: ConsumerOrderAddressSchema.exactOptional(),
    email: z.string().exactOptional().openapi({ description: "The consumer's email address." }),
    id: z.string().exactOptional().openapi({ description: 'The consumer Id.' }),
    name: z.string().exactOptional().openapi({ description: "The consumer's name." }),
    timeZone: z
      .string()
      .exactOptional()
      .openapi({ description: 'The IANA time zone Id the consumer is located in.' }),
  })
  .openapi({
    description: 'Information about a consumer.',
    'x-api-version-from': '2017-10',
    required: [],
  })
  .openapi('ConsumerOrderConsumerInfo')

const ConsumerOrderConsumerReviewSchema = z
  .object({
    comments: z
      .string()
      .exactOptional()
      .openapi({ description: 'Any comments left by the consumer in the review.' }),
    scores: z
      .record(z.string(), z.float64())
      .exactOptional()
      .openapi({
        description: 'The scores given for the scored attributes of the review by the consumer.',
      }),
  })
  .openapi({
    description: "A consumer's review of an order.",
    'x-api-version-from': '2017-10',
    required: [],
  })
  .openapi('ConsumerOrderConsumerReview')

const ConsumerOrderCuisineInfoSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'The Id of the cuisine.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the cuisine.' }),
    rank: z.int32().exactOptional().openapi({ description: 'The ranking for the cuisine.' }),
  })
  .openapi({
    description: 'Information about a restaurant cuisine.',
    'x-api-version-from': '2017-10',
    required: [],
  })
  .openapi('ConsumerOrderCuisineInfo')

const ConsumerOrderDateTimeRangeSchema = z
  .object({
    end: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The end of the range.' }),
    start: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The start of the range.' }),
  })
  .openapi({
    description: 'A range of date and time values.',
    'x-api-version-from': '2017-10',
    required: [],
  })
  .openapi('ConsumerOrderDateTimeRange')

const ConsumerOrderLinkSchema = z
  .object({
    href: z.string().exactOptional().openapi({ description: 'The URL of the link.' }),
    templated: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'A value indicating whether the URL is templated.' }),
  })
  .openapi({
    description: 'A link to an API resource.',
    'x-api-version-from': '2017-10',
    required: [],
  })
  .openapi('ConsumerOrderLink')

const ConsumerOrderErrorResponseSchema = z
  .object({
    _links: z
      .record(z.string(), ConsumerOrderLinkSchema)
      .exactOptional()
      .openapi({ description: 'The links information, if any.' }),
    detail: z.object({}).exactOptional().openapi({ description: 'The optional error detail.' }),
    errorCode: z.string().exactOptional().openapi({ description: 'The API error code, if any.' }),
    errorId: z.string().exactOptional().openapi({ description: 'The error Id.' }),
    fingerprint: z
      .string()
      .exactOptional()
      .openapi({ description: 'The error fingerprint, if available.' }),
    message: z.string().exactOptional().openapi({ description: 'The error message.' }),
    requestId: z.string().exactOptional().openapi({ description: 'The request Id, if available.' }),
    statusCode: z.int32().exactOptional().openapi({ description: 'The HTTP status code.' }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The timestamp of the error.' }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'The version of the API that generated the error.' }),
  })
  .openapi({ description: 'An error response.', 'x-api-version-from': '2017-10', required: [] })
  .openapi('ConsumerOrderErrorResponse')

const ConsumerOrderImageSchema = z
  .object({
    height: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The optional height of the image, in pixels.' }),
    imageType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of the image, such as a logo.' }),
    uri: z.string().exactOptional().openapi({ description: 'The URI of the image.' }),
    width: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The optional width of the image, in pixels.' }),
  })
  .openapi({ description: 'An image.', 'x-api-version-from': '2017-10', required: [] })
  .openapi('ConsumerOrderImage')

const ConsumerOrderOrderInfoSchema = z
  .object({
    canReorder: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'A value indicating whether the order can be re-ordered.' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time the order was created.' }),
    isAsap: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A value indicating whether the order should be fulfilled as soon as possible.',
      }),
    isForDelivery: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'A value indicating whether the order is for delivery.' }),
    notes: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Any notes associated with the order given by the consumer.' }),
  })
  .openapi({
    description: 'Additional information about an order.',
    'x-api-version-from': '2017-10',
    required: [],
  })
  .openapi('ConsumerOrderOrderInfo')

const ConsumerOrderPaymentItemSchema = z
  .object({
    cardType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The card type, such as VISA, if used.' }),
    deferredFee: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The deferred fee value, if any.', 'x-api-version-from': '2019-05' }),
    fee: z.float64().exactOptional().openapi({ description: 'The payment fee, if any.' }),
    lastCardDigits: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last digits of a payment card, if used.' }),
    paymentMethod: z
      .enum(['None', 'Cash', 'Card', 'AccountCredit', 'Voucher', 'PayPal', 'Interac', 'ApplePay'])
      .exactOptional()
      .openapi({
        description: 'The payment method, such as cash or card.',
        'x-api-version-from': '2017-10',
      }),
    pspName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the Payment Service Provider, if any.' }),
    transactionReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The transaction reference, if any.' }),
    value: z.float64().exactOptional().openapi({ description: 'The payment value.' }),
    voucherCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The voucher code used, if any.', 'x-api-version-from': '2019-05' }),
  })
  .openapi({ description: 'An individual payment.', 'x-api-version-from': '2017-10', required: [] })
  .openapi('ConsumerOrderPaymentItem')

const ConsumerOrderTaxItemSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'The name of the tax.' }),
    rate: z.float64().exactOptional().openapi({ description: 'The tax rate.' }),
    value: z.float64().exactOptional().openapi({ description: 'The value of the tax due.' }),
  })
  .openapi({ description: 'A tax item.', 'x-api-version-from': '2017-10', required: [] })
  .openapi('ConsumerOrderTaxItem')

const ConsumerOrderTotalsSchema = z
  .object({
    accountCredits: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The total amount of account credit(s) applied to the order.' }),
    complimentary: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The total amount of promotional credit(s) applied to the order.' }),
    discounts: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The total amount of discount(s) applied to the order.' }),
    fees: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The total amount of fees applied to the order.' }),
    subtotal: z.float64().exactOptional().openapi({ description: 'The subtotal for the order.' }),
    taxes: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The total amount of taxes applied to the order.' }),
    tips: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The total amount of tips applied to the order.' }),
    totalPaid: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The total paid for the order, after taking into account credit, vouchers etc.',
      }),
    totalToPay: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The total to pay for the order.' }),
    vouchers: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The total amount of any voucher(s) applied to the order.' }),
  })
  .openapi({
    description: 'A class containing payment totals.',
    'x-api-version-from': '2017-10',
    required: [],
  })
  .openapi('ConsumerOrderTotals')

const ConsumerOrderPaymentInfoSchema = z
  .object({
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ISO-4217 currency code associated with the payment.' }),
    fees: z
      .record(z.string(), z.float64())
      .exactOptional()
      .openapi({ description: 'The amount of fees applied to the order.' }),
    paidAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'The date and time the order was paid for, if known.' }),
    payments: z
      .array(ConsumerOrderPaymentItemSchema)
      .exactOptional()
      .openapi({ description: 'The individual payment(s).' }),
    taxes: z
      .record(z.string(), ConsumerOrderTaxItemSchema)
      .exactOptional()
      .openapi({ description: 'The taxes applied to the order.' }),
    totals: ConsumerOrderTotalsSchema.exactOptional(),
  })
  .openapi({
    description: 'Information about a payment.',
    'x-api-version-from': '2017-10',
    required: [],
  })
  .openapi('ConsumerOrderPaymentInfo')

const ConsumerOrderRestaurantCapabilitySchema = z
  .object({
    isCapable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A value indicating whether the restaurant is capable of fulfilling the capability.',
      }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Arbitrary metadata about the capability.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the capability.' }),
  })
  .openapi({
    description: 'A capability of a restaurant.',
    'x-api-version-from': '2018-09',
    required: [],
  })
  .openapi('ConsumerOrderRestaurantCapability')

const ConsumerOrderRestaurantInfoSchema = z
  .object({
    capabilities: z
      .record(z.string(), ConsumerOrderRestaurantCapabilitySchema)
      .exactOptional()
      .openapi({
        description: 'The capabilities of the restaurant.',
        'x-api-version-from': '2018-09',
      }),
    contactNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The contact telephone number for the restaurant.' }),
    cuisines: z
      .array(ConsumerOrderCuisineInfoSchema)
      .exactOptional()
      .openapi({ description: 'The cuisines associated with the restaurant.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The display name of the restaurant.' }),
    id: z.string().exactOptional().openapi({ description: 'The Id of the restaurant.' }),
    images: z
      .record(z.string(), ConsumerOrderImageSchema)
      .exactOptional()
      .openapi({ description: 'The images associated with the restaurant.' }),
    isClosed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'A value indicating whether the restaurant is currently closed.' }),
    isOffline: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'A value indicating whether the restaurant is currently offline.' }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Arbitrary metadata about the restaurant.' }),
    nextClosesAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'The date and time the restaurant next closes, if open.' }),
    nextOpensAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'The date and time the restaurant next opens, if closed.' }),
    postalAddress: ConsumerOrderAddressSchema.exactOptional(),
    seoName: z.string().exactOptional().openapi({ description: 'The SEO name of the restaurant.' }),
    timeZone: z
      .string()
      .exactOptional()
      .openapi({ description: 'IANA time zone Id the restaurant is located in.' }),
  })
  .openapi({
    description: 'Information about a restaurant.',
    'x-api-version-from': '2017-10',
    required: [],
  })
  .openapi('ConsumerOrderRestaurantInfo')

const ConsumerOrderReviewInfoSchema = z
  .object({
    averageScore: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The average score for the attributes of the review.' }),
    canReview: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'A value indicating whether the order can be reviewed.' }),
    comments: z
      .string()
      .exactOptional()
      .openapi({ description: 'Any comments left by the consumer in the review.' }),
    isReviewed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'A value indicating whether the order has been reviewed.' }),
    maximumScore: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The maximum score that can be given to an attribute of the review.',
      }),
    ratingCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The rating code for the review.' }),
    scores: z
      .record(z.string(), z.float64())
      .exactOptional()
      .openapi({ description: 'The scores given for the scored attributes of the review.' }),
  })
  .openapi({
    description: 'Information about the review for an order.',
    'x-api-version-from': '2017-10',
    required: [],
  })
  .openapi('ConsumerOrderReviewInfo')

const ConsumerOrderStatusHistoryItemSchema = z
  .object({
    confidence: z
      .string()
      .exactOptional()
      .openapi({ description: 'The confidence level of the status.' }),
    dueDate: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The due date at the date and time associated with the timestamp, if any.',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The reason for the order's status, if known.\nIf your client does not understand this reason, assume that it has no value.",
        'x-api-version-from': '2019-05',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The timestamp associated with this order status.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The order status at the date and time associated with the timestamp.',
      }),
  })
  .openapi({
    description: 'Information about the status of an order at a specific point in time.',
    'x-api-version-from': '2017-10',
    required: [],
  })
  .openapi('ConsumerOrderStatusHistoryItem')

const ConsumerOrderStatusNotificationsInfoSchema = z
  .object({
    channelKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'The key for the status updates notification channel, if any.' }),
    channelName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the status updates notification channel.' }),
    providerName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the status updates notification provider, such as PubNub.',
      }),
  })
  .openapi({
    description: 'Status updates notification information for an order.',
    'x-api-version-from': '2018-09',
    required: [],
  })
  .openapi('ConsumerOrderStatusNotificationsInfo')

const ConsumerOrderTrackingInfoSchema = z
  .object({
    channelKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'The key for the tracking channel, if any.' }),
    channelName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the tracking channel.' }),
    providerName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the tracking provider, such as PubNub.' }),
  })
  .openapi({
    description: 'Tracking information for an order.',
    'x-api-version-from': '2017-10',
    required: [],
  })
  .openapi('ConsumerOrderTrackingInfo')

const ConsumerOrderUpcomingStatusItemSchema = z
  .object({
    sortOrder: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The sort order of the upcoming status.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The upcoming status for the order.' }),
  })
  .openapi({
    description: 'Information about an upcoming status an order is expected to reach.',
    'x-api-version-from': '2017-10',
    required: [],
  })
  .openapi('ConsumerOrderUpcomingStatusItem')

const ConsumerOrderStatusInfoSchema = z
  .object({
    confidence: z
      .string()
      .exactOptional()
      .openapi({ description: "The confidence level of the order's status." }),
    currentDueDate: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'The current due date of the order, if any.' }),
    delay: z.string().exactOptional().openapi({ description: 'How delayed the order is.' }),
    estimatedCompletion: ConsumerOrderDateTimeRangeSchema.exactOptional(),
    expectPreorderNotificationAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The date and time the restaurant is expected to accept a preorder, if any.',
      }),
    finishedAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The date and time the order was finished, if completed successfully.',
      }),
    history: z
      .array(ConsumerOrderStatusHistoryItemSchema)
      .exactOptional()
      .openapi({ description: "The history of the order's statuses, if available." }),
    initialDueDate: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'The initial due date of the order, if any.' }),
    isActive: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A value indicating whether the status of the order may change further.',
      }),
    isDelayed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'A value indicating whether the order is delayed.' }),
    isDueDateDynamic: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A value indicating whether the current due date was determined\ndynamically, for example from the current location of a delivery driver.',
        'x-api-version-from': '2019-04',
      }),
    isRecent: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'A value indicating whether the order is a recent order.' }),
    notifications: ConsumerOrderStatusNotificationsInfoSchema.exactOptional(),
    statusReason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reason for the status of the order, if known.\nIf your client does not understand this status reason, assume that it has no value.',
        'x-api-version-from': '2019-05',
      }),
    timeZone: z
      .string()
      .exactOptional()
      .openapi({ description: 'IANA time zone Id associated with the order.' }),
    tracking: ConsumerOrderTrackingInfoSchema.exactOptional(),
    upcoming: z
      .array(ConsumerOrderUpcomingStatusItemSchema)
      .exactOptional()
      .openapi({ description: 'The expected upcoming order statuses for the order, if known.' }),
    value: z.string().exactOptional().openapi({ description: 'The current status of the order.' }),
  })
  .openapi({
    description: 'Information about the status of an order.',
    'x-api-version-from': '2017-10',
    required: [],
  })
  .openapi('ConsumerOrderStatusInfo')

const ConsumerOrderOrderSchema = z
  .object({
    _links: z
      .record(z.string(), ConsumerOrderLinkSchema)
      .exactOptional()
      .openapi({ description: 'The links information, if any.' }),
    application: ConsumerOrderApplicationInfoSchema.exactOptional(),
    basket: ConsumerOrderBasketInfoSchema.exactOptional(),
    consumer: ConsumerOrderConsumerInfoSchema.exactOptional(),
    friendlyId: z.string().exactOptional().openapi({ description: 'The friendly order Id.' }),
    id: z.string().exactOptional().openapi({ description: 'The Id of the order.' }),
    information: ConsumerOrderOrderInfoSchema.exactOptional(),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Arbitrary metadata about the order.' }),
    payment: ConsumerOrderPaymentInfoSchema.exactOptional(),
    restaurant: ConsumerOrderRestaurantInfoSchema.exactOptional(),
    review: ConsumerOrderReviewInfoSchema.exactOptional(),
    status: ConsumerOrderStatusInfoSchema.exactOptional(),
    tenant: z
      .string()
      .exactOptional()
      .openapi({ description: 'The tenant associated with the order.' }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The UTC timestamp of the date and time that the response was generated at.',
        'x-api-version-from': '2019-04',
      }),
  })
  .openapi({ description: 'An order.', 'x-api-version-from': '2017-10', required: [] })
  .openapi('ConsumerOrderOrder')

const ConsumerOrderPaginationInfoSchema = z
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'The current number of results.' }),
    links: z
      .record(z.string(), ConsumerOrderLinkSchema)
      .exactOptional()
      .openapi({ description: 'The pagination links.' }),
    token: z
      .string()
      .exactOptional()
      .openapi({ description: 'The pagination token for the next page of results, if any.' }),
    total: z
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
        description: 'The total number of results, if known.',
      }),
  })
  .openapi({
    description: 'Pagination information for a request.',
    'x-api-version-from': '2017-10',
    required: [],
  })
  .openapi('ConsumerOrderPaginationInfo')

const ConsumerOrderOrderHistorySchema = z
  .object({
    _links: z
      .record(z.string(), ConsumerOrderLinkSchema)
      .exactOptional()
      .openapi({ description: 'The links information, if any.' }),
    _pagination: ConsumerOrderPaginationInfoSchema.exactOptional(),
    consumerId: z.string().exactOptional().openapi({ description: 'The Id of the consumer.' }),
    orders: z
      .array(ConsumerOrderOrderSchema)
      .exactOptional()
      .openapi({ description: "The consumer's orders." }),
    tenant: z
      .string()
      .exactOptional()
      .openapi({ description: 'The tenant associated with the consumer.' }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The UTC timestamp of the date and time that the response was generated at.',
        'x-api-version-from': '2019-04',
      }),
  })
  .openapi({
    description: 'The order history of a consumer.',
    'x-api-version-from': '2017-10',
    required: [],
  })
  .openapi('ConsumerOrderOrderHistory')

const ConsumerOrderOrderStatusSchema = z
  .object({
    consumerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Id of consumer associated with the order.' }),
    id: z.string().exactOptional().openapi({ description: 'The Id of the order.' }),
    isForDelivery: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'A value indicating whether the order is for delivery.' }),
    restaurantName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the restaurant associated with the order.' }),
    status: ConsumerOrderStatusInfoSchema.exactOptional(),
    tenant: z
      .string()
      .exactOptional()
      .openapi({ description: 'The tenant associated with the order.' }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The UTC timestamp of the date and time that the response was generated at.',
        'x-api-version-from': '2019-04',
      }),
  })
  .openapi({
    description: 'The status of an order.',
    'x-api-version-from': '2017-10',
    required: [],
  })
  .openapi('ConsumerOrderOrderStatus')

const ConsumerOrderReorderResponseSchema = z
  .strictObject({
    basketId: z.string().exactOptional().openapi({ description: 'The basket Id.' }),
    menuId: z.string().exactOptional().openapi({ description: 'The menu Id.' }),
    restaurantId: z.string().exactOptional().openapi({ description: 'The restaurant Id.' }),
    restaurantSeoName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The restaurant SEO name.' }),
    serviceType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The service type, such as collection or delivery.' }),
    tenant: z.string().exactOptional().openapi({ description: 'The tenant.' }),
    unavailableProductIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The unavailable product Ids.' }),
  })
  .openapi({ description: 'A reorder response.', 'x-api-version-from': '2020-06', required: [] })
  .openapi('ConsumerOrderReorderResponse')

const ConsumerOrdersPlacementLinkSchema = z
  .strictObject({
    href: z.string().exactOptional().openapi({ description: 'The URL of the link.' }),
    templated: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'A value indicating whether the URL is templated.' }),
  })
  .openapi({ description: 'A link to an API resource.', 'x-api-version-from': 1, required: [] })
  .openapi('ConsumerOrdersPlacementLink')

const ConsumerOrdersPlacementErrorResponseSchema = z
  .strictObject({
    _links: z
      .record(z.string(), ConsumerOrdersPlacementLinkSchema)
      .exactOptional()
      .openapi({ description: 'The links information, if any.' }),
    detail: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({ description: 'The optional error detail.' }),
    errorCode: z.string().exactOptional().openapi({ description: 'The API error code.' }),
    errorId: z.string().exactOptional().openapi({ description: 'The API error Id.' }),
    fingerprint: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The error fingerprint, if available.' }),
    message: z.string().nullable().exactOptional().openapi({ description: 'The error message.' }),
    requestId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The request Id, if available.' }),
    statusCode: z.int32().exactOptional().openapi({ description: 'The HTTP status code.' }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The timestamp of the error.' }),
    version: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The version of the API that generated the error.' }),
  })
  .openapi({
    description: 'An error response.',
    example: {
      _links: {},
      errorCode: 'ErrorCode',
      errorId: 'c9e62582-4dbe-4eac-a982-b3fa2cb04fa0',
      message: 'An error occurred.',
      requestId: '8000024c-0002-fe00-b63f-84710c7967bb',
      statusCode: 500,
      timestamp: '2019-04-16T17:52:50.000Z',
      version: '1.0.1012 (377c04c)',
    },
    'x-api-version-from': 1,
    required: [],
  })
  .openapi('ConsumerOrdersPlacementErrorResponse')

const ConsumerOrdersPlacementReferralStateSchema = z
  .enum(['None', 'ReferredByWeb'])
  .openapi({ description: 'Order referral source', 'x-api-version-from': 1 })
  .openapi('ConsumerOrdersPlacementReferralState')

const ConsumerOrdersPlacementRequestV1Schema = z
  .strictObject({
    applicationId: z
      .int32()
      .openapi({ description: 'The Id of application that is placing the order.' }),
    applicationName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The name of application that is placing the order.' }),
    applicationVersion: z
      .string()
      .openapi({ description: 'The version of application that is placing the order.' }),
    basketId: z.string().openapi({ description: 'The basket Id.' }),
    customerNotes: z
      .record(z.string(), z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Dictionary of the customer notes to add to the order. The keys of the dictionary are the notes capabilities that the restaurant has.',
      }),
    deviceId: z
      .string()
      .openapi({ description: 'The identifier/ip of the device that is placing the order.' }),
    deviceName: z
      .string()
      .openapi({ description: 'The name of the device that is placing the order.' }),
    referralState: ConsumerOrdersPlacementReferralStateSchema.exactOptional().openapi({
      description: 'Order referral source',
    }),
    removedIngredientsEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A value indicating whether the basket contains removed ingredients.',
      }),
  })
  .openapi({
    description: 'An object representing the request to place an order for a given basket Id.',
    example: {
      applicationId: 4,
      applicationVersion: 'android-test-version',
      basketId: 'basket_gh23i_PS4_',
      customerNotes: {
        NoteForDriver: 'Call me when you get here',
        NoteForRestaurant: 'No mayonnaise',
      },
      deviceId: 'Swagger-DeviceId',
      deviceName: 'Swagger-DeviceName',
      referralState: 'ReferredByWeb',
      removedIngredientsEnabled: false,
    },
    required: ['basketId', 'applicationId', 'applicationVersion', 'deviceId', 'deviceName'],
    'x-api-version-from': 1,
    'x-api-version-to': 1,
  })
  .openapi('ConsumerOrdersPlacementRequestV1')

const ConsumerOrdersPlacementRequestV2Schema = z
  .strictObject({
    basketId: z.string().openapi({ description: 'The basket Id.' }),
    customerNotes: z
      .record(z.string(), z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Dictionary of the customer notes to add to the order. The keys of the dictionary are the notes capabilities that the restaurant has.',
      }),
    referralState: ConsumerOrdersPlacementReferralStateSchema.exactOptional().openapi({
      description: 'Order referral source',
    }),
  })
  .openapi({
    description: 'An object representing the request to place an order for a given basket Id.',
    example: {
      basketId: 'basket_gh23i_PS4_',
      customerNotes: {
        NoteForDriver: 'Call me when you get here',
        NoteForRestaurant: 'No mayonnaise',
      },
      referralState: 'ReferredByWeb',
    },
    required: ['basketId'],
    'x-api-version-from': 2,
  })
  .openapi('ConsumerOrdersPlacementRequestV2')

const ConsumerOrdersPlacementResponseSchema = z
  .strictObject({
    friendlyOrderId: z.string().exactOptional().openapi({ description: 'The friendly order Id.' }),
    orderId: z.string().exactOptional().openapi({ description: 'The id of the order.' }),
  })
  .openapi({ description: 'An order placement response.', 'x-api-version-from': 1, required: [] })
  .openapi('ConsumerOrdersPlacementResponse')

const CourierFeedbackRequestSchema = z
  .object({
    additionalComment: z
      .string()
      .max(210)
      .nullable()
      .exactOptional()
      .openapi({ description: 'An additional free form comment accompanying the feedback' }),
    isPositiveFeedback: z
      .boolean()
      .openapi({ description: 'A flag to determine if the feedback is overall positive' }),
    reasons: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of reasons describing the feedback' }),
  })
  .openapi({
    example: {
      additionalComment: 'Went above and beyond',
      isPositiveFeedback: true,
      reasons: ['had thermal bag', 'friendly'],
    },
    required: ['isPositiveFeedback'],
  })
  .openapi('CourierFeedbackRequest')

const CourierStatusSchema = z
  .enum([
    'ONBOARDING',
    'STALLED',
    'SURPLUS',
    'ACTIVE',
    'INACTIVE',
    'RELIABILITY_ISSUES',
    'VEHICLE_ISSUES',
    'INCIDENT_ISSUES',
    'OTHER_ACCOUNT_ISSUES',
    'EXPIRED_DOCUMENTS',
    'REJECTED',
    'WITHDRAWN',
    'BANNED',
    'LEFT_NETWORK',
  ])
  .openapi({
    description:
      'The courier application status. A courier could have one of these status associated with their application, here is a brief example of each status. <p>`ON-BOARDING` - Courier is actively trying to be on-boarded and will progress through the courier on-boarding program</p><p>`STALLED` - Courier has not proceeded with a step inside the courier on-boarding program for 14 days and will not to proceed further</p><p>`SURPLUS` - Zone has been closed for On-boarding; courier cannot proceed until zone on-boarding re-opens</p><p>`ACTIVE` - Courier has interacted with the app within the last two weeks and will be automatically scheduled based on their availability, receive notifications and may complete orders</p><p>`INACTIVE` - Courier has not interacted with the app for at least two weeks, and will not be scheduled for shifts. May interact with the app to convert their status to active, and be eligible for shifts and deliveries</p><p>`RELIABILITY_ISSUES` - No longer in use, historically account was suspended due to frequent flakes or rejected orders</p><p>`VEHICLE_ISSUES` - Account suspended due to reported vehicle problems, but may reactivate by contacting courier support</p><p>`INCIDENT_ISSUES` - Account suspended indefinitely due to significant concern (used exclusively by Incidents team)</p><p>`OTHER_ACCOUNT_ISSUES` - General account suspension, usually in connection with problems not categorised under regular courier status</p><p>`EXPIRED_DOCUMENTS` - General account suspension, typically for expired right to work documentation</p><p>`REJECTED` - Applicant did not meet minimum requirements for access to the network</p><p>`WITHDRAWN` - Applicant decided not to proceed with onboarding</p><p>`BANNED` - Courier’s access to the network was revoked following escalation</p><p>`LEFT_NETWORK` - Courier voluntarily left the network</p>',
  })
  .openapi('CourierStatus')

const JobStatusSchema = z
  .enum([
    'UNASSIGNED',
    'ASSIGNED_PENDING_ACCEPTED',
    'ASSIGNED',
    'ACCEPTED',
    'PARKING',
    'ARRIVED',
    'ENTERED',
    'COMPLETED',
  ])
  .openapi({ description: 'All possible job status during a delivery process.' })
  .openapi('JobStatus')

const OrderCancelledSchema = z
  .object({
    cancellationTime: z
      .number()
      .exactOptional()
      .openapi({ description: 'Current timestamp for the cancelled order.', example: 1593444834 }),
    collectJobStatus: JobStatusSchema.exactOptional().openapi({
      description: 'The collect job status for the cancelled order.',
    }),
    courierId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Courier identifier for the cancelled order.',
        example: '53c3afb5-fcs5-4941-be6d-2179f812sc8d',
      }),
    deliveryId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Deliver identifier for the cancelled order.',
        example: '53c3afb5-fcs5-4941-be6d-2179f812sc8d',
      }),
    isAlcoholDelivery: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The cancelled order contains alcoholic products when true.' }),
    isCashPayment: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The cancelled order was cash payment when true.' }),
    orderNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Order number for the cancelled order.', example: '10113445' }),
    restaurantName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Restaurant name for the cancelled order.', example: 'MacDonalds' }),
  })
  .openapi({
    description: 'The order cancelled object holds the details of a cancelled order.',
    required: [],
  })
  .openapi('OrderCancelled')

const DoNotUseStatusSchema = z
  .enum(['IN_USE', 'NOT_IN_USE', 'UNRESPONSIVE', 'PAUSE_ORDERS', 'CANCELLATION'])
  .openapi({ description: 'The usability status of a courier' })
  .openapi('DoNotUseStatus')

const SyncFlexStateTypeSchema = z
  .enum(['CODE_RED', 'OPEN', 'SEEKING', 'CLOSED'])
  .openapi({
    description:
      '<p>The flex state type changes according to the exponential moving average and is used as a reference to bring more couriers to suffice the demand in a given delivery zone.</p> <p>If the flex state type is "Off", it means no shifts will be offered for the delivery zone.</p> <p>If the state is "CLOSED", only scheduled shifts will be allowed for the delivery zone.</p> <p>If the state is "SEEKING", the shift offers are going to be made across the courier network in order to suffice the current demand.</p> <p>If the state is "OPEN", it means demand is high and couriers from all over the courier network are allowed to create shifts for themselves to suffice the current demand.</p> <p>If the state is "CODE_RED", it means not only can everyone create shifts for themselves for the delivery zone but also couriers from other delivery zones might reallocate to help suffice the demand of that particular delivery zone.</p>',
  })
  .openapi('SyncFlexStateType')

const CourierZoneFlexStateSchema = z
  .object({
    deliveryZoneId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Delivery zone identifier for flex state.',
        example: '53c3afb5-fcs5-4941-be6d-2179f812sc8d',
      }),
    deliveryZoneName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Delivery zone name for flex state.', example: 'Winnipeg SW' }),
    flexAvailable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flex states are enabled when true' }),
    flexStateType: SyncFlexStateTypeSchema.exactOptional().openapi({
      description:
        '<p>The flex state type changes according to the exponential moving average and is used as a reference to bring more couriers to suffice the demand in a given delivery zone.</p> <p>If the flex state type is "Off", it means no shifts will be offered for the delivery zone.</p> <p>If the state is "CLOSED", only scheduled shifts will be allowed for the delivery zone.</p> <p>If the state is "SEEKING", the shift offers are going to be made across the courier network in order to suffice the current demand.</p> <p>If the state is "OPEN", it means demand is high and couriers from all over the courier network are allowed to create shifts for themselves to suffice the current demand.</p> <p>If the state is "CODE_RED", it means not only can everyone create shifts for themselves for the delivery zone but also couriers from other delivery zones might reallocate to help suffice the demand of that particular delivery zone.</p>',
    }),
  })
  .openapi({
    description:
      'The courier zone flex state object, contains the flex state type and the flex availability status for a given delivery zone.',
    required: [],
  })
  .openapi('CourierZoneFlexState')

const FeesSchema = z
  .object({
    bonuses: z
      .array(BonusSummarySchema)
      .length(1)
      .exactOptional()
      .openapi({
        description:
          'List of bonuses that may be granted to the courier under specific situations.',
      }),
    deliveryFee: z
      .number()
      .exactOptional()
      .openapi({ description: 'Delivery fee paid by the customer', example: 500 }),
    driveScoreSubsidy: z
      .number()
      .exactOptional()
      .openapi({ description: 'Drive score subsidy paid to courier', example: 200 }),
    jobPay: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Job pay is the sum of the pay components subsidy, drive score subsidy and delivery fee.',
        example: 100,
      }),
    reimbursements: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Reimbursements paid to courier. This might occur in the event of an order cancellation, order other refundable reasons.',
        example: 100,
      }),
    subsidy: z
      .number()
      .exactOptional()
      .openapi({ description: 'Skip subsidy paid to courier', example: 90 }),
    tip: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Tip the courier might get from customers when an order is placed',
        example: 180,
      }),
  })
  .openapi({ description: 'The calculated courier payment components.', required: [] })
  .openapi('Fees')

const JobTypeSchema = z
  .enum(['COLLECT', 'DELIVER'])
  .openapi({
    description:
      'The job type classifies the type of job assigned to the courier. When an order is placed by the customer, two jobs are created for the courier, a collect job and a deliver job, basically the courier have to complete both jobs, first the collect job, which is the one where the order is collected from the restaurant and the deliver job as the job of delivering the order to the customer.',
  })
  .openapi('JobType')

const SyncPaymentTypeSchema = z
  .enum(['PAID', 'UNPAID'])
  .openapi({ description: 'The order payment status.' })
  .openapi('SyncPaymentType')

const JobDetailsSchema = z
  .object({
    alcoholDelivery: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The order contains alcoholic products when true.' }),
    amount: z
      .number()
      .exactOptional()
      .openapi({
        description:
          "The courier's balance regarding the job. When cash orders happen usually the courier pays out of his pocket, that would add credit to him until he's paid in full.",
        example: 0,
      }),
    courierId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Courier identifier for the job details',
        example: '61376a78-12e1-4f11-bba2-2097a65s2d75',
      }),
    deliveryId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Delivery identifier for the job.',
        example: '61376a78-12e1-4f11-bba2-2097a65s2d75',
      }),
    destination: AddressSchema.exactOptional().openapi({
      description: 'The job address complete information.',
    }),
    distance: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The distance between the courier location and the job destination.',
      }),
    fees: FeesSchema.exactOptional().openapi({
      description: 'The calculated components of the courier payment for the job.',
    }),
    groceryDelivery: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The order contains grocery delivery when true.' }),
    jobType: JobTypeSchema.exactOptional().openapi({
      description:
        'The job type classifies the type of job assigned to the courier. When an order is placed by the customer, two jobs are created for the courier, a collect job and a deliver job, basically the courier have to complete both jobs, first the collect job, which is the one where the order is collected from the restaurant, finally the deliver job as the job of delivering the order to the customer.',
    }),
    orderNumber: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Incrementing number generated for each particular order.',
        example: '10113045',
      }),
    paymentType: SyncPaymentTypeSchema.exactOptional().openapi({
      description: 'The order payment status associated with the job.',
    }),
    restaurantName: z
      .string()
      .exactOptional()
      .openapi({ description: "Restaurant's name.", example: 'MacDonalds' }),
    status: JobStatusSchema.exactOptional().openapi({
      description: 'All the possible job status that might occur during a delivery process.',
    }),
    time: z
      .number()
      .exactOptional()
      .openapi({ description: 'Job creation time stamp.', example: 1593444834 }),
  })
  .openapi({
    description: 'The details of a job which may be assigned to a courier for delivery.',
    required: [],
  })
  .openapi('JobDetails')

const OrderAcceptanceTimesSchema = z
  .object({
    currentSystemTimestamp: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The time the delivery offer was made to the courier.',
        example: 1593444834,
      }),
    expirationTimestamp: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'The time when the offer to the courier will expire. Usually the courier has 60 seconds to accept a new offer.',
        example: 1593444834,
      }),
    viewedTimestamp: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The time the delivery offer was viewed by the courier',
        example: 1593444834,
      }),
  })
  .openapi({
    description: 'The acceptance times used to present the offer to the courier.',
    required: [],
  })
  .openapi('OrderAcceptanceTimes')

const ShiftTypeSchema = z
  .enum(['REGULAR', 'ON_CALL', 'OVERFLOW', 'ALCOHOL_ELIGIBLE', 'UNKNOWN'])
  .openapi({ description: 'The types of shifts available for the couriers.' })
  .openapi('ShiftType')

const VehicleSchema = z
  .enum(['CAR', 'BICYCLE', 'TRICYCLE', 'VAN', 'TRUCK'])
  .openapi({ description: 'All The types of vehicle available.' })
  .openapi('Vehicle')

const ShiftSchema = z
  .object({
    deliveryZoneId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Delivery zone id the shift was created for.',
        example: '53c3afb5-fcs5-4941-be6d-2179f812sc8d',
      }),
    endDate: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp for when the shift was ended.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Shift identifier.',
        example: '53c3afb5-fcs5-4941-be6d-2179f812sc8d',
      }),
    shiftType: ShiftTypeSchema.exactOptional().openapi({
      description: 'Type of shift the courier is on',
    }),
    startDate: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp for when the shift was started.' }),
    vehicle: VehicleSchema.exactOptional().openapi({ description: 'Type of vehicle on shift' }),
  })
  .openapi({
    description: 'The shift object associated with a courier on a courier sync payload update.',
    required: [],
  })
  .openapi('Shift')

const TopUpPromotionSchema = z
  .object({
    currentAcceptanceRate: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The current order acceptance rate calculated for the courier.',
        example: 9500,
      }),
    requiredAcceptanceRate: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'The required acceptance rate the courier should have to be eligible for top up bonus subsidy.',
        example: 8000,
      }),
    showAcceptanceRate: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enables showing the courier acceptance rate when true' }),
  })
  .openapi({ description: 'The zone profile object for a given delivery zone.', required: [] })
  .openapi('TopUpPromotion')

const CourierSyncSchema = z
  .object({
    cancelledOrderSummaries: z
      .array(OrderCancelledSchema)
      .length(1)
      .exactOptional()
      .openapi({
        description: 'List with a summary of all the cancelled orders associated with the courier.',
      }),
    checkedInState: CheckedInStateSchema.exactOptional().openapi({
      description: 'The state of a courier on a shift. A courier might be checked in or not.',
    }),
    doNotUseStatus: DoNotUseStatusSchema.exactOptional().openapi({
      description: 'The courier usability status.',
    }),
    earlyCheckoutAvailable: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'The possibility of an early checkout of the shift is available when true.',
      }),
    firstName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'First name of the courier in which the updated sync payload was requested for.',
        example: 'John',
      }),
    flexStateForAssignedZones: z
      .array(CourierZoneFlexStateSchema)
      .length(2)
      .exactOptional()
      .openapi({
        description:
          'List of flex state types for each delivery zone the courier is currently on a delivery process or have already delivered orders.',
      }),
    isLiveFlexStatesAvailable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The live flex states are enabled when true.' }),
    jobs: z
      .array(JobDetailsSchema)
      .length(2)
      .exactOptional()
      .openapi({ description: 'The list of jobs assigned to the courier.' }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Last name of the courier in which the updated sync payload was requested for.',
        example: 'Doe',
      }),
    localSaveSeconds: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Static value with the amount of seconds the application is supposed to save a fresh courier location. The logic implemented expects the application to save a new location when the elapsed seconds is greater equal than local send seconds.',
        example: 5,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of the courier in which the updated sync payload was requested for.',
        example: 'John Doe',
      }),
    orderAcceptanceTimes: OrderAcceptanceTimesSchema.exactOptional().openapi({
      description: 'The acceptance times used to present the offer to the courier.',
    }),
    remainingJobs: z
      .number()
      .exactOptional()
      .openapi({ description: 'Amount of remaining jobs assignable to the courier.', example: 2 }),
    serverGateMeters: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Static value with the distance in meters the application is supposed to send a fresh location to the server. The logic implemented expects the application to send a new location to the server when the distance to the previous location is greater equal than server gate meters.',
        example: 0,
      }),
    serverSendSeconds: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Static value with the amount of seconds the application is supposed to send a fresh location to the server. The logic implemented expects the application to send a new location to the server when the elapsed seconds is greater equal than server send seconds.',
        example: 60,
      }),
    shift: ShiftSchema.exactOptional().openapi({
      description: 'The shift details in which the courier is signed up for.',
    }),
    status: CourierStatusSchema.exactOptional().openapi({
      description: 'The courier application status.',
    }),
    timestamp: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Current timestamp for the courier sync updated payload.',
        example: 1593444834,
      }),
    timezone: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Time zone in which the courier shift was started.',
        example: 'GMT-6',
      }),
    topUpPromotion: TopUpPromotionSchema.exactOptional().openapi({
      description: 'Calculated top up promotion settings for the courier.',
    }),
    totalDeliveries: z
      .number()
      .exactOptional()
      .openapi({ description: 'Number of deliveries completed by the courier.', example: 11 }),
  })
  .openapi({
    description:
      'The courier sync payload holds the updated values for deliveries, personal information, location and shifts associated with a particular courier.',
    required: [],
  })
  .openapi('CourierSync')

const CreateAttemptedDeliveryQuerySchema = z
  .object({
    ReasonCode: z
      .enum(['ProblemWithAddress', 'NoAnswer'])
      .exactOptional()
      .openapi({ description: 'The reason the attempted delivery event was created' }),
  })
  .openapi({ example: { ReasonCode: 'ProblemWithAddress' }, required: [] })
  .openapi('CreateAttemptedDeliveryQuery')

const CreateCancellationQuerySchema = z
  .strictObject({
    comments: z.string().nullable().exactOptional().openapi({ description: 'Additional comments' }),
    reasonCode: z
      .enum([
        'rest_cancelled_customer_requested',
        'rest_cancelled_customer_absent',
        'rest_cancelled_out_of_stock',
        'rest_cancelled_drivers_unavailable',
        'rest_cancelled_fake_order',
        'rest_cancelled_too_busy',
        'rest_cancelled_other',
      ])
      .nullable()
      .exactOptional()
      .openapi({ description: 'Reason for order cancellation' }),
  })
  .openapi({ required: [] })
  .openapi('CreateCancellationQuery')

const CreateModifierSchema = z
  .object({ ModifierId: z.string().exactOptional(), Quantity: z.number().exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateModifier')

const CreateModifierGroupSchema = z
  .object({
    ModifierGroupId: z.string().exactOptional(),
    Modifiers: z.array(CreateModifierSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateModifierGroup')

const CreateRemovedIngredientSchema = z
  .object({ Details: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateRemovedIngredient')

const CreateProductSchema = z
  .object({
    Date: z.string().exactOptional().openapi({ description: '`YYYY-MM-DDThh:mm:ssZ (UTC)`' }),
    ModifierGroups: z.array(CreateModifierGroupSchema).nullable().exactOptional(),
    ProductId: z.string().exactOptional(),
    Quantity: z.number().exactOptional(),
    RemovedIngredients: z.array(CreateRemovedIngredientSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateProduct')

const CreateDealGroupSchema = z
  .object({
    DealGroupId: z.string().exactOptional(),
    Products: z.array(CreateProductSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDealGroup')

const CreateDealSchema = z
  .object({
    Date: z.string().exactOptional().openapi({ description: '`YYYY-MM-DDThh:mm:ssZ (UTC)`' }),
    DealGroups: z.array(CreateDealGroupSchema).exactOptional(),
    ProductId: z.string().exactOptional(),
    Quantity: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDeal')

const CreateGeoLocationSchema = z
  .object({ Latitude: z.number().exactOptional(), Longitude: z.number().exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateGeoLocation')

const CreateLocationSchema = z
  .object({
    GeoLocation: CreateGeoLocationSchema.nullable()
      .exactOptional()
      .openapi({
        description: 'Not available across platform yet, but applied for future proofing.',
      }),
    ZipCode: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateLocation')

const UpdateModifierRequestSchema = z
  .object({
    AdditionPrice: z.float64().exactOptional().openapi({ description: 'Additional price' }),
    Id: z.string().exactOptional().openapi({ description: 'Id' }),
    Name: z.string().exactOptional().openapi({ description: 'Name' }),
    Variations: z
      .array(VariationModifierResponseSchema)
      .exactOptional()
      .openapi({ description: 'Variations permitted' }),
  })
  .openapi({
    example: {
      Id: '1',
      Name: 'Green',
      Variations: [
        {
          AdditionPrice: 0.3,
          ModifierGroupId: '2',
          Selected: true,
          VariationId: '3',
          VariationName: 'Standard',
        },
      ],
    },
    required: [],
  })
  .openapi('UpdateModifierRequest')

const UpdateModifierGroupRequestSchema = z
  .object({
    Id: z.string().exactOptional().openapi({ description: 'Id' }),
    Modifiers: z
      .array(UpdateModifierRequestSchema)
      .exactOptional()
      .openapi({ description: 'Modifiers within this group' }),
    Name: z.string().exactOptional().openapi({ description: 'Name' }),
  })
  .openapi({
    example: {
      Id: '13',
      Modifiers: [
        {
          Id: '1',
          Name: 'Green',
          Variations: [
            {
              AdditionPrice: 0.3,
              ModifierGroupId: '2',
              Selected: true,
              VariationId: '3',
              VariationName: 'Standard',
            },
          ],
        },
        {
          Id: '2',
          Name: 'Medium',
          Variations: [
            {
              AdditionPrice: 0.3,
              ModifierGroupId: '2',
              Selected: true,
              VariationId: '3',
              VariationName: 'Standard',
            },
          ],
        },
        {
          Id: '3',
          Name: 'Spicy',
          Variations: [
            {
              AdditionPrice: 0.3,
              ModifierGroupId: '2',
              Selected: true,
              VariationId: '3',
              VariationName: 'Standard',
            },
          ],
        },
      ],
      Name: 'Salsas',
    },
    required: [],
  })
  .openapi('UpdateModifierGroupRequest')

const UpdateMenuItemVariationRequestSchema = z
  .object({
    Id: z.string().exactOptional().openapi({ description: 'Id' }),
    Name: z.string().exactOptional().openapi({ description: 'Name' }),
    Price: z.float64().exactOptional().openapi({ description: 'Price' }),
  })
  .openapi({ example: { Id: '12', Name: 'Extra-mega-large', Price: 50 }, required: [] })
  .openapi('UpdateMenuItemVariationRequest')

const CreateMenuItemRequestSchema = z
  .object({
    Category: CategoryRequestSchema.exactOptional().openapi({
      description: 'Category of the Menu Item',
    }),
    Description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the Menu Item' }),
    HasAllergens: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the menu item has any allergens' }),
    Labels: z.array(z.string()).exactOptional().openapi({ description: 'Labels of the Menu Item' }),
    Name: z.string().openapi({ description: 'Name of the Menu Item' }),
    OptionGroups: z
      .array(UpdateModifierGroupRequestSchema)
      .exactOptional()
      .openapi({ description: 'A list of options groups of the Menu Item' }),
    PreferenceGroups: z
      .array(UpdateModifierGroupRequestSchema)
      .exactOptional()
      .openapi({ description: 'A list of preference groups of the Menu Item' }),
    ReceiptNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Receipt number or kitchen number of the Menu Item' }),
    Variations: z
      .array(UpdateMenuItemVariationRequestSchema)
      .exactOptional()
      .openapi({ description: 'Any variations of the Menu Item' }),
  })
  .openapi({
    example: {
      Category: { Id: '12', Name: 'Pizzas' },
      Description: 'A cheesy pizza, covered in cheese, with extra cheesy bits',
      HasAllergens: false,
      Labels: ['Vegetarian'],
      Name: 'Cheese Pizza',
      OptionGroups: [
        {
          Id: '1',
          Modifiers: [
            {
              AdditionPrice: 0.51,
              Id: '123',
              Name: 'Garlic',
              Variations: [
                {
                  AdditionalPrice: 0.12,
                  ModifierGroupId: '123',
                  Selected: true,
                  VariationId: '1',
                  VariationName: 'Small',
                },
                {
                  AdditionalPrice: 0.23,
                  ModifierGroupId: '123',
                  Selected: true,
                  VariationId: '2',
                  VariationName: 'Large',
                },
              ],
            },
          ],
          Name: 'Crusts',
        },
      ],
      PreferenceGroups: [
        {
          Id: '1',
          Modifiers: [
            {
              AdditionPrice: 0.51,
              Id: '123',
              Name: 'More cheese',
              Variations: [
                {
                  AdditionalPrice: 0.12,
                  ModifierGroupId: '123',
                  Selected: true,
                  VariationId: '1',
                  VariationName: 'Small',
                },
                {
                  AdditionalPrice: 0.23,
                  ModifierGroupId: '123',
                  Selected: true,
                  VariationId: '2',
                  VariationName: 'Large',
                },
              ],
            },
          ],
          Name: 'Toppings',
        },
      ],
      ReceiptNumber: '123a',
      Variations: [
        { Id: '1', Name: 'Small', Price: 1 },
        { Id: '2', Name: 'Large', Price: 2.5 },
      ],
    },
    required: ['Name'],
  })
  .openapi('CreateMenuItemRequest')

const CreateMessageModelSchema = z
  .object({
    city: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'City this order is located in.',
        example: 'london',
      }),
    countryCode: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: '2 letter ISO code for the country this ticket is about.',
        example: 'gb',
      }),
    description: z
      .string()
      .openapi({
        description: 'Description, main body, of the message to send.',
        example: 'Scoober Test',
      }),
    reason: z
      .string()
      .openapi({
        description: 'Scoober contact reason for this ticket.',
        example: 'front_line_reason_food_quality_cold_crushed_spilled',
      }),
    restaurantId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Restaurant Id of the order.', example: '1234567' }),
    scooberJobId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Scoober job ID, if known.', example: 'en' }),
    status: z.string().openapi({ description: 'Status of the Zendesk ticket.', example: 'new' }),
    subject: z
      .string()
      .openapi({ description: 'Subject of the message to send.', example: 'Scoober Test' }),
    ticketId: z
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
        description: 'Zendesk ticket ID this message is about.',
        example: 1234,
      }),
  })
  .openapi({
    description: 'Information needed to create a message for the Scoober ops team',
    required: ['description', 'reason', 'status', 'subject', 'ticketId'],
  })
  .openapi('CreateMessageModel')

const CreateOffersRequestSchema = z
  .object({
    daysOfWeek: z
      .array(z.enum(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']))
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'Days of week to run the offer' }),
    endDate: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The date when offer ends' }),
    endTime: z
      .string()
      .regex(
        /^(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|[+-](?:[01]\d|2[0-3]):[0-5]\d)?$/,
      )
      .nullable()
      .exactOptional()
      .openapi({ format: 'time', description: 'Timestamp when offer ends during the day' }),
    freeProducts: z
      .array(
        z
          .object({
            id: z
              .string()
              .exactOptional()
              .openapi({ description: 'The unique identifier of the product.' }),
            modifiers: z
              .array(
                z
                  .object({
                    modifierId: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'The unique identifier of the modifier.' }),
                    quantity: z
                      .int32()
                      .exactOptional()
                      .openapi({ description: 'The required quantity of the modifier.' }),
                  })
                  .openapi({ required: [] }),
              )
              .nullable()
              .exactOptional()
              .openapi({ description: 'The collection of preselected modifiers for the item.' }),
          })
          .openapi({ required: [] }),
      )
      .nullable()
      .exactOptional()
      .openapi({ description: 'The product that gets 100% discount applied' }),
    offerDescription: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The description of the offer.' }),
    offerTemplateId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Internal id of offer template' }),
    qualifyingProductIds: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'One of those products needed to be included in the collection of products to make offer applicable',
      }),
    qualifyingValue: z
      .object({
        currency: z
          .string()
          .exactOptional()
          .openapi({ description: 'Currency code in ISO 4217 format' }),
        value: z
          .int32()
          .exactOptional()
          .openapi({ description: 'Smallest unit of local currency' }),
      })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Minimum qualifying value for offer to be applied', required: [] }),
    startDate: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The date when offer starts' }),
    startTime: z
      .string()
      .regex(
        /^(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|[+-](?:[01]\d|2[0-3]):[0-5]\d)?$/,
      )
      .nullable()
      .exactOptional()
      .openapi({ format: 'time', description: 'Timestamp when offer starts during the day' }),
  })
  .openapi({
    description: 'The request object for creating of new offer group.',
    example: {
      daysOfWeek: ['Monday', 'Friday'],
      endDate: '2019-09-03',
      endTime: '13:00:00',
      offerDescription: 'This is offer description',
      offerTemplateId: 333,
      qualifyingValue: { currency: 'GBP', value: 1000 },
      startDate: '2019-08-06',
      startTime: '12:00:00',
    },
    required: [],
  })
  .openapi('CreateOffersRequest')

const CreateOrderDetailsSchema = z
  .object({ Location: CreateLocationSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateOrderDetails')

const CreateRequestSchema = z
  .object({
    Deals: z
      .array(CreateDealSchema.openapi({ description: 'Individual deal to added to new basket.' }))
      .nullable()
      .exactOptional()
      .openapi({ description: 'All deals to added to new basket.' }),
    MenuGroupId: z.string().exactOptional(),
    OrderDetails: CreateOrderDetailsSchema.exactOptional().openapi({
      description: 'Information needed to allow an order to be placed on a basket.',
    }),
    Products: z
      .array(
        CreateProductSchema.openapi({ description: 'Individual product to added to new basket.' }),
      )
      .nullable()
      .exactOptional()
      .openapi({ description: 'All products to added to new basket.' }),
    RestaurantSeoName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A unique per tenant identifier for a restaurant used for external operations.',
      }),
  })
  .openapi({ description: 'The request object for creating a basket.', required: [] })
  .openapi('CreateRequest')

const CreateRestaurantCompensationQuerySchema = z
  .object({
    Comments: z
      .string()
      .exactOptional()
      .openapi({ description: 'Any other comments to add to the request' }),
    ReasonCode: z
      .enum(['NotSet', 'BeingPrepared', 'OnItsWay', 'Delivered', 'Unknown'])
      .exactOptional()
      .openapi({ description: 'The reason why compensation is due' }),
  })
  .openapi({
    example: { Comments: 'Driver had just left the restaurant', ReasonCode: 'OnItsWay' },
    required: [],
  })
  .openapi('CreateRestaurantCompensationQuery')

const CreateSupportTicketRequestSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'The message with the support details' }),
    subject: z.string().exactOptional().openapi({ description: 'Subject of the ticket' }),
    type: z.string().exactOptional().openapi({ description: 'Type the ticket belongs to' }),
  })
  .openapi({
    description: 'Request containing support ticket information',
    example: {
      message: 'Change weekly budget',
      subject: 'Top Placement - Interest',
      type: 'top_placement__interest',
    },
    required: [],
  })
  .openapi('CreateSupportTicketRequest')

const CreateTicketModelSchema = z
  .object({
    city: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'City of the delivery in question of this ticket.',
        example: 'london',
      }),
    country: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '2 letter ISO code of the country this pertains to. Will be inferred from queried API.',
        example: 'gb',
      }),
    courier: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Courier who created this query.', example: 'scoober' }),
    description: z
      .string()
      .openapi({ description: 'Description (main body) of the ticket.', example: 'Scoober Test' }),
    externalId: z
      .string()
      .openapi({
        description:
          'We will note this as incident/ticket/query ID used by the calling party and include it for their future reference.',
        example: 'slack:1',
      }),
    language: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '2 letter ISO code of the language for the ticket. Will be inferred from queried API.',
        example: 'en',
      }),
    reason: z
      .string()
      .openapi({
        description: 'Scoober reason code for the creation of this ticket.',
        example: 'delivery__spilled_food',
      }),
    requesterEmail: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Ticket requester e-mail address.',
        example: 'requester@scoober.com',
      }),
    requesterName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Ticket requester name.', example: 'scoober' }),
    responseUrl: z
      .string()
      .openapi({
        description: 'Where should we respond to with progress on this request?',
        example: 'https://zenbox-api.bob.external.tkwy-staging.io/ticket/response',
      }),
    scooberJobId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Scoober job ID for this order.', example: '1234' }),
    senderType: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Scoober transmits a sender type value.', example: ['internal'] }),
    status: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Ticket status to set on creation of this ticket. Possible values: New, pending, solved.',
        example: 'new',
      }),
    subject: z.string().openapi({ description: 'Subject of the ticket.', example: 'Scoober Test' }),
  })
  .openapi({
    description:
      'Information needed to create a ticket on the Just Eat Zendesk instance for a Scoober delivery support incident',
    required: ['description', 'externalId', 'reason', 'responseUrl', 'subject'],
  })
  .openapi('CreateTicketModel')

const CurrentUserResponseSchema = z
  .object({
    accountType: z
      .enum(['Registered', 'Guest'])
      .exactOptional()
      .openapi({ description: 'The account type of the consumer.' }),
    email: z
      .email()
      .nullable()
      .exactOptional()
      .openapi({ description: "The consumer's email address." }),
    firstName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: "The consumer's first name." }),
    globalUserId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Global identifier for consumer and tenant.' }),
    lastName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: "The consumer's last name." }),
  })
  .openapi({
    example: {
      accountType: 'Registered',
      email: 'example@just-eat.com',
      firstName: 'Bob',
      globalUserId: '8It2lEaJjG82nJtxO00Iab0CoF0=',
      lastName: 'Smith',
    },
    required: [],
  })
  .openapi('CurrentUserResponse')

const CustomerOrderDetailsErrorTypeSchema = z
  .enum([
    'None',
    'Unknown',
    'OrderTimeNotFound',
    'OrderAddressNotFound',
    'BasketNotFound',
    'AvailabilityNotFound',
    'Unauthorized',
    'UpdateOrderAddressError',
    'UpdateOrderTimeError',
    'DependencyError',
    'InvalidZipcode',
    'InvalidMenuId',
  ])
  .openapi('CustomerOrderDetailsErrorType')

const CustomerOrderDetailsErrorResponseSchema = z
  .object({
    ErrorType: CustomerOrderDetailsErrorTypeSchema.exactOptional().openapi({
      description: 'Value of the error thrown',
    }),
    Exceptions: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of exceptions thrown during the request' }),
    Message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Detailed message on the error thrown' }),
  })
  .openapi({
    description: 'The error object returned when an operation fails',
    example: {
      ErrorType: 'OrderTimeNotFound',
      Exceptions: [],
      Message: 'Order Time not found for Basket example-basket-id',
    },
    required: [],
  })
  .openapi('CustomerOrderDetailsErrorResponse')

const CustomisationResponseSchema = z
  .object({
    config: z
      .object({
        liveChatEnabled: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Should we enable Live Chat' }),
        personalisedHelpEnabled: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Should we show Personalised Help' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    experimentEvents: z
      .array(ExperimentEventSchema)
      .exactOptional()
      .openapi({ description: 'list of experiments running for this client' }),
    helpSessionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique id for this help session' }),
    personalisation: z
      .object({
        callRestaurantAction: HelpActionSchema.exactOptional(),
        dataLayer: z
          .looseObject({})
          .exactOptional()
          .openapi({ description: 'Key/values to be passed to analytics' }),
        orderActions: z
          .array(HelpActionSchema)
          .exactOptional()
          .openapi({ description: 'Actions pertaining to the order' }),
        topLevelActions: z
          .array(HelpActionSchema)
          .exactOptional()
          .openapi({ description: 'Top-level actions not necessarily pertaining to the order' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({
    description: 'Information about initial options to show to user',
    example: {
      config: { liveChatEnabled: true, personalisedHelpEnabled: true },
      dataLayer: {
        helpData_features:
          'o:cancel_order|o:bad_item|o:call_restaurant|t:open_chatbot|t:email_justeat|t:call_justeat',
        helpData_helpSessionId: 'helpsessionid',
        helpData_isPilot: 32,
        trData_menuType: 'collection',
        trData_trId: null,
        transactionData_dateDiff: -1800,
        transactionData_nTotalItems: 0,
        transactionData_newTransactionId: 'orderid',
        transactionData_orderDelay: null,
        transactionData_orderStatus: 'Accepted',
      },
      experimentEvents: [
        {
          id: 'EX-1742',
          name: 'bandit_exp_new_carousels_2',
          parentId: '1234567890',
          platform: 'optimizely_fullstack',
          variantName: 'variant_d',
          version: '1',
        },
      ],
      helpSessionId: 'helpsessionid',
      personalisation: {
        callRestaurantAction: {
          action: '01234567890',
          buttonEvent: {
            action: 'click_call_restaurant',
            category: 'engagement',
            label: 'call restaurant',
            value: 0,
          },
          buttonType: 'Primary',
          data: {},
          department: 'LiveChat',
          id: 'CallRestaurant',
          notes: 'note',
          postText: [],
          preText: [],
          title: 'Call the restaurant',
          type: 'Call',
        },
        orderActions: [
          {
            action: '/applications/consumerhelp/flows/cancellation/uk/orderid/start',
            buttonEvent: {
              action: 'click_cancel_order',
              category: 'engagement',
              label: 'helpflow',
              value: 0,
            },
            buttonType: 'Secondary',
            data: {},
            department: 'LiveChat',
            id: 'Cancel',
            notes: 'note',
            postText: [],
            preText: [],
            title: 'I want to cancel my order',
            type: 'ChapiGet',
          },
          {
            action: '/applications/consumerhelp/flows/baditems/uk/orderid/start',
            buttonEvent: {
              action: 'click_bad_item',
              category: 'engagement',
              label: 'helpflow',
              value: 0,
            },
            buttonType: 'Secondary',
            data: {},
            department: 'LiveChat',
            id: 'BadItem',
            notes: 'note',
            postText: [],
            preText: [],
            title: "I'm unhappy with my order",
            type: 'ChapiGet',
          },
        ],
      },
      topLevelActions: [
        {
          action: null,
          buttonEvent: {
            action: 'click_open_chatbot',
            category: 'engagement',
            label: 'open chatbot',
            value: 0,
          },
          buttonType: 'Primary',
          data: {},
          department: 'LiveChat',
          id: 'StartChatBot',
          notes: 'note',
          postText: [],
          preText: [],
          title: 'Chat to us',
          type: 'Chatbot',
        },
        {
          action: 'info@just-eat.co.uk',
          buttonEvent: {
            action: 'click_email_justeat',
            category: 'engagement',
            label: 'email justeat',
            value: 0,
          },
          buttonType: 'Secondary',
          data: {},
          department: 'LiveChat',
          id: 'EmailJustEat',
          notes: 'note',
          postText: [],
          preText: [],
          title: 'Email our happy helpers',
          type: 'Email',
        },
        {
          action: '0344 243 7777',
          buttonEvent: {
            action: 'click_call_justeat',
            category: 'engagement',
            label: 'call justeat',
            value: 0,
          },
          buttonType: 'Secondary',
          data: {},
          department: 'LiveChat',
          id: 'PhoneJustEat',
          notes: 'note',
          postText: [],
          preText: [],
          title: 'Phone a human',
          type: 'Call',
        },
      ],
    },
    required: [],
  })
  .openapi('CustomisationResponse')

const CustomisationResponseWebSchema = z
  .object({
    config: z
      .object({
        liveChatEnabled: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Should we enable Live Chat' }),
        personalisedHelpEnabled: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Should we show Personalised Help' }),
      })
      .exactOptional()
      .openapi({ description: 'General config / feature toggles', required: [] }),
    helpSessionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique id for this help session' }),
    order: z
      .object({
        friendlyReference: z
          .string()
          .exactOptional()
          .openapi({ description: 'Friendly order id.  Usually numeric' }),
        id: z.string().exactOptional().openapi({ description: 'Alphanumeric order id' }),
        status: z
          .object({
            dateText: z
              .string()
              .exactOptional()
              .openapi({ description: 'The date / time to display to the customer' }),
            isActive: z
              .boolean()
              .exactOptional()
              .openapi({ description: 'Is this an active order?' }),
            isFinishedWithNegativeOutcome: z
              .boolean()
              .exactOptional()
              .openapi({
                description: 'Is this order in a final, unhappy (e.g. Cancelled) state?',
              }),
            isFinishedWithPositiveOutcome: z
              .boolean()
              .exactOptional()
              .openapi({ description: 'Is this order in a final, happy, state?' }),
            isForDelivery: z
              .boolean()
              .exactOptional()
              .openapi({ description: 'Is this a delivery order (as opposed to collection)?' }),
            preAcceptance: z
              .boolean()
              .exactOptional()
              .openapi({
                description: 'Is this order still awaiting acceptance from a restaurant?',
              }),
            preamble: z
              .string()
              .exactOptional()
              .openapi({ description: "Friendly 'preamble' text to display to the customer" }),
            statusText: z
              .string()
              .exactOptional()
              .openapi({ description: 'Friendly text to display to the customer' }),
            value: z
              .string()
              .exactOptional()
              .openapi({ description: 'The consumer status of the order' }),
          })
          .exactOptional()
          .openapi({ description: 'Information related to the status of the order', required: [] }),
      })
      .exactOptional()
      .openapi({ description: "The customer's most recent or specified order", required: [] }),
    personalisation: z
      .object({
        callRestaurantAction: HelpActionSchema.exactOptional().openapi({
          description: 'Action to call the restaurant, if possible at this time',
        }),
        dataLayer: z
          .looseObject({})
          .exactOptional()
          .openapi({ description: 'Key/values to be passed to analytics' }),
        orderActions: z
          .array(HelpActionSchema)
          .exactOptional()
          .openapi({ description: 'Actions pertaining to the order' }),
        topLevelActions: z
          .array(HelpActionSchema)
          .exactOptional()
          .openapi({ description: 'Top-level actions not necessarily pertaining to the order' }),
      })
      .exactOptional()
      .openapi({
        description: 'The actions that are relevant to this customer / order',
        required: [],
      }),
    restaurant: z
      .object({
        name: z.string().exactOptional().openapi({ description: 'Name of the restaurant' }),
        telephone: z
          .string()
          .exactOptional()
          .openapi({ description: "Restaurant's telephone number" }),
        thumbnail: z
          .string()
          .exactOptional()
          .openapi({ description: "URI for the restaurant's thumbnail image" }),
      })
      .exactOptional()
      .openapi({
        description: 'The restaurant of the most recent or specified order',
        required: [],
      }),
    user: z
      .object({
        isLoggedIn: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Is the user currently logged in?' }),
        name: z.string().exactOptional().openapi({ description: "The user's name" }),
      })
      .exactOptional()
      .openapi({ description: 'The current user', required: [] }),
  })
  .openapi({
    description: 'Information about initial options to show to user',
    example: {
      config: { liveChatEnabled: true, personalisedHelpEnabled: true },
      dataLayer: {
        helpData_features:
          'o:cancel_order|o:bad_item|o:call_restaurant|t:open_chatbot|t:email_justeat|t:call_justeat',
        helpData_helpSessionId: 'helpsessionid',
        helpData_isPilot: 32,
        trData_menuType: 'collection',
        trData_trId: null,
        transactionData_dateDiff: -1800,
        transactionData_nTotalItems: 0,
        transactionData_newTransactionId: 'orderid',
        transactionData_orderDelay: null,
        transactionData_orderStatus: 'Accepted',
      },
      helpSessionId: 'helpsessionid',
      order: {
        friendlyReference: '1234567890',
        id: 'alphanumericid',
        status: {
          dateText: '11:48',
          isActive: true,
          isFinishedWithNegativeOutcome: false,
          isFinishedWithPositiveOutcome: false,
          isForDelivery: true,
          preAcceptance: false,
          preamble: 'Delivering around',
          statusText:
            'The restaurant has confirmed the delivery time. The countdown to your first bite has begun...',
          value: 'Accepted',
        },
      },
      personalisation: {
        callRestaurantAction: {
          action: '01234567890',
          buttonEvent: {
            action: 'click_call_restaurant',
            category: 'engagement',
            label: 'call restaurant',
            value: 0,
          },
          buttonType: 'Primary',
          data: {},
          department: 'LiveChat',
          id: 'CallRestaurant',
          notes: 'note',
          postText: [],
          preText: [],
          title: 'Call the restaurant',
          type: 'Call',
        },
        orderActions: [
          {
            action: '/applications/consumerhelp/flows/cancellation/uk/orderid/start',
            buttonEvent: {
              action: 'click_cancel_order',
              category: 'engagement',
              label: 'helpflow',
              value: 0,
            },
            buttonType: 'Secondary',
            data: {},
            department: 'LiveChat',
            id: 'Cancel',
            notes: 'note',
            postText: [],
            preText: [],
            title: 'I want to cancel my order',
            type: 'ChapiGet',
          },
          {
            action: '/applications/consumerhelp/flows/baditems/uk/orderid/start',
            buttonEvent: {
              action: 'click_bad_item',
              category: 'engagement',
              label: 'helpflow',
              value: 0,
            },
            buttonType: 'Secondary',
            data: {},
            department: 'LiveChat',
            id: 'BadItem',
            notes: 'note',
            postText: [],
            preText: [],
            title: "I'm unhappy with my order",
            type: 'ChapiGet',
          },
        ],
      },
      restaurant: {
        name: "Bob's kebabs",
        telephone: '+44 1234 123123',
        thumbnail:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRnTQ8sfP8yxicqMBoAymdKzrpjhtwSeCIXdpqhZ7Hrj8FLBfB',
      },
      topLevelActions: [
        {
          action: null,
          buttonEvent: {
            action: 'click_open_chatbot',
            category: 'engagement',
            label: null,
            value: null,
          },
          buttonType: 'Primary',
          data: null,
          department: 'LiveChat',
          id: 'StartChatBot',
          notes: 'note',
          postText: [],
          preText: [],
          title: 'Chat to us',
          type: 'Chatbot',
        },
        {
          action: 'info@just-eat.co.uk',
          buttonEvent: {
            action: 'click_email_justeat',
            category: 'engagement',
            label: null,
            value: null,
          },
          buttonType: 'Secondary',
          data: null,
          department: 'LiveChat',
          id: 'EmailJustEat',
          notes: 'note',
          postText: [],
          preText: [],
          title: 'Email our happy helpers',
          type: 'Email',
        },
        {
          action: '0344 243 7777',
          buttonEvent: {
            action: 'click_call_justeat',
            category: 'engagement',
            label: null,
            value: null,
          },
          buttonType: 'Secondary',
          data: null,
          department: 'LiveChat',
          id: 'PhoneJustEat',
          notes: 'note',
          postText: [],
          preText: [],
          title: 'Phone a human',
          type: 'Call',
        },
      ],
      user: { isLoggedIn: true, name: 'John' },
    },
    required: [],
  })
  .openapi('CustomisationResponseWeb')

const DealItemVariationSchema = z
  .object({
    additionPrice: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Selecting this modifier will increase the base price of the variation by this amount in the minor unit of the currency.',
      }),
    dealItemVariationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'A referenced variation id that can be a part of a deal group.' }),
    maxChoices: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of times this deal item variation can be chosen within a given deal group.',
      }),
    minChoices: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The minimum number of times this deal item variation can be chosen within a given deal group.',
      }),
  })
  .openapi({
    example: { additionPrice: 50, dealItemVariationId: '8548153', maxChoices: 1, minChoices: 0 },
    required: [],
  })
  .openapi('DealItemVariation')

const DeliveryDriverInfoSchema = z
  .strictObject({
    arrivalTimeAtRestaurant: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'The ISO-8601 datetime arrival time of the driver' }),
    deliveryState: z
      .enum(['Accepted', 'TransmissionFailed'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'Current state of the delivery' }),
    driverContactNumber: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: "The driver's contact telephone number" }),
    driverName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: "The driver's first name" }),
    dynamicArrivalEstimate: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'The ISO-8601 datetime dynamic estimated arrival of the driver' }),
    estimatedArrivalTime: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'The ISO-8601 datetime estimated arrival of the driver' }),
  })
  .openapi({ required: [] })
  .openapi('DeliveryDriverInfo')

const DeliveryFeeSchema = z
  .object({
    deliveryCharge: z
      .object({
        currency: z
          .string()
          .exactOptional()
          .openapi({ description: 'Currency code in ISO 4217 format' }),
        value: z
          .int32()
          .exactOptional()
          .openapi({ description: 'Smallest unit of local currency' }),
      })
      .exactOptional()
      .openapi({ description: 'base delivery charge for a given zone', required: [] }),
    freeDelivery: z
      .object({
        currency: z
          .string()
          .exactOptional()
          .openapi({ description: 'Currency code in ISO 4217 format' }),
        value: z
          .int32()
          .exactOptional()
          .openapi({ description: 'Smallest unit of local currency' }),
      })
      .exactOptional()
      .openapi({ description: 'Free delivery over order price', required: [] }),
    minimumOrder: z
      .object({
        currency: z
          .string()
          .exactOptional()
          .openapi({ description: 'Currency code in ISO 4217 format' }),
        value: z
          .int32()
          .exactOptional()
          .openapi({ description: 'Smallest unit of local currency' }),
      })
      .exactOptional()
      .openapi({ description: 'Minimum order value', required: [] }),
    smallOrderCharge: z
      .object({
        currency: z
          .string()
          .exactOptional()
          .openapi({ description: 'Currency code in ISO 4217 format' }),
        value: z
          .int32()
          .exactOptional()
          .openapi({ description: 'Smallest unit of local currency' }),
      })
      .exactOptional()
      .openapi({
        description: 'delivery charge for orders that has order value less then `minimumOrder`',
        required: [],
      }),
    zoneId: z.string().exactOptional().openapi({ description: 'Id of assigned zone' }),
    zoneName: z.string().exactOptional().openapi({ description: 'Name of assigned zone' }),
  })
  .openapi({ required: [] })
  .openapi('DeliveryFee')

const DeliveryZoneSchema = z
  .object({
    deliveryMinutes: z
      .int32()
      .exactOptional()
      .openapi({ description: 'geographical zone generated by SKIP, based on delivery minutes.' }),
    unboundedZone: z
      .object({
        coordinates: z
          .array(
            z
              .object({
                coordinates: z
                  .array(
                    z
                      .object({
                        latitude: z
                          .number()
                          .exactOptional()
                          .openapi({ description: 'geographical point latitude' }),
                        longitude: z
                          .number()
                          .exactOptional()
                          .openapi({ description: 'geographical point longitude' }),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional()
                  .openapi({ description: 'geographical coordinates of linear ring' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({
            description:
              'geographical polygon https://tools.ietf.org/html/rfc7946#section-3.1.4. It might consist from multiple linear rings',
          }),
      })
      .exactOptional()
      .openapi({ description: 'json representation of delivery zone', required: [] }),
    zoneId: z.string().exactOptional().openapi({ description: 'id of the zone' }),
  })
  .openapi({ example: { deliveryMinutes: 5, unboundedZone: {}, zoneId: '1' }, required: [] })
  .openapi('DeliveryZone')

const VoucherTypeSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2)])
  .openapi({
    description: 'Type of voucher',
    'x-enumNames': ['Absolute', 'Percentage', 'DeliveryFee'],
  })
  .openapi('VoucherType')

const DiscountSchema = z
  .strictObject({
    Amount: z.number().exactOptional().openapi({ description: 'The amount of discount' }),
    VoucherType: VoucherTypeSchema.exactOptional().openapi({ description: 'The type of discount' }),
  })
  .openapi({ required: [] })
  .openapi('Discount')

const DiscoveryResponseAvailabilitySchema = z
  .object({
    availableFrom: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "Date and time the restaurant is available from. Format - 'yyyy-dd-MMTHH:mm:ssZ'",
      }),
  })
  .openapi({ required: [] })
  .openapi('DiscoveryResponseAvailability')

const DiscoveryResponseAvailabilitiesSchema = z
  .object({
    canPreOrder: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If the restaurant is in a pre order state' }),
    isOpen: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the restaurant is in an open state. This also assumes it is accepting orders',
      }),
    nextAvailability: DiscoveryResponseAvailabilitySchema.exactOptional().openapi({
      description: 'When the restaurant is next available',
    }),
    serviceType: z
      .enum(['Unknown', 'Delivery', 'Collection'])
      .exactOptional()
      .openapi({ description: 'The type of service the restaurant availability is' }),
  })
  .openapi({ required: [] })
  .openapi('DiscoveryResponseAvailabilities')

const DiscoveryResponseCuisineSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Display name of the cuisine' }),
    seoName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Sanitized name of the cuisine, compatible with URLs' }),
  })
  .openapi({ required: [] })
  .openapi('DiscoveryResponseCuisine')

const DiscoveryResponseItemSchema = z
  .object({
    availabilities: z
      .array(DiscoveryResponseAvailabilitiesSchema)
      .exactOptional()
      .openapi({ description: 'Availabilities of the restaurant' }),
    cuisines: z
      .array(DiscoveryResponseCuisineSchema)
      .exactOptional()
      .openapi({ description: 'Cuisines of the restaurant' }),
    name: z.string().exactOptional().openapi({ description: 'Display name of the restaurant' }),
    restaurantId: z.string().exactOptional().openapi({ description: 'Id of the restaurant' }),
  })
  .openapi({
    example: {
      availabilities: [
        {
          canPreOrder: false,
          isOpen: true,
          nextAvailability: { AvailableFrom: '2020-01-01T07:20:00Z' },
          serviceType: 'Delivery',
        },
      ],
      cuisines: [
        { name: 'Pizza', seoName: 'pizza' },
        { name: 'fish-and-chips', seoName: 'Fish & Chips' },
        { name: 'Halal', seoName: 'halal' },
      ],
      name: 'Example Restaurant',
      restaurantId: '12345',
    },
    required: [],
  })
  .openapi('DiscoveryResponseItem')

const DiscoveryResponseSchema = z
  .object({
    searchResults: z
      .array(DiscoveryResponseItemSchema)
      .exactOptional()
      .openapi({ description: 'Restaurants serving the requested area' }),
  })
  .openapi({
    example: {
      searchResults: [
        {
          availabilities: [
            {
              canPreOrder: false,
              isOpen: true,
              nextAvailability: { AvailableFrom: '2020-01-01T07:20:00Z' },
              serviceType: 'Delivery',
            },
          ],
          cuisines: [
            { name: 'Pizza', seoName: 'pizza' },
            { name: 'fish-and-chips', seoName: 'Fish & Chips' },
            { name: 'Halal', seoName: 'halal' },
          ],
          name: 'Example Restaurant',
          restaurantId: '12345',
        },
      ],
    },
    required: [],
  })
  .openapi('DiscoveryResponse')

const DueTimeChangeSchema = z
  .strictObject({
    newTimeDue: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'New DateTime of the order due in ISO 8601 format' }),
  })
  .openapi({ required: [] })
  .openapi('DueTimeChange')

const EposStateSchema = z
  .enum(['None', 'Failed', 'FailedAcknowledged', 'FailedDismissed'])
  .openapi({ description: 'Current state of sending Order to EPOS system' })
  .openapi('EposState')

const ExperimentContextSchema = z
  .object({
    Client: z
      .enum(['Web', 'Android', 'iOS', 'Mobile', 'All', 'Test'])
      .exactOptional()
      .openapi({ description: 'Type of client making the request.' }),
    ClientVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The version of the experiment client.' }),
    Culture: z.string().exactOptional().openapi({ description: 'Culture of the request.' }),
    IsBetaClient: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Client is a beta instance.' }),
    UserAgent: z.string().exactOptional().openapi({ description: 'Browser user agent.' }),
    UserBucket: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Representation of how the user has been partitioned into experiments.',
      }),
  })
  .openapi({
    example: {
      Client: 'Web',
      ClientVersion: '2.0.0.1390',
      Culture: 'en-GB',
      IsBetaClient: false,
      UserAgent: 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0',
      UserBucket: '047850da-ccb3-491f-b5a5-43f186e4344b',
    },
    required: [],
  })
  .openapi('ExperimentContext')

const ExperimentErrorResponseSchema = z
  .object({ Message: z.string().exactOptional() })
  .openapi({ description: 'The error object returned when an operation fails', required: [] })
  .openapi('ExperimentErrorResponse')

const ExperimentResultResponseSchema = z
  .object({
    AssociatedTicket: z
      .string()
      .exactOptional()
      .openapi({ description: 'Associated jira experiment ticket.' }),
    Name: z.string().exactOptional().openapi({ description: 'The experiment name.' }),
    ParentTicket: z
      .string()
      .exactOptional()
      .openapi({ description: 'Parent jira experiment ticket.' }),
    Partition: z.string().exactOptional().openapi({ description: 'Experiment partition.' }),
    Version: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Version number of the experiment.' }),
  })
  .openapi({
    example: {
      AssociatedTicket: 'EX-1234',
      Name: 'webexperiment',
      ParentTicket: 'EX-123',
      Partition: 'variant1',
      Version: 2,
    },
    required: [],
  })
  .openapi('ExperimentResultResponse')

const ExperimentResultsResponseSchema = z
  .object({
    Active: z
      .record(z.string(), ExperimentResultResponseSchema)
      .exactOptional()
      .openapi({ description: 'The active (enabled) experiments.', readOnly: true }),
  })
  .openapi({
    example: {
      iosexperiment: {
        AssociatedTicket: 'EX-8888',
        Name: 'iosexperiment',
        ParentTicket: 'EX-777',
        Partition: 'variant5',
        Version: 3,
      },
      webexperiment: {
        AssociatedTicket: 'EX-1234',
        Name: 'webexperiment',
        ParentTicket: 'EX-123',
        Partition: 'variant1',
        Version: 2,
      },
    },
    required: [],
  })
  .openapi('ExperimentResultsResponse')

const ExternalSearchResponseSchema = z
  .object({
    Restaurants: z
      .array(
        z
          .object({
            Address: z
              .object({
                City: z.string().exactOptional(),
                FirstLine: z.string().exactOptional(),
                Latitude: z.number().exactOptional(),
                Longitude: z.number().exactOptional(),
                Postcode: z.string().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            DeliveryEtaMinutes: z
              .object({
                Approximate: z.number().exactOptional(),
                RangeLower: z.number().exactOptional(),
                RangeUpper: z.number().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            DriveDistance: z.number().exactOptional(),
            DriveInfoCalculated: z.boolean().exactOptional(),
            Id: z.number().exactOptional(),
            IsOpenNow: z.boolean().exactOptional(),
            IsOpenNowForDelivery: z.boolean().exactOptional(),
            Name: z.string().exactOptional(),
            UniqueName: z.string().exactOptional(),
            Url: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExternalSearchResponse')

const ServiceTypeFeeConfigurationSchema = z
  .object({
    amount: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'The value to apply to the basket for this Fee in the smallest unit of currency',
      }),
  })
  .openapi({
    description: 'Distinct values which are configured for a particular service type',
    example: { amount: 5 },
    required: [],
  })
  .openapi('ServiceTypeFeeConfiguration')

const FeeSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of what the Fee is' }),
    serviceTypes: z
      .object({
        collection: ServiceTypeFeeConfigurationSchema.exactOptional().openapi({
          description: 'Configuration of the fee for the collection service type',
        }),
        default: ServiceTypeFeeConfigurationSchema.exactOptional().openapi({
          description:
            'Configuration of the fee for any service type which is not explicitly configured',
        }),
        delivery: ServiceTypeFeeConfigurationSchema.exactOptional().openapi({
          description: 'Configuration of the fee for the delivery service type',
        }),
      })
      .exactOptional()
      .openapi({
        description:
          'Contains Service type specific fee values. If set, default can be used to apply a fee to as yet unspecified service types',
        required: [],
      }),
  })
  .openapi({
    description: 'The object which encapsulates a Fee',
    example: {
      description: 'A charge for bags in delivery',
      serviceTypes: { collection: { amount: 5 }, default: { amount: 0 }, delivery: { amount: 10 } },
    },
    required: [],
  })
  .openapi('Fee')

const TextAndActionsStepSchema = FlowStepBaseSchema.and(
  z
    .object({
      actions: z
        .array(HelpActionSchema)
        .exactOptional()
        .openapi({ description: 'Array of actions (i.e. buttons)' }),
      body: z
        .array(z.string())
        .exactOptional()
        .openapi({ description: 'Array of paragraphs for body text' }),
      header: z.string().exactOptional().openapi({ description: 'Display header' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: "'Default' flow step, consisting of text and next-step actions" })
  .openapi('TextAndActionsStep')

const ItemSelectionStepSchema = FlowStepBaseSchema.and(
  z
    .object({
      actions: z
        .array(HelpActionSchema)
        .exactOptional()
        .openapi({ description: 'Array of actions (i.e. buttons)' }),
      body: z
        .array(z.string())
        .exactOptional()
        .openapi({ description: 'Array of paragraphs for body text' }),
      header: z.string().exactOptional().openapi({ description: 'Display header' }),
      items: z
        .array(
          z
            .object({
              id: z.string().exactOptional().openapi({ description: 'Unique id of item' }),
              name: z.string().exactOptional().openapi({ description: 'Name of item' }),
              price: z.string().exactOptional().openapi({ description: 'Formatted price of item' }),
            })
            .openapi({ required: [] }),
        )
        .exactOptional()
        .openapi({ description: 'Array of items in order to choose from' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'Flow step used for selecting problematic items' })
  .openapi('ItemSelectionStep')

const RequestCsatStepSchema = FlowStepBaseSchema.and(
  z
    .object({
      quitFlowAction: HelpActionSchema.exactOptional().openapi({
        description: 'Action to close flow without giving CSAT',
      }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'Flow step used for asking if customer was satisfied with flow' })
  .openapi('RequestCsatStep')

const LateOrderUpdateReceivedStepSchema = FlowStepBaseSchema.and(
  z
    .object({
      actions: z
        .array(HelpActionSchema)
        .exactOptional()
        .openapi({ description: 'Array of actions (i.e. buttons)' }),
      header: z.string().exactOptional().openapi({ description: 'Display header' }),
      message: z.string().exactOptional().openapi({ description: 'Message from restaurant' }),
      messageHeader: z
        .string()
        .exactOptional()
        .openapi({ description: 'Header for the message from restaurant' }),
      newDueDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({ description: 'New expected due date' }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description:
      "Flow step used to display the restaurant's response to a customer's Late Order update request",
  })
  .openapi('LateOrderUpdateReceivedStep')

const FlowStepSchema = z
  .xor([
    TextAndActionsStepSchema,
    ItemSelectionStepSchema,
    BadItemIssueSelectionStepSchema,
    RequestCsatStepSchema,
    LateOrderUpdateReceivedStepSchema,
  ])
  .openapi({ description: 'The possible steps that can be returned as part of flows' })
  .openapi('FlowStep')

const FlowResponseSchema = z
  .object({
    modals: z
      .record(z.string(), FlowStepSchema)
      .exactOptional()
      .openapi({ description: 'Dictionary of strings to `FlowStepResponses`' }),
    stepResponse: z
      .object({
        data: FlowStepSchema.exactOptional(),
        type: z
          .enum([
            'TextAndActions',
            'ItemSelection',
            'BadItemIssueSelection',
            'RequestCsat',
            'LateOrderUpdateReceived',
          ])
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({
    example: {
      modals: {},
      stepResponse: {
        closeButton: {
          action: '/uk/flows/close',
          buttonEvent: {
            action: 'form_cancel_order',
            category: 'engagement',
            label: 'close',
            value: 0,
          },
          buttonType: 'CloseButton',
          data: {},
          department: 'LiveChat',
          event: {
            dataLayer: {
              screenName: '/cancel-order/self-cancel-charged',
              transactionData_dateDiff: -3600,
              transactionData_delay: -1800,
            },
          },
          id: 'EndFlow',
          notes: 'note',
          postText: [],
          preText: [],
          title: 'Close',
          type: 'EndFlow',
        },
        data: {
          actions: [
            {
              action:
                '/uk/flows/cancellation/1234/confirm?reasonCode=cust_cancelled_changed_mind&flowId=XXX',
              buttonEvent: {
                action: 'form_cancel_order',
                category: 'engagement',
                label: 'confirm_charged',
                value: 550,
              },
              buttonType: 'Primary',
              data: null,
              department: 'LiveChat',
              id: 'ConfirmCancel',
              notes: null,
              postText: [],
              preText: [],
              title: 'Cancel order - pay £5.50',
              type: 'ChapiPost',
            },
            {
              action: null,
              buttonEvent: {
                action: 'form_cancel_order',
                category: 'engagement',
                label: 'close',
                value: 0,
              },
              buttonType: 'Secondary',
              data: {},
              department: 'LiveChat',
              id: 'EndFlow',
              notes: null,
              postText: [],
              preText: [],
              title: 'Keep my order',
              type: 'EndFlow',
            },
          ],
          body: [
            'You will need to pay for 50% of your order. This charge will come to £5.50.',
            'We are unable to offer a full refund because the restaurant has already started preparing your food.',
          ],
          header: 'Are you sure you want to cancel this order?',
          iconType: null,
          title: 'Cancel order',
        },
        type: 'TextAndActions',
      },
    },
    required: [],
  })
  .openapi('FlowResponse')

const GeneratePresignedFIleUploadUrlRequestSchema = z
  .object({
    fileName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of file that will be uploaded to the AWS S3 bucket' }),
    fileSizeInBytes: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The size of file that will be uploaded to the AWS S3 bucket, in bytes',
      }),
  })
  .openapi({
    description:
      'Request that contains information about file that will be uploaded to an AWS S3 bucket',
    example: { fileName: 'menu.pdf', fileSizeInBytes: 4574745 },
    required: [],
  })
  .openapi('GeneratePresignedFIleUploadUrlRequest')

const GeneratePresignedFIleUploadUrlResponseSchema = z
  .object({
    fields: z
      .object({
        'Content-Type': z
          .string()
          .exactOptional()
          .openapi({ description: 'Content-Type of uploaded file' }),
        Policy: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The Base64 encoded security policy that describes what is permitted in the request',
          }),
        'X-Amz-Algorithm': z
          .string()
          .exactOptional()
          .openapi({
            description: 'The signing algorithm that you used to calculate the signature.',
          }),
        'X-Amz-Credential': z
          .string()
          .exactOptional()
          .openapi({
            description:
              'a string of the following form `<aws-access-key-id>/<date>/<aws-region>/<aws-service>/aws4_request`',
          }),
        'X-Amz-Date': z
          .string()
          .exactOptional()
          .openapi({ description: 'The date value specified in the ISO8601 formatted string.' }),
        'X-Amz-Security-Token': z
          .string()
          .exactOptional()
          .openapi({ description: 'AWS account token' }),
        'X-Amz-Signature': z
          .string()
          .exactOptional()
          .openapi({ description: 'The HMACSHA256 hash of the security policy' }),
        bucket: z
          .string()
          .exactOptional()
          .openapi({ description: 'Name of the bucket in which file will be uploaded' }),
        key: z
          .string()
          .exactOptional()
          .openapi({ description: 'File name that will be obtained after uploading' }),
      })
      .exactOptional()
      .openapi({ description: 'Request metadata to make upload to S3 bucket', required: [] }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL of the bucket in which file will be uploaded' }),
  })
  .openapi({
    description:
      'Response that provides all needed metadata to build signed request to upload file to AWS S3 bucket from a client application',
    example: {
      fields: {
        'Content-Type': 'application/pdf',
        Policy: '...redacted...',
        'X-Amz-Algorithm': 'AWS4-HMAC-SHA256',
        'X-Amz-Credential': '...redacted...',
        'X-Amz-Date': '20200423T120247Z',
        'X-Amz-Security-Token': '...redacted...',
        'X-Amz-Signature': '...redacted...',
        bucket: 'qa28-presigned-post-data',
        key: '3c816agk9cpvahl_menu.pdf',
      },
      url: 'https://s3.eu-west-1.amazonaws.com/qa28-presigned-post-data',
    },
    required: [],
  })
  .openapi('GeneratePresignedFIleUploadUrlResponse')

const GeoLocationSchema = z
  .strictObject({
    accuracy: z.float64().exactOptional().openapi({ description: 'How accurate the location is' }),
    heading: z.float64().exactOptional().openapi({ description: 'The direction of travel' }),
    latitude: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The latitude component of the location' }),
    longitude: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The longitude component of the location' }),
    speed: z.float64().exactOptional().openapi({ description: 'The speed of travel' }),
  })
  .openapi({ required: [] })
  .openapi('GeoLocation')

const GeometrySchema = z
  .object({
    coordinates: z
      .array(z.float64())
      .length(2)
      .exactOptional()
      .openapi({ description: 'first element of the array represents longitude, second latitude' }),
    type: z.string().exactOptional().openapi({ description: 'type of primitive' }),
  })
  .openapi({
    description: 'Geometry information for consumers location',
    example: { coordinates: [-0.10358, 51.51469], type: 'Point' },
    required: [],
  })
  .openapi('Geometry')

const GetAvailableFulfilmentTimesResponseSchema = z
  .object({
    asapAvailable: z
      .boolean()
      .openapi({
        description: 'If the option to fulfil an order as soon as possible is available.',
      }),
    times: z
      .array(
        z
          .object({
            from: z.iso
              .datetime({ offset: true })
              .openapi({ description: 'Start time represented in ISO 8601 UTC (Zulu Time).' }),
            to: z.iso
              .datetime({ offset: true })
              .openapi({
                description:
                  'End time represented in ISO 8601 UTC (Zulu Time).\n\nThis time can be equal to the from time.\n',
              }),
          })
          .openapi({
            description: 'A time band for when an order can be fulfilled.',
            required: ['from', 'to'],
          }),
      )
      .min(0)
      .max(576)
      .openapi({ description: 'Collection of time bands for when an order can be fulfilled.' }),
  })
  .openapi({ required: ['times', 'asapAvailable'] })
  .openapi('GetAvailableFulfilmentTimesResponse')

const GetDeliveryFeesResponseSchema = z
  .object({
    deliveryFees: z
      .array(DeliveryFeeSchema)
      .exactOptional()
      .openapi({ description: 'restaurant delivery fees' }),
  })
  .openapi({
    example: {
      deliveryFees: [
        {
          deliveryCharge: { currency: 'GBP', value: 100 },
          freeDelivery: { currency: 'GBP', value: 1000 },
          minimumOrder: { currency: 'GBP', value: 500 },
          smallOrderCharge: { currency: 'GBP', value: 200 },
          zoneId: '1',
          zoneName: 'Zone 1',
        },
        {
          deliveryCharge: { currency: 'GBP', value: 200 },
          freeDelivery: { currency: 'GBP', value: 2000 },
          minimumOrder: { currency: 'GBP', value: 500 },
          smallOrderCharge: { currency: 'GBP', value: 300 },
          zoneId: '2',
          zoneName: 'Zone 2',
        },
      ],
    },
    required: [],
  })
  .openapi('GetDeliveryFeesResponse')

const GetDeliveryZonesResponseSchema = z
  .object({
    deliveryZones: z
      .array(DeliveryZoneSchema)
      .max(5)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({
        description:
          'restaurant delivery zones. Maximum `deliveryZones` response size should be less than 20KB',
      }),
  })
  .openapi({
    example: {
      deliveryZones: [
        { deliveryMinutes: 5, unboundedZone: {}, zoneId: '1' },
        { deliveryMinutes: 7, unboundedZone: {}, zoneId: '2' },
      ],
    },
    required: [],
  })
  .openapi('GetDeliveryZonesResponse')

const GetSettingsResponseSchema = z
  .object({
    deliveryAreaFeatureState: z
      .enum(['Unreleased', 'Disabled', 'Enabled'])
      .exactOptional()
      .openapi({ description: 'Delivery area feature state.' }),
    deliveryFeesFeatureState: z
      .enum(['Unreleased', 'Disabled', 'Enabled'])
      .exactOptional()
      .openapi({ description: 'Delivery fees feature state.' }),
    isRestaurantWhiteListed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "We are going to use smooth 'delivery fees' feature rollout. So, in the first iteration feature will be available for a several restaurants.",
      }),
  })
  .openapi({
    example: {
      deliveryAreaFeatureState: 'Enabled',
      deliveryFeesFeatureState: 'Unreleased',
      isRestaurantWhiteListed: true,
    },
    required: [],
  })
  .openapi('GetSettingsResponse')

const SupportRequestTypeSchema: z.ZodType<SupportRequestTypeType> = z
  .lazy(() =>
    z
      .object({
        name: z.string().exactOptional().openapi({ description: 'Human readable name' }),
        subTypes: z
          .array(SupportRequestTypeSchema)
          .exactOptional()
          .openapi({ description: 'Possible sub-types of request' }),
        value: z
          .string()
          .exactOptional()
          .openapi({ description: 'Type value which will be used for Zendesk ticket as a tag' }),
      })
      .openapi({ description: 'Object that represents type/sub-type of request', required: [] }),
  )
  .openapi('SupportRequestType')

const GetSupportRequestTypesResponseSchema = z
  .array(SupportRequestTypeSchema)
  .openapi({
    description: 'Array of types request belongs to',
    example: [
      {
        name: 'Top Placement',
        subtype: [
          { name: 'Interest', subtype: [], value: 'top_placement__interest' },
          { name: 'Issue', subtype: [], value: 'top_placement__issue' },
        ],
        value: 'top_placement',
      },
      { name: 'Menu update', subtypes: [], value: 'menu_update' },
    ],
  })
  .openapi('GetSupportRequestTypesResponse')

const SupportRequestSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'The Id of the request' }),
    status: z
      .enum(['new', 'open', 'closed', 'pending', 'solved', 'hold', 'deleted'])
      .exactOptional()
      .openapi({ description: 'Request status' }),
    subject: z.string().exactOptional().openapi({ description: 'Request subject' }),
    submittedDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Request placed date' }),
  })
  .openapi({ description: 'Object that represents support request', required: [] })
  .openapi('SupportRequest')

const GetSupportRequestsResponseSchema = z
  .object({
    paging: z
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
          .exactOptional()
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'The total number of results',
          }),
      })
      .exactOptional()
      .openapi({ description: 'Consists of pagination information', required: [] }),
    requests: z
      .array(SupportRequestSchema)
      .exactOptional()
      .openapi({ description: 'List of restaurant support requests' }),
  })
  .openapi({
    description: 'Response representing support requests from restaurant',
    example: {
      paging: { count: 35 },
      requests: [
        {
          id: '5646645',
          status: 'open',
          subject: 'Top Placement',
          submittedDate: '2020-01-01T09:30:00.000Z',
        },
        {
          id: '235253',
          status: 'closed',
          subject: 'Change Logo Request',
          submittedDate: '2020-01-01T09:30:00.000Z',
        },
      ],
    },
    required: [],
  })
  .openapi('GetSupportRequestsResponse')

const GiftCardsErrorResponseSchema = z
  .object({ code: z.int32().exactOptional(), codeText: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('GiftCardsErrorResponse')

const GroupTypeSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2)])
  .openapi({ description: '', 'x-enumNames': ['Unknown', 'DynamicSingleUse', 'StaticMultipleUse'] })
  .openapi('GroupType')

const IgnoredRestaurantIdsSchema = z
  .object({
    ignoredRestaurantIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of restaurant ids that were present in a request but were ignored.',
      }),
  })
  .openapi({ example: { ignoredRestaurantIds: ['123', '456'] }, required: [] })
  .openapi('IgnoredRestaurantIds')

const IngredientsSchema = z
  .strictObject({ name: z.string().exactOptional().openapi({ description: 'Name of ingredient' }) })
  .openapi({ description: 'List of ingredients', example: { name: 'wasser' }, required: [] })
  .openapi('Ingredients')

const InternalServerErrorMarketingResponseSchema = MarketingErrorResponseSchema.openapi({
  description: '500 Internal Server Error Returned',
  example: {
    errors: [{ description: 'Internal Server Error', errorCode: '500' }],
    faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
    message: 'Something has gone wrong, please try again later.',
  },
}).openapi('InternalServerErrorMarketingResponse')

const LateOrderCompensationOptionSchema = z
  .strictObject({
    amount: z
      .number()
      .exactOptional()
      .openapi({ description: 'Cost of the option in local currency' }),
    isRecommended: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this option is the recommended option' }),
  })
  .openapi({ required: [] })
  .openapi('LateOrderCompensationOption')

const LateOrderCompensationResponseSchema = z
  .strictObject({
    acceptedAmount: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The amount of compensation if accepted' }),
    isAccepted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Has the late order compensation request been accepted' }),
    rejectedReasonCode: z
      .enum([
        'ExtraItem',
        'StuckInTraffic',
        'BusierThanExpected',
        'BadWeather',
        'UnexpectedProblems',
      ])
      .nullable()
      .exactOptional()
      .openapi({ description: 'The rejection reason if not accepted' }),
  })
  .openapi({ required: [] })
  .openapi('LateOrderCompensationResponse')

const LateOrderCompensationQuerySchema = z
  .strictObject({
    compensationOptions: z
      .array(LateOrderCompensationOptionSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'List of possible options for compensation' }),
    isViewed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Has this compensation query been viewed' }),
    queryId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The ID of the late order compensation query' }),
    response: LateOrderCompensationResponseSchema.nullable()
      .exactOptional()
      .openapi({ description: 'The restaurants response to the late order compensation query' }),
  })
  .openapi({ required: [] })
  .openapi('LateOrderCompensationQuery')

const LateOrderCompensationResolutionRequestSchema = z
  .strictObject({
    acceptedAmount: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Accepted compensation amount' }),
    isAccepted: z.boolean().exactOptional().openapi({ description: 'Is compensation accepted' }),
    rejectedReasonCode: z
      .enum([
        'ExtraItem',
        'StuckInTraffic',
        'BusierThanExpected',
        'BadWeather',
        'UnexpectedProblems',
      ])
      .nullable()
      .exactOptional()
      .openapi({ description: 'Reason code for rejection' }),
  })
  .openapi({ required: [] })
  .openapi('LateOrderCompensationResolutionRequest')

const LateOrderCompensationRestaurantResolutionSchema = z
  .object({
    acceptedAmount: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The monetary amount of compensation granted, in cents/pence. Required when `isAccepted = true`.',
      }),
    isAccepted: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Flag to indicate whether a compensation request has been accepted or rejected.',
      }),
    orderId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the late order compensation request that this response relates to.',
      }),
    rejectedReasonCode: z
      .enum(['BadTraffic', 'BadWeather', 'BusierThanExpected', 'CompensatedWithItem', 'NoReason'])
      .exactOptional()
      .openapi({
        description:
          "\n- `BadTraffic` : The driver was stuck in heavy traffic, sorry.\n- `BadWeather` : The bad weather was delaying our deliveries, sorry.\n- `BusierThanExpected` : Our restaurant was busier than we expected.\n- `CompensatedWithItem` : We gave you something from the menu free of charge to make up for it.\n- `NoReason` : We're really sorry your order was late. We hope you enjoyed your food.",
      }),
  })
  .openapi({
    example: { acceptedAmount: 500, isAccepted: true, orderId: '69rqfxyfze2gjzf5nusdcw' },
    required: [],
  })
  .openapi('LateOrderCompensationRestaurantResolution')

const LateOrderInfoSchema = z
  .strictObject({
    isLateOrder: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Is there a late order request' }),
    lateOrderProcessed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Has the late order request been processed by the restaurant' }),
  })
  .openapi({ required: [] })
  .openapi('LateOrderInfo')

const LateOrderRequestSchema = z
  .strictObject({
    additionalMinutesToAdd: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Amount of minutes added' }),
    lateOrderStatus: z
      .enum(['None', 'Preparing', 'OnItsWay', 'Delivered'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'Reason to adding minutes' }),
  })
  .openapi({ required: [] })
  .openapi('LateOrderRequest')

const LateOrderRestaurantResponseSchema = z
  .object({
    additionalDeliveryTimeToAddMinutes: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The amount of time to add to the current delivery estimate in minutes',
      }),
    lateOrderStatus: z
      .enum(['Preparing', 'OnItsWay', 'Delivered'])
      .exactOptional()
      .openapi({ description: 'The updated later order query status' }),
  })
  .openapi({ required: [] })
  .openapi('LateOrderRestaurantResponse')

const LegacyTempOfflineStatusSchema = z
  .enum([
    'Unset',
    'None',
    'TempOffline',
    'ClosedToday',
    'ClosedDueToEvent',
    'FailedJctConnection',
    'NoTrOverride',
    'IgnoredOrders',
  ])
  .default('ClosedDueToEvent')
  .openapi({
    description:
      '\n- `Unset` : Legacy value meaning online.\n- `None` : Legacy value meaning online.\n- `TempOffline` : The restaurant will go temporarily offline, typically for an undetermined amount of time (no end date).\n- `ClosedToday` : The restaurant will closed for the day and the event will end the next morning.\n- `ClosedDueToEvent` : The restaurant will go offline for an event (e.g. a holiday), these events will typically have an end time.\n- `FailedJctConnection` : The restaurant will go offline due to the POS device losing connection.\n- `NoTrOverride` : The restaurant will go offline for another reason that the restaurant cannot override.\n- `IgnoredOrders` : The restaurant will go offline due to ignoring orders.',
  })
  .openapi('LegacyTempOfflineStatus')

const OfflineItemsResponseSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'Item identifier.' }),
    nextAvailableAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Time when item(s) will be brought back online (ISO-8601 Date Time UTC).',
      }),
    type: z.string().exactOptional().openapi({ description: 'Item type identifier.' }),
  })
  .openapi({
    example: { id: '111', nextAvailableAt: '2021-01-01T05:00:00.0000000Z', type: 'variation' },
    required: [],
  })
  .openapi('OfflineItemsResponse')

const ListOfOfflineItemsResponseSchema = z
  .object({
    offlineItems: z
      .array(OfflineItemsResponseSchema)
      .exactOptional()
      .openapi({ description: 'List of offline items for a given restaurant.' }),
    paging: z
      .object({
        cursors: z
          .object({
            after: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The value should be used in the query parameter named after. It is used as a cursor of the last returned record in the previous request, from which next offset going to be fetched. A missing or empty value indicates that the end of the result set has been reached.',
              }),
          })
          .exactOptional()
          .openapi({
            description: 'Consists of cursors markers used in pagination.',
            required: [],
          }),
      })
      .exactOptional()
      .openapi({ description: 'Consists of pagination information.', required: [] }),
  })
  .openapi({
    example: {
      offlineItems: [
        { id: '111', nextAvailableAt: '2021-01-01T05:00:00.0000000Z', type: 'variation' },
        { id: '222', nextAvailableAt: '2021-01-01T05:00:00.0000000Z', type: 'variation' },
        { id: '888', nextAvailableAt: '2021-01-01T05:00:00.0000000Z', type: 'modifier' },
        { id: '999', nextAvailableAt: '2021-01-01T05:00:00.0000000Z', type: 'modifier' },
      ],
      paging: { cursors: { after: 'NDMyNzQyODI3OTQw' } },
    },
    required: [],
  })
  .openapi('ListOfOfflineItemsResponse')

const LiveMetricsSchema = z
  .object({
    aajlTimestamp: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Timestamp for the average assignable job load retrieved for a given delivery zone.',
        example: 1585260360000,
      }),
    currentAajl: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Average assignable job load retrieved for a given delivery zone.',
        example: 0.7,
      }),
    marketplaceRank: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Current marketplace rank value retrieved for a given delivery zone.',
        example: -2,
      }),
    marketplaceRankStatus: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Marketplace On/Off status' }),
    throttlingStatus: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Zone Throttling On/Off status' }),
    zoneThrottling: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Current zone throttling value retrieved for a given delivery zone.',
        example: 15,
      }),
  })
  .openapi({ description: 'The live metrics object for a given delivery zone.', required: [] })
  .openapi('LiveMetrics')

const ManufacturerSchema = z
  .object({
    brand: z.string().nullable().exactOptional().openapi({ description: 'Brand name' }),
    city: z.string().nullable().exactOptional().openapi({ description: 'City' }),
    manufacturer: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Manufacturer name' }),
    origin: z.string().nullable().exactOptional().openapi({ description: 'Country' }),
    postalCode: z.string().nullable().exactOptional().openapi({ description: 'Postal Code' }),
    streetAddress: z.string().nullable().exactOptional().openapi({ description: 'Street Address' }),
  })
  .openapi({
    example: {
      brand: 'Coca-Cola Zero',
      city: 'Anderlecht',
      manufacturer: 'Coca-Cola Erfrischungsgetränke AG, Postfach 67 01 56, 10207 Berlin',
      origin: 'Deutschland',
      postalCode: '1070',
      streetAddress: 'Bergense Steenweg 1424',
    },
    required: [],
  })
  .openapi('Manufacturer')

const MarketingContentResponseSchema = z
  .looseObject({
    selected: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "The set of 'select' properties from the request that meet the following criteria: \n  1) The user has data for the property\n  2) The data for the given user is present in the 'accepted values' specified in the request.",
      }),
  })
  .openapi({
    example: {
      anotherField: 'another value',
      selected: ['subjectLine', 'anotherField'],
      subjectLine: 'humor',
    },
    required: [],
  })
  .openapi('MarketingContentResponse')

const MarketingReportResponseSchema = z
  .record(
    z.string(),
    z
      .object({
        dataExtractionDateUTC: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description: 'The UTC datetime that the report data was extracted from BigQuery',
          }),
        reportData: z
          .any()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Report data as JSON object' }),
      })
      .openapi({ required: [] }),
  )
  .openapi({
    description: 'The report data and the extraction date',
    example: {
      'orders-per-month': {
        dataExtractionDateUTC: '2019-09-03T13:10:05Z',
        reportData:
          "[{'month':3,'year':2019,'order_count':630},{'month':4,'year':2019,'order_count':583}]",
      },
      'potential-orders-per-month': {
        dataExtractionDateUTC: '2019-09-03T13:10:05Z',
        reportData:
          "[{'month':3,'year':2019,'potential_monthly_order_count':630},{'month':4,'year':2019,'potential_monthly_order_count':583}]",
      },
      'unique-customers': {
        dataExtractionDateUTC: '2019-09-03T13:10:05Z',
        reportData:
          "[{'month':3,'year':2019,'unique_customer_count':630},{'month':4,'year':2019,'unique_customer_count':583}]",
      },
    },
  })
  .openapi('MarketingReportResponse')

const MarketplaceRankSchema = z
  .object({
    aajl: z
      .number()
      .exactOptional()
      .openapi({ description: 'Average Assignable Job Load', example: 1 }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Status of the corresponding rank' }),
    rank: z
      .number()
      .exactOptional()
      .openapi({ description: 'Rank position of Average Assignable Job Load', example: -20 }),
  })
  .openapi({
    description: 'The marketplace rank object used to build a Ranking for a given delivery zone.',
    required: [],
  })
  .openapi('MarketplaceRank')

const MarketplaceRankingSettingsSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Delivery Zone Id',
        example: 'fc71ee27-608f-4223-b2ea-2774eb83c6b4',
      }),
    marketplaceRankingStatus: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Marketplace On/Off Status' }),
    ranks: z
      .array(MarketplaceRankSchema)
      .length(9)
      .exactOptional()
      .openapi({
        description:
          'Array of marketplace rank objects used to build a Ranking for a given delivery zone.',
      }),
  })
  .openapi({
    description: 'The marketplace ranking settings object for all endpoints.',
    required: [],
  })
  .openapi('MarketplaceRankingSettings')

const MarketplaceRankingSettingsListSchema = z
  .object({
    marketplaceRankSettingsList: z
      .array(MarketplaceRankingSettingsSchema)
      .length(3)
      .exactOptional()
      .openapi({ description: 'List of Marketplace Ranking Settings' }),
  })
  .openapi({ description: 'Marketplace Ranking Settings List', required: [] })
  .openapi('MarketplaceRankingSettingsList')

const MenuBaseSchema = z
  .object({
    currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The currency of the items on the menu in ISO 4217 format, i.e. GBP, EUR or AUD',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A top level description for the menu.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the restaurant.' }),
    restaurantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique identifier at tenant level for a given restaurant.' }),
  })
  .openapi({
    example: {
      currency: 'GBP',
      description: 'My excellent menu',
      name: 'My Restaurant',
      restaurantId: '100059',
    },
    required: [],
  })
  .openapi('MenuBase')

const MenuItemBaseSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the menu item.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique identifier at menu level for a menu item.' }),
    labels: z
      .array(z.enum(['hot', 'vegetarian', 'alcohol']))
      .min(0)
      .max(3)
      .exactOptional()
      .openapi({ description: 'Used to toggle front end icons for the available labels.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the menu item.' }),
    requireOtherProducts: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Cannot be selected as a stand alone item, it has to be ordered with other items. Typically this will apply to menu items within drinks and dessert categories.',
      }),
    type: z
      .enum(['menuItem', 'deal'])
      .exactOptional()
      .openapi({ description: 'Indicates whether this is a regular meal item or a deal item.' }),
  })
  .openapi({
    example: {
      description: '',
      id: '65143901',
      labels: [],
      name: 'Flat Bread and Dips (Pick any 2 Dips)',
      requireOtherProducts: false,
      type: 'menuItem',
    },
    required: [],
  })
  .openapi('MenuItemBase')

const MenuDealGroupBaseSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique identifier at menu level for a deal group.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the deal group.' }),
    numberOfChoices: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'How many deal item variations must be selected to satisfy this deal group.',
      }),
  })
  .openapi({
    example: { id: '23435309-2', name: 'Choose your pizzas', numberOfChoices: 2 },
    required: [],
  })
  .openapi('MenuDealGroupBase')

const MenuDealGroupSchema = MenuDealGroupBaseSchema.and(
  z
    .object({
      dealItemVariations: z
        .array(DealItemVariationSchema)
        .exactOptional()
        .openapi({
          description:
            'The ids of the variations that can be selected in order to satisfy this deal group.',
        }),
      id: z
        .string()
        .exactOptional()
        .openapi({ description: 'A unique identifier at menu level for a deal group.' }),
      name: z.string().exactOptional().openapi({ description: 'The name of the deal group.' }),
      numberOfChoices: z
        .int32()
        .exactOptional()
        .openapi({
          description: 'How many deal item variations must be selected to satisfy this deal group.',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    example: {
      dealItemVariations: [
        { additionPrice: 0, dealItemVariationId: '8547121', maxChoices: 1, minChoices: 0 },
        { additionPrice: 0, dealItemVariationId: '3547157', maxChoices: 1, minChoices: 0 },
        { additionPrice: 50, dealItemVariationId: '8548153', maxChoices: 1, minChoices: 0 },
      ],
      id: '23435309-2',
      name: 'Choose your pizzas',
      numberOfChoices: 2,
    },
  })
  .openapi('MenuDealGroup')

const MenuModifierSchema = z
  .object({
    additionPrice: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Selecting this modifier will increase the base price of the variation by this amount in the minor unit of the currency.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique identifier relative to the menu for a modifier.' }),
    maxChoices: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of times this modifier can be chosen within a given modifier group.',
      }),
    minChoices: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The minimum number of times this modifier can be chosen within a given modifier group.',
      }),
    name: z.string().exactOptional().openapi({ description: 'The name of the modifier.' }),
  })
  .openapi({
    example: {
      additionPrice: 200,
      id: '854600',
      maxChoices: 1,
      minChoices: 0,
      name: 'Stuffed Crust',
    },
    required: [],
  })
  .openapi('MenuModifier')

const MenuModifierGroupSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique identifier relative to the menu for a modifier group.' }),
    maxChoices: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of modifiers that must be selected to satisfy this modifier group.',
      }),
    minChoices: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The minimum number of modifiers that must be selected to satisfy this modifier group.',
      }),
    modifiers: z
      .array(MenuModifierSchema)
      .exactOptional()
      .openapi({
        description: 'The modifiers that can be selected to satisfy this modifier group.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A name for the modifier group, usually phrased as a question, e.g. Would you like any extras?',
      }),
  })
  .openapi({
    example: {
      id: '8547130-req-1',
      maxChoices: 1,
      minChoices: 1,
      modifiers: [
        { additionPrice: 0, id: '854500', maxChoices: 1, minChoices: 0, name: 'Classic Crust' },
        { additionPrice: 200, id: '854600', maxChoices: 1, minChoices: 0, name: 'Stuffed Crust' },
      ],
      name: 'Choose your crust',
    },
    required: [],
  })
  .openapi('MenuModifierGroup')

const VariationSchema = z
  .object({
    availabilityIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Maps to an availability item, availabilities determines which days and times the item can be sold.',
      }),
    basePrice: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The base price of this variation in the minor unit of the currency.',
      }),
    dealGroupsIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Maps to the deal groups that are applicable to this variation.' }),
    dealOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This flag indicates the variation is only available as part of a deal, the item will not be displayed as a stand alone menu item.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier at menu level for a variation, can be shared with parent menu item id.',
      }),
    kitchenNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies the item with a number on the physical menu that the kitchen understand e.g. on a Chinese menu number 16 could correspond to "BBQ ribs"',
      }),
    modifierGroupsIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Maps to the modifier groups that are applicable to this variation.',
      }),
    name: z.string().exactOptional().openapi({ description: 'The name of the variation.' }),
    type: z
      .enum(['noVariation', 'variation'])
      .exactOptional()
      .openapi({
        description:
          "Denotes the type of variation, `Variation` if there's multiple variations of the parent `menuitem`, `NoVariation` if there's only one",
      }),
  })
  .openapi({
    example: {
      availabilityIds: [
        '1-lunch-delivery',
        '2-lunch-collection',
        '3-dinner-delivery',
        '4-dinner-collection',
      ],
      basePrice: 1000,
      dealGroupsIds: [],
      dealOnly: false,
      id: '8547130',
      kitchenNumber: '100',
      modifierGroupsIds: ['8547130-req-1', '8547130-opt-1'],
      name: '12 inch',
      type: 'variation',
    },
    required: [],
  })
  .openapi('Variation')

const MenuItemSchema = MenuItemBaseSchema.and(
  z
    .object({
      dealGroups: z
        .array(MenuDealGroupSchema)
        .exactOptional()
        .openapi({ description: 'A set of deal groups for this menu item.' }),
      imageUrl: z.string().exactOptional().openapi({ description: 'A menu item image URL.' }),
      modifierGroups: z
        .array(MenuModifierGroupSchema)
        .exactOptional()
        .openapi({ description: 'A set of modifier groups for this menu item.' }),
      variations: z
        .array(VariationSchema)
        .exactOptional()
        .openapi({ description: 'A set of variations of this menu item.' }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    example: {
      dealGroups: [],
      description: '',
      id: '65143901',
      imageUrl: 'http://cdn.images/flat_bread_dips.png',
      labels: [],
      modifierGroups: [
        {
          id: '65143901-req-1',
          maxChoices: 1,
          minChoices: 1,
          modifiers: [
            { additionPrice: 0, id: '834502', maxChoices: 1, minChoices: 0, name: 'Pitta Bread' },
            { additionPrice: 0, id: '835700', maxChoices: 1, minChoices: 0, name: 'Sourdough' },
            { additionPrice: 50, id: '835601', maxChoices: 1, minChoices: 0, name: 'Wholemeal' },
          ],
          name: 'Bread',
        },
        {
          id: '65143901-req-2',
          maxChoices: 2,
          minChoices: 2,
          modifiers: [
            { additionPrice: 0, id: '835340', maxChoices: 2, minChoices: 0, name: 'Tzatziki' },
            { additionPrice: 0, id: '835341', maxChoices: 2, minChoices: 0, name: 'Taramasalata' },
            { additionPrice: 0, id: '825344', maxChoices: 2, minChoices: 0, name: 'Hummus' },
            { additionPrice: 0, id: '825346', maxChoices: 2, minChoices: 0, name: 'Onion' },
          ],
          name: 'Dips',
        },
      ],
      name: 'Flat Bread and Dips (Pick any 2 Dips)',
      requireOtherProducts: false,
      type: 'menuItem',
      variations: [
        {
          availabilityIds: [
            '1-lunch-delivery',
            '2-lunch-collection',
            '3-dinner-delivery',
            '4-dinner-collection',
          ],
          basePrice: 650,
          dealGroupsIds: [],
          dealOnly: false,
          id: '65143901',
          kitchenNumber: '90',
          modifierGroupsIds: ['65143901-req-1', '65143901-req-2'],
          name: '',
          type: 'noVariation',
        },
      ],
    },
  })
  .openapi('MenuItem')

const MenuSchema = MenuBaseSchema.and(
  z
    .object({
      availabilities: z
        .array(AvailabilitySchema)
        .exactOptional()
        .openapi({
          description:
            'A set of availabilities that can later be referenced by individual menu items.',
        }),
      categories: z
        .array(CategorySchema)
        .exactOptional()
        .openapi({ description: 'A set of categories that appear on the menu.' }),
      items: z
        .array(MenuItemSchema)
        .exactOptional()
        .openapi({ description: 'All of the menu items within the menu.' }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    example: {
      categories: [
        { description: '', id: '3', itemIds: ['65143901'], name: 'Starters' },
        { description: '', id: '4', itemIds: ['23435309', '33445308'], name: 'Deals' },
        { description: '', id: '5', itemIds: ['8547130', '8547140'], name: 'Pizzas' },
        { description: '', id: '6', itemIds: ['6537130', '6537140'], name: 'Drinks' },
      ],
      currency: 'GBP',
      description: 'My excellent menu',
      name: 'My Restaurant',
      restaurantId: '100059',
    },
  })
  .openapi('Menu')

const ModifierResponseSchema: z.ZodType<ModifierResponseType> = z
  .lazy(() =>
    z
      .object({
        AdditionPrice: z.float64().exactOptional().openapi({ description: 'The additional price' }),
        DefaultChoices: z
          .int32()
          .exactOptional()
          .openapi({ description: 'The default number of options allowed to be selected' }),
        Id: z.string().exactOptional().openapi({ description: 'Id of the modifier' }),
        MaxChoices: z
          .int32()
          .exactOptional()
          .openapi({ description: 'The maximum number of options allowed to be selected' }),
        MinChoices: z
          .int32()
          .exactOptional()
          .openapi({ description: 'The minimum number of options allowed to be selected' }),
        Name: z.string().exactOptional().openapi({ description: 'Name of the modifier' }),
        RemovePrice: z.float64().exactOptional().openapi({ description: 'The cost to remove' }),
        Variations: z
          .array(VariationModifierResponseSchema)
          .exactOptional()
          .openapi({ description: 'The variations to which this modifiers applies' }),
      })
      .openapi({
        example: {
          Id: '9',
          Name: 'Ham',
          Variations: [
            {
              AdditionPrice: 0.5,
              ModifierGroupId: '1',
              Selected: true,
              VariationId: '4',
              VariationName: 'Large',
            },
          ],
        },
        required: [],
      }),
  )
  .openapi('ModifierResponse')

const ModifierGroupResponseSchema = z
  .object({
    Id: z.string().exactOptional().openapi({ description: 'Id of Modifier Group' }),
    MaxChoices: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The maximum number of options allowed to be selected' }),
    MinChoices: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The minimum number of options allowed to be selected' }),
    Modifiers: z
      .array(ModifierResponseSchema)
      .exactOptional()
      .openapi({ description: 'A list of modifiers within the group' }),
    Name: z.string().exactOptional().openapi({ description: 'Name of Modifier Group' }),
  })
  .openapi({
    example: {
      Id: '1',
      MaxChoices: 3,
      MinChoices: 0,
      Modifiers: [
        {
          Id: '9',
          Name: 'Ham',
          Variations: [
            {
              AdditionPrice: 0.5,
              ModifierGroupId: '1',
              Selected: true,
              VariationId: '4',
              VariationName: 'Large',
            },
          ],
        },
        {
          Id: '10',
          Name: 'Sausage',
          Variations: [
            {
              AdditionPrice: 0.5,
              ModifierGroupId: '1',
              Selected: true,
              VariationId: '4',
              VariationName: 'Large',
            },
          ],
        },
      ],
      Name: 'Toppings',
    },
    required: [],
  })
  .openapi('ModifierGroupResponse')

const VariationResponseSchema = z
  .object({
    Id: z.string().exactOptional().openapi({ description: 'Id' }),
    Name: z.string().exactOptional().openapi({ description: 'Name' }),
    OptionGroupIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of option group ids applicable to this variation' }),
    PreferenceGroupIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of preference group ids applicable to this variation' }),
    Price: z.float64().exactOptional().openapi({ description: 'Price' }),
    Type: z.string().exactOptional().openapi({ description: 'Type' }),
  })
  .openapi({
    example: {
      Id: '32',
      Name: 'Large',
      OptionGroupIds: ['1'],
      PreferenceGroupIds: ['12', '32'],
      Price: 12.32,
    },
    required: [],
  })
  .openapi('VariationResponse')

const MenuEditResponseSchema = z
  .object({
    CategoryId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Id of the category of the menu item' }),
    CategoryName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the category of the menu item' }),
    Description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the menu item' }),
    EditType: z
      .enum(['Add', 'Edit', 'Delete', 'None'])
      .exactOptional()
      .openapi({ description: 'Action being applied to the menu item' }),
    Labels: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Labels for the menu item' }),
    MenuItemId: z.string().exactOptional().openapi({ description: 'Id of the menu item' }),
    MenuItemName: z.string().exactOptional().openapi({ description: 'Name of the menu item' }),
    OptionGroups: z
      .array(ModifierGroupResponseSchema)
      .exactOptional()
      .openapi({ description: 'Option groups available for the menu item' }),
    PreferenceGroups: z
      .array(ModifierGroupResponseSchema)
      .exactOptional()
      .openapi({ description: 'Preference groups available for the menu item' }),
    ReceiptNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Receipt or kitchen number of the menu item' }),
    Variations: z
      .array(VariationResponseSchema)
      .exactOptional()
      .openapi({ description: 'Variations applicable to the menu item' }),
  })
  .openapi({
    example: {
      CategoryId: '1',
      CategoryName: 'Pizzas',
      Description: 'Cheesy pizza',
      EditType: 'Add',
      Labels: ['Vegetarian'],
      MenuItemId: '12',
      MenuItemName: 'Cheese pizza',
      OptionGroups: [
        {
          Id: '1',
          MaxChoices: 1,
          MinChoices: 1,
          Modifiers: [
            {
              Id: '9',
              Name: 'Gluten-free',
              Variations: [
                {
                  AdditionPrice: 1.5,
                  ModifierGroupId: '1',
                  Selected: true,
                  VariationId: '4',
                  VariationName: 'Large',
                },
                {
                  AdditionPrice: 1.3,
                  ModifierGroupId: '1',
                  Selected: true,
                  VariationId: '5',
                  VariationName: 'Small',
                },
              ],
            },
          ],
          Name: 'Bases',
        },
      ],
      PreferenceGroups: [
        {
          Id: '12',
          MaxChoices: 1,
          MinChoices: 0,
          Modifiers: [
            {
              Id: '9',
              Name: 'Ham',
              Variations: [
                {
                  AdditionPrice: 0.5,
                  ModifierGroupId: '12',
                  Selected: true,
                  VariationId: '4',
                  VariationName: 'Large',
                },
              ],
            },
          ],
          Name: 'Meats',
        },
        {
          Id: '32',
          MaxChoices: 1,
          MinChoices: 0,
          Modifiers: [
            {
              Id: '7',
              Name: 'Pineapple',
              Variations: [
                {
                  AdditionPrice: 0.5,
                  ModifierGroupId: '32',
                  Selected: true,
                  VariationId: '4',
                  VariationName: 'Large',
                },
                {
                  AdditionPrice: 0.3,
                  ModifierGroupId: '32',
                  Selected: true,
                  VariationId: '5',
                  VariationName: 'Small',
                },
              ],
            },
          ],
          Name: 'Veggies',
        },
      ],
      ReceiptNumber: '123',
      Variations: [
        {
          Id: '4',
          Name: 'Large',
          OptionGroupIds: ['1'],
          PreferenceGroupIds: ['12', '32'],
          Price: 12.32,
        },
        { Id: '5', Name: 'Small', OptionGroupIds: ['1'], PreferenceGroupIds: ['32'], Price: 8.99 },
      ],
    },
    required: [],
  })
  .openapi('MenuEditResponse')

const MenuAllEditsResponseSchema = z
  .array(MenuEditResponseSchema)
  .openapi({
    description: 'All pending changes',
    example: [
      {
        CategoryId: '1',
        CategoryName: 'Pizzas',
        Description: "It's a pizza",
        EditType: 'Add',
        Labels: ['Vegetarian'],
        MenuItemId: '123',
        MenuItemName: 'Cheese Pizza',
        OptionGroups: [
          {
            Id: '1',
            MaxChoices: 1,
            MinChoices: 1,
            Modifiers: [
              {
                Id: '9',
                Name: 'Gluten-free',
                Variations: [
                  {
                    AdditionPrice: 1.5,
                    ModifierGroupId: '1',
                    Selected: true,
                    VariationId: '4',
                    VariationName: 'Large',
                  },
                  {
                    AdditionPrice: 1.3,
                    ModifierGroupId: '1',
                    Selected: true,
                    VariationId: '5',
                    VariationName: 'Small',
                  },
                ],
              },
            ],
            Name: 'Bases',
          },
        ],
        PreferenceGroups: [
          {
            Id: '12',
            MaxChoices: 1,
            MinChoices: 0,
            Modifiers: [
              {
                Id: '9',
                Name: 'Ham',
                Variations: [
                  {
                    AdditionPrice: 0.5,
                    ModifierGroupId: '12',
                    Selected: true,
                    VariationId: '4',
                    VariationName: 'Large',
                  },
                ],
              },
            ],
            Name: 'Meats',
          },
        ],
        ReceiptNumber: '321a',
        Variations: [
          {
            Id: '32',
            Name: 'Large',
            OptionGroupIds: ['1'],
            PreferenceGroupIds: ['12', '32'],
            Price: 12.32,
            Type: '???',
          },
        ],
      },
    ],
  })
  .openapi('MenuAllEditsResponse')

const MergedProductSchema = z
  .strictObject({
    id: z.string().nullable().exactOptional().openapi({ description: 'The id of the product' }),
    ids: z
      .array(z.int32())
      .nullable()
      .exactOptional()
      .openapi({ deprecated: true, description: 'Deprecated, not in use' }),
    isOffline: z.boolean().exactOptional().openapi({ description: 'Is this product offline?' }),
    name: z.string().nullable().exactOptional().openapi({ description: 'Product name' }),
  })
  .openapi({ required: [] })
  .openapi('MergedProduct')

const ProductGroupSchema = z
  .strictObject({
    products: z
      .array(MergedProductSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'List of products' }),
  })
  .openapi({ required: [] })
  .openapi('ProductGroup')

const MenuCategorySchema = z
  .strictObject({
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Description of category', readOnly: true }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Name of category', readOnly: true }),
    productGroups: z
      .array(ProductGroupSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Product group', readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('MenuCategory')

const MenuIngestionResponseSchema = z
  .object({
    correlationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'An ID for the asynchronous operation to ingest the menu' }),
  })
  .openapi({ example: { correlationId: '64bef5ee-7265-47f8-9aee-28bc74f00b13' }, required: [] })
  .openapi('MenuIngestionResponse')

const MenuItemDetailsResponseSchema = z
  .object({
    Category: CategoryResponseSchema.exactOptional().openapi({
      description: 'Category of the menu item',
    }),
    Description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the menu item' }),
    HasPendingChange: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the item has pending changes' }),
    Id: z.string().exactOptional().openapi({ description: 'Id of the menu item' }),
    IsDeal: z.boolean().exactOptional().openapi({ description: 'Is a deal' }),
    Labels: z.array(z.string()).exactOptional().openapi({ description: 'Labels of the menu item' }),
    Name: z.string().exactOptional().openapi({ description: 'Name of the menu item' }),
    OptionGroups: z
      .array(ModifierGroupResponseSchema)
      .exactOptional()
      .openapi({ description: 'Option groups of the menu item' }),
    PreferenceGroups: z
      .array(ModifierGroupResponseSchema)
      .exactOptional()
      .openapi({ description: 'Preference groups of the menu item' }),
    ReceiptNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The receipt or kitchen number of the menu item' }),
    Variations: z
      .array(VariationResponseSchema)
      .exactOptional()
      .openapi({ description: 'Variations applicable to the menu item' }),
  })
  .openapi({
    example: {
      Category: { Id: '21', Name: 'Pizzas' },
      Description: 'Boring pizza',
      HasPendingChange: true,
      Id: '1',
      IsDeal: false,
      Labels: ['Vegetarian'],
      Name: 'Pizza',
      OptionGroups: [
        {
          Id: '1',
          MaxChoices: 1,
          MinChoices: 1,
          Modifiers: [
            {
              Id: '9',
              Name: 'Gluten-free',
              Variations: [
                {
                  AdditionPrice: 1.5,
                  ModifierGroupId: '1',
                  Selected: true,
                  VariationId: '4',
                  VariationName: 'Large',
                },
                {
                  AdditionPrice: 1.3,
                  ModifierGroupId: '1',
                  Selected: true,
                  VariationId: '5',
                  VariationName: 'Small',
                },
              ],
            },
          ],
          Name: 'Bases',
        },
      ],
      PreferenceGroups: [
        {
          Id: '12',
          MaxChoices: 1,
          MinChoices: 0,
          Modifiers: [
            {
              Id: '9',
              Name: 'Ham',
              Variations: [
                {
                  AdditionPrice: 0.5,
                  ModifierGroupId: '12',
                  Selected: true,
                  VariationId: '4',
                  VariationName: 'Large',
                },
              ],
            },
          ],
          Name: 'Meats',
        },
        {
          Id: '32',
          MaxChoices: 1,
          MinChoices: 0,
          Modifiers: [
            {
              Id: '7',
              Name: 'Pineapple',
              Variations: [
                {
                  AdditionPrice: 0.5,
                  ModifierGroupId: '32',
                  Selected: true,
                  VariationId: '4',
                  VariationName: 'Large',
                },
                {
                  AdditionPrice: 0.3,
                  ModifierGroupId: '32',
                  Selected: true,
                  VariationId: '5',
                  VariationName: 'Small',
                },
              ],
            },
          ],
          Name: 'Veggies',
        },
      ],
      ReceiptNumber: '987',
      Variations: [
        {
          Id: '4',
          Name: 'Large',
          OptionGroupIds: ['1'],
          PreferenceGroupIds: ['12', '32'],
          Price: 12.32,
        },
        { Id: '5', Name: 'Small', OptionGroupIds: ['1'], PreferenceGroupIds: ['32'], Price: 8.99 },
      ],
    },
    required: [],
  })
  .openapi('MenuItemDetailsResponse')

const MenuItemResponseSchema = z
  .object({
    Description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the menu item' }),
    HasPendingChange: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the item has pending changes' }),
    Id: z.string().exactOptional().openapi({ description: 'Id of the menu item' }),
    IsDeal: z.boolean().exactOptional().openapi({ description: 'Is a deal' }),
    Labels: z.array(z.string()).exactOptional().openapi({ description: 'Labels of the menu item' }),
    Name: z.string().exactOptional().openapi({ description: 'Name of the menu item' }),
    ReceiptNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The receipt or kitchen number of the menu item' }),
    Variations: z
      .array(VariationResponseSchema)
      .exactOptional()
      .openapi({ description: 'Variations applicable to the menu item' }),
  })
  .openapi({
    example: {
      Description: "It's a pizza",
      HasPendingChange: true,
      Id: '1',
      IsDeal: false,
      Labels: ['Vegetarian'],
      Name: 'Pizza',
      ReceiptNumber: '123',
      Variations: [
        {
          Id: '4',
          Name: 'Large',
          OptionGroupIds: ['1'],
          PreferenceGroupIds: ['12', '32'],
          Price: 12.32,
        },
        { Id: '5', Name: 'Small', OptionGroupIds: ['1'], PreferenceGroupIds: ['32'], Price: 8.99 },
      ],
    },
    required: [],
  })
  .openapi('MenuItemResponse')

const MenuItemVariationResponseSchema = z
  .object({
    MenuItemId: z.string().exactOptional().openapi({ description: 'Id of the menu item' }),
    PreferenceGroupsIds: z
      .array(z.int32())
      .exactOptional()
      .openapi({ description: 'List of Preference Group Ids' }),
    UnitsOfferedInDealGroup: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Units offered in deal group' }),
    VariationId: z.string().exactOptional().openapi({ description: 'Id of the variation' }),
  })
  .openapi({
    example: {
      MenuItemId: '1',
      PreferenceGroupsIds: [4, 5],
      UnitsOfferedInDealGroup: 3,
      VariationId: '9',
    },
    required: [],
  })
  .openapi('MenuItemVariationResponse')

const MenuRecommendationsRequestSchema = z
  .object({
    orderRequestDetails: z
      .object({
        dayOfWeek: z
          .enum(['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'])
          .exactOptional()
          .openapi({ description: 'The day of the week that the order is placed for.' }),
        orderedForTime: z
          .string()
          .regex(
            /^(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|[+-](?:[01]\d|2[0-3]):[0-5]\d)?$/,
          )
          .exactOptional()
          .openapi({
            format: 'time',
            description:
              'The time, local to restaurant, in ISO 8601 format, that the order is requested for. If the ordered for time is not known at the point of this request then the time should be the current local time.\n',
          }),
        serviceType: z
          .enum(['collection', 'delivery'])
          .exactOptional()
          .openapi({ description: 'The service type, "collection" or "delivery".' }),
      })
      .openapi({
        description: 'Defines the time and service type for which the order is requested.',
        required: [],
      }),
    restaurantId: z
      .string()
      .openapi({ description: 'The id of the restaurant that the recommendations are for.' }),
  })
  .openapi({
    description: 'Describes a request for dish recommendations for a particular restaurant menu.',
    required: ['restaurantId', 'orderRequestDetails'],
  })
  .openapi('MenuRecommendationsRequest')

const MenuRecommendationsResponseSchema = z
  .object({
    themes: z
      .array(
        z
          .object({
            id: z
              .string()
              .exactOptional()
              .openapi({ description: 'Unique identifier for the theme.' }),
            recommendations: z
              .array(
                z
                  .object({
                    confidence: z
                      .float64()
                      .exactOptional()
                      .openapi({ description: 'Recommendation confidence score.' }),
                    productId: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'ID of a product/dish being recommended.' }),
                    type: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'Describes the type of recommendation, i.e. popular, healthy.',
                      }),
                  })
                  .openapi({ required: [] }),
              )
              .min(0)
              .max(20)
              .exactOptional()
              .openapi({ description: 'List of dish recommendations for the theme.' }),
          })
          .openapi({ required: [] }),
      )
      .min(0)
      .max(10)
      .openapi({
        description:
          'List of the themes of the recommendations, i.e. personal favourites, most popular, etc.',
      }),
  })
  .openapi({ description: 'Contains menu dish recommendations.', required: ['themes'] })
  .openapi('MenuRecommendationsResponse')

const MergedMenuCardSchema = z
  .strictObject({
    categories: z
      .record(z.string(), MenuCategorySchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Menu items of the restaurant with offline/online statuses grouped by category',
      }),
  })
  .openapi({ required: [] })
  .openapi('MergedMenuCard')

const MergedMenuResponseSchema = z
  .strictObject({
    menuCard: MergedMenuCardSchema.exactOptional().openapi({
      description: 'Menu items of the restaurant with offline/online statuses grouped by category',
    }),
  })
  .openapi({ required: [] })
  .openapi('MergedMenuResponse')

const MissingItemSchema = z
  .strictObject({
    itemReference: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Product reference of missing item' }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Name of the missing item' }),
    quantity: z.int32().exactOptional().openapi({ description: 'Number of items missing' }),
    refundAmount: z.number().exactOptional().openapi({ description: 'Total cost of missing item' }),
  })
  .openapi({ required: [] })
  .openapi('MissingItem')

const MissingItemClaimStatusSchema = z
  .enum(['Unknown', 'Pending', 'Viewed', 'RefundAccepted', 'RefundRefused'])
  .openapi({ description: 'Status of missing item claim' })
  .openapi('MissingItemClaimStatus')

const MissingItemClaimSchema = z
  .strictObject({
    id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Id of the missing item claim' }),
    missingItems: z
      .array(MissingItemSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Items that are missing' }),
    refundRefusedReasonCode: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Reason for refusing if status is refused' }),
    status: MissingItemClaimStatusSchema.exactOptional().openapi({
      description: 'Current status of the missing item claim',
    }),
    totalAmount: z.number().exactOptional().openapi({ description: 'Total cost of the claim' }),
    totalNumberItems: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Total quantity of items in the claim' }),
  })
  .openapi({ required: [] })
  .openapi('MissingItemClaim')

const NotFoundMarketingResponseSchema = MarketingErrorResponseSchema.openapi({
  description: '404 Not Found Returned',
  example: {
    errors: [{ description: 'Campaign Not found', errorCode: '404' }],
    faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
    message: 'The requested resource could not found.',
  },
}).openapi('NotFoundMarketingResponse')

const NutritionalSchema = z
  .object({
    alcohol: z
      .object({
        unit: z.string().exactOptional().openapi({ description: 'Unit of the item' }),
        value: z.number().nullable().exactOptional().openapi({ description: 'Value of the item' }),
      })
      .exactOptional()
      .openapi({ description: 'Alcohol by volume value for product', required: [] }),
    caffeine: z
      .object({
        unit: z.string().exactOptional().openapi({ description: 'Unit of the item' }),
        value: z.number().nullable().exactOptional().openapi({ description: 'Value of the item' }),
      })
      .exactOptional()
      .openapi({ description: 'Caffeine milligram value for product', required: [] }),
    calories: z
      .object({
        unit: z.string().exactOptional().openapi({ description: 'Unit of the item' }),
        value: z.number().nullable().exactOptional().openapi({ description: 'Value of the item' }),
      })
      .exactOptional()
      .openapi({ description: 'Calories value for product', required: [] }),
    carbohydrate: z
      .object({
        unit: z.string().exactOptional().openapi({ description: 'Unit of the item' }),
        value: z.number().nullable().exactOptional().openapi({ description: 'Value of the item' }),
      })
      .exactOptional()
      .openapi({ description: 'Carbohydrate value for product', required: [] }),
    energy: z
      .object({
        unit: z.string().exactOptional().openapi({ description: 'Unit of the item' }),
        value: z.number().nullable().exactOptional().openapi({ description: 'Value of the item' }),
      })
      .exactOptional()
      .openapi({ description: 'Energy value for product', required: [] }),
    fat: z
      .object({
        unit: z.string().exactOptional().openapi({ description: 'Unit of the item' }),
        value: z.number().nullable().exactOptional().openapi({ description: 'Value of the item' }),
      })
      .exactOptional()
      .openapi({ description: 'Fat value for product', required: [] }),
    fattyAcidTotal: z
      .object({
        unit: z.string().exactOptional().openapi({ description: 'Unit of the item' }),
        value: z.number().nullable().exactOptional().openapi({ description: 'Value of the item' }),
      })
      .exactOptional()
      .openapi({ description: 'Fatty Acid value for product', required: [] }),
    protein: z
      .object({
        unit: z.string().exactOptional().openapi({ description: 'Unit of the item' }),
        value: z.number().nullable().exactOptional().openapi({ description: 'Value of the item' }),
      })
      .exactOptional()
      .openapi({ description: 'Protein value for product', required: [] }),
    salt: z
      .object({
        unit: z.string().exactOptional().openapi({ description: 'Unit of the item' }),
        value: z.number().nullable().exactOptional().openapi({ description: 'Value of the item' }),
      })
      .exactOptional()
      .openapi({ description: 'Salt value for product', required: [] }),
    sodium: z
      .object({
        unit: z.string().exactOptional().openapi({ description: 'Unit of the item' }),
        value: z.number().nullable().exactOptional().openapi({ description: 'Value of the item' }),
      })
      .exactOptional()
      .openapi({ description: 'Sodium value for product', required: [] }),
    sugar: z
      .object({
        unit: z.string().exactOptional().openapi({ description: 'Unit of the item' }),
        value: z.number().nullable().exactOptional().openapi({ description: 'Value of the item' }),
      })
      .exactOptional()
      .openapi({ description: 'Sugar value for product', required: [] }),
  })
  .openapi({
    example: {
      alcohol: { unit: '%', value: 7.5 },
      caffeine: { unit: 'mg', value: 10 },
      calories: { unit: 'kcal', value: 42 },
      carbohydrate: { unit: 'mg', value: 22000 },
      energy: { unit: 'kJ', value: 175.5 },
      fat: { unit: 'mg', value: 16000 },
      fattyAcidTotal: { unit: 'mg', value: 100 },
      protein: { unit: 'mg', value: 4000.01 },
      salt: { unit: 'mg', value: 20 },
      sodium: { unit: 'mg', value: 10 },
      sugar: { unit: 'mg', value: 9100 },
    },
    required: [],
  })
  .openapi('Nutritional')

const PartnerConsumerSegmentSchema = z
  .enum(['All', 'NewToRestaurant'])
  .openapi('PartnerConsumerSegment')

const PartnerOfferTypeSchema = z
  .enum(['Percent', 'FreeItem', 'Bogof', 'StampCard'])
  .openapi('PartnerOfferType')

const OfferSchema = z
  .object({
    campaignId: z.string().nullable().exactOptional().openapi({ description: 'Campaign id' }),
    consumerSegment: PartnerConsumerSegmentSchema.exactOptional().openapi({
      description: 'Consumer Segment to which offer applies',
    }),
    dayOfWeek: z
      .enum(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])
      .exactOptional()
      .openapi({ description: 'Day of week to run the offer' }),
    discountAmount: z.float64().exactOptional().openapi({ description: 'Amount of the discount' }),
    endTime: z
      .string()
      .regex(
        /^(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|[+-](?:[01]\d|2[0-3]):[0-5]\d)?$/,
      )
      .nullable()
      .exactOptional()
      .openapi({ format: 'time', description: 'Timestamp when offer ends during the day' }),
    freeProducts: z
      .array(
        z
          .object({
            id: z
              .string()
              .exactOptional()
              .openapi({ description: 'The unique identifier of the product.' }),
            modifiers: z
              .array(
                z
                  .object({
                    modifierId: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'The unique identifier of the modifier.' }),
                    quantity: z
                      .int32()
                      .exactOptional()
                      .openapi({ description: 'The required quantity of the modifier.' }),
                  })
                  .openapi({ required: [] }),
              )
              .nullable()
              .exactOptional()
              .openapi({ description: 'The collection of preselected modifiers for the item.' }),
          })
          .openapi({ required: [] }),
      )
      .nullable()
      .exactOptional()
      .openapi({ description: 'The product that gets 100% discount applied' }),
    id: z.string().exactOptional().openapi({ description: 'Internal id of the offer' }),
    offerDescription: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The description of the offer.' }),
    offerType: PartnerOfferTypeSchema.exactOptional().openapi({ description: 'Type of the offer' }),
    qualifyingProductIds: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'One of those products needed to be included in the collection of products to make offer applicable',
      }),
    qualifyingValue: z
      .object({
        currency: z
          .string()
          .exactOptional()
          .openapi({ description: 'Currency code in ISO 4217 format' }),
        value: z
          .int32()
          .exactOptional()
          .openapi({ description: 'Smallest unit of local currency' }),
      })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Minimum qualifying value for offer to be applied', required: [] }),
    startTime: z
      .string()
      .regex(
        /^(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|[+-](?:[01]\d|2[0-3]):[0-5]\d)?$/,
      )
      .nullable()
      .exactOptional()
      .openapi({ format: 'time', description: 'Timestamp when offer starts during the day' }),
    validFrom: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date when offer starts' }),
    validTo: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'The date when offer ends' }),
  })
  .openapi({
    description: 'The object representing offer entry',
    example: {
      consumerSegment: 'All',
      dayOfWeek: 'Monday',
      discountAmount: 15,
      discountType: 'Percent',
      endTime: '09:00:00',
      id: '1',
      offerType: 'Percent',
      qualifyingValue: { currency: 'GBP', value: 1000 },
      startTime: '06:00:00',
      validFrom: '2019-08-06T09:01:12.970Z',
      validTo: '2019-09-03T00:00:00.000Z',
    },
    required: [],
  })
  .openapi('Offer')

const OfferCampaignSchema = z
  .object({
    active: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Calculated, is the campaign enabled and within start and end date',
        readOnly: true,
      }),
    daysOfWeek: z
      .array(z.enum(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']))
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'Days of week to run the campaign' }),
    discountAmount: z.float64().exactOptional().openapi({ description: 'Amount of the discount' }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Is the offer campaign allowed to be active', readOnly: false }),
    end: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'The date when offer campaign ends', readOnly: false }),
    id: z.string().exactOptional().openapi({ description: 'Internal id of the offer campaign' }),
    qualifyingValue: z
      .object({
        currency: z
          .string()
          .exactOptional()
          .openapi({ description: 'Currency code in ISO 4217 format' }),
        value: z
          .int32()
          .exactOptional()
          .openapi({ description: 'Smallest unit of local currency' }),
      })
      .exactOptional()
      .openapi({ description: 'qualifying value for a given offer template', required: [] }),
    start: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'The date when offer campaign starts', readOnly: false }),
    subscribed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Is restaurant subscribed to this campaign', readOnly: true }),
    type: z
      .enum(['CheekyCampaign', 'DonationCampaign', 'FastMovingGoodsCampaign'])
      .exactOptional()
      .openapi({ description: 'Type of the offer campaign' }),
  })
  .openapi({
    example: {
      active: true,
      daysOfWeek: ['Monday', 'Friday'],
      discountAmount: 15,
      enabled: true,
      end: '2019-09-03T00:00:00.000Z',
      id: '1',
      qualifyingValue: { currency: 'GBP', value: 5000 },
      start: '2019-08-06T09:01:12.970Z',
      subscribed: true,
      type: 'CheekyCampaign',
    },
    required: [],
  })
  .openapi('OfferCampaign')

const OfferTemplateSchema = z
  .object({
    consumerSegment: PartnerConsumerSegmentSchema.exactOptional().openapi({
      description: 'Consumer Segment that offer applies',
    }),
    discountValue: z.float64().exactOptional().openapi({ description: 'Amount of the discount' }),
    id: z.int32().exactOptional().openapi({ description: 'Internal id of the offer template' }),
    maxQualifyingValue: z
      .object({
        currency: z
          .string()
          .exactOptional()
          .openapi({ description: 'Currency code in ISO 4217 format' }),
        value: z
          .int32()
          .exactOptional()
          .openapi({ description: 'Smallest unit of local currency' }),
      })
      .exactOptional()
      .openapi({
        description: 'Maximum qualifying value for a given offer template',
        required: [],
      }),
    offerType: PartnerOfferTypeSchema.exactOptional().openapi({ description: 'Type of the offer' }),
  })
  .openapi({
    example: {
      consumerSegment: 'All',
      discountValue: 15,
      id: 333,
      maxQualifyingValue: { currency: 'GBP', value: 5000 },
      offerType: 'Percent',
    },
    required: [],
  })
  .openapi('OfferTemplate')

const OfflineItemsRequestSchema = z
  .object({
    modifierIds: z
      .array(z.string())
      .min(0)
      .max(25)
      .exactOptional()
      .openapi({
        description: 'Modifier identifiers. Maximum sum of 25 Variation and Modifier IDs.',
      }),
    nextAvailableAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Time when items will be brought back online (ISO-8601 Date Time UTC).',
      }),
    variationIds: z
      .array(z.string())
      .min(0)
      .max(25)
      .exactOptional()
      .openapi({
        description: 'Variation identifiers. Maximum sum of 25 Variation and Modifier IDs.',
      }),
  })
  .openapi({
    example: {
      modifierIds: ['777', '888', '999'],
      nextAvailableAt: '2021-01-01T05:00:00.0000000Z',
      variationIds: ['111', '222', '333'],
    },
    required: [],
  })
  .openapi('OfflineItemsRequest')

const OrderpadOfflineProductSchema = z
  .strictObject({
    createdBy: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Application which requested operation e.g. Orderpad, RestaurantApp',
      }),
    createdOn: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date and time in ISO 8601 format taken offline' }),
    nextAvailableAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Date and time in ISO 8601 format when item will be brought back online',
      }),
    productId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The id of the menu item' }),
    restaurantId: z.int32().exactOptional().openapi({ description: 'The Id of the restaurant' }),
  })
  .openapi({ required: [] })
  .openapi('OrderpadOfflineProduct')

const OfflineProductsResponseSchema = z
  .strictObject({
    offlineProducts: z
      .array(OrderpadOfflineProductSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Array of men items which are offline currently' }),
  })
  .openapi({ required: [] })
  .openapi('OfflineProductsResponse')

const OfflineRestaurantsRequestModelSchema = z
  .strictObject({
    allowRestaurantOverride: z
      .boolean()
      .openapi({
        description:
          'Whether a restaurant should be allowed to delete this event, regardless of who raised it.',
      }),
    category: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'A free text category used to group multiple events. This field is not intended to be used by clients.',
      }),
    duration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Either a timespan in the HH:mm format or `untilTomorrow` (this will be the next day at 4:30 am +/- 10 minutes local time). Note if both duration and `endDate` are specified duration takes precedence.',
      }),
    endDate: z.iso
      .datetime({ offset: true })
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({ description: 'ISO 8601 format of the end datetime of the offline event.' }),
    legacyTempOfflineType: LegacyTempOfflineStatusSchema.exactOptional(),
    name: z.string().openapi({ description: 'Name of the offline event to be created.' }),
    reason: z.string().openapi({ description: 'The reason for creating the offline event.' }),
    restaurantIds: z
      .string()
      .openapi({
        description:
          'A comma separated list of the IDs of the restaurants to include in the offline event. No limit to the number accepted by the endpoint, but unexpected behaviour mat occur at more than 500 IDs.',
      }),
    startDate: z.iso
      .datetime({ offset: true })
      .min(1)
      .openapi({ description: 'ISO 8601 format of the start datetime of the offline event.' }),
  })
  .openapi({
    example: {
      allowRestaurantOverride: true,
      duration: '1:00:00',
      name: 'Out of Chicken',
      reason: 'No more chicken in stock.',
      restaurantIds: '12345',
      startDate: '2020-01-16T09:00:00Z',
    },
    required: ['restaurantIds', 'name', 'reason', 'startDate', 'allowRestaurantOverride'],
  })
  .openapi('OfflineRestaurantsRequestModel')

const OnlineItemsRequestSchema = z
  .object({
    modifierIds: z
      .array(z.string())
      .min(0)
      .max(25)
      .exactOptional()
      .openapi({
        description: 'Modifier identifiers. Maximum sum of 25 Variation and Modifier IDs.',
      }),
    variationIds: z
      .array(z.string())
      .min(0)
      .max(25)
      .exactOptional()
      .openapi({
        description: 'Variation identifiers. Maximum sum of 25 Variation and Modifier IDs.',
      }),
  })
  .openapi({
    example: { modifierIds: ['777', '888', '999'], variationIds: ['111', '222', '333'] },
    required: [],
  })
  .openapi('OnlineItemsRequest')

const OptimizelyDataSchema = z
  .strictObject({
    cdnUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Location of the Optimizely data file' }),
    dataFileRevision: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The index of the Optimizely revision' }),
  })
  .openapi({ required: [] })
  .openapi('OptimizelyData')

const OrderGeoPositionSchema = z
  .object({
    latitude: z
      .number()
      .exactOptional()
      .openapi({ description: "The latitude value of the customer's Geoposition." }),
    longitude: z
      .number()
      .exactOptional()
      .openapi({ description: "The longitude value of the customer's Geoposition." }),
  })
  .openapi({
    description: 'Geoposition object containing latitude and longitude values.',
    required: [],
  })
  .openapi('OrderGeoPosition')

const OrderAddressSuccessResponseSchema = z
  .object({
    address: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: "An array of strings containing lines of the customer's order address.",
      }),
    city: z
      .string()
      .exactOptional()
      .openapi({
        description: "String value containing the city name of the customer's order address.",
      }),
    email: z.string().exactOptional().openapi({ description: "The customer's email address." }),
    geoPosition: OrderGeoPositionSchema.nullable()
      .exactOptional()
      .openapi({
        description:
          "Geoposition object containing latitude and longitude values for the customer's order address",
      }),
    name: z.string().exactOptional().openapi({ description: "The customer's name." }),
    phoneNumber: z
      .string()
      .exactOptional()
      .openapi({ description: "The customer's phone number." }),
    polygonName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "String value containing the polygon name of customer's order address (in tenants with no polygon name, will be the same as postcode).",
      }),
    postCode: z
      .string()
      .exactOptional()
      .openapi({
        description: "String value containing the postcode of the customer's order address.",
      }),
    serviceType: z
      .enum(['delivery', 'collection'])
      .exactOptional()
      .openapi({ description: 'Service Type associated with the order details.' }),
  })
  .openapi({
    description: 'The response object after successfully updating an order address.',
    example: {
      address: ['123 Wye Avenue, Eaton'],
      city: 'Bristol',
      email: 'user@email.com',
      geoPosition: { latitude: 456.123, longitude: 123.456 },
      name: 'J.E.Hungerton',
      orderable: true,
      phoneNumber: '0123456789',
      polygonName: 'BS1 1AA',
      postCode: 'BS1 1AA',
      serviceType: 'delivery',
    },
    required: [],
  })
  .openapi('OrderAddressSuccessResponse')

const OrderEligibleForRestaurantCompensationSchema = z
  .object({
    IsEligible: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag that informs if the cancelled order is eligible for compensation',
      }),
    OrderId: z.string().exactOptional().openapi({ description: 'Id for the order' }),
  })
  .openapi({
    example: { IsEligible: true, OrderId: 'c9639af6-04a3-4376-bb4b-5e95cc8b80eb' },
    required: [],
  })
  .openapi('OrderEligibleForRestaurantCompensation')

const OrderHistoryItemSchema = z
  .strictObject({
    detail: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Additional information about status update' }),
    occurredAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'ISO 8601 Date/Time of status update' }),
    orderState: ClientOrderStateSchema.exactOptional().openapi({
      description: 'State order was set to',
    }),
    updatedBy: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'User who made the status update' }),
  })
  .openapi({ required: [] })
  .openapi('OrderHistoryItem')

const OrderItemSchema: z.ZodType<OrderItemType> = z
  .lazy(() =>
    z
      .strictObject({
        basketIds: z
          .array(z.string())
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "Array of basket id's that make up the item. Can be multiple due to Zeus' grouping of items",
          }),
        comment: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Additional comments' }),
        id: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Basket Id of the order item' }),
        itemReference: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Item reference uniquely identifying a product on the menu but not basket instance of a product',
          }),
        menuIdentifier: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Just Eat menu identifier' }),
        menuNumber: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Just Eat menu number' }),
        name: z.string().nullable().exactOptional().openapi({ description: 'Name of the item' }),
        orderItemAccessories: z
          .array(OrderItemAccessorySchema)
          .nullable()
          .exactOptional()
          .openapi({ description: 'Array of accessories for this item' }),
        orderItems: z
          .array(OrderItemSchema)
          .nullable()
          .exactOptional()
          .openapi({ description: 'Array of sub items for this item' }),
        productCategory: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Just Eat product category' }),
        productTypeId: z
          .int32()
          .exactOptional()
          .openapi({ description: 'Just Eat product type id' }),
        quantity: z.int32().exactOptional().openapi({ description: 'Quantity of the item' }),
        totalPrice: z.number().exactOptional().openapi({ description: 'Total price of this item' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('OrderItem')

const OrderTypeSchema = z
  .enum(['Collection', 'Delivery', 'Unknown'])
  .openapi({ description: 'Type of order' })
  .openapi('OrderType')

const PaymentInfoSchema = z
  .strictObject({
    accountCreditAmount: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total amount paid for with account credit' }),
    cardAmount: z.number().exactOptional().openapi({ description: 'Amount paid by card' }),
    cardFee: z.number().exactOptional().openapi({ description: 'Card fee for the order' }),
    cardNumberLast4Digits: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Last 4 digits of the payment card' }),
    currency: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Name of the currency used for the order' }),
    deliveryCharge: z
      .number()
      .exactOptional()
      .openapi({ description: 'Amount of cost that comes from delivery' }),
    discount: z.number().exactOptional().openapi({ description: 'Total amount of discount' }),
    discountSource: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Source of discount (i.e. Just Eat or restaurant funded)' }),
    feeText: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Type of fee (`spanner`, `card`, `servicecharge`)' }),
    isCashPayment: z.boolean().exactOptional().openapi({ description: 'Is it a cash order' }),
    leftToPay: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Amount left for customer to pay in cash after all vouchers and discounts removed from total',
      }),
    taxes: z
      .record(z.string(), z.number())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Tax information for the order' }),
    totalPrice: z.number().exactOptional().openapi({ description: 'Total price of the order' }),
    voucherAmount: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total amount paid for with a voucher' }),
  })
  .openapi({ required: [] })
  .openapi('PaymentInfo')

const RestaurantInfoSchema = z
  .strictObject({
    addressCity: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Restaurant address city' }),
    addressLine1: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Restaurant address line 1' }),
    geoLocation: z
      .xor([GeoLocationSchema])
      .nullable()
      .exactOptional()
      .openapi({ description: 'Restaurant geolocation' }),
    name: z.string().nullable().exactOptional().openapi({ description: 'Restaurant name' }),
    phoneNumber: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Restaurant phone number' }),
    postalCode: z.string().nullable().exactOptional().openapi({ description: 'Restaurant name' }),
    vatRegistrationNumber: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Restaurant VAT registration number' }),
    website: z.string().nullable().exactOptional().openapi({ description: 'Restaurant website' }),
  })
  .openapi({ required: [] })
  .openapi('RestaurantInfo')

const PartnerInfoSchema = z
  .strictObject({
    friendlyOrderReference: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Friendly order reference' }),
    orderReference: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Reference that partner uses to identify the order' }),
    partnerId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Partner id of the source' }),
    partnerName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Partner name of the source' }),
    source: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Where did the order originate (Just Eat, third party etc.)' }),
  })
  .openapi({ required: [] })
  .openapi('PartnerInfo')

const OrderPadClientOrderSchema = z
  .strictObject({
    acceptedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'ISO 8601 Date/Time order was accepted by the restaurant' }),
    acceptedFor: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'ISO 8601 Date/Time time due at the point of acceptance' }),
    addressLines: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Customer address' }),
    asSoonAsPossible: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Will be false if order was a preorder' }),
    attemptedDeliveryQuery: AttemptedDeliveryQuerySchema.nullable()
      .exactOptional()
      .openapi({ description: 'Details of any attempted delivery query attached to the order' }),
    badItemClaims: z
      .array(BadItemClaimSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'A list of bad item claims attached to the order' }),
    cancellationInfo: CancellationInfoSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Details of any cancellation attached to the order' }),
    cancelledAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'ISO 8601 Date/Time order was cancelled' }),
    city: z.string().nullable().exactOptional().openapi({ description: 'Customer city' }),
    customerId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Platform customer id' }),
    customerNote: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Customer added notes' }),
    deliveredAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'ISO 8601 Date/Time order was delivered' }),
    deliveryDriverInfo: DeliveryDriverInfoSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Delivery driver information' }),
    deliveryDriverUsername: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Delivery drivers user name (usually their phone number)' }),
    deliveryNote: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Delivery specific notes' }),
    eposState: EposStateSchema.exactOptional().openapi({
      description: 'Current state of sending the order to the restaurants EPOS system',
    }),
    estimatedDeliveryTimeInSeconds: z
      .int32()
      .exactOptional()
      .openapi({ description: 'How long until order will be delivered in seconds (RDS only)' }),
    estimatedHandoverTimeInSeconds: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'How long until order needs to be handed over to driver in seconds (RDS only)',
      }),
    externalCustomerId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Customer id restaurants can use to identify customer' }),
    id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Id used to identify the order in Zeus' }),
    isPreorder: z.boolean().exactOptional().openapi({ description: 'Whether order is a preorder' }),
    isRdsOrder: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Will be true if delivery is being arranged by Just Eat' }),
    lateOrderCompensationQuery: LateOrderCompensationQuerySchema.nullable()
      .exactOptional()
      .openapi({
        description: 'Details of any late order compensation query attached to the order',
      }),
    lateOrderInfo: LateOrderInfoSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Details of any late order query attached to the order' }),
    location: GeoLocationSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Geo location of the customers address' }),
    missingItemClaims: z
      .array(MissingItemClaimSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'A list of missing item claims attached to the order' }),
    modernId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Just Eat modern order id' }),
    name: z.string().nullable().exactOptional().openapi({ description: 'Customer name' }),
    notes: z.string().nullable().exactOptional().openapi({ description: 'General order notes' }),
    orderHistory: z
      .array(OrderHistoryItemSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Ordered history of status updates to the order and when they happened',
      }),
    orderItems: z
      .array(OrderItemSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'A list of order items' }),
    orderState: ClientOrderStateSchema.exactOptional().openapi({
      description: 'Current state of the order',
    }),
    orderType: OrderTypeSchema.exactOptional().openapi({
      description: 'Type of order (collection or delivery)',
    }),
    paymentInfo: PaymentInfoSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Payment details for the order' }),
    phone: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Customer phone number (will be phone masking number in markets when enabled)',
      }),
    phoneMaskingCode: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Code to use when calling customer phone masking number about this order',
      }),
    postcode: z.string().nullable().exactOptional().openapi({ description: 'Customer postcode' }),
    preferredTimeDue: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Current agreed delivery time of the order' }),
    prepareOrderFor: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'ISO 8601 Date/Time when order should be prepared for' }),
    previousOrders: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Number of previous Just Eat orders by the customer' }),
    previousOrdersToRestaurant: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Number of previous orders by the customer to this restaurant' }),
    rdsPickupTime: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'ISO 8601 Date/Time when order will be picked up by RDS partner' }),
    receivedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'ISO 8601 Date/Time order was paid' }),
    restaurantId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Restaurant Id of the order' }),
    restaurantInformation: RestaurantInfoSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Restaurant information for the order' }),
    sourcePartner: PartnerInfoSchema.nullable()
      .exactOptional()
      .openapi({
        description: 'Information about the source of the order (Just Eat, Third Party etc.)',
      }),
    startOrderPreparationAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'ISO 8601 Date/Time for restaurant to start preparing the order' }),
    timeDue: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Current agreed delivery time of the order' }),
    withDriverAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'ISO 8601 Date/Time order was handed over to driver' }),
  })
  .openapi({ required: [] })
  .openapi('OrderPadClientOrder')

const OrderStateChangeSchema = z
  .strictObject({
    newState: ClientOrderStateSchema.openapi({ description: 'New order state' }),
    timeAcceptedFor: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'If accepting order what date time (with offset) are you accepting it for',
      }),
  })
  .openapi({ required: ['newState'] })
  .openapi('OrderStateChange')

const OrderTimeSuccessResponseSchema = z
  .object({
    asap: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'True if the user has selected as soon as possible on the order, else false',
      }),
    dateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the customer has requested their order for.' }),
    orderable: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean value indicating whether the current basket is orderable.',
      }),
    utcOrderTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time (in UTC) the customer has requested their order for' }),
  })
  .openapi({
    description: 'The response object for successful updates to order time.',
    example: {
      asap: true,
      dateTime: '2020-02-05T16:26:30+0000',
      orderable: true,
      utcOrderTime: '2020-02-05T16:26:30+0000',
    },
    required: [],
  })
  .openapi('OrderTimeSuccessResponse')

const OrderpadMenuItemSchema = z
  .strictObject({
    id: z.string().nullable().exactOptional().openapi({ description: 'The id of the menu item' }),
    isOutOfStock: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Is this menu item out of stock' }),
    name: z.string().nullable().exactOptional().openapi({ description: 'Name of the menu item' }),
  })
  .openapi({ required: [] })
  .openapi('OrderpadMenuItem')

const OrderpadSetupTypeSchema = z
  .enum(['Unknown', 'SignUp', 'Upgrade', 'Swap'])
  .openapi({ description: 'Type of order pad set up' })
  .openapi('OrderpadSetupType')

const OrdersDataSchema = z
  .strictObject({
    unreceivedOrders: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'List of all changed orders for a restaurant' }),
  })
  .openapi({ required: [] })
  .openapi('OrdersData')

const PagedAfterOnlyCursorResponseSchema = z
  .object({
    paging: z
      .object({
        cursors: z
          .object({
            after: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Cursor parameter to use in the next request to the resource to fetch the next page of data.',
              }),
          })
          .exactOptional()
          .openapi({
            description: 'Consists of cursors markers used in forward only pagination.',
            required: [],
          }),
      })
      .exactOptional()
      .openapi({ description: 'Consists of pagination information.', required: [] }),
  })
  .openapi({ example: { paging: { cursors: { after: 'NDMyNzQyODI3OTQw' } } }, required: [] })
  .openapi('PagedAfterOnlyCursorResponse')

const PagedAvailabilitiesResponseSchema = PagedAfterOnlyCursorResponseSchema.and(
  z
    .object({
      availabilities: z
        .array(AvailabilitySchema)
        .exactOptional()
        .openapi({ description: "List of availabilities for a given restaurant's menu." }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    example: {
      availabilities: [
        {
          description: 'Menu items available for delivery during weekdays for lunch.',
          id: '1-lunch-delivery',
          name: 'Delivery Lunch',
          serviceTypes: ['delivery'],
          times: [
            {
              daysOfTheWeek: [
                'monday',
                'tuesday',
                'wednesday',
                'thursday',
                'friday',
                'saturday',
                'sunday',
              ],
              fromDateTime: '11:30:00',
              toDateTime: '14:30:00',
            },
          ],
        },
        {
          description: 'Menu items available for delivery during weekdays for dinner.',
          id: '1-dinner-delivery',
          name: 'Delivery Dinner',
          serviceTypes: ['delivery'],
          times: [
            {
              daysOfTheWeek: [
                'monday',
                'tuesday',
                'wednesday',
                'thursday',
                'friday',
                'saturday',
                'sunday',
              ],
              fromDateTime: '16:30:00',
              toDateTime: '22:00:00',
            },
          ],
        },
      ],
      paging: { cursors: { after: 'NDMyNzQyODI3OTQw' } },
    },
  })
  .openapi('PagedAvailabilitiesResponse')

const PagedCategoriesResponseSchema = PagedAfterOnlyCursorResponseSchema.and(
  z
    .object({
      categories: z
        .array(CategoryBaseSchema)
        .exactOptional()
        .openapi({ description: "List of categories for a given restaurant's menu." }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    example: {
      categories: [
        { description: 'Sumptuous starters', id: '3', name: 'Starters' },
        { description: 'Magnificent mains', id: '4', name: 'Mains' },
      ],
      paging: { cursors: { after: 'NDMyNzQyODI3OTQw' } },
    },
  })
  .openapi('PagedCategoriesResponse')

const PagedCategoryItemsResponseSchema = PagedAfterOnlyCursorResponseSchema.and(
  z
    .object({
      itemIds: z
        .array(z.string())
        .exactOptional()
        .openapi({ description: 'List of item IDs which are assigned to the specified category' }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    example: {
      itemIds: ['65143901', '65143902', '65143903', '65143904', '65143905'],
      paging: { cursors: { after: 'NDMyNzQyODI3OTQw' } },
    },
  })
  .openapi('PagedCategoryItemsResponse')

const PagedDealItemVariationResponseSchema = PagedAfterOnlyCursorResponseSchema.and(
  z
    .object({
      dealItemVariations: z
        .array(DealItemVariationSchema)
        .exactOptional()
        .openapi({
          description: 'List of deal item variations which form the specified deal group',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    example: {
      dealItemVariations: [
        { additionPrice: 50, dealItemVariationId: '8548153', maxChoices: 1, minChoices: 0 },
        { additionPrice: 100, dealItemVariationId: '8548153', maxChoices: 2, minChoices: 1 },
      ],
      paging: { cursors: { after: 'NDMyNzQyODI3OTQw' } },
    },
  })
  .openapi('PagedDealItemVariationResponse')

const StorageSchema = z
  .object({
    stgInstruction: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Storage/Usage instructions' }),
  })
  .openapi({ example: { stgInstruction: 'Example' }, required: [] })
  .openapi('Storage')

const ProductFoodSafetySchema = z
  .strictObject({
    additives: z
      .array(AdditiveSchema)
      .min(0)
      .max(26)
      .exactOptional()
      .openapi({ description: 'List of additives' }),
    allergens: z
      .array(AllergenSchema)
      .min(0)
      .max(29)
      .exactOptional()
      .openapi({ description: 'List of allergens' }),
    id: z.string().exactOptional().openapi({ description: 'Encrypted Product/Addon Id' }),
    ingredients: z
      .array(IngredientsSchema)
      .min(0)
      .max(80)
      .exactOptional()
      .openapi({ description: 'List of ingredients' }),
    manufacturer: ManufacturerSchema.exactOptional().openapi({
      description: 'Object for manufacturer data',
    }),
    nutritional: NutritionalSchema.exactOptional().openapi({
      description: 'Object for nutritional data',
    }),
    storage: StorageSchema.exactOptional().openapi({ description: 'Object for storage data' }),
    type: z.string().exactOptional().openapi({ description: 'Product or Addon' }),
  })
  .openapi({ required: [] })
  .openapi('ProductFoodSafety')

const PagedFoodSafetyResponseSchema = PagedAfterOnlyCursorResponseSchema.and(
  z
    .object({
      data: z
        .array(ProductFoodSafetySchema)
        .min(0)
        .max(500)
        .exactOptional()
        .openapi({ description: 'List of Products with food safety data.' }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    example: {
      data: [
        {
          additives: [{ code: '10.2' }],
          allergens: [{ code: 'A' }],
          id: 'RRR3PRE',
          ingredients: ['wasser'],
          manufacturer: {
            brand: 'Coca-Cola Zero',
            city: 'Anderlecht',
            manufacturer: 'Coca-Cola Erfrischungsgetränke AG, Postfach 67 01 56, 10207 Berlin',
            origin: 'Deutschland',
            postalCode: '1070',
            streetAddress: 'Bergense Steenweg 1424',
          },
          nutritional: {
            alcohol: { unit: '%', value: 7.5 },
            caffeine: { unit: 'mg', value: 10 },
            calories: { unit: 'kcal', value: 42 },
            carbohydrate: { unit: 'mg', value: 22000 },
            energy: { unit: 'kJ', value: 175.5 },
            fat: { unit: 'mg', value: 16000 },
            fattyAcidTotal: { unit: 'mg', value: 100 },
            protein: { unit: 'mg', value: 4000.01 },
            salt: { unit: 'mg', value: 20 },
            sodium: { unit: 'mg', value: 10 },
            sugar: { unit: 'mg', value: 9100 },
          },
          storage: { stgInstruction: 'Example' },
          type: 'product',
        },
      ],
      paging: { cursors: { after: 'NDMyNzQyODI3OTQw==' } },
    },
  })
  .openapi('PagedFoodSafetyResponse')

const PagedMenuDealGroupsResponseSchema = PagedAfterOnlyCursorResponseSchema.and(
  z
    .object({
      dealGroups: z
        .array(MenuDealGroupBaseSchema)
        .exactOptional()
        .openapi({
          description: "List of deal groups for the given menu item on the given restaurant's menu",
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    example: {
      dealGroups: [
        { id: '23435309-1', name: 'Choose your base', numberOfChoices: 1 },
        { id: '23435309-2', name: 'Choose your halves', numberOfChoices: 2 },
      ],
      paging: { cursors: { after: 'NDMyNzQyODI3OTQw' } },
    },
  })
  .openapi('PagedMenuDealGroupsResponse')

const PagedMenuItemsResponseSchema = PagedAfterOnlyCursorResponseSchema.and(
  z
    .object({
      items: z
        .array(MenuItemBaseSchema)
        .exactOptional()
        .openapi({ description: "List of menu items for a given restaurant's menu." }),
    })
    .openapi({ required: [] }),
)
  .openapi({ example: { paging: { cursors: { after: 'NDMyNzQyODI3OTQw' } } } })
  .openapi('PagedMenuItemsResponse')

const PagedMenuModifierGroupsResponseSchema = PagedAfterOnlyCursorResponseSchema.and(
  z
    .object({
      modifierGroups: z
        .array(MenuModifierGroupSchema)
        .exactOptional()
        .openapi({
          description:
            "List of modifier groups for the given menu item on the given restaurant's menu",
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    example: {
      modifierGroups: [
        {
          id: '8547130-req-1',
          maxChoices: 1,
          minChoices: 1,
          modifiers: [
            { additionPrice: 0, id: '854500', maxChoices: 1, minChoices: 0, name: 'Classic Crust' },
            {
              additionPrice: 200,
              id: '854600',
              maxChoices: 1,
              minChoices: 0,
              name: 'Stuffed Crust',
            },
          ],
          name: 'Choose your crust',
        },
        {
          id: '8547130-opt-1',
          maxChoices: 10,
          minChoices: 0,
          modifiers: [
            {
              additionPrice: 50,
              id: '1000',
              maxChoices: 2,
              minChoices: 0,
              name: 'Mozzarella Cheese',
            },
            { additionPrice: 50, id: '1001', maxChoices: 1, minChoices: 0, name: 'Ham' },
            { additionPrice: 50, id: '1002', maxChoices: 1, minChoices: 0, name: 'Red Onion' },
            { additionPrice: 50, id: '1003', maxChoices: 1, minChoices: 0, name: 'Pepperoni' },
            { additionPrice: 50, id: '1004', maxChoices: 1, minChoices: 0, name: 'Olives' },
          ],
          name: 'Any extra toppings?',
        },
      ],
      paging: { cursors: { after: 'NDMyNzQyODI3OTQw' } },
    },
  })
  .openapi('PagedMenuModifierGroupsResponse')

const PagedVariationsResponseSchema = PagedAfterOnlyCursorResponseSchema.and(
  z
    .object({
      variations: z
        .array(VariationSchema)
        .exactOptional()
        .openapi({
          description: "List of variations for the given menu item on the given restaurant's menu",
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    example: {
      paging: { cursors: { after: 'NDMyNzQyODI3OTQw' } },
      variations: [
        {
          availabilityIds: [
            '1-lunch-delivery',
            '2-lunch-collection',
            '3-dinner-delivery',
            '4-dinner-collection',
          ],
          basePrice: 500,
          dealGroupsIds: [],
          dealOnly: true,
          id: '8547121',
          kitchenNumber: '100',
          modifierGroupsIds: ['8547130-opt-1'],
          name: 'Half',
          type: 'variation',
        },
        {
          availabilityIds: [
            '1-lunch-delivery',
            '2-lunch-collection',
            '3-dinner-delivery',
            '4-dinner-collection',
          ],
          basePrice: 1000,
          dealGroupsIds: [],
          dealOnly: false,
          id: '8547130',
          kitchenNumber: '100',
          modifierGroupsIds: ['8547130-req-1', '8547130-opt-1'],
          name: '12 inch',
          type: 'variation',
        },
        {
          availabilityIds: [
            '1-lunch-delivery-weekday',
            '2-lunch-collection-weekday',
            '3-dinner-delivery-weekday',
            '4-dinner-collection-weekday',
          ],
          basePrice: 1200,
          dealGroupsIds: [],
          dealOnly: true,
          id: '8543123',
          kitchenNumber: '200',
          modifierGroupsIds: ['8547130-req-1', '8547130-opt-1'],
          name: '14 inch',
          type: 'variation',
        },
      ],
    },
  })
  .openapi('PagedVariationsResponse')

const PasswordResetFlowResponseSchema = z
  .object({
    email: z.string().exactOptional().openapi({ description: "The consumer's email address." }),
    globalUserId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Global identifier for consumer and tenant.' }),
  })
  .openapi({
    example: { email: 'example@just-eat.com', globalUserId: '8It2lEaJjG82nJtxO00Iab0CoF0=' },
    required: [],
  })
  .openapi('PasswordResetFlowResponse')

const RequestRestaurantSchema = z
  .object({
    menuId: z.string().exactOptional().openapi({ description: "Id of the restaurant's menu" }),
    restaurantId: z.string().openapi({ description: 'Id of the restaurant' }),
  })
  .openapi({ required: ['restaurantId'] })
  .openapi('RequestRestaurant')

const PredictiveSearchRequestSchema = z
  .object({
    location: z.string().exactOptional().openapi({ description: "User's location" }),
    restaurants: z
      .array(RequestRestaurantSchema)
      .max(2000)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .openapi({ description: 'Restaurants that can be included in the search' }),
    searchTerm: z
      .string()
      .min(1)
      .openapi({ description: "User's search term - at least one character required" }),
  })
  .openapi({
    example: {
      location: 'BS1',
      restaurants: [{ restaurantId: '1234' }, { menuId: '678', restaurantId: '1235' }],
      searchTerm: 'Pizza',
    },
    required: ['searchTerm', 'restaurants'],
  })
  .openapi('PredictiveSearchRequest')

const PredictiveSearchResponseItemSchema = z
  .object({
    category: z
      .enum(['Restaurant', 'Cuisine', 'Dish'])
      .exactOptional()
      .openapi({ description: 'Grouping to which term belongs' }),
    suggestedTerm: z.string().exactOptional().openapi({ description: 'Suggested search term' }),
  })
  .openapi({ example: { category: 'Restaurant', suggestedTerm: 'Pizza Palace' }, required: [] })
  .openapi('PredictiveSearchResponseItem')

const PredictiveSearchResponseSchema = z
  .object({
    suggestions: z
      .array(PredictiveSearchResponseItemSchema)
      .max(10)
      .exactOptional()
      .openapi({ description: 'Ordered list of suggested term completions' }),
  })
  .openapi({
    example: {
      suggestions: [
        { category: 'Restaurant', suggestedTerm: 'Pizza Palace' },
        { category: 'Cuisine', suggestedTerm: 'Pizza' },
        { category: 'Dish', suggestedTerm: 'Large Hawaiian' },
      ],
    },
    required: [],
  })
  .openapi('PredictiveSearchResponse')

const ProductRecommendationsResponseSchema = z
  .object({
    recommendations: z
      .array(
        z
          .object({
            confidence: z
              .float64()
              .exactOptional()
              .openapi({
                description:
                  'Gets or sets the confidence level of this recommendation (between 0 and 1).',
              }),
            imageUrl: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The URL of the image, if available, to display with the view',
              }),
            productId: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Gets or sets the id of the product that is being recommended.',
              }),
          })
          .openapi({
            description: 'Contains information for a single recommended product.',
            required: [],
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Gets or sets an array of products that are recommended for the source product.',
      }),
    renderWithView: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Gets or sets the name of the UI component that the client should use to display the recommendations,\r\nwhich is taken from the experiment data for the user.',
      }),
    restaurantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Gets or sets the restaurant id' }),
  })
  .openapi({ description: 'Contains all recommendations for a product.', required: [] })
  .openapi('ProductRecommendationsResponse')

const ProductWithOfflineStatusSchema = z
  .object({
    CategoryIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of Category IDs this product belongs to.' }),
    Description: z.string().exactOptional().openapi({ description: 'Product description.' }),
    Id: z.string().exactOptional().openapi({ description: 'Product identifier.' }),
    IsOffline: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if this Product is not available to purchase.' }),
    Name: z.string().exactOptional().openapi({ description: 'Product name.' }),
    NextAvailableAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Time when product will be brought back online.' }),
    Price: z
      .object({
        CurrencyCode: z
          .string()
          .exactOptional()
          .openapi({ description: 'The currency of this Price in ISO 4217 format.' }),
        Value: z
          .number()
          .exactOptional()
          .openapi({ description: 'The value of this Price in the minor unit of the currency.' }),
      })
      .exactOptional()
      .openapi({ description: 'The price of this Product.', required: [] }),
  })
  .openapi({
    description: 'Product.',
    example: {
      CategoryIds: ['1'],
      Description: '',
      Id: '111',
      IsOffline: false,
      Name: 'Coca-Cola 0.33L',
      NextAvailableAt: null,
      Price: { CurrencyCode: 'GBP', Value: 99 },
    },
    required: [],
  })
  .openapi('ProductWithOfflineStatus')

const ProductsResponseSchema = z
  .object({
    Paging: z
      .object({
        Cursors: z
          .object({
            After: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The value should be used in the query parameter named after. It is used as a cursor of the last returned record in the previous request, from which next offset going to be fetched. A missing or empty value indicates that the end of the result set has been reached.',
              }),
          })
          .exactOptional()
          .openapi({
            description: 'Consists of cursors markers used in pagination.',
            required: [],
          }),
      })
      .exactOptional()
      .openapi({ description: 'Consists of pagination information.', required: [] }),
    Products: z
      .array(ProductWithOfflineStatusSchema)
      .exactOptional()
      .openapi({ description: 'List of products for a given restaurant.' }),
  })
  .openapi({
    example: {
      Paging: { Cursors: { After: 'NDMyNzQyODI3OTQw' } },
      Products: [
        {
          CategoryIds: ['1'],
          Description: '',
          Id: '111',
          IsOffline: false,
          Name: 'Coca-Cola 0.33L',
          NextAvailableAt: null,
          Price: { CurrencyCode: 'GBP', Value: 99 },
        },
        {
          CategoryIds: ['1'],
          Description: '',
          Id: '112',
          IsOffline: false,
          Name: 'Coca-Cola 1.5L',
          NextAvailableAt: null,
          Price: { CurrencyCode: 'GBP', Value: 199 },
        },
        {
          CategoryIds: ['2'],
          Description: '',
          Id: '222',
          IsOffline: true,
          Name: 'Chicken & Sweetcorn Soup',
          NextAvailableAt: '2019-11-23T11:00:00+01:00',
          Price: { CurrencyCode: 'GBP', Value: 299 },
        },
      ],
    },
    required: [],
  })
  .openapi('ProductsResponse')

const PromotedPlacementActivePlacementSchema = z
  .looseObject({
    availableActions: z
      .array(z.enum(['adjustBudget', 'cancel', 'pause', 'resume', 'undoCancel']))
      .exactOptional()
      .openapi({ description: 'A list of the currently supported actions for this placement.' }),
    deliveryArea: z
      .string()
      .openapi({ description: 'The postcode or location that the placement applies to.' }),
    placementId: z.string().openapi({ description: 'The unique identifier of the placement.' }),
    purchaseDate: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The UTC date and time at which this placement was purchased.' }),
    status: z
      .object({
        budget: z
          .looseObject({
            code: z
              .enum(['budgetLow', 'budgetExhausted'])
              .openapi({
                description:
                  "The status code that describes this placement's current budget status.",
              }),
          })
          .exactOptional()
          .openapi({ description: 'The budget status of this placement.', required: ['code'] }),
        contract: z
          .looseObject({
            cancellableAfterDate: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'The UTC date and time after which this placement may be cancelled. Available if the status code is `inNonCancellablePeriod`.',
              }),
            code: z
              .enum(['inNonCancellablePeriod', 'cancelled'])
              .openapi({
                description: "The status code that describes this placement's contract status.",
              }),
            endDate: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'The UTC date and time at which this placement will end. Available if the status code is "cancelled".',
              }),
          })
          .exactOptional()
          .openapi({ description: "The status of this placement's contract.", required: ['code'] }),
        pause: z
          .looseObject({
            code: z
              .literal('paused')
              .openapi({
                description: "The status code that describes this placement's pause status.",
              }),
            pauseDate: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'The UTC date and time at which this placement was paused as a result of a manual action. Available if the status code is "paused".',
              }),
            resumeDate: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'The UTC date and time at which this placement is scheduled to be resumed. Available if the status code is "paused" and a resume date was specified.',
              }),
          })
          .exactOptional()
          .openapi({ description: 'The pause status of this placement.', required: ['code'] }),
      })
      .openapi({
        description:
          "Contains status information for different aspects of this placement. 'normal' status is assumed if no additional status information is available.",
        required: [],
      }),
    weeklyBudget: z
      .object({
        maximumAllowable: z
          .int32()
          .openapi({
            description:
              'The maximum allowable budget for this week in the smallest unit of local currency (e.g., pence). It will not be possible to set a budget that exceeds this amount.',
          }),
        minimumAllowable: z
          .int32()
          .openapi({
            description:
              'The minimum allowable budget for this week in the smallest unit of local currency (e.g., pence). It will not be possible to set a budget lower than this amount.',
          }),
        recommended: z
          .int32()
          .openapi({
            description:
              'The recommended budget for this week so that the budget does not run out in the smallest unit of local currency (e.g., pence).',
          }),
        remaining: z
          .int32()
          .openapi({
            description:
              'The remaining budget for this week in the smallest unit of local currency (e.g., pence).',
          }),
        total: z
          .int32()
          .openapi({
            description:
              'The total budget for this week in the smallest unit of local currency (e.g., pence).',
          }),
      })
      .openapi({
        description: 'Contains information about the weekly budget for this placement.',
        required: ['remaining', 'total', 'maximumAllowable', 'minimumAllowable', 'recommended'],
      }),
  })
  .openapi({
    example: {
      availableActions: ['adjustBudget', 'resume', 'cancel'],
      deliveryArea: 'NW6',
      placementId: '100005',
      purchaseDate: '2021-01-01T14:45:00Z',
      status: {
        pause: {
          code: 'paused',
          pauseDate: '2021-01-14T12:02:32Z',
          resumeDate: '2021-02-12T00:00:00Z',
        },
      },
      weeklyBudget: {
        maximumAllowable: 100000,
        minimumAllowable: 500,
        recommended: 13000,
        remaining: 5000,
        total: 13000,
      },
    },
    required: ['placementId', 'deliveryArea', 'purchaseDate', 'weeklyBudget', 'status'],
  })
  .openapi('PromotedPlacementActivePlacement')

const PromotedPlacementActivePlacementsForRestaurantResponseSchema = z
  .looseObject({
    contract: z
      .object({
        nonCancellablePeriodEndDate: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The UTC time after which the non-cancellable period ends for this restaurant. If not specified, this restaurant has week-by-week rolling contracts.',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Information about the contract for this restaurant.',
        required: [],
      }),
    metadata: z
      .looseObject({
        currency: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The currency used for the budget data in ISO 4217 format, e.g., GBP, EUR or AUD.',
          }),
        effectiveDate: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'The UTC time at which the request was processed for relative time calculations.',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Additional metadata that may assist the rendering of the response.',
        required: [],
      }),
    placements: z
      .array(PromotedPlacementActivePlacementSchema)
      .openapi({ description: 'List of promoted placements active for a given restaurant.' }),
  })
  .openapi({
    example: {
      metadata: { currency: 'GBP', effectiveDate: '2021-01-14T17:30:00Z' },
      placements: [
        {
          availableActions: ['adjustBudget', 'resume', 'cancel'],
          deliveryArea: 'NW6',
          placementId: '100001',
          purchaseDate: '2021-01-01T14:45:00Z',
          status: {
            pause: {
              code: 'paused',
              pauseDate: '2021-01-14T12:02:32Z',
              resumeDate: '2021-02-12T00:00:00Z',
            },
            placement: { code: 'cancelled', endDate: '2021-01-17T23:59:59Z' },
          },
          weeklyBudget: {
            maximumAllowable: 100000,
            minimumAllowable: 500,
            recommended: 13000,
            remaining: 5000,
            total: 13000,
          },
        },
        {
          availableActions: ['adjustBudget', 'pause', 'cancel'],
          deliveryArea: 'NW5',
          placementId: '100002',
          purchaseDate: '2021-01-01T14:47:34Z',
          status: { budget: { code: 'budgetLow' } },
          weeklyBudget: {
            maximumAllowable: 110000,
            minimumAllowable: 500,
            recommended: 14000,
            remaining: 210,
            total: 13000,
          },
        },
        {
          availableActions: ['adjustBudget', 'undoCancel'],
          deliveryArea: 'NW4',
          placementId: '100003',
          purchaseDate: '2021-01-01T14:51:12Z',
          status: { placement: { code: 'cancelled', endDate: '2021-01-17T23:59:59Z' } },
          weeklyBudget: {
            maximumAllowable: 100000,
            minimumAllowable: 500,
            recommended: 14000,
            remaining: 3200,
            total: 13000,
          },
        },
        {
          availableActions: ['adjustBudget', 'pause', 'cancel'],
          deliveryArea: 'NW3',
          placementId: '100004',
          purchaseDate: '2021-01-01T14:51:12Z',
          status: { budget: { code: 'budgetExhausted' } },
          weeklyBudget: {
            maximumAllowable: 100000,
            minimumAllowable: 500,
            recommended: 14000,
            remaining: 0,
            total: 13000,
          },
        },
      ],
    },
    required: ['placements'],
  })
  .openapi('PromotedPlacementActivePlacementsForRestaurantResponse')

const PromotedPlacementAvailablePlacementSchema = z
  .looseObject({
    deliveryArea: z
      .string()
      .openapi({
        description: 'The postcode or location that is available for starting a placement.',
      }),
    inAllowList: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether this placement is in the allow list for self-service purchase by the restaurant partner.',
      }),
    weeklyBudget: z
      .looseObject({
        maximumAllowable: z
          .int32()
          .openapi({
            description:
              'The maximum allowable budget for this week in the smallest unit of local currency (e.g., pence). It will not be possible to set a budget that exceeds this amount.',
          }),
        minimumAllowable: z
          .int32()
          .openapi({
            description:
              'The minimum allowable budget for this week in the smallest unit of local currency (e.g., pence). It will not be possible to set a budget lower than this amount.',
          }),
        recommended: z
          .int32()
          .openapi({
            description:
              'The recommended budget for this week so that the budget does not run out in the smallest unit of local currency (e.g., pence).',
          }),
      })
      .openapi({
        description:
          'Contains information about the required weekly budget for this placement location.',
        required: ['maximumAllowable', 'minimumAllowable', 'recommended'],
      }),
  })
  .openapi({
    example: {
      deliveryArea: 'NW6',
      inAllowList: true,
      weeklyBudget: { maximumAllowable: 100000, minimumAllowable: 500, recommended: 13000 },
    },
    required: ['deliveryArea', 'weeklyBudget'],
  })
  .openapi('PromotedPlacementAvailablePlacement')

const PromotedPlacementAvailablePlacementsForRestaurantResponseSchema = z
  .looseObject({
    metadata: z
      .looseObject({
        currency: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The currency used for the budget data in ISO 4217 format, e.g., GBP, EUR or AUD.',
          }),
        effectiveDate: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'The UTC time at which the request was processed for relative time calculations.',
          }),
        timeZone: z
          .string()
          .exactOptional()
          .openapi({
            description: "The restaurant's timezone in IANA format, e.g., Europe/London.",
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Additional metadata that may assist the rendering of the response.',
        required: [],
      }),
    placements: z
      .array(PromotedPlacementAvailablePlacementSchema)
      .exactOptional()
      .openapi({
        description: 'List of promoted placements available for purchase for a given restaurant.',
      }),
  })
  .openapi({
    example: {
      metadata: { currency: 'GBP', effectiveDate: '2021-01-14T17:30:00Z' },
      placements: [
        {
          deliveryArea: 'NW6',
          weeklyBudget: {
            maximumAllowable: 100000,
            minimumAllowable: 500,
            minimumRecommended: 1000,
            recommended: 13000,
          },
        },
        {
          deliveryArea: 'NW5',
          weeklyBudget: {
            maximumAllowable: 100000,
            minimumAllowable: 500,
            minimumRecommended: 1000,
            recommended: 14000,
          },
        },
        {
          deliveryArea: 'NW4',
          weeklyBudget: {
            maximumAllowable: 100000,
            minimumAllowable: 500,
            minimumRecommended: 1000,
            recommended: 14000,
          },
        },
        {
          deliveryArea: 'NW3',
          weeklyBudget: {
            maximumAllowable: 100000,
            minimumAllowable: 500,
            minimumRecommended: 1000,
            recommended: 14000,
          },
        },
      ],
    },
    required: [],
  })
  .openapi('PromotedPlacementAvailablePlacementsForRestaurantResponse')

const PromotedPlacementCancelPlacementRequestSchema = z
  .xor([
    z
      .looseObject({
        cancellationEffective: z
          .literal('atEndOfWeek')
          .openapi({ description: 'When the cancellation should take effect.' }),
      })
      .openapi({ required: ['cancellationEffective'] }),
    z
      .looseObject({
        cancellationEffective: z
          .literal('atSpecifiedTime')
          .openapi({ description: 'When the cancellation should take effect.' }),
        cancellationTime: z.iso
          .datetime({ offset: true })
          .openapi({ description: 'The UTC time at which the cancellation should take effect.' }),
      })
      .openapi({ required: ['cancellationEffective', 'cancellationTime'] }),
  ])
  .openapi({ example: { cancellationEffective: 'atEndOfWeek' } })
  .openapi('PromotedPlacementCancelPlacementRequest')

const PromotedPlacementCandidateRestaurantSchema = z
  .looseObject({
    rank: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'The relative rank of this candidate restaurant in relation to others in the response. A smaller number indicates that this restaurant should be shown closer to the beginning of the list.',
      }),
    restaurantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the candidate restaurant.' }),
  })
  .openapi({ example: { metadata: { key: 'value' }, rank: 1, restaurantId: '1234' }, required: [] })
  .openapi('PromotedPlacementCandidateRestaurant')

const PromotedPlacementCandidateRestaurantsResponseSchema = z
  .strictObject({
    candidateRestaurants: z
      .array(PromotedPlacementCandidateRestaurantSchema)
      .exactOptional()
      .openapi({
        description: 'An array of candidate restaurants that are available for Promoted Placement.',
      }),
    metadata: z
      .looseObject({
        availableFilteredPositions: z
          .number()
          .exactOptional()
          .openapi({
            description:
              'The number of Promoted Placement positions available in this location when displaying a filtered list of restaurants.',
          }),
        availableUnfilteredPositions: z
          .number()
          .exactOptional()
          .openapi({
            description:
              'The number of Promoted Placement positions available in this location when displaying the full list of restaurants.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Contains additional metadata that may affect the rendering of Promoted Placement candidate restaurants.',
        required: [],
      }),
  })
  .openapi({
    example: {
      candidateRestaurants: [
        { rank: 1, restaurantId: '1234' },
        { rank: 2, restaurantId: '4567' },
        { rank: 3, restaurantId: '3245' },
      ],
      metadata: { availableFilteredPositions: 2, availableUnfilteredPositions: 5 },
    },
    required: [],
  })
  .openapi('PromotedPlacementCandidateRestaurantsResponse')

const PromotedPlacementPlacementInsightsSchema = z
  .looseObject({
    metadata: z
      .looseObject({
        currency: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The currency used in the reports in ISO 4217 format, e.g., GBP, EUR or AUD.',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Additional metadata that may assist the rendering of the response.',
        required: [],
      }),
    reports: z
      .record(
        z.string(),
        z
          .looseObject({
            data: z
              .looseObject({
                overall: z
                  .looseObject({
                    menuViews: z
                      .int32()
                      .openapi({ description: 'The total number of menu views.' }),
                    newCustomers: z
                      .int32()
                      .openapi({ description: 'The total number of new customers.' }),
                    orderValue: z
                      .int32()
                      .openapi({
                        description:
                          'The total order value in the smallest unit of local currency (e.g., pence).',
                      }),
                    orders: z.int32().openapi({ description: 'The total number of orders.' }),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'Total values for this period.',
                    required: ['newCustomers', 'menuViews', 'orders', 'orderValue'],
                  }),
                promotedPlacement: z
                  .looseObject({
                    menuViews: z
                      .int32()
                      .openapi({ description: 'The total number of promoted menu views.' }),
                    newCustomers: z
                      .int32()
                      .openapi({
                        description:
                          'The total number of new customers as a result of promoted placement.',
                      }),
                    orderValue: z
                      .int32()
                      .openapi({
                        description:
                          'The total order value resulting from promoted placement orders in the smallest unit of local currency (e.g., pence).',
                      }),
                    orders: z
                      .int32()
                      .openapi({
                        description:
                          'The total number of orders resulting from promoted placement menu views.',
                      }),
                    placementSpend: z
                      .int32()
                      .openapi({
                        description:
                          'The total amount spent on promoted placement in the smallest unit of local currency (e.g., pence).',
                      }),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'Total values for promoted placement in this period.',
                    required: [
                      'newCustomers',
                      'menuViews',
                      'orders',
                      'orderValue',
                      'placementSpend',
                    ],
                  }),
              })
              .openapi({
                description: 'The placement insights data for this report period.',
                required: [],
              }),
            period: z
              .object({
                createdAt: z.iso
                  .datetime({ offset: true })
                  .openapi({ description: 'The UTC time at which this report was generated.' }),
                endDate: z.iso
                  .date()
                  .openapi({ description: 'The end date of this report period.' }),
                startDate: z.iso
                  .date()
                  .openapi({ description: 'The start date of this report period.' }),
              })
              .openapi({
                description: 'Describes the time period for this report.',
                required: ['createdAt', 'startDate', 'endDate'],
              }),
          })
          .openapi({
            description: 'A report for a given time period.',
            required: ['period', 'data'],
          }),
      )
      .openapi({ description: 'Reports keyed by the name of specific time periods.' }),
  })
  .openapi({
    example: {
      metadata: { currency: 'GBP' },
      reports: {
        'last-28-days': {
          data: {
            overall: { menuViews: 1236, newCustomers: 198, orderValue: 1137241, orders: 660 },
            promotedPlacement: {
              menuViews: 922,
              newCustomers: 67,
              orderValue: 403212,
              orders: 250,
              placementSpend: 60630,
            },
          },
          period: {
            createdAt: '2021-01-22T08:06:14.278Z',
            endDate: '2021-01-21',
            startDate: '2020-12-25',
          },
        },
        'last-7-days': {
          data: {
            overall: { menuViews: 309, newCustomers: 50, orderValue: 315910, orders: 165 },
            promotedPlacement: {
              menuViews: 225,
              newCustomers: 17,
              orderValue: 96090,
              orders: 48,
              placementSpend: 14190,
            },
          },
          period: {
            createdAt: '2021-01-22T08:06:14.199Z',
            endDate: '2021-01-21',
            startDate: '2021-01-15',
          },
        },
      },
    },
    required: ['reports'],
  })
  .openapi('PromotedPlacementPlacementInsights')

const PropertiesSchema = z
  .object({
    accuracyScore: z
      .number()
      .min(1)
      .max(100)
      .default(80)
      .exactOptional()
      .openapi({ description: 'Just Eat Takeaway address accuracy score' }),
    geocodingProvider: z
      .string()
      .exactOptional()
      .openapi({ description: 'the geocoding provider' }),
    matchScore: z
      .number()
      .min(1)
      .max(100)
      .default(100)
      .exactOptional()
      .openapi({ description: 'Just Eat Takeaway address match score' }),
  })
  .openapi({
    description: 'Geometry information for consumers location',
    example: { accuracyScore: 100, geocodingProvider: 'Google', matchScore: 100 },
    required: [],
  })
  .openapi('Properties')

const PushNotificationRegistrationUpdateSchema = z
  .strictObject({
    appType: AppTypeSchema.exactOptional().openapi({ description: 'Application type' }),
    pushNotificationToken: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Push notification token' }),
  })
  .openapi({ required: [] })
  .openapi('PushNotificationRegistrationUpdate')

const PutProductBackOnTheMenuCommandSchema = z
  .strictObject({
    deletedBy: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Application which requested operation e.g. Orderpad, RestaurantApp',
      }),
    productIds: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'List of product Ids to be brought back online' }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Request date and time in ISO 8601 format' }),
  })
  .openapi({ required: [] })
  .openapi('PutProductBackOnTheMenuCommand')

const RedeemCommandSchema = z
  .object({ pin: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('RedeemCommand')

const RedeemCommandResponseSchema = z
  .object({ value: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('RedeemCommandResponse')

const RedeemPaycodeCommandSchema = z
  .object({ paycode: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('RedeemPaycodeCommand')

const RedeemPaycodeResponseSchema = z
  .object({ value: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('RedeemPaycodeResponse')

const RedeliverOrderResolutionSchema = z
  .object({
    NewDueDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Updated due date for delivery of the order' }),
    Status: z
      .enum(['DriverAtAddress', 'Repreparing'])
      .exactOptional()
      .openapi({ description: 'The current status of the order' }),
  })
  .openapi({ required: [] })
  .openapi('RedeliverOrderResolution')

const RegistrationRequestSchema = z
  .strictObject({
    appType: AppTypeSchema.exactOptional().openapi({ description: 'Application type' }),
    password: z.string().nullable().exactOptional().openapi({ description: 'Password' }),
    pushNotificationId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The id used in push notification registration' }),
    username: z.string().nullable().exactOptional().openapi({ description: 'Username' }),
  })
  .openapi({ required: [] })
  .openapi('RegistrationRequest')

const RegistrationResponseSchema = z
  .strictObject({
    appType: z.string().nullable().exactOptional().openapi({ description: 'Application type' }),
    restaurantId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The Id of the restaurant' }),
    token: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Created authentication token' }),
    userId: z.string().nullable().exactOptional().openapi({ description: 'The Id of the user' }),
  })
  .openapi({ required: [] })
  .openapi('RegistrationResponse')

const ReplaceRestaurantMenuRequestSchema = z
  .object({
    fileKeys: z
      .array(
        z
          .string()
          .openapi({
            description: 'path to the new menu file that Was uploaded to the certain AWS s3 bucket',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Array of paths to the new menu files that were uploaded to the certain AWS s3 bucket',
      }),
  })
  .openapi({
    description: 'request containing links in s3 to new menu files',
    example: { fileKeys: ['3c81dq0k9bhj1bn_menu_1.pdf', '1rhj7qhr6fhjgbm_menu_2.pdf'] },
    required: [],
  })
  .openapi('ReplaceRestaurantMenuRequest')

const RestaurantCapabilitiesPaymentTypeItemSchema = z
  .object({
    cardTypes: z
      .array(z.enum(['AMEX', 'DK', 'MASTERCARD', 'VISA', 'VISADK']))
      .exactOptional()
      .openapi({ description: 'List of card types (only applies to `Card` payment type)' }),
    maxOrderValueCents: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Max order value in smallest unit of relevant currency (only applies to `Cash` payment type)',
      }),
    paymentType: z
      .enum(['ApplePay', 'Card', 'Cash', 'GooglePay', 'PayPal', 'VCO'])
      .exactOptional()
      .openapi({ description: 'The payment type' }),
    selected: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag to indicate if the payment type has been selected' }),
    token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to be used with the payment type (only applies to `PayPal` payment type)',
      }),
    voucherAvailable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag to indicate if vouchers are available for the payment type' }),
  })
  .openapi({
    example: { cardTypes: ['VISA', 'MASTERCARD', 'AMEX'], paymentType: 'Card', selected: false },
    required: [],
  })
  .openapi('RestaurantCapabilitiesPaymentTypeItem')

const RestaurantCapabilitiesResponseSchema = z
  .object({
    availablePaymentTypes: z
      .array(RestaurantCapabilitiesPaymentTypeItemSchema)
      .exactOptional()
      .openapi({ description: 'List of available payment types' }),
    feeConfig: z
      .object({
        amountCents: z
          .number()
          .exactOptional()
          .openapi({ description: 'The fee amount in smallest unit of relevant currency' }),
      })
      .exactOptional()
      .openapi({ description: 'Details of any additional fees', required: [] }),
  })
  .openapi({
    example: {
      availablePaymentTypes: [
        { paymentType: 'ApplePay', selected: true, voucherAvailable: true },
        { paymentType: 'GooglePay', selected: false },
        { paymentType: 'PayPal', selected: false, token: 'token123' },
        { paymentType: 'VCO', selected: false },
        { maxOrderValueCents: 5000, paymentType: 'Cash', selected: false },
        { cardTypes: ['VISA', 'MASTERCARD', 'AMEX'], paymentType: 'Card', selected: false },
      ],
      feeConfig: { amountCents: 1000 },
    },
    required: [],
  })
  .openapi('RestaurantCapabilitiesResponse')

const RestaurantCommentsOnReviewSchema = z
  .object({
    restaurantComments: z
      .string()
      .exactOptional()
      .openapi({ description: 'Restaurant comments in response on the customer review' }),
  })
  .openapi({
    example: { restaurantComments: 'Thank you very much for positive feedback' },
    required: [],
  })
  .openapi('RestaurantCommentsOnReview')

const RestaurantFinanceDetailsSchema = z
  .strictObject({
    paymentMode: z
      .enum(['CardOnly', 'CardAndCash'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'Current payment mode' }),
  })
  .openapi({ required: [] })
  .openapi('RestaurantFinanceDetails')

const RestaurantSupportDetailsSchema = z
  .strictObject({
    phoneNumber: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Phone number of the restaurant' }),
  })
  .openapi({ required: [] })
  .openapi('RestaurantSupportDetails')

const RestaurantTempOfflineSchema = z
  .strictObject({
    categories: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'List of current temp offline categories' }),
    type: z
      .enum([
        'CancellationOutsideWindow',
        'Unset',
        'TempOffline',
        'ClosedToday',
        'ClosedDueTo',
        'OnVacationOpens',
        'OnVacationClosed',
        'None',
        'ClosedDueToEvent',
        'ClosedDueToEmergency',
        'FailedJctConnection',
        'NoTrOverride',
        'IgnoredOrders',
        'ClosedByTempOfflineTool',
      ])
      .nullable()
      .exactOptional()
      .openapi({ description: 'Temp offline type' }),
  })
  .openapi({ required: [] })
  .openapi('RestaurantTempOffline')

const RestaurantConfigurationSchema = z
  .strictObject({
    addressCity: z.string().nullable().exactOptional().openapi({ description: 'Address city' }),
    addressLine1: z.string().nullable().exactOptional().openapi({ description: 'Address line 1' }),
    brandName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Name of the brand this restaurant belongs to' }),
    financeDetails: RestaurantFinanceDetailsSchema.exactOptional().openapi({
      description: 'Restaurant finance details',
    }),
    geoLocation: GeoLocationSchema.exactOptional().openapi({ description: 'Geo location details' }),
    isDmsEnabled: z.boolean().exactOptional().openapi({ description: 'Is DMS enabled' }),
    isFlypayEposEnabled: z.boolean().exactOptional().openapi({ description: 'Is Flypay enabled' }),
    isRdsRestaurant: z.boolean().exactOptional().openapi({ description: 'Is it RDS restaurant' }),
    logoUrl: z.string().nullable().exactOptional().openapi({ description: 'Logo URL' }),
    name: z.string().nullable().exactOptional().openapi({ description: 'Name of the restaurant' }),
    phoneNumber: z.string().nullable().exactOptional().openapi({ description: 'Phone number' }),
    postalCode: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Post code of the restaurant' }),
    supportDetails: RestaurantSupportDetailsSchema.exactOptional().openapi({
      description: 'Restaurant support details',
    }),
    tempOffline: RestaurantTempOfflineSchema.exactOptional().openapi({
      description: 'Details of temp offline',
    }),
    website: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Web site address of the restaurant' }),
  })
  .openapi({ required: [] })
  .openapi('RestaurantConfiguration')

const RestaurantDeliveryFeesSchema = z
  .object({
    bands: z
      .array(
        z
          .object({
            fee: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  'The delivery fee, in the smallest unit of local currency (e.g. pence).',
              }),
            minimumAmount: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  'The minimum order value (excluding fees) when this fee band applies. The fee with the highest `minimumAmount` that is less than or equal to order value applies. This is in the smallest unit of local currency (e.g. pence).',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Collection of delivery fee bands' }),
    minimumOrderValue: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'The minimum order value (excluding fees) required, in the smallest unit of local currency (e.g. pence).',
      }),
    restaurantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The identifier of the restaurant' }),
  })
  .openapi({
    example: {
      bands: [
        { fee: 250, minimumAmount: 1000 },
        { fee: 0, minimumAmount: 2000 },
      ],
      minimumOrderValue: 1000,
      restaurantId: '5678',
    },
    required: [],
  })
  .openapi('RestaurantDeliveryFees')

const RestaurantDetailsLocationPositionSchema = z
  .object({
    coordinates: z
      .array(z.float64())
      .length(2)
      .exactOptional()
      .openapi({ description: 'longitude and latitude' }),
    type: z.literal('Point').exactOptional().openapi({ description: 'type of primitive' }),
  })
  .openapi({ description: 'Geoposition of the restaurant in GeoJSON format', required: [] })
  .openapi('RestaurantDetailsLocationPosition')

const RestaurantDetailsLocationSchema = z
  .object({
    city: z.string().exactOptional().openapi({ description: 'City of the restaurant' }),
    country: z.string().exactOptional().openapi({ description: 'Country of the restaurant' }),
    geoPosition: RestaurantDetailsLocationPositionSchema.exactOptional().openapi({
      description: 'Geoposition of the restaurant',
    }),
    postalCode: z.string().exactOptional().openapi({ description: 'Post code of the restaurant' }),
    region: z.string().exactOptional().openapi({ description: 'Region of the restaurant' }),
    streetAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'Street address of the restaurant' }),
  })
  .openapi({ description: 'Location of the restaurant', required: [] })
  .openapi('RestaurantDetailsLocation')

const RestaurantDetailsResponseSchema = z
  .object({
    allergenInformation: z
      .object({
        phoneNumber: z
          .string()
          .exactOptional()
          .openapi({ description: 'Phone number to contact restaurant about allergens' }),
        url: z
          .string()
          .exactOptional()
          .openapi({ description: 'Page with information about allergens' }),
      })
      .exactOptional()
      .openapi({ description: 'Allergen details of the restaurant', required: [] }),
    contactOptions: z
      .object({
        emails: z
          .array(
            z
              .object({
                email: z.string().exactOptional().openapi({ description: 'Email contact' }),
                usedFor: z
                  .array(
                    z
                      .enum(['Default', 'Invoice'])
                      .openapi({ description: 'Array containing labels specifying email' }),
                  )
                  .max(3)
                  .exactOptional()
                  .openapi({ description: 'Type of email contacts' }),
              })
              .openapi({
                description: 'An item in emails array containing an email with label',
                required: [],
              }),
          )
          .exactOptional()
          .openapi({ description: 'Array containing an email with label items' }),
        phoneNumbers: z
          .array(
            z
              .object({
                phoneNumber: z.string().exactOptional().openapi({ description: 'Phone number' }),
                usedFor: z
                  .array(
                    z
                      .enum(['Default', 'Owner', 'Alternative'])
                      .openapi({ description: 'Array containing labels specifying phone number' }),
                  )
                  .max(3)
                  .exactOptional()
                  .openapi({ description: 'Type of phone number contacts' }),
              })
              .openapi({
                description: 'An item in emails array containing an email with label',
                required: [],
              }),
          )
          .max(3)
          .exactOptional()
          .openapi({ description: 'Array containing a phone number with label items' }),
      })
      .exactOptional()
      .openapi({ description: 'Contact details of the restaurant', required: [] }),
    cuisines: z
      .array(z.string().openapi({ description: 'Cuisine name' }))
      .exactOptional()
      .openapi({ description: 'Array of cuisines of restaurant' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique identifier at tenant level for a given restaurant' }),
    legalInformation: z
      .object({
        companyNumber: z
          .string()
          .exactOptional()
          .openapi({ description: 'Company number of the restaurant' }),
        registeredName: z
          .string()
          .exactOptional()
          .openapi({ description: 'Legal company name of the restaurant' }),
      })
      .exactOptional()
      .openapi({ description: 'Legal information of the restaurant', required: [] }),
    location: RestaurantDetailsLocationSchema.exactOptional().openapi({
      description: 'Location of the restaurant',
    }),
    name: z.string().exactOptional().openapi({ description: 'The name of the restaurant.' }),
  })
  .openapi({
    description: 'response containing details of the restaurant',
    example: {
      allergenInformation: { phoneNumber: '+44 7911 123456', url: 'http://test.com' },
      contactOptions: {
        emails: [{ email: 'test@mcdonalds.com' }, { usedFor: ['Invoice', 'Default'] }],
        phoneNumbers: [
          { phoneNumber: '+44 7911 123456' },
          { usedFor: ['Default', 'Owner', 'Alternative'] },
        ],
      },
      cuisines: ['Italian', 'American'],
      id: '108308',
      legalInformation: { companyNumber: '12345', registeredName: "Mc Donald's" },
      location: {
        city: 'London',
        country: 'United Kingdom',
        geoPosition: { coordinates: [51.509865, -0.118092], type: 'Point' },
        postalCode: 'EC4M 7RF',
        region: 'Farringdon',
        streetAddress: 'Fleet Place House, Fleet Place',
      },
      name: "McDonald's Test",
    },
    required: [],
  })
  .openapi('RestaurantDetailsResponse')

const RestaurantETAsSchema = z
  .array(
    z
      .object({
        etaAtRestaurant: z
          .number()
          .exactOptional()
          .openapi({ description: 'Your best estimation in minutes' }),
        restaurantId: z
          .string()
          .exactOptional()
          .openapi({ description: 'The unique identifier of the restaurant.' }),
      })
      .openapi({ example: { etaAtRestaurant: 1, restaurantId: '1' }, required: [] }),
  )
  .openapi('RestaurantETAs')

const RestaurantErrorResponseSchema = z
  .object({
    errorCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A code that identifies the problem type. It will be supported by human-readable documentation that identifies how to resolve the error',
      }),
    errorId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A value that helps identify this response back to logs, so we can easily find this specific fault',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specific details about the error that may assist the you in resolving the issue',
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A value that helps identify the trace back to logs, so that we can easily find what was happening on our system when the fault was generated',
      }),
    statusCode: z.string().exactOptional().openapi({ description: 'Http response status code' }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date-time when this request was processed' }),
  })
  .openapi({
    example: {
      errorCode: 'InvalidCountryCode',
      errorId: '6947c692-ca24-434d-8166-d4d54ef8d74e',
      message: "The country code 'zzz' is not supported.",
      requestId: '8000324e-0000-f400-b63f-84710c7967bb',
      statusCode: '400',
      timestamp: '2019-10-02T12:34:53.1214447+00:00',
    },
    required: [],
  })
  .openapi('RestaurantErrorResponse')

const RestaurantFeesSchema = z
  .object({
    bagFee: FeeSchema.exactOptional().openapi({
      description: 'A fee applied for bags used for delivery and collection orders',
    }),
  })
  .openapi({
    description: 'An object encapsulating all possible fees which a restaurant can apply to itself',
    example: {
      bagFee: {
        description: 'A charge for bags in delivery',
        serviceTypes: {
          collection: { amount: 5 },
          default: { amount: 0 },
          delivery: { amount: 10 },
        },
      },
    },
    required: [],
  })
  .openapi('RestaurantFees')

const RestaurantInvoiceDownloadInformationSchema = z
  .object({
    downloadUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL to download invoice content' }),
    expires: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The time when the download URL expires and becomes invalid to download invoice content',
      }),
  })
  .openapi({
    description: 'An information to download invoice content',
    example: {
      downloadUrl:
        'https://invoicesbucket.s3.eu-west-1.amazonaws.com/123456.html?X-Amz-Expires=60&x-amz-security-token=qw12qw12&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ABABABABAB/20201007/eu-west-1/s3/aws4_request&X-Amz-Date=20201007T162255Z&X-Amz-SignedHeaders=host;x-amz-security-token&X-Amz-Signature=34rt34rt',
      expires: '2020-10-07T16:23:55.000Z',
    },
    required: [],
  })
  .openapi('RestaurantInvoiceDownloadInformation')

const RestaurantInvoiceSummarySchema = z
  .object({
    accountBalance: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Restaurant account balance at the end of the invoice period in smallest unit of relevant currency',
      }),
    createdDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The invoice created date' }),
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ISO-4217 currency code associated with the invoice' }),
    endDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The end date of the invoice period' }),
    id: z.string().exactOptional().openapi({ description: 'The Id of the invoice' }),
    invoiceAmount: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Invoice amount for the invoice period in smallest unit of relevant currency',
      }),
    startDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The start date of the invoice period' }),
  })
  .openapi({ description: 'An invoice summary for the invoice period', required: [] })
  .openapi('RestaurantInvoiceSummary')

const RestaurantInvoicesSchema = z
  .object({
    invoices: z
      .array(RestaurantInvoiceSummarySchema)
      .exactOptional()
      .openapi({ description: 'List of restaurant invoice summaries' }),
    paging: z
      .object({
        cursors: z
          .object({
            after: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The value should be used in the query parameter named after. It is used as a cursor of the last returned record in the previous request, from which next offset going to be fetched. A missing or empty value indicates that the end of the result set has been reached',
              }),
          })
          .exactOptional()
          .openapi({ description: 'Consists of cursor markers used in pagination', required: [] }),
      })
      .exactOptional()
      .openapi({ description: 'Consists of pagination information', required: [] }),
  })
  .openapi({
    example: {
      invoices: [
        {
          accountBalance: 123540,
          createdDate: '2020-09-29T09:26:09.930Z',
          currencyCode: 'GBP',
          endDate: '2020-09-27',
          id: 'i9999999',
          invoiceAmount: 5421,
          startDate: '2020-09-21',
        },
        {
          accountBalance: 167980,
          createdDate: '2020-09-22T11:00:32.800Z',
          currencyCode: 'GBP',
          endDate: '2020-09-20',
          id: 'i8888888',
          invoiceAmount: 6798,
          startDate: '2020-09-14',
        },
      ],
      paging: { cursors: { after: 'fewyNzQyOGI3OHYt' } },
    },
    required: [],
  })
  .openapi('RestaurantInvoices')

const RestaurantOfflineStatusSchema = z
  .object({
    AllowRestaurantOverride: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Whether a restaurant should be allowed to reverse this offline status change through calls to the Restaurant Events endpoints.',
      }),
    IsOffline: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Represents the current offline status of the restaurant.' }),
    RestaurantId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the restaurant that has their offline status changed.',
      }),
    Tenant: z
      .enum(['au', 'dk', 'es', 'ie', 'it', 'no', 'uk', 'nz'])
      .exactOptional()
      .openapi({
        description: 'The two letter country code for the market in which the restaurant operates.',
      }),
  })
  .openapi({
    example: {
      AllowRestaurantOverride: false,
      IsOffline: true,
      RestaurantId: '123456',
      Tenant: 'uk',
    },
    required: [],
  })
  .openapi('RestaurantOfflineStatus')

const RestaurantOrderAppliedDiscountSchema = z
  .object({
    discountAmount: z
      .number()
      .exactOptional()
      .openapi({ description: 'The discount value in smallest unit of relevant currency' }),
    type: z
      .enum(['Percent', 'FirstTimeCustomer', 'StampCard'])
      .exactOptional()
      .openapi({ description: 'The type of discount' }),
  })
  .openapi({ description: 'A discount item in an order', required: [] })
  .openapi('RestaurantOrderAppliedDiscount')

const RestaurantOrderCustomerInfoSchema = z
  .object({
    deliveryAddress: z
      .array(z.string().openapi({ description: 'The address line' }))
      .nullable()
      .exactOptional()
      .openapi({ description: 'The delivery address of the order' }),
    name: z.string().nullable().exactOptional().openapi({ description: 'The customer name' }),
  })
  .openapi({ description: 'Information about a customer', required: [] })
  .openapi('RestaurantOrderCustomerInfo')

const RestaurantOrderItemSchema: z.ZodType<RestaurantOrderItemType> = z
  .lazy(() =>
    z
      .object({
        description: z
          .string()
          .exactOptional()
          .openapi({ description: 'The description for the item' }),
        itemId: z.string().exactOptional().openapi({ description: 'The Id of the item' }),
        itemType: z
          .enum(['Product', 'MealPart', 'Accessory'])
          .exactOptional()
          .openapi({ description: 'The type of item' }),
        name: z.string().exactOptional().openapi({ description: 'The name of the item' }),
        quantity: z.int32().exactOptional().openapi({ description: 'The quantity of the item' }),
        subItems: z
          .array(RestaurantOrderItemSchema)
          .exactOptional()
          .openapi({
            description: 'The sub items of item, such as meal parts of the meal or accessories',
          }),
        synonym: z.string().exactOptional().openapi({ description: 'The synonym of the item' }),
        unitPrice: z
          .number()
          .exactOptional()
          .openapi({ description: 'The unit price for the item' }),
      })
      .openapi({ description: 'An item in an order', required: [] }),
  )
  .openapi('RestaurantOrderItem')

const RestaurantOrderPriceBreakdownSchema = z
  .object({
    accountCredits: z
      .number()
      .exactOptional()
      .openapi({ description: 'The total amount of account credit(s) applied to the order' }),
    discounts: z
      .number()
      .exactOptional()
      .openapi({ description: 'The total amount of discount(s) applied to the order' }),
    fees: z
      .number()
      .exactOptional()
      .openapi({ description: 'The total amount of fees applied to the order' }),
    items: z.number().exactOptional().openapi({ description: 'The total amount of order items' }),
    vouchers: z
      .number()
      .exactOptional()
      .openapi({ description: 'The total amount of voucher(s) applied to the order' }),
  })
  .openapi({
    description: 'The order price breakdown (all amounts in smallest unit of relevant currency)',
    required: [],
  })
  .openapi('RestaurantOrderPriceBreakdown')

const RestaurantOrderPaymentInfoSchema = z
  .object({
    fees: z
      .array(
        z
          .object({
            type: z
              .string()
              .exactOptional()
              .openapi({ description: 'The type of fee, such as delivery or card' }),
            value: z
              .number()
              .exactOptional()
              .openapi({ description: 'The fee value in smallest unit of relevant currency' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'The fees applied to the order' }),
    paidDate: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'The date and time the order was paid for, if known' }),
    paymentLines: z
      .array(
        z
          .object({
            fee: z
              .number()
              .exactOptional()
              .openapi({ description: 'The payment fee in smallest unit of relevant currency' }),
            paymentMethod: z
              .string()
              .exactOptional()
              .openapi({ description: 'The payment method, such as cash or card' }),
            value: z
              .number()
              .exactOptional()
              .openapi({ description: 'The payment value in smallest unit of relevant currency' }),
          })
          .openapi({ description: 'An individual payment line', required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'The payment lines' }),
  })
  .openapi({ description: 'Information about a payment', required: [] })
  .openapi('RestaurantOrderPaymentInfo')

const RestaurantOrderDetailsSchema = z
  .object({
    appliedDiscounts: z
      .array(RestaurantOrderAppliedDiscountSchema)
      .exactOptional()
      .openapi({ description: 'List of restaurant applied discounts' }),
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ISO-4217 currency code associated with the all prices and money amounts in order details',
      }),
    customerInfo: RestaurantOrderCustomerInfoSchema.exactOptional().openapi({
      description: 'Information about a customer',
    }),
    deliveryPrice: z
      .number()
      .exactOptional()
      .openapi({ description: 'The order delivery price in smallest unit of relevant currency' }),
    dueDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The due date of the order' }),
    friendlyId: z.string().exactOptional().openapi({ description: 'The friendly order Id' }),
    id: z.string().exactOptional().openapi({ description: 'The Id of the order' }),
    orderItems: z
      .array(RestaurantOrderItemSchema)
      .exactOptional()
      .openapi({ description: 'List of restaurant order items' }),
    orderNote: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The customer note to the order' }),
    orderPrice: z
      .number()
      .exactOptional()
      .openapi({ description: 'The order price in smallest unit of relevant currency' }),
    orderPriceBreakdown: RestaurantOrderPriceBreakdownSchema.exactOptional().openapi({
      description: 'The order price breakdown (all amounts in smallest unit of relevant currency)',
    }),
    orderStatus: z
      .enum(['Completed', 'Cancelled'])
      .exactOptional()
      .openapi({ description: 'Status of completed order' }),
    paymentInfo: RestaurantOrderPaymentInfoSchema.exactOptional().openapi({
      description: 'Information about a payment',
    }),
    paymentType: z
      .enum(['Card', 'Cash'])
      .exactOptional()
      .openapi({ description: 'The payment type (cash or card)' }),
    placedDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The order placed date' }),
    previousRestaurantOrderCount: z
      .number()
      .exactOptional()
      .openapi({
        description: "The customer's previous total number of orders made to this restaurant",
      }),
    previousTotalOrderCount: z
      .number()
      .exactOptional()
      .openapi({
        description: "The customer's previous total number of orders made to all restaurants",
      }),
    promptAsap: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'The flag that shows whether the customer awaits an order as soon as possible',
      }),
    serviceType: z
      .enum(['Delivery', 'Collection', 'DineIn'])
      .exactOptional()
      .openapi({ description: 'Type of service (collection, delivery or dine-in)' }),
    statusReason: z
      .enum([
        'TooFar',
        'FakeDelivered',
        'FakeNotDelivered',
        'FaxNotReceived',
        'IncorrectOrder',
        'NoAnswerFromRestaurant',
        'MissedByRestaurant',
        'FakeNotCollected',
        'RestaurantCannotDeliver',
        'RejectedByRestaurant',
        'NewTimeRejected',
        'SystemError',
        'RestaurantIsBusy',
        'TestOrder',
      ])
      .exactOptional()
      .openapi({ description: "The reason for the order's status, if known" }),
    transactionReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The payment transaction reference, if known' }),
  })
  .openapi({
    description: 'An order details',
    example: {
      appliedDiscounts: [{ discountAmount: 2550, type: 'StampCard' }],
      currencyCode: 'GBP',
      customerInfo: {
        deliveryAddress: ['13 Moon road', 'Mars', 'BS5 1KG', 'Bristol'],
        name: 'Simon Moon',
      },
      deliveryPrice: 200,
      dueDate: '2020-01-01T10:15:00.000Z',
      friendlyId: 821367535,
      id: 'rtvtgo0wwugmiiikdpzvsg',
      orderItems: [
        {
          description: 'one pizza and one drink from choices',
          itemId: 'p1',
          itemType: 'Product',
          name: 'Pizza and drink',
          quantity: 1,
          subItems: [
            {
              description: 'classic pizza Margherita',
              itemId: 'mp1',
              itemType: 'MealPart',
              name: 'Margherita',
              quantity: 1,
              subItems: [],
              synonym: 'Medium',
              unitPrice: 0,
            },
            {
              description: '',
              itemId: 'mp2',
              itemType: 'MealPart',
              name: 'Coca-Cola',
              quantity: 1,
              subItems: [],
              synonym: '1L',
              unitPrice: 0,
            },
            {
              itemId: 'a1',
              itemType: 'Accessory',
              name: 'Double Cheese',
              quantity: 1,
              subItems: [],
              synonym: '',
              unitPrice: 100,
            },
          ],
          synonym: 'Medium',
          unitPrice: 999,
        },
        {
          description:
            'Romaine lettuce, croutons, Parmesan cheese, lemon juice, olive oil, egg, Worcestershire sauce, anchovies, Dijon mustard, black pepper',
          itemId: 'p2',
          itemType: 'Product',
          name: 'Cesar Salad',
          quantity: 2,
          subItems: [],
          synonym: '',
          unitPrice: 533,
        },
      ],
      orderNote: 'Contact-free delivery',
      orderPrice: 2099,
      orderPriceBreakdown: {
        accountCredits: 500,
        discounts: 207,
        fees: 250,
        items: 2066,
        vouchers: 0,
      },
      orderStatus: 'Cancelled',
      paymentInfo: {
        fees: [
          { type: 'Card', value: 50 },
          { type: 'Delivery', value: 200 },
        ],
        paidDate: '2020-01-01T09:31:00.000Z',
        paymentLines: [
          { fee: 0, paymentMethod: 'AccountCredit', value: 500 },
          { fee: 50, paymentMethod: 'Card', value: 1549 },
        ],
      },
      paymentType: 'Card',
      placedDate: '2020-01-01T09:30:00.000Z',
      previousJustEatOrderCount: 3,
      previousRestaurantOrderCount: 1,
      promptAsap: false,
      serviceType: 'Delivery',
      statusReason: 'RejectedByRestaurant',
      transactionReference: 123334567667989,
    },
    required: [],
  })
  .openapi('RestaurantOrderDetails')

const RestaurantOrderSummarySchema = z
  .object({
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ISO-4217 currency code associated with the order price' }),
    deliveryPrice: z
      .number()
      .exactOptional()
      .openapi({ description: 'The order delivery price in smallest unit of relevant currency' }),
    friendlyId: z.string().exactOptional().openapi({ description: 'The friendly order Id' }),
    id: z.string().exactOptional().openapi({ description: 'The Id of the order' }),
    orderPrice: z
      .number()
      .exactOptional()
      .openapi({ description: 'The order price in smallest unit of relevant currency' }),
    orderStatus: z
      .enum(['Completed', 'Cancelled'])
      .exactOptional()
      .openapi({ description: 'Status of completed order' }),
    paymentType: z
      .enum(['Card', 'Cash'])
      .exactOptional()
      .openapi({ description: 'The payment type (cash or card)' }),
    placedDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The order placed date' }),
    serviceType: z
      .enum(['Collection', 'Delivery', 'DineIn'])
      .exactOptional()
      .openapi({ description: 'Type of service (collection, delivery or dine-in)' }),
  })
  .openapi({ description: 'An order summary', required: [] })
  .openapi('RestaurantOrderSummary')

const RestaurantOrderHistorySchema = z
  .object({
    orders: z
      .array(RestaurantOrderSummarySchema)
      .exactOptional()
      .openapi({ description: 'List of restaurant order summaries' }),
    paging: z
      .object({
        cursors: z
          .object({
            after: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The value should be used in the query parameter named after. It is used as a cursor of the last returned record in the previous request, from which next offset going to be fetched. A missing or empty value indicates that the end of the result set has been reached',
              }),
          })
          .exactOptional()
          .openapi({ description: 'Consists of cursors markers used in pagination', required: [] }),
      })
      .exactOptional()
      .openapi({ description: 'Consists of pagination information', required: [] }),
  })
  .openapi({
    example: {
      orders: [
        {
          currencyCode: 'GBP',
          deliveryPrice: 200,
          friendlyId: '821367535',
          id: 'rtvtgo0wwugmiiikdpzvsg',
          orderPrice: 2099,
          orderStatus: 'Completed',
          paymentType: 'Card',
          placedDate: '2020-01-01T09:30:00.000Z',
          serviceType: 'Delivery',
        },
        {
          currencyCode: 'GBP',
          deliveryPrice: 0,
          friendlyId: '829022736',
          id: 'uerbbymdfkxdecduuerbby',
          orderPrice: 99900,
          orderStatus: 'Cancelled',
          paymentType: 'Cash',
          placedDate: '2020-01-02T19:20:00.000Z',
          serviceType: 'Collection',
        },
        {
          currencyCode: 'GBP',
          deliveryPrice: 0,
          friendlyId: '829022737',
          id: 'dfssd3efsferr4rgfdgf',
          orderPrice: 54400,
          orderStatus: 'Completed',
          paymentType: 'Cash',
          placedDate: '2020-01-02T20:45:00.000Z',
          serviceType: 'DineIn',
        },
      ],
      paging: { cursors: { after: 'NDMyNzQyODI3OTQw' } },
    },
    required: [],
  })
  .openapi('RestaurantOrderHistory')

const RestaurantOrderSummariesSchema = z
  .object({
    count: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Total number of all orders for date range' }),
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ISO-4217 currency code associated with the total values' }),
    totalCardOrderValue: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total value of card orders for date range' }),
    totalCashOrderValue: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total value of cash orders for date range' }),
    totalCollectionOrderValue: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total value of collection orders for date range' }),
    totalDeliveryOrderValue: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total value of delivery orders for date range' }),
    totalDeliveryPriceValue: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total delivery price value for date range' }),
    totalDineInOrderValue: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total value of dine-in orders for date range' }),
    totalOrderValue: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total value of all orders for date range' }),
  })
  .openapi({
    description:
      'An orders summary for date range (all total values in smallest unit of relevant currency)',
    example: {
      count: 27,
      currencyCode: 'GBP',
      totalCardOrderValue: 92059,
      totalCashOrderValue: 7934,
      totalCollectionOrderValue: 22241,
      totalDeliveryOrderValue: 66621,
      totalDeliveryPriceValue: 70,
      totalDineInOrderValue: 11131,
      totalOrderValue: 99993,
    },
    required: [],
  })
  .openapi('RestaurantOrderSummaries')

const RestaurantPromotedPlacementInfoSchema = z
  .object({
    defaultPromoted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Should be promoted by default' }),
    restaurantId: z.string().exactOptional().openapi({ description: 'Id of the restaurant' }),
  })
  .openapi({ example: { defaultPromoted: true, restaurantId: '84335' }, required: [] })
  .openapi('RestaurantPromotedPlacementInfo')

const RestaurantReviewsSchema = z
  .object({
    reviews: z
      .array(
        z
          .object({
            approvedRestaurantComments: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Any comments left by the restaurant in response to the review approved by a moderator',
              }),
            customerComments: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Any comments left by the customer in their review' }),
            customerName: z
              .string()
              .exactOptional()
              .openapi({ description: 'The (first) name of the customer who left the review' }),
            friendlyOrderId: z
              .string()
              .exactOptional()
              .openapi({ description: 'The friendly order Id the review is associated with' }),
            id: z.string().exactOptional().openapi({ description: 'The Id of the review' }),
            rateDate: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({ description: 'The date and time on which the order was made' }),
            ratingAverage: z
              .float64()
              .exactOptional()
              .openapi({ description: 'The average score left by the customer' }),
            restaurantComments: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Any comments left by the restaurant in response to the review',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'List of restaurant reviews' }),
  })
  .openapi({
    example: {
      reviews: [
        {
          approvedRestaurantComments: 'Thank you very much for positive feedback',
          customerComments: 'Extremely good food and service',
          customerName: 'Steve',
          friendlyOrderId: '123456789',
          id: 'uimpewidbrjyxcweiqtoe',
          rateDate: '2020-10-18T17:42:38.000Z',
          ratingAverage: 5.66,
          restaurantComments: 'Thank u very much for positive feedback',
        },
        {
          approvedRestaurantComments: 'We are sorry',
          customerComments: 'Coffee poured all over my food',
          customerName: 'Lucy',
          friendlyOrderId: '123456790',
          id: 'tytyhjdbrhgjfxcweigfht',
          rateDate: '2020-10-19T18:00:45.000Z',
          ratingAverage: 2.33,
          restaurantComments: 'We are sorry, but it is your fault',
        },
      ],
    },
    required: [],
  })
  .openapi('RestaurantReviews')

const RestaurantReviewsRatingBreakdownSchema = z
  .object({
    badRatingsCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The count of bad (1,2 stars) ratings across all reviews' }),
    goodRatingsCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The count of good (5,6 stars) ratings across all reviews' }),
    neutralRatingsCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The count of neutral (3,4 stars) ratings across all reviews' }),
  })
  .openapi({ required: [] })
  .openapi('RestaurantReviewsRatingBreakdown')

const RestaurantReviewsSummarySchema = z
  .object({
    ratingAverage: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The average score of all reviews' }),
    ratingsBreakdown: z
      .object({
        delivery: RestaurantReviewsRatingBreakdownSchema.exactOptional().openapi({
          description:
            'The breakdown of good/neutral/bad delivery experience ratings across all reviews',
        }),
        overall: RestaurantReviewsRatingBreakdownSchema.exactOptional().openapi({
          description:
            'The breakdown of good/neutral/bad overall experience ratings across all reviews',
        }),
        quality: RestaurantReviewsRatingBreakdownSchema.exactOptional().openapi({
          description:
            'The breakdown of good/neutral/bad quality experience ratings across all reviews',
        }),
        service: RestaurantReviewsRatingBreakdownSchema.exactOptional().openapi({
          description:
            'The breakdown of good/neutral/bad service experience ratings across all reviews',
        }),
      })
      .exactOptional()
      .openapi({
        description: 'The breakdown of good/neutral/bad reviews for different types of ratings',
        required: [],
      }),
    reviewsCount: z.int32().exactOptional().openapi({ description: 'The count of all reviews' }),
  })
  .openapi({
    example: {
      ratingAverage: 4.7,
      ratingsBreakdown: {
        delivery: { badRatingsCount: 10, goodRatingsCount: 46, neutralRatingsCount: 10 },
        overall: { badRatingsCount: 8, goodRatingsCount: 44, neutralRatingsCount: 14 },
        quality: { badRatingsCount: 10, goodRatingsCount: 44, neutralRatingsCount: 12 },
        service: { badRatingsCount: 15, goodRatingsCount: 45, neutralRatingsCount: 6 },
      },
      reviewsCount: 66,
    },
    required: [],
  })
  .openapi('RestaurantReviewsSummary')

const RestaurantSearchProductSchema = z
  .object({
    fullName: z.string().exactOptional().openapi({ description: 'The full name of the product' }),
    price: z.number().exactOptional().openapi({ description: 'The price of the product' }),
    productId: z.string().exactOptional().openapi({ description: 'The id of the product' }),
  })
  .openapi({
    example: { fullName: 'Chicken Korma', price: 799, productId: '289347' },
    required: [],
  })
  .openapi('RestaurantSearchProduct')

const RestaurantSearchResponseItemSchema = z
  .object({
    isSponsored: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Flag to indicate if the restaurant is sponsored, so has been promoted to the top of the results',
      }),
    products: z
      .array(RestaurantSearchProductSchema)
      .exactOptional()
      .openapi({
        description:
          'Ordered list of products available from the restaurant which matched the search term',
      }),
    restaurantId: z.string().exactOptional().openapi({ description: 'The id of the restaurant' }),
  })
  .openapi({
    example: {
      isSponsored: false,
      products: [
        { fullName: 'Chicken Korma', price: 799, productId: '289347' },
        { fullName: 'Chicken Madras', price: 699, productId: '563454' },
      ],
      restaurantId: '110230',
    },
    required: [],
  })
  .openapi('RestaurantSearchResponseItem')

const RestaurantSearchResponseSchema = z
  .object({
    restaurants: z
      .array(RestaurantSearchResponseItemSchema)
      .exactOptional()
      .openapi({ description: 'Ordered list of restaurants' }),
  })
  .openapi({
    example: {
      restaurants: [
        {
          isSponsored: true,
          products: [
            { fullName: 'Chicken Korma', price: 799, productId: '289347' },
            { fullName: 'Chicken Madras', price: 699, productId: '563454' },
          ],
          restaurantId: '110230',
        },
        {
          isSponsored: false,
          products: [
            { fullName: 'BBQ Chicken Pizza', price: 1099, productId: '67832' },
            { fullName: 'Chicken Burger', price: 899, productId: '23567' },
          ],
          restaurantId: '229390',
        },
      ],
    },
    required: [],
  })
  .openapi('RestaurantSearchResponse')

const RestaurantSettingsResponseSchema = z
  .object({
    isMenuManagementTeaserVisible: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A value indicated whether menu management teaser should be shown on restaurant edit menu page',
      }),
  })
  .openapi({
    description: 'response containing settings of the restaurant in partner centre',
    example: { isMenuManagementTeaserVisible: false },
    required: [],
  })
  .openapi('RestaurantSettingsResponse')

const RestaurantSmileyRatingsInspectionSchema = z
  .object({
    inspectionDate: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Date of the inspection (dd-mm-yyyy). It can be nullable if no inspection was done in the restaurant.',
      }),
    rate: z
      .int()
      .min(1)
      .max(4)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Smiley Rating of this inspection (4 - lower, 1 - higher). It can be nullable if no inspection was done in the restaurant.',
      }),
  })
  .openapi({ required: [] })
  .openapi('RestaurantSmileyRatingsInspection')

const RestaurantSmileyRatingsResponseSchema = z
  .strictObject({
    inspections: z
      .object({
        first: RestaurantSmileyRatingsInspectionSchema.exactOptional().openapi({
          description: 'First most recent inspection',
        }),
        fourth: RestaurantSmileyRatingsInspectionSchema.exactOptional().openapi({
          description: 'Fourth most recent inspection',
        }),
        second: RestaurantSmileyRatingsInspectionSchema.exactOptional().openapi({
          description: 'Second most recent inspection',
        }),
        third: RestaurantSmileyRatingsInspectionSchema.exactOptional().openapi({
          description: 'Third most recent inspection',
        }),
      })
      .exactOptional()
      .openapi({
        description: 'Object with the last four inspections from most recent to older',
        required: [],
      }),
    isElite: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag that ensures a restaurant is rated as Elite' }),
    restaurantSmileyId: z.string().exactOptional().openapi({ description: 'Restaurant Smiley Id' }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'URL for complete info of this restaurant at https://www.findsmiley.dk',
      }),
  })
  .openapi({
    example: {
      inspections: {
        first: { inspectionDate: '02-01-2021', rate: 1 },
        fourth: { inspectionDate: null, rate: null },
        second: { inspectionDate: '02-01-2021', rate: 1 },
        third: { inspectionDate: '02-01-2021', rate: 2 },
      },
      isElite: false,
      restaurantSmileyId: '111111',
      url: 'https://www.findsmiley.dk/111111',
    },
    required: [],
  })
  .openapi('RestaurantSmileyRatingsResponse')

const RestaurantUpdateResponseSchema = z
  .strictObject({
    optimizelyData: z
      .xor([OptimizelyDataSchema])
      .nullable()
      .exactOptional()
      .openapi({ description: 'Details of current Optimizely data file and location' }),
    ordersData: z
      .xor([OrdersDataSchema])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Data containing all changed orders for a restaurant since last call',
      }),
  })
  .openapi({ required: [] })
  .openapi('RestaurantUpdateResponse')

const ReverseGeocodingResponseSchema = z
  .object({
    geometry: z
      .object({
        coordinates: z
          .array(z.float64())
          .length(2)
          .exactOptional()
          .openapi({ description: 'longitude and latitude' }),
        type: z.string().exactOptional().openapi({ description: 'type of primitive' }),
      })
      .exactOptional()
      .openapi({ description: 'Geometry information for consumers location', required: [] }),
    properties: z
      .object({
        address: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'list of address chunks' }),
      })
      .exactOptional()
      .openapi({ description: 'feature metadata', required: [] }),
    type: z.string().exactOptional().openapi({ description: 'type of primitive' }),
  })
  .openapi({
    description: 'Best guess address for passed lat-long',
    example: {
      geometry: { coordinates: [-0.01938, 51.10234], type: 'Point' },
      properties: {
        address: ['Flat 3', 'Greystoke House', '127 High Street', 'Chelmsford', 'Essex', 'CM1 4QQ'],
      },
      type: 'Feature',
    },
    required: [],
  })
  .openapi('ReverseGeocodingResponse')

const ReviewCommentSchema = z
  .strictObject({
    comment: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Comment left by customer/restaurant' }),
    processed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Will be false until processed by an agent/automation' }),
    showText: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Text for the review comment will be hidden until it has been passed as OK. E.g. ensuring it doesn't contains swear words",
      }),
  })
  .openapi({
    description: 'Details for a review comment',
    example: { comment: 'Yum!', processed: true, showText: false },
    required: [],
  })
  .openapi('ReviewComment')

const ReviewScoresSchema = z
  .strictObject({
    delivery: z.int32().exactOptional().openapi({ description: 'The delivery rating' }),
    quality: z.int32().exactOptional().openapi({ description: 'The food quality rating' }),
    service: z.int32().exactOptional().openapi({ description: 'The restaurant service rating' }),
  })
  .openapi({
    description: 'The star ratings given by a customer',
    example: { delivery: 4, quality: 2, service: 3 },
    required: [],
  })
  .openapi('ReviewScores')

const ReviewManagementDataSchema = z
  .strictObject({
    customerCity: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The customers city' }),
    customerComment: ReviewCommentSchema.exactOptional(),
    customerDisplayName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Customer name shown on the public site. Forename only to avoid disclosing PII',
      }),
    customerEmail: z
      .email()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The customers email' }),
    hideFromSite: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "This review is suspect (e.g. a restaurant self-reviewing) so don't display it on the public site",
      }),
    orderDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When order was placed' }),
    orderNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user friendly order number' }),
    processed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Flag used to indicate that this review has passed through the validation process.',
      }),
    ratings: ReviewScoresSchema.exactOptional(),
    restaurantComment: ReviewCommentSchema.exactOptional(),
    restaurantId: z.string().exactOptional().openapi({ description: 'The restaurant partner Id' }),
    restaurantName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The display name for the restaurant' }),
    reviewDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the review was submitted' }),
    reviewId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Identifier for ratings - will be equivalent to `RatingCode`' }),
    tenant: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'A valid country code, e.g. "uk"' }),
  })
  .openapi({
    description: 'A customer review for an order',
    example: {
      customerCity: 'London',
      customerComment: { comment: 'Very tasty!', processed: true, showText: true },
      customerDisplayName: 'John',
      customerEmail: 'example@example.com',
      hideFromSite: false,
      orderDate: '2021-05-14T12:00:00.000Z',
      orderNumber: '1234',
      processed: true,
      ratings: { delivery: 6, quality: 6, service: 6 },
      restaurantComment: { comment: 'Thank you :-)', processed: true, showText: true },
      restaurantId: '1234',
      restaurantName: 'Tasty Snacks',
      reviewDate: '2021-05-14T17:00:00.000Z',
      reviewId: 'abc1234',
      tenant: 'uk',
    },
    required: [],
  })
  .openapi('ReviewManagementData')

const ReviewManagementPagingSchema = z
  .strictObject({
    total: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of reviews for the current search' }),
  })
  .openapi({ description: 'Meta data for a set of reviews', example: { total: 77 }, required: [] })
  .openapi('ReviewManagementPaging')

const ReviewManagementPagedListSchema = z
  .strictObject({
    paging: ReviewManagementPagingSchema.exactOptional(),
    reviews: z
      .array(ReviewManagementDataSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The current page of reviews' }),
  })
  .openapi({
    description:
      'Represents a page of reviews plus data about the overall result set. E.g. total number of results for the search.',
    example: {
      paging: { total: 555 },
      reviews: [
        {
          customerCity: 'London',
          customerComment: { comment: 'Very tasty!', processed: true, showText: true },
          customerDisplayName: 'John',
          customerEmail: 'example@example.com',
          hideFromSite: false,
          orderDate: '2021-05-14T12:00:00.000Z',
          orderNumber: '1234',
          processed: true,
          ratings: { delivery: 6, quality: 6, service: 6 },
          restaurantComment: { comment: 'Thank you :-)', processed: true, showText: true },
          restaurantId: '1234',
          restaurantName: 'Tasty Snacks',
          reviewDate: '2021-05-14T17:00:00.000Z',
          reviewId: 'abc1234',
          tenant: 'uk',
        },
      ],
    },
    required: [],
  })
  .openapi('ReviewManagementPagedList')

const RichMediaImageBatchResponseSchema = z
  .object({
    batchStatus: z
      .enum(['Queued', 'Running', 'Succeeded', 'PartiallySucceeded', 'Failed', 'Cancelled'])
      .openapi({ description: 'The status of batch request' }),
    images: z
      .array(
        z
          .object({
            failureReason: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Can contain additional information about image publishing failure',
              }),
            imageContext: z
              .record(z.string(), z.string())
              .openapi({
                description:
                  'Image context in dictionary format. Can contain additional data that will be published alongside the image.',
              }),
            imageStatus: z
              .enum(['Succeeded', 'Failed'])
              .openapi({ description: 'The status of individual image' }),
            sourceImageUrl: z
              .string()
              .openapi({
                description:
                  'Source image URL. The remote HTTP or HTTPS URL address of an existing image or a private S3 object URL in a whitelisted bucket.',
              }),
            urlTemplate: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Image URL template that can be used to access the image. Mandatory transformations are already baked in the URL template. The {transformations} placeholder can be replaced with additional Cloudinary transformations that suit your need (e.g. height, width etc). For more details see https://cloudinary.com/documentation/image_transformations',
              }),
          })
          .openapi({ required: ['sourceImageUrl', 'imageContext', 'imageStatus'] }),
      )
      .max(500)
      .exactOptional()
      .openapi({ description: 'The array of images in the batch' }),
  })
  .openapi({
    example: {
      batchStatus: 'PartiallySucceeded',
      images: [
        {
          imageContext: { dishKey: 'pizza', restaurantKey: 'burgers&pizza', tenant: 'uk' },
          imageStatus: 'Succeeded',
          sourceImageUrl: 'https://test.test/image01.jpg',
          urlTemplate:
            'https://cloudinary.test/image/upload/c_fill,q_auto,{transformations}/v1/uk/dishes/burgers_pizza/image01',
        },
        {
          failureReason: 'Source image exeeds maximum size of 10 MB.',
          imageContext: { dishKey: 'burger', restaurantKey: 'burgers&pizza', tenant: 'uk' },
          imageStatus: 'Failed',
          sourceImageUrl: 'https://test.test/image02.jpg',
        },
      ],
    },
    required: ['batchStatus'],
  })
  .openapi('RichMediaImageBatchResponse')

const RichMediaImagePublishRequestSchema = z
  .object({
    imageType: z
      .string()
      .openapi({
        description:
          'Image type of published images. Must match an image type defined in the metadata for your client.',
      }),
    images: z
      .array(
        z
          .object({
            imageContext: z
              .record(z.string(), z.string())
              .exactOptional()
              .openapi({
                description:
                  'Image context in dictionary format. Can contain additional data that will be published alongside the image.',
              }),
            sourceImageUrl: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Source image URL. The remote HTTP or HTTPS URL address of an existing image or a private S3 object URL in a whitelisted bucket.',
              }),
          })
          .openapi({ required: [] }),
      )
      .min(1)
      .max(500)
      .openapi({ description: 'The array of images to publish.' }),
  })
  .openapi({
    example: {
      imageType: 'DishImage',
      images: [
        {
          imageContext: { dishKey: 'pizza', restaurantKey: 'burgers&pizza', tenant: 'uk' },
          sourceImageUrl: 'https://test.test/image01.jpg',
        },
        {
          imageContext: { dishKey: 'burger', restaurantKey: 'burgers&pizza', tenant: 'uk' },
          sourceImageUrl: 'https://test.test/image02.jpg',
        },
      ],
    },
    required: ['imageType', 'images'],
  })
  .openapi('RichMediaImagePublishRequest')

const SearchByConsumerResponseSchema = z
  .object({
    cards: z
      .array(
        z
          .object({ amount: z.int32().exactOptional(), pan: z.string().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchByConsumerResponse')

const SearchByPanResponseSchema = z
  .object({
    amount: z.int32().exactOptional(),
    pan: z.string().exactOptional(),
    redemptionHistory: z
      .array(
        z
          .object({
            consumerId: z.string().exactOptional(),
            redeemedOn: z.iso.datetime({ offset: true }).exactOptional(),
            status: z.enum(['Redeemed', 'Failed']).exactOptional(),
            statusDetails: z.string().exactOptional(),
            transactionId: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchByPanResponse')

const LocalDateTimeSchema = z
  .string()
  .regex(
    /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\.[0-9]+)?$/,
  )
  .openapi({
    description:
      'A local date time object, conforming to `ISO-8601`, but with only a partial time representation and no time offset.',
  })
  .openapi('LocalDateTime')

const SearchRestaurantSchema = z
  .object({
    Address: z
      .object({
        City: z.string().exactOptional(),
        FirstLine: z.string().exactOptional(),
        Latitude: z.number().exactOptional(),
        Longitude: z.number().exactOptional(),
        Postcode: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    Badges: z.array(z.object({})).exactOptional(),
    BrandName: z.string().exactOptional(),
    City: z.string().exactOptional(),
    CollectionMenuId: z.number().nullable().exactOptional(),
    CuisineTypes: z
      .array(
        z
          .object({ Id: z.number().exactOptional(), IsTopCuisine: z.boolean().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    Cuisines: z
      .array(
        z
          .object({ Name: z.string().exactOptional(), SeoName: z.string().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    Deals: z
      .array(
        z
          .object({
            Description: z.string().exactOptional(),
            DiscountPercent: z.number().exactOptional(),
            OfferType: z.string().exactOptional(),
            QualifyingPrice: z.number().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    DefaultDisplayRank: z.number().exactOptional(),
    DeliveryChargeBands: z
      .array(
        z
          .object({
            BasketThresholdPrice: z.number().exactOptional(),
            DeliveryChargeBelowThreshold: z.number().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    DeliveryCost: z.number().exactOptional(),
    DeliveryEtaMinutes: z
      .object({
        Approximate: z.number().nullable().exactOptional(),
        RangeLower: z.number().exactOptional(),
        RangeUpper: z.number().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    DeliveryMenuId: z.number().exactOptional(),
    DeliveryOpeningTime: z.iso.datetime({ offset: true }).exactOptional(),
    DeliveryOpeningTimeLocal: LocalDateTimeSchema.exactOptional(),
    DeliveryOpeningTimeUtc: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    DeliveryStartTime: z.iso.datetime({ offset: true }).exactOptional(),
    DeliveryTime: z.number().nullable().exactOptional(),
    DeliveryTimeMinutes: z.number().nullable().exactOptional(),
    DeliveryWorkingTimeMinutes: z.number().exactOptional(),
    DeliveryZipcode: z.string().nullable().exactOptional(),
    Description: z.string().exactOptional(),
    DriveDistance: z.number().exactOptional(),
    DriveInfoCalculated: z.boolean().exactOptional(),
    HygieneRating: z.number().nullable().exactOptional(),
    Id: z.number().exactOptional(),
    IsBrand: z.boolean().exactOptional(),
    IsCloseBy: z.boolean().exactOptional(),
    IsCollection: z.boolean().exactOptional(),
    IsDelivery: z.boolean().exactOptional(),
    IsFreeDelivery: z.boolean().exactOptional(),
    IsHalal: z.boolean().exactOptional(),
    IsNew: z.boolean().exactOptional(),
    IsOpenNow: z.boolean().exactOptional(),
    IsOpenNowForCollection: z.boolean().exactOptional(),
    IsOpenNowForDelivery: z.boolean().exactOptional(),
    IsOpenNowForPreorder: z.boolean().exactOptional(),
    IsPremier: z.boolean().exactOptional(),
    IsSponsored: z.boolean().exactOptional(),
    IsTemporarilyOffline: z.boolean().exactOptional(),
    IsTemporaryBoost: z.boolean().exactOptional(),
    IsTestRestaurant: z.boolean().exactOptional(),
    LastUpdated: LocalDateTimeSchema.exactOptional(),
    Latitude: z.number().exactOptional(),
    Logo: z
      .array(
        z.object({ StandardResolutionURL: z.string().exactOptional() }).openapi({ required: [] }),
      )
      .exactOptional(),
    LogoUrl: z.string().exactOptional(),
    Longitude: z.number().exactOptional(),
    MinimumDeliveryValue: z.number().exactOptional(),
    Name: z.string().exactOptional(),
    NewnessDate: LocalDateTimeSchema.exactOptional(),
    NumberOfRatings: z.number().exactOptional(),
    OfferPercent: z.number().exactOptional(),
    Offers: z.array(z.looseObject({})).exactOptional(),
    OpeningTime: z.iso.datetime({ offset: true }).exactOptional(),
    OpeningTimeIso: LocalDateTimeSchema.exactOptional(),
    OpeningTimeLocal: LocalDateTimeSchema.exactOptional(),
    OpeningTimeUtc: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    OpeningTimes: z.array(z.object({})).exactOptional(),
    Postcode: z.string().exactOptional(),
    Rating: z
      .object({
        Average: z.number().exactOptional(),
        Count: z.number().exactOptional(),
        StarRating: z.number().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    RatingAverage: z.number().exactOptional(),
    RatingStars: z.number().exactOptional(),
    ReasonWhyTemporarilyOffline: z.string().exactOptional(),
    Score: z.number().exactOptional(),
    ScoreMetaData: z
      .array(
        z
          .object({ Key: z.string().exactOptional(), Value: z.string().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    SecondDateRank: z.number().exactOptional(),
    SecondDateRanking: z.number().exactOptional(),
    SendsOnItsWayNotifications: z.boolean().exactOptional(),
    ServiceableAreas: z.array(z.object({})).exactOptional(),
    ShowSmiley: z.boolean().exactOptional(),
    SmileyDate: z.object({}).nullable().exactOptional(),
    SmileyElite: z.boolean().exactOptional(),
    SmileyResult: z.object({}).nullable().exactOptional(),
    SmileyUrl: z.object({}).nullable().exactOptional(),
    SponsoredPosition: z.number().exactOptional(),
    Tags: z.array(z.string()).exactOptional(),
    UniqueName: z.string().exactOptional(),
    Url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchRestaurant')

const SearchResponseSchema = z
  .object({
    CuisineSets: z
      .array(
        z
          .object({
            Cuisines: z
              .array(
                z
                  .object({ Name: z.string().exactOptional(), SeoName: z.string().exactOptional() })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
            Id: z.string().exactOptional(),
            Name: z.string().exactOptional(),
            Type: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    Dishes: z
      .array(
        z
          .object({
            Best: z
              .array(
                z
                  .object({
                    FullName: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'The full name of the product' }),
                    Price: z
                      .number()
                      .exactOptional()
                      .openapi({ description: 'The price of the product' }),
                    ProductId: z
                      .number()
                      .exactOptional()
                      .openapi({
                        description:
                          'Deprecated field no longer populated, but retained for backwards compatibility with clients',
                      }),
                    StrProductId: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'The id of the product' }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
            RestaurantId: z.number().exactOptional(),
            Similar: z
              .array(
                z
                  .object({
                    FullName: z.string().exactOptional(),
                    Price: z.number().exactOptional(),
                    ProductId: z.number().exactOptional(),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    MetaData: z
      .object({
        Area: z.string().exactOptional(),
        CanonicalName: z.string().exactOptional(),
        CuisineDetails: z
          .array(
            z
              .object({
                Name: z.string().exactOptional(),
                SeoName: z.string().exactOptional(),
                Total: z.number().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        District: z.string().exactOptional(),
        Latitude: z
          .number()
          .exactOptional()
          .openapi({ description: 'The latitude of the search location' }),
        Longitude: z
          .number()
          .exactOptional()
          .openapi({ description: 'The longitude of the search location' }),
        Postcode: z.string().exactOptional(),
        ResultCount: z.number().exactOptional(),
        SearchedTerms: z.object({}).nullable().exactOptional(),
        TagDetails: z
          .array(
            z
              .object({
                BackgroundColour: z.string().exactOptional(),
                Colour: z.string().exactOptional(),
                DisplayName: z.string().exactOptional(),
                Key: z.string().exactOptional(),
                Priority: z.number().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    RestaurantSets: z
      .array(
        z
          .object({
            Id: z.string().exactOptional(),
            Name: z.string().exactOptional(),
            Restaurants: z
              .array(
                z
                  .object({
                    Id: z.number().exactOptional(),
                    Metadata: z
                      .array(
                        z
                          .object({
                            Key: z.string().exactOptional(),
                            Value: z.string().exactOptional(),
                          })
                          .openapi({ required: [] }),
                      )
                      .exactOptional(),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
            Type: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    Restaurants: z.array(SearchRestaurantSchema).exactOptional(),
    ShortResultText: z.string().exactOptional(),
    Views: z
      .array(
        z
          .object({
            Components: z
              .object({
                Id: z.string().exactOptional(),
                TemplateName: z.string().exactOptional(),
                TrackingId: z.string().exactOptional(),
                Type: z.string().exactOptional(),
                ViewData: z.object({}).exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            Target: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    area: z.string().exactOptional(),
    deliveryFees: z
      .object({
        restaurants: z
          .record(z.string(), RestaurantDeliveryFeesSchema)
          .exactOptional()
          .openapi({ description: 'Dictionary of `restaurantIds` to delivery fees.' }),
      })
      .exactOptional()
      .openapi({ description: 'Information related to delivery fees.', required: [] }),
    promotedPlacement: z
      .object({
        filteredSearchPromotedLimit: z
          .number()
          .exactOptional()
          .openapi({ description: 'How many restaurants to promote when search is filtered' }),
        rankedIds: z
          .array(z.number())
          .exactOptional()
          .openapi({ description: 'Restaurants that can be promoted, in preferred order' }),
        restaurants: z
          .record(z.string(), RestaurantPromotedPlacementInfoSchema)
          .exactOptional()
          .openapi({ description: 'Dictionary of `restaurantIds` to promoted placement info.' }),
      })
      .exactOptional()
      .openapi({
        description: 'Information related to promoted placement restaurants.',
        required: [],
      }),
  })
  .openapi({
    example: {
      Area: 'Fleet Street',
      CuisineSets: [
        {
          Cuisines: [{ Name: 'Pizza', SeoName: 'pizza' }],
          Id: 'user_and_local_cuisines',
          Name: '',
          Type: 'area_cuisines',
        },
      ],
      Dishes: [],
      MetaData: {
        Area: 'Fleet Street',
        CanonicalName: 'ec4-fleetstreet',
        CuisineDetails: [{ Name: 'Danish', SeoName: 'danish', Total: 171 }],
        District: 'EC4',
        Latitude: 0,
        Longitude: 0,
        Postcode: 'EC4',
        ResultCount: 1,
        SearchedTerms: null,
        TagDetails: [
          {
            BackgroundColour: '#E6F6C5',
            Colour: '#04822C',
            DisplayName: 'Tried and Tasted',
            Key: 'tried-and-tasted',
            Priority: 300,
          },
        ],
      },
      RestaurantSets: [],
      Restaurants: [
        {
          Address: {
            City: 'London',
            FirstLine: 'London',
            Latitude: 51.516454,
            Longitude: -0.103137,
            Postcode: 'EC4M 7RF',
          },
          Badges: [],
          BrandName: '',
          City: 'London',
          CollectionMenuId: null,
          CuisineTypes: [{ Id: 2, IsTopCuisine: false, Name: 'English', SeoName: 'english' }],
          Cuisines: [{ Name: 'English', SeoName: 'english' }],
          Deals: [
            {
              Description: '20% off when you spend £20',
              DiscountPercent: 20,
              OfferType: 'Percent',
              QualifyingPrice: 20,
            },
          ],
          DefaultDisplayRank: 0,
          DeliveryChargeBands: [],
          DeliveryCost: 0.12,
          DeliveryEtaMinutes: { Approximate: null, RangeLower: 10, RangeUpper: 25 },
          DeliveryMenuId: 224651,
          DeliveryOpeningTime: '2019-11-18T01:00:00Z',
          DeliveryOpeningTimeLocal: '2019-11-18T01:00:00',
          DeliveryOpeningTimeUtc: null,
          DeliveryStartTime: '2019-11-18T01:00:00Z',
          DeliveryTime: null,
          DeliveryTimeMinutes: null,
          DeliveryWorkingTimeMinutes: 10,
          DeliveryZipcode: null,
          Description: '',
          DriveDistance: 0,
          DriveInfoCalculated: true,
          HygieneRating: null,
          Id: 102215,
          IsBrand: false,
          IsCloseBy: true,
          IsCollection: false,
          IsDelivery: true,
          IsFreeDelivery: false,
          IsHalal: false,
          IsNew: false,
          IsOpenNow: true,
          IsOpenNowForCollection: false,
          IsOpenNowForDelivery: true,
          IsOpenNowForPreorder: false,
          IsPremier: false,
          IsSponsored: false,
          IsTemporarilyOffline: false,
          IsTemporaryBoost: false,
          IsTestRestaurant: false,
          LastUpdated: '2019-09-10T10:55:58.199397',
          Latitude: 0,
          Logo: [
            {
              StandardResolutionURL:
                'http://d30v2pzvrfyzpo.cloudfront.net/uk/images/restaurants/102215.gif',
            },
          ],
          LogoUrl: 'http://d30v2pzvrfyzpo.cloudfront.net/uk/images/restaurants/102215.gif',
          Longitude: 0,
          MinimumDeliveryValue: 0,
          Name: 'TEST_DP_1',
          NewnessDate: '2017-05-02T14:30:21',
          NumberOfRatings: 0,
          OfferPercent: 0,
          Offers: [
            {
              Amount: 20,
              MaxQualifyingValue: 50,
              OfferId: '136149',
              QualifyingValue: 20,
              Type: 'Percent',
            },
          ],
          OpeningTime: '2019-11-19T01:00:00Z',
          OpeningTimeIso: '2019-11-19T01:00:00',
          OpeningTimeLocal: '2019-11-19T01:00:00',
          OpeningTimeUtc: null,
          OpeningTimes: [],
          Postcode: 'EC4M 7RF',
          Rating: { Average: 0, Count: 0, StarRating: 0 },
          RatingAverage: 0,
          RatingStars: 0,
          ReasonWhyTemporarilyOffline: '',
          Score: 502,
          ScoreMetaData: [
            { Key: 'Distance', Value: '0' },
            { Key: 'SetName', Value: 'Default' },
          ],
          SecondDateRank: 0,
          SecondDateRanking: 0,
          SendsOnItsWayNotifications: false,
          ServiceableAreas: [],
          ShowSmiley: false,
          SmileyDate: null,
          SmileyElite: false,
          SmileyResult: null,
          SmileyUrl: null,
          SponsoredPosition: 0,
          Tags: [],
          UniqueName: 'test_dp-london-london',
          Url: 'https://www.just-eat.co.uk/restaurants-test_dp-london-london',
        },
      ],
      ShortResultText: 'EC4',
      Views: [],
      deliveryFees: {
        restaurants: {
          '102215': {
            bands: [{ fee: 100, minimumAmount: 0 }],
            minimumOrderValue: 0,
            restaurantId: '102215',
          },
        },
      },
      promotedPlacement: {
        filteredSearchPromotedLimit: 5,
        rankedIds: [84335],
        restaurants: { '84335': { defaultPromoted: true, restaurantId: '84335' } },
      },
    },
    required: [],
  })
  .openapi('SearchResponse')

const SearchWebResponseSchema = z
  .object({
    Closed: z.array(SearchRestaurantSchema).exactOptional(),
    Offline: z.array(SearchRestaurantSchema).exactOptional(),
    Open: z.array(SearchRestaurantSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchWebResponse')

const SecretsResponseSchema = z
  .strictObject({
    secrets: z
      .record(
        z.string(),
        z
          .record(z.string(), z.string().openapi({ description: 'Secret value' }))
          .openapi({ description: 'Key of a single secret' }),
      )
      .nullable()
      .exactOptional()
      .openapi({ description: 'Dictionary of secrets providers available' }),
  })
  .openapi({ required: [] })
  .openapi('SecretsResponse')

const SendSmsRequestSchema = z
  .strictObject({
    message: z.string().nullable().exactOptional().openapi({ description: 'Message to send' }),
  })
  .openapi({ required: [] })
  .openapi('SendSmsRequest')

const SendSmsResponseSchema = z
  .strictObject({
    mobileNumberUsed: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Mobile number to which message were sent' }),
  })
  .openapi({ required: [] })
  .openapi('SendSmsResponse')

const ServiceTimesCollectionSchema = z
  .array(
    z
      .object({
        end: z
          .string()
          .regex(/^([0-1]\d|2[0-3]):[0-5]\d$:[0-5]\d$/)
          .exactOptional()
          .openapi({
            description:
              "Local end time of the slot in hh:mm:ss format. The end time occurs on the next day if less than or equal to the start time. Times are in the restaurant's time zone which can be obtained by converting `location.geoPosition` value from [the restaurant's details](#operation/GetRestaurantDetails) using a lookup API such as `timezonedb.com`.",
          }),
        start: z
          .string()
          .regex(/^([0-1]\d|2[0-3]):[0-5]\d$:[0-5]\d$/)
          .exactOptional()
          .openapi({
            description:
              "Start time of the slot in hh:mm:ss format. Times are in the restaurant's time zone which can be obtained by converting `location.geoPosition` value from [the restaurant's details](#operation/GetRestaurantDetails) using a lookup API such as `timezonedb.com`.",
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi('ServiceTimesCollection')

const ServiceTimesServicesSchema = z
  .object({
    collection: ServiceTimesCollectionSchema.exactOptional().openapi({
      description: 'The times at which customers can collect from the restaurant',
    }),
    delivery: ServiceTimesCollectionSchema.exactOptional().openapi({
      description: 'The times at which the restaurant can provide delivery',
    }),
  })
  .openapi({ required: [] })
  .openapi('ServiceTimesServices')

const ServiceTimesDaysSchema = z
  .object({
    friday: ServiceTimesServicesSchema.exactOptional().openapi({
      description: 'Service times for Fridays',
    }),
    monday: ServiceTimesServicesSchema.exactOptional().openapi({
      description: 'Service times for Mondays',
    }),
    saturday: ServiceTimesServicesSchema.exactOptional().openapi({
      description: 'Service times for Saturdays',
    }),
    sunday: ServiceTimesServicesSchema.exactOptional().openapi({
      description: 'Service times for Sundays',
    }),
    thursday: ServiceTimesServicesSchema.exactOptional().openapi({
      description: 'Service times for Thursdays',
    }),
    tuesday: ServiceTimesServicesSchema.exactOptional().openapi({
      description: 'Service times for Tuesdays',
    }),
    wednesday: ServiceTimesServicesSchema.exactOptional().openapi({
      description: 'Service times for Wednesdays',
    }),
  })
  .openapi({ description: 'The desired times at which a restaurant is in service', required: [] })
  .openapi('ServiceTimesDays')

const ServiceTimesSchema = z
  .object({
    serviceTimes: ServiceTimesDaysSchema.exactOptional().openapi({
      description: 'The desired times at which a restaurant is in service',
    }),
  })
  .openapi({
    example: {
      desiredServiceTimes: {
        friday: {
          collection: [
            { end: '14:00:00', start: '12:00:00' },
            { end: '23:00:00', start: '17:00:00' },
          ],
          delivery: [
            { end: '13:30:00', start: '12:00:00' },
            { end: '00:00:00', start: '18:00:00' },
          ],
        },
        monday: {
          collection: [
            { end: '14:00:00', start: '12:00:00' },
            { end: '23:00:00', start: '17:00:00' },
          ],
          delivery: [
            { end: '13:30:00', start: '12:00:00' },
            { end: '00:00:00', start: '18:00:00' },
          ],
        },
        saturday: {
          collection: [{ end: '23:00:00', start: '12:00:00' }],
          delivery: [{ end: '00:00:00', start: '12:00:00' }],
        },
        sunday: {
          collection: [{ end: '23:00:00', start: '12:00:00' }],
          delivery: [{ end: '00:00:00', start: '12:00:00' }],
        },
        thursday: {
          collection: [
            { end: '14:00:00', start: '12:00:00' },
            { end: '23:00:00', start: '17:00:00' },
          ],
          delivery: [
            { end: '13:30:00', start: '12:00:00' },
            { end: '00:00:00', start: '18:00:00' },
          ],
        },
        tuesday: {
          collection: [
            { end: '14:00:00', start: '12:00:00' },
            { end: '23:00:00', start: '17:00:00' },
          ],
          delivery: [
            { end: '13:30:00', start: '12:00:00' },
            { end: '00:00:00', start: '18:00:00' },
          ],
        },
        wednesday: {
          collection: [
            { end: '14:00:00', start: '12:00:00' },
            { end: '23:00:00', start: '17:00:00' },
          ],
          delivery: [
            { end: '13:30:00', start: '12:00:00' },
            { end: '00:00:00', start: '18:00:00' },
          ],
        },
      },
    },
    required: [],
  })
  .openapi('ServiceTimes')

const SetPaymentModeRequestSchema = z
  .strictObject({
    paymentMode: z
      .enum(['CardOnly', 'CardAndCash'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'New payment mode' }),
  })
  .openapi({ required: [] })
  .openapi('SetPaymentModeRequest')

const SetProductsOfflineRequestSchema = z
  .object({
    NextAvailableAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The time when products should be brought back online. This may be delayed by up to 5 minutes. There is no upper time limit.',
      }),
    ProductIds: z.array(z.string()).openapi({ description: 'Product ids to set offline.' }),
    RequestedBy: z
      .string()
      .openapi({ description: 'Consists of information about who requested changes.' }),
  })
  .openapi({ required: ['ProductIds', 'RequestedBy', 'NextAvailableAt'] })
  .openapi('SetProductsOfflineRequest')

const SetProductsOnlineRequestSchema = z
  .object({
    ProductIds: z.array(z.string()).openapi({ description: 'Product IDs to set online.' }),
    RequestedBy: z
      .string()
      .openapi({ description: 'Consists of information about who requested changes.' }),
  })
  .openapi({ required: ['ProductIds', 'RequestedBy'] })
  .openapi('SetProductsOnlineRequest')

const SetupOrderpadRequestSchema = z
  .strictObject({
    phoneNumber: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Callback phone number' }),
    postCode: z.string().nullable().exactOptional().openapi({ description: 'Set up postcode' }),
    setupType: OrderpadSetupTypeSchema.exactOptional().openapi({
      description: 'Orderpad set up type',
    }),
  })
  .openapi({ required: [] })
  .openapi('SetupOrderpadRequest')

const SkipMenuEditorGatewayRequestSchema = z
  .object({
    query: z.string().exactOptional().openapi({ description: 'GraphQL statement' }),
    variables: z.object({}).exactOptional().openapi({ description: 'variables used in query' }),
  })
  .openapi({ description: 'GraphQL request', required: [] })
  .openapi('SkipMenuEditorGatewayRequest')

const SkipMenuEditorGatewayResponseSchema = z
  .object({
    data: z.object({}).exactOptional().openapi({ description: 'GraphQL data response' }),
    errors: z
      .array(z.object({}))
      .exactOptional()
      .openapi({ description: 'GraphQL errors response' }),
  })
  .openapi({ description: 'GraphQL response', required: [] })
  .openapi('SkipMenuEditorGatewayResponse')

const TakeOfflineRequestSchema = z
  .strictObject({
    comment: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Any additional information' }),
    tempOfflineType: z
      .enum(['TempOffline', 'ClosedToday'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'Identifier of the reason for taking the restaurant offline' }),
  })
  .openapi({ required: [] })
  .openapi('TakeOfflineRequest')

const TakeProductOffTheMenuCommandSchema = z
  .strictObject({
    createdBy: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Application which requested operation e.g. Orderpad, RestaurantApp',
      }),
    productIds: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'List of product Ids to be taken offline' }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Request date and time in ISO 8601 format' }),
  })
  .openapi({ required: [] })
  .openapi('TakeProductOffTheMenuCommand')

const Takeaway400ErrorResponseSchema = z
  .object({
    description: z.string().exactOptional().openapi({ description: 'A description of the error.' }),
    errorCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A value that helps identify this response back to logs, so we can easily find this specific fault.',
      }),
    validationErrors: z
      .record(
        z.string(),
        z
          .object({
            errors: z
              .array(z.string())
              .exactOptional()
              .openapi({ description: 'Error explanation.' }),
          })
          .openapi({ description: 'Field name that contains error.', required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Validation error messages for each field.' }),
  })
  .openapi({ description: 'A HTTP 400 error response', required: [] })
  .openapi('Takeaway400ErrorResponse')

const Takeaway4XXErrorResponseSchema = z
  .object({
    description: z.string().exactOptional().openapi({ description: 'A description of the error.' }),
    errorCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A value that helps identify this response back to logs, so we can easily find this specific fault.',
      }),
  })
  .openapi({ description: 'A HTTP 4xx error response', required: [] })
  .openapi('Takeaway4XXErrorResponse')

const Takeaway500ErrorResponseSchema = z
  .object({
    description: z.string().exactOptional().openapi({ description: 'A description of the error.' }),
    errorCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A value that helps identify this response back to logs, so we can easily find this specific fault.',
      }),
  })
  .openapi({ description: 'A HTTP 500 error response', required: [] })
  .openapi('Takeaway500ErrorResponse')

const TokenRequestSchema = z
  .object({
    client_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Only required if the client is not authenticating with the same authorisation server.',
      }),
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The authorisation code received from the authorisation server.' }),
    code_verifier: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'High-entropy cryptographic random string with a minimum length of 43 characters and a maximum length of 128 characters.',
      }),
    grant_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'OAuth grant type. Value MUST be set to `authorization_code`.' }),
    redirect_uri: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI to form the path for a redirect response.' }),
  })
  .openapi({
    description: 'The request object for retrieving an access token.',
    example: {
      client_id: 'example_clientid',
      code: 'D4DE0039-8193-48A1-BA2D-49E6F0C8ADFF',
      code_verifier: 'kPjhpIVnKGBq3YvnjLDBo65pi91YI4ReJoRV1WMryJa',
      grant_type: 'authorization_code',
      redirect_uri: 'example.com',
    },
    required: [],
  })
  .openapi('TokenRequest')

const TokenRequestErrorResponseSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Error code. Can be one of: `invalid_request`, `invalid_client`, `invalid_grant`, `unauthorized_client`, `unsupported_grant_type`, `invalid_scope`.',
      }),
  })
  .openapi({
    description: 'The error response object for token request endpoint.',
    example: { error: 'invalid_request' },
    required: [],
  })
  .openapi('TokenRequestErrorResponse')

const TokenRequestSuccessResponseSchema = z
  .object({
    access_token: z.string().exactOptional().openapi({ description: 'The JWT access token.' }),
  })
  .openapi({
    description: 'The success response object for token request endpoint.',
    example: {
      access_token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    },
    required: [],
  })
  .openapi('TokenRequestSuccessResponse')

const TwiMLResultSchema = z
  .object({
    data: z
      .string()
      .exactOptional()
      .openapi({
        description: 'set of special TwiML instructions defined by Twilio that will be executed',
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('TwiMLResult')

const TwilioDebuggingEventRequestSchema = z
  .object({
    accountSid: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique identifier of the account that generated the Debugger event',
        example: 'ACxxxxxxxxxxxxxxxxxxxxxxxx',
      }),
    level: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Severity of the Debugger event. Possible values are Error and Warning',
        example: 'Error',
      }),
    parentAccountSid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier of the Parent Account. This parameter only exists if the above account is a sub account',
        example: 'ACxxxxxxxxxxxxxxxxxxxxxxxx',
      }),
    payload: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'JSON data specific to the Debugging Event. More details - https://www.twilio.com/docs/usage/troubleshooting/debugging-event-webhooks#payload',
        example:
          '{resource_sid: CAxxxx, service_sid: SSxxxx, error_code: 13227 ,webhook: null, more_info: {  Msg : No International Permission. , ErrorCode : 13227 , LogLevel : WARN }}',
      }),
    payloadType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the payload', example: 'application/json' }),
    sid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier of the Debugger event', example: 'NOxxxxx' }),
    timestamp: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Time of occurrence of the Debugger event',
        example: '2020-01-01T23:28:54.000Z',
      }),
  })
  .openapi({
    description: 'Information about errors and warnings which could occur on Twilio account',
    required: [],
  })
  .openapi('TwilioDebuggingEventRequest')

const TwilioIncomingMessageCallbackRequestSchema = z
  .object({
    body: z
      .string()
      .exactOptional()
      .openapi({ description: 'The body of the text message being sent' }),
    from: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of the sender in E.164 format' }),
  })
  .openapi({ required: [] })
  .openapi('TwilioIncomingMessageCallbackRequest')

const TwilioIncomingVoiceCallbackRequestSchema = z
  .object({
    digits: z
      .string()
      .exactOptional()
      .openapi({ description: 'Any digits the caller has entered on their phone' }),
    from: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of the caller in E.164 format' }),
  })
  .openapi({ required: [] })
  .openapi('TwilioIncomingVoiceCallbackRequest')

const TwilioInteractionCallbackRequestSchema = z
  .object({
    inboundParticipantSid: z
      .string()
      .exactOptional()
      .openapi({ description: 'The SID of the inbound Participant resource' }),
    inboundResourceSid: z
      .string()
      .exactOptional()
      .openapi({ description: 'The SID of the inbound resource' }),
    inboundResourceStatus: z
      .string()
      .exactOptional()
      .openapi({ description: 'The inbound resource status of the Interaction' }),
    inboundResourceType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The inbound resource type' }),
    inboundResourceUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL of the Twilio inbound resource' }),
    interactionAccountSid: z
      .string()
      .exactOptional()
      .openapi({ description: 'The SID of the Account that created the Interaction resource' }),
    interactionData: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A JSON string that includes the message body of message interactions',
      }),
    interactionDateCreated: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date and time when the resource was created' }),
    interactionDateUpdated: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date and time when the resource was last updated' }),
    interactionServiceSid: z
      .string()
      .exactOptional()
      .openapi({ description: 'The SID of the parent Service resource' }),
    interactionSessionSid: z
      .string()
      .exactOptional()
      .openapi({ description: 'The SID of the parent Session resource' }),
    interactionSid: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique string to identify the Interaction resource' }),
    interactionType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Type of the Interaction' }),
    outboundParticipantSid: z
      .string()
      .exactOptional()
      .openapi({ description: 'The SID of the outbound Participant' }),
    outboundResourceSid: z
      .string()
      .exactOptional()
      .openapi({ description: 'The SID of the outbound resource' }),
    outboundResourceStatus: z
      .string()
      .exactOptional()
      .openapi({ description: 'The outbound resource status of the Interaction' }),
    outboundResourceType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The outbound resource type' }),
    outboundResourceUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL of the Twilio outbound resource' }),
  })
  .openapi({ required: [] })
  .openapi('TwilioInteractionCallbackRequest')

const TwilioProxyOutOfSessionCallbackRequestSchema = z
  .object({
    callSid: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique identifier for the call, generated by Twilio' }),
    from: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number the call or text message is from in E.164 format' }),
    sessionDateEnded: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The date and time in which the proxy session ended' }),
    sessionSid: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique identifier for the proxy session, generated by Twilio' }),
    smsSid: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique identifier for the sms, generated by Twilio' }),
  })
  .openapi({ required: [] })
  .openapi('TwilioProxyOutOfSessionCallbackRequest')

const UnauthorisedMarketingResponseSchema = MarketingErrorResponseSchema.and(
  z.strictObject({}).openapi({ description: '401 Unauthorised Returned' }),
)
  .openapi({
    example: {
      errors: [{ description: 'Unauthorised', errorCode: '401' }],
      faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
      message: 'Unauthorised',
    },
  })
  .openapi('UnauthorisedMarketingResponse')

const UpdateModifierSchema = z
  .object({ ModifierId: z.string().exactOptional(), Quantity: z.number().exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateModifier')

const UpdateModifierGroupSchema = z
  .object({
    ModifierGroupId: z.string().exactOptional(),
    Modifiers: z.array(UpdateModifierSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateModifierGroup')

const UpdateRemovedIngredientSchema = z
  .object({ Details: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateRemovedIngredient')

const UpdateAddedProductSchema = z
  .object({
    Date: z.string().exactOptional().openapi({ description: '`YYYY-MM-DDThh:mm:ssZ (UTC)`' }),
    ModifierGroups: z.array(UpdateModifierGroupSchema).nullable().exactOptional(),
    ProductId: z.string().exactOptional(),
    Quantity: z.number().exactOptional(),
    RemovedIngredients: z.array(UpdateRemovedIngredientSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateAddedProduct')

const UpdateDealGroupSchema = z
  .object({
    DealGroupId: z.string().exactOptional(),
    Products: z.array(UpdateAddedProductSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateDealGroup')

const UpdateAddedDealSchema = z
  .object({
    Date: z.string().exactOptional().openapi({ description: '`YYYY-MM-DDThh:mm:ssZ (UTC)`' }),
    DealGroups: z.array(UpdateDealGroupSchema).exactOptional(),
    ProductId: z.string().exactOptional(),
    Quantity: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateAddedDeal')

const UpdateRemovedSchema = z
  .object({
    BasketProductId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier for a product in the basket. This is needed to support complex products to make sure remove/update is applied to the correct product.',
      }),
    Date: z.string().exactOptional().openapi({ description: '`YYYY-MM-DDThh:mm:ssZ (UTC)`' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateRemoved')

const UpdateUpdatedDealSchema = z
  .object({
    BasketProductId: z.string().exactOptional(),
    Date: z.string().exactOptional().openapi({ description: '`YYYY-MM-DDThh:mm:ssZ (UTC)`' }),
    DealGroups: z.array(UpdateDealGroupSchema).exactOptional(),
    Quantity: z.object({}).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateUpdatedDeal')

const UpdateDealSchema = z
  .object({
    Added: z.array(UpdateAddedDealSchema).nullable().exactOptional(),
    Removed: z.array(UpdateRemovedSchema).nullable().exactOptional(),
    Updated: z.array(UpdateUpdatedDealSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateDeal')

const UpdateLocationSchema = z
  .object({
    GeoLocation: z
      .object({
        Date: z.string().exactOptional(),
        Value: z
          .object({ Latitude: z.number().exactOptional(), Longitude: z.number().exactOptional() })
          .openapi({ required: [] })
          .exactOptional()
          .openapi({
            description: 'Not available across platform yet, but applied for future proofing.',
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({ required: [] }),
    ZipCode: z
      .object({ Date: z.string().exactOptional(), Value: z.string().exactOptional() })
      .nullable()
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('UpdateLocation')

const UpdateMenuItemRequestSchema = z
  .object({
    Category: CategoryRequestSchema.exactOptional().openapi({ description: 'Category' }),
    Description: z.string().exactOptional().openapi({ description: 'Description' }),
    HasAllergens: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this item has allergens' }),
    Id: z.string().exactOptional().openapi({ description: 'Id' }),
    Labels: z.array(z.string()).exactOptional().openapi({ description: 'Labels' }),
    Name: z.string().exactOptional().openapi({ description: 'Name' }),
    OptionGroups: z
      .array(UpdateModifierGroupRequestSchema)
      .exactOptional()
      .openapi({ description: 'Option Groups' }),
    PreferenceGroups: z
      .array(UpdateModifierGroupRequestSchema)
      .exactOptional()
      .openapi({ description: 'Preference Groups' }),
    ReceiptNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The receipt or kitchen number' }),
    Variations: z
      .array(UpdateMenuItemVariationRequestSchema)
      .exactOptional()
      .openapi({ description: 'Variations' }),
  })
  .openapi({
    example: {
      Category: { Id: '10', Name: 'Lunches' },
      Description: 'Tasty burrito',
      HasAllergens: false,
      Id: '1',
      Labels: ['Vegetarian'],
      Name: 'Burrito',
      OptionGroups: [
        {
          Id: '14',
          Modifiers: [
            {
              Id: '5',
              Name: 'Plain',
              Variations: [
                {
                  AdditionPrice: 0,
                  ModifierGroupId: '2',
                  Selected: true,
                  VariationId: '3',
                  VariationName: 'Standard',
                },
              ],
            },
            {
              Id: '6',
              Name: 'Pilau',
              Variations: [
                {
                  AdditionPrice: 0,
                  ModifierGroupId: '2',
                  Selected: true,
                  VariationId: '3',
                  VariationName: 'Standard',
                },
              ],
            },
          ],
          Name: 'Rice',
        },
      ],
      PreferenceGroups: [
        {
          Id: '13',
          Modifiers: [
            {
              Id: '1',
              Name: 'Green',
              Variations: [
                {
                  AdditionPrice: 0.3,
                  ModifierGroupId: '2',
                  Selected: true,
                  VariationId: '3',
                  VariationName: 'Standard',
                },
              ],
            },
            {
              Id: '2',
              Name: 'Medium',
              Variations: [
                {
                  AdditionPrice: 0.3,
                  ModifierGroupId: '2',
                  Selected: true,
                  VariationId: '3',
                  VariationName: 'Standard',
                },
              ],
            },
            {
              Id: '3',
              Name: 'Spicy',
              Variations: [
                {
                  AdditionPrice: 0.3,
                  ModifierGroupId: '2',
                  Selected: true,
                  VariationId: '3',
                  VariationName: 'Standard',
                },
              ],
            },
          ],
          Name: 'Salsas',
        },
      ],
      ReceiptNumber: '123',
      Variations: [{ Id: '3', Name: 'Standard', Price: 6.99 }],
    },
    required: [],
  })
  .openapi('UpdateMenuItemRequest')

const UpdateOrderAddressRequestSchema = z
  .object({
    address: z
      .array(z.string())
      .openapi({
        description: "An array of strings containing lines of the customer's order address.",
      }),
    city: z
      .string()
      .openapi({
        description: "String value containing the city name of the customer's order address.",
      }),
    email: z.string().openapi({ description: "The customer's email address." }),
    geoPosition: OrderGeoPositionSchema.nullable().openapi({
      description:
        "Geoposition object containing latitude and longitude values for the customer's order address",
    }),
    name: z.string().exactOptional().openapi({ description: "The customer's name." }),
    phoneNumber: z.string().openapi({ description: "The customer's phone number." }),
    polygonName: z
      .string()
      .openapi({
        description:
          "String value containing the polygon name of customer's order address (in tenants with no polygon name, will be the same as postcode).",
      }),
    postCode: z
      .string()
      .openapi({
        description: "String value containing the postcode of the customer's order address.",
      }),
    serviceType: z
      .enum(['delivery', 'collection'])
      .exactOptional()
      .openapi({ description: 'Service Type associated with the order details.' }),
  })
  .openapi({
    description: 'The request object for setting the order address of a basket.',
    example: {
      address: ['123 Wye Avenue, Eaton'],
      city: 'Bristol',
      email: 'user@email.com',
      geoPosition: { latitude: 456.123, longitude: 123.456 },
      name: 'J.E.Hungerton',
      orderable: true,
      phoneNumber: '0123456789',
      polygonName: 'BS1 1AA',
      postCode: 'BS1 1AA',
      serviceType: 'delivery',
    },
    required: [
      'address',
      'city',
      'postCode',
      'orderable',
      'email',
      'phoneNumber',
      'geoPosition',
      'polygonName',
    ],
  })
  .openapi('UpdateOrderAddressRequest')

const UpdateOrderDetailsSchema = z
  .object({ Location: UpdateLocationSchema.nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateOrderDetails')

const UpdateOrderTimeRequestSchema = z
  .object({
    asap: z
      .boolean()
      .openapi({
        description: 'True if the user has selected as soon as possible on the order, else false',
      }),
    dateTime: z.string().openapi({ description: 'The order time to set for the basket.' }),
    menuId: z
      .string()
      .openapi({ description: 'The menu id that orderability of a basket is calculated against' }),
  })
  .openapi({
    description: 'The request object for setting the order time for a basket.',
    example: { asap: true, dateTime: '2020-02-05T16:26:30+0000', menuId: '12345' },
    required: ['dateTime', 'asap', 'menuId'],
  })
  .openapi('UpdateOrderTimeRequest')

const UpdatePasswordResetFlowResponseSchema = z
  .object({
    accessCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The One Time Access Code (OTAC).' }),
    expiry: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The expiry of the OTAC.', example: '2021-01-20T19:35:13.643Z' }),
  })
  .openapi({
    example: { accessCode: '8It2lEaJjG82nJtxO00Iab0CoF0=', expiry: '2021-01-20T19:35:13.643Z' },
    required: [],
  })
  .openapi('UpdatePasswordResetFlowResponse')

const UpdateUpdatedProductSchema = z
  .object({
    BasketProductId: z.string().exactOptional(),
    Date: z.string().exactOptional().openapi({ description: '`YYYY-MM-DDThh:mm:ssZ (UTC)`' }),
    ModifierGroups: z.array(UpdateModifierGroupSchema).nullable().exactOptional(),
    Quantity: z.object({}).exactOptional(),
    RemovedIngredients: z.array(UpdateRemovedIngredientSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateUpdatedProduct')

const UpdateProductSchema = z
  .object({
    Added: z.array(UpdateAddedProductSchema).nullable().exactOptional(),
    Removed: z.array(UpdateRemovedSchema).nullable().exactOptional(),
    Updated: z.array(UpdateUpdatedProductSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateProduct')

const UpdateQuantitySchema = z
  .object({
    Change: z
      .number()
      .exactOptional()
      .openapi({ description: 'Value to apply to existing quantity.' }),
    Total: z
      .number()
      .exactOptional()
      .openapi({ description: 'Value that replaces the current quantity.' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateQuantity')

const UpdateRequestSchema = z
  .object({
    BasketId: z.string().exactOptional(),
    Deal: UpdateDealSchema.nullable().exactOptional(),
    OrderDetails: UpdateOrderDetailsSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Information needed to allow an order to be placed on a basket.' }),
    Product: UpdateProductSchema.nullable().exactOptional(),
    SelectedServiceType: z
      .object({ Date: z.string().exactOptional(), Value: z.string().exactOptional() })
      .nullable()
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ description: 'The request object for updating a basket.', required: [] })
  .openapi('UpdateRequest')

const UserRoleSchema = z
  .enum(['System', 'Operations', 'Restaurant'])
  .openapi({
    description:
      '\n- `System` : Role for an automated process action.\n- `Operations` : Role for an operations user action.\n- `Restaurant` : Role for a restaurant owner/employee user action.',
  })
  .openapi('UserRole')

const ValidationErrorSchema = z
  .strictObject({
    attemptedValue: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The property value that caused the failure' }),
    customState: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Custom state associated with the failure' }),
    errorCode: z.string().exactOptional().openapi({ description: 'The error code' }),
    errorMessage: z.string().exactOptional().openapi({ description: 'The error message' }),
    formattedMessageArguments: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Custom formatted validator messages with placeholders' }),
    formattedMessagePlaceHolderValues: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'The values for placeholders in the formatted messages' }),
    propertyName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the property causing the failure' }),
    resourceName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The resource name used for building the message' }),
    severity: z
      .number()
      .exactOptional()
      .openapi({ description: 'Severity of a validation rule. Will always be 0 (Error).' }),
  })
  .openapi({
    example: {
      attemptedValue: null,
      customState: null,
      errorCode: 'NotEmptyValidator',
      errorMessage: 'TestProperty is empty',
      formattedMessageArguments: [],
      formattedMessagePlaceHolderValues: { PropertyName: 'User Role', PropertyValue: null },
      propertyName: 'TestProperty',
      resourceName: null,
      severity: 0,
    },
    required: [],
  })
  .openapi('ValidationError')

const ValiditySchema: z.ZodType<ValidityType> = z
  .lazy(() =>
    z
      .strictObject({
        CuisineIds: z
          .array(z.string())
          .nullable()
          .exactOptional()
          .openapi({ description: 'The cuisine ids the voucher is valid for' }),
        EndDate: z.iso
          .datetime({ offset: true })
          .nullable()
          .exactOptional()
          .openapi({ description: 'The end date of the voucher' }),
        MinimumSpend: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({ description: 'The minimum spend to use the voucher' }),
        OrderNumberValidity: z
          .xor([OrderNumberValiditySchema])
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The number of orders a customer has placed to satisfy the requirements of the voucher',
          }),
        PaymentOptionTypes: z
          .array(z.string())
          .nullable()
          .exactOptional()
          .openapi({ description: 'The payment options the voucher is restricted to' }),
        Platform: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'The order platform using the voucher' }),
        PostCode: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'The post code applicable to the order' }),
        RestaurantIds: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'A comma separate list of restaurant ids' }),
        RestrictedToConsumerStatus: z
          .xor([ConsumerStatusSchema])
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Whether the voucher is restricted to new customers, returning customers etc',
          }),
        ServiceType: z
          .xor([ServiceTypeSchema])
          .nullable()
          .exactOptional()
          .openapi({ description: 'The service type for the voucher (e.g. Delivery, collection)' }),
        StartDate: z.iso
          .datetime({ offset: true })
          .nullable()
          .exactOptional()
          .openapi({ description: 'The start date of the voucher' }),
        ValidFromHour: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Whether time the voucher is valid from' }),
        ValidOnDays: z
          .array(DayOfWeekSchema)
          .nullable()
          .exactOptional()
          .openapi({ description: 'The days of the week the voucher is valid on' }),
        ValidToHour: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Whether time the voucher is valid to' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('Validity')

const VariationReorderModifierSchema = z
  .strictObject({
    Id: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique identifier for the variation modifier.' }),
    Quantity: z
      .int()
      .exactOptional()
      .openapi({ description: 'How many of the modifier were previously added to the variation.' }),
  })
  .openapi({ title: 'VariationReorderModifier', required: [] })
  .openapi('VariationReorderModifier')

const VariationReorderModifierGroupSchema = z
  .strictObject({
    Id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier for a modifier group.' }),
    Modifiers: z
      .array(VariationReorderModifierSchema)
      .exactOptional()
      .openapi({
        description: 'A list of modifiers applied in this modifier group. 20 items maximum.',
      }),
  })
  .openapi({ title: 'VariationReorderModifierGroup', required: [] })
  .openapi('VariationReorderModifierGroup')

const VariationReorderVariationSchema = z
  .strictObject({
    Id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier for the variation.' }),
    ModifierGroups: z
      .array(VariationReorderModifierGroupSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of all the modifiers previously applied to the variation. 20 items maximum.',
      }),
    Quantity: z
      .int()
      .exactOptional()
      .openapi({ description: 'How many of the variation were previously ordered.' }),
  })
  .openapi({ title: 'VariationReorderVariation', required: [] })
  .openapi('VariationReorderVariation')

const VariationReorderDealGroupSchema = z
  .strictObject({
    Id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier for a deal group.' }),
    Variations: z
      .array(VariationReorderVariationSchema)
      .exactOptional()
      .openapi({ description: 'A list of variations in the deal group. 20 items maximum.' }),
  })
  .openapi({ title: 'VariationReorderDealGroup', required: [] })
  .openapi('VariationReorderDealGroup')

const VariationReorderDealSchema = z
  .strictObject({
    Attributes: z
      .strictObject({
        DealGroups: z
          .array(VariationReorderDealGroupSchema)
          .exactOptional()
          .openapi({
            description: 'A list of all the deal groups attached to a deal. 20 items maximum.',
          }),
        Quantity: z
          .int()
          .exactOptional()
          .openapi({
            description:
              'How many of the deal were previously ordered. When re-adding to basket this is the number that should be added.',
          }),
        Rank: z
          .int()
          .exactOptional()
          .openapi({
            description:
              'The position in the deal in the list. The data list is ordered by this ascending.',
          }),
      })
      .exactOptional()
      .openapi({ description: 'An object containing all the attributes of a Deal', required: [] }),
    Id: z.string().exactOptional().openapi({ description: 'The unique identifier for the deal.' }),
    Type: z
      .string()
      .exactOptional()
      .openapi({ description: "The type of the object. This will always be 'deal'." }),
  })
  .openapi({ title: 'VariationReorderDeal', required: [] })
  .openapi('VariationReorderDeal')

const VariationReorderRankedVariationSchema = z
  .strictObject({
    Attributes: z
      .strictObject({
        ModifierGroups: z
          .array(VariationReorderModifierGroupSchema)
          .exactOptional()
          .openapi({
            description:
              'A list of all the modifiers previously applied to the variation. 20 items maximum.',
          }),
        Quantity: z
          .int()
          .exactOptional()
          .openapi({
            description:
              'How many of the variation were previously ordered. When re-adding to basket, this is the number that should be added.',
          }),
        Rank: z
          .int()
          .exactOptional()
          .openapi({
            description:
              'The position in the variation in the array. The data array is ordered by this ascending.',
          }),
      })
      .exactOptional()
      .openapi({ description: 'An object containing all the attributes of a Deal', required: [] }),
    Id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier for the variation.' }),
    Type: z
      .string()
      .exactOptional()
      .openapi({ description: "The type of the object. This will always be 'variation'." }),
  })
  .openapi({ title: 'VariationReorderRankedVariation', required: [] })
  .openapi('VariationReorderRankedVariation')

const VoucherStatesSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2)])
  .openapi({ description: '', 'x-enumNames': ['Available', 'Locked', 'Consumed'] })
  .openapi('VoucherStates')

const VoucherLockSchema = z
  .strictObject({
    Consumed: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'The UTC date it was consumed' }),
    ConsumerStatus: z
      .xor([ConsumerStatusSchema])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The Customer Status (i.e. new customers, returning customers etc)',
      }),
    CuisinesIds: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'The number of orders' }),
    CustomerId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The Customer Id the voucher is locked to' }),
    DeliveryFee: z.number().exactOptional().openapi({ description: 'The delivery fee' }),
    DiscountApplied: z.number().exactOptional().openapi({ description: 'The Discount Applied' }),
    Locked: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'The UTC date it was locked' }),
    NumberOfOrders: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The number of orders' }),
    OrderAmount: z.number().exactOptional().openapi({ description: 'The order amount' }),
    OrderId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The Order Id the voucher is locked to' }),
    OrderPlacedDateWithUtcOffset: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'The order placed date' }),
    PaymentOptionType: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The payment option' }),
    Platform: z.string().nullable().exactOptional().openapi({ description: 'The order platform' }),
    PostCode: z.string().nullable().exactOptional().openapi({ description: 'The post code' }),
    RestaurantId: z.int32().exactOptional().openapi({ description: 'The restaurant id' }),
    ServiceType: z
      .xor([ServiceTypeSchema])
      .nullable()
      .exactOptional()
      .openapi({ description: 'The service type (i.e. Delivery, Collection)' }),
    State: VoucherStatesSchema.exactOptional().openapi({ description: 'The current state' }),
    VoucherId: z.int32().exactOptional().openapi({ description: 'The voucher id' }),
  })
  .openapi({ required: [] })
  .openapi('VoucherLock')

const VoucherSchema = z
  .strictObject({
    Code: z.string().nullable().exactOptional().openapi({ description: 'The voucher code' }),
    CodeType: CodeTypeSchema.exactOptional().openapi({ description: 'The type of voucher code' }),
    Created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The created time (UTC) of the voucher' }),
    CreatedBy: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The creator of the voucher' }),
    Id: z.int32().exactOptional().openapi({ description: 'The voucher id' }),
    Lock: z
      .xor([VoucherLockSchema])
      .nullable()
      .exactOptional()
      .openapi({ description: 'If the voucher is locked and what it is locked to' }),
    PaymentOptionTypes: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'The payment options the voucher is restricted to' }),
  })
  .openapi({ required: [] })
  .openapi('Voucher')

const VoucherGroupSchema = z
  .strictObject({
    Archived: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the voucher group is flagged as archived' }),
    Created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The created time (UTC) of the voucher group' }),
    CreatedBy: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The creator of the voucher group' }),
    Discount: z
      .xor([DiscountSchema])
      .nullable()
      .exactOptional()
      .openapi({ description: 'The details of the discount (amount / type etc)' }),
    GroupType: GroupTypeSchema.exactOptional().openapi({
      description: 'The type of the voucher group (e.g. Dynamically Created Single Use)',
    }),
    Hidden: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the voucher group is flagged as hidden' }),
    Id: z.int32().exactOptional().openapi({ description: 'The Id of the voucher group' }),
    Name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The name of the voucher group' }),
    Source: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The source system creating the voucher group' }),
    StaticCode: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The static code of the voucher group (will be normalised as part of the creation)',
      }),
    Updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The updated time (UTC) of the voucher group' }),
    Validity: z
      .xor([ValiditySchema])
      .nullable()
      .exactOptional()
      .openapi({ description: 'The parameters that determine the validity of the voucher group' }),
  })
  .openapi({ required: [] })
  .openapi('VoucherGroup')

const WellKnownConfigurationResponseSchema = z
  .object({
    authorization_endpoint: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL of the authorisation endpoint.' }),
    issuer: z.string().exactOptional().openapi({ description: 'URL used to identify the issuer.' }),
    jwks_uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL of the JSON Web Key Set. This contains the signing keys used to validate signatures.',
      }),
    response_types_supported: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description: 'List containing the OAuth 2.0 `response_type` values which are supported.',
      }),
    scopes_supported: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'List containing the scope values that the server supports.' }),
    token_endpoint: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL of the token endpoint.' }),
    token_endpoint_auth_methods_supported: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'List containing the Client Authentication methods supported by this Token Endpoint.',
      }),
    userinfo_endpoint: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL of the user info endpoint.' }),
  })
  .openapi({
    description: 'The success response object for the well-known endpoint.',
    example: {
      authorization_endpoint: 'http://uk-tokenweb.cwa.je-labs.com/applications/tokenweb/authorize',
      issuer: 'http://uk-tokenweb.cwa.je-labs.com',
      jwks_uri: 'http://uk-tokenweb.cwa.je-labs.com/.well-known/jwks.json',
      response_types_supported: ['code'],
      scopes_supported: [''],
      token_endpoint: 'http://uk-tokenweb.cwa.je-labs.com/applications/tokenweb/token',
      token_endpoint_auth_methods_supported: ['client_secret_basic'],
      userinfo_endpoint: 'http://uk-tokenweb.cwa.je-labs.com/userinfo',
    },
    required: [],
  })
  .openapi('WellKnownConfigurationResponse')

const ZoneProfileSchema = z
  .object({
    averageAssignableJobLoad: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          "The burden over the couriers in a delivery zone. The average assignable job load is calculated by the sum of all jobs assigned to the couriers divided by the delivery zone's total assignable courier count.",
        example: 0.7,
      }),
    bender: z
      .object({
        enabled: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Bender Enabled/Disabled status' }),
      })
      .exactOptional()
      .openapi({ description: 'Bender On/Off object', required: [] }),
    ema: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'The simple moving average is the usage for a given delivery zone, which is calculated by using the sum of all on-shift utilisation ( percentage of time a courier spends working on orders during their shift ) at the time, divided by the number of time periods gathered from all data points. Differently from simple moving average, exponential moving average also represents the usage however its equation places a greater weight on the most recent data points.',
        example: 70,
      }),
    flexStateType: BenderFlexStateTypeSchema.exactOptional().openapi({
      description:
        'The flex state type changes according to the exponential moving average and is used as a reference to bring more couriers to suffice the demand in a given delivery zone.',
    }),
    zoneId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Zone profile delivery zone id.',
        example: '53c3afb5-fcs5-4941-be6d-2179f812sc8d',
      }),
  })
  .openapi({ description: 'The zone profile object for a given delivery zone.', required: [] })
  .openapi('ZoneProfile')

const OrderAddressSchema = z
  .object({
    City: z.string().exactOptional(),
    Geolocation: z
      .object({ Latitude: z.float64().exactOptional(), Longitude: z.float64().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    Lines: z.array(z.string()).exactOptional(),
    PostalCode: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrderAddress')

const OrderItem2Schema: z.ZodType<OrderItem2Type> = z
  .lazy(() =>
    z.array(
      z
        .object({
          Items: OrderItem2Schema.exactOptional(),
          Name: z.string().exactOptional(),
          Quantity: z.number().exactOptional(),
          Reference: z.string().exactOptional(),
          TotalPrice: z.number().exactOptional(),
          UnitPrice: z.number().exactOptional(),
        })
        .openapi({ required: [] }),
    ),
  )
  .openapi('OrderItem2')

const OrderItemRestrictionSchema = z
  .object({
    Type: z
      .literal('Alcohol')
      .exactOptional()
      .openapi({
        description:
          "The type of restricted item contained in the order. The only supported value is 'Alcohol'.",
      }),
  })
  .openapi({ required: [] })
  .openapi('OrderItemRestriction')

const AcceptanceRequestedSchema = z
  .object({
    Currency: z.string().exactOptional(),
    Customer: z
      .object({
        Id: z.number().nullable().exactOptional(),
        Name: z.string().exactOptional(),
        PreviousRestaurantOrderCount: z
          .number()
          .exactOptional()
          .openapi({
            description: "The customer's previous total number of orders made to this restaurant",
          }),
        PreviousTotalOrderCount: z
          .number()
          .exactOptional()
          .openapi({
            description: "The customer's previous total number of orders made to all restaurants",
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    CustomerNotes: z.record(z.string(), z.string()).exactOptional(),
    FriendlyOrderReference: z.string().exactOptional(),
    Fulfilment: z
      .object({
        Address: OrderAddressSchema.exactOptional(),
        CustomerDueAsap: z.boolean().exactOptional(),
        CustomerDueDate: z.iso.datetime({ offset: true }).exactOptional(),
        Method: z.enum(['Delivery', 'Collection']).exactOptional(),
        PhoneMaskingCode: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Code to use when calling customer phone masking number about this order. null if phone masking not enabled',
          }),
        PhoneNumber: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Customer phone number (will be phone masking number if enabled)',
          }),
        PreparationTime: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    IsTest: z.boolean().exactOptional(),
    Items: OrderItem2Schema.exactOptional(),
    OrderId: z.string().exactOptional(),
    Payment: z
      .object({
        Lines: z
          .array(
            z
              .object({
                Paid: z.boolean().exactOptional(),
                Type: z.string().exactOptional(),
                Value: z.number().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    PlacedDate: z.iso.datetime({ offset: true }).exactOptional(),
    PriceBreakdown: z
      .object({
        Discount: z.number().nullable().exactOptional(),
        Fees: z
          .object({
            Delivery: z.number().nullable().exactOptional(),
            Other: z.number().nullable().exactOptional(),
            ServiceCharge: z.number().nullable().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        Items: z.number().nullable().exactOptional(),
        Taxes: z.number().nullable().exactOptional(),
        Tips: z.number().nullable().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    Restaurant: z
      .object({
        Address: OrderAddressSchema.exactOptional(),
        Id: z.string().exactOptional().openapi({ description: 'Restaurant Id' }),
        Name: z.string().exactOptional(),
        PhoneNumber: z.string().exactOptional(),
        Reference: z.string().exactOptional(),
        TimeZone: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    Restrictions: z
      .array(OrderItemRestrictionSchema)
      .exactOptional()
      .openapi({
        description: 'This is a list of types of restricted items contained in the order.',
      }),
    TotalPrice: z.number().exactOptional(),
  })
  .openapi({
    example: {
      Currency: 'GBP',
      Customer: {
        Id: 12345,
        Name: 'Bruce Wayne',
        PreviousRestaurantOrderCount: 5,
        PreviousTotalOrderCount: 83,
      },
      CustomerNotes: { noteForDelivery: 'delivery note', noteForRestaurant: 'restaurant note' },
      FriendlyOrderReference: 'REF0001',
      Fulfilment: {
        Address: {
          City: 'London',
          Geolocation: { Latitude: 51.51641, Longitude: -0.103198 },
          Lines: ['Fleet Place House', 'Fleet Pl'],
          PostalCode: 'EC4M 7RD',
        },
        CustomerDueAsap: false,
        CustomerDueDate: '2018-03-10T14:45:28Z',
        Method: 'Delivery',
        PhoneMaskingCode: '9999999',
        PhoneNumber: '+441234567890',
        PreparationTime: '0:23:32',
      },
      IsTest: true,
      Items: [
        {
          Items: [
            {
              Items: [],
              Name: 'Fries',
              Quantity: 1,
              Reference: '9876',
              Synonym: 'Regular',
              UnitPrice: 0,
            },
            {
              Items: [],
              Name: 'Pepsi',
              Quantity: 2,
              Reference: '6789',
              Synonym: '330ml',
              UnitPrice: 0,
            },
          ],
          Name: 'Chicken Box Meal',
          Quantity: 2,
          Reference: '1234',
          Synonym: '',
          TotalPrice: 10,
          UnitPrice: 5,
        },
        {
          Items: [],
          Name: 'Milkshake',
          Quantity: 1,
          Reference: '4321',
          Synonym: '',
          TotalPrice: 7.25,
          UnitPrice: 7.25,
        },
      ],
      OrderId: 'ABCD654321',
      Payment: {
        Lines: [
          { Paid: false, Type: 'AccountCredit', Value: 19.25 },
          { Paid: true, Type: 'CreditCard', Value: 19.25 },
        ],
      },
      PlacedDate: '2018-03-10T14:45:28Z',
      PriceBreakdown: {
        Discount: 0,
        Fees: { Delivery: 1, Other: 0, ServiceCharge: 0.5 },
        Items: 17.25,
        Taxes: 3.85,
        Tips: 0.5,
      },
      Restaurant: {
        Address: {
          City: 'London',
          Geolocation: { Latitude: 51.4484, Longitude: -0.1504 },
          Lines: ['Oldridge Road'],
          PostalCode: 'SW12 8PW',
        },
        Id: 'I12345',
        Name: 'Just Eat Test Restaurant',
        PhoneNumber: '+441200000000',
        Refererence: 'R99999',
        TimeZone: 'Australia/Sydney (IANA format)',
      },
      Restrictions: [{ Type: 'Alcohol' }],
      TotalPrice: 19.25,
    },
    required: [],
  })
  .openapi('AcceptanceRequested')

const Address2Schema = z
  .object({
    AddressLines: z.array(z.string()).exactOptional(),
    City: z.string().exactOptional(),
    Postcode: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Address2')

const LocationV2Schema = z
  .object({ Latitude: z.float64(), Longitude: z.float64() })
  .openapi({
    example: { Latitude: 51.51641, Longitude: -0.103198 },
    required: ['Latitude', 'Longitude'],
  })
  .openapi('LocationV2')

const AddressV2Schema = z
  .object({
    City: z.string(),
    GeoLocation: LocationV2Schema.exactOptional(),
    Lines: z.array(z.string()),
    PostalCode: z.string(),
  })
  .openapi({ required: ['Lines', 'City', 'PostalCode', 'Geolocation'] })
  .openapi('AddressV2')

const ApplicationStateSchema = z
  .enum([
    'OpenApplication',
    'ManualInterventionRequired',
    'ReadyForInitialReview',
    'InitialReviewRejected',
    'ReadyForFinalReview',
    'FinalReviewRejected',
    'Approved',
  ])
  .openapi({ description: 'The application state i.e. Open, Approved etc.' })
  .openapi('ApplicationState')

const ApplicationSubmitResponseSchema = z
  .object({
    applicationState: ApplicationStateSchema.exactOptional().openapi({
      description: 'The current application state i.e. Open, Approved etc.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ApplicationSubmitResponse')

const AssessmentStatusTypesSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
  .openapi({
    description: 'Denotes the type of segmentation status that restaurant can have',
    example: 1,
    'x-enumNames': ['Unknown', 'LocalLegend', 'Gold', 'Silver', 'New'],
  })
  .openapi('AssessmentStatusTypes')

const AttemptedDeliveryCreatedSchema = z
  .object({
    OrderId: z.string().exactOptional().openapi({ description: 'The id of the order' }),
    Reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reason for creating the attempted delivery' }),
    RestaurantId: z.number().exactOptional().openapi({ description: 'The id of the restaurant' }),
    Tenant: z
      .string()
      .exactOptional()
      .openapi({ description: 'The tenant associated with the order' }),
  })
  .openapi({
    example: {
      OrderId: 'wiej234idf09i29jijgf4',
      Reason: 'Customer did not answer the door',
      RestaurantId: 110230,
      Tenant: 'uk',
    },
    required: [],
  })
  .openapi('AttemptedDeliveryCreated')

const AttemptedDeliveryResolvedSchema = z
  .object({
    OrderId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the order for which an attempted delivery query has been resolved',
      }),
    Resolution: z
      .object({
        Cancellation: z
          .object({
            Reason: z
              .enum([
                'new_address_not_within_area',
                'unable_to_reprepare',
                'driver_not_available',
                'area_unsafe',
                'customer_doesnt_want_anymore',
              ])
              .exactOptional()
              .openapi({ description: 'The reason for cancelling the order' }),
          })
          .exactOptional()
          .openapi({
            description:
              'The cancellation properties. Only required if the order has been cancelled, otherwise null',
            required: [],
          }),
        Redelivery: z
          .object({
            CustomerTimeZone: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The IANA TZ database name of the time zone the customer that placed the order is in',
              }),
            NewDueDate: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description: 'Updated due date for delivery of the order in ISO 8601 format',
              }),
            Status: z
              .enum(['driver_at_address', 'repreparing'])
              .exactOptional()
              .openapi({ description: 'The current status of the order' }),
          })
          .exactOptional()
          .openapi({
            description:
              'The redelivery properties. Only required if the order is being redelivered, otherwise null',
            required: [],
          }),
        Type: z
          .enum(['order_cancelled', 'redeliver_order'])
          .exactOptional()
          .openapi({
            description: 'The type of resolution to the query, either cancellation or redelivery',
          }),
      })
      .exactOptional()
      .openapi({ description: 'Details of the resolution to the query', required: [] }),
    Tenant: z
      .enum(['uk', 'dk', 'es', 'ie', 'it', 'no', 'au', 'nz'])
      .exactOptional()
      .openapi({ description: 'The tenant of the restaurant the order was placed at' }),
  })
  .openapi({
    example: {
      OrderId: 'wiej234idf09i29jijgf4',
      Resolution: {
        Redelivery: {
          CustomerTimeZone: 'Europe/London',
          NewDueDate: '2018-03-10T14:45:28Z',
          Status: 'repreparing',
        },
        Type: 'redeliver_order',
      },
      Tenant: 'uk',
    },
    required: [],
  })
  .openapi('AttemptedDeliveryResolved')

const AttemptedDeliveryResponseReceivedSchema = z
  .object({
    Notes: z.string().exactOptional(),
    OrderId: z.string().exactOptional(),
    Tenant: z.string().exactOptional(),
    Update: z.string().exactOptional(),
  })
  .openapi({
    example: {
      Notes: 'Please press 123 on the door',
      OrderId: 'wiej234idf09i29jijgf4',
      Tenant: 'uk',
      Update: 'Please redeliver',
    },
    required: [],
  })
  .openapi('AttemptedDeliveryResponseReceived')

const AvailabilityResultSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Error description when something went wrong or `unprocessedPartnerProductIds` any',
      }),
    processedPartnerProductIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Array of partner product identifiers that have been successfully processed',
      }),
    unprocessedPartnerProductIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Array of partner product identifiers that have not been processed',
      }),
  })
  .openapi({ required: [] })
  .openapi('AvailabilityResult')

const AvailabilityResultErrorSchema = z
  .object({
    message: z.string().exactOptional().openapi({ description: 'Short error description' }),
  })
  .openapi({ required: [] })
  .openapi('AvailabilityResultError')

const BinaryObjectSchema = z
  .file()
  .openapi({ type: 'string', format: 'binary' })
  .openapi('BinaryObject')

const LocationSchema = z
  .object({
    Accuracy: z
      .float64()
      .exactOptional()
      .openapi({ description: "This should represent the accuracy of driver's location." }),
    Heading: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'This should represent the degree of heading direction, for example, 0 is north, 90 is east.',
      }),
    Latitude: z
      .float64()
      .openapi({ description: "This should represent the latitude of the driver's location." }),
    Longitude: z
      .float64()
      .openapi({ description: "This should represent the longitude of the driver's location." }),
    Speed: z
      .float64()
      .exactOptional()
      .openapi({ description: 'This should represent the travel speed of the driver.' }),
  })
  .openapi({
    description: 'GeoLocation object containing latitude and longitude values.',
    example: {
      Accuracy: 12.814,
      Heading: 357.10382,
      Latitude: 51.51641,
      Longitude: -0.103198,
      Speed: 8.68,
    },
    required: ['Latitude', 'Longitude'],
  })
  .openapi('Location')

const BulkDeliveryDetailsSchema = z
  .object({
    EtaAtDeliveryAddress: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "This should represent the delivery partner's best guess at when the driver will arrive at the delivery address.",
        example: '2020-12-25T16:45:28.7537228+00:00',
      }),
    EtaAtRestaurant: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "This should represent the delivery partner's best guess at when the driver will arrive at the restaurant.",
        example: '2020-12-25T16:30:28.7537228+00:00',
      }),
    Location: LocationSchema.exactOptional(),
    OrderId: z.string().exactOptional().openapi({ description: 'Just Eat order identifier' }),
    TimeStampWithUtcOffset: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'This should represent the bulk delivery updated timestamp.' }),
  })
  .openapi({ required: [] })
  .openapi('BulkDeliveryDetails')

const BulkDeliveryDetailsListSchema = z
  .array(BulkDeliveryDetailsSchema)
  .openapi('BulkDeliveryDetailsList')

const CampaignIdSchema = z
  .object({ campaignId: z.string().exactOptional().openapi({ description: 'Id of the campaign' }) })
  .openapi({ required: [] })
  .openapi('CampaignId')

const ConnectorderSchema = z
  .object({
    BasketInfo: z
      .object({
        BasketId: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Unique Basket Id for the Order.',
            example: 'ABCb8DzdnUy7G481b0JN5g',
          }),
        DeliveryCharge: z
          .float64()
          .exactOptional()
          .openapi({ description: 'Amount of cost that comes from delivery.', example: 5 }),
        Discount: z
          .float64()
          .exactOptional()
          .openapi({
            description: 'The discount amount, used in conjunction with `DiscountType`.',
            example: 4.78,
          }),
        Discounts: z
          .array(
            z
              .object({
                Discount: z
                  .number()
                  .exactOptional()
                  .openapi({
                    description: 'The discount amount, used in conjunction with `DiscountType`.',
                    example: 10,
                  }),
                DiscountType: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The type of discount, e.g. a percentage or the order or fixed amount.',
                    example: 'Percent',
                  }),
                Id: z
                  .number()
                  .exactOptional()
                  .openapi({ description: 'Basket item id.', example: 21950 }),
                QualifyingValue: z
                  .float64()
                  .exactOptional()
                  .openapi({
                    description:
                      'The minimum order amount in order for this discount to be applicable.',
                    example: 4.78,
                  }),
              })
              .openapi({ description: 'Discount data', required: [] }),
          )
          .exactOptional()
          .openapi({ description: 'Any Discounts applied to the Order.' }),
        GroupedBasketItems: z
          .array(
            z
              .object({
                BasketItem: z
                  .object({
                    CombinedPrice: z
                      .float64()
                      .exactOptional()
                      .openapi({
                        description: 'Unit Price plus individual Meal Part item cost.',
                        example: 3.58,
                      }),
                    Discounts: z
                      .array(
                        z
                          .object({
                            Amount: z
                              .float64()
                              .exactOptional()
                              .openapi({
                                description: 'Amount of the discount applied',
                                example: 4.5,
                              }),
                            DiscountType: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: 'Type of the discount applied',
                                example: 'Percent',
                              }),
                          })
                          .openapi({ description: 'Discount data', required: [] }),
                      )
                      .exactOptional()
                      .openapi({ description: 'Any discounts applied to this specific item.' }),
                    MealParts: z
                      .array(
                        z
                          .object({
                            GroupId: z
                              .number()
                              .exactOptional()
                              .openapi({ description: 'The group Id.', example: 1 }),
                            MealPartId: z
                              .number()
                              .exactOptional()
                              .openapi({ description: 'The meal part Id.', example: 45822750 }),
                            Name: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: 'The name of the meal part.',
                                example: 'Any Sides?',
                              }),
                            OptionalAccessories: z
                              .array(
                                z
                                  .object({
                                    Name: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description: 'The name of the accessory.',
                                        example: 'Add Bacon',
                                      }),
                                    OptionalAccessoryId: z
                                      .number()
                                      .exactOptional()
                                      .openapi({
                                        description: 'The accessory Id.',
                                        example: 56168,
                                      }),
                                    Quantity: z
                                      .number()
                                      .exactOptional()
                                      .openapi({
                                        description: 'The quantity of the accessory.',
                                        example: 1,
                                      }),
                                    UnitPrice: z
                                      .float64()
                                      .exactOptional()
                                      .openapi({
                                        description: 'The unit price of the accessory.',
                                        example: 0.5,
                                      }),
                                  })
                                  .openapi({ description: 'Optional accessory', required: [] }),
                              )
                              .exactOptional()
                              .openapi({ description: 'Optional accessories' }),
                            RequiredAccessories: z
                              .array(
                                z
                                  .object({
                                    GroupId: z
                                      .number()
                                      .exactOptional()
                                      .openapi({
                                        description: 'The group Id of the accessory.',
                                        example: 3,
                                      }),
                                    Name: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description: 'The name of the accessory.',
                                        example: 'Coca-Cola Original Taste',
                                      }),
                                    RequiredAccessoryId: z
                                      .number()
                                      .exactOptional()
                                      .openapi({
                                        description: 'The accessory Id.',
                                        example: 225025,
                                      }),
                                    UnitPrice: z
                                      .float64()
                                      .exactOptional()
                                      .openapi({
                                        description: 'The unit price of the accessory.',
                                        example: 0.16,
                                      }),
                                  })
                                  .openapi({ description: 'Required accessory', required: [] }),
                              )
                              .exactOptional()
                              .openapi({ description: 'Required accessories' }),
                            Synonym: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'The synonym of the meal part.' }),
                          })
                          .openapi({ description: 'Meal part data', required: [] }),
                      )
                      .exactOptional()
                      .openapi({ description: 'Represents sub-parts of a meal.' }),
                    MenuCardNumber: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Menu card number.', example: '1' }),
                    MultiBuyDiscounts: z
                      .array(
                        z
                          .object({
                            Amount: z
                              .float64()
                              .exactOptional()
                              .openapi({
                                description: 'Amount of the discount applied',
                                example: 4.5,
                              }),
                            DiscountType: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: 'Type of the discount applied',
                                example: 'Percent',
                              }),
                            OrderItemId: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'Id of the Order item.' }),
                            ProductTypeId: z
                              .number()
                              .exactOptional()
                              .openapi({
                                description: 'The Id of the product type the discount applies to.',
                              }),
                          })
                          .openapi({ description: 'Multi-purchase discount data', required: [] }),
                      )
                      .exactOptional()
                      .openapi({
                        description: 'Any multi-purchase discounts applied to this item.',
                      }),
                    Name: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          'The Item name, e.g. Chicken Tikka Masala or Family Meal Deal 3.',
                        example: 'Mini Fillet Burger',
                      }),
                    OptionalAccessories: z
                      .array(
                        z
                          .object({
                            Name: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: 'The name of the accessory.',
                                example: 'Add Bacon',
                              }),
                            OptionalAccessoryId: z
                              .number()
                              .exactOptional()
                              .openapi({ description: 'The accessory Id.', example: 56168 }),
                            Quantity: z
                              .number()
                              .exactOptional()
                              .openapi({
                                description: 'The quantity of the accessory.',
                                example: 1,
                              }),
                            UnitPrice: z
                              .float64()
                              .exactOptional()
                              .openapi({
                                description: 'The unit price of the accessory.',
                                example: 0.5,
                              }),
                          })
                          .openapi({ description: 'Optional accessory', required: [] }),
                      )
                      .exactOptional()
                      .openapi({
                        description:
                          'An option item added to the Basket Item, this may be options such as Garlic Bread or a bottle of Coke.',
                      }),
                    ProductId: z
                      .number()
                      .exactOptional()
                      .openapi({ description: 'Id of the Product.', example: 45858074 }),
                    ProductTypeId: z
                      .number()
                      .exactOptional()
                      .openapi({ description: 'Id of the Product.', example: 428 }),
                    RequiredAccessories: z
                      .array(
                        z
                          .object({
                            GroupId: z
                              .number()
                              .exactOptional()
                              .openapi({
                                description: 'The group Id of the accessory.',
                                example: 3,
                              }),
                            Name: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: 'The name of the accessory.',
                                example: 'Large Meal',
                              }),
                            RequiredAccessoryId: z
                              .number()
                              .exactOptional()
                              .openapi({ description: 'The accessory Id.', example: 225025 }),
                            UnitPrice: z
                              .float64()
                              .exactOptional()
                              .openapi({
                                description: 'The unit price of the accessory.',
                                example: 0.1,
                              }),
                          })
                          .openapi({ description: 'Required accessory', required: [] }),
                      )
                      .exactOptional()
                      .openapi({
                        description:
                          'Items required as part of the Item, for example, Pizza base sauce.',
                      }),
                    Synonym: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Legacy - ignore.' }),
                    UnitPrice: z
                      .float64()
                      .exactOptional()
                      .openapi({ description: 'The price of the item.', example: 1.79 }),
                  })
                  .exactOptional()
                  .openapi({ description: 'An item in the Basket.', required: [] }),
                CombinedPrice: z
                  .float64()
                  .exactOptional()
                  .openapi({
                    description: 'The total price of the Basket Item (including discounts).',
                    example: 3.58,
                  }),
                MenuCardNumber: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Menu card number.', example: '1' }),
                OrderSubId: z
                  .number()
                  .exactOptional()
                  .openapi({ description: 'Order `SubId`', example: 0 }),
                Quantity: z
                  .number()
                  .exactOptional()
                  .openapi({ description: 'The quantity of Basket Items requested.', example: 2 }),
              })
              .openapi({ description: 'An item in the Basket.', required: [] }),
          )
          .exactOptional()
          .openapi({ description: 'Grouped basket items' }),
        MenuId: z
          .number()
          .exactOptional()
          .openapi({ description: "Id of the Restaurant's menu.", example: 777890 }),
        MultiBuyDiscount: z
          .float64()
          .exactOptional()
          .openapi({ description: 'MultiBuy discount.', example: 0 }),
        SubTotal: z
          .float64()
          .exactOptional()
          .openapi({
            description: 'The Basket total cost, excluding any discounts.',
            example: 47.75,
          }),
        ToSpend: z
          .float64()
          .exactOptional()
          .openapi({ description: 'Amount to spend.', example: 0 }),
        Total: z
          .float64()
          .exactOptional()
          .openapi({ description: 'Total price of the Order.', example: 47.97 }),
      })
      .exactOptional()
      .openapi({ description: 'Basket data', required: [] }),
    CustomerInfo: z
      .object({
        Address: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Customer Address. Note that Address is comma delimited.',
            example: 'Fleet Place House, 2 Fleet Place, London',
          }),
        City: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The name of the city where the Customer is located.',
            example: 'London',
          }),
        DisplayPhoneNumber: z
          .string()
          .exactOptional()
          .openapi({
            description: "The customer's masked phone number.",
            example: '(01) 872 7863',
          }),
        Email: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Email address for the Customer.',
            example: 'contact@just-eat.com',
          }),
        Id: z
          .string()
          .exactOptional()
          .openapi({ description: 'The JUST EAT Customer Id.', example: '123456' }),
        Latitude: z
          .float64()
          .exactOptional()
          .openapi({
            description: 'Customer address latitude. Will be 0 if not provided.',
            example: 51.50015,
          }),
        LocationAccuracyDescription: z
          .string()
          .exactOptional()
          .openapi({ description: 'Location accuracy description', example: 'ROOFTOP' }),
        LocationAccuracyInMeters: z
          .float64()
          .exactOptional()
          .openapi({ description: 'Accuracy of the location data in meters.', example: 0 }),
        LocationSource: z
          .string()
          .exactOptional()
          .openapi({ description: 'Provider of the location data.', example: 'GeodataGeocoder' }),
        Longitude: z
          .float64()
          .exactOptional()
          .openapi({
            description: 'Customer address longitude. Will be 0 if not provided.',
            example: -0.12624,
          }),
        Name: z
          .string()
          .exactOptional()
          .openapi({ description: 'The name of the Customer.', example: 'Just Eat' }),
        PhoneMaskingCode: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Code to use when calling customer phone masked number (`DisplayPhoneNumber`) about this order. Null if phone masking not enabled',
            example: '444333222',
          }),
        PhoneNumber: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "The customer's unmasked phone number. Please don't expose this to drivers, instead use this number to provide your own phone masking number or use the JustEat masked number `DisplayPhoneNumber` below",
            example: '018727863',
          }),
        Postcode: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The post code where Customer is located.',
            example: 'EC4M 7RF',
          }),
        PreviousRestuarantOrderCount: z
          .number()
          .exactOptional()
          .openapi({
            description:
              'The number of Orders the Customer has placed at this Restaurant via JUST EAT',
          }),
        TimeZone: z
          .string()
          .exactOptional()
          .openapi({
            description: "Customer timezone, e.g. 'Central European Standard Time'.",
            example: 'GMT Standard Time',
          }),
      })
      .exactOptional()
      .openapi({ description: 'Customer data', required: [] }),
    CustomerOrderId: z
      .number()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'This is a deprecated customer-facing ID that we maintain to support existing implementations.',
        example: 348322088,
      }),
    FriendlyOrderReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The customer facing identifier for the order, which should be used in any UI or receipts to identify the order to the customer, driver or restaurant. This identifier is not guaranteed to be globally unique.',
        example: '348322088',
      }),
    Id: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'The unique identifier for an order within the country. You can provide this ID whenever sending requests related to the order. Note that further messages from Just Eat relating to this order may not use this same identifier, use `OrderId` for a more consistent identifier.',
        example: '348322088',
      }),
    IsAMiniFistPumpOrder: z
      .boolean()
      .exactOptional()
      .openapi({ deprecated: true, description: 'Legacy Promotion - Ignore.' }),
    Order: z
      .object({
        DueDate: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ deprecated: true, description: 'Ignore - use `DueDateWithUtcOffset`.' }),
        DueDateWithUtcOffset: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'The DateTime when the Customer has been told they will receive the Order.',
          }),
        InitialDueDate: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ deprecated: true, description: 'Ignore - use `IntialDueDateWithUtcOffset`.' }),
        InitialDueDateWithUtcOffset: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'When the Customer was originally told the order would be delivered (prior to Restaurant adjustment)',
          }),
        NoteToRestaurant: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Notes from the customer about their order. In addition to notes for the restaurant, this field can also delivery instructions - and should be displayed to the delivery driver.',
            example: 'Contact-free delivery',
          }),
        PickupNoticePeriod: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Desired minimum amount of notice needed before the driver arrives to pickup the order at the restaurant. This is to allow restaurant enough time to prepare the order. If less notice is given the driver may have to wait for the order to be prepared. Field is in the format "hh:mm:ss"',
            example: '00:10:00',
          }),
        PlacedDate: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Date Customer placed the order. Note that JUST EAT accepts pre-orders therefore there may be a significant difference between Placed Date and Due Date This Date/Time is set as UTC without an offset, regardless of Country.',
          }),
        PromptAsap: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Did the Customer request the Order to ready ASAP' }),
        RdsPickupTimeWithUtcOffset: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'When the Delivery Partner needs to be at the Restaurant to pickup the Order.',
          }),
        ServiceType: z
          .enum(['Collection', 'Delivery'])
          .exactOptional()
          .openapi({ description: 'Type of the Order.' }),
      })
      .exactOptional()
      .openapi({ description: 'Order data', required: [] }),
    OrderId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Globally unique Identifier for the order. Please use this whenever sending requests related to this order. Just Eat will provide this same identifier on any further messages relating to this order.',
        example: 'ijdhpy7bdusgtc28bapspa',
      }),
    OrderReference: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'This field is used to store external references to the order. This is defined by either Just Eat or the partner that created the order.',
        example: '39cce3f0-0278-dd25-ae32-e8effe1ce4eb',
      }),
    PaymentInfo: z
      .object({
        CashOnDelivery: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Is the Customer paying on Delivery.' }),
        DriverTipValue: z
          .float64()
          .exactOptional()
          .openapi({ description: 'The value of the tip given to the Driver.', example: 0 }),
        PaidDate: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ description: 'DateTime when the Order was Paid (excludes UTC offset).' }),
        PaymentLines: z
          .array(
            z
              .object({
                CardFee: z
                  .float64()
                  .exactOptional()
                  .openapi({
                    description: 'Was there a fee for the payment mechanism.',
                    example: 0.5,
                  }),
                Type: z
                  .literal('Card')
                  .exactOptional()
                  .openapi({ description: 'How was the order Paid.' }),
                Value: z
                  .float64()
                  .exactOptional()
                  .openapi({ description: 'The value of the payment.', example: 22.05 }),
              })
              .openapi({ description: 'Payment line data', required: [] }),
          )
          .exactOptional()
          .openapi({ description: 'How the Customer has paid for the Order.' }),
        Total: z
          .float64()
          .exactOptional()
          .openapi({ description: 'The total order value.', example: 22.55 }),
        TotalComplementary: z
          .float64()
          .exactOptional()
          .openapi({ description: 'Order amount covered by JUST EAT.', example: 0 }),
      })
      .exactOptional()
      .openapi({ description: 'Payment data', required: [] }),
    RestaurantInfo: z
      .object({
        AddressLines: z
          .array(
            z
              .string()
              .openapi({
                description: 'Address line',
                example: 'Fleet Place House 2, Fleet Place, London',
              }),
          )
          .exactOptional()
          .openapi({ description: 'Restaurant address.' }),
        City: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The name of the city where the Restaurant is located',
            example: 'London',
          }),
        DispatchMethod: z
          .string()
          .exactOptional()
          .openapi({ description: '`DispatchMethod` to use.', example: 'Phone' }),
        EmailAddress: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Email address for the Restaurant.',
            example: 'contact@testrestaurant.com',
          }),
        Id: z
          .string()
          .exactOptional()
          .openapi({ description: 'Unique ID of the Restaurant.', example: '123456' }),
        Latitude: z
          .float64()
          .exactOptional()
          .openapi({
            description: 'Restaurant address latitude. Will be 0 if not provided.',
            example: 51.50015,
          }),
        Longitude: z
          .float64()
          .exactOptional()
          .openapi({
            description: 'Restaurant address longitude. Will be 0 if not provided.',
            example: -0.12624,
          }),
        Name: z
          .string()
          .exactOptional()
          .openapi({ description: 'The name of the Restaurant.', example: 'Test Restaurant' }),
        PhoneNumber: z
          .string()
          .exactOptional()
          .openapi({ description: 'The Restaurant phone number.', example: '07123456789' }),
        PickupNotes: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Order pickup instructions for the Delivery Partner.',
            example: 'Use the back entrance',
          }),
        Postcode: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The post code where Restaurant is located',
            example: 'EC4M 7RF',
          }),
      })
      .exactOptional()
      .openapi({ description: 'Restaurant data', required: [] }),
    Restrictions: z
      .array(OrderItemRestrictionSchema)
      .exactOptional()
      .openapi({
        description: 'This is a list of types of restricted items contained in the order.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Connectorder')

const ConnectorderListSchema = z.array(ConnectorderSchema).openapi('ConnectorderList')

const ConsumerMarketingPreferencev2Schema = z
  .object({
    emailAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email address of the consumer' }),
    updates: ConsumerMarketingPreferenceSchema.exactOptional().openapi({
      description: 'Collection of marketing channel subscription updates',
    }),
  })
  .openapi({
    example: {
      emailAddress: 'consumer@just-eat.com',
      updates: [
        { channelName: 'Email', dateUpdated: '2020-07-20T15:07:23.000Z', isSubscribed: true },
      ],
    },
    required: [],
  })
  .openapi('ConsumerMarketingPreferencev2')

const CreateAttemptedDeliverySchema = z
  .object({
    ReasonCode: z
      .enum(['problem_with_address', 'no_answer'])
      .exactOptional()
      .openapi({ description: 'The reason the attempted delivery event was created' }),
  })
  .openapi({ example: { ReasonCode: 'problem_with_address' }, required: [] })
  .openapi('CreateAttemptedDelivery')

const CreateDeliveryPoolSchema = z
  .object({
    name: z
      .string()
      .openapi({ description: 'The name of the pool, used by operations teams, in reports, etc.' }),
    restaurants: z
      .array(z.number())
      .exactOptional()
      .openapi({ description: 'A list of Just Eat restaurant ids served by the delivery pool.' }),
  })
  .openapi({ example: { name: 'Toronto - West', restaurants: [123, 456] }, required: ['name'] })
  .openapi('CreateDeliveryPool')

const CustomerSchema = z
  .object({
    Address: Address2Schema.exactOptional(),
    CustomerReference: z.string().exactOptional(),
    Email: z.string().exactOptional(),
    Location: LocationSchema.exactOptional(),
    Name: z.string().exactOptional(),
    PhoneNumber: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Customer')

const CustomerV2Schema = z
  .object({
    Address: AddressV2Schema,
    DisplayPhoneNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'If you implement phone masking provide a masked number here' }),
    Email: z.string().exactOptional(),
    Name: z.string(),
    PhoneNumber: z.string().openapi({ description: "The customer's real phone number" }),
  })
  .openapi({ required: ['Name', 'PhoneNumber', 'Address'] })
  .openapi('CustomerV2')

const ScoreTypesSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2)])
  .openapi({
    description:
      'Represent the type of score data. Value of this field will depend on the category.',
    example: 2,
    'x-enumNames': ['Number', 'Percentage', 'Custom'],
  })
  .openapi('ScoreTypes')

const CustomerExperienceScoreDetailSchema = z
  .object({
    hasPassed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Represent if the restaurant has passed the customer experience score criteria',
      }),
    maximumScore: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Represent the maximum customer experience score that can be achieved by the restaurant',
      }),
    requiredScore: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Represent the customer experience score required to pass the customer experience score criteria',
      }),
    score: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Represent the customer experience score achieved by the restaurant',
      }),
    scoreType: ScoreTypesSchema.exactOptional().openapi({
      description:
        'Represent the type of score data. It would always be number (0) customer experience score.',
    }),
  })
  .openapi({
    description:
      'Details of how customer experience score has contributed to get the segmentation status',
    example: { hasPassed: false, maximumScore: 50, requiredScore: 40, score: 12, scoreType: 0 },
    required: [],
  })
  .openapi('CustomerExperienceScoreDetail')

const DeliveryAbortWithReasonSchema = z
  .object({
    deliveryPartnerReasonCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The original reason code from the delivery partner',
        example: 'package_damaged',
      }),
    reason: z
      .enum([
        'cancelled_by_requester',
        'package_not_available',
        'restaurant_closed',
        'package_damaged',
        'address_error',
        'driver_problem',
        'could_not_reach_customer',
        'technical_problem',
        'incorrect_package',
        'other',
      ])
      .exactOptional()
      .openapi({
        description: 'The detailed Just Eat delivery partner cancellation reason code',
        example: 'incorrect_package',
      }),
  })
  .openapi({
    example: { deliveryPartnerReasonCode: 'courier_issue', reason: 'driver_problem' },
    required: [],
  })
  .openapi('DeliveryAbortWithReason')

const DeliveryDetailsSchema = z
  .object({
    Location: LocationSchema.exactOptional(),
    TimeStampWithUtcOffset: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'This should represent the delivery detailed updated timestamp.' }),
  })
  .openapi({
    example: { TimeStampWithUtcOffset: '2018-03-10T14:45:28.7537228+00:00' },
    required: [],
  })
  .openapi('DeliveryDetails')

const VehicleDetailsSchema = z
  .object({
    Vehicle: z.string().exactOptional().openapi({ example: 'Motorbike' }),
    VehicleRegistration: z.string().exactOptional().openapi({ example: 'JU51 SAY' }),
  })
  .openapi({ required: [] })
  .openapi('VehicleDetails')

const DeliveryDriverAssignedDetailsSchema = z
  .object({
    DriverContactNumber: z
      .string()
      .exactOptional()
      .openapi({
        description: "This should represent the driver's contact number.",
        example: '07123456789',
      }),
    DriverName: z
      .string()
      .exactOptional()
      .openapi({ description: "This should represent the driver's name.", example: 'David' }),
    EtaAtDeliveryAddress: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "This should represent the delivery partner's best guess at when the driver will arrive at the delivery address.",
        example: '2020-12-25T16:45:28.7537228+00:00',
      }),
    EtaAtRestaurant: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "This should represent the delivery partner's best guess at when the driver will arrive at the restaurant. In other words, it should not just contain the pick-up time initially requested by Just Eat.",
        example: '2020-12-25T15:30:28.7537228+00:00',
      }),
    Location: LocationSchema.exactOptional(),
    TimeStampWithUtcOffset: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'This should represent the driver assigned timestamp.',
        example: '2020-12-25T15:45:28.7537228+00:00',
      }),
    VehicleDetails: VehicleDetailsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeliveryDriverAssignedDetails')

const DeliveryDriverDetailsWithEtaSchema = z
  .object({
    EtaAtDeliveryAddress: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "This should represent the delivery partner's best guess at when the driver will arrive at the delivery address.",
      }),
    Location: LocationSchema.exactOptional(),
    TimeStampWithUtcOffset: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'This should represent the Eta calculated timestamp.' }),
  })
  .openapi({
    example: {
      EtaAtDeliveryAddress: '2018-03-10T15:45:28.7537228+00:00',
      Location: {
        Accuracy: 12.814,
        Heading: 357.10382,
        Latitude: 51.51641,
        Longitude: -0.103198,
        Speed: 8.68,
      },
      TimeStampWithUtcOffset: '2018-03-10T14:45:28.7537228+00:00',
    },
    required: [],
  })
  .openapi('DeliveryDriverDetailsWithEta')

const DeliveryDriverLocationSchema = z
  .object({
    EtaAtDeliveryAddress: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "This should represent the delivery partner's best guess at when the driver will arrive at the delivery address.",
        example: '2020-12-25T16:45:28.7537228+00:00',
      }),
    EtaAtRestaurant: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "This should represent the delivery partner's best guess at when the driver will arrive at the restaurant.",
        example: '2020-12-25T16:30:28.7537228+00:00',
      }),
    Location: LocationSchema.exactOptional().openapi({
      example: {
        Accuracy: 12.814,
        Heading: 357.10382,
        Latitude: 51.51641,
        Longitude: -0.103198,
        Speed: 8.68,
      },
    }),
    TimeStampWithUtcOffset: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'This should represent the location updated timestamp.',
        example: '2020-12-25T15:45:28.7537228+00:00',
      }),
  })
  .openapi({ required: [] })
  .openapi('DeliveryDriverLocation')

const DeliveryDriverUnassignedDetailsSchema = z
  .object({
    Comment: z
      .string()
      .exactOptional()
      .openapi({
        description: 'This should represent the comment on the unassignment.',
        example: 'Order was not ready',
      }),
    DriverContactNumber: z
      .string()
      .exactOptional()
      .openapi({
        description: "This should represent the driver's contact number.",
        example: '07123456789',
      }),
    DriverName: z
      .string()
      .exactOptional()
      .openapi({
        description: "This should represent the driver's name.",
        example: 'David McDriverson',
      }),
    EtaAtDeliveryAddress: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "This should represent the delivery partner's best guess at when the driver will arrive at the delivery address.",
        example: '2020-12-25T16:45:28.7537228+00:00',
      }),
    EtaAtRestaurant: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "This should represent the delivery partner's best guess at when the driver will arrive at the restaurant. In other words, it should not just contain the pick-up time initially requested by Just Eat.",
        example: '2020-12-25T16:30:28.7537228+00:00',
      }),
    'Location:': LocationSchema.exactOptional().openapi({
      description:
        "This should represent the driver's geographic location (longitude and latitude)",
    }),
    Reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "This should represent the delivery partner's reason for unassigning themselves from the order.",
        example: 'package_not_ready',
      }),
    TimeStampWithUtcOffset: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'This should represent the driver unassigned timestamp.',
        example: '2020-12-25T15:30:28.7537228+00:00',
      }),
    UnassignedBy: z
      .string()
      .exactOptional()
      .openapi({
        description: 'This should represent the actor who triggered unassignment.',
        example: 'operation',
      }),
  })
  .openapi({ required: [] })
  .openapi('DeliveryDriverUnassignedDetails')

const DeliveryEtaMinutesSchema = z
  .object({
    Approximate: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Approximate delivery eta in minutes' }),
    RangeLower: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Lower bound of delivery eta in minutes' }),
    RangeUpper: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Upper bound of delivery eta in minutes' }),
  })
  .nullable()
  .openapi({ example: { Approximate: null, RangeLower: 35, RangeUpper: 50 }, required: [] })
  .openapi('DeliveryEtaMinutes')

const DeliveryPoolSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the pool, used by operations teams, in reports, etc.' }),
    restaurants: z
      .array(z.number())
      .exactOptional()
      .openapi({ description: 'A list of Just Eat restaurant ids served by the delivery pool.' }),
  })
  .openapi({ example: { name: 'Toronto - West', restaurants: [123, 456] }, required: [] })
  .openapi('DeliveryPool')

const DeliveryPoolHoursSchema = z
  .object({
    friday: z
      .object({
        closed: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'true if the pool is closed for the day' }),
        poolTimes: z
          .array(
            z
              .object({
                endTime: z.string().openapi({ description: 'pool end time for Friday (HH:mm)' }),
                startTime: z
                  .string()
                  .openapi({ description: 'pool start time for Friday (HH:mm)' }),
              })
              .openapi({ required: ['startTime', 'endTime'] }),
          )
          .openapi({ description: 'pool start and end times for the day' }),
      })
      .openapi({ required: ['poolTimes'] }),
    monday: z
      .object({
        closed: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'true if the pool is closed for the day' }),
        poolTimes: z
          .array(
            z
              .object({
                endTime: z.string().openapi({ description: 'pool end time for Monday (HH:mm)' }),
                startTime: z
                  .string()
                  .openapi({ description: 'pool start time for Monday (HH:mm)' }),
              })
              .openapi({ required: ['startTime', 'endTime'] }),
          )
          .openapi({ description: 'pool start and end times for the day' }),
      })
      .openapi({ required: ['poolTimes'] }),
    saturday: z
      .object({
        closed: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'true if the pool is closed for the day' }),
        poolTimes: z
          .array(
            z
              .object({
                endTime: z.string().openapi({ description: 'pool end time for Saturday (HH:mm)' }),
                startTime: z
                  .string()
                  .openapi({ description: 'pool start time for Saturday (HH:mm)' }),
              })
              .openapi({ required: ['startTime', 'endTime'] }),
          )
          .openapi({ description: 'pool start and end times for the day' }),
      })
      .openapi({ required: ['poolTimes'] }),
    sunday: z
      .object({
        closed: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'true if the pool is closed for the day' }),
        poolTimes: z
          .array(
            z
              .object({
                endTime: z.string().openapi({ description: 'pool end time for Sunday (HH:mm)' }),
                startTime: z
                  .string()
                  .openapi({ description: 'pool start time for Sunday (HH:mm)' }),
              })
              .openapi({ required: ['startTime', 'endTime'] }),
          )
          .openapi({ description: 'pool start and end times for the day' }),
      })
      .openapi({ required: ['poolTimes'] }),
    thursday: z
      .object({
        closed: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'true if the pool is closed for the day' }),
        poolTimes: z
          .array(
            z
              .object({
                endTime: z.string().openapi({ description: 'pool end time for Thursday (HH:mm)' }),
                startTime: z
                  .string()
                  .openapi({ description: 'pool start time for Thursday (HH:mm)' }),
              })
              .openapi({ required: ['startTime', 'endTime'] }),
          )
          .openapi({ description: 'pool start and end times for the day' }),
      })
      .openapi({ required: ['poolTimes'] }),
    tuesday: z
      .object({
        closed: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'true if the pool is closed for the day' }),
        poolTimes: z
          .array(
            z
              .object({
                endTime: z.string().openapi({ description: 'pool end time for Tuesday (HH:mm)' }),
                startTime: z
                  .string()
                  .openapi({ description: 'pool start time for Tuesday (HH:mm)' }),
              })
              .openapi({ required: ['startTime', 'endTime'] }),
          )
          .openapi({ description: 'pool start and end times for the day' }),
      })
      .openapi({ required: ['poolTimes'] }),
    wednesday: z
      .object({
        closed: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'true if the pool is closed for the day' }),
        poolTimes: z
          .array(
            z
              .object({
                endTime: z.string().openapi({ description: 'pool end time for Wednesday (HH:mm)' }),
                startTime: z
                  .string()
                  .openapi({ description: 'pool start time for Wednesday (HH:mm)' }),
              })
              .openapi({ required: ['startTime', 'endTime'] }),
          )
          .openapi({ description: 'pool start and end times for the day' }),
      })
      .openapi({ required: ['poolTimes'] }),
  })
  .openapi({
    example: {
      friday: { closed: false, poolTimes: [{ endTime: '01:00', startTime: '12:00' }] },
      monday: { closed: false, poolTimes: [{ endTime: '21:00', startTime: '09:00' }] },
      saturday: { closed: false, poolTimes: [{ endTime: '23:00', startTime: '11:00' }] },
      sunday: { closed: false, poolTimes: [{ endTime: '19:00', startTime: '13:00' }] },
      thursday: { closed: false, poolTimes: [{ endTime: '03:00', startTime: '12:00' }] },
      tuesday: { closed: true, poolTimes: [{ endTime: '19:00', startTime: '10:00' }] },
      wednesday: { closed: false, poolTimes: [{ endTime: '18:00', startTime: '08:00' }] },
    },
    required: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
  })
  .openapi('DeliveryPoolHours')

const DeliveryRestaurantslistSchema = z
  .object({
    restaurants: z
      .array(z.number())
      .exactOptional()
      .openapi({
        description: 'A list of Just Eat restaurant ids served by the pool.',
        example: [10202, 10203],
      }),
  })
  .openapi({ required: [] })
  .openapi('DeliveryRestaurantslist')

const DocumentContentTypeSchema = z
  .enum(['image/jpeg', 'image/png', 'application/pdf', 'application/msword'])
  .openapi({
    description:
      'The content type of this document. Can be used by the client to display the file correctly',
  })
  .openapi('DocumentContentType')

const DocumentMetadataSchema = z
  .object({
    contentType: DocumentContentTypeSchema.exactOptional().openapi({
      description: 'Content type of the document',
    }),
    dateAdded: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the document is added [YYYY-MM-DDThh:mm:ssZ (UTC)]' }),
    documentKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Key of document being added. This is the s3 object key that you have already added',
        example: 'images/signup/menu-1.jpg',
      }),
  })
  .openapi({ required: [] })
  .openapi('DocumentMetadata')

const DocumentTypeSchema = z
  .enum(['Menu', 'PhotoId', 'AddressProof', 'FsaCertificate', 'Logo', 'OwnershipInfo', 'Shopfront'])
  .openapi({ description: 'The type of the document' })
  .openapi('DocumentType')

const DocumentSchema = z
  .object({
    documentMetadata: DocumentMetadataSchema.exactOptional().openapi({
      description: 'Metadata of document being added',
    }),
    documentType: DocumentTypeSchema.exactOptional().openapi({
      description: 'Type of document being added',
    }),
  })
  .openapi({ required: [] })
  .openapi('Document')

const DocumentLinkResponseSchema = z
  .object({
    documentKey: z.string().exactOptional().openapi({ description: 'The name of the document' }),
    headers: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Headers that will be passed when calling S3' }),
    href: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The signed URL for S3. It includes the random generated file name which is usually a GUID.',
      }),
    method: z
      .enum(['GET', 'PUT', 'DELETE'])
      .exactOptional()
      .openapi({ description: 'The method the client should use when calling S3' }),
  })
  .openapi({
    example: {
      headers: { 'x-amz-meta-documenttype': 'Menu', 'x-amz-server-side-encryption': 'AES256' },
      href: 'https://s3.eu-west-1.amazonaws.com/uk/restaurants/restaurantId/fileName?X-Amz-Expires=180',
    },
    required: [],
  })
  .openapi('DocumentLinkResponse')

const DocumentRejectionTypeSchema = z
  .enum([
    'Other',
    'IncorrectDocument',
    'NotClearEnough',
    'Outdated',
    'NoOwnersName',
    'NoOwnersPhoto',
    'NoBusinessAddress',
    'NoBusinessName',
    'MissingPages',
    'Handwritten',
    'MissingInformation',
    'NoAllergenKey',
    'LogoNameDoesNotMatch',
    'CopyrightInfringement',
    'PhotoFromInternet',
  ])
  .openapi({ description: 'The rejection reason of a document' })
  .openapi('DocumentRejectionType')

const DocumentReviewsSchema = z
  .object({
    rejectionReasons: z
      .array(
        z
          .object({
            comment: z
              .string()
              .exactOptional()
              .openapi({ description: 'Any other review comments' }),
            type: DocumentRejectionTypeSchema.exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .min(0)
      .max(10)
      .exactOptional()
      .openapi({ description: 'An array of rejection reasons' }),
  })
  .openapi({ required: [] })
  .openapi('DocumentReviews')

const DocumentStateSchema = z
  .enum([
    'NotAvailable',
    'Received',
    'ReadyForInitialReview',
    'InitialToBeRejected',
    'InitialNoIssuesFound',
    'InitialReviewRejected',
    'ReadyForFinalReview',
    'FinalReviewNoIssuesFound',
    'FinalReviewToBeRejected',
    'FinalReviewRejected',
    'Approved',
  ])
  .openapi({ description: 'The state of a document' })
  .openapi('DocumentState')

const DocumentStateUpdateSchema = z
  .object({
    documentState: DocumentStateSchema.exactOptional().openapi({
      description: 'The new state of the document',
    }),
  })
  .openapi({ required: [] })
  .openapi('DocumentStateUpdate')

const DriverLocationSchema = z
  .object({
    Location: LocationV2Schema.exactOptional(),
    OrderId: z.string().exactOptional(),
    TimeStamp: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DriverLocation')

const DriverStatusSchema = z
  .object({
    DriverContactNumber: z.string().exactOptional(),
    DriverName: z.string().exactOptional(),
    EstimatedDeliveryTime: z.iso.datetime({ offset: true }).exactOptional(),
    EstimatedPickupTime: z.iso.datetime({ offset: true }).exactOptional(),
    Event: z
      .enum(['DriverAssigned', 'DriverAtRestaurant', 'OnItsWay', 'AtDeliveryAddress', 'Delivered'])
      .exactOptional(),
    OrderId: z.string().exactOptional(),
    TimeStamp: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DriverStatus')

const EmailaddressSchema = z
  .object({
    EmailAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'An email address for an account.' }),
  })
  .openapi({ required: [] })
  .openapi('Emailaddress')

const EstimatedDeliveryTimeSchema = z
  .object({
    DurationInMinutes: z.string().exactOptional(),
    RestaurantReference: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EstimatedDeliveryTime')

const EstimatedTimeSchema = z
  .object({
    bestGuess: z
      .string()
      .exactOptional()
      .openapi({ description: 'Your best estimation (hh:mm:ss)' }),
  })
  .openapi({ example: { bestGuess: '00:35:00' }, required: [] })
  .openapi('EstimatedTime')

const EtaEstimateSchema = z
  .object({
    bestGuess: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "This should represent the delivery partner's best guess at when the driver will arrive at the restaurant.",
      }),
    estimatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'This is the time at which you are doing the estimation' }),
  })
  .openapi({ required: [] })
  .openapi('EtaEstimate')

const ExtensibleObjectSchema = z.looseObject({}).openapi('ExtensibleObject')

const Fee2Schema = z
  .object({ Type: z.string().exactOptional(), Value: z.number().exactOptional() })
  .openapi({ required: [] })
  .openapi('Fee2')

const FulfillmentSchema = z
  .object({
    Method: z.string().exactOptional(),
    PickupTime: z.iso.datetime({ offset: true }).exactOptional(),
    Table: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Fulfillment')

const FulfilmentV2Schema = z
  .object({
    DueAsap: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If food should be delivered ASAP' }),
    DueDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The time the customer expects the food. Time must be in the future',
      }),
    Method: z.enum(['Delivery', 'Collection']),
  })
  .openapi({
    example: { DueAsap: false, DueDate: '2020-01-01T09:00:00.000Z', Method: 'Delivery' },
    required: ['Method', 'DueDate'],
  })
  .openapi('FulfilmentV2')

const HygieneSchemeSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2)])
  .openapi({
    description: 'Denotes the type of hygiene scheme supported',
    example: 1,
    'x-enumNames': ['Unknown', 'FHRS', 'FHIS'],
  })
  .openapi('HygieneScheme')

const HygieneScoreDetailSchema = z
  .object({
    hasPassed: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Represent if the restaurant has passed the hygiene score criteria',
      }),
    maximumScore: z
      .union([z.number(), z.string(), z.object({})])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Represent the maximum hygiene score that can be achieved. Based in the score type value, type of this field can be string or number of in future anything else',
      }),
    requiredScore: z
      .union([z.number(), z.string(), z.object({})])
      .exactOptional()
      .openapi({
        description:
          'Represent the hygiene score required to pass hygiene criteria. Based in the score type value, type of this field can be string or number of in future anything else',
      }),
    scheme: HygieneSchemeSchema.exactOptional().openapi({
      description: 'Represent the hygiene scheme used by the restaurant',
    }),
    score: z
      .union([z.number(), z.string(), z.object({})])
      .exactOptional()
      .openapi({
        description:
          'Represent the hygiene score achieved by restaurant. Based in the score type value, type of this field can be string or number of in future anything else',
      }),
    scoreType: ScoreTypesSchema.exactOptional().openapi({
      description:
        'Represent the type of score data. Value of this field will depend which hygiene method is supported by restaurant.',
    }),
  })
  .openapi({
    description:
      'Details of hygiene rating experience score has contributed to get the segmentation status',
    example: {
      hasPassed: true,
      maximumScore: 5,
      requiredScore: 3,
      scheme: 1,
      score: 5,
      scoreType: 0,
    },
    required: [],
  })
  .openapi('HygieneScoreDetail')

const InitialRestaurantRequestSchema = z
  .object({
    address: z
      .object({
        city: z
          .string()
          .exactOptional()
          .openapi({ description: 'The name of the city the restaurant is located' }),
        lines: z
          .array(z.string())
          .min(1)
          .max(3)
          .exactOptional()
          .openapi({ description: 'The address lines the restaurant is located' }),
        postalCode: z
          .string()
          .exactOptional()
          .openapi({ description: 'The post code the restaurant is located' }),
      })
      .openapi({ description: 'The address of the restaurant', required: [] }),
    name: z.string().openapi({ description: 'The name of the restaurant' }),
    owner: z
      .object({
        emailAddress: z
          .string()
          .exactOptional()
          .openapi({ description: 'The email address of the restaurant owner' }),
        familyName: z
          .string()
          .exactOptional()
          .openapi({ description: 'The last name of the restaurant owner' }),
        givenName: z
          .string()
          .exactOptional()
          .openapi({ description: 'The first name of the restaurant owner' }),
        phoneNumber: z
          .string()
          .exactOptional()
          .openapi({ description: 'The phone number of the restaurant owner' }),
      })
      .openapi({ description: 'The owner of the restaurant', required: [] }),
  })
  .openapi({
    example: {
      address: {
        city: 'London',
        lines: ['Fleet Place House', 'Fleet Place'],
        postalCode: 'EC4M 7RF',
      },
      name: 'Test Restaurant',
      owner: { emailAddress: 'restaurant@example.com', phoneNumber: '0791231234' },
    },
    required: ['name', 'address', 'owner'],
  })
  .openapi('InitialRestaurantRequest')

const Item2Schema: z.ZodType<Item2Type> = z
  .lazy(() =>
    z
      .object({
        Description: z.string().exactOptional(),
        Items: z.array(Item2Schema).exactOptional(),
        OptionReference: z.string().exactOptional(),
        Quantity: z.number().exactOptional(),
        Reference: z.string().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('Item2')

const ItemV2Schema: z.ZodType<ItemV2Type> = z
  .lazy(() =>
    z
      .object({
        Items: z.array(ItemV2Schema).exactOptional(),
        Name: z.string().exactOptional(),
        Quantity: z.int().exactOptional(),
        Reference: z.string().exactOptional(),
        UnitPrice: z.int().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('ItemV2')

const ItemsV2Schema = z
  .object({
    Items: z.array(ItemV2Schema).exactOptional(),
    Name: z.string(),
    Quantity: z.int().min(1),
    Reference: z.string().openapi({ description: "The item's ID that you hold" }),
    TotalPrice: z
      .number()
      .openapi({ description: 'Price of this item x quantity and all sub items' }),
    UnitPrice: z.int().exactOptional(),
  })
  .openapi({ required: ['TotalPrice', 'Reference', 'Name', 'Quantity'] })
  .openapi('ItemsV2')

const LateOrderCompensationOptionsSchema = z
  .array(LateOrderCompensationOptionSchema)
  .openapi('LateOrderCompensationOptions')

const LateOrderCompensationQuery2Schema = z
  .object({
    compensationOptions: LateOrderCompensationOptionsSchema.exactOptional().openapi({
      description: 'List of possible options for compensation',
    }),
    orderId: z.string().exactOptional().openapi({ description: 'Just Eat order identifier' }),
    restaurantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Just Eat restaurant identifier' }),
    tenant: z
      .string()
      .exactOptional()
      .openapi({ description: 'Tenant (Country) of order restaurant.' }),
  })
  .openapi({
    example: {
      CompensationOptions: [
        { Amount: 200, IsRecommended: false },
        { Amount: 300, IsRecommended: true },
        { Amount: 400, IsRecommended: false },
      ],
      OrderId: 'wiej234idf09i29jijgf4',
      RestaurantId: '110230',
      Tenant: 'uk',
    },
    required: [],
  })
  .openapi('LateOrderCompensationQuery2')

const LateOrderQuerySchema = z
  .object({
    orderId: z.string().exactOptional().openapi({ description: 'Just Eat order identifier' }),
    restaurantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Just Eat restaurant identifier' }),
    tenant: z
      .string()
      .exactOptional()
      .openapi({ description: 'Tenant (Country) of order restaurant.' }),
  })
  .openapi({
    example: { OrderId: 'wiej234idf09i29jijgf4', RestaurantId: '110230', Tenant: 'uk' },
    required: [],
  })
  .openapi('LateOrderQuery')

const LinesV2Schema = z
  .object({
    LastCardDigits: z.string().exactOptional(),
    Paid: z.boolean().exactOptional(),
    ServiceFee: z.float64().exactOptional(),
    Type: z.enum(['Cash', 'Card', 'AccountCredit', 'Voucher']),
    Value: z.number().exactOptional(),
  })
  .openapi({ required: ['Type'] })
  .openapi('LinesV2')

const MenuIngestionCompleteSchema = z
  .object({
    correlationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the execution which has been completed' }),
    fault: z
      .object({
        errors: z
          .array(
            z
              .object({
                code: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'An alphanumeric code for the error' }),
                description: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'A description of the error to help you resolve the issue',
                  }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({ description: 'Details of errors which caused the fault' }),
        id: z.string().exactOptional().openapi({ description: 'A unique ID for the fault' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Details of the fault which caused the menu ingestion to fail. This is only present if menu ingestion did not complete successfully',
        required: [],
      }),
    restaurantId: z.string().exactOptional().openapi({ description: 'The Just Eat restaurant ID' }),
    result: z
      .enum(['success', 'fail'])
      .exactOptional()
      .openapi({ description: 'The result of the menu ingestion process' }),
    tenant: z
      .enum(['au', 'dk', 'es', 'ie', 'it', 'no', 'uk', 'nz'])
      .exactOptional()
      .openapi({ description: 'Country code for the market the restaurant is in' }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The ISO-8601 datetime at which the menu ingestion completed' }),
  })
  .openapi({
    example: {
      correlationId: '64bef5ee-7265-47f8-9aee-28bc74f00b13',
      fault: {
        errors: [
          {
            code: '123',
            description:
              'Invalid variation: 15237d6c-c866-55da-9e61-b4f59dcab9ae - variations must be associated with at least one availability',
          },
          {
            code: '145',
            description:
              'Invalid availability ID: menu-105369-availabilities - availability IDs must be integers',
          },
        ],
        id: '70e307df-0156-4d3c-ab92-dd57a103350b',
      },
      restaurantId: '123456',
      result: 'fail',
      tenant: 'uk',
      timestamp: '2020-01-01T00:00:00Z',
    },
    required: [],
  })
  .openapi('MenuIngestionComplete')

const ObjectSchema = z.object({}).openapi('Object')

const OnItsWayDetailsSchema = z
  .object({
    EstimatedArrivalTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "This should represent the delivery partner's best guess at when the driver will arrive at the customer's address. In other words, it should not just contain the delivery time initially requested by Just Eat.",
        example: '2020-12-25T16:45:28.7537228+00:00',
      }),
    Location: LocationSchema.exactOptional(),
    TimeStampWithUtcOffset: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'This should represent the driver on its ways timestamp.',
        example: '2020-12-25T15:30:28.7537228+00:00',
      }),
  })
  .openapi({ required: [] })
  .openapi('OnItsWayDetails')

const OnItsWayPercentageSchema = z
  .object({
    hasPassed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Represent if the restaurant has passed the on-its-way threshold' }),
    requiredScore: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Represent the on its way percentage required to pass the on-its-way threshold',
      }),
    score: z
      .number()
      .exactOptional()
      .openapi({ description: 'Represent the on-its-way percentage of restaurant' }),
    scoreType: ScoreTypesSchema.exactOptional().openapi({
      description:
        'Represent the type of score data. It would always be percentage (1) for on-its-way.',
    }),
  })
  .openapi({
    description:
      'Details of how on its way experience score has contributed to get the segmentation status',
    example: { hasPassed: true, requiredScore: 70, score: 84, scoreType: 1 },
    required: [],
  })
  .openapi('OnItsWayPercentage')

const OrderAcceptRequestSchema = z
  .object({ TimeAcceptedFor: z.iso.datetime({ offset: true }).exactOptional() })
  .openapi({ example: { TimeAcceptedFor: '2018-03-10T14:45:28Z' }, required: [] })
  .openapi('OrderAcceptRequest')

const OrderAcceptedSchema = z
  .object({
    AcceptedFor: z.iso.datetime({ offset: true }).exactOptional(),
    Event: z.string().exactOptional(),
    OrderId: z.string().exactOptional(),
  })
  .openapi({
    example: { AcceptedFor: '2018-03-10T14:45:28Z', Event: 'OrderAccepted', OrderId: '123456' },
    required: [],
  })
  .openapi('OrderAccepted')

const OrderCancelRequestSchema = z
  .object({
    Message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Reason why this order is being cancelled.' }),
  })
  .openapi({ example: { Message: 'Customer requested the order to be cancelled' }, required: [] })
  .openapi('OrderCancelRequest')

const OrderCancelled2Schema = z
  .object({
    Event: z.string().exactOptional(),
    OrderId: z.string().exactOptional(),
    Reason: z
      .enum([
        'cust_cancelled_changed_mind',
        'cust_cancelled_delivery_too_long',
        'cust_cancelled_made_mistake',
        'cust_cancelled_other',
        'delivery_partner_cancelled',
        'rest_cancelled_customer_absent',
        'rest_cancelled_customer_requested',
        'rest_cancelled_declined',
        'rest_cancelled_drivers_unavailable',
        'rest_cancelled_fake_order',
        'rest_cancelled_other',
        'rest_cancelled_out_of_stock',
        'rest_cancelled_too_busy',
        'system_cancelled_other',
        'system_cancelled_test_order',
      ])
      .exactOptional()
      .openapi({ description: 'The reason the order was cancelled.' }),
  })
  .openapi({
    example: {
      Event: 'OrderCancelled',
      OrderId: 'ijdhpy7bdusgtc28bapspa',
      Reason: 'system_cancelled_other',
    },
    required: [],
  })
  .openapi('OrderCancelled2')

const OrderDueDateRequestSchema = z
  .object({
    DueDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The updated ETA for the order' }),
  })
  .openapi({ example: { DueDate: '2019-12-25T14:45:28Z' }, required: [] })
  .openapi('OrderDueDateRequest')

const OrderReadyForPreparationSchema = z
  .object({
    Currency: z.string().exactOptional(),
    Customer: z
      .object({ Id: z.string().exactOptional(), Name: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    CustomerNotes: z.record(z.string(), z.string()).exactOptional(),
    Fulfilment: z
      .object({
        Address: z
          .object({
            City: z.string().exactOptional(),
            Geolocation: LocationSchema.exactOptional(),
            Lines: z.array(z.string()).exactOptional(),
            PostalCode: z.string().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        CustomerDueAsap: z.boolean().exactOptional(),
        CustomerDueDate: z.iso.datetime({ offset: true }).exactOptional(),
        Method: z.enum(['Delivery', 'Collection']).exactOptional(),
        PhoneNumber: z.string().exactOptional(),
        PreparationTime: z.string().exactOptional(),
        PrepareFor: z.iso.datetime({ offset: true }).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    IsTest: z.boolean().exactOptional(),
    Items: z.array(ItemV2Schema).exactOptional(),
    OrderId: z.string().exactOptional(),
    Payment: z
      .object({
        Lines: z
          .array(
            z
              .object({
                Paid: z.boolean().exactOptional(),
                Type: z.enum(['card', 'cash', 'credit', 'other']).exactOptional(),
                Value: z.number().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    PlacedDate: z.iso.datetime({ offset: true }).exactOptional(),
    PriceBreakdown: z
      .object({
        Discount: z.number().exactOptional(),
        Fees: z
          .object({
            Delivery: z.number().exactOptional(),
            Other: z.number().exactOptional(),
            ServiceCharge: z.number().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        Items: z.number().exactOptional(),
        Taxes: z.number().exactOptional(),
        Tips: z.number().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    Restaurant: z
      .object({
        Address: z
          .object({
            City: z.string().exactOptional(),
            Geolocation: LocationSchema.exactOptional(),
            Lines: z.array(z.string()).exactOptional(),
            PostalCode: z.string().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        Id: z.string().exactOptional(),
        Name: z.string().exactOptional(),
        PhoneNumber: z.string().exactOptional(),
        Reference: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    TotalPrice: z.number().exactOptional(),
  })
  .openapi({
    example: {
      Currency: 'GBP',
      Customer: { Id: 'Batman', Name: 'Bruce Wayne' },
      CustomerNotes: [
        { Key: 'Floor', Value: '5th floor' },
        { Key: 'Code', Value: 'Code 1234' },
      ],
      Fulfilment: {
        Address: {
          City: 'London',
          Geolocation: { Latitude: 51.51641, Longitude: -0.103198 },
          Lines: ['Fleet Place House', 'Fleet Pl'],
          PostalCode: 'EC4M 7RD',
        },
        CustomerDueAsap: false,
        CustomerDueDate: '2018-03-10T14:45:28Z',
        Method: 'Delivery',
        PhoneNumber: '+441234567890',
      },
      IsTest: true,
      Items: [
        {
          Items: [
            {
              Items: [],
              Name: 'Fries',
              Quantity: 1,
              Reference: '9876',
              Synonym: 'Regular',
              UnitPrice: 0,
            },
            {
              Items: [],
              Name: 'Pepsi',
              Quantity: 2,
              Reference: '6789',
              Synonym: '330ml',
              UnitPrice: 0,
            },
          ],
          Name: 'Chicken Box Meal',
          Quantity: 2,
          Reference: '1234',
          Synonym: '',
          TotalPrice: 10,
          UnitPrice: 5,
        },
        {
          Items: [],
          Name: 'Milkshake',
          Quantity: 1,
          Reference: '4321',
          Synonym: '',
          TotalPrice: 7.25,
          UnitPrice: 7.25,
        },
      ],
      OrderId: 'XYZ123456',
      Payment: { Lines: [{ Paid: false, Type: 'card', Value: 19.25 }] },
      PlacedDate: '2018-03-10T14:45:28Z',
      PriceBreakdown: {
        Discount: 0,
        Fees: { Delivery: 1, Other: 0, ServiceCharge: 0.5 },
        Items: 17.25,
        Taxes: 3.85,
        Tips: 0.5,
      },
      Restaurant: {
        Address: {
          City: 'London',
          Geolocation: { Latitude: 51.4484, Longitude: -0.1504 },
          Lines: ['Oldridge Road'],
          PostalCode: 'SW12 8PW',
        },
        Id: '99999',
        Name: 'Just Eat Test Restaurant',
        PhoneNumber: '+441200000000',
        Refererence: 'R99999',
      },
      TotalPrice: 19.25,
    },
    required: [],
  })
  .openapi('OrderReadyForPreparation')

const OrderRejectRequestSchema = z
  .object({
    Message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Reason why this order is being rejected.' }),
  })
  .openapi({ example: { Message: 'Kitchen overloaded' }, required: [] })
  .openapi('OrderRejectRequest')

const OrderRejectedSchema = z
  .object({
    Event: z.string().exactOptional(),
    RejectedAt: z.iso.datetime({ offset: true }).exactOptional(),
    RejectedBy: z.string().exactOptional(),
    RejectedReason: z.string().exactOptional(),
  })
  .openapi({
    example: {
      Event: 'OrderRejected',
      RejectedAt: '2018-03-10T14:45:28Z',
      RejectedBy: '123456',
      RejectedReason: 'Kitchen overloaded',
    },
    required: [],
  })
  .openapi('OrderRejected')

const PaymentSchema = z
  .object({
    CardCharges: z.number().exactOptional(),
    CashOnDelivery: z.boolean().exactOptional(),
    DeliveryCharge: z.number().exactOptional(),
    DriverTipValue: z.number().exactOptional(),
    Fees: z.array(Fee2Schema).exactOptional(),
    RestaurantTipValue: z.number().exactOptional(),
    Total: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Payment')

const RestaurantDetailsSchema = z
  .object({
    Address: z.string(),
    City: z.string().exactOptional(),
    Email: z.string(),
    Id: z.int(),
    Location: LocationSchema,
    Name: z.string(),
    PhoneNumber: z.string().exactOptional(),
    Postcode: z.string().exactOptional(),
  })
  .openapi({ required: ['Id', 'Email', 'Name', 'Address', 'Location'] })
  .openapi('RestaurantDetails')

const OrderRequestSchema = z
  .object({
    Basket: z.string(),
    Customer: CustomerSchema,
    CustomerNote: z.string().exactOptional(),
    DueDate: z.iso.datetime({ offset: true }),
    EventUpdateUri: z.string().exactOptional(),
    FriendlyOrderReference: z.string().exactOptional(),
    Fulfillment: FulfillmentSchema.exactOptional(),
    IsRds: z.boolean().exactOptional(),
    OrderReference: z.string(),
    PartnerName: z.string().exactOptional(),
    PartnerSubscriptionId: z.int(),
    Payment: PaymentSchema,
    PlacedDate: z.iso.datetime({ offset: true }),
    RestaurantDetails: RestaurantDetailsSchema,
    RestaurantReference: z.string().exactOptional(),
    TimeStampAccepted: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({
    required: [
      'PlacedDate',
      'DueDate',
      'OrderReference',
      'Payment',
      'Customer',
      'Basket',
      'RestaurantDetails',
      'PartnerSubscriptionId',
    ],
  })
  .openapi('OrderRequest')

const TaxV2Schema = z
  .object({ Percentage: z.float64(), Type: z.string(), Value: z.number() })
  .openapi({ required: ['Value', 'Type', 'Percentage'] })
  .openapi('TaxV2')

const PaymentV2Schema = z
  .object({
    Fees: z.array(Fee2Schema).exactOptional(),
    Lines: z.array(LinesV2Schema),
    PaidDate: z.iso.datetime({ offset: true }).exactOptional(),
    Taxes: z.array(TaxV2Schema).exactOptional(),
    Tips: z.array(Fee2Schema).exactOptional(),
  })
  .openapi({
    example: {
      Fees: [
        { Type: 'card', Value: 0.25 },
        { Type: 'delivery', Value: 3.5 },
      ],
      Lines: [{ LastCardDigits: '1234', Paid: true, ServiceFee: 0, Type: 'Card', Value: 19.95 }],
      Tips: [{ Type: 'driver', Value: 2.5 }],
    },
    required: ['Lines'],
  })
  .openapi('PaymentV2')

const RestaurantV2Schema = z
  .xor([
    z
      .object({ Id: z.int().exactOptional().openapi({ description: 'Our restaurant ID' }) })
      .openapi({ required: [] }),
    z
      .object({
        Reference: z
          .string()
          .exactOptional()
          .openapi({
            description: 'If we hold a mapping for your restaurant IDs to ours - use your ID here',
          }),
      })
      .openapi({ required: [] }),
  ])
  .openapi('RestaurantV2')

const OrderRequestV2Schema = z
  .object({
    Customer: CustomerV2Schema,
    CustomerNotes: z
      .object({
        NoteForDelivery: z.string().exactOptional(),
        NoteForRestaurant: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({
        example: { NoteForDelivery: 'Red door', NoteForRestaurant: 'Make it spicy' },
        required: [],
      }),
    FriendlyOrderReference: z.string().exactOptional(),
    Fulfilment: FulfilmentV2Schema,
    IsTest: z.boolean().exactOptional(),
    Items: z.array(ItemsV2Schema),
    OrderReference: z.string(),
    Payment: PaymentV2Schema,
    Restaurant: RestaurantV2Schema,
    TotalPrice: z.float64(),
  })
  .openapi({
    required: [
      'OrderReference',
      'TotalPrice',
      'Restaurant',
      'Customer',
      'Fulfilment',
      'Payment',
      'Items',
    ],
  })
  .openapi('OrderRequestV2')

const OrderStatusRequestSchema = z
  .object({
    Data: z.record(z.string(), z.string()).exactOptional(),
    Message: z.string().exactOptional(),
    Status: z
      .enum(['InKitchen', 'FailedToSendToKitchen', 'Accepted', 'Rejected'])
      .openapi({ description: 'The requested new state of the order' }),
    TimeAcceptedFor: z.iso.datetime({ offset: true }).exactOptional(),
    TimeStamp: z.iso.datetime({ offset: true }),
  })
  .openapi({
    example: { Status: 'Accepted', TimeStamp: '2018-03-10T14:45:28Z' },
    required: ['Status', 'TimeStamp'],
  })
  .openapi('OrderStatusRequest')

const OrderTimeUpdatedSchema = z
  .object({
    dayOfWeek: z
      .enum(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])
      .exactOptional()
      .openapi({ description: 'The day of the week that has been updated.' }),
    lowerBoundMinutes: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Order time lower bound value, in minutes.' }),
    restaurantId: z.string().exactOptional().openapi({ description: 'The Just Eat restaurant ID' }),
    serviceType: z
      .enum(['Delivery', 'Collection'])
      .exactOptional()
      .openapi({ description: 'Service type of the order time.' }),
    upperBoundMinutes: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Order time upper bound value, in minutes.' }),
  })
  .openapi({
    example: {
      dayOfWeek: 'Monday',
      lowerBoundMinutes: 35,
      restaurantId: '123456',
      serviceType: 'Delivery',
      upperBoundMinutes: 50,
    },
    required: [],
  })
  .openapi('OrderTimeUpdated')

const OrderScoreDetailSchema = z
  .object({
    hasPassed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Represent if the restaurant has passed the order score criteria' }),
    maximumScore: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Represent the maximum order score that can be achieved by the restaurant',
      }),
    requiredScore: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Represent the order score required to pass the order score criteria',
      }),
    score: z
      .number()
      .exactOptional()
      .openapi({ description: 'Represent the order score achieved by the restaurant' }),
    scoreType: ScoreTypesSchema.exactOptional().openapi({
      description:
        'Represent the type of score data. It would always be number (0) customer experience score.',
    }),
  })
  .openapi({
    description: 'Details of how order score has contributed to get the segmentation status',
    example: { hasPassed: true, maximumScore: 50, requiredScore: 20, score: 48, scoreType: 0 },
    required: [],
  })
  .openapi('OrderScoreDetail')

const OrderTimeSchema = z
  .object({
    dayOfWeek: z
      .enum(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])
      .exactOptional()
      .openapi({ description: 'Day of week for order time' }),
    lowerBoundMinutes: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Order time lower bound value, in minutes.' }),
    serviceType: z
      .enum(['Delivery', 'Collection'])
      .exactOptional()
      .openapi({ description: 'Service type of the order time' }),
    upperBoundMinutes: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Order time upper bound value, in minutes.' }),
  })
  .openapi({
    description: 'The object representing order time entry',
    example: {
      dayOfWeek: 'Monday',
      lowerBoundMinutes: 35,
      serviceType: 'Delivery',
      upperBoundMinutes: 50,
    },
    required: [],
  })
  .openapi('OrderTime')

const PartnerRestaurantTemporaryOfflineStatusSchema = z
  .object({
    Message: z.string().exactOptional(),
    Status: z.enum(['TempOffline', 'ClosedToday', 'None']).exactOptional(),
  })
  .openapi({ example: { Message: 'Too busy', Status: 'TempOffline' }, required: [] })
  .openapi('PartnerRestaurantTemporaryOfflineStatus')

const PasswordSchema = z
  .object({
    Password: z
      .string()
      .exactOptional()
      .openapi({ description: 'A password for a consumers account.' }),
  })
  .openapi({ required: [] })
  .openapi('Password')

const PatchDeliveryPoolSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the pool, used by operations teams, in reports, etc.' }),
    restaurants: z
      .array(z.number())
      .exactOptional()
      .openapi({ description: 'A list of Just Eat restaurant ids served by the delivery pool.' }),
  })
  .openapi({ example: { name: 'Toronto - North' }, required: [] })
  .openapi('PatchDeliveryPool')

const ProductIdListSchema = z
  .array(z.string().openapi({ description: 'Array of partner product identifiers' }))
  .openapi('ProductIdList')

const ReadyForPickupSchema = z
  .object({
    Event: z.literal('Ready for pickup').exactOptional(),
    Timestamp: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReadyForPickup')

const ResolveAttemptedDeliveryCancelSchema = z
  .object({
    ReasonCode: z
      .enum([
        'new_address_not_within_area',
        'unable_to_reprepare',
        'driver_not_available',
        'area_unsafe',
        'customer_doesnt_want_anymore',
      ])
      .exactOptional()
      .openapi({ description: 'The reason the order has been cancelled' }),
  })
  .openapi({ example: { ReasonCode: 'new_address_not_within_area' }, required: [] })
  .openapi('ResolveAttemptedDeliveryCancel')

const ResolveAttemptedDeliveryRedeliverSchema = z
  .object({
    NewDueDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Updated due date for delivery of the order' }),
    Status: z
      .enum(['driver_at_address', 'repreparing'])
      .exactOptional()
      .openapi({ description: 'The current status of the order' }),
  })
  .openapi({
    example: { NewDueDate: '2018-03-10T14:45:28Z', Status: 'driver_at_address' },
    required: [],
  })
  .openapi('ResolveAttemptedDeliveryRedeliver')

const RestaurantSchema = z
  .object({
    address: z
      .object({
        city: z
          .string()
          .exactOptional()
          .openapi({ description: 'The name of the city the restaurant is located' }),
        lines: z
          .array(z.string())
          .min(1)
          .max(3)
          .exactOptional()
          .openapi({ description: 'The address lines the restaurant is located' }),
        postalCode: z
          .string()
          .exactOptional()
          .openapi({ description: 'The post code the restaurant is located' }),
      })
      .exactOptional()
      .openapi({ description: 'The address of the restaurant', required: [] }),
    applicationMetadata: z
      .object({
        applicationType: z
          .enum(['Unknown', 'Standard', 'NonStandard'])
          .nullable()
          .exactOptional()
          .openapi({ description: 'The type of sign up application i.e. Standard, Non-Standard.' }),
        occupancyType: z
          .enum([
            'Unknown',
            'Single',
            'MultipleBusinessSingleOwnership',
            'MultipleBusinessMultipleOwnership',
            'Other',
          ])
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The nature of occupancy that restaurant is using e.g Single, Multiple businesses under one ownership, Multiple businesses under multiple ownership etc...',
          }),
        premiseType: z
          .enum([
            'Unknown',
            'HighStreet',
            'GhostKitchen',
            'Residential',
            'PubOrHotelSameName',
            'PubOrHotelDifferentName',
            'PubOrHotelLeased',
            'PubOrHotelUnknown',
            'Unit',
            'Stall',
            'ShoppingCentre',
            'Van',
            'Other',
          ])
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The type of premises that restaurant is using e.g Pub, Hotel, Stall etc...',
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Extra information about the restaurant, like the premises and ownership status',
        required: [],
      }),
    applicationState: ApplicationStateSchema.exactOptional().openapi({
      description: 'The current application state of the restaurant',
    }),
    bankDetails: z
      .object({
        accountHolderName: z
          .string()
          .exactOptional()
          .openapi({ description: 'The name on the bank account' }),
        bankAccountNumber: z
          .string()
          .exactOptional()
          .openapi({ description: 'The bank account number' }),
        bankName: z.string().exactOptional().openapi({ description: 'The name of the bank' }),
        bankSortCode: z.string().exactOptional().openapi({ description: 'The sort code' }),
      })
      .exactOptional()
      .openapi({ description: 'Account holder information for the restaurant', required: [] }),
    createdDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the restaurant was created [YYYY-MM-DDThh:mm:ssZ (UTC)]' }),
    fulfilment: z
      .object({
        type: z
          .enum(['DeliveryAndCollection', 'CollectionOnly', 'JustEatDelivery'])
          .exactOptional()
          .openapi({ description: 'The delivery type of the restaurant' }),
      })
      .exactOptional()
      .openapi({ description: 'The delivery type of the restaurant', required: [] }),
    hygiene: z
      .object({ rating: z.string().exactOptional().openapi({ description: 'The rating score' }) })
      .exactOptional()
      .openapi({ description: 'The food hygiene rating for the restaurant', required: [] }),
    lastUpdatedDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When the restaurant was last updated [YYYY-MM-DDThh:mm:ssZ (UTC)]',
      }),
    menu: z
      .object({
        requestedCuisines: z
          .array(z.string())
          .min(1)
          .max(2)
          .exactOptional()
          .openapi({ description: 'The restaurant cuisines' }),
      })
      .exactOptional()
      .openapi({ description: 'The restaurant menu', required: [] }),
    name: z.string().exactOptional().openapi({ description: 'The name of the restaurant' }),
    owner: z
      .object({
        emailAddress: z
          .string()
          .exactOptional()
          .openapi({ description: 'The email address of the restaurant owner' }),
        familyName: z
          .string()
          .exactOptional()
          .openapi({ description: 'The last name of the restaurant owner' }),
        givenName: z
          .string()
          .exactOptional()
          .openapi({ description: 'The first name of the restaurant owner' }),
        phoneNumber: z
          .string()
          .exactOptional()
          .openapi({ description: 'The phone number of the restaurant owner' }),
      })
      .exactOptional()
      .openapi({ description: 'The restaurant owner', required: [] }),
  })
  .openapi({
    example: {
      address: {
        city: 'London',
        lines: ['Fleet Place House', 'Fleet Place'],
        postalCode: 'EC4M 7RF',
      },
      applicationMetadata: {
        applicationType: 'NonStandard',
        occupancyType: 'MultipleBusinessMultipleOwnership',
        premiseType: 'Van',
      },
      applicationState: 'OpenApplication',
      bankDetails: {
        accountHolderName: 'John Doe',
        bankAccountNumber: '12345678',
        bankName: 'Best Bank',
        bankSortCode: '12-34-56',
      },
      createdDate: '2019-10-16T12:18:34.000Z',
      fulfilment: {
        description: 'The fulfillment options for the restaurant',
        type: 'DeliveryAndCollection',
      },
      hygiene: { rating: '4' },
      lastUpdatedDate: '2019-10-16T12:18:34.000Z',
      menu: { requestedCuisines: ['Greek', 'European'] },
      name: 'Test Restaurant',
      owner: {
        emailAddress: 'restaurant@example.com',
        familyName: 'Doe',
        givenName: 'John',
        phoneNumber: '0791231234',
      },
    },
    required: [],
  })
  .openapi('Restaurant')

const RestaurantDetailsUpdatedSchema = z
  .object({
    event: z.literal('RestaurantUpdated').exactOptional(),
    restaurants: z
      .array(
        z
          .object({
            city: z.string().exactOptional(),
            firstLine: z.string().exactOptional(),
            id: z.number().exactOptional().openapi({ description: 'The JUST EAT restaurant id' }),
            latitude: z.float32().exactOptional(),
            longitude: z.float32().exactOptional(),
            name: z.string().exactOptional(),
            postcode: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    tenant: z
      .string()
      .exactOptional()
      .openapi({ description: 'The country the restaurant(s) exists in' }),
  })
  .openapi({ required: [] })
  .openapi('RestaurantDetailsUpdated')

const RestaurantHoursChangedSchema = z
  .object({
    Event: z.literal('OpenHoursForRestaurantChanged').exactOptional(),
    OpenHours: z
      .array(
        z
          .object({
            CloseTime: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The close time (HH:mm) (Wide clock, i.e. if before start it is following day)',
              }),
            Closed: z
              .boolean()
              .exactOptional()
              .openapi({ description: 'The restaurant is closed for the day' }),
            DayOfWeek: z
              .enum(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])
              .exactOptional()
              .openapi({ description: 'The day of the week the times are for.' }),
            OpenTime: z.string().exactOptional().openapi({ description: 'The open time (HH:mm)' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    RestaurantReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The JUST EAT Restaurant Id' }),
    Tenant: z
      .string()
      .exactOptional()
      .openapi({ description: 'The country the restaurant exists in' }),
  })
  .openapi({ required: [] })
  .openapi('RestaurantHoursChanged')

const RestaurantInformationUpdatedSchema = z
  .object({
    RestaurantInformationUpdated: z
      .object({
        RestaurantId: z
          .string()
          .exactOptional()
          .openapi({ description: 'The JUST EAT Restaurant Id' }),
        RestaurantInfo: z
          .object({
            address: z
              .object({
                city: z.string().exactOptional(),
                firstLine: z.string().exactOptional(),
                location: z
                  .object({ lat: z.float64().exactOptional(), lng: z.float64().exactOptional() })
                  .exactOptional()
                  .openapi({ required: [] }),
                postcode: z.string().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            allergenPhoneNumber: z.string().exactOptional(),
            allergenUrl: z.string().exactOptional(),
            alternativeOwnerName: z.string().exactOptional(),
            alternativeOwnerNumber: z.string().exactOptional(),
            brandName: z.string().exactOptional(),
            companyNo: z.string().exactOptional(),
            email: z.string().exactOptional(),
            id: z.int().exactOptional(),
            legalName: z.string().exactOptional(),
            logoUrl: z.string().exactOptional(),
            mobileNumber: z.string().exactOptional(),
            name: z.string().exactOptional(),
            openingClosingTimes: z
              .object({
                fridayClosed: z.boolean().exactOptional(),
                fridayClosingTimeOfDay: z.string().exactOptional(),
                fridayOpeningTimeOfDay: z.string().exactOptional(),
                mondayClosed: z.boolean().exactOptional(),
                mondayClosingTimeOfDay: z.string().exactOptional(),
                mondayOpeningTimeOfDay: z.string().exactOptional(),
                saturdayClosed: z.boolean().exactOptional(),
                saturdayClosingTimeOfDay: z.string().exactOptional(),
                saturdayOpeningTimeOfDay: z.string().exactOptional(),
                sundayClosed: z.boolean().exactOptional(),
                sundayClosingTimeOfDay: z.string().exactOptional(),
                sundayOpeningTimeOfDay: z.string().exactOptional(),
                thursdayClosed: z.boolean().exactOptional(),
                thursdayClosingTimeOfDay: z.string().exactOptional(),
                thursdayOpeningTimeOfDay: z.string().exactOptional(),
                tuesdayClosed: z.boolean().exactOptional(),
                tuesdayClosingTimeOfDay: z.string().exactOptional(),
                tuesdayOpeningTimeOfDay: z.string().exactOptional(),
                wednesdayClosed: z.boolean().exactOptional(),
                wednesdayClosingTimeOfDay: z.string().exactOptional(),
                wednesdayOpeningTimeOfDay: z.string().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            ownerName: z.string().exactOptional(),
            phoneNumber: z.string().exactOptional(),
            seoName: z.string().exactOptional(),
            signupReference: z.string().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        Tenant: z
          .string()
          .exactOptional()
          .openapi({ description: 'The country the restaurant exists in' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    event: z.literal('RestaurantInformationUpdated').exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RestaurantInformationUpdated')

const RestaurantOfflineStatus2Schema = z
  .object({
    Event: z.literal('RestaurantOfflineStatus').exactOptional(),
    RestaurantOfflineStatus: RestaurantOfflineStatusSchema.exactOptional(),
    RestaurantReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The JUST EAT Restaurant Id' }),
  })
  .openapi({ required: [] })
  .openapi('RestaurantOfflineStatus2')

const RestaurantStatusSchema = z
  .object({
    Event: z.literal('RestaurantStatusChange').exactOptional(),
    Message: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'This field should not be used but has been left in the callback for backwards compatibility purposes',
      }),
    RestaurantReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The JUST EAT Restaurant Id' }),
    Status: z.enum(['online', 'offline']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RestaurantStatus')

const RestaurantEmailAddressSchema = z
  .object({
    emailAddress: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The email address of the restaurant that the login link will be sent to',
      }),
  })
  .openapi({ required: [] })
  .openapi('RestaurantEmailAddress')

const SearchAddressSchema = z
  .object({
    City: z.string().exactOptional().openapi({ description: 'City the restaurant is in' }),
    FirstLine: z
      .string()
      .exactOptional()
      .openapi({ description: "First line of the restaurant's address" }),
    Latitude: z.float64().exactOptional().openapi({ description: 'Latitude of the restaurant' }),
    Longitude: z.float64().exactOptional().openapi({ description: 'Longitude of the restaurant' }),
    Postcode: z.string().exactOptional().openapi({ description: 'Postcode of the restaurant' }),
  })
  .openapi({ description: 'The address of the restaurant', required: [] })
  .openapi('SearchAddress')

const SearchRestaurant2Schema = z
  .object({
    Address: SearchAddressSchema.exactOptional().openapi({
      description: "The restaurant's address",
    }),
    DeliveryEtaMinutes: DeliveryEtaMinutesSchema.exactOptional().openapi({
      description: 'Information about the approximate delivery time',
    }),
    DriveDistance: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The distance to drive from restaurant to delivery location in miles',
      }),
    DriveInfoCalculated: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag indicating that the driving information has been calculated' }),
    Id: z.float64().exactOptional().openapi({ description: 'The id of the restaurant' }),
    IsOpenNowForDelivery: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates the restaurant is now open for delivery' }),
    Name: z.string().exactOptional().openapi({ description: 'The name of the restaurant' }),
    UniqueName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique name of the restaurant on Just Eat' }),
    Url: z
      .string()
      .exactOptional()
      .openapi({ description: "The URL of the restaurant's menu page" }),
  })
  .openapi({ required: [] })
  .openapi('SearchRestaurant2')

const SearchRestaurantsSchema = z
  .object({
    Restaurants: z
      .array(SearchRestaurant2Schema)
      .exactOptional()
      .openapi({ description: 'A list of restaurants matching the search criteria' }),
  })
  .openapi({ required: [] })
  .openapi('SearchRestaurants')

const SegmentationHistorySchema = z
  .object({
    dateAssessed: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date and time when the segmentation assessment was made' }),
    hasLocalLegendCriteriaBeenMet: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Represents if the restaurant achieved local legend status at that point or not',
      }),
    status: AssessmentStatusTypesSchema.exactOptional().openapi({
      description: 'The segmentation status for restaurant',
    }),
  })
  .openapi({
    description:
      'Represents list of last four segmentation statuses, sorted reverse chronologically by assessment date.',
    example: {
      dateAssessed: '2019-12-31T00:00:00Z',
      hasLocalLegendCriteriaBeenMet: true,
      status: 1,
    },
    required: [],
  })
  .openapi('SegmentationHistory')

const SegmentationHistoryListSchema = z
  .array(SegmentationHistorySchema)
  .openapi({
    description:
      'Represents list of last four segmentation statuses, sorted reverse chronologically by assessment date.',
  })
  .openapi('SegmentationHistoryList')

const SegmentationStatusDetailSchema = z
  .object({
    customerExperienceScore: CustomerExperienceScoreDetailSchema.exactOptional().openapi({
      description:
        'Details of how customer experience score has contributed to get the segmentation status',
    }),
    hygiene: HygieneScoreDetailSchema.exactOptional().openapi({
      description:
        'Details of hygiene rating experience score has contributed to get the segmentation status',
    }),
    onItsWayPercentage: OnItsWayPercentageSchema.exactOptional().openapi({
      description:
        'Details of how on its way experience score has contributed to get the segmentation status',
    }),
    orderScore: OrderScoreDetailSchema.exactOptional().openapi({
      description: 'Details of how order score has contributed to get the segmentation status',
    }),
  })
  .openapi({ description: 'Represent the details of segmentation status sub-scores', required: [] })
  .openapi('SegmentationStatusDetail')

const SegmentationStatusSchema = z
  .object({
    details: SegmentationStatusDetailSchema.exactOptional().openapi({
      description: 'Represent the details of segmentation status',
    }),
    id: z.number().exactOptional().openapi({ description: 'The JUST EAT restaurant id' }),
    lastUpdated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Timestamp of last status change' }),
    status: AssessmentStatusTypesSchema.exactOptional().openapi({
      description: 'The segmentation status for restaurant',
    }),
  })
  .openapi({ required: [] })
  .openapi('SegmentationStatus')

const SendToPosFailedSchema = z
  .object({ OrderId: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('SendToPosFailed')

const SupportRequest2Schema = z
  .object({
    body: z.string().exactOptional().openapi({ description: 'Detail of the request' }),
    orderid: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the order this request relates to' }),
    subject: z.string().exactOptional().openapi({ description: 'What is this request about?' }),
  })
  .openapi({ required: [] })
  .openapi('SupportRequest2')

const TenantsSchema = z.enum(['au', 'ca', 'dk', 'es', 'ie', 'it', 'nz', 'uk']).openapi('Tenants')

const UpdateOrderTimeRequest2Schema = z
  .object({
    lowerBoundMinutes: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Order time lower bound value, in minutes.' }),
    upperBoundMinutes: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Order time upper bound value, in minutes.' }),
  })
  .openapi({
    description: 'Request object for order time update',
    example: { lowerBoundMinutes: 35, upperBoundMinutes: 50 },
    required: [],
  })
  .openapi('UpdateOrderTimeRequest2')

const _401UnauthorizedResponseResponse = {
  description:
    'Unauthorized. The client did not provide an authentication token or the token was invalid',
  content: {
    'application/json': {
      schema: _4XXErrorSchemaSchema,
      example: {
        errors: [
          {
            description:
              'Unauthorized. The client did not provide an authentication token or the token was invalid.',
            errorCode: 'ERR401',
          },
        ],
        faultId: '25bbe062-c53d-4fbc-9d6c-3df6127b94fd',
        traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
      },
    },
  },
}

const _403ForbiddenResponseResponse = {
  description: 'Forbidden. The client is not allowed to perform this action',
  content: {
    'application/json': {
      schema: _4XXErrorSchemaSchema,
      example: {
        errors: [{ description: 'Forbidden' }],
        faultId: '25bbe062-c53d-4fbc-9d6c-3df6127b94fd',
        traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
      },
    },
  },
}

const _500ErrorResponseResponse = {
  description: 'Internal Server Error',
  content: {
    'application/json': {
      schema: _500ErrorSchemaSchema,
      example: {
        errors: [{ description: 'Internal Server Error' }],
        faultId: '25bbe062-c53d-4fbc-9d6c-3df6127b94fd',
        traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
      },
    },
  },
}

const RetryAfterHeaderSchema = z
  .string()
  .exactOptional()
  .openapi({
    description:
      'The Retry-After HTTP response header indicates how long the User Agent should wait before making a follow-up request',
    param: { required: false },
  })

const _503ServiceUnavailableResponseResponse = {
  description: 'Service Unavailable',
  content: {
    'application/json': {
      schema: _5XXErrorSchemaSchema,
      example: {
        errors: [{ description: 'Service Unavailable' }],
        faultId: '25bbe062-c53d-4fbc-9d6c-3df6127b94fd',
        traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
      },
    },
  },
  headers: z.object({ 'Retry-After': RetryAfterHeaderSchema }),
}

const ExpiresAfterHeaderSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({ description: 'date in UTC when token expires', param: { required: false } })

const BearerSecurityScheme = {
  bearerFormat: 'JWT',
  description: 'Bearer token authentication using a JSON Web Token (JWT).',
  scheme: 'bearer',
  type: 'http',
}

const ApiKeySecurityScheme = {
  description: 'APIs for delivery partners require an API key that will have been issued to you.',
  in: 'header',
  name: 'Authorization',
  type: 'apiKey',
}

const BasicAuthSecurityScheme = {
  description:
    "A few services allow the use of basic authentication when a partner doesn't support OAuth based authentication.",
  scheme: 'basic',
  type: 'http',
}

const JusteatAdfsSecurityScheme = {
  description: 'ADFS authentication provider for internal Just Eat tools.',
  openIdConnectUrl: 'https://adfs.just-eat.com/adfs/.well-known/openid-configuration',
  type: 'openIdConnect',
}

const RestaurantsignupJwtSecurityScheme = {
  bearerFormat:
    'JWT token with payload `RestaurantId` and Role `[RestaurantRead | VerifyEmail | RestaurantWrite | FullAccess | DocumentRead]`',
  description:
    'Bearer token authentication using a JSON Web Token (JWT), used by the restaurant sign up system',
  scheme: 'bearer',
  type: 'http',
}

export const postAcceptanceRequestedRoute = createRoute({
  method: 'post',
  path: '/acceptance-requested',
  tags: ['Order Acceptance Webhooks', 'publicly-accessible'],
  summary: 'Acceptance requested',
  description: 'This webhook will be invoked whenever acceptance has been requested for the order.',
  request: {
    body: {
      content: { 'application/json': { schema: AcceptanceRequestedSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Respond with a 200 status code to indicate that you have received the notification.',
    },
  },
})

export const putAttemptedDeliveryQueryResolvedRoute = createRoute({
  method: 'put',
  path: '/attempted-delivery-query-resolved',
  tags: ['Attempted Delivery Webhooks', 'publicly-accessible'],
  summary: 'Attempted delivery query resolved',
  description:
    'This webhook will be invoked whenever an attempted delivery query has been resolved.',
  request: {
    body: {
      content: { 'application/json': { schema: AttemptedDeliveryResolvedSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Respond with a 200 status code to indicate that you have received the notification.',
    },
  },
})

export const getCheckoutTenantCheckoutIdRoute = createRoute({
  method: 'get',
  path: '/checkout/{tenant}/{checkoutId}',
  tags: ['Checkout', 'publicly-accessible'],
  summary: 'Get Checkout',
  description:
    'Get the details required to fulfil an order, which includes:\n  - The restaurant selling the items to be purchased\n  - The customer making the purchase\n  - How, where and when the items will be received by the customer\n  - Instructions about the order\n',
  request: {
    params: z.object({
      tenant: z
        .string()
        .openapi({
          param: {
            description:
              'A two-character country code. \n\nThe following countries are supported:\n  - United Kingdom (UK)\n  - Australia (AU)\n  - New Zealand (NZ)\n',
            in: 'path',
            name: 'tenant',
            required: true,
            schema: { type: 'string' },
          },
        }),
      checkoutId: z
        .string()
        .openapi({
          param: {
            description: 'A unique identifier for a checkout. This is currently a Basket Id.',
            in: 'path',
            name: 'checkoutId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'User-Agent': z
        .string()
        .openapi({
          param: {
            description: 'Allows the server to identify the application making the request.',
            in: 'header',
            name: 'User-Agent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK : Request has succeeded.',
      content: {
        'application/json': {
          schema: CheckoutGetResponseSchema,
          example: {
            customer: { firstName: 'Joe', lastName: 'Bloggs', phoneNumber: '+447111111111' },
            fulfilment: {
              location: {
                address: {
                  administrativeArea: 'Somerset',
                  lines: ['1 Bristol Road'],
                  locality: 'Bristol',
                  postalCode: 'BS1 1AA',
                },
                geolocation: { latitude: 1, longitude: -1 },
              },
              time: {
                asap: false,
                scheduled: { from: '2020-01-01T00:30:00.000Z', to: '2020-01-01T00:30:00.000Z' },
              },
            },
            isFulfillable: true,
            issues: [
              { code: 'RESTAURANT_NOT_TAKING_ORDERS' },
              {
                additionalSpendRequired: 100,
                code: 'MINIMUM_ORDER_VALUE_NOT_MET',
                currency: 'GBP',
                minimumOrderValue: 1000,
              },
            ],
            restaurant: { availabilityId: '5678', id: '1234' },
            serviceType: 'delivery',
          },
        },
      },
      headers: z.object({
        'cache-control': {
          description: 'Response caching must not be applied.',
          schema: z
            .literal('no-store')
            .exactOptional()
            .openapi({
              description: 'Response caching must not be applied.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'BAD REQUEST : Cannot process the request due to error by client.',
      content: {
        'application/json': {
          schema: CheckoutGet400ErrorSchema,
          example: {
            fault: {
              errors: [{ description: 'The tenant is invalid', errorCode: 'TENANT_INVALID' }],
              faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
              traceId: '0HLOCKDKQPKIU',
            },
          },
        },
      },
    },
    401: {
      description: 'UNAUTHORIZED : Missing authentication credentials to access target resource.',
      content: {
        'application/json': {
          schema: CheckoutDefaultErrorSchema,
          example: {
            fault: {
              errors: [{ description: 'Authentication required to access this resource' }],
              faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
              traceId: '0HLOCKDKQPKIU',
            },
          },
        },
      },
    },
    403: {
      description: 'FORBIDDEN : Not authorised to access target resource.',
      content: {
        'application/json': {
          schema: CheckoutDefaultErrorSchema,
          example: {
            fault: {
              errors: [{ description: 'Access to the resource is forbidden' }],
              faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
              traceId: '0HLOCKDKQPKIU',
            },
          },
        },
      },
    },
    404: {
      description: 'NOT FOUND : Target resource could not be found.',
      content: {
        'application/json': {
          schema: Checkout404ErrorSchema,
          example: {
            fault: {
              errors: [
                { description: 'The tenant is not supported', errorCode: 'TENANT_NOT_SUPPORTED' },
              ],
              faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
              traceId: '0HLOCKDKQPKIU',
            },
          },
        },
      },
    },
    409: {
      description: 'CONFLICT : Request not completed as it conflicts with target resource.',
      content: {
        'application/json': {
          schema: Checkout409ErrorSchema,
          example: {
            fault: {
              errors: [
                {
                  description: 'The checkout is in an invalid state',
                  errorCode: 'CHECKOUT_INVALID',
                },
              ],
              faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
              traceId: '0HLOCKDKQPKIU',
            },
          },
        },
      },
    },
    429: {
      description:
        'TOO MANY REQUESTS : Request not completed as server has received too many requests in a given amount of time.',
      content: {
        'application/json': {
          schema: CheckoutDefaultErrorSchema,
          example: {
            fault: {
              errors: [{ description: "Couldn't complete request" }],
              faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
              traceId: '0HLOCKDKQPKIU',
            },
          },
        },
      },
    },
    500: {
      description:
        'INTERNAL SERVER ERROR : Error on server preventing request from being fulfilled.',
      content: {
        'application/json': {
          schema: CheckoutDefaultErrorSchema,
          example: {
            fault: {
              errors: [{ description: 'Internal Server Error' }],
              faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
              traceId: '0HLOCKDKQPKIU',
            },
          },
        },
      },
    },
    503: {
      description:
        'SERVICE UNAVAILABLE : Server currently unable to fulfil the request. The request can be retried.',
      content: {
        'application/json': {
          schema: CheckoutDefaultErrorSchema,
          example: {
            fault: {
              errors: [{ description: "Couldn't complete request" }],
              faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
              traceId: '0HLOCKDKQPKIU',
            },
          },
        },
      },
    },
  },
  security: [{ Bearer: [] }],
})

export const patchCheckoutTenantCheckoutIdRoute = createRoute({
  method: 'patch',
  path: '/checkout/{tenant}/{checkoutId}',
  tags: ['Checkout', 'publicly-accessible'],
  summary: 'Update Checkout',
  description:
    'Update the details required to fulfil an order, which includes:\n  - The customer making the purchase\n  - Where and when the items will be received by the customer\n  - Instructions about the order\n',
  request: {
    params: z.object({
      tenant: z
        .string()
        .openapi({
          param: {
            description:
              'A two-character country code. \n\nThe following countries are supported:\n  - United Kingdom (UK)\n  - Australia (AU)\n  - New Zealand (NZ)\n',
            in: 'path',
            name: 'tenant',
            required: true,
            schema: { type: 'string' },
          },
        }),
      checkoutId: z
        .string()
        .openapi({
          param: {
            description: 'A unique identifier for a checkout. This is currently a Basket Id.',
            in: 'path',
            name: 'checkoutId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'User-Agent': z
        .string()
        .openapi({
          param: {
            description: 'Allows the server to identify the application making the request.',
            in: 'header',
            name: 'User-Agent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json-patch+json': {
          schema: CheckoutUpdateRequestSchema,
          example: [
            {
              op: 'add',
              path: '/customer',
              value: { dateOfBirth: '1980-01-30', phoneNumber: '+447111111111' },
            },
          ],
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK : Request has succeeded.',
      content: {
        'application/json': {
          schema: CheckoutUpdateResponseSchema,
          example: {
            isFulfillable: true,
            issues: [
              { code: 'RESTAURANT_NOT_TAKING_ORDERS' },
              {
                additionalSpendRequired: 100,
                code: 'MINIMUM_ORDER_VALUE_NOT_MET',
                currency: 'GBP',
                minimumOrderValue: 1000,
              },
            ],
          },
        },
      },
      headers: z.object({
        'cache-control': {
          description: 'Response caching must not be applied.',
          schema: z
            .literal('no-store')
            .exactOptional()
            .openapi({
              description: 'Response caching must not be applied.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'BAD REQUEST : Cannot process the request due to error by client.',
      content: {
        'application/json': {
          schema: CheckoutUpdate400ErrorSchema,
          example: {
            fault: {
              errors: [{ description: 'The tenant is invalid', errorCode: 'TENANT_INVALID' }],
              faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
              traceId: '0HLOCKDKQPKIU',
            },
          },
        },
      },
    },
    401: {
      description: 'UNAUTHORIZED : Missing authentication credentials to access target resource.',
      content: {
        'application/json': {
          schema: CheckoutDefaultErrorSchema,
          example: {
            fault: {
              errors: [{ description: 'Authentication required to access this resource' }],
              faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
              traceId: '0HLOCKDKQPKIU',
            },
          },
        },
      },
    },
    403: {
      description: 'FORBIDDEN : Not authorised to access target resource.',
      content: {
        'application/json': {
          schema: CheckoutDefaultErrorSchema,
          example: {
            fault: {
              errors: [{ description: 'Access to the resource is forbidden' }],
              faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
              traceId: '0HLOCKDKQPKIU',
            },
          },
        },
      },
    },
    404: {
      description: 'NOT FOUND : Target resource could not be found.',
      content: {
        'application/json': {
          schema: Checkout404ErrorSchema,
          example: {
            fault: {
              errors: [
                { description: 'The tenant is not supported', errorCode: 'TENANT_NOT_SUPPORTED' },
              ],
              faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
              traceId: '0HLOCKDKQPKIU',
            },
          },
        },
      },
    },
    409: {
      description: 'CONFLICT : Request not completed as it conflicts with target resource.',
      content: {
        'application/json': {
          schema: Checkout409ErrorSchema,
          example: {
            fault: {
              errors: [
                {
                  description: 'The checkout is in an invalid state',
                  errorCode: 'CHECKOUT_INVALID',
                },
              ],
              faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
              traceId: '0HLOCKDKQPKIU',
            },
          },
        },
      },
    },
    429: {
      description:
        'TOO MANY REQUESTS : Request not completed as server has received too many requests in a given amount of time.',
      content: {
        'application/json': {
          schema: CheckoutDefaultErrorSchema,
          example: {
            fault: {
              errors: [{ description: "Couldn't complete request" }],
              faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
              traceId: '0HLOCKDKQPKIU',
            },
          },
        },
      },
    },
    500: {
      description:
        'INTERNAL SERVER ERROR : Error on server preventing request from being fulfilled.',
      content: {
        'application/json': {
          schema: CheckoutDefaultErrorSchema,
          example: {
            fault: {
              errors: [{ description: 'Internal Server Error' }],
              faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
              traceId: '0HLOCKDKQPKIU',
            },
          },
        },
      },
    },
    503: {
      description:
        'SERVICE UNAVAILABLE : Server currently unable to fulfil the request. The request can be retried.',
      content: {
        'application/json': {
          schema: CheckoutDefaultErrorSchema,
          example: {
            fault: {
              errors: [{ description: "Couldn't complete request" }],
              faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
              traceId: '0HLOCKDKQPKIU',
            },
          },
        },
      },
    },
  },
  security: [{ Bearer: [] }],
})

export const getCheckoutTenantCheckoutIdFulfilmentAvailabletimesRoute = createRoute({
  method: 'get',
  path: '/checkout/{tenant}/{checkoutId}/fulfilment/availabletimes',
  tags: ['Checkout', 'publicly-accessible'],
  summary: 'Get Available Fulfilment Times',
  description: 'Gets a collection of times for when an order can be fulfilled.',
  request: {
    params: z.object({
      tenant: z
        .string()
        .openapi({
          param: {
            description:
              'A two-character country code. \n\nThe following countries are supported:\n  - United Kingdom (UK)\n  - Australia (AU)\n  - New Zealand (NZ)\n',
            in: 'path',
            name: 'tenant',
            required: true,
            schema: { type: 'string' },
          },
        }),
      checkoutId: z
        .string()
        .openapi({
          param: {
            description: 'A unique identifier for a checkout. This is currently a Basket Id.',
            in: 'path',
            name: 'checkoutId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'User-Agent': z
        .string()
        .openapi({
          param: {
            description: 'Allows the server to identify the application making the request.',
            in: 'header',
            name: 'User-Agent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK : Request has succeeded.',
      content: {
        'application/json': {
          schema: GetAvailableFulfilmentTimesResponseSchema,
          example: {
            asapAvailable: true,
            times: [
              { from: '2020-01-01T00:30:00.000Z', to: '2020-01-01T00:45:00.000Z' },
              { from: '2020-01-01T00:45:00.000Z', to: '2020-01-01T01:00:00.000Z' },
            ],
          },
        },
      },
      headers: z.object({
        'cache-control': {
          description: 'Response caching must not be applied.',
          schema: z
            .literal('no-store')
            .exactOptional()
            .openapi({
              description: 'Response caching must not be applied.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'BAD REQUEST : Cannot process the request due to error by client.',
      content: {
        'application/json': {
          schema: CheckoutGet400ErrorSchema,
          example: {
            fault: {
              errors: [{ description: 'The tenant is invalid', errorCode: 'TENANT_INVALID' }],
              faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
              traceId: '0HLOCKDKQPKIU',
            },
          },
        },
      },
    },
    404: {
      description: 'NOT FOUND : Target resource could not be found.',
      content: {
        'application/json': {
          schema: Checkout404ErrorSchema,
          example: {
            fault: {
              errors: [
                { description: 'The tenant is not supported', errorCode: 'TENANT_NOT_SUPPORTED' },
              ],
              faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
              traceId: '0HLOCKDKQPKIU',
            },
          },
        },
      },
    },
    409: {
      description: 'CONFLICT : Request not completed as it conflicts with target resource.',
      content: {
        'application/json': {
          schema: AvailableFulfilmentTimes409ErrorSchema,
          example: {
            fault: {
              errors: [
                {
                  description: 'The fulfilment time bands are in an invalid state',
                  errorCode: 'FULFILMENT_TIME_BANDS_INVALID',
                },
              ],
              faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
              traceId: '0HLOCKDKQPKIU',
            },
          },
        },
      },
    },
    429: {
      description:
        'TOO MANY REQUESTS : Request not completed as server has received too many requests in a given amount of time.',
      content: {
        'application/json': {
          schema: CheckoutDefaultErrorSchema,
          example: {
            fault: {
              errors: [{ description: "Couldn't complete request" }],
              faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
              traceId: '0HLOCKDKQPKIU',
            },
          },
        },
      },
    },
    500: {
      description:
        'INTERNAL SERVER ERROR : Error on server preventing request from being fulfilled.',
      content: {
        'application/json': {
          schema: CheckoutDefaultErrorSchema,
          example: {
            fault: {
              errors: [{ description: 'Internal Server Error' }],
              faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
              traceId: '0HLOCKDKQPKIU',
            },
          },
        },
      },
    },
    503: {
      description:
        'SERVICE UNAVAILABLE : Server currently unable to fulfil the request. The request can be retried.',
      content: {
        'application/json': {
          schema: CheckoutDefaultErrorSchema,
          example: {
            fault: {
              errors: [{ description: "Couldn't complete request" }],
              faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
              traceId: '0HLOCKDKQPKIU',
            },
          },
        },
      },
    },
  },
})

export const getConsumersTenantRoute = createRoute({
  method: 'get',
  path: '/consumers/{tenant}',
  tags: ['Consumers', 'publicly-accessible'],
  summary: 'Get consumers details',
  description:
    'Currently this operation only supports retrieving a count of consumer accounts given an email address.',
  request: {
    params: z.object({
      tenant: z
        .string()
        .openapi({
          param: {
            description: 'The identifier for the tenant.',
            in: 'path',
            name: 'tenant',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      emailAddress: z
        .string()
        .openapi({
          param: {
            description: 'Email address of the consumer.',
            in: 'query',
            name: 'emailAddress',
            required: true,
            schema: { type: 'string' },
          },
        }),
      accountType: z
        .literal('registered')
        .default('registered')
        .openapi({
          param: {
            description:
              "The account type of the consumer - currently only 'registered' accounts are supported.",
            in: 'query',
            name: 'accountType',
            required: true,
            schema: { default: 'registered', enum: ['registered'], type: 'string' },
          },
        }),
      count: z
        .string()
        .openapi({
          param: {
            description:
              'Returns the number of consumers that matches the `emailAddress` and `accountType`. The query value should be empty, e.g. `/consumers/uk/?emailAddress=someone@email.com&accountType=registered&count`.',
            in: 'query',
            name: 'count',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/plain': { schema: z.int(), example: 1 } },
      headers: z.object({
        'cache-control': {
          description: 'Information about how the response can be cached.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Information about how the response can be cached.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request.',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [
              { description: 'The Email is missing or invalid.', errorCode: 'InvalidEmail' },
            ],
            faultId: '25bbe062-c53d-4fbc-9d6c-3df6127b94fd',
            traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
          },
        },
      },
    },
    404: {
      description: 'The specified tenant does not exist.',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [{ description: 'Tenant not found', errorCode: 'TenantNotFound' }],
            faultId: '25bbe062-c53d-4fbc-9d6c-3df6127b94fd',
            traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
          },
        },
      },
    },
    500: _500ErrorResponseResponse,
    501: {
      description: 'The operation has not been implemented',
      content: {
        'application/json': {
          schema: _5XXErrorSchemaSchema,
          example: {
            errors: [
              {
                description: 'Non-Count queries have not been implemented',
                errorCode: 'NotImplemented',
              },
            ],
            faultId: '25bbe062-c53d-4fbc-9d6c-3df6127b94fd',
            traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
          },
        },
      },
    },
  },
})

export const postConsumersTenantRoute = createRoute({
  method: 'post',
  path: '/consumers/{tenant}',
  tags: ['Consumers', 'publicly-accessible'],
  summary: 'Create consumer',
  description: 'Creates a consumer for the given tenant.',
  request: {
    params: z.object({
      tenant: z
        .string()
        .openapi({
          param: {
            description:
              'The identifier for the tenant. The only supported tenants are `uk`, `au` and `nz`',
            in: 'path',
            name: 'tenant',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ConsumerCreateSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Consumer created.',
      content: { 'application/json': { schema: ConsumerCreateResponseSchema } },
    },
    400: {
      description: 'Bad request.',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [{ description: 'Email is required.', errorCode: 'BadRequest' }],
            faultId: '25bbe062-c53d-4fbc-9d6c-3df6127b94fd',
            traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
          },
        },
      },
    },
    403: {
      description: 'Forbidden.',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [{ description: 'Not authorized to do this.', errorCode: 'Forbidden' }],
            faultId: '25bbe062-c53d-4fbc-9d6c-3df6127b94fd',
            traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
          },
        },
      },
    },
    404: {
      description: 'The specified tenant does not exist.',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [{ description: 'Tenant not found', errorCode: 'TenantNotFound' }],
            faultId: '25bbe062-c53d-4fbc-9d6c-3df6127b94fd',
            traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
          },
        },
      },
    },
    409: {
      description: 'The specified email already exists.',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [{ description: 'The specified email already exists', errorCode: 'Conflict' }],
            faultId: '25bbe062-c53d-4fbc-9d6c-3df6127b94fd',
            traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
          },
        },
      },
    },
    500: _500ErrorResponseResponse,
  },
})

export const getConsumersTenantMeCommunicationPreferencesRoute = createRoute({
  method: 'get',
  path: '/consumers/{tenant}/me/communication-preferences',
  tags: ['Consumers', 'publicly-accessible'],
  summary: 'Get communication preferences',
  description: 'Get all communication preferences for a given consumer.',
  request: {
    params: z.object({
      tenant: z
        .string()
        .openapi({
          param: {
            description: 'Request tenant.',
            in: 'path',
            name: 'tenant',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: CommunicationPreferencesSchema,
          example: { marketing: { isDefault: false, subscribedChannels: ['email', 'sms'] } },
        },
      },
      headers: z.object({
        'cache-control': {
          description: 'Information about how the response can be cached.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Information about how the response can be cached.',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [
              {
                description: 'You are unauthorized to perform this request.',
                errorCode: 'Unauthorized',
              },
            ],
            faultId: 'b39ae4c1-142f-4308-838d-1f01815e1cf1',
            traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [
              {
                description: 'You are forbidden from performing this request.',
                errorCode: 'Forbidden',
              },
            ],
            faultId: 'b39ae4c1-142f-4308-838d-1f01815e1cf1',
            traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [{ description: 'Tenant could not be found.', errorCode: 'NotFound' }],
            faultId: 'b39ae4c1-142f-4308-838d-1f01815e1cf1',
            traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
          },
        },
      },
    },
    500: _500ErrorResponseResponse,
  },
})

export const getConsumersTenantMeCommunicationPreferencesTypeRoute = createRoute({
  method: 'get',
  path: '/consumers/{tenant}/me/communication-preferences/{type}',
  tags: ['Consumers', 'publicly-accessible'],
  summary: "Get channel subscriptions for a given consumer's communication preference type",
  description: "Get channel subscriptions for a given consumer's communication preference type",
  request: {
    params: z.object({
      tenant: z
        .string()
        .openapi({
          param: {
            description: 'Request tenant.',
            in: 'path',
            name: 'tenant',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: CommunicationTypesSchema.openapi({
        param: {
          description: 'The type of communication preferences.',
          in: 'path',
          name: 'type',
          required: true,
          schema: { $ref: '#/components/schemas/CommunicationTypes' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: ChannelSubscriptionsWithDerivedFieldSchema,
          example: { isDefault: false, subscribedChannels: ['email', 'sms'] },
        },
      },
      headers: z.object({
        'cache-control': {
          description: 'Information about how the response can be cached.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Information about how the response can be cached.',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [
              {
                description: 'You are unauthorized to perform this request.',
                errorCode: 'Unauthorized',
              },
            ],
            faultId: 'b39ae4c1-142f-4308-838d-1f01815e1cf1',
            traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [
              {
                description: 'You are forbidden from performing this request.',
                errorCode: 'Forbidden',
              },
            ],
            faultId: 'b39ae4c1-142f-4308-838d-1f01815e1cf1',
            traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [{ description: 'Tenant could not be found.', errorCode: 'NotFound' }],
            faultId: 'b39ae4c1-142f-4308-838d-1f01815e1cf1',
            traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
          },
        },
      },
    },
    500: _500ErrorResponseResponse,
  },
})

export const putConsumersTenantMeCommunicationPreferencesTypeRoute = createRoute({
  method: 'put',
  path: '/consumers/{tenant}/me/communication-preferences/{type}',
  tags: ['Consumers', 'publicly-accessible'],
  summary:
    "Set only the channel subscriptions for a given consumer's communication preference type",
  description:
    "Set only the channel subscriptions for a given consumer's communication preference type. E.g., An empty list of subscribed Channels implies unsubscribe from all channels.",
  request: {
    params: z.object({
      tenant: z
        .string()
        .openapi({
          param: {
            description: 'Request tenant.',
            in: 'path',
            name: 'tenant',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: CommunicationTypesSchema.openapi({
        param: {
          description: 'The type of communication preferences.',
          in: 'path',
          name: 'type',
          required: true,
          schema: { $ref: '#/components/schemas/CommunicationTypes' },
        },
      }),
    }),
    body: {
      description: 'The list of channels that the consumer should be subscribed to.',
      content: {
        'application/json': {
          schema: ChannelSubscriptionsSchema,
          example: { subscribedChannels: ['email', 'sms'] },
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success', content: {} },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [
              {
                description: 'You are unauthorized to perform this request.',
                errorCode: 'Unauthorized',
              },
            ],
            faultId: 'b39ae4c1-142f-4308-838d-1f01815e1cf1',
            traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [{ description: 'Tenant could not be found.', errorCode: 'NotFound' }],
            faultId: 'b39ae4c1-142f-4308-838d-1f01815e1cf1',
            traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
          },
        },
      },
    },
    500: _500ErrorResponseResponse,
  },
})

export const postConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannelRoute =
  createRoute({
    method: 'post',
    path: '/consumers/{tenant}/me/communication-preferences/{type}/subscribedChannels/{channel}',
    tags: ['Consumers', 'publicly-accessible'],
    summary: 'Subscribe to a specific communication preference channel',
    description: 'Subscribe to a specific communication preference channel.',
    request: {
      params: z.object({
        tenant: z
          .string()
          .openapi({
            param: {
              description: 'Request tenant.',
              in: 'path',
              name: 'tenant',
              required: true,
              schema: { type: 'string' },
            },
          }),
        type: CommunicationTypesSchema.openapi({
          param: {
            description: 'The type of communication preferences.',
            in: 'path',
            name: 'type',
            required: true,
            schema: { $ref: '#/components/schemas/CommunicationTypes' },
          },
        }),
        channel: CommunicationChannelsSchema.openapi({
          param: {
            description: 'The channel.',
            in: 'path',
            name: 'channel',
            required: true,
            schema: { $ref: '#/components/schemas/CommunicationChannels' },
          },
        }),
      }),
      body: { content: {} },
    },
    responses: {
      204: { description: 'Success', content: {} },
      401: {
        description: 'Unauthorized',
        content: {
          'application/json': {
            schema: _4XXErrorSchemaSchema,
            example: {
              errors: [
                {
                  description: 'You are unauthorized to perform this request.',
                  errorCode: 'Unauthorized',
                },
              ],
              faultId: 'b39ae4c1-142f-4308-838d-1f01815e1cf1',
              traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
            },
          },
        },
      },
      403: {
        description: 'Forbidden',
        content: {
          'application/json': {
            schema: _4XXErrorSchemaSchema,
            example: {
              errors: [
                {
                  description: 'You are forbidden from performing this request.',
                  errorCode: 'Forbidden',
                },
              ],
              faultId: 'b39ae4c1-142f-4308-838d-1f01815e1cf1',
              traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
            },
          },
        },
      },
      404: {
        description: 'Not Found',
        content: {
          'application/json': {
            schema: _4XXErrorSchemaSchema,
            example: {
              errors: [{ description: 'Tenant could not be found.', errorCode: 'NotFound' }],
              faultId: 'b39ae4c1-142f-4308-838d-1f01815e1cf1',
              traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
            },
          },
        },
      },
      500: _500ErrorResponseResponse,
    },
  })

export const deleteConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannelRoute =
  createRoute({
    method: 'delete',
    path: '/consumers/{tenant}/me/communication-preferences/{type}/subscribedChannels/{channel}',
    tags: ['Consumers', 'publicly-accessible'],
    summary: 'Remove subscription of a specific communication preference channel',
    description: 'Remove subscription of a specific communication preference channel.',
    request: {
      params: z.object({
        tenant: z
          .string()
          .openapi({
            param: {
              description: 'Request tenant.',
              in: 'path',
              name: 'tenant',
              required: true,
              schema: { type: 'string' },
            },
          }),
        type: CommunicationTypesSchema.openapi({
          param: {
            description: 'The type of communication preference.',
            in: 'path',
            name: 'type',
            required: true,
            schema: { $ref: '#/components/schemas/CommunicationTypes' },
          },
        }),
        channel: z
          .string()
          .openapi({
            param: {
              description: 'The channel.',
              in: 'path',
              name: 'channel',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: {} },
    },
    responses: {
      204: { description: 'Success', content: {} },
      401: {
        description: 'Unauthorized',
        content: {
          'application/json': {
            schema: _4XXErrorSchemaSchema,
            example: {
              errors: [
                {
                  description: 'You are unauthorized to perform this request.',
                  errorCode: 'Unauthorized',
                },
              ],
              faultId: 'b39ae4c1-142f-4308-838d-1f01815e1cf1',
              traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
            },
          },
        },
      },
      404: {
        description: 'Not Found',
        content: {
          'application/json': {
            schema: _4XXErrorSchemaSchema,
            example: {
              errors: [{ description: 'Tenant could not be found.', errorCode: 'NotFound' }],
              faultId: 'b39ae4c1-142f-4308-838d-1f01815e1cf1',
              traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
            },
          },
        },
      },
      500: _500ErrorResponseResponse,
    },
  })

export const putDeliveryFailedRoute = createRoute({
  method: 'put',
  path: '/delivery-failed',
  tags: ['Attempted Delivery Webhooks', 'publicly-accessible'],
  summary: 'Delivery Attempt Failed',
  description:
    'This webhook will be invoked whenever an attempted delivery event is created from the device.',
  request: {
    body: {
      content: { 'application/json': { schema: AttemptedDeliveryCreatedSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Respond with a 200 status code to indicate that you have received the notification.',
    },
  },
})

export const getDeliveryFeesTenantRoute = createRoute({
  method: 'get',
  path: '/delivery-fees/{tenant}',
  tags: ['DeliveryFee', 'publicly-accessible'],
  summary: 'Get restaurant delivery fees',
  description:
    'Retrieve delivery fees for many restaurants. Returns fees and minimum order values required for delivery orders.',
  request: {
    params: z.object({
      tenant: z
        .string()
        .openapi({
          param: {
            description: 'Tenant containing the restaurants.',
            example: 'uk',
            in: 'path',
            name: 'tenant',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      restaurantIds: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()).max(200),
        )
        .openapi({
          param: {
            description:
              'Restaurant IDs which fees are requested for. e.g. `?restaurantIds=1,2,3,4`',
            example: ['1', '2', '3', '4'],
            explode: false,
            in: 'query',
            name: 'restaurantIds',
            required: true,
            schema: { items: { type: 'string' }, maxItems: 200, type: 'array' },
            style: 'form',
          },
        }),
      deliveryTime: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'Delivery date/time when fees are required (ISO8601 format).',
            example: '2019-09-05T12:43:48.431Z',
            in: 'query',
            name: 'deliveryTime',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      zone: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Postcode or other location name identifying the location to which delivery is required. For use when precise location is not available. This will be removed in future in favour of location.',
            example: 'BS1',
            in: 'query',
            name: 'zone',
            required: false,
            schema: { type: 'string' },
          },
        }),
      latlong: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z
            .array(
              z.preprocess(
                (val) =>
                  typeof val === 'string' &&
                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                    ? Number(val)
                    : val,
                z.float64(),
              ),
            )
            .length(2),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Point to which delivery is required (latitude, longitude). Supply this where possible as support for zone-only based lookups will be removed in future.',
            example: [51.3851513, -2.0841275],
            explode: false,
            in: 'query',
            name: 'latlong',
            required: false,
            schema: {
              items: { format: 'double', type: 'number' },
              maxItems: 2,
              minItems: 2,
              type: 'array',
            },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              restaurants: z
                .array(RestaurantDeliveryFeesSchema)
                .exactOptional()
                .openapi({
                  description: 'Collection of restaurants for which delivery fees were found.',
                }),
            })
            .nullable()
            .openapi({ required: [] }),
          examples: {
            flatRate: {
              summary: 'Single fee, with and without minimum order value',
              value: {
                restaurants: [
                  {
                    bands: [{ fee: 250, minimumAmount: 1000 }],
                    minimumOrderValue: 1000,
                    restaurantId: '1234',
                  },
                  {
                    bands: [{ fee: 100, minimumAmount: 0 }],
                    minimumOrderValue: 0,
                    restaurantId: '5678',
                  },
                ],
              },
            },
            flatRateWithFreeTier: {
              summary: 'Single fee with minimum order value, and free delivery threshold',
              value: {
                restaurants: [
                  {
                    bands: [
                      { fee: 250, minimumAmount: 1000 },
                      { fee: 0, minimumAmount: 2000 },
                    ],
                    minimumOrderValue: 1000,
                    restaurantId: '1234',
                  },
                ],
              },
            },
            threeTier: {
              summary: 'No minimum order value, three pricing tiers',
              value: {
                restaurants: [
                  {
                    bands: [
                      { fee: 250, minimumAmount: 0 },
                      { fee: 100, minimumAmount: 10 },
                      { fee: 0, minimumAmount: 2000 },
                    ],
                    minimumOrderValue: 0,
                    restaurantId: '1234',
                  },
                ],
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad request' },
    404: { description: 'Not found' },
  },
})

export const getDeliveryEstimateRoute = createRoute({
  method: 'get',
  path: '/delivery/estimate',
  tags: ['Order Delivery API', 'publicly-accessible'],
  summary: 'Get delivery estimate',
  description: 'Get delivery estimate',
  request: {
    query: z.object({
      restaurantReference: z
        .string()
        .openapi({
          param: {
            description: 'The reference of the restaurant to estimate the delivery time from.',
            in: 'query',
            name: 'restaurantReference',
            required: true,
            schema: { type: 'string' },
          },
        }),
      toLat: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The latitude of the position to estimate the delivery time to.',
            in: 'query',
            name: 'toLat',
            required: false,
            schema: { type: 'string' },
          },
        }),
      toLon: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The longitude of the position to estimate the delivery time to.',
            in: 'query',
            name: 'toLon',
            required: false,
            schema: { type: 'string' },
          },
        }),
      toPostcode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The postcode to estimate the delivery time to.',
            in: 'query',
            name: 'toPostcode',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: EstimatedDeliveryTimeSchema } },
    },
  },
  deprecated: true,
})

export const getDeliveryPoolsRoute = createRoute({
  method: 'get',
  path: '/delivery/pools',
  tags: ['Delivery Pools API', 'publicly-accessible'],
  summary: 'Get your delivery pools',
  description:
    'A delivery pool is a named group of drivers which deliver food for a set of restaurants.',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              'delivery-pool-id': z
                .object({
                  name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The name of the pool, used by operations teams, in reports, etc.',
                    }),
                  restaurants: z
                    .array(z.number())
                    .exactOptional()
                    .openapi({
                      description: 'A list of Just Eat restaurant ids served by the delivery pool.',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                b9c6673b8e5948b98cfbd14a982de2c2: { name: 'Toronto - East', restaurants: [789] },
                d5f72466a6dd49a08166d5a044c5b9e4: {
                  name: 'Toronto - West',
                  restaurants: [123, 456],
                },
              },
            },
          },
        },
      },
    },
    500: { description: 'Internal Server Error', content: {} },
  },
})

export const postDeliveryPoolsRoute = createRoute({
  method: 'post',
  path: '/delivery/pools',
  tags: ['Delivery Pools API', 'publicly-accessible'],
  summary: 'Create a new delivery pool',
  description:
    'A delivery pool is a named group of drivers which deliver food for a set of restaurants.',
  request: {
    body: { content: { 'application/json': { schema: CreateDeliveryPoolSchema } }, required: true },
  },
  responses: {
    201: { description: 'Pool has been created.' },
    400: {
      description: 'There was something invalid in your request - check response body for details',
      content: {},
    },
    500: { description: 'Internal Server Error', content: {} },
  },
})

export const getDeliveryPoolsDeliveryPoolIdRoute = createRoute({
  method: 'get',
  path: '/delivery/pools/{deliveryPoolId}',
  tags: ['Delivery Pools API', 'publicly-accessible'],
  summary: 'Get an individual delivery pool',
  description:
    'A delivery pool is a named group of drivers which deliver food for a set of restaurants.',
  request: {
    params: z.object({
      deliveryPoolId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier for the pool',
            in: 'path',
            name: 'deliveryPoolId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The name of the pool, used by operations teams, in reports, etc.',
                }),
              restaurants: z
                .array(z.number())
                .exactOptional()
                .openapi({
                  description: 'A list of Just Eat restaurant ids served by the delivery pool.',
                }),
            })
            .openapi({ required: [] }),
          examples: { response: { value: { name: 'Toronto - West', restaurants: [123, 456] } } },
        },
      },
    },
    404: { description: 'The pool could not be found' },
    500: { description: 'Internal Server Error', content: {} },
  },
})

export const putDeliveryPoolsDeliveryPoolIdRoute = createRoute({
  method: 'put',
  path: '/delivery/pools/{deliveryPoolId}',
  tags: ['Delivery Pools API', 'publicly-accessible'],
  summary: 'Replace an existing delivery pool',
  description: 'Replace an existing delivery pool changing all of its properties',
  request: {
    params: z.object({
      deliveryPoolId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier for the pool',
            in: 'path',
            name: 'deliveryPoolId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateDeliveryPoolSchema } }, required: true },
  },
  responses: {
    202: {
      description: 'Pool has been replaced',
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The name of the pool, used by operations teams, in reports, etc.',
                }),
              restaurants: z
                .array(z.number())
                .exactOptional()
                .openapi({
                  description: 'A list of Just Eat restaurant ids served by the delivery pool.',
                }),
            })
            .openapi({ required: [] }),
          examples: { response: { value: { name: 'Toronto - West', restaurants: [123, 456] } } },
        },
      },
    },
    400: {
      description: 'There was something invalid in your request - check response body for details',
      content: {},
    },
    404: { description: 'The pool could not be found' },
    409: {
      description: 'A restaurant in your request already belongs to another pool',
      content: {},
    },
    500: { description: 'Internal Server Error', content: {} },
  },
})

export const deleteDeliveryPoolsDeliveryPoolIdRoute = createRoute({
  method: 'delete',
  path: '/delivery/pools/{deliveryPoolId}',
  tags: ['Delivery Pools API', 'publicly-accessible'],
  summary: 'Delete a delivery pool',
  description: 'The restaurants will no longer be associated with the pool.',
  request: {
    params: z.object({
      deliveryPoolId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier for the pool',
            in: 'path',
            name: 'deliveryPoolId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Pool deleted' },
    404: { description: 'The pool could not be found' },
    500: { description: 'Internal Server Error', content: {} },
  },
})

export const patchDeliveryPoolsDeliveryPoolIdRoute = createRoute({
  method: 'patch',
  path: '/delivery/pools/{deliveryPoolId}',
  tags: ['Delivery Pools API', 'publicly-accessible'],
  summary: 'Modify a delivery pool',
  description: 'Modify a delivery pool, changing its name, restaurants or both',
  request: {
    params: z.object({
      deliveryPoolId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier for the pool',
            in: 'path',
            name: 'deliveryPoolId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'Request body should contain an object with either or both of the properties. If a property is not specified then the existing values are retained.',
      content: { 'application/json': { schema: PatchDeliveryPoolSchema } },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Pool has been updated',
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The name of the pool, used by operations teams, in reports, etc.',
                }),
              restaurants: z
                .array(z.number())
                .exactOptional()
                .openapi({
                  description: 'A list of Just Eat restaurant ids served by the delivery pool.',
                }),
            })
            .openapi({ required: [] }),
          examples: { response: { value: { name: 'Toronto - North', restaurants: [123, 456] } } },
        },
      },
    },
    400: {
      description: 'There was something invalid in your request - check response body for details',
      content: {},
    },
    404: { description: 'The pool could not be found' },
    409: {
      description: 'A restaurant in your request already belongs to another pool',
      content: {},
    },
    500: { description: 'Internal Server Error', content: {} },
  },
})

export const getDeliveryPoolsDeliveryPoolIdAvailabilityRelativeRoute = createRoute({
  method: 'get',
  path: '/delivery/pools/{deliveryPoolId}/availability/relative',
  tags: ['Delivery Pools API', 'publicly-accessible'],
  summary: 'Get availability for pickup',
  description:
    'Get the current amount of time it will take a driver to collect a new order from a restaurant in the pool.',
  request: {
    params: z.object({
      deliveryPoolId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier for the pool',
            in: 'path',
            name: 'deliveryPoolId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              bestGuess: z
                .string()
                .exactOptional()
                .openapi({ description: 'Your best estimation (hh:mm:ss)' }),
            })
            .openapi({ required: [] }),
          examples: { request: { value: { bestGuess: '00:35:00' } } },
        },
      },
    },
    404: { description: 'The pool could not be found' },
  },
})

export const putDeliveryPoolsDeliveryPoolIdAvailabilityRelativeRoute = createRoute({
  method: 'put',
  path: '/delivery/pools/{deliveryPoolId}/availability/relative',
  tags: ['Delivery Pools API', 'publicly-accessible'],
  summary: 'Set availability for pickup',
  description:
    'Set the average amount of time it will take a driver to collect a new order from a restaurant in the pool.',
  request: {
    params: z.object({
      deliveryPoolId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier for the pool',
            in: 'path',
            name: 'deliveryPoolId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EstimatedTimeSchema } }, required: true },
  },
  responses: {
    202: { description: 'Update will take effect shortly' },
    404: { description: 'The pool could not be found' },
  },
})

export const putDeliveryPoolsDeliveryPoolIdHoursRoute = createRoute({
  method: 'put',
  path: '/delivery/pools/{deliveryPoolId}/hours',
  tags: ['Delivery Pools API', 'publicly-accessible'],
  summary: 'Set the delivery pools daily start and end times',
  description:
    'Set the daily start and end times for a pool or set closed flag if the pool does not operate on that day. Start and end times for all days must be provided. Though the API accepts array of start and end times for each day, multiple start and end time for a day are not accepted. If the end time for a day is equal to or before start time, end time will be considered as time for the next day.',
  request: {
    params: z.object({
      deliveryPoolId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier for the pool',
            in: 'path',
            name: 'deliveryPoolId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeliveryPoolHoursSchema } }, required: true },
  },
  responses: {
    200: { description: 'Pool hours have been updated' },
    404: { description: 'The pool could not be found' },
  },
})

export const putDeliveryPoolsDeliveryPoolIdRestaurantsRoute = createRoute({
  method: 'put',
  path: '/delivery/pools/{deliveryPoolId}/restaurants',
  tags: ['Delivery Pools API', 'publicly-accessible'],
  summary: 'Add restaurants to an existing delivery pool',
  description: 'Add additional restaurants to a delivery pool',
  request: {
    params: z.object({
      deliveryPoolId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier for the pool',
            in: 'path',
            name: 'deliveryPoolId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: DeliveryRestaurantslistSchema,
          examples: { response: { value: { restaurants: [123, 456] } } },
        },
      },
    },
    400: {
      description: 'There was something invalid in your request - check response body for details',
    },
    404: { description: 'The pool could not be found' },
    409: {
      description:
        'The restaurants could not be added to the pool. Typically this is because they are already assigned to another pool',
    },
  },
})

export const deleteDeliveryPoolsDeliveryPoolIdRestaurantsRoute = createRoute({
  method: 'delete',
  path: '/delivery/pools/{deliveryPoolId}/restaurants',
  tags: ['Delivery Pools API', 'publicly-accessible'],
  summary: 'Remove restaurants from a delivery pool',
  description: 'Remove restaurants from a delivery pool',
  request: {
    params: z.object({
      deliveryPoolId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier for the pool',
            in: 'path',
            name: 'deliveryPoolId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              restaurants: z
                .array(z.number())
                .exactOptional()
                .openapi({
                  description: 'A list of Just Eat restaurant ids served by the delivery pool.',
                }),
            })
            .openapi({ example: { restaurants: [123, 456] }, required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Pool has been updated' },
    400: {
      description: 'There was something invalid in your request - check response body for details',
    },
    404: { description: 'The pool could not be found' },
  },
})

export const putDriverAssignedToDeliveryRoute = createRoute({
  method: 'put',
  path: '/driver-assigned-to-delivery',
  tags: ['Order Delivery Webhooks', 'publicly-accessible'],
  summary: 'Driver Assigned to Delivery',
  description: 'Driver Assigned to Delivery',
  request: {
    body: { content: { 'application/json': { schema: DriverStatusSchema } }, required: true },
  },
  responses: { 200: { description: 'OK' } },
})

export const putDriverAtDeliveryAddressRoute = createRoute({
  method: 'put',
  path: '/driver-at-delivery-address',
  tags: ['Order Delivery Webhooks', 'publicly-accessible'],
  summary: 'Driver at delivery address',
  description: 'Driver at delivery address',
  request: {
    body: { content: { 'application/json': { schema: DriverStatusSchema } }, required: true },
  },
  responses: { 200: { description: 'OK' } },
})

export const putDriverAtRestaurantRoute = createRoute({
  method: 'put',
  path: '/driver-at-restaurant',
  tags: ['Order Delivery Webhooks', 'publicly-accessible'],
  summary: 'Driver at restaurant',
  description: 'Driver at restaurant',
  request: {
    body: { content: { 'application/json': { schema: DriverStatusSchema } }, required: true },
  },
  responses: { 200: { description: 'OK' } },
})

export const putDriverHasDeliveredOrderRoute = createRoute({
  method: 'put',
  path: '/driver-has-delivered-order',
  tags: ['Order Delivery Webhooks', 'publicly-accessible'],
  summary: 'Driver has delivered order',
  description: 'Driver has delivered order',
  request: {
    body: { content: { 'application/json': { schema: DriverStatusSchema } }, required: true },
  },
  responses: { 200: { description: 'OK' } },
})

export const putDriverLocationRoute = createRoute({
  method: 'put',
  path: '/driver-location',
  tags: ['Order Delivery Webhooks', 'publicly-accessible'],
  summary: 'Driver Location',
  description: 'Driver Location',
  request: {
    body: { content: { 'application/json': { schema: DriverLocationSchema } }, required: true },
  },
  responses: { 200: { description: 'OK' } },
})

export const putDriverOnTheirWayToDeliveryAddressRoute = createRoute({
  method: 'put',
  path: '/driver-on-their-way-to-delivery-address',
  tags: ['Order Delivery Webhooks', 'publicly-accessible'],
  summary: 'Driver on their way to delivery address',
  description: 'Driver on their way to delivery address',
  request: {
    body: { content: { 'application/json': { schema: DriverStatusSchema } }, required: true },
  },
  responses: { 200: { description: 'OK' } },
})

export const postLateOrderCompensationQueryRoute = createRoute({
  method: 'post',
  path: '/late-order-compensation-query',
  tags: ['Consumer Queries Webhooks', 'publicly-accessible'],
  summary: 'late order compensation query, restaurant response required',
  description:
    'This webhook will be invoked when a late order compensation query has been raised and a restaurant response is required.',
  request: {
    body: {
      content: { 'application/json': { schema: LateOrderCompensationQuery2Schema } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Respond with a 200 status code to indicate that you have received the notification',
    },
  },
})

export const postLateOrderQueryRoute = createRoute({
  method: 'post',
  path: '/late-order-query',
  tags: ['Consumer Queries Webhooks', 'publicly-accessible'],
  summary: 'late order query, restaurant response required',
  description:
    'This webhook will be invoked when a late order query has been raised and a restaurant response is required.',
  request: {
    body: { content: { 'application/json': { schema: LateOrderQuerySchema } }, required: true },
  },
  responses: {
    200: {
      description:
        'Respond with a 200 status code to indicate that you have received the notification.',
    },
  },
})

export const postMenuIngestionCompleteRoute = createRoute({
  method: 'post',
  path: '/menu-ingestion-complete',
  tags: ['Restaurant Webhooks', 'publicly-accessible'],
  summary: 'Menu ingestion complete',
  description:
    'Callback to confirm that an attempt to ingest a menu has completed either successfully or unsuccessfully',
  request: {
    body: {
      content: { 'application/json': { schema: MenuIngestionCompleteSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postOrderAcceptedRoute = createRoute({
  method: 'post',
  path: '/order-accepted',
  tags: ['Order Acceptance Webhooks', 'publicly-accessible'],
  summary: 'Order accepted',
  description: 'This webhook will be invoked whenever the order was accepted.',
  request: {
    body: { content: { 'application/json': { schema: OrderAcceptedSchema } }, required: true },
  },
  responses: {
    200: {
      description:
        'Respond with a 200 status code to indicate that you have received the notification.',
    },
  },
})

export const postOrderCancelledRoute = createRoute({
  method: 'post',
  path: '/order-cancelled',
  tags: ['Order Acceptance Webhooks', 'publicly-accessible'],
  summary: 'Order cancelled',
  description: 'This webhook will be invoked whenever the order was cancelled.',
  request: {
    body: { content: { 'application/json': { schema: OrderCancelled2Schema } }, required: true },
  },
  responses: {
    200: {
      description:
        'Respond with a 200 status code to indicate that you have received the notification.',
    },
  },
})

export const postOrderEligibleForRestaurantCompensationRoute = createRoute({
  method: 'post',
  path: '/order-eligible-for-restaurant-compensation',
  tags: ['RestaurantQueries Webhooks', 'publicly-accessible'],
  summary: 'Order Eligible For Restaurant Compensation',
  description:
    'This webhook will be invoked for every cancelled order and it will inform if the order is eligible for compensation.\n',
  request: {
    body: {
      content: { 'application/json': { schema: OrderEligibleForRestaurantCompensationSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Respond with a 200 status code to indicate that you have received the notification.',
    },
  },
})

export const putOrderIsReadyForPickupRoute = createRoute({
  method: 'put',
  path: '/order-is-ready-for-pickup',
  tags: ['Order Delivery Webhooks', 'publicly-accessible'],
  summary: 'Order ready for pickup',
  description:
    '<p>The "Ready for pickup" event lets the delivery partner know that the food has been cooked and is now ready for collection up from the restaurant.</p><p>When this event is received, it is important that you let your driver know that the order should now be collected from inside the restaurant. For example, this driver notification could take the form of an in-app notification or an SMS message.</p><p>This communication is needed to support restaurants who are unable to accommodate drivers inside their premises, as it allows restaurants to notify drivers waiting outside that they should come inside to collect their order.</p><p>NB&semi; This event can be sent by the restaurant at any point after the order is accepted by the restaurant (for instance, this event may be sent before the driver has arrived at the restaurant).</p>',
  request: {
    body: { content: { 'application/json': { schema: ReadyForPickupSchema } }, required: true },
  },
  responses: {
    200: {
      description:
        'Upon successful receipt of the event, delivery partners should return a 200 HTTP status code indicating acknowledgement of transmission.',
    },
    default: {
      description:
        'In the unlikely case of unknown errors, JUST EAT will log a raw response. If possible, the response should have the following format',
      content: {
        'application/json': {
          schema: z
            .object({
              Details: z.string().exactOptional(),
              Message: z.string().exactOptional(),
              OrderId: z.string().exactOptional(),
              Timestamp: z.iso.datetime({ offset: true }).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postOrderReadyForPreparationAsyncRoute = createRoute({
  method: 'post',
  path: '/order-ready-for-preparation-async',
  tags: ['Order Webhooks', 'publicly-accessible'],
  summary: 'Order ready for preparation (async)',
  description:
    'This webhook will be invoked when we have determined that an order is ready for preparation. Upon receiving the request, you should perform any preparation-related activities, such as sending the order to the POS system / kitchen screen.\n**NOTE:** This version of the webhook is asynchronous, and we expect a response in two parts:\n  1. We expect an immediate `202` response from this webhook to denote that you have received the request;\n  2. Following that, we expect an [async callback](#section/Async-Webhooks) - indicating either success or failure of the operation. The body for the async callbacks are as below:\n  \n  **Success callback**\n  ```\n  {\n        "status": "Success",\n        "message": "Order successfully sent to POS",\n        "data": {}\n  }\n  ```\n  **Failure callback**\n  ```\n  {\n        "status": "Failure",\n        "message": "{errorMessage}",   // e.g. "The POS is currently in use"\n        "data": {}\n  }\n  ```\n',
  request: {
    body: {
      content: { 'application/json': { schema: OrderReadyForPreparationSchema } },
      required: true,
    },
  },
  responses: {
    202: {
      description:
        'Upon successful receipt of this event, a `202` status code should be returned, indicating the request has been accepted. You should then later respond with the result of processing this request, via the [callback URL](#section/Async-Webhooks) endpoint.',
    },
    400: {
      description:
        'Should the initial validation of the order fail, return a `400` status code. NOTE: In this instance we do not also expect a failure callback via the async callback URL.',
    },
  },
})

export const postOrderReadyForPreparationSyncRoute = createRoute({
  method: 'post',
  path: '/order-ready-for-preparation-sync',
  tags: ['Order Webhooks', 'publicly-accessible'],
  summary: 'Order ready for preparation (sync)',
  description:
    'This webhook will be invoked when we have determined that an order is ready for preparation. Upon receiving the request, you should perform any preparation-related activities, such as sending the order to the POS system / kitchen screen.\n',
  request: {
    body: {
      content: { 'application/json': { schema: OrderReadyForPreparationSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Respond with a 200 status code to indicate that you have received the notification.',
    },
  },
})

export const postOrderRejectedRoute = createRoute({
  method: 'post',
  path: '/order-rejected',
  tags: ['Order Acceptance Webhooks', 'publicly-accessible'],
  summary: 'Order rejected',
  description: 'This webhook will be invoked whenever the order was rejected.',
  request: {
    body: { content: { 'application/json': { schema: OrderRejectedSchema } }, required: true },
  },
  responses: {
    200: {
      description:
        'Respond with a 200 status code to indicate that you have received the notification.',
    },
  },
})

export const putOrderRequiresDeliveryAcceptanceRoute = createRoute({
  method: 'put',
  path: '/order-requires-delivery-acceptance',
  tags: ['Order Delivery Webhooks', 'publicly-accessible'],
  summary: 'Order requires delivery acceptance',
  description:
    'This webhook will be invoked when we have determined that an order is required acceptance for delivery. Upon receiving the request, the order should be scheduled for pickup by a courier/driver. We expect an immediate `201` response from this webhook to denote that you have received the request.',
  request: {
    body: { content: { 'application/json': { schema: ConnectorderListSchema } }, required: true },
  },
  responses: {
    201: {
      description:
        'In the event of successful handling of the request, a 201 status code should be returned, indicating acknowledgement of transmission success.',
    },
    default: {
      description:
        'In the case that the order cannot be accepted, an appropriate HTTP status code, such as 400 (Bad request) or 500 (Internal server error) should be returned.  In addition to the HTTP status code, a specific reason code and explanatory message should be provided within the response body',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z
                .array(
                  z
                    .object({
                      code: z
                        .enum([
                          'outside_hours',
                          'too_busy',
                          'too_far',
                          'not_supported',
                          'bad_address',
                          'bad_request',
                          'restaurant_not_configured',
                          'duplicate',
                          'other',
                        ])
                        .exactOptional()
                        .openapi({
                          description:
                            "<p>Each code should be selected from the following list of valid reasons.</p><table><tr><th>code</th><th>explanation</th></tr><tr><td>`outside_hours`</td><td>Delivery partner is closed and not accepting requests.</td></tr><tr><td>`too_busy`</td><td>Delivery partner does not have enough capacity to accept this request.</td></tr><tr><td>`too_far`</td><td>The customer is too far away from the restaurant, either by time or distance.</td></tr><tr><td>`not_supported`</td><td>Delivery partner is currently unable to deliver to the customer's location.</td></tr><tr><td>`bad_address`</td><td>The order contains an address that could not be processed or understood.</td></tr><tr><td>`bad_request`</td><td>The order format is invalid or the order contains required data or information that cannot be processed.</td></tr><tr><td>`restaurant_not_configured`</td><td>Delivery partner is not configured to accept requests for given restaurant.</td></tr><tr><td>`duplicate`</td><td>The request has already been processed before.</td></tr><tr><td>`other`</td><td>Any validation failure or unexpected error not covered by the above codes.</td></tr></table>",
                        }),
                      message: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            '<p>The accompanying message should, in each case, provide an explanation of the specific problem that was experienced.</p><br/><p>Please note that the accompanying explanatory text are part of the code is only intended as an explanation of each reason code - and should not be returned to us as the message.</p>',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postOrderTimeUpdatedRoute = createRoute({
  method: 'post',
  path: '/order-time-updated',
  tags: ['Restaurant Webhooks', 'publicly-accessible'],
  summary: 'Order time updated',
  description:
    'Callback to notify recipients that there has been a change to the restaurant order times for a given day and service type',
  request: {
    body: { content: { 'application/json': { schema: OrderTimeUpdatedSchema } }, required: true },
  },
  responses: { 200: { description: 'OK' } },
})

export const postOrdersRoute = createRoute({
  method: 'post',
  path: '/orders',
  tags: ['Order API', 'publicly-accessible'],
  summary: 'Create order',
  description: 'Create order',
  request: {
    headers: z.object({
      'x-je-api-version': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The api version to use. Version 2.0 is the only available version.',
            example: 2,
            in: 'header',
            name: 'x-je-api-version',
            required: false,
            schema: { default: 1, type: 'number' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OrderRequestV2Schema } }, required: true },
  },
  responses: {
    201: {
      description: 'Created',
      content: {
        'application/json': {
          schema: z.object({ OrderId: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: {
      description:
        'Bad Request - Request is for deprecated API version or has failed validation in some way - see response body for details',
    },
    409: {
      description: "Conflict - you've already told us about an order with this `OrderReference`",
      content: {
        'application/json': {
          schema: z.object({ OrderId: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const putOrdersDeliverystateDriverlocationRoute = createRoute({
  method: 'put',
  path: '/orders/deliverystate/driverlocation',
  tags: ['Order Delivery API', 'publicly-accessible'],
  summary: 'Update current driver locations (bulk upload)',
  description: 'Current driver location (bulk upload)',
  request: {
    body: {
      content: { 'application/json': { schema: BulkDeliveryDetailsListSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const putOrdersOrderIdAcceptRoute = createRoute({
  method: 'put',
  path: '/orders/{orderId}/accept',
  tags: ['Order Acceptance API', 'publicly-accessible'],
  summary: 'Accept order',
  description:
    "Call when an order has been accepted. An order can only be accepted if it hasn't previously been accepted, rejected, cancelled or ignored",
  request: {
    params: z.object({
      orderId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'orderId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: OrderAcceptRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK' },
    404: { description: 'Order could not be found' },
    409: {
      description:
        'Conflict. This order has either already been accepted, rejected or ignored by restaurant or cancelled by ops',
    },
  },
})

export const putOrdersOrderIdCancelRoute = createRoute({
  method: 'put',
  path: '/orders/{orderId}/cancel',
  tags: ['Order Acceptance API', 'publicly-accessible'],
  summary: 'Cancel order',
  description:
    'Call when an order has been cancelled by Ops. Cancelling an order overrides any previous accept/reject calls. This should not be used for restaurant rejection but only from Ops involvement',
  request: {
    params: z.object({
      orderId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'orderId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: OrderCancelRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK' },
    404: { description: 'Order could not be found' },
    409: { description: 'Conflict. This order has already been cancelled' },
  },
})

export const postOrdersOrderIdCompleteRoute = createRoute({
  method: 'post',
  path: '/orders/{orderId}/complete',
  tags: ['Order Acceptance API', 'publicly-accessible'],
  summary: 'Complete order',
  description:
    "Call when an order is complete. An order can only be marked as complete if it hasn't already been marked as cancelled or complete.",
  request: {
    params: z.object({
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the order to mark as complete',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No content - status updated successfully' },
    404: {
      description: 'Not found - order could not be found',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [{ description: 'Order could not be found' }],
            faultId: 'b6a1d658-dda4-41b6-a9a5-dbfb7ba7b2aa',
          },
        },
      },
    },
    409: {
      description: 'Conflict - this order has already been marked as cancelled or complete',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [
              {
                description:
                  'Order cannot be marked as complete because it is already marked as cancelled',
              },
            ],
            faultId: '9c63827b-6fad-46bf-9e9a-9aafec941824',
          },
        },
      },
    },
    500: _500ErrorResponseResponse,
  },
})

export const putOrdersOrderIdDeliverystateAtdeliveryaddressRoute = createRoute({
  method: 'put',
  path: '/orders/{orderId}/deliverystate/atdeliveryaddress',
  tags: ['Order Delivery API', 'publicly-accessible'],
  summary: 'Update order with driver at delivery address details',
  description:
    "<p>The _at delivery address_ callback should be sent when the driver thinks that they have arrived at the specified delivery address.</p><p>NB&semi; This callback should be distinct from the delivered callback, as Just Eat use this callback to understand how much time is spent locating the customer's address.</p>",
  request: {
    params: z.object({
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'Just Eat order identifier',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeliveryDetailsSchema } }, required: true },
  },
  responses: { 200: { description: 'OK' } },
})

export const putOrdersOrderIdDeliverystateAtrestaurantRoute = createRoute({
  method: 'put',
  path: '/orders/{orderId}/deliverystate/atrestaurant',
  tags: ['Order Delivery API', 'publicly-accessible'],
  summary: 'Update order with driver at restaurant details',
  description:
    'The _at restaurant_ callback should be sent when the driver arrives at the restaurant and is ready to collect the order.',
  request: {
    params: z.object({
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'Just Eat order identifier',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeliveryDriverDetailsWithEtaSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const putOrdersOrderIdDeliverystateAtrestaurantetaRoute = createRoute({
  method: 'put',
  path: '/orders/{orderId}/deliverystate/atrestauranteta',
  tags: ['Order Delivery API', 'publicly-accessible'],
  summary: "Update the driver's estimated time to arrive at the Restaurant",
  description:
    '<p>In the UK, this endpoint updates the estimated arrival time at the restaurant. This value can be overridden from other endpoints like <a href="https://uk.api.just-eat.io/docs#tag/Order-Delivery-API/paths/~1orders~1{orderId}~1deliverystate~1driverlocation/put">Driver Locations</a> </p> <p> This endpoint should be used to set initial at restaurant ETAs prior to driver assignment where available. The earlier a delivery partner is able to provide an estimate of when the driver will arrive at the restaurant the more likely it is that driver arrival and order preparation will be aligned. </p> <p> In other tenants (Not UK):Note that if set for a given order, this Eta will NOT be overridden by any other at restaurant ETAs provided in `DriverAssigned` or `DriverLocation` requests</p> <p>This value is significant since it informs when a restaurant is instructed to start preparing food. When the time remaining between current time and the estimated time of arrival becomes less than the restaurant\'s configured preparation time, food preparation is initiated</p>',
  request: {
    params: z.object({
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'Just Eat order identifier',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EtaEstimateSchema } }, required: true },
  },
  responses: { 200: { description: 'OK' } },
})

export const putOrdersOrderIdDeliverystateDeliveredRoute = createRoute({
  method: 'put',
  path: '/orders/{orderId}/deliverystate/delivered',
  tags: ['Order Delivery API', 'publicly-accessible'],
  summary: 'Update order with delivered details',
  description:
    'The _delivered_ callback should be sent when the driver has handed the food to the customer and completed the order.',
  request: {
    params: z.object({
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'Just Eat order identifier',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeliveryDetailsSchema } }, required: true },
  },
  responses: { 200: { description: 'OK' } },
})

export const putOrdersOrderIdDeliverystateDriverassignedRoute = createRoute({
  method: 'put',
  path: '/orders/{orderId}/deliverystate/driverassigned',
  tags: ['Order Delivery API', 'publicly-accessible'],
  summary: 'Update order with driver assigned details',
  description:
    'The _driver assigned_ callback should be sent when a driver is assigned to the order. It should communicate important details about the driver - and also an estimated time for the driver to arrive at the restaurant and delivery address.',
  request: {
    params: z.object({
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'Just Eat order identifier',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeliveryDriverAssignedDetailsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const putOrdersOrderIdDeliverystateDriverlocationRoute = createRoute({
  method: 'put',
  path: '/orders/{orderId}/deliverystate/driverlocation',
  tags: ['Order Delivery API', 'publicly-accessible'],
  summary: "Update the driver's current location",
  description:
    "<p>Just Eat requires all delivery partners to send regular driver location callbacks, that record the GPS location of the drivers assigned to each order</p><p>Partners should aim to supply this callback approximately every 10 seconds.</p><p>Please provide an up-to-date ETA for when the driver will reach the restaurant in this request - this value is significant since it informs when a restaurant is instructed to start preparing food - when the time remaining between current time and the estimated time of arrival becomes less than the restaurant's configured preparation time, food preparation is initiated</p><p>Note that at restaurant Eta provided in this request will NOT override any ETA set in the Driver At Restaurant Eta request</p>",
  request: {
    params: z.object({
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'Just Eat order identifier',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeliveryDriverLocationSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const putOrdersOrderIdDeliverystateDriverunassignedRoute = createRoute({
  method: 'put',
  path: '/orders/{orderId}/deliverystate/driverunassigned',
  tags: ['Order Delivery API', 'publicly-accessible'],
  summary: 'Update order with driver unassigned details',
  description:
    'The _driver unassigned_ callback should be sent when a driver is unassigned from the order. It may details about the reason for cancelling the assignment, the driver details, and any newer at restaurant and customer estimations.',
  request: {
    params: z.object({
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'Just Eat order identifier',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeliveryDriverUnassignedDetailsSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK' },
    400: {
      description: 'Bad Request.',
      content: {
        'application/json': {
          schema: ExtensibleObjectSchema,
          example: { partnerId: ['Partner id was not found or could not be parsed'] },
        },
      },
    },
  },
})

export const putOrdersOrderIdDeliverystateOnitswayRoute = createRoute({
  method: 'put',
  path: '/orders/{orderId}/deliverystate/onitsway',
  tags: ['Order Delivery API', 'publicly-accessible'],
  summary: 'Update order with driver on its way details',
  description:
    "The _on its way_ callback should be sent when the driver departs the restaurant with the customer's order. It should contain an ETA that records when the driver expects to arrive at the customer's address.",
  request: {
    params: z.object({
      orderId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'orderId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: OnItsWayDetailsSchema } }, required: true },
  },
  responses: { 200: { description: 'OK' } },
})

export const putOrdersOrderIdDuedateRoute = createRoute({
  method: 'put',
  path: '/orders/{orderId}/duedate',
  tags: ['Order Acceptance API', 'publicly-accessible'],
  summary: 'Update order ETA',
  description:
    'Use this to update the estimated time of arrival for an order (i.e. when you expect the customer to receive the food). NOTE: An initial estimate is given [upon acceptance](#/paths/~1orders~1{orderId}~1accept/put). This endpoint can be used to update that estimate.\n',
  request: {
    params: z.object({
      orderId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'orderId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: OrderDueDateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK' },
    400: {
      description:
        'The due date is missing, or out of range (either in the past, or > 7 days in the future).',
    },
    404: { description: 'The order could not be found.' },
  },
})

export const putOrdersOrderIdIgnoreRoute = createRoute({
  method: 'put',
  path: '/orders/{orderId}/ignore',
  tags: ['Order Acceptance API', 'publicly-accessible'],
  summary: 'Ignore order',
  description:
    "Call when an order has been ignored by restaurant. An order can only be ignored if it hasn't previously been accepted, rejected, cancelled or ignored",
  request: {
    params: z.object({
      orderId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'orderId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK' },
    404: { description: 'Order could not be found' },
    409: {
      description:
        'Conflict. This order has either already been accepted, rejected or ignored by restaurant or cancelled by ops',
    },
  },
})

export const postOrdersOrderIdReadyforcollectionRoute = createRoute({
  method: 'post',
  path: '/orders/{orderId}/readyforcollection',
  tags: ['Order Acceptance API', 'publicly-accessible'],
  summary: 'Mark order as ready for collection',
  description:
    'Call when a collection order is ready to be collected by the customer. An order can only be marked as ready for collection if it is a collection order in the accepted state.',
  request: {
    params: z.object({
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the order to mark as ready for collection',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No content - status updated successfully' },
    400: {
      description:
        'Bad request - order cannot be marked as ready for collection because it is not a collection order',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [
              {
                description:
                  'Order cannot be marked as ready for collection because it is not a collection order',
              },
            ],
            faultId: 'aa5d282c-498e-47dd-acca-d4bb811a8f9d',
          },
        },
      },
    },
    404: {
      description: 'Not found - order could not be found',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [{ description: 'Order could not be found' }],
            faultId: '15c27f5b-5121-4c1f-bea3-34378dff2a79',
          },
        },
      },
    },
    409: {
      description: 'Conflict - this order is not in the accepted state',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [
              {
                description:
                  'Order cannot be marked as ready for collection because it is already marked as complete',
              },
            ],
            faultId: '9c63827b-6fad-46bf-9e9a-9aafec941824',
          },
        },
      },
    },
    500: _500ErrorResponseResponse,
  },
})

export const putOrdersOrderIdRejectRoute = createRoute({
  method: 'put',
  path: '/orders/{orderId}/reject',
  tags: ['Order Acceptance API', 'publicly-accessible'],
  summary: 'Reject order',
  description:
    "Call when an order has been rejected. An order can only be rejected if it hasn't previously been accepted, rejected, cancelled or ignored",
  request: {
    params: z.object({
      orderId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'orderId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: OrderRejectRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK' },
    404: { description: 'Order could not be found' },
    409: {
      description:
        'Conflict. This order has either already been accepted, rejected or ignored by restaurant or cancelled by ops',
    },
  },
})

export const postOrdersTenantOrderIdConsumerqueriesLateorderRestaurantresponseRoute = createRoute({
  method: 'post',
  path: '/orders/{tenant}/{orderId}/consumerqueries/lateorder/restaurantresponse',
  tags: ['ConsumerQueries', 'publicly-accessible'],
  summary: 'Response to Late Order Update Request',
  description:
    'If a customer has requested an update on the status of a late order, a response can be given by calling this endpoint.',
  request: {
    params: z.object({
      tenant: z
        .string()
        .openapi({
          param: {
            description: 'Request tenant.',
            in: 'path',
            name: 'tenant',
            required: true,
            schema: { type: 'string' },
          },
        }),
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'Id for the order.',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            description: 'Containing a partner issued API key e.g. `JE-API-KEY ABCDE123456789`',
            in: 'header',
            name: 'Authorization',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'An object for updating the status of a late order query with the amount of time to add to the delivery estimate in minutes (optional)',
      content: {
        'application/json': {
          schema: LateOrderRestaurantResponseSchema,
          example: { additionalDeliveryTimeToAddMinutes: 5, lateOrderStatus: 'OnItsWay' },
        },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'Accepted' },
    400: {
      description:
        'Bad Request. Returned if the request is invalid i.e. missing a required parameters',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [
              {
                description:
                  'Justification notes are required for this query. Query Type:type Tenant:tenant QueryId:queryId OrderId:orderId',
                errorCode: 'BadRequest',
              },
            ],
            faultId: '25bbe062-c53d-4fbc-9d6c-3df6127b94fd',
            traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized. Consumer is not authorized to modify the resource',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [{ description: 'Unauthorized.', errorCode: 'Unauthorized' }],
            faultId: '25bbe062-c53d-4fbc-9d6c-3df6127b94fd',
            traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
          },
        },
      },
    },
    404: {
      description: 'Not Found. Order query or Order not found',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [{ description: 'Order 1234 was not found', errorCode: 'NotFound' }],
            faultId: '25bbe062-c53d-4fbc-9d6c-3df6127b94fd',
            traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
          },
        },
      },
    },
    409: {
      description: 'Conflict. Query not in state to accept response',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [
              {
                description: 'Query 1234 cannot be responded to at this time',
                errorCode: 'Conflict',
              },
            ],
            faultId: '25bbe062-c53d-4fbc-9d6c-3df6127b94fd',
            traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
          },
        },
      },
    },
    500: _500ErrorResponseResponse,
  },
})

export const postOrdersTenantOrderIdConsumerqueriesLateordercompensationRestaurantresponseRoute =
  createRoute({
    method: 'post',
    path: '/orders/{tenant}/{orderId}/consumerqueries/lateordercompensation/restaurantresponse',
    tags: ['ConsumerQueries', 'publicly-accessible'],
    summary: 'Update late order compensation request with Restaurant response',
    description:
      'If a customer has requested compensation for a late order, a restaurant response is given by calling this endpoint.',
    request: {
      params: z.object({
        tenant: z
          .string()
          .openapi({
            param: {
              description: 'Request tenant.',
              in: 'path',
              name: 'tenant',
              required: true,
              schema: { type: 'string' },
            },
          }),
        orderId: z
          .string()
          .openapi({
            param: {
              description: 'Id for the order.',
              in: 'path',
              name: 'orderId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      headers: z.object({
        Authorization: z
          .string()
          .openapi({
            param: {
              description: 'Containing a partner issued API key e.g. `JE-API-KEY ABCDE123456789`',
              in: 'header',
              name: 'Authorization',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        description:
          'The restaurant response to a late order compensation request. Indicates either a monetary amount (when the compensation is accepted); or a rejection reason (when compensation is rejected).',
        content: {
          'application/json': { schema: LateOrderCompensationRestaurantResolutionSchema },
        },
        required: true,
      },
    },
    responses: {
      202: { description: 'Accepted' },
      400: {
        description:
          'Bad Request. Returned if the request is invalid - e.g. contains missing or invalid parameters.',
        content: {
          'application/json': {
            schema: _4XXErrorSchemaSchema,
            example: {
              errors: [
                {
                  description: 'A reason is required when compensation is rejected.',
                  errorCode: 'BadRequest',
                },
              ],
              faultId: '25bbe062-c53d-4fbc-9d6c-3df6127b94fd',
              traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
            },
          },
        },
      },
      401: {
        description: 'Unauthorized. Consumer is not authorized to modify the resource',
        content: {
          'application/json': {
            schema: _4XXErrorSchemaSchema,
            example: {
              errors: [{ description: 'Unauthorized.', errorCode: 'Unauthorized' }],
              faultId: '25bbe062-c53d-4fbc-9d6c-3df6127b94fd',
              traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
            },
          },
        },
      },
      404: {
        description: 'Not Found. Order query or Order not found',
        content: {
          'application/json': {
            schema: _4XXErrorSchemaSchema,
            example: {
              errors: [{ description: 'Order 1234 was not found', errorCode: 'NotFound' }],
              faultId: '25bbe062-c53d-4fbc-9d6c-3df6127b94fd',
              traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
            },
          },
        },
      },
      409: {
        description: 'Conflict. Query not in state to accept response',
        content: {
          'application/json': {
            schema: _4XXErrorSchemaSchema,
            example: {
              errors: [
                {
                  description: 'Query 1234 cannot be responded to at this time',
                  errorCode: 'Conflict',
                },
              ],
              faultId: '25bbe062-c53d-4fbc-9d6c-3df6127b94fd',
              traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
            },
          },
        },
      },
      500: _500ErrorResponseResponse,
    },
  })

export const postOrdersTenantOrderIdRestaurantqueriesCompensationRoute = createRoute({
  method: 'post',
  path: '/orders/{tenant}/{orderId}/restaurantqueries/compensation',
  tags: ['RestaurantQueries', 'publicly-accessible'],
  summary: 'Create Compensation requests',
  description:
    'When an order is cancelled the restaurant might be eligible for compensation, this endpoint allows a request for compensation to be created.',
  request: {
    params: z.object({
      tenant: z
        .string()
        .openapi({
          param: {
            description: 'Request tenant.',
            in: 'path',
            name: 'tenant',
            required: true,
            schema: { type: 'string' },
          },
        }),
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'Id for the order.',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            description: 'Containing a partner issued API key e.g. `JE-API-KEY ABCDE123456789`',
            in: 'header',
            name: 'Authorization',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'An object for providing the reason that the compensation is being created',
      content: { 'application/json': { schema: CreateRestaurantCompensationQuerySchema } },
      required: true,
    },
  },
  responses: {
    201: { description: 'Created' },
    400: {
      description:
        'Bad Request - returned if providing invalid data such as an unacceptable reason code',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [
              {
                description: 'The value provided in the field ReasonCode is invalid',
                errorCode: 'InvalidReasonCode',
              },
              { description: 'Comments field is too long, max 1000', errorCode: 'CommentsTooLong' },
            ],
            faultId: '25bbe062-c53d-4fbc-9d6c-3df6127b94fd',
            traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized - consumer has not provided the necessary credentials',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [{ description: 'Invalid credentials', errorCode: 'Unauthorized' }],
            faultId: '25bbe062-c53d-4fbc-9d6c-3df6127b94fd',
            traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
          },
        },
      },
    },
    403: {
      description:
        'Forbidden - credentials provided by consumer do not allow access to this resource',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [
              {
                description:
                  "The credentials provided doesn't have permissions to perform the request",
                errorCode: 'Forbidden',
              },
            ],
            faultId: '25bbe062-c53d-4fbc-9d6c-3df6127b94fd',
            traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
          },
        },
      },
    },
    404: {
      description: 'Resource not found',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [{ description: 'Resource not found', errorCode: 'NotFound' }],
            faultId: '25bbe062-c53d-4fbc-9d6c-3df6127b94fd',
            traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
          },
        },
      },
    },
    409: {
      description:
        'Conflict - returned if tried to claim compensation for an order that is not eligible',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [
              {
                description: 'This order is not eligible for compensation',
                errorCode: 'OrderNotEligible',
              },
              {
                description: 'A compensation request has already been requested for this order',
                errorCode: 'CompensationAlreadyExists',
              },
            ],
            faultId: '25bbe062-c53d-4fbc-9d6c-3df6127b94fd',
            traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
          },
        },
      },
    },
    500: _500ErrorResponseResponse,
  },
})

export const putRedeliveryRequestedRoute = createRoute({
  method: 'put',
  path: '/redelivery-requested',
  tags: ['Order Acceptance Webhooks', 'publicly-accessible'],
  summary: 'Customer Requested Redelivery',
  description:
    'This webhook will be invoked whenever the customer responds to the attempted delivery notification.',
  request: {
    body: {
      content: { 'application/json': { schema: AttemptedDeliveryResponseReceivedSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Respond with a 200 status code to indicate that you have received the notification.',
    },
  },
})

export const putRestaurantOfflineStatusRoute = createRoute({
  method: 'put',
  path: '/restaurant-offline-status',
  tags: ['Restaurant Events Webhooks', 'publicly-accessible'],
  summary: 'Restaurant Offline Status',
  description:
    "Callback to notify that a restaurant has been taken offline through an active Restaurant Event or there's been a change in whether the restaurant can override a previous offline status.",
  request: {
    body: {
      content: { 'application/json': { schema: RestaurantOfflineStatusSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const putRestaurantOnlineStatusRoute = createRoute({
  method: 'put',
  path: '/restaurant-online-status',
  tags: ['Restaurant Events Webhooks', 'publicly-accessible'],
  summary: 'Restaurant Online Status',
  description:
    'Callback to notify that a restaurant is now able to come back online as there are no longer any active offline Restaurant Events',
  request: {
    body: {
      content: { 'application/json': { schema: RestaurantOfflineStatusSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getRestaurantsBylatlongRoute = createRoute({
  method: 'get',
  path: '/restaurants/bylatlong',
  tags: ['Restaurants', 'publicly-accessible'],
  summary: 'Get restaurants by location',
  description: 'Provides details of all restaurants that deliver to the specified location',
  operationId: 'SearchByLocation',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            description: 'OAuth2 token issued for logged in consumer or API key issued to partner',
            in: 'header',
            name: 'Authorization',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'Accept-Tenant': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A valid country code, e.g. "uk". Filter search results to only include restaurants for the specified country. Required when using OAuth for authentication.',
            in: 'header',
            name: 'Accept-Tenant',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      latitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description:
              'Filter search results to only include restaurants that deliver to the specified location',
            in: 'query',
            name: 'latitude',
            required: true,
            schema: { type: 'number' },
            'x-position': 1,
          },
        }),
      longitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description:
              'Filter search results to only include restaurants that deliver to the specified location',
            in: 'query',
            name: 'longitude',
            required: true,
            schema: { type: 'number' },
            'x-position': 2,
          },
        }),
      cuisine: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter search results to only include restaurants that offer the specified cuisine',
            in: 'query',
            name: 'cuisine',
            required: false,
            schema: { type: 'string' },
            'x-position': 3,
          },
        }),
      restaurantName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter search results to only include restaurants that have a name that matches the specified value',
            in: 'query',
            name: 'restaurantName',
            required: false,
            schema: { type: 'string' },
            'x-position': 4,
          },
        }),
      brandName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter search results to only include restaurants of the specified brand',
            in: 'query',
            name: 'brandName',
            required: false,
            schema: { type: 'string' },
            'x-position': 5,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.xor([
            SearchResponseSchema,
            ExternalSearchResponseSchema,
            SearchWebResponseSchema,
          ]),
        },
      },
      headers: z.object({
        'cache-control': {
          description: 'Information about how the response can be cached.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Information about how the response can be cached.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z.object({}),
          example: {
            Message: 'The request is invalid.',
            ModelState: { Longitude: ["The value 'nan' is not valid for Longitude."] },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z.object({}),
          example: { message: 'No API key found in request' },
        },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': {
          schema: z.object({}),
          example: {
            ExceptionMessage: 'Object reference not set to an instance of an object.',
            ExceptionType: 'System.NullReferenceException',
            Message: 'An error has occurred.',
            StackTrace:
              '   at JE.SearchOrchestrator.Controllers.Filters.CacheControlFilter.OnActionExecuted(HttpActionExecutedContext actionExecutedContext) in \\\\Mac\\Home\\Documents\\GitHub\\SearchOrchestrator\\src\\JE.SearchOrchestrator\\Controllers\\Filters\\CacheControlFilter.cs:line 18\r\n   at System.Web.Http.Filters.ActionFilterAttribute.OnActionExecutedAsync(HttpActionExecutedContext actionExecutedContext, CancellationToken cancellationToken)\r\n--- End of stack',
          },
        },
      },
    },
  },
})

export const getRestaurantsBypostcodePostcodeRoute = createRoute({
  method: 'get',
  path: '/restaurants/bypostcode/{postcode}',
  tags: ['Restaurants', 'publicly-accessible'],
  summary: 'Get restaurants by postcode',
  description: 'Provides details of restaurants that deliver to the specified postcode',
  operationId: 'SearchByPostcode',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'OAuth2 token issued for logged in consumer or API key issued to partner',
            in: 'header',
            name: 'Authorization',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'Accept-Tenant': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A valid country code, e.g. "uk". Filter search results to only include restaurants for the specified country. Required when using OAuth for authentication.',
            in: 'header',
            name: 'Accept-Tenant',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      postcode: z
        .string()
        .openapi({
          param: {
            description:
              'Filter search results to only include restaurants that deliver to the specified postcode',
            in: 'path',
            name: 'postcode',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      cuisine: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter search results to only include restaurants that offer the specified cuisine',
            in: 'query',
            name: 'cuisine',
            required: false,
            schema: { type: 'string' },
            'x-position': 1,
          },
        }),
      restaurantName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter search results to only include restaurants that have a name that matches the specified value',
            in: 'query',
            name: 'restaurantName',
            required: false,
            schema: { type: 'string' },
            'x-position': 2,
          },
        }),
      brandName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter search results to only include restaurants of the specified brand',
            in: 'query',
            name: 'brandName',
            required: false,
            schema: { type: 'string' },
            'x-position': 3,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.xor([
            SearchResponseSchema,
            ExternalSearchResponseSchema,
            SearchWebResponseSchema,
          ]),
        },
      },
      headers: z.object({
        'cache-control': {
          description: 'Information about how the response can be cached.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Information about how the response can be cached.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z.object({}),
          example: {
            Message: 'The request is invalid.',
            ModelState: { Postcode: ['Invalid Postcode.'] },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z.object({}),
          example: { message: 'No API key found in request' },
        },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': {
          schema: z.object({}),
          example: {
            ExceptionMessage: 'Object reference not set to an instance of an object.',
            ExceptionType: 'System.NullReferenceException',
            Message: 'An error has occurred.',
            StackTrace:
              '   at JE.SearchOrchestrator.Controllers.Filters.CacheControlFilter.OnActionExecuted(HttpActionExecutedContext actionExecutedContext) in \\\\Mac\\Home\\Documents\\GitHub\\SearchOrchestrator\\src\\JE.SearchOrchestrator\\Controllers\\Filters\\CacheControlFilter.cs:line 18\r\n   at System.Web.Http.Filters.ActionFilterAttribute.OnActionExecutedAsync(HttpActionExecutedContext actionExecutedContext, CancellationToken cancellationToken)\r\n--- End of stack',
          },
        },
      },
    },
  },
})

export const putRestaurantsDriverEtaRoute = createRoute({
  method: 'put',
  path: '/restaurants/driver/eta',
  tags: ['Restaurants', 'publicly-accessible'],
  summary: 'Set ETA for pickup',
  description:
    'Set the average amount of time it will take a driver to collect a new order from a restaurant.',
  request: {
    body: { content: { 'application/json': { schema: RestaurantETAsSchema } }, required: true },
  },
  responses: {
    202: {
      description: 'Update will take effect shortly',
      content: { 'application/json': { schema: IgnoredRestaurantIdsSchema } },
    },
    400: {
      description: 'There was something invalid in your request - check response body for details',
    },
  },
})

export const getRestaurantsTenantRestaurantIdCatalogueRoute = createRoute({
  method: 'get',
  path: '/restaurants/{tenant}/{restaurantId}/catalogue',
  tags: ['Restaurants', 'publicly-accessible'],
  summary: 'Get product catalogue',
  description: "Get details of the restaurant's product catalogue",
  request: {
    params: z.object({
      tenant: z
        .string()
        .openapi({
          param: {
            description: 'Request tenant.',
            in: 'path',
            name: 'tenant',
            required: true,
            schema: { type: 'string' },
          },
        }),
      restaurantId: z
        .string()
        .openapi({
          param: {
            description: 'The restaurant Id.',
            in: 'path',
            name: 'restaurantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request succeeded.',
      content: { 'application/json': { schema: MenuBaseSchema } },
      headers: z.object({
        'cache-control': {
          description: 'Information about how the response can be cached.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Information about how the response can be cached.',
              param: { required: false },
            }),
        },
      }),
    },
    404: {
      description: 'No product catalogue found for given tenant and restaurantId.',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [
              {
                description:
                  'Resource with identifier restaurantId:95224345321 for tenant:uk not found.',
              },
            ],
            faultId: 'b39ae4c1-142f-4308-838d-1f01815e1cf1',
          },
        },
      },
    },
    500: _500ErrorResponseResponse,
  },
})

export const getRestaurantsTenantRestaurantIdCatalogueAvailabilitiesRoute = createRoute({
  method: 'get',
  path: '/restaurants/{tenant}/{restaurantId}/catalogue/availabilities',
  tags: ['Restaurants', 'publicly-accessible'],
  summary: 'Get all availabilities',
  description: "Get all availabilities on the restaurant's menu",
  request: {
    params: z.object({
      tenant: z
        .string()
        .openapi({
          param: {
            description: 'Request tenant.',
            in: 'path',
            name: 'tenant',
            required: true,
            schema: { type: 'string' },
          },
        }),
      restaurantId: z
        .string()
        .openapi({
          param: {
            description: 'The restaurant Id.',
            in: 'path',
            name: 'restaurantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
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
        .openapi({
          param: {
            description: 'The maximum number of availabilities to fetch.',
            in: 'query',
            name: 'limit',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Value representing a cursor - position to use when retrieving the next page of data. If provided, the value of this parameter must be URL encoded.',
            in: 'query',
            name: 'after',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request succeeded.',
      content: { 'application/json': { schema: PagedAvailabilitiesResponseSchema } },
      headers: z.object({
        'cache-control': {
          description: 'Information about how the response can be cached.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Information about how the response can be cached.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request.',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [{ description: 'Invalid value 0 for parameter limit.' }],
            faultId: 'e21a9947-4352-449f-a4dc-5e69d57b0c5f',
          },
        },
      },
    },
    404: {
      description: 'No availabilities found for given tenant and restaurantId.',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [
              {
                description:
                  'Resource with identifier restaurantId:95224345321 for tenant:uk not found.',
              },
            ],
            faultId: 'b39ae4c1-142f-4308-838d-1f01815e1cf1',
          },
        },
      },
    },
    500: _500ErrorResponseResponse,
  },
})

export const getRestaurantsTenantRestaurantIdCatalogueCategoriesRoute = createRoute({
  method: 'get',
  path: '/restaurants/{tenant}/{restaurantId}/catalogue/categories',
  tags: ['Restaurants', 'publicly-accessible'],
  summary: 'Get all categories',
  description: "Get all categories on the restaurant's menu",
  request: {
    params: z.object({
      tenant: z
        .string()
        .openapi({
          param: {
            description: 'Request tenant.',
            in: 'path',
            name: 'tenant',
            required: true,
            schema: { type: 'string' },
          },
        }),
      restaurantId: z
        .string()
        .openapi({
          param: {
            description: 'The restaurant Id.',
            in: 'path',
            name: 'restaurantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
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
        .openapi({
          param: {
            description: 'The maximum number of categories to fetch.',
            in: 'query',
            name: 'limit',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Value representing a cursor - position to use when retrieving the next page of data. If provided, the value of this parameter must be URL encoded.',
            in: 'query',
            name: 'after',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request succeeded.',
      content: { 'application/json': { schema: PagedCategoriesResponseSchema } },
      headers: z.object({
        'cache-control': {
          description: 'Information about how the response can be cached.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Information about how the response can be cached.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request.',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [{ description: 'Invalid value 0 for parameter limit.' }],
            faultId: 'e21a9947-4352-449f-a4dc-5e69d57b0c5f',
          },
        },
      },
    },
    404: {
      description: 'No availabilities found for given tenant and restaurantId.',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [
              {
                description:
                  'Resource with identifier restaurantId:95224345321 for tenant:uk not found.',
              },
            ],
            faultId: 'b39ae4c1-142f-4308-838d-1f01815e1cf1',
          },
        },
      },
    },
    500: _500ErrorResponseResponse,
  },
})

export const getRestaurantsTenantRestaurantIdCatalogueCategoriesCategoryIdItemsRoute = createRoute({
  method: 'get',
  path: '/restaurants/{tenant}/{restaurantId}/catalogue/categories/{categoryId}/items',
  tags: ['Restaurants', 'publicly-accessible'],
  summary: 'Get all category item IDs',
  description: 'Get all item IDs which are assigned to the specified category',
  request: {
    params: z.object({
      tenant: z
        .string()
        .openapi({
          param: {
            description: 'Request tenant.',
            in: 'path',
            name: 'tenant',
            required: true,
            schema: { type: 'string' },
          },
        }),
      restaurantId: z
        .string()
        .openapi({
          param: {
            description: 'The restaurant ID.',
            in: 'path',
            name: 'restaurantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      categoryId: z
        .string()
        .openapi({
          param: {
            description: 'The category ID.',
            in: 'path',
            name: 'categoryId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
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
        .openapi({
          param: {
            description: 'The maximum number of item IDs to fetch.',
            in: 'query',
            name: 'limit',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Value representing a cursor - position to use when retrieving the next page of data. If provided, the value of this parameter must be URL encoded.',
            in: 'query',
            name: 'after',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request succeeded.',
      content: { 'application/json': { schema: PagedCategoryItemsResponseSchema } },
      headers: z.object({
        'cache-control': {
          description: 'Information about how the response can be cached.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Information about how the response can be cached.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request.',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [{ description: 'Invalid value 0 for parameter limit.' }],
            faultId: 'e21a9947-4352-449f-a4dc-5e69d57b0c5f',
          },
        },
      },
    },
    404: {
      description: 'No availabilities found for given tenant and restaurantId.',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [
              {
                description:
                  'Resource with identifier restaurantId:95224345321 for tenant:uk not found.',
              },
            ],
            faultId: 'b39ae4c1-142f-4308-838d-1f01815e1cf1',
          },
        },
      },
    },
    500: _500ErrorResponseResponse,
  },
})

export const getRestaurantsTenantRestaurantIdCatalogueItemsRoute = createRoute({
  method: 'get',
  path: '/restaurants/{tenant}/{restaurantId}/catalogue/items',
  tags: ['Restaurants', 'publicly-accessible'],
  summary: 'Get all menu items',
  description: "Get all menu items on the restaurant's menu",
  request: {
    params: z.object({
      tenant: z
        .string()
        .openapi({
          param: {
            description: 'Request tenant.',
            in: 'path',
            name: 'tenant',
            required: true,
            schema: { type: 'string' },
          },
        }),
      restaurantId: z
        .string()
        .openapi({
          param: {
            description: 'The restaurant Id.',
            in: 'path',
            name: 'restaurantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
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
        .openapi({
          param: {
            description: 'The maximum number of menu items to fetch.',
            in: 'query',
            name: 'limit',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Value representing a cursor - position to use when retrieving the next page of data. If provided, the value of this parameter must be URL encoded.',
            in: 'query',
            name: 'after',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request succeeded.',
      content: { 'application/json': { schema: PagedMenuItemsResponseSchema } },
      headers: z.object({
        'cache-control': {
          description: 'Information about how the response can be cached.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Information about how the response can be cached.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request.',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [{ description: 'Invalid value 0 for parameter limit.' }],
            faultId: 'e21a9947-4352-449f-a4dc-5e69d57b0c5f',
          },
        },
      },
    },
    404: {
      description: 'No menu items found for given tenant and restaurantId.',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [
              {
                description:
                  'Resource with identifier restaurantId:95224345321 for tenant:uk not found.',
              },
            ],
            faultId: 'b39ae4c1-142f-4308-838d-1f01815e1cf1',
          },
        },
      },
    },
    500: _500ErrorResponseResponse,
  },
})

export const getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsRoute = createRoute({
  method: 'get',
  path: '/restaurants/{tenant}/{restaurantId}/catalogue/items/{itemId}/dealgroups',
  tags: ['Restaurants', 'publicly-accessible'],
  summary: 'Get all menu item deal groups',
  description: 'Get all deal groups for the menu item with the provided ID',
  request: {
    params: z.object({
      tenant: z
        .string()
        .openapi({
          param: {
            description: 'Request tenant',
            in: 'path',
            name: 'tenant',
            required: true,
            schema: { type: 'string' },
          },
        }),
      restaurantId: z
        .string()
        .openapi({
          param: {
            description: 'The restaurant ID',
            in: 'path',
            name: 'restaurantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      itemId: z
        .string()
        .openapi({
          param: {
            description: 'The menu item ID',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
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
        .openapi({
          param: {
            description: 'The maximum number of menu items to fetch.',
            in: 'query',
            name: 'limit',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Value representing a cursor - position to use when retrieving the next page of data. If provided, the value of this parameter must be URL encoded.',
            in: 'query',
            name: 'after',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request succeeded.',
      content: { 'application/json': { schema: PagedMenuDealGroupsResponseSchema } },
      headers: z.object({
        'cache-control': {
          description: 'Information about how the response can be cached.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Information about how the response can be cached.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request.',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [{ description: 'Invalid value 0 for parameter limit.' }],
            faultId: 'e21a9947-4352-449f-a4dc-5e69d57b0c5f',
          },
        },
      },
    },
    404: {
      description: 'No deal groups found for given `tenant`, `restaurantId` and `itemId`.',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [
              {
                description:
                  'Resource with identifier restaurantId:95224345321 for tenant:uk and itemId:534685 not found.',
              },
            ],
            faultId: 'b39ae4c1-142f-4308-838d-1f01815e1cf1',
          },
        },
      },
    },
    500: _500ErrorResponseResponse,
  },
})

export const getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsDealGroupIdDealitemvariationsRoute =
  createRoute({
    method: 'get',
    path: '/restaurants/{tenant}/{restaurantId}/catalogue/items/{itemId}/dealgroups/{dealGroupId}/dealitemvariations',
    tags: ['Restaurants', 'publicly-accessible'],
    summary: 'Get all deal item variations for a deal group',
    description:
      'Get all deal item variations for the deal group with the specified ID, in the menu item with the specified ID',
    request: {
      params: z.object({
        tenant: z
          .string()
          .openapi({
            param: {
              description: 'Request tenant',
              in: 'path',
              name: 'tenant',
              required: true,
              schema: { type: 'string' },
            },
          }),
        restaurantId: z
          .string()
          .openapi({
            param: {
              description: 'The restaurant ID',
              in: 'path',
              name: 'restaurantId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        itemId: z
          .string()
          .openapi({
            param: {
              description: 'The menu item ID',
              in: 'path',
              name: 'itemId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        dealGroupId: z
          .string()
          .openapi({
            param: {
              description: 'The menu item ID',
              in: 'path',
              name: 'dealGroupId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
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
          .openapi({
            param: {
              description: 'The maximum number of menu items to fetch.',
              in: 'query',
              name: 'limit',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        after: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'Value representing a cursor - position to use when retrieving the next page of data. If provided, the value of this parameter must be URL encoded.',
              in: 'query',
              name: 'after',
              required: false,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Request succeeded.',
        content: { 'application/json': { schema: PagedDealItemVariationResponseSchema } },
        headers: z.object({
          'cache-control': {
            description: 'Information about how the response can be cached.',
            schema: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Information about how the response can be cached.',
                param: { required: false },
              }),
          },
        }),
      },
      400: {
        description: 'Bad request.',
        content: {
          'application/json': {
            schema: _4XXErrorSchemaSchema,
            example: {
              errors: [{ description: 'Invalid value 0 for parameter limit.' }],
              faultId: 'e21a9947-4352-449f-a4dc-5e69d57b0c5f',
            },
          },
        },
      },
      404: {
        description:
          'No deal item variations found for given `tenant`, `restaurantId`, `itemId` and `dealGroupId`.',
        content: {
          'application/json': {
            schema: _4XXErrorSchemaSchema,
            example: {
              errors: [
                {
                  description:
                    'Resource with identifier restaurantId:95224345321 for tenant:uk for itemId:534685 and dealGroupId:463847 not found.',
                },
              ],
              faultId: 'b39ae4c1-142f-4308-838d-1f01815e1cf1',
            },
          },
        },
      },
      500: _500ErrorResponseResponse,
    },
  })

export const getRestaurantsTenantRestaurantIdCatalogueItemsItemIdModifiergroupsRoute = createRoute({
  method: 'get',
  path: '/restaurants/{tenant}/{restaurantId}/catalogue/items/{itemId}/modifiergroups',
  tags: ['Restaurants', 'publicly-accessible'],
  summary: 'Get all menu item modifier groups',
  description: 'Get all modifier groups for the menu item with the provided ID',
  request: {
    params: z.object({
      tenant: z
        .string()
        .openapi({
          param: {
            description: 'Request tenant',
            in: 'path',
            name: 'tenant',
            required: true,
            schema: { type: 'string' },
          },
        }),
      restaurantId: z
        .string()
        .openapi({
          param: {
            description: 'The restaurant ID',
            in: 'path',
            name: 'restaurantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      itemId: z
        .string()
        .openapi({
          param: {
            description: 'The menu item ID',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
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
        .openapi({
          param: {
            description: 'The maximum number of menu items to fetch.',
            in: 'query',
            name: 'limit',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Value representing a cursor - position to use when retrieving the next page of data. If provided, the value of this parameter must be URL encoded.',
            in: 'query',
            name: 'after',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request succeeded.',
      content: { 'application/json': { schema: PagedMenuModifierGroupsResponseSchema } },
      headers: z.object({
        'cache-control': {
          description: 'Information about how the response can be cached.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Information about how the response can be cached.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request.',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [{ description: 'Invalid value 0 for parameter limit.' }],
            faultId: 'e21a9947-4352-449f-a4dc-5e69d57b0c5f',
          },
        },
      },
    },
    404: {
      description: 'No modifier groups found for given `tenant`, `restaurantId` and `itemId`.',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [
              {
                description:
                  'Resource with identifier restaurantId:95224345321 for tenant:uk and itemId:534685 not found.',
              },
            ],
            faultId: 'b39ae4c1-142f-4308-838d-1f01815e1cf1',
          },
        },
      },
    },
    500: _500ErrorResponseResponse,
  },
})

export const getRestaurantsTenantRestaurantIdCatalogueItemsItemIdVariationsRoute = createRoute({
  method: 'get',
  path: '/restaurants/{tenant}/{restaurantId}/catalogue/items/{itemId}/variations',
  tags: ['Restaurants', 'publicly-accessible'],
  summary: 'Get all menu item variations',
  description: 'Get all variations for the menu item with the provided ID',
  request: {
    params: z.object({
      tenant: z
        .string()
        .openapi({
          param: {
            description: 'Request tenant',
            in: 'path',
            name: 'tenant',
            required: true,
            schema: { type: 'string' },
          },
        }),
      restaurantId: z
        .string()
        .openapi({
          param: {
            description: 'The restaurant ID',
            in: 'path',
            name: 'restaurantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      itemId: z
        .string()
        .openapi({
          param: {
            description: 'The menu item ID',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
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
        .openapi({
          param: {
            description: 'The maximum number of menu items to fetch.',
            in: 'query',
            name: 'limit',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Value representing a cursor - position to use when retrieving the next page of data. If provided, the value of this parameter must be URL encoded.',
            in: 'query',
            name: 'after',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request succeeded.',
      content: { 'application/json': { schema: PagedVariationsResponseSchema } },
      headers: z.object({
        'cache-control': {
          description: 'Information about how the response can be cached.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Information about how the response can be cached.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request.',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [{ description: 'Invalid value 0 for parameter limit.' }],
            faultId: 'e21a9947-4352-449f-a4dc-5e69d57b0c5f',
          },
        },
      },
    },
    404: {
      description: 'No variations found for given `tenant`, `restaurantId` and `itemId`.',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [
              {
                description:
                  'Resource with identifier restaurantId:95224345321 for tenant:uk and itemId:534685 not found.',
              },
            ],
            faultId: 'b39ae4c1-142f-4308-838d-1f01815e1cf1',
          },
        },
      },
    },
    500: _500ErrorResponseResponse,
  },
})

export const getRestaurantsTenantRestaurantIdCustomerclaimsRoute = createRoute({
  method: 'get',
  path: '/restaurants/{tenant}/{restaurantId}/customerclaims',
  tags: ['Restaurant Claims', 'publicly-accessible'],
  summary: 'Get claims',
  description: 'Provides claims for a given restaurant with optional filtering',
  request: {
    params: z.object({
      tenant: z
        .string()
        .openapi({
          param: {
            description: 'Two letter code indicating the tenant',
            in: 'path',
            name: 'tenant',
            required: true,
            schema: { type: 'string' },
          },
        }),
      restaurantId: z
        .string()
        .openapi({
          param: {
            description: 'Just Eat restaurant identifier',
            in: 'path',
            name: 'restaurantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fromDate: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description: 'Start date limiter',
            in: 'query',
            name: 'fromDate',
            required: false,
            schema: { format: 'date-time', nullable: true, type: 'string' },
          },
        }),
      toDate: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description: 'End date limiter',
            in: 'query',
            name: 'toDate',
            required: false,
            schema: { format: 'date-time', nullable: true, type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32().min(1).max(100),
            )
            .nullable(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Pagination limit',
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              default: 20,
              format: 'int32',
              maximum: 100,
              minimum: 1,
              nullable: true,
              type: 'integer',
            },
          },
        }),
      offset: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32().min(0),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Pagination offset',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', minimum: 0, nullable: true, type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates what type of response client understands and is also used for content type negotiation (if version is specified), otherwise tells the server to return the latest version',
            example: 'application/json;v=1',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request succeeded',
      content: { 'application/json': { schema: ClaimsResponseSchema } },
      headers: z.object({
        'Content-Type': {
          description: 'Content type of document including version',
          example: 'application/json;v=1',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Content type of document including version',
              example: 'application/json;v=1',
              param: { required: false },
            }),
        },
        'cache-control': {
          description: 'Information about how the response can be cached',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Information about how the response can be cached',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description:
        'Bad Request. Returned if the request is invalid e.g. has incorrect date limiter format',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [
              { description: 'Bad Request. End date limiter should have date-time format.' },
            ],
            faultId: '25bbe062-c53d-4fbc-9d6c-3df6127b94fd',
            traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
          },
        },
      },
    },
    401: _401UnauthorizedResponseResponse,
    403: _403ForbiddenResponseResponse,
    500: _500ErrorResponseResponse,
  },
  security: [{ Bearer: [] }],
})

export const getRestaurantsTenantRestaurantIdCustomerclaimsIdRoute = createRoute({
  method: 'get',
  path: '/restaurants/{tenant}/{restaurantId}/customerclaims/{id}',
  tags: ['Restaurant Claims', 'publicly-accessible'],
  summary: 'Get order claim',
  description: 'Get information about a order claim',
  request: {
    params: z.object({
      tenant: z
        .string()
        .openapi({
          param: {
            description: 'Two letter code indicating the tenant',
            in: 'path',
            name: 'tenant',
            required: true,
            schema: { type: 'string' },
          },
        }),
      restaurantId: z
        .string()
        .openapi({
          param: {
            description: 'Just Eat restaurant identifier',
            in: 'path',
            name: 'restaurantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Claim identifier',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates what type of response client understands and is also used for content type negotiation (if version is specified), otherwise tells the server to return the latest version',
            example: 'application/json;v=1',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request succeeded',
      content: { 'application/json': { schema: OrderClaimSchema } },
      headers: z.object({
        'Content-Type': {
          description: 'Content type of document including version',
          example: 'application/json;v=1',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Content type of document including version',
              example: 'application/json;v=1',
              param: { required: false },
            }),
        },
        'cache-control': {
          description: 'Information about how the response can be cached.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Information about how the response can be cached.',
              param: { required: false },
            }),
        },
      }),
    },
    401: _401UnauthorizedResponseResponse,
    403: _403ForbiddenResponseResponse,
    404: {
      description: 'Not Found. Claim could not be found',
      content: { 'application/json': { schema: _4XXErrorSchemaSchema } },
    },
    500: _500ErrorResponseResponse,
  },
  security: [{ Bearer: [] }],
})

export const postRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseRoute = createRoute(
  {
    method: 'post',
    path: '/restaurants/{tenant}/{restaurantId}/customerclaims/{id}/restaurantresponse',
    tags: ['Restaurant Claims', 'publicly-accessible'],
    summary: 'Submit a restaurant response for the claim',
    description:
      'Submit a restaurant response for the claim, where the restaurant can tell us if they accept or reject the claim',
    request: {
      params: z.object({
        tenant: z
          .string()
          .openapi({
            param: {
              description: 'Two letter code indicating the tenant',
              in: 'path',
              name: 'tenant',
              required: true,
              schema: { type: 'string' },
            },
          }),
        restaurantId: z
          .string()
          .openapi({
            param: {
              description: 'Just Eat restaurant identifier',
              in: 'path',
              name: 'restaurantId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        id: z
          .string()
          .openapi({
            param: {
              description: 'Claim identifier',
              in: 'path',
              name: 'id',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      headers: z.object({
        'Content-Type': z
          .string()
          .openapi({
            param: {
              description:
                'Indicates the representation of the request body the client is sending (including version)',
              example: 'application/json;v=1',
              in: 'header',
              name: 'Content-Type',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        description: 'Payload containing the response of the restaurant on the order claim',
        content: { 'application/json': { schema: OrderClaimRestaurantResponseSchema } },
      },
    },
    responses: {
      201: { description: 'Request succeeded. Your response to the claim has been submitted' },
      400: {
        description:
          'Bad Request. Returned if the request is invalid e.g. decision value is incorrect',
        content: {
          'application/json': {
            schema: _4XXErrorSchemaSchema,
            example: {
              errors: [
                { description: 'Bad Request. Incorrect decision', errorCode: 'IncorrectDecision' },
                { description: 'Bad Request. Missing decision', errorCode: 'MissingDecision' },
                {
                  description:
                    'Bad Request. The request you are sending is missing some items for the claim you are trying to resolve',
                  errorCode: 'MissingItems',
                },
              ],
              faultId: '25bbe062-c53d-4fbc-9d6c-3df6127b94fd',
              traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
            },
          },
        },
      },
      401: _401UnauthorizedResponseResponse,
      403: _403ForbiddenResponseResponse,
      404: {
        description: 'Not Found. Claim could not be found',
        content: { 'application/json': { schema: _4XXErrorSchemaSchema } },
      },
      409: {
        description: 'Conflict. The claim you are attempting to resolve is has been resolved',
        content: {
          'application/json': {
            schema: _4XXErrorSchemaSchema,
            example: {
              errors: [
                {
                  description: 'The claim you are attempting to resolve is has been resolved',
                  errorCode: 'AlreadyResolved',
                },
              ],
              faultId: '25bbe062-c53d-4fbc-9d6c-3df6127b94fd',
              traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
            },
          },
        },
      },
      422: {
        description:
          'Unprocessable. The claim you are attempting to update does not contain the items from the request',
        content: {
          'application/json': {
            schema: _4XXErrorSchemaSchema,
            example: {
              errors: [
                {
                  description:
                    'The claim you are attempting to update does not contain the items from the request',
                  errorCode: 'WrongItems',
                },
              ],
              faultId: '25bbe062-c53d-4fbc-9d6c-3df6127b94fd',
              traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
            },
          },
        },
      },
      500: _500ErrorResponseResponse,
    },
    security: [{ Bearer: [] }],
  },
)

export const putRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseJustificationRoute =
  createRoute({
    method: 'put',
    path: '/restaurants/{tenant}/{restaurantId}/customerclaims/{id}/restaurantresponse/justification',
    tags: ['Restaurant Claims', 'publicly-accessible'],
    summary: 'Add reason and comments to the response',
    description: 'Add reason and optional comments in case of rejection of order claim',
    request: {
      params: z.object({
        tenant: z
          .string()
          .openapi({
            param: {
              description: 'Two letter code indicating the tenant',
              in: 'path',
              name: 'tenant',
              required: true,
              schema: { type: 'string' },
            },
          }),
        restaurantId: z
          .string()
          .openapi({
            param: {
              description: 'Just Eat restaurant identifier',
              in: 'path',
              name: 'restaurantId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        id: z
          .string()
          .openapi({
            param: {
              description: 'Claim identifier',
              in: 'path',
              name: 'id',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      headers: z.object({
        'Content-Type': z
          .string()
          .openapi({
            param: {
              description:
                'Indicates the representation of the request body the client is sending (including version)',
              example: 'application/json;v=1',
              in: 'header',
              name: 'Content-Type',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        description: 'Payload containing the reason of rejection and optional comments',
        content: { 'application/json': { schema: JustificationSchema } },
      },
    },
    responses: {
      204: { description: 'Request succeeded. Justification was successfully submitted' },
      400: {
        description:
          "Bad Request. Returned if the request is invalid e.g. reason doesn't match any of the predefined values",
        content: {
          'application/json': {
            schema: _4XXErrorSchemaSchema,
            example: {
              errors: [
                { description: "Bad Request. Reason doesn't match any of the predefined values" },
              ],
              faultId: '25bbe062-c53d-4fbc-9d6c-3df6127b94fd',
              traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
            },
          },
        },
      },
      401: _401UnauthorizedResponseResponse,
      403: _403ForbiddenResponseResponse,
      404: {
        description: 'Not Found. Claim could not be found',
        content: { 'application/json': { schema: _4XXErrorSchemaSchema } },
      },
      409: {
        description:
          'Conflict. The claim you are attempting to update is older than the current claim. Fetch the last copy of the entity and try the request again.',
        content: { 'application/json': { schema: _4XXErrorSchemaSchema } },
      },
      500: _500ErrorResponseResponse,
    },
    security: [{ Bearer: [] }],
  })

export const getRestaurantsTenantRestaurantIdFeesRoute = createRoute({
  method: 'get',
  path: '/restaurants/{tenant}/{restaurantId}/fees',
  tags: ['Restaurants', 'publicly-accessible'],
  summary: 'Get Restaurant Fees',
  description: 'Get the fees currently applied to a restaurant in a particular tenant',
  request: {
    params: z.object({
      tenant: z
        .string()
        .openapi({
          param: {
            description:
              'A two-character country code for which country the restaurant resides in.',
            in: 'path',
            name: 'tenant',
            required: true,
            schema: { type: 'string' },
          },
        }),
      restaurantId: z
        .string()
        .openapi({
          param: {
            description: 'A unique identifier for a restaurant',
            in: 'path',
            name: 'restaurantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'User-Agent': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Request header string that allows the server to identify the application making the request.',
            in: 'header',
            name: 'User-Agent',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: RestaurantFeesSchema,
          example: {
            bagFee: {
              description: 'A charge for bags in delivery',
              serviceTypes: {
                collection: { amount: 5 },
                default: { amount: 0 },
                delivery: { amount: 10 },
              },
            },
          },
        },
      },
      headers: z.object({
        'cache-control': {
          description:
            'Information about how the response can be cached. (No caching will be applied)',
          schema: z
            .literal('no-store')
            .exactOptional()
            .openapi({
              description:
                'Information about how the response can be cached. (No caching will be applied)',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [
              {
                description: 'The supplied tenant is not supported',
                errorCode: 'UnsupportedTenant',
              },
            ],
            faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
            traceId: '0HLOCKDKQPKIU',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [{ description: 'Authorization required', errorCode: 'Unauthorized' }],
            faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
            traceId: '0HLOCKDKQPKIU',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [
              {
                description: 'You do not have permission to access this resource',
                errorCode: 'Forbidden',
              },
            ],
            faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
            traceId: '0HLOCKDKQPKIU',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [
              {
                description: 'The requested resource does not exist on this server',
                errorCode: 'NotFound',
              },
            ],
            faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
            traceId: '0HLOCKDKQPKIU',
          },
        },
      },
    },
    500: _500ErrorResponseResponse,
  },
  security: [{ Bearer: [] }],
})

export const putRestaurantsTenantRestaurantIdFeesRoute = createRoute({
  method: 'put',
  path: '/restaurants/{tenant}/{restaurantId}/fees',
  tags: ['Restaurants', 'publicly-accessible'],
  summary: 'Create or Update Restaurant Fees',
  description: 'Creates or Updates the fees for a restaurant in a particular tenant',
  request: {
    params: z.object({
      tenant: z
        .string()
        .openapi({
          param: {
            description:
              'A two-character country code for which country the restaurant resides in.',
            in: 'path',
            name: 'tenant',
            required: true,
            schema: { type: 'string' },
          },
        }),
      restaurantId: z
        .string()
        .openapi({
          param: {
            description: 'A unique identifier for a restaurant',
            in: 'path',
            name: 'restaurantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'User-Agent': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Request header string that allows the server to identify the application making the request.',
            in: 'header',
            name: 'User-Agent',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Update Restaurant Fees',
      content: {
        'application/json': {
          schema: RestaurantFeesSchema,
          example: {
            bagFee: {
              description: 'A charge for bags in delivery',
              serviceTypes: {
                collection: { amount: 5 },
                default: { amount: 0 },
                delivery: { amount: 10 },
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: RestaurantFeesSchema,
          example: {
            bagFee: {
              description: 'A charge for bags in delivery',
              serviceTypes: {
                collection: { amount: 5 },
                default: { amount: 0 },
                delivery: { amount: 10 },
              },
            },
          },
        },
      },
      headers: z.object({
        'cache-control': {
          description:
            'Information about how the response can be cached. (No caching will be applied)',
          schema: z
            .literal('no-store')
            .exactOptional()
            .openapi({
              description:
                'Information about how the response can be cached. (No caching will be applied)',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [
              {
                description: 'The supplied tenant is not supported',
                errorCode: 'UnsupportedTenant',
              },
            ],
            faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
            traceId: '0HLOCKDKQPKIU',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [{ description: 'Authorization required', errorCode: 'Unauthorized' }],
            faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
            traceId: '0HLOCKDKQPKIU',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [
              {
                description: 'You do not have permission to access this resource',
                errorCode: 'Forbidden',
              },
            ],
            faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
            traceId: '0HLOCKDKQPKIU',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [
              {
                description: 'The requested resource does not exist on this server',
                errorCode: 'NotFound',
              },
            ],
            faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
            traceId: '0HLOCKDKQPKIU',
          },
        },
      },
    },
    500: _500ErrorResponseResponse,
  },
  security: [{ Bearer: [] }],
})

export const getRestaurantsTenantRestaurantIdMenuRoute = createRoute({
  method: 'get',
  path: '/restaurants/{tenant}/{restaurantId}/menu',
  tags: ['Restaurants', 'publicly-accessible'],
  summary: "Get the latest version of the restaurant's full menu",
  description:
    'The endpoint will return a 301 redirect containing a URL that will grant access to the Menu file. The URL will only be available for a short period of time. The Menu file will be a single document containing the information that Just Eat has and uses to display the Menu on our customer clients. This will include a collection of items, a collection of Categories and a collection of Availabilities for when the items are available. Partners will be able to retrieve the Menu for any Restaurants that they currently manage.',
  request: {
    params: z.object({
      tenant: z
        .string()
        .openapi({
          param: {
            description: 'The tenant of the restaurant in which to put a menu',
            in: 'path',
            name: 'tenant',
            required: true,
            schema: { type: 'string' },
          },
        }),
      restaurantId: z
        .string()
        .openapi({
          param: {
            description: 'The restaurant identifier to associated with the menu',
            in: 'path',
            name: 'restaurantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            description: 'Containing a partner issued API key e.g. Bearer ABCDE123456789',
            in: 'header',
            name: 'Authorization',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    301: {
      description:
        'Temporary Redirect. The redirect will contain the signed URL that the client needs to access the resource',
      content: { 'application/json': { schema: MenuSchema } },
    },
    400: {
      description: 'Bad Request. We were unable to process the request due to data you sent us',
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: {
      description: 'Server Error',
      content: { 'application/json': { schema: ConsumerErrorResponseSchema } },
    },
  },
})

export const putRestaurantsTenantRestaurantIdMenuRoute = createRoute({
  method: 'put',
  path: '/restaurants/{tenant}/{restaurantId}/menu',
  tags: ['Restaurants', 'publicly-accessible'],
  summary: 'Create or update a menu',
  description:
    'This will begin an asynchronous process that will lead to that menu becoming live on the Just Eat platform',
  operationId: 'putMenuForIngestion',
  request: {
    params: z.object({
      tenant: z
        .string()
        .openapi({
          param: {
            description: 'The tenant of the restaurant in which to put a menu',
            in: 'path',
            name: 'tenant',
            required: true,
            schema: { type: 'string' },
          },
        }),
      restaurantId: z
        .string()
        .openapi({
          param: {
            description: 'The restaurant identifier to associated with the menu',
            in: 'path',
            name: 'restaurantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            description: 'Containing a partner issued API key e.g. `JE-API-KEY ABCDE123456789`',
            in: 'header',
            name: 'Authorization',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'Content-Type': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used to denote the version of the menu payload within the body, will default to latest if not supplied e.g. application/=1.0',
            in: 'header',
            name: 'Content-Type',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'Specification of the menu. This must be valid according to the rules described here: https://developers.just-eat.com/docs/pos-how-the-integration-works#validation-rules',
      content: { 'application/json': { schema: MenuSchema } },
    },
  },
  responses: {
    202: {
      description: 'Accepted',
      content: { 'application/json': { schema: MenuIngestionResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: _4XXErrorSchemaSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: {
      description: 'Server Error',
      content: { 'application/json': { schema: ConsumerErrorResponseSchema } },
    },
  },
})

export const getRestaurantsTenantRestaurantIdOrdertimesRoute = createRoute({
  method: 'get',
  path: '/restaurants/{tenant}/{restaurantId}/ordertimes',
  tags: ['publicly-accessible', 'Restaurant OrderTimes'],
  summary: "Get the restaurant's delivery and collection lead times",
  description: 'Get list of the delivery and collection lead times supplied by the restaurant',
  operationId: 'GetOrderTimes',
  request: {
    params: z.object({
      tenant: z
        .string()
        .openapi({
          param: {
            description: 'A valid country code, e.g. "uk".',
            in: 'path',
            name: 'tenant',
            required: true,
            schema: { type: 'string' },
          },
        }),
      restaurantId: z
        .string()
        .openapi({
          param: {
            description: 'The restaurant Id.',
            in: 'path',
            name: 'restaurantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            description: 'OAuth2 token issued for logged in restaurant',
            in: 'header',
            name: 'Authorization',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .array(OrderTimeSchema)
            .max(14)
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            }),
          example: [
            {
              dayOfWeek: 'Sunday',
              lowerBoundMinutes: 35,
              serviceType: 'Delivery',
              upperBoundMinutes: 50,
            },
            {
              dayOfWeek: 'Monday',
              lowerBoundMinutes: 35,
              serviceType: 'Delivery',
              upperBoundMinutes: 50,
            },
            {
              dayOfWeek: 'Tuesday',
              lowerBoundMinutes: 35,
              serviceType: 'Delivery',
              upperBoundMinutes: 50,
            },
            {
              dayOfWeek: 'Wednesday',
              lowerBoundMinutes: 35,
              serviceType: 'Delivery',
              upperBoundMinutes: 50,
            },
            {
              dayOfWeek: 'Thursday',
              lowerBoundMinutes: 35,
              serviceType: 'Delivery',
              upperBoundMinutes: 50,
            },
            {
              dayOfWeek: 'Friday',
              lowerBoundMinutes: 35,
              serviceType: 'Delivery',
              upperBoundMinutes: 50,
            },
            {
              dayOfWeek: 'Saturday',
              lowerBoundMinutes: 35,
              serviceType: 'Delivery',
              upperBoundMinutes: 50,
            },
            {
              dayOfWeek: 'Sunday',
              lowerBoundMinutes: 35,
              serviceType: 'Collection',
              upperBoundMinutes: 50,
            },
            {
              dayOfWeek: 'Monday',
              lowerBoundMinutes: 35,
              serviceType: 'Collection',
              upperBoundMinutes: 50,
            },
            {
              dayOfWeek: 'Tuesday',
              lowerBoundMinutes: 35,
              serviceType: 'Collection',
              upperBoundMinutes: 50,
            },
            {
              dayOfWeek: 'Wednesday',
              lowerBoundMinutes: 35,
              serviceType: 'Collection',
              upperBoundMinutes: 50,
            },
            {
              dayOfWeek: 'Thursday',
              lowerBoundMinutes: 35,
              serviceType: 'Collection',
              upperBoundMinutes: 50,
            },
            {
              dayOfWeek: 'Friday',
              lowerBoundMinutes: 35,
              serviceType: 'Collection',
              upperBoundMinutes: 50,
            },
            {
              dayOfWeek: 'Saturday',
              lowerBoundMinutes: 35,
              serviceType: 'Collection',
              upperBoundMinutes: 50,
            },
          ],
        },
      },
      headers: z.object({
        'cache-control': {
          description: 'Information about how the response can be cached.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Information about how the response can be cached.',
              param: { required: false },
            }),
        },
      }),
    },
    401: _401UnauthorizedResponseResponse,
    403: {
      description:
        'Forbidden - the restaurant still uses deprecated approach of Lunch and Night menus',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [
              {
                description:
                  'The restaurant still uses deprecated approach of Lunch and Night menus',
                errorCode: 'Forbidden',
              },
            ],
            faultId: '25bbe062-c53d-4fbc-9d6c-3df6127b94fd',
            traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
          },
        },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: _500ErrorSchemaSchema } },
    },
  },
})

export const putRestaurantsTenantRestaurantIdOrdertimesDayOfWeekServiceTypeRoute = createRoute({
  method: 'put',
  path: '/restaurants/{tenant}/{restaurantId}/ordertimes/{dayOfWeek}/{serviceType}',
  tags: ['publicly-accessible', 'Restaurant OrderTimes'],
  summary: "Update the restaurant's delivery and collection lead times",
  description: "Update the restaurant's delivery and collection lead times",
  operationId: 'UpdateOrderTime',
  request: {
    params: z.object({
      tenant: z
        .string()
        .openapi({
          param: {
            description: 'A valid country code, e.g. "uk".',
            in: 'path',
            name: 'tenant',
            required: true,
            schema: { type: 'string' },
          },
        }),
      restaurantId: z
        .string()
        .openapi({
          param: {
            description: 'The restaurant Id.',
            in: 'path',
            name: 'restaurantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      dayOfWeek: z
        .enum(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])
        .openapi({
          param: {
            description: 'Day of week for order time',
            in: 'path',
            name: 'dayOfWeek',
            required: true,
            schema: {
              enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
              type: 'string',
            },
          },
        }),
      serviceType: z
        .enum(['Delivery', 'Collection'])
        .openapi({
          param: {
            description: 'Service type of the order time',
            in: 'path',
            name: 'serviceType',
            required: true,
            schema: { enum: ['Delivery', 'Collection'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            description:
              'OAuth2 token issued for logged in restaurant OR API token for third party, in the format `Bearer {api_key}`',
            in: 'header',
            name: 'Authorization',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateOrderTimeRequest2Schema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [{ description: 'Bad Request', errorCode: 'ERR400' }],
            faultId: '25bbe062-c53d-4fbc-9d6c-3df6127b94fd',
            traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
          },
        },
      },
    },
    401: _401UnauthorizedResponseResponse,
    403: _403ForbiddenResponseResponse,
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: _500ErrorSchemaSchema } },
    },
  },
})

export const getRestaurantsTenantRestaurantIdServicetimesRoute = createRoute({
  method: 'get',
  path: '/restaurants/{tenant}/{restaurantId}/servicetimes',
  tags: ['Restaurants', 'publicly-accessible'],
  summary: 'Get service times',
  description:
    'Gets the service times (the weekly times at which a restaurant is in service for delivery or collection) for a restaurant',
  operationId: 'getRestaurantServiceTimes',
  request: {
    params: z.object({
      tenant: z
        .string()
        .openapi({
          param: {
            description: "Two letter code of restaurant's tenant",
            in: 'path',
            name: 'tenant',
            required: true,
            schema: { type: 'string' },
          },
        }),
      restaurantId: z
        .string()
        .openapi({
          param: {
            description: 'The restaurant identifier',
            in: 'path',
            name: 'restaurantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "The restaurant's service times",
      content: { 'application/json': { schema: ServiceTimesSchema } },
      headers: z.object({
        'cache-control': {
          description: 'Information about how the response can be cached.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Information about how the response can be cached.',
              param: { required: false },
            }),
        },
      }),
    },
    403: { description: 'Forbidden' },
    404: {
      description: 'Not found',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [{ description: 'Order not found', errorCode: 'ERR1234' }],
            faultId: '25bbe062-c53d-4fbc-9d6c-3df6127b94fd',
            traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
          },
        },
      },
    },
    500: _500ErrorResponseResponse,
  },
})

export const putRestaurantsTenantRestaurantIdServicetimesRoute = createRoute({
  method: 'put',
  path: '/restaurants/{tenant}/{restaurantId}/servicetimes',
  tags: ['Restaurants', 'publicly-accessible'],
  summary: 'Create or update service times',
  description:
    'Creates or updates the service times (the weekly times at which a restaurant is in service for delivery or collection) for a restaurant',
  operationId: 'putRestaurantServiceTimes',
  request: {
    params: z.object({
      tenant: z
        .string()
        .openapi({
          param: {
            description: "Two letter code of restaurant's tenant",
            in: 'path',
            name: 'tenant',
            required: true,
            schema: { type: 'string' },
          },
        }),
      restaurantId: z
        .string()
        .openapi({
          param: {
            description: 'The restaurant identifier',
            in: 'path',
            name: 'restaurantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ServiceTimesSchema } } },
  },
  responses: {
    200: {
      description: 'The new service times',
      content: { 'application/json': { schema: ServiceTimesSchema } },
      headers: z.object({
        'cache-control': {
          description: 'Information about how the response can be cached.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Information about how the response can be cached.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [
              {
                description: 'The value of "end" must be greater than "start", or "00:00:00"',
                errorCode: 'ERR1234',
              },
            ],
            faultId: '25bbe062-c53d-4fbc-9d6c-3df6127b94fd',
            traceId: 'H3TKh4QSJUSwVBCBqEtkKw==',
          },
        },
      },
    },
    403: { description: 'Forbidden' },
    500: _500ErrorResponseResponse,
  },
})

export const getSearchAutocompleteTenantRoute = createRoute({
  method: 'get',
  path: '/search/autocomplete/{tenant}',
  tags: ['Search', 'publicly-accessible'],
  summary: 'Get auto-completed search terms',
  description:
    'Provides auto-completed search terms for restaurants, cuisines and products available in a given location.',
  request: {
    params: z.object({
      tenant: z
        .string()
        .openapi({
          param: {
            description: 'A valid country code, e.g. "uk".',
            in: 'path',
            name: 'tenant',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      searchTerm: z
        .string()
        .openapi({
          param: {
            description: "User's search term - at least one character required",
            in: 'query',
            name: 'searchTerm',
            required: true,
            schema: { type: 'string' },
          },
        }),
      latlong: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z
            .array(
              z.preprocess(
                (val) =>
                  typeof val === 'string' &&
                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                    ? Number(val)
                    : val,
                z.number(),
              ),
            )
            .length(2),
        )
        .openapi({
          param: {
            description:
              'The latitude and longitude coordinates of the location in which to search.\r\nSpecify the coordinates as latitude,longitude.',
            example: [51.501285, -0.1424422],
            explode: false,
            in: 'query',
            name: 'latlong',
            required: true,
            schema: {
              items: { format: 'decimal', type: 'number' },
              maxItems: 2,
              minItems: 2,
              type: 'array',
            },
            style: 'form',
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit the number of auto-completed terms returned by the API. Defaults to 7. Valid values 1 - 10',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'integer', type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AutoCompleteSearchResponseSchema } },
      headers: z.object({
        'cache-control': {
          description: 'Information about how the response can be cached.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Information about how the response can be cached.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              fault: z
                .object({
                  errors: z
                    .array(
                      z
                        .object({
                          description: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Specific details about the error that may assist the you in resolving the issue',
                            }),
                          errorCode: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'A code that identifies the problem type. It will be supported by human-readable documentation that identifies how to resolve the error',
                            }),
                          fields: z
                            .array(z.string())
                            .exactOptional()
                            .openapi({ description: 'An array of invalid query fields' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  faultId: z
                    .string()
                    .openapi({
                      description:
                        'A value that helps identify this response back to logs, so we can easily find this specific fault',
                    }),
                  traceId: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'A value that helps identify the trace back to logs, so that we can easily find what was happening on our system when the fault was generated',
                    }),
                })
                .exactOptional()
                .openapi({ required: ['faultId'] }),
            })
            .openapi({ description: 'A HTTP 4xx error response', required: [] }),
          example: {
            errors: [
              {
                description: 'Validation failed on one or more fields',
                errorCode: 400,
                fields: ['latlong'],
              },
            ],
            faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
            traceId: '0HLOCKDKQPKIU',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [{ errorCode: '401' }],
            faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
            traceId: '0HLOCKDKQPKIU',
          },
        },
      },
    },
    500: _500ErrorResponseResponse,
    503: {
      description: 'Service Unavailable',
      content: {
        'application/json': {
          schema: z
            .object({
              fault: z
                .object({
                  faultId: z
                    .string()
                    .openapi({
                      description:
                        'A value that helps identify this response back to logs, so we can easily find this specific fault',
                    }),
                  traceId: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'A value that helps identify the trace back to logs, so that we can easily find what was happening on our system when the fault was generated',
                    }),
                })
                .exactOptional()
                .openapi({ required: ['faultId'] }),
            })
            .openapi({ description: 'Service Unavailable', required: [] }),
          example: { faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b', traceId: '0HLOCKDKQPKIU' },
        },
      },
    },
  },
})

export const getSearchRestaurantsTenantRoute = createRoute({
  method: 'get',
  path: '/search/restaurants/{tenant}',
  tags: ['Search', 'publicly-accessible'],
  summary: 'Search restaurants',
  description:
    'Get restaurants available in a given lat-long which match a search term.\r\nMatches can be found against the name, a cuisine or a product.',
  request: {
    params: z.object({
      tenant: z
        .string()
        .openapi({
          param: {
            description: 'A valid country code, e.g. "uk".',
            in: 'path',
            name: 'tenant',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      searchTerm: z
        .string()
        .openapi({
          param: {
            description: "User's search term.",
            in: 'query',
            name: 'searchTerm',
            required: true,
            schema: { type: 'string' },
          },
        }),
      latlong: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z
            .array(
              z.preprocess(
                (val) =>
                  typeof val === 'string' &&
                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                    ? Number(val)
                    : val,
                z.number(),
              ),
            )
            .length(2),
        )
        .openapi({
          param: {
            description:
              'The latitude and longitude coordinates of the location in which to search.\r\nSpecify the coordinates as latitude,longitude.',
            example: [51.501285, -0.1424422],
            explode: false,
            in: 'query',
            name: 'latlong',
            required: true,
            schema: {
              items: { format: 'decimal', type: 'number' },
              maxItems: 2,
              minItems: 2,
              type: 'array',
            },
            style: 'form',
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit the number of restaurants returned by the API.\r\nValid values are numbers between 1 and 500.\r\nIf not provided, the limit defaults to 300.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'integer', type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RestaurantSearchResponseSchema } },
      headers: z.object({
        'cache-control': {
          description: 'Information about how the response can be cached.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Information about how the response can be cached.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [
              {
                description: 'Validation failed on one or more fields',
                errorCode: 400,
                fields: ['latlong'],
              },
            ],
            faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
            traceId: '0HLOCKDKQPKIU',
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [{ errorCode: '401' }],
            faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
            traceId: '0HLOCKDKQPKIU',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - search term rejected',
      content: {
        'application/json': {
          schema: _4XXErrorSchemaSchema,
          example: {
            errors: [{ errorCode: '422' }],
            faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b',
            traceId: '0HLOCKDKQPKIU',
          },
        },
      },
    },
    500: _500ErrorResponseResponse,
    503: {
      description: 'Service Unavailable',
      content: {
        'application/json': {
          schema: z
            .object({
              fault: z
                .object({
                  faultId: z
                    .string()
                    .openapi({
                      description:
                        'A value that helps identify this response back to logs, so we can easily find this specific fault',
                    }),
                  traceId: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'A value that helps identify the trace back to logs, so that we can easily find what was happening on our system when the fault was generated',
                    }),
                })
                .exactOptional()
                .openapi({ required: ['faultId'] }),
            })
            .openapi({ description: 'Service Unavailable', required: [] }),
          example: { faultId: '72d7036d-990a-4f84-9efa-ef5f40f6044b', traceId: '0HLOCKDKQPKIU' },
        },
      },
    },
  },
})

export const postSendToPosFailedRoute = createRoute({
  method: 'post',
  path: '/send-to-pos-failed',
  tags: ['Order Webhooks', 'publicly-accessible'],
  summary: 'Send to POS failed',
  description:
    'This webhook will be invoked if we experience an error or timeout in sending an order to the underlying POS / kitchen screen. When notified via this webhook, typically you will perform some form of alerting or backup flow (e.g. ask the operator to enter the order manually into the POS). NOTE: This message contains the `OrderId`, but not the full order. It is assumed that you have stored/cached the full order details earlier in the flow - e.g. via the [/order-ready-for-preparation](#/paths/~1order-ready-for-preparation-sync/post) webhook.',
  request: {
    body: { content: { 'application/json': { schema: SendToPosFailedSchema } }, required: true },
  },
  responses: {
    200: {
      description:
        'Respond with a 200 status code to indicate that you have received the notification.',
    },
  },
})

export const postV1TenantRestaurantsEventOfflineRoute = createRoute({
  method: 'post',
  path: '/v1/{tenant}/restaurants/event/offline',
  tags: ['Restaurant Events', 'publicly-accessible'],
  summary: 'Create Offline Event',
  description:
    'Creates an event for the specified restaurants that indicates a reason for those restaurants to be offline.',
  request: {
    params: z.object({
      tenant: z
        .string()
        .openapi({
          param: {
            description: 'The identifier for the tenant',
            in: 'path',
            name: 'tenant',
            required: true,
            schema: { type: 'string' },
            'x-position': 1,
          },
        }),
    }),
    headers: z.object({
      'X-JE-Requester': z
        .string()
        .openapi({
          param: {
            description:
              'Name of the user or system creating the event. Used for auditing purposes',
            in: 'header',
            name: 'X-JE-Requester',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'X-JE-User-Role': UserRoleSchema.openapi({
        param: {
          in: 'header',
          name: 'X-JE-User-Role',
          required: true,
          schema: { $ref: '#/components/schemas/UserRole' },
        },
      }),
    }),
    body: {
      content: { 'application/json': { schema: OfflineRestaurantsRequestModelSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: {
        'application/json': {
          schema: z
            .object({
              restaurantEventId: z
                .string()
                .exactOptional()
                .openapi({ description: 'The ID of the offline event created' }),
              restaurantIds: z
                .string()
                .exactOptional()
                .openapi({ description: 'A CSV of the restaurant IDs added to the offline event' }),
            })
            .openapi({
              example: {
                restaurantEventId: '03bff206-d136-405f-b789-95190e9711a4',
                restaurantIds: '12345',
              },
              required: [],
            }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: z.array(ValidationErrorSchema) } },
    },
    500: { description: 'Server Error' },
  },
})

export const deleteV1TenantRestaurantsIdEventOfflineRoute = createRoute({
  method: 'delete',
  path: '/v1/{tenant}/restaurants/{id}/event/offline',
  tags: ['Restaurant Events', 'publicly-accessible'],
  summary: 'Delete Offline Event',
  description:
    'Removes specified restaurant from offline events. If role header is `System` or `Operations` only events created by the specified role will be affected. If role header is `Restaurant` then all events that have `allowRestaurantOverride=true` will be affected.',
  request: {
    params: z.object({
      tenant: z
        .string()
        .openapi({
          param: {
            description: 'The identifier for the tenant',
            in: 'path',
            name: 'tenant',
            required: true,
            schema: { type: 'string' },
            'x-position': 1,
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'The identifier for the restaurant',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            'x-position': 2,
          },
        }),
    }),
    headers: z.object({
      'X-JE-Requester': z
        .string()
        .openapi({
          param: {
            description:
              'Name of the user or system creating the event. Used for auditing purposes',
            in: 'header',
            name: 'X-JE-Requester',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'X-JE-User-Role': UserRoleSchema.openapi({
        param: {
          description: 'The role the user or system creating the event has assumed.',
          in: 'header',
          name: 'X-JE-User-Role',
          required: true,
          schema: { $ref: '#/components/schemas/UserRole' },
        },
      }),
    }),
  },
  responses: {
    200: { description: 'No Events to Delete' },
    202: { description: 'Request Succeeded' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: z.array(ValidationErrorSchema) } },
    },
    500: { description: 'Server Error' },
  },
})

export const postTenantOrdersOrderIdQueriesAttempteddeliveryRoute = createRoute({
  method: 'post',
  path: '/{tenant}/orders/{orderId}/queries/attempteddelivery',
  tags: ['Attempted Delivery API', 'publicly-accessible'],
  summary: 'Delivery Attempt Failed',
  description:
    "If the customer hasn't answered the door to collect the order, then an attempted delivery event can be created using this endpoint.",
  request: {
    params: z.object({
      tenant: z
        .string()
        .openapi({
          param: {
            description: 'Request tenant e.g. uk.',
            in: 'path',
            name: 'tenant',
            required: true,
            schema: { type: 'string' },
          },
        }),
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'Id for the order.',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            description: 'Containing a partner issued API key e.g. `JE-API-KEY ABCDE123456789`',
            in: 'header',
            name: 'Authorization',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'An object for providing the reason that the attempted delivery event is being created',
      content: { 'application/json': { schema: CreateAttemptedDeliverySchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK' },
    400: {
      description:
        'Bad Request - returned if providing invalid data such as an unacceptable reason code',
    },
    401: { description: 'Unauthorized - consumer has not provided the necessary credentials' },
    404: { description: 'Resource not found' },
    500: { description: 'Internal server error' },
  },
})

export const postTenantOrdersOrderIdQueriesAttempteddeliveryResolutionRedeliverorderRoute =
  createRoute({
    method: 'post',
    path: '/{tenant}/orders/{orderId}/queries/attempteddelivery/resolution/redeliverorder',
    tags: ['Attempted Delivery API', 'publicly-accessible'],
    summary: 'Request Redelivery of the Order',
    description:
      'If the customer responds, then you can trigger the redelivery of an order through this endpoint',
    request: {
      params: z.object({
        tenant: z
          .string()
          .openapi({
            param: {
              description: 'Request tenant e.g. uk.',
              in: 'path',
              name: 'tenant',
              required: true,
              schema: { type: 'string' },
            },
          }),
        orderId: z
          .string()
          .openapi({
            param: {
              description: 'Id for the order.',
              in: 'path',
              name: 'orderId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      headers: z.object({
        Authorization: z
          .string()
          .openapi({
            param: {
              description: 'Containing a partner issued API key e.g. `JE-API-KEY ABCDE123456789`',
              in: 'header',
              name: 'Authorization',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        description: 'An object for providing the new status of the order and the updated due date',
        content: { 'application/json': { schema: ResolveAttemptedDeliveryRedeliverSchema } },
        required: true,
      },
    },
    responses: {
      200: { description: 'OK' },
      400: {
        description:
          'Bad Request - returned if providing invalid data such as an unacceptable reason code',
      },
      401: { description: 'Unauthorized - consumer has not provided the necessary credentials' },
      404: { description: 'Resource not found' },
      500: { description: 'Internal server error' },
    },
  })
