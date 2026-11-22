type AuthenticationMessage = {
  id?: number | undefined
  op?: string | undefined
  appKey?: string | undefined
  session?: string | undefined
}
type HeartbeatMessage = { id?: number | undefined; op?: string | undefined }
type MarketDataFilter = {
  fields?:
    | (
        | 'EX_BEST_OFFERS_DISP'
        | 'EX_BEST_OFFERS'
        | 'EX_ALL_OFFERS'
        | 'EX_TRADED'
        | 'EX_TRADED_VOL'
        | 'EX_LTP'
        | 'EX_MARKET_DEF'
        | 'SP_TRADED'
        | 'SP_PROJECTED'
      )[]
    | undefined
  ladderLevels?: number | undefined
}
type MarketFilter = {
  bettingTypes?:
    | ('ODDS' | 'LINE' | 'RANGE' | 'ASIAN_HANDICAP_DOUBLE_LINE' | 'ASIAN_HANDICAP_SINGLE_LINE')[]
    | undefined
  bspMarket?: boolean | undefined
  countryCodes?: string[] | undefined
  eventIds?: string[] | undefined
  eventTypeIds?: string[] | undefined
  marketIds?: string[] | undefined
  marketTypes?: string[] | undefined
  raceTypes?: string[] | undefined
  turnInPlayEnabled?: boolean | undefined
  venues?: string[] | undefined
}
type MarketSubscriptionMessage = {
  id?: number | undefined
  op?: string | undefined
  clk?: string | undefined
  conflateMs?: bigint | undefined
  heartbeatMs?: bigint | undefined
  initialClk?: string | undefined
  marketDataFilter?: MarketDataFilter | undefined
  marketFilter?: MarketFilter | undefined
  segmentationEnabled?: boolean | undefined
}
type OrderFilter = {
  accountIds?: bigint[] | undefined
  customerStrategyRefs?: string[] | undefined
  includeOverallPosition?: boolean | undefined
  partitionMatchedByStrategyRef?: boolean | undefined
}
type OrderSubscriptionMessage = {
  id?: number | undefined
  op?: string | undefined
  clk?: string | undefined
  conflateMs?: bigint | undefined
  heartbeatMs?: bigint | undefined
  initialClk?: string | undefined
  orderFilter?: OrderFilter | undefined
  segmentationEnabled?: boolean | undefined
}
type AllRequestTypesExample = {
  authentication?: AuthenticationMessage | undefined
  heartbeat?: HeartbeatMessage | undefined
  marketSubscription?: MarketSubscriptionMessage | undefined
  opTypes?: 'heartbeat' | 'authentication' | 'marketSubscription' | 'orderSubscription' | undefined
  orderSubscriptionMessage?: OrderSubscriptionMessage | undefined
}
type ConnectionMessage = {
  id?: number | undefined
  op?: string | undefined
  connectionId?: string | undefined
}
type KeyLineSelection = { hc?: number | undefined; id?: bigint | undefined }
type KeyLineDefinition = { kl?: KeyLineSelection[] | undefined }
type PriceLadderDefinition = { type?: 'CLASSIC' | 'FINEST' | 'LINE_RANGE' | undefined }
type RunnerDefinition = {
  adjustmentFactor?: number | undefined
  bsp?: number | undefined
  hc?: number | undefined
  id?: bigint | undefined
  removalDate?: string | undefined
  sortPriority?: number | undefined
  status?:
    | 'ACTIVE'
    | 'WINNER'
    | 'LOSER'
    | 'REMOVED'
    | 'REMOVED_VACANT'
    | 'HIDDEN'
    | 'PLACED'
    | undefined
}
type MarketDefinition = {
  betDelay?: number | undefined
  bettingType?:
    | 'ODDS'
    | 'LINE'
    | 'RANGE'
    | 'ASIAN_HANDICAP_DOUBLE_LINE'
    | 'ASIAN_HANDICAP_SINGLE_LINE'
    | undefined
  bspMarket?: boolean | undefined
  bspReconciled?: boolean | undefined
  complete?: boolean | undefined
  countryCode?: string | undefined
  crossMatching?: boolean | undefined
  discountAllowed?: boolean | undefined
  eachWayDivisor?: number | undefined
  eventId?: string | undefined
  eventTypeId?: string | undefined
  inPlay?: boolean | undefined
  keyLineDefinition?: KeyLineDefinition | undefined
  lineInterval?: number | undefined
  lineMaxUnit?: number | undefined
  lineMinUnit?: number | undefined
  marketBaseRate?: number | undefined
  marketTime?: string | undefined
  marketType?: string | undefined
  numberOfActiveRunners?: number | undefined
  numberOfWinners?: number | undefined
  openDate?: string | undefined
  persistenceEnabled?: boolean | undefined
  priceLadderDefinition?: PriceLadderDefinition | undefined
  raceType?: string | undefined
  regulators?: string[] | undefined
  runners?: RunnerDefinition[] | undefined
  runnersVoidable?: boolean | undefined
  settledTime?: string | undefined
  status?: 'INACTIVE' | 'OPEN' | 'SUSPENDED' | 'CLOSED' | undefined
  suspendTime?: string | undefined
  timezone?: string | undefined
  turnInPlayEnabled?: boolean | undefined
  venue?: string | undefined
  version?: bigint | undefined
}
type RunnerChange = {
  atb?: number[][] | undefined
  atl?: number[][] | undefined
  batb?: number[][] | undefined
  batl?: number[][] | undefined
  bdatb?: number[][] | undefined
  bdatl?: number[][] | undefined
  hc?: number | undefined
  id?: bigint | undefined
  ltp?: number | undefined
  spb?: number[][] | undefined
  spf?: number | undefined
  spl?: number[][] | undefined
  spn?: number | undefined
  trd?: number[][] | undefined
  tv?: number | undefined
}
type MarketChange = {
  con?: boolean | undefined
  id?: string | undefined
  img?: boolean | undefined
  marketDefinition?: MarketDefinition | undefined
  rc?: RunnerChange[] | undefined
  tv?: number | undefined
}
type MarketChangeMessage = {
  id?: number | undefined
  op?: string | undefined
  clk?: string | undefined
  conflateMs?: bigint | undefined
  ct?: 'SUB_IMAGE' | 'RESUB_DELTA' | 'HEARTBEAT' | undefined
  heartbeatMs?: bigint | undefined
  initialClk?: string | undefined
  mc?: MarketChange[] | undefined
  pt?: bigint | undefined
  segmentType?: 'SEG_START' | 'SEG' | 'SEG_END' | undefined
  status?: number | undefined
}
type StrategyMatchChange = { mb?: number[][] | undefined; ml?: number[][] | undefined }
type Order = {
  avp?: number | undefined
  bsp?: number | undefined
  cd?: bigint | undefined
  id?: string | undefined
  ld?: bigint | undefined
  lsrc?: string | undefined
  md?: bigint | undefined
  ot?: 'L' | 'LOC' | 'MOC' | undefined
  p?: number | undefined
  pd?: bigint | undefined
  pt?: 'L' | 'P' | 'MOC' | undefined
  rac?: string | undefined
  rc?: string | undefined
  rfo?: string | undefined
  rfs?: string | undefined
  s?: number | undefined
  sc?: number | undefined
  side?: 'B' | 'L' | undefined
  sl?: number | undefined
  sm?: number | undefined
  sr?: number | undefined
  status?: 'E' | 'EC' | undefined
  sv?: number | undefined
}
type OrderRunnerChange = {
  fullImage?: boolean | undefined
  hc?: number | undefined
  id?: bigint | undefined
  mb?: number[][] | undefined
  ml?: number[][] | undefined
  smc?: { [x: string]: StrategyMatchChange } | undefined
  uo?: Order[] | undefined
}
type OrderMarketChange = {
  accountId?: bigint | undefined
  closed?: boolean | undefined
  fullImage?: boolean | undefined
  id?: string | undefined
  orc?: OrderRunnerChange[] | undefined
}
type OrderChangeMessage = {
  id?: number | undefined
  op?: string | undefined
  clk?: string | undefined
  conflateMs?: bigint | undefined
  ct?: 'SUB_IMAGE' | 'RESUB_DELTA' | 'HEARTBEAT' | undefined
  heartbeatMs?: bigint | undefined
  initialClk?: string | undefined
  oc?: OrderMarketChange[] | undefined
  pt?: bigint | undefined
  segmentType?: 'SEG_START' | 'SEG' | 'SEG_END' | undefined
  status?: number | undefined
}
type StatusMessage = {
  id?: number | undefined
  op?: string | undefined
  connectionClosed?: boolean | undefined
  connectionId?: string | undefined
  connectionsAvailable?: number | undefined
  errorCode?:
    | 'NO_APP_KEY'
    | 'INVALID_APP_KEY'
    | 'NO_SESSION'
    | 'INVALID_SESSION_INFORMATION'
    | 'NOT_AUTHORIZED'
    | 'INVALID_INPUT'
    | 'INVALID_CLOCK'
    | 'UNEXPECTED_ERROR'
    | 'TIMEOUT'
    | 'SUBSCRIPTION_LIMIT_EXCEEDED'
    | 'INVALID_REQUEST'
    | 'CONNECTION_FAILED'
    | 'MAX_CONNECTION_LIMIT_EXCEEDED'
    | 'TOO_MANY_REQUESTS'
    | undefined
  errorMessage?: string | undefined
  statusCode?: 'SUCCESS' | 'FAILURE' | undefined
}
type AllResponseTypesExample = {
  connection?: ConnectionMessage | undefined
  marketChangeMessage?: MarketChangeMessage | undefined
  opTypes?: 'connection' | 'status' | 'mcm' | 'ocm' | undefined
  orderChangeMessage?: OrderChangeMessage | undefined
  status?: StatusMessage | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/request': {
      $post: {
        input: { json: AllRequestTypesExample }
        output: AllResponseTypesExample
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
