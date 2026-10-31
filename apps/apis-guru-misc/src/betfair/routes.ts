import { createRoute, z } from '@hono/zod-openapi'

const RequestMessageSchema = z
  .object({
    id: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Client generated unique id to link request with response (like json rpc)',
      }),
    op: z.string().exactOptional().openapi({ description: 'The operation type' }),
  })
  .openapi({ discriminator: { propertyName: 'op' }, required: [] })
  .openapi('RequestMessage')

const AuthenticationMessageSchema = RequestMessageSchema.and(
  z
    .object({ appKey: z.string().exactOptional(), session: z.string().exactOptional() })
    .openapi({ required: [] }),
).openapi('AuthenticationMessage')

const HeartbeatMessageSchema = RequestMessageSchema.and(z.object({})).openapi('HeartbeatMessage')

const MarketDataFilterSchema = z
  .object({
    fields: z
      .array(
        z.enum([
          'EX_BEST_OFFERS_DISP',
          'EX_BEST_OFFERS',
          'EX_ALL_OFFERS',
          'EX_TRADED',
          'EX_TRADED_VOL',
          'EX_LTP',
          'EX_MARKET_DEF',
          'SP_TRADED',
          'SP_PROJECTED',
        ]),
      )
      .exactOptional(),
    ladderLevels: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MarketDataFilter')

const MarketFilterSchema = z
  .object({
    bettingTypes: z
      .array(
        z.enum([
          'ODDS',
          'LINE',
          'RANGE',
          'ASIAN_HANDICAP_DOUBLE_LINE',
          'ASIAN_HANDICAP_SINGLE_LINE',
        ]),
      )
      .exactOptional(),
    bspMarket: z.boolean().exactOptional(),
    countryCodes: z.array(z.string()).exactOptional(),
    eventIds: z.array(z.string()).exactOptional(),
    eventTypeIds: z.array(z.string()).exactOptional(),
    marketIds: z.array(z.string()).exactOptional(),
    marketTypes: z.array(z.string()).exactOptional(),
    raceTypes: z.array(z.string()).exactOptional(),
    turnInPlayEnabled: z.boolean().exactOptional(),
    venues: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MarketFilter')

const MarketSubscriptionMessageSchema = RequestMessageSchema.and(
  z
    .object({
      clk: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Token value delta (received in MarketChangeMessage) that should be passed to resume a subscription',
        }),
      conflateMs: z
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
            'Conflate Milliseconds - the conflation rate (looped back on initial image after validation: bounds are 0 to 120000)',
        }),
      heartbeatMs: z
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
            'Heartbeat Milliseconds - the heartbeat rate (looped back on initial image after validation: bounds are 500 to 5000)',
        }),
      initialClk: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Token value (received in initial MarketChangeMessage) that should be passed to resume a subscription',
        }),
      marketDataFilter: MarketDataFilterSchema.exactOptional(),
      marketFilter: MarketFilterSchema.exactOptional(),
      segmentationEnabled: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            'Segmentation Enabled - allow the server to send large sets of data in segments, instead of a single block',
        }),
    })
    .openapi({ required: [] }),
).openapi('MarketSubscriptionMessage')

const OrderFilterSchema = z
  .object({
    accountIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional()
      .openapi({
        description:
          'Internal use only & should not be set on your filter (your subscription is already locked to your account). If set subscription will fail.',
      }),
    customerStrategyRefs: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Restricts to specified customerStrategyRefs; this will filter orders and StrategyMatchChanges accordingly (Note: overall postition is not filtered)',
      }),
    includeOverallPosition: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Returns overall / net position (See: OrderRunnerChange.mb / OrderRunnerChange.ml). Default=true',
      }),
    partitionMatchedByStrategyRef: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Returns strategy positions (See: OrderRunnerChange.smc=Map<customerStrategyRef, StrategyMatchChange>) - these are sent in delta format as per overall position. Default=false',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrderFilter')

const OrderSubscriptionMessageSchema = RequestMessageSchema.and(
  z
    .object({
      clk: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Token value delta (received in MarketChangeMessage) that should be passed to resume a subscription',
        }),
      conflateMs: z
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
            'Conflate Milliseconds - the conflation rate (looped back on initial image after validation: bounds are 0 to 120000)',
        }),
      heartbeatMs: z
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
            'Heartbeat Milliseconds - the heartbeat rate (looped back on initial image after validation: bounds are 500 to 5000)',
        }),
      initialClk: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Token value (received in initial MarketChangeMessage) that should be passed to resume a subscription',
        }),
      orderFilter: OrderFilterSchema.exactOptional(),
      segmentationEnabled: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            'Segmentation Enabled - allow the server to send large sets of data in segments, instead of a single block',
        }),
    })
    .openapi({ required: [] }),
).openapi('OrderSubscriptionMessage')

const AllRequestTypesExampleSchema = z
  .object({
    authentication: AuthenticationMessageSchema.exactOptional(),
    heartbeat: HeartbeatMessageSchema.exactOptional(),
    marketSubscription: MarketSubscriptionMessageSchema.exactOptional(),
    opTypes: z
      .enum(['heartbeat', 'authentication', 'marketSubscription', 'orderSubscription'])
      .exactOptional(),
    orderSubscriptionMessage: OrderSubscriptionMessageSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AllRequestTypesExample')

const ResponseMessageSchema = z
  .object({
    id: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Client generated unique id to link request with response (like json rpc)',
      }),
    op: z.string().exactOptional().openapi({ description: 'The operation type' }),
  })
  .openapi({ discriminator: { propertyName: 'op' }, required: [] })
  .openapi('ResponseMessage')

const ConnectionMessageSchema = ResponseMessageSchema.and(
  z
    .object({
      connectionId: z.string().exactOptional().openapi({ description: 'The connection id' }),
    })
    .openapi({ required: [] }),
).openapi('ConnectionMessage')

const KeyLineSelectionSchema = z
  .object({
    hc: z.float64().exactOptional(),
    id: z
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
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('KeyLineSelection')

const KeyLineDefinitionSchema = z
  .object({ kl: z.array(KeyLineSelectionSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('KeyLineDefinition')

const PriceLadderDefinitionSchema = z
  .object({ type: z.enum(['CLASSIC', 'FINEST', 'LINE_RANGE']).exactOptional() })
  .openapi({ required: [] })
  .openapi('PriceLadderDefinition')

const RunnerDefinitionSchema = z
  .object({
    adjustmentFactor: z.float64().exactOptional(),
    bsp: z.float64().exactOptional(),
    hc: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Handicap - the handicap of the runner (selection) (null if not applicable)',
      }),
    id: z
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
        description: 'Selection Id - the id of the runner (selection)',
      }),
    removalDate: z.iso.datetime({ offset: true }).exactOptional(),
    sortPriority: z.int32().exactOptional(),
    status: z
      .enum(['ACTIVE', 'WINNER', 'LOSER', 'REMOVED', 'REMOVED_VACANT', 'HIDDEN', 'PLACED'])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RunnerDefinition')

const MarketDefinitionSchema = z
  .object({
    betDelay: z.int32().exactOptional(),
    bettingType: z
      .enum(['ODDS', 'LINE', 'RANGE', 'ASIAN_HANDICAP_DOUBLE_LINE', 'ASIAN_HANDICAP_SINGLE_LINE'])
      .exactOptional(),
    bspMarket: z.boolean().exactOptional(),
    bspReconciled: z.boolean().exactOptional(),
    complete: z.boolean().exactOptional(),
    countryCode: z.string().exactOptional(),
    crossMatching: z.boolean().exactOptional(),
    discountAllowed: z.boolean().exactOptional(),
    eachWayDivisor: z.float64().exactOptional(),
    eventId: z.string().exactOptional(),
    eventTypeId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Event Type the market is contained within.' }),
    inPlay: z.boolean().exactOptional(),
    keyLineDefinition: KeyLineDefinitionSchema.exactOptional(),
    lineInterval: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'For Handicap and Line markets, the lines available on this market will be between the range of lineMinUnit and lineMaxUnit, in increments of the lineInterval value. e.g. If unit is runs, lineMinUnit=10, lineMaxUnit=20 and lineInterval=0.5, then valid lines include 10, 10.5, 11, 11.5 up to 20 runs.',
      }),
    lineMaxUnit: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'For Handicap and Line markets, the maximum value for the outcome, in market units for this market (eg 100 runs).',
      }),
    lineMinUnit: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'For Handicap and Line markets, the minimum value for the outcome, in market units for this market (eg 0 runs).',
      }),
    marketBaseRate: z.float64().exactOptional(),
    marketTime: z.iso.datetime({ offset: true }).exactOptional(),
    marketType: z.string().exactOptional(),
    numberOfActiveRunners: z.int32().exactOptional(),
    numberOfWinners: z.int32().exactOptional(),
    openDate: z.iso.datetime({ offset: true }).exactOptional(),
    persistenceEnabled: z.boolean().exactOptional(),
    priceLadderDefinition: PriceLadderDefinitionSchema.exactOptional(),
    raceType: z.string().exactOptional(),
    regulators: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The market regulators.' }),
    runners: z.array(RunnerDefinitionSchema).exactOptional(),
    runnersVoidable: z.boolean().exactOptional(),
    settledTime: z.iso.datetime({ offset: true }).exactOptional(),
    status: z.enum(['INACTIVE', 'OPEN', 'SUSPENDED', 'CLOSED']).exactOptional(),
    suspendTime: z.iso.datetime({ offset: true }).exactOptional(),
    timezone: z.string().exactOptional(),
    turnInPlayEnabled: z.boolean().exactOptional(),
    venue: z.string().exactOptional(),
    version: z
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
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('MarketDefinition')

const RunnerChangeSchema = z
  .object({
    atb: z
      .array(z.array(z.float64()))
      .exactOptional()
      .openapi({
        description: 'Available To Back - PriceVol tuple delta of price changes (0 vol is remove)',
      }),
    atl: z
      .array(z.array(z.float64()))
      .exactOptional()
      .openapi({
        description: 'Available To Lay - PriceVol tuple delta of price changes (0 vol is remove)',
      }),
    batb: z
      .array(z.array(z.float64()))
      .exactOptional()
      .openapi({
        description:
          'Best Available To Back - LevelPriceVol triple delta of price changes, keyed by level (0 vol is remove)',
      }),
    batl: z
      .array(z.array(z.float64()))
      .exactOptional()
      .openapi({
        description:
          'Best Available To Lay - LevelPriceVol triple delta of price changes, keyed by level (0 vol is remove)',
      }),
    bdatb: z
      .array(z.array(z.float64()))
      .exactOptional()
      .openapi({
        description:
          'Best Display Available To Back (includes virtual prices)- LevelPriceVol triple delta of price changes, keyed by level (0 vol is remove)',
      }),
    bdatl: z
      .array(z.array(z.float64()))
      .exactOptional()
      .openapi({
        description:
          'Best Display Available To Lay (includes virtual prices)- LevelPriceVol triple delta of price changes, keyed by level (0 vol is remove)',
      }),
    hc: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Handicap - the handicap of the runner (selection) (null if not applicable)',
      }),
    id: z
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
        description: 'Selection Id - the id of the runner (selection)',
      }),
    ltp: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Last Traded Price - The last traded price (or null if un-changed)',
      }),
    spb: z
      .array(z.array(z.float64()))
      .exactOptional()
      .openapi({
        description:
          'Starting Price Back - PriceVol tuple delta of price changes (0 vol is remove)',
      }),
    spf: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Starting Price Far - The far starting price (or null if un-changed)',
      }),
    spl: z
      .array(z.array(z.float64()))
      .exactOptional()
      .openapi({
        description: 'Starting Price Lay - PriceVol tuple delta of price changes (0 vol is remove)',
      }),
    spn: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Starting Price Near - The far starting price (or null if un-changed)',
      }),
    trd: z
      .array(z.array(z.float64()))
      .exactOptional()
      .openapi({ description: 'Traded - PriceVol tuple delta of price changes (0 vol is remove)' }),
    tv: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The total amount matched. This value is truncated at 2dp.' }),
  })
  .openapi({ required: [] })
  .openapi('RunnerChange')

const MarketChangeSchema = z
  .object({
    con: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Conflated - have more than a single change been combined (or null if not conflated)',
      }),
    id: z.string().exactOptional().openapi({ description: 'Market Id - the id of the market' }),
    img: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Image - replace existing prices / data with the data supplied: it is not a delta (or null if delta)',
      }),
    marketDefinition: MarketDefinitionSchema.exactOptional(),
    rc: z
      .array(RunnerChangeSchema)
      .exactOptional()
      .openapi({
        description: 'Runner Changes - a list of changes to runners (or null if un-changed)',
      }),
    tv: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The total amount matched across the market. This value is truncated at 2dp (or null if un-changed)',
      }),
  })
  .openapi({ required: [] })
  .openapi('MarketChange')

const MarketChangeMessageSchema = ResponseMessageSchema.and(
  z
    .object({
      clk: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Token value (non-null) should be stored and passed in a MarketSubscriptionMessage to resume subscription (in case of disconnect)',
        }),
      conflateMs: z
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
            'Conflate Milliseconds - the conflation rate (may differ from that requested if subscription is delayed)',
        }),
      ct: z
        .enum(['SUB_IMAGE', 'RESUB_DELTA', 'HEARTBEAT'])
        .exactOptional()
        .openapi({
          description:
            'Change Type - set to indicate the type of change - if null this is a delta)',
        }),
      heartbeatMs: z
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
            'Heartbeat Milliseconds - the heartbeat rate (may differ from requested: bounds are 500 to 30000)',
        }),
      initialClk: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Token value (non-null) should be stored and passed in a MarketSubscriptionMessage to resume subscription (in case of disconnect)',
        }),
      mc: z
        .array(MarketChangeSchema)
        .exactOptional()
        .openapi({
          description: 'MarketChanges - the modifications to markets (will be null on a heartbeat',
        }),
      pt: z
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
          description: 'Publish Time (in millis since epoch) that the changes were generated',
        }),
      segmentType: z
        .enum(['SEG_START', 'SEG', 'SEG_END'])
        .exactOptional()
        .openapi({
          description:
            'Segment Type - if the change is split into multiple segments, this denotes the beginning and end of a change, and segments in between. Will be null if data is not segmented',
        }),
      status: z
        .int32()
        .exactOptional()
        .openapi({
          description:
            'Stream status: set to null if the exchange stream data is up to date and 503 if the downstream services are experiencing latencies',
        }),
    })
    .openapi({ required: [] }),
).openapi('MarketChangeMessage')

const StrategyMatchChangeSchema = z
  .object({
    mb: z
      .array(z.array(z.float64()))
      .exactOptional()
      .openapi({
        description:
          'Matched Backs - matched amounts by distinct matched price on the Back side for this strategy',
      }),
    ml: z
      .array(z.array(z.float64()))
      .exactOptional()
      .openapi({
        description:
          'Matched Lays - matched amounts by distinct matched price on the Lay side for this strategy',
      }),
  })
  .openapi({ required: [] })
  .openapi('StrategyMatchChange')

const OrderSchema = z
  .object({
    avp: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Average Price Matched - the average price the order was matched at (null if the order is not matched). This value is not meaningful for activity on Line markets and is not guaranteed to be returned or maintained for these markets.',
      }),
    bsp: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'BSP Liability - the BSP liability of the order (null if the order is not a BSP order)',
      }),
    cd: z
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
          'Cancelled Date - the date the order was cancelled (null if the order is not cancelled)',
      }),
    id: z.string().exactOptional().openapi({ description: 'Bet Id - the id of the order' }),
    ld: z
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
          'Lapsed Date - the date the order was lapsed (null if the order is not lapsed)',
      }),
    lsrc: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Lapse Status Reason Code - the reason that some or all of this order has been lapsed (null if no portion of the order is lapsed',
      }),
    md: z
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
          'Matched Date - the date the order was matched (null if the order is not matched)',
      }),
    ot: z
      .enum(['L', 'LOC', 'MOC'])
      .exactOptional()
      .openapi({
        description:
          'Order Type - the type of the order (L = LIMIT, MOC = MARKET_ON_CLOSE, LOC = LIMIT_ON_CLOSE)',
      }),
    p: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Price - the original placed price of the order. Line markets operate at even-money odds of 2.0. However, price for these markets refers to the line positions available as defined by the markets min-max range and interval steps',
      }),
    pd: z
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
        description: 'Placed Date - the date the order was placed',
      }),
    pt: z
      .enum(['L', 'P', 'MOC'])
      .exactOptional()
      .openapi({
        description:
          'Persistence Type - whether the order will persist at in play or not (L = LAPSE, P = PERSIST, MOC = Market On Close)',
      }),
    rac: z
      .string()
      .exactOptional()
      .openapi({ description: 'Regulator Auth Code - the auth code returned by the regulator' }),
    rc: z
      .string()
      .exactOptional()
      .openapi({ description: 'Regulator Code - the regulator of the order' }),
    rfo: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Order Reference - the customer's order reference for this order (empty string if one was not set)",
      }),
    rfs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Strategy Reference - the customer's strategy reference for this order (empty string if one was not set)",
      }),
    s: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Size - the original placed size of the order' }),
    sc: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Size Cancelled - the amount of the order that has been cancelled' }),
    side: z
      .enum(['B', 'L'])
      .exactOptional()
      .openapi({
        description:
          "Side - the side of the order. For Line markets a 'B' bet refers to a SELL line and an 'L' bet refers to a BUY line.",
      }),
    sl: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Size Lapsed - the amount of the order that has been lapsed' }),
    sm: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Size Matched - the amount of the order that has been matched' }),
    sr: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Size Remaining - the amount of the order that is remaining unmatched',
      }),
    status: z
      .enum(['E', 'EC'])
      .exactOptional()
      .openapi({
        description: 'Status - the status of the order (E = EXECUTABLE, EC = EXECUTION_COMPLETE)',
      }),
    sv: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Size Voided - the amount of the order that has been voided' }),
  })
  .openapi({ required: [] })
  .openapi('Order')

const OrderRunnerChangeSchema = z
  .object({
    fullImage: z.boolean().exactOptional(),
    hc: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Handicap - the handicap of the runner (selection) (null if not applicable)',
      }),
    id: z
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
        description: 'Selection Id - the id of the runner (selection)',
      }),
    mb: z
      .array(z.array(z.float64()))
      .exactOptional()
      .openapi({
        description:
          'Matched Backs - matched amounts by distinct matched price on the Back side for this runner (selection)',
      }),
    ml: z
      .array(z.array(z.float64()))
      .exactOptional()
      .openapi({
        description:
          'Matched Lays - matched amounts by distinct matched price on the Lay side for this runner (selection)',
      }),
    smc: z
      .record(z.string(), StrategyMatchChangeSchema)
      .exactOptional()
      .openapi({
        description:
          'Strategy Matches - Matched Backs and Matched Lays grouped by strategy reference',
      }),
    uo: z
      .array(OrderSchema)
      .exactOptional()
      .openapi({
        description:
          'Unmatched Orders - orders on this runner (selection) that are not fully matched',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrderRunnerChange')

const OrderMarketChangeSchema = z
  .object({
    accountId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    closed: z.boolean().exactOptional(),
    fullImage: z.boolean().exactOptional(),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Market Id - the id of the market the order is on' }),
    orc: z
      .array(OrderRunnerChangeSchema)
      .exactOptional()
      .openapi({ description: 'Order Changes - a list of changes to orders on a selection' }),
  })
  .openapi({ required: [] })
  .openapi('OrderMarketChange')

const OrderChangeMessageSchema = ResponseMessageSchema.and(
  z
    .object({
      clk: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Token value (non-null) should be stored and passed in a MarketSubscriptionMessage to resume subscription (in case of disconnect)',
        }),
      conflateMs: z
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
            'Conflate Milliseconds - the conflation rate (may differ from that requested if subscription is delayed)',
        }),
      ct: z
        .enum(['SUB_IMAGE', 'RESUB_DELTA', 'HEARTBEAT'])
        .exactOptional()
        .openapi({
          description:
            'Change Type - set to indicate the type of change - if null this is a delta)',
        }),
      heartbeatMs: z
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
            'Heartbeat Milliseconds - the heartbeat rate (may differ from requested: bounds are 500 to 30000)',
        }),
      initialClk: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Token value (non-null) should be stored and passed in a MarketSubscriptionMessage to resume subscription (in case of disconnect)',
        }),
      oc: z
        .array(OrderMarketChangeSchema)
        .exactOptional()
        .openapi({
          description:
            "OrderMarketChanges - the modifications to account's orders (will be null on a heartbeat",
        }),
      pt: z
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
          description: 'Publish Time (in millis since epoch) that the changes were generated',
        }),
      segmentType: z
        .enum(['SEG_START', 'SEG', 'SEG_END'])
        .exactOptional()
        .openapi({
          description:
            'Segment Type - if the change is split into multiple segments, this denotes the beginning and end of a change, and segments in between. Will be null if data is not segmented',
        }),
      status: z
        .int32()
        .exactOptional()
        .openapi({
          description:
            'Stream status: set to null if the exchange stream data is up to date and 503 if the downstream services are experiencing latencies',
        }),
    })
    .openapi({ required: [] }),
).openapi('OrderChangeMessage')

const StatusMessageSchema = ResponseMessageSchema.and(
  z
    .object({
      connectionClosed: z
        .boolean()
        .exactOptional()
        .openapi({ description: 'Is the connection now closed' }),
      connectionId: z.string().exactOptional().openapi({ description: 'The connection id' }),
      connectionsAvailable: z
        .int32()
        .exactOptional()
        .openapi({
          description:
            'The number of connections available for this account at this moment in time. Present on responses to Authentication messages only.',
        }),
      errorCode: z
        .enum([
          'NO_APP_KEY',
          'INVALID_APP_KEY',
          'NO_SESSION',
          'INVALID_SESSION_INFORMATION',
          'NOT_AUTHORIZED',
          'INVALID_INPUT',
          'INVALID_CLOCK',
          'UNEXPECTED_ERROR',
          'TIMEOUT',
          'SUBSCRIPTION_LIMIT_EXCEEDED',
          'INVALID_REQUEST',
          'CONNECTION_FAILED',
          'MAX_CONNECTION_LIMIT_EXCEEDED',
          'TOO_MANY_REQUESTS',
        ])
        .exactOptional()
        .openapi({ description: 'The type of error in case of a failure' }),
      errorMessage: z
        .string()
        .exactOptional()
        .openapi({ description: 'Additional message in case of a failure' }),
      statusCode: z
        .enum(['SUCCESS', 'FAILURE'])
        .exactOptional()
        .openapi({ description: 'The status of the last request' }),
    })
    .openapi({ required: [] }),
).openapi('StatusMessage')

const AllResponseTypesExampleSchema = z
  .object({
    connection: ConnectionMessageSchema.exactOptional(),
    marketChangeMessage: MarketChangeMessageSchema.exactOptional(),
    opTypes: z.enum(['connection', 'status', 'mcm', 'ocm']).exactOptional(),
    orderChangeMessage: OrderChangeMessageSchema.exactOptional(),
    status: StatusMessageSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AllResponseTypesExample')

export const postRequestRoute = createRoute({
  method: 'post',
  path: '/request',
  description: 'This is a socket protocol delimited by CRLF (not http)',
  request: {
    body: {
      description: 'Requests are sent to socket',
      content: { 'application/json': { schema: AllRequestTypesExampleSchema } },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Responses are received from socket',
      content: { 'application/json': { schema: AllResponseTypesExampleSchema } },
    },
  },
})
