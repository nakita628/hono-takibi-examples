import { createRoute, z } from '@hono/zod-openapi'

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
  .enum([
    'us_equity',
    'us_option',
    'crypto',
    'crypto_perp',
    'treasury',
    'corporate',
    'global_equity',
    'us_index',
    'us_equity_chain',
    'ipo',
  ])
  .openapi({
    description:
      'This represents the category to which the asset belongs to. It serves to identify the nature of the financial instrument, with options including "us_equity" for U.S. equities, "us_option" for U.S. options, "crypto" for cryptocurrencies, and "ipo" for IPO indications of interest/orders. This `asset_class: ipo` value is distinct from the assets API `attributes: ["ipo"]` flag.',
    example: 'us_equity',
    examples: ['us_equity'],
    title: 'AssetClass',
  })
  .openapi('AssetClass')

const ExchangeForPositionSchema = z
  .enum([
    'AMEX',
    'ARCA',
    'BATS',
    'NYSE',
    'NASDAQ',
    'NYSEARCA',
    'OTC',
    'CRYPTO',
    'TXSE',
    'ERSX',
    'CRXL',
    'ASCX',
    'INDEX',
    '',
  ])
  .openapi({
    description:
      'Represents the current exchanges Alpaca supports. List is currently:\n\nUS equities:\n- AMEX\n- ARCA\n- BATS\n- NYSE\n- NASDAQ\n- NYSEARCA\n- OTC\n- TXSE\n\nCrypto:\n- CRYPTO\n- ERSX\n- CRXL\n\nCrypto perpetuals:\n- ASCX\n\nIndex symbols:\n- INDEX\n\nINDEX is the artificial exchange for index symbols such as SPX.\n\nCan be empty if not applicable (e.g., for options contracts)',
    example: 'NYSE',
    title: 'Exchange',
  })
  .openapi('ExchangeForPosition')

const USDPositionValuesSchema = z
  .object({
    avg_entry_price: z
      .string()
      .openapi({ description: 'Average entry price of the position in USD', example: '71.43' }),
    change_today: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Percent change from last day price (by a factor of 1)',
        example: '0.67',
      }),
    cost_basis: z.string().openapi({ description: 'Total cost basis in USD', example: '333.33' }),
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
        description: 'Unrealized intraday profit/loss percent (by a factor of 1)',
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
    required: ['avg_entry_price', 'cost_basis'],
    title: 'USDPositionValues',
  })
  .openapi('USDPositionValues')

type PositionType = {
  asset_class: z.infer<typeof AssetClassSchema>
  asset_id: string
  asset_marginable: boolean
  avg_entry_price: string
  avg_entry_swap_rate?: string
  change_today: string
  cost_basis: string
  current_price: string
  exchange: z.infer<typeof ExchangeForPositionSchema>
  lastday_price: string
  market_value: string
  prev_swap_rate?: string
  qty: string
  qty_available?: string
  side: 'long' | 'short'
  swap_rate?: string
  symbol: string
  unrealized_intraday_pl: string
  unrealized_intraday_plpc: string
  unrealized_pl: string
  unrealized_plpc: string
  usd?: z.infer<typeof USDPositionValuesSchema>
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

const AccountStatusSchema = z
  .enum([
    'INACTIVE',
    'PAPER_ONLY',
    'ONBOARDING',
    'SUBMISSION_FAILED',
    'SUBMITTED',
    'ACCOUNT_UPDATED',
    'APPROVAL_PENDING',
    'ACTIVE',
    'REJECTED',
    'ACCOUNT_CLOSED',
    'APPROVED',
    'ACCOUNT_CLOSED_PENDING',
    'ACTION_REQUIRED',
    'LIMITED',
  ])
  .openapi({
    description:
      'An enum representing the various possible account status values.\n\nMost likely, the account status is ACTIVE unless there is any problem. The account status may get in ACCOUNT_UPDATED when personal information is being updated from the dashboard, in which case you may not be allowed trading for a short period of time until the change is approved.\n\n- ONBOARDING\n  The account is onboarding.\n- SUBMISSION_FAILED\n  The account application submission failed for some reason.\n- SUBMITTED\n  The account application has been submitted for review.\n- ACCOUNT_UPDATED\n  The account information is being updated.\n- APPROVAL_PENDING\n  The final account approval is pending.\n- ACTIVE\n  The account is active for trading.\n- REJECTED\n  The account application has been rejected.',
    example: 'ACTIVE',
    examples: ['ACTIVE'],
    title: 'AccountStatus',
  })
  .openapi('AccountStatus')

const AccountSchema = z
  .object({
    account_blocked: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, the account activity by user is prohibited.' }),
    account_number: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Account number.' }),
    accrued_fees: z.string().exactOptional().openapi({ description: 'The fees collected.' }),
    balance_asof: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date of the snapshot for `last_*` fields',
        example: '2021-04-01',
      }),
    buying_power: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Current available $ buying power; If multiplier = 4, this is your daytrade buying power which is calculated as (last_equity - (last) maintenance_margin) * 4; If multiplier = 2, buying_power = max(equity - initial_margin,0) * 2; If multiplier = 1, buying_power = cash',
      }),
    cash: z.string().exactOptional().openapi({ description: 'Cash Balance\n' }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Timestamp this account was created at\n' }),
    crypto_status: AccountStatusSchema.exactOptional(),
    currency: z.string().exactOptional().openapi({ description: 'USD\n', example: 'USD' }),
    equity: z
      .string()
      .exactOptional()
      .openapi({ description: 'Cash + long_market_value + short_market_value' }),
    id: z.uuid().openapi({ description: 'Account Id.\n' }),
    initial_margin: z
      .string()
      .exactOptional()
      .openapi({ description: 'Reg T initial margin requirement (continuously updated value)' }),
    intraday_adjustments: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The intraday adjustment by non_trade_activities such as fund deposit/withdraw.\n',
        example: '0',
      }),
    last_equity: z
      .string()
      .exactOptional()
      .openapi({ description: 'Equity as of previous trading day at 16:00:00 ET' }),
    last_maintenance_margin: z
      .string()
      .exactOptional()
      .openapi({ description: 'Your maintenance margin requirement on the previous trading day' }),
    long_market_value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Real-time MtM value of all long positions held in the account\n' }),
    maintenance_margin: z
      .string()
      .exactOptional()
      .openapi({ description: 'Maintenance margin requirement (continuously updated value)' }),
    multiplier: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Buying power multiplier that represents account margin classification; valid values 1 (standard limited margin account with 1x buying power), 2 (reg T margin account with 2x intraday and overnight buying power; this is the default for all non-PDT accounts with $2,000 or more equity), 4 (PDT account with 4x intraday buying power and 2x reg T overnight buying power)',
      }),
    non_marginable_buying_power: z
      .string()
      .exactOptional()
      .openapi({ description: 'Current available non-margin dollar buying power' }),
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
      .openapi({ description: 'Your buying power for options trading\n' }),
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
      .openapi({ description: 'Pending regulatory fees for the account.\n' }),
    pending_transfer_in: z
      .string()
      .exactOptional()
      .openapi({ description: 'Cash pending transfer in.' }),
    pending_transfer_out: z
      .string()
      .exactOptional()
      .openapi({ description: 'Cash pending transfer out.' }),
    portfolio_value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Total value of cash + holding positions (This field is deprecated. It is equivalent to the equity field.)',
      }),
    regt_buying_power: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Your buying power under Regulation T (your excess equity - equity minus margin value - times your margin multiplier)\n',
      }),
    short_market_value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Real-time MtM value of all short positions held in the account' }),
    shorting_enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag to denote whether or not the account is permitted to short' }),
    sma: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Value of special memorandum account (will be used at a later date to provide additional buying_power)',
      }),
    status: AccountStatusSchema,
    trade_suspended_by_user: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'User setting. If true, the account is not allowed to place orders.',
      }),
    trading_blocked: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, the account is not allowed to place orders.\n' }),
    transfers_blocked: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, the account is not allowed to request money transfers.' }),
  })
  .openapi({
    description:
      "The account API serves important information related to an account, including account status, funds available for trade, funds available for withdrawal, and various flags relevant to an account's ability to trade. An account maybe be blocked for just for trades (trades_blocked flag) or for both trades and transfers (account_blocked flag) if Alpaca identifies the account to engaging in any suspicious activity. Please note that cryptocurrencies are not eligible assets to be used as collateral for margin accounts and will require the asset be traded using cash only.\n",
    examples: [
      {
        account_blocked: false,
        account_number: '010203ABCD',
        balance_asof: '2023-09-27',
        buying_power: '262113.632',
        cash: '-23140.2',
        created_at: '2019-06-12T22:47:07.99658Z',
        currency: 'USD',
        equity: '103820.56',
        id: 'e6fe16f3-64a4-4921-8928-cadf02f92f98',
        initial_margin: '63480.38',
        intraday_adjustments: '0',
        last_equity: '103529.24',
        last_maintenance_margin: '38000.832',
        long_market_value: '126960.76',
        maintenance_margin: '38088.228',
        multiplier: '4',
        options_approved_level: 2,
        options_buying_power: '40340.18',
        options_trading_level: 1,
        pending_reg_taf_fees: '0',
        portfolio_value: '103820.56',
        regt_buying_power: '80680.36',
        short_market_value: '0',
        shorting_enabled: true,
        sma: '0',
        status: 'ACTIVE',
        trade_suspended_by_user: false,
        trading_blocked: false,
        transfers_blocked: false,
      },
    ],
    required: ['id', 'status'],
    title: 'Account',
  })
  .openapi('Account')

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
    max_margin_multiplier: z
      .string()
      .exactOptional()
      .openapi({ description: 'Can be "1", "2", or "4"' }),
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
      .string()
      .exactOptional()
      .openapi({ description: 'all or none. If none, emails for order fills are not sent.' }),
  })
  .openapi({
    description:
      'The account configuration API provides custom configurations about your trading account settings. These configurations control various allow you to modify settings to suit your trading needs.',
    examples: [
      {
        disable_overnight_trading: false,
        fractional_trading: true,
        max_margin_multiplier: '4',
        no_shorting: false,
        suspend_trade: false,
        trade_confirm_email: 'all',
      },
    ],
    title: 'AccountConfigurations',
    required: [],
  })
  .openapi('AccountConfigurations')

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
      ca_id: z.uuid().openapi({ description: 'The unique identifier for this corporate action' }),
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
  .openapi({
    description: 'On chain transaction (blockchain deposit/withdrawal)',
    example: {
      symbol: 'USDCUSD',
      system_date: '2026-07-31',
      transfer_id: '08d7a129-bd3e-4480-94ff-1a7288166845',
    },
  })
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
    OpcaUSPLITActivityV2Schema,
    OpcaRSPLITActivityV2Schema,
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

const ActivitySubTypeSchema = z
  .string()
  .openapi({
    description:
      'Represents a more specific classification to the `activity_type`.\nThis field is optional and may not always be populated, depending on the activity type and the available data.\nEach `activity_type` has a set of valid `activity_sub_type` values.\n\nFull mapping of `activity_type` to `activity_sub_type`:\n\n- **CGD**: Capital Gains Distribution activity sub-types:\n  - **LTCG**: Long-Term Capital Gain\n  - **STCG**: Short-Term Capital Gain\n\n- **DIV**: Dividend activity sub-types:\n  - **CDIV**: Cash Dividend\n  - **ROC**: Return of Capital\n  - **SDIV**: Stock Dividend\n  - **SPD**: Substitute Payment In Lieu Of Dividend\n\n- **FEE**: Fee-related activity sub-types:\n  - **REG**: Regulatory Fee\n  - **TAF**: Trading Activity Fee\n  - **LCT**: Local Currency Trading Fee\n  - **ORF**: Options Regulatory Fee\n  - **OCC**: Options Clearing Corporation Fee\n  - **NRC**: Non-Retail Commission Fee\n  - **NRV**: Non-Retail Venue Fee\n  - **COM**: Commission\n  - **CAT**: Consolidated Audit Trail Fee\n\n- **INT**: Interest-related activity sub-types:\n  - **MGN**: Margin Interest\n  - **CDT**: Credit Interest\n  - **SWP**: Sweep Interest\n  - **QII**: Qualified Interest\n  - **FI**: Fixed Income Interest (coupon or accrued)\n\n- **MA**: Merger and Acquisition activity sub-types:\n  - **CMA**: Cash Merger\n  - **SMA**: Stock Merger\n  - **SCMA**: Stock & Cash Merger\n\n- **NC**: Name Change activity sub types\n  - **SNC**: Symbol Name Change\n  - **CNC**: CUSIP Name Change\n  - **SCNC**: Symbol & CUSIP Name Change\n\n- **OPCA**: Option Corporate Action activity sub-types:\n  - **DIV.CDIV**: Cash Dividend\n  - **DIV.ROC**: Return of Capital\n  - **DIV.SDIV**: Stock Dividend\n  - **MA.CMA**: Cash Merger\n  - **MA.SMA**: Stock Merger\n  - **MA.SCMA**: Stock & Cash Merger\n  - **NC.CNC**: CUSIP Name Change\n  - **NC.SNC**: Symbol Name Change\n  - **NC.SCNC**: Symbol & CUSIP Name Change\n  - **SPIN**: Spin-off\n  - **SPLIT.FSPLIT**: Forward Stock Split\n  - **SPLIT.RSPLIT**: Reverse Stock Split\n  - **SPLIT.USPLIT**: Unit Split\n\n- **REO**: Reorganization activity sub-types\n  - **REOS**: Stock only (1 or more stock legs)\n  - **REOC**: Cash only (1 cash leg)\n  - **REOSC**: Stock and cash\n\n- **REORG**: Activity sub-types:\n  - **WRM**: Worthless Removal\n\n- **SPLIT**: Stock Split activity sub-types:\n  - **FSPLIT**: Forward Stock Split\n  - **RSPLIT**: Reverse Stock Split\n  - **USPLIT**: Unit Split\n\n- **VOF**: Voluntary Offering activity sub-types:\n  - **VTND**: Tender Offer\n  - **VWRT**: Warrant Exercise\n  - **VRGT**: Rights Offer\n  - **VEXH**: Exchange Offer\n\n- **WH**: Withholding activity sub-types:\n  - **SWH**: State Withholding\n  - **FWH**: Federal Withholding\n  - **SLWH**: Sales Withholding',
    title: 'ActivitySubType',
  })
  .openapi('ActivitySubType')

const ActivityTypeSchema = z
  .enum([
    'FILL',
    'TRANS',
    'MISC',
    'ACATC',
    'ACATS',
    'CFEE',
    'CGD',
    'CSD',
    'CSW',
    'DIV',
    'DIVCGL',
    'DIVCGS',
    'DIVFEE',
    'DIVFT',
    'DIVNRA',
    'DIVROC',
    'DIVTW',
    'DIVTXEX',
    'FEE',
    'INT',
    'INTNRA',
    'INTTW',
    'JNL',
    'JNLC',
    'JNLS',
    'MA',
    'NC',
    'OPASN',
    'OPCA',
    'OPCSH',
    'OPEXC',
    'OPEXP',
    'OPTRD',
    'PTC',
    'PTR',
    'REO',
    'REORG',
    'SPIN',
    'SPLIT',
    'FOPT',
    'OCT',
  ])
  .openapi({
    description:
      '- FILL\n  Order fills (both partial and full fills)\n\n- TRANS\n  Cash transactions (both CSD and CSW)\n\n- MISC\n  Miscellaneous or rarely used activity types (All types except those in TRANS, DIV, or FILL)\n\n- ACATC\n  ACATS IN/OUT (Cash)\n\n- ACATS\n  ACATS IN/OUT (Securities)\n\n- CFEE\n  Crypto fee\n\n- CGD\n  Capital gains distribution\n\n- CSD\n  Cash deposit(+)\n\n- CSW\n  Cash withdrawal(-)\n\n- DIV\n  Dividends\n\n- DIVCGL\n  Dividend (capital gains long term)\n\n- DIVCGS\n  Dividend (capital gains short term)\n\n- DIVFEE\n  Dividend fee\n\n- DIVFT\n  Dividend adjusted (Foreign Tax Withheld)\n\n- DIVNRA\n  Dividend adjusted (NRA Withheld)\n\n- DIVROC\n  Dividend return of capital\n\n- DIVTW\n  Dividend adjusted (Tefra Withheld)\n\n- DIVTXEX\n  Dividend (tax exempt)\n\n- FEE\n  Fee denominated in USD\n\n- INT\n  Interest (credit/margin)\n\n- INTNRA\n  Interest adjusted (NRA Withheld)\n\n- INTTW\n  Interest adjusted (Tefra Withheld)\n\n- JNL\n  Journal entry\n\n- JNLC\n  Journal entry (cash)\n\n- JNLS\n  Journal entry (stock)\n\n- MA\n  Merger/Acquisition\n\n- NC\n  Name change\n\n- OPASN\n  Option assignment\n\n- OPCA\n  Option corporate action\n\n- OPCSH\n  Option cash deliverable for non-standard contracts\n\n- OPEXC\n  Option exercise\n\n- OPEXP\n  Option expiration\n\n- OPTRD\n  Option trade\n\n- PTC\n  Pass Thru Charge\n\n- PTR\n  Pass Thru Rebate\n\n- REO\n  Reorganization\n\n- REORG\n  Worthless removal CA\n\n- SPIN\n  Stock spinoff\n\n- SPLIT\n  Stock split\n\n- FOPT\n  Free of Payment Transfers\n\n- OCT\n  On chain transactions (blockchain deposits/withdrawals)',
    examples: ['FILL'],
    title: 'ActivityType',
  })
  .openapi('ActivityType')

const AddAssetToWatchlistRequestSchema = z
  .object({
    symbol: z
      .string()
      .exactOptional()
      .openapi({ description: 'the symbol name to add to the watchlist', example: 'AAPL' }),
  })
  .openapi({
    description: 'Request format used for appending an asset to an existing watchlist.',
    title: 'AddAssetToWatchlistRequest',
    required: [],
  })
  .openapi('AddAssetToWatchlistRequest')

const AdvancedInstructionsSchema = z
  .object({
    algorithm: z
      .enum(['DMA', 'TWAP', 'VWAP'])
      .exactOptional()
      .openapi({
        description: 'The advanced routing algorithm to use for the order',
        example: 'DMA',
      }),
    destination: z
      .enum(['NYSE', 'NASDAQ', 'ARCA', 'IEX', 'MEMX'])
      .exactOptional()
      .openapi({ description: 'Target exchange for order execution', example: 'NYSE' }),
    display_qty: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Maximum shares/contracts displayed on the exchange at any time. Must be in round lot increments',
        example: '100',
      }),
    end_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'When the algorithm is to be done executing. Must be within current market trading hours',
        example: '2025-07-21T15:30:00-04:00',
      }),
    max_percentage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Maximum percentage of the ticker's period volume this order might participate in. Must be 0 < max_percentage < 1, with up to 3 decimal points precision.",
        example: '0.314',
      }),
    start_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'When the algorithm is to start executing. Must be within current market trading hours',
        example: '2025-07-21T09:30:00-04:00',
      }),
  })
  .openapi({
    description:
      'Advanced instructions for Elite Smart Router: https://docs.alpaca.markets/docs/alpaca-elite-smart-router',
    examples: [
      { algorithm: 'DMA', destination: 'NYSE', display_qty: '100' },
      {
        algorithm: 'TWAP',
        end_time: '2025-07-21T15:30:00-04:00',
        max_percentage: '0.314',
        start_time: '2025-07-21T09:30:00-04:00',
      },
      {
        algorithm: 'VWAP',
        end_time: '2025-07-21T15:30:00-04:00',
        max_percentage: '0.314',
        start_time: '2025-07-21T09:30:00-04:00',
      },
    ],
    title: 'AdvancedInstructions',
    required: [],
  })
  .openapi('AdvancedInstructions')

const AssetAttributeSchema = z
  .enum([
    'ptp_no_exception',
    'ptp_with_exception',
    'ipo',
    'has_options',
    'options_late_close',
    'fractional_eh_enabled',
    'overnight_tradable',
    'overnight_halted',
  ])
  .openapi({
    description:
      "Unique characteristic of an asset. Supported values:\n- `ptp_no_exception`: Asset is a Publicly Traded Partnership (PTP) without a qualified notice; non-U.S. customers may incur 10% withholding on gross proceeds as per IRS guidance, and are blocked from being purchased by default.\n- `ptp_with_exception`: Users can open positions in these PTPs without general restrictions.\n- `ipo`: Accepting limit orders only before the stock begins trading on the secondary market.\n- `has_options`: The underlying equity has listed options available on the platform. Note: if the equity had inactive/expired contracts in the past, this will still show up.\n- `options_late_close`: Indicates the underlying asset's options contracts close at 4:15pm ET instead of the standard 4:00pm ET.\n- `fractional_eh_enabled`: Indicates the asset accepts fractional orders during extended hours sessions (pre-market, post-market, and overnight if enabled).\n- `overnight_tradable`: Asset is eligible for overnight (24x5) trading in supported venues on the platform.\n- `overnight_halted`: Asset is eligible for overnight trading but is currently halted/blocked for overnight sessions due to risk, corporate action, compliance, or venue constraints.",
    example: 'ptp_no_exception',
  })
  .openapi('AssetAttribute')

const ExchangeSchema = z
  .enum([
    'AMEX',
    'ARCA',
    'BATS',
    'NYSE',
    'NASDAQ',
    'NYSEARCA',
    'OTC',
    'CRYPTO',
    'TXSE',
    'ERSX',
    'CRXL',
    'ASCX',
    'INDEX',
  ])
  .openapi({
    description:
      'Represents the current exchanges Alpaca supports. List is currently:\n\nUS equities:\n- AMEX\n- ARCA\n- BATS\n- NYSE\n- NASDAQ\n- NYSEARCA\n- OTC\n- TXSE\n\nCrypto:\n- CRYPTO\n- ERSX\n- CRXL\n\nCrypto perpetuals:\n- ASCX\n\nIndex symbols:\n- INDEX\n\nINDEX is the artificial exchange for index symbols such as SPX.',
    example: 'NYSE',
    title: 'Exchange',
  })
  .openapi('Exchange')

const AssetsSchema = z
  .object({
    attributes: z
      .array(AssetAttributeSchema)
      .exactOptional()
      .openapi({ example: ['ptp_no_exception', 'ipo'] }),
    borrow_status: z
      .enum(['easy_to_borrow', 'hard_to_borrow'])
      .exactOptional()
      .openapi({
        description:
          'Borrow status for US equity assets. This field is omitted for non-US-equity assets.',
        example: 'easy_to_borrow',
      }),
    class: AssetClassSchema,
    cusip: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The CUSIP identifier for the asset (US Equities only).\nTo request a specific CUSIP, please reach out to Alpaca support.\n',
        example: '987654321',
      }),
    exchange: ExchangeSchema,
    fractionable: z.boolean().openapi({ description: 'Asset is fractionable or not' }),
    id: z.uuid().openapi({ description: 'Asset ID' }),
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
      .exactOptional()
      .openapi({
        description:
          "The margin requirement percentage for the asset's long positions (equities only), encoded as a decimal string.",
        example: '100',
      }),
    margin_requirement_short: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The margin requirement percentage for the asset's short positions (equities only), encoded as a decimal string.",
        example: '30',
      }),
    marginable: z.boolean().openapi({ description: 'Asset is marginable or not' }),
    min_order_size: z
      .string()
      .exactOptional()
      .openapi({ description: 'Minimum order size. Field available for crypto only.' }),
    min_trade_increment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Amount a trade quantity can be incremented by. Field available for crypto only.',
      }),
    name: z.string().min(1).openapi({ description: 'The official name of the asset' }),
    price_increment: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Amount the price can be incremented by. Field available for crypto only.',
      }),
    shortable: z.boolean().openapi({ description: 'Asset is shortable or not' }),
    status: z
      .enum(['active', 'inactive'])
      .openapi({ description: 'active or inactive', example: 'active' }),
    symbol: z.string().openapi({ description: 'The symbol of the asset', example: 'AAPL' }),
    tradable: z.boolean().openapi({ description: 'Asset is tradable on Alpaca or not' }),
  })
  .openapi({
    description:
      'The assets API serves as the master list of assets available for trade and data consumption from Alpaca. Assets are sorted by asset class, exchange and symbol. Some assets are only available for data consumption via Polygon, and are not tradable with Alpaca. These assets will be marked with the flag tradable=false.\n',
    examples: [
      {
        borrow_status: 'easy_to_borrow',
        class: 'us_equity',
        easy_to_borrow: true,
        exchange: 'NASDAQ',
        fractionable: true,
        id: 'b0b6dd9d-8b9b-48a9-ba46-b9d54906e415',
        marginable: true,
        name: 'Apple Inc. Common Stock',
        shortable: true,
        status: 'active',
        symbol: 'AAPL',
        tradable: true,
      },
    ],
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
    ],
    title: 'Assets',
  })
  .openapi('Assets')

const CanceledOrderResponseSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ description: 'orderId' }),
    status: z.int().exactOptional().openapi({ description: 'http response code', example: 200 }),
  })
  .openapi({
    description: 'Represents the result of a request to cancel and order',
    examples: [{ id: 'd56ba3ea-6d04-48ce-8175-817e242ee608', status: 200 }],
    title: 'CanceledOrderResponse',
    required: [],
  })
  .openapi('CanceledOrderResponse')

const CorporateActionCaTypeSchema = z
  .enum(['Spinoff', 'Merger', 'Split', 'Reorg', 'Dividend'])
  .openapi({
    description: 'The type of corporate action.',
    example: 'Dividend',
    title: 'CorporateActionCaType',
  })
  .openapi('CorporateActionCaType')

const CorporateAnnouncementSchema = z
  .object({
    ca_sub_type: z.string().exactOptional(),
    ca_type: CorporateActionCaTypeSchema.exactOptional(),
    cash: z.string().exactOptional(),
    corporate_action_id: z.string().exactOptional(),
    declaration_date: z.iso.date().exactOptional(),
    effective_date: z.iso.date().exactOptional(),
    ex_date: z.iso.date().exactOptional(),
    id: z.string().exactOptional(),
    initiating_original_cusip: z.string().exactOptional(),
    initiating_symbol: z.string().exactOptional(),
    new_rate: z.string().exactOptional(),
    old_rate: z.string().exactOptional(),
    payable_date: z.iso.date().exactOptional(),
    record_date: z.iso.date().exactOptional(),
    target_original_cusip: z.string().exactOptional(),
    target_symbol: z.string().exactOptional(),
  })
  .openapi({
    description: 'A corporate action announcement.',
    examples: [
      {
        ca_sub_type: 'DIV',
        ca_type: 'Dividend',
        cash: '0.018',
        corporate_action_id: 'F58684224_XY37',
        declaration_date: '2021-01-05',
        effective_date: '2021-01-08',
        ex_date: '2021-01-12',
        id: 'be3c368a-4c7c-4384-808e-f02c9f5a8afe',
        initiating_original_cusip: '55275E101',
        initiating_symbol: 'MLLAX',
        new_rate: '1',
        old_rate: '1',
        payable_date: '2021-01-14',
        record_date: '2021-01-13',
        target_original_cusip: '55275E101',
        target_symbol: 'MLLAX',
      },
    ],
    title: 'CorporateAnnouncement',
    required: [],
  })
  .openapi('CorporateAnnouncement')

const CreateLocateRequestSchema = z
  .object({
    all_or_none: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'Reject the locate unless the full requested quantity is available.',
        example: false,
      }),
    limit_price: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Maximum acceptable locate fee per share, as a decimal string in USD.\nIf omitted, any quoted fee is accepted.\n',
        example: '0.05',
      }),
    qty: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        description:
          'Number of shares to locate. Must be positive and in round lots of 100; invalid quantities return HTTP 400.',
        example: 100,
      }),
    symbol: z.string().openapi({ description: 'Stock symbol.', example: 'TSLA' }),
  })
  .openapi({
    description: 'Request to locate shares for a short sale.',
    example: { all_or_none: false, limit_price: '0.05', qty: 100, symbol: 'TSLA' },
    required: ['symbol', 'qty'],
  })
  .openapi('CreateLocateRequest')

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
      'Represents which side this order was on:\n- buy\n- sell\nRequired for all order classes except for mleg.',
    example: 'buy',
    title: 'OrderSide',
  })
  .openapi('OrderSide')

const MLegOrderLegSchema = z
  .object({
    position_intent: PositionIntentSchema.exactOptional(),
    ratio_qty: z
      .string()
      .openapi({
        description:
          'proportional quantity of this leg in relation to the overall multi-leg order qty',
      }),
    side: OrderSideSchema.exactOptional(),
    symbol: z
      .string()
      .openapi({ description: 'symbol or asset ID to identify the asset to trade' }),
  })
  .openapi({
    description: 'Represents an individual leg of a multi-leg options order.',
    required: ['symbol', 'ratio_qty'],
    title: 'MLegOrderLeg',
  })
  .openapi('MLegOrderLeg')

const OrderClassSchema = z
  .enum(['simple', 'bracket', 'oco', 'oto', 'mleg', ''])
  .openapi({
    description:
      'The order classes supported by Alpaca vary based on the order\'s security type. The following provides a comprehensive breakdown of the supported order classes for each category:\n  - Equity trading: simple (or ""), oco, oto, bracket.\n  - Options trading:\n    - simple (or "")\n    - mleg (required for multi-leg complex option strategies)\n  - Crypto trading: simple (or "").',
    example: 'bracket',
    title: 'OrderClass',
  })
  .openapi('OrderClass')

const TimeInForceSchema = z
  .enum(['day', 'gtc', 'opg', 'cls', 'ioc', 'fok'])
  .openapi({
    description:
      'The Time-In-Force values supported by Alpaca vary based on the order\'s security type. Here is a breakdown of the supported TIFs for each specific security type:\n- Equity trading: day, gtc, opg, cls, ioc, fok.\n- Options trading: day, gtc.\n- Crypto trading: gtc, ioc.\n\nBelow are the descriptions of each TIF:\n- day:\n  A day order is eligible for execution only on the day it is live. By default, the order is only valid during Regular Trading Hours (9:30am - 4:00pm ET). If unfilled after the closing auction, it is automatically canceled. If submitted after the close, it is queued and submitted the following trading day. However, if marked as eligible for extended hours, the order can also execute during supported extended hours.\n\n- gtc:\n  The order is good until canceled. Non-marketable GTC limit orders are subject to price adjustments to offset corporate actions affecting the issue. We do not currently support Do Not Reduce (DNR) orders to opt out of such price adjustments.\n\n- opg:\n  Use this TIF with a market/limit order type to submit "market on open" (MOO) and "limit on open" (LOO) orders. This order is eligible to execute only in the market opening auction. Any unfilled orders after the open will be cancelled. OPG orders submitted after 9:28am but before 7:00pm ET will be rejected. OPG orders submitted after 7:00pm will be queued and routed to the following day\'s opening auction. On open/on close orders are routed to the primary exchange. Such orders do not necessarily execute exactly at 9:30am / 4:00pm ET but execute per the exchange\'s auction rules.\n\n- cls:\n  Use this TIF with a market/limit order type to submit "market on close" (MOC) and "limit on close" (LOC) orders. This order is eligible to execute only in the market closing auction. Any unfilled orders after the close will be cancelled. CLS orders submitted after 3:50pm but before 7:00pm ET will be rejected. CLS orders submitted after 7:00pm will be queued and routed to the following day\'s closing auction. Only available with API v2.\n\n- ioc:\n  An Immediate Or Cancel (IOC) order requires all or part of the order to be executed immediately. Any unfilled portion of the order is canceled. Only available with API v2. Most market makers who receive IOC orders will attempt to fill the order on a principal basis only, and cancel any unfilled balance. On occasion, this can result in the entire order being cancelled if the market maker does not have any existing inventory of the security in question.\n\n- fok:\n  A Fill or Kill (FOK) order is only executed if the entire order quantity can be filled, otherwise the order is canceled. Only available with API v2.',
    example: 'day',
    title: 'TimeInForce',
  })
  .openapi('TimeInForce')

const OrderTypeSchema = z
  .enum(['market', 'limit', 'stop', 'stop_limit', 'trailing_stop'])
  .openapi({
    description:
      "The order types supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order types for each category:\n - Equity trading: market, limit, stop, stop_limit, trailing_stop.\n - Options trading: market, limit, stop, stop_limit.\n - Multileg Options trading: market, limit.\n - Crypto trading: market, limit, stop_limit.",
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
        example: '5680c4bc-9ac1-4a12-a44c-df427ba53032',
      }),
    extended_hours: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '(default) false. If true, order will be eligible for execution in the pre-market, after-hours, and overnight sessions. Only works with type `limit` and time_in_force set to either `day` or `gtc`',
        example: false,
      }),
    legs: z
      .array(MLegOrderLegSchema)
      .max(4)
      .exactOptional()
      .openapi({
        description: 'list of order legs (<= 4)',
        example: [
          {
            position_intent: 'buy_to_open',
            ratio_qty: '3',
            side: 'buy',
            symbol: 'AAPL241213C00250000',
          },
        ],
      }),
    limit_price: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required if type is `limit` or `stop_limit`.\nIn case of `mleg`, the limit_price parameter is expressed with the following notation:\n- A positive value indicates a debit, representing a cost or payment to be made.\n- A negative value signifies a credit, reflecting an amount to be received.',
        example: '150',
      }),
    notional: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'dollar amount to trade. Cannot work with `qty`. Can only work for market order types and day for time in force.',
        example: '500',
      }),
    order_class: OrderClassSchema.exactOptional(),
    position_intent: PositionIntentSchema.exactOptional(),
    qty: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'number of shares to trade. Can be fractionable for only market and day order types. Required for `mleg` order class, represents the number of units to trade of this strategy.',
        example: '2',
      }),
    side: OrderSideSchema.exactOptional(),
    stop_loss: z
      .object({
        limit_price: z.string().exactOptional().openapi({ example: '3.14' }),
        stop_price: z.string().exactOptional().openapi({ example: '3.14' }),
      })
      .exactOptional()
      .openapi({
        description: 'Takes in string/number values for stop_price and limit_price',
        required: [],
      }),
    stop_price: z
      .string()
      .exactOptional()
      .openapi({ description: 'required if type is `stop` or `stop_limit`', example: '140' }),
    symbol: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'symbol, asset ID, or currency pair to identify the asset to trade, required for all order classes except for `mleg`.',
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
        description: 'this or `trail_price` is required if type is `trailing_stop`',
        example: '1.5',
      }),
    trail_price: z
      .string()
      .exactOptional()
      .openapi({
        description: 'this or `trail_percent` is required if type is `trailing_stop`',
        example: '1.00',
      }),
    type: OrderTypeSchema,
  })
  .openapi({
    description: 'Represents a request to create an order.',
    required: ['type', 'time_in_force'],
    title: 'CreateOrderRequest',
  })
  .openapi('CreateOrderRequest')

const CreateWatchlistRequestSchema = z
  .object({
    name: z.string().openapi({ description: 'The watchlist name.', example: 'Tech Stocks' }),
    symbols: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'List of asset symbols to include in the watchlist.',
        example: ['AAPL', 'TSLA'],
      }),
  })
  .openapi({
    description: 'Request format used for creating a new watchlist with a set of assets and name.',
    required: ['name'],
    title: 'PostWatchlistRequest',
  })
  .openapi('CreateWatchlistRequest')

const CryptoChainSchema = z
  .enum(['SOL', 'ETH', 'BTC', 'XRP', 'ARB'])
  .openapi({ description: 'Chain identifier for multi-chain crypto assets.', example: 'ETH' })
  .openapi('CryptoChain')

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

const CreateWhitelistedAddressRequestSchema = z
  .object({
    address: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The address to be whitelisted',
        example: '5dXY1aH2tQpV3wXmJg6Z7c8B4nKvF9bA1pQrSt2uVwYxXz',
      }),
    asset: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Symbol of underlying asset for the whitelisted address',
        example: 'USDT',
      }),
    chain: CryptoChainSchema.exactOptional(),
    travel_rule_info: TravelRuleInfoSchema.exactOptional(),
  })
  .openapi({
    description: 'Request format used for whitelisting a crypto address for transfers.',
    title: 'CreateWhitelistedAddressRequest',
    required: [],
  })
  .openapi('CreateWhitelistedAddressRequest')

const TransferDirectionSchema = z
  .enum(['INCOMING', 'OUTGOING'])
  .openapi({ example: 'INCOMING' })
  .openapi('TransferDirection')

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

const ErrorSchema = z
  .object({ code: z.number(), message: z.string() })
  .openapi({ required: ['code', 'message'], title: 'Error' })
  .openapi('Error')

const ErrorResponseSchema = z
  .object({ message: z.string().exactOptional().openapi({ example: 'Internal Server Error' }) })
  .openapi({ description: 'API error response.', required: [] })
  .openapi('ErrorResponse')

const LocateQuoteErrorSchema = z
  .object({
    code: z
      .enum([
        'symbol_not_found',
        'easy_to_borrow',
        'threshold_security',
        'corporate_action',
        'quote_unavailable',
      ])
      .openapi({ description: 'Error code.', example: 'symbol_not_found' }),
    message: z.string().openapi({ description: 'Error message.', example: 'symbol not found' }),
    symbol: z
      .string()
      .openapi({ description: 'Requested stock symbol that could not be quoted.', example: 'FB' }),
  })
  .openapi({
    description: 'Error returned for a symbol that could not be quoted.',
    example: { code: 'symbol_not_found', message: 'symbol not found', symbol: 'META' },
    required: ['symbol', 'code', 'message'],
  })
  .openapi('LocateQuoteError')

const LocateQuoteSchema = z
  .object({
    available_qty: z
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
        description: 'Available locate quantity.',
        example: 1000,
      }),
    price: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Locate fee per share. Omitted when no quantity is available.',
        example: '0.0123',
      }),
    quoted_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Time when the quote was issued.', example: '2026-01-02T15:04:05Z' }),
    symbol: z.string().openapi({ description: 'Stock symbol.', example: 'TSLA' }),
  })
  .openapi({
    description: 'Current locate pricing and availability for a symbol.',
    example: {
      available_qty: 1000,
      price: '0.0123',
      quoted_at: '2026-01-02T15:04:05Z',
      symbol: 'TSLA',
    },
    required: ['symbol', 'available_qty', 'quoted_at'],
  })
  .openapi('LocateQuote')

const ListLocateQuotesResponseSchema = z
  .object({
    errors: z
      .array(LocateQuoteErrorSchema)
      .exactOptional()
      .openapi({ description: 'Symbols that could not be quoted.' }),
    quotes: z
      .array(LocateQuoteSchema)
      .openapi({ description: 'Locate quotes returned for requested symbols.' }),
  })
  .openapi({
    description: 'Response to a successful request for locate quotes.',
    example: {
      errors: [{ code: 'symbol_not_found', message: 'symbol not found', symbol: 'META' }],
      quotes: [
        { available_qty: 1000, price: '0.0123', quoted_at: '2026-01-02T15:04:05Z', symbol: 'TSLA' },
      ],
    },
    required: ['quotes'],
  })
  .openapi('ListLocateQuotesResponse')

const LocateStatusSchema = z
  .enum(['active', 'expired', 'rejected'])
  .openapi({ description: 'Locate status.', example: 'active' })
  .openapi('LocateStatus')

const LocateSchema = z
  .object({
    all_or_none: z
      .boolean()
      .openapi({ description: 'Whether the request required the full quantity.', example: false }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Time when the locate was created.',
        example: '2026-01-02T15:04:05Z',
      }),
    expires_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Time when the active locate expires. Omitted when rejected.',
        example: '2026-01-03T01:00:00Z',
      }),
    id: z
      .uuid()
      .openapi({ description: 'Locate ID.', example: '550e8400-e29b-41d4-a716-446655440000' }),
    limit_price: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Maximum acceptable fee per share from the request.',
        example: '0.05',
      }),
    located_price: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Locate fee per share in USD. Omitted when rejected.',
        example: '0.05',
      }),
    located_qty: z
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
        description: 'Number of shares located. Omitted when rejected.',
        example: 100,
      }),
    rejection_reason: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Machine-readable rejection reason.',
        example: 'inventory_unavailable',
      }),
    requested_qty: z
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
        description: 'Number of shares requested.',
        example: 100,
      }),
    status: LocateStatusSchema,
    symbol: z.string().openapi({ description: 'Stock symbol.', example: 'TSLA' }),
    total_fee: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Total locate fee in USD. Omitted when rejected.', example: '5.00' }),
  })
  .openapi({
    description: 'A locate request and its current lifecycle status.',
    example: {
      all_or_none: false,
      created_at: '2026-01-02T15:04:05Z',
      expires_at: '2026-01-03T01:00:00Z',
      id: '550e8400-e29b-41d4-a716-446655440000',
      limit_price: '0.05',
      located_price: '0.05',
      located_qty: 100,
      requested_qty: 100,
      status: 'active',
      symbol: 'TSLA',
      total_fee: '5.00',
    },
    required: ['id', 'symbol', 'requested_qty', 'all_or_none', 'status', 'created_at'],
  })
  .openapi('Locate')

const ListLocatesResponseSchema = z
  .object({
    locates: z
      .array(LocateSchema)
      .openapi({ description: 'Locates matching the filter criteria.' }),
    next_page_token: z
      .string()
      .nullable()
      .openapi({
        description:
          'The token to use to retrieve the next page of results. If `null`, there are no more pages.',
      }),
  })
  .openapi({
    description: 'Response to a successful request for a list of locates.',
    example: {
      locates: [
        {
          all_or_none: false,
          created_at: '2026-01-02T15:04:05Z',
          expires_at: '2026-01-03T01:00:00Z',
          id: '550e8400-e29b-41d4-a716-446655440000',
          limit_price: '0.05',
          located_price: '0.05',
          located_qty: 100,
          requested_qty: 100,
          status: 'active',
          symbol: 'TSLA',
          total_fee: '5.00',
        },
      ],
      next_page_token: 'eyJpZCI6IjU1MGU4NDAwLWUyOWItNDFkNC1hNzE2LTQ0NjY1NTQ0MDAwMCJ9Cg',
    },
    required: ['locates', 'next_page_token'],
  })
  .openapi('ListLocatesResponse')

const LocateErrorSchema = z
  .object({
    code: z
      .enum([
        'invalid_input',
        'invalid_request_body',
        'invalid_limit_price',
        'invalid_symbols',
        'symbol_not_found',
        'security_not_found',
        'insufficient_buying_power',
        'easy_to_borrow',
        'threshold_security',
        'idempotency_key_conflict',
        'quote_unavailable',
      ])
      .exactOptional()
      .openapi({
        description:
          'Machine-readable error code. Present on locate-specific 400 and create locate 422 errors.',
        example: 'invalid_symbols',
      }),
    message: z
      .string()
      .openapi({
        description: 'Error message.',
        example: 'symbols must contain at most 100 unique symbols',
      }),
  })
  .openapi({
    description:
      'Locates API error response. Locate-specific 400 and create locate 422 errors include a machine-readable `code`.',
    required: ['message'],
  })
  .openapi('LocateError')

const NextPageTokenSchema = z
  .string()
  .nullable()
  .openapi({
    description:
      'Use this token in your next API call to paginate through the dataset and retrieve the next page of results. A null token indicates there are no more data to fetch.\n',
    example: 'MTAwMA==',
  })
  .openapi('NextPageToken')

const NonTradeActivitiesSchema = z
  .object({
    activity_sub_type: ActivitySubTypeSchema.exactOptional(),
    activity_type: ActivityTypeSchema.exactOptional(),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Valid only for non-trading activity types. Null for trading activities.',
      }),
    currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Currency denomination of the activity (e.g. USD). Included in NTA stream events and activity responses.',
        example: 'USD',
      }),
    cusip: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The CUSIP of the security involved with the activity. Not present for all activity types.',
      }),
    date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date on which the activity occurred or on which the transaction associated with the activity settled.',
      }),
    group_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID used to link activities who share a sibling relationship.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An ID for the activity, always in "::" format. Can be sent as page_token in requests to facilitate the paging of results.',
      }),
    net_amount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The net amount of money (positive or negative) associated with the activity.',
      }),
    per_share_amount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For dividend activities, the average amount paid per share. Not present for other activity types.',
      }),
    qty: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For dividend activities, the number of shares that contributed to the payment. Not present for other activity types.\n',
      }),
    status: z
      .enum(['executed', 'correct', 'canceled'])
      .exactOptional()
      .openapi({ description: 'The activity status.' }),
    symbol: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The symbol of the security involved with the activity. Not present for all activity types.',
      }),
  })
  .openapi({
    examples: [
      {
        activity_sub_type: 'SDIV',
        activity_type: 'DIV',
        created_at: '2021-05-10T14:01:04.650275Z',
        currency: 'USD',
        date: '2019-08-01',
        id: '20190801011955195::5f596936-6f23-4cef-bdf1-3806aae57dbf',
        net_amount: '1.02',
        per_share_amount: '0.51',
        qty: '2',
        status: 'executed',
        symbol: 'T',
      },
    ],
    title: 'AccountNonTradeActivities',
    required: [],
  })
  .openapi('NonTradeActivities')

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
      .uuid()
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

const OptionContractStyleSchema = z
  .enum(['american', 'european'])
  .openapi({ description: 'The style of the option contract.', example: 'american' })
  .openapi('OptionContractStyle')

const OptionContractTypeSchema = z
  .enum(['call', 'put'])
  .openapi({ description: 'The type of the option contract.', example: 'call' })
  .openapi('OptionContractType')

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
      .uuid()
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
    style: OptionContractStyleSchema,
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
    type: OptionContractTypeSchema,
    underlying_asset_id: z
      .uuid()
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

const OptionContractsResponseSchema = z
  .object({
    next_page_token: NextPageTokenSchema.exactOptional(),
    option_contracts: z
      .array(OptionContractSchema)
      .openapi({
        example: [
          {
            expiration_date: '2025-06-20',
            id: '98359ef7-5124-49f3-85ea-5cf02df6defa',
            multiplier: '100',
            name: 'AAPL Jun 20 2025 100 Call',
            ppind: true,
            root_symbol: 'AAPL',
            size: '100',
            status: 'active',
            strike_price: '100',
            style: 'american',
            symbol: 'AAPL250620C00100000',
            tradable: true,
            type: 'call',
            underlying_asset_id: 'b0b6dd9d-8b9b-48a9-ba46-b9d54906e415',
            underlying_symbol: 'AAPL',
          },
        ],
      }),
  })
  .openapi({
    description: 'Paginated list of option contracts.',
    required: ['option_contracts'],
    title: 'OptionContractsResponse',
  })
  .openapi('OptionContractsResponse')

const OrderGroupRoleSchema = z
  .enum(['entry', 'take_profit', 'stop_loss'])
  .openapi({
    description:
      'The role of this order within its `bracket`, `oto`, or `oco` order, identified by `group_id`.\n- `entry`: The entry order of a `bracket` or `oto` order.\n- `take_profit`: The take-profit limit order. For an `oco` order, this is the top-level order.\n- `stop_loss`: The stop-loss stop or stop-limit order.\n\nOmitted whenever `group_id` is omitted.',
    example: 'take_profit',
    title: 'OrderGroupRole',
  })
  .openapi('OrderGroupRole')

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
    'held',
  ])
  .openapi({
    description:
      "An order executed through Alpaca can experience several status changes during its lifecycle. The most common statuses are described in detail below:\n\n- new\n  The order has been received by Alpaca, and routed to exchanges for execution. This is the usual initial state of an order.\n\n- partially_filled\n  The order has been partially filled.\n\n- filled\n  The order has been filled, and no further updates will occur for the order.\n\n- done_for_day\n  The order is done executing for the day, and will not receive further updates until the next trading day.\n\n- canceled\n  The order has been canceled, and no further updates will occur for the order. This can be either due to a cancel request by the user, or the order has been canceled by the exchanges due to its time-in-force.\n\n- expired\n  The order has expired, and no further updates will occur for the order.\n\n- replaced\n  The order was replaced by another order, or was updated due to a market event such as corporate action.\n\n- pending_cancel\n  The order is waiting to be canceled.\n\n- pending_replace\n  The order is waiting to be replaced by another order. The order will reject cancel request while in this state.\n\nLess common states are described below. Note that these states only occur on very rare occasions, and most users will likely never see their orders reach these states:\n\n- accepted\n  The order has been received by Alpaca, but hasn't yet been routed to the execution venue. This could be seen often out side of trading session hours.\n\n- pending_new\n  The order has been received by Alpaca, and routed to the exchanges, but has not yet been accepted for execution. This state only occurs on rare occasions.\n\n- accepted_for_bidding\n  The order has been received by exchanges, and is evaluated for pricing. This state only occurs on rare occasions.\n\n- stopped\n  The order has been stopped, and a trade is guaranteed for the order, usually at a stated price or better, but has not yet occurred. This state only occurs on rare occasions.\n\n- rejected\n  The order has been rejected, and no further updates will occur for the order. This state occurs on rare occasions and may occur based on various conditions decided by the exchanges.\n\n- suspended\n  The order has been suspended, and is not eligible for trading. This state only occurs on rare occasions.\n\n- calculated\n  The order has been completed for the day (either filled or done for day), but remaining settlement calculations are still pending. This state only occurs on rare occasions.\n\n\nAn order may be canceled through the API up until the point it reaches a state of either filled, canceled, or expired.",
    example: 'new',
    title: 'OrderStatus',
  })
  .openapi('OrderStatus')

const OrderLegSchema = z
  .object({
    asset_class: AssetClassSchema.exactOptional(),
    asset_id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Asset ID (For options this represents the option contract ID)' }),
    canceled_at: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    client_order_id: z
      .string()
      .max(128)
      .exactOptional()
      .openapi({ description: 'Client unique order ID' }),
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
    expired_at: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    extended_hours: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, eligible for execution outside regular trading hours.' }),
    failed_at: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    filled_at: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    filled_avg_price: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Filled average price' }),
    filled_qty: z.string().min(1).exactOptional().openapi({ description: 'Filled quantity' }),
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
      }),
    id: z.uuid().exactOptional().openapi({ description: 'Order ID' }),
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
    limit_price: z.string().nullable().exactOptional().openapi({ description: 'Limit price' }),
    notional: z
      .string()
      .min(1)
      .nullable()
      .openapi({
        description:
          'Ordered notional amount. If entered, qty will be null. Can take up to 9 decimal points.',
      }),
    order_class: OrderClassSchema.exactOptional(),
    order_type: z
      .string()
      .exactOptional()
      .openapi({ deprecated: true, description: 'Deprecated in favour of the field "type" ' }),
    position_intent: PositionIntentSchema.exactOptional(),
    qty: z
      .string()
      .min(1)
      .nullable()
      .openapi({
        description:
          'Ordered quantity. If entered, notional will be null. Can take up to 9 decimal points.',
      }),
    replaced_at: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    replaced_by: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The order ID that this order was replaced by' }),
    replaces: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The order ID that this order replaces' }),
    side: OrderSideSchema,
    status: OrderStatusSchema.exactOptional(),
    stop_price: z.string().nullable().exactOptional().openapi({ description: 'Stop price' }),
    submitted_at: z.iso.datetime({ offset: true }).exactOptional(),
    symbol: z.string().min(1).openapi({ description: 'Asset symbol' }),
    time_in_force: TimeInForceSchema,
    trail_percent: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The percent value away from the high water mark for trailing stop orders.',
      }),
    trail_price: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The dollar value away from the high water mark for trailing stop orders.',
      }),
    type: OrderTypeSchema,
    updated_at: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({
    description:
      'This is copy of Order response schemas as a workaround of displaying issue of nested Order recursively for legs',
    required: ['symbol', 'type', 'time_in_force', 'notional', 'qty', 'side'],
    title: 'Order',
  })
  .openapi('OrderLeg')

const OrderSchema = z
  .object({
    asset_class: AssetClassSchema.exactOptional(),
    asset_id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Asset ID (For options this represents the option contract ID)' }),
    canceled_at: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    client_order_id: z
      .string()
      .max(128)
      .exactOptional()
      .openapi({ description: 'Client unique order ID' }),
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
    expired_at: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    expires_at: z.iso.datetime({ offset: true }).exactOptional(),
    extended_hours: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, eligible for execution outside regular trading hours.' }),
    failed_at: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    filled_at: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    filled_avg_price: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Filled average price' }),
    filled_qty: z.string().min(1).exactOptional().openapi({ description: 'Filled quantity' }),
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
      }),
    id: z.uuid().exactOptional().openapi({ description: 'Order ID' }),
    legs: z
      .array(OrderLegSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'When querying non-simple order_class orders in a nested style, an array of Order entities associated with this order. Otherwise, null. Required if order class is `mleg`.',
        example: null,
      }),
    limit_price: z.string().nullable().exactOptional().openapi({ description: 'Limit price' }),
    notional: z
      .string()
      .min(1)
      .nullable()
      .openapi({
        description:
          'Ordered notional amount. If entered, qty will be null. Can take up to 9 decimal points.',
      }),
    order_class: OrderClassSchema.exactOptional(),
    order_type: z
      .string()
      .exactOptional()
      .openapi({ deprecated: true, description: 'Deprecated in favour of the field "type" ' }),
    position_intent: PositionIntentSchema.exactOptional(),
    qty: z
      .string()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Ordered quantity. If entered, notional will be null. Can take up to 9 decimal points. Required if order class is `mleg`.',
      }),
    ratio_qty: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The proportional quantity of this leg in relation to the overall multi-leg order quantity.',
      }),
    replaced_at: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    replaced_by: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The order ID that this order was replaced by' }),
    replaces: z
      .uuid()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The order ID that this order replaces' }),
    side: OrderSideSchema.exactOptional(),
    status: OrderStatusSchema.exactOptional(),
    stop_price: z.string().nullable().exactOptional().openapi({ description: 'Stop price' }),
    submitted_at: z.iso.datetime({ offset: true }).exactOptional(),
    symbol: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'Asset symbol, required for all order classes except for `mleg`' }),
    time_in_force: TimeInForceSchema,
    trail_percent: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The percent value away from the high water mark for trailing stop orders.',
      }),
    trail_price: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The dollar value away from the high water mark for trailing stop orders.',
      }),
    type: OrderTypeSchema,
    updated_at: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({
    description:
      'The Orders API allows a user to monitor, place and cancel their orders with Alpaca.\n\nEach order has a unique identifier provided by the client. This client-side unique order ID will be automatically generated by the system if not provided by the client, and will be returned as part of the order object along with the rest of the fields described below. Once an order is placed, it can be queried using the client-side order ID to check the status.\n\nUpdates on open orders at Alpaca will also be sent over the streaming interface, which is the recommended method of maintaining order state.',
    required: ['notional', 'type', 'time_in_force'],
    title: 'Order',
  })
  .openapi('Order')

const PatchOrderRequestSchema = z
  .object({
    advanced_instructions: AdvancedInstructionsSchema.exactOptional(),
    client_order_id: z
      .string()
      .max(128)
      .exactOptional()
      .openapi({
        description:
          'A unique identifier for the new order. Automatically generated if not sent. (<= 128 characters)',
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
          'number of shares to trade.\n\nYou can only patch full shares for now.\n\nQty of equity fractional orders are not allowed to change. Non-IPO notional orders cannot be replaced at all - no fields (qty, limit_price, stop_price, etc.) can be modified; cancel and resubmit instead.',
        example: '4',
      }),
    stop_price: z
      .string()
      .exactOptional()
      .openapi({
        description: 'required if original order type is limit or stop_limit',
        example: '3.14',
      }),
    time_in_force: TimeInForceSchema.exactOptional(),
    trail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'the new value of the trail_price or trail_percent value (works only for type="trailing_stop")',
        example: '3.14',
      }),
  })
  .openapi({
    description:
      'Represents a request to patch an order.\n\nNote: `qty` and `notional` are mutually exclusive on a single replace request. `notional` is only valid for IPO indications of interest (`asset_class: "ipo"`); non-IPO notional orders cannot be replaced at all.',
    title: 'PatchOrderRequest',
    required: [],
  })
  .openapi('PatchOrderRequest')

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

const PositionSchema: z.ZodType<PositionType> = z
  .lazy(() =>
    z
      .object({
        asset_class: AssetClassSchema,
        asset_id: z
          .uuid()
          .openapi({
            description: 'Asset ID (For options this represents the option contract ID)',
          }),
        asset_marginable: z.boolean(),
        avg_entry_price: z
          .string()
          .min(1)
          .openapi({ description: 'Average entry price of the position' }),
        avg_entry_swap_rate: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The weighted-average exchange rate at the time the position was entered.',
          }),
        change_today: z
          .string()
          .min(1)
          .openapi({ description: 'Percent change from last day price (by a factor of 1)' }),
        cost_basis: z.string().min(1).openapi({ description: 'Total cost basis in dollar' }),
        current_price: z.string().min(1).openapi({ description: 'Current asset price per share' }),
        exchange: ExchangeForPositionSchema,
        lastday_price: z
          .string()
          .min(1)
          .openapi({
            description:
              "Last day's asset price per share based on the closing value of the last trading day",
          }),
        market_value: z
          .string()
          .min(1)
          .openapi({ description: 'Total dollar amount of the position' }),
        prev_swap_rate: z
          .string()
          .exactOptional()
          .openapi({
            description: "The exchange rate as of the previous close (i.e. yesterday's rate)",
          }),
        qty: z.string().min(1).openapi({ description: 'The number of shares' }),
        qty_available: z
          .string()
          .min(1)
          .exactOptional()
          .openapi({
            description:
              'Total number of shares available minus open orders / locked for options covered call',
          }),
        side: z.enum(['long', 'short']).openapi({ description: 'long' }),
        swap_rate: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The current exchange rate (without mark-up) used to convert local-currency position values into USD. Present only for LCT (Local Currency Trading) accounts',
          }),
        symbol: z.string().openapi({ description: 'Symbol name of the asset', example: 'AAPL' }),
        unrealized_intraday_pl: z
          .string()
          .min(1)
          .openapi({ description: 'Unrealized profit/loss in dollars for the day' }),
        unrealized_intraday_plpc: z
          .string()
          .min(1)
          .openapi({ description: 'Unrealized profit/loss percent (by a factor of 1)' }),
        unrealized_pl: z
          .string()
          .min(1)
          .openapi({ description: 'Unrealized profit/loss in dollars' }),
        unrealized_plpc: z
          .string()
          .min(1)
          .openapi({ description: 'Unrealized profit/loss percent (by a factor of 1)' }),
        usd: USDPositionValuesSchema.exactOptional(),
      })
      .openapi({
        description:
          "The positions API provides information about an account's current open positions. The response will include information such as cost basis, shares traded, and market value, which will be updated live as price information is updated. Once a position is closed, it will no longer be queryable through this API.",
        examples: [
          {
            asset_class: 'us_equity',
            asset_id: '904837e3-3b76-47ec-b432-046db621571b',
            asset_marginable: true,
            avg_entry_price: '100.0',
            change_today: '0.0084',
            cost_basis: '500.0',
            current_price: '120.0',
            exchange: 'NASDAQ',
            lastday_price: '119.0',
            market_value: '600.0',
            qty: '5',
            qty_available: '4',
            side: 'long',
            symbol: 'AAPL',
            unrealized_intraday_pl: '10.0',
            unrealized_intraday_plpc: '0.0084',
            unrealized_pl: '100.0',
            unrealized_plpc: '0.20',
          },
          {
            asset_class: 'us_equity',
            asset_id: 'b0b6dd9d-8b9b-48a9-ba46-b9d54906e415',
            asset_marginable: false,
            avg_entry_price: '174.78',
            change_today: '-0.0018326556325525',
            cost_basis: '349.56',
            current_price: '174.29',
            exchange: 'NASDAQ',
            lastday_price: '174.61',
            market_value: '348.58',
            qty: '2',
            qty_available: '2',
            side: 'long',
            symbol: 'AAPL',
            unrealized_intraday_pl: '-0.98',
            unrealized_intraday_plpc: '-0.0028035244307129',
            unrealized_pl: '-0.98',
            unrealized_plpc: '-0.0028035244307129',
          },
        ],
        required: [
          'asset_id',
          'symbol',
          'exchange',
          'asset_class',
          'avg_entry_price',
          'qty',
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
          'asset_marginable',
        ],
        title: 'Position',
      }),
  )
  .openapi('Position')

const PositionClosedResponseSchema = z
  .object({
    body: OrderSchema.exactOptional(),
    status: z
      .int()
      .openapi({ description: 'HTTP status code for the attempt to close this position' }),
    symbol: z.string().openapi({ description: 'Symbol name of the asset' }),
  })
  .openapi({
    description: 'Represents the result of asking the api to close a position. ',
    examples: [
      {
        body: {
          asset_class: 'us_equity',
          asset_id: 'b0b6dd9d-8b9b-48a9-ba46-b9d54906e415',
          canceled_at: null,
          client_order_id: '52f8574c-96d5-49b6-94c1-2570a268434e',
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

const TokenizationTransferStatusSchema = z
  .enum(['pending', 'completed', 'rejected'])
  .openapi({
    description:
      'Whether Alpaca has moved the underlying shares for this tokenization request. Independent of `status`: `status` can stay `pending` until the issuer completes the on-chain mint or redeem, while `transfer_status` becomes `completed` as soon as the shares move.\n\n- `pending`: the shares have not moved yet.\n- `completed`: the shares have moved. Account activities can lag until after end-of-day posting.\n- `rejected`: the share transfer failed.\n\nReturned by the list and get tokenization request endpoints. Omitted when Alpaca has no share transfer for the request, for example when the request was rejected during validation.',
    example: 'completed',
    title: 'TokenizationTransferStatus',
  })
  .openapi('TokenizationTransferStatus')

const TokenizationRequestTypeSchema = z
  .enum(['mint', 'redeem'])
  .openapi({
    description: 'Tokenization request type',
    example: 'mint',
    title: 'TokenizationRequestType',
  })
  .openapi('TokenizationRequestType')

const TokenizationRequestSchema = z
  .object({
    client_account_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Alpaca account UUID of the Authorized Participant associated with this tokenization request',
        example: '06b9d76e-1733-460c-844e-48d1ae0f10c3',
      }),
    client_external_account_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Issuer-side account identifier of the Authorized Participant associated with this tokenization request',
        example: 'AP-EXT-001',
      }),
    client_request_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Authorized Participant-supplied label associated with this tokenization request',
        example: 'ap-mint-2026-01-05-001',
      }),
    created_at: z.iso.datetime({ offset: true }).openapi({ example: '2026-01-02T15:04:05Z' }),
    fees: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Fees charged for this tokenization request', example: null }),
    issuer: TokenizationIssuerSchema,
    issuer_request_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Unique identifier of the tokenization request set by the issuer',
        example: null,
      }),
    network: TokenizationNetworkSchema,
    qty: z
      .string()
      .openapi({
        description: 'The quantity to convert for this tokenization request. It can be fractional.',
        example: '10',
      }),
    status: TokenizationRequestStatusSchema,
    token_symbol: z
      .string()
      .openapi({ description: 'The tokenized asset symbol', example: 'AAPLx' }),
    tokenization_request_id: z
      .string()
      .openapi({
        description: 'Unique identifier of the tokenization request set by Alpaca',
        example: '5b1d6a3e-7f0a-4d2c-b8e1-9e6f1c0d2c4a',
      }),
    transfer_status: TokenizationTransferStatusSchema.exactOptional(),
    tx_hash: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Transaction hash of the completed request on the blockchain',
        example: null,
      }),
    type: TokenizationRequestTypeSchema,
    underlying_symbol: z
      .string()
      .openapi({ description: 'The underlying asset symbol', example: 'AAPL' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ example: null }),
    wallet_address: z
      .string()
      .openapi({
        description: 'The wallet address associated with this tokenization request',
        example: '5dXY1aH2tQpV3wXmJg6Z7c8B4nKvF9bA1pQrSt2uVwYxXz',
      }),
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

const TradingActivitiesSchema = z
  .object({
    activity_type: ActivityTypeSchema.exactOptional(),
    cum_qty: z
      .string()
      .exactOptional()
      .openapi({ description: 'The cumulative quantity of shares involved in the execution.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An id for the activity. Always in "::" format. Can be sent as page_token in requests to facilitate the paging of results.',
      }),
    leaves_qty: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For partially_filled orders, the quantity of shares that are left to be filled.\n',
      }),
    order_id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The id for the order that filled.' }),
    order_status: OrderStatusSchema.exactOptional(),
    price: z
      .string()
      .exactOptional()
      .openapi({ description: 'The per-share price that the trade was executed at.' }),
    qty: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of shares involved in the trade execution.' }),
    side: z.string().exactOptional().openapi({ description: 'buy or sell' }),
    symbol: z
      .string()
      .exactOptional()
      .openapi({ description: 'The symbol of the security being traded.', example: 'AAPL' }),
    transaction_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time at which the execution occurred.' }),
    type: z
      .enum(['fill', 'partial_fill'])
      .exactOptional()
      .openapi({ description: 'fill or partial_fill', example: 'fill' }),
  })
  .openapi({
    examples: [
      {
        activity_type: 'FILL',
        cum_qty: '2',
        id: '20220202135509981::2d7be4ff-d1f3-43e9-856a-0f5cf5c5088e',
        leaves_qty: '0',
        order_id: 'b5abe576-6a8a-49f3-a353-46b72c1ccae9',
        order_status: 'filled',
        price: '174.78',
        qty: '2',
        side: 'buy',
        symbol: 'AAPL',
        transaction_time: '2022-02-02T18:55:09.981482Z',
        type: 'fill',
      },
    ],
    title: 'AccountTradingActivities',
    required: [],
  })
  .openapi('TradingActivities')

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

const UpdateWatchlistRequestSchema = z
  .union([
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'name')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['name'] }),
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'symbols')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['symbols'] }),
  ])
  .and(
    z
      .object({
        name: z.string().exactOptional().openapi({ description: 'The new watchlist name.' }),
        symbols: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'List of asset symbols to include in the watchlist. The existing assets will be replaced with the new list.',
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi({
    description:
      'Request format used for updating an existing watchlist with a set of assets and/or a name.',
    title: 'PutWatchlistRequest',
  })
  .openapi('UpdateWatchlistRequest')

const UpdateWhitelistedAddressTravelRuleInfoRequestSchema = z
  .object({ travel_rule_info: TravelRuleInfoSchema })
  .openapi({
    description: 'Travel rule information to associate with a whitelisted address.',
    required: ['travel_rule_info'],
  })
  .openapi('UpdateWhitelistedAddressTravelRuleInfoRequest')

const WalletFeeEstimateResponseSchema = z
  .object({
    fee: z.string().exactOptional().openapi({ example: '0.0505' }),
    network_fee: z.string().exactOptional().openapi({ example: '0.0825' }),
  })
  .openapi({
    description:
      'Estimated on-chain fee breakdown for a proposed crypto withdrawal, including the total fee and the underlying network (gas) fee.',
    required: [],
  })
  .openapi('WalletFeeEstimateResponse')

const WatchlistSchema = z
  .object({
    account_id: z.uuid().openapi({ description: 'account ID' }),
    assets: z
      .array(AssetsSchema)
      .exactOptional()
      .openapi({
        description: 'the content of this watchlist, in the order as registered by the client',
      }),
    created_at: z.iso.datetime({ offset: true }),
    id: z.uuid().openapi({ description: 'watchlist id' }),
    name: z
      .string()
      .min(1)
      .openapi({ description: 'user-defined watchlist name (up to 64 characters)' }),
    updated_at: z.iso.datetime({ offset: true }),
  })
  .openapi({
    description:
      "The watchlist API provides CRUD operation for the account's watchlist. An account can have multiple watchlists and each is uniquely identified by id but can also be addressed by user-defined name. Each watchlist is an ordered list of assets.\n",
    examples: [
      {
        account_id: 'abe25343-a7ba-4255-bdeb-f7e013e9ee5d',
        assets: [
          {
            class: 'us_equity',
            easy_to_borrow: true,
            exchange: 'NASDAQ',
            fractionable: true,
            id: '8ccae427-5dd0-45b3-b5fe-7ba5e422c766',
            marginable: true,
            name: 'Tesla, Inc. Common Stock',
            shortable: true,
            status: 'active',
            symbol: 'TSLA',
            tradable: true,
          },
        ],
        created_at: '2022-01-31T21:49:05.14628Z',
        id: '3174d6df-7726-44b4-a5bd-7fda5ae6e009',
        name: 'Primary Watchlist',
        updated_at: '2022-01-31T21:49:05.14628Z',
      },
    ],
    required: ['id', 'account_id', 'created_at', 'updated_at', 'name'],
    title: 'Watchlist',
  })
  .openapi('Watchlist')

const WatchlistWithoutAssetSchema = z
  .object({
    account_id: z.uuid().openapi({ description: 'account ID' }),
    created_at: z.iso.datetime({ offset: true }),
    id: z.uuid().openapi({ description: 'watchlist id' }),
    name: z
      .string()
      .min(1)
      .openapi({ description: 'user-defined watchlist name (up to 64 characters)' }),
    updated_at: z.iso.datetime({ offset: true }),
  })
  .openapi({
    description:
      "The watchlist API provides CRUD operation for the account's watchlist. An account can have multiple watchlists and each is uniquely identified by id but can also be addressed by user-defined name.\n",
    examples: [
      {
        account_id: 'abe25343-a7ba-4255-bdeb-f7e013e9ee5d',
        created_at: '2022-01-31T21:49:05.14628Z',
        id: '3174d6df-7726-44b4-a5bd-7fda5ae6e009',
        name: 'Primary Watchlist',
        updated_at: '2022-01-31T21:49:05.14628Z',
      },
    ],
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
      schema: {
        example: 'eyJpZCI6IjU1MGU4NDAwLWUyOWItNDFkNC1hNzE2LTQ0NjY1NTQ0MDAwMCJ9Cg',
        type: 'string',
      },
    },
    example: 'eyJpZCI6IjU1MGU4NDAwLWUyOWItNDFkNC1hNzE2LTQ0NjY1NTQ0MDAwMCJ9Cg',
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

const DeprecatedParamsHeaderSchema = z
  .string()
  .exactOptional()
  .openapi({
    description:
      'Present when the request includes one or more deprecated query parameters or deprecated\nparameter values. Lists every deprecated item the client sent, encoded as an RFC 9651\nStructured Field List of sf-strings:\n\n- Whole-parameter deprecation: the bare parameter name (`"deprecatedParam"`).\n- Value-level deprecation: `<param>=<value>`, with `<value>` in its canonical form (`"sort=legacy"`).\n\nOmitted when the request carries no deprecated parameters.\n',
    example: '"deprecatedParam", "sort=legacy"',
    param: { required: false },
  })

const APIKeySecurityScheme = {
  description: '',
  in: 'header',
  name: 'APCA-API-KEY-ID',
  type: 'apiKey',
}

const APISecretSecurityScheme = {
  description: '',
  in: 'header',
  name: 'APCA-API-SECRET-KEY',
  type: 'apiKey',
}

export const getV1LocatesRoute = createRoute({
  method: 'get',
  path: '/v1/locates',
  tags: ['Locates'],
  summary: 'List Locates',
  description:
    'Returns locates filtered by status, symbol, or date range. Results are sorted by `created_at` descending, with `id` descending as the tie-breaker. This endpoint is not available in paper trading.',
  operationId: 'listLocates',
  request: {
    query: z.object({
      page_token: PageTokenParamsSchema,
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
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 1000, maximum: 10000, minimum: 1, type: 'integer' },
          },
        }),
      status: LocateStatusSchema.openapi({
        param: {
          description: 'Filter by locate status.',
          example: 'active',
          in: 'query',
          name: 'status',
          required: false,
          schema: { $ref: '#/components/schemas/LocateStatus' },
        },
      }).exactOptional(),
      symbol: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by stock symbol.',
            example: 'TSLA',
            in: 'query',
            name: 'symbol',
            required: false,
            schema: { type: 'string' },
          },
        }),
      start: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter locates with locate trading date on or after this date. Format: YYYY-MM-DD. The locate trading date uses America/New_York and rolls at 8pm ET.',
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
              'Filter locates with locate trading date before this date (exclusive). Format: YYYY-MM-DD. The locate trading date uses America/New_York and rolls at 8pm ET.',
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
      description:
        'Returns a list of locates for the account, or an empty list if no locates are found.',
      content: { 'application/json': { schema: ListLocatesResponseSchema } },
    },
    400: {
      description: 'Invalid locate request.',
      content: {
        'application/json': {
          schema: LocateErrorSchema,
          examples: {
            invalid_input: { value: { code: 'invalid_input', message: 'invalid input' } },
          },
        },
      },
    },
    401: {
      description:
        'Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.',
      content: {
        'application/json': { schema: ErrorResponseSchema, example: { message: 'Unauthorized' } },
      },
    },
    403: {
      description: 'User has no access to a resource.',
      content: {
        'application/json': { schema: ErrorResponseSchema, example: { message: 'Forbidden' } },
      },
    },
    500: {
      description:
        'Internal server error. We recommend retrying these later. If the issue persists, please contact us on Slack or on the Community Forum.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { message: 'Internal Server Error' },
        },
      },
    },
  },
})

export const postV1LocatesRoute = createRoute({
  method: 'post',
  path: '/v1/locates',
  tags: ['Locates'],
  summary: 'Create Locate',
  description:
    'Creates a locate request for a short sale. This endpoint is not available in paper trading.\n\n**Idempotency**: Reusing the same key with the same request returns the original\nlocate response. Reusing the same key with a different request returns HTTP 422.\n',
  operationId: 'createLocates',
  request: {
    headers: z.object({ 'Idempotency-Key': LegacyIdempotencyKeyParamsSchema }),
    body: {
      description: 'Locate request details.',
      content: { 'application/json': { schema: CreateLocateRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: 'Created', content: { 'application/json': { schema: LocateSchema } } },
    400: {
      description: 'Invalid locate request.',
      content: {
        'application/json': {
          schema: LocateErrorSchema,
          examples: {
            invalid_input: {
              value: {
                code: 'invalid_input',
                message: 'invalid input: quantity must be in round lots of 100',
              },
            },
            invalid_limit_price: {
              value: { code: 'invalid_limit_price', message: 'invalid limit_price' },
            },
            invalid_request_body: {
              value: { code: 'invalid_request_body', message: 'invalid request body' },
            },
          },
        },
      },
    },
    401: {
      description:
        'Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.',
      content: {
        'application/json': { schema: ErrorResponseSchema, example: { message: 'Unauthorized' } },
      },
    },
    403: {
      description: 'User has no access to a resource.',
      content: {
        'application/json': { schema: ErrorResponseSchema, example: { message: 'Forbidden' } },
      },
    },
    422: {
      description: 'Cannot complete locate request.',
      content: {
        'application/json': {
          schema: LocateErrorSchema,
          examples: {
            easy_to_borrow: {
              value: {
                code: 'easy_to_borrow',
                message: 'security is easy-to-borrow and does not require a locate',
              },
            },
            idempotency_key_conflict: {
              value: {
                code: 'idempotency_key_conflict',
                message: 'idempotency key was already used with a different request',
              },
            },
            insufficient_buying_power: {
              value: {
                code: 'insufficient_buying_power',
                message: 'insufficient buying power to cover locate fee',
              },
            },
            quote_unavailable: {
              value: {
                code: 'quote_unavailable',
                message: 'locate quote is unavailable for this symbol',
              },
            },
            symbol_not_found: { value: { code: 'symbol_not_found', message: 'symbol not found' } },
            threshold_security: {
              value: {
                code: 'threshold_security',
                message: 'security is on the threshold list and cannot be located',
              },
            },
          },
        },
      },
    },
    500: {
      description:
        'Internal server error. We recommend retrying these later. If the issue persists, please contact us on Slack or on the Community Forum.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { message: 'Internal Server Error' },
        },
      },
    },
  },
})

export const getV1LocatesLocateIdRoute = createRoute({
  method: 'get',
  path: '/v1/locates/{locate_id}',
  tags: ['Locates'],
  summary: 'Get Locate',
  description: 'Returns a locate by ID. This endpoint is not available in paper trading.',
  operationId: 'getLocate',
  request: {
    params: z.object({
      locate_id: z
        .uuid()
        .openapi({
          param: {
            description: 'The locate ID.',
            example: '550e8400-e29b-41d4-a716-446655440000',
            in: 'path',
            name: 'locate_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the requested locate.',
      content: { 'application/json': { schema: LocateSchema } },
    },
    400: {
      description: 'Invalid locate request.',
      content: {
        'application/json': {
          schema: LocateErrorSchema,
          examples: {
            invalid_input: { value: { code: 'invalid_input', message: 'invalid input' } },
          },
        },
      },
    },
    401: {
      description:
        'Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.',
      content: {
        'application/json': { schema: ErrorResponseSchema, example: { message: 'Unauthorized' } },
      },
    },
    403: {
      description: 'User has no access to a resource.',
      content: {
        'application/json': { schema: ErrorResponseSchema, example: { message: 'Forbidden' } },
      },
    },
    404: {
      description: 'Not found',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { message: 'locate not found' },
        },
      },
    },
    500: {
      description:
        'Internal server error. We recommend retrying these later. If the issue persists, please contact us on Slack or on the Community Forum.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { message: 'Internal Server Error' },
        },
      },
    },
  },
})

export const getV1LocatesQuotesRoute = createRoute({
  method: 'get',
  path: '/v1/locates/quotes',
  tags: ['Locates'],
  summary: 'Get Locate Quotes',
  description:
    'Returns locate availability and pricing for one or more symbols. This endpoint is not available in paper trading.',
  operationId: 'listLocateQuotes',
  request: {
    query: z.object({
      symbols: z
        .string()
        .openapi({
          param: {
            description: 'Comma-separated list of stock symbols. Maximum 100 unique symbols.',
            example: 'TSLA,AAPL',
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
      description: 'Returns locate quotes for the requested symbols.',
      content: { 'application/json': { schema: ListLocateQuotesResponseSchema } },
    },
    400: {
      description: 'Invalid locate quote request.',
      content: {
        'application/json': {
          schema: LocateErrorSchema,
          examples: {
            invalid_symbols: {
              value: {
                code: 'invalid_symbols',
                message: 'symbols must contain at most 100 unique symbols',
              },
            },
          },
        },
      },
    },
    401: {
      description:
        'Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.',
      content: {
        'application/json': { schema: ErrorResponseSchema, example: { message: 'Unauthorized' } },
      },
    },
    403: {
      description: 'User has no access to a resource.',
      content: {
        'application/json': { schema: ErrorResponseSchema, example: { message: 'Forbidden' } },
      },
    },
    500: {
      description:
        'Internal server error. We recommend retrying these later. If the issue persists, please contact us on Slack or on the Community Forum.',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { message: 'Internal Server Error' },
        },
      },
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

export const getV2AccountRoute = createRoute({
  method: 'get',
  path: '/v2/account',
  tags: ['Accounts'],
  summary: 'Get Account',
  description: 'Returns your account details.',
  operationId: 'getAccount',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: AccountSchema,
          example: {
            account_blocked: false,
            account_number: 'PALPACA_123',
            accrued_fees: '0',
            admin_configurations: {},
            balance_asof: '2023-09-27',
            buying_power: '245432.61',
            cash: '122086.5',
            created_at: '2023-01-01T18:20:20.272275Z',
            crypto_status: 'ACTIVE',
            crypto_tier: 1,
            currency: 'USD',
            effective_buying_power: '245432.61',
            equity: '123346.11',
            id: '1d9eed04-be39-4e01-9b84-a48ac5bbafcf',
            initial_margin: '629.8',
            intraday_adjustments: '0',
            last_equity: '122011.09751111286868',
            last_maintenance_margin: '480.73',
            long_market_value: '1259.61',
            maintenance_margin: '377.88',
            multiplier: '2',
            non_marginable_buying_power: '122086.5',
            options_buying_power: '122716.305',
            options_trading_level: 2,
            pending_reg_taf_fees: '0',
            pending_transfer_in: '0',
            portfolio_value: '123346.11',
            position_market_value: '1259.61',
            regt_buying_power: '245432.61',
            short_market_value: '0',
            shorting_enabled: true,
            sma: '123369.74',
            status: 'ACTIVE',
            trade_suspended_by_user: false,
            trading_blocked: false,
            transfers_blocked: false,
            user_configurations: null,
          },
        },
      },
    },
  },
})

export const getV2AccountActivitiesRoute = createRoute({
  method: 'get',
  path: '/v2/account/activities',
  tags: ['Account Activities'],
  summary: 'Retrieve Account Activities',
  description:
    'Returns a list of activities\n\nNotes:\n* Pagination is handled using the `page_token` and `page_size` parameters.\n* `page_token` represents the ID of the last item on your current page of results.\n   For example, if the ID of the last activity in your first response is `20220203000000000::045b3b8d-c566-4bef-b741-2bf598dd6ae7`, you would pass that value as `page_token` to retrieve the next page of results.',
  operationId: 'getAccountActivities',
  request: {
    query: z.object({
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
      direction: z
        .enum(['asc', 'desc'])
        .default('desc')
        .exactOptional()
        .openapi({
          param: {
            description: 'The chronological order of response based on the activity datetime.',
            in: 'query',
            name: 'direction',
            schema: { default: 'desc', enum: ['asc', 'desc'], example: 'desc', type: 'string' },
            required: false,
          },
          example: 'desc',
        }),
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
      description: 'returns an array of Account activities',
      content: {
        'application/json': {
          schema: z.array(
            z
              .union([TradingActivitiesSchema, NonTradeActivitiesSchema])
              .openapi({
                description:
                  'Will be a mix of TradingActivity or NonTradeActivity objects based on what is passed in the activity_types parameter',
              }),
          ),
        },
      },
    },
  },
})

export const getV2AccountActivitiesActivityTypeRoute = createRoute({
  method: 'get',
  path: '/v2/account/activities/{activity_type}',
  tags: ['Account Activities'],
  summary: 'Retrieve Account Activities of Specific Type',
  description: 'Returns account activity entries for a specific type of activity.',
  operationId: 'getAccountActivitiesByActivityType',
  request: {
    params: z.object({
      activity_type: z
        .string()
        .openapi({
          param: {
            description:
              'The activity type you want to view entries for. A list of valid activity types can be found at the bottom of this page.',
            in: 'path',
            name: 'activity_type',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
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
      direction: z
        .enum(['asc', 'desc'])
        .default('desc')
        .exactOptional()
        .openapi({
          param: {
            description: 'The chronological order of response based on the activity datetime.',
            in: 'query',
            name: 'direction',
            schema: { default: 'desc', enum: ['asc', 'desc'], example: 'desc', type: 'string' },
            required: false,
          },
          example: 'desc',
        }),
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
      description: 'returns an array of Account activities',
      content: {
        'application/json': {
          schema: z.array(
            z
              .xor([TradingActivitiesSchema, NonTradeActivitiesSchema])
              .openapi({
                description:
                  'Will be one of a TradingActivity or NonTradeActivity based on activity_type used in path',
              }),
          ),
        },
      },
    },
  },
})

export const getV2AccountConfigurationsRoute = createRoute({
  method: 'get',
  path: '/v2/account/configurations',
  tags: ['Account Configurations'],
  summary: 'Get Account Configurations',
  description: 'gets the current account configuration values',
  operationId: 'getAccountConfig',
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountConfigurationsSchema } },
    },
  },
})

export const patchV2AccountConfigurationsRoute = createRoute({
  method: 'patch',
  path: '/v2/account/configurations',
  tags: ['Account Configurations'],
  summary: 'Account Configurations',
  description: 'Updates and returns the current account configuration values',
  operationId: 'patchAccountConfig',
  request: { body: { content: { 'application/json': { schema: AccountConfigurationsSchema } } } },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountConfigurationsSchema } },
    },
  },
})

export const getV2AccountPortfolioHistoryRoute = createRoute({
  method: 'get',
  path: '/v2/account/portfolio/history',
  tags: ['Portfolio History'],
  summary: 'Get Account Portfolio History',
  description:
    'Returns timeseries data about equity and profit/loss (P/L) of the account in requested timespan.',
  operationId: 'getAccountPortfolioHistory',
  request: {
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
              'The first timestamp of the timeseries.\n\nDefaults to `end - period`.\n\nWhen `timeframe=1D`, if `start` occurs any time on a trading day (including outside of market hours), `start` is set to the closing time of the current trading day. Otherwise, `start` is rolled forward to the closing time of the next available trading day.\n\nWhen `timeframe != 1D`, one of the following rules is applied.\n- When `intraday_reporting=continuous`, `start` is rolled back to the nearest `timeframe` interval.\n- When both `start` and `end` are omitted, `start` is rolled back to the first market/session open that is encountered.\n- When `intraday_reporting != continuous` and `start` is a trading day:\n  - roll forward to the first market/session open if `start` is outside of market/session hours, or\n  - roll back to the nearest `timeframe` interval if `start` occurs during trading hours.\n- Roll forward to the next market/session open if `start` does not fall on a trading day.\n\n`start` may be combined with `end` or `period`, but cannot be combined with both.\n',
            examples: {
              iso8601_date: {
                summary: 'ISO 8601 date',
                description: 'Parsed as midnight UTC.',
                value: '2021-03-16',
              },
              iso8601_datetime_offset: {
                summary: 'ISO 8601 datetime (offset)',
                value: '2021-03-16T14:38:01-04:00',
              },
              iso8601_datetime_utc: {
                summary: 'ISO 8601 datetime (UTC)',
                value: '2021-03-16T18:38:01Z',
              },
              unix: {
                summary: 'Unix timestamp',
                description: 'Seconds since the epoch.',
                value: '1615919881',
              },
            },
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
              'The last timestamp of the timeseries.\n\nDefaults to `start + period` when `start` is provided.\n\nWhen `start` and `end` are omitted, or if `end` is AFTER the request time, `end` defaults to\n- The most recent session open timestamp if `intraday_reporting=extended_hours`\n- The most recent market open timestamp if `intraday_reporting=market_hours`\n- The current timestamp if `intraday_reporting=continuous`\n\n`end` may be combined with `start` or `period`, but cannot be combined with both.\n',
            examples: {
              iso8601_date: {
                summary: 'ISO 8601 date',
                description: 'Parsed as midnight UTC.',
                value: '2021-03-16',
              },
              iso8601_datetime_offset: {
                summary: 'ISO 8601 datetime (offset)',
                value: '2021-03-16T14:38:01-04:00',
              },
              iso8601_datetime_utc: {
                summary: 'ISO 8601 datetime (UTC)',
                value: '2021-03-16T18:38:01Z',
              },
              unix: {
                summary: 'Unix timestamp',
                description: 'Seconds since the epoch.',
                value: '1615919881',
              },
            },
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
    400: {
      description: 'The request parameters are invalid.',
      content: {
        'application/json': {
          schema: PortfolioHistoryErrorSchema,
          example: {
            code: 400,
            message:
              'invalid timeframe provided: 1Min. Valid timeframe for days > 30 is 1D: bad request',
          },
        },
      },
      headers: z.object({ 'Deprecated-Params': DeprecatedParamsHeaderSchema }),
    },
    403: {
      description: "Forbidden because the token's account type does not match the deployment.",
      content: {
        'application/json': {
          schema: PortfolioHistoryErrorSchema,
          example: { code: 403, message: 'token does not match account type' },
        },
      },
      headers: z.object({ 'Deprecated-Params': DeprecatedParamsHeaderSchema }),
    },
    404: {
      description: 'Account not found, or invalid or missing credentials.',
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

export const getV2AssetsRoute = createRoute({
  method: 'get',
  path: '/v2/assets',
  tags: ['Assets'],
  summary: 'Get Assets',
  description:
    'The assets API serves as the master list of assets available for trade and data consumption from Alpaca. Assets are sorted by asset class, exchange and symbol.',
  operationId: 'get-v2-assets',
  request: {
    query: z.object({
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. "active". By default, all statuses are included.',
            in: 'query',
            name: 'status',
            schema: { type: 'string' },
            required: false,
          },
        }),
      asset_class: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defaults to us_equity.',
            in: 'query',
            name: 'asset_class',
            schema: { type: 'string' },
            required: false,
          },
        }),
      exchange: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional comma-separated exchanges to filter `us_equity` and `us_index` assets by: AMEX, ARCA, BATS, NYSE, NASDAQ, NYSEARCA, OTC, TXSE, or INDEX. `INDEX` requires `asset_class=us_index`.\nCrypto and crypto perpetual assets are not filtered by exchange; set `asset_class` to exclude them.',
            in: 'query',
            name: 'exchange',
            schema: { type: 'string' },
            required: false,
          },
        }),
      attributes: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(AssetAttributeSchema),
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
              items: { $ref: '#/components/schemas/AssetAttribute' },
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
      description: 'An array of asset objects',
      content: { 'application/json': { schema: z.array(AssetsSchema) } },
    },
  },
})

export const getV2AssetsSymbolOrAssetIdRoute = createRoute({
  method: 'get',
  path: '/v2/assets/{symbol_or_asset_id}',
  tags: ['Assets'],
  summary: 'Get an Asset by ID or Symbol',
  description:
    'Get the asset model for a given symbol or asset_id. The symbol or asset_id should be passed in as a path parameter.\n\n**Note**: For crypto, the symbol has to follow old symbology, e.g. BTCUSD.\n\n**Note**: For coin pairs, the symbol should be separated by a slash (/), e.g. BTC/USDT. Since the slash is a special character in HTTP, use the URL encoded version instead, e.g. /v2/assets/BTC%2FUSDT',
  operationId: 'get-v2-assets-symbol_or_asset_id',
  request: {
    params: z.object({
      symbol_or_asset_id: z
        .string()
        .openapi({
          param: {
            description: 'symbol or assetId. CUSIP is also accepted for US equities.',
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
      description: 'An Asset object',
      content: { 'application/json': { schema: AssetsSchema } },
    },
    404: { description: 'Not Found' },
  },
})

export const getV2CalendarRoute = createRoute({
  method: 'get',
  path: '/v2/calendar',
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

export const getV2ClockRoute = createRoute({
  method: 'get',
  path: '/v2/clock',
  tags: ['Clock'],
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

export const getV2CorporateActionsAnnouncementsRoute = createRoute({
  method: 'get',
  path: '/v2/corporate_actions/announcements',
  tags: ['Corporate Actions'],
  summary: 'Retrieve Announcements',
  description:
    'This endpoint is deprecated, please use [the new corporate actions endpoint](https://docs.alpaca.markets/reference/corporateactions-1) instead.',
  operationId: 'get-v2-corporate_actions-announcements',
  request: {
    query: z.object({
      ca_types: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(CorporateActionCaTypeSchema),
        )
        .openapi({
          param: {
            description: 'A comma-delimited list of corporate action types.',
            explode: false,
            in: 'query',
            name: 'ca_types',
            required: true,
            schema: {
              items: { $ref: '#/components/schemas/CorporateActionCaType' },
              type: 'array',
            },
            style: 'form',
          },
        }),
      since: z
        .string()
        .openapi({
          param: {
            description:
              'The start (inclusive) of the date range when searching corporate action announcements. This should follow the YYYY-MM-DD format. The date range is limited to 90 days.',
            in: 'query',
            name: 'since',
            required: true,
            schema: { type: 'string' },
          },
        }),
      until: z
        .string()
        .openapi({
          param: {
            description:
              'The end (inclusive) of the date range when searching corporate action announcements. This should follow the YYYY-MM-DD format. The date range is limited to 90 days.',
            in: 'query',
            name: 'until',
            required: true,
            schema: { type: 'string' },
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
        .default('payable_date')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Which announcement date `since` and `until` apply to. When omitted, the range applies to payable_date.\n\n- **declaration_date**: The date of the preliminary announcement details or the date that any subsequent term updates took place.\n- **ex_date**: The date on which any security purchasing activity will not result in a corporate action entitlement. Any selling activity that takes place on or after this date will result in a corporate action entitlement.\n- **record_date**: The date the company checks its records to determine who is shareholder in order to allocate entitlements.\n- **payable_date**: The date that the stock and cash positions will update according to the account positions as of the record date.',
            in: 'query',
            name: 'date_type',
            schema: {
              default: 'payable_date',
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
      content: {
        'application/json': {
          schema: z.array(CorporateAnnouncementSchema),
          examples: {
            'Example 1': {
              value: [
                {
                  ca_sub_type: 'DIV',
                  ca_type: 'Dividend',
                  cash: '0.018',
                  corporate_actions_id: 'F58684224_XY37',
                  declaration_date: '2021-01-05',
                  expiration_date: '2021-01-12',
                  id: 'be3c368a-4c7c-4384-808e-f02c9f5a8afe',
                  initiating_original_cusip: '55275E101',
                  initiating_symbol: 'MLLAX',
                  new_rate: '1',
                  old_rate: '1',
                  payable_date: '2021-01-14',
                  record_date: '2021-01-13',
                  target_original_cusip: '55275E101',
                  target_symbol: 'MLLAX',
                },
                {
                  ca_sub_type: 'cash',
                  ca_type: 'Dividend',
                  cash: '0.145',
                  corporate_action_id: '48251W104_AD21',
                  declaration_date: '2021-11-01',
                  ex_date: '2021-11-12',
                  initiating_original_cusip: 'G52830109',
                  initiating_symbol: 'KKR',
                  new_rate: '1',
                  old_rate: '1',
                  payable_date: '2021-11-30',
                  record_date: '2021-11-15',
                  target_original_cusip: 'G52830109',
                  target_symbol: 'KKR',
                },
              ],
            },
          },
        },
      },
    },
  },
  deprecated: true,
})

export const getV2CorporateActionsAnnouncementsIdRoute = createRoute({
  method: 'get',
  path: '/v2/corporate_actions/announcements/{id}',
  tags: ['Corporate Actions'],
  summary: 'Retrieve a Specific Announcement',
  description:
    'This endpoint is deprecated, please use [the new corporate actions endpoint](https://docs.alpaca.markets/reference/corporateactions-1) instead.',
  operationId: 'get-v2-corporate_actions-announcements-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: "The corporate announcement's id",
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CorporateAnnouncementSchema } },
    },
  },
  deprecated: true,
})

export const getV2OptionsContractsRoute = createRoute({
  method: 'get',
  path: '/v2/options/contracts',
  tags: ['Assets'],
  summary: 'Get Option Contracts',
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
            description: 'Filter contracts by the exact expiration date (format: YYYY-MM-DD).',
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
      type: OptionContractTypeSchema.openapi({
        param: {
          description: 'Filter contracts by the type (call/put).',
          example: 'call',
          in: 'query',
          name: 'type',
          schema: { $ref: '#/components/schemas/OptionContractType' },
          required: false,
        },
      }).exactOptional(),
      style: OptionContractStyleSchema.openapi({
        param: {
          description: 'Filter contracts by the style (american/european).',
          example: 'american',
          in: 'query',
          name: 'style',
          schema: { $ref: '#/components/schemas/OptionContractStyle' },
          required: false,
        },
      }).exactOptional(),
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
      content: { 'application/json': { schema: OptionContractsResponseSchema } },
    },
  },
})

export const getV2OptionsContractsSymbolOrIdRoute = createRoute({
  method: 'get',
  path: '/v2/options/contracts/{symbol_or_id}',
  tags: ['Assets'],
  summary: 'Get an option contract by ID or Symbol',
  description:
    'Get an option contract by symbol or contract ID. The symbol or id should be passed in as a path parameter.',
  operationId: 'get-option-contract-symbol_or_id',
  request: {
    params: z.object({
      symbol_or_id: z
        .string()
        .openapi({
          param: {
            description: 'symbol or contract ID',
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

export const getV2OrdersRoute = createRoute({
  method: 'get',
  path: '/v2/orders',
  tags: ['Orders'],
  summary: 'Get All Orders',
  description:
    'Retrieves a list of orders for the account, filtered by the supplied query parameters.',
  operationId: 'getAllOrders',
  request: {
    query: z.object({
      status: z
        .enum(['open', 'closed', 'all'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Order status to be queried. open, closed or all. Defaults to open.',
            in: 'query',
            name: 'status',
            schema: { enum: ['open', 'closed', 'all'], example: 'open', type: 'string' },
            required: false,
          },
          example: 'open',
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
            schema: { type: 'integer' },
            required: false,
          },
        }),
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The response will include only ones submitted after this timestamp (exclusive.)',
            in: 'query',
            name: 'after',
            schema: { type: 'string' },
            required: false,
          },
        }),
      until: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The response will include only ones submitted until this timestamp (exclusive.)',
            in: 'query',
            name: 'until',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direction: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The chronological order of response based on the submission time. asc or desc. Defaults to desc.',
            in: 'query',
            name: 'direction',
            schema: { enum: ['asc', 'desc'], type: 'string' },
            required: false,
          },
        }),
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
      symbols: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of symbols to filter by (ex. "AAPL,TSLA,MSFT"). A currency pair is required for crypto orders (ex. "BTCUSD,BCHUSD,LTCUSD,ETCUSD").',
            in: 'query',
            name: 'symbols',
            schema: { type: 'string' },
            required: false,
          },
        }),
      side: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filters down to orders that have a matching side field set.',
            in: 'query',
            name: 'side',
            schema: { type: 'string' },
            required: false,
          },
        }),
      asset_class: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'us_equity',
              'us_option',
              'crypto',
              'crypto_perp',
              'treasury',
              'corporate',
              'global_equity',
              'us_index',
              'us_equity_chain',
              'ipo',
              'all',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of asset classes, the response will include only orders in the specified asset classes. By specifying `us_option` as the class, you can query option orders by underlying symbol using the symbols parameter.',
            in: 'query',
            name: 'asset_class',
            schema: {
              items: {
                enum: [
                  'us_equity',
                  'us_option',
                  'crypto',
                  'crypto_perp',
                  'treasury',
                  'corporate',
                  'global_equity',
                  'us_index',
                  'us_equity_chain',
                  'ipo',
                  'all',
                ],
                type: 'string',
              },
              type: 'array',
            },
            required: false,
          },
        }),
      before_order_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Return orders submitted before the order with this ID (exclusive).\nMutually exclusive with `after_order_id`. Do not combine with `after`/`until`.\n',
            in: 'query',
            name: 'before_order_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      after_order_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Return orders submitted after the order with this ID (exclusive).\nMutually exclusive with `before_order_id`. Do not combine with `after`/`until`.\n',
            in: 'query',
            name: 'after_order_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response\n\nAn array of Order objects',
      content: {
        'application/json': {
          schema: z.array(OrderSchema),
          examples: {
            Crypto: CryptoOrderResponseExample,
            Equity: EquityOrderResponseExample,
            IPO: IPOOrderResponseExample,
            MultilegOptions: MultilegOptionsOrderResponseExample,
            Options: OptionOrderResponseExample,
          },
        },
      },
    },
  },
})

export const postV2OrdersRoute = createRoute({
  method: 'post',
  path: '/v2/orders',
  tags: ['Orders'],
  summary: 'Create an Order',
  description:
    'Places a new order for the given account. An order request may be rejected if the account is not authorized for trading, or if the tradable balance is insufficient to fill the order.',
  operationId: 'postOrder',
  request: {
    body: {
      description: '',
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
            MultilegOptions: {
              summary: 'Option Call spread',
              value: {
                legs: [
                  {
                    position_intent: 'buy_to_open',
                    ratio_qty: '3',
                    side: 'buy',
                    symbol: 'AAPL241213C00250000',
                  },
                  {
                    position_intent: 'sell_to_open',
                    ratio_qty: '1',
                    side: 'sell',
                    symbol: 'AAPL241213C00260000',
                  },
                ],
                limit_price: '10',
                order_class: 'mleg',
                qty: '3',
                time_in_force: 'day',
                type: 'limit',
              },
            },
            Options: {
              summary: 'Buy an option contract',
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
      description: 'Successful response',
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
    403: { description: 'Forbidden\n\nBuying power or shares is not sufficient.' },
    422: { description: 'Unprocessable\n\nInput parameters are not recognized.' },
  },
})

export const deleteV2OrdersRoute = createRoute({
  method: 'delete',
  path: '/v2/orders',
  tags: ['Orders'],
  summary: 'Delete All Orders',
  description:
    'Attempts to cancel all open orders. A response will be provided for each order that is attempted to be cancelled. If an order is no longer cancelable, the server will respond with status 500 and reject the request.',
  operationId: 'deleteAllOrders',
  responses: {
    207: {
      description:
        'Multi-Status with body.\n\nan array of objects that include the order id and http status code for each status request.',
      content: { 'application/json': { schema: z.array(CanceledOrderResponseSchema) } },
    },
    500: { description: 'Failed to cancel order.' },
  },
})

export const getV2OrdersOrderIdRoute = createRoute({
  method: 'get',
  path: '/v2/orders/{order_id}',
  tags: ['Orders'],
  summary: 'Get Order by ID',
  description: 'Retrieves a single order for the given order_id.',
  operationId: 'getOrderByOrderID',
  request: {
    params: z.object({
      order_id: z
        .uuid()
        .openapi({
          param: {
            description: 'order id',
            in: 'path',
            name: 'order_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    query: z.object({
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
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
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
  },
})

export const deleteV2OrdersOrderIdRoute = createRoute({
  method: 'delete',
  path: '/v2/orders/{order_id}',
  tags: ['Orders'],
  summary: 'Delete Order by ID',
  description:
    'Attempts to cancel an Open Order. If the order is no longer cancelable, the request will be rejected with status 422; otherwise accepted with return status 204.',
  operationId: 'deleteOrderByOrderID',
  request: {
    params: z.object({
      order_id: z
        .uuid()
        .openapi({
          param: {
            description: 'order id',
            in: 'path',
            name: 'order_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    422: { description: 'The order status is not cancelable.' },
  },
})

export const patchV2OrdersOrderIdRoute = createRoute({
  method: 'patch',
  path: '/v2/orders/{order_id}',
  tags: ['Orders'],
  summary: 'Replace Order by ID',
  description:
    'Replaces a single order with updated parameters. Each parameter overrides the corresponding attribute of the existing order. The other attributes remain the same as the existing order.\n\nA success return code from a replaced order does NOT guarantee the existing open order has been replaced. If the existing open order is filled before the replacing (new) order reaches the execution venue, the replacing (new) order is rejected, and these events are sent in the trade_updates stream channel.\n\nWhile an order is being replaced, buying power is reduced by the larger of the two orders that have been placed (the old order being replaced, and the newly placed order to replace it). If you are replacing a buy entry order with a higher limit price than the original order, the buying power is calculated based on the newly placed order. If you are replacing it with a lower limit price, the buying power is calculated based on the old order.\n\nNote: Order cannot be replaced when the status is `accepted`, `pending_new`, `pending_cancel` or `pending_replace`.\n\nNote: Notional orders for non-IPO asset classes cannot be replaced. Any attempt to modify a non-IPO notional order via this endpoint will be rejected; cancel it and submit a new one instead.\n\nNote: IPO indications of interest (`asset_class: "ipo"`) **are** notional and **can** be replaced via this endpoint by providing a new `notional` value. `qty` and `notional` are mutually exclusive on a single replace request.\n',
  operationId: 'patchOrderByOrderId',
  request: {
    params: z.object({
      order_id: z
        .uuid()
        .openapi({
          param: {
            description: 'order id',
            in: 'path',
            name: 'order_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: PatchOrderRequestSchema,
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
      description: 'Successful response\n\nThe new Order object with the new order ID.',
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
  },
})

export const getV2OrdersByClientOrderIdRoute = createRoute({
  method: 'get',
  path: '/v2/orders:by_client_order_id',
  tags: ['Orders'],
  summary: 'Get Order by Client Order ID',
  description: 'Retrieves a single order specified by the client order ID.',
  operationId: 'getOrderByClientOrderId',
  request: {
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
  },
})

export const getV2PositionsRoute = createRoute({
  method: 'get',
  path: '/v2/positions',
  tags: ['Positions'],
  summary: 'All Open Positions',
  description:
    "The positions API provides information about an account's current open positions. The response will include information such as cost basis, shares traded, and market value, which will be updated live as price information is updated. Once a position is closed, it will no longer be queryable through this API\n\nRetrieves a list of the account's open positions",
  operationId: 'getAllOpenPositions',
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(PositionSchema) } },
    },
  },
})

export const deleteV2PositionsRoute = createRoute({
  method: 'delete',
  path: '/v2/positions',
  tags: ['Positions'],
  summary: 'Close All Positions',
  description:
    "Closes (liquidates) all of the account's open long and short positions. A response will be provided for each order that is attempted to be cancelled. If an order is no longer cancelable, the server will respond with status 500 and reject the request.",
  operationId: 'deleteAllOpenPositions',
  request: {
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
      description: 'Multi-Status with body.\n\nan array of PositionClosed responses',
      content: { 'application/json': { schema: z.array(PositionClosedResponseSchema) } },
    },
    500: { description: 'Failed to liquidate' },
  },
})

export const getV2PositionsSymbolOrAssetIdRoute = createRoute({
  method: 'get',
  path: '/v2/positions/{symbol_or_asset_id}',
  tags: ['Positions'],
  summary: 'Get an Open Position',
  description: "Retrieves the account's open position for the given symbol or assetId.",
  operationId: 'getOpenPosition',
  request: {
    params: z.object({
      symbol_or_asset_id: z
        .string()
        .openapi({
          param: {
            description: 'symbol or assetId',
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
      description: 'Successful response',
      content: { 'application/json': { schema: PositionSchema } },
    },
  },
})

export const deleteV2PositionsSymbolOrAssetIdRoute = createRoute({
  method: 'delete',
  path: '/v2/positions/{symbol_or_asset_id}',
  tags: ['Positions'],
  summary: 'Close a Position',
  description:
    "Closes (liquidates) the account's open position for the given symbol. Works for both long and short positions.",
  operationId: 'deleteOpenPosition',
  request: {
    params: z.object({
      symbol_or_asset_id: z
        .string()
        .openapi({
          param: {
            description: 'symbol or assetId',
            in: 'path',
            name: 'symbol_or_asset_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      qty: z
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
              'the number of shares to liquidate. Can accept up to 9 decimal points. Cannot work with percentage',
            in: 'query',
            name: 'qty',
            schema: { type: 'number' },
            required: false,
          },
        }),
      percentage: z
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
              'percentage of position to liquidate. Must be between 0 and 100. Would only sell fractional if position is originally fractional. Can accept up to 9 decimal points. Cannot work with qty',
            in: 'query',
            name: 'percentage',
            schema: { type: 'number' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response\n\nReturns the order created to close out this position',
      content: { 'application/json': { schema: OrderSchema } },
    },
  },
})

export const postV2PositionsSymbolOrContractIdDoNotExerciseRoute = createRoute({
  method: 'post',
  path: '/v2/positions/{symbol_or_contract_id}/do-not-exercise',
  tags: ['Positions'],
  summary: 'Do Not Exercise an Options Position',
  description:
    'This endpoint enables users to submit a do-not-exercise (DNE) instruction for a held option contract, preventing automatic exercise at expiry.\nBy default, Alpaca will automatically exercise in-the-money (ITM) contracts at expiry. This endpoint allows users to override that behavior.\nTo override this behavior and submit an exercise instruction, please contact our support team.',
  operationId: 'optionDoNotExercise',
  request: {
    params: z.object({
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
  },
  responses: {
    200: {
      description: 'Successful Response\n\nDo-not-exercise instruction successfully submitted.',
    },
    403: {
      description:
        'Forbidden\n\nAvailable position quantity is not sufficient or no position found.',
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
      description: 'Invalid Parameters.\n\nOne or more parameters provided are invalid.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { 'Invalid Symbol': { value: { code: 42210000, message: 'invalid symbol' } } },
        },
      },
    },
  },
})

export const postV2PositionsSymbolOrContractIdExerciseRoute = createRoute({
  method: 'post',
  path: '/v2/positions/{symbol_or_contract_id}/exercise',
  tags: ['Positions'],
  summary: 'Exercise an Options Position',
  description:
    'This endpoint enables users to exercise a held option contract, converting it into the underlying asset based on the specified terms.\nAll available held shares of this option contract will be exercised.\nBy default, Alpaca will automatically exercise in-the-money (ITM) contracts at expiry.\nExercise requests will be processed immediately once received. Exercise requests submitted between market close and midnight will be rejected to avoid any confusion about when the exercise will settle.\nTo cancel an exercise request or to submit a Do-not-exercise (DNE) instruction, you can use the do-not-exercise endpoint or contact our support team.',
  operationId: 'optionExercise',
  request: {
    params: z.object({
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
  },
  responses: {
    200: { description: 'Successful Response\n\nExercise instruction successfully submitted.' },
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
    422: {
      description: 'Invalid Parameters.\n\nOne or more parameters provided are invalid.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { 'Invalid Symbol': { value: { code: 42210000, message: 'invalid symbol' } } },
        },
      },
    },
  },
})

export const postV2TokenizationMintRoute = createRoute({
  method: 'post',
  path: '/v2/tokenization/mint',
  tags: ['Tokenization'],
  summary: 'Mint a Tokenized Asset',
  description:
    'This endpoint is used by an Authorized Participant to request the minting of a tokenized asset.\n\n**Idempotency**: When the `Idempotency-Key` header is supplied, this endpoint is\nidempotent. Multiple requests with the same key and identical request body will\ncreate only one mint request. A subsequent request returns the previously created\nrequest with the same response (no duplicate is created). If the same key is used\nwith a different request body, the API returns `422 Unprocessable Entity`.\n\n**Recommended for production**: Always supply `Idempotency-Key` when requesting a\nmint. This allows safe retries on timeouts, network errors, or 5xx responses\nwithout risking duplicate requests. Use a client-generated unique value (e.g. UUID).',
  operationId: 'postTokenizationMint',
  request: {
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

export const getV2TokenizationRequestsRoute = createRoute({
  method: 'get',
  path: '/v2/tokenization/requests',
  tags: ['Tokenization'],
  summary: 'List Tokenization Requests',
  description:
    'An Authorized Participant can use this endpoint to list the tokenization requests performed on the Instant Tokenization Network (ITN).',
  operationId: 'getTokenizationRequests',
  request: {
    query: z.object({
      type: TokenizationRequestTypeSchema.openapi({
        param: {
          description: 'Tokenization request type to be queried',
          example: 'mint',
          in: 'query',
          name: 'type',
          schema: { $ref: '#/components/schemas/TokenizationRequestType' },
          required: false,
        },
      }).exactOptional(),
      status: TokenizationRequestStatusSchema.openapi({
        param: {
          description: 'Tokenization request status to be queried',
          example: 'pending',
          in: 'query',
          name: 'status',
          schema: { $ref: '#/components/schemas/TokenizationRequestStatus' },
          required: false,
        },
      }).exactOptional(),
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

export const getV2TokenizationRequestsTokenizationRequestIdRoute = createRoute({
  method: 'get',
  path: '/v2/tokenization/requests/{tokenization_request_id}',
  tags: ['Tokenization'],
  summary: 'Get Tokenization Request by ID',
  description:
    'An Authorized Participant can use this endpoint to retrieve a single tokenization request, mint or redeem, by its `tokenization_request_id`.',
  operationId: 'getTokenizationRequest',
  request: {
    params: z.object({
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
        'No tokenization request with the supplied `tokenization_request_id` exists for the calling account.',
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

export const getV2TokenizationRequestsByClientRequestIdRoute = createRoute({
  method: 'get',
  path: '/v2/tokenization/requests:by_client_request_id',
  tags: ['Tokenization'],
  summary: 'Get Tokenization Request by `client_request_id`',
  description:
    'An Authorized Participant can use this endpoint to retrieve a single mint tokenization request by their own `client_request_id` -- the AP-supplied label originally passed on the mint request. If the AP has reused a `client_request_id` across multiple requests, the most recently created request is returned.',
  operationId: 'getTokenizationRequestByClientRequestID',
  request: {
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
        'No tokenization request with the supplied `client_request_id` exists for the calling account.',
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

export const getV2WalletsRoute = createRoute({
  method: 'get',
  path: '/v2/wallets',
  tags: ['Crypto Funding'],
  summary: 'Retrieve Crypto Funding Wallets',
  description:
    'Lists wallets for the account given in the path parameter. If an asset is specified and no wallet for the account and asset pair exists one will be created. If no asset is specified only existing wallets will be listed for the account. An account may have at most one wallet per asset.',
  operationId: 'listCryptoFundingWallets',
  request: {
    query: z.object({
      asset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by crypto asset symbol, e.g. BTC, ETH, USDT. If specified and no wallet exists, one will be created.',
            in: 'query',
            name: 'asset',
            schema: { type: 'string' },
            required: false,
          },
        }),
      chain: CryptoChainSchema.openapi({
        param: {
          description:
            'Optional chain identifier. Use to request wallets for a specific chain when asset is a multi-chain crypto asset. If not specified, network is considered.',
          in: 'query',
          name: 'chain',
          schema: { $ref: '#/components/schemas/CryptoChain' },
          required: false,
        },
      }).exactOptional(),
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
  },
})

export const getV2WalletsFeesEstimateRoute = createRoute({
  method: 'get',
  path: '/v2/wallets/fees/estimate',
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
      content: { 'application/json': { schema: WalletFeeEstimateResponseSchema } },
    },
  },
})

export const getV2WalletsTransfersRoute = createRoute({
  method: 'get',
  path: '/v2/wallets/transfers',
  tags: ['Crypto Funding'],
  summary: 'Retrieve Crypto Funding Transfers',
  description:
    'Returns an array of all transfers associated with the given account across all wallets.',
  operationId: 'listCryptoFundingTransfers',
  responses: {
    200: {
      description: 'An array of transfer objects',
      content: { 'application/json': { schema: CryptoTransferSchema } },
    },
  },
})

export const getV2WalletsTransfersTransferIdRoute = createRoute({
  method: 'get',
  path: '/v2/wallets/transfers/{transfer_id}',
  tags: ['Crypto Funding'],
  summary: 'Retrieve a Crypto Funding Transfer',
  description: 'Returns a specific wallet transfer by passing into the query the transfer_id.',
  operationId: 'getCryptoFundingTransfer',
  request: {
    params: z.object({
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

export const getV2WalletsTravelRuleVaspsRoute = createRoute({
  method: 'get',
  path: '/v2/wallets/travel-rule/vasps',
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

export const getV2WalletsWhitelistsRoute = createRoute({
  method: 'get',
  path: '/v2/wallets/whitelists',
  tags: ['Crypto Funding'],
  summary: 'An array of whitelisted addresses',
  description: 'Returns the list of whitelisted withdrawal addresses for your account.',
  operationId: 'listWhitelistedAddress',
  responses: {
    200: {
      description: 'An array of whitelisted objects',
      content: { 'application/json': { schema: WhitelistedAddressSchema } },
    },
  },
})

export const postV2WalletsWhitelistsRoute = createRoute({
  method: 'post',
  path: '/v2/wallets/whitelists',
  tags: ['Crypto Funding'],
  summary: 'Request a new whitelisted address',
  description:
    'Submits a new whitelisted withdrawal address for your account. The chain is derived from the supplied asset symbol and address, and the same address cannot be whitelisted twice on the same chain.\n\nWhere travel rule reporting applies to your account, supply travel rule information for the destination wallet. Use the `Search VASPs` endpoint to find the VASP DID for the destination exchange. For a self-hosted wallet, set `beneficiary_is_self_hosted` to true. If the exchange is not in the directory, provide its information in `beneficiary_manual_entry`.\n\nNote that whitelisted addresses must wait at least 24 hours before they can be used as a withdrawal destination.',
  operationId: 'createWhitelistedAddress',
  request: {
    body: {
      content: { 'application/json': { schema: CreateWhitelistedAddressRequestSchema } },
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

export const deleteV2WalletsWhitelistsWhitelistedAddressIdRoute = createRoute({
  method: 'delete',
  path: '/v2/wallets/whitelists/{whitelisted_address_id}',
  tags: ['Crypto Funding'],
  summary: 'Delete a whitelisted address',
  description:
    'Deletes a whitelisted withdrawal address by ID. Subsequent withdrawals targeting the deleted address will be rejected.',
  operationId: 'deleteWhitelistedAddress',
  request: {
    params: z.object({
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

export const patchV2WalletsWhitelistsWhitelistedAddressIdTravelRuleInfoRoute = createRoute({
  method: 'patch',
  path: '/v2/wallets/whitelists/{whitelisted_address_id}/travel-rule-info',
  tags: ['Crypto Funding'],
  summary: 'Update travel rule information for a whitelisted wallet',
  description:
    "You are required to supply travel rule information for the crypto wallets you're withdrawing to.\n\nIt is preferred that you use the `Search VASPs` endpoint to find the VASP DID for the exchange you are withdrawing to,\notherwise, if it's a self-hosted wallet, please set `beneficiary_is_self_hosted` to true.\n\nIf the exchange cannot be found in our directory, please supply the information manually using the `beneficiary_manual_entry` object.",
  operationId: 'updateWhitelistedAddressTravelRuleInfo',
  request: {
    params: z.object({
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

export const getV2WatchlistsRoute = createRoute({
  method: 'get',
  path: '/v2/watchlists',
  tags: ['Watchlists'],
  summary: 'Get All Watchlists',
  description: 'Returns the list of watchlists registered under the account.',
  operationId: 'getWatchlists',
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z.array(WatchlistWithoutAssetSchema),
          examples: {
            'example-1': {
              value: [
                {
                  account_id: 'abe25343-a7ba-4255-bdeb-f7e013e9ee5d',
                  created_at: '2022-01-31T21:49:05.14628Z',
                  id: '3174d6df-7726-44b4-a5bd-7fda5ae6e009',
                  name: 'Primary Watchlist',
                  updated_at: '2022-01-31T21:49:05.14628Z',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const postV2WatchlistsRoute = createRoute({
  method: 'post',
  path: '/v2/watchlists',
  tags: ['Watchlists'],
  summary: 'Create Watchlist',
  description: 'Create a new watchlist with initial set of assets.',
  operationId: 'postWatchlist',
  request: {
    body: {
      content: { 'application/json': { schema: CreateWatchlistRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WatchlistSchema } },
    },
  },
})

export const getV2WatchlistsWatchlistIdRoute = createRoute({
  method: 'get',
  path: '/v2/watchlists/{watchlist_id}',
  tags: ['Watchlists'],
  summary: 'Get Watchlist by ID',
  description: 'Returns a watchlist identified by the ID.',
  operationId: 'getWatchlistById',
  request: {
    params: z.object({
      watchlist_id: z
        .uuid()
        .openapi({
          param: {
            description: 'watchlist id',
            in: 'path',
            name: 'watchlist_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WatchlistSchema } },
    },
  },
})

export const putV2WatchlistsWatchlistIdRoute = createRoute({
  method: 'put',
  path: '/v2/watchlists/{watchlist_id}',
  tags: ['Watchlists'],
  summary: 'Update Watchlist By Id',
  description: 'Update the name and/or content of watchlist',
  operationId: 'updateWatchlistById',
  request: {
    params: z.object({
      watchlist_id: z
        .uuid()
        .openapi({
          param: {
            description: 'watchlist id',
            in: 'path',
            name: 'watchlist_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateWatchlistRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WatchlistSchema } },
    },
  },
})

export const postV2WatchlistsWatchlistIdRoute = createRoute({
  method: 'post',
  path: '/v2/watchlists/{watchlist_id}',
  tags: ['Watchlists'],
  summary: 'Add Asset to Watchlist',
  description: 'Append an asset for the symbol to the end of watchlist asset list',
  operationId: 'addAssetToWatchlist',
  request: {
    params: z.object({
      watchlist_id: z
        .uuid()
        .openapi({
          param: {
            description: 'watchlist id',
            in: 'path',
            name: 'watchlist_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddAssetToWatchlistRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WatchlistSchema } },
    },
  },
})

export const deleteV2WatchlistsWatchlistIdRoute = createRoute({
  method: 'delete',
  path: '/v2/watchlists/{watchlist_id}',
  tags: ['Watchlists'],
  summary: 'Delete Watchlist By Id',
  description: 'Delete a watchlist. This is a permanent deletion.',
  operationId: 'deleteWatchlistById',
  request: {
    params: z.object({
      watchlist_id: z
        .uuid()
        .openapi({
          param: {
            description: 'watchlist id',
            in: 'path',
            name: 'watchlist_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' }, 404: { description: 'Watchlist not found' } },
})

export const deleteV2WatchlistsWatchlistIdSymbolRoute = createRoute({
  method: 'delete',
  path: '/v2/watchlists/{watchlist_id}/{symbol}',
  tags: ['Watchlists'],
  summary: 'Delete Symbol from Watchlist',
  description: 'Delete one entry for an asset by symbol name',
  operationId: 'removeAssetFromWatchlist',
  request: {
    params: z.object({
      watchlist_id: z
        .uuid()
        .openapi({
          param: {
            description: 'Watchlist ID',
            in: 'path',
            name: 'watchlist_id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      symbol: z
        .string()
        .openapi({
          param: {
            description: 'symbol name to remove from the watchlist content',
            in: 'path',
            name: 'symbol',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the updated watchlist',
      content: { 'application/json': { schema: WatchlistSchema } },
    },
  },
})

export const getV2WatchlistsByNameRoute = createRoute({
  method: 'get',
  path: '/v2/watchlists:by_name',
  tags: ['Watchlists'],
  summary: 'Get Watchlist by Name',
  description:
    'You can also call GET, PUT, POST and DELETE with watchlist name with another endpoint /v2/watchlists:by_name and query parameter name=<watchlist_name>, instead of /v2/watchlists/{watchlist_id} endpoints\n\nReturns a watchlist by name',
  operationId: 'getWatchlistByName',
  request: {
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the watchlist',
            in: 'query',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WatchlistSchema } },
    },
  },
})

export const putV2WatchlistsByNameRoute = createRoute({
  method: 'put',
  path: '/v2/watchlists:by_name',
  tags: ['Watchlists'],
  summary: 'Update Watchlist By Name',
  description: 'Update the name and/or content of watchlist',
  operationId: 'updateWatchlistByName',
  request: {
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the watchlist',
            in: 'query',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateWatchlistRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WatchlistSchema } },
    },
  },
})

export const postV2WatchlistsByNameRoute = createRoute({
  method: 'post',
  path: '/v2/watchlists:by_name',
  tags: ['Watchlists'],
  summary: 'Add Asset to Watchlist By Name',
  description: 'Append an asset for the symbol to the end of watchlist asset list',
  operationId: 'addAssetToWatchlistByName',
  request: {
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the watchlist',
            in: 'query',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddAssetToWatchlistRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WatchlistSchema } },
    },
  },
})

export const deleteV2WatchlistsByNameRoute = createRoute({
  method: 'delete',
  path: '/v2/watchlists:by_name',
  tags: ['Watchlists'],
  summary: 'Delete Watchlist By Name',
  description: 'Delete a watchlist. This is a permanent deletion.',
  operationId: 'deleteWatchlistByName',
  request: {
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the watchlist',
            in: 'query',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
})

export const getV3CalendarMarketRoute = createRoute({
  method: 'get',
  path: '/v3/calendar/{market}',
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

export const getV3ClockRoute = createRoute({
  method: 'get',
  path: '/v3/clock',
  tags: ['Clock'],
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
