import { createRoute, z } from '@hono/zod-openapi'

const USDAccountTradingLimitSchema = z
  .object({
    available: z
      .string()
      .exactOptional()
      .openapi({ description: 'The remaining net buying limit that can be used for trading.' }),
    daily_net_limit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The net buying limit that can be reached before further trading activity is restricted. Please reach out to learn more about how this limit is determined.',
      }),
    held: z
      .string()
      .exactOptional()
      .openapi({ description: 'The limit that is currently being held for open orders' }),
    used: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The real time net value of cash inflows (buy trades, etc.) with cash outflows (sell trades, etc). This will be dynamic throughout the day based on user activity, with executed orders being reset at the start of the next trading day.',
      }),
  })
  .openapi({ title: 'USDAccountTradingLimit', required: [] })
  .openapi('USDAccountTradingLimit')

type AccountTradingLimitType = {
  available?: string
  daily_net_limit?: string
  held?: string
  swap_rate?: string
  usd?: z.infer<typeof USDAccountTradingLimitSchema>
  used?: string
}

const ActivityTypeSchema = z
  .enum([
    'FILL',
    'ACATC',
    'ACATS',
    'CGD',
    'CIL',
    'CSD',
    'CSW',
    'DIV',
    'DIVCGL',
    'DIVCGS',
    'DIVNRA',
    'DIVROC',
    'DIVTXEX',
    'FEE',
    'INT',
    'JNLC',
    'JNLS',
    'MA',
    'OPASN',
    'OPCA',
    'OPCSH',
    'OPEXC',
    'OPEXP',
    'OPTRD',
    'PTC',
    'REO',
    'REORG',
    'SPIN',
    'SPLIT',
    'FOPT',
    'OCT',
  ])
  .openapi({
    description:
      "Represents the various kinds of activity.\n\nTradeActivity's will always have the type `FILL`\n\n- **FILL**\n  Order Fills (Partial/Full)\n- **ACATC**\n  ACATS IN/OUT (Cash)\n- **ACATS**\n  ACATS IN/OUT (Securities)\n- **CGD**\n  Capital Gains Distribution\n- **CIL**\n  Cash in Lieu of Stock\n- **CSD**\n  Cash Disbursement (+)\n- **CSW**\n  Cash Withdrawable\n- **DIV**\n  Dividend\n- **DIVCGL**\n  Dividend (Capital Gains Long Term)\n- **DIVCGS**\n  Dividend (Capital Gains Short Term)\n- **DIVNRA**\n  Dividend Adjusted (NRA Withheld)\n- **DIVROC**\n  Dividend Return of Capital\n- **DIVTXEX**\n  Dividend (Tax Exempt)\n- **FEE**\n  REG and TAF Fees\n- **INT**\n  Interest (Credit/Margin)\n- **JNLC**\n  Journal Entry (Cash)\n- **JNLS**\n  Journal Entry (Stock)\n- **OPASN**\n   Option Assignment\n- **OPCA**\n  Option Corporate Action\n- **OPCSH**\n   Option cash deliverable for non-standard contracts\n- **OPEXC**\n  Option Exercise\n- **OPEXP**\n  Option Expiration\n- **OPTRD**\n  Option Trade\n- **MA**\n  Merger/Acquisition\n- **PTC**\n  Pass Thru Change\n- **REO**\n  Reorganization\n- **REORG**\n  Worthless removal CA\n- **SPIN**\n  Stock Spinoff\n- **SPLIT**\n  Stock Split\n- **FOPT**\n  Free of Payment Transfers\n- **OCT**\n  On Chain Transactions (blockchain deposits/withdrawals)",
    title: 'ActivityType',
  })
  .openapi('ActivityType')

const OrderStatusSchema = z
  .enum([
    'new',
    'partially_filled',
    'filled',
    'done_for_day',
    'canceled',
    'expired',
    'replaced',
    'pending_cancel',
    'pending_replace',
    'accepted',
    'pending_new',
    'accepted_for_bidding',
    'stopped',
    'rejected',
    'suspended',
    'calculated',
  ])
  .openapi({ example: 'filled' })
  .openapi('OrderStatus')

const TradeActivitySideSchema = z
  .enum(['buy', 'sell', 'sell_short'])
  .openapi({
    description:
      'Side of the fill on a trade activity. Includes `sell_short` when the fill short-sells. Distinct from `OrderSide`, which is only `buy` / `sell` for order requests and responses.',
    example: 'buy',
    title: 'TradeActivitySide',
  })
  .openapi('TradeActivitySide')

const TradeActivitySchema = z
  .object({
    cum_qty: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Valid only for trading activity types. Null for non-trading activities.',
        example: '0.9723',
      }),
    leaves_qty: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Valid only for trading activity types. Null for non-trading activities.',
        example: '0.5123',
      }),
    order_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Valid only for trading activity types. Null for non-trading activities.',
        example: 'fe060a1b-5b45-4eba-ba46-c3a3345d8255',
      }),
    order_status: OrderStatusSchema.exactOptional(),
    price: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Valid only for trading activity types. Null for non-trading activities.',
        example: '3.1415',
      }),
    qty: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Valid only for trading activity types. Null for non-trading activities.',
        example: '0.38921',
      }),
    side: TradeActivitySideSchema.exactOptional(),
    symbol: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Valid only for trading activity types. Null for non-trading activities.',
        example: 'AAPL',
      }),
    transaction_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Valid only for trading activity types. Null for non-trading activities.',
        example: '2021-05-10T14:01:04.650275Z',
      }),
    type: z
      .enum(['fill', 'partial_fill'])
      .exactOptional()
      .openapi({
        description: 'Valid only for trading activity types. Null for non-trading activities.',
        example: 'fill',
      }),
  })
  .openapi({ title: 'TradeActivity', required: [] })
  .openapi('TradeActivity')

const ActivitySubTypeSchema = z
  .string()
  .openapi({
    description:
      'Represents a more specific classification to the `activity_type`.\nThis field is optional and may not always be populated, depending on the activity type and the available data.\nEach `activity_type` has a set of valid `activity_sub_type` values.\n\nFull mapping of `activity_type` to `activity_sub_type`:\n\n- **CGD**: Capital Gains Distribution activity sub-types:\n  - **LTCG**: Long-Term Capital Gain\n  - **STCG**: Short-Term Capital Gain\n\n- **DIV**: Dividend activity sub-types:\n  - **CDIV**: Cash Dividend\n  - **ROC**: Return of Capital\n  - **SDIV**: Stock Dividend\n  - **SPD**: Substitute Payment In Lieu Of Dividend\n\n- **FEE**: Fee-related activity sub-types:\n  - **REG**: Regulatory Fee\n  - **TAF**: Trading Activity Fee\n  - **LCT**: Local Currency Trading Fee\n  - **ORF**: Options Regulatory Fee\n  - **OCC**: Options Clearing Corporation Fee\n  - **NRC**: Non-Retail Commission Fee\n  - **NRV**: Non-Retail Venue Fee\n  - **COM**: Commission\n  - **CAT**: Consolidated Audit Trail Fee\n\n- **INT**: Interest-related activity sub-types:\n  - **MGN**: Margin Interest\n  - **CDT**: Credit Interest\n  - **SWP**: Sweep Interest\n  - **QII**: Qualified Interest\n  - **FI**: Fixed Income Interest (coupon or accrued)\n\n- **MA**: Merger and Acquisition activity sub-types:\n  - **CMA**: Cash Merger\n  - **SMA**: Stock Merger\n  - **SCMA**: Stock & Cash Merger\n\n- **NC**: Name Change activity sub types\n  - **SNC**: Symbol Name Change\n  - **CNC**: CUSIP Name Change\n  - **SCNC**: Symbol & CUSIP Name Change\n\n- **OPCA**: Option Corporate Action activity sub-types:\n  - **DIV.CDIV**: Cash Dividend\n  - **DIV.ROC**: Return of Capital\n  - **DIV.SDIV**: Stock Dividend\n  - **MA.CMA**: Cash Merger\n  - **MA.SMA**: Stock Merger\n  - **MA.SCMA**: Stock & Cash Merger\n  - **NC.CNC**: CUSIP Name Change\n  - **NC.SNC**: Symbol Name Change\n  - **NC.SCNC**: Symbol & CUSIP Name Change\n  - **SPIN**: Spin-off\n  - **SPLIT.FSPLIT**: Forward Stock Split\n  - **SPLIT.RSPLIT**: Reverse Stock Split\n  - **SPLIT.USPLIT**: Unit Split\n\n- **REO**: Reorganization activity sub-types:\n  - **REOS**: Stock only (1 or more stock legs)\n  - **REOC**: Cash only (one cash leg)\n  - **REOSC**: Stock and cash\n\n- **REORG**: Activity sub-types:\n  - **WRM**: Worthless Removal\n\n- **SPLIT**: Stock Split activity sub-types:\n  - **FSPLIT**: Forward Stock Split\n  - **RSPLIT**: Reverse Stock Split\n  - **USPLIT**: Unit Split\n\n- **VOF**: Voluntary Offering activity sub-types:\n  - **VTND**: Tender Offer\n  - **VWRT**: Warrant Exercise\n  - **VRGT**: Rights Offer\n  - **VEXH**: Exchange Offer\n\n- **WH**: Withholding activity sub-types:\n  - **SWH**: State Withholding\n  - **FWH**: Federal Withholding\n  - **SLWH**: Sales Withholding',
    title: 'ActivitySubType',
  })
  .openapi('ActivitySubType')

const NonTradeActivitySchema = z
  .object({
    activity_sub_type: ActivitySubTypeSchema.exactOptional(),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Valid only for non-trading activity types. Null for trading activities.',
        example: '2021-05-10T14:01:04.650275Z',
      }),
    currency: z
      .string()
      .exactOptional()
      .openapi({ description: 'Currency denomination of the activity. USD by default.' }),
    cusip: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Valid only for non-trading activity types. Null for trading activities.',
        example: '037833100',
      }),
    date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'Valid only for non-trading activity types. Null for trading activities.',
        example: '2021-05-21',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Valid only for non-trading activity types. Null for trading activities.',
        example: 'Example description',
      }),
    group_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'ID used to link activities who share a sibling relationship',
        example: '13d96cf3-1cbe-4632-b2f2-86a9df5a3b9d',
      }),
    net_amount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Valid only for non-trading activity types. Null for trading activities.',
        example: '1234',
      }),
    per_share_amount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Valid only for non-trading activity types. Null for trading activities.',
        example: '0.38921',
      }),
    qty: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Valid only for non-trading activity types. Null for trading activities.',
        example: '0.38921',
      }),
    status: z
      .enum(['executed', 'correct', 'canceled'])
      .exactOptional()
      .openapi({
        description: 'Valid only for non-trading activity types. Null for trading activities.',
        example: 'executed',
      }),
    symbol: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Valid only for non-trading activity types. Null for trading activities.',
        example: 'AAPL',
      }),
    transfer_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The transfer ID of the associated deposit or withdrawal. Populated for `OCT` (On Chain Transactions) activities.',
        example: 'bacddbc5-1a45-4a54-8f6d-c3f2f9d2e2a1',
      }),
  })
  .openapi({ title: 'NonTradeActivity', required: [] })
  .openapi('NonTradeActivity')

type ActivityType = {
  account_id?: string
  activity_type?: z.infer<typeof ActivityTypeSchema>
  id?: string
} & (z.infer<typeof TradeActivitySchema> | z.infer<typeof NonTradeActivitySchema>)

const CommonNTAActivityV2Schema = z
  .object({
    group_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Optional group ID which can help grouping together related activities',
      }),
    system_date: z.iso
      .date()
      .min(1)
      .openapi({ description: 'The date when the activity was booked' }),
  })
  .openapi({
    description: 'Shared fields for non-trade (NTA) activity records.',
    required: ['system_date'],
  })
  .openapi('CommonNTAActivityV2')

const CommonCaActivityV2Schema = CommonNTAActivityV2Schema.and(
  z
    .object({
      ca_id: z
        .uuid()
        .exactOptional()
        .openapi({ description: 'The unique identifier for this corporate action' }),
      position_date: z.iso
        .date()
        .min(1)
        .openapi({ description: 'The position_date for this corporate action' }),
      reorg_id: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The reorg identifier, if present in the source corporate action definition',
        }),
    })
    .openapi({ required: ['position_date'] }),
).openapi('CommonCaActivityV2')

const CommonCDIVActivityV2Schema = z
  .object({
    cusip: z
      .string()
      .openapi({ description: 'The CUSIP of the security involved with the activity' }),
    due_bill_off_date: z.iso
      .date()
      .min(1)
      .exactOptional()
      .openapi({ description: 'When due bills stop applying for this event' }),
    due_bill_on_date: z.iso
      .date()
      .min(1)
      .exactOptional()
      .openapi({ description: 'When due bills begin to apply for this event' }),
    ex_date: z.iso
      .date()
      .min(1)
      .exactOptional()
      .openapi({ description: 'The ex_date for this corporate action' }),
    foreign: z
      .enum(['true', 'false'])
      .openapi({
        description:
          'Indicates if related to a non-US security. Serialized as the JSON strings `"true"` or `"false"`, not a JSON boolean.',
        example: 'false',
      }),
    isin: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ISIN of the security involved with the activity' }),
    payable_date: z.iso
      .date()
      .min(1)
      .exactOptional()
      .openapi({ description: 'The payable_date for this corporate action' }),
    rate: z.string().openapi({ description: 'Dividend rate per share' }),
    record_date: z.iso
      .date()
      .min(1)
      .exactOptional()
      .openapi({ description: 'The record_date for this corporate action' }),
    special: z
      .enum(['true', 'false'])
      .openapi({
        description:
          'Indicates if this is a special dividend. Serialized as the JSON strings `"true"` or `"false"`, not a JSON boolean.',
        example: 'false',
      }),
    symbol: z
      .string()
      .openapi({ description: 'The symbol of the security involved with the activity' }),
  })
  .openapi({ required: ['symbol', 'cusip', 'rate', 'foreign', 'special'] })
  .openapi('CommonCDIVActivityV2')

type CDIVActivityV2Type = z.infer<typeof CommonCaActivityV2Schema> &
  z.infer<typeof CommonCDIVActivityV2Schema> & { cash_payout: string; entitled_qty: string }

const FixedIncomeInterestTypeSchema = z
  .enum(['coupon', 'accrued'])
  .openapi({
    description: 'Distinguishes coupon payments from accrued interest on INT/FI activities.',
    example: 'accrued',
    title: 'FixedIncomeInterestType',
  })
  .openapi('FixedIncomeInterestType')

const CommonFixedIncomeInterestActivityV2Schema = z
  .object({
    accrued_interest_rate: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Accrued interest rate (present for accrued-interest-on-call variants)',
      }),
    cash_payout: z.string().openapi({ description: 'The cash payout for this interest activity' }),
    cusip: z
      .string()
      .openapi({ description: 'The CUSIP of the security involved with the activity' }),
    entitled_qty: z
      .string()
      .openapi({ description: 'The entitled quantity (principal / face amount)', example: '1000' }),
    interest_type: FixedIncomeInterestTypeSchema,
    isin: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ISIN of the security involved with the activity' }),
    order_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The order that generated this accrued interest. Present for trade-accrued INT/FI.',
        example: '257bf308-a6b7-4777-8cf6-00dc441dc4d3',
      }),
    parent_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The ref_id of the parent trade this interest is attached to. Present for trade-accrued INT/FI when a parent trade `ref_id` is available.',
        example: '46aecae1-4629-4bcf-b441-0d8c847a1787',
      }),
    payment_date: z.iso.date().exactOptional().openapi({ description: 'The payment date' }),
    price: z
      .string()
      .exactOptional()
      .openapi({ description: 'Call price used for accrued-interest-on-call variants' }),
    rate: z
      .string()
      .exactOptional()
      .openapi({ description: 'Coupon rate amount (present for regular coupon payments)' }),
    record_date: z.iso.date().exactOptional().openapi({ description: 'The record date' }),
  })
  .openapi({
    description:
      'Fixed income interest fields (INT/FI). Variants from the same activity type:\n\n- Coupon: `interest_type` is `coupon`. Includes `rate` (no `price` / `accrued_interest_rate`). No `order_id`.\n- Accrued interest on call: `interest_type` is `accrued`. Includes `price` and `accrued_interest_rate` (no `rate`). No `order_id`.\n- Trade accrued: `interest_type` is `accrued`. Includes `order_id` so the interest NTA can be linked to the fill. `parent_id` is set when a parent trade `ref_id` is available.',
    required: ['entitled_qty', 'cash_payout', 'cusip', 'interest_type'],
  })
  .openapi('CommonFixedIncomeInterestActivityV2')

type FixedIncomeInterestActivityV2Type = z.infer<typeof CommonCaActivityV2Schema> &
  z.infer<typeof CommonFixedIncomeInterestActivityV2Schema>

const CommonMAActivityV2Schema = z
  .object({
    acquiree_cusip: z.string().openapi({ description: 'CUSIP of the acquiree' }),
    acquiree_isin: z.string().exactOptional().openapi({ description: 'ISIN of the acquiree' }),
    acquiree_rate: z.string().exactOptional().openapi({ description: 'Rate of the acquiree' }),
    acquiree_symbol: z.string().openapi({ description: 'Symbol of the acquiree' }),
    acquirer_cusip: z.string().exactOptional().openapi({ description: 'CUSIP of the acquirer' }),
    acquirer_isin: z.string().exactOptional().openapi({ description: 'ISIN of the acquirer' }),
    acquirer_rate: z.string().exactOptional().openapi({ description: 'Rate of the acquirer' }),
    acquirer_symbol: z.string().exactOptional().openapi({ description: 'Symbol of the acquirer' }),
    effective_date: z.iso
      .date()
      .min(1)
      .openapi({ description: 'When the merger/acquisition becomes effective' }),
    payable_date: z.iso.date().min(1).openapi({ description: 'The payable date' }),
  })
  .openapi({ required: ['acquiree_cusip', 'acquiree_symbol', 'effective_date', 'payable_date'] })
  .openapi('CommonMAActivityV2')

type MAActivityV2Type = z.infer<typeof CommonCaActivityV2Schema> &
  z.infer<typeof CommonMAActivityV2Schema> & {
    acquiree_qty: string
    acquirer_qty?: string
    cash_payout?: string
    cash_rate?: string
  }

const CommonNCActivityV2Schema = z
  .object({
    new_cusip: z.string().openapi({ description: 'New CUSIP for the name change' }),
    new_symbol: z.string().openapi({ description: 'New symbol for the name change' }),
    old_cusip: z.string().openapi({ description: 'Old CUSIP for the name change' }),
    old_symbol: z.string().openapi({ description: 'Old symbol for the name change' }),
  })
  .openapi({ required: ['old_cusip', 'old_symbol', 'new_cusip', 'new_symbol'] })
  .openapi('CommonNCActivityV2')

type NCActivityV2Type = z.infer<typeof CommonCaActivityV2Schema> &
  z.infer<typeof CommonNCActivityV2Schema> & { position_qty: string }

const AssetClassSchema = z
  .enum(['us_equity', 'us_option', 'us_index', 'crypto', 'crypto_perp', 'ipo'])
  .openapi({
    description:
      'This represents the category to which the asset belongs to. It serves to identify the nature of the financial instrument, with options including "us_equity" for U.S. equities, "us_option" for U.S. options, "crypto" for cryptocurrencies, and "ipo" for IPO indications of interest. This `asset_class: ipo` value is distinct from the assets API `attributes: ["ipo"]` flag.',
  })
  .openapi('AssetClass')

const USDPositionSchema = z
  .object({
    avg_entry_price: z
      .string()
      .exactOptional()
      .openapi({ description: 'Average entry price of the position in USD', example: '71.43' }),
    change_today: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Percent change from last day price (by a factor of 1)',
        example: '0.67',
      }),
    cost_basis: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total cost basis in USD', example: '333.33' }),
    current_price: z
      .string()
      .exactOptional()
      .openapi({ description: 'Current asset price per share in USD', example: '80.0' }),
    lastday_price: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Last day's asset price per share based on the closing value of the last trading day in USD",
        example: '79.33',
      }),
    market_value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total market value of the position in USD', example: '400.00' }),
    unrealized_intraday_pl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unrealized profit/loss in USD for the day', example: '6.67' }),
    unrealized_intraday_plpc: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unrealized interday profit/loss percent (by a factor of 1)',
        example: '0.0084',
      }),
    unrealized_pl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unrealized profit/loss in USD', example: '66.67' }),
    unrealized_plpc: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unrealized profit/loss percent (by a factor of 1)',
        example: '0.2',
      }),
  })
  .openapi({
    description: 'Position values in USD. This is returned for LCT (non-USD) accounts only.',
    title: 'USDPosition',
    required: [],
  })
  .openapi('USDPosition')

type PositionType = {
  asset_class: z.infer<typeof AssetClassSchema>
  asset_id: string
  asset_marginable?: boolean
  avg_entry_price: string
  avg_entry_swap_rate?: string
  change_today: string
  cost_basis: string
  current_price: string
  exchange: string
  lastday_price: string
  market_value: string
  qty: string
  qty_available: string
  side: 'long' | 'short'
  swap_rate?: string
  symbol: string
  unrealized_intraday_pl: string
  unrealized_intraday_plpc: string
  unrealized_pl: string
  unrealized_plpc: string
  usd?: z.infer<typeof USDPositionSchema>
}

const CommonREOActivityV2Schema = z
  .object({
    cash_payout: z.string().exactOptional().openapi({ description: 'Cash payout amount' }),
    cash_rate: z.string().exactOptional().openapi({ description: 'Cash rate per share' }),
    cusip: z.string().exactOptional().openapi({ description: 'CUSIP received on this stock leg' }),
    effective_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Effective date of the reorganization' }),
    isin: z.string().exactOptional().openapi({ description: 'ISIN received on this stock leg' }),
    new_rate: z.string().exactOptional().openapi({ description: 'New ratio for this stock leg' }),
    payable_date: z.iso.date().openapi({ description: 'Payable date of the reorganization' }),
    qty: z.string().exactOptional().openapi({ description: 'Quantity received on this stock leg' }),
    removed_qty: z
      .string()
      .exactOptional()
      .openapi({ description: 'Positive quantity removed from the source position' }),
    source_cusip: z.string().openapi({ description: 'CUSIP of the source security' }),
    source_isin: z.string().exactOptional().openapi({ description: 'ISIN of the source security' }),
    source_qty: z.string().exactOptional().openapi({ description: 'Source position quantity' }),
    source_rate: z
      .string()
      .exactOptional()
      .openapi({ description: 'Source ratio for this stock leg' }),
    source_symbol: z
      .string()
      .openapi({ description: 'Symbol of the source security', example: 'CEPT' }),
    symbol: z
      .string()
      .exactOptional()
      .openapi({ description: 'Symbol received on this stock leg', example: 'SECZ' }),
  })
  .openapi({
    description:
      'Reorganization (REO) activity sub-types:\n- **REOS**: Stock only (1 or more stock legs)\n- **REOC**: Cash only (one cash leg)\n- **REOSC**: Stock and cash',
    required: ['source_symbol', 'source_cusip', 'payable_date'],
  })
  .openapi('CommonREOActivityV2')

type REOActivityV2Type = z.infer<typeof CommonCaActivityV2Schema> &
  z.infer<typeof CommonREOActivityV2Schema>

const CommonSDIVActivityV2Schema = z
  .object({
    cusip: z
      .string()
      .openapi({ description: 'The CUSIP of the security involved with the activity' }),
    ex_date: z.iso
      .date()
      .min(1)
      .exactOptional()
      .openapi({ description: 'The ex_date for this corporate action' }),
    isin: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ISIN of the security involved with the activity' }),
    payable_date: z.iso
      .date()
      .min(1)
      .exactOptional()
      .openapi({ description: 'The payable_date for this corporate action' }),
    rate: z.string().openapi({ description: 'Dividend rate per share' }),
    record_date: z.iso
      .date()
      .min(1)
      .exactOptional()
      .openapi({ description: 'The record_date for this corporate action' }),
    symbol: z
      .string()
      .openapi({ description: 'The symbol of the security involved with the activity' }),
  })
  .openapi({ required: ['symbol', 'cusip', 'rate'] })
  .openapi('CommonSDIVActivityV2')

type SDIVActivityV2Type = z.infer<typeof CommonCaActivityV2Schema> &
  z.infer<typeof CommonSDIVActivityV2Schema> & {
    entitled_qty: string
    new_qty: string
    paid_qty: string
  }

const CommonSpinoffActivityV2Schema = z
  .object({
    due_bill_redemption_date: z.iso
      .date()
      .min(1)
      .exactOptional()
      .openapi({ description: 'When due bills related to the spinoff are redeemed' }),
    ex_date: z.iso
      .date()
      .min(1)
      .exactOptional()
      .openapi({ description: 'The ex_date for this corporate action' }),
    new_cusip: z.string().openapi({ description: 'CUSIP of the new security' }),
    new_isin: z.string().exactOptional().openapi({ description: 'ISIN of the new security' }),
    new_price: z.string().openapi({ description: 'Market price of new shares after the spinoff' }),
    new_rate: z.string().openapi({ description: 'Ratio of new shares received' }),
    new_symbol: z.string().openapi({ description: 'Symbol of the new security' }),
    payable_date: z.iso
      .date()
      .min(1)
      .exactOptional()
      .openapi({ description: 'The payable_date for this corporate action' }),
    record_date: z.iso
      .date()
      .min(1)
      .exactOptional()
      .openapi({ description: 'The record_date for this corporate action' }),
    source_cusip: z.string().openapi({ description: 'CUSIP of the parent security' }),
    source_isin: z.string().exactOptional().openapi({ description: 'ISIN of the parent security' }),
    source_price: z
      .string()
      .openapi({ description: 'Market price of parent shares before the spinoff' }),
    source_rate: z.string().openapi({ description: 'Ratio of parent shares' }),
    source_symbol: z.string().openapi({ description: 'Symbol of the parent security' }),
  })
  .openapi({
    required: [
      'source_cusip',
      'source_symbol',
      'source_rate',
      'source_price',
      'new_cusip',
      'new_symbol',
      'new_rate',
      'new_price',
    ],
  })
  .openapi('CommonSpinoffActivityV2')

type SpinoffActivityV2Type = z.infer<typeof CommonCaActivityV2Schema> &
  z.infer<typeof CommonSpinoffActivityV2Schema> & { new_qty: string; source_qty: string }

const ACHRelationshipSchema = z
  .object({
    account_id: z.uuid(),
    account_owner_name: z.string().min(1).openapi({ description: 'Name of the account owner' }),
    bank_account_number: z.string().min(1).exactOptional(),
    bank_account_type: z
      .enum(['CHECKING', 'SAVINGS'])
      .exactOptional()
      .openapi({ description: 'Must be CHECKING or SAVINGS' }),
    bank_routing_number: z.string().min(1).exactOptional(),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Format: 2020-01-01T01:01:01Z',
        example: '2021-03-16T18:38:01.942282Z',
      }),
    id: z.uuid().openapi({ example: '61e69015-8549-4bfd-b9c3-01e75843f47d' }),
    nickname: z.string().min(1).exactOptional(),
    status: z.enum(['QUEUED', 'APPROVED', 'REJECTED', 'PENDING', 'CANCEL_REQUESTED']),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Format: 2020-01-01T01:01:01Z',
        example: '2021-03-16T18:38:01.942282Z',
      }),
  })
  .openapi({
    required: ['id', 'created_at', 'updated_at', 'account_id', 'status', 'account_owner_name'],
    title: 'ACHRelationship',
  })
  .openapi('ACHRelationship')

const APRTierDetailsSchema = z
  .object({
    as_of: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The date on which the total balance was recorded, at the end of the day. YYYY-MM-DD format.\n',
        example: '2024-09-27',
      }),
    total_accounts: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The total number of accounts assigned this APR tier.',
        example: 42,
      }),
    total_balance: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The total balance of funds in this APR tier.',
        example: '10485.76',
      }),
  })
  .openapi({ description: 'Additional details of the APR tier\n', required: [] })
  .openapi('APRTierDetails')

const APRTierSchema = z
  .object({
    account_rate_bps: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The annualized account interest rate, in basis points.',
        example: 450,
      }),
    correspondent_rate_bps: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The annualized correspondent fee rate, in basis points.',
        example: 25,
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The timestamp the APR tier was created, in RFC 3339 format.',
        example: '2024-09-16T20:06:32.207729Z',
      }),
    currency: z
      .string()
      .exactOptional()
      .openapi({ description: 'The currency of the APR tier', example: 'USD' }),
    details: APRTierDetailsSchema.exactOptional(),
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the APR tier',
        example: '150df7eb-31e7-46b3-8848-a54ca21ff3bc',
      }),
    is_default: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this is the default APR tier for its currency. Each currency has at most one default tier. When true, an account that signs the required Alpaca Customer Agreement revision without providing cash_interest may be automatically enrolled in this tier. Do not rely on a default tier for enrollment; always set apr_tier_name explicitly via Create Account or Update Account.\n',
        example: false,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique name of the APR tier', example: 'gold' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The timestamp of the last update to the APR tier, in RFC 3339 format.',
        example: '2024-09-16T20:06:32.207729Z',
      }),
  })
  .openapi({ required: [] })
  .openapi('APRTier')

const CommonAcatActivityV2Schema = z
  .object({
    external_id: z.string().openapi({ description: 'The ID that DTCC assigned to this transfer' }),
    hold_date: z.iso
      .date()
      .min(1)
      .exactOptional()
      .openapi({ description: 'Hold date when the transfers settle' }),
    request_id: z.uuid().openapi({ description: 'The ID for original ACATS request' }),
  })
  .openapi({ required: ['external_id', 'request_id'] })
  .openapi('CommonAcatActivityV2')

const AcatcActivityV2Schema = CommonNTAActivityV2Schema.and(CommonAcatActivityV2Schema)
  .openapi({ description: 'Automated customer account transfer service (cash)' })
  .openapi('AcatcActivityV2')

const AcatsAccountTypeSchema = z
  .enum([
    'AGENCY',
    'BANK_CUSTODY',
    'BENEFICIARY',
    'BENEFICIARY_ROTH_IRA',
    'CORPORATE',
    'CO_TRUSTEE',
    'COVERDELL_IRA',
    'CUSTODIAN_UGMA',
    'DIRECT_ROLLOVER',
    'ESTATE',
    'HSA',
    'IRA',
    'JOINT',
    'MEDICAL_SAVINGS_ACCOUNT',
    'OTHER',
    'QUALIFIED_OR_PROFIT_SHARING_OR_PENSION',
    'ROTH_401K',
    'ROTH_IRA',
    'ROTH_SEP',
    'ROTH_SIMPLE',
    'ROTH_SOLO_401K',
    'SARSEP',
    'SEP_IRA',
    'SIMPLE_IRA',
    'SINGLE',
    'SOLO_401K',
    'TRUST',
    'TYPE_401K',
    'TYPE_403B',
    'TYPE_457_PLAN',
    'TYPE_529_PLAN',
  ])
  .openapi({ description: 'Account type, as represented by DTCC' })
  .openapi('AcatsAccountType')

const AcatsActivityV2Schema = CommonNTAActivityV2Schema.and(CommonAcatActivityV2Schema)
  .and(
    z
      .object({
        symbol: z
          .string()
          .openapi({ description: 'The symbol of the security involved with the activity' }),
      })
      .openapi({ required: ['symbol'] }),
  )
  .openapi({ description: 'Automated customer account transfer service (stock)' })
  .openapi('AcatsActivityV2')

const AcatsPositionSchema = z
  .enum(['LONG', 'SHORT', 'CREDIT', 'DEBIT'])
  .openapi({
    description:
      'Position type. `LONG` and `SHORT` apply to security positions; `CREDIT` and `DEBIT` apply to cash positions.',
  })
  .openapi('AcatsPosition')

const AcatsAssetSchema = z
  .object({
    amount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Positive number indicating the market value of the assets being transferred',
      }),
    asset_class: z
      .enum(['EQUITY', 'CASH', 'OPTION', 'OTHER'])
      .openapi({ description: 'Asset type' }),
    asset_description: z
      .string()
      .openapi({ description: "Description, usually from DTCC's Security Master File" }),
    currency_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'ISO currency code in which amount is denominated' }),
    cusip: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'CUSIP security identifier for the asset. Only returned when a CUSIP was provided for this asset at the time the transfer was initiated, in which case it is returned alongside `symbol`.',
      }),
    isin: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          '**Deprecation notice:**\nUse `symbol` or `cusip` instead. Returned with all assets only for backward compatibility while consumers migrate.\n\nSince: 2026-08-04\nSunset: 2027-02-04\n\n---\n\nISIN for the asset.',
        'x-deprecation': {
          reason:
            'Use `symbol` or `cusip` instead. Returned with all assets only for backward compatibility while consumers migrate.',
          since: '2026-08-04',
          sunset: '2027-02-04',
        },
      }),
    position: AcatsPositionSchema,
    qty: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Positive number indicating how many shares or units are being transferred',
      }),
    rejection_message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Human readable reason for why an asset is considered ineligible for transfer',
      }),
    status: z
      .enum(['NOT_VALIDATED', 'REQUESTED', 'DELETED', 'SETTLED', 'REVERSED', 'INTERFACE_REJECTED'])
      .openapi({ description: 'Status' }),
    symbol: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Symbol identifier for the asset. Always returned when a symbol is known for the asset, including when the transfer was initiated with a CUSIP.',
      }),
  })
  .openapi({
    description: 'An asset included in an ACATS transfer.',
    example: {
      amount: '24223.62',
      asset_class: 'EQUITY',
      asset_description: 'APPLE INC',
      currency_code: 'USD',
      cusip: '037833100',
      position: 'LONG',
      qty: '123',
      status: 'SETTLED',
      symbol: 'AAPL',
    },
    required: ['asset_class', 'asset_description', 'status', 'position'],
  })
  .openapi('AcatsAsset')

const AcatsCashBalanceSchema = z
  .object({
    amount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Amount of cash to be transferred. Can be positive or negative. Use `transfer_all` to transfer the entire balance instead of specifying an amount -- `amount` and `transfer_all: true` are mutually exclusive, and sending both is rejected with HTTP 400.',
      }),
    currency: z
      .literal('USD')
      .openapi({
        description:
          'Currency of the cash balance. Only `USD` is currently supported; any other value is rejected with HTTP 400. Each currency may appear at most once in the `cash` array.',
      }),
    transfer_all: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Set to true to transfer the entire balance of this currency. Must not be combined with `amount`. Setting it to `false` without an `amount` is rejected with HTTP 400.',
      }),
  })
  .openapi({
    description: 'Cash balance',
    example: { amount: '10000', currency: 'USD' },
    required: ['currency'],
  })
  .openapi('AcatsCashBalance')

const AcatsContraAccountDetailsSchema = z
  .object({
    account_number: z.string().openapi({ description: 'Account number at the contra broker' }),
    broker_name: z
      .string()
      .min(1)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'Name of the contra broker (non-functional, used for auditability and display purposes)',
      }),
    broker_number: z.string().openapi({ description: 'Clearing number of the contra broker' }),
    customer_name: z.string().openapi({ description: 'Name on the account at the contra broker' }),
    customer_tax_id: z
      .string()
      .openapi({ description: 'Tax ID on the account at the contra broker' }),
  })
  .openapi({
    description: 'Contra account details',
    example: {
      account_number: '12345678A',
      broker_number: '1234',
      customer_name: 'John Smith',
      customer_tax_id: '911923333',
    },
    required: ['account_number', 'customer_name', 'customer_tax_id', 'broker_number'],
  })
  .openapi('AcatsContraAccountDetails')

const AcatsContraBrokerTypeSchema = z
  .enum(['BANK', 'BROKER'])
  .openapi({ description: 'ACATS participant type' })
  .openapi('AcatsContraBrokerType')

const AcatsContraBrokerSchema = z
  .object({
    name: z.string().openapi({ description: 'Participant name' }),
    number: z.string().openapi({ description: 'DTCC account number' }),
    type: AcatsContraBrokerTypeSchema,
  })
  .openapi({
    description:
      'A contra broker or bank participating in ACATS, identified by its DTCC account number.',
    required: ['number', 'type', 'name'],
  })
  .openapi('AcatsContraBroker')

const AcatsDtccStatusSchema = z
  .enum([
    'REQUEST',
    'REQUEST_ADJUST',
    'REQUEST_ADJUST_PAST',
    'REQUEST_PAST',
    'REQUEST_REJECT',
    'REVIEW',
    'REVIEW_ADJUST_DELIVERER',
    'REVIEW_ERROR',
    'REVIEW_ACCELERATE',
    'REVIEW_ADJUST_RECEIVER_ACCELERATE',
    'SETTLE_PREP',
    'SETTLE_CLOSE',
    'CLOSE_PURGE',
    'REQUEST_PTR',
    'MEMO_PURGE_PARTIAL_TRANSFER_REQUEST_RECEIVER',
    'REJECT',
    'SYSTEM_REJECTED',
  ])
  .openapi({ description: 'Transfer status as tracked by DTCC' })
  .openapi('AcatsDtccStatus')

const AcatsDtccTransferTypeSchema = z
  .enum(['FUL', 'FRV', 'MFC', 'PTD', 'PTR', 'RCL', 'RCR', 'PTF'])
  .openapi({ description: 'ACATS transfer type' })
  .openapi('AcatsDtccTransferType')

const AcatsEquitySchema = z
  .xor([
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'cusip')) {
            ctx.addIssue({ code: 'custom' })
          }
          if (!Object.hasOwn(val, 'position')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['cusip', 'position'] }),
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'symbol')) {
            ctx.addIssue({ code: 'custom' })
          }
          if (!Object.hasOwn(val, 'position')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['symbol', 'position'] }),
  ])
  .openapi({
    description:
      'Equity asset requested in a partial transfer. Identify the security with either `cusip` or `symbol` -- provide one, not both. Prefer `cusip` when you have it: it is a stable, unambiguous identifier. Use `symbol` only when a CUSIP is not available, as ticker symbols can change or be reused over time.',
    example: { position: 'LONG', qty: '2', symbol: 'AAPL' },
  })
  .openapi('AcatsEquity')

const AcatsErrorSchema = z
  .object({ message: z.string() })
  .openapi({
    description: 'Body for responses with HTTP status codes indicating an error',
    example: { message: 'contra broker number is required' },
    required: ['message'],
  })
  .openapi('AcatsError')

const FullTransferSchema = z
  .object({ type: z.literal('FULL') })
  .openapi({ required: ['type'] })
  .and(
    z.object({}).refine(
      (val) =>
        !z
          .object({ cash: z.array(z.any()).min(1) })
          .openapi({ required: ['cash'] })
          .safeParse(val).success,
    ),
  )
  .and(
    z.object({}).refine(
      (val) =>
        !z
          .object({
            securities: z
              .object({ equities: z.array(z.any()).min(1) })
              .openapi({ required: ['equities'] }),
          })
          .openapi({ required: ['securities'] })
          .safeParse(val).success,
    ),
  )
  .openapi({
    description:
      'Transfers the entire account. `cash` and `securities.equities`, if sent, must be empty.',
    title: 'Full transfer',
  })
  .openapi('FullTransfer')

const AcatsSecuritiesSchema = z
  .object({ equities: z.array(AcatsEquitySchema).exactOptional() })
  .openapi({ description: 'List of securities to transfer', required: [] })
  .openapi('AcatsSecurities')

const PartialTransferSchema = z
  .object({
    cash: z
      .array(AcatsCashBalanceSchema)
      .exactOptional()
      .openapi({ description: 'Cash amounts to transfer.' }),
    securities: AcatsSecuritiesSchema.exactOptional(),
    type: z.literal('PARTIAL'),
  })
  .superRefine((o, ctx) => {
    const If = z.object({}).refine(
      (val) =>
        !z
          .object({ cash: z.array(z.any()).min(1) })
          .openapi({ required: ['cash'] })
          .safeParse(val).success,
    )
    const ifOk = If.safeParse(o).success
    const Branch = ifOk
      ? z
          .object({
            securities: z
              .object({ equities: z.array(z.any()).min(1) })
              .openapi({ required: ['equities'] }),
          })
          .openapi({ required: ['securities'] })
      : undefined
    if (!Branch) {
      return
    }
    const result = Branch.safeParse(o)
    if (!result.success) {
      for (const issue of result.error.issues) {
        ctx.addIssue({ ...issue, path: issue.path })
      }
    }
  })
  .openapi({
    description:
      'Transfers selected assets. Must carry a non-empty `cash` array, a non-empty `securities.equities` array, or both.',
    required: ['type'],
    title: 'Partial transfer',
  })
  .openapi('PartialTransfer')

const AcatsInitiateTransferDetailsSchema = z
  .xor([FullTransferSchema, PartialTransferSchema])
  .openapi({
    description:
      'Transfer details. The two transfer types are mutually exclusive in what they accept:\n- `FULL`: do not include a non-empty `cash` or `securities.equities` array (the entire account will be transferred). Including either non-empty is rejected with HTTP 400.\n- `PARTIAL`: specify which assets to transfer using the `cash` and/or `securities` objects. At least one of the two must be present and non-empty, otherwise the request is rejected with HTTP 400.\n',
    discriminator: {
      mapping: {
        FULL: '#/components/schemas/FullTransfer',
        PARTIAL: '#/components/schemas/PartialTransfer',
      },
      propertyName: 'type',
    },
    example: {
      cash: [{ amount: '10000', currency: 'USD' }],
      securities: {
        equities: [
          { cusip: '037833100', position: 'LONG', qty: '2' },
          { cusip: '78462F103', position: 'SHORT' },
        ],
      },
      type: 'PARTIAL',
    },
    required: ['type'],
  })
  .openapi('AcatsInitiateTransferDetails')

const AcatsInitiateTransferRequestSchema = z
  .object({
    contra_account_details: AcatsContraAccountDetailsSchema,
    ip_address: z
      .string()
      .openapi({
        description:
          'IP address from which the account holder initiated the transfer (IPv4 or IPv6)',
        example: '203.0.113.42',
      }),
    signed_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'Timestamp at which the account holder signed/authorized the transfer. Must be within the last week and must not be in the future (a 5 minute grace period absorbs clock skew); values outside that window are rejected with HTTP 400.',
        example: '2026-04-29T13:00:00Z',
      }),
    transfer_details: AcatsInitiateTransferDetailsSchema,
    validate_account_number: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          "Whether to validate the contra account number against the contra broker's configured format rules. Defaults to false (no per-broker format check). Set to true to opt in, in which case a number that matches none of the broker's enabled rules is rejected with HTTP 422.",
      }),
  })
  .openapi({
    description: 'Request body for initiating an incoming ACATS transfer.',
    example: {
      contra_account_details: {
        account_number: 'A00000123',
        broker_number: '0158',
        customer_name: 'Jane Doe',
        customer_tax_id: '123456789',
      },
      ip_address: '203.0.113.42',
      signed_at: '2026-04-29T13:00:00Z',
      transfer_details: {
        cash: [{ amount: '10000', currency: 'USD' }],
        securities: {
          equities: [
            { position: 'LONG', qty: '2', symbol: 'AAPL' },
            { cusip: '123456789', position: 'LONG', qty: '5' },
            { position: 'SHORT', symbol: 'TSLA' },
          ],
        },
        type: 'PARTIAL',
      },
    },
    required: ['contra_account_details', 'transfer_details', 'ip_address', 'signed_at'],
  })
  .openapi('AcatsInitiateTransferRequest')

const AcatsInitiateTransferResponseSchema = z
  .object({
    acats_id: z
      .string()
      .openapi({
        description: 'The ID of the ACATS transfer that was just initiated',
        example: '2c827687-ddd3-4ad9-bee8-0a3cdad35301',
      }),
  })
  .openapi({
    description: 'Response returned when an ACATS transfer has been accepted for processing.',
    required: ['acats_id'],
  })
  .openapi('AcatsInitiateTransferResponse')

const AcatsInitiateTransferTypeSchema = z
  .enum(['FULL', 'PARTIAL'])
  .openapi({ description: 'Transfer type' })
  .openapi('AcatsInitiateTransferType')

const AcatsListAssetsResponseSchema = z
  .array(AcatsAssetSchema)
  .openapi({
    description: 'The list of assets associated with an ACATS transfer.',
    example: [
      {
        asset_class: 'EQUITY',
        asset_description: 'APPLE INC',
        cusip: '037833100',
        position: 'LONG',
        qty: '10',
        status: 'SETTLED',
        symbol: 'AAPL',
      },
      {
        amount: '1250.75',
        asset_class: 'CASH',
        asset_description: 'US DOLLAR',
        currency_code: 'USD',
        position: 'CREDIT',
        status: 'SETTLED',
      },
    ],
  })
  .openapi('AcatsListAssetsResponse')

const AcatsListContraBrokersResponseSchema = z
  .object({ brokers: z.array(AcatsContraBrokerSchema).exactOptional() })
  .openapi({
    description: 'Response containing the list of valid ACATS contra brokers.',
    example: {
      brokers: [
        { name: 'Example Brokerage Inc.', number: '0001', type: 'BROKER' },
        { name: 'Example Bank, N.A.', number: '0002', type: 'BANK' },
      ],
    },
    required: [],
  })
  .openapi('AcatsListContraBrokersResponse')

const AcatsPageTokenSchema = z
  .string()
  .openapi({
    description:
      'Page token, pass it back unchanged in the `page_token` query parameter to fetch the next or previous page.',
    example: 'eyJjcmVhdGVkX2F0IjoiMjAyNi0wNC0yOFQxNDozMDowMFoiLCJpZCI6IjAxQUJDIn0=',
  })
  .openapi('AcatsPageToken')

const AcatsTimestampSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description: 'Timestamp in RFC-3339 format with microsecond precision',
    example: '2026-01-01T00:00:00Z',
  })
  .openapi('AcatsTimestamp')

const AcatsTransferDirectionSchema = z
  .enum(['INCOMING', 'OUTGOING'])
  .openapi({ description: 'Transfer direction' })
  .openapi('AcatsTransferDirection')

const AcatsRejectionDetailsSchema = z
  .object({
    rejection_message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human readable message regarding the reason for the rejection' }),
    rejection_reason: z
      .enum([
        'SS_TAX_ID_MISMATCH',
        'ACCOUNT_TITLE_MISMATCH',
        'DOCUMENTATION_NEEDED',
        'ACCOUNT_FLAT',
        'INVALID_ACCOUNT_NUMBER',
        'DUPLICATE',
        'ACCOUNT_IN_DISTRIBUTION_OR_TRANSFER',
        'CLIENT_RESCINDED',
        'MISSING_AUTHORIZATION_SIGNATURE',
        'ACCOUNT_VIOLATES_CREDIT_POLICY_OF_RECEIVING_FIRM',
        'UNRECOGNIZED_FOR_RESIDUAL_CREDIT_BALANCE',
        'PARTIAL_TRANSFER_DELIVERER_INITIATED_REJECT',
        'FAIL_REVERSAL_REJECT',
        'RECLAIM_REJECT',
        'MUTUAL_FUND_CLEANUP',
        'SYSTEM_REJECTED',
        'INVALID_PARTICIPANT',
        'ASSOCIATED_RECORD_NOT_PRESENT_OR_INVALID',
        'MISSED_CUTOFF',
      ])
      .exactOptional()
      .openapi({ description: 'Rejection reason, as returned by DTCC' }),
  })
  .openapi({
    description: 'Why the transfer was rejected, only present on transfers in rejected status',
    required: [],
  })
  .openapi('AcatsRejectionDetails')

const AcatsTransferStatusSchema = z
  .enum(['PENDING', 'IN_PROGRESS', 'REJECTED', 'SETTLED'])
  .openapi({ description: 'Transfer status as tracked by Alpaca' })
  .openapi('AcatsTransferStatus')

const AcatsStatusDetailsSchema = z
  .object({
    dtcc_status: AcatsDtccStatusSchema.exactOptional(),
    transfer_status: AcatsTransferStatusSchema.exactOptional(),
  })
  .openapi({ description: 'Status details', required: [] })
  .openapi('AcatsStatusDetails')

const AcatsTransferSchema = z
  .object({
    acats_id: z.uuid().openapi({ description: 'The ID of the ACATS transfer' }),
    account_id: z.uuid().openapi({ description: 'Account ID associated with the ACATS transfer' }),
    account_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name on the Alpaca account associated with the transfer' }),
    account_number: z.string().openapi({ description: 'Account number at Alpaca' }),
    account_type: AcatsAccountTypeSchema.exactOptional(),
    contra_account_number: z
      .string()
      .openapi({ description: 'Account number at the contra broker' }),
    contra_broker_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the contra broker' }),
    contra_broker_number: z
      .string()
      .openapi({ description: 'DTCC account number for the contra broker' }),
    contra_broker_type: AcatsContraBrokerTypeSchema.exactOptional(),
    created_at: AcatsTimestampSchema,
    direction: AcatsTransferDirectionSchema,
    ip_address: z
      .string()
      .exactOptional()
      .openapi({ description: "User's IP address (IPv4 or IPv6) at time of submission" }),
    original_transfer_identifier: z
      .string()
      .exactOptional()
      .openapi({ description: 'DTCC transfer identifier for a previous, related transfer' }),
    rejection_details: AcatsRejectionDetailsSchema.exactOptional(),
    settlement_date: AcatsTimestampSchema.exactOptional(),
    status: AcatsStatusDetailsSchema,
    total_transfer_value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Total transfer value is the sum of the market value of all assets and securities in an ACAT at the time of settlement, plus any cash balance.',
      }),
    transfer_identifier: z
      .string()
      .exactOptional()
      .openapi({ description: 'DTCC transfer identifier, also known as the control number' }),
    transfer_type: AcatsDtccTransferTypeSchema,
  })
  .openapi({
    description: 'An ACATS transfer and its current status.',
    example: {
      acats_id: '2c827687-ddd3-4ad9-bee8-0a3cdad35301',
      account_id: '9ac16d7d-1f6e-445b-8e51-807e77ba2902',
      account_name: 'John Doe',
      account_number: '12345678',
      account_type: 'SINGLE',
      contra_account_number: 'A00000123',
      contra_broker_name: 'Alpaca Clearing',
      contra_broker_number: '00001234',
      contra_broker_type: 'BANK',
      created_at: '2026-04-21T12:41:03.505862Z',
      direction: 'INCOMING',
      ip_address: '203.0.113.42',
      rejection_details: {
        rejection_message: 'SS# Tax ID Mismatch',
        rejection_reason: 'SS_TAX_ID_MISMATCH',
      },
      status: { dtcc_status: 'REJECT', transfer_status: 'REJECTED' },
      total_transfer_value: '24223.62',
      transfer_identifier: '03251237654321',
      transfer_type: 'FUL',
    },
    required: [
      'acats_id',
      'account_id',
      'account_number',
      'created_at',
      'contra_account_number',
      'contra_broker_number',
      'transfer_type',
      'direction',
      'status',
    ],
  })
  .openapi('AcatsTransfer')

const AcatsListTransfersResponseSchema = z
  .object({
    page_token_next: z
      .any()
      .openapi({
        description:
          'Page token for the next page of transfers. Pass it back in the `page_token` query parameter to fetch that page. Not returned when the caller is on the last page.',
      })
      .and(AcatsPageTokenSchema)
      .exactOptional(),
    page_token_previous: z
      .any()
      .openapi({
        description:
          'Page token for the previous page of transfers. Pass it back in the `page_token` query parameter to fetch that page. Not returned when the caller is on the first page.',
      })
      .and(AcatsPageTokenSchema)
      .exactOptional(),
    pending_transfers: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The count of ACATS transfers pending review', example: 37 }),
    transfers: z.array(AcatsTransferSchema),
  })
  .openapi({
    description: 'A page of ACATS transfers, with optional pagination tokens.',
    example: {
      page_token_next: 'eyJjcmVhdGVkX2F0IjoiMjAyNi0wNC0yOFQxNDozMDowMFoiLCJpZCI6IjAxQUJDIn0=',
      pending_transfers: 37,
      transfers: [
        {
          acats_id: '2c827687-ddd3-4ad9-bee8-0a3cdad35301',
          account_id: '9ac16d7d-1f6e-445b-8e51-807e77ba2902',
          account_name: 'John Doe',
          account_number: '12345678',
          account_type: 'SINGLE',
          contra_account_number: 'A00000123',
          contra_broker_name: 'Alpaca Clearing',
          contra_broker_number: '00001234',
          contra_broker_type: 'BANK',
          created_at: '2026-04-21T12:41:03.505862Z',
          direction: 'INCOMING',
          ip_address: '203.0.113.42',
          rejection_details: {
            rejection_message: 'SS# Tax ID Mismatch',
            rejection_reason: 'SS_TAX_ID_MISMATCH',
          },
          status: { dtcc_status: 'REJECT', transfer_status: 'REJECTED' },
          total_transfer_value: '24223.62',
          transfer_identifier: '03251237654321',
          transfer_type: 'FUL',
        },
      ],
    },
    required: ['transfers'],
  })
  .openapi('AcatsListTransfersResponse')

const AcatsSortDirectionSchema = z
  .enum(['ASC', 'DESC'])
  .default('DESC')
  .openapi({ description: 'Sort direction for list results.' })
  .openapi('AcatsSortDirection')

const AccountTypeSchema = z
  .enum([
    'trading',
    'custodial',
    'donor_advised',
    'ira',
    'trust',
    'omnibus_non_disclosed',
    'omnibus_sub',
    'hsa',
    'joint',
  ])
  .openapi({
    description: 'The account type returned for the account.',
    example: 'trading',
    title: 'AccountType',
  })
  .openapi('AccountType')

const AgreementTypeSchema = z
  .enum([
    'margin_agreement',
    'account_agreement',
    'customer_agreement',
    'crypto_agreement',
    'options_agreement',
  ])
  .openapi({
    description:
      '- margin_agreement: Alpaca Margin Agreement\n- account_agreement: Alpaca Account Agreement\n- customer_agreement: Alpaca Customer Agreement\n- crypto_agreement: Alpaca Crypto agreement\n- options_agreement: Alpaca Option agreement\n- custodial_customer_agreement: Alpaca Custodial Customer agreement\n',
    example: 'customer_agreement',
    title: 'AgreementType',
  })
  .openapi('AgreementType')

const AgreementSchema = z
  .object({
    agreement: AgreementTypeSchema,
    ip_address: z
      .ipv4()
      .openapi({
        description: 'The ip_address the signed agreements were sent from by the user.',
        example: '185.13.21.99',
      }),
    revision: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The agreement revision.\nThe format is XX.YYYY.MM where XX is an incrementing revision number, YYYY is the year and MM is the month.\nIf the revision is not specified in a POST or PATCH request, the active revision will be used, which will align with the [Alpaca Documents Library](https://alpaca.markets/disclosures).\n',
      }),
    signed_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp the agreement was signed.',
        example: '2019-09-11T18:09:33Z',
      }),
  })
  .openapi({ required: ['agreement', 'signed_at', 'ip_address'] })
  .openapi('Agreement')

const AccountCashInterestProgramSchema = z
  .object({
    apr_tier_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique name of the APR tier for a specific program',
        example: 'gold',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status of the account within a cash interest program. One of:\n- **ACTIVE**\nThe account is enrolled and eligible for idle cash to be swept at the end of day (EOD).\n- **INACTIVE**\nThe account is not enrolled due to it either not being eligible (e.g. the updated Alpaca Customer Agreement has not been signed), an APR tier needs to be assigned, or they have been unenrolled.\n- **PENDING_CHANGE**\nAn enrollment, APR Tier change, or unenrollment is in progress\n',
        example: 'ACTIVE',
      }),
  })
  .openapi({ required: [] })
  .openapi('AccountCashInterestProgram')

const AccountCashInterestResponseSchema = z
  .object({ USD: AccountCashInterestProgramSchema.exactOptional() })
  .openapi({
    description: "The configuration and status of the account's USD cash interest program\n",
    required: [],
  })
  .openapi('AccountCashInterestResponse')

const StreetAddressSchema = z
  .string()
  .openapi({ example: '20 N San Mateo Dr' })
  .openapi('StreetAddress')

const ContactSchema = z
  .object({
    city: z.string().openapi({ example: 'San Mateo' }),
    country: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'country code in ISO 3166-1 alpha-3 format, representing the country the person/entity resides in.',
        example: 'USA',
      }),
    email_address: z.email().openapi({ example: 'john.doe@example.com' }),
    phone_number: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Phone number should include the country code, format: "+15555555555"',
        example: '+15556667788',
      }),
    postal_code: z.string().exactOptional().openapi({ example: '94401' }),
    state: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required if the country or country_of_tax_residence (in the identity model below) is 'USA'.",
        example: 'CA',
      }),
    street_address: z
      .array(StreetAddressSchema)
      .openapi({
        description:
          "The user's street address. If multiple lines in address, pass in as additional array elements. Maximum of 3 objects in array",
      }),
    unit: z
      .string()
      .exactOptional()
      .openapi({ description: 'The specific apartment number if applicable' }),
  })
  .openapi({
    description: 'Contact is the model for the account owner contact information.\n',
    required: ['email_address', 'street_address', 'city'],
  })
  .openapi('Contact')

const AccountStatusSchema = z
  .enum([
    'INACTIVE',
    'PAPER_ONLY',
    'ONBOARDING',
    'SUBMITTED',
    'SUBMISSION_FAILED',
    'ACTION_REQUIRED',
    'ACCOUNT_UPDATED',
    'APPROVAL_PENDING',
    'APPROVED',
    'REJECTED',
    'ACTIVE',
    'ACCOUNT_CLOSED',
  ])
  .openapi({
    description:
      'Designates the current status of this account\n\nPossible Values:\n- **INACTIVE**\nAccount not set to trade given asset.\n- **PAPER_ONLY**\nThe account is limited to paper trading.\n- **ONBOARDING**\nAn application is expected for this user, but has not been submitted yet.\n- **SUBMITTED**\nThe application has been submitted and is being processed.\n- **SUBMISSION_FAILED**\nUsed to display if failure on submission\n- **ACTION_REQUIRED**\nThe application requires manual action.\n- **ACCOUNT_UPDATED**\nUsed to display when Account has been modified by user\n- **APPROVAL_PENDING**\nInitial value. The application approval process is in progress.\n- **APPROVED**\nThe account application has been approved, and waiting to be ACTIVE\n- **REJECTED**\nThe account application is rejected for some reason\n- **ACTIVE**\nThe account is fully active. Trading and funding are processed under this status.\n- **ACCOUNT_CLOSED**\nThe account is closed.\n',
    example: 'ACTIVE',
  })
  .openapi('AccountStatus')

const CurrencySchema = z
  .string()
  .openapi({
    description:
      '"USD" // US Dollar\n"JPY" // Japanese Yen\n"EUR" // Euro\n"CAD" // Canadian Dollar\n"GBP" // British Pound Sterling\n"CHF" // Swiss Franc\n"TRY" // Turkish Lira\n"AUD" // Australian Dollar\n"CZK" // Czech Koruna\n"SEK" // Swedish Krona\n"DKK" // Danish Krone\n"SGD" // Singapore Dollar\n"HKD" // Hong Kong Dollar\n"HUF" // Hungarian Forint\n"NZD" // New Zealand Dollar\n"NOK" // Norwegian Krone\n"PLN" // Poland Złoty',
    title: 'Currency',
  })
  .openapi('Currency')

const DisclosureContextAnnotationSchema = z
  .object({
    company_city: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required for FINRA affiliations and controlled firms.' }),
    company_compliance_email: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required for FINRA affiliations and controlled firms.' }),
    company_country: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required for FINRA affiliations and controlled firms.' }),
    company_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required for FINRA affiliations and controlled firms.' }),
    company_state: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required if and only if `company_country` is `USA`.' }),
    company_street_address: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required for FINRA affiliations and controlled firms.' }),
    context_type: z
      .enum(['CONTROLLED_FIRM', 'IMMEDIATE_FAMILY_EXPOSED', 'AFFILIATE_FIRM'])
      .openapi({
        description:
          'Specifies the type of disclosure annotation. Valid types are FINRA affiliations, for users affiliated with or employed by a FINRA member firm, a Stock Exchange Member, FINRA, Registered Investment Advisor, or a Municipal Securities Broker/Dealer; Company control relationships, for senior executives, and 10% or greater shareholders, of a publicly traded company; and immediate family members of politically exposed individuals.',
      }),
    family_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required for immediate family members of politically exposed persons.',
      }),
    given_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required for immediate family members of politically exposed persons.',
      }),
  })
  .openapi({ required: ['context_type'], title: 'DisclosureContextAnnotation' })
  .openapi('DisclosureContextAnnotation')

const DisclosuresSchema = z
  .object({
    context: z
      .array(DisclosureContextAnnotationSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Array of annotations describing the rationale for marking `is_control_person`, `is_affiliated_exchange_or_finra`, and/or `immediate_family_exposed` as true',
      }),
    employer_address: z
      .string()
      .exactOptional()
      .openapi({ description: "The employer's address if the user is employed." }),
    employer_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the employer if the user is employed.' }),
    employment_position: z
      .string()
      .exactOptional()
      .openapi({ description: "The user's position if they are employed." }),
    employment_sector: z
      .enum([
        'agriculture',
        'business_management',
        'computers_and_it',
        'construction',
        'education',
        'finance',
        'government',
        'healthcare',
        'hospitality',
        'manufacturing',
        'marketing',
        'media',
        'other',
        'science',
        'self_employed',
        'transportation',
        'not_employed',
      ])
      .exactOptional()
      .openapi({
        description:
          'The industry sector of employment.\nIf the `employment_status` is `unemployed` or `student`, set this property to `not_employed`.\nIf the `employment_status` is `retired`, set this to `self_employed`.\n',
      }),
    employment_status: z
      .enum(['unemployed', 'employed', 'student', 'retired'])
      .exactOptional()
      .openapi({
        description: 'One of the following: `employed`, `unemployed`, `retired`, or `student`.',
      }),
    immediate_family_exposed: z
      .boolean()
      .openapi({
        description:
          "If your user's immediate family member (sibling, husband/wife, child, parent) is either politically exposed or holds a control position.",
      }),
    is_affiliated_exchange_or_finra: z
      .boolean()
      .openapi({ description: 'Whether user is affiliated with any exchanges or FINRA.' }),
    is_control_person: z
      .boolean()
      .openapi({
        description:
          'Whether user holds a controlling position in a publicly traded company, member of the board of directors or has policy making abilities in a publicly traded company.',
      }),
    is_politically_exposed: z
      .boolean()
      .openapi({ description: 'Whether the user is politically exposed.' }),
  })
  .openapi({
    description:
      'Disclosures fields denote if the account owner falls under\neach category defined by FINRA rule. The client has to ask\nquestions for the end user and the values should reflect\ntheir answers.\nIf one of the answers is true (yes), the account goes into\nACTION_REQUIRED status.\n',
    example: {
      immediate_family_exposed: false,
      is_affiliated_exchange_or_finra: false,
      is_control_person: false,
      is_politically_exposed: false,
    },
    required: [
      'is_control_person',
      'is_affiliated_exchange_or_finra',
      'is_politically_exposed',
      'immediate_family_exposed',
    ],
  })
  .openapi('Disclosures')

const OwnerDocumentTypeSchema = z
  .enum([
    'account_approval_letter',
    'address_verification',
    'cip_result',
    'company_formation',
    'date_of_birth_verification',
    'entity_operating_document',
    'entity_registration',
    'hio_declaration_form',
    'identity_verification',
    'limited_trading_authorization',
    'pep_declaration_form',
    'tax_id_verification',
    'w8ben',
    'w9',
  ])
  .openapi({ description: 'The type of the owner document', example: 'identity_verification' })
  .openapi('OwnerDocumentType')

const OwnerDocumentSchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }),
    document_sub_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The sub-type of the document. This is a free-form property.' }),
    document_type: OwnerDocumentTypeSchema,
    id: z.uuid(),
    mime_type: z.string().exactOptional(),
  })
  .openapi({
    description: 'A document associated with an owner of the account',
    example: {
      created_at: '2019-09-30T23:55:31.185998Z',
      document_sub_type: 'passport',
      document_type: 'identity_verification',
      id: '0d18ae51-3c94-4511-b209-101e1666416b',
      mime_type: 'image/jpeg',
    },
    required: ['id', 'document_type', 'created_at'],
  })
  .openapi('OwnerDocument')

const EnabledAssetClassSchema = z
  .enum(['us_equity', 'us_option', 'crypto'])
  .openapi({
    description:
      "An asset class that can be enabled on a brokerage account, i.e. a value that may appear in an account's `enabled_assets`. This differs from `AssetClass` (which also covers order and asset metadata) by excluding `ipo`, which is not an enable-able asset.",
  })
  .openapi('EnabledAssetClass')

const AccountFPSLItemSchema = z
  .object({
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status of the account for this FPSL market. One of:\n- **ACTIVE**\nThe account is successfully enrolled for FPSL for this market.\n- **INACTIVE**\nThe account is not enrolled for FPSL for this market due to it either not being eligible, an FPSL tier has not been assigned, or it has been unenrolled.\n',
        example: 'ACTIVE',
      }),
    tier_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The id of the FPSL tier for this market',
        example: '61e69015-8549-4bfd-b9c3-01e75843f47d',
      }),
  })
  .openapi({ required: [] })
  .openapi('AccountFPSLItem')

const AccountFPSLResponseSchema = z
  .object({ US: AccountFPSLItemSchema.exactOptional() })
  .openapi({
    description:
      "The account's Fully Paid Securities Lending (FPSL) configuration.\nThis is only returned for accounts that have FPSL enabled.\n",
    required: [],
  })
  .openapi('AccountFPSLResponse')

const TaxIdTypeSchema = z
  .enum([
    'USA_SSN',
    'USA_ITIN',
    'ARG_AG_CUIT',
    'AUS_TFN',
    'AUS_ABN',
    'BOL_NIT',
    'BRA_CPF',
    'CHL_RUT',
    'COL_NIT',
    'CRI_NITE',
    'DEU_TAX_ID',
    'DOM_RNC',
    'ECU_RUC',
    'FRA_SPI',
    'GBR_UTR',
    'GBR_NINO',
    'GTM_NIT',
    'HND_RTN',
    'HUN_TIN',
    'IDN_KTP',
    'IND_PAN',
    'ISR_TAX_ID',
    'ITA_TAX_ID',
    'JPN_TAX_ID',
    'MEX_RFC',
    'NIC_RUC',
    'NLD_TIN',
    'PAN_RUC',
    'PER_RUC',
    'PRY_RUC',
    'SGP_NRIC',
    'SGP_FIN',
    'SGP_ASGD',
    'SGP_ITR',
    'SLV_NIT',
    'SWE_TAX_ID',
    'URY_RUT',
    'VEN_RIF',
    'NATIONAL_ID',
    'PASSPORT',
    'PERMANENT_RESIDENT',
    'DRIVER_LICENSE',
    'OTHER_GOV_ID',
    'NOT_SPECIFIED',
  ])
  .openapi({
    description:
      "An Enum of the various kinds of Tax ID formats Alpaca supports.\n\nPossible Values are:\n\n\n- **USA_SSN**\nUSA Social Security Number\n\n- **USA_ITIN**\nUSA Individual Taxpayer Identification Number\n\n- **ARG_AR_CUIT**\nArgentina CUIT\n\n- **AUS_TFN**\nAustralian Tax File Number\n\n- **AUS_ABN**\nAustralian Business Number\n\n- **BOL_NIT**\nBolivia NIT\n\n- **BRA_CPF**\nBrazil CPF\n\n- **CHL_RUT**\nChile RUT\n\n- **COL_NIT**\nColombia NIT\n\n- **CRI_NITE**\nCosta Rica NITE\n\n- **DEU_TAX_ID**\nGermany Tax ID (Identifikationsnummer)\n\n- **DOM_RNC**\nDominican Republic RNC\n\n- **ECU_RUC**\nEcuador RUC\n\n- **FRA_SPI**\nFrance SPI (Reference Tax Number)\n\n- **GBR_UTR**\nUK UTR (Unique Taxpayer Reference)\n\n- **GBR_NINO**\nUK NINO (National Insurance Number)\n\n- **GTM_NIT**\nGuatemala NIT\n\n- **HND_RTN**\nHonduras RTN\n\n- **HUN_TIN**\nHungary TIN Number\n\n- **IDN_KTP**\nIndonesia KTP\n\n- **IND_PAN**\nIndia PAN Number\n\n- **ISR_TAX_ID**\nIsrael Tax ID (Teudat Zehut)\n\n- **ITA_TAX_ID**\nItaly Tax ID (Codice Fiscale)\n\n- **JPN_TAX_ID**\nJapan Tax ID (Kojin Bango)\n\n- **MEX_RFC**\nMexico RFC\n\n- **NIC_RUC**\nNicaragua RUC\n\n- **NLD_TIN**\nNetherlands TIN Number\n\n- **PAN_RUC**\nPanama RUC\n\n- **PER_RUC**\nPeru RUC\n\n- **PRY_RUC**\nParaguay RUC\n\n- **SGP_NRIC**\nSingapore NRIC\n\n- **SGP_FIN**\nSingapore FIN\n\n- **SGP_ASGD**\nSingapore ASGD\n\n- **SGP_ITR**\nSingapore ITR\n\n- **SLV_NIT**\nEl Salvador NIT\n\n- **SWE_TAX_ID**\nSweden Tax ID (Personnummer)\n\n- **URY_RUT**\nUruguay RUT\n\n- **VEN_RIF**\nVenezuela RIF\n\n- **NATIONAL_ID**\nNational ID number, if a tax ID number is not available\n\n- **PASSPORT**\nPassport number, if a tax ID number is not available\n\n- **PERMANENT_RESIDENT**\nPermanent resident number, if a tax ID number is not available\n\n- **DRIVER_LICENSE**\nDriver's license number, if a tax ID number is not available\n\n- **OTHER_GOV_ID**\nOther government issued identifier, if a tax ID number is not available\n\n- **NOT_SPECIFIED**\nOther Tax IDs",
    example: 'USA_SSN',
    title: 'TaxIdType',
  })
  .openapi('TaxIdType')

const IdentitySchema = z
  .object({
    annual_income_max: z
      .string()
      .exactOptional()
      .openapi({ description: "The upper bound of the user's annual income.", example: '100000' }),
    annual_income_min: z
      .string()
      .exactOptional()
      .openapi({ description: "The lower bound of the user's annual income.", example: '50000' }),
    country_of_birth: z
      .string()
      .exactOptional()
      .openapi({
        description: '[ISO 3166-1 alpha-3](https://www.iso.org/iso-3166-country-codes.html).\n',
        example: 'USA',
      }),
    country_of_citizenship: z
      .string()
      .exactOptional()
      .openapi({
        description: '[ISO 3166-1 alpha-3](https://www.iso.org/iso-3166-country-codes.html).\n',
        example: 'USA',
      }),
    country_of_tax_residence: z
      .string()
      .openapi({
        description: '[ISO 3166-1 alpha-3](https://www.iso.org/iso-3166-country-codes.html).\n',
        example: 'USA',
      }),
    date_of_birth: z.iso
      .date()
      .openapi({ description: 'The date of birth in "YYYY-MM-DD" format.', example: '1990-01-01' }),
    date_of_departure_from_usa: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Required if `visa_type` = B1 or B2' }),
    family_name: z
      .string()
      .openapi({ description: 'The last name (surname) of the user.', example: 'Doe' }),
    funding_source: z
      .array(
        z.enum([
          'employment_income',
          'investments',
          'inheritance',
          'business_income',
          'savings',
          'family',
        ]),
      )
      .openapi({
        description:
          'Can be one or more of the following: `employment_income`, `investments`, `inheritance`, `business_income`, `savings`, `family`.',
      }),
    given_name: z
      .string()
      .openapi({ description: 'The first/given name of the user.', example: 'John' }),
    investment_experience_with_options: z
      .enum(['none', '1_to_5_years', 'over_5_years'])
      .exactOptional()
      .openapi({
        description: "The user's level of expertise and familiarity with investing in Options.\n",
      }),
    investment_experience_with_stocks: z
      .enum(['none', '1_to_5_years', 'over_5_years'])
      .exactOptional()
      .openapi({
        description:
          "The user's level of expertise and familiarity with investing in US Equities.\n",
      }),
    investment_objective: z
      .enum([
        'generate_income',
        'preserve_wealth',
        'market_speculation',
        'growth',
        'balance_preserve_wealth_with_growth',
      ])
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          "The user's investment objective. This field is deprecated. Please use the top level `investment_objective` field.\n",
      }),
    investment_time_horizon: z
      .enum([
        'less_than_1_year',
        '1_to_2_years',
        '3_to_5_years',
        '6_to_10_years',
        'more_than_10_years',
      ])
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'The expected period of time the user plan to invest to achieve his/her financial goal(s). This field is deprecated. Please use the top level `investment_time_horizon` field.\n',
      }),
    liquid_net_worth_max: z
      .string()
      .exactOptional()
      .openapi({
        description: "The upper bound of the user's liquid net worth.",
        example: '500000',
      }),
    liquid_net_worth_min: z
      .string()
      .exactOptional()
      .openapi({
        description: "The lower bound of the user's liquid net worth.",
        example: '100000',
      }),
    liquidity_needs: z
      .enum(['very_important', 'important', 'somewhat_important', 'does_not_matter'])
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          "The user's ability to quickly and easily convert all or part of their investments in this account to cash without significant loss in value. This field is deprecated. Please use the top level `liquidity_needs` field.\n",
      }),
    marital_status: z
      .enum(['SINGLE', 'MARRIED', 'DIVORCED', 'WIDOWED'])
      .exactOptional()
      .openapi({ description: 'The marital status of the user.\n' }),
    middle_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The middle name of the user.' }),
    number_of_dependents: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of dependents the user has.\n' }),
    permanent_resident: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Only used to collect permanent residence status in the USA.' }),
    risk_tolerance: z
      .enum(['conservative', 'moderate', 'significant_risk'])
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          "The user's investment risk tolerance. This field is deprecated. Please use the top level `risk_tolerance` field.\n",
      }),
    tax_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If this is provided, `tax_id_type` is required.',
        example: '666-55-4321',
      }),
    tax_id_type: z
      .xor([TaxIdTypeSchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Required on write when `tax_id` is set. May be `null` on read when unset or for sparse identity on OmniSub / omnibus-non-disclosed accounts.',
      }),
    total_net_worth_max: z
      .string()
      .exactOptional()
      .openapi({
        description: "The upper bound of the user's total net worth.",
        example: '1000000',
      }),
    total_net_worth_min: z
      .string()
      .exactOptional()
      .openapi({
        description: "The lower bound of the user's total net worth.",
        example: '100000',
      }),
    visa_expiration_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Required if `visa_type` is set.' }),
    visa_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Only used to collect visa types for users residing in the USA.' }),
  })
  .openapi({
    description: "Identity is the model to provide account owner's identity information.\n",
    example: {
      country_of_birth: 'AUS',
      country_of_citizenship: 'AUS',
      country_of_tax_residence: 'USA',
      date_of_birth: '1990-01-01',
      family_name: 'Doe',
      funding_source: ['employment_income'],
      given_name: 'John',
      tax_id: '666-55-4321',
      tax_id_type: 'USA_SSN',
    },
    required: [
      'given_name',
      'family_name',
      'date_of_birth',
      'country_of_tax_residence',
      'funding_source',
    ],
  })
  .openapi('Identity')

const TrustedContactSchema = z
  .union([
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'email_address')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['email_address'] }),
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'phone_number')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['phone_number'] }),
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'street_address')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['street_address'] }),
  ])
  .and(
    z
      .object({
        city: z
          .string()
          .exactOptional()
          .openapi({ description: 'Required if `street_address` is set.' }),
        country: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The country in [ISO 3166-1 alpha-3](https://www.iso.org/iso-3166-country-codes.html) format. Required if `street_address` is set.',
          }),
        email_address: z
          .email()
          .exactOptional()
          .openapi({
            description:
              'At least one of `email_address`, `phone_number`, or `street_address` is required.',
            example: 'jane.doe@example.com',
          }),
        family_name: z.string().openapi({ example: 'Doe' }),
        given_name: z.string().openapi({ example: 'Jane' }),
        phone_number: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'At least one of `email_address`, `phone_number`, or `street_address` is required.',
          }),
        postal_code: z
          .string()
          .exactOptional()
          .openapi({ description: 'Required if `street_address` is set.' }),
        state: z
          .string()
          .exactOptional()
          .openapi({ description: 'Required if `street_address` is set.' }),
        street_address: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'At least one of `email_address`, `phone_number`, or `street_address` is required.',
          }),
      })
      .openapi({ required: ['given_name', 'family_name'] }),
  )
  .openapi({
    description:
      'This model input is optional. However, the client should make a reasonable effort to obtain the trusted contact information. See [FINRA Notice 17-11](https://www.finra.org/sites/default/files/Regulatory-Notice-17-11.pdf) for more details.\n\nAt least one of the following is required:\n- `email_address`\n- `phone_number`\n- `street_address`\n',
    example: { email_address: 'jane.doe@example.com', family_name: 'Doe', given_name: 'Jane' },
    required: ['given_name', 'family_name'],
  })
  .openapi('TrustedContact')

const AccountSchema = z
  .object({
    account_number: z
      .string()
      .nullable()
      .openapi({
        description: 'A human-readable account number that can be shown to the end user',
      }),
    account_type: AccountTypeSchema.exactOptional(),
    agreements: z.array(AgreementSchema).exactOptional(),
    allow_instant_ach: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines whether the account is enabled for Instant ACH by the partner.',
      }),
    cash_interest: AccountCashInterestResponseSchema.exactOptional(),
    contact: ContactSchema.exactOptional(),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp (RFC3339) of account creation.' }),
    crypto_status: AccountStatusSchema.exactOptional(),
    currency: CurrencySchema,
    disclosures: DisclosuresSchema.exactOptional(),
    documents: z
      .array(OwnerDocumentSchema)
      .exactOptional()
      .openapi({ description: 'The documents associated with the primary owner of the account' }),
    enabled_assets: z
      .array(EnabledAssetClassSchema)
      .exactOptional()
      .openapi({
        description:
          'Assets the user has enabled and is able to trade once status and/or crypto_status are ACTIVE',
      }),
    fpsl: AccountFPSLResponseSchema.exactOptional(),
    id: z.uuid().openapi({ description: 'UUID that identifies the account for later reference' }),
    identity: IdentitySchema.exactOptional(),
    instant_ach_blocked: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the account is blocked for Instant ACH by Alpaca. Defaults to false when the partner creates the account. If the partner has set allow_instant_ach to true but instant_ach_blocked is true, then the account is blocked for Instant ACH irrespective of the fact that the partner has it enabled.',
      }),
    last_equity: z
      .string()
      .openapi({
        description: 'EOD equity calculation (cash + long market value + short market value)',
      }),
    primary_account_holder_id: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({
        description: "UUID of the account's primary holder when available; otherwise `null`.",
      }),
    status: AccountStatusSchema,
    trusted_contact: TrustedContactSchema.exactOptional(),
  })
  .openapi({
    description:
      'Represents high level account info. Used when returning entire account information would not be useful like the getAllAccounts operation',
    examples: [
      {
        account_number: '9034005019',
        created_at: '2019-09-30T23:55:31.185998Z',
        currency: 'USD',
        id: '0d18ae51-3c94-4511-b209-101e1666416b',
        last_equity: '1500.65',
        primary_account_holder_id: null,
        status: 'APPROVED',
      },
    ],
    required: ['id', 'account_number', 'status', 'currency', 'created_at', 'last_equity'],
  })
  .openapi('Account')

const AccountCashInterestEventSchema = z
  .object({
    apr_tier_name_from: z
      .string()
      .exactOptional()
      .openapi({ description: 'The APR tier name before the change' }),
    apr_tier_name_to: z
      .string()
      .exactOptional()
      .openapi({ description: 'The APR tier name after the change' }),
    currency: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The currency of the cash interest program that changed.',
        example: 'USD',
      }),
    status_from: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The cash_interest program status of the account before the change',
      }),
    status_to: z
      .string()
      .exactOptional()
      .openapi({ description: 'The cash_interest program status of the account after the change' }),
  })
  .openapi({
    description:
      "This property is included when the account's cash interest program had changed due to an enrollment, APR tier change, or unenrollment.\nThe from and to status or APR tier name will be included in the event, depending on the change.\n",
    required: [],
  })
  .openapi('AccountCashInterestEvent')

const AccountCashInterestPatchSchema = z
  .object({ USD: AccountCashInterestProgramSchema.exactOptional() })
  .openapi({
    description:
      "Use this property to change the account's configuration for the USD cash interest program.\nTo enroll the account, specify the apr_tier_name. The status should not be specified on enrollment.\nTo change the APR tier, specify the new apr_tier_name. The status should not be specified on tier changes.\nThe unenroll, set the status to INACTIVE.\nAfter any change, the response will contain a status of PENDING_CHANGE.\nAn event showing the status change to ACTIVE (for enrollment or tier changes) or INACTIVE (for unenrollment) will be generated when the change is complete.\n",
    required: [],
  })
  .openapi('AccountCashInterestPatch')

const AccountCashInterestPostSchema = z
  .object({ USD: AccountCashInterestProgramSchema.exactOptional() })
  .openapi({
    description:
      "The configuration of the account's USD cash interest program when creating an account.\nIf cash_interest is not provided and the request signs the required Alpaca Customer Agreement revision, the account may be enrolled in a default APR tier automatically. Do not rely on this; provide the cash_interest object with the desired apr_tier_name. The status should not be specified on enrollment.\nThe response will contain a status of PENDING_CHANGE. An event showing the status change to ACTIVE will be generated when the enrollment is complete.\n",
    required: [],
  })
  .openapi('AccountCashInterestPost')

const AccountConfigurationsSchema = z
  .object({
    disable_overnight_trading: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, overnight trading is disabled.' }),
    fractional_trading: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, account is able to participate in fractional trading' }),
    max_margin_multiplier: z.string().exactOptional().openapi({ description: 'Can be "1" or "2"' }),
    max_options_trading_level: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
      .exactOptional()
      .openapi({
        description:
          'The desired maximum options trading level. 0=disabled, 1=Covered Call/Cash-Secured Put, 2=Long Call/Put, 3=Spreads/Straddles.',
      }),
    no_shorting: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, account becomes long-only mode.' }),
    ptp_no_exception_entry: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set to true then Alpaca will accept orders for PTP symbols with no exception. Default is false.',
      }),
    suspend_trade: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, new orders are blocked.' }),
    trade_confirm_email: z
      .enum(['all', 'none'])
      .exactOptional()
      .openapi({ description: 'all or none. If none, emails for order fills are not sent.' }),
  })
  .openapi({
    description: 'Represents additional configuration settings for an account',
    title: 'AccountConfigurations',
    required: [],
  })
  .openapi('AccountConfigurations')

const AccountSubTypeSchema = z
  .enum(['traditional', 'roth'])
  .openapi({
    description: 'IRA Account only\n\nPossible values are:\n\n- traditional\n- roth',
    example: 'traditional',
    title: 'AccountSubType',
  })
  .openapi('AccountSubType')

const AccountCreationTypeSchema = z
  .enum(['trading', 'custodial', 'donor_advised', 'ira'])
  .openapi({
    description: 'The account type to create.',
    example: 'trading',
    title: 'AccountCreationType',
  })
  .openapi('AccountCreationType')

const BeneficiarySchema = z
  .object({
    date_of_birth: z.iso
      .date()
      .openapi({
        description: 'Date of birth in YYYY-MM-DD format. It cannot be in the future.',
        example: '1970-01-01',
      }),
    family_name: z
      .string()
      .min(1)
      .openapi({ description: 'Beneficiary family name.', example: 'Doe' }),
    given_name: z
      .string()
      .min(1)
      .openapi({ description: 'Beneficiary given name.', example: 'Jane' }),
    middle_name: z
      .string()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Beneficiary middle name. Omit this field or send null when the beneficiary has no middle name. An empty string is rejected. Account responses always include the field and use null when it is unset.\n',
        example: 'P',
      }),
    relationship: z
      .enum(['spouse', 'other'])
      .openapi({
        description: 'Relationship of the beneficiary to the account holder.',
        example: 'spouse',
      }),
    share_pct: z
      .string()
      .openapi({
        description:
          'Share of the account allocated to this beneficiary, as a decimal string. The value must be greater than 0 and at most 100, with at most two decimal places.\n',
        example: '100',
      }),
    tax_id: z
      .string()
      .min(1)
      .openapi({
        description:
          'Beneficiary tax identifier. Create and update requests require a USA SSN. Account responses always return the masked value `xxx-xx-xxxx`.\n',
        example: 'xxx-xx-xxxx',
      }),
    tax_id_type: z
      .literal('USA_SSN')
      .openapi({ description: 'Tax identifier type.', example: 'USA_SSN' }),
    type: z
      .enum(['primary', 'contingent'])
      .openapi({
        description:
          'Whether this beneficiary is primary or contingent. An account with beneficiaries needs at least one primary beneficiary. The `share_pct` values of all primary beneficiaries must add up to 100, and the `share_pct` values of all contingent beneficiaries, if any, must also add up to 100.\n',
        example: 'primary',
      }),
  })
  .openapi({
    description:
      'Beneficiary of an IRA account. The same shape is used on account create, account update, and account responses.\n',
    example: {
      date_of_birth: '1970-01-01',
      family_name: 'Doe',
      given_name: 'Jane',
      middle_name: null,
      relationship: 'spouse',
      share_pct: '100',
      tax_id: 'xxx-xx-xxxx',
      tax_id_type: 'USA_SSN',
      type: 'primary',
    },
    required: [
      'given_name',
      'family_name',
      'date_of_birth',
      'tax_id',
      'tax_id_type',
      'relationship',
      'type',
      'share_pct',
    ],
  })
  .openapi('Beneficiary')

const W8benDocumentSchema = z
  .object({
    additional_conditions: z
      .string()
      .exactOptional()
      .openapi({ description: 'Any additional conditions to specify' }),
    country_citizen: z
      .string()
      .openapi({ description: 'The country that the applicant is a citizen of' }),
    date: z.iso.date().openapi({ description: 'date signed' }),
    date_of_birth: z.iso.date().openapi({ description: 'date of birth of applicant' }),
    foreign_tax_id: z
      .string()
      .exactOptional()
      .openapi({ description: "Applicant's tax id in their home country" }),
    ftin_not_required: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Required if foreign_tax_id and tax_id_ssn are empty.' }),
    full_name: z.string().openapi({ description: 'Full name of applicant' }),
    income_type: z.string().exactOptional().openapi({ description: 'Income type of applicant' }),
    ip_address: z.string().openapi({ description: 'IP address of applicant when signed' }),
    mailing_address_city_state: z
      .string()
      .exactOptional()
      .openapi({ description: 'Mailing city/state of applicant' }),
    mailing_address_country: z
      .string()
      .exactOptional()
      .openapi({ description: 'Mailing country for applicant' }),
    mailing_address_street: z
      .string()
      .exactOptional()
      .openapi({ description: 'Mailing street address for applicant' }),
    paragraph_number: z.string().exactOptional(),
    percent_rate_withholding: z.int().exactOptional(),
    permanent_address_city_state: z
      .string()
      .openapi({ description: 'Permanent city/state of applicant' }),
    permanent_address_country: z
      .string()
      .openapi({ description: 'Permanent country of residence of applicant' }),
    permanent_address_street: z
      .string()
      .openapi({ description: 'Permanent street address of applicant' }),
    reference_number: z.string().exactOptional(),
    residency: z
      .string()
      .exactOptional()
      .openapi({ description: 'Country of residency of applicant' }),
    revision: z.string().openapi({ description: 'Revision of the W8BEN form' }),
    signer_full_name: z.string().openapi({ description: 'Full name of signing user' }),
    tax_id_ssn: z.string().exactOptional().openapi({ description: 'TaxID/SSN of applicant' }),
    timestamp: z
      .string()
      .regex(
        /^(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|[+-](?:[01]\d|2[0-3]):[0-5]\d)?$/,
      )
      .openapi({ format: 'time', description: 'Timestamp when form data was gathered' }),
  })
  .openapi({
    description:
      'Use this property (instead of the content property) to upload W-8 BEN data in JSON format.',
    examples: [
      {
        additional_conditions: 'None',
        country_citizen: 'Australia',
        date: '2021-06-14',
        date_of_birth: '1970-01-01',
        foreign_tax_id: '123 456 789',
        ftin_not_required: false,
        full_name: 'John Doe',
        income_type: 'interest',
        ip_address: '127.0.0.1',
        mailing_address_city_state: 'Adelaide, South Australia',
        mailing_address_country: 'Australia',
        mailing_address_street: '51 Main St',
        paragraph_number: '15',
        percent_rate_withholding: 5,
        permanent_address_city_state: 'Adelaide, South Australia',
        permanent_address_country: 'Australia',
        permanent_address_street: '20 Main St',
        reference_number: 'abc123',
        residency: 'Australia',
        revision: '10-2021',
        signer_full_name: 'Mr. Signing User',
        tax_id_ssn: '123-00-456',
        timestamp: '2021-06-14T09:31:05Z',
      },
    ],
    required: [
      'country_citizen',
      'date',
      'date_of_birth',
      'full_name',
      'ip_address',
      'permanent_address_city_state',
      'permanent_address_country',
      'permanent_address_street',
      'revision',
      'timestamp',
      'signer_full_name',
    ],
  })
  .openapi('W8benDocument')

const OwnerDocumentUploadRequestSchema = z
  .object({
    content: z
      .base64()
      .transform((val) =>
        new TextDecoder().decode(Uint8Array.from(atob(val), (char) => char.charCodeAt(0))),
      )
      .openapi({
        description:
          'The base64 string encoding of the document contents. This property is required unless content_data is provided.',
        example: '/9j/Cg==',
      }),
    content_data: W8benDocumentSchema.exactOptional(),
    document_sub_type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The specific type of document, e.g. passport. This is a free-form property.',
        example: 'passport',
      }),
    document_type: OwnerDocumentTypeSchema,
    mime_type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This field is required if content is specified. ENUM: application/pdf, image/png, or image/jpeg. If document_type is w8ben then application/json is also accepted',
        example: 'image/jpeg',
      }),
  })
  .openapi({
    description: 'The request to upload a document for an owner of the account',
    example: {
      content: '/9j/Cg==',
      document_sub_type: 'passport',
      document_type: 'identity_verification',
      mime_type: 'image/jpeg',
    },
    examples: [
      {
        content: '/9j/Cg==',
        document_sub_type: 'passport',
        document_type: 'identity_verification',
        mime_type: 'image/jpeg',
      },
    ],
    required: ['document_type', 'content'],
    title: 'OwnerDocumentUploadRequest',
  })
  .openapi('OwnerDocumentUploadRequest')

const AccountFPSLItemPostSchema = z
  .object({
    tier_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The id of the FPSL tier for this market',
        example: '61e69015-8549-4bfd-b9c3-01e75843f47d',
      }),
  })
  .openapi({ required: [] })
  .openapi('AccountFPSLItemPost')

const AccountFPSLPostSchema = z
  .object({ US: AccountFPSLItemPostSchema.exactOptional() })
  .openapi({
    description:
      "The account's Fully Paid Securities Lending (FPSL) configuration.\nTo enroll the account for a market, specify the tier_id. The status should not be specified on enrollment.\nCurrently only the US market is supported.\n",
    required: [],
  })
  .openapi('AccountFPSLPost')

const CustodialAccountMinorIdentitySchema = z
  .object({
    country_of_birth: z.string().exactOptional(),
    country_of_citizenship: z.string().exactOptional(),
    country_of_tax_residence: z.string(),
    date_of_birth: z.iso.date(),
    email: z.email(),
    family_name: z.string(),
    given_name: z.string(),
    state: z.string(),
    tax_id: z.string().exactOptional(),
    tax_id_type: TaxIdTypeSchema,
  })
  .openapi({
    description:
      'Represents Identity information for a minor that an account of type "custodial" is for',
    required: [
      'given_name',
      'family_name',
      'date_of_birth',
      'tax_id_type',
      'country_of_tax_residence',
      'state',
      'email',
    ],
  })
  .openapi('CustodialAccountMinorIdentity')

const AccountCreationRequestSchema = z
  .object({
    account_sub_type: AccountSubTypeSchema.exactOptional().openapi({
      description: 'The account subtype. Required for IRA accounts.',
    }),
    account_type: AccountCreationTypeSchema.default('trading')
      .exactOptional()
      .openapi({ description: 'The account type. Defaults to `trading` when omitted.' }),
    agreements: z
      .array(AgreementSchema)
      .exactOptional()
      .openapi({
        description:
          'Agreements submitted for the account or holder. Required agreement types depend on account type, enabled assets, existing holder agreements, and correspondent configuration. The server validates required coverage.',
      }),
    allow_instant_ach: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Determines whether the account will be enabled for Instant ACH by the partner. Defaults to false if not provided.',
      }),
    beneficiaries: z
      .array(BeneficiarySchema)
      .exactOptional()
      .openapi({ description: 'IRA Account only. A user can submit max 6 beneficiaries.' }),
    cash_interest: AccountCashInterestPostSchema.exactOptional(),
    contact: ContactSchema.exactOptional(),
    disclosures: DisclosuresSchema.exactOptional(),
    documents: z.array(OwnerDocumentUploadRequestSchema).exactOptional(),
    enabled_assets: z
      .array(EnabledAssetClassSchema)
      .exactOptional()
      .openapi({
        description:
          'Will default to `us_equity`. Alpaca has the ability to update the default value upon request.',
      }),
    entity_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'UUID of an existing legal entity used as the holder of a donor-advised account. Required for donor-advised accounts.',
      }),
    fpsl: AccountFPSLPostSchema.exactOptional(),
    identity: IdentitySchema.exactOptional(),
    investment_objective: z
      .enum([
        'generate_income',
        'preserve_wealth',
        'market_speculation',
        'growth',
        'balance_preserve_wealth_with_growth',
      ])
      .exactOptional()
      .openapi({
        description:
          "The user's investment objective. This field should be used instead of the deprecated `investment_objective` under identity.\n",
      }),
    investment_time_horizon: z
      .enum([
        'less_than_1_year',
        '1_to_2_years',
        '3_to_5_years',
        '6_to_10_years',
        'more_than_10_years',
      ])
      .exactOptional()
      .openapi({
        description:
          'The expected period of time the user plan to invest to achieve his/her financial goal(s). This field should be used instead of the deprecated `investment_time_horizon` under identity.\n',
      }),
    liquidity_needs: z
      .enum(['very_important', 'important', 'somewhat_important', 'does_not_matter'])
      .exactOptional()
      .openapi({
        description:
          "The user's ability to quickly and easily convert to cash all or a portion of the investments in this account without experiencing significant loss in value. This field should be used instead of the deprecated `liquidity_needs` under identity.\n",
      }),
    minor_identity: CustodialAccountMinorIdentitySchema.exactOptional().openapi({
      description: 'Identity information for the minor. Required for custodial accounts.',
    }),
    primary_account_holder_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'UUID of an existing party to use as the primary account holder. Among the documented account types, existing holders are supported for trading and IRA accounts.\n\nWhen provided, omit inline holder fields such as `contact`, `identity`, `disclosures`, and `minor_identity`. The server validates the referenced party, account-type compatibility, eligibility, and required agreements.\n',
      }),
    risk_tolerance: z
      .enum(['conservative', 'moderate', 'significant_risk'])
      .exactOptional()
      .openapi({
        description:
          "The user's investment risk tolerance. This field should be used instead of the deprecated `risk_tolerance` under identity.\n",
      }),
    trading_configurations: AccountConfigurationsSchema.exactOptional(),
    trusted_contact: TrustedContactSchema.exactOptional(),
  })
  .openapi({
    description:
      'Fields accepted when creating an account. Requirements vary by account type, enabled assets, existing holder agreements, and correspondent configuration. The server enforces conditional requirements that are not represented statically in this schema.\n\nAccount-specific requirements:\n- Trading accounts require inline `identity` plus `contact`, or an existing holder through `primary_account_holder_id`. Individual US equity accounts created with inline identity also require `disclosures`.\n- Custodial accounts require `identity` and `minor_identity`. US equity accounts also require `disclosures`.\n- IRA accounts require `account_sub_type`, US equity, and either inline `identity` or an existing holder through `primary_account_holder_id`; they do not support crypto. IRA accounts created with inline identity also require `disclosures`.\n- Donor-advised accounts require `entity_id`.\n',
    title: 'AccountCreationRequest',
    required: [],
  })
  .openapi('AccountCreationRequest')

const AccountDocumentTypeSchema = z
  .enum([
    'account_application',
    'account_statement',
    'crypto_account_statement',
    'options_application',
    'tax_statement',
    'trade_confirmation_json',
    'trade_confirmation',
  ])
  .openapi({ description: 'The type of the account document\n', example: 'account_application' })
  .openapi('AccountDocumentType')

const AccountDocumentSchema = z
  .object({
    date: z.iso.date(),
    id: z.uuid(),
    name: z.string().exactOptional(),
    sub_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The sub-type of the document. This is a free-form property.' }),
    type: AccountDocumentTypeSchema,
  })
  .openapi({
    description: 'A document associated with an account',
    example: {
      date: '2019-09-30',
      id: '0d18ae51-3c94-4511-b209-101e1666416b',
      sub_type: '1099-Comp',
      type: 'account_statement',
    },
    required: ['id', 'type', 'date'],
  })
  .openapi('AccountDocument')

const CustodialAccountTypeSchema = z
  .string()
  .openapi({
    description:
      'Represents the type of custodial account based on the state where the beneficiary resides.\nThis value is returned only when the `country_of_tax_residence` is `USA`. For other countries, this property is not included in the response.\n\n**Possible Return Values**\n\n`CustodianTypeUTMA` - Indicates that the custodial account is governed by the Uniform Transfers to Minors Act.\n`CustodianTypeUGMA` - Indicates that the custodial account is governed by the Uniform Gifts to Minors Act.',
    title: 'CustodialAccountType',
  })
  .openapi('CustodialAccountType')

const KYCResultTypeSetSchema = z
  .record(
    z.string(),
    z.object({}).refine((val) => Object.keys(val).length <= 0),
  )
  .nullable()
  .openapi({
    description:
      'A nullable set of KYC reason identifiers represented as property names with empty object values. See `KYCResults` for documented identifiers and interpretation guidance.',
    examples: [null, {}, { IDENTITY_VERIFICATION: {}, WATCHLIST_HIT: {} }],
    title: 'KYCResultTypeSet',
  })
  .openapi('KYCResultTypeSet')

const KYCResultsSchema = z
  .object({
    accept: KYCResultTypeSetSchema.exactOptional(),
    additional_information: z
      .string()
      .exactOptional()
      .openapi({ description: 'Used to display a custom message.' }),
    indeterminate: KYCResultTypeSetSchema.exactOptional(),
    reject: KYCResultTypeSetSchema.exactOptional(),
    summary: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Either `pass` or `fail`. Used to indicate if KYC has completed and passed or not. This field is used for internal purposes only.',
      }),
  })
  .nullable()
  .openapi({
    description:
      "Holds information about the result of KYC.\n\n`accept`, `indeterminate`, and `reject` are nullable sets represented as objects. Each property name is a KYC reason identifier, and every property value is always an empty object (`{}`) carrying no nested data. For example:\n\n```json\n{\n  \"IDENTITY_VERIFICATION\": {},\n  \"WATCHLIST_HIT\": {}\n}\n```\n\nInterpret each reason together with its enclosing result category and `additional_information`.\n\nDocumented reason identifiers:\n- `IDENTITY_VERIFICATION`: A government-issued identity document is required to verify the account owner's identity.\n- `TAX_IDENTIFICATION`: A tax identification document is required to verify the account owner's tax identification number.\n- `ADDRESS_VERIFICATION`: Additional documentation, such as a government-issued ID or statement, may be required to verify the account owner's residential address.\n- `DATE_OF_BIRTH`: A government-issued identity document is required to verify the account owner's date of birth.\n- `SELFIE_VERIFICATION`: A live selfie of the account owner is required to verify identity.\n- `PEP`: The account owner disclosed politically exposed person status, and additional information may be required.\n- `FAMILY_MEMBER_PEP`: The account owner disclosed that an immediate family member is politically exposed, and additional information may be required.\n- `CONTROL_PERSON`: Additional company information may be required because the account owner disclosed a control position.\n- `AFFILIATED`: Additional firm information may be required because the account owner disclosed an affiliation with FINRA or an exchange.\n- `VISA_TYPE_OTHER`: The account owner's visa type and expiration date may be required because the submitted visa type was \"other.\"\n- `W8BEN_CORRECTION`: A new W-8BEN with corrected identifying information is required.\n- `COUNTRY_NOT_SUPPORTED`: The account owner's country of tax residence or legal residence is not supported for this account.\n- `WATCHLIST_HIT`: Watchlist screening returned a result that requires further review; no action is needed from the account owner unless separately requested.\n- `OTHER`: See `additional_information` for a custom message describing what is required from the account owner.\n- `OTHER_PARTNER`: See `additional_information` for a custom message intended for the Broker API partner.\n- `CITIZENSHIP_COUNTRY_NOT_SUPPORTED`: The account owner's country of citizenship is not supported for this account.\n- `DIFFERING_COUNTRY`: A submitted identity document was issued by a country different from the account owner's country of tax residence.\n- `WL_PEP_SCREENING`: Watchlist screening returned a result related to possible political exposure.\n- `WL_LEGAL_REGULATORY_WARNING`: Watchlist screening returned a legal or regulatory warning result.\n- `UNDER_MINIMUM_AGE`: The account owner does not meet the minimum age requirement for this account.\n- `PEP_FOREIGN`: The account owner disclosed foreign politically exposed person status, and additional information may be required.\n- `FAMILY_MEMBER_PEP_FOREIGN`: The account owner disclosed that an immediate family member has foreign politically exposed person status, and additional information may be required.\n- `DISCRETIONARY`: The account is designated for discretionary trading by a registered investment adviser and requires review.\n- `HIO`: Additional information and a declaration form may be required because the account owner disclosed being the head of an international organization.\n- `INTERNAL_CHECK`: A non-specific account-opening check contributed to the KYC outcome; no more specific reason is available.\n- `compromised_document`: The identity document check indicated that the document may be compromised.\n- `data_comparison`: Data extracted from the identity document did not pass comparison checks and requires review.\n- `image_integrity`: A document or selfie image did not pass image-integrity checks and requires review.\n\nThe set of reason identifiers is extensible, so integrations must tolerate and preserve unrecognized values.\n",
    required: [],
  })
  .openapi('KYCResults')

const AccountExtendedSchema = z
  .object({
    account_name: z.string().exactOptional(),
    account_number: z.string().nullable(),
    account_sub_type: AccountSubTypeSchema.exactOptional(),
    account_type: AccountTypeSchema,
    agreements: z.array(AgreementSchema).exactOptional(),
    allow_instant_ach: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines whether the account is enabled for Instant ACH by the partner.',
      }),
    beneficiaries: z.array(BeneficiarySchema).exactOptional(),
    cash_interest: AccountCashInterestResponseSchema.exactOptional(),
    contact: ContactSchema.exactOptional(),
    created_at: z.iso.datetime({ offset: true }),
    crypto_status: AccountStatusSchema.exactOptional(),
    currency: CurrencySchema,
    custodial_account_type: CustodialAccountTypeSchema.exactOptional(),
    disclosures: DisclosuresSchema.exactOptional(),
    documents: z
      .array(OwnerDocumentSchema)
      .exactOptional()
      .openapi({ description: 'The documents associated with the primary owner of the account' }),
    enabled_assets: z.array(EnabledAssetClassSchema).exactOptional(),
    fpsl: AccountFPSLResponseSchema.exactOptional(),
    id: z.uuid(),
    identity: IdentitySchema.exactOptional(),
    instant_ach_blocked: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the account is blocked for Instant ACH by Alpaca. Defaults to false when the partner creates the account. If the partner has set allow_instant_ach to true but instant_ach_blocked is true, then the account is blocked for Instant ACH irrespective of the fact that the partner has it enabled.',
      }),
    investment_objective: z
      .enum([
        'generate_income',
        'preserve_wealth',
        'market_speculation',
        'growth',
        'balance_preserve_wealth_with_growth',
      ])
      .exactOptional()
      .openapi({
        description:
          "The user's investment objective. This field should be used instead of the deprecated `investment_objective` under identity.\n",
      }),
    investment_time_horizon: z
      .enum([
        'less_than_1_year',
        '1_to_2_years',
        '3_to_5_years',
        '6_to_10_years',
        'more_than_10_years',
      ])
      .exactOptional()
      .openapi({
        description:
          'The expected period of time the user plan to invest to achieve his/her financial goal(s). This field should be used instead of the deprecated `investment_time_horizon` under identity.\n',
      }),
    kyc_results: KYCResultsSchema.exactOptional(),
    last_equity: z.string(),
    liquidity_needs: z
      .enum(['very_important', 'important', 'somewhat_important', 'does_not_matter'])
      .exactOptional()
      .openapi({
        description:
          "The user's ability to quickly and easily convert to cash all or a portion of the investments in this account without experiencing significant loss in value. This field should be used instead of the deprecated `liquidity_needs` under identity.\n",
      }),
    minor_identity: CustodialAccountMinorIdentitySchema.exactOptional(),
    primary_account_holder_id: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({
        description: "UUID of the account's primary holder when available; otherwise `null`.",
      }),
    risk_tolerance: z
      .enum(['conservative', 'moderate', 'significant_risk'])
      .exactOptional()
      .openapi({
        description:
          "The user's investment risk tolerance. This field should be used instead of the deprecated `risk_tolerance` under identity.\n",
      }),
    status: AccountStatusSchema,
    trading_configurations: AccountConfigurationsSchema.exactOptional(),
    trusted_contact: TrustedContactSchema.exactOptional(),
    usd: z
      .object({ last_equity: z.string().exactOptional().openapi({ example: '123.45' }) })
      .exactOptional()
      .openapi({
        description: 'values in USD. This is returned for LCT (non-USD) accounts only.',
        required: [],
      }),
  })
  .openapi({
    description:
      'Represents an account with all data available. If your api response is missing some of these fields, there is a good chance you are using a route that returns `Account` instances instead of these.',
    examples: [
      {
        account_number: '601842165',
        account_type: 'trading',
        agreements: [
          {
            agreement: 'margin_agreement',
            ip_address: '127.0.0.1',
            revision: '16.2021.05',
            signed_at: '2022-01-21T21:25:26.579487214Z',
          },
          {
            agreement: 'customer_agreement',
            ip_address: '127.0.0.1',
            revision: '22.2024.08',
            signed_at: '2022-01-21T21:25:26.579487214Z',
          },
        ],
        beneficiaries: [
          {
            date_of_birth: '1970-01-01',
            family_name: 'Smith',
            given_name: 'John',
            middle_name: 'P',
            relationship: 'spouse',
            share_pct: '100',
            tax_id: 'xxx-xx-xxxx',
            tax_id_type: 'USA_SSN',
            type: 'primary',
          },
        ],
        contact: {
          city: 'San Mateo',
          country: 'USA',
          email_address: 'strange_elbakyan_97324509@example.com',
          phone_number: '614-555-0697',
          postal_code: '94401',
          state: 'CA',
          street_address: ['20 N San Mateo Dr'],
        },
        created_at: '2022-01-21T21:25:26.583576Z',
        crypto_status: 'INACTIVE',
        currency: 'USD',
        disclosures: {
          immediate_family_exposed: false,
          is_affiliated_exchange_or_finra: false,
          is_control_person: false,
          is_discretionary: false,
          is_politically_exposed: false,
        },
        documents: [
          {
            content: 'https://example.com/documents/identity-verification.jpg',
            created_at: '2022-01-21T21:25:28.184231Z',
            document_sub_type: 'passport',
            document_type: 'identity_verification',
            id: 'd5af1585-6c60-494d-9ea5-c5df62704229',
          },
        ],
        id: '3dcb795c-3ccc-402a-abb9-07e26a1b1326',
        identity: {
          country_of_birth: 'USA',
          country_of_citizenship: 'USA',
          country_of_tax_residence: 'USA',
          date_of_birth: '1970-01-01',
          family_name: 'Elbakyan',
          funding_source: ['employment_income'],
          given_name: 'Strange',
          tax_id_type: 'USA_SSN',
        },
        last_equity: '40645.13',
        primary_account_holder_id: null,
        status: 'ACTIVE',
        trusted_contact: {
          email_address: 'strange_elbakyan_97324509@example.com',
          family_name: 'Doe',
          given_name: 'Jane',
        },
      },
    ],
    required: [
      'id',
      'account_number',
      'status',
      'currency',
      'last_equity',
      'created_at',
      'account_type',
    ],
  })
  .openapi('AccountExtended')

const AccountFPSLEventSchema = z
  .object({
    US: z
      .object({
        status_from: z
          .string()
          .exactOptional()
          .openapi({ description: 'The FPSL program status of the account before the change' }),
        status_to: z
          .string()
          .exactOptional()
          .openapi({ description: 'The FPSL program status of the account after the change' }),
        tier_from: z
          .string()
          .exactOptional()
          .openapi({ description: 'The tier id before the change' }),
        tier_to: z
          .string()
          .exactOptional()
          .openapi({ description: 'The tier id after the change' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({
    description:
      "This property is included when the account's FPSL information had changed due to an enrollment, tier change, or unenrollment.\nThe from and to status or tier id will be included in the event, depending on the change.\n",
    required: [],
  })
  .openapi('AccountFPSLEvent')

const AccountFPSLPatchSchema = z
  .object({ US: AccountFPSLItemSchema.exactOptional() })
  .openapi({
    description:
      "The account's Fully Paid Securities Lending (FPSL) configuration.\nUse this property to change the account's configuration for the FPSL program.\nTo enroll the account for a market, specify the tier_id. The status should not be specified on enrollment.\nTo change the tier, specify the new tier_id. The status should not be specified on tier changes.\nTo unenroll, set the status to INACTIVE.\nTo re-enroll the account, set the status to ACTIVE. You can also specify the tier_id in case you want to change it.\nCurrently only US market is supported.\n",
    required: [],
  })
  .openapi('AccountFPSLPatch')

const AccountLimitSchema = z
  .object({
    account_no: z.string(),
    amount_available: z.string(),
    amount_in_use: z.string(),
    amount_limit: z.string(),
  })
  .openapi({ required: ['account_no', 'amount_in_use', 'amount_available', 'amount_limit'] })
  .openapi('AccountLimit')

const RestrictToLiquidationReasonsSchema = z
  .object({
    ach_return: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Set when an incoming ACH transfer gets rejected' }),
    position_to_equity_ratio: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Set when the position to equity ration exceeds the maximum limit' }),
    unspecified: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Default value for unknown reason' }),
  })
  .openapi({
    description: 'Reasons why the liquidation only flag was set',
    title: 'RestrictToLiquidationReasons',
    required: [],
  })
  .openapi('RestrictToLiquidationReasons')

const AdminConfigurationsEventSchema = z
  .object({
    acct_daily_transfer_limit: z
      .object({
        from: z
          .string()
          .exactOptional()
          .openapi({ description: 'Old value of the daily transfer limit' }),
        to: z
          .string()
          .exactOptional()
          .openapi({ description: 'New value of the daily transfer limit' }),
      })
      .exactOptional()
      .openapi({
        description: 'The correspondent level daily transfer limit override was changed',
        required: [],
      }),
    allow_instant_ach: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, the account is allowed to perform instant ACH' }),
    disable_algodash_access: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, the account is allowed to access algo dash' }),
    disable_api_key: z
      .boolean()
      .exactOptional()
      .openapi({ description: "If true, the account's API key will be disabled" }),
    disable_crypto: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, the account is not allowed to trade cryptos' }),
    disable_day_trading: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, the account is not allowed to day trade (e.g. buy and sell the same security on the same day)',
      }),
    disable_fractional: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If true, the account cannot create orders for fractional share positions',
      }),
    disable_shorting: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If true the account is not allowed to create short position orders',
      }),
    incoming_transfers_blocked: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, incoming transfers to this account are rejected' }),
    max_margin_multiplier: z
      .object({
        from: z.string().exactOptional().openapi({ description: 'Old value of margin multiplier' }),
        to: z.string().exactOptional().openapi({ description: 'New value of margin multiplier' }),
      })
      .exactOptional()
      .openapi({
        description: 'Max margin multiplier was changed by admin to this value',
        required: [],
      }),
    max_options_trading_level: z
      .object({
        from: z
          .string()
          .exactOptional()
          .openapi({ description: 'Old value of max options trading level' }),
        to: z
          .string()
          .exactOptional()
          .openapi({ description: 'New value of max options trading level' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Max options trading level was changed by admin to this value. It can be 0, 1, 2, or 3.',
        required: [],
      }),
    outgoing_transfers_blocked: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, outgoing transfers from this account are rejected' }),
    restrict_to_liquidation_reasons: RestrictToLiquidationReasonsSchema.exactOptional(),
  })
  .openapi({
    description:
      'Represents a change to admin configurations, as broadcast over the **events** streaming API. Only fields whose value changed are included; unrelated update events will not include a flag that did not change.\n\nDepending on the type of the Admin Configuration, the sent event will behave differently. For bool flags we are only sending the new value.\n\nFor example, the following payload means that the disable_shorting flag was set to true:\n\n```\n{\n  "disable_shorting": true\n}\n```\n\nFor other data types, we are embedding the old and new values into the payload. For example changing the max_margin_multiplier from 4 to 1 will yield this payload:\n\n```\n{\n  "max_margin_multiplier": {\n    "from": 4,\n    "to": 1\n  }\n}\n```\n\nIntroducing an override value from the default will yield a null value as `from`. For example restricting the max_margin_multiplier to 1 from default will yield the following payload:\n\n```\n{\n  "max_margin_multiplier": {\n    "from": null,\n    "to": 1\n  }\n}\n```',
    title: 'AdminConfigurationsEvent',
    required: [],
  })
  .openapi('AdminConfigurationsEvent')

const OptionsApprovalEventSchema = z
  .object({
    approved_level_from: z
      .int()
      .exactOptional()
      .openapi({ description: 'The approved options level before the change' }),
    approved_level_to: z
      .int()
      .exactOptional()
      .openapi({ description: 'The approved options level after the change' }),
  })
  .openapi({
    description: "This property is included when the account's approved options level changes.\n",
    required: [],
  })
  .openapi('OptionsApprovalEvent')

const AccountStatusEventSchema = z
  .object({
    account_blocked: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If true the account was blocked, if false, the account got unblocked',
      }),
    account_id: z
      .string()
      .min(1)
      .openapi({ description: 'The unique identifier of the account that was changed' }),
    account_number: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'The account number of the account that was changed' }),
    admin_configurations: AdminConfigurationsEventSchema.exactOptional(),
    at: z.string().min(1).openapi({ description: 'timestamp of event' }),
    cash_interest: AccountCashInterestEventSchema.exactOptional(),
    crypto_status_from: z
      .string()
      .exactOptional()
      .openapi({ description: 'account crypto_status changed from' }),
    crypto_status_to: z
      .string()
      .exactOptional()
      .openapi({ description: 'account crypto_status changed to' }),
    event_id: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Monotonically increasing 64-bit integer not available to new partners, and for backward compatibility purposes only; use `event_ulid` as the stable identifier where possible\n',
      }),
    event_ulid: z
      .ulid()
      .openapi({ description: 'lexically sortable, monotonically increasing character array' }),
    fpsl: AccountFPSLEventSchema.exactOptional(),
    kyc_results: KYCResultsSchema.exactOptional(),
    options: OptionsApprovalEventSchema.exactOptional(),
    reason: z.string().min(1).exactOptional().openapi({ deprecated: true }),
    status_from: z
      .string()
      .exactOptional()
      .openapi({ description: 'The account status before the change', example: 'APPROVED' }),
    status_to: z
      .string()
      .exactOptional()
      .openapi({ description: 'The account status after the change', example: 'ACTIVE' }),
    trading_blocked: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true the account cannot trade going forward, if false, the ban has been lifted',
      }),
  })
  .openapi({
    description:
      'Represents a change to certain account properties, sent over the events streaming API.\n',
    examples: [
      {
        account_id: '4db36989-6565-4011-9126-39fe6b3d9bf6',
        at: '2021-06-14T09:59:15.232782Z',
        event_id: 122039,
        event_ulid: '01F84ZC0H0Q1QN7XPNWX44HF5J',
        status_from: '',
        status_to: 'APPROVED',
      },
    ],
    required: ['account_id', 'at', 'event_ulid'],
    title: 'AccountStatusEvent',
  })
  .openapi('AccountStatusEvent')

const AccountTradingLimitSchema: z.ZodType<AccountTradingLimitType> = z
  .lazy(() =>
    z
      .object({
        available: z
          .string()
          .exactOptional()
          .openapi({ description: 'The remaining net buying limit that can be used for trading.' }),
        daily_net_limit: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The net buying limit that can be reached before further trading activity is restricted. Please reach out to learn more about how this limit is determined.',
          }),
        held: z
          .string()
          .exactOptional()
          .openapi({ description: 'The limit that is currently being held for open orders' }),
        swap_rate: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The swap rate is applicable for Local Currency Trading (LCT) accounts',
          }),
        usd: USDAccountTradingLimitSchema.exactOptional(),
        used: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The real time net value of cash inflows (buy trades, etc.) with cash outflows (sell trades, etc). This will be dynamic throughout the day based on user activity, with executed orders being reset at the start of the next trading day.',
          }),
      })
      .openapi({ title: 'AccountTradingLimit', required: [] }),
  )
  .openapi('AccountTradingLimit')

const AccountUpdateRequestSchema = z
  .object({
    agreements: z
      .array(AgreementSchema)
      .exactOptional()
      .openapi({
        description:
          'Additional agreements, or new revisions of existing agreements, read and signed by the account holder.',
      }),
    allow_instant_ach: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If provided, updates whether the account is enabled for Instant ACH by the partner. Omitting the field leaves the current setting unchanged.',
      }),
    beneficiaries: z.array(BeneficiarySchema).exactOptional(),
    cash_interest: AccountCashInterestPatchSchema.exactOptional(),
    contact: ContactSchema.exactOptional(),
    disclosures: DisclosuresSchema.exactOptional(),
    enabled_assets: z
      .array(EnabledAssetClassSchema)
      .exactOptional()
      .openapi({
        description:
          'The asset classes enabled on the account. Omit this field to leave the\naccount\'s enabled assets unchanged. Updates are additive only: the\nsubmitted list must contain every asset class already enabled on the account,\nbecause asset removal is not supported. For example, to enable\ncrypto for an account that currently trades only equities, submit\n`["us_equity", "crypto"]` together with the signed crypto agreement.\n`us_option` may appear in this list for options-enabled accounts and\nmust be re-listed on additive updates, but options cannot be enabled\nthrough this endpoint.\n',
      }),
    fpsl: AccountFPSLPatchSchema.exactOptional(),
    identity: IdentitySchema.exactOptional(),
    primary_account_holder_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The UUID of the primary account holder. This field is immutable after the account is created.\n\n- Omitting the field, or supplying the value already associated with the account, is a no-op.\n- Supplying a value different from the current primary account holder returns HTTP 403.\n',
      }),
    trusted_contact: TrustedContactSchema.exactOptional(),
  })
  .openapi({
    examples: [
      {
        beneficiaries: [
          {
            date_of_birth: '1970-01-01',
            family_name: 'Smith',
            given_name: 'John',
            middle_name: 'P',
            relationship: 'spouse',
            share_pct: '100',
            tax_id: '666-55-1234',
            tax_id_type: 'USA_SSN',
            type: 'primary',
          },
        ],
        contact: {
          city: 'San Mateo',
          country: 'USA',
          email_address: 'john.doe@example.com',
          phone_number: '+15556667788',
          postal_code: '94401',
          state: 'CA',
          street_address: ['20 N San Mateo Dr'],
        },
        disclosures: {
          immediate_family_exposed: false,
          is_affiliated_exchange_or_finra: false,
          is_control_person: false,
          is_politically_exposed: false,
        },
        enabled_assets: ['us_equity', 'crypto'],
        identity: {
          country_of_birth: 'AUS',
          country_of_citizenship: 'AUS',
          country_of_tax_residence: 'USA',
          date_of_birth: '1990-01-01',
          family_name: 'Doe',
          funding_source: ['employment_income'],
          given_name: 'John',
          tax_id: '666-55-4321',
          tax_id_type: 'USA_SSN',
        },
        trusted_contact: {
          email_address: 'jane.doe@example.com',
          family_name: 'Doe',
          given_name: 'Jane',
        },
      },
    ],
    required: [],
  })
  .openapi('AccountUpdateRequest')

const ActivitySchema: z.ZodType<ActivityType> = z
  .lazy(() =>
    z
      .object({
        account_id: z
          .uuid()
          .exactOptional()
          .openapi({ example: 'c8f1ef5d-edc0-4f23-9ee4-378f19cb92a4' }),
        activity_type: ActivityTypeSchema.exactOptional(),
        id: z
          .string()
          .exactOptional()
          .openapi({ example: '20220208125959696::88b5f678-fef5-447b-af15-f21e367e6d8c' }),
      })
      .openapi({ required: [] })
      .and(z.xor([TradeActivitySchema, NonTradeActivitySchema]))
      .openapi({
        description: 'Base for activity types',
        required: ['id', 'activity_type'],
        title: 'Activity',
      }),
  )
  .openapi('Activity')

const ActivityEventV2AssetSchema = z
  .object({
    cusip: z
      .string()
      .exactOptional()
      .openapi({
        description: 'CUSIP. Only present for US assets when permitted by licensing.',
        example: '037833100',
      }),
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Asset ID. For options, the contract ID. Only present when `activity_type` is `TRD`.',
        example: '790f3f26-4e7c-4f46-93f4-0425a28873da',
      }),
    isin: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ISIN. Only present when `activity_type` is `TRD`, and when permitted by licensing.',
        example: 'US0378331005',
      }),
    symbol: z
      .string()
      .exactOptional()
      .openapi({ description: 'Symbol. For options, the contract symbol.', example: 'AAPL' }),
  })
  .openapi({
    description:
      'Instrument for `qty`. For options, the contract. Omitted when `qty` is missing or zero, when no identifier is known, and on activities recorded before this field was introduced.',
    examples: [
      { cusip: '037833100', id: '790f3f26-4e7c-4f46-93f4-0425a28873da', symbol: 'AAPL' },
      { id: '5b4ec3b4-6a1f-4a47-9b8e-2f6c1d0a9e31', isin: 'HK0000069689', symbol: '1299:XHKG' },
    ],
    required: [],
  })
  .openapi('ActivityEventV2Asset')

const ActivityEventV2CommonFieldsSchema = z
  .object({
    account_id: z.uuid().openapi({ description: 'Account UUID' }),
    activity_subtype: z
      .string()
      .exactOptional()
      .openapi({ description: 'Sub category for activity type, if any' }),
    activity_type: z
      .string()
      .openapi({
        description:
          'The type of the activity, which can be trade or any of the non trade activities',
      }),
    asset: ActivityEventV2AssetSchema.exactOptional(),
    at: z.iso.datetime({ offset: true }).min(1).openapi({ description: 'Timestamp of event' }),
    currency: z.string().openapi({ description: 'Currency code in ISO format' }),
    event_id: z
      .ulid()
      .openapi({ description: 'Lexically sortable, monotonically increasing character string' }),
    executed_at: z.iso
      .datetime({ offset: true })
      .min(1)
      .openapi({ description: 'Execution time for the activity event' }),
    net_amount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The net amount of money (positive or negative) associated with the activity',
      }),
    previous_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Previous ID is presented if this activity corrects or cancels a previous trade or non trade activity. It contains execution_id or trns_id respectively',
      }),
    price: z
      .string()
      .exactOptional()
      .openapi({ description: 'The price of the security involved with the activity' }),
    qty: z
      .string()
      .exactOptional()
      .openapi({ description: 'The quantity of the security involved with the activity' }),
    ref_id: z
      .uuid()
      .openapi({
        description:
          'The unique identifier for the activity. For trades, the execution_id is used, for other activities the trns_id is used.',
      }),
    settle_date: z.iso.date().min(1).openapi({ description: 'Date when the activity settled' }),
    status: z.string().openapi({ description: 'Status of the activity' }),
    swap_fee_bps: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Currency conversion fee in basis points charged to the customer on a trade activity. Sent when the order has a fee, including zero. Omitted on other activities.',
      }),
    swap_rate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Exchange rate from the execution on a trade activity. Sent when the execution has a rate, including zero. Omitted on other activities.',
      }),
  })
  .openapi({
    description: 'Represents the common fields for all Activity V2 Events',
    required: [
      'account_id',
      'at',
      'event_id',
      'activity_type',
      'executed_at',
      'status',
      'settle_date',
      'currency',
      'ref_id',
    ],
  })
  .openapi('ActivityEventV2CommonFields')

const ActivityV2DetailTRDSchema = z
  .object({
    asset_id: z
      .uuid()
      .openapi({ description: 'Asset ID (For options this represents the option contract ID)' }),
    client_order_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Order ID provided by the customer' }),
    commission: z
      .string()
      .exactOptional()
      .openapi({ description: 'Commission to collect from the account holder' }),
    cum_qty: z.string().openapi({ description: 'Total filled quantity on the order' }),
    cusip: z
      .string()
      .exactOptional()
      .openapi({ description: 'CUSIP of the security involved with the activity' }),
    execution_type: z
      .enum(['fill', 'trade_correct', 'trade_bust'])
      .openapi({ description: 'The execution type' }),
    leaves_qty: z
      .string()
      .openapi({
        description: 'Unfilled quantity on the order, when order is filled value could be 0',
      }),
    order_id: z.uuid().openapi({ description: 'Order ID generated by Alpaca' }),
    order_status: z.string().openapi({ description: 'Identifies the current status of the order' }),
    settlement_currency: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Settlement currency of the order. Omitted when the order has none.',
      }),
    side: z
      .enum(['buy', 'sell'])
      .openapi({ description: 'Represents what side of the transaction an order was on' }),
    symbol: z
      .string()
      .openapi({ description: 'The symbol of the security involved with the activity' }),
  })
  .openapi({
    description: 'Activity details for a fill or partial_fill event',
    required: [
      'order_id',
      'side',
      'symbol',
      'asset_id',
      'leaves_qty',
      'cum_qty',
      'order_status',
      'execution_type',
    ],
  })
  .openapi('ActivityV2DetailTRD')

const DIVSPDActivityV2Schema = CommonCaActivityV2Schema.and(
  z
    .object({
      cash_payout: z.string().openapi({ description: 'Total cash amount paid' }),
      cusip: z
        .string()
        .openapi({ description: 'The CUSIP of the security involved with the activity' }),
      due_bill_off_date: z.iso
        .date()
        .min(1)
        .exactOptional()
        .openapi({ description: 'When due bills stop applying for this event' }),
      due_bill_on_date: z.iso
        .date()
        .min(1)
        .exactOptional()
        .openapi({ description: 'When due bills begin to apply for this event' }),
      entitled_qty: z
        .string()
        .openapi({ description: 'Quantity of shares entitled to receive cash in lieu' }),
      ex_date: z.iso
        .date()
        .min(1)
        .exactOptional()
        .openapi({ description: 'The ex_date for this corporate action' }),
      foreign: z
        .enum(['true', 'false'])
        .openapi({
          description:
            'Indicates if related to a non-US security. Serialized as the JSON strings `"true"` or `"false"`, not a JSON boolean.',
          example: 'false',
        }),
      isin: z
        .string()
        .exactOptional()
        .openapi({ description: 'The ISIN of the security involved with the activity' }),
      payable_date: z.iso
        .date()
        .min(1)
        .exactOptional()
        .openapi({ description: 'The payable_date for this corporate action' }),
      rate: z.string().openapi({ description: 'Cash payout per share' }),
      record_date: z.iso
        .date()
        .min(1)
        .exactOptional()
        .openapi({ description: 'The record_date for this corporate action' }),
      special: z
        .enum(['true', 'false'])
        .openapi({
          description:
            'Indicates if this is a special dividend. Serialized as the JSON strings `"true"` or `"false"`, not a JSON boolean.',
          example: 'false',
        }),
      symbol: z
        .string()
        .openapi({ description: 'The symbol of the security involved with the activity' }),
    })
    .openapi({
      required: ['entitled_qty', 'cash_payout', 'symbol', 'cusip', 'rate', 'foreign', 'special'],
    }),
)
  .openapi({ description: 'Substitute payment in lieu of dividend' })
  .openapi('DIVSPDActivityV2')

const CDIVActivityV2Schema: z.ZodType<CDIVActivityV2Type> = z
  .lazy(() =>
    CommonCaActivityV2Schema.and(CommonCDIVActivityV2Schema)
      .and(
        z
          .object({
            cash_payout: z.string().openapi({ description: 'Total cash amount paid' }),
            entitled_qty: z
              .string()
              .openapi({
                description:
                  'Quantity of shares entitled to receive the dividend or return of capital',
              }),
          })
          .openapi({ required: ['entitled_qty', 'cash_payout'] }),
      )
      .openapi({
        description:
          'Cash-dividend related details. Used for both Cash Dividend and Return of Capital.',
      }),
  )
  .openapi('CDIVActivityV2')

const SDIVActivityV2Schema: z.ZodType<SDIVActivityV2Type> = z
  .lazy(() =>
    CommonCaActivityV2Schema.and(CommonSDIVActivityV2Schema)
      .and(
        z
          .object({
            entitled_qty: z
              .string()
              .openapi({ description: 'Quantity of shares entitled to receive the dividend' }),
            new_qty: z
              .string()
              .openapi({ description: 'The total number of shares after the dividend' }),
            paid_qty: z.string().openapi({ description: 'The paid quantity' }),
          })
          .openapi({ required: ['entitled_qty', 'paid_qty', 'new_qty'] }),
      )
      .openapi({ description: 'Stock dividend' }),
  )
  .openapi('SDIVActivityV2')

const CGDActivityV2Schema = CommonCaActivityV2Schema.and(
  z
    .object({
      cash_payout: z.string().openapi({ description: 'Cash amount paid for this leg' }),
      cusip: z
        .string()
        .openapi({ description: 'The CUSIP of the security involved with the activity' }),
      entitled_qty: z
        .string()
        .openapi({
          description: 'Quantity of shares entitled to receive the capital gains distribution',
        }),
      ex_date: z.iso
        .date()
        .min(1)
        .exactOptional()
        .openapi({ description: 'The ex_date for this corporate action' }),
      isin: z
        .string()
        .exactOptional()
        .openapi({ description: 'The ISIN of the security involved with the activity' }),
      long_term_rate: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Long-term capital gains distribution rate per share, when applicable',
        }),
      payable_date: z.iso
        .date()
        .min(1)
        .exactOptional()
        .openapi({ description: 'The payable_date for this corporate action' }),
      rate: z
        .string()
        .openapi({ description: 'Distribution rate per share for this leg (LTCG or STCG)' }),
      record_date: z.iso
        .date()
        .min(1)
        .exactOptional()
        .openapi({ description: 'The record_date for this corporate action' }),
      short_term_rate: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Short-term capital gains distribution rate per share, when applicable',
        }),
      symbol: z
        .string()
        .openapi({ description: 'The symbol of the security involved with the activity' }),
    })
    .openapi({ required: ['entitled_qty', 'cash_payout', 'symbol', 'cusip', 'rate'] }),
)
  .openapi({
    description:
      "Capital gains distribution. Used for both Long-Term (LTCG) and Short-Term (STCG) sub-types. Each activity represents a single leg; `long_term_rate` and/or `short_term_rate` are populated based on the source event, and `rate` matches the leg's own rate.",
  })
  .openapi('CGDActivityV2')

const CommonSplitActivityV2Schema = z
  .object({
    new_cusip: z.string().openapi({ description: 'CUSIP of the new security after the split' }),
    new_isin: z
      .string()
      .exactOptional()
      .openapi({ description: 'ISIN of the new security after the split' }),
    new_rate: z.string().openapi({ description: 'Ratio of new shares received' }),
    old_cusip: z.string().openapi({ description: 'CUSIP of the old security before the split' }),
    old_isin: z
      .string()
      .exactOptional()
      .openapi({ description: 'ISIN of the old security before the split' }),
    old_rate: z.string().openapi({ description: 'Ratio of old shares exchanged' }),
    payable_date: z.iso
      .date()
      .min(1)
      .exactOptional()
      .openapi({ description: 'The payable_date for this corporate action' }),
  })
  .openapi({ required: ['old_cusip', 'new_cusip', 'old_rate', 'new_rate'] })
  .openapi('CommonSplitActivityV2')

const CommonSplitStockActivityV2Schema = CommonCaActivityV2Schema.and(CommonSplitActivityV2Schema)
  .and(
    z
      .object({
        new_qty: z.string().openapi({ description: 'The new quantity after the split' }),
        old_qty: z.string().openapi({ description: 'The old quantity before the split' }),
      })
      .openapi({ required: ['old_qty', 'new_qty'] }),
  )
  .openapi('CommonSplitStockActivityV2')

const ForwardSplitActivityV2Schema = CommonSplitStockActivityV2Schema.and(
  z
    .object({
      due_bill_redemption_date: z.iso
        .date()
        .min(1)
        .exactOptional()
        .openapi({ description: 'When due bills related to the split are redeemed' }),
      ex_date: z.iso
        .date()
        .min(1)
        .exactOptional()
        .openapi({ description: 'The ex_date for this corporate action' }),
      record_date: z.iso
        .date()
        .min(1)
        .exactOptional()
        .openapi({ description: 'The record_date for this corporate action' }),
      symbol: z.string().openapi({ description: 'The symbol of the security being split' }),
    })
    .openapi({ required: ['symbol'] }),
)
  .openapi({ description: 'Forward stock split' })
  .openapi('ForwardSplitActivityV2')

const ReverseSplitActivityV2Schema = CommonSplitStockActivityV2Schema.and(
  z
    .object({
      ex_date: z.iso
        .date()
        .min(1)
        .exactOptional()
        .openapi({ description: 'The ex_date for this corporate action' }),
      new_symbol: z
        .string()
        .exactOptional()
        .openapi({ description: 'Symbol of the new security after the split' }),
      record_date: z.iso
        .date()
        .min(1)
        .exactOptional()
        .openapi({ description: 'The record_date for this corporate action' }),
      symbol: z
        .string()
        .openapi({ description: 'The symbol of the security involved with the activity' }),
    })
    .openapi({ required: ['symbol'] }),
)
  .openapi({ description: 'Reverse stock split' })
  .openapi('ReverseSplitActivityV2')

const UnitSplitActivityV2Schema = CommonSplitStockActivityV2Schema.and(
  z
    .object({
      alternate_cusip: z
        .string()
        .openapi({ description: 'CUSIP for the alternate security after the split' }),
      alternate_isin: z
        .string()
        .exactOptional()
        .openapi({ description: 'ISIN for the alternate security after the split' }),
      alternate_qty: z.string().openapi({ description: 'Quantity of alternate shares received' }),
      alternate_rate: z.string().openapi({ description: 'Ratio of alternate shares received' }),
      alternate_symbol: z
        .string()
        .openapi({ description: 'Symbol for the alternate security after the split' }),
      effective_date: z.iso
        .date()
        .min(1)
        .openapi({ description: 'When the unit split becomes effective' }),
      new_symbol: z.string().openapi({ description: 'Symbol of the new security after the split' }),
      old_symbol: z
        .string()
        .openapi({ description: 'Symbol of the old security before the split' }),
    })
    .openapi({
      required: [
        'old_symbol',
        'new_symbol',
        'alternate_cusip',
        'alternate_symbol',
        'alternate_rate',
        'alternate_qty',
        'effective_date',
      ],
    }),
)
  .openapi({ description: 'Unit split' })
  .openapi('UnitSplitActivityV2')

const SpinoffActivityV2Schema: z.ZodType<SpinoffActivityV2Type> = z
  .lazy(() =>
    CommonCaActivityV2Schema.and(CommonSpinoffActivityV2Schema)
      .and(
        z
          .object({
            new_qty: z.string().openapi({ description: 'The new quantity' }),
            source_qty: z.string().openapi({ description: 'The source quantity' }),
          })
          .openapi({ required: ['source_qty', 'new_qty'] }),
      )
      .openapi({ description: 'Spinoff' }),
  )
  .openapi('SpinoffActivityV2')

const MAActivityV2Schema: z.ZodType<MAActivityV2Type> = z
  .lazy(() =>
    CommonCaActivityV2Schema.and(CommonMAActivityV2Schema)
      .and(
        z
          .object({
            acquiree_qty: z.string().openapi({ description: 'Quantity of the acquiree' }),
            acquirer_qty: z
              .string()
              .exactOptional()
              .openapi({ description: 'Quantity of the acquirer' }),
            cash_payout: z.string().exactOptional().openapi({ description: 'The cash payout' }),
            cash_rate: z.string().exactOptional().openapi({ description: 'The cash rate' }),
          })
          .openapi({ required: ['acquiree_qty'] }),
      )
      .openapi({ description: 'Merger and acquisition' }),
  )
  .openapi('MAActivityV2')

const NCActivityV2Schema: z.ZodType<NCActivityV2Type> = z
  .lazy(() =>
    CommonCaActivityV2Schema.and(CommonNCActivityV2Schema)
      .and(
        z
          .object({ position_qty: z.string().openapi({ description: 'The position quantity' }) })
          .openapi({ required: ['position_qty'] }),
      )
      .openapi({ description: 'Name change' }),
  )
  .openapi('NCActivityV2')

const FixedIncomeRedemptionActivityV2Schema = CommonNTAActivityV2Schema.and(
  z
    .object({
      ca_id: z.string().openapi({ description: 'The unique identifier for this corporate action' }),
      cash_payout: z.string().openapi({ description: 'The cash payout' }),
      cusip: z
        .string()
        .openapi({ description: 'The CUSIP of the security involved with the activity' }),
      payment_date: z.iso.date().min(1).openapi({ description: 'The payment date' }),
      qty: z.string().openapi({ description: 'Quantity for the redemption' }),
    })
    .openapi({ required: ['ca_id', 'payment_date', 'cusip', 'qty', 'cash_payout'] }),
)
  .openapi({ description: 'Redemption' })
  .openapi('FixedIncomeRedemptionActivityV2')

const FixedIncomeInterestActivityV2Schema: z.ZodType<FixedIncomeInterestActivityV2Type> = z
  .lazy(() =>
    CommonCaActivityV2Schema.and(CommonFixedIncomeInterestActivityV2Schema).openapi({
      description: 'Fixed income interest (INT/FI)',
    }),
  )
  .openapi('FixedIncomeInterestActivityV2')

const REOActivityV2Schema: z.ZodType<REOActivityV2Type> = z
  .lazy(() =>
    CommonCaActivityV2Schema.and(CommonREOActivityV2Schema).openapi({
      description: 'Reorganization (REO)',
    }),
  )
  .openapi('REOActivityV2')

const RightsDistributionActivityV2Schema = CommonCaActivityV2Schema.and(
  z
    .object({
      ex_date: z.iso
        .date()
        .min(1)
        .exactOptional()
        .openapi({ description: 'The ex_date for this corporate action' }),
      expiration_date: z.iso
        .date()
        .exactOptional()
        .openapi({ description: 'The expiration date for the rights distribution' }),
      new_cusip: z.string().openapi({ description: 'The new CUSIP' }),
      new_qty: z.string().openapi({ description: 'The new quantity' }),
      new_symbol: z.string().openapi({ description: 'The new symbol' }),
      payable_date: z.iso
        .date()
        .min(1)
        .exactOptional()
        .openapi({ description: 'The payable_date for this corporate action' }),
      rate: z.string().openapi({ description: 'The rate for the rights distribution' }),
      record_date: z.iso
        .date()
        .min(1)
        .exactOptional()
        .openapi({ description: 'The record_date for this corporate action' }),
      source_cusip: z.string().openapi({ description: 'The source CUSIP' }),
      source_qty: z.string().openapi({ description: 'The source quantity' }),
      source_symbol: z.string().openapi({ description: 'The source symbol' }),
    })
    .openapi({
      required: [
        'source_cusip',
        'source_symbol',
        'source_qty',
        'new_cusip',
        'new_symbol',
        'new_qty',
        'rate',
      ],
    }),
)
  .openapi({ description: 'Rights distribution' })
  .openapi('RightsDistributionActivityV2')

const CommonVOFSubtypeActivityV2Schema = z
  .object({
    new_cusip: z.string().exactOptional().openapi({ description: 'CUSIP of the new security' }),
    new_symbol: z.string().exactOptional().openapi({ description: 'Symbol of the new security' }),
    source_cusip: z.string().openapi({ description: 'CUSIP of the parent security' }),
    source_symbol: z.string().openapi({ description: 'Symbol of the parent security' }),
  })
  .openapi({ required: ['source_cusip', 'source_symbol'] })
  .openapi('CommonVOFSubtypeActivityV2')

const RightsSubscriptionElectionActivityV2Schema = CommonNTAActivityV2Schema.and(
  CommonVOFSubtypeActivityV2Schema,
).openapi('RightsSubscriptionElectionActivityV2')

const TenderOfferActivityV2Schema = CommonNTAActivityV2Schema.and(
  CommonVOFSubtypeActivityV2Schema,
).openapi('TenderOfferActivityV2')

const ExchangeOfferActivityV2Schema = CommonNTAActivityV2Schema.and(
  CommonVOFSubtypeActivityV2Schema,
).openapi('ExchangeOfferActivityV2')

const WarrantExerciseElectionActivityV2Schema = CommonNTAActivityV2Schema.and(
  CommonVOFSubtypeActivityV2Schema,
).openapi('WarrantExerciseElectionActivityV2')

const WRMActivityV2Schema = CommonCaActivityV2Schema.and(
  z
    .object({
      cusip: z
        .string()
        .openapi({ description: 'The CUSIP of the security involved with the activity' }),
      isin: z
        .string()
        .exactOptional()
        .openapi({ description: 'The ISIN of the security involved with the activity' }),
      removed_qty: z.string().openapi({ description: 'The removed quantity' }),
      symbol: z
        .string()
        .openapi({ description: 'The symbol of the security involved with the activity' }),
    })
    .openapi({ required: ['cusip', 'symbol', 'removed_qty'] }),
)
  .openapi({ description: 'Worthless Removal' })
  .openapi('WRMActivityV2')

const CommonOPCAActivityV2Schema = CommonCaActivityV2Schema.and(
  z
    .object({
      new_contract_symbol: z.string().openapi({ description: 'The new contract symbol' }),
      new_qty: z
        .string()
        .exactOptional()
        .openapi({
          description:
            "used when the old contract's quantity is not equal to the new contract's quantity. Mutually exclusive with 'qty'.",
        }),
      old_contract_symbol: z.string().openapi({ description: 'The old contract symbol' }),
      old_qty: z
        .string()
        .exactOptional()
        .openapi({
          description:
            "used when the old contract's quantity is not equal to the new contract's quantity. Mutually exclusive with 'qty'.",
        }),
      qty: z
        .string()
        .exactOptional()
        .openapi({
          description:
            "used when the old contract's quantity is equal to the new contract's quantity. Mutually exclusive with 'old_qty' and 'new_qty'",
        }),
    })
    .openapi({ required: ['old_contract_symbol', 'new_contract_symbol'] }),
).openapi('CommonOPCAActivityV2')

const OpcaCDIVActivityV2Schema = CommonOPCAActivityV2Schema.and(CommonCDIVActivityV2Schema)
  .openapi({ description: 'Options corporate action of cash dividend or return of capital' })
  .openapi('OpcaCDIVActivityV2')

const OpcaSDIVActivityV2Schema = CommonOPCAActivityV2Schema.and(CommonSDIVActivityV2Schema)
  .openapi({ description: 'Options corporate action of stock dividend' })
  .openapi('OpcaSDIVActivityV2')

const OpcaMAActivityV2Schema = CommonOPCAActivityV2Schema.and(CommonMAActivityV2Schema)
  .openapi({ description: 'Options corporate action of Mergers & Acquisitions' })
  .openapi('OpcaMAActivityV2')

const OpcaNCActivityV2Schema = CommonOPCAActivityV2Schema.and(CommonNCActivityV2Schema)
  .openapi({ description: 'Options corporate action of name changes' })
  .openapi('OpcaNCActivityV2')

const OpcaSPINActivityV2Schema = CommonOPCAActivityV2Schema.and(CommonSpinoffActivityV2Schema)
  .openapi({ description: 'Options corporate action of spin-offs' })
  .openapi('OpcaSPINActivityV2')

const OpcaFSPLITActivityV2Schema = CommonOPCAActivityV2Schema.and(CommonSplitActivityV2Schema)
  .and(
    z
      .object({
        due_bill_redemption_date: z.iso
          .date()
          .min(1)
          .exactOptional()
          .openapi({ description: 'When due bills related to the split are redeemed' }),
        ex_date: z.iso
          .date()
          .min(1)
          .exactOptional()
          .openapi({ description: 'The ex_date for this corporate action' }),
        record_date: z.iso
          .date()
          .min(1)
          .exactOptional()
          .openapi({ description: 'The record_date for this corporate action' }),
        symbol: z
          .string()
          .openapi({ description: 'The symbol of the security involved with the activity' }),
      })
      .openapi({ required: ['symbol'] }),
  )
  .openapi({ description: 'Options corporate action of forward-splits' })
  .openapi('OpcaFSPLITActivityV2')

const OpcaRSPLITActivityV2Schema = CommonOPCAActivityV2Schema.and(CommonSplitActivityV2Schema)
  .and(
    z
      .object({
        ex_date: z.iso
          .date()
          .min(1)
          .exactOptional()
          .openapi({ description: 'The ex_date for this corporate action' }),
        new_symbol: z
          .string()
          .exactOptional()
          .openapi({ description: 'Symbol of the new security after the split' }),
        record_date: z.iso
          .date()
          .min(1)
          .exactOptional()
          .openapi({ description: 'The record_date for this corporate action' }),
        symbol: z
          .string()
          .openapi({ description: 'The symbol of the security involved with the activity' }),
      })
      .openapi({ required: ['symbol'] }),
  )
  .openapi({ description: 'Options corporate action of reverse-splits' })
  .openapi('OpcaRSPLITActivityV2')

const OpcaUSPLITActivityV2Schema = CommonOPCAActivityV2Schema.and(CommonSplitActivityV2Schema)
  .and(
    z
      .object({
        alternate_cusip: z
          .string()
          .openapi({ description: 'CUSIP for the alternate security after the split' }),
        alternate_rate: z.string().openapi({ description: 'Ratio of alternate shares received' }),
        alternate_symbol: z
          .string()
          .openapi({ description: 'Symbol for the alternate security after the split' }),
        effective_date: z.iso
          .date()
          .min(1)
          .openapi({ description: 'When the unit split becomes effective' }),
        new_symbol: z
          .string()
          .openapi({ description: 'Symbol of the new security after the unit split' }),
        old_symbol: z
          .string()
          .openapi({ description: 'The old symbol of the security involved with the activity' }),
      })
      .openapi({
        required: [
          'old_symbol',
          'new_symbol',
          'alternate_cusip',
          'alternate_symbol',
          'alternate_rate',
          'effective_date',
        ],
      }),
  )
  .openapi({ description: 'Options corporate action of unit-splits' })
  .openapi('OpcaUSPLITActivityV2')

const CommonOptionsActivityV2Schema = z
  .object({
    contract_symbol: z
      .string()
      .exactOptional()
      .openapi({ description: 'The contract symbol of the security involved with the activity' }),
    cusip: z
      .string()
      .exactOptional()
      .openapi({ description: 'The CUSIP of the security involved with the activity' }),
    symbol: z
      .string()
      .exactOptional()
      .openapi({ description: 'The symbol of the security involved with the activity' }),
  })
  .openapi({
    description: 'Shared fields for option-related non-trade activity records.',
    required: ['group_id'],
  })
  .and(CommonNTAActivityV2Schema)
  .openapi('CommonOptionsActivityV2')

const OPASNActivityV2Schema = CommonOptionsActivityV2Schema.and(z.object({}))
  .openapi({ description: 'Option assignment' })
  .openapi('OPASNActivityV2')

const OPEXCActivityV2Schema = CommonOptionsActivityV2Schema.and(z.object({}))
  .openapi({ description: 'Option exercise' })
  .openapi('OPEXCActivityV2')

const OPEXPActivityV2Schema = CommonOptionsActivityV2Schema.and(z.object({}))
  .openapi({ description: 'Option expiry' })
  .openapi('OPEXPActivityV2')

const OPTRDActivityV2Schema = CommonOptionsActivityV2Schema.and(z.object({}))
  .openapi({ description: 'Trading activity that is paired with the assignment/exercise' })
  .openapi('OPTRDActivityV2')

const OPCSHActivityV2Schema = CommonOptionsActivityV2Schema.and(z.object({}))
  .openapi({ description: 'Option cash deliverable for non-standard contracts' })
  .openapi('OPCSHActivityV2')

const FOPTActivityV2Schema = CommonNTAActivityV2Schema.and(
  z
    .object({
      contra: z.string().openapi({ description: 'Contra for the transfer' }),
      external_id: z.string().openapi({ description: 'External ID of the transfer' }),
      symbol: z
        .string()
        .openapi({ description: 'The symbol of the security involved with the activity' }),
    })
    .openapi({ required: ['external_id', 'contra', 'symbol'] }),
)
  .openapi({ description: 'Free-of-payment (FOP) transfers' })
  .openapi('FOPTActivityV2')

const DIVNRAActivityV2Schema = CommonNTAActivityV2Schema.and(
  z
    .object({
      cusip: z
        .string()
        .openapi({ description: 'The CUSIP of the security involved with the activity' }),
      parent_id: z.uuid().openapi({ description: 'The ref_id of the parent dividend' }),
      symbol: z
        .string()
        .openapi({ description: 'The symbol of the security involved with the activity' }),
      tax_country: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Tax country used as the primary jurisdiction when determining withholding treatment for the dividend. Other factors may affect the final withholding rate.\nThe value is an [ISO 3166-1 alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code.\n',
          example: 'THA',
        }),
      tax_rate: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'The tax withholding rate applied to the dividend, represented as a value between 0 and 1',
          example: '0.15',
        }),
    })
    .openapi({ required: ['cusip', 'symbol', 'parent_id'] }),
)
  .openapi({ description: 'Dividend withholding for non resident aliens' })
  .openapi('DIVNRAActivityV2')

const DIVWHActivityV2Schema = CommonNTAActivityV2Schema.and(
  z
    .object({
      cusip: z
        .string()
        .openapi({ description: 'The CUSIP of the security involved with the activity' }),
      isin: z
        .string()
        .exactOptional()
        .openapi({ description: 'The ISIN of the security involved with the activity' }),
      parent_id: z.uuid().openapi({ description: 'The ref_id of the parent dividend' }),
      symbol: z
        .string()
        .openapi({ description: 'The symbol of the security involved with the activity' }),
    })
    .openapi({ required: ['cusip', 'symbol', 'parent_id'] }),
)
  .openapi({
    description: 'Dividend tax withholding (e.g. foreign withholding on global securities)',
  })
  .openapi('DIVWHActivityV2')

const CommonJournalActivityV2Schema = CommonNTAActivityV2Schema.and(
  z
    .object({ journal_id: z.uuid().exactOptional().openapi({ description: "The journal's ID" }) })
    .openapi({ required: [] }),
)
  .openapi({ description: 'Shared fields for journal non-trade activity records.' })
  .openapi('CommonJournalActivityV2')

const JNLSActivityV2Schema = CommonJournalActivityV2Schema.and(
  z
    .object({
      issuer: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Issuer of the tokenized asset, on tokenization mint and redeem journals (`activity_subtype` `ITNJ`). Same value as `issuer` on the related tokenization request. Omitted for other journals and for journals booked before this field was added.',
          example: 'xstocks',
        }),
      symbol: z
        .string()
        .openapi({ description: 'The symbol of the security involved with the activity' }),
    })
    .openapi({ required: ['symbol'] }),
)
  .openapi({ description: 'Journal entry (stock)' })
  .openapi('JNLSActivityV2')

const JNLCActivityV2Schema = CommonJournalActivityV2Schema.and(z.object({}))
  .openapi({ description: 'Journal entry (cash)' })
  .openapi('JNLCActivityV2')

const CSWActivityV2Schema = CommonNTAActivityV2Schema.and(
  z
    .object({
      bank_transaction_id: z
        .uuid()
        .exactOptional()
        .openapi({ description: "The bank transaction's ID" }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'Cash withdrawal' })
  .openapi('CSWActivityV2')

const FEEActivityV2Schema = CommonNTAActivityV2Schema.and(
  z
    .object({
      execution_id: z
        .uuid()
        .exactOptional()
        .openapi({
          description:
            'Execution ID. Present only for activity subtype FOT, and only when the fee has one.',
        }),
      order_id: z
        .uuid()
        .exactOptional()
        .openapi({
          description:
            'Order ID. Present only for activity subtype FOT, and only when the fee has one.',
        }),
      parent_id: z
        .uuid()
        .exactOptional()
        .openapi({
          description:
            "The parent transaction's ID. Present for fees with a one-to-one relationship to a parent trade (e.g. COM). Omitted for volume-based or bulk fees charged across multiple trades for a period (e.g. REG, TAF, CAT, ORF, NRV, NRC, BSWP) and for LOC fees that are not linked to a parent transaction.",
        }),
      swap_rate: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Exchange rate on the fee. Sent when the fee has a non-zero rate.',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'Fee' })
  .openapi('FEEActivityV2')

const MEMActivityV2Schema = CommonNTAActivityV2Schema.and(
  z
    .object({ transfer_id: z.uuid().openapi({ description: "The transfer's ID" }) })
    .openapi({ required: ['transfer_id'] }),
)
  .openapi({ description: 'Instant funding memopost' })
  .openapi('MEMActivityV2')

const OCTActivityV2Schema = CommonNTAActivityV2Schema.and(
  z
    .object({
      symbol: z
        .string()
        .openapi({ description: 'The symbol of the asset involved with the on chain transaction' }),
      transfer_id: z
        .uuid()
        .openapi({ description: 'The transfer ID of the associated deposit or withdrawal' }),
    })
    .openapi({ required: ['transfer_id', 'symbol'] }),
)
  .openapi({ description: 'On chain transaction (blockchain deposit/withdrawal)' })
  .openapi('OCTActivityV2')

const FXTRDActivityV2Schema = CommonNTAActivityV2Schema.and(
  z
    .object({
      order_id: z
        .uuid()
        .exactOptional()
        .openapi({ description: 'Order ID of the conversion, when the activity has one.' }),
      swap_rate: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Exchange rate of the conversion. Sent when the activity has a non-zero rate.',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'Currency conversion.' })
  .openapi('FXTRDActivityV2')

const ActivityV2DetailNTASchema = z
  .xor([
    DIVSPDActivityV2Schema,
    CDIVActivityV2Schema,
    SDIVActivityV2Schema,
    CGDActivityV2Schema,
    ForwardSplitActivityV2Schema,
    ReverseSplitActivityV2Schema,
    UnitSplitActivityV2Schema,
    SpinoffActivityV2Schema,
    MAActivityV2Schema,
    NCActivityV2Schema,
    FixedIncomeRedemptionActivityV2Schema,
    FixedIncomeInterestActivityV2Schema,
    REOActivityV2Schema,
    RightsDistributionActivityV2Schema,
    RightsSubscriptionElectionActivityV2Schema,
    TenderOfferActivityV2Schema,
    ExchangeOfferActivityV2Schema,
    WarrantExerciseElectionActivityV2Schema,
    WRMActivityV2Schema,
    OpcaCDIVActivityV2Schema,
    OpcaSDIVActivityV2Schema,
    OpcaMAActivityV2Schema,
    OpcaNCActivityV2Schema,
    OpcaSPINActivityV2Schema,
    OpcaFSPLITActivityV2Schema,
    OpcaRSPLITActivityV2Schema,
    OpcaUSPLITActivityV2Schema,
    OPASNActivityV2Schema,
    OPEXCActivityV2Schema,
    OPEXPActivityV2Schema,
    OPTRDActivityV2Schema,
    OPCSHActivityV2Schema,
    AcatsActivityV2Schema,
    AcatcActivityV2Schema,
    FOPTActivityV2Schema,
    DIVNRAActivityV2Schema,
    DIVWHActivityV2Schema,
    JNLSActivityV2Schema,
    JNLCActivityV2Schema,
    CSWActivityV2Schema,
    FEEActivityV2Schema,
    MEMActivityV2Schema,
    OCTActivityV2Schema,
    FXTRDActivityV2Schema,
  ])
  .openapi('ActivityV2DetailNTA')

const ActivityEventV2Schema = ActivityEventV2CommonFieldsSchema.and(
  z
    .object({ details: z.xor([ActivityV2DetailTRDSchema, ActivityV2DetailNTASchema]) })
    .openapi({ required: ['details'] }),
)
  .openapi({
    description: 'Represents an account activity, sent over the Event Streaming API.',
    title: 'ActivityEventV2',
  })
  .openapi('ActivityEventV2')

const AdminActionBelongsToKindSchema = z
  .enum(['account', 'owner', 'correspondent'])
  .openapi('AdminActionBelongsToKind')

const AdminActionBelongsToSchema = z
  .object({
    id_reference: z.string().exactOptional(),
    kind: AdminActionBelongsToKindSchema.exactOptional(),
  })
  .openapi({
    description: 'Represents structure of an Identifier for all AdminAction type',
    title: 'AdminActionBelongsTo',
    required: [],
  })
  .openapi('AdminActionBelongsTo')

const AdminActionCategorySchema = z
  .enum(['accounts', 'order', 'other', 'acats'])
  .openapi({ description: 'Category of the Admin Action' })
  .openapi('AdminActionCategory')

const AdminActionCreatedByKindSchema = z
  .enum(['admin', 'service'])
  .openapi('AdminActionCreatedByKind')

const AdminActionCreatedBySchema = z
  .object({
    id_reference: z.string().exactOptional(),
    kind: AdminActionCreatedByKindSchema.exactOptional(),
  })
  .openapi({
    description: "Represents structure of an Creator's Identifier for all AdminAction type\n",
    title: 'AdminActionCreatedBy',
    required: [],
  })
  .openapi('AdminActionCreatedBy')

const AdminActionTypeSchema = z
  .enum([
    'liquidation_admin_event',
    'legacy_note_admin_event',
    'note_admin_event',
    'transaction_cancel_admin_event',
    'acats_status_admin_event',
  ])
  .openapi({ description: 'Type of the Admin Action' })
  .openapi('AdminActionType')

const AdminActionVisibilitySchema = z
  .enum(['internal', 'external', 'correspondent_only'])
  .openapi({ description: 'Visibility of the Admin Action' })
  .openapi('AdminActionVisibility')

const AdminActionEventGeneralSchema = z
  .object({
    at: z.iso.datetime({ offset: true }).openapi({ description: 'Timestamp of event' }),
    belongs_to: z
      .any()
      .openapi({
        deprecated: true,
        description:
          '**Deprecation notice:**\nNever sent by the stream. Use belongs_to_kind and belongs_to_id_reference instead.\n\nSince: 2026-09-30\nSunset: 2027-01-13\n\n---\n\nDeprecated. Not sent by the stream; use `belongs_to_kind` and `belongs_to_id_reference` instead.',
        'x-deprecation': {
          reason:
            'Never sent by the stream. Use belongs_to_kind and belongs_to_id_reference instead.',
          since: '2026-09-30',
          sunset: '2027-01-13',
        },
      })
      .and(AdminActionBelongsToSchema)
      .exactOptional(),
    belongs_to_id_reference: z
      .string()
      .openapi({ description: 'The ID of the entity that this event belongs to' }),
    belongs_to_kind: AdminActionBelongsToKindSchema,
    category: AdminActionCategorySchema,
    correspondent: z.string().openapi({ description: 'Related correspondent' }),
    created_by: z
      .any()
      .openapi({
        deprecated: true,
        description:
          '**Deprecation notice:**\nNever sent by the stream. Use created_by_kind and created_by_id_reference instead.\n\nSince: 2026-09-30\nSunset: 2027-01-13\n\n---\n\nDeprecated. Not sent by the stream; use `created_by_kind` and `created_by_id_reference` instead.',
        'x-deprecation': {
          reason:
            'Never sent by the stream. Use created_by_kind and created_by_id_reference instead.',
          since: '2026-09-30',
          sunset: '2027-01-13',
        },
      })
      .and(AdminActionCreatedBySchema)
      .exactOptional(),
    created_by_id_reference: z
      .string()
      .openapi({ description: 'The ID of the entity that created this event' }),
    created_by_kind: AdminActionCreatedByKindSchema,
    event_id: z
      .ulid()
      .openapi({ description: 'Lexically sortable, monotonically increasing character array' }),
    note: z.string().openapi({ description: 'Free text form description of the admin action' }),
    replaces_event_id: z
      .ulid()
      .exactOptional()
      .openapi({ description: 'Id of the replaced event (optional)' }),
    type: AdminActionTypeSchema,
    visibility: AdminActionVisibilitySchema,
  })
  .openapi({
    description: 'Represents general fields for all AdminAction type',
    required: [
      'event_id',
      'at',
      'belongs_to_kind',
      'belongs_to_id_reference',
      'created_by_kind',
      'created_by_id_reference',
      'type',
      'category',
      'visibility',
      'note',
      'correspondent',
    ],
    title: 'AdminActionEvent',
  })
  .openapi('AdminActionEventGeneral')

const AdminActionAcatsTransferDirectionSchema = z
  .enum(['INCOMING', 'OUTGOING', 'UNSPECIFIED'])
  .openapi({
    description:
      'Direction of the ACATS transfer. `UNSPECIFIED` is sent when the direction is not known; use the ACATS endpoints to get the transfer direction.',
  })
  .openapi('AdminActionAcatsTransferDirection')

const AdminActionAcatsTransferTypeSchema = z
  .enum(['FULL', 'PARTIAL', 'RCR', 'UNSPECIFIED'])
  .openapi({
    description:
      'Type of the ACATS transfer. Note this is a simplified classification and differs from the DTCC transfer type code (`FUL`, `PTR`, ...) returned as `transfer_type` by the ACATS endpoints. `UNSPECIFIED` is sent when the type is not known or does not map to one of the other values; use the ACATS endpoints to get the DTCC transfer type.',
  })
  .openapi('AdminActionAcatsTransferType')

const AdminActionAcatsStatusDetailsSchema = z
  .object({
    broker_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the contra broker. Omitted if not available.' }),
    broker_number: z
      .string()
      .exactOptional()
      .openapi({
        description: 'DTCC participant number of the contra broker. Omitted if not available.',
      }),
    dtcc_reject_reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Rejection reason, as returned by DTCC. Omitted if the transfer has not been rejected by DTCC. Uses the same values as `rejection_details.rejection_reason` on the ACATS transfer; DTCC system rejections may carry additional DTCC system reject reason codes, so treat unknown values as a generic rejection. May already be present on an `IN_PROGRESS` event, before the transfer is marked `REJECTED`.',
        example: 'ACCOUNT_TITLE_MISMATCH',
      }),
    dtcc_status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Transfer status as tracked by DTCC. Omitted until DTCC reports a status for the transfer. Usually one of the values of `status.dtcc_status` on the ACATS transfer; other values may appear, for example in sandbox, so treat unknown values as an intermediate status.',
        example: 'REVIEW',
      }),
    rejection_message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Human readable message regarding the reason for the rejection. Omitted if not available.',
      }),
    transfer_direction: AdminActionAcatsTransferDirectionSchema,
    transfer_status: z
      .string()
      .openapi({
        description:
          'Transfer status as tracked by Alpaca. Usually one of `PENDING`, `IN_PROGRESS`, `REJECTED` or `SETTLED`, matching `status.transfer_status` on the ACATS transfer. Other values may appear in some cases, so treat unknown values as still in progress and use the ACATS endpoints for the current state.',
        example: 'IN_PROGRESS',
      }),
    transfer_type: AdminActionAcatsTransferTypeSchema,
  })
  .openapi({
    description: 'Status details of the ACATS transfer at the time of the event.',
    required: ['transfer_status', 'transfer_type', 'transfer_direction'],
  })
  .openapi('AdminActionAcatsStatusDetails')

const AdminActionAcatsStatusSchema = AdminActionEventGeneralSchema.and(
  z
    .object({
      context: z
        .object({
          acats_id: z.uuid().openapi({ description: 'The ID of the ACATS transfer' }),
          status_details: AdminActionAcatsStatusDetailsSchema,
          transfer_identifier: z
            .string()
            .openapi({
              description:
                'The ACATS control number (identifier) from the DTCC system. Empty until the transfer has been submitted to and acknowledged by DTCC, for example while the transfer is `PENDING`.',
            }),
        })
        .openapi({
          description: 'Variable schema type which depends on the type',
          required: ['acats_id', 'transfer_identifier', 'status_details'],
        }),
      type: z
        .literal('acats_status_admin_event')
        .exactOptional()
        .openapi({ description: 'ACATS status discriminator value.' }),
    })
    .openapi({ required: ['context'], title: 'AdminActionContextAcatsStatus' }),
)
  .openapi({
    description:
      'Represents structure of an AcatsStatus type AdminAction.\n\nSent for ACATS transfers on accounts of correspondents with ACATS API access, whenever the transfer changes state: when the transfer is created (`PENDING`), when it is approved and submitted to DTCC (`IN_PROGRESS`), on each subsequent DTCC status change, and when it is `REJECTED` or `SETTLED`. Sent for both incoming and outgoing transfers, including transfers not initiated through the ACATS API.\n\nThe same status may be delivered more than once for a transfer. Use `context.acats_id` to correlate events with the transfer returned by the ACATS endpoints.\n',
    example: {
      at: '2026-09-29T14:03:12.123456Z',
      belongs_to_id_reference: 'dfb80abb-7f52-35bd-b820-cad7e3edafec',
      belongs_to_kind: 'account',
      category: 'acats',
      context: {
        acats_id: '635e4b4a-baea-4b4d-a47e-406f3a9c6667',
        status_details: {
          broker_name: 'Example Brokerage Inc.',
          broker_number: '0001',
          dtcc_reject_reason: 'ACCOUNT_TITLE_MISMATCH',
          dtcc_status: 'REJECT',
          rejection_message: 'The account title does not match the account at the contra broker.',
          transfer_direction: 'INCOMING',
          transfer_status: 'REJECTED',
          transfer_type: 'FULL',
        },
        transfer_identifier: '20262720012345',
      },
      correspondent: 'LPCA',
      created_by_id_reference: 'acats',
      created_by_kind: 'service',
      event_id: '01K6BJ3Z8Q4W2X5V7N9R0T1Y3M',
      note: '',
      type: 'acats_status_admin_event',
      visibility: 'external',
    },
  })
  .openapi('AdminActionAcatsStatus')

const AdminActionLegacyNoteSchema = AdminActionEventGeneralSchema.and(
  z
    .object({
      context: z
        .object({})
        .openapi({ description: 'Variable schema type which depends on the type' }),
      type: z
        .enum(['note_admin_event', 'legacy_note_admin_event'])
        .exactOptional()
        .openapi({
          description:
            'Admin note discriminator value. Sent as `note_admin_event`; `legacy_note_admin_event` is accepted for older events.',
        }),
    })
    .openapi({ required: ['context'], title: 'AdminActionContextLegacyNote' }),
)
  .openapi({
    description: 'Represents structure of a LegacyNote type AdminAction',
    examples: [
      {
        at: '2023-03-06T16:38:01Z',
        belongs_to_id_reference: '0bbf1dd7-4235-4eca-8b1a-0db63572c735',
        belongs_to_kind: 'account',
        category: 'other',
        context: {},
        correspondent: 'LPCA',
        created_by_id_reference: '19455a3c-595f-457f-97b3-64a2b5aeae96',
        created_by_kind: 'admin',
        event_id: '01GTVS4FVS2KJDTPYH2WM6NAXF',
        note: 'Performed action: Positions split AMZN (long): 1.011266402\n',
        type: 'note_admin_event',
        visibility: 'internal',
      },
    ],
  })
  .openapi('AdminActionLegacyNote')

const AdminActionLiquidationSchema = AdminActionEventGeneralSchema.and(
  z
    .object({
      context: z
        .object({
          available_qty: z.string().exactOptional(),
          error: z.string().exactOptional(),
          reason: z.string().exactOptional(),
          requested_qty: z.string().exactOptional(),
          symbol: z.string().exactOptional(),
        })
        .openapi({ description: 'Variable schema type which depends on the type', required: [] }),
      type: z
        .literal('liquidation_admin_event')
        .exactOptional()
        .openapi({ description: 'Liquidation discriminator value.' }),
    })
    .openapi({ required: ['context'], title: 'AdminActionContextLiquidation' }),
)
  .openapi({
    description: 'Represents structure of a Liquidation type AdminAction',
    examples: [
      {
        at: '2023-03-06T16:38:01Z',
        belongs_to_id_reference: '0bbf1dd7-4235-4eca-8b1a-0db63572c735',
        belongs_to_kind: 'account',
        category: 'accounts',
        context: {
          available_qty: '0.0001',
          error: '',
          reason: 'Liquidation due to real time risk',
          requested_qty: '0.0001',
          symbol: 'TSLA',
        },
        correspondent: 'LPCA',
        created_by_id_reference: '19455a3c-595f-457f-97b3-64a2b5aeae96',
        created_by_kind: 'admin',
        event_id: '01GTVS4FVS2KJDTPYH2WM6NAXF',
        note: 'Performed action: Position liquidated: Asset: TSLA, Quantity: 0.0001, Reason: Liquidation due to real time risk\n',
        type: 'liquidation_admin_event',
        visibility: 'external',
      },
    ],
  })
  .openapi('AdminActionLiquidation')

const AdminActionTransactionCancelSchema = AdminActionEventGeneralSchema.and(
  z
    .object({
      context: z
        .object({
          entry_type: z.string().exactOptional(),
          external_id: z.string().exactOptional(),
          transaction_id: z.uuid().exactOptional(),
        })
        .openapi({ description: 'Variable schema type which depends on the type', required: [] }),
      type: z
        .literal('transaction_cancel_admin_event')
        .exactOptional()
        .openapi({ description: 'Transaction cancel discriminator value.' }),
    })
    .openapi({ required: ['context'], title: 'AdminActionContextTransactionCancel' }),
)
  .openapi({
    description: 'Represents structure of a TransactionCancel type AdminAction',
    examples: [
      {
        at: '2023-03-06T16:38:01Z',
        belongs_to_id_reference: '0bbf1dd7-4235-4eca-8b1a-0db63572c735',
        belongs_to_kind: 'account',
        category: 'accounts',
        context: {
          entry_type: 'JNLC',
          external_id: 'd5eede2c-1c08-45df-9800-87ad5eefc11f',
          transaction_id: 'fdf18af2-142b-409e-8aad-d1731e276af0',
        },
        correspondent: 'LPCA',
        created_by_id_reference: '19455a3c-595f-457f-97b3-64a2b5aeae96',
        created_by_kind: 'admin',
        event_id: '01GTVS4FVS2KJDTPYH2WM6NAXF',
        note: '"Transaction fdf18af2-142b-409e-8aad-d1731e276af0 cancelled for LPCA-12345678\n',
        type: 'transaction_cancel_admin_event',
        visibility: 'external',
      },
    ],
  })
  .openapi('AdminActionTransactionCancel')

const AdminConfigurationsSchema = z
  .object({
    acct_daily_transfer_limit: z
      .string()
      .exactOptional()
      .openapi({ description: 'Override the correspondent level daily transfer limits' }),
    allow_instant_ach: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, the account is allowed to perform instant ACH' }),
    disable_algodash_access: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, the account is allowed to access algo dash' }),
    disable_api_key: z
      .boolean()
      .exactOptional()
      .openapi({ description: "If true, the account's API key will be disabled" }),
    disable_crypto: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, the account is not allowed to trade cryptos' }),
    disable_day_trading: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, the account is not allowed to day trade (e.g. buy and sell the same security on the same day)',
      }),
    disable_fractional: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If true, the account cannot create orders for fractional share positions',
      }),
    disable_shorting: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If true the account is not allowed to create short position orders',
      }),
    incoming_transfers_blocked: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, incoming transfers to this account are rejected' }),
    max_margin_multiplier: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The max margin multiplier set by admin for this account. Can be "1", "2", or "4".',
      }),
    max_options_trading_level: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
      .exactOptional()
      .openapi({
        description:
          'The max options trading level set by admin for this account.\n0=disabled, 1=Covered Call/Cash-Secured Put, 2=Long Call/Put, 3=Spreads/Straddles.\n',
      }),
    outgoing_transfers_blocked: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, outgoing transfers from this account are rejected' }),
    restrict_to_liquidation_reasons: RestrictToLiquidationReasonsSchema.exactOptional(),
  })
  .openapi({
    description:
      'These configurations show account properties that are overridden either by Alpaca Broker Operations or an automated process.\n\nThese values cannot be modified by the Broker Partners.\n\nThis schema represents the current, effective value of each configuration (e.g. as returned by the get trading account endpoint). For the shape of the payloads broadcast by the **events** streaming API when these values change, see [AdminConfigurationsEvent](#/components/schemas/AdminConfigurationsEvent).',
    title: 'AdminConfigurations',
    required: [],
  })
  .openapi('AdminConfigurations')

const AdvancedInstructionsSchema = z
  .object({
    algorithm: z
      .literal('DMA')
      .exactOptional()
      .openapi({
        description:
          'The advanced routing algorithm to use for the order. Only `DMA` (Direct Market Access) is supported.',
        example: 'DMA',
      }),
    destination: z
      .enum(['IEX', 'MEMX'])
      .exactOptional()
      .openapi({
        description: 'Target exchange for order execution. Required when `algorithm` is `DMA`.',
        example: 'IEX',
      }),
    display_qty: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Maximum shares displayed on the exchange at any time. Must be in round lot increments.',
        example: '100',
      }),
  })
  .openapi({
    description:
      'Advanced instructions for Direct Market Access (DMA) routing. When `algorithm` is `DMA`,\nthe order is routed directly to the exchange specified in `destination`. Note that this feature is only\navailable to partners/correspondents who have been enabled for DMA.',
    examples: [{ algorithm: 'DMA', destination: 'IEX', display_qty: '100' }],
    title: 'AdvancedInstructions',
    required: [],
  })
  .openapi('AdvancedInstructions')

const AggregatePositionResponseSchema = z
  .object({
    asset_type: AssetClassSchema.exactOptional(),
    closing_price: z
      .string()
      .exactOptional()
      .openapi({ description: 'EOD asset price per share at session close' }),
    cusip: z
      .string()
      .exactOptional()
      .openapi({ description: "Cusip (9 digits, can start with 0's)" }),
    long_market_value: z
      .string()
      .exactOptional()
      .openapi({ description: "Aggregate notional dollar amount of the partner's long positions" }),
    long_qty: z
      .string()
      .exactOptional()
      .openapi({ description: 'Aggregate number of shares that the partner is long' }),
    num_accounts: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Number of accounts that have a position in this asset (either long or short)',
      }),
    short_market_value: z
      .string()
      .exactOptional()
      .openapi({
        description: "Aggregate notional dollar amount of the partner's short positions",
      }),
    short_qty: z
      .string()
      .exactOptional()
      .openapi({ description: 'Aggregate number of shares that the partner is short' }),
    symbol: z.string().exactOptional().openapi({ description: 'Symbol of asset' }),
  })
  .openapi({
    examples: [
      {
        asset_type: 'us_equity',
        closing_price: '148.4700',
        cusip: '037833100',
        long_market_value: '148.4700',
        long_qty: '1',
        num_accounts: 1,
        short_market_value: '0',
        short_qty: '0',
        symbol: 'AAPL',
      },
    ],
    title: '',
    required: [],
  })
  .openapi('AggregatePositionResponse')

const AnnouncementCASubTypeSchema = z
  .enum([
    'cash',
    'stock',
    'merger_update',
    'merger_completion',
    'stock_split',
    'until_split',
    'reverse_split',
    'recapitalization',
    'spinoff',
  ])
  .openapi({
    description:
      'Announcements have both a type and a subtype to categorize them. This model represents the lower level abstract "sub types" of Announcement. Please see the AnnouncementCAType model for higher level descriptions of the possible types\n\nPossible values are:\n\n- from the `dividend` type:\n  - **cash**\n\n    A cash payment based on the number of shares the account holds on the record date.\n  - **stock**\n\n    A stock payment based on the number of shares the account holds on the record date.\n\n- from the `merger` type:\n  - **merger_update**\n\n    An update to the terms of an upcoming merger. This can happen any number of times before the merger is completed and can be tracked by using the id parameter.\n\n  - **merger_completion**\n\n    A final update in the terms of the merger in which the initiating_symbol will acquire the target_symbol. Any previous terms updates for this announcement will have the same id value.\n\n- from the `split` type:\n  - **stock_split**\n\n    An increase in the number of shares outstanding with a decrease in the dollar value of each share. The new_rate and old_rate parameters will be returned in order to derive the ratio of the split.\n  - **until_split**\n\n    An increase in the number of shares outstanding with a decrease in the dollar value of each share. The new_rate and old_rate parameters will be returned in order to derive the ratio of the split.\n  - **reverse_split**\n\n    A decrease in the number of shares outstanding with an increase in the dollar value of each share. The new_rate and old_rate parameters will be returned in order to derive the ratio of the split.\n  - **recapitalization**\n\n    A stock recapitalization, typically used by a company to adjust debt and equity ratios.\n\n- from the `spinoff` type:\n  - **spinoff**\n\n    A disbursement of a newly tradable security when the initiating_symbol creates the target_symbol.',
    title: '',
  })
  .openapi('AnnouncementCASubType')

const AnnouncementCATypeSchema = z
  .enum(['dividend', 'merger', 'split', 'spinoff'])
  .openapi({
    description:
      'Announcements have both a type and a subtype to categorize them. This model represents the higher level abstract "types" of Announcement. Please see the AnnouncementCASubType model for finer grain descriptions of the subtypes\n\nPossible values are:\n- dividend\n  can have `cash` and `stock` subtypes\n- merger\n  has `merger_update` and `merger_completion` sub types\n- split\n  has `stock_split`, `until_split`, `reverse_split`, and `recapitalization` sub types\n- spinoff\n  currently has only the `spinoff` subtype and thus is just this higher level category for now. A disbursement of a newly tradable security when the initiating_symbol creates the target_symbol.',
    example: 'dividend',
    title: '',
  })
  .openapi('AnnouncementCAType')

const AnnouncementSchema = z
  .object({
    ca_sub_type: AnnouncementCASubTypeSchema,
    ca_type: AnnouncementCATypeSchema,
    cash: z
      .string()
      .min(1)
      .nullable()
      .openapi({
        description:
          'The amount of cash to be paid per share held by an account on the record date.',
      }),
    corporate_action_id: z
      .string()
      .min(1)
      .openapi({
        description:
          "ID that remains consistent across all announcements for the same corporate action. Unlike 'id', this can be used to connect multiple announcements to see how the terms have changed throughout the lifecycle of the corporate action event.",
      }),
    declaration_date: z
      .string()
      .min(1)
      .openapi({
        description: 'Date the corporate action or subsequent terms update was announced.',
      }),
    ex_date: z
      .string()
      .min(1)
      .nullable()
      .openapi({
        description:
          'The first date that purchasing a security will not result in a corporate action entitlement.',
      }),
    id: z.string().min(1).openapi({ description: 'ID that is specific to a single announcement.' }),
    initiating_original_cusip: z
      .string()
      .min(1)
      .openapi({ description: 'CUSIP of the company initiating the announcement.' }),
    initiating_symbol: z
      .string()
      .min(1)
      .openapi({ description: 'Symbol of the company initiating the announcement.' }),
    new_rate: z
      .string()
      .min(1)
      .nullable()
      .openapi({
        description: 'The numerator to determine any quantity change ratios in positions.',
      }),
    old_rate: z
      .string()
      .min(1)
      .nullable()
      .openapi({
        description: 'The denominator to determine any quantity change ratios in positions.',
      }),
    payable_date: z
      .string()
      .min(1)
      .openapi({
        description:
          'The date the announcement will take effect. On this date, account stock and cash balances are expected to be processed accordingly.',
      }),
    record_date: z
      .string()
      .min(1)
      .nullable()
      .openapi({
        description:
          'The date an account must hold a settled position in the security in order to receive the corporate action entitlement.',
      }),
    target_original_cusip: z
      .string()
      .min(1)
      .nullable()
      .openapi({ description: 'CUSIP of the child company involved in the announcement.' }),
    target_symbol: z
      .string()
      .min(1)
      .nullable()
      .openapi({ description: 'Symbol of the child company involved in the announcement.' }),
  })
  .openapi({
    description:
      "The announcements endpoint contains public information on previous and upcoming dividends, mergers, spinoffs, and stock splits.\n\nAnnouncement data is made available through the API as soon as it is ingested by Alpaca, which is typically the following trading day after the declaration date. This provides insight into future account stock position and cash balance changes that will take effect on an announcement's payable date. Additionally, viewing previous announcement details can improve bookkeeping and reconciling previous account cash and position changes.",
    examples: [
      {
        ca_sub_type: 'cash',
        ca_type: 'dividend',
        cash: '0',
        corporate_action_id: '78467X109_AA22',
        declaration_date: '2021-12-19',
        ex_date: '2022-01-21',
        id: 'bebc5ece-34be-47e9-b944-687e69a102be',
        initiating_original_cusip: '252787106',
        initiating_symbol: 'DIA',
        new_rate: '1',
        old_rate: '1',
        payable_date: '2022-02-14',
        record_date: '2022-01-24',
        target_original_cusip: '252787106',
        target_symbol: 'DIA',
      },
    ],
    required: [
      'id',
      'corporate_action_id',
      'ca_type',
      'ca_sub_type',
      'initiating_symbol',
      'initiating_original_cusip',
      'target_symbol',
      'target_original_cusip',
      'declaration_date',
      'ex_date',
      'record_date',
      'payable_date',
      'cash',
      'old_rate',
      'new_rate',
    ],
    title: 'Announcement',
  })
  .openapi('Announcement')

const ExchangeSchema = z
  .enum([
    'AMEX',
    'ARCA',
    'BATS',
    'NYSE',
    'NASDAQ',
    'NYSEARCA',
    'OTC',
    'TXSE',
    'CRYPTO',
    'ERSX',
    'CRXL',
    'ASCX',
    'INDEX',
  ])
  .openapi({
    description:
      'Represents the exchange where an asset is traded.\n\nFor Stocks:\n- AMEX\n- ARCA\n- BATS\n- NYSE\n- NASDAQ\n- NYSEARCA\n- OTC\n- TXSE\n\nFor Crypto:\n- CRYPTO\n- ERSX\n- CRXL\n\nFor crypto perpetuals:\n- ASCX\n\nIndex symbols:\n- INDEX\n\nINDEX is the artificial exchange for index symbols such as SPX.',
    example: 'NASDAQ',
    title: 'Exchange',
  })
  .openapi('Exchange')

const AssetSchema = z
  .object({
    attributes: z
      .array(
        z.enum([
          'ptp_no_exception',
          'ptp_with_exception',
          'ipo',
          'has_options',
          'options_late_close',
          'fractional_eh_enabled',
          'overnight_tradable',
          'overnight_halted',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          "Unique characteristics of the asset. Supported values:\n- `ptp_no_exception`: Asset is a Publicly Traded Partnership (PTP) without a qualified notice; non-U.S. customers may incur 10% withholding on gross proceeds as per IRS guidance, and are blocked from being purchased by default.\n- `ptp_with_exception`: Users can open positions in these PTPs without general restrictions.\n- `ipo`: Accepting limit orders only before the stock begins trading on the secondary market.\n- `has_options`: The underlying equity has listed options available on the platform. Note: if the equity had inactive/expired contracts in the past, this will still show up.\n- `options_late_close`: Indicates the underlying asset's options contracts close at 4:15pm ET instead of the standard 4:00pm ET.\n- `fractional_eh_enabled`: Indicates the asset accepts fractional orders during extended hours sessions (pre-market, post-market, and overnight if enabled).\n- `overnight_tradable`: Asset is eligible for overnight (24x5) trading in supported venues on the platform.\n- `overnight_halted`: Asset is eligible for overnight trading but is currently halted/blocked for overnight sessions due to risk, corporate action, compliance, or venue constraints.",
        example: ['ptp_no_exception', 'ipo'],
      }),
    borrow_status: z
      .enum(['easy_to_borrow', 'hard_to_borrow'])
      .exactOptional()
      .openapi({
        description:
          'Borrow status for US equity assets. This field is omitted for non-US-equity assets.',
        example: 'easy_to_borrow',
      }),
    class: AssetClassSchema,
    exchange: ExchangeSchema,
    fractionable: z
      .boolean()
      .openapi({ description: 'Asset is fractionable or not', example: true }),
    id: z
      .uuid()
      .openapi({ description: 'Asset ID', example: '904837e3-3b76-47ec-b432-046db621571b' }),
    maintenance_margin_requirement: z
      .number()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          '**deprecated**: Please use margin_requirement_long or margin_requirement_short instead. Note that these fields are of type string.\nShows the margin requirement percentage for the asset (equities only).\n',
      }),
    margin_requirement_long: z
      .string()
      .openapi({
        description:
          "The margin requirement percentage for the asset's long positions (equities only), encoded as a decimal string.",
        example: '100',
      }),
    margin_requirement_short: z
      .string()
      .openapi({
        description:
          "The margin requirement percentage for the asset's short positions (equities only), encoded as a decimal string.",
        example: '30',
      }),
    marginable: z.boolean().openapi({ description: 'Asset is marginable or not', example: true }),
    min_order_size: z
      .string()
      .exactOptional()
      .openapi({ description: 'Minimum order size.  Field available for crypto only.' }),
    min_trade_increment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Amount a trade quantity can be incremented by. Field available for crypto only.',
      }),
    name: z
      .string()
      .openapi({
        description: 'The official name of the asset',
        example: 'Apple Inc. Common Stock',
      }),
    price_increment: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Amount the price can be incremented by. Field available for crypto only.',
      }),
    shortable: z.boolean().openapi({ description: 'Asset is shortable or not', example: true }),
    status: z
      .enum(['active', 'inactive'])
      .openapi({ description: 'active or inactive', example: 'active' }),
    symbol: z.string().openapi({ description: 'The symbol of the asset', example: 'AAPL' }),
    tradable: z
      .boolean()
      .openapi({ description: 'Asset is tradable on Alpaca or not', example: true }),
  })
  .openapi({
    description:
      'Assets are sorted by asset class, exchange and symbol. Some assets are not tradable with Alpaca. These assets will be marked with the flag tradable=false',
    required: [
      'id',
      'class',
      'exchange',
      'symbol',
      'name',
      'status',
      'tradable',
      'marginable',
      'shortable',
      'fractionable',
      'margin_requirement_long',
      'margin_requirement_short',
    ],
    title: 'Asset',
  })
  .openapi('Asset')

const AssetEntryRequirementsSchema = z
  .object({
    regt_long: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The percentage of the asset's market value required as Reg T (2x) buying power to open a long position",
        example: '0.5',
      }),
    regt_short: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The percentage of the asset's market value required as Reg T (2x) buying power to open a short position",
        example: '0.5',
      }),
    symbol: z
      .string()
      .openapi({ description: 'The symbol (or asset id) of the requested asset', example: 'AAPL' }),
  })
  .openapi({
    description:
      'Defines the necessary conditions that must be met to initiate a position for a specific asset',
    required: ['symbol'],
    title: 'AssetEntryRequirements',
  })
  .openapi('AssetEntryRequirements')

const AuthorizeOAuthTokenResponseSchema = z
  .object({
    client_id: z.string().min(1).openapi({ description: 'OAuth `client_id`' }),
    code: z.string().min(1).openapi({ description: 'OAuth code to exchange with token' }),
    redirect_uri: z.string().min(1).openapi({ description: 'Redirect URI of OAuth flow' }),
    scope: z.string().openapi({ description: 'Granted scopes' }),
  })
  .openapi({
    description: '',
    examples: [
      {
        client_id: '7a3c52a910e1dc2abbb14da2b6b8e711',
        code: '912b5502-c983-40f7-a01d-6a66f13a754d',
        redirect_uri: 'http://localhost',
        scope: '',
      },
    ],
    required: ['code', 'client_id', 'redirect_uri', 'scope'],
  })
  .openapi('AuthorizeOAuthTokenResponse')

const BankAdditionalFieldsSchema = z
  .object({
    intermediary_bank1_bic: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The primary intermediary (correspondent) bank to be used when routing the international wire transfer to the beneficiary bank.',
      }),
    intermediary_bank2_bic: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An additional intermediary bank to be used if the wire transfer requires multiple correspondent banks before reaching the beneficiary bank.',
      }),
    intermediary_bank3_bic: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A tertiary intermediary bank used in complex international wire routes that require three correspondent banks prior to reaching the beneficiary bank.',
      }),
  })
  .openapi({
    description:
      'Additional wire instructions used to explicitly specify intermediary (correspondent) banks for international wire transfers. If omitted, intermediary banks may be automatically selected by downstream institutions, which can result in delays or additional charges.\n',
    required: [],
  })
  .openapi('BankAdditionalFields')

const BankSchema = z
  .object({
    account_id: z.uuid().exactOptional(),
    account_number: z.string(),
    bank_code: z.string().openapi({ description: '9-Digit ABA RTN (Routing Number) or BIC' }),
    bank_code_type: z
      .enum(['ABA', 'BIC'])
      .openapi({ description: 'ABA (Domestic) or BIC (International)' }),
    city: z.string().exactOptional().openapi({ description: 'Only for international banks' }),
    country: z.string().exactOptional().openapi({ description: 'Only for international banks' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Format: 2020-01-01T01:01:01Z',
        example: '2021-03-16T18:38:01.942282Z',
      }),
    extra_fields: BankAdditionalFieldsSchema.exactOptional(),
    id: z.uuid().openapi({ example: '61e69015-8549-4bfd-b9c3-01e75843f47d' }),
    name: z.string().openapi({ description: 'Name of recipient bank' }),
    postal_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'Only for international banks' }),
    state_province: z
      .string()
      .exactOptional()
      .openapi({ description: 'Only for international banks' }),
    status: z
      .enum(['QUEUED', 'SENT_TO_CLEARING', 'APPROVED', 'REJECTED', 'CANCELED'])
      .exactOptional()
      .openapi({ description: 'QUEUED, SENT_TO_CLEARING, APPROVED, REJECTED, CANCELED' }),
    street_address: z
      .string()
      .exactOptional()
      .openapi({ description: 'Only for international banks' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Format: 2020-01-01T01:01:01Z',
        example: '2021-03-16T18:38:01.942282Z',
      }),
  })
  .openapi({
    examples: [
      {
        account_id: '56712986-9ff7-4d8f-8e52-077e099e533e',
        account_number: '123456789abc',
        bank_code: '123456789',
        bank_code_type: 'ABA',
        city: '',
        country: '',
        created_at: '2022-02-11T21:35:19.268681613Z',
        id: '8475c676-68e3-4cfc-a683-9ca2f47a6172',
        name: 'Bank XYZ',
        postal_code: '',
        state_province: '',
        status: 'QUEUED',
        street_address: '',
        updated_at: '2022-02-11T21:35:19.268681613Z',
      },
    ],
    required: [
      'id',
      'created_at',
      'updated_at',
      'name',
      'bank_code',
      'bank_code_type',
      'account_number',
    ],
  })
  .openapi('Bank')

const BatchCreateFundingWalletRequestSchema = z
  .object({
    account_ids: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'list of UUID account ids which will have funding wallets created' }),
  })
  .openapi({ required: [] })
  .openapi('BatchCreateFundingWalletRequest')

const FundingWalletStatusSchema = z
  .enum(['active', 'pending', 'disabled'])
  .openapi({
    description:
      'Status:\n * `active`: The funding wallet is ready\n * `pending`: The funding wallet is being processed\n * `disabled`: The funding wallet is disabled\n',
  })
  .openapi('FundingWalletStatus')

const FundingWalletSchema = z
  .object({
    account_id: z.uuid(),
    created_at: z.iso.datetime({ offset: true }),
    status: FundingWalletStatusSchema,
  })
  .openapi({ required: ['account_id', 'status', 'created_at'] })
  .openapi('FundingWallet')

const BatchCreateFundingWalletResponseSchema = z
  .object({ funding_wallets: z.array(FundingWalletSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('BatchCreateFundingWalletResponse')

const BatchJournalRequestSchema = z
  .object({
    correspondent: z
      .string()
      .exactOptional()
      .openapi({ description: 'The 4-character correspondent code', example: 'LPCA' }),
    entries: z
      .array(
        z
          .object({
            amount: z
              .string()
              .nullable()
              .openapi({ description: "Journal amount in the entry's `currency`" }),
            currency: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  "The currency of the journal. Defaults to the system currency (for example, USD in the US or EUR in the EU) when omitted. Correspondents with local currency trading enabled must send this field, and the value must be the system currency or one of the correspondent's enabled currencies. All entries in a batch should use the same currency.",
              }),
            description: z
              .string()
              .exactOptional()
              .openapi({ description: 'Journal entry description, gets returned in the response' }),
            qty: z.string().nullable().exactOptional(),
            symbol: z.string().exactOptional(),
            to_account: z
              .uuid()
              .openapi({
                description: 'The ID of the account that you want to journal funds into',
              }),
            transmitter_account_number: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Only valid for JNLC journals. Null for JNLS.max 255 characters',
              }),
            transmitter_address: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Only valid for JNLC journals. Null for JNLS.max 255 characters',
              }),
            transmitter_financial_institution: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Only valid for JNLC journals. Null for JNLS.max 255 characters',
              }),
            transmitter_name: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Only valid for JNLC journals. Null for JNLS. Max 255 characters.',
              }),
            transmitter_timestamp: z.iso.datetime({ offset: true }).exactOptional(),
          })
          .openapi({ required: ['to_account', 'amount'] }),
      )
      .min(1)
      .openapi({
        description:
          'An array of objects describing which accounts you want to move funds into and how much to move into each account',
      }),
    entry_type: z.literal('JNLC').openapi({ description: 'Only supports `JNLC` for now' }),
    from_account: z
      .uuid()
      .openapi({
        description:
          'The account id that is the originator of the funds being moved. Most likely is your Sweep Firm Account',
      }),
  })
  .openapi({
    description:
      'Journals API allows you to move cash or securities from one account to another.\n\nThis model represents the fields you can specify when creating a request of many Journals out of one account to many others at once.',
    required: ['entry_type', 'from_account', 'entries'],
    title: 'BatchJournalRequest',
  })
  .openapi('BatchJournalRequest')

const JournalStatusSchema = z
  .enum([
    'pending',
    'canceled',
    'executed',
    'activity_created',
    'queued',
    'rejected',
    'deleted',
    'refused',
    'sent_to_clearing',
    'correct',
  ])
  .openapi({
    description:
      "Represents the status that a Journal instance can be in.\n\n**Current Values**\n\nqueued\tJournal in queue to be processed. Journal is not processed yet.\n\nsent_to_clearing\tJournal sent to be processed by Alpaca's booking system. The journal is not processed yet.\n\npending\t    Journal pending to be processed as it requires manual approval from Alpaca operations (for example due to hitting JNLC daily limits).\n\nexecuted\tJournal executed and balances updated for both sides of \nthe journal transaction. This is not a final status, journals can be reversed if there is an error.\n\nactivity_created\tNon-trade activity has been created for journal (JNLC v2-only).\n\nrejected\tJournal rejected. Please try again.\n\ncanceled\tJournal canceled. This is a **FINAL** status.\n\nrefused\tJournal refused. Please try again.\n\ndeleted\tJournal deleted. This is a **FINAL** status.\n\ncorrect\tJournal is corrected. Previously executed journal is cancelled and a new journal is corrected amount is created. This is a **FINAL** status.",
  })
  .openapi('JournalStatus')

const TransmitterInfoSchema = z
  .object({
    originator_bank_account_number: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required if the requesting correspondent qualifies as a financial institution\n',
      }),
    originator_bank_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required if the requesting correspondent qualifies as a financial institution\n',
      }),
    originator_city: z.string().exactOptional(),
    originator_country: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required if the requesting correspondent qualifies as a financial institution\n',
      }),
    originator_full_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required if the requesting correspondent qualifies as a financial institution\n',
      }),
    originator_postal_code: z.string().exactOptional(),
    originator_state: z.string().exactOptional(),
    originator_street_address: z.string().exactOptional(),
    other_identifying_information: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Used to facilitate transfer lookup in the event it is required. Recommended to be the originating bank's reference number for the transfer\n",
      }),
  })
  .openapi({
    description:
      'Information about the transmitter to satisfy travel rule requirements. Required if the requesting correspondent qualifies as a financial institution\n',
    required: [],
  })
  .openapi('TransmitterInfo')

const JournalBaseSchema = z
  .object({
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The creation time when supplied by the endpoint.' }),
    currency: z.string().openapi({ description: 'Currency denomination of the journal.' }),
    description: z.string().openapi({ description: 'The journal description.' }),
    from_account: z.uuid().openapi({ description: 'The account ID that initiated the journal.' }),
    id: z.uuid().openapi({ description: 'The journal ID.' }),
    net_amount: z
      .string()
      .nullable()
      .openapi({
        description: 'The cash amount, or null when not applicable.',
        'x-nullable': true,
      }),
    price: z
      .string()
      .nullable()
      .openapi({
        description: 'The journaled security price, or null when not applicable.',
        'x-nullable': true,
      }),
    qty: z
      .string()
      .nullable()
      .openapi({
        description: 'The journaled security quantity, or null when not applicable.',
        'x-nullable': true,
      }),
    settle_date: z.iso
      .date()
      .nullable()
      .openapi({
        description: 'The settlement date, or null until one is assigned.',
        'x-nullable': true,
      }),
    status: JournalStatusSchema,
    symbol: z
      .string()
      .nullable()
      .openapi({
        description: 'The journaled security symbol, or null for a cash journal.',
        'x-nullable': true,
      }),
    system_date: z.iso
      .date()
      .nullable()
      .openapi({
        description: 'The booking-system date, or null until one is assigned.',
        'x-nullable': true,
      }),
    to_account: z.uuid().openapi({ description: 'The account ID that received the journal.' }),
    transmitter_info: TransmitterInfoSchema.exactOptional(),
  })
  .openapi({
    description: 'Shared response fields returned for cash and securities journals.',
    required: [
      'id',
      'from_account',
      'to_account',
      'symbol',
      'qty',
      'price',
      'status',
      'settle_date',
      'system_date',
      'net_amount',
      'description',
      'currency',
    ],
    title: 'JournalBase',
  })
  .openapi('JournalBase')

const JNLCSchema = JournalBaseSchema.and(
  z
    .object({
      entry_type: z.literal('JNLC').openapi({ description: 'Cash journal discriminator value.' }),
      transmitter_account_number: z
        .string()
        .max(255)
        .exactOptional()
        .openapi({
          description:
            'Optional for JNLC journals. Maximum 255 characters. See more details about [Travel Rule](https://alpaca.markets/docs/broker/integration/funding/#travel-rule) in our main documentation.',
        }),
      transmitter_address: z
        .string()
        .max(255)
        .exactOptional()
        .openapi({
          description:
            'Optional for JNLC journals. Maximum 255 characters. See more details about [Travel Rule](https://alpaca.markets/docs/broker/integration/funding/#travel-rule) in our main documentation.',
        }),
      transmitter_financial_institution: z
        .string()
        .max(255)
        .exactOptional()
        .openapi({
          description:
            'Optional for JNLC journals. Maximum 255 characters. See more details about [Travel Rule](https://alpaca.markets/docs/broker/integration/funding/#travel-rule) in our main documentation.',
        }),
      transmitter_name: z
        .string()
        .max(255)
        .exactOptional()
        .openapi({
          description:
            'Optional for JNLC journals. Maximum 255 characters. See more details about [Travel Rule](https://alpaca.markets/docs/broker/integration/funding/#travel-rule) in our main documentation.',
        }),
      transmitter_timestamp: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          description:
            'Optional for JNLC journals. RFC 3339 format. See more details about [Travel Rule](https://alpaca.markets/docs/broker/integration/funding/#travel-rule) in our main documentation.',
        }),
    })
    .openapi({ required: ['entry_type'] }),
)
  .openapi({
    description: 'A cash journal response with all shared Journal fields.',
    examples: [
      {
        currency: 'USD',
        description: '',
        entry_type: 'JNLC',
        from_account: '8f8c8cee-2591-4f83-be12-82c659b5e748',
        id: '56f106e5-25a4-4eee-96fa-25bb05dc86bc',
        net_amount: '1000',
        price: null,
        qty: null,
        settle_date: null,
        status: 'pending',
        symbol: null,
        system_date: null,
        to_account: '399f85f1-cbbd-4eaa-a934-70027fb5c1de',
      },
    ],
    title: 'JNLC',
  })
  .openapi('JNLC')

const BatchJournalResponseJNLCSchema = JNLCSchema.and(
  z
    .object({
      error_message: z
        .string()
        .min(1)
        .exactOptional()
        .openapi({
          description:
            'Description of why this journal transaction failed. Omitted for successful results.',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description: 'A cash journal result returned by the forward batch endpoint.',
    examples: [
      {
        currency: 'USD',
        description: '',
        entry_type: 'JNLC',
        from_account: '8f8c8cee-2591-4f83-be12-82c659b5e748',
        id: '56f106e5-25a4-4eee-96fa-25bb05dc86bc',
        net_amount: '1000',
        price: null,
        qty: null,
        settle_date: null,
        status: 'pending',
        symbol: null,
        system_date: null,
        to_account: '399f85f1-cbbd-4eaa-a934-70027fb5c1de',
      },
      {
        currency: 'USD',
        description: '',
        entry_type: 'JNLC',
        error_message: 'The destination account is not eligible to receive this journal.',
        from_account: '8f8c8cee-2591-4f83-be12-82c659b5e748',
        id: 'c79bcd51-4bea-4d1d-9b3c-f37f5035b8f7',
        net_amount: '250',
        price: null,
        qty: null,
        settle_date: null,
        status: 'refused',
        symbol: null,
        system_date: null,
        to_account: 'd5f7dbea-cb40-4ea6-a56d-e30d572ee84f',
      },
    ],
    title: 'BatchJournalResponseJNLC',
  })
  .openapi('BatchJournalResponseJNLC')

const JNLSSchema = JournalBaseSchema.and(
  z
    .object({
      entry_type: z
        .literal('JNLS')
        .openapi({ description: 'Securities journal discriminator value.' }),
    })
    .openapi({ required: ['entry_type'] }),
)
  .openapi({
    description: 'A securities journal response with all shared Journal fields.',
    examples: [
      {
        currency: 'USD',
        description: 'this is a test journal',
        entry_type: 'JNLS',
        from_account: '8f4f3d11-4483-4199-840f-6c5fe0b7ca24',
        id: 'f45f67e8-d1fc-4136-aa4f-cf4460aecdfc',
        net_amount: null,
        price: '128.23',
        qty: '0.5',
        settle_date: '2020-12-24',
        status: 'executed',
        symbol: 'AAPL',
        system_date: '2020-12-24',
        to_account: 'a7a7e666-6f2a-433c-8c33-17b66b8941fa',
      },
    ],
    title: 'JNLS',
  })
  .openapi('JNLS')

const BatchJournalResponseJNLSSchema = JNLSSchema.and(
  z
    .object({
      error_message: z
        .string()
        .min(1)
        .exactOptional()
        .openapi({
          description:
            'Description of why this journal transaction failed. Omitted for successful results.',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description:
      'A securities journal result that preserves discriminator-complete batch response modeling, although current public batch requests support JNLC only.',
    examples: [
      {
        currency: 'USD',
        description: 'this is a test journal',
        entry_type: 'JNLS',
        from_account: '8f4f3d11-4483-4199-840f-6c5fe0b7ca24',
        id: 'f45f67e8-d1fc-4136-aa4f-cf4460aecdfc',
        net_amount: null,
        price: '128.23',
        qty: '0.5',
        settle_date: '2020-12-24',
        status: 'executed',
        symbol: 'AAPL',
        system_date: '2020-12-24',
        to_account: 'a7a7e666-6f2a-433c-8c33-17b66b8941fa',
      },
    ],
    title: 'BatchJournalResponseJNLS',
  })
  .openapi('BatchJournalResponseJNLS')

const BatchJournalResponseSchema = z
  .xor([BatchJournalResponseJNLCSchema, BatchJournalResponseJNLSSchema])
  .openapi({
    description:
      'A forward batch journal result selected by `entry_type`, with an optional non-empty failure message.',
    discriminator: {
      mapping: {
        JNLC: '#/components/schemas/BatchJournalResponseJNLC',
        JNLS: '#/components/schemas/BatchJournalResponseJNLS',
      },
      propertyName: 'entry_type',
    },
    examples: [
      {
        currency: 'USD',
        description: '',
        entry_type: 'JNLC',
        from_account: '8f8c8cee-2591-4f83-be12-82c659b5e748',
        id: '56f106e5-25a4-4eee-96fa-25bb05dc86bc',
        net_amount: '1000',
        price: null,
        qty: null,
        settle_date: null,
        status: 'pending',
        symbol: null,
        system_date: null,
        to_account: '399f85f1-cbbd-4eaa-a934-70027fb5c1de',
      },
      {
        currency: 'USD',
        description: 'this is a test journal',
        entry_type: 'JNLS',
        from_account: '8f4f3d11-4483-4199-840f-6c5fe0b7ca24',
        id: 'f45f67e8-d1fc-4136-aa4f-cf4460aecdfc',
        net_amount: null,
        price: '128.23',
        qty: '0.5',
        settle_date: '2020-12-24',
        status: 'executed',
        symbol: 'AAPL',
        system_date: '2020-12-24',
        to_account: 'a7a7e666-6f2a-433c-8c33-17b66b8941fa',
      },
      {
        currency: 'USD',
        description: '',
        entry_type: 'JNLC',
        error_message: 'The destination account is not eligible to receive this journal.',
        from_account: '8f8c8cee-2591-4f83-be12-82c659b5e748',
        id: 'c79bcd51-4bea-4d1d-9b3c-f37f5035b8f7',
        net_amount: '250',
        price: null,
        qty: null,
        settle_date: null,
        status: 'refused',
        symbol: null,
        system_date: null,
        to_account: 'd5f7dbea-cb40-4ea6-a56d-e30d572ee84f',
      },
    ],
    title: 'BatchJournalResponse',
  })
  .openapi('BatchJournalResponse')

const CIPResultSchema = z
  .string()
  .openapi({
    description: 'The result of the check. Either `clear` or `consider`.',
    title: 'CIPResult',
  })
  .openapi('CIPResult')

const CIPStatusSchema = z
  .string()
  .openapi({
    description: 'An enum representing the status of the CIPInfo\n\n"complete"\n\n"withdrawn"',
    title: 'CIPStatus',
  })
  .openapi('CIPStatus')

const CIPDocumentSchema = z
  .object({
    age_validation: CIPResultSchema.exactOptional(),
    comprised_document: CIPResultSchema.exactOptional(),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Datetime for when this check was done' }),
    data_comparison: CIPResultSchema.exactOptional(),
    data_comparison_breakdown: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'json object representing the results of the various sub-checks\n          done when calculating the result on `data_comparison`. Example: {"date_of_birth": "clear",\n          "date_of_expiry": "clear" "document_numbers": "clear", "document_type": "clear", "first_name": "clear",\n          "gender": "clear", "issuing_country": "clear", "last_name": "clear"}',
      }),
    date_of_birth: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Datetime for when this check was done' }),
    date_of_expiry: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Datetime for when this check was done' }),
    document_numbers: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Number of the document that was checked' }),
    document_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the document that was checked' }),
    first_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'First name extracted from the document' }),
    gender: z
      .string()
      .exactOptional()
      .openapi({ description: 'Gender info extracted from the document' }),
    id: z.string().openapi({ description: 'Your internal ID of check' }),
    image_integrity: CIPResultSchema.exactOptional(),
    image_integrity_breakdown: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'json object representing the results of the various sub-checks done\n          when calculating the result on `image_integrity`. Example: example: {"colour_picture": "clear",\n          "conclusive_document_quality": "clear", "image_quality": "clear", "supported_document": "clear"}',
      }),
    issuing_country: z
      .string()
      .exactOptional()
      .openapi({ description: 'Country for which issued the document' }),
    last_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last name extracted from the document' }),
    nationality: z
      .string()
      .exactOptional()
      .openapi({ description: 'Nationality extracted from the document' }),
    police_record: CIPStatusSchema.exactOptional(),
    result: CIPResultSchema.exactOptional(),
    status: CIPStatusSchema.exactOptional(),
    visual_authenticity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'json object representing the various sub-checks done when determining\n          whether visual (non-textual) elements are correct given the document type. Example: {\n          "digital_tampering": "clear", "face_detection": "clear", "fonts": "clear", "original_document_present":\n          "clear", "picture_face_integrity": "clear", "security_features": "clear", "template": "clear"}',
      }),
  })
  .openapi({
    description: 'Represents results of checking a document for CIPInfo\n',
    examples: [
      {
        created_at: '2021-06-10T15:37:03Z',
        id: '55B9931A-3BE6-4BC0-9BDD-0B954E4A4632',
        image_integrity: 'clear',
        result: 'clear',
        status: 'complete',
      },
    ],
    required: ['id'],
  })
  .openapi('CIPDocument')

const CIPIdentitySchema = z
  .object({
    address: CIPResultSchema.exactOptional(),
    address_breakdown: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'a json object representing the breakdown of the `address` field. For example:\n          {"credit_agencies": {"result": "clear","properties":{"number_of_matches":"1"}}',
      }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({ description: 'datetime when identity check happened' }),
    date_of_birth: CIPResultSchema.exactOptional(),
    date_of_birth_breakdown: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'a json object representing the breakdown of the `date_of_birth` field.\n          For example: example: {"credit_agencies":{"result": "clear","properties": {"number_of_matches": "1"}}',
      }),
    id: z.string().openapi({ description: 'Your internal ID of check' }),
    matched_address: CIPResultSchema.exactOptional(),
    matched_addresses: z
      .string()
      .exactOptional()
      .openapi({ description: 'datetime when identity check happened' }),
    result: CIPResultSchema.exactOptional(),
    sources: CIPResultSchema.exactOptional(),
    sources_breakdown: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'a json object representing the breakdown of `sources` field. For example:\n          {"total_sources": {"result": "clear","properties": {"total_number_of_sources": "3"}}}',
      }),
    status: CIPStatusSchema.exactOptional(),
    tax_id: CIPResultSchema.exactOptional(),
    tax_id_breakdown: z
      .string()
      .exactOptional()
      .openapi({ description: 'a json object representing the breakdown of the `tax_id` field' }),
  })
  .openapi({
    examples: [
      {
        address: 'clear',
        created_at: '2021-06-10T15:37:03Z',
        date_of_birth: 'clear',
        id: '28E1CCE8-1B1A-4472-9AD4-C6C5B7C3A6AF',
        result: 'clear',
        sources: 'clear',
        status: 'complete',
      },
    ],
    required: ['id'],
  })
  .openapi('CIPIdentity')

const CIPKYCSchema = z
  .object({
    address: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Concatenated street address, city, state and country of applicant',
      }),
    applicant_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Given and family name of applicant' }),
    approval_status: z
      .enum(['approved', 'rejected'])
      .exactOptional()
      .openapi({ description: 'Approval status of KYC check', example: 'approved' }),
    approved_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Reason for approving this KYC check' }),
    approved_by: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifier of who approved KYC check' }),
    approved_reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'Datetime that this KYC check was approved' }),
    check_completed_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'completion datetime of KYC check' }),
    check_initiated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'start datetime of KYC check' }),
    country_of_residency: z
      .string()
      .exactOptional()
      .openapi({ description: 'country for `address` field' }),
    date_of_birth: z.iso.date().exactOptional().openapi({ description: 'DOB of applicant' }),
    email_address: z
      .string()
      .exactOptional()
      .openapi({ description: 'email address of applicant' }),
    id: z.uuid().openapi({ description: 'Your internal ID of check' }),
    ip_address: z
      .string()
      .exactOptional()
      .openapi({ description: 'IP address of applicant at time of KYC check' }),
    kyc_completed_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Datetime that KYC check was completed at' }),
    nationality: z.string().exactOptional().openapi({ description: 'nationality of applicant' }),
    postal_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'postal code for `address` field' }),
    risk_categories: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The list of risk categories returned by the KYC provider or assessed',
      }),
    risk_level: z
      .string()
      .exactOptional()
      .openapi({ description: 'Overall risk level returned by KYC provider or assessed' }),
    risk_score: z
      .int()
      .exactOptional()
      .openapi({ description: 'Overall risk score returned by KYC provider or assessed' }),
  })
  .openapi({
    description: 'Represents Know Your Customer (KYC) info for a CIPInfo',
    examples: [
      {
        address: '42 Faux St',
        applicant_name: 'John Doe',
        approval_status: 'approved',
        approved_at: '2021-06-10T15:38:03Z',
        approved_by: 'Jane Doe',
        check_completed_at: '2021-06-10T15:37:03Z',
        check_initiated_at: '2021-06-10T15:37:03Z',
        country_of_residency: 'USA',
        date_of_birth: '1970-12-01',
        email_address: 'johndoe@example.com',
        id: 'CBDAD1C4-1047-450E-BAE5-B6C406F509B4',
        id_number: 'jd0000123456789',
        ip_address: '127.0.0.1',
        kyc_completed_at: '2021-06-10T15:37:03Z',
        nationality: 'American',
        postal_code: '94401',
        risk_level: 'LOW',
      },
    ],
    required: ['id'],
    title: 'CIPKYCInfo',
  })
  .openapi('CIPKYC')

const CIPPhotoSchema = z
  .object({
    created_at: z
      .string()
      .exactOptional()
      .openapi({ description: 'datetime of when the check happened' }),
    face_comparison: CIPResultSchema.exactOptional(),
    face_comparison_breakdown: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'a json object representing the breakdown of sub-checks done in\n          `face_comparison`. Example: {"face_match":{"result": "clear","properties":{"score": "80"}}}',
      }),
    id: z.string().openapi({ description: 'Your internal ID of the check' }),
    image_integrity: CIPResultSchema.exactOptional(),
    image_integrity_breakdown: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'a json object representing the breakdown of sub-checks done in\n          `image_integrity`. Example  {"face_detected":{"result": "clear"},"source_integrity": {"result": "clear"}}',
      }),
    result: CIPResultSchema.exactOptional(),
    status: z
      .enum(['complete', 'withdrawn'])
      .exactOptional()
      .openapi({ description: 'Overall status of the check. Either `complete` or `withdrawn`.' }),
    visual_authenticity: CIPResultSchema.exactOptional(),
    visual_authenticity_breakdown: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'a json object representing the breakdown of sub-checks don in\n          `visual_authenticity`. Example {"spoofing_detection": {"result": "clear","properties": {"score": "26"}}}}',
      }),
  })
  .openapi({
    description: 'Represents the results of checking a Photo for CIPInfo',
    examples: [
      {
        created_at: '2021-06-10T15:37:03Z',
        face_comparison: 'clear',
        id: '0DD13020-F0FD-4B5A-B58F-BC1885E90A6D',
        result: 'clear',
        status: 'complete',
      },
    ],
    required: ['id'],
  })
  .openapi('CIPPhoto')

const CIPProviderSchema = z
  .string()
  .openapi({
    description:
      '"alloy"   - ALLOY\n"trulioo" - TRULIOO\n"onfido"  - ONFIDO\n"veriff"  - VERIFF\n"jumio"   - JUMIO\n"getmati" - GETMATI',
    title: 'CIPProvider',
  })
  .openapi('CIPProvider')

const CIPWatchlistSchema = z
  .object({
    adverse_media: CIPResultSchema.exactOptional(),
    created_at: z.string().exactOptional().openapi({ description: 'datetime when check happened' }),
    id: z.string().openapi({ description: 'Your internal ID of check' }),
    monitored_lists: CIPResultSchema.exactOptional(),
    politically_exposed_person: CIPResultSchema.exactOptional(),
    records: z
      .string()
      .exactOptional()
      .openapi({ description: 'a json object. Example [{"text": "Record info"}]' }),
    result: CIPResultSchema.exactOptional(),
    sanction: CIPResultSchema.exactOptional(),
    status: CIPStatusSchema.exactOptional(),
  })
  .openapi({
    description:
      'Represents the result of checking to see if the applicant is in any watchlists for a CIPInfo',
    examples: [
      {
        adverse_media: 'clear',
        created_at: '2021-06-10T15:37:03Z',
        id: '7572B870-EB4C-46A2-8B88-509194CCEE7E',
        monitored_lists: 'clear',
        politically_exposed_person: 'clear',
        result: 'clear',
        sanction: 'clear',
        status: 'complete',
      },
    ],
    required: ['id'],
  })
  .openapi('CIPWatchlist')

const CIPInfoSchema = z
  .object({
    account_id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'UUID of the Account instance this CIPInfo is for' }),
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
    document: CIPDocumentSchema.exactOptional(),
    id: z.uuid().exactOptional().openapi({ description: 'ID of this CIPInfo' }),
    identity: CIPIdentitySchema.exactOptional(),
    kyc: CIPKYCSchema.exactOptional(),
    photo: CIPPhotoSchema.exactOptional(),
    provider_name: z
      .array(CIPProviderSchema)
      .exactOptional()
      .openapi({ description: 'List of KYC providers this information came from' }),
    updated_at: z.iso.datetime({ offset: true }).exactOptional(),
    watchlist: CIPWatchlistSchema.exactOptional(),
  })
  .openapi({
    description: 'Customer Identification Program (CIP) information for an account applicant.',
    title: 'CIPInfo',
    required: [],
  })
  .openapi('CIPInfo')

const CommissionTypeSchema = z
  .enum(['notional', 'qty', 'bps'])
  .default('notional')
  .openapi({
    description:
      'An enum to select how to interpret the value provided in the commission field.\n\n- notional:\nCharge commission on a per order basis. (When the `commission_type` field is omitted from the order request, this is used as the default).\n\n- qty:\nCharge commission on a per qty/contract basis, pro rated.\n\n- bps:\nThe percent commission you want to charge the end user on the order (expressed in bps). Alpaca will convert the order to a notional amount for purposes of calculating commission.\nCommission value in bps can have up to two decimal places.',
    example: 'qty',
    title: 'CommissionType',
  })
  .openapi('CommissionType')

const CorrespondentLimitSchema = z
  .object({
    amount_available: z.string().exactOptional(),
    amount_in_use: z.string().exactOptional(),
    amount_limit: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CorrespondentLimit')

const CountryInfoSchema = z
  .object({
    crypto_risk_rating: z
      .enum(['low', 'medium', 'high', 'restricted', 'prohibited'])
      .openapi({ description: 'crypto risk rating of the country' }),
    crypto_supported_states: z
      .array(z.string().openapi({ description: 'the state code defined by ISO 3166-2' }))
      .exactOptional()
      .openapi({ description: 'states where Alpaca supports crypto trading' }),
    full_name: z
      .string()
      .min(1)
      .openapi({
        description: 'The full name of the country defined by ISO 3166-1',
        example: 'Åland Islands',
      }),
    securities_risk_rating: z
      .enum(['low', 'medium', 'high', 'restricted', 'prohibited'])
      .openapi({ description: 'the securities risk rating of the country' }),
  })
  .openapi({
    description: 'Represents the info for a country.',
    required: ['full_name', 'securities_risk_rating', 'crypto_risk_rating'],
    title: 'CountryInfo',
  })
  .openapi('CountryInfo')

const CountryInfosSchema = z
  .record(z.string(), CountryInfoSchema)
  .openapi({
    description:
      'Represents the info for countries as a map where the keys are the ISO 3166 country codes.',
    title: 'CountryInfos',
  })
  .openapi('CountryInfos')

const CreateACHRelationshipRequestSchema = z
  .object({
    account_owner_name: z.string().min(1),
    bank_account_number: z
      .string()
      .min(1)
      .openapi({ description: 'In sandbox, this still must be a valid format' }),
    bank_account_type: z
      .enum(['CHECKING', 'SAVINGS'])
      .openapi({ description: 'Must be `CHECKING` or `SAVINGS`' }),
    bank_routing_number: z
      .string()
      .min(1)
      .openapi({ description: 'In sandbox, this still must be a valid format' }),
    instant: z.boolean().exactOptional(),
    nickname: z.string().min(1).exactOptional(),
    processor_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'If using Plaid, you can specify a Plaid processor token here ' }),
  })
  .openapi({
    description:
      'Represents the fields used in creation of a new ACHRelationship.\n\nYou can create an ACHRelationship by passing the required fields here or if you have an account with Plaid you can use our integration with Plaid to create a relationship.\n\nPlease see the documentation [here](https://alpaca.markets/docs/api-references/broker-api/funding/ach/#plaid-integration-for-bank-transfers) for more info on using Plaid with Alpaca',
    required: [
      'account_owner_name',
      'bank_account_type',
      'bank_account_number',
      'bank_routing_number',
    ],
    title: 'CreateACHRelationshipRequest',
  })
  .openapi('CreateACHRelationshipRequest')

const PerAccountAgreementTypeSchema = z
  .enum([
    'account_agreement',
    'customer_agreement',
    'options_agreement',
    'master_securities_lending_agreement',
    'crypto_agreement',
    'dvp_customer_agreement',
    'etc_agreement',
    'joint_account_agreement',
  ])
  .openapi({
    description:
      'Per-account agreement types. These agreements are tied to a specific trading\naccount and require an `account_id`.\n',
    example: 'customer_agreement',
    title: 'PerAccountAgreementType',
  })
  .openapi('PerAccountAgreementType')

const CreateAccountAgreementRequestSchema = z
  .strictObject({
    account_id: z
      .uuid()
      .openapi({
        description:
          'The account associated with this agreement. Required for per-account agreements.',
        example: 'd7e8f9a0-b1c2-3d4e-5f67-890123456789',
      }),
    agreement: PerAccountAgreementTypeSchema,
    ip_address: z
      .string()
      .openapi({
        description: 'The IP address from which the agreement was signed',
        example: '192.168.1.100',
      }),
    party_id: z
      .uuid()
      .openapi({
        description: 'The party signing the agreement',
        example: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
      }),
    revision: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional agreement revision in format `XX.YYYY.MM`.\nIf omitted, the active revision from the agreements reference table is used.\n',
        example: '19.2024.01',
      }),
    signed_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp when the agreement was signed',
        example: '2024-01-15T11:00:00Z',
      }),
    signer_party_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Required for legal entity parties. Must reference a natural person party\nthat is an authorized signer of the legal entity.\n',
        example: '550e8400-e29b-41d4-a716-446655440003',
      }),
  })
  .openapi({
    description:
      'Request to create a per-account agreement. Per-account agreements are tied to a\nspecific trading account and require an `account_id`.\n',
    required: ['party_id', 'agreement', 'signed_at', 'ip_address', 'account_id'],
    title: 'CreateAccountAgreementRequest',
  })
  .openapi('CreateAccountAgreementRequest')

const PartyAgreementTypeSchema = z
  .enum([
    'margin_agreement',
    'certifications_and_resolutions_statement',
    'nasdaq_agreement',
    'nyse_agreement',
    'oauth_api_agreement',
    'opra_agreement',
    'trusted_contact_consent',
    'custodian_customer_agreement',
  ])
  .openapi({
    description:
      'Per-party agreement types. These agreements are signed at the party level\nand do not require an `account_id`.\n',
    example: 'certifications_and_resolutions_statement',
    title: 'PartyAgreementType',
  })
  .openapi('PartyAgreementType')

const CreatePartyAgreementRequestSchema = z
  .strictObject({
    agreement: PartyAgreementTypeSchema,
    ip_address: z
      .string()
      .openapi({
        description: 'The IP address from which the agreement was signed',
        example: '10.0.0.50',
      }),
    party_id: z
      .uuid()
      .openapi({
        description: 'The party signing the agreement',
        example: 'e4d3c2b1-a098-7654-3210-fedcba987654',
      }),
    revision: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional agreement revision in format `XX.YYYY.MM`.\nIf omitted, the active revision from the agreements reference table is used.\nNot supported for `nasdaq_agreement`, `nyse_agreement`, or `oauth_api_agreement`;\nsending `revision` for these types returns `400`, and the response omits it.\n',
        example: '01.2024.02',
      }),
    signed_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp when the agreement was signed',
        example: '2024-08-18T14:00:00Z',
      }),
    signer_party_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Required for legal entity parties. Must reference a natural person party\nthat is an authorized signer of the legal entity.\n',
        example: 'b5c7e1a2-3d4f-4e5a-8b6c-9d0e1f2a3b4c',
      }),
  })
  .openapi({
    description:
      'Request to create a per-party agreement. Per-party agreements are signed at the\nparty level and do not require an `account_id`. The `account_id` field is not allowed.\n',
    required: ['party_id', 'agreement', 'signed_at', 'ip_address'],
    title: 'CreatePartyAgreementRequest',
  })
  .openapi('CreatePartyAgreementRequest')

const CreateAgreementRequestSchema = z
  .xor([CreatePartyAgreementRequestSchema, CreateAccountAgreementRequestSchema])
  .openapi({
    description:
      'Request to create a signed agreement for a party.\n\nThis is a sum type with two variants:\n- `CreatePartyAgreementRequest`: for per-party agreements (no `account_id`)\n- `CreateAccountAgreementRequest`: for per-account agreements (`account_id` required)\n\nThe correct variant is determined by the agreement type and presence of `account_id`.\n',
    title: 'CreateAgreementRequest',
  })
  .openapi('CreateAgreementRequest')

const CreateBankRequestSchema = z
  .object({
    account_number: z.string(),
    bank_code: z.string().openapi({ description: '9-Digit ABA RTN (Routing Number) or BIC' }),
    bank_code_type: z
      .enum(['ABA', 'BIC'])
      .openapi({ description: 'ABA (Domestic) or BIC (International)' }),
    city: z
      .string()
      .exactOptional()
      .openapi({ description: 'Only for international banks, ie if bank_code_type = BIC' }),
    country: z
      .string()
      .exactOptional()
      .openapi({ description: 'Only for international banks, ie if bank_code_type = BIC' }),
    extra_fields: BankAdditionalFieldsSchema.exactOptional(),
    name: z.string().openapi({ description: 'Name of recipient bank' }),
    postal_code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Only for international banks, ie if bank_code_type = BIC. Minimum of 3 characters',
      }),
    state_province: z
      .string()
      .exactOptional()
      .openapi({ description: 'Only for international banks, ie if bank_code_type = BIC' }),
    street_address: z
      .string()
      .exactOptional()
      .openapi({ description: 'Only for international banks, ie if bank_code_type = BIC' }),
  })
  .openapi({
    description:
      'Represents the possible fields to send when creating a new associated Bank resource for an account',
    required: ['name', 'bank_code', 'bank_code_type', 'account_number'],
    title: 'CreateBankRequest',
  })
  .openapi('CreateBankRequest')

const CreateCryptoTransferRequestSchema = z
  .object({
    address: z.string().openapi({ description: 'The destination wallet address' }),
    amount: z
      .string()
      .openapi({
        description:
          "The amount, denoted in the specified asset, to be withdrawn from the user's wallet",
      }),
    asset: z.string(),
    chain: z
      .enum(['SOL', 'ETH', 'BTC', 'XRP', 'ARB'])
      .exactOptional()
      .openapi({
        description: 'Optional chain identifier. The blockchain network used for the withdrawal.',
      }),
  })
  .openapi({ required: ['amount', 'address', 'asset'], title: 'CreateCryptoTransferRequest' })
  .openapi('CreateCryptoTransferRequest')

const FundingDetailPaymentTypeSchema = z
  .enum(['swift_wire', 'local_rails'])
  .openapi({
    description: 'Status:\n * `swift_wire`: SWIFT wire\n * `local_rails`: Local scheme\n',
  })
  .openapi('FundingDetailPaymentType')

const CreateFundingWalletWithdrawalRequestSchema = z
  .object({
    desired_currency: z.string().exactOptional(),
    fee_inclusive: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          "When true, fees are deducted from `usd_amount` instead of being added on top, so the total amount debited from the account equals `usd_amount` exactly (the beneficiary receives `usd_amount` minus fees). This lets the account be drained to zero: pass the account's full available cash as `usd_amount`. The request is rejected if `usd_amount` is less than or equal to the fees. Defaults to false (fees added on top of `usd_amount`).\n",
      }),
    payment_type: FundingDetailPaymentTypeSchema.exactOptional(),
    usd_amount: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateFundingWalletWithdrawalRequest')

const CreateIFTransferRequestSchema = z
  .object({ account_no: z.string(), amount: z.string(), source_account_no: z.string() })
  .openapi({
    description: 'Request to create a new instant funding transfer\n',
    required: ['account_no', 'source_account_no', 'amount'],
  })
  .openapi('CreateIFTransferRequest')

const SettlementAccountSchema = z
  .object({
    account_number: z
      .string()
      .openapi({ description: 'The account number of the client account to settle\n' }),
    amount: z.string(),
    transmitter_info: TransmitterInfoSchema,
  })
  .openapi({ required: ['account_number', 'amount', 'transmitter_info'] })
  .openapi('SettlementAccount')

const JITAssetClassSchema = z
  .enum(['crypto', 'us_equity'])
  .openapi({
    description:
      'Values:\n * `crypto`: Used to identify a crypto only account\n * `us_equity`: Used to identify an account that trades US equities, or both crypto and\n  US equities.\n',
  })
  .openapi('JITAssetClass')

const CreateJITSettlementRequestSchema = z
  .object({
    accounts: z.array(SettlementAccountSchema),
    additional_info: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Additional remittance information. Include if the funding source may require additional information to associate to the source account or settlement.\n',
      }),
    asset_class: JITAssetClassSchema,
    currency: z
      .string()
      .openapi({
        description:
          'The currency of the settlement. All accounts identified should have this base currency.\n',
      }),
  })
  .openapi({
    description:
      'Request to create a new settlement. All transfers included must use the same source account, and the total amount received must be in the same currency as the base currency of the source account.\n',
    required: ['currency', 'asset_class', 'accounts'],
  })
  .openapi('CreateJITSettlementRequest')

const JournalEntryTypeSchema = z
  .enum(['JNLC', 'JNLS'])
  .openapi({
    description:
      'This enum represents the various kinds of Journal alpaca supports.\n\nCurrent values are:\n\n- **JNLC**\n\n  Journal Cash between accounts\n\n- **JNLS**\n\n  Journal Securities between accounts',
    title: '',
  })
  .openapi('JournalEntryType')

const CreateJournalRequestSchema = z
  .object({
    amount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required if `entry_type` = `JNLC`' }),
    currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The currency of the journal. Defaults to the system currency (for example, USD in the US or EUR in the EU) when omitted. Correspondents with local currency trading enabled must send this field, and the value must be the system currency or one of the correspondent's enabled currencies",
      }),
    description: z
      .string()
      .max(1024)
      .exactOptional()
      .openapi({
        description:
          'Max 1024 characters. Can include fixtures for amounts that are above the transaction limit',
      }),
    entry_type: JournalEntryTypeSchema,
    from_account: z
      .uuid()
      .min(1)
      .openapi({ description: 'The account_id you wish to journal from' }),
    qty: z.string().exactOptional().openapi({ description: 'Required if `entry_type` = `JNLS`' }),
    symbol: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required if `entry_type` = `JNLS`' }),
    to_account: z.uuid().min(1).openapi({ description: 'The account_id you wish to journal to' }),
    transmitter_account_number: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          'Max 255 characters. See more details about [Travel Rule](https://alpaca.markets/docs/broker/integration/funding/#travel-rule) in our main documentation.',
      }),
    transmitter_address: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          'Max 255 characters. See more details about [Travel Rule](https://alpaca.markets/docs/broker/integration/funding/#travel-rule) in our main documentation.',
      }),
    transmitter_financial_institution: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          'Max 255 characters. See more details about [Travel Rule](https://alpaca.markets/docs/broker/integration/funding/#travel-rule) in our main documentation.',
      }),
    transmitter_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          'Max 255 characters. See more details about [Travel Rule](https://alpaca.markets/docs/broker/integration/funding/#travel-rule) in our main documentation.',
      }),
    transmitter_timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'RFC 3339 format. See more details about [Travel Rule](https://alpaca.markets/docs/broker/integration/funding/#travel-rule) in our main documentation.',
      }),
  })
  .openapi({
    description:
      'Journals API allows you to move cash or securities from one account to another.\n\nThis model represents the fields you can specify when creating a Journal\n\nFixture Rules\n\n- No Fixtures\n  - anything below limit is executed immediately\n  - anything above limit is pending until executed at EOD,\n- With Fixtures\n  - any status = rejected will be rejected EOD\n  - any status = pending will be pending forever',
    examples: [
      {
        amount: '51',
        description: 'Move cash to a customer account',
        entry_type: 'JNLC',
        from_account: '7c891489-574f-4f9a-82f0-4082a07f4736',
        to_account: '2d47a229-0c25-40a2-8cc7-b2c8821ff93a',
      },
    ],
    required: ['to_account', 'from_account', 'entry_type'],
  })
  .openapi('CreateJournalRequest')

const PositionIntentSchema = z
  .enum(['buy_to_open', 'buy_to_close', 'sell_to_open', 'sell_to_close'])
  .openapi({
    description: 'Represents the desired position strategy.',
    example: 'buy_to_open',
    title: 'PositionIntent',
  })
  .openapi('PositionIntent')

const OrderSideSchema = z
  .enum(['buy', 'sell'])
  .openapi({
    description:
      'Represents what side of the transaction an order was on. Required for all order classes except for `mleg`.',
    example: 'buy',
  })
  .openapi('OrderSide')

const MLegOrderLegSchema = z
  .object({
    position_intent: PositionIntentSchema.exactOptional(),
    ratio_qty: z
      .string()
      .openapi({
        description:
          'proportional quantity of this leg in relation to the overall multileg order qty',
        example: '1',
      }),
    side: OrderSideSchema.exactOptional(),
    symbol: z
      .string()
      .openapi({ description: 'symbol or asset ID to identify the asset to trade' }),
  })
  .openapi({
    description: 'Represents an individual leg of a multileg options order.',
    required: ['symbol', 'ratio_qty'],
    title: 'MLegOrderLeg',
  })
  .openapi('MLegOrderLeg')

const OrderClassSchema = z
  .enum(['simple', 'bracket', 'oco', 'oto', 'mleg', ''])
  .openapi({
    description:
      'The order classes supported by Alpaca vary based on the order\'s security type. The following provides a comprehensive breakdown of the supported order classes for each category:\n  - Equity trading: simple (or ""), oco, oto, bracket.\n  - Options trading:\n    - simple (or "")\n    - mleg (required for multi-leg complex option strategies)\n  - Crypto trading: simple (or "").',
    example: '',
  })
  .openapi('OrderClass')

const TimeInForceSchema = z
  .enum(['day', 'gtc', 'opg', 'cls', 'ioc', 'fok'])
  .openapi({
    description:
      'The Time-In-Force values supported by Alpaca vary based on the order\'s security type. Here is a breakdown of the supported TIFs for each specific security type:\n- Equity trading: day, gtc, opg, cls, ioc, fok.\n- Options trading: day, gtc.\n- Crypto trading: gtc, ioc.\n\nBelow are the descriptions of each TIF:\n- day:\n  A day order is eligible for execution only on the day it is live. By default, the order is only valid during Regular Trading Hours (9:30am - 4:00pm ET). If unfilled after the closing auction, it is automatically canceled. If submitted after the close, it is queued and submitted the following trading day. However, if marked as eligible for extended hours, the order can also execute during supported extended hours.\n\n- gtc:\n  The order is good until canceled. Non-marketable GTC limit orders are subject to price adjustments to offset corporate actions affecting the issue. We do not currently support Do Not Reduce (DNR) orders to opt out of such price adjustments.\n\n- opg:\n  Use this TIF with a market/limit order type to submit "market on open" (MOO) and "limit on open" (LOO) orders. This order is eligible to execute only in the market opening auction. Any unfilled orders after the open will be cancelled. OPG orders submitted after 9:28am but before 7:00pm ET will be rejected. OPG orders submitted after 7:00pm will be queued and routed to the following day\'s opening auction. On open/on close orders are routed to the primary exchange. Such orders do not necessarily execute exactly at 9:30am / 4:00pm ET but execute per the exchange\'s auction rules.\n\n- cls:\n  Use this TIF with a market/limit order type to submit "market on close" (MOC) and "limit on close" (LOC) orders. This order is eligible to execute only in the market closing auction. Any unfilled orders after the close will be cancelled. CLS orders submitted after 3:50pm but before 7:00pm ET will be rejected. CLS orders submitted after 7:00pm will be queued and routed to the following day\'s closing auction.\n\n- ioc:\n  An Immediate Or Cancel (IOC) order requires all or part of the order to be executed immediately. Any unfilled portion of the order is canceled. Most market makers who receive IOC orders will attempt to fill the order on a principal basis only, and cancel any unfilled balance. On occasion, this can result in the entire order being cancelled if the market maker does not have any existing inventory of the security in question.\n\n- fok:\n  A Fill or Kill (FOK) order is only executed if the entire order quantity can be filled, otherwise the order is canceled.',
    example: 'gtc',
    title: 'TimeInForce',
  })
  .openapi('TimeInForce')

const OrderTypeSchema = z
  .enum(['market', 'limit', 'stop', 'stop_limit', 'trailing_stop'])
  .openapi({
    description:
      "The order types supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order types for each category:\n - Equity trading: market, limit, stop, stop_limit, trailing_stop.\n - Options trading: market, limit, stop, stop_limit.\n - Options Multileg trading: market, limit.\n - Crypto trading: market, limit, stop_limit.",
    example: 'market',
    title: 'OrderType',
  })
  .openapi('OrderType')

const CreateOrderRequestSchema = z
  .object({
    advanced_instructions: AdvancedInstructionsSchema.exactOptional(),
    client_order_id: z
      .string()
      .max(128)
      .exactOptional()
      .openapi({
        description:
          'A unique identifier for the order. Automatically generated if not sent. (<= 128 characters)',
        example: 'eb9e2aaa-f71a-4f51-b5b4-52a6c565dad4',
      }),
    commission: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The commission you want to collect from the user.',
        example: '1.0',
      }),
    commission_bps: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          '**deprecated**: Please use the commission_type = bps instead and set the desired bps value in the `commission` field.\nThe percent commission you want to charge the end user on the order (expressed in bps). Alpaca will convert the order to a notional amount for purposes of calculating commission.\n',
        example: '10',
      }),
    commission_type: CommissionTypeSchema.exactOptional(),
    extended_hours: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Defaults to false. If true, order will be eligible for execution in the pre-market, after-hours, and overnight sessions. Only works with type `limit` and time_in_force set to either `day` or `gtc`.',
        example: false,
      }),
    instructions: z.string().exactOptional(),
    legs: z
      .array(MLegOrderLegSchema)
      .max(4)
      .exactOptional()
      .openapi({ description: 'list of order legs (<= 4)' }),
    limit_price: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required if type is `limit` or `stop_limit`.\n- In case of `mleg`, the limit_price parameter is expressed with the following notation:\n  - A positive value indicates a debit, representing a cost or payment to be made.\n  - A negative value signifies a credit, reflecting an amount to be received.\n- In case of Fixed Income, the price is expressed in percentage of par value (face value).\nPrice is always clean price, meaning it does not include accrued interest.',
        example: '3.14',
      }),
    notional: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Dollar amount to trade. Cannot work with qty. Only market and limit orders supported with time_in_force = day; Only limit orders for extended hours.',
        example: '3',
      }),
    order_class: OrderClassSchema.exactOptional(),
    position_intent: PositionIntentSchema.exactOptional(),
    qty: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '- For equities, the number of shares to trade. Can be fractionable for only market and day order types.\n- Required for `mleg` order class, represents the number of units to trade of this strategy.\n- For Fixed Income securities, qty represents the order size in par value (face value).\nFor example, to place an order for 1 bond with a face value of $1,000, provide a qty of 1000.\n',
        example: '4.124',
      }),
    side: OrderSideSchema.exactOptional(),
    source: z.string().exactOptional(),
    stop_loss: z
      .object({
        limit_price: z.string().exactOptional().openapi({ example: '3.14' }),
        stop_price: z.string().exactOptional().openapi({ example: '3.14' }),
      })
      .exactOptional()
      .openapi({
        description: 'Takes in a string/number values for stop_price and limit_price',
        required: [],
      }),
    stop_price: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required if type is stop or stop_limit', example: '3.14' }),
    subtag: z.string().exactOptional(),
    swap_fee_bps: z.string().exactOptional(),
    symbol: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Symbol or asset ID to identify the asset to trade. Required for all order classes except for `mleg`.',
        example: 'AAPL',
      }),
    take_profit: z
      .object({ limit_price: z.string().exactOptional().openapi({ example: '3.14' }) })
      .exactOptional()
      .openapi({ description: 'Takes in a string/number value for limit_price', required: [] }),
    time_in_force: TimeInForceSchema,
    trail_percent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If type is trailing_stop, then one of trail_price or trail_percent is required',
        example: '5.0',
      }),
    trail_price: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If type is trailing_stop, then one of trail_price or trail_percent is required',
        example: '3.14',
      }),
    type: OrderTypeSchema,
  })
  .openapi({ required: ['type', 'time_in_force'] })
  .openapi('CreateOrderRequest')

const SettlementTransferSchema = z
  .object({ instant_transfer_id: z.uuid(), transmitter_info: TransmitterInfoSchema })
  .openapi({ required: ['instant_transfer_id', 'transmitter_info'] })
  .openapi('SettlementTransfer')

const CreateSettlementRequestSchema = z
  .object({
    additional_info: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Additional remittance information. Include if the funding source may require additional information to associate to the source account or settlement.\n',
      }),
    transfers: z.array(SettlementTransferSchema),
  })
  .openapi({
    description:
      'Request to create a new settlement. All transfers included must use the same source account, and the total amount received must be in the same currency as the base currency of the source account as well as the transmitter information.\n',
    required: ['transfers'],
  })
  .openapi('CreateSettlementRequest')

const TransferDirectionSchema = z
  .enum(['INCOMING', 'OUTGOING'])
  .openapi({
    description:
      "- **INCOMING**\nFunds incoming to user's account (deposit).\n- **OUTGOING**\nFunds outgoing from user's account (withdrawal).\n",
    example: 'INCOMING',
  })
  .openapi('TransferDirection')

const FeePaymentMethodSchema = z
  .string()
  .openapi({
    description:
      'Only outgoing wire fees are currently supported for automated processing.\n\n\n**user**\tThe end user will pay any applicable fees\n**invoice**\tAny applicable fees will be billed to the client in the following monthly invoice',
    title: 'FeePaymentMethod',
  })
  .openapi('FeePaymentMethod')

const TransferIRATaxWithholdingSchema = z
  .object({
    fed_pct: z.string().exactOptional().openapi({ example: '10.25' }),
    state_pct: z.string().exactOptional().openapi({ example: '8.25' }),
  })
  .openapi({ required: [] })
  .openapi('TransferIRATaxWithholding')

const TransferIRASchema = z
  .object({
    distribution_reason: z.string().exactOptional().openapi({ example: 'normal' }),
    tax_withholding: TransferIRATaxWithholdingSchema.exactOptional(),
    tax_year: z.string().exactOptional().openapi({ example: '2024' }),
  })
  .openapi({ description: 'This field is used for IRA Account only', required: [] })
  .openapi('TransferIRA')

const TransferTypeSchema = z
  .enum(['ach', 'wire'])
  .openapi({
    description:
      '- **ach**\nTransfer via ACH (US Only). Supports both `INCOMING` (deposit) and `OUTGOING` (withdrawal) directions.\n- **wire**\nTransfer via wire. `OUTGOING` (withdrawal) only.\n',
    example: 'ach',
    title: 'TransferType',
  })
  .openapi('TransferType')

const CreateTransferRequestSchema = z
  .object({
    additional_information: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Additional details for when type = `wire`' }),
    amount: z.string().openapi({ description: 'Must be > 0.00' }),
    bank_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Required if type = `wire`\n\nThe bank_relationship created for the account_id [here](https://alpaca.markets/docs/api-references/broker-api/funding/bank/#creating-a-new-bank-relationship)',
      }),
    direction: TransferDirectionSchema,
    fee_payment_method: FeePaymentMethodSchema.exactOptional(),
    ira: TransferIRASchema.exactOptional(),
    relationship_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Required if type = `ach`\n\nThe ach_relationship created for the account_id [here](https://alpaca.markets/docs/api-references/broker-api/funding/ach/#creating-an-ach-relationship)',
      }),
    transfer_type: TransferTypeSchema,
  })
  .openapi({
    description:
      '[See main docs here](https://alpaca.markets/docs/api-references/broker-api/funding/transfers/#creating-a-transfer-entity)',
    required: ['transfer_type', 'amount', 'direction'],
    title: 'CreateTransferRequest',
  })
  .openapi('CreateTransferRequest')

const CreateWatchlistRequestSchema = z
  .object({
    name: z.string().openapi({ description: 'The watchlist name' }),
    symbols: z
      .array(z.string().openapi({ example: '["AAPL", "TSLA"]' }))
      .openapi({ description: 'The new list of symbol names to watch' }),
  })
  .openapi({
    description:
      'This model represents the fields you can specify when Creating or Updating/Replacing a Watchlist',
    required: ['name', 'symbols'],
    title: 'CreateWatchlistRequest',
  })
  .openapi('CreateWatchlistRequest')

const CryptoTransferStatusSchema = z
  .enum(['PROCESSING', 'FAILED', 'COMPLETE'])
  .openapi({ example: 'PROCESSING' })
  .openapi('CryptoTransferStatus')

const CryptoTransferSchema = z
  .object({
    amount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Amount of transfer denominated in the underlying crypto asset' }),
    asset: z
      .string()
      .exactOptional()
      .openapi({ description: 'Symbol of crypto asset for given transfer (e.g. BTC)' }),
    chain: z
      .string()
      .exactOptional()
      .openapi({ description: 'Underlying network for given transfer' }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Timestamp when transfer was created' }),
    direction: TransferDirectionSchema.exactOptional(),
    fees: z.string().exactOptional(),
    from_address: z
      .string()
      .exactOptional()
      .openapi({ description: 'Originating address of the transfer' }),
    id: z.uuid().exactOptional().openapi({ description: 'The crypto transfer ID' }),
    network_fee: z.string().exactOptional(),
    status: CryptoTransferStatusSchema.exactOptional(),
    to_address: z
      .string()
      .exactOptional()
      .openapi({ description: 'Destination address of the transfer' }),
    tx_hash: z
      .string()
      .exactOptional()
      .openapi({ description: 'On-chain transaction hash (e.g. 0xabc...xyz)' }),
    usd_value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Equivalent USD value at time of transfer' }),
  })
  .openapi({
    description:
      "Transfers allow you to transfer assets into your end customer's account (deposits) or out (withdrawal).",
    required: [],
  })
  .openapi('CryptoTransfer')

const CryptoWalletSchema = z
  .object({
    address: z.string().exactOptional(),
    chain: z.string().exactOptional(),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Timestamp (RFC3339) of account creation.' }),
  })
  .openapi({ required: [] })
  .openapi('CryptoWallet')

const DailyCashInterestSchema = z
  .object({
    account_accrued_interest: z.string().exactOptional().openapi({ example: '1.2152' }),
    account_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: '02e5c5ba-36d2-467a-8699-81dc24271291' }),
    account_rate_bps: z.int().exactOptional().openapi({ example: 423 }),
    apr_tier_id: z
      .uuid()
      .exactOptional()
      .openapi({ example: '13d149c8-d620-43e0-978b-88af8abb2ef1' }),
    apr_tier_name: z.string().exactOptional().openapi({ example: 'gold' }),
    cash_balance: z.string().exactOptional().openapi({ example: '10485.76' }),
    correspondent_fee: z.string().exactOptional().openapi({ example: '0.0718' }),
    correspondent_rate_bps: z.int().exactOptional().openapi({ example: 25 }),
    currency: z.string().exactOptional().openapi({ example: 'USD' }),
    date: z.iso.date().exactOptional().openapi({ example: '2024-09-27' }),
  })
  .openapi({ required: [] })
  .openapi('DailyCashInterest')

const DailyTradingLimitSchema = z
  .object({
    cash_held: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Cash reserved for open cash-secured put positions. Only present in the response when the correspondent has at least one open cash-secured put; the field is omitted from the response otherwise (including for options-enabled correspondents with no open cash-secured puts).',
        example: '20000',
      }),
    correspondent: z
      .string()
      .exactOptional()
      .openapi({ description: 'The correspondent code the limits apply to.', example: 'EXMP' }),
    daily_net_limit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The daily net buying limit for the correspondent; further buying is halted once the in_use_limit limit reaches this value.',
        example: '1000000',
      }),
    executed_buys: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Cumulative cash value of executed buy activity contributing to the in-use limit since the last reset.',
        example: '55',
      }),
    executed_sells: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Cumulative cash value of executed sell activity offsetting the in-use limit since the last reset.',
        example: '0',
      }),
    in_use_limit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Real-time net amount currently consuming the daily limit. Equal to `executed_buys` − `executed_sells` + `open_buys` − `open_sells` (+ `cash_held` when a cash-secured put is open). Resets at the start of the next trading day at 8.00 PM ET.',
        example: '55',
      }),
    open_buys: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Reserved cash value of currently open buy orders (limit price for limit orders, notional or estimated mid for market orders) contributing to the in-use limit.',
        example: '0',
      }),
    open_sells: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Reserved cash value of currently open sell orders offsetting the in-use limit.',
        example: '0',
      }),
  })
  .openapi({
    description:
      'Correspondent-level daily net buying limit and the real-time amount currently consuming it.',
    title: 'DailyTradingLimit',
    required: [],
  })
  .openapi('DailyTradingLimit')

const DemoFundingTransferSchema = z
  .object({
    amount: z.string().exactOptional(),
    currency: z.string().exactOptional(),
    receiver_account_number: z.string().exactOptional(),
    receiver_routing_code: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DemoFundingTransfer')

const DoNotExerciseRequestSchema = z
  .object({})
  .openapi({
    description:
      'Request to submit a do-not-exercise (DNE) instruction for an option contract for an account.\nThe request body is empty. A successful request will mark the entire position as do not exercise.',
    title: 'DoNotExerciseRequest',
  })
  .openapi('DoNotExerciseRequest')

const DoNotExerciseResponseSchema = z
  .object({})
  .openapi({
    description:
      'Response to a do-not-exercise request.\nA 200 response indicates that the entire position is set as do not exercise.\nThe response body is empty.',
    title: 'DoNotExerciseResponse',
  })
  .openapi('DoNotExerciseResponse')

const EoDCashInterestReportResponseSchema = z
  .object({
    interest: z.array(DailyCashInterestSchema).exactOptional(),
    next_page_token: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '293639be-8807-423f-b00d-68c781e8bb56' }),
  })
  .openapi({ required: [] })
  .openapi('EoDCashInterestReportResponse')

const ErrorSchema = z
  .object({ code: z.number(), message: z.string() })
  .openapi({ required: ['code', 'message'], title: 'Error' })
  .openapi('Error')

const ExerciseRequestSchema = z
  .object({
    commission: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The commission you want to collect from the user. (notional amount)',
        example: '0.25',
      }),
    qty: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of contracts to exercise. If not provided, all contracts will be exercised.',
        example: '1',
      }),
  })
  .openapi({
    description:
      'Request to exercise an option contract for an account.\nThis can be omitted or left empty, but it also allows for optionally charging a commission for exercising or\nspecifying a specific quantity of contracts to exercise (rather than the full quantity of contracts held).',
    title: 'ExerciseRequest',
    required: [],
  })
  .openapi('ExerciseRequest')

const ExerciseResponseSchema = z
  .object({
    qty_exercised: z
      .string()
      .exactOptional()
      .openapi({ description: 'The total quantity of contracts exercised.' }),
    qty_remaining: z
      .string()
      .exactOptional()
      .openapi({ description: 'The total quantity of contracts remaining after the exercise.' }),
  })
  .openapi({
    description:
      'Response to an exercise request.\nThis will return the total quantity of contracts exercised as well as the quantity of remaining contracts.',
    title: 'ExerciseResponse',
    required: [],
  })
  .openapi('ExerciseResponse')

const FPSLInterestSchema = z
  .object({
    customer: z
      .float64()
      .openapi({
        description: 'The interest accrued by the customer for this loan.',
        example: 1.23,
      }),
    partner: z
      .float64()
      .openapi({
        description: 'The interest accrued by the partner for this loan.',
        example: 1.65,
      }),
  })
  .openapi({
    description:
      "The interest's details.\nPlease note that the object might not be set if interest has not yet been calculated for the loan.\nAdditionally, interest details may be adjusted retroactively at any time until interests are finalized for the month.\nThe loan's changed `updated_at` field can indicate such an adjustment.\n",
    required: ['customer', 'partner'],
  })
  .openapi('FPSLInterest')

const FPSLAnalyticsLoansResponseSchema = z
  .object({
    account_number: z
      .string()
      .openapi({ description: "Account's number at Alpaca", example: '286873545' }),
    in_progress_lending_activities: z
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
        description: 'The number of FPSL lending activities currently in progress for the account.',
        example: 2,
      }),
    interest: FPSLInterestSchema.exactOptional(),
    total_lending_activities: z
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
          'The total number of FPSL lending activities for the account within the specified date range.',
        example: 7,
      }),
  })
  .openapi({
    description:
      'Aggregated FPSL interest and loan-activity counts for one account over a date range.\n',
    required: ['account_number', 'total_lending_activities', 'in_progress_lending_activities'],
  })
  .openapi('FPSLAnalyticsLoansResponse')

const FPSLErrorSchema = z
  .object({ message: z.string().exactOptional().openapi({ example: 'Internal Server Error' }) })
  .openapi({ description: 'FPSL API error response', required: [] })
  .openapi('FPSLError')

const FPSLLoanSchema = z
  .object({
    account_id: z
      .string()
      .openapi({
        description: "Account's ID at Alpaca",
        example: '06d83e79-5bea-4ce9-a362-a25251a700ec',
      }),
    account_number: z
      .string()
      .openapi({ description: "Account's number at Alpaca", example: '286873545' }),
    collateral: z
      .float64()
      .openapi({ description: 'The collateral posted for the loan.', example: 1161.015 }),
    correspondent: z.string().openapi({ description: "Account's correspondent", example: 'LPCA' }),
    date: z.iso.date().openapi({ example: '2006-01-02' }),
    interest: FPSLInterestSchema.exactOptional(),
    market_value: z
      .float64()
      .openapi({ description: 'The total market value of the shares on loan.', example: 1138.25 }),
    quantity: z
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
          'The number of shares in the loan. This may be less than the total number of eligible shares held by the account.',
        example: 5,
      }),
    symbol: z
      .string()
      .openapi({ description: 'Stock/Ticker symbol of a stock or security', example: 'AAPL' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Timestamp of the last update to this loan in RFC-3339 format with microsecond precision with timezone.\nAn updated value may indicate adjusted interest values.\n',
        example: '2025-03-21T15:54:19.857034+01:00',
      }),
  })
  .openapi({
    description: 'A loan of a security by an account on a date.',
    required: [
      'date',
      'account_id',
      'account_number',
      'correspondent',
      'symbol',
      'quantity',
      'market_value',
      'collateral',
    ],
  })
  .openapi('FPSLLoan')

const FPSLTierSchema = z
  .object({
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The timestamp the FPSL tier was created, in RFC 3339 format.',
        example: '2024-09-16T20:06:32.207729Z',
      }),
    customer_split: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Percentage of the customer split represented as a value between 0 and 1.00. Max 2 decimal places are allowed.',
        example: 0.25,
      }),
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the FPSL tier',
        example: '150df7eb-31e7-46b3-8848-a54ca21ff3bc',
      }),
    market: z
      .string()
      .exactOptional()
      .openapi({ description: 'The market of the FPSL tier', example: 'US' }),
    partner_split: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Percentage of the partner split represented as a value between 0 and 1.00. Max 2 decimal places are allowed.',
        example: 0.3,
      }),
    tier_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the FPSL tier', example: 'gold' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The timestamp of the last update to the FPSL tier, in RFC 3339 format.',
        example: '2024-09-16T20:06:32.207729Z',
      }),
  })
  .openapi({ required: [] })
  .openapi('FPSLTier')

const FeePaymentTypeSchema = z
  .literal('invoice')
  .openapi({ description: 'Status:\n * `invoice`\n' })
  .openapi('FeePaymentType')

const FeeTypeSchema = z
  .enum([
    'withdrawal_fee',
    'fx_fee',
    'network_fee',
    'deposit_fee',
    'ach_return_fee',
    'parnter_fee',
    'alpaca_fee',
  ])
  .openapi({
    description:
      'Status:\n  * `withdrawal_fee`: Withdrawal fee\n  * `fx_fee`: FX Fee\n  * `network_fee`\n  * `deposit_fee`\n  * `ach_return_fee`\n  * `parnter_fee`\n  * `alpaca_fee`\n',
  })
  .openapi('FeeType')

const FundingDetailRoutingCodeTypeSchema = z
  .enum(['BIC', 'ACH_ROUTING', 'ABA', 'ROUTING', 'SORT_CODE'])
  .openapi({
    description:
      'Status:\n * `BIC`: bic_swift\n * `ACH`: ach_routing_code\n * `ABA`: aba\n * `ROUTING`: routing_code\n * `SORT_CODE`: sort_code\n',
  })
  .openapi('FundingDetailRoutingCodeType')

const FundingDetailSchema = z
  .object({
    account_holder_name: z.string().exactOptional(),
    account_number: z.string().exactOptional(),
    account_number_type: z.string().exactOptional(),
    bank_address: z.string().exactOptional(),
    bank_country: z.string().exactOptional(),
    bank_name: z.string().exactOptional(),
    currency: z.string().exactOptional(),
    payment_type: FundingDetailPaymentTypeSchema.exactOptional(),
    routing_code: z.string().exactOptional(),
    routing_code_type: FundingDetailRoutingCodeTypeSchema.exactOptional(),
  })
  .openapi({
    description:
      'Gets funding details that can be used to settle and collect funds in each available currency.\n',
    required: [],
  })
  .openapi('FundingDetail')

const FundingWalletRecipientBankSchema = z
  .object({
    account_number: z.string().exactOptional().openapi({ description: 'Bank account number.' }),
    bic_swift: z.string().exactOptional().openapi({ description: 'BIC/SWIFT code' }),
    city: z.string().exactOptional().openapi({ description: 'City' }),
    company_name: z.string().exactOptional(),
    country: z.string().exactOptional().openapi({ description: 'Two-letter ISO country code.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date the beneficiary record was created.' }),
    currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Currency in which money is held in the beneficiary's bank account. Three-digit currency code.",
      }),
    first_name: z.string().exactOptional(),
    iban: z.string().exactOptional().openapi({ description: 'IBAN code' }),
    id: z.uuid().exactOptional(),
    last_name: z.string().exactOptional(),
    payment_types: z.array(FundingDetailPaymentTypeSchema).exactOptional(),
    postal_code: z.string().exactOptional().openapi({ description: 'Postal code' }),
    routing_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'Value for "routing_code_type".' }),
    routing_code_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Local payment routing system.' }),
    state_or_province: z.string().exactOptional().openapi({ description: 'State or province.' }),
    street_address: z.string().exactOptional(),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date the beneficiary record was last updated.' }),
  })
  .openapi({ required: [] })
  .openapi('FundingWalletRecipientBank')

const FundingWalletTransferDirectionSchema = z
  .enum(['incoming', 'outgoing'])
  .openapi({
    description: 'Status:\n * `incoming`: incoming amount\n * `outgoing`: outgoing amount\n',
  })
  .openapi('FundingWalletTransferDirection')

const TransferFeeSchema = z
  .object({
    amount: z.string(),
    currency: CurrencySchema,
    payment_type: FeePaymentTypeSchema,
    type: FeeTypeSchema,
  })
  .openapi({ required: ['type', 'amount', 'currency', 'payment_type'] })
  .openapi('TransferFee')

const FundingWalletTransferStatusSchema = z
  .enum(['PENDING', 'CANCELED', 'EXECUTED', 'FAILED', 'COMPLETE'])
  .openapi({
    description:
      'Status:\n * `PENDING`: Created and waiting to be processed\n * `CANCELED`: Canceled\n * `FAILED`: Failed mostly due to technical reasons\n * `COMPLETE`: Transfer has settled\n',
  })
  .openapi('FundingWalletTransferStatus')

const UsdSchema = z
  .object({ amount: z.string() })
  .openapi({ required: ['amount'] })
  .openapi('Usd')

const FundingWalletTransferSchema = z
  .object({
    account_id: z.uuid().exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
    direction: FundingWalletTransferDirectionSchema.exactOptional(),
    fees: z.array(TransferFeeSchema).exactOptional(),
    id: z.uuid().exactOptional(),
    original_amount: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          '**Deprecation notice:**\nUse `total_amount` for the actual amount debited from the account.\n\nSince: 2026-09-22\nSunset: 2026-12-21\n\n---\n\nThe amount you should expect to receive, calculated as requested amount - fees.',
        'x-deprecation': {
          reason: 'Use `total_amount` for the actual amount debited from the account.',
          since: '2026-09-22',
          sunset: '2026-12-21',
        },
      }),
    original_currency: z
      .string()
      .exactOptional()
      .openapi({ description: 'The currency of the withdrawn amount, 3-letter ISO code' }),
    payment_type: FundingDetailPaymentTypeSchema.exactOptional(),
    requested_amount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The amount requested when the transfer was created.' }),
    status: FundingWalletTransferStatusSchema.exactOptional(),
    total_amount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The total amount moved for the transfer. For outgoing transfers with fees added on top, this is the requested amount plus fees (the total debited from the account). For fee-inclusive outgoing withdrawals, fees are taken out of the requested amount, so this equals requested_amount. For incoming transfers, this is the requested amount credited to the account.',
      }),
    updated_at: z.iso.datetime({ offset: true }).exactOptional(),
    usd: UsdSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FundingWalletTransfer')

const IFFeeTypeSchema = z
  .enum(['partner', 'alpaca'])
  .openapi({
    description:
      'Status:\n * `partner`: The fee on a transfer that was allocated to the partner\n * `alpaca`: The fee on a transfer that was allocated to Alpaca\n',
  })
  .openapi('IFFeeType')

const IFFeeSchema = z
  .object({ amount: z.string(), id: z.uuid(), type: IFFeeTypeSchema })
  .openapi({ required: ['id', 'amount', 'type'] })
  .openapi('IFFee')

const IPOEventSchema = z
  .object({
    account_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The account this event applies to. Only populated for `Allocation` events; omitted for system-wide verbs (`Offering`, `OfferingUpdate`, `Prospectus`, `SixtyMinMail`, `OfferingCancellation`).\n',
      }),
    at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp the event was emitted by the streaming service.' }),
    correspondent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The correspondent that owns the account. Only populated for `Allocation` events.\n',
        example: 'COR1',
      }),
    event_id: z
      .ulid()
      .openapi({
        description:
          'Lexically sortable, monotonically increasing identifier for this event. Use this value with `since_id`/`until_id` to resume the stream from a known point.',
      }),
    offering_reference: z
      .string()
      .openapi({
        description:
          'The IPO offering this event refers to. Use this value with `GET /v1/ipos/{offering_reference}` to fetch the full offering metadata.\n',
        example: 'FI111225',
      }),
    payload: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Verb-specific payload. The shape varies by `verb` - see schema description and `components/examples` for the structure of each. **Omitted entirely for `OfferingCancellation`.**\n',
      }),
    received_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          "Timestamp the upstream event was first received by Alpaca's IPO ingestion pipeline (before fanout).",
      }),
    verb: z
      .enum([
        'Allocation',
        'Offering',
        'OfferingUpdate',
        'Prospectus',
        'SixtyMinMail',
        'OfferingCancellation',
      ])
      .openapi({ description: 'The IPO event type. Determines the shape of `payload`.' }),
  })
  .openapi({
    description:
      'Represents an IPO offering lifecycle event delivered over the IPO events streaming API (`/v2/events/ipos`).\n\nIPO events come in six `verb` types:\n- **`Offering`** - initial publication of an offering. The `payload` carries `name`, `available_to_order`, `ticker_symbol`, `min_price`, `max_price` (and optional `source`).\n- **`OfferingUpdate`** - update to a previously published offering. The `payload` shape is identical to `Offering`.\n- **`Prospectus`** - prospectus document is now available. The `payload` carries `prospectus_url` and `subject`.\n- **`SixtyMinMail`** - 60-minute pricing window has opened, no new orders accepted. The `payload` carries `sixty_minute_expiration_time` and `subject`.\n- **`Allocation`** - final allocation result for a specific account. The `payload` carries `cusip_id`, `final_price`, `allocated_shares`, `allocated_amount`, `subject`. **This is the only verb that is account-scoped**: `account_id` and `correspondent` are populated.\n- **`OfferingCancellation`** - offering was cancelled. **No `payload` is present.**\n\nSee the example payloads below for a concrete example per verb.\n',
    examples: [
      {
        at: '2026-03-20T12:24:58.807230Z',
        event_id: '01J9RPMV5TKB8WX3M4F1KZ7QH2',
        offering_reference: 'FI111225',
        payload: {
          available_to_order: 'Available',
          max_price: '42',
          min_price: '42',
          name: 'Example Corp',
          source: 'example source',
          ticker_symbol: 'EXMP',
        },
        received_at: '2026-03-20T12:24:58.500000Z',
        verb: 'Offering',
      },
      {
        at: '2026-03-20T15:42:11.118274Z',
        event_id: '01J9RQ5HNZQK7M3RDVJ8XBPCT1',
        offering_reference: 'FI111225',
        payload: {
          available_to_order: 'Available',
          max_price: '44',
          min_price: '40',
          name: 'Example Corp',
          source: 'example source',
          ticker_symbol: 'EXMP',
        },
        received_at: '2026-03-20T15:42:10.892140Z',
        verb: 'OfferingUpdate',
      },
      {
        at: '2026-03-19T23:26:46.853262Z',
        event_id: '01J9RSGD8JR2A4K7MZNTPVQ5XW',
        offering_reference: 'FI111225',
        payload: {
          prospectus_url: 'https://example.com/prospectus/example-corp.pdf',
          subject: 'IPO Prospectus: Example Corp',
        },
        received_at: '2026-03-19T23:26:46.612880Z',
        verb: 'Prospectus',
      },
      {
        at: '2026-03-19T22:50:11.729329Z',
        event_id: '01J9RT9P3WYH8KCJM2LFQX5ZRD',
        offering_reference: 'FI111225',
        payload: {
          sixty_minute_expiration_time: '2026-03-19T23:50:11.729329Z',
          subject: 'IPO 60 Minute Mail: Example Corp',
        },
        received_at: '2026-03-19T22:50:11.512640Z',
        verb: 'SixtyMinMail',
      },
      {
        account_id: '6221407b-32b2-3e6b-a7fe-cd79e1b68ba3',
        at: '2026-03-20T00:15:42.318901Z',
        correspondent: 'COR1',
        event_id: '01J9RTPZGHKVB8M3X4F5J7LCQ9',
        offering_reference: 'FI111225',
        payload: {
          allocated_amount: '1764',
          allocated_shares: '42',
          cusip_id: '123456789',
          final_price: '42',
          subject: 'IPO Allocation: Example Corp',
        },
        received_at: '2026-03-20T00:15:42.103572Z',
        verb: 'Allocation',
      },
      {
        at: '2026-03-20T12:24:52.325158Z',
        event_id: '01J9RVB6Y4ZK8M3N7QD2WX1RFP',
        offering_reference: 'FI111225',
        received_at: '2026-03-20T12:24:52.110430Z',
        verb: 'OfferingCancellation',
      },
    ],
    required: ['event_id', 'at', 'verb', 'offering_reference', 'received_at'],
    title: 'IPOEvent',
  })
  .openapi('IPOEvent')

const IPOOfferingSchema = z
  .object({
    anticipated_shares: z
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
        description: 'Anticipated total share count for the offering, when known.',
      }),
    availability: z
      .enum(['available', 'not_available', 'closed'])
      .openapi({
        description:
          'Whether the offering is currently accepting orders.\n- `available` - accepting new orders.\n- `not_available` - not yet open for orders.\n- `closed` - no longer accepting orders.\n\nNote: the IPO Events Stream uses a different casing for the analogous `payload.available_to_order` field on `Offering`/`OfferingUpdate` events (`Available`, `NotAvailable`, `Closed`).\n',
        example: 'available',
      }),
    cusip_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'CUSIP identifier of the offering.', example: '123456789' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A longer human-readable description of the offering, when available.',
      }),
    ipo_reference: z
      .string()
      .openapi({
        description:
          'The unique offering identifier used across the IPO Events Stream and `/v1/ipos/{offering_reference}`. Note that this value is also used as the path parameter, where it is named `offering_reference`.\n',
        example: 'FI111225',
      }),
    logo_small: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL to a small logo asset for the issuer.' }),
    max_price: z
      .string()
      .openapi({ description: 'Upper bound of the indicated price range.', example: '42' }),
    max_ticket_size: z
      .string()
      .exactOptional()
      .openapi({ description: 'Maximum allowed order amount.' }),
    min_price: z
      .string()
      .openapi({ description: 'Lower bound of the indicated price range.', example: '42' }),
    min_ticket_size: z
      .string()
      .exactOptional()
      .openapi({ description: 'Minimum allowed order amount.' }),
    name: z
      .string()
      .openapi({ description: 'The official name of the offering.', example: 'Example Corp' }),
    no_new_orders: z
      .boolean()
      .openapi({
        description:
          'When `true`, the offering is in its 60-minute pricing window and is not accepting new orders. This mirrors the `SixtyMinMail` event on the IPO Events Stream.\n',
        example: false,
      }),
    offering_type: z
      .string()
      .openapi({ description: 'The type of offering. Currently always `IPO`.', example: 'IPO' }),
    prospectus_url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL to the prospectus document. Mirrors the `prospectus_url` payload of the corresponding `Prospectus` event on the IPO Events Stream.\n',
      }),
    settlement_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Anticipated settlement date.' }),
    ticker_symbol: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ticker symbol that will be used once the security begins trading on the secondary market.',
        example: 'EXMP',
      }),
    trade_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Anticipated first trading date on the secondary market.' }),
    underwriters: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of underwriter names participating in the offering.' }),
    unit_step_size: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The minimum increment in which order quantities can be specified.',
      }),
  })
  .openapi({
    description:
      'An IPO (Initial Public Offering) offering exposed via the IPO discovery REST API. Returned by `GET /v1/ipos` and `GET /v1/ipos/{offering_reference}`.\n\nMost IPO lifecycle changes (new offerings, prospectus availability, 60-minute mail, allocations, cancellations) are pushed in real time over the [IPO Events Stream](#operation/subscribeToIPOEventsSSE).\n',
    required: [
      'name',
      'ipo_reference',
      'offering_type',
      'availability',
      'max_price',
      'min_price',
      'no_new_orders',
    ],
    title: 'IPOOffering',
  })
  .openapi('IPOOffering')

const IPOOfferingListResponseSchema = z
  .object({
    data: z
      .array(IPOOfferingSchema)
      .openapi({ description: 'The page of IPO offerings matching the query.' }),
    next_page_token: z
      .string()
      .nullable()
      .openapi({
        description:
          'Opaque cursor for the next page of results. When `null`, there are no further pages. Pass this value back as the `page_token` query parameter to fetch the next page.\n',
      }),
  })
  .openapi({
    description: 'Wrapper response returned by `GET /v1/ipos`.',
    required: ['data', 'next_page_token'],
    title: 'IPOOfferingListResponse',
  })
  .openapi('IPOOfferingListResponse')

const IPOOfferingResponseSchema = z
  .object({ data: IPOOfferingSchema })
  .openapi({
    description: 'Wrapper response returned by `GET /v1/ipos/{offering_reference}`.',
    required: ['data'],
    title: 'IPOOfferingResponse',
  })
  .openapi('IPOOfferingResponse')

const InstantFundingStatusSchema = z
  .enum(['PENDING', 'CANCELED', 'EXECUTED', 'FAILED', 'COMPLETED'])
  .openapi({
    description:
      'Status:\n * `PENDING`: Created and waiting to be processed\n * `CANCELED`: Canceled\n * `EXECUTED`: All fees (including Partner fee) are transacted\n * `FAILED`: Failed mostly due to technical reasons\n * `COMPLETED`: All transactions are settled\n',
  })
  .openapi('InstantFundingStatus')

const InterestSchema = z
  .object({
    amount: z.string(),
    created_at: z.iso.datetime({ offset: true }),
    date: z.iso.date(),
    id: z.uuid(),
    reconciled_at: z.iso.datetime({ offset: true }),
    status: InstantFundingStatusSchema,
  })
  .openapi({ required: ['id', 'date', 'amount', 'status', 'created_at', 'reconciled_at'] })
  .openapi('Interest')

const InstantFundingSchema = z
  .object({
    account_no: z.string(),
    amount: z.string(),
    created_at: z.iso.datetime({ offset: true }),
    deadline: z.iso.date(),
    fees: z.array(IFFeeSchema),
    id: z.uuid(),
    interests: z.array(InterestSchema),
    remaining_payable: z.string(),
    source_account_no: z.string(),
    status: InstantFundingStatusSchema,
    system_date: z.iso.date(),
    total_interest: z.string(),
  })
  .openapi({
    required: [
      'id',
      'amount',
      'account_no',
      'source_account_no',
      'status',
      'system_date',
      'deadline',
      'created_at',
      'total_interest',
      'remaining_payable',
      'interests',
      'fees',
    ],
  })
  .openapi('InstantFunding')

const IssueOAuthTokenResponseSchema = z
  .object({
    access_token: z.string().openapi({ description: 'OAuth token' }),
    scope: z.string().openapi({ description: "Token's scope" }),
    token_type: z.literal('Bearer').openapi({ description: 'Always `Bearer`', example: 'Bearer' }),
  })
  .openapi({
    description: '',
    examples: [
      {
        access_token: '87586f14-c3f4-4912-b107-f75bc17ff87a',
        scope: 'general',
        token_type: 'Bearer',
      },
    ],
    required: ['access_token', 'token_type', 'scope'],
  })
  .openapi('IssueOAuthTokenResponse')

const JITLedgerAccountSchema = z
  .object({
    created_at: z.string().exactOptional().openapi({ description: 'Creation time in UNIX format' }),
    id: z.string().exactOptional().openapi({ description: 'The ledger ID' }),
    ledger_name: z.string().exactOptional().openapi({ description: 'The ledger name' }),
    status: z.string().exactOptional(),
  })
  .openapi({
    examples: [
      {
        created_at: '1653532627',
        id: '2896b9e2-3198-44cd-a08e-4cc4079aee33',
        ledger_name: 'Securities JIT IN',
        status: 'active',
      },
    ],
    title: 'JITLedgerAccount',
    required: [],
  })
  .openapi('JITLedgerAccount')

const JITReportDownloadURLSchema = z
  .object({
    expires_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp when the signed URL expires.' }),
    filename: z.string().openapi({ description: 'Name of the generated report file.' }),
    url: z.url().openapi({ description: 'Temporary signed URL used to download the report.' }),
  })
  .openapi({ required: ['url', 'filename', 'expires_at'] })
  .openapi('JITReportDownloadURL')

const JITReportTypeSchema = z
  .enum([
    'detail',
    'detail_v2',
    'net_summary',
    'net_summary_v2',
    'net_payment',
    'net_payment_final',
    'gross_summary',
    'gross_summary_v2',
    'gross_payment',
    'gross_payment_final',
    'obligation',
    'obligation_v2',
    'settlement',
    'balance',
    'summary',
    'payment',
  ])
  .openapi({
    description:
      "Report file to retrieve. Availability depends on the correspondent's JIT configuration. The `_v2` suffix identifies a file format, not JIT generation v2.",
    example: 'gross_summary_v2',
    title: 'JITReportType',
    'x-enumDescriptions': {
      balance:
        'CSV snapshot of settled and unsettled cash by account and currency for the report date.',
      detail:
        'CSV transaction details with explicit settlement dates and legacy T+N category labels.',
      detail_v2:
        'CSV transaction details with settlement dates, execution timestamps, and entry subtypes.',
      gross_payment: 'Gross payment invoice in PDF using the legacy T+N presentation.',
      gross_payment_final: 'Final gross payment invoice in PDF using the legacy T+N presentation.',
      gross_summary: 'CSV gross totals by currency in T+0/T+1/T+2 buckets.',
      gross_summary_v2:
        'CSV gross totals by explicit settlement date and currency, with no T+N columns.',
      net_payment: 'Net payment invoice in PDF using the legacy T+N presentation.',
      net_payment_final: 'Final net payment invoice in PDF using the legacy T+N presentation.',
      net_summary: 'CSV signed totals by currency in T+0/T+1/T+2 buckets. Crypto uses T+0 only.',
      net_summary_v2:
        'CSV signed totals by explicit settlement date and currency, with no T+N columns.',
      obligation:
        'CSV individual settlement Obligations, including earlier Obligations that remain open.',
      obligation_v2:
        'CSV Obligations grouped by account, settlement date, currency, and direction across report dates.',
      payment: 'Legacy alias for gross_payment.',
      settlement:
        'CSV open settlement records with explicit settlement dates and external references.',
      summary: 'Legacy alias for gross_summary.',
    },
  })
  .openapi('JITReportType')

const JournalSchema = z
  .xor([JNLCSchema, JNLSSchema])
  .openapi({
    description:
      'Represents a cash or securities transfer between accounts, selected by `entry_type`.',
    discriminator: {
      mapping: { JNLC: '#/components/schemas/JNLC', JNLS: '#/components/schemas/JNLS' },
      propertyName: 'entry_type',
    },
    examples: [
      {
        currency: 'USD',
        description: '',
        entry_type: 'JNLC',
        from_account: '8f8c8cee-2591-4f83-be12-82c659b5e748',
        id: '56f106e5-25a4-4eee-96fa-25bb05dc86bc',
        net_amount: '1000',
        price: null,
        qty: null,
        settle_date: null,
        status: 'pending',
        symbol: null,
        system_date: null,
        to_account: '399f85f1-cbbd-4eaa-a934-70027fb5c1de',
      },
      {
        currency: 'USD',
        description: 'this is a test journal',
        entry_type: 'JNLS',
        from_account: '8f4f3d11-4483-4199-840f-6c5fe0b7ca24',
        id: 'f45f67e8-d1fc-4136-aa4f-cf4460aecdfc',
        net_amount: null,
        price: '128.23',
        qty: '0.5',
        settle_date: '2020-12-24',
        status: 'executed',
        symbol: 'AAPL',
        system_date: '2020-12-24',
        to_account: 'a7a7e666-6f2a-433c-8c33-17b66b8941fa',
      },
    ],
    title: 'Journal',
  })
  .openapi('Journal')

const JournalStatusFromSchema = z
  .xor([JournalStatusSchema, z.literal('')])
  .openapi({
    description:
      'Previous journal status in stream status-change events. Empty string is used for the initial status-change event when there is no previous status.',
  })
  .openapi('JournalStatusFrom')

const JournalStatusEventSchema = z
  .object({
    at: z.iso.datetime({ offset: true }).min(1).openapi({ description: 'Timestamp of event' }),
    entry_type: JournalEntryTypeSchema,
    event_id: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Monotonically increasing 64-bit integer not available to new partners, and for backward compatibility purposes only; use `event_ulid` as the stable identifier where possible\n',
      }),
    event_ulid: z
      .ulid()
      .openapi({ description: 'lexically sortable, monotonically increasing character array' }),
    journal_id: z.uuid().openapi({ description: 'The UUID of the related Journal' }),
    status_from: JournalStatusFromSchema,
    status_to: JournalStatusSchema,
  })
  .openapi({
    description: "Represents a change in a Journal's status, sent over the events streaming api.\n",
    examples: [
      {
        at: '2021-05-07T10:28:23.163857Z',
        entry_type: 'JNLC',
        event_id: 1406,
        event_ulid: '01F535Y1FVY8WZHE763HCNS8SZ',
        journal_id: '2f144d2a-91e6-46ff-8e37-959a701cc58d',
        status_from: '',
        status_to: 'queued',
      },
    ],
    required: ['at', 'entry_type', 'event_ulid', 'journal_id', 'status_from', 'status_to'],
    title: 'JournalStatusEvent',
  })
  .openapi('JournalStatusEvent')

const JournalStatusEventV2Schema = z
  .object({
    at: z.iso.datetime({ offset: true }).min(1).openapi({ description: 'Timestamp of event' }),
    batch_error_message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If journal submitted in batch (that is, idempotency_key_type is batch), this is the error message of the batch journal execution.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The description of the journal event when submitted',
        example: 'Journal of cash between accounts',
      }),
    entry_type: JournalEntryTypeSchema,
    event_id: z
      .ulid()
      .openapi({ description: 'lexically sortable, monotonically increasing character array' }),
    idempotency_key: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The idempotency key of the journal event' }),
    idempotency_key_type: z
      .enum(['single', 'batch'])
      .exactOptional()
      .openapi({ description: 'The type of idempotency key' }),
    journal_id: z.uuid().openapi({ description: 'The UUID of the related Journal' }),
    status_from: JournalStatusFromSchema,
    status_to: JournalStatusSchema,
  })
  .openapi({
    description: "Represents a change in a Journal's status, sent over the events streaming api.\n",
    examples: [
      {
        at: '2021-05-07T10:28:23.163857Z',
        description: 'Journal of cash between accounts',
        entry_type: 'JNLC',
        event_id: '01F535Y1FVY8WZHE763HCNS8SZ',
        journal_id: '2f144d2a-91e6-46ff-8e37-959a701cc58d',
        status_from: '',
        status_to: 'queued',
      },
      {
        at: '2021-05-07T10:28:23.163857Z',
        description: 'Journal of cash between accounts',
        entry_type: 'JNLC',
        event_id: '01F535Y1FVY8WZHE763HCNS8SZ',
        idempotency_key: '72bdf18f-7410-43ec-b4e8-b6e41c5c0160',
        idempotency_key_type: 'single',
        journal_id: '2f144d2a-91e6-46ff-8e37-959a701cc58d',
        status_from: 'queued',
        status_to: 'executed',
      },
    ],
    required: ['at', 'entry_type', 'event_id', 'journal_id', 'status_from', 'status_to'],
    title: 'JournalStatusEvent',
  })
  .openapi('JournalStatusEventV2')

const KYCResultTypeSchema = z
  .string()
  .openapi({
    description:
      'A KYC reason identifier used as a property name in `KYCResultTypeSet`. The set is extensible, so integrations must tolerate and preserve unrecognized values.',
    examples: ['IDENTITY_VERIFICATION', 'compromised_document'],
    title: 'KYCResultType',
  })
  .openapi('KYCResultType')

const ListAPRTiersResponseSchema = z
  .object({
    apr_tiers: z
      .array(APRTierSchema)
      .exactOptional()
      .openapi({ description: 'All configured APR tiers available for assignment to accounts' }),
  })
  .openapi({
    description: 'Response to a successful request for a list of APR tiers.\n',
    required: [],
  })
  .openapi('ListAPRTiersResponse')

const ListFPSLLoansResponseSchema = z
  .object({
    loans: z
      .array(FPSLLoanSchema)
      .openapi({ description: 'All FPSL loans matching the filter criteria' }),
    next_page_token: z
      .string()
      .nullable()
      .openapi({
        description:
          'The token to use to retrieve the next page of results. If `null`, there are no more pages.\n',
      }),
  })
  .openapi({
    description: 'Response to a successful request for a list of FPSL loans.\n',
    required: ['loans', 'next_page_token'],
  })
  .openapi('ListFPSLLoansResponse')

const ListFundingDetailsSchema = z
  .object({ funding_details: z.array(FundingDetailSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('ListFundingDetails')

const ListSortBySchema = z.enum(['created_at', 'amount', 'deadline']).openapi('ListSortBy')

const ListTransfersResponseSchema = z
  .object({ transfers: z.array(FundingWalletTransferSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('ListTransfersResponse')

const NextPageTokenSchema = z
  .string()
  .nullable()
  .openapi({
    description:
      'Use this token in your next API call to paginate through the dataset and retrieve the next page of results. A null token indicates there are no more data to fetch.\n',
    example: 'MTAwMA==',
  })
  .openapi('NextPageToken')

const NonTradeActivityEventSchema = z
  .object({
    account_id: z.uuid().openapi({ description: 'Account UUID' }),
    at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp of when the event was emitted' }),
    cusip: z
      .string()
      .exactOptional()
      .openapi({
        description: 'CUSIP the event is associated with, not present when no CUSIP is applicable',
        example: '037833100',
      }),
    description: z
      .string()
      .openapi({
        description: 'Additional information about the event, empty string if not applicable',
        example: 'Example description',
      }),
    entry_type: z
      .string()
      .openapi({
        description: 'Type of entry for e.g JNLC, FEE, INT, DIVNRA etc',
        example: 'JNLC',
      }),
    event_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'Monotonically increasing 64bit integer' }),
    event_ulid: z
      .ulid()
      .openapi({ description: 'lexically sortable, monotonically increasing character array' }),
    id: z.uuid().openapi({ description: 'Record UUID' }),
    net_amount: z
      .number()
      .openapi({ description: 'Net amount if applicable, 0 otherwise', example: 1 }),
    per_share_amount: z
      .number()
      .exactOptional()
      .openapi({ description: 'Per share amount if applicable', example: 0.3 }),
    price: z
      .string()
      .exactOptional()
      .openapi({ description: 'Price if applicable.', example: '0.38921' }),
    qty: z
      .number()
      .exactOptional()
      .openapi({ description: 'Quantity of the stock affected. 0 for cash events' }),
    settle_date: z.iso.date().openapi({ description: 'Date of settlement if applicable' }),
    status: z
      .enum(['executed', 'correct', 'canceled', 'pending'])
      .exactOptional()
      .openapi({
        description:
          'Status of the event. `pending` is an internal/preprocessing status for journal-type NTAs and is only emitted when the subscriber opts in with `include_preprocessing=true`.\n',
        example: 'executed',
      }),
    symbol: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Symbol the event is associated with, empty string when no symbol is applicable',
        example: 'AAPL',
      }),
    system_date: z.iso.date().openapi({ description: 'Date of the event recorded in the system' }),
  })
  .openapi({
    description: 'Represents a non-trade activity SSE event',
    examples: [
      {
        account_id: '8e00606a-c9ac-409a-ba45-f55e8f77984a',
        at: '2024-11-26T15:25:17.803914Z',
        description: '',
        entry_type: 'JNLC',
        event_ulid: '01JDMH7BKCCB4XY5F11HN63NZX',
        id: 'afb78fa2-7e4c-4e0a-bca2-2e0d26a87f88',
        net_amount: 10,
        qty: 0,
        settle_date: '2024-11-26',
        status: 'executed',
        symbol: '',
        system_date: '2024-11-26',
      },
      {
        account_id: '11629972-5fd6-4e14-ad9e-0f0cabd2777f',
        at: '2024-11-12T01:15:53.132425Z',
        description:
          'TAF fee for proceed of 0.010052895 shares (1 trades) on 2024-11-11 by 613651765',
        entry_sub_type: 'TAF',
        entry_type: 'FEE',
        event_ulid: '01JCEZ1ZDCE44GFX6WZ75N4199',
        id: 'd96cea8a-6a77-46cd-bb7b-df6d74442653',
        net_amount: -0.01,
        qty: 0,
        settle_date: '2024-11-12',
        status: 'executed',
        symbol: '',
        system_date: '2024-11-11',
      },
    ],
    required: [
      'account_id',
      'at',
      'id',
      'event_ulid',
      'system_date',
      'settle_date',
      'net_amount',
      'entry_type',
      'description',
    ],
    title: 'NonTradeActivityEvent',
  })
  .openapi('NonTradeActivityEvent')

const OAuthTokenRequestSchema = z
  .object({
    account_id: z.uuid().openapi({ description: 'end-user account ID' }),
    client_id: z.string().openapi({ description: 'OAuth client ID' }),
    client_secret: z.string().openapi({ description: 'OAuth client secret' }),
    redirect_uri: z.string().openapi({ description: 'redirect URI for the OAuth flow' }),
    scope: z.string().openapi({ description: 'scopes requested by the OAuth flow' }),
  })
  .openapi({
    description: 'This model is used for both the Issue and Authorize OAuth token routes',
    example: {
      account_id: '0d18ae51-3c94-4511-b209-101e1666416b',
      client_id: '7a3c52a910e1dc2abbb14da2b6b8e711',
      client_secret: 'bbb14da2b6b8e7117a3c52a910e1dc2a',
      redirect_uri: 'http://localhost',
      scope: 'general',
    },
    required: ['client_id', 'client_secret', 'redirect_uri', 'scope', 'account_id'],
    title: 'OAuthTokenRequest',
  })
  .openapi('OAuthTokenRequest')

const OathClientResponseSchema = z
  .object({
    client_id: z.string().exactOptional().openapi({ description: 'OAuth client id' }),
    description: z.string().exactOptional(),
    live_trading_approved: z.boolean().exactOptional().openapi({ example: true }),
    name: z.string().exactOptional().openapi({ description: 'Broker name (your name)' }),
    privacy_policy: z.string().exactOptional().openapi({ description: 'URL of Privacy Policy' }),
    redirect_uri: z.array(z.string()).exactOptional(),
    status: z
      .enum(['ACTIVE', 'DISABLED'])
      .exactOptional()
      .openapi({ description: 'ACTIVE or DISABLED', example: 'ACTIVE' }),
    terms_of_use: z.string().exactOptional().openapi({ description: 'URL of Terms of Use' }),
    url: z.string().exactOptional(),
  })
  .openapi({
    example: {
      client_id: '7a3c52a910e1dc2abbb14da2b6b8e711',
      description: 'Sample description',
      live_trading_approved: true,
      name: 'TradingApp',
      privacy_policy: '',
      redirect_uri: ['http://localhost'],
      status: 'ACTIVE',
      terms_of_use: '',
      url: 'http://test.com',
    },
    examples: [
      {
        client_id: '7a3c52a910e1dc2abbb14da2b6b8e711',
        description: 'Sample description',
        live_trading_approved: true,
        name: 'TradingApp',
        privacy_policy: '',
        redirect_uri: ['http://localhost'],
        status: 'ACTIVE',
        terms_of_use: '',
        url: 'http://test.com',
      },
    ],
    title: 'OathClientResponse',
    required: [],
  })
  .openapi('OathClientResponse')

const OnfidoSDKOutcomeSchema = z
  .string()
  .openapi({
    description:
      '"NOT_STARTED"\tThe user has not started the SDK flow yet. outcome is set to this default value upon token generation\n"USER_EXITED"\tThe user exited the SDK flow\n"SDK_ERROR"\tAn error occurred in the SDK flow\n"USER_COMPLETED"\tThe user completed the SDK flow',
    title: 'OnfidoSDKOutcome',
  })
  .openapi('OnfidoSDKOutcome')

const OptionDeliverableSchema = z
  .object({
    allocation_percentage: z
      .string()
      .openapi({
        description:
          'Cost allocation percentage of the deliverable.\nThis is used to determine the cost basis of the equity shares received from the exercise, specially for non-standard contracts with multiple deliverables.\n',
        example: '100',
      }),
    amount: z
      .string()
      .openapi({
        description:
          'The deliverable amount. For cash deliverables, this is the cash amount.\nFor standard contract, this is always 100.\nWhen deliverable settlement is delayed and the amount is not yet determined, this value is "0" and delayed_settlement is true.\n',
        example: '100',
      }),
    asset_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier of the deliverable asset. For standard contracts, this is equivalent to underlying_asset_id of the contracts.\nThis field is not returned for cash deliverables.\n',
        example: 'b0b6dd9d-8b9b-48a9-ba46-b9d54906e415',
      }),
    delayed_settlement: z
      .boolean()
      .openapi({
        description:
          'If true, the settlement of the deliverable will be delayed.\nFor instance, in the event of a contract with a delayed deliverable being exercised, both the availability of the deliverable and its settlement may be postponed beyond the typical timeframe.\n',
        example: false,
      }),
    settlement_method: z
      .enum(['BTOB', 'CADF', 'CAFX', 'CCC'])
      .openapi({
        description:
          'Indicates the settlement method that will be used:\n- **BTOB**: Broker to Broker\n- **CADF**: Cash Difference\n- **CAFX**: Cash Fixed\n- **CCC**: Correspondent Clearing Corp\n',
        example: 'CCC',
      }),
    settlement_type: z
      .enum(['T+0', 'T+1', 'T+2', 'T+3', 'T+4', 'T+5'])
      .openapi({
        description:
          'Indicates when the deliverable will be settled if the contract is exercised/assigned.\n',
        example: 'T+2',
      }),
    symbol: z
      .string()
      .openapi({
        description:
          'Symbol of the deliverable. For standard contracts, this is equivalent to the underlying symbol of the contract.\n',
        example: 'AAPL',
      }),
    type: z
      .enum(['cash', 'equity'])
      .openapi({
        description:
          'Type of deliverable, indicating whether it\'s cash or equity. For standard contracts, it is always "equity".\n',
        example: 'equity',
      }),
  })
  .openapi({
    required: [
      'type',
      'symbol',
      'amount',
      'allocation_percentage',
      'settlement_type',
      'settlement_method',
      'delayed_settlement',
    ],
  })
  .openapi('OptionDeliverable')

const OptionContractSchema = z
  .object({
    close_price: z
      .string()
      .exactOptional()
      .openapi({ description: 'The close price of the option contract.', example: '148.38' }),
    close_price_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The date of the close price data.', example: '2023-12-11' }),
    deliverables: z
      .array(OptionDeliverableSchema)
      .exactOptional()
      .openapi({
        description:
          'Represents the deliverables tied to the option contract. While standard contracts entail a single deliverable, non-standard ones can encompass multiple deliverables, each potentially customized with distinct parameters.\nThis array is included in the list contracts response only if the query parameter show_deliverables=true is provided.\n',
      }),
    expiration_date: z.iso
      .date()
      .openapi({
        description: 'The expiration date of the option contract.',
        example: '2025-06-20',
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier of the option contract.',
        example: '98359ef7-5124-49f3-85ea-5cf02df6defa',
      }),
    multiplier: z
      .string()
      .openapi({
        description:
          'The multiplier of the option contract is crucial for calculating both the trade premium and the extended strike price. In standard contracts, the multiplier is always set to 100.\nFor instance, if a contract is traded at $1.50 and the multiplier is 100, the total amount debited when buying the contract would be $150.00.\nSimilarly, when exercising a call contract, the total cost will be equal to the strike price times the multiplier.',
        example: '100',
      }),
    name: z
      .string()
      .openapi({
        description: 'The name of the option contract.',
        example: 'AAPL Jun 20 2025 100 Call',
      }),
    open_interest: z
      .string()
      .exactOptional()
      .openapi({ description: 'The open interest of the option contract.', example: '237' }),
    open_interest_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The date of the open interest data.', example: '2023-12-11' }),
    ppind: z
      .boolean()
      .openapi({
        description:
          'The ppind (Penny Program Indicator) field indicates whether an option contract is eligible for penny price increments,\nwith `true` meaning it is part of the Penny Program and `false` meaning it is not.',
        example: true,
      }),
    root_symbol: z
      .string()
      .exactOptional()
      .openapi({ description: 'The root symbol of the option contract.', example: 'AAPL' }),
    size: z
      .string()
      .openapi({
        description:
          'Represents the number of underlying shares to be delivered in case the contract is exercised/assigned. For standard contracts, this is always 100.\nThis field should **not** be used as a multiplier, specially for non-standard contracts.',
        example: '100',
      }),
    status: z
      .enum(['active', 'inactive'])
      .openapi({ description: 'The status of the option contract.', example: 'active' }),
    strike_price: z
      .string()
      .openapi({ description: 'The strike price of the option contract.', example: '100' }),
    style: z
      .enum(['american', 'european'])
      .openapi({ description: 'The style of the option contract.', example: 'american' }),
    symbol: z
      .string()
      .openapi({
        description: 'The symbol representing the option contract.',
        example: 'AAPL250620C00100000',
      }),
    tradable: z
      .boolean()
      .openapi({
        description: 'Indicates whether the option contract is tradable.',
        example: true,
      }),
    type: z
      .enum(['call', 'put'])
      .openapi({ description: 'The type of the option contract.', example: 'call' }),
    underlying_asset_id: z
      .string()
      .openapi({
        description: 'The unique identifier of the underlying asset.',
        example: 'b0b6dd9d-8b9b-48a9-ba46-b9d54906e415',
      }),
    underlying_symbol: z
      .string()
      .openapi({ description: 'The underlying symbol of the option contract.', example: 'AAPL' }),
  })
  .openapi({
    required: [
      'id',
      'symbol',
      'name',
      'status',
      'tradable',
      'expiration_date',
      'underlying_symbol',
      'underlying_asset_id',
      'type',
      'style',
      'strike_price',
      'multiplier',
      'size',
      'ppind',
    ],
  })
  .openapi('OptionContract')

const OptionsApprovalRequestSchema = z
  .object({
    level: z
      .union([z.literal(1), z.literal(2), z.literal(3)])
      .exactOptional()
      .openapi({
        description:
          'The desired option trading level. 1=Covered Call/Cash-Secured Put, 2=Long Call/Put, 3=Spreads/Straddles.',
        example: 3,
      }),
  })
  .openapi({ required: [] })
  .openapi('OptionsApprovalRequest')

const OptionsApprovalStatusSchema = z
  .enum(['PENDING', 'APPROVED', 'LOWER_LEVEL_APPROVED', 'REJECTED'])
  .openapi({
    description:
      'The request status.\n- PENDING: The request is under review.\n- APPROVED: The request has been successfully approved, the account is now able to trade options.\n- LOWER_LEVEL_APPROVED: The request has been approved for a level lower than the requested one.\n- REJECTED: The request has been rejected.\n',
    example: 'PENDING',
  })
  .openapi('OptionsApprovalStatus')

const OptionsApprovalResponseSchema = z
  .object({
    account_id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The account ID.', example: 'c8f1ef5d-edc0-4f23-9ee4-378f19cb92a4' }),
    approved_level: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
      .exactOptional()
      .openapi({
        description:
          'The option trading level approved for this request. Only present once the request has completed processing.\nNote that a subsequent request may be approved for a different level.\n0=Disabled, 1=Covered Call/Cash-Secured Put, 2=Long Call/Put, 3=Spreads/Straddles."\n',
        example: 3,
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The time when the request was submitted.',
        example: '2021-03-16T18:38:01.942282Z',
      }),
    id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The request ID.', example: '88b5f678-fef5-447b-af15-f21e367e6d8c' }),
    requested_level: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
      .exactOptional()
      .openapi({
        description:
          'The request option trading level. 0=Disabled, 1=Covered Call/Cash-Secured Put, 2=Long Call/Put, 3=Spreads/Straddles.',
        example: 3,
      }),
    requester: z
      .enum(['CORRESPONDENT', 'ALPACA_ADMIN'])
      .exactOptional()
      .openapi({
        description: 'The requester of the options approval request.',
        example: 'CORRESPONDENT',
      }),
    status: OptionsApprovalStatusSchema.exactOptional(),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The time when the request was last updated.',
        example: '2021-03-16T18:38:01.942282Z',
      }),
  })
  .openapi({ required: [] })
  .openapi('OptionsApprovalResponse')

const OptionsApprovalsListSchema = z
  .object({
    next_page_token: NextPageTokenSchema.exactOptional(),
    options_approvals: z
      .array(OptionsApprovalResponseSchema)
      .exactOptional()
      .openapi({ description: 'An array of options approval requests.' }),
  })
  .openapi({ description: 'A list of options approval requests.', required: [] })
  .openapi('OptionsApprovalsList')

const OrderGroupRoleSchema = z
  .enum(['entry', 'take_profit', 'stop_loss'])
  .openapi({
    description:
      'The role of this order within its `bracket`, `oto`, or `oco` order, identified by `group_id`.\n- `entry`: The entry order of a `bracket` or `oto` order.\n- `take_profit`: The take-profit limit order. For an `oco` order, this is the top-level order.\n- `stop_loss`: The stop-loss stop or stop-limit order.\n\nOmitted whenever `group_id` is omitted.',
    example: 'take_profit',
    title: 'OrderGroupRole',
  })
  .openapi('OrderGroupRole')

const OrderLegSchema = z
  .object({
    asset_class: AssetClassSchema.exactOptional(),
    asset_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The asset ID (For options this represents the option contract ID)',
        example: '61e69015-8549-4bfd-b9c3-01e75843f47d',
      }),
    canceled_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Can be null', example: '2021-03-16T18:38:01.942282Z' }),
    client_order_id: z
      .string()
      .max(128)
      .exactOptional()
      .openapi({
        description: 'Client unique order ID',
        example: '61e69015-8549-4bfd-b9c3-01e75843f47d',
      }),
    commission: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The dollar value commission you want to charge the end user.',
        example: '3.14',
      }),
    commission_bps: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          '**deprecated**: Please use the commission_type = bps instead and set the desired bps value in the `commission` field.\nThe percent commission you want to charge the end user on the order (expressed in bps). Alpaca will convert the order to a notional amount for purposes of calculating commission.\n',
        example: '10',
      }),
    commission_type: CommissionTypeSchema.exactOptional(),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Time when order was entered',
        example: '2021-03-16T18:38:01.942282Z',
      }),
    expired_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Can be null', example: '2021-03-16T18:38:01.942282Z' }),
    extended_hours: z.boolean().exactOptional().openapi({ example: true }),
    failed_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Can be null', example: '2021-03-16T18:38:01.942282Z' }),
    filled_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Time the order was filled. Can be null if not filled',
        example: '2021-03-16T18:38:01.942282Z',
      }),
    filled_avg_price: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Filled average price. Can be 0 until order is processed in case order is passed outside of market hours',
        example: '4.2',
      }),
    filled_qty: z
      .string()
      .exactOptional()
      .openapi({ description: 'Filled quantity', example: '4.2' }),
    group_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Opaque identifier shared by every order in the same `bracket`, `oto`, or `oco` order, including its legs and any replacement orders. Use it to associate related orders received from the `trade_updates` stream, where `legs` is not populated. Omitted for other orders.',
        example: '3f1c2b7e-8d4a-4c6e-9f2a-5b7d1e0c9a84',
      }),
    group_role: OrderGroupRoleSchema.exactOptional(),
    hwm: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The highest (lowest) market price seen since the trailing stop order was submitted.',
        example: '3.14',
      }),
    id: z
      .uuid()
      .openapi({
        description: 'Order ID generated by Alpaca',
        example: '61e69015-8549-4bfd-b9c3-01e75843f47d',
      }),
    legs: z
      .array(z.object({}))
      .max(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Always null for an order leg; legs are not nested beyond one level. An empty array is accepted for generated-client compatibility.',
        example: null,
      }),
    limit_price: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Limit price', example: '3.14' }),
    notional: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Ordered notional amount. If entered, qty will be null. Can take up to 2 decimal points.',
        example: '4.2',
      }),
    order_class: OrderClassSchema.exactOptional(),
    order_type: OrderTypeSchema.exactOptional(),
    position_intent: PositionIntentSchema.exactOptional(),
    qty: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Ordered quantity. If entered, notional will be null. Can take up to 2 decimal points.',
        example: '4.2',
      }),
    replaced_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Can be null', example: '2021-03-16T18:38:01.942282Z' }),
    replaced_by: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The order ID that this order was replaced by. (Can be null)',
        example: '61e69015-8549-4bfd-b9c3-01e75843f47d',
      }),
    replaces: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The order ID that this order replaces. (Can be null)',
        example: '61e69015-8549-4bfd-b9c3-01e75843f47d',
      }),
    settlement_currency: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Settlement currency of the order. Omitted when the order has none.',
      }),
    side: OrderSideSchema.exactOptional(),
    status: OrderStatusSchema.exactOptional(),
    stop_price: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Stop price', example: '3.14' }),
    submitted_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Time the order was submitted for execution or, if not yet submitted the created_at time. Because orders are submitted for execution asynchronous to database updates, at times this may be after the created_at time.',
        example: '2021-03-16T18:38:01.942282Z',
      }),
    swap_fee_bps: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Fee in basis points on top swap rate charged by the correspondent on every order',
      }),
    swap_rate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Swap rate is the exchange rate (without mark-up) used to convert the price into local currency or crypto asset',
      }),
    symbol: z.string().openapi({ description: 'The asset symbol', example: 'AALP' }),
    time_in_force: TimeInForceSchema.exactOptional(),
    trail_percent: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The percent value away from the high water mark for trailing stop orders.',
        example: '5.0',
      }),
    trail_price: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The dollar value away from the high water mark for trailing stop orders.',
        example: '3.14',
      }),
    type: OrderTypeSchema.exactOptional(),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Time of most recent change to the order',
        example: '2021-03-16T18:38:01.942282Z',
      }),
    usd: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Nested object to encompass the USD equivalent fields for the local currency fields',
      }),
  })
  .openapi({ required: ['id', 'symbol'] })
  .openapi('OrderLeg')

const OrderSchema = z
  .object({
    asset_class: AssetClassSchema.exactOptional(),
    asset_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The asset ID (For options this represents the option contract ID)',
        example: '61e69015-8549-4bfd-b9c3-01e75843f47d',
      }),
    cancel_requested_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Time when cancellation or bust was requested (if applicable)',
        example: '2021-03-16T18:38:01.942282Z',
      }),
    canceled_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Can be null', example: '2021-03-16T18:38:01.942282Z' }),
    client_order_id: z
      .string()
      .max(128)
      .exactOptional()
      .openapi({
        description: 'Client unique order ID',
        example: '61e69015-8549-4bfd-b9c3-01e75843f47d',
      }),
    commission: z
      .string()
      .exactOptional()
      .openapi({ description: 'The dollar value commission for this order.', example: '3.14' }),
    commission_bps: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          '**deprecated**: Please use the commission_type = bps instead and set the desired bps value in the `commission` field.\nThe percent commission you want to charge the end user on the order (expressed in bps). Alpaca will convert the order to a notional amount for purposes of calculating commission.\n',
        example: '10',
      }),
    commission_type: CommissionTypeSchema.exactOptional(),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Time when order was entered',
        example: '2021-03-16T18:38:01.942282Z',
      }),
    expired_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Can be null', example: '2021-03-16T18:38:01.942282Z' }),
    extended_hours: z.boolean().exactOptional().openapi({ example: true }),
    failed_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Can be null', example: '2021-03-16T18:38:01.942282Z' }),
    filled_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Time the order was filled. Can be null if not filled',
        example: '2021-03-16T18:38:01.942282Z',
      }),
    filled_avg_price: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Filled average price. Can be 0 until order is processed in case order is passed outside of market hours',
        example: '4.2',
      }),
    filled_qty: z
      .string()
      .exactOptional()
      .openapi({ description: 'Filled quantity', example: '4.2' }),
    group_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Opaque identifier shared by every order in the same `bracket`, `oto`, or `oco` order, including its legs and any replacement orders. Use it to associate related orders received from the `trade_updates` stream, where `legs` is not populated. Omitted for other orders.',
        example: '3f1c2b7e-8d4a-4c6e-9f2a-5b7d1e0c9a84',
      }),
    group_role: OrderGroupRoleSchema.exactOptional(),
    hwm: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The highest (lowest) market price seen since the trailing stop order was submitted.',
        example: '3.14',
      }),
    id: z
      .uuid()
      .openapi({
        description: 'Order ID generated by Alpaca',
        example: '61e69015-8549-4bfd-b9c3-01e75843f47d',
      }),
    legs: z
      .array(OrderLegSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'When querying non-simple order_class orders in a nested style, an array of Order entities associated with this order. Otherwise, null.',
      }),
    limit_price: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Limit price', example: '3.14' }),
    notional: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Ordered notional amount. If entered, qty will be null. Can take up to 2 decimal points.',
        example: '4.2',
      }),
    order_class: OrderClassSchema.exactOptional(),
    order_type: OrderTypeSchema.exactOptional(),
    position_intent: PositionIntentSchema.exactOptional(),
    qty: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Ordered quantity. If entered, notional will be null. Can take up to 2 decimal points.',
        example: '4.2',
      }),
    replaced_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Can be null', example: '2021-03-16T18:38:01.942282Z' }),
    replaced_by: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The order ID that this order was replaced by. (Can be null)',
        example: '61e69015-8549-4bfd-b9c3-01e75843f47d',
      }),
    replaces: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The order ID that this order replaces. (Can be null)',
        example: '61e69015-8549-4bfd-b9c3-01e75843f47d',
      }),
    settlement_currency: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Settlement currency of the order. Omitted when the order has none.',
      }),
    side: OrderSideSchema.exactOptional(),
    status: OrderStatusSchema.exactOptional(),
    stop_price: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Stop price', example: '3.14' }),
    submitted_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Time the order was submitted for execution or, if not yet submitted the created_at time. Because orders are submitted for execution asynchronous to database updates, at times this may be after the created_at time.',
        example: '2021-03-16T18:38:01.942282Z',
      }),
    swap_fee_bps: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Fee in basis points on top swap rate charged by the correspondent on every order',
      }),
    swap_rate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Swap rate is the exchange rate (without mark-up) used to convert the price into local currency or crypto asset',
      }),
    symbol: z.string().openapi({ description: 'The asset symbol', example: 'AALP' }),
    time_in_force: TimeInForceSchema.exactOptional(),
    trail_percent: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The percent value away from the high water mark for trailing stop orders.',
        example: '5.0',
      }),
    trail_price: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The dollar value away from the high water mark for trailing stop orders.',
        example: '3.14',
      }),
    type: OrderTypeSchema.exactOptional(),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Time of most recent change to the order',
        example: '2021-03-16T18:38:01.942282Z',
      }),
    usd: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Nested object to encompass the USD equivalent fields for the local currency fields',
      }),
  })
  .openapi({ required: ['id', 'symbol'] })
  .openapi('Order')

const OrderClosedResponseSchema = z
  .object({
    body: OrderSchema.exactOptional(),
    id: z.uuid().openapi({ description: 'UUID of the order that was canceled' }),
    status: z
      .int()
      .openapi({ description: 'Http status code for the attempt to close this Order' }),
  })
  .openapi({
    description: 'Represents the result of asking the api to cancel an Order.\n',
    required: ['id', 'status'],
    title: 'OrderClosedResponse',
  })
  .openapi('OrderClosedResponse')

const OvercontributedIRAAccountSchema = z
  .object({
    account_id: z.string().exactOptional().openapi({ description: 'The account id' }),
    tax_year: z.number().exactOptional().openapi({ description: 'The tax year' }),
    total_contribution_amount: z
      .number()
      .exactOptional()
      .openapi({ description: 'The total contribution amount' }),
  })
  .openapi({ required: [] })
  .openapi('OvercontributedIRAAccount')

const PartyErrorResponseSchema = z
  .strictObject({
    error: z
      .enum([
        'invalid_request',
        'not_found',
        'unauthorized',
        'forbidden',
        'internal_error',
        'party_not_found',
        'invalid_party_id',
        'email_in_use',
        'rate_limited',
      ])
      .openapi({ description: 'Machine-readable error code', example: 'invalid_request' }),
    error_description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable error description', example: 'Validation failed' }),
    fields: z
      .array(
        z
          .object({
            error: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Error message associated with the field',
                example: 'must be an authorized signer of the party',
              }),
            name: z
              .string()
              .openapi({
                description: 'Name of the invalid request field',
                example: 'signer_party_id',
              }),
          })
          .openapi({ required: ['name'] }),
      )
      .exactOptional()
      .openapi({
        description: 'List of invalid request fields, if any',
        example: [{ error: 'must be an authorized signer of the party', name: 'signer_party_id' }],
      }),
  })
  .openapi({
    description:
      'Error response returned by party, agreement, document, and verification endpoints.',
    required: ['error'],
    title: 'PartyErrorResponse',
  })
  .openapi('PartyErrorResponse')

const PortfolioWeightsSchema = z
  .object({
    percent: z
      .string()
      .openapi({ description: 'Percentage allocated to this weight as a decimal string.' }),
    symbol: z
      .string()
      .nullable()
      .openapi({ description: 'Asset symbol. `null` for cash weights. Always present.' }),
    type: z
      .enum(['cash', 'asset'])
      .openapi({ description: 'Type of weight entry in a portfolio.' }),
  })
  .openapi({ required: ['type', 'symbol', 'percent'], title: 'PortfolioWeights' })
  .openapi('PortfolioWeights')

const PortfolioSchema = z
  .object({
    cooldown_days: z
      .int()
      .openapi({
        description:
          'Count of calendar days following a rebalance before a subscription is eligible to trigger another rebalance',
      }),
    created_at: z.string().exactOptional().openapi({ description: 'Portfolio creation timestamp' }),
    description: z.string().exactOptional().openapi({ description: 'Text to describe portfolio' }),
    id: z.string().exactOptional().openapi({ description: 'Portfolio ID' }),
    name: z.string().exactOptional().openapi({ description: 'Name of portfolio' }),
    rebalancing_conditions: z
      .string()
      .exactOptional()
      .openapi({ description: 'Rebalancing conditions for portfolio' }),
    status: z
      .enum(['active', 'inactive', 'needs_adjustment'])
      .exactOptional()
      .openapi({ description: 'Current status of portfolio' }),
    updated_at: z.string().exactOptional().openapi({ description: 'Portfolio updated timestamp' }),
    weights: z
      .array(PortfolioWeightsSchema)
      .exactOptional()
      .openapi({
        description:
          'Weight configuration to portfolio. Sum of "percent" values in the weights array must be 100.00',
      }),
  })
  .openapi({ required: ['cooldown_days'], title: 'Portfolio' })
  .openapi('Portfolio')

const PortfolioHistoryTimeframeSchema = z
  .enum(['1D', '1H', '15Min', '5Min', '1Min'])
  .openapi({ description: 'An interval, duration, or window of time.', example: '15Min' })
  .openapi('PortfolioHistoryTimeframe')

const PortfolioHistorySchema = z
  .object({
    base_value: z
      .number()
      .nullable()
      .openapi({ description: 'Basis in dollar of the profit loss calculation.' }),
    base_value_asof: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          "If included, then it indicates that the base_value is the account's closing\nequity value at this trading date.\n\nIf not specified, then the baseline calculation is done against the earliest returned data item. This could happen for\naccounts without prior closing balances (e.g. new account) or for queries with 1D timeframes, where the first data point\nis used as a reference point.\n",
        example: '2023-10-20',
      }),
    cashflow: z
      .record(z.string(), z.array(z.number()))
      .exactOptional()
      .openapi({
        description: 'Accumulated value in dollar amount as of the end of each time window.',
      }),
    equity: z
      .array(z.number().nullable())
      .openapi({
        description:
          'Equity value of the account in dollar amount as of the end of each time window.',
      }),
    profit_loss: z
      .array(z.number().nullable())
      .openapi({ description: 'Profit/loss in dollar from the base value.' }),
    profit_loss_pct: z
      .array(z.number().nullable())
      .openapi({
        description: 'Profit/loss in percentage from the base value.',
        example: [0.001, 0.002],
      }),
    timeframe: PortfolioHistoryTimeframeSchema,
    timestamp: z
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
      .openapi({
        description:
          'Time of each data element, left-labeled (the beginning of time window).\n\nThe values returned are in [UNIX epoch format](https://en.wikipedia.org/wiki/Unix_time).\n',
      }),
  })
  .openapi({
    description: 'Timeseries data for equity and profit loss information of the account.',
    required: ['timestamp', 'equity', 'profit_loss', 'profit_loss_pct', 'base_value', 'timeframe'],
    title: 'PortfolioHistory',
  })
  .openapi('PortfolioHistory')

const PortfolioHistoryErrorSchema = z
  .object({ code: z.int(), message: z.string() })
  .openapi({ required: ['code', 'message'], title: 'Portfolio History Error' })
  .openapi('PortfolioHistoryError')

const SkippedOrderSchema = z
  .object({
    currency: z.string().exactOptional().openapi({ description: 'Currency of the order' }),
    notional: z.string().exactOptional().openapi({ description: 'Notional value of the order' }),
    reason: z.string().openapi({ description: 'Reason for the order being skipped' }),
    reason_details: z
      .string()
      .openapi({ description: 'Formatted error message with the cause of the skip' }),
    side: z
      .string()
      .exactOptional()
      .openapi({ description: 'Side of the order (buy, sell, sell_short)' }),
    symbol: z.string().openapi({ description: 'Symbol for which the adjustment was skipped' }),
  })
  .openapi({
    description:
      "Skipped orders model contains information for such orders that the rebalancing engine didn't send to our order system due to some validation issues.",
    required: ['symbol', 'reason', 'reason_details'],
    title: 'SkippedOrder',
  })
  .openapi('SkippedOrder')

const PortfolioRunStatusSchema = z
  .enum([
    'QUEUED',
    'IN_PROGRESS',
    'CANCELED',
    'CANCELED_MID_RUN',
    'ERROR',
    'TIMEOUT',
    'COMPLETED_ADJUSTED',
    'COMPLETED_SUCCESS',
  ])
  .openapi({
    description:
      "|       Status       | Final |                                 Represented State                                |                                                         Notes                                                        |\n|:------------------:|:-----:|:--------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------:|\n| QUEUED             | No    | The run has been queued, waiting for our system to process it.                   | Runs only executed when the US market is open and there's at least 15 minutes before the market closes.              |\n| IN_PROGRESS        | No    | Portfolio adjustment is in progress.                                             |                                                                                                                      |\n| CANCELED           | Yes, unless the run was already placing orders | Portfolio run canceled before it started, or while waiting to be retried | If the run was already placing orders, those orders are not canceled and the run's final status can replace CANCELED. |\n| CANCELED_MID_RUN   | Yes   | Portfolio run canceled while executing.                                          | The portfolio's state is in between the pre-run and post-run state, manual remediation or job re-run is recommended. |\n| ERROR              | Yes   | There was an error while rebalancing the portfolio.                              | The portfolio's state is in between the pre-run and post-run state, manual remediation or job re-run is recommended. |\n| TIMEOUT            | Yes   | A timeout occurred while rebalancing the portfolio.                               | The portfolio's state is in between the pre-run and post-run state, manual remediation or job re-run is recommended. |\n| COMPLETED_ADJUSTED | Yes   | The portfolio has been adjusted                                                  | The adjustments have been prepared, but the run details haven't yet updated with the list of resulting orders        |\n| COMPLETED_SUCCESS  | Yes   | The portfolio has been adjusted, run status updated                              |                                                                                                                      |",
    title: 'PortfolioRunStatus',
  })
  .openapi('PortfolioRunStatus')

const PortfolioRunSchema = z
  .object({
    account_id: z.string().exactOptional().openapi({ description: 'Account ID for given run' }),
    canceled_at: z.string().exactOptional().openapi({ description: 'RFC3339 format' }),
    completed_at: z.string().exactOptional().openapi({ description: 'RFC3339 format' }),
    failed_orders: z
      .array(OrderSchema)
      .exactOptional()
      .openapi({ description: 'Array of failed orders for this run' }),
    id: z.string().exactOptional().openapi({ description: 'Run ID' }),
    initiated_from: z
      .enum(['system', 'api'])
      .exactOptional()
      .openapi({ description: 'system or api' }),
    orders: z
      .array(OrderSchema)
      .exactOptional()
      .openapi({ description: 'Array of executed orders for this run' }),
    portfolio_id: z.string().exactOptional().openapi({ description: 'Portfolio ID for given run' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'Explainer text in case of failed runs' }),
    skipped_orders: z
      .array(SkippedOrderSchema)
      .exactOptional()
      .openapi({ description: 'Array of skipped order for this run' }),
    status: PortfolioRunStatusSchema.exactOptional(),
    type: z
      .enum(['full_rebalance', 'invest_cash'])
      .exactOptional()
      .openapi({ description: 'full_rebalance or invest_cash' }),
    updated_at: z.string().exactOptional().openapi({ description: 'RFC3339 format' }),
    weights: z
      .array(PortfolioWeightsSchema)
      .exactOptional()
      .openapi({ description: 'Considered weighting for this run' }),
  })
  .openapi({ title: 'PortfolioRun', required: [] })
  .openapi('PortfolioRun')

const PortfolioSubscriptionSchema = z
  .object({
    account_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Account ID subscribing to portfolio' }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Subscription creation timestamp' }),
    id: z.string().exactOptional().openapi({ description: 'Subscription ID' }),
    last_rebalanced_at: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last rebalancing event for this subscription. Can be null.' }),
    portfolio_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Portfolio ID for subscription' }),
  })
  .openapi({ title: 'PortfolioSubscription', required: [] })
  .openapi('PortfolioSubscription')

const PortfolioWeightRequestBaseSchema = z
  .object({
    percent: z
      .string()
      .openapi({
        description:
          'Percentage allocated to this weight. Values must be greater than zero, and all supplied weights must total exactly 100.',
        example: '50',
      }),
    symbol: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Asset symbol. Required and non-null when `type` is `asset`.' }),
    type: z
      .enum(['cash', 'asset'])
      .openapi({ description: 'Type of weight entry in a portfolio.' }),
  })
  .openapi({
    description: 'Shared fields for a portfolio weight in a create or update request.',
    required: ['type', 'percent'],
    title: 'PortfolioWeightRequestBase',
  })
  .openapi('PortfolioWeightRequestBase')

const PortfolioWeightAssetEntrySchema = PortfolioWeightRequestBaseSchema.and(
  z
    .object({ symbol: z.string(), type: z.literal('asset') })
    .openapi({ required: ['type', 'symbol'] }),
)
  .openapi({
    description: 'An asset weight. `symbol` is required.',
    title: 'PortfolioWeightAssetEntry',
  })
  .openapi('PortfolioWeightAssetEntry')

const PortfolioWeightCashEntrySchema = PortfolioWeightRequestBaseSchema.and(
  z.object({ type: z.literal('cash') }).openapi({ required: ['type'] }),
)
  .openapi({
    description: 'A cash weight. `symbol` is optional and may be null.',
    title: 'PortfolioWeightCashEntry',
  })
  .openapi('PortfolioWeightCashEntry')

const PortfolioWeightRequestSchema = z
  .xor([PortfolioWeightCashEntrySchema, PortfolioWeightAssetEntrySchema])
  .openapi({
    description: 'Weight entry in a portfolio create or update request, selected by `type`.',
    discriminator: {
      mapping: {
        asset: '#/components/schemas/PortfolioWeightAssetEntry',
        cash: '#/components/schemas/PortfolioWeightCashEntry',
      },
      propertyName: 'type',
    },
    title: 'PortfolioWeightRequest',
  })
  .openapi('PortfolioWeightRequest')

const PositionSchema: z.ZodType<PositionType> = z
  .lazy(() =>
    z
      .object({
        asset_class: AssetClassSchema,
        asset_id: z
          .uuid()
          .openapi({
            description: 'Asset ID (For options this represents the option contract ID)',
            example: '904837e3-3b76-47ec-b432-046db621571b',
          }),
        asset_marginable: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Indicates if this asset is marginable' }),
        avg_entry_price: z
          .string()
          .openapi({ description: 'Average entry price of the position', example: '100.0' }),
        avg_entry_swap_rate: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The average swap rate of the position. This is only returned for LCT accounts.',
            example: '1.40',
          }),
        change_today: z
          .string()
          .openapi({
            description: 'Percent change from last day price (by a factor of 1)',
            example: '0.0084',
          }),
        cost_basis: z.string().openapi({ description: 'Total cost basis', example: '500.0' }),
        current_price: z
          .string()
          .openapi({ description: 'Current asset price per share', example: '120.0' }),
        exchange: z
          .string()
          .openapi({ description: 'Exchange name of the asset', example: 'NASDAQ' }),
        lastday_price: z
          .string()
          .openapi({
            description:
              "Last day's asset price per share based on the closing value of the last trading day",
            example: '119.0',
          }),
        market_value: z
          .string()
          .openapi({ description: 'Total market value of the position', example: '600.0' }),
        qty: z.string().openapi({ description: 'The number of shares', example: '5' }),
        qty_available: z
          .string()
          .openapi({
            description:
              'Total number of shares available minus open orders / locked for options covered call',
            example: '5',
          }),
        side: z.enum(['long', 'short']).openapi({ example: 'long' }),
        swap_rate: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The latest swap rate. This is only returned for LCT accounts.',
            example: '1.50',
          }),
        symbol: z.string().openapi({ description: 'Asset symbol', example: 'AAPL' }),
        unrealized_intraday_pl: z
          .string()
          .openapi({ description: 'Unrealized profit/loss for the day', example: '10.0' }),
        unrealized_intraday_plpc: z
          .string()
          .openapi({
            description: 'Unrealized interday profit/loss percent (by a factor of 1)',
            example: '0.0084',
          }),
        unrealized_pl: z
          .string()
          .openapi({ description: 'Unrealized profit/loss', example: '100.0' }),
        unrealized_plpc: z
          .string()
          .openapi({
            description: 'Unrealized profit/loss percent (by a factor of 1)',
            example: '0.20',
          }),
        usd: USDPositionSchema.exactOptional(),
      })
      .openapi({
        examples: [
          {
            asset_class: 'us_equity',
            asset_id: '93f58d0b-6c53-432d-b8ce-2bad264dbd94',
            asset_marginable: false,
            avg_entry_price: '172.08',
            change_today: '0.0189483657034581',
            cost_basis: '688.32',
            current_price: '172.08',
            exchange: 'NASDAQ',
            lastday_price: '168.88',
            market_value: '688.32',
            qty: '4',
            qty_available: '4',
            side: 'long',
            symbol: 'AAPL',
            unrealized_intraday_pl: '0',
            unrealized_intraday_plpc: '0',
            unrealized_pl: '0',
            unrealized_plpc: '0',
          },
        ],
        required: [
          'asset_id',
          'symbol',
          'exchange',
          'asset_class',
          'avg_entry_price',
          'qty',
          'qty_available',
          'side',
          'market_value',
          'cost_basis',
          'unrealized_pl',
          'unrealized_plpc',
          'unrealized_intraday_pl',
          'unrealized_intraday_plpc',
          'current_price',
          'lastday_price',
          'change_today',
        ],
      }),
  )
  .openapi('Position')

const PositionClosedResponseSchema = z
  .object({
    body: OrderSchema.exactOptional(),
    status: z
      .int()
      .openapi({ description: 'Http status code for the attempt to close this position' }),
    symbol: z.string().openapi({ description: 'Symbol name of the asset' }),
  })
  .openapi({
    description:
      'Represents the result of asking the api to close a position.\n\n`body` is the Order used to close out the position.',
    examples: [
      {
        body: {
          asset_class: 'us_equity',
          asset_id: 'b0b6dd9d-8b9b-48a9-ba46-b9d54906e415',
          canceled_at: null,
          client_order_id: '52f8574c-96d5-49b6-94c1-2570a268434e',
          commission: '1.0',
          created_at: '2022-02-04T16:53:29.53427917Z',
          expired_at: null,
          extended_hours: false,
          failed_at: null,
          filled_at: null,
          filled_avg_price: null,
          filled_qty: '0',
          hwm: null,
          id: 'f7f25e89-939a-4587-aaf6-414a6b3c341d',
          legs: null,
          limit_price: null,
          notional: null,
          order_class: '',
          order_type: 'market',
          qty: '2',
          replaced_at: null,
          replaced_by: null,
          replaces: null,
          side: 'sell',
          status: 'accepted',
          stop_price: null,
          submitted_at: '2022-02-04T16:53:29.533738219Z',
          symbol: 'AAPL',
          time_in_force: 'day',
          trail_percent: null,
          trail_price: null,
          type: 'market',
          updated_at: '2022-02-04T16:53:29.53427917Z',
        },
        status: 200,
        symbol: 'AAPL',
      },
    ],
    required: ['symbol', 'status'],
    title: 'PositionClosedResponse',
  })
  .openapi('PositionClosedResponse')

const RebalancingConditionsSchema = z
  .object({
    day: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Used to specify the rebalancing day for conditions of type = calendar. Only permitted and required for type = calendar. In scenarios when the specified day aligns to a non-trading day, the rebalance will be triggered on the preceding trading day. For type= annually, the value must be passed in MM-DD format. If 02-29 is specified and the current year is not a leap year, the rebalance will occur on the trading day preceding 2/29. For type= quarterly and monthly the value must be an integer between 1 and 31 inclusive. This represents the day of month. For quarterly, rebalancing will trigger on this day in January, March, June, and December. If the specified day is non-existent for the month then the rebalancing will trigger on the preceding trading day. For type = weekly, permitted values are Monday, Tuesday, Wednesday, Thursday, Friday.',
      }),
    percent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Must be a positive value, up to two decimal places. Only permitted and required for type = drift_band. This is the max allowable drift percent from any target weight (+/-)',
      }),
    sub_type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For type = drift_band: absolute or relative. For type = calendar: weekly,monthly, quarterly or annually. For type = on_portfolio_update: there is no subtype',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Possible values of drift_band, calendar or on_portfolio_update' }),
  })
  .openapi({ title: 'RebalancingConditions', required: [] })
  .openapi('RebalancingConditions')

const ReportsResponseSchema = z
  .object({
    account_no: z.string(),
    deadline: z.iso.date(),
    instant_funding_transfers: z.array(InstantFundingSchema).exactOptional(),
    system_date: z.iso.date(),
    total_amount_owed: z.string(),
    total_interest_penalty: z.string(),
  })
  .openapi({
    required: [
      'system_date',
      'account_no',
      'total_amount_owed',
      'total_interest_penalty',
      'deadline',
    ],
  })
  .openapi('ReportsResponse')

const ReverseBatchJournalRequestSchema = z
  .object({
    entries: z
      .array(
        z
          .object({
            amount: z
              .string()
              .exactOptional()
              .openapi({ description: "Journal amount in the entry's `currency`" }),
            currency: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  "The currency of the journal. Defaults to the system currency (for example, USD in the US or EUR in the EU) when omitted. Correspondents with local currency trading enabled must send this field, and the value must be the system currency or one of the correspondent's enabled currencies",
              }),
            description: z
              .string()
              .exactOptional()
              .openapi({ description: 'Journal description, gets returned in the response' }),
            from_account: z
              .string()
              .exactOptional()
              .openapi({ description: 'The ID of the from_account that you want to journal from' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    entry_type: z
      .literal('JNLC')
      .exactOptional()
      .openapi({ description: 'Only supports `JNLC` for now' }),
    to_account: z
      .string()
      .exactOptional()
      .openapi({ description: 'The destination of funds. Most likely is your Sweep Firm Account' }),
  })
  .openapi({
    examples: [
      {
        entries: [
          { amount: '10', from_account: '8e00606a-c9ac-409a-ba45-f55e8f77984a' },
          { amount: '100', from_account: 'b9b19618-22dd-4e80-8432-fc9e1ba0b27d' },
          { amount: '100', from_account: 'c96a5e16-7fca-425a-b67b-0814d064bfc0' },
        ],
        entry_type: 'JNLC',
        to_account: '8f8c8cee-2591-4f83-be12-82c659b5e748',
      },
    ],
    required: [],
  })
  .openapi('ReverseBatchJournalRequest')

const VASPSchema = z
  .object({
    address: z.string().exactOptional(),
    city: z.string().exactOptional(),
    country: z
      .string()
      .exactOptional()
      .openapi({ description: 'ISO 3166-1 alpha-2 country code for the VASP.', example: 'US' }),
    did: z
      .string()
      .regex(/^did:[a-zA-Z0-9]*:.*$/)
      .exactOptional()
      .openapi({
        description: 'The W3C Decentralized Identifier (DID) representing the VASP.',
        example: 'did:ethr:0xf1c002f9e7ca88018d6dcf1e86403fb2f5f055f4',
      }),
    emailDomain: z.string().exactOptional(),
    id: z
      .string()
      .openapi({
        description: 'Opaque identifier for the VASP directory record.',
        example: 'vasp-1',
      }),
    name: z.string(),
    postalCode: z.string().exactOptional(),
    state: z.string().exactOptional(),
    website: z.url().exactOptional(),
  })
  .openapi({
    description: 'Virtual Asset Service Provider returned by the directory search.',
    required: ['id', 'name'],
  })
  .openapi('VASP')

const SearchVASPsResponseSchema = z
  .object({
    page: z.int().exactOptional().openapi({ example: 1 }),
    pages: z.int().exactOptional().openapi({ example: 1 }),
    total: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total count of matching records.', example: 1 }),
    vasps: z.array(VASPSchema).openapi({ example: [{ id: 'vasp-1', name: 'Example Exchange' }] }),
  })
  .openapi({ description: 'Paginated VASP directory search results.', required: ['vasps'] })
  .openapi('SearchVASPsResponse')

const SettlementStatusSchema = z
  .enum(['PENDING', 'AWAITING_ADDITIONAL_FUNDS', 'COMPLETED', 'FAILED'])
  .openapi({
    description:
      'Values:\n * `PENDING`: Created and waiting to be processed\n * `AWAITING_ADDITIONAL_FUNDS`: Waiting for additional funds to be deposited\n * `COMPLETED`: All transactions are reconciled\n * `FAILED`: Attempt to process this settlement has failed. If this is observed\n  additional remittance information may be required, or one of the transfers being settled\n  accrued additional interest since the settlement was created.\n',
  })
  .openapi('SettlementStatus')

const SettlementResponseSchema = z
  .object({
    additional_info: z.string().exactOptional(),
    asset_class: JITAssetClassSchema.exactOptional(),
    completed_at: z.iso.datetime({ offset: true }).exactOptional(),
    created_at: z.iso.datetime({ offset: true }),
    currency: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The currency of the settlement. Only applicable to JIT settlements.\n',
      }),
    id: z.uuid(),
    interest_amount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The total interest amount accrued on the transfers included in this settlement. Only applicable for instant funding settlements.\n',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reason for failure, if applicable\n' }),
    source_account_number: z.string().exactOptional(),
    status: SettlementStatusSchema,
    total_amount: z.string(),
    updated_at: z.iso.datetime({ offset: true }),
  })
  .openapi({
    description: 'A settlement response, either from creation or retrieval\n',
    required: ['id', 'total_amount', 'status', 'created_at', 'updated_at'],
  })
  .openapi('SettlementResponse')

const SettlementsResponseSchema = z
  .object({ settlements: z.array(SettlementResponseSchema) })
  .openapi({
    description: 'Response to a successful settlements request\n',
    required: ['settlements'],
  })
  .openapi('SettlementsResponse')

const SignedAgreementTypeSchema = z
  .enum([
    'margin_agreement',
    'certifications_and_resolutions_statement',
    'nasdaq_agreement',
    'nyse_agreement',
    'oauth_api_agreement',
    'opra_agreement',
    'trusted_contact_consent',
    'custodian_customer_agreement',
    'account_agreement',
    'customer_agreement',
    'options_agreement',
    'master_securities_lending_agreement',
    'crypto_agreement',
    'dvp_customer_agreement',
    'etc_agreement',
    'joint_account_agreement',
  ])
  .openapi({
    description:
      'The type of agreement that was signed. Union of per-party and per-account\nagreement types returned by `POST /v1/agreements`.\n\nPer-party agreements (no `account_id`):\n- margin_agreement\n- certifications_and_resolutions_statement (legal entities only)\n- nasdaq_agreement\n- nyse_agreement\n- oauth_api_agreement\n- opra_agreement\n- trusted_contact_consent\n- custodian_customer_agreement\n\nPer-account agreements (`account_id` present):\n- account_agreement\n- customer_agreement\n- options_agreement\n- master_securities_lending_agreement\n- crypto_agreement\n- dvp_customer_agreement\n- etc_agreement\n- joint_account_agreement\n',
    example: 'certifications_and_resolutions_statement',
    title: 'SignedAgreementType',
  })
  .openapi('SignedAgreementType')

const SignedAgreementSchema = z
  .strictObject({
    account_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The account associated with this agreement. Present for per-account agreements\nsuch as `customer_agreement`, `account_agreement`, `options_agreement`,\n`master_securities_lending_agreement`, `crypto_agreement`,\n`dvp_customer_agreement`, `etc_agreement`, and `joint_account_agreement`.\n',
        example: 'd7e8f9a0-b1c2-3d4e-5f67-890123456789',
      }),
    agreement: SignedAgreementTypeSchema,
    ip_address: z
      .string()
      .openapi({
        description: 'The IP address from which the agreement was signed',
        example: '10.0.0.50',
      }),
    party_id: z
      .uuid()
      .openapi({
        description: 'The party that signed the agreement',
        example: 'e4d3c2b1-a098-7654-3210-fedcba987654',
      }),
    revision: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The agreement revision. The format is `XX.YYYY.MM` where XX is an incrementing\nrevision number, YYYY is the year and MM is the month. If the revision is not\nspecified in the request, the active revision will be used, which will align\nwith the [Alpaca Documents Library](https://alpaca.markets/disclosures).\nOmitted for agreement types that do not support revisions\n(`nasdaq_agreement`, `nyse_agreement`, `oauth_api_agreement`).\n',
        example: '01.2024.02',
      }),
    signed_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp when the agreement was signed',
        example: '2024-08-18T14:00:00Z',
      }),
    signer_party_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The party ID of the authorized signer who signed on behalf of a legal entity.\nRequired for legal entity parties.\n',
        example: 'b5c7e1a2-3d4f-4e5a-8b6c-9d0e1f2a3b4c',
      }),
  })
  .openapi({
    description:
      'A signed agreement between a party and Alpaca, as returned by\n`POST /v1/agreements`. Includes both per-party and per-account agreements.\n',
    required: ['party_id', 'agreement', 'signed_at', 'ip_address'],
    title: 'SignedAgreement',
  })
  .openapi('SignedAgreement')

const SortOrderSchema = z.enum(['ASC', 'DESC']).openapi('SortOrder')

const StatusFundingEventSchema = z
  .object({
    account_id: z.uuid().min(1).openapi({ description: 'Account UUID' }),
    at: z.string().min(1).openapi({ description: 'Timestamp of when the transfer status changed' }),
    correspondent: z.string().min(1).max(4).openapi({ description: "Correspondent's code" }),
    entity_id: z.uuid().min(1).openapi({ description: "Entity's UUID" }),
    entity_type: z
      .uuid()
      .min(1)
      .openapi({
        description: 'Valid values are BankRelationship, WireBank, Transfer and FundingWallet.',
      }),
    event_id: z
      .ulid()
      .min(1)
      .openapi({ description: 'lexically sortable, monotonically increasing character array' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Used when an a bank relationship is rejected, a wire bank is canceled, etc.',
      }),
    status_from: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Valid values are based on entity type:\n- BankRelationship:\n  - QUEUED\n  - CANCEL_REQUESTED\n  - CANCEL_SENT\n  - CANCEL_FAILED\n  - PENDING\n  - SENT_TO_CLEARING\n  - APPROVED\n  - CANCELED\n  - REJECTED\n- WireBank:\n  - QUEUED\n  - SENT_TO_CLEARING\n  - APPROVED\n  - CANCELED\n  - REJECTED\n- Transfer:\n  - QUEUED\n  - APPROVAL_PENDING\n  - CANCELED\n  - EXPIRED\n  - APPROVED\n  - REJECTED\n  - SENT_TO_CLEARING\n  - COMPLETE\n  - RETURNED\n- FundingWallet:\n  - active\n  - pending\n',
      }),
    status_to: z
      .string()
      .min(1)
      .openapi({
        description:
          'Valid values are based on entity type:\n- BankRelationship:\n  - QUEUED\n  - CANCEL_REQUESTED\n  - CANCEL_SENT\n  - CANCEL_FAILED\n  - PENDING\n  - SENT_TO_CLEARING\n  - APPROVED\n  - CANCELED\n  - REJECTED\n- WireBank:\n  - QUEUED\n  - SENT_TO_CLEARING\n  - APPROVED\n  - CANCELED\n  - REJECTED\n- Transfer:\n  - QUEUED\n  - APPROVAL_PENDING\n  - CANCELED\n  - EXPIRED\n  - APPROVED\n  - REJECTED\n  - SENT_TO_CLEARING\n  - COMPLETE\n  - RETURNED\n- FundingWallet:\n  - active\n  - pending\n',
      }),
  })
  .openapi({
    description:
      "Represents a change in a Funding entity's status, sent over the events streaming api. Currently, the supported entities are: bank relationships, bank wires, transfers and funding wallets.",
    examples: [
      {
        account_id: '8e00606a-c9ac-409a-ba45-f55e8f77984a',
        at: '2025-04-11T19:52:24.066998Z',
        correspondent: 'LPCA',
        entity_id: 'c4ed4206-697b-4859-ab71-b9de6649859d',
        entity_type: 'BankRelationship',
        event_id: '01F7VQQ782DM57SJNWAYMD14J9',
        status_to: 'QUEUED',
      },
      {
        account_id: '8e00606a-c9ac-409a-ba45-f55e8f77984a',
        at: '2025-04-11T19:52:24.066998Z',
        correspondent: 'LPCA',
        entity_id: 'c4ed4206-697b-4859-ab71-b9de6649859d',
        entity_type: 'BankRelationship',
        event_id: '01F7VQQ782DM57SJNWAYMD14J9',
        reason: 'bank account owner name does not match brokerage account name',
        status_from: 'QUEUED',
        status_to: 'REJECTED',
      },
    ],
    required: [
      'event_id',
      'at',
      'account_id',
      'correspondent',
      'entity_id',
      'entity_type',
      'status_to',
    ],
    title: 'StatusFundingEvent',
  })
  .openapi('StatusFundingEvent')

const SystemEventV2Schema = z
  .object({
    at: z.iso.datetime({ offset: true }).openapi({ description: 'Timestamp of the event' }),
    description: z
      .string()
      .openapi({ description: 'The human readable description of the system event' }),
    event_id: z
      .ulid()
      .openapi({ description: 'lexically sortable, monotonically increasing character array' }),
    system_date: z.iso
      .date()
      .openapi({ description: 'the system date to which this system event belongs to' }),
    type: z
      .enum(['eod_balances_ready', 'eod_positions_ready'])
      .openapi({ description: 'the machine readable type of the system event' }),
  })
  .openapi({
    description:
      'Represents that system event had occurred and sent over the events streaming api.\n',
    examples: [
      {
        at: '2026-01-05T10:28:23.163857Z',
        description: 'End-of-day balances are now available.',
        event_id: '01F535Y1FVY8WZHE763HCNS8SZ',
        system_date: '2026-01-05',
        type: 'eod_balances_ready',
      },
    ],
    required: ['at', 'event_id', 'type', 'system_date', 'description'],
    title: 'SystemEvent',
  })
  .openapi('SystemEventV2')

const TokenizationIssuerSchema = z
  .enum(['binance', 'coinbase', 'ondo', 'st0x', 'xstocks'])
  .openapi({
    description: "The tokenized asset's issuer",
    example: 'xstocks',
    title: 'TokenizationIssuer',
  })
  .openapi('TokenizationIssuer')

const TokenizationNetworkSchema = z
  .enum([
    'arbitrum',
    'base',
    'binance',
    'cronos',
    'ethereum',
    'hypercore',
    'hyperevm',
    'mantle',
    'robinhood',
    'solana',
    'ton',
    'tron',
  ])
  .openapi({
    description: "The token's blockchain network",
    example: 'solana',
    title: 'TokenizationNetwork',
  })
  .openapi('TokenizationNetwork')

const TokenizationMintCallbackSchema = z
  .object({
    client_account_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Alpaca account ID (UUID) of the Authorized Participant. Exactly one of `client_external_account_id` or `client_account_id` must be provided, matching the identifier used on the original mint request. The deprecated `client_id` field is still accepted as an alias for `client_external_account_id` during the deprecation window.',
      }),
    client_external_account_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Customer's client identifier on the issuer's platform. Exactly one of `client_external_account_id` or `client_account_id` must be provided, matching the identifier used on the original mint request. The deprecated `client_id` field is still accepted as an alias for `client_external_account_id` during the deprecation window.",
      }),
    network: TokenizationNetworkSchema.exactOptional(),
    tokenization_request_id: z
      .uuid()
      .openapi({ description: 'Unique identifier of the tokenization request' }),
    tx_hash: z
      .string()
      .openapi({ description: 'Transaction hash of the completed request on the blockchain' }),
    wallet_address: z
      .string()
      .exactOptional()
      .openapi({ description: 'The wallet address to receive the tokenized asset' }),
  })
  .openapi({ required: ['tokenization_request_id', 'tx_hash'], title: 'TokenizationMintCallback' })
  .openapi('TokenizationMintCallback')

const TokenizationMintRequestSchema = z
  .object({
    issuer: TokenizationIssuerSchema,
    network: TokenizationNetworkSchema,
    qty: z
      .string()
      .openapi({
        description:
          'The underlying quantity to convert into the tokenized asset. It can be fractional.',
      }),
    underlying_symbol: z.string().openapi({ description: 'The underlying asset symbol' }),
    wallet_address: z
      .string()
      .openapi({ description: 'The wallet address to receive the tokenized asset' }),
  })
  .openapi({
    required: ['underlying_symbol', 'qty', 'issuer', 'network', 'wallet_address'],
    title: 'TokenizationMintRequest',
  })
  .openapi('TokenizationMintRequest')

const TokenizationRequestStatusSchema = z
  .enum(['pending', 'rejected', 'completed'])
  .openapi({
    description: 'Status of the tokenization request',
    example: 'completed',
    title: 'TokenizationRequestStatus',
  })
  .openapi('TokenizationRequestStatus')

const TokenizationMintResponseSchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }),
    issuer: TokenizationIssuerSchema,
    network: TokenizationNetworkSchema,
    qty: z
      .string()
      .openapi({
        description: 'The quantity to convert for this tokenization request. It can be fractional.',
      }),
    status: TokenizationRequestStatusSchema,
    token_symbol: z.string().openapi({ description: 'The tokenized asset symbol' }),
    tokenization_request_id: z
      .string()
      .openapi({ description: 'Unique identifier of the tokenization request set by Alpaca' }),
    underlying_symbol: z.string().openapi({ description: 'The underlying asset symbol' }),
  })
  .openapi({
    required: [
      'tokenization_request_id',
      'status',
      'underlying_symbol',
      'token_symbol',
      'qty',
      'created_at',
      'issuer',
      'network',
    ],
    title: 'TokenizationMintResponse',
  })
  .openapi('TokenizationMintResponse')

const TokenizationRedeemRequestSchema = z
  .object({
    client_account_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Alpaca account ID (UUID) of the Authorized Participant. Exactly one of `client_external_account_id` or `client_account_id` must be provided to identify the Authorized Participant whose account will receive the underlying asset. The deprecated `client_id` field is still accepted as an alias for `client_external_account_id` during the deprecation window.',
      }),
    client_external_account_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Customer's client identifier on the issuer's platform. Exactly one of `client_external_account_id` or `client_account_id` must be provided to identify the Authorized Participant whose account will receive the underlying asset. The deprecated `client_id` field is still accepted as an alias for `client_external_account_id` during the deprecation window.",
      }),
    issuer_request_id: z
      .string()
      .openapi({ description: 'Unique identifier of the redemption request set by the issuer' }),
    network: TokenizationNetworkSchema,
    qty: z
      .string()
      .openapi({
        description: 'The quantity to convert into the underlying asset. It can be fractional.',
      }),
    token_symbol: z.string().openapi({ description: 'The tokenized asset symbol' }),
    tx_hash: z
      .string()
      .openapi({ description: 'Transaction hash of the completed request on the blockchain' }),
    underlying_symbol: z.string().openapi({ description: 'The underlying asset symbol' }),
    wallet_address: z
      .string()
      .openapi({ description: 'The address where the redeemed tokens were originally held' }),
  })
  .openapi({
    required: [
      'issuer_request_id',
      'underlying_symbol',
      'token_symbol',
      'qty',
      'network',
      'wallet_address',
      'tx_hash',
    ],
    title: 'TokenizationRedeemRequest',
  })
  .openapi('TokenizationRedeemRequest')

const TokenizationRequestTypeSchema = z
  .enum(['mint', 'redeem'])
  .openapi({
    description: 'Tokenization request type',
    example: 'mint',
    title: 'TokenizationRequestType',
  })
  .openapi('TokenizationRequestType')

const TokenizationRedeemResponseSchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }),
    issuer: TokenizationIssuerSchema,
    issuer_request_id: z
      .string()
      .openapi({ description: 'Unique identifier of the redemption request set by the issuer' }),
    network: TokenizationNetworkSchema,
    qty: z
      .string()
      .openapi({
        description: 'The quantity to convert into the underlying asset. It can be fractional.',
      }),
    status: TokenizationRequestStatusSchema,
    token_symbol: z.string().openapi({ description: 'The tokenized asset symbol' }),
    tokenization_request_id: z
      .string()
      .openapi({ description: 'Unique identifier of the tokenization request set by Alpaca' }),
    tx_hash: z
      .string()
      .openapi({ description: 'Transaction hash of the completed request on the blockchain' }),
    type: TokenizationRequestTypeSchema,
    underlying_symbol: z.string().openapi({ description: 'The underlying asset symbol' }),
    wallet_address: z
      .string()
      .openapi({ description: 'The address where the redeemed tokens were originally held' }),
  })
  .openapi({
    required: [
      'tokenization_request_id',
      'issuer_request_id',
      'created_at',
      'type',
      'status',
      'underlying_symbol',
      'token_symbol',
      'qty',
      'issuer',
      'network',
      'wallet_address',
      'tx_hash',
    ],
    title: 'TokenizationRedeemResponse',
  })
  .openapi('TokenizationRedeemResponse')

const TokenizationTransferStatusSchema = z
  .enum(['pending', 'completed', 'rejected'])
  .openapi({
    description:
      'Whether Alpaca has moved the underlying shares for this tokenization request. Independent of `status`: `status` can stay `pending` until the issuer completes the on-chain mint or redeem, while `transfer_status` becomes `completed` as soon as the shares move.\n\n- `pending`: the shares have not moved yet.\n- `completed`: the shares have moved. Account activities can lag until after end-of-day posting.\n- `rejected`: the share transfer failed.\n\nReturned by the list and get tokenization request endpoints. Omitted when Alpaca has no share transfer for the request, for example when the request was rejected during validation.',
    example: 'completed',
    title: 'TokenizationTransferStatus',
  })
  .openapi('TokenizationTransferStatus')

const TokenizationRequestSchema = z
  .object({
    client_account_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Alpaca account UUID of the Authorized Participant associated with this tokenization request',
      }),
    client_external_account_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Issuer-side account identifier of the Authorized Participant associated with this tokenization request',
      }),
    client_request_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Authorized Participant-supplied label associated with this tokenization request',
      }),
    created_at: z.iso.datetime({ offset: true }),
    fees: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Fees charged for this tokenization request' }),
    issuer: TokenizationIssuerSchema,
    issuer_request_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Unique identifier of the tokenization request set by the issuer' }),
    network: TokenizationNetworkSchema,
    qty: z
      .string()
      .openapi({
        description: 'The quantity to convert for this tokenization request. It can be fractional.',
      }),
    status: TokenizationRequestStatusSchema,
    token_symbol: z.string().openapi({ description: 'The tokenized asset symbol' }),
    tokenization_request_id: z
      .string()
      .openapi({ description: 'Unique identifier of the tokenization request set by Alpaca' }),
    transfer_status: TokenizationTransferStatusSchema.exactOptional(),
    tx_hash: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Transaction hash of the completed request on the blockchain' }),
    type: TokenizationRequestTypeSchema,
    underlying_symbol: z.string().openapi({ description: 'The underlying asset symbol' }),
    updated_at: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    wallet_address: z
      .string()
      .openapi({ description: 'The wallet address associated with this tokenization request' }),
  })
  .openapi({
    required: [
      'tokenization_request_id',
      'created_at',
      'type',
      'status',
      'underlying_symbol',
      'token_symbol',
      'qty',
      'issuer',
      'network',
      'wallet_address',
    ],
    title: 'TokenizationRequest',
  })
  .openapi('TokenizationRequest')

const TradeAccountSchema = z
  .object({
    account_blocked: z
      .boolean()
      .openapi({
        description: 'If true, the account activity by user is prohibited.',
        example: false,
      }),
    account_number: z
      .string()
      .nullable()
      .openapi({ description: 'The account number', example: '927584925' }),
    accrued_fees: z.string().openapi({ description: 'Accrued fees', example: '12345.6789' }),
    admin_configurations: AdminConfigurationsSchema,
    balance_asof: z
      .string()
      .openapi({
        description: 'The date of the snapshot for `last_*` fields',
        example: '2021-04-01',
      }),
    buying_power: z
      .string()
      .openapi({
        description:
          'Current available cash buying power. If multiplier = 2 then buying_power = max(equity-initial_margin(0) * 2). If multiplier = 1 then buying_power = cash.',
        example: '12345.6789',
      }),
    cash: z.string().openapi({ description: 'Cash balance', example: '12345.6789' }),
    cash_transferable: z
      .string()
      .exactOptional()
      .openapi({ description: 'Cash available for transfer (JNLC)', example: '12345.6789' }),
    cash_withdrawable: z
      .string()
      .exactOptional()
      .openapi({ description: 'Cash available for withdrawal', example: '12345.6789' }),
    clearing_broker: z
      .string()
      .exactOptional()
      .openapi({ description: 'Clearing broker', example: 'Velox' }),
    created_at: z
      .string()
      .openapi({
        description: 'Timestamp this account was created at',
        example: '2021-03-01T13:28:49.270232Z',
      }),
    crypto_status: AccountStatusSchema,
    currency: z.string().openapi({ description: 'Always USD', example: 'USD' }),
    effective_buying_power: z
      .string()
      .openapi({
        description: 'Effective buying power (duplicate of buying power)',
        example: '12345.6789',
      }),
    equity: z
      .string()
      .openapi({
        description: 'cash + long_market_value + short_market_value',
        example: '12345.6789',
      }),
    id: z
      .uuid()
      .openapi({ description: 'The account ID', example: 'c8f1ef5d-edc0-4f23-9ee4-378f19cb92a4' }),
    initial_margin: z
      .string()
      .openapi({
        description: 'Reg T initial margin requirement (continuously updated value)',
        example: '12345.6789',
      }),
    intraday_adjustments: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The intraday adjustment by non_trade_activities such as fund deposit/withdraw.\n',
        example: '0',
      }),
    last_buying_power: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Value of buying_power as of previous trading day at 16:00:00 ET',
        example: '12345.6789',
      }),
    last_cash: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Value of all cash as of previous trading day at 16:00:00 ET',
        example: '12345.6789',
      }),
    last_equity: z
      .string()
      .openapi({
        description: 'Equity as of previous trading day at 16:00:00 ET',
        example: '12345.6789',
      }),
    last_initial_margin: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Value of Reg T margin as of previous trading day at 16:00:00 ET',
        example: '12345.6789',
      }),
    last_long_market_value: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Value of all long positions as of previous trading day at 16:00:00 ET',
        example: '12345.6789',
      }),
    last_maintenance_margin: z
      .string()
      .openapi({
        description: 'Maintenance margin requirement on the previous trading day',
        example: '12345.6789',
      }),
    last_options_buying_power: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Value of option buying power as of previous trading day at 16:00:00 ET',
        example: '12345.6789',
      }),
    last_regt_buying_power: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Value of Reg T buying power as of previous trading day at 16:00:00 ET',
        example: '12345.6789',
      }),
    last_short_market_value: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Value of all short positions as of previous trading day at 16:00:00 ET',
        example: '0',
      }),
    long_market_value: z
      .string()
      .openapi({
        description: 'Real-time MtM value of all long positions held in the account',
        example: '12345.6789',
      }),
    maintenance_margin: z
      .string()
      .openapi({
        description: 'Maintenance margin requirement (continuously updated value)',
        example: '12345.6789',
      }),
    memoposts: z
      .string()
      .exactOptional()
      .openapi({ description: 'Outstanding memopost value', example: '100' }),
    multiplier: z.string().openapi({ description: '"1", "2", "3", or "4"', example: '2' }),
    non_marginable_buying_power: z
      .string()
      .openapi({
        description: 'Non-marginable buying power (currently used for only crypto trading)',
        example: '12345.6789',
      }),
    options_approved_level: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
      .exactOptional()
      .openapi({
        description:
          'The options trading level that was approved for this account.\n0=disabled, 1=Covered Call/Cash-Secured Put, 2=Long Call/Put, 3=Spreads/Straddles.\n',
        example: 3,
      }),
    options_buying_power: z
      .string()
      .exactOptional()
      .openapi({ description: 'Your buying power for options trading', example: '12345.6789' }),
    options_trading_level: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
      .exactOptional()
      .openapi({
        description:
          'The effective options trading level of the account.\nThis is the minimum between account options_approved_level and account configurations max_options_trading_level.\n0=disabled, 1=Covered Call/Cash-Secured Put, 2=Long Call/Put, 3=Spreads/Straddles.\n',
        example: 3,
      }),
    pending_reg_taf_fees: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pending regulatory fees for the account.', example: '0.01' }),
    pending_transfer_out: z
      .string()
      .exactOptional()
      .openapi({ description: 'Cash pending transfer out', example: '12345.6789' }),
    portfolio_value: z
      .string()
      .openapi({
        description:
          'Total value of cash + holding positions. (This field is deprecated. It is equivalent to the equity field.)',
        example: '12345.6789',
      }),
    position_market_value: z
      .string()
      .openapi({
        description: 'Real-time MtM value of all the positions held in the account',
        example: '0',
      }),
    previous_close: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Previous sessions close time',
        example: '2021-04-01T19:00:00-04:00',
      }),
    regt_buying_power: z
      .string()
      .openapi({
        description:
          "User's buying power under Regulation T (excess equity - (equity - margin value) - * margin multiplier)",
        example: '12345.6789',
      }),
    short_market_value: z
      .string()
      .openapi({
        description: 'Real-time MtM value of all short positions held in the account',
        example: '0',
      }),
    shorting_enabled: z
      .boolean()
      .openapi({
        description: 'Flag to denote whether or not the account is permitted to short',
        example: false,
      }),
    sma: z
      .string()
      .openapi({
        description:
          'Value of Special Memorandum Account (will be used at a later date to provide additional buying_power)',
        example: '12345.6789',
      }),
    status: AccountStatusSchema,
    trade_suspended_by_user: z
      .boolean()
      .openapi({
        description: 'If true, the account is not allowed to place orders.',
        example: false,
      }),
    trading_blocked: z
      .boolean()
      .openapi({
        description: 'If true, the account is not allowed to place orders.',
        example: false,
      }),
    transfers_blocked: z
      .boolean()
      .openapi({
        description: 'If true, the account is not allowed to request money transfers.',
        example: false,
      }),
    user_configurations: z
      .union([AccountConfigurationsSchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Custom user-level configuration overrides for this account.\n\nThis field is always present in the response, but its value will be `null` until user-level configurations have been explicitly set for the account.',
      }),
  })
  .openapi({
    description:
      'This is an extended version of the Account model found [in the trading api](https://alpaca.markets/docs/api-references/trading-api/account/#account-entity).\n\nExtra data has been added that would be useful for brokers.',
    examples: [
      {
        account_blocked: false,
        account_number: '927584925',
        accrued_fees: '0',
        admin_configurations: {},
        balance_asof: '2021-04-01',
        buying_power: '103556.8572572922',
        cash: '24861.91',
        cash_transferable: '24861.91',
        cash_withdrawable: '17861.91',
        clearing_broker: 'VELOX',
        created_at: '2021-03-01T13:28:49.270232Z',
        crypto_status: 'ACTIVE',
        currency: 'USD',
        effective_buying_power: '103556.8572572922',
        equity: '28059.3882330664',
        id: 'c8f1ef5d-edc0-4f23-9ee4-378f19cb92a4',
        initial_margin: '1598.7391165332',
        intraday_adjustments: '0',
        last_buying_power: '104433.9158860662',
        last_cash: '23861.91',
        last_equity: '26977.323677655',
        last_initial_margin: '1557.7068388275',
        last_long_market_value: '3115.413677655',
        last_maintenance_margin: '934.6241032965',
        last_options_buying_power: '25419.62',
        last_regt_buying_power: '50839.233677655',
        last_short_market_value: '0',
        long_market_value: '3197.4782330664',
        maintenance_margin: '959.24346991992',
        multiplier: '2',
        non_marginable_buying_power: '24861.91',
        options_approved_level: 0,
        options_buying_power: '26460.65',
        options_trading_level: 0,
        pending_reg_taf_fees: '0',
        pending_transfer_out: '0',
        portfolio_value: '28059.3882330664',
        position_market_value: '3197.4782330664',
        previous_close: '2021-04-01T19:00:00-04:00',
        regt_buying_power: '52921.2982330664',
        short_market_value: '0',
        shorting_enabled: true,
        sma: '26758.0590204615',
        status: 'ACTIVE',
        trade_suspended_by_user: false,
        trading_blocked: false,
        transfers_blocked: false,
      },
      {
        account_blocked: false,
        account_number: '601612064',
        accrued_fees: '0',
        admin_configurations: {},
        balance_asof: '2022-02-08',
        buying_power: '83567.42',
        cash: '83567.42',
        cash_transferable: '41783.71',
        cash_withdrawable: '0',
        clearing_broker: 'VELOX',
        created_at: '2022-01-21T21:25:26.713802Z',
        crypto_status: 'PAPER_ONLY',
        currency: 'USD',
        effective_buying_power: '83567.42',
        equity: '83567.42',
        id: '56712986-9ff7-4d8f-8e52-077e099e533e',
        initial_margin: '0',
        intraday_adjustments: '0',
        last_buying_power: '41783.71',
        last_cash: '41783.71',
        last_equity: '41783.71',
        last_initial_margin: '0',
        last_long_market_value: '0',
        last_maintenance_margin: '0',
        last_options_buying_power: '41783.71',
        last_regt_buying_power: '41783.71',
        last_short_market_value: '0',
        long_market_value: '0',
        maintenance_margin: '0',
        multiplier: '1',
        non_marginable_buying_power: '41783.71',
        options_approved_level: 2,
        options_buying_power: '83567.42',
        options_trading_level: 1,
        pending_reg_taf_fees: '0.01',
        pending_transfer_in: '0',
        pending_transfer_out: '0',
        portfolio_value: '83567.42',
        position_market_value: '0',
        previous_close: '2022-02-08T19:00:00-05:00',
        regt_buying_power: '83567.42',
        short_market_value: '0',
        shorting_enabled: false,
        sma: '0',
        status: 'ACTIVE',
        trade_suspended_by_user: false,
        trading_blocked: false,
        transfers_blocked: false,
      },
    ],
    required: [
      'id',
      'admin_configurations',
      'account_number',
      'status',
      'crypto_status',
      'currency',
      'buying_power',
      'regt_buying_power',
      'effective_buying_power',
      'non_marginable_buying_power',
      'accrued_fees',
      'portfolio_value',
      'trading_blocked',
      'transfers_blocked',
      'account_blocked',
      'created_at',
      'trade_suspended_by_user',
      'multiplier',
      'shorting_enabled',
      'equity',
      'last_equity',
      'long_market_value',
      'short_market_value',
      'position_market_value',
      'initial_margin',
      'maintenance_margin',
      'last_maintenance_margin',
      'sma',
      'balance_asof',
      'cash',
    ],
  })
  .openapi('TradeAccount')

const TradeUpdateEventTypeSchema = z
  .enum([
    'new',
    'fill',
    'partial_fill',
    'canceled',
    'expired',
    'done_for_day',
    'replaced',
    'rejected',
    'pending_new',
    'accepted',
    'stopped',
    'pending_cancel',
    'pending_replace',
    'calculated',
    'suspended',
    'order_replace_rejected',
    'order_cancel_rejected',
    'trade_bust',
    'trade_correct',
  ])
  .openapi({
    description:
      '**Common events**\n\nThese are the events that are the expected results of actions you may have taken by sending API requests.\n\nThe meaning of the `timestamp` field changes for each type; the meanings have been specified here for which types the\ntimestamp field will be present.\n\n- `accepted`: Sent when an order is received and accepted by Alpaca.\n- `new`: Sent when an order has been routed to exchanges for execution.\n- `fill`: Sent when your order has been completely filled.\n  - `timestamp`: The time at which the order was filled.\n- `partial_fill`: Sent when a number of shares less than the total remaining quantity on your order has been filled.\n  - `timestamp`: The time at which the shares were filled.\n- `canceled`: Sent when the order transitions to the `canceled` state. This can be triggered by a user-submitted cancel request, by Alpaca as part of automated processing (e.g. corporate-action sweeps, aged-GTC expiration, overnight-session lifecycle), or by an upstream execution venue. When Alpaca populates a machine-readable cause, it is exposed on the top-level `reason` field — see the `reason` property on `TradeUpdateEventV2` for known values (e.g. `CORPORATE_ACTION`).\n  - `timestamp`: The time at which the order was canceled.\n- `expired`: Sent when an order has reached the end of its lifespan, as determined by the order\'s time in force value.\n  - `timestamp`: The time at which the order expired.\n- `done_for_day`: Sent when the order is done executing for the day, and will not receive further updates until the next trading day.\n- `replaced`: Sent when your requested replacement of an order is processed.\n  - `timestamp`: The time at which the order was replaced.\n\n**Rarer events**\n\nThese are events that may rarely be sent due to unexpected circumstances on the exchanges. It is unlikely you will need to design your code around them, but you may still wish to account for the possibility that they will occur.\n\n- `rejected`: Sent when your order has been rejected.\n  - `timestamp`: The time at which the rejection occurred.\n- `pending_new`: Sent when the order has been received by Alpaca and routed to the exchanges, but has not yet been accepted for execution.\n- `stopped`: Sent when your order has been stopped, and a trade is guaranteed for the order, usually at a stated price or better, but has not yet occurred.\n- `pending_cancel`: Sent when the order is awaiting cancellation. Most cancellations will occur without the order entering this state.\n- `pending_replace`: Sent when the order is awaiting replacement.\n- `calculated`: Sent when the order has been completed for the day - it is either `filled` or `done_for_day` - but remaining settlement calculations are still pending.\n- `suspended`: Sent when the order has been suspended and is not eligible for trading.\n- `order_replace_rejected`: Sent when the order replace has been rejected.\n- `order_cancel_rejected`: Sent when the order cancel has been rejected.\n- `trade_bust`: Sent when a previously reported execution has been canceled ("busted") by the upstream exchange.\n- `trade_correct`: Sent when a previously reported trade has been corrected. For example, the exchange may have updated the price, quantity, or another execution parameter after the trade was initially reported.\n- `restated`: Sent when the order is manually modified.\n',
  })
  .openapi('TradeUpdateEventType')

const TradeUpdateEventV2LegSchema = z
  .object({
    execution_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Corresponding execution of an order. If an order gets filled over two executions (a partial_fill for example), you will receive two events with different IDs.',
      }),
    order_id: z.uuid().min(1).exactOptional().openapi({ description: 'Order UUID' }),
    price: z
      .string()
      .exactOptional()
      .openapi({ description: 'The average price per share for this event.' }),
    qty: z
      .string()
      .exactOptional()
      .openapi({ description: 'The amount of shares filled for this event' }),
    symbol: z.string().exactOptional().openapi({ description: 'Symbol of an asset' }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Timestamp of this event leg\n' }),
  })
  .openapi({
    description: 'Represents filled qty/price of legs.',
    title: 'TradeUpdateEventV2Leg',
    required: [],
  })
  .openapi('TradeUpdateEventV2Leg')

const TradeUpdateEventV2Schema = z
  .object({
    account_id: z.uuid().min(1).exactOptional().openapi({ description: 'Account UUID' }),
    at: z.iso
      .datetime({ offset: true })
      .min(1)
      .exactOptional()
      .openapi({ description: 'Timestamp of event' }),
    event: TradeUpdateEventTypeSchema.exactOptional(),
    event_id: z
      .ulid()
      .exactOptional()
      .openapi({ description: 'lexically sortable, monotonically increasing character array' }),
    execution_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Corresponding execution of an order. If an order gets filled over two executions (a partial_fill for example), you will receive two events with different IDs.\nNot present for `MultilegOptions`\n',
      }),
    legs: z
      .array(TradeUpdateEventV2LegSchema)
      .exactOptional()
      .openapi({
        description:
          'Only present when event is for `MultilegOptions`. Represents filled qty/price of legs.\n',
      }),
    order: OrderSchema.exactOptional(),
    position_qty: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Only present when event is either `fill` or `partial_fill` other than `MultilegOptions`. The size of your total position, after this fill event, in shares. Positive for long positions, negative for short positions.\n',
      }),
    position_qtys: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Only present when event is either `fill` or `partial_fill` for `MultilegOptions`. The size of your total position, after this fill event, in shares. Positive for long positions, negative for short positions.\n',
      }),
    previous_execution_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'ID of the original execution that was busted or corrected (present only in trade_bust and trade_correct events).',
      }),
    price: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Only present when event is either `fill` or `partial_fill`. The average price per share at which the order was filled.',
      }),
    qty: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Only present when event is either `fill`, `partial_fill`, `trade_bust` and `trade_correct`. The amount of shares this Trade order was for. <br /> For `trade_bust` events, the qty field may be negative, representing a reversal of the original quantity.',
      }),
    reason: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Machine-readable code that explains **why** the event occurred. Only present when a reason applies; omitted from routine lifecycle events such as `new`, `fill`, and `partial_fill`.\n\nKnown values:\n\n| Value | Event(s) | Meaning |\n| --- | --- | --- |\n| `CORPORATE_ACTION` | `canceled` | Alpaca canceled the order internally because the underlying is scheduled for a mandatory corporate action other than a cash dividend (e.g. reverse split, symbol/CUSIP change, merger, liquidation). Emitted by the overnight-session lifecycle and, where enabled by Alpaca, the daytime GTC corporate-action sweep. Not emitted when the cancel is routed to the upstream venue instead (e.g. day-session, `extended_hours=false`, agency- or mixed-capacity orders); those `canceled` events carry the venue's own text in `reason` if any. |\n| `TOO_LATE_TO_CANCEL` | `order_cancel_rejected`, `order_replace_rejected` | The cancel or replace request arrived after the order had already reached a terminal state (typically `filled`). |\n| `TRADE_BUST` | `trade_bust` | Alpaca operations replayed or synthesized a bust of a previously reported execution. Busts that originate from the upstream venue surface the venue's own text in `reason` (or omit it entirely), so consumers should not rely on `TRADE_BUST` alone to identify all busts — key on the `event` field (`trade_bust`) for that. |\n\nFree-form strings may also appear in `reason`. In particular, `canceled`, `trade_bust`, and `trade_correct` events originating from the upstream venue carry the venue's own text field (when the venue provides one) rather than an Alpaca-defined code. Consumers should tolerate unknown values and, where they need to distinguish cases, key on `event` first and use `reason` as a secondary hint.\n",
        example: 'CORPORATE_ACTION',
      }),
    settle_date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'Settlement date of the trade in format `YYYY-MM-DD` for `fill` and `partial_fill` events',
        example: '2026-03-03',
      }),
    swap_rate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Only present for `local currency trading account` or `crypto asset trade` when event is either `fill` or `partial_fill`. The swap rate at which the current trade was filled.',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Has various different meanings depending on the value of `event`, please see the [Trading Events](https://alpaca.markets/docs/api-references/broker-api/events/#trade-events)\nEnum in the documentation or the TradeUpdateEventType model for more details on when it means different things.\n',
      }),
  })
  .openapi({
    description: 'Represents an update to an order/trade, sent over the events streaming api.',
    title: 'TradeUpdateEvent',
    required: [],
  })
  .openapi('TradeUpdateEventV2')

const TransactionSchema = z
  .object({
    account_id: z.string().exactOptional().openapi({ description: 'The ledger ID' }),
    account_name: z.string().exactOptional().openapi({ description: 'The ledger name' }),
    account_no: z.string().exactOptional().openapi({ description: 'The ledger account number' }),
    amount: z.string().exactOptional().openapi({ description: 'Total amount of the transaction' }),
    balance: z
      .string()
      .exactOptional()
      .openapi({ description: 'Ending balance after the transaction has been applied' }),
    contra_account_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Contra account of transaction' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Plain text overview of the transaction' }),
    entry_type: z.string().exactOptional().openapi({ description: 'Type of transaction' }),
    system_date: z.string().exactOptional().openapi({ description: 'Date of transaction' }),
  })
  .openapi({
    examples: [
      {
        account_id: '06b9d76e-1733-460c-844e-48d1ae0f10c3',
        account_name: 'Just In Time Receivable - JITS',
        account_no: 'JTRJITS00',
        amount: '1',
        balance: '4186.36',
        contra_account_name: 'Just In Time Interest Income',
        description: 'debit balance = 4185.36, base_rate = 0.0375, spread = 0.05',
        entry_type: 'JNLC',
        system_date: '2022-06-10',
      },
    ],
    required: [],
  })
  .openapi('Transaction')

const TransferIRADetailsSchema = z
  .object({
    distribution_reason: z.string().exactOptional().openapi({ example: 'normal' }),
    fed_withholding_amount: z.string().exactOptional().openapi({ example: '102.5' }),
    fed_withholding_pct: z.string().exactOptional().openapi({ example: '10.25' }),
    state_withholding_amount: z.string().exactOptional().openapi({ example: '97.5' }),
    state_withholding_pct: z.string().exactOptional().openapi({ example: '9.75' }),
    tax_year: z.string().exactOptional().openapi({ example: '2024' }),
  })
  .openapi({ required: [] })
  .openapi('TransferIRADetails')

const TransferStatusSchema = z
  .enum([
    'QUEUED',
    'APPROVAL_PENDING',
    'PENDING',
    'SENT_TO_CLEARING',
    'REJECTED',
    'CANCELED',
    'APPROVED',
    'COMPLETE',
    'RETURNED',
  ])
  .openapi({
    description:
      '- **QUEUED**\nTransfer is in queue to be processed.\n- **APPROVAL_PENDING**\nTransfer is pending approval.\n- **PENDING**\nTransfer is pending processing.\n- **SENT_TO_CLEARING**\nTransfer is being processed by the clearing firm.\n- **REJECTED**\nTransfer is rejected.\n- **CANCELED**\nClient initiated transfer cancellation.\n- **APPROVED**\nTransfer is approved.\n- **COMPLETE**\nTransfer is completed.\n- **RETURNED**\nThe bank issued an ACH return for the transfer.\n',
    example: 'QUEUED',
  })
  .openapi('TransferStatus')

const TransferSchema = z
  .object({
    account_id: z.uuid().openapi({ description: 'The account ID' }),
    additional_information: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Additional information. Only applies when type = "wire".' }),
    amount: z.string().openapi({ description: 'Must be > 0.00' }),
    bank_id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The ID of the Bank, only present if type = "wire"' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp when transfer was created' }),
    direction: TransferDirectionSchema,
    expires_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Timestamp when transfer expires' }),
    fee: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Fee amount to be collected. Only applies when type = "wire".' }),
    fee_payment_method: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Either "user" or "invoice". Only applies when type = "wire".' }),
    hold_until: z.iso.datetime({ offset: true }).exactOptional(),
    id: z.uuid().openapi({ description: 'The transfer ID' }),
    instant_amount: z.string().exactOptional(),
    ira: TransferIRADetailsSchema.exactOptional(),
    reason: z.string().nullable().exactOptional().openapi({ description: 'Cause of the status' }),
    relationship_id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The ACH relationship ID only present if type = "ach"' }),
    requested_amount: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Must be > 0.00. Only applies when type = "wire".' }),
    status: TransferStatusSchema,
    type: TransferTypeSchema,
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Timestamp when transfer was updated' }),
  })
  .openapi({
    description:
      "Transfers allow you to transfer money/balance into your end customers' account (deposits) or out (withdrawal).\n\n[Main docs here](https://alpaca.markets/docs/api-references/broker-api/funding/transfers/#the-transfer-object)",
    examples: [
      {
        account_id: '449e7a5c-69d3-4b8a-aaaf-5c9b713ebc65',
        additional_information: 'string',
        amount: 'string',
        bank_id: 'f1ae96de-94c1-468e-93a3-6b7213930ca8',
        created_at: '2019-08-24T14:15:22Z',
        direction: 'INCOMING',
        expires_at: '2019-08-24T14:15:22Z',
        id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
        ira: {
          distribution_reason: 'normal',
          fed_withholding_amount: '102.5',
          fed_withholding_pct: '10.25',
          state_withholding_amount: '97.5',
          state_withholding_pct: '9.75',
          tax_year: '2024',
        },
        reason: 'string',
        relationship_id: '81412018-ffa2-43f9-a3eb-d39f1c5e0f87',
        status: 'QUEUED',
        type: 'ach',
        updated_at: '2019-08-24T14:15:22Z',
      },
    ],
    required: ['id', 'account_id', 'type', 'status', 'amount', 'direction', 'created_at'],
    title: 'Transfer',
  })
  .openapi('Transfer')

const TransferStatusFromSchema = z
  .xor([TransferStatusSchema, z.literal('')])
  .openapi({
    description:
      'Previous transfer status in stream status-change events. Empty string is used for the initial status-change event when there is no previous status.',
  })
  .openapi('TransferStatusFrom')

const TransferStatusEventSchema = z
  .object({
    account_id: z.uuid().min(1).openapi({ description: 'Account UUID' }),
    at: z.iso
      .datetime({ offset: true })
      .min(1)
      .openapi({ description: 'Timestamp of when the transfer status changed' }),
    event_id: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Monotonically increasing 64-bit integer not available to new partners, and for backward compatibility purposes only; use `event_ulid` as the stable identifier where possible\n',
      }),
    event_ulid: z
      .ulid()
      .openapi({ description: 'lexically sortable, monotonically increasing character array' }),
    status_from: TransferStatusFromSchema,
    status_to: TransferStatusSchema,
    transfer_id: z.uuid().min(1).openapi({ description: 'Transfer UUID' }),
  })
  .openapi({
    description: "Represents a change in a Transfer's status, sent over the events streaming api.",
    examples: [
      {
        account_id: '8e00606a-c9ac-409a-ba45-f55e8f77984a',
        at: '2021-06-10T19:52:24.066998Z',
        event_id: 15961,
        event_ulid: '01F7VQQ782DM57SJNWAYMD14J9',
        status_from: 'QUEUED',
        status_to: 'SENT_TO_CLEARING',
        transfer_id: 'c4ed4206-697b-4859-ab71-b9de6649859d',
      },
      {
        account_id: '8e00606a-c9ac-409a-ba45-f55e8f77984a',
        at: '2021-06-10T20:02:24.280178Z',
        event_id: 15962,
        event_ulid: '01F7VQQ782DM57SJNWAYMD14JA',
        status_from: 'SENT_TO_CLEARING',
        status_to: 'COMPLETE',
        transfer_id: 'c4ed4206-697b-4859-ab71-b9de6649859d',
      },
    ],
    required: ['account_id', 'at', 'event_ulid', 'status_from', 'status_to', 'transfer_id'],
    title: 'TransferStatusEvent',
  })
  .openapi('TransferStatusEvent')

const TravelRuleValidationErrorCodeSchema = z
  .enum([
    'INVALID_DATA',
    'UNKNOWN_VASP',
    'ADDRESS_BELONGS_TO_VASP',
    'TRAVEL_RULE_ACTION_REQUIRED',
    'BENEFICIARY_NAME_REQUIRED',
  ])
  .openapi({
    description: 'Machine-readable code identifying the travel rule validation failure.',
    example: 'BENEFICIARY_NAME_REQUIRED',
  })
  .openapi('TravelRuleValidationErrorCode')

const TravelRuleFieldOptionSchema = z
  .object({ description: z.string(), value: z.string() })
  .openapi({
    description: 'Allowed value for a travel rule field that accepts a fixed set of choices.',
    required: ['value', 'description'],
  })
  .openapi('TravelRuleFieldOption')

const TravelRuleRequiredFieldSchema = z
  .object({
    description: z.string(),
    field: z.string(),
    options: z
      .array(TravelRuleFieldOptionSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description: "List of valid choices for 'enum' types. Null for simple strings or booleans.",
      }),
    value_type: z.enum(['string', 'bool']),
  })
  .openapi({
    description: 'Request field required to complete a travel rule action.',
    required: ['field', 'value_type', 'description'],
  })
  .openapi('TravelRuleRequiredField')

const TravelRuleNextActionSchema = z
  .object({
    description: z.string(),
    name: z.string(),
    required_fields: z.array(TravelRuleRequiredFieldSchema).exactOptional(),
    type: z.enum(['REQUIRED', 'ONE_OF']),
  })
  .openapi({
    description: 'Action the client must take to satisfy travel rule requirements.',
    required: ['name', 'description', 'type'],
  })
  .openapi('TravelRuleNextAction')

const TravelRuleValidationErrorSchema = z
  .object({
    error_code: TravelRuleValidationErrorCodeSchema,
    message: z
      .string()
      .openapi({
        example: "Please provide the beneficiary's name. Select one of the following options.",
      }),
    next_actions: z.array(TravelRuleNextActionSchema).openapi({
      description: 'A list of actions to be taken to fulfill information requirements.',
      example: [
        {
          description: "Provide the recipient's first and last name.",
          name: 'supply_beneficiaryName_naturalPerson',
          required_fields: [
            {
              description: "The recipient's first name.",
              field: 'beneficiary_given_name',
              value_type: 'string',
            },
            {
              description: "The recipient's last name.",
              field: 'beneficiary_family_name',
              value_type: 'string',
            },
          ],
          type: 'ONE_OF',
        },
        {
          description: "Provide the entity's legal name.",
          name: 'supply_beneficiaryName_legalEntity',
          required_fields: [
            {
              description: 'The legal name of the receiving entity.',
              field: 'beneficiary_entity_name',
              value_type: 'string',
            },
          ],
          type: 'ONE_OF',
        },
      ],
    }),
  })
  .openapi({
    description: 'Travel rule validation failure and the actions required to correct it.',
    required: ['error_code', 'message', 'next_actions'],
  })
  .openapi('TravelRuleValidationError')

const WalletErrorSchema = z
  .strictObject({ message: z.string().openapi({ example: 'travel_rule_info is missing' }) })
  .openapi({ description: 'A wallet error response.', required: ['message'] })
  .openapi('WalletError')

const TravelRuleErrorResponseSchema = z
  .xor([TravelRuleValidationErrorSchema, WalletErrorSchema])
  .openapi({ description: 'A wallet or travel rule validation error.' })
  .openapi('TravelRuleErrorResponse')

const TravelRuleManualEntrySchema = z
  .object({
    vasp_name: z
      .string()
      .openapi({ description: 'The name of the receiving exchange.', example: 'Alpaca' }),
    vasp_website: z
      .url()
      .openapi({
        description: "The receiving exchange's website.",
        example: 'https://alpaca.markets',
      }),
  })
  .openapi({
    description:
      'Information about a beneficiary VASP that is not available in the VASP directory.',
    required: ['vasp_name', 'vasp_website'],
  })
  .openapi('TravelRuleManualEntry')

const TravelRuleInfoSchema = z
  .object({
    beneficiary_country_of_residence: z
      .string()
      .exactOptional()
      .openapi({
        description: "ISO 3166-1 country code for the beneficiary's country of residence.",
        example: 'US',
      }),
    beneficiary_entity_name: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description: "The beneficiary's legal entity name (required for legal entities)",
        example: 'Alpaca Crypto LLC',
      }),
    beneficiary_family_name: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description: "The beneficiary's last name (required for natural persons)",
        example: 'Doe',
      }),
    beneficiary_geographic_address_building_number: z
      .string()
      .exactOptional()
      .openapi({
        description: "Building number in the beneficiary's geographic address.",
        example: '1',
      }),
    beneficiary_geographic_address_country: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "ISO 3166-1 alpha-2 or alpha-3 country code in the beneficiary's geographic address.",
        example: 'US',
      }),
    beneficiary_geographic_address_post_code: z
      .string()
      .exactOptional()
      .openapi({
        description: "Postal code in the beneficiary's geographic address.",
        example: '10001',
      }),
    beneficiary_geographic_address_street_name: z
      .string()
      .exactOptional()
      .openapi({
        description: "Street name in the beneficiary's geographic address.",
        example: 'Main Street',
      }),
    beneficiary_geographic_address_town_name: z
      .string()
      .exactOptional()
      .openapi({
        description: "Town or city in the beneficiary's geographic address.",
        example: 'New York',
      }),
    beneficiary_given_name: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description: "The beneficiary's first name (required for natural persons)",
        example: 'John',
      }),
    beneficiary_is_self_hosted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Beneficiary is receiving funds to a self-hosted / non-custodial wallet',
        example: true,
      }),
    beneficiary_manual_entry: TravelRuleManualEntrySchema.exactOptional(),
    beneficiary_vasp_id: z
      .string()
      .regex(/^did:[a-zA-Z0-9]*:.*$/)
      .exactOptional()
      .openapi({
        description: "The W3C Decentralized Identifier (DID) representing the beneficiary's VASP.",
        example: 'did:ethr:0xf1c002f9e7ca88018d6dcf1e86403fb2f5f055f4',
      }),
  })
  .openapi({
    description:
      'Travel rule information pertaining to the wallet being whitelisted. Identify the destination by providing beneficiary_vasp_id, setting beneficiary_is_self_hosted to true, or providing beneficiary_manual_entry. Either beneficiary_entity_name (for legal entities) or beneficiary_given_name and beneficiary_family_name (for natural persons) must be provided.',
    title: 'TravelRuleInfo',
    required: [],
  })
  .openapi('TravelRuleInfo')

const UnexpectedErrorSchema = z
  .object({ error: z.string(), message: z.string() })
  .openapi({
    description:
      'Returned when request handling stops unexpectedly. This body has no numeric code.',
    required: ['error', 'message'],
    title: 'UnexpectedError',
  })
  .openapi('UnexpectedError')

const UpdateOrderRequestSchema = z
  .object({
    advanced_instructions: AdvancedInstructionsSchema.exactOptional(),
    client_order_id: z
      .string()
      .max(128)
      .exactOptional()
      .openapi({
        description:
          'A unique identifier for the new order. Automatically generated if not sent. (<= 128 characters)',
        example: '61e69015-8549-4bfd-b9c3-01e75843f47d',
      }),
    limit_price: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required if original order's `type` field was `limit` or `stop_limit`.\nIn case of `mleg`, the limit_price parameter is expressed with the following notation:\n- A positive value indicates a debit, representing a cost or payment to be made.\n- A negative value signifies a credit, reflecting an amount to be received.",
        example: '3.14',
      }),
    notional: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'New notional (dollar amount) for the order. Only valid for IPO indications of interest (`asset_class: "ipo"`); will be rejected for any other asset class.\nMutually exclusive with `qty` on the same replace request.',
        example: '750',
      }),
    qty: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'You can only patch full shares for now.\n\nQty of equity fractional orders are not allowed to change. Non-IPO notional orders cannot be replaced at all - no fields (qty, limit_price, stop_price, etc.) can be modified; cancel and resubmit instead.\nIn case of multi-leg orders represents the number of units to trade of this strategy.',
        example: '4',
      }),
    stop_price: z
      .string()
      .exactOptional()
      .openapi({
        description: "Required if original order's `type` field was stop or stop_limit",
        example: '3.14',
      }),
    time_in_force: TimeInForceSchema.exactOptional(),
    trail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The new value of the trail_price or trail_percent',
        example: '3.14',
      }),
  })
  .openapi({
    description:
      'Represents the fields that are editable in an order replace/update call.\n\nNote: client_order_id is currently not editable on its own, one of the other fields must be changed at the same time to effectively replace the order.\n\nNote: `qty` and `notional` are mutually exclusive on a single replace request. `notional` is only valid for IPO indications of interest (`asset_class: "ipo"`); non-IPO notional orders cannot be replaced at all.',
    title: 'OrderUpdateRequest',
    required: [],
  })
  .openapi('UpdateOrderRequest')

const UpdateWhitelistedAddressTravelRuleInfoRequestSchema = z
  .object({ travel_rule_info: TravelRuleInfoSchema })
  .openapi({
    description: 'Travel rule information to associate with a whitelisted address.',
    required: ['travel_rule_info'],
  })
  .openapi('UpdateWhitelistedAddressTravelRuleInfoRequest')

const WatchlistSchema = z
  .object({
    account_id: z
      .uuid()
      .openapi({ description: 'Unique identifier of the account that owns this watchlist.\n' }),
    assets: z
      .array(AssetSchema)
      .exactOptional()
      .openapi({ description: 'The contents of the watchlist, in the order as registered' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When watchlist was created' }),
    id: z.uuid().openapi({ description: 'Unique identifier of the watchlist itself.\n' }),
    name: z
      .string()
      .regex(/^[a-zA-Z0-9]+$/)
      .openapi({ description: 'User friendly Name of watchlist' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When watchlist was last updated' }),
  })
  .openapi({
    description: 'Represents a set of securities observed by a user.',
    required: ['id', 'account_id', 'created_at', 'updated_at', 'name'],
    title: 'Watchlist',
  })
  .openapi('Watchlist')

const WatchlistWithoutAssetSchema = z
  .object({
    account_id: z
      .uuid()
      .openapi({ description: 'Unique identifier of the account that owns this watchlist.\n' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When watchlist was created' }),
    id: z.uuid().openapi({ description: 'Unique identifier of the watchlist itself.\n' }),
    name: z
      .string()
      .regex(/^[a-zA-Z0-9]+$/)
      .openapi({ description: 'User friendly Name of watchlist' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When watchlist was last updated' }),
  })
  .openapi({
    description: 'Represents a set of securities observed by a user.',
    required: ['id', 'account_id', 'created_at', 'updated_at', 'name'],
    title: 'Watchlist',
  })
  .openapi('WatchlistWithoutAsset')

const WhitelistedAddressSchema = z
  .object({
    address: z.string().exactOptional().openapi({ description: 'The whitelisted address' }),
    asset: z
      .string()
      .exactOptional()
      .openapi({ description: 'Symbol of underlying asset for the whitelisted address' }),
    chain: z
      .string()
      .exactOptional()
      .openapi({ description: 'Underlying network this address represents' }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Timestamp (RFC3339) of account creation.' }),
    id: z.string().exactOptional().openapi({ description: 'Unique ID for whitelisted address' }),
    status: z
      .enum(['APPROVED', 'PENDING'])
      .exactOptional()
      .openapi({
        description:
          'Status of whitelisted address which is either APPROVED or PENDING. Whitelisted addresses will be subjected to a 24 waiting period. After the waiting period is over the status will become APPROVED.',
      }),
    travel_rule_info: TravelRuleInfoSchema.exactOptional().openapi({
      description: 'Travel rule information associated with the whitelisted address.',
    }),
  })
  .openapi({ required: [] })
  .openapi('WhitelistedAddress')

const BicSchema = z
  .string()
  .regex(/^[A-Z0-9]{11}$/)
  .length(11)
  .openapi({ description: 'Business Identifier Code (BIC/SWIFT).', example: 'IRVTUS3NXXX' })
  .openapi('Bic')

const BondStatusSchema = z
  .enum(['outstanding', 'matured', 'pre_issuance'])
  .openapi({ description: 'Status of the bond.' })
  .openapi('BondStatus')

const CalendarDaySchema = z
  .object({
    core_end: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The end time of the core market session.',
        example: '2025-01-02T16:00:00-05:00',
      }),
    core_start: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The start time of the core market session.',
        example: '2025-01-02T09:30:00-05:00',
      }),
    date: z.iso
      .date()
      .openapi({ description: 'The date of the calendar day.', example: '2025-01-02' }),
    lunch_end: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The end time of the lunch session.' }),
    lunch_start: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The start time of the lunch session.' }),
    post_end: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The end time of the after-hours session.',
        example: '2025-01-02T20:00:00-05:00',
      }),
    post_start: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The start time of the after-hours session.',
        example: '2025-01-02T16:00:00-05:00',
      }),
    pre_end: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The end time of the pre-market session.',
        example: '2025-01-02T09:30:00-05:00',
      }),
    pre_start: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The start time of the pre-market session.',
        example: '2025-01-02T04:00:00-05:00',
      }),
    settlement_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The settlement date.', example: '2025-01-03' }),
  })
  .openapi({ description: 'A calendar day.', required: ['date', 'core_start', 'core_end'] })
  .openapi('CalendarDay')

const CallTypeSchema = z
  .enum(['ordinary', 'make_whole', 'regulatory', 'special'])
  .openapi({
    description:
      'The type of call on the bond refers to one of a variety of circumstances under which a callable bond may be called.',
  })
  .openapi('CallType')

const MarketAcronymSchema = z
  .string()
  .openapi({ description: 'The acronym of the market.', example: 'NYSE' })
  .openapi('MarketAcronym')

const MicSchema = z
  .string()
  .regex(/^[A-Z0-9]{4}$/)
  .length(4)
  .openapi({ description: 'Market identifier code (ISO 10383).', example: 'XNYS' })
  .openapi('Mic')

const MarketNameSchema = z
  .string()
  .openapi({ description: 'The full name of the market.', example: 'New York Stock Exchange' })
  .openapi('MarketName')

const MarketTimezoneSchema = z
  .string()
  .openapi({ description: 'The timezone of the market.', example: 'America/New_York' })
  .openapi('MarketTimezone')

const PublicMarketSchema = z
  .object({
    acronym: MarketAcronymSchema,
    bic: BicSchema.exactOptional(),
    mic: MicSchema.exactOptional(),
    name: MarketNameSchema,
    timezone: MarketTimezoneSchema,
  })
  .openapi({ description: 'A market.', required: ['acronym', 'name', 'timezone'] })
  .openapi('PublicMarket')

const PhaseSchema = z.enum(['closed', 'pre', 'core', 'lunch', 'post']).openapi('Phase')

const ClockSchema = z
  .object({
    is_market_day: z.boolean().openapi({ description: 'Whether the clock is on a market day.' }),
    market: PublicMarketSchema,
    next_market_close: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Next market close timestamp' }),
    next_market_open: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Next market open timestamp' }),
    phase: PhaseSchema,
    phase_until: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The end of the current phase.' }),
    timestamp: z.iso.datetime({ offset: true }).openapi({ description: 'The time on the clock.' }),
  })
  .openapi({
    required: [
      'market',
      'timestamp',
      'is_market_day',
      'next_market_open',
      'next_market_close',
      'phase',
      'phase_until',
    ],
  })
  .openapi('Clock')

const ClockRespSchema = z
  .object({ clocks: z.array(ClockSchema) })
  .openapi({ description: 'Clock response.', required: ['clocks'] })
  .openapi('ClockResp')

const CouponFrequencySchema = z
  .enum(['annual', 'semi_annual', 'quarterly', 'monthly', 'zero'])
  .openapi({ description: 'How often the coupon is paid' })
  .openapi('CouponFrequency')

const CouponTypeSchema = z
  .enum(['fixed', 'floating', 'zero'])
  .openapi({ description: 'The type of the coupon rate' })
  .openapi('CouponType')

const DayCountSchema = z
  .enum(['A/360', 'A/365', '30/360', '30/365', 'A/A', '30E/360', 'B/252', 'A/364'])
  .openapi({
    description:
      'The day count convention used to calculate accrued interest.\n\n- `A/360`: calculates the daily interest using a 360-day year and then multiplies that by the actual number of days in each time period.\n- `A/365`: calculates the daily interest using a 365-day year and then multiplies that by the actual number of days in each time period.\n- `30/360`: calculates the daily interest using a 360-day year and then multiplies that by 30 (standardized month).\n- `30/365`: calculates the daily interest using a 365-day year and then multiplies that by 30 (standardized month).\n- `A/A`: calculates the daily interest using the actual number of days in the year and then multiplies that by the actual number of days in each time period.\n- `30E/360`: number of days equals to the actual number of days (for February). If the start date or the end date of the period is the 31st of a month, that date is set to the 30th. The number of days in a year is 360.\n- `B/252`: calculates the daily interest using a 252-business-day year and then multiplies that by the actual number of days in each time period.\n- `A/364`: calculates the daily interest using a 364-day year and then multiplies that by the actual number of days in each time period.\n',
  })
  .openapi('DayCount')

const LegacyCalendarDaySchema = z
  .object({
    close: z
      .string()
      .openapi({
        description: 'The time the market closes at on this date in HH:MM format.',
        example: '16:00',
      }),
    date: z.iso
      .date()
      .openapi({ description: 'Date string in YYYY-MM-DD format.', example: '2025-01-02' }),
    open: z
      .string()
      .openapi({
        description: 'The time the market opens at on this date in HH:MM format.',
        example: '09:30',
      }),
    session_close: z
      .string()
      .openapi({
        description: 'The time the session closes at on this date in HHMM format.',
        example: '2000',
      }),
    session_open: z
      .string()
      .openapi({
        description: 'The time the session opens at on this date in HHMM format.',
        example: '0400',
      }),
    settlement_date: z.iso
      .date()
      .openapi({
        description:
          'Date string in YYYY-MM-DD format. Representing the settlement date for the trade date.',
        example: '2025-01-03',
      }),
  })
  .openapi({
    description: 'A calendar day.',
    required: ['date', 'open', 'close', 'session_open', 'session_close', 'settlement_date'],
  })
  .openapi('LegacyCalendarDay')

const LegacyClockSchema = z
  .object({
    is_open: z.boolean().openapi({ description: 'Whether or not the market is open.' }),
    next_close: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Next market close timestamp.' }),
    next_open: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Next market open timestamp.' }),
    timestamp: z.iso.datetime({ offset: true }).openapi({ description: 'Current timestamp.' }),
  })
  .openapi({
    example: {
      is_open: true,
      next_close: '2025-06-24T16:00:00-04:00',
      next_open: '2025-06-25T09:30:00-04:00',
      timestamp: '2025-06-24T14:15:22-04:00',
    },
    required: ['timestamp', 'is_open', 'next_open', 'next_close'],
    title: 'Clock',
  })
  .openapi('LegacyClock')

const LegacyPublicCalendarRespSchema = z
  .array(LegacyCalendarDaySchema)
  .openapi('LegacyPublicCalendarResp')

const MarketSchema = z
  .enum([
    'BMO',
    'BNYM',
    'BOATS',
    'CEUX',
    'CHIX',
    'HKEX',
    'IEX',
    'IEXG',
    'ISE',
    'LSE',
    'MTA',
    'MTAA',
    'NASDAQ',
    'NYSE',
    'OCEA',
    'OPRA',
    'OTC',
    'OTCM',
    'SIFMA',
    'TADAWUL',
    'XAMS',
    'XBRU',
    'XDUB',
    'XETR',
    'XETRA',
    'XHKG',
    'XLIS',
    'XLON',
    'XNAS',
    'XNYS',
    'XPAR',
    'XSAU',
  ])
  .openapi({ description: 'The market identifier (MIC, BIC, or acronym).' })
  .openapi('Market')

const PublicCalendarRespSchema = z
  .object({
    calendar: z.array(CalendarDaySchema).openapi({ description: 'The market calendar.' }),
    market: PublicMarketSchema,
  })
  .openapi({ description: 'Calendar response.', required: ['market', 'calendar'] })
  .openapi('PublicCalendarResp')

const SpOutlookSchema = z
  .enum(['positive', 'negative', 'developing', 'stable', 'not_rated', 'not_meaningful'])
  .openapi({
    description:
      "A Standard & Poor's rating outlook indicates S&P's view regarding the potential direction of a long-term credit rating over the intermediate term (2 years for investment grade, 1 year for speculative grade)",
  })
  .openapi('SpOutlook')

const TreasurySubtypeSchema = z
  .enum(['bond', 'bill', 'note', 'strips', 'tips', 'floating'])
  .openapi({ description: 'The subtype of the treasury.' })
  .openapi('TreasurySubtype')

const UsCorporateSchema = z
  .object({
    accrued_interest: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The interest that has accumulated on a bond in dollars per bond between the last interest payment and the present date that has not yet been paid to the bondholder',
      }),
    bond_status: BondStatusSchema,
    call_type: CallTypeSchema.exactOptional(),
    callable: z
      .boolean()
      .openapi({
        description:
          'Whether the bond is callable, meaning the issuer has the right, but not the obligation to redeem the bond - in other words, pay out the bondholder - before its maturity date at a set price (the call price)',
      }),
    close_price: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The price of the last transaction of a security before the market closes for normal trading, shown as a percentage of par value',
      }),
    close_price_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The date of the close price' }),
    close_yield_to_maturity: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Yield to maturity of the treasury after the last close' }),
    close_yield_to_worst: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Yield to worst of the treasury after the last close' }),
    convertible: z
      .boolean()
      .openapi({ description: 'A flag indicating whether the bond is convertible' }),
    country_domicile: z
      .string()
      .openapi({
        description:
          'The country where the corporate is domiciled in the 2-alpha country code format (e.g., US, CA)',
      }),
    coupon: z
      .float64()
      .openapi({
        description: 'The annual interest rate paid on the bond as a percentage of par value',
      }),
    coupon_frequency: CouponFrequencySchema,
    coupon_type: CouponTypeSchema,
    cusip: z
      .string()
      .regex(/^[A-Z0-9]{9}$/)
      .length(9)
      .openapi({
        description:
          'CUSIP is a nine-character alphanumeric code that uniquely identifies the security',
      }),
    dated_date: z.iso
      .date()
      .openapi({
        description:
          'The dated date marks the beginning of the period for which interest starts accruing on the bond',
      }),
    day_count: DayCountSchema,
    description: z.string().openapi({ description: 'Description of the corporate bond' }),
    description_short: z
      .string()
      .openapi({ description: 'Short description of the corporate bond' }),
    first_coupon_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The date of the first coupon payment' }),
    fractionable: z
      .boolean()
      .openapi({ description: 'Whether the corporate can be traded in fractional amounts' }),
    isin: z
      .string()
      .regex(/^[A-Z]{2}[A-Z0-9]{9}[0-9]$/)
      .length(12)
      .openapi({ description: 'International Securities Identification Number' }),
    issue_date: z.iso.date().openapi({ description: 'The date on which the bond was issued' }),
    issue_minimum_denomination: z
      .number()
      .openapi({
        description: 'The smallest unit of the bond that can be purchased at its initial offering',
      }),
    issue_price: z
      .float64()
      .openapi({
        description:
          'The price at which the bond was originally issued as a percentage of par value',
      }),
    issue_size: z
      .number()
      .openapi({ description: 'The total size amount of the bond issue in the issuing currency' }),
    issuer: z.string().openapi({ description: 'The name of the issuer of the corporate bond' }),
    last_coupon_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The date of the last coupon payment' }),
    liquidity_institutional_aggregate: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Score (from 1-5 or null if the bond is not priced/tradable) reflecting the historical depth of executable liquidity to buy or sell (no minimum trading sizes)',
      }),
    liquidity_institutional_buy: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Score (from 1-5 or null if the bond is not priced/tradable) reflecting the historical depth of executable liquidity to buy (no minimum trading sizes)',
      }),
    liquidity_institutional_sell: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Score (from 1-5 or null if the bond is not priced/tradable) reflecting the historical depth of executable liquidity to sell (no minimum trading sizes)',
      }),
    liquidity_micro_aggregate: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Score (from 1-5 or null if the bond is not priced/tradable) reflecting the historical depth of executable liquidity to buy or sell with minimum trading sizes less than or equal to $1,000.00',
      }),
    liquidity_micro_buy: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Score (from 1-5 if the bond is priced, or null if the bond is not tradable) reflecting the historical depth of executable liquidity to buy with minimum trading sizes less than or equal to $1,000.00',
      }),
    liquidity_micro_sell: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Score (from 1-5 or null if the bond is not priced/tradable) reflecting the historical depth of executable liquidity to sell with minimum trading sizes less than or equal to $1,000.00',
      }),
    liquidity_retail_aggregate: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Score (from 1-5 or null if the bond is not priced/tradable) reflecting the historical depth of executable liquidity to buy or sell with minimum trading sizes less than or equal to 10,000',
      }),
    liquidity_retail_buy: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Score (from 1-5 or null if the bond is not priced/tradable) reflecting the historical depth of executable liquidity to buy with minimum trading sizes less than or equal to $10,000.00',
      }),
    liquidity_retail_sell: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Score (from 1-5 or null if the bond is not priced/tradable) reflecting the historical depth of executable liquidity to sell with minimum trading sizes less than or equal to 10,000',
      }),
    marginable: z.boolean().openapi({ description: 'Whether the corporate is marginable' }),
    maturity_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The date on which the bond matures' }),
    next_call_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The date of the next possible call on the bond.' }),
    next_call_price: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The price at which a callable bond can be redeemed by the issuer on the next call date, as a percentage of par.',
      }),
    next_coupon_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The date of the next coupon payment' }),
    par_value: z
      .number()
      .openapi({
        description:
          'The amount that the issuer of the bond will pay back to the bondholder upon maturity',
      }),
    perpetual: z
      .boolean()
      .openapi({ description: 'A flag representing whether a bond is perpetual' }),
    puttable: z
      .boolean()
      .openapi({
        description:
          'Whether the bond is puttable, meaning the bondholder has the right, but not the obligation to sell the bond back to the issuer at a set price (the put price) on specified dates before maturity',
      }),
    reg_s: z
      .boolean()
      .openapi({
        description:
          'Indicates whether the security falls under Regulation S, a rule that provides an exemption from the registration requirements for securities offerings made outside the United States',
      }),
    reissue_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The date on which the corporate was reissued' }),
    reissue_price: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The price at which the corporate was reissued as a percentage of par value',
      }),
    reissue_size: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The total size amount of the corporate reissue in the issuing currency',
      }),
    sector: z.string().openapi({ description: 'The sector of the corporate bond' }),
    seniority: z.string().openapi({ description: 'The seniority of the corporate bond' }),
    sp_creditwatch: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "S&P's CreditWatch highlights S&P's opinion regarding the potential direction of a short-term or long-term rating",
      }),
    sp_creditwatch_date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          "The date of the most recent Standard & Poor's CreditWatch for the bond in YYYY-MM-DD format",
      }),
    sp_outlook: SpOutlookSchema.exactOptional(),
    sp_outlook_date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          "The date of the most recent Standard & Poor's outlook for the bond in YYYY-MM-DD format",
      }),
    sp_rating: z
      .string()
      .exactOptional()
      .openapi({
        description: "Standard & Poor's rating for the bond in the standard AAA - D format",
      }),
    sp_rating_date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          "The date in the timezone of the issuing country of the most recent Standard & Poor's rating for the bond in YYYY-MM-DD format",
      }),
    ticker: z.string().openapi({ description: 'The ticker symbol of the corporate' }),
    tradable: z.boolean().openapi({ description: 'Whether the treasury is tradable' }),
  })
  .openapi({
    description: 'A US corporate',
    required: [
      'isin',
      'cusip',
      'bond_status',
      'tradable',
      'marginable',
      'fractionable',
      'issue_date',
      'country_domicile',
      'ticker',
      'seniority',
      'issuer',
      'sector',
      'description',
      'description_short',
      'coupon',
      'coupon_type',
      'coupon_frequency',
      'perpetual',
      'day_count',
      'dated_date',
      'issue_size',
      'issue_price',
      'issue_minimum_denomination',
      'par_value',
      'callable',
      'puttable',
      'convertible',
      'reg_s',
    ],
  })
  .openapi('UsCorporate')

const UsCorporatesRespSchema = z
  .object({ us_corporates: z.array(UsCorporateSchema) })
  .openapi({ required: ['us_corporates'] })
  .openapi('UsCorporatesResp')

const UsTreasurySchema = z
  .object({
    bond_status: BondStatusSchema,
    close_price: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The price of the last transaction of a security before the market closes for normal trading, shown as a percentage of par value',
      }),
    close_price_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The date of the close price' }),
    close_yield_to_maturity: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Yield to maturity of the treasury after the last close' }),
    close_yield_to_worst: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Yield to worst of the treasury after the last close' }),
    coupon: z
      .float64()
      .openapi({
        description: 'The annual interest rate paid on the bond as a percentage of par value',
      }),
    coupon_frequency: CouponFrequencySchema,
    coupon_type: CouponTypeSchema,
    cusip: z
      .string()
      .regex(/^[A-Z0-9]{9}$/)
      .length(9)
      .openapi({
        description:
          'CUSIP is a nine-character alphanumeric code that uniquely identifies the security',
      }),
    description: z.string().openapi({ description: 'Description of the treasury' }),
    description_short: z.string().openapi({ description: 'Short description of the treasury' }),
    first_coupon_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The date of the first coupon payment' }),
    fractionable: z
      .boolean()
      .openapi({ description: 'Whether the treasury can be traded in fractional amounts' }),
    isin: z
      .string()
      .regex(/^[A-Z]{2}[A-Z0-9]{9}[0-9]$/)
      .length(12)
      .openapi({ description: 'International Securities Identification Number' }),
    issue_date: z.iso.date().openapi({ description: 'The date on which the bond was issued' }),
    last_coupon_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The date of the last coupon payment' }),
    maturity_date: z.iso.date().openapi({ description: 'The date on which the bond matures' }),
    next_coupon_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The date of the next coupon payment' }),
    subtype: TreasurySubtypeSchema,
    tradable: z.boolean().openapi({ description: 'Whether the treasury is tradable' }),
  })
  .openapi({
    description: 'A US treasury',
    required: [
      'isin',
      'cusip',
      'bond_status',
      'tradable',
      'fractionable',
      'subtype',
      'issue_date',
      'maturity_date',
      'description',
      'description_short',
      'coupon',
      'coupon_type',
      'coupon_frequency',
    ],
  })
  .openapi('UsTreasury')

const UsTreasuriesRespSchema = z
  .object({ us_treasuries: z.array(UsTreasurySchema) })
  .openapi({ required: ['us_treasuries'] })
  .openapi('UsTreasuriesResp')

const RatelimitLimitHeaderSchema = z
  .int()
  .exactOptional()
  .openapi({ description: 'Request limit per minute.', example: 100, param: { required: false } })

const RatelimitRemainingHeaderSchema = z
  .int()
  .exactOptional()
  .openapi({
    description: 'Request limit per minute remaining.',
    example: 90,
    param: { required: false },
  })

const RatelimitResetHeaderSchema = z
  .int()
  .exactOptional()
  .openapi({
    description: 'The UNIX epoch when the remaining quota changes.',
    example: 1674044551,
    param: { required: false },
  })

const _400Response = {
  description: 'One of the request parameters is invalid. See the returned message for details.\n',
  headers: z.object({
    'X-RateLimit-Limit': RatelimitLimitHeaderSchema,
    'X-RateLimit-Remaining': RatelimitRemainingHeaderSchema,
    'X-RateLimit-Reset': RatelimitResetHeaderSchema,
  }),
}

const _401Response = {
  description:
    'Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.\n',
}

const _403Response = { description: 'The requested resource is forbidden.\n' }

const _429Response = {
  description:
    "Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.\n",
  headers: z.object({
    'X-RateLimit-Limit': RatelimitLimitHeaderSchema,
    'X-RateLimit-Remaining': RatelimitRemainingHeaderSchema,
    'X-RateLimit-Reset': RatelimitResetHeaderSchema,
  }),
}

const _500Response = {
  description:
    'Internal server error. We recommend retrying these later. If the issue persists, please contact us on Slack or on the Community Forum.\n',
}

const BadRequestResponse = {
  description: 'Malformed input.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const ForbiddenResponse = {
  description: 'Request is forbidden',
  content: { 'application/json': { schema: z.string() } },
}

const IdempotencyKeyConflictResponse = {
  description: 'The idempotency key was already used with a different request payload.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const NotAuthorizedResponse = {
  description: 'Client is not authorized for this operation.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const NotFoundResponse = {
  description: 'Resource does not exist.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const AccountDocumentTypeParamsSchema = z
  .enum([
    'account_application',
    'account_statement',
    'crypto_account_statement',
    'options_application',
    'tax_statement',
    'trade_confirmation_json',
    'trade_confirmation',
  ])
  .exactOptional()
  .openapi({
    param: {
      description: 'The type of the account document',
      in: 'query',
      name: 'type',
      required: false,
      schema: {
        enum: [
          'account_application',
          'account_statement',
          'crypto_account_statement',
          'options_application',
          'tax_statement',
          'trade_confirmation_json',
          'trade_confirmation',
        ],
        example: 'account_statement',
        type: 'string',
      },
    },
    example: 'account_statement',
  })

const AccountIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      description: 'Account identifier.',
      in: 'path',
      name: 'account_id',
      required: true,
      schema: { format: 'uuid', type: 'string' },
    },
  })

const ActivityTypeParamsSchema = z
  .enum([
    'FILL',
    'ACATC',
    'ACATS',
    'CGD',
    'CIL',
    'CSD',
    'CSW',
    'DIV',
    'DIVCGL',
    'DIVCGS',
    'DIVNRA',
    'DIVROC',
    'DIVTXEX',
    'FEE',
    'INT',
    'MEM',
    'JNLC',
    'JNLS',
    'MA',
    'OPASN',
    'OPCA',
    'OPCSH',
    'OPEXC',
    'OPEXP',
    'OPTRD',
    'PTC',
    'REO',
    'REORG',
    'SPIN',
    'SPLIT',
    'FOPT',
    'OCT',
  ])
  .openapi({
    param: {
      description: 'see ActivityType model for details about what the different types mean',
      in: 'path',
      name: 'activity_type',
      required: true,
      schema: {
        enum: [
          'FILL',
          'ACATC',
          'ACATS',
          'CGD',
          'CIL',
          'CSD',
          'CSW',
          'DIV',
          'DIVCGL',
          'DIVCGS',
          'DIVNRA',
          'DIVROC',
          'DIVTXEX',
          'FEE',
          'INT',
          'MEM',
          'JNLC',
          'JNLS',
          'MA',
          'OPASN',
          'OPCA',
          'OPCSH',
          'OPEXC',
          'OPEXP',
          'OPTRD',
          'PTC',
          'REO',
          'REORG',
          'SPIN',
          'SPLIT',
          'FOPT',
          'OCT',
        ],
        type: 'string',
      },
    },
  })

const AfterParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      description: 'The response will include only ones submitted after this timestamp (exclusive)',
      in: 'query',
      name: 'after',
      schema: { example: '2021-03-16T18:38:01.942282Z', format: 'date-time', type: 'string' },
      required: false,
    },
    example: '2021-03-16T18:38:01.942282Z',
  })

const AssetClassParamsSchema = z
  .preprocess(
    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
    z.array(z.enum(['us_equity', 'us_option', 'crypto', 'all'])),
  )
  .exactOptional()
  .openapi({
    param: {
      description:
        'A comma-separated list of asset classes, the response will include only orders in the specified asset classes. By specifying `us_option` as the class, you can query option orders by underlying symbol using the symbols parameter.',
      in: 'query',
      name: 'asset_class',
      schema: {
        items: { enum: ['us_equity', 'us_option', 'crypto', 'all'], type: 'string' },
        type: 'array',
      },
      required: false,
    },
  })

const DirectionParamsSchema = z
  .enum(['asc', 'desc'])
  .exactOptional()
  .openapi({
    param: {
      description:
        'The chronological order of response based on the submission time. asc or desc. Defaults to desc.',
      in: 'query',
      name: 'direction',
      schema: { enum: ['asc', 'desc'], example: 'desc', type: 'string' },
      required: false,
    },
    example: 'desc',
  })

const DocumentIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      description: 'Document identifier.',
      in: 'path',
      name: 'document_id',
      required: true,
      schema: { format: 'uuid', type: 'string' },
    },
  })

const LegacyIdempotencyKeyParamsSchema = z
  .string()
  .max(128)
  .exactOptional()
  .openapi({
    param: {
      description:
        'Optional client-generated key for safe retries and duplicate request detection.\nThis endpoint currently accepts keys up to 128 characters. Alpaca is moving toward\na 36-character maximum; new implementations should generate a unique UUIDv7 or\nUUIDv4 value (36 characters including hyphens) for each logical operation. Do not\nreuse a key across operations.\n',
      in: 'header',
      name: 'Idempotency-Key',
      required: false,
      schema: { maxLength: 128, type: 'string' },
    },
  })

const OrderIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      description: 'Order identifier.',
      in: 'path',
      name: 'order_id',
      required: true,
      schema: { format: 'uuid', type: 'string' },
    },
  })

const PageTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Used for pagination, this token retrieves the next page of results. It is obtained from the response of the preceding page when additional pages are available.',
      in: 'query',
      name: 'page_token',
      required: false,
      schema: { example: 'MA==', type: 'string' },
    },
    example: 'MA==',
  })

const SortParamsSchema = z
  .enum(['asc', 'desc'])
  .exactOptional()
  .openapi({
    param: {
      description:
        'The chronological order of response based on the submission time. asc or desc. Defaults to desc.',
      in: 'query',
      name: 'sort',
      schema: { enum: ['asc', 'desc'], example: 'desc', type: 'string' },
      required: false,
    },
    example: 'desc',
  })

const SymbolsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'A comma-separated list of symbols to filter by.',
      in: 'query',
      name: 'symbols',
      schema: { example: 'AAPL,TSLA,MSFT', type: 'string' },
      required: false,
    },
    example: 'AAPL,TSLA,MSFT',
  })

const UntilParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      description: 'The response will include only ones submitted until this timestamp (exclusive)',
      in: 'query',
      name: 'until',
      schema: { example: '2021-03-16T18:38:01.942282Z', format: 'date-time', type: 'string' },
      required: false,
    },
    example: '2021-03-16T18:38:01.942282Z',
  })

const EndParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      description:
        'The last date to retrieve data for (inclusive). Default: one week from the start date.\n',
      example: '2030-01-01',
      in: 'query',
      name: 'end',
      required: false,
      schema: { format: 'date', type: 'string' },
    },
  })

const LegacyDateTypeParamsSchema = z
  .enum(['TRADING', 'SETTLEMENT'])
  .exactOptional()
  .openapi({
    param: {
      description:
        'Indicates what start and end mean. Default: TRADING. If TRADING is specified, returns a calendar whose trading date matches start, end. If SETTLEMENT is specified, returns the calendar whose settlement date matches start and end.\n',
      in: 'query',
      name: 'date_type',
      schema: { enum: ['TRADING', 'SETTLEMENT'], type: 'string' },
      required: false,
    },
  })

const LegacyEndParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      description: 'The last date to retrieve data for (inclusive).',
      in: 'query',
      name: 'end',
      schema: { format: 'date-time', type: 'string' },
      required: false,
    },
  })

const LegacyStartParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      description: 'The first date to retrieve data for (inclusive).',
      in: 'query',
      name: 'start',
      schema: { format: 'date-time', type: 'string' },
      required: false,
    },
  })

const MarketParamsSchema = MarketSchema.openapi({
  param: {
    description:
      'The market identifier. MIC, BIC, or acronym.\n\nAvailable market codes by region:\n\n**United States**\n- `BMO`: Bank of Montreal. US banking calendar (US operations).\n- `BNYM`: The Bank of New York Mellon. US banking calendar.\n- `BOATS`: Blue Ocean Alternative Trading System. US overnight trading.\n- `IEX`: Investors Exchange. US equities.\n- `IEXG`: Investors Exchange. US equities.\n- `NASDAQ`: National Association of Securities Dealers Automated Quotations. US equities.\n- `NYSE`: New York Stock Exchange. US equities.\n- `OCEA`: BlueOcean ATS. US overnight trading.\n- `OPRA`: Options Price Reporting Authority. US options.\n- `OTC`: Over-The-Counter. US OTC equities.\n- `OTCM`: OTC Markets. US OTC equities.\n- `SIFMA`: Securities Industry and Financial Markets Association. US bonds.\n- `XNAS`: NASDAQ. US equities.\n- `XNYS`: New York Stock Exchange. US equities.\n\n**Europe**\n- `CEUX`: Cboe CEUX Europe. European equities (Cboe Netherlands).\n- `CHIX`: Cboe CHIX Europe. European equities (Cboe UK).\n- `ISE`: Euronext Dublin. Irish equities.\n- `LSE`: London Stock Exchange. UK equities.\n- `MTA`: Euronext Milan. Italian equities.\n- `MTAA`: Euronext Milan. Italian equities.\n- `XAMS`: Euronext Amsterdam. Dutch equities.\n- `XBRU`: Euronext Brussels. Belgian equities.\n- `XDUB`: Euronext Dublin. Irish equities.\n- `XETR`: Frankfurt Stock Exchange. German equities.\n- `XETRA`: Frankfurt Stock Exchange. German equities.\n- `XLIS`: Euronext Lisbon. Portuguese equities.\n- `XLON`: London Stock Exchange. UK equities.\n- `XPAR`: Euronext Paris. French equities.\n\n**Asia & Middle East**\n- `HKEX`: Hong Kong Stock Exchange. Hong Kong equities.\n- `JPX`: Japan Exchange Group. Japanese equities.\n- `TADAWUL`: Saudi Stock Exchange. Saudi equities.\n- `XHKG`: Hong Kong Stock Exchange. Hong Kong equities.\n- `XSAU`: Saudi Stock Exchange. Saudi equities.\n- `XTKS`: Japan Exchange Group. Japanese equities.\n',
    in: 'path',
    name: 'market',
    required: true,
    schema: { $ref: '#/components/schemas/market' },
  },
})

const MarketsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Comma-separated list of markets. Available market codes by region:\n\n**United States**\n- `BMO`: Bank of Montreal. US banking calendar (US operations).\n- `BNYM`: The Bank of New York Mellon. US banking calendar.\n- `BOATS`: Blue Ocean Alternative Trading System. US overnight trading.\n- `IEX`: Investors Exchange. US equities.\n- `IEXG`: Investors Exchange. US equities.\n- `NASDAQ`: National Association of Securities Dealers Automated Quotations. US equities.\n- `NYSE`: New York Stock Exchange. US equities.\n- `OCEA`: BlueOcean ATS. US overnight trading.\n- `OPRA`: Options Price Reporting Authority. US options.\n- `OTC`: Over-The-Counter. US OTC equities.\n- `OTCM`: OTC Markets. US OTC equities.\n- `SIFMA`: Securities Industry and Financial Markets Association. US bonds.\n- `XNAS`: NASDAQ. US equities.\n- `XNYS`: New York Stock Exchange. US equities.\n\n**Europe**\n- `CEUX`: Cboe CEUX Europe. European equities (Cboe Netherlands).\n- `CHIX`: Cboe CHIX Europe. European equities (Cboe UK).\n- `ISE`: Euronext Dublin. Irish equities.\n- `LSE`: London Stock Exchange. UK equities.\n- `MTA`: Euronext Milan. Italian equities.\n- `MTAA`: Euronext Milan. Italian equities.\n- `XAMS`: Euronext Amsterdam. Dutch equities.\n- `XBRU`: Euronext Brussels. Belgian equities.\n- `XDUB`: Euronext Dublin. Irish equities.\n- `XETR`: Frankfurt Stock Exchange. German equities.\n- `XETRA`: Frankfurt Stock Exchange. German equities.\n- `XLIS`: Euronext Lisbon. Portuguese equities.\n- `XLON`: London Stock Exchange. UK equities.\n- `XPAR`: Euronext Paris. French equities.\n\n**Asia & Middle East**\n- `HKEX`: Hong Kong Stock Exchange. Hong Kong equities.\n- `JPX`: Japan Exchange Group. Japanese equities.\n- `TADAWUL`: Saudi Stock Exchange. Saudi equities.\n- `XHKG`: Hong Kong Stock Exchange. Hong Kong equities.\n- `XSAU`: Saudi Stock Exchange. Saudi equities.\n- `XTKS`: Japan Exchange Group. Japanese equities.\n',
      example: 'NYSE,LSE',
      in: 'query',
      name: 'markets',
      schema: { type: 'string' },
      required: false,
    },
  })

const StartParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      description: 'The first date to retrieve data for (inclusive). Default: today.\n',
      example: '2025-01-01',
      in: 'query',
      name: 'start',
      required: false,
      schema: { format: 'date', type: 'string' },
    },
  })

const TimeParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      description: 'Instead of the current time, use this time for the clock.',
      in: 'query',
      name: 'time',
      required: false,
      schema: { format: 'date-time', type: 'string' },
    },
  })

const TimezoneParamsSchema = z
  .literal('UTC')
  .exactOptional()
  .openapi({
    param: {
      description: 'Timezone of the times. Default: the timezone of the market.\n',
      in: 'query',
      name: 'timezone',
      required: false,
      schema: { enum: ['UTC'], type: 'string' },
    },
  })

const BracketOrderResponseExample = {
  description:
    'A `bracket` order returned with its legs. The entry order and both legs share one `group_id`, and `group_role` identifies each order.',
  value: {
    asset_class: 'us_equity',
    asset_id: 'b0b6dd9d-8b9b-48a9-ba46-b9d54906e415',
    canceled_at: null,
    client_order_id: '5c2e8f1a-9d4b-4a7e-8c3f-6b1d0e9a2f47',
    created_at: '2026-09-28T14:30:12.418372Z',
    expired_at: null,
    extended_hours: false,
    failed_at: null,
    filled_at: null,
    filled_avg_price: null,
    filled_qty: '0',
    group_id: '3f1c2b7e-8d4a-4c6e-9f2a-5b7d1e0c9a84',
    group_role: 'entry',
    hwm: null,
    id: 'b7d0e2c1-6a4f-4d3b-9e8a-2c5f1a7b9d30',
    legs: [
      {
        asset_class: 'us_equity',
        asset_id: 'b0b6dd9d-8b9b-48a9-ba46-b9d54906e415',
        canceled_at: null,
        client_order_id: '2d7e9b41-5f3a-4c8e-a1b6-9e0d3c7f2a58',
        created_at: '2026-09-28T14:30:12.418372Z',
        expired_at: null,
        extended_hours: false,
        failed_at: null,
        filled_at: null,
        filled_avg_price: null,
        filled_qty: '0',
        group_id: '3f1c2b7e-8d4a-4c6e-9f2a-5b7d1e0c9a84',
        group_role: 'take_profit',
        hwm: null,
        id: 'c4a9f3e8-1b2d-4e6f-8a7c-5d3e2f1b0a96',
        legs: null,
        limit_price: '170',
        notional: null,
        order_class: 'bracket',
        order_type: 'limit',
        position_intent: 'sell_to_close',
        qty: '10',
        replaced_at: null,
        replaced_by: null,
        replaces: null,
        side: 'sell',
        source: null,
        status: 'held',
        stop_price: null,
        submitted_at: '2026-09-28T14:30:12.402119Z',
        subtag: null,
        symbol: 'AAPL',
        time_in_force: 'gtc',
        trail_percent: null,
        trail_price: null,
        type: 'limit',
        updated_at: '2026-09-28T14:30:12.418372Z',
      },
      {
        asset_class: 'us_equity',
        asset_id: 'b0b6dd9d-8b9b-48a9-ba46-b9d54906e415',
        canceled_at: null,
        client_order_id: '8a4c1f6e-3b9d-4e2a-b7c5-1f0e9d8a6b34',
        created_at: '2026-09-28T14:30:12.418372Z',
        expired_at: null,
        extended_hours: false,
        failed_at: null,
        filled_at: null,
        filled_avg_price: null,
        filled_qty: '0',
        group_id: '3f1c2b7e-8d4a-4c6e-9f2a-5b7d1e0c9a84',
        group_role: 'stop_loss',
        hwm: null,
        id: 'e2f8b1a6-7c3d-4a5e-9b8f-0d1c6a4e3b72',
        legs: null,
        limit_price: null,
        notional: null,
        order_class: 'bracket',
        order_type: 'stop',
        position_intent: 'sell_to_close',
        qty: '10',
        replaced_at: null,
        replaced_by: null,
        replaces: null,
        side: 'sell',
        source: null,
        status: 'held',
        stop_price: '140',
        submitted_at: '2026-09-28T14:30:12.402119Z',
        subtag: null,
        symbol: 'AAPL',
        time_in_force: 'gtc',
        trail_percent: null,
        trail_price: null,
        type: 'stop',
        updated_at: '2026-09-28T14:30:12.418372Z',
      },
    ],
    limit_price: '150',
    notional: null,
    order_class: 'bracket',
    order_type: 'limit',
    position_intent: 'buy_to_open',
    qty: '10',
    replaced_at: null,
    replaced_by: null,
    replaces: null,
    side: 'buy',
    source: null,
    status: 'accepted',
    stop_price: null,
    submitted_at: '2026-09-28T14:30:12.402119Z',
    subtag: null,
    symbol: 'AAPL',
    time_in_force: 'gtc',
    trail_percent: null,
    trail_price: null,
    type: 'limit',
    updated_at: '2026-09-28T14:30:12.418372Z',
  },
}

const CryptoOrderResponseExample = {
  value: {
    asset_class: 'crypto',
    asset_id: 'a1733398-6acc-4e92-af24-0d0667f78713',
    canceled_at: null,
    client_order_id: '5b5d3d67-06ad-4ffa-af65-a117d0fc5a59',
    created_at: '2023-12-12T22:36:51.337711497Z',
    expired_at: null,
    extended_hours: false,
    failed_at: null,
    filled_at: null,
    filled_avg_price: null,
    filled_qty: '0',
    hwm: null,
    id: '38e482f3-79a8-4f75-a057-f07a1ec6a397',
    legs: null,
    limit_price: '2100',
    notional: null,
    order_class: '',
    order_type: 'limit',
    qty: '0.02',
    replaced_at: null,
    replaced_by: null,
    replaces: null,
    side: 'buy',
    source: null,
    status: 'pending_new',
    stop_price: null,
    submitted_at: '2023-12-12T22:36:51.313261061Z',
    subtag: null,
    symbol: 'ETH/USD',
    time_in_force: 'gtc',
    trail_percent: null,
    trail_price: null,
    type: 'limit',
    updated_at: '2023-12-12T22:36:51.337754768Z',
  },
}

const EquityOrderResponseExample = {
  value: {
    asset_class: 'us_equity',
    asset_id: 'b0b6dd9d-8b9b-48a9-ba46-b9d54906e415',
    canceled_at: null,
    client_order_id: '5680c4bc-9ac1-4a12-a44c-df427ba53032',
    created_at: '2023-12-12T22:31:24.668464435Z',
    expired_at: null,
    extended_hours: false,
    failed_at: null,
    filled_at: null,
    filled_avg_price: null,
    filled_qty: '0',
    hwm: null,
    id: '7b08df51-c1ac-453c-99f9-323a5f075f0d',
    legs: null,
    limit_price: '150',
    notional: null,
    order_class: '',
    order_type: 'limit',
    qty: '2',
    replaced_at: null,
    replaced_by: null,
    replaces: null,
    side: 'buy',
    source: null,
    status: 'accepted',
    stop_price: null,
    submitted_at: '2023-12-12T22:31:24.577215743Z',
    subtag: null,
    symbol: 'AAPL',
    time_in_force: 'gtc',
    trail_percent: null,
    trail_price: null,
    type: 'limit',
    updated_at: '2023-12-12T22:31:24.668464435Z',
  },
}

const IPOEventAllocationExample = {
  summary: 'Final allocation result for an account (account-scoped event)',
  value: {
    account_id: '6221407b-32b2-3e6b-a7fe-cd79e1b68ba3',
    at: '2026-03-20T00:15:42.318901Z',
    correspondent: 'COR1',
    event_id: '01J9RTPZGHKVB8M3X4F5J7LCQ9',
    offering_reference: 'FI111225',
    payload: {
      allocated_amount: '1764',
      allocated_shares: '42',
      cusip_id: '123456789',
      final_price: '42',
      subject: 'IPO Allocation: Example Corp',
    },
    received_at: '2026-03-20T00:15:42.103572Z',
    verb: 'Allocation',
  },
}

const IPOEventOfferingExample = {
  summary: 'New IPO offering published',
  value: {
    at: '2026-03-20T12:24:58.807230Z',
    event_id: '01J9RPMV5TKB8WX3M4F1KZ7QH2',
    offering_reference: 'FI111225',
    payload: {
      available_to_order: 'Available',
      max_price: '42',
      min_price: '42',
      name: 'Example Corp',
      source: 'example source',
      ticker_symbol: 'EXMP',
    },
    received_at: '2026-03-20T12:24:58.500000Z',
    verb: 'Offering',
  },
}

const IPOEventOfferingCancellationExample = {
  summary: 'Offering was cancelled (no payload field)',
  value: {
    at: '2026-03-20T12:24:52.325158Z',
    event_id: '01J9RVB6Y4ZK8M3N7QD2WX1RFP',
    offering_reference: 'FI111225',
    received_at: '2026-03-20T12:24:52.110430Z',
    verb: 'OfferingCancellation',
  },
}

const IPOEventOfferingUpdateExample = {
  summary: 'Existing offering updated (e.g. price range narrowed)',
  value: {
    at: '2026-03-20T15:42:11.118274Z',
    event_id: '01J9RQ5HNZQK7M3RDVJ8XBPCT1',
    offering_reference: 'FI111225',
    payload: {
      available_to_order: 'Available',
      max_price: '44',
      min_price: '40',
      name: 'Example Corp',
      source: 'example source',
      ticker_symbol: 'EXMP',
    },
    received_at: '2026-03-20T15:42:10.892140Z',
    verb: 'OfferingUpdate',
  },
}

const IPOEventProspectusExample = {
  summary: 'Prospectus document is now available',
  value: {
    at: '2026-03-19T23:26:46.853262Z',
    event_id: '01J9RSGD8JR2A4K7MZNTPVQ5XW',
    offering_reference: 'FI111225',
    payload: {
      prospectus_url: 'https://example.com/prospectus/example-corp.pdf',
      subject: 'IPO Prospectus: Example Corp',
    },
    received_at: '2026-03-19T23:26:46.612880Z',
    verb: 'Prospectus',
  },
}

const IPOEventSixtyMinMailExample = {
  summary: '60-minute pricing window opened (no new orders accepted)',
  value: {
    at: '2026-03-19T22:50:11.729329Z',
    event_id: '01J9RT9P3WYH8KCJM2LFQX5ZRD',
    offering_reference: 'FI111225',
    payload: {
      sixty_minute_expiration_time: '2026-03-19T23:50:11.729329Z',
      subject: 'IPO 60 Minute Mail: Example Corp',
    },
    received_at: '2026-03-19T22:50:11.512640Z',
    verb: 'SixtyMinMail',
  },
}

const IPOOfferingGetExampleExample = {
  summary: 'Single IPO offering',
  value: {
    data: {
      anticipated_shares: 5000000,
      availability: 'available',
      cusip_id: '123456789',
      description: 'Example Corp is a leading provider of example services.',
      ipo_reference: 'FI111225',
      logo_small: 'https://example.com/logos/exmp-small.png',
      max_price: '44',
      max_ticket_size: '100000',
      min_price: '40',
      min_ticket_size: '100',
      name: 'Example Corp',
      no_new_orders: false,
      offering_type: 'IPO',
      prospectus_url: 'https://example.com/prospectus/example-corp.pdf',
      settlement_date: '2026-04-04',
      ticker_symbol: 'EXMP',
      trade_date: '2026-04-02',
      underwriters: ['Goldman Sachs', 'Morgan Stanley'],
      unit_step_size: '1',
    },
  },
}

const IPOOfferingListExampleExample = {
  summary: 'Page of available IPO offerings',
  value: {
    data: [
      {
        anticipated_shares: 5000000,
        availability: 'available',
        cusip_id: '123456789',
        description: 'Example Corp is a leading provider of example services.',
        ipo_reference: 'FI111225',
        logo_small: 'https://example.com/logos/exmp-small.png',
        max_price: '44',
        max_ticket_size: '100000',
        min_price: '40',
        min_ticket_size: '100',
        name: 'Example Corp',
        no_new_orders: false,
        offering_type: 'IPO',
        prospectus_url: 'https://example.com/prospectus/example-corp.pdf',
        settlement_date: '2026-04-04',
        ticker_symbol: 'EXMP',
        trade_date: '2026-04-02',
        underwriters: ['Goldman Sachs', 'Morgan Stanley'],
        unit_step_size: '1',
      },
    ],
    next_page_token: null,
  },
}

const IPOOrderResponseExample = {
  value: {
    asset_class: 'ipo',
    asset_id: '9b6c7c1a-9eb2-4d4a-8a3a-1bf4c1d5cbaa',
    canceled_at: null,
    client_order_id: '0b3a90b6-6b5c-4d83-8c0e-9b3eaf4a8d11',
    created_at: '2025-09-15T13:30:42.117344821Z',
    expired_at: null,
    extended_hours: false,
    failed_at: null,
    filled_at: null,
    filled_avg_price: null,
    filled_qty: '0',
    hwm: null,
    id: '5e2a8f1a-9c10-4d3a-8c64-7f59c1d18c11',
    legs: null,
    limit_price: null,
    notional: '500',
    order_class: '',
    order_type: 'market',
    qty: null,
    replaced_at: null,
    replaced_by: null,
    replaces: null,
    side: 'buy',
    source: null,
    status: 'accepted',
    stop_price: null,
    submitted_at: '2025-09-15T13:30:42.094518219Z',
    subtag: null,
    symbol: 'FI111225',
    time_in_force: 'gtc',
    trail_percent: null,
    trail_price: null,
    type: 'market',
    updated_at: '2025-09-15T13:30:42.117344821Z',
  },
}

const MultilegOptionsOrderResponseExample = {
  value: {
    asset_class: '',
    asset_id: '',
    canceled_at: null,
    client_order_id: '646b1fe6-b212-4f54-94c6-429e7bcdee04',
    created_at: '2024-12-10T16:15:53.677230742Z',
    expired_at: null,
    extended_hours: false,
    failed_at: null,
    filled_at: '2024-12-10T16:15:53.694Z',
    filled_avg_price: '1.28',
    filled_qty: '1',
    hwm: null,
    id: '83f37e9f-6b1f-49ed-8fc6-3e6af716323f',
    legs: [
      {
        asset_class: 'us_option',
        asset_id: 'f0ea14b2-8a49-4e9b-89d1-894c6e518a76',
        canceled_at: null,
        client_order_id: 'cc8cc104-fe43-476c-b25c-f62650fb73f9',
        created_at: '2024-12-10T16:15:53.677230742Z',
        expired_at: null,
        expires_at: '2024-12-10T21:00:00Z',
        extended_hours: false,
        failed_at: null,
        filled_at: '2024-12-10T16:15:53.694Z',
        filled_avg_price: '0.43',
        filled_qty: '3',
        hwm: null,
        id: 'df4ff24a-c58a-4e37-8b9f-ef32b83a11f2',
        legs: null,
        limit_price: null,
        notional: null,
        order_class: 'mleg',
        order_type: '',
        position_intent: 'buy_to_open',
        qty: '3',
        ratio_qty: '3',
        replaced_at: null,
        replaced_by: null,
        replaces: null,
        side: 'buy',
        source: null,
        status: 'filled',
        stop_price: null,
        submitted_at: '2024-12-10T16:15:53.684952901Z',
        subtag: null,
        symbol: 'AAPL241213C00250000',
        time_in_force: 'day',
        trail_percent: null,
        trail_price: null,
        type: '',
        updated_at: '2024-12-10T16:15:53.725091158Z',
      },
      {
        asset_class: 'us_option',
        asset_id: 'f89940db-eeb1-46e6-8f9b-bb1f27a0b395',
        canceled_at: null,
        client_order_id: '0bd2d36d-4af2-4dfb-8418-333a5d5026fa',
        created_at: '2024-12-10T16:15:53.677230742Z',
        expired_at: null,
        expires_at: '2024-12-10T21:00:00Z',
        extended_hours: false,
        failed_at: null,
        filled_at: '2024-12-10T16:15:53.694Z',
        filled_avg_price: '0.01',
        filled_qty: '1',
        hwm: null,
        id: 'ecd91110-c34d-4e9d-a7bf-a9c27c40f8b5',
        legs: null,
        limit_price: null,
        notional: null,
        order_class: 'mleg',
        order_type: '',
        position_intent: 'sell_to_open',
        qty: '1',
        ratio_qty: '1',
        replaced_at: null,
        replaced_by: null,
        replaces: null,
        side: 'sell',
        source: null,
        status: 'filled',
        stop_price: null,
        submitted_at: '2024-12-10T16:15:53.684952901Z',
        subtag: null,
        symbol: 'AAPL241213C00260000',
        time_in_force: 'day',
        trail_percent: null,
        trail_price: null,
        type: '',
        updated_at: '2024-12-10T16:15:53.708983759Z',
      },
    ],
    limit_price: '10',
    notional: null,
    order_class: 'mleg',
    order_type: 'limit',
    qty: '1',
    replaced_at: null,
    replaced_by: null,
    replaces: null,
    side: '',
    source: null,
    status: 'filled',
    stop_price: null,
    submitted_at: '2024-12-10T16:15:53.684952901Z',
    subtag: null,
    symbol: '',
    time_in_force: 'day',
    trail_percent: null,
    trail_price: null,
    type: 'limit',
    updated_at: '2024-12-10T16:15:53.725139688Z',
  },
}

const OptionOrderResponseExample = {
  value: {
    asset_class: 'us_option',
    asset_id: '98359ef7-5124-49f3-85ea-5cf02df6defa',
    canceled_at: null,
    client_order_id: '58cd43a7-029e-457e-b77f-cd4f61f00f2a',
    created_at: '2023-12-12T21:35:49.102449524Z',
    expired_at: null,
    extended_hours: false,
    failed_at: null,
    filled_at: null,
    filled_avg_price: null,
    filled_qty: '0',
    hwm: null,
    id: '30a077fa-96f6-4f20-a052-4b921ee2f243',
    legs: null,
    limit_price: '10',
    notional: null,
    order_class: 'simple',
    order_type: 'limit',
    qty: '2',
    replaced_at: null,
    replaced_by: null,
    replaces: null,
    side: 'buy',
    source: null,
    status: 'pending_new',
    stop_price: null,
    submitted_at: '2023-12-12T21:35:49.056332248Z',
    subtag: null,
    symbol: 'AAPL250620C00100000',
    time_in_force: 'day',
    trail_percent: null,
    trail_price: null,
    type: 'limit',
    updated_at: '2023-12-12T21:35:49.102504673Z',
  },
}

const TradeUpdateEventV2BracketLegNewExample = {
  description:
    "A `new` event for the take-profit leg of a bracket order, sent when the leg is routed after the entry order fills. `legs` is null on stream events, so `group_id` and `group_role` identify the order's group and role.",
  value: [
    {
      account_id: '529248ad-c4cc-4a50-bea4-6bfd2953f83a',
      at: '2026-09-28T14:41:05.287316Z',
      event: 'new',
      event_id: '01K66Z3M4X8Q2R7T9V1W3Y5A6B',
      order: {
        asset_class: 'us_equity',
        asset_id: 'b0b6dd9d-8b9b-48a9-ba46-b9d54906e415',
        cancel_requested_at: null,
        canceled_at: null,
        client_order_id: '2d7e9b41-5f3a-4c8e-a1b6-9e0d3c7f2a58',
        created_at: '2026-09-28T14:30:12.418372Z',
        expired_at: null,
        extended_hours: false,
        failed_at: null,
        filled_at: null,
        filled_avg_price: null,
        filled_qty: '0',
        group_id: '3f1c2b7e-8d4a-4c6e-9f2a-5b7d1e0c9a84',
        group_role: 'take_profit',
        hwm: null,
        id: 'c4a9f3e8-1b2d-4e6f-8a7c-5d3e2f1b0a96',
        legs: null,
        limit_price: '170',
        notional: null,
        order_class: 'bracket',
        order_type: 'limit',
        position_intent: 'sell_to_close',
        qty: '10',
        replaced_at: null,
        replaced_by: null,
        replaces: null,
        side: 'sell',
        status: 'new',
        stop_price: null,
        submitted_at: '2026-09-28T14:30:12.402119Z',
        symbol: 'AAPL',
        time_in_force: 'gtc',
        trail_percent: null,
        trail_price: null,
        type: 'limit',
        updated_at: '2026-09-28T14:41:05.263904Z',
      },
      timestamp: '2026-09-28T14:41:05.263904Z',
    },
  ],
}

const TradeUpdateEventV2MultilegOptionsFillExample = {
  value: {
    account_id: '529248ad-c4cc-4a50-bea4-6bfd2953f83a',
    at: '2025-01-14T16:05:51.872012Z',
    event: 'fill',
    event_id: '01G112NTT0XAXKDZK3AABK68TH',
    legs: [
      {
        execution_id: 'ccf7d1dc-78e1-4eb5-92c6-5c86b2bcca8f',
        order_id: '8d58279f-7dc8-415f-8495-32f394935509',
        price: '0.04',
        qty: '1',
        symbol: 'AAPL250117P00200000',
        timestamp: '2025-01-14T16:05:51.867802561Z',
      },
      {
        execution_id: '06f94555-6db7-4059-a4c4-0b993084ccd0',
        order_id: '8b0e2cff-eace-4e6a-8810-cad42c63df59',
        price: '0.03',
        qty: '1',
        symbol: 'AAPL250117C00250000',
        timestamp: '2025-01-14T16:05:51.867813051Z',
      },
    ],
    order: {
      asset_class: '',
      asset_id: '00000000-0000-0000-0000-000000000000',
      cancel_requested_at: null,
      canceled_at: null,
      client_order_id: '9d2f39de-adae-4dae-a67e-838bf21fb5ae',
      created_at: '2025-01-14T16:05:51.79424769Z',
      expired_at: null,
      extended_hours: false,
      failed_at: null,
      filled_at: '2025-01-14T16:05:51.867813051Z',
      filled_avg_price: '0.07',
      filled_qty: '1',
      hwm: null,
      id: '8af45a94-0b35-4053-ad4e-716c6783fcc9',
      legs: [
        {
          asset_class: 'us_option',
          asset_id: '8d1ba989-d98b-4551-889f-4647c2e86e20',
          cancel_requested_at: null,
          canceled_at: null,
          client_order_id: '9c5ce763-bd6f-41eb-b1b1-ed2c0b99d268',
          created_at: '2025-01-14T16:05:51.79424769Z',
          expired_at: null,
          expires_at: '2025-01-14T21:00:00Z',
          extended_hours: false,
          failed_at: null,
          filled_at: '2025-01-14T16:05:51.867802561Z',
          filled_avg_price: '0.04',
          filled_qty: '1',
          hwm: null,
          id: '8d58279f-7dc8-415f-8495-32f394935509',
          legs: null,
          limit_price: null,
          notional: null,
          order_class: 'mleg',
          order_type: '',
          position_intent: 'buy_to_open',
          qty: '1',
          ratio_qty: '1',
          replaced_at: null,
          replaced_by: null,
          replaces: null,
          side: 'buy',
          status: 'filled',
          stop_price: null,
          submitted_at: '2025-01-14T16:05:51.800245966Z',
          symbol: 'AAPL250117P00200000',
          time_in_force: 'day',
          trail_percent: null,
          trail_price: null,
          type: '',
          updated_at: '2025-01-14T16:05:51.869810922Z',
        },
        {
          asset_class: 'us_option',
          asset_id: 'e9f8c9ba-de7c-4e51-9eef-629f4cb79049',
          cancel_requested_at: null,
          canceled_at: null,
          client_order_id: '9cda9826-8fd5-4c01-8ee1-30c5286e2387',
          created_at: '2025-01-14T16:05:51.79424769Z',
          expired_at: null,
          expires_at: '2025-01-14T21:00:00Z',
          extended_hours: false,
          failed_at: null,
          filled_at: '2025-01-14T16:05:51.867813051Z',
          filled_avg_price: '0.03',
          filled_qty: '1',
          hwm: null,
          id: '8b0e2cff-eace-4e6a-8810-cad42c63df59',
          legs: null,
          limit_price: null,
          notional: null,
          order_class: 'mleg',
          order_type: '',
          position_intent: 'buy_to_open',
          qty: '1',
          ratio_qty: '1',
          replaced_at: null,
          replaced_by: null,
          replaces: null,
          side: 'buy',
          status: 'filled',
          stop_price: null,
          submitted_at: '2025-01-14T16:05:51.802310606Z',
          symbol: 'AAPL250117C00250000',
          time_in_force: 'day',
          trail_percent: null,
          trail_price: null,
          type: '',
          updated_at: '2025-01-14T16:05:51.870879612Z',
        },
      ],
      limit_price: '0.6',
      notional: null,
      order_class: 'mleg',
      order_type: 'limit',
      position_intent: '',
      qty: '1',
      replaced_at: null,
      replaced_by: null,
      replaces: null,
      side: 'buy',
      status: 'filled',
      stop_price: null,
      submitted_at: '2025-01-14T16:05:51.802310606Z',
      symbol: '',
      time_in_force: 'day',
      trail_percent: null,
      trail_price: null,
      type: 'limit',
      updated_at: '2025-01-14T16:05:51.870937762Z',
    },
    position_qtys: { AAPL250117C00250000: '1', AAPL250117P00200000: '1' },
    price: '0.07',
    qty: '1',
    timestamp: '2025-01-14T16:05:51.867813051Z',
  },
}

const TradeUpdateEventV2NewExample = {
  value: {
    account_id: '529248ad-c4cc-4a50-bea4-6bfd2953f83a',
    at: '2022-04-19T14:12:30.656741Z',
    event: 'new',
    event_id: '01G112NTT0XAXKDZK3AABK68TH',
    execution_id: '7e544af3-3104-4e1a-8cbc-dab2624949ff',
    order: {
      asset_class: 'us_equity',
      asset_id: 'a4778bc8-fad1-47b7-87fe-d5cde10d43f4',
      cancel_requested_at: null,
      canceled_at: null,
      client_order_id: '6d873193-dac6-4f72-8e13-c57853a9339d',
      commission: '1',
      created_at: '2022-04-19T10:12:30.57117938-04:00',
      expired_at: null,
      expires_at: '2022-04-19T21:00:00Z',
      extended_hours: false,
      failed_at: null,
      filled_at: null,
      filled_avg_price: null,
      filled_qty: '0',
      hwm: null,
      id: 'edada91a-8b55-4916-a153-8c7a9817e708',
      legs: null,
      limit_price: '700',
      notional: null,
      order_class: '',
      order_type: 'limit',
      position_intent: 'buy_to_open',
      qty: '4',
      replaced_at: null,
      replaced_by: null,
      replaces: null,
      side: 'buy',
      status: 'new',
      stop_price: null,
      submitted_at: '2022-04-19T10:12:30.403135025-04:00',
      symbol: 'TSLA',
      time_in_force: 'day',
      trail_percent: null,
      trail_price: null,
      type: 'limit',
      updated_at: '2022-04-19T10:12:30.609783218-04:00',
    },
    previous_execution_id: 'aeb60660-412f-4537-8d1f-1101b3fc8f64',
    timestamp: '2022-04-19T14:12:30.602193534Z',
  },
}

const TravelRuleValidationErrorExample = {
  description: "The request requires the beneficiary's name before the transfer can proceed.",
  summary: 'Missing beneficiary name',
  value: {
    error_code: 'BENEFICIARY_NAME_REQUIRED',
    message: "Please provide the beneficiary's name. Select one of the following options.",
    next_actions: [
      {
        description: "Provide the recipient's first and last name.",
        name: 'supply_beneficiaryName_naturalPerson',
        required_fields: [
          {
            description: "The recipient's first name.",
            field: 'beneficiary_given_name',
            value_type: 'string',
          },
          {
            description: "The recipient's last name.",
            field: 'beneficiary_family_name',
            value_type: 'string',
          },
        ],
        type: 'ONE_OF',
      },
      {
        description: "Provide the entity's legal name.",
        name: 'supply_beneficiaryName_legalEntity',
        required_fields: [
          {
            description: 'The legal name of the receiving entity.',
            field: 'beneficiary_entity_name',
            value_type: 'string',
          },
        ],
        type: 'ONE_OF',
      },
    ],
  },
}

const RebalancingAccountNotFoundExample = {
  description: 'Check the account ID and try again.',
  summary: 'No account with that ID exists for your correspondent',
  value: { code: 40410000, message: 'account not found' },
}

const RebalancingAccountNotFoundForIdExample = {
  description:
    'Check the account ID and try again. Message template: account not found for {account_id}',
  summary: 'No account with the ID in the message exists for your correspondent',
  value: { code: 40410000, message: 'account not found for bf2b0f93-f296-4276-a9cf-288586cf4fb7' },
}

const RebalancingAccountNotFundedExample = {
  description: 'Fund the account and try again.',
  summary: 'The account has no equity to rebalance',
  value: { code: 42210000, message: 'account is not funded' },
}

const RebalancingActiveRunExistsExample = {
  description: 'Cancel that run or wait until it finishes, then try again.',
  summary: 'The account already has a rebalance run in progress',
  value: {
    code: 40010001,
    message:
      'there is already an active run. Please cancel previous run or wait until the run is completed',
  },
}

const RebalancingAmountNotDecimalExample = {
  description:
    'Send a numeric amount and try again. Message template: amount must be a decimal: {parse_error}',
  summary: 'The amount is not a valid decimal number',
  value: {
    code: 40010001,
    message: "amount must be a decimal: can't convert not-a-number to decimal",
  },
}

const RebalancingAssetNotFoundExample = {
  description:
    'Check the symbol in the message and try again. Message template: could not find asset {symbol}',
  summary: 'A symbol in the weights is not a known asset',
  value: { code: 40010001, message: 'could not find asset ZZZZ' },
}

const RebalancingAssetNotFractionableExample = {
  description:
    'Choose a fractionable asset and try again. Message template: only assets which are fractionable are allowed. {symbol} is not fractionable',
  summary:
    'The asset named in the message cannot be traded in fractional quantity, so it cannot be used in a portfolio',
  value: {
    code: 40010001,
    message: 'only assets which are fractionable are allowed. BRK.A is not fractionable',
  },
}

const RebalancingAssetSymbolRequiredExample = {
  description: 'Set the symbol and try again.',
  summary: 'A weight of type asset is missing its symbol',
  value: { code: 40010001, message: 'asset symbol must be specified with type asset' },
}

const RebalancingCalendarDayNotMmddExample = {
  description:
    'Use that format and try again. Message template: calendar conditions day must be in MM-DD format: {time_parse_error}',
  summary: 'An annual calendar condition has a day that is not in MM-DD format',
  value: {
    code: 40010001,
    message:
      'calendar conditions day must be in MM-DD format: parsing time "13-40" as "01-02": month out of range',
  },
}

const RebalancingCalendarDayNotNumberExample = {
  description:
    'Use a day from 1 to 31 and try again. Message template: calendar conditions day must be a number: {parse_error}',
  summary: 'A monthly or quarterly calendar condition has a day that is not a number',
  value: {
    code: 40010001,
    message:
      'calendar conditions day must be a number: strconv.Atoi: parsing "abc": invalid syntax',
  },
}

const RebalancingCalendarDayOutOfRangeExample = {
  description: 'Use a day in that range and try again.',
  summary: 'A monthly or quarterly calendar condition has a day outside 1 to 31',
  value: {
    code: 40010001,
    message: 'calendar conditions must have a valid day between 1 and 31 inclusive',
  },
}

const RebalancingCalendarDayRequiredExample = {
  description: 'Set the day and try again.',
  summary: 'A calendar rebalance condition is missing its day',
  value: { code: 40010001, message: 'calendar conditions must have day specified' },
}

const RebalancingCalendarSubtypeInvalidExample = {
  description: 'Use `weekly`, `monthly`, `quarterly`, or `annually`.',
  summary: 'A calendar rebalance condition has a missing or unsupported subtype',
  value: {
    code: 40010001,
    message: 'calendar conditions must have sub_type: weekly, monthly, annually, quarterly',
  },
}

const RebalancingCalendarWeekdayInvalidExample = {
  description: 'Use monday, tuesday, wednesday, thursday, or friday.',
  summary: 'A weekly calendar condition has a day that is not a weekday name',
  value: {
    code: 40010001,
    message: 'calendar conditions must have day: [monday tuesday wednesday thursday friday]',
  },
}

const RebalancingCashWeightPercentEmptyExample = {
  description:
    'Set a numeric percent and try again. Message template: weights[{index}].percent: {parse_error}',
  summary: 'A cash weight has an empty percent',
  value: { code: 40010001, message: "weights[0].percent: can't convert  to decimal" },
}

const RebalancingConditionPercentNotDecimalExample = {
  description:
    'Send a numeric percent and try again. Message template: rebalance_conditions[{index}].percent: {parse_error}',
  summary: 'The percent on the rebalance condition named in the message is not a valid decimal',
  value: {
    code: 40010001,
    message: "rebalance_conditions[0].percent: can't convert not-a-number to decimal",
  },
}

const RebalancingCooldownDaysInvalidExample = {
  description: 'Set `cooldown_days` to 1 or greater and try again.',
  summary: 'The cooldown is missing or less than one day',
  value: { code: 40010001, message: 'cooldown_days must be greater than 0' },
}

const RebalancingCorrespondentNotFoundExample = {
  description: 'Check the API key and try again.',
  summary: 'The correspondent for these credentials could not be found',
  value: { code: 40410000, message: 'correspondent not found' },
}

const RebalancingCryptoAssetExample = {
  description:
    'Remove the symbol named in the message and try again. Message template: crypto assets are not allowed: {symbol}',
  summary: 'Cryptocurrency cannot be used in a portfolio',
  value: { code: 40010001, message: 'crypto assets are not allowed: BTC/USD' },
}

const RebalancingCryptoPositionExample = {
  description: 'Close those positions and try again.',
  summary: 'The account holds cryptocurrency, so it cannot be subscribed to a portfolio',
  value: {
    code: 40010001,
    message: 'cannot create portfolio subscription when you have active position(s) in crypto',
  },
}

const RebalancingDriftPercentNotDecimalExample = {
  description:
    'Send a numeric percent and try again. Message template: drift_band conditions percent must be a decimal: {parse_error}',
  summary: 'A drift band percent is not a valid decimal number',
  value: {
    code: 40010001,
    message:
      "drift_band conditions percent must be a decimal: can't convert not-a-number to decimal",
  },
}

const RebalancingDriftPercentNotPositiveExample = {
  description: 'Use a percent greater than zero and try again.',
  summary: 'A drift band condition has a negative percent',
  value: { code: 40010001, message: 'drift_band conditions must have positive percent' },
}

const RebalancingDriftPercentPrecisionExample = {
  description: 'Round it to two decimal places and try again.',
  summary: 'A drift band percent has more than two decimal places',
  value: {
    code: 40010001,
    message: 'drift_band conditions only support percent up to two 2 decimal places',
  },
}

const RebalancingDriftPercentRequiredExample = {
  description: 'Set the percent and try again.',
  summary: 'A drift band condition is missing its percent',
  value: { code: 40010001, message: 'drift_band conditions must have percent specified' },
}

const RebalancingDriftSubtypeInvalidExample = {
  description: 'Use `absolute` or `relative`.',
  summary: 'A drift band condition has a missing or unsupported subtype',
  value: {
    code: 40010001,
    message: 'drift_band conditions must have sub_type absolute or relative',
  },
}

const RebalancingDuplicateAbsoluteDriftExample = {
  description: 'Remove the extra one and try again.',
  summary: 'Only one absolute drift band condition is allowed',
  value: {
    code: 40010001,
    message: 'you can only have one absolute drift_band type rebalance condition',
  },
}

const RebalancingDuplicateAssetExample = {
  description:
    'The message names the symbol. Include each symbol only once and try again. Message template: duplicate assets are not allowed. {symbol} is duplicated',
  summary: 'The same symbol appears more than once in the weights',
  value: { code: 40010001, message: 'duplicate assets are not allowed. AAPL is duplicated' },
}

const RebalancingDuplicateCalendarConditionExample = {
  description: 'Remove the extra one and try again.',
  summary: 'Only one calendar rebalance condition is allowed',
  value: { code: 40010001, message: 'you can only have one calendar type rebalance condition' },
}

const RebalancingDuplicateOnUpdateConditionExample = {
  description: 'Remove the extra `on_portfolio_update` condition and try again.',
  summary: 'Only one on portfolio update condition is allowed',
  value: {
    code: 40010001,
    message: 'you can only have one on_portfolio_update type rebalance condition',
  },
}

const RebalancingDuplicateRelativeDriftExample = {
  description: 'Remove the extra one and try again.',
  summary: 'Only one relative drift band condition is allowed',
  value: {
    code: 40010001,
    message: 'you can only have one relative drift_band type rebalance condition',
  },
}

const RebalancingEmptyPortfolioUpdateExample = {
  description:
    'Send at least one of `name`, `description`, `cooldown_days`, `weights`, or `rebalance_conditions`.',
  summary: 'The update did not include any fields to change',
  value: {
    code: 40010001,
    message:
      'update request must contain at least one of the following fields: name, description, cooldown_days, weights, rebalance_conditions',
  },
}

const RebalancingInsufficientPermissionExample = {
  description: 'Use credentials with the required permission and try again.',
  summary:
    'These credentials are not allowed to call this endpoint, or rebalancing is not enabled for the correspondent',
  value: { code: 40310000, message: 'insufficient permission' },
}

const RebalancingInternalServerErrorExample = {
  description: 'If it keeps happening, contact support.',
  summary: 'Something went wrong on our side',
  value: { code: 50010000, message: 'internal server error occurred' },
}

const RebalancingInvalidPortfolioIdExample = {
  description: 'Check `portfolio_id` and try again.',
  summary: 'The portfolio ID in the path is not a valid UUID',
  value: { code: 40010001, message: 'invalid portfolio_id' },
}

const RebalancingInvalidQueryParameterExample = {
  description:
    'The message names the parameter. Correct it and try again. Message template: invalid {name}',
  summary: 'A query parameter is invalid or was sent more than once',
  value: { code: 40010001, message: 'invalid status' },
}

const RebalancingInvalidRequestExample = {
  description: 'Retry it. If it keeps happening, contact support.',
  summary: 'A valid client IP address could not be read from the request',
  value: { code: 40010001, message: 'invalid request' },
}

const RebalancingInvalidRunIdExample = {
  description: 'Check `run_id` and try again.',
  summary: 'The run ID in the path is not a valid UUID',
  value: { code: 40010001, message: 'invalid run_id' },
}

const RebalancingInvalidSubscriptionIdExample = {
  description: 'Check `subscription_id` and try again.',
  summary: 'The subscription ID in the path is not a valid UUID',
  value: { code: 40010001, message: 'invalid subscription_id' },
}

const RebalancingJitCorrespondentExample = {
  description: 'Contact support if this correspondent needs rebalancing.',
  summary: 'This correspondent uses just-in-time buying power, so rebalancing is not permitted',
  value: { code: 40310000, message: 'rebalancing not permitted for JIT correspondents' },
}

const RebalancingManualRunWithSubscriptionExample = {
  description: 'Unsubscribe first, or omit the weights and run against the subscription.',
  summary:
    'This account already has a subscription, so a manual run with its own weights cannot be created',
  value: { code: 40010001, message: 'cannot create manual rebalance run with active subscription' },
}

const RebalancingNestedPortfolioWeightsExample = {
  description: 'Contact support.',
  summary:
    'This portfolio includes a nested portfolio weight, which cannot be updated or deleted through this API',
  value: {
    code: 40010001,
    message:
      'publishing portfolio status changed: portfolio contains nested portfolio weights that cannot be represented in a rebalancer event',
  },
}

const RebalancingNonUsdAccountExample = {
  description: 'This account uses another currency, so the request was rejected.',
  summary: 'Rebalancing is only available for USD accounts',
  value: { code: 40310000, message: 'rebalancing not permitted for Non-USD accounts' },
}

const RebalancingOnUpdateDayForbiddenExample = {
  description: 'Remove `day` from the `on_portfolio_update` condition and try again.',
  summary: 'An on portfolio update condition cannot include a day',
  value: { code: 40010001, message: 'on_portfolio_update conditions cannot have day specified' },
}

const RebalancingOnUpdatePercentForbiddenExample = {
  description: 'Remove `percent` from the `on_portfolio_update` condition and try again.',
  summary: 'An on portfolio update condition cannot include a percent',
  value: {
    code: 40010001,
    message: 'on_portfolio_update conditions cannot have percent specified',
  },
}

const RebalancingOnUpdateSubtypeForbiddenExample = {
  description: 'Remove `sub_type` from the `on_portfolio_update` condition and try again.',
  summary: 'An on portfolio update condition cannot include a subtype',
  value: {
    code: 40010001,
    message: 'on_portfolio_update conditions cannot have sub_type specified',
  },
}

const RebalancingOpenOrdersExample = {
  description: 'Wait until those orders finish, then try again.',
  summary: 'The account has open orders, so it cannot be subscribed to a portfolio',
  value: {
    code: 40010001,
    message: 'cannot create portfolio subscription when you have open orders',
  },
}

const RebalancingPartialLiquidationUnsupportedExample = {
  description: 'Use a supported run type and try again.',
  summary: 'Partial liquidation runs are not supported',
  value: { code: 40010001, message: 'partial_liquidation is currently not supported' },
}

const RebalancingPatternDayTraderExample = {
  description: 'Subscribe an account that is not a pattern day trader.',
  summary: 'Pattern day trader accounts cannot be subscribed to a portfolio',
  value: { code: 40010001, message: 'cannot subscribe to a portfolio as a pattern day trader' },
}

const RebalancingPortfolioAlreadyInactiveExample = {
  description: 'The portfolio is already inactive, so no further action is needed.',
  summary: 'The portfolio is already inactive, so there is nothing to delete',
  value: { code: 40010001, message: 'nothing to delete' },
}

const RebalancingPortfolioHasSubscriptionsExample = {
  description: 'Unsubscribe those accounts first.',
  summary: 'Accounts are still subscribed to this portfolio, so it cannot be deleted',
  value: { code: 40010001, message: 'there are active subscriptions to this portfolio' },
}

const RebalancingPortfolioNotFoundExample = {
  description: 'Check the portfolio ID and try again.',
  summary: 'No portfolio with this ID exists for your correspondent',
  value: { code: 40410000, message: 'portfolio not found' },
}

const RebalancingPortfolioUnavailableExample = {
  description: 'Check the portfolio ID and try again.',
  summary: 'The portfolio does not exist, is not active, or does not belong to your correspondent',
  value: { code: 40010001, message: 'the given portfolio does not exist' },
}

const RebalancingRequestBodyInvalidExample = {
  description: 'Send a JSON body that matches the endpoint and try again.',
  summary: 'The request body is missing, is not valid JSON, or has a value of the wrong type',
  value: { code: 40010000, message: 'request body format is invalid' },
}

const RebalancingRunCannotBeCanceledExample = {
  description: 'Only a run in `QUEUED` or `IN_PROGRESS` can be canceled.',
  summary: 'This run cannot be canceled because it is not queued or in progress',
  value: { code: 42210000, message: 'run cannot be canceled' },
}

const RebalancingRunNotFoundExample = {
  description: 'Check the run ID and try again.',
  summary: 'No rebalance run with this ID exists for your correspondent',
  value: { code: 40410000, message: 'rebalance run not found' },
}

const RebalancingSchemaValidationFailedExample = {
  description: 'Check the body against the endpoint and try again.',
  summary: 'The JSON body is missing a required field or uses a value that is not allowed',
  value: { code: 40010001, message: 'request parameters are invalid' },
}

const RebalancingSubscriptionAlreadyExistsExample = {
  description: 'An account can have only one. Unsubscribe it before creating another.',
  summary: 'The account already has a subscription',
  value: { code: 42210000, message: 'an account can only have one active subscription' },
}

const RebalancingSubscriptionNotFoundExample = {
  description: 'Check the subscription ID and try again.',
  summary: 'No subscription with this ID exists for your correspondent',
  value: { code: 40410000, message: 'subscription not found' },
}

const RebalancingSubscriptionNothingToDeleteExample = {
  description: 'Check the subscription ID.',
  summary:
    'No subscription with this ID exists for your correspondent, so there is nothing to delete',
  value: { code: 42210000, message: 'nothing to delete' },
}

const RebalancingSubscriptionRequiredExample = {
  description: 'Subscribe the account, or send weights for a one-off run.',
  summary: 'This account is not subscribed to a portfolio, and the request did not include weights',
  value: { code: 40410000, message: 'no subscription for account' },
}

const RebalancingUnauthorizedExample = {
  description: 'Send a valid API key ID and secret, or a Broker Dashboard session, and try again.',
  summary: 'The request is not authenticated',
  value: { code: 40110000, message: 'request is not authorized' },
}

const RebalancingUnexpectedErrorExample = {
  description: 'If it keeps happening, contact support.',
  summary: 'Something went wrong on our side while handling the request',
  value: { error: 'Internal Server Error', message: 'An unexpected error occurred' },
}

const RebalancingUnsupportedMediaTypeExample = {
  description: 'Set Content-Type to application/json and send the body again.',
  summary: 'The Content-Type header is not application/json',
  value: { code: 41510000, message: 'unsupported media type' },
}

const RebalancingWeightPercentNotDecimalExample = {
  description:
    'Send a numeric percent and try again. Message template: percent must be a decimal: {parse_error}',
  summary: 'A weight percent is not a valid decimal number',
  value: {
    code: 40010001,
    message: "percent must be a decimal: can't convert not-a-number to decimal",
  },
}

const RebalancingWeightPercentNotPositiveExample = {
  description: 'Increase it and try again.',
  summary: 'A weight percent must be greater than zero',
  value: { code: 40010001, message: 'percent must be greater than zero' },
}

const RebalancingWeightsMustSumTo_100Example = {
  description:
    'The message includes the current total. Adjust the weights and try again. Message template: portfolio weights must add up to 100. Total is currently: {total}',
  summary: 'The weight percents must add up to exactly 100',
  value: {
    code: 40010001,
    message: 'portfolio weights must add up to 100. Total is currently: 90',
  },
}

const DeprecatedParamsHeaderSchema = z
  .string()
  .exactOptional()
  .openapi({
    description:
      'Present when the request includes one or more deprecated query parameters or deprecated\nparameter values. Lists every deprecated item the client sent, encoded as an RFC 9651\nStructured Field List of sf-strings:\n\n- Whole-parameter deprecation: the bare parameter name (`"deprecatedParam"`).\n- Value-level deprecation: `<param>=<value>`, with `<value>` in its canonical form (`"sort=legacy"`).\n\nOmitted when the request carries no deprecated parameters.\n',
    example: '"deprecatedParam", "sort=legacy"',
    param: { required: false },
  })

const BasicAuthSecurityScheme = { scheme: 'basic', type: 'http' }

export const getV1betaAccountsAccountIdFundingWalletRoute = createRoute({
  method: 'get',
  path: '/v1beta/accounts/{account_id}/funding_wallet',
  tags: ['Funding Wallets'],
  summary: 'Retrieve funding wallet',
  description:
    'Returns the funding wallet for the specified account. Responds with 404 if the account has not been onboarded to funding wallets or a wallet has not been created.',
  operationId: 'getFundingWallet',
  request: {
    params: z.object({
      account_id: z
        .string()
        .openapi({
          param: {
            description: 'UUID alpaca account ID',
            in: 'path',
            name: 'account_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'funding wallet',
      content: { 'application/json': { schema: FundingWalletSchema } },
    },
    default: { description: 'error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const postV1betaAccountsAccountIdFundingWalletRoute = createRoute({
  method: 'post',
  path: '/v1beta/accounts/{account_id}/funding_wallet',
  tags: ['Funding Wallets'],
  summary: 'Creates a funding wallet',
  description:
    'Creates a funding wallet for the specified account. The request is rejected if the account already has a funding wallet.',
  operationId: 'createFundingWallet',
  request: {
    params: z.object({
      account_id: z
        .string()
        .openapi({
          param: {
            description: 'UUID alpaca account ID',
            in: 'path',
            name: 'account_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'funding wallet',
      content: { 'application/json': { schema: FundingWalletSchema } },
    },
    default: { description: 'error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getV1betaAccountsAccountIdFundingWalletFundingDetailsRoute = createRoute({
  method: 'get',
  path: '/v1beta/accounts/{account_id}/funding_wallet/funding_details',
  tags: ['Funding Wallets'],
  summary: 'Retrieve funding details',
  description:
    'Returns a list of funding details if it exists. Query parameters must be passed to create a new funding details object if none exist.',
  operationId: 'listFundingDetails',
  request: {
    params: z.object({
      account_id: z
        .string()
        .openapi({
          param: {
            description: 'UUID alpaca account ID',
            in: 'path',
            name: 'account_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      payment_type: FundingDetailPaymentTypeSchema.openapi({
        param: {
          description:
            'The type of SSI to be returned, priority (SWIFT) or regular (local). A null value returns all payment types.',
          in: 'query',
          name: 'payment_type',
          required: false,
          schema: { $ref: '#/components/schemas/FundingDetailPaymentType' },
        },
      }).exactOptional(),
      currency: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Should be provided in ISO 4217 standard',
            in: 'query',
            name: 'currency',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'list of wallets',
      content: {
        'application/json': {
          schema: z.unknown().superRefine((val, ctx) => {
            if (Array.isArray(val)) {
              {
                const Schema = ListFundingDetailsSchema
                for (let i = 0; i < val.length; i++) {
                  if (!Schema.safeParse(val[i]).success) {
                    ctx.addIssue({ code: 'custom' })
                  }
                }
              }
            }
          }),
        },
      },
    },
    default: { description: 'error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getV1betaAccountsAccountIdFundingWalletRecipientBankRoute = createRoute({
  method: 'get',
  path: '/v1beta/accounts/{account_id}/funding_wallet/recipient_bank',
  tags: ['Funding Wallets'],
  summary: 'Retrieve recipient bank',
  description:
    "Returns the recipient bank registered against the specified account's funding wallet. Responds with 404 if no recipient bank has been registered for the account.",
  operationId: 'getFundingWalletRecipientBank',
  request: {
    params: z.object({
      account_id: z
        .string()
        .openapi({
          param: {
            description: 'UUID alpaca account ID',
            in: 'path',
            name: 'account_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'recipient bank' },
    default: {
      description: 'Error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV1betaAccountsAccountIdFundingWalletRecipientBankRoute = createRoute({
  method: 'post',
  path: '/v1beta/accounts/{account_id}/funding_wallet/recipient_bank',
  tags: ['Funding Wallets'],
  summary: 'Create a recipient bank',
  description:
    'Creates a new recipient bank. Returns the new recipient bank entity on success. entity.',
  operationId: 'createFundingWalletRecipientBank',
  request: {
    params: z.object({
      account_id: z
        .string()
        .openapi({
          param: {
            description: 'UUID alpaca account ID',
            in: 'path',
            name: 'account_id',
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
              account_number: z.string().openapi({ description: 'Bank account number.' }),
              account_type: z
                .enum(['checking', 'savings'])
                .exactOptional()
                .openapi({ description: 'Bank account type.' }),
              bank_account_holder_name: z
                .string()
                .exactOptional()
                .openapi({ description: "Bank account holder's name." }),
              bank_country: z
                .string()
                .openapi({
                  description:
                    "Two-letter code for the country in which the beneficiary's bank account is held.",
                }),
              bank_name: z.string(),
              bic_swift: z.string().exactOptional().openapi({ description: 'BIC/SWIFT code' }),
              city: z.string().openapi({ description: 'City' }),
              currency: z
                .string()
                .openapi({
                  description:
                    "Currency in which money is held in the beneficiary's bank account. ISO-3 currency code.",
                }),
              iban: z.string().exactOptional().openapi({ description: 'IBAN code' }),
              postal_code: z.string().exactOptional().openapi({ description: 'Postal code' }),
              routing_code: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Routing code for routing_code_type. If supplied, routing_code_type should also be supplied.',
                }),
              routing_code_type: z
                .enum([
                  'sort_code',
                  'aba',
                  'bsb_code',
                  'institution_no',
                  'bank_code',
                  'branch_code',
                  'clabe',
                  'cnaps',
                  'ifsc',
                ])
                .exactOptional()
                .openapi({
                  description:
                    'Local payment routing system. If supplied, routing_code should also be supplied.',
                }),
              state_or_province: z
                .string()
                .exactOptional()
                .openapi({ description: 'State or province.' }),
              street_address: z.string().openapi({ description: 'First line of address.' }),
            })
            .openapi({
              required: [
                'bank_country',
                'currency',
                'bank_name',
                'street_address',
                'city',
                'account_number',
              ],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: FundingWalletRecipientBankSchema } },
    },
    default: { description: 'error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const deleteV1betaAccountsAccountIdFundingWalletRecipientBankRoute = createRoute({
  method: 'delete',
  path: '/v1beta/accounts/{account_id}/funding_wallet/recipient_bank',
  tags: ['Funding Wallets'],
  summary: 'Delete a recipient bank',
  description: 'deletes a recipient bank.',
  operationId: 'deleteFundingWalletRecipientBank',
  request: {
    params: z.object({
      account_id: z
        .string()
        .openapi({
          param: {
            description: 'UUID alpaca account ID',
            in: 'path',
            name: 'account_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'recipient bank' },
    default: {
      description: 'Error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV1betaAccountsAccountIdFundingWalletTransfersRoute = createRoute({
  method: 'get',
  path: '/v1beta/accounts/{account_id}/funding_wallet/transfers',
  tags: ['Funding Wallets'],
  summary: 'Retrieve funding wallet transfers',
  description:
    'Returns all funding wallet transfers (deposits and withdrawals) associated with the specified account.',
  operationId: 'getFundingWalletTransfers',
  request: {
    params: z.object({
      account_id: z
        .string()
        .openapi({
          param: {
            description: 'UUID alpaca account ID',
            in: 'path',
            name: 'account_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'transfers',
      content: { 'application/json': { schema: ListTransfersResponseSchema } },
    },
    default: { description: 'error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getV1betaAccountsAccountIdFundingWalletTransfersTransferIdRoute = createRoute({
  method: 'get',
  path: '/v1beta/accounts/{account_id}/funding_wallet/transfers/{transfer_id}',
  tags: ['Funding Wallets'],
  summary: 'Retrieve funding wallet transfer by ID',
  description:
    'Returns a single funding wallet transfer for the specified account by `transfer_id`. Responds with 404 if no matching transfer exists for the account.',
  operationId: 'getFundingWalletTransferByID',
  request: {
    params: z.object({
      account_id: z
        .string()
        .openapi({
          param: {
            description: 'Alpaca account UUID',
            in: 'path',
            name: 'account_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      transfer_id: z
        .string()
        .openapi({
          param: {
            description: 'transfer UUID',
            in: 'path',
            name: 'transfer_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'transfer response if found',
      content: { 'application/json': { schema: FundingWalletTransferSchema } },
    },
    404: { description: 'error response if transfer is not found' },
    default: { description: 'error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const postV1betaAccountsAccountIdFundingWalletWithdrawalRoute = createRoute({
  method: 'post',
  path: '/v1beta/accounts/{account_id}/funding_wallet/withdrawal',
  tags: ['Funding Wallets'],
  summary: 'Create a withdrawal',
  description: 'Creates a withdrawal',
  operationId: 'createFundingWalletWithdrawal',
  request: {
    params: z.object({
      account_id: z
        .string()
        .openapi({
          param: {
            description: 'UUID alpaca account ID',
            in: 'path',
            name: 'account_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateFundingWalletWithdrawalRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Transfer',
      content: { 'application/json': { schema: FundingWalletTransferSchema } },
    },
    default: {
      description: 'Error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV1betaAccountsFundingWalletRoute = createRoute({
  method: 'post',
  path: '/v1beta/accounts/funding_wallet',
  tags: ['Funding Wallets'],
  summary: 'Batch create funding wallets',
  description:
    'Creates funding wallets for a list of accounts in a single request. Every `account_id` in the request must belong to your firm, and the request is rejected if a funding wallet already exists for any of the supplied accounts.',
  operationId: 'batchCreateFundingWallets',
  request: {
    body: {
      content: { 'application/json': { schema: BatchCreateFundingWalletRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Funding wallets',
      content: { 'application/json': { schema: BatchCreateFundingWalletResponseSchema } },
    },
    default: {
      description: 'Error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV1betaDemoBankingFundingRoute = createRoute({
  method: 'post',
  path: '/v1beta/demo/banking/funding',
  tags: ['Funding Wallets'],
  summary: 'Create sandbox deposit transfer',
  description:
    "Simulates an inbound deposit into an account's funding wallet for end-to-end testing of the deposit flow.\n\nThe transfer can only credit accounts that belong to your firm. Available in non-production (sandbox) environments only.",
  operationId: 'demoDepositFunding',
  request: {
    body: {
      content: { 'application/json': { schema: DemoFundingTransferSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Demo deposit funding transfer',
      content: { 'application/json': { schema: DemoFundingTransferSchema } },
    },
    default: {
      description: 'Error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV1beta1AcatsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/acats',
  tags: ['ACATS'],
  summary: 'List transfers',
  description:
    'List all incoming and outgoing transfers, for all accounts. The list may include transfers not initiated using this API. The list is paginated: use the `page_token` query parameter with the value returned in the response to continue listing transfers.',
  operationId: 'listACATSTransfers',
  request: {
    query: z.object({
      account_number: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by the account number associated with the transfer',
            in: 'query',
            name: 'account_number',
            required: false,
            schema: { type: 'string' },
          },
        }),
      transfer_type: AcatsDtccTransferTypeSchema.openapi({
        param: {
          description: 'Filter by the type of the transfer',
          in: 'query',
          name: 'transfer_type',
          required: false,
          schema: { $ref: '#/components/schemas/AcatsDtccTransferType' },
        },
      }).exactOptional(),
      transfer_direction: AcatsTransferDirectionSchema.openapi({
        param: {
          description: 'Filter by the direction of the transfer',
          in: 'query',
          name: 'transfer_direction',
          required: false,
          schema: { $ref: '#/components/schemas/AcatsTransferDirection' },
        },
      }).exactOptional(),
      transfer_status: AcatsTransferStatusSchema.openapi({
        param: {
          description: 'Filter by the current status of the transfer',
          in: 'query',
          name: 'transfer_status',
          required: false,
          schema: { $ref: '#/components/schemas/AcatsTransferStatus' },
        },
      }).exactOptional(),
      dtcc_status: AcatsDtccStatusSchema.openapi({
        param: {
          description: 'Filter by the current DTCC status of the transfer',
          in: 'query',
          name: 'dtcc_status',
          required: false,
          schema: { $ref: '#/components/schemas/AcatsDtccStatus' },
        },
      }).exactOptional(),
      contra_broker_number: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by the contra broker number of the transfer',
            in: 'query',
            name: 'contra_broker_number',
            required: false,
            schema: { type: 'string' },
          },
        }),
      since: AcatsTimestampSchema.openapi({
        param: {
          description:
            'List transfers created at or after this RFC-3339 timestamp (e.g. `2026-01-01T00:00:00Z`).',
          in: 'query',
          name: 'since',
          required: false,
          schema: { $ref: '#/components/schemas/AcatsTimestamp' },
        },
      }).exactOptional(),
      until: AcatsTimestampSchema.openapi({
        param: {
          description:
            'List transfers created strictly before this RFC-3339 timestamp (exclusive -- e.g. `2026-01-01T00:00:00Z` excludes transfers created exactly at that instant).',
          in: 'query',
          name: 'until',
          required: false,
          schema: { $ref: '#/components/schemas/AcatsTimestamp' },
        },
      }).exactOptional(),
      sort_direction: AcatsSortDirectionSchema.openapi({
        param: {
          description:
            'Specify whether transfers should be sorted by creation time in ascending or descending order',
          in: 'query',
          name: 'sort_direction',
          required: false,
          schema: { $ref: '#/components/schemas/AcatsSortDirection' },
        },
      }).exactOptional(),
      sort_by: z
        .enum([
          'account_number',
          'total_transfer_value',
          'created_at',
          'contra_account_number',
          'contra_broker_number',
          'external_transfer_id',
          'settled_at',
          'status',
          'transfer_type',
          'updated_at',
        ])
        .default('created_at')
        .exactOptional()
        .openapi({
          param: {
            description: 'Specify the field to sort by. Defaults to `created_at`.',
            in: 'query',
            name: 'sort_by',
            required: false,
            schema: {
              default: 'created_at',
              enum: [
                'account_number',
                'total_transfer_value',
                'created_at',
                'contra_account_number',
                'contra_broker_number',
                'external_transfer_id',
                'settled_at',
                'status',
                'transfer_type',
                'updated_at',
              ],
              type: 'string',
            },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of transfers to return on one page',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      page_token: AcatsPageTokenSchema.openapi({
        param: {
          description:
            'Page token for the next or previous page, used to continue listing transfers',
          in: 'query',
          name: 'page_token',
          required: false,
          schema: { $ref: '#/components/schemas/AcatsPageToken' },
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AcatsListTransfersResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: AcatsErrorSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: AcatsErrorSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: AcatsErrorSchema } },
    },
  },
})

export const getV1beta1AcatsAccountIdRoute = createRoute({
  method: 'get',
  path: '/v1beta1/acats/{account_id}',
  tags: ['ACATS'],
  summary: 'List transfers for an account',
  description:
    'List all incoming and outgoing transfers where the account was one of the parties. The list may include transfers not initiated using this API. By default, the response includes all transfers for the account for backwards compatibility. To paginate results, provide the `limit` query parameter and use the `page_token` value returned in the response to continue listing transfers.',
  operationId: 'listACATSTransfersByAccount',
  request: {
    params: z.object({
      account_id: z
        .uuid()
        .openapi({
          param: {
            description: 'Account ID associated with the ACATS transfer',
            in: 'path',
            name: 'account_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
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
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of transfers to return on one page',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      page_token: AcatsPageTokenSchema.openapi({
        param: {
          description:
            'Page token for the next or previous page, used to continue listing transfers',
          in: 'query',
          name: 'page_token',
          required: false,
          schema: { $ref: '#/components/schemas/AcatsPageToken' },
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AcatsListTransfersResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: AcatsErrorSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: AcatsErrorSchema } },
    },
  },
})

export const postV1beta1AcatsAccountIdRoute = createRoute({
  method: 'post',
  path: '/v1beta1/acats/{account_id}',
  tags: ['ACATS'],
  summary: 'Initiate an incoming transfer',
  description:
    'This endpoint allows you to create new incoming ACATS requests. We currently support full and partial transfer types, for US equities and cash. Note that after submitting a request, it might take some time for the transfer to show up on the other endpoints. Transfers are not immediately sent to DTCC, and will appear in the `PENDING` state initially.',
  operationId: 'requestACATSTransfer',
  request: {
    params: z.object({
      account_id: z
        .uuid()
        .openapi({
          param: {
            description: 'Account ID associated with the ACATS transfer',
            in: 'path',
            name: 'account_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Details of the incoming ACATS transfer to initiate.',
      content: { 'application/json': { schema: AcatsInitiateTransferRequestSchema } },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Accepted',
      content: { 'application/json': { schema: AcatsInitiateTransferResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: AcatsErrorSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: AcatsErrorSchema } },
    },
    422: {
      description:
        "Unprocessable Entity. Returned when:\n- the cleansed contra account number contains no digit at all;\n- `validate_account_number` is `true` and the contra account number matches none of the contra broker's enabled format rules;\n- the calling correspondent is pending migration, in which case the account is treated as being in distribution.\n",
      content: { 'application/json': { schema: AcatsErrorSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: AcatsErrorSchema } },
    },
  },
})

export const getV1beta1AcatsAccountIdAcatsIdRoute = createRoute({
  method: 'get',
  path: '/v1beta1/acats/{account_id}/{acats_id}',
  tags: ['ACATS'],
  summary: 'Get transfer details',
  description:
    'Includes the same information returned by the list transfers endpoints, but for just one transfer.',
  operationId: 'getACATSTransfer',
  request: {
    params: z.object({
      account_id: z
        .uuid()
        .openapi({
          param: {
            description: 'Account ID associated with the ACATS transfer',
            in: 'path',
            name: 'account_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      acats_id: z
        .uuid()
        .openapi({
          param: {
            description: 'The ID of the ACATS transfer',
            in: 'path',
            name: 'acats_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: AcatsTransferSchema } } },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: AcatsErrorSchema } },
    },
    404: {
      description: 'Not Found. No transfer with this `acats_id` exists for the given `account_id`.',
      content: { 'application/json': { schema: AcatsErrorSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: AcatsErrorSchema } },
    },
  },
})

export const getV1beta1AcatsAccountIdAcatsIdAssetsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/acats/{account_id}/{acats_id}/assets',
  tags: ['ACATS'],
  summary: 'List assets for a transfer',
  description:
    'Assets are only available for partial transfers and for transfers where the deliverer has already responded with the list of assets. The asset list may change as the transfer is updated by the deliverer, all the way up until the transfer settles.',
  operationId: 'listACATSAssets',
  request: {
    params: z.object({
      account_id: z
        .uuid()
        .openapi({
          param: {
            description: 'Account ID associated with the ACATS transfer',
            in: 'path',
            name: 'account_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      acats_id: z
        .uuid()
        .openapi({
          param: {
            description: 'The ID of the ACATS transfer',
            in: 'path',
            name: 'acats_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AcatsListAssetsResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: AcatsErrorSchema } },
    },
    404: {
      description: 'Not Found. No transfer with this `acats_id` exists for the given `account_id`.',
      content: { 'application/json': { schema: AcatsErrorSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: AcatsErrorSchema } },
    },
  },
})

export const getV1beta1AcatsContrabrokersRoute = createRoute({
  method: 'get',
  path: '/v1beta1/acats/contrabrokers',
  tags: ['ACATS'],
  summary: 'List contra brokers',
  description:
    'This information is provided based on the latest ACATS Participant Master File, and contains the DTCC account numbers of valid contra brokers. Only participants that are either brokers or banks are returned. These numbers are the valid values for the `broker_number` property that is required for initiating transfers.',
  operationId: 'listACATSContraBrokers',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: AcatsListContraBrokersResponseSchema,
          example: {
            brokers: [
              { name: 'Example Brokerage Inc.', number: '0001', type: 'BROKER' },
              { name: 'Example Bank, N.A.', number: '0002', type: 'BANK' },
            ],
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: AcatsErrorSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: AcatsErrorSchema } },
    },
  },
})

export const getV1beta1LogosSymbolRoute = createRoute({
  method: 'get',
  path: '/v1beta1/logos/{symbol}',
  tags: ['Logos'],
  summary: 'Get Logo',
  description:
    "Alpaca's Logo API serves uniform logo images for select stock and crypto symbols.\n\nNote: For Logo API pricing details, reach out to sales@alpaca.markets\n\nThe API response will return the raw image as a binary",
  operationId: 'get-v1beta1-logos-symbol',
  request: {
    params: z.object({
      symbol: z
        .string()
        .openapi({
          param: {
            description: 'Stock or crypto symbol (e.g. AAPL, BTCUSD, etc.)',
            in: 'path',
            name: 'symbol',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      placeholder: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'True by default, will return sample placeholder images with the first letter of the asset symbol. If false, 404 will be returned for symbols which do not contain an image.',
            in: 'query',
            name: 'placeholder',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'The API response will return the raw image as a binary' } },
})

export const getV1AccountsRoute = createRoute({
  method: 'get',
  path: '/v1/accounts',
  tags: ['Accounts'],
  summary: 'Get All Accounts',
  description:
    'Retrieves the first 1000 accounts that match the query parameters.\nSorting is based on creation time.\nThe created_after/created_before query parameters can be used to paginate the results.\nTo further limit the size of the response, the entities query parameter can be used to specify which properties are included in the response.\n',
  operationId: 'getAllAccounts',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A space-delimited list of tokens. The response will contain accounts that match with all of the tokens (i.e. a logical AND). A match means the token is present in either the account's associated account number, phone number, name, or e-mail address (logical OR).",
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      created_after: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Inclusive of timestamp. Example: 2019-10-12T07:20:50.52Z',
            in: 'query',
            name: 'created_after',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      created_before: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Inclusive of timestamp. Example: 2019-10-12T07:20:50.52Z',
            in: 'query',
            name: 'created_before',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'See the AccountStatus model for values',
            in: 'query',
            name: 'status',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: SortParamsSchema,
      entities: z
        .enum([
          'agreements',
          'contact',
          'disclosures',
          'documents',
          'identity',
          'trading_configurations',
          'trusted_contact',
        ])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Comma-delimited entity names to include in the response. If not specified, all entities are included.',
            in: 'query',
            name: 'entities',
            schema: {
              enum: [
                'agreements',
                'contact',
                'disclosures',
                'documents',
                'identity',
                'trading_configurations',
                'trusted_contact',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of accounts that match the query parameters.\n',
      content: { 'application/json': { schema: z.array(AccountExtendedSchema) } },
    },
  },
})

export const postV1AccountsRoute = createRoute({
  method: 'post',
  path: '/v1/accounts',
  tags: ['Accounts'],
  summary: 'Create an Account',
  description:
    'Create an account for a new or existing account holder. Required fields, eligibility, and initial status depend on the account type, enabled assets, and your correspondent configuration. Account status changes are available through the Account Status Events stream.\n\nTo create an account for an existing holder, provide `primary_account_holder_id` instead of inline holder information. Among the documented account types, existing holders are supported for trading and IRA accounts. Donor-advised accounts instead reference an existing legal entity with `entity_id`.\n',
  operationId: 'createAccount',
  request: {
    body: {
      content: {
        'application/json': {
          schema: AccountCreationRequestSchema,
          examples: {
            'custodial-account': {
              summary: 'Custodial account with guardian and minor information',
              value: {
                account_type: 'custodial',
                agreements: [
                  {
                    agreement: 'customer_agreement',
                    ip_address: '185.13.21.99',
                    signed_at: '2020-09-11T18:13:44Z',
                  },
                ],
                contact: {
                  city: 'San Mateo',
                  country: 'USA',
                  email_address: 'john.doe@example.com',
                  postal_code: '94401',
                  state: 'CA',
                  street_address: ['123 Main Street'],
                },
                disclosures: {
                  immediate_family_exposed: false,
                  is_affiliated_exchange_or_finra: false,
                  is_control_person: false,
                  is_politically_exposed: false,
                },
                enabled_assets: ['us_equity'],
                identity: {
                  country_of_birth: 'USA',
                  country_of_citizenship: 'USA',
                  country_of_tax_residence: 'USA',
                  date_of_birth: '1990-01-01',
                  family_name: 'Doe',
                  funding_source: ['employment_income'],
                  given_name: 'John',
                  tax_id: '666-55-4321',
                  tax_id_type: 'USA_SSN',
                },
                minor_identity: {
                  country_of_birth: 'USA',
                  country_of_citizenship: 'USA',
                  country_of_tax_residence: 'USA',
                  date_of_birth: '2012-04-05',
                  email: 'jamie.doe@example.com',
                  family_name: 'Doe',
                  given_name: 'Jamie',
                  state: 'CA',
                  tax_id: '666-55-1234',
                  tax_id_type: 'USA_SSN',
                },
              },
            },
            'donor-advised-account': {
              summary: 'Donor-advised account for an existing legal entity',
              value: {
                account_type: 'donor_advised',
                entity_id: '14fbfc51-3704-4c74-8984-8326c4117aee',
              },
            },
            'existing-holder-ira': {
              summary: 'IRA account for an existing holder',
              value: {
                account_sub_type: 'traditional',
                account_type: 'ira',
                agreements: [
                  {
                    agreement: 'customer_agreement',
                    ip_address: '185.13.21.99',
                    signed_at: '2020-09-11T18:13:44Z',
                  },
                ],
                enabled_assets: ['us_equity'],
                primary_account_holder_id: '8b5b7e4c-9f2d-4f4a-9a7b-1b2c3d4e5f60',
              },
            },
            'trading-account': {
              summary: 'Trading account with inline holder information',
              value: {
                agreements: [
                  {
                    agreement: 'customer_agreement',
                    ip_address: '185.13.21.99',
                    signed_at: '2020-09-11T18:13:44Z',
                  },
                ],
                contact: {
                  city: 'San Mateo',
                  country: 'USA',
                  email_address: 'john.doe@example.com',
                  postal_code: '94401',
                  state: 'CA',
                  street_address: ['123 Main Street'],
                },
                disclosures: {
                  immediate_family_exposed: false,
                  is_affiliated_exchange_or_finra: false,
                  is_control_person: false,
                  is_politically_exposed: false,
                },
                enabled_assets: ['us_equity'],
                identity: {
                  country_of_birth: 'USA',
                  country_of_citizenship: 'USA',
                  country_of_tax_residence: 'USA',
                  date_of_birth: '1990-01-01',
                  family_name: 'Doe',
                  funding_source: ['employment_income'],
                  given_name: 'John',
                  tax_id: '666-55-4321',
                  tax_id_type: 'USA_SSN',
                },
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: AccountSchema } } },
    400: {
      description: 'The request body is malformed or cannot be decoded.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            'malformed-request-body': {
              summary: 'Malformed request body',
              value: {
                code: 40010000,
                message:
                  'request body format is invalid: error decoding string \'""\': can\'t convert "" to decimal',
              },
            },
          },
        },
      },
    },
    409: {
      description: 'There is already an existing account registered with the same email address.',
    },
    422: {
      description:
        'The request is well-formed but fails account-creation validation. This can include conflicting inline and referenced holder data, an unsupported account-type and holder combination, or an ineligible referenced party.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            'conflicting-holder-data': {
              summary: 'Conflicting inline and referenced holder data',
              value: {
                code: 40010001,
                message:
                  'cannot specify primary_account_holder_id together with identity or contact or disclosures or minor_identity',
              },
            },
          },
        },
      },
    },
  },
})

export const getV1AccountsAccountIdRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/{account_id}',
  tags: ['Accounts'],
  summary: 'Get An Account by ID',
  description:
    "You can query a specific account that you submitted to Alpaca by passing into the query the account_id associated with the account you're retrieving.\n",
  operationId: 'getAccount',
  request: { params: z.object({ account_id: AccountIDParamsSchema }) },
  responses: {
    200: {
      description:
        'Will return an AccountExtended if an account with account_id exists, otherwise will throw an error.',
      content: { 'application/json': { schema: AccountExtendedSchema } },
    },
  },
})

export const patchV1AccountsAccountIdRoute = createRoute({
  method: 'patch',
  path: '/v1/accounts/{account_id}',
  tags: ['Accounts'],
  summary: 'Update an Account',
  description:
    'This operation updates account information.\n\nIf all parameters are valid and updates have been made, it returns with status code 200. The response is the account model.',
  operationId: 'patchAccount',
  request: {
    params: z.object({ account_id: AccountIDParamsSchema }),
    body: {
      content: { 'application/json': { schema: AccountUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'If all parameters are valid and updates have been made, it returns with status code 200. The response is the account model.',
      content: { 'application/json': { schema: AccountExtendedSchema } },
    },
    400: {
      description: 'The post body is not well formed.',
      content: { 'application/json': { schema: z.string() } },
    },
    403: {
      description:
        'The requested update is forbidden. This includes attempting to change the immutable `primary_account_holder_id`.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: {
            code: 40310000,
            message:
              'cannot change primary account holder to: d4dbe130-839d-4e0a-8d2f-312a2011729c',
          },
        },
      },
    },
    422: {
      description:
        'The request body contains an attribute that is not permitted to be updated or you are attempting to set an invalid value.',
      content: { 'application/json': { schema: z.string() } },
    },
  },
})

export const getV1AccountsAccountIdAchRelationshipsRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/{account_id}/ach_relationships',
  tags: ['Funding'],
  summary: 'Retrieve ACH Relationships for an account',
  description: 'Returns a list of ACH Relationships for an account',
  operationId: 'getAccountACHRelationships',
  request: {
    params: z.object({ account_id: AccountIDParamsSchema }),
    query: z.object({
      statuses: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma-separated status values',
            in: 'query',
            name: 'statuses',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(ACHRelationshipSchema) } },
    },
  },
})

export const postV1AccountsAccountIdAchRelationshipsRoute = createRoute({
  method: 'post',
  path: '/v1/accounts/{account_id}/ach_relationships',
  tags: ['Funding'],
  summary: 'Create an ACH Relationship',
  description:
    'Create a new ACHRelationship for an account\n\nIf successful, will return 200 code with a newly created ACH Relationship entity.',
  operationId: 'createACHRelationshipForAccount',
  request: {
    params: z.object({ account_id: AccountIDParamsSchema }),
    body: {
      description: 'Create ACH Relationship ',
      content: { 'application/json': { schema: CreateACHRelationshipRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'returns the newly created ACH Relationship entity.',
      content: { 'application/json': { schema: ACHRelationshipSchema } },
    },
    400: BadRequestResponse,
    401: NotAuthorizedResponse,
    409: {
      description: 'The account already has an active relationship.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteV1AccountsAccountIdAchRelationshipsAchRelationshipIdRoute = createRoute({
  method: 'delete',
  path: '/v1/accounts/{account_id}/ach_relationships/{ach_relationship_id}',
  tags: ['Funding'],
  summary: 'Delete an existing ACH relationship',
  description: 'Delete an existing ACH relationship for an account',
  operationId: 'deleteACHRelationshipFromAccount',
  request: {
    params: z.object({
      account_id: AccountIDParamsSchema,
      ach_relationship_id: z
        .uuid()
        .openapi({
          param: {
            description: 'ACH relationship identifier',
            in: 'path',
            name: 'ach_relationship_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success (No Content)' },
    400: { description: 'the passed in account_id or relationship_id were invalid' },
    404: { description: 'Relationship Not Found' },
  },
})

export const postV1AccountsAccountIdActionsCloseRoute = createRoute({
  method: 'post',
  path: '/v1/accounts/{account_id}/actions/close',
  tags: ['Accounts'],
  summary: 'Close an Account',
  description:
    'This operation closes an active account. The underlying records and information of the account are not deleted by this operation.\n\n**Before closing an account, you are responsible for closing all the positions and withdrawing all the money associated with that account. Learn more in the Positions Documentation.**',
  operationId: 'post-v1-accounts-account_id-actions-close',
  request: {
    params: z.object({
      account_id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the account to be closed',
            in: 'path',
            name: 'account_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' }, 404: { description: 'Account Not Found' } },
})

export const getV1AccountsAccountIdCipRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/{account_id}/cip',
  tags: ['KYC'],
  summary: 'Retrieve CIP information',
  description: "You can retrieve the CIP information you've submitted for a given account.",
  operationId: 'get-v1-accounts-account_id-cip',
  request: {
    params: z.object({
      account_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'account_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: CIPInfoSchema } } },
  },
})

export const postV1AccountsAccountIdCipRoute = createRoute({
  method: 'post',
  path: '/v1/accounts/{account_id}/cip',
  tags: ['KYC'],
  summary: 'Upload CIP information',
  description:
    'The customer identification program (CIP) API allows you to submit the CIP results received from your KYC provider.\n\nThe minimum requirements to open an individual financial account are delimited and you must verify the true identity of the account holder at account opening:\n\nName\nDate of birth\nAddress\nIdentification number (for a U.S. citizen, a taxpayer identification number)',
  operationId: 'post-v1-accounts-account_id-cip',
  request: {
    params: z.object({
      account_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'account_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: CIPInfoSchema } } },
  },
  responses: { 200: { description: 'OK' } },
})

export const getV1AccountsAccountIdDocumentsRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/{account_id}/documents',
  tags: ['Documents'],
  summary: 'Retrieve a List of Account Documents',
  description:
    "This endpoint allows you to query all the account document based on an account ID. You can filter by date, or type of document.\n\nThese account documents are tax statements, trade confirmations, etc, generated by the Alpaca system. They are distinct from the owner documents you upload and later access via the account object's documents property.",
  operationId: 'getDocsForAccount',
  request: {
    params: z.object({ account_id: AccountIDParamsSchema }),
    query: z.object({
      start: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'optional date value to filter the list (inclusive).',
            in: 'query',
            name: 'start',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      end: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'optional date value to filter the list (inclusive).',
            in: 'query',
            name: 'end',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      type: AccountDocumentTypeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(AccountDocumentSchema), examples: {} } },
    },
    404: { description: 'Not found', content: { 'application/json': { schema: z.string() } } },
  },
})

export const getV1AccountsAccountIdDocumentsDocumentIdDownloadRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/{account_id}/documents/{document_id}/download',
  tags: ['Documents'],
  summary: 'Download an Account Document',
  description:
    "This endpoint downloads an account document based on the document ID. The document will be in PDF format.\n\nThe operation returns a pre-signed downloadable link as a redirect with HTTP status code 301 if one is found.\n\nYou can retrieve a JSON version of a monthly statement by passing in the header accept: application/json header.\n\nThese account documents are tax statements, trade confirmations, etc, generated by the Alpaca system. They are distinct from the owner documents you upload and later access via the account object's documents property.\n",
  operationId: 'downloadDocFromAccount',
  request: {
    params: z.object({ account_id: AccountIDParamsSchema, document_id: DocumentIDParamsSchema }),
  },
  responses: {
    301: {
      description: 'Redirect to the pre-signed download link for the account document PDF file.\n',
    },
    404: { description: 'The document is not found.' },
  },
  security: [{ BasicAuth: [] }],
})

export const postV1AccountsAccountIdDocumentsUploadRoute = createRoute({
  method: 'post',
  path: '/v1/accounts/{account_id}/documents/upload',
  tags: ['Documents'],
  summary: 'Upload Owner Documents for an Existing Account',
  description:
    'Upload documents for the primary account owner of an account.\n\nDocuments are binary objects whose contents are encoded in base64. Each encoded content size is limited to 10MB if you use Alpaca for KYCaaS. If you perform your own KYC there are no document size limitations.\n\nAs a convenience, documents of type w8ben may be uploaded as a JSON object using the content_data request property. The Alpaca system will then generate a formatted W-8 BEN document for subsequent downloads.\n\nNote that these owner documents are distinct from the account documents generated by Alpaca, such as tax statements and trade confirmations.',
  operationId: 'uploadDocToAccount',
  request: {
    params: z.object({ account_id: AccountIDParamsSchema }),
    body: {
      content: { 'application/json': { schema: z.array(OwnerDocumentUploadRequestSchema) } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success (No Content)' },
    400: {
      description: 'Bad Request. The body in the request is not valid.',
      content: { 'application/json': { schema: z.string() } },
    },
    404: {
      description: 'Not Found. No account was found for this account_id',
      content: { 'application/json': { schema: z.string() } },
    },
  },
})

export const getV1AccountsAccountIdDocumentsW8benDocumentIdDownloadRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/{account_id}/documents/w8ben/{document_id}/download',
  tags: ['Documents'],
  summary: 'Download the W8BEN document for the primary owner of an account',
  description:
    'This endpoint allows you to download a W-8 BEN document for the primary owner of an account based on the document_id passed as a path parameter. The returned document is in PDF format.\n\nFor certain individuals, a W-8 BEN form should be submitted at onboarding. If the individual is not a registered U.S. taxpayer (not subject to a W-9), the W-8 BEN form may need to be submitted. The IRS explains which individuals this applies to and provides instructions on completing the form. Every three years, in addition to the calendar year it was signed, a new W-8 BEN form must be submitted.\n\nThe form can be submitted in JSON, JSONC, PNG, JPEG or PDF. If submitting it in JSON, please see the W-8 BEN completed with the corresponding field names for the API here.\n\nNote: The dates collected on the form are in a slightly different format than how they need to be submitted via Accounts API. It is requested by the user on the form in MM-DD-YYYY, but should be submitted as YYYY-MM-DD.',
  operationId: 'get-v1-accounts-account_id-documents-w8ben-document_id-download',
  request: {
    params: z.object({
      account_id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the related account',
            in: 'path',
            name: 'account_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      document_id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the W8BEN to download',
            in: 'path',
            name: 'document_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    301: { description: 'Redirects to a presigned download link for the document PDF.' },
    404: { description: 'Document Not Found' },
  },
})

export const patchV1AccountsAccountIdOnfidoSdkRoute = createRoute({
  method: 'patch',
  path: '/v1/accounts/{account_id}/onfido/sdk',
  tags: ['KYC'],
  summary: 'Update the Onfido SDK Outcome',
  description:
    'This request allows you to send Alpaca the result of the Onfido SDK flow in your app. A notification of a successful outcome is required for Alpaca to continue the KYC process.',
  operationId: 'patch-v1-accounts-account_id-onfido-sdk',
  request: {
    params: z.object({
      account_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'account_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              outcome: OnfidoSDKOutcomeSchema,
              reason: z
                .string()
                .exactOptional()
                .openapi({ description: 'Any additional information related to the outcome' }),
              token: z
                .string()
                .openapi({
                  description:
                    'The SDK token associated with the SDK flow you are updating the outcome for',
                }),
            })
            .openapi({ required: ['outcome', 'token'] }),
          examples: {
            'Example 1': {
              value: {
                outcome: 'USER_EXITED',
                reason: 'User denied consent',
                token: 'header.payload.signature',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: { description: 'OK' },
    404: { description: 'Account Not Found' },
    422: { description: 'Invalid input value for outcome.' },
  },
})

export const getV1AccountsAccountIdOnfidoSdkTokensRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/{account_id}/onfido/sdk/tokens',
  tags: ['KYC'],
  summary: 'Retrieve an Onfido SDK Token',
  description:
    'Get an SDK token to activate the Onfido SDK flow within your app. You will have to keep track of the SDK token so you can pass it back when you upload the SDK outcome. We recommend storing the token in memory rather than persistent storage to reduce any unnecessary overhead in your app.',
  operationId: 'get-v1-accounts-account_id-onfido-sdk-tokens',
  request: {
    params: z.object({
      account_id: z
        .uuid()
        .openapi({
          param: {
            description: 'The account ID',
            in: 'path',
            name: 'account_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      referrer: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The referrer URL of your web app or the application ID of your mobile app. If not passed in, will default to the * wildcard',
            in: 'query',
            name: 'referrer',
            schema: { type: 'string' },
            required: false,
          },
        }),
      platform: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required if referrer provided. Enum values are either mobile or web',
            in: 'query',
            name: 'platform',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ token: z.string().exactOptional() }).openapi({ required: [] }),
          examples: { 'Example 1': { value: { token: 'header.payload.signature' } } },
        },
      },
    },
    422: {
      description:
        "Onfido applicant not yet created for account. If you haven't already contacted Alpaca to enable Onfido, please do so.",
    },
  },
})

export const postV1AccountsAccountIdOptionsApprovalRoute = createRoute({
  method: 'post',
  path: '/v1/accounts/{account_id}/options/approval',
  tags: ['Accounts'],
  summary: 'Request options trading for an account (BETA)',
  description:
    "This endpoint requests options trading for an account.\nFollowing submission, an assigned administrator will review the request.\nUpon approval, the account's options_approved_level parameter will be modified, granting the account the ability to participate in options trading.\nNote: This endpoint is only available for partners who have been enabled for Options BETA.",
  operationId: 'requestOptionsForAccount',
  request: {
    params: z.object({ account_id: AccountIDParamsSchema }),
    body: {
      content: { 'application/json': { schema: OptionsApprovalRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The request was submitted successfully.',
      content: { 'application/json': { schema: OptionsApprovalResponseSchema } },
    },
    400: {
      description: 'The request body is invalid.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: {
      description:
        'Client does not exist, you do not have access to the client, or "client_secret" is incorrect.\n',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: 'The request body did not pass all validations.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV1AccountsAccountIdRecipientBanksRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/{account_id}/recipient_banks',
  tags: ['Funding', 'Accounts'],
  summary: 'Retrieve Bank Relationships for an Account',
  description: 'Retrieves Bank Relationships for an account',
  operationId: 'getRecipientBanks',
  request: {
    params: z.object({ account_id: AccountIDParamsSchema }),
    query: z.object({
      status: z
        .enum(['ACTIVE', 'INACTIVE'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'status',
            schema: { enum: ['ACTIVE', 'INACTIVE'], example: 'ACTIVE', type: 'string' },
            required: false,
          },
          example: 'ACTIVE',
        }),
      bank_name: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'bank_name', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'An array of Bank relationships attached to this Account.\n\nAn empty array will be returned if no Bank relationships have been attached to this account',
      content: { 'application/json': { schema: z.array(BankSchema) } },
    },
    400: { description: 'Bad request. The body in the request is not valid.' },
  },
})

export const postV1AccountsAccountIdRecipientBanksRoute = createRoute({
  method: 'post',
  path: '/v1/accounts/{account_id}/recipient_banks',
  tags: ['Funding', 'Accounts'],
  summary: 'Create a Bank Relationship for an Account',
  description: 'If successful, retrieves Bank Relationships for an account',
  operationId: 'createRecipientBank',
  request: {
    params: z.object({ account_id: AccountIDParamsSchema }),
    body: { content: { 'application/json': { schema: CreateBankRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'The created Bank relationship',
      content: { 'application/json': { schema: BankSchema } },
    },
    400: { description: 'Bad Request' },
    409: { description: 'A Bank relationship already exists for this account' },
  },
})

export const deleteV1AccountsAccountIdRecipientBanksBankIdRoute = createRoute({
  method: 'delete',
  path: '/v1/accounts/{account_id}/recipient_banks/{bank_id}',
  tags: ['Funding'],
  summary: 'Delete a Bank Relationship for an Account',
  description: 'If successful, deletes Bank Relationship for an account',
  operationId: 'deleteRecipientBank',
  request: {
    params: z.object({
      account_id: AccountIDParamsSchema,
      bank_id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'bank_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success (No Content)' },
    400: { description: 'Bad Request' },
    404: {
      description:
        'No Bank Relationship with the id specified by bank_id was found for this Account',
    },
  },
})

export const postV1AccountsAccountIdTokenizationCallbackMintRoute = createRoute({
  method: 'post',
  path: '/v1/accounts/{account_id}/tokenization/callback/mint',
  tags: ['Tokenization'],
  summary: 'Confirm Tokenized Asset Minted',
  description:
    'This endpoint is used by the issuer to confirm the minting of tokenized assets previously requested by the Authorized Participant.',
  operationId: 'postTokenizationCallbackMint',
  request: {
    params: z.object({ account_id: AccountIDParamsSchema }),
    body: {
      content: { 'application/json': { schema: TokenizationMintCallbackSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully confirmed minting of a tokenized asset.',
      content: { 'application/json': { schema: TokenizationRequestSchema } },
    },
    400: {
      description: 'Bad request (e.g. failed to decode request body).',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 40010000, message: 'failed to decode request body' },
        },
      },
    },
    401: {
      description: 'Authentication credentials are missing or invalid.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 40110000, message: 'unauthorized' },
        },
      },
    },
    403: {
      description: 'Caller is not authorized to perform this operation.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 40310000, message: 'forbidden' },
        },
      },
    },
    422: {
      description: 'One or more request parameters are missing or invalid.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: {
            code: 42210001,
            message: 'tokenization_request_id is required, tx_hash is required',
          },
        },
      },
    },
  },
})

export const postV1AccountsAccountIdTokenizationCallbackRedeemRoute = createRoute({
  method: 'post',
  path: '/v1/accounts/{account_id}/tokenization/callback/redeem',
  tags: ['Tokenization'],
  summary: 'Redeem a Tokenized Asset',
  description:
    "This endpoint is used by the tokenized asset issuer to confirm the redemption of tokens previously held in the Authorized Participant's wallet. When the issuer invokes this endpoint, Alpaca will  initiate a journal of the underlying asset into the Authorized Participant's account.\n\n**Idempotency**: When the `Idempotency-Key` header is supplied, this endpoint is\nidempotent. Multiple requests with the same key and identical request body will\ncreate only one redeem request. A subsequent request returns the previously created\nrequest with the same response (no duplicate is created). If the same key is used\nwith a different request body, the API returns `422 Unprocessable Entity`.\n\n**Recommended for production**: Always supply `Idempotency-Key` when requesting a\nredemption. This allows safe retries on timeouts, network errors, or 5xx responses\nwithout risking duplicate requests. Use a client-generated unique value (e.g. UUID).",
  operationId: 'postTokenizationRedeem',
  request: {
    params: z.object({ account_id: AccountIDParamsSchema }),
    headers: z.object({ 'Idempotency-Key': LegacyIdempotencyKeyParamsSchema }),
    body: {
      content: { 'application/json': { schema: TokenizationRedeemRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully requested redemption of a tokenized asset.',
      content: { 'application/json': { schema: TokenizationRedeemResponseSchema } },
    },
    400: {
      description:
        'Bad request (e.g. malformed input, insufficient quantity, or account not authorized to redeem). Also returned when the `Idempotency-Key` header is malformed, or when replaying a request that was originally rejected.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 40010000, message: 'failed to decode request body' },
        },
      },
    },
    401: {
      description: 'Authentication credentials are missing or invalid.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 40110000, message: 'unauthorized' },
        },
      },
    },
    403: {
      description: 'Caller is not authorized to perform this operation.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 40310000, message: 'forbidden' },
        },
      },
    },
    422: {
      description:
        'One or more request parameters are missing or invalid, or the same `Idempotency-Key` was reused with a different request body.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: {
            code: 42210001,
            message: 'issuer_request_id is required, tx_hash is required',
          },
        },
      },
    },
  },
})

export const postV1AccountsAccountIdTokenizationMintRoute = createRoute({
  method: 'post',
  path: '/v1/accounts/{account_id}/tokenization/mint',
  tags: ['Tokenization'],
  summary: 'Mint a Tokenized Asset',
  description:
    "This endpoint is used by an Authorized Participant to request the minting of a tokenized asset. Alpaca will initiate a journal of the underlying asset from the Authorized Participant's account to the issuer's account.\n\n**Idempotency**: When the `Idempotency-Key` header is supplied, this endpoint is\nidempotent. Multiple requests with the same key and identical request body will\ncreate only one mint request. A subsequent request returns the previously created\nrequest with the same response (no duplicate is created). If the same key is used\nwith a different request body, the API returns `422 Unprocessable Entity`.\n\n**Recommended for production**: Always supply `Idempotency-Key` when requesting a\nmint. This allows safe retries on timeouts, network errors, or 5xx responses\nwithout risking duplicate requests. Use a client-generated unique value (e.g. UUID).",
  operationId: 'postTokenizationMintBroker',
  request: {
    params: z.object({ account_id: AccountIDParamsSchema }),
    headers: z.object({ 'Idempotency-Key': LegacyIdempotencyKeyParamsSchema }),
    body: {
      content: { 'application/json': { schema: TokenizationMintRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully requested minting of a tokenized asset.',
      content: { 'application/json': { schema: TokenizationMintResponseSchema } },
    },
    400: {
      description:
        'Bad request (e.g. malformed input, insufficient position, or account not authorized to mint). Also returned when the `Idempotency-Key` header is malformed, or when replaying a request that was originally rejected.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 40010000, message: 'failed to decode request body' },
        },
      },
    },
    401: {
      description: 'Authentication credentials are missing or invalid.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 40110000, message: 'unauthorized' },
        },
      },
    },
    403: {
      description: 'Caller is not authorized to perform this operation.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 40310000, message: 'forbidden' },
        },
      },
    },
    422: {
      description:
        'One or more request parameters are missing or invalid, or the same `Idempotency-Key` was reused with a different request body.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 42210001, message: 'issuer is required, network is required' },
        },
      },
    },
  },
})

export const getV1AccountsAccountIdTokenizationRequestsRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/{account_id}/tokenization/requests',
  tags: ['Tokenization'],
  summary: 'List Tokenization Requests',
  description:
    'Retrieve tokenization requests for the account. This endpoint may be used by the tokenized asset issuer or by an Authorized Participant (AP). The list can contain both mint and redeem requests.',
  operationId: 'getTokenizationRequestsBroker',
  request: {
    params: z.object({ account_id: AccountIDParamsSchema }),
    query: z.object({
      type: z
        .enum(['mint', 'redeem'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Tokenization request type to be queried',
            in: 'query',
            name: 'type',
            schema: { enum: ['mint', 'redeem'], type: 'string' },
            required: false,
          },
        }),
      status: z
        .enum(['pending', 'rejected', 'completed'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Tokenization request status to be queried',
            in: 'query',
            name: 'status',
            schema: { enum: ['pending', 'rejected', 'completed'], type: 'string' },
            required: false,
          },
        }),
      underlying_symbol: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Underlying symbol of the tokenization requests to be queried',
            in: 'query',
            name: 'underlying_symbol',
            schema: { type: 'string' },
            required: false,
          },
        }),
      issuer: TokenizationIssuerSchema.openapi({
        param: {
          description: 'Issuer of the tokenization requests to be queried',
          in: 'query',
          name: 'issuer',
          schema: { $ref: '#/components/schemas/TokenizationIssuer' },
          required: false,
        },
      }).exactOptional(),
      network: TokenizationNetworkSchema.openapi({
        param: {
          description: 'Network of the tokenization requests to be queried',
          in: 'query',
          name: 'network',
          schema: { $ref: '#/components/schemas/TokenizationNetwork' },
          required: false,
        },
      }).exactOptional(),
      after: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'The response will include only requests created after this timestamp (exclusive)',
            in: 'query',
            name: 'after',
            schema: { example: '2025-09-30T18:38:01.942282Z', format: 'date-time', type: 'string' },
            required: false,
          },
          example: '2025-09-30T18:38:01.942282Z',
        }),
      before: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'The response will include only requests created before this timestamp (exclusive)',
            in: 'query',
            name: 'before',
            schema: { example: '2025-09-30T18:38:01.942282Z', format: 'date-time', type: 'string' },
            required: false,
          },
          example: '2025-09-30T18:38:01.942282Z',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response\n\nA list of tokenization requests',
      content: { 'application/json': { schema: z.array(TokenizationRequestSchema) } },
    },
    401: {
      description: 'Authentication credentials are missing or invalid.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 40110000, message: 'unauthorized' },
        },
      },
    },
    403: {
      description: 'Caller is not authorized to perform this operation.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 40310000, message: 'forbidden' },
        },
      },
    },
    422: {
      description: 'One or more request parameters are missing or invalid.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 42210001, message: 'failed to parse after' },
        },
      },
    },
  },
})

export const getV1AccountsAccountIdTokenizationRequestsTokenizationRequestIdRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/{account_id}/tokenization/requests/{tokenization_request_id}',
  tags: ['Tokenization'],
  summary: 'Get Tokenization Request by ID',
  description:
    'Retrieve a single tokenization request by its `tokenization_request_id`. This endpoint may be used by the tokenized asset issuer or by an Authorized Participant (AP), and returns either a mint or a redeem request.',
  operationId: 'getTokenizationRequestByIDBroker',
  request: {
    params: z.object({
      account_id: AccountIDParamsSchema,
      tokenization_request_id: z
        .uuid()
        .openapi({
          param: {
            description:
              'Unique identifier of the tokenization request, as returned by the mint endpoint or the list-requests endpoint.',
            in: 'path',
            name: 'tokenization_request_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: TokenizationRequestSchema,
          example: {
            created_at: '2025-11-04T18:38:01.942282Z',
            fees: '0.5',
            issuer: 'xstocks',
            network: 'solana',
            qty: '1.0',
            status: 'completed',
            token_symbol: 'TSLAx',
            tokenization_request_id: '5b1d6a3e-7f0a-4d2c-b8e1-9e6f1c0d2c4a',
            transfer_status: 'completed',
            tx_hash: '5J7ZxK4QwR3vH2pY1aB6sN8cM9tD0fA2eXyVwUjL3kPqR4mZcF7nB1tA8sH6dG2pE',
            type: 'mint',
            underlying_symbol: 'TSLA',
            updated_at: '2025-11-04T18:38:42.117004Z',
            wallet_address: '5dXY1aH2tQpV3wXmJg6Z7c8B4nKvF9bA1pQrSt2uVwYxXz',
          },
        },
      },
    },
    401: {
      description: 'Authentication credentials are missing or invalid.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 40110000, message: 'unauthorized' },
        },
      },
    },
    403: {
      description: 'Caller is not authorized to perform this operation.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 40310000, message: 'forbidden' },
        },
      },
    },
    404: {
      description:
        'No tokenization request with the supplied `tokenization_request_id` exists for this account.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 40410000, message: 'tokenization request not found' },
        },
      },
    },
    422: {
      description: 'The `tokenization_request_id` path parameter is not a valid UUID.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 42210001, message: 'tokenization_request_id is not a valid UUID' },
        },
      },
    },
  },
})

export const getV1AccountsAccountIdTokenizationRequestsByClientRequestIdRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/{account_id}/tokenization/requests:by_client_request_id',
  tags: ['Tokenization'],
  summary: 'Get Tokenization Request by `client_request_id`',
  description:
    "Retrieve a single tokenization request by the Authorized Participant's `client_request_id`, the AP-supplied label originally passed on the mint request. Available to Authorized Participants and to issuers that are affiliated with the AP. Returns the matching mint request. If the AP has reused a `client_request_id` across multiple requests, the most recently created request is returned.",
  operationId: 'getTokenizationRequestByClientRequestIDBroker',
  request: {
    params: z.object({ account_id: AccountIDParamsSchema }),
    query: z.object({
      client_request_id: z
        .string()
        .openapi({
          param: {
            description:
              'AP-supplied request identifier originally passed on the mint request, echoed back on the tokenization-request response.',
            in: 'query',
            name: 'client_request_id',
            required: true,
            schema: { example: 'ap-request-2025-11-04-001', type: 'string' },
          },
          example: 'ap-request-2025-11-04-001',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: TokenizationRequestSchema,
          example: {
            created_at: '2025-11-04T18:38:01.942282Z',
            fees: '0.5',
            issuer: 'xstocks',
            network: 'solana',
            qty: '1.0',
            status: 'completed',
            token_symbol: 'TSLAx',
            tokenization_request_id: '5b1d6a3e-7f0a-4d2c-b8e1-9e6f1c0d2c4a',
            transfer_status: 'completed',
            tx_hash: '5J7ZxK4QwR3vH2pY1aB6sN8cM9tD0fA2eXyVwUjL3kPqR4mZcF7nB1tA8sH6dG2pE',
            type: 'mint',
            underlying_symbol: 'TSLA',
            updated_at: '2025-11-04T18:38:42.117004Z',
            wallet_address: '5dXY1aH2tQpV3wXmJg6Z7c8B4nKvF9bA1pQrSt2uVwYxXz',
          },
        },
      },
    },
    401: {
      description: 'Authentication credentials are missing or invalid.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 40110000, message: 'unauthorized' },
        },
      },
    },
    403: {
      description: 'Caller is not authorized to perform this operation.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 40310000, message: 'forbidden' },
        },
      },
    },
    404: {
      description:
        'No tokenization request with the supplied `client_request_id` exists for this account.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 40410000, message: 'tokenization request not found' },
        },
      },
    },
    422: {
      description: 'The `client_request_id` query parameter is missing.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 42210001, message: 'client_request_id query parameter is required' },
        },
      },
    },
  },
})

export const getV1AccountsAccountIdTokenizationRequestsByIssuerRequestIdRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/{account_id}/tokenization/requests:by_issuer_request_id',
  tags: ['Tokenization'],
  summary: 'Get Tokenization Request by `issuer_request_id`',
  description:
    'Retrieve a single tokenization request by the `issuer_request_id`. Returns either a mint or a redeem request. Can be called by issuers only.',
  operationId: 'getTokenizationRequestByIssuerRequestIDBroker',
  request: {
    params: z.object({ account_id: AccountIDParamsSchema }),
    query: z.object({
      issuer_request_id: z
        .string()
        .openapi({
          param: {
            description:
              'Issuer-assigned request identifier returned to the AP on the original mint or redeem response and visible to the issuer on rows it owns.',
            in: 'query',
            name: 'issuer_request_id',
            required: true,
            schema: { example: 'ABCDEF123', type: 'string' },
          },
          example: 'ABCDEF123',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: TokenizationRequestSchema,
          example: {
            created_at: '2025-11-04T18:38:01.942282Z',
            fees: '0.5',
            issuer: 'xstocks',
            issuer_request_id: 'issuer-req-12345',
            network: 'solana',
            qty: '1.0',
            status: 'completed',
            token_symbol: 'TSLAx',
            tokenization_request_id: '5b1d6a3e-7f0a-4d2c-b8e1-9e6f1c0d2c4a',
            transfer_status: 'completed',
            tx_hash: '5J7ZxK4QwR3vH2pY1aB6sN8cM9tD0fA2eXyVwUjL3kPqR4mZcF7nB1tA8sH6dG2pE',
            type: 'mint',
            underlying_symbol: 'TSLA',
            updated_at: '2025-11-04T18:38:42.117004Z',
            wallet_address: '5dXY1aH2tQpV3wXmJg6Z7c8B4nKvF9bA1pQrSt2uVwYxXz',
          },
        },
      },
    },
    401: {
      description: 'Authentication credentials are missing or invalid.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 40110000, message: 'unauthorized' },
        },
      },
    },
    403: {
      description: 'Caller is not authorized to perform this operation.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 40310000, message: 'forbidden' },
        },
      },
    },
    404: {
      description:
        'No tokenization request with the supplied `issuer_request_id` exists for this account, or the caller is not the tokenized asset issuer.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 40410000, message: 'tokenization request not found' },
        },
      },
    },
    422: {
      description: 'The `issuer_request_id` query parameter is missing.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 42210001, message: 'issuer_request_id query parameter is required' },
        },
      },
    },
  },
})

export const getV1AccountsAccountIdTransfersRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/{account_id}/transfers',
  tags: ['Funding'],
  summary: 'Retrieve List of Transfers for an Account.',
  description:
    'You can query a list of transfers for an account.\n\n\nYou can filter requested transfers by values such as direction and status.\n\nReturns a list of transfer entities ordered by created_at\n',
  operationId: 'getTransfersForAccount',
  request: {
    params: z.object({ account_id: AccountIDParamsSchema }),
    query: z.object({
      direction: z
        .enum(['INCOMING', 'OUTGOING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'INCOMING or OUTGOING',
            in: 'query',
            name: 'direction',
            schema: { enum: ['INCOMING', 'OUTGOING'], type: 'string' },
            required: false,
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success.',
      content: {
        'application/json': {
          schema: z.array(TransferSchema),
          examples: {
            'example-1': {
              value: [
                {
                  account_id: '449e7a5c-69d3-4b8a-aaaf-5c9b713ebc65',
                  additional_information: 'string',
                  amount: 'string',
                  bank_id: 'f1ae96de-94c1-468e-93a3-6b7213930ca8',
                  created_at: '2019-08-24T14:15:22Z',
                  direction: 'INCOMING',
                  expires_at: '2019-08-24T14:15:22Z',
                  id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
                  ira: {
                    distribution_reason: 'normal',
                    fed_withholding_amount: '102.5',
                    fed_withholding_pct: '10.25',
                    state_withholding_amount: '97.5',
                    state_withholding_pct: '9.75',
                    tax_year: '2024',
                  },
                  reason: 'string',
                  relationship_id: '81412018-ffa2-43f9-a3eb-d39f1c5e0f87',
                  status: 'QUEUED',
                  type: 'ach',
                  updated_at: '2019-08-24T14:15:22Z',
                },
              ],
            },
            'example-2': {
              value: [
                {
                  account_id: '449e7a5c-69d3-4b8a-aaaf-5c9b713ebc65',
                  additional_information: 'string',
                  amount: 'string',
                  bank_id: 'f1ae96de-94c1-468e-93a3-6b7213930ca8',
                  created_at: '2019-08-24T14:15:22Z',
                  direction: 'INCOMING',
                  expires_at: '2019-08-24T14:15:22Z',
                  id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
                  ira: {
                    distribution_reason: 'normal',
                    fed_withholding_amount: '102.5',
                    fed_withholding_pct: '10.25',
                    state_withholding_amount: '97.5',
                    state_withholding_pct: '9.75',
                    tax_year: '2024',
                  },
                  reason: 'string',
                  relationship_id: '81412018-ffa2-43f9-a3eb-d39f1c5e0f87',
                  status: 'QUEUED',
                  type: 'ach',
                  updated_at: '2019-08-24T14:15:22Z',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const postV1AccountsAccountIdTransfersRoute = createRoute({
  method: 'post',
  path: '/v1/accounts/{account_id}/transfers',
  tags: ['Funding', 'Accounts'],
  summary: 'Request a New Transfer',
  description:
    'Create a new transfer to deposit money into or withdraw money from an account.\n\nTwo `transfer_type` values are accepted, and both are available in sandbox and production:\n\n- **`ach`** — supports both `INCOMING` (deposit) and `OUTGOING` (withdrawal) directions. A `relationship_id` from a previously created [ACH Relationship](https://docs.alpaca.markets/reference/createachrelationshipforaccount) is required.\n- **`wire`** — supports the `OUTGOING` (withdrawal) direction only. Incoming wires cannot be initiated through this endpoint; they are pushed in by the sending bank and recorded automatically. A `bank_id` from a previously created [Bank Relationship](https://docs.alpaca.markets/reference/createrecipientbank) is required, and the bank must be in `APPROVED` status before the transfer will progress past `QUEUED`.\n\nIn the sandbox environment, ACH deposits and withdrawals settle instantly against virtual funds. Outgoing wire withdrawals are accepted and simulated end-to-end — no funds are transmitted to a bank, but the transfer progresses to `COMPLETE` and the account is debited against virtual funds. Sandbox wire withdrawals are asynchronous (not instant) and auto-complete on weekdays only; transfers submitted on a weekend will not progress until Monday. For more on funding accounts in sandbox, see [this tutorial](https://alpaca.markets/learn/fund-broker-api/).',
  operationId: 'createTransferForAccount',
  request: {
    params: z.object({
      account_id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'account_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateTransferRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully requested a transfer.',
      content: { 'application/json': { schema: TransferSchema } },
    },
    400: {
      description: 'The request body is malformed (e.g. invalid JSON).',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    403: {
      description:
        "The account is not permitted to perform this transfer. Examples include:\n\n- `deposits are not permitted for this account` — the account's `depositable_status` is not `allowed` / `limited`.\n- `withdrawals are not permitted for this account` — the account's `withdrawable_status` is not `allowed` / `limited`.\n",
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description:
        'The request was rejected by validation. Common reasons include:\n\n- `cannot submit incoming wire transfer using this API` — sent `transfer_type: wire` with `direction: INCOMING`. Incoming wires cannot be initiated through this endpoint.\n- `invalid relationship_id` / `bank_id required for wire transfer` — missing the required relationship/bank identifier for the chosen `transfer_type`.\n- `bank_id should be empty for ach transfer` / `relationship_id should be empty for wire transfer` — provided the wrong identifier for the chosen `transfer_type`.\n- `only wire transfer type can provide additional information for the transfer` — `additional_information` was supplied on a non-wire request.\n- `amount must be greater than 0.00` / `deposit amount must be greater than or equal to <min>` / `withdrawal amount must be greater than <min>` — amount fails the minimum-amount checks.\n- `transfer_type must be either ach or wire` / `direction must be either incoming or outgoing` — invalid enum values.\n',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            wireIncomingRejected: {
              summary: 'Wire transfer with direction = INCOMING',
              value: {
                code: 40010001,
                message: 'cannot submit incoming wire transfer using this API',
              },
            },
          },
        },
      },
    },
  },
})

export const deleteV1AccountsAccountIdTransfersTransferIdRoute = createRoute({
  method: 'delete',
  path: '/v1/accounts/{account_id}/transfers/{transfer_id}',
  tags: ['Funding'],
  summary: 'Request to Close a Transfer',
  description: 'Request to close a transfer',
  operationId: 'deleteTransfer',
  request: {
    params: z.object({
      account_id: AccountIDParamsSchema,
      transfer_id: z
        .uuid()
        .openapi({
          param: {
            description: 'Transfer identifier',
            in: 'path',
            name: 'transfer_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 404: { description: 'Transfer Not Found' } },
})

export const getV1AccountsAccountIdWalletsRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/{account_id}/wallets',
  tags: ['Crypto Funding'],
  summary: 'Retrieve Crypto Funding Wallets',
  description:
    'Lists wallets for the account given in the path parameter. If an asset is specified and no wallet for the account and asset pair exists one will be created. If no asset is specified only existing wallets will be listed for the account. An account may have at most one wallet per asset.',
  operationId: 'listCryptoFundingWallets',
  request: {
    params: z.object({ account_id: AccountIDParamsSchema }),
    query: z.object({
      asset: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'asset', schema: { type: 'string' }, required: false },
        }),
      chain: z
        .enum(['SOL', 'ETH', 'BTC', 'XRP', 'ARB'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional chain identifier. Use to request wallets for a specific chain when asset is a multi-chain crypto asset. If not specified, network is considered.',
            in: 'query',
            name: 'chain',
            schema: { enum: ['SOL', 'ETH', 'BTC', 'XRP', 'ARB'], type: 'string' },
            required: false,
          },
        }),
      network: z
        .enum(['ethereum', 'solana'])
        .exactOptional()
        .openapi({
          param: {
            description:
              "Deprecated. Use chain instead. Optional network identifier which is used to request wallets for a specific network when asset is a multi-chain crypto asset. When both 'chain' and 'network' are specified, 'chain' will take precedence and 'network' will be ignored. If 'chain' and 'network' are not specified, the default 'network' (ethereum) will be used.",
            in: 'query',
            name: 'network',
            schema: { deprecated: true, enum: ['ethereum', 'solana'], type: 'string' },
            required: false,
          },
          deprecated: true,
        }),
    }),
  },
  responses: {
    200: {
      description:
        'A single wallet object if an asset is specified or an array of wallet objects if no asset is specified',
      content: { 'application/json': { schema: CryptoWalletSchema } },
    },
    default: { description: 'error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getV1AccountsAccountIdWalletsTransfersRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/{account_id}/wallets/transfers',
  tags: ['Crypto Funding'],
  summary: 'Retrieve Crypto Funding Transfers',
  description:
    'Returns an array of all transfers associated with the given account across all wallets.',
  operationId: 'listCryptoFundingTransfers',
  request: { params: z.object({ account_id: AccountIDParamsSchema }) },
  responses: {
    200: {
      description: 'An array of transfer objects',
      content: { 'application/json': { schema: CryptoTransferSchema } },
    },
    default: { description: 'error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const postV1AccountsAccountIdWalletsTransfersRoute = createRoute({
  method: 'post',
  path: '/v1/accounts/{account_id}/wallets/transfers',
  tags: ['Crypto Funding'],
  summary: 'Request a New Withdrawal',
  description:
    'Creates a withdrawal request. Note that outgoing withdrawals must be sent to a whitelisted address and you must whitelist addresses at least 24 hours in advance. If you attempt to withdraw funds to a non-whitelisted address then the transfer will be rejected.',
  operationId: 'createCryptoTransferForAccount',
  request: {
    params: z.object({ account_id: AccountIDParamsSchema }),
    body: {
      content: { 'application/json': { schema: CreateCryptoTransferRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully requested a transfer.',
      content: { 'application/json': { schema: CryptoTransferSchema } },
    },
    400: {
      description: 'The request or travel rule information is invalid.',
      content: {
        'application/json': {
          schema: TravelRuleErrorResponseSchema,
          examples: {
            TravelRuleValidationError: TravelRuleValidationErrorExample,
            WalletError: { value: { message: 'asset cannot be empty' } },
          },
        },
      },
    },
  },
})

export const getV1AccountsAccountIdWalletsTransfersTransferIdRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/{account_id}/wallets/transfers/{transfer_id}',
  tags: ['Crypto Funding'],
  summary: 'Retrieve a Crypto Funding Transfer',
  description: 'Returns a specific wallet transfer by passing into the query the transfer_id.',
  operationId: 'getCryptoFundingTransfer',
  request: {
    params: z.object({
      account_id: AccountIDParamsSchema,
      transfer_id: z
        .string()
        .openapi({
          param: {
            description: 'The crypto transfer to retrieve',
            in: 'path',
            name: 'transfer_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single crypto transfer object',
      content: { 'application/json': { schema: CryptoTransferSchema } },
    },
  },
})

export const getV1AccountsAccountIdWalletsWhitelistsRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/{account_id}/wallets/whitelists',
  tags: ['Crypto Funding'],
  summary: 'An array of whitelisted addresses',
  description: 'Returns the list of whitelisted withdrawal addresses for the specified account.',
  operationId: 'listWhitelistedAddress',
  request: { params: z.object({ account_id: AccountIDParamsSchema }) },
  responses: {
    200: {
      description: 'An array of whitelisted objects',
      content: { 'application/json': { schema: WhitelistedAddressSchema } },
    },
    default: { description: 'error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const postV1AccountsAccountIdWalletsWhitelistsRoute = createRoute({
  method: 'post',
  path: '/v1/accounts/{account_id}/wallets/whitelists',
  tags: ['Crypto Funding'],
  summary: 'Request a new whitelisted address',
  description:
    'Submits a new whitelisted withdrawal address for the specified account. The chain is derived from the supplied asset symbol and address, and the same address cannot be whitelisted twice on the same chain.\n\nWhere travel rule reporting applies to the account, supply travel rule information for the destination wallet. Use the `Search VASPs` endpoint to find the VASP DID for the destination exchange. For a self-hosted wallet, set `beneficiary_is_self_hosted` to true. If the exchange is not in the directory, provide its information in `beneficiary_manual_entry`.\n\nNote that whitelisted addresses must wait at least 24 hours before they can be used as a withdrawal destination.',
  operationId: 'createWhitelistedAddress',
  request: {
    params: z.object({ account_id: AccountIDParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              address: z
                .string()
                .exactOptional()
                .openapi({ description: 'The address to be whitelisted' }),
              asset: z
                .string()
                .exactOptional()
                .openapi({ description: 'Symbol of underlying asset for the whitelisted address' }),
              chain: z
                .enum(['SOL', 'ETH', 'BTC', 'XRP', 'ARB'])
                .exactOptional()
                .openapi({
                  description:
                    'Optional chain identifier. Use when the underlying asset for the whitelisted address is a multi-chain crypto asset.',
                }),
              travel_rule_info: TravelRuleInfoSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully requested a whitelisted address',
      content: { 'application/json': { schema: WhitelistedAddressSchema } },
    },
    400: {
      description: 'The request or travel rule information is invalid.',
      content: {
        'application/json': {
          schema: TravelRuleErrorResponseSchema,
          examples: {
            TravelRuleValidationError: TravelRuleValidationErrorExample,
            WalletError: { value: { message: 'asset cannot be empty' } },
          },
        },
      },
    },
  },
})

export const deleteV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdRoute = createRoute({
  method: 'delete',
  path: '/v1/accounts/{account_id}/wallets/whitelists/{whitelisted_address_id}',
  tags: ['Crypto Funding'],
  summary: 'Delete a whitelisted address',
  description:
    'Deletes a whitelisted withdrawal address from the specified account by ID. Subsequent withdrawals targeting the deleted address will be rejected.',
  operationId: 'deleteWhitelistedAddress',
  request: {
    params: z.object({
      account_id: AccountIDParamsSchema,
      whitelisted_address_id: z
        .string()
        .openapi({
          param: {
            description: 'The whitelisted address to delete',
            in: 'path',
            name: 'whitelisted_address_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successfully deleted a whitelisted address' } },
})

export const patchV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdTravelRuleInfoRoute =
  createRoute({
    method: 'patch',
    path: '/v1/accounts/{account_id}/wallets/whitelists/{whitelisted_address_id}/travel-rule-info',
    tags: ['Crypto Funding'],
    summary: 'Update travel rule information for a whitelisted wallet',
    description:
      "You are required to supply travel rule information for the crypto wallets you're withdrawing to.\n\nIt is preferred that you use the `Search VASPs` endpoint to find the VASP DID for the exchange you are withdrawing to,\notherwise, if it's a self-hosted wallet, please set `beneficiary_is_self_hosted` to true.\n\nIf the exchange cannot be found in our directory, please supply the information manually using the `beneficiary_manual_entry` object.",
    operationId: 'updateWhitelistedAddressTravelRuleInfo',
    request: {
      params: z.object({
        account_id: AccountIDParamsSchema,
        whitelisted_address_id: z
          .uuid()
          .openapi({
            param: {
              description: 'The whitelisted address update travel rule information for',
              in: 'path',
              name: 'whitelisted_address_id',
              required: true,
              schema: { format: 'uuid', type: 'string' },
            },
          }),
      }),
      body: {
        description: 'Travel rule information to associate with the whitelisted address.',
        content: {
          'application/json': { schema: UpdateWhitelistedAddressTravelRuleInfoRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: { description: 'Successfully updated travel rule information' },
      400: {
        description: 'The request or travel rule information is invalid.',
        content: {
          'application/json': {
            schema: TravelRuleErrorResponseSchema,
            examples: {
              TravelRuleValidationError: TravelRuleValidationErrorExample,
              WalletError: { value: { message: 'travel_rule_info is missing' } },
            },
          },
        },
      },
    },
  })

export const getV1AccountsActivitiesRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/activities',
  tags: ['Accounts'],
  summary: 'Retrieve Account Activities',
  description:
    'Returns a list of activities\n\nNotes:\n* Pagination is handled using the `page_token` and `page_size` parameters.\n* `page_token` represents the ID of the last item on your current page of results.\n   For example, if the ID of the last activity in your first response is `20220203000000000::045b3b8d-c566-4bef-b741-2bf598dd6ae7`, you would pass that value as `page_token` to retrieve the next page of results.\n\n* If specified with a `direction` of `desc`, for example, the results will end before the activity with the specified ID.\n* If specified with a `direction` of `asc`, results will begin with the activity immediately after the one specified.\n* `page_size` is the maximum number of entries to return in the response.\n* If `date` is not specified, the default and maximum value is 100.\n* If `date` is specified, the default behavior is to return all results, and there is no maximum page size.',
  operationId: 'getAccountActivities',
  request: {
    query: z.object({
      account_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'id of a single account to filter by',
            in: 'query',
            name: 'account_id',
            schema: { format: 'uuid', type: 'string' },
            required: false,
          },
        }),
      activity_types: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(ActivityTypeSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma-separated list of activity types used to filter the results.',
            explode: false,
            in: 'query',
            name: 'activity_types',
            schema: { items: { $ref: '#/components/schemas/ActivityType' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      category: z
        .enum(['trade_activity', 'non_trade_activity'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The activity category. Cannot be used with "activity_types" parameter.',
            in: 'query',
            name: 'category',
            schema: { enum: ['trade_activity', 'non_trade_activity'], type: 'string' },
            required: false,
          },
        }),
      order_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter activities associated with a specific order. Useful for retrieving the fills that make up a completely filled order.',
            in: 'query',
            name: 'order_id',
            schema: {
              example: 'fe060a1b-5b45-4eba-ba46-c3a3345d8255',
              format: 'uuid',
              type: 'string',
            },
            required: false,
          },
          example: 'fe060a1b-5b45-4eba-ba46-c3a3345d8255',
        }),
      date: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              "Filter activities by their creation date (created_at), not the activity's settlement date. For non-trade activities such as fees, the creation date is typically the day after the trade date (in UTC). Both formats YYYY-MM-DD and YYYY-MM-DDTHH:MM:SSZ are supported.",
            in: 'query',
            name: 'date',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      until: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Get activities created before this date. Both formats YYYY-MM-DD and YYYY-MM-DDTHH:MM:SSZ are supported.',
            in: 'query',
            name: 'until',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      after: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Get activities created after this date. Both formats YYYY-MM-DD and YYYY-MM-DDTHH:MM:SSZ are supported.',
            in: 'query',
            name: 'after',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      direction: DirectionParamsSchema,
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of entries to return in the response.',
            in: 'query',
            name: 'page_size',
            schema: { default: 100, maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      page_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Token used for pagination. Provide the ID of the last activity from the last page to retrieve the next set of results.',
            in: 'query',
            name: 'page_token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(ActivitySchema) } },
    },
  },
})

export const getV1AccountsActivitiesActivityTypeRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/activities/{activity_type}',
  tags: ['Accounts'],
  summary: 'Retrieve Account Activities of Specific Type',
  description:
    "Retrieves an array of Activity by type.\n\nIf {activity_type} is provided as part of the URL, category cannot be provided as query parameter. They are mutually exclusive.\n\nNotes:\n* Pagination is handled using the `page_token` and `page_size` parameters.\n* `page_token` represents the ID of the end of your current page of results.\n  for example if in your first response the id of the last Activity item returned in the array was `20220203000000000::045b3b8d-c566-4bef-b741-2bf598dd6ae7`, you'd pass that value as `page_token` to get the next page of results\n\n* If specified with a `direction` of `desc`, for example, the results will end before the activity with the specified ID.\n* If specified with a `direction` of `asc`, results will begin with the activity immediately after the one specified.\n* `page_size` is the maximum number of entries to return in the response.\n* If `date` is not specified, the default and maximum value is 100.\n* If `date` is specified, the default behavior is to return all results, and there is no maximum page size.",
  operationId: 'getAccountActivitiesByType',
  request: {
    params: z.object({ activity_type: ActivityTypeParamsSchema }),
    query: z.object({
      account_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'id of a single account to filter by',
            in: 'query',
            name: 'account_id',
            schema: { format: 'uuid', type: 'string' },
            required: false,
          },
        }),
      order_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter activities associated with a specific order. Useful for retrieving the fills that make up a completely filled order.',
            in: 'query',
            name: 'order_id',
            schema: {
              example: 'fe060a1b-5b45-4eba-ba46-c3a3345d8255',
              format: 'uuid',
              type: 'string',
            },
            required: false,
          },
          example: 'fe060a1b-5b45-4eba-ba46-c3a3345d8255',
        }),
      date: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              "Filter activities by their creation date (created_at), not the activity's settlement date. For non-trade activities such as fees, the creation date is typically the day after the trade date (in UTC). Both formats YYYY-MM-DD and YYYY-MM-DDTHH:MM:SSZ are supported.",
            in: 'query',
            name: 'date',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      until: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Get activities created before this date. Both formats YYYY-MM-DD and YYYY-MM-DDTHH:MM:SSZ are supported.',
            in: 'query',
            name: 'until',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      after: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Get activities created after this date. Both formats YYYY-MM-DD and YYYY-MM-DDTHH:MM:SSZ are supported.',
            in: 'query',
            name: 'after',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      direction: DirectionParamsSchema,
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of entries to return in the response.',
            in: 'query',
            name: 'page_size',
            schema: { default: 100, maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      page_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Token used for pagination. Provide the ID of the last activity from the last page to retrieve the next set of results.',
            in: 'query',
            name: 'page_token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(ActivitySchema) } },
    },
  },
})

export const getV1AccountsIraExcessContributionsRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/ira_excess_contributions',
  tags: ['IRA'],
  summary: 'Retrieve Excess Contributions',
  description: 'Returns all overcontributed IRA accounts',
  operationId: 'listIRAExcessContributions',
  responses: {
    200: {
      description: 'list of overcontributed IRA accounts',
      content: { 'application/json': { schema: z.array(OvercontributedIRAAccountSchema) } },
    },
    default: { description: 'error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getV1AccountsOptionsApprovalsRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/options/approvals',
  tags: ['Accounts'],
  summary: 'Retrieve options level approval requests (BETA)',
  description:
    'This endpoint retrieves options trading level approval requests. Query parameters can be specified to filter the results. If multiple query parameters are specified, the results will be filtered to include only those that match all of the specified parameters. Each query parameter can only be specified once.',
  operationId: 'requestListOptionsApprovals',
  request: {
    query: z.object({
      account_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'Only return results for the specified account.',
            in: 'query',
            name: 'account_id',
            schema: {
              example: 'c8f1ef5d-edc0-4f23-9ee4-378f19cb92a4',
              format: 'uuid',
              type: 'string',
            },
            required: false,
          },
          example: 'c8f1ef5d-edc0-4f23-9ee4-378f19cb92a4',
        }),
      requested_level: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'requested_level',
            schema: {
              description:
                'Only return requests with the specified requested level.\n0=Disabled, 1=Covered Call/Cash-Secured Put, 2=Long Call/Put, 3=Spreads/Straddles.\n',
              enum: [0, 1, 2, 3],
              example: 3,
              type: 'integer',
            },
            required: false,
          },
          description:
            'Only return requests with the specified requested level.\n0=Disabled, 1=Covered Call/Cash-Secured Put, 2=Long Call/Put, 3=Spreads/Straddles.\n',
          example: 3,
        }),
      approved_level: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'approved_level',
            schema: {
              description:
                'Only return requests with the specified approved level.\n0=Disabled, 1=Covered Call/Cash-Secured Put, 2=Long Call/Put, 3=Spreads/Straddles.\n',
              enum: [0, 1, 2, 3],
              example: 3,
              type: 'integer',
            },
            required: false,
          },
          description:
            'Only return requests with the specified approved level.\n0=Disabled, 1=Covered Call/Cash-Secured Put, 2=Long Call/Put, 3=Spreads/Straddles.\n',
          example: 3,
        }),
      status: OptionsApprovalStatusSchema.openapi({
        param: {
          description: 'Only return requests with the specified approval request status.',
          in: 'query',
          name: 'status',
          schema: { $ref: '#/components/schemas/OptionsApprovalStatus' },
          required: false,
        },
      }).exactOptional(),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .default(1000)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of results to return. The default (and maximum value) is 1000.',
            in: 'query',
            name: 'page_size',
            schema: { default: 1000, maximum: 1000, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      page_token: PageTokenParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request was submitted successfully.',
      content: { 'application/json': { schema: OptionsApprovalsListSchema } },
    },
    400: {
      description: 'The request body is invalid.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: {
      description:
        'Client does not exist, you do not have access to the client, or "client_secret" is incorrect.\n',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    403: {
      description:
        'The correspondent entity does not have access to options approvals or the account does not exist.\n',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV1AccountsPositionsRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/positions',
  tags: ['Trading'],
  summary: 'Bulk Fetch All Accounts Positions',
  description:
    "Retrieves a list of the account's open positions.\nThis endpoint is deprecated and will be removed in the future. Please use the [GET /v1/reporting/eod/positions endpoint](https://docs.alpaca.markets/reference/get-v1-reporting-eod-positions) instead.\n",
  operationId: 'get-v1-accounts-positions',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of the page of the results to be fetched.',
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        "The response contains two fields:\n\nasof: the timestamp for which the positions are returned. It is always the last market close\n\npositions: an account-id to position list map, contains the requested page's accounts\nThe positions map is empty for the last page.\n\nNote: when fetching bulk positions, which can take multiple minutes depending on the number of accounts managed have, a market close can happen, and after that a new set of results might be returned. To make sure results are consistent, please always check that the as_of field didn't change during the whole fetching process.",
      content: {
        'application/json': {
          schema: z
            .object({
              as_of: z.iso.datetime({ offset: true }).exactOptional(),
              positions: z.object({}).exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                as_of: '2022-08-04T16:00:00-04:00',
                positions: {
                  '000c8a47-7487-430b-94e1-e628a71cd123': [
                    {
                      asset_class: 'us_equity',
                      asset_id: 'b0b6dd9d-8b9b-48a9-ba46-b9d54906e415',
                      asset_marginable: true,
                      avg_entry_price: '172.34',
                      change_today: '0',
                      cost_basis: '13.63999992516',
                      current_price: '166.13',
                      exchange: 'NASDAQ',
                      lastday_price: '166.13',
                      market_value: '13.14850404762',
                      qty: '0.079145874',
                      qty_available: '0.079145874',
                      side: 'long',
                      symbol: 'AAPL',
                      unrealized_intraday_pl: '0',
                      unrealized_intraday_plpc: '0',
                      unrealized_pl: '-0.49149587754',
                      unrealized_plpc: '-0.0360334223047464',
                    },
                  ],
                },
              },
            },
          },
        },
      },
    },
  },
  deprecated: true,
})

export const postV1AgreementsRoute = createRoute({
  method: 'post',
  path: '/v1/agreements',
  tags: ['Agreements'],
  summary: 'Create a Signed Agreement',
  description:
    'Create a signed agreement for a party.\n\nUse this endpoint to record party-level agreements after party creation (for example\n`certifications_and_resolutions_statement` when it was not included on `POST /v1/parties`),\nor to record per-account agreements that require an `account_id`.\nParty-level agreements cannot be added via `PATCH /v1/parties/{id}` — use this endpoint instead.\n\nSee [Business Trading Accounts — Party-Level Agreements](https://docs.alpaca.markets/us/docs/business-trading-accounts#party-level-agreements)\nfor the party-first onboarding flow.\n',
  operationId: 'createAgreement',
  request: {
    body: {
      content: {
        'application/json': {
          schema: CreateAgreementRequestSchema,
          examples: {
            perAccountLegalEntity: {
              summary: 'Per-account agreement for a legal entity',
              value: {
                account_id: 'd7e8f9a0-b1c2-3d4e-5f67-890123456789',
                agreement: 'options_agreement',
                ip_address: '10.0.0.50',
                party_id: '550e8400-e29b-41d4-a716-446655440000',
                signed_at: '2024-08-18T14:05:00Z',
                signer_party_id: '550e8400-e29b-41d4-a716-446655440003',
              },
            },
            perAccountNaturalPerson: {
              summary: 'Per-account agreement for a natural person',
              value: {
                account_id: 'd7e8f9a0-b1c2-3d4e-5f67-890123456789',
                agreement: 'customer_agreement',
                ip_address: '192.168.1.100',
                party_id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
                signed_at: '2024-01-15T11:00:00Z',
              },
            },
            perPartyLegalEntity: {
              summary: 'Certifications and resolutions for a legal entity',
              value: {
                agreement: 'certifications_and_resolutions_statement',
                ip_address: '10.0.0.50',
                party_id: 'e4d3c2b1-a098-7654-3210-fedcba987654',
                signed_at: '2024-08-18T14:00:00Z',
                signer_party_id: 'b5c7e1a2-3d4f-4e5a-8b6c-9d0e1f2a3b4c',
              },
            },
            perPartyNaturalPerson: {
              summary: 'Per-party agreement for a natural person',
              value: {
                agreement: 'margin_agreement',
                ip_address: '192.168.1.100',
                party_id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
                revision: '19.2024.01',
                signed_at: '2024-01-15T10:30:00Z',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Agreement created successfully',
      content: {
        'application/json': {
          schema: SignedAgreementSchema,
          examples: {
            perAccountNaturalPerson: {
              summary: 'Per-account agreement created',
              value: {
                account_id: 'd7e8f9a0-b1c2-3d4e-5f67-890123456789',
                agreement: 'customer_agreement',
                ip_address: '192.168.1.100',
                party_id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
                revision: '19.2024.01',
                signed_at: '2024-01-15T11:00:00Z',
              },
            },
            perPartyLegalEntity: {
              summary: 'Certifications and resolutions created',
              value: {
                agreement: 'certifications_and_resolutions_statement',
                ip_address: '10.0.0.50',
                party_id: 'e4d3c2b1-a098-7654-3210-fedcba987654',
                revision: '01.2024.02',
                signed_at: '2024-08-18T14:00:00Z',
                signer_party_id: 'b5c7e1a2-3d4f-4e5a-8b6c-9d0e1f2a3b4c',
              },
            },
          },
        },
      },
    },
    400: {
      description:
        'Invalid request. Common causes include an unknown party_id (party_not_found),\nmissing required fields (including `party_id`), an invalid agreement type for\nthe party, a missing `account_id` for a per-account agreement, or an invalid\n`signer_party_id` for a legal entity.\n',
      content: {
        'application/json': {
          schema: PartyErrorResponseSchema,
          examples: {
            invalidRequest: {
              summary: 'Validation failed',
              value: {
                error: 'invalid_request',
                error_description: 'Validation failed',
                fields: [{ name: 'signer_party_id' }],
              },
            },
            partyNotFound: {
              summary: 'Party not found',
              value: { error: 'party_not_found', error_description: 'Party not found' },
            },
          },
        },
      },
    },
    403: {
      description: 'The party does not belong to the authenticated correspondent.',
      content: {
        'application/json': {
          schema: PartyErrorResponseSchema,
          examples: {
            forbidden: {
              summary: 'Party belongs to another correspondent',
              value: { error: 'forbidden', error_description: 'Access to party is forbidden' },
            },
          },
        },
      },
    },
  },
})

export const getV1AssetsRoute = createRoute({
  method: 'get',
  path: '/v1/assets',
  tags: ['Assets'],
  summary: 'Retrieve All Assets',
  description: 'Returns all assets',
  operationId: 'getAssets',
  request: {
    query: z.object({
      status: z
        .enum(['active', 'inactive', 'all'])
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'Asset status to filter by, will default to `all`',
            in: 'query',
            name: 'status',
            schema: {
              default: 'all',
              enum: ['active', 'inactive', 'all'],
              example: 'all',
              type: 'string',
            },
            required: false,
          },
          example: 'all',
        }),
      asset_class: z
        .enum(['us_equity', 'crypto'])
        .default('us_equity')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Asset class to filter by, `us_equity` or `crypto`. Defaults to `us_equity`',
            in: 'query',
            name: 'asset_class',
            schema: {
              default: 'us_equity',
              enum: ['us_equity', 'crypto'],
              example: 'us_equity',
              type: 'string',
            },
            required: false,
          },
          example: 'us_equity',
        }),
      attributes: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(
            z.enum([
              'ptp_no_exception',
              'ptp_with_exception',
              'ipo',
              'has_options',
              'options_late_close',
              'fractional_eh_enabled',
              'overnight_tradable',
              'overnight_halted',
            ]),
          ),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            description:
              "Comma separated values to query for more than one attribute. Assets which have any of the given attributes will be included.\n\nSupported values:\n- `ptp_no_exception`: Asset is a Publicly Traded Partnership (PTP) without a qualified notice; non-U.S. customers may incur 10% withholding on gross proceeds as per IRS guidance, and are blocked from being purchased by default.\n- `ptp_with_exception`: Users can open positions in these PTPs without general restrictions.\n- `ipo`: Accepting limit orders only before the stock begins trading on the secondary market.\n- `has_options`: The underlying equity has listed options available on the platform. Note: if the equity had inactive/expired contracts in the past, this will still show up.\n- `options_late_close`: Indicates the underlying asset's options contracts close at 4:15pm ET instead of the standard 4:00pm ET.\n- `fractional_eh_enabled`: Indicates the asset accepts fractional orders during extended hours sessions (pre-market, post-market, and overnight if enabled).\n- `overnight_tradable`: Asset is eligible for overnight (24x5) trading in supported venues on the platform.\n- `overnight_halted`: Asset is eligible for overnight trading but is currently halted/blocked for overnight sessions due to risk, corporate action, compliance, or venue constraints.",
            explode: false,
            in: 'query',
            name: 'attributes',
            schema: {
              default: [],
              example: ['ptp_no_exception', 'ipo'],
              items: {
                enum: [
                  'ptp_no_exception',
                  'ptp_with_exception',
                  'ipo',
                  'has_options',
                  'options_late_close',
                  'fractional_eh_enabled',
                  'overnight_tradable',
                  'overnight_halted',
                ],
                type: 'string',
              },
              type: 'array',
            },
            required: false,
          },
          example: ['ptp_no_exception', 'ipo'],
        }),
    }),
  },
  responses: {
    200: {
      description: 'An array of asset objects.',
      content: { 'application/json': { schema: z.array(AssetSchema) } },
    },
  },
})

export const getV1AssetsSymbolOrAssetIdRoute = createRoute({
  method: 'get',
  path: '/v1/assets/{symbol_or_asset_id}',
  tags: ['Assets'],
  summary: 'Retrieve an Asset by ID',
  description: 'Returns the requested asset, if found',
  operationId: 'getAssetBySymbolOrId',
  request: {
    params: z.object({
      symbol_or_asset_id: z
        .string()
        .openapi({
          param: {
            description: "you can use either the asset's Id or the symbol to search",
            in: 'path',
            name: 'symbol_or_asset_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Returns asset', content: { 'application/json': { schema: AssetSchema } } },
    404: { description: 'Asset not found' },
  },
})

export const getV1AssetsEntryRequirementsRoute = createRoute({
  method: 'get',
  path: '/v1/assets/entry-requirements',
  tags: ['Assets'],
  summary: 'Retrieve Entry Requirements for requested assets',
  description: 'Returns all entry-requirements',
  operationId: 'get-asset-entry-requirements',
  request: {
    query: z.object({
      symbols: z
        .string()
        .openapi({
          param: {
            description:
              'Comma-separated symbols or asset ids. The symbols (or asset ids) for which asset entry requirements are to be requested. Maximum number of symbols allowed is 500.',
            example: 'AAPL,SPY',
            in: 'query',
            name: 'symbols',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An array of asset entry requirement objects.',
      content: { 'application/json': { schema: z.array(AssetEntryRequirementsSchema) } },
    },
  },
})

export const getV1AssetsFixedIncomeUsCorporatesRoute = createRoute({
  method: 'get',
  path: '/v1/assets/fixed_income/us_corporates',
  tags: ['Assets'],
  summary: 'Get US corporates',
  description:
    'Serves the list of US corporates available at Alpaca. The response is sorted by ISIN.',
  operationId: 'UsCorporates',
  request: {
    query: z.object({
      bond_status: BondStatusSchema.openapi({
        param: {
          in: 'query',
          name: 'bond_status',
          schema: { $ref: '#/components/schemas/bond_status' },
          required: false,
        },
      }).exactOptional(),
      isins: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma-separated list of ISINs with a limit of 1000.',
            example: 'US912810UG12,US912797PM34',
            in: 'query',
            name: 'isins',
            schema: { type: 'string' },
            required: false,
          },
        }),
      cusips: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma-separated list of CUSIPs with a limit of 1000.',
            example: '912810UG1,912797PM3',
            in: 'query',
            name: 'cusips',
            schema: { type: 'string' },
            required: false,
          },
        }),
      tickers: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma-separated list of tickers with a limit of 1000.',
            example: 'BAC,MSFT',
            in: 'query',
            name: 'tickers',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UsCorporatesRespSchema } },
      headers: z.object({
        'X-RateLimit-Limit': RatelimitLimitHeaderSchema,
        'X-RateLimit-Remaining': RatelimitRemainingHeaderSchema,
        'X-RateLimit-Reset': RatelimitResetHeaderSchema,
      }),
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    429: _429Response,
    500: _500Response,
  },
})

export const getV1AssetsFixedIncomeUsTreasuriesRoute = createRoute({
  method: 'get',
  path: '/v1/assets/fixed_income/us_treasuries',
  tags: ['Assets'],
  summary: 'Get US treasuries',
  description:
    'Serves the list of US treasuries available at Alpaca. The response is sorted by ISIN.',
  operationId: 'UsTreasuries',
  request: {
    query: z.object({
      subtype: TreasurySubtypeSchema.openapi({
        param: {
          in: 'query',
          name: 'subtype',
          schema: { $ref: '#/components/schemas/treasury_subtype' },
          required: false,
        },
      }).exactOptional(),
      bond_status: BondStatusSchema.openapi({
        param: {
          in: 'query',
          name: 'bond_status',
          schema: { $ref: '#/components/schemas/bond_status' },
          required: false,
        },
      }).exactOptional(),
      cusips: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma-separated list of CUSIPs with a limit of 1000.',
            example: '912810UG1,912797PM3',
            in: 'query',
            name: 'cusips',
            schema: { type: 'string' },
            required: false,
          },
        }),
      isins: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma-separated list of ISINs with a limit of 1000.',
            example: 'US912810UG12,US912797PM34',
            in: 'query',
            name: 'isins',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UsTreasuriesRespSchema } },
      headers: z.object({
        'X-RateLimit-Limit': RatelimitLimitHeaderSchema,
        'X-RateLimit-Remaining': RatelimitRemainingHeaderSchema,
        'X-RateLimit-Reset': RatelimitResetHeaderSchema,
      }),
    },
    400: _400Response,
    403: _403Response,
    429: _429Response,
    500: _500Response,
  },
})

export const getV1CalendarRoute = createRoute({
  method: 'get',
  path: '/v1/calendar',
  tags: ['Calendar'],
  summary: 'Get US Market Calendar',
  description:
    'The calendar API serves the full list of market days from 1970 to 2029. It can also be queried by specifying a start and/or end time to narrow down the results. In addition to the dates, the response also contains the specific open and close times for the market days, taking into account early closures.\n',
  operationId: 'LegacyCalendar',
  request: {
    query: z.object({
      start: LegacyStartParamsSchema,
      end: LegacyEndParamsSchema,
      date_type: LegacyDateTypeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: LegacyPublicCalendarRespSchema } },
      headers: z.object({
        'X-RateLimit-Limit': RatelimitLimitHeaderSchema,
        'X-RateLimit-Remaining': RatelimitRemainingHeaderSchema,
        'X-RateLimit-Reset': RatelimitResetHeaderSchema,
      }),
    },
    400: _400Response,
    429: _429Response,
    500: _500Response,
  },
})

export const getV1CashInterestAprTiersRoute = createRoute({
  method: 'get',
  path: '/v1/cash_interest/apr_tiers',
  tags: ['Cash Interest'],
  summary: 'List APR Tiers',
  description:
    'List all available APR tiers. These tiers may be assigned to an account, and will be used to determine the interest rate paid on uninvested cash balances.',
  operationId: 'get-v1-list-apr-tiers',
  responses: {
    200: {
      description:
        'Successful response, returns a list of APR tiers or none if no tiers are available.',
      content: { 'application/json': { schema: ListAPRTiersResponseSchema } },
    },
    401: {
      description: 'Unauthorized. Please check your API key and try again.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    429: {
      description: 'Too many requests. Please wait a moment and try again.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'A server error occurred. Please contact Alpaca.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV1ClockRoute = createRoute({
  method: 'get',
  path: '/v1/clock',
  tags: ['Calendar'],
  summary: 'Get US Market Clock',
  description:
    'The clock API serves the current market timestamp, whether or not the market is currently open, as well as the times of the next market open and close.\n',
  operationId: 'LegacyClock',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: LegacyClockSchema } },
      headers: z.object({
        'X-RateLimit-Limit': RatelimitLimitHeaderSchema,
        'X-RateLimit-Remaining': RatelimitRemainingHeaderSchema,
        'X-RateLimit-Reset': RatelimitResetHeaderSchema,
      }),
    },
    429: _429Response,
    500: _500Response,
  },
})

export const getV1CorporateActionsAnnouncementsRoute = createRoute({
  method: 'get',
  path: '/v1/corporate_actions/announcements',
  tags: ['Corporate Actions'],
  summary: 'Retrieve Announcements',
  description:
    'This endpoint is deprecated, please use [the new corporate actions endpoint](https://docs.alpaca.markets/reference/corporateactions-1) instead.',
  operationId: 'getCorporateAnnouncements',
  request: {
    query: z.object({
      ca_types: z
        .string()
        .openapi({
          param: {
            description: 'A comma-delimited list of CorporateActionType values',
            in: 'query',
            name: 'ca_types',
            required: true,
            schema: { type: 'string' },
          },
        }),
      since: z.iso
        .date()
        .openapi({
          param: {
            description:
              'The start (inclusive) of the date range when searching corporate action announcements. This should follow the YYYY-MM-DD format. The date range is limited to 90 days.',
            in: 'query',
            name: 'since',
            required: true,
            schema: { format: 'date', type: 'string' },
          },
        }),
      until: z.iso
        .date()
        .openapi({
          param: {
            description:
              'The end (inclusive) of the date range when searching corporate action announcements. This should follow the YYYY-MM-DD format. The date range is limited to 90 days.',
            in: 'query',
            name: 'until',
            required: true,
            schema: { format: 'date', type: 'string' },
          },
        }),
      symbol: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The symbol of the company initiating the announcement.',
            in: 'query',
            name: 'symbol',
            schema: { type: 'string' },
            required: false,
          },
        }),
      cusip: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The CUSIP of the company initiating the announcement.',
            in: 'query',
            name: 'cusip',
            schema: { type: 'string' },
            required: false,
          },
        }),
      date_type: z
        .enum(['declaration_date', 'ex_date', 'record_date', 'payable_date'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'An enum of possible ways to use the `since` and `until` parameters to search by.\n\nthe types are:\n\n- **declaration_date**: The date of the preliminary announcement details or the date that any subsequent term updates took place.\n- **ex_date**: The date on which any security purchasing activity will not result in a corporate action entitlement. Any selling activity that takes place on or after this date will result in a corporate action entitlement.\n- **record_date**: The date the company checks its records to determine who is shareholder in order to allocate entitlements.\n- **payable_date**: The date that the stock and cash positions will update according to the account positions as of the record date.',
            in: 'query',
            name: 'date_type',
            schema: {
              enum: ['declaration_date', 'ex_date', 'record_date', 'payable_date'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(AnnouncementSchema) } },
    },
    400: BadRequestResponse,
  },
  deprecated: true,
})

export const getV1CorporateActionsAnnouncementsIdRoute = createRoute({
  method: 'get',
  path: '/v1/corporate_actions/announcements/{id}',
  tags: ['Corporate Actions'],
  summary: 'Retrieve a Specific Announcement',
  description:
    'This endpoint is deprecated, please use [the new corporate actions endpoint](https://docs.alpaca.markets/reference/corporateactions-1) instead.',
  operationId: 'get-GET-v1-corporate_actions-announcements-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the corporate action announcement to be returned.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'An Announcement object.' },
    400: { description: 'The body in the request is not valid' },
    422: { description: 'Invalid input value.' },
    500: { description: 'A server error occurred. Please contact Alpaca.' },
  },
  deprecated: true,
})

export const getV1CountryInfoRoute = createRoute({
  method: 'get',
  path: '/v1/country-info',
  tags: ['Country Info'],
  summary: 'Retrieve countries information',
  description:
    'The Country Info API serves country information for every supported countries including risk ratings and supported crypto states where applicable.',
  operationId: 'queryCountryInfos',
  responses: {
    200: {
      description: 'Returns the countries information as a map',
      content: {
        'application/json': {
          schema: CountryInfosSchema,
          examples: {
            countries: {
              summary: 'Example response',
              value: {
                USA: {
                  crypto_risk_rating: 'medium',
                  crypto_supported_states: [
                    'CA',
                    'CT',
                    'GA',
                    'IA',
                    'ID',
                    'IL',
                    'IN',
                    'KS',
                    'KY',
                    'MA',
                    'MD',
                    'ME',
                    'MI',
                    'MS',
                    'MO',
                    'MT',
                    'NC',
                    'ND',
                    'NE',
                    'OH',
                    'RI',
                    'SD',
                    'UT',
                    'VT',
                    'WA',
                  ],
                  full_name: 'United States of America',
                  securities_risk_rating: 'medium',
                },
                ZAF: {
                  crypto_risk_rating: 'high',
                  full_name: 'South Africa',
                  securities_risk_rating: 'high',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const getV1EventsAccountsStatusRoute = createRoute({
  method: 'get',
  path: '/v1/events/accounts/status',
  tags: ['Events'],
  summary: 'Subscribe to Account Status Events (SSE)',
  description:
    "The accounts events API provides streaming of account changes as they occur, via SSE (server sent events). Past events can also be queried.\n\nEvents are generated for changes to the following account properties:\n- account_blocked\n- admin_configurations\n- cash_interest\n- crypto_status\n- kyc_results\n- options\n- status\n- trading_blocked\n\nOnly the changed properties are included in the event payload.\n\nQuery Parameter Rules:\n- `since_id` and `until_id` are deprecated and available only to select broker partners; use `since_ulid` and `until_ulid` instead\n- `since` is required if `until` specified\n- `since_id` is required if `until_id` specified\n- `since_ulid` is required if `until_ulid` specified\n- `since`, `since_id` and `since_ulid` can't be used at the same time\n\nBehavior:\nThis API supports querying a range of events, starting now or in the past. If the end of the range is in the future or not specified, the connection is kept open and future events are pushed.\n\nTo be specific:\n- if `since`, `since_id` or `since_ulid` is not specified, this will not return any historic data\n- if `until`, `until_id` or `until_ulid` is reached, the stream will end with a status of 200\n\n---\n\nNote for people using the clients generated from this OAS spec. Currently OAS-3 doesn't have full support for representing SSE style responses from an API, so if you are using a generated client and don't specify a `since` and `until` there is a good chance the generated clients will hang waiting for the response to end.\n\nIf you require the streaming capabilities we recommend not using the generated clients for this specific usecase until the OAS-3 standards come to a consensus on how to represent this correctly in OAS-3.\n",
  operationId: 'subscribeToAccountStatusSSE',
  request: {
    query: z.object({
      since: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Format: YYYY-MM-DD',
            in: 'query',
            name: 'since',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      until: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Format: YYYY-MM-DD',
            in: 'query',
            name: 'until',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      since_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            deprecated: true,
            description:
              '**Deprecation notice:**\nUse since_ulid instead.\n\nSince: 2023-08-01\nSunset: 2027-02-15',
            in: 'query',
            name: 'since_id',
            schema: { type: 'integer' },
            'x-deprecation': {
              reason: 'Use since_ulid instead.',
              since: '2023-08-01',
              sunset: '2027-02-15',
            },
            required: false,
          },
        }),
      until_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            deprecated: true,
            description:
              '**Deprecation notice:**\nUse until_ulid instead.\n\nSince: 2023-08-01\nSunset: 2027-02-15',
            in: 'query',
            name: 'until_id',
            schema: { type: 'integer' },
            'x-deprecation': {
              reason: 'Use until_ulid instead.',
              since: '2023-08-01',
              sunset: '2027-02-15',
            },
            required: false,
          },
        }),
      since_ulid: z
        .ulid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'since_ulid',
            schema: { format: 'ulid', type: 'string' },
            required: false,
          },
        }),
      until_ulid: z
        .ulid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'until_ulid',
            schema: { format: 'ulid', type: 'string' },
            required: false,
          },
        }),
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'id', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Connected. Events will now start streaming as long as you keep the connection open.',
      content: { 'text/event-stream': { schema: z.array(AccountStatusEventSchema), examples: {} } },
    },
  },
})

export const getV1EventsJournalsStatusRoute = createRoute({
  method: 'get',
  path: '/v1/events/journals/status',
  tags: ['Events'],
  summary: 'Subscribe to Journal Events (SSE) (Legacy)',
  description:
    "The Events API provides event push as well as historical queries via SSE (server sent events).\n\nYou can listen to journal status updates as they get processed by our backoffice.\n\nHistorical events are streamed immediately if queried, and updates are pushed as events occur.\n\nQuery Params Rules:\n- `since_id` and `until_id` are deprecated and available only to select broker partners; use `since_ulid` and `until_ulid` instead\n- `since` required if `until` specified\n- `since_id` required if `until_id` specified\n- `since_ulid` required if `until_ulid` specified\n- `since`, `since_id` or `since_ulid`  can't be used at the same time\nBehavior:\n- if `since`, `since_id` or `since_ulid` not specified this will not return any historic data\n- if `until`, `until_id` or `until_ulid` reached stream will end (status 200)\n\n---\n\nThere is no compatibility between /v1/events/journals/status and /v2/events/journals/status, the ids (ulid) are always different, and the number of events might also different\n\nPlease note that the new `/v2` endpoint, is the same as, and was originally available under `/v2beta1`.\nWe encourage all customers to adjust their codebase from that interim beta endpoint to the `/v2` stable endpoint.\nIn the near future we will setup permanent redirect from `/v2beta1` to `/v2` before we completely remove the beta endpoint.\n\n---\n\nNote for people using the clients generated from this OAS spec. Currently OAS-3 doesn't have full support for representing SSE style responses from an API, so if you are using a generated client and don't specify a `since` and `until` there is a good chance the generated clients will hang waiting for the response to end.\n\nIf you require the streaming capabilities we recommend not using the generated clients for this specific usecase until the OAS-3 standards come to a consensus on how to represent this correctly in OAS-3.\n",
  operationId: 'subscribeToJournalStatusSSE',
  request: {
    query: z.object({
      since: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Format: YYYY-MM-DD',
            in: 'query',
            name: 'since',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      until: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Format: YYYY-MM-DD',
            in: 'query',
            name: 'until',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      since_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            deprecated: true,
            description:
              '**Deprecation notice:**\nUse since_ulid instead.\n\nSince: 2023-08-01\nSunset: 2027-02-15',
            in: 'query',
            name: 'since_id',
            schema: { type: 'integer' },
            'x-deprecation': {
              reason: 'Use since_ulid instead.',
              since: '2023-08-01',
              sunset: '2027-02-15',
            },
            required: false,
          },
        }),
      until_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            deprecated: true,
            description:
              '**Deprecation notice:**\nUse until_ulid instead.\n\nSince: 2023-08-01\nSunset: 2027-02-15',
            in: 'query',
            name: 'until_id',
            schema: { type: 'integer' },
            'x-deprecation': {
              reason: 'Use until_ulid instead.',
              since: '2023-08-01',
              sunset: '2027-02-15',
            },
            required: false,
          },
        }),
      since_ulid: z
        .ulid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'since_ulid',
            schema: { format: 'ulid', type: 'string' },
            required: false,
          },
        }),
      until_ulid: z
        .ulid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'until_ulid',
            schema: { format: 'ulid', type: 'string' },
            required: false,
          },
        }),
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'id', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Connected. Events will now start streaming as long as you keep the connection open.',
      content: { 'text/event-stream': { schema: z.array(JournalStatusEventSchema) } },
    },
  },
})

export const getV1EventsNtaRoute = createRoute({
  method: 'get',
  path: '/v1/events/nta',
  tags: ['Events'],
  summary: 'Subscribe to Non-Trading Activities Events (SSE)',
  description:
    "The Events API provides event push as well as historical queries via SSE (server sent events).\n\nYou can listen to non-trading activities updates as they get processed by our backoffice, for both end-user and firm accounts.\n\nHistorical events are streamed immediately if queried, and updates are pushed as events occur.\n\nYou can listen to when NTAs are pushed such as CSDs, JNLC (journals) or FEEs.\n\nQuery Params Rules:\n- `since_id` and `until_id` are deprecated and available only to select broker partners; use `since_ulid` and `until_ulid` instead\n- `since` required if `until` specified\n- `since_id` required if `until_id` specified\n- `since_ulid` required if `until_ulid` specified\n- `since`, `since_id` or `since_ulid`  can't be used at the same time\nBehavior:\n- if `since`, `since_id` or `since_ulid` not specified this will not return any historic data\n- if `until`, `until_id` or `until_ulid` reached stream will end (status 200)'",
  operationId: 'get-v1-events-nta',
  request: {
    query: z.object({
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'id', schema: { type: 'string' }, required: false },
        }),
      since: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Format: YYYY-MM-DD',
            in: 'query',
            name: 'since',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      until: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Format: YYYY-MM-DD',
            in: 'query',
            name: 'until',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      since_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            deprecated: true,
            description:
              '**Deprecation notice:**\nUse since_ulid instead.\n\nSince: 2023-08-01\nSunset: 2027-02-15',
            in: 'query',
            name: 'since_id',
            schema: { type: 'integer' },
            'x-deprecation': {
              reason: 'Use since_ulid instead.',
              since: '2023-08-01',
              sunset: '2027-02-15',
            },
            required: false,
          },
        }),
      until_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            deprecated: true,
            description:
              '**Deprecation notice:**\nUse until_ulid instead.\n\nSince: 2023-08-01\nSunset: 2027-02-15',
            in: 'query',
            name: 'until_id',
            schema: { type: 'integer' },
            'x-deprecation': {
              reason: 'Use until_ulid instead.',
              since: '2023-08-01',
              sunset: '2027-02-15',
            },
            required: false,
          },
        }),
      since_ulid: z
        .ulid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'since_ulid',
            schema: { format: 'ulid', type: 'string' },
            required: false,
          },
        }),
      until_ulid: z
        .ulid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'until_ulid',
            schema: { format: 'ulid', type: 'string' },
            required: false,
          },
        }),
      include_preprocessing: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'include_preprocessing',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      group_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'ID used to link activities who share a sibling relationship',
            in: 'query',
            name: 'group_id',
            schema: { format: 'uuid', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'text/event-stream': { schema: NonTradeActivityEventSchema } },
    },
  },
})

export const getV1EventsTransfersStatusRoute = createRoute({
  method: 'get',
  path: '/v1/events/transfers/status',
  tags: ['Events'],
  summary: 'Subscribe to Transfer Events (SSE) (Legacy)',
  description:
    "**Deprecation notice**\n\nAs part of the deprecation process, the legacy transfer events API is now only available for existing broker-partners at `GET /v1/events/transfers/status` and for compatibility reasons.\n\nAll new broker partners will not have the option to use the legacy transfer events endpoint.\n\nThey should integrate with the new `/v2/events/funding/status` endpoint instead.\n\nAlso, all existing broker partners are now recommended to upgrade to the `/v2/events/funding/status` endpoint, which provides faster event delivery times.\n\n---\n\nThe Events API provides event push as well as historical queries via SSE (server sent events).\n\nYou can listen to transfer status updates as they get processed by our backoffice, for both end-user and firm accounts.\n\nHistorical events are streamed immediately if queried, and updates are pushed as events occur.\n\nQuery Params Rules:\n- `since_id` and `until_id` are deprecated and available only to select broker partners; use `since_ulid` and `until_ulid` instead\n- `since` required if `until` specified\n- `since_id` required if `until_id` specified\n- `since_ulid` required if `until_ulid` specified\n- `since`, `since_id` or `since_ulid`  can't be used at the same time\nBehavior:\n- if `since`, `since_id` or `since_ulid` not specified this will not return any historic data\n- if `until`, `until_id` or `until_ulid` reached stream will end (status 200)\n\n---\n\nNote for people using the clients generated from this OAS spec. Currently OAS-3 doesn't have full support for representing SSE style responses from an API, so if you are using a generated client and don't specify a `since` and `until` there is a good chance the generated clients will hang waiting for the response to end.\n\nIf you require the streaming capabilities we recommend not using the generated clients for this specific usecase until the OAS-3 standards come to a consensus on how to represent this correctly in OAS-3.",
  operationId: 'subscribeToTransferStatusSSE',
  request: {
    query: z.object({
      since: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Format: YYYY-MM-DD',
            in: 'query',
            name: 'since',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      until: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Format: YYYY-MM-DD',
            in: 'query',
            name: 'until',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      since_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            deprecated: true,
            description:
              '**Deprecation notice:**\nUse since_ulid instead.\n\nSince: 2023-08-01\nSunset: 2027-02-15',
            in: 'query',
            name: 'since_id',
            schema: { type: 'integer' },
            'x-deprecation': {
              reason: 'Use since_ulid instead.',
              since: '2023-08-01',
              sunset: '2027-02-15',
            },
            required: false,
          },
        }),
      until_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            deprecated: true,
            description:
              '**Deprecation notice:**\nUse until_ulid instead.\n\nSince: 2023-08-01\nSunset: 2027-02-15',
            in: 'query',
            name: 'until_id',
            schema: { type: 'integer' },
            'x-deprecation': {
              reason: 'Use until_ulid instead.',
              since: '2023-08-01',
              sunset: '2027-02-15',
            },
            required: false,
          },
        }),
      since_ulid: z
        .ulid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'since_ulid',
            schema: { format: 'ulid', type: 'string' },
            required: false,
          },
        }),
      until_ulid: z
        .ulid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'until_ulid',
            schema: { format: 'ulid', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Connected. Events will now start streaming as long as you keep the connection open.',
      content: { 'text/event-stream': { schema: z.array(TransferStatusEventSchema) } },
    },
    410: { description: 'Deprecated. The endpoint is not available for this partner.' },
  },
  deprecated: true,
})

export const getV1FpslAnalyticsAccountIdLoansRoute = createRoute({
  method: 'get',
  path: '/v1/fpsl/analytics/{account_id}/loans',
  tags: ['FPSL Program'],
  summary: 'Read FPSL Loans Analytics for an Account',
  description:
    'Returns aggregated FPSL interest and loan-activity counts for one account over a date range. Use this for "earned so far this month" customer UIs and for supervisory spot-checks against your internal accrual model.\n\nThe `{account_id}` path parameter accepts a account UUID (aggregation for that account).',
  operationId: 'get-v1-fpsl-analytics-account-loans',
  request: {
    params: z.object({
      account_id: z
        .uuid()
        .openapi({
          param: {
            description: 'The account identifier (account UUID).',
            in: 'path',
            name: 'account_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      start: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter loans after or on this start date (inclusive). Defaults to the first day of the current month, New York timezone.',
            in: 'query',
            name: 'start',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      end: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter loans before this end date (exclusive). Defaults to the day after the current date, New York timezone.',
            in: 'query',
            name: 'end',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the aggregated FPSL loan analytics for the account.',
      content: { 'application/json': { schema: FPSLAnalyticsLoansResponseSchema } },
    },
    400: {
      description:
        'One of the request parameters is invalid. See the returned message for details.',
      content: { 'application/json': { schema: FPSLErrorSchema } },
    },
    401: {
      description:
        'Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.',
      content: { 'application/json': { schema: FPSLErrorSchema } },
    },
    403: {
      description: 'User has no access to a resource.',
      content: { 'application/json': { schema: FPSLErrorSchema } },
    },
    500: {
      description:
        'Internal server error. We recommend retrying these later. If the issue persists, please contact us on Slack or on the Community Forum.',
      content: { 'application/json': { schema: FPSLErrorSchema } },
    },
  },
})

export const getV1FpslLoansRoute = createRoute({
  method: 'get',
  path: '/v1/fpsl/loans',
  tags: ['FPSL Program'],
  summary: 'List FPSL Loans',
  description:
    'Returns a list of all FPSL loans that match the specified filter criteria, ordered in ascending order by `date`, `account_number`, and `symbol`. Each entry represents a loan of a `symbol` on a given `date`, made on behalf of the specified `account_number`.',
  operationId: 'get-v1-list-fpsl-loans',
  request: {
    query: z.object({
      account_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The account identifier',
            in: 'query',
            name: 'account_id',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      start: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter loans after or on this start date.',
            in: 'query',
            name: 'start',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      end: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter loans before this end date.',
            in: 'query',
            name: 'end',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      page_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The pagination token used to continue retrieving results. This value is returned in certain responses when additional data is available, typically due to a response size limit.',
            in: 'query',
            name: 'page_token',
            required: false,
            schema: { type: 'string' },
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
          z.int().min(1).max(10000),
        )
        .default(1000)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of data points to return in the response page.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 1000, maximum: 10000, minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Returns a list of FPSL loans for the account, or an empty list if no loans are found.',
      content: { 'application/json': { schema: ListFPSLLoansResponseSchema } },
    },
    400: {
      description:
        'One of the request parameters is invalid. See the returned message for details.',
      content: { 'application/json': { schema: FPSLErrorSchema } },
    },
    401: {
      description:
        'Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.',
      content: { 'application/json': { schema: FPSLErrorSchema } },
    },
    403: {
      description: 'User has no access to a resource.',
      content: { 'application/json': { schema: FPSLErrorSchema } },
    },
    500: {
      description:
        'Internal server error. We recommend retrying these later. If the issue persists, please contact us on Slack or on the Community Forum.',
      content: { 'application/json': { schema: FPSLErrorSchema } },
    },
  },
})

export const getV1FpslTiersRoute = createRoute({
  method: 'get',
  path: '/v1/fpsl/tiers',
  tags: ['FPSL Program'],
  summary: 'List FPSL Tiers',
  description: 'List all available FPSL tiers. These tiers may be assigned to an account.',
  operationId: 'get-v1-list-fpsl-tiers',
  responses: {
    200: {
      description:
        'Successful response, returns a list of FPSL tiers or none if no tiers are available.',
      content: { 'application/json': { schema: z.array(FPSLTierSchema) } },
    },
    401: {
      description: 'Unauthorized. Please check your API key and try again.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    429: {
      description: 'Too many requests. Please wait a moment and try again.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'A server error occurred. Please contact Alpaca.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV1InstantFundingRoute = createRoute({
  method: 'get',
  path: '/v1/instant_funding',
  tags: ['Instant Funding'],
  summary: 'Get Instant Funding List',
  description:
    'Returns a list of instant funding records based on the query parameters. The results are\npaginated, sorted, and filtered based on the parameters provided.',
  operationId: 'get-v1-instant-funding-list',
  request: {
    query: z.object({
      sort_by: ListSortBySchema.openapi({
        param: {
          description: 'sort results based on created_at, amount, and deadline',
          in: 'query',
          name: 'sort_by',
          required: false,
          schema: { $ref: '#/components/schemas/ListSortBy' },
        },
      }).exactOptional(),
      sort_order: SortOrderSchema.openapi({
        param: {
          description: 'Defines the ordering of sort_by query. Defaults to ASC when not specified.',
          in: 'query',
          name: 'sort_order',
          required: false,
          schema: { $ref: '#/components/schemas/SortOrder' },
        },
      }).exactOptional(),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'defines the number of results that will be returned from the request',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      offset: z
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
              'defines the number of results that will be skipped before picking the results that will be returned',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { minimum: 1, type: 'integer' },
          },
        }),
      system_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'filter transfers based on system date',
            in: 'query',
            name: 'system_date',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      deadline: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'filter transfers based on settlement deadline',
            in: 'query',
            name: 'deadline',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      status: InstantFundingStatusSchema.openapi({
        param: {
          description: 'filter transfers based on status',
          in: 'query',
          name: 'status',
          required: false,
          schema: { $ref: '#/components/schemas/InstantFundingStatus' },
        },
      }).exactOptional(),
      before: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'filter transfers based on the date of creation',
            in: 'query',
            name: 'before',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'list of transfers',
      content: { 'application/json': { schema: z.array(InstantFundingSchema) } },
    },
    default: { description: 'error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const postV1InstantFundingRoute = createRoute({
  method: 'post',
  path: '/v1/instant_funding',
  tags: ['Instant Funding'],
  summary: 'Create an instant funding request',
  description:
    'Creates an instant funding request. The request will be processed and the funds will be\nmade available to the account in the form of a Memopost non trade activity. Upon settlement\nthe Memoposted will be corrected to a CSD activity.\n\n**Idempotency**: When the `Idempotency-Key` header is supplied, this endpoint is\nidempotent. Multiple requests with the same key and identical request body will\ncreate only one transfer. A subsequent request returns the previously created\ntransfer with the same response (no duplicate is created). If the same key is used\nwith a different request body, the API returns `422 Unprocessable Entity`.\n\n**Recommended for production**: Always supply `Idempotency-Key` when creating\ntransfers. This allows safe retries on timeouts, network errors, or 5xx responses\nwithout risking duplicate transfers. Use a client-generated unique value (e.g. UUID).\n',
  operationId: 'post-v1-instant-funding',
  request: {
    headers: z.object({ 'Idempotency-Key': LegacyIdempotencyKeyParamsSchema }),
    body: {
      description: 'details of the instant funding request',
      content: { 'application/json': { schema: CreateIFTransferRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Instant transfer request created.',
      content: { 'application/json': { schema: InstantFundingSchema } },
    },
    422: {
      description:
        'Unprocessable Entity. Returned when an idempotency key is reused with a different request body.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: {
      description: 'Error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV1InstantFundingInstantFundingIdRoute = createRoute({
  method: 'get',
  path: '/v1/instant_funding/{instant_funding_id}',
  tags: ['Instant Funding'],
  summary: 'Get an instant funding request',
  description: 'Returns an instant funding transfer based on the ID supplied.',
  operationId: 'get-v1-instant-funding-single',
  request: {
    params: z.object({
      instant_funding_id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the instant funding transfer',
            in: 'path',
            name: 'instant_funding_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: InstantFundingSchema } },
    },
    default: {
      description: 'Error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteV1InstantFundingInstantFundingIdRoute = createRoute({
  method: 'delete',
  path: '/v1/instant_funding/{instant_funding_id}',
  tags: ['Instant Funding'],
  summary: 'Cancel an instant funding request',
  description: 'Cancels a single instant funding request based on the ID supplied if possible.',
  operationId: 'delete-v1-instant-funding-single',
  request: {
    params: z.object({
      instant_funding_id: z
        .string()
        .openapi({
          param: {
            description: 'UUID ID of the instant funding transfer to cancel',
            in: 'path',
            name: 'instant_funding_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Successful response.' },
    default: {
      description: 'Error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV1InstantFundingLimitsRoute = createRoute({
  method: 'get',
  path: '/v1/instant_funding/limits',
  tags: ['Instant Funding'],
  summary: 'Get instant funding limits',
  description:
    'Returns globally configured limits for the correspondent. These limits are used to determine\nthe maximum amount that can be extended to all accounts, and reaching this limit will result\nin further requests to create instant funding requests being rejected.',
  operationId: 'get-v1-instant-funding-correspondent-limits',
  responses: {
    200: {
      description: 'correspondent instant funding limits',
      content: { 'application/json': { schema: CorrespondentLimitSchema } },
    },
    default: { description: 'error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getV1InstantFundingLimitsAccountsRoute = createRoute({
  method: 'get',
  path: '/v1/instant_funding/limits/accounts',
  tags: ['Instant Funding'],
  summary: 'Get instant funding account limits',
  description: 'Returns the limits for individual partner accounts.',
  operationId: 'get-v1-instant-funding-account-limits',
  request: {
    query: z.object({
      account_numbers: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description: 'Filter limits based on comma-separated account numbers',
            explode: false,
            in: 'query',
            name: 'account_numbers',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'individual broker account limits',
      content: { 'application/json': { schema: z.array(AccountLimitSchema) } },
    },
    default: { description: 'error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getV1InstantFundingReportsRoute = createRoute({
  method: 'get',
  path: '/v1/instant_funding/reports',
  tags: ['Instant Funding'],
  summary: 'Get instant funding report',
  description:
    'Returns instant funding reports which are to be used for daily reconciliation reporting.',
  operationId: 'get-v1-instant-funding-reports',
  request: {
    query: z.object({
      report_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The report type to be returned; 'summary' or 'detail', defaults to 'summary'",
            in: 'query',
            name: 'report_type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      system_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The system date to be used for the report. If not provided then the last system date will be used.\n',
            in: 'query',
            name: 'system_date',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: z.array(ReportsResponseSchema) } },
    },
    default: {
      description: 'Error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV1InstantFundingSettlementsRoute = createRoute({
  method: 'get',
  path: '/v1/instant_funding/settlements',
  tags: ['Instant Funding'],
  summary: 'List settlements',
  description: 'Returns all settlements filtered by status if provided.',
  operationId: 'get-v1-instant-funding-settlements',
  request: {
    query: z.object({
      statuses: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'comma delimited list of statuses to use as a filter',
            in: 'query',
            name: 'statuses',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: SettlementsResponseSchema } },
    },
    default: {
      description: 'Error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV1InstantFundingSettlementsRoute = createRoute({
  method: 'post',
  path: '/v1/instant_funding/settlements',
  tags: ['Instant Funding'],
  summary: 'Create a new settlement',
  description:
    'Creates a new settlement, which will trigger the reconciliation process for all included\ntransfers and their interests. There is a limit of 50,000 transfers per settlement. If more\nthan 50,000 transfers need to be settled, they should be batched in multiple settlements.',
  operationId: 'post-v1-instant-funding-settlements',
  request: {
    body: {
      description: 'details of the settlement request',
      content: { 'application/json': { schema: CreateSettlementRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Settlement created.',
      content: { 'application/json': { schema: SettlementResponseSchema } },
    },
    default: {
      description: 'Error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV1InstantFundingSettlementsSettlementIdRoute = createRoute({
  method: 'get',
  path: '/v1/instant_funding/settlements/{settlement_id}',
  tags: ['Instant Funding'],
  summary: 'Get a single settlement',
  description: 'Returns the settlement specified by the path parameter.',
  operationId: 'get-v1-instant-funding-settlements-single',
  request: {
    params: z.object({
      settlement_id: z
        .uuid()
        .openapi({
          param: {
            description: 'ID of the settlement',
            in: 'path',
            name: 'settlement_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: SettlementResponseSchema } },
    },
    default: {
      description: 'Error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV1IposRoute = createRoute({
  method: 'get',
  path: '/v1/ipos',
  tags: ['IPO'],
  summary: 'List IPO Offerings',
  description:
    'Returns a paginated list of IPO offerings currently known to Alpaca.\n\nUse this endpoint to power IPO discovery surfaces (e.g. an "Upcoming IPOs" list). Real-time lifecycle changes (availability, prospectus, 60-minute mail, allocations, cancellations) are pushed over the [IPO Events Stream](#operation/subscribeToIPOEventsSSE).\n',
  operationId: 'listIPOOfferings',
  request: {
    query: z.object({
      availability: z
        .enum(['available', 'not_available', 'closed'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by offering availability.\n- `available` - accepting new orders.\n- `not_available` - not yet open for orders.\n- `closed` - no longer accepting orders.\n',
            in: 'query',
            name: 'availability',
            schema: { enum: ['available', 'not_available', 'closed'], type: 'string' },
            required: false,
          },
        }),
      ticker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by ticker symbol (case-insensitive exact match).',
            example: 'EXMP',
            in: 'query',
            name: 'ticker',
            schema: { type: 'string' },
            required: false,
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
          z.int().min(1).max(200),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of offerings to return per page. Capped at `200`.',
            in: 'query',
            name: 'limit',
            schema: { default: 50, maximum: 200, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      page_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Opaque cursor returned in the previous response's `next_page_token` field. Pass it back to fetch the next page.",
            in: 'query',
            name: 'page_token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A page of IPO offerings.',
      content: {
        'application/json': {
          schema: IPOOfferingListResponseSchema,
          examples: { default: IPOOfferingListExampleExample },
        },
      },
    },
  },
})

export const getV1IposOfferingReferenceRoute = createRoute({
  method: 'get',
  path: '/v1/ipos/{offering_reference}',
  tags: ['IPO'],
  summary: 'Retrieve an IPO Offering',
  description:
    'Returns a single IPO offering by `offering_reference`.\n\nThe `offering_reference` value matches the one delivered on the [IPO Events Stream](#operation/subscribeToIPOEventsSSE).\n',
  operationId: 'getIPOOffering',
  request: {
    params: z.object({
      offering_reference: z
        .string()
        .openapi({
          param: {
            description:
              'The unique offering identifier (also referred to as `ipo_reference` in the response body).',
            example: 'FI111225',
            in: 'path',
            name: 'offering_reference',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested IPO offering.',
      content: {
        'application/json': {
          schema: IPOOfferingResponseSchema,
          examples: { default: IPOOfferingGetExampleExample },
        },
      },
    },
    404: { description: 'No IPO offering exists for the given `offering_reference`.' },
  },
})

export const getV1JitSettlementsRoute = createRoute({
  method: 'get',
  path: '/v1/jit/settlements',
  tags: ['Funding'],
  summary: 'List all JIT Settlements',
  description: 'Returns all JIT settlements filtered by status if provided.',
  operationId: 'get-v1-jit-settlements',
  request: {
    query: z.object({
      statuses: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'comma delimited list of statuses to use as a filter',
            in: 'query',
            name: 'statuses',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: SettlementsResponseSchema } },
    },
    default: {
      description: 'Error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV1JitSettlementsRoute = createRoute({
  method: 'post',
  path: '/v1/jit/settlements',
  tags: ['Funding'],
  summary: 'Create a new JIT settlement',
  description:
    'Creates a new JIT settlement, which will trigger the reconciliation process for all included accounts. There is a limit of 150,000 accounts per settlement. If more than 150,000 accounts need to be settled, they should be batched in multiple settlements.\n',
  operationId: 'post-v1-jit-settlements',
  request: {
    body: {
      description: 'details of the JIT settlement request',
      content: { 'application/json': { schema: CreateJITSettlementRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Settlement created.',
      content: { 'application/json': { schema: SettlementResponseSchema } },
    },
    default: {
      description: 'Error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV1JitSettlementsSettlementIdRoute = createRoute({
  method: 'get',
  path: '/v1/jit/settlements/{settlement_id}',
  tags: ['Funding'],
  summary: 'Get a single JIT settlement',
  description: 'Returns the JIT settlement specified by the path parameter.',
  operationId: 'get-v1-jit-settlements-single',
  request: {
    params: z.object({
      settlement_id: z
        .uuid()
        .openapi({
          param: {
            description: 'ID of the JIT settlement',
            in: 'path',
            name: 'settlement_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: { 'application/json': { schema: SettlementResponseSchema } },
    },
    default: {
      description: 'Error response.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV1JournalsRoute = createRoute({
  method: 'get',
  path: '/v1/journals',
  tags: ['Journals'],
  summary: 'Retrieve a List Journals',
  description: 'Returns an array of journal objects.',
  operationId: 'getAllJournals',
  request: {
    query: z.object({
      after: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'By journal creation date. Format: 2020-01-01',
            in: 'query',
            name: 'after',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      before: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'By journal creation date. Format: 2020-01-01',
            in: 'query',
            name: 'before',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      status: JournalStatusSchema.openapi({
        param: {
          description: 'See the JournalStatus model for more info',
          in: 'query',
          name: 'status',
          schema: { $ref: '#/components/schemas/JournalStatus' },
          required: false,
        },
      }).exactOptional(),
      entry_type: z
        .enum(['JNLC', 'JNLS'])
        .exactOptional()
        .openapi({
          param: {
            description: 'JNLC or JNLS',
            in: 'query',
            name: 'entry_type',
            schema: { enum: ['JNLC', 'JNLS'], type: 'string' },
            required: false,
          },
        }),
      to_account: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The account id that received the journal',
            in: 'query',
            name: 'to_account',
            schema: { format: 'uuid', type: 'string' },
            required: false,
          },
        }),
      from_account: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'The account id that initiated the journal',
            in: 'query',
            name: 'from_account',
            schema: { format: 'uuid', type: 'string' },
            required: false,
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results to return',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(JournalSchema) } } },
    400: {
      description: 'One of the parameters is invalid.',
      content: { 'application/json': { schema: z.string() } },
    },
    422: {
      description: 'Result set exceeds 100,000 records.',
      content: { 'application/json': { schema: z.string() } },
    },
  },
})

export const postV1JournalsRoute = createRoute({
  method: 'post',
  path: '/v1/journals',
  tags: ['Journals'],
  summary: 'Create a Journal',
  description:
    'A journal can be JNLC (move cash) or JNLS (move shares), dictated by `entry_type`. Generally, journal requests are subject to approval and starts from the `pending` status. The status changes are propagated through the Event API. Under certain conditions agreed for the partner, such journal transactions that meet the criteria are executed right away.\n\n**Idempotency**: Reusing the same key with an identical request returns the\npreviously created journal without creating a duplicate. Reusing the same key with\na different request returns `422 Unprocessable Entity`.\n',
  operationId: 'createJournal',
  request: {
    headers: z.object({ 'Idempotency-Key': LegacyIdempotencyKeyParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: CreateJournalRequestSchema,
          example: {
            amount: '115.5',
            entry_type: 'JNLC',
            from_account: '7c891489-574f-4f9a-82f0-4082a07f4736',
            to_account: '2d47a229-0c25-40a2-8cc7-b2c8821ff93a',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The New Journal object',
      content: { 'application/json': { schema: JournalSchema } },
    },
    400: {
      description: 'One of the parameters is invalid.',
      content: { 'application/json': { schema: z.string() } },
    },
    403: {
      description: 'The amount requested to move is not available.',
      content: { 'application/json': { schema: z.string() } },
    },
    404: {
      description: 'One of the account is not found.',
      content: { 'application/json': { schema: z.string() } },
    },
    422: IdempotencyKeyConflictResponse,
  },
})

export const getV1JournalsJournalIdRoute = createRoute({
  method: 'get',
  path: '/v1/journals/{journal_id}',
  tags: ['Journals'],
  summary: 'Retrieve a Single Journal Entry',
  description:
    'You can query a specific journal entry that you submitted to Alpaca by passing into the query the journal_id.\n\nWill return a journal entry if a journal entry with journal_id exists, otherwise will throw an error.',
  operationId: 'get-v1-journals-journal_id',
  request: {
    params: z.object({
      journal_id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'journal_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: JournalSchema } } },
  },
})

export const deleteV1JournalsJournalIdRoute = createRoute({
  method: 'delete',
  path: '/v1/journals/{journal_id}',
  tags: ['Journals'],
  summary: 'Cancel a Pending Journal',
  description:
    'You can only delete a journal if the journal is still in a pending state, if a journal is executed you will not be able to delete. The alternative is to create a mirror journal entry to reverse the flow of funds.',
  operationId: 'deleteJournalById',
  request: {
    params: z.object({
      journal_id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'journal_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The cancel request succeeded. (No-content)\n' },
    404: { description: 'The journal is not found.\n' },
    422: { description: 'The journal is not in the pending status.\n' },
  },
})

export const postV1JournalsBatchRoute = createRoute({
  method: 'post',
  path: '/v1/journals/batch',
  tags: ['Journals'],
  summary: 'Create a Batch Journal Transaction (One-to-Many)',
  description:
    'You can create a batch of journal requests by using this endpoint. This is enabled on JNLC type Journals for now only.\n\nEvery single request must be valid for the entire batch operation to succeed.\n\nIn the case of a successful request, the response will contain an array of journal objects with an extra attribute error_message in the case when a specific account fails to receive a journal.\n\n**Idempotency**: When the `Idempotency-Key` header is supplied, this endpoint is\nidempotent. Multiple requests with the same key and identical request body will\ncreate only one batch. A subsequent request returns the previously created\nbatch with the same response (no duplicate is created). If the same key is used\nwith a different request body, the API returns `422 Unprocessable Entity`.\n\n**Recommended for production**: Always supply `Idempotency-Key` when creating\njournal batches. This allows safe retries on timeouts, network errors, or 5xx responses\nwithout risking duplicate batches. Use a client-generated unique value (e.g. UUID).',
  operationId: 'createBatchJournal',
  request: {
    headers: z.object({ 'Idempotency-Key': LegacyIdempotencyKeyParamsSchema }),
    body: {
      description: '',
      content: { 'application/json': { schema: BatchJournalRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'an array of journal objects with an extra attribute error_message in the case when a specific account fails to receive a journal.',
      content: {
        'application/json': { schema: z.array(BatchJournalResponseSchema), examples: {} },
      },
    },
    422: {
      description:
        'Unprocessable Entity. Returned when an idempotency key is reused with a different request body.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postV1JournalsReverseBatchRoute = createRoute({
  method: 'post',
  path: '/v1/journals/reverse_batch',
  tags: ['Journals'],
  summary: 'Create a Reverse Batch Journal Transaction (Many-to-One)',
  description:
    'You can also create a batch journal request by using the following endpoint. This is enabled on JNLC for now only.\n\nNote that if there is an invalid account_id the whole batch operation will be canceled.\nEvery single request must be valid for the entire batch operation to succeed.\n\nA successful response contains an array of JNLC journal objects. If any account or entry is invalid, the whole batch operation is canceled and no per-item error result is returned.',
  operationId: 'post-v1-journals-reverse_batch',
  request: {
    body: { content: { 'application/json': { schema: ReverseBatchJournalRequestSchema } } },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(JNLCSchema) } } },
    400: { description: 'Invalid Request Body' },
    403: { description: 'Insufficient Balance (JNLC) or Insufficient Assets (JNLS)' },
    404: { description: 'Account not found' },
  },
})

export const postV1OauthAuthorizeRoute = createRoute({
  method: 'post',
  path: '/v1/oauth/authorize',
  tags: ['OAuth'],
  summary: 'Authorize an OAuth Token',
  description: 'The operation issues an OAuth code which can be used in the OAuth code flow.\n',
  operationId: 'authorizeOAuthToken',
  request: {
    body: { content: { 'application/json': { schema: OAuthTokenRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successfully issued a code.',
      content: { 'application/json': { schema: AuthorizeOAuthTokenResponseSchema } },
    },
    401: {
      description:
        'Client does not exist, you do not have access to the client, or "client_secret" is incorrect.\n',
      content: { 'application/json': { schema: z.string() } },
    },
    422: {
      description: 'Redirect URI or scope is invalid.\n',
      content: { 'application/json': { schema: z.string() } },
    },
  },
})

export const getV1OauthClientsClientIdRoute = createRoute({
  method: 'get',
  path: '/v1/oauth/clients/{client_id}',
  tags: ['OAuth'],
  summary: 'Get an OAuth client',
  description:
    'The endpoint returns the details of OAuth client to display in the authorization page.\n',
  operationId: 'getOAuthClient',
  request: {
    params: z.object({
      client_id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'client_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      response_type: z
        .enum(['code', 'token'])
        .exactOptional()
        .openapi({
          param: {
            description: 'code or token',
            in: 'query',
            name: 'response_type',
            schema: { enum: ['code', 'token'], example: 'token', type: 'string' },
            required: false,
          },
          example: 'token',
        }),
      redirect_uri: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Redirect URI of the OAuth flow',
            in: 'query',
            name: 'redirect_uri',
            schema: { example: 'https://example.com/authorize', type: 'string' },
            required: false,
          },
          example: 'https://example.com/authorize',
        }),
      scope: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Requested scopes by the OAuth flow',
            in: 'query',
            name: 'scope',
            schema: { example: 'general', type: 'string' },
            required: false,
          },
          example: 'general',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success.',
      content: {
        'application/json': {
          schema: OathClientResponseSchema,
          examples: {
            'example-1': {
              value: {
                client_id: '7a3c52a910e1dc2abbb14da2b6b8e711',
                description: 'Sample description',
                live_trading_approved: false,
                name: 'TradingApp',
                privacy_policy: '',
                redirect_uri: ['http://localhost'],
                status: 'ACTIVE',
                terms_of_use: '',
                url: 'http://test.com',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Client does not exist or you do not have access to the client.\n',
      content: { 'application/json': { schema: z.string() } },
    },
  },
})

export const postV1OauthTokenRoute = createRoute({
  method: 'post',
  path: '/v1/oauth/token',
  tags: ['OAuth'],
  summary: 'Issue an OAuth token',
  description: 'The operation issues an OAuth code which can be used in the OAuth code flow.\n',
  operationId: 'issueOAuthToken',
  request: {
    body: { content: { 'application/json': { schema: OAuthTokenRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success.',
      content: {
        'application/json': {
          schema: IssueOAuthTokenResponseSchema,
          examples: {
            'example-1': {
              value: {
                access_token: '87586f14-c3f4-4912-b107-f75bc17ff87a',
                scope: 'general',
                token_type: 'Bearer',
              },
            },
          },
        },
      },
    },
    401: {
      description:
        'Client does not exist, you do not have access to the client, or "client_secret" is incorrect.\n',
      content: { 'application/json': { schema: z.string() } },
    },
    422: {
      description: 'Redirect URI or scope is invalid.\n',
      content: { 'application/json': { schema: z.string() } },
    },
  },
})

export const getV1OptionsContractsRoute = createRoute({
  method: 'get',
  path: '/v1/options/contracts',
  tags: ['Assets'],
  summary: 'Get Option Contracts (BETA)',
  description:
    'This endpoint allows you to retrieve a list of option contracts based on various filtering criteria.\nBy default only active contracts that expire before the upcoming weekend are returned.\n',
  operationId: 'get-options-contracts',
  request: {
    query: z.object({
      underlying_symbols: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter contracts by one or more underlying symbols.',
            example: 'AAPL,SPY',
            in: 'query',
            name: 'underlying_symbols',
            schema: { type: 'string' },
            required: false,
          },
        }),
      show_deliverables: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Include deliverables array in the response.',
            example: true,
            in: 'query',
            name: 'show_deliverables',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      status: z
        .enum(['active', 'inactive'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter contracts by status (active/inactive). By default only active contracts are returned.',
            example: 'active',
            in: 'query',
            name: 'status',
            schema: { enum: ['active', 'inactive'], type: 'string' },
            required: false,
          },
        }),
      expiration_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter contracts by the exact expiration date (format: YYYY-MM-DD). If no expiration date filters (`expiration_date`, `expiration_date_gte`, or `expiration_date_lte`) are provided, the endpoint defaults to returning contracts with expiration dates on or before the upcoming weekend.',
            example: '2025-06-20',
            in: 'query',
            name: 'expiration_date',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      expiration_date_gte: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter contracts with expiration date greater than or equal to the specified date.',
            example: '2025-06-20',
            in: 'query',
            name: 'expiration_date_gte',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      expiration_date_lte: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter contracts with expiration date less than or equal to the specified date. By default this is set to the next weekend.',
            example: '2025-06-20',
            in: 'query',
            name: 'expiration_date_lte',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      root_symbol: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter contracts by the root symbol.',
            example: 'AAPL',
            in: 'query',
            name: 'root_symbol',
            schema: { type: 'string' },
            required: false,
          },
        }),
      type: z
        .enum(['call', 'put'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter contracts by the type (call/put).',
            example: 'call',
            in: 'query',
            name: 'type',
            schema: { enum: ['call', 'put'], type: 'string' },
            required: false,
          },
        }),
      style: z
        .enum(['american', 'european'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter contracts by the style (american/european).',
            example: 'american',
            in: 'query',
            name: 'style',
            schema: { enum: ['american', 'european'], type: 'string' },
            required: false,
          },
        }),
      strike_price_gte: z
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
              'Filter contracts with strike price greater than or equal to the specified value.',
            example: 50,
            in: 'query',
            name: 'strike_price_gte',
            schema: { type: 'number' },
            required: false,
          },
        }),
      strike_price_lte: z
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
              'Filter contracts with strike price less than or equal to the specified value.',
            example: 100,
            in: 'query',
            name: 'strike_price_lte',
            schema: { type: 'number' },
            required: false,
          },
        }),
      page_token: PageTokenParamsSchema,
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of contracts to limit per page (default=100, max=10000).',
            example: 100,
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      ppind: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ppind (Penny Program Indicator) field indicates whether an option contract is eligible for penny price increments,\nwith `true` meaning it is part of the Penny Program and `false` meaning it is not.',
            example: true,
            in: 'query',
            name: 'ppind',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response.',
      content: {
        'application/json': {
          schema: z
            .object({
              next_page_token: NextPageTokenSchema.exactOptional(),
              option_contracts: z.array(OptionContractSchema),
            })
            .openapi({ required: ['option_contracts'] }),
        },
      },
    },
  },
})

export const getV1OptionsContractsSymbolOrIdRoute = createRoute({
  method: 'get',
  path: '/v1/options/contracts/{symbol_or_id}',
  tags: ['Assets'],
  summary: 'Get an option contract by ID or Symbol (BETA)',
  description:
    'Get an option contract by symbol or contract ID. The symbol or id should be passed in as a path parameter.',
  operationId: 'get-option-contract-symbol_or_id',
  request: {
    params: z.object({
      symbol_or_id: z
        .string()
        .openapi({
          param: {
            description: 'The contract symbol or ID.',
            in: 'path',
            name: 'symbol_or_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An option contract',
      content: { 'application/json': { schema: OptionContractSchema } },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            'Contract Not Found': {
              value: { code: 40410000, message: 'option contract TSLA231110C00021000 not found' },
            },
          },
        },
      },
    },
  },
})

export const getV1RebalancingPortfoliosRoute = createRoute({
  method: 'get',
  path: '/v1/rebalancing/portfolios',
  tags: ['Rebalancing'],
  summary: 'List Portfolios',
  description:
    'Lists portfolios.\n\nWhen more than one query parameter is passed, only portfolios meeting all provided values will be returned (logical AND between parameter values).',
  operationId: 'get-v1-rebalancing-portfolios',
  request: {
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of portfolio',
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      description: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Description of portfolio',
            in: 'query',
            name: 'description',
            schema: { type: 'string' },
            required: false,
          },
        }),
      symbol: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Symbol included in portfolio',
            in: 'query',
            name: 'symbol',
            schema: { type: 'string' },
            required: false,
          },
        }),
      portfolio_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Portfolio ID',
            in: 'query',
            name: 'portfolio_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      status: z
        .enum(['active', 'inactive', 'needs_adjustment'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Portfolio Status',
            in: 'query',
            name: 'status',
            schema: { enum: ['active', 'inactive', 'needs_adjustment'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Array of Portfolios',
      content: { 'application/json': { schema: z.array(PortfolioSchema) } },
    },
    401: {
      description:
        'The request is not authenticated. Send a valid API key ID and secret, or a Broker Dashboard session, and try again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { unauthorized: RebalancingUnauthorizedExample },
        },
      },
    },
    403: {
      description:
        'These credentials are not allowed to call this endpoint, or rebalancing is not enabled for the correspondent. Use credentials with the required permission and try again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { insufficient_permission: RebalancingInsufficientPermissionExample },
        },
      },
    },
    422: {
      description:
        'The request failed validation or cannot be completed in its current state. The message describes the reason.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            invalid_query_parameter: RebalancingInvalidQueryParameterExample,
            invalid_request: RebalancingInvalidRequestExample,
          },
        },
      },
    },
    500: {
      description:
        'Something went wrong on our side while handling the request. Retry with backoff. If it keeps happening, contact support.',
      content: {
        'application/json': {
          schema: z.xor([ErrorSchema, UnexpectedErrorSchema]),
          examples: {
            internal_server_error: RebalancingInternalServerErrorExample,
            unexpected_error: RebalancingUnexpectedErrorExample,
          },
        },
      },
    },
  },
})

export const postV1RebalancingPortfoliosRoute = createRoute({
  method: 'post',
  path: '/v1/rebalancing/portfolios',
  tags: ['Rebalancing'],
  summary: 'Create Portfolio',
  description:
    'Creates a portfolio allocation containing securities and/or cash. Having no rebalancing conditions is allowed but the rebalance event would need to be triggered manually. Portfolios created with API may have multiple rebalance_conditions, but only one of type calendar.',
  operationId: 'post-v1-rebalancing-portfolios',
  request: {
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              cooldown_days: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Count of calendar days following a rebalance before a subscription is eligible to trigger another rebalance',
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'Text to describe portfolio' }),
              name: z.string().exactOptional().openapi({ description: 'Name of portfolio' }),
              rebalance_conditions: z
                .array(RebalancingConditionsSchema)
                .exactOptional()
                .openapi({ description: 'Rebalancing conditions for portfolio' }),
              weights: z
                .array(PortfolioWeightRequestSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Weight configuration to portfolio. Sum of "percent" values in the weights array must be 100.00',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PortfolioSchema } } },
    400: {
      description:
        'The request body is missing, is not valid JSON, or has a value of the wrong type. Send a JSON body that matches the endpoint and try again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { request_body_invalid: RebalancingRequestBodyInvalidExample },
        },
      },
    },
    401: {
      description:
        'The request is not authenticated. Send a valid API key ID and secret, or a Broker Dashboard session, and try again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { unauthorized: RebalancingUnauthorizedExample },
        },
      },
    },
    403: {
      description:
        'These credentials are not allowed to call this endpoint, or rebalancing is not enabled for the correspondent. Use credentials with the required permission and try again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { insufficient_permission: RebalancingInsufficientPermissionExample },
        },
      },
    },
    415: {
      description:
        'The Content-Type header is not application/json. Set Content-Type to application/json and send the body again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { unsupported_media_type: RebalancingUnsupportedMediaTypeExample },
        },
      },
    },
    422: {
      description:
        'The request failed validation or cannot be completed in its current state. The message describes the reason.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            asset_not_found: RebalancingAssetNotFoundExample,
            asset_not_fractionable: RebalancingAssetNotFractionableExample,
            asset_symbol_required: RebalancingAssetSymbolRequiredExample,
            calendar_day_not_mmdd: RebalancingCalendarDayNotMmddExample,
            calendar_day_not_number: RebalancingCalendarDayNotNumberExample,
            calendar_day_out_of_range: RebalancingCalendarDayOutOfRangeExample,
            calendar_day_required: RebalancingCalendarDayRequiredExample,
            calendar_subtype_invalid: RebalancingCalendarSubtypeInvalidExample,
            calendar_weekday_invalid: RebalancingCalendarWeekdayInvalidExample,
            cash_weight_percent_empty: RebalancingCashWeightPercentEmptyExample,
            condition_percent_not_decimal: RebalancingConditionPercentNotDecimalExample,
            cooldown_days_invalid: RebalancingCooldownDaysInvalidExample,
            crypto_asset: RebalancingCryptoAssetExample,
            drift_percent_not_decimal: RebalancingDriftPercentNotDecimalExample,
            drift_percent_not_positive: RebalancingDriftPercentNotPositiveExample,
            drift_percent_precision: RebalancingDriftPercentPrecisionExample,
            drift_percent_required: RebalancingDriftPercentRequiredExample,
            drift_subtype_invalid: RebalancingDriftSubtypeInvalidExample,
            duplicate_absolute_drift: RebalancingDuplicateAbsoluteDriftExample,
            duplicate_asset: RebalancingDuplicateAssetExample,
            duplicate_calendar_condition: RebalancingDuplicateCalendarConditionExample,
            duplicate_on_update_condition: RebalancingDuplicateOnUpdateConditionExample,
            duplicate_relative_drift: RebalancingDuplicateRelativeDriftExample,
            invalid_request: RebalancingInvalidRequestExample,
            on_update_day_forbidden: RebalancingOnUpdateDayForbiddenExample,
            on_update_percent_forbidden: RebalancingOnUpdatePercentForbiddenExample,
            on_update_subtype_forbidden: RebalancingOnUpdateSubtypeForbiddenExample,
            schema_validation_failed: RebalancingSchemaValidationFailedExample,
            weight_percent_not_decimal: RebalancingWeightPercentNotDecimalExample,
            weight_percent_not_positive: RebalancingWeightPercentNotPositiveExample,
            weights_must_sum_to_100: RebalancingWeightsMustSumTo_100Example,
          },
        },
      },
    },
    500: {
      description:
        'Something went wrong on our side while handling the request. Check whether the portfolio was created before retrying, because this request is not idempotent. If it keeps happening, contact support.',
      content: {
        'application/json': {
          schema: z.xor([ErrorSchema, UnexpectedErrorSchema]),
          examples: {
            internal_server_error: RebalancingInternalServerErrorExample,
            unexpected_error: RebalancingUnexpectedErrorExample,
          },
        },
      },
    },
  },
})

export const getV1RebalancingPortfoliosPortfolioIdRoute = createRoute({
  method: 'get',
  path: '/v1/rebalancing/portfolios/{portfolio_id}',
  tags: ['Rebalancing'],
  summary: 'Get Portfolio by ID',
  description: 'Get a portfolio by its ID.',
  operationId: 'get-v1-rebalancing-portfolios-portfolio_id',
  request: {
    params: z.object({
      portfolio_id: z
        .string()
        .openapi({
          param: {
            description: 'The Portfolio ID',
            in: 'path',
            name: 'portfolio_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PortfolioSchema } } },
    401: {
      description:
        'The request is not authenticated. Send a valid API key ID and secret, or a Broker Dashboard session, and try again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { unauthorized: RebalancingUnauthorizedExample },
        },
      },
    },
    403: {
      description:
        'These credentials are not allowed to call this endpoint, or rebalancing is not enabled for the correspondent. Use credentials with the required permission and try again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { insufficient_permission: RebalancingInsufficientPermissionExample },
        },
      },
    },
    404: {
      description:
        'No portfolio with this ID exists for your correspondent. Check the portfolio ID and try again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { portfolio_not_found: RebalancingPortfolioNotFoundExample },
        },
      },
    },
    422: {
      description:
        'The request failed validation or cannot be completed in its current state. The message describes the reason.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            invalid_portfolio_id: RebalancingInvalidPortfolioIdExample,
            invalid_request: RebalancingInvalidRequestExample,
          },
        },
      },
    },
    500: {
      description:
        'Something went wrong on our side while handling the request. Retry with backoff. If it keeps happening, contact support.',
      content: {
        'application/json': {
          schema: z.xor([ErrorSchema, UnexpectedErrorSchema]),
          examples: {
            internal_server_error: RebalancingInternalServerErrorExample,
            unexpected_error: RebalancingUnexpectedErrorExample,
          },
        },
      },
    },
  },
})

export const deleteV1RebalancingPortfoliosPortfolioIdRoute = createRoute({
  method: 'delete',
  path: '/v1/rebalancing/portfolios/{portfolio_id}',
  tags: ['Rebalancing'],
  summary: 'Inactivate Portfolio By ID',
  description:
    'Archives a portfolio (soft delete). Only permitted when the portfolio has no active subscriptions. Archived portfolios are hidden from the default list response and cannot be used for new subscriptions.',
  operationId: 'delete-v1-rebalancing-portfolios-portfolio_id',
  request: {
    params: z.object({
      portfolio_id: z
        .string()
        .openapi({
          param: {
            description: 'The Portfolio ID',
            in: 'path',
            name: 'portfolio_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    401: {
      description:
        'The request is not authenticated. Send a valid API key ID and secret, or a Broker Dashboard session, and try again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { unauthorized: RebalancingUnauthorizedExample },
        },
      },
    },
    403: {
      description:
        'These credentials are not allowed to call this endpoint, or rebalancing is not enabled for the correspondent. Use credentials with the required permission and try again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { insufficient_permission: RebalancingInsufficientPermissionExample },
        },
      },
    },
    404: {
      description:
        'No portfolio with this ID exists for your correspondent. Check the portfolio ID and try again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { portfolio_not_found: RebalancingPortfolioNotFoundExample },
        },
      },
    },
    422: {
      description:
        'The request failed validation or cannot be completed in its current state. The message describes the reason.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            invalid_portfolio_id: RebalancingInvalidPortfolioIdExample,
            invalid_request: RebalancingInvalidRequestExample,
            nested_portfolio_weights: RebalancingNestedPortfolioWeightsExample,
            portfolio_already_inactive: RebalancingPortfolioAlreadyInactiveExample,
            portfolio_has_subscriptions: RebalancingPortfolioHasSubscriptionsExample,
          },
        },
      },
    },
    500: {
      description:
        'Something went wrong on our side while handling the request. Retry with backoff. If it keeps happening, contact support.',
      content: {
        'application/json': {
          schema: z.xor([ErrorSchema, UnexpectedErrorSchema]),
          examples: {
            internal_server_error: RebalancingInternalServerErrorExample,
            unexpected_error: RebalancingUnexpectedErrorExample,
          },
        },
      },
    },
  },
})

export const patchV1RebalancingPortfoliosPortfolioIdRoute = createRoute({
  method: 'patch',
  path: '/v1/rebalancing/portfolios/{portfolio_id}',
  tags: ['Rebalancing'],
  summary: 'Update Portfolio by ID',
  description:
    'Updates a portfolio. If weights or conditions are changed, all subscribed accounts will be evaluated for rebalancing at the next opportunity (normal market hours). If a cooldown is active on the portfolio, the rebalancing will occur after the cooldown expired.',
  operationId: 'patch-v1-rebalancing-portfolios-portfolio_id',
  request: {
    params: z.object({
      portfolio_id: z
        .string()
        .openapi({
          param: {
            description: 'The Portfolio ID',
            in: 'path',
            name: 'portfolio_id',
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
              cooldown_days: z
                .int()
                .openapi({ description: 'Used to update portfolio cooldown days.' }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'Used to update portfolio description.' }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Used to update portfolio name.' }),
              rebalancing_conditions: z
                .array(RebalancingConditionsSchema)
                .exactOptional()
                .openapi({ description: 'Used to update portfolio conditions.' }),
              weights: z
                .array(PortfolioWeightRequestSchema)
                .exactOptional()
                .openapi({ description: 'Used to update portfolio weights.' }),
            })
            .openapi({ required: ['cooldown_days'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The updated portfolio',
      content: { 'application/json': { schema: PortfolioSchema } },
    },
    400: {
      description:
        'The request body is missing, is not valid JSON, or has a value of the wrong type. Send a JSON body that matches the endpoint and try again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { request_body_invalid: RebalancingRequestBodyInvalidExample },
        },
      },
    },
    401: {
      description:
        'The request is not authenticated. Send a valid API key ID and secret, or a Broker Dashboard session, and try again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { unauthorized: RebalancingUnauthorizedExample },
        },
      },
    },
    403: {
      description:
        'These credentials are not allowed to call this endpoint, or rebalancing is not enabled for the correspondent. Use credentials with the required permission and try again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { insufficient_permission: RebalancingInsufficientPermissionExample },
        },
      },
    },
    404: {
      description:
        'No portfolio with this ID exists for your correspondent. Check the portfolio ID and try again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { portfolio_not_found: RebalancingPortfolioNotFoundExample },
        },
      },
    },
    415: {
      description:
        'The Content-Type header is not application/json. Set Content-Type to application/json and send the body again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { unsupported_media_type: RebalancingUnsupportedMediaTypeExample },
        },
      },
    },
    422: {
      description:
        'The request failed validation or cannot be completed in its current state. The message describes the reason.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            asset_not_found: RebalancingAssetNotFoundExample,
            asset_not_fractionable: RebalancingAssetNotFractionableExample,
            asset_symbol_required: RebalancingAssetSymbolRequiredExample,
            calendar_day_not_mmdd: RebalancingCalendarDayNotMmddExample,
            calendar_day_not_number: RebalancingCalendarDayNotNumberExample,
            calendar_day_out_of_range: RebalancingCalendarDayOutOfRangeExample,
            calendar_day_required: RebalancingCalendarDayRequiredExample,
            calendar_subtype_invalid: RebalancingCalendarSubtypeInvalidExample,
            calendar_weekday_invalid: RebalancingCalendarWeekdayInvalidExample,
            cash_weight_percent_empty: RebalancingCashWeightPercentEmptyExample,
            condition_percent_not_decimal: RebalancingConditionPercentNotDecimalExample,
            crypto_asset: RebalancingCryptoAssetExample,
            drift_percent_not_decimal: RebalancingDriftPercentNotDecimalExample,
            drift_percent_not_positive: RebalancingDriftPercentNotPositiveExample,
            drift_percent_precision: RebalancingDriftPercentPrecisionExample,
            drift_percent_required: RebalancingDriftPercentRequiredExample,
            drift_subtype_invalid: RebalancingDriftSubtypeInvalidExample,
            duplicate_absolute_drift: RebalancingDuplicateAbsoluteDriftExample,
            duplicate_asset: RebalancingDuplicateAssetExample,
            duplicate_calendar_condition: RebalancingDuplicateCalendarConditionExample,
            duplicate_on_update_condition: RebalancingDuplicateOnUpdateConditionExample,
            duplicate_relative_drift: RebalancingDuplicateRelativeDriftExample,
            empty_portfolio_update: RebalancingEmptyPortfolioUpdateExample,
            invalid_portfolio_id: RebalancingInvalidPortfolioIdExample,
            invalid_request: RebalancingInvalidRequestExample,
            nested_portfolio_weights: RebalancingNestedPortfolioWeightsExample,
            on_update_day_forbidden: RebalancingOnUpdateDayForbiddenExample,
            on_update_percent_forbidden: RebalancingOnUpdatePercentForbiddenExample,
            on_update_subtype_forbidden: RebalancingOnUpdateSubtypeForbiddenExample,
            schema_validation_failed: RebalancingSchemaValidationFailedExample,
            weight_percent_not_decimal: RebalancingWeightPercentNotDecimalExample,
            weight_percent_not_positive: RebalancingWeightPercentNotPositiveExample,
            weights_must_sum_to_100: RebalancingWeightsMustSumTo_100Example,
          },
        },
      },
    },
    500: {
      description:
        'Something went wrong on our side while handling the request. Retry with backoff. If it keeps happening, contact support.',
      content: {
        'application/json': {
          schema: z.xor([ErrorSchema, UnexpectedErrorSchema]),
          examples: {
            internal_server_error: RebalancingInternalServerErrorExample,
            unexpected_error: RebalancingUnexpectedErrorExample,
          },
        },
      },
    },
  },
})

export const getV1RebalancingRunsRoute = createRoute({
  method: 'get',
  path: '/v1/rebalancing/runs',
  tags: ['Rebalancing'],
  summary: 'List All Runs.',
  description: 'Lists runs.',
  operationId: 'get-v1-rebalancing-runs',
  request: {
    query: z.object({
      account_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Any runs for this account_id will be returned',
            in: 'query',
            name: 'account_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Status of portfolio run to filter by',
            in: 'query',
            name: 'status',
            schema: { type: 'string' },
            required: false,
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Type of portfolio run (full_rebalance, invest_cash)',
            in: 'query',
            name: 'type',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page_token: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0).max(1000000),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Offset into the result set for pagination. Defaults to 0 when omitted.',
            in: 'query',
            name: 'page_token',
            schema: {
              default: 0,
              example: 100,
              format: 'int32',
              maximum: 1000000,
              minimum: 0,
              type: 'integer',
            },
            required: false,
          },
          example: 100,
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of runs to return. Defaults to 100.',
            in: 'query',
            name: 'limit',
            schema: { default: 100, example: 100, format: 'int32', minimum: 1, type: 'integer' },
            required: false,
          },
          example: 100,
        }),
    }),
  },
  responses: {
    200: {
      description: 'The runs which match the query',
      content: {
        'application/json': {
          schema: z
            .object({
              next_page_token: z
                .int32()
                .nullable()
                .openapi({
                  description:
                    'Offset to use as the next page_token, or null when there are no more\nruns. Set only when the page is full (result count equals the\nrequested limit).\n',
                  example: 100,
                }),
              runs: z
                .array(PortfolioRunSchema)
                .openapi({
                  example: [
                    {
                      account_id: '4db36989-6565-4011-9126-39fe6b3d9bf6',
                      id: '0f9e8a7b-1c2d-4e3f-9a0b-1c2d3e4f5a6b',
                      initiated_from: 'api',
                      portfolio_id: '9b2c1d4e-8f7a-4c3b-9d2e-1f0a8b7c6d5e',
                      status: 'COMPLETED_SUCCESS',
                      type: 'full_rebalance',
                      updated_at: '2025-01-15T16:30:00Z',
                    },
                  ],
                }),
            })
            .openapi({ required: ['runs', 'next_page_token'] }),
        },
      },
    },
    401: {
      description:
        'The request is not authenticated. Send a valid API key ID and secret, or a Broker Dashboard session, and try again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { unauthorized: RebalancingUnauthorizedExample },
        },
      },
    },
    403: {
      description:
        'These credentials are not allowed to call this endpoint, or rebalancing is not enabled for the correspondent. Use credentials with the required permission and try again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { insufficient_permission: RebalancingInsufficientPermissionExample },
        },
      },
    },
    422: {
      description:
        'The request failed validation or cannot be completed in its current state. The message describes the reason.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            invalid_query_parameter: RebalancingInvalidQueryParameterExample,
            invalid_request: RebalancingInvalidRequestExample,
          },
        },
      },
    },
    500: {
      description:
        'Something went wrong on our side while handling the request. Retry with backoff. If it keeps happening, contact support.',
      content: {
        'application/json': {
          schema: z.xor([ErrorSchema, UnexpectedErrorSchema]),
          examples: {
            internal_server_error: RebalancingInternalServerErrorExample,
            unexpected_error: RebalancingUnexpectedErrorExample,
          },
        },
      },
    },
  },
})

export const postV1RebalancingRunsRoute = createRoute({
  method: 'post',
  path: '/v1/rebalancing/runs',
  tags: ['Rebalancing'],
  summary: 'Create Run',
  description:
    "Creates a rebalance run.\n\nOmit `weights` or provide an empty array to create a subscription-driven run using the account's active subscription. Provide a non-empty `weights` array to create a manual one-off run. A manual run is rejected if the account already has an active subscription.\n\nThe determination of a run's orders and the execution of a run take place during normal market hours. Runs can be initiated outside normal market hours but remain `QUEUED` until normal market hours.\n\nOnly one run in a non-terminal status is allowed at any time.",
  operationId: 'post-v1-rebalancing-runs',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              account_id: z.uuid().openapi({ description: 'The account to create the run for.' }),
              amount: z
                .union([z.string(), z.number()])
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Optional decimal amount used by the run. JSON strings and numbers are accepted.',
                }),
              type: z
                .enum(['full_rebalance', 'invest_cash'])
                .openapi({ description: 'The kind of rebalance run to create.' }),
              weights: z
                .array(PortfolioWeightRequestSchema)
                .exactOptional()
                .openapi({
                  description:
                    "Asset allocation weights. Omit this field or provide an empty array to use the account's active subscription. Provide a non-empty array to create a manual one-off run. A manual run is rejected if the account already has an active subscription.",
                }),
            })
            .openapi({ required: ['account_id', 'type'] }),
          examples: {
            manualRun: {
              summary: 'Manual one-off rebalance run',
              value: {
                account_id: 'bf2b0f93-f296-4276-a9cf-288586cf4fb7',
                type: 'full_rebalance',
                weights: [
                  { percent: '35', symbol: 'AAPL', type: 'asset' },
                  { percent: '20', symbol: 'TSLA', type: 'asset' },
                  { percent: '45', symbol: 'SPY', type: 'asset' },
                ],
              },
            },
            subscriptionRun: {
              summary: 'Subscription-driven rebalance run',
              value: { account_id: 'bf2b0f93-f296-4276-a9cf-288586cf4fb7', type: 'full_rebalance' },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK' },
    400: {
      description:
        'The request body is missing, is not valid JSON, or has a value of the wrong type. Send a JSON body that matches the endpoint and try again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { request_body_invalid: RebalancingRequestBodyInvalidExample },
        },
      },
    },
    401: {
      description:
        'The request is not authenticated. Send a valid API key ID and secret, or a Broker Dashboard session, and try again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { unauthorized: RebalancingUnauthorizedExample },
        },
      },
    },
    403: {
      description:
        'These credentials are not allowed to perform this action, or rebalancing is not permitted for this correspondent or account.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            insufficient_permission: RebalancingInsufficientPermissionExample,
            jit_correspondent: RebalancingJitCorrespondentExample,
            non_usd_account: RebalancingNonUsdAccountExample,
          },
        },
      },
    },
    404: {
      description: 'The resource does not exist or is not visible to this correspondent.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            account_not_found_for_id: RebalancingAccountNotFoundForIdExample,
            correspondent_not_found: RebalancingCorrespondentNotFoundExample,
            portfolio_not_found: RebalancingPortfolioNotFoundExample,
            subscription_required: RebalancingSubscriptionRequiredExample,
          },
        },
      },
    },
    415: {
      description:
        'The Content-Type header is not application/json. Set Content-Type to application/json and send the body again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { unsupported_media_type: RebalancingUnsupportedMediaTypeExample },
        },
      },
    },
    422: {
      description:
        'The request failed validation or cannot be completed in its current state. The message describes the reason.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            account_not_funded: RebalancingAccountNotFundedExample,
            active_run_exists: RebalancingActiveRunExistsExample,
            amount_not_decimal: RebalancingAmountNotDecimalExample,
            asset_not_found: RebalancingAssetNotFoundExample,
            asset_not_fractionable: RebalancingAssetNotFractionableExample,
            asset_symbol_required: RebalancingAssetSymbolRequiredExample,
            cash_weight_percent_empty: RebalancingCashWeightPercentEmptyExample,
            crypto_asset: RebalancingCryptoAssetExample,
            duplicate_asset: RebalancingDuplicateAssetExample,
            invalid_request: RebalancingInvalidRequestExample,
            manual_run_with_subscription: RebalancingManualRunWithSubscriptionExample,
            partial_liquidation_unsupported: RebalancingPartialLiquidationUnsupportedExample,
            schema_validation_failed: RebalancingSchemaValidationFailedExample,
            weight_percent_not_decimal: RebalancingWeightPercentNotDecimalExample,
            weight_percent_not_positive: RebalancingWeightPercentNotPositiveExample,
            weights_must_sum_to_100: RebalancingWeightsMustSumTo_100Example,
          },
        },
      },
    },
    500: {
      description:
        'Something went wrong on our side while handling the request. Check whether the run was created before retrying, because this request is not idempotent. If it keeps happening, contact support.',
      content: {
        'application/json': {
          schema: z.xor([ErrorSchema, UnexpectedErrorSchema]),
          examples: {
            internal_server_error: RebalancingInternalServerErrorExample,
            unexpected_error: RebalancingUnexpectedErrorExample,
          },
        },
      },
    },
  },
})

export const getV1RebalancingRunsRunIdRoute = createRoute({
  method: 'get',
  path: '/v1/rebalancing/runs/{run_id}',
  tags: ['Rebalancing'],
  summary: 'Get Run by ID',
  description: 'Get a run by its ID.',
  operationId: 'get-v1-rebalancing-runs-run_id',
  request: {
    params: z.object({
      run_id: z
        .string()
        .openapi({
          param: {
            description: 'the id of the portfolio run',
            in: 'path',
            name: 'run_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The run object',
      content: { 'application/json': { schema: PortfolioRunSchema } },
    },
    401: {
      description:
        'The request is not authenticated. Send a valid API key ID and secret, or a Broker Dashboard session, and try again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { unauthorized: RebalancingUnauthorizedExample },
        },
      },
    },
    403: {
      description:
        'These credentials are not allowed to call this endpoint, or rebalancing is not enabled for the correspondent. Use credentials with the required permission and try again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { insufficient_permission: RebalancingInsufficientPermissionExample },
        },
      },
    },
    404: {
      description:
        'No rebalance run with this ID exists for your correspondent. Check the run ID and try again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { run_not_found: RebalancingRunNotFoundExample },
        },
      },
    },
    422: {
      description:
        'The request failed validation or cannot be completed in its current state. The message describes the reason.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            invalid_request: RebalancingInvalidRequestExample,
            invalid_run_id: RebalancingInvalidRunIdExample,
          },
        },
      },
    },
    500: {
      description:
        'Something went wrong on our side while handling the request. Retry with backoff. If it keeps happening, contact support.',
      content: {
        'application/json': {
          schema: z.xor([ErrorSchema, UnexpectedErrorSchema]),
          examples: {
            internal_server_error: RebalancingInternalServerErrorExample,
            unexpected_error: RebalancingUnexpectedErrorExample,
          },
        },
      },
    },
  },
})

export const deleteV1RebalancingRunsRunIdRoute = createRoute({
  method: 'delete',
  path: '/v1/rebalancing/runs/{run_id}',
  tags: ['Rebalancing'],
  summary: 'Cancel Run by ID',
  description:
    "Cancels a run so it does not start, or is not retried. Only a run in QUEUED or IN_PROGRESS can be canceled. A run in any other status is rejected. Canceling does not stop a run that is already placing orders: those orders are not canceled, and the run's final status can replace CANCELED.",
  operationId: 'delete-v1-rebalancing-runs-run_id',
  request: {
    params: z.object({
      run_id: z
        .string()
        .openapi({
          param: {
            description: 'the id of the portfolio run',
            in: 'path',
            name: 'run_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    401: {
      description:
        'The request is not authenticated. Send a valid API key ID and secret, or a Broker Dashboard session, and try again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { unauthorized: RebalancingUnauthorizedExample },
        },
      },
    },
    403: {
      description:
        'These credentials are not allowed to call this endpoint, or rebalancing is not enabled for the correspondent. Use credentials with the required permission and try again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { insufficient_permission: RebalancingInsufficientPermissionExample },
        },
      },
    },
    404: {
      description:
        'No rebalance run with this ID exists for your correspondent. Check the run ID and try again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { run_not_found: RebalancingRunNotFoundExample },
        },
      },
    },
    422: {
      description:
        'The request failed validation or cannot be completed in its current state. The message describes the reason.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            invalid_request: RebalancingInvalidRequestExample,
            invalid_run_id: RebalancingInvalidRunIdExample,
            run_cannot_be_canceled: RebalancingRunCannotBeCanceledExample,
          },
        },
      },
    },
    500: {
      description:
        'Something went wrong on our side while handling the request. Retry with backoff. If it keeps happening, contact support.',
      content: {
        'application/json': {
          schema: z.xor([ErrorSchema, UnexpectedErrorSchema]),
          examples: {
            internal_server_error: RebalancingInternalServerErrorExample,
            unexpected_error: RebalancingUnexpectedErrorExample,
          },
        },
      },
    },
  },
})

export const getV1RebalancingSubscriptionsRoute = createRoute({
  method: 'get',
  path: '/v1/rebalancing/subscriptions',
  tags: ['Rebalancing'],
  summary: 'List All Subscriptions',
  description: 'Lists subscriptions',
  operationId: 'get-v1-rebalancing-subscriptions',
  request: {
    query: z.object({
      account_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Any subscriptions for this account_id will be returned',
            in: 'query',
            name: 'account_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      portfolio_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Portfolio ID',
            in: 'query',
            name: 'portfolio_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page_token: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0).max(1000000),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Offset into the result set for pagination. Defaults to 0 when omitted.',
            in: 'query',
            name: 'page_token',
            schema: {
              default: 0,
              example: 100,
              format: 'int32',
              maximum: 1000000,
              minimum: 0,
              type: 'integer',
            },
            required: false,
          },
          example: 100,
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of subscriptions to return. Defaults to 100.',
            in: 'query',
            name: 'limit',
            schema: { default: 100, example: 100, format: 'int32', minimum: 1, type: 'integer' },
            required: false,
          },
          example: 100,
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
              next_page_token: z
                .int32()
                .nullable()
                .openapi({
                  description:
                    'Offset to use as the next page_token, or null when there are no more\nsubscriptions. Set only when the page is full (result count equals the\nrequested limit).\n',
                  example: 100,
                }),
              subscriptions: z.array(PortfolioSubscriptionSchema),
            })
            .openapi({ required: ['subscriptions', 'next_page_token'] }),
        },
      },
    },
    401: {
      description:
        'The request is not authenticated. Send a valid API key ID and secret, or a Broker Dashboard session, and try again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { unauthorized: RebalancingUnauthorizedExample },
        },
      },
    },
    403: {
      description:
        'These credentials are not allowed to call this endpoint, or rebalancing is not enabled for the correspondent. Use credentials with the required permission and try again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { insufficient_permission: RebalancingInsufficientPermissionExample },
        },
      },
    },
    422: {
      description:
        'The request failed validation or cannot be completed in its current state. The message describes the reason.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            invalid_query_parameter: RebalancingInvalidQueryParameterExample,
            invalid_request: RebalancingInvalidRequestExample,
          },
        },
      },
    },
    500: {
      description:
        'Something went wrong on our side while handling the request. Retry with backoff. If it keeps happening, contact support.',
      content: {
        'application/json': {
          schema: z.xor([ErrorSchema, UnexpectedErrorSchema]),
          examples: {
            internal_server_error: RebalancingInternalServerErrorExample,
            unexpected_error: RebalancingUnexpectedErrorExample,
          },
        },
      },
    },
  },
})

export const postV1RebalancingSubscriptionsRoute = createRoute({
  method: 'post',
  path: '/v1/rebalancing/subscriptions',
  tags: ['Rebalancing'],
  summary: 'Create Subscription',
  description: 'Creates a subscription between an account and a portfolio.',
  operationId: 'post-v1-rebalancing-subscriptions',
  request: {
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              account_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Account ID. Account must be active and the account must not have any active subscriptions already (only 1 is permitted at a time)',
                }),
              portfolio_id: z
                .string()
                .exactOptional()
                .openapi({ description: 'Portfolio ID. Portfolio must be active' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PortfolioSubscriptionSchema } },
    },
    400: {
      description:
        'The request body is missing, is not valid JSON, or has a value of the wrong type. Send a JSON body that matches the endpoint and try again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { request_body_invalid: RebalancingRequestBodyInvalidExample },
        },
      },
    },
    401: {
      description:
        'The request is not authenticated. Send a valid API key ID and secret, or a Broker Dashboard session, and try again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { unauthorized: RebalancingUnauthorizedExample },
        },
      },
    },
    403: {
      description:
        'These credentials are not allowed to perform this action, or rebalancing is not permitted for this correspondent or account.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            insufficient_permission: RebalancingInsufficientPermissionExample,
            jit_correspondent: RebalancingJitCorrespondentExample,
            non_usd_account: RebalancingNonUsdAccountExample,
          },
        },
      },
    },
    404: {
      description:
        'No account with that ID exists for your correspondent. Check the account ID and try again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { account_not_found: RebalancingAccountNotFoundExample },
        },
      },
    },
    415: {
      description:
        'The Content-Type header is not application/json. Set Content-Type to application/json and send the body again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { unsupported_media_type: RebalancingUnsupportedMediaTypeExample },
        },
      },
    },
    422: {
      description:
        'The request failed validation or cannot be completed in its current state. The message describes the reason.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            active_run_exists: RebalancingActiveRunExistsExample,
            crypto_position: RebalancingCryptoPositionExample,
            invalid_request: RebalancingInvalidRequestExample,
            open_orders: RebalancingOpenOrdersExample,
            pattern_day_trader: RebalancingPatternDayTraderExample,
            portfolio_unavailable: RebalancingPortfolioUnavailableExample,
            schema_validation_failed: RebalancingSchemaValidationFailedExample,
            subscription_already_exists: RebalancingSubscriptionAlreadyExistsExample,
          },
        },
      },
    },
    500: {
      description:
        'Something went wrong on our side while handling the request. Check whether the subscription was created before retrying, because this request is not idempotent. If it keeps happening, contact support.',
      content: {
        'application/json': {
          schema: z.xor([ErrorSchema, UnexpectedErrorSchema]),
          examples: {
            internal_server_error: RebalancingInternalServerErrorExample,
            unexpected_error: RebalancingUnexpectedErrorExample,
          },
        },
      },
    },
  },
})

export const getV1RebalancingSubscriptionsSubscriptionIdRoute = createRoute({
  method: 'get',
  path: '/v1/rebalancing/subscriptions/{subscription_id}',
  tags: ['Rebalancing'],
  summary: 'Get Subscription by ID',
  description: 'Get a subscription by its ID.',
  operationId: 'get-v1-rebalancing-subscriptions-subscription_id',
  request: {
    params: z.object({
      subscription_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'subscription_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The portfolio subscription',
      content: { 'application/json': { schema: PortfolioSubscriptionSchema } },
    },
    401: {
      description:
        'The request is not authenticated. Send a valid API key ID and secret, or a Broker Dashboard session, and try again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { unauthorized: RebalancingUnauthorizedExample },
        },
      },
    },
    403: {
      description:
        'These credentials are not allowed to call this endpoint, or rebalancing is not enabled for the correspondent. Use credentials with the required permission and try again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { insufficient_permission: RebalancingInsufficientPermissionExample },
        },
      },
    },
    404: {
      description:
        'No subscription with this ID exists for your correspondent. Check the subscription ID and try again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { subscription_not_found: RebalancingSubscriptionNotFoundExample },
        },
      },
    },
    422: {
      description:
        'The request failed validation or cannot be completed in its current state. The message describes the reason.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            invalid_request: RebalancingInvalidRequestExample,
            invalid_subscription_id: RebalancingInvalidSubscriptionIdExample,
          },
        },
      },
    },
    500: {
      description:
        'Something went wrong on our side while handling the request. Retry with backoff. If it keeps happening, contact support.',
      content: {
        'application/json': {
          schema: z.xor([ErrorSchema, UnexpectedErrorSchema]),
          examples: {
            internal_server_error: RebalancingInternalServerErrorExample,
            unexpected_error: RebalancingUnexpectedErrorExample,
          },
        },
      },
    },
  },
})

export const deleteV1RebalancingSubscriptionsSubscriptionIdRoute = createRoute({
  method: 'delete',
  path: '/v1/rebalancing/subscriptions/{subscription_id}',
  tags: ['Rebalancing'],
  summary: 'Unsubscribe Account (Delete Subscription)',
  description: 'Deletes the subscription which stops the rebalancing of an account.',
  operationId: 'delete-v1-rebalancing-subscriptions-subscription_id',
  request: {
    params: z.object({
      subscription_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'subscription_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    401: {
      description:
        'The request is not authenticated. Send a valid API key ID and secret, or a Broker Dashboard session, and try again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { unauthorized: RebalancingUnauthorizedExample },
        },
      },
    },
    403: {
      description:
        'These credentials are not allowed to call this endpoint, or rebalancing is not enabled for the correspondent. Use credentials with the required permission and try again.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { insufficient_permission: RebalancingInsufficientPermissionExample },
        },
      },
    },
    422: {
      description:
        'The request failed validation or cannot be completed in its current state. The message describes the reason.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            invalid_request: RebalancingInvalidRequestExample,
            invalid_subscription_id: RebalancingInvalidSubscriptionIdExample,
            subscription_nothing_to_delete: RebalancingSubscriptionNothingToDeleteExample,
          },
        },
      },
    },
    500: {
      description:
        'Something went wrong on our side while handling the request. Retry with backoff. If it keeps happening, contact support.',
      content: {
        'application/json': {
          schema: z.xor([ErrorSchema, UnexpectedErrorSchema]),
          examples: {
            internal_server_error: RebalancingInternalServerErrorExample,
            unexpected_error: RebalancingUnexpectedErrorExample,
          },
        },
      },
    },
  },
})

export const getV1ReportingEodAggregatePositionsRoute = createRoute({
  method: 'get',
  path: '/v1/reporting/eod/aggregate_positions',
  tags: ['Reporting'],
  summary: 'Retrieve Aggregate Positions',
  description:
    "This API endpoint provides reporting data to partners for aggregate common stock and crypto positions across their account base. Partners can view historical snapshots of their holding across their entire account base. Please note that this API utilizes an 8:00 pm (EST) cutoff which aligns with the end of the Securities extended hours trading session as well as Alpaca's 24 hour Crypto trading window. Additionally, the endpoint supports indexing to help the partner efficiently filter by key information including date and symbol while being able to include or remove firm accounts.",
  operationId: 'get-v1-reporting-eod-aggregate_positions',
  request: {
    query: z.object({
      date: z.iso
        .date()
        .openapi({
          param: {
            description: '"YYYY-MM-DD" format',
            in: 'query',
            name: 'date',
            required: true,
            schema: { format: 'date', type: 'string' },
          },
        }),
      symbols: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Comma-separated symbols. If populated, then only the specified symbols will be returned. If null, then all symbols will be included in the response.',
            in: 'query',
            name: 'symbols',
            schema: { type: 'string' },
            required: false,
          },
        }),
      firm_accounts: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Defaults to True which includes firm accounts. Passing False will exclude all firm accounts.',
            in: 'query',
            name: 'firm_accounts',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Array of objects, each object pertains to the date specified in the request and a unique asset. See parameters below. Notes: Returns an empty array for non-trading days, assets with no positions are omitted.',
      content: { 'application/json': { schema: z.array(AggregatePositionResponseSchema) } },
    },
  },
})

export const getV1ReportingEodCashInterestRoute = createRoute({
  method: 'get',
  path: '/v1/reporting/eod/cash_interest',
  tags: ['Reporting', 'Cash Interest'],
  summary: 'Retrieve EOD Cash Interest Details',
  description:
    "This API retrieves a list of cash interest details for the given date(s) for a single account or all accounts. End-of-day (EOD) details are typically accessible after 8:00pm Eastern Time (ET) and reflect that day's ending state across cash balances, accrued interest, accrued fees, as well as additional ancillary details.",
  operationId: 'get-v1-get-eod-cash-interest-report',
  request: {
    query: z.object({
      account_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Account globally unique identifier. If not provided, the report will be generated for all accounts.',
            in: 'query',
            name: 'account_id',
            required: false,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A date in the format YYYY-MM-DD. If not provided, the report will be generated for the most recent date this report is available.',
            in: 'query',
            name: 'date',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      after: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A date in the format YYYY-MM-DD, valid only if account_id is provided and date is not provided. If not provided, this will use `before` value. If neither is provided the most recent available date is used for both `before` and `after`.',
            in: 'query',
            name: 'after',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      before: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A date in the format YYYY-MM-DD, valid only if account_id is provided and date is not provided. If not provided, this will use the most recent available date.',
            in: 'query',
            name: 'before',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      direction: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The direction to use for sorting responses, either `asc` or `desc`. Only valid for account_id queries, for which only sorting by date is supported. Defaults to `desc`.',
            in: 'query',
            name: 'direction',
            required: false,
            schema: { type: 'string' },
          },
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(10000),
        )
        .default(1000)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The page size, used for paginating responses. Defaults to 1000, with a maximum of 10,000.',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { default: 1000, maximum: 10000, minimum: 1, type: 'integer' },
          },
        }),
      page_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token used to retrieve the next page for paginated queries. If provided the response will begin at the next page of the results for the response from which the `next_page_token` is used.',
            in: 'query',
            name: 'page_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Successful response, returns a list of daily interest accruals and an optional next page token.',
      content: { 'application/json': { schema: EoDCashInterestReportResponseSchema } },
    },
    400: {
      description:
        'A client error occurred. Please check the provided request parameters and try again.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: {
      description: 'Unauthorized. Please check your API key and try again.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    429: {
      description: 'Too many requests. Please wait a moment and try again.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'A server error occurred. Please contact Alpaca.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getV1ReportingEodPositionsRoute = createRoute({
  method: 'get',
  path: '/v1/reporting/eod/positions',
  tags: ['Reporting'],
  summary: 'Retrieve EOD Positions',
  description:
    "This API retrieves a comprehensive list of end-of-day positions for all accounts. End-of-day (EOD) positions are typically accessible after 4:00 am Eastern Time (ET) on the following day, providing a comprehensive view of the day's closing positions across all accounts.\nThis API currently only supports retrieving EOD positions for the last trading date.",
  operationId: 'get-v1-reporting-eod-positions',
  request: {
    query: z.object({
      account_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter the results by account_id (optional).',
            in: 'query',
            name: 'account_id',
            schema: { format: 'uuid', type: 'string' },
            required: false,
          },
        }),
      asset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter the results by asset ID or symbol (optional).',
            in: 'query',
            name: 'asset',
            schema: { type: 'string' },
            required: false,
          },
        }),
      asof: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The positions date in 'YYYY-MM-DD' format. It's recommended to provide this parameter when the 'page' parameter is specified, to ensure precise data retrieval based on the desired date.\nOnly previous trading date is supported.",
            in: 'query',
            name: 'asof',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      page_token: PageTokenParamsSchema,
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of accounts to display per page (default=1000, max=10000).',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Successful response containing the end-of-day positions for the specified accounts.',
      content: {
        'application/json': {
          schema: z
            .object({
              asof: z.iso
                .date()
                .exactOptional()
                .openapi({ description: "The date of the snapshot in the 'YYYY-MM-DD' format." }),
              next_page_token: NextPageTokenSchema.exactOptional(),
              positions: z
                .record(z.string(), z.array(PositionSchema))
                .exactOptional()
                .openapi({
                  description: 'A detailed map of account IDs to their respective positions.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    422: {
      description:
        'This can be returned if the asof param does not match the latest snap available at Alpaca.',
    },
  },
})

export const getV1TradingAccountsAccountIdAccountRoute = createRoute({
  method: 'get',
  path: '/v1/trading/accounts/{account_id}/account',
  tags: ['Accounts'],
  summary: 'Retrieve Trading Details for an Account',
  description:
    'As a broker you can view more trading details about your users.\n\nThe response is a Trading Account model.',
  operationId: 'getTradingAccount',
  request: { params: z.object({ account_id: AccountIDParamsSchema }) },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: TradeAccountSchema } } },
  },
})

export const patchV1TradingAccountsAccountIdAccountConfigurationsRoute = createRoute({
  method: 'patch',
  path: '/v1/trading/accounts/{account_id}/account/configurations',
  tags: ['Trading'],
  summary: 'Update Trading Configurations for an Account',
  description:
    "You can also set the margin settings for your users' account by passing a PATCH request. By default any account with funds under $2,000 is set a margin multiplier of 1.0, and accounts with over $2,000 are set to 2.0.",
  operationId: 'patch-PATCH-v1-trading-accounts-account_id-account-configurations',
  request: {
    params: z.object({
      account_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'account_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: AccountConfigurationsSchema } } },
  },
  responses: {
    200: {
      description: 'Response will contain the account configuration settings for the account.',
      content: { 'application/json': { schema: AccountConfigurationsSchema } },
    },
  },
})

export const getV1TradingAccountsAccountIdAccountPortfolioHistoryRoute = createRoute({
  method: 'get',
  path: '/v1/trading/accounts/{account_id}/account/portfolio/history',
  tags: ['Portfolio History'],
  summary: 'Get Account Portfolio History',
  description:
    'Returns timeseries data about equity and profit/loss (P/L) of the account in requested timespan.',
  operationId: 'get-v1-trading-accounts-account_id-account-portfolio-history',
  request: {
    params: z.object({
      account_id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'account_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
      period: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The total duration of history being requested defined as `number` + `unit`.\nValid units are: `D`, `W`, `M`, and `A` (annum).\n\nThe following restrictions apply:\n- MUST NOT be included if both `start` and `end` are provided.\n- Default value is `1M` when `start` or `end` is omitted.\n',
            in: 'query',
            name: 'period',
            schema: { examples: ['7D', '4W', '1M', '1A'], type: 'string' },
            required: false,
          },
          examples: ['7D', '4W', '1M', '1A'],
        }),
      timeframe: PortfolioHistoryTimeframeSchema.openapi({
        param: {
          description:
            'The resolution of time window. 1Min, 5Min, 15Min, 1H, or 1D. If omitted, 1Min for less than 7 days period,\n15Min for less than 30 days, or otherwise 1D.\n\nFor queries with longer than 30 days of `period`, the system only accepts 1D as `timeframe`.\n',
          in: 'query',
          name: 'timeframe',
          schema: { $ref: '#/components/schemas/PortfolioHistoryTimeframe' },
          required: false,
        },
      }).exactOptional(),
      intraday_reporting: z
        .enum(['market_hours', 'extended_hours', 'continuous'])
        .default('market_hours')
        .exactOptional()
        .openapi({
          param: {
            description:
              'For intraday resolutions (<1D) this specifies which timestamps to return data points for:\n\nAllowed values are:\n- **market_hours**\n\n  Only timestamps for the core equity trading hours are returned (usually 9:30am to 4:00pm, trading days only).\n\n- **extended_hours**\n\n  Returns timestamps for the whole session including extended hours (usually 4:00am to 8:00pm, trading days only).\n\n- **continuous**\n\n  Returns price data points 24/7 (for off-session times too). To calculate the equity values we are using the following prices:\n\n  Between 4:00am and 10:00pm on trading days the valuation will be calculated based on the last trade (extended hours and normal hours respectively).\n\n  After 10:00pm, until the next session open the equities will be valued at their official closing price on the primary exchange.\n',
            in: 'query',
            name: 'intraday_reporting',
            schema: {
              default: 'market_hours',
              enum: ['market_hours', 'extended_hours', 'continuous'],
              type: 'string',
            },
            required: false,
          },
        }),
      start: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The first timestamp of the timeseries.\n\nAccepted formats:\n- ISO 8601 date stamp (e.g. "2021-03-16", parsed as UTC)\n- ISO 8601 datetime (e.g. "2021-03-16T18:38:01Z", "2021-03-16T18:38:01-04:00")\n- Unix timestamp\n\nDefaults to `end - period`.\n\nWhen `timeframe=1D`, if `start` occurs any time on a trading day (including outside of market hours), `start` is set to the closing time of the current trading day. Otherwise, `start` is rolled forward to the closing time of the next available trading day.\n\nWhen `timeframe != 1D`, one of the following rules is applied.\n- When `intraday_reporting=continuous`, `start` is rolled back to the nearest `timeframe` interval.\n- When both `start` and `end` are omitted, `start` is rolled back to the first market/session open that is encountered.\n- When `intraday_reporting != continuous` and `start` is a trading day:\n  - roll forward to the first market/session open if `start` is outside of market/session hours, or\n  - roll back to the nearest `timeframe` interval if `start` occurs during trading hours.\n- Roll forward to the next market/session open if `start` does not fall on a trading day.\n\n`start` may be combined with `end` or `period`, but cannot be combined with both.\n',
            in: 'query',
            name: 'start',
            schema: {
              examples: ['2021-03-16T18:38:01Z', '2021-03-16T18:38:01-04:00', '2021-03-16'],
              type: 'string',
            },
            required: false,
          },
          examples: ['2021-03-16T18:38:01Z', '2021-03-16T18:38:01-04:00', '2021-03-16'],
        }),
      pnl_reset: z
        .enum(['no_reset', 'per_day'])
        .default('per_day')
        .exactOptional()
        .openapi({
          param: {
            description:
              '`pnl_reset` defines how we are calculating the baseline values for Profit And Loss (pnl) for queries with `timeframe` less than 1D (intraday queries).\n\nThe default behavior for intraday queries is that we reset the pnl value to the previous day\'s closing equity for each **trading** day.\n\nIn case of crypto (given its continuous nature), this might not be desired: specifying "no_reset" disables this behavior and all pnl values\nreturned will be relative to the closing equity of the previous trading day.\n\nFor 1D resolution all PnL values are calculated relative to the `base_value`, we are not resetting the base value.\n',
            in: 'query',
            name: 'pnl_reset',
            schema: { default: 'per_day', enum: ['no_reset', 'per_day'], type: 'string' },
            required: false,
          },
        }),
      end: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The last timestamp of the timeseries.\n\nAccepted formats:\n- ISO 8601 date stamp (e.g. "2021-03-16", parsed as UTC)\n- ISO 8601 datetime (e.g. "2021-03-16T18:38:01Z", "2021-03-16T18:38:01-04:00")\n- Unix timestamp\n\nDefaults to `start + period` when `start` is provided.\n\nWhen `start` and `end` are omitted, or if `end` is AFTER the request time, `end` defaults to\n- The most recent session open timestamp if `intraday_reporting=extended_hours`\n- The most recent market open timestamp if `intraday_reporting=market_hours`\n- The current timestamp if `intraday_reporting=continuous`\n\n`end` may be combined with `start` or `period`, but cannot be combined with both.\n',
            in: 'query',
            name: 'end',
            schema: {
              examples: ['2021-03-16T18:38:01Z', '2021-03-16T18:38:01-04:00', '2021-03-16'],
              type: 'string',
            },
            required: false,
          },
          examples: ['2021-03-16T18:38:01Z', '2021-03-16T18:38:01-04:00', '2021-03-16'],
        }),
      extended_hours: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '**deprecated**: Users are strongly advised to **rely on the `intraday_reporting` query parameter** for better control\nof the reporting range.\n\nIf true, include extended hours in the result. This is effective only for timeframe less than 1D.\n',
            in: 'query',
            name: 'extended_hours',
            schema: { type: 'string' },
            required: false,
          },
        }),
      cashflow_types: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The cashflow activities to include in the report. One of 'ALL', 'NONE', or a comma-separated list of activity types.",
            examples: {
              all: { value: 'ALL' },
              cash_transfers: { summary: 'Include cash movements.', value: 'JNLC,CSD,CSW' },
              none: { value: 'NONE' },
            },
            in: 'query',
            name: 'cashflow_types',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: {
        'application/json': {
          schema: PortfolioHistorySchema,
          examples: {
            'example-cashflows': {
              value: {
                base_value: 8413.04,
                base_value_asof: '2026-04-06',
                cashflow: { CSD: [9.93, 10.13, 10.16, 0], DIV: [0, 0, 0.63, 0] },
                equity: [8425.21, 8639.77, 8766.1, 8835.31],
                profit_loss: [12.17, 214.56, 126.33, 69.21],
                profit_loss_pct: [0.0014, 0.0255, 0.0146, 0.0079],
                timeframe: '1D',
                timestamp: [1775606400, 1775692800, 1775779200, 1775865600],
              },
            },
            'example-intraday-query-15min-1d': {
              value: {
                base_value: 2774.16,
                base_value_asof: '2023-10-18',
                cashflow: {
                  CSD: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0,
                  ],
                },
                equity: [
                  2773.79, 2769.04, 2768.65, 2765.11, 2763.03, 2763.17, 2763.17, 2763.47, 2763.91,
                  2768.13, 2774.98, 2757.94, 2757.65, 2774.54, 2775.58, 2775.28, 2767.9, 2762.26,
                  2762.56, 2756.99, 2756.84, 2752.43, 2752.13, 2748.44, 2751.23, 2747.54, 2748.74,
                ],
                profit_loss: [
                  -0.37, -5.12, -5.51, -9.05, -11.13, -10.99, -10.99, -10.69, -10.25, -6.03, 0.82,
                  -16.22, -16.51, 0.38, 1.42, 1.12, -6.26, -11.9, -11.6, -17.17, -17.32, -21.73,
                  -22.03, -25.72, -22.93, -26.62, -25.42,
                ],
                profit_loss_pct: [
                  -0.0001, -0.0018, -0.002, -0.0033, -0.004, -0.004, -0.004, -0.0039, -0.0037,
                  -0.0022, 0.0003, -0.0058, -0.006, 0.0001, 0.0005, 0.0004, -0.0023, -0.0043,
                  -0.0042, -0.0062, -0.0062, -0.0078, -0.0079, -0.0093, -0.0083, -0.0096, -0.0092,
                ],
                timeframe: '15Min',
                timestamp: [
                  1697722200, 1697723100, 1697724000, 1697724900, 1697725800, 1697726700,
                  1697727600, 1697728500, 1697729400, 1697730300, 1697731200, 1697732100,
                  1697733000, 1697733900, 1697734800, 1697735700, 1697736600, 1697737500,
                  1697738400, 1697739300, 1697740200, 1697741100, 1697742000, 1697742900,
                  1697743800, 1697744700, 1697745600,
                ],
              },
            },
            'example-query-1d-7d': {
              value: {
                base_value: 2784.79,
                cashflow: { CSD: [0, 0, 100, 0, 0] },
                equity: [2784.79, 2794.79, 2805.46, 2774.16, 2748.73],
                profit_loss: [0, 10.0022, 10.6692, -31.2996, -25.4232],
                profit_loss_pct: [0, 0.0035, 0.0074, -0.0038, -0.0129],
                timeframe: '1D',
                timestamp: [1697241600, 1697500800, 1697587200, 1697673600, 1697760000],
              },
            },
          },
        },
      },
      headers: z.object({ 'Deprecated-Params': DeprecatedParamsHeaderSchema }),
    },
    401: {
      description: 'Unauthorized (invalid or missing credentials).',
      content: {
        'application/json': {
          schema: PortfolioHistoryErrorSchema,
          example: { code: 401, message: 'unauthenticated' },
        },
      },
      headers: z.object({ 'Deprecated-Params': DeprecatedParamsHeaderSchema }),
    },
    403: {
      description:
        'Forbidden (the credentials are valid but lack the required grants or access to the requested account).',
      content: {
        'application/json': {
          schema: PortfolioHistoryErrorSchema,
          example: { code: 403, message: 'forbidden' },
        },
      },
      headers: z.object({ 'Deprecated-Params': DeprecatedParamsHeaderSchema }),
    },
    404: {
      description: 'Account not found.',
      content: {
        'application/json': {
          schema: PortfolioHistoryErrorSchema,
          example: { code: 404, message: 'account not found' },
        },
      },
      headers: z.object({ 'Deprecated-Params': DeprecatedParamsHeaderSchema }),
    },
    422: {
      description: 'The request parameters are invalid.',
      content: {
        'application/json': {
          schema: PortfolioHistoryErrorSchema,
          example: { code: 40010001, message: 'query: "timeframe": invalid value: "2Min"' },
        },
      },
      headers: z.object({ 'Deprecated-Params': DeprecatedParamsHeaderSchema }),
    },
    429: {
      description: 'Rate limit exceeded.',
      content: {
        'application/json': {
          schema: PortfolioHistoryErrorSchema,
          example: { code: 429, message: 'rate limit exceeded' },
        },
      },
      headers: z.object({
        'Deprecated-Params': DeprecatedParamsHeaderSchema,
        'Retry-After': {
          description: 'Number of seconds to wait before retrying the request.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Number of seconds to wait before retrying the request.',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'Unexpected server failure.',
      content: {
        'application/json': {
          schema: PortfolioHistoryErrorSchema,
          example: { code: 500, message: 'internal server error' },
        },
      },
      headers: z.object({ 'Deprecated-Params': DeprecatedParamsHeaderSchema }),
    },
    504: {
      description: 'Gateway timeout.',
      content: {
        'application/json': {
          schema: PortfolioHistoryErrorSchema,
          example: { code: 504, message: 'gateway timeout' },
        },
      },
      headers: z.object({ 'Deprecated-Params': DeprecatedParamsHeaderSchema }),
    },
  },
})

export const getV1TradingAccountsAccountIdLimitsRoute = createRoute({
  method: 'get',
  path: '/v1/trading/accounts/{account_id}/limits',
  tags: ['Trading'],
  summary: 'Retrieve real-time Trading Limits for an Account',
  description:
    'This endpoint is only available to accounts with the trading limits feature enabled, and not on JIT.\nThe daily trading limit is set at the correspondent level (or the account level) and is used as the limit for the total amount due to Alpaca on the date of settlement.\nThe limit in use returns the real time usage of this limit, based on the setup it uses the usage is calculated differently.\nIf the limit in use reaches the `daily_net_limit` or `available` is zero, further purchasing activity will be halted, however, the limit can be adjusted by reaching out to Alpaca with the proposed new limit and the reason for the change.',
  operationId: 'get-v1-account-trading-limits',
  request: {
    params: z.object({
      account_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'account_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Returns the trading limit set for the account and the real-time usage of the limit',
      content: { 'application/json': { schema: AccountTradingLimitSchema } },
    },
    404: { description: 'Returned when the account is not configured for trading limits' },
  },
})

export const getV1TradingAccountsAccountIdOrdersRoute = createRoute({
  method: 'get',
  path: '/v1/trading/accounts/{account_id}/orders',
  tags: ['Trading'],
  summary: 'Retrieve a List of Orders',
  description:
    'Retrieves a list of orders for the account, filtered by the supplied query parameters.\n\nEndpoint defaults to open orders if no parameters are provided.',
  operationId: 'getAllOrdersForAccount',
  request: {
    params: z.object({ account_id: AccountIDParamsSchema }),
    query: z.object({
      status: z
        .enum(['open', 'closed', 'all'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Order status to be queried. open, closed or all. Defaults to open.',
            in: 'query',
            name: 'status',
            schema: { enum: ['open', 'closed', 'all'], type: 'string' },
            required: false,
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of orders in response. Defaults to 50 and max is 500.',
            in: 'query',
            name: 'limit',
            schema: { example: 500, type: 'integer' },
            required: false,
          },
          example: 500,
        }),
      asset_class: AssetClassParamsSchema,
      after: AfterParamsSchema,
      until: UntilParamsSchema,
      direction: DirectionParamsSchema,
      nested: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, the result will roll up multi-leg orders under the legs field of primary order.',
            in: 'query',
            name: 'nested',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      symbols: SymbolsParamsSchema,
      qty_above: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'qty_above', schema: { type: 'string' }, required: false },
        }),
      qty_below: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'qty_below', schema: { type: 'string' }, required: false },
        }),
      subtag: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'subtag', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Retrieves a list of orders for the account, filtered by the supplied query parameters.',
      content: { 'application/json': { schema: z.array(OrderSchema) } },
    },
    400: BadRequestResponse,
    404: NotFoundResponse,
  },
})

export const postV1TradingAccountsAccountIdOrdersRoute = createRoute({
  method: 'post',
  path: '/v1/trading/accounts/{account_id}/orders',
  tags: ['Trading'],
  summary: 'Create an Order for an Account',
  description:
    'Creating an order for your end customer. Each trading request must pass in the account_id in the URL.\n\n- Note that when submitting crypto orders, `market`, `limit` and `stop_limit` orders are supported while the supported `time_in_force` values are `gtc`, and `ioc`.\n- For equities and crypto we accept fractional orders as well with either `notional` or `qty` provided.\n- Note that submitting an options order is only available for partners who have been enabled for Options BETA.\n- In case of Fixed Income, only `market` and `limit` order types with `day` `time_in_force` are supported, and order replacement is not supported.\nNote that submitting Fixed Income orders is only available for partners who have been enabled for Fixed Income.\n- Note that submitting DMA orders (using `advanced_instructions` with `algorithm: DMA`) is only available for partners/correspondents who have been enabled for DMA.\n- For IPO indications of interest (`asset_class: "ipo"`), the `symbol` is the offering reference returned by [`GET /v1/ipos`](#operation/listIPOOfferings) (e.g. `FI111225`). IPO orders are notional-only (`notional` required, `qty` must be omitted), buy-side, `market` type, and `gtc` time_in_force. Indications of interest can be replaced or canceled while the offering is open via [`PATCH /v1/trading/accounts/{account_id}/orders/{order_id}`](#operation/replaceOrderForAccount) and [`DELETE /v1/trading/accounts/{account_id}/orders/{order_id}`](#operation/deleteOrderForAccount).',
  operationId: 'createOrderForAccount',
  request: {
    params: z.object({ account_id: AccountIDParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: CreateOrderRequestSchema,
          examples: {
            Crypto: {
              summary: 'Buy a crypto coin',
              value: {
                limit_price: '2100',
                qty: '0.02',
                side: 'buy',
                symbol: 'ETH/USD',
                time_in_force: 'gtc',
                type: 'limit',
              },
            },
            Equity: {
              summary: 'Buy an equity stock',
              value: {
                limit_price: '150',
                qty: '2',
                side: 'buy',
                symbol: 'AAPL',
                time_in_force: 'gtc',
                type: 'limit',
              },
            },
            FixedIncome: {
              summary: 'Buy a US Treasury Bill',
              value: {
                limit_price: '99.15',
                qty: '5000',
                side: 'buy',
                symbol: 'US912797QN08',
                time_in_force: 'day',
                type: 'limit',
              },
            },
            IPO: {
              summary: 'Submit an IPO indication of interest',
              value: {
                notional: '500',
                side: 'buy',
                symbol: 'FI111225',
                time_in_force: 'gtc',
                type: 'market',
              },
            },
            Options: {
              summary: 'Buy an option contract (BETA)',
              value: {
                limit_price: '10',
                qty: '2',
                side: 'buy',
                symbol: 'AAPL250620C00100000',
                time_in_force: 'day',
                type: 'limit',
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
      description: 'OK',
      content: {
        'application/json': {
          schema: OrderSchema,
          examples: {
            Bracket: BracketOrderResponseExample,
            Crypto: CryptoOrderResponseExample,
            Equity: EquityOrderResponseExample,
            IPO: IPOOrderResponseExample,
            MultilegOptions: MultilegOptionsOrderResponseExample,
            Options: OptionOrderResponseExample,
          },
        },
      },
    },
    400: BadRequestResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    422: { description: 'Some parameters are not valid' },
  },
})

export const deleteV1TradingAccountsAccountIdOrdersRoute = createRoute({
  method: 'delete',
  path: '/v1/trading/accounts/{account_id}/orders',
  tags: ['Trading'],
  summary: 'Cancel all Open Orders For an Account',
  description:
    'Attempts to cancel all open orders. A response will be provided for each order that is attempted to be cancelled.',
  operationId: 'deleteAllOrdersForAccount',
  request: { params: z.object({ account_id: AccountIDParamsSchema }) },
  responses: {
    207: {
      description:
        'HTTP 207 Multi-Status with body, which is an array of objects that include the order id, http status code and an order object for each cancellation request.',
      content: {
        'application/json': {
          schema: z.array(OrderClosedResponseSchema),
          examples: {
            'example-1': { value: [{ id: '872994c5-0620-40ad-8ae0-f224b9948df5', status: 200 }] },
          },
        },
      },
    },
    400: BadRequestResponse,
    404: NotFoundResponse,
  },
})

export const getV1TradingAccountsAccountIdOrdersOrderIdRoute = createRoute({
  method: 'get',
  path: '/v1/trading/accounts/{account_id}/orders/{order_id}',
  tags: ['Trading'],
  summary: 'Retrieve an Order by its ID',
  description: 'Retrieves a single order for the given order_id.',
  operationId: 'getOrderForAccount',
  request: {
    params: z.object({ account_id: AccountIDParamsSchema, order_id: OrderIDParamsSchema }),
  },
  responses: {
    200: {
      description: 'The requested Order object',
      content: { 'application/json': { schema: OrderSchema } },
    },
    400: BadRequestResponse,
    404: NotFoundResponse,
  },
})

export const deleteV1TradingAccountsAccountIdOrdersOrderIdRoute = createRoute({
  method: 'delete',
  path: '/v1/trading/accounts/{account_id}/orders/{order_id}',
  tags: ['Trading'],
  summary: 'Cancel an Open Order',
  description:
    'Attempts to cancel an open order. If the order is no longer cancelable (for example if the status is "filled"), the server will respond with status 422, and reject the request.\n\nUpon acceptance of the cancel request, it returns status 204.',
  operationId: 'deleteOrderForAccount',
  request: {
    params: z.object({ account_id: AccountIDParamsSchema, order_id: OrderIDParamsSchema }),
  },
  responses: {
    204: { description: 'Success (No Content)' },
    400: BadRequestResponse,
    404: NotFoundResponse,
  },
})

export const patchV1TradingAccountsAccountIdOrdersOrderIdRoute = createRoute({
  method: 'patch',
  path: '/v1/trading/accounts/{account_id}/orders/{order_id}',
  tags: ['Trading'],
  summary: 'Replace an Order',
  description:
    'Replaces a single order with updated parameters. Each parameter overrides the corresponding attribute of the existing order. The other attributes remain the same as the existing order.\n\nA success return code from a replaced order does NOT guarantee the existing open order has been replaced. If the existing open order is filled before the replacing (new) order reaches the execution venue, the replacing (new) order is rejected, and these events are sent in the trade_updates stream channel found [here](https://docs.alpaca.markets/reference/subscribetotradev2sse).\n\nWhile an order is being replaced, the account\'s buying power is reduced by the larger of the two orders that have been placed (the old order being replaced, and the newly placed order to replace it). If you are replacing a buy entry order with a higher limit price than the original order, the buying power is calculated based on the newly placed order. If you are replacing it with a lower limit price, the buying power is calculated based on the old order.\n\nNote: Order cannot be replaced when the status is `accepted`, `pending_new`, `pending_cancel` or `pending_replace`.\n\nNote: Notional orders for non-IPO asset classes cannot be replaced. Any attempt to modify a non-IPO notional order via this endpoint will be rejected; cancel it and submit a new one instead.\n\nNote: IPO indications of interest (`asset_class: "ipo"`) **are** notional and **can** be replaced via this endpoint by providing a new `notional` value. `qty` and `notional` are mutually exclusive on a single replace request.\n\nNote that submitting DMA orders (using `advanced_instructions` with `algorithm: DMA`) is only available for partners/correspondents who have been enabled for DMA.',
  operationId: 'replaceOrderForAccount',
  request: {
    params: z.object({ account_id: AccountIDParamsSchema, order_id: OrderIDParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: UpdateOrderRequestSchema,
          examples: {
            Equity: {
              summary: 'Increase qty and limit price on an equity order',
              value: { limit_price: '155', qty: '4', time_in_force: 'gtc' },
            },
            IPO: {
              summary: 'Update notional on an IPO indication of interest',
              value: { notional: '750' },
            },
            Options: {
              summary: "Adjust an option order's limit price",
              value: { limit_price: '11.25', time_in_force: 'day' },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A new Order object with a new order_id',
      content: {
        'application/json': {
          schema: OrderSchema,
          examples: {
            Equity: EquityOrderResponseExample,
            IPO: IPOOrderResponseExample,
            Options: OptionOrderResponseExample,
          },
        },
      },
    },
    400: BadRequestResponse,
    403: { description: 'Buying power or shares are not sufficient' },
    404: NotFoundResponse,
  },
})

export const postV1TradingAccountsAccountIdOrdersEstimationRoute = createRoute({
  method: 'post',
  path: '/v1/trading/accounts/{account_id}/orders/estimation',
  tags: ['Trading'],
  summary: 'Estimate an Order',
  description:
    "Order estimation endpoint will display, based on user's account balance, the estimated quantity and price they will receive for their notional order.\n\nFor LCT - customer's order will include the Alpaca swap_fee, while correspondent side swap_fee is configurable in the API call. Utilizing this API does not result in a real order and after the calculation - the user's buying power reverts to the previous state.\n\nResponses and Errors are the same as with the Orders API\n\nPlease note that the estimation is based on the market condition at the time of submission and a live order will differ. The output should be considered indicative.\n\n**Note:** This does not support Crypto or non-market orders at this time.",
  operationId: 'get-v1-trading-accounts-account_id-orders-estimation',
  request: {
    params: z.object({
      account_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'account_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              notional: z.string().exactOptional(),
              side: OrderSideSchema.exactOptional(),
              swap_fee_bps: z.int().exactOptional(),
              symbol: z.string().exactOptional(),
              time_in_force: TimeInForceSchema.exactOptional(),
              type: OrderTypeSchema.exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                notional: '40',
                side: 'buy',
                swap_fee_bps: 45,
                symbol: 'AAPL',
                time_in_force: 'day',
                type: 'market',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OrderSchema } } },
  },
})

export const getV1TradingAccountsAccountIdOrdersByClientOrderIdRoute = createRoute({
  method: 'get',
  path: '/v1/trading/accounts/{account_id}/orders:by_client_order_id',
  tags: ['Trading'],
  summary: 'Retrieves a single order specified by the client order ID.',
  description: 'Retrieves a single order specified by the client order ID.',
  operationId: 'getOrderByClientOrderIdForAccount',
  request: {
    params: z.object({ account_id: AccountIDParamsSchema }),
    query: z.object({
      client_order_id: z
        .string()
        .openapi({
          param: {
            description: 'The client-assigned order ID.',
            in: 'query',
            name: 'client_order_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved the order matching the client_order_id.',
      content: { 'application/json': { schema: OrderSchema } },
    },
    400: BadRequestResponse,
    404: NotFoundResponse,
  },
})

export const getV1TradingAccountsAccountIdPositionsRoute = createRoute({
  method: 'get',
  path: '/v1/trading/accounts/{account_id}/positions',
  tags: ['Trading'],
  summary: 'List Open Positions for an Account',
  description: 'List open positions for an account',
  operationId: 'getPositionsForAccount',
  request: { params: z.object({ account_id: AccountIDParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(PositionSchema) } },
    },
  },
})

export const deleteV1TradingAccountsAccountIdPositionsRoute = createRoute({
  method: 'delete',
  path: '/v1/trading/accounts/{account_id}/positions',
  tags: ['Trading'],
  summary: 'Close All Positions for an Account',
  description:
    "Closes (liquidates) all of the account's open long and short positions. A response will be provided for each order that is attempted to be cancelled. If an order is no longer cancelable, the server will respond with status 500 and reject the request.",
  operationId: 'closeAllPositionsForAccount',
  request: {
    params: z.object({ account_id: AccountIDParamsSchema }),
    query: z.object({
      cancel_orders: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true is specified, cancel all open orders before liquidating all positions.',
            in: 'query',
            name: 'cancel_orders',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    207: {
      description:
        'HTTP 207 Multi-Status with body; an array of objects that include the order id and http status code for each status request.',
      content: {
        'application/json': {
          schema: z.array(PositionClosedResponseSchema),
          examples: {
            'example-1': {
              value: [
                {
                  body: {
                    asset_class: 'us_equity',
                    asset_id: 'a4778bc8-fad1-47b7-87fe-d5cde10d43f4',
                    canceled_at: null,
                    client_order_id: '17dbfab4-cb86-4e0a-8fa6-f0606b0a9a4e',
                    created_at: '2022-05-13T16:25:29.336330998Z',
                    expired_at: null,
                    extended_hours: false,
                    failed_at: null,
                    filled_at: null,
                    filled_avg_price: null,
                    filled_qty: '0',
                    hwm: null,
                    id: 'd1143025-89fc-4952-8936-db2409d899f3',
                    legs: null,
                    limit_price: null,
                    notional: null,
                    order_class: '',
                    order_type: 'market',
                    qty: '4',
                    replaced_at: null,
                    replaced_by: null,
                    replaces: null,
                    side: 'sell',
                    source: null,
                    status: 'accepted',
                    stop_price: null,
                    submitted_at: '2022-05-13T16:25:29.335776073Z',
                    symbol: 'TSLA',
                    time_in_force: 'day',
                    trail_percent: null,
                    trail_price: null,
                    type: 'market',
                    updated_at: '2022-05-13T16:25:29.336330998Z',
                  },
                  status: 200,
                  symbol: 'TSLA',
                },
              ],
            },
          },
        },
      },
    },
    500: { description: 'Failed to liquidate some positions' },
  },
})

export const getV1TradingAccountsAccountIdPositionsSymbolOrAssetIdRoute = createRoute({
  method: 'get',
  path: '/v1/trading/accounts/{account_id}/positions/{symbol_or_asset_id}',
  tags: ['Trading'],
  summary: 'Get an Open Position for account by Symbol or AssetId',
  description: "Retrieves the account's open position for the given symbol or asset_id.",
  operationId: 'getPositionsForAccountBySymbol',
  request: {
    params: z.object({
      account_id: AccountIDParamsSchema,
      symbol_or_asset_id: z
        .string()
        .openapi({
          param: {
            description: 'The symbol or asset_id ',
            in: 'path',
            name: 'symbol_or_asset_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested Position object',
      content: { 'application/json': { schema: PositionSchema } },
    },
    404: { description: "Account doesn't have a position for this symbol or asset_id " },
  },
})

export const deleteV1TradingAccountsAccountIdPositionsSymbolOrAssetIdRoute = createRoute({
  method: 'delete',
  path: '/v1/trading/accounts/{account_id}/positions/{symbol_or_asset_id}',
  tags: ['Trading'],
  summary: 'Close a Position for an Account',
  description:
    "Closes (liquidates) the account's open position for the given symbol. Works for both long and short positions.",
  operationId: 'closePositionForAccountBySymbol',
  request: {
    params: z.object({
      account_id: AccountIDParamsSchema,
      symbol_or_asset_id: z
        .string()
        .openapi({
          param: {
            description: 'The symbol or asset_id ',
            in: 'path',
            name: 'symbol_or_asset_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      qty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional the number of shares to liquidate. Can accept up to 9 decimal points. Cannot work with percentage',
            in: 'query',
            name: 'qty',
            schema: { type: 'string' },
            required: false,
          },
        }),
      percentage: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'percentage of position to liquidate. Must be between 0 and 100. Would only sell fractional if position is originally fractional. Can accept up to 9 decimal points. Cannot work with qty',
            in: 'query',
            name: 'percentage',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OrderSchema } } },
  },
})

export const postV1TradingAccountsAccountIdPositionsSymbolOrContractIdDoNotExerciseRoute =
  createRoute({
    method: 'post',
    path: '/v1/trading/accounts/{account_id}/positions/{symbol_or_contract_id}/do-not-exercise',
    tags: ['Trading'],
    summary: 'Do Not Exercise an Options Position',
    description:
      'This endpoint enables users to submit a do-not-exercise (DNE) instruction for a held option contract, preventing automatic exercise at expiry.\nBy default, Alpaca will automatically exercise in-the-money (ITM) contracts at expiry. This endpoint allows users to override that behavior.\nDNE requests will be processed immediately once received. DNE requests submitted between market close and midnight will be rejected to avoid any confusion about when the instruction will take effect.\nTo cancel a DNE request or to submit an exercise instruction, please contact our support team.',
    operationId: 'optionDoNotExercise',
    request: {
      params: z.object({
        account_id: AccountIDParamsSchema,
        symbol_or_contract_id: z
          .uuid()
          .openapi({
            param: {
              description: 'Option contract symbol or ID.',
              in: 'path',
              name: 'symbol_or_contract_id',
              required: true,
              schema: { format: 'uuid', type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: DoNotExerciseRequestSchema } } },
    },
    responses: {
      200: {
        description: 'Successful Response',
        content: { 'application/json': { schema: DoNotExerciseResponseSchema } },
      },
      403: {
        description: 'Forbidden',
        content: {
          'application/json': {
            schema: ErrorSchema,
            examples: {
              'No Available Position': {
                value: {
                  code: 40310000,
                  message: 'no available position for the specified contract',
                },
              },
              'Short Position': {
                value: { code: 40310001, message: 'cannot submit DNE for short position' },
              },
            },
          },
        },
      },
      422: {
        description: 'Invalid Symbol\n\nThe specified symbol_or_contract_id is invalid.',
        content: {
          'application/json': {
            schema: ErrorSchema,
            examples: {
              'Invalid Symbol': {
                value: { code: 42210000, message: 'invalid symbol_or_contract_id' },
              },
            },
          },
        },
      },
    },
  })

export const postV1TradingAccountsAccountIdPositionsSymbolOrContractIdExerciseRoute = createRoute({
  method: 'post',
  path: '/v1/trading/accounts/{account_id}/positions/{symbol_or_contract_id}/exercise',
  tags: ['Trading'],
  summary: 'Exercise an Options Position',
  description:
    'This endpoint enables users to exercise a held option contract, converting it into the underlying asset based on the specified terms.\nAll available held shares of this option contract will be exercised.\nBy default, Alpaca will automatically exercise in-the-money (ITM) contracts at expiry.\nExercise requests will be processed immediately once received. Exercise requests submitted between market close and midnight will be rejected to avoid any confusion about when the exercise will settle.\nTo cancel an exercise request or to submit a Do-not-exercise (DNE) instruction, you can use the do-not-exercise endpoint or contact our support team.',
  operationId: 'optionExercise',
  request: {
    params: z.object({
      account_id: AccountIDParamsSchema,
      symbol_or_contract_id: z
        .uuid()
        .openapi({
          param: {
            description: 'Option contract symbol or ID.',
            in: 'path',
            name: 'symbol_or_contract_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ExerciseRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ExerciseResponseSchema } },
    },
    403: {
      description: 'Forbidden\n\nAvailable position quantity is not sufficient.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            'No Available Position': {
              value: {
                code: 40310000,
                message: 'no available position for the specified contract',
              },
            },
            'Short Position': {
              value: { code: 40310001, message: 'cannot exercise short position' },
            },
          },
        },
      },
    },
  },
})

export const getV1TradingAccountsAccountIdWatchlistsRoute = createRoute({
  method: 'get',
  path: '/v1/trading/accounts/{account_id}/watchlists',
  tags: ['Watchlist'],
  summary: 'Retrieve all Watchlists for an Account',
  description: 'Fetch a list of all watchlists currently in an account.',
  operationId: 'getAllWatchlistsForAccount',
  request: {
    params: z.object({
      account_id: z
        .uuid()
        .openapi({
          param: {
            description: 'Unique identifier of an account.',
            in: 'path',
            name: 'account_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(WatchlistWithoutAssetSchema) } },
    },
  },
})

export const postV1TradingAccountsAccountIdWatchlistsRoute = createRoute({
  method: 'post',
  path: '/v1/trading/accounts/{account_id}/watchlists',
  tags: ['Watchlist'],
  summary: 'Create a New Watchlist for an Account',
  description: 'Returns the watchlist object',
  operationId: 'createWatchlistForAccount',
  request: {
    params: z.object({
      account_id: z
        .uuid()
        .openapi({
          param: {
            description: 'Unique identifier of an account.',
            in: 'path',
            name: 'account_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateWatchlistRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Newly created watchlist',
      content: { 'application/json': { schema: WatchlistSchema } },
    },
  },
})

export const getV1TradingAccountsAccountIdWatchlistsWatchlistIdRoute = createRoute({
  method: 'get',
  path: '/v1/trading/accounts/{account_id}/watchlists/{watchlist_id}',
  tags: ['Watchlist'],
  summary: 'Manage watchlists',
  description: 'Retrieve Watchlist by ID',
  operationId: 'getWatchlistForAccountById',
  request: {
    params: z.object({
      account_id: z
        .uuid()
        .openapi({
          param: {
            description: 'Unique identifier of an account',
            in: 'path',
            name: 'account_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      watchlist_id: z
        .uuid()
        .openapi({
          param: {
            description: 'Unique identifier of a watchlist',
            in: 'path',
            name: 'watchlist_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: WatchlistSchema } } },
  },
})

export const putV1TradingAccountsAccountIdWatchlistsWatchlistIdRoute = createRoute({
  method: 'put',
  path: '/v1/trading/accounts/{account_id}/watchlists/{watchlist_id}',
  tags: ['Watchlist'],
  summary: 'Update a Watchlist',
  description:
    'Replace entirely the set of securities contained in the watchlist while optionally renaming it. Destructive operation.',
  operationId: 'replaceWatchlistForAccountById',
  request: {
    params: z.object({
      account_id: z
        .uuid()
        .openapi({
          param: {
            description: 'Unique identifier of an account',
            in: 'path',
            name: 'account_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      watchlist_id: z
        .uuid()
        .openapi({
          param: {
            description: 'Unique identifier of a watchlist',
            in: 'path',
            name: 'watchlist_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateWatchlistRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Updated watchlist.',
      content: { 'application/json': { schema: WatchlistSchema } },
    },
  },
})

export const postV1TradingAccountsAccountIdWatchlistsWatchlistIdRoute = createRoute({
  method: 'post',
  path: '/v1/trading/accounts/{account_id}/watchlists/{watchlist_id}',
  tags: ['Watchlist'],
  summary: 'Add an Asset to a Watchlist',
  description: 'Adds an asset to an existing watchlist.',
  operationId: 'post-v1-trading-accounts-account_id-watchlists-watchlist_id',
  request: {
    params: z.object({
      account_id: z
        .uuid()
        .openapi({
          param: {
            description: 'Unique identifier of an account',
            in: 'path',
            name: 'account_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      watchlist_id: z
        .uuid()
        .openapi({
          param: {
            description: 'Unique identifier of a watchlist',
            in: 'path',
            name: 'watchlist_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              symbol: z
                .string()
                .exactOptional()
                .openapi({ description: 'The symbol name to add to the watchlist' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: WatchlistSchema } } },
    404: {
      description:
        'The requested watchlist is not found, or one of the symbols is not found in the assets',
    },
    422: { description: 'Some parameters are not valid' },
  },
})

export const deleteV1TradingAccountsAccountIdWatchlistsWatchlistIdRoute = createRoute({
  method: 'delete',
  path: '/v1/trading/accounts/{account_id}/watchlists/{watchlist_id}',
  tags: ['Watchlist'],
  summary: 'Remove a Watchlist',
  description: 'Irrevocably delete a watchlist.',
  operationId: 'deleteWatchlistFromAccountById',
  request: {
    params: z.object({
      account_id: z
        .uuid()
        .openapi({
          param: {
            description: 'Unique identifier of an account',
            in: 'path',
            name: 'account_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      watchlist_id: z
        .uuid()
        .openapi({
          param: {
            description: 'Unique identifier of a watchlist',
            in: 'path',
            name: 'watchlist_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Watchlist deleted.' } },
})

export const deleteV1TradingAccountsAccountIdWatchlistsWatchlistIdSymbolRoute = createRoute({
  method: 'delete',
  path: '/v1/trading/accounts/{account_id}/watchlists/{watchlist_id}/{symbol}',
  tags: ['Watchlist'],
  summary: 'Remove a Symbol from a Watchlist',
  description: 'Delete one entry for an asset by symbol name',
  operationId: 'delete-DELETE-v1-trading-accounts-account_id-watchlists-watchlist_id-symbol',
  request: {
    params: z.object({
      account_id: z
        .string()
        .openapi({
          param: {
            description: 'Account identifier.',
            in: 'path',
            name: 'account_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      watchlist_id: z
        .string()
        .openapi({
          param: {
            description: 'The Watchlist ID',
            in: 'path',
            name: 'watchlist_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      symbol: z
        .string()
        .openapi({
          param: {
            description: 'The symbol ',
            in: 'path',
            name: 'symbol',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK' },
    404: { description: 'The requested watchlist is not found' },
  },
})

export const getV1TransfersJitLedgerIdBalancesRoute = createRoute({
  method: 'get',
  path: '/v1/transfers/jit/{ledger_id}/balances',
  tags: ['Funding'],
  summary: 'Retrieve JIT Ledger Balances',
  description: 'Returns an array of objects that correspond to each ledger account.',
  operationId: 'get-v1-transfers-jit-ledger_id-balances',
  request: {
    params: z.object({
      ledger_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'ledger_id', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      start_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'The start date (inclusive) of the ledgerbalances and activities.',
            in: 'query',
            name: 'start_date',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      end_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'The end date (inclusive) of the ledgerbalances and activities.',
            in: 'query',
            name: 'end_date',
            schema: { format: 'date', type: 'string' },
            required: false,
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
              activity_amount: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The number of transactions related to the ledger during the specified date range ',
                }),
              ending_balance: z
                .string()
                .exactOptional()
                .openapi({ description: 'Ledger balance at the end of the date range' }),
              id: z.string().exactOptional().openapi({ description: 'The ledger ID' }),
              ledger_name: z.string().exactOptional().openapi({ description: 'The ledger name' }),
              ledger_no: z
                .string()
                .exactOptional()
                .openapi({ description: 'The ledger account number' }),
              starting_balance: z
                .string()
                .exactOptional()
                .openapi({ description: 'Ledger balance at the beginning of the date range' }),
              transactions: z.array(TransactionSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getV1TransfersJitLedgersRoute = createRoute({
  method: 'get',
  path: '/v1/transfers/jit/ledgers',
  tags: ['Funding'],
  summary: 'Retrieve JIT Ledgers',
  description:
    'Returns an array of objects that correspond to each ledger account, each of which contains the following attributes.',
  operationId: 'get-v1-transfers-jit-ledgers',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(JITLedgerAccountSchema) } },
    },
  },
})

export const getV1TransfersJitLimitsRoute = createRoute({
  method: 'get',
  path: '/v1/transfers/jit/limits',
  tags: ['Funding'],
  summary: 'Retrieve Daily Trading Limits',
  description:
    'The JIT Securities daily trading limit is set at the correspondent level and is used as the limit for the total amount due to Alpaca on the date of settlement. The limit in use returns the real time usage of this limit and is calculated by taking the net of trade and non-trade activity inflows and outflows. If the limit in use reaches the daily net limit, further purchasing activity will be halted, however, the limit can be adjusted by reaching out to Alpaca with the proposed new limit and the reason for the change. The limit is reset at the start of every trading day at 8.00 PM ET',
  operationId: 'get-v1-transfers-jit-limits',
  responses: {
    200: {
      description:
        'Returns the JIT Securities Daily Trading Limit Object based off of real time calculations.',
      content: {
        'application/json': {
          schema: DailyTradingLimitSchema,
          examples: {
            open_cash_secured_put: {
              summary: 'Correspondent with an open cash-secured put (cash_held present)',
              value: {
                cash_held: '20000',
                correspondent: 'EXMP',
                daily_net_limit: '1000000',
                executed_buys: '43140',
                executed_sells: '0',
                in_use_limit: '103140',
                open_buys: '40000',
                open_sells: '0',
              },
            },
            us_equity: {
              summary: 'US equity correspondent with open and executed activity',
              value: {
                correspondent: 'EXMP',
                daily_net_limit: '1000000',
                executed_buys: '55',
                executed_sells: '0',
                in_use_limit: '55',
                open_buys: '0',
                open_sells: '0',
              },
            },
          },
        },
      },
    },
  },
})

export const getV1TransfersJitReportsRoute = createRoute({
  method: 'get',
  path: '/v1/transfers/jit/reports',
  tags: ['Funding'],
  summary: 'Retrieve JIT Reports',
  description:
    'Retrieves a JIT report for the requested report type and system date. By default, the report is returned inline. For large reports, use response_type=download_url to receive a temporary signed download URL.\n\nGenerated SDKs return the JSON response. To retrieve a report through an SDK, set response_type=download_url and download the file from `url`.\n',
  operationId: 'get-v1-transfers-jit-reports',
  request: {
    query: z.object({
      report_type: JITReportTypeSchema.openapi({
        param: {
          description: 'The type of report you want to get.',
          in: 'query',
          name: 'report_type',
          required: true,
          schema: { $ref: '#/components/schemas/JITReportType' },
        },
      }),
      system_date: z.iso
        .date()
        .openapi({
          param: {
            description: 'Date of file generation.',
            example: '2026-10-14',
            in: 'query',
            name: 'system_date',
            required: true,
            schema: { format: 'date', type: 'string' },
          },
        }),
      asset_class: z
        .enum(['us_equity', 'crypto'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The asset class to retrieve for.',
            in: 'query',
            name: 'asset_class',
            schema: { enum: ['us_equity', 'crypto'], type: 'string' },
            required: false,
          },
        }),
      response_type: z
        .enum(['inline', 'download_url'])
        .default('inline')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Controls how the report is returned. Use inline to return the report content directly in the response. Use download_url to return a temporary signed URL that can be used to download the generated report. If omitted, the default value is inline.\n',
            in: 'query',
            name: 'response_type',
            required: false,
            schema: { default: 'inline', enum: ['inline', 'download_url'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'The report file when response_type is inline or omitted, or a temporary download link when response_type is download_url.',
      content: {
        'application/json': {
          schema: JITReportDownloadURLSchema,
          examples: {
            download_url: {
              summary: 'Download URL response',
              description: 'Returned when response_type is download_url.',
              value: {
                expires_at: '2026-04-14T23:55:00Z',
                filename: 'ALPC-2026-04-14-common_stock-detail.csv',
                url: '<signed_s3_url>',
              },
            },
          },
        },
        'application/pdf': {
          schema: z
            .file()
            .openapi({
              type: 'string',
              format: 'binary',
              description: 'PDF payment report file, returned as an attachment.',
            }),
        },
        'text/csv': {
          schema: z
            .file()
            .openapi({
              type: 'string',
              format: 'binary',
              description: 'CSV report file, returned as an attachment.',
            }),
        },
      },
      headers: z.object({
        'Content-Disposition': {
          description:
            'Present when the report file is returned inline. Names the file with the same value that download_url returns in `filename`.',
          example: 'attachment;filename=ALPC-2026-04-14-common_stock-detail.csv',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Present when the report file is returned inline. Names the file with the same value that download_url returns in `filename`.',
              example: 'attachment;filename=ALPC-2026-04-14-common_stock-detail.csv',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getV1WalletsFeesEstimateRoute = createRoute({
  method: 'get',
  path: '/v1/wallets/fees/estimate',
  tags: ['Crypto Funding'],
  summary: 'Returns the estimated gas fee for a proposed transaction.',
  description:
    'Returns the estimated on-chain network (gas) fee for a proposed crypto withdrawal at current chain conditions. Pass the `asset`, `from_address`, `to_address`, and `amount` you intend to send; the response reports the network fee that would be charged for the corresponding transaction.',
  operationId: 'getCryptoTransferEstimate',
  request: {
    query: z.object({
      asset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The asset for the proposed transaction',
            in: 'query',
            name: 'asset',
            schema: { type: 'string' },
            required: false,
          },
        }),
      from_address: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The originating address of the proposed transaction',
            in: 'query',
            name: 'from_address',
            schema: { type: 'string' },
            required: false,
          },
        }),
      to_address: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The destination address of the proposed transaction',
            in: 'query',
            name: 'to_address',
            schema: { type: 'string' },
            required: false,
          },
        }),
      amount: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The amount, denoted in the specified asset, of the proposed transaction',
            in: 'query',
            name: 'amount',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ fee: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    default: { description: 'error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getV1WalletsTravelRuleVaspsRoute = createRoute({
  method: 'get',
  path: '/v1/wallets/travel-rule/vasps',
  tags: ['Crypto Funding'],
  summary: 'Search for VASPs',
  description:
    "Search for Virtual Asset Service Providers, or crypto exchanges, on Notabene's network.\nThis endpoint can be used to find the VASP DID for your beneficiary's exchange when submitting\ntravel rule information for your whitelisted wallets. Use the `q` parameter to search for exchanges.",
  operationId: 'searchVASPs',
  request: {
    query: z.object({
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'General search query string.',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
      emailDomain: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by VASP email domain.',
            in: 'query',
            name: 'emailDomain',
            schema: { type: 'string' },
            required: false,
          },
        }),
      chainalysisName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by Chainalysis-specific VASP name.',
            in: 'query',
            name: 'chainalysisName',
            schema: { type: 'string' },
            required: false,
          },
        }),
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specify which fields to return (comma-separated).',
            in: 'query',
            name: 'fields',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'The zero-based page number to retrieve.',
            in: 'query',
            name: 'page',
            schema: { default: 0, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of items per page.',
            in: 'query',
            name: 'per_page',
            schema: { default: 10, maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      order: z
        .string()
        .regex(/^([ A-Za-z]+(:(ASC|DESC))?(:NULLS (FIRST|LAST))?(,?))+$/)
        .default('name:ASC')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Field-based sort expression, such as name:ASC. Multiple expressions may be comma-separated. Defaults to name:ASC.',
            in: 'query',
            name: 'order',
            schema: {
              default: 'name:ASC',
              example: 'name:ASC',
              pattern: '^([ A-Za-z]+(:(ASC|DESC))?(:NULLS (FIRST|LAST))?(,?))+$',
              type: 'string',
            },
            required: false,
          },
          example: 'name:ASC',
        }),
      includeSubsidiaryVASPs: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to include child/subsidiary entities.',
            in: 'query',
            name: 'includeSubsidiaryVASPs',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Successful request. `vasps` lists each match and is an empty array when nothing matches.',
      content: {
        'application/json': {
          schema: SearchVASPsResponseSchema,
          example: {
            page: 1,
            pages: 1,
            total: 1,
            vasps: [
              {
                country: 'US',
                did: 'did:ethr:0xf1c002f9e7ca88018d6dcf1e86403fb2f5f055f4',
                id: 'vasp-1',
                name: 'Example Exchange',
              },
            ],
          },
        },
      },
    },
  },
})

export const getV2beta1AccountsAccountIdEventsActivitiesEventIdRoute = createRoute({
  method: 'get',
  path: '/v2beta1/accounts/{account_id}/events/activities/{event_id}',
  tags: ['Accounts'],
  summary: 'Get a single activity (V2) event by event_id ULID.',
  description:
    'Returns a single account activity (V2) event for the specified account by ULID `event_id`, delivered as a server-sent event message.\n\nThis is the single-event counterpart to the `subscribeToActivitiesSSE` streaming endpoint, intended for re-fetching an individual activity that was previously observed on the activities stream.',
  operationId: 'getAccountActivityEvent',
  request: {
    params: z.object({
      account_id: AccountIDParamsSchema,
      event_id: z
        .ulid()
        .openapi({
          param: {
            description: 'The ULID that uniquely identifies the activity event.',
            in: 'path',
            name: 'event_id',
            required: true,
            schema: { format: 'ulid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a single activity v2 event, identified by the provided event_id  ULID.',
      content: { 'text/event-stream': { schema: ActivityEventV2Schema } },
    },
  },
})

export const getV2beta1EventsActivitiesRoute = createRoute({
  method: 'get',
  path: '/v2beta1/events/activities',
  tags: ['Events'],
  summary: 'Subscribe to Activity Events (SSE)',
  description:
    'The Events API sends the real-time events and provides historical queries with SSE (Server Sent Events).\n\nThis endpoint streams events on account activities.\n\nHistorical events are streamed immediately if queried, and updates are pushed as events occur.\n\nQuery parameter rules:\n- If `until` is specified, `since` is required.\n- If `until_id` is specified, `since_id` is required.\n- You cannot use `since` and `since_id` together.\nBehavior:\n- If `since` or `since_id` is not specified, this will not return any historic data.\n- If `until` or `until_id` is specified, stream will end at the specified point with status 200.\n\n---\n\nWarning: Currently, OAS-3 does not fully support responses from an SSE API.\n\nIn case the client code is generated from this OAS spec, please do not specify `since` and `until`, as the generated client may hang forever waiting for the response to end.\n\nIf you require the streaming capabilities, we recommend not using the generated clients for this specific endpoint until the OAS-3 standards define how to represent this behavior.\n\n---\n\n###  Comment messages\nAccording to the SSE specification, any line that starts with a colon is a comment which does not contain data.  It is typically a free text that does not follow any data schema. A few examples mentioned below for comment messages.\n\n#####  Slow client\n\nThe server sends a comment when the client is not consuming messages fast enough. Example: `: you are reading too slowly, dropped 10000 messages`\n\n##### Internal server error\n\nAn error message is sent as a comment when the server closes the connection on an internal server error (only sent by the v2 and v2beta1 endpoints). Example: `: internal server error`\n\n---',
  operationId: 'subscribeToActivitiesSSE',
  request: {
    query: z.object({
      since: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Format: RFC3339 or YYYY-MM-DD',
            in: 'query',
            name: 'since',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      until: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Format: RFC3339 or YYYY-MM-DD',
            in: 'query',
            name: 'until',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      since_id: z
        .ulid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'since_id',
            schema: { format: 'ulid', type: 'string' },
            required: false,
          },
        }),
      until_id: z
        .ulid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'until_id',
            schema: { format: 'ulid', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Connected. Events will now start streaming as long as you keep the connection open.',
      content: { 'text/event-stream': { schema: z.array(ActivityEventV2Schema) } },
    },
  },
})

export const getV2CalendarMarketRoute = createRoute({
  method: 'get',
  path: '/v2/calendar/{market}',
  tags: ['Calendar'],
  summary: 'Get Market Calendar',
  description: 'This endpoint returns the market calendar.',
  operationId: 'Calendar',
  request: {
    params: z.object({ market: MarketParamsSchema }),
    query: z.object({
      start: StartParamsSchema,
      end: EndParamsSchema,
      timezone: TimezoneParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PublicCalendarRespSchema } },
      headers: z.object({
        'X-RateLimit-Limit': RatelimitLimitHeaderSchema,
        'X-RateLimit-Remaining': RatelimitRemainingHeaderSchema,
        'X-RateLimit-Reset': RatelimitResetHeaderSchema,
      }),
    },
    400: _400Response,
    429: _429Response,
    500: _500Response,
  },
})

export const getV2ClockRoute = createRoute({
  method: 'get',
  path: '/v2/clock',
  tags: ['Calendar'],
  summary: 'Get Market Clock',
  description:
    "This API serves information about multiple markets: the current time, if it's a market day, the current phase of the market, etc.\n",
  operationId: 'Clock',
  request: { query: z.object({ markets: MarketsParamsSchema, time: TimeParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ClockRespSchema } },
      headers: z.object({
        'X-RateLimit-Limit': RatelimitLimitHeaderSchema,
        'X-RateLimit-Remaining': RatelimitRemainingHeaderSchema,
        'X-RateLimit-Reset': RatelimitResetHeaderSchema,
      }),
    },
    400: _400Response,
    429: _429Response,
    500: _500Response,
  },
})

export const getV2EventsAdminActionsRoute = createRoute({
  method: 'get',
  path: '/v2/events/admin-actions',
  tags: ['Events'],
  summary: 'Subscribe to Admin Action Events (SSE)',
  description:
    "The Events API provides event push as well as historical queries via SSE (server sent events).\n\nThis endpoint streams events related to administrative actions performed by our systems.\n\nHistorical events are streamed immediately if queried, and updates are pushed as events occur.\n\nQuery Params Rules:\n- `since` required if `until` specified\n- `since_id` required if `until_id` specified\n- `since` and `since_id` can't be used at the same time\nBehavior:\n- if `since` or `since_id` not specified this will not return any historic data\n- if `until` or `until_id` reached stream will end (status 200)\n\n---\n\nWarning: Currently OAS-3 doesn't have full support for representing SSE style responses from an API.\n\nIn case the client code is generated from this OAS spec, don't specify a `since` and `until` there is a good chance the generated clients will hang forever waiting for the response to end.\n\nIf you require the streaming capabilities we recommend not using the generated clients for this specific endpoint until the OAS-3 standards come to a consensus on how to represent this behavior in OAS-3.\n\n---\n\n###  Comment messages\nAccording to the SSE specification, any line that starts with a colon is a comment which does not contain data.  It is typically a free text that does not follow any data schema. A few examples mentioned below for comment messages.\n\n#####  Slow client\n\nThe server sends a comment when the client is not consuming messages fast enough. Example: `: you are reading too slowly, dropped 10000 messages`\n\n##### Internal server error\n\nAn error message is sent as a comment when the server closes the connection on an internal server error (only sent by the v2 and v2beta1 endpoints). Example: `: internal server error`\n\n---\n\n**Event Types**\n\n- **LegacyNote:** Old free text based admin notes\n- **Liquidation:** Event for a position liquidation which initialized by an admin\n- **TransactionCancel:** Event for a manually cancelled transaction\n- **AcatsStatus:** Event for a status change of an ACATS transfer (`type: acats_status_admin_event`, `category: acats`). Only sent to correspondents with ACATS API access.",
  operationId: 'subscribeToAdminActionSSE',
  request: {
    query: z.object({
      since: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Format: RFC3339 or YYYY-MM-DD',
            in: 'query',
            name: 'since',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      until: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Format: RFC3339 or YYYY-MM-DD',
            in: 'query',
            name: 'until',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      since_id: z
        .ulid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'since_id',
            schema: { format: 'ulid', type: 'string' },
            required: false,
          },
        }),
      until_id: z
        .ulid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'until_id',
            schema: { format: 'ulid', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Connected. Events will now start streaming as long as you keep the connection open.',
      content: {
        'text/event-stream': {
          schema: z.array(
            z
              .xor([
                AdminActionLegacyNoteSchema,
                AdminActionLiquidationSchema,
                AdminActionTransactionCancelSchema,
                AdminActionAcatsStatusSchema,
              ])
              .openapi({
                discriminator: {
                  mapping: {
                    acats_status_admin_event: '#/components/schemas/AdminActionAcatsStatus',
                    legacy_note_admin_event: '#/components/schemas/AdminActionLegacyNote',
                    liquidation_admin_event: '#/components/schemas/AdminActionLiquidation',
                    note_admin_event: '#/components/schemas/AdminActionLegacyNote',
                    transaction_cancel_admin_event:
                      '#/components/schemas/AdminActionTransactionCancel',
                  },
                  propertyName: 'type',
                },
              }),
          ),
        },
      },
    },
  },
})

export const getV2EventsFundingStatusRoute = createRoute({
  method: 'get',
  path: '/v2/events/funding/status',
  tags: ['Events'],
  summary: 'Subscribe to Funding Status Events (SSE)',
  description:
    "The Events API provides event push as well as historical queries via SSE (server sent events).\n\nYou can listen to funding status updates as they get processed by our backoffice, for both end-user and firm accounts.\n\nHistorical events are streamed immediately if queried, and updates are pushed as events occur.\n\nQuery Params Rules:\n- `since` required if `until` specified\n- `since_id` required if `until_id` specified\n- `since` and `since_id` can't be used at the same time\n- `until` and `until_id` can't be used at the same time\nBehavior:\n- if `since` or `since_id` not specified this will not return any historic data\n- if `until` or `until_id` reached stream will end (status 200)\n\n---\n\nNote for people using the clients generated from this OAS spec. Currently OAS-3 doesn't have full support for representing SSE style responses from an API, so if you are using a generated client and don't specify a `since` and `until` there is a good chance the generated clients will hang waiting for the response to end.\n\nIf you require the streaming capabilities we recommend not using the generated clients for this specific usecase until the OAS-3 standards come to a consensus on how to represent this correctly in OAS-3.",
  operationId: 'subscribeToFundingStatusSSE',
  request: {
    query: z.object({
      since: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Format: YYYY-MM-DD',
            in: 'query',
            name: 'since',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      until: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Format: YYYY-MM-DD',
            in: 'query',
            name: 'until',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      since_id: z
        .ulid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'since_id',
            schema: { format: 'ulid', type: 'string' },
            required: false,
          },
        }),
      until_id: z
        .ulid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'until_id',
            schema: { format: 'ulid', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Connected. Events will now start streaming as long as you keep the connection open.',
      content: { 'text/event-stream': { schema: z.array(StatusFundingEventSchema) } },
    },
  },
})

export const getV2EventsIposRoute = createRoute({
  method: 'get',
  path: '/v2/events/ipos',
  tags: ['Events'],
  summary: 'Subscribe to IPO Events (SSE)',
  description:
    "The Events API provides event push as well as historical queries via SSE (server sent events).\n\nYou can listen to IPO offering lifecycle updates as they happen - including new offerings, offering updates, prospectus availability, the 60-minute pricing window, account-scoped allocation results, and offering cancellations.\n\nHistorical events are streamed immediately if queried, and updates are pushed as events occur.\n\n---\n\n**Event types**\n\nEach event has a `verb` field that determines the shape of `payload`. See the `IPOEvent` schema for the full payload structure for each verb.\n\n- `Offering` - initial publication of an offering (system-wide).\n- `OfferingUpdate` - update to a previously published offering (system-wide).\n- `Prospectus` - prospectus document is now available (system-wide).\n- `SixtyMinMail` - 60-minute pricing window has opened, no new orders accepted (system-wide).\n- `Allocation` - final allocation result for a specific account. **Account-scoped** - `account_id` and `correspondent` are populated.\n- `OfferingCancellation` - offering was cancelled. **No `payload` field is present.**\n\nUse the `offering_reference` field on each event to fetch the full offering metadata via [`GET /v1/ipos/{offering_reference}`](#operation/getIPOOffering).\n\n---\n\nQuery Params Rules:\n- `since` required if `until` specified\n- `since_id` required if `until_id` specified\n- `since` and `since_id` can't be used at the same time\n- `until` and `until_id` can't be used at the same time\n\nBehavior:\n- if `since` or `since_id` not specified this will not return any historic data\n- if `until` or `until_id` reached stream will end (status 200)\n\n---\n\nNote for people using the clients generated from this OAS spec. Currently OAS-3 doesn't have full support for representing SSE style responses from an API, so if you are using a generated client and don't specify a `since` and `until` there is a good chance the generated clients will hang waiting for the response to end.\n\nIf you require the streaming capabilities we recommend not using the generated clients for this specific usecase until the OAS-3 standards come to a consensus on how to represent this correctly in OAS-3.\n",
  operationId: 'subscribeToIPOEventsSSE',
  request: {
    query: z.object({
      since: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Format: RFC3339 or YYYY-MM-DD',
            in: 'query',
            name: 'since',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      until: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Format: RFC3339 or YYYY-MM-DD',
            in: 'query',
            name: 'until',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      since_id: z
        .ulid()
        .exactOptional()
        .openapi({
          param: {
            description:
              'ULID `event_id` to resume the stream from. The first event returned will be the one immediately after `since_id`.',
            in: 'query',
            name: 'since_id',
            schema: { format: 'ulid', type: 'string' },
            required: false,
          },
        }),
      until_id: z
        .ulid()
        .exactOptional()
        .openapi({
          param: {
            description:
              'ULID `event_id` at which the stream will end (inclusive). Useful for backfills.',
            in: 'query',
            name: 'until_id',
            schema: { format: 'ulid', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Connected. Events will now start streaming as long as you keep the connection open.',
      content: {
        'text/event-stream': {
          schema: z.array(IPOEventSchema),
          examples: {
            Allocation: IPOEventAllocationExample,
            Offering: IPOEventOfferingExample,
            OfferingCancellation: IPOEventOfferingCancellationExample,
            OfferingUpdate: IPOEventOfferingUpdateExample,
            Prospectus: IPOEventProspectusExample,
            SixtyMinMail: IPOEventSixtyMinMailExample,
          },
        },
      },
    },
  },
})

export const getV2EventsJournalsStatusRoute = createRoute({
  method: 'get',
  path: '/v2/events/journals/status',
  tags: ['Events'],
  summary: 'Subscribe to Journal Events (SSE)',
  description:
    "The Events API provides event push as well as historical queries via SSE (server sent events).\n\nYou can listen to journal status updates as they get processed by our backoffice.\n\nHistorical events are streamed immediately if queried, and updates are pushed as events occur.\n\nQuery Params Rules:\n- `since` required if `until` specified\n- `since_id` required if `until_id` specified\n- `since` and `since_id` can't be used at the same time\n- `until` and `until_id` can't be used at the same time\nBehavior:\n- if `since` or `since_id` not specified this will not return any historic data\n- if `until` or `until_id` reached stream will end (status 200)\n\n---\n\nThere is no compatibility between /v1/events/journals/status and /v2/events/journals/status, the ids (ulid) are always different, and the number of events might also different\n\nPlease note that the new `/v2` endpoint, is the same as, and was originally available under `/v2beta1`.\nWe encourage all customers to adjust their codebase from that interim beta endpoint to the `/v2` stable endpoint.\nIn the near future we will setup permanent redirect from `/v2beta1` to `/v2` before we completely remove the beta endpoint.\n\n---\n\nNote for people using the clients generated from this OAS spec. Currently OAS-3 doesn't have full support for representing SSE style responses from an API, so if you are using a generated client and don't specify a `since` and `until` there is a good chance the generated clients will hang waiting for the response to end.\n\nIf you require the streaming capabilities we recommend not using the generated clients for this specific usecase until the OAS-3 standards come to a consensus on how to represent this correctly in OAS-3.\n",
  operationId: 'subscribeToJournalStatusV2SSE',
  request: {
    query: z.object({
      since: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Format: YYYY-MM-DD',
            in: 'query',
            name: 'since',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      until: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Format: YYYY-MM-DD',
            in: 'query',
            name: 'until',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      since_id: z
        .ulid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'since_id',
            schema: { format: 'ulid', type: 'string' },
            required: false,
          },
        }),
      until_id: z
        .ulid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'until_id',
            schema: { format: 'ulid', type: 'string' },
            required: false,
          },
        }),
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'id', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Connected. Events will now start streaming as long as you keep the connection open.',
      content: { 'text/event-stream': { schema: z.array(JournalStatusEventV2Schema) } },
    },
  },
})

export const getV2EventsSystemRoute = createRoute({
  method: 'get',
  path: '/v2/events/system',
  tags: ['Events'],
  summary: 'Subscribe to System Events (SSE)',
  description:
    "The Events API provides event push as well as historical queries via SSE (server sent events).\n\nYou can listen to system event updates as they happen in our backend.\n\nHistorical events are streamed immediately if queried, and updates are pushed as events occur.\n\nQuery Params Rules:\n- `since` required if `until` specified\n- `since_id` required if `until_id` specified\n- `since` and `since_id` can't be used at the same time\n- `until` and `until_id` can't be used at the same time\nBehavior:\n- if `since` or `since_id` not specified this will not return any historic data\n- if `until` or `until_id` reached stream will end (status 200)\n\n---\n\nNote for people using the clients generated from this OAS spec. Currently OAS-3 doesn't have full support for representing SSE style responses from an API, so if you are using a generated client and don't specify a `since` and `until` there is a good chance the generated clients will hang waiting for the response to end.\n\nIf you require the streaming capabilities we recommend not using the generated clients for this specific usecase until the OAS-3 standards come to a consensus on how to represent this correctly in OAS-3.\n",
  operationId: 'subscribeToSystemEventV2SSE',
  request: {
    query: z.object({
      since: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Format: YYYY-MM-DD',
            in: 'query',
            name: 'since',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      until: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Format: YYYY-MM-DD',
            in: 'query',
            name: 'until',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      since_id: z
        .ulid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'since_id',
            schema: { format: 'ulid', type: 'string' },
            required: false,
          },
        }),
      until_id: z
        .ulid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'until_id',
            schema: { format: 'ulid', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Connected. Events will now start streaming as long as you keep the connection open.',
      content: { 'text/event-stream': { schema: z.array(SystemEventV2Schema) } },
    },
  },
})

export const getV2EventsTradesRoute = createRoute({
  method: 'get',
  path: '/v2/events/trades',
  tags: ['Events', 'Trading'],
  summary: 'Subscribe to Trade Events (SSE)',
  description:
    "The Events API provides event push as well as historical queries via SSE (server sent events).\n\nYou can listen to events related to trade updates. Most market trades sent during market hours are filled instantly; you can listen to limit order updates through this endpoint.\n\nHistorical events are streamed immediately if queried, and updates are pushed as events occur.\n\nQuery Params Rules:\n- `since` required if `until` specified\n- `since_id` required if `until_id` specified\n- `since` and `since_id` can't be used at the same time\nBehavior:\n- if `since` or `since_id` not specified this will not return any historic data\n- if `until` or `until_id` reached stream will end (status 200)\n\n---\n\nNote for people using the clients generated from this OAS spec. Currently OAS-3 doesn't have full support for representing SSE style responses from an API, so if you are using a generated client and don't specify a `since` and `until` there is a good chance the generated clients will hang waiting for the response to end.\n\nIf you require the streaming capabilities we recommend not using the generated clients for this specific usecase until the OAS-3 standards come to a consensus on how to represent this correctly in OAS-3.\n\n---\n\n**Legacy trade events API deprecation**\n\nThe legacy v1 trade events endpoint has been fully deprecated and is no longer available. Use `/v2/events/trades` for all trade event integrations.\n\n---\n\n###  Comment messages\nAccording to the SSE specification, any line that starts with a colon is a comment which does not contain data.  It is typically a free text that does not follow any data schema. A few examples mentioned below for comment messages.\n\n#####  Slow client\n\nThe server sends a comment when the client is not consuming messages fast enough. Example: `: you are reading too slowly, dropped 10000 messages`\n\n##### Internal server error\n\nAn error message is sent as a comment when the server closes the connection on an internal server error (only sent by the v2 and v2beta1 endpoints). Example: `: internal server error`\n\n---\n\n**Common events**\n\nThese are the events that are the expected results of actions you may have taken by sending API requests.\n\nThe meaning of the timestamp field changes for each type; the meanings have been specified here for which types the timestamp field will be present.\n\n- `accepted` Sent when an order is received and accepted by Alpaca\n- `pending_new` Sent when the order has been received by Alpaca and routed to the exchanges, but has not yet been accepted for execution.\n- `new` Sent when an order has been routed to exchanges for execution.\n- `fill` Sent when your order has been completely filled.\n  - timestamp: The time at which the order was filled.\n- `partial_fill` Sent when a number of shares less than the total remaining quantity on your order has been filled.\n  - timestamp: The time at which the shares were filled.\n- `canceled` Sent when your requested cancellation of an order is processed.\n  - timestamp: The time at which the order was canceled.\n- `expired` Sent when an order has reached the end of its lifespan, as determined by the order's time in force value.\n  - timestamp: The time at which the order expired.\n- `done_for_day` Sent when the order is done executing for the day, and will not receive further updates until the next trading day.\n- `replaced` Sent when your requested replacement of an order is processed.\n  - timestamp: The time at which the order was replaced.\n\n**Rarer events**\n\nThese are events that may rarely be sent due to unexpected circumstances on the exchanges. It is unlikely you will need to design your code around them, but you may still wish to account for the possibility that they will occur.\n\n- `rejected` Sent when your order has been rejected.\n  - timestamp: The time at which the rejection occurred.\n- `held` For multi-leg orders, the secondary orders (stop loss, take profit) will enter this state while waiting to be triggered.\n- `stopped` Sent when your order has been stopped, and a trade is guaranteed for the order, usually at a stated price or better, but has not yet occurred.\n- `pending_cancel` Sent when the order is awaiting cancellation. Most cancellations will occur without the order entering this state.\n- `pending_replace` Sent when the order is awaiting replacement.\n- `calculated` Sent when the order has been completed for the day - it is either filled or done_for_day - but remaining settlement calculations are still pending.\n- `suspended` Sent when the order has been suspended and is not eligible for trading.\n- `order_replace_rejected` Sent when the order replace has been rejected.\n- `order_cancel_rejected` Sent when the order cancel has been rejected.\n- `trade_bust`: Sent when a previously reported execution has been canceled (\"busted\") by the upstream exchange.\n- `trade_correct`: Sent when a previously reported trade has been corrected. For example, the exchange may have updated the price, quantity, or another execution parameter after the trade was initially reported.\n- `restated`: Sent when the order is manually modified.",
  operationId: 'subscribeToTradeV2SSE',
  request: {
    query: z.object({
      since: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Format: YYYY-MM-DD',
            in: 'query',
            name: 'since',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      until: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Format: YYYY-MM-DD',
            in: 'query',
            name: 'until',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      since_id: z
        .ulid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'since_id',
            schema: { format: 'ulid', type: 'string' },
            required: false,
          },
        }),
      until_id: z
        .ulid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'until_id',
            schema: { format: 'ulid', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Connected. Events will now start streaming as long as you keep the connection open.',
      content: {
        'text/event-stream': {
          schema: z.array(TradeUpdateEventV2Schema),
          examples: {
            'Bracket-leg-new': TradeUpdateEventV2BracketLegNewExample,
            'MultilegOptions-fill': TradeUpdateEventV2MultilegOptionsFillExample,
            new: TradeUpdateEventV2NewExample,
          },
        },
      },
    },
  },
})
