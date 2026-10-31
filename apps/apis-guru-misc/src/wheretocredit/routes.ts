import { createRoute, z } from '@hono/zod-openapi'

const CalculateItineraryProgramResultSchema = z
  .object({
    airlines: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Two-letter IATA carrier codes that are associated with the frequent flyer program.',
      }),
    id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier for the frequent flyer program. See <code>Programs</code> API.',
      }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Frequent flyer program name. See <code>Programs</code> API.' }),
    revenueBased: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates that the itinerary includes revenue-based miles earnings.',
      }),
    unpublished: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates that the itinerary may be missing miles due to unpublished earning rates from the program.',
      }),
    value: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Total redeemable miles or points earned for the frequent flyer program.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CalculateItineraryProgramResult')

const CalculateItineraryResultSchema = z
  .object({
    id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Unique identifier provided for this itinerary.' }),
    totals: z
      .array(CalculateItineraryProgramResultSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Total miles earned for each frequent flyer program.' }),
  })
  .openapi({ required: [] })
  .openapi('CalculateItineraryResult')

const CalculateResultSchema = z
  .object({
    errorMessage: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Error message if the API call was not successful.' }),
    success: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the API call was successful.' }),
    value: CalculateItineraryResultSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CalculateResult')

const SegmentSchema = z
  .object({
    bookingClass: z
      .string()
      .openapi({
        description:
          'Single-letter booking class used to determine the earning rate for the flight segment.',
      }),
    carrier: z
      .string()
      .openapi({
        description:
          'Two-letter IATA carrier code for the marketing airline.  This is used to determine which earnings chart will be applied for this segment.\r\nNOTE: Frequent flyer programs based on operating carrier, including but not limited to Star Alliance carriers, cannot be reliably mapped to a booking class and will not be accurately reflected in this API.',
      }),
    departure: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The date on the flight will depart from the origin to go to the destination.  This is used to determine which earnings chart will be in effect at time of departure.',
      }),
    destination: z
      .string()
      .openapi({ description: 'Three-letter IATA airport code to which the flight is going.' }),
    distance: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The number of miles for this flight segment.  Otherwise, distance is calculated using the great-circle distance between the origin and destination and may not match other data sources exactly.',
      }),
    flightNumber: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The airline identifier for the flight segment, most commonly (but not always) a number and is used for earning charts that are restricted to specific flight numbers.',
      }),
    operatingCarrier: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Two-letter IATA carrier code for the operating airline.  This value is only used when earning is based on marketing carrier but restricted to a specific operating carrier.  Leaving this value blank will assume the flight is operated by the marketing carrier.',
      }),
    origin: z
      .string()
      .openapi({
        description: 'Three-letter IATA airport code from which the flight will depart.',
      }),
  })
  .openapi({ required: ['bookingClass', 'carrier', 'destination', 'origin'] })
  .openapi('Segment')

const ItinerarySchema = z
  .object({
    baseFareUSD: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Amount in USD that will be used to calculate revenue program mileage earning.  This amount should generally include carrier imposed surcharges but exclude other taxes. Default is 0.',
      }),
    id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier for this itinerary that will be passed back to help correlate a result.',
      }),
    segments: z
      .array(SegmentSchema)
      .openapi({
        description: 'Every flight transfer or stopover should be considered a separate segment.',
      }),
    ticketingCarrier: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Two-letter IATA carrier code for the ticketing or plating airline.  This is used for revenue programs (i.e. UA, DL, B6).  Leaving this value blank will exclude revenue programs.',
      }),
  })
  .openapi({ required: ['segments'] })
  .openapi('Itinerary')

const ProgramSchema = z
  .object({
    airlines: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Two-letter IATA carrier codes that are associated with the frequent flyer program.',
      }),
    denomination: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Name of the unit of a mile or point.' }),
    fullName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Full name of the frequent flyer program including the airline, if applicable.',
      }),
    id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the frequent flyer program.' }),
    programName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Name of the frequent flyer program.' }),
    tierNames: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Name of each tier level for the frequent flyer program.' }),
  })
  .openapi({ required: [] })
  .openapi('Program')

const ApiKeySecurityScheme = {
  description: 'Subscribers only',
  in: 'header',
  name: 'Authorization-Token',
  type: 'apiKey',
}

export const postApi10CalculateRoute = createRoute({
  method: 'post',
  path: '/api/1.0/calculate',
  tags: ['Calculate'],
  summary: 'Calculates the number of miles earned for every frequent flyer program.',
  request: {
    body: {
      description:
        'Collection of <code>Itinerary</code> to allow multiple frequent flyer mile or point calculations at once.',
      content: {
        'application/json': {
          schema: z
            .array(ItinerarySchema)
            .nullable()
            .openapi({
              description:
                'Collection of <code>Itinerary</code> to allow multiple frequent flyer mile or point calculations at once.',
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'Success.  However individual <code>CalculateResults</code> in the response could have failed.',
      content: { 'application/json': { schema: z.array(CalculateResultSchema) } },
    },
    429: { description: 'Usage limits exceeded. (Free users only)' },
  },
})

export const getApi10ProgramsRoute = createRoute({
  method: 'get',
  path: '/api/1.0/programs',
  tags: ['Programs'],
  summary: 'Lists all supported frequent flyer programs.',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(ProgramSchema) } },
    },
    429: { description: 'Usage limits exceeded. (Free users only)' },
  },
})
