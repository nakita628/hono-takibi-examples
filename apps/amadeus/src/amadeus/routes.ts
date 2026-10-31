import { createRoute, z } from '@hono/zod-openapi'

const OriginalFlightEndPointSchema = z
  .object({
    iataCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[IATA airline codes](http://www.iata.org/publications/Pages/code-search.aspx)',
        example: 'JFK',
      }),
    terminal: z
      .string()
      .exactOptional()
      .openapi({ description: 'terminal name / number', example: 'T2' }),
  })
  .openapi({ description: 'departure or arrival information', required: [] })
  .openapi('OriginalFlightEndPoint')

type FlightEndPointType = z.infer<typeof OriginalFlightEndPointSchema> & { at?: string }

const OriginalFlightStopSchema = z
  .object({
    duration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'stop duration in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) PnYnMnDTnHnMnS format, e.g. PT2H10M',
        example: 'PT2H10M',
      }),
    iataCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[IATA airline codes](http://www.iata.org/publications/Pages/code-search.aspx)',
        example: 'JFK',
      }),
  })
  .openapi({ description: 'details of stops for direct or change of gauge flights', required: [] })
  .openapi('OriginalFlightStop')

type FlightStopType = z.infer<typeof OriginalFlightStopSchema> & {
  arrivalAt?: string
  departureAt?: string
}

const TravelClassSchema = z
  .enum(['ECONOMY', 'PREMIUM_ECONOMY', 'BUSINESS', 'FIRST'])
  .openapi({
    description:
      'quality of service offered in the cabin where the seat is located in this flight. Economy, premium economy, business or first class',
    example: 'PREMIUM_ECONOMY',
  })
  .openapi('TravelClass')

const Co2EmissionSchema = z
  .object({
    cabin: TravelClassSchema.exactOptional(),
    weight: z
      .int()
      .exactOptional()
      .openapi({ description: 'Weight of Co2 emitted for the concerned segment', example: 90 }),
    weightUnit: z
      .string()
      .exactOptional()
      .openapi({ description: 'Code to qualify unit as pounds or kilos', example: 'KG' }),
  })
  .openapi({ required: [] })
  .openapi('Co2Emission')

const AircraftEquipmentSchema = z
  .object({
    code: z
      .string()
      .regex(/[a-zA-Z0-9]{3}/)
      .exactOptional()
      .openapi({
        description: 'IATA aircraft code (http://www.flugzeuginfo.net/table_accodes_iata_en.php)\n',
        example: '318',
      }),
  })
  .openapi({ description: 'information related to the aircraft', required: [] })
  .openapi('AircraftEquipment')

const FlightEndPointSchema: z.ZodType<FlightEndPointType> = z
  .lazy(() =>
    OriginalFlightEndPointSchema.and(
      z
        .object({
          at: z.iso
            .datetime({ offset: true })
            .exactOptional()
            .openapi({
              description:
                'local date and time in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-ddThh:mm:ss format, e.g. 2017-02-10T20:40:00',
              example: '2017-10-23T20:00:00',
            }),
        })
        .openapi({ required: [] }),
    ).openapi({ description: 'departure or arrival information', title: 'FlightEndPoint' }),
  )
  .openapi('FlightEndPoint')

const OperatingFlightSchema = z
  .object({
    carrierCode: z
      .string()
      .min(1)
      .max(2)
      .exactOptional()
      .openapi({ description: 'providing the airline / carrier code', example: 'DL' }),
  })
  .openapi({ description: 'information about the operating flight', required: [] })
  .openapi('OperatingFlight')

const FlightStopSchema: z.ZodType<FlightStopType> = z
  .lazy(() =>
    OriginalFlightStopSchema.and(
      z
        .object({
          arrivalAt: z.iso
            .datetime({ offset: true })
            .exactOptional()
            .openapi({
              description:
                'arrival at the stop in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-ddThh:mm:ss format, e.g. 2017-02-10T20:40:00',
              example: '2017-10-23T20:00:00',
            }),
          departureAt: z.iso
            .datetime({ offset: true })
            .exactOptional()
            .openapi({
              description:
                'departure from the stop in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-ddThh:mm:ss format, e.g. 2017-02-10T20:40:00',
              example: '2017-10-23T20:00:00',
            }),
        })
        .openapi({ required: [] }),
    ).openapi({
      description: 'details of stops for direct or change of gauge flights',
      title: 'FlightStop',
    }),
  )
  .openapi('FlightStop')

const FlightSegmentSchema = z
  .object({
    aircraft: AircraftEquipmentSchema.exactOptional(),
    arrival: FlightEndPointSchema.exactOptional(),
    carrierCode: z
      .string()
      .min(1)
      .max(2)
      .exactOptional()
      .openapi({ description: 'providing the airline / carrier code', example: 'DL' }),
    departure: FlightEndPointSchema.exactOptional(),
    duration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'stop duration in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) PnYnMnDTnHnMnS format, e.g. PT2H10M',
        example: 'PT2H10M',
      }),
    number: z
      .string()
      .min(1)
      .max(4)
      .exactOptional()
      .openapi({ description: 'the flight number as assigned by the carrier', example: '212' }),
    operating: OperatingFlightSchema.exactOptional(),
    stops: z
      .array(FlightStopSchema)
      .exactOptional()
      .openapi({
        description:
          'information regarding the different stops composing the flight segment. E.g. technical stop, change of gauge...',
      }),
  })
  .openapi({
    description:
      'defining a flight segment; including both operating and marketing details when applicable',
    required: [],
  })
  .openapi('FlightSegment')

type SegmentType = {
  blacklistedInEU?: boolean
  co2Emissions?: z.infer<typeof Co2EmissionSchema>[]
  id?: string
  numberOfStops?: number
} & z.infer<typeof FlightSegmentSchema>

const AdditionalServiceTypeSchema = z
  .enum(['CHECKED_BAGS', 'MEALS', 'SEATS', 'OTHER_SERVICES'])
  .openapi({ description: 'additional service type', example: 'CHECKED_BAGS' })
  .openapi('AdditionalServiceType')

const AircraftEntrySchema = z
  .object({ key: z.string().exactOptional() })
  .catchall(z.string().openapi({ description: 'the manufacturer/model of aircraft' }))
  .openapi('AircraftEntry')

const BaggageAllowanceSchema = z
  .object({
    quantity: z.int().exactOptional().openapi({ description: 'Total number of units', example: 1 }),
    weight: z
      .int()
      .exactOptional()
      .openapi({ description: 'Weight of the baggage allowance', example: 20 }),
    weightUnit: z
      .string()
      .exactOptional()
      .openapi({ description: 'Code to qualify unit as pounds or kilos', example: 'KG' }),
  })
  .openapi({ description: 'baggageAllowance', required: [] })
  .openapi('BaggageAllowance')

const CarrierEntrySchema = z
  .object({ key: z.string().exactOptional() })
  .catchall(z.string().openapi({ description: 'the carrier name' }))
  .openapi('CarrierEntry')

const CollectionMetaSchema = z
  .object({
    count: z.int().exactOptional().openapi({ example: 1 }),
    oneWayCombinations: z
      .array(
        z
          .object({
            flightOfferIds: z.array(z.string()).exactOptional(),
            originDestinationId: z.string().exactOptional(),
          })
          .openapi({ title: 'oneWayCombinations', required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ title: 'Collection_Meta', required: [] })
  .openapi('CollectionMeta')

const CollectionMetaLinkSchema = z
  .object({
    count: z.int().exactOptional().openapi({ example: 1 }),
    links: z
      .object({
        first: z
          .url()
          .exactOptional()
          .openapi({ example: 'https://test.api.amadeus.com/v1/area/resources?...' }),
        last: z
          .url()
          .exactOptional()
          .openapi({ example: 'https://test.api.amadeus.com/v1/area/resources?...' }),
        next: z
          .url()
          .exactOptional()
          .openapi({ example: 'https://test.api.amadeus.com/v1/area/resources?...' }),
        previous: z
          .url()
          .exactOptional()
          .openapi({ example: 'https://test.api.amadeus.com/v1/area/resources?...' }),
        self: z
          .url()
          .exactOptional()
          .openapi({ example: 'https://test.api.amadeus.com/v1/area/resources?...' }),
        up: z
          .url()
          .exactOptional()
          .openapi({ example: 'https://test.api.amadeus.com/v1/area/resources?...' }),
      })
      .exactOptional()
      .openapi({
        example: { self: 'https://test.api.amadeus.com/v1/area/resources?param=value' },
        title: 'CollectionLinks',
        required: [],
      }),
  })
  .openapi({ title: 'Collection_Meta', required: [] })
  .openapi('CollectionMetaLink')

const CoverageSchema = z
  .enum(['MOST_SEGMENTS', 'AT_LEAST_ONE_SEGMENT', 'ALL_SEGMENTS'])
  .openapi({
    description:
      'part of the trip covered by the travel class restriction (ALL_SEGMENTS if ommited)',
    example: 'MOST_SEGMENTS',
  })
  .openapi('Coverage')

const CurrencyEntrySchema = z
  .object({ key: z.string().openapi({ example: 'Euro' }) })
  .catchall(z.string().openapi({ example: 'EUR' }))
  .openapi({ required: ['key'] })
  .openapi('CurrencyEntry')

const DateTimeRangeSchema = z
  .object({
    date: z.iso
      .date()
      .openapi({
        description:
          'Dates are specified in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-DD format, e.g. 2018-12-25',
        example: '2018-09-22',
      }),
    dateWindow: z
      .string()
      .regex(/^[MPI][1-3]D/)
      .exactOptional()
      .openapi({
        description:
          'Either 1, 2 or 3 extra days around the local date (IxD for +/- x days - Ex: I3D), Either 1 to 3 days after the local date (PxD for +x days - Ex: P3D), or 1 to 3 days before the local date (MxD for -x days - Ex: M3D)\n\nCan not be combined with "originRadius" or "destinationRadius".\n',
        example: 'I3D',
      }),
    time: z
      .string()
      .exactOptional()
      .openapi({ description: 'Local time. hh:mm:ss format, e.g 10:30:00', example: '10:30:00' }),
    timeWindow: z
      .string()
      .regex(/^([1-9]|10|11|12)H/)
      .exactOptional()
      .openapi({
        description:
          '1 to 12 hours around (both +and -) the local time. Possibly limited by the number of extra days when specified, i.e.  in some situations, it may not be used to exceed the maximum date range. [1-12]H format, e.g. 6H\n\nCan not be combined with "originRadius" or "destinationRadius".\n',
        example: '2H',
      }),
  })
  .openapi({ required: ['date'], title: 'dateTimeRange' })
  .openapi('DateTimeRange')

const LocationValueSchema = z
  .object({
    cityCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'City code associated to the airport', example: 'PAR' }),
    countryCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Country code of the airport', example: 'FR' }),
  })
  .openapi({ required: [] })
  .openapi('LocationValue')

const LocationEntrySchema = z
  .object({ key: z.string() })
  .catchall(LocationValueSchema)
  .openapi({ required: ['key'] })
  .openapi('LocationEntry')

const DictionariesSchema = z
  .object({
    aircraft: AircraftEntrySchema.exactOptional(),
    carriers: CarrierEntrySchema.exactOptional(),
    currencies: CurrencyEntrySchema.exactOptional(),
    locations: LocationEntrySchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Dictionaries')

const IssueSchema = z
  .object({
    code: z
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
        description: 'an application-specific error code',
      }),
    detail: z.string().exactOptional().openapi({ description: 'explanation of the error' }),
    source: z
      .object({
        example: z
          .string()
          .exactOptional()
          .openapi({ description: 'a string indicating an example of the right value' }),
        parameter: z
          .string()
          .exactOptional()
          .openapi({
            description: 'a string indicating which URI query parameter caused the issue',
          }),
        pointer: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'a JSON Pointer [RFC6901] to the associated entity in the request document',
          }),
      })
      .refine((val) => Object.keys(val).length <= 1)
      .exactOptional()
      .openapi({
        description: 'an object containing references to the source of the error',
        title: 'Issue_Source',
        required: [],
      }),
    status: z
      .int()
      .exactOptional()
      .openapi({ description: 'the HTTP status code applicable to this error' }),
    title: z.string().exactOptional().openapi({ description: 'a short summary of the error' }),
  })
  .openapi({ required: [] })
  .openapi('Issue')

const Error_400Schema = z
  .object({ errors: z.array(IssueSchema) })
  .openapi({
    example: {
      errors: [
        {
          code: 477,
          detail: 'invalid query parameter format',
          source: { example: 'CDG', parameter: 'airport' },
          status: 400,
          title: 'INVALID FORMAT',
        },
      ],
    },
    required: ['errors'],
  })
  .openapi('Error_400')

const Error_500Schema = z
  .object({ errors: z.array(IssueSchema) })
  .openapi({
    example: { errors: [{ code: 141, status: 500, title: 'SYSTEM ERROR HAS OCCURRED' }] },
    required: ['errors'],
  })
  .openapi('Error_500')

const ExtendedPricingOptionsSchema = z
  .object({
    includedCheckedBagsOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If true, returns the flight-offers with included checked bags only',
        example: true,
      }),
  })
  .openapi({ description: 'fare filter options', title: 'pricingOptions', required: [] })
  .openapi('ExtendedPricingOptions')

const FeeTypeSchema = z
  .enum(['TICKETING', 'FORM_OF_PAYMENT', 'SUPPLIER'])
  .openapi({ description: 'type of fee', example: 'TICKETING' })
  .openapi('FeeType')

const FeeSchema = z
  .object({
    amount: z.string().exactOptional().openapi({ example: '332.70' }),
    type: FeeTypeSchema.exactOptional(),
  })
  .openapi({ description: 'a fee', required: [] })
  .openapi('Fee')

const TaxSchema = z
  .object({
    amount: z.string().exactOptional().openapi({ example: '332.70' }),
    code: z.string().exactOptional().openapi({ example: 'MX' }),
  })
  .openapi({ description: 'a tax', required: [] })
  .openapi('Tax')

const PriceSchema = z
  .object({
    base: z
      .string()
      .exactOptional()
      .openapi({ description: 'Amount without taxes', example: '632.70' }),
    currency: z.string().exactOptional().openapi({ example: 'USD' }),
    fees: z.array(FeeSchema).exactOptional().openapi({ description: 'List of applicable fees' }),
    refundableTaxes: z
      .string()
      .exactOptional()
      .openapi({ description: 'The amount of taxes which are refundable', example: '200.00' }),
    taxes: z.array(TaxSchema).exactOptional(),
    total: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total amount paid by the user', example: '932.70' }),
  })
  .openapi({ required: [] })
  .openapi('Price')

const ExtendedPriceSchema = z
  .object({
    additionalServices: z
      .array(
        z
          .object({
            amount: z.string().exactOptional().openapi({ example: '332.70' }),
            type: AdditionalServiceTypeSchema.exactOptional(),
          })
          .openapi({ title: 'AdditionalService', required: [] }),
      )
      .exactOptional()
      .openapi({ title: 'AdditionalServices' }),
    billingCurrency: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Currency of the payment. It may be different than the requested currency',
        example: 'EUR',
      }),
    grandTotal: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Total amount paid by the user (including fees and selected additional services).',
        example: '987.00',
      }),
    margin: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'BOOK step ONLY - The price margin percentage (plus or minus) that the booking can tolerate. When set to 0, then no price magin is tolerated.',
        example: '1.00',
      }),
  })
  .openapi({ required: [] })
  .and(PriceSchema)
  .openapi({ description: 'price information', title: 'Price' })
  .openapi('ExtendedPrice')

const SegmentSchema: z.ZodType<SegmentType> = z
  .lazy(() =>
    z
      .object({
        blacklistedInEU: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'When the flight has a marketing or/and operating airline that is identified as blacklisted by the European Commission. \n\nTo improve travel safety, the European Commission regularly updates the list of the banned carriers from operating in Europe. It allows any Travel Agency located in the European Union to easily identify and hide any travel recommendation based on some unsafe airlines. \nThe [list of the banned airlines](https://ec.europa.eu/transport/sites/transport/files/air-safety-list_en.pdf) is published in the Official Journal of the European Union, where they are included as annexes A and B to the Commission Regulation. The blacklist of an airline can concern all its flights or some specific aircraft types pertaining to the airline   \n',
            example: false,
          }),
        co2Emissions: z
          .array(Co2EmissionSchema)
          .min(1)
          .exactOptional()
          .openapi({ description: 'Co2 informations' }),
        id: z.string().exactOptional().openapi({ description: 'Id of the segment', example: 1 }),
        numberOfStops: z
          .int()
          .exactOptional()
          .openapi({ description: 'Number of stops', example: 0 }),
      })
      .openapi({ required: [] })
      .and(FlightSegmentSchema),
  )
  .openapi('Segment')

const PricingOptionsFareTypeSchema = z
  .array(z.enum(['PUBLISHED', 'NEGOTIATED', 'CORPORATE']))
  .openapi({ description: 'type of fare of the flight-offer', example: ['PUBLISHED'] })
  .openapi('PricingOptionsFareType')

const FlightOfferSourceSchema = z
  .literal('GDS')
  .openapi({ description: 'source of the flight offer', example: 'GDS' })
  .openapi('FlightOfferSource')

const ServiceNameSchema = z
  .enum(['PRIORITY_BOARDING', 'AIRPORT_CHECKIN'])
  .openapi({ description: 'type of service', example: 'PRIORITY_BOARDING' })
  .openapi('ServiceName')

const SliceDiceIndicatorSchema = z
  .enum(['LOCAL_AVAILABILITY', 'SUB_OD_AVAILABILITY_1', 'SUB_OD_AVAILABILITY_2'])
  .openapi({
    description:
      'slice and Dice indicator, such as Local Availability, Sub OnD(Origin and Destination) 1 Availability and Sub OnD 2 Availability',
  })
  .openapi('SliceDiceIndicator')

const TravelerPricingFareOptionSchema = z
  .enum([
    'STANDARD',
    'INCLUSIVE_TOUR',
    'SPANISH_MELILLA_RESIDENT',
    'SPANISH_CEUTA_RESIDENT',
    'SPANISH_CANARY_RESIDENT',
    'SPANISH_BALEARIC_RESIDENT',
    'AIR_FRANCE_METROPOLITAN_DISCOUNT_PASS',
    'AIR_FRANCE_DOM_DISCOUNT_PASS',
    'AIR_FRANCE_COMBINED_DISCOUNT_PASS',
    'AIR_FRANCE_FAMILY',
    'ADULT_WITH_COMPANION',
    'COMPANION',
  ])
  .openapi({
    description:
      'option specifying a group of fares, which may be valid under certain conditons\nCan be used to specify special fare discount for a passenger\n',
    example: 'STANDARD',
  })
  .openapi('TravelerPricingFareOption')

const TravelerTypeSchema = z
  .enum(['ADULT', 'CHILD', 'SENIOR', 'YOUNG', 'HELD_INFANT', 'SEATED_INFANT', 'STUDENT'])
  .openapi({
    description:
      'traveler type\nage restrictions : CHILD < 12y, HELD_INFANT < 2y, SEATED_INFANT < 2y, SENIOR >=60y\n',
    example: 'ADULT',
  })
  .openapi('TravelerType')

const FlightOfferSchema = z
  .object({
    disablePricing: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'BOOK step ONLY - If true, allows to book a PNR without pricing. Only for the source "GDS"',
        example: false,
      }),
    id: z.string().openapi({ description: 'Id of the flight offer', example: '1' }),
    instantTicketingRequired: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If true, inform that a ticketing will be required at booking step.',
        example: false,
      }),
    itineraries: z
      .array(
        z
          .object({
            duration: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'duration in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) PnYnMnDTnHnMnS format, e.g. PT2H10M for a duration of 2h10m',
                example: 'PT2H10M',
              }),
            segments: z.array(SegmentSchema).min(1).max(9).openapi({ title: 'Segments' }),
          })
          .openapi({ required: ['segments'], title: 'Itineraries' }),
      )
      .min(1)
      .max(250)
      .exactOptional(),
    lastTicketingDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If booked on the same day as the search (with respect to timezone), this flight offer is guaranteed to be thereafter valid for ticketing until this date (included). Unspecified when it does not make sense for this flight offer (e.g. no control over ticketing once booked). YYYY-MM-DD format, e.g. 2019-06-07',
        example: '2018-06-19T00:00:00.000Z',
      }),
    nonHomogeneous: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, upon completion of the booking, this pricing solution is expected to yield multiple records (a record contains booking information confirmed and stored, typically a Passenger Name Record (PNR), in the provider GDS or system)',
        example: false,
      }),
    numberOfBookableSeats: z
      .number()
      .min(1)
      .max(9)
      .exactOptional()
      .openapi({
        description: 'Number of seats bookable in a single request. Can not be higher than 9.',
        example: 9,
      }),
    oneWay: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, the flight offer fulfills only one originDestination and has to be combined with other oneWays to complete the whole journey.',
        example: false,
      }),
    paymentCardRequired: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If true, a payment card is mandatory to book this flight offer',
        example: false,
      }),
    price: ExtendedPriceSchema.exactOptional(),
    pricingOptions: z
      .object({
        fareType: PricingOptionsFareTypeSchema.exactOptional(),
        includedCheckedBagsOnly: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'If true, returns the flight-offers with included checked bags only',
            example: true,
          }),
        noPenaltyFare: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'If true, returns the flight-offers with no penalty fares only',
            example: true,
          }),
        noRestrictionFare: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'If true, returns the flight-offers with no restriction fares only',
            example: true,
          }),
        refundableFare: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'If true, returns the flight-offers with refundable fares only',
            example: true,
          }),
      })
      .exactOptional()
      .openapi({ title: 'PricingOptions', required: [] }),
    source: FlightOfferSourceSchema.exactOptional(),
    travelerPricings: z
      .array(
        z
          .object({
            associatedAdultId: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'if type="HELD_INFANT", corresponds to the adult traveler\'s id who will share the seat',
              }),
            fareDetailsBySegment: z
              .array(
                z
                  .object({
                    additionalServices: z
                      .object({
                        chargeableCheckedBags: BaggageAllowanceSchema.exactOptional(),
                        chargeableSeatNumber: z
                          .string()
                          .regex(/[1-9][0-9]{0,2}[A-Z]?/)
                          .exactOptional()
                          .openapi({ description: 'seat number', example: '33D' }),
                        otherServices: z
                          .array(ServiceNameSchema)
                          .exactOptional()
                          .openapi({
                            description: 'Other services to add',
                            example: ['PRIORITY_BOARDING'],
                          }),
                      })
                      .exactOptional()
                      .openapi({ title: 'AdditionalServicesRequest', required: [] }),
                    allotmentDetails: z
                      .object({
                        tourName: z.string().exactOptional(),
                        tourReference: z.string().exactOptional(),
                      })
                      .exactOptional()
                      .openapi({ title: 'AllotmentDetails', required: [] }),
                    brandedFare: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          'The name of the Fare Family corresponding to the fares. Only for the GDS provider and if the airline has fare families filled',
                        example: 'LIGHTONE',
                      }),
                    cabin: TravelClassSchema.exactOptional(),
                    class: z
                      .string()
                      .regex(/[A-Z]{1}/)
                      .exactOptional()
                      .openapi({
                        description:
                          'The code of the booking class, a.k.a. class of service or Reservations/Booking Designator (RBD)',
                        example: 'A',
                      }),
                    fareBasis: z
                      .string()
                      .regex(/[[A-Z0-9]{1,18}/)
                      .exactOptional()
                      .openapi({
                        description:
                          'Fare basis specifying the rules of a fare. Usually, though not always, is composed of the booking class code followed by a set of letters and digits representing other characteristics of the ticket, such as refundability, minimum stay requirements, discounts or special promotional elements.',
                        example: 'ANNNNF4K',
                      }),
                    includedCheckedBags: BaggageAllowanceSchema.exactOptional(),
                    isAllotment: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description: 'True if the corresponding booking class is in an allotment',
                        example: true,
                      }),
                    segmentId: z
                      .string()
                      .openapi({ description: 'Id of the segment', example: '1' }),
                    sliceDiceIndicator: SliceDiceIndicatorSchema.exactOptional(),
                  })
                  .openapi({
                    description: 'Fare details of the segment',
                    required: ['segmentId'],
                    title: 'FareDetailsBySegment',
                  }),
              )
              .min(1)
              .max(18),
            fareOption: TravelerPricingFareOptionSchema,
            price: PriceSchema.exactOptional(),
            travelerId: z.string().openapi({ description: 'Id of the traveler', example: '1' }),
            travelerType: TravelerTypeSchema,
          })
          .openapi({
            required: ['travelerId', 'fareOption', 'travelerType', 'fareDetailsBySegment'],
            title: 'TravelerPricing',
          }),
      )
      .min(1)
      .max(18)
      .exactOptional()
      .openapi({
        description: 'Fare information for each traveler/segment',
        title: 'TravelerPricings',
      }),
    type: z.string().openapi({ description: 'the resource name', example: 'flight-offer' }),
    validatingAirlineCodes: z
      .array(z.string())
      .min(1)
      .max(9)
      .exactOptional()
      .openapi({
        description: 'This option ensures that the system will only consider these airlines.',
        example: ['AF'],
      }),
  })
  .openapi({ required: ['type', 'id'], title: 'Flight-offer' })
  .openapi('FlightOffer')

const OriginDestinationSchema = z
  .object({
    alternativeDestinationsCodes: z
      .array(z.string().openapi({ title: 'code' }))
      .min(1)
      .max(2)
      .exactOptional()
      .openapi({
        description:
          'Set of alternative destination location, such as a city or an airport. Currently, only the locations defined in [IATA](http://www.iata.org/publications/Pages/code-search.aspx) are supported.',
      }),
    alternativeOriginsCodes: z
      .array(z.string().openapi({ title: 'code' }))
      .min(1)
      .max(2)
      .exactOptional()
      .openapi({
        description:
          'Set of alternative origin location, such as a city or an airport. Currently, only the locations defined in [IATA](http://www.iata.org/publications/Pages/code-search.aspx) are supported.',
        example: ['LON', 'MUC'],
      }),
    arrivalDateTimeRange: DateTimeRangeSchema.exactOptional(),
    departureDateTimeRange: DateTimeRangeSchema.exactOptional(),
    destinationLocationCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Destination location, such as a city or an airport. Currently, only the locations defined in [IATA](http://www.iata.org/publications/Pages/code-search.aspx) are supported.',
        example: 'NYC',
      }),
    destinationRadius: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Include other possible locations around the point, located less than this distance in kilometers away. Max:300\n\nCan not be combined with "dateWindow" or "timeWindow".\n',
        example: 200,
      }),
    excludedConnectionPoints: z
      .array(z.string().openapi({ title: 'code' }))
      .min(1)
      .max(3)
      .exactOptional()
      .openapi({
        description:
          'List of excluded connections points. Any FlightOffer with these connections points will be present in response. Currently, only the locations defined in IATA are supported. Used only by the AMADEUS provider',
        example: ['MRS'],
      }),
    id: z.string().exactOptional().openapi({ example: 1 }),
    includedConnectionPoints: z
      .array(z.string().openapi({ title: 'code' }))
      .min(1)
      .max(2)
      .exactOptional()
      .openapi({
        description:
          'List of included connections points. When an includedViaPoints option is specified, all FlightOffer returned must at least go via this Connecting Point. Currently, only the locations defined in IATA are supported. Used only by the AMADEUS provider',
        example: ['MRS'],
      }),
    originLocationCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Origin location, such as a city or an airport. Currently, only the locations defined in [IATA](http://www.iata.org/publications/Pages/code-search.aspx) are supported.',
        example: 'PAR',
      }),
    originRadius: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Include other possible locations around the point, located less than this distance in kilometers away. Max:300\n\nCan not be combined with "dateWindow" or "timeWindow".\n',
        example: 200,
      }),
  })
  .openapi({ required: [] })
  .openapi('OriginDestination')

const SearchCriteriaSchema = z
  .object({
    addOneWayOffers: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'This option allows activate the one-way combinable feature',
        example: true,
      }),
    additionalInformation: z
      .object({
        brandedFares: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If true, returns the fare family name for each flight-offer which supports fare family',
            example: true,
          }),
        chargeableCheckedBags: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If true, returns the price of the first additional bag when the airline is an "Amadeus Ancillary Services" member.',
            example: true,
          }),
      })
      .exactOptional()
      .openapi({ title: 'AdditionalInformation', required: [] }),
    allowAlternativeFareOptions: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This option allows to default to a standard fareOption if no offers are found for the selected fareOption.',
        example: true,
      }),
    excludeAllotments: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This option allows to exclude the isAllotment flag associated to a booking class in the search response when it exist.',
        example: false,
      }),
    flightFilters: z
      .object({
        busSegmentAllowed: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'This flag enable/disable filtering of bus segment',
            example: true,
          }),
        cabinRestrictions: z
          .array(
            z
              .object({
                cabin: TravelClassSchema.exactOptional(),
                coverage: CoverageSchema.exactOptional(),
                originDestinationIds: z
                  .array(z.string())
                  .exactOptional()
                  .openapi({
                    description:
                      'The list of originDestination identifiers for which the cabinRestriction applies',
                    example: [1, 2],
                    title: 'originDestinationIds',
                  }),
              })
              .openapi({ title: 'CabinRestriction', required: [] }),
          )
          .min(1)
          .max(6)
          .exactOptional()
          .openapi({ description: 'Restriction towards cabins.', title: 'CabinRestrictions' }),
        carrierRestrictions: z
          .object({
            blacklistedInEUAllowed: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'This flag enable/disable filtering of blacklisted airline by EU. The list of the banned airlines is published in the Official Journal of the European Union, where they are included as annexes A and B to the Commission Regulation. The blacklist of an airline can concern all its flights or some specific aircraft types pertaining to the airline',
              }),
            excludedCarrierCodes: z
              .array(z.string())
              .min(1)
              .max(99)
              .exactOptional()
              .openapi({
                description:
                  'This option ensures that the system will only consider these airlines.',
              }),
            includedCarrierCodes: z
              .array(z.string())
              .min(1)
              .max(99)
              .exactOptional()
              .openapi({
                description:
                  'This option ensures that the system will only consider these airlines.',
              }),
          })
          .exactOptional()
          .openapi({
            description: 'Restriction towards carriers.',
            title: 'CarrierRestrictions',
            required: [],
          }),
        connectionRestriction: z
          .object({
            airportChangeAllowed: z
              .boolean()
              .exactOptional()
              .openapi({
                description: 'Allow to change airport during connection',
                example: false,
              }),
            maxNumberOfConnections: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  'The maximal number of connections for each itinerary. Value can be 0, 1 or 2.',
                example: 2,
              }),
            technicalStopsAllowed: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'This option allows the single segment to have one or more intermediate stops (technical stops).',
                example: true,
              }),
          })
          .exactOptional()
          .openapi({
            description: 'Restriction towards number of connections.',
            title: 'ConnectionRestriction',
            required: [],
          }),
        crossBorderAllowed: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Allows to search a location outside the borders when a radius around a location is specified. Default is false.',
            example: false,
          }),
        maxFlightTime: z
          .number()
          .exactOptional()
          .openapi({
            description:
              'This option allows to modify the value for the Elapsed Flying Time (EFT) masterPricer option',
            example: 200,
          }),
        moreOvernightsAllowed: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'This flag enables/disables the possibility to have more overnight flights in Low Fare Search',
            example: false,
          }),
        railSegmentAllowed: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'This flag enable/disable filtering of rail segment (TGV AIR, RAIL ...)',
            example: true,
          }),
        returnToDepartureAirport: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'This option force to retrieve flight-offer with a departure and a return in the same airport',
            example: false,
          }),
      })
      .exactOptional()
      .openapi({ title: 'FlightFilters', required: [] }),
    maxFlightOffers: z
      .number()
      .default(250)
      .exactOptional()
      .openapi({ description: 'Maximum number of flight offers returned (Max 250)', example: 250 }),
    maxPrice: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'maximum price per traveler. By default, no limit is applied. If specified, the value should be a positive number with no decimals',
        example: 100,
      }),
    oneFlightOfferPerDay: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Requests the system to find at least one flight-offer per day, if possible, when a range of dates is specified. Default is false.',
        example: true,
      }),
    pricingOptions: ExtendedPricingOptionsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchCriteria')

const TravelerSchema = z
  .object({
    associatedAdultId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'if type="HELD_INFANT", corresponds to the adult travelers\'s id who will share the seat',
      }),
    id: z.string().openapi({ example: 1 }),
    travelerType: TravelerTypeSchema,
  })
  .openapi({ required: ['id', 'travelerType'] })
  .openapi('Traveler')

const GetFlightOffersQuerySchema = z
  .object({
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The currency code, as defined in [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217), to reflect the currency in which this amount is expressed.',
        example: 'EUR',
      }),
    originDestinations: z
      .array(OriginDestinationSchema)
      .min(1)
      .max(6)
      .openapi({
        description:
          'Origins and Destinations must be properly ordered in time (chronological order in accordance with the timezone of each location) to describe the journey consistently. Dates and times must not be past nor more than 365 days in the future, according to provider settings.Number of Origins and Destinations must not exceed the limit defined in provider settings.',
        title: 'originDestinations',
      }),
    searchCriteria: SearchCriteriaSchema.exactOptional(),
    sources: z
      .array(FlightOfferSourceSchema)
      .min(1)
      .openapi({
        description:
          'Allows enable one or more sources. If present in the list, these sources will be called by the system.',
        title: 'sources',
      }),
    travelers: z.array(TravelerSchema).min(1).max(18).openapi({ title: 'travelers' }),
  })
  .openapi({
    example: {
      currencyCode: 'USD',
      originDestinations: [
        {
          departureDateTimeRange: { date: '2020-08-01', time: '10:00:00' },
          destinationLocationCode: 'MAD',
          id: '1',
          originLocationCode: 'RIO',
        },
        {
          departureDateTimeRange: { date: '2020-08-05', time: '17:00:00' },
          destinationLocationCode: 'RIO',
          id: '2',
          originLocationCode: 'MAD',
        },
      ],
      searchCriteria: {
        flightFilters: {
          cabinRestrictions: [
            { cabin: 'BUSINESS', coverage: 'MOST_SEGMENTS', originDestinationIds: ['1'] },
          ],
          carrierRestrictions: { excludedCarrierCodes: ['AA', 'TP', 'AZ'] },
        },
        maxFlightOffers: 2,
      },
      sources: ['GDS'],
      travelers: [
        { id: '1', travelerType: 'ADULT' },
        { id: '2', travelerType: 'CHILD' },
      ],
    },
    required: ['originDestinations', 'travelers', 'sources'],
    title: 'getFlightOffersQuery',
  })
  .openapi('GetFlightOffersQuery')

const _500Response = {
  description: 'Unexpected error',
  content: { 'application/vnd.amadeus+json': { schema: Error_500Schema } },
}

const _400SearchResponse = {
  description:
    'code    | title                                 \n------- | ------------------------------------- \n425     | INVALID DATE\n477     | INVALID FORMAT\n2668    | PARAMETER COMBINATION INVALID/RESTRICTED\n4926    | INVALID DATA RECEIVED\n10661   | MAXIMUM NUMBER OF OCCURRENCES EXCEEDED \n32171   | MANDATORY DATA MISSING\n',
  content: { 'application/vnd.amadeus+json': { schema: Error_400Schema } },
}

const GETAirOffersReplyResponse = {
  description: 'Successful Operation',
  content: {
    'application/vnd.amadeus+json': {
      schema: z
        .object({
          data: z.array(FlightOfferSchema),
          dictionaries: DictionariesSchema.exactOptional(),
          meta: CollectionMetaLinkSchema.exactOptional(),
          warnings: z.array(IssueSchema).exactOptional(),
        })
        .openapi({
          example: {
            data: [
              {
                id: '1',
                instantTicketingRequired: false,
                itineraries: [
                  {
                    duration: 'PT32H15M',
                    segments: [
                      {
                        aircraft: { code: '789' },
                        arrival: { at: '2021-02-02T00:30:00', iataCode: 'SIN', terminal: '1' },
                        blacklistedInEU: false,
                        carrierCode: 'TR',
                        departure: { at: '2021-02-01T19:15:00', iataCode: 'SYD', terminal: '1' },
                        duration: 'PT8H15M',
                        id: '1',
                        number: '13',
                        numberOfStops: 0,
                        operating: { carrierCode: 'TR' },
                      },
                      {
                        aircraft: { code: '788' },
                        arrival: { at: '2021-02-02T23:30:00', iataCode: 'DMK', terminal: '1' },
                        blacklistedInEU: false,
                        carrierCode: 'TR',
                        departure: { at: '2021-02-02T22:05:00', iataCode: 'SIN', terminal: '1' },
                        duration: 'PT2H25M',
                        id: '2',
                        number: '868',
                        numberOfStops: 0,
                        operating: { carrierCode: 'TR' },
                      },
                    ],
                  },
                  {
                    duration: 'PT15H',
                    segments: [
                      {
                        aircraft: { code: '788' },
                        arrival: { at: '2021-02-06T02:50:00', iataCode: 'SIN', terminal: '1' },
                        blacklistedInEU: false,
                        carrierCode: 'TR',
                        departure: { at: '2021-02-05T23:15:00', iataCode: 'DMK', terminal: '1' },
                        duration: 'PT2H35M',
                        id: '5',
                        number: '867',
                        numberOfStops: 0,
                        operating: { carrierCode: 'TR' },
                      },
                      {
                        aircraft: { code: '789' },
                        arrival: { at: '2021-02-06T18:15:00', iataCode: 'SYD', terminal: '1' },
                        blacklistedInEU: false,
                        carrierCode: 'TR',
                        departure: { at: '2021-02-06T06:55:00', iataCode: 'SIN', terminal: '1' },
                        duration: 'PT8H20M',
                        id: '6',
                        number: '12',
                        numberOfStops: 0,
                        operating: { carrierCode: 'TR' },
                      },
                    ],
                  },
                ],
                lastTicketingDate: '2020-08-04',
                nonHomogeneous: false,
                numberOfBookableSeats: 9,
                oneWay: false,
                price: {
                  base: '334.00',
                  currency: 'EUR',
                  fees: [
                    { amount: '0.00', type: 'SUPPLIER' },
                    { amount: '0.00', type: 'TICKETING' },
                  ],
                  grandTotal: '546.70',
                  total: '546.70',
                },
                pricingOptions: { fareType: ['PUBLISHED'], includedCheckedBagsOnly: true },
                source: 'GDS',
                travelerPricings: [
                  {
                    fareDetailsBySegment: [
                      {
                        cabin: 'ECONOMY',
                        class: 'O',
                        fareBasis: 'O2TR24',
                        includedCheckedBags: { weight: 20, weightUnit: 'KG' },
                        segmentId: '1',
                      },
                      {
                        cabin: 'ECONOMY',
                        class: 'O',
                        fareBasis: 'O2TR24',
                        includedCheckedBags: { weight: 20, weightUnit: 'KG' },
                        segmentId: '2',
                      },
                      {
                        cabin: 'ECONOMY',
                        class: 'X',
                        fareBasis: 'X2TR24',
                        includedCheckedBags: { weight: 20, weightUnit: 'KG' },
                        segmentId: '5',
                      },
                      {
                        cabin: 'ECONOMY',
                        class: 'H',
                        fareBasis: 'H2TR24',
                        includedCheckedBags: { weight: 20, weightUnit: 'KG' },
                        segmentId: '6',
                      },
                    ],
                    fareOption: 'STANDARD',
                    price: { base: '334.00', currency: 'EUR', total: '546.70' },
                    travelerId: '1',
                    travelerType: 'ADULT',
                  },
                ],
                type: 'flight-offer',
                validatingAirlineCodes: ['HR'],
              },
              {
                id: '2',
                instantTicketingRequired: false,
                itineraries: [
                  {
                    duration: 'PT32H15M',
                    segments: [
                      {
                        aircraft: { code: '789' },
                        arrival: { at: '2021-02-02T00:30:00', iataCode: 'SIN', terminal: '1' },
                        blacklistedInEU: false,
                        carrierCode: 'TR',
                        departure: { at: '2021-02-01T19:15:00', iataCode: 'SYD', terminal: '1' },
                        duration: 'PT8H15M',
                        id: '1',
                        number: '13',
                        numberOfStops: 0,
                        operating: { carrierCode: 'TR' },
                      },
                      {
                        aircraft: { code: '788' },
                        arrival: { at: '2021-02-02T23:30:00', iataCode: 'DMK', terminal: '1' },
                        blacklistedInEU: false,
                        carrierCode: 'TR',
                        departure: { at: '2021-02-02T22:05:00', iataCode: 'SIN', terminal: '1' },
                        duration: 'PT2H25M',
                        id: '2',
                        number: '868',
                        numberOfStops: 0,
                        operating: { carrierCode: 'TR' },
                      },
                    ],
                  },
                  {
                    duration: 'PT16H35M',
                    segments: [
                      {
                        aircraft: { code: '788' },
                        arrival: { at: '2021-02-05T20:00:00', iataCode: 'SIN', terminal: '1' },
                        blacklistedInEU: false,
                        carrierCode: 'TR',
                        departure: { at: '2021-02-05T16:25:00', iataCode: 'DMK', terminal: '1' },
                        duration: 'PT2H35M',
                        id: '7',
                        number: '869',
                        numberOfStops: 0,
                        operating: { carrierCode: 'TR' },
                      },
                      {
                        aircraft: { code: '788' },
                        arrival: { at: '2021-02-06T13:00:00', iataCode: 'SYD', terminal: '1' },
                        blacklistedInEU: false,
                        carrierCode: 'TR',
                        departure: { at: '2021-02-06T02:00:00', iataCode: 'SIN', terminal: '1' },
                        duration: 'PT8H',
                        id: '8',
                        number: '2',
                        numberOfStops: 0,
                        operating: { carrierCode: 'TR' },
                      },
                    ],
                  },
                ],
                lastTicketingDate: '2020-08-04',
                nonHomogeneous: false,
                numberOfBookableSeats: 9,
                oneWay: false,
                price: {
                  base: '334.00',
                  currency: 'EUR',
                  fees: [
                    { amount: '0.00', type: 'SUPPLIER' },
                    { amount: '0.00', type: 'TICKETING' },
                  ],
                  grandTotal: '546.70',
                  total: '546.70',
                },
                pricingOptions: { fareType: ['PUBLISHED'], includedCheckedBagsOnly: true },
                source: 'GDS',
                travelerPricings: [
                  {
                    fareDetailsBySegment: [
                      {
                        cabin: 'ECONOMY',
                        class: 'O',
                        fareBasis: 'O2TR24',
                        includedCheckedBags: { weight: 20, weightUnit: 'KG' },
                        segmentId: '1',
                      },
                      {
                        cabin: 'ECONOMY',
                        class: 'O',
                        fareBasis: 'O2TR24',
                        includedCheckedBags: { weight: 20, weightUnit: 'KG' },
                        segmentId: '2',
                      },
                      {
                        cabin: 'ECONOMY',
                        class: 'X',
                        fareBasis: 'X2TR24',
                        includedCheckedBags: { weight: 20, weightUnit: 'KG' },
                        segmentId: '7',
                      },
                      {
                        cabin: 'ECONOMY',
                        class: 'H',
                        fareBasis: 'H2TR24',
                        includedCheckedBags: { weight: 20, weightUnit: 'KG' },
                        segmentId: '8',
                      },
                    ],
                    fareOption: 'STANDARD',
                    price: { base: '334.00', currency: 'EUR', total: '546.70' },
                    travelerId: '1',
                    travelerType: 'ADULT',
                  },
                ],
                type: 'flight-offer',
                validatingAirlineCodes: ['HR'],
              },
              {
                id: '3',
                instantTicketingRequired: false,
                itineraries: [
                  {
                    duration: 'PT13H30M',
                    segments: [
                      {
                        aircraft: { code: '788' },
                        arrival: { at: '2021-02-01T19:15:00', iataCode: 'SIN', terminal: '1' },
                        blacklistedInEU: false,
                        carrierCode: 'TR',
                        departure: { at: '2021-02-01T14:00:00', iataCode: 'SYD', terminal: '1' },
                        duration: 'PT8H15M',
                        id: '3',
                        number: '3',
                        numberOfStops: 0,
                        operating: { carrierCode: 'TR' },
                      },
                      {
                        aircraft: { code: '788' },
                        arrival: { at: '2021-02-01T23:30:00', iataCode: 'DMK', terminal: '1' },
                        blacklistedInEU: false,
                        carrierCode: 'TR',
                        departure: { at: '2021-02-01T22:05:00', iataCode: 'SIN', terminal: '1' },
                        duration: 'PT2H25M',
                        id: '4',
                        number: '868',
                        numberOfStops: 0,
                        operating: { carrierCode: 'TR' },
                      },
                    ],
                  },
                  {
                    duration: 'PT15H',
                    segments: [
                      {
                        aircraft: { code: '788' },
                        arrival: { at: '2021-02-06T02:50:00', iataCode: 'SIN', terminal: '1' },
                        blacklistedInEU: false,
                        carrierCode: 'TR',
                        departure: { at: '2021-02-05T23:15:00', iataCode: 'DMK', terminal: '1' },
                        duration: 'PT2H35M',
                        id: '5',
                        number: '867',
                        numberOfStops: 0,
                        operating: { carrierCode: 'TR' },
                      },
                      {
                        aircraft: { code: '789' },
                        arrival: { at: '2021-02-06T18:15:00', iataCode: 'SYD', terminal: '1' },
                        blacklistedInEU: false,
                        carrierCode: 'TR',
                        departure: { at: '2021-02-06T06:55:00', iataCode: 'SIN', terminal: '1' },
                        duration: 'PT8H20M',
                        id: '6',
                        number: '12',
                        numberOfStops: 0,
                        operating: { carrierCode: 'TR' },
                      },
                    ],
                  },
                ],
                lastTicketingDate: '2020-08-04',
                nonHomogeneous: false,
                numberOfBookableSeats: 9,
                oneWay: false,
                price: {
                  base: '340.00',
                  currency: 'EUR',
                  fees: [
                    { amount: '0.00', type: 'SUPPLIER' },
                    { amount: '0.00', type: 'TICKETING' },
                  ],
                  grandTotal: '552.70',
                  total: '552.70',
                },
                pricingOptions: { fareType: ['PUBLISHED'], includedCheckedBagsOnly: true },
                source: 'GDS',
                travelerPricings: [
                  {
                    fareDetailsBySegment: [
                      {
                        cabin: 'ECONOMY',
                        class: 'O',
                        fareBasis: 'O2TR24',
                        includedCheckedBags: { weight: 20, weightUnit: 'KG' },
                        segmentId: '3',
                      },
                      {
                        cabin: 'ECONOMY',
                        class: 'X',
                        fareBasis: 'X2TR24',
                        includedCheckedBags: { weight: 20, weightUnit: 'KG' },
                        segmentId: '4',
                      },
                      {
                        cabin: 'ECONOMY',
                        class: 'X',
                        fareBasis: 'X2TR24',
                        includedCheckedBags: { weight: 20, weightUnit: 'KG' },
                        segmentId: '5',
                      },
                      {
                        cabin: 'ECONOMY',
                        class: 'H',
                        fareBasis: 'H2TR24',
                        includedCheckedBags: { weight: 20, weightUnit: 'KG' },
                        segmentId: '6',
                      },
                    ],
                    fareOption: 'STANDARD',
                    price: { base: '340.00', currency: 'EUR', total: '552.70' },
                    travelerId: '1',
                    travelerType: 'ADULT',
                  },
                ],
                type: 'flight-offer',
                validatingAirlineCodes: ['HR'],
              },
            ],
            dictionaries: {
              aircraft: { '789': 'BOEING 787-9', '77W': 'BOEING 777-300ER' },
              carriers: { TR: 'SCOOT' },
              currencies: { EUR: 'EURO' },
              locations: {
                DMK: { cityCode: 'BKK', countryCode: 'TH' },
                SIN: { cityCode: 'SIN', countryCode: 'SG' },
                SYD: { cityCode: 'SYD', countryCode: 'AU' },
              },
            },
            meta: {
              count: 3,
              links: {
                self: 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2021-02-01&returnDate=2021-02-05&adults=1&max=3',
              },
            },
          },
          required: ['data'],
          title: 'Success',
        }),
    },
  },
}

const ReturnAirOffersResponse = {
  description: 'Successful Operation',
  content: {
    'application/vnd.amadeus+json': {
      schema: z
        .object({
          data: z.array(FlightOfferSchema),
          dictionaries: DictionariesSchema.exactOptional(),
          meta: CollectionMetaSchema.exactOptional(),
          warnings: z.array(IssueSchema).exactOptional(),
        })
        .openapi({
          example: {
            data: [
              {
                id: '1',
                instantTicketingRequired: false,
                itineraries: [
                  {
                    duration: 'PT15H55M',
                    segments: [
                      {
                        aircraft: { code: '788' },
                        arrival: { at: '2020-08-02T13:10:00', iataCode: 'LHR', terminal: '5' },
                        blacklistedInEU: false,
                        carrierCode: 'BA',
                        departure: { at: '2020-08-01T21:50:00', iataCode: 'GIG', terminal: '2' },
                        duration: 'PT11H20M',
                        id: '1',
                        number: '248',
                        numberOfStops: 0,
                        operating: { carrierCode: 'BA' },
                      },
                      {
                        aircraft: { code: '321' },
                        arrival: { at: '2020-08-02T18:45:00', iataCode: 'MAD', terminal: '4S' },
                        blacklistedInEU: false,
                        carrierCode: 'BA',
                        departure: { at: '2020-08-02T15:15:00', iataCode: 'LHR', terminal: '5' },
                        duration: 'PT2H30M',
                        id: '2',
                        number: '462',
                        numberOfStops: 0,
                        operating: { carrierCode: 'BA' },
                      },
                    ],
                  },
                  {
                    duration: 'PT13H35M',
                    segments: [
                      {
                        aircraft: { code: '346' },
                        arrival: { at: '2020-08-06T05:40:00', iataCode: 'GRU', terminal: '3' },
                        blacklistedInEU: false,
                        carrierCode: 'IB',
                        departure: { at: '2020-08-05T23:55:00', iataCode: 'MAD', terminal: '4S' },
                        duration: 'PT10H45M',
                        id: '5',
                        number: '6827',
                        numberOfStops: 0,
                        operating: { carrierCode: 'IB' },
                      },
                      {
                        aircraft: { code: '320' },
                        arrival: { at: '2020-08-06T08:30:00', iataCode: 'GIG', terminal: '2' },
                        blacklistedInEU: false,
                        carrierCode: 'LA',
                        departure: { at: '2020-08-06T07:30:00', iataCode: 'GRU', terminal: '2' },
                        duration: 'PT1H',
                        id: '6',
                        number: '4508',
                        numberOfStops: 0,
                      },
                    ],
                  },
                ],
                lastTicketingDate: '2020-01-16',
                nonHomogeneous: false,
                numberOfBookableSeats: 7,
                oneWay: false,
                price: {
                  base: '3661.00',
                  currency: 'USD',
                  fees: [
                    { amount: '0.00', type: 'SUPPLIER' },
                    { amount: '0.00', type: 'TICKETING' },
                  ],
                  grandTotal: '3842.10',
                  total: '3842.10',
                },
                pricingOptions: { fareType: ['PUBLISHED'], includedCheckedBagsOnly: false },
                source: 'GDS',
                travelerPricings: [
                  {
                    fareDetailsBySegment: [
                      {
                        brandedFare: 'BUSINESS',
                        cabin: 'BUSINESS',
                        class: 'R',
                        fareBasis: 'RNNZ60S3',
                        includedCheckedBags: { quantity: 2 },
                        segmentId: '1',
                      },
                      {
                        brandedFare: 'BUSINESS',
                        cabin: 'BUSINESS',
                        class: 'J',
                        fareBasis: 'RNNZ60S3',
                        includedCheckedBags: { quantity: 2 },
                        segmentId: '2',
                      },
                      {
                        brandedFare: 'BAGSEAT',
                        cabin: 'ECONOMY',
                        class: 'V',
                        fareBasis: 'VDH0NNM3',
                        includedCheckedBags: { quantity: 1 },
                        segmentId: '5',
                      },
                      {
                        brandedFare: 'BAGSEAT',
                        cabin: 'ECONOMY',
                        class: 'V',
                        fareBasis: 'VDH0NNM3',
                        includedCheckedBags: { quantity: 1 },
                        segmentId: '6',
                      },
                    ],
                    fareOption: 'STANDARD',
                    price: { base: '2088.00', currency: 'USD', total: '2178.55' },
                    travelerId: '1',
                    travelerType: 'ADULT',
                  },
                  {
                    fareDetailsBySegment: [
                      {
                        brandedFare: 'BUSINESS',
                        cabin: 'BUSINESS',
                        class: 'R',
                        fareBasis: 'RNNZ60S3',
                        segmentId: '1',
                      },
                      {
                        brandedFare: 'BUSINESS',
                        cabin: 'BUSINESS',
                        class: 'J',
                        fareBasis: 'RNNZ60S3',
                        segmentId: '2',
                      },
                      {
                        brandedFare: 'BAGSEAT',
                        cabin: 'ECONOMY',
                        class: 'V',
                        fareBasis: 'VDH0NNM3',
                        segmentId: '5',
                      },
                      {
                        brandedFare: 'BAGSEAT',
                        cabin: 'ECONOMY',
                        class: 'V',
                        fareBasis: 'VDH0NNM3',
                        segmentId: '6',
                      },
                    ],
                    fareOption: 'STANDARD',
                    price: { base: '1573.00', currency: 'USD', total: '1663.55' },
                    travelerId: '2',
                    travelerType: 'CHILD',
                  },
                ],
                type: 'flight-offer',
                validatingAirlineCodes: ['BA'],
              },
              {
                id: '2',
                instantTicketingRequired: false,
                itineraries: [
                  {
                    duration: 'PT15H55M',
                    segments: [
                      {
                        aircraft: { code: '788' },
                        arrival: { at: '2020-08-02T13:10:00', iataCode: 'LHR', terminal: '5' },
                        blacklistedInEU: false,
                        carrierCode: 'BA',
                        departure: { at: '2020-08-01T21:50:00', iataCode: 'GIG', terminal: '2' },
                        duration: 'PT11H20M',
                        id: '1',
                        number: '248',
                        numberOfStops: 0,
                        operating: { carrierCode: 'BA' },
                      },
                      {
                        aircraft: { code: '321' },
                        arrival: { at: '2020-08-02T18:45:00', iataCode: 'MAD', terminal: '4S' },
                        blacklistedInEU: false,
                        carrierCode: 'BA',
                        departure: { at: '2020-08-02T15:15:00', iataCode: 'LHR', terminal: '5' },
                        duration: 'PT2H30M',
                        id: '2',
                        number: '462',
                        numberOfStops: 0,
                        operating: { carrierCode: 'BA' },
                      },
                    ],
                  },
                  {
                    duration: 'PT19H5M',
                    segments: [
                      {
                        aircraft: { code: '346' },
                        arrival: { at: '2020-08-06T05:40:00', iataCode: 'GRU', terminal: '3' },
                        blacklistedInEU: false,
                        carrierCode: 'IB',
                        departure: { at: '2020-08-05T23:55:00', iataCode: 'MAD', terminal: '4S' },
                        duration: 'PT10H45M',
                        id: '3',
                        number: '6827',
                        numberOfStops: 0,
                        operating: { carrierCode: 'IB' },
                      },
                      {
                        aircraft: { code: '321' },
                        arrival: { at: '2020-08-06T14:00:00', iataCode: 'GIG', terminal: '2' },
                        blacklistedInEU: false,
                        carrierCode: 'LA',
                        departure: { at: '2020-08-06T13:00:00', iataCode: 'GRU', terminal: '2' },
                        duration: 'PT1H',
                        id: '4',
                        number: '4537',
                        numberOfStops: 0,
                      },
                    ],
                  },
                ],
                lastTicketingDate: '2020-01-16',
                nonHomogeneous: false,
                numberOfBookableSeats: 7,
                oneWay: false,
                price: {
                  base: '3661.00',
                  currency: 'USD',
                  fees: [
                    { amount: '0.00', type: 'SUPPLIER' },
                    { amount: '0.00', type: 'TICKETING' },
                  ],
                  grandTotal: '3842.10',
                  total: '3842.10',
                },
                pricingOptions: { fareType: ['PUBLISHED'], includedCheckedBagsOnly: false },
                source: 'GDS',
                travelerPricings: [
                  {
                    fareDetailsBySegment: [
                      {
                        brandedFare: 'BUSINESS',
                        cabin: 'BUSINESS',
                        class: 'R',
                        fareBasis: 'RNNZ60S3',
                        includedCheckedBags: { quantity: 2 },
                        segmentId: '1',
                      },
                      {
                        brandedFare: 'BUSINESS',
                        cabin: 'BUSINESS',
                        class: 'J',
                        fareBasis: 'RNNZ60S3',
                        includedCheckedBags: { quantity: 2 },
                        segmentId: '2',
                      },
                      {
                        brandedFare: 'BAGSEAT',
                        cabin: 'ECONOMY',
                        class: 'V',
                        fareBasis: 'VDH0NNM3',
                        includedCheckedBags: { quantity: 1 },
                        segmentId: '3',
                      },
                      {
                        brandedFare: 'BAGSEAT',
                        cabin: 'ECONOMY',
                        class: 'V',
                        fareBasis: 'VDH0NNM3',
                        includedCheckedBags: { quantity: 1 },
                        segmentId: '4',
                      },
                    ],
                    fareOption: 'STANDARD',
                    price: { base: '2088.00', currency: 'USD', total: '2178.55' },
                    travelerId: '1',
                    travelerType: 'ADULT',
                  },
                  {
                    fareDetailsBySegment: [
                      {
                        brandedFare: 'BUSINESS',
                        cabin: 'BUSINESS',
                        class: 'R',
                        fareBasis: 'RNNZ60S3',
                        segmentId: '1',
                      },
                      {
                        brandedFare: 'BUSINESS',
                        cabin: 'BUSINESS',
                        class: 'J',
                        fareBasis: 'RNNZ60S3',
                        segmentId: '2',
                      },
                      {
                        brandedFare: 'BAGSEAT',
                        cabin: 'ECONOMY',
                        class: 'V',
                        fareBasis: 'VDH0NNM3',
                        segmentId: '3',
                      },
                      {
                        brandedFare: 'BAGSEAT',
                        cabin: 'ECONOMY',
                        class: 'V',
                        fareBasis: 'VDH0NNM3',
                        segmentId: '4',
                      },
                    ],
                    fareOption: 'STANDARD',
                    price: { base: '1573.00', currency: 'USD', total: '1663.55' },
                    travelerId: '2',
                    travelerType: 'CHILD',
                  },
                ],
                type: 'flight-offer',
                validatingAirlineCodes: ['BA'],
              },
            ],
            dictionaries: {
              aircraft: {
                '320': 'AIRBUS INDUSTRIE A320-100/200',
                '321': 'AIRBUS INDUSTRIE A321',
                '346': 'AIRBUS INDUSTRIE A340-600',
                '788': 'BOEING 787-8',
              },
              carriers: { BA: 'BRITISH AIRWAYS', IB: 'IBERIA', LA: 'LATAM AIRLINES GROUP' },
              currencies: { USD: 'US DOLLAR' },
              locations: {
                GIG: { cityCode: 'RIO', countryCode: 'BR' },
                GRU: { cityCode: 'SAO', countryCode: 'BR' },
                LHR: { cityCode: 'LON', countryCode: 'GB' },
                MAD: { cityCode: 'MAD', countryCode: 'ES' },
              },
            },
            meta: { count: 2 },
          },
          required: ['data'],
          title: 'Success',
        }),
    },
  },
}

const GetOverrideParamsSchema = z
  .string()
  .default('GET')
  .openapi({
    param: {
      description: 'the HTTP method to apply',
      in: 'header',
      name: 'X-HTTP-Method-Override',
      required: true,
      schema: { default: 'GET', type: 'string' },
    },
  })

export const getShoppingFlightOffersRoute = createRoute({
  method: 'get',
  path: '/shopping/flight-offers',
  tags: ['Shopping'],
  summary: 'Return list of Flight Offers based on searching criteria.',
  operationId: 'getFlightOffers',
  request: {
    query: z.object({
      originLocationCode: z
        .string()
        .regex(/[A-Z]{3}/)
        .openapi({
          param: {
            description:
              'city/airport [IATA code](http://www.iata.org/publications/Pages/code-search.aspx) from which the traveler will depart, e.g. BOS for Boston',
            example: 'SYD',
            in: 'query',
            name: 'originLocationCode',
            required: true,
            schema: { pattern: '[A-Z]{3}', type: 'string' },
          },
        }),
      destinationLocationCode: z
        .string()
        .regex(/[A-Z]{3}/)
        .openapi({
          param: {
            description:
              'city/airport [IATA code](http://www.iata.org/publications/Pages/code-search.aspx) to which the traveler is going, e.g. PAR for Paris',
            example: 'BKK',
            in: 'query',
            name: 'destinationLocationCode',
            required: true,
            schema: { pattern: '[A-Z]{3}', type: 'string' },
          },
        }),
      departureDate: z.iso
        .date()
        .openapi({
          param: {
            description:
              'the date on which the traveler will depart from the origin to go to the destination. Dates are specified in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-DD format, e.g. 2017-12-25',
            example: '2021-02-01',
            in: 'query',
            name: 'departureDate',
            required: true,
            schema: { format: 'date', type: 'string' },
          },
        }),
      returnDate: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description:
              'the date on which the traveler will depart from the destination to return to the origin. If this parameter is not specified, only one-way itineraries are found. If this parameter is specified, only round-trip itineraries are found. Dates are specified in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-DD format, e.g. 2018-02-28',
            in: 'query',
            name: 'returnDate',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      adults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(9),
        )
        .default(1)
        .openapi({
          param: {
            description: 'the number of adult travelers (age 12 or older on date of departure).',
            in: 'query',
            name: 'adults',
            required: true,
            schema: { default: 1, maximum: 9, minimum: 1, type: 'integer' },
          },
        }),
      children: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(9),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'the number of child travelers (older than age 2 and younger than age 12 on date of departure) who will each have their own separate seat. If specified, this number should be greater than or equal to 0',
            in: 'query',
            name: 'children',
            required: false,
            schema: { maximum: 9, minimum: 0, type: 'integer' },
          },
        }),
      infants: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(9),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'the number of infant travelers (whose age is less or equal to 2 on date of departure). Infants travel on the lap of an adult traveler, and thus the number of infants must not exceed the number of adults. If specified, this number should be greater than or equal to 0',
            in: 'query',
            name: 'infants',
            required: false,
            schema: { maximum: 9, minimum: 0, type: 'integer' },
          },
        }),
      travelClass: z
        .enum(['ECONOMY', 'PREMIUM_ECONOMY', 'BUSINESS', 'FIRST'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'most of the flight time should be spent in a cabin of this quality or higher. The accepted travel class is economy, premium economy, business or first class. If no travel class is specified, the search considers any travel class',
            in: 'query',
            name: 'travelClass',
            required: false,
            schema: { enum: ['ECONOMY', 'PREMIUM_ECONOMY', 'BUSINESS', 'FIRST'], type: 'string' },
          },
        }),
      includedAirlineCodes: z
        .string()
        .regex(/[0-9A-Z]{2}/)
        .exactOptional()
        .openapi({
          param: {
            description:
              'This option ensures that the system will only consider these airlines. This can not be cumulated with parameter excludedAirlineCodes.\n\nAirlines are specified as [IATA airline codes](http://www.iata.org/publications/Pages/code-search.aspx) and are comma-separated, e.g. 6X,7X,8X\n',
            explode: false,
            in: 'query',
            name: 'includedAirlineCodes',
            required: false,
            schema: { pattern: '[0-9A-Z]{2}', type: 'string' },
            style: 'form',
          },
        }),
      excludedAirlineCodes: z
        .string()
        .regex(/[0-9A-Z]{2}/)
        .exactOptional()
        .openapi({
          param: {
            description:
              'This option ensures that the system will ignore these airlines. This can not be cumulated with parameter includedAirlineCodes.\n\nAirlines are specified as [IATA airline codes](http://www.iata.org/publications/Pages/code-search.aspx) and are comma-separated, e.g. 6X,7X,8X\n',
            explode: false,
            in: 'query',
            name: 'excludedAirlineCodes',
            required: false,
            schema: { pattern: '[0-9A-Z]{2}', type: 'string' },
            style: 'form',
          },
        }),
      nonStop: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'if set to true, the search will find only flights going from the origin to the destination with no stop in between',
            in: 'query',
            name: 'nonStop',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      currencyCode: z
        .string()
        .regex(/[A-Z]{3}/)
        .exactOptional()
        .openapi({
          param: {
            description:
              'the preferred currency for the flight offers. Currency is specified in the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format, e.g. EUR for Euro',
            in: 'query',
            name: 'currencyCode',
            required: false,
            schema: { pattern: '[A-Z]{3}', type: 'string' },
          },
        }),
      maxPrice: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'maximum price per traveler. By default, no limit is applied. If specified, the value should be a positive number with no decimals',
            in: 'query',
            name: 'maxPrice',
            required: false,
            schema: { minimum: 1, type: 'integer' },
          },
        }),
      max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(250)
        .exactOptional()
        .openapi({
          param: {
            description:
              'maximum number of flight offers to return. If specified, the value should be greater than or equal to 1',
            in: 'query',
            name: 'max',
            required: false,
            schema: { default: 250, minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: { 200: GETAirOffersReplyResponse, 400: _400SearchResponse, default: _500Response },
})

export const postShoppingFlightOffersRoute = createRoute({
  method: 'post',
  path: '/shopping/flight-offers',
  tags: ['Shopping'],
  summary: 'Return list of Flight Offers based on posted searching criteria.',
  operationId: 'searchFlightOffers',
  request: {
    headers: z.object({ 'X-HTTP-Method-Override': GetOverrideParamsSchema }),
    body: {
      description: 'list of criteria to retrieve a list of flight offers',
      content: { 'application/vnd.amadeus+json': { schema: GetFlightOffersQuerySchema } },
      required: true,
    },
  },
  responses: { 200: ReturnAirOffersResponse, 400: _400SearchResponse, default: _500Response },
})
