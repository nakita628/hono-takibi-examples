import { createRoute, z } from '@hono/zod-openapi'

const PartSchema = z
  .object({
    includeInMultiple: z
      .boolean()
      .openapi({ description: 'Indicates if the bet can be used in a multiple bet' }),
    priceDen: z
      .int()
      .openapi({
        description: 'Price denominator - will be ignored for types other than L (Fixed Price)',
      }),
    priceNum: z
      .int()
      .openapi({
        description: 'Price numerator - will be ignored for types other than L (Fixed Price)',
      }),
    priceType: z
      .int()
      .openapi({ description: 'The type of price selected. For example - ‘L’ (Fixed)' }),
    selectionId: z
      .int()
      .openapi({ description: 'The selection identifier', 'x-eg': 'OB_OU00000001' }),
  })
  .openapi({ required: ['selectionId', 'priceType', 'priceNum', 'priceDen', 'includeInMultiple'] })
  .openapi('Part')

const LegSchema = z
  .object({
    parts: z.array(PartSchema),
    sort: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The leg sort. This element is present for complex bets but not for single bets.',
      }),
    type: z
      .string()
      .openapi({
        description:
          'The leg type. One of the following values: W - Win or E- Each-way. Even though the priceNum and priceDen are required for the bets with type value W (win), it is just optional from the endpoint point of view. There are requests / bets like outcomes with starting price but do not have a specific price. Generally prices can change, so if the type is win you have to resubmit and thus verify the price that the customer saw on the screen initially. The API will check if it matches the current price of William Hill. Note that if you send a wrong / outdated price you will receive the error message - Price changed.',
      }),
  })
  .openapi({ required: ['type', 'parts'] })
  .openapi('Leg')

const BetSchema = z
  .object({
    delayedBetId: z.string().exactOptional().openapi({ description: 'The delayed bet identifier' }),
    freeBetId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID number of the free bet token if used in conjunction with this bet',
      }),
    legs: z.array(LegSchema),
    number: z.int().openapi({ description: 'The bet number' }),
    stake: z.float64().openapi({ description: 'The amount of the stake placed on the bet' }),
    typeCode: z
      .string()
      .openapi({ description: 'The bet type code of the bet. For example: TBL (Treble)' }),
  })
  .openapi({ required: ['number', 'typeCode', 'stake', 'legs'] })
  .openapi('Bet')

const BetDelayedSchema = z
  .object({
    delayPeriodSeconds: z
      .int()
      .openapi({
        description:
          'The delay time period of the bet in seconds. The resubmission of the bet has to wait for the length of time (in seconds) returned in the delayPeriod before submitting the second request.',
      }),
    delayedBetId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the delayed bet. After the initial response is received, containing the delayPeriod and the delayBetId, the request is then resubmitted using the same delayBetId token that came in that initial response. Check the example below to see how to resend a delayed bet payload.',
      }),
    id: z.string().openapi({ description: 'The number of the bet' }),
    number: z
      .number()
      .exactOptional()
      .openapi({ description: 'Number of the bet if this is part of a multiple bet' }),
  })
  .openapi({ required: ['id', 'delayedBetId', 'delayPeriodSeconds'] })
  .openapi('BetDelayed')

const BetDelayedResponseSchema = z
  .array(BetDelayedSchema)
  .openapi({ title: 'delayedBets' })
  .openapi('BetDelayedResponse')

const PriceFormattedSchema = z
  .object({
    american: z.string().exactOptional().openapi({ description: 'The price in American format' }),
    decimal: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The decimal format of the price' }),
    fractional: z
      .string()
      .exactOptional()
      .openapi({ description: 'The fractional format of the price or EVS when the price evens.' }),
  })
  .openapi({ required: [] })
  .openapi('PriceFormatted')

const PlacedBetPartSchema = z
  .object({
    description: z.string().openapi({ description: 'Human-friendly description of the bet' }),
    eachWayDen: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'When the odds are shown in vulgar fractions this is the denominator of the fraction. For example: 2 in 5/2',
      }),
    eachWayNum: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'When the odds are shown in vulgar fractions this is the numerator of the fraction. For example: 5 in 5/2',
      }),
    eachWayPlaces: z
      .int()
      .exactOptional()
      .openapi({ description: 'The Each-way places available for the bet' }),
    eventDescription: z.string().openapi({ description: 'The description of the event' }),
    eventId: z
      .string()
      .regex(/^(OB_EV\d+)$/)
      .openapi({ description: 'Unique identifier of the event', 'x-eg': 'OB_EV00000001' }),
    eventMarketDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the market within an event' }),
    eventTypeDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of type of the event' }),
    handicap: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Denotes if the bet is part of a handicap market. For example: -1 if the selection starts on -1 goals (in football)',
      }),
    number: z.int().openapi({ description: 'The number of the bet' }),
    priceDen: z
      .int()
      .openapi({
        description:
          'When the odds are shown in vulgar fractions this is the denominator of the fraction. For example: 2 in 5/2',
      }),
    priceFormatted: PriceFormattedSchema.exactOptional(),
    priceNum: z
      .int()
      .openapi({
        description:
          'When the odds are shown in vulgar fractions this is the numerator of the fraction. For example: 5 in 5/2',
      }),
    priceType: z
      .string()
      .openapi({
        description: 'The price type chosen when the bet was placed. For example: L (Win)',
      }),
    result: z
      .string()
      .openapi({
        description:
          'The outcome of the bet/event. Can be one of the following values: W - Won; L - Lost; V - Void; - Result not yet available',
      }),
    rule4Deductions: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The official scale of deductions that apply when a runner is withdrawn',
      }),
    selectionId: z
      .string()
      .regex(/^(OB_OU\d+)$/)
      .exactOptional()
      .openapi({ description: 'Unique identifier of the selection', 'x-eg': 'OB_OU00000001' }),
    startDateTime: z
      .string()
      .openapi({ description: 'Time the event will start. For example: 2013-01-30 11:01:01' }),
  })
  .openapi({
    required: [
      'number',
      'description',
      'eventId',
      'eventDescription',
      'priceDen',
      'priceNum',
      'priceType',
      'result',
      'startDateTime',
    ],
  })
  .openapi('PlacedBetPart')

const PlacedBetLegSchema = z
  .object({
    number: z.int().openapi({ description: 'The leg number of the bet' }),
    parts: z.array(PlacedBetPartSchema),
    sort: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The leg sort. This element is present for complex bets but not for single bets.',
      }),
    type: z
      .string()
      .openapi({
        description:
          'The leg type. One of the following values: W - Win or E- Each-way. Even though the priceNum and priceDen are required for the bets with type value W (win), it is just optional from the endpoint point of view. There are requests / bets like outcomes with starting price but do not have a specific price. Generally prices can change, so if the type is win you have to resubmit and thus verify the price that the customer saw on the screen initially. The API will check if it matches the current price of William Hill. Note that if you send a wrong / outdated price you will receive the error message - Price changed.',
      }),
  })
  .openapi({ required: ['type', 'number', 'parts'] })
  .openapi('PlacedBetLeg')

const PlacedBetSchema = z
  .object({
    cashinValue: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The cash in value of the bet. For example £0.88. When no value is given or no value is present, no cash in is available',
      }),
    estimatedReturns: z
      .float64()
      .openapi({
        description:
          'The estimated value of the returns if the bet is successful. Note: when an estimated return isn’t available, as in the case of a bet placed on a horse at SP (starting price) where the actual price is unknown when the bet is placed, ‘NOT_AVAILABLE’ will appear in the response field.',
      }),
    freeBetValue: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'If a free bet token is used for the bet, this element represents the value',
      }),
    id: z.string().openapi({ description: 'The unique identifier of the bet' }),
    legs: z.array(PlacedBetLegSchema).exactOptional(),
    numLines: z.int().exactOptional().openapi({ description: 'Number of lines of bets' }),
    numSelections: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of selections that the bet is made of' }),
    receipt: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the receipt for the bet' }),
    settled: z.boolean().openapi({ description: 'Whether the bet is settled' }),
    stake: z
      .float64()
      .openapi({
        description:
          'The bet stake, which represents the total value of the bet. For example: £ 12.34',
      }),
    stakePerLine: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The individual stake on each line of the bet. For example: £ 6.17',
      }),
    status: z
      .string()
      .openapi({
        description:
          'The status of the bet. Can be one of the following: A - Active, S - suspended, C - Cashed Out',
      }),
    transDateTime: z.string().openapi({ description: 'The time the bet was placed' }),
    typeCode: z
      .string()
      .openapi({ description: 'The bet type code of the bet. For example: TBL (Treble)' }),
    typeName: z.string().openapi({ description: 'The name of the bet type. For example: Double' }),
    winnings: z.float64().openapi({ description: 'Actual value of the returns from this bet' }),
  })
  .openapi({
    required: [
      'id',
      'typeCode',
      'typeName',
      'transDateTime',
      'settled',
      'stake',
      'status',
      'winnings',
      'estimatedReturns',
    ],
  })
  .openapi('PlacedBet')

const HistoryBetsSchema = z.array(PlacedBetSchema).openapi('HistoryBets')

const BetHistoryResponseSchema = z
  .object({ bets: HistoryBetsSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('BetHistoryResponse')

const BetPlacedSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'The bet id' }),
    numLines: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of lines the bet consists of' }),
    number: z
      .number()
      .exactOptional()
      .openapi({ description: 'Number of the bet if this is part of a multiple bet' }),
    placedDateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time the bet was placed. For example: 2013-01-30TT13:34:20. The value of this element can be replaced with the current timestamp if it was missing.',
      }),
    receipt: z.string().openapi({ description: 'The unique ID of the bet receipt' }),
    totalStake: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The total amount staked on the bet' }),
  })
  .openapi({ required: ['receipt'] })
  .openapi('BetPlaced')

const BetPlacedResponseSchema = z
  .array(BetPlacedSchema)
  .openapi({ title: 'placedBets' })
  .openapi('BetPlacedResponse')

const BetSlipRequestSchema = z
  .object({ legs: z.array(LegSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('BetSlipRequest')

const FreeBetDetailSchema = z
  .object({
    awardDateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The time the free bet was awarded. For example 2014-11-013T23:59:10',
      }),
    displayText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The message explaining the offer displayed to the customer along with the free bet',
      }),
    expiryDateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the free bet expired. For example 2014-11-013T23:59:10' }),
    id: z.int().openapi({ description: 'The identifier of the free bet' }),
    offerDesc: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The description of the offer that enabled the customer to place a free bet',
      }),
    offerId: z.int().exactOptional().openapi({ description: 'The identifier of the offer' }),
    offerName: z
      .string()
      .openapi({
        description: 'The name of the offer that enabled the customer to place a free bet',
      }),
    startDateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The time the free bet offer started. For example 2014-11-013T23:59:10',
      }),
    value: z.number().openapi({ description: 'The value of the free bet' }),
  })
  .openapi({ required: ['id', 'offerName', 'value'] })
  .openapi('FreeBetDetail')

const BetslippartSchema = z
  .object({
    eachWayAvailable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether each way is available' }),
    includeInMultiple: z
      .boolean()
      .openapi({ description: 'Indicates if the bet can be used in a multiple bet' }),
    legGroup: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'To organise a number of outcome selections into one or more bet groups, such as a Single bet, a Double bet, a Trixie, etc',
      }),
    priceChanged: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there has been a change in the price' }),
    priceDen: z
      .int()
      .openapi({
        description: 'Price denominator - will be ignored for types other than L (Fixed Price)',
      }),
    priceNum: z
      .int()
      .openapi({
        description: 'Price numerator - will be ignored for types other than L (Fixed Price)',
      }),
    priceType: z
      .int()
      .openapi({ description: 'The type of price selected. For example - ‘L’ (Fixed)' }),
    selectionId: z
      .int()
      .openapi({ description: 'The selection identifier', 'x-eg': 'OB_OU00000001' }),
    singleAvailable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the bet can be used in a single bet' }),
    startingPriceAvailable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether starting prices are available' }),
    status: z
      .string()
      .regex(/(A|S)/)
      .exactOptional()
      .openapi({ description: 'Indicates the current status of the bet' }),
    statusChanged: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the status of the bet has changed' }),
  })
  .openapi({ required: ['selectionId', 'priceType', 'priceNum', 'priceDen', 'includeInMultiple'] })
  .openapi('Betslippart')

const BetsliplegSchema = z
  .object({
    parts: z.array(BetslippartSchema),
    sort: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The leg sort. This element is present for complex bets but not for single bets.',
      }),
    type: z
      .string()
      .openapi({
        description:
          'Type of leg that was placed on the bet, such as Win or Each-way. Even though the priceNum and priceDen are required for the bets with type value W (win), it is just optional from the endpoint point of view. There are requests / bets like outcomes with starting price but do not have a specific price. Generally prices can change, so if the type is win you have to resubmit and thus verify the price that the customer saw on the screen initially. The API will check if it matches the current price of William Hill. Note that if you send a wrong / outdated price you will receive the error message - Price changed.',
      }),
  })
  .openapi({ required: ['type', 'parts'] })
  .openapi('Betslipleg')

const BetslipbetSchema = z
  .object({
    betMultiplier: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The total aggregated odds, as a decimal, of the multiple bet placed',
      }),
    freeBets: z
      .array(FreeBetDetailSchema)
      .exactOptional()
      .openapi({ description: 'Free bets that can be used with this bet' }),
    legs: z.array(BetsliplegSchema),
    maxStake: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Maximum stake allowable on the bet. For example: 2500.00 (GBP)' }),
    minStake: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Minumum stake allowable on the bet. For example: 0.05 (GBP)' }),
    numLines: z
      .number()
      .exactOptional()
      .openapi({ description: 'The number of lines (selections) of a bet' }),
    number: z.int().openapi({ description: 'The bet number' }),
    typeCode: z
      .string()
      .openapi({ description: 'The bet type code of the bet. For example: TBL (Treble)' }),
    typeName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The TypeCode of the bet. For example: TBL (Treble)' }),
  })
  .openapi({ required: ['number', 'typeCode', 'legs'] })
  .openapi('Betslipbet')

const BetSlipResponseSchema = z
  .object({ betslip: z.array(BetslipbetSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('BetSlipResponse')

const CashInResponseSchema = z
  .object({
    success: z.boolean().openapi({ description: 'Indicates whether the bet has been cashed-in.' }),
  })
  .openapi({ required: ['success'] })
  .openapi('CashInResponse')

const ComplexBetRequestBodySchema = z
  .object({
    bets: z.array(BetSchema).exactOptional().openapi({ description: 'A collection of bets' }),
  })
  .openapi({ required: [] })
  .openapi('ComplexBetRequestBody')

const SolutionSchema = z
  .object({
    betNum: z.string().exactOptional().openapi({ description: 'The bet number' }),
    eventId: z
      .string()
      .regex(/^(OB_EV\d+)$/)
      .exactOptional()
      .openapi({ description: 'The identifier of the event', 'x-eg': 'OB_EV00000001' }),
    handicap: z.string().exactOptional().openapi({ description: 'The updated handicap' }),
    handicapPrecision: z
      .string()
      .exactOptional()
      .openapi({ description: 'The handicap precision' }),
    priceDen: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'When the odds are shown in vulgar fractions this is the denominator of the fraction. For example: 2 in 5/2',
      }),
    priceNum: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'When the odds are shown in vulgar fractions this is the numerator of the fraction. For example: 5 in 5/2',
      }),
    selectionHandicap: z
      .string()
      .exactOptional()
      .openapi({ description: 'The selection handicap' }),
    selectionId: z
      .string()
      .regex(/^(OB_OU\d+)$/)
      .exactOptional()
      .openapi({ description: 'The identifier of the selection', 'x-eg': 'OB_OU00000001' }),
  })
  .openapi({ required: [] })
  .openapi('Solution')

const ErrorSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique William Hill identifier for the error' }),
    field: z
      .string()
      .exactOptional()
      .openapi({ description: 'To help pinpoint the exact parameter where a request has failed' }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique William Hill text string to enable you to identify the error (in English only)',
      }),
    solution: SolutionSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Error')

const ErrorsSchema = z
  .object({ errors: z.array(ErrorSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('Errors')

const FreeBetSchema = z.array(FreeBetDetailSchema).openapi('FreeBet')

const SingleBetRequestBodySchema = z
  .object({
    delayedBetId: z.string().exactOptional().openapi({ description: 'The delayed bet identifier' }),
    freeBetId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID number of the free bet token if used in conjunction with this bet',
      }),
    priceDen: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'When the odds are shown in vulgar fractions this is the denominator of the fraction. For example: 2 in 5/2',
      }),
    priceNum: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'When the odds are shown in vulgar fractions this is the numerator of the fraction. For example: 5 in 5/2',
      }),
    priceType: z
      .string()
      .regex(/^(L|S|G)$/)
      .openapi({
        description:
          'The type of price taken by the customer when the bet is made. Can be one of the following: L - Live Fixed price, S - Starting price - Horse and Greyhound racing or G - Guaranteed best price.',
      }),
    selectionId: z
      .string()
      .regex(/^(OB_OU\d+)$/)
      .openapi({
        description: 'The unique ID for the selection of the bet',
        'x-eg': 'OB_OU00000001',
      }),
    stake: z.float64().openapi({ description: 'The amount of the stake placed on the bet' }),
    type: z
      .string()
      .regex(/^(W|E)$/)
      .openapi({
        description: 'The type of bet placed. Can be one of the following: W - Win or E- EachWay',
      }),
  })
  .openapi({ required: ['type', 'stake', 'selectionId', 'priceType'] })
  .openapi('SingleBetRequestBody')

const ParamApiKeyParamsSchema = z
  .string()
  .regex(/^[a-zA-Z0-9]{19,50}$/)
  .openapi({
    param: {
      description: 'A unique identifier of your application that is generated by the API portal.',
      in: 'header',
      name: 'apiKey',
      required: true,
      schema: { pattern: '^[a-zA-Z0-9]{19,50}$', type: 'string' },
      'x-eg': 'l7xxa54460c573b5497c9b24b505xxxxxxxx',
    },
  })

const ParamApiSecretParamsSchema = z
  .string()
  .regex(/^[a-zA-Z0-9]{19,50}$/)
  .openapi({
    param: {
      description: 'Another unique identifier for your application.',
      in: 'header',
      name: 'apiSecret',
      required: true,
      schema: { pattern: '^[a-zA-Z0-9]{19,50}$', type: 'string' },
      'x-eg': '355b1e522c544222ab4ff318xxxxxxxx',
    },
  })

const ParamApiTicketParamsSchema = z
  .string()
  .regex(/^[a-zA-Z][a-zA-Z0-9-]{39,100}$/)
  .openapi({
    param: {
      description: 'The ticket obtained from the sessions API',
      in: 'header',
      name: 'apiTicket',
      required: true,
      schema: { pattern: '^[a-zA-Z][a-zA-Z0-9-]{39,100}$', type: 'string' },
      'x-eg': 'TGT-1920-Cl7l4e0hzFWK9aoKeiggDexuWcmAMf9brh6IFpVdsQxxxxxxxx-brsux349',
    },
  })

const ParamBetIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The identifier of the bet',
      in: 'path',
      name: 'betId',
      required: true,
      schema: { type: 'string' },
    },
  })

const ParamExcludeParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(z.string()),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'Specify fields from the default to exclude (Comma Separated List)',
      explode: false,
      in: 'query',
      name: 'exclude',
      required: false,
      schema: { items: { type: 'string' }, type: 'array' },
      style: 'form',
    },
  })

const ParamExpandedParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Allows for all bets for given selections to be returned - not just the specified type',
      in: 'query',
      name: 'expanded',
      required: false,
      schema: { type: 'string' },
    },
  })

const ParamFieldsParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(z.string()),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'Specify an absolute field list to return (Comma Separated List)',
      explode: false,
      in: 'query',
      name: 'fields',
      required: false,
      schema: { items: { type: 'string' }, type: 'array' },
      style: 'form',
    },
  })

const ParamFromDateTimeParamsSchema = z
  .string()
  .regex(/^(\\d{4})-(\\d{2})-(\\d{2})T(\\d{2}):(\\d{2}):(\\d{2})$/)
  .openapi({
    param: {
      description: 'The UTC FROM datetime from bets to be returned. (yyyy-MM-ddTHH:mm:ss)',
      in: 'query',
      name: 'dateFrom',
      required: true,
      schema: {
        pattern: '^(\\\\d{4})-(\\\\d{2})-(\\\\d{2})T(\\\\d{2}):(\\\\d{2}):(\\\\d{2})$',
        type: 'string',
      },
      'x-eg': '2013-09-25T13:34:20',
    },
  })

const ParamIncludeParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(z.string()),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'Specify fields in addition to the default to return (Comma Separated List)',
      explode: false,
      in: 'query',
      name: 'include',
      required: false,
      schema: { items: { type: 'string' }, type: 'array' },
      style: 'form',
      'x-eg': 'FieldName',
    },
  })

const ParamPageParamsSchema = z
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
      description: 'The index of the page to return',
      in: 'query',
      name: 'page',
      schema: { default: 1, type: 'number' },
      'x-eg': 10,
      required: false,
    },
  })

const ParamPageSizeParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.number(),
  )
  .default(100)
  .exactOptional()
  .openapi({
    param: {
      description: 'The number of results per page',
      in: 'query',
      name: 'pageSize',
      schema: { default: 100, type: 'number' },
      'x-eg': 15,
      required: false,
    },
  })

const ParamSortParamsSchema = z
  .string()
  .default('transDateTime,asc')
  .exactOptional()
  .openapi({
    param: {
      description:
        'The order the response will be retuned by. i.e. transDateTime,desc. Only transDateTime can be used currently',
      in: 'query',
      name: 'sort',
      required: false,
      schema: { default: 'transDateTime,asc', type: 'string' },
      'x-eg': 'transDateTime,desc',
    },
  })

const ParamToDateTimeParamsSchema = z
  .string()
  .regex(/^(\\d{4})-(\\d{2})-(\\d{2})T(\\d{2}):(\\d{2}):(\\d{2})$/)
  .openapi({
    param: {
      description: 'The UTC TO datetime for bets to be returned. (yyyy-MM-ddTHH:mm:ss)',
      in: 'query',
      name: 'dateTo',
      required: true,
      schema: {
        pattern: '^(\\\\d{4})-(\\\\d{2})-(\\\\d{2})T(\\\\d{2}):(\\\\d{2}):(\\\\d{2})$',
        type: 'string',
      },
      'x-eg': '2013-09-25T13:34:20',
    },
  })

export const postBetComplexRoute = createRoute({
  method: 'post',
  path: '/bet/complex',
  tags: ['Bets'],
  summary: 'Places a multiple or a complex bet.',
  description: 'Places a multiple or a complex bet.',
  operationId: 'placeComplexBet',
  request: {
    headers: z.object({
      apiKey: ParamApiKeyParamsSchema,
      apiSecret: ParamApiSecretParamsSchema,
      apiTicket: ParamApiTicketParamsSchema,
    }),
    query: z.object({
      fields: ParamFieldsParamsSchema,
      include: ParamIncludeParamsSchema,
      exclude: ParamExcludeParamsSchema,
    }),
    body: {
      description: 'Complex bet request body',
      content: { 'application/json': { schema: ComplexBetRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: BetPlacedResponseSchema,
          examples: {
            response: {
              value:
                '{\n "placedBets" : [\n {\n "id" : 51097,\n "number": 1,\n "receipt" : "O/0013333/0000109/F", \n "numLines" : 1, \n "totalStake" : 2.50, \n "placedDateTime" : "2015-12-12T00:11:00"\n }, \n {\n "id" : 51098, \n "number": 2,\n "receipt" : "O/0013333/0000109/F", \n "numLines" : 1, \n "totalStake" : 2.50, \n "placedDateTime" : "2015-12-12T00:11:00"\n }\n ]\n}\n',
            },
          },
        },
      },
    },
    202: {
      description: 'Delayed',
      content: {
        'application/json': {
          schema: BetDelayedResponseSchema,
          examples: {
            response: {
              value:
                '{\n "delayedBets" : [\n {\n "id" : 51097, \n "number" : 1, \n "delayedBetId" : "SL-I60Xjir9wr1MWpZf/XnHHycr7mSePgkYbY+aidjVII2AhfeWsWkuLucDnW0PWkJgmos0HO1zY6fMGbptVOezaicYUgKV",\n "delayPeriodSeconds" : 5\n }, \n {\n "id" : 51098, \n "number" : 2, \n "delayedBetId" : "SL-I60Xjir8wr1MWpZf/XnHHycr7mSePgkYbY+aidjVII2AhfeWsWkuLucDnW0PWkJgmos0HO1zY6fMGbptVOezaicYUgKV",\n "delayPeriodSeconds" : 5\n }\n ]\n}\n',
            },
          },
        },
      },
    },
    400: { description: 'Errors', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postBetSingleRoute = createRoute({
  method: 'post',
  path: '/bet/single',
  tags: ['Bets'],
  summary: 'Places a single bet',
  description:
    'Places a single bet. When placing a single bet using live inplay bets, the system might generate a bet delay to allow a time margin to negate the effects of major changes (for example, goals) to the market. Note that the amount of bet delay will vary by category and event type. A delayedBetId will be recieved that can be used to resubmit the bet.',
  operationId: 'placeSingleBet',
  request: {
    headers: z.object({
      apiKey: ParamApiKeyParamsSchema,
      apiSecret: ParamApiSecretParamsSchema,
      apiTicket: ParamApiTicketParamsSchema,
    }),
    query: z.object({
      fields: ParamFieldsParamsSchema,
      include: ParamIncludeParamsSchema,
      exclude: ParamExcludeParamsSchema,
    }),
    body: {
      description: 'Single bet request body',
      content: { 'application/json': { schema: SingleBetRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: BetPlacedResponseSchema,
          examples: {
            response: {
              value:
                '{\n "placedBets" : [\n {\n "id" : 51097,\n "receipt" : "O/0013333/0000109/F", \n "numLines" : 1, \n "totalStake" : 2.50, \n "placedDateTime" : "2015-12-12T00:11:00"\n }\n ]\n}\n',
            },
          },
        },
      },
    },
    202: {
      description: 'Delayed',
      content: {
        'application/json': {
          schema: BetDelayedResponseSchema,
          examples: {
            response: {
              value:
                '{\n "delayedBets" : [\n {\n "id" : 51097, \n "delayedBetId" : "SL-I60Xjir9wr1MWpZf/XnHHycr7mSePgkYbY+aidjVII2AhfeWsWkuLucDnW0PWkJgmos0HO1zY6fMGbptVOezaicYUgKV",\n "delayPeriodSeconds" : 5\n }\n ]\n}\n',
            },
          },
        },
      },
    },
    400: { description: 'Errors', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postBetslipsRoute = createRoute({
  method: 'post',
  path: '/betslips',
  tags: ['Bets'],
  description:
    'Organises the betslip when one or more selections are made. It returns a bet slip structure organised by betting opportunities.',
  operationId: 'validateBetslip',
  request: {
    headers: z.object({ apiKey: ParamApiKeyParamsSchema, apiSecret: ParamApiSecretParamsSchema }),
    query: z.object({ expanded: ParamExpandedParamsSchema }),
    body: {
      description: 'Betslip Body',
      content: { 'application/json': { schema: BetSlipRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: BetSlipResponseSchema,
          examples: {
            response: {
              value: '{\n "betslip" : [\n {\n number: 1, \n numLines: 1\n ...\n }\n ]\n}\n',
            },
          },
        },
      },
    },
  },
})

export const getFreebetsRoute = createRoute({
  method: 'get',
  path: '/freebets',
  tags: ['Bets'],
  summary: 'Returns available free bets',
  description: 'Retrieves the current free bets available for a customer.',
  operationId: 'getFreeBets',
  request: {
    headers: z.object({
      apiKey: ParamApiKeyParamsSchema,
      apiSecret: ParamApiSecretParamsSchema,
      apiTicket: ParamApiTicketParamsSchema,
    }),
    query: z.object({
      fields: ParamFieldsParamsSchema,
      include: ParamIncludeParamsSchema,
      exclude: ParamExcludeParamsSchema,
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: FreeBetSchema } } },
    204: { description: 'No Free Bets' },
  },
})

export const getHistoryRoute = createRoute({
  method: 'get',
  path: '/history',
  tags: ['Bets'],
  summary: 'Retrieves the customer’s bet history.',
  description:
    'Retrieves the customer’s bet history. Options are available to organise the history in terms of date, bet type and settled and unsettled bets. The maximum number of bets and bet history pages retrieved can also be set.',
  operationId: 'getBetHistory',
  request: {
    headers: z.object({
      apiKey: ParamApiKeyParamsSchema,
      apiSecret: ParamApiSecretParamsSchema,
      apiTicket: ParamApiTicketParamsSchema,
    }),
    query: z.object({
      dateFrom: ParamFromDateTimeParamsSchema,
      dateTo: ParamToDateTimeParamsSchema,
      fields: ParamFieldsParamsSchema,
      include: ParamIncludeParamsSchema,
      exclude: ParamExcludeParamsSchema,
      page: ParamPageParamsSchema,
      pageSize: ParamPageSizeParamsSchema,
      sort: ParamSortParamsSchema,
      settled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by settled bets. If omitted, both settled and unsettled will be returned.',
            in: 'query',
            name: 'settled',
            required: false,
            schema: { type: 'boolean' },
            'x-eg': true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: BetHistoryResponseSchema,
          examples: {
            response: {
              value:
                '{\n bets:\n [\n {\n id:"797",\n typeCode:"SGL",\n typeName:"Single",\n transDateTime:"2016-01-05 14:27:58",\n settled:false,\n stake:0.12,\n status:"N",\n winnings:0.26,\n estimatedReturns:0.26\n },\n {\n id:"798",\n typeCode:"SGL",\n typeName:"Single",\n transDateTime:"2016-01-05 15:27:58",\n numLines:5,\n numSelections:5,\n receipt:"O/0001370/0000132/F",\n settled:false,\n stake:0.13,\n cashinValue:0.12,\n stakePerLine:0.13,\n status:"A",\n winnings:0.26,\n estimatedReturns:0.26,\n freeBetValue:0.00,\n legs: \n [\n {\n type:"W",\n number:1,\n parts:\n [\n {\n number:1,\n description:"Swansea",\n eventId:"OB_EV3966",\n eventDescription:"Swansea Vs Sunderland",\n priceDen:1,\n priceNum:1,\n priceType:"L",\n result:"-",\n startDateTime:"2016-01-07 20:00:00"\n },\n {\n number:1,\n description:"Swansea",\n eachWayNum:1,\n eachWayDen:1,\n eachWayPlaces:1\n eventId:"OB_EV3966",\n eventDescription:"Swansea Vs Sunderland",\n eventMarketDescription:"90 Minutes",\n eventTypeDescription:"Manchester Senior Cup",\n handicap:0.1,\n selectionId:"OB_OU00001",\n priceDen:1,\n priceNum:1,\n priceType:"L",\n result:"-",\n startDateTime:"2016-01-07 20:00:00",\n rule4Deductions:0.1,\n priceFormatted:\n {\n fractional:"EVS",\n decimal:2,\n american:"+100"\n } \n }\n ]\n }\n ]\n }\n ]\n}\n',
            },
          },
        },
      },
    },
    404: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const putBetIdCashinRoute = createRoute({
  method: 'put',
  path: '/{betId}/cashin',
  tags: ['Bets'],
  summary:
    'Allows a trusted application to cash in a bet (take a return on a bet) on behalf of the customer',
  description:
    'Allows a trusted application to cash in a bet (take a return on a bet) on behalf of the customer. If the customers monitor bets they can cash in a bet at any point before the event ends.',
  operationId: 'cashin',
  request: {
    headers: z.object({
      apiKey: ParamApiKeyParamsSchema,
      apiSecret: ParamApiSecretParamsSchema,
      apiTicket: ParamApiTicketParamsSchema,
    }),
    params: z.object({ betId: ParamBetIdParamsSchema }),
    query: z.object({
      cashInValue: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .openapi({
          param: {
            description: 'The cash in value of the bet',
            in: 'query',
            name: 'cashInValue',
            required: true,
            schema: { format: 'double', type: 'number' },
            'x-eg': 20,
          },
        }),
      cashinBetDelayId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of this bet delay',
            in: 'query',
            name: 'cashinBetDelayId',
            required: true,
            schema: { type: 'string' },
            'x-eg': 'GGGfffEEE',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CashInResponseSchema } },
    },
    400: { description: 'Errors', content: { 'application/json': { schema: ErrorsSchema } } },
    409: { description: 'Errors', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})
