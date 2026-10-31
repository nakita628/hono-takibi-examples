import { createRoute, z } from '@hono/zod-openapi'

const TicketTypeSchema = z
  .enum(['event', 'general'])
  .openapi({
    description:
      'Type of ticket being purchased. Use `general` for regular museum entry and `event` for tickets to special events.',
    example: 'event',
  })
  .openapi('TicketType')

const DateSchema = z.iso.date().openapi({ example: '2023-10-29' }).openapi('Date')

const EmailSchema = z
  .email()
  .openapi({
    description: 'Email address for ticket purchaser.',
    example: 'museum-lover@example.com',
  })
  .openapi('Email')

const TicketIdSchema = z
  .uuid()
  .openapi({
    description: 'Unique identifier for museum ticket. Generated when purchased.',
    example: 'a54a57ca-36f8-421b-a6b4-2e8f26858a4c',
  })
  .openapi('TicketId')

const EventIdSchema = z
  .uuid()
  .openapi({
    description: 'Identifier for a special event.',
    example: '3be6453c-03eb-4357-ae5a-984a0e574a54',
  })
  .openapi('EventId')

const TicketSchema = z
  .object({
    ticketId: TicketIdSchema.exactOptional(),
    ticketDate: DateSchema.openapi({
      description: 'Date when this ticket can be used for museum entry.',
    }),
    ticketType: TicketTypeSchema,
    eventId: EventIdSchema.exactOptional().openapi({
      description:
        "Unique identifier for a special event. Required if purchasing tickets for the museum's special events.",
    }),
  })
  .openapi({
    description: 'Ticket for museum entry, can be general admission or special event.',
    required: ['ticketType', 'ticketDate'],
  })
  .openapi('Ticket')

const BuyMuseumTicketsSchema = z
  .object({ email: EmailSchema.exactOptional() })
  .openapi({ required: [] })
  .and(TicketSchema)
  .openapi({ description: 'Data to purchase a ticket.' })
  .openapi('BuyMuseumTickets')

const TicketMessageSchema = z
  .string()
  .openapi({
    description: 'Confirmation message after a ticket purchase.',
    example: 'Museum general entry ticket purchased',
  })
  .openapi('TicketMessage')

const TicketConfirmationSchema = z
  .string()
  .openapi({
    description: 'Unique confirmation code used to verify ticket purchase.',
    example: 'ticket-event-a98c8f-7eb12',
  })
  .openapi('TicketConfirmation')

const MuseumTicketsConfirmationSchema = TicketSchema.and(
  z
    .object({ message: TicketMessageSchema, confirmationCode: TicketConfirmationSchema })
    .openapi({ required: ['message', 'confirmationCode'] }),
)
  .openapi({ description: 'Details for a museum ticket after a successful purchase.' })
  .openapi('MuseumTicketsConfirmation')

const TicketCodeImageSchema = z
  .file()
  .openapi({
    type: 'string',
    format: 'binary',
    description: 'Image of a ticket with a QR code used for museum or event entry.',
  })
  .openapi('TicketCodeImage')

const MuseumDailyHoursSchema = z
  .object({
    date: DateSchema.openapi({
      description: 'Date the operating hours apply to.',
      example: '2024-12-31',
    }),
    timeOpen: z
      .string()
      .regex(/^([01]\d|2[0-3]):?([0-5]\d)$/)
      .openapi({
        description:
          'Time the museum opens on a specific date. Uses 24 hour time format (`HH:mm`).',
        example: '09:00',
      }),
    timeClose: z
      .string()
      .regex(/^([01]\d|2[0-3]):?([0-5]\d)$/)
      .openapi({
        description:
          'Time the museum closes on a specific date. Uses 24 hour time format (`HH:mm`).',
        example: '18:00',
      }),
  })
  .openapi({
    description: 'Daily operating hours for the museum.',
    required: ['date', 'timeOpen', 'timeClose'],
  })
  .openapi('MuseumDailyHours')

const MuseumHoursSchema = z
  .array(MuseumDailyHoursSchema)
  .openapi({ description: 'List of museum operating hours for a date range.' })
  .openapi('MuseumHours')

const EventNameSchema = z
  .string()
  .openapi({ description: 'Name of the special event.', example: 'Pirate Coding Workshop' })
  .openapi('EventName')

const EventLocationSchema = z
  .string()
  .openapi({ description: 'Location where the special event is held.', example: 'Computer Room' })
  .openapi('EventLocation')

const EventDescriptionSchema = z
  .string()
  .openapi({
    description: 'Description of the special event.',
    example:
      'Captain Blackbeard shares his love of the C...language. And possibly Arrrrr (R lang).',
  })
  .openapi('EventDescription')

const EventDatesSchema = z
  .array(DateSchema)
  .openapi({ description: 'List of planned dates for the special event.' })
  .openapi('EventDates')

const EventPriceSchema = z
  .float32()
  .openapi({ description: 'Price of a ticket for the special event.', example: 25 })
  .openapi('EventPrice')

const SpecialEventFieldsSchema = z
  .object({
    name: EventNameSchema.exactOptional(),
    location: EventLocationSchema.exactOptional(),
    eventDescription: EventDescriptionSchema.exactOptional(),
    dates: EventDatesSchema.exactOptional(),
    price: EventPriceSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SpecialEventFields')

const SpecialEventSchema = z
  .object({
    eventId: EventIdSchema.exactOptional(),
    name: EventNameSchema,
    location: EventLocationSchema,
    eventDescription: EventDescriptionSchema,
    dates: EventDatesSchema,
    price: EventPriceSchema,
  })
  .openapi({ required: ['name', 'location', 'eventDescription', 'dates', 'price'] })
  .openapi('SpecialEvent')

const SpecialEventCollectionSchema = z
  .array(SpecialEventSchema)
  .openapi({ description: 'List of upcoming special events.' })
  .openapi('SpecialEventCollection')

const ErrorSchema = z
  .object({
    type: z.string().exactOptional().openapi({ example: 'object' }),
    title: z.string().exactOptional().openapi({ example: 'Validation failed' }),
  })
  .openapi({ required: [] })
  .openapi('Error')

const BadRequestResponse = {
  description: 'Bad request.',
  content: { 'application/problem+json': { schema: ErrorSchema } },
}

const NotFoundResponse = {
  description: 'Not found.',
  content: { 'application/problem+json': { schema: ErrorSchema } },
}

const UnauthorizedResponse = {
  description: 'Unauthorized.',
  content: { 'application/problem+json': { schema: ErrorSchema } },
}

const PaginationPageParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .default(1)
  .exactOptional()
  .openapi({
    param: {
      name: 'page',
      in: 'query',
      description: 'Page number to retrieve.',
      schema: { type: 'integer', default: 1, example: 2 },
      required: false,
    },
    example: 2,
  })

const PaginationLimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().max(30),
  )
  .default(10)
  .exactOptional()
  .openapi({
    param: {
      name: 'limit',
      in: 'query',
      description: 'Number of days per page.',
      schema: { type: 'integer', default: 10, maximum: 30, example: 15 },
      required: false,
    },
    example: 15,
  })

const EventIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'eventId',
      in: 'path',
      description: 'Identifier for a special event.',
      required: true,
      schema: { type: 'string', format: 'uuid', example: 'dad4bce8-f5cb-4078-a211-995864315e39' },
    },
    example: 'dad4bce8-f5cb-4078-a211-995864315e39',
  })

const StartDateParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'startDate',
      in: 'query',
      description:
        "Starting date to retrieve future operating hours from. Defaults to today's date.",
      schema: { type: 'string', format: 'date', example: '2023-02-23' },
      required: false,
    },
    example: '2023-02-23',
  })

const EndDateParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'endDate',
      in: 'query',
      description:
        'End of a date range to retrieve special events for. Defaults to 7 days after `startDate`.',
      schema: { type: 'string', format: 'date', example: '2023-04-18' },
      required: false,
    },
    example: '2023-04-18',
  })

const TicketIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'ticketId',
      in: 'path',
      description: 'Identifier for a ticket to a museum event. Used to generate ticket image.',
      required: true,
      schema: { type: 'string', format: 'uuid', example: 'a54a57ca-36f8-421b-a6b4-2e8f26858a4c' },
    },
    example: 'a54a57ca-36f8-421b-a6b4-2e8f26858a4c',
  })

const BuyGeneralTicketsRequestExampleExample = {
  summary: 'General entry ticket',
  value: { ticketType: 'general', ticketDate: '2023-09-07', email: 'todd@example.com' },
}

const BuyEventTicketsRequestExampleExample = {
  summary: 'Special event ticket',
  value: {
    ticketType: 'event',
    eventId: 'dad4bce8-f5cb-4078-a211-995864315e39',
    ticketDate: '2023-09-05',
    email: 'todd@example.com',
  },
}

const BuyGeneralTicketsResponseExampleExample = {
  summary: 'General entry ticket',
  value: {
    message: 'Museum general entry ticket purchased',
    ticketId: '382c0820-0530-4f4b-99af-13811ad0f17a',
    ticketType: 'general',
    ticketDate: '2023-09-07',
    confirmationCode: 'ticket-general-e5e5c6-dce78',
  },
}

const BuyEventTicketsResponseExampleExample = {
  summary: 'Special event ticket',
  value: {
    message: 'Museum special event ticket purchased',
    ticketId: 'b811f723-17b2-44f7-8952-24b03e43d8a9',
    eventName: 'Mermaid Treasure Identification and Analysis',
    ticketType: 'event',
    ticketDate: '2023-09-05',
    confirmationCode: 'ticket-event-9c55eg-8v82a',
  },
}

const CreateSpecialEventRequestExampleExample = {
  summary: 'Create special event',
  value: {
    name: 'Mermaid Treasure Identification and Analysis',
    location: 'Under the seaaa 🦀 🎶 🌊.',
    eventDescription:
      'Join us as we review and classify a rare collection of 20 thingamabobs, gadgets, gizmos, whoosits, and whatsits, kindly donated by Ariel.',
    dates: ['2023-09-05', '2023-09-08'],
    price: 0,
  },
}

const CreateSpecialEventResponseExampleExample = {
  summary: 'Special event created',
  value: {
    eventId: 'dad4bce8-f5cb-4078-a211-995864315e39',
    name: 'Mermaid Treasure Identification and Analysis',
    location: 'Under the seaaa 🦀 🎶 🌊.',
    eventDescription:
      'Join us as we review and classify a rare collection of 20 thingamabobs, gadgets, gizmos, whoosits, and whatsits, kindly donated by Ariel.',
    dates: ['2023-09-05', '2023-09-08'],
    price: 30,
  },
}

const GetSpecialEventResponseExampleExample = {
  summary: 'Get special event',
  value: {
    eventId: '6744a0da-4121-49cd-8479-f8cc20526495',
    name: 'Time Traveler Tea Party',
    location: 'Temporal Tearoom',
    eventDescription: 'Sip tea with important historical figures.',
    dates: ['2023-11-18', '2023-11-25', '2023-12-02'],
    price: 60,
  },
}

const ListSpecialEventsResponseExampleExample = {
  summary: 'List of special events',
  value: [
    {
      eventId: 'f3e0e76e-e4a8-466e-ab9c-ae36c15b8e97',
      name: 'Sasquatch Ballet',
      location: 'Seattle... probably',
      eventDescription:
        "They're big, they're hairy, but they're also graceful. Come learn how the biggest feet can have the lightest touch.",
      dates: ['2023-12-15', '2023-12-22'],
      price: 40,
    },
    {
      eventId: '2f14374a-9c65-4ee5-94b7-fba66d893483',
      name: 'Solar Telescope Demonstration',
      location: 'Far from the sun.',
      eventDescription: 'Look at the sun without going blind!',
      dates: ['2023-09-07', '2023-09-14'],
      price: 50,
    },
    {
      eventId: '6aaa61ba-b2aa-4868-b803-603dbbf7bfdb',
      name: 'Cook like a Caveman',
      location: 'Fire Pit on East side',
      eventDescription: 'Learn to cook on an open flame.',
      dates: ['2023-11-10', '2023-11-17', '2023-11-24'],
      price: 5,
    },
    {
      eventId: '602b75e1-5696-4ab8-8c7a-f9e13580f910',
      name: 'Underwater Basket Weaving',
      location: 'Rec Center Pool next door.',
      eventDescription: 'Learn to weave baskets underwater.',
      dates: ['2023-09-12', '2023-09-15'],
      price: 15,
    },
    {
      eventId: 'dad4bce8-f5cb-4078-a211-995864315e39',
      name: 'Mermaid Treasure Identification and Analysis',
      location: 'Room Sea-12',
      eventDescription:
        'Join us as we review and classify a rare collection of 20 thingamabobs, gadgets, gizmos, whoosits, and whatsits — kindly donated by Ariel.',
      dates: ['2023-09-05', '2023-09-08'],
      price: 30,
    },
    {
      eventId: '6744a0da-4121-49cd-8479-f8cc20526495',
      name: 'Time Traveler Tea Party',
      location: 'Temporal Tearoom',
      eventDescription: 'Sip tea with important historical figures.',
      dates: ['2023-11-18', '2023-11-25', '2023-12-02'],
      price: 60,
    },
    {
      eventId: '3be6453c-03eb-4357-ae5a-984a0e574a54',
      name: 'Pirate Coding Workshop',
      location: 'Computer Room',
      eventDescription:
        'Captain Blackbeard shares his love of the C...language. And possibly Arrrrr (R lang).',
      dates: ['2023-10-29', '2023-10-30', '2023-10-31'],
      price: 45,
    },
    {
      eventId: '9d90d29a-2af5-4206-97d9-9ea9ceadcb78',
      name: 'Llama Street Art Through the Ages',
      location: 'Auditorium',
      eventDescription: "Llama street art?! Alpaca my bags -- let's go!",
      dates: ['2023-10-29', '2023-10-30', '2023-10-31'],
      price: 45,
    },
    {
      eventId: 'a3c7b2c4-b5fb-4ef7-9322-00a919864957',
      name: 'The Great Parrot Debate',
      location: 'Outdoor Amphitheatre',
      eventDescription: 'See leading parrot minds discuss important geopolitical issues.',
      dates: ['2023-11-03', '2023-11-10'],
      price: 35,
    },
    {
      eventId: 'b92d46b7-4c5d-422b-87a5-287767e26f29',
      name: 'Eat a Bunch of Corn',
      location: 'Cafeteria',
      eventDescription: 'We accidentally bought too much corn. Please come eat it.',
      dates: ['2023-11-10', '2023-11-17', '2023-11-24'],
      price: 5,
    },
  ],
}

const UpdateSpecialEventRequestExampleExample = {
  summary: 'Update special event request',
  value: { location: 'On the beach.', price: 15 },
}

const UpdateSpecialEventResponseExampleExample = {
  summary: 'Update special event',
  value: {
    eventId: 'dad4bce8-f5cb-4078-a211-995864315e39',
    name: 'Mermaid Treasure Identification and Analysis',
    location: 'On the beach.',
    eventDescription:
      'Join us as we review and classify a rare collection of 20 thingamabobs, gadgets, gizmos, whoosits, and whatsits, kindly donated by Ariel.',
    dates: ['2023-09-05', '2023-09-08'],
    price: 15,
  },
}

const GetMuseumHoursResponseExampleExample = {
  summary: 'Get hours response',
  value: [
    { date: '2023-09-11', timeOpen: '09:00', timeClose: '18:00' },
    { date: '2023-09-12', timeOpen: '09:00', timeClose: '18:00' },
    { date: '2023-09-13', timeOpen: '09:00', timeClose: '18:00' },
    { date: '2023-09-14', timeOpen: '09:00', timeClose: '18:00' },
    { date: '2023-09-15', timeOpen: '10:00', timeClose: '16:00' },
    { date: '2023-09-18', timeOpen: '09:00', timeClose: '18:00' },
    { date: '2023-09-19', timeOpen: '09:00', timeClose: '18:00' },
    { date: '2023-09-20', timeOpen: '09:00', timeClose: '18:00' },
    { date: '2023-09-21', timeOpen: '09:00', timeClose: '18:00' },
    { date: '2023-09-22', timeOpen: '10:00', timeClose: '16:00' },
  ],
}

const MuseumPlaceholderAuthSecurityScheme = { type: 'http', scheme: 'basic' }

export const getMuseumHoursRoute = createRoute({
  method: 'get',
  path: '/museum-hours',
  tags: ['Operations'],
  summary: 'Get museum hours',
  description: 'Get upcoming museum operating hours.',
  operationId: 'getMuseumHours',
  request: {
    query: z.object({
      startDate: StartDateParamsSchema,
      page: PaginationPageParamsSchema,
      limit: PaginationLimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success.',
      content: {
        'application/json': {
          schema: MuseumHoursSchema,
          examples: { default_example: GetMuseumHoursResponseExampleExample },
        },
      },
    },
    400: BadRequestResponse,
    404: NotFoundResponse,
  },
})

export const getSpecialEventsRoute = createRoute({
  method: 'get',
  path: '/special-events',
  tags: ['Events'],
  summary: 'List special events',
  description: 'Return a list of upcoming special events at the museum.',
  operationId: 'listSpecialEvents',
  request: {
    query: z.object({
      startDate: StartDateParamsSchema,
      endDate: EndDateParamsSchema,
      page: PaginationPageParamsSchema,
      limit: PaginationLimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success.',
      content: {
        'application/json': {
          schema: SpecialEventCollectionSchema,
          examples: { default_example: ListSpecialEventsResponseExampleExample },
        },
      },
    },
    400: BadRequestResponse,
    404: NotFoundResponse,
  },
})

export const postSpecialEventsRoute = createRoute({
  method: 'post',
  path: '/special-events',
  tags: ['Events'],
  summary: 'Create special events',
  description: 'Creates a new special event for the museum.',
  operationId: 'createSpecialEvent',
  request: {
    body: {
      content: {
        'application/json': {
          schema: SpecialEventSchema,
          examples: { default_example: CreateSpecialEventRequestExampleExample },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Created.',
      content: {
        'application/json': {
          schema: SpecialEventSchema,
          examples: { default_example: CreateSpecialEventResponseExampleExample },
        },
      },
    },
    400: BadRequestResponse,
    404: NotFoundResponse,
  },
})

export const getSpecialEventsEventIdRoute = createRoute({
  method: 'get',
  path: '/special-events/{eventId}',
  tags: ['Events'],
  summary: 'Get special event',
  description: 'Get details about a special event.',
  operationId: 'getSpecialEvent',
  request: { params: z.object({ eventId: EventIdParamsSchema }) },
  responses: {
    200: {
      description: 'Success.',
      content: {
        'application/json': {
          schema: SpecialEventSchema,
          examples: { default_example: GetSpecialEventResponseExampleExample },
        },
      },
    },
    400: BadRequestResponse,
    404: NotFoundResponse,
  },
})

export const deleteSpecialEventsEventIdRoute = createRoute({
  method: 'delete',
  path: '/special-events/{eventId}',
  tags: ['Events'],
  summary: 'Delete special event',
  description:
    'Delete a special event from the collection. Allows museum to cancel planned events.',
  operationId: 'deleteSpecialEvent',
  request: { params: z.object({ eventId: EventIdParamsSchema }) },
  responses: {
    204: { description: 'Success - no content.' },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
  },
})

export const patchSpecialEventsEventIdRoute = createRoute({
  method: 'patch',
  path: '/special-events/{eventId}',
  tags: ['Events'],
  summary: 'Update special event',
  description: 'Update the details of a special event.',
  operationId: 'updateSpecialEvent',
  request: {
    params: z.object({ eventId: EventIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: SpecialEventFieldsSchema,
          examples: { default_example: UpdateSpecialEventRequestExampleExample },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success.',
      content: {
        'application/json': {
          schema: SpecialEventSchema,
          examples: { default_example: UpdateSpecialEventResponseExampleExample },
        },
      },
    },
    400: BadRequestResponse,
    404: NotFoundResponse,
  },
})

export const postTicketsRoute = createRoute({
  method: 'post',
  path: '/tickets',
  tags: ['Tickets'],
  summary: 'Buy museum tickets',
  description: 'Purchase museum tickets for general entry or special events.',
  operationId: 'buyMuseumTickets',
  request: {
    body: {
      content: {
        'application/json': {
          schema: BuyMuseumTicketsSchema,
          examples: {
            general_entry: BuyGeneralTicketsRequestExampleExample,
            event_entry: BuyEventTicketsRequestExampleExample,
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Created.',
      content: {
        'application/json': {
          schema: MuseumTicketsConfirmationSchema,
          examples: {
            general_entry: BuyGeneralTicketsResponseExampleExample,
            event_entry: BuyEventTicketsResponseExampleExample,
          },
        },
      },
    },
    400: BadRequestResponse,
    404: NotFoundResponse,
  },
})

export const getTicketsTicketIdQrRoute = createRoute({
  method: 'get',
  path: '/tickets/{ticketId}/qr',
  tags: ['Tickets'],
  summary: 'Get ticket QR code',
  description: 'Return an image of your ticket with scannable QR code. Used for event entry.',
  operationId: 'getTicketCode',
  request: { params: z.object({ ticketId: TicketIdParamsSchema }) },
  responses: {
    200: {
      description: 'Scannable event ticket in image format.',
      content: { 'image/png': { schema: TicketCodeImageSchema } },
    },
    400: BadRequestResponse,
    404: NotFoundResponse,
  },
})

export const publishNewEventPostWebhook = {
  method: 'post',
  path: '/publishNewEvent',
  tags: ['Events'],
  summary: 'New special event added',
  description: 'Publish details of a new or updated event.',
  operationId: 'publishNewEvent',
  request: {
    body: {
      content: {
        'application/json': {
          schema: SpecialEventSchema,
          examples: { default_example: GetSpecialEventResponseExampleExample },
        },
      },
    },
  },
  responses: { 202: { description: 'Data accepted.' } },
}
