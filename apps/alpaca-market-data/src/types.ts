type CorporateActionEventType =
  | 'capital_gains_distribution_corporateaction_event'
  | 'cash_dividend_corporateaction_event'
  | 'cash_merger_corporateaction_event'
  | 'equity_partial_call_corporateaction_event'
  | 'forward_split_corporateaction_event'
  | 'name_change_corporateaction_event'
  | 'redemption_corporateaction_event'
  | 'reorganization_corporateaction_event'
  | 'reverse_split_corporateaction_event'
  | 'rights_distribution_corporateaction_event'
  | 'spin_off_corporateaction_event'
  | 'stock_and_cash_merger_corporateaction_event'
  | 'stock_dividend_corporateaction_event'
  | 'stock_merger_corporateaction_event'
  | 'unit_split_corporateaction_event'
  | 'worthless_removal_corporateaction_event'
type EventId = string
type CorporateActionEventAction = 'insert' | 'update' | 'delete'
type CorporateActionEventRegion = 'us' | 'non_us'
type CaId = string
type ProcessDate = string
type Currency = string
type ExDate = string
type Isin = string
type PayableDate = string
type RecordDate = string
type CaEventCapitalGainsDistribution = {
  id: CaId
  process_date: ProcessDate
  currency?: Currency | undefined
  cusip: string
  ex_date: ExDate
  isin?: Isin | undefined
  long_term_rate?: string | undefined
  payable_date?: PayableDate | undefined
  record_date?: RecordDate | undefined
  short_term_rate?: string | undefined
  symbol: string
}
type CorporateActionEventCapitalGainsDistribution = {
  action: CorporateActionEventAction
  at: string
  event_id: EventId
  region: CorporateActionEventRegion
  ca: CaEventCapitalGainsDistribution
  event_type: 'capital_gains_distribution_corporateaction_event'
}
type CaEventCashDividend = {
  id: CaId
  process_date: ProcessDate
  currency?: Currency | undefined
  cusip: string
  due_bill_off_date?: string | undefined
  due_bill_on_date?: string | undefined
  ex_date: ExDate
  foreign: boolean
  isin?: Isin | undefined
  payable_date?: PayableDate | undefined
  rate: string
  record_date?: RecordDate | undefined
  special: boolean
  sub_type?: 'interest' | 'return_of_capital' | undefined
  symbol: string
}
type CorporateActionEventCashDividend = {
  action: CorporateActionEventAction
  at: string
  event_id: EventId
  region: CorporateActionEventRegion
  ca: CaEventCashDividend
  event_type: 'cash_dividend_corporateaction_event'
}
type EffectiveDate = string
type CaEventCashMerger = {
  id: CaId
  process_date: ProcessDate
  acquiree_cusip: string
  acquiree_isin?: Isin | undefined
  acquiree_symbol: string
  acquirer_cusip?: string | undefined
  acquirer_isin?: Isin | undefined
  acquirer_symbol?: string | undefined
  currency?: Currency | undefined
  effective_date: EffectiveDate
  payable_date?: PayableDate | undefined
  rate: string
}
type CorporateActionEventCashMerger = {
  action: CorporateActionEventAction
  at: string
  event_id: EventId
  region: CorporateActionEventRegion
  ca: CaEventCashMerger
  event_type: 'cash_merger_corporateaction_event'
}
type CaEventEquityPartialCall = {
  id: CaId
  process_date: ProcessDate
  currency?: Currency | undefined
  cusip?: string | undefined
  dividend_rate?: string | undefined
  isin?: Isin | undefined
  lottery_date?: string | undefined
  lottery_type?: 'original' | 'supplemental' | undefined
  payable_date?: PayableDate | undefined
  price?: string | undefined
  record_date?: RecordDate | undefined
  results_publication_date?: string | undefined
  symbol: string
}
type CorporateActionEventEquityPartialCall = {
  action: CorporateActionEventAction
  at: string
  event_id: EventId
  region: CorporateActionEventRegion
  ca: CaEventEquityPartialCall
  event_type: 'equity_partial_call_corporateaction_event'
}
type DueBillRedemptionDate = string
type CaEventForwardSplit = {
  id: CaId
  process_date: ProcessDate
  currency?: Currency | undefined
  cusip: string
  due_bill_redemption_date?: DueBillRedemptionDate | undefined
  ex_date: ExDate
  isin?: Isin | undefined
  new_rate: string
  old_rate: string
  payable_date?: PayableDate | undefined
  record_date?: RecordDate | undefined
  symbol: string
}
type CorporateActionEventForwardSplit = {
  action: CorporateActionEventAction
  at: string
  event_id: EventId
  region: CorporateActionEventRegion
  ca: CaEventForwardSplit
  event_type: 'forward_split_corporateaction_event'
}
type CaEventNameChange = {
  id: CaId
  process_date: ProcessDate
  currency?: Currency | undefined
  new_cusip: string
  new_isin?: Isin | undefined
  new_symbol: string
  old_cusip: string
  old_isin?: Isin | undefined
  old_symbol: string
}
type CorporateActionEventNameChange = {
  action: CorporateActionEventAction
  at: string
  event_id: EventId
  region: CorporateActionEventRegion
  ca: CaEventNameChange
  event_type: 'name_change_corporateaction_event'
}
type CaEventRedemption = {
  id: CaId
  process_date: ProcessDate
  currency?: Currency | undefined
  cusip: string
  isin?: Isin | undefined
  payable_date?: PayableDate | undefined
  rate: string
  symbol: string
}
type CorporateActionEventRedemption = {
  action: CorporateActionEventAction
  at: string
  event_id: EventId
  region: CorporateActionEventRegion
  ca: CaEventRedemption
  event_type: 'redemption_corporateaction_event'
}
type CaEventReorganizationStockMovement = {
  cusip: string
  isin?: Isin | undefined
  new_rate: string
  source_rate: string
  symbol: string
}
type CaEventReorganization = {
  id: CaId
  process_date: ProcessDate
  cash_rate?: string | undefined
  currency?: Currency | undefined
  cusip: string
  effective_date: EffectiveDate
  isin?: Isin | undefined
  payable_date?: PayableDate | undefined
  stock_movements?: CaEventReorganizationStockMovement[] | undefined
  symbol: string
}
type CorporateActionEventReorganization = {
  action: CorporateActionEventAction
  at: string
  event_id: EventId
  region: CorporateActionEventRegion
  ca: CaEventReorganization
  event_type: 'reorganization_corporateaction_event'
}
type CaEventReverseSplit = {
  id: CaId
  process_date: ProcessDate
  currency?: Currency | undefined
  ex_date: ExDate
  new_cusip: string
  new_isin?: Isin | undefined
  new_rate: string
  new_symbol?: string | undefined
  old_cusip: string
  old_isin?: Isin | undefined
  old_rate: string
  payable_date?: PayableDate | undefined
  record_date?: RecordDate | undefined
  symbol: string
}
type CorporateActionEventReverseSplit = {
  action: CorporateActionEventAction
  at: string
  event_id: EventId
  region: CorporateActionEventRegion
  ca: CaEventReverseSplit
  event_type: 'reverse_split_corporateaction_event'
}
type ExpirationDate = string
type CaEventRightsDistribution = {
  id: CaId
  process_date: ProcessDate
  currency?: Currency | undefined
  ex_date: ExDate
  expiration_date?: ExpirationDate | undefined
  new_cusip: string
  new_isin?: Isin | undefined
  new_symbol: string
  payable_date: PayableDate
  rate: string
  record_date?: RecordDate | undefined
  source_cusip: string
  source_isin?: Isin | undefined
  source_symbol: string
}
type CorporateActionEventRightsDistribution = {
  action: CorporateActionEventAction
  at: string
  event_id: EventId
  region: CorporateActionEventRegion
  ca: CaEventRightsDistribution
  event_type: 'rights_distribution_corporateaction_event'
}
type CaEventSpinOff = {
  id: CaId
  process_date: ProcessDate
  currency?: Currency | undefined
  due_bill_redemption_date?: DueBillRedemptionDate | undefined
  ex_date: ExDate
  new_cusip: string
  new_isin?: Isin | undefined
  new_rate: string
  new_symbol: string
  payable_date?: PayableDate | undefined
  record_date?: RecordDate | undefined
  source_cusip: string
  source_isin?: Isin | undefined
  source_rate: string
  source_symbol: string
}
type CorporateActionEventSpinOff = {
  action: CorporateActionEventAction
  at: string
  event_id: EventId
  region: CorporateActionEventRegion
  ca: CaEventSpinOff
  event_type: 'spin_off_corporateaction_event'
}
type CaEventStockAndCashMerger = {
  id: CaId
  process_date: ProcessDate
  acquiree_cusip: string
  acquiree_isin?: Isin | undefined
  acquiree_rate: string
  acquiree_symbol: string
  acquirer_cusip: string
  acquirer_isin?: Isin | undefined
  acquirer_rate: string
  acquirer_symbol: string
  cash_rate: string
  currency?: Currency | undefined
  effective_date: EffectiveDate
  payable_date?: PayableDate | undefined
}
type CorporateActionEventStockAndCashMerger = {
  action: CorporateActionEventAction
  at: string
  event_id: EventId
  region: CorporateActionEventRegion
  ca: CaEventStockAndCashMerger
  event_type: 'stock_and_cash_merger_corporateaction_event'
}
type CaEventStockDividend = {
  id: CaId
  process_date: ProcessDate
  currency?: Currency | undefined
  cusip: string
  ex_date: ExDate
  isin?: Isin | undefined
  payable_date?: PayableDate | undefined
  rate: string
  record_date?: RecordDate | undefined
  symbol: string
}
type CorporateActionEventStockDividend = {
  action: CorporateActionEventAction
  at: string
  event_id: EventId
  region: CorporateActionEventRegion
  ca: CaEventStockDividend
  event_type: 'stock_dividend_corporateaction_event'
}
type CaEventStockMerger = {
  id: CaId
  process_date: ProcessDate
  acquiree_cusip: string
  acquiree_isin?: Isin | undefined
  acquiree_rate: string
  acquiree_symbol: string
  acquirer_cusip: string
  acquirer_isin?: Isin | undefined
  acquirer_rate: string
  acquirer_symbol: string
  currency?: Currency | undefined
  effective_date: EffectiveDate
  payable_date?: PayableDate | undefined
}
type CorporateActionEventStockMerger = {
  action: CorporateActionEventAction
  at: string
  event_id: EventId
  region: CorporateActionEventRegion
  ca: CaEventStockMerger
  event_type: 'stock_merger_corporateaction_event'
}
type CaEventUnitSplit = {
  id: CaId
  process_date: ProcessDate
  alternate_cusip: string
  alternate_isin?: Isin | undefined
  alternate_rate: string
  alternate_symbol: string
  currency?: Currency | undefined
  effective_date: EffectiveDate
  new_cusip: string
  new_isin?: Isin | undefined
  new_rate: string
  new_symbol: string
  old_cusip: string
  old_isin?: Isin | undefined
  old_rate: string
  old_symbol: string
  payable_date?: PayableDate | undefined
}
type CorporateActionEventUnitSplit = {
  action: CorporateActionEventAction
  at: string
  event_id: EventId
  region: CorporateActionEventRegion
  ca: CaEventUnitSplit
  event_type: 'unit_split_corporateaction_event'
}
type CaEventWorthlessRemoval = {
  id: CaId
  process_date: ProcessDate
  currency?: Currency | undefined
  cusip: string
  isin?: Isin | undefined
  symbol: string
}
type CorporateActionEventWorthlessRemoval = {
  action: CorporateActionEventAction
  at: string
  event_id: EventId
  region: CorporateActionEventRegion
  ca: CaEventWorthlessRemoval
  event_type: 'worthless_removal_corporateaction_event'
}
type CorporateActionEvent =
  | CorporateActionEventCapitalGainsDistribution
  | CorporateActionEventCashDividend
  | CorporateActionEventCashMerger
  | CorporateActionEventEquityPartialCall
  | CorporateActionEventForwardSplit
  | CorporateActionEventNameChange
  | CorporateActionEventRedemption
  | CorporateActionEventReorganization
  | CorporateActionEventReverseSplit
  | CorporateActionEventRightsDistribution
  | CorporateActionEventSpinOff
  | CorporateActionEventStockAndCashMerger
  | CorporateActionEventStockDividend
  | CorporateActionEventStockMerger
  | CorporateActionEventUnitSplit
  | CorporateActionEventWorthlessRemoval
type Timestamp = string
type FixedIncomePrice = {
  p: number
  t: Timestamp
  ytm?: number | undefined
  ytw?: number | undefined
}
type FixedIncomeLatestPricesResp = { prices: { [x: string]: FixedIncomePrice } }
type FixedIncomeQuote = {
  ams: bigint
  ap: number
  as: bigint
  aytm: number
  aytw: number
  bms: bigint
  bp: number
  bs: bigint
  bytm: number
  bytw: number
  t: Timestamp
}
type FixedIncomeLatestQuotesResp = { quotes: { [x: string]: FixedIncomeQuote } }
type NewsImage = { size: 'thumb' | 'small' | 'large'; url: string }
type News = {
  author: string
  content: string
  created_at: string
  headline: string
  id: bigint
  images: NewsImage[]
  source: string
  summary: string
  symbols: string[]
  updated_at: string
  url?: (string | null) | undefined
}
type NextPageToken = string | null
type NewsResp = { news: News[]; next_page_token: NextPageToken }
type OptionBar = {
  c: number
  h: number
  l: number
  n: bigint
  o: number
  t: Timestamp
  v: bigint
  vw: number
}
type OptionBarsResp = {
  bars: { [x: string]: OptionBar[] }
  currency?: string | undefined
  next_page_token: NextPageToken
}
type OptionConditions = { [x: string]: string }
type OptionExchanges = { [x: string]: string }
type OptionFeed = 'opra' | 'indicative'
type OptionQuote = {
  ap: number
  as: number
  ax: string
  bp: number
  bs: number
  bx: string
  c: string
  t: Timestamp
}
type OptionLatestQuotesResp = { quotes: { [x: string]: OptionQuote } }
type OptionGreeks = { delta: number; gamma: number; rho: number; theta: number; vega: number }
type OptionTrade = { c: string; p: number; s: number; t: Timestamp; x: string }
type OptionSnapshot = {
  dailyBar?: OptionBar | undefined
  greeks?: OptionGreeks | undefined
  impliedVolatility?: number | undefined
  latestQuote?: OptionQuote | undefined
  latestTrade?: OptionTrade | undefined
  minuteBar?: OptionBar | undefined
  prevDailyBar?: OptionBar | undefined
}
type OptionSnapshotsResp = {
  next_page_token: NextPageToken
  snapshots: { [x: string]: OptionSnapshot }
}
type OptionTradesResp = {
  currency?: string | undefined
  next_page_token: NextPageToken
  trades: { [x: string]: OptionTrade[] }
}
type OptionLatestTradesResp = { trades: { [x: string]: OptionTrade } }
type MarketType = 'stocks' | 'crypto'
type Mover = { change: number; percent_change: number; price: number; symbol: string }
type MoversResp = {
  gainers: Mover[]
  last_updated: string
  losers: Mover[]
  market_type: MarketType
}
type MostActive = { symbol: string; trade_count: bigint; volume: bigint }
type MostActivesResp = { last_updated: string; most_actives: MostActive[] }
type CryptoHistoricalLoc = 'us' | 'us-1' | 'us-2' | 'eu-1' | 'bs-1'
type CryptoBar = {
  c: number
  h: number
  l: number
  n: bigint
  o: number
  t: Timestamp
  v: number
  vw: number
}
type CryptoBarsResp = { bars: { [x: string]: CryptoBar[] }; next_page_token: NextPageToken }
type CryptoLatestLoc = 'us' | 'us-1' | 'us-2' | 'eu-1' | 'bs-1'
type CryptoLatestBarsResp = { bars: { [x: string]: CryptoBar } }
type CryptoOrderbookEntry = { p: number; s: number }
type CryptoOrderbook = { a: CryptoOrderbookEntry[]; b: CryptoOrderbookEntry[]; t: Timestamp }
type CryptoLatestOrderbooksResp = { orderbooks: { [x: string]: CryptoOrderbook } }
type CryptoQuote = { ap: number; as: number; bp: number; bs: number; t: Timestamp }
type CryptoLatestQuotesResp = { quotes: { [x: string]: CryptoQuote } }
type CryptoTrade = { i: bigint; p: number; s: number; t: Timestamp; tks: string }
type CryptoLatestTradesResp = { trades: { [x: string]: CryptoTrade } }
type CryptoQuotesResp = { next_page_token: NextPageToken; quotes: { [x: string]: CryptoQuote[] } }
type CryptoSnapshot = {
  dailyBar?: CryptoBar | undefined
  latestQuote?: CryptoQuote | undefined
  latestTrade?: CryptoTrade | undefined
  minuteBar?: CryptoBar | undefined
  prevDailyBar?: CryptoBar | undefined
}
type CryptoSnapshotsResp = { snapshots: { [x: string]: CryptoSnapshot } }
type CryptoTradesResp = { next_page_token: NextPageToken; trades: { [x: string]: CryptoTrade[] } }
type Region = 'us' | 'non_us' | 'all'
type DataQuality = 'complete' | 'all'
type CapitalGainsDistribution = {
  currency?: Currency | undefined
  cusip: string
  ex_date: ExDate
  id: CaId
  isin?: Isin | undefined
  long_term_rate?: number | undefined
  payable_date?: PayableDate | undefined
  process_date: ProcessDate
  record_date?: RecordDate | undefined
  short_term_rate?: number | undefined
  symbol: string
}
type CashDividend = {
  currency?: Currency | undefined
  cusip: string
  due_bill_off_date?: string | undefined
  due_bill_on_date?: string | undefined
  ex_date: ExDate
  foreign: boolean
  id: CaId
  isin?: Isin | undefined
  payable_date?: PayableDate | undefined
  process_date: ProcessDate
  rate: number
  record_date?: RecordDate | undefined
  special: boolean
  sub_type?: 'interest' | 'return_of_capital' | undefined
  symbol: string
}
type CashMerger = {
  acquiree_cusip: string
  acquiree_isin?: Isin | undefined
  acquiree_symbol: string
  acquirer_cusip?: string | undefined
  acquirer_isin?: Isin | undefined
  acquirer_symbol?: string | undefined
  currency?: Currency | undefined
  effective_date: EffectiveDate
  id: CaId
  payable_date?: PayableDate | undefined
  process_date: ProcessDate
  rate: number
}
type ForwardSplit = {
  currency?: Currency | undefined
  cusip: string
  due_bill_redemption_date?: DueBillRedemptionDate | undefined
  ex_date: ExDate
  id: CaId
  isin?: Isin | undefined
  new_rate: number
  old_rate: number
  payable_date?: PayableDate | undefined
  process_date: ProcessDate
  record_date?: RecordDate | undefined
  symbol: string
}
type NameChange = {
  currency?: Currency | undefined
  id: CaId
  new_cusip: string
  new_isin?: Isin | undefined
  new_symbol: string
  old_cusip: string
  old_isin?: Isin | undefined
  old_symbol: string
  process_date: ProcessDate
}
type PartialCall = {
  currency?: Currency | undefined
  cusip?: string | undefined
  dividend_rate?: number | undefined
  id: CaId
  isin?: Isin | undefined
  lottery_date?: string | undefined
  lottery_type?: 'original' | 'supplemental' | undefined
  payable_date?: PayableDate | undefined
  price?: number | undefined
  process_date: ProcessDate
  record_date?: RecordDate | undefined
  results_publication_date?: string | undefined
  symbol: string
}
type Redemption = {
  currency?: Currency | undefined
  cusip: string
  id: CaId
  isin?: Isin | undefined
  payable_date?: PayableDate | undefined
  process_date: ProcessDate
  rate: number
  symbol: string
}
type ReorganizationStockMovement = {
  cusip: string
  isin?: string | undefined
  new_rate: number
  source_rate: number
  symbol: string
}
type Reorganization = {
  cash_rate?: number | undefined
  currency?: Currency | undefined
  cusip: string
  effective_date: EffectiveDate
  id: CaId
  isin?: string | undefined
  payable_date?: PayableDate | undefined
  process_date: ProcessDate
  stock_movements?: ReorganizationStockMovement[] | undefined
  symbol: string
}
type ReverseSplit = {
  currency?: Currency | undefined
  ex_date: ExDate
  id: CaId
  new_cusip: string
  new_isin?: Isin | undefined
  new_rate: number
  new_symbol?: string | undefined
  old_cusip: string
  old_isin?: Isin | undefined
  old_rate: number
  payable_date?: PayableDate | undefined
  process_date: ProcessDate
  record_date?: RecordDate | undefined
  symbol: string
}
type RightsDistribution = {
  currency?: Currency | undefined
  ex_date: ExDate
  expiration_date?: ExpirationDate | undefined
  id: CaId
  new_cusip: string
  new_isin?: Isin | undefined
  new_symbol: string
  payable_date: PayableDate
  process_date: ProcessDate
  rate: number
  record_date?: RecordDate | undefined
  source_cusip: string
  source_isin?: Isin | undefined
  source_symbol: string
}
type SpinOff = {
  currency?: Currency | undefined
  due_bill_redemption_date?: DueBillRedemptionDate | undefined
  ex_date: ExDate
  id: CaId
  new_cusip: string
  new_isin?: Isin | undefined
  new_rate: number
  new_symbol: string
  payable_date?: PayableDate | undefined
  process_date: ProcessDate
  record_date?: RecordDate | undefined
  source_cusip: string
  source_isin?: Isin | undefined
  source_rate: number
  source_symbol: string
}
type StockAndCashMerger = {
  acquiree_cusip: string
  acquiree_isin?: Isin | undefined
  acquiree_rate: number
  acquiree_symbol: string
  acquirer_cusip: string
  acquirer_isin?: Isin | undefined
  acquirer_rate: number
  acquirer_symbol: string
  cash_rate: number
  currency?: Currency | undefined
  effective_date: EffectiveDate
  id: CaId
  payable_date?: PayableDate | undefined
  process_date: ProcessDate
}
type StockDividend = {
  currency?: Currency | undefined
  cusip: string
  ex_date: ExDate
  id: CaId
  isin?: Isin | undefined
  payable_date?: PayableDate | undefined
  process_date: ProcessDate
  rate: number
  record_date?: RecordDate | undefined
  symbol: string
}
type StockMerger = {
  acquiree_cusip: string
  acquiree_isin?: Isin | undefined
  acquiree_rate: number
  acquiree_symbol: string
  acquirer_cusip: string
  acquirer_isin?: Isin | undefined
  acquirer_rate: number
  acquirer_symbol: string
  currency?: Currency | undefined
  effective_date: EffectiveDate
  id: CaId
  payable_date?: PayableDate | undefined
  process_date: ProcessDate
}
type UnitSplit = {
  alternate_cusip: string
  alternate_isin?: Isin | undefined
  alternate_rate: number
  alternate_symbol: string
  currency?: Currency | undefined
  effective_date: EffectiveDate
  id: CaId
  new_cusip: string
  new_isin?: Isin | undefined
  new_rate: number
  new_symbol: string
  old_cusip: string
  old_isin?: Isin | undefined
  old_rate: number
  old_symbol: string
  payable_date?: PayableDate | undefined
  process_date: ProcessDate
}
type WorthlessRemoval = {
  currency?: Currency | undefined
  cusip: string
  id: CaId
  isin?: Isin | undefined
  process_date: ProcessDate
  symbol: string
}
type CorporateActions = {
  capital_gains_distributions?: CapitalGainsDistribution[] | undefined
  cash_dividends?: CashDividend[] | undefined
  cash_mergers?: CashMerger[] | undefined
  forward_splits?: ForwardSplit[] | undefined
  name_changes?: NameChange[] | undefined
  partial_calls?: PartialCall[] | undefined
  redemptions?: Redemption[] | undefined
  reorganizations?: Reorganization[] | undefined
  reverse_splits?: ReverseSplit[] | undefined
  rights_distributions?: RightsDistribution[] | undefined
  spin_offs?: SpinOff[] | undefined
  stock_and_cash_mergers?: StockAndCashMerger[] | undefined
  stock_dividends?: StockDividend[] | undefined
  stock_mergers?: StockMerger[] | undefined
  unit_splits?: UnitSplit[] | undefined
  worthless_removals?: WorthlessRemoval[] | undefined
}
type CorporateActionsResp = { corporate_actions: CorporateActions; next_page_token: NextPageToken }
type StockAuctionFeed = string
type StockAuction = { c: string; p: number; s?: bigint | undefined; t: Timestamp; x: string }
type Date = string
type StockDailyAuctions = { c: StockAuction[]; d: Date; o: StockAuction[] }
type StockAuctionsRespSingle = {
  auctions: StockDailyAuctions[]
  currency?: string | undefined
  next_page_token: NextPageToken
  symbol: string
}
type StockAdjustment = 'raw' | 'split' | 'dividend' | 'spin-off' | 'all'
type StockHistoricalFeed = 'iex' | 'otc' | 'sip' | 'boats'
type StockBar = {
  c: number
  h: number
  l: number
  n: bigint
  o: number
  t: Timestamp
  v: bigint
  vw: number
}
type StockBarsRespSingle = {
  bars: StockBar[]
  currency?: string | undefined
  next_page_token: NextPageToken
  symbol: string
}
type StockLatestFeed = 'delayed_sip' | 'iex' | 'otc' | 'sip' | 'boats' | 'overnight'
type StockLatestBarsRespSingle = { bar: StockBar; currency?: string | undefined; symbol: string }
type StockTape = 'A' | 'B' | 'C' | 'N' | 'O'
type StockQuote = {
  ap: number
  as: number
  ax: string
  bp: number
  bs: number
  bx: string
  c: string[]
  t: Timestamp
  z: StockTape
}
type StockQuotesRespSingle = {
  currency?: string | undefined
  next_page_token: NextPageToken
  quotes: StockQuote[]
  symbol: string
}
type StockLatestQuotesRespSingle = {
  currency?: string | undefined
  quote: StockQuote
  symbol: string
}
type StockTrade = {
  c: string[]
  i: bigint
  p: number
  s: number
  t: Timestamp
  u?: string | undefined
  x: string
  z: StockTape
}
type StockSnapshotsRespSingle = {
  dailyBar?: StockBar | undefined
  latestQuote?: StockQuote | undefined
  latestTrade?: StockTrade | undefined
  minuteBar?: StockBar | undefined
  prevDailyBar?: StockBar | undefined
  currency?: string | undefined
  symbol?: string | undefined
}
type StockTradesRespSingle = {
  currency?: string | undefined
  next_page_token: NextPageToken
  symbol: string
  trades: StockTrade[]
}
type StockLatestTradesRespSingle = {
  currency?: string | undefined
  symbol: string
  trade: StockTrade
}
type StockAuctionsResp = {
  auctions: { [x: string]: StockDailyAuctions[] }
  currency?: string | undefined
  next_page_token: NextPageToken
}
type StockBarsResp = {
  bars: { [x: string]: StockBar[] }
  currency?: string | undefined
  next_page_token: NextPageToken
}
type StockLatestBarsResp = { bars: { [x: string]: StockBar }; currency?: string | undefined }
type StockConditions = { [x: string]: string }
type StockExchanges = { [x: string]: string }
type StockQuotesResp = {
  currency?: string | undefined
  next_page_token: NextPageToken
  quotes: { [x: string]: StockQuote[] }
}
type StockLatestQuotesResp = { currency?: string | undefined; quotes: { [x: string]: StockQuote } }
type StockSnapshot = {
  dailyBar?: StockBar | undefined
  latestQuote?: StockQuote | undefined
  latestTrade?: StockTrade | undefined
  minuteBar?: StockBar | undefined
  prevDailyBar?: StockBar | undefined
}
type StockSnapshotsResp = { [x: string]: StockSnapshot }
type StockTradesResp = {
  currency?: string | undefined
  next_page_token: NextPageToken
  trades: { [x: string]: StockTrade[] }
}
type StockLatestTradesResp = { currency?: string | undefined; trades: { [x: string]: StockTrade } }
type StockV3HistoricalFeed = 'euroctp' | 'xetr' | 'xhkg' | 'xlon' | 'xsau'
type StockV3Bar = {
  c: string
  h: string
  l: string
  n: string
  o: string
  t: Timestamp
  v: string
  vw: string
}
type StockV3BarsResp = { bars: { [x: string]: StockV3Bar[] }; next_page_token: NextPageToken }
type StockV3LatestFeed = 'euroctp' | 'xetr' | 'xhkg' | 'xlon' | 'xsau'
type StockV3LatestBarsResp = { bars: { [x: string]: StockV3Bar } }
type StockV3Quote = { ap: string; as: string; bp: string; bs: string; t: Timestamp }
type StockV3LatestQuotesResp = { quotes: { [x: string]: StockV3Quote } }
type StockV3Trade = { i?: string | undefined; m: string; p: string; s: string; t: Timestamp }
type StockV3LatestTradesResp = { trades: { [x: string]: StockV3Trade } }
type StockV3QuotesResp = { next_page_token: NextPageToken; quotes: { [x: string]: StockV3Quote[] } }
type StockV3Snapshot = {
  daily_bar?: StockV3Bar | undefined
  latest_quote?: StockV3Quote | undefined
  latest_trade?: StockV3Trade | undefined
  minute_bar?: StockV3Bar | undefined
  prev_daily_bar?: StockV3Bar | undefined
}
type StockV3SnapshotsResp = { snapshots: { [x: string]: StockV3Snapshot } }
type StockV3TradesResp = { next_page_token: NextPageToken; trades: { [x: string]: StockV3Trade[] } }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta1/events/corporate-actions': {
      $get:
        | {
            input: {
              query: {
                type?: CorporateActionEventType[] | undefined
                region?: 'all' | 'us' | 'non_us' | undefined
                since?: string | undefined
                until?: string | undefined
                since_id?: EventId | undefined
                until_id?: EventId | undefined
              }
            } & { header: { 'Last-Event-Id'?: EventId | undefined } }
            output: CorporateActionEvent[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                type?: CorporateActionEventType[] | undefined
                region?: 'all' | 'us' | 'non_us' | undefined
                since?: string | undefined
                until?: string | undefined
                since_id?: EventId | undefined
                until_id?: EventId | undefined
              }
            } & { header: { 'Last-Event-Id'?: EventId | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                type?: CorporateActionEventType[] | undefined
                region?: 'all' | 'us' | 'non_us' | undefined
                since?: string | undefined
                until?: string | undefined
                since_id?: EventId | undefined
                until_id?: EventId | undefined
              }
            } & { header: { 'Last-Event-Id'?: EventId | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                type?: CorporateActionEventType[] | undefined
                region?: 'all' | 'us' | 'non_us' | undefined
                since?: string | undefined
                until?: string | undefined
                since_id?: EventId | undefined
                until_id?: EventId | undefined
              }
            } & { header: { 'Last-Event-Id'?: EventId | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                type?: CorporateActionEventType[] | undefined
                region?: 'all' | 'us' | 'non_us' | undefined
                since?: string | undefined
                until?: string | undefined
                since_id?: EventId | undefined
                until_id?: EventId | undefined
              }
            } & { header: { 'Last-Event-Id'?: EventId | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              query: {
                type?: CorporateActionEventType[] | undefined
                region?: 'all' | 'us' | 'non_us' | undefined
                since?: string | undefined
                until?: string | undefined
                since_id?: EventId | undefined
                until_id?: EventId | undefined
              }
            } & { header: { 'Last-Event-Id'?: EventId | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1beta1/fixed_income/latest/prices': {
      $get:
        | {
            input: { query: { isins: string } }
            output: FixedIncomeLatestPricesResp
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { isins: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { isins: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { isins: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { query: { isins: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { query: { isins: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1beta1/fixed_income/latest/quotes': {
      $get:
        | {
            input: { query: { isins: string; trade_size?: number | undefined } }
            output: FixedIncomeLatestQuotesResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { isins: string; trade_size?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { isins: string; trade_size?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { isins: string; trade_size?: number | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { isins: string; trade_size?: number | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { query: { isins: string; trade_size?: number | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1beta1/logos/:symbol': {
      $get:
        | {
            input: { param: { symbol: string } } & { query: { placeholder?: boolean | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { symbol: string } } & { query: { placeholder?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { symbol: string } } & { query: { placeholder?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { symbol: string } } & { query: { placeholder?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { symbol: string } } & { query: { placeholder?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { symbol: string } } & { query: { placeholder?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1beta1/news': {
      $get:
        | {
            input: {
              query: {
                start?: string | undefined
                end?: string | undefined
                sort?: 'asc' | 'desc' | undefined
                symbols?: string | undefined
                limit?: number | undefined
                include_content?: boolean | undefined
                exclude_contentless?: boolean | undefined
                page_token?: string | undefined
              }
            }
            output: NewsResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start?: string | undefined
                end?: string | undefined
                sort?: 'asc' | 'desc' | undefined
                symbols?: string | undefined
                limit?: number | undefined
                include_content?: boolean | undefined
                exclude_contentless?: boolean | undefined
                page_token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                start?: string | undefined
                end?: string | undefined
                sort?: 'asc' | 'desc' | undefined
                symbols?: string | undefined
                limit?: number | undefined
                include_content?: boolean | undefined
                exclude_contentless?: boolean | undefined
                page_token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                start?: string | undefined
                end?: string | undefined
                sort?: 'asc' | 'desc' | undefined
                symbols?: string | undefined
                limit?: number | undefined
                include_content?: boolean | undefined
                exclude_contentless?: boolean | undefined
                page_token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                start?: string | undefined
                end?: string | undefined
                sort?: 'asc' | 'desc' | undefined
                symbols?: string | undefined
                limit?: number | undefined
                include_content?: boolean | undefined
                exclude_contentless?: boolean | undefined
                page_token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              query: {
                start?: string | undefined
                end?: string | undefined
                sort?: 'asc' | 'desc' | undefined
                symbols?: string | undefined
                limit?: number | undefined
                include_content?: boolean | undefined
                exclude_contentless?: boolean | undefined
                page_token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1beta1/options/bars': {
      $get:
        | {
            input: {
              query: {
                symbols: string
                timeframe: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: OptionBarsResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbols: string
                timeframe: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                symbols: string
                timeframe: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                symbols: string
                timeframe: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                symbols: string
                timeframe: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              query: {
                symbols: string
                timeframe: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1beta1/options/meta/conditions/:ticktype': {
      $get:
        | {
            input: { param: { ticktype: 'trade' | 'quote' } }
            output: OptionConditions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticktype: 'trade' | 'quote' } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ticktype: 'trade' | 'quote' } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ticktype: 'trade' | 'quote' } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ticktype: 'trade' | 'quote' } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ticktype: 'trade' | 'quote' } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1beta1/options/meta/exchanges': {
      $get:
        | { input: {}; output: OptionExchanges; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1beta1/options/quotes/latest': {
      $get:
        | {
            input: { query: { symbols: string; feed?: OptionFeed | undefined } }
            output: OptionLatestQuotesResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { symbols: string; feed?: OptionFeed | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { symbols: string; feed?: OptionFeed | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { symbols: string; feed?: OptionFeed | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { symbols: string; feed?: OptionFeed | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { query: { symbols: string; feed?: OptionFeed | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1beta1/options/snapshots': {
      $get:
        | {
            input: {
              query: {
                symbols: string
                feed?: OptionFeed | undefined
                updated_since?: string | undefined
                limit?: number | undefined
                page_token?: string | undefined
              }
            }
            output: OptionSnapshotsResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbols: string
                feed?: OptionFeed | undefined
                updated_since?: string | undefined
                limit?: number | undefined
                page_token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                symbols: string
                feed?: OptionFeed | undefined
                updated_since?: string | undefined
                limit?: number | undefined
                page_token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                symbols: string
                feed?: OptionFeed | undefined
                updated_since?: string | undefined
                limit?: number | undefined
                page_token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                symbols: string
                feed?: OptionFeed | undefined
                updated_since?: string | undefined
                limit?: number | undefined
                page_token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              query: {
                symbols: string
                feed?: OptionFeed | undefined
                updated_since?: string | undefined
                limit?: number | undefined
                page_token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1beta1/options/snapshots/:underlying_symbol': {
      $get:
        | {
            input: { param: { underlying_symbol: string } } & {
              query: {
                feed?: OptionFeed | undefined
                limit?: number | undefined
                updated_since?: string | undefined
                page_token?: string | undefined
                type?: 'call' | 'put' | undefined
                strike_price_gte?: number | undefined
                strike_price_lte?: number | undefined
                expiration_date?: string | undefined
                expiration_date_gte?: string | undefined
                expiration_date_lte?: string | undefined
                root_symbol?: string | undefined
              }
            }
            output: OptionSnapshotsResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { underlying_symbol: string } } & {
              query: {
                feed?: OptionFeed | undefined
                limit?: number | undefined
                updated_since?: string | undefined
                page_token?: string | undefined
                type?: 'call' | 'put' | undefined
                strike_price_gte?: number | undefined
                strike_price_lte?: number | undefined
                expiration_date?: string | undefined
                expiration_date_gte?: string | undefined
                expiration_date_lte?: string | undefined
                root_symbol?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { underlying_symbol: string } } & {
              query: {
                feed?: OptionFeed | undefined
                limit?: number | undefined
                updated_since?: string | undefined
                page_token?: string | undefined
                type?: 'call' | 'put' | undefined
                strike_price_gte?: number | undefined
                strike_price_lte?: number | undefined
                expiration_date?: string | undefined
                expiration_date_gte?: string | undefined
                expiration_date_lte?: string | undefined
                root_symbol?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { underlying_symbol: string } } & {
              query: {
                feed?: OptionFeed | undefined
                limit?: number | undefined
                updated_since?: string | undefined
                page_token?: string | undefined
                type?: 'call' | 'put' | undefined
                strike_price_gte?: number | undefined
                strike_price_lte?: number | undefined
                expiration_date?: string | undefined
                expiration_date_gte?: string | undefined
                expiration_date_lte?: string | undefined
                root_symbol?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { underlying_symbol: string } } & {
              query: {
                feed?: OptionFeed | undefined
                limit?: number | undefined
                updated_since?: string | undefined
                page_token?: string | undefined
                type?: 'call' | 'put' | undefined
                strike_price_gte?: number | undefined
                strike_price_lte?: number | undefined
                expiration_date?: string | undefined
                expiration_date_gte?: string | undefined
                expiration_date_lte?: string | undefined
                root_symbol?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { underlying_symbol: string } } & {
              query: {
                feed?: OptionFeed | undefined
                limit?: number | undefined
                updated_since?: string | undefined
                page_token?: string | undefined
                type?: 'call' | 'put' | undefined
                strike_price_gte?: number | undefined
                strike_price_lte?: number | undefined
                expiration_date?: string | undefined
                expiration_date_gte?: string | undefined
                expiration_date_lte?: string | undefined
                root_symbol?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1beta1/options/trades': {
      $get:
        | {
            input: {
              query: {
                symbols: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: OptionTradesResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbols: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                symbols: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                symbols: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                symbols: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              query: {
                symbols: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1beta1/options/trades/latest': {
      $get:
        | {
            input: { query: { symbols: string; feed?: OptionFeed | undefined } }
            output: OptionLatestTradesResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { symbols: string; feed?: OptionFeed | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { symbols: string; feed?: OptionFeed | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { symbols: string; feed?: OptionFeed | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { symbols: string; feed?: OptionFeed | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { query: { symbols: string; feed?: OptionFeed | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1beta1/screener/:market_type/movers': {
      $get:
        | {
            input: { param: { market_type: MarketType } } & { query: { top?: number | undefined } }
            output: MoversResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { market_type: MarketType } } & { query: { top?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { market_type: MarketType } } & { query: { top?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { market_type: MarketType } } & { query: { top?: number | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { market_type: MarketType } } & { query: { top?: number | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { market_type: MarketType } } & { query: { top?: number | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1beta1/screener/stocks/most-actives': {
      $get:
        | {
            input: { query: { by?: 'volume' | 'trades' | undefined; top?: number | undefined } }
            output: MostActivesResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { by?: 'volume' | 'trades' | undefined; top?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { by?: 'volume' | 'trades' | undefined; top?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { by?: 'volume' | 'trades' | undefined; top?: number | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { by?: 'volume' | 'trades' | undefined; top?: number | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { query: { by?: 'volume' | 'trades' | undefined; top?: number | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1beta3/crypto/:loc/bars': {
      $get:
        | {
            input: { param: { loc: CryptoHistoricalLoc } } & {
              query: {
                symbols: string
                timeframe: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: CryptoBarsResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { loc: CryptoHistoricalLoc } } & {
              query: {
                symbols: string
                timeframe: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { loc: CryptoHistoricalLoc } } & {
              query: {
                symbols: string
                timeframe: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { loc: CryptoHistoricalLoc } } & {
              query: {
                symbols: string
                timeframe: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { loc: CryptoHistoricalLoc } } & {
              query: {
                symbols: string
                timeframe: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { loc: CryptoHistoricalLoc } } & {
              query: {
                symbols: string
                timeframe: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1beta3/crypto/:loc/latest/bars': {
      $get:
        | {
            input: { param: { loc: CryptoLatestLoc } } & { query: { symbols: string } }
            output: CryptoLatestBarsResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { loc: CryptoLatestLoc } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { loc: CryptoLatestLoc } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { loc: CryptoLatestLoc } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { loc: CryptoLatestLoc } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { loc: CryptoLatestLoc } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1beta3/crypto/:loc/latest/orderbooks': {
      $get:
        | {
            input: { param: { loc: CryptoLatestLoc } } & { query: { symbols: string } }
            output: CryptoLatestOrderbooksResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { loc: CryptoLatestLoc } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { loc: CryptoLatestLoc } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { loc: CryptoLatestLoc } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { loc: CryptoLatestLoc } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { loc: CryptoLatestLoc } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1beta3/crypto/:loc/latest/quotes': {
      $get:
        | {
            input: { param: { loc: CryptoLatestLoc } } & { query: { symbols: string } }
            output: CryptoLatestQuotesResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { loc: CryptoLatestLoc } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { loc: CryptoLatestLoc } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { loc: CryptoLatestLoc } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { loc: CryptoLatestLoc } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { loc: CryptoLatestLoc } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1beta3/crypto/:loc/latest/trades': {
      $get:
        | {
            input: { param: { loc: CryptoLatestLoc } } & { query: { symbols: string } }
            output: CryptoLatestTradesResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { loc: CryptoLatestLoc } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { loc: CryptoLatestLoc } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { loc: CryptoLatestLoc } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { loc: CryptoLatestLoc } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { loc: CryptoLatestLoc } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1beta3/crypto/:loc/quotes': {
      $get:
        | {
            input: { param: { loc: CryptoHistoricalLoc } } & {
              query: {
                symbols: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: CryptoQuotesResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { loc: CryptoHistoricalLoc } } & {
              query: {
                symbols: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { loc: CryptoHistoricalLoc } } & {
              query: {
                symbols: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { loc: CryptoHistoricalLoc } } & {
              query: {
                symbols: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { loc: CryptoHistoricalLoc } } & {
              query: {
                symbols: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { loc: CryptoHistoricalLoc } } & {
              query: {
                symbols: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1beta3/crypto/:loc/snapshots': {
      $get:
        | {
            input: { param: { loc: CryptoLatestLoc } } & { query: { symbols: string } }
            output: CryptoSnapshotsResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { loc: CryptoLatestLoc } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { loc: CryptoLatestLoc } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { loc: CryptoLatestLoc } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { loc: CryptoLatestLoc } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { loc: CryptoLatestLoc } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1beta3/crypto/:loc/trades': {
      $get:
        | {
            input: { param: { loc: CryptoHistoricalLoc } } & {
              query: {
                symbols: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: CryptoTradesResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { loc: CryptoHistoricalLoc } } & {
              query: {
                symbols: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { loc: CryptoHistoricalLoc } } & {
              query: {
                symbols: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { loc: CryptoHistoricalLoc } } & {
              query: {
                symbols: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { loc: CryptoHistoricalLoc } } & {
              query: {
                symbols: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { loc: CryptoHistoricalLoc } } & {
              query: {
                symbols: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/corporate-actions': {
      $get:
        | {
            input: {
              query: {
                symbols?: string | undefined
                cusips?: string | undefined
                types?: string | undefined
                region?: Region | undefined
                start?: string | undefined
                end?: string | undefined
                ids?: string | undefined
                limit?: number | undefined
                data_quality?: DataQuality | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: CorporateActionsResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbols?: string | undefined
                cusips?: string | undefined
                types?: string | undefined
                region?: Region | undefined
                start?: string | undefined
                end?: string | undefined
                ids?: string | undefined
                limit?: number | undefined
                data_quality?: DataQuality | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                symbols?: string | undefined
                cusips?: string | undefined
                types?: string | undefined
                region?: Region | undefined
                start?: string | undefined
                end?: string | undefined
                ids?: string | undefined
                limit?: number | undefined
                data_quality?: DataQuality | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                symbols?: string | undefined
                cusips?: string | undefined
                types?: string | undefined
                region?: Region | undefined
                start?: string | undefined
                end?: string | undefined
                ids?: string | undefined
                limit?: number | undefined
                data_quality?: DataQuality | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                symbols?: string | undefined
                cusips?: string | undefined
                types?: string | undefined
                region?: Region | undefined
                start?: string | undefined
                end?: string | undefined
                ids?: string | undefined
                limit?: number | undefined
                data_quality?: DataQuality | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              query: {
                symbols?: string | undefined
                cusips?: string | undefined
                types?: string | undefined
                region?: Region | undefined
                start?: string | undefined
                end?: string | undefined
                ids?: string | undefined
                limit?: number | undefined
                data_quality?: DataQuality | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v2/stocks/:symbol/auctions': {
      $get:
        | {
            input: { param: { symbol: string } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                asof?: string | undefined
                feed?: StockAuctionFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: StockAuctionsRespSingle
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { symbol: string } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                asof?: string | undefined
                feed?: StockAuctionFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { symbol: string } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                asof?: string | undefined
                feed?: StockAuctionFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { symbol: string } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                asof?: string | undefined
                feed?: StockAuctionFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { symbol: string } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                asof?: string | undefined
                feed?: StockAuctionFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { symbol: string } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                asof?: string | undefined
                feed?: StockAuctionFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v2/stocks/:symbol/bars': {
      $get:
        | {
            input: { param: { symbol: string } } & {
              query: {
                timeframe: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                adjustment?: StockAdjustment[] | undefined
                asof?: string | undefined
                feed?: StockHistoricalFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: StockBarsRespSingle
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { symbol: string } } & {
              query: {
                timeframe: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                adjustment?: StockAdjustment[] | undefined
                asof?: string | undefined
                feed?: StockHistoricalFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { symbol: string } } & {
              query: {
                timeframe: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                adjustment?: StockAdjustment[] | undefined
                asof?: string | undefined
                feed?: StockHistoricalFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { symbol: string } } & {
              query: {
                timeframe: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                adjustment?: StockAdjustment[] | undefined
                asof?: string | undefined
                feed?: StockHistoricalFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { symbol: string } } & {
              query: {
                timeframe: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                adjustment?: StockAdjustment[] | undefined
                asof?: string | undefined
                feed?: StockHistoricalFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { symbol: string } } & {
              query: {
                timeframe: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                adjustment?: StockAdjustment[] | undefined
                asof?: string | undefined
                feed?: StockHistoricalFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v2/stocks/:symbol/bars/latest': {
      $get:
        | {
            input: { param: { symbol: string } } & {
              query: { feed?: StockLatestFeed | undefined; currency?: string | undefined }
            }
            output: StockLatestBarsRespSingle
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { symbol: string } } & {
              query: { feed?: StockLatestFeed | undefined; currency?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { symbol: string } } & {
              query: { feed?: StockLatestFeed | undefined; currency?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { symbol: string } } & {
              query: { feed?: StockLatestFeed | undefined; currency?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { symbol: string } } & {
              query: { feed?: StockLatestFeed | undefined; currency?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { symbol: string } } & {
              query: { feed?: StockLatestFeed | undefined; currency?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v2/stocks/:symbol/quotes': {
      $get:
        | {
            input: { param: { symbol: string } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                asof?: string | undefined
                feed?: StockHistoricalFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: StockQuotesRespSingle
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { symbol: string } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                asof?: string | undefined
                feed?: StockHistoricalFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { symbol: string } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                asof?: string | undefined
                feed?: StockHistoricalFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { symbol: string } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                asof?: string | undefined
                feed?: StockHistoricalFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { symbol: string } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                asof?: string | undefined
                feed?: StockHistoricalFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { symbol: string } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                asof?: string | undefined
                feed?: StockHistoricalFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v2/stocks/:symbol/quotes/latest': {
      $get:
        | {
            input: { param: { symbol: string } } & {
              query: { feed?: StockLatestFeed | undefined; currency?: string | undefined }
            }
            output: StockLatestQuotesRespSingle
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { symbol: string } } & {
              query: { feed?: StockLatestFeed | undefined; currency?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { symbol: string } } & {
              query: { feed?: StockLatestFeed | undefined; currency?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { symbol: string } } & {
              query: { feed?: StockLatestFeed | undefined; currency?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { symbol: string } } & {
              query: { feed?: StockLatestFeed | undefined; currency?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { symbol: string } } & {
              query: { feed?: StockLatestFeed | undefined; currency?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v2/stocks/:symbol/snapshot': {
      $get:
        | {
            input: { param: { symbol: string } } & {
              query: { feed?: StockLatestFeed | undefined; currency?: string | undefined }
            }
            output: StockSnapshotsRespSingle
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { symbol: string } } & {
              query: { feed?: StockLatestFeed | undefined; currency?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { symbol: string } } & {
              query: { feed?: StockLatestFeed | undefined; currency?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { symbol: string } } & {
              query: { feed?: StockLatestFeed | undefined; currency?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { symbol: string } } & {
              query: { feed?: StockLatestFeed | undefined; currency?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { symbol: string } } & {
              query: { feed?: StockLatestFeed | undefined; currency?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v2/stocks/:symbol/trades': {
      $get:
        | {
            input: { param: { symbol: string } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                asof?: string | undefined
                feed?: StockHistoricalFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: StockTradesRespSingle
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { symbol: string } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                asof?: string | undefined
                feed?: StockHistoricalFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { symbol: string } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                asof?: string | undefined
                feed?: StockHistoricalFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { symbol: string } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                asof?: string | undefined
                feed?: StockHistoricalFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { symbol: string } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                asof?: string | undefined
                feed?: StockHistoricalFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { symbol: string } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                asof?: string | undefined
                feed?: StockHistoricalFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v2/stocks/:symbol/trades/latest': {
      $get:
        | {
            input: { param: { symbol: string } } & {
              query: { feed?: StockLatestFeed | undefined; currency?: string | undefined }
            }
            output: StockLatestTradesRespSingle
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { symbol: string } } & {
              query: { feed?: StockLatestFeed | undefined; currency?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { symbol: string } } & {
              query: { feed?: StockLatestFeed | undefined; currency?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { symbol: string } } & {
              query: { feed?: StockLatestFeed | undefined; currency?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { symbol: string } } & {
              query: { feed?: StockLatestFeed | undefined; currency?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { symbol: string } } & {
              query: { feed?: StockLatestFeed | undefined; currency?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v2/stocks/auctions': {
      $get:
        | {
            input: {
              query: {
                symbols: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                asof?: string | undefined
                feed?: StockAuctionFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: StockAuctionsResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbols: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                asof?: string | undefined
                feed?: StockAuctionFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                symbols: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                asof?: string | undefined
                feed?: StockAuctionFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                symbols: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                asof?: string | undefined
                feed?: StockAuctionFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                symbols: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                asof?: string | undefined
                feed?: StockAuctionFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              query: {
                symbols: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                asof?: string | undefined
                feed?: StockAuctionFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v2/stocks/bars': {
      $get:
        | {
            input: {
              query: {
                symbols: string
                timeframe: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                adjustment?: StockAdjustment[] | undefined
                asof?: string | undefined
                feed?: StockHistoricalFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: StockBarsResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbols: string
                timeframe: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                adjustment?: StockAdjustment[] | undefined
                asof?: string | undefined
                feed?: StockHistoricalFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                symbols: string
                timeframe: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                adjustment?: StockAdjustment[] | undefined
                asof?: string | undefined
                feed?: StockHistoricalFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                symbols: string
                timeframe: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                adjustment?: StockAdjustment[] | undefined
                asof?: string | undefined
                feed?: StockHistoricalFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                symbols: string
                timeframe: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                adjustment?: StockAdjustment[] | undefined
                asof?: string | undefined
                feed?: StockHistoricalFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              query: {
                symbols: string
                timeframe: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                adjustment?: StockAdjustment[] | undefined
                asof?: string | undefined
                feed?: StockHistoricalFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v2/stocks/bars/latest': {
      $get:
        | {
            input: {
              query: {
                symbols: string
                feed?: StockLatestFeed | undefined
                currency?: string | undefined
              }
            }
            output: StockLatestBarsResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbols: string
                feed?: StockLatestFeed | undefined
                currency?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                symbols: string
                feed?: StockLatestFeed | undefined
                currency?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                symbols: string
                feed?: StockLatestFeed | undefined
                currency?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                symbols: string
                feed?: StockLatestFeed | undefined
                currency?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              query: {
                symbols: string
                feed?: StockLatestFeed | undefined
                currency?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v2/stocks/meta/conditions/:ticktype': {
      $get:
        | {
            input: { param: { ticktype: 'trade' | 'quote' } } & { query: { tape: 'A' | 'B' | 'C' } }
            output: StockConditions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticktype: 'trade' | 'quote' } } & { query: { tape: 'A' | 'B' | 'C' } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { ticktype: 'trade' | 'quote' } } & { query: { tape: 'A' | 'B' | 'C' } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ticktype: 'trade' | 'quote' } } & { query: { tape: 'A' | 'B' | 'C' } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { ticktype: 'trade' | 'quote' } } & { query: { tape: 'A' | 'B' | 'C' } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { ticktype: 'trade' | 'quote' } } & { query: { tape: 'A' | 'B' | 'C' } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v2/stocks/meta/exchanges': {
      $get:
        | { input: {}; output: StockExchanges; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v2/stocks/quotes': {
      $get:
        | {
            input: {
              query: {
                symbols: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                asof?: string | undefined
                feed?: StockHistoricalFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: StockQuotesResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbols: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                asof?: string | undefined
                feed?: StockHistoricalFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                symbols: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                asof?: string | undefined
                feed?: StockHistoricalFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                symbols: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                asof?: string | undefined
                feed?: StockHistoricalFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                symbols: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                asof?: string | undefined
                feed?: StockHistoricalFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              query: {
                symbols: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                asof?: string | undefined
                feed?: StockHistoricalFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v2/stocks/quotes/latest': {
      $get:
        | {
            input: {
              query: {
                symbols: string
                feed?: StockLatestFeed | undefined
                currency?: string | undefined
              }
            }
            output: StockLatestQuotesResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbols: string
                feed?: StockLatestFeed | undefined
                currency?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                symbols: string
                feed?: StockLatestFeed | undefined
                currency?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                symbols: string
                feed?: StockLatestFeed | undefined
                currency?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                symbols: string
                feed?: StockLatestFeed | undefined
                currency?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              query: {
                symbols: string
                feed?: StockLatestFeed | undefined
                currency?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v2/stocks/snapshots': {
      $get:
        | {
            input: {
              query: {
                symbols: string
                feed?: StockLatestFeed | undefined
                currency?: string | undefined
              }
            }
            output: StockSnapshotsResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbols: string
                feed?: StockLatestFeed | undefined
                currency?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                symbols: string
                feed?: StockLatestFeed | undefined
                currency?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                symbols: string
                feed?: StockLatestFeed | undefined
                currency?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                symbols: string
                feed?: StockLatestFeed | undefined
                currency?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              query: {
                symbols: string
                feed?: StockLatestFeed | undefined
                currency?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v2/stocks/trades': {
      $get:
        | {
            input: {
              query: {
                symbols: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                asof?: string | undefined
                feed?: StockHistoricalFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: StockTradesResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbols: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                asof?: string | undefined
                feed?: StockHistoricalFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                symbols: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                asof?: string | undefined
                feed?: StockHistoricalFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                symbols: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                asof?: string | undefined
                feed?: StockHistoricalFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                symbols: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                asof?: string | undefined
                feed?: StockHistoricalFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              query: {
                symbols: string
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                asof?: string | undefined
                feed?: StockHistoricalFeed | undefined
                currency?: string | undefined
                page_token?: string | undefined
                sort?: {} | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v2/stocks/trades/latest': {
      $get:
        | {
            input: {
              query: {
                symbols: string
                feed?: StockLatestFeed | undefined
                currency?: string | undefined
              }
            }
            output: StockLatestTradesResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbols: string
                feed?: StockLatestFeed | undefined
                currency?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                symbols: string
                feed?: StockLatestFeed | undefined
                currency?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                symbols: string
                feed?: StockLatestFeed | undefined
                currency?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                symbols: string
                feed?: StockLatestFeed | undefined
                currency?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              query: {
                symbols: string
                feed?: StockLatestFeed | undefined
                currency?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v3/stocks/:feed/bars': {
      $get:
        | {
            input: { param: { feed: StockV3HistoricalFeed } } & {
              query: {
                symbols: string
                timeframe: string
                start: string | string
                end?: string | string | undefined
                sort?: {} | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: StockV3BarsResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { feed: StockV3HistoricalFeed } } & {
              query: {
                symbols: string
                timeframe: string
                start: string | string
                end?: string | string | undefined
                sort?: {} | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { feed: StockV3HistoricalFeed } } & {
              query: {
                symbols: string
                timeframe: string
                start: string | string
                end?: string | string | undefined
                sort?: {} | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { feed: StockV3HistoricalFeed } } & {
              query: {
                symbols: string
                timeframe: string
                start: string | string
                end?: string | string | undefined
                sort?: {} | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { feed: StockV3HistoricalFeed } } & {
              query: {
                symbols: string
                timeframe: string
                start: string | string
                end?: string | string | undefined
                sort?: {} | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { feed: StockV3HistoricalFeed } } & {
              query: {
                symbols: string
                timeframe: string
                start: string | string
                end?: string | string | undefined
                sort?: {} | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { feed: StockV3HistoricalFeed } } & {
              query: {
                symbols: string
                timeframe: string
                start: string | string
                end?: string | string | undefined
                sort?: {} | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v3/stocks/:feed/latest/bars': {
      $get:
        | {
            input: { param: { feed: StockV3LatestFeed } } & { query: { symbols: string } }
            output: StockV3LatestBarsResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { feed: StockV3LatestFeed } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { feed: StockV3LatestFeed } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { feed: StockV3LatestFeed } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { feed: StockV3LatestFeed } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { feed: StockV3LatestFeed } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { feed: StockV3LatestFeed } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v3/stocks/:feed/latest/quotes': {
      $get:
        | {
            input: { param: { feed: StockV3LatestFeed } } & { query: { symbols: string } }
            output: StockV3LatestQuotesResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { feed: StockV3LatestFeed } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { feed: StockV3LatestFeed } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { feed: StockV3LatestFeed } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { feed: StockV3LatestFeed } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { feed: StockV3LatestFeed } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { feed: StockV3LatestFeed } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v3/stocks/:feed/latest/trades': {
      $get:
        | {
            input: { param: { feed: StockV3LatestFeed } } & { query: { symbols: string } }
            output: StockV3LatestTradesResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { feed: StockV3LatestFeed } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { feed: StockV3LatestFeed } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { feed: StockV3LatestFeed } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { feed: StockV3LatestFeed } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { feed: StockV3LatestFeed } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { feed: StockV3LatestFeed } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v3/stocks/:feed/quotes': {
      $get:
        | {
            input: { param: { feed: StockV3HistoricalFeed } } & {
              query: {
                symbols: string
                start: string | string
                end?: string | string | undefined
                sort?: {} | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: StockV3QuotesResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { feed: StockV3HistoricalFeed } } & {
              query: {
                symbols: string
                start: string | string
                end?: string | string | undefined
                sort?: {} | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { feed: StockV3HistoricalFeed } } & {
              query: {
                symbols: string
                start: string | string
                end?: string | string | undefined
                sort?: {} | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { feed: StockV3HistoricalFeed } } & {
              query: {
                symbols: string
                start: string | string
                end?: string | string | undefined
                sort?: {} | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { feed: StockV3HistoricalFeed } } & {
              query: {
                symbols: string
                start: string | string
                end?: string | string | undefined
                sort?: {} | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { feed: StockV3HistoricalFeed } } & {
              query: {
                symbols: string
                start: string | string
                end?: string | string | undefined
                sort?: {} | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { feed: StockV3HistoricalFeed } } & {
              query: {
                symbols: string
                start: string | string
                end?: string | string | undefined
                sort?: {} | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v3/stocks/:feed/snapshots': {
      $get:
        | {
            input: { param: { feed: StockV3LatestFeed } } & { query: { symbols: string } }
            output: StockV3SnapshotsResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { feed: StockV3LatestFeed } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { feed: StockV3LatestFeed } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { feed: StockV3LatestFeed } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { feed: StockV3LatestFeed } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { feed: StockV3LatestFeed } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { feed: StockV3LatestFeed } } & { query: { symbols: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v3/stocks/:feed/trades': {
      $get:
        | {
            input: { param: { feed: StockV3HistoricalFeed } } & {
              query: {
                symbols: string
                start: string | string
                end?: string | string | undefined
                sort?: {} | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: StockV3TradesResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { feed: StockV3HistoricalFeed } } & {
              query: {
                symbols: string
                start: string | string
                end?: string | string | undefined
                sort?: {} | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { feed: StockV3HistoricalFeed } } & {
              query: {
                symbols: string
                start: string | string
                end?: string | string | undefined
                sort?: {} | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { feed: StockV3HistoricalFeed } } & {
              query: {
                symbols: string
                start: string | string
                end?: string | string | undefined
                sort?: {} | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { feed: StockV3HistoricalFeed } } & {
              query: {
                symbols: string
                start: string | string
                end?: string | string | undefined
                sort?: {} | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { feed: StockV3HistoricalFeed } } & {
              query: {
                symbols: string
                start: string | string
                end?: string | string | undefined
                sort?: {} | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { feed: StockV3HistoricalFeed } } & {
              query: {
                symbols: string
                start: string | string
                end?: string | string | undefined
                sort?: {} | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
