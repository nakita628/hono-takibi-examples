import { createRoute, z } from '@hono/zod-openapi'

const CaIdSchema = z
  .uuid()
  .openapi({ description: 'The internal Alpaca identifier of the corporate action.' })
  .openapi('CaId')

const ProcessDateSchema = z.iso
  .date()
  .openapi({ description: 'The date when the corporate action is processed by Alpaca.' })
  .openapi('ProcessDate')

const CaEventBaseSchema = z
  .object({ id: CaIdSchema, process_date: ProcessDateSchema })
  .openapi({
    description:
      'Common fields present on every `ca` payload regardless of `event_type`.\nNot meant to be referenced directly by clients -- it exists so each\nper-type payload schema (`ca_event_cash_dividend`, `ca_event_forward_split`,\n...) can `allOf`-compose it instead of restating `id` and `process_date`.\nThis makes the "always present" invariant structural (guaranteed by the\nschema) rather than emergent from repetition, and matches the "Common `ca`\nfields" section of the event-streaming Corporate Actions SSE design doc.\n',
    required: ['id', 'process_date'],
  })
  .openapi('CaEventBase')

const CurrencySchema = z
  .string()
  .openapi({
    description:
      'The ISO 4217 currency code associated with the corporate action.\nEmpty value can mean USD, non-applicable (e.g. for name changes) or unknown\n(can change later to a valid currency).\n',
  })
  .openapi('Currency')

const ExDateSchema = z.iso
  .date()
  .openapi({ description: 'The ex-date marks the cutoff point for shareholders to be credited.' })
  .openapi('ExDate')

const IsinSchema = z
  .string()
  .openapi({
    description:
      'International Securities Identification Number (ISIN) as defined by ISO 6166.\nMay be empty for US corporate actions.\n',
  })
  .openapi('Isin')

const PayableDateSchema = z.iso
  .date()
  .openapi({ description: 'The date when the corporate action benefit is paid or distributed.' })
  .openapi('PayableDate')

const RecordDateSchema = z.iso
  .date()
  .openapi({ description: 'The date shareholders must own shares to receive the benefit.' })
  .openapi('RecordDate')

const CaEventCapitalGainsDistributionSchema = CaEventBaseSchema.and(
  z
    .object({
      currency: CurrencySchema.exactOptional(),
      cusip: z.string().openapi({ description: 'CUSIP of the security.' }),
      ex_date: ExDateSchema,
      isin: IsinSchema.exactOptional(),
      long_term_rate: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Long-term capital-gains payment per share, as a decimal string.',
          examples: ['1.4372'],
        }),
      payable_date: PayableDateSchema.exactOptional(),
      record_date: RecordDateSchema.exactOptional(),
      short_term_rate: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Short-term capital-gains payment per share, as a decimal string.',
          examples: ['0.1051'],
        }),
      symbol: z.string().openapi({ description: 'Ticker paying the distribution.' }),
    })
    .openapi({ required: ['symbol', 'cusip', 'ex_date'] }),
)
  .openapi({
    description:
      'Capital-gains distribution payload delivered when\n`event_type == capital_gains_distribution_corporateaction_event`. Every\ndecimal field is emitted as a JSON string to preserve precision on the\nwire. At least one of `long_term_rate` / `short_term_rate` is present;\ncombined distributions carry both.\n',
  })
  .openapi('CaEventCapitalGainsDistribution')

const CaEventCashDividendSchema = CaEventBaseSchema.and(
  z
    .object({
      currency: CurrencySchema.exactOptional(),
      cusip: z.string().openapi({ description: 'CUSIP of the security.' }),
      due_bill_off_date: z.iso
        .date()
        .exactOptional()
        .openapi({ description: 'End of the due-bill period.' }),
      due_bill_on_date: z.iso
        .date()
        .exactOptional()
        .openapi({ description: 'Start of the due-bill period.' }),
      ex_date: ExDateSchema,
      foreign: z.boolean().openapi({ description: '`true` if the issuer is not US-based.' }),
      isin: IsinSchema.exactOptional(),
      payable_date: PayableDateSchema.exactOptional(),
      rate: z
        .string()
        .openapi({ description: 'Cash paid per share, as a decimal string.', examples: ['0.24'] }),
      record_date: RecordDateSchema.exactOptional(),
      special: z
        .boolean()
        .openapi({
          description:
            "`true` if this is a one-off dividend outside the issuer's regular\ndistribution schedule.\n",
        }),
      sub_type: z
        .enum(['interest', 'return_of_capital'])
        .exactOptional()
        .openapi({ description: 'Optional sub-classification of the dividend.' }),
      symbol: z.string().openapi({ description: 'Ticker paying the dividend.' }),
    })
    .openapi({ required: ['symbol', 'cusip', 'rate', 'special', 'foreign', 'ex_date'] }),
)
  .openapi({
    description:
      'Cash dividend payload delivered when\n`event_type == cash_dividend_corporateaction_event`. Corresponds to\n`cash_dividends` on the REST\n[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but\nevery decimal field is emitted as a JSON string to preserve precision on\nthe wire.\n',
  })
  .openapi('CaEventCashDividend')

const EffectiveDateSchema = z.iso
  .date()
  .openapi({
    description: 'The effective date marks the cutoff point for shareholders to be credited.',
  })
  .openapi('EffectiveDate')

const CaEventCashMergerSchema = CaEventBaseSchema.and(
  z
    .object({
      acquiree_cusip: z.string().openapi({ description: 'CUSIP of the company being bought.' }),
      acquiree_isin: IsinSchema.exactOptional(),
      acquiree_symbol: z
        .string()
        .openapi({ description: 'Ticker being bought (will disappear after the merger).' }),
      acquirer_cusip: z.string().exactOptional().openapi({ description: "Buyer's CUSIP." }),
      acquirer_isin: IsinSchema.exactOptional(),
      acquirer_symbol: z
        .string()
        .exactOptional()
        .openapi({ description: "Buyer's ticker (the surviving company)." }),
      currency: CurrencySchema.exactOptional(),
      effective_date: EffectiveDateSchema,
      payable_date: PayableDateSchema.exactOptional(),
      rate: z
        .string()
        .openapi({
          description: 'Cash paid per share of the acquired company, as a decimal string.',
          examples: ['42.50'],
        }),
    })
    .openapi({ required: ['acquiree_symbol', 'acquiree_cusip', 'rate', 'effective_date'] }),
)
  .openapi({
    description:
      'Cash merger payload delivered when\n`event_type == cash_merger_corporateaction_event`. Corresponds to\n`cash_mergers` on the REST\n[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but\nevery decimal field is emitted as a JSON string to preserve precision on\nthe wire.\n',
  })
  .openapi('CaEventCashMerger')

const CaEventEquityPartialCallSchema = CaEventBaseSchema.and(
  z
    .object({
      currency: CurrencySchema.exactOptional(),
      cusip: z.string().exactOptional().openapi({ description: 'CUSIP of the security.' }),
      dividend_rate: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Dividend rate associated with the called shares, as a decimal string.',
          examples: ['0.05'],
        }),
      isin: IsinSchema.exactOptional(),
      lottery_date: z.iso
        .date()
        .exactOptional()
        .openapi({ description: 'When the lottery drawing happens.' }),
      lottery_type: z
        .enum(['original', 'supplemental'])
        .exactOptional()
        .openapi({ description: 'How called shares were allocated among holders.' }),
      payable_date: PayableDateSchema.exactOptional(),
      price: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Price paid per called share, as a decimal string.',
          examples: ['15.00'],
        }),
      record_date: RecordDateSchema.exactOptional(),
      results_publication_date: z.iso
        .date()
        .exactOptional()
        .openapi({ description: 'When the lottery results are published.' }),
      symbol: z.string().openapi({ description: 'Ticker being partially called.' }),
    })
    .openapi({ required: ['symbol'] }),
)
  .openapi({
    description:
      'Partial redemption of an equity issue where the issuer calls back only a\nfraction of outstanding shares -- typically allocated to holders via a\nlottery. Delivered when\n`event_type == equity_partial_call_corporateaction_event`. Corresponds to\n`partial_calls` on the REST\n[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but\nevery decimal field is emitted as a JSON string to preserve precision on\nthe wire.\n',
  })
  .openapi('CaEventEquityPartialCall')

const DueBillRedemptionDateSchema = z.iso
  .date()
  .openapi({ description: 'The date when due bill obligations are redeemed.' })
  .openapi('DueBillRedemptionDate')

const CaEventForwardSplitSchema = CaEventBaseSchema.and(
  z
    .object({
      currency: CurrencySchema.exactOptional(),
      cusip: z.string().openapi({ description: 'CUSIP of the security.' }),
      due_bill_redemption_date: DueBillRedemptionDateSchema.exactOptional(),
      ex_date: ExDateSchema,
      isin: IsinSchema.exactOptional(),
      new_rate: z
        .string()
        .openapi({ description: 'Shares after the split, as a decimal string.', examples: ['4'] }),
      old_rate: z
        .string()
        .openapi({ description: 'Shares before the split, as a decimal string.', examples: ['1'] }),
      payable_date: PayableDateSchema.exactOptional(),
      record_date: RecordDateSchema.exactOptional(),
      symbol: z.string().openapi({ description: 'Ticker being split.' }),
    })
    .openapi({ required: ['symbol', 'cusip', 'old_rate', 'new_rate', 'ex_date'] }),
)
  .openapi({
    description:
      'Forward stock split payload delivered when\n`event_type == forward_split_corporateaction_event`. Corresponds to\n`forward_splits` on the REST\n[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but\nevery decimal field is emitted as a JSON string to preserve precision on\nthe wire.\n',
  })
  .openapi('CaEventForwardSplit')

const CaEventNameChangeSchema = CaEventBaseSchema.and(
  z
    .object({
      currency: CurrencySchema.exactOptional(),
      new_cusip: z.string().openapi({ description: 'CUSIP after the change.' }),
      new_isin: IsinSchema.exactOptional(),
      new_symbol: z.string().openapi({ description: 'Ticker after the change.' }),
      old_cusip: z.string().openapi({ description: 'CUSIP before the change.' }),
      old_isin: IsinSchema.exactOptional(),
      old_symbol: z.string().openapi({ description: 'Ticker before the change.' }),
    })
    .openapi({ required: ['old_symbol', 'old_cusip', 'new_symbol', 'new_cusip'] }),
)
  .openapi({
    description:
      'Name/ticker change payload delivered when\n`event_type == name_change_corporateaction_event`. Corresponds to\n`name_changes` on the REST\n[`GET /v1/corporate-actions`](#operation/CorporateActions) response.\n',
  })
  .openapi('CaEventNameChange')

const CaEventRedemptionSchema = CaEventBaseSchema.and(
  z
    .object({
      currency: CurrencySchema.exactOptional(),
      cusip: z.string().openapi({ description: 'CUSIP of the security.' }),
      isin: IsinSchema.exactOptional(),
      payable_date: PayableDateSchema.exactOptional(),
      rate: z
        .string()
        .openapi({ description: 'Cash paid per share, as a decimal string.', examples: ['25.00'] }),
      symbol: z.string().openapi({ description: 'Ticker being redeemed.' }),
    })
    .openapi({ required: ['symbol', 'cusip', 'rate'] }),
)
  .openapi({
    description:
      'Full redemption payload delivered when\n`event_type == redemption_corporateaction_event`. Corresponds to\n`redemptions` on the REST\n[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but\nevery decimal field is emitted as a JSON string to preserve precision on\nthe wire.\n',
  })
  .openapi('CaEventRedemption')

const CaEventReorganizationStockMovementSchema = z
  .strictObject({
    cusip: z.string().openapi({ description: 'Replacement CUSIP.' }),
    isin: IsinSchema.exactOptional(),
    new_rate: z
      .string()
      .openapi({
        description: 'Replacement shares delivered per `source_rate`, as a decimal string.',
        examples: ['1'],
      }),
    source_rate: z
      .string()
      .openapi({
        description: 'Source shares required for each `new_rate`, as a decimal string.',
        examples: ['10'],
      }),
    symbol: z.string().openapi({ description: 'Replacement ticker.' }),
  })
  .openapi({
    description:
      'A single replacement-security leg of a\n[`ca_event_reorganization`](#/components/schemas/ca_event_reorganization)\npayload. All decimal fields are emitted as JSON strings to preserve\nprecision on the wire.\n',
    required: ['symbol', 'cusip', 'new_rate', 'source_rate'],
  })
  .openapi('CaEventReorganizationStockMovement')

const CaEventReorganizationSchema = CaEventBaseSchema.and(
  z
    .object({
      cash_rate: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Cash paid per source share, as a decimal string.',
          examples: ['5.00'],
        }),
      currency: CurrencySchema.exactOptional(),
      cusip: z.string().openapi({ description: 'CUSIP of the original security.' }),
      effective_date: EffectiveDateSchema,
      isin: IsinSchema.exactOptional(),
      payable_date: PayableDateSchema.exactOptional(),
      stock_movements: z
        .array(CaEventReorganizationStockMovementSchema)
        .exactOptional()
        .openapi({ description: 'One entry per replacement security delivered to holders.' }),
      symbol: z.string().openapi({ description: 'Ticker undergoing the reorganization.' }),
    })
    .openapi({ required: ['symbol', 'cusip', 'effective_date'] }),
)
  .openapi({
    description:
      'General-purpose corporate restructuring (e.g. Chapter 11 emergence) where\nexisting holders receive a mix of cash and/or one or more replacement\nsecurities. Each entry in `stock_movements` describes a separate\nshare-class distribution. Delivered when\n`event_type == reorganization_corporateaction_event`. Corresponds to\n`reorganizations` on the REST\n[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but\nevery decimal field is emitted as a JSON string to preserve precision on\nthe wire.\n',
  })
  .openapi('CaEventReorganization')

const CaEventReverseSplitSchema = CaEventBaseSchema.and(
  z
    .object({
      currency: CurrencySchema.exactOptional(),
      ex_date: ExDateSchema,
      new_cusip: z.string().openapi({ description: 'CUSIP after the split.' }),
      new_isin: IsinSchema.exactOptional(),
      new_rate: z
        .string()
        .openapi({ description: 'Shares after the split, as a decimal string.', examples: ['1'] }),
      new_symbol: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Ticker after the split when the issuer also changes symbol (e.g. with\na "D" suffix). Omitted when the ticker doesn\'t change.\n',
        }),
      old_cusip: z.string().openapi({ description: 'CUSIP before the split.' }),
      old_isin: IsinSchema.exactOptional(),
      old_rate: z
        .string()
        .openapi({
          description: 'Shares before the split, as a decimal string.',
          examples: ['10'],
        }),
      payable_date: PayableDateSchema.exactOptional(),
      record_date: RecordDateSchema.exactOptional(),
      symbol: z.string().openapi({ description: 'Ticker being split.' }),
    })
    .openapi({ required: ['symbol', 'old_cusip', 'new_cusip', 'old_rate', 'new_rate', 'ex_date'] }),
)
  .openapi({
    description:
      'Reverse stock split payload delivered when\n`event_type == reverse_split_corporateaction_event`. Corresponds to\n`reverse_splits` on the REST\n[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but\nevery decimal field is emitted as a JSON string to preserve precision on\nthe wire.\n',
  })
  .openapi('CaEventReverseSplit')

const ExpirationDateSchema = z.iso.date().openapi('ExpirationDate')

const CaEventRightsDistributionSchema = CaEventBaseSchema.and(
  z
    .object({
      currency: CurrencySchema.exactOptional(),
      ex_date: ExDateSchema,
      expiration_date: ExpirationDateSchema.exactOptional(),
      new_cusip: z.string().openapi({ description: 'CUSIP of the new right.' }),
      new_isin: IsinSchema.exactOptional(),
      new_symbol: z.string().openapi({ description: 'Ticker of the new right/warrant.' }),
      payable_date: PayableDateSchema,
      rate: z
        .string()
        .openapi({
          description: 'Rights given per share you own, as a decimal string.',
          examples: ['0.25'],
        }),
      record_date: RecordDateSchema.exactOptional(),
      source_cusip: z.string().openapi({ description: 'CUSIP of the underlying ticker.' }),
      source_isin: IsinSchema.exactOptional(),
      source_symbol: z
        .string()
        .openapi({ description: 'Ticker whose holders receive the rights.' }),
    })
    .openapi({
      required: [
        'source_symbol',
        'source_cusip',
        'new_symbol',
        'new_cusip',
        'rate',
        'ex_date',
        'payable_date',
      ],
    }),
)
  .openapi({
    description:
      'Rights distribution payload delivered when\n`event_type == rights_distribution_corporateaction_event`. Corresponds to\n`rights_distributions` on the REST\n[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but\nevery decimal field is emitted as a JSON string to preserve precision on\nthe wire.\n',
  })
  .openapi('CaEventRightsDistribution')

const CaEventSpinOffSchema = CaEventBaseSchema.and(
  z
    .object({
      currency: CurrencySchema.exactOptional(),
      due_bill_redemption_date: DueBillRedemptionDateSchema.exactOptional(),
      ex_date: ExDateSchema,
      new_cusip: z.string().openapi({ description: 'CUSIP of the new spin-off company.' }),
      new_isin: IsinSchema.exactOptional(),
      new_rate: z
        .string()
        .openapi({
          description:
            'New-company shares distributed per `source_rate` parent shares, as a decimal string.',
          examples: ['0.5'],
        }),
      new_symbol: z.string().openapi({ description: 'Ticker of the new spin-off company.' }),
      payable_date: PayableDateSchema.exactOptional(),
      record_date: RecordDateSchema.exactOptional(),
      source_cusip: z.string().openapi({ description: 'Parent CUSIP.' }),
      source_isin: IsinSchema.exactOptional(),
      source_rate: z
        .string()
        .openapi({
          description: 'Parent shares required per ratio unit, as a decimal string.',
          examples: ['1'],
        }),
      source_symbol: z.string().openapi({ description: "Parent company's ticker." }),
    })
    .openapi({
      required: [
        'source_symbol',
        'source_cusip',
        'source_rate',
        'new_symbol',
        'new_cusip',
        'new_rate',
        'ex_date',
      ],
    }),
)
  .openapi({
    description:
      'Spin-off payload delivered when\n`event_type == spin_off_corporateaction_event`. Corresponds to\n`spin_offs` on the REST\n[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but\nevery decimal field is emitted as a JSON string to preserve precision on\nthe wire.\n',
  })
  .openapi('CaEventSpinOff')

const CaEventStockAndCashMergerSchema = CaEventBaseSchema.and(
  z
    .object({
      acquiree_cusip: z.string().openapi({ description: 'CUSIP of the company being bought.' }),
      acquiree_isin: IsinSchema.exactOptional(),
      acquiree_rate: z
        .string()
        .openapi({ description: 'Bought-side ratio, as a decimal string.', examples: ['1'] }),
      acquiree_symbol: z.string().openapi({ description: 'Ticker being bought (will disappear).' }),
      acquirer_cusip: z.string().openapi({ description: "Buyer's CUSIP." }),
      acquirer_isin: IsinSchema.exactOptional(),
      acquirer_rate: z
        .string()
        .openapi({
          description: 'Buyer shares given per unit ratio, as a decimal string.',
          examples: ['0.5'],
        }),
      acquirer_symbol: z
        .string()
        .openapi({ description: "Buyer's ticker (the surviving company)." }),
      cash_rate: z
        .string()
        .openapi({
          description: 'Extra cash paid per share of the acquired company, as a decimal string.',
          examples: ['10.00'],
        }),
      currency: CurrencySchema.exactOptional(),
      effective_date: EffectiveDateSchema,
      payable_date: PayableDateSchema.exactOptional(),
    })
    .openapi({
      required: [
        'acquirer_symbol',
        'acquirer_cusip',
        'acquirer_rate',
        'acquiree_symbol',
        'acquiree_cusip',
        'acquiree_rate',
        'cash_rate',
        'effective_date',
      ],
    }),
)
  .openapi({
    description:
      'Merger paying a mix of stock and cash. Delivered when\n`event_type == stock_and_cash_merger_corporateaction_event`. Corresponds\nto `stock_and_cash_mergers` on the REST\n[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but\nevery decimal field is emitted as a JSON string to preserve precision on\nthe wire.\n',
  })
  .openapi('CaEventStockAndCashMerger')

const CaEventStockDividendSchema = CaEventBaseSchema.and(
  z
    .object({
      currency: CurrencySchema.exactOptional(),
      cusip: z.string().openapi({ description: 'CUSIP of the security.' }),
      ex_date: ExDateSchema,
      isin: IsinSchema.exactOptional(),
      payable_date: PayableDateSchema.exactOptional(),
      rate: z
        .string()
        .openapi({
          description: 'Extra shares received per share held, as a decimal string.',
          examples: ['0.05'],
        }),
      record_date: RecordDateSchema.exactOptional(),
      symbol: z.string().openapi({ description: 'Ticker paying the stock dividend.' }),
    })
    .openapi({ required: ['symbol', 'cusip', 'rate', 'ex_date'] }),
)
  .openapi({
    description:
      'Stock dividend payload delivered when\n`event_type == stock_dividend_corporateaction_event`. Corresponds to\n`stock_dividends` on the REST\n[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but\nevery decimal field is emitted as a JSON string to preserve precision on\nthe wire.\n',
  })
  .openapi('CaEventStockDividend')

const CaEventStockMergerSchema = CaEventBaseSchema.and(
  z
    .object({
      acquiree_cusip: z.string().openapi({ description: 'CUSIP of the company being bought.' }),
      acquiree_isin: IsinSchema.exactOptional(),
      acquiree_rate: z
        .string()
        .openapi({ description: 'Bought-side ratio, as a decimal string.', examples: ['1'] }),
      acquiree_symbol: z.string().openapi({ description: 'Ticker being bought (will disappear).' }),
      acquirer_cusip: z.string().openapi({ description: "Buyer's CUSIP." }),
      acquirer_isin: IsinSchema.exactOptional(),
      acquirer_rate: z
        .string()
        .openapi({ description: 'Buyer-side ratio, as a decimal string.', examples: ['0.75'] }),
      acquirer_symbol: z
        .string()
        .openapi({ description: "Buyer's ticker (the surviving company)." }),
      currency: CurrencySchema.exactOptional(),
      effective_date: EffectiveDateSchema,
      payable_date: PayableDateSchema.exactOptional(),
    })
    .openapi({
      required: [
        'acquirer_symbol',
        'acquirer_cusip',
        'acquirer_rate',
        'acquiree_symbol',
        'acquiree_cusip',
        'acquiree_rate',
        'effective_date',
      ],
    }),
)
  .openapi({
    description:
      'All-stock merger payload delivered when\n`event_type == stock_merger_corporateaction_event`. Corresponds to\n`stock_mergers` on the REST\n[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but\nevery decimal field is emitted as a JSON string to preserve precision on\nthe wire.\n',
  })
  .openapi('CaEventStockMerger')

const CaEventUnitSplitSchema = CaEventBaseSchema.and(
  z
    .object({
      alternate_cusip: z.string().openapi({ description: 'CUSIP of the secondary leg.' }),
      alternate_isin: IsinSchema.exactOptional(),
      alternate_rate: z
        .string()
        .openapi({
          description: 'Secondary-leg shares delivered per unit, as a decimal string.',
          examples: ['1'],
        }),
      alternate_symbol: z
        .string()
        .openapi({ description: 'Ticker of the secondary leg (usually a warrant).' }),
      currency: CurrencySchema.exactOptional(),
      effective_date: EffectiveDateSchema,
      new_cusip: z.string().openapi({ description: 'CUSIP of the primary leg.' }),
      new_isin: IsinSchema.exactOptional(),
      new_rate: z
        .string()
        .openapi({
          description: 'Primary-leg shares delivered per unit, as a decimal string.',
          examples: ['1'],
        }),
      new_symbol: z
        .string()
        .openapi({ description: 'Ticker of the primary leg (usually the common share).' }),
      old_cusip: z.string().openapi({ description: 'CUSIP of the unit.' }),
      old_isin: IsinSchema.exactOptional(),
      old_rate: z
        .string()
        .openapi({ description: 'Units per ratio unit, as a decimal string.', examples: ['1'] }),
      old_symbol: z.string().openapi({ description: 'Ticker of the unit being split.' }),
      payable_date: PayableDateSchema.exactOptional(),
    })
    .openapi({
      required: [
        'old_symbol',
        'old_cusip',
        'old_rate',
        'new_symbol',
        'new_cusip',
        'new_rate',
        'alternate_symbol',
        'alternate_cusip',
        'alternate_rate',
        'effective_date',
      ],
    }),
)
  .openapi({
    description:
      'Unit split payload delivered when\n`event_type == unit_split_corporateaction_event`. Corresponds to\n`unit_splits` on the REST\n[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but\nevery decimal field is emitted as a JSON string to preserve precision on\nthe wire.\n',
  })
  .openapi('CaEventUnitSplit')

const CaEventWorthlessRemovalSchema = CaEventBaseSchema.and(
  z
    .object({
      currency: CurrencySchema.exactOptional(),
      cusip: z.string().openapi({ description: 'CUSIP of the security.' }),
      isin: IsinSchema.exactOptional(),
      symbol: z.string().openapi({ description: 'Ticker being removed.' }),
    })
    .openapi({ required: ['symbol', 'cusip'] }),
)
  .openapi({
    description:
      'Worthless removal payload delivered when\n`event_type == worthless_removal_corporateaction_event`. Corresponds to\n`worthless_removals` on the REST\n[`GET /v1/corporate-actions`](#operation/CorporateActions) response.\n',
  })
  .openapi('CaEventWorthlessRemoval')

const CapitalGainsDistributionSchema = z
  .object({
    currency: CurrencySchema.exactOptional(),
    cusip: z.string(),
    ex_date: ExDateSchema,
    id: CaIdSchema,
    isin: IsinSchema.exactOptional(),
    long_term_rate: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Long-term capital-gain payment per share.' }),
    payable_date: PayableDateSchema.exactOptional(),
    process_date: ProcessDateSchema,
    record_date: RecordDateSchema.exactOptional(),
    short_term_rate: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Short-term capital-gain payment per share.' }),
    symbol: z.string(),
  })
  .openapi({
    description:
      'Capital gains distribution paid by a fund. A single event may carry a long-term\nleg (`long_term_rate`), a short-term leg (`short_term_rate`), or both when\ncombined. At least one of the two rates is always present.\n',
    examples: [
      {
        currency: 'USD',
        cusip: '36261K509',
        ex_date: '2025-12-26',
        id: '98c905a1-08c7-450c-8669-b8e7aee8b44d',
        isin: 'US36261K5090',
        long_term_rate: 0.45855,
        payable_date: '2026-01-09',
        process_date: '2026-01-08',
        record_date: '2025-12-29',
        short_term_rate: 0.11019,
        symbol: 'GCAD',
      },
    ],
    required: ['id', 'symbol', 'cusip', 'process_date', 'ex_date'],
  })
  .openapi('CapitalGainsDistribution')

const CashDividendSchema = z
  .object({
    currency: CurrencySchema.exactOptional(),
    cusip: z.string(),
    due_bill_off_date: z.iso.date().exactOptional(),
    due_bill_on_date: z.iso.date().exactOptional(),
    ex_date: ExDateSchema,
    foreign: z.boolean(),
    id: CaIdSchema,
    isin: IsinSchema.exactOptional(),
    payable_date: PayableDateSchema.exactOptional(),
    process_date: ProcessDateSchema,
    rate: z.float64(),
    record_date: RecordDateSchema.exactOptional(),
    special: z.boolean(),
    sub_type: z
      .enum(['interest', 'return_of_capital'])
      .exactOptional()
      .openapi({ description: 'Sub-type of the cash dividend.' }),
    symbol: z.string(),
  })
  .openapi({
    description: 'Cash dividend.',
    examples: [
      {
        cusip: '319829107',
        ex_date: '2023-05-04',
        foreign: false,
        id: '11cfd108-292e-4cc6-bfbf-5999cdbc4029',
        payable_date: '2023-05-19',
        process_date: '2023-05-19',
        rate: 0.125,
        record_date: '2023-05-05',
        special: false,
        symbol: 'FCF',
      },
    ],
    required: ['id', 'symbol', 'cusip', 'rate', 'special', 'foreign', 'process_date', 'ex_date'],
  })
  .openapi('CashDividend')

const CashMergerSchema = z
  .object({
    acquiree_cusip: z.string(),
    acquiree_isin: IsinSchema.exactOptional(),
    acquiree_symbol: z.string(),
    acquirer_cusip: z.string().exactOptional(),
    acquirer_isin: IsinSchema.exactOptional(),
    acquirer_symbol: z.string().exactOptional(),
    currency: CurrencySchema.exactOptional(),
    effective_date: EffectiveDateSchema,
    id: CaIdSchema,
    payable_date: PayableDateSchema.exactOptional(),
    process_date: ProcessDateSchema,
    rate: z.float64(),
  })
  .openapi({
    description: 'Cash merger.',
    examples: [
      {
        acquiree_cusip: 'Y2687W108',
        acquiree_symbol: 'GLOP',
        effective_date: '2023-07-17',
        id: '3772bbd7-4ad5-44d4-9cc0-f69156a2f8f5',
        payable_date: '2023-07-17',
        process_date: '2023-07-17',
        rate: 5.37,
      },
    ],
    required: ['id', 'acquiree_symbol', 'acquiree_cusip', 'rate', 'process_date', 'effective_date'],
  })
  .openapi('CashMerger')

const CorporateActionEventActionSchema = z
  .enum(['insert', 'update', 'delete'])
  .openapi({
    description:
      'Kind of mutation that produced this event on the upstream corporate actions\nstore:\n\n- `insert`: a new corporate action was created.\n- `update`: an existing corporate action was modified (e.g. a date or rate\n  correction). `ca.id` matches the original event.\n- `delete`: a previously published corporate action was removed. `ca.id`\n  matches the original event; subsequent events for the same id (if any)\n  will be new inserts.\n',
  })
  .openapi('CorporateActionEventAction')

const EventIdSchema = z
  .ulid()
  .regex(/^[0-7][0-9A-HJKMNP-TV-Z]{25}$/)
  .openapi({
    description:
      'Lexically sortable, monotonically increasing 26-character\n[ULID](https://github.com/ulid/spec) (Crockford Base32, uppercase) that\nidentifies a single SSE emission. Unique per message -- an `update` or\n`delete` for the same underlying corporate action carries a fresh\n`event_id`. Because ULIDs sort in emission order, they can be used as\nresume cursors via `since_id`, `until_id`, or the standard `Last-Event-Id`\nreconnect header.\n',
    examples: ['01J9RPMV5TKB8WX3M4F1KZ7QH2'],
  })
  .openapi('EventId')

const CorporateActionEventRegionSchema = z
  .enum(['us', 'non_us'])
  .openapi({
    description:
      'Envelope-level classification derived from `metadata.global` on the upstream\ncorporate-action record. This is the only field the SSE `region` filter\ninspects on each event.\n\n- `us`: US-listed / US-regulated corporate action.\n- `non_us`: everything else.\n',
  })
  .openapi('CorporateActionEventRegion')

const CorporateActionEventBaseSchema = z
  .object({
    action: CorporateActionEventActionSchema,
    at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'RFC-3339 timestamp when the streaming service emitted this event.',
        examples: ['2026-03-20T12:24:58.807230Z'],
      }),
    event_id: EventIdSchema,
    region: CorporateActionEventRegionSchema,
  })
  .openapi({
    description:
      "Common envelope fields shared by every variant of\n[`corporate_action_event`](#/components/schemas/corporate_action_event).\nThis schema is not meant to be used directly by clients -- it exists so each\nper-`event_type` `oneOf` branch can `allOf`-compose the envelope basics\n(`event_id`, `at`, `action`, `region`) alongside its narrowed `event_type` /\n`ca` pair. Keeping these in one place is what makes the envelope's\n`discriminator` play nicely with strict OpenAPI validators.\n",
    required: ['event_id', 'at', 'action', 'region'],
  })
  .openapi('CorporateActionEventBase')

const CorporateActionEventCapitalGainsDistributionSchema = CorporateActionEventBaseSchema.and(
  z
    .object({
      ca: CaEventCapitalGainsDistributionSchema,
      event_type: z.literal('capital_gains_distribution_corporateaction_event'),
    })
    .openapi({ required: ['event_type', 'ca'] }),
)
  .openapi({
    description:
      '`corporate_action_event` envelope specialized to `event_type ==\ncapital_gains_distribution_corporateaction_event`. Emitted through\n[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).\n',
  })
  .openapi('CorporateActionEventCapitalGainsDistribution')

const CorporateActionEventCashDividendSchema = CorporateActionEventBaseSchema.and(
  z
    .object({
      ca: CaEventCashDividendSchema,
      event_type: z.literal('cash_dividend_corporateaction_event'),
    })
    .openapi({ required: ['event_type', 'ca'] }),
)
  .openapi({
    description:
      '`corporate_action_event` envelope specialized to `event_type ==\ncash_dividend_corporateaction_event`. Emitted through\n[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).\n',
  })
  .openapi('CorporateActionEventCashDividend')

const CorporateActionEventCashMergerSchema = CorporateActionEventBaseSchema.and(
  z
    .object({
      ca: CaEventCashMergerSchema,
      event_type: z.literal('cash_merger_corporateaction_event'),
    })
    .openapi({ required: ['event_type', 'ca'] }),
)
  .openapi({
    description:
      '`corporate_action_event` envelope specialized to `event_type ==\ncash_merger_corporateaction_event`. Emitted through\n[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).\n',
  })
  .openapi('CorporateActionEventCashMerger')

const CorporateActionEventEquityPartialCallSchema = CorporateActionEventBaseSchema.and(
  z
    .object({
      ca: CaEventEquityPartialCallSchema,
      event_type: z.literal('equity_partial_call_corporateaction_event'),
    })
    .openapi({ required: ['event_type', 'ca'] }),
)
  .openapi({
    description:
      '`corporate_action_event` envelope specialized to `event_type ==\nequity_partial_call_corporateaction_event`. Emitted through\n[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).\n',
  })
  .openapi('CorporateActionEventEquityPartialCall')

const CorporateActionEventForwardSplitSchema = CorporateActionEventBaseSchema.and(
  z
    .object({
      ca: CaEventForwardSplitSchema,
      event_type: z.literal('forward_split_corporateaction_event'),
    })
    .openapi({ required: ['event_type', 'ca'] }),
)
  .openapi({
    description:
      '`corporate_action_event` envelope specialized to `event_type ==\nforward_split_corporateaction_event`. Emitted through\n[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).\n',
  })
  .openapi('CorporateActionEventForwardSplit')

const CorporateActionEventNameChangeSchema = CorporateActionEventBaseSchema.and(
  z
    .object({
      ca: CaEventNameChangeSchema,
      event_type: z.literal('name_change_corporateaction_event'),
    })
    .openapi({ required: ['event_type', 'ca'] }),
)
  .openapi({
    description:
      '`corporate_action_event` envelope specialized to `event_type ==\nname_change_corporateaction_event`. Emitted through\n[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).\n',
  })
  .openapi('CorporateActionEventNameChange')

const CorporateActionEventRedemptionSchema = CorporateActionEventBaseSchema.and(
  z
    .object({
      ca: CaEventRedemptionSchema,
      event_type: z.literal('redemption_corporateaction_event'),
    })
    .openapi({ required: ['event_type', 'ca'] }),
)
  .openapi({
    description:
      '`corporate_action_event` envelope specialized to `event_type ==\nredemption_corporateaction_event`. Emitted through\n[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).\n',
  })
  .openapi('CorporateActionEventRedemption')

const CorporateActionEventReorganizationSchema = CorporateActionEventBaseSchema.and(
  z
    .object({
      ca: CaEventReorganizationSchema,
      event_type: z.literal('reorganization_corporateaction_event'),
    })
    .openapi({ required: ['event_type', 'ca'] }),
)
  .openapi({
    description:
      '`corporate_action_event` envelope specialized to `event_type ==\nreorganization_corporateaction_event`. Emitted through\n[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).\n',
  })
  .openapi('CorporateActionEventReorganization')

const CorporateActionEventReverseSplitSchema = CorporateActionEventBaseSchema.and(
  z
    .object({
      ca: CaEventReverseSplitSchema,
      event_type: z.literal('reverse_split_corporateaction_event'),
    })
    .openapi({ required: ['event_type', 'ca'] }),
)
  .openapi({
    description:
      '`corporate_action_event` envelope specialized to `event_type ==\nreverse_split_corporateaction_event`. Emitted through\n[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).\n',
  })
  .openapi('CorporateActionEventReverseSplit')

const CorporateActionEventRightsDistributionSchema = CorporateActionEventBaseSchema.and(
  z
    .object({
      ca: CaEventRightsDistributionSchema,
      event_type: z.literal('rights_distribution_corporateaction_event'),
    })
    .openapi({ required: ['event_type', 'ca'] }),
)
  .openapi({
    description:
      '`corporate_action_event` envelope specialized to `event_type ==\nrights_distribution_corporateaction_event`. Emitted through\n[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).\n',
  })
  .openapi('CorporateActionEventRightsDistribution')

const CorporateActionEventSpinOffSchema = CorporateActionEventBaseSchema.and(
  z
    .object({ ca: CaEventSpinOffSchema, event_type: z.literal('spin_off_corporateaction_event') })
    .openapi({ required: ['event_type', 'ca'] }),
)
  .openapi({
    description:
      '`corporate_action_event` envelope specialized to `event_type ==\nspin_off_corporateaction_event`. Emitted through\n[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).\n',
  })
  .openapi('CorporateActionEventSpinOff')

const CorporateActionEventStockAndCashMergerSchema = CorporateActionEventBaseSchema.and(
  z
    .object({
      ca: CaEventStockAndCashMergerSchema,
      event_type: z.literal('stock_and_cash_merger_corporateaction_event'),
    })
    .openapi({ required: ['event_type', 'ca'] }),
)
  .openapi({
    description:
      '`corporate_action_event` envelope specialized to `event_type ==\nstock_and_cash_merger_corporateaction_event`. Emitted through\n[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).\n',
  })
  .openapi('CorporateActionEventStockAndCashMerger')

const CorporateActionEventStockDividendSchema = CorporateActionEventBaseSchema.and(
  z
    .object({
      ca: CaEventStockDividendSchema,
      event_type: z.literal('stock_dividend_corporateaction_event'),
    })
    .openapi({ required: ['event_type', 'ca'] }),
)
  .openapi({
    description:
      '`corporate_action_event` envelope specialized to `event_type ==\nstock_dividend_corporateaction_event`. Emitted through\n[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).\n',
  })
  .openapi('CorporateActionEventStockDividend')

const CorporateActionEventStockMergerSchema = CorporateActionEventBaseSchema.and(
  z
    .object({
      ca: CaEventStockMergerSchema,
      event_type: z.literal('stock_merger_corporateaction_event'),
    })
    .openapi({ required: ['event_type', 'ca'] }),
)
  .openapi({
    description:
      '`corporate_action_event` envelope specialized to `event_type ==\nstock_merger_corporateaction_event`. Emitted through\n[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).\n',
  })
  .openapi('CorporateActionEventStockMerger')

const CorporateActionEventUnitSplitSchema = CorporateActionEventBaseSchema.and(
  z
    .object({
      ca: CaEventUnitSplitSchema,
      event_type: z.literal('unit_split_corporateaction_event'),
    })
    .openapi({ required: ['event_type', 'ca'] }),
)
  .openapi({
    description:
      '`corporate_action_event` envelope specialized to `event_type ==\nunit_split_corporateaction_event`. Emitted through\n[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).\n',
  })
  .openapi('CorporateActionEventUnitSplit')

const CorporateActionEventWorthlessRemovalSchema = CorporateActionEventBaseSchema.and(
  z
    .object({
      ca: CaEventWorthlessRemovalSchema,
      event_type: z.literal('worthless_removal_corporateaction_event'),
    })
    .openapi({ required: ['event_type', 'ca'] }),
)
  .openapi({
    description:
      '`corporate_action_event` envelope specialized to `event_type ==\nworthless_removal_corporateaction_event`. Emitted through\n[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).\n',
  })
  .openapi('CorporateActionEventWorthlessRemoval')

const CorporateActionEventSchema = z
  .xor([
    CorporateActionEventCapitalGainsDistributionSchema,
    CorporateActionEventCashDividendSchema,
    CorporateActionEventCashMergerSchema,
    CorporateActionEventEquityPartialCallSchema,
    CorporateActionEventForwardSplitSchema,
    CorporateActionEventNameChangeSchema,
    CorporateActionEventRedemptionSchema,
    CorporateActionEventReorganizationSchema,
    CorporateActionEventReverseSplitSchema,
    CorporateActionEventRightsDistributionSchema,
    CorporateActionEventSpinOffSchema,
    CorporateActionEventStockAndCashMergerSchema,
    CorporateActionEventStockDividendSchema,
    CorporateActionEventStockMergerSchema,
    CorporateActionEventUnitSplitSchema,
    CorporateActionEventWorthlessRemovalSchema,
  ])
  .openapi({
    description:
      'A single corporate-action mutation delivered over the\n[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).\n\nEvery event uses the same envelope. The `event_type` field selects which of\nthe 15 per-type schemas populates `ca`; see\n[`corporate_action_event_type`](#/components/schemas/corporate_action_event_type)\nfor the full mapping and follow the link on each row to the per-type `ca`\npayload schema.\n\nOptional fields (including `currency` and, on most CA types, `isin`) are\nomitted from the JSON when empty; `null` is never emitted.\n',
    discriminator: {
      mapping: {
        capital_gains_distribution_corporateaction_event:
          '#/components/schemas/corporate_action_event_capital_gains_distribution',
        cash_dividend_corporateaction_event:
          '#/components/schemas/corporate_action_event_cash_dividend',
        cash_merger_corporateaction_event:
          '#/components/schemas/corporate_action_event_cash_merger',
        equity_partial_call_corporateaction_event:
          '#/components/schemas/corporate_action_event_equity_partial_call',
        forward_split_corporateaction_event:
          '#/components/schemas/corporate_action_event_forward_split',
        name_change_corporateaction_event:
          '#/components/schemas/corporate_action_event_name_change',
        redemption_corporateaction_event: '#/components/schemas/corporate_action_event_redemption',
        reorganization_corporateaction_event:
          '#/components/schemas/corporate_action_event_reorganization',
        reverse_split_corporateaction_event:
          '#/components/schemas/corporate_action_event_reverse_split',
        rights_distribution_corporateaction_event:
          '#/components/schemas/corporate_action_event_rights_distribution',
        spin_off_corporateaction_event: '#/components/schemas/corporate_action_event_spin_off',
        stock_and_cash_merger_corporateaction_event:
          '#/components/schemas/corporate_action_event_stock_and_cash_merger',
        stock_dividend_corporateaction_event:
          '#/components/schemas/corporate_action_event_stock_dividend',
        stock_merger_corporateaction_event:
          '#/components/schemas/corporate_action_event_stock_merger',
        unit_split_corporateaction_event: '#/components/schemas/corporate_action_event_unit_split',
        worthless_removal_corporateaction_event:
          '#/components/schemas/corporate_action_event_worthless_removal',
      },
      propertyName: 'event_type',
    },
  })
  .openapi('CorporateActionEvent')

const CorporateActionEventTypeSchema = z
  .enum([
    'capital_gains_distribution_corporateaction_event',
    'cash_dividend_corporateaction_event',
    'cash_merger_corporateaction_event',
    'equity_partial_call_corporateaction_event',
    'forward_split_corporateaction_event',
    'name_change_corporateaction_event',
    'redemption_corporateaction_event',
    'reorganization_corporateaction_event',
    'reverse_split_corporateaction_event',
    'rights_distribution_corporateaction_event',
    'spin_off_corporateaction_event',
    'stock_and_cash_merger_corporateaction_event',
    'stock_dividend_corporateaction_event',
    'stock_merger_corporateaction_event',
    'unit_split_corporateaction_event',
    'worthless_removal_corporateaction_event',
  ])
  .openapi({
    description:
      'Discriminator that determines the shape of the `ca` field on a\n[`corporate_action_event`](#/components/schemas/corporate_action_event).\n\nEach value corresponds to a per-type payload schema:\n\n| `event_type` | `ca` schema |\n| --- | --- |\n| `capital_gains_distribution_corporateaction_event` | [`ca_event_capital_gains_distribution`](#/components/schemas/ca_event_capital_gains_distribution) |\n| `cash_dividend_corporateaction_event` | [`ca_event_cash_dividend`](#/components/schemas/ca_event_cash_dividend) |\n| `cash_merger_corporateaction_event` | [`ca_event_cash_merger`](#/components/schemas/ca_event_cash_merger) |\n| `equity_partial_call_corporateaction_event` | [`ca_event_equity_partial_call`](#/components/schemas/ca_event_equity_partial_call) |\n| `forward_split_corporateaction_event` | [`ca_event_forward_split`](#/components/schemas/ca_event_forward_split) |\n| `name_change_corporateaction_event` | [`ca_event_name_change`](#/components/schemas/ca_event_name_change) |\n| `redemption_corporateaction_event` | [`ca_event_redemption`](#/components/schemas/ca_event_redemption) |\n| `reorganization_corporateaction_event` | [`ca_event_reorganization`](#/components/schemas/ca_event_reorganization) |\n| `reverse_split_corporateaction_event` | [`ca_event_reverse_split`](#/components/schemas/ca_event_reverse_split) |\n| `rights_distribution_corporateaction_event` | [`ca_event_rights_distribution`](#/components/schemas/ca_event_rights_distribution) |\n| `spin_off_corporateaction_event` | [`ca_event_spin_off`](#/components/schemas/ca_event_spin_off) |\n| `stock_and_cash_merger_corporateaction_event` | [`ca_event_stock_and_cash_merger`](#/components/schemas/ca_event_stock_and_cash_merger) |\n| `stock_dividend_corporateaction_event` | [`ca_event_stock_dividend`](#/components/schemas/ca_event_stock_dividend) |\n| `stock_merger_corporateaction_event` | [`ca_event_stock_merger`](#/components/schemas/ca_event_stock_merger) |\n| `unit_split_corporateaction_event` | [`ca_event_unit_split`](#/components/schemas/ca_event_unit_split) |\n| `worthless_removal_corporateaction_event` | [`ca_event_worthless_removal`](#/components/schemas/ca_event_worthless_removal) |\n',
  })
  .openapi('CorporateActionEventType')

const ForwardSplitSchema = z
  .object({
    currency: CurrencySchema.exactOptional(),
    cusip: z.string(),
    due_bill_redemption_date: DueBillRedemptionDateSchema.exactOptional(),
    ex_date: ExDateSchema,
    id: CaIdSchema,
    isin: IsinSchema.exactOptional(),
    new_rate: z.float64(),
    old_rate: z.float64(),
    payable_date: PayableDateSchema.exactOptional(),
    process_date: ProcessDateSchema,
    record_date: RecordDateSchema.exactOptional(),
    symbol: z.string(),
  })
  .openapi({
    description: 'Forward split.',
    examples: [
      {
        cusip: '816851109',
        due_bill_redemption_date: '2023-08-23',
        ex_date: '2023-08-22',
        id: '189bd849-ab9f-4b4d-aaaa-a6d415fd976d',
        new_rate: 2,
        old_rate: 1,
        payable_date: '2023-08-21',
        process_date: '2023-08-22',
        record_date: '2023-08-14',
        symbol: 'SRE',
      },
    ],
    required: ['id', 'symbol', 'cusip', 'new_rate', 'old_rate', 'process_date', 'ex_date'],
  })
  .openapi('ForwardSplit')

const NameChangeSchema = z
  .object({
    currency: CurrencySchema.exactOptional(),
    id: CaIdSchema,
    new_cusip: z.string(),
    new_isin: IsinSchema.exactOptional(),
    new_symbol: z.string(),
    old_cusip: z.string(),
    old_isin: IsinSchema.exactOptional(),
    old_symbol: z.string(),
    process_date: ProcessDateSchema,
  })
  .openapi({
    description: 'Name change.',
    examples: [
      {
        id: '5a774c35-edec-4532-a812-a56d0bbb623a',
        new_cusip: 'Y9390M103',
        new_symbol: 'VFS',
        old_cusip: 'G11537100',
        old_symbol: 'BSAQ',
        process_date: '2023-08-15',
      },
    ],
    required: ['id', 'old_symbol', 'old_cusip', 'new_symbol', 'new_cusip', 'process_date'],
  })
  .openapi('NameChange')

const PartialCallSchema = z
  .object({
    currency: CurrencySchema.exactOptional(),
    cusip: z.string().exactOptional(),
    dividend_rate: z.float64().exactOptional(),
    id: CaIdSchema,
    isin: IsinSchema.exactOptional(),
    lottery_date: z.iso.date().exactOptional(),
    lottery_type: z
      .enum(['original', 'supplemental'])
      .exactOptional()
      .openapi({ description: 'The type of lottery for the partial call.' }),
    payable_date: PayableDateSchema.exactOptional(),
    price: z.float64().exactOptional(),
    process_date: ProcessDateSchema,
    record_date: RecordDateSchema.exactOptional(),
    results_publication_date: z.iso.date().exactOptional(),
    symbol: z.string(),
  })
  .openapi({ description: 'Partial call.', required: ['id', 'symbol', 'process_date'] })
  .openapi('PartialCall')

const RedemptionSchema = z
  .object({
    currency: CurrencySchema.exactOptional(),
    cusip: z.string(),
    id: CaIdSchema,
    isin: IsinSchema.exactOptional(),
    payable_date: PayableDateSchema.exactOptional(),
    process_date: ProcessDateSchema,
    rate: z.float64(),
    symbol: z.string(),
  })
  .openapi({
    description: 'Redemption.',
    examples: [
      {
        cusip: '687305102',
        id: '395da031-0e57-4918-a6fb-64a7c713aca4',
        payable_date: '2023-06-13',
        process_date: '2023-06-13',
        rate: 0.141134,
        symbol: 'ORPHY',
      },
    ],
    required: ['id', 'symbol', 'cusip', 'rate', 'process_date'],
  })
  .openapi('Redemption')

const ReorganizationStockMovementSchema = z
  .object({
    cusip: z.string(),
    isin: z.string().exactOptional(),
    new_rate: z.float64(),
    source_rate: z.float64(),
    symbol: z.string(),
  })
  .openapi({
    description: 'A stock allocation leg in a reorganization.',
    required: ['symbol', 'cusip', 'new_rate', 'source_rate'],
  })
  .openapi('ReorganizationStockMovement')

const ReorganizationSchema = z
  .object({
    cash_rate: z.float64().exactOptional(),
    currency: CurrencySchema.exactOptional(),
    cusip: z.string(),
    effective_date: EffectiveDateSchema,
    id: CaIdSchema,
    isin: z.string().exactOptional(),
    payable_date: PayableDateSchema.exactOptional(),
    process_date: ProcessDateSchema,
    stock_movements: z.array(ReorganizationStockMovementSchema).exactOptional(),
    symbol: z.string(),
  })
  .openapi({
    description: 'Reorganization (cash and/or multiple stock allocations).',
    required: ['id', 'symbol', 'cusip', 'process_date', 'effective_date'],
  })
  .openapi('Reorganization')

const ReverseSplitSchema = z
  .object({
    currency: CurrencySchema.exactOptional(),
    ex_date: ExDateSchema,
    id: CaIdSchema,
    new_cusip: z.string(),
    new_isin: IsinSchema.exactOptional(),
    new_rate: z.float64(),
    new_symbol: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The post-split ticker. Empty when the reverse split does not change the\nticker (the most common case); only populated when the issuer assigns a\ndifferent symbol after the split.\n',
      }),
    old_cusip: z.string(),
    old_isin: IsinSchema.exactOptional(),
    old_rate: z.float64(),
    payable_date: PayableDateSchema.exactOptional(),
    process_date: ProcessDateSchema,
    record_date: RecordDateSchema.exactOptional(),
    symbol: z.string(),
  })
  .openapi({
    description: 'Reverse split.',
    examples: [
      {
        ex_date: '2023-08-24',
        id: '913de862-c02c-46dc-a89c-fc8779a50d30',
        new_cusip: '60879E200',
        new_rate: 1,
        old_cusip: '60879E101',
        old_rate: 50,
        process_date: '2023-08-24',
        record_date: '2023-08-24',
        symbol: 'MNTS',
      },
    ],
    required: [
      'id',
      'symbol',
      'old_cusip',
      'new_cusip',
      'new_rate',
      'old_rate',
      'process_date',
      'ex_date',
    ],
  })
  .openapi('ReverseSplit')

const RightsDistributionSchema = z
  .object({
    currency: CurrencySchema.exactOptional(),
    ex_date: ExDateSchema,
    expiration_date: ExpirationDateSchema.exactOptional(),
    id: CaIdSchema,
    new_cusip: z.string(),
    new_isin: IsinSchema.exactOptional(),
    new_symbol: z.string(),
    payable_date: PayableDateSchema,
    process_date: ProcessDateSchema,
    rate: z.float64(),
    record_date: RecordDateSchema.exactOptional(),
    source_cusip: z.string(),
    source_isin: IsinSchema.exactOptional(),
    source_symbol: z.string(),
  })
  .openapi({
    description: 'Rights distribution.',
    examples: [
      {
        ex_date: '2024-04-17',
        expiration_date: '2024-05-14',
        id: '69794cfd-0adc-4e11-9211-9210a9cf8932',
        new_cusip: '454089111',
        new_symbol: 'IFN.RTWI',
        payable_date: '2024-04-19',
        process_date: '2024-04-19',
        rate: 1,
        record_date: '2024-04-18',
        source_cusip: '454089103',
        source_symbol: 'IFN',
      },
    ],
    required: [
      'id',
      'source_symbol',
      'source_cusip',
      'new_symbol',
      'new_cusip',
      'rate',
      'process_date',
      'ex_date',
      'payable_date',
    ],
  })
  .openapi('RightsDistribution')

const SpinOffSchema = z
  .object({
    currency: CurrencySchema.exactOptional(),
    due_bill_redemption_date: DueBillRedemptionDateSchema.exactOptional(),
    ex_date: ExDateSchema,
    id: CaIdSchema,
    new_cusip: z.string(),
    new_isin: IsinSchema.exactOptional(),
    new_rate: z.float64(),
    new_symbol: z.string(),
    payable_date: PayableDateSchema.exactOptional(),
    process_date: ProcessDateSchema,
    record_date: RecordDateSchema.exactOptional(),
    source_cusip: z.string(),
    source_isin: IsinSchema.exactOptional(),
    source_rate: z.float64(),
    source_symbol: z.string(),
  })
  .openapi({
    description: 'Spin-off.',
    examples: [
      {
        ex_date: '2023-08-15',
        id: '82e602f6-35bc-4651-a5dd-f6d88ff37c55',
        new_cusip: '85237B101',
        new_rate: 1,
        new_symbol: 'SRM',
        process_date: '2023-08-15',
        record_date: '2023-08-15',
        source_cusip: '48208F105',
        source_rate: 19.35,
        source_symbol: 'JUPW',
      },
    ],
    required: [
      'id',
      'source_symbol',
      'source_cusip',
      'source_rate',
      'new_symbol',
      'new_cusip',
      'new_rate',
      'process_date',
      'ex_date',
    ],
  })
  .openapi('SpinOff')

const StockAndCashMergerSchema = z
  .object({
    acquiree_cusip: z.string(),
    acquiree_isin: IsinSchema.exactOptional(),
    acquiree_rate: z.float64(),
    acquiree_symbol: z.string(),
    acquirer_cusip: z.string(),
    acquirer_isin: IsinSchema.exactOptional(),
    acquirer_rate: z.float64(),
    acquirer_symbol: z.string(),
    cash_rate: z.float64(),
    currency: CurrencySchema.exactOptional(),
    effective_date: EffectiveDateSchema,
    id: CaIdSchema,
    payable_date: PayableDateSchema.exactOptional(),
    process_date: ProcessDateSchema,
  })
  .openapi({
    description: 'Stock and cash merger.',
    examples: [
      {
        acquiree_cusip: '561409103',
        acquiree_rate: 1,
        acquiree_symbol: 'MLVF',
        acquirer_cusip: '31931U102',
        acquirer_rate: 0.7733,
        acquirer_symbol: 'FRBA',
        cash_rate: 7.8,
        effective_date: '2023-07-18',
        id: 'e5248356-2c06-42cf-aeb9-1595bd616cdb',
        payable_date: '2023-07-18',
        process_date: '2023-07-18',
      },
    ],
    required: [
      'id',
      'acquirer_symbol',
      'acquirer_cusip',
      'acquirer_rate',
      'acquiree_symbol',
      'acquiree_cusip',
      'acquiree_rate',
      'cash_rate',
      'process_date',
      'effective_date',
    ],
  })
  .openapi('StockAndCashMerger')

const StockDividendSchema = z
  .object({
    currency: CurrencySchema.exactOptional(),
    cusip: z.string(),
    ex_date: ExDateSchema,
    id: CaIdSchema,
    isin: IsinSchema.exactOptional(),
    payable_date: PayableDateSchema.exactOptional(),
    process_date: ProcessDateSchema,
    rate: z.float64(),
    record_date: RecordDateSchema.exactOptional(),
    symbol: z.string(),
  })
  .openapi({
    description: 'Stock dividend.',
    examples: [
      {
        cusip: '605015106',
        ex_date: '2023-05-19',
        id: '3ae94c30-2d37-473a-bf29-5f7b4ab6d3ca',
        payable_date: '2023-05-05',
        process_date: '2023-05-19',
        rate: 0.05,
        record_date: '2023-05-22',
        symbol: 'MSBC',
      },
    ],
    required: ['id', 'symbol', 'cusip', 'rate', 'process_date', 'ex_date'],
  })
  .openapi('StockDividend')

const StockMergerSchema = z
  .object({
    acquiree_cusip: z.string(),
    acquiree_isin: IsinSchema.exactOptional(),
    acquiree_rate: z.float64(),
    acquiree_symbol: z.string(),
    acquirer_cusip: z.string(),
    acquirer_isin: IsinSchema.exactOptional(),
    acquirer_rate: z.float64(),
    acquirer_symbol: z.string(),
    currency: CurrencySchema.exactOptional(),
    effective_date: EffectiveDateSchema,
    id: CaIdSchema,
    payable_date: PayableDateSchema.exactOptional(),
    process_date: ProcessDateSchema,
  })
  .openapi({
    description: 'Stock merger.',
    examples: [
      {
        acquiree_cusip: '53223X107',
        acquiree_rate: 1,
        acquiree_symbol: 'LSI',
        acquirer_cusip: '30225T102',
        acquirer_rate: 0.895,
        acquirer_symbol: 'EXR',
        effective_date: '2023-07-20',
        id: '728f8cb2-a00e-4bc7-ad14-d15fe82bbcff',
        payable_date: '2023-07-20',
        process_date: '2023-07-20',
      },
    ],
    required: [
      'id',
      'acquirer_symbol',
      'acquirer_cusip',
      'acquirer_rate',
      'acquiree_symbol',
      'acquiree_cusip',
      'acquiree_rate',
      'process_date',
      'effective_date',
    ],
  })
  .openapi('StockMerger')

const UnitSplitSchema = z
  .object({
    alternate_cusip: z.string(),
    alternate_isin: IsinSchema.exactOptional(),
    alternate_rate: z.float64(),
    alternate_symbol: z.string(),
    currency: CurrencySchema.exactOptional(),
    effective_date: EffectiveDateSchema,
    id: CaIdSchema,
    new_cusip: z.string(),
    new_isin: IsinSchema.exactOptional(),
    new_rate: z.float64(),
    new_symbol: z.string(),
    old_cusip: z.string(),
    old_isin: IsinSchema.exactOptional(),
    old_rate: z.float64(),
    old_symbol: z.string(),
    payable_date: PayableDateSchema.exactOptional(),
    process_date: ProcessDateSchema,
  })
  .openapi({
    description: 'Unit split.',
    examples: [
      {
        alternate_cusip: 'G5391L110',
        alternate_rate: 0.3333,
        alternate_symbol: 'LVROW',
        effective_date: '2023-03-01',
        id: '3e68e87e-ae95-4d68-91d1-715d52ef143a',
        new_cusip: 'G5391L102',
        new_rate: 1,
        new_symbol: 'LVRO',
        old_cusip: 'G8990L119',
        old_rate: 1,
        old_symbol: 'TPBAU',
        process_date: '2023-03-01',
      },
    ],
    required: [
      'id',
      'old_symbol',
      'old_cusip',
      'old_rate',
      'new_symbol',
      'new_cusip',
      'new_rate',
      'alternate_symbol',
      'alternate_cusip',
      'alternate_rate',
      'process_date',
      'effective_date',
    ],
  })
  .openapi('UnitSplit')

const WorthlessRemovalSchema = z
  .object({
    currency: CurrencySchema.exactOptional(),
    cusip: z.string(),
    id: CaIdSchema,
    isin: IsinSchema.exactOptional(),
    process_date: ProcessDateSchema,
    symbol: z.string(),
  })
  .openapi({
    description: 'Worthless removal.',
    examples: [
      {
        cusip: '078771300',
        id: '106c2149-ee04-4d2e-a943-98dbb4d21a3c',
        process_date: '2024-12-19',
        symbol: 'BLPH',
      },
    ],
    required: ['id', 'symbol', 'cusip', 'process_date'],
  })
  .openapi('WorthlessRemoval')

const CorporateActionsSchema = z
  .object({
    capital_gains_distributions: z.array(CapitalGainsDistributionSchema).exactOptional(),
    cash_dividends: z.array(CashDividendSchema).exactOptional(),
    cash_mergers: z.array(CashMergerSchema).exactOptional(),
    forward_splits: z.array(ForwardSplitSchema).exactOptional(),
    name_changes: z.array(NameChangeSchema).exactOptional(),
    partial_calls: z.array(PartialCallSchema).exactOptional(),
    redemptions: z.array(RedemptionSchema).exactOptional(),
    reorganizations: z.array(ReorganizationSchema).exactOptional(),
    reverse_splits: z.array(ReverseSplitSchema).exactOptional(),
    rights_distributions: z.array(RightsDistributionSchema).exactOptional(),
    spin_offs: z.array(SpinOffSchema).exactOptional(),
    stock_and_cash_mergers: z.array(StockAndCashMergerSchema).exactOptional(),
    stock_dividends: z.array(StockDividendSchema).exactOptional(),
    stock_mergers: z.array(StockMergerSchema).exactOptional(),
    unit_splits: z.array(UnitSplitSchema).exactOptional(),
    worthless_removals: z.array(WorthlessRemovalSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CorporateActions')

const NextPageTokenSchema = z
  .string()
  .nullable()
  .openapi({ description: 'Pagination token for the next page.' })
  .openapi('NextPageToken')

const CorporateActionsRespSchema = z
  .object({ corporate_actions: CorporateActionsSchema, next_page_token: NextPageTokenSchema })
  .openapi({ required: ['corporate_actions', 'next_page_token'] })
  .openapi('CorporateActionsResp')

const TimestampSchema = z.iso
  .datetime({ offset: true })
  .openapi({ description: 'Timestamp in RFC-3339 format with nanosecond precision.' })
  .openapi('Timestamp')

const CryptoBarSchema = z
  .object({
    c: z.float64().openapi({ description: 'Closing price.' }),
    h: z.float64().openapi({ description: 'High price.' }),
    l: z.float64().openapi({ description: 'Low price.' }),
    n: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Trade count in the bar.' }),
    o: z.float64().openapi({ description: 'Opening price.' }),
    t: TimestampSchema,
    v: z.float64().openapi({ description: 'Bar volume.' }),
    vw: z.float64().openapi({ description: 'Volume weighted average price.' }),
  })
  .openapi({
    description: 'OHLC aggregate of all the trades in a given interval.',
    examples: [
      {
        c: 29003,
        h: 29003,
        l: 28999,
        n: 4,
        o: 28999,
        t: '2022-05-27T10:18:00Z',
        v: 0.01,
        vw: 29001,
      },
    ],
    required: ['t', 'o', 'h', 'l', 'c', 'v', 'n', 'vw'],
  })
  .openapi('CryptoBar')

const CryptoBarsRespSchema = z
  .object({
    bars: z.record(z.string(), z.array(CryptoBarSchema)),
    next_page_token: NextPageTokenSchema,
  })
  .openapi({ required: ['bars', 'next_page_token'] })
  .openapi('CryptoBarsResp')

const CryptoHistoricalLocSchema = z
  .enum(['us', 'us-1', 'us-2', 'eu-1', 'bs-1'])
  .openapi({ description: 'Crypto location from where the historical market data is retrieved.' })
  .openapi('CryptoHistoricalLoc')

const CryptoLatestBarsRespSchema = z
  .object({ bars: z.record(z.string(), CryptoBarSchema) })
  .openapi({ required: ['bars'] })
  .openapi('CryptoLatestBarsResp')

const CryptoLatestLocSchema = z
  .enum(['us', 'us-1', 'us-2', 'eu-1', 'bs-1'])
  .openapi({ description: 'Crypto location from where the latest market data is retrieved.' })
  .openapi('CryptoLatestLoc')

const CryptoOrderbookEntrySchema = z
  .object({
    p: z.float64().openapi({ description: 'Price.' }),
    s: z.float64().openapi({ description: 'Size.' }),
  })
  .openapi({
    description: 'A single entry in a crypto orderbook.',
    examples: [{ p: 20846, s: 0.1902 }],
    required: ['p', 's'],
  })
  .openapi('CryptoOrderbookEntry')

const CryptoOrderbookSchema = z
  .object({
    a: z.array(CryptoOrderbookEntrySchema),
    b: z.array(CryptoOrderbookEntrySchema),
    t: TimestampSchema,
  })
  .openapi({
    description: 'Snapshot of the orderbook.',
    examples: [
      {
        a: [
          { p: 20902, s: 0.0097 },
          { p: 21444, s: 0 },
        ],
        b: [
          { p: 20846, s: 0.1902 },
          { p: 20350, s: 0 },
        ],
        t: '2022-06-24T08:00:14.137774336Z',
      },
    ],
    required: ['t', 'b', 'a'],
  })
  .openapi('CryptoOrderbook')

const CryptoLatestOrderbooksRespSchema = z
  .object({ orderbooks: z.record(z.string(), CryptoOrderbookSchema) })
  .openapi({ required: ['orderbooks'] })
  .openapi('CryptoLatestOrderbooksResp')

const CryptoQuoteSchema = z
  .object({
    ap: z.float64().openapi({ description: 'Ask price.' }),
    as: z.float64().openapi({ description: 'Ask size.' }),
    bp: z.float64().openapi({ description: 'Bid price.' }),
    bs: z.float64().openapi({ description: 'Bid size.' }),
    t: TimestampSchema,
  })
  .openapi({
    description: 'The best bid and ask information for a given security.',
    examples: [{ ap: 29059, as: 3.252, bp: 29058, bs: 0.3544, t: '2022-05-26T11:47:18.44347136Z' }],
    required: ['t', 'bp', 'bs', 'ap', 'as'],
  })
  .openapi('CryptoQuote')

const CryptoLatestQuotesRespSchema = z
  .object({ quotes: z.record(z.string(), CryptoQuoteSchema) })
  .openapi({ required: ['quotes'] })
  .openapi('CryptoLatestQuotesResp')

const CryptoTradeSchema = z
  .object({
    i: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Trade ID.' }),
    p: z.float64().openapi({ description: 'Trade price.' }),
    s: z.float64().openapi({ description: 'Trade size.' }),
    t: TimestampSchema,
    tks: z.string().openapi({ description: 'Taker side: B for buyer, S for seller\n' }),
  })
  .openapi({
    description: 'A crypto trade.',
    examples: [{ i: 31455277, p: 29798, s: 0.1209, t: '2022-05-18T12:00:05.225055Z', tks: 'S' }],
    required: ['t', 'p', 's', 'i', 'tks'],
  })
  .openapi('CryptoTrade')

const CryptoLatestTradesRespSchema = z
  .object({ trades: z.record(z.string(), CryptoTradeSchema) })
  .openapi({ required: ['trades'] })
  .openapi('CryptoLatestTradesResp')

const CryptoQuotesRespSchema = z
  .object({
    next_page_token: NextPageTokenSchema,
    quotes: z.record(z.string(), z.array(CryptoQuoteSchema)),
  })
  .openapi({ required: ['quotes', 'next_page_token'] })
  .openapi('CryptoQuotesResp')

const CryptoSnapshotSchema = z
  .object({
    dailyBar: CryptoBarSchema.exactOptional(),
    latestQuote: CryptoQuoteSchema.exactOptional(),
    latestTrade: CryptoTradeSchema.exactOptional(),
    minuteBar: CryptoBarSchema.exactOptional(),
    prevDailyBar: CryptoBarSchema.exactOptional(),
  })
  .openapi({
    description:
      'A snapshot provides the latest trade, latest quote, latest minute bar, latest daily bar and previous daily bar.\n',
    required: [],
  })
  .openapi('CryptoSnapshot')

const CryptoSnapshotsRespSchema = z
  .object({ snapshots: z.record(z.string(), CryptoSnapshotSchema) })
  .openapi({ required: ['snapshots'] })
  .openapi('CryptoSnapshotsResp')

const CryptoTradesRespSchema = z
  .object({
    next_page_token: NextPageTokenSchema,
    trades: z.record(z.string(), z.array(CryptoTradeSchema)),
  })
  .openapi({ required: ['trades', 'next_page_token'] })
  .openapi('CryptoTradesResp')

const DataQualitySchema = z
  .enum(['complete', 'all'])
  .default('complete')
  .openapi({
    description:
      'Controls which corporate actions are returned based on data quality.\n\n- `complete` (default): exclude corporate actions that are still missing required\n  fields (for example, ex-date or CUSIP/ISIN) and have not yet been processed.\n  Already-processed corporate actions are always included, even if they would\n  otherwise be considered incomplete.\n- `all`: return matching corporate actions regardless of field completeness.\n',
  })
  .openapi('DataQuality')

const DateSchema = z.iso.date().openapi({ description: 'Date in RFC-3339.' }).openapi('Date')

const FixedIncomePriceSchema = z
  .object({
    p: z.float64().openapi({ description: 'Price' }),
    t: TimestampSchema,
    ytm: z.float64().exactOptional().openapi({ description: 'Yield to maturity.' }),
    ytw: z.float64().exactOptional().openapi({ description: 'Yield to worst.' }),
  })
  .openapi({
    description: 'The price of the instrument as a percentage of its par value.',
    examples: [{ p: 99.6459, t: '2025-02-14T20:58:00.648Z', ytm: 4.249, ytw: 4.249 }],
    required: ['t', 'p'],
  })
  .openapi('FixedIncomePrice')

const FixedIncomeLatestPricesRespSchema = z
  .object({ prices: z.record(z.string(), FixedIncomePriceSchema) })
  .openapi({
    description: 'Latest fixed-income prices keyed by ISIN.',
    examples: [
      {
        prices: {
          US912797KJ59: { p: 99.6459, t: '2025-02-14T20:58:00.648Z', ytm: 4.249, ytw: 4.249 },
        },
      },
    ],
    required: ['prices'],
  })
  .openapi('FixedIncomeLatestPricesResp')

const FixedIncomeQuoteSchema = z
  .object({
    ams: z
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
        description: 'Best ask minimum trade size in par value.',
      }),
    ap: z.float64().openapi({ description: 'Best ask price. 0 means there is no active ask.' }),
    as: z
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
        description: 'Best ask size in par value. 0 means there is no active ask.',
      }),
    aytm: z.float64().openapi({ description: 'Best ask yield to maturity.' }),
    aytw: z.float64().openapi({ description: 'Best ask yield to worst.' }),
    bms: z
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
        description: 'Best bid minimum trade size in par value.',
      }),
    bp: z.float64().openapi({ description: 'Best bid price. 0 means there is no active bid.' }),
    bs: z
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
        description: 'Best bid size in par value. 0 means there is no active bid.',
      }),
    bytm: z.float64().openapi({ description: 'Best bid yield to maturity.' }),
    bytw: z.float64().openapi({ description: 'Best bid yield to worst.' }),
    t: TimestampSchema,
  })
  .openapi({
    description:
      'The best bid and ask information for a given fixed income security. A value of 0 means there is no active bid or ask for that field.\n',
    examples: [
      {
        ams: 1000,
        ap: 99.91958333,
        as: 1000000,
        aytm: 2.226923,
        aytw: 2.226923,
        bms: 1000,
        bp: 99.81091667,
        bs: 1000000,
        bytm: 5.236154,
        bytw: 5.236154,
        t: '2026-05-21T06:56:01.882466873Z',
      },
    ],
    required: ['t', 'bp', 'bs', 'bms', 'bytm', 'bytw', 'ap', 'as', 'ams', 'aytm', 'aytw'],
  })
  .openapi('FixedIncomeQuote')

const FixedIncomeLatestQuotesRespSchema = z
  .object({ quotes: z.record(z.string(), FixedIncomeQuoteSchema) })
  .openapi({
    description: 'Latest fixed-income best bid and ask quotes keyed by ISIN.',
    examples: [
      {
        quotes: {
          US912797SX61: {
            ams: 1000,
            ap: 99.91958333,
            as: 1000000,
            aytm: 2.226923,
            aytw: 2.226923,
            bms: 1000,
            bp: 99.81091667,
            bs: 1000000,
            bytm: 5.236154,
            bytw: 5.236154,
            t: '2026-05-21T06:56:01.882466873Z',
          },
        },
      },
    ],
    required: ['quotes'],
  })
  .openapi('FixedIncomeLatestQuotesResp')

const MarketTypeSchema = z
  .enum(['stocks', 'crypto'])
  .openapi({ description: 'Market type (stocks or crypto).' })
  .openapi('MarketType')

const MostActiveSchema = z
  .object({
    symbol: z.string(),
    trade_count: z
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
        description: 'Cumulative trade count for the current trading day.',
      }),
    volume: z
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
        description: 'Cumulative volume for the current trading day.',
      }),
  })
  .openapi({
    description: 'A stock that is most active by either volume or trade count.',
    examples: [{ symbol: 'AAPL', trade_count: 639626, volume: 122709184 }],
    required: ['symbol', 'volume', 'trade_count'],
  })
  .openapi('MostActive')

const MostActivesRespSchema = z
  .object({
    last_updated: z
      .string()
      .openapi({
        description:
          'Time when the most actives were last computed. Formatted as a RFC-3339 date-time with nanosecond precision.\n',
      }),
    most_actives: z
      .array(MostActiveSchema)
      .openapi({ description: 'List of top N most active symbols.' }),
  })
  .openapi({ required: ['most_actives', 'last_updated'] })
  .openapi('MostActivesResp')

const MoverSchema = z
  .object({
    change: z.float64().openapi({ description: 'Difference in change for the day.' }),
    percent_change: z
      .float64()
      .openapi({ description: 'Percentage difference change for the day.' }),
    price: z.float64().openapi({ description: 'Current price of market moving asset.' }),
    symbol: z.string().openapi({ description: 'Symbol of market moving asset.' }),
  })
  .openapi({
    description: 'A symbol whose price moved significantly.',
    examples: [{ change: 2.46, percent_change: 145.56, price: 4.15, symbol: 'AGRI' }],
    required: ['symbol', 'percent_change', 'change', 'price'],
    title: 'Mover',
  })
  .openapi('Mover')

const MoversRespSchema = z
  .object({
    gainers: z.array(MoverSchema).openapi({ description: 'List of top N gainers.' }),
    last_updated: z
      .string()
      .openapi({
        description:
          'Time when the movers were last computed. Formatted as a RFC-3339 date-time with nanosecond precision.\n',
      }),
    losers: z.array(MoverSchema).openapi({ description: 'List of top N losers.' }),
    market_type: MarketTypeSchema,
  })
  .openapi({
    description: 'Contains list of market movers.',
    required: ['gainers', 'losers', 'market_type', 'last_updated'],
  })
  .openapi('MoversResp')

const NewsImageSchema = z
  .object({
    size: z
      .enum(['thumb', 'small', 'large'])
      .openapi({
        description: 'Possible values for size are thumb, small and large.',
        examples: ['thumb'],
      }),
    url: z.url().min(1).openapi({ description: 'URL to image from news article.' }),
  })
  .openapi({
    description:
      'A model representing images for a news article. Simply a URL to the image along with a size parameter suggesting the display size of the image.',
    required: ['size', 'url'],
  })
  .openapi('NewsImage')

const NewsSchema = z
  .object({
    author: z.string().min(1).openapi({ description: 'Original author of news article.' }),
    content: z
      .string()
      .min(1)
      .openapi({ description: 'Content of the news article (might contain HTML).' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Date article was created (RFC-3339).' }),
    headline: z.string().min(1).openapi({ description: 'Headline or title of the article.' }),
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
      .openapi({ type: 'integer', format: 'int64', description: 'News article ID.' }),
    images: z
      .array(NewsImageSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .openapi({ description: 'List of images (URLs) related to given article (may be empty).' }),
    source: z
      .string()
      .min(1)
      .openapi({ description: 'Source where the news originated from (e.g. Benzinga).' }),
    summary: z
      .string()
      .min(1)
      .openapi({ description: 'Summary text for the article (may be first sentence of content).' }),
    symbols: z.array(z.string()).openapi({ description: 'List of related or mentioned symbols.' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Date article was updated (RFC-3339).' }),
    url: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ description: 'URL of article (if applicable).' }),
  })
  .openapi({
    description: 'Model representing a news article.',
    required: [
      'id',
      'headline',
      'author',
      'created_at',
      'updated_at',
      'summary',
      'content',
      'images',
      'symbols',
      'source',
    ],
  })
  .openapi('News')

const NewsRespSchema = z
  .object({ news: z.array(NewsSchema), next_page_token: NextPageTokenSchema })
  .openapi({ required: ['news', 'next_page_token'] })
  .openapi('NewsResp')

const OptionBarSchema = z
  .object({
    c: z.float64().openapi({ description: 'Closing price.' }),
    h: z.float64().openapi({ description: 'High price.' }),
    l: z.float64().openapi({ description: 'Low price.' }),
    n: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Trade count in the bar.' }),
    o: z.float64().openapi({ description: 'Opening price.' }),
    t: TimestampSchema,
    v: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Bar volume.' }),
    vw: z.float64().openapi({ description: 'Volume weighted average price.' }),
  })
  .openapi({
    description: 'OHLC aggregate of all the trades in a given interval.',
    examples: [
      {
        c: 0.23,
        h: 0.28,
        l: 0.23,
        n: 26,
        o: 0.28,
        t: '2024-01-18T05:00:00Z',
        v: 224,
        vw: 0.245045,
      },
    ],
    required: ['t', 'o', 'h', 'l', 'c', 'v', 'n', 'vw'],
  })
  .openapi('OptionBar')

const OptionBarsRespSchema = z
  .object({
    bars: z.record(z.string(), z.array(OptionBarSchema)),
    currency: z.string().exactOptional(),
    next_page_token: NextPageTokenSchema,
  })
  .openapi({ required: ['bars', 'next_page_token'] })
  .openapi('OptionBarsResp')

const OptionConditionsSchema = z
  .record(z.string(), z.string())
  .openapi({
    examples: [
      {
        a: 'SLAN - Single Leg Auction Non ISO',
        e: 'SLFT - Single Leg Floor Trade',
        g: 'MLAT - Multi Leg Auction',
      },
    ],
  })
  .openapi('OptionConditions')

const OptionExchangesSchema = z
  .record(z.string(), z.string())
  .openapi({ examples: [{ A: 'NYSE American Options', Q: 'Nasdaq Options' }] })
  .openapi('OptionExchanges')

const OptionFeedSchema = z.enum(['opra', 'indicative']).default('opra').openapi('OptionFeed')

const OptionGreeksSchema = z
  .object({
    delta: z.float64(),
    gamma: z.float64(),
    rho: z.float64(),
    theta: z.float64(),
    vega: z.float64(),
  })
  .openapi({
    description: 'The greeks for the contract calculated using the Black-Scholes model.',
    required: ['delta', 'gamma', 'theta', 'vega', 'rho'],
  })
  .openapi('OptionGreeks')

const OptionQuoteSchema = z
  .object({
    ap: z.float64().openapi({ description: 'Ask price.' }),
    as: z.uint32().openapi({ description: 'Ask size.' }),
    ax: z.string().openapi({ description: 'Ask exchange.' }),
    bp: z.float64().openapi({ description: 'Bid price.' }),
    bs: z.uint32().openapi({ description: 'Bid size.' }),
    bx: z.string().openapi({ description: 'Bid exchange.' }),
    c: z.string().openapi({ description: 'Quote condition.' }),
    t: TimestampSchema,
  })
  .openapi({
    description: 'The best bid and ask information for a given option.\n',
    examples: [
      {
        ap: 0.16,
        as: 669,
        ax: 'w',
        bp: 0.15,
        bs: 164,
        bx: 'W',
        c: 'A',
        t: '2024-02-28T15:30:28.046330624Z',
      },
    ],
    required: ['t', 'bx', 'bp', 'bs', 'ap', 'as', 'ax', 'c'],
  })
  .openapi('OptionQuote')

const OptionLatestQuotesRespSchema = z
  .object({ quotes: z.record(z.string(), OptionQuoteSchema) })
  .openapi({ required: ['quotes'] })
  .openapi('OptionLatestQuotesResp')

const OptionTradeSchema = z
  .object({
    c: z.string().openapi({ description: 'Trade condition.' }),
    p: z.float64().openapi({ description: 'Trade price.' }),
    s: z.uint32().openapi({ description: 'Trade size.' }),
    t: TimestampSchema,
    x: z.string(),
  })
  .openapi({
    description: 'An option trade.',
    examples: [{ c: 'I', p: 0.37, s: 1, t: '2024-01-18T15:03:44.56339456Z', x: 'B' }],
    required: ['t', 'x', 'p', 's', 'c'],
  })
  .openapi('OptionTrade')

const OptionLatestTradesRespSchema = z
  .object({ trades: z.record(z.string(), OptionTradeSchema) })
  .openapi({ required: ['trades'] })
  .openapi('OptionLatestTradesResp')

const OptionSnapshotSchema = z
  .object({
    dailyBar: OptionBarSchema.exactOptional(),
    greeks: OptionGreeksSchema.exactOptional(),
    impliedVolatility: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Implied volatility calculated using the Black-Scholes model.' }),
    latestQuote: OptionQuoteSchema.exactOptional(),
    latestTrade: OptionTradeSchema.exactOptional(),
    minuteBar: OptionBarSchema.exactOptional(),
    prevDailyBar: OptionBarSchema.exactOptional(),
  })
  .openapi({ description: 'A snapshot provides the latest trade and latest quote.', required: [] })
  .openapi('OptionSnapshot')

const OptionSnapshotsRespSchema = z
  .object({
    next_page_token: NextPageTokenSchema,
    snapshots: z.record(z.string(), OptionSnapshotSchema),
  })
  .openapi({ required: ['snapshots', 'next_page_token'] })
  .openapi('OptionSnapshotsResp')

const OptionTradesRespSchema = z
  .object({
    currency: z.string().exactOptional(),
    next_page_token: NextPageTokenSchema,
    trades: z.record(z.string(), z.array(OptionTradeSchema)),
  })
  .openapi({ required: ['trades', 'next_page_token'] })
  .openapi('OptionTradesResp')

const RegionSchema = z
  .enum(['us', 'non_us', 'all'])
  .default('us')
  .openapi({
    description:
      'The region to filter corporate actions by.\n\n- `us`: only US corporate actions\n- `non_us`: only non-US corporate actions\n- `all`: both US and non-US corporate actions\n',
  })
  .openapi('Region')

const SortSchema = z
  .enum(['asc', 'desc'])
  .default('asc')
  .openapi({ description: 'Sort data in ascending or descending order.' })
  .openapi('Sort')

const StockAuctionSchema = z
  .object({
    c: z
      .string()
      .openapi({
        description:
          'The condition flag indicating that this is an auction. See `v2/stocks/meta/conditions/trade` for more details.\n',
      }),
    p: z.float64().openapi({ description: 'Auction price.' }),
    s: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'Auction trade size.' }),
    t: TimestampSchema,
    x: z
      .string()
      .openapi({ description: 'Exchange code. See `v2/stocks/meta/exchanges` for more details.' }),
  })
  .openapi({
    description: 'An auction\n',
    examples: [{ c: 'O', p: 135, t: '2022-10-13T13:30:01.688322951Z', x: 'Q' }],
    required: ['t', 'x', 'p', 'c'],
  })
  .openapi('StockAuction')

const StockAuctionFeedSchema = z.string().default('sip').openapi('StockAuctionFeed')

const StockDailyAuctionsSchema = z
  .object({
    c: z
      .array(StockAuctionSchema)
      .openapi({
        description:
          'Closing auctions. Every price / exchange / condition triplet is only shown once, with its earliest timestamp.',
      }),
    d: DateSchema,
    o: z.array(StockAuctionSchema).openapi({ description: 'Opening auctions.' }),
  })
  .openapi({
    description: 'Opening and closing auction prices for a given day.\n',
    required: ['d', 'o', 'c'],
  })
  .openapi('StockDailyAuctions')

const StockAuctionsRespSchema = z
  .object({
    auctions: z.record(z.string(), z.array(StockDailyAuctionsSchema)),
    currency: z.string().exactOptional(),
    next_page_token: NextPageTokenSchema,
  })
  .openapi({ required: ['auctions', 'next_page_token'] })
  .openapi('StockAuctionsResp')

const StockAuctionsRespSingleSchema = z
  .object({
    auctions: z.array(StockDailyAuctionsSchema),
    currency: z.string().exactOptional(),
    next_page_token: NextPageTokenSchema,
    symbol: z.string(),
  })
  .openapi({ required: ['auctions', 'next_page_token', 'symbol'] })
  .openapi('StockAuctionsRespSingle')

const StockBarSchema = z
  .object({
    c: z.float64().openapi({ description: 'Closing price.' }),
    h: z.float64().openapi({ description: 'High price.' }),
    l: z.float64().openapi({ description: 'Low price.' }),
    n: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Trade count in the bar.' }),
    o: z.float64().openapi({ description: 'Opening price.' }),
    t: TimestampSchema,
    v: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Bar volume.' }),
    vw: z.float64().openapi({ description: 'Volume weighted average price.' }),
  })
  .openapi({
    description: 'OHLC aggregate of all the trades in a given interval.\n',
    examples: [
      {
        c: 178.08,
        h: 178.34,
        l: 177.76,
        n: 1727,
        o: 178.26,
        t: '2022-01-03T09:00:00Z',
        v: 60937,
        vw: 177.954244,
      },
    ],
    required: ['t', 'o', 'h', 'l', 'c', 'v', 'n', 'vw'],
  })
  .openapi('StockBar')

const StockBarsRespSchema = z
  .object({
    bars: z.record(z.string(), z.array(StockBarSchema)),
    currency: z.string().exactOptional(),
    next_page_token: NextPageTokenSchema,
  })
  .openapi({ required: ['bars', 'next_page_token'] })
  .openapi('StockBarsResp')

const StockBarsRespSingleSchema = z
  .object({
    bars: z.array(StockBarSchema),
    currency: z.string().exactOptional(),
    next_page_token: NextPageTokenSchema,
    symbol: z.string(),
  })
  .openapi({ required: ['bars', 'next_page_token', 'symbol'] })
  .openapi('StockBarsRespSingle')

const StockConditionsSchema = z
  .record(z.string(), z.string())
  .openapi({ examples: [{ '@': 'Regular Sale', A: 'Acquisition', B: 'Bunched Trade' }] })
  .openapi('StockConditions')

const StockExchangesSchema = z
  .record(z.string(), z.string())
  .openapi({ examples: [{ N: 'New York Stock Exchange', V: 'IEX' }] })
  .openapi('StockExchanges')

const StockHistoricalFeedSchema = z
  .enum(['iex', 'otc', 'sip', 'boats'])
  .default('sip')
  .openapi('StockHistoricalFeed')

const StockLatestBarsRespSchema = z
  .object({ bars: z.record(z.string(), StockBarSchema), currency: z.string().exactOptional() })
  .openapi({ required: ['bars'] })
  .openapi('StockLatestBarsResp')

const StockLatestBarsRespSingleSchema = z
  .object({ bar: StockBarSchema, currency: z.string().exactOptional(), symbol: z.string() })
  .openapi({ required: ['bar', 'symbol'] })
  .openapi('StockLatestBarsRespSingle')

const StockLatestFeedSchema = z
  .enum(['delayed_sip', 'iex', 'otc', 'sip', 'boats', 'overnight'])
  .openapi('StockLatestFeed')

const StockTapeSchema = z
  .enum(['A', 'B', 'C', 'N', 'O'])
  .openapi({
    description:
      '- A: New York Stock Exchange\n- B: NYSE Arca, Bats, IEX and other regional exchanges\n- C: NASDAQ\n- N: Overnight\n- O: OTC\n',
  })
  .openapi('StockTape')

const StockQuoteSchema = z
  .object({
    ap: z.float64().openapi({ description: 'Ask price. 0 means the security has no active ask.' }),
    as: z
      .uint32()
      .openapi({ description: 'Ask size in shares (round lots prior to November 3, 2025).' }),
    ax: z
      .string()
      .openapi({ description: 'Ask exchange. See `v2/stocks/meta/exchanges` for more details.' }),
    bp: z.float64().openapi({ description: 'Bid price. 0 means the security has no active bid.' }),
    bs: z
      .uint32()
      .openapi({ description: 'Bid size in shares (round lots prior to November 3, 2025).' }),
    bx: z
      .string()
      .openapi({ description: 'Bid exchange. See `v2/stocks/meta/exchanges` for more details.' }),
    c: z
      .array(z.string())
      .openapi({
        description:
          'Condition flags. See `v2/stocks/meta/conditions/quote` for more details. If the array contains one flag, it applies to both the bid and ask. If the array contains two flags, the first one applies to the bid and the second one to the ask.\n',
      }),
    t: TimestampSchema,
    z: StockTapeSchema,
  })
  .openapi({
    description: 'The best bid and ask information for a given security.',
    examples: [
      {
        ap: 387.7,
        as: 1,
        ax: 'C',
        bp: 387.67,
        bs: 1,
        bx: 'N',
        c: ['R'],
        t: '2021-02-06T13:35:08.946977536Z',
        z: 'C',
      },
    ],
    required: ['t', 'bx', 'bp', 'bs', 'ap', 'as', 'ax', 'c', 'z'],
  })
  .openapi('StockQuote')

const StockLatestQuotesRespSchema = z
  .object({ currency: z.string().exactOptional(), quotes: z.record(z.string(), StockQuoteSchema) })
  .openapi({ required: ['quotes'] })
  .openapi('StockLatestQuotesResp')

const StockLatestQuotesRespSingleSchema = z
  .object({ currency: z.string().exactOptional(), quote: StockQuoteSchema, symbol: z.string() })
  .openapi({ required: ['quote', 'symbol'] })
  .openapi('StockLatestQuotesRespSingle')

const StockTradeSchema = z
  .object({
    c: z
      .array(z.string())
      .openapi({
        description: 'Condition flags. See `v2/stocks/meta/conditions/trade` for more details.',
      }),
    i: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64(),
      )
      .openapi({
        type: 'integer',
        format: 'uint64',
        description: 'Trade ID sent by the exchange.',
      }),
    p: z.float64().openapi({ description: 'Trade price.' }),
    s: z.uint32().openapi({ description: 'Trade size.' }),
    t: TimestampSchema,
    u: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Update to the trade. This field is optional, if it's missing, the trade is valid. Otherwise, it can have these values:\n - canceled: indicates that the trade has been canceled\n - incorrect: indicates that the trade has been corrected and the given trade is no longer valid\n - corrected: indicates that this trade is the correction of a previous (incorrect) trade\n",
      }),
    x: z
      .string()
      .openapi({ description: 'Exchange code. See `v2/stocks/meta/exchanges` for more details.' }),
    z: StockTapeSchema,
  })
  .openapi({
    description: 'A stock trade.',
    examples: [
      {
        c: ['@', 'T'],
        i: 1,
        p: 178.26,
        s: 246,
        t: '2022-01-03T09:00:00.086175744Z',
        x: 'P',
        z: 'C',
      },
    ],
    required: ['t', 'i', 'x', 'p', 's', 'c', 'z'],
  })
  .openapi('StockTrade')

const StockLatestTradesRespSchema = z
  .object({ currency: z.string().exactOptional(), trades: z.record(z.string(), StockTradeSchema) })
  .openapi({ required: ['trades'] })
  .openapi('StockLatestTradesResp')

const StockLatestTradesRespSingleSchema = z
  .object({ currency: z.string().exactOptional(), symbol: z.string(), trade: StockTradeSchema })
  .openapi({ required: ['trade', 'symbol'] })
  .openapi('StockLatestTradesRespSingle')

const StockQuotesRespSchema = z
  .object({
    currency: z.string().exactOptional(),
    next_page_token: NextPageTokenSchema,
    quotes: z.record(z.string(), z.array(StockQuoteSchema)),
  })
  .openapi({ required: ['quotes', 'next_page_token'] })
  .openapi('StockQuotesResp')

const StockQuotesRespSingleSchema = z
  .object({
    currency: z.string().exactOptional(),
    next_page_token: NextPageTokenSchema,
    quotes: z.array(StockQuoteSchema),
    symbol: z.string(),
  })
  .openapi({ required: ['quotes', 'next_page_token', 'symbol'] })
  .openapi('StockQuotesRespSingle')

const StockSnapshotSchema = z
  .object({
    dailyBar: StockBarSchema.exactOptional(),
    latestQuote: StockQuoteSchema.exactOptional(),
    latestTrade: StockTradeSchema.exactOptional(),
    minuteBar: StockBarSchema.exactOptional(),
    prevDailyBar: StockBarSchema.exactOptional(),
  })
  .openapi({
    description:
      'A snapshot provides the latest trade, latest quote, latest minute bar, current daily bar and previous daily bar.\n',
    required: [],
  })
  .openapi('StockSnapshot')

const StockSnapshotsRespSchema = z
  .record(z.string(), StockSnapshotSchema)
  .openapi('StockSnapshotsResp')

const StockSnapshotsRespSingleSchema = z
  .object({ currency: z.string().exactOptional(), symbol: z.string().exactOptional() })
  .openapi({ required: [] })
  .and(StockSnapshotSchema)
  .openapi('StockSnapshotsRespSingle')

const StockTradesRespSchema = z
  .object({
    currency: z.string().exactOptional(),
    next_page_token: NextPageTokenSchema,
    trades: z.record(z.string(), z.array(StockTradeSchema)),
  })
  .openapi({ required: ['trades', 'next_page_token'] })
  .openapi('StockTradesResp')

const StockTradesRespSingleSchema = z
  .object({
    currency: z.string().exactOptional(),
    next_page_token: NextPageTokenSchema,
    symbol: z.string(),
    trades: z.array(StockTradeSchema),
  })
  .openapi({ required: ['trades', 'next_page_token', 'symbol'] })
  .openapi('StockTradesRespSingle')

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
    'Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).\n',
}

const CasCusipsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'A comma-separated list of CUSIPs.',
      example: '037833100,88160R101',
      in: 'query',
      name: 'cusips',
      schema: { type: 'string' },
      required: false,
    },
  })

const CasDataQualityParamsSchema = DataQualitySchema.openapi({
  param: {
    description: 'Controls which corporate actions are returned based on data quality.\n',
    in: 'query',
    name: 'data_quality',
    schema: { $ref: '#/components/schemas/data_quality' },
    required: false,
  },
}).exactOptional()

const CasEndParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      description:
        'The inclusive end of the interval. The corporate actions are sorted by their `process_date`. Format: YYYY-MM-DD. Default: current day.\n',
      examples: { date: { summary: 'Date', value: '2024-08-25' } },
      in: 'query',
      name: 'end',
      schema: { format: 'date', type: 'string' },
      required: false,
    },
  })

const CasEventsLastEventIdParamsSchema = EventIdSchema.openapi({
  param: {
    description:
      'Standard SSE reconnect header. ULID matching an `event_id`; replay events\nwhose `event_id` is greater than or equal to this value (inclusive -- the\nevent with this id is redelivered on reconnect, so clients should\ndeduplicate by `event_id` if needed). Overrides `since_id` when both are\nset.\n',
    example: '01J9RPMV5TKB8WX3M4F1KZ7QH2',
    in: 'header',
    name: 'Last-Event-Id',
    schema: { $ref: '#/components/schemas/event_id' },
    required: false,
  },
}).exactOptional()

const CasEventsRegionParamsSchema = z
  .enum(['all', 'us', 'non_us'])
  .default('all')
  .exactOptional()
  .openapi({
    param: {
      description:
        'Which markets to receive events for. Compared against the envelope\'s `region`\nfield and applied uniformly to historical and live events.\n\n- `all` (default): every event, regardless of market.\n- `us`: only events with `region == "us"`.\n- `non_us`: only events with `region == "non_us"`.\n\nUnknown values return `400` with the list of valid values in the error\nmessage. The value is case-insensitive.\n',
      in: 'query',
      name: 'region',
      schema: { default: 'all', enum: ['all', 'us', 'non_us'], type: 'string' },
      required: false,
    },
  })

const CasEventsSinceParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      description:
        'Replay events emitted on or after this RFC-3339 date. Mutually exclusive with\n`since_id`. Required when `until` is specified.\n',
      example: '2026-03-20T00:00:00Z',
      in: 'query',
      name: 'since',
      schema: { format: 'date-time', type: 'string' },
      required: false,
    },
  })

const CasEventsSinceIdParamsSchema = EventIdSchema.openapi({
  param: {
    description:
      'ULID matching an `event_id`; replay events whose `event_id` is greater than\nor equal to this value (inclusive -- the event with this id, if it still\nexists, is redelivered). Mutually exclusive with `since`. Overridden by the\n`Last-Event-Id` header when both are set.\n',
    example: '01J9RPMV5TKB8WX3M4F1KZ7QH2',
    in: 'query',
    name: 'since_id',
    schema: { $ref: '#/components/schemas/event_id' },
    required: false,
  },
}).exactOptional()

const CasEventsTypeParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(CorporateActionEventTypeSchema),
  )
  .exactOptional()
  .openapi({
    param: {
      description:
        'Filter the stream to a subset of `event_type` values.\n\nPassed as a comma-separated list in the URL query, e.g.\n`?type=cash_dividend_corporateaction_event,stock_dividend_corporateaction_event`.\n\nOnly events whose `event_type` is in this list are delivered. An empty or\nomitted value is treated as "no filter" (deliver every type). Unknown values\nreturn `400` with the list of valid values in the error message. The filter\napplies uniformly to both replayed (historical) and live events.\n\nSee [`corporate_action_event_type`](#/components/schemas/corporate_action_event_type)\nfor the full list of accepted values.\n',
      example: ['cash_dividend_corporateaction_event', 'stock_dividend_corporateaction_event'],
      explode: false,
      in: 'query',
      name: 'type',
      schema: {
        items: { $ref: '#/components/schemas/corporate_action_event_type' },
        type: 'array',
      },
      style: 'form',
      required: false,
    },
  })

const CasEventsUntilParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      description:
        'Close the connection after the last event on this RFC-3339 date (inclusive).\nRequires `since`; cannot be in the future.\n',
      example: '2026-03-20T23:59:59Z',
      in: 'query',
      name: 'until',
      schema: { format: 'date-time', type: 'string' },
      required: false,
    },
  })

const CasEventsUntilIdParamsSchema = EventIdSchema.openapi({
  param: {
    description:
      'ULID matching an `event_id`; close the connection once this id has been\ndelivered (inclusive). Requires `since_id`; cannot be in the future.\n',
    example: '01J9RVB6Y4ZK8M3N7QD2WX1RFP',
    in: 'query',
    name: 'until_id',
    schema: { $ref: '#/components/schemas/event_id' },
    required: false,
  },
}).exactOptional()

const CasIdsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'A comma-separated list of corporate action IDs. This parameter is mutually exclusive with all other filters (symbols, types, start, end, region, data_quality).\n',
      example: '1dbc7685-9517-4a77-a236-8527d49cefdc,f8489167-4e4b-431d-a0be-6017ae1cf08a',
      in: 'query',
      name: 'ids',
      schema: { type: 'string' },
      required: false,
    },
  })

const CasLimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(1000),
  )
  .default(100)
  .exactOptional()
  .openapi({
    param: {
      description:
        'Maximum number of corporate actions to return in a response.\nThe limit applies to the total number of data points, not the count per symbol!\nUse `next_page_token` to fetch the next set of corporate actions.\n',
      in: 'query',
      name: 'limit',
      schema: { default: 100, maximum: 1000, minimum: 1, type: 'integer' },
      required: false,
    },
  })

const CasRegionParamsSchema = RegionSchema.openapi({
  param: {
    description: 'The region to filter corporate actions by.',
    in: 'query',
    name: 'region',
    schema: { $ref: '#/components/schemas/region' },
    required: false,
  },
}).exactOptional()

const CasStartParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      description:
        'The inclusive start of the interval. The corporate actions are sorted by their `process_date`. Format: YYYY-MM-DD. Default: current day.\n',
      examples: { date: { value: '2024-08-14' } },
      in: 'query',
      name: 'start',
      schema: { format: 'date', type: 'string' },
      required: false,
    },
  })

const CasSymbolsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'A comma-separated list of symbols.',
      example: 'AAPL,TSLA',
      in: 'query',
      name: 'symbols',
      schema: { type: 'string' },
      required: false,
    },
  })

const CasTypesParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'A comma-separated list of types. If not provided, search all types.\n\nThe following types are supported:\n  - reverse_split\n  - forward_split\n  - unit_split\n  - cash_dividend\n  - stock_dividend\n  - spin_off\n  - cash_merger\n  - stock_merger\n  - stock_and_cash_merger\n  - redemption\n  - name_change\n  - worthless_removal\n  - rights_distribution\n  - partial_call\n  - reorganization\n  - capital_gains_distribution\n',
      example: 'forward_split,reverse_split',
      in: 'query',
      name: 'types',
      schema: { type: 'string' },
      required: false,
    },
  })

const CryptoHistoricalLocParamsSchema = CryptoHistoricalLocSchema.openapi({
  param: {
    description:
      'Crypto location from where the historical market data is retrieved.\n- `us`: Alpaca US\n- `us-1`: Kraken US\n- `eu-1`: Kraken EU\n',
    in: 'path',
    name: 'loc',
    required: true,
    schema: { $ref: '#/components/schemas/crypto_historical_loc' },
  },
})

const CryptoLatestLocParamsSchema = CryptoLatestLocSchema.openapi({
  param: {
    description:
      'Crypto location from where the latest market data is retrieved.\n- `us`: Alpaca US\n- `us-1`: Kraken US\n- `eu-1`: Kraken EU\n',
    in: 'path',
    name: 'loc',
    required: true,
    schema: { $ref: '#/components/schemas/crypto_latest_loc' },
  },
})

const CryptoSymbolsParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'A comma-separated list of crypto symbols.',
      example: 'BTC/USD,LTC/USD',
      in: 'query',
      name: 'symbols',
      required: true,
      schema: { type: 'string' },
    },
  })

const EndParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      description:
        'The inclusive end of the interval. Format: RFC-3339 or YYYY-MM-DD.\nDefault: the current time if the user has a real-time access for the feed, otherwise 15 minutes before the current time.\n',
      examples: {
        'RFC-3339 nanosecond': {
          summary: 'RFC-3339 date-time with nanosecond accuracy',
          value: '2024-01-04T01:02:03.123456789Z',
        },
        'RFC-3339 second': {
          summary: 'RFC-3339 date-time with second accuracy',
          value: '2024-01-04T00:00:00Z',
        },
        'RFC-3339 with timezone': {
          summary: 'RFC-3339 date-time with time zone',
          value: '2024-01-04T09:30:00-04:00',
        },
        date: { summary: 'Date', value: '2024-01-04' },
      },
      in: 'query',
      name: 'end',
      required: false,
      schema: { format: 'date-time', type: 'string' },
    },
  })

const IsinsParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'A comma-separated list of ISINs with a limit of 1000.',
      example: 'US912797KJ59,US912797KS58,US912797LB15',
      in: 'query',
      name: 'isins',
      required: true,
      schema: { type: 'string' },
    },
  })

const LimitParamsSchema = z
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
        'The maximum number of data points to return in the response page.\nThe API may return less, even if there are more available data points in the requested interval.\nAlways check the `next_page_token` for more pages.\nThe limit applies to the total number of data points, not per symbol!\n',
      in: 'query',
      name: 'limit',
      required: false,
      schema: { default: 1000, maximum: 10000, minimum: 1, type: 'integer' },
    },
  })

const MostActivesByParamsSchema = z
  .enum(['volume', 'trades'])
  .default('volume')
  .exactOptional()
  .openapi({
    param: {
      description: 'The metric used for ranking the most active stocks.',
      in: 'query',
      name: 'by',
      required: false,
      schema: { default: 'volume', enum: ['volume', 'trades'], type: 'string' },
    },
  })

const MostActivesTopParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int32().min(1).max(100),
  )
  .default(10)
  .exactOptional()
  .openapi({
    param: {
      description: 'The number of top most active stocks to fetch per day.',
      in: 'query',
      name: 'top',
      required: false,
      schema: { default: 10, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
    },
  })

const MoversMarketTypeParamsSchema = MarketTypeSchema.openapi({
  param: {
    description: 'Screen-specific market (stocks or crypto).',
    in: 'path',
    name: 'market_type',
    required: true,
    schema: { $ref: '#/components/schemas/market_type' },
  },
})

const MoversTopParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int32().min(1).max(50),
  )
  .default(10)
  .exactOptional()
  .openapi({
    param: {
      description:
        'Number of top market movers to fetch (gainers and losers). Will return this number of results for each. By default, 10 gainers and 10 losers.\n',
      in: 'query',
      name: 'top',
      required: false,
      schema: { default: 10, format: 'int32', maximum: 50, minimum: 1, type: 'integer' },
    },
  })

const NewsSortParamsSchema = z
  .enum(['asc', 'desc'])
  .default('desc')
  .exactOptional()
  .openapi({
    param: {
      description: 'Sort articles by updated date.',
      in: 'query',
      name: 'sort',
      schema: { default: 'desc', enum: ['asc', 'desc'], type: 'string' },
      required: false,
    },
  })

const OptionFeedParamsSchema = OptionFeedSchema.openapi({
  param: {
    description:
      'The source feed of the data. `opra` is the official OPRA feed, `indicative` is a free indicative feed where trades are delayed and quotes are modified. Default: `opra` if the user has a subscription, otherwise `indicative`.\n',
    in: 'query',
    name: 'feed',
    schema: { $ref: '#/components/schemas/option_feed' },
    required: false,
  },
}).exactOptional()

const OptionLimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(1000),
  )
  .default(100)
  .exactOptional()
  .openapi({
    param: {
      description:
        'Number of maximum snapshots to return in a response.\nThe limit applies to the total number of data points, not the number per symbol!\nUse `next_page_token` to fetch the next set of responses.\n',
      in: 'query',
      name: 'limit',
      schema: { default: 100, maximum: 1000, minimum: 1, type: 'integer' },
      required: false,
    },
  })

const OptionSymbolsParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'A comma-separated list of contract symbols with a limit of 100.',
      example: 'AAPL241220C00300000,AAPL240315C00225000',
      in: 'query',
      name: 'symbols',
      required: true,
      schema: { type: 'string' },
    },
  })

const OptionUnderlyingSymbolParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The financial instrument on which an option contract is based or derived.',
      example: 'AAPL',
      in: 'path',
      name: 'underlying_symbol',
      required: true,
      schema: { type: 'string' },
    },
  })

const OptionUpdatedSinceParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      description:
        'Filter to snapshots that were updated since this timestamp, meaning that the timestamp of the trade or the quote is greater than or equal to this value.\nFormat: RFC-3339 or YYYY-MM-DD. If missing, all values are returned.\n',
      in: 'query',
      name: 'updated_since',
      required: false,
      schema: { format: 'date-time', type: 'string' },
    },
  })

const PageTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'The pagination token from which to continue. The value to pass here is returned in specific requests when more data is available, usually because of a response result limit.\n',
      in: 'query',
      name: 'page_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const SortParamsSchema = z
  .string()
  .and(SortSchema)
  .exactOptional()
  .openapi({
    param: {
      description: 'Sort data in ascending or descending order.',
      in: 'query',
      name: 'sort',
      schema: { allOf: [{ type: 'string' }, { $ref: '#/components/schemas/sort' }] },
      required: false,
    },
  })

const StartParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      description:
        "The inclusive start of the interval. Format: RFC-3339 or YYYY-MM-DD.\nDefault: the beginning of the current day, but at least 15 minutes ago if the user doesn't have real-time access for the feed.\n",
      examples: {
        'RFC-3339 nanosecond': {
          summary: 'RFC-3339 date-time with nanosecond accuracy',
          value: '2024-01-03T01:02:03.123456789Z',
        },
        'RFC-3339 second': {
          summary: 'RFC-3339 date-time with second accuracy',
          value: '2024-01-03T00:00:00Z',
        },
        'RFC-3339 with timezone': {
          summary: 'RFC-3339 date-time with time zone',
          value: '2024-01-03T09:30:00-04:00',
        },
        date: { summary: 'Date', value: '2024-01-03' },
      },
      in: 'query',
      name: 'start',
      required: false,
      schema: { format: 'date-time', type: 'string' },
    },
  })

const StockAdjustmentParamsSchema = z
  .string()
  .default('raw')
  .exactOptional()
  .openapi({
    param: {
      description:
        'Specifies the adjustments for the bars.\n\n - `raw`: no adjustments\n - `split`: adjust price and volume for forward and reverse stock splits\n - `dividend`: adjust price for cash dividends\n - `spin-off`: adjust price for spin-offs\n - `all`: apply all above adjustments\n\nYou can combine multiple adjustments by separating them with a comma, e.g. `split,spin-off`.\n',
      in: 'query',
      name: 'adjustment',
      schema: { default: 'raw', type: 'string' },
      required: false,
    },
  })

const StockAsofParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'The as-of date of the queried stock symbol(s). Format: YYYY-MM-DD. Default: current day.\n\nThis date is used to identify the underlying entity of the provided symbol(s), so that name changes for this entity can be found. Data for past symbol(s) is returned if the query date range spans the name change.\n\nThe special value of "-" means symbol mapping is skipped. Data is returned based on the symbol alone without looking up previous names. The same happens if the queried symbol is not found on the given `asof` date.\n\nExample: FB was renamed to META in 2022-06-09. Querying META with an `asof` date after 2022-06-09 will also yield FB data. The data for the FB ticker will be labeled as META because they are considered the same underlying entity as of 2022-06-09. Querying FB with an `asof` date after 2022-06-09 will only return data with the FB ticker, not with META. But with an `asof` date before 2022-06-09, META will also be returned (as FB).\n',
      in: 'query',
      name: 'asof',
      schema: { type: 'string' },
      required: false,
    },
  })

const StockAuctionFeedParamsSchema = StockAuctionFeedSchema.openapi({
  param: {
    description: 'Only `sip` is valid for auctions.',
    in: 'query',
    name: 'feed',
    schema: { $ref: '#/components/schemas/stock_auction_feed' },
    required: false,
  },
}).exactOptional()

const StockCurrencyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'The currency of all prices in ISO 4217 format. Default: USD.\n',
      in: 'query',
      name: 'currency',
      schema: { type: 'string' },
      required: false,
    },
  })

const StockHistoricalFeedParamsSchema = StockHistoricalFeedSchema.openapi({
  param: {
    description:
      'The source feed of the data.\n - `sip`: all US exchanges\n - `iex`: Investors EXchange\n - `boats`: Blue Ocean ATS, overnight US trading data\n - `otc`: over-the-counter exchanges\n',
    in: 'query',
    name: 'feed',
    schema: { $ref: '#/components/schemas/stock_historical_feed' },
    required: false,
  },
}).exactOptional()

const StockLatestFeedParamsSchema = StockLatestFeedSchema.openapi({
  param: {
    description:
      'The source feed of the data.\n\n - `sip`: all US exchanges\n - `iex`: Investors EXchange\n - `delayed_sip`: SIP with a 15 minute delay\n - `boats`: Blue Ocean, overnight US trading data\n - `overnight`: derived overnight US trading data\n - `otc`: over-the-counter exchanges\n\nDefault: `sip` if the user has the unlimited subscription, otherwise `iex`.\n',
    in: 'query',
    name: 'feed',
    schema: { $ref: '#/components/schemas/stock_latest_feed' },
    required: false,
  },
}).exactOptional()

const StockSymbolParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The symbol to query.',
      example: 'AAPL',
      in: 'path',
      name: 'symbol',
      required: true,
      schema: { type: 'string' },
    },
  })

const StockSymbolsParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'A comma-separated list of stock symbols.',
      example: 'AAPL,TSLA',
      in: 'query',
      name: 'symbols',
      required: true,
      schema: { type: 'string' },
    },
  })

const SymbolParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'A unique series of letters assigned to a security for trading purposes.',
      example: 'AAPL',
      in: 'path',
      name: 'symbol',
      required: true,
      schema: { type: 'string' },
    },
  })

const TimeframeParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'The timeframe represented by each bar in aggregation.\nYou can use any of the following values:\n - `[1-59]Min` or `[1-59]T`, e.g. `5Min` or `5T` creates 5-minute aggregations\n - `[1-23]Hour` or `[1-23]H`, e.g. `12Hour` or `12H` creates 12-hour aggregations\n - `1Day` or `1D` creates 1-day aggregations\n - `1Week` or `1W` creates 1-week aggregations\n - `[1,2,3,4,6,12]Month` or `[1,2,3,4,6,12]M`, e.g. `3Month` or `3M` creates 3-month aggregations\n',
      example: '1Min',
      in: 'query',
      name: 'timeframe',
      required: true,
      schema: { type: 'string' },
    },
  })

const TradeSizeParamsSchema = z
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
      description:
        'Filters to best bid/ask where the minimum trade size is less than or equal to the given numeric value. For any negative value the best bid/ask will be returned for the smallest trade size on either side.\n',
      in: 'query',
      name: 'trade_size',
      required: false,
      schema: { format: 'int32', type: 'integer' },
    },
  })

const BasicAuthSecurityScheme = { scheme: 'basic', type: 'http' }

const ApiKeySecurityScheme = { in: 'header', name: 'APCA-API-KEY-ID', type: 'apiKey' }

const ApiSecretSecurityScheme = { in: 'header', name: 'APCA-API-SECRET-KEY', type: 'apiKey' }

export const getV1beta1EventsCorporateActionsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/events/corporate-actions',
  tags: ['Corporate actions'],
  summary: 'Subscribe to Corporate Actions Events (SSE)',
  description:
    'Server-Sent Events (SSE) stream that delivers every corporate-action mutation (`insert` / `update` / `delete`) across all supported CA types on a single long-lived `text/event-stream` connection. When `since`, `since_id`, or the `Last-Event-Id` reconnect header is provided, historical events are replayed first; otherwise only live events are pushed.\n\nEach event carries an `event_type` discriminator that selects the shape of the `ca` payload -- see the [`corporate_action_event`](#/components/schemas/corporate_action_event) schema for the mapping to each per-type schema. The same underlying data is available on demand via [`GET /v1/corporate-actions`](#operation/CorporateActions).\n',
  operationId: 'SubscribeToCorporateActionsEventsSSE',
  request: {
    query: z.object({
      type: CasEventsTypeParamsSchema,
      region: CasEventsRegionParamsSchema,
      since: CasEventsSinceParamsSchema,
      until: CasEventsUntilParamsSchema,
      since_id: CasEventsSinceIdParamsSchema,
      until_id: CasEventsUntilIdParamsSchema,
    }),
    headers: z.object({ 'Last-Event-Id': CasEventsLastEventIdParamsSchema }),
  },
  responses: {
    200: {
      description:
        'Connected. Corporate-action events will now start streaming as long as you keep the connection open.',
      content: {
        'text/event-stream': {
          schema: z.array(CorporateActionEventSchema),
          examples: {
            CapitalGainsDistribution: {
              summary: 'Capital gains distribution inserted (US)',
              description:
                'Example SSE payload delivered when\n`event_type == capital_gains_distribution_corporateaction_event`.\nCombined long-term + short-term distribution; single-leg events\ncarry only the applicable `long_term_rate` or `short_term_rate`.\n',
              value: [
                {
                  action: 'insert',
                  at: '2026-03-20T18:00:00.000000Z',
                  ca: {
                    currency: 'USD',
                    cusip: '36261K509',
                    ex_date: '2025-12-26',
                    id: '98c905a1-08c7-450c-8669-b8e7aee8b44d',
                    isin: 'US36261K5090',
                    long_term_rate: '0.45855',
                    payable_date: '2026-01-09',
                    process_date: '2026-01-08',
                    record_date: '2025-12-29',
                    short_term_rate: '0.11019',
                    symbol: 'GCAD',
                  },
                  event_id: '01KMAGXP2FCJ4NR1TDX8ZWKR6E',
                  event_type: 'capital_gains_distribution_corporateaction_event',
                  region: 'us',
                },
              ],
            },
            CashDividend: {
              summary: 'Cash dividend inserted (US)',
              description:
                'Example SSE payload delivered when `event_type == cash_dividend_corporateaction_event`.',
              value: [
                {
                  action: 'insert',
                  at: '2026-03-20T12:24:58.807230Z',
                  ca: {
                    currency: 'USD',
                    cusip: '037833100',
                    ex_date: '2026-05-09',
                    foreign: false,
                    id: '1dbc7685-9517-4a77-a236-8527d49cefdc',
                    payable_date: '2026-05-15',
                    process_date: '2026-05-15',
                    rate: '0.24',
                    record_date: '2026-05-12',
                    special: false,
                    symbol: 'AAPL',
                  },
                  event_id: '01J9RPMV5TKB8WX3M4F1KZ7QH2',
                  event_type: 'cash_dividend_corporateaction_event',
                  region: 'us',
                },
              ],
            },
            CashMerger: {
              summary: 'Cash merger inserted (US)',
              description:
                'Example SSE payload delivered when `event_type == cash_merger_corporateaction_event`.',
              value: [
                {
                  action: 'insert',
                  at: '2026-03-20T15:42:11.118274Z',
                  ca: {
                    acquiree_cusip: '90184L102',
                    acquiree_symbol: 'TWTR',
                    acquirer_cusip: '912656104',
                    acquirer_symbol: 'X',
                    currency: 'USD',
                    effective_date: '2026-04-01',
                    id: 'f8489167-4e4b-431d-a0be-6017ae1cf08a',
                    payable_date: '2026-04-05',
                    process_date: '2026-04-01',
                    rate: '54.20',
                  },
                  event_id: '01J9RQ5HNZQK7M3RDVJ8XBPCT1',
                  event_type: 'cash_merger_corporateaction_event',
                  region: 'us',
                },
              ],
            },
            EquityPartialCall: {
              summary: 'Equity partial call inserted (US)',
              description:
                'Example SSE payload delivered when `event_type == equity_partial_call_corporateaction_event`.',
              value: [
                {
                  action: 'insert',
                  at: '2026-03-19T23:26:46.853262Z',
                  ca: {
                    currency: 'USD',
                    cusip: '123456789',
                    id: 'b2f8b1a4-4c4a-4e8e-9c9a-1f3b8a7c5d6e',
                    lottery_date: '2026-06-08',
                    lottery_type: 'original',
                    payable_date: '2026-06-15',
                    price: '25.00',
                    process_date: '2026-06-10',
                    record_date: '2026-06-05',
                    results_publication_date: '2026-06-09',
                    symbol: 'EXMP',
                  },
                  event_id: '01J9RSGD8JR2A4K7MZNTPVQ5XW',
                  event_type: 'equity_partial_call_corporateaction_event',
                  region: 'us',
                },
              ],
            },
            ForwardSplit: {
              summary: 'Forward split updated (US)',
              description:
                'Example SSE payload delivered when `event_type == forward_split_corporateaction_event`.',
              value: [
                {
                  action: 'update',
                  at: '2026-03-19T22:50:11.729329Z',
                  ca: {
                    currency: 'USD',
                    cusip: '67066G104',
                    ex_date: '2026-06-10',
                    id: '78467a10-9aa2-4222-8927-abcdef012345',
                    new_rate: '10',
                    old_rate: '1',
                    payable_date: '2026-06-09',
                    process_date: '2026-06-07',
                    record_date: '2026-06-06',
                    symbol: 'NVDA',
                  },
                  event_id: '01KM5CDQXQAE67Z5NHCJZHQ5XV',
                  event_type: 'forward_split_corporateaction_event',
                  region: 'us',
                },
              ],
            },
            NameChange: {
              summary: 'Name change inserted (US)',
              description:
                'Example SSE payload delivered when `event_type == name_change_corporateaction_event`.',
              value: [
                {
                  action: 'insert',
                  at: '2026-03-20T00:15:42.318901Z',
                  ca: {
                    currency: 'USD',
                    id: 'c1a2b3c4-d5e6-4f78-8912-abcdef012345',
                    new_cusip: '30303M102',
                    new_symbol: 'META',
                    old_cusip: '30303M102',
                    old_symbol: 'FB',
                    process_date: '2026-06-09',
                  },
                  event_id: '01KM5CDZN6KX5V8WQ8KXDH917J',
                  event_type: 'name_change_corporateaction_event',
                  region: 'us',
                },
              ],
            },
            Redemption: {
              summary: 'Redemption inserted (US)',
              description:
                'Example SSE payload delivered when `event_type == redemption_corporateaction_event`.',
              value: [
                {
                  action: 'insert',
                  at: '2026-03-20T12:24:52.325158Z',
                  ca: {
                    currency: 'USD',
                    cusip: '987654321',
                    id: '4e5f6a7b-8c9d-4e01-a234-56789abcdef0',
                    payable_date: '2026-07-03',
                    process_date: '2026-07-01',
                    rate: '10.00',
                    symbol: 'XYZ',
                  },
                  event_id: '01J9RVB6Y4ZK8M3N7QD2WX1RFP',
                  event_type: 'redemption_corporateaction_event',
                  region: 'us',
                },
              ],
            },
            Reorganization: {
              summary: 'Reorganization inserted (US)',
              description:
                'Example SSE payload delivered when `event_type == reorganization_corporateaction_event`.',
              value: [
                {
                  action: 'insert',
                  at: '2026-03-20T13:12:03.500000Z',
                  ca: {
                    cash_rate: '5.00',
                    currency: 'USD',
                    cusip: '111222333',
                    effective_date: '2026-08-15',
                    id: '6a7b8c9d-0e1f-4234-5678-90abcdef1234',
                    payable_date: '2026-08-20',
                    process_date: '2026-08-15',
                    stock_movements: [
                      { cusip: '444555666', new_rate: '1', source_rate: '10', symbol: 'NEWCO' },
                    ],
                    symbol: 'OLDCO',
                  },
                  event_id: '01KM5CE7CNA84WKP9M7T9BM2EX',
                  event_type: 'reorganization_corporateaction_event',
                  region: 'us',
                },
              ],
            },
            ReverseSplit: {
              summary: 'Reverse split inserted (non-US)',
              description:
                'Example SSE payload delivered when `event_type == reverse_split_corporateaction_event`.',
              value: [
                {
                  action: 'insert',
                  at: '2026-03-20T14:00:00.000000Z',
                  ca: {
                    currency: 'GBP',
                    ex_date: '2026-09-01',
                    id: '7b8c9d0e-1f23-4456-7890-abcdef123456',
                    new_cusip: 'G12345679',
                    new_isin: 'GB0001234568',
                    new_rate: '1',
                    old_cusip: 'G12345678',
                    old_isin: 'GB0001234567',
                    old_rate: '20',
                    payable_date: '2026-09-02',
                    process_date: '2026-09-01',
                    record_date: '2026-08-30',
                    symbol: 'EXMP.L',
                  },
                  event_id: '01KM5CEF44KN9DZNWV9NV456V1',
                  event_type: 'reverse_split_corporateaction_event',
                  region: 'non_us',
                },
              ],
            },
            RightsDistribution: {
              summary: 'Rights distribution inserted (US)',
              description:
                'Example SSE payload delivered when `event_type == rights_distribution_corporateaction_event`.',
              value: [
                {
                  action: 'insert',
                  at: '2026-03-20T14:30:15.100000Z',
                  ca: {
                    currency: 'USD',
                    ex_date: '2026-05-15',
                    expiration_date: '2026-06-15',
                    id: '8c9d0e1f-2345-4678-9012-abcdef234567',
                    new_cusip: '123456790',
                    new_symbol: 'EXMPR',
                    payable_date: '2026-05-22',
                    process_date: '2026-05-20',
                    rate: '0.25',
                    record_date: '2026-05-18',
                    source_cusip: '123456789',
                    source_symbol: 'EXMP',
                  },
                  event_id: '01KM5CEPVKF869Z7RD7EJNP360',
                  event_type: 'rights_distribution_corporateaction_event',
                  region: 'us',
                },
              ],
            },
            SpinOff: {
              summary: 'Spin-off updated (US)',
              description:
                'Example SSE payload delivered when `event_type == spin_off_corporateaction_event`.',
              value: [
                {
                  action: 'update',
                  at: '2026-03-20T15:00:22.220000Z',
                  ca: {
                    currency: 'USD',
                    ex_date: '2026-04-08',
                    id: '9d0e1f23-4567-4890-1234-abcdef345678',
                    new_cusip: '9344D2109',
                    new_rate: '0.241917',
                    new_symbol: 'WBD',
                    payable_date: '2026-04-11',
                    process_date: '2026-04-08',
                    record_date: '2026-04-05',
                    source_cusip: '00206R102',
                    source_rate: '1',
                    source_symbol: 'T',
                  },
                  event_id: '01KM5CEYK2TRA4S2456P21NJZ0',
                  event_type: 'spin_off_corporateaction_event',
                  region: 'us',
                },
              ],
            },
            StockAndCashMerger: {
              summary: 'Stock-and-cash merger inserted (US)',
              description:
                'Example SSE payload delivered when `event_type == stock_and_cash_merger_corporateaction_event`.',
              value: [
                {
                  action: 'insert',
                  at: '2026-03-20T15:30:45.300000Z',
                  ca: {
                    acquiree_cusip: '35137L204',
                    acquiree_rate: '1',
                    acquiree_symbol: 'FOXA',
                    acquirer_cusip: '254687106',
                    acquirer_rate: '0.35',
                    acquirer_symbol: 'DIS',
                    cash_rate: '10.00',
                    currency: 'USD',
                    effective_date: '2026-05-01',
                    id: '0e1f2345-6789-4a01-b234-cdef56789012',
                    payable_date: '2026-05-05',
                    process_date: '2026-05-01',
                  },
                  event_id: '01KM5CF6AHE2DGEP087XGX6XDW',
                  event_type: 'stock_and_cash_merger_corporateaction_event',
                  region: 'us',
                },
              ],
            },
            StockDividend: {
              summary: 'Stock dividend inserted (US)',
              description:
                'Example SSE payload delivered when `event_type == stock_dividend_corporateaction_event`.',
              value: [
                {
                  action: 'insert',
                  at: '2026-03-20T16:00:00.400000Z',
                  ca: {
                    currency: 'USD',
                    cusip: '123456789',
                    ex_date: '2026-05-28',
                    id: '1f234567-89ab-4c01-d234-ef5678901234',
                    payable_date: '2026-06-01',
                    process_date: '2026-06-01',
                    rate: '0.05',
                    record_date: '2026-05-30',
                    symbol: 'EXMP',
                  },
                  event_id: '01KM5CFE200AT1VX7S34MY33YT',
                  event_type: 'stock_dividend_corporateaction_event',
                  region: 'us',
                },
              ],
            },
            StockMerger: {
              summary: 'Stock merger inserted (US)',
              description:
                'Example SSE payload delivered when `event_type == stock_merger_corporateaction_event`.',
              value: [
                {
                  action: 'insert',
                  at: '2026-03-20T16:30:11.500000Z',
                  ca: {
                    acquiree_cusip: '555666777',
                    acquiree_rate: '1',
                    acquiree_symbol: 'SMLCO',
                    acquirer_cusip: '222333444',
                    acquirer_rate: '0.75',
                    acquirer_symbol: 'BIGCO',
                    currency: 'USD',
                    effective_date: '2026-07-15',
                    id: '23456789-abcd-4e01-f234-567890123456',
                    payable_date: '2026-07-18',
                    process_date: '2026-07-15',
                  },
                  event_id: '01KM5CFNSFKSQR5SAEEJ783SWY',
                  event_type: 'stock_merger_corporateaction_event',
                  region: 'us',
                },
              ],
            },
            UnitSplit: {
              summary: 'Unit split inserted (US)',
              description:
                'Example SSE payload delivered when `event_type == unit_split_corporateaction_event`.',
              value: [
                {
                  action: 'insert',
                  at: '2026-03-20T17:00:30.600000Z',
                  ca: {
                    alternate_cusip: '888999002',
                    alternate_rate: '0.5',
                    alternate_symbol: 'SPACW',
                    currency: 'USD',
                    effective_date: '2026-08-01',
                    id: '3456789a-bcde-4f01-2345-67890abcdef1',
                    new_cusip: '888999001',
                    new_rate: '1',
                    new_symbol: 'SPAC',
                    old_cusip: '888999000',
                    old_rate: '1',
                    old_symbol: 'SPACU',
                    payable_date: '2026-08-03',
                    process_date: '2026-08-01',
                  },
                  event_id: '01KM5CFXGY9EYPZRTCVJX88FQ8',
                  event_type: 'unit_split_corporateaction_event',
                  region: 'us',
                },
              ],
            },
            WorthlessRemoval: {
              summary: 'Worthless removal deleted (US)',
              description:
                'Example SSE payload delivered when `event_type == worthless_removal_corporateaction_event`.',
              value: [
                {
                  action: 'delete',
                  at: '2026-03-20T17:30:00.700000Z',
                  ca: {
                    currency: 'USD',
                    cusip: '777888999',
                    id: '456789ab-cdef-4012-3456-7890abcdef12',
                    process_date: '2026-09-15',
                    symbol: 'DEADCO',
                  },
                  event_id: '01KM5CG58DTRZ8RKZY3KNYMN3D',
                  event_type: 'worthless_removal_corporateaction_event',
                  region: 'us',
                },
              ],
            },
          },
        },
      },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
  servers: [
    { description: 'Production', url: 'https://stream.data.alpaca.markets' },
    { description: 'Sandbox', url: 'https://stream.data.sandbox.alpaca.markets' },
    { description: 'Staging', url: 'https://stream.data.staging-v2.tradetalk.us' },
  ],
})

export const getV1beta1FixedIncomeLatestPricesRoute = createRoute({
  method: 'get',
  path: '/v1beta1/fixed_income/latest/prices',
  tags: ['Fixed income'],
  summary: 'Latest prices',
  description: 'This endpoint returns the latest prices for the given fixed income securities.\n',
  operationId: 'FixedIncomeLatestPrices',
  request: { query: z.object({ isins: IsinsParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: FixedIncomeLatestPricesRespSchema,
          examples: {
            prices: {
              value: {
                prices: {
                  US912797KJ59: {
                    p: 99.6459,
                    t: '2025-02-14T20:58:00.648Z',
                    ytm: 4.249,
                    ytw: 4.249,
                  },
                  US912797KS58: {
                    p: 99.3193,
                    t: '2025-02-14T20:58:00.648Z',
                    ytm: 4.2245,
                    ytw: 4.2245,
                  },
                  US912797LB15: {
                    p: 98.9927,
                    t: '2025-02-14T20:58:00.648Z',
                    ytm: 4.2165,
                    ytw: 4.2165,
                  },
                },
              },
            },
          },
        },
      },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV1beta1FixedIncomeLatestQuotesRoute = createRoute({
  method: 'get',
  path: '/v1beta1/fixed_income/latest/quotes',
  tags: ['Fixed income'],
  summary: 'Latest quotes',
  description: 'This endpoint returns the latest quotes for the given fixed income securities.\n',
  operationId: 'FixedIncomeLatestQuotes',
  request: {
    query: z.object({
      isins: z
        .string()
        .openapi({
          param: {
            description: 'A comma-separated list of ISINs with a limit of 100.',
            example: 'US912797SX61,US912810SK51',
            in: 'query',
            name: 'isins',
            required: true,
            schema: { type: 'string' },
          },
        }),
      trade_size: TradeSizeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: FixedIncomeLatestQuotesRespSchema,
          examples: {
            quotes: {
              value: {
                quotes: {
                  US912797SX61: {
                    ams: 1000,
                    ap: 99.91958333,
                    as: 1000000,
                    aytm: 2.226923,
                    aytw: 2.226923,
                    bms: 1000,
                    bp: 99.81091667,
                    bs: 1000000,
                    bytm: 5.236154,
                    bytw: 5.236154,
                    t: '2026-05-21T06:56:01.882466873Z',
                  },
                  US912810SK51: {
                    ams: 1000,
                    ap: 63.06436526,
                    as: 1000000,
                    aytm: 5.08819,
                    aytw: 5.08819,
                    bms: 1000,
                    bp: 60.60009769,
                    bs: 1000000,
                    bytm: 5.338343,
                    bytw: 5.338343,
                    t: '2026-05-21T07:27:53.683424845Z',
                  },
                },
              },
            },
          },
        },
      },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV1beta1LogosSymbolRoute = createRoute({
  method: 'get',
  path: '/v1beta1/logos/{symbol}',
  tags: ['Logos'],
  summary: 'Logos',
  description: 'Get the image of the company logo for the given symbol.',
  operationId: 'Logos',
  request: {
    params: z.object({ symbol: SymbolParamsSchema }),
    query: z.object({
      placeholder: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a placeholder image when no logo is available. Defaults to true.',
            in: 'query',
            name: 'placeholder',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'image/png': { schema: z.string() } },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV1beta1NewsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/news',
  tags: ['News'],
  summary: 'News articles',
  description:
    'Returns the latest news articles across stocks and crypto. By default, returns the latest 10 news articles.\n',
  operationId: 'News',
  request: {
    query: z.object({
      start: StartParamsSchema,
      end: EndParamsSchema,
      sort: NewsSortParamsSchema,
      symbols: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma-separated list of symbols for which to query news.',
            in: 'query',
            name: 'symbols',
            schema: { example: 'AAPL,TSLA,BTCUSD', type: 'string' },
            required: false,
          },
          example: 'AAPL,TSLA,BTCUSD',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit of news items to be returned for a result page.',
            example: 10,
            in: 'query',
            name: 'limit',
            schema: { maximum: 50, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      include_content: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Boolean indicator to include content for news articles (if available).',
            in: 'query',
            name: 'include_content',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      exclude_contentless: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Boolean indicator to exclude news articles that do not contain content.',
            in: 'query',
            name: 'exclude_contentless',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      page_token: PageTokenParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: NewsRespSchema,
          examples: {
            'news-response-example': {
              value: {
                news: [
                  {
                    author: 'Charles Gross',
                    content:
                      '<p>This headline-only article is meant to show you why a stock is moving, the most difficult aspect of stock trading....</p>',
                    created_at: '2021-12-31T11:08:42Z',
                    headline:
                      'Apple Leader in Phone Sales in China for Second Straight Month in November With 23.6% Share, According to Market Research Data',
                    id: 24843171,
                    images: [],
                    source: 'benzinga',
                    summary:
                      'This headline-only article is meant to show you why a stock is moving, the most difficult aspect of stock trading',
                    symbols: ['AAPL'],
                    updated_at: '2021-12-31T11:08:43Z',
                    url: 'https://www.benzinga.com/news/21/12/24843171/apple-leader-in-phone-sales-in-china-for-second-straight-month-in-november-with-23-6-share-according',
                  },
                ],
                next_page_token: 'MTY0MDk0ODkyMzAwMDAwMDAwMHwyNDg0MzE3MQ==',
              },
            },
          },
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    429: _429Response,
    500: _500Response,
  },
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV1beta1OptionsBarsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/options/bars',
  tags: ['Option'],
  summary: 'Historical bars',
  description:
    'The historical option bars API provides aggregates for a list of option symbols between the specified dates.\n\nThe returned results are sorted by symbol first, then by bar timestamp.\nThis means that you are likely to see only one symbol in your first response if there are enough bars for that symbol to hit the limit you requested.\n\nIn these situations, if you keep requesting again with the `next_page_token` from the previous response, you will eventually reach the other symbols if any bars were found for them.',
  operationId: 'optionBars',
  request: {
    query: z.object({
      symbols: OptionSymbolsParamsSchema,
      timeframe: TimeframeParamsSchema,
      start: StartParamsSchema,
      end: EndParamsSchema,
      limit: LimitParamsSchema,
      page_token: PageTokenParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: OptionBarsRespSchema,
          examples: {
            bars: {
              value: {
                bars: {
                  AAPL240419P00140000: [
                    {
                      c: 0.34,
                      h: 0.38,
                      l: 0.34,
                      n: 7,
                      o: 0.38,
                      t: '2024-01-18T05:00:00Z',
                      v: 12,
                      vw: 0.3525,
                    },
                  ],
                },
                next_page_token: 'QUFQTHxNfDIwMjItMDEtMDNUMDk6MDA6MDAuMDAwMDAwMDAwWg==',
              },
            },
          },
        },
      },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV1beta1OptionsMetaConditionsTicktypeRoute = createRoute({
  method: 'get',
  path: '/v1beta1/options/meta/conditions/{ticktype}',
  tags: ['Option'],
  summary: 'Condition codes',
  description: 'Returns the mapping between the condition codes and names.',
  operationId: 'OptionMetaConditions',
  request: {
    params: z.object({
      ticktype: z
        .enum(['trade', 'quote'])
        .openapi({
          param: {
            description: 'The type of ticks.',
            in: 'path',
            name: 'ticktype',
            required: true,
            schema: { enum: ['trade', 'quote'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: OptionConditionsSchema } },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV1beta1OptionsMetaExchangesRoute = createRoute({
  method: 'get',
  path: '/v1beta1/options/meta/exchanges',
  tags: ['Option'],
  summary: 'Exchange codes',
  description:
    'Returns the mapping between the option exchange codes and the corresponding exchange names.',
  operationId: 'OptionMetaExchanges',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: OptionExchangesSchema } },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV1beta1OptionsQuotesLatestRoute = createRoute({
  method: 'get',
  path: '/v1beta1/options/quotes/latest',
  tags: ['Option'],
  summary: 'Latest quotes',
  description:
    'The latest multi-quotes endpoint provides the latest bid and ask prices for each given contract symbol.\n',
  operationId: 'OptionLatestQuotes',
  request: {
    query: z.object({ symbols: OptionSymbolsParamsSchema, feed: OptionFeedParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: OptionLatestQuotesRespSchema,
          examples: {
            quotes: {
              value: {
                quotes: {
                  AAPL240419P00140000: {
                    ap: 0.16,
                    as: 669,
                    ax: 'w',
                    bp: 0.15,
                    bs: 164,
                    bx: 'W',
                    c: 'A',
                    t: '2024-02-28T15:30:28.046330624Z',
                  },
                  AAPL250321C00190000: {
                    ap: 17,
                    as: 622,
                    ax: 'X',
                    bp: 16.75,
                    bs: 368,
                    bx: 'X',
                    c: ' ',
                    t: '2024-02-28T15:47:13.663636224Z',
                  },
                },
              },
            },
          },
        },
      },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV1beta1OptionsSnapshotsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/options/snapshots',
  tags: ['Option'],
  summary: 'Snapshots',
  description:
    'The snapshots endpoint provides the latest trade, latest quote and greeks for each given contract symbol.\n',
  operationId: 'OptionSnapshots',
  request: {
    query: z.object({
      symbols: OptionSymbolsParamsSchema,
      feed: OptionFeedParamsSchema,
      updated_since: OptionUpdatedSinceParamsSchema,
      limit: OptionLimitParamsSchema,
      page_token: PageTokenParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: OptionSnapshotsRespSchema,
          examples: {
            snapshots: {
              value: {
                next_page_token: 'QUFQTDI0MDYyMTAwMDIyMHwx',
                snapshots: {
                  AAPL240426C00162500: {
                    greeks: {
                      delta: 0.7521304109871954,
                      gamma: 0.06241426404871288,
                      rho: 0.009910739032549095,
                      theta: -0.2847623059595503,
                      vega: 0.047540520834498785,
                    },
                    impliedVolatility: 0.3372405712050441,
                    latestQuote: {
                      ap: 4.3,
                      as: 91,
                      ax: 'B',
                      bp: 4.15,
                      bs: 16,
                      bx: 'C',
                      c: 'A',
                      t: '2024-04-22T19:59:59.992734208Z',
                    },
                    latestTrade: {
                      c: 'I',
                      p: 4.1,
                      s: 1,
                      t: '2024-04-22T19:57:32.589554432Z',
                      x: 'A',
                    },
                  },
                },
              },
            },
          },
        },
      },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV1beta1OptionsSnapshotsUnderlyingSymbolRoute = createRoute({
  method: 'get',
  path: '/v1beta1/options/snapshots/{underlying_symbol}',
  tags: ['Option'],
  summary: 'Option chain',
  description:
    'The option chain endpoint provides the latest trade, latest quote, and greeks for each contract symbol of the underlying symbol.\n',
  operationId: 'OptionChain',
  request: {
    params: z.object({ underlying_symbol: OptionUnderlyingSymbolParamsSchema }),
    query: z.object({
      feed: OptionFeedParamsSchema,
      limit: OptionLimitParamsSchema,
      updated_since: OptionUpdatedSinceParamsSchema,
      page_token: PageTokenParamsSchema,
      type: z
        .enum(['call', 'put'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter contracts by the type (call or put).',
            in: 'query',
            name: 'type',
            schema: { enum: ['call', 'put'], type: 'string' },
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
          z.float64(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter contracts with strike price greater than or equal to the specified value.',
            in: 'query',
            name: 'strike_price_gte',
            schema: { format: 'double', type: 'number' },
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
          z.float64(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter contracts with strike price less than or equal to the specified value.',
            in: 'query',
            name: 'strike_price_lte',
            schema: { format: 'double', type: 'number' },
            required: false,
          },
        }),
      expiration_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter contracts by the exact expiration date (format: YYYY-MM-DD).',
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
              'Filter contracts with expiration date less than or equal to the specified date.',
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
            example: 'AAPL1',
            in: 'query',
            name: 'root_symbol',
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
          schema: OptionSnapshotsRespSchema,
          examples: {
            snapshots: {
              value: {
                next_page_token: 'QUFQTDI0MDYyMTAwMDIyMHwx',
                snapshots: {
                  AAPL240426C00162500: {
                    greeks: {
                      delta: 0.7521304109871954,
                      gamma: 0.06241426404871288,
                      rho: 0.009910739032549095,
                      theta: -0.2847623059595503,
                      vega: 0.047540520834498785,
                    },
                    impliedVolatility: 0.3372405712050441,
                    latestQuote: {
                      ap: 4.3,
                      as: 91,
                      ax: 'B',
                      bp: 4.15,
                      bs: 16,
                      bx: 'C',
                      c: 'A',
                      t: '2024-04-22T19:59:59.992734208Z',
                    },
                    latestTrade: {
                      c: 'I',
                      p: 4.1,
                      s: 1,
                      t: '2024-04-22T19:57:32.589554432Z',
                      x: 'A',
                    },
                  },
                },
              },
            },
          },
        },
      },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV1beta1OptionsTradesRoute = createRoute({
  method: 'get',
  path: '/v1beta1/options/trades',
  tags: ['Option'],
  summary: 'Historical trades',
  description:
    'The historical option trades API provides trade data for a list of contract symbols between the specified dates.\n\nThe returned results are sorted by symbol first then by trade timestamp.\nThis means that you are likely to see only one symbol in your first response if there are enough trades for that symbol to hit the limit you requested.\n\nIn these situations, if you keep requesting again with the `next_page_token` from the previous response, you will eventually reach the other symbols if any trades were found for them.',
  operationId: 'OptionTrades',
  request: {
    query: z.object({
      symbols: OptionSymbolsParamsSchema,
      start: StartParamsSchema,
      end: EndParamsSchema,
      limit: LimitParamsSchema,
      page_token: PageTokenParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: OptionTradesRespSchema,
          examples: {
            trades: {
              value: {
                next_page_token:
                  'QUFQTHwyMDIyLTAxLTAzVDA5OjAwOjAwLjI0NDgzOTY4MFp8UHwwOTIyMzM3MjAzNjg1NDc3NTgxMA==',
                trades: {
                  AAPL240112C00182500: [
                    { c: 'I', p: 0.37, s: 1, t: '2024-01-18T15:03:44.56339456Z', x: 'B' },
                    { c: 'g', p: 0.34, s: 1, t: '2024-01-18T16:02:38.994758144Z', x: 'C' },
                  ],
                },
              },
            },
          },
        },
      },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV1beta1OptionsTradesLatestRoute = createRoute({
  method: 'get',
  path: '/v1beta1/options/trades/latest',
  tags: ['Option'],
  summary: 'Latest trades',
  description:
    'The latest multi-trades endpoint provides the latest historical trade data for multiple given contract symbols.\n',
  operationId: 'OptionLatestTrades',
  request: {
    query: z.object({ symbols: OptionSymbolsParamsSchema, feed: OptionFeedParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: OptionLatestTradesRespSchema,
          examples: {
            trades: {
              value: {
                trades: {
                  AAPL250321C00190000: {
                    c: 'e',
                    p: 17.15,
                    s: 900,
                    t: '2024-02-28T15:26:12.728701696Z',
                    x: 'B',
                  },
                },
              },
            },
          },
        },
      },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV1beta1ScreenerMarketTypeMoversRoute = createRoute({
  method: 'get',
  path: '/v1beta1/screener/{market_type}/movers',
  tags: ['Screener'],
  summary: 'Top market movers',
  description:
    "Returns the top market movers (gainers and losers) based on real time SIP data.\nThe change for each symbol is calculated from the previous closing price and the latest closing price.\n\nFor stocks, the endpoint resets at market open. Until then, it shows the previous market day's movers.\nThe data is split-adjusted. Only tradable symbols in exchanges are included.\n\nFor crypto, the endpoint resets at midnight.",
  operationId: 'Movers',
  request: {
    params: z.object({ market_type: MoversMarketTypeParamsSchema }),
    query: z.object({ top: MoversTopParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: MoversRespSchema,
          examples: {
            movers: {
              value: {
                gainers: [
                  { change: 2.46, percent_change: 145.56, price: 4.15, symbol: 'AGRI' },
                  { change: 0.03, percent_change: 85.63, price: 0.0594, symbol: 'GRCYW' },
                ],
                last_updated: '2022-03-10T17:53:30.088309839Z',
                losers: [
                  { change: -0.26, percent_change: -63.07, price: 0.1502, symbol: 'MTACW' },
                  { change: -3.61, percent_change: -51.21, price: 3.435, symbol: 'TIG' },
                ],
                market_type: 'stocks',
              },
            },
          },
        },
      },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV1beta1ScreenerStocksMostActivesRoute = createRoute({
  method: 'get',
  path: '/v1beta1/screener/stocks/most-actives',
  tags: ['Screener'],
  summary: 'Most active stocks',
  description:
    'Returns the most active stocks by volume or trade count based on real time SIP data. By default, returns the top 10 symbols by volume.\n',
  operationId: 'MostActives',
  request: { query: z.object({ by: MostActivesByParamsSchema, top: MostActivesTopParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: MostActivesRespSchema } },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV1beta3CryptoLocBarsRoute = createRoute({
  method: 'get',
  path: '/v1beta3/crypto/{loc}/bars',
  tags: ['Crypto'],
  summary: 'Historical bars',
  description:
    'The crypto bars API provides historical aggregates for a list of crypto symbols between the specified dates.\n',
  operationId: 'CryptoBars',
  request: {
    params: z.object({ loc: CryptoHistoricalLocParamsSchema }),
    query: z.object({
      symbols: CryptoSymbolsParamsSchema,
      timeframe: TimeframeParamsSchema,
      start: StartParamsSchema,
      end: EndParamsSchema,
      limit: LimitParamsSchema,
      page_token: PageTokenParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CryptoBarsRespSchema,
          examples: {
            bars: {
              value: {
                bars: {
                  'BTC/USD': [
                    {
                      c: 29003,
                      h: 29003,
                      l: 28999,
                      n: 4,
                      o: 28999,
                      t: '2022-05-27T10:18:00Z',
                      v: 0.01,
                      vw: 29001,
                    },
                  ],
                },
                next_page_token: 'MTY0MDk0ODkyMzAwMDAwMDAwMHwyNDg0MzE3MQ==',
              },
            },
          },
        },
      },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV1beta3CryptoLocLatestBarsRoute = createRoute({
  method: 'get',
  path: '/v1beta3/crypto/{loc}/latest/bars',
  tags: ['Crypto'],
  summary: 'Latest bars',
  description:
    'The latest multi-bars endpoint returns the latest minute-aggregated historical bar data for each of the crypto symbols provided.\n',
  operationId: 'CryptoLatestBars',
  request: {
    params: z.object({ loc: CryptoLatestLocParamsSchema }),
    query: z.object({ symbols: CryptoSymbolsParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CryptoLatestBarsRespSchema,
          examples: {
            bars: {
              value: {
                bars: {
                  'BTC/USD': {
                    c: 29003,
                    h: 29003,
                    l: 28999,
                    n: 4,
                    o: 28999,
                    t: '2022-05-27T10:18:00Z',
                    v: 0.01,
                    vw: 29001,
                  },
                },
              },
            },
          },
        },
      },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV1beta3CryptoLocLatestOrderbooksRoute = createRoute({
  method: 'get',
  path: '/v1beta3/crypto/{loc}/latest/orderbooks',
  tags: ['Crypto'],
  summary: 'Latest orderbook',
  description:
    'The latest orderbook endpoint returns the latest bid and ask orderbook for the crypto symbols provided.\n',
  operationId: 'CryptoLatestOrderbooks',
  request: {
    params: z.object({ loc: CryptoLatestLocParamsSchema }),
    query: z.object({ symbols: CryptoSymbolsParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CryptoLatestOrderbooksRespSchema,
          examples: {
            orderbooks: {
              value: {
                orderbooks: {
                  'BTC/USD': {
                    a: [
                      { p: 20902, s: 0.0097 },
                      { p: 21444, s: 0 },
                    ],
                    b: [
                      { p: 20846, s: 0.1902 },
                      { p: 20350, s: 0 },
                    ],
                    t: '2022-06-24T08:00:14.137774336Z',
                  },
                },
              },
            },
          },
        },
      },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV1beta3CryptoLocLatestQuotesRoute = createRoute({
  method: 'get',
  path: '/v1beta3/crypto/{loc}/latest/quotes',
  tags: ['Crypto'],
  summary: 'Latest quotes',
  description:
    'The latest quotes endpoint returns the latest bid and ask prices for the crypto symbols provided.\n',
  operationId: 'CryptoLatestQuotes',
  request: {
    params: z.object({ loc: CryptoLatestLocParamsSchema }),
    query: z.object({ symbols: CryptoSymbolsParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CryptoLatestQuotesRespSchema,
          examples: {
            quotes: {
              value: {
                quotes: {
                  'BTC/USD': {
                    ap: 29059,
                    as: 3.252,
                    bp: 29058,
                    bs: 0.3544,
                    t: '2022-05-26T11:47:18.44347136Z',
                  },
                  'ETH/USD': {
                    ap: 1817.7,
                    as: 6.137,
                    bp: 1817,
                    bs: 4.76,
                    t: '2022-05-26T11:47:18.499478272Z',
                  },
                },
              },
            },
          },
        },
      },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV1beta3CryptoLocLatestTradesRoute = createRoute({
  method: 'get',
  path: '/v1beta3/crypto/{loc}/latest/trades',
  tags: ['Crypto'],
  summary: 'Latest trades',
  description:
    'The latest trades endpoint returns the latest trade data for the crypto symbols provided.\n',
  operationId: 'CryptoLatestTrades',
  request: {
    params: z.object({ loc: CryptoLatestLocParamsSchema }),
    query: z.object({ symbols: CryptoSymbolsParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CryptoLatestTradesRespSchema,
          examples: {
            trades: {
              value: {
                trades: {
                  'BTC/USD': {
                    i: 31455289,
                    p: 29791,
                    s: 0.0016,
                    t: '2022-05-18T12:01:00.537052Z',
                    tks: 'S',
                  },
                  'ETH/USD': {
                    i: 31455287,
                    p: 2027.6,
                    s: 0.06,
                    t: '2022-05-18T12:01:00.363547Z',
                    tks: 'S',
                  },
                },
              },
            },
          },
        },
      },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV1beta3CryptoLocQuotesRoute = createRoute({
  method: 'get',
  path: '/v1beta3/crypto/{loc}/quotes',
  tags: ['Crypto'],
  summary: 'Historical quotes',
  description:
    'The crypto quotes API provides historical quote data for a list of crypto symbols between the specified dates.\nThe oldest date to retrieve historical quotes of us-1 location is 14th October, 2025 12AM UTC.',
  operationId: 'CryptoQuotes',
  request: {
    params: z.object({ loc: CryptoHistoricalLocParamsSchema }),
    query: z.object({
      symbols: CryptoSymbolsParamsSchema,
      start: StartParamsSchema,
      end: EndParamsSchema,
      limit: LimitParamsSchema,
      page_token: PageTokenParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CryptoQuotesRespSchema,
          examples: {
            quotes: {
              value: {
                next_page_token: 'MTY1MzU2NzYzODQ5OTQ3ODI3Mnwx',
                quotes: {
                  'BTC/USD': [
                    {
                      ap: 29059,
                      as: 3.252,
                      bp: 29058,
                      bs: 0.3544,
                      t: '2022-05-26T11:47:18.44347136Z',
                    },
                  ],
                  'ETH/USD': [
                    {
                      ap: 1817.7,
                      as: 6.137,
                      bp: 1817,
                      bs: 4.76,
                      t: '2022-05-26T11:47:18.499478272Z',
                    },
                  ],
                },
              },
            },
          },
        },
      },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV1beta3CryptoLocSnapshotsRoute = createRoute({
  method: 'get',
  path: '/v1beta3/crypto/{loc}/snapshots',
  tags: ['Crypto'],
  summary: 'Snapshots',
  description:
    'The snapshots endpoint returns the latest trade, latest quote, latest minute bar, latest daily bar, and previous daily bar data for crypto symbols.\n',
  operationId: 'CryptoSnapshots',
  request: {
    params: z.object({ loc: CryptoLatestLocParamsSchema }),
    query: z.object({ symbols: CryptoSymbolsParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CryptoSnapshotsRespSchema,
          examples: {
            snapshots: {
              value: {
                snapshots: {
                  'BTC/USD': {
                    dailyBar: {
                      c: 31744,
                      h: 31807,
                      l: 31416,
                      n: 438,
                      o: 31660,
                      t: '2022-05-31T05:00:00Z',
                      v: 67.3518,
                      vw: 31582.7034526175,
                    },
                    latestQuote: {
                      ap: 31742,
                      as: 0.395,
                      bp: 31741,
                      bs: 0.395,
                      t: '2022-05-31T11:55:58.507608832Z',
                    },
                    latestTrade: {
                      i: 32396097,
                      p: 31744,
                      s: 0.0543,
                      t: '2022-05-31T11:53:45.027481Z',
                      tks: 'B',
                    },
                    minuteBar: {
                      c: 31744,
                      h: 31744,
                      l: 31744,
                      n: 2,
                      o: 31744,
                      t: '2022-05-31T11:53:00Z',
                      v: 0.0886,
                      vw: 31744,
                    },
                    prevDailyBar: {
                      c: 31649,
                      h: 32251,
                      l: 30251,
                      n: 8221,
                      o: 30310,
                      t: '2022-05-30T05:00:00Z',
                      v: 1856.4065,
                      vw: 30877.2751897281,
                    },
                  },
                },
              },
            },
          },
        },
      },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV1beta3CryptoLocTradesRoute = createRoute({
  method: 'get',
  path: '/v1beta3/crypto/{loc}/trades',
  tags: ['Crypto'],
  summary: 'Historical trades',
  description:
    'The crypto trades API provides historical trade data for a list of crypto symbols between the specified dates.\n',
  operationId: 'CryptoTrades',
  request: {
    params: z.object({ loc: CryptoHistoricalLocParamsSchema }),
    query: z.object({
      symbols: CryptoSymbolsParamsSchema,
      start: StartParamsSchema,
      end: EndParamsSchema,
      limit: LimitParamsSchema,
      page_token: PageTokenParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CryptoTradesRespSchema,
          examples: {
            trades: {
              value: {
                next_page_token: 'MTY1MzA1MDgwMDAwMDAwMDAwMHwzMTQ1NTI4OQ==',
                trades: {
                  'BTC/USD': [
                    {
                      i: 31455289,
                      p: 29791,
                      s: 0.0016,
                      t: '2022-05-18T12:01:00.537052Z',
                      tks: 'S',
                    },
                  ],
                  'ETH/USD': [
                    { i: 31455287, p: 2027.6, s: 0.06, t: '2022-05-18T12:01:00.363547Z', tks: 'S' },
                    {
                      i: 31455288,
                      p: 2027.6,
                      s: 0.136,
                      t: '2022-05-18T12:01:00.363547Z',
                      tks: 'S',
                    },
                  ],
                },
              },
            },
          },
        },
      },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV1CorporateActionsRoute = createRoute({
  method: 'get',
  path: '/v1/corporate-actions',
  tags: ['Corporate actions'],
  summary: 'Corporate actions',
  description:
    'This endpoint provides data about the corporate actions for each given symbol over a specified time period.\n\nBy default (`data_quality=complete`), corporate actions that are still incomplete (for example, missing required fields such as ex-date or CUSIP/ISIN) and have not yet been processed are excluded from the response. Pass `data_quality=all` to also receive those early, incomplete records. Already-processed corporate actions are always returned when `data_quality=complete`, even if they would otherwise be considered incomplete.\n\n> ⚠️ Warning\n>\n> Currently Alpaca has no guarantees on the creation time of corporate actions. There may be delays in receiving corporate actions from our data providers, and there may be delays in processing and making them available via this API. As a result, corporate actions may not be available immediately after they are announced.\n',
  operationId: 'CorporateActions',
  request: {
    query: z.object({
      symbols: CasSymbolsParamsSchema,
      cusips: CasCusipsParamsSchema,
      types: CasTypesParamsSchema,
      region: CasRegionParamsSchema,
      start: CasStartParamsSchema,
      end: CasEndParamsSchema,
      ids: CasIdsParamsSchema,
      limit: CasLimitParamsSchema,
      data_quality: CasDataQualityParamsSchema,
      page_token: PageTokenParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CorporateActionsRespSchema } },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV2StocksSymbolAuctionsRoute = createRoute({
  method: 'get',
  path: '/v2/stocks/{symbol}/auctions',
  tags: ['Stock'],
  summary: 'Historical auctions (single)',
  description:
    'The historical auctions endpoint provides auction prices for the given stock symbol between the specified dates.\n',
  operationId: 'StockAuctionSingle',
  request: {
    params: z.object({ symbol: StockSymbolParamsSchema }),
    query: z.object({
      start: StartParamsSchema,
      end: EndParamsSchema,
      limit: LimitParamsSchema,
      asof: StockAsofParamsSchema,
      feed: StockAuctionFeedParamsSchema,
      currency: StockCurrencyParamsSchema,
      page_token: PageTokenParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: StockAuctionsRespSingleSchema,
          examples: {
            auctions: {
              value: {
                auctions: [
                  {
                    c: [{ c: 'M', p: 221.7, t: '2022-10-13T20:00:00.152902912Z', x: 'P' }],
                    d: '2022-10-13',
                    o: [
                      { c: 'Q', p: 208.37, t: '2022-10-13T13:30:00.068034304Z', x: 'P' },
                      { c: 'O', p: 208.49, t: '2022-10-13T13:30:01.079567733Z', x: 'Q' },
                      { c: 'Q', p: 208.49, t: '2022-10-13T13:30:01.090802222Z', x: 'Q' },
                    ],
                  },
                ],
                next_page_token: 'MjAyMi0xMC0xM1QyMDowMDowMC4xNTI5MDI5MTJafFA=',
                symbol: 'TSLA',
              },
            },
          },
        },
      },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV2StocksSymbolBarsRoute = createRoute({
  method: 'get',
  path: '/v2/stocks/{symbol}/bars',
  tags: ['Stock'],
  summary: 'Historical bars (single symbol)',
  description:
    'The historical stock bars API provides aggregates for the stock symbol between the specified dates.',
  operationId: 'StockBarSingle',
  request: {
    params: z.object({ symbol: StockSymbolParamsSchema }),
    query: z.object({
      timeframe: TimeframeParamsSchema,
      start: StartParamsSchema,
      end: EndParamsSchema,
      limit: LimitParamsSchema,
      adjustment: StockAdjustmentParamsSchema,
      asof: StockAsofParamsSchema,
      feed: StockHistoricalFeedParamsSchema,
      currency: StockCurrencyParamsSchema,
      page_token: PageTokenParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: StockBarsRespSingleSchema,
          examples: {
            bars: {
              value: {
                bars: [
                  {
                    c: 178.21,
                    h: 178.26,
                    l: 178.21,
                    n: 65,
                    o: 178.26,
                    t: '2022-01-03T09:00:00Z',
                    v: 1118,
                    vw: 178.235733,
                  },
                ],
                next_page_token: 'QUFQTHxNfDIwMjItMDEtMDNUMDk6MDA6MDAuMDAwMDAwMDAwWg==',
                symbol: 'AAPL',
              },
            },
          },
        },
      },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV2StocksSymbolBarsLatestRoute = createRoute({
  method: 'get',
  path: '/v2/stocks/{symbol}/bars/latest',
  tags: ['Stock'],
  summary: 'Latest bar (single symbol)',
  description:
    'The latest bar endpoint returns the latest minute bar for the given ticker symbol.\n',
  operationId: 'StockLatestBarSingle',
  request: {
    params: z.object({ symbol: StockSymbolParamsSchema }),
    query: z.object({ feed: StockLatestFeedParamsSchema, currency: StockCurrencyParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: StockLatestBarsRespSingleSchema,
          examples: {
            bar: {
              value: {
                bar: {
                  c: 173,
                  h: 173.04,
                  l: 172.98,
                  n: 49,
                  o: 172.98,
                  t: '2022-08-17T09:07:00Z',
                  v: 2748,
                  vw: 173.007817,
                },
                symbol: 'AAPL',
              },
            },
          },
        },
      },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV2StocksSymbolQuotesRoute = createRoute({
  method: 'get',
  path: '/v2/stocks/{symbol}/quotes',
  tags: ['Stock'],
  summary: 'Historical quotes (single symbol)',
  description:
    'The historical stock quotes API provides quote data for a stock symbol between the specified dates.',
  operationId: 'StockQuoteSingle',
  request: {
    params: z.object({ symbol: StockSymbolParamsSchema }),
    query: z.object({
      start: StartParamsSchema,
      end: EndParamsSchema,
      limit: LimitParamsSchema,
      asof: StockAsofParamsSchema,
      feed: StockHistoricalFeedParamsSchema,
      currency: StockCurrencyParamsSchema,
      page_token: PageTokenParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: StockQuotesRespSingleSchema,
          examples: {
            quotes: {
              value: {
                next_page_token: 'QUFQTHwyMDIyLTAxLTAzVDA5OjAwOjAwLjAyODI5NDQ1MVp8MjM3NjQ0Qzg=',
                quotes: [
                  {
                    ap: 0,
                    as: 0,
                    ax: ' ',
                    bp: 177.92,
                    bs: 4,
                    bx: 'Q',
                    c: ['Y'],
                    t: '2022-01-03T09:00:00.028160898Z',
                    z: 'C',
                  },
                  {
                    ap: 178.8,
                    as: 4,
                    ax: 'Q',
                    bp: 177.92,
                    bs: 4,
                    bx: 'Q',
                    c: ['R'],
                    t: '2022-01-03T09:00:00.028294451Z',
                    z: 'C',
                  },
                ],
                symbol: 'AAPL',
              },
            },
          },
        },
      },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV2StocksSymbolQuotesLatestRoute = createRoute({
  method: 'get',
  path: '/v2/stocks/{symbol}/quotes/latest',
  tags: ['Stock'],
  summary: 'Latest quote (single symbol)',
  description:
    'The latest quote endpoint provides the latest best bid and ask prices for a given ticker symbol.\n',
  operationId: 'StockLatestQuoteSingle',
  request: {
    params: z.object({ symbol: StockSymbolParamsSchema }),
    query: z.object({ feed: StockLatestFeedParamsSchema, currency: StockCurrencyParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: StockLatestQuotesRespSingleSchema,
          examples: {
            quotes: {
              value: {
                quote: {
                  ap: 172.7,
                  as: 1,
                  ax: 'Q',
                  bp: 172.6,
                  bs: 2,
                  bx: 'Q',
                  c: ['R'],
                  t: '2022-08-17T10:09:34.055031265Z',
                  z: 'C',
                },
                symbol: 'AAPL',
              },
            },
          },
        },
      },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV2StocksSymbolSnapshotRoute = createRoute({
  method: 'get',
  path: '/v2/stocks/{symbol}/snapshot',
  tags: ['Stock'],
  summary: 'Snapshot (single symbol)',
  description:
    'The snapshot endpoint provides the latest trade, latest quote, minute bar, daily bar, and previous daily bar data for a given ticker symbol.\n',
  operationId: 'StockSnapshotSingle',
  request: {
    params: z.object({ symbol: StockSymbolParamsSchema }),
    query: z.object({ feed: StockLatestFeedParamsSchema, currency: StockCurrencyParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: StockSnapshotsRespSingleSchema,
          examples: {
            snapshot: {
              value: {
                dailyBar: {
                  c: 173.03,
                  h: 173.71,
                  l: 171.6618,
                  n: 515139,
                  o: 172.62,
                  t: '2022-08-16T04:00:00Z',
                  v: 56457696,
                  vw: 172.743391,
                },
                latestQuote: {
                  ap: 172.65,
                  as: 1,
                  ax: 'Q',
                  bp: 172.51,
                  bs: 1,
                  bx: 'P',
                  c: ['R'],
                  t: '2022-08-17T10:19:30.805564086Z',
                  z: 'C',
                },
                latestTrade: {
                  c: ['@', 'T'],
                  i: 1040,
                  p: 172.55,
                  s: 229,
                  t: '2022-08-17T10:19:30.735811394Z',
                  x: 'Q',
                  z: 'C',
                },
                minuteBar: {
                  c: 172.6,
                  h: 172.65,
                  l: 172.6,
                  n: 57,
                  o: 172.65,
                  t: '2022-08-17T10:18:00Z',
                  v: 3746,
                  vw: 172.618377,
                },
                prevDailyBar: {
                  c: 173.19,
                  h: 173.39,
                  l: 171.345,
                  n: 501626,
                  o: 171.5,
                  t: '2022-08-15T04:00:00Z',
                  v: 54091719,
                  vw: 172.625371,
                },
                symbol: 'AAPL',
              },
            },
          },
        },
      },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV2StocksSymbolTradesRoute = createRoute({
  method: 'get',
  path: '/v2/stocks/{symbol}/trades',
  tags: ['Stock'],
  summary: 'Historical trades (single symbol)',
  description:
    'The historical stock trades API provides trade data for a stock symbol between the specified dates.',
  operationId: 'StockTradeSingle',
  request: {
    params: z.object({ symbol: StockSymbolParamsSchema }),
    query: z.object({
      start: StartParamsSchema,
      end: EndParamsSchema,
      limit: LimitParamsSchema,
      asof: StockAsofParamsSchema,
      feed: StockHistoricalFeedParamsSchema,
      currency: StockCurrencyParamsSchema,
      page_token: PageTokenParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: StockTradesRespSingleSchema,
          examples: {
            trades: {
              value: {
                next_page_token:
                  'QUFQTHwyMDIyLTAxLTAzVDE3OjAwOjAwLjAyOTU5MTQ3Nlp8UXwwOTIyMzM3MjAzNjg1NDg0OTY0Mg==',
                symbol: 'AAPL',
                trades: [
                  {
                    c: ['@', 'I'],
                    i: 73833,
                    p: 181.47,
                    s: 1,
                    t: '2022-01-03T17:00:00.029591476Z',
                    x: 'Q',
                    z: 'C',
                  },
                  {
                    c: ['@', 'I'],
                    i: 73834,
                    p: 181.47,
                    s: 1,
                    t: '2022-01-03T17:00:00.029591476Z',
                    x: 'Q',
                    z: 'C',
                  },
                ],
              },
            },
          },
        },
      },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV2StocksSymbolTradesLatestRoute = createRoute({
  method: 'get',
  path: '/v2/stocks/{symbol}/trades/latest',
  tags: ['Stock'],
  summary: 'Latest trade (single symbol)',
  description:
    'The latest trade endpoint provides the latest trade for the given ticker symbol.\n\nTrades with any conditions that causes them to not update the bar price are excluded. For example a trade with condition `I` (odd lot) will never appear on this endpoint. You can find the complete list of excluded conditions in [this FAQ](https://docs.alpaca.markets/docs/market-data-faq#how-are-bars-aggregated).',
  operationId: 'StockLatestTradeSingle',
  request: {
    params: z.object({ symbol: StockSymbolParamsSchema }),
    query: z.object({ feed: StockLatestFeedParamsSchema, currency: StockCurrencyParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: StockLatestTradesRespSingleSchema,
          examples: {
            trade: {
              value: {
                symbol: 'AAPL',
                trade: {
                  c: ['@', 'T'],
                  i: 689,
                  p: 172.6,
                  s: 100,
                  t: '2022-08-17T09:53:16.845580544Z',
                  x: 'P',
                  z: 'C',
                },
              },
            },
          },
        },
      },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV2StocksAuctionsRoute = createRoute({
  method: 'get',
  path: '/v2/stocks/auctions',
  tags: ['Stock'],
  summary: 'Historical auctions',
  description:
    'The historical auctions endpoint provides auction prices for a list of stock symbols between the specified dates.\n',
  operationId: 'StockAuctions',
  request: {
    query: z.object({
      symbols: StockSymbolsParamsSchema,
      start: StartParamsSchema,
      end: EndParamsSchema,
      limit: LimitParamsSchema,
      asof: StockAsofParamsSchema,
      feed: StockAuctionFeedParamsSchema,
      currency: StockCurrencyParamsSchema,
      page_token: PageTokenParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: StockAuctionsRespSchema,
          examples: {
            auction: {
              value: {
                auctions: {
                  AAPL: [
                    {
                      c: [
                        { c: '6', p: 138.36, t: '2022-10-12T20:00:00.120649216Z', x: 'P' },
                        { c: 'M', p: 138.36, t: '2022-10-12T20:00:00.125925888Z', x: 'P' },
                        { c: '6', p: 138.34, t: '2022-10-12T20:00:00.875570864Z', x: 'Q' },
                        { c: 'M', p: 138.34, t: '2022-10-12T20:00:00.875603021Z', x: 'Q' },
                      ],
                      d: '2022-10-12',
                      o: [
                        { c: 'Q', p: 139.12, t: '2022-10-12T13:30:00.188390144Z', x: 'P' },
                        { c: 'O', p: 138.99, t: '2022-10-12T13:30:01.474665705Z', x: 'Q' },
                        { c: 'Q', p: 138.99, t: '2022-10-12T13:30:01.475216565Z', x: 'Q' },
                      ],
                    },
                    {
                      c: [{ c: 'M', p: 142.94, t: '2022-10-13T20:00:00.166980864Z', x: 'P' }],
                      d: '2022-10-13',
                      o: [
                        { c: 'Q', p: 134.8, t: '2022-10-13T13:30:00.20304384Z', x: 'P' },
                        { c: 'O', p: 135, t: '2022-10-13T13:30:01.688322951Z', x: 'Q' },
                        { c: 'Q', p: 135, t: '2022-10-13T13:30:01.699259366Z', x: 'Q' },
                      ],
                    },
                  ],
                  TSLA: [
                    {
                      c: [
                        { c: 'M', p: 217.23, t: '2022-10-12T20:00:00.124164096Z', x: 'P' },
                        { c: '6', p: 217.24, t: '2022-10-12T20:00:00.469874365Z', x: 'Q' },
                        { c: 'M', p: 217.24, t: '2022-10-12T20:00:00.469912641Z', x: 'Q' },
                      ],
                      d: '2022-10-12',
                      o: [
                        { c: 'Q', p: 215.39, t: '2022-10-12T13:30:00.065736192Z', x: 'P' },
                        { c: 'O', p: 215.79, t: '2022-10-12T13:30:01.349399539Z', x: 'Q' },
                        { c: 'Q', p: 215.79, t: '2022-10-12T13:30:01.349965972Z', x: 'Q' },
                      ],
                    },
                    {
                      c: [{ c: 'M', p: 221.7, t: '2022-10-13T20:00:00.152902912Z', x: 'P' }],
                      d: '2022-10-13',
                      o: [
                        { c: 'Q', p: 208.37, t: '2022-10-13T13:30:00.068034304Z', x: 'P' },
                        { c: 'O', p: 208.49, t: '2022-10-13T13:30:01.079567733Z', x: 'Q' },
                        { c: 'Q', p: 208.49, t: '2022-10-13T13:30:01.090802222Z', x: 'Q' },
                      ],
                    },
                  ],
                },
                next_page_token: 'MjAyMi0xMC0xM1QyMDowMDowMC4xNTI5MDI5MTJafFA=',
              },
            },
          },
        },
      },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV2StocksBarsRoute = createRoute({
  method: 'get',
  path: '/v2/stocks/bars',
  tags: ['Stock'],
  summary: 'Historical bars',
  description:
    'The historical stock bars API provides aggregates for a list of stock symbols between the specified dates.\n\nThe returned results are sorted by symbol first, then by bar timestamp. This means that you are likely to see only one symbol in your first response if there are enough bars for that symbol to hit the limit you requested.\n\nIn these situations, if you keep requesting again with the `next_page_token` from the previous response, you will eventually reach the other symbols if any bars were found for them.',
  operationId: 'StockBars',
  request: {
    query: z.object({
      symbols: StockSymbolsParamsSchema,
      timeframe: TimeframeParamsSchema,
      start: StartParamsSchema,
      end: EndParamsSchema,
      limit: LimitParamsSchema,
      adjustment: StockAdjustmentParamsSchema,
      asof: StockAsofParamsSchema,
      feed: StockHistoricalFeedParamsSchema,
      currency: StockCurrencyParamsSchema,
      page_token: PageTokenParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: StockBarsRespSchema,
          examples: {
            bars: {
              value: {
                bars: {
                  AAPL: [
                    {
                      c: 178.21,
                      h: 178.26,
                      l: 178.21,
                      n: 65,
                      o: 178.26,
                      t: '2022-01-03T09:00:00Z',
                      v: 1118,
                      vw: 178.235733,
                    },
                  ],
                },
                next_page_token: 'QUFQTHxNfDIwMjItMDEtMDNUMDk6MDA6MDAuMDAwMDAwMDAwWg==',
              },
            },
          },
        },
      },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV2StocksBarsLatestRoute = createRoute({
  method: 'get',
  path: '/v2/stocks/bars/latest',
  tags: ['Stock'],
  summary: 'Latest bars',
  description:
    'The latest bars endpoint provides the latest minute bar for the given ticker symbols.\n',
  operationId: 'StockLatestBars',
  request: {
    query: z.object({
      symbols: StockSymbolsParamsSchema,
      feed: StockLatestFeedParamsSchema,
      currency: StockCurrencyParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: StockLatestBarsRespSchema,
          examples: {
            bars: {
              value: {
                bars: {
                  AAPL: {
                    c: 172.79,
                    h: 172.81,
                    l: 172.78,
                    n: 20,
                    o: 172.81,
                    t: '2022-08-17T08:58:00Z',
                    v: 1002,
                    vw: 172.791417,
                  },
                  TSLA: {
                    c: 914.3,
                    h: 914.3,
                    l: 914.3,
                    n: 20,
                    o: 914.3,
                    t: '2022-08-17T08:57:00Z',
                    v: 751,
                    vw: 914.294634,
                  },
                },
              },
            },
          },
        },
      },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV2StocksMetaConditionsTicktypeRoute = createRoute({
  method: 'get',
  path: '/v2/stocks/meta/conditions/{ticktype}',
  tags: ['Stock'],
  summary: 'Condition codes',
  description: 'Returns the mapping between the condition codes and names.',
  operationId: 'StockMetaConditions',
  request: {
    params: z.object({
      ticktype: z
        .enum(['trade', 'quote'])
        .openapi({
          param: {
            description: 'The type of ticks.',
            in: 'path',
            name: 'ticktype',
            required: true,
            schema: { enum: ['trade', 'quote'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      tape: z
        .enum(['A', 'B', 'C'])
        .openapi({
          param: {
            description: 'The one character name of the tape.',
            in: 'query',
            name: 'tape',
            required: true,
            schema: { enum: ['A', 'B', 'C'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: StockConditionsSchema } },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV2StocksMetaExchangesRoute = createRoute({
  method: 'get',
  path: '/v2/stocks/meta/exchanges',
  tags: ['Stock'],
  summary: 'Exchange codes',
  description:
    'Returns the mapping between the stock exchange codes and the corresponding exchange names.\n',
  operationId: 'StockMetaExchanges',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: StockExchangesSchema } },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV2StocksQuotesRoute = createRoute({
  method: 'get',
  path: '/v2/stocks/quotes',
  tags: ['Stock'],
  summary: 'Historical quotes',
  description:
    'The historical stock quotes API provides quote data for a list of stock symbols between the specified dates.\n\nThe returned results are sorted by symbol first, then by the quote timestamp. This means that you are likely to see only one symbol in your first response if there are enough quotes for that symbol to hit the limit you requested.\n\nIn these situations, if you keep requesting again with the `next_page_token` from the previous response, you will eventually reach the other symbols if any quotes were found for them.',
  operationId: 'StockQuotes',
  request: {
    query: z.object({
      symbols: StockSymbolsParamsSchema,
      start: StartParamsSchema,
      end: EndParamsSchema,
      limit: LimitParamsSchema,
      asof: StockAsofParamsSchema,
      feed: StockHistoricalFeedParamsSchema,
      currency: StockCurrencyParamsSchema,
      page_token: PageTokenParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: StockQuotesRespSchema,
          examples: {
            quotes: {
              value: {
                next_page_token: 'QUFQTHwyMDIyLTAxLTAzVDA5OjAwOjAwLjAyODI5NDQ1MVp8MjM3NjQ0Qzg=',
                quotes: {
                  AAPL: [
                    {
                      ap: 0,
                      as: 0,
                      ax: ' ',
                      bp: 177.92,
                      bs: 4,
                      bx: 'Q',
                      c: ['Y'],
                      t: '2022-01-03T09:00:00.028160898Z',
                      z: 'C',
                    },
                    {
                      ap: 178.8,
                      as: 4,
                      ax: 'Q',
                      bp: 177.92,
                      bs: 4,
                      bx: 'Q',
                      c: ['R'],
                      t: '2022-01-03T09:00:00.028294451Z',
                      z: 'C',
                    },
                  ],
                },
              },
            },
          },
        },
      },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV2StocksQuotesLatestRoute = createRoute({
  method: 'get',
  path: '/v2/stocks/quotes/latest',
  tags: ['Stock'],
  summary: 'Latest quotes',
  description:
    'The latest quotes endpoint provides the latest best bid and ask prices for the given ticker symbols.\n',
  operationId: 'StockLatestQuotes',
  request: {
    query: z.object({
      symbols: StockSymbolsParamsSchema,
      feed: StockLatestFeedParamsSchema,
      currency: StockCurrencyParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: StockLatestQuotesRespSchema,
          examples: {
            quotes: {
              value: {
                quotes: {
                  AAPL: {
                    ap: 172.7,
                    as: 1,
                    ax: 'Q',
                    bp: 172.62,
                    bs: 2,
                    bx: 'Q',
                    c: ['R'],
                    t: '2022-08-17T10:07:40.286587431Z',
                    z: 'C',
                  },
                  TSLA: {
                    ap: 911.6,
                    as: 1,
                    ax: 'Q',
                    bp: 911.3,
                    bs: 1,
                    bx: 'K',
                    c: ['R'],
                    t: '2022-08-17T10:07:49.387064037Z',
                    z: 'C',
                  },
                },
              },
            },
          },
        },
      },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV2StocksSnapshotsRoute = createRoute({
  method: 'get',
  path: '/v2/stocks/snapshots',
  tags: ['Stock'],
  summary: 'Snapshots',
  description:
    'The snapshot endpoint for multiple tickers provides the latest trade, latest quote, minute bar, daily bar, and previous daily bar data for each given ticker symbol.\n',
  operationId: 'StockSnapshots',
  request: {
    query: z.object({
      symbols: StockSymbolsParamsSchema,
      feed: StockLatestFeedParamsSchema,
      currency: StockCurrencyParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: StockSnapshotsRespSchema,
          examples: {
            snapshots: {
              value: {
                AAPL: {
                  dailyBar: {
                    c: 173.03,
                    h: 173.71,
                    l: 171.6618,
                    n: 515139,
                    o: 172.62,
                    t: '2022-08-16T04:00:00Z',
                    v: 56457696,
                    vw: 172.743391,
                  },
                  latestQuote: {
                    ap: 172.7,
                    as: 5,
                    ax: 'Q',
                    bp: 172.6,
                    bs: 2,
                    bx: 'Q',
                    c: ['R'],
                    t: '2022-08-17T10:18:27.052763263Z',
                    z: 'C',
                  },
                  latestTrade: {
                    c: ['@', 'T'],
                    i: 1011,
                    p: 172.61,
                    s: 160,
                    t: '2022-08-17T10:18:24.114694956Z',
                    x: 'Q',
                    z: 'C',
                  },
                  minuteBar: {
                    c: 172.69,
                    h: 172.69,
                    l: 172.69,
                    n: 3,
                    o: 172.69,
                    t: '2022-08-17T10:16:00Z',
                    v: 106,
                    vw: 172.688113,
                  },
                  prevDailyBar: {
                    c: 173.19,
                    h: 173.39,
                    l: 171.345,
                    n: 501626,
                    o: 171.5,
                    t: '2022-08-15T04:00:00Z',
                    v: 54091719,
                    vw: 172.625371,
                  },
                },
                TSLA: {
                  dailyBar: {
                    c: 919.69,
                    h: 944,
                    l: 908.65,
                    n: 805572,
                    o: 935,
                    t: '2022-08-16T04:00:00Z',
                    v: 29378774,
                    vw: 925.215087,
                  },
                  latestQuote: {
                    ap: 911.75,
                    as: 4,
                    ax: 'P',
                    bp: 911.31,
                    bs: 1,
                    bx: 'Q',
                    c: ['R'],
                    t: '2022-08-17T10:18:23.84717767Z',
                    z: 'C',
                  },
                  latestTrade: {
                    c: ['@', 'T'],
                    i: 2047,
                    p: 911.99,
                    s: 100,
                    t: '2022-08-17T10:13:12.952851456Z',
                    x: 'P',
                    z: 'C',
                  },
                  minuteBar: {
                    c: 911.99,
                    h: 911.99,
                    l: 911.99,
                    n: 64,
                    o: 911.99,
                    t: '2022-08-17T10:13:00Z',
                    v: 740,
                    vw: 911.780405,
                  },
                  prevDailyBar: {
                    c: 927.96,
                    h: 939.4,
                    l: 903.69,
                    n: 825109,
                    o: 905.32,
                    t: '2022-08-15T04:00:00Z',
                    v: 29786389,
                    vw: 923.982755,
                  },
                },
              },
            },
          },
        },
      },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV2StocksTradesRoute = createRoute({
  method: 'get',
  path: '/v2/stocks/trades',
  tags: ['Stock'],
  summary: 'Historical trades',
  description:
    'The historical stock trades API provides trade data for a list of stock symbols between the specified dates.\n\nThe returned results are sorted by symbol first then by trade timestamp. This means that you are likely to see only one symbol in your first response if there are enough trades for that symbol to hit the limit you requested.\n\nIn these situations, if you keep requesting again with the `next_page_token` from the previous response, you will eventually reach the other symbols if any trades were found for them.',
  operationId: 'StockTrades',
  request: {
    query: z.object({
      symbols: StockSymbolsParamsSchema,
      start: StartParamsSchema,
      end: EndParamsSchema,
      limit: LimitParamsSchema,
      asof: StockAsofParamsSchema,
      feed: StockHistoricalFeedParamsSchema,
      currency: StockCurrencyParamsSchema,
      page_token: PageTokenParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: StockTradesRespSchema,
          examples: {
            trades: {
              value: {
                next_page_token:
                  'QUFQTHwyMDIyLTAxLTAzVDA5OjAwOjAwLjI0NDgzOTY4MFp8UHwwOTIyMzM3MjAzNjg1NDc3NTgxMA==',
                trades: {
                  AAPL: [
                    {
                      c: ['@', 'T'],
                      i: 1,
                      p: 178.26,
                      s: 246,
                      t: '2022-01-03T09:00:00.086175744Z',
                      x: 'P',
                      z: 'C',
                    },
                    {
                      c: ['@', 'F', 'T', 'I'],
                      i: 2,
                      p: 178.26,
                      s: 1,
                      t: '2022-01-03T09:00:00.24483968Z',
                      x: 'P',
                      z: 'C',
                    },
                  ],
                },
              },
            },
          },
        },
      },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})

export const getV2StocksTradesLatestRoute = createRoute({
  method: 'get',
  path: '/v2/stocks/trades/latest',
  tags: ['Stock'],
  summary: 'Latest trades',
  description:
    'The latest trades endpoint provides the latest trades for the given ticker symbols.\n\nTrades with any conditions that causes them to not update the bar price are excluded. For example a trade with condition `I` (odd lot) will never appear on this endpoint. You can find the complete list of excluded conditions in [this FAQ](https://docs.alpaca.markets/docs/market-data-faq#how-are-bars-aggregated).',
  operationId: 'StockLatestTrades',
  request: {
    query: z.object({
      symbols: StockSymbolsParamsSchema,
      feed: StockLatestFeedParamsSchema,
      currency: StockCurrencyParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: StockLatestTradesRespSchema,
          examples: {
            trades: {
              value: {
                trades: {
                  AAPL: {
                    c: ['@', 'F', 'T'],
                    i: 826,
                    p: 172.78,
                    s: 100,
                    t: '2022-08-17T09:50:43.361102308Z',
                    x: 'Q',
                    z: 'C',
                  },
                },
              },
            },
          },
        },
      },
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
  security: [{ apiKey: [], apiSecret: [] }, { BasicAuth: [] }],
})
